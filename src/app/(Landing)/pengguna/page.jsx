"use client";

import Header from '@/components/layouts/Header'
import React, { useState } from 'react'

const page = () => {

    const [pengguna] = useState([
        {
            title: "PT. Global Inaiyah Elektrindo",
            description:
                "Palembang",
            image: "/assets/keuntungan-2.png",
        },
        {
            title: "PT. Queen Network Nusantara",
            description:
                "Bandar Lampung",
            image: "/assets/keuntungan-2.png",
        },
        {
            title: "PT. Giga Prima Lestari",
            description:
                "Bandar Lampung",
            image: "/assets/keuntungan-2.png",
        },
        {
            title: "PT. Giga Prima Lestari",
            description:
                "Bandar Lampung",
            image: "/assets/keuntungan-2.png",
        },
    ]);

    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
                <div className="mb-3">
                    <div className="rounded-2xl text-white md:text-5xl font-bold overflow-hidden w-full text-3xl bg-blue-950 shadow text-center py-24 mb-16">
                        Pengguna ERPSkrip
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {pengguna.map((item, itemIdx) => (
                            <div
                                key={itemIdx}
                                className="w-64 flex flex-col items-center justify-center border rounded-md"
                            >
                                <div className="rounded-2xl overflow-hidden max-w-sm text-sm bg-blue-100 text-black shadow-lg mb-2">
                                    <img
                                        src={item.image}
                                        alt="pengguna"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div className='bg-gray-800 w-full text-center'>
                                    <div className="px-4 pt-4 font-bold text-white text-sm">{item.title}</div>
                                    <div className="px-4 pb-4 text-sm text-gray-500">{item.description}</div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page