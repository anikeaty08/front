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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full bg-white border-b border-gray-100 py-6 px-8 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-[#0B2545] flex items-center justify-center rounded-sm">
<i className="text-[#8CC63F] w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#0B2545]">
          FinanseLogo
        </span>
</div>
<div className="hidden lg:flex space-x-8 items-center">
<a className="text-base font-semibold text-gray-600 hover:text-[#8CC63F] transition-colors" href="#">
          Dla firm
        </a>
<a className="text-base font-semibold text-gray-600 hover:text-[#8CC63F] transition-colors" href="#">
          Dla klientów indywidualnych
        </a>
<a className="text-base font-semibold text-gray-600 hover:text-[#8CC63F] transition-colors" href="#">
          Restrukturyzacja
        </a>
<a className="text-base font-semibold text-gray-600 hover:text-[#8CC63F] transition-colors" href="#">
          O nas
        </a>
<a className="text-base font-semibold text-[#0B2545] hover:text-[#8CC63F] transition-colors" href="#">
          Kontakt
        </a>
</div>
<button className="lg:hidden text-[#0B2545]">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<section className="relative w-full min-h-[700px] flex items-center bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp'}}>
<div className="absolute inset-0 bg-[#0B2545]/75"></div>
<div className="relative z-10 max-w-7xl mx-auto w-full px-8 py-20 flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-3/5 text-white">
<div className="inline-block bg-[#8CC63F] text-[#0B2545] text-xs font-semibold uppercase tracking-wider px-3 py-1 mb-6 rounded-sm">
            Eksperckie doradztwo
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-tight mb-8">
            ZBUDUJ BEZPIECZNĄ PRZYSZŁOŚĆ FINANSOWĄ
          </h1>
<p className="text-lg lg:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Niezależnie od tego, czy jesteś przedsiębiorcą szukającym
            optymalizacji, czy osobą prywatną potrzebującą wsparcia – mamy
            wiedzę, która pomoże Ci osiągnąć cel.
          </p>
<div className="flex items-center gap-6">
<div className="flex -space-x-4">
<img alt="Doradca" className="w-14 h-14 border-2 border-[#0B2545] rounded-full" src="https://i.postimg.cc/xCKBsJnh/Moje-zdjecie-copy.png"/>
</div>
<span className="text-base text-gray-300 font-semibold">
              Praktyk, nie teoretyk
            </span>
</div>
</div>

<div className="w-full lg:w-2/5">
<div className="bg-[#0B2545] p-10 shadow-2xl border border-white/10 rounded-sm">
<h2 className="text-3xl font-semibold tracking-tight text-[#8CC63F] uppercase mb-8 text-center border-b border-white/10 pb-6">
              Formularz Kontaktowy
            </h2>
<form className="space-y-6">
<div>
<label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Imię i nazwisko
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-white text-gray-900 text-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] rounded-sm transition-shadow" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  Telefon
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-white text-gray-900 text-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] rounded-sm transition-shadow" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                  E-mail
                </label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-white text-gray-900 text-lg pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#8CC63F] rounded-sm transition-shadow" type="email"/>
</div>
</div>
<div className="flex items-center gap-3">
<input className="w-5 h-5 accent-[#8CC63F] cursor-pointer rounded-sm" id="marketing-consent" type="checkbox"/>
<label className="text-xs font-semibold text-white uppercase tracking-wider cursor-pointer select-none" htmlFor="marketing-consent">
                  Zgoda na marketing
                </label>
</div>
<button className="w-full bg-[#8CC63F] hover:bg-[#7ab036] text-[#0B2545] font-semibold text-xl py-5 mt-4 transition-colors uppercase tracking-wide rounded-sm flex justify-center items-center gap-2" type="button">
<span>Wyślij wiadomość</span>
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-20 flex flex-col items-center">
<span className="text-[#8CC63F] font-semibold tracking-wider uppercase text-base mb-3">
            Zaufali nam
          </span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#0B2545] mb-6">
            Opinie Klientów
          </h2>
<div className="w-24 h-1 bg-[#8CC63F]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8CC63F]"></div>
<i className="w-10 h-10 text-gray-100 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex text-[#8CC63F] mb-8 relative z-10">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-600 mb-10 flex-grow leading-relaxed relative z-10">
              "Profesjonalne podejście i ogromna wiedza. Proces restrukturyzacji
              przebiegł gładko, a ja odzyskałem spokój finansowy."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg text-[#0B2545]">Michał K.</h4>
<span className="text-base text-gray-500">Właściciel Firmy</span>
</div>
</div>
</div>

<div className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0B2545]"></div>
<i className="w-10 h-10 text-gray-100 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex text-[#8CC63F] mb-8 relative z-10">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-600 mb-10 flex-grow leading-relaxed relative z-10">
              "Szybko, sprawnie i bez ukrytych kosztów. Doradztwo na najwyższym
              poziomie, wszystko jasno wytłumaczone."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg text-[#0B2545]">Anna M.</h4>
<span className="text-base text-gray-500">Klient Indywidualny</span>
</div>
</div>
</div>

<div className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#8CC63F]"></div>
<i className="w-10 h-10 text-gray-100 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex text-[#8CC63F] mb-8 relative z-10">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-600 mb-10 flex-grow leading-relaxed relative z-10">
              "Zrozumienie potrzeb klienta to ich mocna strona. Dziękuję za
              pomoc w trudnym momencie dla mojej spółki."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg text-[#0B2545]">Piotr R.</h4>
<span className="text-base text-gray-500">Przedsiębiorca</span>
</div>
</div>
</div>

<div className="bg-white p-10 border border-gray-100 shadow-sm rounded-sm flex flex-col h-full hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-[#0B2545]"></div>
<i className="w-10 h-10 text-gray-100 absolute top-8 right-8" data-lucide="quote" strokeWidth="1.5"></i>
<div className="flex text-[#8CC63F] mb-8 relative z-10">
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-6 h-6 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-600 mb-10 flex-grow leading-relaxed relative z-10">
              "Pełne zaangażowanie i indywidualne podejście do każdego
              szczegółu. Zdecydowanie polecam te usługi."
            </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="font-semibold text-lg text-[#0B2545]">
                  Karolina W.
                </h4>
<span className="text-base text-gray-500">Klient Indywidualny</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0B2545] text-white">
<div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-10">
<i className="w-10 h-10 text-[#8CC63F]" data-lucide="messages-square" strokeWidth="1.5"></i>
</div>
<h2 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-8">
          Masz pytania?
        </h2>
<p className="text-xl text-gray-300 mb-14 leading-relaxed max-w-2xl">
          Jesteśmy do Twojej dyspozycji. Skontaktuj się z nami telefonicznie lub
          napisz wiadomość, a chętnie rozwiejemy wszelkie wątpliwości i
          zaplanujemy spotkanie.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 w-full sm:w-auto">
<a className="flex items-center justify-center gap-4 bg-white/5 hover:bg-white/10 border border-white/20 transition-all px-10 py-5 rounded-sm w-full sm:w-auto group" href="#">
<i className="text-[#8CC63F] group-hover:scale-110 transition-transform" data-lucide="phone-call" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight text-white">
              +48 123 456 789
            </span>
</a>
<a className="flex items-center justify-center gap-4 bg-[#8CC63F] hover:bg-[#7ab036] text-[#0B2545] transition-all px-10 py-5 rounded-sm w-full sm:w-auto" href="#">
<i data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-xl font-semibold tracking-tight">
              napisz do nas
            </span>
</a>
</div>
</div>
</section>

<footer className="bg-[#07172b] py-8 text-center border-t border-white/10">
<p className="text-base text-gray-500 font-semibold tracking-wide">
        © 2024 FinanseLogo. Wszelkie prawa zastrzeżone.
      </p>
</footer>


    </>
  );
}
