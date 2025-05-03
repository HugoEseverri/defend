"use client"

import React from 'react'
import DoughnutChart from '../DoughnutChart/DoughnutChart'

function RiskCounter() {
    return (
        <div className="bg-white w-[500px] h-[290px] p-7 rounded flex">
            <div className="w-1/2 flex justify-between">
                <div className="flex flex-col text-[16.5px]">
                    <h2 className="font-semibold">Risk level</h2>
                    <ul className="space-y-3 mt-4">
                        <li>critical</li>
                        <li>elevated</li>
                        <li>medium</li>
                        <li>low</li>
                        <li>intel</li>
                    </ul>
                </div>
                <div className="flex flex-col text-[16.5px]">
                    <h2 className="font-semibold">Issues count</h2>
                    <ul className="space-y-3 mt-4">
                        <li>05 / 05%</li>
                        <li>05 / 05%</li>
                        <li>10 / 10%</li>
                        <li>20 / 20%</li>
                        <li>60 / 60%</li>
                    </ul>
                </div>
            </div>

            <div className="w-1/2 flex items-center justify-center">
                <div>
                    <DoughnutChart />
                </div>
            </div>
        </div>

    )
}

export default RiskCounter;