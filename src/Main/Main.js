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
	const className = scrollBtnIsVisible ? "" : "hide";

	const [showResume, setShowResume] = useState(false);

	const handleToggleResume = () => {
		setShowResume(!showResume);
	};

	const handleViewResume = () => {
		setShowResume(true);
	};

	return (
		<div>
			<Hero handleViewResume={handleViewResume} />
			<About />
			<Skills />
			<Projects />
			<Contacts
				showResume={showResume}
				handleToggleResume={handleToggleResume}
			/>
			<div onClick={scrollToTop}>
				<BsFillArrowUpCircleFill
					className={`scroll-to-top ${className}`}
				/>
			</div>
		</div>
	);
}
