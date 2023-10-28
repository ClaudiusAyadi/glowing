export default function NavItem({label}) {
	return (
		<li>
			<a
				href={`#${label}`}
				className="navbar__link has-after">
				{label}
			</a>
		</li>
	);
}
