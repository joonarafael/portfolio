import type { Metadata } from "next";
import "./globals.css";

import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

import { CSPostHogProvider } from "@/components/posthogprovider";

const CookiesConsent = dynamic(() => import("../components/cookiesconsent"), {
	ssr: false,
});

const Footer = dynamic(() => import("../components/footer"), {
	ssr: false,
});

const Navbar = dynamic(() => import("../components/navbar/navbar"), {
	ssr: false,
});

const ThemeProvider = dynamic(() => import("../components/themeprovider"), {
	ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://joonakettuen.netlify.app"),
	title: "Portfolio | Joona Kettunen",
	description: "Portfolio of Joona Kettunen",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		images: [
			{
				url: new URL("https://joonakettunen.netlify.app/opengraph-image.png")
					.href,
				width: 1400,
				height: 425,
				alt: "Portfolio | Joona Kettunen",
			},
		],
	},
};

export default async function RootLayout({
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
					<CSPostHogProvider>
						<Navbar />
						<main className="bg-repeat bg-[url(../public/background.png),_url(../public/background.png)] dark:bg-[url(../public/background-invert.png),_url(../public/background-invert.png)] min-h-screen">
							<div className="bg-background/95 flex flex-col gap-32 w-full pt-56 sm:pt-52 items-center">
								{children}
								<Footer />
								<CookiesConsent />
							</div>
						</main>
					</CSPostHogProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
