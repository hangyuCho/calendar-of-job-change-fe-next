"use client"
import store from "@/app/store/store";
import React from "react";
import { Provider } from "react-redux";
import {Calendar} from "@/app/components";
import AgentArea from "@/app/components/Agent/AgentArea";

const Home = () => {
  return (
      <Provider store={store}>
        <main className="flex flex-col gap-3 h-screen">
            <Calendar />
            <AgentArea />
        </main>
      </Provider>
  )
}
export default Home
