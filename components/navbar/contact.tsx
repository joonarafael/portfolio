"use client";

import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";

const ContactButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="bg-purple-500 text-white hover:bg-purple-500/75 hover:text-white/75"
				>
					<p>Contact me</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Contact me</DialogTitle>
					<DialogDescription>
						Get in contact through your preferred social channel!
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-2 w-full">
					<div className="flex flex-row gap-2 w-full">
						<Button
							onClick={() => {
								window.open("https://github.com/joonarafael", "_blank");
							}}
							className="px-3 py-0 w-full"
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
							className="px-3 py-0 w-full"
						>
							<FaLinkedin className="w-5 h-5" />
						</Button>
						<Button
							onClick={() => {
								window.open("https://t.me/joonarafael", "_blank");
							}}
							className="px-3 py-0 w-full"
						>
							<FaTelegramPlane className="w-5 h-5" />
						</Button>
					</div>
					<Button
						onClick={() => {
							window.open("mailto:joonarafael@gmail.com", "_blank");
						}}
						variant="secondary"
						className="px-3 py-0 w-full items-center gap-2"
					>
						<IoMail className="w-5 h-5" />
						<p>joonarafael@gmail.com</p>
					</Button>
				</div>
				<DialogFooter className="w-full">
					<DialogClose asChild>
						<Button className="w-full" type="button" variant="outline">
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ContactButton;
