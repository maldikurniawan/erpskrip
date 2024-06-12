import Footer from "@/components/layouts/Footer";

export default function RootLayout({ children }) {
	return (
		<div className="font-montserrat overflow-x-hidden">
			{children}
			<Footer />
		</div>
	);
}
