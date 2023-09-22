import {useEffect, useState} from 'react'
import { RadioGroup } from '@headlessui/react'
import {GetDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

interface AgentRadioGroupProps {
    name: { id: string, type: string, title: Array<any>}
    agentPicMaster: Array<string>
    clientCompanyMaster: Array<string>
}

const agentRadioGroups:Array<AgentRadioGroupProps> = [
    {
        name: {
            "id": "title",
            "type": "title",
            "title": [
                {
                    "type": "text",
                    "text": {
                        "content": "ビズリーチ",
                        "link": null
                    },
                    "annotations": {
                        "bold": false,
                        "italic": false,
                        "strikethrough": false,
                        "underline": false,
                        "code": false,
                        "color": "default"
                    },
                    "plain_text": "ビズリーチ",
                    "href": null
                }
            ]
        },
        agentPicMaster: [
            "なし"
        ],
        clientCompanyMaster: [
            "食べログ",
            "ANA"
        ]
    }
]

const colorSet: Array<string> = [
    "blue",
    "gray",
    "red",
    "green",
    "yellow",
    "indigo",
    "purple",
    "pink",
]

export default function AgentRadioGroup() {
    const [selected, setSelected] = useState(agentRadioGroups[0])
    const [event, setEvent]: any = useState({ content: { results: [] } })
    useEffect(() => {
        (async() => {
            let res: Response = await fetch("/api/20220628/notion/agent-list?databaseId=1e2995942f584766b1dd6e69a3276858", {method: "POST"})
            let result:GetDatabaseResponse = await res.json()
            setEvent(result)
        })()
    },[])
    return (
        <div className="w-full px-4 py-16">
            <div className="mx-auto w-full max-w-md">
                {/*
                <pre>
                    {JSON.stringify(event.content.results.slice(0,1),null,2)}
                </pre>
                */}
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                        {event.content.results.map((plan:AgentRadioGroupProps, i:number) => (
                            <RadioGroup.Option
                                key={i}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                                            : ''
                                        }
                                      ${
                                        checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'
                                        }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div key={i} className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-xl  ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                    >
                                                        <span>
                                                            {plan.name.title.map((title) => title.plain_text).join(":")}
                                                        </span>
                                                        <span>
                                                            {`(担当:${plan.agentPicMaster.join(",")})`}
                                                        </span>
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked ? 'text-sky-100' : 'text-gray-500'
                                                        }`}
                                                    >
                                                        <div className="flex flex-wrap">
                                                            {
                                                                plan.clientCompanyMaster.map((companyName: string) => {
                                                                    let randomColor = colorSet[Math.floor(Math.random()*colorSet.length)] ?? "blue"
                                                                    return (
                                                                        <span className={`bg-${randomColor}-100 text-${randomColor}-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded border border-${randomColor}-400 whitespace-nowrap my-1`}>
                                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                                            <span>{companyName}</span>
                                                                    </span>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </RadioGroup.Description>
                                                </div>
                                            </div>
                                            {checked && (
                                                <div className="shrink-0 text-white">
                                                    <CheckIcon className="h-6 w-6" />
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            </div>
            {/*
            <div>
                <pre>
                    {events.results.map((it, i) => <div key={i} className="mt-10">{JSON.stringify(it,null,2)}</div>)}
                </pre>
            </div>
            */}
        </div>
    )
}

const CheckIcon = (props: any) => {
    return (
        <svg viewBox="0 0 24 24" fill="none" {...props}>
            <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
            <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}