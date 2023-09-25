import {NextResponse} from "next/server";
import {EventProps} from "@/app/types";

export const GET = async() => {

    let res: Response = await fetch("https://h-9.info/jc-cms/job/change/process")
    let jobChangeProcessList = await res.json()
    return NextResponse.json({ content: jobChangeProcessList })
}
