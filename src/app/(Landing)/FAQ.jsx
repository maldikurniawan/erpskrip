"use client";

import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

const FAQ = () => {

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
    <div className="relative overflow-hidden min-h-screen bg-gray-200 px-10 md:px-28 transition-all duration-300 pt-[150px] pb-20 flex flex-wrap gap-x-10 gap-y-8 justify-between">
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
              className="bg-[#DEF3FF] p-5 flex justify-between items-center rounded font-semibold cursor-pointer gap-x-4"
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
      <div className="w-full xl:flex-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quia recusandae alias sapiente at dolorum natus molestiae assumenda commodi praesentium ducimus dignissimos porro dolore hic fugiat nemo. A, quod! Modi.
      </div>
    </div>
  )
}

export default FAQ