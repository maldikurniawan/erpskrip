"use client";

import Header from '@/components/layouts/Header'
import React, { useState } from 'react'
import { TbMinus, TbPlus } from 'react-icons/tb';

const page = () => {

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
        "Ada 2 pilihan tipe pembayaran yakni Pacabayar (Bayar di Akhir) dan Prabayar (Bayar Di Awal).",
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
    <main>
      <Header />
      <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-20">
        <div className="mb-3">
          <div className="rounded-2xl text-white md:text-5xl font-bold overflow-hidden w-full text-3xl bg-[#0B193E] shadow text-center min-[450px]:py-20 py-10 mb-8">
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