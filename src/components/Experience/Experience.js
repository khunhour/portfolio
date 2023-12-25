import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";
import { experiences } from "./ExperienceConstant";

export default function Experience() {
	return (
		<section id="experience">
			<h2>Experience</h2>
			<div className="experience-container">
				{experiences.map((experience, index) => (
					<ExperienceCard experience={experience} key={index} />
				))}
			</div>
		</section>
	);
}
