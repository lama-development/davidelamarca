// Contact form functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 5;

  // Modal elements
  const rulesModalTrigger = document.getElementById("rules-modal-trigger");
  const rulesModal = document.getElementById("rules-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCancel = document.getElementById("modal-cancel");
  const modalContinue = document.getElementById("modal-continue");
  const rulesCheckbox = document.getElementById("rules-checkbox");

  // Form elements
  const contactForm = document.getElementById("contact-form");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Modal functionality
  rulesModalTrigger?.addEventListener("click", () => {
    rulesModal?.classList.remove("hidden");
    rulesModal?.classList.add("flex");
  });

  [modalClose, modalCancel].forEach((btn) => {
    btn?.addEventListener("click", () => {
      rulesModal?.classList.add("hidden");
      rulesModal?.classList.remove("flex");
    });
  });

  rulesModal?.addEventListener("click", (e) => {
    if (e.target === rulesModal) {
      rulesModal.classList.add("hidden");
      rulesModal.classList.remove("flex");
    }
  });

  rulesCheckbox?.addEventListener("change", () => {
    if (modalContinue && rulesCheckbox instanceof HTMLInputElement) {
      modalContinue.disabled = !rulesCheckbox.checked;
    }
  });

  modalContinue?.addEventListener("click", () => {
    rulesModal?.classList.add("hidden");
    rulesModal?.classList.remove("flex");
    contactForm?.classList.remove("hidden");

    // Hide the entire introduction box instead of just the button
    const formIntro = document.getElementById("form-intro");
    formIntro?.classList.add("hidden");

    // Show form steps and navigation
    showStep(1);
  });

  // Form step navigation
  function showStep(step) {
    // Hide all steps
    document.querySelectorAll(".form-step").forEach((s) => s.classList.add("hidden"));

    // Show current step
    const currentStepEl = document.getElementById(`step-${step}`);
    currentStepEl?.classList.remove("hidden");

    // Update navigation buttons
    if (prevBtn && nextBtn && submitBtn) {
      prevBtn.classList.toggle("hidden", step === 1);
      nextBtn.classList.toggle("hidden", step === totalSteps);
      submitBtn.classList.toggle("hidden", step !== totalSteps);
    }

    // Update step indicators in form
    document.querySelectorAll(".step-indicator").forEach((indicator, index) => {
      indicator.classList.toggle("active", index < step);
      indicator.classList.toggle("bg-sky-500", index < step);
      indicator.classList.toggle("bg-neutral-200", index >= step);
      indicator.classList.toggle("dark:bg-neutral-700", index >= step);
    });

    // Update step indicators in sidebar
    document.querySelectorAll(".contact-sidebar .space-y-3 > div").forEach((stepDiv, index) => {
      const circle = stepDiv.querySelector("div");
      const text = stepDiv.querySelector("span");

      if (circle && text) {
        if (index + 1 <= step) {
          // Active/completed step
          circle.classList.remove("bg-neutral-200", "dark:bg-neutral-700", "text-neutral-600", "dark:text-neutral-400");
          circle.classList.add("bg-sky-500", "text-white", "dark:text-black");
          text.classList.remove("text-neutral-400", "dark:text-neutral-500");
          text.classList.add("text-neutral-600", "dark:text-neutral-400");
        } else {
          // Inactive step
          circle.classList.remove("bg-sky-500", "text-white", "dark:text-black");
          circle.classList.add("bg-neutral-200", "dark:bg-neutral-700", "text-neutral-600", "dark:text-neutral-400");
          text.classList.remove("text-neutral-600", "dark:text-neutral-400");
          text.classList.add("text-neutral-400", "dark:text-neutral-500");
        }
      }
    });
  }

  function validateStep(step) {
    const stepEl = document.getElementById(`step-${step}`);
    if (!stepEl) return false;

    switch (step) {
      case 1:
        return stepEl.querySelector('input[name="project-type"]:checked') !== null;
      case 2:
        const description = stepEl.querySelector("#description");
        const domain = stepEl.querySelector('input[name="domain"]:checked');
        const content = stepEl.querySelector('input[name="content"]:checked');
        console.log("Step 2 validation:", {
          description: description?.value?.trim(),
          descriptionLength: description?.value?.trim().length,
          domain: domain?.value,
          content: content?.value,
          isValid: description && description.value.trim().length > 10 && domain && content
        });
        // Temporary fix: only require description for testing
        return description && description.value.trim().length > 10;
      case 3:
        const budget = stepEl.querySelector('input[name="budget"]:checked');
        const timeline = stepEl.querySelector('input[name="timeline"]:checked');
        return budget && timeline;
      case 4:
        const name = stepEl.querySelector("#name");
        const email = stepEl.querySelector("#email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return name && name.value.trim().length > 2 && email && emailRegex.test(email.value.trim());
      case 5:
        const terms = stepEl.querySelector('input[name="terms"]:checked');
        const expectations = stepEl.querySelector("#expectations");
        return terms && expectations && expectations.value.trim().length > 5;
      default:
        return false;
    }
  }

  function updateNextButton() {
    if (nextBtn instanceof HTMLButtonElement) {
      const isValid = validateStep(currentStep);
      console.log(`Updating next button for step ${currentStep}:`, isValid);
      nextBtn.disabled = !isValid;
    }
  }

  // Add event listeners for form validation
  document.addEventListener("input", updateNextButton);
  document.addEventListener("change", updateNextButton);

  nextBtn?.addEventListener("click", () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
      updateNextButton();
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
      updateNextButton();
    }
  });

  submitBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      // Here you would normally submit the form
      const formData = new FormData();

      // Collect all form data
      const projectType = document.querySelector('input[name="project-type"]:checked')?.value;
      const description = document.querySelector("#description")?.value;
      const domain = document.querySelector('input[name="domain"]:checked')?.value;
      const content = document.querySelector('input[name="content"]:checked')?.value;
      const style = document.querySelector("#style")?.value;
      const budget = document.querySelector('input[name="budget"]:checked')?.value;
      const timeline = document.querySelector('input[name="timeline"]:checked')?.value;
      const name = document.querySelector("#name")?.value;
      const email = document.querySelector("#email")?.value;
      const phone = document.querySelector("#phone")?.value;
      const terms = document.querySelector('input[name="terms"]:checked')?.value;
      const expectations = document.querySelector("#expectations")?.value;
      const notes = document.querySelector("#notes")?.value;

      // Log form data (in a real application, you would send this to a server)
      console.log("Form submission:", {
        projectType,
        description,
        domain,
        content,
        style,
        budget,
        timeline,
        name,
        email,
        phone,
        terms,
        expectations,
        notes
      });

      // Show success message
      alert("Richiesta inviata con successo! Ti contatteremo presto.");
    }
  });

  // Initialize form
  showStep(currentStep);
  updateNextButton();
});
