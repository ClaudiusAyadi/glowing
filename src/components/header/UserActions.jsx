import {Icon} from "@iconify/react";

function UserActions() {
	return (
		<div className="header__actions">
			<button
				className="header__actions-btn"
				aria-label="User">
				<Icon icon="ion:person-outline" />
			</button>

			<button
				className="header__actions-btn"
				aria-label="Wishlist">
				<Icon icon="ion:heart-outline" />
				<span className="btn-badge">0</span>
			</button>

			<button
				className="header__actions-btn"
				aria-label="Cart item">
				<data
					className="btn-text"
					value="0">
					$0:00
				</data>
				<Icon icon="ion:bag-outline" />
				<span className="btn-badge">0</span>
			</button>
		</div>
	);
}

export default UserActions;
