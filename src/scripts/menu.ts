const menu = document.querySelector<HTMLDialogElement>("#site-menu");
const trigger = document.querySelector<HTMLButtonElement>("[data-menu-trigger]");

if (menu && trigger) {
  trigger.addEventListener("click", () => {
    if (!menu.open) menu.showModal();
    trigger.setAttribute("aria-expanded", "true");
  });

  menu.addEventListener("close", () => {
    trigger.setAttribute("aria-expanded", "false");
    trigger.focus({ preventScroll: true });
  });

  menu.querySelectorAll<HTMLAnchorElement>('a[aria-current="page"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      menu.close();
    });
  });
}
