import React from 'react'
import RadarScanner from '../Radar/Radar'
import Link from 'next/link';


function SurfaceExploration() {
    return (
        <div className="flex w-full max-w-[848px] h-[330px] rounded mx-auto items-center gap-8 p-6 bg-white text-white">
            <div className="w-[40%]">
                <RadarScanner />
            </div>
            <div className="flex flex-col gap-4 w-[60%]">
                <h2 className="text-xl font-semibold text-black">
                    Exploración de superficie en curso
                </h2>
                <p className="text-[16.5px] text-black leading-relaxed w-[450px]">
                    Aún no hemos detectado vulnerabilidades ni amenazas en sus sistemas,
                    pero hay un escaneo automático procesando información. Apenas se localice una,
                    vos y tu equipo serán notificados.
                </p>
                <Link href={"/HomeIssues"}><button className="self-start bg-gray-700 hover:bg-gray-500 transition px-6 py-3 rounded text-[16.5px] font-medium">
                    Ir hacia la sección de issues
                </button></Link>
            </div>
        </div>
    );

}

export default SurfaceExploration