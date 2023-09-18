import {Client} from "@notionhq/client";

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

export type WithAuth<P> = P & {
    auth?: string;
};

