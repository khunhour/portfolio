import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "./Skills_constant";
import "./Skills.css";

export default function Skills() {
	console.log(skills);
	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className="skills-container">
				{skills.map((skill, index) => (
					<SkillCard skill={skill} key={index} />
				))}
			</div>
		</section>
	);
}
