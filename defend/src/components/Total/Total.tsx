import React from 'react'

function Total() {
    return (
        <div>
            <div className="grid grid-cols-3 grid-rows-1 w-[500px] gap-4 rounded">
                <div className=" flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-red-500 text-4xl font-bold">26</p>
                    <p className="text-red-500 text-[13px] font-bold">FINDINGS</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-300 text-4xl font-bold">
                        <span className="text-gray-300">0</span>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-400">26</span>
                    </p>
                    <p className="text-black text-[13px] font-bold">PARSED FINDINGS</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-300 text-4xl font-bold">82%</p>
                    <p className="text-black text-[13px] font-bold">EST. PROGRESS</p>
                </div>

            </div>
        </div>
    )
}

export default Total;