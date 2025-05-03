import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Colaborators() {
    return (
        <div className='bg-white w-[420px] h-[310px] p-5 rounded'>
            <div className='flex '>
                <div className='mr-4 mt-2 h-[30px]'>
                    <Image
                        src="/alloc-1.png"
                        alt='Colaboradores'
                        width={21}
                        height={0}
                    />
                </div>
                <div className='text-[16.5px]'>
                    <h2 className='font-semibold text-[21.45px]'>Colaboradores</h2>
                </div>
            </div>
            <div>
                <ul className='text-[16.5px] space-y-2 mt-2'>
                    <li>- Añada colaboradores a su equipo</li>
                    <li>- Resuelva las vulnerabilidades más fácil.</li>
                    <li>- No hay un máximo de colaboradores.</li>
                    <Link href={"/#"}><li className='text-red-500 font-semibold underline'>- Añadir un colaborador.</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Colaborators