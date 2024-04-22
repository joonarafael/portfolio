"use client";

import VideoText from "./videotext";

const TitleVideo = () => {
	return (
		<div className="relative hidden lg:flex w-2/5 h-full shadow-md shadow-black/50 dark:shadow-purple-800 rounded-xl">
			<div className="absolute z-40 rounded-xl w-full h-full shadow-[0_0_80px_rgba(0,0,0,0.8)_inset] left-0 top-0"></div>
			<video
				autoPlay
				loop
				muted
				className="w-full h-full object-cover rounded-xl z-30"
				src={
					"https://dl.dropboxusercontent.com/scl/fi/kfvrri1r7qdr3vn2z61bk/titlevideo.mp4?rlkey=t3xscp7prok74snt51dyj5qr0&st"
				}
			/>
			<div className="absolute z-40 top-60 left-20">
				<VideoText text="RESPONSIVE" />
			</div>
			<div className="absolute z-40 bottom-60 right-20">
				<VideoText text="MODERN" />
			</div>
		</div>
	);
};

export default TitleVideo;
