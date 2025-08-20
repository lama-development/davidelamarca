document.addEventListener("DOMContentLoaded", function () {
  // Language dropdown functionality
  const langMenuButton = document.getElementById("lang-menu-button");
  const langDropdown = document.getElementById("lang-dropdown");
  const langChevronIcon = document.getElementById("lang-chevron-icon");
  const langMenuItems = document.querySelectorAll("#lang-dropdown [role='menuitem']");

  let currentFocusIndex = -1;

  // Function to open dropdown
  function openDropdown() {
    langMenuButton.setAttribute("aria-expanded", "true");
    langDropdown?.classList.remove("hidden");
    currentFocusIndex = -1;

    // Rotate chevron icon
    if (langChevronIcon) {
      langChevronIcon.style.transform = "rotate(180deg)";
    }

    // Focus first menu item after a short delay to ensure dropdown is visible
    setTimeout(() => {
      if (langMenuItems.length > 0) {
        currentFocusIndex = 0;
        langMenuItems[0].focus();
      }
    }, 50);
  }

  // Function to close dropdown
  function closeDropdown(returnFocusToButton = true) {
    langMenuButton.setAttribute("aria-expanded", "false");
    langDropdown?.classList.add("hidden");
    currentFocusIndex = -1;

    // Reset chevron rotation
    if (langChevronIcon) {
      langChevronIcon.style.transform = "rotate(0deg)";
    }

    // Return focus to button if requested
    if (returnFocusToButton) {
      langMenuButton.focus();
    }
  }

  // Function to move focus within dropdown
  function moveFocus(direction) {
    if (langMenuItems.length === 0) return;

    if (direction === "down") {
      currentFocusIndex = (currentFocusIndex + 1) % langMenuItems.length;
    } else if (direction === "up") {
      currentFocusIndex = currentFocusIndex <= 0 ? langMenuItems.length - 1 : currentFocusIndex - 1;
    }

    langMenuItems[currentFocusIndex].focus();
  }

  // Toggle dropdown visibility when button is clicked
  langMenuButton?.addEventListener("click", () => {
    const expanded = langMenuButton.getAttribute("aria-expanded") === "true";
    if (expanded) {
      closeDropdown();
    } else {
      openDropdown();
    }
  });

  // Handle keyboard navigation on menu button
  langMenuButton?.addEventListener("keydown", (event) => {
    switch (event.key) {
      case "Enter":
      case " ":
      case "ArrowDown":
        event.preventDefault();
        openDropdown();
        break;
      case "ArrowUp":
        event.preventDefault();
        openDropdown();
        // Focus last item when opening with ArrowUp
        setTimeout(() => {
          if (langMenuItems.length > 0) {
            currentFocusIndex = langMenuItems.length - 1;
            langMenuItems[currentFocusIndex].focus();
          }
        }, 50);
        break;
      case "Escape":
        closeDropdown();
        break;
    }
  });

  // Handle keyboard navigation within dropdown
  langMenuItems.forEach((item, index) => {
    item.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          moveFocus("down");
          break;
        case "ArrowUp":
          event.preventDefault();
          moveFocus("up");
          break;
        case "Escape":
          event.preventDefault();
          closeDropdown();
          break;
        case "Tab":
          // Allow normal tab behavior but close dropdown
          closeDropdown(false);
          break;
        case "Enter":
        case " ":
          // Let the link handle the navigation
          break;
      }
    });

    // Update currentFocusIndex when items receive focus
    item.addEventListener("focus", () => {
      currentFocusIndex = index;
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (event) => {
    if (langMenuButton && !langMenuButton.contains(event.target) && langDropdown && !langDropdown.contains(event.target)) {
      closeDropdown(false);
    }
  });

  // Close dropdown when focusing outside (for better accessibility)
  document.addEventListener("focusin", (event) => {
    if (langMenuButton && !langMenuButton.contains(event.target) && langDropdown && !langDropdown.contains(event.target)) {
      closeDropdown(false);
    }
  });
});
