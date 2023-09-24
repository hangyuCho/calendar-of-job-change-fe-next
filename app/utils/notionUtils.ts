import {Client} from "@notionhq/client";
import {ChildPageBlockObjectResponse, GetBlockResponse} from "@notionhq/client/build/src/api-endpoints";

const getClient = () => {
    return new Client({ auth: process.env.NOTION_API_KEY })
}

export const getDatabases = () => {
    const { databases } = getClient()
    return databases
}

export const getPages = () => {
    const { pages } = getClient()
    return pages
}

export const getBlocks = () => {
    const { blocks } = getClient()
    return blocks
}
export const getBlock = (column: any) => {
    try {
        return column.relation.map(async(relation: { id: string })=> {
            let result: ChildPageBlockObjectResponse = await getBlocks().retrieve({ block_id: relation.id }) as ChildPageBlockObjectResponse
            return result.child_page.title
        })

    } catch (e) {
        console.log("error : !!!!! : ",e)
    }
}

export const delay = (time?:number|undefined) => new Promise((res) => setTimeout(res, time??300))

export type WithAuth<P> = P & {
    auth?: string;
};

