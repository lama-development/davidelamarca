document.addEventListener("DOMContentLoaded", function () {
  const themeButtons = document.querySelectorAll(".theme-btn");
  const themeIndicator = document.getElementById("theme-indicator");
  const html = document.documentElement;

  // Add preload class to prevent transitions on initial load
  html.classList.add("preload");

  // Remove preload class after a brief delay to enable transitions
  setTimeout(() => {
    html.classList.remove("preload");
  }, 100);

  // Get current theme from localStorage or default to 'system'
  let currentTheme = localStorage.getItem("theme") || "system";

  // Update UI to match the already-applied theme (theme was applied in head script)
  updateActiveButton(currentTheme);

  // Add click event listeners to theme buttons
  themeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const theme = this.id.replace("theme-", "");
      currentTheme = theme;
      localStorage.setItem("theme", theme);
      applyTheme(theme);
      updateActiveButton(theme);
    });
  });

  // Listen for system theme changes
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (currentTheme === "system") {
      applyTheme("system");
    }
  });

  function applyTheme(theme) {
    if (theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }

  function updateActiveButton(theme) {
    // Update button styles
    themeButtons.forEach((button) => {
      button.classList.remove("text-black", "dark:text-white");
      button.classList.add("text-gray-600", "dark:text-gray-400");
    });

    const activeButton = document.getElementById(`theme-${theme}`);
    if (activeButton) {
      activeButton.classList.remove("text-gray-600", "dark:text-gray-400");
      activeButton.classList.add("text-black", "dark:text-white");

      // Move the indicator to the active button
      moveIndicator(activeButton);
    }
  }

  function moveIndicator(activeButton) {
    if (!themeIndicator || !activeButton) return;

    // Get the index of the active button (0 = system, 1 = light, 2 = dark)
    const buttons = Array.from(themeButtons);
    const buttonIndex = buttons.indexOf(activeButton);
    const buttonWidth = 32;
    const offset = buttonIndex * buttonWidth;

    // Move the indicator
    themeIndicator.style.transform = `translateX(${offset}px)`;
  }
});
