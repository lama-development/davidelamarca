import { triggerHaptic } from "tactus";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const steps = document.querySelectorAll(".step-content");
  const stepDots = document.querySelectorAll(".step-dot");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  if (!form || !nextBtn || !prevBtn) return;

  let currentStep = 1;
  const totalSteps = 4;
  const submitText = form.getAttribute("data-submit-text") || "Submit";

  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const BORDER_DEFAULT_REMOVALS = ["border-red-600", "dark:border-red-400"]; // remove these when clearing
  const BORDER_DEFAULT_ADDS = ["border-neutral-200", "dark:border-neutral-800"]; // add these when clearing

  function hideAllErrors() {
    document.querySelectorAll(".error-message").forEach((el) => el.classList.add("hidden"));
    document.querySelectorAll("input, textarea").forEach((field) => {
      field.classList.remove(...BORDER_DEFAULT_REMOVALS);
      field.classList.add(...BORDER_DEFAULT_ADDS);
    });
  }

  function showError(fieldName, customMessage) {
    const errorEl = document.querySelector(`[data-field="${fieldName}"]`);
    const field = document.getElementById(fieldName) || document.querySelector(`[name="${fieldName}"]`);
    if (errorEl) {
      errorEl.classList.remove("hidden");
      if (customMessage) errorEl.textContent = customMessage;
    }
    if (field) {
      field.classList.remove(...BORDER_DEFAULT_ADDS);
      field.classList.add(...BORDER_DEFAULT_REMOVALS);
    }
  }

  function updateStepDots() {
    stepDots.forEach((dot, idx) => {
      const active = idx + 1 <= currentStep;
      dot.className = `step-dot h-3 w-3 rounded-full ${active ? "bg-blue-500" : "bg-neutral-300 dark:bg-neutral-600"}`;
    });
  }

  function renderNextButton(isFinal) {
    if (!nextBtn) return;
    if (isFinal) {
      nextBtn.innerHTML = submitText;
      nextBtn.className = "cursor-pointer rounded-full bg-blue-500 px-6 py-3 font-medium tracking-tight text-white hover:bg-blue-600 dark:text-black";
      nextBtn.type = "submit";
    } else {
      nextBtn.innerHTML = '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';
      nextBtn.className = "cursor-pointer rounded-full bg-blue-500 p-3 text-white hover:bg-blue-600 dark:text-black";
      nextBtn.type = "button";
    }
  }

  function showStep(step) {
    hideAllErrors();
    steps.forEach((el, idx) => el.classList.toggle("hidden", idx + 1 !== step));
    prevBtn.disabled = step === 1;
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
      });
    });
  }

  nextBtn.addEventListener("click", (e) => {
    triggerHaptic();
    e.preventDefault();
    if (currentStep < totalSteps) {
      if (validateStep(currentStep)) {
        currentStep++;
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

  document.getElementById("name")?.focus();
  initRadioStyles();
  showStep(currentStep);
});
