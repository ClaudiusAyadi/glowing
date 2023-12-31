import NavItem from "./NavItem";

function Navbar() {
	return (
		<nav className="navbar">
			<ul className="navbar__list">
				<NavItem label="home" />
				<NavItem label="collections" />
				<NavItem label="shop" />
				<NavItem label="offers" />
				<NavItem label="blog" />
			</ul>
		</nav>
	);
}

export default Navbar;
