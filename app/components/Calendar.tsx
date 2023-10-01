
"use client"
import {useState} from "react"
import { CalendarRowByHead, CalendarRowByDays } from "./Calendar/index"
import { useSelector } from "react-redux"
import { EventProps } from "@/app/types"
import EventButtonList from "@/app/components/Calendar/Event/EventButtonList";

const Calendar = ({eventList} : { eventList: Array<EventProps> } ) => {
  let [currentDate, setCurrentDate] = useState(new Date())
  const selectedDate:number = useSelector((state: any) => state.schedule.time)

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

  return (
      <div className="flex justify-start text-gray-800 w-full">
        {/*<div className="flex flex-col justify-start w-[375px] h-[667px] bg-gray-50 overflow-scroll">*/}
        <div className="flex flex-col justify-start w-full bg-white pb-2 rounded-lg">
          <div className="flex justify-around text-black bg-gray-100">
            <button type="button" onClick={() => onPrevMonth()}
                    className="flex justify-center items-center px-2 py-1 text-black bg-indigo-200 border rounded-md">
              <span className="material-symbols-rounded"> arrow_left </span>
            </button>
            <button type="button" onClick={() => onMoveToToday()}
                    className="flex justify-center items-center px-2 py-1 text-black bg-indigo-200 border rounded-md">
              <span className="material-symbols-rounded"> location_home </span>
              <span className="font-bold text-xs">Today</span>
            </button>
            <button type="button" onClick={() => onNextMonth()}
                    className="flex justify-center items-center px-2 py-1 text-black bg-indigo-200 border rounded-md">
              <span className="material-symbols-rounded"> arrow_right </span>
            </button>
          </div>
          <div
              className="flex justify-between w-full h-32 items-center sticky top-0 after:content=[''] after:bg-gray-900 after:opacity-50 after:w-full after:absolute">
            <div>
              <span className="w-8/12 pl-6 text-4xl font-bold">{currentDate.getMonth() + 1}</span>
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
              <CalendarRowByDays currentDate={currentDate} eventList={eventList}/>
            </div>
          </div>
          <EventButtonList selectedDate={selectedDate} eventList={eventList}/>
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
              <button type="button"
                      className="flex items-center justify-start w-full gap-2 px-4 py-2 bg-gray-800 rounded-md">
                <span className="text-base">終日</span>
                <span className="w-1 h-full bg-purple-500 rounded-sm"></span>
                <span className="text-base">山の日</span>
              </button>
            </div>
            <div
                className="flex items-center justify-start w-full gap-2 text-xs text-purple-500 bg-purple-200 border-l-4 border-purple-500 rounded-sm">
              <span className="">山の日</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Calendar;
