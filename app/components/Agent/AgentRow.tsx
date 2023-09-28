import { AgentRowProps, EventStatusProps } from "@/app/types";
import {AgentData } from "@/app/components/Agent"

const AgentRow = ({eventStatusList, eventStatusStepQty, rowNumber}: AgentRowProps) => {
    let tableRows: Array<any> = []
    const { clientCompanyName } = eventStatusList[0].agentCompanyClientCompanyRelation.clientCompanyMaster
    const { agentName } = eventStatusList[0].agentCompanyClientCompanyRelation.agentCompanyMaster
    tableRows[0] = <td key={0} scope="row" className="text-[8px] border"> {rowNumber + 1} </td>
    tableRows[1] = <td key={1} scope="row" className="text-[8px] border"> {agentName} </td>
    tableRows[2] = <td key={2} className="border text-[8px]"> { clientCompanyName} </td>
    for (let i = 1; i <= (eventStatusStepQty) ; i++) {
        let idx = i + 2
        tableRows[idx] = <td key={idx} scope="row" className="px-6 py-4 font-medium border">-</td>
    }
    eventStatusList.forEach((eventStatus: EventStatusProps) => {
        let colIdx = eventStatus.jobChangeProcess.id +2
        tableRows[colIdx] = AgentData({"id": colIdx, "eventStatus": eventStatus})
    })
    return (
        <tr className="border-b text-gray-900">
            {tableRows ?? null}
        </tr>
    )
}

export default AgentRow