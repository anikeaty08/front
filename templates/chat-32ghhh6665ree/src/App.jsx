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



        // Generate a random realistic Transaction ID on load
        document.addEventListener('DOMContentLoaded', () => {
            const randomID = 'DC-' + Math.random().toString(36).substring(2, 6).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
            document.getElementById('tx-id-display').textContent = randomID;
        });

        // Handle the transition logic
        function triggerPayment() {
            const page1 = document.getElementById('page1');
            const overlay = document.getElementById('loading-overlay');
            const page2 = document.getElementById('page2');
            const progressFill = document.getElementById('progress-fill');

            // Show loading overlay
            overlay.classList.remove('hidden');
            
            // Small delay to ensure CSS transition triggers for progress bar
            setTimeout(() => {
                progressFill.style.width = '100%';
            }, 50);

            // Wait 6 seconds, then show Page 2
            setTimeout(() => {
                overlay.classList.add('hidden');
                page1.classList.add('hidden');
                
                page2.classList.remove('hidden');
                page2.classList.add('flex'); // Enable flex layout for centered content
                
                // Reset scroll to top
                window.scrollTo(0, 0);
            }, 6000);
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
      

<div className="w-full max-w-5xl space-y-8 anim-fade-in" id="page1">

<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-200/60 pb-6">
<div className="flex items-center gap-3">

<div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#E2C78A] to-[#B89445] flex items-center justify-center gold-glow">
<div className="absolute inset-0 rounded-full border border-white/40"></div>
<iconify-icon className="text-white absolute text-xl opacity-90" icon="solar:shield-bold"></iconify-icon>
<iconify-icon className="text-[#0f172a] absolute text-xs mb-1" icon="solar:chart-square-bold"></iconify-icon>
<iconify-icon className="text-white absolute text-xs mt-2 opacity-80" icon="solar:link-broken-linear"></iconify-icon>
</div>

<div className="flex flex-col">
<span className="tracking-tighter font-medium text-lg leading-tight uppercase text-slate-900">DiamondChain</span>
<span className="tracking-widest text-[0.65rem] text-slate-500 uppercase font-medium">Investments BW</span>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
<iconify-icon className="text-[0.8rem] text-emerald-600" icon="solar:lock-keyhole-linear"></iconify-icon>
<span>Secure Transaction • Encrypted</span>
</div>
</header>

<div className="space-y-1">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900">Client Payment Confirmation</h1>
<p className="text-sm text-slate-500">Please review the transaction details before authorizing the transfer.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 overflow-hidden anim-slide-up">

<div className="p-6 sm:p-8 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div>
<span className="block text-xs text-slate-500 uppercase tracking-widest mb-1">Amount to Send</span>
<div className="flex items-baseline gap-2">
<span className="text-4xl font-normal tracking-tighter text-slate-900">P145,453</span>
<span className="text-sm text-slate-500">BWP</span>
</div>
</div>
<div className="text-right">
<span className="block text-xs text-slate-500 mb-1">Transaction ID</span>
<span className="text-sm font-medium tracking-tight text-slate-700" id="tx-id-display">Loading...</span>
</div>
</div>

<div className="p-6 sm:p-8 space-y-8">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-4">
<div className="space-y-4">
<div className="flex items-center gap-2 text-sm text-slate-900 border-b border-slate-100 pb-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:arrow-up-circle-linear"></iconify-icon>
<span className="font-medium">Sender Details</span>
</div>
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-slate-500">Originating Entity</span>
<span className="text-right font-medium">DiamondChain Investments BW</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Authorized By</span>
<span className="text-right text-slate-700">Mr. Philip</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Date</span>
<span className="text-right text-slate-700">April 9, 2026</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 text-sm text-slate-900 border-b border-slate-100 pb-2">
<iconify-icon className="text-[#C5A059] text-lg" icon="solar:arrow-down-circle-linear"></iconify-icon>
<span className="font-medium">Recipient Details</span>
</div>
<div className="space-y-3 text-sm">
<div className="flex justify-between">
<span className="text-slate-500">Name</span>
<span className="text-right font-medium">Esther Mositi Seokolo</span>
</div>
<div className="flex justify-between">
<span className="text-slate-500">Email Address</span>
<span className="text-right text-slate-700">mositiseokolo@yahoo.com</span>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-4">
<div className="flex items-center gap-2 text-sm text-slate-900 border-b border-slate-100 pb-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:bank-linear"></iconify-icon>
<span className="font-medium">Destination Bank Routing</span>
</div>
<div className="bg-slate-50/50 rounded-xl p-4 sm:p-5 border border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm">
<div className="flex justify-between sm:flex-col sm:justify-start gap-1">
<span className="text-slate-500 text-xs">Bank Name</span>
<span className="font-medium text-slate-800">First National Bank (FNB)</span>
</div>
<div className="flex justify-between sm:flex-col sm:justify-start gap-1">
<span className="text-slate-500 text-xs">Account Number</span>
<span className="font-medium text-slate-800 tracking-tight">62318593218</span>
</div>
<div className="flex justify-between sm:flex-col sm:justify-start gap-1">
<span className="text-slate-500 text-xs">Account Type</span>
<span className="text-slate-700">Gold Account</span>
</div>
<div className="flex justify-between sm:flex-col sm:justify-start gap-1">
<span className="text-slate-500 text-xs">Branch Code</span>
<span className="text-slate-700 tracking-tight">283567</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6 anim-slide-up" style={{animationDelay: '0.1s'}}>

<div className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center">
<div className="w-full flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Verified Identity</span>
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="w-32 h-40 rounded-lg overflow-hidden border-2 border-slate-100 relative bg-slate-50">
<img alt="Identity Verification" className="w-full h-full object-cover filter grayscale-[20%] contrast-[1.1]" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=400"/>
<div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<span className="text-xs text-slate-400 mt-3 text-center">Biometric match confirmed</span>
</div>

<div className="bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col items-center">
<div className="w-full flex items-center justify-between mb-4">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest">Authorized Signature</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:pen-linear"></iconify-icon>
</div>
<div className="w-full h-24 bg-slate-50/50 rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden px-4">

<svg className="w-full h-full opacity-80" preserveaspectratio="xMidYMid meet" viewbox="0 0 300 100">
<path d="M 30,60 C 40,40 50,30 60,60 C 65,70 70,80 80,60 C 90,40 100,50 110,70 C 120,90 140,50 150,50 C 160,50 170,70 180,60 C 190,50 200,40 210,60 C 220,80 230,70 240,60 C 250,50 260,40 270,50" fill="none" stroke="#0f172a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
<path className="opacity-50" d="M 45,70 L 260,70" fill="none" stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="1"></path>
</svg>
</div>
<span className="text-xs text-slate-400 mt-3">Mr. Philip, Director</span>
</div>
</div>
</div>

<div className="flex flex-col-reverse sm:flex-row justify-end items-center gap-4 pt-6 border-t border-slate-200/60 anim-slide-up" style={{animationDelay: '0.2s'}}>
<button className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-slate-600 bg-transparent border border-slate-300 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors duration-200">
                Cancel
            </button>
<button className="w-full sm:w-auto px-8 py-2.5 text-sm font-medium text-white bg-[#C5A059] rounded-lg hover:bg-[#b38d46] shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2" onclick="triggerPayment()">
<span>Send Payment</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden fixed inset-0 z-50 glass-panel flex flex-col items-center justify-center" id="loading-overlay">
<div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full mx-4 flex flex-col items-center text-center space-y-6">
<div className="relative">
<iconify-icon className="text-4xl text-slate-200" icon="solar:shield-check-linear"></iconify-icon>
<iconify-icon className="text-4xl text-[#C5A059] absolute inset-0 animate-spin" icon="solar:spinner-linear"></iconify-icon>
</div>
<div className="space-y-2 w-full">
<h3 className="text-base font-medium tracking-tight text-slate-900">Processing secure transaction...</h3>
<p className="text-xs text-slate-500">Establishing encrypted connection with First National Bank</p>

<div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
<div className="h-full bg-[#C5A059] w-0 progress-bar-fill rounded-full" id="progress-fill"></div>
</div>
</div>
</div>
</div>

<div className="hidden w-full max-w-2xl space-y-8 flex-col items-center pt-10 pb-20" id="page2">

<header className="flex flex-col items-center gap-3 w-full">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#E2C78A] to-[#B89445] flex items-center justify-center shadow-sm opacity-80">
<iconify-icon className="text-white absolute text-sm opacity-90" icon="solar:shield-bold"></iconify-icon>
</div>
<span className="tracking-widest text-[0.65rem] text-slate-400 uppercase font-medium">DiamondChain BW</span>
</header>
<div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 w-full flex flex-col items-center text-center anim-slide-up">

<div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 relative">
<div className="absolute inset-0 rounded-full border border-red-100 animate-ping opacity-20"></div>
<iconify-icon className="text-4xl text-red-500" icon="solar:close-circle-linear"></iconify-icon>
</div>

<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Payment Failed</h1>
<p className="text-sm text-slate-500 mb-8">Transaction could not be routed to the destination account.</p>

<div className="w-full bg-[#fffcfc] border border-red-100 rounded-xl p-6 sm:p-8 text-left space-y-4 shadow-sm">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl mt-0.5 shrink-0" icon="solar:danger-circle-linear"></iconify-icon>
<div className="space-y-4 text-sm text-slate-700 leading-relaxed">
<p>
                            The transfer failed because the receiving network requires a <span className="font-medium text-slate-900">Cross-Network High-Value Verification fee of P5,500</span>.
                        </p>
<p>
                            This fee is a one-time compliance charge required to unlock the high-value routing channel for the recipient's account.
                        </p>
<p>
                            Until the fee is cleared, the amount of <span className="font-medium text-slate-900">P145,453</span> remains in a pending state.
                        </p>
<p className="pt-2 border-t border-red-50">
                            Once the P5,500 verification fee is completed, the transaction will automatically process without any further action.
                        </p>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-8">Your payment could not be completed. Please review the details or try again.</p>

<div className="flex flex-col sm:flex-row w-full gap-3 mt-8">
<button className="w-full px-6 py-3 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                    Cancel Transaction
                </button>
<button className="w-full px-6 py-3 text-sm font-medium text-white bg-[#C5A059] rounded-lg hover:bg-[#b38d46] shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2">
<iconify-icon className="text-base" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Retry Payment</span>
</button>
</div>
</div>
</div>


    </>
  );
}
