import Header from '@/components/layouts/Header'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { PiBuildingOffice } from 'react-icons/pi'

const page = () => {
    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#0F172A] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-36 flex flex-wrap items-center gap-y-12">
                <div className="w-full lg:w-[576px] relative z-10">
                    <div className="font-bold text-3xl md:text-5xl text-white mb-6">
                        <div>Kontak Kami</div>
                    </div>
                    <div className="text-gray-400 text-base md:text-lg mb-4">
                        Jelajahi Fitur - Fitur Canggih ERP untuk Meningkatkan Efisiensi Perusahaan ISP Anda
                    </div>
                    <div className="flex items-center gap-2 pr-3 py-3 text-white font-bold">
                        <PiBuildingOffice className='h-6 w-6' />Jalan Alam Gaya N0. 42, Way Halim, Bandar Lampung, Lampung
                    </div>
                    <div className="flex items-center gap-2 pr-3 py-3 text-white font-bold">
                        <CiMail className='h-6 w-6' />gerryarisman96@gmail.com
                    </div>
                    <div className="flex items-center gap-2 pr-3 py-3 text-white font-bold">
                        <IoPhonePortraitOutline className='h-6 w-6' /> +62 21 7987 8923
                    </div>
                </div>
                <div className="w-full flex-1 flex items-center justify-center xl:justify-end relative z-10">
                    <div className="w-96">
                        <img
						src="/assets/business-man.png"
						alt="hero"
						className="h-full w-full"
					/>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default page