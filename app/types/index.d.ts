import {MeetingCategoryType} from "@/app/enum";

interface CalendarRowByDaysProps {
  currentDate: Date
}

interface DummyRowProps {
  eventStatusStepQty: number
}

interface EventStatusProps {
  "id": number,
  "scheduleStartAt": Date,
  "scheduleEndAt": Date,
  "agentCompanyClientCompanyRelation": {
    "id": number,
    "agentCompanyMaster": {
      "id": number,
      "agentName": string
    },
    "clientCompanyMaster": {
      "id": number,
      "clientCompanyName": string
    }
  },
  "jobChangeProcess": {
    "id": number,
    "jobChangeProcessName": string
  },
  "meetingLink": string,
  "meetingCategoryType": MeetingCategoryType
}

interface AgentRowProps {
  rowNumber: number
  eventStatusList: Array<EventStatusProps>
  eventStatusStepQty: number
}

interface AgentDataProps {
  id?: number
  eventStatus: EventStatusProps
}

interface JobChangeProcessProps {
  id: number
  jobChangeProcessName: string
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
  type EventProps,
  type DummyRowProps,
  type EventStatusProps,
  type AgentRowProps,
  type AgentDataProps,
  type JobChangeProcessProps
};
