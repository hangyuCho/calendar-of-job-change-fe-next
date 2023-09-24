import {
    delay,
    getBlock,
    getDatabases
} from "@/app/utils/notionUtils";
import {
    DatabaseObjectResponse,
    PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse,
    QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";
import {NextResponse} from "next/server";

export const POST = async() => {
    let databaseInfo: QueryDatabaseResponse
    try {
        databaseInfo = await getDatabases().query({
            database_id: "1e2995942f584766b1dd6e69a3276858",
        })
    } catch (e) {
        console.error("notion api error from get databases: ", e)
        return
    }
    let rows = databaseInfo.results.map(async (it: (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)) => {
        const {
            name,
            agent_pic_master,
            client_company_master
        } = (it as PageObjectResponse).properties

        let agentPicMaster = await Promise.all(getBlock(agent_pic_master))
        await delay()
        let clientCompanyMaster = await Promise.all(getBlock(client_company_master))
        await delay()
        return {
            name: name,
            agentPicMaster: agentPicMaster,
            clientCompanyMaster: clientCompanyMaster
        }
    })
    return NextResponse.json({ content: { results: [...await Promise.all(rows)] } })
}
