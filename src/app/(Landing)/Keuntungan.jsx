import React from 'react'
import { CiPlay1 } from 'react-icons/ci'

const Keuntungan = () => {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white px-10 md:px-28 transition-all duration-300 pt-[150px] pb-20 flex flex-wrap gap-x-10 gap-y-8 justify-between">
      <div className="w-full xl:flex-1">
        <div className="text-3xl font-bold mb-4">
          <div>Keuntungan <br />
            Menggunakan</div>
          <div>
            <span className="text-[#111827]">ERPSkrip</span>
          </div>
        </div>

        <div className="mb-6">
          Menjadi unggul dalam dunia bisnis yang kompetitif memerlukan
          alat yang tepat. Inilah mengapa ERP Skrip hadir untuk Anda

          <ul class="text-left text-black dark:text-black mt-3">
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Penghematan Biaya</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Integrasi Menyeluruh</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Peningkatan Keamanan Data</span>
            </li>
            <li class="flex items-center space-x-3 rtl:space-x-reverse">
              <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
              <span>Pengelolaan Sumber Daya Manusia yang Lebih Baik</span>
            </li>
          </ul>
        </div>

        <button className="flex items-center gap-2 p-3 border border-black text-black rounded-md font-bold">
          <CiPlay1 />Tonton Tutorial
        </button>
      </div>
      <div className="w-full xl:flex-1">
        <iframe className='w-full h-full' src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=jDPUZuZyN1WHNcef" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Keuntungan