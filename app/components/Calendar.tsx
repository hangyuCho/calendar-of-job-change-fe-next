
"use client"
import { useState } from "react"
import { CalendarRowByHead, CalendarRowByDays } from "./Calendar/index"
import { useSelector } from "react-redux"
import { getHolidayItem, getEventItem } from "../utils"

const Calendar = () => {
  
  let [currentDate, setCurrentDate] = useState(new Date())
  const selectedDate:number = useSelector((state: any) => state.schedule.time)
  let selectedDateByTime = new Date(selectedDate)

  const onMoveToToday = () => { setCurrentDate( new Date()) }

  const onPrevMonth = () => {
    let prevMonthDate:Date = new Date(currentDate.getTime())
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1)
    setCurrentDate(prevMonthDate)
  }

  const onNextMonth = () => {
    let nextMonthDate:Date = new Date(currentDate.getTime())
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1)
    setCurrentDate(nextMonthDate)
  }

  const holidayItem = getHolidayItem(selectedDateByTime)
  const eventItem = getEventItem(selectedDateByTime)

  return (
    <div className="flex flex-col justify-start text-gray-800">
      <div className="flex flex-col justify-start w-[375px] h-[667px] bg-gray-50 overflow-scroll">
        <div className="flex justify-around text-black bg-gray-100">
          <button type="button" onClick={() => onPrevMonth() } className="px-2 py-1 text-black bg-blue-400 border rounded-md">←</button>
          <button type="button" onClick={() => onMoveToToday() } className="px-2 py-1 text-black bg-blue-400 border rounded-md">Today</button>
          <button type="button" onClick={() => onNextMonth() } className="px-2 py-1 text-black bg-blue-400 border rounded-md">→</button>
        </div>
        <div className="flex justify-between w-full h-32 items-center sticky top-0 after:content=[''] after:bg-gray-900 after:opacity-50 after:w-full after:absolute">
          <div>
            <span className="w-8/12 pl-6 text-4xl font-bold">{currentDate.getMonth()+1}</span>
            <span className="w-8/12 pl-6 text-lg font-bold text-gray-700">({currentDate.getFullYear()})</span>
          </div>
          <div className="flex justify-end w-4/12 gap-3 pr-2">
            <span>🔍</span>
            <span>📅</span>
            <span>⚙️</span>
          </div>
        </div>
        <div className="flex flex-col px-2">
          <div className="text-xs">
            <CalendarRowByHead/>
            <CalendarRowByDays currentDate={currentDate}/>
          </div>
        </div>

          {
          selectedDate !== 0 ? (
            <div className="flex flex-col mx-2">
              <div className="flex gap-2">
                <span> {selectedDateByTime.getFullYear()}年{selectedDateByTime.getMonth() + 1}月{selectedDateByTime.getDate()}日(水)</span>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                { holidayItem ? (
                <div className="flex text-base">
                  <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-blue-400 rounded-md">
                    <span className="text-base">終日</span>
                    <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                    <span className="text-base">{holidayItem.summary}</span>
                  </button>
                </div>
                ) : null}
                { eventItem ? (
                <div className="flex text-base">
                  <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 text-gray-100 bg-blue-400 rounded-md">
                    <span className="text-base">終日</span>
                    <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                    <span className="text-base">{eventItem.summary}</span>
                  </button>
                </div>
                ) : null}
                <div className="flex items-center gap-2 text-base">
                  <button type="button" className="flex justify-start w-10/12 px-4 py-2 text-gray-100 bg-blue-400 rounded-md">
                    <span className="text-base">+ 新しいイベント</span>
                  </button>
                  <button type="button" className="flex justify-center w-2/12 px-4 py-2 text-gray-100 bg-blue-400 rounded-md">
                    <span>⚙️</span>
                  </button>
                </div>
              </div>
            </div>
          ) 
          : null
          }
        <div className="hidden">
          <div className="flex h-16 rounded-md w-[14.3%] justify-center font-bold text-base"></div>
          <div className="text-black rounded-md"></div>
          <div className="bg-gray-50"></div>
          <div className="bg-gray-100"></div>
          <div className="bg-gray-200"></div>
          <div className="bg-gray-300"></div>
          <div className="bg-gray-400"></div>
          <div className="bg-gray-500"></div>
          <div className="bg-gray-600"></div>
          <div className="bg-gray-700"></div>
          <div className="bg-gray-800"></div>
          <div className="bg-gray-900"></div>
          <div className="bg-gray-950"></div>
          <div className="text-red-500"></div>
          <div className="flex text-base">
            <button type="button" className="flex items-center justify-start w-full gap-2 px-4 py-2 bg-gray-800 rounded-md">
              <span className="text-base">終日</span>
              <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
              <span className="text-base">山の日</span>
            </button>
          </div>
          <div className="flex items-center justify-start w-full gap-2 text-xs text-purple-500 bg-purple-200 border-l-4 border-purple-500 rounded-sm">
            <span className="">山の日</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
