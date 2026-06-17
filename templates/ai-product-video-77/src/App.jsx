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
      

<nav className="fixed w-full z-50 glass-panel border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="uppercase text-sm font-medium tracking-tight text-white">
                AI Product Video Studio
            </div>
<a className="text-xs font-medium px-4 py-2 rounded-full transition-colors text-white bg-white/10 hover:bg-white/20" href="#kontakt">
                Wycena
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] blur-[120px] rounded-full pointer-events-none bg-indigo-600/20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="animate-fade-in opacity-0">
<h1 className="sm:text-4xl lg:text-5xl leading-tight text-3xl font-medium tracking-tight mb-6 text-white">Krótkie reklamy produktowe, rolki i avatary AI dla marek e-commerc</h1>
<p className="text-base mb-6 leading-relaxed max-w-xl text-neutral-400">
                    Tworzymy materiały wideo do social media dla firm, które mają produkt, ale potrzebują lepszych reklam, rolek i contentu do testowania komunikacji.
                </p>
<p className="leading-relaxed text-base max-w-xl mb-10 text-neutral-400">
                    AI wykorzystujemy jako narzędzie do szybszej produkcji wariantów, nie jako sztuczną ciekawostkę.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center hover:bg-indigo-500 transition-colors text-sm font-medium rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-lg shadow-indigo-900/20 text-white bg-indigo-600" href="#kontakt">Umów bezpłatną konsultację</a>
<a className="inline-flex justify-center items-center px-6 py-3 border text-sm font-medium rounded-xl transition-colors bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-white" href="#przyklady">
                        Zobacz przykłady materiałów
                    </a>
</div>
<p className="text-xs text-neutral-500 max-w-lg leading-relaxed">
                    Dla marek kosmetycznych, beauty, lifestyle, suplementów, akcesoriów i sklepów internetowych, które chcą pokazywać produkty w ciekawszy sposób bez dużej produkcji filmowej.
                </p>
</div>

<div className="hidden lg:block animate-fade-in stagger-2 opacity-0 h-[600px] relative">

<div className="absolute top-0 right-10 w-64 aspect-[9/16] glass-panel rounded-3xl p-2 transform rotate-6 hover:rotate-0 hover:z-30 transition-all duration-500 shadow-2xl">
<div className="w-full h-full rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border group bg-neutral-950 border-neutral-800/50">
<iconify-icon className="text-4xl group-hover:text-indigo-500 transition-colors text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md border text-white/90 bg-black/50 border-white/10">Avatar AI</span>
</div>
</div>
</div>

<div className="absolute top-12 right-40 w-64 aspect-[9/16] glass-panel rounded-3xl p-2 z-10 transform -rotate-3 hover:rotate-0 hover:z-30 transition-all duration-500 shadow-2xl">
<div className="w-full h-full rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border group bg-neutral-950 border-neutral-800/50">
<iconify-icon className="text-4xl group-hover:text-indigo-500 transition-colors text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md border text-white/90 bg-black/50 border-white/10">Rolka AI</span>
</div>
</div>
</div>

<div className="absolute top-24 right-72 w-64 aspect-[9/16] glass-panel rounded-3xl p-2 z-20 transform -rotate-12 hover:rotate-0 hover:z-30 transition-all duration-500 shadow-2xl">
<div className="overflow-hidden flex flex-col group w-full h-full border rounded-2xl relative items-center justify-center bg-neutral-950 border-neutral-800/50">
<iconify-icon className="group-hover:text-indigo-500 transition-colors text-4xl text-neutral-600" height="36" icon="solar:play-circle-linear" strokeWidth="1.5" style={{color: 'rgb(139, 92, 246)'}} width="36"></iconify-icon>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-md border text-white/90 bg-black/50 border-white/10">Reklama produktowa</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6 text-white">
                    Masz dobry produkt, ale brakuje Ci materiałów, które dobrze go pokazują?
                </h2>
<div className="text-sm space-y-4 leading-relaxed text-neutral-400">
<p className="">Wiele marek ma produkt, sprzedaż i sklep, ale ich social media albo reklamy nadal opierają się głównie na statycznych grafikach, przypadkowych postach albo materiałach robionych raz na jakiś czas.</p>
<p className="">Problem często nie leży w samym produkcie, tylko w tym, że trudno szybko przygotować różne formaty wideo: reklamę, rolkę, demo produktu, materiał edukacyjny albo prosty content z avatarem.</p>
<p>A bez takich materiałów trudniej testować komunikaty, prowadzić kampanie, regularnie publikować i sprawdzać, co faktycznie przyciąga uwagę klientów.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Brakuje regularnych materiałów wideo.</p>
</div>
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:gallery-remove-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Reklamy produktowe są mało kreatywne.</p>
</div>
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Social media wyglądają nieregularnie albo przypadkowo.</p>
</div>
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:lightbulb-cross-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Nie ma pomysłów na rolki i krótkie formaty.</p>
</div>
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Klasyczna produkcja wideo jest za droga albo za wolna.</p>
</div>
<div className="p-6 rounded-2xl glass-panel">
<iconify-icon className="text-xl mb-4 text-indigo-400" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm text-neutral-300">Zespół marketingu potrzebuje więcej wariantów do testowania.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t relative overflow-hidden border-white/5">
<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] blur-[100px] rounded-full pointer-events-none bg-indigo-600/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="max-w-2xl mb-12">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6 text-white">
                    Pomagamy przełożyć produkt na krótkie formaty wideo
                </h2>
<div className="text-sm space-y-4 leading-relaxed text-neutral-400">
<p>Tworzymy krótkie reklamy produktowe, rolki, materiały z avatarami AI i proste formaty organiczne, które można wykorzystać w social mediach, kampaniach reklamowych albo jako test różnych komunikatów.</p>
<p className="">Zamiast przygotowywać jeden materiał i liczyć, że zadziała, można stworzyć kilka wariantów: różne otwarcia, inne kąty pokazania produktu, inny styl komunikacji albo wersję z avatarem.</p>
<p className="">AI pomaga przyspieszyć ten proces, ale najważniejsze nadal są: dobry pomysł, jasny scenariusz, pokazanie produktu i dopasowanie formatu do celu.</p>
</div>
</div>
<div className="p-6 md:p-8 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 mb-12 max-w-3xl">
<p className="text-base font-medium leading-relaxed text-indigo-200">
                    Nie chodzi o robienie „filmików z AI”. Chodzi o tworzenie materiałów, które marka może realnie wykorzystać.
                </p>
</div>

<div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-medium text-neutral-300">
<div className="px-4 py-2 rounded-lg border bg-neutral-900 border-neutral-800">Produkt</div>
<iconify-icon className="text-neutral-600" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="px-4 py-2 rounded-lg border bg-neutral-900 border-neutral-800">Pomysł</div>
<iconify-icon className="text-neutral-600" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="px-4 py-2 rounded-lg border bg-neutral-900 border-neutral-800">Scenariusz</div>
<iconify-icon className="text-neutral-600" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="px-4 py-2 rounded-lg border border-indigo-500/30 bg-neutral-900 border-neutral-800 text-white">Materiał wideo</div>
<iconify-icon className="text-neutral-600" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<div className="px-4 py-2 rounded-lg border bg-neutral-900 border-neutral-800">Publikacja / test reklamy</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-12 text-white">
                Co możemy przygotować
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl glass-panel group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-indigo-400" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Reklamy produktowe AI do social media</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Krótkie materiały wideo pokazujące produkt w atrakcyjny sposób. Dobre do Meta Ads, TikToka, Instagrama, testów reklamowych i kampanii produktowych.<br/><br/>Mogą zawierać ujęcia produktu, teksty, napisy, voiceover, muzykę, proste demo albo kilka wariantów otwarcia reklamy.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-indigo-400" icon="solar:smartphone-rotate-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Krótkie rolki produktowe</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Materiały bardziej organiczne, które można publikować na Instagramie, TikToku, Facebooku albo YouTube Shorts.<br/><br/>Przykładowe formaty: pokazanie produktu, problem i rozwiązanie, sposób użycia, najczęstsze pytanie klienta, krótki poradnik albo porównanie.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-indigo-400" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Reklamy z avatarami AI</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Materiały, w których avatar prezentuje produkt, tłumaczy jego zalety albo prowadzi krótką reklamę.<br/><br/>To dobre rozwiązanie, gdy marka chce sprawdzić komunikację wideo bez ciągłego nagrywania ludzi przed kamerą.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:border-indigo-500/30 transition-colors">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-indigo-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Content organiczny z avatarami AI</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Krótkie materiały edukacyjne i informacyjne, które pomagają regularnie tłumaczyć produkt, odpowiadać na pytania klientów albo budować obecność marki w social mediach.<br/><br/>Dobre dla marek, które chcą publikować częściej, ale nie mają osoby, która regularnie nagrywa content.
                    </p>
</div>

<div className="p-8 rounded-2xl glass-panel group hover:border-indigo-500/30 transition-colors md:col-span-2 lg:col-span-1">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-lg text-indigo-400" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 text-white">Koncepcje i scenariusze do reklam oraz rolek</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                        Pomagamy wymyślić, jak pokazać produkt w krótkim formacie. Przygotowujemy proste pomysły, scenariusze i warianty komunikatów, które później można wykorzystać w reklamach lub contentcie organicznym.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-8 text-white">
                    Dla marek, które mają produkt i chcą lepiej pokazywać go w internecie
                </h2>
<ul className="flex flex-wrap gap-2 text-sm text-neutral-300">
<li className="px-4 py-2 rounded-full glass-panel border-white/10">marki kosmetyczne</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">sklepy e-commerce</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">produkty beauty i wellness</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">marki lifestyle</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">akcesoria</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">produkty premium</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">suplementy (ostrożna komunikacja)</li>
<li className="px-4 py-2 rounded-full glass-panel border-white/10">małe i średnie marki D2C</li>
<li className="px-4 py-2 rounded-full glass-panel border-indigo-500/20 bg-indigo-500/5 text-white">firmy, które mają sprzedaż, ale słabe wideo</li>
</ul>
</div>
<div className="glass-panel p-8 rounded-3xl">
<h3 className="text-lg font-medium tracking-tight mb-4 flex items-center gap-2 text-white">
<iconify-icon className="text-indigo-400" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Kiedy ta oferta ma sens?
                </h3>
<div className="text-sm space-y-4 leading-relaxed text-neutral-400">
<p>Ta oferta ma sens, jeśli masz już produkt, sklep albo stronę, podstawowe materiały produktowe i chcesz sprawdzić, jak Twoja marka może wyglądać w krótkich formatach wideo.</p>
<p>Nie musisz mieć dużego budżetu produkcyjnego ani gotowego planu na całą kampanię. Wystarczy produkt, kilka materiałów wejściowych i chęć przetestowania nowych formatów.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="przyklady">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-12">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6 text-white">
                    Przykłady koncepcyjne
                </h2>
<p className="text-sm leading-relaxed text-neutral-400">
                    Na tym etapie pokazujemy również materiały demonstracyjne, które powstały jako przykłady możliwości. Nie są to wszystkie realizacje komercyjne, ale pokazują style, formaty i kierunki, które można przygotować dla marek produktowych.<br/><br/>Przy każdym przykładzie znajdziesz informację, czy jest to materiał demo, koncepcja czy realizacja dla klienta.
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Reklama kosmetyku</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Przykładowy materiał dla marki kosmetycznej. Format: krótka reklama 15 sekund do social media. Cel: pokazanie produktu i przetestowanie prostego komunikatu reklamowego.
                    </p>
</div>

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Rolka produktowa</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Organiczny format na Instagram/TikTok. Format: 9:16. Cel: edukacja klienta o korzyściach i pokazanie zastosowania w codziennym użyciu.
                    </p>
</div>

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Avatar AI dla marki</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Prezentacja z wykorzystaniem avatara. Format: 9:16. Cel: przyciągnięcie uwagi w pierwszych 3 sekundach reklamy bez konieczności angażowania aktora.
                    </p>
</div>

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Demo produktu</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Zbliżenia na detale i tekstury. Format: 9:16. Cel: wizualne wyróżnienie produktu e-commerce z naciskiem na jakość wykonania.
                    </p>
</div>

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Reklama lifestyle</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Połączenie produktu z estetyką lifestyle. Format: 9:16. Cel: budowanie wizerunku marki akcesoriów w środowisku social mediów.
                    </p>
</div>

<div className="group">
<div className="w-full aspect-[9/16] rounded-2xl relative overflow-hidden flex flex-col items-center justify-center border mb-4 cursor-pointer bg-neutral-900 border-neutral-800">
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent z-10 from-black/80"></div>
<iconify-icon className="text-5xl group-hover:text-white group-hover:scale-110 transition-all duration-300 relative z-20 text-neutral-600" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute top-4 left-4 z-20">
<span className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm text-indigo-300 bg-indigo-900/40">Demo koncepcyjne</span>
</div>
</div>
<h3 className="text-sm font-medium mb-1 text-white">Materiał edukacyjny z avatarem</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        FAQ w formie wideo. Format: 9:16. Cel: odpowiedź na najczęstsze obiekcje klientów i wsparcie sprzedaży w lejku retargetingowym.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-16 text-center text-white">
                Jak wygląda współpraca
            </h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">1</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Krótki brief</h3>
<p className="text-xs leading-relaxed text-neutral-400">Na początku zbieramy informacje o produkcie, marce, grupie docelowej i celu materiałów. Sprawdzamy też, jakie zdjęcia, filmy albo materiały produktowe są dostępne.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">2</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Pomysły i formaty</h3>
<p className="text-xs leading-relaxed text-neutral-400">Na podstawie briefu przygotowujemy kierunek materiałów: reklama produktowa, rolka, avatar, demo produktu albo content organiczny.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">3</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Scenariusze</h3>
<p className="text-xs leading-relaxed text-neutral-400">Przygotowujemy proste scenariusze i komunikaty. Ustalamy, co ma zostać pokazane, jaki ma być ton materiału i gdzie później ma być wykorzystany.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">4</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Produkcja materiałów</h3>
<p className="text-xs leading-relaxed text-neutral-400">Tworzymy materiały z użyciem AI, montażu, napisów, voiceoveru, avatarów i elementów produktowych.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">5</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel group-hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Poprawki</h3>
<p className="text-xs leading-relaxed text-neutral-400">Po pierwszej wersji można zgłosić poprawki w ustalonym zakresie. Na tym etapie dopracowujemy tekst, tempo, ujęcia albo detale wizualne.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border text-neutral-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors z-10 border-neutral-800 bg-neutral-950">
<span className="text-xs font-medium">6</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass-panel border-indigo-500/20 bg-indigo-500/5 group-hover:border-indigo-500/40 transition-colors">
<h3 className="text-sm font-medium mb-2 text-white">Gotowe pliki</h3>
<p className="text-xs leading-relaxed text-indigo-200/80">Przekazujemy finalne materiały w formatach do social media, np. 9:16 lub 1:1, gotowe do publikacji albo przekazania osobie od reklam.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-4 text-white">
                    Proste pakiety na start
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 items-start">

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full border transition-colors border-neutral-800 hover:border-neutral-700">
<h3 className="text-lg font-medium mb-2 text-white">Test produktu</h3>
<p className="text-xs mb-6 min-h-[40px] text-neutral-400">Dla marki, która chce sprawdzić, jak jej produkt może wyglądać w krótkim formacie wideo.</p>
<ul className="space-y-3 mb-8 flex-grow text-sm text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>krótki brief</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>2-3 pomysły na materiał</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white">2 krótkie materiały wideo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>format 9:16</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>napisy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>1 tura poprawek</span>
</li>
</ul>
<div className="mb-6 pt-6 border-t border-neutral-800">
<p className="text-xs text-neutral-500 italic">Dobry wybór, jeśli chcesz zacząć od małego testu.</p>
</div>
<a className="block w-full py-3 text-center text-sm font-medium border rounded-xl transition-colors mt-auto text-white bg-neutral-900 hover:bg-neutral-800 border-neutral-700" href="#kontakt">
                        Zapytaj o pakiet testowy
                    </a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full border border-indigo-500/30 relative bg-indigo-900/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="text-[10px] uppercase tracking-wider font-medium px-3 py-1 rounded-full bg-indigo-600 text-white">Najpopularniejszy</span>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Mini kampania produktowa</h3>
<p className="text-xs mb-6 min-h-[40px] text-indigo-200/60">Dla marki, która chce dostać kilka różnych materiałów do social media albo testów reklamowych.</p>
<ul className="space-y-3 mb-8 flex-grow text-sm text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>brief i analizę produktu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white">4-6 krótkich materiałów</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>reklamy produktowe AI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>rolki produktowe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>1 materiał z avatarem AI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>kilka wariantów otwarcia reklamy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>napisy</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>formaty 9:16 i 1:1</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-indigo-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>krótką rekomendację użycia</span>
</li>
</ul>
<div className="mb-6 pt-6 border-t border-indigo-500/20">
<p className="text-xs italic text-indigo-300/80">Najlepszy pakiet, jeśli chcesz przetestować kilka kierunków komunikacji.</p>
</div>
<a className="block w-full py-3 text-center text-sm font-medium hover:bg-indigo-500 rounded-xl transition-colors mt-auto shadow-lg text-white bg-indigo-600 shadow-indigo-900/20" href="#kontakt">
                        Wyślij produkt do wyceny
                    </a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col h-full border transition-colors border-neutral-800 hover:border-neutral-700">
<h3 className="text-lg font-medium mb-2 text-white">Content video na miesiąc</h3>
<p className="text-xs mb-6 min-h-[40px] text-neutral-400">Dla marki, która chce regularnie publikować i mieć więcej materiałów do testowania.</p>
<ul className="space-y-3 mb-8 flex-grow text-sm text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-white">8-12 krótkich materiałów miesięcznie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>rolki produktowe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>reklamy produktowe AI</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>materiały z avatarem</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>proste scenariusze</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>napisy i adaptacje</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-base mt-0.5 shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>rekomendacje kolejnych formatów</span>
</li>
</ul>
<div className="mb-6 pt-6 border-t border-neutral-800">
<p className="text-xs text-neutral-500 italic">Dla firm, które chcą pracować regularnie, a nie tylko przygotować pojedynczy materiał.</p>
</div>
<a className="block w-full py-3 text-center text-sm font-medium border rounded-xl transition-colors mt-auto text-white bg-neutral-900 hover:bg-neutral-800 border-neutral-700" href="#kontakt">
                        Porozmawiajmy o współpracy
                    </a>
</div>
</div>
<div className="max-w-3xl mx-auto text-center">
<p className="text-xs text-neutral-500 leading-relaxed">
                    Zakres każdego pakietu można dopasować do produktu, branży i dostępnych materiałów. Przed rozpoczęciem pracy sprawdzamy, czy dany produkt faktycznie nadaje się do wybranego formatu AI.
                </p>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-10 text-white">
                Najczęstsze pytania
            </h2>
<div className="divide-y border-t divide-neutral-800/60 border-neutral-800/60">
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy AI zastępuje klasyczną produkcję wideo?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Nie zawsze. AI dobrze sprawdza się przy szybkich formatach, reklamach produktowych, avatarach, wariantach komunikatów i prostych materiałach do social media. Nie zastępuje każdej sesji zdjęciowej, planu filmowego ani materiałów, które muszą wyglądać w pełni naturalnie.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Jakie materiały muszę dostarczyć?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Najlepiej przygotować: link do sklepu lub strony, zdjęcia produktu, opis produktu, logo, kolory marki, przykłady reklam lub contentu, który Ci się podoba, oraz krótką informację, do kogo kierowany jest produkt.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy mogę zamówić materiał, jeśli mam tylko zdjęcia produktu?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Tak, często wystarczą dobre zdjęcia produktu i opis. Przed wyceną sprawdzamy jednak, czy jakość materiałów wejściowych pozwoli przygotować sensowny efekt.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy materiały będą gotowe do reklam?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Mogą być przygotowane w formatach odpowiednich do reklam i social media, np. 9:16, 1:1 albo 16:9. Nie gwarantujemy jednak konkretnych wyników kampanii, bo na sprzedaż wpływa też oferta, budżet, strona, targetowanie i obsługa klienta.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Ile trwa realizacja?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        To zależy od pakietu i liczby materiałów. Prosty pakiet testowy zwykle można przygotować szybciej niż większą paczkę contentu. Dokładny termin ustalamy po briefie i sprawdzeniu materiałów.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Ile poprawek obejmuje współpraca?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Standardowo pakiet obejmuje ustaloną liczbę tur poprawek, np. jedną albo dwie. Poprawki dotyczą dopracowania materiału, a nie całkowitej zmiany koncepcji po zatwierdzeniu kierunku.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy mogę wykorzystać materiały w reklamach i social mediach?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Tak, finalne materiały są przygotowywane z myślą o wykorzystaniu przez Twoją markę w social mediach, reklamach i komunikacji produktowej. Szczegóły praw i zakres wykorzystania ustalamy przed rozpoczęciem pracy.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy można stworzyć avatara na podstawie prawdziwej osoby?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Tak, ale tylko wtedy, gdy są jasne zgody tej osoby na wykorzystanie wizerunku. Przy avatarach i materiałach opartych o realny wizerunek trzeba zachować ostrożność i ustalić zakres użycia.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy każdy produkt nadaje się do AI video?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Nie. Niektóre produkty wyglądają bardzo dobrze w formatach AI, inne lepiej pokazać przez klasyczne nagranie, zdjęcia albo prostszy montaż. Jeśli AI nie będzie najlepszym rozwiązaniem, powiemy to przed rozpoczęciem pracy.
                    </div>
</details>
<details className="group py-5">
<summary className="flex justify-between items-center font-medium cursor-pointer text-sm transition-colors text-neutral-200 hover:text-white">
<span>Czy tworzycie też kampanie reklamowe?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-xs mt-3 leading-relaxed pr-8 text-neutral-400">
                        Na start skupiamy się głównie na materiałach wideo, reklamach produktowych, rolkach, avatarach i prostych koncepcjach. Kampanie reklamowe, pełna obsługa social media albo rozbudowane lejki mogą być osobnym zakresem, jeśli będzie taka potrzeba.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 border-t relative overflow-hidden border-white/5 bg-neutral-950" id="kontakt">

<div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2 bg-indigo-600/10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6 text-white">
                    Chcesz sprawdzić, jak Twój produkt może wyglądać w krótkim wideo?
                </h2>
<div className="text-sm space-y-4 leading-relaxed mb-10 text-neutral-400">
<p>Wyślij link do produktu, sklepu albo social mediów. Sprawdzimy, jaki format może mieć sens: reklama produktowa, rolka, materiał z avatarem albo prosty pakiet testowy.</p>
<p>Nie musisz mieć gotowego pomysłu. Wystarczy, że masz produkt i chcesz zobaczyć, jak można go pokazać w krótkim formacie wideo.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 hidden lg:flex opacity-50 pointer-events-none">
<button className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium rounded-xl bg-indigo-600 text-white">
                        Wyślij produkt do wyceny
                    </button>
<button className="inline-flex justify-center items-center px-6 py-3 border text-sm font-medium rounded-xl bg-neutral-900 border-neutral-800 text-white">
                        Zapytaj o pakiet testowy
                    </button>
</div>
</div>

<div className="glass-panel p-6 sm:p-8 rounded-3xl border border-neutral-800/80">
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Imię i nazwisko</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Firma / marka</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="Nazwa Twojej marki" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">E-mail</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="jan@twojamarka.pl" type="email"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Link do sklepu lub produktu</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="https://..." type="url"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Branża</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="np. Kosmetyki" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Jaki materiał Cię interesuje?</label>
<select className="custom-select w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all cursor-pointer bg-neutral-900/50 border-neutral-800 text-white">
<option className="text-neutral-500" disabled="" selected="" value="">Wybierz z listy...</option>
<option value="reklama">Reklama produktowa AI</option>
<option value="rolka">Rolka produktowa</option>
<option value="avatar">Avatar AI</option>
<option value="test">Pakiet testowy</option>
<option value="miesiac">Content video na miesiąc</option>
<option value="nie-wiem">Nie wiem, potrzebuję rekomendacji</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Czy masz zdjęcia lub filmy produktu?</label>
<select className="custom-select w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all cursor-pointer bg-neutral-900/50 border-neutral-800 text-white">
<option disabled="" selected="" value="">Wybierz opcję...</option>
<option value="tak">Tak</option>
<option value="nie">Nie</option>
<option value="czesciowo">Częściowo</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Krótki opis potrzeby (opcjonalnie)</label>
<textarea className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none bg-neutral-900/50 border-neutral-800 text-white" placeholder="Co chcesz osiągnąć?" rows="3"></textarea>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium ml-1 text-neutral-400">Orientacyjny budżet (opcjonalnie)</label>
<input className="w-full border rounded-xl px-4 py-3 text-sm placeholder-neutral-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all bg-neutral-900/50 border-neutral-800 text-white" placeholder="np. 2000 - 5000 PLN" type="text"/>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="custom-checkbox mt-0.5" type="checkbox"/>
<span className="text-xs leading-relaxed select-none group-hover:text-neutral-300 transition-colors text-neutral-400">
                                Wyrażam zgodę na przetwarzanie danych w celu obsługi zapytania. Spokojnie, to tylko do kontaktu.
                            </span>
</label>
</div>
<div className="pt-4">
<button className="w-full py-3.5 hover:bg-indigo-500 text-sm font-medium rounded-xl transition-colors shadow-lg bg-indigo-600 text-white shadow-indigo-900/20" type="submit">
                            Wyślij zapytanie
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t py-12 border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<div className="font-medium tracking-tight text-sm uppercase mb-4 text-white">
                        AI Product Video Studio
                    </div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
                        Krótkie reklamy produktowe, rolki i avatary AI dla marek e-commerce.
                    </p>
</div>
<div>
<h4 className="text-xs font-medium mb-4 uppercase tracking-wider text-white">Nawigacja</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors hover:text-indigo-400" href="#">Usługi</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#przyklady">Przykłady</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">Pakiety</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#">FAQ</a></li>
<li><a className="transition-colors hover:text-indigo-400" href="#kontakt">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium mb-4 uppercase tracking-wider text-white">Kontakt</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="transition-colors hover:text-indigo-400" href="mailto:hello@studio.pl">hello@studio.pl</a></li>
<li className="pt-2 flex gap-4">
<a aria-label="Instagram" className="text-neutral-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-neutral-500 transition-colors hover:text-white" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-white/5">
<p className="text-[10px] text-neutral-600">
                    © 2026 AI Product Video Studio. Wszelkie prawa zastrzeżone.
                </p>
<div className="flex gap-4 text-[10px] text-neutral-600">
<a className="transition-colors hover:text-neutral-400" href="#">Polityka prywatności</a>
<a className="transition-colors hover:text-neutral-400" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
