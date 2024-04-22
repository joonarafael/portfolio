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
					updated lastly April 21st 2024
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-2 items-center">
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
				<div className="flex flex-col text-center md:text-right items-center md:items-end">
					<Button
						onClick={() => {
							window.open("https://www.freepik.com", "_blank");
						}}
						variant="link"
						className="font-light"
					>
						favicon by Freepik
					</Button>
					<Button
						onClick={() => {
							window.open(
								"https://pixabay.com/users/u_gm5v89x1on-33680440/",
								"_blank"
							);
						}}
						variant="link"
						className="font-light"
					>
						title video by u_gm5v89x1on from Pixabay
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Footer;
