
import holiday from "../data/holiday.json"
import event from "../data/event.json"
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


export {
  isEqualDate,
  getHolidayItem,
  toUTC,
  toStringWithPad
}
