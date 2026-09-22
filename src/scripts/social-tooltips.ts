document.querySelectorAll<HTMLElement>("[data-social-tooltip]").forEach((container) => {
  const trigger = container.querySelector<HTMLAnchorElement>("[data-tooltip-trigger]");
  const tooltip = container.querySelector<HTMLElement>('[role="tooltip"]');
  if (!trigger || !tooltip) return;

  if (typeof tooltip.showPopover !== "function") {
    trigger.title = tooltip.textContent?.trim() ?? "";
    return;
  }

  let timer: ReturnType<typeof setTimeout> | undefined;

  const clearTimer = () => {
    clearTimeout(timer);
    timer = undefined;
  };

  const isOpen = () => tooltip.matches(":popover-open");
  const isInterested = () => trigger.matches(":hover, :focus-visible") || tooltip.matches(":hover");

  const position = () => {
    const bounds = trigger.getBoundingClientRect();
    const gap = 8;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;
    const left = Math.max(gap, Math.min(bounds.left + (bounds.width - width) / 2, window.innerWidth - width - gap));
    const above = bounds.top - height - gap;
    const top = above >= gap ? above : bounds.bottom + gap;
    const arrowLeft = Math.max(12, Math.min(bounds.left + bounds.width / 2 - left, width - 12));
    tooltip.dataset.side = above >= gap ? "top" : "bottom";
    tooltip.style.setProperty("--tooltip-left", `${left}px`);
    tooltip.style.setProperty("--tooltip-top", `${top}px`);
    tooltip.style.setProperty("--tooltip-arrow-left", `${arrowLeft}px`);
  };

  const show = () => {
    clearTimer();
    if (!trigger.isConnected || !isInterested()) return;
    if (!isOpen()) tooltip.showPopover();
    position();
  };

  const hide = () => {
    clearTimer();
    if (isOpen()) tooltip.hidePopover();
  };

  const scheduleHide = () => {
    clearTimer();
    // Give the pointer time to cross the gap between the icon and tooltip.
    timer = setTimeout(() => {
      if (!isInterested()) hide();
    }, 100);
  };

  trigger.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "touch") return;
    clearTimer();
    timer = setTimeout(show, 80);
  });
  trigger.addEventListener("pointerleave", scheduleHide);
  trigger.addEventListener("focus", () => {
    if (trigger.matches(":focus-visible")) show();
  });
  trigger.addEventListener("blur", scheduleHide);
  trigger.addEventListener("click", hide);
  tooltip.addEventListener("pointerenter", clearTimer);
  tooltip.addEventListener("pointerleave", scheduleHide);
  tooltip.addEventListener("beforetoggle", (event) => {
    if (event.newState === "closed") clearTimer();
  });
  window.addEventListener("resize", hide);
  document.addEventListener("scroll", hide, { capture: true, passive: true });
});
