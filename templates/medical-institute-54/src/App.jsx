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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((elem) => {
                elem.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-out');
                observer.observe(elem);
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
      

<header className="sticky z-50 transition-all duration-300 bg-white/80 w-full border-slate-200/60 border-b top-0 backdrop-blur-xl"><div className="absolute inset-0" data-container-bg="true"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div></div>
<div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
<a className="flex-shrink-0 transition-opacity hover:opacity-80" href="#">
<img alt="MEDIMO Instytut Medyczny Logo" className="h-8 md:h-9 object-contain" src="https://medimo-instytut.pl/media/logo.png"/>
</a>
<nav className="flex flex-wrap justify-center sm:justify-end gap-x-8 gap-y-2 text-[#0b1c3c] text-xs sm:text-sm uppercase tracking-widest font-medium">
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Strona główna</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Nasi specjaliści</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">O instytucie</a>
<a className="opacity-70 hover:opacity-100 transition-opacity" href="#">Kontakt</a>
</nav>
</div>
</header>

<main className="flex-grow flex flex-col w-full items-center"><div className="absolute inset-0" data-container-bg="true"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div></div>

<section className="relative w-full max-w-[1100px] px-4 md:px-6 mt-6 md:mt-10 mb-24 reveal transition-all duration-[1200ms] ease-out">
<div className="relative w-full rounded-3xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-200/50 min-h-[450px] md:min-h-[550px] flex items-center">
<img alt="Atmospheric medical" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://medimo-instytut.pl/img/01.jpg"/>

<div className="sm:w-3/4 md:w-2/3 bg-gradient-to-r from-white/95 via-white/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 p-8 sm:p-14 md:p-20 max-w-xl">
<p className="text-xl sm:text-2xl md:text-3xl text-[#0b1c3c] leading-relaxed tracking-tight font-light mb-6">
                        "Stary lekarz mówi po łacinie,<br/>
                        młody lekarz mówi po angielsku,<br/>
                        dobry lekarz mówi językiem pacjentów."
                    </p>
<div className="flex items-center gap-4">
<div className="h-px w-8 bg-[#0b1c3c]/30"></div>
<p className="font-sans text-[#0b1c3c]/70 text-sm md:text-base tracking-wide font-medium uppercase">Gerhard Kocher</p>
</div>
</div>

<div className="absolute bottom-8 left-8 sm:left-14 md:left-20 flex gap-2">
<button aria-label="Slide 1" className="w-8 h-1 rounded-full bg-[#0b1c3c] transition-all" type="button"></button>
<button aria-label="Slide 2" className="w-4 h-1 rounded-full bg-[#0b1c3c]/20 hover:bg-[#0b1c3c]/40 transition-all" type="button"></button>
<button aria-label="Slide 3" className="w-4 h-1 rounded-full bg-[#0b1c3c]/20 hover:bg-[#0b1c3c]/40 transition-all" type="button"></button>
</div>
</div>
</section>

<section className="w-full max-w-[800px] px-6 mb-32 reveal transition-all duration-[1200ms] ease-out opacity-0 translate-y-12">
<h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#0b1c3c] leading-snug mb-12 tracking-tight font-medium text-center">
                Serdecznie witamy w MEDIMO
                <span className="block mt-4 text-lg sm:text-xl text-slate-500 font-light leading-relaxed">
                    prywatnej placówce medycznej, w której szczególną rolę przypisaliśmy rozumieniu problemów pacjenta przez naszych lekarzy.
                </span>
</h1>
<div className="space-y-8 text-base md:text-lg text-slate-600 font-light leading-loose text-justify">
<p className="">Zespół kompetentnych i doświadczonych specjalistów realizuje wizję nowoczesnej medycyny traktującej pacjenta całościowo, a nie tylko przez pryzmat jednej choroby. Z tego powodu kładziemy szczególny nacisk na konsultacje pomiędzy naszymi lekarzami reprezentującymi różne dziedziny medycyny i stomatologii.</p>
<p>Rozumiejąc, że ciągle niedocenianą wartością jest czas, stworzyliśmy system, w którym pacjent nie będzie czekał na lekarza, a lekarz zawsze będzie dysponował wystarczającym czasem dla pacjenta.</p>
<p>Ponieważ według definicji WHO (Światowa Organizacja Zdrowia), zdrowie to nie tylko całkowity brak choroby, czy kalectwa, ale także stan pełnego, fizycznego, umysłowego i społecznego dobrostanu. Oznacza to, że w kwestiach zdrowia nie mamy jedynie koncentrować się na chorobach i próbach ich zwalczania, ale powinniśmy zwłaszcza koncentrować się na samym zdrowiu - na jego wzmacnianiu.</p>
</div>
<div className="flex items-center justify-end gap-4 mt-12">
<div className="h-px w-12 bg-slate-300"></div>
<p className="text-[#0b1c3c] text-base font-medium tracking-wide">Zespół MEDIMO</p>
</div>
</section>

<section className="w-full max-w-[1100px] px-4 md:px-6 mb-32 reveal transition-all duration-[1200ms] ease-out opacity-0 translate-y-12">
<div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 ring-1 ring-slate-200/60 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 relative overflow-hidden">

<iconify-icon className="absolute -right-10 -top-10 text-[250px] text-slate-50 opacity-50 pointer-events-none" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="relative z-10 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-2xl text-[#0b1c3c]" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="uppercase font-medium text-[#0b1c3c] text-sm tracking-widest">Informacje</h2>
</div>
<h3 className="text-3xl sm:text-4xl text-[#0b1c3c] tracking-tight font-medium">Godziny przyjęć</h3>
</div>
<div className="relative z-10 w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-16">
<div className="flex flex-col gap-2">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Poniedziałek / Środa</p>
<p className="text-xl sm:text-2xl text-[#0b1c3c] font-light tracking-tight">8:00 – 15:00</p>
</div>
<div className="flex flex-col gap-2">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Wtorek / Czwartek</p>
<p className="text-xl sm:text-2xl text-[#0b1c3c] font-light tracking-tight">12:00 – 19:00</p>
</div>
<div className="sm:col-span-2 pt-4 border-t border-slate-100 flex items-center gap-3">
<iconify-icon className="text-xl text-[#0b1c3c]/60" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-500 tracking-wide">Oraz w nagłych przypadkach po zgłoszeniu telefonicznym</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1100px] px-4 md:px-6 mb-32 reveal opacity-0 translate-y-12 transition-all duration-[1200ms] ease-out">
<div className="flex items-center gap-6 mb-12">
<h2 className="text-2xl sm:text-3xl text-[#0b1c3c] tracking-tight font-medium">Gabinety</h2>
<div className="h-px flex-grow bg-slate-200"></div>
</div>
<div className="group bg-white rounded-3xl p-4 sm:p-6 ring-1 ring-slate-200/60 shadow-sm flex flex-col md:flex-row gap-8 items-center transition-all hover:shadow-md">
<div className="w-full md:w-2/5 overflow-hidden rounded-2xl relative">
<div className="absolute inset-0 bg-[#0b1c3c]/5 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Stomatologia" className="w-full h-auto aspect-video md:aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" src="https://medimo-instytut.pl/media/dentysta.jpg"/>
</div>
<div className="w-full md:w-3/5 flex flex-col gap-6 px-4 pb-4 md:pb-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center ring-1 ring-slate-100">
<iconify-icon className="text-xl text-[#0b1c3c]" icon="solar:tooth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl text-[#0b1c3c] font-medium tracking-tight">Stomatologia ogólna</h3>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center ring-1 ring-slate-100">
<iconify-icon className="text-xl text-[#0b1c3c]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl text-[#0b1c3c] font-medium tracking-tight">Protetyka</h3>
</div>
</div>
</div>
</section>

<section className="w-full max-w-[1100px] px-4 md:px-6 mb-32 reveal opacity-0 translate-y-12 transition-all duration-[1200ms] ease-out">
<h2 className="text-sm font-medium text-slate-400 uppercase tracking-widest text-center mb-12">Nasi zaufani partnerzy</h2>
<div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-20 gap-y-12 mb-10 max-w-5xl mx-auto">
<img alt="Szpital Medfemina" className="h-8 sm:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://medimo-instytut.pl/media/partners/medfemina-szpital-logo.png"/>
<img alt="Polmed" className="h-8 sm:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://medimo-instytut.pl/media/partners/polmed-logo.png"/>
<img alt="Medicover" className="h-8 sm:h-10 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://medimo-instytut.pl/media/partners/medicover-logo.png"/>
<img alt="PZU" className="h-10 sm:h-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://medimo-instytut.pl/media/partners/pzu-logo.png"/>
<img alt="EMC Instytut Medyczny SA" className="h-10 sm:h-12 object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500" src="https://medimo-instytut.pl/media/partners/emc-logo.png"/>
</div>
</section>
</main>

<footer className="bg-[#0b1c3c] text-white w-full pt-20 pb-10 mt-auto">
<div className="max-w-[1100px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">

<div className="md:col-span-5 flex flex-col">
<img alt="MEDIMO Logo" className="h-10 object-contain filter brightness-0 invert mb-8 self-start" src="https://medimo-instytut.pl/media/logo.png"/>
<p className="text-xl mb-1 text-white tracking-tight font-medium">Instytut medyczny</p>
<p className="text-sm text-slate-400 mb-8 font-light">MEDIMO Aneta Dinstak – Mroczkowska Sp. J.</p>
<div className="flex items-start gap-4 text-slate-300 font-light">
<iconify-icon className="text-xl mt-0.5 text-slate-400" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p>ul. Cisowa 2</p>
<p>57 – 300 Kłodzko</p>
</div>
</div>
</div>
<div className="md:col-span-2 hidden md:block"></div>

<div className="md:col-span-5">
<p className="uppercase text-xs font-medium tracking-widest text-slate-400 mb-8">Kontakt</p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl mt-0.5 text-slate-400" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col gap-1 text-lg font-light tracking-wide">
<a className="hover:text-slate-300 transition-colors" href="tel:748658880">74 865 88 80</a>
<a className="hover:text-slate-300 transition-colors" href="tel:+48601919063">+48 601 919 063</a>
</div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-slate-400" icon="solar:printer-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg font-light tracking-wide">74 865 88 89 (Fax)</p>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-slate-400" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-lg font-light tracking-wide hover:text-slate-300 transition-colors border-b border-white/20 pb-0.5 inline-block" href="mailto:info@medimo-instytut.pl">info@medimo-instytut.pl</a>
</div>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500 font-light tracking-wide text-center md:text-left">
                    Copyright © MEDIMO. Wszelkie prawa zastrzeżone.
                </p>
<p className="text-xs text-slate-500 font-light tracking-wide text-center md:text-right">
                    Created by Joanna and Krzysztof Wnuk
                </p>
</div>
</div>
</footer>



    </>
  );
}
