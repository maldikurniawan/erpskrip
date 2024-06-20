import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

const page = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='w-full h-full object-cover' src="/assets/login.jpg" alt="" />
            </div>

            <div className='bg-white flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                    <div className='text-4xl dark:text-white font-bold'>Masuk</div>
                    <div className='text-sm text-gray-400 font-bold mt-3 mb-6'>Mohon isi data di bawah ini</div>
                    <div className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full px-3 mb-3">
                                <div className="absolute inset-y-0 ml-2 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>
                                </div>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukan Email' required />
                            </div>
                            <div className="relative w-full px-3">
                                <div className="absolute inset-y-0 ml-2 start-0 flex items-center ps-3.5 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
                                    </svg>
                                </div>
                                <input type="text" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Masukan Password' required />
                            </div>
                        </div>
                    </div>
                    <button className='flex items-center gap-2 my-5 py-3 px-10 bg-gray-900 shadow-lg text-white font-semibold rounded-lg'>Masuk <BsChevronRight /></button>

                </form>
            </div>
        </div>
    )
}

export default page