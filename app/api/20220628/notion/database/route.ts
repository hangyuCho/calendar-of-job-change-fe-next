import {NextResponse} from "next/server";
import {getDatabases, WithAuth} from "@/app/utils/notionUtils";
import {
    GetDatabaseParameters,
    GetDatabaseResponse,
    QueryDatabaseParameters, QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";

export const GET = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { retrieve } = getDatabases()
    const params:WithAuth<GetDatabaseParameters> = {
        database_id: searchParams.get("databaseId") ?? ""
    }
    const response:GetDatabaseResponse = await retrieve(params)
    return NextResponse.json({ content: response})
}
export const POST = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { query } = getDatabases()
    const params:WithAuth<QueryDatabaseParameters> = {
        database_id: searchParams.get("databaseId") ?? ""
    }
    const response:QueryDatabaseResponse = await query(params)
    return NextResponse.json({ content: response})
}