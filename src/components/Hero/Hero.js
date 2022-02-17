import React from "react";
import "./Hero.css";
export default function Hero({ handleViewResume }) {
	return (
		<section id="home">
			{/* <div className="mono">Hi there! My name is</div> */}
			<div className="mono">こんにちは！私の名前は</div>
			<div className="name">Khunhour Mormです.</div>
			{/* <h1 className="accent">Front-End Web Developer.</h1> */}
			<h1 className="accent">フロントエンドエンジニア</h1>

			{/* <h1>I build things and make them pretty on the Internet.</h1> */}
			<h1>私はインターネット上で物を作るのが好きです。</h1>
			<a
				href="#resume"
				className="link-button"
				onClick={handleViewResume}
			>
				Resume
			</a>
		</section>
	);
}
