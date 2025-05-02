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
                    <p className="text-black leading-relaxed mt-5 text-[16.5px]">
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


//     < div className = "flex w-[950px] rounded mx-auto bg-gray-300 text-white" >
// //     {/* Primer contenedor: grid de 3x2 sin gap */}
// //     <div className="grid grid-cols-3 gap-0 text-[16.5px] basis-[52%] ">
// //         {[
//             { count: 1, label: 'WEB APPS/SITES', color: 'text-red-500' },
//             { count: 0, label: 'MOBILE APPS', color: 'text-gray-500' },
//             { count: 0, label: 'NETWORK ASSETS', color: 'text-gray-500' },
//             { count: 0, label: 'CLOUD ASSETS', color: 'text-gray-500' },
//             { count: 0, label: 'SOURCE CODE', color: 'text-gray-500' },
//             { count: 0, label: 'SOCIAL ASSETS', color: 'text-gray-500' },
//         ].map(({ count, label, color }, index) => (
//             <div key={index} className="flex flex-col justify-center text-center border rounded w-[156px] h-[153px] bg-white ">
//                 <p className={`${color} text-4xl font-bold`}>{count}</p>
//                 <p className={`text-[13px] font-bold ${label === 'WEB APPS/SITES' ? 'text-red-500' : 'text-black'}`}>
//                     {label}
//                 </p>
//             </div>
//         ))}
//     </div>

//     {/* Segundo contenedor: contenido centrado, aspecto cuadrado */}
//     <div className="basis-[35%] flex-shrink-0 aspect-square flex flex-col items-center justify-center rounded bg-white text-[16.5px] text-center p-4 m-0">
//         <h2 className="text-xl font-semibold text-black">
//             Añadir recursos
//         </h2>
//         <p className="text-black leading-relaxed mt-2">
//             Añada recursos para que podamos dimensionar su superficie de ataque y diseñar un plan a medida de sus necesidades.
//         </p>
//         <button className="mt-4 bg-red-500 hover:bg-red-300 transition px-6 py-3 rounded font-medium">
//             Ir hacia recursos
//         </button>
//     </div>
// </div>