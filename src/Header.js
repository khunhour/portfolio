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
					<a href="/">Home</a>
				</li>
				<li>
					<a href="#About">About Me</a>
				</li>
				<li>
					<a href="#Projects">Projects</a>
				</li>
			</nav>
		</header>
	);
}
