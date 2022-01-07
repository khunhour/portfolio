import React from "react";

export default function SkillCard({ skill }) {
	const { name, src } = skill;
	console.log(skill.name);
	return (
		<div className="skill">
			<img src={src} alt={name} />
			<div>{name}</div>
		</div>
	);
}
