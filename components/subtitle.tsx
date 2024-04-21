"use client";

interface SubtitleProps {
	text: string;
}

const Subtitle = ({ text }: SubtitleProps) => {
	return (
		<div className="text-center border border-foreground bg-primary/25 p-2 min-w-48 rounded-xl w-min items-center justify-center">
			<pre className="text-sm">{text}</pre>
		</div>
	);
};

export default Subtitle;
