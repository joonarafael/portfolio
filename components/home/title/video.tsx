"use client";

import { Button } from "@/components/ui/button";
import DROPBOX_CONTENT from "@/constants/dropboxcontent";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import VideoText from "./videotext";

const TitleVideo = () => {
	const { language } = useTranslationStore();

	return (
		<div className="flex-col h-full hidden lg:flex w-2/5 items-center justify-center">
			<div className="relative bg-gradient-to-t from-black to-purple-500 w-full h-full shadow-light dark:shadow-neon rounded-xl">
				<div className="absolute z-40 rounded-xl w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.8)_inset] left-0 top-0"></div>
				<video
					autoPlay
					loop
					muted
					playsInline
					className="relative w-full h-full object-cover rounded-xl z-30 pointer-events-none"
					src={DROPBOX_CONTENT.titleVideo}
				/>
				<div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
					<VideoText text="loading video..." />
				</div>
				<div className="absolute z-40 top-60 left-20">
					<VideoText
						text={TRANSLATION[language].index.title.video.overlays.responsive}
					/>
				</div>
				<div className="absolute z-40 bottom-60 right-20">
					<VideoText
						text={TRANSLATION[language].index.title.video.overlays.modern}
					/>
				</div>
			</div>
			<Button
				onClick={() => {
					window.open(
						"https://pixabay.com/users/u_vt453kmgmm-28659814/",
						"_blank"
					);
				}}
				variant="link"
				className="font-light text-neutral-500 text-xs w-min"
			>
				{TRANSLATION[language].index.title.video.credits}
			</Button>
		</div>
	);
};

export default TitleVideo;
