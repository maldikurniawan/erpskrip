"use client";
import React, { useState } from 'react';

const Fitur = () => {
    const [fitur] = useState([
        {
            title: "Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate integer pellentesque aliquam ipsum.",
            icon: "/assets/fitur-1.png",
        },
        {
            title: "Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate integer pellentesque aliquam ipsum.",
            icon: "/assets/fitur-2.png",
        },
        {
            title: "Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate integer pellentesque aliquam ipsum.",
            icon: "/assets/fitur-3.png",
        },
        {
            title: "Lorem Ipsum",
            description:
                "Lorem ipsum dolor sit amet consectetur. Vulputate integer pellentesque aliquam ipsum.",
            icon: "/assets/fitur-3.png",
        },
    ]);

    return (
        <div className="relative overflow-hidden min-h-screen bg-gray-200 px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20">
            <div className="mb-12">
                <div className="text-center text-2xl md:text-3xl text-black font-bold mb-2">
                    Fitur - Fitur <span className="text-[#111827]">ERPSkrip</span>
                </div>
                <div className="text-[#A1A1A1] text-center text-base md:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Convallis dis quam
                </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center">
                {fitur.map((item, itemIdx) => (
                    <div
                        key={itemIdx}
                        className="w-64 flex flex-col items-center justify-center"
                    >
                        <div className="rounded-2xl overflow-hidden max-w-sm text-sm bg-blue-100 text-black shadow-lg">
                            <div className="p-4 font-bold">{item.title}</div>
                            <div className="p-4">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fitur