import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import "./Contacts.css";

export default function Contacts({ showResume, handleToggleResume }) {
	return (
		<section id="contacts">
			<h2>Contacts</h2>
			<div className="contacts-container">
				<div className="contact">
					<FaGithub color="var(--accent-color)" />
					<a href="https://github.com/khunhour">Github</a>
				</div>
				<div className="contact">
					<BsLinkedin color="var(--accent-color)" />
					<a href="https://www.linkedin.com/in/khunhour-morm-dev/">
						LinkedIn
					</a>
				</div>
				<div className="contact">
					<MdMail color="var(--accent-color)" />
					<div>khonhourmorm@gmail.com</div>
				</div>
				<a
					onClick={handleToggleResume}
					className="link-button"
					href="#resume"
				>
					{showResume ? "Hide Resume" : "View Resume"}
				</a>
			</div>
			{showResume && (
				<>
					<h2 id="resume">Resume</h2>
					<div className="iframe-container">
						<iframe
							title="Khunhour Morm's Resume"
							className="responsive-iframe"
							src="assets/resume.pdf"
						></iframe>
					</div>
				</>
			)}
		</section>
	);
}
