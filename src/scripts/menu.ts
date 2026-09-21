const menu = document.querySelector<HTMLDialogElement>("#site-menu");
const trigger = document.querySelector<HTMLButtonElement>("[data-menu-trigger]");

if (menu && trigger) {
  const links = menu.querySelector(".t-stagger");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let closeTimer: ReturnType<typeof setTimeout> | undefined;

  const closeMenu = () => {
    if (!menu.open || menu.classList.contains("is-closing")) return;
    menu.classList.remove("is-open");
    menu.classList.add("is-closing");
    const duration = reducedMotion.matches ? 0 : parseFloat(getComputedStyle(menu).getPropertyValue("--modal-close-dur")) || 150;
    closeTimer = setTimeout(() => menu.close(), duration);
  };

  trigger.addEventListener("click", () => {
    if (menu.open) return;
    clearTimeout(closeTimer);
    menu.classList.remove("is-closing");
    links?.classList.remove("is-shown");
    menu.showModal();
    void menu.offsetHeight;
    menu.classList.add("is-open");
    links?.classList.add("is-shown");
    trigger.setAttribute("aria-expanded", "true");
  });

  menu.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeMenu();
  });

  menu.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    const controls = Array.from(menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled])")).filter((control) => {
      if (!control.getClientRects().length) return false;
      return !(control instanceof HTMLInputElement) || control.type !== "radio" || control.checked;
    });
    const first = controls[0];
    const last = controls.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  });

  menu.querySelector("form")?.addEventListener("submit", (event) => {
    event.preventDefault();
    closeMenu();
  });

  menu.addEventListener("click", (event) => {
    if (event.target !== menu) return;
    const bounds = menu.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeMenu();
  });

  menu.addEventListener("close", () => {
    clearTimeout(closeTimer);
    menu.classList.remove("is-open", "is-closing");
    links?.classList.remove("is-shown");
    trigger.setAttribute("aria-expanded", "false");
    trigger.focus({ preventScroll: true });
  });

  menu.querySelectorAll<HTMLAnchorElement>('a[aria-current="page"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      closeMenu();
    });
  });
}
