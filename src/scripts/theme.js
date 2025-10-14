import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".theme-btn");
  const toggleButtons = document.querySelectorAll(".theme-toggle-btn");
  const indicator = document.getElementById("theme-indicator");
  const html = document.documentElement;
  const DARK_QUERY = "(prefers-color-scheme: dark)";
  const WIDTH = 32; // pixel width of each toggle button

  html.classList.add("preload");
  setTimeout(() => html.classList.remove("preload"), 100);

  let current = localStorage.getItem("theme") || "system";
  updateActive(current);

  // Handle footer theme buttons
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const next = this.id.replace("theme-", "");
      triggerHaptic();
      current = next;
      localStorage.setItem("theme", next);
      apply(next);
      updateActive(next);
    });
  });

  // Handle navbar theme toggle buttons (only light/dark, no system)
  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      triggerHaptic();
      // Toggle between light and dark only
      current = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", current);
      apply(current);
      updateActive(current);
    });
  });

  window.matchMedia(DARK_QUERY).addEventListener("change", () => {
    if (current === "system") {
      apply("system");
    }
  });

  function prefersDark() {
    return window.matchMedia(DARK_QUERY).matches;
  }

  function apply(theme) {
    theme === "dark" || (theme === "system" && prefersDark()) ? html.classList.add("dark") : html.classList.remove("dark");
  }

  function updateActive(theme) {
    buttons.forEach((b) => {
      b.classList.remove("text-black", "dark:text-white");
      b.classList.add("text-neutral-600", "dark:text-neutral-400");
    });
    const active = document.getElementById(`theme-${theme}`);
    if (!active) return;
    active.classList.remove("text-neutral-600", "dark:text-neutral-400");
    active.classList.add("text-black", "dark:text-white");
    moveIndicator(active);
  }

  function moveIndicator(active) {
    if (!indicator) return;
    const idx = Array.from(buttons).indexOf(active);
    indicator.style.transform = `translateX(${idx * WIDTH}px)`;
  }

  apply(current);
});
