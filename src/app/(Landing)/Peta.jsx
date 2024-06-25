import React from 'react'

const Peta = () => {
  return (
    <div className='relative overflow-hidden z-0 min-h-screen bg-[#0F172A] px-10 md:px-28 transition-all duration-300 pt-[60px] pb-20'>
      <div className='text-white relative z-20 font-bold flex flex-col items-center text-center text-3xl md:text-6xl md:pt-40 pt-80 gap-4'>
        <div>
          11,658,467
        </div>
        <div>
          ISP Telah Menggunakan ESPSkrip
        </div>
      </div>
      <div className="absolute z-10 bottom-0 top-0 left-0 w-full">
        <img
          src="indonesia.svg"
          alt="bg-peta"
          className="h-full w-full"
        />
      </div>
    </div>
  )
}

export default Peta