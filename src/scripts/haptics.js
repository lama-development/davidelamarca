import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  // Heuristic: anchor buttons matching sizing & weight (primary CTAs)
  document.querySelectorAll('a[class*="px-6"][class*="py-3"][class*="text-lg"][class*="font-semibold"]').forEach((el) => {
    el.addEventListener("click", () => triggerHaptic(), { passive: true });
  });
});
