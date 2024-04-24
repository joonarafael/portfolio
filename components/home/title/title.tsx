"use client";

import { Linkedin, Mail } from 'lucide-react';

import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

import { Button } from '../../ui/button';
import TitleVideo from './video';

const Title = () => {
	return (
		<div
			id="title"
			className="flex flex-row h-full lg:h-[720px] justify-center items-center gap-2"
		>
			<div className="flex flex-col gap-12 lg:w-3/5 pr-10">
				<div className="w-full text-left flex flex-col gap-2">
					<h2 className="text-2xl">{`Hello, I'm`}</h2>
					<h1 className="gradient-text w-fit text-transparent text-6xl font-extrabold animate-gradient">
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
						<Button variant="secondary" className="w-fit">
							<p>Send me a message</p>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>Send me a message</DialogTitle>
							<DialogDescription>Shoot me an email!</DialogDescription>
						</DialogHeader>
						<div className="flex items-center space-x-2 w-full">
							<Button
								onClick={() => {
									window.open("mailto:joonarafael@gmail.com", "_blank");
								}}
								className="w-full items-center gap-2"
							>
								<Mail className="w-4 h-4" />
								<p>joonarafael@gmail.com</p>
							</Button>
						</div>
						<DialogFooter className="sm:justify-start">
							<DialogClose asChild>
								<Button type="button" variant="outline">
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
