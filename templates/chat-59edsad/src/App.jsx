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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
<div className="absolute top-0 left-1/4 -translate-x-1/2 w-[800px] h-[600px] bg-amber-600/5 blur-[120px] rounded-full"></div>
<div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-amber-900/5 blur-[150px] rounded-full"></div>
</div>

<header className="w-full border-b border-amber-500/10 py-5 sm:py-6 relative z-10 bg-[#09090b]/90 backdrop-blur-xl sticky top-0">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex justify-between items-center">
<img alt="restauracja.ai" className="h-6 md:h-7 w-auto object-contain" src="https://i.postimg.cc/7ZhVYkDm/Untitled-design-113.png"/>
<nav className="hidden md:flex gap-10 text-base text-zinc-400 font-normal">
<a className="hover:text-amber-50 transition-colors" href="#menu">Menu</a>
<a className="hover:text-amber-50 transition-colors" href="#rezerwacje">
            Rezerwacje
          </a>
<a className="hover:text-amber-50 transition-colors" href="#wydarzenia">
            Wydarzenia
          </a>
<a className="hover:text-amber-50 transition-colors" href="#galeria">
            Galeria
          </a>
<a className="hover:text-amber-50 transition-colors" href="#kontakt">
            Kontakt
          </a>
</nav>
<button aria-label="Otwórz menu" className="md:hidden text-zinc-400 hover:text-amber-50 flex items-center justify-center p-2 -mr-2 active:scale-95 transition-transform">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="max-w-[1400px] mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 xl:grid-cols-2 gap-12 sm:gap-16 xl:gap-24 relative z-10">

<div className="flex flex-col gap-16 sm:gap-20">

<section className="flex flex-col gap-8 sm:gap-10">
<div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_0_40px_rgba(245,158,11,0.05)] group">
<img alt="Danie Premium" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-90 sm:opacity-80"></div>
</div>
<div className="flex flex-col items-center gap-5 sm:gap-6">
<h1 className="text-4xl md:text-5xl tracking-tight font-serif text-amber-50 text-center leading-tight">
              Przyszłość
              <br/>
              Smaku.
            </h1>
<p className="text-base sm:text-lg text-zinc-400 text-center max-w-md mx-auto font-normal">
              Podróż przez sztukę kulinarną, innowacyjne smaki i wyrafinowaną
              atmosferę, stworzona dla najbardziej wymagających.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
<button className="bg-amber-600/90 hover:bg-amber-500 text-zinc-950 px-8 py-3.5 sm:py-3 rounded-full font-medium transition-all w-full sm:w-auto text-base active:scale-95">
                Zarezerwuj Stolik
              </button>
<button className="border border-amber-600/50 text-amber-500 hover:bg-amber-600/10 px-8 py-3.5 sm:py-3 rounded-full font-medium transition-all w-full sm:w-auto text-base active:scale-95">
                Odkryj Menu
              </button>
</div>
</div>
</section>

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left">
            Polecane Menu
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 flex flex-row sm:flex-col gap-4 sm:gap-5 transition-colors active:bg-zinc-900/50">
<div className="relative rounded-xl overflow-hidden w-24 sm:w-full shrink-0 aspect-square border border-white/5">
<img alt="Przegrzebki" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-amber-200 text-amber-950 text-xs sm:text-sm font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-lg">
                  140 PLN
                </div>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-base sm:text-lg tracking-tight font-serif text-zinc-100 leading-snug mb-1 sm:mb-2 font-normal">
                  Przegrzebki z Risotto Szafranowym
                </h4>
<p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal hidden sm:block">
                  Delikatne przegrzebki serwowane na kremowym risotto z
                  dodatkiem najwyższej jakości szafranu.
                </p>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 flex flex-row sm:flex-col gap-4 sm:gap-5 transition-colors active:bg-zinc-900/50">
<div className="relative rounded-xl overflow-hidden w-24 sm:w-full shrink-0 aspect-square border border-white/5">
<img alt="Makaron z Truflami" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-amber-200 text-amber-950 text-xs sm:text-sm font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-lg">
                  95 PLN
                </div>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-base sm:text-lg tracking-tight font-serif text-zinc-100 leading-snug mb-1 sm:mb-2 font-normal">
                  Makaron z Truflami i Grzybami
                </h4>
<p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal hidden sm:block">
                  Ręcznie robiony makaron z esencją truflową i selekcją dzikich
                  grzybów leśnych.
                </p>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 flex flex-row sm:flex-col gap-4 sm:gap-5 transition-colors active:bg-zinc-900/50">
<div className="relative rounded-xl overflow-hidden w-24 sm:w-full shrink-0 aspect-square border border-white/5">
<img alt="Jagnięcina" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-amber-200 text-amber-950 text-xs sm:text-sm font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shadow-lg">
                  160 PLN
                </div>
</div>
<div className="flex flex-col justify-center">
<h4 className="text-base sm:text-lg tracking-tight font-serif text-zinc-100 leading-snug mb-1 sm:mb-2 font-normal">
                  Duszona Gicz Jagnięca
                </h4>
<p className="text-sm sm:text-base text-zinc-500 leading-relaxed font-normal hidden sm:block">
                  Wolno duszona jagnięcina z kremową polentą i redukcją z
                  czerwonego wina.
                </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left">
            Dania Premium
          </h2>
<div className="relative bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 sm:p-6 overflow-hidden transition-colors group cursor-pointer active:bg-zinc-900/50">
<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden mb-4 sm:mb-6 border border-white/5">
<img alt="Danie Premium" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl sm:text-2xl tracking-tight font-serif text-zinc-100 mb-2 sm:mb-3 font-normal">
              Wielki Półmisek Owoców Morza
            </h3>
<p className="text-sm sm:text-base text-zinc-500 font-normal">
              Zanurz się w luksusie dzięki starannie wyselekcjonowanym owocom
              morza, przygotowanym z najwyższą dbałością o każdy detal, by
              dostarczyć niezapomnianych wrażeń.
            </p>
</div>
</section>
</div>

<div className="flex flex-col gap-16 sm:gap-20">

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left mt-0 xl:mt-4">
            Popularne Dania
          </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 transition-colors">
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/5">
<img alt="Burgery Wagyu" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-base sm:text-lg font-serif text-zinc-100 font-normal pr-2">
                  Mini Burgery Wagyu
                </h4>
<span className="text-sm sm:text-base text-amber-500 font-medium whitespace-nowrap">
                  120 PLN
                </span>
</div>
<div className="flex justify-between items-center mt-auto">
<div className="flex gap-0.5 sm:gap-1">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="flex gap-2">
<iconify-icon className="text-red-500" height="18" icon="solar:fire-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 transition-colors">
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/5">
<img alt="Makaron z Homarem" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-base sm:text-lg font-serif text-zinc-100 font-normal pr-2">
                  Makaron z Serem i Homarem
                </h4>
<span className="text-sm sm:text-base text-amber-500 font-medium whitespace-nowrap">
                  110 PLN
                </span>
</div>
<div className="flex justify-between items-center mt-auto">
<div className="flex gap-0.5 sm:gap-1">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="flex gap-2">
<iconify-icon className="text-green-500" height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 transition-colors">
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/5">
<img alt="Sałatka z Burakiem" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-base sm:text-lg font-serif text-zinc-100 font-normal pr-2">
                  Sałatka z Burakiem i Serem
                </h4>
<span className="text-sm sm:text-base text-amber-500 font-medium whitespace-nowrap">
                  65 PLN
                </span>
</div>
<div className="flex justify-between items-center mt-auto">
<div className="flex gap-0.5 sm:gap-1">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="flex gap-2">
<iconify-icon className="text-green-500" height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
<iconify-icon className="text-red-500" height="18" icon="solar:fire-linear" width="18"></iconify-icon>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl p-4 sm:p-5 flex flex-col gap-4 transition-colors">
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-white/5">
<img alt="Ciastko Lava" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-base sm:text-lg font-serif text-zinc-100 font-normal pr-2">
                  Czekoladowe Ciastko Lava
                </h4>
<span className="text-sm sm:text-base text-amber-500 font-medium whitespace-nowrap">
                  55 PLN
                </span>
</div>
<div className="flex justify-between items-center mt-auto">
<div className="flex gap-0.5 sm:gap-1">
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-amber-500" height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<div className="flex gap-2">
<iconify-icon className="text-green-500" height="18" icon="solar:leaf-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left">
            Specjalności Szefa
          </h2>
<div className="flex flex-col gap-5 sm:gap-6">

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl flex flex-col sm:flex-row overflow-hidden transition-colors group cursor-pointer active:bg-zinc-900/50">
<div className="p-6 sm:p-8 sm:w-1/2 flex flex-col justify-center order-2 sm:order-1 z-10 bg-gradient-to-t sm:bg-gradient-to-r from-[#09090b] sm:from-transparent via-zinc-950/20 to-zinc-950/50 -mt-10 sm:mt-0 relative rounded-t-2xl sm:rounded-t-none">
<h4 className="text-lg sm:text-xl tracking-tight font-serif text-zinc-100 mb-2 sm:mb-3 font-normal">
                  Menu Degustacyjne AI
                </h4>
<p className="text-sm sm:text-base text-zinc-500 font-normal">
                  Eksperymentalna fuzja smaków wykreowana we współpracy
                  sztucznej inteligencji i naszego Szefa Kuchni.
                </p>
</div>
<div className="sm:w-1/2 h-56 sm:h-auto order-1 sm:order-2 overflow-hidden relative sm:border-l border-white/5">
<img alt="Menu Degustacyjne" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="bg-zinc-900/30 border border-amber-500/10 hover:border-amber-500/30 rounded-2xl flex flex-col sm:flex-row overflow-hidden transition-colors group cursor-pointer active:bg-zinc-900/50">
<div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden relative sm:border-r border-white/5">
<img alt="Omakase" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 sm:p-8 sm:w-1/2 flex flex-col justify-center z-10 bg-gradient-to-t sm:bg-gradient-to-l from-[#09090b] sm:from-transparent via-zinc-950/20 to-zinc-950/50 -mt-10 sm:mt-0 relative rounded-t-2xl sm:rounded-t-none">
<h4 className="text-lg sm:text-xl tracking-tight font-serif text-zinc-100 mb-2 sm:mb-3 font-normal">
                  Autorskie Omakase
                </h4>
<p className="text-sm sm:text-base text-zinc-500 font-normal">
                  Konsekwentnie selekcjonowane nigiri, nowocześnie podane z
                  zastosowaniem współczesnych technik i elegancji.
                </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left">
            Galeria Wnętrz
          </h2>
<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-amber-500/10 hover:border-amber-500/30 transition-colors">
<img alt="Wnętrze Restauracji" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-amber-500/10 hover:border-amber-500/30 transition-colors">
<img alt="Nakrycie Stołu" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-amber-500/10 hover:border-amber-500/30 transition-colors">
<img alt="Wino" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="rounded-xl overflow-hidden aspect-[4/3] border border-amber-500/10 hover:border-amber-500/30 transition-colors">
<img alt="Koktajle" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</section>

<section className="flex flex-col gap-8 sm:gap-10">
<h2 className="text-2xl tracking-tight font-serif text-amber-50 text-center xl:text-left">
            Opinie Gości
          </h2>
<div className="flex justify-center xl:justify-start">
<div className="flex flex-col sm:flex-row items-center bg-zinc-900/30 border border-amber-500/10 rounded-3xl sm:rounded-full py-4 sm:py-3 px-6 gap-4 sm:gap-6 transition-colors hover:border-amber-500/30">
<div className="flex -space-x-4">
<img alt="Klient" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-950 object-cover shadow-sm" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="Klient" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-950 object-cover shadow-sm" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="Klient" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-950 object-cover shadow-sm" src="https://randomuser.me/api/portraits/men/46.jpg"/>
<div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-zinc-950 bg-amber-900/50 flex items-center justify-center text-amber-100 text-xs sm:text-sm font-medium">
                  +8k
                </div>
</div>
<div className="flex flex-col items-center sm:items-start">
<div className="flex gap-1 mb-1">
<iconify-icon className="text-amber-500" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-500" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-500" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-500" height="14" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-500" height="14" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<span className="text-xs sm:text-sm text-zinc-400 font-normal">
                  Uwielbiane przez naszych gości
                </span>
</div>
</div>
</div>
</section>
</div>
</main>

    </>
  );
}
