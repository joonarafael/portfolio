"use client";

import ContactButton from './contact';
import Logo from './logo';
import Shortcuts from './shortcuts';
import ThemeSwitch from './themeswitch';

const Navbar = () => {
	return (
		<div className="z-50 p-12 group fixed flex w-full justify-center items-center bg-gradient-to-b from-background to-transparent">
			<div className="group-hover:shadow-lg group-hover:shadow-black/50 dark:group-hover:shadow-purple-500 dark:shadow-purple-800 shadow-black/25 bg-background border shadow-md min-w-[220px] w-full max-w-[2440px] flex justify-between items-center rounded-xl p-2 transition group-hover:duration-200 duration-1000 flex-col sm:flex-row gap-2">
				<Logo />
				{!window.location.href.includes("projects") && (
					<div className="hidden lg:block">
						<Shortcuts />
					</div>
				)}
				<div className="flex flex-row gap-2">
					<ThemeSwitch />
					<ContactButton />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
