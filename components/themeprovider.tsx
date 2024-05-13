"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { useCookies } from "@/hooks/useCookies";

export function ThemeProvider({
	children,
	...props
}: Readonly<ThemeProviderProps>) {
	const cookieState = useCookies();

	if (
		cookieState.cookies !== "accepted" &&
		cookieState.cookies !== "necessary"
	) {
		return <>{children}</>;
	}

	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
