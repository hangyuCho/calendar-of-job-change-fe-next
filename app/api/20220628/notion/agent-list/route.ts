import {getBlocks, getDatabases} from "@/app/utils/notionUtils";
import {
    DatabaseObjectResponse,
    PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse,
    QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";
import {NextResponse} from "next/server";

export const POST = async(
    req: Request,
) => {
    //const { searchParams } = new URL(req.url)
    //const { retrieve } = getBlocks()
    //const params:WithAuth<GetBlockParameters> = {
    //    block_id: searchParams.get("blockId") ?? ""
    //}
    //const response:GetBlockResponse = await retrieve(params)


    let databaseInfo: QueryDatabaseResponse = await getDatabases().query({
        database_id: "1e2995942f584766b1dd6e69a3276858",
    })
    let rows = databaseInfo.results.map(async (it: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)) => {
        var {
            name,
            agent_pic_master,
            client_company_master
        } = (it as PageObjectResponse).properties

        const getBlock = (column: any) => {
            var {relation} = column

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
