document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const chevronIcon = document.getElementById("chevron-icon");
  const overlay = document.getElementById("mobile-menu-overlay");

  // Set active navigation link based on current page
  setActiveNavLink();

  if (menuButton && mobileMenu && chevronIcon && overlay) {
    menuButton.addEventListener("click", function (e) {
      e.stopPropagation();
      const isHidden = mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden");
      overlay.classList.toggle("hidden");

      // Rotate chevron and toggle active state based on menu state
      if (isHidden) {
        chevronIcon.style.transform = "rotate(180deg)";
        menuButton.classList.add("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
      } else {
        chevronIcon.style.transform = "rotate(0deg)";
        menuButton.classList.remove("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (e) {
      const target = e.target;
      if (!mobileMenu.contains(target) && !menuButton.contains(target)) {
        mobileMenu.classList.add("hidden");
        overlay.classList.add("hidden");
        chevronIcon.style.transform = "rotate(0deg)";
        menuButton.classList.remove("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
      }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        overlay.classList.add("hidden");
        chevronIcon.style.transform = "rotate(0deg)";
        menuButton.classList.remove("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
      });
    });
  }
});

// Function to set active navigation link based on current page
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-link");
  const mobileLinks = document.querySelectorAll("#mobile-menu a");

  // Remove active classes from all links first
  [...navLinks, ...mobileLinks].forEach((link) => {
    link.classList.remove("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
  });

  // Add active classes to current page links
  [...navLinks, ...mobileLinks].forEach((link) => {
    const href = link.getAttribute("href");
    const normalizedHref = href.endsWith('/') ? href.slice(0, -1) : href;
    const normalizedPath = currentPath.endsWith('/') && currentPath !== '/' ? currentPath.slice(0, -1) : currentPath;
    
    if (normalizedHref === normalizedPath || (normalizedPath === "/" && normalizedHref === "")) {
      link.classList.add("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
    }
  });
}
