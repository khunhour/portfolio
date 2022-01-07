import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectConstant";
import "./Project.css";
export default function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="project-container">
				{projects.map((project, index) => (
					<ProjectCard project={project} key={index} />
				))}
			</div>
		</section>
	);
}
