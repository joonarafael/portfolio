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
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import { Button } from "../ui/button";

const CookiesPreferences = () => {
	const { language } = useTranslationStore();
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
					<DialogTitle>
						{TRANSLATION[language].global.cookiesPreferences.title}
					</DialogTitle>
					<DialogDescription>
						{TRANSLATION[language].global.cookiesPreferences.description}
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
							{TRANSLATION[language].global.cookies.buttons.accept}
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
							{TRANSLATION[language].global.cookies.buttons.acceptNecessary}
						</Button>
					</DialogClose>
					<Button
						variant="destructive"
						className="w-full"
						onClick={() => {
							declineCookies();
						}}
					>
						{TRANSLATION[language].global.cookies.buttons.decline}
					</Button>
				</div>
				<DialogFooter className="w-full">
					<DialogClose asChild>
						<Button className="w-full" type="button" variant="outline">
							{TRANSLATION[language].global.contact.dialog.closeBtn}
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default CookiesPreferences;
