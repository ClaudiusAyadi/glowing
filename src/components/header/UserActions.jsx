export default function UserActions() {
	return (
		<div className="header__actions">
			<button
				className="header__actions-btn"
				aria-label="User">
				<span
					className="iconify"
					data-icon="ion:person-outline"></span>
			</button>

			<button
				className="header__actions-btn"
				aria-label="Wishlist">
				<span
					className="iconify"
					data-icon="ion:heart-outline"></span>
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
				<span
					className="iconify"
					data-icon="ion:bag-outline"></span>
				<span className="btn-badge">0</span>
			</button>
		</div>
	);
}
