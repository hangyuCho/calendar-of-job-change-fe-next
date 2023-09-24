import {delay, getBlock, getBlocks, getDatabases} from "@/app/utils/notionUtils";
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
        database_id: "f8da8a72259649c0a0754dfa695fd09b",
    })
    let rows = databaseInfo.results.slice(0,10).map(async(it) => {
        const {
            name,
            schedule_at,
            meeting_category_master,
            client_company,
            job_change_process_master,
            link
        } = (it as PageObjectResponse).properties

        let meetingCategory = await Promise.all(getBlock(meeting_category_master))
        await delay()
        let clientCompany = await Promise.all(getBlock(client_company))
        await delay()
        let jobChangeProcess = await Promise.all(getBlock(job_change_process_master))

        return {
            name: name,
            scheduleAt: schedule_at,
            meetingCategory: meetingCategory,
            clientCompany: clientCompany,
            jobChangeProcess: jobChangeProcess,
            link: link
        }
    })
    return NextResponse.json({ content: { results: [...await Promise.all(rows)] } })
}
