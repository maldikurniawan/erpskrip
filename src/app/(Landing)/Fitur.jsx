"use client";
import React, { useState } from 'react';

const Fitur = () => {
    const [fitur] = useState([
        {
            title: "Teknis",
            description:
                "Konfigurasi OLT, Pengaturan Router, Audit Infrastruktur, dan Manajemen FTTX untuk mengoptimalkan ISP anda.",
            icon: "/assets/keuntungan-3.png",
        },
        {
            title: "Umum",
            description:
                "Akses cepat ke semua pengaturan dasar dan informasi penting Perusahaan ISP Anda.",
            icon: "/assets/keuntungan-3.png",
        },
        {
            title: "Marketing",
            description:
                "Analisis Pencapaian Penjualan, Registrasi Pelanggan, dan Data Pelanggan untuk meningkatkan bisnis Anda.",
            icon: "/assets/keuntungan-3.png",
        },
        {
            title: "Keuangan",
            description:
                "Laporan Keuangan, Penganggaran, dan Pemantauan Arus Kas dalam satu menu terintegrasi.",
            icon: "/assets/keuntungan-3.png",
        },
    ]);

    return (
        <div className="relative overflow-hidden min-h-screen bg-gray-100 px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20">
            <div className="mb-12">
                <div className="text-center text-3xl md:text-5xl text-black font-bold mb-2">
                    Fitur - Fitur <span className="text-[#111827]">ERPSkrip</span>
                </div>
                <div className="text-gray-600 text-center text-base md:text-lg">
                    Jelajahi Fitur - Fitur Canggih ERP untuk Meningkatkan Efisiensi <br />
                    Perusahaan ISP Anda
                </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
                {fitur.map((item, itemIdx) => (
                    <div
                        key={itemIdx}
                        className="w-64 flex flex-col items-center justify-center bg-blue-50 shadow-lg rounded-md"
                    >
                        <div className="rounded-md overflow-hidden max-w-sm p-2 text-sm text-black">
                            <img
                                src={item.icon}
                                alt="pengguna"
                                className="h-full w-full object-contain p-2"
                            />
                        </div>
                        <div>
                            <div className="px-4 pt-4 font-bold">{item.title}</div>
                            <div className="px-4 pb-4 pt-2">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fitur