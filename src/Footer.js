import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Footer() {
	return (
		<footer>
			<div>Build By Khunhour</div>
			<div>
				<a href="https://github.com/khunhour/portfolio">
					<FaGithub color="var(--accent-color)" />
				</a>
			</div>
		</footer>
	);
}
