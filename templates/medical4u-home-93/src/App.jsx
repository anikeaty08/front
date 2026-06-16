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
      

<header className="relative bg-[#dfd6d3] overflow-hidden">

<nav className="container mx-auto px-6 py-8 flex items-center justify-between relative z-20">
<div className="flex flex-col">
<span className="font-serif text-2xl md:text-3xl tracking-widest leading-none mb-1 uppercase flex items-center text-stone-200" id="brand-logo">
<svg className="drop-shadow-sm transition-transform hover:scale-105 duration-500 w-[234px] h-[36px]" data-icon-replaced="true" strokeWidth="2" style={{width: '234px', height: '36px', color: 'rgb(41, 37, 36)'}} viewbox="0 0 260 40" xmlns="http://www.w3.org/2000/svg">

<path className="" d="M20 2 C20 14 12 20 2 20 C12 20 20 26 20 38 C20 26 28 20 38 20 C28 20 20 14 20 2 Z" fill="#ad8c6f"></path>
<circle className="" cx="20" cy="20" fill="#ffffff" r="2.5"></circle>

<text className="" fill="currentColor" fontFamily="inherit" fontSize="22" font-weight="normal" letter-spacing="4" x="48" y="28">MEDICAL</text>
<text className="" fill="#ad8c6f" fontFamily="inherit" fontSize="26" font-style={{}} x="176" y="28">4</text>
<text className="" fill="currentColor" fontFamily="inherit" fontSize="22" font-weight="normal" letter-spacing="4" x="196" y="28">U</text>
</svg>
</span>
<span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase font-medium">
            Plastická chirurgie
          </span>
</div>
<div className="hidden md:flex items-center space-x-8 text-base tracking-widest uppercase font-normal text-stone-400">
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Úvod</a>
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Zákroky</a>
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Lékaři</a>
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Ceník</a>
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Před / Po</a>
<a className="relative hover:text-[#ad8c6f] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-[#ad8c6f] after:transition-all after:duration-300 hover:after:w-full" href="#">Kontakt</a>
</div>
<a className="hidden md:inline-flex relative overflow-hidden bg-[#ad8c6f]/90 hover:bg-[#ad8c6f] px-7 py-3 rounded-full text-xs font-medium uppercase tracking-widest transition-all group hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#ad8c6f]/30 duration-300 text-black" href="#">
          Objednat konzultaci
          <span className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent to-transparent skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%] via-black/40"></span>
</a>
<button className="md:hidden text-stone-200">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<div className="container md:pb-32 grid lg:grid-cols-2 z-10 mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="max-w-xl">
<h1 className="md:text-7xl lg:text-[5.5rem] leading-[1.1] text-6xl tracking-tight font-serif mb-8 text-stone-200" style={{fontFamily: '\'Playfair Display\', \'Cormorant Garamond\', Didot, \'Bodoni MT\', \'Times New Roman\', serif'}}>
  Probuďte svou
  <br/>
<span className="italic">přirozenou krásu.</span>
</h1>
<div className="w-12 h-[1px] mb-8 bg-stone-600"></div>
<p className="text-base md:text-lg mb-10 leading-relaxed font-extralight text-stone-400">
  Objevte dokonalou harmonii mezi vaším vnitřním pocitem a vnějším půvabem. Přinášíme prémiovou estetickou péči, ve které se špičková medicína snoubí s uměním jemně a s respektem podtrhnout vaši přirozenou krásu.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 relative overflow-hidden bg-[#ad8c6f] hover:bg-[#9a7b60] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ad8c6f]/40 duration-300 text-black" href="#">
              Objednat konzultaci
              <i className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent to-transparent skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%] via-black/40"></span>
</a>
<a className="inline-flex justify-center items-center gap-2 relative overflow-hidden border border-[#ad8c6f] hover:border-[#9a7b60] text-[#ad8c6f] hover:text-[#9a7b60] px-8 py-4 rounded-full text-xs font-normal uppercase tracking-widest transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ad8c6f]/40 duration-300" href="#">
  ZÁKROKY
  <i className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent via-[#ad8c6f]/30 to-transparent skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%]"></span>
</a>
</div>
</div>
<div className="relative w-full aspect-[4/5] lg:aspect-square">

<div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 bg-black">
<img alt="Žena" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</header>

<section className="bg-[#bdaea7] py-16 border-b text-black border-black/10">
<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-8 mr-auto ml-auto pr-6 pl-6 gap-x-10 gap-y-10">
<div className="flex gap-6 items-start">
<div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-full border bg-black/5 border-black/20 text-black/90">
<svg className="lucide lucide-shield-check w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="pt-1.5">
<h3 className="text-xl font-light tracking-tight mb-2 text-black">
        Bezpečnost na prvním místě
      </h3>
<p className="text-base font-extralight leading-relaxed text-black/70">
        Zkušený tým specialistů a moderní vybavení.
      </p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-full border bg-black/5 border-black/20 text-black/90">
<svg className="lucide lucide-user-round w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
</div>
<div className="pt-1.5">
<h3 className="text-xl font-light tracking-tight mb-2 text-black">
        Individuální přístup
      </h3>
<p className="text-base font-extralight leading-relaxed text-black/70">
        Každý zákrok plánujeme na míru vám.
      </p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-full border bg-black/5 border-black/20 text-black/90">
<svg className="lucide lucide-leaf w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="pt-1.5">
<h3 className="text-xl font-light tracking-tight mb-2 text-black">
        Přirozené výsledky
      </h3>
<p className="text-base font-extralight leading-relaxed text-black/70">
        Krása, která podtrhne vaši jedinečnost.
      </p>
</div>
</div>
<div className="flex items-start gap-6">
<div className="flex items-center justify-center shrink-0 w-16 h-16 rounded-full border bg-black/5 border-black/20 text-black/90">
<svg className="lucide lucide-heart w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div className="pt-1.5">
<h3 className="text-xl font-light tracking-tight mb-2 text-black">
        Diskrétnost a komfort
      </h3>
<p className="text-base font-extralight leading-relaxed text-black/70">
        Citlivý přístup a maximální soukromí.
      </p>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f3f1] py-24 lg:py-32">
<div className="container mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#ad8c6f] text-xs font-medium uppercase tracking-widest block mb-4">
            Naše oblasti
          </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-normal text-stone-200">
            Komplexní péče o vaši krásu
          </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="activity" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Prsní
              <br/>
              chirurgie
            </h3>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="scissors" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Liposukce
              <br/>
              a tvarování těla
            </h3>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="smile" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Operace
              <br/>
              obličeje
            </h3>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="syringe" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Neinvazivní
              <br/>
              procedury
            </h3>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="heart-handshake" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Rekonstrukční
              <br/>
              chirurgie
            </h3>
</div>
<div className="flex flex-col items-center text-center group cursor-pointer">
<div className="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-sm border group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300 bg-black border-stone-900">
<i className="w-12 h-12 text-[#ad8c6f]" data-lucide="flower-2" strokeWidth="1"></i>
</div>
<h3 className="text-base font-medium leading-snug text-stone-200">
              Intimní
              <br/>
              chirurgie
            </h3>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f3f1] py-12 pb-32">
<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="">
<span className="text-[#ad8c6f] text-xs font-medium uppercase tracking-widest block mb-4">
            O nás
          </span>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-normal mb-8 leading-tight text-stone-200">
            Spojujeme medicínu
            <br/>
            s estetikou
          </h2>
<p className="text-lg mb-10 leading-relaxed font-light text-stone-400">
            V Medical4U věříme, že skutečná krása vychází z harmonie těla i
            duše. Naším cílem je pomoci vám cítit se ve svém těle dobře a
            sebevědomě.
          </p>
<ul className="space-y-5 mb-12">
<li className="flex items-center gap-4">
<div className="rounded-full border border-[#ad8c6f] p-0.5 shrink-0">
<i className="w-3 h-3 text-[#ad8c6f]" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg font-light text-stone-300">
                Dlouholeté zkušenosti a špičková odbornost
              </span>
</li>
<li className="flex items-center gap-4">
<div className="rounded-full border border-[#ad8c6f] p-0.5 shrink-0">
<i className="w-3 h-3 text-[#ad8c6f]" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg font-light text-stone-300">
                Moderní technologie a šetrné metody
              </span>
</li>
<li className="flex items-center gap-4">
<div className="rounded-full border border-[#ad8c6f] p-0.5 shrink-0">
<i className="w-3 h-3 text-[#ad8c6f]" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg font-light text-stone-300">
                Individuální konzultace a plán péče
              </span>
</li>
<li className="flex items-center gap-4">
<div className="rounded-full border border-[#ad8c6f] p-0.5 shrink-0">
<i className="w-3 h-3 text-[#ad8c6f]" data-lucide="check" strokeWidth="2"></i>
</div>
<span className="text-lg font-light text-stone-300">
                Přátelský přístup a lidské zázemí
              </span>
</li>
</ul>
<a className="inline-flex items-center gap-2 bg-[#ad8c6f] hover:bg-[#9a7b60] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest transition-all text-black" href="#">
            Více o nás
            <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl">
<img alt="Interiér kliniky Medical4U" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-[#bdaea7] py-24 mt-auto text-black">
<div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 items-center">
<div className="flex gap-4">
<span className="font-serif text-6xl leading-none pt-2 text-black/40">
            "
          </span>
<h2 className="font-serif text-3xl lg:text-4xl tracking-tight leading-snug font-normal">
            Vaše cesta ke
            <br/>
            kráse začíná
            <br/>
            důvěrou.
          </h2>
</div>
<div className="flex flex-col items-start lg:items-center text-left lg:text-center">
<p className="text-lg font-light mb-8 max-w-sm text-black/90">
            Rezervujte si nezávaznou konzultaci s naším specialistou.
          </p>
<a className="inline-flex items-center gap-2 relative overflow-hidden bg-[#ad8c6f] hover:bg-[#9a7b60] px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest transition-all group hover:-translate-y-1 hover:shadow-xl hover:shadow-[#ad8c6f]/40 duration-300 text-black" href="#">
            Objednat konzultaci
            <i className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="absolute top-0 left-[-150%] w-[120%] h-full bg-gradient-to-r from-transparent to-transparent skew-x-[-25deg] transition-all duration-700 ease-out group-hover:left-[150%] via-black/40"></span>
</a>
</div>
<div className="hidden lg:flex items-baseline justify-end font-serif select-none uppercase tracking-widest text-[6rem] leading-none text-black/10">
          M
          <span className="text-[#ad8c6f]/20 italic mx-2 text-[7rem]">4</span>
          U
        </div>
</div>
</footer>


    </>
  );
}
