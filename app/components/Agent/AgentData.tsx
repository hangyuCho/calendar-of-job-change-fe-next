import {AgentDataProps} from "@/app/types";
const AgentData = ({eventStatus, id}: AgentDataProps) => {
    return (
        <td key={id} className="border text-[6px] w-10">
            <div className="flex flex-col justify-center items-center">
                <span className="flex items-center text-sm font-medium text-gray-900">
                    <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
                </span>
                <div>
                    <label htmlFor="green-checkbox" className="text-[6px] text-gray-900">({new Date(eventStatus.scheduleStartAt).toLocaleDateString("en-ZA")})</label>
                </div>
            </div>
        </td>
    )
}

export default AgentData