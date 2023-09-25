import type {
    NextApiResponse
} from "next"

const handler = (
    res: NextApiResponse
) => {
    res.status(200).json({ content: { results: [] } } )
}
export {
    handler as GET,
    handler as POST
}