"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Slider from "react-slick";

import { Button } from "@/components/ui/button";
import SKILLS from "@/constants/skills";

import SkillElement from "./skillelement";

const SkillList = () => {
	const sliderRef = useRef<Slider | null>(null);

	SKILLS.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	const settings = {
		arrows: false,
		autoPlay: true,
		autoplaySpeed: 2000,
		dots: true,
		dotsClass: "slick-dots",
		infinite: true,
		speed: 200,
		slidesToShow: 8,
		slidesToScroll: 8,
		cssEase: "linear",
		rows: 2,
		responsive: [
			{
				breakpoint: 1536,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 6,
				},
			},
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					rows: 3,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					rows: 4,
				},
			},
			{
				breakpoint: 768,
				dots: false,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					rows: 4,
				},
			},
			{
				breakpoint: 640,
				dots: false,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 5,
				},
			},
		],
	};
	return (
		<div className="relative flex flex-col gap-8 min-w-[180px] w-[90vw] xl:w-[80vw] max-w-[1320px] h-full">
			<div className="max-w-full">
				<div className="slider-container block cursor-grab">
					<Slider
						{...settings}
						ref={(slider) => {
							sliderRef.current = slider;
						}}
					>
						{SKILLS.map((skill, i) => (
							<SkillElement skill={skill} key={i} />
						))}
					</Slider>
				</div>
			</div>
			<div className="flex w-full items-center justify-center flex-row gap-2">
				<Button
					variant="outline"
					size="sm"
					className="rounded-full"
					onClick={() => {
						sliderRef?.current?.slickPrev();
					}}
				>
					<FaChevronLeft />
				</Button>
				<Button
					variant="outline"
					size="sm"
					className="rounded-full"
					onClick={() => {
						sliderRef?.current?.slickNext();
					}}
				>
					<FaChevronRight />
				</Button>
			</div>
		</div>
	);
};

export default SkillList;
