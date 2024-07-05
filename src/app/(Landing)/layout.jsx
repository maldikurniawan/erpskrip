"use client";
import Footer from "@/components/layouts/Footer";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
	const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            router.replace('/dashboard');
        }
    }, [router]);
	return (
		<div className="overflow-x-hidden">
			{children}
			<Footer />
		</div>
	);
}
