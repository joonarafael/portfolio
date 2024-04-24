"use client";

import { FaLinkedin, FaTelegramPlane } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import { RxGithubLogo } from 'react-icons/rx';

import { Button } from '@/components/ui/button';

const ProfPic = () => {
	return (
		<div className="relative">
			<div className="p-4">
				<img
					className="rounded-full object-contain border-b-8 border-x-2 border-black dark:border-purple-500 shadow-lg dark:shadow-purple-800 shadow-black pointer-events-none"
					src={
						"https://dl.dropboxusercontent.com/scl/fi/bwipx7607ro1gb5akaarz/profpic.jpeg?rlkey=ec61wmz84rno3339ssxcngvky"
					}
					alt="Profile Picture"
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
