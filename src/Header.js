import React from "react";
import "./Header.css";
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
			<div className="menu">Menu</div>
		</header>
	);
}
