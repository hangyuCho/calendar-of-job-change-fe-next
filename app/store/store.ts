
import { configureStore } from "@reduxjs/toolkit"
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import scheduleReducer from "./scheduleReducer"

const store:ToolkitStore = configureStore({
  reducer: {
    schedule: scheduleReducer
  }
})

export default store
