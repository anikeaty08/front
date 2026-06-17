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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
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
      

<nav className="w-full border-b border-white/5 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="serif-font text-xl md:text-2xl text-white tracking-tight">
                Radca <span className="text-yellow-600 italic">Prawny</span> Flisiewicz
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Strona główna</a>
<a className="text-white" href="#">O mnie</a>
<a className="hover:text-white transition-colors" href="#">Zakres usług</a>
<a className="hover:text-white transition-colors" href="#">Kontakt</a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative w-full flex-grow flex items-center overflow-hidden">

<div className="absolute inset-0 bg-neutral-950 z-0"></div>

<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] z-0 h-full">

<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent z-10 lg:via-neutral-950/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/20 z-10 lg:hidden"></div>
<img alt="Radca Prawny Bartosz Flisiewicz" className="w-full h-full object-cover object-center lg:object-[center_20%]" src="https://flisiewicz.pl/wp-content/uploads/2025/11/0O0A4616-scaled.jpg"/>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
<div className="flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 flex flex-col gap-8">

<div className="w-16 h-1 bg-yellow-600 rounded-full"></div>

<h1 className="serif-font text-5xl md:text-6xl lg:text-7xl text-white font-medium leading-[1.1] tracking-tight">
                        Radca Prawny <br/>
<span className="italic text-neutral-400">Bartosz</span> Flisiewicz
                    </h1>

<div className="prose prose-lg prose-invert text-neutral-400 font-light leading-relaxed max-w-xl">
<p>
                            Jestem <span className="text-white font-medium">radcą prawnym przy Okręgowej Izbie Radców Prawnych we Wrocławiu</span> z wieloletnim doświadczeniem w jednych z <span className="text-white font-medium">największych kancelarii</span> w regionie. Dotychczasowe uczestnictwo w setkach rozpraw pozwala mi na lepsze zrozumienie funkcjonowania polskiego sądownictwa.
                        </p>
<p className="mt-4">
<span className="text-white font-medium">Dbałość o dobro klienta</span> jest jedną z nadrzędnych wartości, którymi kieruję się w mojej pracy zawodowej. Zadowolenie klienta z wykonanej usługi nierzadko stanowi wymierną ocenę przeprowadzonych działań prawnych.
                        </p>
<p className="mt-4">
                            Moim celem jest zapewnienie <span className="text-white font-medium">realnej pomocy prawnej</span> – takiej, która nie tylko rozwiązuje bieżące problemy, ale również pozwala na <span className="text-white font-medium">zapobieżenie przyszłym sporom</span>. W swojej pracy łączę wiedzę prawniczą z praktycznym spojrzeniem na sytuację, abyś mógł poczuć się pewnie i bezpiecznie.
                        </p>
</div>

<div className="flex flex-col sm:flex-row gap-4 mt-4 items-start sm:items-center">

<a className="group flex items-center gap-3 bg-white text-neutral-950 px-6 py-3.5 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg shadow-white/5" href="tel:+48508109445">
<i className="w-5 h-5 text-neutral-950 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<span className="font-semibold tracking-tight text-sm md:text-base">+48 508 109 445</span>
</a>

<a className="group flex items-center gap-3 px-6 py-3.5 rounded-lg border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 transition-all duration-300" href="mailto:radcaprawny@flisiewicz.pl">
<i className="w-5 h-5 text-yellow-600 group-hover:text-white transition-colors" data-lucide="mail"></i>
<span className="font-medium text-neutral-300 group-hover:text-white tracking-tight text-sm md:text-base">radcaprawny@flisiewicz.pl</span>
</a>
</div>
</div>

<div className="hidden lg:block w-1/2 h-full"></div>
</div>
</div>

<div className="hidden lg:flex absolute bottom-12 right-12 z-20 items-center gap-4 bg-neutral-900/90 backdrop-blur border border-neutral-800 p-4 rounded-xl shadow-2xl">
<div className="flex flex-col">
<span className="text-xs text-neutral-400 uppercase tracking-widest font-semibold mb-1">Kontakt Bezpośredni</span>
<span className="text-yellow-500 font-medium serif-font text-lg">+48 508 109 445</span>
</div>
<div className="h-10 w-10 bg-yellow-600 rounded-full flex items-center justify-center text-neutral-950">
<i className="w-5 h-5" data-lucide="phone-call"></i>
</div>
</div>
</main>


    </>
  );
}
