import {NextResponse} from "next/server";
import {EventProps} from "@/app/types";

export const GET = async() => {

    let res: Response = await fetch("https://h-9.info/jc-cms/event/status/list",
        {
            cache: "no-store"
        })
    let eventStatusMap = await res.json()
    return NextResponse.json({ content: eventStatusMap })
}
