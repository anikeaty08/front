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



      setTimeout(() => {
          const el = document.getElementById('cinematic-video-section');
          if(el && window.IntersectionObserver) {
              const observer = new IntersectionObserver((entries) => {
                  if(entries[0].isIntersecting) {
                      el.classList.remove('opacity-0', 'translate-y-8');
                      observer.disconnect();
                  }
              }, { threshold: 0.15 });
              observer.observe(el);
          } else if(el) {
              el.classList.remove('opacity-0', 'translate-y-8');
          }
      }, 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center">
<a className="font-['Playfair_Display',_serif] text-xl md:text-2xl tracking-tighter text-white uppercase flex items-center" href="#">
        Bankowski
      </a>
<div className="hidden md:flex gap-10 text-sm font-normal tracking-wide text-gray-300">
<a className="hover:text-[#C9A84C] transition-colors duration-300" href="#">
          Inwestycje
        </a>
<a className="hover:text-[#C9A84C] transition-colors duration-300" href="#">
          O nas
        </a>
<a className="hover:text-[#C9A84C] transition-colors duration-300" href="#">
          Aktualności
        </a>
<a className="hover:text-[#C9A84C] transition-colors duration-300" href="#">
          Kontakt
        </a>
</div>
<div className="hidden md:block">
<a className="text-sm font-medium hover:text-[#C9A84C] transition-colors flex items-center gap-2" href="tel:+48220000000">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
          +48 22 000 00 00
        </a>
</div>
<button className="md:hidden text-white hover:text-[#C9A84C] transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</nav>

<section className="relative h-screen min-h-[600px] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Apartment Architecture" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2075&amp;q=80" style={{objectPosition: 'center 30%'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/40 to-[#0A1628]"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto mt-16 md:mt-0 w-full">
<h1 className="font-['Playfair_Display',_serif] text-4xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight mb-6">
          Bankowski Development
          <br/>
<span className="text-[#C9A84C] text-3xl md:text-5xl lg:text-6xl mt-4 block italic font-light">
            Prestiżowe apartamenty
          </span>
</h1>
<p className="text-gray-300 text-base md:text-lg lg:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Kształtujemy przestrzeń miejską, tworząc unikalne miejsca do życia.
          Poznaj nowy wymiar luksusu.
        </p>
</div>
</section>

<div className="relative z-20 -mt-20 md:-mt-28 px-4 max-w-5xl mx-auto w-full">
<div className="bg-[#11213A]/95 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-sm shadow-2xl flex flex-col md:flex-row gap-6 items-end">
<div className="w-full md:w-1/3 flex flex-col gap-3">
<label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Lokalizacja
          </label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-base font-light focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none cursor-pointer rounded-none">
<option className="text-gray-500" disabled="" selected="" value="">
                Wybierz miasto
              </option>
<option className="bg-[#0A1628] text-white py-2" value="warszawa">
                Warszawa
              </option>
<option className="bg-[#0A1628] text-white py-2" value="gdansk">
                Gdańsk
              </option>
<option className="bg-[#0A1628] text-white py-2" value="krakow">
                Kraków
              </option>
</select>
<iconify-icon className="absolute right-0 top-1 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-3">
<label className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Liczba pokoi
          </label>
<div className="relative">
<select className="w-full bg-transparent border-b border-white/20 pb-3 text-white text-base font-light focus:outline-none focus:border-[#C9A84C] transition-colors appearance-none cursor-pointer rounded-none">
<option className="text-gray-500" disabled="" selected="" value="">
                Dowolna
              </option>
<option className="bg-[#0A1628] text-white" value="1">
                1 - 2 pokoje
              </option>
<option className="bg-[#0A1628] text-white" value="2">
                3 - 4 pokoje
              </option>
<option className="bg-[#0A1628] text-white" value="3">
                5+ pokoi / Penthouse
              </option>
</select>
<iconify-icon className="absolute right-0 top-1 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-full md:w-1/3 flex flex-col gap-2 pt-4 md:pt-0">
<button className="w-full bg-[#C9A84C] text-[#0A1628] border border-[#C9A84C] px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-transparent hover:text-[#C9A84C] transition-all duration-300 flex justify-center items-center gap-2">
            Szukaj apartamentu
            <iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="relative w-full h-[60vh] md:h-[75vh] min-h-[450px] flex items-center justify-center overflow-hidden mt-16 md:mt-24 opacity-0 translate-y-8 transition-all duration-[1500ms] ease-out" id="cinematic-video-section">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-building-a-house-time-lapse-1249-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[#0A1628]/40"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A1628] via-transparent to-[#0A1628] opacity-100"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl lg:text-6xl text-[#C9A84C] font-light tracking-tight italic">
          Od fundamentów do marzeń
        </h2>
</div>
</section>

<section className="py-24 border-b border-white/5 relative z-10 bg-[#0A1628]">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="pt-8 md:pt-0 flex flex-col items-center">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl text-[#C9A84C] mb-4 font-normal tracking-tight">
            15
          </div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Lat na rynku
          </div>
</div>
<div className="pt-16 md:pt-0 flex flex-col items-center">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl text-[#C9A84C] mb-4 font-normal tracking-tight">
            20
          </div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Zrealizowanych inwestycji
          </div>
</div>
<div className="pt-16 md:pt-0 flex flex-col items-center">
<div className="font-['Playfair_Display',_serif] text-5xl md:text-6xl text-[#C9A84C] mb-4 font-normal tracking-tight">
            3000+
          </div>
<div className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            Wybudowanych mieszkań
          </div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto bg-[#0A1628]">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div className="max-w-2xl">
<div className="flex items-center gap-4 mb-4">
<div className="h-[1px] w-8 bg-[#C9A84C]"></div>
<span className="text-[#C9A84C] text-xs uppercase tracking-widest font-medium">
              Portfolio
            </span>
</div>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl tracking-tight leading-tight">
            Wybrane inwestycje
          </h2>
</div>
<a className="hidden md:flex items-center gap-3 text-white text-sm font-medium uppercase tracking-widest hover:text-[#C9A84C] transition-colors group" href="#">
          Zobacz wszystkie
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

<a className="group relative overflow-hidden rounded-sm block aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] bg-[#11213A]" href="#">
<img alt="Villa Nova" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent opacity-90"></div>
<div className="absolute top-6 left-6">
<span className="bg-[#C9A84C] text-[#0A1628] text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-sm">
              W sprzedaży
            </span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
<div>
<div className="text-gray-300 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                Warszawa, Mokotów
              </div>
<h3 className="font-['Playfair_Display',_serif] text-3xl md:text-4xl tracking-tight text-white mb-2 group-hover:text-[#C9A84C] transition-colors duration-500">
                Villa Nova
              </h3>
</div>
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-[#0A1628] transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
</a>

<a className="group relative overflow-hidden rounded-sm block aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] bg-[#11213A]" href="#">
<img alt="Baltic Marina" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent opacity-90"></div>
<div className="absolute top-6 left-6">
<span className="bg-white/10 backdrop-blur-md text-white border border-white/20 text-xs font-medium uppercase tracking-widest px-3 py-1.5 rounded-sm">
              Przedsprzedaż
            </span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex justify-between items-end">
<div>
<div className="text-gray-300 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                Gdańsk, Śródmieście
              </div>
<h3 className="font-['Playfair_Display',_serif] text-3xl md:text-4xl tracking-tight text-white mb-2 group-hover:text-[#C9A84C] transition-colors duration-500">
                Baltic Marina
              </h3>
</div>
<div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-[#C9A84C] group-hover:border-[#C9A84C] group-hover:text-[#0A1628] transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
</div>
</a>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-3 text-[#C9A84C] text-sm font-medium uppercase tracking-widest hover:text-white transition-colors" href="#">
          Zobacz wszystkie projekty
          <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-32 bg-[#050A14] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-5/12 relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#C9A84C]/10 to-transparent opacity-50 rounded-sm"></div>
<img alt="Corporate Architecture" className="relative w-full aspect-[4/5] object-cover rounded-sm shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="w-full lg:w-7/12">
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] w-8 bg-[#C9A84C]"></div>
<span className="text-[#C9A84C] text-xs uppercase tracking-widest font-medium">
              O firmie
            </span>
</div>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-10 leading-tight">
            Kreujemy przestrzeń
            <br/>
<span className="text-white/70 italic font-light">z myślą o Tobie</span>
</h2>
<div className="space-y-6 text-gray-400 font-light text-base md:text-lg leading-relaxed max-w-2xl">
<p>
              Bankowski Development to synonim najwyższej jakości i
              bezkompromisowego podejścia do architektury. Od ponad dekady
              kształtujemy krajobraz polskich miast, tworząc inwestycje, które
              stają się nowymi ikonami miejskiej przestrzeni.
            </p>
<p>
              Nasza filozofia opiera się na harmonijnym łączeniu nowoczesnego
              designu z poszanowaniem dla otoczenia i historii miejsca.
              Wybieramy wyłącznie najbardziej prestiżowe lokalizacje, a do
              współpracy zapraszamy wybitnych architektów oraz cenionych
              projektantów wnętrz.
            </p>
</div>
<div className="mt-12 flex flex-col sm:flex-row gap-6">
<a className="inline-flex justify-center items-center gap-3 bg-white text-[#0A1628] px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-[#C9A84C] transition-colors duration-300" href="#">
              Czytaj więcej
            </a>
<a className="inline-flex justify-center items-center gap-3 border border-white/20 text-white px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:border-white transition-colors duration-300" href="#">
              Pobierz katalog
              <iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="py-32 bg-[#0A1628] border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
<div className="w-full md:w-1/2">
<div className="flex items-center gap-4 mb-4">
<div className="h-[1px] w-8 bg-[#C9A84C]"></div>
<span className="text-[#C9A84C] text-xs uppercase tracking-widest font-medium">
              Kontakt ws. inwestycji
            </span>
</div>
<h2 className="font-['Playfair_Display',_serif] text-4xl md:text-5xl tracking-tight leading-tight mb-8">
            Biuro obsługi
          </h2>
<p className="text-gray-300 text-base md:text-lg font-light mb-12 max-w-xl leading-relaxed">
            Z przyjemnością odpowiemy na wszelkie pytania dotyczące naszych
            inwestycji oraz przeprowadzimy Państwa przez cały proces wyboru i
            zakupu prestiżowego apartamentu.
          </p>
<div className="bg-[#11213A]/95 border border-white/10 p-8 rounded-sm shadow-2xl">
<h3 className="font-['Playfair_Display',_serif] text-3xl text-white mb-2">
              Maja Bańkowska
            </h3>
<p className="text-[#C9A84C] text-sm uppercase tracking-widest font-medium mb-8">
              Ekspert ds. Inwestycji
            </p>
<div className="space-y-5">
<a className="flex items-center gap-4 text-gray-300 hover:text-[#C9A84C] transition-colors group" href="tel:+48500000000">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A84C] transition-all">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<span className="font-light text-lg">+48 500 000 000</span>
</a>
<a className="flex items-center gap-4 text-gray-300 hover:text-[#C9A84C] transition-colors group" href="mailto:m.bankowska@bankowski.pl">
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A84C] transition-all">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="font-light text-lg">m.bankowska@bankowski.pl</span>
</a>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute -inset-4 bg-gradient-to-bl from-[#C9A84C]/10 to-transparent opacity-50 rounded-sm"></div>
<img alt="Maja Bańkowska - Biuro Obsługi" className="relative w-full aspect-[4/5] object-cover object-center rounded-sm shadow-2xl z-10 grayscale hover:grayscale-0 transition-all duration-1000" src="https://i.postimg.cc/rmnZZS7b/MJ-054.jpg"/>
</div>
</div>
</section>

<footer className="bg-[#0A1628] pt-24 pb-10 px-6 border-t border-white/10 relative overflow-hidden">

<div className="absolute -right-20 -bottom-20 text-[200px] font-['Playfair_Display',_serif] text-white/[0.02] tracking-tighter pointer-events-none select-none uppercase">
        Bankowski
      </div>
<div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4">
<a className="font-['Playfair_Display',_serif] text-2xl tracking-tighter text-white mb-6 block uppercase" href="#">
            Bankowski
          </a>
<p className="text-gray-400 text-sm font-light leading-relaxed mb-8 max-w-xs">
            Ekskluzywne apartamenty i inwestycje premium w najlepszych
            lokalizacjach dla najbardziej wymagających klientów.
          </p>
<div className="flex gap-5">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-300" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all duration-300" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-3 lg:col-start-6">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">
            Nawigacja
          </h4>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li>
<a className="hover:text-[#C9A84C] transition-colors flex items-center gap-2 w-max group" href="#">
<span className="w-0 h-[1px] bg-[#C9A84C] group-hover:w-3 transition-all"></span>
                Inwestycje w sprzedaży
              </a>
</li>
<li>
<a className="hover:text-[#C9A84C] transition-colors flex items-center gap-2 w-max group" href="#">
<span className="w-0 h-[1px] bg-[#C9A84C] group-hover:w-3 transition-all"></span>
                Planowane projekty
              </a>
</li>
<li>
<a className="hover:text-[#C9A84C] transition-colors flex items-center gap-2 w-max group" href="#">
<span className="w-0 h-[1px] bg-[#C9A84C] group-hover:w-3 transition-all"></span>
                O firmie
              </a>
</li>
<li>
<a className="hover:text-[#C9A84C] transition-colors flex items-center gap-2 w-max group" href="#">
<span className="w-0 h-[1px] bg-[#C9A84C] group-hover:w-3 transition-all"></span>
                Kontakt
              </a>
</li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">
            Informacje
          </h4>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                Dla inwestorów
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Kariera</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Biuro prasowe
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                Polityka prywatności
              </a>
</li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">
            Biuro Sprzedaży
          </h4>
<address className="not-italic text-sm text-gray-400 font-light space-y-4">
<p className="flex items-start gap-3">
<iconify-icon className="text-gray-500 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
              ul. Złota 44, 00-120 Warszawa
            </p>
<p className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+48220000000">
                +48 22 000 00 00
              </a>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-gray-500" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-[#C9A84C] transition-colors" href="mailto:kontakt@bankowski.pl">
                kontakt@bankowski.pl
              </a>
</p>
</address>
</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
<div>© 2024 Bankowski Development. Wszelkie prawa zastrzeżone.</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
            Regulamin serwisu
          </a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full z-50 bg-transparent md:bg-[#11213A]/95 md:backdrop-blur-md md:border-t md:border-white/10 p-4 md:py-5 md:px-6 pointer-events-none">
<div className="max-w-7xl mx-auto flex justify-center items-center gap-8 pointer-events-auto">
<span className="hidden md:inline-block text-white font-['Playfair_Display',_serif] text-2xl tracking-tight">
          Umów się na rozmowę
        </span>
<button className="w-full md:w-auto bg-[#C9A84C] text-[#0A1628] border border-[#C9A84C] px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-[#0A1628] hover:text-[#C9A84C] transition-all duration-300 shadow-2xl md:shadow-none" onclick="document.getElementById('booking-modal').classList.remove('hidden');">
          Zarezerwuj termin
        </button>
</div>
</div>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-[#0A1628]/90 backdrop-blur-sm" onclick="document.getElementById('booking-modal').classList.add('hidden');"></div>
<div className="relative bg-[#11213A] border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl w-full max-w-md">
<button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" onclick="document.getElementById('booking-modal').classList.add('hidden');" type="button">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<div className="flex items-center gap-3 mb-3">
<div className="h-[1px] w-6 bg-[#C9A84C]"></div>
<span className="text-[#C9A84C] text-xs uppercase tracking-widest font-medium">
            Formularz
          </span>
</div>
<h3 className="font-['Playfair_Display',_serif] text-3xl md:text-4xl text-white mb-8 tracking-tight">
          Zarezerwuj termin
        </h3>
<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('booking-modal').classList.add('hidden');">
<div>
<label className="block text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
              Imię
            </label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-base font-light focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none placeholder-white/20" placeholder="Twoje imię" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
              E-mail
            </label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-base font-light focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none placeholder-white/20" placeholder="Twój adres e-mail" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-gray-400 uppercase tracking-widest font-medium mb-2">
              Numer telefonu
            </label>
<input className="w-full bg-transparent border-b border-white/20 pb-2 text-white text-base font-light focus:outline-none focus:border-[#C9A84C] transition-colors rounded-none placeholder-white/20" placeholder="+48 000 000 000" required="" type="tel"/>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 border border-white/20 rounded-sm group-hover:border-[#C9A84C] transition-colors shrink-0">
<input className="peer appearance-none absolute inset-0 cursor-pointer m-0 p-0 w-full h-full opacity-0" required="" type="checkbox"/>
<iconify-icon className="text-[#C9A84C] opacity-0 peer-checked:opacity-100 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xs text-gray-400 font-light leading-relaxed">
                Wyrażam zgodę na przetwarzanie danych osobowych w celach
                marketingowych.
              </span>
</label>
</div>
<div className="pt-4">
<button className="w-full bg-[#C9A84C] text-[#0A1628] border border-[#C9A84C] px-8 py-3.5 rounded-sm text-sm font-medium uppercase tracking-widest hover:bg-transparent hover:text-[#C9A84C] transition-all duration-300" type="submit">
              Zarezerwuj termin
            </button>
</div>
</form>
</div>
</div>

    </>
  );
}
