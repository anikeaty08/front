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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Elements
            const bankSelect = document.getElementById('bankSelect');
            const emailInput = document.getElementById('emailInput');
            const emailContainer = document.getElementById('emailContainer');
            const emailSpinner = document.getElementById('emailSpinner');
            const recipientNameContainer = document.getElementById('recipientNameContainer');
            const amountInput = document.getElementById('amountInput');
            const continueBtn = document.getElementById('continueBtn');
            
            const screenForm = document.getElementById('screen-form');
            const screenPin = document.getElementById('screen-pin');
            const screenLoading = document.getElementById('screen-loading');
            const screenError = document.getElementById('screen-error');
            const cancelPinBtn = document.getElementById('cancelPinBtn');

            // State
            let isNameRevealed = false;
            const targetEmail = 'rhondayooya06@gmail.com';
            
            // Utility: Update Continue Button State
            function updateContinueButton() {
                const hasBank = bankSelect.value !== '';
                const hasEmail = emailInput.value.trim() !== '';
                const hasAmount = parseFloat(amountInput.value) > 0;
                const emailMatches = emailInput.value.trim().toLowerCase() === targetEmail;

                if (hasBank && hasEmail && hasAmount && isNameRevealed && emailMatches) {
                    continueBtn.disabled = false;
                    continueBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                } else {
                    continueBtn.disabled = true;
                    continueBtn.classList.add('opacity-50', 'cursor-not-allowed');
                }
            }

            // Step 1: Bank Selection Logic
            bankSelect.addEventListener('change', () => {
                if (bankSelect.value !== '') {
                    emailInput.disabled = false;
                    emailContainer.classList.remove('opacity-50');
                }
                updateContinueButton();
            });

            // Step 2: Email Logic
            let typingTimer;
            emailInput.addEventListener('input', () => {
                const currentEmail = emailInput.value.trim().toLowerCase();
                
                // Reset state on any input change
                isNameRevealed = false;
                recipientNameContainer.classList.add('hidden');
                recipientNameContainer.classList.remove('opacity-100');
                recipientNameContainer.classList.add('opacity-0');
                updateContinueButton();

                clearTimeout(typingTimer);

                if (currentEmail === targetEmail && bankSelect.value !== '') {
                    // Start verification process
                    emailInput.disabled = true;
                    emailSpinner.classList.remove('hidden');

                    typingTimer = setTimeout(() => {
                        // After 3 seconds
                        emailSpinner.classList.add('hidden');
                        emailInput.disabled = false;
                        isNameRevealed = true;
                        
                        recipientNameContainer.classList.remove('hidden');
                        // Small delay to ensure display:block is rendered before changing opacity for transition
                        setTimeout(() => {
                            recipientNameContainer.classList.remove('opacity-0');
                            recipientNameContainer.classList.add('opacity-100');
                            updateContinueButton();
                        }, 50);

                    }, 3000);
                }
            });

            // Step 3: Amount Logic
            amountInput.addEventListener('input', updateContinueButton);

            // Step 4: Continue Button Click
            continueBtn.addEventListener('click', () => {
                if (!continueBtn.disabled) {
                    screenForm.classList.add('hidden');
                    screenPin.classList.remove('hidden');
                    // Ensure focus is clear
                    document.activeElement.blur();
                }
            });

            // Step 5: PIN Logic
            let currentPin = '';
            const correctPin = '6684';
            const pinDots = document.querySelectorAll('#pinDots div');
            const keypadBtns = document.querySelectorAll('.keypad-btn');

            function updatePinUI() {
                pinDots.forEach((dot, index) => {
                    if (index < currentPin.length) {
                        dot.classList.add('bg-gray-800', 'border-gray-800');
                        dot.classList.remove('border-gray-300');
                    } else {
                        dot.classList.remove('bg-gray-800', 'border-gray-800');
                        dot.classList.add('border-gray-300');
                    }
                });

                if (currentPin.length === 4) {
                    // Disable keypad briefly to prevent extra clicks
                    keypadBtns.forEach(btn => btn.style.pointerEvents = 'none');
                    
                    setTimeout(() => {
                        if (currentPin === correctPin) {
                            // Move to loading
                            screenPin.classList.add('hidden');
                            screenLoading.classList.remove('hidden');
                            startLoadingSequence();
                        } else {
                            // Wrong PIN - clear it
                            currentPin = '';
                            updatePinUI();
                            keypadBtns.forEach(btn => btn.style.pointerEvents = 'auto');
                            // Shake effect could be added here
                        }
                    }, 300);
                }
            }

            keypadBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const val = e.currentTarget.getAttribute('data-val');
                    
                    if (val === 'del') {
                        currentPin = currentPin.slice(0, -1);
                    } else if (currentPin.length < 4) {
                        currentPin += val;
                    }
                    updatePinUI();
                });
            });

            cancelPinBtn.addEventListener('click', () => {
                currentPin = '';
                updatePinUI();
                screenPin.classList.add('hidden');
                screenForm.classList.remove('hidden');
            });

            // Step 6 & 7: Loading and Error Sequence
            function startLoadingSequence() {
                setTimeout(() => {
                    screenLoading.classList.add('hidden');
                    screenError.classList.remove('hidden');
                }, 5000); // 5 seconds processing
            }
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
      

<header className="bg-white border-b border-gray-200/60 sticky top-0 z-50">
<div className="max-w-md mx-auto px-5 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-xl tracking-tighter text-red-700">CB</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-500" icon="solar:bell-linear"></iconify-icon>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
<iconify-icon className="text-gray-600" icon="solar:user-linear"></iconify-icon>
</div>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-md mx-auto p-5 relative overflow-hidden">

<div className="transition-all duration-300 transform w-full" id="screen-form">
<div className="mb-6 mt-2">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Send Money</h1>
<p className="text-sm text-gray-500 mt-1">Interac e-Transfer®</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-gray-200/50 p-5 space-y-6">

<div className="space-y-2 relative">
<label className="block text-sm font-medium text-gray-700" htmlFor="bankSelect">Recipient Financial Institution</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 transition-colors cursor-pointer pb-3.5" id="bankSelect">
<option disabled="" selected="" value="">Select a bank...</option>
<option value="cibc">CIBC</option>
<option value="rbc">RBC Royal Bank</option>
<option value="td">TD Canada Trust</option>
<option value="scotiabank">Scotiabank</option>
<option value="bmo">BMO (Bank of Montreal)</option>
<option value="national">National Bank of Canada</option>
<option value="simplii">Simplii Financial</option>
<option value="tangerine">Tangerine Bank</option>
<option value="hsbc">HSBC Canada</option>
<option value="laurentian">Laurentian Bank</option>
<option value="eq">EQ Bank</option>
<option value="motive">Motive Financial</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
<iconify-icon className="text-gray-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2 opacity-50 transition-opacity duration-300" id="emailContainer">
<label className="block text-sm font-medium text-gray-700" htmlFor="emailInput">Recipient Email</label>
<div className="relative">
<input className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 transition-colors disabled:bg-gray-50 disabled:cursor-not-allowed pr-10" disabled="" id="emailInput" placeholder="example@email.com" type="email"/>
<div className="hidden absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none" id="emailSpinner">
<iconify-icon className="text-gray-400 text-lg animate-spin" icon="solar:spinner-linear"></iconify-icon>
</div>
</div>

<div className="hidden mt-1 ml-1 transition-opacity duration-700 ease-in-out opacity-0" id="recipientNameContainer">
<span className="text-sm font-medium text-gray-900" id="recipientNameText">Rhonda Yooya</span>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-medium text-gray-700" htmlFor="amountInput">Amount (CAD)</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
<span className="text-gray-500 text-sm font-medium">$</span>
</div>
<input className="w-full rounded-xl border border-gray-300 bg-white pl-8 pr-4 py-3.5 text-sm text-gray-900 placeholder-gray-400 focus:border-red-700 focus:outline-none focus:ring-1 focus:ring-red-700 transition-colors" id="amountInput" min="0.01" placeholder="0.00" step="0.01" type="number"/>
</div>
</div>
</div>

<div className="mt-8">
<button className="w-full rounded-full bg-red-700 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 transition-all opacity-50 cursor-not-allowed" disabled="" id="continueBtn">
                    Continue
                </button>
</div>
</div>

<div className="hidden absolute inset-0 bg-gray-50 w-full h-[calc(100vh-64px)] z-20 flex flex-col pt-12 px-5" id="screen-pin">
<div className="flex flex-col items-center flex-1">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Enter PIN</h2>
<p className="text-sm text-gray-500 mt-2">To authorize this transfer</p>

<div className="flex gap-4 mt-10 mb-16" id="pinDots">
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-colors duration-200"></div>
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-colors duration-200"></div>
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-colors duration-200"></div>
<div className="w-3.5 h-3.5 rounded-full border border-gray-300 transition-colors duration-200"></div>
</div>

<div className="grid grid-cols-3 gap-x-8 gap-y-6 max-w-[260px] w-full mx-auto" id="keypad">
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="1">1</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="2">2</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="3">3</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="4">4</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="5">5</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="6">6</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="7">7</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="8">8</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="9">9</button>
<div className="w-16 h-16"></div> 
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl font-medium text-gray-900 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="0">0</button>
<button className="keypad-btn w-16 h-16 rounded-full flex items-center justify-center text-2xl text-gray-700 mx-auto hover:bg-gray-200 active:bg-gray-300 transition-colors select-none" data-val="del">
<iconify-icon icon="solar:backspace-linear"></iconify-icon>
</button>
</div>
<div className="mt-auto pb-8 w-full">
<button className="w-full py-3.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" id="cancelPinBtn">Cancel Transfer</button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-white w-full h-[calc(100vh-64px)] z-30 flex flex-col items-center justify-center px-5" id="screen-loading">
<iconify-icon className="text-red-700 text-4xl animate-spin mb-6" icon="solar:spinner-linear"></iconify-icon>
<p className="text-base font-medium text-gray-900">Processing transfer...</p>
<p className="text-sm text-gray-500 mt-2 text-center">Please do not close the app.</p>
</div>

<div className="hidden absolute inset-0 bg-white w-full h-[calc(100vh-64px)] z-40 flex flex-col items-center justify-center px-5 text-center" id="screen-error">
<div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100">
<iconify-icon className="text-red-600 text-3xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Transfer Failed</h2>
<p className="text-sm text-gray-600 leading-relaxed max-w-[280px]">
                Transfer could not be completed.<br/>
                Your account is currently under review.<br/>
                Please try again later.
            </p>
<div className="mt-10 w-full max-w-[280px]">
<button className="w-full rounded-full bg-gray-100 py-3.5 text-sm font-semibold text-gray-900 hover:bg-gray-200 transition-colors border border-gray-200" onclick="window.location.reload()">
                    Return to Accounts
                </button>
</div>
</div>
</main>


    </>
  );
}
