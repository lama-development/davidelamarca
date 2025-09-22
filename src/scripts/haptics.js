import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", function () {
  // Select all primary CTAs
  const primaryCTAs = document.querySelectorAll('a[class*="px-6"][class*="py-3"][class*="text-lg"][class*="font-semibold"]');

  // Add haptic feedback to all primary CTAs
  primaryCTAs.forEach((button) => {
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
