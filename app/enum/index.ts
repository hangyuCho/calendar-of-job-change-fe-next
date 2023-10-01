enum MeetingCategoryType {
    WEB,
    FACE_TO_FACE
}

enum ScheduleTypeByFromToOfDay {
    START,
    END
}

namespace ScheduleTypeByFromToOfDay {
    export const isStart = (type: ScheduleTypeByFromToOfDay): boolean =>
        ScheduleTypeByFromToOfDay.START === type

    export const isEnd = (type: ScheduleTypeByFromToOfDay): boolean =>
        ScheduleTypeByFromToOfDay.END === type
}

enum ScheduleTypeByHHMM {
    HOURS,
    MINUTES
}
namespace ScheduleTypeByHHMM {
    export const isHours = (type: ScheduleTypeByHHMM): boolean =>
        ScheduleTypeByHHMM.HOURS === type

    export const isMinutes = (type: ScheduleTypeByHHMM): boolean =>
        ScheduleTypeByHHMM.MINUTES === type
}

export {
    MeetingCategoryType,
    ScheduleTypeByFromToOfDay,
    ScheduleTypeByHHMM
}
