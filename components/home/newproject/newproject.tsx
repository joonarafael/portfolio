"use client";

import ContactButton from "@/components/navbar/contact";

import Subtitle from "../../subtitle";
import Backdrop from "./backdrop";

const NewProject = () => {
	return (
		<div
			id="newProject"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text="CONTACT" />
			<Backdrop>
				<div className="w-full flex flex-col gap-4 sm:flex-row items-center justify-between p-12">
					<h2 className="text-3xl font-bold text-white">Get started!</h2>
					<p className="text-white hidden lg:flex">
						Got a project in mind? Let&apos;s chat.
					</p>
					<ContactButton />
				</div>
			</Backdrop>
		</div>
	);
};

export default NewProject;
