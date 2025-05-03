import React from 'react'

function IssuesCounter() {
    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 w-[500px] gap-4 rounded">
                <div className=" flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-600 text-4xl font-bold">0</p>
                    <p className="text-red-500 text-[13px] font-bold">OPEN ISSUES</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">FEED ISSUES</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">TOTAL ISSUSES</p>
                </div>
                
            </div>
        </div>
    )
}

export default IssuesCounter