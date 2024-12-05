import React, { useState } from "react";
import "./Header.css";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../components/Logo/Logo";
import { FaCircle } from "react-icons/fa";

export default function Header() {
    const accentColors = ["#ffd42f", "#9df408", "#08A7DF", "#f83a3a"];
    const [linksHidden, setLinksHidden] = useState(true);
    const [currentColorIndex, setCurrentColorInde] = useState(0);
    const toggleMenuBtn = () => {
        setLinksHidden(!linksHidden);
    };

    const handleLinkClick = () => {
        setLinksHidden(true);
    };
    const className = linksHidden ? "" : "active";

    const handleColorWheelClick = () => {
        // Get the next color index, cycling back to 0 if at the end
        const nextColorIndex = (currentColorIndex + 1) % accentColors.length;

        // Update the CSS variable
        const root = document.documentElement;
        root.style.setProperty("--accent-color", accentColors[nextColorIndex]);

        setCurrentColorInde(nextColorIndex);
        setLinksHidden(true);
    };

    return (
        <header>
            <Logo />
            <nav>
                <ul className={className}>
                    <div className="small-logo">
                        <Logo />
                    </div>
                    <li onClick={handleLinkClick}>
                        <a href="#home">Home</a>
                    </li>
                    <li onClick={handleLinkClick}>
                        <a href="#about">About</a>
                    </li>
                    <li onClick={handleLinkClick}>
                        <a href="#skills">Skills</a>
                    </li>
                    <li onClick={handleLinkClick}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li onClick={handleLinkClick}>
                        <a href="#contacts">Contacts</a>
                    </li>

                    <div
                        className="color-wheel-container"
                        onClick={handleColorWheelClick}
                    >
                        <FaCircle className="color-wheel" />
                    </div>
                </ul>
                <div className="menu-btn" onClick={toggleMenuBtn}>
                    {linksHidden ? <MdMenu /> : <MdClose />}
                </div>
            </nav>
        </header>
    );
}
