import {getBlock, getBlocks, getDatabases} from "@/app/utils/notionUtils";
import {
    DatabaseObjectResponse,
    PageObjectResponse, PartialDatabaseObjectResponse, PartialPageObjectResponse,
    QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";
import {NextResponse} from "next/server";

export const POST = async(
    req: Request,
) => {

    let databaseInfo: QueryDatabaseResponse = await getDatabases().query({
        database_id: "1e2995942f584766b1dd6e69a3276858",
    })
    let rows = databaseInfo.results.slice(0,10).map(async(it) => {
        const {
            name,
            schedule_at,
            meeting_category_master,
            client_company,
            job_change_process_master,
            client_company_category_master,
            link
        } = (it as PageObjectResponse).properties

        return {
            name: name,
            scheduleAt: schedule_at,
            meetingCategory: await Promise.all(getBlock(meeting_category_master)),
            clientCompany: await Promise.all(getBlock(client_company)),
            jobChangeProcess: await Promise.all(getBlock(job_change_process_master)),
            clientCompanyCategory: await Promise.all(getBlock(client_company_category_master)),
            link: link
        }
    })
    //console.log(await Promise.all(rows))
    return NextResponse.json({ content: { results: [...await Promise.all(rows)] } })
}
