
import { ScheduleProps } from "../../types"
import { getHolidayItem } from "../../utils"

const ScheduleByHoliday = ({targetDate}:ScheduleProps) => {

  const holidayItem = getHolidayItem(targetDate)

  return (
    <>
      {
        !holidayItem ? null : 
                       (<>
                         <div className="flex justify-start bg-purple-200 rounded-sm border-l-4 border-purple-500 items-center gap-2 text-xs w-full text-purple-500">
                           <span className="text-[8px]">{holidayItem.summary}</span>
                         </div>
                       </>)
      }
    </>
  )
}

export default ScheduleByHoliday
