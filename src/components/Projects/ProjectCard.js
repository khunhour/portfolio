import React from "react";
export default function ProjectCard({ project }) {
	const { title, description, image, tags, source, demo } = project;

	const tagsContainer = (
		<>
			{tags.map((tag, index) => (
				<div className="tag" key={index}>
					{tag}
				</div>
			))}
		</>
	);
	return (
		<div className="project">
			<img src={image} alt="project" />
			<div className="project-info">
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
					<h5>Technologies Used:</h5>
					<div className="tags-container">{tagsContainer}</div>
				</div>
				<div className="project-buttons">
					<div className="link-button">
						<a href={source}>Source</a>
					</div>
					<div className="link-button">
						<a href={demo}>Live Demo</a>
					</div>
				</div>
			</div>
		</div>
	);
}
