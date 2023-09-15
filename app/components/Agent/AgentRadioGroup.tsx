import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

interface AgentRadioGroupProps {
    name: string,
    pic: string,
    tel: string,
    biko: string,
}

const agentRadioGroups:Array<AgentRadioGroupProps> = [
    {
        name: 'Geekly',
        pic: '中鋪 多一 なかしき まさいち',
        tel: '080-1000-1000',
        biko: 'スタートアップ向け',
    },
    {
        name: 'Types',
        pic: '広居 智枝美 ひろい ちえみ',
        tel: '080-1000-1000',
        biko: '大手企業向け',
    },
    {
        name: 'Inbound Technology',
        pic: '中市後 拳大 なかいちご けんた',
        tel: '080-1000-1000',
        biko: 'ビッグ・テック企業向け',
    },
]

export default function AgentRadioGroup() {
    const [selected, setSelected] = useState(agentRadioGroups[0])

    return (
        <div className="w-full px-4 py-16">
            <div className="mx-auto w-full max-w-md">
                <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
                    <div className="space-y-2">
                        {agentRadioGroups.map((plan) => (
                            <RadioGroup.Option
                                key={plan.name}
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
                                        <div className="flex w-full items-center justify-between">
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