"use client";

import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

import Logo from "./navbar/logo";
import { Button } from "./ui/button";

const Footer = () => {
	return (
		<div className="border-t border-x drop-shadow-md rounded-t-xl px-14 py-10 min-w-[200px] w-[100vw] max-w-[1440px] flex justify-between items-center transition group-hover:duration-200 duration-1000 flex-col md:flex-row bg-secondary gap-2">
			<Logo />
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
		</div>
	);
};

export default Footer;
