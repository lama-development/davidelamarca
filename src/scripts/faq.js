import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  const faqSection = document.querySelector("#faq");
  if (!faqSection) return;

  const faqItems = faqSection.querySelectorAll("details");
  const DURATION = 300; // keep in sync with CSS timing if duplicated
  const TRANSITION = `max-height ${DURATION}ms ease-in-out, opacity ${DURATION}ms ease-in-out`;

  faqItems.forEach((item) => {
    const content = item.querySelector(".faq-content");
    const chevron = item.querySelector('[data-faq-chevron]');
    if (!content) return;
    initContent(content);
    item.addEventListener("click", (e) => {
      const target = e.target;
      if (target instanceof Element && (target.tagName.toLowerCase() === "summary" || target.closest("summary"))) {
        e.preventDefault();
        triggerHaptic();
        toggle(item, content, chevron);
      }
    });
  });

  function initContent(el) {
    el.style.overflow = "hidden";
    el.style.transition = TRANSITION;
    el.style.maxHeight = "0px";
    el.style.opacity = "0";
  }

  function toggle(item, content, chevron) {
    const opening = !item.hasAttribute("open");
    if (opening) {
      faqItems.forEach((other) => {
        if (other !== item && other.hasAttribute("open")) close(other); // close() now handles its own chevron lookup
      });
      open(item, content, chevron);
    } else {
      close(item, chevron);
    }
  }

  function open(item, content, chevron) {
    item.setAttribute("open", "");
    content.style.maxHeight = "none"; // let it size naturally to measure
    const height = content.scrollHeight;
    content.style.maxHeight = "0px";
    content.style.opacity = "0";
    requestAnimationFrame(() => {
      content.style.maxHeight = height + "px";
      content.style.opacity = "1";
    });
    if (chevron) chevron.classList.add('faq-chevron-rotated');
    // After transition complete, fix height to auto for responsiveness
    setTimeout(() => {
      if (item.hasAttribute("open")) {
        content.style.maxHeight = "none";
      }
    }, DURATION);
  }

  function close(item, chevron) {
    const content = item.querySelector(".faq-content");
    if (!content) return;
    // If previously set to 'none', set explicit height for collapse animation
    if (content.style.maxHeight === "none") content.style.maxHeight = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      content.style.maxHeight = "0px";
      content.style.opacity = "0";
    });
    const localChevron = chevron || item.querySelector('[data-faq-chevron]');
    if (localChevron) localChevron.classList.remove('faq-chevron-rotated');
    setTimeout(() => item.removeAttribute("open"), DURATION);
  }
});
