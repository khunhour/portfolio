import React, { useState } from "react";
import "./Header.css";
import { MdMenu, MdClose } from "react-icons/md";

export default function Header() {
	const [linksHidden, setLinksHidden] = useState(false);
	const toggleMenuBtn = () => {
		setLinksHidden(!linksHidden);
	};

	const handleLinkClick = () => {
		setLinksHidden(true);
	};
	const className = linksHidden ? "" : "active";
	return (
		<header>
			<h1>
				khunhour<span>.dev</span>
			</h1>
			<nav>
				<ul className={className}>
					<div className="small-logo">
						k<span>.</span>
					</div>
					<li onClick={handleLinkClick}>
						<a href="#home">Home</a>
					</li>
					<li onClick={handleLinkClick}>
						<a href="#about">About</a>
					</li>
					<li onClick={handleLinkClick}>
						<a href="#skills">Skills</a>
					</li>
					<li onClick={handleLinkClick}>
						<a href="#projects">Projects</a>
					</li>
					<li onClick={handleLinkClick}>
						<a href="#contacts">Contacts</a>
					</li>
				</ul>
				<div className="menu-btn" onClick={toggleMenuBtn}>
					{linksHidden ? <MdMenu /> : <MdClose />}
				</div>
			</nav>
		</header>
	);
}
