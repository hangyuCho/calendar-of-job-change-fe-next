
import holiday from "../data/holiday.json"
import event from "../data/event.json"
import {EventProps} from "@/app/types";
import {ScheduleTypeByFromToOfDay, ScheduleTypeByHHMM} from "@/app/enum";
const isEqualDate = (date1: Date, date2: Date) => {
  return date1.getFullYear() == date2.getFullYear()
      && date1.getMonth() == date2.getMonth()
      && date1.getDate() == date2.getDate()
}

const getHolidayItem = (targetDate: Date) => {
  return holiday
          .items
          .find(el => isEqualDate(new Date(el.start.date), targetDate))
}

const toUTC = (date: String | Date) => {
  if (typeof date === "string" ) {
    return new Date(date.replace("Z",""))
  }
  return new Date(String(date).replace("Z",""))
}

const toStringWithPad = (obj:any, maxLength:number, fillString: string) => {
  return String(obj).padStart(maxLength, fillString)
}

const getHHorMM = (
    eventItem: EventProps,
    scheduleTypeByFromToOfDay: ScheduleTypeByFromToOfDay,
    scheduleTypeByHHMM: ScheduleTypeByHHMM,
) => {
  if (!eventItem) {
    return null
  }
  const {
    scheduleStartAt, scheduleEndAt
  } : {
    scheduleStartAt: Date
    scheduleEndAt: Date | null
  } = eventItem

  let utcHHorMM
  if (ScheduleTypeByFromToOfDay.isStart(scheduleTypeByFromToOfDay) && ScheduleTypeByHHMM.isHours(scheduleTypeByHHMM)) {
    utcHHorMM = toUTC(scheduleStartAt)?.getHours()
  } else if (ScheduleTypeByFromToOfDay.isStart(scheduleTypeByFromToOfDay) && ScheduleTypeByHHMM.isMinutes(scheduleTypeByHHMM)) {
    utcHHorMM = toUTC(scheduleStartAt)?.getMinutes()
  } else if (ScheduleTypeByFromToOfDay.isEnd(scheduleTypeByFromToOfDay) && ScheduleTypeByHHMM.isHours(scheduleTypeByHHMM)) {
    utcHHorMM = toUTC(scheduleEndAt)?.getHours()
  } else if (ScheduleTypeByFromToOfDay.isEnd(scheduleTypeByFromToOfDay) && ScheduleTypeByHHMM.isMinutes(scheduleTypeByHHMM)) {
    utcHHorMM = toUTC(scheduleEndAt)?.getMinutes()
  } else {
    utcHHorMM = 0
  }
  return toStringWithPad(
      utcHHorMM,
      2,
      "0") ?? null
}


export {
  isEqualDate,
  getHolidayItem,
  toUTC,
  toStringWithPad,
  getHHorMM
}
