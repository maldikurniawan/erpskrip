"use client";
import React from 'react'

const page = () => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
        <div className='bg-white w-full shadow p-3 rounded-lg'>Jumlah Kunjungan</div>
        <div className='bg-white w-full shadow p-3 rounded-lg'>Jumlah Pertemuan</div>
        <div className='bg-white w-full shadow p-3 rounded-lg'>Jumlah Review</div>
        <div className='bg-white w-full shadow p-3 rounded-lg'>Jumlah Artikel</div>
    </div>
  )
}

export default page