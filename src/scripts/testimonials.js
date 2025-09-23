document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("testimonials-carousel");
  const track = document.getElementById("testimonials-track");
  const indicators = document.querySelectorAll(".testimonial-indicator");
  if (!(carousel && track && indicators.length)) return;

  const total = track.children.length;
  let index = 0;
  let width = carousel.offsetWidth;
  let scrollTimer = 0;

  function updateIndicators(active) {
    indicators.forEach((el, i) => {
      const on = i === active;
      el.classList.toggle("bg-blue-500", on);
      el.classList.toggle("bg-neutral-300", !on);
      el.classList.toggle("dark:bg-neutral-700", !on);
    });
  }
  function clamp(i) {
    return Math.max(0, Math.min(i, total - 1));
  }
  function currentFromScroll() {
    return clamp(Math.round(carousel.scrollLeft / width));
  }
  function go(i) {
    index = clamp(i);
    carousel.scrollTo({ left: index * width, behavior: "smooth" });
    updateIndicators(index);
  }

  carousel.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = window.setTimeout(() => {
      const cur = currentFromScroll();
      if (cur !== index) {
        index = cur;
        updateIndicators(index);
      }
    }, 80);
  });
  indicators.forEach((el, i) => el.addEventListener("click", () => go(i)));
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") go(index - 1);
    else if (e.key === "ArrowRight") go(index + 1);
  });
  window.addEventListener("resize", () => {
    width = carousel.offsetWidth;
    go(index);
  });

  carousel.tabIndex = 0; // keyboard focusable
  updateIndicators(0);
});
