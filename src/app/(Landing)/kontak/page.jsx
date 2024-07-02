import Header from '@/components/layouts/Header'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { PiBuildingOffice } from 'react-icons/pi'

const page = () => {
    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#0F172A] px-10 md:px-28 transition-all duration-300 pt-[100px] flex flex-wrap items-center gap-y-12">
                <div className="w-full lg:w-[576px] relative z-10">
                    <div className="font-bold text-3xl md:text-5xl text-white mb-6">
                        <div>Kontak Kami</div>
                    </div>
                    <div className="text-gray-400 text-base md:text-lg mb-4">
                        Jelajahi Fitur - Fitur Canggih ERP untuk Meningkatkan Efisiensi Perusahaan ISP Anda
                    </div>
                    <div className="flex items-center text-xs md:text-base gap-2 pr-3 py-3 text-white">
                        <PiBuildingOffice className='h-6 w-6 max-[400px]:h-12 max-[400px]:w-12'/>Jalan Alam Gaya N0. 42, Way Halim, Bandar Lampung, Lampung
                    </div>
                    <div className="flex items-center text-sm md:text-base gap-2 pr-3 py-3 text-white">
                        <CiMail className='h-6 w-6' />gerryarisman96@gmail.com
                    </div>
                    <div className="flex items-center text-sm md:text-base gap-2 pr-3 py-3 text-white">
                        <IoPhonePortraitOutline className='h-6 w-6' /> +62 21 7987 8923
                    </div>
                </div>
                <div className="xl:absolute relative z-10 bottom-0 right-0">
                    <img
                        src="/assets/business-man.png"
                        alt="wave"
                        className="h-full w-[450px]"
                    />
                </div>
                <div className="absolute z-10 bottom-0 left-0 opacity-5 w-screen min-w-[1280px]">
                    <img
                        src="/assets/lineart.png"
                        alt="wave"
                        className="h-full w-[1920px]"
                    />
                </div>
            </div>
        </main>

    )
}

export default page