"use client";
import Header from '@/components/layouts/Header'
import React, { useState } from "react";
import dayjs from "dayjs";
import { generateDate, months } from "@/utils/calendar";
import cn from "@/utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BsChevronRight, BsExclamationLg } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

const page = () => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const days2 = ["M", "S", "S", "R", "K", "J", "S"];
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    const [selectDate, setSelectDate] = useState(currentDate);
    const [showModal, setShowModal] = React.useState(false);
    const [showInput, setShowInput] = React.useState(false);

    return (
        <main>
            <Header />
            <div className="relative overflow-hidden min-h-screen bg-[#F1F1F1] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
                <div className='font-bold text-4xl mb-2 text-center'>Buat Janji Bertemu</div>
                <div className='text-gray-400 text-base md:text-lg mb-8 text-center'>Jelajahi Fitur - Fitur Canggih ERP untuk Meningkatkan Efisiensi <br /> Perusahaan ISP Anda</div>
                <form className="mb-3">
                    <div className='rounded-2xl overflow-hidden w-full text-sm bg-white shadow p-8'>
                        <div className="flex flex-wrap gap-4">
                            <div className="relative md:flex-1 w-full md:w-fit">
                                <div className='font-bold text-xl mb-2'>
                                    Detail Pembuat Janji
                                </div>
                                <div className="w-full max-w-lg">
                                    <div className="w-full">
                                        <div className="relative w-full min-w-[200px] h-10 mb-4">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type='text' className="peer w-full h-full bg-[#F5F5F7] focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                placeholder=" " required/>
                                            <label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"><span className='text-red-900'>*</span>Nama Perusahaan
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative w-full min-w-[200px] h-10 mb-4">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                                                </svg>
                                            </div>
                                            <input
                                                type='text' className="peer w-full h-full bg-[#F5F5F7] focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                placeholder=" " required/>
                                            <label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"><span className='text-red-900'>*</span>Alamat Perusahaan
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative w-full min-w-[200px] h-10 mb-4">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                                                </svg>
                                            </div>
                                            <input
                                                type='email' className="peer w-full h-full bg-[#F5F5F7] focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                placeholder=" " required/>
                                            <label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"><span className='text-red-900'>*</span>Email Perusahaan
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative w-full min-w-[200px] h-10 mb-4">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                                </svg>
                                            </div>
                                            <input
                                                type='text' className="peer w-full h-full bg-[#F5F5F7] focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                placeholder=" " required/>
                                            <label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"><span className='text-red-900'>*</span>No. Telp Perusahaan
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="relative w-full min-w-[200px] h-10 mb-4">
                                            <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                                </svg>
                                            </div>
                                            <input
                                                type='text' className="peer w-full h-full bg-[#F5F5F7] focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                placeholder=" " />
                                            <label
                                                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Website Perusahaan
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className='font-bold text-xl mb-2'>
                                    Detail Meeting
                                </div>
                                <div class="flex mb-4">
                                    <div class="flex items-center me-4">
                                        <input type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-[#F5F5F7] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setShowInput(false)} />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                        </svg>
                                        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 mr-4">Online</label>
                                    </div>
                                    <div class="flex items-center me-4">
                                        <input type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-blue-600 bg-[#F5F5F7] border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={() => setShowInput(true)} />
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ml-2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 0 1-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 0 0-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
                                        </svg>
                                        <label for="inline-2-radio" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Offline</label>
                                    </div>
                                </div>
                                {showInput ? (
                                    <>
                                        <div className="w-full">
                                            <div className="relative w-full min-w-[200px] h-10 mb-4">
                                                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                    </svg>
                                                </div>
                                                <input
                                                    type='text' className="peer w-full h-full bg-gray-100 focus:bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 ps-10"
                                                    placeholder=" " />
                                                <label
                                                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:before:ps-9 before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Alamat Pertemuan
                                                </label>
                                            </div>
                                        </div>
                                    </>
                                ) : null}
                                <button type='button' className='flex items-center gap-2 p-3 w-full rounded-lg text-sm bg-orange-100' onClick={() => setShowModal(true)}>
                                    <BsExclamationLg /> Offline Hanya Untuk Bandar Lampung <BsChevronRight />
                                </button>
                            </div>

                            <div className="md:flex-1 flex flex-col w-full md:w-fit">
                                <div className='font-bold text-xl mb-2'>
                                    Pilih Tanggal & Waktu
                                </div>
                                <div className="flex justify-between items-center border border-black rounded-md p-2 mb-2">
                                    <h1 className="select-none font-semibold">
                                        {months[today.month()]}, {today.year()}
                                    </h1>
                                    <div className="flex gap-10 items-center ">
                                        <GrFormPrevious
                                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(today.month(today.month() - 1));
                                            }}
                                        />
                                        <h1
                                            className=" cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(currentDate);
                                            }}
                                        >
                                            Today
                                        </h1>
                                        <GrFormNext
                                            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
                                            onClick={() => {
                                                setToday(today.month(today.month() + 1));
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className='border border-black rounded-md p-2 '>
                                    <div className="grid grid-cols-7 max-[530px]:hidden">
                                        {days.map((day, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="text-sm text-center h-14 w-15 grid place-content-center text-gray-500 select-none"
                                                >
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="grid grid-cols-7 min-[530px]:hidden">
                                        {days2.map((day, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="text-sm text-center h-14 w-15 grid place-content-center text-gray-500 select-none"
                                                >
                                                    {day}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className=" grid grid-cols-7 ">
                                        {generateDate(today.month(), today.year()).map(
                                            ({ date, currentMonth, today }, index) => {
                                                return (
                                                    <div
                                                        key={index}
                                                        className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                                                    >
                                                        <h1
                                                            className={cn(
                                                                currentMonth ? "" : "text-gray-400",
                                                                today
                                                                    ? "bg-red-600 text-white"
                                                                    : "",
                                                                selectDate
                                                                    .toDate()
                                                                    .toDateString() ===
                                                                    date.toDate().toDateString()
                                                                    ? "bg-black text-white"
                                                                    : "",
                                                                "h-10 w-10 rounded-full grid place-content-center hover:bg-black hover:text-white transition-all cursor-pointer select-none"
                                                            )}
                                                            onClick={() => {
                                                                setSelectDate(date);
                                                            }}
                                                        >
                                                            {date.date()}
                                                        </h1>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                                <div className='font-bold text-xl mb-2 mt-4'>
                                    Waktu Meeting
                                </div>
                                <div class="grid w-full place-items-center">
                                    <div class="grid w-full grid-cols-4 md:grid-cols-7 gap-2 rounded-xl p-2">
                                        <div>
                                            <input type="radio" name="option" id="1" value="1" className="peer hidden" />
                                            <label for="1" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">09.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="2" value="2" className="peer hidden" />
                                            <label for="2" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">10.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="3" value="3" className="peer hidden" />
                                            <label for="3" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">11.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="4" value="4" className="peer hidden" />
                                            <label for="4" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">14.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="5" value="5" className="peer hidden" />
                                            <label for="5" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">15.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="6" value="6" className="peer hidden" />
                                            <label for="6" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">16.00</label>
                                        </div>

                                        <div>
                                            <input type="radio" name="option" id="7" value="7" className="peer hidden" />
                                            <label for="7" className="block cursor-pointer bg-[#F5F5F7] select-none rounded-xl p-2 text-center peer-checked:bg-gray-900 peer-checked:font-bold peer-checked:text-white">17.00</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-5 text-xs gap-4 md:text-sm text-white flex border-t-[3px] border-[#D9D9D9] mt-4">
                            <button className='bg-red-700 py-3 rounded-lg md:px-10 px-4'>Batalkan</button>
                            <button className='bg-gray-800 py-3 rounded-lg md:px-10 px-4'>Buat Janji</button>
                        </div>
                    </div>
                </form>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between py-3 rounded-t mt-3">
                                    <div className="flex items-center gap-2 text-xl font-semibold p-3 rounded-r-lg bg-orange-100">
                                        <BsExclamationLg />Offline Hanya Untuk Bandar Lampung
                                    </div>
                                    <button
                                        className="p-1 ml-auto float-right text-3xl font-semibold"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="h-6 w-6 text-2xl block mr-2">
                                            <IoMdClose />
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-3 flex-auto mb-3">
                                    <p className="my-2 text-gray-400 text-base">
                                        Kami ingin memberitahukan bahwa untuk layanan offline yang dilakukan di luar wilayah Bandar Lampung, akan dikenakan biaya tambahan.  Hal ini berlaku untuk memastikan bahwa kami dapat terus memberikan pelayanan terbaik dan tepat waktu kepada semua pelanggan kami. Terima kasih atas pengertian dan kerja samanya.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </main>
    )
}

export default page