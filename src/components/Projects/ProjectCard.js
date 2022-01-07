import React from "react";
export default function ProjectCard({ project }) {
	const { title, description, image, tag, source, demo } = project;
	return (
		<div className="project">
			<img src={image} alt="project" />
			<h5>{title}</h5>
			<p>{description}</p>
		</div>
	);
}
