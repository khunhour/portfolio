import React from "react";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
export default function Main() {
	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contacts />
		</div>
	);
}
