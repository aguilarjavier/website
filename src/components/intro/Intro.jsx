import Typewriter from "typewriter-effect";
import React from "react";
import "./intro.scss";

export default function Intro() {
	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imgContainer">
					<img src="assets/javier.jpg" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi there, I'm</h2>
					<h1>Javier Aguilar</h1>
					<h3>
						<Typewriter
							options={{
								strings: ["Software Developer", "UCF Masters Alumni"],
								autoStart: true,
								delay: 75,
								loop: true,
							}}
						/>
					</h3>
				</div>
				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
}
