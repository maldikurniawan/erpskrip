import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className="relative overflow-hidden h-96 bg-[#1E293B] px-10 md:px-28 transition-all duration-300 pt-[60px] pb-20">
            <div className='text-white flex flex-col items-center text-center'>
                <div className='font-bold'>
                    MULAILAH KEMUDAHAN BERUSAHA SEKARANG
                </div>
                <div className='md:text-5xl text-3xl my-2 font-bold'>
                    ERPSkrip!
                </div>
                <div className='mt-6 mb-8'>
                    Kesuksesan bisnis Anda dimulai dengan langkah kecil. Ayo, <br />
                    jelajahi kemudahan dan keunggulan ERPSkrip hari ini!
                </div>
                <Link href={'/ajukan'} prefetch={false}>
                    <div className="flex items-center gap-2 p-3 border border-white rounded-md font-bold">
                        Ajukan Demo Sekarang<FaArrowRight />
                    </div>
                </Link>
            </div>
            <div className="absolute z-10 bottom-0 left-0 opacity-5 w-screen min-w-[1280px]">
                <img
                    src="/assets/lineart.png"
                    alt="wave"
                    className="h-full w-[1920px]"
                />
            </div>
            <div className="absolute z-0 top-0 right-0 rotate-12 opacity-40 xl:block hidden">
                <img
                    src="/assets/erp-pic.png"
                    alt="wave"
                    className="h-full w-[500px]"
                />
            </div>
            <div className="absolute z-0 -bottom-28 right-0 rotate-12 opacity-40 xl:block hidden">
                <img
                    src="/assets/erp-pic.png"
                    alt="wave"
                    className="h-full w-[500px]"
                />
            </div>
        </div>
    )
}

export default Banner