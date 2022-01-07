import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
export default function Main() {
	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
		</div>
	);
}
