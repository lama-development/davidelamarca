type Theme = "light" | "dark" | "system";

const root = document.documentElement;
const controls = document.querySelectorAll<HTMLInputElement>("[data-theme-choice]");

const readTheme = (): Theme => {
  try {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
  } catch {
    return "system";
  }
};

const applyTheme = (theme: Theme) => {
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;

  controls.forEach((control) => {
    control.checked = control.value === theme;
  });
};

applyTheme(readTheme());

controls.forEach((control) => {
  control.addEventListener("change", () => {
    if (!control.checked) return;

    const theme = control.value as Theme;
    try {
      if (theme === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", theme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
    applyTheme(theme);
  });
});
