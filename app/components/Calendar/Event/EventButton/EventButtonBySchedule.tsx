import {EventProps} from "@/app/types";
import {getHHorMM} from "@/app/utils";
import {ScheduleTypeByFromToOfDay, ScheduleTypeByHHMM} from "@/app/enum";

const EventButtonBySchedule = ( { eventItem, } : { eventItem: EventProps }) => {
    const content = `${
        eventItem.agentCompanyClientCompanyRelation.clientCompanyMaster.clientCompanyName
    } - ${
        eventItem.jobChangeProcess.jobChangeProcessName
    }`
    return (
        <div className="flex text-base">
            <button type="button"
                    className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-indigo-400 rounded-md">
              <span className="text-base flex flex-col justify-start items-start">
                <div>{`${
                    getHHorMM( eventItem, ScheduleTypeByFromToOfDay.START, ScheduleTypeByHHMM.HOURS )
                }:${
                    getHHorMM( eventItem, ScheduleTypeByFromToOfDay.START, ScheduleTypeByHHMM.MINUTES )
                }`}</div>
                <div>{`${
                    getHHorMM( eventItem, ScheduleTypeByFromToOfDay.END, ScheduleTypeByHHMM.HOURS )
                }:${
                    getHHorMM( eventItem, ScheduleTypeByFromToOfDay.END, ScheduleTypeByHHMM.MINUTES )
                }`}</div>
              </span>
                <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                <span className="text-base">{content}</span>
            </button>
        </div>
    )
}

export default EventButtonBySchedule