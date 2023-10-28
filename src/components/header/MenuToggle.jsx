export default function MenuToggle({children, label, toggle, onToggle}) {
	return (
		<button
			className="menu-toggle"
			aria-label={label}
			aria-expanded={!toggle ? "false" : "true"}
			onClick={onToggle}>
			{children}
		</button>
	);
}
