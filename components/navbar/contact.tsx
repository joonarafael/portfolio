"use client";

import { Linkedin, Mail } from 'lucide-react';

import {
    Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';

import { Button } from '../ui/button';

const ContactButton = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="bg-purple-500 text-white hover:bg-purple-500/50 hover:text-white/50"
				>
					<p>Contact me</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Contact me</DialogTitle>
					<DialogDescription>
						Shoot me an email or get in contact through LinkedIn!
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2 w-full">
					<div className="flex w-full flex-row gap-2">
						<Button
							onClick={() => {
								window.open("mailto:joonarafael@gmail.com", "_blank");
							}}
							variant="secondary"
							className="w-full items-center gap-2"
						>
							<Mail className="w-4 h-4" />
							<p>joonarafael@gmail.com</p>
						</Button>
						<Button
							onClick={() => {
								window.open(
									"https://www.linkedin.com/in/joonakettunen/",
									"_blank"
								);
							}}
							className="w-full items-center gap-2"
						>
							<Linkedin className="w-4 h-4" />
							<p>LinkedIn</p>
						</Button>
					</div>
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
	);
};

export default ContactButton;
