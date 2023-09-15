"use client"
import {Calendar} from "@/app/components";
import AgentArea from "@/app/components/Agent/AgentArea";
import {Provider} from "react-redux";
import store from "@/app/store/store";
const Home = () => {
  return (
      <Provider store={store}>
          <main className="flex h-screen">
              <Calendar/>
              <AgentArea />
          </main>
      </Provider>
  )
}

export default Home