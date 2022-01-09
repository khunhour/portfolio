import React, { useEffect, useState } from "react";
import About from "../components/About/About";
import Contacts from "../components/Contacts/Contacts";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./Main.css";

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
		window.addEventListener("scroll", toggleVisibility);
	}, [scrollBtnIsVisible]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const className = scrollBtnIsVisible ? "" : "zero-opacity";

	return (
		<div>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contacts />
			<div onClick={scrollToTop} className={`scroll-to-top ${className}`}>
				<BsFillArrowUpCircleFill />
			</div>
		</div>
	);
}
