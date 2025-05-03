import React from 'react'

function IssuesCounterTwo() {
    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 w-[500px] gap-4 rounded">
                <div className=" flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-600 text-4xl font-bold">
                        <span className="text-red-500">3</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">20</span></p>
                    <p className="text-red-500 text-[13px] font-bold">OPEN ISSUES</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">
                        <span className="text-gray-300">17</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">20</span></p>
                    <p className="text-black text-[13px] font-bold">FIXED ISSUES</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">
                        <span className="text-gray-300">20</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">20</span>
                    </p>
                    <p className="text-black text-[13px] font-bold">TOTAL ISSUSES</p>
                </div>

            </div>
        </div>
    )
}

export default IssuesCounterTwo