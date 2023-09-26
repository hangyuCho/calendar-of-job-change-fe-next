"use client"
import {useEffect, useState} from "react";
import {MeetingCategoryType} from "@/app/enum";

interface EventStatusProps {
      "id": number,
      "scheduleStartAt": Date,
      "scheduleEndAt": Date,
      "agentCompanyClientCompanyRelation": {
          "id": number,
          "agentCompanyMaster": {
              "id": number,
              "agentName": string
          },
          "clientCompanyMaster": {
              "id": number,
              "clientCompanyName": string
          }
      },
      "jobChangeProcess": {
        "id": number,
        "jobChangeProcessName": string
      },
      "meetingLink": string,
      "meetingCategoryType": MeetingCategoryType
}

interface AgentRowProps {
    rowNumber: number
    eventStatusList: Array<EventStatusProps>
    eventStatusStepQty: number
}

interface AgentDataProps {
    id?: number
    eventStatus: EventStatusProps
}

interface JobChangeProcessProps {
    id: number
    jobChangeProcessName: string
}

const AgentArea = () => {
  const [eventStatusList, setEventStatsList]: any = useState<Array<EventStatusProps> | []>([] )
  const [jobChangeProcessList, setJobChangeProcessList]: any = useState<Array<AgentDataProps> | []>([] )
  useEffect(() => {
    (async() => {
      let resByEventStatus = await (await fetch("/api/20230925/event/status/list", {method: "GET"})).json()
      setEventStatsList(Object.values(resByEventStatus.content.results))

      let resByJobChangeProcess = await (await fetch("/api/20230925/job/change/process", {method: "GET"})).json()
      setJobChangeProcessList(resByJobChangeProcess.content.results)
    })()
  },[])

  return (
    <div className="px-2 py-1 bg-white rounded-md text-[8px]">
      <div className="text-lg font-bold">
        転職状況
      </div>
      <div>
        <span className="flex items-center text-sm font-medium text-gray-900"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>完了タスク</span>
      </div>
      <table className="block text-sm text-left text-gray-400 overflow-x-scroll">
        <thead className="text-xs uppercase bg-indigo-400 text-gray-900">
        <tr>
          <th className="border border-gray-400 text-[8px] w-1" scope="col">No</th>
          <th className="border border-gray-400 text-[8px]" scope="col">エージェント会社</th>
          <th className="border border-gray-400 text-[8px]" scope="col">選考会社</th>
          {jobChangeProcessList.map((it: JobChangeProcessProps, i:number) => (<th key={i} className="border border-gray-400 text-[8px]" scope="col">{it.jobChangeProcessName}</th>))}
        </tr>
        </thead>
        <tbody>
        {
          eventStatusList.length > 0 ? eventStatusList
                  .sort((a: Array<EventStatusProps>, b: Array<EventStatusProps>) => {
                      return a[0].agentCompanyClientCompanyRelation.clientCompanyMaster.id - b[0].agentCompanyClientCompanyRelation.clientCompanyMaster.id
                  })
                  .map((eventStatusList: Array<EventStatusProps>, i:number) => <AgentRow key={i} eventStatusList={eventStatusList} eventStatusStepQty={jobChangeProcessList.length} rowNumber={i} />)
                                     : <DummyRow eventStatusStepQty={jobChangeProcessList.length}/>
        }
        </tbody>
      </table>
    </div>
  )
}

const AgentData = ({eventStatus, id}: AgentDataProps) => {
    return (
        <td key={id} className="border text-[8px]">
            <div className="flex flex-col justify-center items-center">
                <span className="flex items-center text-sm font-medium text-gray-900">
                    <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>
                </span>
                <div>
                    <label htmlFor="green-checkbox" className="ml-2 text-[6px] text-gray-900">({new Date(eventStatus.scheduleStartAt).toLocaleDateString("en-ZA")})</label>
                </div>
            </div>
        </td>
    )
}

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

interface DummyRowProps {
    eventStatusStepQty: number
}

const DummyRow = ({eventStatusStepQty}: DummyRowProps) => {
  return (
      <tr className="border-b text-gray-900">
        <td scope="row" colSpan={eventStatusStepQty + 2} className="px-6 py-4 font-medium whitespace-nowrap">
            <button disabled type="button" className="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 inline-flex items-center">
                <svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                </svg>
                Loading...
            </button>
        </td>
      </tr>
  )
}

export default AgentArea

