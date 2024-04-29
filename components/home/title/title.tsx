"use client";

import { FaTelegramPlane } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

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

import { Button } from "../../ui/button";
import TitleVideo from "./video";

const Title = () => {
	return (
		<div
			id="title"
			className="flex flex-row h-full lg:h-[720px] justify-center items-center gap-2"
		>
			<div className="flex flex-col gap-12 lg:w-3/5 pr-10">
				<div className="w-full text-left flex flex-col gap-2">
					<h2 className="text-2xl">{`Hello, I'm`}</h2>
					<h1 className="gradient-text w-fit text-transparent text-4xl sm:text-6xl font-extrabold animate-gradient">
						Joona Kettunen,
					</h1>
					<p className="text-xl">
						a passionate computer science student dedicated to mastering
						cutting-edge technologies and shaping the future as a skilled
						problem-solver and worker of the digital age.
					</p>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="w-fit gap-2 items-center">
							<IoMail className="w-4 h-4" />
							<p>Send me a message</p>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Send me a message</DialogTitle>
							<DialogDescription>
								You reach me best via Telegram.
							</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col items-center gap-2 w-full">
							<a
								className="w-full"
								href="https://t.me/joonarafael"
								target="_blank"
							>
								<Button className="w-full gap-2 items-center">
									<FaTelegramPlane className="w-5 h-5" />
									<p>Telegram @joonarafael</p>
								</Button>
							</a>
							<a
								className="w-full"
								href="mailto:joonarafael@gmail.com"
								target="_blank"
							>
								<Button
									variant="secondary"
									className="w-full items-center gap-2"
								>
									<IoMail className="w-5 h-5" />
									<p>joonarafael@gmail.com</p>
								</Button>
							</a>
						</div>
						<DialogFooter className="w-full">
							<DialogClose asChild>
								<Button type="button" className="w-full" variant="outline">
									Close
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<TitleVideo />
		</div>
	);
};

export default Title;
