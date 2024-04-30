import { create } from "zustand";

interface TranslationState {
	language: "en" | "fi";
	setLanguage: (language: "en" | "fi") => void;
}

export const useTranslationStore = create<TranslationState>((set) => ({
	language: "en",
	setLanguage: (language: "en" | "fi") => set({ language }),
}));
