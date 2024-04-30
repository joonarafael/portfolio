"use client";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSwitch = () => {
	const [t, i18n] = useTranslation("global");

	const handleLanguageSwitch = (lang: string) => {
		i18n.changeLanguage(lang);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					{t("language")}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => handleLanguageSwitch("en")}>
					EN
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleLanguageSwitch("fi")}>
					FI
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitch;
