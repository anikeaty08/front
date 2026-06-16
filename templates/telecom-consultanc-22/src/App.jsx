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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', function() {
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
      });
    


      (function() {
        var banner = document.getElementById('cookie-consent-banner');
        if (!banner) return;
        try {
          if (!localStorage.getItem('cookieConsent')) {
            banner.style.display = 'block';
          }
        } catch(e) {
          banner.style.display = 'block';
        }
        function hide(val) {
          try { localStorage.setItem('cookieConsent', val); } catch(e) {}
          banner.style.display = 'none';
        }
        var acceptBtn = document.getElementById('cookie-accept');
        var rejectBtn = document.getElementById('cookie-reject');
        if (acceptBtn) acceptBtn.addEventListener('click', function() { hide('all'); });
        if (rejectBtn) rejectBtn.addEventListener('click', function() { hide('essential'); });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-medium tracking-tight text-white text-2xl flex items-center" href="#">
          EkspertMobilny
          <span className="text-amber-500">.pl</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#poradniki">
            Poradniki
          </a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#oszczednosci">
            Oszczędności
          </a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#o-projekcie">
            O projekcie
          </a>
<a className="text-base text-slate-300 hover:text-white transition-colors" href="#kontakt">
            Kontakt
          </a>
</nav>
<a className="hidden md:inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 text-base font-medium px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]" href="#kontakt">
          Bezpłatna porada
        </a>
<button aria-label="Menu" className="md:hidden text-white">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-28 pb-24 bg-slate-900 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl reveal visible">
<div className="inline-flex text-sm text-amber-500 bg-white/5 border-white/10 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 gap-x-2 gap-y-2 items-center">
            Praktyczny przewodnik
          </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-5xl font-light text-white tracking-tight font-display mb-8">
            Telefony. Finanse. Prawo.
            <br/>
<span className="text-slate-300">
              Mądre wybory dla każdego budżetu.
            </span>
<br/>
</h1>
<p className="leading-relaxed md:text-2xl text-xl text-slate-300 font-extralight max-w-xl mb-12">
            Zrozum swoje prawa w cyfrowym świecie. Oferujemy prosty język i
            pomoc w rozwiązywaniu wyzwań związanych z telefonami i nie tylko.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-14">
<a className="inline-flex items-center justify-center bg-amber-500 hover:bg-amber-400 text-slate-950 text-lg font-medium px-8 py-4 rounded-full transition-all shadow-lg" href="#kontakt">
              Bezpłatna porada
            </a>
<a className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white text-lg px-8 py-4 rounded-full transition-all" href="#poradniki">
              Przeglądaj Poradniki
            </a>
</div>
<div className="inline-flex flex-wrap bg-slate-900/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl items-center gap-5">
<div className="flex -space-x-3">
<img alt="" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-12 h-12 rounded-full bg-amber-500 border-2 border-slate-900 flex items-center justify-center text-slate-950 font-medium text-sm">
                300+
              </div>
</div>
<div className="">
<p className="text-base text-white">Pomogliśmy już 300+ osobom.</p>
<div className="flex items-center gap-1 text-amber-400 mt-1">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<span className="text-slate-300 text-sm ml-2">Ocena 4.9/5</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 py-12 border-y border-white/5" id="oszczednosci">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-white/5">
<div className="flex flex-col items-center text-center reveal visible">
<iconify-icon className="text-3xl text-amber-500 mb-4" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-3xl font-display font-light text-white tracking-tight">
              30%
            </span>
<span className="text-sm text-slate-400 mt-2 uppercase tracking-widest">
              Średnia Oszczędność
            </span>
</div>
<div className="flex flex-col items-center text-center reveal reveal-d1 visible">
<iconify-icon className="text-3xl text-amber-500 mb-4" icon="solar:medal-ribbons-star-linear"></iconify-icon>
<span className="text-3xl font-display font-light text-white tracking-tight">
              3 lata
            </span>
<span className="text-sm text-slate-400 mt-2 uppercase tracking-widest">
              Doświadczenia
            </span>
</div>
<div className="flex flex-col items-center text-center reveal reveal-d2 visible">
<iconify-icon className="text-3xl text-amber-500 mb-4" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-3xl font-display font-light text-white tracking-tight">
              &lt; 24h
            </span>
<span className="text-sm text-slate-400 mt-2 uppercase tracking-widest">
              Czas Odpowiedzi
            </span>
</div>
<div className="flex flex-col items-center text-center reveal reveal-d3 visible">
<iconify-icon className="text-3xl text-amber-500 mb-4" icon="solar:shield-linear"></iconify-icon>
<span className="text-3xl font-display font-light text-white tracking-tight">
              100%
            </span>
<span className="text-sm text-slate-400 mt-2 uppercase tracking-widest">
              Niezależność
            </span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:pt-12 md:pb-12 bg-slate-950 pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
<span className="text-amber-500 text-sm tracking-widest uppercase mb-4 block">
            Nawigacja Ekspercka
          </span>
<h2 className="md:text-5xl text-4xl font-light text-white tracking-tight font-display mb-4">
            Oszczędzaj pieniądze i podejmij świadomą decyzje bez stresu.
          </h2>
<p className="text-lg text-slate-400">
            Wybierz kierunek, w którym potrzebujesz wsparcia eksperta.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative">
<div className="relative flex flex-col justify-between border border-amber-500/30 bg-slate-900/40 backdrop-blur-sm overflow-hidden shadow-lg token-container min-h-full cursor-pointer" style={{borderRadius: '0'}}>
<div className="group relative block p-8 text-center border-b border-amber-500/20 hover:bg-slate-900/40 transition-all duration-300 cursor-pointer">
<div className="absolute inset-0 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(245,158,11,0.15)]"></div>
<svg aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" fill="none" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="80" stroke="#FFB800" strokeWidth="0.5"></circle>
<path d="M100 30 L108 100 L100 110 L92 100 Z" fill="#FFB800"></path>
<text fill="#FFB800" fontFamily="serif" fontSize="10" text-anchor="middle" x="100" y="18">
                  N
                </text>
</svg>
<div className="relative z-10" onclick="window.location.href='/tanie-telefony'" role="button">
<span className="inline-block text-[9px] tracking-[0.3em] text-amber-500/60 uppercase mb-2">
                  Kierunek · Inteligentne Zakupy
                </span>
<div className="w-12 h-12 mx-auto bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-105" style={{borderRadius: '0'}}>
<iconify-icon className="text-xl text-amber-500" icon="lucide:smartphone"></iconify-icon>
</div>
<h3 className="text-lg font-display font-light text-white tracking-tight mb-2">
                  Najlepsze telefony do 1000zł
                </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm mx-auto">
                  Modele, które w 2026 roku oferują świetny stosunek jakości do
                  ceny.
                </p>
<span className="inline-flex items-center gap-2 text-xs text-amber-500">
                  Sprawdź rankingi
                  <iconify-icon className="text-xs group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
<div className="group relative block p-8 text-center hover:bg-slate-900/40 transition-all duration-300 flex-grow flex flex-col justify-center cursor-pointer">
<div className="absolute inset-0 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_40px_rgba(245,158,11,0.15)]"></div>
<div className="relative z-10" onclick="window.location.href='/flagowce'" role="button">
<span className="inline-block text-[9px] tracking-[0.3em] text-amber-500/60 uppercase mb-2">
                  Kierunek · Architektura Wydajności
                </span>
<div className="w-12 h-12 mx-auto bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-105" style={{borderRadius: '0'}}>
<iconify-icon className="text-xl text-amber-500" icon="lucide:cpu"></iconify-icon>
</div>
<h3 className="text-lg font-display font-light text-white tracking-tight mb-2">
                  Telefony dla zawodowców
                </h3>
<p className="text-xs text-slate-400 leading-relaxed mb-4 max-w-sm mx-auto">
                  Twarda specyfikacja i optymalizacja hardware'owa dla firm.
                  Lokalne NPU, ochrona danych pod NDA i bezkompromisowa
                  wydajność.
                </p>
<span className="inline-flex items-center gap-2 text-xs text-amber-500">
                  Zobacz raport premium
                  <iconify-icon className="text-xs group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
<div className="group relative block p-10 md:p-12 text-center border border-amber-500/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 hover:border-amber-500/70 transition-all reveal reveal-d1 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] cursor-pointer visible" style={{borderRadius: '0'}}>
<div className="absolute inset-0 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_60px_rgba(245,158,11,0.25)]"></div>
<svg aria-hidden="true" className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 w-[313px] h-[582px]" fill="none" strokeWidth="2" style={{width: '313px', height: '582px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="100" cy="100" r="80" stroke="#FFB800" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" r="60" stroke="#FFB800" strokeWidth="0.5"></circle>
<path d="M170 100 L100 108 L90 100 L100 92 Z" fill="#FFB800"></path>
<path d="M30 100 L100 92 L110 100 L100 108 Z" fill="#FFB800" fillOpacity="0.4"></path>
<line stroke="#FFB800" strokeWidth="0.5" x1="160" x2="180" y1="100" y2="100"></line>
<text fill="#FFB800" fontFamily="serif" fontSize="10" text-anchor="middle" x="188" y="104">
                E
              </text>
</svg>
<div className="relative z-10 text-center w-full h-full select-none group" onclick="window.location.href='/rachunki'" role="button">
<span className="inline-block text-[10px] tracking-[0.3em] text-amber-500/70 uppercase mb-4">
                Kierunek · Kontrola Kosztów
              </span>
<div className="w-16 h-16 mx-auto bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 transition-transform duration-700 group-hover:rotate-[20deg]" style={{borderRadius: '0'}}>
<iconify-icon className="text-3xl text-amber-500" icon="lucide:receipt"></iconify-icon>
</div>
<h3 className="text-xl font-display font-light text-white tracking-tight mb-3">
                Optymalizacja Twoich rachunków
              </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                Płacisz za gigabajty, których nie zużywasz? Dowiedz się, jak
                realnie obniżyć opłaty, korzystać z elastycznych ofert i płacić
                tylko za to, czego naprawdę potrzebujesz.
              </p>
<div className="inline-flex items-center gap-2 text-sm text-amber-500 font-medium">
                Zacznij oszczędzać
                <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative block p-10 md:p-12 text-center border border-amber-500/30 bg-slate-900/40 backdrop-blur-sm hover:bg-slate-900/60 hover:border-amber-500/70 transition-all reveal reveal-d2 overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(245,158,11,0.35)] cursor-pointer visible" style={{borderRadius: '0'}}>
<div className="absolute inset-0 pointer-events-none transition-all duration-500 group-hover:shadow-[inset_0_0_60px_rgba(245,158,11,0.25)]"></div>
<svg aria-hidden="true" className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.12] transition-opacity duration-500 w-[313px] h-[582px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '313px', height: '582px', color: 'rgb(15, 23, 42)'}} viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" r="80" stroke="#FFB800" strokeWidth="0.5"></circle>
<circle cx="100" cy="100" r="60" stroke="#FFB800" strokeWidth="0.5"></circle>
<path d="M30 100 L100 92 L110 100 L100 108 Z" fill="#FFB800"></path>
<path d="M170 100 L100 108 L90 100 L100 92 Z" fill="#FFB800" fillOpacity="0.4"></path>
<line stroke="#FFB800" strokeWidth="0.5" x1="20" x2="40" y1="100" y2="100"></line>
<text fill="#FFB800" fontFamily="serif" fontSize="10" text-anchor="middle" x="12" y="104">
                W
              </text>
</svg>
<div className="relative z-10" onclick="window.location.href='/scamy'" role="button">
<span className="inline-block text-[10px] tracking-[0.3em] text-amber-500/70 uppercase mb-4">
                Kierunek · Cyfrowa Tarcza
              </span>
<div className="w-16 h-16 mx-auto bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6 transition-transform duration-700 group-hover:rotate-[20deg]" style={{borderRadius: '0'}}>
<iconify-icon className="text-3xl text-amber-500" icon="lucide:shield-check"></iconify-icon>
</div>
<h3 className="text-xl font-display font-light text-white tracking-tight mb-3">
                Bezpieczeństwo i zagrożenia
              </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                SMS-y od „kuriera", fałszywe telefony z banku i próby wyłudzeń.
                Naucz się rozpoznawać techniki oszustów i dowiedz się, jak
                skutecznie chronić swoje pieniądze.
              </p>
<span className="inline-flex items-center gap-2 text-sm text-amber-500">
                Zadbaj o ochronę
                <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl"></div>
</div>
</section>
<section className="md:pt-19 md:pb-19 bg-slate-50 pt-12 pb-12" id="poradniki">
<div className="max-w-none mx-5 space-x-0">
<div className="text-center max-w-2xl mx-auto mb-16 reveal visible">
<h2 className="text-3xl font-light text-slate-900 tracking-tight font-display my-5 md:text-4xl">
            Dzięki naszemu wsparciu z łatwością podejmiesz lepsze decyzje.
          </h2>
<p className="text-lg text-slate-800">
            Wybierz kategorię, aby znaleźć praktyczne porady i gotowe
            rozwiązania.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg" href="/senior">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Technologia dla seniora
            </h3>
<p className="text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
              Słabo słychać wnuki? Zbyt małe litery na ekranie? Pomagam dobrać
              sprzęt i usługi bez przepłacania za zbędne dodatki.
            </p>
<span className="flex items-center gap-2 cursor-pointer text-base text-amber-500" onclick="window.location.href='/senior'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal reveal-d1 bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg visible" href="/rachunki">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Optymalizacja rachunków
            </h3>
<p className="text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
              Znajdź idealny plan telekomunikacyjny już teraz. Analizujemy typy
              umów i pokazujemy jak obniżyć koszty abonamentu.
            </p>
<span className="flex items-center gap-2 cursor-pointer text-base text-amber-500" onclick="window.location.href='/rachunki'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal reveal-d2 bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg visible" href="/scamy">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Bezpieczeństwo i scamy
            </h3>
<p className="text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">Dostajesz dziwne SMS-y o niedopłacie za paczkę? Uczymy, jak rozpoznawać oszustwa i chronić swoje dane przed wyłudzeniem.</p>
<span className="flex items-center gap-2 text-base text-amber-500" onclick="window.location.href='/scamy'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg visible" href="/roaming">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:plain-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Roaming i podróże
            </h3>
<p className="text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
              Wakacje za granicą bez stresu o rachunek na kilka tysięcy złotych.
              Jak ustawić telefon i co to jest karta eSIM.
            </p>
<span className="flex items-center gap-2 text-base text-amber-500" onclick="window.location.href='/roaming'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal reveal-d1 bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg visible" href="/firmy">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Rozwiązania dla firm
            </h3>
<p className="leading-relaxed group-hover:text-slate-300 transition-colors text-base text-slate-400 mb-8">Architektura wydajności: Optymalizacja telekomunikacyjna dla biznesu.</p>
<span className="flex items-center gap-2 text-base text-amber-500" onclick="window.location.href='/firmy'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="group block hover:shadow-xl transition-all hover:-translate-y-1 reveal reveal-d2 bg-slate-900 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-lg visible" href="/przenoszenie">
<div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20">
<iconify-icon className="text-2xl text-amber-500" icon="solar:refresh-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-display font-light text-white tracking-tight mb-3">
              Przeniesienie numeru
            </h3>
<p className="text-base text-slate-400 leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">Jak zmienić operatora zachowując swój stary numer? Krok po kroku wyjaśniamy procedury i pomagamy uniknąć kar umownych.</p>
<span className="flex items-center gap-2 text-base text-amber-500" onclick="window.location.href='/przenoszenie'" role="button">
              Czytaj więcej
              <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="border-y bg-slate-900 border-white/5 pt-24 pb-24" id="o-projekcie">
<div className="max-w-6xl mx-auto px-6">
<div className="reveal max-w-3xl mb-16 visible">
<span className="text-[11px] tracking-[0.4em] uppercase mb-6 block" style={{color: '#E5A93C'}}>
            Misja i Niezależność
          </span>
<h1 className="text-4xl md:text-6xl font-light tracking-tight font-display text-white leading-[1.1] mb-10" style={{letterSpacing: '-0.01em'}}>
            Upraszczamy skomplikowane zagadnienia
          </h1>
<blockquote className="leading-relaxed md:text-xl text-lg italic text-slate-200 font-display max-w-3xl border-l px-3" style={{borderLeftWidth: '1px', borderColor: 'rgb(229, 169, 60)'}}>
            „Najlepsza technologia to ta, która działa sprawnie i odpowiada
            stylowi życia.”
          </blockquote>
</div>
<div className="grid md:grid-cols-12 gap-10 mb-20 reveal reveal-d1 visible">
<div className="md:col-span-4">
<span className="text-[10px] tracking-[0.4em] uppercase text-slate-500">
              01 — Manifest
            </span>
<div className="mt-4 h-px w-16" style={{backgroundColor: '#E5A93C'}}></div>
</div>
<div className="md:col-span-8">
<p className="text-base md:text-lg text-slate-300 leading-relaxed font-light">
              Ekspert Mobilny to niezależny blog doradczo-analityczny. Portal
              powstał jako wsparcie w codziennych wyzwaniach technologicznych
              oraz ułatwianie procesów związanych z branżą technologiczną.
              Dzięki połączeniu wieloletniego doświadczenia rynkowego z
              zaawansowanymi systemami analizy danych, wszelkie wątpliwości i
              niejasności są skutecznie przekuwane w merytoryczne argumenty,
              które przynoszą realne rezultaty.
            </p>
</div>
</div>
<div className="grid md:grid-cols-12 gap-10 mb-10">
<div className="md:col-span-4">
<span className="text-[10px] tracking-[0.4em] uppercase text-slate-500">
              02 — Filary
            </span>
<div className="mt-4 h-px w-16" style={{backgroundColor: '#E5A93C'}}></div>
</div>
<div className="md:col-span-8">
<h2 className="text-2xl md:text-3xl font-display font-light text-white tracking-tight">
              Trzy zasady, które definiują portal.
            </h2>
</div>
</div>
<div className="grid md:grid-cols-3 gap-px bg-white/5 border border-white/5" style={{borderRadius: '0'}}>
<div className="bg-slate-900 p-10 reveal visible" style={{borderRadius: '0'}}>
<div className="w-12 h-12 border flex items-center justify-center mb-8" style={{borderColor: '#E5A93C', borderRadius: '0'}}>
<iconify-icon className="text-2xl" icon="lucide:shield-check" style={{color: '#E5A93C'}}></iconify-icon>
</div>
<span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 block mb-3">
              Filar I
            </span>
<h3 className="text-xl font-display font-light text-white tracking-tight mb-4">
              Obiektywne wsparcie
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Niezależnie od tego, czy celem jest optymalizacja kosztów, czy
              wsparcie w procesach wyboru urządzenia, każda sprawa jest
              traktowana indywidualnie.
            </p>
</div>
<div className="bg-slate-900 p-10 reveal reveal-d1 visible" style={{borderRadius: '0'}}>
<div className="w-12 h-12 border flex items-center justify-center mb-8" style={{borderColor: '#E5A93C', borderRadius: '0'}}>
<iconify-icon className="text-2xl" icon="lucide:eye" style={{color: '#E5A93C'}}></iconify-icon>
</div>
<span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 block mb-3">
              Filar II
            </span>
<h3 className="text-xl font-display font-light text-white tracking-tight mb-4">
              Pełna przejrzystość
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Tzw. „mały druk” w umowach, zawiłe regulaminy operatorów oraz
              skomplikowane procedury są dekonstruowane i tłumaczone na prosty,
              zrozumiały język.
            </p>
</div>
<div className="bg-slate-900 p-10 reveal reveal-d2 visible" style={{borderRadius: '0'}}>
<div className="w-12 h-12 border flex items-center justify-center mb-8" style={{borderColor: '#E5A93C', borderRadius: '0'}}>
<iconify-icon className="text-2xl" icon="lucide:line-chart" style={{color: '#E5A93C'}}></iconify-icon>
</div>
<span className="text-[10px] tracking-[0.3em] uppercase text-slate-500 block mb-3">
              Filar III
            </span>
<h3 className="text-xl font-display font-light text-white tracking-tight mb-4">
              Jakość oparta na danych
            </h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
              Wszelkie rekomendacje sprzętowe i analizy opierają się wyłącznie
              na twardych parametrach technicznych. Pełna niezależność
              gwarantuje ochronę interesu czytelnika.
            </p>
</div>
</div>
<div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 reveal visible">
<p className="text-sm text-slate-400 max-w-2xl font-light leading-relaxed">
            Ekspert Mobilny — niezależna analiza, surowa metodyka, mierzalne
            rezultaty.
          </p>
<span className="text-[10px] tracking-[0.4em] uppercase" style={{color: '#E5A93C'}}>
            Expert Mobilny · 2026
          </span>
</div>
</div>
</section>
<section className="bg-slate-50">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="relative overflow-hidden bg-slate-900 rounded-3xl shadow-2xl border border-white/5 reveal visible">
<div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-32 -right-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</section>


<section className="bg-slate-50 pt-1 pb-1">
<div className="max-w-7xl mx-auto px-6">
<div className="relative overflow-hidden bg-slate-900 rounded-3xl shadow-2xl border border-white/5 reveal visible">
<div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
</div>
</div>
</section>

<section className="pt-12 pb-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl flex flex-col md:flex-row gap-10 items-center reveal visible">
<div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="md:w-1/3 relative z-10 text-center md:text-left">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 mb-6">
<iconify-icon className="text-3xl text-amber-500" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<h3 className="font-display font-light text-3xl md:text-4xl text-white tracking-tight mb-4">
              Bądź na bieżąco
            </h3>
<p className="text-base text-slate-400">
              Otrzymuj krótkie porady, alerty o nowych oszustwach i najświeższe
              ciekawostki ze świata finansów.
            </p>
</div>
<div className="md:w-2/3 w-full relative z-10">
<div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
<div className="flex gap-4 mb-5 gap-x-4 gap-y-4 items-center">
<div className="flex flex-shrink-0 text-slate-900 bg-amber-500 w-12 h-12 rounded-full mx-5 items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div className="">
<div className="text-base text-white">Ważny komunikat</div>
<div className="text-sm text-slate-400 mt-0.5">
                    Opublikowano przez: EkspertMobilny.pl
                  </div>
</div>
</div>
<p className="leading-relaxed md:text-xl text-lg text-slate-200 text-center mr-1">
                Uważajcie na nowe SMS-y podszywające się pod firmę kurierską!
                Złota zasada: nigdy nie klikaj w linki w wiadomościach
                wzywających do dopłaty drobnych kwot (np. 1,50 zł). To próba
                przejęcia dostępu do konta bankowego.
              </p>
<div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-700/50">
<a className="flex-1 inline-flex items-center justify-center gap-2 hover:bg-blue-500/20 transition-colors sm:flex-none text-base text-yellow-300 bg-yellow-100/10 border-yellow-300/20 border rounded-xl pt-3 pr-6 pb-3 pl-6" href="https://www.facebook.com/profile.php?id=61589884424584">
                  Subskrybuj
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-800 relative overflow-hidden" id="kontakt">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-10 bg-gradient-to-t from-amber-500 to-transparent blur-3xl pointer-events-none"></div>
<div className="z-10 reveal text-center max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6 relative visible">
<h2 className="md:text-5xl leading-tight text-3xl font-light text-white tracking-tight font-display mb-10">
          Masz nietypowy problem z telefonem ?
        </h2>
<h2 className="leading-tight md:text-lg text-xl font-light text-white tracking-tight font-display">Rozumiemy, że poruszanie się po świecie usług telekomunikacyjnych może być trudne. </h2><h2 className="leading-tight md:text-lg text-xl font-light text-white tracking-tight font-display">W Ekspert Mobilny upraszczamy ten proces oferując jasne rozwiązania. Nasze bezpłatne konsultacje za pośrednictwem Messengera pomogą Ci dokonać świadomego wyboru, który może przełożyć się na znaczne oszczędności w miesięcznych rachunkach.</h2>
<a className="inline-flex items-center justify-center gap-3 hover:bg-amber-400 transition-all hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] hover:-translate-y-1 text-xl text-slate-950 bg-amber-500 rounded-full my-5 pt-5 pr-10 pb-5 pl-10 shadow-[0_0_30px_rgba(245,158,11,0.15)]" href="https://www.facebook.com/profile.php?id=61589884424584">
          Napisz - postaramy się pomóc
        </a>
<p className="text-base text-slate-500 mt-8">
          Odpowiadam zazwyczaj w ciągu 24 godzin.
        </p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<span className="font-medium tracking-tight text-slate-400 text-2xl">
              EM
              <span className="text-amber-600">.</span>
</span>
<span className="text-slate-500 text-sm">
              © 2026 EkspertMobilny.pl. Wszelkie prawa zastrzeżone.
            </span>
</div>
<div className="flex items-center gap-8 text-sm text-slate-500">
<a className="hover:text-amber-500 transition-colors" href="/polityka">
              Polityka Prywatności
            </a>
<a className="hover:text-amber-500 transition-colors" href="/regulamin">
              Regulamin
            </a>
<a className="hover:text-amber-500 transition-colors" href="#">
              Zastrzeżenia
            </a>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-500 hover:bg-white/10 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:user-circle-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


<div aria-label="Informacja o plikach cookies" aria-live="polite" className="fixed left-0 right-0 z-[99999] bg-slate-950/98 backdrop-blur-xl border-white/10 p-4 md:py-4 md:px-6 top-0 border-b shadow-[0_10px_40px_rgba(0,0,0,0.5)]" id="cookie-consent-banner" role="dialog" style={{display: 'none'}}>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-4">
<p className="text-[13px] md:text-sm text-slate-300 leading-relaxed flex-1 m-0">
          Na stronie Ekspert Mobilny używamy cookies do celów statystycznych i
          marketingowych. Szczegóły znajdziesz w
          <a className="underline text-white font-medium hover:text-amber-500 transition-colors" href="https://ekspertmobilny.pl/polityka">
            Polityce Prywatności
          </a>
          .
        </p>
<div className="grid grid-cols-2 md:flex md:flex-row gap-3 w-full md:w-auto flex-shrink-0">
<button className="w-full md:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-sm font-medium px-5 py-3 md:py-2.5 rounded-xl md:rounded-lg transition-all" id="cookie-reject" type="button">
            Odrzuć
          </button>
<button className="w-full md:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-200 text-slate-950 text-sm font-medium px-5 py-3 md:py-2.5 rounded-xl md:rounded-lg transition-all shadow-lg shadow-white/10" id="cookie-accept" type="button">
            Akceptuję
          </button>
</div>
</div>
</div>


    </>
  );
}
