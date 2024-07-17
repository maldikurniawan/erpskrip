"use client";

import Header from '@/components/layouts/Header'
import React, { useState } from 'react'

const Pengguna = () => {

    const [pengguna] = useState([
        {
            title: "PT. Global Inaiyah Elektrindo",
            description:
                "Palembang",
            image: "/assets/gie-net.png",
        },
        {
            title: "PT. Queen Network Nusantara",
            description:
                "Bandar Lampung",
            image: "/assets/qnn.png",
        },
        {
            title: "PT. Giga Prima Lestari",
            description:
                "Bandar Lampung",
            image: "/assets/giga.png",
        },
        {
            title: "PT. Giga Prima Lestari",
            description:
                "Bandar Lampung",
            image: "/assets/qnn.png",
        },
    ]);

    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
                <div className="mb-3">
                    <div className="rounded-2xl text-white md:text-5xl font-bold overflow-hidden w-full text-3xl bg-[#0B193E] shadow text-center min-[450px]:py-20 py-10 mb-16">
                        Pengguna ERPSkrip
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {pengguna.map((item, itemIdx) => (
                            <div
                                key={itemIdx}
                                className="w-64 flex flex-col items-center justify-center border rounded-md"
                            >
                                <div className="rounded-2xl overflow-hidden max-w-sm text-sm text-black mb-2 py-4">
                                    <img
                                        src={item.image}
                                        alt="pengguna"
                                        className="h-40 w-40 object-contain"
                                    />
                                </div>
                                <div className='bg-[#0B193E] w-full text-center'>
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

export default Pengguna