export default function Logo() {
	return (
		<figure className="logo-wrapper">
			<a href="/">
				<picture>
					<img
						src="/src/assets/images/logo.png"
						alt="Glowing Inc. logo"
					/>
				</picture>
			</a>
			<figcaption className="assisted">Glowing Inc. logo</figcaption>
		</figure>
	);
}
