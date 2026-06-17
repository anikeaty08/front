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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-white/10 to-transparent blur-[120px] pointer-events-none z-0 opacity-40"></div>

<div className="absolute inset-0 h-[800px] bg-grid z-0 pointer-events-none"></div>

<nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center max-w-6xl mx-auto">
<div className="flex items-center gap-2">
<span className="iconify text-white" data-icon="lucide:layers" data-width="1.5" style={{fontSize: '24px'}}></span>
<span className="text-sm tracking-widest font-semibold text-white uppercase">Synergy Codes</span>
</div>
<div className="text-xs font-medium text-neutral-500 tracking-tight">THE FIVE SYSTEM</div>
</nav>

<main className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-12 pb-24 md:pt-20 md:pb-32">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

<div className="flex-1 text-center md:text-left space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-200/90 text-xs font-medium tracking-wide mx-auto md:mx-0">
<span className="iconify" data-icon="lucide:zap" data-width="1.5"></span>
                    100 egzemplarzy – tylko teraz
                </div>

<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400 leading-[1.1]">
                    Odbierz darmowego <br className="hidden md:block"/> ebooka „The Five”
                </h1>

<div className="space-y-4">
<h2 className="text-lg md:text-xl text-neutral-200 font-medium">
                        Książka, o której mówił cały LinkedIn. <br className="hidden md:block"/>
                        Praktyczny system dla przedsiębiorców, twórców i liderów.
                    </h2>
<p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                        „The Five” to esencja wiedzy o budowaniu silnych, wyspecjalizowanych firm i własnego IP – podana w prosty, konkretny sposób. System Tomka Karwatki zgromadził 44 tys. widzów podczas 9-godzinnej premiery live i realnie pomaga firmom rosnąć.
                    </p>
</div>

<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto md:mx-0 pt-2">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-neutral-200 transition-colors duration-200 px-6 py-3 rounded-md text-sm font-medium tracking-tight" href="#claim-form">
<span>👉 Zostaw e-mail i odbierz ebooka</span>
</a>
</div>
<p className="text-xs text-neutral-600 text-center md:text-left">
                    Po zapisie wyślemy kod do pobrania.
                </p>
</div>

<div className="flex-1 flex justify-center md:justify-end relative">

<div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full scale-75"></div>
<div className="book-container w-48 md:w-64 aspect-[2/3]">
<div className="book relative w-full h-full bg-neutral-900 border border-neutral-700 rounded-r-lg">

<div className="absolute inset-0 rounded-r-lg bg-gradient-to-br from-neutral-800 to-black overflow-hidden flex flex-col items-center justify-between p-6 border-l border-neutral-700">
<div className="w-full flex justify-between items-start opacity-50">
<span className="iconify text-white" data-icon="lucide:hexagon" data-width="1.5"></span>
<span className="text-[10px] tracking-widest text-white uppercase">Volume 1</span>
</div>
<div className="text-center space-y-2">
<h3 className="text-4xl font-serif text-white tracking-tighter italic">The<br/>Five</h3>
<div className="w-8 h-[1px] bg-white/50 mx-auto"></div>
<p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">System</p>
</div>
<div className="text-center">
<p className="text-[10px] text-neutral-500 font-medium">Tomek Karwatka</p>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
</div>

<div className="book-spine"></div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full bg-neutral-900/30 border-y border-white/5 relative">
<div className="max-w-5xl mx-auto px-6 py-20">
<div className="text-center mb-12">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Dlaczego „The Five”?</h3>
<p className="text-neutral-500 text-sm">Sprawdzony system budowania przewagi</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="group p-6 rounded-lg border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-neutral-800 text-white">
<span className="iconify" data-icon="lucide:trending-up" data-width="1.5"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Sprawdzony system</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                                Budowanie przewagi rynkowej oparte na wieloletnim doświadczeniu.
                            </p>
</div>
</div>
</div>

<div className="group p-6 rounded-lg border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-neutral-800 text-white">
<span className="iconify" data-icon="lucide:focus" data-width="1.5"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Fokus na specjalizację</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                                Wąska specjalizacja, która przynosi realne, mierzalne efekty biznesowe.
                            </p>
</div>
</div>
</div>

<div className="group p-6 rounded-lg border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-neutral-800 text-white">
<span className="iconify" data-icon="lucide:zap-off" data-width="1.5"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Zero korpomowy</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                                Wiedza, którą możesz wdrożyć od razu. Konkrety, bez zbędnej teorii.
                            </p>
</div>
</div>
</div>

<div className="group p-6 rounded-lg border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-neutral-800 text-white">
<span className="iconify" data-icon="lucide:blocks" data-width="1.5"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Fundament produktów</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                                Idealna baza pod budowę własnych produktów cyfrowych i społeczności.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-2 group p-6 rounded-lg border border-white/5 bg-gradient-to-r from-green-900/10 to-neutral-900/50 hover:border-green-500/20 transition-all duration-300">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-green-900/30 text-green-400">
<span className="iconify" data-icon="lucide:trees" data-width="1.5"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Inicjatywa, która robi dobro</h4>
<p className="text-sm text-neutral-400 leading-relaxed font-light">
                                Każdy zakup wspierał akcję sadzenia lasów (25 ha objętych ochroną). Teraz Ty dostajesz tę wartość za darmo.
                            </p>
</div>
</div>
</div>
</div>

<div className="mt-12 p-8 rounded-xl bg-neutral-950 border border-neutral-800 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
<div className="shrink-0">
<div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold tracking-tight text-xs">SC</div>
</div>
<div>
<p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed">
<span className="text-white font-medium">Jako Synergy Codes</span> dołączyliśmy do grona firm korzystających z The Five System. 
                            Teraz mamy możliwość przekazania <span className="text-white underline decoration-neutral-700 underline-offset-4">100 ebooków bezpłatnie</span>.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative py-24 px-6" id="claim-form">
<div className="max-w-xl mx-auto text-center">
<div className="mb-8 space-y-2">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Zgarnij jeden z 100 ebooków</h3>
<p className="text-neutral-400 text-sm md:text-base font-light">
                    Podaj swój adres e-mail. W odpowiedzi wyślemy Ci kod do pobrania.
                </p>
</div>
<div className="bg-neutral-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl shadow-black/50">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-neutral-500 group-focus-within:text-white transition-colors" data-icon="lucide:mail" data-width="1.5"></span>
</div>
<input className="block w-full pl-10 pr-3 py-3 bg-black border border-neutral-800 rounded-lg text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 transition-all text-sm" placeholder="twój@email.com" required="" type="email"/>
</div>
<button className="w-full bg-white text-black hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 py-3 rounded-lg text-sm font-medium tracking-tight flex items-center justify-center gap-2 group" type="submit">
<span>Odbieram ebooka „The Five”</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="1.5"></span>
</button>
</form>
<div className="mt-6 flex items-center justify-center gap-2 text-yellow-500/80 bg-yellow-500/5 py-2 rounded border border-yellow-500/10">
<span className="iconify" data-icon="lucide:hourglass" data-width="1.5"></span>
<span className="text-xs font-medium">⏳ Liczba ebooków ograniczona – decyduje kolejność zapisów.</span>
</div>
<p className="mt-4 text-[10px] text-neutral-600 uppercase tracking-wider">
                    Nie spamujemy. Możesz wypisać się w każdej chwili.
                </p>
</div>
</div>
</section>

<footer className="w-full border-t border-white/5 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 opacity-50">
<span className="iconify text-white" data-icon="lucide:layers" data-width="1.5"></span>
<span className="text-xs tracking-widest font-semibold text-white uppercase">Synergy Codes</span>
</div>
<div className="text-[10px] text-neutral-600">
                © 2024 Synergy Codes. Wszelkie prawa zastrzeżone.
            </div>
</div>
</footer>

    </>
  );
}
