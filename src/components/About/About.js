import React from "react";
import "./About.css";
export default function About() {
	return (
		<section id="about">
			<h2>About Me</h2>
			<p>
				Hello! My name is <span>Khunhour</span> and I enjoy long walks
				on the beach and JavaScript. I am a self-taught web developer 
				on a path to become a Full Stack software engineer. Ever since 
				I could remember, I've always like building things and when I
				started touching on HTML and CSS, I knew that <span>this</span>{" "}
				is what I want to do in my career.
			</p>
			<p>
				Since then, I've been learning more about Front-End technologies like 
				<span>React</span> and use it to build exciting projects as well as 
				contribute to open-source projects.
			</p>
			<p>
				...and I'm not stopping there. Here are some of the technologies, 
				I plan to learn and improve this year: 
			</p>
			<ul className="yellow-bullet-lists">
				<li>Redux</li>
				<li>Styled-Components</li>
				<li>Node.js</li>
				<li>MongoDB</li>
				<li>Express</li>
			</ul>
		</section>
	);
}
