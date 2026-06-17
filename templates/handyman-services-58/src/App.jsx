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



// Handle Form Submission
function handleForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" stroke-width="1.5"></iconify-icon> Anfrage gesendet!';
  btn.classList.remove('bg-emerald-500', 'text-slate-950', 'hover:bg-emerald-400');
  btn.classList.add('bg-cyan-500', 'text-slate-950');
}

// Scroll animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-8');
      entry.target.classList.add('opacity-100', 'translate-y-0');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => {
    el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
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
      

<div className="bg-gradient-to-r from-red-900 via-red-700 to-red-900 text-white text-xs md:text-sm font-semibold uppercase tracking-widest py-2.5 text-center animate-subtle-pulse border-b border-red-500/20">
<span className="mr-2">🚨</span> Wasserrohrbruch? Heizungsausfall? 24h Notdienst – 
    <a className="ml-1 md:ml-3 underline decoration-white/40 hover:decoration-white transition-colors" href="tel:017381886586">01738 188 6586</a>
</div>

<nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5 h-16 md:h-20 flex items-center justify-between px-6 md:px-12 transition-all">
<a className="flex items-center gap-2 group decoration-none" href="#">
<div className="font-extrabold tracking-tighter text-xl md:text-2xl text-white uppercase leading-none">
        KFB<span className="text-cyan-500 transition-colors group-hover:text-emerald-400">.</span>
</div>
</a>
<ul className="hidden lg:flex items-center gap-8 list-none">
<li><a className="text-xs font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors" href="#leistungen">Leistungen</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors" href="#ablauf">Ablauf</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors" href="#team">Team</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors" href="#bewertungen">Bewertungen</a></li>
<li><a className="text-xs font-medium text-slate-400 hover:text-cyan-400 uppercase tracking-widest transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
<a className="hidden md:flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-5 py-2 rounded-lg font-semibold text-xs tracking-wide hover:bg-emerald-500 hover:text-slate-950 transition-all glow-emerald" href="tel:017381886586">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
      Jetzt anrufen
    </a>
</nav>

<section className="relative min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="flex flex-col justify-center px-6 py-16 lg:px-20 lg:py-24 relative z-10">
<div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest w-fit mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        24h Notdienst · 7 Tage die Woche
      </div>
<h1 className="font-condensed font-extrabold text-5xl md:text-7xl tracking-tighter uppercase leading-[0.95] text-white mb-6">
        Ihr <span className="text-cyan-400">Klempner</span><br/>
        Service in<br/>
<span className="text-emerald-400">Berlin</span>
</h1>
<p className="text-sm md:text-base text-slate-400 mb-10 max-w-md leading-relaxed">
        Sanitär, Heizung &amp; Rohrreinigung – meistens innerhalb von <span className="text-slate-200 font-medium">60 Minuten</span> bei Ihnen vor Ort. Faire Preise, keine versteckten Kosten.
      </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="flex items-center justify-center gap-3 bg-emerald-500 text-slate-950 font-condensed font-bold text-lg md:text-xl tracking-tight uppercase px-8 py-4 rounded-xl hover:bg-emerald-400 transition-all glow-emerald" href="tel:017381886586">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
          01738 188 6586
        </a>
<a className="flex items-center justify-center gap-3 bg-slate-800 border border-slate-700 text-white font-condensed font-bold text-lg md:text-xl tracking-tight uppercase px-8 py-4 rounded-xl hover:bg-slate-700 transition-all" href="#kontakt">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
          Kostenlos Anfragen
        </a>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-400"><iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> Berliner Fachbetrieb</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400"><iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> Google 5.0</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400"><iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> HWK Zertifiziert</div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400"><iconify-icon className="text-emerald-500 text-sm" icon="solar:check-circle-linear"></iconify-icon> Festpreisgarantie</div>
</div>
</div>
<div className="hidden lg:block relative overflow-hidden bg-slate-900 border-l border-white/5">
<img alt="Berlin Mitte Klempner Logo" className="h-10 opacity-70 mb-5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
        Die Klempner Fachgemeinde Berlin ist Ihr regionaler Experte für Sanitär, Heizung und Rohrreinigung mit 24h Notdienst.
      </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-condensed font-bold text-cyan-400 uppercase tracking-widest text-sm">Leistungen</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/sanitaer/">Sanitär Service</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/heizung/">Heizung Reparatur</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/rohrreinigung/">Rohrreinigung</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/notdienst/">24h Notdienst</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/heizungswartung/">Heizungswartung</a></li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-condensed font-bold text-cyan-400 uppercase tracking-widest text-sm">Bezirke</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/berlin-mitte/">Mitte &amp; Prenzlberg</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/berlin-kreuzberg/">Kreuzberg &amp; Friedrichshain</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/berlin-charlottenburg/">Charlottenburg &amp; Wilmersdorf</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/berlin-neukoelln/">Neukölln &amp; Tempelhof</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/berlin-spandau/">Spandau &amp; Reinickendorf</a></li>
</ul>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-condensed font-bold text-cyan-400 uppercase tracking-widest text-sm">Rechtliches</h4>
<ul className="flex flex-col gap-2.5">
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/impressum/">Impressum</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/datenschutz/">Datenschutz</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/agb/">AGB</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition-colors" href="/sitemap/">Sitemap</a></li>
</ul>
</div>

<div className="border-t border-white/5 py-6 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2026 Klempner Fachgemeinde Berlin · Alle Rechte vorbehalten</p>
<div className="flex gap-4">
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="/impressum/">Impressum</a>
<a className="text-xs text-slate-500 hover:text-slate-300 transition-colors" href="/datenschutz/">Datenschutz</a>
</div>
</div>


</section>
    </>
  );
}
