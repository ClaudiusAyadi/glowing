import LogoPng from "../../assets/images/logo.png";

export default function Logo() {
	return (
		<figure className="logo-wrapper">
			<a href="/">
				<picture>
					<img
						src={LogoPng}
						alt="Glowing Inc. logo"
					/>
				</picture>
			</a>
			<figcaption className="assisted">Glowing Inc. logo</figcaption>
		</figure>
	);
}
