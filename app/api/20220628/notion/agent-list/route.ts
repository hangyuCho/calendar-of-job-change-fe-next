import {
    getBlock, getBlocks,
    getDatabases
} from "@/app/utils/notionUtils";
import {
    DatabaseObjectResponse,
    PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse,
    QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";
import {NextResponse} from "next/server";

export const POST = async() => {
    let databaseInfo: QueryDatabaseResponse = await getDatabases().query({
        database_id: "f8da8a72259649c0a0754dfa695fd09b",
    })
    let rows = databaseInfo.results.map(async (it: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)) => {
        const {
            name,
            agent_pic_master,
            client_company_master
        } = (it as PageObjectResponse).properties

        const getBlock = (column: any) => {
            const {relation} = column

            return relation.map(async(relation: { id: string })=>
                ((await getBlocks().retrieve({ block_id: relation.id })) as any).child_page.title)
        }

        return {
            name: name,
            agentPicMaster: await Promise.all(getBlock(agent_pic_master)),
            clientCompanyMaster: await Promise.all(getBlock(client_company_master))
        }
    })
    return NextResponse.json({ content: { results: [...await Promise.all(rows)] } })
}
