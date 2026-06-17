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
fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
colors: {
night: '#0B0F19',
deep: '#08101B',
panel: '#111827',
aurora: {
cyan: '#2DD4BF',
violet: '#A78BFA',
magenta: '#D946EF',
soft: '#2BBFA6'
},
cream: '#F5F1E8'
},
boxShadow: {
glow: '0 0 40px -16px rgba(45,212,191,.45)',
violetGlow: '0 0 42px -18px rgba(167,139,250,.5)'
},
animation: {
'fade-up': 'fadeUp .75s cubic-bezier(.16,1,.3,1) both',
'pulse-slow': 'pulse 7s cubic-bezier(.4,0,.6,1) infinite'
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(14px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');
gtag('config', 'G-YLGBLLJ7H4');



    (function(){
      const sticky = document.getElementById('mobile-sticky-cta');
      const heroCta = document.getElementById('hero-cta-area');
      if (!sticky || !heroCta) return;

      const setVisible = (visible) => {
        sticky.classList.toggle('is-visible', visible);
        sticky.setAttribute('aria-hidden', visible ? 'false' : 'true');
      };

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(([entry]) => {
          setVisible(!entry.isIntersecting && window.scrollY > 120);
        }, { threshold: 0, rootMargin: '0px 0px -16px 0px' });
        observer.observe(heroCta);
      } else {
        const check = () => {
          const rect = heroCta.getBoundingClientRect();
          setVisible(rect.bottom < 0 && window.scrollY > 120);
        };
        window.addEventListener('scroll', check, { passive: true });
        check();
      }
    })();
  


    (function(){
      const STORAGE_KEY = 'etherealFlowCookieConsent';
      const modal = document.getElementById('cookie-preferences-modal');
      const openers = document.querySelectorAll('[data-cookie-settings]');
      const closers = document.querySelectorAll('[data-cookie-close]');
      const analytics = document.getElementById('cookie-analytics');
      const marketing = document.getElementById('cookie-marketing');
      const functionality = document.getElementById('cookie-functionality');
      const acceptAll = document.getElementById('cookie-accept-all');
      const rejectNonEssential = document.getElementById('cookie-reject-nonessential');
      const savePreferences = document.getElementById('cookie-save-preferences');
      if (!modal || !analytics || !marketing || !functionality) return;

      const defaultConsent = {
        necessary: true,
        analytics: false,
        marketing: false,
        functionality: false,
        updatedAt: null
      };

      const readConsent = () => {
        try {
          const stored = localStorage.getItem(STORAGE_KEY);
          return stored ? { ...defaultConsent, ...JSON.parse(stored), necessary: true } : { ...defaultConsent };
        } catch (error) {
          return { ...defaultConsent };
        }
      };

      const applyToControls = (settings) => {
        analytics.checked = !!settings.analytics;
        marketing.checked = !!settings.marketing;
        functionality.checked = !!settings.functionality;
      };

      const publishConsent = (settings) => {
        window.efCookieConsent = { ...settings, necessary: true };
        window.dispatchEvent(new CustomEvent('etherealflow:cookie-consent-updated', { detail: window.efCookieConsent }));
      };

      const saveConsent = (settings) => {
        const next = { ...defaultConsent, ...settings, necessary: true, updatedAt: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        applyToControls(next);
        publishConsent(next);
        closeModal();
      };

      function openModal(event){
        if (event) event.preventDefault();
        applyToControls(readConsent());
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden','false');
        document.documentElement.classList.add('cookie-modal-open');
      }

      function closeModal(){
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden','true');
        document.documentElement.classList.remove('cookie-modal-open');
      }

      openers.forEach(opener => opener.addEventListener('click', openModal));
      closers.forEach(closer => closer.addEventListener('click', closeModal));

      acceptAll && acceptAll.addEventListener('click', () => saveConsent({ analytics:true, marketing:true, functionality:true }));
      rejectNonEssential && rejectNonEssential.addEventListener('click', () => saveConsent({ analytics:false, marketing:false, functionality:false }));
      savePreferences && savePreferences.addEventListener('click', () => saveConsent({
        analytics: analytics.checked,
        marketing: marketing.checked,
        functionality: functionality.checked
      }));

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
      });

      publishConsent(readConsent());
    })();
  
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.22] bg-faint-drift" style={{backgroundImage: 'url(\'data:image/jpeg'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050914]/90 via-[#0B0F19]/82 to-[#050914]/94"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(45,212,191,.10),_transparent_38%),radial-gradient(ellipse_at_78%_22%,_rgba(167,139,250,.10),_transparent_42%)]"></div>
</div>
<div className="relative z-10">

<header className="sticky top-0 z-50 border-b border-white/[.06] bg-night/70 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between gap-4">
<a aria-label="Ethereal Flow home" className="flex items-center" href="#top">
<img alt="Ethereal Flow" className="brand-logo" src="data:image/png;base64,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"/>
</a>
<div className="hidden md:flex items-center gap-4">
<a className="header-cta transition-all duration-300 text-[13px] font-medium text-slate-900 bg-white/95 rounded-full px-4 py-2" href="https://buy.stripe.com/fZu3cu7gj2Pkb878NxefC00">
            Get Your Personalised Sleep Protocol
          </a>
</div>
</div>
</header>

<div aria-hidden="true" className="mobile-sticky-cta fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none" id="mobile-sticky-cta">
<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-night via-night/75 to-transparent"></div>
<div className="relative px-3 pb-[calc(env(safe-area-inset-bottom)+9px)] pt-3 pointer-events-auto">
<a className="mobile-sticky-button block text-center w-full rounded-[1.15rem] bg-white text-slate-950 font-semibold text-[15px] leading-tight py-2.5 px-3.5 active:scale-[.99] transition-all" href="https://buy.stripe.com/fZu3cu7gj2Pkb878NxefC00">
          Get Your Personalised Sleep Protocol
        </a>
</div>
</div>

<main id="top">
<section className="relative overflow-hidden text-center px-5 sm:px-6 pt-16 sm:pt-20 pb-12 sm:pb-16">
<div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_at_top,_rgba(167,139,250,.12),_rgba(45,212,191,.05)_38%,_transparent_72%)] -z-10"></div>
<div className="max-w-4xl mx-auto animate-fade-up">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-aurora-violet/20 bg-aurora-violet/8 text-aurora-violet text-xs font-semibold tracking-wide mb-6">
<iconify-icon icon="solar:moon-sleep-linear"></iconify-icon>
            Personalised Sleep Protocol
          </div>
<p className="mb-5 text-xs sm:text-sm text-slate-500 tracking-[.16em] uppercase font-medium">Designed for overthinking at night.</p>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-.055em] font-semibold text-white drop-shadow-[0_0_38px_rgba(255,255,255,.11)]">
            Quiet a Racing Mind <br className="hidden sm:block"/>at Night.
          </h1>
<p className="mt-6 text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            A personalised sleep protocol built around the way your mind keeps you awake — helping your body settle first, so your mind can follow.
          </p>
<div className="mt-8 flex flex-col items-center gap-4" id="hero-cta-area">
<div className="relative group w-full sm:w-auto px-1">
<div className="absolute -inset-1 bg-gradient-to-r from-aurora-cyan/25 via-aurora-violet/25 to-aurora-magenta/25 rounded-full blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
<a className="relative block w-full sm:w-auto rounded-full bg-white text-slate-950 font-semibold px-8 py-4 btn-primary transition-all duration-300" href="https://buy.stripe.com/fZu3cu7gj2Pkb878NxefC00">
                Get Your Personalised Sleep Protocol
              </a>
</div>
<p className="text-sm text-slate-400 font-light leading-relaxed text-center">
<span className="block sm:inline">£97 one-time • Guided personalisation questionnaire</span>
<span className="hidden sm:inline"> • </span>
<span className="block sm:inline">Delivered in 24–48 hours</span>
</p>
<div className="glass max-w-xl rounded-2xl px-5 py-4 text-center mt-1">
<p className="text-xs sm:text-sm text-slate-200 font-medium">Sleep-safe. Science-informed. Nervous-system-first.</p>
<p className="text-xs sm:text-sm text-slate-400 mt-1"><span className="text-aurora-cyan font-semibold">14-day “Meaningful step forward” refund.</span> No interrogation. No hoops.</p>
</div>
</div>
</div>
</section>

<section className="pb-10 sm:pb-14 px-5 sm:px-6">
<div className="max-w-5xl mx-auto rounded-3xl border border-white/[.07] bg-night/60 backdrop-blur-xl px-5 py-6 sm:px-7 sm:py-7 shadow-glow">
<div className="text-center mb-5 sm:mb-6">
<p className="text-[11px] sm:text-[10px] uppercase tracking-[.22em] sm:tracking-[.24em] text-aurora-cyan font-semibold">What happens after payment?</p>
<p className="mt-2 text-sm sm:text-sm text-slate-400 leading-relaxed">Your protocol is reserved, shaped around your responses, and quality-checked before delivery.</p>
<p className="mt-3 text-sm sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">Your answers shape the pacing, tone, imagery, calming cues, and overall sleep sequence — so it feels built around the way your mind keeps you awake.</p>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-2.5 max-w-4xl mx-auto">
<div className="rounded-full border border-white/[.06] bg-white/[.025] px-3 py-2 text-xs text-slate-300">racing-thought pattern</div>
<div className="rounded-full border border-white/[.06] bg-white/[.025] px-3 py-2 text-xs text-slate-300">level of tension</div>
<div className="rounded-full border border-white/[.06] bg-white/[.025] px-3 py-2 text-xs text-slate-300">emotional tone</div>
<div className="rounded-full border border-white/[.06] bg-white/[.025] px-3 py-2 text-xs text-slate-300">sleep resistance</div>
<div className="col-span-2 sm:col-span-1 rounded-full border border-white/[.06] bg-white/[.025] px-3 py-2 text-xs text-slate-300">desired sleep outcome</div>
</div>
</div>
<ol className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 text-left sm:text-center">
<li className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3.5 sm:p-4"><span className="text-[10px] tracking-[.2em] uppercase text-aurora-cyan font-semibold">01</span><p className="mt-2 text-[13px] sm:text-xs leading-snug text-slate-200 font-medium">Secure your personalised protocol</p></li>
<li className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3.5 sm:p-4"><span className="text-[10px] tracking-[.2em] uppercase text-aurora-cyan font-semibold">02</span><p className="mt-2 text-[13px] sm:text-xs leading-snug text-slate-200 font-medium">Complete the guided personalisation questionnaire</p></li>
<li className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3.5 sm:p-4"><span className="text-[10px] tracking-[.2em] uppercase text-aurora-cyan font-semibold">03</span><p className="mt-2 text-[13px] sm:text-xs leading-snug text-slate-200 font-medium">Ethereal Flow builds your sequence through Flow Codex™</p></li>
<li className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3.5 sm:p-4"><span className="text-[10px] tracking-[.2em] uppercase text-aurora-cyan font-semibold">04</span><p className="mt-2 text-[13px] sm:text-xs leading-snug text-slate-200 font-medium">Receive your protocol within 24–48 hours</p></li>
<li className="col-span-2 sm:col-span-1 rounded-2xl border border-emerald-400/15 bg-emerald-400/[.04] p-3.5 sm:p-4"><span className="text-[10px] tracking-[.2em] uppercase text-emerald-300 font-semibold">05</span><p className="mt-2 text-[13px] sm:text-xs leading-snug text-slate-200 font-medium">Use it night after night, protected by the 14-day guarantee</p></li>
</ol>
</div>
</section>

<section className="py-14 sm:py-16 border-t border-white/[.06] bg-white/[.015]">
<div className="max-w-5xl mx-auto px-5 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">When Your Mind Won’t Switch Off at Night</h2>
<div className="mt-7 text-base sm:text-lg text-slate-400 font-light leading-relaxed space-y-1">
<p>You go to bed exhausted.</p>
<p>Your body is tired.</p>
<p>But your mind keeps going.</p>
<p>Thoughts replay the day.</p>
<p>Tomorrow’s worries appear.</p>
<p>Minutes turn into hours.</p>
<p className="text-white font-semibold pt-3">And sleep never arrives.</p>
</div>
</div>
<div className="grid gap-4">
<article className="soft-card rounded-2xl p-4 flex items-start gap-4"><span className="p-2 rounded-lg bg-night/70 text-aurora-violet"><iconify-icon className="text-xl" icon="solar:tornado-linear"></iconify-icon></span><div><h3 className="text-sm font-semibold text-white">Racing thoughts at bedtime</h3><p className="text-xs text-slate-400 mt-1">The mind loops the moment you lie down.</p></div></article>
<article className="soft-card rounded-2xl p-4 flex items-start gap-4"><span className="p-2 rounded-lg bg-night/70 text-aurora-cyan"><iconify-icon className="text-xl" icon="solar:battery-charge-linear"></iconify-icon></span><div><h3 className="text-sm font-semibold text-white">Tired but wired</h3><p className="text-xs text-slate-400 mt-1">Physical exhaustion meets a hyper-alert nervous system.</p></div></article>
<article className="soft-card rounded-2xl p-4 flex items-start gap-4"><span className="p-2 rounded-lg bg-night/70 text-aurora-magenta"><iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon></span><div><h3 className="text-sm font-semibold text-white">Waking in the night and spiralling</h3><p className="text-xs text-slate-400 mt-1">Unable to return to baseline once awake.</p></div></article>
<article className="soft-card rounded-2xl p-4 flex items-start gap-4"><span className="p-2 rounded-lg bg-night/70 text-slate-300"><iconify-icon className="text-xl" icon="solar:smartphone-linear"></iconify-icon></span><div><h3 className="text-sm font-semibold text-white">Generic sleep content misses the real problem</h3><p className="text-xs text-slate-400 mt-1">A library cannot be built around your specific night-time pattern.</p></div></article>
</div>
</div>
</section>

<section className="py-10 sm:py-16 border-y border-white/[.06] bg-night/30">
<div className="max-w-5xl mx-auto px-5 sm:px-6">
<div className="max-w-3xl mx-auto text-center">
<p className="text-[10px] uppercase tracking-[.25em] text-aurora-violet font-semibold">A clearer alternative</p>
<h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Not another library of sleep tracks</h2>
<p className="mt-4 sm:mt-5 text-lg text-slate-400 font-light leading-relaxed">Sleep apps give you libraries to browse. Ethereal Flow builds one sleep protocol around your night-time pattern.<br/><span className="mt-3 block text-base text-slate-300">One clear sleep sequence, built to help your body settle, your thoughts slow, and sleep feel accessible again.</span></p>
</div>
<div className="mt-7 sm:mt-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
<div className="rounded-xl border border-white/[.06] bg-white/[.025] p-3 sm:p-4"><p className="text-sm sm:text-xs font-semibold text-slate-200">Sleep apps</p><p className="mt-1 text-xs sm:text-[11px] text-slate-500">Libraries to browse</p></div>
<div className="rounded-xl border border-white/[.06] bg-white/[.025] p-3 sm:p-4"><p className="text-sm sm:text-xs font-semibold text-slate-200">YouTube</p><p className="mt-1 text-xs sm:text-[11px] text-slate-500">Free, generic</p></div>
<div className="rounded-xl border border-white/[.06] bg-white/[.025] p-3 sm:p-4"><p className="text-sm sm:text-xs font-semibold text-slate-200">CBT-I</p><p className="mt-1 text-xs sm:text-[11px] text-slate-500">Clinical programme</p></div>
<div className="rounded-xl border border-white/[.06] bg-white/[.025] p-3 sm:p-4"><p className="text-sm sm:text-xs font-semibold text-slate-200">Sound apps</p><p className="mt-1 text-xs sm:text-[11px] text-slate-500">Audio layer</p></div>
<div className="rounded-xl border border-white/[.06] bg-white/[.025] p-3 sm:p-4"><p className="text-sm sm:text-xs font-semibold text-slate-200">Custom creators</p><p className="mt-1 text-xs sm:text-[11px] text-slate-500">Broader / slower</p></div>
<div className="col-span-2 sm:col-span-1 rounded-xl border border-aurora-cyan/30 bg-aurora-cyan/[.06] p-3.5 sm:p-4 shadow-[0_0_30px_-18px_rgba(45,212,191,.9)]"><p className="text-sm sm:text-xs font-semibold text-white">Ethereal Flow</p><p className="mt-1 text-xs sm:text-[11px] text-aurora-cyan">Protocol for racing minds</p></div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="max-w-5xl mx-auto px-5 sm:px-6">
<div className="rounded-3xl border border-white/[.07] bg-white/[.02] backdrop-blur-xl px-6 py-7 sm:px-8 sm:py-8">
<div className="max-w-3xl mx-auto text-center">
<p className="text-[10px] uppercase tracking-[.25em] text-aurora-cyan font-semibold">What your protocol is built around</p>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">Personalisation changes the sequence — not just the name.</h2>
</div>
<div className="mt-7 flex flex-wrap justify-center gap-2.5">
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Racing-thought pattern</span>
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Worry / replay / planning style</span>
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Nervous-system activation</span>
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Body tension</span>
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Emotional tone &amp; safety need</span>
<span className="rounded-full border border-white/[.08] bg-night/55 px-4 py-2 text-xs text-slate-300">Desired sleep outcome</span>
</div>
<p className="mt-7 text-center text-sm text-slate-400 max-w-3xl mx-auto leading-relaxed">Your responses shape the order, emphasis, pacing, breathwork, body-settling, imagery, reinforcement and calming sound design within your protocol.</p>
</div>
</div>
</section>

<section className="py-14 sm:py-18 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
<iconify-icon className="text-4xl text-aurora-violet/60" icon="solar:moon-fog-linear"></iconify-icon>
<h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">A Racing Mind Settles More Easily<br className="hidden sm:block"/> When the Body Settles First.</h2>
<div className="mt-8 space-y-5 text-lg text-slate-400 font-light leading-relaxed">
<p>Most sleep advice asks you to think differently, meditate harder, or force yourself to switch off.</p>
<p><span className="text-white font-semibold">But a racing mind rarely settles on command.</span> The body must receive the signal first.</p>
<p>When the nervous system shifts out of alert mode, breathing slows, muscles release, and the mind has a clearer path into sleep.</p>
</div>
<div className="mt-8 inline-flex items-center gap-3 glass rounded-2xl px-5 py-4 text-left max-w-xl">
<iconify-icon className="text-2xl text-aurora-violet shrink-0" icon="solar:key-minimalistic-linear"></iconify-icon>
<p className="text-sm text-slate-200 font-medium">Your protocol starts by helping the body downshift first, so the mind does not have to be forced into sleep.</p><p className="mt-3 text-sm sm:text-base text-slate-300 font-medium">Body first. Mind second. Sleep-safe throughout.</p>
</div>
</div>
</section>

<section className="py-14 sm:py-18 border-y border-white/[.06] bg-white/[.02] relative overflow-hidden">
<div className="max-w-6xl mx-auto px-5 sm:px-6">
<div className="grid lg:grid-cols-[.82fr_1.18fr] gap-10 lg:gap-12 items-center">
<div className="max-w-md">
<div className="inline-flex items-center gap-2 rounded-full border border-aurora-violet/22 bg-aurora-violet/[.065] px-3 py-1.5 text-[10px] uppercase tracking-[.24em] text-aurora-violet font-semibold">
<iconify-icon icon="solar:moon-sleep-linear"></iconify-icon> Flow Codex™ Sleep Sequencing System
              </div>
<h2 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">Pattern in.<br/>Protocol out.</h2>
<p className="mt-5 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">Flow Codex™ is Ethereal Flow’s proprietary sleep sequencing system.</p>
<p className="mt-4 text-sm sm:text-base text-slate-400 font-light leading-relaxed">It uses your answers to shape the order, pacing, imagery, reinforcement and sound design of your personalised 60-minute sleep protocol.</p>
<p className="mt-6 text-sm font-semibold text-white">This is a structured protocol, not another generic sleep track.</p>
<div className="mt-6 rounded-2xl border border-aurora-cyan/15 bg-aurora-cyan/[.035] p-4">
<p className="text-[10px] uppercase tracking-[.22em] text-aurora-cyan font-semibold">Built on evidence-informed sleep principles</p>
<p className="mt-3 text-sm text-slate-300 font-light leading-relaxed">Flow Codex™ combines guided breath regulation, body-settling, calming imagery and sleep-safe reinforcement — structured to help the body move out of alert mode before asking the mind to switch off.</p>
<p className="mt-3 text-xs text-slate-500">Personalised sleep support, not medical treatment or diagnosis.</p>
</div>
</div>
<div className="relative">
<div className="absolute inset-6 bg-[radial-gradient(circle,_rgba(45,212,191,.12),_transparent_63%)] blur-3xl pointer-events-none"></div>
<div className="relative rounded-[2rem] border border-white/[.08] bg-night/65 backdrop-blur-xl p-5 sm:p-7 shadow-glow">
<div className="flex items-center justify-between gap-4 mb-5">
<p className="text-[10px] uppercase tracking-[.23em] text-slate-500 font-semibold">Sequence-level personalisation</p>
<span className="rounded-full border border-aurora-cyan/25 bg-aurora-cyan/[.07] px-3 py-1 text-[10px] uppercase tracking-[.16em] text-aurora-cyan font-semibold">60 min protocol</span>
</div>
<div className="space-y-4">
<div className="rounded-2xl border border-white/[.08] bg-white/[.025] p-4">
<p className="text-[10px] uppercase tracking-[.2em] text-slate-500 font-semibold mb-3">Your pattern signals</p>
<div className="grid sm:grid-cols-3 gap-2.5">
<div className="rounded-xl border border-white/[.08] bg-night/55 px-3 py-3 text-xs text-slate-300 text-center">Racing thoughts</div>
<div className="rounded-xl border border-aurora-cyan/35 bg-aurora-cyan/[.075] px-3 py-3 text-xs text-white text-center">Body tension</div>
<div className="rounded-xl border border-white/[.08] bg-night/55 px-3 py-3 text-xs text-slate-300 text-center">Can’t switch off</div>
</div>
</div>
<div className="flex justify-center"><div className="h-6 w-px bg-gradient-to-b from-aurora-cyan/45 to-transparent"></div></div>
<div className="relative mx-auto max-w-sm rounded-2xl border border-aurora-cyan/35 bg-night/95 p-5 text-center shadow-[0_0_54px_-21px_rgba(45,212,191,.9)]">
<iconify-icon className="text-4xl text-aurora-cyan" icon="solar:moon-sleep-linear"></iconify-icon>
<p className="mt-3 text-[10px] uppercase tracking-[.26em] text-aurora-cyan font-semibold">Sleep Sequencing System</p>
<p className="mt-1 text-xl text-white font-semibold tracking-tight">Flow Codex™</p>
</div>
<div className="flex justify-center"><div className="h-6 w-px bg-gradient-to-b from-aurora-violet/45 to-transparent"></div></div>
<div className="rounded-2xl border border-aurora-violet/20 bg-aurora-violet/[.045] p-4">
<p className="text-[10px] uppercase tracking-[.2em] text-slate-500 font-semibold mb-3 text-center">Your sleep protocol</p>
<div className="grid sm:grid-cols-3 gap-2.5">
<div className="rounded-xl border border-white/[.08] bg-night/55 px-3 py-3 text-xs text-slate-200 text-center">Calm Body</div>
<div className="rounded-xl border border-white/[.08] bg-night/55 px-3 py-3 text-xs text-slate-200 text-center">Mental Quiet</div>
<div className="rounded-xl border border-aurora-cyan/30 bg-aurora-cyan/[.075] px-3 py-3 text-xs text-white font-medium text-center">Sleep-Ready</div>
</div>
<p className="mt-4 text-center text-sm text-slate-200 font-semibold">Personalised 60-minute sleep protocol</p>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 rounded-2xl border border-white/[.07] bg-night/55 px-5 py-4 text-center sm:text-left">
<p className="text-sm text-slate-300 font-light leading-relaxed"><span className="text-white font-medium">Designed by Ethereal Flow.</span> Created through Flow Codex™. Quality-checked before delivery in Lucy’s calming guided-audio style.</p>
</div>
</div>
</section>

<section className="py-12 sm:py-16 border-b border-white/[.06] bg-night/25">
<div className="max-w-6xl mx-auto px-5 sm:px-6">
<div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
<p className="text-[10px] uppercase tracking-[.24em] text-aurora-cyan font-semibold">Customer trust</p>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">What people noticed</h2>
</div>
<div className="grid md:grid-cols-3 gap-3.5 sm:gap-4">
<article className="rounded-3xl border border-white/[.08] bg-white/[.03] backdrop-blur-xl p-5 sm:p-6 shadow-[0_18px_70px_-45px_rgba(0,0,0,.9)]">
<div className="text-aurora-violet/60 text-3xl leading-none mb-3">“</div>
<p className="text-[15px] sm:text-base leading-relaxed text-slate-200 font-light">Within a few nights, my evenings felt less mentally chaotic. It didn’t feel generic at all — it felt built around the patterns behind my sleep.</p>
<p className="mt-5 text-xs uppercase tracking-[.18em] text-slate-500 font-semibold">Emma, 31 — Brighton</p>
</article>
<article className="rounded-3xl border border-white/[.08] bg-white/[.03] backdrop-blur-xl p-5 sm:p-6 shadow-[0_18px_70px_-45px_rgba(0,0,0,.9)]">
<div className="text-aurora-cyan/60 text-3xl leading-none mb-3">“</div>
<p className="text-[15px] sm:text-base leading-relaxed text-slate-200 font-light">The questionnaire made me think, ‘OK, this might actually be tailored.’ When the protocol arrived, it clearly reflected what I’d said — not something copy-and-paste.</p>
<p className="mt-5 text-xs uppercase tracking-[.18em] text-slate-500 font-semibold">Tom, 29 — Birmingham</p>
</article>
<article className="rounded-3xl border border-white/[.08] bg-white/[.03] backdrop-blur-xl p-5 sm:p-6 shadow-[0_18px_70px_-45px_rgba(0,0,0,.9)]">
<div className="text-aurora-magenta/60 text-3xl leading-none mb-3">“</div>
<p className="text-[15px] sm:text-base leading-relaxed text-slate-200 font-light">Most things I’d tried focused on sleep itself. This was the first thing that seemed to understand the nervous-system side of being tired but mentally switched on.</p>
<p className="mt-5 text-xs uppercase tracking-[.18em] text-slate-500 font-semibold">Daniel, 36 — London</p>
</article>
</div>
</div>
</section>

<section className="py-16 sm:py-20" id="offer">
<div className="max-w-5xl mx-auto px-5 sm:px-6 grid lg:grid-cols-[.92fr_1.08fr] gap-6 lg:gap-8 items-start">
<div className="rounded-3xl border border-white/[.08] bg-white/[.025] p-6 sm:p-7">
<p className="text-[10px] uppercase tracking-[.23em] text-aurora-violet font-semibold">Why £97?</p>
<h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-white">One personalised build. Yours night after night.</h2>
<p className="mt-5 text-slate-400 font-light leading-relaxed">Your £97 one-time purchase reserves a personalised protocol build, created from your questionnaire responses and delivered within 24–48 hours. No subscription.</p>
<div className="mt-6 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl border border-white/[.06] bg-night/55 p-3 text-slate-300">Bespoke creation</div>
<div className="rounded-xl border border-white/[.06] bg-night/55 p-3 text-slate-300">Sequence design</div>
<div className="rounded-xl border border-white/[.06] bg-night/55 p-3 text-slate-300">One-time delivery</div>
<div className="rounded-xl border border-white/[.06] bg-night/55 p-3 text-slate-300">Yours to keep</div>
</div>
<div className="mt-6 rounded-2xl border border-aurora-violet/15 bg-aurora-violet/[.035] p-4">
<p className="text-sm text-slate-200 font-light leading-relaxed">“I nearly didn’t buy because of the price, but I’d already wasted money on subscriptions that became background noise. This felt far more personal and thought-through.”</p>
<p className="mt-3 text-[11px] uppercase tracking-[.18em] text-slate-500 font-semibold">Steve, 44 — Manchester</p>
</div>
</div>
<div className="rounded-3xl border border-white/[.09] bg-slate-900/70 backdrop-blur-xl p-7 sm:p-9 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-aurora-violet/45 to-transparent"></div>
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-[.22em] text-slate-500 font-semibold">What you receive</p>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-white">Your Personalised Sleep Protocol</h2>
</div>
<div className="text-right shrink-0"><p className="text-4xl text-white font-semibold tracking-tight">£97</p><p className="text-xs text-slate-500">one-time</p></div>
</div>
<div className="mt-7 rounded-2xl bg-white/[.04] border border-white/[.07] p-5 sm:p-6">
<ul className="space-y-3.5 text-sm text-slate-300">
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Breath regulation matched to your downshift pattern</span></li>
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Body-settling and somatic relaxation guidance</span></li>
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Racing-thought quieting sequence</span></li>
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Guided sleep visualisation</span></li>
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Sleep-safe reinforcement and calming sound design</span></li>
<li className="flex gap-3"><iconify-icon className="text-aurora-cyan text-lg shrink-0 mt-.5" icon="solar:check-circle-linear"></iconify-icon><span>Usage guidance — delivered in 24–48 hours</span></li>
</ul>
</div>
<a className="mt-7 block text-center rounded-full bg-white text-slate-950 font-semibold px-8 py-4 btn-primary transition-all hover:bg-slate-100" href="https://buy.stripe.com/fZu3cu7gj2Pkb878NxefC00">Get Your Personalised Sleep Protocol</a>
<p className="mt-4 text-center text-xs text-slate-400">Created once for your pattern. Yours to use night after night.</p>
</div>
</div>
</section>

<section className="pb-14 sm:pb-20">
<div className="max-w-3xl mx-auto px-5 sm:px-6">
<div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[.045] p-7 sm:p-10 text-center shadow-glow">
<div className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300 border border-emerald-400/15"><iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon></div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Try Your Protocol for 14 Days</h2>
<p className="mt-5 text-slate-300 font-light leading-relaxed">If it does not feel like a meaningful step forward, request a refund.</p>
<p className="mt-4 text-white font-semibold">No interrogation. No hoops.</p>
<p className="mt-5 text-sm text-slate-400">Non-clinical, science-informed sleep support. Results vary from person to person.</p>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/[.06] bg-white/[.012]">
<div className="max-w-2xl mx-auto px-5 sm:px-6">
<h2 className="text-3xl font-semibold tracking-tight text-white text-center mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">Is this therapy or medical treatment?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">No. Ethereal Flow is non-clinical, science-informed sleep support. It does not diagnose, treat, or replace medical or therapeutic care.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">Is this just a meditation?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">No. A meditation is content. Your protocol is a structured sequence built around your night-time pattern, combining body-settling, breath regulation, imagery, reinforcement and sound design.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">Why do I pay before the questionnaire?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">Payment secures your personalised protocol build. You then complete the guided personalisation questionnaire so your sequence can be shaped through Flow Codex™ and delivered within 24–48 hours.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">What exactly do I receive?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">A personalised 60-minute sleep protocol, including breath regulation, body-settling guidance, racing-thought quieting, guided sleep visualisation, sleep-safe reinforcement, calming sound design and usage guidance.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">What if I already use Calm, Headspace, YouTube or sleep apps?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">Those tools can still be part of your routine. Ethereal Flow gives you one personalised protocol shaped around your night-time pattern and created for repeated use.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">What if it does not help?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">Try your protocol for 14 days. If it does not feel like a meaningful step forward, request a refund. No interrogation. No hoops.</p></details>
<details className="group rounded-2xl soft-card p-5 cursor-pointer"><summary className="flex justify-between gap-4 text-white font-semibold">Who is this for — and who is it not for?<iconify-icon className="text-slate-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon></summary><p className="mt-4 text-sm text-slate-400 font-light leading-relaxed">It is designed for adults whose mind becomes active when they try to sleep, especially racing-thought and tired-but-wired patterns. It is not a medical treatment or a replacement for professional support where needed.</p></details>
</div>
</div>
</section>

<section className="py-14 sm:py-20 text-center px-5 sm:px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(167,139,250,.13),_transparent_60%)] -z-10"></div>
<div className="max-w-2xl mx-auto">
<p className="text-[10px] uppercase tracking-[.25em] text-aurora-cyan font-semibold">Sleep-safe. Science-informed. Personalised.</p>
<h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-white">Quiet Your Mind Tonight.</h2>
<p className="mt-6 text-lg text-slate-400 font-light leading-relaxed">If a racing mind keeps you awake, your personalised protocol gives you one clear, night-time sequence built around your pattern.</p>
<a className="mt-9 inline-block rounded-full bg-white text-slate-950 font-semibold px-8 py-4 btn-primary transition-all hover:bg-slate-100" href="https://buy.stripe.com/fZu3cu7gj2Pkb878NxefC00">Get Your Personalised Sleep Protocol</a>
<p className="mt-5 text-sm text-slate-400">£97 one-time • Delivered in 24–48 hours • Use it night after night, protected by the 14-day guarantee</p>
</div>
</section>
</main>

<footer className="pb-28 md:pb-10 pt-10 border-t border-white/[.06]">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="flex justify-center mb-5">
<img alt="Ethereal Flow symbol" className="footer-mark" src="data:image/png;base64,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"/>
</div>
<nav aria-label="Legal footer navigation" className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-xs text-slate-600 font-light">
<a className="hover:text-slate-300 transition-colors" href="/terms-and-conditions">Terms &amp; Conditions</a>
<a className="hover:text-slate-300 transition-colors" href="/privacy-policy">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="/cookies-policy">Cookies Policy</a>
<a className="hover:text-slate-300 transition-colors" data-cookie-settings="" href="#cookie-settings">Cookie Settings</a>
</nav>
<p className="mt-4 text-xs text-slate-700">© 2026 Ethereal Flow Studios Ltd. All rights reserved.</p>
</div>
</footer>
</div>

<div aria-hidden="true" aria-labelledby="cookie-preferences-title" aria-modal="true" className="fixed inset-0 z-[90] hidden" id="cookie-preferences-modal" role="dialog">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" data-cookie-close=""></div>
<div className="relative min-h-screen flex items-end sm:items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-2xl rounded-3xl border border-white/[0.08] bg-[#0B0F19]/95 shadow-[0_28px_120px_rgba(0,0,0,.72)] backdrop-blur-2xl overflow-hidden">
<div className="p-6 sm:p-7 border-b border-white/[0.06]">
<div className="flex items-start justify-between gap-5">
<div>
<p className="text-[11px] uppercase tracking-[0.22em] text-aurora-cyan/80 font-medium mb-2">Cookie preferences</p>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white" id="cookie-preferences-title">Manage your cookie choices</h2>
<p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xl">Choose which non-essential cookies Ethereal Flow may use. Strictly necessary cookies stay on because the site needs them to work.</p>
</div>
<button aria-label="Close cookie settings" className="shrink-0 w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors" data-cookie-close="" type="button">×</button>
</div>
</div>
<div className="p-6 sm:p-7 space-y-4">
<div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">Strictly necessary</h3>
<p className="mt-1 text-xs text-slate-400 leading-relaxed">Required for core website functions, security, checkout, and consent storage.</p>
</div>
<span className="text-xs font-medium text-aurora-cyan rounded-full border border-aurora-cyan/25 bg-aurora-cyan/[0.06] px-3 py-1">Always on</span>
</div>
</div>
<label className="cookie-toggle block rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 cursor-pointer hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">Analytics / performance</h3>
<p className="mt-1 text-xs text-slate-400 leading-relaxed">Helps us understand website usage and improve the customer journey.</p>
</div>
<input className="sr-only" data-cookie-category="analytics" id="cookie-analytics" type="checkbox"/>
<span className="relative block w-[46px] h-6 rounded-full border border-white/[0.12] bg-white/[0.08] transition-colors"></span>
</div>
</label>
<label className="cookie-toggle block rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 cursor-pointer hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">Advertising / marketing</h3>
<p className="mt-1 text-xs text-slate-400 leading-relaxed">Supports ad measurement, conversion tracking, and campaign performance where consented.</p>
</div>
<input className="sr-only" data-cookie-category="marketing" id="cookie-marketing" type="checkbox"/>
<span className="relative block w-[46px] h-6 rounded-full border border-white/[0.12] bg-white/[0.08] transition-colors"></span>
</div>
</label>
<label className="cookie-toggle block rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 cursor-pointer hover:bg-white/[0.04] transition-colors">
<div className="flex items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-white">Functionality / preferences</h3>
<p className="mt-1 text-xs text-slate-400 leading-relaxed">Remembers optional settings and preference choices beyond essential site operation.</p>
</div>
<input className="sr-only" data-cookie-category="functionality" id="cookie-functionality" type="checkbox"/>
<span className="relative block w-[46px] h-6 rounded-full border border-white/[0.12] bg-white/[0.08] transition-colors"></span>
</div>
</label>
</div>
<div className="p-6 sm:p-7 border-t border-white/[0.06] bg-black/10">
<div className="grid sm:grid-cols-3 gap-3">
<button className="rounded-full border border-white/[0.10] bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition-colors" id="cookie-accept-all" type="button">Accept all</button>
<button className="rounded-full border border-white/[0.10] bg-white text-slate-950 px-5 py-3 text-sm font-medium hover:bg-slate-100 transition-colors" id="cookie-reject-nonessential" type="button">Reject non-essential</button>
<button className="rounded-full border border-white/[0.10] bg-white/[0.04] text-white px-5 py-3 text-sm font-medium hover:bg-white/[0.07] transition-colors" id="cookie-save-preferences" type="button">Save choices</button>
</div>
<p className="mt-4 text-xs text-slate-500 leading-relaxed">You can reopen these settings at any time from the Cookie Settings link in the footer.</p>
</div>
</div>
</div>
</div>



    </>
  );
}
