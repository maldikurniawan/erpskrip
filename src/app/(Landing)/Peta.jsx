import React from 'react'

const Peta = () => {
  return (
    <div className='relative overflow-hidden min-h-screen bg-gray-900 px-10 md:px-28 transition-all duration-300 pt-[60px] pb-20'>
      <div className='text-white relative z-10 font-bold flex flex-col items-center text-center text-3xl md:text-6xl pt-40 gap-4'>
        <div>
          11,658,467
        </div>
        <div>
          ISP Telah Menggunakan ESPSkrip
        </div>
      </div>
      <div className="absolute z-0 bottom-0 top-0 left-0 mix-blend-multiply w-full">
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