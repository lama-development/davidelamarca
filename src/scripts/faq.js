document.addEventListener("DOMContentLoaded", function () {
  const faqSection = document.querySelector("#faq");
  if (!faqSection) return;

  const faqItems = faqSection.querySelectorAll("details");

  faqItems.forEach((item) => {
    const content = item.querySelector(".faq-content");
    if (!content) return;

    // Prevent default behavior and handle manually
    item.addEventListener("click", function (e) {
      if (e.target.tagName.toLowerCase() === "summary" || e.target.closest("summary")) {
        e.preventDefault();
        toggleFaq(item, content);
      }
    });

    // Initialize the content styling
    initializeFaqContent(content);
  });

  function initializeFaqContent(content) {
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out";
    content.style.maxHeight = "0px";
    content.style.opacity = "0";
  }

  function toggleFaq(item, content) {
    const isOpening = !item.hasAttribute("open");

    if (isOpening) {
      // Close all other FAQs first
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.hasAttribute("open")) {
          closeFaq(otherItem);
        }
      });

      // Open current FAQ
      openFaq(item, content);
    } else {
      // Close current FAQ
      closeFaq(item);
    }
  }

  function openFaq(item, content) {
    // Set open attribute
    item.setAttribute("open", "");

    // Calculate natural height
    content.style.maxHeight = "none";
    content.style.opacity = "1";
    const naturalHeight = content.scrollHeight;
    content.style.maxHeight = "0px";
    content.style.opacity = "0";

    // Trigger animation
    requestAnimationFrame(() => {
      content.style.maxHeight = naturalHeight + "px";
      content.style.opacity = "1";
    });
  }

  function closeFaq(item) {
    const content = item.querySelector(".faq-content");
    if (!content) return;

    // Animate closing
    content.style.maxHeight = "0px";
    content.style.opacity = "0";

    // Remove open attribute after animation
    setTimeout(() => {
      item.removeAttribute("open");
    }, 300);
  }
});
