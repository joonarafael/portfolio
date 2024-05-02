"use client";

import Container from "@/components/container";
import AboutMe from "@/components/home/aboutme/aboutme";
import Experience from "@/components/home/experience/experience";
import NewProject from "@/components/home/newproject/newproject";
import Projects from "@/components/home/projects/projects";
import Skills from "@/components/home/skills/skills";
import Title from "@/components/home/title/title";

const HomeClient = () => {
	return (
		<Container>
			<div className="flex flex-col gap-24 z-0 min-h-screen">
				<Title />
				<AboutMe />
				<Skills />
				<Projects />
				<Experience />
				<NewProject />
			</div>
		</Container>
	);
};

export default HomeClient;
