"use client";

interface VideoTextProps {
	text: string;
}

const VideoText = ({ text }: VideoTextProps) => {
	return (
		<div className="text-2xl font-bold p-4 rounded-xl shadow-lg shadow-black/50 backdrop-blur-md text-white">
			{text}
		</div>
	);
};

export default VideoText;
