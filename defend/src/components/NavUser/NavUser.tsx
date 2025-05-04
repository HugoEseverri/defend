"use client"

import React from 'react'
import Image from 'next/image'
import { useUserStore } from '@/store/useUserStore'

function NavUser() {
    const userData = useUserStore((state) => state.userData);
    const name = userData?.name || '';
    const email = userData?.email || '';

    const setShowOnboarding = useUserStore((state) => state.setShowOnboarding);
    const setPassword = useUserStore((state) => state.setPassword);
    const registerUser = useUserStore((state) => state.registerUser);

    const handleLogout = () => {
        const confirmLogout = window.confirm('¿Estás seguro de que querés cerrar sesión?');
        if (confirmLogout) {
            registerUser({});
            setPassword('');
            setShowOnboarding(true);
        }
    }
    

    return (
        <div className='w-[1622px] flex justify-between rounded items-center ml-4 mt-2 h-[50px] bg-white'>
            {/* Sección izquierda */}
            <div className='flex items-center gap-2 text-sm ml-4'>
                <Image
                    src="/add-scope.png"
                    alt='Add Scope'
                    width={27}
                    height={27}
                />
                <h2 className='text-red-500 font-semibold'>
                    {name || 'Usuario'}
                    <span className='text-black'> //</span>
                </h2>
            </div>

            {/* Sección derecha */}
            <div className='flex items-center bg-gray-100 h-[50px] text-[16.5px] rounded'>
                <h2 className='text-gray-600 border-l-1 border-gray-200 p-3'>
                    {email || ''}
                </h2>
                <button onClick={handleLogout} title="Cerrar sesión" className='border-l-1 border-gray-200 p-4'>
                    <Image
                        src="/interfaz.png"
                        alt="Cerrar sesión"
                        width={15}
                        height={15}
                        className="cursor-pointer"
                    />
                </button>
            </div>
        </div>
    )
}

export default NavUser
