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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
brand: {
black: '#0A0A0A',
white: '#FCFCFC',
gold: '#B89758',
gray: '#F0F0F0',
darkgray: '#222222',
border: 'rgba(10, 10, 10, 0.08)'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          gsap.registerPlugin(ScrollTrigger);

          // Hero Text Reveal Mask Animation
          const revealTexts = document.querySelectorAll('.reveal-text');
          if (revealTexts.length > 0) {
              gsap.to(revealTexts, {
                  y: "0%",
                  duration: 1.2,
                  stagger: 0.1,
                  ease: "power4.out",
                  delay: 0.2
              });
          }

          // General Fade Up Elements
          const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
          fadeUpElements.forEach((el) => {
              gsap.fromTo(el,
                  { y: 40, opacity: 0 },
                  {
                      y: 0,
                      opacity: 1,
                      duration: 1,
                      ease: "power3.out",
                      scrollTrigger: {
                          trigger: el,
                          start: "top 85%",
                      }
                  }
              );
          });

          // Blur in for images
          const blurElements = document.querySelectorAll('.gsap-blur');
          blurElements.forEach((el) => {
              gsap.fromTo(el,
                  { filter: "blur(15px)", opacity: 0, scale: 0.95 },
                  {
                      filter: "blur(0px)",
                      opacity: 1,
                      scale: 1,
                      duration: 1.5,
                      ease: "power2.out",
                      scrollTrigger: {
                          trigger: el,
                          start: "top 80%",
                      }
                  }
              );
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
      


<div className="fixed inset-0 pointer-events-none z-50 flex justify-center px-4 sm:px-8 lg:px-16">
<div className="w-full max-w-7xl h-full border-x border-brand-border relative">

<div className="absolute top-0 -left-[1px] w-4 h-4 border-t border-l border-brand-black"></div>
<div className="absolute top-0 -right-[1px] w-4 h-4 border-t border-r border-brand-black"></div>

<div className="absolute bottom-0 -left-[1px] w-4 h-4 border-b border-l border-brand-black"></div>
<div className="absolute bottom-0 -right-[1px] w-4 h-4 border-b border-r border-brand-black"></div>

</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 bg-brand-white/90 backdrop-blur-md border-b border-brand-border">
<div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 h-14 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Deal Room Logo" className="mix-blend-multiply w-auto h-12 md:h-20 object-contain cursor-pointer" onclick="window.location.href='/www.dealroomgr.com'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2371fa0-5b92-4175-88c0-0c4bd5a6528c_800w.png"/>
</a>
<nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-medium text-brand-black/60">
<a className="hover:text-brand-black transition-colors opacity-95" href="#system">
            ΤΟ ΣΥΣΤΗΜΑ
          </a>
<a className="hover:text-brand-black transition-colors opacity-95" href="#founder">
            Ο ΙΔΡΥΤΗΣ
          </a>
<a className="hover:text-brand-black transition-colors opacity-95" href="https://calendly.com/dealroomgr/30min">
            ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ
          </a>
</nav>
<button aria-label="Menu" className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 cursor-pointer z-50" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="w-6 h-0.5 bg-brand-black block rounded-full"></span>
<span className="w-6 h-0.5 bg-brand-black block rounded-full"></span>
<span className="w-6 h-0.5 bg-brand-black block rounded-full"></span>
</button>
</div>
<div className="hidden md:hidden absolute top-14 left-0 right-0 w-full bg-brand-white/95 backdrop-blur-md border-b border-brand-border shadow-sm flex flex-col px-4 py-6 gap-6 text-xs uppercase tracking-widest font-medium text-brand-black/60 z-40" id="mobile-menu">
<a className="hover:text-brand-black transition-colors" href="#system" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
          ΤΟ ΣΥΣΤΗΜΑ
        </a>
<a className="hover:text-brand-black transition-colors" href="#founder" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
          Ο ΙΔΡΥΤΗΣ
        </a>
<a className="hover:text-brand-black transition-colors" href="https://calendly.com/dealroomgr/30min" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
          ΚΛΕΙΣΕ ΡΑΝΤΕΒΟΥ
        </a>
</div>
</header>
<main className="relative z-10">

<section className="pt-[60px] md:pt-20 pb-12 lg:pt-20 lg:pb-32 px-4 sm:px-8 lg:px-16 border-brand-border border-b relative z-0">
<div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200vw] h-[150vh] bg-[linear-gradient(to_right,rgba(10,10,10,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" style={{transform: 'perspective(1000px) rotateX(75deg) translateY(-5%)', transformOrigin: 'top center', WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)', maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)'}}></div>
<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-gold/15 rounded-full blur-[100px] mix-blend-multiply opacity-60 transform -translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-4 lg:gap-y-12 items-center lg:items-start relative z-10">
<div className="lg:col-span-7 contents lg:flex lg:flex-col lg:pr-12 text-amber-500 pr-0 lg:items-start">
<div className="flex items-center gap-3 mb-0 reveal-mask order-1 lg:order-none lg:mt-8 lg:mb-3">
<span className="w-8 h-px bg-brand-gold reveal-text inline-block"></span>
<span className="uppercase text-brand-gold reveal-text inline-block text-[10px] md:text-xs text-amber-600 tracking-widest font-google-sans">
                Το πρωτο τοπικο συστημα συστασεων
              </span>
</div>
<h1 className="font-serif text-[28px] sm:text-5xl font-medium tracking-tight leading-[1.1] text-brand-black mb-0 lg:mb-8 order-2 lg:order-none lg:text-[54px] opacity-[0.87]">
<span className="reveal-mask block">
<span className="reveal-text block font-semibold italic">
                  ΞΕΡΕΙΣ ΤΙ ΚΑΝΕΙΣ.
                </span>
</span>
<span className="reveal-mask block">
<span className="reveal-text block font-normal">
                  ΩΡΑ ΝΑ ΦΤΑΣΕΙ Η ΔΟΥΛΕΙΑ ΣΟΥ ΕΚΕΙ ΠΟΥ ΑΞΙΖΕΙ
                </span>
</span>
</h1>
<div className="reveal-mask mb-0 lg:mb-10 max-w-xl order-3 lg:order-none">
<p className="text-[13.3px] text-brand-black/70 leading-relaxed reveal-text sm:text-lg font-thin font-google-sans opacity-80">
                Δουλεύεις όλο και περισσότερο, χωρίς να νιώθεις ότι προχωράς. Η
                πρόοδος θέλει τους σωστούς ανθρώπους. Το Deal Room σε συνδέει με
                2 επιλεγμένους επαγγελματίες σε ένα ξεκάθαρο σύστημα ποιοτικών
                συστάσεων για 30 ημέρες.
              </p>
</div>
<div className="order-5 lg:order-none flex flex-col lg:flex-row w-full justify-center lg:justify-start items-center gap-4 lg:gap-6">
<div className="reveal-mask flex w-full justify-center lg:w-auto">
<a className="inline-flex items-center gap-3 text-brand-white uppercase hover:bg-brand-gold transition-colors reveal-text shrink-0 md:text-base lg:text-sm md:py-4 md:px-8 lg:pt-4 lg:pr-8 lg:pb-4 lg:pl-8 text-xs font-semibold text-neutral-800 tracking-widest bg-amber-500 opacity-80 pt-4 pr-8 pb-4 pl-8" href="https://calendly.com/dealroomgr/30min">
                  ΚΛΕΙΣΕ ΤΟ ΔΩΡΕΑΝ ΡΑΝΤΕΒΟΥ ΣΟΥ
                </a>
</div>
<div className="reveal-mask flex flex-wrap lg:flex-col items-center justify-center lg:justify-start lg:items-start w-full lg:w-auto gap-x-4 gap-y-2 lg:gap-y-2 text-[10px] sm:text-xs font-medium text-brand-black/60 uppercase tracking-widest">
<div className="flex items-center gap-3 reveal-text">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
<svg className="w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{width: '12px', height: '12px', color: 'rgb(59, 130, 246)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="font-google-sans opacity-70">
                    χωρισ μακροχρονια δεσμευση
                  </span>
</div>
<div className="flex items-center gap-3 reveal-text">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/10 text-amber-500 shrink-0">
<svg className="text-blue-500 w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{width: '12px', height: '12px'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<span className="font-google-sans opacity-70">
                    μια θεση ανα επαγγελμα
                  </span>
</div>
</div>
</div>
<div className="order-7 lg:order-none flex gap-3 reveal-mask lg:mt-4 font-google-sans pt-0 gap-x-3 gap-y-3 items-center"></div>
<div className="order-8 lg:order-none mt-4 sm:mt-5 lg:mt-6 p-3.5 sm:p-5 border border-amber-500/40 sm:border-amber-600 max-w-sm sm:max-w-md reveal-mask rounded-lg md:mx-auto md:justify-self-center md:text-center lg:mx-0 lg:justify-self-start lg:text-left mx-4 sm:mx-0">
<p className="text-brand-black/60 leading-relaxed reveal-text text-[11px] sm:text-[13px] font-medium italic font-google-sans text-center sm:text-left">
                To 88% των καταναλωτών
                <br className="sm:hidden"/>
                εμπιστεύεται τις προσωπικές συστάσεις πάνω από
                <br className="sm:hidden"/>
                κάθε άλλη μορφή διαφήμισης. Οι συστάσεις ήδη
                <br className="sm:hidden"/>
                λειτουργούν, το Deal Room τις οργανώνει.
                <span className="block mt-2 sm:mt-3 text-[9px] sm:text-[11px] text-amber-600/80 sm:text-amber-600/90 font-semibold tracking-widest uppercase not-italic text-center sm:text-left">
                  — Πηγη: Nielsen / Trust in Advertising 2021
                </span>
</p>
</div>
</div>

<div className="order-4 lg:order-none lg:col-span-5 relative w-full aspect-video sm:aspect-video lg:aspect-[3/4] border border-brand-border flex items-center justify-center overflow-hidden gsap-blur bg-brand-amber" style={{filter: 'blur(0px)'}}>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/hyWJnEuqgBQ?autoplay=1&amp;mute=0"></iframe>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-brand-border" id="problem">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="lg:col-span-1 gsap-fade-up">
<span className="text-brand-black/40 uppercase block text-xs font-semibold tracking-widest font-google-sans mb-4">
                01 / Το Προβλημα
              </span>
<h2 className="text-brand-black text-2xl font-normal tracking-tight opacity-90">
                Η δουλειά πάει καλά. Εσύ όμως όχι μπροστά.
              </h2>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
<div className="gsap-fade-up">
<p className="text-brand-black/70 leading-relaxed sm:text-lg text-sm font-thin font-google-sans opacity-60 mb-6">
                  Έχεις χτίσει κάτι αξιόλογο. Βγάζεις χρήματα, έχεις πελάτες,
                  έχεις χτίσει ένα όνομα. Αλλά κάπου μέσα σου ξέρεις ότι αν
                  συνεχίσεις έτσι, σε 10 χρόνια θα είσαι στο ίδιο σημείο. Όχι
                  επειδή δεν δουλεύεις αρκετά. Επειδή δουλεύεις μόνος/η.
                </p>
</div>
<div className="flex flex-col gap-6 border-brand-border sm:pl-10 gsap-fade-up border-l pl-6 gap-x-6 gap-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-brand-black/30 shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<div className="">
<h4 className="uppercase text-sm font-medium tracking-widest opacity-90 mb-1">
                      Η προοδος ερχεται τυχαια, οχι συστηματικα
                    </h4>
</div>
</div>
<div className="flex items-start gap-4">
<div className=""></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-brand-border bg-brand-black text-brand-white" id="system">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 gsap-fade-up">
<div className="">
<span className="text-brand-white/40 uppercase block text-xs font-semibold tracking-widest font-google-sans mb-4">
                02 / το συστημα
              </span>
<h2 className="sm:text-4xl text-3xl font-medium tracking-tight opacity-90">
                Από Τυχαία Πρόοδο, Σε Σύστημα
              </h2>
</div>
<p className="text-brand-white/60 text-sm font-normal font-google-sans opacity-95 max-w-md">
              Το Deal Room οργανώνει τις σχέσεις, τις συστάσεις και τις
              ευκαιρίες σε μια επαναλαμβανόμενη διαδικασία 30 ημερών. Χωρίς να
              προσθέτεις άλλο βάρος στη μέρα σου.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-white/10 border border-brand-white/10">

<div className="bg-brand-black p-8 lg:p-12 hover:bg-[#111111] transition-colors gsap-fade-up">
<span className="text-brand-gold block text-sm mb-8">Βήμα 1</span>
<h3 className="text-xl font-medium tracking-tight mb-4">Επιλογή</h3>
<p className="text-brand-white/50 leading-relaxed text-sm font-normal font-google-sans opacity-95 mb-8">
                Ταιριάζουμε τα μέλη προσεκτικά. Μόνο ένας επαγγελματίας ανά
                ειδικότητα σε κάθε ομάδα.
              </p>
<div className="flex flex-col gap-3 text-xs text-brand-white/70">
<span className="flex items-center gap-2"></span>
</div>
</div>

<div className="bg-brand-black p-8 lg:p-12 hover:bg-[#111111] transition-colors gsap-fade-up">
<span className="text-brand-gold block text-sm mb-8">Βήμα 2</span>
<h3 className="text-xl font-medium tracking-tight mb-4">
                Σχηματισμός
              </h3>
<p className="text-brand-white/50 leading-relaxed text-sm font-normal font-google-sans opacity-95 mb-8">
                Καθορίζουμε ποιος είναι ο ιδανικός πελάτης για όλους και πότε
                μια σύσταση έχει πραγματική αξία.
              </p>
</div>

<div className="bg-brand-black p-8 lg:p-12 hover:bg-[#111111] transition-colors gsap-fade-up">
<span className="text-brand-gold block text-sm mb-8">Βήμα 3</span>
<h3 className="text-xl font-medium tracking-tight mb-4">Συστάσεις</h3>
<p className="text-brand-white/50 leading-relaxed text-sm font-normal font-google-sans opacity-95">
                Δημιουργούμε ποιοτικές συστάσεις με ξεκάθαρους κανόνες και
                παρακολουθούμε 30 λέπτα κάθε εβδομάδα.
              </p>
</div>
</div>
</div>
</section>


<section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-brand-border bg-[#F9F9F9]" id="benefits">
<div className="max-w-7xl mx-auto">
<span className="text-brand-black/40 uppercase block gsap-fade-up text-xs font-semibold tracking-widest font-google-sans mb-12">
            03 / οφελη
          </span>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Πιο Προβλέψιμη Πρόοδος
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Η ανάπτυξη σου δεν εξαρτάται πια από το πόσο σκληρά δουλεύεις
              </p>
</div>
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Ποιοτικότερες Συστάσεις
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Οι νέοι πελάτες έρχονται ήδη με ένα επίπεδο εμπιστοσύνης.
              </p>
</div>
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:diploma-verified-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Καλύτεροι Πελάτες
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Μακροχρόνια διατήρηση λόγω ανθρώπων που εκτιμούν πραγματικά την
                εξειδίκευση σου.
              </p>
</div>
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Άνθρωποι Που Κερδίζουν Όταν Κερδίζεις
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Γύρω σου υπάρχουν άνθρωποι με πραγματικό κίνητρο να σε
                προτείνουν.
              </p>
</div>
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:hand-shake-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Ο Μόνος Της Ειδικότητάς Σου Στην Ομάδα
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Καμία εσωτερική ανταγωνιστικότητα για τις ίδιες ευκαιρίες.
              </p>
</div>
<div className="bg-brand-white p-8 border border-brand-border hover:border-brand-gold/40 transition-colors gsap-fade-up">
<iconify-icon className="text-2xl text-brand-gold mb-6 block" icon="solar:shield-keyhole-linear"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight opacity-90 mb-3">
                Πρόοδος Χωρίς Περισσότερο Τρέξιμο
              </h3>
<p className="text-brand-black/60 text-sm font-light font-google-sans opacity-80">
                Προχωράς χωρίς να γεμίζεις τη μέρα σου με νέες υποχρεώσεις.
              </p>
</div>
</div>
<div className="mt-16 text-center gsap-fade-up">
<p className="text-brand-black/60 text-xs sm:text-sm font-thin italic font-google-sans max-w-3xl mx-auto leading-relaxed tracking-wide sm:tracking-normal sm:leading-normal">
              Έρευνα του 2015 σε συνεργασία των Πανεπιστημίων Wharton και Goethe
              έδειξε ότι πελάτες που ήρθαν μέσω σύστασης άξιζαν σε βάθος χρόνου
              16% περισσότερο από πελάτες που αποκτήθηκαν με άλλους τρόπους.
            </p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-brand-white/10 bg-brand-black text-brand-white" id="founder">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="gsap-fade-up">
<span className="text-brand-white/40 uppercase block text-xs font-semibold tracking-widest font-google-sans mb-8">
              04 / Ιδρυτησ
            </span>
<img alt="Ιωάννης Παπαδόπουλος" className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-6 border border-brand-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ef29452-1e50-4076-ba06-b07bf468d7e6_320w.png"/>
<h2 className="text-3xl font-medium tracking-tight opacity-90 mb-4">
              Ιωάννης Παπαδόπουλος
            </h2>
<div className="flex items-center gap-3 mb-6">
<a aria-label="Instagram" className="group flex items-center justify-center w-9 h-9 rounded-full border border-brand-white/10 bg-[#111111] hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300" href="https://www.instagram.com/ioannispapd" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg text-brand-white/60 group-hover:text-brand-gold transition-colors" height="18" icon="ph:instagram-logo-light" style={{color: 'rgb(184, 151, 88)'}} width="18"></iconify-icon>
</a>
<a aria-label="Facebook" className="group flex items-center justify-center w-9 h-9 rounded-full border border-brand-white/10 bg-[#111111] hover:border-brand-gold/40 hover:bg-brand-gold/5 transition-all duration-300" href="https://www.facebook.com/giannis.pap.zeus" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg text-brand-white/60 group-hover:text-brand-gold transition-colors" height="18" icon="ph:facebook-logo-light" style={{color: 'rgb(184, 151, 88)'}} width="18"></iconify-icon>
</a>
</div>
<p className="text-brand-white/70 leading-relaxed text-sm font-google-sans opacity-90 mb-6">
              "Με μια περίεργη εμμονή στην ανθρώπινη συμπεριφορά και τα
              συστήματα παρατηρούσα συνεχώς το ίδιο μοτίβο: πολύ καλοί
              επαγγελματίες αναπτύσσονται σχεδόν αποκλειστικά μόνοι τους.
            </p>
<p className="text-brand-white/70 leading-relaxed text-sm font-google-sans opacity-90 mb-8">
              Το Deal Room δημιουργήθηκε για να οργανώσει τις σχέσεις, τις
              συστάσεις και τις ευκαιρίες που ήδη υπάρχουν γύρω τους."
            </p>
<div className="border border-brand-white/10 p-6 bg-[#111111]">
<p className="uppercase text-xs font-medium tracking-widest opacity-90 mb-4">
                Γιατι δημιουργησα το Deal Room
              </p>
<ul className="text-xs text-brand-white/60 space-y-2">
<li className="flex font-google-sans opacity-95 gap-x-2 gap-y-2 items-center">
                  Πιστεύω ότι η ανάπτυξη πρέπει να βασίζεται μόνο στην
                  εμπιστοσύνη, όχι στη σκληρή δουλειά. Πιστεύω ότι οι σωστές
                  σχέσεις αξίζουν περισσότερο από τη διαφήμιση.
                </li>
</ul>
</div>
</div>

<div className="gsap-fade-up lg:border-l lg:border-brand-white/10 lg:pl-24">
<span className="text-brand-white/40 uppercase block text-xs font-semibold tracking-widest font-google-sans mb-8">
              05 / Αιτηση
            </span>
<h2 className="text-3xl font-medium tracking-tight opacity-90 mb-6">
              Η Αρχή Κάτι Νέου
            </h2>
<p className="text-brand-white/70 leading-relaxed text-sm font-google-sans opacity-90 mb-8">
              Αυτή τη στιγμή επιλέγουμε τα πρώτα ιδρυτικά μέλη του Deal Room
              στην Καλαμάτα.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-gold text-sm" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium tracking-tight opacity-90 mb-1">
                    Μία θέση ανά ειδικότητα
                  </h4>
<p className="text-brand-white/50 text-xs font-google-sans">
                    Μόνο ένας επαγγελματίας ανά ειδικότητα σε κάθε ομάδα. Όταν
                    καλυφθεί μια κατηγορία, κλειδώνει.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-gold text-sm" icon="solar:medal-star-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium tracking-tight mb-1">
                    Ιδανικό κοινό
                  </h4>
<p className="text-brand-white/50 text-xs font-google-sans">Για επαγγελματίες και ιδιοκτήτες μικρών επιχειρήσεων 35-45 ετών, με μέσο όρο 10 χρόνια στην αγορά. Όχι για νέους επαγγελματίες. Όχι για πλήρως καταξιωμένες επιχειρήσεις.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-brand-border bg-[#F9F9F9] text-brand-black" id="gpt-assistant">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 gsap-fade-up">
<span className="text-brand-black/40 uppercase block text-xs font-semibold tracking-widest font-google-sans mb-4">
              06 / ΕΡΓΑΛΕΙΑ
            </span>
<h2 className="text-brand-black text-3xl font-medium tracking-tight opacity-90">
              Κλείσε το 15' ραντεβού σου και απέκτησε άμεση πρόσβαση σε δύο
              εργαλεία του Deal Room.
            </h2>
</div>
<div className="min-h-[400px] border-brand-border flex flex-col gsap-fade-up w-full max-w-4xl border mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-sm items-center justify-center bg-brand-white">
<div className="max-w-3xl text-center w-full">
<p className="sm:text-lg text-brand-black/70 leading-relaxed text-sm font-light font-google-sans opacity-80 mb-12">
                Αμέσως μετά την κράτηση του ραντεβού σου θα λάβεις τον AI Deal
                Room βοηθό και το Έγγραφο Ποιοτικής Σύστασης ώστε να λύσεις
                οποιαδήποτε απορία σου και να είσαι καλύτερα προετοιμασμένος/η
                για τη συνάντησή μας.
              </p>
<div className="relative pt-10 pb-2 px-4 border-t border-brand-border">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-white px-4 text-[10px] sm:text-xs font-mono text-brand-gold uppercase tracking-widest whitespace-nowrap">
                  Ορισμος Ποιοτικης Συστασης
                </div>
<p className="text-brand-black leading-relaxed sm:text-lg text-lg font-medium italic tracking-tight font-google-sans opacity-95">
                  «Ποιοτική σύσταση είναι μια άμεση εισαγωγή σε άτομο με
                  επιβεβαιωμένο πρόβλημα ή ανάγκη, με συγκατάθεση πως θέλει λύση
                  άμεσα, με συγκεκριμένο επόμενο βήμα μέσα σε 48 ώρες.»
                </p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 lg:pt-32 px-4 sm:px-8 lg:px-16 bg-brand-black text-brand-white relative overflow-hidden" id="apply">

<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 mb-24 gsap-fade-up">
<h2 className="sm:text-4xl lg:text-5xl text-3xl font-medium tracking-tight opacity-90 mb-8">
            Δες Αν Υπάρχει Θέση Για Το Επάγγελμά Σου.
          </h2>
<p className="text-brand-white/50 text-sm font-light font-google-sans opacity-95 max-w-lg mr-auto mb-10 ml-auto">
            Για επαγγελματίες ή επιχειρήσεις που θέλουν πιο προβλέψιμη πρόοδο,
            με περισσότερο νόημα για την επόμενη δεκαετία τους.
          </p>
<a className="inline-flex items-center gap-3 text-brand-black uppercase hover:bg-brand-gold hover:text-brand-white transition-colors text-sm font-semibold tracking-widest bg-gray-300 px-8 py-4" href="https://calendly.com/dealroomgr/30min">
            ΚΛΕΙΣΕ ΤΟ 15' ΡΑΝΤΕΒΟΥ ΣΟΥ
          </a>
<div className="text-brand-white/50 text-sm font-light tracking-wide font-google-sans opacity-90 mt-8">
            Έχεις κάποια ερώτηση πριν το ραντεβού;
            <br className="sm:hidden"/>
<a className="hover:text-brand-white transition-colors hover:underline underline-offset-4 sm:ml-1" href="mailto:hello@dealroomgr.com">
              hello@dealroomgr.com
            </a>
            ,
            <a className="hover:text-brand-white transition-colors hover:underline underline-offset-4" href="tel:+306978120304">
              +306978120304
            </a>
</div>
<div className="text-[10px] text-brand-white/30 leading-relaxed sm:text-xs font-light italic tracking-wide font-google-sans text-center max-w-2xl mt-8 mr-auto ml-auto">
            Το Deal Room δεν εγγυάται συγκεκριμένο αριθμό συστάσεων, πελατών ή
            εσόδων. Τα αποτελέσματα εξαρτώνται από τη συμμετοχή, τη συνέπεια και
            την ποιότητα των σχέσεων κάθε μέλους. Κάθε επαγγελματίας, αγορά και
            σχέση είναι διαφορετική. Τα προηγούμενα αποτελέσματα δεν αποτελούν
            εγγύηση μελλοντικών αποτελεσμάτων.
          </div>
</div>
<div className="max-w-7xl mx-auto border-t border-brand-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-brand-white/40 font-mono uppercase tracking-widest">
<div className="flex items-center gap-2">
<span className="">
              © 2026 Deal Room. Με επιφυλαξη παντος δικαιωματος.
            </span>
</div>
<div className="flex gap-6">
<a className="hover:text-brand-white transition-colors" href="https://drive.google.com/file/d/1MIcDnvfiOwz0AU0bS-bvJEGJePVH1br_/view?usp=sharing">
              οροι
            </a>
<a className="hover:text-brand-white transition-colors" href="https://drive.google.com/file/d/1u7HICZ_Ov4xm4aTdHHclYkkoF575mGNC/view?usp=sharing">
              Απορρητο
            </a>
</div>
</div>
</footer>
</main>


    </>
  );
}
