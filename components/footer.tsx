"use client";

import { RxGithubLogo } from 'react-icons/rx';

import { useTranslationStore } from '@/hooks/useTranslation';
import TRANSLATION from '@/translations/translation';

import Logo from './navbar/logo';
import { Button } from './ui/button';

const Footer = () => {
	const { language } = useTranslationStore();

	return (
		<div className="border drop-shadow-md rounded-t-xl px-14 py-10 min-w-[200px] w-[100vw] max-w-[2440px] flex justify-between items-center transition group-hover:duration-200 duration-1000 flex-col sm:flex-row bg-background gap-2">
			<div className="flex flex-col lg:flex-row items-center justify-center gap-2">
				<Logo />
				<p className="text-sm text-neutral-500 font-light text-center">
					{TRANSLATION[language].global.footer.updated} 2024-05-02
				</p>
			</div>
			<div className="flex flex-col md:flex-row gap-2 items-center">
				<div className="flex flex-row items-center gap-0">
					<a href="mailto:joonarafael@gmail.com" target="_blank">
						<Button variant="link">
							<p>joonarafael@gmail.com</p>
						</Button>
					</a>
					<a href="https://github.com/joonarafael" target="_blank">
						<Button variant="ghost">
							<RxGithubLogo className="w-4 h-4" />
						</Button>
					</a>
				</div>
				<a href="https://www.freepik.com" target="_blank">
					<Button variant="link" className="font-light">
						{TRANSLATION[language].global.footer.favicon}
					</Button>
				</a>
			</div>
		</div>
	);
};

export default Footer;
