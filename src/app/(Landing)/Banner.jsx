import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Banner = () => {
    return (
        <div className="relative overflow-hidden h-96 bg-gray-900 px-10 md:px-28 transition-all duration-300 pt-[60px] pb-20">
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
                <button className="flex items-center gap-2 p-3 border border-white rounded-md font-bold">
                    Ajukan Demo Sekarang<FaArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Banner