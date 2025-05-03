import React from 'react'
import SurfaceExploration from '@/components/SurfaceExploration/SurfaceExploration'
import Resources from '@/components/Resources/Resources'
import Colaborators from '@/components/Colaborators/Colaborators'
import Contact from '@/components/Contact/Contact'

function Row2() {
    return (
        <div className='w-[850px]'>
            {/* Contenedor para SurfaceExploration y Resources */}
            <div className="mb-4">
                <SurfaceExploration />
            </div>
            <div className="mb-4">
                <Resources />
            </div>

            {/* Contenedor para Colaborators y Contact, alineados horizontalmente */}
            <div className="flex justify-center gap-2">
                <div className="w-[420px]">
                    <Colaborators />
                </div>
                <div className="w-[420px]">
                    <Contact />
                </div>
            </div>
        </div>
    );
}

    



export default Row2