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
      

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Calm minimal interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(\'https: //images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&amp'}}></div>
</div>

<div className="relative z-10 text-center px-6 max-w-screen-lg mx-auto mt-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#FFFFFF] tracking-tight leading-tight mb-8">
                Zwolnij, zanim zrobisz<br className="hidden md:block"/> kolejny krok.
            </h1>
<p className="text-lg md:text-xl text-[#FFFFFF]/90 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Indywidualne sesje wspierane pracą z podświadomością dla przeciążonych profesjonalistów, którzy zapomnieli, jak odpoczywać.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#2D5A3D] text-[#FFFFFF] px-10 py-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#1E4A2E] transition-all duration-300 text-base" href="#offer">
                    Umów się na sesję
                </a>
<a className="w-full sm:w-auto bg-transparent border border-[#FFFFFF] text-[#FFFFFF] px-10 py-4 rounded-lg hover:bg-[#FFFFFF] hover:text-[#2C2C2C] transition-all duration-300 text-base" href="#contact">
                    Umów 15-minutową rozmowę
                </a>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32 px-6">
<div className="max-w-screen-md mx-auto">
<p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed mb-8">
                Czujesz zmęczenie, którego nie leczy sen. Budzisz się rano i pierwszą myślą jest długa lista rzeczy, które musisz dzisiaj udźwignąć. Presja stała się Twoim naturalnym stanem, a odpuszczenie wydaje się luksusem, na który nie możesz sobie pozwolić.
            </p>
<div className="my-16 flex justify-center">
<div className="border-l-4 border-[#2D5A3D] pl-8 max-w-2xl">
<span className="block text-5xl font-serif text-[#2D5A3D] leading-none mb-4">"</span>
<h3 className="text-2xl md:text-3xl font-serif italic text-[#2C2C2C] text-center tracking-tight leading-snug">
                        Ciągnięcie dalej to jedyne co znasz, nawet gdy brakuje już sił.
                    </h3>
</div>
</div>
<p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                Jesteś jak pływak, który zapomniał, że może po prostu przestać płynąć. Z każdym kolejnym dniem, projektem i awansem jest Ci coraz ciężej udawać, że wszystko jest pod pełną kontrolą. Ciało wysyła sygnały, ale Ty nauczyłeś się je ignorować w imię wyższych celów.
            </p>
</div>
</section>

<hr className="border-[#D4DED6] max-w-screen-xl mx-auto"/>

<section className="bg-[#EEF4EF] py-24 md:py-32 px-6">
<div className="max-w-screen-md mx-auto">
<div className="flex items-center gap-4 mb-8">
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D5A3D] tracking-tight">Zmiana perspektywy</h2>
</div>
<p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed mb-12">
                To nie jest kwestia Twojej słabej woli. To nie lenistwo ani brak motywacji. Twój układ nerwowy po prostu utknął pod wieloletnią presją, adaptując się do systemu, który wymaga nieustannego działania. Zmiana pracy, wyjazd na wakacje czy kolejna aplikacja do medytacji nie rozwiążą problemu, jeśli Twój wewnętrzny system wciąż bije na alarm.
            </p>
<div className="my-16 text-center">
<h3 className="text-2xl md:text-3xl font-serif text-[#2C2C2C] tracking-tight leading-snug relative inline-block">
                    Zmiana otoczenia nie ukoi wnętrza, które nie czuje się bezpiecznie.
                    <span className="block w-16 h-0.5 bg-[#2D5A3D] mx-auto mt-8"></span>
</h3>
</div>
<p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed">
                Próbujesz rozwiązać problem na poziomie logicznym, podczas gdy jego źródło leży głębiej — w zapisanych w ciele i podświadomości reakcjach obronnych. Dopóki tam nie zajrzymy, schemat będzie się powtarzał w nowym biurze, z nowym zespołem, w nowym domu.
            </p>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32 px-6">
<div className="max-w-screen-md mx-auto text-center">
<p className="text-lg md:text-xl text-[#2C2C2C] leading-relaxed mb-16 text-left">
                Prawdziwa zmiana zaczyna się wcześniej — tam, gdzie powstają Twoje reakcje. Kiedy zaczynasz pracować ze sobą u podstaw, zdejmujesz z siebie konieczność radykalnych cięć. Nie musisz rzucać pracy, zostawiać wszystkiego i wyjeżdżać na drugi koniec świata, by zaznać spokoju. Możesz odzyskać przestrzeń i sprawczość tu, gdzie jesteś.
            </p>
<h3 className="text-3xl md:text-4xl font-serif italic text-[#2D5A3D] tracking-tight leading-snug mb-20 max-w-2xl mx-auto">
                Nie musisz burzyć swojego dotychczasowego życia, aby w końcu poczuć się w nim dobrze.
            </h3>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#2D5A3D] text-[#FFFFFF] px-10 py-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#1E4A2E] transition-all duration-300 text-base" href="#offer">
                    Umów się na sesję
                </a>
<a className="w-full sm:w-auto bg-transparent border border-[#2D5A3D] text-[#2D5A3D] px-10 py-4 rounded-lg hover:bg-[#EEF4EF] transition-all duration-300 text-base" href="#contact">
                    Umów 15-minutową rozmowę
                </a>
</div>
</div>
</section>

<section className="bg-[#FAF8F5] py-24 md:py-32 px-6">
<div className="max-w-screen-lg mx-auto">
<div className="flex items-center gap-4 mb-16 justify-center">
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D5A3D] tracking-tight text-center">Co zyskasz dzięki sesjom?</h2>
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-[#FFFFFF] border border-[#D4DED6] rounded-xl p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow">
<iconify-icon className="text-[#2D5A3D] text-4xl mb-6" icon="solar:moon-sleep-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-xl font-medium text-[#2C2C2C] mb-3">Głęboki odpoczynek</h4>
<p className="text-[#6B7B6E] leading-relaxed text-base">
                        Odzyskanie naturalnej zdolności do wyłączania się i regeneracji bez poczucia winy, że marnujesz czas.
                    </p>
</div>

<div className="bg-[#FFFFFF] border border-[#D4DED6] rounded-xl p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow">
<iconify-icon className="text-[#2D5A3D] text-4xl mb-6" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-xl font-medium text-[#2C2C2C] mb-3">Redukcja napięcia</h4>
<p className="text-[#6B7B6E] leading-relaxed text-base">
                        Zmniejszenie fizycznego napięcia w ciele i zatrzymanie niekończącej się gonitwy myśli, która towarzyszy Ci na co dzień.
                    </p>
</div>

<div className="bg-[#FFFFFF] border border-[#D4DED6] rounded-xl p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow">
<iconify-icon className="text-[#2D5A3D] text-4xl mb-6" icon="solar:key-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-xl font-medium text-[#2C2C2C] mb-3">Przełamanie wzorców</h4>
<p className="text-[#6B7B6E] leading-relaxed text-base">
                        Zrozumienie i przetransformowanie podświadomych, ograniczających schematów, które trzymają Cię w trybie ciągłej walki.
                    </p>
</div>

<div className="bg-[#FFFFFF] border border-[#D4DED6] rounded-xl p-8 shadow-[0_1px_4px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-shadow">
<iconify-icon className="text-[#2D5A3D] text-4xl mb-6" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-xl font-medium text-[#2C2C2C] mb-3">Wewnętrzne bezpieczeństwo</h4>
<p className="text-[#6B7B6E] leading-relaxed text-base">
                        Zbudowanie trwałego poczucia bezpieczeństwa w sobie, co pozwala podejmować decyzje z miejsca spokoju, a nie lęku.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32 px-6">
<div className="max-w-screen-xl mx-auto">
<div className="flex items-center gap-4 mb-16">
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D5A3D] tracking-tight">Jak wygląda proces?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">

<div className="hidden md:block absolute top-8 left-10 right-10 h-[1px] bg-[#D4DED6] z-0"></div>

<div className="relative z-10 bg-[#FFFFFF] pt-4">
<div className="text-5xl font-serif text-[#2D5A3D] mb-6">01</div>
<h4 className="text-lg font-medium text-[#2C2C2C] mb-3">Rozpoznanie</h4>
<p className="text-[#6B7B6E] leading-relaxed text-sm md:text-base">
                        Rozmawiamy o tym, co naprawdę powoduje u Ciebie napięcie. Analizujemy konkretne, realne sytuacje z Twojej codzienności, bez abstrakcyjnego teoretyzowania.
                    </p>
</div>

<div className="relative z-10 bg-[#FFFFFF] pt-4">
<div className="text-5xl font-serif text-[#2D5A3D] mb-6">02</div>
<h4 className="text-lg font-medium text-[#2C2C2C] mb-3">Praca z podświadomością</h4>
<p className="text-[#6B7B6E] leading-relaxed text-sm md:text-base">
                        Wykorzystując bezpieczny stan relaksacji i narzędzia hipnozy, delikatnie docieramy do korzeni problemu — miejsc, do których umysł logiczny nie ma dostępu.
                    </p>
</div>

<div className="relative z-10 bg-[#FFFFFF] pt-4">
<div className="text-5xl font-serif text-[#2D5A3D] mb-6">03</div>
<h4 className="text-lg font-medium text-[#2C2C2C] mb-3">Integracja</h4>
<p className="text-[#6B7B6E] leading-relaxed text-sm md:text-base">
                        Uczymy Twój system nerwowy nowych reakcji. Budujemy bezpieczne struktury, które zastępują wyczerpujący tryb ciągłej gotowości i napięcia.
                    </p>
</div>

<div className="relative z-10 bg-[#FFFFFF] pt-4">
<div className="text-5xl font-serif text-[#2D5A3D] mb-6">04</div>
<h4 className="text-lg font-medium text-[#2C2C2C] mb-3">Stopniowa zmiana</h4>
<p className="text-[#6B7B6E] leading-relaxed text-sm md:text-base">
                        Zauważasz różnicę w naturalnym funkcjonowaniu. Reagujesz spokojniej, masz więcej pojemności na wyzwania, bez konieczności ciągłej autokontroli.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#EEF4EF] py-24 md:py-32 px-6">
<div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h3 className="text-2xl md:text-3xl font-serif text-[#2D5A3D] mb-10 tracking-tight">Dla kogo jest ten proces?</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D5A3D] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2C2C2C] text-base md:text-lg leading-relaxed">Dla przeciążonych profesjonalistów, liderów i przedsiębiorców, którym trudno oddzielić pracę od życia.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D5A3D] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2C2C2C] text-base md:text-lg leading-relaxed">Dla tych, którzy wciąż czują ogromne napięcie w ciele, mimo osiągnięcia zewnętrznych sukcesów.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D5A3D] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[#2C2C2C] text-base md:text-lg leading-relaxed">Dla osób gotowych wejść pod powierzchnię, wziąć odpowiedzialność i wykonać głęboką pracę wewnętrzną.</span>
</li>
</ul>
</div>

<div>
<h3 className="text-2xl md:text-3xl font-serif text-[#6B7B6E] mb-10 tracking-tight">Dla kogo to nie zadziała?</h3>
<ul className="space-y-6 opacity-90">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#6B7B6E] text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#6B7B6E] text-base md:text-lg leading-relaxed">Dla szukających "szybkich trików", gotowych rad czy magicznej pigułki, która załatwi sprawę w jeden wieczór.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#6B7B6E] text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#6B7B6E] text-base md:text-lg leading-relaxed">Dla osób w ostrych kryzysach psychiatrycznych, wymagających opieki klinicznej i farmakologicznej.</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#6B7B6E] text-2xl shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-[#6B7B6E] text-base md:text-lg leading-relaxed">Dla tych, którzy oczekują, że terapeuta wykona pracę za nich, bez ich aktywnego zaangażowania w proces.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-[#FAF8F5] py-24 md:py-32 px-6 overflow-hidden">
<div className="max-w-screen-lg mx-auto flex flex-col md:flex-row gap-16 items-center">

<div className="w-full md:w-[45%] shrink-0">
<img alt="Joanna Karpeta" className="w-full aspect-[4/5] object-cover rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="w-full md:w-[55%]">
<span className="text-sm uppercase tracking-widest text-[#6B7B6E] mb-4 block">O mnie</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D5A3D] tracking-tight mb-8">Nazywam się Joanna Karpeta.</h2>
<div className="space-y-6 text-lg text-[#2C2C2C] leading-relaxed">
<p>
                        Sama przez lata funkcjonowałam na najwyższych obrotach, ignorując sygnały płynące z ciała. Osiągałam kolejne cele, ale towarzyszyło temu permanentne poczucie, że za chwilę wszystko się zawali, jeśli choć na moment zwolnię tempo.
                    </p>
<p>
                        Zrozumiałam, że prawdziwa zmiana wymaga czegoś więcej niż tylko silnej woli, odpowiedniego planowania i nieustannej analizy. Próby "przemyślenia" problemu donikąd mnie nie zaprowadziły, bo napięcie mieszkało w ciele.
                    </p>
<p>
                        Teraz, łącząc nowoczesną pracę z podświadomością, hipnozę z ustrukturyzowanym, logicznym podejściem, pomagam zapracowanym profesjonalistom odzyskać wewnętrzny spokój. Prowadzę procesy, które pozwalają wyjść z trybu przetrwania i w końcu z ulgą wziąć głęboki oddech.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32 px-6" id="offer">
<div className="max-w-screen-md mx-auto">
<div className="border-2 border-[#2D5A3D] rounded-[20px] p-8 md:p-14 relative bg-[#FFFFFF] shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
<div className="text-center mb-10">
<h2 className="text-3xl font-serif text-[#2D5A3D] tracking-tight mb-4">Proces Indywidualny</h2>
<p className="text-[#6B7B6E] text-lg">Skoncentrowana praca 1:1, dostosowana do Twojego rytmu.</p>
</div>
<ul className="space-y-5 mb-12">
<li className="flex items-center gap-4 text-[#2C2C2C] text-lg">
<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] shrink-0"></span>
<span>Czas trwania pojedynczej sesji: <strong>90 minut</strong></span>
</li>
<li className="flex items-center gap-4 text-[#2C2C2C] text-lg">
<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] shrink-0"></span>
<span>Częstotliwość: <strong>Spotkania co 1-2 tygodnie</strong></span>
</li>
<li className="flex items-center gap-4 text-[#2C2C2C] text-lg">
<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] shrink-0"></span>
<span>Miejsce: <strong>Stacjonarnie (Warszawa) lub Online</strong></span>
</li>
<li className="flex items-center gap-4 text-[#2C2C2C] text-lg">
<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A3D] shrink-0"></span>
<span>Wsparcie pomiędzy sesjami w razie potrzeby</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-center bg-[#2D5A3D] text-[#FFFFFF] px-8 py-4 rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:bg-[#1E4A2E] transition-all duration-300 text-base" href="#">
                        Umów się na sesję
                    </a>
<a className="w-full sm:w-auto text-center bg-transparent border border-[#2D5A3D] text-[#2D5A3D] px-8 py-4 rounded-lg hover:bg-[#EEF4EF] transition-all duration-300 text-base" href="#contact">
                        Umów 15-min. rozmowę
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-[#2D5A3D] py-32 px-6">
<div className="max-w-screen-md mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-serif text-[#FFFFFF] tracking-tight leading-tight mb-12">
                Pozwól sobie na zatrzymanie.<br/> To najważniejszy krok, jaki możesz teraz zrobić.
            </h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#FFFFFF] text-[#2D5A3D] px-10 py-4 rounded-lg shadow-[0_2px_12px_rgba(0,0,0,0.2)] hover:bg-[#FAF8F5] transition-all duration-300 text-base font-medium" href="#offer">
                    Rozpocznij współpracę
                </a>
<a className="w-full sm:w-auto bg-transparent border border-[#FFFFFF] text-[#FFFFFF] px-10 py-4 rounded-lg hover:bg-[#FFFFFF]/10 transition-all duration-300 text-base" href="#contact">
                    Porozmawiajmy najpierw
                </a>
</div>
</div>
</section>

<section className="bg-[#FAF8F5] py-24 md:py-32 px-6">
<div className="max-w-screen-md mx-auto">
<div className="flex items-center gap-4 mb-16 justify-center">
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2D5A3D] tracking-tight text-center">Częste pytania</h2>
<span className="w-8 h-[1px] bg-[#2D5A3D]"></span>
</div>
<div className="space-y-2">

<details className="group border-b border-[#D4DED6] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-6 text-lg font-medium text-[#2C2C2C]">
<span>Czy hipnoza jest bezpieczna?</span>
<span className="relative ml-4 shrink-0">
<iconify-icon className="icon-plus text-xl text-[#2D5A3D]" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl text-[#2D5A3D] absolute inset-0" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-[#6B7B6E] leading-relaxed text-base pr-8">
                        Tak, to całkowicie naturalny stan głębokiego relaksu i skupienia. Podczas całego procesu zachowujesz pełną kontrolę i świadomość tego, co się dzieje. Nie zrobisz ani nie powiesz niczego, co byłoby sprzeczne z Twoimi wartościami.
                    </div>
</details>

<details className="group border-b border-[#D4DED6] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-6 text-lg font-medium text-[#2C2C2C]">
<span>Ile sesji będę potrzebować?</span>
<span className="relative ml-4 shrink-0">
<iconify-icon className="icon-plus text-xl text-[#2D5A3D]" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl text-[#2D5A3D] absolute inset-0" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-[#6B7B6E] leading-relaxed text-base pr-8">
                        Proces jest wysoce indywidualny, ale ze względu na specyfikę pracy z podświadomością, zmiany następują stosunkowo szybko. Zazwyczaj pierwsze wyraźne efekty w codziennym funkcjonowaniu i poziomie napięcia moi klienci zauważają już po 3-4 spotkaniach.
                    </div>
</details>

<details className="group border-b border-[#D4DED6] [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between py-6 text-lg font-medium text-[#2C2C2C]">
<span>Jak przygotować się do pierwszej rozmowy?</span>
<span className="relative ml-4 shrink-0">
<iconify-icon className="icon-plus text-xl text-[#2D5A3D]" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl text-[#2D5A3D] absolute inset-0" icon="solar:minus-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-[#6B7B6E] leading-relaxed text-base pr-8">
                        Nie potrzebujesz żadnego specjalnego przygotowania. Wystarczy, że znajdziesz spokojne miejsce na 15 minut, w którym nikt nie będzie Ci przeszkadzał. Pierwsza rozmowa służy temu, byśmy sprawdzili, czy moje metody odpowiadają Twoim potrzebom.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#FFFFFF] py-12 text-center border-t border-[#D4DED6]">
<div className="text-[#2D5A3D] font-serif tracking-widest text-xl mb-4">JK</div>
<p className="text-sm text-[#6B7B6E]">© 2023 Joanna Karpeta. Wszelkie prawa zastrzeżone.</p>
</footer>

    </>
  );
}
