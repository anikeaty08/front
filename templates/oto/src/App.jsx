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



      document.addEventListener("DOMContentLoaded", () => {
          const particlesContainer = document.querySelector('.background-particles');
          if (particlesContainer) {
              const particleCount = 50;
              for (let i = 0; i < particleCount; i++) {
                  const particle = document.createElement('div');
                  particle.classList.add('particle');
                  const size = Math.random() * 2 + 1;
                  const left = Math.random() * 98;
                  const duration = Math.random() * 20 + 20;
                  const delay = Math.random() * -duration;
                  const opacity = Math.random() * 0.3 + 0.1;
                  const driftX = (Math.random() - 0.5) * 40;
                  particle.style.width = `${size}px`;
                  particle.style.height = `${size}px`;
                  particle.style.left = `${left}%`;
                  particle.style.bottom = `-10%`;
                  particle.style.animationDuration = `${duration}s`;
                  particle.style.animationDelay = `${delay}s`;
                  particle.style.setProperty('--max-opacity', opacity);
                  particle.style.setProperty('--drift-x', `${driftX}px`);
                  particlesContainer.appendChild(particle);
              }
          }

          const timerDuration = 15 * 60 * 1000;
          const storageKey = "ofertaJednorazowaEndTime";

          const getCookie = (name) => {
              const value = `; ${document.cookie}`;
              const parts = value.split(`; ${name}=`);
              if (parts.length === 2) return parts.pop().split(';').shift();
              return null;
          };
          const setCookie = (name, value, days) => {
              let expires = "";
              if (days) {
                  const date = new Date();
                  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                  expires = "; expires=" + date.toUTCString();
              }
              document.cookie = name + "=" + (value || "")  + expires + "; path=/";
          };

          let endTime = localStorage.getItem(storageKey);
          let cookieEndTime = getCookie(storageKey);

          if (!endTime && cookieEndTime) {
              endTime = cookieEndTime;
              localStorage.setItem(storageKey, endTime);
          } else if (endTime && !cookieEndTime) {
              setCookie(storageKey, endTime, 365);
          }

          if (!endTime) {
              endTime = Date.now() + timerDuration;
              localStorage.setItem(storageKey, endTime);
              setCookie(storageKey, endTime, 365);
          }

          const updateTimers = () => {
              const remaining = Math.max(0, endTime - Date.now());
              const totalSeconds = Math.floor(remaining / 1000);

              const days = Math.floor(totalSeconds / (3600 * 24));
              const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
              const minutes = Math.floor((totalSeconds % 3600) / 60);
              const seconds = totalSeconds % 60;

              const dayStrs = String(days).padStart(2, '0');
              const hrStrs = String(hours).padStart(2, '0');
              const minStrs = String(minutes).padStart(2, '0');
              const secStrs = String(seconds).padStart(2, '0');

              document.querySelectorAll('.timer-day').forEach(el => el.textContent = dayStrs);
              document.querySelectorAll('.timer-hr').forEach(el => el.textContent = hrStrs);
              document.querySelectorAll('.timer-min').forEach(el => el.textContent = minStrs);
              document.querySelectorAll('.timer-sec').forEach(el => el.textContent = secStrs);

              if (remaining <= 0 && typeof timerInterval !== 'undefined') {
                  clearInterval(timerInterval);
              }
          };

          updateTimers();
          const timerInterval = setInterval(updateTimers, 1000);
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
      

<div className="background-particles" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh', zIndex: '-1', pointerEvents: 'none', overflow: 'hidden'}}></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px]"></div>
</div>

<section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden border-b border-zinc-900 z-10 text-center w-full">

<div className="absolute inset-0 z-0 bg-zinc-950 overflow-hidden">
<div className="absolute inset-0 w-full h-full scale-[1.15] origin-center pointer-events-none">

<iframe allow="autoplay; fullscreen" allowtransparency="true" className="hidden md:block w-full h-full object-cover" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/70u6gkoogv?seo=false&amp;autoPlay=true&amp;muted=true&amp;loop=true&amp;endVideoBehavior=loop&amp;controlsVisibleOnLoad=false&amp;version=v1"></iframe>

<iframe allow="autoplay; fullscreen" allowtransparency="true" className="block md:hidden w-full h-full object-cover" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/2hr83i2ox7?seo=false&amp;autoPlay=true&amp;muted=true&amp;loop=true&amp;endVideoBehavior=loop&amp;controlsVisibleOnLoad=false&amp;version=v1"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/10 to-zinc-950/90 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[900px] h-[500px] bg-zinc-950/60 blur-[100px] rounded-[100%] pointer-events-none z-0"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-24 flex flex-col items-center gap-10">

<div className="space-y-6 max-w-4xl relative">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-tight drop-shadow-2xl">
            Gratuluję pierwszego kroku!
          </h1>
<p className="text-xl sm:text-2xl md:text-3xl text-white/95 font-normal tracking-tight leading-relaxed max-w-2xl mx-auto drop-shadow-xl">
            Właśnie otrzymaliśmy powiadomienie o Twoim zamówieniu.
            <span className="text-emerald-400 drop-shadow-md">
              To nie koniec tej przygody.
            </span>
</p>
</div>

<div className="flex flex-col items-center gap-4 mt-2 relative w-full max-w-full">
<span className="text-sm sm:text-base font-normal text-zinc-300 uppercase tracking-widest flex items-center gap-2 drop-shadow-md">
<iconify-icon className="text-emerald-400 text-[20px]" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            Oferta wygasa za:
          </span>
<div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl p-4 md:p-6 shadow-2xl shadow-black max-w-full">

<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4.5rem]">
<span className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight timer-day">
                00
              </span>
<span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase mt-1 md:mt-2 tracking-wider">
                Dni
              </span>
</div>
<span className="text-2xl sm:text-3xl md:text-5xl text-zinc-700 font-light pb-2 sm:pb-4 md:pb-6">
              :
            </span>

<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4.5rem]">
<span className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight timer-hr">
                00
              </span>
<span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase mt-1 md:mt-2 tracking-wider">
                Godz
              </span>
</div>
<span className="text-2xl sm:text-3xl md:text-5xl text-zinc-700 font-light pb-2 sm:pb-4 md:pb-6">
              :
            </span>

<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4.5rem]">
<span className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight timer-min">
                15
              </span>
<span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase mt-1 md:mt-2 tracking-wider">
                Min
              </span>
</div>
<span className="text-2xl sm:text-3xl md:text-5xl text-zinc-700 font-light pb-2 sm:pb-4 md:pb-6">
              :
            </span>

<div className="flex flex-col items-center min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4.5rem]">
<span className="text-3xl sm:text-4xl md:text-6xl font-medium text-white tracking-tight timer-sec">
                00
              </span>
<span className="text-[10px] sm:text-xs md:text-sm text-zinc-500 uppercase mt-1 md:mt-2 tracking-wider">
                Sek
              </span>
</div>
</div>
</div>

<a className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium text-xl sm:text-2xl md:text-3xl px-8 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(16,185,129,0.8)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,1)] hover:scale-[1.02] mt-4 w-full sm:w-auto" href="https://zestaw.eduheros.pl">
<span>Dorzuć do zamówienia</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 text-[24px] sm:text-[28px]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-20">
<div className="bg-gradient-to-b from-zinc-900/80 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
<div className="flex justify-center w-full mb-6">
<iconify-icon className="text-emerald-500 text-[48px]" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-lg sm:text-xl md:text-2xl text-zinc-300 leading-relaxed font-normal">
          Przygotowaliśmy dla Ciebie jednorazową propozycje, która będzie
          aktywna tylko na tej stronie przez najbliższe
          <span className="text-emerald-400">15 minut</span>
          . Po upływie tego czasu ta strona zostanie bezpowrotnie usunięta. Jest
          to zarówno ukłon w Twoim kierunku za zaufanie, którym nas obdarzyłeś,
          a jednocześnie pierwsza lekcja z książki, którą dla Ciebie pakujemy.
        </p>
</div>
</section>

<section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-16" id="oferta">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
<div className="space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed order-2 lg:order-1">
<p>
            W książce pokazałem wszystkie działające lejki sprzedażowe, ale
            napotkałem duży problem.
          </p>
<p>
            Ciężko na papierze pokazać wszystkie technikalia jak coś wyklikać w
            narzędziach "od kuchni"
          </p>
<p>
            Wiedziałem, że idealnym formatem do podzielenia się moim całym
            doświadczeniem jest format wideo.
          </p>
<p>
            Bardzo zależy mi też na tym, aby skrócić Twoją ścieżkę, który lejek
            wybrać i jak go zaimplementować u siebie.
          </p>
<p className="text-2xl sm:text-3xl text-zinc-100 font-medium tracking-tight mt-8">
            Chcę Ci pokazać coś nad czym pracowałem ostatnie 8 lat.
          </p>
</div>
<div className="relative w-full aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden border border-zinc-800/60 shadow-2xl order-1 lg:order-2 group">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
<img alt="Okładka Książki" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://i.postimg.cc/fyyfWBcd/Corrected-Book-Cover.jpg"/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
<div className="flex flex-col gap-6 order-1 lg:order-1">

<div className="rounded-3xl overflow-hidden border border-zinc-800/60 relative group bg-zinc-900 shadow-xl">
<img alt="Początki Tomasza Guzika" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://i.postimg.cc/pr3LSJPp/guziker1.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
<div className="flex flex-col gap-6">
<div className="rounded-3xl overflow-hidden border border-zinc-800/60 relative group bg-zinc-900 shadow-xl">
<img alt="Wyzwanie YouTube" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://i.postimg.cc/qMCR3SGy/guziker2.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="rounded-3xl overflow-hidden border border-zinc-800/60 relative group bg-zinc-900 shadow-xl">
<img alt="Konferencje i Telewizja" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://i.postimg.cc/pLfL0j4v/guziker3.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div className="rounded-3xl overflow-hidden border border-zinc-800/60 relative group bg-zinc-900 shadow-xl">
<img alt="Dodatkowe ujęcie z kulis" className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" src="https://i.postimg.cc/pr31npJq/dfasfdsgdas.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>
</div>
</div>
<div className="space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed order-2 lg:order-2">
<p>Moja droga nie była usłana różami.</p>
<p>
            Jak większość z nas startowałem od zera mając stary telefon, laptop
            i drobne oszczędności.
          </p>
<p>
            Moja przygoda zaczęła się pod koniec 2018 roku, gdy założyłem
            agencję social media.
          </p>
<p>Firma bardzo dobrze się rozwijała.</p>
<p>Rosła ilość klientów. Rosły stawki. Przychody.</p>
<p>
            Największym przełomem był rok 2023 w którym podjąłem się szalonego
            wyzwania publikowania 1 filmu dziennie przez 365 dni na platformie
            Youtube.
          </p>
<p>
            Zacząłem być zapraszany do największych telewizji, występowałem na
            największych konferencjach branżowych, byłem współautorem w topowych
            wydawnictwach biznesowych, ale … w pewnym momencie dotknąłem sufitu
            i brakło paliwa.
          </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-32">
<div className="space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed order-2 lg:order-1">
<p>
            Powiedziałem sobie, że nie jestem już w stanie tak ciężko pracować i
            musi być jakiś sposób żeby mój biznes stał się narzędziem do
            realizacji marzeń.
          </p>
<p>
            Miałem na swoim koncie już 200 + kampanii reklamowych i olbrzymie
            doświadczenie zebrane z ponad 20 branż. Skoro te metody działały u
            moich klientów to muszę to powtórzyć u siebie.
          </p>
<p>
            Zacząłem stopniowo wycofywać się z usług i całą swoją uwagę
            przeniosłem w budowanie automatycznego systemu, który działa w tle.
          </p>
<p className="text-2xl sm:text-3xl text-zinc-100 font-medium tracking-tight mt-8">
            W ciągu kilku lat zasuwania doszedłem do złotego Graala i udało mi
            się zbudować system, który nazwałem roboczo “Automation Revenue
            Machine”.
          </p>
</div>
<div className="relative w-[90%] max-w-[350px] mx-auto block aspect-[9/16] rounded-3xl overflow-hidden border border-zinc-800/60 shadow-[0_0_50px_-15px_rgba(16,185,129,0.2)] bg-transparent order-1 lg:order-2">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
<iframe allow="autoplay; fullscreen" allowtransparency="true" className="w-full h-full pointer-events-none" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/8ras2m7pof?seo=false&amp;autoPlay=true&amp;muted=true&amp;loop=true&amp;endVideoBehavior=loop&amp;controlsVisibleOnLoad=false&amp;version=v1&amp;background=1" style={{objectFit: 'cover', background: 'transparent'}}></iframe>
</div>
</div>

<div className="max-w-3xl mx-auto text-center space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed mb-16">
<p>
          System, który w sposób automatyczny zamienia widzów w płacących
          klientów.
        </p>
<p>
          Cały system zaprojektowałem tak, aby nie wymagał regularnej codziennej
          pracy, a jedynie doglądania.
        </p>
<p>
          Zamiast pomagać 30 firmom miesięcznie zacząłem pomagać setkom firm
          nawet ich nie znając.
        </p>
<p className="text-xl sm:text-2xl text-zinc-200 font-medium tracking-tight mt-6">
          W sposób bezobsługowy, który mnie nie obciąża.
        </p>
</div>

<div className="max-w-3xl mx-auto bg-zinc-900/40 border-l-2 border-emerald-500 p-5 sm:p-6 rounded-r-2xl mt-16 mb-10">
<p className="text-xl sm:text-2xl text-zinc-200 font-medium tracking-tight mb-4">
          Dzisiaj za zaufanie którym mnie obdarzasz chcę przez te kilkanaście
          minut dać Ci szansę odebrania tego produktu w zestawie do książki za
          symboliczną cenę.
        </p>
<p className="text-emerald-400 font-medium mb-4 text-lg sm:text-xl">
          Nigdy więcej nie zobaczysz tej oferty.
        </p>
<p className="text-lg sm:text-xl text-zinc-400 mb-2">
          Jest ona skierowana tylko i wyłącznie dla moich klientów.
        </p>
<p className="text-lg sm:text-xl text-zinc-400">
          Chcę, aby ten produkt trafił tylko w ręce ludzi czynu, którzy są w
          stanie zaufać mi w ciemno i bez dodatkowych pytań wdrożyć ten system w
          życie.
        </p>
</div>
</section>

<section className="relative z-10 w-full py-16 border-y border-zinc-900 bg-zinc-950/50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-10">
<div className="flex flex-col items-center gap-4 w-full">
<span className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
            Czas mija:
          </span>
<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 md:px-6 shadow-lg shadow-black/50">
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-day">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                d
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-hr">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                h
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-min">
                15
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                m
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-sec">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                s
              </span>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-6 w-full max-w-full">

<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl px-4 sm:px-6 md:px-8 py-4 w-full sm:w-auto">
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
                Cena poza ofertą
              </span>
<span className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-500 line-through decoration-red-500/50 decoration-2 leading-none">
                297 PLN
              </span>
</div>
<div className="hidden sm:block w-px h-10 bg-zinc-800"></div>
<div className="flex flex-col items-start justify-center">
<span className="text-[10px] sm:text-xs font-medium text-emerald-500 uppercase tracking-widest mb-1">
                Tylko na tej stronie
              </span>
<span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white drop-shadow-md leading-none">
                97 PLN
              </span>
</div>
</div>
<a className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium text-lg sm:text-xl md:text-2xl px-6 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_-15px_rgba(16,185,129,0.7)] hover:scale-[1.02]" href="https://zestaw.eduheros.pl">
<span>Dorzuć do zamówienia</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 text-[24px]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4">
          DLA KOGO TO JEST?
        </h2>
<div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">

<div className="group flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-500">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
<img alt="Osoby specjalizujące się w dziedzinie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://i.postimg.cc/W3WgFs3k/Biznesowy-portret-CEO.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 border-t border-zinc-800/30">
<p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Dla osób, które są specjalistami w swojej dziedzinie i po latach
              mają dość sprzedawania swojego czasu. Chcą zbudować niezależne
              dodatkowe źródło dochodu, które pracuje z boku niezależnie czy są
              przed komputerem, czy są na wakacjach.
            </p>
</div>
</div>
<div className="group flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-500">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
<img alt="Osoby polegające na rekomendacjach" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://i.postimg.cc/qqWKwQ2y/Configuration-Readiness-Assessment.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 border-t border-zinc-800/30">
<p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Dla tych, którzy całe życie bazowali na rekomendacjach i nie mają
              żadnego powtarzalnego, policzalnego źródła pozyskania klientów z
              internetu. Chcą mieć pewność, że jak wpakują 5000 zł w reklamę to
              zarobią 30 000 PLN.
            </p>
</div>
</div>
<div className="group flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-500">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
<img alt="Osoby zmęczone szukaniem klientów" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://i.postimg.cc/VshXzs20/Portret-wscieklego-menedzera.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 border-t border-zinc-800/30">
<p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Dla tych którzy mają dość ganiania za klientami i niańczenia ich.
              Chcą mieć system, który pracuje 24/7 i sprzedaje bezobsługowo na
              wysokiej marży.
            </p>
</div>
</div>
<div className="group flex flex-col bg-zinc-900/40 border border-zinc-800/60 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-zinc-700/60 transition-all duration-500">
<div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
<img alt="Osoby marzące o podróżowaniu" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0" src="https://i.postimg.cc/fbsx1Hpj/Beach-Travel-Portrait.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent"></div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col relative z-10 border-t border-zinc-800/30">
<p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              Dla tych, którzy marzą o ciągłym podróżowaniu bez martwienia się o
              pieniądze. Chcą mieć klientów z internetu bez tańczenia na tiktoku
              i wchodzenia w głupie trendy. Chcą precyzyjnej instrukcji zrób to
              w ten sposób i dopal reklamą.
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-16 text-center">
        Co znajduje się w środku?
      </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

<div className="flex flex-col justify-between gap-6 h-full">
<div className="flex items-start gap-5 sm:gap-6 bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors duration-300">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-emerald-400 text-[32px]" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-normal text-zinc-100 tracking-tight mb-2">
                3h materiałów wideo
              </h3>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                Osadzone na zamkniętej platformie w których pokazuje krok po
                kroku jak układam lejek sprzedażowy, który pozyskuje klientów
                automatycznie 24/7.
              </p>
</div>
</div>
<div className="flex items-start gap-5 sm:gap-6 bg-zinc-900/60 border border-emerald-500/30 p-5 sm:p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-[0_0_30px_-15px_rgba(16,185,129,0.3)] hover:bg-zinc-900/80 transition-colors duration-300">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<div className="mt-1 flex-shrink-0 relative z-10">
<iconify-icon className="text-emerald-400 text-[32px]" icon="solar:filter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-xl sm:text-2xl font-normal text-white tracking-tight mb-2">
                Autorski Lejek Tomasza Guzika
              </h3>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                Schemat automatycznego pozyskiwania klientów, który został
                opracowany i optymalizowany przez ostatnie lata. Działa
                doskonale w wielu niszach.
              </p>
</div>
</div>
<div className="flex items-start gap-5 sm:gap-6 bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors duration-300">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-emerald-400 text-[32px]" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-normal text-zinc-100 tracking-tight mb-2">
                Szablony wiadomości email
              </h3>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                Które wykorzystuje w swoich kampaniach. Gotowe do skopiowania i
                prostej edycji pod Twój biznes.
              </p>
</div>
</div>
<div className="flex items-start gap-5 sm:gap-6 bg-zinc-900/40 border border-zinc-800 p-5 sm:p-6 md:p-8 rounded-2xl hover:bg-zinc-900/60 transition-colors duration-300">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-emerald-400 text-[32px]" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-normal text-zinc-100 tracking-tight mb-2">
                Zamknięta społeczność
              </h3>
<p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
                Dostęp do zamkniętej grupy na Facebooku ekskluzywnie tylko dla
                kursantów tego programu.
              </p>
</div>
</div>
</div>

<div className="relative w-full h-full flex justify-center items-center lg:pl-10">
<div className="absolute inset-0 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none transform scale-125"></div>
<a className="block relative z-10 w-full h-full cursor-pointer" href="https://zestaw.eduheros.pl">
<img alt="Automation Revenue Machine - Program Szkoleniowy" className="hover:scale-105 transition-transform duration-700 ease-out will-change-transform w-full h-full object-contain drop-shadow-[0_0_40px_rgba(16,185,129,0.25)]" src="https://i.postimg.cc/kGS5ssj5/sadasd.png"/>
</a>
</div>
</div>
</section>

<section className="relative z-10 w-full py-16 mt-8 border-y border-zinc-900 bg-zinc-950/50">
<div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-10">
<div className="flex flex-col items-center gap-4 w-full">
<span className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
            Strona wygasa za:
          </span>
<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 md:px-6 shadow-lg shadow-black/50">
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-day">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                d
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-hr">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                h
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-min">
                15
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                m
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-sec">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                s
              </span>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-6 w-full max-w-full">
<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl px-4 sm:px-6 md:px-8 py-4 w-full sm:w-auto">
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
                Cena poza ofertą
              </span>
<span className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-500 line-through decoration-red-500/50 decoration-2 leading-none">
                297 PLN
              </span>
</div>
<div className="hidden sm:block w-px h-10 bg-zinc-800"></div>
<div className="flex flex-col items-start justify-center">
<span className="text-[10px] sm:text-xs font-medium text-emerald-500 uppercase tracking-widest mb-1">
                Tylko na tej stronie
              </span>
<span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white drop-shadow-md leading-none">
                97 PLN
              </span>
</div>
</div>
<a className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium text-lg sm:text-xl md:text-2xl px-6 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_50px_-15px_rgba(16,185,129,0.7)] hover:scale-[1.02]" href="https://zestaw.eduheros.pl">
<span>Dorzuć do zamówienia</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 text-[24px]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 py-24">
<div className="relative bg-zinc-900/50 border border-emerald-500/30 p-6 sm:p-8 md:p-12 rounded-[2rem] overflow-hidden w-full">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
<div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-5 rounded-2xl shrink-0">
<iconify-icon className="text-emerald-400 text-[40px] sm:text-[48px]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
              Żelazna gwarancja jakości
            </h2>
<div className="space-y-4 text-lg sm:text-xl text-zinc-300 leading-relaxed">
<p>
                Jeśli udokumentujesz mi, że przerobiłeś wszystkie lekcje i
                wdrożyłeś cały system który pokazuje w programie i nie pozwoliło
                Ci to zarobić minimum 10 000 PLN to umówię się z Tobą na
                indywidualne konsultacje 1:1 za które normalnie ludzie płacą mi
                2000 PLN i zaplanuje Ci cały proces nauki i zoptymalizuje Twój
                lejek aż zacznie być rentowny.
              </p>
<p>
                Jeśli po moich optymalizacjach nadal nie zarobisz minimum 10 000
                PLN zwrócę Ci
                <span className="text-white font-normal">trzykrotność</span>
                tej kwoty, którą zapłacisz za ten materiał szkoleniowy.
              </p>
<p className="text-emerald-400 font-normal mt-6">
                Tak mocno wierzę w ten system i przetestowałem go w tylu
                branżach, że jestem w 100% pewny swego i mogę Ci zagwarantować
                tak mocną obietnicę.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 pb-24">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-8">
        Dlaczego sprzedaję ten kurs tak tanio?
      </h2>
<div className="space-y-6 text-lg sm:text-xl text-zinc-400 leading-relaxed w-full">
<p>
          Ponieważ wiem, że jeśli oddałbym Ci ten materiał za darmo to nigdy nie
          zostałby otwarty. Ludzie nie doceniają bezpłatnych rzeczy.
        </p>
<p>
          Moim celem jest poznawać jak największą ilość fantastycznych ludzi
          biznesu. Chcę mieć znaczący wpływ na rozwój marketingu w Polskich
          firmach i wiem, że jeśli dotrę do setek firm miesięcznie z tym
          produktem to z czasem pojawią się większe projekty w przyszłości.
        </p>
<p>Ta symboliczna cena otwiera mi taką możliwość.</p>
<p>
          Gdyby ten materiał był sprzedawany za 2000 zł (uważam, że tyle jest
          wart) to kupowałoby go tylko kilkadziesiąt firm miesięcznie. Dzięki
          tej cenie uzyskuje ogromną skalę i mam wpływ na setki firm.
        </p>
<p className="text-xl sm:text-2xl text-zinc-200 font-normal tracking-tight mt-8 border-l-2 border-zinc-700 pl-4 sm:pl-6 py-2 break-words">
          Dają Ci know how, które budowałem 8 lat w cenie obiadu w restauracji.
          Jeśli prowadzisz firmę i chcesz posiadać pasywne źródła klientów to
          nie posiadanie tej wiedzy jest wręcz nieodpowiedzialne.
        </p>
</div>
</section>

<section className="relative z-10 w-full pt-8 pb-24">
<div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-10">
<div className="flex flex-col items-center gap-4 w-full">
<span className="text-xs sm:text-sm font-medium text-zinc-500 uppercase tracking-widest">
            Oferta przepada za:
          </span>
<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 bg-zinc-900 border border-zinc-800 rounded-xl p-3 sm:p-4 md:px-6 shadow-lg shadow-black/50">
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-day">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                d
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-hr">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                h
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-min">
                15
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                m
              </span>
</div>
<span className="text-xl sm:text-2xl text-zinc-700 font-light">:</span>
<div className="flex items-baseline gap-1">
<span className="text-3xl sm:text-4xl font-medium text-white tracking-tight timer-sec">
                00
              </span>
<span className="text-[10px] sm:text-xs text-zinc-500 uppercase">
                s
              </span>
</div>
</div>
</div>
<div className="flex flex-col items-center gap-6 w-full max-w-full">
<div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-zinc-900/40 border border-zinc-800/50 rounded-2xl px-4 sm:px-6 md:px-8 py-4 w-full sm:w-auto">
<div className="flex flex-col items-end justify-center">
<span className="text-[10px] sm:text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
                Cena poza ofertą
              </span>
<span className="text-lg sm:text-xl md:text-2xl font-medium text-zinc-500 line-through decoration-red-500/50 decoration-2 leading-none">
                297 PLN
              </span>
</div>
<div className="hidden sm:block w-px h-10 bg-zinc-800"></div>
<div className="flex flex-col items-start justify-center">
<span className="text-[10px] sm:text-xs font-medium text-emerald-500 uppercase tracking-widest mb-1">
                Tylko na tej stronie
              </span>
<span className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white drop-shadow-md leading-none">
                97 PLN
              </span>
</div>
</div>
<div className="flex flex-col items-center gap-3 w-full sm:w-auto">
<a className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-green-400 to-emerald-500 text-white font-medium text-lg sm:text-xl md:text-2xl px-6 sm:px-12 py-5 sm:py-6 rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)] hover:scale-[1.02]" href="https://zestaw.eduheros.pl">
<span>Dorzuć do zamówienia</span>
<iconify-icon className="transition-transform group-hover:translate-x-1 text-[24px]" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="text-[12px] sm:text-sm text-zinc-500 mt-2">
              Płatność w 100% bezpieczna. Natychmiastowy dostęp.
            </p>
</div>
</div>
</div>
</section>


    </>
  );
}
