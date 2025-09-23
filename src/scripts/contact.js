import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const steps = document.querySelectorAll(".step-content");
  const stepDots = document.querySelectorAll(".step-dot");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");

  if (!form || !nextBtn || !prevBtn) return;

  let currentStep = 1;
  const totalSteps = 4;

  // Get translations from form data attributes
  const submitText = form.getAttribute("data-submit-text") || "Submit";

  function hideAllErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach((error) => {
      error.classList.add("hidden");
    });

    // Reset field border colors
    const fields = document.querySelectorAll("input, textarea");
    fields.forEach((field) => {
      field.classList.remove("border-red-600", "dark:border-red-400");
      field.classList.add("border-neutral-200", "dark:dark:border-neutral-800");
    });
  }

  function showError(fieldName, message = "") {
    const errorElement = document.querySelector(`[data-field="${fieldName}"]`);
    const field = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);

    if (errorElement) {
      errorElement.classList.remove("hidden");
      if (message) errorElement.textContent = message;
    }

    if (field) {
      field.classList.remove("border-neutral-200", "dark:dark:border-neutral-800");
      field.classList.add("border-red-600", "dark:border-red-400");
    }
  }

  function updateStepDots() {
    stepDots.forEach((dot, index) => {
      const stepNumber = index + 1;

      if (stepNumber <= currentStep) {
        // Active or completed step
        dot.className = "step-dot h-3 w-3 rounded-full bg-blue-500 ";
      } else {
        // Inactive step
        dot.className = "step-dot h-3 w-3 rounded-full bg-neutral-300 dark:bg-neutral-600 ";
      }
    });
  }

  function showStep(step) {
    hideAllErrors();

    steps.forEach((stepEl, index) => {
      if (index + 1 === step) {
        stepEl.classList.remove("hidden");
      } else {
        stepEl.classList.add("hidden");
      }
    });

    // Update navigation buttons
    if (step === 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    if (step === totalSteps) {
      if (nextBtn) {
        // Transform to submit button with text
        nextBtn.innerHTML = submitText;
        nextBtn.className = "cursor-pointer rounded-full bg-blue-500 px-6 py-3 font-medium tracking-tight text-white hover:bg-blue-600 dark:text-black";
        nextBtn.type = "submit";
      }
    } else {
      if (nextBtn) {
        // Keep as arrow button
        nextBtn.innerHTML = '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
        nextBtn.className = "cursor-pointer rounded-full bg-blue-500 p-3 text-white hover:bg-blue-600 dark:text-black";
        nextBtn.type = "button";
      }
    }

    updateStepDots();
  }

  function validateStep(step) {
    const currentStepEl = document.getElementById(`step-${step}`);
    if (!currentStepEl) return false;

    let isValid = true;
    hideAllErrors();

    const requiredFields = currentStepEl.querySelectorAll("[required]");

    for (let field of requiredFields) {
      const input = field;

      if (input.type === "checkbox" && !input.checked) {
        showError(input.id || input.name);
        isValid = false;
      } else if (input.type === "radio") {
        const radioGroup = currentStepEl.querySelectorAll(`[name="${input.name}"]`);
        let isChecked = false;
        for (let radio of radioGroup) {
          if (radio.checked) {
            isChecked = true;
            break;
          }
        }
        if (!isChecked) {
          showError(input.name);
          isValid = false;
        }
      } else if (input.type === "email" && input.value.trim() !== "") {
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
          const emailErrorMsg = document.querySelector('[data-field="email"]')?.textContent || "Please enter a valid email";
          showError(input.name, emailErrorMsg);
          isValid = false;
        }
      } else if (input.value.trim() === "") {
        showError(input.name);
        isValid = false;
      }
    }

    return isValid;
  }

  // Next button click handler
  nextBtn.addEventListener("click", function (e) {
    triggerHaptic();
    if (currentStep < totalSteps) {
      e.preventDefault();
      if (validateStep(currentStep)) {
        currentStep++;
        showStep(currentStep);
      }
    } else {
      // Handle form submission
      e.preventDefault();
      if (validateStep(currentStep)) {
        submitForm();
      }
    }
  });

  // Previous button click handler
  prevBtn.addEventListener("click", function () {
    if (currentStep > 1) {
      triggerHaptic();
      currentStep--;
      showStep(currentStep);
    }
  });

  function showSuccessMessage() {
    // Hide all form steps (not the success message)
    const formSteps = document.querySelectorAll(".step-content");
    formSteps.forEach((step) => step.classList.add("hidden"));

    const formNavigation = document.getElementById("form-navigation");
    const successMessage = document.getElementById("success-message");

    if (formNavigation) formNavigation.classList.add("hidden");
    if (successMessage) {
      successMessage.classList.remove("hidden");
      // Scroll to top to ensure the success message is visible
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function showErrorMessage() {
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.classList.remove("hidden");
      // Scroll to show the error message
      errorMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function hideErrorMessage() {
    const errorMessage = document.getElementById("error-message");
    if (errorMessage) {
      errorMessage.classList.add("hidden");
    }
  }

  async function submitForm() {
    try {
      // Hide any previous error messages
      hideErrorMessage();

      // Disable the submit button to prevent multiple submissions
      nextBtn.disabled = true;
      nextBtn.innerHTML = "...";

      // Create FormData object from the form
      const formData = new FormData(form);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const result = await response.json();
        // Success - show the success message
        showSuccessMessage();
      } else {
        const errorText = await response.text();
        console.error("Form submission failed:", response.status, errorText);
        throw new Error(`Form submission failed: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Re-enable the submit button
      nextBtn.disabled = false;
      nextBtn.innerHTML = submitText;

      // Show the error message box
      showErrorMessage();
    }
  }

  // Handle radio button selection styling
  function updateRadioStyles() {
    const radioInputs = document.querySelectorAll('input[type="radio"]');

    radioInputs.forEach((radio) => {
      radio.addEventListener("change", function () {
        // Remove blue-500 border from all radio labels in the same group
        const groupName = this.name;
        const groupRadios = document.querySelectorAll(`input[name="${groupName}"]`);

        groupRadios.forEach((groupRadio) => {
          const label = groupRadio.closest("label");
          if (label) {
            // Reset to default border
            label.classList.remove("border-blue-500");
            label.classList.add("border-neutral-200", "dark:dark:border-neutral-800");
          }
        });

        // Add blue-500 border to the selected radio's label
        const selectedLabel = this.closest("label");
        if (selectedLabel && this.checked) {
          selectedLabel.classList.remove("border-neutral-200", "dark:dark:border-neutral-800");
          selectedLabel.classList.add("border-blue-500");
        }
      });
    });
  }

  // Focus on the first input (name field) when the page loads
  function focusFirstInput() {
    const nameInput = document.getElementById("name");
    if (nameInput) {
      nameInput.focus();
    }
  }

  // Initialize the form
  showStep(currentStep);
  updateRadioStyles();
  focusFirstInput();
});
