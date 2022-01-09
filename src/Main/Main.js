import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Main() {
	const [scrollBtnIsVisible, setScrollBtnIsVisible] = useState(false);
	const toggleVisibility = () => {
		if (window.pageYOffset > 300) {
			setScrollBtnIsVisible(true);
		} else {
			setScrollBtnIsVisible(false);
		}
	};
	useEffect(() => {
		document.addEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contacts />
			div.#lesson
		</div>
	);
}
