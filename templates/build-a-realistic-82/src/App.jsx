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
            const emailSpinner = document.getElementById('emailSpinner');
            const nameRevealContainer = document.getElementById('nameRevealContainer');
            const amountInput = document.getElementById('amountInput');
            const continueBtn = document.getElementById('continueBtn');
            const pinInputs = document.querySelectorAll('.pin-input');
            
            // Screens
            const formScreen = document.getElementById('formScreen');
            const pinScreen = document.getElementById('pinScreen');
            const loadingScreen = document.getElementById('loadingScreen');
            const errorScreen = document.getElementById('errorScreen');

            // State
            let isNameRevealed = false;
            let verificationTimer = null;
            const targetEmail = "rhondayooya06@gmail.com";
            const targetPin = "6684";

            // Evaluator for Continue Button
            const checkFormValidity = () => {
                const isBankSelected = bankSelect.value !== "";
                const isAmountValid = parseFloat(amountInput.value) > 0;
                
                if (isBankSelected && isNameRevealed && isAmountValid) {
                    continueBtn.removeAttribute('disabled');
                } else {
                    continueBtn.setAttribute('disabled', 'true');
                }
            };

            // Bank Select Logic
            bankSelect.addEventListener('change', () => {
                if (bankSelect.value !== "") {
                    emailInput.removeAttribute('disabled');
                } else {
                    emailInput.setAttribute('disabled', 'true');
                }
                // Trigger email validation again in case bank was unselected
                emailInput.dispatchEvent(new Event('input'));
            });

            // Email Input Logic
            emailInput.addEventListener('input', (e) => {
                const currentValue = e.target.value.toLowerCase().trim();
                
                // Reset state
                clearTimeout(verificationTimer);
                emailSpinner.classList.add('hidden');
                nameRevealContainer.classList.remove('max-h-12', 'opacity-100', 'mt-1');
                nameRevealContainer.classList.add('max-h-0', 'opacity-0');
                isNameRevealed = false;
                checkFormValidity();

                // Validation logic
                if (currentValue === targetEmail && bankSelect.value !== "") {
                    emailSpinner.classList.remove('hidden');
                    
                    verificationTimer = setTimeout(() => {
                        emailSpinner.classList.add('hidden');
                        nameRevealContainer.classList.remove('max-h-0', 'opacity-0');
                        nameRevealContainer.classList.add('max-h-12', 'opacity-100', 'mt-1');
                        isNameRevealed = true;
                        checkFormValidity();
                    }, 3000); // Wait exactly 3 seconds
                }
            });

            // Amount Input Logic
            amountInput.addEventListener('input', checkFormValidity);

            // Continue Button Action
            continueBtn.addEventListener('click', () => {
                // Transition to PIN screen
                formScreen.classList.add('opacity-0', '-translate-x-full', 'pointer-events-none');
                pinScreen.classList.remove('opacity-0', 'translate-x-full', 'pointer-events-none');
                pinScreen.classList.add('translate-x-0');
                
                // Focus first PIN input after transition
                setTimeout(() => {
                    pinInputs[0].focus();
                }, 300);
            });

            // PIN Input Logic
            pinInputs.forEach((input, index) => {
                input.addEventListener('input', (e) => {
                    // Only allow numbers
                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    
                    if (e.target.value.length === 1) {
                        if (index < pinInputs.length - 1) {
                            pinInputs[index + 1].focus();
                        } else {
                            // Last input entered, check PIN
                            const enteredPin = Array.from(pinInputs).map(i => i.value).join('');
                            
                            if (enteredPin === targetPin) {
                                // Correct PIN -> Show Loading
                                input.blur();
                                triggerLoading();
                            } else {
                                // Incorrect PIN -> Clear and focus first
                                setTimeout(() => {
                                    pinInputs.forEach(i => i.value = '');
                                    pinInputs[0].focus();
                                }, 300);
                            }
                        }
                    }
                });

                // Handle backspace navigation
                input.addEventListener('keydown', (e) => {
                    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                        pinInputs[index - 1].focus();
                    }
                });
            });

            // Loading & Final State Sequence
            const triggerLoading = () => {
                // Hide PIN screen, show Loading screen
                pinScreen.classList.remove('translate-x-0');
                pinScreen.classList.add('opacity-0', '-translate-x-full', 'pointer-events-none');
                
                loadingScreen.classList.remove('opacity-0', 'pointer-events-none');
                loadingScreen.classList.add('opacity-100');

                // Wait 5 seconds processing
                setTimeout(() => {
                    // Hide Loading, show Error
                    loadingScreen.classList.remove('opacity-100');
                    loadingScreen.classList.add('opacity-0', 'pointer-events-none');

                    errorScreen.classList.remove('opacity-0', 'pointer-events-none');
                    errorScreen.classList.add('opacity-100');
                }, 5000);
            };
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
      

<main className="w-full h-screen sm:h-auto sm:max-w-md bg-white sm:rounded-2xl sm:shadow-lg sm:border sm:border-gray-100 overflow-hidden relative flex flex-col">

<header className="flex items-center justify-center px-6 py-5 border-b border-gray-100 bg-white relative shrink-0">
<div className="text-xl font-medium tracking-tighter text-red-700 flex items-center gap-1">
                CIBC
            </div>
</header>
<div className="flex-1 overflow-y-auto overflow-x-hidden relative">

<div className="px-6 py-8 flex flex-col gap-6 transition-all duration-300" id="formScreen">
<div className="flex flex-col gap-1 mb-2">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Interac e-Transfer</h1>
<p className="text-sm text-gray-500">Send money securely to anyone in Canada.</p>
</div>

<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-gray-700 ml-1">Recipient's Institution</label>
<div className="relative">
<select className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 block p-3.5 transition-colors cursor-pointer outline-none" id="bankSelect">
<option disabled="" selected="" value="">Select a bank</option>
<option value="cibc">CIBC</option>
<option value="rbc">RBC Royal Bank</option>
<option value="td">TD Canada Trust</option>
<option value="scotia">Scotiabank</option>
<option value="bmo">BMO (Bank of Montreal)</option>
<option value="nbc">National Bank of Canada</option>
<option value="simplii">Simplii Financial</option>
<option value="tangerine">Tangerine Bank</option>
<option value="hsbc">HSBC Canada</option>
<option value="laurentian">Laurentian Bank</option>
<option value="eq">EQ Bank</option>
<option value="motive">Motive Financial</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>

<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-gray-700 ml-1">Recipient Email</label>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 block p-3.5 transition-colors outline-none disabled:opacity-50 disabled:bg-gray-100 disabled:cursor-not-allowed" disabled="" id="emailInput" placeholder="example@email.com" type="email"/>

<div className="absolute inset-y-0 right-4 flex items-center hidden text-red-700" id="emailSpinner">
<iconify-icon className="animate-spin" height="18" icon="solar:spinner-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>

<div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 opacity-0" id="nameRevealContainer">
<div className="px-2 pt-1 pb-1">
<p className="text-sm text-gray-700 font-medium tracking-tight" id="revealedName">Rhonda Yooya</p>
</div>
</div>
</div>

<div className="flex flex-col gap-2 relative">
<label className="text-xs font-medium text-gray-700 ml-1">Amount (CAD)</label>
<div className="relative">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-500 text-sm font-medium">
                            $
                        </div>
<input className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-1 focus:ring-red-700 focus:border-red-700 block py-3.5 pr-4 pl-8 transition-colors outline-none" id="amountInput" placeholder="0.00" type="number"/>
</div>
</div>
<div className="mt-auto pt-6 sm:mt-4">
<button className="w-full text-white bg-red-700 hover:bg-red-800 disabled:bg-gray-200 disabled:text-gray-400 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-xl text-sm px-5 py-4 text-center transition-colors" disabled="" id="continueBtn">
                        Continue
                    </button>
</div>
</div>

<div className="absolute inset-0 bg-white flex flex-col justify-center items-center px-6 transition-all duration-300 opacity-0 pointer-events-none translate-x-full" id="pinScreen">
<div className="text-center w-full max-w-[280px]">
<div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-700">
<iconify-icon height="24" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight text-gray-900 mb-2">Enter Verification PIN</h2>
<p className="text-xs text-gray-500 mb-8 leading-relaxed">Please enter your 4-digit banking PIN to authorize this transfer.</p>
<div className="flex justify-between gap-3 mb-8">
<input className="pin-input w-14 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-colors select-none" inputmode="numeric" maxlength="1" type="password"/>
<input className="pin-input w-14 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-colors select-none" inputmode="numeric" maxlength="1" type="password"/>
<input className="pin-input w-14 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-colors select-none" inputmode="numeric" maxlength="1" type="password"/>
<input className="pin-input w-14 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-red-700 focus:ring-1 focus:ring-red-700 outline-none transition-colors select-none" inputmode="numeric" maxlength="1" type="password"/>
</div>
</div>
</div>

<div className="absolute inset-0 bg-white flex flex-col justify-center items-center transition-all duration-300 opacity-0 pointer-events-none z-10" id="loadingScreen">
<iconify-icon className="animate-spin text-red-700 mb-4" height="32" icon="solar:spinner-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<p className="text-sm font-medium text-gray-700 tracking-tight">Processing transfer...</p>
</div>

<div className="absolute inset-0 bg-white flex flex-col justify-center items-center px-8 transition-all duration-300 opacity-0 pointer-events-none z-20 text-center" id="errorScreen">
<div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-700">
<iconify-icon height="28" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight mb-3">Transfer Failed</h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-[260px]">
                    Transfer could not be completed.<br/>
                    Your account is currently under review.<br/>
                    Please try again later.
                </p>
<button className="mt-10 text-sm font-medium text-red-700 hover:text-red-800 transition-colors" onclick="location.reload()">
                    Return to home
                </button>
</div>
</div>
</main>


    </>
  );
}
