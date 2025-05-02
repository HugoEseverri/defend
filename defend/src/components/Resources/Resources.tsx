import React from 'react'

function Resources() {
    return (
        <div className="flex w-full max-w-[800px] rounded mx-auto items-center gap-8 p-6 bg-gray-300 text-white">
            <div className="flex flex-wrap">
                <div className="m-1 flex flex-col justify-center text-center border rounded w-[30%] h-[124px] bg-white">
                    <p className="text-red-500 text-4xl font-bold">1</p>
                    <p className="text-red-500 text-[13px] font-bold">WEB APPS/SITES</p>
                </div>
                <div className="m-1 flex flex-col justify-center text-center border rounded w-[30%] h-[124px] bg-white">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">MOBILE APPS</p>
                </div>
                <div className="m-1 flex flex-col justify-center text-center border rounded w-[30%] h-[124px] bg-white">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">NETWORK ASSETS</p>
                </div>
                <div className="m-1 flex flex-col justify-center text-center border rounded w-[30%] h-[124px] bg-white">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">CLOUD ASSETS</p>
                </div>
                <div className="m-1 flex flex-col justify-center text-center border  rounded w-[30%] h-[124px] bg-white">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">SOURCE CODE</p>
                </div>
                <div className="m-1 flex flex-col justify-center text-center border rounded w-[30%] h-[124px] bg-white">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">SOCIAL ASSETS</p>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-[400px] rounded bg-white py-8">
                <h2 className="text-xl font-semibold text-black">
                    Añadir recursos
                </h2>
                <p className="text-sm text-black leading-relaxed">
                    Añada recursos para que podamos dimensionar su superficie de ataque y diseñar un plan a medida de sus necesidades.
                </p>
                <button className="self-start bg-red-500 hover:bg-red-300 transition px-6 py-3 rounded text-sm font-medium">
                    Ir hacia recursos
                </button>
            </div>
        </div>

    )
}

export default Resources