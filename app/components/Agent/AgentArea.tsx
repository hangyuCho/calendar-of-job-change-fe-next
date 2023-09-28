"use client"
import {useEffect, useState} from "react";
import { AgentRow, DummyRow } from "@/app/components/Agent"
import {
    EventStatusProps,
    JobChangeProcessProps,
    AgentDataProps
} from "@/app/types"


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
          <th className="border border-gray-400 text-[8px]" scope="col">No</th>
          <th className="border border-gray-400 text-[8px]" scope="col">エージェント会社</th>
          <th className="border border-gray-400 text-[8px]" scope="col">選考会社</th>
          {jobChangeProcessList.map((it: JobChangeProcessProps, i:number) => <th key={i} className="border border-gray-400 text-[8px]" scope="col">{it.jobChangeProcessName}</th>)}
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





export default AgentArea

