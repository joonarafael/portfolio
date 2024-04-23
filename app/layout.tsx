import type { Metadata } from "next";
import './globals.css';

import { Inter } from 'next/font/google';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import { ThemeProvider } from '@/components/themeprovider';

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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className="min-h-screen bg-repeat bg-[url(../public/background.png),_url(../public/background.png)] dark:bg-[url(../public/background-invert.png),_url(../public/background-invert.png)]">
						<div className="bg-background/95 flex flex-col gap-32 w-full pt-56 sm:pt-52 items-center min-h-screen">
							{children}
							<Footer />
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
