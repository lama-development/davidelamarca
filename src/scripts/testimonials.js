document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("testimonials-carousel");
  const track = document.getElementById("testimonials-track");
  const indicators = document.querySelectorAll(".testimonial-indicator");

  if (!carousel || !track || indicators.length === 0) return;

  const testimonials = track.children;
  const totalTestimonials = testimonials.length;
  let currentIndex = 0;

  // Update indicators based on current index
  function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("bg-blue-500");
        indicator.classList.remove("bg-neutral-300", "dark:bg-neutral-700");
      } else {
        indicator.classList.remove("bg-blue-500");
        indicator.classList.add("bg-neutral-300", "dark:bg-neutral-700");
      }
    });
  }

  // Get current testimonial index based on scroll position
  function getCurrentIndex() {
    const scrollLeft = carousel.scrollLeft;
    const containerWidth = carousel.offsetWidth;
    const index = Math.round(scrollLeft / containerWidth);
    return Math.max(0, Math.min(index, totalTestimonials - 1));
  }

  // Scroll to specific testimonial
  function scrollToTestimonial(index) {
    const containerWidth = carousel.offsetWidth;
    const targetScrollLeft = index * containerWidth;

    carousel.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth"
    });
  }

  // Handle scroll events to update indicators
  let scrollTimeout;
  carousel.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      const newIndex = getCurrentIndex();
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateIndicators(currentIndex);
      }
    }, 100);
  });

  // Handle indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      scrollToTestimonial(currentIndex);
      updateIndicators(currentIndex);
    });
  });

  // Initialize
  updateIndicators(0);

  // Handle keyboard navigation
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex--;
      scrollToTestimonial(currentIndex);
      updateIndicators(currentIndex);
    } else if (e.key === "ArrowRight" && currentIndex < totalTestimonials - 1) {
      currentIndex++;
      scrollToTestimonial(currentIndex);
      updateIndicators(currentIndex);
    }
  });

  // Make carousel focusable for keyboard navigation
  carousel.tabIndex = 0;
});
