// Multi-step form functionality
let currentStep = 1;
const totalSteps = 4;
let rulesAccepted = false;

// Rules modal functionality
const rulesModal = document.getElementById("rules-modal");
const openRulesBtn = document.getElementById("open-rules-btn");
const closeRulesBtns = document.querySelectorAll("#close-rules-btn, #close-rules-btn-2");
const rulesAgreement = document.getElementById("rules-agreement");
const acceptRulesBtn = document.getElementById("accept-rules-btn");
const rulesSection = document.getElementById("rules-section");
const contactForm = document.getElementById("contact-form");

// Open rules modal
openRulesBtn.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
  rulesModal.classList.add("flex");
  document.body.style.overflow = "hidden";
});

// Close rules modal
closeRulesBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rulesModal.classList.add("hidden");
    rulesModal.classList.remove("flex");
    document.body.style.overflow = "";
  });
});

// Enable accept button when checkbox is checked
rulesAgreement.addEventListener("change", () => {
  acceptRulesBtn.disabled = !rulesAgreement.checked;
});

// Accept rules and show form
acceptRulesBtn.addEventListener("click", () => {
  if (rulesAgreement.checked) {
    rulesAccepted = true;
    rulesSection.classList.add("hidden");
    contactForm.classList.remove("hidden");
    rulesModal.classList.add("hidden");
    rulesModal.classList.remove("flex");
    document.body.style.overflow = "";
  }
});

// Form navigation
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const submitBtn = document.getElementById("submit-btn");
const progressBar = document.getElementById("progress-bar");

nextBtn.addEventListener("click", () => {
  if (validateStep(currentStep)) {
    nextStep();
  }
});

prevBtn.addEventListener("click", () => {
  prevStep();
});

function validateStep(step) {
  const currentStepElement = document.getElementById(`step-${step}`);
  const requiredInputs = currentStepElement.querySelectorAll("[required]");

  for (let input of requiredInputs) {
    if (!input.value.trim()) {
      input.focus();
      return false;
    }
  }
  return true;
}

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.add("hidden");
    document.getElementById(`step-${currentStep}-label`).classList.remove("active");

    currentStep++;

    document.getElementById(`step-${currentStep}`).classList.remove("hidden");
    document.getElementById(`step-${currentStep}-label`).classList.add("active");

    updateProgress();
    updateNavigation();
  }
}

function prevStep() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.add("hidden");
    document.getElementById(`step-${currentStep}-label`).classList.remove("active");

    currentStep--;

    document.getElementById(`step-${currentStep}`).classList.remove("hidden");
    document.getElementById(`step-${currentStep}-label`).classList.add("active");

    updateProgress();
    updateNavigation();
  }
}

function updateProgress() {
  const progress = (currentStep / totalSteps) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateNavigation() {
  prevBtn.classList.toggle("hidden", currentStep === 1);
  nextBtn.classList.toggle("hidden", currentStep === totalSteps);
  submitBtn.classList.toggle("hidden", currentStep !== totalSteps);
}

// Form submission
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  if (validateStep(currentStep)) {
    // Simulate form submission
    contactForm.classList.add("hidden");
    document.getElementById("form-success").classList.remove("hidden");
  }
});

// Close modal when clicking outside
rulesModal.addEventListener("click", (e) => {
  if (e.target === rulesModal) {
    rulesModal.classList.add("hidden");
    rulesModal.classList.remove("flex");
    document.body.style.overflow = "";
  }
});
