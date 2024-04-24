"use client";

import { Github } from "lucide-react";

import Logo from "./navbar/logo";
import { Button } from "./ui/button";

const Footer = () => {
	return (
		<div className="border drop-shadow-md rounded-t-xl px-14 py-10 min-w-[220px] w-[100vw] max-w-[2440px] flex justify-between items-center transition group-hover:duration-200 duration-1000 flex-col sm:flex-row bg-background gap-2">
			<div className="flex flex-col lg:flex-row items-center justify-center gap-2">
				<Logo />
				<p className="text-sm text-neutral-500 font-light text-center">
					updated lastly April 24th 2024
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-2 items-center">
				<div className="flex flex-row items-center gap-0">
					<Button
						onClick={() => {
							window.open("mailto:joonarafael@gmail.com", "_blank");
						}}
						variant="link"
					>
						<p>joonarafael@gmail.com</p>
					</Button>
					<Button
						onClick={() => {
							window.open("https://github.com/joonarafael", "_blank");
						}}
						variant="ghost"
					>
						<Github className="w-4 h-4" />
					</Button>
				</div>
				<Button
					onClick={() => {
						window.open("https://www.freepik.com", "_blank");
					}}
					variant="link"
					className="font-light"
				>
					favicon by Freepik
				</Button>
			</div>
		</div>
	);
};

export default Footer;
