"use client";

import HeaderV2 from '@/components/layouts/HeaderV2'
import React, { useState } from 'react'
import { TbMinus, TbPlus } from 'react-icons/tb';

const page = () => {

  const [faq, setFaq] = useState([
    {
      title: "Apa Itu ERPSkrip ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum praesentium neque cum, dicta suscipit sint. Enim dolor repellendus nisi qui cumque quibusdam voluptatem, vero iure esse similique quia vitae.",
      open: false,
    },
    {
      title: "Bagaimana Sistem Generate Invoice Suspend dan Isolir ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum praesentium neque cum, dicta suscipit sint. Enim dolor repellendus nisi qui cumque quibusdam voluptatem, vero iure esse similique quia vitae.",
      open: false,
    },
    {
      title: "Ada Berapa Support Payment di ERPSkrip ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum praesentium neque cum, dicta suscipit sint. Enim dolor repellendus nisi qui cumque quibusdam voluptatem, vero iure esse similique quia vitae.",
      open: false,
    },
    {
      title: "Payment Gateway apa yang digunakan ERPSkrip ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum praesentium neque cum, dicta suscipit sint. Enim dolor repellendus nisi qui cumque quibusdam voluptatem, vero iure esse similique quia vitae.",
      open: false,
    },
    {
      title: "Apakah ERPSkrip memiliki Fitur WhatsApp menggunakan Nomor Client ?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nostrum praesentium neque cum, dicta suscipit sint. Enim dolor repellendus nisi qui cumque quibusdam voluptatem, vero iure esse similique quia vitae.",
      open: false,
    },
  ]);

  return (
    <main>
      <HeaderV2 />
      <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
        <div className="mb-3">
          <div className="rounded-2xl text-white md:text-5xl font-bold overflow-hidden w-full text-3xl bg-blue-950 shadow text-center py-24 mb-8">
            Frequently Asked Questions
          </div>
          <div className="w-full xl:flex-1">
            {faq.map((item, itemIdx) => (
              <div className="mb-2" key={itemIdx}>
                <div
                  onClick={() => {
                    const f = !item.open;
                    const newFaq = faq.map((item) => {
                      return { ...item, open: false };
                    });
                    newFaq[itemIdx].open = f;
                    setFaq(newFaq);
                  }}
                  className="bg-white shadow-lg p-5 flex justify-between items-center rounded-lg font-semibold cursor-pointer mb-2 gap-x-4"
                >
                  <div>{item.title}</div>
                  <div>{item.open ? <TbMinus /> : <TbPlus />}</div>
                </div>
                <div
                  style={{
                    maxHeight: item.open ? "100vh" : "0",
                  }}
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                >
                  <div className="p-5">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default page