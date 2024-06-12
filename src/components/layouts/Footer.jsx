/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="px-10 md:px-28 transition-all duration-300 pt-16 text-[#A1A1A1]">
			<div className="mb-10 flex flex-wrap gap-x-24 gap-y-10">
				<div className="w-64">
					<div className="h-auto w-52 mb-4">
						<img
							src="/assets/Logo-Qiupay.png"
							alt="logo"
							className="h-full w-full object-contain"
						/>
					</div>
					<div className="leading-tight mb-4">
						Jl. Alam Gaya No.42, Way Halim Permai, Kecamatan Wayhalim, Kota
						Bandar Lampung, Lampung 35133
					</div>
					<div className="flex items-center gap-2">
						<FaTwitter size={26} />
						<FaFacebook size={26} />
						<FaLinkedin size={26} />
						<FaYoutube size={26} />
					</div>
				</div>
				<div className="flex flex-wrap gap-x-16 gap-y-6">
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Tentang</div>
						<div className="font-medium mb-1">Home</div>
						<div className="font-medium mb-1">Services</div>
						<div className="font-medium mb-1">Blog</div>
						<div className="font-medium mb-1">Contact Us</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Hukum</div>
						<div className="font-medium mb-1">Kebijakan Privasi</div>
						<div className="font-medium mb-1">Lisensi</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Pusat Bantuan</div>
						<div className="font-medium mb-1">FAQ</div>
						<div className="font-medium mb-1">Saran dan Masukan</div>
						<div className="font-medium mb-1">WhatsApp Sales</div>
					</div>
				</div>
			</div>
			<div className="py-5 text-xs md:text-sm font-semibold flex items-center justify-center text-center border-t-[3px] border-[#D9D9D9]">
				© 2024. Qiupay. All rights reserved.
			</div>
		</div>
	);
};

export default Footer;
