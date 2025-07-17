document.addEventListener("DOMContentLoaded", function () {
  // Language dropdown functionality
  const langMenuButton = document.getElementById("lang-menu-button");
  const langDropdown = document.getElementById("lang-dropdown");

  // Toggle dropdown visibility when button is clicked
  langMenuButton?.addEventListener("click", () => {
    const expanded = langMenuButton.getAttribute("aria-expanded") === "true";
    langMenuButton.setAttribute("aria-expanded", (!expanded).toString());
    langDropdown?.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (langMenuButton && !langMenuButton.contains(event.target) && langDropdown && !langDropdown.contains(event.target)) {
      langMenuButton.setAttribute("aria-expanded", "false");
      langDropdown.classList.add("hidden");
    }
  });

  // Handle keyboard navigation
  langMenuButton?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      langMenuButton.setAttribute("aria-expanded", "false");
      langDropdown?.classList.add("hidden");
    }
  });
});
