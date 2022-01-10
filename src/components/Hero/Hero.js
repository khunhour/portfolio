import React from "react";
import "./Hero.css";
export default function Hero({ handleViewResume }) {
	console.log(handleViewResume);
	return (
		<section id="home">
			<div className="mono">Hi there! My name is</div>
			<div className="name">Khunhour Morm.</div>
			<h1 className="accent">Front-End Web Developer.</h1>
			<h1>I build things and make them pretty on the Internet.</h1>

			<a
				href="#resume"
				className="link-button"
				onClick={handleViewResume}
			>
				Resume
			</a>
		</section>
	);
}
