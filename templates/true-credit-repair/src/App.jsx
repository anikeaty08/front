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



      const termsModal = document.getElementById('termsModal');
      const termsModalBackdrop = document.getElementById('termsModalBackdrop');
      const termsModalContent = document.getElementById('termsModalContent');

      function openTermsModal() {
        termsModal.classList.remove('hidden');
        void termsModal.offsetWidth;
        termsModalBackdrop.classList.remove('opacity-0');
        termsModalContent.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        document.body.style.overflow = 'hidden';
      }

      function closeTermsModal() {
        termsModalBackdrop.classList.add('opacity-0');
        termsModalContent.classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          termsModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      }
    


      const calendarModal = document.getElementById('calendarModal');
      const calendarModalBackdrop = document.getElementById('calendarModalBackdrop');
      const calendarModalContent = document.getElementById('calendarModalContent');

      function openCalendarModal() {
        calendarModal.classList.remove('hidden');
        void calendarModal.offsetWidth;
        calendarModalBackdrop.classList.remove('opacity-0');
        calendarModalContent.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        document.body.style.overflow = 'hidden';
      }

      function closeCalendarModal() {
        calendarModalBackdrop.classList.add('opacity-0');
        calendarModalContent.classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          calendarModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      }
    


      const crModal = document.getElementById('crModal');
      const crModalBackdrop = document.getElementById('crModalBackdrop');
      const crModalContent = document.getElementById('crModalContent');
      const crStep1 = document.getElementById('crStep1');
      const crStep2 = document.getElementById('crStep2');
      const crStep3 = document.getElementById('crStep3');

      function openCRModal(step = 1) {
        crModal.classList.remove('hidden');
        void crModal.offsetWidth;
        crModalBackdrop.classList.remove('opacity-0');
        crModalContent.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        document.body.style.overflow = 'hidden';
        showCRStep(step);
      }

      function closeCRModal() {
        crModalBackdrop.classList.add('opacity-0');
        crModalContent.classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          crModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      }

      function showCRStep(step) {
        crStep1.classList.add('hidden');
        crStep2.classList.add('hidden');
        crStep3.classList.add('hidden');
        if (step === 1) crStep1.classList.remove('hidden');
        if (step === 2) crStep2.classList.remove('hidden');
        if (step === 3) crStep3.classList.remove('hidden');
      }

      function crSelectYes() {
        showCRStep(2);
      }

      function crSelectNo() {
        showCRStep(3);
      }
    


      const affiliateModal = document.getElementById('affiliateModal');
      const affiliateModalBackdrop = document.getElementById('affiliateModalBackdrop');
      const affiliateModalContent = document.getElementById('affiliateModalContent');

      function openAffiliateModal() {
        affiliateModal.classList.remove('hidden');
        void affiliateModal.offsetWidth;
        affiliateModalBackdrop.classList.remove('opacity-0');
        affiliateModalContent.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        document.body.style.overflow = 'hidden';
      }

      function closeAffiliateModal() {
        affiliateModalBackdrop.classList.add('opacity-0');
        affiliateModalContent.classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          affiliateModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
      }
    


      const privacyModal = document.getElementById('privacyModal');
      const privacyModalBackdrop = document.getElementById('privacyModalBackdrop');
      const privacyModalContent = document.getElementById('privacyModalContent');

      function openPrivacyModal() {
        privacyModal.classList.remove('hidden');
        void privacyModal.offsetWidth;
        privacyModalBackdrop.classList.remove('opacity-0');
        privacyModalContent.classList.remove('opacity-0', 'translate-y-4', 'scale-95');
        document.body.style.overflow = 'hidden';
      }

      function closePrivacyModal() {
        privacyModalBackdrop.classList.add('opacity-0');
        privacyModalContent.classList.add('opacity-0', 'translate-y-4', 'scale-95');
        setTimeout(() => {
          privacyModal.classList.add('hidden');
          document.body.style.overflow = '';
        }, 300);
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
      
<div className="max-w-6xl mx-auto px-5">

<nav className="flex items-center justify-between py-8">
<a className="flex items-center gap-3 group relative z-10" href="#">
<div className="flex flex-col items-start justify-center relative">
<span className="font-sans text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 drop-shadow-sm pb-1 relative z-10 font-normal">
              TRUE CREDIT
            </span>
<div className="flex items-center gap-3 w-full mt-[-6px]">
<div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-zinc-500 to-zinc-500"></div>
<span className="text-zinc-400 text-xs tracking-[0.25em] uppercase font-light leading-none">
                Advisors AI
              </span>
<div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-zinc-500 to-zinc-500"></div>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-3 bg-sky-500/40 blur-[10px] rounded-full z-0"></div>
</div>
</a>
<div className="hidden md:flex items-center gap-4">
<a className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors font-light tracking-tight" href="#how">
            How it works
          </a>
<a className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors font-light tracking-tight" href="#affiliate">
            Affiliate Program
          </a>
<a className="px-3 py-2 text-sm text-zinc-400 hover:text-white transition-colors font-light tracking-tight" href="#contact">
            Contact Us
          </a>
</div>
</nav>

<div className="grid lg:grid-cols-12 gap-8 items-start pt-4 pb-20">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] text-xs font-light text-sky-400 tracking-tight">
<span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse"></span>
            AI-Powered Credit Strategy
          </div>
<h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-[1.1]">
            Fix your credit &amp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
              rebuild
            </span>
            your future.
          </h1>
<p className="text-xl text-zinc-400 max-w-xl leading-relaxed font-light">
            We review your credit profile, challenge unverified items, and build
            stronger habits with personalized AI guidance.
            <span className="text-zinc-200">
              Start with a zero-pressure consultation today.
            </span>
</p>
<div className="flex flex-wrap gap-4 pt-4">

<button className="shadow-sky-500/10 hover:scale-[1.02] transition-transform text-base font-normal text-white tracking-tight bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-xl" onclick="openCRModal(1)">
              Get Free Credit Review
            </button>

<button className="inline-flex items-center px-8 py-4 rounded-xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] font-normal hover:bg-white/10 transition-all text-base tracking-tight cursor-pointer" onclick="openCalendarModal()">
              Book Consultation
            </button>

<a className="inline-flex items-center px-8 py-4 rounded-xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] font-normal hover:bg-white/10 transition-all text-base tracking-tight cursor-pointer" href="#contact">
              Contact Us
            </a>
</div>
<div className="grid sm:grid-cols-3 gap-4 pt-10">
<div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] space-y-2">
<iconify-icon className="text-sky-400 text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-normal tracking-tight">Secure Process</h3>
<p className="text-sm text-zinc-500 font-light">
                Bank-level encryption for your data.
              </p>
</div>
<div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] space-y-2">
<iconify-icon className="text-sky-400 text-2xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-normal tracking-tight">Clear Roadmap</h3>
<p className="text-sm text-zinc-500 font-light">
                Step-by-step action plan provided.
              </p>
</div>
<div className="p-4 rounded-2xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] space-y-2">
<iconify-icon className="text-sky-400 text-2xl" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-normal tracking-tight">Expert Support</h3>
<p className="text-sm text-zinc-500 font-light">
                Human specialists + AI precision.
              </p>
</div>
</div>
</div>

<div className="lg:col-span-5 bg-white/[0.03] backdrop-blur-[12px] rounded-3xl p-4 border border-white/[0.08] shadow-2xl relative overflow-hidden hidden md:block" id="video">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] opacity-5 blur-3xl"></div>
<div className="relative z-10 w-full min-h-[450px] rounded-2xl overflow-hidden bg-zinc-900/50 border border-white/[0.04]">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover border-0" controls="" loop="" muted="" playsinline="" src="https://assets.cdn.filesafe.space/L5U0fXHdnNC9DYWKCYKj/media/69b340d4eba48791590227d3.mp4"></video>
</div>
</div>
</div>

<section className="py-24 border-t border-white/[0.08]" id="how">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-normal tracking-tight mb-4">
            A Smarter Path to Better Credit
          </h2>
<p className="text-base text-zinc-400 leading-relaxed font-light">
            Our process is transparent, legally compliant, and focuses on
            long-term financial health rather than quick fixes.
          </p>
</div>
<div className="grid md:grid-cols-4 gap-6">
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-medium text-lg group-hover:bg-sky-500/20 transition-colors">
              1
            </div>
<h3 className="font-normal text-base tracking-tight">Deep Audit</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
              Our AI scans your entire report for inaccuracies and leverage
              points often missed by the naked eye.
            </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium text-lg group-hover:bg-indigo-500/20 transition-colors">
              2
            </div>
<h3 className="font-normal text-base tracking-tight">
              Custom Strategy
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
              We build a personalized challenge sequence based on federal
              consumer protection laws.
            </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 font-medium text-lg group-hover:bg-purple-500/20 transition-colors">
              3
            </div>
<h3 className="font-normal text-base tracking-tight">Active Dispute</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
              Our specialists handle the heavy lifting of communicating with
              creditors and bureaus.
            </p>
</div>
<div className="space-y-4 group">
<div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium text-lg group-hover:bg-emerald-500/20 transition-colors">
              4
            </div>
<h3 className="font-normal text-base tracking-tight">Habit Building</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
              We guide you on utilization and payment timing to ensure your
              score stays healthy long-term.
            </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.08]" id="about">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-normal tracking-tight mb-4">
            About True Credit AI
          </h2>
<p className="text-base text-zinc-400 leading-relaxed font-light">
            We believe everyone deserves a second chance at financial freedom.
            We combine cutting-edge AI technology with deep expertise in
            consumer protection laws to democratize credit repair.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-3xl p-8">
<h3 className="text-xl font-normal tracking-tight mb-3">Our Mission</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
              To empower Americans with the tools, knowledge, and actionable
              strategies needed to restore their credit and build a stronger
              financial future. We've replaced outdated, slow processes with an
              intelligent, data-driven approach that gets results.
            </p>
</div>
<div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-3xl p-8">
<h3 className="text-xl font-normal tracking-tight mb-3">
              Why We're Different
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">
              Traditional credit repair can be costly and opaque. True Credit AI
              provides full transparency, real-time strategy updates, and a
              personalized roadmap tailored to your exact credit profile—all
              designed to accelerate your path to better credit.
            </p>
</div>
</div>
</section>
<section className="py-24 border-t border-white/[0.08]">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<h2 className="text-3xl font-normal tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
<p className="text-base text-zinc-500 leading-relaxed font-light">
              Everything you need to know about the process and our services.
            </p>
</div>
<div className="lg:col-span-8 space-y-4">
<details className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl group">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between [&amp;::-webkit-details-marker]:hidden">
<span className="font-normal text-sm tracking-tight">
                  How long does the process take?
                </span>
<iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4 mx-6">
                Timelines vary by individual, but most clients see significant
                movement within 35 to 90 days. Credit restoration is a marathon,
                not a sprint, and depends on bureau response times.
              </div>
</details>
<details className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl group">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between [&amp;::-webkit-details-marker]:hidden">
<span className="font-normal text-sm tracking-tight">
                  Do you guarantee a specific score increase?
                </span>
<iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4 mx-6">
                We cannot guarantee specific credit score increases because
                every credit profile is unique. Our goal is to analyze your
                report, identify opportunities, and help guide you toward
                stronger credit.
              </div>
</details>
<details className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-2xl group">
<summary className="flex cursor-pointer list-none pt-6 pr-6 pb-6 pl-6 items-center justify-between [&amp;::-webkit-details-marker]:hidden">
<span className="font-normal text-sm tracking-tight">
                  Is my data secure with AI?
                </span>
<iconify-icon className="group-open:rotate-180 transition-transform text-zinc-500 text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-base text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4 mx-6">
                Absolutely. Our AI operates within a sandboxed, SOC-2 compliant
                environment. Your personal information is never used for
                training public models.
              </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.08]" id="affiliate">
<div className="bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] opacity-10 blur-3xl rounded-full"></div>
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#51F6B5] to-[#5CC8FF] opacity-10 blur-3xl rounded-full"></div>
<div className="relative z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] text-xs font-light text-emerald-400 tracking-tight mx-auto">
<iconify-icon className="text-sm" icon="solar:wallet-money-linear"></iconify-icon>
              Affiliate Program
            </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] max-w-3xl mx-auto">
              Partner With True Credit AI &amp;
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">
                Earn Commission
              </span>
              for Every Referred Client
            </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
              Know people who need help fixing their credit? Refer them to True
              Credit AI and earn commission when they enroll. It’s a simple way
              to help others improve their credit while creating an additional
              stream of income.
            </p>
<div className="flex justify-center pt-4">
<button className="shadow-sky-500/10 hover:scale-[1.02] transition-transform text-white bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] rounded-xl pt-3 pr-8 pb-3 pl-8 shadow-xl flex flex-col items-center" onclick="openAffiliateModal()">
<span className="text-base font-normal tracking-tight">
                  Become an Affiliate
                </span>
<span className="text-xs text-white/80 font-light mt-0.5">
                  Start Referring Today
                </span>
</button>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/[0.08]" id="contact">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<div className="">
<h2 className="text-3xl font-normal tracking-tight mb-4">
                Get your Free Credit Action Plan
              </h2>
<p className="text-base text-zinc-400 leading-relaxed font-light">
                Prefer to reach out directly? Fill out our secure form, and a
                certified credit advisor will review your profile and contact
                you with a personalized strategy.
              </p>
</div>
<div className="space-y-4 pt-2">
<div className="flex items-center gap-4 text-zinc-300">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] flex items-center justify-center text-sky-400">
<iconify-icon className="text-2xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-0.5 font-light">
                    Email Us
                  </div>
<div className="text-sm font-normal tracking-tight">
                    Advisors@truecreditai.com
                  </div>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-300">
<div className="w-12 h-12 rounded-2xl bg-white/[0.03] backdrop-blur-[12px] border border-white/[0.08] flex items-center justify-center text-sky-400">
<iconify-icon className="text-2xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mb-0.5 font-light">
                    Call Us
                  </div>
<div className="text-sm font-normal tracking-tight">
                    +1 833-762-4291
                  </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="backdrop-blur-[12px] border-white/[0.08] sm:p-6 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative shadow-2xl">
<div className="w-full h-[490px]">
<div className="ep-iFrameContainer" id="inline-zD5TDW0bb1W7wxAUhObl-div" style={{borderRadius: '3px', display: 'block'}}>
<div className="ep-wrapper" id="inline-zD5TDW0bb1W7wxAUhObl-wrapper" style={{borderRadius: '3px'}}>
<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="zD5TDW0bb1W7wxAUhObl" data-form-name="Optin Form" data-height="490" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-zD5TDW0bb1W7wxAUhObl" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-zD5TDW0bb1W7wxAUhObl" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/zD5TDW0bb1W7wxAUhObl" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', borderRadius: '3px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Optin Form"></iframe>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/[0.08] space-y-8">
<div className="flex flex-wrap justify-between gap-8">
<div className="max-w-xs space-y-4">
<div className="flex items-center gap-3 group">
<div className="flex flex-col justify-center">
<span className="font-sans text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400 leading-none pb-0.5 font-normal">
                  TRUE CREDIT
                </span>
<span className="text-zinc-400 text-xs tracking-[0.2em] uppercase font-light leading-none mt-0.5">
                  Advisors AI
                </span>
</div>
</div>
<p className="text-sm text-zinc-500 leading-relaxed font-light">
              Smart Credit. Powered by AI. Helping Americans navigate the
              complexities of credit reporting.
            </p>
</div>
<div className="flex gap-16">
<div className="space-y-3">
<h4 className="text-xs font-medium text-zinc-300 uppercase tracking-widest">
                Company
              </h4>
<ul className="text-sm text-zinc-500 space-y-2 font-light">
<li className="">
<a className="hover:text-sky-400" href="#about">About Us</a>
</li>
<li className="">
<a className="hover:text-sky-400" href="#" onclick="openPrivacyModal(); return false;">
                    Privacy Policy
                  </a>
</li>
<li className="">
<a className="hover:text-sky-400" href="#" onclick="openTermsModal(); return false;">
                    Terms of Service
                  </a>
</li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-xs font-medium text-zinc-300 uppercase tracking-widest">
                Contact
              </h4>
<ul className="text-sm text-zinc-500 space-y-2 font-light">
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
                  Advisors@truecreditai.com
                  <iconify-icon className="text-base" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-base" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                  +1 833-762-4291
                </li>
</ul>
</div>
</div>
</div>
<div className="text-xs text-zinc-600 border-t border-white/[0.08] pt-8 leading-relaxed font-light">
          DISCLAIMER: True Credit Advisors AI is a credit education and dispute
          assistance service. We are not a law firm and do not provide legal
          advice. Results are not guaranteed and vary based on individual
          circumstances.
        </div>
</footer>
</div>



<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-4 sm:p-6" id="calendarModal">
<div className="absolute inset-0 bg-[#070B16]/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="calendarModalBackdrop" onclick="closeCalendarModal()"></div>
<div className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 transition-all transform translate-y-4 opacity-0 scale-95 shadow-2xl duration-300 overflow-hidden" id="calendarModalContent">
<div className="bg-zinc-900/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
<div>
<h2 className="text-xl font-normal tracking-tight text-white leading-tight">
              Book Consultation
            </h2>
<p className="text-xs uppercase tracking-wider text-zinc-500 font-normal">
              Select a Time
            </p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeCalendarModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-0 overflow-y-auto custom-scroll flex-1 relative w-full h-[650px] min-h-[600px] bg-white/[0.01]">
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="0hJysPjXF49B0MibpgAi_1774452087401" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/0hJysPjXF49B0MibpgAi" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', overflow: 'auto'}}></iframe>
<br/>

</div>
</div>
</div>

<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-4 sm:p-6" id="crModal">
<div className="absolute inset-0 bg-[#070B16]/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="crModalBackdrop" onclick="closeCRModal()"></div>
<div className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col relative z-10 transition-all transform translate-y-4 opacity-0 scale-95 shadow-2xl duration-300 overflow-hidden" id="crModalContent">
<div className="bg-zinc-900/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
<div>
<h2 className="text-xl font-normal tracking-tight text-white leading-tight">
              Free Credit Review
            </h2>
<p className="text-xs uppercase tracking-wider text-zinc-500 font-normal">
              Step-by-step Process
            </p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeCRModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-0 overflow-y-auto custom-scroll flex-1 relative w-full h-[650px]" id="crModalBody">

<div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#070B16]/40" id="crStep1">
<div className="w-20 h-20 rounded-full bg-white/[0.03] border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_30px_rgba(92,200,255,0.2)]">
<iconify-icon className="text-4xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
              MyScoreIQ
            </h3>
<p className="text-zinc-400 font-light mb-10 max-w-sm leading-relaxed">
              To proceed with your free credit review, we need to securely
              analyze your credit report. Do you currently have a MyScoreIQ
              account?
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
<button className="flex-1 py-4 rounded-xl bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] text-white font-normal shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-transform text-base tracking-tight" onclick="crSelectYes()">
                Yes, I have one
              </button>
<button className="flex-1 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-normal hover:bg-white/10 transition-colors text-base tracking-tight" onclick="crSelectNo()">
                No, I need one
              </button>
</div>
</div>

<div className="w-full h-full hidden flex flex-col relative bg-white/[0.01]" id="crStep2">
<div className="ep-iFrameContainer" id="inline-WljUMT20BdJ9XFihXsx3-div" style={{borderRadius: '15px', display: 'block'}}>
<div className="ep-wrapper" id="inline-WljUMT20BdJ9XFihXsx3-wrapper" style={{borderRadius: '15px'}}>
<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="WljUMT20BdJ9XFihXsx3" data-form-name="Get Free Credit Review- YES" data-height="702" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-WljUMT20BdJ9XFihXsx3" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-WljUMT20BdJ9XFihXsx3" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/WljUMT20BdJ9XFihXsx3" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', borderRadius: '15px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Get Free Credit Review- YES"></iframe>
</div>
</div>

</div>

<div className="w-full h-full hidden flex flex-col items-center justify-center p-8 text-center bg-[#070B16]/40" id="crStep3">
<div className="w-20 h-20 rounded-full bg-white/[0.03] border border-sky-500/20 flex items-center justify-center text-sky-400 mb-6 shadow-[0_0_30px_rgba(92,200,255,0.2)]">
<iconify-icon className="text-4xl" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-3xl font-normal text-white mb-3 tracking-tight">
              Sign Up for MyScoreIQ
            </h3>
<p className="text-zinc-400 font-light mb-10 max-w-sm leading-relaxed">
              Please sign up for a MyScoreIQ account using the link below. Once
              created, return here to continue with your free credit review.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md">
<a className="flex-1 py-4 rounded-xl bg-gradient-to-br from-[#5CC8FF] to-[#7A5CFF] text-white font-normal shadow-lg shadow-sky-500/20 hover:scale-[1.02] transition-transform text-base tracking-tight block text-center" href="https://www.myscoreiq.com/get-fico-max.aspx?offercode=432143FD" target="_blank">
                Get MyScoreIQ
              </a>
<button className="flex-1 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white font-normal hover:bg-white/10 transition-colors text-base tracking-tight" onclick="crSelectYes()">
                I have an account
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-4 sm:p-6" id="affiliateModal">
<div className="absolute inset-0 bg-[#070B16]/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="affiliateModalBackdrop" onclick="closeAffiliateModal()"></div>
<div className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col relative z-10 transition-all transform translate-y-4 opacity-0 scale-95 shadow-2xl duration-300 overflow-hidden" id="affiliateModalContent">
<div className="bg-zinc-900/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
<div>
<h2 className="text-xl font-normal tracking-tight text-white leading-tight">
              Partner Program
            </h2>
<p className="text-xs uppercase tracking-wider text-zinc-500 font-normal">
              Become an Affiliate
            </p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeAffiliateModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-0 overflow-y-auto custom-scroll flex-1 relative w-full h-[550px] bg-white/[0.01]">
<div className="ep-iFrameContainer" id="inline-9W1Sc8o8ZyyZ8Dlria7W-div" style={{borderRadius: '3px', display: 'block'}}>
<div className="ep-wrapper" id="inline-9W1Sc8o8ZyyZ8Dlria7W-wrapper" style={{borderRadius: '3px'}}>
<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="9W1Sc8o8ZyyZ8Dlria7W" data-form-name="Affiliate Form" data-height="490" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-9W1Sc8o8ZyyZ8Dlria7W" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-9W1Sc8o8ZyyZ8Dlria7W" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/9W1Sc8o8ZyyZ8Dlria7W" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', borderRadius: '3px', pointerEvents: 'none', overflow: 'auto', display: 'none'}} title="Affiliate Form"></iframe>
</div>
</div>

</div>
</div>
</div>
<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-4 sm:p-6" id="privacyModal">
<div className="absolute inset-0 bg-[#070B16]/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="privacyModalBackdrop" onclick="closePrivacyModal()"></div>
<div className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col relative z-10 transition-all transform translate-y-4 opacity-0 scale-95 shadow-2xl duration-300 overflow-hidden" id="privacyModalContent">
<div className="bg-zinc-900/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
<div>
<h2 className="text-xl font-normal tracking-tight text-white leading-tight">
              Privacy Policy
            </h2>
<p className="text-xs uppercase tracking-wider text-zinc-500 font-normal">
              True Credit Advisors AI
            </p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closePrivacyModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 sm:p-8 overflow-y-auto custom-scroll flex-1 relative w-full h-[550px] bg-white/[0.01] text-zinc-400 text-sm leading-relaxed font-light">
<div className="space-y-6">
<div>
<p>
<strong>Effective Date:</strong>
                May 15, 2026
              </p>
<p>
<strong>Website:</strong>
                https://truecreditai.com
              </p>
<p>
<strong>Contact Email:</strong>
                Advisors@truecreditai.com
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                1. Introduction
              </h3>
<p>
                TrueCreditAI (“Company,” “we,” “our,” or “us”) respects your
                privacy and is committed to protecting your personal
                information.
              </p>
<p className="mt-2">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit and use our Services.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                2. Information We Collect
              </h3>
<p>We may collect the following types of information:</p>
<p className="mt-2 text-white font-normal">a. Personal Information</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Full name</li>
<li>Email address</li>
<li>Phone number</li>
<li>Address or location information</li>
<li>Other information you voluntarily provide</li>
</ul>
<p className="mt-2 text-white font-normal">
                b. Financial or Credit-Related Information
              </p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Information related to your credit profile</li>
<li>Financial data you provide for analysis</li>
<li>Credit-related inputs used for AI-generated insights</li>
</ul>
<p className="mt-2 text-white font-normal">
                c. Automatically Collected Information
              </p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>IP address</li>
<li>Browser type</li>
<li>Device information</li>
<li>Pages visited and usage data</li>
</ul>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                3. How We Use Your Information
              </h3>
<p>We use your information to:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Provide and improve our Services</li>
<li>Generate AI-powered insights and recommendations</li>
<li>Communicate with you (support, updates, offers)</li>
<li>Monitor usage and enhance user experience</li>
<li>Detect and prevent fraud, misuse, or security risks</li>
</ul>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                4. AI Processing and Data Use
              </h3>
<p>By using our Services, you acknowledge that:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Your data may be processed by automated AI systems</li>
<li>
                  AI tools may analyze your input to produce recommendations
                </li>
<li>
                  Outputs are generated based on algorithms and may not always
                  be accurate
                </li>
</ul>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                5. Sharing of Information
              </h3>
<p>We may share your information:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>
                  With trusted service providers and partners (for hosting,
                  analytics, or support)
                </li>
<li>
                  To comply with legal obligations or regulatory requirements
                </li>
<li>To protect our rights, users, or systems</li>
</ul>
<p className="mt-2">
                We do not sell your personal information to third parties.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                6. Data Security
              </h3>
<p>
                We implement reasonable administrative, technical, and physical
                safeguards to protect your data.
              </p>
<p className="mt-2">
                However, no system is completely secure, and we cannot guarantee
                absolute protection.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                7. Data Retention
              </h3>
<p>We retain your information:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>As long as necessary to provide our Services</li>
<li>To comply with legal obligations</li>
<li>For legitimate business purposes</li>
</ul>
<p className="mt-2">
                You may request deletion of your data at any time.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                8. Your Rights
              </h3>
<p>Depending on your location, you may have the right to:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Access the personal information we hold about you</li>
<li>Request correction of inaccurate data</li>
<li>Request deletion of your information</li>
<li>Opt out of certain communications</li>
</ul>
<p className="mt-2">
                To exercise your rights, contact us at:
                <br/>
                📧 Advisors@truecreditai.com
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                9. Cookies and Tracking Technologies
              </h3>
<p>We may use cookies and similar technologies to:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Improve functionality and user experience</li>
<li>Analyze website traffic and usage</li>
</ul>
<p className="mt-2">
                You can control cookies through your browser settings.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                10. Third-Party Services
              </h3>
<p>
                Our website may contain links to third-party platforms or
                services.
              </p>
<p className="mt-2">We are not responsible for:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Their privacy practices</li>
<li>Their content or policies</li>
</ul>
<p className="mt-2">
                We encourage you to review their policies separately.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                11. Children’s Privacy
              </h3>
<p>
                Our Services are not intended for individuals under the age of
                18.
              </p>
<p className="mt-2">
                We do not knowingly collect personal information from children.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                12. International Data Transfers
              </h3>
<p>If you access our Services from outside your country:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>
                  Your information may be transferred and processed in other
                  jurisdictions
                </li>
</ul>
<p className="mt-2">
                By using the Services, you consent to such transfers.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                13. Changes to This Policy
              </h3>
<p>We may update this Privacy Policy from time to time.</p>
<p className="mt-2">
                Any changes will be posted on this page with an updated
                effective date.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                14. Contact Us
              </h3>
<p>
                If you have any questions about this Privacy Policy, contact us:
                <br/>
                📧 Advisors@truecreditai.com
                <br/>
                🌐 https://truecreditai.com
              </p>
</div>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-[110] hidden flex items-center justify-center p-4 sm:p-6" id="termsModal">
<div className="absolute inset-0 bg-[#070B16]/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="termsModalBackdrop" onclick="closeTermsModal()"></div>
<div className="bg-white/[0.03] backdrop-blur-[16px] border border-white/[0.08] rounded-3xl w-full max-w-2xl max-h-[90vh] flex flex-col relative z-10 transition-all transform translate-y-4 opacity-0 scale-95 shadow-2xl duration-300 overflow-hidden" id="termsModalContent">
<div className="bg-zinc-900/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.08] flex items-center justify-between z-20 shrink-0">
<div>
<h2 className="text-xl font-normal tracking-tight text-white leading-tight">
              Terms of Service
            </h2>
<p className="text-xs uppercase tracking-wider text-zinc-500 font-normal">
              True Credit Advisors AI
            </p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeTermsModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="p-6 sm:p-8 overflow-y-auto custom-scroll flex-1 relative w-full h-[550px] bg-white/[0.01] text-zinc-400 text-sm leading-relaxed font-light">
<div className="space-y-6">
<div>
<p>
<strong>Effective Date:</strong>
                May 15, 2026
              </p>
<p>
<strong>Website:</strong>
                https://truecreditai.com
              </p>
<p>
<strong>Contact Email:</strong>
                Advisors@truecreditai.com
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                1. Acceptance of Terms
              </h3>
<p>
                By accessing or using TrueCreditAI (“Company,” “we,” “our,” or
                “us”) and its services (“Services”), you agree to be bound by
                these Terms of Service. If you do not agree, you must not access
                or use the Services.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                2. Description of Services
              </h3>
<p>
                TrueCreditAI provides AI-powered tools and guidance designed to
                help users:
              </p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Understand and monitor their credit profile</li>
<li>Receive educational insights and recommendations</li>
<li>Improve financial awareness and decision-making</li>
</ul>
<p className="mt-2">
                The Services may include automated AI-generated suggestions and
                informational resources.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                3. Educational Purpose Only (No Financial Advice)
              </h3>
<p>All information and content provided through the Services:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Are for informational and educational purposes only</li>
<li>
                  Do not constitute legal, financial, or credit repair advice
                </li>
<li>
                  Should not be relied upon as a substitute for professional
                  advice
                </li>
</ul>
<p className="mt-2">
                You are solely responsible for your financial decisions.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                4. User Responsibilities
              </h3>
<p>By using the Services, you agree to:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Provide accurate and up-to-date information</li>
<li>Use the platform only for lawful purposes</li>
<li>
                  Not misuse, reproduce, or exploit any part of the system
                </li>
</ul>
<p className="mt-2">
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                5. Data Usage and Privacy
              </h3>
<p>By using our Services, you acknowledge and agree that:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>
                  Your data may be collected and processed to provide AI-driven
                  insights
                </li>
<li>
                  Information you provide may be analyzed by automated systems
                </li>
<li>
                  While we implement reasonable safeguards, we cannot guarantee
                  absolute data security
                </li>
</ul>
<p className="mt-2">
                Please refer to our Privacy Policy for more details.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                6. Payments and Subscriptions (If Applicable)
              </h3>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Certain features or services may require payment</li>
<li>All fees are subject to change without prior notice</li>
<li>
                  Payments are generally non-refundable, unless otherwise
                  specified
                </li>
</ul>
<p className="mt-2">
                You are responsible for reviewing all pricing before purchasing.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                7. No Guarantee of Results
              </h3>
<p>TrueCreditAI does not guarantee:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Improvement of credit score</li>
<li>Approval for loans or financing</li>
<li>Any specific financial outcome</li>
</ul>
<p className="mt-2">
                Results vary depending on individual circumstances and external
                factors.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                8. Limitation of Liability
              </h3>
<p>To the fullest extent permitted by law:</p>
<p className="mt-2">
                TrueCreditAI shall not be liable for any financial loss,
                damages, or consequences resulting from:
              </p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Use of the Services</li>
<li>Reliance on AI-generated insights</li>
<li>Errors or inaccuracies in data</li>
</ul>
<p className="mt-2">
                All services are provided “as is” without warranties of any
                kind.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                9. Third-Party Services
              </h3>
<p>
                The platform may include links or integrations with third-party
                services. We:
              </p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Do not control or guarantee third-party services</li>
<li>
                  Are not responsible for their content, policies, or actions
                </li>
</ul>
<p className="mt-2">
                Use of third-party services is at your own risk.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                10. Intellectual Property
              </h3>
<p>All content on TrueCreditAI, including:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Software</li>
<li>Branding</li>
<li>AI-generated materials</li>
</ul>
<p className="mt-2">
                …is owned by TrueCreditAI and protected by applicable laws. You
                may not copy, distribute, or use any content without written
                permission.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                11. Suspension or Termination
              </h3>
<p>We reserve the right to:</p>
<p className="mt-2">Suspend or terminate your access if you:</p>
<ul className="list-disc pl-5 mt-2 space-y-1">
<li>Violate these Terms</li>
<li>Engage in unlawful or abusive behavior</li>
</ul>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                12. Changes to Terms
              </h3>
<p>
                We may update these Terms at any time.
                <br/>
                Continued use of the Services after changes means you accept the
                updated version.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                13. Governing Law
              </h3>
<p>
                These Terms shall be governed by and interpreted in accordance
                with the laws of the United States.
              </p>
</div>
<div>
<h3 className="text-white font-normal text-base mb-2">
                14. Contact Information
              </h3>
<p>
                If you have any questions regarding these Terms, please contact
                us at:
                <br/>
                📧 Advisors@truecreditai.com
                <br/>
                🌐 https://truecreditai.com
              </p>
</div>
</div>
</div>
</div>
</div>












    </>
  );
}
