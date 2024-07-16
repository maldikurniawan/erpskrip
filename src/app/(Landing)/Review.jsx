"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Review = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://192.168.120.41:8000/api/review/');
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="relative overflow-hidden min-h-screen bg-[#F7F7F7] px-10 md:px-28 transition-all duration-300 pt-[100px] pb-20">
      <div className="mb-12 text-center md:text-left">
        <div className="text-3xl md:text-6xl text-black font-bold mb-1 text-center">
          Semua ISP Mencintai <span className="text-[#0F172A]">ERPSkrip</span>
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
          {data.map((item, itemIdx) => (
            <SwiperSlide
              key={itemIdx}
              className="!flex items-center justify-center"
            >
              <div className="rounded-bl-2xl rounded-tr-2xl overflow-hidden max-w-sm text-sm bg-[#0F172A] text-white shadow-lg">
                <div className="p-4 pb-14 md:text-xl text-lg" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                <div className="h-20 w-full relative">
                  <div className="absolute left-4 -top-12 flex gap-4 items-end mt-4">
                    <div className="w-20 h-20">
                      <img
                        src={item.image ? item.image : "/assets/nophoto.jpg"}
                        alt="people"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold italic">{item.name}</div>
                      <div className="h-12 pt-1">
                        <div className="text-[#A1A1A1] italic">
                          {item.jabatan}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute hidden md:block z-0 bottom-0 right-10">
        <img
          src="/assets/kotak.png"
          alt="wave"
          className="h-40 w-40"
        />
      </div>
      <div className="absolute hidden md:block z-0 top-0 left-10">
        <img
          src="/assets/kotak.png"
          alt="wave"
          className="h-40 w-40"
        />
      </div>
      <div className="absolute z-0 -bottom-40 left-32">
        <img
          src="/assets/kotak-biru.png"
          alt="wave"
          className="h-72 w-72"
        />
      </div>
    </div>
  );
}

export default Review