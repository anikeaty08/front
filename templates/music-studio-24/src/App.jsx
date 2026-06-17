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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 hue-rotate-15 brightness-200 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HzcaAbRLaALMhHJp8gLY"></div>

</div></div>
<div className="fixed inset-0 pointer-events-none noise-bg z-0 mix-blend-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-[#595959]/30">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="group relative flex items-center" href="#">
<span className="font-['Montserrat'] text-4xl font-bold italic uppercase tracking-tight text-white [text-shadow:3px_3px_0px_#1D4AFF] group-hover:[text-shadow:4px_4px_0px_#595959] transition-all duration-300 flex items-center">
                    SZT<span className="relative inline-flex items-center justify-center mx-0.5">O<svg className="absolute w-3.5 h-3.5 text-[#1D4AFF] fill-current group-hover:text-black transition-colors" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></span>S
                </span>
</a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-base font-normal text-[#595959] hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#studio">Studio</a>
<a className="text-base font-normal text-[#595959] hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#pakiety">Pakiety</a>
<a className="text-base font-normal text-[#595959] hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#uslugi">Usługi</a>
<a className="text-base font-normal text-[#595959] hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#szkolenia">Szkolenia</a>
<a className="text-base font-normal text-[#595959] hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#kontakt">Kontakt</a>
</div>

<div className="hidden sm:block">
<a className="inline-flex items-center justify-center bg-[#1D4AFF] text-white text-sm font-semibold uppercase tracking-widest px-8 py-4 hover:bg-[#595959] transition-all duration-300 shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff] hover:translate-x-[2px] hover:translate-y-[2px]" href="#kontakt">
                    Rezerwuj Sesję
                </a>
</div>

<button className="lg:hidden text-white p-2">
<i className="w-8 h-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden squiggle-pattern">

<div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
<div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-transparent to-black"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl flex justify-end opacity-20 pointer-events-none z-0">
<span className="font-['Permanent_Marker'] text-9xl text-[#1D4AFF] -rotate-12">STUDIO<br/>SESSIONS</span>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center text-left">
<div className="inline-flex items-center gap-3 px-5 py-2 border-2 border-[#1D4AFF] bg-black mb-10 shadow-[4px_4px_0px_#595959]">
<div className="w-3 h-3 rounded-full bg-[#1D4AFF] animate-pulse"></div>
<span className="text-sm font-semibold tracking-widest text-white uppercase">Centrum Muzyczne 24/7</span>
</div>
<h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold italic uppercase tracking-tight text-white leading-[0.85] [text-shadow:6px_6px_0px_#1D4AFF] mb-8 max-w-5xl">
                TWOJA<br/>PRZESTRZEŃ
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#595959] [text-shadow:none] mt-2">TWÓRCZA</span>
</h1>
<p className="text-2xl md:text-3xl font-thin text-blue-300 max-w-3xl leading-relaxed mb-14">
                Nagrywaj, Miksuj, Ucz się. SZTOS STUDIO – profesjonalne studio otwarte <span className="text-[#1D4AFF] font-bold italic">24/7</span>.
            </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="inline-flex items-center justify-center bg-[#1D4AFF] text-white text-base font-semibold uppercase tracking-widest px-12 py-6 hover:bg-white hover:text-black transition-all duration-300 shadow-[6px_6px_0px_#595959] hover:shadow-[3px_3px_0px_#595959] hover:translate-x-[3px] hover:translate-y-[3px]" href="#kontakt">
                    Rezerwuj Sesję Online
                </a>
<a className="inline-flex items-center justify-center bg-black border-2 border-white text-white text-base font-semibold uppercase tracking-widest px-12 py-6 hover:bg-white hover:text-black transition-all duration-300 shadow-[6px_6px_0px_#1D4AFF] hover:shadow-[3px_3px_0px_#1D4AFF] hover:translate-x-[3px] hover:translate-y-[3px]" href="#pakiety">
                    Sprawdź Pakiety
                </a>
</div>
</div>
</section>

<section className="py-40 relative bg-black" id="studio">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-24 text-left flex flex-col items-start">
<h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-tight text-white [text-shadow:4px_4px_0px_#595959] mb-8">
                    Czysta Wolność <br/><span className="text-[#1D4AFF]">Tworzenia</span>
</h2>
<p className="text-2xl font-thin text-[#595959] max-w-3xl leading-relaxed">
                    Dla producentów, realizatorów i lektorów... elastyczne godziny, pełne wsparcie od początku do końca.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-12 md:p-16 bg-[#050505] border-2 border-[#595959]/30 hover:border-[#1D4AFF] transition-colors flex flex-col items-start relative group overflow-hidden">
<div className="absolute -right-10 -top-10 text-[10rem] font-['Permanent_Marker'] text-[#595959]/10 group-hover:text-[#1D4AFF]/10 transition-colors z-0">01</div>
<div className="w-16 h-16 bg-[#1D4AFF] flex items-center justify-center mb-10 shadow-[4px_4px_0px_#ffffff] relative z-10">
<i className="text-white w-8 h-8" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white mb-6 relative z-10">Sprzęt Klasy Premium</h3>
<p className="text-xl font-thin text-[#595959] leading-relaxed relative z-10">
                        Topowe mikrofony, przedwzmacniacze i monitory odsłuchowe gwarantujące bezkompromisową jakość każdego nagrania.
                    </p>
</div>

<div className="p-12 md:p-16 bg-[#050505] border-2 border-[#595959]/30 hover:border-[#1D4AFF] transition-colors flex flex-col items-start relative group overflow-hidden md:translate-y-12">
<div className="absolute -right-10 -top-10 text-[10rem] font-['Permanent_Marker'] text-[#595959]/10 group-hover:text-[#1D4AFF]/10 transition-colors z-0">02</div>
<div className="w-16 h-16 bg-[#1D4AFF] flex items-center justify-center mb-10 shadow-[4px_4px_0px_#ffffff] relative z-10">
<i className="text-white w-8 h-8" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white mb-6 relative z-10">Akustyka Zjawiskowa</h3>
<p className="text-xl font-thin text-[#595959] leading-relaxed relative z-10">
                        Precyzyjnie zaprojektowana adaptacja akustyczna pomieszczeń pozwala na krytyczny odsłuch i perfekcyjny miks.
                    </p>
</div>

<div className="p-12 md:p-16 bg-[#050505] border-2 border-[#595959]/30 hover:border-[#1D4AFF] transition-colors flex flex-col items-start relative group overflow-hidden">
<div className="absolute -right-10 -top-10 text-[10rem] font-['Permanent_Marker'] text-[#595959]/10 group-hover:text-[#1D4AFF]/10 transition-colors z-0">03</div>
<div className="w-16 h-16 bg-[#1D4AFF] flex items-center justify-center mb-10 shadow-[4px_4px_0px_#ffffff] relative z-10">
<i className="text-white w-8 h-8" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white mb-6 relative z-10">Dostęp 24/7</h3>
<p className="text-xl font-thin text-[#595959] leading-relaxed relative z-10">
                        Wena nie wybiera godzin. Nasze studio jest dostępne całą dobę, dzięki autonomicznemu systemowi wejścia.
                    </p>
</div>

<div className="p-12 md:p-16 bg-[#050505] border-2 border-[#595959]/30 hover:border-[#1D4AFF] transition-colors flex flex-col items-start relative group overflow-hidden md:translate-y-12">
<div className="absolute -right-10 -top-10 text-[10rem] font-['Permanent_Marker'] text-[#595959]/10 group-hover:text-[#1D4AFF]/10 transition-colors z-0">04</div>
<div className="w-16 h-16 bg-[#1D4AFF] flex items-center justify-center mb-10 shadow-[4px_4px_0px_#ffffff] relative z-10">
<i className="text-white w-8 h-8" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white mb-6 relative z-10">Wsparcie Techniczne</h3>
<p className="text-xl font-thin text-[#595959] leading-relaxed relative z-10">
                        Zawsze do dyspozycji doświadczony inżynier dźwięku, gotowy pomóc w każdej technicznej przeszkodzie podczas sesji.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-40 relative bg-black border-t-4 border-[#1D4AFF] squiggle-pattern" id="pakiety">
<div className="bg-black/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-24 text-center">
<span className="text-base font-bold tracking-widest text-[#1D4AFF] uppercase mb-4 block">Cennik</span>
<h2 className="text-6xl md:text-8xl font-bold italic uppercase tracking-tight text-white [text-shadow:4px_4px_0px_#595959]">
                    PAKIETY
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="flex flex-col bg-black border-2 border-[#595959] p-12 hover:-translate-y-4 transition-transform duration-500 shadow-[8px_8px_0px_#595959]">
<h3 className="text-4xl font-bold italic uppercase tracking-tight text-white mb-4">STUDIO 24/7</h3>
<p className="text-xl font-thin text-[#595959] mb-10">Niezależny dostęp</p>
<div className="mb-12">
<span className="text-6xl font-bold tracking-tight text-[#1D4AFF] [text-shadow:2px_2px_0px_white]">50</span>
<span className="text-xl font-semibold text-white ml-2">PLN / h</span>
</div>
<ul className="space-y-6 mb-16 flex-1">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Dostęp na wyłączność</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Wszystkie strefy studia</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Podstawowe wsparcie</span>
</li>
</ul>
<a className="w-full text-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base font-semibold uppercase tracking-widest py-5 transition-all" href="#">
                        Wybieram
                    </a>
</div>

<div className="flex flex-col bg-[#1D4AFF] border-2 border-white p-12 transform md:-translate-y-8 shadow-[12px_12px_0px_#ffffff] relative">
<div className="absolute -top-5 right-10">
<span className="bg-black text-white text-sm font-bold uppercase tracking-widest px-6 py-2 shadow-[4px_4px_0px_#595959]">Polecane</span>
</div>
<h3 className="text-4xl font-bold italic uppercase tracking-tight text-white mb-4 [text-shadow:3px_3px_0px_black]">ARTIST <span className="block text-black">Premium</span></h3>
<p className="text-xl font-semibold text-white/80 mb-10">Kompleksowa produkcja</p>
<div className="mb-12">
<span className="text-6xl font-bold tracking-tight text-white [text-shadow:3px_3px_0px_black]">150</span>
<span className="text-xl font-semibold text-black ml-2">PLN / h</span>
</div>
<ul className="space-y-6 mb-16 flex-1">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-black mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-semibold text-white">Realizator na sesji</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-black mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-semibold text-white">Miks i Mastering priorytet</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-black mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-semibold text-white">Konsultacje produkcyjne</span>
</li>
</ul>
<a className="w-full text-center bg-black text-white text-base font-semibold uppercase tracking-widest py-5 hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_#ffffff] hover:shadow-[2px_2px_0px_#ffffff]" href="#">
                        Wybieram
                    </a>
</div>

<div className="flex flex-col bg-black border-2 border-[#595959] p-12 hover:-translate-y-4 transition-transform duration-500 shadow-[8px_8px_0px_#595959]">
<h3 className="text-4xl font-bold italic uppercase tracking-tight text-white mb-4">ARTIST Std</h3>
<p className="text-xl font-thin text-[#595959] mb-10">Baza dla twórców</p>
<div className="mb-12">
<span className="text-6xl font-bold tracking-tight text-[#1D4AFF] [text-shadow:2px_2px_0px_white]">100</span>
<span className="text-xl font-semibold text-white ml-2">PLN / h</span>
</div>
<ul className="space-y-6 mb-16 flex-1">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Nagranie wokal/instrument</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Podstawowy miks śladów</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-[#1D4AFF] mt-1 shrink-0" data-lucide="check" strokeWidth="2"></i>
<span className="text-xl font-thin text-white">Zgrywanie materiału</span>
</li>
</ul>
<a className="w-full text-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-base font-semibold uppercase tracking-widest py-5 transition-all" href="#">
                        Wybieram
                    </a>
</div>
</div>
</div>
</section>

<section className="py-40 bg-black border-t border-[#595959]/30 relative" id="uslugi">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
<h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-tight text-white [text-shadow:4px_4px_0px_#1D4AFF] leading-none">
                    USŁUGI I<br/>SZKOLENIA
                </h2>
<div className="w-32 h-2 bg-white shadow-[4px_4px_0px_#1D4AFF]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#050505] p-14 border-2 border-[#595959]/30 hover:border-white transition-all hover:-translate-y-2 shadow-[8px_8px_0px_#1D4AFF] group">
<div className="flex items-center justify-between mb-10">
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white">Produkcja Muzyczna</h3>
<i className="w-10 h-10 text-[#595959] group-hover:text-[#1D4AFF] transition-colors" data-lucide="music" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-thin text-[#595959] leading-relaxed mb-10 group-hover:text-white transition-colors">
                        Tworzenie bitów, aranżacja i pełna produkcja utworów od zera. Dopasujemy styl do Twojej wizji artystycznej.
                    </p>
<div className="flex items-end justify-between border-t border-[#595959]/30 pt-8">
<span className="text-base font-semibold tracking-widest text-[#1D4AFF] uppercase">Od 500 PLN / Utwór</span>
<a className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="bg-[#050505] p-14 border-2 border-[#595959]/30 hover:border-white transition-all hover:-translate-y-2 shadow-[8px_8px_0px_#1D4AFF] group">
<div className="flex items-center justify-between mb-10">
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white">Miks &amp; Mastering</h3>
<i className="w-10 h-10 text-[#595959] group-hover:text-[#1D4AFF] transition-colors" data-lucide="sliders" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-thin text-[#595959] leading-relaxed mb-10 group-hover:text-white transition-colors">
                        Nadaj swoim utworom profesjonalne brzmienie gotowe do publikacji w serwisach streamingowych i radiu.
                    </p>
<div className="flex items-end justify-between border-t border-[#595959]/30 pt-8">
<span className="text-base font-semibold tracking-widest text-[#1D4AFF] uppercase">Od 250 PLN / Utwór</span>
<a className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="bg-[#050505] p-14 border-2 border-[#595959]/30 hover:border-white transition-all hover:-translate-y-2 shadow-[8px_8px_0px_#1D4AFF] group">
<div className="flex items-center justify-between mb-10">
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white">Nagrania Podcastów</h3>
<i className="w-10 h-10 text-[#595959] group-hover:text-[#1D4AFF] transition-colors" data-lucide="mic-vocal" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-thin text-[#595959] leading-relaxed mb-10 group-hover:text-white transition-colors">
                        Profesjonalne środowisko do nagrywania audycji. Oferujemy opcje z realizatorem lub wynajem samego studia.
                    </p>
<div className="flex items-end justify-between border-t border-[#595959]/30 pt-8">
<span className="text-base font-semibold tracking-widest text-[#1D4AFF] uppercase">50/100 PLN / h</span>
<a className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="bg-[#050505] p-14 border-2 border-[#595959]/30 hover:border-white transition-all hover:-translate-y-2 shadow-[8px_8px_0px_#1D4AFF] group" id="szkolenia">
<div className="flex items-center justify-between mb-10">
<h3 className="text-3xl font-bold italic uppercase tracking-tight text-white">Szkolenia DJ / Prod</h3>
<i className="w-10 h-10 text-[#595959] group-hover:text-[#1D4AFF] transition-colors" data-lucide="disc" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-thin text-[#595959] leading-relaxed mb-10 group-hover:text-white transition-colors">
                        Indywidualne zajęcia z obsługi sprzętu DJ-skiego (Pioneer CDJ) oraz oprogramowania DAW (Ableton, FL Studio).
                    </p>
<div className="flex items-end justify-between border-t border-[#595959]/30 pt-8">
<span className="text-base font-semibold tracking-widest text-[#1D4AFF] uppercase">100 PLN / h</span>
<a className="w-12 h-12 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-colors" href="#">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 bg-[#020202] border-t-8 border-[#1D4AFF]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
<div>
<h2 className="text-5xl font-bold italic uppercase tracking-tight text-white [text-shadow:3px_3px_0px_#595959] mb-4">ŚLEDŹ NAS</h2>
<p className="text-xl font-thin text-[#595959]">Złap nasz vibe na social mediach.</p>
</div>
<a className="inline-flex items-center gap-4 bg-black border-2 border-white px-8 py-4 hover:bg-[#1D4AFF] hover:border-[#1D4AFF] transition-all shadow-[6px_6px_0px_#595959] hover:shadow-[2px_2px_0px_#595959] hover:translate-x-[2px] hover:translate-y-[2px] group" href="#">
<i className="w-6 h-6 text-white" data-lucide="instagram" strokeWidth="1.5"></i>
<span className="text-base font-semibold tracking-widest uppercase text-white">@sztos_studio</span>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="aspect-square bg-[#1D4AFF] p-8 flex items-center justify-center border-4 border-black shadow-[8px_8px_0px_#595959] group overflow-hidden">
<span className="font-['Montserrat'] text-5xl font-bold italic uppercase tracking-tight text-white [text-shadow:6px_6px_0px_#000000] group-hover:scale-110 transition-transform duration-500 flex items-center">
                        SZT<span className="relative inline-flex items-center justify-center mx-1">O<svg className="absolute w-5 h-5 text-black fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></span>S
                    </span>
</div>

<div className="aspect-square bg-blue-900 border-4 border-[#595959] shadow-[8px_8px_0px_#1D4AFF] group relative overflow-hidden">
<img alt="Studio gear" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f778b1fb-3cba-485c-bc0c-11487cfcce13_800w.webp"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
<span className="font-['Permanent_Marker'] text-white text-4xl -rotate-12">STUDIO</span>
</div>
</div>

<div className="aspect-square bg-[#1D4AFF] border-4 border-black shadow-[8px_8px_0px_#ffffff] p-8 flex flex-col items-center justify-center text-center group overflow-hidden relative">
<div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
<span className="font-['Montserrat'] text-black font-bold italic tracking-tight text-xl mb-4 relative z-10">sztos studio</span>
<span className="font-['Permanent_Marker'] text-white text-6xl leading-[0.8] relative z-10 group-hover:scale-110 transition-transform duration-500 [text-shadow:3px_3px_0px_#000000]">SESJE<br/>STUDY<br/>JNE</span>
<span className="font-['Montserrat'] text-black font-bold italic tracking-tight text-xl mt-4 relative z-10">sztos studio</span>
</div>

<div className="aspect-square bg-black border-4 border-[#1D4AFF] shadow-[8px_8px_0px_#595959] p-8 flex items-center justify-center group overflow-hidden relative squiggle-pattern">
<span className="font-['Permanent_Marker'] text-6xl text-white [text-shadow:4px_4px_0px_#1D4AFF] relative z-10 group-hover:scale-110 transition-transform duration-500 rotate-12">
                        sztos
                    </span>
</div>
</div>
</div>
</section>

<section className="py-40 bg-black relative border-t-2 border-[#595959]/50" id="kontakt">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-5xl md:text-7xl font-bold italic uppercase tracking-tight text-white [text-shadow:4px_4px_0px_#1D4AFF] mb-10 leading-[0.9]">
                        ZAREZERWUJ SESJĘ
                    </h2>
<p className="text-2xl font-thin text-[#595959] mb-16 max-w-md">
                        Jesteśmy gotowi zrealizować Twój projekt. Wypełnij formularz lub wpadaj bezpośrednio.
                    </p>
<div className="space-y-12">
<div className="flex items-start gap-8 group">
<div className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1D4AFF] group-hover:bg-[#1D4AFF] transition-colors">
<i className="w-6 h-6 text-white" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-bold uppercase tracking-widest text-white mb-2">Lokalizacja</h4>
<p className="text-xl font-thin text-[#595959]">Centrum Miasta<br/>Adres po rezerwacji.</p>
</div>
</div>
<div className="flex items-start gap-8 group">
<div className="w-16 h-16 bg-black border-2 border-white flex items-center justify-center shrink-0 shadow-[4px_4px_0px_#1D4AFF] group-hover:bg-[#1D4AFF] transition-colors">
<i className="w-6 h-6 text-white" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-bold uppercase tracking-widest text-white mb-2">Telefon</h4>
<p className="text-xl font-thin text-[#595959]">+48 233 233 233</p>
</div>
</div>
</div>
</div>

<div className="bg-[#050505] border-4 border-[#595959] p-12 md:p-16 shadow-[16px_16px_0px_#1D4AFF] relative">

<div className="absolute -top-3 -left-3 w-12 h-6 bg-[#1D4AFF] -rotate-45 z-20 mix-blend-screen"></div>
<div className="absolute -bottom-3 -right-3 w-12 h-6 bg-white -rotate-45 z-20 mix-blend-screen"></div>
<form className="space-y-12 relative z-10">
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-[#595959] py-4 text-xl font-semibold text-white placeholder-transparent focus:border-[#1D4AFF] focus:outline-none peer transition-colors rounded-none" id="name" placeholder="Imię i Nazwisko" type="text"/>
<label className="absolute left-0 -top-5 text-sm font-bold uppercase tracking-widest text-[#595959] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-semibold peer-placeholder-shown:text-[#595959] peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#1D4AFF]" htmlFor="name">Imię i Nazwisko</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b-2 border-[#595959] py-4 text-xl font-semibold text-white placeholder-transparent focus:border-[#1D4AFF] focus:outline-none peer transition-colors rounded-none" id="email" placeholder="Adres Email" type="email"/>
<label className="absolute left-0 -top-5 text-sm font-bold uppercase tracking-widest text-[#595959] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-semibold peer-placeholder-shown:text-[#595959] peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#1D4AFF]" htmlFor="email">Adres Email</label>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b-2 border-[#595959] py-4 text-xl font-semibold text-white placeholder-transparent focus:border-[#1D4AFF] focus:outline-none peer transition-colors resize-none rounded-none" id="message" placeholder="Twoja Wiadomość" rows="3"></textarea>
<label className="absolute left-0 -top-5 text-sm font-bold uppercase tracking-widest text-[#595959] transition-all peer-placeholder-shown:text-xl peer-placeholder-shown:font-semibold peer-placeholder-shown:text-[#595959] peer-placeholder-shown:top-4 peer-focus:-top-5 peer-focus:text-sm peer-focus:font-bold peer-focus:text-[#1D4AFF]" htmlFor="message">Twoja Wiadomość</label>
</div>
<button className="w-full bg-white text-black text-base font-bold uppercase tracking-widest py-6 hover:bg-[#1D4AFF] hover:text-white transition-all shadow-[6px_6px_0px_#595959] hover:shadow-[3px_3px_0px_#595959] hover:translate-x-[3px] hover:translate-y-[3px] mt-8" type="submit">
                            Wyślij Wiadomość
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 relative overflow-hidden squiggle-pattern">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none z-0">
<span className="font-['Permanent_Marker'] text-[20vw] leading-none text-[#595959]/10">SZTOS</span>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10 border-b-2 border-[#595959]/50 pb-16">

<div className="flex items-center">
<span className="font-['Montserrat'] text-5xl font-bold italic uppercase tracking-tight text-white [text-shadow:4px_4px_0px_#1D4AFF] flex items-center">
                        SZT<span className="relative inline-flex items-center justify-center mx-1">O<svg className="absolute w-4 h-4 text-[#1D4AFF] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg></span>S
                    </span>
</div>

<div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
<a className="text-base font-semibold text-white hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#studio">Studio</a>
<a className="text-base font-semibold text-white hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#pakiety">Pakiety</a>
<a className="text-base font-semibold text-white hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#uslugi">Usługi</a>
<a className="text-base font-semibold text-white hover:text-[#1D4AFF] transition-colors tracking-widest uppercase" href="#kontakt">Kontakt</a>
</div>

<div className="flex items-center gap-6">
<a className="w-14 h-14 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-all shadow-[4px_4px_0px_#595959]" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-14 h-14 bg-white flex items-center justify-center text-black hover:bg-[#1D4AFF] hover:text-white transition-all shadow-[4px_4px_0px_#595959]" href="#">
<i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between text-sm font-semibold text-[#595959] tracking-widest uppercase">
<p>© 2024 SZTOS STUDIO</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Regulamin</a>
<a className="hover:text-white transition-colors" href="#">Prywatność</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
