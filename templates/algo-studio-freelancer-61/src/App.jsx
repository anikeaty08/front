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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-[600px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

<header className="fixed top-0 left-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<nav className="flex justify-between items-center max-w-[1200px] mx-auto px-6 py-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-lg font-bold tracking-tighter text-lg group-hover:bg-blue-500 transition-colors duration-300">
                    A.
                </div>
<span className="text-sm font-medium tracking-tight text-white hidden md:block">ALGO <span className="text-indigo-500">/ STUDIO</span></span>
</a>

<div className="hidden md:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/5">
<a className="text-sm text-indigo-400 hover:text-white transition-colors" href="#o-mnie">O Mnie</a>
<a className="text-sm text-indigo-400 hover:text-white transition-colors" href="#oferta">Oferta</a>
<a className="text-sm text-indigo-400 hover:text-white transition-colors" href="#proces">Proces</a>
<a className="text-sm text-indigo-400 hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>

<a className="text-sm font-medium text-white border border-white/10 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all" href="#kontakt">
                Darmowa Konsultacja
            </a>
</nav>
</header>

<section className="md:px-12 min-h-[90vh] flex flex-col max-w-[1200px] mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative justify-center">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
<div className="z-10 max-w-4xl relative">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm items-center">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-blue-200 tracking-wide" style={{}}>Cyfrowy Rzemieślnik</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.1] mb-8">
                Nowoczesne strony <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-700">dla Twojego biznesu.</span>
</h1>
<p className="text-lg md:text-xl text-indigo-400 max-w-2xl leading-relaxed mb-10">
                Łączę artystyczny design z technologiczną precyzją. Oferuję kompleksową obsługę: od projektu, przez wdrożenie, aż po widoczność w Social Media.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-indigo-200 transition-colors" href="#kontakt">
<span>Umów rozmowę</span>
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-6 py-4 border border-white/10 rounded-xl bg-white/5">
<iconify-icon className="text-blue-500" icon="lucide:check-circle" width="20"></iconify-icon>
<span className="text-sm text-indigo-300">Bezpośredni kontakt. Zero pośredników.</span>
</div>
</div>
</div>
</section>

<section className="bg-indigo-900/30 border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="o-mnie">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square relative flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#050505] border border-white/10 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:border-blue-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

<div className="absolute w-[72%] h-[72%] rounded-full border border-indigo-500/10 group-hover:border-blue-500/30 transition-all duration-1000 group-hover:scale-105 group-hover:rotate-[30deg] ease-in-out"></div>
<div className="absolute w-[70%] h-[70%] rounded-full border border-dashed border-white/5 group-hover:border-blue-400/20 transition-all duration-1000 group-hover:scale-95 group-hover:-rotate-[15deg] ease-in-out"></div>

<div className="relative z-20 flex flex-col items-center justify-center text-center transform transition-transform duration-500 group-hover:scale-110">
<h2 className="text-6xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:from-white group-hover:to-blue-200 font-instrument-serif transition-all duration-300 drop-shadow-lg">
            ALGO
        </h2>
<span className="text-[10px] font-mono font-bold tracking-[0.4em] text-indigo-500/70 group-hover:text-blue-400 mt-3 transition-colors duration-300 uppercase">
            Digital Work
        </span>
</div>

<div className="absolute top-[12%] left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:-translate-y-2 transition-all duration-500 shadow-lg">
<iconify-icon icon="lucide:brain-circuit" width="20"></iconify-icon>
</div>

<div className="absolute top-[25%] right-[10%] p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-500 delay-75 shadow-lg">
<iconify-icon icon="lucide:share-2" width="20"></iconify-icon>
</div>

<div className="absolute bottom-[25%] right-[10%] p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:translate-x-2 group-hover:translate-y-1 transition-all duration-500 delay-100 shadow-lg">
<iconify-icon icon="lucide:tablet" width="20"></iconify-icon>
</div>

<div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:translate-y-2 transition-all duration-500 delay-150 shadow-lg">
<iconify-icon icon="lucide:search" width="20"></iconify-icon>
</div>

<div className="absolute bottom-[25%] left-[10%] p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:-translate-x-2 group-hover:translate-y-1 transition-all duration-500 delay-200 shadow-lg">
<iconify-icon icon="lucide:trending-up" width="20"></iconify-icon>
</div>

<div className="absolute top-[25%] left-[10%] p-2.5 rounded-xl bg-[#080808]/80 border border-white/10 backdrop-blur-md text-indigo-400 group-hover:text-blue-400 group-hover:border-blue-500/30 group-hover:-translate-x-2 group-hover:-translate-y-1 transition-all duration-500 delay-300 shadow-lg">
<iconify-icon icon="lucide:code-2" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-6">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight">Nie jestem kolejną agencją.Jestem Twoim partnerem.</h2>
<p className="text-indigo-400 leading-relaxed">
                        Zmieniłem branżę z wyboru, a nie z przypadku. To oznacza, że moja determinacja do dostarczania jakości jest dziesięć razy większa niż u znudzonego programisty w korporacji. 
                    </p>
<p className="text-indigo-400 leading-relaxed">
                        Wiem, że technologia bywa przytłaczająca dla małego biznesu. Dlatego nie sprzedaję Ci kodu, algorytmów ani skomplikowanych wdrożeń. 
                         Gwarantuję pedantyczną precyzję i terminowość, której często brakuje na rynku.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto" id="oferta">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Dwa filary Twojego sukcesu</h2>
<p className="text-indigo-400">Proste zasady. Kompleksowe działanie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group p-8 rounded-3xl border border-white/10 bg-indigo-900/20 hover:bg-indigo-900/50 transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors" icon="lucide:monitor" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4 mt-8">Strony WWW</h3>
<p className="text-indigo-400 mb-8 leading-relaxed">
                    Responsywne, szybkie i nowoczesne witryny, które budują wizerunek profesjonalisty. Zaprojektowane z myślą o konwersji, nie tylko o wyglądzie.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Optymalizacja SEO &amp; Szybkość
                    </li>
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Dostosowane do urządzeń mobilnych
                    </li>
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Łatwa edycja treści
                    </li>
</ul>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-indigo-900/20 hover:bg-indigo-900/50 transition-all duration-500 hover:border-blue-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white group-hover:text-blue-500 transition-colors" icon="lucide:share-2" width="64"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4 mt-8">Social Media</h3>
<p className="text-indigo-400 mb-8 leading-relaxed">
                    Spójna komunikacja wizualna i prowadzenie profili. Budowanie zasięgów tam, gdzie są Twoi klienci.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Projekty graficzne postów
                    </li>
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Konfiguracja wizytówki Google
                    </li>
<li className="flex items-center gap-3 text-sm text-indigo-300">
<iconify-icon className="text-blue-500" icon="lucide:check"></iconify-icon> Planowanie harmonogramu
                    </li>
</ul>
</div>
</div>

<div className="mt-8 flex items-center justify-center gap-3 py-4 px-6 rounded-full border border-white/5 bg-white/[0.02] max-w-max mx-auto">
<iconify-icon className="text-blue-400" icon="lucide:sparkles"></iconify-icon>
<span className="text-sm text-indigo-500">
                Wspieram się nowoczesnymi narzędziami AI, co oszczędza Twój czas i budżet.
            </span>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-[#080808]" id="proces">
<div className="max-w-[1200px] mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-16 text-center">Jak pracuję?</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative group">
<div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">01</div>
<h4 className="text-xl font-medium text-white mb-2">Analiza</h4>
<p className="text-sm text-indigo-400 leading-relaxed">Poznaję Twój biznes, konkurencję i potrzeby. Ustalamy cel strony.</p>
</div>

<div className="relative group">
<div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">02</div>
<h4 className="text-xl font-medium text-white mb-2">Projekt</h4>
<p className="text-sm text-indigo-400 leading-relaxed">Tworzę makietę graficzną. Dopracowujemy każdy detal wizualny.</p>
</div>

<div className="relative group">
<div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">03</div>
<h4 className="text-xl font-medium text-white mb-2">Wdrożenie</h4>
<p className="text-sm text-indigo-400 leading-relaxed">Programuję stronę, testuję na telefonach i optymalizuję prędkość.</p>
</div>

<div className="relative group">
<div className="text-6xl font-bold text-white/5 mb-4 group-hover:text-blue-500/20 transition-colors">04</div>
<h4 className="text-xl font-medium text-white mb-2">Start &amp; Opieka</h4>
<p className="text-sm text-indigo-400 leading-relaxed">Publikacja w sieci. Przekazuję Ci instrukcję obsługi lub zajmuję się opieką.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center text-center p-6">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:user" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Kontakt bezpośredni</h3>
<p className="text-sm text-indigo-400">Rozmawiasz ze mną, a nie z handlowcem. Zero głuchych telefonów.</p>
</div>
<div className="flex flex-col items-center text-center p-6 border-x border-white/5 md:border-x">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:focus" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pikselowa precyzja</h3>
<p className="text-sm text-indigo-400">Jestem pedantem. Twoja strona będzie wyglądać idealnie na każdym ekranie.</p>
</div>
<div className="flex flex-col items-center text-center p-6">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon icon="lucide:layers" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Kompleksowość</h3>
<p className="text-sm text-indigo-400">Dostajesz ode mnie technologię, grafikę i marketing w jednym pakiecie.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-indigo-900/30 border-t border-white/5" id="kontakt">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-between">
<div className="">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Porozmawiajmy o<br/>Twoim projekcie.</h2>
<p className="text-indigo-400 text-lg mb-12">Wycena jest zawsze bezpłatna. Zadzwoń lub napisz - odpowiadam sprawnie.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 text-white hover:text-blue-500 transition-colors group" href="tel:+48000000000">
<div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<span className="text-xl font-medium">+48 500 000 000</span>
</a>
<a className="flex items-center gap-4 text-white hover:text-blue-500 transition-colors group" href="mailto:kontakt@algo.pl">
<div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-blue-500 transition-colors">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<span className="text-xl font-medium">kontakt@twojadomena.pl</span>
</a>
</div>
</div>
<div className="mt-12 flex gap-4">
<a className="text-indigo-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="24"></iconify-icon></a>
<a className="text-indigo-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="24"></iconify-icon></a>
<a className="text-indigo-500 hover:text-white transition-colors" href="#"><iconify-icon className="" icon="lucide:linkedin" width="24"></iconify-icon></a>
</div>
</div>

<form className="bg-[#050505] p-8 rounded-3xl border border-white/10">
<div className="space-y-6">
<div>
<label className="block text-xs font-medium text-indigo-500 uppercase tracking-wider mb-2">Imię i Nazwisko</label>
<input className="w-full bg-indigo-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-indigo-700" placeholder="Jan Kowalski" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-indigo-500 uppercase tracking-wider mb-2">Email</label>
<input className="w-full bg-indigo-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-indigo-700" placeholder="jan@firma.pl" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-indigo-500 uppercase tracking-wider mb-2">Temat</label>
<select className="w-full bg-indigo-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
<option>Strona WWW</option>
<option>Social Media</option>
<option>Kompleksowa obsługa</option>
<option>Inne</option>
</select>
</div>
<button className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-indigo-200 transition-colors mt-4" type="button">
                            Wyślij Wiadomość
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 text-center">
<p className="text-indigo-600 text-xs font-mono">© 2024 ALGO STUDIO. Wszelkie prawa zastrzeżone.</p>
</footer>

    </>
  );
}
