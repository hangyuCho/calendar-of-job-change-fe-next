import {useEffect, useState} from 'react'
import { RadioGroup } from '@headlessui/react'
import {GetDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";

interface AgentRadioGroupProps {
    key: number
    name: string
    pic: string
    tel: string
    biko: string
}

const agentRadioGroups:Array<AgentRadioGroupProps> = [
    {
        key: 1,
        name: 'Geekly',
        pic: '中鋪 多一 なかしき まさいち',
        tel: '080-1000-1000',
        biko: 'スタートアップ向け',
    },
    {
        key: 2,
        name: 'Types',
        pic: '広居 智枝美 ひろい ちえみ',
        tel: '080-1000-1000',
        biko: '大手企業向け',
    },
    {
        key: 3,
        name: 'Inbound Technology',
        pic: '中市後 拳大 なかいちご けんた',
        tel: '080-1000-1000',
        biko: 'ビッグ・テック企業向け',
    },
]

export default function AgentRadioGroup() {
    const [selected, setSelected] = useState(agentRadioGroups[0])
    const [event, setEvent]: any = useState({ content: { results: [] } })
    useEffect(() => {
        (async() => {
            let res: Response = await fetch("/api/20220628/notion/database?databaseId=1e2995942f584766b1dd6e69a3276858", {method: "POST"})
            let result:GetDatabaseResponse = await res.json()
            setEvent(result)
        })()
    })
    return (
        <div className="w-full px-4 py-16">
            <div className="mx-auto w-full max-w-md">
                <pre>
                    {JSON.stringify(event.content.results,null,2)}
                </pre>
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                        {agentRadioGroups.map((plan) => (
                            <RadioGroup.Option
                                key={plan.key}
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
                                        <div key={plan.key} className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="text-sm">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked ? 'text-white' : 'text-gray-900'
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                        as="span"
                                                        className={`inline ${
                                                            checked ? 'text-sky-100' : 'text-gray-500'
                                                        }`}
                                                    >
                            <span>
                              {plan.pic}/{plan.tel}
                            </span>{' '}
                                                        <span aria-hidden="true">&middot;</span>{' '}
                                                        <span>{plan.biko}</span>
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

function CheckIcon(props: any) {
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

const events = {
    "object": "list",
    "results": [
        {
            "object": "page",
            "id": "7a4c8363-19c7-4f2c-9a3b-e49669492510",
            "created_time": "2023-09-11T14:20:00.000Z",
            "last_edited_time": "2023-09-11T15:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "6b21ce88-1f6f-4f51-a37a-37d8fef8c5da"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-09-08T14:10:00.000+09:00",
                        "end": "2023-09-08T15:10:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": "📆",
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
                            "plain_text": "📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/7a4c836319c74f2c9a3be49669492510",
            "public_url": null
        },
        {
            "object": "page",
            "id": "a8f971c2-705c-4c3e-b1cc-903ab3d577b8",
            "created_time": "2023-09-11T14:19:00.000Z",
            "last_edited_time": "2023-09-11T15:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "4da1892e-53b1-4452-a05d-b3548c71a82b"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-18T17:00:00.000+09:00",
                        "end": "2023-08-18T18:15:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/a8f971c2705c4c3eb1cc903ab3d577b8",
            "public_url": null
        },
        {
            "object": "page",
            "id": "660eb468-721d-4220-8afd-7102eb961af7",
            "created_time": "2023-09-11T14:18:00.000Z",
            "last_edited_time": "2023-09-11T15:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "53919be0-17d3-4dbb-9d2f-98e977288ab8"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-18T16:30:00.000+09:00",
                        "end": "2023-08-18T17:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/660eb468721d42208afd7102eb961af7",
            "public_url": null
        },
        {
            "object": "page",
            "id": "92228b06-a00d-4d5f-adc8-3d4fc75bb803",
            "created_time": "2023-09-11T14:17:00.000Z",
            "last_edited_time": "2023-09-11T15:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5956678c-8cd4-4ff9-9eb0-6b2b18b613be"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "89fda003-4b08-4fdb-a106-f378eb16f17e"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-17T18:30:00.000+09:00",
                        "end": "2023-08-17T19:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "31876494-6581-4e89-976c-52441847ed9d"
                        },
                        {
                            "id": "960a7b5e-d2bc-456b-ad95-45f6bee27115"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/92228b06a00d4d5fadc83d4fc75bb803",
            "public_url": null
        },
        {
            "object": "page",
            "id": "0a2a55fb-8601-433d-8e3d-4a6c6aeefe65",
            "created_time": "2023-09-11T14:17:00.000Z",
            "last_edited_time": "2023-09-11T15:19:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "14f6a3fd-e585-4604-9eab-410a3b5b7d35"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-17T10:00:00.000+09:00",
                        "end": "2023-08-17T11:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/0a2a55fb8601433d8e3d4a6c6aeefe65",
            "public_url": null
        },
        {
            "object": "page",
            "id": "0e9eaac5-ec94-4e13-b32b-592320111338",
            "created_time": "2023-09-11T14:17:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "4308d839-b7f5-4c0b-ba7b-0e7874dcb763"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-16T15:15:00.000+09:00",
                        "end": "2023-08-16T16:15:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/0e9eaac5ec944e13b32b592320111338",
            "public_url": null
        },
        {
            "object": "page",
            "id": "47a5f3a3-5832-4f8e-b304-f9560457a4c2",
            "created_time": "2023-09-11T14:16:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "acf56f69-6b8f-43fe-a4d3-0cb133d8dc3c"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-16T09:00:00.000+09:00",
                        "end": "2023-08-16T12:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/47a5f3a358324f8eb304f9560457a4c2",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f54575f5-a81b-41e4-b8b5-740e01e9cba8",
            "created_time": "2023-09-11T14:16:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5956678c-8cd4-4ff9-9eb0-6b2b18b613be"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "a52501a5-0d59-44b5-8692-a2a0634ba812"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-14T19:30:00.000+09:00",
                        "end": "2023-08-14T20:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f54575f5a81b41e4b8b5740e01e9cba8",
            "public_url": null
        },
        {
            "object": "page",
            "id": "508feb8c-3392-4fff-aeec-7271b4bcbdde",
            "created_time": "2023-09-11T14:16:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5956678c-8cd4-4ff9-9eb0-6b2b18b613be"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "89fda003-4b08-4fdb-a106-f378eb16f17e"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-14T16:00:00.000+09:00",
                        "end": "2023-08-14T17:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/508feb8c33924fffaeec7271b4bcbdde",
            "public_url": null
        },
        {
            "object": "page",
            "id": "bcfc6247-3500-408a-858e-852a4c84c99c",
            "created_time": "2023-09-11T14:15:00.000Z",
            "last_edited_time": "2023-09-11T15:14:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8bfe1ad1-3936-4c8e-a81b-e8362f74abea"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-10T20:00:00.000+09:00",
                        "end": "2023-08-10T21:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/bcfc62473500408a858e852a4c84c99c",
            "public_url": null
        },
        {
            "object": "page",
            "id": "99f2923a-48b4-4356-ba15-ea434cf7229a",
            "created_time": "2023-09-11T14:15:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "badfd400-4619-4512-ad8e-b256499e0d3b"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-09T17:00:00.000+09:00",
                        "end": "2023-08-09T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        },
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/99f2923a48b44356ba15ea434cf7229a",
            "public_url": null
        },
        {
            "object": "page",
            "id": "1532c87e-ed13-4cf2-ac38-9f001cf50aa3",
            "created_time": "2023-09-11T14:14:00.000Z",
            "last_edited_time": "2023-09-11T15:14:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8bfe1ad1-3936-4c8e-a81b-e8362f74abea"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-08T20:00:00.000+09:00",
                        "end": "2023-08-08T21:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "00192480-4bc8-4e5a-b10b-8456749b448c"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/1532c87eed134cf2ac389f001cf50aa3",
            "public_url": null
        },
        {
            "object": "page",
            "id": "b7736bba-32b3-4f88-9a6f-af15b3f05cf6",
            "created_time": "2023-09-11T14:14:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "89fda003-4b08-4fdb-a106-f378eb16f17e"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-07T19:30:00.000+09:00",
                        "end": "2023-08-07T20:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/b7736bba32b34f889a6faf15b3f05cf6",
            "public_url": null
        },
        {
            "object": "page",
            "id": "ded6f3f8-5508-45e4-bcc1-f4fda26790c0",
            "created_time": "2023-09-11T14:14:00.000Z",
            "last_edited_time": "2023-09-11T15:18:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "512caa22-df7a-4f62-86fd-c5b48a426c25"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-07T15:00:00.000+09:00",
                        "end": "2023-08-07T16:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/ded6f3f8550845e4bcc1f4fda26790c0",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f2a8066d-3e08-4918-96fa-99e979ebb054",
            "created_time": "2023-09-11T14:14:00.000Z",
            "last_edited_time": "2023-09-11T15:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "4308d839-b7f5-4c0b-ba7b-0e7874dcb763"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-03T17:45:00.000+09:00",
                        "end": "2023-08-03T18:45:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f2a8066d3e08491896fa99e979ebb054",
            "public_url": null
        },
        {
            "object": "page",
            "id": "fa2a4ff9-4711-4a48-9f1a-58dd706d7bd5",
            "created_time": "2023-09-11T14:13:00.000Z",
            "last_edited_time": "2023-09-11T15:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5956678c-8cd4-4ff9-9eb0-6b2b18b613be"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "acf56f69-6b8f-43fe-a4d3-0cb133d8dc3c"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-03T11:00:00.000+09:00",
                        "end": "2023-08-03T14:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/fa2a4ff947114a489f1a58dd706d7bd5",
            "public_url": null
        },
        {
            "object": "page",
            "id": "a4df055f-c270-46b0-a43e-58232c679821",
            "created_time": "2023-09-11T14:09:00.000Z",
            "last_edited_time": "2023-09-11T15:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "d7b819bb-a898-4603-8fb3-c90266f6412f"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-02T18:35:00.000+09:00",
                        "end": "2023-08-02T19:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/a4df055fc27046b0a43e58232c679821",
            "public_url": null
        },
        {
            "object": "page",
            "id": "bf4f0cd8-f083-4d0c-bf2b-77122c0854b4",
            "created_time": "2023-09-11T14:09:00.000Z",
            "last_edited_time": "2023-09-11T15:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "ca3d8daa-562f-4607-96dd-5cfa13229ff3"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-02T17:00:00.000+09:00",
                        "end": "2023-08-02T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/bf4f0cd8f0834d0cbf2b77122c0854b4",
            "public_url": null
        },
        {
            "object": "page",
            "id": "3a39d6fa-7976-4468-9bcc-e21e701e19c5",
            "created_time": "2023-09-11T14:09:00.000Z",
            "last_edited_time": "2023-09-11T15:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "9a7eef9b-899d-4204-ab65-82ad73cf57a0"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-08-01T19:00:00.000+09:00",
                        "end": "2023-08-01T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/3a39d6fa797644689bcce21e701e19c5",
            "public_url": null
        },
        {
            "object": "page",
            "id": "2e239e62-836f-48f3-b85a-4cb0aae59df6",
            "created_time": "2023-09-11T14:09:00.000Z",
            "last_edited_time": "2023-09-11T15:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "a52501a5-0d59-44b5-8692-a2a0634ba812"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-31T18:00:00.000+09:00",
                        "end": "2023-07-31T19:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/2e239e62836f48f3b85a4cb0aae59df6",
            "public_url": null
        },
        {
            "object": "page",
            "id": "72a7d533-df4d-4815-a819-dfb3294dc69f",
            "created_time": "2023-09-11T14:08:00.000Z",
            "last_edited_time": "2023-09-11T15:13:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "37838b05-8e62-4429-9059-1eee7ac10366"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-31T17:00:00.000+09:00",
                        "end": "2023-07-31T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/72a7d533df4d4815a819dfb3294dc69f",
            "public_url": null
        },
        {
            "object": "page",
            "id": "6a8c4b57-1a6a-426f-b6dc-21a0d114869f",
            "created_time": "2023-09-11T14:07:00.000Z",
            "last_edited_time": "2023-09-11T15:13:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "851b8e35-5b41-4d9a-9ebe-4ef6ca111c23"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-31T09:00:00.000+09:00",
                        "end": "2023-07-31T11:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/6a8c4b571a6a426fb6dc21a0d114869f",
            "public_url": null
        },
        {
            "object": "page",
            "id": "4bbf2d8f-1380-4061-b48b-0c04e9283071",
            "created_time": "2023-09-11T14:07:00.000Z",
            "last_edited_time": "2023-09-11T15:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "ba7ed5fe-9622-4d2e-8f59-3db0894dfa78"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-28T19:00:00.000+09:00",
                        "end": "2023-07-28T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/4bbf2d8f13804061b48b0c04e9283071",
            "public_url": null
        },
        {
            "object": "page",
            "id": "876da2ec-b627-4c34-b00f-8b5954799e9b",
            "created_time": "2023-09-11T14:07:00.000Z",
            "last_edited_time": "2023-09-11T15:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "361ea785-4299-4e52-8440-f15d7c5ce0b3"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-27T19:30:00.000+09:00",
                        "end": "2023-07-27T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/876da2ecb6274c34b00f8b5954799e9b",
            "public_url": null
        },
        {
            "object": "page",
            "id": "939cfd1e-36c9-4143-8d2d-6f8e15e43153",
            "created_time": "2023-09-11T14:06:00.000Z",
            "last_edited_time": "2023-09-11T15:14:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8bfe1ad1-3936-4c8e-a81b-e8362f74abea"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-27T17:00:00.000+09:00",
                        "end": "2023-07-27T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/939cfd1e36c941438d2d6f8e15e43153",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f97b04e0-d6da-43e1-b469-950b9eec2006",
            "created_time": "2023-09-11T14:05:00.000Z",
            "last_edited_time": "2023-09-11T15:11:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "89fda003-4b08-4fdb-a106-f378eb16f17e"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-26T17:30:00.000+09:00",
                        "end": "2023-07-26T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f97b04e0d6da43e1b469950b9eec2006",
            "public_url": null
        },
        {
            "object": "page",
            "id": "4a9bc8c4-843e-4c6e-86d5-d0ebb652277a",
            "created_time": "2023-09-11T14:04:00.000Z",
            "last_edited_time": "2023-09-11T15:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "71a05ba3-82d6-4528-9533-b01dd7589f39"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-25T17:30:00.000+09:00",
                        "end": "2023-07-25T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "aef2ddb5-e1e3-4cc5-b62c-efc2376064d2"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/4a9bc8c4843e4c6e86d5d0ebb652277a",
            "public_url": null
        },
        {
            "object": "page",
            "id": "df574ecc-cff9-4d26-b533-07f9c11e1b19",
            "created_time": "2023-09-11T14:04:00.000Z",
            "last_edited_time": "2023-09-11T15:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "84034bed-d214-4674-965b-9a81d71ac6f7"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-24T18:00:00.000+09:00",
                        "end": "2023-07-24T19:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/df574ecccff94d26b53307f9c11e1b19",
            "public_url": null
        },
        {
            "object": "page",
            "id": "b516fe4a-b09e-4f55-9004-86e82fee2583",
            "created_time": "2023-09-11T14:04:00.000Z",
            "last_edited_time": "2023-09-11T15:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "acf56f69-6b8f-43fe-a4d3-0cb133d8dc3c"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-21T16:00:00.000+09:00",
                        "end": "2023-07-21T16:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/b516fe4ab09e4f55900486e82fee2583",
            "public_url": null
        },
        {
            "object": "page",
            "id": "1d10c9ea-f193-4ecf-a03b-e13523219e06",
            "created_time": "2023-09-11T14:03:00.000Z",
            "last_edited_time": "2023-09-11T15:17:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8bfe1ad1-3936-4c8e-a81b-e8362f74abea"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-21T15:00:00.000+09:00",
                        "end": "2023-07-21T16:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "5fff02c0-7892-4d11-b9a7-1b87bf6eec01"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/1d10c9eaf1934ecfa03be13523219e06",
            "public_url": null
        },
        {
            "object": "page",
            "id": "005ee63c-2493-4e34-b92d-c6ce55570706",
            "created_time": "2023-09-11T14:03:00.000Z",
            "last_edited_time": "2023-09-11T15:16:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "89fda003-4b08-4fdb-a106-f378eb16f17e"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-20T16:00:00.000+09:00",
                        "end": "2023-07-20T17:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/005ee63c24934e34b92dc6ce55570706",
            "public_url": null
        },
        {
            "object": "page",
            "id": "c19fb3de-1987-4429-8170-47d019c11027",
            "created_time": "2023-09-11T14:03:00.000Z",
            "last_edited_time": "2023-09-11T15:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "ca3d8daa-562f-4607-96dd-5cfa13229ff3"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-19T19:00:00.000+09:00",
                        "end": "2023-07-19T20:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/c19fb3de19874429817047d019c11027",
            "public_url": null
        },
        {
            "object": "page",
            "id": "f1a0f80e-dae3-49aa-bf03-d8bb7f59545a",
            "created_time": "2023-09-11T14:03:00.000Z",
            "last_edited_time": "2023-09-11T15:10:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "a4cd992f-d3a8-4e3e-931a-baba62657f9d"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-18T18:00:00.000+09:00",
                        "end": "2023-07-18T19:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/f1a0f80edae349aabf03d8bb7f59545a",
            "public_url": null
        },
        {
            "object": "page",
            "id": "538f3673-a0d9-48cc-af20-2686ca140cd0",
            "created_time": "2023-09-11T14:02:00.000Z",
            "last_edited_time": "2023-09-11T15:13:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "37838b05-8e62-4429-9059-1eee7ac10366"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-14T17:30:00.000+09:00",
                        "end": "2023-07-14T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/538f3673a0d948ccaf202686ca140cd0",
            "public_url": null
        },
        {
            "object": "page",
            "id": "d9966eef-47d7-4dd3-b4e1-ac541c033425",
            "created_time": "2023-09-11T14:02:00.000Z",
            "last_edited_time": "2023-09-11T15:12:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "4308d839-b7f5-4c0b-ba7b-0e7874dcb763"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-13T18:00:00.000+09:00",
                        "end": "2023-07-13T19:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "a8843bba-b428-49a2-a540-ebadccf99fc8"
                        },
                        {
                            "id": "5fff02c0-7892-4d11-b9a7-1b87bf6eec01"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/d9966eef47d74dd3b4e1ac541c033425",
            "public_url": null
        },
        {
            "object": "page",
            "id": "986ad237-5019-42fe-a157-47231d60aaa9",
            "created_time": "2023-09-11T14:02:00.000Z",
            "last_edited_time": "2023-09-11T15:12:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "663b48c3-99be-485f-b9bb-eee3e32683b6"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-13T13:00:00.000+09:00",
                        "end": "2023-07-13T14:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/986ad237501942fea15747231d60aaa9",
            "public_url": null
        },
        {
            "object": "page",
            "id": "071562cc-11aa-4c52-bb40-a8fe1074bac3",
            "created_time": "2023-09-11T14:01:00.000Z",
            "last_edited_time": "2023-09-11T15:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "53d44622-fee2-4451-8b3f-3703e9d27ec2"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-12T11:00:00.000+09:00",
                        "end": "2023-07-12T11:30:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/071562cc11aa4c52bb40a8fe1074bac3",
            "public_url": null
        },
        {
            "object": "page",
            "id": "87652733-7609-4f31-8819-9608de9e0887",
            "created_time": "2023-09-11T14:00:00.000Z",
            "last_edited_time": "2023-09-11T15:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "663b48c3-99be-485f-b9bb-eee3e32683b6"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-10T17:00:00.000+09:00",
                        "end": "2023-07-10T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/8765273376094f3188199608de9e0887",
            "public_url": null
        },
        {
            "object": "page",
            "id": "53986383-7aab-47eb-a41c-9eb82e9b36fb",
            "created_time": "2023-09-11T14:00:00.000Z",
            "last_edited_time": "2023-09-11T15:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "ca6bbd75-fed2-4347-a2b4-c408b6d982d8"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-07T09:00:00.000+09:00",
                        "end": "2023-07-07T10:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/539863837aab47eba41c9eb82e9b36fb",
            "public_url": null
        },
        {
            "object": "page",
            "id": "4d17cdfa-d119-4a09-81eb-0bfb67d27516",
            "created_time": "2023-09-11T14:00:00.000Z",
            "last_edited_time": "2023-09-11T15:09:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "e7fab155-c9bb-4437-9ca0-ccc0e29c5138"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-06T17:00:00.000+09:00",
                        "end": "2023-07-06T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/4d17cdfad1194a0981eb0bfb67d27516",
            "public_url": null
        },
        {
            "object": "page",
            "id": "e830a927-6d15-4fb0-a690-d36029e07ce5",
            "created_time": "2023-09-11T13:59:00.000Z",
            "last_edited_time": "2023-09-11T15:13:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "37838b05-8e62-4429-9059-1eee7ac10366"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-06T09:00:00.000+09:00",
                        "end": "2023-07-06T10:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/e830a9276d154fb0a690d36029e07ce5",
            "public_url": null
        },
        {
            "object": "page",
            "id": "08c2e71c-a145-4bb5-9f56-7095a1abd615",
            "created_time": "2023-09-11T13:59:00.000Z",
            "last_edited_time": "2023-09-11T15:12:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "71a05ba3-82d6-4528-9533-b01dd7589f39"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-05T18:00:00.000+09:00",
                        "end": "2023-07-05T19:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/08c2e71ca1454bb59f567095a1abd615",
            "public_url": null
        },
        {
            "object": "page",
            "id": "ae57dfb3-28d4-494f-82db-c6f88267ae3b",
            "created_time": "2023-09-11T13:59:00.000Z",
            "last_edited_time": "2023-09-11T15:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "e8b1d17d-3ad2-4bbb-a14a-a95d2ac5337d"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-07-04T13:00:00.000+09:00",
                        "end": "2023-07-04T14:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "79cdfbdd-96be-437f-b9a7-cd2e6d30cdaa"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/ae57dfb328d4494f82dbc6f88267ae3b",
            "public_url": null
        },
        {
            "object": "page",
            "id": "4ad76381-a4a0-48a5-8445-5431c90f2ad2",
            "created_time": "2023-09-11T13:59:00.000Z",
            "last_edited_time": "2023-09-11T15:12:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "a4cd992f-d3a8-4e3e-931a-baba62657f9d"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-30T14:00:00.000+09:00",
                        "end": "2023-06-30T15:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "5fff02c0-7892-4d11-b9a7-1b87bf6eec01"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/4ad76381a4a048a584455431c90f2ad2",
            "public_url": null
        },
        {
            "object": "page",
            "id": "11b85a03-1e1e-4528-aa4e-6e90e138381d",
            "created_time": "2023-09-11T13:58:00.000Z",
            "last_edited_time": "2023-09-11T15:11:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "e8b1d17d-3ad2-4bbb-a14a-a95d2ac5337d"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-30T12:00:00.000+09:00",
                        "end": "2023-06-30T13:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        },
                        {
                            "id": "57dbbb02-3680-4595-a6f0-ebb42aeddd03"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/11b85a031e1e4528aa4e6e90e138381d",
            "public_url": null
        },
        {
            "object": "page",
            "id": "90c79658-461c-40b3-bb4f-7c3d1677d791",
            "created_time": "2023-09-11T13:58:00.000Z",
            "last_edited_time": "2023-09-11T15:08:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8e03284a-1a4f-4e88-bc31-4a221065965a"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-29T14:00:00.000+09:00",
                        "end": "2023-06-29T15:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/90c79658461c40b3bb4f7c3d1677d791",
            "public_url": null
        },
        {
            "object": "page",
            "id": "28e359a0-3f2e-43f9-8675-f04fdc7339e4",
            "created_time": "2023-09-11T12:47:00.000Z",
            "last_edited_time": "2023-09-11T15:07:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "1fd051d8-7ce6-425f-8e52-ada2452fc4c6"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-27T15:00:00.000+09:00",
                        "end": "2023-06-27T16:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": null
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/28e359a03f2e43f98675f04fdc7339e4",
            "public_url": null
        },
        {
            "object": "page",
            "id": "352215b3-c2ae-4fd9-bb64-79e99ee26138",
            "created_time": "2023-09-11T12:47:00.000Z",
            "last_edited_time": "2023-09-11T14:32:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "8e03284a-1a4f-4e88-bc31-4a221065965a"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-26T17:00:00.000+09:00",
                        "end": "2023-06-26T18:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": "https://meet.google.com/emb-wzkz-eva"
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "5c9e0daf-bfb3-4e0d-97c9-f7294a0cc501"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/352215b3c2ae4fd9bb6479e99ee26138",
            "public_url": null
        },
        {
            "object": "page",
            "id": "4bbe31db-9e83-4e09-afe0-c6774f7afa4c",
            "created_time": "2023-09-11T12:47:00.000Z",
            "last_edited_time": "2023-09-11T15:15:00.000Z",
            "created_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "last_edited_by": {
                "object": "user",
                "id": "96a11dff-f1c8-4af3-9748-79e4ad58cf09"
            },
            "cover": null,
            "icon": null,
            "parent": {
                "type": "database_id",
                "database_id": "f8da8a72-2596-49c0-a075-4dfa695fd09b"
            },
            "archived": false,
            "properties": {
                "meeting_category_master": {
                    "id": "TaDY",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "227c0cfa-44a4-417c-a375-5ddbbe878f2d"
                        }
                    ],
                    "has_more": false
                },
                "client_company": {
                    "id": "%5Bc%5BU",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "e8b1d17d-3ad2-4bbb-a14a-a95d2ac5337d"
                        }
                    ],
                    "has_more": false
                },
                "schedule_at": {
                    "id": "aWrq",
                    "type": "date",
                    "date": {
                        "start": "2023-06-23T11:00:00.000+09:00",
                        "end": "2023-06-23T12:00:00.000+09:00",
                        "time_zone": null
                    }
                },
                "link": {
                    "id": "f%40%40_",
                    "type": "url",
                    "url": "http://zoom.us.com"
                },
                "job_change_process_master": {
                    "id": "hUFG",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "90ed9ddb-13b7-4435-8180-2d5480f004e1"
                        },
                        {
                            "id": "01708da6-0d6e-44a4-a6ca-b3427f96d157"
                        }
                    ],
                    "has_more": false
                },
                "🗂️ client_company_category_master": {
                    "id": "%7CdWI",
                    "type": "relation",
                    "relation": [
                        {
                            "id": "f5206fbd-5e39-490b-85ec-a1bceb312b7b"
                        },
                        {
                            "id": "45be6fd0-ac8f-4907-9ca1-17a0b1a80ee3"
                        }
                    ],
                    "has_more": false
                },
                "name": {
                    "id": "title",
                    "type": "title",
                    "title": [
                        {
                            "type": "text",
                            "text": {
                                "content": " 📆",
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
                            "plain_text": " 📆",
                            "href": null
                        }
                    ]
                }
            },
            "url": "https://www.notion.so/4bbe31db9e834e09afe0c6774f7afa4c",
            "public_url": null
        }
    ],
    "next_cursor": null,
    "has_more": false,
    "type": "page_or_database",
    "page_or_database": {}
}