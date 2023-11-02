import {Icon} from "@iconify/react";
import {useEffect, useState} from "react";

function KetoSwipe({label, items, speed, delay}) {
	const [slide, setSlide] = useState(0);
	const [autoPlay, setAutoPlay] = useState(true);

	let timeOut = null;

	useEffect(() => {
		timeOut =
			autoPlay &&
			setTimeout(() => {
				nextSlide();
			}, speed);
	});

	function nextSlide() {
		if (timeOut) {
			clearTimeout(timeOut);
		}

		timeOut = setTimeout(() => {
			setSlide((slide + 1) % items.length);
		}, delay);
	}

	function prevSlide() {
		if (timeOut) {
			clearTimeout(timeOut);
		}

		timeOut = setTimeout(() => {
			setSlide((slide - 1 + items.length) % items.length);
		}, delay);
	}

	function pauseAutoPlay() {
		setAutoPlay(false);
		clearTimeout(timeOut);
	}
	function resumeAutoPlay() {
		setAutoPlay(true);
	}

	function mouseWheel(e) {
		if (e.deltaY > 0) {
			nextSlide();
		} else if (e.deltaY < 0) {
			prevSlide();
		}
	}

	return (
		<div
			className="keto-swipe swipe-y"
			role="region"
			aria-roledescription="carousel"
			aria-label={label || "Slider"}
			onMouseEnter={pauseAutoPlay}
			onMouseLeave={resumeAutoPlay}
			onWheel={mouseWheel}>
			<ul
				className="swipe-container"
				role="presentation">
				{items.map((item, index) => (
					<li
						key={index}
						className="swipe"
						role="group"
						aria-roledescription="slide"
						aria-label={`${index + 1} of ${items.length}`}
						aria-hidden={slide === index ? "false" : "true"}>
						<img
							src={item.src}
							alt={item.alt}
						/>
						<div className="hero-content">
							<h1>{item.title}</h1>
							<p className="description">{item.description}</p>
							<meta
								name="currency"
								content="USD"
							/>
							<p
								className="price"
								content={item.price}>
								Starting at <bdi>{item.price}</bdi>
							</p>
							<a
								href="/"
								className="btn btn--black">
								Shop now
							</a>
						</div>
					</li>
				))}
			</ul>

			<div className="swipe-arrows">
				<button
					className="swipe-arrow prev"
					aria-label="Go to Previous Slide"
					aria-controls="swipe-container"
					onClick={prevSlide}>
					<Icon icon="ion:chevron-back" />
				</button>

				<button
					className="swipe-arrow next"
					aria-label="Go to Next Slide"
					aria-controls="swipe-container"
					onClick={nextSlide}>
					<Icon icon="ion:chevron-forward" />
				</button>
			</div>
		</div>
	);
}

export default KetoSwipe;
