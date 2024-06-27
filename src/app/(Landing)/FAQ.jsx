"use client";

import { useState } from "react";
import { TbMinus, TbPlus } from "react-icons/tb";

const FAQ = () => {

  const [faq, setFaq] = useState([
    {
      title: "Apa Itu ERPSkrip ?",
      content:
        "ERP Skrip adalah salah satu produk dari Gaha Skrip Infra Prima, yang dimana menyediakan solusi perangkat lunak Enterprise Resource Planning (ERP) yang berfokus pada membantu bisnis mengelola dan mengintegrasikan berbagai aspek operasional Kususnya untuk Perusahaan Internet Service Provider (ISP). ERP Skrip menawarkan perangkat lunak yang memungkinkan perusahaan untuk mengotomatisasi dan merampingkan proses bisnis mereka, termasuk manajemen keuangan, inventaris, produksi, penjualan, sumber daya manusia, dan lain-lain.",
      open: false,
    },
    {
      title: "Bagaimana Sistem Generate Invoice Suspend dan Isolir ?",
      content:
        "Tagihan Pelanggan, Suspend ,dan Isolir Akan otomatis di buat sesuai kesepakatan dengan client menggunakan Whatsapp Blasting.",
      open: false,
    },
    {
      title: "Ada Berapa Support Payment di ERPSkrip ?",
      content:
        "Ada 2 pilihan tipe pembayaran yakni Pacabayar (Bayar di Akhir) dan Prabayar (Bayar Di Awal). ",
      open: false,
    },
    {
      title: "Payment Gateway apa yang digunakan ERPSkrip ?",
      content:
        "Kami menggunakan Payment Gateway yang kami miliki sendiri yaitu Qiupay sehingga lebih mudah dan aman untuk melakukan transaksi tanpa ada kesulitan.",
      open: false,
    },
    {
      title: "Apakah ERPSkrip memiliki Fitur WhatsApp menggunakan Nomor Client ?",
      content:
        "Kami telah menyediakan Scan QR Code di halaman akun Anda untuk menggunakan nomor WhatsApp pribadi Anda.",
      open: false,
    },
  ]);

  return (
    <div className="relative overflow-hidden min-h-screen bg-[#CBD5E1] px-10 md:px-28 transition-all duration-300 pt-[100px] pb-16 flex flex-wrap gap-x-10 gap-y-8 justify-between">
      <div className="mb-12 overflow-hidden w-full">
        <div className="text-center text-3xl md:text-6xl text-black font-bold mb-2">
          Frequently Asked Questions
        </div>
        <div className="text-gray-600 text-center text-base md:text-lg">
          Temukan Jawaban Anda di sini
        </div>
      </div>
      <div className="w-full xl:flex-1 z-20 mb-10">
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
              className="bg-white p-5 flex justify-between items-center rounded-lg shadow-lg font-semibold cursor-pointer mb-4"
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
      <div className="w-full xl:flex xl:w-96">
        <div className="relative md:absolute z-0 bottom-8 md:bottom-28 right-0 w-[450px]">
          <img
            src="/assets/phone-lepi.png"
            alt="hero"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ