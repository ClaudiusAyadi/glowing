function MenuToggle({children, name, label, toggle, onToggle}) {
	return (
		<button
			className={name}
			aria-label={label}
			aria-expanded={toggle ? "true" : "false"}
			onClick={onToggle}>
			{children}
		</button>
	);
}

export default MenuToggle;
