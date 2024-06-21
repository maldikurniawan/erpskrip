import { FaRegCirclePlay } from "react-icons/fa6";

/* eslint-disable @next/next/no-img-element */
const Hero = () => {
	return (
		<div className="relative overflow-hidden min-h-screen bg-gray-900 px-10 md:px-28 transition-all duration-300 pt-[120px] pb-36 flex flex-wrap items-center gap-y-12">
			<div className="w-full lg:w-[576px] relative z-10">
				<div className="font-bold text-3xl md:text-5xl text-white mb-6">
					<div>ERPSkrip</div>
					<div>untuk Efisiensi</div>
				</div>
				<div className="text-white text-base md:text-lg mb-4">
					Tingkatkan efisiensi operasional bisnis anda dengan
					ERPSkrip. Solusi inovativ kami mengintegrasikan semua
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

			{/* background */}
			<div className="absolute z-0 w-48 h-48 rounded-full bg-white/10 -right-2 -bottom-28"></div>
			<div className="absolute z-0 w-60 h-60 rounded-full bg-white/10 -left-32 top-36"></div>
			<div className="absolute z-0 w-64 h-64 rounded-full bg-white/10 -right-14 -top-16"></div>
			{/* <div className="absolute z-0 bottom-0 left-0 mix-blend-multiply w-screen min-w-[1280px]">
				<img
					src="/assets/wave-hero.png"
					alt="wave"
					className="h-full w-[1920px]"
				/>
			</div> */}
		</div>
	);
};

export default Hero;
