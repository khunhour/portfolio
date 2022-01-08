import React, { useEffect, useState } from "react";
import "./Header.css";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
	const [linksHidden, setLinksHidden] = useState(false);
	const toggleMenuBtn = () => {
		setLinksHidden(!linksHidden);
	};
	const className = linksHidden ? "" : "active";

	return (
		<header>
			<h1>
				khunhour<span>.dev</span>
			</h1>
			<nav>
				<ul className={className}>
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
					<li>
						<a href="#contacts">Contacts</a>
					</li>
				</ul>
				<div className="menu-btn" onClick={toggleMenuBtn}>
					{linksHidden ? (
						<MdMenu size={"1.8em"} />
					) : (
						<MdClose size={"1.8em"} />
					)}
				</div>
			</nav>
		</header>
	);
}
