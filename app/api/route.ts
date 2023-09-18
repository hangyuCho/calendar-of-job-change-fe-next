import type {
    NextApiRequest,
    NextApiResponse
} from "next"

type ResponseData = {
    content: string
}

const handler = (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    res.status(200).json({ content: "hoge"})
}
export default handler