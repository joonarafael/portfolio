"use client";

interface SubtitleProps {
	text: string;
}

const Subtitle = ({ text }: SubtitleProps) => {
	return (
		<div className="text-center border border-foreground p-2 min-w-48 rounded-xl w-min items-center justify-center backdrop-blur-md">
			<pre className="text-sm">{text}</pre>
		</div>
	);
};

export default Subtitle;
