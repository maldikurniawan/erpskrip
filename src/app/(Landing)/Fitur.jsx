"use client";
import React, { useState } from 'react';

const Fitur = () => {
    const [fitur] = useState([
        {
            title: "Teknis",
            description:
                "Konfigurasi OLT, Pengaturan Router, Audit Infrastruktur, dan Manajemen FTTX untuk mengoptimalkan ISP anda.",
            icon: "/assets/cog-outline.png",
        },
        {
            title: "Umum",
            description:
                "Akses cepat ke semua pengaturan dasar dan informasi penting Perusahaan ISP Anda.",
            icon: "/assets/cube-outline.png",
        },
        {
            title: "Marketing",
            description:
                "Analisis Pencapaian Penjualan, Registrasi Pelanggan, dan Data Pelanggan untuk meningkatkan bisnis Anda.",
            icon: "/assets/bar-chart-outline.png",
        },
        {
            title: "Keuangan",
            description:
                "Laporan Keuangan, Penganggaran, dan Pemantauan Arus Kas dalam satu menu terintegrasi.",
            icon: "/assets/cash-outline.png",
        },
    ]);

    return (
        <div className="relative overflow-hidden min-h-screen bg-[#F1F1F1] px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20">
            <div className="mb-12">
                <div className="text-center text-3xl md:text-6xl text-black font-bold mb-2">
                    Fitur - Fitur <span className="text-[#0F172A]">ERPSkrip</span>
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
                        className="w-64 flex flex-col bg-[#E2E8F0] rounded-md"
                    >
                        <div className="rounded-md overflow-hidden max-w-sm text-sm px-4 pt-4 pb-2 text-black">
                            <img
                                src={item.icon}
                                alt="pengguna"
                                className="h-12 w-12 object-contain"
                            />
                        </div>
                        <div>
                            <div className="px-4 font-bold">{item.title}</div>
                            <div className="px-4 pb-4 pt-2">{item.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute z-10 top-0 left-0 w-screen min-w-[1280px]">
				<img
					src="/assets/kotak-kiri.png"
					alt="wave"
					className="h-20 w-20"
				/>
			</div>
            <div className="absolute z-10 bottom-0 right-0">
				<img
					src="/assets/kotak-kanan.png"
					alt="wave"
					className="h-20 w-20"
				/>
			</div>
        </div>
    );
}

export default Fitur