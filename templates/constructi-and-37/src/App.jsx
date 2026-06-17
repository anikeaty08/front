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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="absolute top-0 w-full z-50 px-6 py-5 flex items-center justify-between max-w-7xl mx-auto left-0 right-0">
<a className="flex items-center gap-2 group" href="#">
<i className="text-red-600 w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="hard-hat" strokeWidth="1.5"></i>
<span className="text-white font-medium tracking-tight text-xl">REM <span className="text-red-600">BUD</span></span>
</a>
<nav className="hidden md:flex gap-8 text-sm font-normal text-slate-300">
<a className="hover:text-white transition-colors duration-200" href="#">Strona główna</a>
<a className="hover:text-white transition-colors duration-200" href="#">Oferta</a>
<a className="hover:text-white transition-colors duration-200" href="#">Realizacje</a>
<a className="hover:text-white transition-colors duration-200" href="#">Kontakt</a>
</nav>
<button className="bg-red-600 text-white px-5 py-2.5 rounded-md flex items-center gap-2 text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> 510 564 072
        </button>
</header>

<section className="relative min-h-[85vh] flex items-center justify-center pt-24 pb-12">
<div className="absolute inset-0 z-0">
<img alt="Construction worker drilling" className="w-full h-full object-cover object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#070e1b]/85 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Kompleksowe wykończenia <br className="hidden md:block"/>
                    wnętrz i remonty od A do Z
                </h1>
<p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
                    Działamy na terenie całej Polski od 2002 roku. Realizujemy kompleksowe wykończenia mieszkań, domów oraz remonty z pełnym nadzorem na każdym etapie prac.
                </p>
<button className="bg-red-600 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-red-700 transition-colors shadow-sm">
                    Zobacz ofertę
                </button>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div>
<span className="text-red-600 text-xs font-medium tracking-widest uppercase mb-4 block">O Nas</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8 leading-snug">
                Doświadczenie, solidność i kompleksowa realizacja od 2002 roku
            </h2>
<p className="text-base text-slate-400 mb-10 leading-relaxed">
                Od ponad 20 lat realizujemy kompleksowe wykończenia wnętrz, remonty mieszkań i domów oraz prace adaptacyjne. Stawiamy na solidność, terminowość i indywidualne podejście do każdego zlecenia.
            </p>
<div className="flex items-start gap-5">
<div className="p-3 bg-red-600/10 rounded-lg shrink-0 mt-1">
<i className="text-red-600 w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-white font-medium text-lg mb-2 tracking-tight">Szeroki zakres usług</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Wykończenia, remonty, meble, schody, elewacje i ogrodzenia.
                    </p>
</div>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-800 flex flex-col items-center justify-center group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-[#070e1b] to-[#070e1b]"></div>
<div className="relative z-10 flex flex-col items-center transform group-hover:scale-105 transition-transform duration-700">
<i className="text-red-600 w-24 h-24 mb-6" data-lucide="hard-hat" strokeWidth="1.5"></i>
<div className="text-4xl font-medium tracking-tight text-white mb-2">REM <span className="text-red-600">BUD</span></div>
<div className="w-16 h-1 bg-red-600 rounded-full"></div>
</div>
</div>
</section>

<div className="h-[400px] w-full relative">
<img alt="Carpenter measuring wood" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/60"></div>
</div>

<section className="py-32 px-6 max-w-7xl mx-auto flex flex-col items-center">
<div className="text-center mb-20 max-w-3xl">
<span className="text-red-600 text-xs font-medium tracking-widest uppercase mb-4 block">Sprawdź naszą ofertę</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-snug">
                Kompleksowe usługi dopasowane <br className="hidden md:block"/> do każdej realizacji
            </h2>
</div>
<div className="w-full grid lg:grid-cols-[280px_1fr] gap-12 items-start">
<div className="flex flex-col gap-3">
<button className="w-full text-center px-6 py-4 rounded-lg bg-red-600 text-white font-medium text-sm transition-colors shadow-sm">
                    Wnętrza pod klucz
                </button>
<button className="w-full text-center px-6 py-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm hover:border-red-600/50 hover:text-white transition-colors">
                    Remonty A-Z
                </button>
<button className="w-full text-center px-6 py-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm hover:border-red-600/50 hover:text-white transition-colors">
                    Zabudowy meblowe
                </button>
<button className="w-full text-center px-6 py-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm hover:border-red-600/50 hover:text-white transition-colors">
                    Elewacje
                </button>
<button className="w-full text-center px-6 py-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm hover:border-red-600/50 hover:text-white transition-colors">
                    Instalacje
                </button>
<button className="w-full text-center px-6 py-4 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 font-medium text-sm hover:border-red-600/50 hover:text-white transition-colors">
                    Stolarka
                </button>
</div>
<div className="rounded-xl overflow-hidden aspect-[16/10] border border-slate-800 relative group">
<img alt="Modern interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] rounded-xl pointer-events-none"></div>
</div>
</div>
<button className="mt-16 bg-red-600 text-white px-8 py-3.5 rounded-md text-sm font-medium hover:bg-red-700 transition-colors shadow-sm">
            Zobacz całą ofertę
        </button>
</section>

<section className="bg-red-600 py-20 px-6 border-y border-red-700">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-center text-white">
<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl font-medium tracking-tight">311</div>
<div className="text-sm font-medium text-red-100 uppercase tracking-wider">Zrealizowanych</div>
</div>
<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl font-medium tracking-tight">3+</div>
<div className="text-sm font-medium text-red-100 uppercase tracking-wider">Lata Gwarancji</div>
</div>
<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl font-medium tracking-tight">4.8</div>
<div className="text-sm font-medium text-red-100 uppercase tracking-wider">Ocena Klientów</div>
</div>
<div className="flex flex-col gap-2">
<div className="text-4xl md:text-5xl font-medium tracking-tight">15%</div>
<div className="text-sm font-medium text-red-100 uppercase tracking-wider">Szybsze Rabaty</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto text-center">
<div className="mb-20 max-w-2xl mx-auto">
<span className="text-red-600 text-xs font-medium tracking-widest uppercase mb-4 block">Nasze realizacje</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                Zobacz wybrane realizacje naszych prac
            </h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Łazienka Premium</span>
</div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Salon Nowoczesny</span>
</div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Zabudowa Kuchenna</span>
</div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Wnętrze Loft</span>
</div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Detale Wykończenia</span>
</div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-900 border border-slate-800">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#070e1b]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="text-white font-medium tracking-tight">Przestrzeń Domowa</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<span className="text-red-600 text-xs font-medium tracking-widest uppercase mb-4 block">Współpraca</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                Jak wygląda współpraca?
            </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="overflow-hidden group hover:border-red-600/30 transition-colors duration-300 bg-slate-900/50 border-slate-800 border rounded-xl pt-10 pr-10 pb-10 pl-10 relative">
<div className="absolute -top-10 -right-10 text-[150px] font-medium text-slate-800/20 pointer-events-none group-hover:text-red-600/5 transition-colors duration-300">1</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-medium text-xl mb-8 shadow-sm">1</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Kontakt i ustalenia</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Rozmawiamy o zakresie prac, potrzebach oraz oczekiwanym efekcie realizacji. Dopasowujemy rozwiązania.
                    </p>
</div>
</div>
<div className="bg-slate-900/50 rounded-xl p-10 border border-slate-800 relative overflow-hidden group hover:border-red-600/30 transition-colors duration-300">
<div className="absolute -top-10 -right-10 text-[150px] font-medium text-slate-800/20 pointer-events-none group-hover:text-red-600/5 transition-colors duration-300">2</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-medium text-xl mb-8 shadow-sm">2</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Wycena i plan prac</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Przygotowujemy wycenę oraz ustalamy harmonogram działań, aby zapewnić płynność realizacji.
                    </p>
</div>
</div>
<div className="bg-slate-900/50 rounded-xl p-10 border border-slate-800 relative overflow-hidden group hover:border-red-600/30 transition-colors duration-300">
<div className="absolute -top-10 -right-10 text-[150px] font-medium text-slate-800/20 pointer-events-none group-hover:text-red-600/5 transition-colors duration-300">3</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center text-white font-medium text-xl mb-8 shadow-sm">3</div>
<h3 className="text-xl font-medium text-white mb-4 tracking-tight">Realizacja inwestycji</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Wykonujemy prace zgodnie z ustaleniami i nadzorujemy każdy etap, dbając o najwyższą jakość.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
<div className="grid lg:grid-cols-[1fr_500px] gap-20 items-start">
<div className="max-w-xl">
<span className="text-red-600 text-xs font-medium tracking-widest uppercase mb-4 block">Skontaktuj się z nami</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-8 leading-snug">
                    Porozmawiajmy o Twojej realizacji
                </h2>
<p className="text-base text-slate-400 mb-12 leading-relaxed">
                    Jeśli planujesz wykończenie wnętrza, remont lub inne prace budowlane – skontaktuj się z nami. Chętnie doradzimy i przygotujemy odpowiednie rozwiązanie.
                </p>
<div className="space-y-8">
<div className="flex items-center gap-5 p-4 rounded-xl border border-slate-800 bg-slate-900/30">
<div className="p-3 bg-slate-800 rounded-lg text-red-600">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-white font-medium text-sm mb-1 tracking-tight">Adres e-mail</div>
<div className="text-slate-400 text-base">kontakt@rembud.pl</div>
</div>
</div>
<div className="flex items-center gap-5 p-4 rounded-xl border border-slate-800 bg-slate-900/30">
<div className="p-3 bg-slate-800 rounded-lg text-red-600">
<i className="w-6 h-6" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-white font-medium text-sm mb-1 tracking-tight">Kontakt telefoniczny</div>
<div className="text-slate-400 text-base">510 564 072</div>
</div>
</div>
</div>
</div>
<div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300 ml-1">Imię</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300 ml-1">Adres e-mail</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" placeholder="jan@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-300 ml-1">Wiadomość</label>
<textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none" placeholder="Opisz swój projekt..." rows="5"></textarea>
</div>
<button className="w-full bg-red-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-sm mt-4" type="button">
                        Wyślij wiadomość
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#050912] py-20 px-6 border-t border-slate-800">
<div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_auto] gap-16 items-start">
<div className="max-w-sm">
<a className="flex items-center gap-2 group mb-6 inline-flex" href="#">
<i className="text-red-600 w-6 h-6 group-hover:scale-110 transition-transform duration-300" data-lucide="hard-hat" strokeWidth="1.5"></i>
<span className="text-white font-medium tracking-tight text-xl">REM <span className="text-red-600">BUD</span></span>
</a>
<p className="text-base text-slate-500 leading-relaxed mb-8">
                     Od 2002 roku realizujemy kompleksowe wykończenia wnętrz, remonty oraz szeroki zakres prac budowlanych. Zajmujemy się zarówno nowymi inwestycjami, jak i modernizacją istniejących przestrzeni.
                 </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-600 hover:bg-red-600/10 transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-red-600 hover:bg-red-600/10 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex flex-col gap-4 text-sm min-w-[200px]">
<h4 className="text-white font-medium mb-2 tracking-tight">Szybkie odnośniki</h4>
<a className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Strona główna
                 </a>
<a className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Oferta
                 </a>
<a className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Realizacje
                 </a>
<a className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group" href="#">
<span className="w-1 h-1 rounded-full bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Kontakt
                 </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800/50 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 REM BUD. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400 transition-colors" href="#">Polityka prywatności</a>
<a className="hover:text-slate-400 transition-colors" href="#">Regulamin</a>
</div>
</div>
</footer>


    </>
  );
}
