import React from 'react';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-sans">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-8 py-6 shadow-md bg-transparent">
                <div className="text-2xl font-extrabold tracking-wide text-white">
                    RAMNITO
                </div>
                <ul className="flex gap-6 text-lg font-medium">
                    <li className="hover:text-blue-400 cursor-pointer transition">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer transition">About</li>
                    <li className="hover:text-blue-400 cursor-pointer transition">Services</li>
                    <li className="hover:text-blue-400 cursor-pointer transition">Contact</li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center mt-20 px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl">
                    Building an <span className="text-blue-400">efficient digital</span> platform
                </h1>
            </section>
        </div>
    );
}
