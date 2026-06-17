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



        document.addEventListener("DOMContentLoaded", () => {
            // Intersection Observer for slow reveals
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            });

            document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
            
            // Mobile Menu Toggle
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const closeBtn = document.getElementById('close-menu-btn');
            const links = menu.querySelectorAll('.mobile-link');
            
            function toggleMenu() {
                menu.classList.toggle('opacity-0');
                menu.classList.toggle('pointer-events-none');
            }
            
            btn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);
            links.forEach(l => l.addEventListener('click', toggleMenu));
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
      

<div className="bg-noise"></div>

<div className="fixed inset-0 bg-[#0A0A0A] z-[100] opacity-0 pointer-events-none transition-opacity duration-1000 flex flex-col justify-center items-center text-center" id="mobile-menu">
<button className="absolute top-8 right-6 md:right-12 text-white/50 hover:text-[#C0A062] p-2 transition-colors duration-700" id="close-menu-btn">
<iconify-icon className="text-3xl" icon="solar:close-linear"></iconify-icon>
</button>
<nav className="flex flex-col gap-10">
<a className="mobile-link text-4xl font-light tracking-tighter text-white hover:text-[#C0A062] transition-colors duration-700" href="#metodyka">Metodyka</a>
<a className="mobile-link text-4xl font-light tracking-tighter text-white hover:text-[#C0A062] transition-colors duration-700" href="#oferta">Inwestycja</a>
<a className="mobile-link text-4xl font-light tracking-tighter text-[#C0A062] hover:text-white transition-colors duration-700" href="#kontakt">Współpraca</a>
</nav>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-1000">
<div className="text-sm font-normal tracking-tight uppercase text-white flex items-start">
            EWA MOŻEJEWSKA<sup className="text-xs font-light mt-0.5 ml-0.5 opacity-50">®</sup>
</div>

<a className="hidden md:flex text-xs uppercase tracking-widest text-white/50 hover:text-[#C0A062] transition-colors duration-700 items-center gap-3" href="#kontakt">
            Rozpocznij
            <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white/70 hover:text-[#C0A062] transition-colors duration-700" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-40 pb-32 relative overflow-hidden">
<div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center text-center reveal">
<div className="inline-flex items-center gap-3 px-5 py-2 border border-[#C0A062]/20 bg-[#C0A062]/5 rounded-full mb-12 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-[#C0A062] opacity-80" style={{animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'}}></div>
<span className="text-xs tracking-widest text-[#C0A062] uppercase font-light">Dostępność: 3 projekty w Q4</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-[1.05] mb-10">
                Buduję Twój<br/>Cyfrowy Autorytet.
            </h1>
<p className="text-lg md:text-xl text-white/50 max-w-[65ch] font-light leading-loose mb-16">
                Łączę techniczną precyzję z psychologią wizerunku. Twój cyfrowy ślad przestaje być kosztem. Zaczyna być strategicznym aktywem.
            </p>

<div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-10 py-5 border border-[#C0A062]/40 text-[#C0A062] text-xs font-normal tracking-widest uppercase hover:bg-[#C0A062] hover:text-[#0A0A0A] hover:-translate-y-0.5 transition-all duration-1000" href="#kontakt">
                    Rozpocznij proces
                </a>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[100rem] z-0 pointer-events-none opacity-30" style={{background: 'radial-gradient(circle at 50% 20%, rgba(192,160,98,0.06) 0%, transparent 60%)'}}></div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A]">
<div className="max-w-5xl mx-auto reveal">
<span className="text-xs tracking-widest text-[#C0A062]/70 uppercase mb-8 block font-light">Perspektywa</span>
<h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-16 leading-[1.1] max-w-[20ch]">
                Większość stron to martwe wizytówki.<br/>Ja projektuję narzędzia, które sprzedają w ciszy.
            </h2>
<div className="grid md:grid-cols-2 gap-12 md:gap-24 border-t border-white/5 pt-16">
<div>
<p className="text-base text-white/50 leading-loose font-light max-w-[65ch]">
                        Odrzucam generyczne szablony i chwilowe trendy. Każdy element cyfrowej obecności musi mieć cel. Od architektury kodu, przez światłocień portretu, po wagę typografii.
                    </p>
</div>
<div>
<p className="text-base text-white/50 leading-loose font-light max-w-[65ch]">
                        Działam na styku technologii i psychologii percepcji. Projektuję dla liderów, którzy wiedzą, że pierwszy punkt styku z marką osobistą nierzadko decyduje o wartości całego kontraktu.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#121212]" id="metodyka">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12 reveal">
<h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white">Metodyka</h2>
<p className="text-base text-white/50 max-w-[45ch] leading-loose font-light">
                    Trzy filary budowy cyfrowego autorytetu, które odróżniają liderów od rzemieślników.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-12 md:gap-16">

<div className="border-t border-white/5 pt-10 group hover:border-[#C0A062]/40 transition-colors duration-1000 reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-center justify-between mb-8 text-white/30 group-hover:text-[#C0A062] transition-colors duration-1000">
<span className="text-xs tracking-widest uppercase font-light">01</span>
<iconify-icon className="text-2xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Architektura Kodowa</h3>
<p className="text-sm text-white/50 leading-loose font-light max-w-[65ch]">
                        Precyzyjny, minimalistyczny kod. Technologia pracująca niewidzialnie w tle, budująca zaufanie przez bezbłędną płynność.
                    </p>
</div>

<div className="border-t border-white/5 pt-10 group hover:border-[#C0A062]/40 transition-colors duration-1000 reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-center justify-between mb-8 text-white/30 group-hover:text-[#C0A062] transition-colors duration-1000">
<span className="text-xs tracking-widest uppercase font-light">02</span>
<iconify-icon className="text-2xl" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Psychologia Obrazu</h3>
<p className="text-sm text-white/50 leading-loose font-light max-w-[65ch]">
                        Portret to komunikat. Kontrolujemy światło i kontekst, aby emitować kompetencję ułamki sekund przed przeczytaniem pierwszego słowa.
                    </p>
</div>

<div className="border-t border-white/5 pt-10 group hover:border-[#C0A062]/40 transition-colors duration-1000 reveal" style={{transitionDelay: '300ms'}}>
<div className="flex items-center justify-between mb-8 text-white/30 group-hover:text-[#C0A062] transition-colors duration-1000">
<span className="text-xs tracking-widest uppercase font-light">03</span>
<iconify-icon className="text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-xl font-normal text-white mb-4 tracking-tight">Redukcja Szumu</h3>
<p className="text-sm text-white/50 leading-loose font-light max-w-[65ch]">
                        Eliminacja wszystkiego, co nie służy konwersji. Używamy pustej przestrzeni jako sygnału luksusu. Klient ma widzieć czystą wartość.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#0A0A0A]">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 reveal">
<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
<div className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">x3</div>
<div className="text-xs tracking-widest text-white/40 uppercase font-light">Wzrost konwersji</div>
</div>
<div className="w-px bg-white/5 hidden md:block"></div>
<div className="flex-1 flex flex-col items-center md:items-center text-center">
<div className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">+150%</div>
<div className="text-xs tracking-widest text-white/40 uppercase font-light">Zapytania premium</div>
</div>
<div className="w-px bg-white/5 hidden md:block"></div>
<div className="flex-1 flex flex-col items-center md:items-end text-center md:text-right">
<div className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tighter">&lt;0.8s</div>
<div className="text-xs tracking-widest text-white/40 uppercase font-light">Czas ładowania</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#0A0A0A]" id="oferta">
<div className="max-w-5xl mx-auto">
<span className="text-xs tracking-widest text-[#C0A062]/70 uppercase mb-6 block text-center font-light reveal">Współpraca</span>
<h2 className="text-4xl md:text-5xl font-light tracking-tighter text-white mb-24 text-center reveal">Struktura Inwestycji</h2>
<div className="grid md:grid-cols-2 gap-8 items-stretch">

<div className="p-10 md:p-14 border border-white/5 bg-[#121212] flex flex-col transition-all duration-1000 hover:-translate-y-1 hover:border-[#C0A062]/40 group reveal">
<h3 className="text-2xl font-light text-white mb-4 tracking-tight">Fundament Wizerunku</h3>
<p className="text-base text-white/50 mb-12 font-light leading-relaxed max-w-[65ch]">Audyt, strategia wizualna i sesja biznesowa budująca wyjściowy autorytet.</p>
<ul className="space-y-6 mb-16 flex-1">
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Diagnoza obecnego wizerunku w sieci</span>
</li>
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Strategia narracji wizualnej</span>
</li>
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Psychologiczna sesja biznesowa (2 koncepty)</span>
</li>
</ul>
<div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
<span className="text-xs text-white/40 uppercase tracking-widest font-light">Od 1,500 PLN</span>
<a className="text-xs text-[#C0A062] uppercase tracking-widest font-light group-hover:opacity-80 transition-opacity duration-700 flex items-center gap-2" href="#kontakt">
                            Wybieram
                            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="p-10 md:p-14 border border-[#C0A062]/20 bg-[#121212] flex flex-col relative transition-all duration-1000 hover:-translate-y-1 hover:border-[#C0A062]/60 md:scale-[1.02] group overflow-hidden reveal" style={{transitionDelay: '150ms'}}>

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,rgba(192,160,98,0.04),transparent_60%)] pointer-events-none"></div>
<div className="absolute -top-3 left-10 bg-[#0A0A0A] px-3 py-1 text-[10px] text-[#C0A062] tracking-widest uppercase border border-[#C0A062]/20">
                        Pełna Transformacja
                    </div>
<h3 className="text-2xl font-light text-white mb-4 tracking-tight relative z-10">Architektura Cyfrowa</h3>
<p className="text-base text-white/50 mb-12 font-light leading-relaxed max-w-[65ch] relative z-10">Spójny ekosystem: od strategii, przez percepcję, po wysokokonwertującą obecność.</p>
<ul className="space-y-6 mb-16 flex-1 relative z-10">
<li className="flex items-start gap-4 text-sm text-white font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062] mt-2 shadow-[0_0_8px_rgba(192,160,98,0.4)]"></span>
<span>Wszystko z pakietu Fundament</span>
</li>
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Projekt i wdrożenie minimalistycznej strony</span>
</li>
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Optymalizacja wydajności (Web Vitals)</span>
</li>
<li className="flex items-start gap-4 text-sm text-white/70 font-light">
<span className="w-1 h-1 rounded-full bg-[#C0A062]/50 mt-2"></span>
<span>Copywriting oparty na psychologii percepcji</span>
</li>
</ul>
<div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 relative z-10">
<span className="text-xs text-[#C0A062]/70 uppercase tracking-widest font-light">Od 6,000 PLN</span>
<a className="text-xs text-white uppercase tracking-widest font-light hover:text-[#C0A062] transition-colors duration-700 flex items-center gap-2" href="#kontakt">
                            Aplikuj
                            <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#121212] border-t border-white/5 relative overflow-hidden" id="kontakt">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_bottom_center,rgba(192,160,98,0.03),transparent_70%)] pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10 reveal">
<h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-8">Gotowy na zmianę statusu?</h2>
<p className="text-base text-white/50 mb-20 max-w-[55ch] leading-loose font-light">
                Wypełnij formularz, aby ustalić ramy współpracy. Skontaktuję się z Tobą w ciągu 48 godzin, zapewniając pełną dyskrecję.
            </p>
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white placeholder-transparent focus:border-[#C0A062] focus:outline-none peer transition-colors duration-700 rounded-none font-light" id="name" placeholder="Imię i nazwisko" required="" type="text"/>
<label className="absolute left-0 -top-5 text-xs text-white/40 transition-all duration-700 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#C0A062] cursor-text font-light tracking-wide" htmlFor="name">Imię i nazwisko</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white placeholder-transparent focus:border-[#C0A062] focus:outline-none peer transition-colors duration-700 rounded-none font-light" id="email" placeholder="Adres e-mail" required="" type="email"/>
<label className="absolute left-0 -top-5 text-xs text-white/40 transition-all duration-700 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#C0A062] cursor-text font-light tracking-wide" htmlFor="email">Adres e-mail</label>
</div>
</div>
<div className="relative group">
<select className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white/50 focus:text-white focus:border-[#C0A062] focus:outline-none appearance-none cursor-pointer rounded-none transition-colors duration-700 font-light" id="budget">
<option className="bg-[#121212] text-white/50" disabled="" selected="" value="">Zakres inwestycji (PLN)</option>
<option className="bg-[#121212] text-white" value="1.5-3k">1,500 - 3,000 (Tylko Wizerunek)</option>
<option className="bg-[#121212] text-white" value="3-8k">3,000 - 8,000 (Rozbudowa)</option>
<option className="bg-[#121212] text-white" value="8k+">8,000+ (Pełna Architektura)</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-white/30 pointer-events-none group-focus-within:text-[#C0A062] transition-colors duration-700" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-base text-white placeholder-transparent focus:border-[#C0A062] focus:outline-none peer transition-colors duration-700 resize-none rounded-none min-h-[5rem] font-light" id="message" placeholder="O projekcie" required=""></textarea>
<label className="absolute left-0 -top-5 text-xs text-white/40 transition-all duration-700 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#C0A062] cursor-text font-light tracking-wide" htmlFor="message">Cel biznesowy lub obecna sytuacja</label>
</div>
<div className="pt-8">
<button className="w-full sm:w-auto px-12 py-5 border border-[#C0A062]/40 text-[#C0A062] text-xs font-normal tracking-widest uppercase hover:bg-[#C0A062] hover:text-[#0A0A0A] transition-all duration-1000 hover:-translate-y-0.5 flex items-center justify-center gap-4" type="submit">
                        Wyślij zapytanie
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="py-16 px-6 md:px-12 border-t border-white/5 bg-[#0A0A0A] mt-auto">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-xs tracking-widest text-white/30 uppercase font-light">
                © 2024 EWA MOŻEJEWSKA<sup className="opacity-50">®</sup>
</div>
<div className="flex gap-10 text-xs tracking-widest text-white/30 uppercase font-light">
<a className="hover:text-[#C0A062] transition-colors duration-700" href="#">LinkedIn</a>
<a className="hover:text-[#C0A062] transition-colors duration-700" href="#">Prywatność</a>
</div>
</div>
</footer>



    </>
  );
}
