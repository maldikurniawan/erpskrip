/* eslint-disable @next/next/no-img-element */
"use client";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverPanel, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsCreditCard } from "react-icons/bs";
import { FaArrowRight, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { TbChevronDown } from "react-icons/tb";

const Header = () => {
	const ref = useRef();
	const router = useRouter();
	const { width } = useWindowSize();
	const [navOpen, setNavOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const [menu] = useState([
		{
			title: "Beranda",
			link: "/",
			menu: [],
		},
		{
			title: "Fitur",
			link: "/",
			menu: [
				{
					title: "Fitur 1",
					description: "Lorem ipsum dolor, sit amet consectetur",
					link: "/fitur1",
				},
				{
					title: "Fitur 2",
					description: "Lorem ipsum dolor, sit amet consectetur",
					link: "/fitur2",
				},
			],
		},
		{
			title: "Harga",
			link: "/harga",
			menu: [],
		},
		{
			title: "Kontak Kami",
			link: "/kontak",
			menu: [],
		},
	]);

	useOnClickOutside(ref, () => setNavOpen(false));
	useEffect(() => {
		if (width > 1024) {
			setNavOpen(false);
		}
	}, [width]); // eslint-disable-line react-hooks/exhaustive-deps
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 100) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		});
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<header
				className={`px-10 md:px-28 h-16 sm:h-20 flex items-center justify-between w-full fixed top-0 z-40 transition-all duration-300 py-4 ${scrolled ? "bg-[#111827] backdrop-blur shadow" : "bg-transparent"
					}`}
			>
				{/* <img
					onClick={() => router.push("/")}
					src="/assets/Logo-Qiupay.png"
					alt="logo"
					className="h-full cursor-pointer"
				/> */}
				<div className="font-bold text-xl md:text-3xl text-white">
					ERPSkrip
				</div>

				<div className="hidden lg:flex items-center gap-x-2">
					{menu.map((item, itemIdx) =>
						item?.menu?.length > 0 ? (
							<Popover key={itemIdx} className="relative">
								<PopoverButton className="rounded-md px-6 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap cursor-pointer flex items-center gap-x-2 outline-none">
									{item.title} <TbChevronDown />
								</PopoverButton>

								<Transition
									enter="transition-opacity duration-150"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="transition-opacity duration-150"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<PopoverPanel className="absolute z-10 mt-6 w-max grid gap-2 bg-white shadow p-3 rounded-lg overflow-hidden">
										{item.menu.map((menuItem, menuItemIdx) => (
											<Link
												className="rounded-md hover:bg-gray-50 font-medium whitespace-nowrap p-2 flex items-center gap-4"
												key={menuItemIdx}
												href={menuItem.link}
											>
												<div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#1791F450] rounded-lg text-white sm:h-12 sm:w-12">
													<BsCreditCard className="w-6 h-6" color="#1791F4" />
												</div>
												<div className="w-80">
													<p className="text-sm text-gray-900 font-medium">
														{menuItem.title}
													</p>
													<p className="text-xs text-gray-500 w-full">
														{menuItem.description}
													</p>
												</div>
											</Link>
										))}
									</PopoverPanel>
								</Transition>
							</Popover>
						) : (
							<Link
								key={itemIdx}
								href={item.link}
								className="rounded-md px-6 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap"
							>
								{item.title}
							</Link>
						)
					)}
				</div>

				<div className="flex">
					<Link
						href="/login"
						prefetch={false}
						className="hidden px-4 py-2 lg:block text-white"
					>
						Sign In
					</Link>
					<Link
						href="/ajukan"
						prefetch={false}
						className="hidden border border-white rounded-lg py-2 px-2 lg:block text-white"
					>
						<div className="flex">
							Ajukan Demo <FaArrowRight className="mt-1 ml-2" />
						</div>
					</Link>
				</div>

				<button
					onClick={() => setNavOpen(true)}
					className="block lg:hidden text-white"
				>
					<FaBars />
				</button>
			</header>
			<div
				ref={ref}
				style={{
					right: navOpen ? "0" : `-300px`,
					bottom: "0",
				}}
				className="fixed z-50 top-0 h-screen min-[300px]:w-[300px] bg-[#111827]/50 backdrop-blur drop-shadow transition-[right,top] duration-500"
			>
				<div className="flex items-center justify-between text-white p-4">
					{/* <img src="/assets/Logo-Qiupay.png" alt="logo" className="h-10" /> */}
					<div className="font-bold text-xl md:text-3xl text-white">
						ERPSkrip
					</div>
					<FaXmark
						className="cursor-pointer"
						onClick={() => {
							setNavOpen(false);
						}}
					/>
				</div>
				<div className="p-4">
					{menu.map((item, itemIdx) =>
						item?.menu?.length > 0 ? (
							<Disclosure key={itemIdx}>
								<DisclosureButton className="w-full text-left rounded-md px-6 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap cursor-pointer flex items-center justify-between">
									<div>{item.title}</div>
									<TbChevronDown />
								</DisclosureButton>
								<DisclosurePanel>
									{item.menu.map((itemMenu, itemMenuIdx) => (
										<Link
											key={itemMenuIdx}
											href={itemMenu.link}
											className="block rounded-md px-10 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap cursor-pointer"
										>
											{itemMenu.title}
										</Link>
									))}
								</DisclosurePanel>
							</Disclosure>
						) : (
							<Link
								key={itemIdx}
								href={item.link}
								className="block rounded-md px-6 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap cursor-pointer"
							>
								{item.title}
							</Link>
						)
					)}

					<div className="rounded-md px-6 py-2 hover:bg-white/20 text-white font-medium whitespace-nowrap cursor-pointer">
						Sign In
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
