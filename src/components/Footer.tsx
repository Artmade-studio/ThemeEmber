import React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="container mx-auto px-4 py-8">
			<div className="outline outline-1 outline-neutral-800 dark:outline-white"></div>
			<div className="flex sm:flex-col justify-between gap-2 ">
				<div className="font-poppins sm:text-center text-neutral-800 dark:text-purple-300 text-xl sm:text-base uppercase mt-6">
					Mouktar<span className="font-bold">UI ©</span>2021
					<span>&nbsp;All Rights Reserved.</span>
				</div>
				<ul className="flex text-neutral-800 dark:text-purple-300 text-xl  sm:text-base sm:mx-auto">
					<li className="font-poppins font-bold p-2 cursor-pointer hover:underline underline-offset-8">
						Contact
					</li>
					<li className="font-poppins font-bold p-2 cursor-pointer hover:underline underline-offset-8">
						<a href="/blog/1">Blog</a>
					</li>
					<li className="font-poppins font-bold p-2 cursor-pointer hover:underline underline-offset-8">
						<a href="/templates/1">Templates</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
