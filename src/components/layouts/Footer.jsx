/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="px-10 md:px-28 transition-all bg-white duration-300 pt-16 text-[#A1A1A1]">
			<div className="mb-10 flex flex-wrap gap-x-24 gap-y-10">
				<div className="md:w-5/12">
					<div className="h-auto mb-4 gap-4 flex items-center text-5xl text-black font-bold">
						<img
							src="/assets/logo-erp.png"
							alt="logo"
							className="h-full w-12 cursor-pointer"
						/>
						ERPSKRIP
					</div>
					<div className="text-justify py-5 border-t-[3px] border-[#D9D9D9]">
						ERP Skrip adalah salah satu produk dari Gaha Skrip Infra Prima, yang dimana menyediakan solusi perangkat lunak Enterprise Resource Planning (ERP) yang berfokus pada membantu bisnis mengelola dan mengintegrasikan berbagai aspek operasional Kususnya untuk Perusahaan Internet Service Provider (ISP). ERP Skrip menawarkan perangkat lunak yang memungkinkan perusahaan untuk mengotomatisasi dan merampingkan proses bisnis mereka, termasuk manajemen keuangan, inventaris, produksi, penjualan, sumber daya manusia, dan lain-lain.
					</div>
				</div>
				<div className="flex flex-wrap gap-x-16 gap-y-6">
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Tentang Kami</div>
						<div className="font-medium mb-4">Perusahaan Kami</div>
						<div className="mb-4">
							<Link href={'/kontak'} className="font-medium">Hubungi Kami</Link>
						</div>
						<div className="font-medium mb-4">Karir</div>
						<div className="mb-4">
							<Link href={'/pengguna'} className="font-medium">List Pengguna</Link>
						</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Keamanan Privasi</div>
						<div className="mb-4">
							<Link href={'/faq'} className="font-medium">F&Q</Link>
						</div>
						<div className="mb-4">
							<Link href={'/privasi'} className="font-medium">Kebijakan Privasi</Link>
						</div>
						<div className="font-medium mb-4">Copyright</div>
					</div>
					<div>
						<div className="font-bold text-[#0C375A] mb-4">Menu</div>
						<div className="mb-4">
							<Link href={'/'} className="font-medium">Beranda</Link>
						</div>
						<div className="font-medium mb-4">Fitur - Fitur</div>
						<div className="font-medium mb-4">Harga</div>
					</div>
				</div>
			</div>
			<div className="py-5 text-xs md:text-sm justify-between w-full font-semibold min-[500px]:flex border-t-[3px] border-[#D9D9D9]">
				<div className="mb-2">
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
