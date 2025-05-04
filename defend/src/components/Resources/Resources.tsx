import React from 'react'

function Resources() {
    return (
        <div className='flex justify-center '>
            <div className="grid grid-cols-3 grid-rows-2 w-[500px] gap-2 rounded">
                <div className=" flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-red-500 text-4xl font-bold">1</p>
                    <p className="text-red-500 text-[13px] font-bold">WEB APPS/SITES</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">MOBILE APPS</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">NETWORK ASSETS</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">CLOUD ASSETS</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">SOURCE CODE</p>
                </div>
                <div className="flex flex-col justify-center text-center bg-white w-[156px] h-[153px] rounded">
                    <p className="text-gray-500 text-4xl font-bold">0</p>
                    <p className="text-black text-[13px] font-bold">SOCIAL ASSETS</p>
                </div>
            </div>
            <div className='w-[340px] bg-white rounded ml-2'>
                <div className='flex flex-col justify-center p-6'>
                    <h2 className='text-xl font-semibold text-black'>Añadir recursos</h2>
                    <p className="text-black leading-relaxed mt-5 text-[16.5px] w-[270px]">
                        Añada recursos para que podamos dimensionar su superficie de ataque y diseñar un plan a medida de sus necesidades.
                    </p>

                    <button className="mt-15 bg-red-400 hover:bg-red-300 transition px-6 py-3 rounded font-medium text-white w-[170px]">
                        Ir hacia recursos
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Resources