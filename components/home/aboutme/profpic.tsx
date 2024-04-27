/* eslint-disable @next/next/no-img-element */

"use client";

import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import DROPBOX_CONTENT from "@/constants/dropboxcontent";

const ProfPic = () => {
	return (
		<div className="relative group">
			<div className="p-4">
				<img
					className="rounded-full object-contain border-b-8 border-x-2 border-black dark:border-purple-500 shadow-lg dark:shadow-purple-800 shadow-black pointer-events-none group-hover:shadow-2xl group-hover:dark:shadow-purple-500 duration-1000 group-hover:duration-200 group-hover:shadow-black"
					src={DROPBOX_CONTENT.profPic}
					alt="Profile"
				/>
			</div>
			<div className="absolute rounded-xl p-2 left-0 right-0 -bottom-2 text-primary bg-foreground/50 backdrop-blur-lg font-bold text-lg shadow-lg text-white">
				<div className="flex flex-row w-full item-center justify-center gap-1">
					<Button
						onClick={() => {
							window.open("https://github.com/joonarafael", "_blank");
						}}
						size="sm"
						variant="ghost"
						className="px-3 py-0"
					>
						<RxGithubLogo className="w-5 h-5" />
					</Button>
					<Button
						onClick={() => {
							window.open(
								"https://www.linkedin.com/in/joonakettunen/",
								"_blank"
							);
						}}
						size="sm"
						variant="ghost"
						className="px-3 py-0"
					>
						<FaLinkedin className="w-5 h-5" />
					</Button>
					<Button
						onClick={() => {
							window.open("https://t.me/joonarafael", "_blank");
						}}
						size="sm"
						variant="ghost"
						className="px-3 py-0"
					>
						<FaTelegramPlane className="w-5 h-5" />
					</Button>
					<Button
						onClick={() => {
							window.open("mailto:joonarafael@gmail.com", "_blank");
						}}
						size="sm"
						variant="ghost"
						className="px-3 py-0"
					>
						<IoMail className="w-5 h-5" />
					</Button>
				</div>
				<div className="font-extrabold">Joona Kettunen</div>
			</div>
		</div>
	);
};

export default ProfPic;
