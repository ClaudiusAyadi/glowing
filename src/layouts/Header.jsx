import {useState, useEffect} from "react";
import {Alert, MenuToggle, Search, Logo, UserActions, Navbar} from "../components/header";

function Header() {
	const [toggle, setToggle] = useState(false);
	const [fix, setFix] = useState(false);

	function menuToggle() {
		setToggle(!toggle);
	}

	useEffect(() => {
		function setFixed() {
			if (window.scrollY >= 150) {
				setFix(true);
			} else {
				setFix(false);
			}
		}

		window.addEventListener("scroll", setFixed);

		return () => {
			window.removeEventListener("scroll", setFixed);
		};
	}, []);

	return (
		<>
			<header data-keto="header">
				<Alert />
				<div className={`${fix ? "header__top scrolling" : "header__top"}`}>
					<div className="container">
						<MenuToggle
							name={"menu-toggle"}
							label="Open Mobile Menu"
							toggle={toggle}
							onToggle={menuToggle}>
							<span></span>
							<span></span>
							<span></span>
						</MenuToggle>
						<Search />
						<Logo />
						<UserActions />
						<Navbar />
					</div>
				</div>
			</header>

			<aside className="sidebar">
				<div
					className="mobile-navbar"
					aria-expanded={toggle ? "true" : "false"}>
					<div className="wrapper">
						<Logo />
						<MenuToggle
							name={"menu-toggle"}
							label={"Close Mobile Menu"}
							toggle={toggle}
							onToggle={menuToggle}>
							<span
								className="iconify"
								data-icon="ion:close-outline"></span>
						</MenuToggle>
					</div>

					<Navbar />
				</div>

				<MenuToggle
					name={"overlay"}
					label={"Mobile Menu Overlay"}
					toggle={toggle}
					onToggle={menuToggle}></MenuToggle>
			</aside>
		</>
	);
}

export default Header;
