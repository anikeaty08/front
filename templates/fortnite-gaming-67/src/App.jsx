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
      

<main className="w-full max-w-[1400px] bg-[#FDFDFD] rounded-[2.5rem] shadow-2xl relative flex flex-col overflow-hidden">

<header className="flex lg:px-12 pt-8 pr-8 pb-8 pl-8 items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-8 w-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-purple-200">SM</div>
<span className="font-bold tracking-tight text-sm uppercase">Staś Gaming</span>
</div>

<nav className="hidden lg:flex items-center gap-10">
<a className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-purple-600 transition-colors" href="#">Strategia</a>
<a className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-purple-600 transition-colors" href="#">Odcinki</a>
<a className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-purple-600 transition-colors" href="#">Setup</a>
<a className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-purple-600 transition-colors" href="#">Współpraca</a>
</nav>

<div className="flex items-center gap-4">
<button className="flex items-center gap-2 bg-[#0F0F0F] text-white text-[0.7rem] font-medium uppercase tracking-widest px-6 py-3 rounded-full hover:bg-purple-600 hover:scale-105 transition-all shadow-lg shadow-gray-300/50">
                    Subskrybuj <i className="w-3 h-3" data-lucide="youtube"></i>
</button>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[70vh]">

<div className="relative flex flex-col justify-center px-8 pb-12 pt-4 lg:px-12 xl:px-20 z-10">
<p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-purple-600 mb-6 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Fortnite Content Creator
                </p>
<div className="relative mb-6">
<h1 className="text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-tighter leading-[0.85] text-[#0A0A0A]">
                        STAŚ<br/>GAME<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">PRO</span>
</h1>
<div className="absolute -bottom-4 left-0 lg:left-2 inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full transform -rotate-2 hover:rotate-0 transition-transform cursor-default z-20 shadow-xl border-2 border-black">
<span className="text-[0.65rem] font-bold uppercase tracking-widest">Droga do Victory Royale</span>
</div>
</div>
<div className="mt-8 max-w-lg">
<h2 className="text-xl font-medium tracking-tight text-gray-900 mb-4 leading-snug">
                        Triki, strategie i zabawa w <span className="text-purple-600 font-semibold">Fortnite</span> – bez pokazywania twarzy, ale z pełną energią!
                    </h2>
<p className="text-base text-gray-500 leading-relaxed font-normal mb-8">
                        Dołącz do mojej ekipy! Uczymy się "Piece Control", robimy epickie wyzwania i sprawdzamy nowości w Battle Passie. Kanał dla graczy 8-14 lat.
                    </p>
<div className="flex gap-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
</div>
<span className="text-xs text-gray-400 font-medium self-center uppercase tracking-wider">Dołącz do widzów</span>
</div>
</div>
</div>

<div className="relative h-[50vh] lg:h-auto overflow-hidden lg:rounded-tl-[4rem] group bg-gray-900">

<img alt="Gaming Setup Abstract" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t to-transparent from-purple-900/60 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-8 lg:left-12 transform -translate-y-1/2 z-10">
<div className="flex items-center justify-center w-16 h-16 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white shadow-2xl animate-bounce duration-[3000ms]">
<i className="w-8 h-8 text-purple-300" data-lucide="gamepad-2"></i>
</div>
</div>
<div className="absolute bottom-12 right-8 lg:right-12 z-10">
<div className="px-5 py-3 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-xl text-white flex flex-col gap-1 shadow-2xl hover:bg-black/60 transition-colors cursor-default">
<span className="text-[0.6rem] text-gray-300 font-semibold uppercase tracking-widest">Ulubiona Bron</span>
<span className="text-sm font-bold flex items-center gap-2">Legendary Pump <div className="w-2 h-2 rounded-full bg-yellow-400"></div></span>
</div>
</div>

<div className="absolute top-20 right-20 w-32 h-32 bg-blue-500 rounded-full blur-[80px] opacity-40 animate-pulse"></div>
</div>
</div>

<section className="p-4 lg:p-8">
<div className="relative w-full rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden px-6 py-20 md:px-16 md:py-28 text-center group">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-purple-600/20 blur-[120px] rounded-full pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-1000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 contrast-150 mix-blend-soft-light pointer-events-none"></div>

<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-[0.65rem] uppercase tracking-widest font-semibold">
<i className="w-3 h-3" data-lucide="headphones"></i> Audio First
                    </div>

<h3 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15] mb-8">
                        "Cześć, tu Staś! Dzisiaj zobaczycie, jak pokonałem całą mapę <span className="text-purple-400">tylko szarą bronią</span>!"
                    </h3>

<p className="text-lg md:text-xl font-normal text-gray-400 leading-relaxed max-w-3xl mb-12">
                        Mój kanał to miejsce bez hejtu. Stawiam na <strong>dobry mikrofon</strong> i świetne słuchawki, żeby komentarz był krystalicznie czysty. Nie musisz widzieć mojej twarzy, żeby poczuć emocje z Victory Royale!
                    </p>

<div className="grid grid-cols-3 gap-8 md:gap-16 border-t border-white/10 pt-12">
<div>
<p className="text-3xl font-semibold text-white">100%</p>
<p className="text-gray-500 text-[0.65rem] uppercase tracking-widest mt-1">Zabawy</p>
</div>
<div>
<p className="text-3xl font-semibold text-white">0%</p>
<p className="text-gray-500 text-[0.65rem] uppercase tracking-widest mt-1">Nudy</p>
</div>
<div>
<p className="text-3xl font-semibold text-white">24/7</p>
<p className="text-gray-500 text-[0.65rem] uppercase tracking-widest mt-1">Strategie</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-16 xl:px-24 pt-8 pr-8 pb-20 pl-8">
<div className="flex flex-col gap-2 mb-16">
<span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-purple-600">Plan Kanału</span>
<h2 className="text-3xl font-medium tracking-tight text-gray-900">Kategorie Filmów</h2>
</div>
<div className="flex flex-col gap-24 gap-x-24 gap-y-24">

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

<div className="aspect-square lg:aspect-[4/3] overflow-hidden flex bg-indigo-50 w-full rounded-[2.5rem] relative shadow-inner items-center justify-center border border-indigo-100">
<div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-blue-400 rounded-full blur-3xl opacity-20"></div>

<div className="overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500 bg-white w-[85%] h-[85%] border-gray-100 border-4 rounded-[2rem] relative shadow-2xl flex flex-col items-center justify-center p-8">
<i className="w-20 h-20 text-blue-500 mb-4 opacity-80" data-lucide="map"></i>
<div className="w-full h-2 bg-gray-100 rounded-full mb-2 overflow-hidden"><div className="w-2/3 h-full bg-blue-500 rounded-full"></div></div>
<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Lokalizacja zrzutu</span>
</div>
</div>

<div className="flex flex-col justify-center items-start lg:pr-12">
<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[0.65rem] uppercase tracking-widest font-semibold">Dla Początkujących</div>
<h3 className="text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                            Poradniki na Start
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed font-normal mb-8 max-w-lg">
                            Jak przetrwać pierwsze 5 minut? Gdzie lądować w nowym sezonie, żeby zdobyć najlepszy loot? Pokazuję "Loot Routes" i sposoby na szybkie zdobywanie XP.
                        </p>
<button className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                            Zobacz przykładowy scenariusz <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

<div className="flex flex-col justify-center items-start lg:pr-12 order-2 lg:order-1">
<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-[0.65rem] uppercase tracking-widest font-semibold">Pro Gaming</div>
<h3 className="text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                            Sztuczki Budowania
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed font-normal mb-8 max-w-lg">
                            Opanuj "Piece Control" i "High Ground Retakes". Uczę jak edytować ściany szybciej niż przeciwnik i jak wygrywać pojedynki 1v1 w box fightach.
                        </p>
<button className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                            Trenuj ze Stasiem <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] bg-purple-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-inner border border-purple-100 order-1 lg:order-2">
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500 rounded-full blur-3xl opacity-20"></div>

<div className="overflow-hidden transform group-hover:-rotate-2 transition-transform duration-500 bg-gray-900 w-[80%] h-[80%] border-gray-800 border-8 rounded-[2rem] relative shadow-2xl flex items-center justify-center">
<i className="w-24 h-24 text-purple-400 animate-pulse" data-lucide="box"></i>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

<div className="aspect-square lg:aspect-[4/3] overflow-hidden flex bg-yellow-50 w-full rounded-[2.5rem] relative shadow-inner items-center justify-center border border-yellow-100">
<div className="absolute top-[20%] right-[20%] w-[50%] h-[50%] bg-orange-400 rounded-full blur-3xl opacity-20"></div>

<div className="overflow-hidden transform group-hover:scale-[1.05] transition-transform duration-500 flex flex-col bg-white w-[90%] h-[70%] border-gray-100 border-4 rounded-[1.5rem] relative shadow-xl justify-center items-center gap-4">
<div className="p-4 bg-red-100 rounded-full text-red-600 animate-bounce">
<i className="w-10 h-10" data-lucide="alert-triangle"></i>
</div>
<span className="font-bold text-2xl text-gray-800 tracking-tight">1 HP CHALLENGE</span>
</div>
</div>

<div className="flex flex-col justify-center items-start lg:pr-12">
<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-[0.65rem] uppercase tracking-widest font-semibold">Rozrywka</div>
<h3 className="text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                            Wyzwania i Fun
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed font-normal mb-8 max-w-lg">
                            "Wygrana tylko z szarą bronią", "Przetrwaj z 1 HP", "Najdziwniejsze błędy w grze". Śmieszne momenty, wpadki i dużo śmiechu – dzieci to uwielbiają!
                        </p>
<button className="inline-flex items-center gap-3 text-black text-xs font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                            Oglądaj wyzwania <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

<div className="flex flex-col justify-center items-start lg:pr-12 order-2 lg:order-1">
<div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-[0.65rem] uppercase tracking-widest font-semibold">Zaplecze</div>
<h3 className="text-4xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">
                            Profesjonalne Audio
                        </h3>
<p className="text-lg text-gray-500 leading-relaxed font-normal mb-8 max-w-lg">
                            Skoro nie pokazuję twarzy, głos musi być idealny! Inwestuję w dobry mikrofon i ramię, aby każde "Uważaj, snajper!" brzmiało czysto i profesjonalnie.
                        </p>
<ul className="flex flex-col gap-2 mb-6">
<li className="flex items-center gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Mikrofon kardioidalny</li>
<li className="flex items-center gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Słuchawki zamknięte</li>
<li className="flex items-center gap-2 text-sm text-gray-600"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Brak szumów tła</li>
</ul>
</div>

<div className="relative w-full aspect-square lg:aspect-[4/3] bg-gray-100 rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-inner order-1 lg:order-2">
<div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-gray-300 to-transparent"></div>

<div className="overflow-hidden transform group-hover:scale-105 transition-transform duration-500 w-[60%] h-[60%] bg-white rounded-full relative shadow-2xl flex items-center justify-center border-4 border-gray-50">
<i className="w-24 h-24 text-gray-800" data-lucide="mic"></i>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white py-12 px-8 text-center mt-8">
<h2 className="text-2xl font-medium tracking-tight mb-4">Gotowy na grę?</h2>
<p className="text-gray-400 text-sm mb-8">Zasubskrybuj kanał Stasia i nie przegap kolejnego odcinka!</p>
<button className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-3 rounded-full hover:bg-gray-200 transition-colors">
                Przejdź do YouTube
            </button>
<p className="text-[0.6rem] text-gray-600 uppercase tracking-widest mt-12">© 2024 Staś Możejewski. All rights reserved.</p>
</footer>
</main>


    </>
  );
}
