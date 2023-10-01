import {GoogleCalendarProps} from "@/app/types";

const EventButtonByHoliday = (
    {
        holidayItem
    } : {
        holidayItem: GoogleCalendarProps
    }) => {
    return (
        <div className="flex text-base">
            <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
                <span className="text-base">終日</span>
                <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                <span className="text-base">{holidayItem.summary}</span>
            </button>
        </div>
    )
}

export default EventButtonByHoliday