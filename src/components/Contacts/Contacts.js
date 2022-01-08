import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import "./Contacts.css";

export default function Contacts() {
	return (
		<section id="contacts">
			<h2>Contacts</h2>
			<div className="contacts-container">
				<div className="contact">
					<FaGithub color="var(--accent-color)" />
					Github
				</div>
				<div className="contact">
					<MdMail color="var(--accent-color)" />
					<div>khonhourmorm@gmail.com</div>
				</div>
				<a
					href="/images/projectImages/devstore.png"
					className="link-button"
				>
					Download Resume
				</a>
			</div>
		</section>
	);
}
