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
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-[#262626]/80 backdrop-blur-xl border-b border-[#a2b5b1]/10">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full bg-[#4ec3a6] flex items-center justify-center text-[#262626] transition-transform duration-300 group-hover:scale-105">
<i className="w-6 h-6" data-lucide="bird" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-white font-light tracking-[0.1em] text-lg">
              FIZJO
            </span>
<span className="text-white font-extralight tracking-[0.15em] text-xl">
              KOLIBER
            </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors duration-200" href="#omnie">
            O mnie
          </a>
<a className="hover:text-white transition-colors duration-200" href="#wspolpraca">
            Współpraca
          </a>
<a className="hover:text-white transition-colors duration-200" href="#oferta">
            Oferta
          </a>
<a className="hover:text-white transition-colors duration-200" href="#cennik">
            Cennik
          </a>
<a className="px-5 py-2 rounded-full border border-[#4ec3a6]/30 text-white hover:bg-[#4ec3a6] hover:text-[#262626] transition-all duration-300" href="#kontakt">
            Kontakt
          </a>
</div>

<button className="md:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-[linear-gradient(135deg,rgba(78,195,166,0.12)_0%,rgba(38,38,38,0)_100%)]">
<div className="absolute inset-0 z-0 pointer-events-none">
<img alt="Delikatny masaż dłońmi" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#262626]/30 via-[#262626]/80 to-[#262626]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<span className="text-[#4ec3a6] font-light tracking-widest text-sm uppercase mb-6 px-4 py-1.5 rounded-full border border-[#4ec3a6]/20 bg-[#4ec3a6]/5 backdrop-blur-sm">
            Skuteczność
          </span>
<h1 className="text-5xl md:text-7xl font-extralight text-white tracking-tight mb-6 leading-[1.1]">
            FizjoKOliber
          </h1>
<p className="text-2xl md:text-3xl text-[#a2b5b1] font-light tracking-tight mb-8">
            dobroć dla ciała, umysłu i ducha
          </p>
<p className="text-lg md:text-xl text-[#a2b5b1]/80 font-light max-w-2xl mb-12 leading-relaxed">
            Skutecznie pomagam w samopoczuciu, samoświadomości i jakości życia —
            łącząc ciało, umysł i to, co dla Ciebie może być duchowością lub po
            prostu mądrością życia.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#4ec3a6] text-[#262626] font-medium rounded-full py-4 px-8 text-base transition-transform duration-300 hover:scale-105 flex items-center justify-center gap-2" href="#kontakt">
              Umów wizytę
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-transparent border border-[#4ec3a6] text-white font-light rounded-full py-4 px-8 text-base transition-colors duration-300 hover:bg-[#4ec3a6]/10 text-center" href="#oferta">
              Zobacz ofertę
            </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#4ec3a6]/5 rounded-full blur-[120px] pointer-events-none"></div>
</section>

<section className="py-24 relative z-20 -mt-12" id="sciezki">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group block p-8 rounded-2xl bg-[#404040]/40 backdrop-blur-xl border border-[#4ec3a6]/10 hover:border-[#4ec3a6]/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden" href="#oferta-cialo">
<div className="absolute inset-0 bg-gradient-to-br from-[#4ec3a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-full bg-[#262626] border border-[#a2b5b1]/10 flex items-center justify-center mb-6 text-[#4ec3a6]">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-light text-white tracking-tight mb-4">
                Ciało i sprawność
              </h3>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed">
                Fizjoterapia, terapia manualna, blizny, haczykowanie, praca po
                urazach i operacjach, sport, profilaktyka.
              </p>
</a>

<a className="group block p-8 rounded-2xl bg-[#404040]/40 backdrop-blur-xl border border-[#4ec3a6]/10 hover:border-[#4ec3a6]/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden" href="#oferta-masaze">
<div className="absolute inset-0 bg-gradient-to-br from-[#4ec3a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-full bg-[#262626] border border-[#a2b5b1]/10 flex items-center justify-center mb-6 text-[#4ec3a6]">
<i className="w-6 h-6" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-light text-white tracking-tight mb-4">
                Regeneracja i spokój
              </h3>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed">
                Masaże relaksacyjne, Lomi Lomi Nui, rozluźnienie układu
                nerwowego, ulga w przemęczeniu i przebodźcowaniu.
              </p>
</a>

<a className="group block p-8 rounded-2xl bg-[#404040]/40 backdrop-blur-xl border border-[#4ec3a6]/10 hover:border-[#4ec3a6]/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden" href="#oferta-duch">
<div className="absolute inset-0 bg-gradient-to-br from-[#4ec3a6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-full bg-[#262626] border border-[#a2b5b1]/10 flex items-center justify-center mb-6 text-[#4ec3a6]">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-light text-white tracking-tight mb-4 flex items-center gap-2">
                Umysł i duch
              </h3>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed">
                Reiki, tarot, odczyty, masaż energetyczny, diagnostyka
                energetyczna — zawsze po rozmowie i Twojej zgody.
              </p>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-[#a2b5b1]/5 relative" id="omnie">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-8">
                O mnie
              </h2>
<div className="text-base text-[#a2b5b1] font-light space-y-6 leading-relaxed">
<p>
                  Nazywam się
                  <strong className="text-white font-medium">
                    Katarzyna Olszewska
                  </strong>
                  i od lat z fascynacją wędruję po świecie ludzkiego ciała,
                  umysłu i tego, co „nieuchwytne” – dla jednych duchowości, dla
                  innych po prostu mądrości życia.
                </p>
<p>
                  Z wykształcenia jestem fizjoterapeutką, trenerem przygotowania
                  motorycznego i terapeutą wodnym. Uzyskałam również tytuł
                  doktora, pogłębiając naukową stronę mojej praktyki.
                </p>
<p>
                  Od zawsze wierzę – i sprawdzam to na sobie – że człowiek jest
                  zbiorem naczyń połączonych. Każdą osobę traktuję indywidualnie
                  – z uważnością na to, co mówi ciało i czego potrzebuje
                  psychika w danym momencie. Tworzę przestrzeń, w której możesz
                  poczuć się swobodnie, bezpiecznie i zaopiekowanie.
                </p>
<p>
                  Na co dzień, w zależności od potrzeby pracuję metodami
                  fizjoterapeutycznymi i manualnymi, w podejściu holistycznym
                  oraz metodami naturalnymi takimi jak ziołolecznictwo czy
                  Reiki. Zawsze poprzedzam to rozmową, wyjaśnieniem i Twoją
                  świadomą zgodą.
                </p>
<p>
                  Łączę świat współczesnej nauki z medycyną korzenioną w naturze
                  i obserwacji — dla mnie to uzupełnienie pracy z ciałem, nie
                  magia, lecz mądrość, którą dziś umiemy coraz lepiej rozumieć.
                </p>
</div>
<blockquote className="border-l-2 border-[#4ec3a6] pl-6 py-2 mt-10">
<p className="text-xl text-white/90 font-light italic leading-relaxed tracking-tight">
                  Najlepszą miarą dobrej terapii jest to, że moi klienci
                  pojawiają się u mnie jak najrzadziej — odzyskują sprawczość,
                  zdrowie i nawyki, które pozwalają żyć lekko i świadomie.
                </p>
</blockquote>
</div>
<div className="relative">
<div className="aspect-[3/4] rounded-2xl bg-[#404040]/30 border border-[#a2b5b1]/10 overflow-hidden relative group">

<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(38,38,38,0.8))] z-10 pointer-events-none"></div>
<img alt="Woman Holding Glowing Salt Crystal in Black and White" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f27e1059-c62d-42e7-9d1b-e49f2795b6bb_800w.jpg"/>
</div>

<div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full border border-[#4ec3a6]/20 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a]" id="wspolpraca">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-12">
            Jak wygląda współpraca ze mną?
          </h2>
<p className="text-lg text-[#a2b5b1] font-light leading-relaxed mb-10">
            Każdą osobę traktuję indywidualnie i holistycznie – z uważnością na
            to, co mówi ciało, czego potrzebujesz teraz, z uwzględnieniem
            psychiki. Na tej podstawie dobieram narzędzia do dobrostanu.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
<div className="p-8 rounded-2xl bg-[#262626] border border-[#a2b5b1]/5">
<div className="w-10 h-10 rounded-full bg-[#404040] flex items-center justify-center mb-6 text-[#a2b5b1]">
<i className="w-5 h-5" data-lucide="anchor" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl text-white font-light mb-3">
                Mocno i przyziemnie
              </h4>
<p className="text-base text-[#a2b5b1]/80 font-light leading-relaxed">
                Mobilizując, haczykując, przywracając sprawność. Zajmuję się
                urazami i stanami pooperacyjnymi, profilaktyką i sportowcami.
              </p>
</div>
<div className="p-8 rounded-2xl bg-[#262626] border border-[#a2b5b1]/5">
<div className="w-10 h-10 rounded-full bg-[#404040] flex items-center justify-center mb-6 text-[#4ec3a6]">
<i className="w-5 h-5" data-lucide="feather" strokeWidth="1.5"></i>
</div>
<h4 className="text-xl text-white font-light mb-3">
                Holistycznie i miękko
              </h4>
<p className="text-base text-[#a2b5b1]/80 font-light leading-relaxed">
                Wspierając regulację układu nerwowego i napięć głębszych niż
                mięśnie. Regeneracja osób przemęczonych, szukających spokoju.
              </p>
</div>
</div>
<div className="inline-flex flex-wrap justify-center gap-4 text-sm font-light text-[#a2b5b1]">
<span className="px-4 py-2 rounded-full border border-[#a2b5b1]/20 flex items-center gap-2">
<i className="w-4 h-4 text-[#4ec3a6]" data-lucide="check" strokeWidth="2"></i>
              Terapia blizn (własne badania)
            </span>
<span className="px-4 py-2 rounded-full border border-[#a2b5b1]/20 flex items-center gap-2">
<i className="w-4 h-4 text-[#4ec3a6]" data-lucide="check" strokeWidth="2"></i>
              Haczykowanie
            </span>
<span className="px-4 py-2 rounded-full border border-[#a2b5b1]/20 flex items-center gap-2">
<i className="w-4 h-4 text-[#4ec3a6]" data-lucide="check" strokeWidth="2"></i>
              Psychosomatyczne tło pracy
            </span>
</div>
</div>
</section>

<section className="py-24 border-t border-[#a2b5b1]/5" id="oferta">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-6">
              Oferta
            </h2>
<p className="text-lg text-[#a2b5b1] font-light max-w-2xl mx-auto">
              Przestrzeń, w której łączę precyzję nauki z łagodnością sztuki
              uzdrawiania.
            </p>
</div>

<div className="mb-24" id="oferta-masaze">
<div className="flex items-center gap-4 mb-10">
<h3 className="text-3xl font-extralight text-white tracking-tight">
                Rytuały i masaże
              </h3>
<div className="h-px bg-[#a2b5b1]/20 flex-grow"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="col-span-1 md:col-span-3 p-8 md:p-10 rounded-2xl bg-[#404040]/20 border border-[#a2b5b1]/10 backdrop-blur-md">
<h4 className="text-2xl text-white font-light tracking-tight mb-4 text-[#4ec3a6]">
                  Masaż Lomi Lomi Nui (hawajski)
                </h4>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed max-w-4xl">
                  Masaż Lomi Lomi Nui to dłuższa, głęboko relaksująca podróż,
                  podczas której ciało otulane jest płynnymi, rytmicznymi
                  ruchami wykonywanymi głównie przedramionami terapeuty. Kontakt
                  z ciałem jest praktycznie nieprzerwany, tworząc poczucie
                  bezpieczeństwa i pełnego zanurzenia w chwili. Intensywność
                  dopasowuje się do Twojej tkanki — zabieg jest harmonijny i
                  naturalny. Rytuał uwalniający napięcia i wprowadzający w
                  głęboki spokój.
                </p>
</div>
<div className="p-8 rounded-2xl bg-[#404040]/10 border border-[#a2b5b1]/5">
<h4 className="text-xl text-white font-light tracking-tight mb-3">
                  Masaż relaksacyjny
                </h4>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed">
                  Delikatne odprężenie i ukojenie — płynne, miękkie ruchy na
                  powierzchownych warstwach tkanek. Wyciszenie układu nerwowego,
                  redukcja stresu, chwila lekkości.
                </p>
</div>
<div className="p-8 rounded-2xl bg-[#404040]/10 border border-[#a2b5b1]/5 md:col-span-2">
<h4 className="text-xl text-white font-light tracking-tight mb-3">
                  Masaż głęboki
                </h4>
<p className="text-base text-[#a2b5b1] font-light leading-relaxed">
                  Dla osób potrzebujących intensywniejszego bodźca — praca na
                  głębszych strukturach, rozluźnienie chronicznych napięć,
                  lepsza mobilność. Wyraźna ulga i więcej przestrzeni w ciele.
                </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div id="oferta-cialo">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-3xl font-extralight text-white tracking-tight">
                  Ciało (Fizjoterapia)
                </h3>
<div className="h-px bg-[#a2b5b1]/20 flex-grow"></div>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] mt-0.5 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<div>
<span className="text-white font-light text-lg block mb-1">
                      Fizjoterapia
                    </span>
<span className="text-sm text-[#a2b5b1] font-light">
                      Wizyta pierwsza 60 min, kolejne 50 min
                    </span>
</div>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Terapia manualna
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Terapia blizn
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Masaż leczniczy / tensegracyjny
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Fizjoterapia — haczykowanie / taping
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#a2b5b1] shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-[#a2b5b1] font-light text-lg">
                    Terapia wodna (ustalana indywidualnie)
                  </span>
</li>
</ul>
</div>

<div id="oferta-duch">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-3xl font-extralight text-white tracking-tight">
                  Ode mnie dla Ciebie — umysł i duch
                </h3>
<div className="h-px bg-[#a2b5b1]/20 flex-grow hidden sm:block"></div>
</div>
<p className="text-base text-[#a2b5b1] font-light mb-6 px-4">
                Każda metoda jest dobra, gdy jest używana we właściwym czasie —
                zawsze po rozmowie i świadomej zgodzie.
              </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">Reiki</span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Tarot / rozkład kart 1:1
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Masaż energetyczny
                  </span>
</li>
<li className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-white font-light text-lg">
                    Odczyty z kart / ze zdjęcia
                  </span>
</li>
<li className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#404040]/10 transition-colors border border-transparent hover:border-[#a2b5b1]/10">
<i className="w-5 h-5 text-[#4ec3a6] mt-0.5 shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
<div>
<span className="text-white font-light text-lg block mb-1">
                      Diagnostyka energetyczna
                    </span>
<span className="text-sm text-[#a2b5b1] font-light">
                      Zakres i cena ustalane indywidualnie
                    </span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a] border-t border-[#a2b5b1]/5" id="cennik">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-16 text-center">
            Cennik
          </h2>
<div className="space-y-16">

<div className="bg-[#404040]/20 backdrop-blur-md border border-[#a2b5b1]/10 rounded-2xl overflow-hidden p-6 md:p-10">
<h3 className="text-2xl font-light text-white tracking-tight mb-8">
                Fizjoterapia i masaż
              </h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[#a2b5b1] text-sm border-b border-[#a2b5b1]/10">
<th className="pb-4 font-light">Usługa</th>
<th className="pb-4 font-light w-24 text-right">Czas</th>
<th className="pb-4 font-light w-24 text-right">Cena</th>
</tr>
</thead>
<tbody className="text-white font-light text-base">
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Fizjoterapia — 1. wizyta</td>
<td className="py-4 text-right text-[#a2b5b1]">60 min</td>
<td className="py-4 text-right">220 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Fizjoterapia</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">200 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Terapia manualna</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">200 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Terapia blizn</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">200 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4 text-[#4ec3a6]">
                        Masaż Lomi Lomi Nui
                      </td>
<td className="py-4 text-right text-[#a2b5b1]">90 min</td>
<td className="py-4 text-right text-[#4ec3a6]">350 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Masaż leczniczy / tensegracyjny</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">200 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Masaż relaksacyjny</td>
<td className="py-4 text-right text-[#a2b5b1]">60 min</td>
<td className="py-4 text-right">200 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Masaż relaksacyjny</td>
<td className="py-4 text-right text-[#a2b5b1]">90 min</td>
<td className="py-4 text-right">250 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Fizjoterapia — haczykowanie</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">220 zł</td>
</tr>
<tr className="hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Fizjoterapia + taping</td>
<td className="py-4 text-right text-[#a2b5b1]">50 min</td>
<td className="py-4 text-right">220 zł</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-[#404040]/20 backdrop-blur-md border border-[#a2b5b1]/10 rounded-2xl overflow-hidden p-6 md:p-10">
<h3 className="text-2xl font-light text-white tracking-tight mb-8">
                Energia i duch
              </h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-[#a2b5b1] text-sm border-b border-[#a2b5b1]/10">
<th className="pb-4 font-light">Usługa</th>
<th className="pb-4 font-light w-24 text-right">Czas</th>
<th className="pb-4 font-light w-24 text-right">Cena</th>
</tr>
</thead>
<tbody className="text-white font-light text-base">
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Zabieg Reiki</td>
<td className="py-4 text-right text-[#a2b5b1]">60 min</td>
<td className="py-4 text-right">150 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4 text-[#4ec3a6]">
                        Masaż Lomi Lomi Nui
                      </td>
<td className="py-4 text-right text-[#a2b5b1]">120 min</td>
<td className="py-4 text-right text-[#4ec3a6]">400 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Masaż energetyczny</td>
<td className="py-4 text-right text-[#a2b5b1]">60 min</td>
<td className="py-4 text-right">300 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Tarot / Rozkład kart 1:1</td>
<td className="py-4 text-right text-[#a2b5b1]">30 min</td>
<td className="py-4 text-right">150 zł</td>
</tr>
<tr className="border-b border-[#a2b5b1]/5 hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Tarot / Rozkład kart 1:1</td>
<td className="py-4 text-right text-[#a2b5b1]">60 min</td>
<td className="py-4 text-right">350 zł</td>
</tr>
<tr className="hover:bg-[#404040]/20 transition-colors">
<td className="py-4 pr-4">Odczyt ze zdjęcia</td>
<td className="py-4 text-right text-[#a2b5b1]">—</td>
<td className="py-4 text-right">250 zł</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-8 pt-6 border-t border-[#a2b5b1]/10 text-sm text-[#a2b5b1] font-light flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5" data-lucide="info" strokeWidth="1.5"></i>
<p>
<strong>Diagnostyka energetyczna</strong>
                  — narzędzie, zakres i cena ustalane indywidualnie (150–400
                  zł); może obejmować karty, odczyt ze zdjęcia, Kroniki Akaszy.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="kontakt">
<div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(78,195,166,0.05)_0%,transparent_100%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-extralight text-white tracking-tight mb-6">
            Rozpocznijmy
          </h2>
<p className="text-lg text-[#a2b5b1] font-light mb-16 max-w-xl mx-auto">
            Napisz lub zadzwoń — porozmawiamy, co będzie dla Ciebie teraz
            najbardziej wskazane i bezpieczne.
          </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-16">
<a className="group flex flex-col items-center gap-4" href="tel:+48602687969">
<div className="w-16 h-16 rounded-full bg-[#404040]/40 border border-[#a2b5b1]/20 flex items-center justify-center text-white group-hover:bg-[#4ec3a6] group-hover:text-[#262626] group-hover:border-[#4ec3a6] transition-all duration-300">
<i className="w-7 h-7" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="text-center">
<span className="block text-sm text-[#a2b5b1] font-light mb-1">
                  Zadzwoń
                </span>
<span className="block text-2xl text-white font-light tracking-tight group-hover:text-[#4ec3a6] transition-colors">
                  602 687 969
                </span>
</div>
</a>
<div className="w-px h-16 bg-[#a2b5b1]/20 hidden md:block"></div>
<a className="group flex flex-col items-center gap-4" href="mailto:fizjokoliber@gmail.com">
<div className="w-16 h-16 rounded-full bg-[#404040]/40 border border-[#a2b5b1]/20 flex items-center justify-center text-white group-hover:bg-[#4ec3a6] group-hover:text-[#262626] group-hover:border-[#4ec3a6] transition-all duration-300">
<i className="w-7 h-7" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="text-center">
<span className="block text-sm text-[#a2b5b1] font-light mb-1">
                  Napisz
                </span>
<span className="block text-xl text-white font-light group-hover:text-[#4ec3a6] transition-colors">
                  fizjokoliber@gmail.com
                </span>
</div>
</a>
</div>
<div className="text-[#a2b5b1] font-light text-base">
<p className="text-white mb-1">Katarzyna Olszewska</p>
<p>Gabinet FizjoKOliber</p>
</div>
</div>
</section>
</main>

<footer className="bg-[#1a1a1a] border-t border-[#a2b5b1]/10 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
<div className="flex items-center gap-2 mb-6 opacity-50">
<i className="w-5 h-5 text-white" data-lucide="bird" strokeWidth="1.5"></i>
<span className="text-white font-light tracking-[0.15em] text-sm uppercase">
            Fizjokoliber
          </span>
</div>
<p className="text-[#a2b5b1] font-light text-sm mb-4">
          ©
          <span id="year">2024</span>
          FizjoKOliber · Katarzyna Olszewska
        </p>
<p className="text-[#a2b5b1]/40 font-light text-xs">
          Wkrótce więcej — przestrzeń dla wielu specjalistów i warsztatów.
        </p>
</div>
</footer>


    </>
  );
}
