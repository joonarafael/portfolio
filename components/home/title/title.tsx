"use client";

import { Button } from '../../ui/button';
import TitleVideo from './video';

const Title = () => {
	return (
		<div
			id="title"
			className="flex flex-row h-full lg:h-[720px] justify-center items-center gap-2"
		>
			<div className="flex flex-col gap-12 lg:w-3/5 pr-10">
				<div className="w-full text-left flex flex-col gap-2">
					<h2 className="text-2xl">{`Hello, I'm`}</h2>
					<h1 className="gradient-text w-fit text-transparent text-6xl font-extrabold animate-gradient">
						Joona Kettunen,
					</h1>
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
			<TitleVideo />
		</div>
	);
};

export default Title;
