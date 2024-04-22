"use client";

interface BackdropProps {
	children: React.ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
	return (
		<div className="flex gradient-background animate-gradient rounded-xl p-4 w-full h-50 backdrop-blur-lg">
			{children}
		</div>
	);
};

export default Backdrop;
