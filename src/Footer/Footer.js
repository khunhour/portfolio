import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";
export default function Footer() {
	return (
		<footer>
			<div>Built By Khunhour Morm</div>
			<div>
				<a href="https://github.com/khunhour/portfolio">
					<FaGithub className="footer-img" />
				</a>
			</div>
		</footer>
	);
}
