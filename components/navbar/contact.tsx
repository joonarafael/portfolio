"use client";

import { Button } from "../ui/button";

const ContactButton = () => {
	return (
		<div>
			<Button
				variant="secondary"
				disabled
				className="bg-purple-500 text-white hover:bg-purple-500/50"
			>
				<p>Contact me</p>
			</Button>
		</div>
	);
};

export default ContactButton;
