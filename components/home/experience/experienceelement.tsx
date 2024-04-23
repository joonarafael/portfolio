"use client";

import { Link, MapPin, MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Experience } from '@/types';

interface ExperienceElementProps {
	experience: Experience;
	initialExpand: boolean;
}

const ExperienceElement = ({
	experience,
	initialExpand,
}: ExperienceElementProps) => {
	const [expand, setExpand] = useState(initialExpand);

	const { title, company, from, to, location, href, description, skills } =
		experience;

	return (
		<div className="flex w-full flex-col shadow-black/50 dark:shadow-purple-800 shadow-md p-4 gap-4 rounded-xl bg-background">
			<div
				onClick={() => {
					setExpand(!expand);
				}}
				className="flex flex-row w-full justify-between items-center hover:cursor-pointer"
			>
				<div className="flex flex-row gap-2 items-center">
					<h1 className="text-lg font-bold">{title}</h1>
					<h2 className="text-lg font-light">@ {company}</h2>
				</div>
				<div className="flex flex-row gap-4 items-center">
					<p className="hidden sm:block">
						{from} - {to ?? "Present"}
					</p>
					{expand ? (
						<Button
							onClick={() => {
								setExpand(false);
							}}
							variant="outline"
						>
							<MinusCircle />
						</Button>
					) : (
						<Button
							onClick={() => {
								setExpand(true);
							}}
							variant="outline"
						>
							<PlusCircle />
						</Button>
					)}
				</div>
			</div>
			{expand && (
				<div className="border-t flex flex-col justify-start items-start pt-4 gap-4 text-left">
					<div className="block sm:hidden border-b w-full pb-4">
						<p>
							{from} - {to ?? "Present"}
						</p>
					</div>
					<div className="flex flex-row gap-4">
						<Button
							onClick={() => {
								window.open(`http://maps.google.com/?q=${location}`, "_blank");
							}}
							variant="link"
							className="gap-2 items-center p-0"
						>
							<MapPin className="w-5 h-5" />
							<p className="font-light text-neutral">{location}</p>
						</Button>
						<Button
							onClick={() => {
								window.open(href, "_blank");
							}}
							variant="link"
							className="gap-2 items-center"
						>
							<Link className="w-4 h-4" />
							<p className="font-light text-neutral">
								{href?.replaceAll("https://www.", "")}
							</p>
						</Button>
					</div>
					<div className="flex flex-col">
						<p>{description}</p>
					</div>
					<div className="flex flex-wrap gap-3 text-neutral-500 text-xs font-light">
						{skills.map((skill, i) => (
							<div key={i}>{skill.name}</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ExperienceElement;
