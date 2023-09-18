import {NextResponse} from "next/server";
import {getBlocks, WithAuth} from "@/app/utils/notionUtils";
import {
    GetBlockParameters,
    GetBlockResponse, ListBlockChildrenParameters, ListBlockChildrenResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const GET = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { retrieve } = getBlocks()
    const params:WithAuth<GetBlockParameters> = {
        block_id: searchParams.get("blockId") ?? ""
    }
    const response:GetBlockResponse = await retrieve(params)
    return NextResponse.json({ content: response})
}
export const POST = async(
    req: Request,
) => {
    const { searchParams } = new URL(req.url)
    const { list } = getBlocks().children
    const params:WithAuth<ListBlockChildrenParameters> = {
        block_id: searchParams.get("blockId") ?? ""
    }
    const response:ListBlockChildrenResponse = await list(params)
    return NextResponse.json({ content: response})
}