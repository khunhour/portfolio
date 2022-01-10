import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import "./Contacts.css";

export default function Contacts({ showResume, handleToggleResume }) {
	return (
		<section id="contacts">
			<h2>Contacts</h2>
			<div className="contacts-container">
				<div className="contact">
					<FaGithub color="var(--accent-color)" />
					<a href="https://github.com/khunhour">
						https://github.com/khunhour
					</a>
				</div>
				<div className="contact">
					<MdMail color="var(--accent-color)" />
					<div>khonhourmorm@gmail.com</div>
				</div>
				<button onClick={handleToggleResume}>
					{showResume ? "Hide Resume" : "View Resume"}
				</button>
			</div>
			{showResume && (
				<>
					<h2>Khunhour's Resume</h2>
					<div className="iframe-container">
						<iframe
							title="Khunhour Morm's Resume"
							className="responsive-iframe"
							src="/assets/resume.pdf"
						></iframe>
					</div>
				</>
			)}
		</section>
	);
}
