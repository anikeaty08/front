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



document.addEventListener('DOMContentLoaded', () => {
const burger = document.querySelector('[aria-label="Menu"]');
if (!burger) return;
burger.setAttribute('aria-expanded', 'false');
burger.style.position = 'relative';
burger.style.zIndex = '60';
const menu = document.createElement('nav');
menu.className = 'mobile-menu';
menu.setAttribute('aria-label', 'Mobile navigation');
menu.innerHTML = '<ul><li><a href="/uber-mich">Über mich</a></li><li><a href="/fur-unternehmen">Für Unternehmen</a></li><li><a href="/fur-bewerber">Für Bewerber</a></li><li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li><li><a href="/form" style="color: #ef4444; margin-top: 1rem; font-weight: 500;">Kontakt</a></li></ul>';
document.body.appendChild(menu);
const toggleMenu = () => {
const isActive = menu.classList.contains('active');
menu.classList.toggle('active');
burger.classList.toggle('menu-open');
burger.setAttribute('aria-expanded', !isActive);
document.body.style.overflow = isActive ? '' : 'hidden';
};
burger.addEventListener('click', toggleMenu);
menu.querySelectorAll('a').forEach(link => {
link.addEventListener('click', toggleMenu);
});
window.addEventListener('resize', () => {
if (window.innerWidth >= 768 && menu.classList.contains('active')) {
toggleMenu();
}
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      (function () {
        const initMobileNavigation = () => {
          const toggle = document.querySelector('.site-menu-toggle');
          const nav = document.querySelector('.site-nav-panel');
          if (!toggle || !nav) return;

          const closeMenu = () => {
            document.body.classList.remove('mobile-menu-open');
            toggle.setAttribute('aria-expanded', 'false');
          };

          const openMenu = () => {
            document.body.classList.add('mobile-menu-open');
            toggle.setAttribute('aria-expanded', 'true');
          };

          toggle.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            document.body.classList.contains('mobile-menu-open') ? closeMenu() : openMenu();
          });

          nav.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', closeMenu);
          });

          document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') closeMenu();
          });

          window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) closeMenu();
          }, { passive: true });
        };

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initMobileNavigation);
        } else {
          initMobileNavigation();
        }
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
      
<div className="noise-overlay"></div>


<div className="fixed z-50 bg-transparent pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0">
<div className="border-gradient before:rounded-full max-w-4xl border-white/10 border rounded-full mr-auto ml-auto pr-6 pl-6" style={{background: 'linear-gradient(180deg, rgba(14, 16, 26, 0.55), rgba(14, 16, 26, 0.35)) padding-box, linear-gradient(120deg, rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.08)) border-box', border: '1px solid transparent', backdropFilter: 'blur(16px) saturate(120%)', WebkitBackdropFilter: 'blur(16px) saturate(120%)', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255,255,255,0.04)'}}>
<div className="flex items-center justify-between w-full">
<div className="flex h-24 items-center">
<img alt="Global Impact" className="object-contain scale-100" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e3c5378-91c7-4439-a64c-15252f7c6920_1600w.png?w=800&amp;q=80" style={{width: '100px', height: '100px'}}/>
</div>
<nav className="hidden md:flex site-nav-panel" id="mobile-navigation">
<ul className="flex items-center gap-x-8 text-sm font-normal text-white/60 font-geist tracking-wide">
<li className="">
<a className="hover:text-white transition-colors duration-300 group pt-2 pb-2 relative" href="/uber-mich">
                  Über mich
                  <span className="-bottom-1 h-px group-hover:scale-x-100 transition-transform origin-left duration-300 italic bg-white absolute right-0 left-0 scale-x-0"></span>
</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 group pt-2 pb-2 relative" href="/fur-unternehmen">
                  Für Unternehmen
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 group pt-2 pb-2 relative" href="/fur-bewerber">
                  Für Bewerber
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
</li>
<li className="">
<a className="hover:text-white transition-colors duration-300 group pt-2 pb-2 relative" href="/fur-netzwerkpartner">
                  Für Netzwerkpartner
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
</a>
</li>
</ul>
</nav>
<div className="flex gap-1.5 md:gap-2 gap-x-1.5 gap-y-1.5 items-center">
<button aria-controls="mobile-navigation" aria-expanded="false" aria-label="Menu" className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5 site-menu-toggle" style={{background: 'rgba(255, 255, 255, 0.02)', position: 'relative', zIndex: '60'}} type="button">
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="hamburger-line line-1" x1="4" x2="20" y1="6" y2="6"></line>
<line className="hamburger-line line-2" x1="4" x2="20" y1="12" y2="12"></line>
<line className="hamburger-line line-3" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button aria-label="Account" className="hidden md:inline-flex hover:bg-white/5 transition-all duration-300 border-white/5 border rounded-full pt-2 pr-2 pb-2 pl-2" onclick="window.location.href='/form'" role="button" style={{background: 'rgba(255, 255, 255, 0.02)'}}>
<svg className="stroke-[1.5]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<header className="min-h-[100dvh] overflow-hidden flex selection:bg-white/20 selection:text-white lg:pt-0 bg-center font-sans w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25ca75ec-f326-4a43-9e87-11e4dac52911_3840w.webp)] bg-cover pt-0 relative scale-100 items-center">
<div className="absolute glow-blue pointer-events-none z-0 w-[50%] h-[50%] rounded-full top-[-20%] left-[-10%] blur-3xl"></div>
<div className="absolute glow-red pointer-events-none z-0 w-[50%] h-[50%] rounded-full right-[-10%] bottom-[-20%] blur-3xl"></div>

<div className="-translate-x-1/2 blur-[150px] pointer-events-none z-0 bg-[#d95d2c]/5 w-[60vw] h-[60vw] rounded-full absolute bottom-0 left-1/2"></div>

<div className="md:top-[2%] -translate-x-1/2 select-none flex text-center w-full pr-4 pl-4 absolute top-[8%] left-1/2 translate-y-16 justify-center">
<h1 className="text-[26vw] md:text-[24vw] leading-none bg-clip-text -translate-y-8 -translate-y-16 -translate-y-12 -translate-y-4 font-bold text-transparent tracking-tighter bg-gradient-to-b from-[#e5e5e5] via-[#525252] to-[#050505] translate-y-1 scale-75" style={{WebkitTextStroke: '1px rgba(255,255,255,0.03)'}}>
          RECRUITING
        </h1>
</div>


<div className="-translate-x-1/2 md:h-[85vh] z-10 pointer-events-none flex w-full h-[65vh] max-w-[850px] absolute bottom-0 left-1/2 drop-shadow-lg items-end justify-center" style={{display: 'flex'}}>
<img alt="Britta Forstner" className="object-bottom contrast-110 -translate-y-16 w-auto h-full object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.8)] brightness-95 translate-x-8 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6872f695-4ad7-4a80-93b0-217e8bd893e4_3840w.png"/>
</div>


<div className="flex flex-col md:block -translate-x-3 -translate-x-8 -translate-y-4 w-full h-full max-w-7xl z-20 mr-auto ml-auto pr-6 pl-6 relative -translate-y-8 scale-90 justify-start">


<div className="md:hidden z-20 pointer-events-none text-right w-full mt-8" style={{display: 'none'}}></div>

<a className="md:right-16 lg:right-32 md:bottom-auto md:top-1/2 md:translate-y-[120px] group flex items-center justify-center md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] hover:scale-105 transition-transform duration-500 w-[100px] h-[100px] rounded-full absolute right-6 bottom-12 translate-x-12 translate-y-16 scale-90" href="/form">

<div className="bg-[#0d0d0d] border-white/10 border rounded-full absolute top-0 right-0 bottom-0 left-0 shadow-2xl backdrop-blur-xl"></div>

<div className="animate-[spin_15s_linear_infinite] absolute top-0 right-0 bottom-0 left-0">
<svg className="w-full h-full overflow-visible fill-current" style={{color: 'rgb(163, 163, 163)'}} viewbox="0 0 100 100">
<path className="" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" id="badge-curve"></path>
<text className="font-medium uppercase font-sans" fontSize="10.5">
<textpath className="" href="#badge-curve" lengthadjust="spacing" startoffset="50%" text-anchor="middle" textlength="240">
                  BERATUNG STARTEN - BERATUNG STARTEN -
                </textpath>
</text>
</svg>
</div>

<div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-[60px] lg:h-[60px] rounded-full bg-[#d95d2c] flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-[#ea6a38] shadow-lg shadow-[#d95d2c]/20">
<svg className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
<path d="m21 3 1 11h-2"></path>
<path className="" d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
<path d="M3 4h8"></path>
</svg>
</div>
</a>
<div className="md:absolute md:left-8 lg:left-16 md:top-1/2 flex flex-col lg:max-w-[340px] md:mt-0 -translate-x-16 max-w-[300px] mt-0 translate-x-2 translate-y-16 scale-110 items-start">



<h2 className="lg:text-2xl text-xl font-normal text-neutral-300 tracking-tight mb-1 drop-shadow-lg">
            Du brauchst keine Bewerbungen.
          </h2>
<h3 className="text-2xl lg:text-[28px] font-medium text-white tracking-tight leading-[1.15] mb-6 drop-shadow-lg">
            Du brauchst die
            <br className="hidden lg:block"/>
            richtigen Menschen™.
          </h3>
<div className="inline-flex shadow-black/50 bg-[#111]/80 border-white/10 border rounded-full mb-6 pt-1.5 pr-3 pb-1.5 pl-3 shadow-lg backdrop-blur-md items-center">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
<span className="uppercase text-[9px] font-medium text-neutral-300 tracking-[0.2em] translate-x-2 scale-90">
              Online
            </span>
</div>

</div>

</div>
</header>

<section className="bg-center z-10 border-white/5 border-t pt-16 pr-6 pb-16 pl-6 relative">
<div className="max-w-7xl mx-auto space-y-16">
<div className="flex flex-col md:flex-row gap-8 gap-x-8 gap-y-8 items-end justify-between">
<div className="scale-100 space-y-4">
<h2 className="uppercase text-sm font-normal text-red-500 tracking-widest">
              Fachwissen
            </h2>
<h3 className="h2-clamp font-medium text-white tracking-tight">
              Strategische
              <br/>
<span className="text-zinc-500">Besetzung</span>
</h3>
</div>
<p className="leading-relaxed text-xs font-light text-zinc-400 max-w-md">
            Ich besetze Schlüsselpositionen mit Persönlichkeiten, die nicht nur
            passen, sondern Wirkung entfalten und Unternehmen nachhaltig
            voranbringen.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" height="36" icon="solar:chart-2-outline" style={{color: 'rgb(161, 161, 170)'}} width="36"></iconify-icon>
<div className="space-y-4">
<h4 className="cursor-pointer md:text-3xl text-2xl font-medium text-white tracking-tight text-center absolute top-16 -translate-y-1" onclick="window.location.href='https://wa.me/4915206277978'" role="button">
                  Wachstum
                </h4>
<p className="leading-relaxed -translate-x-4 text-sm font-light text-zinc-400 text-center max-w-lg absolute left-4 -translate-y-2">
                  Unterstützung in dynamischen Phasen – vom Aufbau bis zur
                  Skalierung.
                </p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" height="36" icon="solar:user-outline" style={{color: 'rgb(161, 161, 170)'}} width="36"></iconify-icon>
<div className="space-y-4">
<h4 className="text-xl font-medium text-white tracking-tight">
                  Fachkräfte
                </h4>
<p className="leading-relaxed text-sm font-light text-zinc-400">
                  Gezielte Auswahl qualifizierter Spezialisten für nachhaltige
                  Ergebnisse.
                </p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 card-hover relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" height="36" icon="solar:crown-outline" style={{color: 'rgb(161, 161, 170)'}} width="36"></iconify-icon>
<div className="space-y-4">
<h4 className="text-xl font-medium text-white tracking-tight">
                  Führungskräfte
                </h4>
<p className="leading-relaxed text-sm font-light text-zinc-400">
                  Identifikation von Persönlichkeiten, die Verantwortung
                  übernehmen und Teams stärken.
                </p>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-2 card-hover relative overflow-hidden group flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/2 aspect-video md:aspect-auto rounded-2xl overflow-hidden relative">
<img alt="Speaking" className="group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8808f353-201d-4a1b-8901-80cf1e4d93c4_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
</div>
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4">
<h4 className="text-2xl font-medium text-white tracking-tight">
                HR-Strategie
              </h4>
<p className="leading-relaxed text-sm font-light text-zinc-400">
                Klare Strukturen und fundierte Entscheidungen für langfristigen
                Erfolg.
              </p>
</div>
</div>
</div>
</div>
</section>


<section className="bg-center z-10 pt-16 pr-6 pb-0 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto space-y-32">

<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="relative order-2 lg:order-1 group">
<div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel p-2">
<img alt="Dr Castro on stage" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 opacity-70 w-full h-full object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/db99bc3e-1873-41ef-aceb-b29c98b354c2_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-8 order-1 lg:order-2 lg:pl-12">
<div className="flex items-center" data-cms-loop="ber-mich" data-cms-loop-expanded="true" data-cms-loop-template-hidden="true" data-cms-slug-link="ber-mich">
<span className="w-8 h-[1px] bg-red-500" style={{display: 'none'}}></span>
<h2 className="uppercase text-xs font-normal text-zinc-500 tracking-[0.2em]">
                Über Mich
              </h2>
</div>
<h3 className="h2-clamp font-medium text-white tracking-tight">
              Kein Standard-HR
              <br/>
<span className="italic text-zinc-500">
                Sondern Recruiting mit Erfahrung, Klarheit und Herz.
              </span>
</h3>
<p className="leading-relaxed text-sm font-light text-zinc-50">
              Ich bin Recruiterin aus Leidenschaft, schnell im Kopf und
              „Rampensau“ im Handeln. Als gelernte Bank- und
              Personalfachkauffrau (IHK) sowie versierte Personalreferentin
              beherrsche ich die Zahlen, das Arbeitsrecht und die Strategie –
              aber meine wahre Stärke liegt darin, zwischen den Zeilen zu lesen
              und Potenziale zu erkennen, bevor sie offensichtlich sind.
            </p>
<div className="pt-4">
<a className="inline-flex items-center gap-3 uppercase hover:text-red-400 transition-colors hover:border-red-400/50 text-xs font-medium text-white tracking-widest border-white/20 border-b pb-2" href="/form">
                Beratung
              </a>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="space-y-8 lg:pr-12">
<div className="flex items-center gap-4">
<span className="w-8 h-[1px] bg-red-500"></span>
<h2 className="uppercase text-xs font-normal text-zinc-500 tracking-[0.2em]">
                Moin Recruiting
              </h2>
</div>
<h3 className="h2-clamp font-medium text-white tracking-tight">
              Dafür
              <br/>
<span className="italic text-zinc-500">Stehe Ich</span>
</h3>
<p className="leading-relaxed text-sm font-light text-zinc-50">
              Mit über 20 Jahren Erfahrung im Personalwesen verbinde ich
              Fachkompetenz, strategisches Denken und ein feines Gespür für
              Menschen. Vier Jahre in der Niederlassungsleitung mit
              Verantwortung für über 75 Mitarbeitende haben meinen Blick für den
              Markt, für Talente und für nachhaltige Entscheidungen geschärft.
              Besonders Startups und wachsende Unternehmen begleite ich mit
              Leidenschaft – dort, wo Struktur auf Vision trifft und Recruiting
              echten Unterschied macht. Ob gewerbliche Fachkraft, Fach- und
              Führungsebene oder Executive Search: Für mich steht immer der
              Mensch hinter dem Lebenslauf im Mittelpunkt. Zehn Jahre eigene
              Geschäftsführung haben mir zudem gezeigt, was unternehmerische
              Verantwortung wirklich bedeutet – und wie wichtig es ist, nicht
              nur Positionen zu besetzen, sondern Verbindungen zu schaffen, die
              langfristig tragen.
            </p>
<div className="pt-4 flex gap-4">
<button className="uppercase hover:bg-zinc-200 transition-all text-xs font-medium text-black tracking-widest bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" onclick="window.location.href='/uber-mich'" role="button">
                Full Biography
              </button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-l from-white/5 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden glass-panel p-2">
<img alt="Event setup" className="group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 opacity-70 w-full h-full object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fec3e4b5-40bd-4fcc-8d4b-3f0950bfcb6f_1600w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden border-y bg-[#030303] border-white/5 pt-40 pr-6 pb-40 pl-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">

<div className="relative w-32 h-32 mx-auto mb-16 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="animate-pulse bg-slate-950/20 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-xl"></div>
<div className="glass-panel flex transform group hover:bg-white/10 transition-colors cursor-pointer bg-center w-16 h-16 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e3c5378-91c7-4439-a64c-15252f7c6920_320w.png)] bg-cover rounded-full relative shadow-2xl scale-150 items-center justify-center"></div>
</div>
<div className="space-y-6">
<h2 className="h2-clamp font-medium text-white tracking-tight">
            Du brauchst keine Kandidaten.
            <br/>
<span className="bg-clip-text italic text-transparent bg-gradient-to-r from-red-500 to-orange-500">
              Du brauchst
            </span>
<span className="text-zinc-600">Ergebnisse.</span>
</h2>
<p className="leading-relaxed text-sm font-light text-zinc-400 max-w-3xl mr-auto ml-auto">
            Als erfahrene Personalreferentin und Vertriebsexpertin weiß ich: Ein
            passendes Team ist kein Zufallsprodukt, sondern Handwerk mit
            Herzblut. Ich liefere dir nicht einfach nur Lebensläufe – ich
            erkenne Potenziale und finde die Mitstreiter, die dein Unternehmen
            wirklich voranbringen. Ehrlich, direkt und ohne Umwege. Schreib mir
            eine kurze E-Mail mit deinem Bedarf – ich melde mich umgehend bei
            dir.
          </p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
<button className="glass-panel uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-xs font-normal text-white tracking-widest rounded-full pt-4 pr-10 pb-4 pl-10" onclick="window.location.href='https://wa.me/4915206277978'" role="button">
            Chat starten
          </button>
</div>
</div>

<div className="z-10 max-w-7xl mt-32 mr-auto ml-auto relative">
<p className="text-[10px] uppercase font-normal text-zinc-600 tracking-[0.3em] text-center mb-8">
          Empfohlen &amp; geschätzt
        </p>
<div className="flex flex-wrap justify-center transition-all duration-500 gap-8 md:gap-20 opacity-30 grayscale items-center">
<svg className="text-gray-950 text-3xl w-[12px] h-[12px] scale-100" data-icon-replaced="true" data-icon-set="solar" data-solar="global-linear" height="30" strokeWidth="2" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeWidth="1.5">
<path className="" d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></path>
<path className="" d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></path>
<path d="M2 12h20" strokeLinecap="round"></path>
</g>
</svg>
<iconify-icon className="text-3xl text-white" height="30" icon="solar:buildings-3-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<iconify-icon className="text-3xl text-white" height="30" icon="solar:user-circle-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<iconify-icon className="text-3xl text-white" height="30" icon="solar:shield-network-outline" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<iconify-icon className="text-white text-3xl" icon="solar:wi-fi-linear"></iconify-icon>
</div>
</div>
</section>

<section className="bg-center bg-gradient-to-b from-transparent to-black border-white/5 border-t pr-6 pl-6 relative">
<section className="sm:px-6 lg:px-8 max-w-7xl rounded-2xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 bg-black shadow-2xl shadow-black/50">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight font-geist mb-4">
            Kundenstimmen
          </h2>
<p className="text-lg text-neutral-400 font-sans">
            Schließen Sie sich Tausenden zufriedener Menschen an
          </p>
<div className="flex items-center justify-center gap-2 mt-4">
<div className="flex items-center">
<svg className="w-5 h-5 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<span className="text-sm font-medium text-neutral-100 font-geist ml-2">
              4,8/5 basierend auf 12.847 Bewertungen
            </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

<article className="bg-gradient-to-br rounded-2xl p-8 hover-lift fade-in from-neutral-950 to-neutral-900">
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="flex w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6b3e640-458b-4d7d-89ab-e35d9699fe6e_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                  Jan Petersen
                </div>
<div className="text-sm text-neutral-400 font-sans">
                  Verifiziert • vor 2 Wochen
                </div>
</div>
</div>
</article>

<article className="bg-gradient-to-br rounded-2xl p-8 hover-lift fade-in from-neutral-950 to-neutral-900" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="flex w-12 h-12 bg-[url(https://images.unsplash.com/photo-1517677129300-07b130802f46?w=320&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                  Annika Thomsen
                </div>
<div className="text-sm text-neutral-400 font-sans">
                  Verifiziert • vor 1 Monat
                </div>
</div>
</div>
</article>

<article className="bg-gradient-to-br rounded-2xl p-8 hover-lift fade-in from-neutral-950 to-neutral-900" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-1 mb-4">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="flex w-12 h-12 bg-[url(https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=320&amp;q=80)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                  Lars Hansen
                </div>
<div className="text-sm text-neutral-400 font-sans">
                  Verifizierter • vor 3 Wochen
                </div>
</div>
</div>
</article>
</div>

<div className="bg-gradient-to-r rounded-2xl p-8 mb-12 from-neutral-900 to-neutral-950">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl font-bold font-geist mb-2 text-neutral-100">
                12,847
              </div>
<div className="text-sm text-neutral-400 font-sans">
                Gesamtzahl der Bewertungen
              </div>
</div>
<div className="text-center">
<div className="text-3xl font-bold font-geist mb-2 text-neutral-100">
                4.8/5
              </div>
<div className="text-sm text-neutral-400 font-sans">
                Durchschnittliche Bewertung
              </div>
</div>
<div className="text-center">
<div className="text-3xl font-bold font-geist mb-2 text-neutral-100">
                96%
              </div>
<div className="text-sm text-neutral-400 font-sans">
                Würde ich weiterempfehlen
              </div>
</div>
<div className="text-center">
<div className="text-3xl font-bold font-geist mb-2 text-neutral-100">
                89%
              </div>
<div className="text-sm text-neutral-400 font-sans">
                5-Sterne-Bewertungen
              </div>
</div>
</div>
</div>

<div className="">
<div className="flex items-center justify-between mb-8">
<h3 className="text-2xl font-semibold tracking-tight font-geist">
              Aktuelle Bewertungen
            </h3>
</div>
<div className="space-y-6">

<article className="border rounded-xl p-6 hover-lift fade-in border-neutral-800 bg-black">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83d9e773-c252-4b1e-9032-a0218009900e_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                      Tim Ripper
                    </div>
<div className="text-sm text-neutral-400 font-sans">15:24</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-300 font-geist mb-4">
                "Was Britta Forstner macht, ist mehr als Recruiting – es ist ein
                Gespür für Menschen, das man nicht lernen kann."
              </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">vor 3 Tagen</span>
<span className="font-sans">Verifiziert</span>
</div>
</article>

<article className="border rounded-xl p-6 hover-lift fade-in border-neutral-800 bg-black" style={{animationDelay: '0.1s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11063256-7d5e-454f-9dc0-934460853000_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                      Anna Kabon
                    </div>
<div className="text-sm text-neutral-400 font-sans">11:26</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-neutral-700" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-300 font-geist mb-4">
                "Ich hätte nicht gedacht, dass Recruiting so persönlich sein
                kann – dank Britta Forstner bin ich heute genau da, wo ich sein
                möchte."
              </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">vor 1 Woche</span>
<span className="font-sans">Verifiziert</span>
</div>
</article>

<article className="border rounded-xl p-6 hover-lift fade-in border-neutral-800 bg-black" style={{animationDelay: '0.2s'}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/853bdf0e-3bb3-4fad-9cb0-995ac995429c_320w.jpg)] bg-cover bg-center rounded-full items-center justify-center"></div>
<div className="">
<div className="font-semibold text-neutral-100 font-geist">
                      Peter Hardt
                    </div>
<div className="text-sm text-neutral-400 font-sans">16:02</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current text-yellow-600" viewbox="0 0 24 24">
<path className="" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
</div>
<p className="text-neutral-300 font-geist mb-4">
                "Britta Forstner steht für Präzision, Klarheit und ein
                außergewöhnliches Gespür für die richtigen Menschen."
              </p>
<div className="flex items-center gap-4 text-sm text-neutral-500">
<span className="font-sans">vor 2 Wochen</span>
<span className="font-sans">Verifiziert</span>
</div>
</article>
</div>
</div>

</section>
</section>


<div className="sm:px-6 sm:mt-10 max-w-7xl mt-10 mr-auto mb-16 ml-auto pr-4 pl-4">
<div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-neutral-950 text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)] p-6 sm:p-8">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
</div>
<div className="relative">
<h2 className="footer-clamp font-semibold tracking-tighter font-geist">
<span className="block">Bereit für die</span>
<span className="block text-white/60">richtigen Entscheidungen?</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 gap-x-6 gap-y-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Erste Schritte</p>
<a className="inline-flex items-center gap-3 sm:text-2xl text-xl font-medium text-white tracking-tight font-geist mt-2" href="/form">
<svg className="lucide lucide-mail stroke-[1.5] flex-shrink-0 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect className="" height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
<span className="break-all font-thin italic tracking-tighter" onclick="window.location.href='/form'" role="button">
                  brittaforstner@moin-recruiting.com
                </span>
</a>
</div>
<div className="">
<p className="text-sm text-white/60 font-geist">Zweite Schritte</p>
<a className="inline-flex items-center gap-3 sm:text-2xl text-xl font-medium text-white tracking-tight font-geist mt-2" href="https://wa.me/4915206277978">
<svg className="lucide lucide-mail stroke-[1.5] flex-shrink-0 w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="phone-call" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
<path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
<path d="M14.05 6A5 5 0 0 1 18 10"></path>
</svg>
<span className="break-all font-thin italic tracking-tighter" onclick="window.location.href='https://wa.me/4915206277978'" role="button">
                  +49 (1520) 62 77 978
                </span>
</a>
</div>

<div className=""></div>

<div className="">
<p className="text-sm text-white/60 font-geist">Machen Sie mit</p>
<div className="flex flex-wrap gap-3 mt-2 items-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full pt-3 pr-4 pb-3 pl-4 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-twitter w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="expertsexchange" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(17, 24, 39)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7.28.9H0L8.36 12L0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06l3.64 4.82zm-9.58 19.15l2.3 3.05H24l-5.94-7.88z" fill="#111827"></path>
</svg>
<span className="font-geist">2,843</span>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path className="" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-dribbble w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647" fill="#111827"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 text-gray-900 bg-white border-white/10 border rounded-full hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-behance w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="behance" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(17, 24, 39)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<path className="" d="m10 15 5-3-5-3z"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200" href="#">
<svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect className="" height="12" width="4" x="2" y="9"></rect>
<circle className="" cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-8 border-t border-white/10"></div>
<div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="">
<p className="text-sm text-white/60 font-geist">Entdecken</p>
<div className="grid grid-cols-2 gap-2 text-sm mt-3 gap-x-2 gap-y-2">
<a className="hover:underline font-medium tracking-tight font-geist" href="/uber-mich">
                  Über mich
                </a>
<a className="hover:underline font-medium tracking-tight font-geist" href="/fur-unternehmen">
                  Für Unternehmen
                </a>
<a className="hover:underline font-medium tracking-tight font-geist" href="/fur-bewerber">
                  Für Bewerber
                </a>
<a className="hover:underline font-medium tracking-tight font-geist" href="/fur-netzwerkpartner">
                  Für Netzwerkpartner
                </a>
</div>
</div>

<div className="">
<p className="text-sm text-white/60 font-geist">Kleingedrucktes</p>
<div className="mt-3 grid grid-cols-1 gap-2 text-sm">
<a className="hover:underline font-medium tracking-tight font-geist" href="#">
                  Allgemeine Geschäftsbedingungen
                </a>
<a className="hover:underline font-medium tracking-tight font-geist" href="#">
                  Datenschutzerklärung
                </a>
</div>
</div>
</div>
<p className="text-xs text-white/70 font-geist text-center mt-6">
            © 2026 Moin Recruiting - Flensburg, Schleswig-Holstein
          </p>
</div>
</div>
</div>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>
<nav aria-label="Mobile navigation" className="mobile-menu">
<ul>
<li><a href="/uber-mich">Über mich</a></li>
<li><a href="/fur-unternehmen">Für Unternehmen</a></li>
<li><a href="/fur-bewerber">Für Bewerber</a></li>
<li><a href="/fur-netzwerkpartner">Für Netzwerkpartner</a></li>
<li>
<a href="/form" style={{color: '#ef4444', marginTop: '1rem', fontWeight: '500'}}>
            Kontakt
          </a>
</li>
</ul>
</nav>


    </>
  );
}
