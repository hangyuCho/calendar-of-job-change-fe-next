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

interface GoogleCalendarProps {
  kind: string,
  etag: string,
  summary: string,
  description: string,
  updated: string,
  timeZone: string,
  accessRole: string,
  defaultReminders: [],
  nextSyncToken: string,
  items: [
    {
      kind: string,
      etag: string,
      id: string,
      status: string,
      htmlLink: string,
      created: Date,
      updated: Date,
      summary: string,
      description: string,
      creator: {
        email: string,
        displayName: string,
        self: true
      },
      organizer: {
        email: string,
        displayName: string,
        self: true
      },
      start: {
        date: Date
      },
      end: {
        date: Date
      },
      transparency: string,
      visibility: string,
      iCalUID: string,
      sequence: number,
      eventType: string
    }
  ]
}

export {
  type CalendarRowByDaysProps,
  type ScheduleProps,
  type EventScheduleProps,
  type EventProps,
  type EventStatusProps,
  type DummyRowProps,
  type AgentRowProps,
  type AgentDataProps,
  type JobChangeProcessProps,
  type GoogleCalendarProps
};
