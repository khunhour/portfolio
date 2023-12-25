import React from "react";

export default function ExperienceCard({ experience }) {
	const { title, company, location, date, descriptions } = experience;

	const descriptionContainer = (
		<>
			{descriptions.map((description, index) => (
				<div key={index}>{description}</div>
			))}
		</>
	);
	return (
		<div className="experience">
			<div className="experience-title">{title}</div>
			<div className="experience-company">@{company}</div>
			<div className="experience-location">{location}</div>
			<div className="experience-date">{date}</div>
			<div className="experience-description">{descriptionContainer}</div>
		</div>
	);
}
