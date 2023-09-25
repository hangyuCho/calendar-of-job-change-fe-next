import {MeetingCategoryType} from "@/app/enum";

interface CalendarProps {
  date: Date
}

interface CalendarRowByDaysProps {
  currentDate: Date
}

interface ScheduleProps {
  targetDate:Date
}

interface EventProps {
  id: number,
  scheduleStartAt: Date,
  scheduleEndAt?: Date,
  clientCompany: {
    id: number,
    clientCompanyName: string
  },
  jobChangeProcess: {
    id: number,
    jobChangeProcessName: string
  },
  meetingLink?: string,
  meetingCategoryType: MeetingCategoryType
}

export {
  type CalendarProps,
  type CalendarRowByDaysProps,
  type ScheduleProps,
  type EventProps
};
