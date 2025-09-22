import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", function () {
  const heroCTA = document.querySelector('a[class*="bg-blue-500"]');
  const bannerCTA = document.querySelector('a[class*="bg-neutral-50"][href*="/contact"]');

  [heroCTA, bannerCTA].forEach((button) => {
    if (button) {
      button.addEventListener(
        "click",
        () => {
          triggerHaptic();
        },
        { passive: true }
      );
    }
  });
});
