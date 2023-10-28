export default function Search() {
	return (
		<form>
			<input
				type="search"
				name="search"
				id="search"
				placeholder="Search products..."
			/>
			<button
				type="submit"
				aria-label="search">
				<span
					className="iconify"
					data-icon="ion:search-outline"></span>
			</button>
		</form>
	);
}
