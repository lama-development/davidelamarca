const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll<HTMLElement>("[data-switcher]").forEach((switcher) => {
  const indicator = switcher.querySelector<HTMLElement>(".switcher-indicator");
  const options = Array.from(switcher.querySelectorAll<HTMLElement>(".t-switcher-option"));
  if (!indicator || !options.length) return;

  const selected = () => options.find((option) => option.matches('[aria-current="page"], :has(:checked)')) ?? options[0];

  const moveTo = (option: HTMLElement, animate: boolean) => {
    if (!switcher.getClientRects().length) return;
    if (!animate) switcher.dataset.switcherPositioning = "";
    indicator.style.transform = `translateX(${option.offsetLeft}px)`;
    indicator.style.width = `${option.offsetWidth}px`;
    switcher.dataset.switcherReady = "";
    // Commit the measured position before restoring transitions.
    void indicator.offsetWidth;
    delete switcher.dataset.switcherPositioning;
  };

  // Also initializes controls when their containing dialog becomes visible.
  new ResizeObserver(() => moveTo(selected(), false)).observe(switcher);
  switcher.addEventListener("change", () => moveTo(selected(), true));

  let navigation = 0;
  options.forEach((option) => {
    if (!(option instanceof HTMLAnchorElement)) return;

    option.addEventListener("click", async (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || option.target || option.hasAttribute("download") || option.getAttribute("aria-current") === "page" || reducedMotion.matches) return;

      event.preventDefault();
      const currentNavigation = ++navigation;
      moveTo(option, true);
      // CSS owns the duration; wait for the actual transition before navigating.
      await Promise.allSettled(indicator.getAnimations().map((animation) => animation.finished));
      if (currentNavigation === navigation) window.location.assign(option.href);
    });
  });

  window.addEventListener("pageshow", () => moveTo(selected(), false));
});
