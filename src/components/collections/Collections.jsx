import Collection from "./Collection";
import collection1 from "../../assets/images/collection-1.jpg";
import collection2 from "../../assets/images/collection-2.jpg";
import collection3 from "../../assets/images/collection-3.jpg";

function Collections() {
	return (
		<section
			id="collections"
			className="collections"
			aria-label="collections">
			<div className="container">
				<ul className="collection-list">
					<Collection
						title="Summer collections"
						image={collection1}
						subtext="Starting at $17.99"
						button="Shop now"
					/>

					<Collection
						title="What’s new?"
						image={collection2}
						subtext="Get the glow"
						button="Explore now"
					/>

					<Collection
						title="Buy 1 get 1"
						image={collection3}
						subtext="We reward our lovers!"
						button="Discover now"
					/>
				</ul>
			</div>
		</section>
	);
}

export default Collections;
