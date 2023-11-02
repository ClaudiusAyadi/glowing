function KetoImage({name, src, alt, title, children}) {
	return (
		<figure className={name}>
			<picture>
				<img
					src={src}
					alt={alt}
				/>
			</picture>
			<figcaption className="assisted">{title}</figcaption>
			{children}
		</figure>
	);
}

export default KetoImage;
