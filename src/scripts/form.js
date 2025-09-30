import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const steps = document.querySelectorAll(".step-content");
  const stepDots = document.querySelectorAll(".step-dot");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  if (!form || !nextBtn || !prevBtn) return;

  let currentStep = 1;
  let maxStepReached = 1;
  const totalSteps = 4;
  const submitText = form.getAttribute("data-submit-text") || "Submit";
  const originalNextText = nextBtn.getAttribute("data-next-text") || nextBtn.textContent?.trim() || "Next";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function hideAllErrors() {
    document.querySelectorAll(".error-message").forEach((el) => el.classList.add("hidden"));
  }

  function hideError(fieldName) {
    const errorEl = document.querySelector(`[data-field="${fieldName}"]`);
    if (errorEl) errorEl.classList.add("hidden");
  }

  function fieldIsValid(input) {
    const value = input.value?.trim?.() || "";
    if (input.type === "checkbox") return input.checked; // required attribute implies must be checked
    if (input.type === "radio") {
      // At least one in group checked
      const container = input.closest(".step-content") || document;
      return !!container.querySelector(`input[name="${input.name}"]:checked`);
    }
    if (input.type === "email") {
      if (!value) return false;
      return EMAIL_REGEX.test(value);
    }
    return !!value;
  }

  function showError(fieldName, customMessage) {
    const errorEl = document.querySelector(`[data-field="${fieldName}"]`);
    const field = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);
    if (errorEl) {
      errorEl.classList.remove("hidden");
      if (customMessage) errorEl.textContent = customMessage;
    }
  }

  function updateStepDots() {
    stepDots.forEach((dot, idx) => {
      const active = idx + 1 <= currentStep;
      dot.className = `step-dot h-3 w-3 rounded-full ${active ? "bg-blue-500" : "bg-neutral-300 dark:bg-neutral-600"}`;
      dot.style.cursor = idx + 1 <= maxStepReached ? "pointer" : "not-allowed";
    });
  }

  function renderNextButton(isFinal) {
    if (!nextBtn) return;
    if (isFinal) {
      nextBtn.innerHTML = submitText;
      nextBtn.className = "cursor-pointer rounded-full bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-500 dark:bg-blue-500 dark:text-black dark:hover:bg-blue-600";
      nextBtn.type = "submit";
    } else {
      nextBtn.textContent = originalNextText;
      nextBtn.className = "cursor-pointer rounded-full bg-blue-600 px-6 py-3 font-semibold tracking-tight text-white hover:bg-blue-500 dark:bg-blue-500 dark:text-black dark:hover:bg-blue-600";
      nextBtn.type = "button";
    }
  }

  function showStep(step) {
    hideAllErrors();
    steps.forEach((el, idx) => el.classList.toggle("hidden", idx + 1 !== step));
    // Toggle previous button availability
    const isFirst = step === 1;
    prevBtn.disabled = isFirst;
    if (isFirst) {
      prevBtn.classList.add("invisible");
    } else {
      prevBtn.classList.remove("invisible");
    }
    renderNextButton(step === totalSteps);
    updateStepDots();
  }

  function validateStep(step) {
    const container = document.getElementById(`step-${step}`);
    if (!container) return false;
    let ok = true;
    hideAllErrors();
    const required = container.querySelectorAll("[required]");
    required.forEach((input) => {
      const value = input.value?.trim?.() || "";
      if (input.type === "checkbox" && !input.checked) {
        ok = false;
        showError(input.id || input.name);
        return;
      }
      if (input.type === "radio") {
        if (!container.querySelector(`input[name="${input.name}"]:checked`)) {
          ok = false;
          showError(input.name);
        }
        return;
      }
      if (input.type === "email" && value && !EMAIL_REGEX.test(value)) {
        ok = false;
        showError(input.name, document.querySelector('[data-field="email"]')?.textContent || "Please enter a valid email");
        return;
      }
      if (!value) {
        ok = false;
        showError(input.name);
      }
    });
    return ok;
  }

  function showSuccessMessage() {
    document.querySelectorAll(".step-content").forEach((el) => el.classList.add("hidden"));
    document.getElementById("form-navigation")?.classList.add("hidden");
    const success = document.getElementById("success-message");
    if (success) {
      success.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function showErrorMessage() {
    document.getElementById("error-message")?.classList.remove("hidden");
  }
  function hideErrorMessage() {
    document.getElementById("error-message")?.classList.add("hidden");
  }

  async function submitForm() {
    try {
      hideErrorMessage();
      nextBtn.disabled = true;
      nextBtn.innerHTML = "...";
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) });
      if (!res.ok) {
        console.error("Form submission failed:", res.status, await res.text());
        throw new Error("submit failed");
      }
      await res.json();
      showSuccessMessage();
    } catch (err) {
      console.error("Error submitting form:", err);
      nextBtn.disabled = false;
      nextBtn.innerHTML = submitText;
      showErrorMessage();
    }
  }

  function initRadioStyles() {
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        const group = document.querySelectorAll(`input[name="${this.name}"]`);
        group.forEach((r) => {
          const label = r.closest("label");
          if (label) {
            label.classList.remove("border-blue-500");
            label.classList.add("border-neutral-200", "dark:border-neutral-800");
          }
        });
        const selected = this.closest("label");
        if (selected && this.checked) {
          selected.classList.remove("border-neutral-200", "dark:border-neutral-800");
          selected.classList.add("border-blue-500");
        }
        // Real-time hide error for radio groups
        if (fieldIsValid(this)) hideError(this.name);
      });
    });
  }

  function attachRealtimeValidation() {
    const allRequired = form.querySelectorAll("[required]");
    allRequired.forEach((input) => {
      const evt = input.type === "checkbox" || input.type === "radio" ? "change" : "input";
      input.addEventListener(evt, () => {
        if (fieldIsValid(input)) {
          hideError(input.name || input.id);
        }
      });
      // Additional blur validation for showing error early (optional)
      input.addEventListener("blur", () => {
        if (!fieldIsValid(input)) {
          // mimic validateStep single-field behavior
          if (input.type === "email" && input.value) {
            if (!EMAIL_REGEX.test(input.value)) {
              showError(input.name, document.querySelector('[data-field="email"]')?.textContent || "Please enter a valid email");
              return;
            }
          }
          if (input.type === "radio") {
            if (!fieldIsValid(input)) showError(input.name);
            return;
          }
          if (input.type === "checkbox") {
            if (!input.checked) showError(input.id || input.name);
            return;
          }
          if (!input.value.trim()) showError(input.name);
        }
      });
    });
  }

  nextBtn.addEventListener("click", (e) => {
    triggerHaptic();
    e.preventDefault();
    if (currentStep < totalSteps) {
      if (validateStep(currentStep)) {
        currentStep++;
        if (currentStep > maxStepReached) maxStepReached = currentStep;
        showStep(currentStep);
      }
    } else if (validateStep(currentStep)) {
      submitForm();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep === 1) return;
    triggerHaptic();
    currentStep--;
    showStep(currentStep);
  });

  // Allow Enter key to advance/submit (except inside textarea to allow new lines)
  form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const target = e.target;
      if (target && target.tagName === "TEXTAREA") return; // allow newline in textarea
      e.preventDefault();
      if (currentStep < totalSteps) {
        if (validateStep(currentStep)) {
          currentStep++;
          if (currentStep > maxStepReached) maxStepReached = currentStep;
          showStep(currentStep);
        }
      } else if (validateStep(currentStep)) {
        submitForm();
      }
    }
  });

  // Clickable step dots (cannot jump ahead of maxStepReached)
  stepDots.forEach((dot, idx) => {
    const stepIndex = idx + 1;
    dot.addEventListener("click", () => {
      if (stepIndex <= maxStepReached) {
        currentStep = stepIndex;
        showStep(currentStep);
      } else {
        triggerHaptic();
      }
    });
  });

  document.getElementById("name")?.focus();
  initRadioStyles();
  attachRealtimeValidation();
  showStep(currentStep);
});
