// Testimonials Carousel Script
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("testimonials-track");
  const prevBtn = document.getElementById("prev-testimonial");
  const nextBtn = document.getElementById("next-testimonial");
  const indicators = document.querySelectorAll(".testimonial-indicator");

  if (!track) return;

  const testimonials = track.children;
  const totalTestimonials = testimonials.length;
  let currentIndex = 0;

  // Update carousel position
  function updateCarousel() {
    const translateX = -currentIndex * 100;
    track.style.transform = `translateX(${translateX}%)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("bg-sky-500");
        indicator.classList.remove("bg-neutral-300", "dark:bg-neutral-700");
      } else {
        indicator.classList.remove("bg-sky-500");
        indicator.classList.add("bg-neutral-300", "dark:bg-neutral-700");
      }
    });

    // Update button states
    if (prevBtn) {
      prevBtn.disabled = currentIndex === 0;
    }
    if (nextBtn) {
      nextBtn.disabled = currentIndex === totalTestimonials - 1;
    }
  }

  // Previous testimonial
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  // Next testimonial
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalTestimonials - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  }

  // Indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Initialize
  updateCarousel();
});
