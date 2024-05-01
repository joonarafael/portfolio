import { create } from "zustand";

interface TranslationState {
	language: "en" | "fi";
	setLanguage: (language: "en" | "fi") => void;
}

export const useTranslationStore = create<TranslationState>((set) => ({
	language: (() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("language") === "fi" ? "fi" : "en";
		}

		return "en";
	})(),
	setLanguage: (language: "en" | "fi") => {
		set({ language });
		localStorage.setItem("language", language);
	},
}));
