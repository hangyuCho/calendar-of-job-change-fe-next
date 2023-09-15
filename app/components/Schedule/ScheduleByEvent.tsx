
import { ScheduleProps } from "../../types"
import { getEventItem } from "../../utils"

const ScheduleByEvent = ({targetDate}:ScheduleProps) => {

  const eventItem = getEventItem(targetDate)

  return (
    <>
      {
        !eventItem ? null : 
                       (<>
                         <div className="flex justify-start bg-purple-200 rounded-sm border-l-4 border-purple-500 items-center gap-2 text-xs w-full text-purple-500">
                           <span className="text-[8px]">{eventItem.summary}</span>
                         </div>
                       </>)
      }
    </>
  )
}

export default ScheduleByEvent
