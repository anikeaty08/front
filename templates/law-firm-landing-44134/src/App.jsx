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



    lucide.createIcons();function switchView(e){document.querySelectorAll(".page-view").forEach(e=>e.classList.remove("active"));let t=document.getElementById("view-"+e);t&&(t.classList.add("active"),window.scrollTo({top:0,behavior:"instant"}),setTimeout(()=>{initRevealAnimations(),lucide.createIcons()},100))}function navToSection(e){let t=document.getElementById("view-home");t.classList.contains("active")?document.getElementById(e)?.scrollIntoView({behavior:"smooth"}):(switchView("home"),setTimeout(()=>{document.getElementById(e)?.scrollIntoView({behavior:"smooth"})},300))}let mobileMenuOpen=!1;function toggleMobileMenu(){mobileMenuOpen=!mobileMenuOpen;let e=document.getElementById("mobile-menu"),t=document.getElementById("menu-icon-open"),o=document.getElementById("menu-icon-close");mobileMenuOpen?(e.classList.add("open"),t.classList.add("hidden"),o.classList.remove("hidden"),document.body.style.overflow="hidden"):(e.classList.remove("open"),t.classList.remove("hidden"),o.classList.add("hidden"),document.body.style.overflow="")}function mobileNav(e){toggleMobileMenu(),setTimeout(()=>switchView(e),200)}function mobileNavSection(e){toggleMobileMenu(),setTimeout(()=>navToSection(e),200)}function toggleTheme(){let e=!document.body.classList.contains("light-mode");e?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode"),localStorage.setItem("theme",e?"light":"dark"),updateThemeIcons(e)}function updateThemeIcons(e){let t=document.getElementById("icon-sun"),o=document.getElementById("icon-moon"),n=document.getElementById("icon-sun-mobile"),i=document.getElementById("icon-moon-mobile");e?(t?.classList.add("hidden"),o?.classList.remove("hidden"),n?.classList.add("hidden"),i?.classList.remove("hidden")):(t?.classList.remove("hidden"),o?.classList.add("hidden"),n?.classList.remove("hidden"),i?.classList.add("hidden"))}let isLight="dark"!==localStorage.getItem("theme");isLight?document.body.classList.add("light-mode"):document.body.classList.remove("light-mode"),updateThemeIcons(isLight);function initRevealAnimations(){let e=document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right"),t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add("reveal-visible"),t.unobserve(e.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});e.forEach(e=>{e.classList.contains("reveal-visible")||t.observe(e)})}initRevealAnimations(),window.addEventListener("scroll",()=>{let e=document.getElementById("main-nav");window.scrollY>60?(e.classList.add("nav-scrolled"),e.style.backdropFilter="blur(20px)"):e.classList.remove("nav-scrolled")},{passive:!0});function showCookieBanner(){document.getElementById("cookie-banner").classList.remove("cookie-hidden")}function closeCookieBanner(){document.getElementById("cookie-banner").classList.add("cookie-hidden")}function acceptCookies(e){localStorage.setItem("cookie-consent",e),localStorage.setItem("cookie-consent-date",new Date().toISOString()),closeCookieBanner()}localStorage.getItem("cookie-consent")||setTimeout(showCookieBanner,1500);window.formspree=window.formspree||function(){(formspree.q=formspree.q||[]).push(arguments)};formspree("initForm",{formElement:"#contact-form",formId:"xojyqapb"});
  
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
      
<div className="cookie-hidden fixed bottom-0 left-0 right-0 z-[200] p-3 sm:p-4 md:p-6" id="cookie-banner">
<div className="max-w-4xl mx-auto bg-[#1e1e1e] border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-5 sm:p-6 md:p-8 backdrop-blur-xl">
<div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" data-lucide="shield-check" strokeWidth="1.5"></i></div>
<div className="flex-1">
<h3 className="text-base sm:text-lg font-medium text-white mb-2 tracking-tight">Datenschutz &amp; Cookies</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-1">Wir verwenden Cookies, um Ihnen die
            bestmögliche Nutzung unserer Website zu ermöglichen. Cookies helfen uns, die Website-Funktionalität zu
            verbessern und Ihre Präferenzen zu speichern.</p>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Weitere Informationen finden Sie in unserer <a className="text-[#D4AF37] hover:text-white underline underline-offset-2 cursor-pointer transition-colors" onclick="switchView('datenschutz');closeCookieBanner();">Datenschutzerklärung</a>.
          </p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 mt-5 sm:mt-6 sm:justify-end">
<button className="order-2 sm:order-1 px-5 py-2.5 sm:py-3 rounded-lg border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all text-xs sm:text-sm font-medium tracking-wide" onclick="acceptCookies('essential')">Nur essenzielle</button><button className="order-1 sm:order-2 px-5 py-2.5 sm:py-3 rounded-lg bg-[#D4AF37] text-black hover:bg-white transition-all text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-[#D4AF37]/20" onclick="acceptCookies('all')">Alle akzeptieren</button>
</div>
</div>
</div>
<nav aria-label="Hauptnavigation" className="fixed top-0 w-full z-[100] bg-[#111111] backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="main-nav" role="navigation" style={{backgroundColor: 'rgba(17,17,17,0.98)'}}>
<div className="flex h-16 sm:h-20 lg:h-24 max-w-7xl mx-auto px-4 sm:px-6 items-center justify-between"><a aria-label="Zur Startseite" className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer relative z-[101]" onclick="switchView('home')" role="button" tabindex="0">
<div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
<div className="absolute inset-0 border border-[#D4AF37] rounded-full transition-transform duration-300 group-hover:scale-110">
</div>
<span className="relative z-10 text-xl sm:text-2xl text-[#D4AF37] tracking-tighter font-['Playfair_Display']">WP</span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base tracking-[0.15em] text-white font-normal uppercase leading-tight">Weidemann Pigorsch</span>
<div className="flex items-center w-full space-x-2 mt-0.5 sm:mt-1">
<div className="h-px bg-[#D4AF37]/60 flex-grow"></div>
<span className="text-[0.5rem] sm:text-[0.6rem] tracking-[0.3em] text-[#D4AF37] uppercase">Rechtsanwälte</span>
<div className="h-px bg-[#D4AF37]/60 flex-grow"></div>
</div>
</div>
</a>
<div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-base font-normal text-neutral-400"><a className="hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('kanzlei')" tabindex="0">Kanzlei</a><a className="hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('ueber-uns')" tabindex="0">Über uns</a><a className="hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Expertise</a>
<div className="relative group h-24 flex items-center"><a className="flex items-center hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('team')" tabindex="0">Team<i className="w-4 h-4 ml-1 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-180" data-lucide="chevron-down"></i></a>
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-72 rounded-xl bg-[#1e1e1e] border border-white/5 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden translate-y-2 group-hover:translate-y-0">
<div className="flex flex-col py-2 divide-y divide-white/5"><a className="flex items-center px-4 py-3 hover:bg-white/5 transition-colors group/item cursor-pointer" onclick="switchView('andreas')" tabindex="0"><img alt="Andreas Pigorsch" className="w-11 h-11 rounded-full object-cover object-top border border-white/10 group-hover/item:border-[#D4AF37]/50 transition-colors mr-3" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9950c83e-916d-463f-adec-9aa27ae6090b_320w.jpg"/>
<div>
<div className="text-sm font-medium text-neutral-200 group-hover/item:text-[#D4AF37] transition-colors">
                    Andreas Pigorsch</div>
<div className="text-xs text-neutral-500 mt-0.5">Fachanwalt für Arbeitsrecht</div>
</div>
</a><a className="flex items-center px-4 py-3 hover:bg-white/5 transition-colors group/item cursor-pointer" onclick="switchView('frank')" tabindex="0"><img alt="Frank Prenger" className="w-11 h-11 rounded-full object-cover object-top border border-white/10 group-hover/item:border-[#D4AF37]/50 transition-colors mr-3" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cc6709b-4764-4188-92dc-6660805d6251_320w.jpg"/>
<div>
<div className="text-sm font-medium text-neutral-200 group-hover/item:text-[#D4AF37] transition-colors">
                    Frank Prenger</div>
<div className="text-xs text-neutral-500 mt-0.5">Fachanwalt für Verkehrsrecht</div>
</div>
</a><a className="flex items-center px-4 py-3 hover:bg-white/5 transition-colors group/item cursor-pointer" onclick="switchView('iris')" tabindex="0"><img alt="Iris Woerner" className="w-11 h-11 rounded-full object-cover object-top border border-white/10 group-hover/item:border-[#D4AF37]/50 transition-colors mr-3" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5eb411f8-567e-4476-8a05-77339019c98f_320w.jpg"/>
<div>
<div className="text-sm font-medium text-neutral-200 group-hover/item:text-[#D4AF37] transition-colors">
                    Iris Woerner</div>
<div className="text-xs text-neutral-500 mt-0.5">Fachanwältin für Familienrecht</div>
</div>
</a></div>
</div>
</div>
</div>
<div className="hidden lg:flex items-center space-x-4"><a className="cursor-pointer inline-flex items-center justify-center text-sm font-medium uppercase tracking-widest border border-[#D4AF37]/50 text-[#D4AF37] px-6 py-2.5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300" onclick="navToSection('kontakt')" tabindex="0">Erstgespräch</a><button aria-label="Farbmodus umschalten" className="flex hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition-all duration-300 text-neutral-300 w-10 h-10 border-white/10 border rounded-full items-center justify-center" onclick="toggleTheme()" title="Farbmodus umschalten"><i className="w-4 h-4 hidden" data-lucide="sun" id="icon-sun"></i><i className="w-4 h-4" data-lucide="moon" id="icon-moon"></i></button>
</div>
<div className="lg:hidden flex items-center space-x-2 sm:space-x-3 relative z-[101]">
<button aria-label="Farbmodus umschalten" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-neutral-300 hover:text-[#D4AF37] transition-colors" onclick="toggleTheme()"><i className="w-5 h-5 hidden" data-lucide="sun" id="icon-sun-mobile"></i><i className="w-5 h-5" data-lucide="moon" id="icon-moon-mobile"></i></button><button aria-label="Menü öffnen" className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-neutral-300 hover:text-white transition-colors" id="menu-toggle-btn" onclick="toggleMobileMenu()"><i className="w-6 h-6" data-lucide="menu" id="menu-icon-open" strokeWidth="1.5"></i><i className="w-6 h-6 hidden" data-lucide="x" id="menu-icon-close" strokeWidth="1.5"></i></button>
</div>
</div>
</nav>
<div aria-label="Mobile Navigation" aria-modal="true" className="mobile-menu fixed inset-0 z-[110] bg-[#111111]/98 backdrop-blur-2xl flex flex-col pt-24 sm:pt-28 px-6 sm:px-8 pb-10 lg:hidden" id="mobile-menu" role="dialog">
<button aria-label="Menü schließen" className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-[#D4AF37] transition-colors" onclick="toggleMobileMenu()"><i className="w-8 h-8" data-lucide="x" strokeWidth="1.5"></i></button>
<nav className="flex flex-col space-y-1 flex-1 overflow-y-auto mt-4"><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNav('home')" tabindex="0">Startseite</a><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNavSection('kanzlei')" tabindex="0">Kanzlei</a><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNav('ueber-uns')" tabindex="0">Über uns</a><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNavSection('rechtsgebiete')" tabindex="0">Expertise</a><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNavSection('team')" tabindex="0">Team</a><a className="text-xl sm:text-2xl font-light text-neutral-200 hover:text-[#D4AF37] py-3 sm:py-4 border-b border-white/5 transition-colors cursor-pointer" onclick="mobileNavSection('kontakt')" tabindex="0">Kontakt</a></nav>
<div className="pt-6 border-t border-white/10"><a className="flex items-center space-x-3 text-[#D4AF37] text-base sm:text-lg" href="tel:+49231528178"><i className="w-5 h-5" data-lucide="phone"></i><span>+49 (231) 528 178</span></a><a className="flex items-center space-x-3 text-[#D4AF37] text-base sm:text-lg mt-3" href="tel:+49231529877"><i className="w-5 h-5" data-lucide="printer"></i><span>+49 (231) 529 877</span></a>
</div>
</div>
<main className="page-view active" id="view-home">
<header className="pt-16 sm:pt-20 lg:pt-24 bg-[#111111]">
<div className="w-full relative animate-fade-up delay-1 bg-[#111111]">
<img alt="Kanzlei Weidemann Pigorsch – Teamfoto" className="w-full h-auto object-cover object-top" decoding="sync" fetchpriority="high" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/597a8cce-019d-4a9c-922c-430e2784bc78_3840w.jpg"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pt-32 pb-4 sm:pb-8 lg:pb-12 px-4 text-center">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight drop-shadow-lg">
            Weidemann -
            Pigorsch<br/><span className="text-white text-xl sm:text-3xl md:text-4xl mt-2 sm:mt-4 block font-normal">Fachanwälte in Dortmund</span>
</h1>
</div>
</div>
<div className="max-w-4xl mx-auto text-center mt-8 sm:mt-12 px-4 mb-16 sm:mb-20 lg:mb-24">
<p className="animate-fade-up delay-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-neutral-300 tracking-wide mb-10 sm:mb-12">
          Wir setzen uns mit langjähriger Erfahrung und höchster Spezialisierung zielgerichtet für Ihre rechtlichen
          Interessen ein.</p>
<div className="animate-fade-up delay-4 flex flex-col sm:flex-row sm:space-y-0 sm:space-x-5 space-y-4 items-center justify-center">
<a className="w-full sm:w-auto uppercase hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer text-base sm:text-lg font-medium text-black tracking-widest bg-[#D4AF37] rounded-full py-4 sm:py-5 px-8 sm:px-10 shadow-[0_0_30px_rgba(212,175,55,0.4)]" onclick="navToSection('kontakt')" tabindex="0"><span>Kostenfreie Anfrage</span><i className="w-5 h-5 sm:w-6 sm:h-6" data-lucide="arrow-right" strokeWidth="2"></i></a>
<a className="w-full sm:w-auto uppercase hover:bg-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 cursor-pointer text-sm sm:text-base font-normal text-white tracking-widest border border-white/20 rounded-full py-3.5 sm:py-4 px-6 sm:px-8 text-center" onclick="navToSection('team')" tabindex="0">Unser Team kennenlernen</a>
</div>
</div>
</header>
<section aria-label="Kennzahlen" className="border-y border-white/5 bg-[#161616]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-0 md:divide-x divide-white/5">
<div className="text-center md:px-6 reveal-up">
<p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#D4AF37] tracking-tighter mb-1 sm:mb-2">40+</p>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-normal">Jahre Erfahrung</p>
</div>
<div className="text-center md:px-6 reveal-up stagger-1">
<p className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#D4AF37] tracking-tighter mb-1 sm:mb-2">1000+
            </p>
<p className="text-xs uppercase font-normal text-neutral-400 tracking-widest">Zufriedene Mandanten</p>
</div>
<div className="text-center md:px-6 reveal-up stagger-2">
<p className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-[#D4AF37] mb-1 sm:mb-2">100%
            </p>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-normal">Einsatz für Sie</p>
</div>
<div className="text-center md:px-6 reveal-up stagger-3">
<p className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tighter text-[#D4AF37] mb-1 sm:mb-2">DO</p>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-normal">Zentral in Dortmund</p>
</div>
</div>
</div>
</section>
<section aria-label="Kanzleiphilosophie" className="py-16 sm:py-24 lg:py-32 relative bg-[#111111]" id="kanzlei">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight mb-3 sm:mb-4">
            Unsere Kanzleiphilosophie</h2>
<p className="text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed">Juristische Exzellenz kombiniert
            mit persönlicher Betreuung. Wir bieten maßgeschneiderte Lösungen für komplexe Rechtsfragen.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="reveal-up group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#262626] to-[#1e1e1e] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[#D4AF37]/10">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-2 sm:mb-3">
              Persönliche Beratung</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Wir nehmen uns Zeit für Ihr Anliegen und
              entwickeln individuelle Strategien abseits von Standardlösungen.</p>
</div>
<div className="reveal-up stagger-1 group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#262626] to-[#1e1e1e] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[#D4AF37]/10">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-2 sm:mb-3">
              Hohe Spezialisierung</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Unsere Fachanwaltstitel garantieren Ihnen
              tiefgreifendes Wissen und stets aktuelle Expertise.</p>
</div>
<div className="reveal-up stagger-2 group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#262626] to-[#1e1e1e] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[#D4AF37]/10">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-2 sm:mb-3">
              Transparenz</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Klare Kommunikation über Erfolgsaussichten,
              Risiken und die zu erwartenden Kosten von Anfang an.</p>
</div>
<div className="reveal-up stagger-3 group p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#262626] to-[#1e1e1e] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1.5 shadow-lg hover:shadow-[#D4AF37]/10">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-all duration-300">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-2 sm:mb-3">
              Schnelles Handeln</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">In rechtlichen Krisen reagieren wir zügig und
              konsequent, um Fristen zu wahren und Nachteile abzuwenden.</p>
</div>
</div>
</div>
</section>
<section aria-label="Team" className="py-16 sm:py-24 lg:py-32 border-y bg-[#161616] border-white/5" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center md:text-left mb-10 sm:mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-3 sm:mb-4">
            Ihre Fachanwälte</h2>
<p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl md:mx-0 mx-auto">Lernen Sie das Team
            hinter Weidemann Pigorsch kennen. Gebündelte Kompetenz für Ihren rechtlichen Erfolg.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
<div aria-label="Mehr über Andreas Pigorsch erfahren" className="reveal-up cursor-pointer group bg-[#222222] rounded-2xl border border-white/10 overflow-hidden hover:border-[#D4AF37] transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[#D4AF37]/30 active:scale-[0.98] flex flex-col" onclick="switchView('andreas')" role="button" tabindex="0">
<div className="aspect-[3/4] w-full overflow-hidden relative"><img alt="Andreas Pigorsch – Fachanwalt für Arbeitsrecht" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bfd3e72-4115-4e9d-8346-095132e8f349_800w.jpg"/>
</div>
<div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1 border-t border-white/5">
<h3 className="text-lg sm:text-xl lg:text-2xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-1">
                Andreas Pigorsch</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest mb-4 sm:mb-5">Fachanwalt</p>
<div className="space-y-2 sm:space-y-2.5 mt-auto">
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Arbeitsrecht</span>
</div>
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Medizinrecht</span>
</div>
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Sozialrecht</span>
</div>
</div>
</div>
</div>
<div aria-label="Mehr über Frank Prenger erfahren" className="reveal-up stagger-1 cursor-pointer group bg-[#222222] rounded-2xl border border-white/10 overflow-hidden hover:border-[#D4AF37] transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[#D4AF37]/30 active:scale-[0.98] flex flex-col" onclick="switchView('frank')" role="button" tabindex="0">
<div className="aspect-[3/4] w-full overflow-hidden relative"><img alt="Frank Prenger – Fachanwalt für Verkehrsrecht" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cc6709b-4764-4188-92dc-6660805d6251_800w.jpg"/>
</div>
<div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1 border-t border-white/5">
<h3 className="text-lg sm:text-xl lg:text-2xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-1">
                Frank Prenger</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest mb-4 sm:mb-5">Fachanwalt</p>
<div className="space-y-2 sm:space-y-2.5 mt-auto">
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Verkehrsrecht</span>
</div>
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Versicherungsrecht</span>
</div>
</div>
</div>
</div>
<div aria-label="Mehr über Iris Woerner erfahren" className="reveal-up stagger-2 cursor-pointer group bg-[#222222] rounded-2xl border border-white/10 overflow-hidden hover:border-[#D4AF37] transition-all duration-500 shadow-xl hover:-translate-y-2 hover:shadow-[#D4AF37]/30 active:scale-[0.98] flex flex-col sm:col-span-2 lg:col-span-1" onclick="switchView('iris')" role="button" tabindex="0">
<div className="aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] w-full overflow-hidden relative"><img alt="Iris Woerner – Fachanwältin für Familienrecht" className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca4014a3-16bd-4b41-ade5-81fe06933373_800w.jpg"/>
</div>
<div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-1 border-t border-white/5">
<h3 className="text-lg sm:text-xl lg:text-2xl font-['Playfair_Display'] font-medium tracking-tight text-[#D4AF37] mb-1">
                Iris Woerner</h3>
<p className="text-xs text-neutral-400 uppercase tracking-widest mb-4 sm:mb-5">Fachanwältin</p>
<div className="space-y-2 sm:space-y-2.5 mt-auto">
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Arbeitsrecht</span>
</div>
<div className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-300">
<i className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D4AF37] shrink-0" data-lucide="check"></i><span>Familienrecht</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section aria-label="Rechtsgebiete" className="py-16 sm:py-24 lg:py-32 bg-[#111111]" id="rechtsgebiete">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10 sm:mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight mb-3 sm:mb-4">
            Unsere Expertise</h2>
<p className="text-sm sm:text-base lg:text-lg text-neutral-400 max-w-2xl mx-auto">Spezialisierte Rechtsberatung in
            allen relevanten Bereichen</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 relative">
<div className="reveal-up group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">
              Arbeitsrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Vertretung von Arbeitgebern und Arbeitnehmern in allen arbeitsrechtlichen Angelegenheiten – von
              Vertragsgestaltung bis Kündigungsschutz.</p>
</div>
<div className="reveal-up stagger-1 group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="car" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">
              Verkehrsrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Umfassende Beratung bei Unfallabwicklung, Bußgeldverfahren, Verkehrsstrafrecht und Fahrzeugankaufsrecht.
            </p>
</div>
<div className="reveal-up stagger-2 group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="heart-pulse" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">
              Medizinrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Spezialisierte Beratung bei Arzthaftung, Behandlungsfehlern und medizinrechtlichen Fragestellungen aller
              Art.</p>
</div>
<div className="reveal-up group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="shield" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">Sozial-
              &amp; Versicherungsrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Durchsetzung Ihrer Ansprüche gegenüber Sozialversicherungsträgern und Versicherungsunternehmen.</p>
</div>
<div className="reveal-up stagger-1 group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">
              Familienrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Einfühlsame und kompetente Beratung bei Scheidung, Unterhalt, Sorgerecht und allen familienrechtlichen
              Belangen.</p>
</div>
<div className="reveal-up stagger-2 group bg-[#262626] border border-white/10 rounded-xl p-6 sm:p-8 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 ease-out cursor-pointer active:scale-95 hover:z-10" role="button" tabindex="0">
<div className="bg-[#111111] border border-[#D4AF37]/20 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4AF37] transition-colors duration-300">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:text-black transition-colors" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg sm:text-xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-3 sm:mb-4">Allgemeines
              Zivilrecht</h3>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
              Strategische Prozessführung und Durchsetzung Ihrer Ansprüche in allen zivilrechtlichen Streitigkeiten.</p>
</div>
</div>
</div>
</section>
<section aria-label="Mandantenstimmen" className="py-16 sm:py-24 lg:py-32 bg-[#161616] border-t border-white/5" id="mandanten">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10 sm:mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight mb-3 sm:mb-4">
            Was unsere Mandanten sagen</h2>
<p className="text-sm sm:text-base lg:text-lg text-neutral-400">Vertrauen und Erfolg sprechen für sich</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
<div className="reveal-up bg-gradient-to-br from-[#262626] to-[#1e1e1e] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-['Playfair_Display'] text-lg sm:text-xl shrink-0">
                SC</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">Sebastian Czok</p>
<p className="text-xs text-neutral-500">Mandant</p>
</div>
</div>
<p className="leading-relaxed text-xs sm:text-sm lg:text-base text-neutral-300 italic relative">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] opacity-40 absolute -left-1 -top-2" data-lucide="quote" strokeWidth="1"></i><span className="pl-5 sm:pl-6">„Ich werde seit vielen Jahren von Herrn Pigorsch und Herrn Prenger beraten. Alle Angelegenheiten wurden zu meiner vollsten Zufriedenheit erledigt.“</span>
</p>
</div>
<div className="reveal-up stagger-1 bg-gradient-to-br from-[#262626] to-[#1e1e1e] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-['Playfair_Display'] text-lg sm:text-xl shrink-0">
                CM</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">Claudia Martin</p>
<p className="text-xs text-neutral-500">Mandantin</p>
</div>
</div>
<p className="leading-relaxed text-xs sm:text-sm lg:text-base text-neutral-300 italic relative">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] opacity-40 absolute -left-1 -top-2" data-lucide="quote" strokeWidth="1"></i><span className="pl-5 sm:pl-6">„Herr Pigorsch ist ein grandioser Fachanwalt. Klar, verbindlich, kompetent. TOP Anwalt. Ich freue mich auf die weitere Zusammenarbeit.“</span>
</p>
</div>
<div className="reveal-up bg-gradient-to-br from-[#262626] to-[#1e1e1e] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-['Playfair_Display'] text-lg sm:text-xl shrink-0">
                İ</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">İlki</p>
<p className="text-xs text-neutral-500">Mandant</p>
</div>
</div>
<p className="leading-relaxed text-xs sm:text-sm lg:text-base text-neutral-300 italic relative">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] opacity-40 absolute -left-1 -top-2" data-lucide="quote" strokeWidth="1"></i><span className="pl-5 sm:pl-6">„Vom ersten Kontakt an bestens beraten. Die Arbeitsweise ist gewissenhaft und professionell. Eine absolute Koryphäe auf seinem Gebiet!“</span>
</p>
</div>
<div className="reveal-up stagger-1 bg-gradient-to-br from-[#262626] to-[#1e1e1e] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center font-['Playfair_Display'] text-lg sm:text-xl shrink-0">
                AD</div>
<div>
<p className="text-sm font-semibold text-white mb-0.5">Andy Dorney</p>
<p className="text-xs text-neutral-500">Mandant</p>
</div>
</div>
<p className="leading-relaxed text-xs sm:text-sm lg:text-base text-neutral-300 italic relative">
<i className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] opacity-40 absolute -left-1 -top-2" data-lucide="quote" strokeWidth="1"></i><span className="pl-5 sm:pl-6">„Ein kompetenter Anwalt, der Fragen sofort beantworten konnte. Das half, Vertrauen zu fassen. Den freundlichen Service empfehle ich uneingeschränkt.“</span>
</p>
</div>
</div>
</div>
</section>
<section aria-label="Kontakt" className="py-16 sm:py-24 lg:py-32 bg-[#111111] border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10 sm:mb-16 reveal-up">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight mb-3 sm:mb-4">
            Kontaktieren Sie uns</h2>
<p className="text-sm sm:text-base lg:text-lg text-neutral-400">Vereinbaren Sie eine Erstberatung für Ihr
            rechtliches Anliegen</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
<div className="lg:col-span-2 reveal-left">
<div className="bg-[#1e1e1e] border border-[#D4AF37]/50 rounded-xl p-6 sm:p-8 text-center shadow-2xl shadow-[#D4AF37]/10 mb-6" data-fs-success="" hidden="">
<i className="w-10 h-10 sm:w-12 sm:h-12 text-[#D4AF37] mx-auto mb-4" data-lucide="check-circle"></i>
<h3 className="text-lg sm:text-xl md:text-2xl font-['Playfair_Display'] text-[#D4AF37] mb-2 tracking-tight">
                Vielen Dank für Ihre Anfrage!</h3>
<p className="text-neutral-400 text-xs sm:text-sm md:text-base">Wir haben Ihre Nachricht erfolgreich erhalten
                und werden uns schnellstmöglich bei Ihnen melden.</p>
</div>
<div className="text-xs sm:text-sm text-red-400 mb-6 bg-red-400/10 p-4 rounded-lg border border-red-400/20" data-fs-error="" hidden="">Ein
              unerwarteter Fehler ist aufgetreten. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.</div>
<form className="space-y-4 sm:space-y-6" id="contact-form">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
<div className="flex flex-col">
<label className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2" htmlFor="contact-name">Name <span className="text-[#D4AF37]">*</span></label><input className="bg-[#1e1e1e] border border-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600" data-fs-field="" id="contact-name" name="name" placeholder="Ihr vollständiger Name" required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2" htmlFor="contact-email">E-Mail <span className="text-[#D4AF37]">*</span></label><input className="bg-[#1e1e1e] border border-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600" data-fs-field="" id="contact-email" name="email" placeholder="ihre.email@beispiel.de" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
<div className="flex flex-col">
<label className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2" htmlFor="contact-phone">Telefon</label><input className="bg-[#1e1e1e] border border-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600" data-fs-field="" id="contact-phone" name="phone" placeholder="+49 231 123 4567" type="tel"/>
</div>
<div className="flex flex-col">
<label className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2" htmlFor="contact-area">Rechtsgebiet</label><select className="bg-[#1e1e1e] border border-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-neutral-400 focus:outline-none focus:border-[#D4AF37] transition-colors cursor-pointer" data-fs-field="" id="contact-area" name="area"><option disabled="" hidden="" selected="" value="">Bitte wählen</option><option value="arbeitsrecht">Arbeitsrecht</option><option value="familienrecht">Familienrecht</option><option value="medizinrecht">Medizinrecht</option><option value="sozialrecht">Sozial- &amp; Versicherungsrecht</option><option value="verkehrsrecht">Verkehrsrecht</option><option value="zivilrecht">Allgemeines Zivilrecht</option></select>
</div>
</div>
<div className="flex flex-col">
<label className="text-xs sm:text-sm font-medium text-white mb-1.5 sm:mb-2" htmlFor="contact-message">Nachricht <span className="text-[#D4AF37]">*</span></label><textarea className="bg-[#1e1e1e] border border-white/10 rounded-lg px-3 sm:px-4 py-3 sm:py-3.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none placeholder:text-neutral-600 sm:rows-5" data-fs-field="" id="contact-message" name="message" placeholder="Beschreiben Sie bitte Ihr Anliegen..." required="" rows="4"></textarea>
</div>
<div>
<button className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#D4AF37] text-black font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg hover:bg-white transition-colors shadow-lg shadow-[#D4AF37]/20 text-sm disabled:opacity-75 disabled:cursor-not-allowed" data-fs-submit-btn="" type="submit"><i className="w-4 h-4" data-lucide="send"></i><span>Anfrage senden</span></button>
</div>
</form>
</div>
<div className="bg-gradient-to-b from-[#262626] to-[#1e1e1e] rounded-xl p-6 sm:p-8 border border-white/10 h-fit shadow-2xl reveal-right">
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] text-[#D4AF37] mb-6 sm:mb-8 tracking-tight">
              Kanzlei-Informationen</h3>
<div className="space-y-6 sm:space-y-8">
<div className="flex items-start space-x-3 sm:space-x-4 group">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" data-lucide="map-pin"></i>
<div>
<h4 className="text-white font-medium text-xs sm:text-sm mb-1">Adresse</h4>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Kleppingstraße 20<br/>44135 Dortmund</p>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4 group">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<div>
<h4 className="text-white font-medium text-xs sm:text-sm mb-1">Telefon</h4>
<div className="flex flex-col space-y-1"><a className="text-neutral-400 text-xs sm:text-sm hover:text-[#D4AF37] transition-colors flex items-center" href="tel:+49231528178"><i className="w-3 h-3 mr-1.5 opacity-60" data-lucide="phone"></i>+49
                      (231) 528 178</a><a className="text-neutral-400 text-xs sm:text-sm hover:text-[#D4AF37] transition-colors flex items-center" href="tel:+49231529877"><i className="w-3 h-3 mr-1.5 opacity-60" data-lucide="printer"></i>+49
                      (231) 529 877</a></div>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4 group">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" data-lucide="mail"></i>
<div>
<h4 className="text-white font-medium text-xs sm:text-sm mb-1">E-Mail</h4><a className="text-neutral-400 text-xs sm:text-sm hover:text-[#D4AF37] transition-colors break-all" href="mailto:info@weidemann-pigorsch.de">info@weidemann-pigorsch.de</a>
</div>
</div>
<div className="flex items-start space-x-3 sm:space-x-4 group">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" data-lucide="clock"></i>
<div>
<h4 className="text-white font-medium text-xs sm:text-sm mb-1">Bürozeiten</h4>
<div className="text-xs sm:text-sm space-y-3 mt-2">
<div>
<p className="text-white font-medium text-xs uppercase tracking-wider mb-1">Montag – Donnerstag</p>
<p className="text-neutral-400">08:00 – 12:00 Uhr<br/>13:30 – 17:00 Uhr</p>
</div>
<div>
<p className="text-white font-medium text-xs uppercase tracking-wider mb-1">Freitag</p>
<p className="text-neutral-400">08:00 – 13:00 Uhr</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<main className="page-view" id="view-ueber-uns">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 reveal-up">
<div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl border border-white/10 group">
<img alt="Kanzlei Weidemann Pigorsch – Büro" className="w-full h-full object-cover object-top origin-top contrast-110 group-hover:scale-105 transition-transform duration-1000" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0ba1694-7dbd-41e0-a5f8-0bb756c1fac0_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent"></div>
<div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 text-center sm:text-left">
<h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-['Playfair_Display'] text-[#D4AF37] leading-tight tracking-tight drop-shadow-lg">
              Tradition &amp; Moderne</h1>
</div>
</div>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 reveal-up stagger-1">
<h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Playfair_Display'] text-white mb-6 sm:mb-8 leading-tight tracking-tight text-center">
          Fachanwaltskanzlei im Herzen von Dortmund</h2>
<div className="text-neutral-300 font-light leading-relaxed space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg">
<p>Unsere Kanzlei blickt auf eine über 70-jährige Geschichte zurück. Gegründet wurde sie im Jahr 1950 von
            Rechtsanwalt Hans Dahl, der früh einen Schwerpunkt im Verkehrs- und Versicherungsrecht setzte – ein
            Tätigkeitsfeld, das bis heute einen wichtigen Bestandteil unserer Arbeit bildet.</p>
<p>Frau Dr. jur. Gunde Weidemann führte die Tätigkeit ihres Vaters über viele Jahrzehnte hinweg bis zum Jahr
            2019 erfolgreich fort. Neben ihrer anwaltlichen Tätigkeit war sie auch im Erbrecht tätig und wirkte zudem
            als Notarin.</p>
<p>Mit dem Eintritt von Prof. Dr. jur. Jürgen Weidemann erhielt die Kanzlei eine weitere fachliche
            Ausrichtung. Er prägte insbesondere die Entwicklung der Kanzlei auf den Gebieten des Arbeitsrechts sowie des
            Wirtschaftsstrafrechts.</p>
<div className="p-5 sm:p-6 my-6 sm:my-8 rounded-2xl bg-[#1e1e1e] border border-white/5 border-l-4 border-l-[#D4AF37] shadow-lg">
<p className="text-white italic text-sm sm:text-base">Seit 1990 ergänzt Rechtsanwalt <a className="text-[#D4AF37] font-medium hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-white" onclick="switchView('andreas')" tabindex="0">Andreas Pigorsch</a>, zugleich Fachanwalt für Arbeitsrecht, die Sozietät.</p>
</div>
<p><a className="text-[#D4AF37] font-medium hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-white" onclick="switchView('frank')" tabindex="0">Frank Prenger</a>, Fachanwalt im Verkehrsrecht, der seit 2019 die Kanzlei als angestellter
            Rechtsanwalt verstärkt, bearbeitet vorwiegend die Bereiche Versicherungsrecht, Verkehrsrecht und allgemeines
            Zivilrecht.</p>
<p>Die Zusammenarbeit in Bürogemeinschaft mit Rechtsanwältin <a className="text-[#D4AF37] font-medium hover:text-white cursor-pointer transition-colors underline underline-offset-4 decoration-[#D4AF37]/50 hover:decoration-white" onclick="switchView('iris')" tabindex="0">Iris Woerner</a>, Fachanwältin für Arbeits- und Familienrecht, die seit 2020 besteht, fügt
            sich nahtlos ein und setzt unseren langjährigen Anspruch, Sie als kompetentes Beraterteam fachübergreifend
            in Ihren Anliegen umfassend zu unterstützen und zu vertreten, fort.</p>
<div className="pt-6 sm:pt-8 border-t border-white/10 mt-6 sm:mt-8 text-center">
<p className="text-white font-medium text-base sm:text-lg lg:text-xl mb-3 sm:mb-4">So ist eine zügige,
              juristisch fundierte und praxisbezogene, insbesondere in jede Richtung denkende Beratung und Verfolgung
              der Interessen unserer Mandantschaft gewährleistet.</p>
<p className="text-[#D4AF37] font-medium text-sm sm:text-base lg:text-lg">Wir freuen uns, dass Sie den Weg zu
              uns gefunden haben.</p>
</div>
</div>
</div>
</div>
</main>
<main className="page-view" id="view-andreas">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
<div className="lg:col-span-5 relative reveal-left">
<div className="lg:sticky lg:top-32">
<div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative shadow-2xl"><img alt="Andreas Pigorsch" className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] object-cover object-top contrast-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/402f5fee-af7a-489b-a7ac-26b3ae8983dd_3840w.jpg"/>
</div>
<button className="inline-flex items-center space-x-2 text-neutral-500 hover:text-[#D4AF37] mt-6 sm:mt-8 transition-colors cursor-pointer text-xs sm:text-sm" onclick="navToSection('team')"><i className="w-4 h-4" data-lucide="arrow-left"></i><span>Zurück zum Team</span></button>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center reveal-right">
<div className="mb-8 sm:mb-10">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-medium tracking-tighter text-[#D4AF37] mb-2 sm:mb-3">
              Andreas Pigorsch</h1>
<p className="text-white text-sm sm:text-base lg:text-lg tracking-widest uppercase mb-1 sm:mb-2">Rechtsanwalt
            </p>
<p className="text-neutral-400 text-xs sm:text-sm lg:text-base">Fachanwalt für Arbeitsrecht, Medizinrecht und
              Sozialrecht</p>
</div>
<div className="max-w-none text-neutral-300 mb-12 sm:mb-16 leading-relaxed font-light space-y-4 sm:space-y-5 text-sm sm:text-base">
<p>Rechtsanwalt Andreas Pigorsch ist seit nunmehr 30 Jahren als Rechtsanwalt in Dortmund tätig. Bereits 1993
              wurde er zum Fachanwalt für Arbeitsrecht ernannt und gehört mit seiner langjährigen Erfahrung bei der
              Lösung von arbeitsrechtlichen Problemstellungen zu den ersten Adressen im Ruhrgebiet.</p>
<p>Er vertritt sowohl Arbeitnehmer, als auch Arbeitgeber und hat im Laufe seiner Tätigkeit erfolgreich auch
              arbeitsrechtliche Masseverfahren begleitet. Da sich bei der Lösung arbeitsrechtlicher Fragestellungen
              häufig auch Schnittstellen zum Sozialversicherungsrecht ergeben, erwarb er im Jahr 2001 die
              Zusatzqualifikation zum Fachanwalt für Sozialrecht.</p>
<p>Abgerundet wird sein Tätigkeitsbereich durch den im Jahr 2011 erworbenen Fachanwalt für Medizinrecht;
              dort ist er seitdem erfolgreich im Arzthaftungsrecht tätig.</p>
<p>Als ehemaliger Handballer ist Andreas Pigorsch bis heute dem Sport verbunden, sei es aktiv oder passiv,
              durch den Stadionbesuch beim BVB, sofern die Großfamilie das zeitlich zulässt.</p>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-4 sm:mb-6 tracking-tight">
            Arbeitsgebiete</h3>
<div className="flex flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
<span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Arbeitsrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Sozialrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Medizinrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Arzthaftungsrecht</span>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-6 sm:mb-8 tracking-tight">
            Beruflicher Werdegang</h3>
<div className="space-y-3 sm:space-y-4 border-l-2 border-[#D4AF37]/20 pl-6 sm:pl-8">
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Studium der Rechtswissenschaften</div>
<div className="text-neutral-500 text-xs mt-1">Westfälische Wilhelms-Universität Münster</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Rechtsanwalt in der Sozietät</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">1991</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwalt für Arbeitsrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">1993</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwalt für Sozialrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2001</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwalt für Medizinrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2011</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-view" id="view-frank">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
<div className="lg:col-span-5 relative reveal-left">
<div className="lg:sticky lg:top-32">
<div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative shadow-2xl"><img alt="Frank Prenger" className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] object-cover object-top contrast-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fe7e352-5262-472b-bf29-24e743e11081_3840w.jpg"/>
</div>
<button className="inline-flex items-center space-x-2 text-neutral-500 hover:text-[#D4AF37] mt-6 sm:mt-8 transition-colors cursor-pointer text-xs sm:text-sm" onclick="navToSection('team')"><i className="w-4 h-4" data-lucide="arrow-left"></i><span>Zurück zum Team</span></button>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center reveal-right">
<div className="mb-8 sm:mb-10">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-medium tracking-tighter text-[#D4AF37] mb-2 sm:mb-3">
              Frank Prenger</h1>
<p className="text-white text-sm sm:text-base lg:text-lg tracking-widest uppercase mb-1 sm:mb-2">Rechtsanwalt
            </p>
<p className="text-neutral-400 text-xs sm:text-sm lg:text-base">Fachanwalt für Verkehrsrecht |
              Versicherungsrecht</p>
</div>
<div className="max-w-none text-neutral-300 mb-12 sm:mb-16 leading-relaxed font-light space-y-4 sm:space-y-5 text-sm sm:text-base">
<p>Frank Prenger, im Jahr 1980 geboren, ist seit 2012 als Rechtsanwalt zugelassen und trägt den Titel
              „Fachanwalt für Verkehrsrecht“ bereits seit 2015. Seit 2022 Fachanwalt für Versicherungsrecht.</p>
<p>Mit seiner Erfahrung von über 3000 betreuten Mandaten im Bereich des Verkehrsrechts ist Rechtsanwalt
              Prenger in besonderem Maße spezialisiert auf Unfallabwicklung, Bußgeldrecht, Verkehrsstrafrecht und
              Ankaufsrecht. Durch regelmäßige Fortbildungen wird die Spezialisierung konsequent ausgebaut.</p>
<p>Weitere Schwerpunkte seiner anwaltlichen Tätigkeit sind neben dem Versicherungsrecht die breit
              gefächerten Bereiche des allgemeinen Zivilrechts wie Kauf- und Werkvertragsrecht, Miet- und Nachbarrecht
              oder auch Schadensersatzrecht. Die theoretische Qualifikation zum Fachanwalt für Versicherungsrecht hat
              Rechtsanwalt Prenger 2020 durch den erfolgreichen Abschluss des Fachanwaltslehrgangs erworben.</p>
<p>In seiner Freizeit gilt seine Leidenschaft den Gesellschaftsspielen, einschließlich der Teilnahme an
              Qualifikationsturnieren.</p>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-4 sm:mb-6 tracking-tight">
            Arbeitsgebiete</h3>
<div className="flex flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
<span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Verkehrsrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Versicherungsrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Unfallabwicklung</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Bußgeldrecht</span>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-6 sm:mb-8 tracking-tight">
            Beruflicher Werdegang</h3>
<div className="space-y-3 sm:space-y-4 border-l-2 border-[#D4AF37]/20 pl-6 sm:pl-8">
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Zulassung als Rechtsanwalt</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2012</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwalt für Verkehrsrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2015</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Eintritt bei Weidemann Pigorsch</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2019</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwalt für Versicherungsrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2022</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-view" id="view-iris">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20">
<div className="lg:col-span-5 relative reveal-left">
<div className="lg:sticky lg:top-32">
<div className="rounded-2xl overflow-hidden border border-[#D4AF37]/20 relative shadow-2xl"><img alt="Iris Woerner" className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] object-cover object-top contrast-110" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0bc028f2-28bb-48e4-b476-1d952acc10a9_3840w.jpg"/>
</div>
<button className="inline-flex items-center space-x-2 text-neutral-500 hover:text-[#D4AF37] mt-6 sm:mt-8 transition-colors cursor-pointer text-xs sm:text-sm" onclick="navToSection('team')"><i className="w-4 h-4" data-lucide="arrow-left"></i><span>Zurück zum Team</span></button>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center reveal-right">
<div className="mb-8 sm:mb-10">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-medium tracking-tighter text-[#D4AF37] mb-2 sm:mb-3">
              Iris Woerner</h1>
<p className="text-white text-sm sm:text-base lg:text-lg tracking-widest uppercase mb-1 sm:mb-2">Rechtsanwältin
            </p>
<p className="text-neutral-400 text-xs sm:text-sm lg:text-base">Fachanwältin für Arbeitsrecht und Familienrecht
            </p>
</div>
<div className="max-w-none text-neutral-300 mb-12 sm:mb-16 leading-relaxed font-light space-y-4 sm:space-y-5 text-sm sm:text-base">
<p>Nach einer Ausbildung zur Bankkauffrau bei einer Großbank in ihrer Heimatstadt München studierte Iris
              Woerner Rechtswissenschaft an der Westfälischen Wilhelms-Universität Münster und der Katholieke
              Universiteit Leuven in Belgien. Im Anschluss an ihr Referendariat am Landgericht Münster hat sie sich 2003
              als Anwältin in Dortmund niedergelassen. Sie hat bereits in 2006 den Titel Fachanwältin für Arbeitsrecht
              erworben und in 2011 den Fachanwalt für Familienrecht. In beiden Fachgebieten wird das Spezialwissen durch
              regelmäßige Schulungen erweitert und auf dem neuesten Stand gehalten.</p>
<p>Frau Rechtsanwältin Woerner ist regelmäßig als Dozentin tätig. Sie beschäftigt sich hier unter anderem
              mit dem Bereich des kirchlichen Arbeitsrechts. Sie ist zudem Mitglied im Deutschen Anwaltsverein und im
              VDJ.</p>
<p>Neben der juristischen Tätigkeit ist Rechtsanwältin Iris Woerner Managerin eines „kleinen
              Familienunternehmens“ mit fünf eigenen Kindern und gelebter Patchworkerfahrung.</p>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-4 sm:mb-6 tracking-tight">
            Arbeitsgebiete</h3>
<div className="flex flex-wrap gap-2 sm:gap-3 mb-12 sm:mb-16">
<span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Arbeitsrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Familienrecht</span><span className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-[#222222] text-neutral-200 text-xs sm:text-sm hover:border-[#D4AF37] transition-colors cursor-default">Kirchliches Arbeitsrecht</span>
</div>
<h3 className="text-xl sm:text-2xl font-['Playfair_Display'] font-medium text-[#D4AF37] mb-6 sm:mb-8 tracking-tight">
            Beruflicher Werdegang</h3>
<div className="space-y-3 sm:space-y-4 border-l-2 border-[#D4AF37]/20 pl-6 sm:pl-8">
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Studium der Rechtswissenschaften</div>
<div className="text-neutral-500 text-xs mt-1">Münster &amp; Leuven (Belgien)</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Zulassung als Anwältin in Dortmund</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2003</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwältin für Arbeitsrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2006</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Fachanwältin für Familienrecht</div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2011</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[1.85rem] sm:-left-[2.55rem] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#D4AF37] bg-[#111111]">
</div>
<div className="p-3 sm:p-4 rounded-xl border border-white/10 bg-[#222222]">
<div className="flex items-center justify-between gap-2">
<div className="text-neutral-200 font-medium text-xs sm:text-sm">Bürogemeinschaft mit Weidemann Pigorsch
                  </div>
<div className="text-[#D4AF37] text-xs font-medium shrink-0">2020</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-view" id="view-impressum">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32 max-w-4xl mx-auto px-4 sm:px-6">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] text-[#D4AF37] mb-6 sm:mb-8 leading-tight tracking-tight">
        Impressum</h1>
<div className="max-w-none text-neutral-300 font-light leading-relaxed space-y-5 sm:space-y-6 text-sm sm:text-base">
<p><strong className="text-white">Weidemann · Pigorsch</strong><br/>Rechtsanwälte<br/>Friedhof 6-8<br/>44135 Dortmund
        </p>
<h3 className="text-base sm:text-lg font-medium text-white mt-8 sm:mt-10 mb-3">Allgemeine Informationspflicht nach §
          36 Verbraucherstreitbeilegungsgesetz (VSBG):</h3>
<p>Die Kanzlei Weidemann · Pigorsch nimmt nicht an einem Streitbeilegungsverfahren im Sinne des VSBG teil. Es
          besteht diesbezüglich keine gesetzliche Verpflichtung.</p>
<h3 className="text-base sm:text-lg font-medium text-white mt-8 sm:mt-10 mb-3">Haftungshinweis:</h3>
<p>Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für
          den Inhalt der verlinkten Seiten sind ausschließlich ihre Betreiber verantwortlich.</p>
<h3 className="text-base sm:text-lg font-medium text-white mt-8 sm:mt-10 mb-3">Haftungsausschluss</h3>
<p><strong>1. Inhalt des Onlineangebotes</strong><br/>Die Kanzlei Weidemann · Pigorsch prüft und aktualisiert die Informationen auf ihren Webseiten regelmäßig. Trotz aller Sorgfalt können sich die Daten inzwischen verändert haben. Eine Haftung oder Garantie für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen kann daher nicht übernommen werden. Haftungsansprüche gegen die Kanzlei Weidemann · Pigorsch, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der Weidemann · Pigorsch kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Die Kanzlei Weidemann · Pigorsch behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
<p>
<strong>2. Verweise und Links</strong><br/>Bei direkten oder indirekten Verweisen auf fremde Internetseiten (Links), die außerhalb des Verantwortungsbereiches der Kanzlei Weidemann · Pigorsch liegen, tritt eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft, in dem die Kanzlei Weidemann · Pigorsch von den Inhalten Kenntnis hat und es der Weidemann · Pigorsch technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.<br/><br/>Die Kanzlei Weidemann · Pigorsch erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der gelinkten/verknüpften Seiten hat die Kanzlei Weidemann · Pigorsch keinerlei Einfluss. Die Kanzlei Weidemann · Pigorsch distanziert sich hiermit ausdrücklich von allen Inhalten aller gelinkten/verknüpften Seiten, die nach Linksetzung verändert wurden. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
        </p>
<p><strong>3. Rechtswirksamkeit dieses Haftungsausschlusses</strong><br/>Die Kanzlei Weidemann · Pigorsch prüft und aktualisiert die Informationen auf ihren Webseiten regelmäßig. Trotz aller Sorgfalt können sich die Daten inzwischen verändert haben. Eine Haftung oder Garantie für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen kann daher nicht übernommen werden. Haftungsansprüche gegen die Kanzlei Weidemann · Pigorsch, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens der Kanzlei Weidemann · Pigorsch kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Die Kanzlei Weidemann · Pigorsch behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </p>
<h3 className="text-base sm:text-lg font-medium text-white mt-8 sm:mt-10 mb-3">Urheber- und Kennzeichenrecht</h3>
<p>Inhalte und Aufbau der Kanzlei Weidemann · Pigorsch Website sind urheberrechtlich geschützt. Die Kanzlei
          Weidemann · Pigorsch muss jeder vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassenen Verwertung
          vorher schriftlich zustimmen. Dies gilt insbesondere für die Vervielfältigung, Bearbeitung, Übersetzung,
          Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien
          und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet. Die unerlaubte Vervielfältigung
          oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die
          Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist
          erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.</p>
</div>
</div>
</main>
<main className="page-view" id="view-datenschutz">
<div className="pt-24 sm:pt-32 pb-16 sm:pb-24 lg:pt-40 lg:pb-32">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="mb-10 sm:mb-16 reveal-up">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#111111] border border-[#D4AF37]/30 flex items-center justify-center">
<i className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" data-lucide="shield-check" strokeWidth="1.5"></i></div>
<span className="text-xs sm:text-sm uppercase tracking-widest text-[#D4AF37] font-medium">DSGVO</span>
</div>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-medium text-[#D4AF37] tracking-tight leading-tight mb-4 sm:mb-6">
            Datenschutzerklärung</h1>
<p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl">Wir freuen
            uns sehr über Ihr Interesse an unseren Dienstleistungen. Datenschutz hat einen besonders hohen Stellenwert
            für Weidemann · Pigorsch.</p>
</div>
<div className="mb-12 sm:mb-16 bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 reveal-up stagger-1">
<h3 className="text-sm sm:text-base font-medium text-white mb-4 sm:mb-5 flex items-center space-x-2">
<i className="w-4 h-4 text-[#D4AF37]" data-lucide="list" strokeWidth="1.5"></i><span>Inhaltsverzeichnis</span>
</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3"><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-1" onclick="event.preventDefault(); document.getElementById('dsgvo-1').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">1</span><span>Begriffsbestimmungen</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-2" onclick="event.preventDefault(); document.getElementById('dsgvo-2').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">2</span><span>Name und Anschrift des Verantwortlichen</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-3" onclick="event.preventDefault(); document.getElementById('dsgvo-3').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">3</span><span>Cookies</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-4" onclick="event.preventDefault(); document.getElementById('dsgvo-4').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">4</span><span>Erfassung allgemeiner Daten</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-5" onclick="event.preventDefault(); document.getElementById('dsgvo-5').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">5</span><span>Registrierung auf unserer Internetseite</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-6" onclick="event.preventDefault(); document.getElementById('dsgvo-6').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">6</span><span>Kontaktmöglichkeit</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-7" onclick="event.preventDefault(); document.getElementById('dsgvo-7').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">7</span><span>Routinemäßige Löschung</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-8" onclick="event.preventDefault(); document.getElementById('dsgvo-8').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">8</span><span>Rechte der betroffenen Person</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-9" onclick="event.preventDefault(); document.getElementById('dsgvo-9').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">9</span><span>Rechtsgrundlage der Verarbeitung</span></a><a className="flex items-center space-x-3 text-xs sm:text-sm text-neutral-400 hover:text-[#D4AF37] transition-colors cursor-pointer py-1.5 group" href="#dsgvo-10" onclick="event.preventDefault(); document.getElementById('dsgvo-10').scrollIntoView({behavior:'smooth'})"><span className="w-5 h-5 rounded bg-white/5 text-neutral-500 group-hover:bg-[#D4AF37]/10 group-hover:text-[#D4AF37] flex items-center justify-center text-xs font-medium transition-colors shrink-0">10</span><span>Datenschutzbeauftragter</span></a>
</div>
</div>
<div className="space-y-10 sm:space-y-14">
<section className="dsgvo-section reveal-up" id="dsgvo-1">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">1</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Begriffsbestimmungen</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">Die Datenschutzerklärung beruht auf
                den Begrifflichkeiten, die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
                Datenschutz-Grundverordnung (DS-GVO) verwendet wurden.</p>
<div className="space-y-4">
<div className="flex items-start space-x-3"><span className="dsgvo-letter">a</span>
<div>
<p className="text-white font-medium text-sm mb-1">Personenbezogene Daten</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Alle Informationen, die sich auf eine
                      identifizierte oder identifizierbare natürliche Person beziehen.</p>
</div>
</div>
<div className="flex items-start space-x-3"><span className="dsgvo-letter">b</span>
<div>
<p className="text-white font-medium text-sm mb-1">Betroffene Person</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Jede identifizierte oder
                      identifizierbare natürliche Person, deren personenbezogene Daten verarbeitet werden.</p>
</div>
</div>
<div className="flex items-start space-x-3"><span className="dsgvo-letter">c</span>
<div>
<p className="text-white font-medium text-sm mb-1">Verarbeitung</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Jeder Vorgang im Zusammenhang mit
                      personenbezogenen Daten wie Erheben, Erfassen, Organisation, Ordnen, Speicherung, Anpassung,
                      Veränderung, Auslesen, Abfragen, Verwendung oder Löschung.</p>
</div>
</div>
<div className="flex items-start space-x-3"><span className="dsgvo-letter">d</span>
<div>
<p className="text-white font-medium text-sm mb-1">Verantwortlicher</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Die natürliche oder juristische
                      Person, die über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                    </p>
</div>
</div>
<div className="flex items-start space-x-3"><span className="dsgvo-letter">e</span>
<div>
<p className="text-white font-medium text-sm mb-1">Auftragsverarbeiter</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Eine natürliche oder juristische
                      Person, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet.</p>
</div>
</div>
<div className="flex items-start space-x-3"><span className="dsgvo-letter">f</span>
<div>
<p className="text-white font-medium text-sm mb-1">Einwilligung</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Jede freiwillig für den bestimmten
                      Fall, in informierter Weise und unmissverständlich abgegebene Willensbekundung der betroffenen
                      Person.</p>
</div>
</div>
</div>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-2">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">2</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Name und Anschrift des Verantwortlichen</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-4">Der Verantwortliche im Sinne der
                Datenschutz-Grundverordnung ist:</p>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 sm:p-6">
<p className="text-white font-medium text-sm sm:text-base mb-2">Weidemann · Pigorsch Rechtsanwälte</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Friedhof 6-8<br/>44135 Dortmund<br/>Deutschland
                </p>
<div className="mt-4 pt-4 border-t border-white/5 space-y-2">
<p className="text-neutral-400 text-xs sm:text-sm"><span className="text-neutral-500">Telefon:</span><a className="text-[#D4AF37] hover:text-white transition-colors ml-2" href="tel:+49231528178">+49 (231)
                      528 178</a></p>
<p className="text-neutral-400 text-xs sm:text-sm"><span className="text-neutral-500">E-Mail:</span><a className="text-[#D4AF37] hover:text-white transition-colors ml-2" href="mailto:info@weidemann-pigorsch.de">info@weidemann-pigorsch.de</a></p>
</div>
</div>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-3">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">3</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Cookies</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Unsere Internetseiten verwenden Cookies.
                Cookies sind Textdateien, die über einen Internetbrowser auf einem Computersystem abgelegt und
                gespeichert werden.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Zahlreiche Internetseiten und Server
                verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID, die eine eindeutige Kennung des
                Cookies darstellt und es Internetseiten und Servern ermöglicht, den konkreten Internetbrowser
                zuzuordnen, in dem das Cookie gespeichert wurde.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Die betroffene Person kann die Setzung
                von Cookies durch unsere Internetseite jederzeit mittels einer entsprechenden Einstellung des genutzten
                Internetbrowsers verhindern und damit der Setzung von Cookies dauerhaft widersprechen.</p>
<div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5 mt-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Bereits gesetzte Cookies können
                    jederzeit über einen Internetbrowser oder andere Softwareprogramme gelöscht werden. Dies ist in
                    allen gängigen Internetbrowsern möglich.</p>
</div>
</div>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-4">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">4</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Erfassung allgemeiner Daten und Informationen</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Unsere Internetseite erfasst mit jedem
                Aufruf eine Reihe von allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen
                werden in den Logfiles des Servers gespeichert. Erfasst werden können:</p>
<ul className="space-y-2 ml-4">
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Die verwendeten Browsertypen und Versionen</span>
</li>
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Das vom zugreifenden System verwendete Betriebssystem</span>
</li>
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Die Internetseite, von welcher ein zugreifendes System auf unsere Internetseite gelangt</span>
</li>
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Datum und Uhrzeit eines Zugriffes auf die Internetseite</span>
</li>
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Eine Internet-Protokoll-Adresse (IP-Adresse)</span>
</li>
<li className="flex items-start space-x-2 text-xs sm:text-sm text-neutral-400">
<i className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="chevron-right" strokeWidth="2"></i><span>Der Internet-Service-Provider des zugreifenden Systems</span>
</li>
</ul>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Diese Daten werden benötigt, um die
                Inhalte unserer Internetseite korrekt auszuliefern, die dauerhafte Funktionsfähigkeit unserer
                informationstechnologischen Systeme zu gewährleisten sowie zur Strafverfolgung im Falle eines
                Cyberangriffes. Die Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1 lit. f DS-GVO.</p>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-5">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">5</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Registrierung auf unserer Internetseite</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Unsere Internetseite bietet derzeit keine
                Registrierungsmöglichkeit an. Sollte eine solche Möglichkeit zukünftig angeboten werden, werden die
                dabei erhobenen personenbezogenen Daten ausschließlich für die interne Verwendung bei dem für die
                Verarbeitung Verantwortlichen und für eigene Zwecke erhoben und gespeichert.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Die Rechtsgrundlage wäre in einem solchen
                Fall Art. 6 Abs. 1 lit. a oder lit. b DS-GVO.</p>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-6">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">6</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Kontaktmöglichkeit über die Internetseite</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Unsere Internetseite enthält aufgrund von
                gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme sowie eine
                unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten
                elektronischen Post (E-Mail-Adresse) umfasst.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Sofern eine betroffene Person per E-Mail
                oder über ein Kontaktformular den Kontakt mit dem für die Verarbeitung Verantwortlichen aufnimmt, werden
                die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Solche auf
                freiwilliger Basis von einer betroffenen Person an den für die Verarbeitung Verantwortlichen
                übermittelten personenbezogenen Daten werden für Zwecke der Bearbeitung oder der Kontaktaufnahme zur
                betroffenen Person gespeichert.</p>
<div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="lock" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Es erfolgt keine Weitergabe dieser
                    personenbezogenen Daten an Dritte. Die Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DS-GVO.</p>
</div>
</div>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-7">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">7</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Routinemäßige Löschung und Sperrung</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Der für die Verarbeitung Verantwortliche
                verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur
                Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien-
                und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die
                Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Entfällt der Speicherungszweck oder läuft
                eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber
                vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den
                gesetzlichen Vorschriften gesperrt oder gelöscht.</p>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-8">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">8</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Rechte der betroffenen Person</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-5">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Jede betroffene Person hat folgende
                Rechte gemäß der DS-GVO:</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="eye" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Auskunft</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 15 DS-GVO – Auskunft über verarbeitete
                    personenbezogene Daten</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="pencil" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Berichtigung</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 16 DS-GVO – Berichtigung unrichtiger
                    personenbezogener Daten</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="trash-2" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Löschung</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 17 DS-GVO – Löschung personenbezogener Daten
                    ohne Verzögerung</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="pause" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Einschränkung</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 18 DS-GVO – Einschränkung der Verarbeitung
                    personenbezogener Daten</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="download" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Datenübertragbarkeit</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 20 DS-GVO – Erhalt der Daten in einem
                    strukturierten Format</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 hover:border-[#D4AF37]/30 transition-colors">
<div className="flex items-center space-x-2 mb-2">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="x-circle" strokeWidth="1.5"></i>
<p className="text-white font-medium text-xs sm:text-sm">Recht auf Widerspruch</p>
</div>
<p className="text-neutral-500 text-xs leading-relaxed">Art. 21 DS-GVO – Widerspruch gegen die
                    Verarbeitung jederzeit möglich</p>
</div>
</div>
<div className="bg-[#111111] border border-[#D4AF37]/20 rounded-xl p-4 sm:p-5">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">Zur Ausübung Ihrer Rechte wenden Sie
                    sich bitte an: <a className="text-[#D4AF37] hover:text-white transition-colors" href="mailto:info@weidemann-pigorsch.de">info@weidemann-pigorsch.de</a></p>
</div>
</div>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-9">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">9</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Rechtsgrundlage der Verarbeitung</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Art. 6 Abs. 1 lit. a DS-GVO dient unserem
                Unternehmen als Rechtsgrundlage für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen
                bestimmten Verarbeitungszweck einholen.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Ist die Verarbeitung personenbezogener
                Daten zur Erfüllung eines Vertrages erforderlich, so beruht die Verarbeitung auf Art. 6 Abs. 1 lit. b
                DS-GVO. Gleiches gilt für Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen
                erforderlich sind.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Unterliegt unser Unternehmen einer
                rechtlichen Verpflichtung, so beruht die Verarbeitung auf Art. 6 Abs. 1 lit. c DS-GVO.</p>
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Letztlich könnten Verarbeitungsvorgänge
                auf Art. 6 Abs. 1 lit. f DS-GVO beruhen, wenn die Verarbeitung zur Wahrung eines berechtigten Interesses
                unseres Unternehmens oder eines Dritten erforderlich ist.</p>
</div>
</section>
<section className="dsgvo-section reveal-up" id="dsgvo-10">
<div className="flex items-center space-x-3 mb-4 sm:mb-6">
<span className="w-8 h-8 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] text-sm font-medium shrink-0">10</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] font-medium text-white tracking-tight">
                Datenschutzbeauftragter</h2>
</div>
<div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-4">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Aufgrund der Größe unserer Kanzlei ist
                die Bestellung eines Datenschutzbeauftragten gesetzlich nicht vorgeschrieben. Bei Fragen zum Datenschutz
                wenden Sie sich bitte direkt an uns:</p>
<div className="bg-[#111111] border border-white/5 rounded-xl p-4 sm:p-6">
<p className="text-white font-medium text-sm sm:text-base mb-2">Weidemann · Pigorsch Rechtsanwälte</p>
<p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">Friedhof 6-8, 44135 Dortmund<br/><a className="text-[#D4AF37] hover:text-white transition-colors" href="mailto:info@weidemann-pigorsch.de">info@weidemann-pigorsch.de</a><br/><a className="text-[#D4AF37] hover:text-white transition-colors" href="tel:+49231528178">+49 (231) 528
                    178</a></p>
</div>
</div>
</section>
</div>
<div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 text-center reveal-up">
<p className="text-xs sm:text-sm text-neutral-500">Diese Datenschutzerklärung wurde zuletzt aktualisiert am
            <span className="text-neutral-400">01. Januar 2025</span>.</p>
</div>
</div>
</div></main>
<footer className="bg-[#111111] border-t border-white/5 py-12 sm:py-16 lg:py-20" role="contentinfo">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14">
<div className="sm:col-span-2 lg:col-span-1"><a className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer mb-4 sm:mb-6" onclick="switchView('home')" tabindex="0">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border border-[#D4AF37] rounded-full"></div>
<span className="relative z-10 text-xl text-[#D4AF37] tracking-tighter font-['Playfair_Display']">WP</span>
</div>
<div className="flex flex-col">
<span className="text-sm tracking-[0.15em] text-white font-normal uppercase leading-tight">Weidemann Pigorsch</span>
</div>
</a>
<p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-xs">Ihre Fachanwaltskanzlei im Herzen von
            Dortmund. Kompetente Rechtsberatung seit über 70 Jahren.</p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4 sm:mb-5">Rechtsgebiete</h4>
<ul className="space-y-2 sm:space-y-3">
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Arbeitsrecht</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Verkehrsrecht</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Familienrecht</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Medizinrecht</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('rechtsgebiete')" tabindex="0">Sozialrecht</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4 sm:mb-5">Kanzlei</h4>
<ul className="space-y-2 sm:space-y-3">
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('ueber-uns')" tabindex="0">Über uns</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('team')" tabindex="0">Unser Team</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="navToSection('kontakt')" tabindex="0">Kontakt</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('impressum')" tabindex="0">Impressum</a></li>
<li><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('datenschutz')" tabindex="0">Datenschutz</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium mb-4 sm:mb-5">Kontakt</h4>
<div className="space-y-3 sm:space-y-4">
<div className="flex items-start space-x-3">
<i className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">Friedhof 6-8<br/>44135 Dortmund</p>
</div>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="phone" strokeWidth="1.5"></i><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors" href="tel:+49231528178">+49 (231) 528 178</a>
</div>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="printer" strokeWidth="1.5"></i><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors" href="tel:+49231529877">+49 (231) 529 877</a>
</div>
<div className="flex items-center space-x-3">
<i className="w-4 h-4 text-[#D4AF37] shrink-0" data-lucide="mail" strokeWidth="1.5"></i><a className="text-xs sm:text-sm text-neutral-500 hover:text-[#D4AF37] transition-colors break-all" href="mailto:info@weidemann-pigorsch.de">info@weidemann-pigorsch.de</a>
</div>
</div>
</div>
</div>
<div className="pt-8 sm:pt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600 text-center sm:text-left">© 2026 Weidemann · Pigorsch Rechtsanwälte.
          Alle Rechte vorbehalten.</p>
<div className="flex items-center space-x-4 sm:space-x-6"><a className="text-xs text-neutral-600 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('impressum')" tabindex="0">Impressum</a><a className="text-xs text-neutral-600 hover:text-[#D4AF37] transition-colors cursor-pointer" onclick="switchView('datenschutz')" tabindex="0">Datenschutz</a></div>
</div>
</div>
</footer>


    </>
  );
}
