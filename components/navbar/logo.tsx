"use client";

import { Button } from "../ui/button";

const Logo = () => {
	return (
		<Button
			onClick={() => {
				const element = document.getElementById("title");
				element?.scrollIntoView({ behavior: "smooth", block: "center" });
			}}
			variant="link"
		>
			<div className="flex flex-row text-xl">
				<pre>{`<`}</pre>
				<pre className="text-purple-500">{`Joona`}</pre>
				<pre>{` />`}</pre>
			</div>
		</Button>
	);
};

export default Logo;
