import {NextResponse} from "next/server";
import {EventProps} from "@/app/types";

export const GET = async() => {

    let res: Response = await fetch("https://api.h-9.info/event")
    let eventList = await res.json()
    return NextResponse.json({ content: eventList })
}
