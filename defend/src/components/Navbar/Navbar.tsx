"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Onboard from '@/components/Onboard/Onboard';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Formulario enviado');
    };
    return (
        <div className="flex flex-col bg-white w-[240px] h-full rounded">
            <div className="mt-9">
                <h2 className="font-bold text-[19.8px] px-6">Main</h2>
                <ul className="space-y-1 text-[16.5px]">
                    <li>
                        <Link href="/" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Team members</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Orders and payments</span>
                        </Link>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-6 py-2 hover:bg-gray-200 transition-colors cursor-pointer"
                            onClick={handleOpenModal}
                        >
                            <span>User Profile</span>
                        </a>
                    </li>

                    {isModalOpen && (
                        <>

                            <div
                                className="fixed inset-0 bg-gray-500 opacity-50 z-40"
                                onClick={handleCloseModal}
                            ></div>

                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <Onboard onClose={handleCloseModal} onSubmit={handleSubmit} />
                            </div>
                        </>
                    )}
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Attack surface</h2>
                <ul className="space-y-1 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Web software</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Mobile software</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Network infrastructure</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Social attacks</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Issues</h2>
                <ul className="space-y-1 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>General informs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Open issues</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Fixed issues</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Accepted risks</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Toolset</h2>
                <ul className="space-y-1 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Automated web scans</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Dataleaks explorer</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span>Talk to a hacker</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar