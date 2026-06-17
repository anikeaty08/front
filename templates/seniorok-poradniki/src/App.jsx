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
      
<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#EAF2EC] opacity-60 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#EFE2C9] opacity-70 blur-3xl"></div>
</div>
<header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
<img alt="SeniorOK System" className="h-12 w-auto object-contain opacity-100" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c16e5108-1549-4f3e-bbe3-795c68d56ebc_320w.png"/>
<a className="hidden rounded-full border border-[#D9D0C1] bg-white/45 px-4 py-2 text-sm font-medium text-[#3A4B3D] shadow-sm transition hover:border-[#5F8F6B] hover:bg-white sm:inline-flex" href="https://senioroksystem.pl">
        Wróć do strony głównej
      </a>
</header>
<main className="">
<section className="grid sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:pb-24 w-full max-w-6xl mr-auto ml-auto pt-8 pr-5 pb-16 pl-5 gap-x-12 gap-y-12 items-center">
<div className="">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9D0C1] bg-white/45 px-4 py-2 text-xs font-medium text-[#526252] shadow-sm backdrop-blur">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#5F8F6B', strokeWidth: '1.5'}} width="18"></iconify-icon>
            Bez kamer, bez podglądania, bez naruszania prywatności
          </div>
<h1 className="max-w-3xl text-4xl font-medium tracking-tight text-[#1F2C22] sm:text-5xl lg:text-6xl" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
            Darmowe poradniki dla rodzin seniorów
          </h1>
<p className="mt-5 max-w-2xl text-base leading-8 text-[#536153] sm:text-lg">
            Nie każda rodzina od razu wie, od czego zacząć. Przygotowaliśmy
            praktyczne poradniki, które pomagają spokojnie ocenić sytuację,
            porozmawiać z rodzicem i wybrać najlepszą formę wsparcia.
          </p>
<p className="mt-5 max-w-xl text-sm leading-7 text-[#667364]">
            Dla dorosłych dzieci, które martwią się o bezpieczeństwo mamy lub
            taty.
          </p>
<div className="mt-7 grid max-w-2xl gap-3 sm:grid-cols-3">
<div className="flex items-center gap-2 rounded-2xl border border-[#DED4C4] bg-white/45 px-4 py-3 text-sm font-medium text-[#3A4B3D] shadow-sm">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#5F8F6B', strokeWidth: '1.5'}} width="18"></iconify-icon>
              Bezpieczeństwo seniora
            </div>
<div className="flex items-center gap-2 rounded-2xl border border-[#DED4C4] bg-white/45 px-4 py-3 text-sm font-medium text-[#3A4B3D] shadow-sm">
<iconify-icon className="" height="18" icon="solar:checklist-minimalistic-linear" style={{color: '#5F8F6B', strokeWidth: '1.5'}} width="18"></iconify-icon>
              Pierwsze decyzje
            </div>
<div className="flex text-sm font-medium text-[#3A4B3D] bg-white/45 border-[#DED4C4] border rounded-2xl pt-3 pr-4 pb-3 pl-4 shadow-sm gap-x-2 gap-y-2 items-center">
<iconify-icon height="18" icon="solar:heart-linear" style={{color: '#5F8F6B', strokeWidth: '1.5'}} width="18"></iconify-icon>
              Wsparcie dla rodziny
            </div>
</div>
<div className="flex flex-col sm:flex-row mt-8 gap-x-3 gap-y-3">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#5F8F6B] px-6 py-3 text-sm font-medium text-white shadow-sm shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#poradniki">
              Wybierz poradnik
              <iconify-icon className="" height="18" icon="solar:arrow-down-linear" style={{color: 'rgb(255, 255, 255)', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9D0C1] bg-white/50 px-6 py-3 text-sm font-medium text-[#344336] shadow-sm transition hover:border-[#5F8F6B] hover:bg-white" href="https://senioroksystem.pl">
              Wróć do strony głównej
              <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative">
<div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-[#EAF2EC] blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] border border-[#E0D6C7] bg-[#FFFCF6]/80 p-5 shadow-xl shadow-[#7E6B4C]/10 backdrop-blur">
<div className="rounded-[1.5rem] bg-[#F2EBDD] p-5">
<div className="flex items-start justify-between gap-5">
<div className="">
<p className="text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F]">
                    SeniorOK System
                  </p>
<h2 className="mt-3 text-2xl font-medium tracking-tight text-[#233025]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
                    Spokojniej, gdy wiesz, od czego zacząć.
                  </h2>
</div>
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#5F8F6B] shadow-sm">
<iconify-icon className="" height="26" icon="solar:heart-pulse-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
</div>
<div className="mt-8 grid gap-3">
<div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2EC] text-[#5F8F6B]">
<iconify-icon height="22" icon="solar:chat-round-dots-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-[#28352B]">
                      Jak rozmawiać bez presji
                    </p>
<p className="mt-1 text-xs leading-5 text-[#687567]">
                      Delikatnie, konkretnie i z szacunkiem.
                    </p>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2EC] text-[#5F8F6B]">
<iconify-icon height="22" icon="solar:home-smile-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-[#28352B]">
                      Bezpieczeństwo w domu
                    </p>
<p className="mt-1 text-xs leading-5 text-[#687567]">
                      Wsparcie bez odbierania samodzielności.
                    </p>
</div>
</div>
<div className="flex items-center gap-3 rounded-2xl bg-white/70 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF2EC] text-[#5F8F6B]">
<iconify-icon height="22" icon="solar:users-group-rounded-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-[#28352B]">
                      Decyzje dla całej rodziny
                    </p>
<p className="mt-1 text-xs leading-5 text-[#687567]">
                      Poradniki pomagają uporządkować sytuację.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10" id="poradniki">
<div className="mx-auto max-w-3xl text-center">
<p className="text-sm font-medium text-[#5F8F6B]">Darmowe poradniki</p>
<h2 className="mt-3 text-3xl font-medium tracking-tight text-[#1F2C22] sm:text-4xl" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
            Wybierz poradnik, który najlepiej pasuje do Twojej sytuacji
          </h2>
<p className="mt-4 text-base leading-8 text-[#5F6C5E]">
            Każdy poradnik jest krótki, praktyczny i napisany prostym językiem —
            tak, aby pomóc rodzinie spokojnie zrobić pierwszy krok.
          </p>
</div>
<div className="mt-12 grid gap-6 lg:grid-cols-3">
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Bezpieczny rodzic, spokojny Ty
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Praktyczny przewodnik dla rodzin, które martwią się o mamę lub
              tatę mieszkających samotnie. Pomaga ocenić bezpieczeństwo w domu i
              spokojnie zaplanować pierwsze kroki.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Gdy senior przestaje sobie radzić
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Poradnik dla rodzin, które widzą, że rodzic coraz gorzej radzi
              sobie na co dzień i nie wiedzą, od czego zacząć szukanie pomocy.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Opiekunka, MOPS, DPS czy monitoring?
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Przewodnik po możliwych formach wsparcia seniora: od pomocy
              rodzinnej i lokalnej, przez opiekunkę, aż po monitoring
              bezpieczeństwa w domu.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Razem czy osobno?
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Poradnik o rozmowach z rodzeństwem i rodziną, kiedy trzeba podjąć
              decyzje dotyczące opieki nad rodzicem.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Senior po szpitalu
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Praktyczne wskazówki dla rodzin, które przygotowują dom i opiekę
              po powrocie seniora ze szpitala.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
<article className="group flex h-full flex-col rounded-[2.25rem] border border-[#E7DDCF] bg-[#FFFCF6]/90 p-7 shadow-lg shadow-[#7E6B4C]/10 ring-1 ring-white/60 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#D7C7B0] hover:bg-white/95 hover:shadow-xl hover:shadow-[#7E6B4C]/15">
<p className="mb-5 inline-flex w-fit rounded-full border border-[#E0D6C7] bg-[#F4ECDD]/70 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18rem] text-[#71806F] shadow-sm shadow-[#7E6B4C]/5">
              Poradnik
            </p>
<h3 className="text-2xl font-medium tracking-tight text-[#223026]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Spokojny urlop
            </h3>
<p className="mt-5 flex-1 text-sm leading-7 text-[#5F6C5E]">
              Poradnik dla rodzin, które wyjeżdżają na urlop, delegację lub
              święta i chcą zadbać o bezpieczeństwo seniora pozostającego w
              domu.
            </p>
<a className="downloadBtn mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#6E9B78] bg-[#5F8F6B] px-5 py-3 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
              Pobierz poradnik
              <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</article>
</div>
</section>
<section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10" id="dlaczego">
<div className="grid gap-8 rounded-[2.25rem] border border-[#E0D6C7] bg-[#FFFCF6]/70 p-7 shadow-lg shadow-[#7E6B4C]/10 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
<div className="">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EAF2EC] text-[#5F8F6B]">
<iconify-icon height="26" icon="solar:leaf-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="26"></iconify-icon>
</div>
<h2 className="mt-6 text-3xl font-medium tracking-tight text-[#1F2C22] sm:text-4xl" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Dlaczego przygotowaliśmy te poradniki?
            </h2>
</div>
<div className="flex items-center">
<p className="text-base leading-8 text-[#536153] sm:text-lg">
              Wiele rodzin zaczyna szukać pomocy dopiero wtedy, gdy pojawia się
              niepokój: nieodebrany telefon, upadek, samotność seniora, powrót
              ze szpitala albo obawa, że rodzic nie radzi sobie już tak jak
              wcześniej. Te poradniki pomagają uporządkować sytuację i spokojnie
              podjąć pierwsze decyzje.
            </p>
</div>
</div>
</section>
<section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10">
<div className="relative overflow-hidden rounded-[2.25rem] border border-[#E0D6C7] bg-[#FFFCF6]/80 p-7 shadow-xl shadow-[#7E6B4C]/10 sm:p-10 lg:p-14">
<div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#EAF2EC] opacity-70 blur-3xl"></div>
<div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-[#EFE2C9] opacity-80 blur-3xl"></div>
<div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
<div className="">
<p className="text-sm font-medium text-[#5F8F6B]">
                Bez presji, spokojnie i po ludzku
              </p>
<h2 className="mt-3 max-w-3xl text-3xl font-medium tracking-tight text-[#1F2C22] sm:text-4xl" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
                Chcesz porozmawiać o bezpieczeństwie mamy lub taty?
              </h2>
<p className="mt-4 max-w-2xl text-base leading-8 text-[#536153]">
                Możesz pobrać poradnik albo wrócić do strony głównej i umówić
                bezpłatną konsultację.
              </p>
</div>
<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
<a className="downloadBtn inline-flex items-center justify-center gap-2 rounded-full bg-[#5F8F6B] px-6 py-3 text-sm font-medium text-white shadow-sm shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="#brevo-form">
                Pobierz poradnik
                <iconify-icon height="18" icon="solar:letter-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D9D0C1] bg-white/50 px-6 py-3 text-sm font-medium text-[#344336] shadow-sm transition hover:border-[#5F8F6B] hover:bg-white focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" href="https://senioroksystem.pl">
                Wróć do strony głównej SeniorOK System
                <iconify-icon height="18" icon="solar:arrow-right-up-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#243327]/40 opacity-0 pointer-events-none transition-opacity duration-300 target:opacity-100 target:pointer-events-auto backdrop-blur-sm px-4 py-6 sm:px-6" id="brevo-form">
<div className="relative w-full max-w-md rounded-[2.25rem] bg-[#FFFCF6] p-7 shadow-2xl border border-[#E0D6C7] sm:p-10">
<a className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF2EC] text-[#5F8F6B] transition hover:bg-[#5F8F6B] hover:text-white" href="#" id="close-modal-btn">
<iconify-icon height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</a>
<div className="text-center mt-2">
<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EAF2EC] text-[#5F8F6B] mb-5">
<iconify-icon height="28" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#233025]" style={{fontFamily: '\'Lora\', ui-serif, Georgia, serif'}}>
              Pobierz darmowe poradniki
            </h3>
<p className="mt-3 text-sm leading-6 text-[#536153]">
              Podaj swój adres e-mail, a prześlemy Ci link do pobrania materiałów.
            </p>
</div>
<form action="https://8159d712.sibforms.com/serve/MUIFAB" className="mt-8" method="POST">
<div>
<label className="sr-only" htmlFor="EMAIL">Adres e-mail</label>
<input className="w-full rounded-full border border-[#D9D0C1] bg-white px-5 py-3.5 text-sm text-[#243327] placeholder-[#7A8578] shadow-sm focus:border-[#5F8F6B] focus:outline-none focus:ring-1 focus:ring-[#5F8F6B]" id="EMAIL" name="EMAIL" placeholder="Twój adres e-mail" required="" type="email"/>
</div>
<button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#5F8F6B] px-5 py-3.5 text-sm font-medium text-white shadow-md shadow-[#5F8F6B]/20 transition hover:bg-[#4F7A5C] focus:outline-none focus:ring-4 focus:ring-[#EAF2EC]" type="submit">
              Wyślij poradniki
              <iconify-icon height="18" icon="solar:arrow-right-linear" style={{color: 'currentColor', strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<p className="mt-4 text-center text-xs text-[#7A8578]">
              Zapisując się, wyrażasz zgodę na kontakt e-mail.
            </p>
</form>
</div>
</div>
</main>
<footer className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
<div className="flex flex-col gap-4 border-t border-[#DED4C4] pt-6 sm:flex-row sm:items-center sm:justify-between">
<div>
<p className="text-sm font-medium tracking-tight text-[#344336]">
            SeniorOK System
          </p>
<p className="mt-2 max-w-2xl text-xs leading-6 text-[#7A8578]">
            Prywatny system bezpieczeństwa dla seniorów mieszkających samotnie —
            bez kamer, bez podglądania i bez naruszania prywatności.
          </p>
</div>
<a className="text-sm font-medium text-[#5F8F6B] transition hover:text-[#4F7A5C]" href="https://senioroksystem.pl">
          Strona główna
        </a>
</div>
</footer>

    </>
  );
}
