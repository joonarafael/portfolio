"use client";

import Subtitle from "../../subtitle";
import ProfPic from "./profpic";

const AboutMe = () => {
	return (
		<div
			id="aboutMe"
			className="items-center justify-center w-full flex flex-col gap-4"
		>
			<Subtitle text="ABOUT ME" />
			<div className="flex flex-row gap-2 justify-between w-full items-center">
				<div className="hidden lg:flex min-w-[256px] min-h-[256px]">
					<ProfPic />
				</div>
				<div className="text-left">
					<h2 className="font-bold text-3xl">
						Nam ante sem, tristique eleifend pellentesque eu, placerat
						sollicitudin lorem.
					</h2>
					<p>
						In consequat tincidunt eros sollicitudin hendrerit. Fusce molestie
						dapibus orci tristique vestibulum. Nullam efficitur, magna eget
						semper mattis, turpis ipsum vulputate velit, eget imperdiet leo sem
						ut tellus. Phasellus vestibulum, ex eget posuere volutpat, leo arcu
						pretium eros, et sollicitudin mauris purus eget mauris. Fusce dictum
						leo ut turpis laoreet mollis. Suspendisse venenatis mi at suscipit
						porta. Morbi sagittis lacus quis mi dignissim, eu maximus lectus
						lobortis. Mauris et egestas mauris, sagittis egestas urna.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
