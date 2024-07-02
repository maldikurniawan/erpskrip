import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

const Keuntungan = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20 flex flex-wrap gap-x-10 gap-y-8 justify-between">
      <div className="w-full xl:flex-1 z-30 mb-12">
        <div className="md:text-6xl text-3xl font-bold mb-4">
          <div>Keuntungan <br />
            Menggunakan</div>
          <div>
            <span className="text-[#0F172A]">ERPSkrip</span>
          </div>
        </div>

        <div className="mb-6">
          Menjadi unggul dalam dunia bisnis yang kompetitif memerlukan
          alat yang tepat. Inilah mengapa ERP Skrip hadir untuk Anda

          <ul className="text-left text-black dark:text-black mt-3">
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Penghematan Biaya</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Integrasi Menyeluruh</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Peningkatan Keamanan Data</span>
            </li>
            <li className="flex items-center space-x-3 rtl:space-x-reverse">
              <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Pengelolaan Sumber Daya Manusia yang Lebih Baik</span>
            </li>
          </ul>
        </div>

        <button className="flex items-center gap-2 p-3 border border-black text-black rounded-md font-bold">
          <CiPlay1 />Tonton Tutorial
        </button>
      </div>
      <div className="w-full xl:flex-1 z-30">
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jDPUZuZyN1WHNcef" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="absolute z-20 bottom-0 left-0 w-screen min-w-[1280px]">
				<img
					src="/assets/gelombang-hitam.png"
					alt="wave"
					className="h-full w-[1920px]"
				/>
			</div>
      <div className="absolute z-10 bottom-0 left-0 w-screen min-w-[1280px]">
				<img
					src="/assets/gelombang-putih.png"
					alt="wave"
					className="h-full w-[1920px]"
				/>
			</div>
      <div className="absolute z-0 bottom-0 left-0 w-screen min-w-[1280px]">
				<img
					src="/assets/gelombang-biru.png"
					alt="wave"
					className="h-full w-[1920px]"
				/>
			</div>
    </div>
  )
}

export default Keuntungan