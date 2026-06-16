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



const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener('DOMContentLoaded', () => {
          const btn = document.getElementById('mobile-menu-btn');
          const nav = document.getElementById('mobile-nav');
          const iconMenu = document.getElementById('icon-menu');
          const iconClose = document.getElementById('icon-close');

          if(btn && nav) {
              btn.addEventListener('click', () => {
                  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                  btn.setAttribute('aria-expanded', !isExpanded);
                  nav.classList.toggle('hidden');
                  iconMenu.classList.toggle('hidden');
                  iconClose.classList.toggle('hidden');
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#E6DCCB]">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex items-center justify-between h-20">

<a className="flex flex-col group focus-ring rounded-sm" href="/">
<span className="font-manrope text-base tracking-tight font-normal text-[#1C1712]">
            RUCH
          </span>
<span className="font-manrope text-xs tracking-tight font-normal text-[#A8761A] group-hover:text-[#C8901F] transition-colors">
            DO ZMIAN
          </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors focus-ring rounded-sm" href="/metody">
            Metody
          </a>
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors focus-ring rounded-sm" href="/oferta_dla_firm">
            Dla firm
          </a>
<div className="relative group">
<button className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors focus-ring rounded-sm flex items-center gap-1">
              Oferta
              <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors focus-ring rounded-sm" href="/meskie_poruszenie">
            Męskie poruszenie
          </a>
<a className="text-sm font-light text-[#3A322A] hover:text-[#A8761A] transition-colors focus-ring rounded-sm" href="/blog">
            Blog
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring shadow-sm" href="#newsletter">
            Zapisz się do newslettera
          </a>
<button aria-label="Otwórz menu" className="lg:hidden p-2 text-[#1C1712] focus-ring rounded-md" id="mobile-menu-btn">
<iconify-icon className="text-2xl block" icon="solar:hamburger-menu-linear" id="icon-menu"></iconify-icon>
<iconify-icon className="text-2xl hidden" icon="solar:close-circle-linear" id="icon-close"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-[#E6DCCB] shadow-[0px_16px_48px_rgba(28,23,18,0.14)] z-40 lg:hidden" id="mobile-nav">
<nav className="flex flex-col p-6 gap-4">
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/metody">
            Metody
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/oferta_dla_firm">
            Oferta dla firm
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/coaching_mentoring">
            Coaching i mentoring
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/meskie_poruszenie">
            Męskie poruszenie
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/architektura_ciala">
            Architektura ciała
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/wyprawy">
            Wyprawy
          </a>
<a className="text-base font-light text-[#3A322A] p-2 hover:bg-[#FAF6EF] rounded-md transition-colors" href="/blog">
            Blog
          </a>
<a className="mt-4 w-full text-center bg-[#C8901F] text-[#1C1712] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring" href="#newsletter">
            Zapisz się do newslettera
          </a>
</nav>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden bg-white pt-24 pb-32 lg:pt-32 lg:pb-48">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="" className="w-full h-full object-cover object-[65%_15%] md:object-[80%_20%] opacity-50 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b03ff19b-89a5-40f4-bf6a-e9df5a5123af_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
</div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#F2E9DA] via-white to-white rounded-full opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none blur-3xl"></div>
<div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-br from-transparent via-[#F2E9DA]/30 to-[#FAF6EF]/50 rounded-full opacity-60 -translate-x-1/2 pointer-events-none blur-2xl"></div>
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-start">
<span className="font-manrope text-xs tracking-[0.18em] uppercase text-[#6B6258] font-medium mb-6 flex items-center gap-3">
<span className="w-8 h-px bg-[#A8761A]"></span>
            RUCH do ZMIAN
          </span>
<h1 className="font-manrope text-4xl md:text-5xl lg:text-6xl tracking-tight font-extralight text-[#1C1712] uppercase max-w-[900px] leading-[1.1] mb-8">
            Poruszamy ludzi.
            <br/>
<span className="gradient-transform-text">Uruchamiamy zmianę.</span>
</h1>
<p className="text-lg text-[#3A322A] font-light max-w-[680px] leading-[1.7] mb-12">
            Świadoma praca z ciałem, emocjami, umysłem i relacjami. Od
            przeciążenia i chaosu — do sprawczości, spokoju i autentyczności.
            Odnajdziesz więcej siebie w sobie.
          </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring shadow-[0px_1px_2px_rgba(28,23,18,0.06)]" href="#metoda">
              Poznaj metodę I_GO_SYSTEM
            </a>
<a className="inline-flex items-center justify-center bg-transparent text-[#A8761A] px-7 py-3.5 rounded-full text-sm font-medium hover:bg-[#FAF6EF] transition-colors focus-ring" href="#newsletter">
              Zapisz się do newslettera
            </a>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32">
<div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
<iconify-icon className="text-4xl text-[#C8901F] mb-8" icon="solar:restart-circle-linear"></iconify-icon>
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-[#1C1712] mb-6 leading-[1.2]">
            Czas na RE_SET funkcjonowania
          </h2>
<p className="text-base lg:text-lg text-[#6B6258] font-light leading-[1.65]">
            Poczucie niewykorzystanego potencjału i wyczerpane zasoby nie biorą
            się znikąd. Utrata kontaktu z ciałem, chroniczne napięcie,
            przebodźcowanie i trudności w regulacji emocji to codzienność.
            Zmiana zaczyna się w momencie, gdy odzyskujesz świadomość siebie i
            sprawczość.
          </p>
</div>
</section>

<section className="bg-white py-24 lg:py-32 relative">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<a className="block group relative bg-white border border-[#E6DCCB] rounded-[20px] p-8 lg:p-12 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] hover-lift focus-ring overflow-hidden" href="/metody">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#E0A93A] opacity-10 rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
<span className="font-manrope text-xs tracking-[0.18em] uppercase text-[#A8761A] font-medium block mb-4">
                Rozwój osobisty
              </span>
<h3 className="font-manrope text-2xl lg:text-3xl tracking-tight font-normal text-[#1C1712] mb-4">
                I_GO_SYSTEM
              </h3>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8 pr-8">
                Praktyczny system świadomego funkcjonowania człowieka.
                Zintegrowana praca z fundamentami, by żyć pełniej.
              </p>
<span className="inline-flex items-center text-sm font-medium text-[#A8761A] group-hover:text-[#C8901F] transition-colors">
                Zobacz więcej
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="block group relative bg-white border border-[#E6DCCB] rounded-[20px] p-8 lg:p-12 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] hover-lift focus-ring overflow-hidden" href="/meskie_poruszenie">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#9C3D14] opacity-10 rounded-bl-[100px] transition-transform group-hover:scale-110"></div>
<span className="font-manrope text-xs tracking-[0.18em] uppercase text-[#9C3D14] font-medium block mb-4">
                Dla mężczyzn
              </span>
<h3 className="font-manrope text-2xl lg:text-3xl tracking-tight font-normal text-[#1C1712] mb-4">
                TRU MAN
              </h3>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8 pr-8">
                Przestrzeń pracy z mężczyznami w drodze rozwoju. Męskie
                Poruszenie, Kuźnia Śmiałków, wyprawy.
              </p>
<span className="inline-flex items-center text-sm font-medium text-[#9C3D14] group-hover:text-[#E07B2E] transition-colors">
                Zobacz więcej
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32" id="metoda">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="mb-16">
<span className="font-manrope text-xs tracking-[0.18em] uppercase text-[#6B6258] font-medium mb-4 block">
              Fundament
            </span>
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-[#1C1712] mb-6">
              Cztery filary świadomości
            </h2>
<p className="text-base text-[#6B6258] font-light max-w-[600px] leading-[1.65]">
              Każdy z nas opiera swoje funkcjonowanie na czterech naczyniach
              połączonych. Tylko praca ze wszystkimi naraz przynosi trwałą
              zmianę.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl p-8 border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#F2E9DA] flex items-center justify-center mb-6 text-[#C8901F]">
<iconify-icon className="text-2xl" icon="solar:body-linear"></iconify-icon>
</div>
<h4 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-3">
                Ciało
              </h4>
<p className="text-sm text-[#6B6258] font-light leading-[1.55]">
                Świadomość sensoryczna, oddech, rozpoznawanie i regulacja
                napięcia w systemie nerwowym.
              </p>
</div>

<div className="bg-white rounded-xl p-8 border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#F2E9DA] flex items-center justify-center mb-6 text-[#E07B2E]">
<iconify-icon className="text-2xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h4 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-3">
                Umysł
              </h4>
<p className="text-sm text-[#6B6258] font-light leading-[1.55]">
                Kierowanie uwagą, praca z przekonaniami, przejrzystość myślenia
                i decyzyjność.
              </p>
</div>

<div className="bg-white rounded-xl p-8 border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#F2E9DA] flex items-center justify-center mb-6 text-[#9C3D14]">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h4 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-3">
                Emocje
              </h4>
<p className="text-sm text-[#6B6258] font-light leading-[1.55]">
                Zauważanie, nazywanie i wyrażanie emocji. Budowanie odporności
                psychicznej.
              </p>
</div>

<div className="bg-white rounded-xl p-8 border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col items-start">
<div className="w-12 h-12 rounded-full bg-[#F2E9DA] flex items-center justify-center mb-6 text-[#A8761A]">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h4 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-3">
                Relacje
              </h4>
<p className="text-sm text-[#6B6258] font-light leading-[1.55]">
                Autentyczna komunikacja, stawianie granic, empatia i budowanie
                głębokich więzi.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 lg:py-32 border-t border-[#E6DCCB]">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-[#1C1712] mb-4">
                Kierunki pracy
              </h2>
<p className="text-base text-[#6B6258] font-light max-w-[600px] leading-[1.65]">
                Wybierz przestrzeń dopasowaną do Twoich aktualnych potrzeb,
                zarówno w wymiarze indywidualnym, jak i biznesowym.
              </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white border border-[#E6DCCB] rounded-[20px] p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] flex flex-col">
<div className="mb-6 flex justify-between items-start">
<h3 className="font-manrope text-xl tracking-tight font-medium text-[#1C1712]">
                  Architektura ciała
                </h3>
<span className="inline-flex px-2 py-1 bg-[#F2E9DA] text-[#6B6258] text-[11px] font-medium tracking-wide uppercase rounded-sm">
                  B2C
                </span>
</div>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8 flex-grow">
                Praktyczny kurs i warsztaty przywracające mobilność, świadomość
                postawy i uwalniające chroniczne napięcia.
              </p>
<a className="inline-flex items-center text-sm font-medium text-[#A8761A] hover:text-[#C8901F] transition-colors focus-ring rounded-sm w-fit" href="/architektura_ciala">
                Dowiedz się więcej
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-[#E6DCCB] rounded-[20px] p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] flex flex-col">
<div className="mb-6 flex justify-between items-start">
<h3 className="font-manrope text-xl tracking-tight font-medium text-[#1C1712]">
                  Coaching i mentoring
                </h3>
<span className="inline-flex px-2 py-1 bg-[#F2E9DA] text-[#6B6258] text-[11px] font-medium tracking-wide uppercase rounded-sm">
                  B2C / B2B
                </span>
</div>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8 flex-grow">
                Indywidualne sesje wspierające w kryzysie, zmianie zawodowej lub
                poszukiwaniu głębszego sensu.
              </p>
<a className="inline-flex items-center text-sm font-medium text-[#A8761A] hover:text-[#C8901F] transition-colors focus-ring rounded-sm w-fit" href="/coaching_mentoring">
                Dowiedz się więcej
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-[#E6DCCB] rounded-[20px] p-8 shadow-[0px_8px_24px_rgba(28,23,18,0.08)] flex flex-col">
<div className="mb-6 flex justify-between items-start">
<h3 className="font-manrope text-xl tracking-tight font-medium text-[#1C1712]">
                  Kuźnia Śmiałków
                </h3>
<span className="inline-flex px-2 py-1 bg-[#F2E9DA] text-[#6B6258] text-[11px] font-medium tracking-wide uppercase rounded-sm">
                  B2C
                </span>
</div>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8 flex-grow">
                Surowe, męskie wyprawy w dzikie miejsca. Przestrzeń na ciszę,
                fizyczny wysiłek i budowanie braterstwa.
              </p>
<a className="inline-flex items-center text-sm font-medium text-[#9C3D14] hover:text-[#E07B2E] transition-colors focus-ring rounded-sm w-fit" href="/wyprawy">
                Dowiedz się więcej
                <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#1C1712] relative py-20 lg:py-28 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 gradient-transform"></div>
<div className="max-w-[1200px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
<div className="max-w-[600px]">
<span className="font-manrope text-xs tracking-[0.18em] uppercase text-[#E6DCCB] font-medium mb-4 block opacity-80">
              Oferta dla firm
            </span>
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-white mb-6">
              Rozwój dla kadry i zespołów
            </h2>
<p className="text-base text-[#E6DCCB] font-light leading-[1.65] opacity-90">
              Złożone organizacje potrzebują zrównoważonych liderów. Projektuję
              i prowadzę programy rozwojowe, warsztaty i prelekcje z naciskiem
              na odporność psychiczną i regulację (szczególnie dla męskiej
              części załogi).
            </p>
</div>
<div>
<a className="inline-flex items-center justify-center bg-transparent border border-[#E6DCCB] text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-white hover:text-[#1C1712] transition-colors focus-ring" href="/oferta_dla_firm">
              Umów rozmowę o współpracy
            </a>
</div>
</div>
</section>

<section className="bg-[#FAF6EF] py-24 lg:py-32">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-[#1C1712] mb-16 text-center">
            Głosy z drogi
          </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col">
<iconify-icon className="text-3xl text-[#E6DCCB] mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#3A322A] font-light leading-[1.65] mb-8 flex-grow">
                "Praca z Michałem to nie jest kolejne szkolenie motywacyjne,
                które ulatuje po tygodniu. To proces odzyskiwania kontaktu z
                własnym ciałem i emocjami, który realnie przełożył się na moje
                decyzje w biznesie."
              </p>
<div>
<p className="font-medium text-sm text-[#1C1712]">Tomasz</p>
<p className="text-xs text-[#6B6258]">
                  Uczestnik Męskiego Poruszenia
                </p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col">
<iconify-icon className="text-3xl text-[#E6DCCB] mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#3A322A] font-light leading-[1.65] mb-8 flex-grow">
                "I_GO_SYSTEM dał mi wreszcie strukturę do tego, co czułam
                intuicyjnie. Zrozumiałam, jak bardzo mój umysł biegł przed
                ciałem. Po pół roku pracy wreszcie umiem odpoczywać bez poczucia
                winy."
              </p>
<div>
<p className="font-medium text-sm text-[#1C1712]">Anna K.</p>
<p className="text-xs text-[#6B6258]">Proces indywidualny</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-[#E6DCCB] shadow-[0px_1px_2px_rgba(28,23,18,0.06)] flex flex-col relative overflow-hidden group">
<div className="absolute inset-0 bg-[#F2E9DA]/50 flex items-center justify-center transition-colors group-hover:bg-[#F2E9DA]/70 cursor-pointer">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0px_8px_24px_rgba(28,23,18,0.08)]">
<iconify-icon className="text-2xl text-[#C8901F] ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="opacity-30 blur-sm pointer-events-none">
<iconify-icon className="text-3xl text-[#E6DCCB] mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-[#3A322A] font-light leading-[1.65] mb-8">
                  "Niesamowite doświadczenie z wyprawy..."
                </p>
</div>
<div className="mt-auto relative z-10 text-center w-full">
<p className="font-medium text-sm text-[#1C1712]">
                  Zobacz relację z Kuźni
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-b border-[#E6DCCB]">
<div className="max-w-[720px] mx-auto px-6 text-center flex flex-col items-center">
<h2 className="font-manrope text-3xl lg:text-4xl tracking-tight font-light text-[#1C1712] mb-6">
            Zacznij swój ruch do zmian
          </h2>
<p className="text-base text-[#6B6258] font-light mb-10 leading-[1.65]">
            Pierwszy krok jest często najtrudniejszy, ale nie musisz stawiać go
            w ciemno. Umówmy się na bezpłatną, wstępną konsultację, by
            sprawdzić, jaki kierunek będzie dla Ciebie najlepszy.
          </p>
<a className="inline-flex items-center justify-center bg-[#C8901F] text-[#1C1712] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring shadow-sm" href="/kontakt">
            Umów bezpłatną rozmowę
          </a>
</div>
</section>

<section className="bg-[#FAF6EF] py-24">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
<h2 className="font-manrope text-2xl lg:text-3xl tracking-tight font-light text-[#1C1712]">
              Najbliższe wydarzenia
            </h2>

<div className="flex flex-wrap gap-2 justify-center">
<button className="bg-[#C8901F] text-[#1C1712] px-4 py-2 rounded-full text-sm font-medium focus-ring transition-colors shadow-sm">
                Wszystko
              </button>
<button className="bg-[#F2E9DA] text-[#3A322A] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E6DCCB] focus-ring transition-colors">
                I_GO_SYSTEM
              </button>
<button className="bg-[#F2E9DA] text-[#3A322A] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#E6DCCB] focus-ring transition-colors">
                TRU MAN
              </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-[20px] p-6 border border-[#E6DCCB] shadow-[0px_8px_24px_rgba(28,23,18,0.08)] flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-[#A8761A] uppercase tracking-wider">
                  I_GO_SYSTEM
                </span>
<span className="text-xs text-[#6B6258] bg-[#FAF6EF] px-2 py-1 rounded-sm">
                  24-26 Mar
                </span>
</div>
<h3 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-2">
                Warsztat Architektura Ciała — Poziom I
              </h3>
<p className="text-sm text-[#6B6258] flex items-center gap-2 mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Warszawa, Studio Ruchu
              </p>
<a className="mt-auto w-full text-center border border-[#E6DCCB] text-[#1C1712] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#FAF6EF] transition-colors focus-ring" href="/zapisy">
                Zapisz się
              </a>
</div>

<div className="bg-white rounded-[20px] p-6 border border-[#E6DCCB] shadow-[0px_8px_24px_rgba(28,23,18,0.08)] flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-medium text-[#9C3D14] uppercase tracking-wider">
                  TRU MAN
                </span>
<span className="text-xs text-[#6B6258] bg-[#FAF6EF] px-2 py-1 rounded-sm">
                  12-16 Kwi
                </span>
</div>
<h3 className="font-manrope text-lg tracking-tight font-medium text-[#1C1712] mb-2">
                Kuźnia Śmiałków — Edycja Wiosenna
              </h3>
<p className="text-sm text-[#6B6258] flex items-center gap-2 mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                Bieszczady (Wyjazdowo)
              </p>
<a className="mt-auto w-full text-center border border-[#E6DCCB] text-[#1C1712] px-4 py-2.5 rounded-full text-sm font-medium hover:bg-[#FAF6EF] transition-colors focus-ring" href="/zapisy">
                Zapisz się
              </a>
</div>

<div className="bg-transparent rounded-[20px] p-6 border border-dashed border-[#E6DCCB] flex flex-col items-center justify-center text-center">
<iconify-icon className="text-3xl text-[#E6DCCB] mb-3" icon="solar:calendar-date-linear"></iconify-icon>
<p className="text-sm text-[#6B6258] font-light mb-4">
                Kolejne terminy w przygotowaniu.
              </p>
<a className="text-sm text-[#A8761A] font-medium hover:text-[#C8901F] focus-ring rounded-sm" href="#newsletter">
                Zapisz się, by wiedzieć pierwszy
              </a>
</div>
</div>
</div>
</section>

<section className="bg-white py-24" id="newsletter">
<div className="max-w-[540px] mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-[#C8901F] mb-6" icon="solar:letter-opened-linear"></iconify-icon>
<h2 className="font-manrope text-2xl lg:text-3xl tracking-tight font-light text-[#1C1712] mb-4">
            Zostań w kontakcie — poza social mediami
          </h2>
<p className="text-sm text-[#6B6258] font-light leading-[1.65] mb-8">
            Algorytmy tną zasięgi i promują hałas. Moje przemyślenia, terminy
            wypraw i narzędzia do samodzielnej pracy wysyłam wprost do Twojej
            skrzynki. Zero spamu.
          </p>
<form className="flex flex-col gap-4 mb-6 text-left">
<label className="sr-only" htmlFor="email-input">Adres e-mail</label>
<div className="relative">
<input className="w-full bg-white border border-[#E6DCCB] rounded-xl px-4 py-3.5 text-base text-[#1C1712] placeholder-[#6B6258] focus-ring shadow-[0px_1px_2px_rgba(28,23,18,0.06)]" id="email-input" placeholder="Twój adres e-mail" required="" type="email"/>
</div>
<button className="w-full bg-[#C8901F] text-[#1C1712] px-6 py-3.5 rounded-full text-sm font-medium hover:bg-[#A8761A] transition-colors focus-ring shadow-sm" type="submit">
              Zapisz się do społeczności
            </button>
</form>
<p className="text-xs text-[#6B6258] font-light">
            Dbam o Twoją prywatność. Możesz się wypisać w każdej chwili. Wolisz
            czytać w aplikacji? Znajdziesz mnie też na
            <a className="text-[#A8761A] hover:underline focus-ring rounded-sm" href="https://ruchdozmian.substack.com" rel="noopener noreferrer" target="_blank">
              Substacku
            </a>
            .
          </p>
</div>
</section>
</main>

<footer className="bg-white border-t border-[#E6DCCB] pt-16 pb-8">
<div className="max-w-[1200px] mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<span className="font-manrope text-base tracking-tight font-normal text-[#1C1712] block mb-1">
              RUCH
            </span>
<span className="font-manrope text-xs tracking-tight font-normal text-[#A8761A] block mb-6">
              DO ZMIAN
            </span>
<p className="text-sm text-[#6B6258] font-light leading-[1.65]">
              Poruszamy ludzi. Uruchamiamy zmianę.
              <br/>
              Michał Ratajski
            </p>
</div>
<div>
<h4 className="font-manrope text-sm font-medium text-[#1C1712] mb-4">
              Metody i oferta
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/metody">
                  I_GO_SYSTEM
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/meskie_poruszenie">
                  TRU MAN
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/oferta_dla_firm">
                  Dla firm (B2B)
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/architektura_ciala">
                  Architektura ciała
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/coaching_mentoring">
                  Coaching indywidualny
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-manrope text-sm font-medium text-[#1C1712] mb-4">
              Informacje
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/o-mnie">
                  O mnie
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/kalendarz">
                  Kalendarz wydarzeń
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/blog">
                  Blog / Substack
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light focus-ring rounded-sm" href="/kontakt">
                  Kontakt
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-manrope text-sm font-medium text-[#1C1712] mb-4">
              Społeczność
            </h4>
<ul className="space-y-3 mb-6">
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light flex items-center gap-2 focus-ring rounded-sm" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                  Substack
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light flex items-center gap-2 focus-ring rounded-sm" href="#">
<iconify-icon icon="solar:play-stream-linear"></iconify-icon>
                  YouTube
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light flex items-center gap-2 focus-ring rounded-sm" href="#">
<iconify-icon icon="solar:user-circle-linear"></iconify-icon>
                  LinkedIn
                </a>
</li>
<li>
<a className="text-sm text-[#6B6258] hover:text-[#A8761A] transition-colors font-light flex items-center gap-2 focus-ring rounded-sm" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
                  Instagram
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-[#E6DCCB] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#6B6258] font-light">
            © 2024 Ruch do Zmian — Michał Ratajski. Wszelkie prawa zastrzeżone.
            NIP: 0000000000.
          </p>
<div className="flex items-center gap-4 text-xs font-light">
<a className="text-[#6B6258] hover:text-[#A8761A] focus-ring rounded-sm" href="/polityka-prywatnosci">
              Polityka prywatności
            </a>
<a className="text-[#6B6258] hover:text-[#A8761A] focus-ring rounded-sm" href="/regulamin">
              Regulamin
            </a>
<span className="text-[#E6DCCB]">|</span>
<a className="text-[#6B6258] hover:text-[#A8761A] focus-ring rounded-sm" href="https://heartmade.pl" rel="noopener noreferrer" target="_blank">
              Vibe-coded by Heartmade
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
