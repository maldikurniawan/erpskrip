"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Review = () => {
  const [review] = useState([
    {
      user: "Jhone Doe",
      position: "CEO PT Lorem",
      image: "/assets/people-1.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
    {
      user: "Jenny Doe",
      position: "CEO PT Lorem Ipsum",
      image: "/assets/people-2.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
    {
      user: "Suzana Aymcryzyovru",
      position: "Ceo PT цыка блять",
      image: "/assets/people-3.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
    {
      user: "Jhone Doe",
      position: "CEO PT Lorem",
      image: "/assets/people-1.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
    {
      user: "Jenny Doe",
      position: "CEO PT Lorem Ipsum",
      image: "/assets/people-2.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
    {
      user: "Suzana Aymcryzyovru",
      position: "Ceo PT цыка блять",
      image: "/assets/people-3.png",
      description:
        "ERPSkrip itu aplikasi manajemen bisnis yang user-friendly dan lengkap. Fitur-fiturnya. Integrasinya oke, Support-nya cepat tanggap dan harganya kompetitif. Cocok buat bisnis kecil hingga menengah.",
    },
  ]);
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20">
      <div className="mb-12 text-center md:text-left">
        <div className="text-3xl md:text-5xl text-black font-bold mb-1 text-center">
          Semua ISP Mencintai <span className="text-[#111827]">ERPSkrip</span> 
        </div>
        <div className="text-[#A1A1A1] text-base md:text-lg text-center">
          Pandangan Kritis tentang Pengalaman Pengguna dengan Sistem ERP
        </div>
      </div>
      <div className="py-4">
        <Swiper
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1366: {
              slidesPerView: 3,
            },
            1820: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          spaceBetween={10}
          className="!py-10"
        >
          {review.map((item, itemIdx) => (
            <SwiperSlide
              key={itemIdx}
              className="!flex items-center justify-center"
            >
              <div className="rounded-bl-2xl rounded-tr-2xl overflow-hidden max-w-sm text-sm bg-gray-900 text-white shadow-lg">
                <div className="p-4 pb-14 md:text-xl text-lg">{item.description}</div>
                <div className="h-20 w-full relative">
                  <div className="absolute left-4 -top-12 flex gap-4 items-end mt-4">
                    <div className="w-20 h-20">
                      <img
                        src={item.image}
                        alt="people"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold italic">{item.user}</div>
                      <div className="h-12 pt-1">
                        <div className="text-[#A1A1A1] italic">
                          {item.position}
                        </div>
                        {/* <div className="flex items-center gap-1">
                          {[...Array(item.star)].map((_, starIdx) => (
                            <img
                              src="/assets/star.png"
                              alt="star"
                              key={starIdx}
                            />
                          ))}
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Review