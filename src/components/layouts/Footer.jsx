/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="px-10 md:px-28 transition-all duration-300 pt-16 text-[#A1A1A1]">
			<div className="mb-10 flex flex-wrap gap-x-24 gap-y-10">
				<div className="md:w-5/12">
					<div className="h-auto mb-4 text-5xl text-black font-bold">
						Logo
					</div>
					<div className="text-justify py-5 border-t-[3px] border-[#D9D9D9]">
					ERP Skrip adalah salah satu produk dari Gaha Skrip Infra Prima,yang dimana menyediakan solusi perangkat lunak Enterprise Resource Planning (ERP) yang berfokus pada membantu bisnis mengelola dan mengintegrasikan berbagai aspek operasional Kususnya untuk Perusahaan Internet Service Provider (ISP). ERP Skrip menawarkan perangkat lunak yang memungkinkan perusahaan untuk mengotomatisasi dan merampingkan proses bisnis mereka, termasuk manajemen keuangan, inventaris, produksi, penjualan, sumber daya manusia, dan lain-lain.
					</div>
				</div>
				<div className="flex flex-wrap gap-x-16 gap-y-6">
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Tentang Kami</div>
						<div className="font-medium mb-1">Perusahaan Kami</div>
						<div className="font-medium mb-1">Hubungi Kami</div>
						<div className="font-medium mb-1">Karir</div>
						<div className="font-medium mb-1">List Pengguna</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Keamanan Privasi</div>
						<div className="font-medium mb-1">F&Q</div>
						<div className="font-medium mb-1">Kebijakan Privasi</div>
						<div className="font-medium mb-1">Copyright</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Menu</div>
						<div className="font-medium mb-1">Beranda</div>
						<div className="font-medium mb-1">Fitur - Fitur</div>
						<div className="font-medium mb-1">Harga</div>
					</div>
				</div>
			</div>
			<div className="py-5 text-xs md:text-sm justify-between w-full font-semibold flex border-t-[3px] border-[#D9D9D9]">
				<div>
					© 2024 ERPSkrip. All rights reserved
				</div>
				<div className="flex gap-4">
					<FaYoutube size={26} />
					<FaFacebook size={26} />
					<FaTwitter size={26} />
					<FaInstagram size={26} />
					<FaLinkedin size={26} />
				</div>
			</div>

		</div>
	);
};

export default Footer;
