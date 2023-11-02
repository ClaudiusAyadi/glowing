import {KetoImage} from "../utilities";

function Shop() {
	return (
		<section>
			<div className="container">
				<div className="wrapper">
					<h2>Our bestsellers</h2>
					<a
						href="#"
						className="link underline">
						Shop all products
					</a>
				</div>

				<ul className="scrollbar">
					<li className="product">
						<article className="keto-card clickable-parent">
							<div className="keto-card__body">
								<h3>Title</h3>
								<p
									className="price"
									content="price">
									Price
								</p>
							</div>
							<KetoImage
								name={"keto-card__head"}
								src={""}
								alt={""}
								title={""}>
								<span
									className="discount"
									content="discount">
									20%
								</span>
							</KetoImage>
						</article>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Shop;
