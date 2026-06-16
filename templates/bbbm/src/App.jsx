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
      

<div className="bg-grain"></div>

<div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E1E5F2] rounded-full mix-blend-multiply filter blur-[120px] animate-breathe"></div>
<div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-[#F5E6DF] rounded-full mix-blend-multiply filter blur-[120px] animate-breathe-delay"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[#E6EFEA] rounded-full mix-blend-multiply filter blur-[150px] animate-breathe"></div>
</div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="relative w-10 h-10 flex items-center justify-center group" href="#">
<div className="absolute w-5 h-5 border border-zinc-800 rounded-full -translate-x-1.5 -translate-y-1 group-hover:border-zinc-500 transition-colors duration-500"></div>
<div className="absolute w-5 h-5 border border-zinc-800 rounded-full translate-x-1.5 -translate-y-1 group-hover:border-zinc-500 transition-colors duration-500"></div>
<div className="absolute w-5 h-5 border border-zinc-800 rounded-full translate-y-1.5 group-hover:border-zinc-500 transition-colors duration-500"></div>
</a>

<div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
<span className="text-xs tracking-[0.2em] uppercase font-medium text-zinc-800 opacity-90">
            Better Body Better Mind
          </span>
</div>

<div className="flex items-center gap-8">
<a className="text-xs tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors hidden md:block" href="#states">
            Metodologia
          </a>
<a className="text-xs tracking-wide text-zinc-500 hover:text-zinc-900 transition-colors hidden md:block" href="#labs">
            Laboratoria
          </a>
<button className="flex items-center gap-2 text-xs tracking-wide font-medium bg-white/50 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full hover:bg-white/80 transition-all">
<span>Doświadcz</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/30 backdrop-blur-sm mb-12 animate-float">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-800 animate-pulse-slow"></div>
<span className="text-xs tracking-wide text-zinc-600 font-medium">
            Laboratorium Wydajności i Dobrostanu Człowieka
          </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-zinc-900 leading-[1.1] mb-8">
          Twój układ nerwowy
          <br/>
<span className="italic text-zinc-500">słucha.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 font-light max-w-2xl leading-relaxed mb-16">
          Żyjemy w epoce ciągłego napięcia. Nasze ciała pamiętają wszystko, a
          nasze umysły tkwią w pętlach. Czas zwolnić, połączyć się na nowo i
          wypracować prawdziwy stan równowagi.
        </p>
<div className="flex flex-col items-center gap-4">
<span className="text-xs uppercase tracking-widest text-zinc-400">
            Weź oddech
          </span>
<div className="w-[1px] h-16 bg-gradient-to-b from-zinc-300 to-transparent"></div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="states">
<div className="max-w-7xl mx-auto">
<div className="mb-20 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-serif tracking-tight text-zinc-900 mb-6">
              Współczesny
              <span className="italic text-zinc-500">stan</span>
</h2>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
              Zrozumienie, gdzie się znajdujesz, to pierwszy krok. Funkcjonujemy
              w trybie przetrwania, myląc adrenalinę z energią, a izolację z
              niezależnością.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#F5E6DF] rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:bolt-circle-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
              Przeciążenie
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
              Dominacja układu współczulnego. Przewlekły stres, płytki oddech i
              niezdolność do prawdziwego odłączenia się.
            </p>
<div className="text-xs font-medium text-zinc-400 tracking-wide">
              Układ Nerwowy
            </div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#E1E5F2] rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:battery-charge-minimalistic-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
              Wyczerpanie
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
              Fizyczne i komórkowe wyczerpanie. Opieranie funkcjonowania na
              stymulantach, zaburzona architektura snu i przedłużające się
              zmęczenie.
            </p>
<div className="text-xs font-medium text-zinc-400 tracking-wide">
              Ciało Somatyczne
            </div>
</div>

<div className="group relative p-8 rounded-3xl bg-white/40 border border-white/60 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#E6EFEA] rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-3xl text-zinc-400 mb-6" icon="solar:nodes-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
              Odłączenie
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
              Emocjonalne odrętwienie i dystans w relacjach. Obecność fizyczna,
              ale nieobecność psychiczna. Utrata poczucia wspólnoty.
            </p>
<div className="text-xs font-medium text-zinc-400 tracking-wide">
              Emocje i Społeczność
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 text-zinc-50 relative z-10 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-zinc-800 rounded-full mix-blend-screen filter blur-[200px] opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<span className="text-xs tracking-widest uppercase text-zinc-500 mb-4 block">
            Proces
          </span>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6">
            Oparty na nauce powrót do
            <span className="italic text-zinc-400">siebie.</span>
</h2>
</div>

<div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-4 no-scrollbar overflow-x-auto pb-12">

<div className="hidden md:block absolute top-6 left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-center md:w-48 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-400 group-hover:bg-zinc-800 transition-all duration-300">
<span className="text-xs font-serif italic text-zinc-400">01</span>
</div>
<h4 className="text-sm font-medium tracking-wide mb-2 text-center">
              Nauka
            </h4>
<p className="text-xs text-zinc-500 text-center font-light leading-relaxed">
              Zrozumienie neuronauki stojącej za zmianami stanu.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center md:w-48 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-400 group-hover:bg-zinc-800 transition-all duration-300">
<span className="text-xs font-serif italic text-zinc-400">02</span>
</div>
<h4 className="text-sm font-medium tracking-wide mb-2 text-center">
              Soma
            </h4>
<p className="text-xs text-zinc-500 text-center font-light leading-relaxed">
              Regulacja oddolna poprzez ciało i oddech.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center md:w-48 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-400 group-hover:bg-[#F5E6DF]/20 transition-all duration-300">
<span className="text-xs font-serif italic text-zinc-400">03</span>
</div>
<h4 className="text-sm font-medium tracking-wide mb-2 text-center">
              Emocje
            </h4>
<p className="text-xs text-zinc-500 text-center font-light leading-relaxed">
              Przetwarzanie i uwalnianie nagromadzonej energii kinetycznej.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center md:w-48 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-400 group-hover:bg-[#E1E5F2]/20 transition-all duration-300">
<span className="text-xs font-serif italic text-zinc-400">04</span>
</div>
<h4 className="text-sm font-medium tracking-wide mb-2 text-center">
              Połączenie
            </h4>
<p className="text-xs text-zinc-500 text-center font-light leading-relaxed">
              Współregulacja poprzez wspólne ludzkie doświadczenia.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center md:w-48 shrink-0 group">
<div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-6 group-hover:border-zinc-400 group-hover:bg-white text-zinc-400 group-hover:text-zinc-900 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
<span className="text-xs font-serif italic">05</span>
</div>
<h4 className="text-sm font-medium tracking-wide mb-2 text-center">
              Integracja
            </h4>
<p className="text-xs text-zinc-500 text-center font-light leading-relaxed">
              Ucieleśnienie nowej równowagi w codziennym życiu.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="labs">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
<h2 className="text-3xl md:text-5xl font-serif tracking-tight text-zinc-900">
            Programy i
            <br/>
<span className="italic text-zinc-500">Doświadczenia</span>
</h2>
<div className="flex gap-4">
<button className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
              Indywidualne
            </button>
<button className="px-5 py-2.5 rounded-full text-xs font-medium tracking-wide bg-white border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors">
              Dla firm
            </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group relative rounded-[2rem] bg-white border border-zinc-100 p-10 overflow-hidden flex flex-col justify-between min-h-[400px] hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#E1E5F2]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-widest font-medium mb-8">
                Program Podstawowy
              </div>
<h3 className="text-3xl font-serif tracking-tight text-zinc-900 mb-4">
                Better Body
              </h3>
<p className="text-sm text-zinc-500 font-light max-w-sm leading-relaxed mb-8">
                Protokoły somatyczne służące rozładowaniu napięcia,
                optymalizacji HRV i odbudowie energii na poziomie komórkowym.
                Nie trenujemy mięśni, trenujemy układ nerwowy.
              </p>
</div>
<div className="relative z-10 flex items-center justify-between border-t border-zinc-100 pt-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:lungs-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
</div>
<a className="text-xs font-medium tracking-wide text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Odkryj Protokół
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group relative rounded-[2rem] bg-white border border-zinc-100 p-10 overflow-hidden flex flex-col justify-between min-h-[400px] hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent via-transparent to-[#F5E6DF]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-widest font-medium mb-8">
                Program Poznawczy
              </div>
<h3 className="text-3xl font-serif tracking-tight text-zinc-900 mb-4">
                Better Mind
              </h3>
<p className="text-sm text-zinc-500 font-light max-w-sm leading-relaxed mb-8">
                Narzędzia wykorzystujące neuroplastyczność, ramy przetwarzania
                emocjonalnego i zarządzanie uwagą, aby pozbyć się mgły mózgowej
                i budować odporność poznawczą.
              </p>
</div>
<div className="relative z-10 flex items-center justify-between border-t border-zinc-100 pt-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:brain-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center">
<iconify-icon className="text-zinc-500 text-xs" icon="solar:eye-linear"></iconify-icon>
</div>
</div>
<a className="text-xs font-medium tracking-wide text-zinc-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                Odkryj Protokół
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group rounded-3xl bg-[#EBE9F5]/40 border border-[#EBE9F5] p-8 flex items-center gap-6 hover:bg-[#EBE9F5]/60 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-zinc-800">
<iconify-icon className="text-2xl" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Doświadczenie Społecznościowe
                </div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">
                  Wieczorne Wyciszenie
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Sesje po pracy ułatwiające przejście od trybu przetrwania do
                  stanu spoczynku.
                </p>
</div>
</div>

<div className="group rounded-3xl bg-[#E6EFEA]/40 border border-[#E6EFEA] p-8 flex items-center gap-6 hover:bg-[#E6EFEA]/60 transition-colors cursor-pointer">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm text-zinc-800">
<iconify-icon className="text-2xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">
                  Doświadczenie Społecznościowe
                </div>
<h4 className="text-lg font-medium tracking-tight text-zinc-900 mb-1">
                  Śniadaniowy Klub Dobrostanu
                </h4>
<p className="text-xs text-zinc-500 font-light">
                  Poranne spotkania skupione na wyznaczaniu intencji i budowaniu
                  prawdziwych relacji.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-zinc-200/60 bg-white/30 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="text-3xl font-serif tracking-tight text-zinc-900">
            Nasz
            <span className="italic text-zinc-500">Dziennik</span>
</h2>
<a className="text-xs font-medium tracking-wide text-zinc-900 border-b border-zinc-900 pb-1" href="#">
            Zobacz wszystkie badania
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<article className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-2xl bg-zinc-100 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#E1E5F2]/50 to-transparent mix-blend-multiply group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<iconify-icon className="text-6xl text-zinc-800" icon="solar:dna-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
<span>Neuronauka</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>5 min czytania</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
              Mit "zaciskania zębów": Dlaczego nerw błędny dyktuje twoją
              wydajność.
            </h3>
</article>

<article className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-2xl bg-zinc-100 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F5E6DF]/50 to-transparent mix-blend-multiply group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<iconify-icon className="text-6xl text-zinc-800" icon="solar:water-drop-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
<span>Soma</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>8 min czytania</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
              Doświadczanie somatyczne: Uwalnianie traumy zapisanej w sieci
              powięziowej.
            </h3>
</article>

<article className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-2xl bg-zinc-100 mb-6 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#E6EFEA]/50 to-transparent mix-blend-multiply group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<iconify-icon className="text-6xl text-zinc-800" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-zinc-400 mb-3">
<span>Połączenie</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>4 min czytania</span>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
              Współregulacja: Dlaczego biologicznie potrzebujemy siebie
              nawzajem, aby zdrowieć.
            </h3>
</article>
</div>
</div>
</section>

<footer className="pt-32 pb-12 px-6 border-t border-zinc-200 relative z-10 bg-[#FAF9F6]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
<div className="md:col-span-2">

<div className="relative w-8 h-8 flex items-center justify-center mb-6 opacity-60">
<div className="absolute w-4 h-4 border border-zinc-800 rounded-full -translate-x-1 -translate-y-1"></div>
<div className="absolute w-4 h-4 border border-zinc-800 rounded-full translate-x-1 -translate-y-1"></div>
<div className="absolute w-4 h-4 border border-zinc-800 rounded-full translate-y-1"></div>
</div>
<h4 className="text-sm tracking-[0.1em] uppercase font-medium text-zinc-900 mb-4">
              Better Body Better Mind
            </h4>
<p className="text-xs text-zinc-500 font-light max-w-xs leading-relaxed">
              Laboratorium wydajności i dobrostanu człowieka. Integrujemy naukę,
              somę i emocje, by stworzyć nową jakość życia.
            </p>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
              Odkrywaj
            </h5>
<ul className="space-y-3">
<li>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                  Metodologia
                </a>
</li>
<li>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                  Programy
                </a>
</li>
<li>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                  Doświadczenia
                </a>
</li>
<li>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors" href="#">
                  Dla firm
                </a>
</li>
</ul>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-6">
              Dołącz do Laboratorium
            </h5>
<p className="text-xs text-zinc-500 font-light mb-4">
              Badania, artykuły i zaproszenia na kameralne wydarzenia.
            </p>
<form className="flex items-center border-b border-zinc-300 pb-2">
<input className="w-full bg-transparent text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-0" placeholder="Adres e-mail" type="email"/>
<button className="text-zinc-900 hover:text-zinc-600 transition-colors" type="button">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200/60">
<p className="text-[10px] text-zinc-400 tracking-wide mb-4 md:mb-0">
            © 2024 Better Body Better Mind. Wszelkie prawa zastrzeżone.
          </p>
<div className="flex gap-6">
<a className="text-[10px] text-zinc-400 hover:text-zinc-800 transition-colors" href="#">
              Instagram
            </a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-800 transition-colors" href="#">
              LinkedIn
            </a>
<a className="text-[10px] text-zinc-400 hover:text-zinc-800 transition-colors" href="#">
              Polityka prywatności
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
