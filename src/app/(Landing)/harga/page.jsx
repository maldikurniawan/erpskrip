import Header from '@/components/layouts/Header'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const page = () => {
    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
                <div className='font-bold text-4xl mb-8 text-center'>Harga Spesial</div>
                <div className="mb-3">
                    <div className="rounded-2xl overflow-hidden w-full text-sm bg-gradient-to-br from-[#4B5563] to-[#111827] shadow flex flex-wrap">
                        <div className="relative md:flex-1 w-full md:w-fit">
                            <div className="relative z-10 bg-white w-full h-full rounded-lg overflow-hidden mix-blend-multiply">
                                <img
                                    src="/assets/hand-shake.jpeg"
                                    alt="blog"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <div className="md:flex-1 flex flex-col justify-between w-full md:w-fit text-white p-8">
                            <div>
                                <div className="mb-2">
                                    <div className="font-bold text-base">Dengan Rp 5.000/Transaksi</div>
                                </div>
                                <div className="text-sm line-clamp-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, soluta possimus ad eius laborum fuga a vel pariatur iusto perferendis impedit ipsum ex sapiente odit aut debitis? Velit, dolorum repellat.
                                </div>
                                <div>
                                    <button type='submit' className="flex items-center mt-2 gap-2 p-3 w-fit hover:border rounded-md font-bold">
                                        Booking Sekarang <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page