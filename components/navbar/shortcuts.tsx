"use client";

import { Button } from "../ui/button";

const Shortcuts = () => {
	return (
		<div className="flex flex-row gap-1 justify-center items-center">
			<Button disabled variant="link">
				Home
			</Button>
			<Button disabled variant="link">
				About
			</Button>
			<Button disabled variant="link">
				Skills
			</Button>
			<Button disabled variant="link">
				Work
			</Button>
			<Button disabled variant="link">
				Experience
			</Button>
		</div>
	);
};

export default Shortcuts;
