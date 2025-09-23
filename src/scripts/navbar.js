import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  const chevron = document.getElementById("chevron-icon");
  if (!(btn && menu && chevron)) return;

  let open = !menu.classList.contains("hidden");
  let lastFocus = null;
  const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  btn.setAttribute("aria-haspopup", "true");
  btn.setAttribute("aria-controls", "mobile-menu");
  menu.setAttribute("role", "menu");
  menu.setAttribute("tabindex", "-1");

  function focusables() {
    return Array.from(menu.querySelectorAll(FOCUSABLE)).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
  }

  function trapKey(e) {
    if (!open) return;
    if (e.key === "Tab") {
      const els = focusables();
      if (!els.length) {
        e.preventDefault();
        return;
      }
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    } else if (e.key === "Escape") {
      close();
    }
  }

  function openMenu() {
    if (open) return;
    triggerHaptic();
    menu.classList.remove("hidden");
    chevron.style.transform = "rotate(180deg)";
    btn.classList.add("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
    btn.setAttribute("aria-expanded", "true");
    lastFocus = document.activeElement;
    document.addEventListener("keydown", trapKey, true);
    const els = focusables();
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    // Only auto-focus first item for non-touch (keyboard) users
    if (!isCoarsePointer && els.length) els[0].focus();
    open = true;
  }
  function close() {
    if (!open) return;
    menu.classList.add("hidden");
    chevron.style.transform = "rotate(0deg)";
    btn.classList.remove("bg-neutral-100", "dark:bg-neutral-900", "border", "border-neutral-200", "dark:border-neutral-800");
    btn.setAttribute("aria-expanded", "false");
    document.removeEventListener("keydown", trapKey, true);
    btn.focus();
    open = false;
  }

  btn.addEventListener(
    "click",
    (e) => {
      e.stopPropagation();
      requestAnimationFrame(() => (open ? close() : openMenu()));
    },
    { passive: true }
  );
  document.addEventListener("click", (e) => {
    if (open && !menu.contains(e.target) && !btn.contains(e.target)) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => close()));
});
