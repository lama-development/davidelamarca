// Contact form functionality
document.addEventListener("DOMContentLoaded", function () {
  let currentStep = 1;
  const totalSteps = 4;
  let hasAttemptedNext = false;

  // Modal elements
  const rulesModalTrigger = document.getElementById("rules-modal-trigger");
  const rulesModal = document.getElementById("rules-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCancel = document.getElementById("modal-cancel");
  const modalContinue = document.getElementById("modal-continue");
  const rulesCheckbox = document.getElementById("rules-checkbox");

  // Confirmation modal elements
  const confirmationModal = document.getElementById("confirmation-modal");
  const confirmationCancel = document.getElementById("confirmation-cancel");
  const confirmationConfirm = document.getElementById("confirmation-confirm");

  // Success message element
  const successMessage = document.getElementById("success-message");

  // Form elements
  const contactForm = document.getElementById("contact-form");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const submitBtn = document.getElementById("submit-btn");

  // Modal functionality
  rulesModalTrigger?.addEventListener("click", () => {
    rulesModal?.classList.remove("hidden");
    rulesModal?.classList.add("flex");
    // Prevent background scrolling
    document.body.classList.add("overflow-hidden");
  });

  [modalClose, modalCancel].forEach((btn) => {
    btn?.addEventListener("click", () => {
      rulesModal?.classList.add("hidden");
      rulesModal?.classList.remove("flex");
      // Allow background scrolling
      document.body.classList.remove("overflow-hidden");
    });
  });

  rulesModal?.addEventListener("click", (e) => {
    if (e.target === rulesModal) {
      rulesModal.classList.add("hidden");
      rulesModal.classList.remove("flex");
      // Allow background scrolling
      document.body.classList.remove("overflow-hidden");
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
    // Allow background scrolling
    document.body.classList.remove("overflow-hidden");
    contactForm?.classList.remove("hidden");

    // Hide the entire introduction box
    const formIntro = document.getElementById("form-intro");
    formIntro?.classList.add("hidden");

    // Show form navigation
    const formNavigation = document.getElementById("form-navigation");
    formNavigation?.classList.remove("hidden");
    formNavigation?.classList.add("flex");

    // Show form steps and navigation
    showStep(1);
  });

  // Form step navigation
  function showStep(step) {
    // Reset the attempt flag when showing a new step
    hasAttemptedNext = false;

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

    // Update navigation layout based on visible buttons
    const formNavigation = document.getElementById("form-navigation");
    if (formNavigation) {
      // Check if only one button is visible (first step - only next button, or last step - only submit button)
      const isOnlyOneButtonVisible = step === 1 || step === totalSteps;

      if (isOnlyOneButtonVisible) {
        // Single button: align to right on desktop, full width on mobile
        formNavigation.classList.remove("sm:justify-between");
        formNavigation.classList.add("sm:justify-end");
      } else {
        // Two buttons: space between
        formNavigation.classList.remove("sm:justify-end");
        formNavigation.classList.add("sm:justify-between");
      }
    }

    // Update new horizontal progress bar
    updateProgressBar(step);

    // Initialize radio button visual states for the current step
    initializeRadioStates();

    function updateProgressBar(step) {
      // Update progress line width
      const progressLine = document.getElementById("progress-line");
      if (progressLine) {
        const progressPercentage = ((step - 1) / (totalSteps - 1)) * 100;
        progressLine.style.width = `${progressPercentage}%`;
      }

      // Update step indicators
      for (let i = 1; i <= totalSteps; i++) {
        const indicator = document.getElementById(`step-indicator-${i}`);
        if (indicator) {
          // Remove all state classes
          indicator.classList.remove("bg-sky-500", "bg-neutral-200", "bg-green-500", "text-white", "text-neutral-600", "dark:bg-neutral-700", "dark:text-neutral-400", "dark:text-black");
          if (i < step) {
            // Completed steps - blue with checkmark
            indicator.classList.add("bg-sky-500", "text-white", "dark:text-black");
            indicator.innerHTML = "✓";
          } else if (i === step) {
            // Current step - blue with number
            indicator.classList.add("bg-sky-500", "text-white", "dark:text-black");
            indicator.innerHTML = i.toString();
          } else {
            // Future steps - gray with number
            indicator.classList.add("bg-neutral-200", "text-neutral-600", "dark:bg-neutral-700", "dark:text-neutral-400");
            indicator.innerHTML = i.toString();
          }
        }
      }
    }
  }

  function updateProgressBarOnSubmit() {
    // Update progress line to 100%
    const progressLine = document.getElementById("progress-line");
    if (progressLine) {
      progressLine.style.width = "100%";
      progressLine.classList.remove("bg-sky-500");
      progressLine.classList.add("bg-green-500");
    }

    // Update all step indicators to show as completed
    for (let i = 1; i <= totalSteps; i++) {
      const indicator = document.getElementById(`step-indicator-${i}`);
      if (indicator) {
        // Remove all state classes
        indicator.classList.remove("bg-sky-500", "bg-neutral-200", "bg-green-500", "text-white", "text-neutral-600", "dark:bg-neutral-700", "dark:text-neutral-400", "dark:text-black");
        // All steps completed - green with checkmark
        indicator.classList.add("bg-green-500", "text-white", "dark:text-black");
        indicator.innerHTML = "✓";
      }
    }
  }

  function validateStep(step, showVisualErrors = false) {
    const stepEl = document.getElementById(`step-${step}`);
    if (!stepEl) return { isValid: false, errors: [] };

    const errors = [];

    switch (step) {
      case 1:
        const projectType = stepEl.querySelector('input[name="project-type"]:checked');
        if (!projectType) {
          errors.push(getErrorMessage("step1"));
          if (showVisualErrors) addRadioGroupError("project-type");
        } else {
          if (showVisualErrors) clearRadioGroupError("project-type");
        }
        break;
      case 2:
        const description = stepEl.querySelector("#description");
        const domain = stepEl.querySelector('input[name="domain"]:checked');
        const content = stepEl.querySelector('input[name="content"]:checked');

        if (!description || description.value.trim() === "") {
          errors.push(getErrorMessage("step2.description"));
          if (showVisualErrors && description) addFieldError(description);
        } else {
          if (showVisualErrors && description) removeFieldError(description);
        }

        if (!domain) {
          errors.push(getErrorMessage("step2.domain"));
          if (showVisualErrors) addRadioGroupError("domain");
        } else {
          if (showVisualErrors) clearRadioGroupError("domain");
        }

        if (!content) {
          errors.push(getErrorMessage("step2.content"));
          if (showVisualErrors) addRadioGroupError("content");
        } else {
          if (showVisualErrors) clearRadioGroupError("content");
        }
        break;
      case 3:
        const budget = stepEl.querySelector('input[name="budget"]:checked');
        const timeline = stepEl.querySelector('input[name="timeline"]:checked');

        if (!budget) {
          errors.push(getErrorMessage("step3.budget"));
          if (showVisualErrors) addRadioGroupError("budget");
        } else {
          if (showVisualErrors) clearRadioGroupError("budget");
        }

        if (!timeline) {
          errors.push(getErrorMessage("step3.timeline"));
          if (showVisualErrors) addRadioGroupError("timeline");
        } else {
          if (showVisualErrors) clearRadioGroupError("timeline");
        }
        break;
      case 4:
        const name = stepEl.querySelector("#name");
        const email = stepEl.querySelector("#email");
        const phone = stepEl.querySelector("#phone");
        const notes = stepEl.querySelector("#notes");

        if (!name || name.value.trim() === "") {
          errors.push(getErrorMessage("step4.name"));
          if (showVisualErrors && name) addFieldError(name);
        } else {
          if (showVisualErrors && name) removeFieldError(name);
        }

        if (!email || email.value.trim() === "") {
          errors.push(getErrorMessage("step4.email"));
          if (showVisualErrors && email) addFieldError(email);
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email.value.trim())) {
            errors.push(getErrorMessage("step4.email"));
            if (showVisualErrors && email) addFieldError(email);
          } else {
            if (showVisualErrors && email) removeFieldError(email);
          }
        }

        // Phone is optional, but if provided should be valid
        if (phone && phone.value.trim() !== "") {
          const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
          if (!phoneRegex.test(phone.value.replace(/\s/g, ""))) {
            errors.push(getErrorMessage("step4.phone"));
            if (showVisualErrors) addFieldError(phone);
          } else {
            if (showVisualErrors) removeFieldError(phone);
          }
        } else if (phone && showVisualErrors) {
          removeFieldError(phone);
        }

        // Notes are optional based on the form structure
        break;
      default:
        return { isValid: false, errors: [] };
    }

    return { isValid: errors.length === 0, errors };
  }

  // Helper function to get error messages from the internationalized data
  function getErrorMessage(key) {
    if (!window.formErrorMessages) {
      return "Errore di validazione";
    }

    const keys = key.split(".");
    let message = window.formErrorMessages;

    for (const k of keys) {
      if (message && typeof message === "object" && k in message) {
        message = message[k];
      } else {
        return "Errore di validazione";
      }
    }

    return typeof message === "string" ? message : "Errore di validazione";
  }

  function showErrors(errors) {
    const errorDisplay = document.getElementById("error-display");
    const errorMessages = document.getElementById("error-messages");
    const errorTitle = document.getElementById("error-title");

    if (errors.length > 0) {
      // Update the error title with the internationalized message
      if (errorTitle && window.formErrorMessages && window.formErrorMessages.title) {
        errorTitle.textContent = window.formErrorMessages.title;
      }

      errorMessages.innerHTML = '<ul class="list-disc list-inside space-y-1">' + errors.map((error) => `<li>${error}</li>`).join("") + "</ul>";
      errorDisplay.classList.remove("hidden");
      // Scroll to error display
      errorDisplay.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      errorDisplay.classList.add("hidden");
    }
  }

  function hideErrors() {
    const errorDisplay = document.getElementById("error-display");
    errorDisplay.classList.add("hidden");
  }

  function updateNextButton() {
    if (nextBtn instanceof HTMLButtonElement) {
      const validation = validateStep(currentStep, hasAttemptedNext);
      nextBtn.disabled = !validation.isValid;

      // Hide errors when step becomes valid
      if (validation.isValid) {
        hideErrors();
      }
    }
  }

  // Add event listeners for form validation
  document.addEventListener("input", function (e) {
    // Clear individual field errors on input only if user has attempted to proceed
    if (e.target.matches("#description, #name, #email, #phone, #notes")) {
      // Always remove error styling when user starts typing
      removeFieldError(e.target);
    }
    updateNextButton();
  });

  document.addEventListener("change", function (e) {
    updateNextButton();
    // Update radio button visual state when changed
    if (e.target.type === "radio") {
      updateRadioVisualState(e.target);
      // Always clear radio group errors when user makes a selection
      if (e.target.matches('input[name="project-type"], input[name="domain"], input[name="content"], input[name="budget"], input[name="timeline"]')) {
        clearRadioGroupError(e.target.name);
      }
    }
  });

  // Function to remove error styling from a specific field
  function removeFieldError(field) {
    field.classList.remove("border-red-300", "dark:border-red-600");
    field.classList.add("border-neutral-200", "dark:border-neutral-700");
  }

  // Function to add error styling to a specific field
  function addFieldError(field) {
    field.classList.remove("border-neutral-200", "dark:border-neutral-700", "border-sky-500", "dark:border-sky-400");
    field.classList.add("border-red-300", "dark:border-red-600");
  }

  // Function to clear radio group error styling
  function clearRadioGroupError(groupName) {
    const radioInputs = document.querySelectorAll(`input[name="${groupName}"]`);
    radioInputs.forEach((radio) => {
      const container = radio.nextElementSibling;
      if (container) {
        container.classList.remove("border-red-300", "dark:border-red-600");
        if (!radio.checked) {
          container.classList.add("border-neutral-200", "dark:border-neutral-700");
        }
      }
    });
  }

  // Function to add radio group error styling
  function addRadioGroupError(groupName) {
    const radioInputs = document.querySelectorAll(`input[name="${groupName}"]`);
    radioInputs.forEach((radio) => {
      const container = radio.nextElementSibling;
      if (container && !radio.checked) {
        container.classList.remove("border-neutral-200", "dark:border-neutral-700");
        container.classList.add("border-red-300", "dark:border-red-600");
      }
    });
  }

  // Function to initialize radio button visual states
  function initializeRadioStates() {
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach((radio) => {
      const container = radio.nextElementSibling;
      const indicator = container?.querySelector(".radio-indicator");
      const dot = container?.querySelector(".radio-dot");

      if (radio.checked) {
        // Selected state
        indicator?.classList.remove("border-neutral-300", "dark:border-neutral-600");
        indicator?.classList.add("border-sky-500", "bg-sky-500", "dark:border-sky-400", "dark:bg-sky-400");
        dot?.classList.remove("opacity-0");
        dot?.classList.add("opacity-100");

        // Update container border and background
        container?.classList.remove("border-neutral-200", "dark:border-neutral-700");
        container?.classList.add("border-sky-500", "bg-sky-50", "dark:border-sky-400", "dark:bg-sky-950");
      } else {
        // Unselected state
        indicator?.classList.remove("border-sky-500", "bg-sky-500", "dark:border-sky-400", "dark:bg-sky-400");
        indicator?.classList.add("border-neutral-300", "dark:border-neutral-600");
        dot?.classList.remove("opacity-100");
        dot?.classList.add("opacity-0");

        // Reset container border and background
        container?.classList.remove("border-sky-500", "bg-sky-50", "dark:border-sky-400", "dark:bg-sky-950");
        container?.classList.add("border-neutral-200", "dark:border-neutral-700");
      }
    });
  }

  // Function to update radio button visual state
  function updateRadioVisualState(changedRadio) {
    // Get all radio buttons with the same name
    const radioGroup = document.querySelectorAll(`input[name="${changedRadio.name}"]`);

    radioGroup.forEach((radio) => {
      const container = radio.nextElementSibling;
      const indicator = container?.querySelector(".radio-indicator");
      const dot = container?.querySelector(".radio-dot");

      if (radio.checked) {
        // Selected state
        indicator?.classList.remove("border-neutral-300", "dark:border-neutral-600");
        indicator?.classList.add("border-sky-500", "bg-sky-500", "dark:border-sky-400", "dark:bg-sky-400");
        dot?.classList.remove("opacity-0", "bg-white", "dark:bg-black");
        dot?.classList.add("opacity-100", "bg-white", "dark:bg-black");

        // Update container border and background
        container?.classList.remove("border-neutral-200", "dark:border-neutral-700");
        container?.classList.add("border-sky-500", "bg-sky-50", "dark:border-sky-400", "dark:bg-sky-950");
      } else {
        // Unselected state
        indicator?.classList.remove("border-sky-500", "bg-sky-500", "dark:border-sky-400", "dark:bg-sky-400");
        indicator?.classList.add("border-neutral-300", "dark:border-neutral-600");
        dot?.classList.remove("opacity-100");
        dot?.classList.add("opacity-0");

        // Reset container border and background
        container?.classList.remove("border-sky-500", "bg-sky-50", "dark:border-sky-400", "dark:bg-sky-950");
        container?.classList.add("border-neutral-200", "dark:border-neutral-700");
      }
    });
  }

  nextBtn?.addEventListener("click", () => {
    // Mark that user has attempted to proceed
    hasAttemptedNext = true;

    const validation = validateStep(currentStep, true); // Show visual errors

    if (validation.isValid && currentStep < totalSteps) {
      hideErrors();
      currentStep++;
      showStep(currentStep);
      updateNextButton();
    } else if (!validation.isValid) {
      showErrors(validation.errors);
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
    hasAttemptedNext = true;

    const validation = validateStep(currentStep, true); // Show visual errors

    if (validation.isValid) {
      hideErrors();
      // Show confirmation modal instead of submitting directly
      confirmationModal?.classList.remove("hidden");
      confirmationModal?.classList.add("flex");
      // Prevent background scrolling
      document.body.classList.add("overflow-hidden");
    } else {
      showErrors(validation.errors);
    }
  });

  // Confirmation modal functionality
  confirmationCancel?.addEventListener("click", () => {
    confirmationModal?.classList.add("hidden");
    confirmationModal?.classList.remove("flex");
    // Allow background scrolling
    document.body.classList.remove("overflow-hidden");
  });

  confirmationModal?.addEventListener("click", (e) => {
    if (e.target === confirmationModal) {
      confirmationModal?.classList.add("hidden");
      confirmationModal?.classList.remove("flex");
      // Allow background scrolling
      document.body.classList.remove("overflow-hidden");
    }
  });

  confirmationConfirm?.addEventListener("click", () => {
    // Hide confirmation modal
    confirmationModal?.classList.add("hidden");
    confirmationModal?.classList.remove("flex");
    // Allow background scrolling
    document.body.classList.remove("overflow-hidden");

    // Update progress to show all steps completed including the last one
    updateProgressBarOnSubmit();

    // Collect all form data
    const formData = {
      projectType: document.querySelector('input[name="project-type"]:checked')?.value,
      description: document.querySelector("#description")?.value,
      domain: document.querySelector('input[name="domain"]:checked')?.value,
      content: document.querySelector('input[name="content"]:checked')?.value,
      budget: document.querySelector('input[name="budget"]:checked')?.value,
      timeline: document.querySelector('input[name="timeline"]:checked')?.value,
      name: document.querySelector("#name")?.value,
      email: document.querySelector("#email")?.value,
      phone: document.querySelector("#phone")?.value,
      notes: document.querySelector("#notes")?.value
    };

    console.log("Submitting form with data:", formData);

    // Hide the entire contact form container
    const contactFormContainer = document.querySelector(".contact-form-container");
    contactFormContainer?.classList.add("hidden");

    // Disable progress indicators
    disableProgressIndicators();

    // Show success message
    successMessage?.classList.remove("hidden");
  });

  // Add click event listeners to progress indicators
  function initializeProgressIndicators() {
    for (let i = 1; i <= totalSteps; i++) {
      const indicator = document.getElementById(`step-indicator-${i}`);
      if (indicator) {
        // Add cursor pointer styling
        indicator.style.cursor = "pointer";
        // Add click event listener
        indicator.addEventListener("click", () => {
          jumpToStep(i);
        });
      }
    }
  }

  // Function to disable progress indicators
  function disableProgressIndicators() {
    for (let i = 1; i <= totalSteps; i++) {
      const indicator = document.getElementById(`step-indicator-${i}`);
      if (indicator) {
        // Remove cursor pointer styling
        indicator.style.cursor = "not-allowed";
        // Add disabled class for styling
        indicator.classList.add("disabled");
        // Remove pointer events to prevent clicking
        indicator.style.pointerEvents = "none";
      }
    }
  }

  // Function to jump to a specific step
  function jumpToStep(targetStep) {
    // Always allow jumping to step 1
    if (targetStep === 1) {
      currentStep = targetStep;
      showStep(currentStep);
      updateNextButton();
      return;
    }

    // For other steps, check if all previous steps are valid (without visual errors)
    let canJump = true;
    for (let i = 1; i < targetStep; i++) {
      const validation = validateStep(i, false); // Don't show visual errors during navigation
      if (!validation.isValid) {
        canJump = false;
        break;
      }
    }

    if (canJump) {
      hideErrors();
      currentStep = targetStep;
      showStep(currentStep);
      updateNextButton();
    }
  }

  // Initialize form
  showStep(currentStep);
  updateNextButton();
  initializeRadioStates();
  initializeProgressIndicators();
});
