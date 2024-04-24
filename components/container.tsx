"use client";

interface ContainerProps {
	children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
	return (
		<div className="min-w-[200px] w-[90vw] xl:w-[80vw] max-w-[1440px] flex justify-center items-center text-center">
			{children}
		</div>
	);
};

export default Container;
