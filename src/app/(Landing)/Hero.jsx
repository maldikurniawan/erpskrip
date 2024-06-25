import { FaRegCirclePlay } from "react-icons/fa6";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<div className="relative overflow-hidden min-h-screen bg-[#0F172A] px-10 md:px-28 transition-all duration-300 pt-[120px] pb-36 flex flex-wrap items-center gap-y-12">
			<div className="w-full lg:w-[576px] relative z-10">
				<div className="font-bold text-3xl md:text-5xl text-white mb-6">
					<div>ERPSkrip</div>
					<div>untuk Efisiensi</div>
				</div>
				<div className="text-white text-base md:text-lg mb-4">
					Tingkatkan efisiensi operasional bisnis anda dengan
					ERPSkrip. Solusi inovatif kami mengintegrasikan semua
					aspek manajemen Perusahaan ISP anda dalam satu
					platform yang mudah digunakan.
				</div>
				<button className="bg-[#007BFF] px-6 py-2 md:py-3 text-sm md:text-base rounded-lg text-white font-normal md:font-semibold shadow">
					<div className="flex">Tonton Saya <FaRegCirclePlay className="mt-1 ml-2"/></div>
				</button>
				<button className="ml-3 px-6 py-2 md:py-3 text-sm md:text-base text-white font-normal md:font-semibold shadow border border-white rounded-lg">
					Ajukan Demo
				</button>
			</div>
			<div className="w-full flex-1 flex items-center justify-center xl:justify-end relative z-10">
				<div className="w-full">
					<img
						src="/assets/hero-erp.png"
						alt="hero"
						className="h-full w-full"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
