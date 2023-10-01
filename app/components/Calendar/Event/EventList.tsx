import {getHolidayItem, isEqualDate, toStringWithPad, toUTC} from "@/app/utils";
import {EventProps, GoogleCalendarProps} from "@/app/types";

const EventList = ({
    selectedDate,
    eventList
} : {
    selectedDate: number
    eventList: Array<EventProps>
}) => {

    const selectedDateByTime = new Date(selectedDate)
    const eventItem : EventProps | undefined = eventList.find((el: EventProps) => isEqualDate(toUTC(el.scheduleStartAt), selectedDateByTime))

    let scheduleStartAtHours: String | null = null
    let scheduleStartAtMinutes: String | null = null

    let scheduleEndAtHours: String | null = null
    let scheduleEndAtMinutes: String | null = null

    if (eventItem) {
        const {scheduleStartAt, scheduleEndAt } = eventItem

        scheduleStartAtHours = toStringWithPad(toUTC(scheduleStartAt)?.getHours(),2, "0") ?? null
        scheduleStartAtMinutes = toStringWithPad(toUTC(scheduleStartAt)?.getMinutes(), 2, "0") ?? null


        scheduleEndAtHours = toStringWithPad(toUTC(scheduleEndAt)?.getHours(),2, "0") ?? null
        scheduleEndAtMinutes = toStringWithPad(toUTC(scheduleEndAt)?.getMinutes(), 2, "0") ?? null
    }
    const holidayItem: GoogleCalendarProps = getHolidayItem(selectedDateByTime)
    return (
        <>
            {
                selectedDate !== 0 ? (
                        <div className="flex flex-col mx-2">
                            <div className="flex gap-2">
                                <span> {selectedDateByTime.getFullYear()}年{selectedDateByTime.getMonth() + 1}月{selectedDateByTime.getDate()}日(水)</span>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                { holidayItem ? (
                                    <div className="flex text-base">
                                        <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
                                            <span className="text-base">終日</span>
                                            <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                                            <span className="text-base">{holidayItem.summary}</span>
                                        </button>
                                    </div>
                                ) : null}
                                { eventItem ? (
                                    <div className="flex text-base">
                                        <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
                  <span className="text-base flex flex-col justify-start items-start">
                    <div>{`${scheduleStartAtHours}:${scheduleStartAtMinutes}`}</div>
                    <div>{`${scheduleEndAtHours}:${scheduleEndAtMinutes}`}</div>
                  </span>
                                            <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                                            <span className="text-base">{`${eventItem.agentCompanyClientCompanyRelation.clientCompanyMaster.clientCompanyName} - ${eventItem.jobChangeProcess.jobChangeProcessName}`}</span>
                                        </button>
                                    </div>
                                ) : null}
                                <div className="flex items-center gap-2 text-base">
                                    <button type="button" className="flex justify-start w-10/12 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
                                        <span className="text-base">+ 新しいイベント</span>
                                    </button>
                                    <button type="button" className="flex justify-center w-2/12 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
                                        <span>⚙️</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                    : null
            }
        </>
    )
}

export default EventList