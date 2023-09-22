"use client"
import AgentRadioGroup from "./AgentRadioGroup";
import {useEffect, useState} from "react";

const AgentArea = () => {
  const [event, setEvent]: any = useState({ content: { results: [] } })
  useEffect(() => {
    (async() => {
      // let res: Response = await fetch("/api/20220628/notion/database?databaseId=f8da8a72259649c0a0754dfa695fd09b", {method: "POST"})
      // let result:GetDatabaseResponse = await res.json()
      // setEvent(result)
    })()
  })

  return (
    <div className="w-full px-2 py-1">
      <div>
        転職状況
      </div>
      <AgentRadioGroup />
      <table className="w-full text-sm text-left text-gray-400">
        <thead className="text-xs uppercase bg-indigo-400 text-gray-900">
        <tr>
          <th className="px-6 py-3 border border-gray-400" scope="col">エージェント区分</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">会社名</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">カジュアル面談</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">書類選考</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">コーディングテスト</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">筆記試験</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">適性検査</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">一次面接</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">二次面接</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">三次面接</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">最終面接</th>
          <th className="px-6 py-3 border border-gray-400" scope="col">備考</th>
        </tr>
        </thead>
        <tbody>
        <tr className="border-b text-gray-900">
          <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">エージェント</td>
          <td className="px-6 py-4 border">A社</td>
          <td className="px-6 py-4 border">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4 border">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4 border">
            <div className="flex flex-col justify-center items-center">
              <div>合格</div>
              <div className="text-[6px]">(2023/07/21)</div>
            </div>
          </td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
          <td className="px-6 py-4 border"></td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AgentArea

