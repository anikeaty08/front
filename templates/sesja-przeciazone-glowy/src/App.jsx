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
      

<div className="fixed pointer-events-none z-[-1] overflow-hidden w-full h-full top-0 left-0">
<div className="filter blur-[120px] bg-[#FFF9F0] opacity-80 mix-blend-overlay w-[50%] h-[50%] rounded-full absolute top-[-10%] left-[-10%]"></div>
<div className="filter blur-[150px] bg-[#F5EFE6] opacity-70 mix-blend-multiply w-[60%] h-[60%] rounded-full absolute right-[-10%] bottom-[20%]"></div>
<div className="filter blur-[120px] bg-[#FFF6E5] opacity-80 w-[30%] h-[30%] rounded-full absolute top-[40%] left-[20%]"></div>
</div>

<nav className="absolute top-0 w-full px-6 py-8 flex justify-center items-center z-50">
<img alt="Logo" className="h-10 sm:h-12 w-auto absolute left-6" src="https://i.postimg.cc/BZV22w2d/logo-imienne-bez-tla.png"/>
<div className="text-xs font-medium tracking-[0.2em] text-[#8C8477] uppercase hidden sm:block">
        Oddech
      </div>
</nav>

<header className="min-h-[90vh] flex flex-col bg-[#FDFBF7] pt-32 pr-6 pb-16 pl-6 relative items-center justify-center">
<div className="text-center max-w-3xl mr-auto ml-auto">
<h1 className="sm:text-3xl md:text-4xl lg:text-5xl leading-snug sm:leading-tight text-2xl font-light text-[#2A2621] tracking-tight">
          Kiedy nie masz już siły ciągnąć dalej…
          <span className="block mt-6 sm:mt-8 text-xl sm:text-2xl md:text-3xl text-[#6B645A] font-light leading-relaxed">
<span className="relative inline-block mt-4 mb-2">
<span className="relative z-10 text-[#3A352F] font-normal tracking-wide">
                to nie praca Cię wykańcza
              </span>
<span className="absolute bottom-1 left-[-4px] right-[-4px] h-[8px] z-0 rounded-full bg-[#8bad00]/30"></span>
</span>
<br/>
            — tylko sposób, w jaki próbujesz to wszystko udźwignąć
          </span>
</h1>
</div>

<div className="absolute bottom-12 flex flex-col items-center gap-3 opacity-40 animate-pulse">
<div className="w-[1px] h-12 bg-gradient-to-b from-[#2A2621] to-transparent"></div>
</div>
</header>

<main className="sm:px-8 flex flex-col gap-16 sm:gap-20 sm:text-lg leading-relaxed text-base font-light text-[#5A534B] max-w-4xl mr-auto ml-auto pr-6 pb-32 pl-6">

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 w-full">
<p className="">
          Nie ogarniasz już tego wszystkiego.
          <br/>
          Czujesz zmęczenie, nawet po weekendzie. Myśl o pracy wywołuje
          napięcie, ścisk, czasem zwykłe: „nie chcę tam wracać”.
        </p>
<p className="">
          Ciągniesz, bo trzeba. Bo odpowiedzialność. Bo kredyt. Bo „robota sama
          się nie zrobi”.
        </p>
<p className="">
          Być może coraz częściej pojawia się myśl, żeby rzucić to wszystko…
          <br/>
          …ale zaraz za nią przychodzi pytanie: „tylko co potem?”
        </p>
<p className="">
          Więc zostajesz.
          <br/>
          I ciągniesz dalej resztkami sił. Nie dając sobie prawa do chwili
          wytchnienia.
        </p>
</section>

<div className="w-[100vw] relative left-1/2 -translate-x-1/2 h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
<img alt="Spokojne światło" className="w-full h-full object-cover object-center absolute inset-0" src="https://i.postimg.cc/NjCCWxXK/hero-gotowe.webp"/>
<div className="absolute inset-0 bg-[#F5EFEA]/20 mix-blend-multiply z-10 pointer-events-none"></div>
</div>

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 sm:text-right w-full">
<p className="">
          To trochę jakby płynąć w głębokiej wodzie, gdzieś daleko od brzegu.
          <br/>
          I z całych sił próbować wydostać się na suchy ląd.
        </p>
<p className="">
          Czujesz zmęczenie, ale machasz rękami coraz szybciej. Spinasz całe
          ciało. Robisz wszystko, żeby płynąć dalej.
          <br/>
          Bo przecież nie możesz się zatrzymać. Nie możesz odpuścić. Bo wtedy…
          utoniesz…
        </p>
<p>
          Więc robisz więcej. Mocniej. Dłużej.
          <br/>
          Tylko że im bardziej walczysz, tym szybciej tracisz siły.
        </p>
</section>

<div className="w-12 h-[1px] bg-[#DCD6CA] mx-auto"></div>

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 sm:text-center w-full">
<p className="">
          I w którymś momencie pojawia się myśl:
          <br/>
<span className="relative inline-block mt-3 mb-2">
<span className="relative z-10 text-xl text-[#3A352F] font-normal">
              „muszę się stąd wydostać”
            </span>
<span className="absolute bottom-1 left-[-4px] right-[-4px] h-[8px] z-0 rounded-full bg-[#8bad00]/30"></span>
</span>
<br/>
<span className="inline-block mt-2">
            Może zmiana pracy. Może rzucenie tego wszystkiego. Cokolwiek, byle
            już dłużej nie tak.
          </span>
</p>
<p className="">
          Ale prawda jest taka, że możesz odejść…
          <br/>
          Tylko że to, co Cię niszczy, nie zostanie w starej firmie. Zabierzesz
          to ze sobą.
        </p>
<p className="">
          I jeśli nic się nie zmieni,
          <br/>
          w nowej pracy dojdziesz dokładnie do tego samego miejsca.
        </p>
<div className="pt-12 sm:pt-16 flex justify-center">
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#8bad00] transition-all duration-500 shadow-[#8bad00]/10 hover:shadow-lg hover:shadow-[#8bad00]/20 hover:-translate-y-0.5 overflow-hidden text-sm font-medium text-white bg-[#8bad00]/90 rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-sm" href="https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow">
<span className="z-10 cursor-pointer relative" onclick="window.location.href='https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow'" role="button">Umów się na sesję</span>
<iconify-icon className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-1" height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
<div className="group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full cursor-pointer" onclick="window.location.href='https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow'" role="button"></div>
</a>
</div>
</section>

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 w-full">
<p className="">
          To nie jest tak, że nie widzisz, co się z Tobą dzieje.
          <br/>
          Widzisz.
        </p>
<p className="">
          Masz świadomość swojego zmęczenia. Czujesz, że to wszystko zaczyna Cię
          przerastać. Że nie dasz tak rady na dłuższą metę.
          <br/>
          Jednocześnie wiesz, że to nie jest takie proste, żeby po prostu
          zwolnić.
        </p>
<p className="">
          Bo kiedy próbujesz — pojawia się napięcie.
          <br/>
          Obawa, że coś zawalisz. Że ktoś na tym ucierpi. Że nie dowieziesz.
        </p>
<p className="">
          I wracasz do tego, co znasz.
          <br/>
          Nie dlatego, że to jest dobre. Tylko dlatego, że to jedyne, w co dziś
          jesteś w stanie uwierzyć, że działa.
        </p>
<p className="">
          A kiedy pojawia się niemoc i potworne zmęczenie,
          <br/>
          być może zaczynasz myśleć, że coś jest z Tobą nie tak.
          <br/>
          Że jesteś za słaby / za słaba. Za mało zdyscyplinowany /
          zdyscyplinowana. Nieogarnięty / nieogarnięta.
        </p>
<p className="text-xl sm:text-2xl text-[#3A352F] font-normal leading-relaxed text-center mt-16 mb-8">
          A prawda jest dużo prostsza.
          <br/>
<span className="relative inline-block mt-2">
<span className="relative z-10">
              Twój system działa dokładnie tak, jak ma działać pod takim
              obciążeniem.
            </span>
<span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#8bad00]/30 z-0 rounded-full"></span>
</span>
</p>
</section>

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 w-full">
<p className="">
          I tu pojawia się moment, którego z tego miejsca prawie nie widać.
          <br/>
          Nie chodzi o to, żeby nagle wszystko zatrzymać. Ani o to, żeby
          „odpuścić” i liczyć, że jakoś to będzie.
          <br/>
          To właśnie dlatego to wydaje się nierealne.
        </p>
<p className="">
          To, co naprawdę zmienia sytuację, zaczyna się dużo wcześniej.
        </p>
<p className="text-[#3A352F]">
          To jest moment, w którym zaczynasz działać
          <br/>
<span className="relative inline-block">
<span className="relative z-10 font-normal">
              nie przeciwko sobie, tylko z uwzględnieniem siebie.
            </span>
<span className="absolute bottom-1 left-0 w-full h-[4px] bg-[#8bad00]/20 z-0"></span>
</span>
</p>
<p>
          Nie przez „mniej robienia”.
          <br/>
          Tylko przez inny sposób bycia w tym, co już robisz.
        </p>
<p className="">
          I to jest coś, co można zacząć robić
          <br/>
          bez rzucania pracy,
          <br/>
          bez rozwalania życia,
          <br/>
          bez ryzyka, że wszystko się posypie.
        </p>
<p className="">
          I co ważne — to działa nawet wtedy, kiedy masz wrażenie, że nie masz
          już na to przestrzeni. Bo zaczynamy dokładnie tam, gdzie jesteś — a
          nie tam, gdzie „powinno się być”.
        </p>
<p className="">
          To jest dokładnie to, co pozwala odzyskać trochę przestrzeni, złapać
          oddech
          <br/>
          i wrócić do działania z miejsca, które nie niszczy od środka.
        </p>
<div className="pt-12 sm:pt-16 flex justify-center">
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#8bad00] transition-all duration-500 shadow-[#8bad00]/10 hover:shadow-lg hover:shadow-[#8bad00]/20 hover:-translate-y-0.5 overflow-hidden text-sm font-medium text-white bg-[#8bad00]/90 rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-sm" href="https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow">
<span className="z-10 cursor-pointer relative" onclick="window.location.href='https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow'" role="button">Umów się na sesję</span>
<iconify-icon className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-1" height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
</a>
</div>
</section>

<div className="w-full max-w-4xl mx-auto h-64 sm:h-[400px] relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
<div className="absolute inset-0 bg-gradient-to-r from-[#F4EBE0]/90 to-[#FFFBF2]/80 mix-blend-color z-10"></div>
<div className="z-10 bg-[#D4A373] opacity-20 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Przestrzeń" className="filter sepia-[.2] contrast-110 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c0a96d4-a4af-4a83-8c43-db9b998c6b0a_1600w.webp"/>
</div>

<section className="sm:p-16 bg-[#FDFBF7] max-w-3xl border-[#FFFFFF]/80 border rounded-[2.5rem] mx-auto p-10 shadow-[0_20px_60px_rgba(139,173,0,0.05)] backdrop-blur-md w-full">
<h2 className="text-xl sm:text-2xl font-normal text-[#2A2621] tracking-tight mb-8">
          Co się zmieni, kiedy przestaniesz działać z poziomu presji?
        </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              Zaczniesz zauważać moment, w którym ciało mówi „dość” — zanim
              dojedziesz do ściany.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              Pojawi się przestrzeń, żeby złapać chwilę oddechu bez obawy, że
              wszystko się zawali.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span>
              Decyzje przestaną być podejmowane z poziomu presji i strachu.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              Przestaniesz dokładać sobie pracy, która nie jest konieczna.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              Poczujesz więcej energii na to, co naprawdę ważne.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              Zaczniesz działać spokojniej — ale jednocześnie bardziej
              świadomie.
            </span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#8bad00] text-xl shrink-0 mt-1.5 opacity-80" height="1.2em" icon="solar:leaf-linear" width="1.2em"></iconify-icon>
<span className="">
              I pojawi się coś, czego często nie było od dawna:
              <span className="font-normal text-[#3A352F]">poczucie wpływu.</span>
</span>
</li>
</ul>
</section>

<section className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
<p>
          Jeśli nic się nie zmieni, wiesz, że Twój kołowrotek nadal będzie
          zasuwał.
        </p>
<p className="">
          Jeśli nie chcesz dalej ciągnąć tego w ten sam sposób…
          <br/>
          jest inna droga.
        </p>
<p className="">
          Nie polega na tym, żeby wszystko rzucić. Ani na tym, żeby nagle robić
          mniej i wierzyć, że „jakoś to będzie”.
        </p>
<p className="">
          Pokażę Ci, jak działać inaczej — w sposób, który nie opiera się
          wyłącznie na napięciu i presji.
          <br/>
          Pomogę Ci odkryć momenty, w których możesz wyjść z trybu walki i
          zacząć reagować inaczej.
        </p>
<p className="">
          Bo Ty to już potrafisz.
          <br/>
          Tylko w tej sytuacji, w której jesteś teraz, najłatwiej było wejść w
          jeden tryb:
          <br/>
<span className="text-[#8bad00] font-normal tracking-wide text-sm sm:text-base uppercase mt-2 block">
            więcej. mocniej. szybciej.
          </span>
</p>
<p className="">A to nie jest jedyny sposób, w jaki możesz działać.</p>
<p className="">
          Z czasem zaczynasz widzieć,
          <br/>
          że nie wszystko wymaga takiego napięcia, jakie dziś wkładasz.
          <br/>
          Że można działać inaczej —
          <br/>
          bardziej stabilnie,
          <br/>
          bez ciągłego przeciążenia.
        </p>
<p className="">
          I to nie jest teoria.
          <br/>
          To są bardzo konkretne momenty w Twoim codziennym funkcjonowaniu,
          które zaczynasz zauważać i zmieniać.
        </p>
</section>

<div className="w-12 h-[1px] bg-[#DCD6CA] mx-auto"></div>

<section className="max-w-2xl mx-auto space-y-6 sm:space-y-8 w-full">
<h2 className="text-xl sm:text-2xl font-normal text-[#2A2621] tracking-tight">
          Jak wygląda ta praca?
        </h2>
<p className="">
          To spotkania 1:1, w których pracujemy na Twoich realnych sytuacjach —
          z pracy i z życia.
        </p>
<p>
          Nie według sztywnego schematu. Tylko dokładnie z tym, z czym
          przychodzisz.
        </p>
<div className="bg-[#F8F5EF] rounded-2xl p-6 sm:p-8 border border-[#EFEBE0]">
<p className="font-normal text-[#3A352F] mb-6">Podczas sesji:</p>
<ul className="space-y-4 text-base sm:text-lg">
<li className="flex items-start gap-4">
<span className="text-[#DCD6CA] font-light">–</span>
<span className="">
                zatrzymujemy się na tyle, na ile jest to możliwe w tu i teraz
              </span>
</li>
<li className="flex items-start gap-4">
<span className="text-[#DCD6CA] font-light">–</span>
<span>porządkujemy to, co dzieje się pod napięciem</span>
</li>
<li className="flex items-start gap-4">
<span className="text-[#DCD6CA] font-light">–</span>
<span>
                uczysz się zauważać momenty, w których wchodzisz w przeciążenie
              </span>
</li>
<li className="flex items-start gap-4">
<span className="text-[#DCD6CA] font-light">–</span>
<span className="">
                i wprowadzasz inne sposoby reagowania — krok po kroku
              </span>
</li>
</ul>
</div>
<p>
          Między spotkaniami funkcjonujesz dalej tak jak dotąd — ale zaczynasz
          mieć więcej wpływu na to, co się z Tobą dzieje.
        </p>
<p>
          To nie jest proces, który wywraca życie do góry nogami.
          <br/>
          To jest proces, który pozwala zacząć działać inaczej dokładnie tam,
          gdzie jesteś.
        </p>
</section>

<section className="grid md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto w-full">

<div className="bg-[#FFFDF9] backdrop-blur-sm rounded-[2rem] p-10 border border-[#FFFFFF]/90 shadow-[0_10px_40px_rgba(0,0,0,0.03)]">
<h3 className="text-lg font-normal text-[#2A2621] mb-6 flex items-center gap-3">
<iconify-icon className="text-[#8bad00] text-xl" height="1.2em" icon="solar:check-read-linear" width="1.2em"></iconify-icon>
            Ta praca jest dla Ciebie, jeśli:
          </h3>
<ul className="space-y-4 text-sm sm:text-base text-[#5A534B]">
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                czujesz, że jesteś na granicy swoich możliwości, ale mimo to
                dalej ciągniesz, bo „trzeba”
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                masz w sobie dużą odpowiedzialność i trudno Ci po prostu
                odpuścić, nawet kiedy ciało już mówi „dość”
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                myśl o zmianie pracy pojawia się coraz częściej, ale
                jednocześnie nie masz przekonania, że to coś realnie rozwiąże
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                widzisz, że sposób, w jaki teraz funkcjonujesz, zaczyna Cię
                kosztować coraz więcej
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                chcesz coś zmienić, ale nie przez ucieczkę, tylko w sposób,
                który ma sens i nie rozwali Twojego życia
              </span>
</li>
</ul>
</div>

<div className="bg-[#F4F1EA]/50 backdrop-blur-sm rounded-[2rem] p-10 border border-[#EFEBE0]/80">
<h3 className="text-lg font-normal text-[#4A433B] mb-6 flex items-center gap-3">
<iconify-icon className="text-[#B5AF9D] text-xl" height="1.2em" icon="solar:close-circle-linear" width="1.2em"></iconify-icon>
            Ta praca nie jest dla Ciebie, jeśli:
          </h3>
<ul className="space-y-4 text-sm sm:text-base text-[#6B645A]">
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                szukasz szybkiego rozwiązania, które natychmiast zdejmie z
                Ciebie napięcie (od tego są inne rzeczy — i to też jest OK)
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                chcesz gotowej odpowiedzi, co masz zrobić ze swoją pracą lub
                życiem bez wchodzenia głębiej w to, co się z Tobą dzieje
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span>
                liczysz na to, że ktoś powie Ci, co masz zmienić, a Ty po prostu
                to wdrożysz
              </span>
</li>
<li className="flex gap-3 leading-relaxed">
<span className="text-[#DCD6CA]">–</span>
<span className="">
                nie masz na ten moment gotowości, żeby przyjrzeć się sobie i
                wziąć za siebie kawałek odpowiedzialności
              </span>
</li>
</ul>
</div>
</section>
<div className="flex justify-center">
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#8bad00] transition-all duration-500 shadow-[#8bad00]/10 hover:shadow-lg hover:shadow-[#8bad00]/20 hover:-translate-y-0.5 overflow-hidden text-sm font-medium text-white bg-[#8bad00]/90 rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-sm" href="https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow">
<span className="z-10 cursor-pointer relative" onclick="window.location.href='https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow'" role="button">Umów się na sesję</span>
<iconify-icon className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-x-1" height="1.5em" icon="solar:arrow-right-linear" width="1.5em"></iconify-icon>
</a>
</div>

<section className="sm:p-12 md:p-16 overflow-hidden bg-[#FDFBF7] max-w-4xl border-[#FFFFFF] border rounded-[2.5rem] mx-auto p-8 relative shadow-[0_20px_60px_rgba(0,0,0,0.04)] w-full">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#FFF3E0]/40 to-transparent pointer-events-none"></div>
<div className="relative z-10 grid md:grid-cols-12 gap-12 sm:gap-16 items-stretch">
<div className="md:col-span-7 space-y-10">
<h2 className="text-2xl sm:text-3xl font-normal text-[#2A2621] tracking-tight mb-8">
              Byłam w tym miejscu, w którym Ty teraz jesteś.
            </h2>
<p className="">
              Miałam dobrą pracę. Odpowiedzialne stanowisko.
              <br/>
              Z zewnątrz wszystko wyglądało tak, jak powinno. I przez długi czas
              naprawdę wierzyłam, że to jest „to”. Nie zauważyłam momentu, w
              którym coś zaczęło się zmieniać.
            </p>
<p className="">Stres. Napięcie. Ciągła odpowiedzialność.</p>
<p>
              Zabrały mi lekkość działania. Zaufanie do siebie. Spokój.
              <br/>
              Zostało tylko jedno: ciągnąć dalej.
            </p>
<p className="">
              Z czasem zaczęłam funkcjonować w trybie przetrwania.
              <br/>
              Nie spałam. Byłam nerwowa. Coraz bardziej odcięta od ludzi.
              <br/>
              Wszystko kręciło się wokół pracy i tego, żeby dowieźć.
            </p>
<p className="text-xl sm:text-2xl font-normal text-[#3A352F] italic bg-white/60 p-6 sm:p-8 rounded-3xl border border-white/80 shadow-sm leading-relaxed">
              Aż któregoś dnia pojawiła się myśl:
              <br/>
              „ja już nie mam siły”
            </p>
<p className="">
              I wtedy zrobiłam to, co wydawało się jedynym wyjściem.
              <br/>
              Odeszłam.
            </p>
<p className="">
              Na początku była ulga. A potem przyszło zderzenie z
              rzeczywistością.
              <br/>
              To nie była tylko kwestia pracy. To był sposób, w jaki przez lata
              funkcjonowałam.
              <br/>
              Ciągnięcie w wiecznym napięciu. Ignorowanie siebie. Działanie
              ponad swoje możliwości.
            </p>
<p>
              Straciłam w tym siebie. Zdrowie. Spokój.
              <br/>
              A świat i tak kręcił się dalej.
            </p>
<p>
              Dopiero kiedy to zobaczyłam, zaczęłam rozumieć, co naprawdę wymaga
              zmiany.
            </p>
<p className="text-[#3A352F] font-normal text-lg sm:text-xl">
              Nie kolejna praca.
              <br/>
<span className="relative inline-block mt-3">
<span className="relative z-10">
                  Tylko to, jak blisko jestem ze sobą w tym, co robię.
                </span>
<span className="absolute bottom-1 left-[-4px] right-[-4px] h-[8px] z-0 rounded-full bg-[#8bad00]/30"></span>
</span>
</p>
<p className="">
              Dziś pracuję z osobami, które są dokładnie w tym miejscu.
              <br/>
              Pokazuję im momenty, w których można się zatrzymać i skorygować
              kierunek — zanim ciało i życie zrobią to za nich.
            </p>
</div>
<div className="md:col-span-5 relative min-h-[400px] h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-[#DCD6CA]/20">
<div className="absolute inset-0 bg-[#E5D5B5] mix-blend-color z-10 opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#2A2621]/20 to-transparent z-10"></div>
<img alt="Portret autorki" className="absolute inset-0 w-full h-full object-cover filter sepia-[.15] contrast-105 saturate-110" src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="bg-white/60 backdrop-blur-md rounded-[2.5rem] p-10 sm:p-16 border border-[#FFFFFF] shadow-[0_20px_50px_rgba(0,0,0,0.03)] space-y-8 max-w-3xl mx-auto w-full">
<h2 className="text-xl sm:text-2xl font-normal text-[#2A2621] tracking-tight border-b border-[#DCD6CA]/40 pb-6">
          Forma współpracy
        </h2>
<p className="text-base sm:text-lg">
          To Ty decydujesz, jak długo i jak głęboko chcesz pracować.
        </p>
<ul className="space-y-4 text-base sm:text-lg text-[#5A534B]">
<li className="flex gap-4">
<span className="text-[#8bad00]/60 mt-1">
<iconify-icon height="1.2em" icon="solar:record-circle-linear" width="1.2em"></iconify-icon>
</span>
<span className="">
              Możemy spotkać się raz — żeby zatrzymać to, co dzieje się teraz i
              pomóc Ci złapać pierwszy oddech.
            </span>
</li>
<li className="flex gap-4">
<span className="text-[#8bad00]/60 mt-1">
<iconify-icon height="1.2em" icon="solar:record-circle-linear" width="1.2em"></iconify-icon>
</span>
<span className="">
              Albo przejść proces kilku spotkań (3–5 sesji), w którym krok po
              kroku uczysz się funkcjonować inaczej — bez ciągłego przeciążenia.
            </span>
</li>
</ul>
<div className="pt-4 text-base sm:text-lg">
<p className="">Każda sesja trwa około 2 godzin.</p>
<p className="mt-4">Spotkania odbywają się:</p>
<p className="pl-4 border-l-2 border-[#DCD6CA] mt-2 text-[#6B645A]">
            – na żywo w Warszawie
            <br/>
            – albo online
          </p>
</div>
<p className="text-base sm:text-lg text-[#6B645A] italic">
          Przed pierwszym spotkaniem wypełniasz krótką ankietę, żebym mogła
          lepiej zrozumieć Twoją sytuację.
        </p>
<div className="pt-8 border-t border-[#DCD6CA]/40">
<p className="text-sm sm:text-base text-[#6B645A] mb-6">
            Jeśli nie masz pewności, czy to dla Ciebie — możesz zacząć od
            krótkiej, 15-minutowej rozmowy.
          </p>
<a className="group inline-flex items-center gap-2 hover:text-[#2A2621] transition-colors hover:border-[#8bad00]/50 text-sm font-medium text-[#5A534B] bg-white/50 border-[#DCD6CA] border rounded-full pt-3 pr-6 pb-3 pl-6" href="https://tidycal.com/m8g5eq3/15-minute-meeting">
<span className="" onclick="window.location.href='https://tidycal.com/m8g5eq3/15-minute-meeting'" role="button">Umów się na rozmowę</span>
<iconify-icon className="text-lg opacity-70 group-hover:opacity-100" height="1.2em" icon="solar:phone-calling-linear" width="1.2em"></iconify-icon>
</a>
</div>
</section>

<section className="text-center space-y-8 max-w-2xl mx-auto w-full">
<p className="text-xl sm:text-2xl text-[#3A352F] font-light leading-relaxed">
          Możesz dalej działać tak jak do tej pory.
          <br/>
          I próbować „dociągnąć” jeszcze trochę.
        </p>
<p className="text-xl sm:text-2xl text-[#3A352F] font-normal">
          Albo zrobić coś inaczej.
        </p>
<p className="text-base sm:text-lg text-[#6B645A]">
          Jeśli czujesz, że nie chcesz już dłużej funkcjonować w ten sposób —
          <br/>
          to jest moment, żeby zrobić pierwszy krok.
        </p>
<div className="pt-12 sm:pt-16 flex justify-center">
<a className="group inline-flex items-center justify-center gap-3 hover:bg-[#8bad00] transition-all duration-500 shadow-[#8bad00]/10 hover:shadow-xl hover:shadow-[#8bad00]/20 hover:-translate-y-1 overflow-hidden text-base font-medium text-white bg-[#8bad00]/90 rounded-full pt-5 pr-10 pb-5 pl-10 relative shadow-sm" href="https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow" id="kontakt">
<span className="cursor-pointer z-10 relative" onclick="window.location.href='https://tidycal.com/m8g5eq3/sesja-1-1-dla-przeciazonych-glow'" role="button">Umów się na sesję</span>
<iconify-icon className="relative z-10 text-xl transition-transform duration-500 group-hover:translate-x-1.5" height="1.2em" icon="solar:arrow-right-linear" width="1.2em"></iconify-icon>
<div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
</a>
</div>
</section>

<section className="border-t border-[#DCD6CA]/40 pt-16 sm:pt-20 max-w-3xl mx-auto w-full">
<h2 className="text-2xl font-light text-[#2A2621] tracking-tight mb-12 text-center">
          FAQ
        </h2>
<div className="space-y-4">
<details className="group bg-white/30 backdrop-blur-sm rounded-2xl border border-[#FFFFFF]/50 [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-base sm:text-lg text-[#3A352F] p-6">
              Co się dzieje po umówieniu sesji?
              <span className="transition-transform duration-300 group-open:-rotate-180 text-[#B5AF9D]">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</span>
</summary>
<div className="text-[#6B645A] font-light text-sm sm:text-base leading-relaxed px-6 pb-6 pt-2">
              Otrzymasz ode mnie wszystkie potrzebne informacje oraz krótką
              ankietę do wypełnienia przed spotkaniem.
            </div>
</details>
<details className="group bg-white/30 backdrop-blur-sm rounded-2xl border border-[#FFFFFF]/50 [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-base sm:text-lg text-[#3A352F] p-6">
              Jakimi metodami pracujesz?
              <span className="transition-transform duration-300 group-open:-rotate-180 text-[#B5AF9D]">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</span>
</summary>
<div className="text-[#6B645A] font-light text-sm sm:text-base leading-relaxed px-6 pb-6 pt-2">
              Korzystam z różnych podejść dopasowanych do tego, z czym
              przychodzisz. Najważniejsze jest dla mnie to, żeby praca była dla
              Ciebie bezpieczna i realnie wspierająca w Twojej sytuacji — a nie
              dopasowana do jednej, sztywnej metody.
            </div>
</details>
<details className="group bg-white/30 backdrop-blur-sm rounded-2xl border border-[#FFFFFF]/50 [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-base sm:text-lg text-[#3A352F] p-6">
              Czy to jest bezpieczne?
              <span className="transition-transform duration-300 group-open:-rotate-180 text-[#B5AF9D]">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</span>
</summary>
<div className="text-[#6B645A] font-light text-sm sm:text-base leading-relaxed px-6 pb-6 pt-2">
              Tak. Pracujemy w pełnym kontakcie i z uwzględnieniem Twoich
              granic.
            </div>
</details>
<details className="group bg-white/30 backdrop-blur-sm rounded-2xl border border-[#FFFFFF]/50 [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-base sm:text-lg text-[#3A352F] p-6">
              Czy jedna sesja wystarczy?
              <span className="transition-transform duration-300 group-open:-rotate-180 text-[#B5AF9D]">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</span>
</summary>
<div className="text-[#6B645A] font-light text-sm sm:text-base leading-relaxed px-6 pb-6 pt-2">
              Czasem tak — szczególnie jeśli potrzebujesz zatrzymać to, co
              dzieje się teraz.
              <br/>
              Przy głębszym przeciążeniu warto rozważyć proces kilku spotkań.
            </div>
</details>
<details className="group bg-white/30 backdrop-blur-sm rounded-2xl border border-[#FFFFFF]/50 [&amp;_summary::-webkit-details-marker]:hidden overflow-hidden">
<summary className="flex justify-between items-center font-normal cursor-pointer list-none text-base sm:text-lg text-[#3A352F] p-6">
              Co jeśli nie jestem pewna / pewien?
              <span className="transition-transform duration-300 group-open:-rotate-180 text-[#B5AF9D]">
<iconify-icon height="1.2em" icon="solar:alt-arrow-down-linear" width="1.2em"></iconify-icon>
</span>
</summary>
<div className="text-[#6B645A] font-light text-sm sm:text-base leading-relaxed px-6 pb-6 pt-2">
              Możesz zacząć od krótkiej rozmowy i spokojnie sprawdzić, czy to
              jest dla Ciebie.
            </div>
</details>
</div>
</section>
</main>
<footer className="py-12 text-center text-xs text-[#A8A193] font-light flex flex-col items-center gap-4 border-t border-[#DCD6CA]/20">
<div className="tracking-[0.2em] uppercase mb-4">Oddech</div>
<p>© 2024. Wszelkie prawa zastrzeżone.</p>
</footer>

    </>
  );
}
