import KetoSwipe from "./KetoSwipe";
import {slides} from "../../data/hero.json";

function Hero() {
	return (
		<section
			id="home"
			className="hero">
			<div className="container">
				<KetoSwipe
					label={"Hero Slider"}
					items={slides}
					speed={3500}
					delay={350}></KetoSwipe>
			</div>
		</section>
	);
}

export default Hero;
