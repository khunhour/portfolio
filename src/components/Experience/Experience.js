import React from "react";
import { experience } from "./experienceConstant";
import ExperienceCard from "./ExperienceCard";
import "./Experience.css";

export default function Experience() {
	return (
		<section id="experience">
			<h2>Experience</h2>
			<div className="experience-container">
				{experience.map((experience, index) => (
					<ExperienceCard experience={experience} key={index} />
				))}
			</div>
		</section>
	);
}
