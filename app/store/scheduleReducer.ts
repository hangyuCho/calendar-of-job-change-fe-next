
import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"

const scheduleSlice:Slice = createSlice({
  name: "schedule",
  initialState: { time: 0 },
  reducers: {
    selectedSchedule: (state, action:PayloadAction<number | null>) => {
      console.log(action.payload)
      state.time = action.payload
    }
  }
})

export default scheduleSlice.reducer
export const {
  selectedSchedule
} = scheduleSlice.actions
