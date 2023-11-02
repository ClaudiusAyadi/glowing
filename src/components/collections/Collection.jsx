import {Icon} from "@iconify/react";
import {KetoImage} from "../utilities";

function Collection({title, image, subtext, button}) {
	return (
		<li>
			<article className="keto-card hover-shine clickable-parent">
				<div className="keto-card__body">
					<h2>{title}</h2>
					<p>{subtext}</p>
					<a
						href="#"
						className="link underline">
						{button} <Icon icon="ion:arrow-forward-outline" />
					</a>
				</div>

				<KetoImage
					name={"keto-card__head bg-img"}
					src={image}
					alt={title}
					title={title}
				/>
			</article>
		</li>
	);
}

export default Collection;
