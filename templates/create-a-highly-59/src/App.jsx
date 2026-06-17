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
            
            // --- 1. Number Count-Up Animation ---
            const targetAmount = 145453;
            const amountDisplay = document.getElementById('amount-display');
            let startTimestamp = null;
            const duration = 1200; // ms

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // Easing out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOut * targetAmount);
                
                amountDisplay.textContent = currentVal.toLocaleString('en-US');
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    amountDisplay.textContent = "145,453"; // Ensure exact final value
                }
            };
            
            // Start counter slightly after page load for effect
            setTimeout(() => {
                window.requestAnimationFrame(step);
            }, 300);


            // --- 2. Interaction Flow ---
            const btnSend = document.getElementById('btn-send');
            const page1 = document.getElementById('page1');
            const page2 = document.getElementById('page2');
            const loadingOverlay = document.getElementById('loading-overlay');
            const loadingModal = document.getElementById('loading-modal');
            const progressFill = document.getElementById('progress-fill');

            const loadingTexts = [
                document.getElementById('loading-text-1'),
                document.getElementById('loading-text-2'),
                document.getElementById('loading-text-3'),
                document.getElementById('loading-text-4')
            ];

            btnSend.addEventListener('click', () => {
                // Dim and Blur Page 1
                page1.classList.add('dimmed-blurred');

                // Show Loading Overlay
                loadingOverlay.classList.remove('hidden-state');
                
                // Small delay to allow display:block to apply before animating opacity/transform
                requestAnimationFrame(() => {
                    loadingModal.classList.remove('opacity-0', 'scale-95');
                    loadingModal.classList.add('opacity-100', 'scale-100');
                    
                    // Start progress bar fill
                    setTimeout(() => {
                        progressFill.style.width = '100%';
                    }, 100);
                });

                // Cycle Status Messages (Total time ~6 seconds)
                const textDelays = [1500, 3000, 4500];
                
                textDelays.forEach((delay, index) => {
                    setTimeout(() => {
                        loadingTexts[index].classList.remove('opacity-100');
                        loadingTexts[index].classList.add('opacity-0');
                        
                        loadingTexts[index+1].classList.remove('opacity-0');
                        loadingTexts[index+1].classList.add('opacity-100');
                    }, delay);
                });

                // Transition to Page 2 after loading finishes
                setTimeout(() => {
                    // Hide Overlay
                    loadingModal.classList.remove('opacity-100', 'scale-100');
                    loadingModal.classList.add('opacity-0', 'scale-95');
                    
                    setTimeout(() => {
                        loadingOverlay.classList.add('hidden-state');
                        
                        // Hide Page 1, Show Page 2
                        page1.classList.add('hidden-state');
                        page2.classList.remove('hidden-state');
                        
                        // Re-trigger scale-in animation by forcing reflow
                        const p2Container = page2.querySelector('.animate-scale-in');
                        p2Container.style.animation = 'none';
                        p2Container.offsetHeight; /* trigger reflow */
                        p2Container.style.animation = null; 

                    }, 300); // Wait for modal fade out

                }, 6000); // 6 seconds total loading time
            });
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
      

<div className="ambient-bg">
<div className="ambient-wash"></div>
<div className="ambient-glow-top"></div>
<div className="ambient-gold-blob"></div>
<div className="noise-overlay"></div>
</div>

<main className="page-transition flex-1 flex flex-col w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="page1">

<header className="flex items-center justify-between pb-6 animate-fade-up">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#F5F7FA] border border-[#E6E8EC] flex items-center justify-center text-[#C9A646]">
<iconify-icon height="20" icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-gray-900 leading-none">DIAMONDCHAIN</span>
<span className="text-xs font-medium tracking-widest text-[#6B7280] leading-tight mt-1 uppercase">Investments BW</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
<iconify-icon className="text-emerald-600" height="14" icon="solar:lock-keyhole-minimalistic-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium text-emerald-700 tracking-tight">Secure Session • TLS Encrypted</span>
</div>
</header>
<div className="divider-gradient w-full animate-fade-up mb-8"></div>

<div className="mb-8 animate-fade-up delay-100">
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Payment Confirmation</h1>
<p className="text-sm text-[#6B7280] mt-1">Review transaction details and recipient identity before authorizing.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 items-start">

<div className="glass-card rounded-xl border border-[#E6E8EC] p-8 animate-fade-up delay-200">

<div className="mb-8">
<h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Transfer Summary</h2>
<div className="flex items-end gap-2 mb-2">
<span className="text-lg font-medium text-gray-500 mb-1">P</span>
<span className="text-4xl font-semibold tracking-tight text-gray-900" id="amount-display">0</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6">
<div>
<span className="block text-xs text-[#6B7280] mb-1">Currency</span>
<span className="text-sm font-medium text-gray-900">Botswana Pula (BWP)</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Date</span>
<span className="text-sm font-medium text-gray-900">April 9, 2026</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Transaction ID</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-mono font-medium bg-gray-100 text-gray-700 border border-gray-200">
                                TXN-89A4-F22B
                            </span>
</div>
<div className="sm:col-span-3">
<span className="block text-xs text-[#6B7280] mb-1">Authorized By</span>
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" height="16" icon="solar:user-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Mr. Philip</span>
</div>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6E8EC] to-transparent my-6"></div>

<div className="mb-8">
<h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Recipient</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<span className="block text-xs text-[#6B7280] mb-1">Name</span>
<span className="text-sm font-medium text-gray-900">Mositi Seokolo</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Email</span>
<span className="text-sm font-medium text-gray-900">mositiseokolo@yahoo.com</span>
</div>
</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-[#E6E8EC] to-transparent my-6"></div>

<div>
<h2 className="text-xs font-semibold text-[#6B7280] uppercase tracking-wider mb-4">Destination Bank</h2>
<div className="grid grid-cols-2 gap-y-6 gap-x-4">
<div>
<span className="block text-xs text-[#6B7280] mb-1">Bank Name</span>
<span className="text-sm font-medium text-gray-900">First National Bank (FNB)</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Account Type</span>
<span className="text-sm font-medium text-gray-900">Gold Account</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Account Number</span>
<span className="text-sm font-mono font-medium text-gray-900">62318593218</span>
</div>
<div>
<span className="block text-xs text-[#6B7280] mb-1">Branch Code</span>
<span className="text-sm font-mono font-medium text-gray-900">283567</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 animate-fade-up delay-300">
<div className="panel-gradient rounded-xl border border-[#E6E8EC] p-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C9A646]/10 to-transparent"></div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-semibold tracking-tight text-gray-900">Verified Identity</h2>
<div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-100/50 border border-emerald-200">
<iconify-icon className="text-emerald-600" height="14" icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-[10px] font-medium text-emerald-700 uppercase tracking-wider">Verified</span>
</div>
</div>

<div className="flex justify-center mb-6">
<div className="w-28 h-28 rounded-lg bg-white border border-[#E6E8EC] shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] flex items-center justify-center relative overflow-hidden group">

<div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(0,0,0,0.06)] rounded-lg pointer-events-none z-10"></div>

<iconify-icon className="text-gray-300" height="48" icon="solar:user-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
</div>

<div className="space-y-4 mb-6">
<div className="flex justify-between items-center border-b border-gray-200/60 pb-2">
<span className="text-xs text-[#6B7280]">Full Name</span>
<span className="text-sm font-medium text-gray-900">Mositi Seokolo</span>
</div>
<div className="flex justify-between items-center border-b border-gray-200/60 pb-2">
<span className="text-xs text-[#6B7280]">ID Number</span>
<span className="text-sm font-mono font-medium text-gray-900">005720428</span>
</div>
<div className="flex justify-between items-center border-b border-gray-200/60 pb-2">
<span className="text-xs text-[#6B7280]">Gender</span>
<span className="text-sm font-medium text-gray-900">Female</span>
</div>
</div>

<div>
<span className="block text-xs text-[#6B7280] mb-2">Digital Signature</span>
<div className="signature-box w-full h-16 border border-[#E6E8EC] rounded-md flex items-center justify-center relative overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
<svg fill="none" height="40" viewbox="0 0 120 40" width="120" xmlns="http://www.w3.org/2000/svg">
<path className="signature-path" d="M10 25 C 20 15, 30 35, 40 25 S 50 10, 60 20 S 70 30, 80 20 S 90 15, 100 25 S 110 30, 115 20" stroke="#111827" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="btn-primary w-full py-3 px-4 rounded-lg text-sm font-medium text-white flex items-center justify-center gap-2" id="btn-send">
<iconify-icon height="18" icon="solar:plain-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Send Payment
                    </button>
<button className="w-full py-3 px-4 rounded-lg text-sm font-medium text-[#6B7280] bg-white border border-[#E6E8EC] hover:bg-gray-50 hover:text-gray-900 transition-colors shadow-sm">
                        Cancel
                    </button>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden-state" id="loading-overlay">

<div className="absolute inset-0 bg-gray-900/10 backdrop-blur-[2px]"></div>

<div className="relative w-80 bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col items-center transform scale-95 opacity-0 transition-all duration-300" id="loading-modal">
<div className="relative w-16 h-16 mb-6">
<svg className="w-full h-full" viewbox="0 0 50 50">
<circle className="spinner-track" cx="25" cy="25" fill="none" r="20" strokeWidth="3"></circle>
<circle className="spinner-head" cx="25" cy="25" fill="none" r="20" stroke-dasharray="30 100" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-[#1E3A8A]">
<iconify-icon height="20" icon="solar:shield-keyhole-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<div className="text-center w-full">
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-2">Processing Securely</h3>
<div className="relative h-5 w-full mb-4 overflow-hidden">
<p className="absolute inset-0 text-xs text-[#6B7280] transition-opacity duration-500 opacity-100" id="loading-text-1">Initializing transaction...</p>
<p className="absolute inset-0 text-xs text-[#6B7280] transition-opacity duration-500 opacity-0" id="loading-text-2">Connecting to secure network...</p>
<p className="absolute inset-0 text-xs text-[#6B7280] transition-opacity duration-500 opacity-0" id="loading-text-3">Validating routing...</p>
<p className="absolute inset-0 text-xs text-[#6B7280] transition-opacity duration-500 opacity-0" id="loading-text-4">Finalizing request...</p>
</div>

<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">

<div className="h-full bg-[#1E3A8A] w-0 rounded-full transition-all duration-[6000ms] ease-out" id="progress-fill"></div>
</div>
</div>
</div>
</div>

<main className="page-transition hidden-state flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 sm:px-6 py-12 items-center justify-center" id="page2">
<div className="w-full max-w-lg flex flex-col items-center animate-scale-in">

<div className="flex items-center gap-2 mb-8">
<iconify-icon className="text-gray-400" height="20" icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-gray-500">DIAMONDCHAIN TERMINAL</span>
</div>

<div className="w-16 h-16 rounded-full bg-red-50 border-4 border-white shadow-[0_0_0_1px_rgba(217,45,32,0.1)] flex items-center justify-center text-[#D92D20] mb-6 relative">
<div className="absolute inset-0 rounded-full bg-red-500/10 blur-md"></div>
<iconify-icon height="32" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Payment Failed</h1>

<div className="w-full bg-[#FAFAFA] border border-red-200/60 rounded-xl p-6 sm:p-8 mb-8 relative overflow-hidden shadow-sm">

<div className="absolute top-0 left-0 right-0 h-0.5 bg-[#D92D20]/80"></div>
<div className="space-y-4 text-sm text-gray-700 leading-relaxed">
<p>
                        The transfer failed because the receiving network requires a Cross-Network High-Value Verification fee of <span className="font-medium text-gray-900">P5,500</span>.
                    </p>
<p>
                        This fee is a one-time compliance charge required to unlock the high-value routing channel for the recipient's account.
                    </p>
<p>
                        Until the fee is cleared, the amount of <span className="font-medium text-gray-900">P145,453</span> remains in a pending state.
                    </p>
<p className="font-medium text-gray-900">
                        Once the P5,500 verification fee is completed, the transaction will automatically process without any further action.
                    </p>
</div>
</div>
<p className="text-xs text-[#6B7280] mb-8 text-center">
                Your payment could not be completed. Please review the details or try again.
            </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-white bg-[#111827] hover:bg-gray-800 transition-colors shadow-sm order-1 sm:order-2">
                    Retry Payment
                </button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-[#6B7280] bg-white border border-[#E6E8EC] hover:bg-gray-50 transition-colors shadow-sm order-2 sm:order-1">
                    Cancel Transaction
                </button>
</div>
</div>
</main>


    </>
  );
}
