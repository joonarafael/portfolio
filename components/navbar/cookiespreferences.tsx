"use client";

import { RxCookie } from "react-icons/rx";

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
import { useCookies } from "@/hooks/useCookies";

import { Button } from "../ui/button";

const CookiesPreferences = () => {
	const cookieState = useCookies();

	const acceptCookies = () => {
		localStorage.setItem("cookies", "accepted");
		cookieState.setCookies("accepted");
	};

	const declineUnnecessary = () => {
		localStorage.setItem("cookies", "necessary");
		cookieState.setCookies("necessary");
	};

	const declineCookies = () => {
		localStorage.clear();
		localStorage.setItem("cookies", "declined");
		window.location.reload();
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="px-3">
					<RxCookie />
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Cookies preferences</DialogTitle>
					<DialogDescription>
						Accept necessary cookies to enable language and theme switching. To
						participate in analytics, accept all cookies.
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-2 w-full">
					<DialogClose asChild>
						<Button
							onClick={() => {
								acceptCookies();
							}}
							className="w-full"
							type="button"
						>
							Accept all cookies
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button
							onClick={() => {
								declineUnnecessary();
							}}
							className="w-full"
							type="button"
							variant="secondary"
						>
							Accept necessary only
						</Button>
					</DialogClose>
					<Button
						variant="destructive"
						className="w-full"
						onClick={() => {
							declineCookies();
						}}
					>
						Decline all cookies
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

export default CookiesPreferences;
