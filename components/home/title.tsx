"use client";

import { Button } from "../ui/button";

const Title = () => {
	return (
		<div className="flex flex-row h-full lg:h-[720px] justify-center items-center gap-2">
			<div className="flex flex-col gap-8 lg:w-3/5">
				<div className="w-full text-left flex flex-col gap-2">
					<h2 className="text-2xl">{`Hello, I'm`}</h2>
					<h1 className="text-5xl font-bold">Joona Kettunen,</h1>
					<p className="text-xl">
						a passionate computer science student dedicated to mastering
						cutting-edge technologies and shaping the future as a skilled
						problem-solver and worker of the digital age.
					</p>
				</div>
				<Button disabled variant="outline" className="w-min drop-shadow-sm">
					Send me a message
				</Button>
			</div>
			<div className="hidden lg:flex w-2/5 border border-rose-500 text-rose-500 h-full rounded-xl items-center justify-center">
				IMAGE
			</div>
		</div>
	);
};

export default Title;
