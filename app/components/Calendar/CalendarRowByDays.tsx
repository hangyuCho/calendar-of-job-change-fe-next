
import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch, } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectedSchedule } from "../../store/scheduleReducer"
import { CalendarRowByDaysProps } from "../../types"
import { isEqualDate } from "../../utils"
import { ScheduleByHoliday, ScheduleByEvent } from "../Schedule"

const today = new Date()
today.setHours(0,0,0,0)

const isToday = (current: Date) => {
  return isEqualDate(current, today)
}

const getDays = (firstDate:Date, lastDate:Date) => {
  let days:Array<number> = []
  let idx = 0
  for (let now:Date = firstDate; now.getTime() <= lastDate.getTime(); now.setDate(now.getDate() + 1)) {
    idx++
    days.push(now.getTime())
  }
  return days
}

const getWeeks = (currentDate: Date) => {
  let nowMonth:Date = currentDate
  let firstDate:Date = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1)
  let lastDate:Date = new Date(nowMonth.getFullYear(), nowMonth.getMonth() + 1, 0)
  let days:Array<number> = getDays(firstDate, lastDate)
  let weeks:Array<Array<number>> = []
  let week: number[] = new Array(7)

  days
    .forEach((time:number) => {
      let now = new Date(time)
      week[now.getDay()] = time
      if (now.getDay() == 6) {
        weeks.push(week)
        week = new Array(7)
      } else if (days.length ==  now.getDate()) {
        weeks.push(week)
      }
  })
  return weeks

}
const SUN = 0, 
      MON = 1, 
      TUE = 2, 
      WED = 3, 
      THU = 4, 
      FRI = 5, 
      SAT = 6

const CalendarRowByDays = ({currentDate}: CalendarRowByDaysProps) => {
  const dispatch:Dispatch<AnyAction> = useDispatch()
  const selectedDate:number = useSelector((state: any) => state.schedule.time)
  const onClickHandler = (selectedDate:Date) => { dispatch(selectedSchedule(selectedDate.getTime())) }

  let weeks:Array<Array<number>> = getWeeks(currentDate)

  let result = weeks.map((week, index) => {
    let style = "w-[14.3%] flex flex-col justify-start items-center font-bold text-base"
    let idx = 0
    let columns:any[] = []
    for (let dayOfTheWeek of [SUN, MON, TUE, WED, THU, FRI, SAT]) {
      let time:number = week[dayOfTheWeek]
      let now:Date = new Date(time)
      let currentDateIsTodayStyle:string | null = isToday(now) ? "bg-gray-200 rounded-md": null
      let selectedDateStyle:string | null = isEqualDate(now, new Date(selectedDate)) ? `text-black bg-gray-300 rounded-md` : null

      columns.push(
              time ? <button 
                        type="button" 
                        key={idx++} 
                        onClick={() => onClickHandler(now)}
                        className={`${style} ${(!selectedDateStyle ? currentDateIsTodayStyle : selectedDateStyle)} `}>
                        <span>{now.getDate()}</span>
                        <ScheduleByHoliday targetDate={now} />
                        <ScheduleByEvent targetDate={now} />
                      </button>
                    : <button 
                        type="button" 
                        key={idx++} 
                        className={`${style} text-gray-500`}>
                        0
                      </button>
      )
    }
    return (
      <div className="flex h-32" key={index??0}>
        { columns.map((column) => column) }
      </div>
    )
  }) 
  return (
    <>
      {result??null}
    </>
  )
}

export default CalendarRowByDays
