import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



document.addEventListener('DOMContentLoaded', () => {
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, observerOptions);
document.querySelectorAll('.anim-trigger').forEach(el => observer.observe(el));
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function () {
          const steps = [
            {
              title: 'Collect',
              description: 'Aggregate live environmental streams from sensor networks, satellite layers, and regional measurements to establish a unified observational input layer.',
              image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3160dde-0640-4209-ba49-2fdd186ab7aa_1600w.jpg'
            },
            {
              title: 'Normalize',
              description: 'Standardize signal quality across sources, calibrate inconsistencies, and align measurements into a coherent atmospheric model that can be trusted across regions.',
              image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad49c60a-ac88-46a9-803d-231a2d478e0c_1600w.jpg'
            },
            {
              title: 'Interpret',
              description: 'Detect pollutant build-up, drift anomalies, and emerging exposure shifts across monitored zones.',
              image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea63cda8-7a78-412b-a258-e0190a2d2f29_1600w.jpg'
            },
            {
              title: 'Forecast',
              description: 'Project likely movement, density change, and short-range environmental shifts across time and geography to support clearer response planning.',
              image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6611eb5-6c22-42ad-ad4c-1afd7eaeb616_1600w.jpg'
            }
          ];

          let currentStep = 0;
          const navItems = document.querySelectorAll('#methodology [data-step-nav]');
          const img = document.querySelector('#methodology [data-step-image]');
          const title = document.querySelector('#methodology [data-step-title]');
          const description = document.querySelector('#methodology [data-step-description]');

          function updateNav(index) {
            navItems.forEach((nav, i) => {
              const heading = nav.querySelector('h3');
              const number = nav.querySelector('span:last-child');
              const isActive = i === index;

              if (isActive) {
                nav.className = 'logic-step group w-full relative overflow-hidden rounded-[22px] bg-gradient-to-br from-white/82 to-white/52 p-8 md:p-10 cursor-pointer border border-blue-200/70 shadow-[0_22px_60px_rgba(148,163,184,0.12),0_8px_24px_rgba(15,23,42,0.04)] text-left transition-all duration-500';
                heading.className = 'text-4xl md:text-5xl tracking-tighter font-light text-slate-950';
                number.className = 'text-sm font-medium mt-1 ml-2 font-mono text-blue-700';
              } else {
                nav.className = 'logic-step group w-full relative rounded-[22px] p-8 md:p-10 cursor-pointer transition-all duration-500 border border-white/60 bg-white/34 backdrop-blur-xl hover:bg-white/[0.44] hover:border-blue-200/70 text-left shadow-[0_18px_50px_rgba(148,163,184,0.10),0_6px_18px_rgba(15,23,42,0.04)]';
                heading.className = 'text-4xl md:text-5xl text-slate-500 group-hover:text-slate-800 tracking-tighter font-light transition-colors duration-300';
                number.className = 'text-sm font-medium text-slate-500 group-hover:text-slate-700 mt-1 ml-2 font-mono transition-colors';
              }
            });
          }

          function setActiveStep(index) {
            currentStep = index;
            const step = steps[index];

            updateNav(index);

            img.style.opacity = '0';
            img.style.transform = 'scale(1.02)';
            title.style.opacity = '0';
            description.style.opacity = '0';

            setTimeout(() => {
              img.src = step.image;
              title.textContent = step.title;
              description.textContent = step.description;

              requestAnimationFrame(() => {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                title.style.opacity = '1';
                description.style.opacity = '1';
              });
            }, 180);
          }

          navItems.forEach((nav, i) => {
            nav.addEventListener('click', () => setActiveStep(i));
          });

          img.style.transition = 'opacity 480ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)';
          title.style.transition = 'opacity 320ms ease';
          description.style.transition = 'opacity 320ms ease';

          updateNav(currentStep);
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-[#f0f4f8] via-[#f8fafc] to-white"></div>

<svg className="absolute w-full h-full opacity-[0.03]" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>

<header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-4 sm:px-6 pt-6">
<div className="max-w-5xl border rounded-full mx-auto py-2.5 sm:py-3 px-3 sm:px-4 lg:px-6" style={{background: 'linear-gradient(180deg, rgba(14,16,26,0.55), rgba(14,16,26,0.35)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box', border: '1px solid transparent', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<div className="flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-blue-600/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]">
<svg aria-hidden="true" className="w-4 h-4 text-blue-400" fill="none" viewbox="0 0 48 48">
<circle cx="24" cy="24" opacity="0.9" r="15" stroke="currentColor" strokeWidth="1.6"></circle>
<circle cx="24" cy="24" fill="currentColor" opacity="0.95" r="5"></circle>
<path d="M24 7.5C30 12 33 17 33 24C33 31 30 36 24 40.5" opacity="0.7" stroke="currentColor" strokeWidth="1.4"></path>
<path d="M24 7.5C18 12 15 17 15 24C15 31 18 36 24 40.5" opacity="0.45" stroke="currentColor" strokeWidth="1.4"></path>
<path d="M8 24H40" opacity="0.35" stroke="currentColor" strokeWidth="1.2"></path>
</svg>
</div>
<span className="text-[15px] font-semibold text-white/90 tracking-tight">
              GAQO
            </span>
</div>

<ul className="hidden md:flex items-center gap-1 text-[13px] font-medium text-white/60">
<li>
<a className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/5" href="#system-view">
                System View
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/5" href="#observed-layers">
                Observed Layers
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/5" href="#methodology">
                Methodology
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/5" href="#network-status">
                Global View
              </a>
</li>
<li>
<a className="hover:text-white transition-colors duration-300 px-3.5 py-2 rounded-full hover:bg-white/5" href="#pricing">
                Pricing
              </a>
</li>
</ul>

<div className="flex items-center gap-1.5 md:gap-2">
<a className="hidden lg:inline-flex hover:text-white transition-colors duration-300 px-3 py-2 rounded-full hover:bg-white/5 text-[12px] font-mono uppercase tracking-[0.12em] text-white/60" href="#access">
              Platform Access
            </a>
<a className="hidden md:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[13px] font-medium text-slate-900 bg-white/90 hover:bg-white transition-all duration-300 shadow-[0_2px_10px_rgba(255,255,255,0.1)]" href="#request-access">
              Request access
            </a>
<button aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-[860px] lg:min-h-[920px] overflow-hidden border-b px-6 md:px-8 lg:px-12 border-slate-800/50" id="system-view">

<div className="absolute inset-0 z-0">

<img alt="Atmospheric observatory visualization" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0e5cd86-3d23-4068-befd-b05819267d62_3840w.jpg"/>

<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.8)_0%,rgba(15,23,42,0.6)_12%,rgba(15,23,42,0.4)_28%,rgba(15,23,42,0.6)_42%,rgba(15,23,42,0.8)_64%,rgba(15,23,42,0.9)_100%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.2)_0%,rgba(15,23,42,0.5)_20%,rgba(15,23,42,0.8)_50%,rgba(15,23,42,0.9)_100%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_32%,rgba(59,130,246,0.15),transparent_25%),radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.1),transparent_28%)]"></div>
</div>

<div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.08]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="hero-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="rgba(255,255,255,0.4)" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#hero-grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="z-10 lg:pt-40 lg:pb-32 max-w-7xl mr-auto ml-auto pt-40 pb-32 relative">
<div className="max-w-[760px] anim-trigger is-visible">

<div className="inline-flex items-center gap-2 rounded-full border backdrop-blur-xl px-4 py-2 mb-8 anim-fade-up border-white/20 bg-white/10 shadow-[0_6px_24px_rgba(0,0,0,0.2)]" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">
              АВТОМАТИЗАЦІЯ ПРОДАЖІВ
            </span>
</div>

<h1 className="font-display text-[3.3rem] sm:text-[4.4rem] lg:text-[5.5rem] leading-[0.98] tracking-[-0.045em] font-light mb-7 text-white" style={{fontFamily: 'Montserrat, sans-serif'}}>
<span className="anim-wrap">
<span className="anim-line font-montserrat" style={{transitionDelay: '0.1s'}}>
                Ти експерт.
              </span>
</span>
<span className="anim-wrap">
<span className="anim-line font-montserrat" style={{transitionDelay: '0.18s'}}>
                Не менеджер з продажу
              </span>
</span>
<span className="anim-wrap">
<span className="anim-line font-montserrat" style={{transitionDelay: '0.26s'}}>
                і не айтішник.
              </span>
</span>
</h1>

<p className="max-w-[42rem] text-[1.05rem] sm:text-[1.15rem] lg:text-[1.2rem] leading-[1.7] font-normal mb-10 anim-fade-up text-slate-200/90" style={{transitionDelay: '0.35s'}}>
            Збираю систему під ключ: лендинг, чат-боти у мессенджерах, прийом
            оплат і автоматичну видачу продукту. Поки система продає — ти
            займаєшся експертизою.
            <br/>
<br/>
<span className="opacity-80 text-sm">
              Працює з: Telegram • Instagram • WhatsApp • TikTok • Messenger •
              Email • SMS — через ManyChat
            </span>
</p>

<div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border bg-gradient-to-r px-6 text-[14px] font-medium transition-all duration-300 anim-fade-up border-white/70 from-white to-slate-100 text-slate-950 shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:shadow-[0_14px_38px_rgba(255,255,255,0.25)]" href="#request-access" style={{transitionDelay: '0.45s'}}>
<span className="pointer-events-none absolute inset-0 rounded-full opacity-90 bg-[radial-gradient(circle_at_25%_20%,rgba(0,0,0,0.10),transparent_28%)]"></span>
<span className="relative z-10 inline-flex items-center gap-2">
                Записатися на безкоштовний розбір
                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border backdrop-blur-xl px-6 text-[14px] font-medium transition-all duration-300 anim-fade-up border-white/20 bg-white/10 text-white hover:bg-white/20 shadow-[0_6px_22px_rgba(0,0,0,0.2)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.3)]" href="#pricing" style={{transitionDelay: '0.55s'}}>
<span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(135deg,rgba(255,255,255,0.15),transparent_55%)]"></span>
<span className="relative z-10 inline-flex items-center gap-2">
                Переглянути тарифи
              </span>
</a>
</div>

<div className="glass-panel relative max-w-4xl rounded-[28px] px-5 py-5 sm:px-6 sm:py-6 anim-fade-up shadow-[0_24px_70px_rgba(0,0,0,0.4)]" style={{transitionDelay: '0.65s'}}>
<div className="pointer-events-none absolute inset-0 rounded-[28px] overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04)_28%,transparent_55%)]"></div>
<div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]"></div>
<div className="absolute -top-10 left-10 w-40 h-40 rounded-full bg-white/20 blur-3xl"></div>
</div>
<div className="corner-tl"></div>
<div className="corner-tr"></div>
<div className="corner-bl"></div>
<div className="corner-br"></div>
<div className="relative z-10 flex items-center justify-between gap-4 pb-4 mb-5 border-b border-white/20">
<div className="flex items-center gap-3">
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white">
                  System Snapshot
                </span>
</div>
<span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] border bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Live Sync
              </span>
</div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 md:divide-x md:divide-white/20">
<div className="px-2 md:px-5 anim-fade-up" style={{transitionDelay: '0.75s'}}>
<div className="font-display text-[2rem] sm:text-[2.2rem] leading-none tracking-[-0.04em] mb-2 text-white">
                  5–14 днів
                </div>
<div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-2 text-slate-300">
                  Реалізація
                </div>
<p className="text-sm leading-relaxed text-slate-300/90">
                  Повна збірка від стратегії до запуску.
                </p>
</div>
<div className="px-2 md:px-5 anim-fade-up" style={{transitionDelay: '0.85s'}}>
<div className="font-display text-[2rem] sm:text-[2.2rem] leading-none tracking-[-0.04em] mb-2 text-white">
                  Під ключ
                </div>
<div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-2 text-slate-300">
                  Композиція
                </div>
<p className="text-sm leading-relaxed text-slate-300/90">
                  Лендинг + бот + оплати + видача — однією системою.
                </p>
</div>
<div className="px-2 md:px-5 anim-fade-up" style={{transitionDelay: '0.95s'}}>
<div className="font-display text-[2rem] sm:text-[2.2rem] leading-none tracking-[-0.04em] mb-2 text-white">
                  4–5 проєктів
                </div>
<div className="font-mono text-[11px] uppercase tracking-[0.18em] mb-2 text-slate-300">
                  Формат
                </div>
<p className="text-sm leading-relaxed text-slate-300/90">
                  1 експерт веде паралельно — увага кожному запуску.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EEF4FA]" id="observed-layers">

<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)] pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none opacity-[0.045]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="layers-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#layers-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-7xl mx-auto">

<div className="max-w-3xl mb-14 lg:mb-16 anim-trigger">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
              Observed Layers
            </span>
</div>
<h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5">
<span className="block sm:inline anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                Monitor the layers that
              </span>
</span>
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                shape air quality
              </span>
</span>
</h2>
<p className="max-w-2xl text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up" style={{transitionDelay: '0.3s'}}>
            From particulate density to regional drift, the observatory
            translates distributed atmospheric signals into a precise live
            system view across monitored zones.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch anim-trigger">

<div className="flex flex-col gap-6 lg:gap-7 min-h-full">

<div className="group relative min-h-[320px] rounded-[28px] overflow-hidden bg-white/40 backdrop-blur-xl border border-white/55 shadow-[0_26px_70px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.52))]"></div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(147,197,253,0.22),transparent_28%),radial-gradient(circle_at_70%_65%,rgba(59,130,246,0.14),transparent_32%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_48%)]"></div>
</div>
<img alt="Atmospheric particulate visual" className="absolute inset-0 w-full h-full object-cover opacity-[0.48] mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aad8a2f0-bbfc-49f3-82c6-8c685a09bc97_1600w.jpg"/>
<div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
<div className="flex items-center justify-between gap-3">
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    LYR-01
                  </span>
<span className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/65 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-700">
                    Active
                  </span>
</div>
<div className="mt-auto">
<h3 className="font-display text-[1.55rem] lg:text-[1.7rem] leading-[1.08] tracking-[-0.03em] text-slate-950 mb-3">
                    Particulate Matter
                  </h3>
<p className="text-[0.98rem] leading-[1.7] text-slate-700 max-w-[24ch]">
                    Track PM2.5 and PM10 concentrations across active regions
                    with density shifts and historical comparison layers.
                  </p>
</div>
</div>
</div>

<div className="group relative min-h-[210px] rounded-[28px] overflow-hidden bg-white/36 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.50),transparent_52%)]"></div>
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(15,23,42,0.25) 1px, transparent 0)', backgroundSize: '14px 14px'}}></div>
<div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    Network
                  </span>
<iconify-icon className="text-blue-500 text-lg" icon="solar:radar-linear"></iconify-icon>
</div>
<div className="flex-grow flex flex-col justify-center">
<div className="font-display text-[3rem] lg:text-[3.4rem] leading-none tracking-[-0.05em] text-slate-950 mb-2">
                    186
                  </div>
<div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 mb-3">
                    Monitored Regions
                  </div>
<p className="text-sm leading-[1.7] text-slate-700 max-w-[25ch]">
                    Synchronized environmental zones under active atmospheric
                    observation.
                  </p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 lg:gap-7 min-h-full">

<div className="group relative min-h-[250px] rounded-[28px] overflow-hidden bg-white/34 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.45),transparent_55%)]"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-80"></div>
<div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between">
<div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-500">
<iconify-icon className="text-blue-500 text-base" icon="solar:wind-linear"></iconify-icon>
                  Drift Layer
                </div>
<div className="flex flex-col gap-4">
<p className="text-[1rem] lg:text-[1.05rem] leading-[1.75] text-slate-700">
                    The observatory models how airborne pollutants propagate
                    across monitored regions, identifying transport corridors,
                    directional shifts, and evolving cross-border exposure.
                  </p>
<p className="font-mono text-[11px] tracking-[0.16em] uppercase text-slate-500">
                    Updated continuously • forecast-weighted layer
                  </p>
</div>
</div>
</div>

<div className="group relative min-h-[280px] rounded-[28px] overflow-hidden bg-white/38 backdrop-blur-xl border border-white/55 shadow-[0_20px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59,130,246,0.78) 1px, transparent 0)', backgroundSize: '16px 16px'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(147,197,253,0.18),transparent_32%)]"></div>
<img alt="Sensor confidence and atmospheric field" className="absolute inset-0 w-full h-full object-cover opacity-[0.62] mix-blend-multiply transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d03f9abc-52b6-4771-a2cf-2dbf4d3a97e6_1600w.jpg"/>
<div className="relative z-10 p-7 lg:p-8 h-full flex flex-col items-center justify-center text-center">
<div className="font-display text-[3.4rem] lg:text-[4rem] leading-none tracking-[-0.05em] text-slate-950 mb-2">
                  9.2
                  <span className="text-blue-600">M</span>
</div>
<p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-600 mb-4">
                  Data Points Daily
                </p>
<p className="text-sm leading-[1.7] text-slate-700 max-w-[24ch]">
                  Environmental streams processed into a unified observatory
                  layer.
                </p>
</div>
</div>
</div>

<div className="flex flex-col min-h-full">
<div className="group relative flex-1 min-h-[540px] rounded-[28px] overflow-hidden bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)] border border-white/20 anim-fade-up">
<img alt="Regional exposure observatory" className="absolute inset-0 w-full h-full object-cover opacity-[0.62] transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eea0a2e4-0eca-4ec4-9bf7-df6b7f15206c_1600w.jpg"/>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.04)_0%,rgba(15,23,42,0.18)_24%,rgba(15,23,42,0.72)_72%,rgba(15,23,42,0.88)_100%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.28),transparent_20%)]"></div>
<div className="relative z-10 p-7 lg:p-8 h-full flex flex-col justify-between text-white">
<div className="flex items-center justify-between gap-3 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-300/85">
<span>Regional Exposure</span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Live model
                  </span>
</div>
<div className="mt-auto max-w-[26ch]">
<h3 className="font-display text-[1.8rem] lg:text-[2rem] leading-[1.08] tracking-[-0.03em] text-white mb-4">
                    Regional Exposure Index
                  </h3>
<p className="text-[0.98rem] leading-[1.75] text-slate-300 mb-6">
                    Map composite air-quality risk by geography, density, and
                    atmospheric intensity to identify zones where conditions may
                    carry the greatest operational impact.
                  </p>
<div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-slate-400">
<iconify-icon className="text-blue-400 text-base" icon="solar:global-linear"></iconify-icon>
                    population-weighted overlay
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EAF2F8]" id="network-status">

<div className="absolute inset-0 z-0">
<img alt="Atmospheric map background" className="w-full h-full object-cover opacity-[0.76]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9af4888e-3851-40e5-9934-0e5a980afaa3_3840w.jpg"/>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.22)_0%,rgba(234,242,248,0.38)_22%,rgba(234,242,248,0.56)_100%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,197,253,0.10),transparent_26%),radial-gradient(circle_at_78%_32%,rgba(59,130,246,0.07),transparent_26%)]"></div>
</div>

<div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.045]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="global-view-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#global-view-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-[1360px] mx-auto">

<div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 pb-16 items-end anim-trigger">
<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 mb-6 rounded-full border border-blue-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
                Global View
              </span>
</div>
<h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light max-w-[12ch]">
<span className="block sm:inline anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                  A live map of atmospheric
                </span>
</span>
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                  conditions
                </span>
</span>
</h2>
</div>
<p className="text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 text-left md:pb-2 max-w-[40ch] anim-fade-up" style={{transitionDelay: '0.3s'}}>
            A continuously updated environmental layer showing pollutant
            movement, sensor activity, and emerging air-quality events across
            connected regions.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 anim-trigger">

<div className="group relative rounded-[24px] p-6 flex flex-col gap-6 overflow-hidden border border-white/60 bg-white/38 backdrop-blur-2xl shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up">

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.48),transparent_52%)]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent opacity-80"></div>
<div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-200/18 blur-[90px]"></div>
<div className="relative z-10">
<h3 className="font-display text-[1.4rem] lg:text-[1.55rem] tracking-[-0.03em] text-slate-950 font-medium">
                Global atmospheric state
              </h3>
<p className="text-sm text-slate-600 leading-[1.75] mt-1 max-w-md">
                Observe concentration, drift, and environmental intensity across
                connected monitoring regions.
              </p>
</div>

<div className="relative z-10 flex-1 rounded-[20px] overflow-hidden flex flex-col md:flex-row border border-white/50 bg-white/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(148,163,184,0.12)] ring-1 ring-white/40 min-h-[360px]">

<div className="w-full md:w-[40%] border-b md:border-b-0 md:border-r border-white/35 flex flex-col bg-white/[0.18]">
<div className="p-4 border-b border-white/35 flex justify-between items-center bg-white/[0.18]">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                    Active Regions
                  </span>
<span className="font-mono text-[10px] bg-blue-100 text-blue-700 border border-blue-200 px-1.5 py-0.5 rounded">
                    186
                  </span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-1.5">

<div className="p-2.5 rounded-lg border border-blue-200/50 bg-white/50 flex items-center justify-between cursor-pointer shadow-sm">
<div className="flex items-center gap-3">
<div className="relative">
<div className="absolute inset-0 bg-blue-500/15 rounded-full animate-pulse"></div>
<div className="w-2 h-2 bg-blue-500 rounded-full relative z-10"></div>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-800 font-medium">
                          North America West
                        </span>
<span className="text-[10px] text-slate-500 font-mono">
                          exposure-weighted
                        </span>
</div>
</div>
<iconify-icon className="text-blue-500 text-sm" icon="solar:wind-linear"></iconify-icon>
</div>

<div className="p-2.5 rounded-lg border border-transparent hover:border-white/40 hover:bg-white/[0.34] flex items-center justify-between cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-700 font-medium">
                          Central Europe
                        </span>
<span className="text-[10px] text-slate-500 font-mono">
                          stable confidence
                        </span>
</div>
</div>
<iconify-icon className="text-slate-400 text-sm" icon="solar:global-linear"></iconify-icon>
</div>

<div className="p-2.5 rounded-lg border border-transparent hover:border-white/40 hover:bg-white/[0.34] flex items-center justify-between cursor-pointer transition-colors">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-amber-500 rounded-full"></div>
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-700 font-medium">
                          South Asia Corridor
                        </span>
<span className="text-[10px] text-slate-500 font-mono">
                          elevated drift
                        </span>
</div>
</div>
<iconify-icon className="text-amber-500 text-sm" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
</div>
</div>

<div className="w-full md:w-[60%] flex flex-col relative">

<div className="flex p-4 border-b border-white/35 gap-4 bg-white/[0.14]">
<div className="flex-1 flex flex-col gap-1.5">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                      Active Events
                    </span>
<div className="flex items-end gap-1.5">
<span className="text-2xl text-slate-950 font-medium tracking-tight leading-none">
                        34
                      </span>
<span className="text-[10px] text-blue-600 font-mono mb-0.5">
                        live
                      </span>
</div>
</div>
<div className="w-px bg-white/35"></div>
<div className="flex-1 flex flex-col gap-1.5">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                      Forecast Interval
                    </span>
<div className="flex items-end gap-2">
<span className="text-2xl text-slate-950 font-medium tracking-tight leading-none">
                        6
                        <span className="text-sm text-slate-500 font-light">
                          min
                        </span>
</span>
<span className="text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1 py-0.5 rounded font-medium mb-1">
                        SYNCED
                      </span>
</div>
</div>
</div>

<div className="p-4 flex-1 flex flex-col justify-end relative overflow-hidden min-h-[180px]">
<img alt="Live atmospheric conditions map" className="absolute inset-0 w-full h-full object-cover opacity-[0.26]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47012244-8175-4168-9400-e6041fe4df8b_3840w.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.20),rgba(234,242,248,0.10)_26%,rgba(255,255,255,0.04)_100%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_32%,rgba(96,165,250,0.22),transparent_18%),radial-gradient(circle_at_42%_68%,rgba(147,197,253,0.18),transparent_22%)]"></div>

<div className="absolute inset-x-0 bottom-4 top-4 flex flex-col justify-between opacity-[0.14] pointer-events-none">
<div className="border-b border-dashed border-slate-500/40"></div>
<div className="border-b border-dashed border-slate-500/40"></div>
<div className="border-b border-dashed border-slate-500/40"></div>
</div>

<div className="absolute inset-0 px-4 py-4 pointer-events-none">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 60">
<path d="M8,46 C28,34 46,22 68,24 C92,26 104,14 128,18 C152,22 168,36 192,20" fill="none" stroke="rgba(59,130,246,0.55)" strokeLinecap="round" strokeWidth="1.2"></path>
<path d="M18,18 C44,14 62,36 92,40 C118,44 142,34 178,42" fill="none" stroke="rgba(148,163,184,0.42)" strokeLinecap="round" strokeWidth="1"></path>
<circle cx="128" cy="18" fill="#3B82F6" r="2.4"></circle>
<circle cx="192" cy="20" fill="#10B981" r="2.4"></circle>
<circle cx="68" cy="24" fill="#F59E0B" r="2.4"></circle>
</svg>
</div>
</div>

<div className="h-10 border-t border-white/35 px-4 flex items-center justify-between bg-white/[0.14]">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-[11px] text-slate-600 truncate font-light">
                      Drift model updated for North Pacific transition zone
                    </span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-[24px] p-6 flex flex-col gap-6 overflow-hidden border border-white/60 bg-white/38 backdrop-blur-2xl shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up">

<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.48),transparent_52%)]"></div>
<div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-200/18 blur-[90px]"></div>
<div className="relative z-10">
<h3 className="font-display text-[1.4rem] lg:text-[1.55rem] tracking-[-0.03em] text-slate-950 font-medium">
                Regional exposure console
              </h3>
<p className="text-sm text-slate-600 leading-[1.75] mt-1 max-w-md">
                Analyze risk conditions, intensity shifts, and localized
                atmospheric anomalies across monitored zones.
              </p>
</div>

<div className="relative z-10 flex-1 rounded-[20px] overflow-hidden flex flex-col md:flex-row border border-white/50 bg-white/30 backdrop-blur-xl shadow-[0_10px_40px_rgba(148,163,184,0.12)] ring-1 ring-white/40 min-h-[360px]">

<div className="w-full md:w-[45%] border-b md:border-b-0 md:border-r border-white/35 flex items-center justify-center relative p-8 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.08)_0%,transparent_70%)]">
<span className="absolute top-4 left-4 font-mono text-[9px] text-slate-500 tracking-[0.18em] border border-white/40 bg-white/[0.26] px-1.5 py-0.5 rounded">
                  REGIONAL_SCAN::LIVE
                </span>

<div className="relative w-36 h-36">
<div className="absolute inset-0 border border-slate-300/45 rounded-full"></div>
<div className="absolute inset-[18%] border border-slate-300/40 rounded-full"></div>
<div className="absolute inset-[36%] border border-slate-300/45 rounded-full"></div>
<div className="absolute inset-[54%] border border-blue-300/40 rounded-full bg-blue-100/20"></div>
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-300/30 -translate-x-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-slate-300/30 -translate-y-1/2"></div>
<div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(59,130,246,0.45)]"></div>
<div className="absolute top-[20%] right-[25%] w-1.5 h-1.5 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.45)]"></div>
<div className="absolute bottom-[28%] left-[18%] w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.45)]">
<div className="absolute inset-0 rounded-full border border-sky-400/60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>
<div className="absolute top-[65%] right-[20%] w-1 h-1 bg-emerald-500 rounded-full opacity-70"></div>
<div className="absolute inset-0 rounded-full border-r border-blue-400/55 animate-[spin_3.5s_linear_infinite]" style={{background: 'conic-gradient(from 0deg, transparent 62%, rgba(59,130,246,0.12) 100%)', mixBlendMode: 'screen'}}></div>
</div>
</div>

<div className="w-full md:w-[55%] flex flex-col bg-white/[0.10]">
<div className="p-4 border-b border-white/35 flex justify-between items-center bg-white/[0.14]">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                    Event Log
                  </span>
<span className="font-mono text-[10px] text-blue-700 bg-blue-100 border border-blue-200 px-1.5 py-0.5 rounded">
                    2 ACTIVE
                  </span>
</div>
<div className="flex-1 overflow-hidden p-3 flex flex-col gap-2 relative z-10">

<div className="p-3 rounded-lg bg-amber-50 border border-amber-200/70 flex flex-col gap-2 relative shadow-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
<span className="text-[11px] text-amber-700 font-medium">
                          Elevated particulate drift
                        </span>
</div>
<span className="text-[9px] text-slate-500 font-mono">
                        1m ago
                      </span>
</div>
<span className="text-[11px] text-slate-600 font-light truncate">
                      Regional spread intensity rising across monitored
                      corridor.
                    </span>
<div className="flex justify-end mt-1">
<button className="text-[9px] text-amber-800 bg-amber-100 hover:bg-amber-200 border border-amber-200 px-3 py-1 rounded transition-colors font-medium tracking-wide">
                        REVIEW
                      </button>
</div>
</div>

<div className="p-3 rounded-lg bg-blue-50 border border-blue-200/70 flex flex-col gap-2 relative hover:border-blue-300 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-[11px] text-blue-700 font-medium">
                          Sensor confidence realigned
                        </span>
</div>
<span className="text-[9px] text-slate-500 font-mono">
                        4m ago
                      </span>
</div>
<span className="text-[11px] text-slate-600 font-light truncate">
                      Calibration shift confirmed across weighted signal zones.
                    </span>
<div className="flex justify-end mt-1">
<button className="text-[9px] text-slate-700 bg-white/70 hover:bg-white border border-white/80 px-3 py-1 rounded transition-colors font-medium tracking-wide">
                        INSPECT
                      </button>
</div>
</div>

<div className="p-3 rounded-lg border border-transparent hover:border-white/40 hover:bg-white/[0.20] flex flex-col gap-2 relative transition-colors opacity-80">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-[11px] text-emerald-700 font-medium">
                          Forecast layer stabilized
                        </span>
</div>
<span className="text-[9px] text-slate-500 font-mono">
                        12m ago
                      </span>
</div>
<span className="text-[11px] text-slate-500 font-light truncate">
                      Short-range exposure model returned to nominal confidence.
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 anim-trigger">

<div className="relative rounded-[22px] p-5 overflow-hidden border border-white/60 bg-white/34 backdrop-blur-xl shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]"></div>
<div className="relative z-10 flex items-center justify-between mb-5">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                Automation Rules
              </span>
<iconify-icon className="text-slate-400 text-sm" icon="solar:shuffle-linear"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded border border-blue-200 bg-blue-50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.08)]">
<iconify-icon className="text-cyan-600 text-sm" icon="solar:radar-2-linear"></iconify-icon>
</div>
<div className="h-px bg-slate-300/40 flex-1 relative overflow-hidden">
<div className="absolute inset-0 bg-blue-400/50 w-full animate-pulse"></div>
</div>
<div className="w-7 h-7 rounded border border-emerald-200 bg-emerald-50 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.08)]">
<iconify-icon className="text-emerald-600 text-sm" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between font-mono text-[10px] text-slate-500 uppercase">
<span>On anomaly</span>
<span>Auto-isolate</span>
</div>
<div className="pt-2 border-t border-white/35 text-[11px] text-slate-600 font-light leading-relaxed">
                Automated response policy active. 24 monitored transitions
                stabilized without manual intervention this week.
              </div>
</div>
</div>

<div className="relative rounded-[22px] p-5 overflow-hidden border border-white/60 bg-white/34 backdrop-blur-xl shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]"></div>
<div className="relative z-10 flex items-center justify-between mb-5">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                System Event Log
              </span>
<iconify-icon className="text-slate-400 text-sm" icon="solar:history-linear"></iconify-icon>
</div>
<div className="relative z-10 pl-3.5 flex flex-col gap-4 mt-1">
<div className="absolute left-[3px] top-1.5 bottom-1.5 w-px bg-slate-300/40"></div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-white shadow-[0_0_5px_rgba(16,185,129,0.25)]"></div>
<span className="text-[11px] text-slate-700 font-medium">
                  Drift update cycle complete
                </span>
<span className="text-[9px] text-slate-500 font-mono">
                  10:42 AM
                </span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-blue-500 border-2 border-white"></div>
<span className="text-[11px] text-slate-700 font-medium">
                  Exposure model synchronized
                </span>
<span className="text-[9px] text-slate-500 font-mono">
                  09:15 AM
                </span>
</div>
<div className="relative flex flex-col gap-0.5">
<div className="absolute -left-[18px] top-1.5 w-2 h-2 rounded-full bg-slate-400 border-2 border-white"></div>
<span className="text-[11px] text-slate-500 font-medium">
                  Scheduled calibration routine
                </span>
<span className="text-[9px] text-slate-400 font-mono">
                  02:00 AM
                </span>
</div>
</div>
</div>

<div className="relative rounded-[22px] p-5 overflow-hidden border border-white/60 bg-white/34 backdrop-blur-xl shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] anim-fade-up">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)]"></div>
<div className="relative z-10 flex items-center justify-between mb-5">
<span className="font-mono text-[10px] text-slate-500 uppercase tracking-[0.18em]">
                Infra Health
              </span>
<iconify-icon className="text-slate-400 text-sm" icon="solar:server-2-linear"></iconify-icon>
</div>
<div className="relative z-10 flex items-center gap-5 mt-2">
<div className="w-14 h-14 relative flex-shrink-0">
<svg className="w-full h-full -rotate-90" viewbox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="16" stroke="rgba(148,163,184,0.15)" strokeWidth="3"></circle>
<circle cx="18" cy="18" fill="none" r="16" stroke="#10B981" stroke-dasharray="100" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="3"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center flex-col">
<span className="text-base font-medium text-slate-950 tracking-tight leading-none mt-0.5">
                    85
                  </span>
<span className="text-[7px] text-emerald-600 font-medium tracking-wide mt-0.5">
                    SCORE
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col gap-3">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between font-mono text-[9px] text-slate-500">
<span>CPU Allocation</span>
<span className="text-emerald-600">Stable</span>
</div>
<div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[40%] rounded-full"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between font-mono text-[9px] text-slate-500">
<span>Memory Usage</span>
<span className="text-amber-600">82%</span>
</div>
<div className="h-1 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 w-[82%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EEF4FA]" id="methodology">

<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),rgba(238,244,250,0.72)_24%,rgba(234,242,248,0.96)_100%)] pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none opacity-[0.045]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="logic-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#logic-grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-[-18%] left-[-8%] w-[42%] h-[42%] blur-[110px] rounded-full pointer-events-none bg-blue-300/14"></div>
<div className="absolute bottom-[-18%] right-[-8%] w-[40%] h-[40%] blur-[110px] rounded-full pointer-events-none bg-sky-300/10"></div>
<div className="relative z-10 max-w-[1360px] mx-auto">

<div className="max-w-4xl mx-auto mb-16 lg:mb-20 text-center anim-trigger">
<div className="inline-flex items-center justify-center px-4 py-2 rounded-full border mb-6 backdrop-blur-xl bg-white/60 border-blue-200/70 shadow-[0_6px_24px_rgba(148,163,184,0.10)] anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
              System Logic
            </span>
</div>
<h2 className="font-display text-[2.05rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.04] tracking-[-0.045em] text-slate-950 font-light mb-6 max-w-[20ch] sm:max-w-[20ch] mx-auto text-center">
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                From distributed sensing to
              </span>
</span>
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                environmental clarity
              </span>
</span>
</h2>
<p className="text-[1rem] sm:text-[1.06rem] max-w-2xl mx-auto leading-[1.75] text-slate-600 anim-fade-up" style={{transitionDelay: '0.3s'}}>
            The observatory transforms fragmented atmospheric inputs into a
            unified operational view that can be monitored, interpreted, and
            acted on.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 max-w-7xl mx-auto items-start anim-trigger">

<div className="col-span-1 lg:col-span-5 flex flex-col space-y-3">

<div className="anim-fade-up" style={{transitionDelay: '0.1s'}}>
<button className="logic-step group w-full relative overflow-hidden rounded-[22px] bg-gradient-to-br from-white/82 to-white/52 p-8 md:p-10 cursor-pointer border border-blue-200/70 shadow-[0_22px_60px_rgba(148,163,184,0.12),0_8px_24px_rgba(15,23,42,0.04)] text-left transition-all duration-500" data-step-nav="0" type="button">
<div className="absolute inset-0 bg-blue-500/[0.04] pointer-events-none"></div>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.56),transparent_60%)] pointer-events-none"></div>
<div className="flex items-start justify-between w-full relative z-10">
<h3 className="text-4xl md:text-5xl tracking-tighter font-light text-slate-950">
                    Collect
                  </h3>
<span className="text-sm font-medium mt-1 ml-2 font-mono text-blue-700">
                    01
                  </span>
</div>
</button>
</div>

<div className="anim-fade-up" style={{transitionDelay: '0.2s'}}>
<button className="logic-step group w-full relative rounded-[22px] p-8 md:p-10 cursor-pointer transition-all duration-500 border border-white/60 bg-white/34 backdrop-blur-xl hover:bg-white/[0.44] hover:border-blue-200/70 text-left shadow-[0_18px_50px_rgba(148,163,184,0.10),0_6px_18px_rgba(15,23,42,0.04)]" data-step-nav="1" type="button">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none rounded-[22px]"></div>
<div className="flex items-start justify-between w-full relative z-10">
<h3 className="text-4xl md:text-5xl text-slate-500 group-hover:text-slate-800 tracking-tighter font-light transition-colors duration-300">
                    Normalize
                  </h3>
<span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 mt-1 ml-2 font-mono transition-colors">
                    02
                  </span>
</div>
</button>
</div>

<div className="anim-fade-up" style={{transitionDelay: '0.3s'}}>
<button className="logic-step group w-full relative rounded-[22px] p-8 md:p-10 cursor-pointer transition-all duration-500 border border-white/60 bg-white/34 backdrop-blur-xl hover:bg-white/[0.44] hover:border-blue-200/70 text-left shadow-[0_18px_50px_rgba(148,163,184,0.10),0_6px_18px_rgba(15,23,42,0.04)]" data-step-nav="2" type="button">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none rounded-[22px]"></div>
<div className="flex items-start justify-between w-full relative z-10">
<h3 className="text-4xl md:text-5xl text-slate-500 group-hover:text-slate-800 tracking-tighter font-light transition-colors duration-300">
                    Interpret
                  </h3>
<span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 mt-1 ml-2 font-mono transition-colors">
                    03
                  </span>
</div>
</button>
</div>

<div className="anim-fade-up" style={{transitionDelay: '0.4s'}}>
<button className="logic-step group w-full relative rounded-[22px] p-8 md:p-10 cursor-pointer transition-all duration-500 border border-white/60 bg-white/34 backdrop-blur-xl hover:bg-white/[0.44] hover:border-blue-200/70 text-left shadow-[0_18px_50px_rgba(148,163,184,0.10),0_6px_18px_rgba(15,23,42,0.04)]" data-step-nav="3" type="button">
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_60%)] pointer-events-none rounded-[22px]"></div>
<div className="flex items-start justify-between w-full relative z-10">
<h3 className="text-4xl md:text-5xl text-slate-500 group-hover:text-slate-800 tracking-tighter font-light transition-colors duration-300">
                    Forecast
                  </h3>
<span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 mt-1 ml-2 font-mono transition-colors">
                    04
                  </span>
</div>
</button>
</div>
</div>

<div className="col-span-1 lg:col-span-7 flex flex-col gap-10 pt-2 lg:pt-0 sticky top-10">

<div className="w-full aspect-[16/10] overflow-hidden rounded-[24px] relative group bg-white/30 backdrop-blur-2xl border border-white/60 shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] anim-fade-up" style={{transitionDelay: '0.2s'}}>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_52%)] z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(96,165,250,0.22),transparent_22%),radial-gradient(circle_at_28%_72%,rgba(147,197,253,0.18),transparent_24%)] z-10 pointer-events-none"></div>
<img alt="Collect stage environmental sensing" className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] logic-step-image" data-step-image="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3160dde-0640-4209-ba49-2fdd186ab7aa_1600w.jpg?w=800&amp;q=80" style={{transition: 'opacity 480ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)'}}/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#EEF4FA]/82 via-[#EEF4FA]/12 to-transparent z-10"></div>
</div>

<div className="anim-fade-up" style={{transitionDelay: '0.3s'}}>
<h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight mb-4 text-slate-950 logic-step-title" data-step-title="" style={{transition: 'opacity 320ms'}}>
                Collect
              </h3>
<p className="md:text-[1.1rem] text-[1rem] leading-[1.8] font-light mb-8 text-slate-600 max-w-[62ch] transition-all duration-500 logic-step-description" data-step-description="" style={{transition: 'opacity 320ms'}}>
                Aggregate live environmental streams from sensor networks,
                satellite layers, and regional measurements to establish a
                unified observational input layer.
              </p>
<a className="group inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-all duration-300 bg-slate-950 text-white hover:bg-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.14)]" href="#access">
<span className="mr-2">Explore methodology</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

</section>

<section className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EDF4FA]" id="operational-value">

<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(237,244,250,0.72)_26%,rgba(230,239,247,0.96)_100%)] pointer-events-none"></div>

<div className="absolute inset-0 pointer-events-none opacity-[0.04]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="operational-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#operational-grid)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-[-10%] left-[-6%] w-[34rem] h-[34rem] rounded-full bg-blue-200/18 blur-[110px] pointer-events-none"></div>
<div className="absolute bottom-[-12%] right-[-6%] w-[30rem] h-[30rem] rounded-full bg-sky-200/14 blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-[1360px] mx-auto">

<div className="flex flex-col items-start mb-16 lg:mb-20 gap-6 max-w-4xl anim-trigger">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
              Operational Value
            </span>
</div>
<h2 className="font-display text-[2.05rem] sm:text-[2.65rem] lg:text-[3.45rem] leading-[1.04] tracking-[-0.045em] text-slate-950 font-light max-w-20ch] sm:max-w-[20ch] lg:max-w-[20ch]">
<span className="inline sm:block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                Built for decisions that
              </span>
</span>
<span className="inline sm:block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                depend on cleaner signals
              </span>
</span>
</h2>
<p className="text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 max-w-[44rem] anim-fade-up" style={{transitionDelay: '0.3s'}}>
            Environmental visibility matters most when conditions are changing
            quickly. This section shows how the observatory turns cleaner
            atmospheric signals into earlier detection, stronger forecasting,
            and more confident response planning.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 anim-trigger">

<div className="relative bg-white/62 backdrop-blur-xl p-8 rounded-[24px] flex flex-col justify-between h-[520px] shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] border border-white/70 hover:border-blue-200/80 transition-colors overflow-hidden anim-fade-up" style={{transitionDelay: '0.1s'}}>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.46),transparent_60%)] pointer-events-none"></div>
<div className="relative z-10">
<div className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 mb-6">
                Outcome 01
              </div>
<h3 className="font-display text-[1.35rem] leading-[1.15] tracking-[-0.03em] text-slate-950 mb-6">
                Earlier detection with clearer environmental signals
              </h3>
<p className="text-slate-600 leading-[1.8] text-sm">
                Detect meaningful air-quality shifts before regional conditions
                fully intensify, reducing lag between signal emergence and
                operational awareness.
              </p>
</div>
<div className="mt-8 border-t border-white/70 pt-6 relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Operational Impact
                </span>
<iconify-icon className="text-blue-500 text-base" icon="solar:radar-2-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
<span className="font-mono text-[12px] uppercase tracking-[0.16em] text-blue-700">
                    MT
                  </span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900 leading-none mb-1">
                    Monitoring teams
                  </div>
<div className="text-xs text-slate-500 font-medium">
                    Earlier anomaly recognition
                  </div>
</div>
</div>
</div>
</div>

<div className="relative rounded-[24px] overflow-hidden h-[520px] group bg-slate-950 shadow-[0_20px_60px_rgba(15,23,42,0.14)] border border-white/30 anim-fade-up" style={{transitionDelay: '0.2s'}}>
<img alt="Atmospheric operational visibility" className="transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100 opacity-88 w-full h-full object-cover absolute inset-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/163e54e9-84b2-4fa6-a55b-81d745775469_3840w.webp?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-slate-950/72"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_26%,rgba(96,165,250,0.30),transparent_18%)]"></div>
<div className="absolute inset-0 flex flex-col z-10 text-white p-8 justify-between">
<div className="flex justify-between items-start">
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-200/85">
                  Regional Visibility
                </span>
</div>
<div className="max-w-[22ch]">
<h3 className="font-display text-[1.55rem] leading-[1.12] tracking-[-0.03em] text-white mb-3">
                  Sharper visibility across evolving exposure zones
                </h3>
<p className="text-sm leading-[1.75] text-slate-300">
                  Understand where atmospheric pressure is building, how it is
                  spreading, and which monitored regions require closer
                  attention.
                </p>
</div>
<span className="text-[10px] font-mono opacity-70 uppercase tracking-[0.18em] ml-auto">
                Live Observability
              </span>
</div>
</div>

<div className="relative bg-white/62 backdrop-blur-xl p-8 rounded-[24px] flex flex-col items-center justify-between h-[520px] shadow-[0_18px_50px_rgba(148,163,184,0.12),0_6px_18px_rgba(15,23,42,0.04)] border border-white/70 hover:border-blue-200/80 transition-colors overflow-hidden group anim-fade-up" style={{transitionDelay: '0.3s'}}>

<div className="absolute inset-0 pointer-events-none opacity-[0.05]">
<svg className="w-full h-full stroke-slate-900 fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="20"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.46),transparent_60%)] pointer-events-none"></div>
<div className="text-center relative z-10 mt-4">
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 block mb-2">
                Forecast Reliability
              </span>
<span className="text-base font-medium text-slate-900 tracking-tight">
                Operational response confidence
              </span>
</div>
<div className="relative w-56 h-56 flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center">
<div className="font-display text-5xl font-medium text-slate-950 tracking-[-0.05em]">
                  3.4
                  <span className="text-blue-600">×</span>
</div>
</div>
</div>
<div className="w-full relative z-10">
<div className="text-center mb-5">
<p className="text-sm leading-[1.75] text-slate-600 max-w-[24ch] mx-auto">
                  Broader regional visibility across layered atmospheric
                  conditions and monitored shifts.
                </p>
</div>
<button className="w-full bg-slate-950 text-white text-sm font-medium py-3.5 rounded-xl hover:bg-blue-600 transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                View system impact
              </button>
</div>
</div>

<div className="flex flex-col overflow-hidden group bg-center text-white h-[520px] bg-cover rounded-[24px] p-8 relative shadow-[0_20px_60px_rgba(15,23,42,0.14)] justify-between border border-white/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3eac46a-01b0-4bae-a362-638327533871_3840w.webp?w=800&amp;q=80)] anim-fade-up" style={{transitionDelay: '0.4s'}}>

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-400/20 transition-colors duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/12 via-slate-950/18 to-slate-950/78"></div>
<div className="flex justify-between items-start relative z-10">
<span className="font-display text-[1.2rem] font-medium tracking-tight">
                Response Planning
              </span>
<svg aria-hidden="true" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path>
</svg>
</div>
<div className="relative z-10">
<p className="leading-[1.7] text-[1.12rem] text-white max-w-[260px]">
                Move from isolated measurements to clearer response planning
                with live context, forecast visibility, and stronger operational
                confidence.
              </p>
</div>
<div className="space-y-2 text-sm relative z-10">
<div className="flex text-slate-200 text-[1rem] gap-2 items-center">
<span className="w-1 h-1 rounded-full bg-blue-400"></span>
                Earlier anomaly recognition
              </div>
<div className="flex text-slate-200 text-[1rem] gap-2 items-center">
<span className="w-1 h-1 rounded-full bg-blue-400"></span>
                Sharper regional prioritization
              </div>
<div className="flex text-slate-200 text-[1rem] gap-2 items-center pt-3">
<span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                Built for environmental intelligence teams
              </div>
</div>
</div>
</div>
</div>
</section>


<section className="relative py-24 lg:py-28 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-white" id="pricing">
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(237,244,250,0.4),rgba(255,255,255,1)_24%,rgba(255,255,255,1)_100%)] pointer-events-none"></div>
<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="pricing-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#pricing-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-[1360px] mx-auto">
<div className="max-w-3xl mb-14 lg:mb-20 text-center mx-auto anim-trigger">
<div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
              Access Plans
            </span>
</div>
<h2 className="font-display text-[2.35rem] sm:text-[2.9rem] lg:text-[3.45rem] leading-[1.02] tracking-[-0.04em] text-slate-950 font-light mb-5">
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                Select your level of
              </span>
</span>
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                observatory access
              </span>
</span>
</h2>
<p className="text-[1rem] sm:text-[1.06rem] leading-[1.75] text-slate-600 anim-fade-up max-w-2xl mx-auto" style={{transitionDelay: '0.3s'}}>
            From individual research to enterprise-grade environmental
            intelligence layers, choose the plan that aligns with your
            operational requirements.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 anim-trigger items-stretch max-w-6xl mx-auto">

<div className="group relative rounded-[32px] p-8 flex flex-col bg-white border-2 border-slate-50 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.15),0_12px_24px_-6px_rgba(15,23,42,0.08)] anim-fade-up transition-transform duration-500 hover:-translate-y-2 z-10" style={{transitionDelay: '0.4s'}}>
<div className="relative z-10 flex-1 flex flex-col">
<div className="inline-flex self-start px-5 py-2 rounded-full bg-slate-900 text-white text-[13px] font-semibold shadow-[0_8px_16px_rgba(15,23,42,0.2)] mb-6 tracking-wide">
                Research
              </div>
<h3 className="font-display text-[2.2rem] tracking-tight text-slate-950 font-semibold mb-4">
                Free
              </h3>
<div className="pl-4 border-l-[3px] border-slate-200 mb-8 h-14 flex items-center">
<p className="text-[0.95rem] text-slate-700 leading-[1.5] font-medium">
                  Basic access to global atmospheric state maps and delayed
                  regional data.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-slate-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Global atmospheric map access</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-slate-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>24-hour delayed regional data</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-slate-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Basic particulate matter layer</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-14 rounded-full border border-slate-200 bg-gradient-to-b from-white to-slate-50 text-[1rem] font-semibold text-slate-900 transition-all duration-300 hover:scale-105 shadow-[0_12px_24px_rgba(15,23,42,0.1),inset_0_-4px_0_rgba(15,23,42,0.05)]" href="#request-access">
                Get Started
              </a>
</div>
</div>

<div className="group relative rounded-[32px] p-8 flex flex-col bg-white border-2 border-slate-50 shadow-[0_40px_80px_-20px_rgba(59,130,246,0.25),0_16px_32px_-8px_rgba(59,130,246,0.15)] transform md:-translate-y-4 anim-fade-up transition-transform duration-500 hover:-translate-y-6 z-20" style={{transitionDelay: '0.5s'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/70 bg-blue-50 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blue-700 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Most Popular
              </span>
</div>
<div className="relative z-10 flex-1 flex flex-col pt-2">
<div className="inline-flex self-start px-5 py-2 rounded-full bg-blue-600 text-white text-[13px] font-semibold shadow-[0_8px_16px_rgba(59,130,246,0.3)] mb-6 tracking-wide">
                Professional
              </div>
<h3 className="font-display text-[2.2rem] tracking-tight text-slate-950 font-semibold mb-4">
                $49
                <span className="text-lg text-slate-500 font-medium ml-1">/mo</span>
</h3>
<div className="pl-4 border-l-[3px] border-blue-200 mb-8 h-14 flex items-center">
<p className="text-[0.95rem] text-slate-700 leading-[1.5] font-medium">
                  Live environmental streams and operational response layers for
                  teams.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[0.95rem] text-slate-900 font-medium">
<iconify-icon className="text-blue-600 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Everything in Research, plus:</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-blue-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Live synchronized data streams</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-blue-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Regional Exposure Index access</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-blue-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>6-minute forecast intervals</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-700">
<iconify-icon className="text-blue-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Event log and anomaly alerts</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-14 rounded-full border border-transparent bg-gradient-to-b from-blue-500 to-blue-600 text-[1rem] font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_12px_24px_rgba(59,130,246,0.35),inset_0_-4px_0_rgba(0,0,0,0.15)]" href="#request-access">
                Upgrade to Pro
              </a>
</div>
</div>

<div className="group relative rounded-[32px] p-8 flex flex-col bg-[#1a1c23] border-2 border-[#2a2d36] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5),0_16px_32px_-8px_rgba(0,0,0,0.3)] anim-fade-up overflow-hidden transition-transform duration-500 hover:-translate-y-2 z-10" style={{transitionDelay: '0.6s'}}>
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="inline-flex self-start px-5 py-2 rounded-full bg-slate-800 text-white text-[13px] font-semibold shadow-[0_8px_16px_rgba(0,0,0,0.3)] mb-6 border border-slate-700/50 tracking-wide">
                Enterprise
              </div>
<h3 className="font-display text-[2.2rem] tracking-tight text-white font-semibold mb-4">
                Custom
              </h3>
<div className="pl-4 border-l-[3px] border-slate-700 mb-8 h-14 flex items-center">
<p className="text-[0.95rem] text-slate-300 leading-[1.5] font-medium">
                  Dedicated API access and full atmospheric system integration.
                </p>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-[0.95rem] text-white font-medium">
<iconify-icon className="text-blue-400 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Everything in Professional, plus:</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-300">
<iconify-icon className="text-slate-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Full API access &amp; integrations</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-300">
<iconify-icon className="text-slate-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom sensor assimilation</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-300">
<iconify-icon className="text-slate-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated compliance reporting</span>
</li>
<li className="flex items-start gap-3 text-[0.95rem] text-slate-300">
<iconify-icon className="text-slate-500 text-lg flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>24/7 SLA &amp; intelligence support</span>
</li>
</ul>
<a className="w-full inline-flex items-center justify-center h-14 rounded-full border border-slate-700/50 bg-gradient-to-b from-[#2a2d36] to-[#1a1c23] text-[1rem] font-semibold text-white transition-all duration-300 hover:scale-105 shadow-[0_12px_24px_rgba(0,0,0,0.4),inset_0_-4px_0_rgba(0,0,0,0.3)]" href="#request-access">
                Contact Sales
              </a>
</div>
</div>
</div>
</div>
</section>
<section className="relative py-28 lg:py-36 px-6 md:px-8 lg:px-12 border-t border-slate-200/50 overflow-hidden bg-[#EAF2F8]" id="request-access">

<div className="absolute inset-0 z-0">
<img alt="Atmospheric observatory background" className="w-full h-full object-cover opacity-[0.72]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd510eec-46d6-486e-863c-dcf153a97477_3840w.jpg"/>
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.18)_0%,rgba(234,242,248,0.34)_24%,rgba(234,242,248,0.82)_100%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(147,197,253,0.10),transparent_24%),radial-gradient(circle_at_76%_34%,rgba(59,130,246,0.08),transparent_24%)]"></div>
</div>

<div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]">
<svg className="w-full h-full" style={{WebkitMaskImage: 'radial-gradient(100% 100% at top left, black, transparent)', maskImage: 'radial-gradient(100% 100% at top left, black, transparent)'}} xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="cta-grid" patternunits="userSpaceOnUse" width="24">
<circle cx="2" cy="2" fill="#0f172a" r="1.2"></circle>
</pattern>
</defs>
<rect fill="url(#cta-grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 max-w-[1360px] mx-auto">
<footer className="sm:p-8 bg-white/34 backdrop-blur-2xl border border-white/60 rounded-[30px] shadow-[0_28px_80px_rgba(148,163,184,0.14),0_8px_24px_rgba(15,23,42,0.05)] pt-8 pr-6 pb-6 pl-6 sm:pt-10 sm:pr-8 sm:pb-8 sm:pl-8 overflow-hidden relative anim-trigger">

<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.42),transparent_52%)] pointer-events-none"></div>
<div className="absolute -top-20 right-0 w-72 h-72 rounded-full bg-blue-200/14 blur-[90px] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 relative z-10">

<div>
<div className="inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/60 backdrop-blur-xl px-4 py-2 shadow-[0_6px_24px_rgba(148,163,184,0.10)] mb-6 anim-fade-up" style={{transitionDelay: '0s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="font-mono text-[11px] uppercase tracking-[0.22em] text-blue-700">
                  Access
                </span>
</div>
<h3 className="font-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.35rem] leading-[1.02] tracking-[-0.045em] text-slate-950 font-light max-w-[13ch]">
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.1s'}}>
                    Ready to access the
                  </span>
</span>
<span className="block anim-wrap">
<span className="anim-line" style={{transitionDelay: '0.2s'}}>
                    observatory layer?
                  </span>
</span>
<span className="block font-medium text-slate-950 anim-wrap mt-2">
<span className="anim-line" style={{transitionDelay: '0.3s'}}>
                    Let’s get started.
                  </span>
</span>
</h3>
<div className="mt-10 anim-fade-up" style={{transitionDelay: '0.4s'}}>
<p className="text-sm text-slate-500 mb-3">
                  Platform access and methodology support
                </p>
<a className="inline-flex items-center text-2xl sm:text-3xl text-slate-950 font-display font-medium tracking-[-0.035em] hover:text-blue-700 transition-colors" href="mailto:access@gaqo.org">
                  access@gaqo.org
                </a>
<div className="mt-4">
<p className="mt-4 text-xs font-mono uppercase tracking-[0.18em] text-slate-500">
                    GAQO Access Desk • Environmental Intelligence Team
                  </p>
</div>
</div>
</div>

<div>
<h4 className="font-display text-[2rem] sm:text-[2.35rem] text-slate-950 font-medium tracking-[-0.03em] anim-fade-up" style={{transitionDelay: '0.5s'}}>
                Platform Access
              </h4>
<form className="mt-6 space-y-6 anim-fade-up" style={{transitionDelay: '0.6s'}}>
<div>
<input className="w-full bg-transparent border-b border-slate-300 focus:border-blue-400 outline-none py-3 text-sm text-slate-900 placeholder-slate-500" placeholder="Organization *" type="text"/>
</div>
<div>
<input className="w-full bg-transparent border-b border-slate-300 focus:border-blue-400 outline-none py-3 text-sm text-slate-900 placeholder-slate-500" placeholder="Work email *" type="email"/>
</div>
<div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-5">
<button className="inline-flex items-center justify-between gap-3 px-5 py-3 rounded-full bg-slate-950 text-white text-sm font-medium hover:bg-blue-600 transition" type="submit">
                    Request access
                    <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</button>
<p className="text-sm text-slate-500 xl:flex-1 xl:max-w-none">
                    Request access to the live observatory, methodology, and
                    monitoring model.
                  </p>
</div>
</form>
<div className="grid grid-cols-2 gap-8 mt-10 anim-fade-up" style={{transitionDelay: '0.7s'}}>
<div>
<p className="text-xs text-slate-500 font-mono uppercase tracking-[0.18em]">
                    Quick Links
                  </p>
<ul className="mt-3 space-y-2">
<li>
<a className="text-lg font-medium tracking-tight text-slate-900 hover:underline underline-offset-4" href="#system-view">
                        System View
                      </a>
</li>
<li>
<a className="text-lg font-medium tracking-tight text-slate-900 hover:underline underline-offset-4" href="#observed-layers">
                        Observed Layers
                      </a>
</li>
<li>
<a className="text-lg font-medium tracking-tight text-slate-900 hover:underline underline-offset-4" href="#network-status">
                        Global View
                      </a>
</li>
<li>
<a className="text-lg font-medium tracking-tight text-slate-900 hover:underline underline-offset-4" href="#methodology">
                        Methodology
                      </a>
</li>
</ul>
</div>
<div>
<p className="text-xs text-slate-500 font-mono uppercase tracking-[0.18em]">
                    Access Model
                  </p>
<ul className="mt-3 space-y-2">
<li>
<span className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-slate-900">
                        Research Groups
                      </span>
</li>
<li>
<span className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-slate-900">
                        Public Infrastructure
                      </span>
</li>
<li>
<span className="inline-flex items-center gap-2 text-lg font-medium tracking-tight text-slate-900">
                        Environmental Teams
                      </span>
</li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/45 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10 anim-fade-up" style={{transitionDelay: '0.8s'}}>
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center w-9 h-9 rounded-full border border-blue-200/70 bg-gradient-to-br from-white to-blue-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
<svg aria-hidden="true" className="w-4 h-4 text-blue-600" fill="none" viewbox="0 0 48 48">
<circle cx="24" cy="24" opacity="0.9" r="15" stroke="currentColor" strokeWidth="1.6"></circle>
<circle cx="24" cy="24" fill="currentColor" opacity="0.95" r="5"></circle>
<path d="M24 7.5C30 12 33 17 33 24C33 31 30 36 24 40.5" opacity="0.7" stroke="currentColor" strokeWidth="1.4"></path>
<path d="M24 7.5C18 12 15 17 15 24C15 31 18 36 24 40.5" opacity="0.45" stroke="currentColor" strokeWidth="1.4"></path>
<path d="M8 24H40" opacity="0.35" stroke="currentColor" strokeWidth="1.2"></path>
</svg>
</div>
<span className="text-sm font-medium tracking-tight text-slate-950">
                GAQO
              </span>
</div>
<p className="text-xs text-slate-500">
              © 2024 Global Air Quality Observatory — All rights reserved
            </p>
</div>
</footer>
</div>
</section>

    </>
  );
}
