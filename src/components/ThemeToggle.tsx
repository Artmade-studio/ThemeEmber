import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import * as Icons from "./Icons";

const ThemeToggle: React.FC = () => {
	const [isDark, setIsDark] = useState(() => {
		if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
			return localStorage.getItem("theme") === "dark" ? true : false;
		}
		if (
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-color-scheme: dark)").matches
		) {
			return true;
		}
		return false;
	});

	const toggleTheme = () => setIsDark(!isDark);

	const variants = {
		dark: { x: 0 },
		light: { x: 35 },
	};
	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};

	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return (
		<div
			className="relative z-20 w-[70px] py-[3px] flex rounded-full cursor-pointer bg-neutral-400 dark:bg-neutral-800"
			onClick={toggleTheme}
		>
			<motion.div
				animate={isDark ? "dark" : "light"}
				variants={variants}
				transition={spring}
				className="p-4 z-10 bg-white rounded-full"
			></motion.div>
			<div className="absolute w-full top-0 bottom-0 flex justify-between px-1">
				<Icons.Day className="w-7 text-neutral-600" />
				<Icons.Night className="w-7 text-neutral-300" />
			</div>
		</div>
	);
};

export default ThemeToggle;
