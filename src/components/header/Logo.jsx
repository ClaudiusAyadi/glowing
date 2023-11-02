import logoPng from "../../assets/images/logo.png";

function Logo() {
	return (
		<figure className="logo-wrapper">
			<a href="#home">
				<picture>
					<img
						src={logoPng}
						alt="Glowing Inc. logo"
					/>
				</picture>
			</a>
			<figcaption className="assisted">Glowing Inc. logo</figcaption>
		</figure>
	);
}

export default Logo;
