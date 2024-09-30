"use client";

import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Logo from "./navbar/logo";
import { Button } from "./ui/button";

const Footer = () => {
	const { language } = useTranslationStore();

	return (
		<div className="border-t border-x drop-shadow-md rounded-t-xl px-14 py-10 min-w-[200px] w-[100vw] max-w-[2440px] flex justify-between items-center transition group-hover:duration-200 duration-1000 flex-col md:flex-row bg-background gap-2">
			<div className="flex flex-col gap-2 items-center justify-center">
				<Logo />
				<div className="flex flex-col text-muted-foreground text-xs items-center justify-center text-center">
					<p>Tmi Joona Kettunen</p>
					<p>{TRANSLATION[language].global.footer.vatId}: 3473699-9</p>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-2 items-center">
				<div className="flex flex-row items-center gap-0">
					<Link href="mailto:joonarafael@gmail.com" target="_blank">
						<Button variant="link">
							<p>joonarafael@gmail.com</p>
						</Button>
					</Link>
					<Link href="https://github.com/joonarafael" target="_blank">
						<Button variant="ghost">
							<RxGithubLogo className="w-4 h-4" />
						</Button>
					</Link>
				</div>
				<Link href="https://www.freepik.com" target="_blank">
					<Button variant="link" className="font-light">
						{TRANSLATION[language].global.footer.favicon}
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Footer;
