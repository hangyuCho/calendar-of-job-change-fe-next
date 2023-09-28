"use client"
import store from "@/app/store/store";
import React, {useEffect, useState} from "react";
import { Provider } from "react-redux";
import {Calendar} from "@/app/components";
import AgentArea from "@/app/components/Agent/AgentArea";

const Home = () => {

  let [eventList, setEventList] = useState([])
  useEffect(() => {
      (async() => {
          let resByEventList = await (await fetch("/api/20230925/event", {method: "GET"})).json()
          setEventList(resByEventList.content.results)
      })()
  },[])
  return (
      <Provider store={store}>
        <main className="flex flex-col gap-3 h-screen">
            <Calendar eventList={eventList}/>
            <AgentArea />
        </main>
      </Provider>
  )
}
export default Home
