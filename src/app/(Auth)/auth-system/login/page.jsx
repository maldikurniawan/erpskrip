import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const page = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className="flex flex-wrap justify-center bg-[#0F172A]">
                <div
                    className="flex flex-col items-center justify-center"
                >
                    <div className="font-bold text-xl my-4 flex md:text-3xl items-center gap-4 justify-center text-white">
                        <img
                            src="/assets/logo-erp.png"
                            alt="logo"
                            className="h-8 w-8 cursor-pointer"
                        />
                        ERPSkrip
                    </div>
                    <div className="overflow-hidden w-96 my-4">
                        <img
                            src="/assets/erp-video.png"
                            alt="pengguna"
                            className="h-full w-full object-contain"
                        />
                    </div>
                    <div className='text-center my-4'>
                        <div className="font-bold text-white">Ubah Kebiasaan</div>
                        <div className="text-gray-400">Hal ribet jangan terlalu lama dilakukan</div>
                    </div>
                </div>
            </div>
            <div className='bg-white flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                    <div className='text-4xl dark:text-white font-bold'>Masuk</div>
                    <div className='text-sm text-gray-400 font-bold mt-3 mb-6'>Mohon isi data di bawah ini</div>
                    <div className="w-full max-w-lg">
                        <div className="w-full">
                            <div className="relative w-full min-w-[200px] h-10 mb-4">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <input
                                    type='email' className="peer w-full h-full bg-gray-100 focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                    placeholder=" " required />
                                <label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Masukan Email
                                </label>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="relative w-full min-w-[200px] h-10 mb-4">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                    </svg>
                                </div>
                                <input
                                    type='password' className="peer w-full h-full bg-gray-100 focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                    placeholder=" " required />
                                <label
                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Masukan Password
                                </label>
                            </div>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 my-5 py-3 px-10 bg-[#0F172A] shadow-lg text-white font-semibold rounded-lg'>Masuk <BsChevronRight /></button>
                </form>
            </div>
        </div>
    )
}

export default page