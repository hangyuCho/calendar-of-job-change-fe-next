
import {EventProps, EventScheduleProps} from "@/app/types"
import {isEqualDate, toUTC} from "@/app/utils"

const ScheduleByEvent = ({targetDate, eventList}:EventScheduleProps) => {

  const eventItem : EventProps | undefined = eventList.find((el: EventProps) => isEqualDate(toUTC(el.scheduleStartAt), targetDate))

  return (
    <>
      {
        !eventItem ? null : 
                       (<>
                         <div className="flex justify-start bg-indigo-200 rounded-sm border-l-4 border-indigo-500 items-center gap-2 text-xs w-full text-indigo-500">
                           <span className="text-[8px]">{eventItem.agentCompanyClientCompanyRelation.clientCompanyMaster.clientCompanyName}</span>
                         </div>
                       </>)
      }
    </>
  )
}

export default ScheduleByEvent
