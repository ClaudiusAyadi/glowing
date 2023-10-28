// Get the buttons with class "menu-toggle"
const menuToggles = document.querySelectorAll(".menu-toggle");

// Get the overlay with the attribute "data-overlay"
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the mobile menu
function toggleMobileMenu() {
	// Toggle the "active" class on the overlay
	overlay.classList.toggle("active");

	// Loop through each menu toggle button and toggle the "active" class on the parent element
	menuToggles.forEach((menuToggle) => {
		const mobileNavbar = menuToggle.closest("[data-mobile-navbar]");
		if (mobileNavbar) {
			mobileNavbar.classList.toggle("active");
		}
	});
}

// Add click event listeners to the menu toggle buttons
menuToggles.forEach((menuToggle) => {
	menuToggle.addEventListener("click", toggleMobileMenu);
});
