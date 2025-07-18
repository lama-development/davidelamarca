document.addEventListener("DOMContentLoaded", function () {
  // Language dropdown functionality
  const langMenuButton = document.getElementById("lang-menu-button");
  const langDropdown = document.getElementById("lang-dropdown");
  const langChevronIcon = document.getElementById("lang-chevron-icon");

  // Toggle dropdown visibility when button is clicked
  langMenuButton?.addEventListener("click", () => {
    const expanded = langMenuButton.getAttribute("aria-expanded") === "true";
    const newExpanded = !expanded;
    langMenuButton.setAttribute("aria-expanded", newExpanded.toString());
    langDropdown?.classList.toggle("hidden");

    // Rotate chevron icon based on dropdown state
    if (langChevronIcon) {
      langChevronIcon.style.transform = newExpanded ? "rotate(180deg)" : "rotate(0deg)";
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (langMenuButton && !langMenuButton.contains(event.target) && langDropdown && !langDropdown.contains(event.target)) {
      langMenuButton.setAttribute("aria-expanded", "false");
      langDropdown.classList.add("hidden");
      // Reset chevron rotation
      if (langChevronIcon) {
        langChevronIcon.style.transform = "rotate(0deg)";
      }
    }
  });

  // Handle keyboard navigation
  langMenuButton?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      langMenuButton.setAttribute("aria-expanded", "false");
      langDropdown?.classList.add("hidden");
      // Reset chevron rotation
      if (langChevronIcon) {
        langChevronIcon.style.transform = "rotate(0deg)";
      }
    }
  });
});
