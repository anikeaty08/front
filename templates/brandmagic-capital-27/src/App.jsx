import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Override conditional fields logic for Step 1 ordering & behavior
document.addEventListener('DOMContentLoaded', function () {
const brandOwnerTypeSelect = document.getElementById('brandOwnerType');
const ownerNameGroup = document.getElementById('ownerNameGroup');
const entityNameGroup = document.getElementById('entityNameGroup');
const entityTypeGroup = document.getElementById('entityTypeGroup');
const ownerNameInput = document.getElementById('ownerNameInput');
const entityNameInput = document.getElementById('entityNameInput');
const entityTypeSelect = document.getElementById('entityTypeSelect');
if (!brandOwnerTypeSelect) return;
window.updateOwnerConditionalFields = function () {
const value = brandOwnerTypeSelect.value;
if (value === 'individual') {
// Individual flow: Entity Type fixed to "Individual" and read-only,
// show Entity Type & Owner Name, hide Entity Name
entityTypeGroup.classList.remove('hidden');
ownerNameGroup.classList.remove('hidden');
entityNameGroup.classList.add('hidden');
ownerNameInput.required = true;
entityNameInput.required = false;
entityTypeSelect.required = false;
entityTypeSelect.innerHTML = '<option class="bg-slate-900">Individual</option>';
entityTypeSelect.disabled = true;
} else {
// Company flow: normal entity type options, hide Owner Name, show Entity Name
ownerNameGroup.classList.add('hidden');
entityNameGroup.classList.remove('hidden');
entityTypeGroup.classList.remove('hidden');
ownerNameInput.required = false;
entityNameInput.required = true;
entityTypeSelect.required = true;
entityTypeSelect.disabled = false;
if (entityTypeSelect.options.length === 1 && entityTypeSelect.options[0].text === 'Individual') {
entityTypeSelect.innerHTML = '<option class="bg-slate-900">Private Limited<\/option><option class="bg-slate-900">LLP<\/option><option class="bg-slate-900">Partnership<\/option><option class="bg-slate-900">Sole Proprietorship<\/option><option class="bg-slate-900">Public Limited<\/option><option class="bg-slate-900">Other<\/option>';
}
}
};
brandOwnerTypeSelect.addEventListener('change', window.updateOwnerConditionalFields);
window.updateOwnerConditionalFields();
});



// Override conditional fields logic for Step 1 ordering & behavior
document.addEventListener('DOMContentLoaded', function () {
const brandOwnerTypeSelect = document.getElementById('brandOwnerType');
const ownerNameGroup = document.getElementById('ownerNameGroup');
const entityNameGroup = document.getElementById('entityNameGroup');
const entityTypeGroup = document.getElementById('entityTypeGroup');
const ownerNameInput = document.getElementById('ownerNameInput');
const entityNameInput = document.getElementById('entityNameInput');
const entityTypeSelect = document.getElementById('entityTypeSelect');
if (!brandOwnerTypeSelect) return;
window.updateOwnerConditionalFields = function () {
const value = brandOwnerTypeSelect.value;
if (value === 'individual') {
// Individual flow: Entity Type fixed to "Individual" and read-only,
// show Owner Name, hide Entity Name
ownerNameGroup.classList.remove('hidden');
entityNameGroup.classList.add('hidden');
ownerNameInput.required = true;
entityNameInput.required = false;
entityTypeSelect.innerHTML = '<option class="bg-slate-900">Individual</option>';
entityTypeSelect.disabled = true;
} else {
// Company flow: normal entity type options, hide Owner Name, show Entity Name
ownerNameGroup.classList.add('hidden');
entityNameGroup.classList.remove('hidden');
ownerNameInput.required = false;
entityNameInput.required = true;
entityTypeSelect.disabled = false;
if (entityTypeSelect.options.length === 1 && entityTypeSelect.options[0].text === 'Individual') {
entityTypeSelect.innerHTML = '
<option class="bg-slate-900">Private Limited</option>
<option class="bg-slate-900">LLP</option>
<option class="bg-slate-900">Partnership</option>
<option class="bg-slate-900">Sole Proprietorship</option>
<option class="bg-slate-900">Public Limited</option>
<option class="bg-slate-900">Other</option>
';
}
}
};
brandOwnerTypeSelect.addEventListener('change', window.updateOwnerConditionalFields);
window.updateOwnerConditionalFields();
});



      let currentStep = 1;
      const totalSteps = 3;

      const overlay = document.getElementById('registerWizardOverlay');
      const stepForms = {
        1: document.getElementById('step1'),
        2: document.getElementById('step2'),
        3: document.getElementById('step3'),
      };
      const badges = {
        1: document.getElementById('stepBadge1'),
        2: document.getElementById('stepBadge2'),
        3: document.getElementById('stepBadge3'),
      };
      const progressBar = document.getElementById('progressBar');
      const progressLabel = document.getElementById('progressLabel');
      const progressPercent = document.getElementById('progressPercent');
      const wizardHint = document.getElementById('wizardHint');
      const backButton = document.getElementById('backButton');
      const secondaryBackButton = document.getElementById('secondaryBackButton');
      const nextButton = document.getElementById('nextButton');
      const nextButtonLabel = document.getElementById('nextButtonLabel');
      const nextArrowIcon = document.getElementById('nextArrowIcon');

      document
        .getElementById('openRegisterWizard')
        .addEventListener('click', () => {
          overlay.classList.remove('hidden');
          overlay.classList.add('flex');
          currentStep = 1;
          updateWizardUI();
        });

      function closeWizard() {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
      }

      function updateWizardUI() {
        Object.keys(stepForms).forEach((key) => {
          const stepNumber = Number(key);
          const form = stepForms[stepNumber];
          if (stepNumber === currentStep) {
            form.classList.remove('hidden');
            form.classList.add('animate-[slideIn_0.35s_ease-out]');
          } else {
            form.classList.add('hidden');
          }
        });

        Object.keys(badges).forEach((key) => {
          const stepNumber = Number(key);
          const badge = badges[stepNumber];
          if (stepNumber < currentStep) {
            badge.className =
              'flex h-6 w-6 items-center justify-center rounded-full border border-emerald-400 bg-emerald-500/20 text-[0.7rem] font-medium text-emerald-100';
            badge.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
          } else if (stepNumber === currentStep) {
            badge.className =
              'flex h-6 w-6 items-center justify-center rounded-full border border-[#405CFF] bg-[#405CFF]/20 text-[0.7rem] font-medium text-slate-50';
            badge.textContent = stepNumber;
          } else {
            badge.className =
              'flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-[0.7rem] font-medium text-slate-300';
            badge.textContent = stepNumber;
          }
        });

        const percent = currentStep === 1 ? 33 : currentStep === 2 ? 66 : 100;
        progressBar.style.width = percent + '%';
        progressLabel.textContent = `Step ${currentStep} of ${totalSteps}`;
        progressPercent.textContent = percent + '%';

        if (currentStep === 1) {
          wizardHint.textContent =
            'Step 1 of 3 — Complete company basics to unlock registration details.';
        } else if (currentStep === 2) {
          wizardHint.textContent =
            'Step 2 of 3 — Add legal registration details mapped to your entity.';
        } else {
          wizardHint.textContent =
            'Step 3 of 3 — Confirm the primary contact & upload your brand logo.';
        }

        if (currentStep === 1) {
          backButton.classList.add('hidden');
          secondaryBackButton.classList.add('hidden');
        } else {
          backButton.classList.remove('hidden');
          secondaryBackButton.classList.remove('hidden');
        }

        if (currentStep === totalSteps) {
          nextButtonLabel.textContent = 'Generate My BMeX ID';
          nextArrowIcon.style.transform = 'translateX(2px)';
        } else {
          nextButtonLabel.textContent = 'Next';
          nextArrowIcon.style.transform = 'translateX(0)';
        }
      }

      function nextStep() {
        if (currentStep < totalSteps) {
          currentStep += 1;
          updateWizardUI();
        } else {
          nextButtonLabel.textContent = 'Generating...';
          nextButton.disabled = true;
          nextButton.classList.add('opacity-80', 'cursor-wait');

          setTimeout(() => {
            closeWizard();
            nextButton.disabled = false;
            nextButton.classList.remove('opacity-80', 'cursor-wait');
            nextButtonLabel.textContent = 'Next';
          }, 1500);
        }
      }

      function prevStep() {
        if (currentStep > 1) {
          currentStep -= 1;
          updateWizardUI();
        }
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (!overlay.classList.contains('hidden')) {
            closeWizard();
          }
          if (!loginModalOverlay.classList.contains('hidden')) {
            closeLoginModal();
          }
        }
      });

      // Logo drag & drop
      const dropzone = document.getElementById('logoDropzone');
      const fileInput = document.getElementById('logoInput');
      const preview = document.getElementById('logoPreview');

      function handleFiles(files) {
        const file = files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
          preview.style.backgroundImage = `url(${e.target.result})`;
          preview.style.backgroundSize = 'cover';
          preview.style.backgroundPosition = 'center';
          preview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }

      if (dropzone) {
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.classList.add('border-[#405CFF]', 'bg-slate-900/80');
        });
        dropzone.addEventListener('dragleave', (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-[#405CFF]', 'bg-slate-900/80');
        });
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.classList.remove('border-[#405CFF]', 'bg-slate-900/80');
          if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            fileInput.files = e.dataTransfer.files;
            handleFiles(e.dataTransfer.files);
          }
        });
      }
      if (fileInput) {
        fileInput.addEventListener('change', (e) => handleFiles(e.target.files));
      }

      // Conditional fields logic for Step 1
      const brandOwnerTypeSelect = document.getElementById('brandOwnerType');
      const ownerNameGroup = document.getElementById('ownerNameGroup');
      const entityNameGroup = document.getElementById('entityNameGroup');
      const entityTypeGroup = document.getElementById('entityTypeGroup');
      const ownerNameInput = document.getElementById('ownerNameInput');
      const entityNameInput = document.getElementById('entityNameInput');
      const entityTypeSelect = document.getElementById('entityTypeSelect');

      function updateOwnerConditionalFields() {
        const value = brandOwnerTypeSelect.value;

        if (value === 'individual') {
          // Show owner name, hide entity fields
          ownerNameGroup.classList.remove('hidden');
          entityNameGroup.classList.add('hidden');
          entityTypeGroup.classList.add('hidden');

          ownerNameInput.required = true;
          entityNameInput.required = false;
          entityTypeSelect.required = false;
        } else {
          // Company
          ownerNameGroup.classList.add('hidden');
          entityNameGroup.classList.remove('hidden');
          entityTypeGroup.classList.remove('hidden');

          ownerNameInput.required = false;
          entityNameInput.required = true;
          entityTypeSelect.required = true;
        }
      }

      if (brandOwnerTypeSelect) {
        brandOwnerTypeSelect.addEventListener('change', updateOwnerConditionalFields);
        // Initialize on load
        updateOwnerConditionalFields();
      }

      // Animation keyframes
      const style = document.createElement('style');
      style.innerHTML = `
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `;
      document.head.appendChild(style);

      window.closeWizard = closeWizard;
      window.nextStep = nextStep;
      window.prevStep = prevStep;

      /* Login modal logic */
      const loginModalOverlay = document.getElementById('loginModalOverlay');
      const openLoginModalBtn = document.getElementById('openLoginModal');
      const loginSubmitButton = document.getElementById('loginSubmitButton');
      const loginSubmitLabel = document.getElementById('loginSubmitLabel');
      const loginArrowIcon = document.getElementById('loginArrowIcon');
      const loginHint = document.getElementById('loginHint');

      function openLoginModal() {
        loginModalOverlay.classList.remove('hidden');
        loginModalOverlay.classList.add('flex');
        const usernameInput = document.getElementById('loginUsername');
        if (usernameInput) {
          setTimeout(() => usernameInput.focus(), 50);
        }
      }

      function closeLoginModal() {
        loginModalOverlay.classList.add('hidden');
        loginModalOverlay.classList.remove('flex');
      }

      function simulateLogin() {
        loginSubmitLabel.textContent = 'Signing in...';
        loginSubmitButton.disabled = true;
        loginSubmitButton.classList.add('opacity-80', 'cursor-wait');
        loginArrowIcon.style.transform = 'translateX(2px)';
        loginHint.textContent = 'Verifying your credentials...';

        setTimeout(() => {
          loginSubmitButton.disabled = false;
          loginSubmitButton.classList.remove('opacity-80', 'cursor-wait');
          loginSubmitLabel.textContent = 'Login';
          loginArrowIcon.style.transform = 'translateX(0)';
          loginHint.textContent = 'Successfully authenticated. Redirecting...';
          setTimeout(() => {
            closeLoginModal();
            loginHint.textContent = 'Enter your credentials to continue.';
          }, 900);
        }, 1200);
      }

      function togglePassword() {
        const input = document.getElementById('loginPassword');
        const eyeIcon = document.getElementById('passwordEyeIcon');
        if (input.type === 'password') {
          input.type = 'text';
          eyeIcon.setAttribute('data-lucide', 'eye-off');
        } else {
          input.type = 'password';
          eyeIcon.setAttribute('data-lucide', 'eye');
        }
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      }

      if (openLoginModalBtn) {
        openLoginModalBtn.addEventListener('click', openLoginModal);
      }

      window.closeLoginModal = closeLoginModal;
      window.simulateLogin = simulateLogin;
      window.togglePassword = togglePassword;
    


      if (window.lucide) {
        window.lucide.createIcons({
          attrs: {
            'stroke-width': 1.5,
          },
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-[#050712] via-[#050712] to-[#050712] text-slate-100">

<header className="border-b border-slate-800/70 bg-[#050712]/80 backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-3 px-4 lg:px-0">

<div className="flex items-center gap-3">
<button className="h-8 w-8 rounded-full border border-slate-700/70 flex items-center justify-center bg-slate-900/70 hover:bg-slate-800/70 transition-colors">
<span className="sr-only">Open sidebar</span>
<svg className="h-3.5 w-3.5 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16"></path>
<path d="M4 12h16"></path>
<path d="M4 18h16"></path>
</svg>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-[#405CFF] flex items-center justify-center shadow-[0_0_24px_rgba(64,92,255,0.7)]">
<span className="text-xs font-semibold tracking-tight text-white">
                  BM
                </span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-50">
                BrandMagics
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-xs text-slate-300">
<button className="hover:text-slate-50 transition-colors">Home</button>
<button className="inline-flex items-center gap-1 hover:text-slate-50 transition-colors">
<span>Products</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<button className="hover:text-slate-50 transition-colors">
              Services
            </button>
<button className="hover:text-slate-50 transition-colors">
              About Us
            </button>
<button className="hover:text-slate-50 transition-colors">
              Support
            </button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-700/70 px-3.5 py-1.5 text-xs text-slate-200 bg-slate-900/70 hover:bg-slate-800/80 transition-colors">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h4a2 2 0 0 1 2 2v4"></path>
<path d="M10 14 21 3"></path>
<path d="M19 21h-4a2 2 0 0 1-2-2v-4"></path>
<path d="M14 14 3 21"></path>
</svg>
<span>EN</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 2424" xmlns="http://www3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>

<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 px-3.5 py-1.5 text-xs text-slate-100 bg-slate-900/70 hover:bg-slate-800/80 transition-colors" id="openLoginModal">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 3h4a2 2 0 0 1 2 2v4"></path>
<path d="M10 21H6a2 2 0 0 1-2-2v-4"></path>
<path d="M21 3 9 15"></path>
<path d="M3 9l6 6"></path>
</svg>
<span>Login</span>
</button>

<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#405CFF] via-[#7A80FF] to-[#405CFF] px-4 py-1.5 text-xs font-semibold tracking-tight text-white shadow-[0_0_24px_rgba(64,92,255,0.85)] hover:shadow-[0_0_36px_rgba(64,92,255,0.95)] transition-all duration-200 group" id="openRegisterWizard">
<span>Register Your Brand</span>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
<svg className="h-2.5 w-2.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</span>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden">
<div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -right-32 -top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,84,67,0.4),_transparent_60%)]"></div>
<div className="absolute -left-[10%] top-[40%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(64,92,255,0.55),_transparent_60%)]"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 lg:px-0 py-10 lg:py-14 grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-7">
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50 mb-4 lg:mb-5">
                Enabling Access To Capital &amp; Functional OS For Growth
              </h1>
<p className="text-base text-slate-300 max-w-xl mb-6">
                Transform your company into a capital-ready brand. List, raise,
                and manage your brand’s growth using a unified BMeX ID powered
                operating stack.
              </p>

<div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 rounded-2xl border border-slate-700/70 bg-slate-900/50 backdrop-blur px-3.5 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.9)]">
<div className="flex-1 flex items-center gap-3">
<svg className="h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="7"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="w-full bg-transparent text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Enter BMeX ID or Brand Name..." type="text"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#405CFF] px-4 py-2 text-xs font-semibold tracking-tight text-white shadow-[0_0_18px_rgba(64,92,255,0.9)] hover:bg-[#5069ff] transition-colors">
<span>Search</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</button>
</div>

<div className="mt-7 grid md:grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 backdrop-blur px-3.5 py-3">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#405CFF]/15 text-[#405CFF]">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                    BMeX: The BrandMagics Exchange
                  </h3>
<p className="text-xs text-slate-400">
                    List and trade brand equity globally with a single universal
                    brand identity.
                  </p>
</div>
<div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 backdrop-blur px-3.5 py-3">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-[#7A80FF]/15 text-[#7A80FF]">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" width="7" x="3" y="3"></rect>
<rect height="5" width="7" x="14" y="3"></rect>
<rect height="9" width="7" x="14" y="12"></rect>
<rect height="5" width="7" x="3" y="16"></rect>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                    Brand Operating System
                  </h3>
<p className="text-xs text-slate-400">
                    Centralize diligence, reporting, and cross-team operations
                    in one place.
                  </p>
</div>
<div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 backdrop-blur px-3.5 py-3">
<div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12h6"></path>
<path d="M12 9v6"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-sm font-semibold tracking-tight text-slate-50 mb-1">
                    Expert Advisory Network
                  </h3>
<p className="text-xs text-slate-400">
                    Access M&amp;A, growth, and infra experts aligned to your
                    brand’s lifecycle.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex items-center justify-center">
<div className="relative w-full max-w-sm rounded-[1.75rem] border border-slate-700/70 bg-slate-900/40 backdrop-blur-xl px-4 py-4 shadow-[0_24px_70px_rgba(15,23,42,1)]">
<div className="absolute -top-10 -right-4 h-20 w-20 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,84,67,0.7),_transparent_65%)] opacity-70"></div>
<p className="text-xs text-slate-400 mb-2">
                  Your Brand BMeX Snapshot
                </p>
<h2 className="text-lg font-semibold tracking-tight text-slate-50 mb-3">
                  Turn your company into an investable brand.
                </h2>
<div className="space-y-2.5">
<div className="flex items-center justify-between gap-3">
<span className="text-xs text-slate-400">
                      Valuation Readiness
                    </span>
<div className="flex items-center gap-1">
<div className="h-1.5 w-20 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-[#405CFF] to-[#7A80FF]"></div>
</div>
<span className="text-xs text-slate-200">75%</span>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<span className="text-xs text-slate-400">Compliance Score</span>
<span className="text-xs text-emerald-400">Aligned</span>
</div>
<div className="flex items-center justify-between gap-3">
<span className="text-xs text-slate-400">Capital Pathway</span>
<span className="text-xs text-sky-400">Series A Ready</span>
</div>
</div>
<button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#111827] border border-slate-700/80 px-3.5 py-2 text-xs text-slate-100 hover:bg-slate-900 transition-colors">
<span>Preview a BMeX ID</span>
<svg className="h-3.5 w-3.5 text-slate-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle cx="18" cy="16" r="3"></circle>
</svg>
</button>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-black/70 backdrop-blur-sm" id="registerWizardOverlay">
<div aria-hidden="true" className="absolute inset-0" onclick="closeWizard()"></div>
<div className="relative z-50 max-w-3xl w-full mx-4 sm:mx-6 lg:mx-0 rounded-3xl border border-slate-700/80 bg-slate-900/70 bg-clip-padding backdrop-blur-xl shadow-[0_0_0_1px_rgba(148,163,184,0.12),0_30px_80px_rgba(15,23,42,1)]">

<div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-[#405CFF]/50 opacity-40"></div>

<div className="relative px-5 sm:px-7 pt-5 pb-3 border-b border-slate-800/80">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-[0.7rem] text-slate-300">
                  Create your universal BMeX brand identity
                </span>
</div>
<h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Register Your Brand
              </h2>
<p className="mt-1 text-sm text-slate-400">
                A three-step guided flow to generate your verified BMeX ID and
                unlock the BrandMagics ecosystem.
              </p>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors" onclick="closeWizard()" type="button">
<span className="sr-only">Close</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#405CFF] bg-[#405CFF]/20 text-[0.7rem] font-medium text-slate-50" id="stepBadge1">
                  1
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-100">
                    Company Details
                  </span>
<span className="text-[0.7rem] text-slate-400">Basics</span>
</div>
</div>
<div className="h-px w-8 sm:w-12 bg-gradient-to-r from-slate-700 to-slate-600"></div>

<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-[0.7rem] font-medium text-slate-300" id="stepBadge2">
                  2
                </div>
<div className="hidden sm:flex flex-col">
<span className="text-xs font-medium text-slate-300">
                    Registration
                  </span>
<span className="text-[0.7rem] text-slate-500">Official</span>
</div>
</div>
<div className="hidden sm:block h-px w-12 bg-gradient-to-r from-slate-700 to-slate-600"></div>

<div className="hidden sm:flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-[0.7rem] font-medium text-slate-300" id="stepBadge3">
                  3
                </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-300">
                    Brand Contact
                  </span>
<span className="text-[0.7rem] text-slate-500">Identity</span>
</div>
</div>
</div>

<div className="sm:min-w-[9rem]">
<div className="flex items-center justify-between text-[0.7rem] text-slate-400 mb-1">
<span id="progressLabel">Step 1 of 3</span>
<span id="progressPercent">33%</span>
</div>
<div className="h-1.5 w-full rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-1/3 rounded-full bg-gradient-to-r from-[#405CFF] via-[#7A80FF] to-sky-400 transition-all duration-500" id="progressBar"></div>
</div>
</div>
</div>
</div>

<div className="relative px-5 sm:px-7 py-5">

<form className="wizard-step space-y-5" id="step1" onsubmit="event.preventDefault()">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-1.5">
                Enter Your Brand Details
              </h3>
<p className="text-sm text-slate-400">
                These details help us generate a compliant, discoverable BMeX ID
                mapped to your legal entity.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">

<div className="sm:col-span-2">
<label className="flex items-center justify-between mb-1.5">
<span className="text-xs font-medium text-slate-200">
                    Brand Name
                  </span>
<span className="text-[0.7rem] text-slate-400">Required</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="brandNameInput" placeholder="Acme" required="" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Brand Owner
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<select className="w-full bg-transparent outline-none text-sm text-slate-100 appearance-none pr-6" id="brandOwnerType" required="">
<option className="bg-slate-900" value="company">
                      Company
                    </option>
<option className="bg-slate-900" value="individual">
                      Individual
                    </option>
</select>
<svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="" id="entityTypeGroup">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Entity Type
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<select className="w-full bg-transparent outline-none text-sm text-slate-100 appearance-none pr-6" id="entityTypeSelect">
<option className="bg-slate-900">Private Limited</option>
<option className="bg-slate-900">LLP</option>
<option className="bg-slate-900">Partnership</option>
<option className="bg-slate-900">Sole Proprietorship</option>
<option className="bg-slate-900">Public Limited</option>
<option className="bg-slate-900">Other</option>
</select>
<svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div className="" id="ownerNameGroup">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Owner Name
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="ownerNameInput" placeholder="Jane Doe" type="text"/>
</div>

<div className="" id="entityNameGroup">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Entity Name
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="entityNameInput" placeholder="Acme Technologies Pvt. Ltd." type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Industry Category
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<select className="w-full bg-transparent outline-none text-sm text-slate-100 appearance-none pr-6" id="industryCategory" required="">
<option className="bg-slate-900">Fintech</option>
<option className="bg-slate-900">SaaS</option>
<option className="bg-slate-900">Consumer</option>
<option className="bg-slate-900">E-commerce</option>
<option className="bg-slate-900">Healthcare</option>
<option className="bg-slate-900">Other</option>
</select>
<svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Website
                </label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="websiteInput" placeholder="https://" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Founded Year
                  <span className="text-red-400">*</span>
</label>
<input aria-label="Year of foundation" className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="foundedYearInput" placeholder="Year of foundation" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Phone Number
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="phoneInput" placeholder="+971507327365" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Email
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" id="emailInput" placeholder="founder@brand.com" type="text"/>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Brand Description
                  <span className="text-red-400">*</span>
</label>
<textarea className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all resize-none" id="brandDescription" placeholder="Describe your core product, markets, and growth stage..." required="" rows="3"></textarea>
</div>

<div className="sm:col-span-2">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Upload Brand Logo
                  <span className="text-red-400">*</span>
</label>
<div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border-2 border-dashed border-slate-700/90 bg-slate-900/60 px-4 py-3 cursor-pointer hover:border-[#405CFF] hover:bg-slate-900/80 transition-colors" id="logoDropzone">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#405CFF]/15 text-[#405CFF]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a1 1 0 0 0-1.414 0L9 19"></path>
<path d="m10 18-1 1"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-slate-200">
                        Drag &amp; drop your logo here
                      </p>
<p className="text-[0.7rem] text-slate-400">
                        PNG, SVG or JPG. Max 2MB. Recommended square aspect
                        ratio.
                      </p>
</div>
</div>
<div className="flex items-center gap-3">
<input accept="image/png,image/svg+xml,image/jpeg" className="hidden" id="logoInput" type="file"/>
<button className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-3 py-1.5 text-[0.7rem] font-medium text-slate-100 bg-slate-900/70 hover:bg-slate-800 transition-colors" onclick="document.getElementById('logoInput').click()" type="button">
                      Browse Files
                    </button>
<div className="hidden h-10 w-10 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900/90" id="logoPreview"></div>
</div>
</div>
</div>
</div>
</form>

<form className="wizard-step hidden space-y-5" id="step2" onsubmit="event.preventDefault()">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-1.5">
                Official Brand Documentation
              </h3>
<p className="text-sm text-slate-400">
                Provide the regulatory identifiers mapped to your corporate
                entity. This ensures compliance with jurisdictional listing
                norms.
              </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Country of Registration
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<select className="w-full bg-transparent outline-none text-sm text-slate-100 appearance-none pr-6" required="">
<option className="bg-slate-900">India</option>
<option className="bg-slate-900">United States</option>
<option className="bg-slate-900">United Kingdom</option>
<option className="bg-slate-900">Singapore</option>
<option className="bg-slate-900">United Arab Emirates</option>
<option className="bg-slate-900">Other</option>
</select>
<svg className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Registration Number / CIN / License Number
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="L12345MH2020PLC123456" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Registered Address
                  <span className="text-red-400">*</span>
</label>
<textarea className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all resize-none" placeholder="Full legal address as per registration certificate..." required="" rows="3"></textarea>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Number of Employees
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" min="1" placeholder="50" required="" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Tax ID / GST / VAT
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="27ABCDE1234F1Z5" required="" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Brand Registration Certificate
                  <span className="text-red-400">*</span>
</label>
<div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border-2 border-dashed border-slate-700/90 bg-slate-900/60 px-4 py-3 cursor-pointer hover:border-[#405CFF] hover:bg-slate-900/80 transition-colors" id="brandRegDropzone">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#405CFF]/15 text-[#405CFF]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"></path>
<path d="M14 2v6h6"></path>
<path d="M10 13h4"></path>
<path d="M10 17h4"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-slate-200">
                        Upload brand registration certificate
                      </p>
<p className="text-[0.7rem] text-slate-400">
                        PDF, PNG or JPG. Max 5MB.
                      </p>
</div>
</div>
<div className="flex items-center gap-3">
<input accept="application/pdf,image/png,image/jpeg" className="hidden" id="brandRegInput" type="file"/>
<button className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-3 py-1.5 text-[0.7rem] font-medium text-slate-100 bg-slate-900/70 hover:bg-slate-800 transition-colors" onclick="document.getElementById('brandRegInput').click()" type="button">
                      Browse Files
                    </button>
<div className="hidden h-8 px-2 flex items-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-[0.7rem] text-slate-200" id="brandRegPreview"></div>
</div>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Tax Registration Document
                  <span className="text-red-400">*</span>
</label>
<div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border-2 border-dashed border-slate-700/90 bg-slate-900/60 px-4 py-3 cursor-pointer hover:border-[#405CFF] hover:bg-slate-900/80 transition-colors" id="taxDocDropzone">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#405CFF]/15 text-[#405CFF]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5z"></path>
<path d="M14 2v6h6"></path>
<path d="M10 13h4"></path>
<path d="M10 17h4"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium text-slate-200">
                        Upload tax registration document
                      </p>
<p className="text-[0.7rem] text-slate-400">
                        PDF, PNG or JPG. Max 5MB.
                      </p>
</div>
</div>
<div className="flex items-center gap-3">
<input accept="application/pdf,image/png,image/jpeg" className="hidden" id="taxDocInput" type="file"/>
<button className="inline-flex items-center justify-center rounded-full border border-slate-600/80 px-3 py-1.5 text-[0.7rem] font-medium text-slate-100 bg-slate-900/70 hover:bg-slate-800 transition-colors" onclick="document.getElementById('taxDocInput').click()" type="button">
                      Browse Files
                    </button>
<div className="hidden h-8 px-2 flex items-center rounded-xl border border-slate-700/80 bg-slate-900/90 text-[0.7rem] text-slate-200" id="taxDocPreview"></div>
</div>
</div>
</div>
</div>
</form>

<form className="wizard-step hidden space-y-5" id="step3" onsubmit="event.preventDefault()">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-50 mb-1.5">
                  Primary Brand Contact
                </h3>
<p className="text-sm text-slate-400">
                  This is the person who will receive all compliance, listing,
                  and transaction notifications tied to your BMeX ID.
                </p>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/40">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-[0.7rem] text-emerald-300">
                  Ready to generate BMeX ID
                </span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Full Name
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Designation
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="Founder &amp; CEO" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Phone Number
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5">
                  Email Address
                  <span className="text-red-400">*</span>
</label>
<input className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[#405CFF] focus:ring-2 focus:ring-[#405CFF]/40 transition-all" placeholder="founder@brand.com" required="" type="email"/>
</div>
</div>
</form>
</div>

<div className="relative px-5 sm:px-7 pb-5 pt-3 border-t border-slate-800/80">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[0.7rem] text-slate-400">
<svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2h4"></path>
<path d="M12 14v8"></path>
<path d="M4.93 10.93 3.51 9.51"></path>
<path d="M16 8a4 4 0 1 0-8 0 4 4 0 0 0 8 0"></path>
<path d="m19.07 10.93 1.42-1.42"></path>
<path d="M6.34 17.66 4.93 19.07"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
</svg>
<span id="wizardHint">
                Step 1 of 3 — Complete company basics to unlock registration
                details.
              </span>
</div>
<div className="flex items-center justify-end gap-2">
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-100 hover:bg-slate-800 transition-colors" id="backButton" onclick="prevStep()" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="m11 18-6-6 6-6"></path>
</svg>
<span>Back</span>
</button>
<button className="inline-flex sm:hidden items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-100 hover:bg-slate-800 transition-colors hidden" id="secondaryBackButton" onclick="prevStep()" type="button">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H5"></path>
<path d="m11 18-6-6 6-6"></path>
</svg>
<span>Back</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#405CFF] via-[#7A80FF] to-[#405CFF] px-4 py-1.5 text-xs font-semibold tracking-tight text-white shadow-[0_0_22px_rgba(64,92,255,0.9)] hover:shadow-[0_0_30px_rgba(64,92,255,1)] transition-all" id="nextButton" onclick="nextStep()" type="button">
<span id="nextButtonLabel">Next</span>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
<svg className="h-2.5 w-2.5 transition-transform duration-200" fill="none" id="nextArrowIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-40 hidden items-center justify-center bg-black/70 backdrop-blur-sm" id="loginModalOverlay">
<div aria-hidden="true" className="absolute inset-0" onclick="closeLoginModal()"></div>
<div className="relative z-50 max-w-md w-full mx-4 sm:mx-6 lg:mx-0 rounded-3xl border border-slate-700/80 bg-slate-900/70 bg-clip-padding backdrop-blur-xl shadow-[0_0_0_1px_rgba(148,163,184,0.12),0_30px_80px_rgba(15,23,42,1)]">

<div className="pointer-events-none absolute inset-px rounded-[1.4rem] border border-[#405CFF]/50 opacity-40"></div>

<div className="relative px-5 sm:px-7 pt-5 pb-3 border-b border-slate-800/80">
<div className="flex items-start justify-between gap-4">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse"></span>
<span className="text-[0.7rem] text-slate-300">
                  Secure access to your BMeX workspace
                </span>
</div>
<h2 className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight text-slate-50">
                Login
              </h2>
<p className="mt-1 text-sm text-slate-400">
                Use your account credentials to continue where you left off.
              </p>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-slate-100 transition-colors" onclick="closeLoginModal()" type="button">
<span className="sr-only">Close</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>

<div className="relative px-5 sm:px-7 py-5">
<form className="space-y-5" id="loginForm" onsubmit="event.preventDefault(); simulateLogin();">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5" htmlFor="loginUsername">
                  Username
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<div className="absolute left-2.5 top-1/2 -translate-y-1/2">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="user"></i>
</div>
<input className="w-full bg-transparent pl-7 pr-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none" id="loginUsername" placeholder="Enter your username" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-200 mb-1.5" htmlFor="loginPassword">
                  Password
                  <span className="text-red-400">*</span>
</label>
<div className="relative rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 focus-within:border-[#405CFF] focus-within:ring-2 focus-within:ring-[#405CFF]/40 transition-all">
<div className="absolute left-2.5 top-1/2 -translate-y-1/2">
<i className="h-3.5 w-3.5 text-slate-400" data-lucide="lock"></i>
</div>
<input className="w-full bg-transparent pl-7 pr-8 text-sm text-slate-100 placeholder:text-slate-500 outline-none" id="loginPassword" placeholder="Enter your password" required="" type="password"/>
<button className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors" id="togglePasswordVisibility" onclick="togglePassword()" type="button">
<i className="h-3.5 w-3.5" data-lucide="eye" id="passwordEyeIcon"></i>
</button>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[0.7rem]">
<div className="flex items-center gap-2 text-slate-400 relative">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-md border border-slate-600/80 bg-slate-900/80 relative">
<input className="peer opacity-0 absolute h-4 w-4 cursor-pointer" id="rememberMe" type="checkbox"/>
<svg className="h-2.5 w-2.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<label className="cursor-pointer" htmlFor="rememberMe">
                  Remember me
                </label>
</div>
<button className="self-start sm:self-end text-[0.7rem] text-sky-400 hover:text-sky-300" type="button">
                Forgot password?
              </button>
</div>
<div className="flex items-center justify-between gap-3 pt-1">
<p className="text-[0.7rem] text-slate-400 flex items-center gap-1" id="loginHint">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                Enter your credentials to continue.
              </p>
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#405CFF] via-[#7A80FF] to-[#405CFF] px-4 py-1.5 text-xs font-semibold tracking-tight text-white shadow-[0_0_22px_rgba(64,92,255,0.9)] hover:shadow-[0_0_30px_rgba(64,92,255,1)] transition-all" id="loginSubmitButton" type="submit">
<span id="loginSubmitLabel">Login</span>
<span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-white/10">
<svg className="h-2.5 w-2.5 transition-transform duration-200" fill="none" id="loginArrowIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m13 6 6 6-6 6"></path>
</svg>
</span>
</button>
</div>
</form>
</div>
</div>
</div>




    </>
  );
}
