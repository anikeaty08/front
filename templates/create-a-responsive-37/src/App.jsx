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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
bankRed: '#A6192E',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State
        let selectedBank = '';
        let recipientVerified = false;

        // Elements
        const screens = document.querySelectorAll('.screen');
        const bankSelect = document.getElementById('bankSelect');
        const btnScreen1 = document.getElementById('btn-screen-1');
        const emailInput = document.getElementById('emailInput');
        const btnScreen2 = document.getElementById('btn-screen-2');
        const verifyLoading = document.getElementById('verifyLoading');
        const verifiedRecipient = document.getElementById('verifiedRecipient');
        const amountInput = document.getElementById('amountInput');
        const btnScreen3 = document.getElementById('btn-screen-3');
        const pinInput = document.getElementById('pinInput');
        const btnScreen4 = document.getElementById('btn-screen-4');
        const pinError = document.getElementById('pinError');
        const processingText = document.getElementById('processingText');

        // Navigation Helper
        function showScreen(screenId) {
            screens.forEach(s => s.classList.add('hidden'));
            document.getElementById(screenId).classList.remove('hidden');
        }

        function goBack(screenId) {
            showScreen(screenId);
        }

        function resetApp() {
            selectedBank = '';
            recipientVerified = false;
            bankSelect.value = '';
            btnScreen1.disabled = true;
            emailInput.value = '';
            btnScreen2.disabled = true;
            verifiedRecipient.classList.add('hidden');
            amountInput.value = '';
            btnScreen3.disabled = true;
            pinInput.value = '';
            btnScreen4.disabled = true;
            pinError.classList.remove('opacity-100');
            pinError.classList.add('opacity-0');
            showScreen('screen-1');
        }

        // Screen 1 Logic
        bankSelect.addEventListener('change', (e) => {
            selectedBank = e.target.value;
            btnScreen1.disabled = !selectedBank;
        });

        btnScreen1.addEventListener('click', () => {
            showScreen('screen-2');
            emailInput.focus();
        });

        // Screen 2 Logic
        let verifyTimeout;
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            clearTimeout(verifyTimeout);
            verifiedRecipient.classList.add('hidden');
            btnScreen2.disabled = true;
            verifyLoading.classList.remove('hidden');

            if (selectedBank === 'CIBC' && email.toLowerCase() === 'rhondayooya06@gmail.com') {
                verifyTimeout = setTimeout(() => {
                    verifyLoading.classList.add('hidden');
                    verifiedRecipient.classList.remove('hidden');
                    btnScreen2.disabled = false;
                    recipientVerified = true;
                }, 1500);
            } else {
                verifyTimeout = setTimeout(() => {
                    verifyLoading.classList.add('hidden');
                    recipientVerified = false;
                }, 500);
            }
        });

        btnScreen2.addEventListener('click', () => {
            if (recipientVerified) {
                showScreen('screen-3');
                amountInput.focus();
            }
        });

        // Screen 3 Logic
        amountInput.addEventListener('input', (e) => {
            const val = e.target.value;
            btnScreen3.disabled = val <= 0 || val === '';
        });

        btnScreen3.addEventListener('click', () => {
            showScreen('screen-4');
            pinInput.focus();
        });

        // Screen 4 Logic
        pinInput.addEventListener('input', (e) => {
            btnScreen4.disabled = e.target.value.length !== 4;
            pinError.classList.remove('opacity-100');
            pinError.classList.add('opacity-0');
        });

        btnScreen4.addEventListener('click', () => {
            if (pinInput.value === '6684') {
                startProcessing();
            } else {
                pinError.classList.remove('opacity-0');
                pinError.classList.add('opacity-100');
                pinInput.value = '';
                btnScreen4.disabled = true;
                pinInput.focus();
            }
        });

        // Screen 5 Logic (Processing)
        function startProcessing() {
            showScreen('screen-5');
            const messages = [
                'Processing transfer...',
                'Connecting to bank...',
                'Verifying transaction...'
            ];
            let step = 0;
            
            processingText.textContent = messages[0];
            processingText.style.opacity = 1;

            const processInterval = setInterval(() => {
                processingText.style.opacity = 0;
                
                setTimeout(() => {
                    step++;
                    if (step < messages.length) {
                        processingText.textContent = messages[step];
                        processingText.style.opacity = 1;
                    } else {
                        clearInterval(processInterval);
                        showScreen('screen-6');
                    }
                }, 300); // Wait for fade out
                
            }, 1800); // Duration per message
        }

    
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
      

<main className="w-full h-screen sm:h-auto sm:min-h-[720px] sm:max-w-[420px] bg-white sm:rounded-2xl sm:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden flex flex-col">

<div className="h-1.5 w-full bg-bankRed"></div>

<div className="screen flex flex-col h-full flex-1 p-5 fade-in" id="screen-1">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">Send Money</h1>
<div className="flex-1">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="bankSelect">Select Bank</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-slate-300 text-slate-800 text-base rounded-xl px-4 py-3.5 pr-10 focus:outline-none focus:ring-2 focus:ring-bankRed/20 focus:border-bankRed transition-all cursor-pointer" id="bankSelect">
<option disabled="" selected="" value="">Choose a financial institution</option>
<option value="RBC">Royal Bank of Canada (RBC)</option>
<option value="TD">TD Canada Trust</option>
<option value="Scotiabank">Scotiabank</option>
<option value="BMO">BMO</option>
<option value="CIBC">CIBC</option>
<option value="NBC">National Bank of Canada</option>
<option value="Tangerine">Tangerine</option>
<option value="Simplii">Simplii Financial</option>
<option value="EQ">EQ Bank</option>
<option value="HSBC">HSBC Canada</option>
<option value="Laurentian">Laurentian Bank</option>
<option value="Manulife">Manulife Bank</option>
<option value="Alterna">Alterna Bank</option>
<option value="Motusbank">Motusbank</option>
<option value="CWB">Canadian Western Bank</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-bankRed hover:bg-red-800 text-white text-base font-medium py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-screen-1">
                    Continue
                </button>
</div>
</div>

<div className="screen hidden flex flex-col h-full flex-1 p-5 fade-in" id="screen-2">
<div className="flex items-center mb-8">
<button className="text-slate-500 hover:text-slate-800 transition-colors mr-3 -ml-2 p-2 rounded-full" onclick="goBack('screen-1')">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Recipient Details</h1>
</div>
<div className="flex-1">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="emailInput">Recipient Email</label>
<input className="w-full bg-white border border-slate-300 text-slate-800 text-base rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-bankRed/20 focus:border-bankRed transition-all placeholder:text-slate-400" id="emailInput" placeholder="Enter email address" type="email"/>

<div className="hidden mt-6 flex items-center text-sm text-slate-500" id="verifyLoading">
<iconify-icon className="animate-spin mr-2" height="18" icon="solar:spinner-linear" width="18"></iconify-icon>
                    Verifying details...
                </div>

<div className="hidden mt-6 bg-slate-50 rounded-xl p-4 border border-slate-100 fade-in" id="verifiedRecipient">
<div className="flex items-start">
<div className="w-10 h-10 rounded-full bg-bankRed/10 flex items-center justify-center text-bankRed font-semibold text-lg mr-3">
                            R
                        </div>
<div>
<p className="text-base font-semibold text-slate-900 tracking-tight">Rhonda Yooya</p>
<p className="text-sm text-green-700 flex items-center mt-0.5">
<iconify-icon className="mr-1" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                                Verified recipient
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-bankRed hover:bg-red-800 text-white text-base font-medium py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-screen-2">
                    Continue
                </button>
</div>
</div>

<div className="screen hidden flex flex-col h-full flex-1 p-5 fade-in" id="screen-3">
<div className="flex items-center mb-8">
<button className="text-slate-500 hover:text-slate-800 transition-colors mr-3 -ml-2 p-2 rounded-full" onclick="goBack('screen-2')">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Transfer Details</h1>
</div>
<div className="flex-1 space-y-6">

<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-between">
<div>
<p className="text-sm text-slate-500 mb-0.5">To</p>
<p className="text-base font-medium text-slate-900">Rhonda Yooya</p>
<p className="text-xs text-slate-500 mt-1">Interac e-Transfer</p>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="amountInput">Amount</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
<span className="text-slate-500 text-lg sm:text-base">$</span>
</div>
<input className="w-full bg-white border border-slate-300 text-slate-900 text-lg sm:text-base font-medium rounded-xl pl-8 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-bankRed/20 focus:border-bankRed transition-all placeholder:text-slate-300 placeholder:font-normal" id="amountInput" placeholder="0.00" type="number"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="noteInput">Message <span className="text-slate-400 font-normal">(Optional)</span></label>
<input className="w-full bg-white border border-slate-300 text-slate-800 text-base rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-bankRed/20 focus:border-bankRed transition-all placeholder:text-slate-400" id="noteInput" placeholder="Add a note" type="text"/>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-bankRed hover:bg-red-800 text-white text-base font-medium py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-screen-3">
                    Continue
                </button>
</div>
</div>

<div className="screen hidden flex flex-col h-full flex-1 p-5 fade-in" id="screen-4">
<div className="flex items-center mb-8">
<button className="text-slate-500 hover:text-slate-800 transition-colors mr-3 -ml-2 p-2 rounded-full" onclick="goBack('screen-3')">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Enter PIN</h1>
</div>
<div className="flex-1 flex flex-col items-center mt-10">
<p className="text-sm text-slate-500 text-center mb-6">Enter your 4-digit security PIN to confirm this transaction.</p>
<input className="w-48 text-center tracking-[1em] bg-white border border-slate-300 text-slate-900 text-3xl rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-bankRed/20 focus:border-bankRed transition-all placeholder:text-slate-300 placeholder:tracking-normal font-mono" id="pinInput" inputmode="numeric" maxlength="4" placeholder="••••" type="password"/>
<p className="text-sm text-bankRed mt-4 h-5 opacity-0 transition-opacity duration-200" id="pinError">Incorrect PIN. Try again.</p>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-bankRed hover:bg-red-800 text-white text-base font-medium py-3.5 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-screen-4">
                    Confirm Transfer
                </button>
</div>
</div>

<div className="screen hidden flex flex-col items-center justify-center h-full flex-1 p-5 fade-in" id="screen-5">
<div className="relative w-20 h-20 mb-8">
<svg className="animate-spin w-full h-full text-bankRed/20" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-100" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
<path className="opacity-75 text-bankRed" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</div>
<p className="text-lg font-medium text-slate-800 tracking-tight transition-opacity duration-300" id="processingText">Processing transfer...</p>
</div>

<div className="screen hidden flex flex-col h-full flex-1 p-5 fade-in" id="screen-6">
<div className="flex-1 flex flex-col items-center justify-center text-center mt-[-10%]">
<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-6">
<iconify-icon className="text-bankRed" height="36" icon="solar:close-circle-linear" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Transfer Failed</h1>
<p className="text-base text-slate-600 max-w-[280px]">
                    Transaction could not be completed.<br/>
                    This account is currently under review.<br/>
                    Please try again later.
                </p>
</div>
<div className="mt-auto pt-6">
<button className="w-full bg-white border border-slate-300 text-slate-800 hover:bg-slate-50 text-base font-medium py-3.5 rounded-xl transition-colors" onclick="resetApp()">
                    Done
                </button>
</div>
</div>
</main>


    </>
  );
}
