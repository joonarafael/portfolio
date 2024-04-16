import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio",
	description: "Portfolio of Joona Kettunen",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
