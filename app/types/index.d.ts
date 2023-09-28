import {MeetingCategoryType} from "@/app/enum";

interface CalendarRowByDaysProps {
  eventList: Array<EventProps>
  currentDate: Date
}

interface DummyRowProps {
  eventStatusStepQty: number
}

interface EventProps {
  id: 1,
  scheduleStartAt: Date,
  scheduleEndAt: Date,
  jobChangeProcess: {
    id: number,
    jobChangeProcessName: string
  },
  agentCompanyClientCompanyRelation: {
    id: number,
    agentCompanyMaster: {
      id: number,
      agentName: string
    },
    clientCompanyMaster: {
      id: number,
      clientCompanyName: string
    }
  },
  meetingLink: string,
  meetingCategoryType: MeetingCategoryType
}

interface EventStatusProps {
  id: number,
  scheduleStartAt: Date,
  scheduleEndAt: Date,
  agentCompanyClientCompanyRelation: {
    id: number,
    agentCompanyMaster: {
      id: number,
      agentName: string
    },
    clientCompanyMaster: {
      id: number,
      clientCompanyName: string
    }
  },
  jobChangeProcess: {
    id: number,
    jobChangeProcessName: string
  },
  meetingLink: string,
  meetingCategoryType: MeetingCategoryType
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

interface EventScheduleProps extends ScheduleProps {
  eventList: Array<EventProps>
}
interface ScheduleProps {
  targetDate:Date
}

export {
  type CalendarProps,
  type CalendarRowByDaysProps,
  type ScheduleProps,
  type EventScheduleProps,
  type EventProps,
  type EventStatusProps,
  type DummyRowProps,
  type AgentRowProps,
  type AgentDataProps,
  type JobChangeProcessProps
};
