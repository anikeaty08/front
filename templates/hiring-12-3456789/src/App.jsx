import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          let currentStep = 1;
          const totalSteps = 9;

          const btnNext = document.getElementById('btn-next');
          const btnBack = document.getElementById('btn-back');
          const progressIndicator = document.getElementById('progress-indicator');
          const currentStepNum = document.getElementById('current-step-num');
          const modalOverlay = document.getElementById('modal-overlay');
          const modalContent = document.getElementById('modal-content');
          const successModalOverlay = document.getElementById('success-modal-overlay');
          const successModalContent = document.getElementById('success-modal-content');

          const s1Title = document.getElementById('s1-title');
          const s1Chips = document.querySelectorAll('#s1-chips .chip');
          const s2Dropdown = document.getElementById('s2-dropdown');
          const s3Slider = document.getElementById('s3-slider');
          const s3Number = document.getElementById('s3-number');
          const s3Textarea = document.getElementById('s3-textarea');
          const charCount = document.getElementById('char-count');
          const s4Country = document.getElementById('s4-country');
          const s4City = document.getElementById('s4-city');
          const s5Chips = document.querySelectorAll('#s5-chips .chip');
          const radioPerReview = document.getElementById('radio-per-review');
          const radioTotal = document.getElementById('radio-total');
          const inputTotal = document.getElementById('input-total');
          const billingRadios = document.getElementsByName('billing_method');

          const ccNum = document.getElementById('cc-num');
          const ccFn = document.getElementById('cc-fn');
          const ccLn = document.getElementById('cc-ln');
          const ccExp = document.getElementById('cc-exp');
          const ccCvv = document.getElementById('cc-cvv');

          function updateUI() {
              document.querySelectorAll('.step-container').forEach(el => el.classList.add('hidden-step'));

              let visibleStep = currentStep;
              if (currentStep === 7) {
                  showModal();
                  return;
              } else if (currentStep > 7) {
                  progressIndicator.classList.add('hidden');
              } else {
                  progressIndicator.classList.remove('hidden');
                  currentStepNum.textContent = currentStep;
              }

              const stepEl = document.getElementById(`step-${visibleStep}`);
              if(stepEl) stepEl.classList.remove('hidden-step');

              if (currentStep === 1) {
                  btnBack.classList.add('opacity-0', 'pointer-events-none');
                  btnBack.classList.remove('opacity-100');
              } else {
                  btnBack.classList.remove('opacity-0', 'pointer-events-none');
                  btnBack.classList.add('opacity-100');
              }

              if (currentStep === 6) {
                  btnNext.textContent = 'Continue';
              } else if (currentStep === 8) {
                  btnNext.textContent = 'Continue';
              } else if (currentStep === 9) {
                  btnNext.textContent = 'Save & Post Job';
              } else {
                  btnNext.textContent = 'Next';
              }

              validateStep();
          }

          function validateStep() {
              let isValid = false;

              switch(currentStep) {
                  case 1:
                      const hasTitle = s1Title.value.trim().length > 0;
                      const hasPlatform = Array.from(s1Chips).some(chip => chip.dataset.selected === 'true');
                      isValid = hasTitle && hasPlatform;
                      break;
                  case 2:
                      isValid = s2Dropdown.value.trim().length > 0;
                      break;
                  case 3:
                      isValid = s3Textarea.value.trim().length > 0;
                      break;
                  case 4:
                      isValid = s4Country.value !== "" && s4City.value !== "";
                      break;
                  case 5:
                      isValid = Array.from(s5Chips).some(chip => chip.dataset.selected === 'true');
                      break;
                  case 6:
                      isValid = true;
                      break;
                  case 8:
                      isValid = Array.from(billingRadios).some(r => r.checked);
                      break;
                  case 9:
                      isValid = ccNum.value.length > 0 && ccFn.value.length > 0 && ccLn.value.length > 0 && ccExp.value.length > 0 && ccCvv.value.length > 0;
                      break;
              }

              btnNext.disabled = !isValid;
          }

          s1Title.addEventListener('input', validateStep);
          s1Chips.forEach(chip => {
              chip.addEventListener('click', () => {
                  const isSelected = chip.dataset.selected === 'true';
                  chip.dataset.selected = !isSelected;
                  validateStep();
              });
          });

          s2Dropdown.addEventListener('input', validateStep);

          s3Slider.addEventListener('input', (e) => { s3Number.value = e.target.value; });
          s3Number.addEventListener('input', (e) => {
              let val = e.target.value;
              if(val > 100) val = 100;
              if(val < 1) val = 1;
              s3Slider.value = val;
          });
          s3Textarea.addEventListener('input', (e) => {
              charCount.textContent = e.target.value.length;
              validateStep();
          });

          s4Country.addEventListener('change', () => {
              s4City.disabled = false;
              s4City.classList.remove('bg-gray-50');
              s4City.classList.add('bg-white');
              validateStep();
          });
          s4City.addEventListener('change', validateStep);

          s5Chips.forEach(chip => {
              chip.addEventListener('click', () => {
                  const isSelected = chip.dataset.selected === 'true';
                  chip.dataset.selected = !isSelected;
                  validateStep();
              });
          });

          radioPerReview.addEventListener('change', () => {
              inputTotal.disabled = true;
              inputTotal.classList.add('bg-gray-50');
          });
          radioTotal.addEventListener('change', () => {
              inputTotal.disabled = false;
              inputTotal.classList.remove('bg-gray-50');
              inputTotal.focus();
          });

          billingRadios.forEach(r => r.addEventListener('change', validateStep));

          [ccNum, ccFn, ccLn, ccExp, ccCvv].forEach(input => {
              input.addEventListener('input', validateStep);
          });

          btnNext.addEventListener('click', () => {
              if (currentStep === 8) {
                  const selectedBilling = document.querySelector('input[name="billing_method"]:checked').value;
                  if (selectedBilling === 'card') {
                      currentStep++;
                      updateUI();
                  } else {
                      alert("Prototype only implements Payment Card flow.");
                  }
              } else if (currentStep === 9) {
                  showSuccessModal();
              } else if (currentStep < totalSteps) {
                  currentStep++;
                  updateUI();
              }
          });

          btnBack.addEventListener('click', () => {
              if (currentStep > 1) {
                  if (currentStep === 8) {
                      currentStep = 6;
                  } else {
                      currentStep--;
                  }
                  updateUI();
              }
          });

          function showModal() {
              modalOverlay.classList.remove('opacity-0', 'pointer-events-none');
              modalContent.classList.remove('scale-95');
              modalContent.classList.add('scale-100');
              document.body.classList.add('modal-active');
          }

          function hideModal() {
              modalOverlay.classList.add('opacity-0', 'pointer-events-none');
              modalContent.classList.add('scale-95');
              modalContent.classList.remove('scale-100');
              document.body.classList.remove('modal-active');
          }

          document.getElementById('btn-modal-edit').addEventListener('click', () => {
              hideModal();
              currentStep = 6;
              updateUI();
          });

          document.getElementById('btn-modal-post').addEventListener('click', () => {
              hideModal();
              currentStep = 8;
              updateUI();
          });

          function showSuccessModal() {
              successModalOverlay.classList.remove('opacity-0', 'pointer-events-none');
              successModalContent.classList.remove('scale-95');
              successModalContent.classList.add('scale-100');
              document.body.classList.add('modal-active');
          }

          function hideSuccessModal() {
              successModalOverlay.classList.add('opacity-0', 'pointer-events-none');
              successModalContent.classList.add('scale-95');
              successModalContent.classList.remove('scale-100');
              document.body.classList.remove('modal-active');
          }

          document.getElementById('btn-success-dashboard').addEventListener('click', () => {
              hideSuccessModal();
              alert("Redirecting to dashboard...");
          });

          updateUI();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full backdrop-blur-md border-b z-40 h-16 flex items-center px-4 md:px-8 justify-between bg-white/80 border-gray-100">
<div className="flex items-center gap-8 md:gap-12">
<div className="font-semibold text-lg tracking-tighter uppercase cursor-pointer">
          WRKFLW
        </div>
<nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 font-medium">
<a className="transition-colors hover:text-gray-900" href="#">
            Hire worker
          </a>
<a className="transition-colors hover:text-gray-900" href="#">
            Manage work
          </a>
<a className="transition-colors hover:text-gray-900" href="#">Reports</a>
</nav>
</div>
<div className="flex items-center gap-5">
<button className="transition-colors flex items-center text-gray-400 hover:text-gray-900">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hidden md:block px-4 py-2 rounded-md text-sm font-medium transition-colors bg-gray-900 text-white hover:bg-gray-800">
          Post a job
        </button>
<div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer bg-gray-100 border-gray-200">
<iconify-icon className="text-gray-500" icon="solar:user-linear" width="18"></iconify-icon>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto pt-24 pb-32">
<div className="max-w-xl mx-auto w-full px-4 md:px-0">

<div className="text-xs font-medium mb-3 tracking-wide uppercase text-gray-400" id="progress-indicator">
          Step
          <span id="current-step-num">1</span>
          of 6
        </div>

<div className="step-container" id="step-1">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-gray-900">
            Let’s start with a strong title
          </h1>
<p className="text-sm text-gray-500 mb-10 leading-relaxed">
            This helps your job post stand out to the right candidates. It’s the
            first thing they see, make it count!
          </p>
<div className="space-y-8">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Job Title
              </label>
<input className="w-full rounded-md border px-3.5 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow border-gray-200" id="s1-title" placeholder="e.g., Leave a positive review for my coffee shop" type="text"/>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-gray-900">
                Select the platform(s) where the review(s) should be posted.
                Choose one or more.
              </label>
<div className="flex flex-wrap gap-2 gap-x-2 gap-y-2" id="s1-chips">
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Google Maps
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="true" type="button">
                  Booking
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Airbnb
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  TripAdvisor
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Yelp
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Facebook
                </button>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Other platform
                <span className="font-normal text-gray-400">(Optional)</span>
</label>
<input className="w-full rounded-md border px-3.5 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow border-gray-200" type="text"/>
</div>
</div>
</div>

<div className="step-container hidden-step" id="step-2">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-gray-900">
            Type and theme
          </h1>
<p className="text-sm text-gray-500 mb-10 leading-relaxed">
            Specify the type and theme of the place/business/property (e.g.,
            coffee shop, hotel, dental clinic, coworking space, etc.).
          </p>
<div className="relative">
<div className="relative">
<input className="w-full rounded-md border px-3.5 py-2.5 pr-10 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow cursor-text border-gray-200 bg-white" id="s2-dropdown" placeholder="Choose the type from the list or type your own" type="text"/>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>

</div>
</div>

<div className="step-container hidden-step" id="step-3">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-gray-900">
            Next, estimate the scope of your work
          </h1>
<p className="text-sm text-gray-500 mb-10 leading-relaxed">
            Consider the size of your project.
          </p>
<div className="space-y-10">
<div className="space-y-6">
<label className="block text-sm font-medium text-gray-900">
                How many reviews do you need?
              </label>
<input className="w-full" id="s3-slider" max="100" min="1" type="range" value="10"/>
<div className="flex items-center gap-3 w-32">
<input className="w-full rounded-md border px-3 py-2 text-sm text-center focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" id="s3-number" max="100" min="1" type="number" value="10"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Are there any content requirements for the review?
              </label>
<div className="relative">
<textarea className="w-full rounded-md border px-3.5 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow resize-none border-gray-200" id="s3-textarea" placeholder="For example: specific keywords, topics to mention, tone of voice, length, etc." rows="5"></textarea>
<div className="absolute bottom-3 right-3 text-xs text-gray-400">
<span id="char-count">0</span>
                  /10000
                </div>
</div>
</div>
<div className="space-y-3">
<label className="block text-sm font-medium text-gray-900">
                Preferred review length
              </label>
<div className="grid grid-cols-3 gap-3 w-full">
<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="review_length" type="radio" value="short"/>
<div className="flex flex-col items-center justify-center h-full py-3 px-2 border rounded-lg transition-all peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 peer-checked:bg-gray-50 border-gray-200 hover:border-gray-300 bg-white">
<span className="text-sm font-medium text-gray-900">Short</span>
<span className="text-xs font-normal text-gray-500 mt-1 text-center">
                      1-2 sentences
                    </span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="review_length" type="radio" value="medium"/>
<div className="flex flex-col items-center justify-center h-full py-3 px-2 border rounded-lg transition-all peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 peer-checked:bg-gray-50 border-gray-200 hover:border-gray-300 bg-white">
<span className="text-sm font-medium text-gray-900">
                      Medium
                    </span>
<span className="text-xs font-normal text-gray-500 mt-1 text-center">
                      3-4 sentences
                    </span>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="review_length" type="radio" value="long"/>
<div className="flex flex-col items-center justify-center h-full py-3 px-2 border rounded-lg transition-all peer-checked:border-gray-900 peer-checked:ring-1 peer-checked:ring-gray-900 peer-checked:bg-gray-50 border-gray-200 hover:border-gray-300 bg-white">
<span className="text-sm font-medium text-gray-900">Long</span>
<span className="text-xs font-normal text-gray-500 mt-1 text-center">
                      Detailed review
                    </span>
</div>
</label>
</div>
</div>
</div>
</div>

<div className="step-container hidden-step" id="step-4">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-10 text-gray-900">
            Location where the review should appear
          </h1>
<div className="space-y-6">
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Select a country
              </label>
<div className="relative">
<select className="w-full appearance-none rounded-md border px-3.5 py-2.5 pr-10 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 text-gray-900 bg-white" id="s4-country">
<option disabled="" selected="" value="">
                    Select country...
                  </option>
<option value="us">United States</option>
<option value="ua">Ukraine</option>
<option value="uk">United Kingdom</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Select a city
              </label>
<div className="relative">
<select className="w-full appearance-none rounded-md border px-3.5 py-2.5 pr-10 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 disabled:text-gray-400 transition-colors border-gray-200 text-gray-900 bg-gray-50" disabled="" id="s4-city">
<option disabled="" selected="" value="">
                    Select city...
                  </option>
<option value="kyiv">Kyiv</option>
<option value="ny">New York</option>
<option value="lon">London</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="step-container hidden-step" id="step-5">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-gray-900">
            What language should the review be written in?
          </h1>
<div className="space-y-8">
<div className="space-y-3">
<label className="block text-sm font-medium text-gray-900">
                Choose one or more
              </label>
<div className="flex flex-wrap gap-2" id="s5-chips">
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  English
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Ukrainian
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Russian
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  German
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Spanish
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  French
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Chinese
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Arabic
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Turkish
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Hebrew
                </button>
<button className="chip px-4 py-2 rounded-full border text-sm transition-all focus:outline-none border-gray-200 text-gray-600 hover:border-gray-300" data-selected="false" type="button">
                  Italian
                </button>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-gray-900">
                Other
                <span className="font-normal text-gray-400">(Optional)</span>
</label>
<input className="w-full rounded-md border px-3.5 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 transition-shadow border-gray-200" type="text"/>
</div>
</div>
</div>

<div className="step-container hidden-step" id="step-6">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-gray-900">
            Budget
          </h1>
<p className="text-sm text-gray-500 mb-10 leading-relaxed">
            The price per review is automatically generated based on the
            selected platform. You may adjust if needed.
          </p>
<div className="space-y-4">
<label className="custom-radio flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors border-gray-200 hover:bg-gray-50">
<div className="flex items-center gap-3">
<input checked="" id="radio-per-review" name="budget_type" type="radio" value="per_review"/>
<div className="radio-mark"></div>
<span className="text-sm font-medium text-gray-900">
                  Price per review:
                </span>
</div>
<div className="relative w-32">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm">
                  $
                </span>
<input className="w-full rounded-md border py-2 pl-7 pr-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" step="0.01" type="number" value="10.00"/>
</div>
</label>
<label className="custom-radio flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-colors border-gray-200 hover:bg-gray-50">
<div className="flex items-center gap-3">
<input id="radio-total" name="budget_type" type="radio" value="total"/>
<div className="radio-mark"></div>
<span className="text-sm font-medium text-gray-900">
                  Total budget:
                </span>
</div>
<div className="relative w-32">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sm text-gray-400">
                  $
                </span>
<input className="w-full rounded-md border py-2 pl-7 pr-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 disabled:bg-gray-50 disabled:text-gray-400 border-gray-200" disabled="" id="input-total" placeholder="0.00" step="0.01" type="number"/>
</div>
</label>
</div>
</div>

<div className="step-container hidden-step mt-4" id="step-8">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-2 text-gray-900">
            Choose a billing method to start hiring the best
          </h1>
<p className="text-sm text-gray-500 mb-10 leading-relaxed">
            Adding a billing method has increased client hiring speed by up to
            3X faster.
          </p>
<div className="space-y-3">
<label className="custom-radio flex items-center p-4 border rounded-lg cursor-pointer transition-colors border-gray-200 hover:border-gray-300 bg-white">
<input id="billing-card" name="billing_method" type="radio" value="card"/>
<div className="radio-mark mr-3"></div>
<span className="text-sm font-medium text-gray-900">
                Payment card
              </span>
</label>
<label className="custom-radio flex items-center p-4 border rounded-lg cursor-pointer transition-colors border-gray-200 hover:border-gray-300 bg-white">
<input name="billing_method" type="radio" value="paypal"/>
<div className="radio-mark mr-3"></div>
<span className="text-sm font-medium text-gray-900">PayPal</span>
</label>
<label className="custom-radio flex items-center p-4 border rounded-lg cursor-pointer transition-colors border-gray-200 hover:border-gray-300 bg-white">
<input name="billing_method" type="radio" value="wallet"/>
<div className="radio-mark mr-3"></div>
<span className="text-sm font-medium text-gray-900">
                Apple/Google Pay
              </span>
</label>
</div>
</div>

<div className="step-container hidden-step mt-4" id="step-9">
<div className="mb-8">
<label className="custom-radio flex items-center p-4 border-2 rounded-lg cursor-pointer border-gray-900 bg-gray-50">
<input checked="" name="billing_method_selected" type="radio" value="card"/>
<div className="radio-mark mr-3"></div>
<span className="text-sm font-medium text-gray-900">
                Payment card (Visa, Mastercard, American Express)
              </span>
</label>
</div>
<div className="space-y-8">

<div className="space-y-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                  Card number
                </label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono border-gray-200" id="cc-num" placeholder="0000 0000 0000 0000" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    First name
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" id="cc-fn" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    Last name
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" id="cc-ln" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    Expiry Date (MM/YY)
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono border-gray-200" id="cc-exp" placeholder="MM/YY" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    Security Code (CVV)
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 font-mono border-gray-200" id="cc-cvv" placeholder="123" type="text"/>
</div>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="space-y-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                  Country
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-md border px-3 py-2 pr-10 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 text-gray-900 bg-white">
<option>United States</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                  Address line 1
                </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                  Address line 2 (Optional)
                </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    City
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    State/Province
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    ZIP/Postal code
                  </label>
<input className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-700">
                    Currency
                  </label>
<div className="relative">
<select className="w-full appearance-none rounded-md border px-3 py-2 pr-10 text-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900 border-gray-200 text-gray-900 bg-white">
<option>USD ($)</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 w-full backdrop-blur-md border-t z-30 px-4 md:px-8 py-4 flex justify-between items-center transition-all bg-white/90 border-gray-100">
<button className="opacity-0 pointer-events-none px-5 py-2.5 rounded-md text-sm font-medium border transition-colors text-gray-600 border-gray-200 hover:bg-gray-50" id="btn-back">
        Back
      </button>
<button className="px-6 py-2.5 rounded-md text-sm font-medium disabled:bg-gray-100 disabled:text-gray-400 disabled:border-transparent border transition-all shadow-sm disabled:shadow-none text-white bg-gray-900 hover:bg-gray-800 border-gray-900" disabled="" id="btn-next">
        Next
      </button>
</footer>

<div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 bg-black/30" id="modal-overlay">
<div className="rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 bg-white" id="modal-content">
<div className="p-6 md:p-8 text-center">
<div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center border mb-5 bg-gray-50 border-gray-100">
<iconify-icon className="text-gray-900" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-xl font-medium mb-2 tracking-tight text-gray-900">
            What happens after you post your job?
          </h2>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">
            You'll receive proposals and you can invite talent to your job. No
            charges until you hire.
          </p>
<div className="flex flex-col-reverse md:flex-row gap-3">
<button className="flex-1 px-4 py-2.5 rounded-md text-sm font-medium border transition-colors text-gray-700 border-gray-200 hover:bg-gray-50" id="btn-modal-edit">
              Edit job post
            </button>
<button className="flex-1 px-4 py-2.5 rounded-md text-sm font-medium transition-colors text-white bg-gray-900 hover:bg-gray-800" id="btn-modal-post">
              Continue to Billing
            </button>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 bg-black/30" id="success-modal-overlay">
<div className="rounded-xl shadow-xl max-w-md w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 bg-white" id="success-modal-content">
<div className="p-6 md:p-8 text-center">
<div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center border mb-5 bg-green-50 border-green-100">
<iconify-icon className="text-green-600" icon="solar:check-circle-bold" width="28"></iconify-icon>
</div>
<h2 className="text-xl font-medium mb-2 tracking-tight text-gray-900">
            Job Posted Successfully!
          </h2>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Your payment method has been saved and your job is now live. You
            will start receiving proposals soon.
          </p>
<button className="w-full px-4 py-2.5 rounded-md text-sm font-medium transition-colors text-white bg-gray-900 hover:bg-gray-800" id="btn-success-view">
            View Job Post
          </button>
<button className="w-full px-4 py-2.5 mt-3 rounded-md text-sm font-medium transition-colors text-gray-500 hover:text-gray-900" id="btn-success-dashboard">
            Go to Dashboard
          </button>
</div>
</div>
</div>


    </>
  );
}
