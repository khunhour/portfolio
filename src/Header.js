import React from "react";
import "./Header.css";
import { MdMenu } from "react-icons/md";

export default function Header() {
	return (
		<header>
			<h1>
				khunhour<span>.dev</span>
			</h1>
			<nav>
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
			</nav>
			{/* <MdMenu size={"1.8em"} /> */}
		</header>
	);
}
