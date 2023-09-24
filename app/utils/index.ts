
import holiday from "../data/holiday.json"
import event from "../data/event.json"
import {getBlocks} from "@/app/utils/notionUtils";
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

const getEventItem = (targetDate: Date) => {
  return event
          .items
          .find(el => isEqualDate(new Date(el.start.dateTime), targetDate))
}

function groupBy<K, V> (list: Array<V>, keyGetter: (input: V) => K) {
  const map = new Map<K, Array<V>>()
  list.forEach((item) => {
    const key = keyGetter(item)
    const collection = map.get(key)
    if(!collection) {
      map.set(key, [item])
    } else {
      collection.push(item)
    }
  })
  return map
}

export {
  isEqualDate,
  getHolidayItem,
  getEventItem,
  groupBy
}
