import Header from '@/components/layouts/Header'
import React from 'react'

const page = () => {
    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#0F172A] px-10 md:px-28 transition-all duration-300 pt-[150px] pb-20 flex flex-wrap gap-x-10 gap-y-8 justify-between">
                <div className="w-full xl:flex-1">
                    <div className="font-bold text-3xl md:text-5xl text-white mb-6">
                        <div>Konfigurasi</div>
                        <div>Pelanggan Tanpa</div>
                        <div>Ribet</div>
                    </div>
                    <div className="text-white text-sm md:text-base mb-4">
                        Kami memastikan bahwa setiap langkah konfigurasi dapat dilakukan dengan cepat dan akurat, menghemat waktu dan sumber daya Anda. Nikmati kemudahan dan kenyamanan dalam mengelola infrastruktur jaringan Anda dengan solusi praktis dari ERPSkrip.
                    </div>
                    <button className="px-6 py-2 md:py-3 text-sm md:text-base text-white font-normal md:font-semibold shadow border border-white rounded-lg">
                        Ajukan Demo
                    </button>
                </div>
                <div className="w-full xl:flex-1">
                    <iframe className='w-full h-full aspect-video rounded-md' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jDPUZuZyN1WHNcef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </main>
    )
}

export default page