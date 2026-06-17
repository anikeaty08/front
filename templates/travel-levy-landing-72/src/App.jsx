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



        function changeStep(step) {
            const s1 = document.getElementById('step-1');
            const s2 = document.getElementById('step-2');
            const s3 = document.getElementById('step-3');
            const progress = document.getElementById('step-progress');
            
            const st1 = document.getElementById('stepper-1');
            const st2 = document.getElementById('stepper-2');
            const st3 = document.getElementById('stepper-3');
            const stText1 = document.getElementById('stepper-text-1');
            const stText2 = document.getElementById('stepper-text-2');
            const stText3 = document.getElementById('stepper-text-3');
            
            const title = document.getElementById('form-title');
            const desc = document.getElementById('form-desc');
            const header = document.getElementById('form-header');
            const badge = document.getElementById('fast-track-badge');
            const backBtn = document.getElementById('back-btn');
            const stepperContainer = document.getElementById('stepper-container');
            
            // Hide all steps
            s1.classList.add('hidden');
            s1.classList.remove('flex');
            s2.classList.add('hidden');
            s2.classList.remove('flex');
            s3.classList.add('hidden');
            s3.classList.remove('flex');
            
            // Stepper reset
            [st1, st2, st3].forEach(el => el.className = 'w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300');
            [stText1, stText2, stText3].forEach(el => el.className = 'text-[10px] font-medium text-slate-400');
            
            if (step === 1) {
                s1.classList.remove('hidden');
                s1.classList.add('flex');
                progress.style.width = '0%';
                st1.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                stText1.className = 'text-[10px] font-medium text-slate-800';
                title.innerText = 'Pay Tourist Levy';
                desc.innerText = 'Complete this form before arrival to skip the queues at Ngurah Rai Airport.';
                header.classList.remove('hidden');
                stepperContainer.classList.remove('hidden');
                badge.classList.remove('hidden');
                backBtn.classList.add('hidden');
            } else if (step === 2) {
                s2.classList.remove('hidden');
                s2.classList.add('flex');
                progress.style.width = '50%';
                st1.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                st2.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                stText1.className = 'text-[10px] font-medium text-slate-800';
                stText2.className = 'text-[10px] font-medium text-slate-800';
                title.innerText = 'Payment Details';
                desc.innerText = 'Select your preferred method to complete the transaction securely.';
                header.classList.remove('hidden');
                stepperContainer.classList.remove('hidden');
                badge.classList.remove('hidden');
                backBtn.classList.remove('hidden');
            } else if (step === 3) {
                s3.classList.remove('hidden');
                s3.classList.add('flex');
                progress.style.width = '100%';
                st1.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                st2.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                st3.className = 'w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300';
                stText1.className = 'text-[10px] font-medium text-slate-800';
                stText2.className = 'text-[10px] font-medium text-slate-800';
                stText3.className = 'text-[10px] font-medium text-slate-800';
                header.classList.add('hidden');
                stepperContainer.classList.add('hidden');
                badge.classList.add('hidden');
                
                // Trigger success icon animation
                const successIcon = document.getElementById('success-icon');
                successIcon.classList.remove('scale-100');
                successIcon.classList.add('scale-0');
                setTimeout(() => {
                    successIcon.classList.remove('scale-0');
                    successIcon.classList.add('scale-100');
                }, 50);
            }
        }
        
        function makePayment() {
            const btn = document.getElementById('pay-btn');
            const text = document.getElementById('pay-text');
            const icon = document.getElementById('pay-icon');
            const loader = document.getElementById('pay-loader');

            text.classList.add('opacity-0');
            icon.classList.add('opacity-0');
            loader.classList.remove('opacity-0');
            btn.classList.add('cursor-not-allowed');

            setTimeout(() => {
                changeStep(3);
                
                // Reset button state for future usage
                setTimeout(() => {
                    text.classList.remove('opacity-0');
                    icon.classList.remove('opacity-0');
                    loader.classList.add('opacity-0');
                    btn.classList.remove('cursor-not-allowed');
                }, 500);
            }, 1500);
        }
    


        function goToStep(stepNumber) {
            const step1 = document.getElementById('step-1');
            const step2 = document.getElementById('step-2');
            const step3 = document.getElementById('step-3');
            
            const title = document.getElementById('form-title');
            const desc = document.getElementById('form-desc');
            const header = document.getElementById('form-header');
            const backBtn = document.getElementById('back-btn');
            const fastTrack = document.getElementById('fast-track-badge');

            // Reset states
            step1.classList.remove('opacity-100', 'translate-x-0', 'pointer-events-auto', 'z-10');
            step1.classList.add('opacity-0', '-translate-x-8', 'pointer-events-none', 'z-0');
            
            step2.classList.remove('opacity-100', 'translate-x-0', 'pointer-events-auto', 'z-10');
            step2.classList.add('opacity-0', 'translate-x-8', 'pointer-events-none', 'z-0');
            
            step3.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto', 'z-20');
            step3.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');

            if (stepNumber === 1) {
                step1.classList.remove('opacity-0', '-translate-x-8', 'pointer-events-none', 'z-0');
                step1.classList.add('opacity-100', 'translate-x-0', 'pointer-events-auto', 'z-10');
                
                title.innerText = 'Pay Tourist Levy';
                desc.innerText = 'Complete this form before arrival to skip the queues at Ngurah Rai Airport.';
                backBtn.classList.add('hidden');
            } 
            else if (stepNumber === 2) {
                step2.classList.remove('opacity-0', 'translate-x-8', 'pointer-events-none', 'z-0');
                step2.classList.add('opacity-100', 'translate-x-0', 'pointer-events-auto', 'z-10');
                
                title.innerText = 'Payment Details';
                desc.innerText = 'Select your preferred method to complete the transaction securely.';
                backBtn.classList.remove('hidden');
            }
            else if (stepNumber === 3) {
                step3.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');
                step3.classList.add('opacity-100', 'scale-100', 'pointer-events-auto', 'z-20');
                
                header.classList.add('hidden');
                fastTrack.classList.add('opacity-0');
                
                // Animate checkmark
                setTimeout(() => {
                    document.getElementById('success-icon').classList.remove('scale-0');
                    document.getElementById('success-icon').classList.add('scale-100');
                }, 100);
            }
        }

        function processPayment() {
            const btn = document.getElementById('pay-btn');
            const text = document.getElementById('pay-text');
            const icon = document.getElementById('pay-icon');
            const loader = document.getElementById('pay-loader');

            // Show loading state
            text.classList.add('opacity-0');
            icon.classList.add('opacity-0');
            loader.classList.remove('opacity-0');
            btn.classList.add('cursor-not-allowed');

            // Simulate API call
            setTimeout(() => {
                goToStep(3);
                
                // Reset button state for future
                setTimeout(() => {
                    text.classList.remove('opacity-0');
                    icon.classList.remove('opacity-0');
                    loader.classList.add('opacity-0');
                    btn.classList.remove('cursor-not-allowed');
                }, 500);
            }, 1500);
        }

        function resetForm() {
            document.getElementById('form-header').classList.remove('hidden');
            document.getElementById('fast-track-badge').classList.remove('opacity-0');
            document.getElementById('success-icon').classList.remove('scale-100');
            document.getElementById('success-icon').classList.add('scale-0');
            goToStep(1);
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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="index.html">LOVEBALI</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="about.html">About</a>
<a className="hover:text-slate-900 transition-colors" href="destinations.html">Destinations</a>
<a className="hover:text-slate-900 transition-colors" href="events.html">Events</a>
<a className="hover:text-slate-900 transition-colors" href="support.html">Support</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="status.html">Check Status</a>
<a className="bg-[#FA3A57] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#E02D47] transition-colors shadow-sm" href="#pay-levy">Pay Levy</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none opacity-40">
<div className="absolute top-20 left-10 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                    Preserving the Island of Gods
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Travel with purpose. <br className="hidden lg:block"/> Protect Bali's heritage.
                </h1>
<p className="text-lg text-slate-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Welcome to Bali. Starting February 2024, international visitors are required to pay a one-time tourist levy to support cultural preservation and environmental protection.
                </p>
<div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-600 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Official Gov Portal
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-teal-600 text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                        IDR 150,000 / Person
                    </div>
</div>
</div>

<div className="sm:p-8 min-h-[580px] sm:min-h-[520px] flex flex-col bg-white w-full max-w-md border-slate-200/60 border rounded-[2rem] p-6 relative shadow-[0_8px_40px_rgb(0,0,0,0.04)]" id="pay-levy">
<style>
        @keyframes customFadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .custom-fade-in {
            animation: customFadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
    </style>
<div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm flex items-center gap-1 transition-opacity duration-300" id="fast-track-badge">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Fast Track
    </div>

<div className="mb-8 relative z-0" id="stepper-container">
<div className="absolute left-0 top-3.5 w-full h-1 bg-slate-100 rounded-full -z-10"></div>
<div className="absolute left-0 top-3.5 h-1 bg-[#FA3A57] rounded-full -z-10 transition-all duration-500 ease-out w-0" id="step-progress"></div>
<div className="flex items-start justify-between px-1">
<div className="flex flex-col items-center gap-2 bg-white px-2 cursor-pointer" onclick="changeStep(1)">
<div className="w-7 h-7 rounded-full bg-[#FA3A57] text-white flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300" id="stepper-1">1</div>
<span className="text-[10px] font-medium text-slate-800" id="stepper-text-1">Details</span>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2">
<div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300" id="stepper-2">2</div>
<span className="text-[10px] font-medium text-slate-400" id="stepper-text-2">Payment</span>
</div>
<div className="flex flex-col items-center gap-2 bg-white px-2">
<div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-semibold shadow-sm transition-colors duration-300" id="stepper-3">
<iconify-icon icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400" id="stepper-text-3">Done</span>
</div>
</div>
</div>
<div className="mb-6" id="form-header">
<div className="hidden mb-4" id="back-btn">
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" onclick="changeStep(1)" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to details
            </button>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2 transition-all" id="form-title">Pay Tourist Levy</h2>
<p className="text-sm text-slate-500 transition-all" id="form-desc">Complete this form before arrival to skip the queues at Ngurah Rai Airport.</p>
</div>
<div className="relative flex-1 flex flex-col">

<div className="w-full flex flex-col justify-between flex-1 custom-fade-in" id="step-1">
<div className="space-y-4 sm:space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Full Name (as on Passport)</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Passport Number</label>
<input className="w-full px-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="A12345678" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Arrival Date</label>
<div className="relative">
<input className="w-full pl-4 pr-3 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200 appearance-none" type="date"/>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2.5 bg-slate-50/50 border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="john@example.com" type="email"/>
</div>
</div>
<label className="flex items-start gap-3 cursor-pointer group pt-2">
<div className="relative flex items-center mt-0.5 shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-slate-300 bg-white peer-checked:bg-[#FA3A57] peer-checked:border-[#FA3A57] transition-colors group-hover:border-[#E02D47]"></div>
<iconify-icon className="absolute inset-0 text-white opacity-0 peer-checked:opacity-100 flex items-center justify-center text-xs transition-opacity" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 leading-relaxed">I agree to the <a className="text-slate-900 hover:underline" href="terms.html">Terms of Service</a> and confirm my details are correct.</span>
</label>
</div>
<button className="w-full bg-[#FA3A57] text-white font-medium text-sm py-3 rounded-xl hover:bg-[#E02D47] focus:ring-4 focus:ring-[#FA3A57]/20 transition-all duration-200 flex items-center justify-center gap-2 mt-6" onclick="changeStep(2)" type="button">
                Continue to Payment
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="w-full hidden flex-col justify-between flex-1 custom-fade-in" id="step-2">
<div className="space-y-6">

<div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 border border-slate-200/80">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100/50 flex items-center justify-center text-teal-600">
<iconify-icon className="text-lg" icon="solar:ticket-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500">Total Amount</p>
<p className="text-sm font-semibold text-slate-900">IDR 150,000</p>
</div>
</div>
<span className="text-xs font-medium text-slate-400">1 Person</span>
</div>

<div className="space-y-3">
<label className="block text-xs font-medium text-slate-700 mb-2">Select Payment Method</label>
<label className="relative flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer sr-only" name="payment_method" type="radio"/>
<div className="w-4 h-4 rounded-full border border-slate-300 bg-white peer-checked:border-[#FA3A57] transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-[#FA3A57] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium text-slate-900">Credit / Debit Card</span>
</div>
<div className="flex gap-1 opacity-60">
<iconify-icon className="text-lg text-slate-600" icon="solar:card-linear"></iconify-icon>
</div>
</label>
<div className="pl-7 pr-2 space-y-3">
<div className="relative">
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="Card number" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="MM/YY" type="text"/>
<input className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#FA3A57]/20 focus:border-[#FA3A57] transition-all duration-200" placeholder="CVC" type="text"/>
</div>
</div>
<label className="relative flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors group mt-2">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" name="payment_method" type="radio"/>
<div className="w-4 h-4 rounded-full border border-slate-300 bg-white peer-checked:border-[#FA3A57] transition-colors"></div>
<div className="absolute w-2 h-2 rounded-full bg-[#FA3A57] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm font-medium text-slate-900">QRIS / E-Wallet</span>
</div>
<iconify-icon className="text-lg text-slate-600 opacity-60" icon="solar:qr-code-linear"></iconify-icon>
</label>
</div>
</div>
<button className="w-full bg-[#FA3A57] text-white font-medium text-sm py-3 rounded-xl hover:bg-[#E02D47] focus:ring-4 focus:ring-[#FA3A57]/20 transition-all duration-200 flex items-center justify-center gap-2 mt-6 relative overflow-hidden" id="pay-btn" onclick="makePayment()" type="button">
<span id="pay-text">Pay IDR 150,000</span>
<iconify-icon icon="solar:lock-password-linear" id="pay-icon"></iconify-icon>
<div className="absolute inset-0 bg-[#FA3A57] flex items-center justify-center opacity-0 transition-opacity duration-200" id="pay-loader">
<iconify-icon className="animate-spin text-xl" icon="solar:spinner-linear"></iconify-icon>
</div>
</button>
</div>

<div className="w-full hidden flex-col items-center justify-center flex-1 bg-white custom-fade-in" id="step-3">
<div className="w-16 h-16 rounded-full bg-[#FA3A57]/10 flex items-center justify-center text-[#FA3A57] mb-6 transition-transform duration-500 scale-0" id="success-icon">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="w-full bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center relative overflow-hidden mb-6">
<div className="absolute top-0 left-0 w-full h-1 bg-[#FA3A57]"></div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-4">Official Levy Voucher</p>
<div className="w-32 h-32 mx-auto bg-white border border-slate-100 rounded-xl p-2 mb-4">
<img alt="QR Code" className="w-full h-full mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="bg-slate-50 rounded-lg py-2 px-4 inline-block mb-2">
<p className="font-mono text-sm font-semibold text-slate-800 tracking-wider">LB-2024-8891A</p>
</div>
<p className="text-xs text-slate-500">John Doe • Valid 60 Days</p>
</div>
<div className="w-full flex gap-3">
<a className="flex-1 bg-white border border-slate-200 text-slate-700 font-medium text-sm py-2.5 rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="voucher-print.html" target="_blank">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Print
                </a>
<a className="flex-1 bg-[#FA3A57] text-white font-medium text-sm py-2.5 rounded-xl hover:bg-[#E02D47] transition-colors flex items-center justify-center gap-2 shadow-sm" href="voucher-download.html">
<iconify-icon icon="solar:download-linear"></iconify-icon> Save PDF
                </a>
</div>
<button className="mt-4 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors" onclick="changeStep(1)">Start new application</button>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why Love Bali?</h2>
<p className="text-base text-slate-500">Your contribution directly funds initiatives that keep Bali beautiful, cultural, and accessible for generations to come.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="block p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:shadow-sm transition-shadow" href="about-nature.html">
<div className="w-12 h-12 rounded-2xl bg-teal-100/50 flex items-center justify-center text-teal-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Nature Preservation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Protecting Bali's unique ecosystems, managing waste efficiently, and maintaining pristine beaches and lush forests.</p>
</a>

<a className="block p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:shadow-sm transition-shadow" href="about-culture.html">
<div className="w-12 h-12 rounded-2xl bg-orange-100/50 flex items-center justify-center text-orange-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Cultural Heritage</h3>
<p className="text-sm text-slate-500 leading-relaxed">Supporting local artisans, restoring historic temples, and preserving traditional Balinese arts and ceremonies.</p>
</a>

<a className="block p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:shadow-sm transition-shadow" href="about-infrastructure.html">
<div className="w-12 h-12 rounded-2xl bg-blue-100/50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:routing-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Quality Infrastructure</h3>
<p className="text-sm text-slate-500 leading-relaxed">Improving public transportation, upgrading tourist facilities, and ensuring a safer, more comfortable travel experience.</p>
</a>
</div>
</div>
</section>

<section className="py-16 bg-[#FAFAFA]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Supported by Official Partners</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
<span className="text-xl font-semibold tracking-tighter text-slate-800">BANK BPD BALI</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">ANGKASA PURA</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">GARUDA INDONESIA</span>
<span className="text-xl font-semibold tracking-tighter text-slate-800">WONDERFUL INDONESIA</span>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="places">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Places of Interest</h2>
<p className="text-base text-slate-500">Discover the magic of Bali, supported by your contribution.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-teal-600 transition-colors" href="destinations.html">
                    Explore all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="block group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 cursor-pointer" href="destination-detail.html">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1554481923-a6918bd997bc?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-xl font-semibold tracking-tight mb-1 group-hover:text-teal-300 transition-colors">Ubud Rice Terraces</h3>
<div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Gianyar, Bali
                        </div>
</div>
</a>

<a className="block group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 cursor-pointer" href="destination-detail.html">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1537996194454-054522a188f5?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-xl font-semibold tracking-tight mb-1 group-hover:text-teal-300 transition-colors">Uluwatu Temple</h3>
<div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Badung, Bali
                        </div>
</div>
</a>

<a className="block group relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-100 cursor-pointer" href="destination-detail.html">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white text-xl font-semibold tracking-tight mb-1 group-hover:text-teal-300 transition-colors">Nusa Penida</h3>
<div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Klungkung, Bali
                        </div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">

<div className="flex flex-col">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Virtual Destination Tour 360</h2>
<p className="text-sm text-slate-500 mb-6">Experience the beauty of Bali from anywhere in the world.</p>
<a className="relative block w-full flex-1 min-h-[300px] rounded-3xl overflow-hidden bg-slate-900 group cursor-pointer shadow-sm" href="tour-360.html">
<div className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-50 transition-opacity duration-500" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&amp'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] mix-blend-overlay pointer-events-none"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl" icon="solar:panorama-linear"></iconify-icon>
</div>
<span className="text-white font-medium text-sm tracking-wide">ENTER 360° EXPERIENCE</span>
</div>
</a>
</div>

<div className="flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Authorized Money Changers</h2>
<p className="text-sm text-slate-500">Safe, verified, and government-approved.</p>
</div>
<iconify-icon className="text-teal-600 text-3xl opacity-20" icon="solar:verified-check-linear"></iconify-icon>
</div>
<div className="flex-1 bg-white border border-slate-200/60 rounded-3xl p-2 shadow-sm flex flex-col gap-2">

<div className="p-4 rounded-2xl hover:bg-slate-50 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-slate-900">PT. Dirgahayu Valuta Prima</h4>
<p className="text-xs text-slate-500 mt-0.5">Jl. Legian No.141, Kuta</p>
</div>
<a className="text-teal-600 text-xs font-medium hover:underline py-1" href="money-changer-detail.html">Directions</a>
</div>
<div className="h-px bg-slate-100 mx-4"></div>

<div className="p-4 rounded-2xl hover:bg-slate-50 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-slate-900">Central Kuta Money Exchange</h4>
<p className="text-xs text-slate-500 mt-0.5">Multiple Locations</p>
</div>
<a className="text-teal-600 text-xs font-medium hover:underline py-1" href="money-changer-detail.html">View Map</a>
</div>
<div className="h-px bg-slate-100 mx-4"></div>

<div className="p-4 rounded-2xl hover:bg-slate-50 transition-colors flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon className="text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="flex-1">
<h4 className="text-sm font-semibold text-slate-900">BMC Money Changer</h4>
<p className="text-xs text-slate-500 mt-0.5">Jl. Raya Kerobokan, Seminyak</p>
</div>
<a className="text-teal-600 text-xs font-medium hover:underline py-1" href="money-changer-detail.html">Directions</a>
</div>
<a className="block text-center w-full mt-2 py-3 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="money-changers.html">
                        View Complete List
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">See what is happening in Bali right now</h2>
<p className="text-base text-slate-500">Immerse yourself in local culture with these upcoming events and ceremonies.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="block group cursor-pointer" href="event-detail.html">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1604998103924-89e0111f26b2?auto=format&amp'}}></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-slate-900 shadow-sm">
                            Mar 11, 2024
                        </div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">Nyepi Day (Day of Silence)</h3>
<p className="text-xs text-slate-500 line-clamp-2">Experience the profound silence as the entire island shuts down for 24 hours of self-reflection.</p>
</a>

<a className="block group cursor-pointer" href="event-detail.html">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&amp'}}></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-slate-900 shadow-sm">
                            Jun 15 - Jul 13
                        </div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">Bali Arts Festival</h3>
<p className="text-xs text-slate-500 line-clamp-2">A full month of daily performances, handicraft exhibitions, and culinary delights in Denpasar.</p>
</a>

<a className="block group cursor-pointer" href="event-detail.html">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&amp'}}></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-slate-900 shadow-sm">
                            Aug 02 - 04
                        </div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">Sanur Village Festival</h3>
<p className="text-xs text-slate-500 line-clamp-2">Celebrating coastal lifestyle with music, food stalls, kite flying, and water sports competitions.</p>
</a>

<a className="block group cursor-pointer" href="event-detail.html">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-4 bg-slate-100">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&amp'}}></div>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wider uppercase text-slate-900 shadow-sm">
                            Oct 23 - 27
                        </div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1 group-hover:text-teal-600 transition-colors">Ubud Writers &amp; Readers</h3>
<p className="text-xs text-slate-500 line-clamp-2">Southeast Asia's leading festival of words and ideas, gathering global authors and artists.</p>
</a>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-white mb-6 block" href="index.html">LOVEBALI</a>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Official platform for the Bali Provincial Government Tourist Levy. Preserving culture, protecting nature.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://lovebali.go.id"><iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="mailto:support@lovebali.go.id"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Information</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="about.html">About the Levy</a></li>
<li><a className="hover:text-white transition-colors" href="exemptions.html">Exemptions</a></li>
<li><a className="hover:text-white transition-colors" href="how-to-pay.html">How to Pay</a></li>
<li><a className="hover:text-white transition-colors" href="faq.html">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Explore</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="destinations.html">Destinations</a></li>
<li><a className="hover:text-white transition-colors" href="events.html">Upcoming Events</a></li>
<li><a className="hover:text-white transition-colors" href="money-changers.html">Money Changers</a></li>
<li><a className="hover:text-white transition-colors" href="guidelines.html">Tourist Guidelines</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 tracking-tight">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:1500000"><iconify-icon icon="solar:phone-linear"></iconify-icon> 1500-000</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:support@lovebali.go.id"><iconify-icon icon="solar:letter-linear"></iconify-icon> support@lovebali.go.id</a></li>
<li className="flex items-start gap-2 mt-4 text-xs">
<iconify-icon className="mt-0.5 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>Kantor Gubernur Bali<br/>Jl. Basuki Rahmat No.1, Denpasar</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 Provincial Government of Bali. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white transition-colors" href="privacy.html">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="terms.html">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
