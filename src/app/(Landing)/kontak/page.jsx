import HeaderV2 from '@/components/layouts/HeaderV2'
import React from 'react'
import { CiMail } from 'react-icons/ci'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { PiBuildingOffice } from 'react-icons/pi'

const page = () => {
    return (
        <main>
            <HeaderV2 />
            <div className="relative overflow-hidden min-h-screen bg-gray-900 px-10 md:px-28 transition-all duration-300 pt-[120px] pb-36 flex flex-wrap items-center gap-y-12">
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

                {/* background */}
                <div className="absolute z-0 w-48 h-48 rounded-full bg-white/10 -right-2 -bottom-28"></div>
                <div className="absolute z-0 w-60 h-60 rounded-full bg-white/10 -left-32 top-36"></div>
                <div className="absolute z-0 w-64 h-64 rounded-full bg-white/10 -right-14 -top-16"></div>
                {/* <div className="absolute z-0 bottom-0 left-0 mix-blend-multiply w-screen min-w-[1280px]">
				<img
					src="/assets/wave-hero.png"
					alt="wave"
					className="h-full w-[1920px]"
				/>
			</div> */}
            </div>
        </main>

    )
}

export default page