import {getHolidayItem, isEqualDate, toUTC} from "@/app/utils";
import {EventProps, GoogleCalendarProps} from "@/app/types";
import EventButtonBySchedule from "@/app/components/Calendar/Event/EventButton/EventButtonBySchedule";
import EventButtonByHoliday from "@/app/components/Calendar/Event/EventButton/EventButtonByHoliday";


const EventButtonList = ({
                       selectedDate,
                       eventList
                   } : {
    selectedDate: number
    eventList: Array<EventProps>
}) => {

    const selectedDateByTime = new Date(selectedDate)
    const eventItem : EventProps = eventList.find((el: EventProps) => isEqualDate(toUTC(el.scheduleStartAt), selectedDateByTime))
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
                            { holidayItem ? ( <EventButtonByHoliday holidayItem={holidayItem} /> ) : null}
                            { eventItem ? ( <EventButtonBySchedule eventItem={eventItem} /> ) : null}
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

export default EventButtonList