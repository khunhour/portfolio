import React from "react";
export default function ProjectCard({ project }) {
	const { title, description, challenges, image, tags, source, demo } =
		project;

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
					<h3 className="project-title">{title}</h3>
					{/* <h5 className="project-heading">Description</h5> */}
					{description}
					<h5 className="project-heading">Challenges</h5>
					{challenges}
					<h5 className="project-heading">Technologies Used</h5>
					<div className="tags-container">{tagsContainer}</div>
				</div>
				<div className="project-buttons">
					<a className="link-button" href={source}>
						Source
					</a>

					<a className="link-button" href={demo}>
						Live Demo
					</a>
				</div>
			</div>
		</div>
	);
}
