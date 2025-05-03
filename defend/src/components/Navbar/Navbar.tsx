import React from 'react'
import Link from 'next/link';

function Navbar() {
    return (
        <div className="flex flex-col bg-white w-[240px] h-full rounded">
            <div className="mt-9">
                <h2 className="font-bold text-[19.8px] px-6">Main</h2>
                <ul className="space-y-2 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Team members</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Orders and payments</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">User profile</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Attack surface</h2>
                <ul className="space-y-2 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Web software</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Mobile software</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Network infrastructure</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Social attacks</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Issues</h2>
                <ul className="space-y-2 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">General informs</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Open issues</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Fixed issues</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Accepted risks</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="mt-4">
                <h2 className="font-bold text-[19.8px] px-6">Toolset</h2>
                <ul className="space-y-2 text-[16.5px]">
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Automated web scans</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Dataleaks explorer</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="block px-6 py-2 hover:bg-gray-200 transition-colors">
                            <span className="pl-2">Talk to a hacker</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default Navbar