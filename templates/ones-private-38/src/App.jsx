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



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['Inter', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
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
      

<nav className="fixed top-0 w-full h-16 bg-[#0A0F1E]/90 backdrop-blur-md z-50 border-b border-[#C9A84C]/20 flex items-center justify-between px-6 md:px-12">
<div className="flex-1">
<a className="font-serif text-xl font-medium tracking-tight text-[#F5F0E8] uppercase" href="#">Ones</a>
</div>
<div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm text-[#A8A49E]">
<a className="hover:text-[#F5F0E8] transition-colors" href="#personal">Personal</a>
<span className="w-1 h-1 rounded-full bg-[#C9A84C]/50"></span>
<a className="hover:text-[#F5F0E8] transition-colors" href="#business">Business</a>
<span className="w-1 h-1 rounded-full bg-[#C9A84C]/50"></span>
<a className="hover:text-[#F5F0E8] transition-colors" href="#roadmap">Roadmap</a>
</div>
<div className="flex-1 flex justify-end">
<button className="bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#0A0F1E] font-sans text-sm font-medium px-5 py-2.5 rounded-md transition-colors">
                Join Waitlist
            </button>
</div>
</nav>

<section className="min-h-screen flex flex-col justify-center items-center relative px-6 pt-24" style={{background: 'radial-gradient(circle at top center, rgba(201, 168, 76, 0.08) 0%, transparent 60%)'}}>
<div className="reveal flex flex-col items-center w-full max-w-4xl">

<div className="border-l-2 border-[#C9A84C] pl-3 mb-8">
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase">Ones Financial Platform</span>
</div>

<h1 className="font-serif text-5xl md:text-7xl font-light text-[#F5F0E8] leading-[1.1] tracking-tight text-center max-w-[50rem]">
                Banking, redesigned for<br/>how money moves today.
            </h1>

<p className="font-sans text-base md:text-lg text-[#A8A49E] text-center max-w-[34rem] mt-6 leading-relaxed">
                Ones is a private digital money account for people and businesses — built for global spending, cards, payments, and compliance-aware privacy.
            </p>

<div className="flex flex-col sm:flex-row gap-4 mt-10">
<button className="bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#0A0F1E] font-sans text-sm font-medium px-8 py-3.5 rounded-md transition-colors text-center">
                    Join Waitlist
                </button>
<button className="border border-[#C9A84C] hover:bg-[#C9A84C]/10 text-[#F5F0E8] font-sans text-sm font-medium px-8 py-3.5 rounded-md transition-colors text-center">
                    Explore Business
                </button>
</div>

<div className="flex items-center gap-3 mt-12 opacity-70">
<span className="font-mono text-xs text-[#A8A49E] tracking-[0.2em] uppercase text-center flex flex-col sm:flex-row items-center gap-3">
                    Personal Accounts
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                    Business Accounts
                    <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#C9A84C]"></span>
                    Global Spending
                </span>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-6 md:px-12 border-t border-[#C9A84C]/20 relative" id="personal">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#C9A84C]/20 -translate-x-1/2"></div>

<div className="reveal flex flex-col">
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase mb-4">Personal</span>
<h2 className="font-serif text-4xl font-medium tracking-tight text-[#F5F0E8] mb-10 max-w-[24rem]">
                    Your money, finally in your control.
                </h2>

<div className="bg-[#111827] rounded-xl border border-[#1E2A45] border-t-2 border-t-[#C9A84C] p-6 h-64 relative overflow-hidden flex flex-col justify-between mb-10 shadow-xl group">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C9A84C]/5 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-[#C9A84C]/10"></div>
<div className="flex justify-between items-start z-10">
<div>
<div className="text-xs text-[#A8A49E] font-mono mb-1 tracking-[0.1em]">AVAILABLE BALANCE</div>
<div className="text-3xl text-[#F5F0E8] font-serif tracking-tight">$28,450.00</div>
</div>
<iconify-icon className="text-xl text-[#A8A49E]" icon="solar:eye-closed-linear"></iconify-icon>
</div>
<div className="w-full bg-gradient-to-br from-[#1E2A45]/40 to-[#0A0F1E]/80 rounded-lg border border-[#1E2A45] p-5 flex flex-col justify-between h-28 relative z-10">
<div className="font-serif text-[#F5F0E8]/80 tracking-widest text-sm uppercase">Ones</div>
<div className="flex justify-between items-end">
<div className="text-xs text-[#A8A49E] font-mono tracking-widest">**** 4092</div>
<iconify-icon className="text-[#C9A84C] text-2xl" icon="solar:card-linear"></iconify-icon>
</div>
</div>
</div>
<ul className="flex flex-col gap-4 mb-8">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Global digital spending account</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Ones Spend Card — virtual and physical</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Vault Privacy — private by default</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Long-term savings reserve</span>
</li>
</ul>
<a className="font-sans text-sm font-medium text-[#C9A84C] flex items-center gap-2 hover:opacity-80 transition-opacity w-fit" href="#">
                    Explore Personal <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="reveal flex flex-col mt-12 md:mt-0" style={{transitionDelay: '100ms'}}>
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase mb-4">Business</span>
<h2 className="font-serif text-4xl font-medium tracking-tight text-[#F5F0E8] mb-10 max-w-[24rem]">
                    The financial workspace your business deserves.
                </h2>

<div className="bg-[#111827] rounded-xl border border-[#1E2A45] border-t-2 border-t-[#C9A84C] h-64 relative overflow-hidden flex mb-10 shadow-xl group">
<div className="w-1/3 border-r border-[#1E2A45] p-5 flex flex-col gap-3 bg-[#0A0F1E]/30 z-10">
<div className="text-[0.65rem] text-[#C9A84C] font-mono tracking-widest mb-1">TREASURY ROOMS</div>
<div className="text-xs text-[#F5F0E8] bg-[#1E2A45]/60 px-3 py-2 rounded-md font-medium border border-[#1E2A45]">Operations</div>
<div className="text-xs text-[#A8A49E] px-3 py-2">Vendor Pay</div>
<div className="text-xs text-[#A8A49E] px-3 py-2">Tax Reserve</div>
</div>
<div className="w-2/3 p-5 flex flex-col justify-between relative z-10 bg-[#111827]">
<div>
<div className="text-xs text-[#A8A49E] font-mono mb-1 tracking-[0.1em]">TOTAL TREASURY</div>
<div className="text-3xl text-[#F5F0E8] font-serif tracking-tight">$1,420,000.00</div>
</div>
<div>
<div className="text-[0.65rem] text-[#A8A49E] font-mono tracking-widest mb-3">ACTIVE TEAM CARDS</div>
<div className="flex gap-3">
<div className="flex-1 bg-[#1E2A45]/30 rounded-md border border-[#1E2A45] p-3 transition-colors group-hover:border-[#C9A84C]/30">
<div className="w-2 h-2 bg-[#10B981] rounded-full mb-3"></div>
<div className="h-1.5 w-8 bg-[#F5F0E8]/70 rounded mb-2"></div>
<div className="h-1.5 w-12 bg-[#A8A49E]/40 rounded"></div>
</div>
<div className="flex-1 bg-[#1E2A45]/30 rounded-md border border-[#1E2A45] p-3 transition-colors group-hover:border-[#C9A84C]/30">
<div className="w-2 h-2 bg-[#C9A84C] rounded-full mb-3"></div>
<div className="h-1.5 w-10 bg-[#F5F0E8]/70 rounded mb-2"></div>
<div className="h-1.5 w-6 bg-[#A8A49E]/40 rounded"></div>
</div>
</div>
</div>
</div>
</div>
<ul className="flex flex-col gap-4 mb-8">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Business treasury account</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Treasury Rooms — organized by purpose</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Team cards with spend controls</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2"></div>
<span className="text-base text-[#F5F0E8] leading-relaxed">Invoice and payment management</span>
</li>
</ul>
<a className="font-sans text-sm font-medium text-[#C9A84C] flex items-center gap-2 hover:opacity-80 transition-opacity w-fit" href="#">
                    Explore Business <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-6 md:px-12 border-t border-[#C9A84C]/20">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-16">
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase block mb-4">Personal Account</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#F5F0E8] max-w-[38rem] leading-[1.1]">
                    Your money account,<br/>finally designed around you.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal bg-[#111827] border border-[#1E2A45] border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg">
<iconify-icon className="text-3xl text-[#C9A84C] mb-6" icon="solar:check-circle-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3">Your balance, always ready</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow">Add money, spend with your card, send payments, and track every transaction from one clean account.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#10B981]/15 text-[#10B981] w-fit uppercase">Live</span>
</div>

<div className="reveal bg-[#111827] border border-[#1E2A45] border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg" style={{transitionDelay: '50ms'}}>
<iconify-icon className="text-3xl text-[#C9A84C] mb-6" icon="solar:card-2-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3">Spend anywhere cards are accepted</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow">A modern card connected to your balance. Freeze, set limits, and control spending in real time.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#10B981]/15 text-[#10B981] w-fit uppercase">Live</span>
</div>

<div className="reveal bg-[#111827] border border-[#C9A84C]/40 border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_30px_rgba(201,168,76,0.05)] relative overflow-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A84C]/10 blur-2xl rounded-full"></div>
<iconify-icon className="text-3xl text-[#C9A84C] mb-6 relative z-10" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3 relative z-10">Private by default. Auditable by control.</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow relative z-10">Your main account is never exposed to merchants. You choose what gets revealed and when.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#C9A84C]/15 text-[#C9A84C] w-fit uppercase relative z-10">Signature Feature</span>
</div>

<div className="reveal bg-[#111827] border border-[#1E2A45] border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-3xl text-[#C9A84C] mb-6" icon="solar:scanner-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3">Scan, confirm, pay.</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow">Pay with a scan. No complexity, no errors. Just confirm and done.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#10B981]/15 text-[#10B981] w-fit uppercase">Live</span>
</div>

<div className="reveal bg-[#111827] border border-[#1E2A45] border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-3xl text-[#C9A84C] mb-6" icon="solar:round-arrow-up-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3">Build your long-term reserve.</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow">Separate everyday spending from long-term savings. Your reserve stays untouched until you need it.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#A8A49E]/10 text-[#A8A49E] border border-[#A8A49E]/20 w-fit uppercase">Coming Soon</span>
</div>

<div className="reveal bg-[#111827] border border-[#1E2A45] border-t-2 border-t-[#C9A84C] rounded-lg p-8 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-lg" style={{transitionDelay: '250ms'}}>
<iconify-icon className="text-3xl text-[#C9A84C] mb-6" icon="solar:lock-password-linear"></iconify-icon>
<h3 className="text-lg font-medium text-[#F5F0E8] mb-3">Unlock credit from your balance.</h3>
<p className="text-sm text-[#A8A49E] leading-relaxed mb-8 flex-grow">Secured credit powered by what you've saved. Spend without selling your reserves.</p>
<span className="font-mono text-xs tracking-widest px-2.5 py-1 rounded-sm bg-[#A8A49E]/10 text-[#A8A49E] border border-[#A8A49E]/20 w-fit uppercase">Coming Soon</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-6 md:px-12 bg-[#F5F0E8] text-[#0A0F1E] border-t border-[#C9A84C]/20" id="business">
<div className="max-w-7xl mx-auto">
<div className="reveal mb-16">
<span className="font-mono text-xs text-[#0A0F1E] tracking-[0.2em] uppercase block mb-4">Business Account</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1E] max-w-[38rem] leading-[1.1]">
                    The financial workspace<br/>your business deserves.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm">
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Business Account</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Hold, send, receive, manage balance from one private workspace.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '50ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Treasury Rooms</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Organize money by purpose — operations, vendors, team, tax reserve. Every room separate.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:money-bag-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Business Payments</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Pay vendors and contractors with approval controls and audit-ready records.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:document-text-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Invoices &amp; Links</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Create invoices, share payment links, get paid globally.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:card-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Team Cards</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Issue virtual cards for every team member with limits and freeze controls.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '250ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:check-read-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Approval Workflows</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Every payment goes through the right approval before money moves.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Team Roles</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Give every person exactly the right level of access.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>

<div className="reveal bg-white border border-[#E8E4DC] border-t-2 border-t-[#0A0F1E] rounded-lg p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300 shadow-sm" style={{transitionDelay: '350ms'}}>
<iconify-icon className="text-2xl text-[#C9A84C] mb-5" icon="solar:globus-linear"></iconify-icon>
<h3 className="text-base font-medium text-[#0A0F1E] mb-2">Contractor Payouts</h3>
<p className="text-sm text-[#0A0F1E]/70 leading-relaxed mb-6 flex-grow">Pay global contractors with exportable records and approval flows.</p>
<span className="font-mono text-xs tracking-widest px-2 py-1 rounded-sm bg-[#10B981]/10 text-[#10B981] font-medium w-fit uppercase">Live</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen py-16 md:py-32 px-6 md:px-12 flex flex-col justify-center items-center border-y border-[#C9A84C]/20 bg-[#0A0F1E] relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjAxLCAxNjgsIDc2LCAwLjA1KSIvPjwvc3ZnPg==')] opacity-50 z-0 pointer-events-none"></div>
<div className="reveal max-w-4xl mx-auto flex flex-col items-center relative z-10 w-full">
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase text-center mb-8">Vault Privacy</span>
<h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-[#F5F0E8] text-center leading-[1.1] mb-6">
                Private by default.<br/>Auditable by control.
            </h2>
<p className="font-sans text-base md:text-lg text-[#A8A49E] text-center max-w-[32rem] leading-relaxed mb-16">
                Your financial activity should not become a public record every time you spend. Ones protects your account identity while keeping every transaction auditable when you choose.
            </p>
<div className="flex flex-col md:flex-row w-full justify-between gap-12 md:gap-8 mt-4">
<div className="flex-1 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-[#C9A84C] mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-sans text-base font-medium text-[#F5F0E8] mb-2">Protected by default</h3>
<p className="font-sans text-sm text-[#A8A49E] leading-relaxed">Merchants never see your main account.</p>
</div>
<div className="flex-1 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-[#C9A84C] mb-4" icon="solar:eye-linear"></iconify-icon>
<h3 className="font-sans text-base font-medium text-[#F5F0E8] mb-2">You control disclosure</h3>
<p className="font-sans text-sm text-[#A8A49E] leading-relaxed">Reveal records only when you decide.</p>
</div>
<div className="flex-1 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-[#C9A84C] mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="font-sans text-base font-medium text-[#F5F0E8] mb-2">Compliance ready</h3>
<p className="font-sans text-sm text-[#A8A49E] leading-relaxed">Audit logs available on your terms.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-6 md:px-12 border-t border-[#C9A84C]/20">
<div className="max-w-6xl mx-auto">
<div className="reveal text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#F5F0E8]">
                    Built on infrastructure<br/>that takes money seriously.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
<div className="reveal border-t-2 border-[#C9A84C] pt-8" style={{transitionDelay: '50ms'}}>
<h3 className="font-sans text-lg font-medium text-[#F5F0E8] mb-3">Security first</h3>
<p className="font-sans text-base text-[#A8A49E] leading-relaxed">Passkey login. No passwords to lose. No phrases to remember. Access your account like a modern financial app.</p>
</div>
<div className="reveal border-t-2 border-[#C9A84C] pt-8" style={{transitionDelay: '150ms'}}>
<h3 className="font-sans text-lg font-medium text-[#F5F0E8] mb-3">Private by design</h3>
<p className="font-sans text-base text-[#A8A49E] leading-relaxed">Your spending activity stays yours. Nothing shared without your control. Auditable only when you choose.</p>
</div>
<div className="reveal border-t-2 border-[#C9A84C] pt-8" style={{transitionDelay: '250ms'}}>
<h3 className="font-sans text-lg font-medium text-[#F5F0E8] mb-3">Global by default</h3>
<p className="font-sans text-base text-[#A8A49E] leading-relaxed">Send, spend, and receive across borders without the friction of traditional banking.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-32 px-6 md:px-12 border-t border-[#C9A84C]/20 bg-[#0A0F1E]" id="roadmap">
<div className="max-w-6xl mx-auto">
<div className="reveal text-center mb-16">
<span className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase block mb-4">Product Roadmap</span>
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-[#F5F0E8] leading-[1.1]">
                    Where we are.<br/>Where we're going.
                </h2>
</div>
<div className="reveal flex flex-col md:flex-row">

<div className="flex-1 pr-0 md:pr-12 md:border-r border-[#C9A84C]/20 pb-12 md:pb-0 border-b md:border-b-0 mb-12 md:mb-0">
<h3 className="font-mono text-xs text-[#C9A84C] tracking-[0.2em] uppercase mb-8">Now</h3>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Digital spending account</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Virtual Spend Card</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Vault Privacy</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Business treasury</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Invoices &amp; payment links</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0"></div>
<span className="text-sm text-[#F5F0E8]">Team cards &amp; approvals</span>
</li>
</ul>
</div>

<div className="flex-1 px-0 md:px-12 md:border-r border-[#C9A84C]/20 pb-12 md:pb-0 border-b md:border-b-0 mb-12 md:mb-0">
<h3 className="font-mono text-xs text-[#F5F0E8] tracking-[0.2em] uppercase mb-8">Next</h3>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Savings reserve</span>
</li>
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Personal secured credit</span>
</li>
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Business Line of Credit</span>
</li>
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Contractor payout runs</span>
</li>
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Accounting integrations</span>
</li>
<li className="flex items-center gap-3 opacity-70">
<div className="w-1.5 h-1.5 rounded-full bg-[#A8A49E] shrink-0"></div>
<span className="text-sm text-[#A8A49E]">Fiat rails</span>
</li>
</ul>
</div>

<div className="flex-1 pl-0 md:pl-12">
<h3 className="font-mono text-xs text-[#4B5563] tracking-[0.2em] uppercase mb-8">Future</h3>
<ul className="flex flex-col gap-4">
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full border border-[#4B5563] shrink-0"></div>
<span className="text-sm text-[#4B5563]">Lending marketplace</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full border border-[#4B5563] shrink-0"></div>
<span className="text-sm text-[#4B5563]">Group savings pools</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full border border-[#4B5563] shrink-0"></div>
<span className="text-sm text-[#4B5563]">Partner reward products</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full border border-[#4B5563] shrink-0"></div>
<span className="text-sm text-[#4B5563]">Tokenized business treasury</span>
</li>
<li className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full border border-[#4B5563] shrink-0"></div>
<span className="text-sm text-[#4B5563]">Business API</span>
</li>
</ul>
</div>
</div>
<div className="mt-20 text-center text-xs text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
                Coming soon features subject to eligibility, regulatory approvals, and partner availability. Not all features available in all regions.
            </div>
</div>
</section>

<section className="min-h-[80vh] py-16 px-6 md:px-12 flex flex-col justify-center items-center border-y border-[#C9A84C]/20 bg-[#0A0F1E] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A84C]/10 via-[#0A0F1E] to-[#0A0F1E] pointer-events-none"></div>
<div className="reveal flex flex-col items-center relative z-10 w-full max-w-2xl text-center">
<h2 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-[#F5F0E8] leading-[1.1] mb-6">
                The future of private<br/>digital finance.
            </h2>
<p className="font-sans text-base md:text-lg text-[#A8A49E] leading-relaxed mb-12">
                Join thousands of people and businesses already on the waitlist.
            </p>
<div className="flex flex-col gap-4 w-full sm:w-auto min-w-[16rem]">
<button className="w-full bg-[#C9A84C] hover:bg-[#C9A84C]/90 text-[#0A0F1E] font-sans text-sm font-medium px-8 py-4 rounded-md transition-colors">
                    Join Personal Waitlist
                </button>
<button className="w-full border border-[#C9A84C] hover:bg-[#C9A84C]/10 text-[#F5F0E8] font-sans text-sm font-medium px-8 py-4 rounded-md transition-colors">
                    Explore Business Account
                </button>
<a className="mt-4 font-sans text-sm font-medium text-[#C9A84C] hover:opacity-80 transition-opacity flex items-center justify-center gap-2" href="#">
                    Request Investor Brief <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-16 px-6 md:px-12 bg-[#060C18] border-t border-[#C9A84C]/20">
<div className="max-w-7xl mx-auto flex flex-col">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">

<div className="flex flex-col max-w-xs">
<span className="font-serif text-xl font-medium tracking-tight text-[#F5F0E8] uppercase mb-2">Ones</span>
<p className="font-sans text-sm text-[#A8A49E] leading-relaxed">
                        Private digital finance for people and businesses.
                    </p>
</div>

<div className="flex flex-wrap gap-6 text-sm text-[#A8A49E]">
<a className="hover:text-[#F5F0E8] transition-colors" href="#personal">Personal</a>
<a className="hover:text-[#F5F0E8] transition-colors" href="#business">Business</a>
<a className="hover:text-[#F5F0E8] transition-colors" href="#roadmap">Roadmap</a>
<a className="hover:text-[#F5F0E8] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#F5F0E8] transition-colors" href="#">Terms</a>
</div>

<div>
<button className="border border-[#C9A84C] hover:bg-[#C9A84C]/10 text-[#F5F0E8] font-sans text-xs font-medium px-4 py-2 rounded-md transition-colors uppercase tracking-wider">
                        Join Waitlist
                    </button>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-[#1E2A45] text-xs text-[#4B5563]">
<p>© 2026 Ones. All rights reserved.</p>
<p className="max-w-md md:text-right">Ones is not a bank. Digital money services provided subject to applicable terms and eligibility.</p>
</div>
</div>
</footer>



    </>
  );
}
