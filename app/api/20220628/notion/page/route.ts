import {NextResponse} from "next/server";
import {getDatabases, getPages, WithAuth} from "@/app/utils/notionUtils";
import {
    GetPageParameters, GetPagePropertyParameters, GetPagePropertyResponse, GetPageResponse,
    QueryDatabaseParameters, QueryDatabaseResponse
} from "@notionhq/client/build/src/api-endpoints";

export const GET = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { retrieve } = getPages()
    const params:WithAuth<GetPageParameters> = {
        page_id: searchParams.get("pageId") ?? ""
    }
    const response:GetPageResponse = await retrieve(params)
    return NextResponse.json({ content: response})
}
export const POST = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { retrieve } = getPages().properties
    const params:WithAuth<GetPagePropertyParameters> = {
        page_id: searchParams.get("pageId") ?? "",
        property_id: searchParams.get("propertyId") ?? ""
    }
    const response:GetPagePropertyResponse = await retrieve(params)
    return NextResponse.json({ content: response})
}