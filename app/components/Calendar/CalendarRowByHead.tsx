
import { FC } from "react"
const CalendarRowByHead:FC = ()  => {
  return (
    <div className="flex">
      <div className="w-[14.3%] flex justify-center">日</div>
      <div className="w-[14.3%] flex justify-center">月</div>
      <div className="w-[14.3%] flex justify-center">火</div>
      <div className="w-[14.3%] flex justify-center">水</div>
      <div className="w-[14.3%] flex justify-center">木</div>
      <div className="w-[14.3%] flex justify-center">金</div>
      <div className="w-[14.3%] flex justify-center">土</div>
    </div>
  )
}

export default CalendarRowByHead
