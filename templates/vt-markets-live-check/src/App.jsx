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



        // Language Toggle
        function setLang(lang) {
            document.documentElement.lang = lang;
            const btnDe = document.getElementById('btn-de');
            const btnEn = document.getElementById('btn-en');
            
            const activeClass = 'px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm ring-1 ring-white/5';
            const inactiveClass = 'px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 text-slate-500 hover:text-slate-300';

            if (lang === 'de') {
                btnDe.className = activeClass;
                btnEn.className = inactiveClass;
            } else {
                btnEn.className = activeClass;
                btnDe.className = inactiveClass;
            }
        }

        // Intersection Observer for Scroll Animations
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove initial state classes and add final state classes
                        entry.target.classList.remove('opacity-0', 'translate-y-6');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        // Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select all elements to be animated
            document.querySelectorAll('.scroll-reveal').forEach(el => {
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
      

<div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center bg-white/[0.03] p-1 rounded-full border border-white/10 backdrop-blur-md z-50">
<button className="px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-sm ring-1 ring-white/5" id="btn-de" onclick="setLang('de')">DE</button>
<button className="px-3 sm:px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-300 text-slate-500 hover:text-slate-300" id="btn-en" onclick="setLang('en')">EN</button>
</div>
<div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 pt-20 sm:pt-24 md:pt-32">

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-indigo-500/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none -z-10 opacity-50"></div>

<div className="text-center mb-16 md:mb-24 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-white tracking-tight mb-4 sm:mb-5 leading-tight">
<span className="de">VT Markets Copytrading<br/>Anleitung</span>
<span className="en">VT Markets Copytrading<br/>Guide</span>
</h1>
<p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl mx-auto font-light px-2">
<span className="de">Schritt-für-Schritt zur Einrichtung deiner automatisierten Handelsstrategie.</span>
<span className="en">Step-by-step to setting up your automated trading strategy.</span>
</p>
</div>

<div className="relative border-l border-white/10 ml-2 sm:ml-4 md:ml-6 space-y-16 sm:space-y-24 pb-8 sm:pb-12">

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">

<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-white/30 ring-4 ring-[#0A0A0A]"></div>
<div className="space-y-4 sm:space-y-6">
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<span className="text-xs font-medium text-indigo-400 tracking-widest uppercase bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
<span className="de">Schritt 1</span><span className="en">Step 1</span>
</span>
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Konto eröffnen</span>
<span className="en">Open an Account</span>
</h2>
</div>
<div className="bg-white/[0.02] hover:bg-white/[0.03] transition-colors border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
<div>
<h3 className="text-sm md:text-base font-medium text-white mb-2 sm:mb-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0"></span>
<span className="de">Registrierungslink öffnen</span>
<span className="en">Open registration link</span>
</h3>
<a className="group flex items-center justify-between gap-3 sm:gap-4 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 rounded-xl p-3 sm:p-4 transition-all duration-300" href="https://go.vtaffiliates.com/visit/?bta=42170&amp;brand=vt&amp;campaign=22200682" target="_blank">
<div className="flex items-center gap-2 sm:gap-3 overflow-hidden min-w-0">
<iconify-icon className="text-indigo-400 text-lg sm:text-xl flex-shrink-0" icon="solar:link-circle-linear"></iconify-icon>
<span className="text-indigo-300 text-xs sm:text-sm md:text-base truncate font-medium">go.vtaffiliates.com/visit/?bta=42170...</span>
</div>
<iconify-icon className="text-indigo-400 text-base sm:text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div>
<h3 className="text-sm md:text-base font-medium text-white mb-2 sm:mb-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0"></span>
<span className="de">Daten eingeben</span>
<span className="en">Enter details</span>
</h3>
<p className="text-sm md:text-base text-slate-400 font-light leading-relaxed pl-3.5 border-l border-white/10">
<span className="de">Alle Felder vollständig ausfüllen und auf „Eröffnen Sie ein Live-Konto“ klicken.</span>
<span className="en">Fill out all fields completely and click on "Open a Live Account".</span>
</p>
</div>
</div>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-white/30 ring-4 ring-[#0A0A0A]"></div>
<div className="space-y-4 sm:space-y-6">
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<span className="text-xs font-medium text-indigo-400 tracking-widest uppercase bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
<span className="de">Schritt 2</span><span className="en">Step 2</span>
</span>
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Daten &amp; Copy Trading Konto</span>
<span className="en">Details &amp; Copy Trading Account</span>
</h2>
</div>
<div className="space-y-6 sm:space-y-8">
<div>
<h3 className="text-sm md:text-base font-medium text-white mb-2 sm:mb-3 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0"></span>
<span className="de">Persönliche Daten vervollständigen</span>
<span className="en">Complete personal details</span>
</h3>
<p className="text-sm md:text-base text-slate-400 font-light pl-3.5 border-l border-white/10">
<span className="de">Alle abgefragten Informationen korrekt eingeben.</span>
<span className="en">Enter all requested information correctly.</span>
</p>
</div>
<div className="space-y-4 sm:space-y-5">
<h3 className="text-sm md:text-base font-medium text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0"></span>
<span className="de">Copy Trading Konto erstellen</span>
<span className="en">Create Copy Trading account</span>
</h3>
<p className="text-sm md:text-base text-slate-400 font-light pl-3.5">
<span className="de">Bitte exakt folgende Einstellungen wählen:</span>
<span className="en">Please select exactly the following settings:</span>
</p>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden ml-0 sm:ml-3.5">
<div className="divide-y divide-white/5">
<div className="flex justify-between items-center p-3 sm:p-4 md:p-5 hover:bg-white/[0.01] transition-colors">
<span className="text-sm md:text-base text-slate-500 font-light">
<span className="de">Kontotyp</span><span className="en">Account Type</span>
</span>
<span className="text-sm md:text-base font-medium text-white text-right">Copy Trading</span>
</div>
<div className="flex justify-between items-center p-3 sm:p-4 md:p-5 hover:bg-white/[0.01] transition-colors">
<span className="text-sm md:text-base text-slate-500 font-light">
<span className="de">Kontoart</span><span className="en">Account Category</span>
</span>
<span className="text-sm md:text-base font-medium text-white text-right">Standard STP</span>
</div>
<div className="flex justify-between items-center p-3 sm:p-4 md:p-5 hover:bg-white/[0.01] transition-colors">
<span className="text-sm md:text-base text-slate-500 font-light">
<span className="de">Währung</span><span className="en">Currency</span>
</span>
<span className="text-sm md:text-base font-medium text-white text-right">USD</span>
</div>
</div>
<div className="bg-black/20 p-4 md:p-5 text-xs sm:text-sm md:text-base text-slate-400 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-8">
<div className="flex items-center gap-2 sm:gap-2.5">
<iconify-icon className="text-slate-500 text-base sm:text-lg flex-shrink-0" icon="solar:password-linear"></iconify-icon>
<span className="font-light"><span className="de">Passwort festlegen</span><span className="en">Set password</span></span>
</div>
<div className="flex items-center gap-2 sm:gap-2.5">
<iconify-icon className="text-slate-500 text-base sm:text-lg flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span className="font-light"><span className="de">Kästchen bestätigen</span><span className="en">Check the box</span></span>
</div>
<div className="flex items-center gap-2 sm:gap-2.5">
<iconify-icon className="text-slate-500 text-base sm:text-lg flex-shrink-0" icon="solar:plain-linear"></iconify-icon>
<span className="font-light"><span className="de">Auf Einreichen klicken</span><span className="en">Click Submit</span></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-white/30 ring-4 ring-[#0A0A0A]"></div>
<div className="space-y-4 sm:space-y-6">
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<span className="text-xs font-medium text-indigo-400 tracking-widest uppercase bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
<span className="de">Schritt 3</span><span className="en">Step 3</span>
</span>
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Konto verifizieren</span>
<span className="en">Verify Account</span>
</h2>
</div>
<div className="bg-white/[0.02] hover:bg-white/[0.03] transition-colors border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 flex gap-4 sm:gap-5 items-start">
<div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
<iconify-icon className="text-slate-300 text-lg sm:text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="space-y-1.5 sm:space-y-2">
<p className="text-sm md:text-base text-slate-400 font-light">
<span className="de">Identitätsnachweis und Adressnachweis hochladen.</span>
<span className="en">Upload proof of identity and proof of address.</span>
</p>
<p className="text-sm md:text-base font-medium text-slate-200">
<span className="de">Die Verifizierung dauert in der Regel nur kurze Zeit.</span>
<span className="en">Verification usually takes only a short time.</span>
</p>
</div>
</div>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-white/30 ring-4 ring-[#0A0A0A]"></div>
<div className="space-y-4 sm:space-y-6">
<div className="flex flex-wrap items-center gap-2 sm:gap-3">
<span className="text-xs font-medium text-indigo-400 tracking-widest uppercase bg-indigo-400/10 px-2.5 py-1 rounded-full border border-indigo-400/20">
<span className="de">Schritt 4</span><span className="en">Step 4</span>
</span>
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Einzahlung vornehmen</span>
<span className="en">Make a Deposit</span>
</h2>
</div>
<div className="grid gap-5 sm:gap-8">

<div className="bg-amber-500/5 border border-amber-500/10 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5">
<h3 className="text-sm md:text-base font-medium text-amber-500/90 flex items-center gap-2">
<iconify-icon className="text-lg flex-shrink-0" icon="solar:info-circle-linear"></iconify-icon>
<span className="de">Wichtig vorab</span><span className="en">Important context</span>
</h3>
<ul className="space-y-3 sm:space-y-4 text-sm md:text-base text-amber-200/70 font-light">
<li className="flex items-start sm:items-center gap-2 sm:gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2 sm:mt-0"></span>
<span className="de">Mindesteinzahlung: <span className="font-medium text-amber-200/90">500$</span></span>
<span className="en">Minimum deposit: <span className="font-medium text-amber-200/90">500$</span></span>
</li>
<li className="flex items-start sm:items-center gap-2 sm:gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 flex-shrink-0 mt-2 sm:mt-0"></span>
<span className="de">Empfehlung für System 2: <span className="font-medium text-amber-200/90">1.000$</span></span>
<span className="en">Recommendation for System 2: <span className="font-medium text-amber-200/90">1.000$</span></span>
</li>
<li className="flex items-start gap-2 sm:gap-3 mt-2">
<iconify-icon className="text-amber-500/70 text-base sm:text-lg mt-0.5 flex-shrink-0" icon="solar:gift-linear"></iconify-icon>
<span className="font-medium text-amber-200/90 leading-relaxed de">Bei der ersten Einzahlung gibt es je nach Aktion einen 50–100% Bonus vom Broker.</span>
<span className="font-medium text-amber-200/90 leading-relaxed en">On the first deposit, there is a 50–100% bonus from the broker depending on the promotion.</span>
</li>
</ul>
</div>

<div className="space-y-4 sm:space-y-5 bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8">
<h3 className="text-sm md:text-base font-medium text-white mb-2">
<span className="de">Einzahlung durchführen</span><span className="en">Making the deposit</span>
</h3>
<ul className="space-y-3 sm:space-y-4 text-sm md:text-base text-slate-400 font-light">
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">01</span>
<span className="de">In der Menüleiste auf <span className="text-white font-medium">„Mittel“</span> klicken</span>
<span className="en">Click on <span className="text-white font-medium">"Funds"</span> in the menu bar</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">02</span>
<span className="de"><span className="text-white font-medium">„Geld einzahlen“</span> auswählen</span>
<span className="en">Select <span className="text-white font-medium">"Deposit funds"</span></span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">03</span>
<span className="de">Dein zuvor erstelltes Copy Trading Konto auswählen</span>
<span className="en">Select your previously created Copy Trading account</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">04</span>
<span className="de">Betrag eingeben</span>
<span className="en">Enter amount</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">05</span>
<span className="de">Einzahlungsmethode wählen (Empfehlung: Kreditkarte)</span>
<span className="en">Choose deposit method (Recommended: Credit Card)</span>
</li>
<li className="flex items-start gap-3">
<span className="text-slate-600 text-xs mt-1 flex-shrink-0">06</span>
<span className="de">Einzahlung bestätigen</span>
<span className="en">Confirm deposit</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 py-4 sm:py-6">
<div className="h-px bg-white/5 w-full"></div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-white/30 ring-4 ring-[#0A0A0A]"></div>
<div className="space-y-6 sm:space-y-8">
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Copy Trading verbinden</span>
<span className="en">Connect Copy Trading</span>
</h2>
<ul className="space-y-5 sm:space-y-6 text-sm md:text-base text-slate-400 font-light">
<li className="flex items-start gap-3">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-500 border border-white/10 flex-shrink-0 mt-0.5">1</div>
<span className="de">Im Menü auf <span className="text-white font-medium">„Kopierhandel“</span> <span className="text-slate-600 mx-1">→</span> <span className="text-white font-medium">„Kopierer“</span></span>
<span className="en">In the menu, go to <span className="text-white font-medium">"Copytrading"</span> <span className="text-slate-600 mx-1">→</span> <span className="text-white font-medium">"Copier"</span></span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-500 border border-white/10 flex-shrink-0 mt-0.5">2</div>
<span className="de">Auf <span className="text-white font-medium">„Strategien entdecken“</span> klicken</span>
<span className="en">Click on <span className="text-white font-medium">"Discover Strategies"</span></span>
</li>
<li className="flex items-start gap-3 pt-1 sm:pt-2">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-500 border border-white/10 flex-shrink-0 mt-0.5">3</div>
<div className="w-full max-w-sm">
<div className="mb-3 sm:mb-4">
<span className="de">Suche nach einer dieser Strategien:</span><span className="en">Search for one of these strategies:</span>
</div>
<div className="flex flex-col gap-2 sm:gap-2.5">
<div className="flex items-center gap-2 sm:gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm md:text-base hover:bg-white/[0.04] transition-colors cursor-default">
<div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.6)] flex-shrink-0"></div>
<span className="font-medium tracking-wide">SENTIQ S1</span> <span className="text-slate-500 ml-auto text-[10px] sm:text-xs font-normal">(System 1)</span>
</div>
<div className="flex items-center gap-2 sm:gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm md:text-base hover:bg-white/[0.04] transition-colors cursor-default">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] flex-shrink-0"></div>
<span className="font-medium tracking-wide">SENTIQ S2</span> <span className="text-slate-500 ml-auto text-[10px] sm:text-xs font-normal">(System 2)</span>
</div>
<div className="flex items-center gap-2 sm:gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-xs sm:text-sm md:text-base hover:bg-white/[0.04] transition-colors cursor-default">
<div className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.6)] flex-shrink-0"></div>
<span className="font-medium tracking-wide">SENTIQ S3</span> <span className="text-slate-500 ml-auto text-[10px] sm:text-xs font-normal">(System 3)</span>
</div>
</div>
</div>
</li>
<li className="flex items-start gap-3 pt-1 sm:pt-2">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-500 border border-white/10 flex-shrink-0 mt-0.5">4</div>
<span className="de">Gewünschte Strategie auswählen</span>
<span className="en">Select desired strategy</span>
</li>
<li className="flex items-start gap-3">
<div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] sm:text-xs text-slate-500 border border-white/10 flex-shrink-0 mt-0.5">5</div>
<span className="de">Auf <span className="text-white font-medium">„Kopieren“</span> klicken</span>
<span className="en">Click on <span className="text-white font-medium">"Copy"</span></span>
</li>
</ul>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-indigo-500 border-[1.5px] border-indigo-200 ring-4 ring-indigo-500/20 shadow-[0_0_12px_rgba(99,102,241,0.6)]"></div>
<div className="space-y-6 sm:space-y-8">
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Kopiereinstellungen</span>
<span className="en">Copy Settings</span>
</h2>

<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl overflow-hidden relative group">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-50"></div>
<div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
<div className="flex items-start sm:items-center gap-2 sm:gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] mt-2 sm:mt-0 flex-shrink-0"></div>
<h3 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-tight">
<span className="de">System 1 – Einstellungen</span>
<span className="en">System 1 – Settings</span>
</h3>
</div>
<ul className="space-y-3 sm:space-y-4 text-sm md:text-base text-slate-300 font-light">
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Kopiermodus:</span> <span className="font-medium text-white">Äquivalent verwendete Marge</span></span>
<span className="en"><span className="text-slate-500">Copy Mode:</span> <span className="font-medium text-white">Equivalent Used Margin</span></span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Investition:</span> mindestens 500$</span>
<span className="en"><span className="text-slate-500">Investment:</span> minimum 500$</span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:calculator-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Verwendeter Margin Multiplikator:</span> 1.0</span>
<span className="en"><span className="text-slate-500">Used Margin Multiplier:</span> 1.0</span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:graph-down-linear"></iconify-icon>
<span className="leading-relaxed de"><span className="text-slate-500">Stop Loss:</span> individuell einstellbar <span className="text-slate-500 text-[10px] sm:text-xs md:text-sm ml-0 sm:ml-1 block mt-0.5 sm:mt-1">(Empfehlung: so hoch wie möglich)</span></span>
<span className="leading-relaxed en"><span className="text-slate-500">Stop Loss:</span> individually adjustable <span className="text-slate-500 text-[10px] sm:text-xs md:text-sm ml-0 sm:ml-1 block mt-0.5 sm:mt-1">(Recommendation: as high as possible)</span></span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:graph-up-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Take Profit:</span> deaktiviert</span>
<span className="en"><span className="text-slate-500">Take Profit:</span> deactivated</span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:round-transfer-horizontal-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Lot Round Up:</span> aktiviert</span>
<span className="en"><span className="text-slate-500">Lot Round Up:</span> enabled</span>
</li>
<li className="flex items-start gap-2 sm:gap-3">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:copy-linear"></iconify-icon>
<span className="de"><span className="text-slate-500">Eröffnete Trades kopieren:</span> aktiviert</span>
<span className="en"><span className="text-slate-500">Copy opened trades:</span> enabled</span>
</li>
</ul>
<div className="pt-5 sm:pt-6 border-t border-white/5 flex items-center gap-2 sm:gap-3">
<iconify-icon className="text-white text-lg sm:text-xl flex-shrink-0" icon="solar:mouse-circle-linear"></iconify-icon>
<p className="text-white font-medium text-sm md:text-base">
<span className="de">Danach auf Absenden klicken.</span>
<span className="en">Then click Submit.</span>
</p>
</div>
</div>
</div>

<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 rounded-2xl overflow-hidden relative mt-4 sm:mt-6 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50"></div>
<div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
<div className="flex items-start sm:items-center gap-2 sm:gap-3">
<div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.6)] mt-2 sm:mt-0 flex-shrink-0"></div>
<h3 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-tight leading-snug">
<span className="de">System 2 – WICHTIG: Andere Einstellung beim Kopiermodus</span>
<span className="en">System 2 – IMPORTANT: Different setting for Copy Mode</span>
</h3>
</div>
<div className="space-y-5 sm:space-y-6">
<p className="text-sm md:text-base text-slate-400 font-light">
<span className="de">Alle Einstellungen bleiben gleich außer dem Kopiermodus:</span>
<span className="en">All settings remain the same except the copy mode:</span>
</p>
<ul className="space-y-4 sm:space-y-5 text-sm md:text-base text-slate-300 font-light">
<li className="flex items-center gap-2 sm:gap-3 bg-blue-500/5 border border-blue-500/10 p-3 sm:p-4 rounded-xl">
<iconify-icon className="text-blue-400 flex-shrink-0 text-base sm:text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
<span className="de"><span className="text-blue-200">Kopiermodus:</span> <span className="font-medium text-white">Fixe Lot</span></span>
<span className="en"><span className="text-blue-200">Copy Mode:</span> <span className="font-medium text-white">Fixed Lot</span></span>
</li>
<li className="flex items-start gap-2 sm:gap-3 mt-4 sm:mt-6">
<iconify-icon className="text-slate-500 mt-0.5 flex-shrink-0 text-base sm:text-lg" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<div className="space-y-3 sm:space-y-4 w-full">
<span className="de text-white font-medium block">Lotgröße berechnen nach folgender Regel:</span>
<span className="en text-white font-medium block">Calculate lot size according to the following rule:</span>
<div className="bg-[#0A0A0A] border border-white/5 rounded-xl p-4 sm:p-5 space-y-2.5 sm:space-y-3 font-mono text-xs sm:text-sm">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-slate-400">Bis 1.000$</span>
<span className="text-white">0.01 Lot</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-slate-400">2.000$</span>
<span className="text-white">0.02 Lot</span>
</div>
<div className="flex items-center justify-between pb-1">
<span className="text-slate-400">3.000$</span>
<span className="text-white">0.03 Lot</span>
</div>
</div>
<p className="text-[10px] sm:text-xs md:text-sm text-slate-500 italic mt-2 leading-relaxed">
<span className="de">* Pro 1.000$ Kontogröße immer 0.01 Lot einstellen.</span>
<span className="en">* Always set 0.01 Lot per 1,000$ account size.</span>
</p>
</div>
</li>
</ul>
</div>
<div className="pt-5 sm:pt-6 border-t border-white/5 flex items-center gap-2 sm:gap-3">
<iconify-icon className="text-white text-lg sm:text-xl flex-shrink-0" icon="solar:mouse-circle-linear"></iconify-icon>
<p className="text-white font-medium text-sm md:text-base">
<span className="de">Danach auf Absenden klicken.</span>
<span className="en">Then click Submit.</span>
</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-6 sm:pl-10 md:pl-16 opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<div className="absolute -left-[5.5px] top-2 sm:top-3 w-2.5 h-2.5 rounded-full bg-[#0A0A0A] border-[1.5px] border-emerald-400 ring-4 ring-[#0A0A0A] shadow-[0_0_12px_rgba(52,211,153,0.4)]"></div>
<div className="space-y-4 sm:space-y-6">
<h2 className="text-lg sm:text-xl md:text-2xl font-medium text-white tracking-tight">
<span className="de">Abschluss</span>
<span className="en">Conclusion</span>
</h2>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-4 sm:p-6 md:p-8 space-y-5 sm:space-y-6">
<div className="flex flex-col sm:flex-row gap-4 sm:gap-5 sm:items-center">
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-emerald-400 text-xl sm:text-2xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-base sm:text-lg font-medium text-white tracking-tight mb-1">
<span className="de">Fertig eingerichtet</span>
<span className="en">Setup complete</span>
</h3>
<p className="text-sm md:text-base text-slate-400 font-light">
<span className="de">Dein Konto ist jetzt vollständig eingerichtet und mit dem gewünschten System verbunden.</span>
<span className="en">Your account is now fully set up and connected to the desired system.</span>
</p>
</div>
</div>
<div className="bg-amber-500/5 border border-amber-500/10 rounded-xl p-4 sm:p-5 md:p-6 flex gap-3 sm:gap-4 items-start">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-amber-500/80 text-lg sm:text-xl" icon="solar:danger-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm md:text-base font-medium text-amber-500/90 mb-1">
<span className="de">Wichtig:</span><span className="en">Important:</span>
</h4>
<p className="text-xs sm:text-sm md:text-base text-amber-200/70 font-light leading-relaxed">
<span className="de">Bitte alle Einstellungen exakt wie oben beschrieben übernehmen, damit die Strategie korrekt umgesetzt wird.</span>
<span className="en">Please apply all settings exactly as described above so that the strategy is implemented correctly.</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-16 sm:mt-24 border-t border-white/10 pt-8 text-center pb-8 flex items-center justify-center gap-2 text-slate-600 text-xs opacity-0 translate-y-6 transition-all duration-[700ms] ease-out scroll-reveal">
<iconify-icon className="text-sm" icon="solar:shield-keyhole-linear"></iconify-icon>
<p>Finance Strategy Guide © 2024</p>
</footer>
</div>


    </>
  );
}
