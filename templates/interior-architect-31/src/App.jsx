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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524', // Charcoal
900: '#1c1917',
},
gold: {
400: '#d4af37',
500: '#c5a028',
}
},
letterSpacing: {
widest: '.2em',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="flex flex-col">
<span className="font-serif text-lg tracking-tight text-stone-900 leading-none">ALEKSANDRA STEFANIAK</span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-500 mt-1">Architekt Wnętrz</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors duration-300" href="#about">O nas</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#portfolio">Realizacje</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#process">Proces</a>
<a className="px-6 py-2 border border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white transition-all duration-300" href="#contact">Kontakt</a>
</div>

<button className="md:hidden text-stone-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden flex items-center justify-center parallax-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp'}}>
<div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-50/90"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto reveal-on-scroll">
<span className="block text-xs md:text-sm text-white/90 uppercase tracking-[0.3em] mb-6 font-medium">Warszawa • Design • Sztuka</span>
<h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-tight mb-6 drop-shadow-sm">
                Architektura Wnętrz: <br/> <span className="italic font-normal">Ponadczasowa</span> Elegancja i Funkcjonalność.
            </h1>
<p className="text-white/90 text-sm md:text-lg font-light tracking-wide max-w-2xl mx-auto mb-10 leading-relaxed">
                Aleksandra Stefaniak – Tworzymy przestrzenie, które opowiadają Twoją historię. 
                Harmonia formy, światła i naturalnych materiałów.
            </p>
<a className="group inline-flex items-center gap-3 bg-white text-stone-900 px-8 py-4 text-xs uppercase tracking-widest hover:bg-stone-100 transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#portfolio">
<span>Zobacz Realizacje</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-stone-50" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="relative order-2 md:order-1 reveal-on-scroll">
<div className="aspect-[4/5] overflow-hidden bg-stone-200">
<img alt="Interior Detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-stone-100 -z-10"></div>
</div>
<div className="order-1 md:order-2 space-y-8 reveal-on-scroll">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4 tracking-tight">Filozofia Projektowania</h2>
<div className="w-12 h-[1px] bg-stone-400"></div>
</div>
<p className="text-stone-600 leading-loose font-light text-sm md:text-base text-justify">
                    Jako architekt wnętrz z siedzibą w Warszawie przy ulicy Sobieskiego 66, wierzę, że prawdziwy luksus kryje się w detalu. Moje projekty to fuzja nowoczesnego designu z historyczną wrażliwością i artystycznym sznytem.
                </p>
<p className="text-stone-600 leading-loose font-light text-sm md:text-base text-justify">
                    Unikam chwilowych trendów na rzecz materiałów, które szlachetnie się starzeją: naturalnego kamienia, litego drewna i patynowanego mosiądzu. Każde wnętrze traktuję jak rzeźbę – odejmując to, co zbędne, by wydobyć esencję przestrzeni i światła.
                </p>
<div className="flex items-center gap-12 pt-4">
<div className="text-center">
<span className="block font-serif text-3xl text-stone-800">10+</span>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Lat Doświadczenia</span>
</div>
<div className="text-center">
<span className="block font-serif text-3xl text-stone-800">50+</span>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Realizacji Premium</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-xs text-stone-500 uppercase tracking-[0.2em]">Metodyka Pracy</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 tracking-tight">Proces Projektowy</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-stone-300 z-0"></div>

<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="bg-stone-100 mx-auto w-24 h-24 flex items-center justify-center border border-stone-300 group-hover:border-stone-800 transition-colors duration-300 mb-8">
<iconify-icon className="text-stone-700 group-hover:text-stone-900 transition-colors" icon="solar:ruler-pen-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 text-center">01. Koncepcja</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed text-center px-4">
                        Analiza potrzeb, moodboardy, układy funkcjonalne. Tworzymy wizję, która łączy Twoje marzenia z potencjałem przestrzeni.
                    </p>
</div>

<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="bg-stone-100 mx-auto w-24 h-24 flex items-center justify-center border border-stone-300 group-hover:border-stone-800 transition-colors duration-300 mb-8">
<iconify-icon className="text-stone-700 group-hover:text-stone-900 transition-colors" icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 text-center">02. Projekt Wykonawczy</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed text-center px-4">
                        Dokumentacja techniczna, detale styków, dobór materiałów, rysunki dla wykonawców. Precyzja w każdym centymetrze.
                    </p>
</div>

<div className="relative z-10 group reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="bg-stone-100 mx-auto w-24 h-24 flex items-center justify-center border border-stone-300 group-hover:border-stone-800 transition-colors duration-300 mb-8">
<iconify-icon className="text-stone-700 group-hover:text-stone-900 transition-colors" icon="solar:eye-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-4 text-center">03. Nadzór Autorski</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed text-center px-4">
                        Koordynacja prac na budowie, dbałość o zgodność z projektem, pomoc w logistyce zamówień. Spokój i pewność efektu.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-50" id="portfolio">
<div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end reveal-on-scroll">
<div>
<span className="text-xs text-stone-500 uppercase tracking-[0.2em]">Portfolio</span>
<h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-3 tracking-tight">Wybrane Realizacje</h2>
</div>
<div className="mt-6 md:mt-0 flex gap-6 text-sm">
<button className="text-stone-900 border-b border-stone-900 pb-1">Wszystkie</button>
<button className="text-stone-400 hover:text-stone-900 transition-colors pb-1">Wnętrza Prywatne</button>
<button className="text-stone-400 hover:text-stone-900 transition-colors pb-1">Przestrzenie Biurowe</button>
</div>
</div>
<div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid group relative cursor-pointer overflow-hidden reveal-on-scroll">
<img alt="Mieszkanie Mokotów" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-stone-300 text-xs uppercase tracking-widest mb-1">Apartament</span>
<h3 className="text-white font-serif text-xl">Rezydencja Mokotów</h3>
</div>
</div>

<div className="break-inside-avoid group relative cursor-pointer overflow-hidden reveal-on-scroll">
<img alt="Dom pod Warszawą" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-stone-300 text-xs uppercase tracking-widest mb-1">Wnętrza Prywatne</span>
<h3 className="text-white font-serif text-xl">Dom w Konstancinie</h3>
</div>
</div>

<div className="break-inside-avoid group relative cursor-pointer overflow-hidden reveal-on-scroll">
<img alt="Biuro Kancelarii" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-stone-300 text-xs uppercase tracking-widest mb-1">Przestrzenie Biurowe</span>
<h3 className="text-white font-serif text-xl">Kancelaria Prawna</h3>
</div>
</div>

<div className="break-inside-avoid group relative cursor-pointer overflow-hidden reveal-on-scroll">
<img alt="Loft Żoliborz" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-stone-300 text-xs uppercase tracking-widest mb-1">Apartament</span>
<h3 className="text-white font-serif text-xl">Loft na Żoliborzu</h3>
</div>
</div>

<div className="break-inside-avoid group relative cursor-pointer overflow-hidden reveal-on-scroll">
<img alt="Willa Wilanów" className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617104424032-b9bd6972d0e4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 image-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-stone-300 text-xs uppercase tracking-widest mb-1">Wnętrza Prywatne</span>
<h3 className="text-white font-serif text-xl">Willa Wilanowska</h3>
</div>
</div>
</div>
<div className="text-center mt-16 reveal-on-scroll">
<a className="inline-block border-b border-stone-800 pb-1 text-sm uppercase tracking-widest hover:text-stone-600 transition-colors" href="#">Zobacz więcej projektów</a>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight text-center">Zaufali Nam</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
<div className="p-8 border border-stone-800 hover:border-stone-600 transition-colors duration-300 reveal-on-scroll">
<div className="flex gap-1 text-yellow-700/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-stone-300 italic mb-6 leading-relaxed">
                        "Pani Aleksandra stworzyła dla nas dom, który przerósł nasze oczekiwania. Połączenie klasyki z nowoczesnością jest po prostu majstersztykiem."
                    </p>
<span className="text-xs uppercase tracking-widest text-stone-500 block">Anna &amp; Piotr</span>
<span className="text-xs text-stone-600">Realizacja: Wilanów</span>
</div>
<div className="p-8 border border-stone-800 hover:border-stone-600 transition-colors duration-300 reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1 text-yellow-700/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-stone-300 italic mb-6 leading-relaxed">
                        "Profesjonalizm na każdym etapie. Od pierwszych szkiców po dobór zasłon. Biuro wygląda reprezentacyjnie i elegancko."
                    </p>
<span className="text-xs uppercase tracking-widest text-stone-500 block">Kancelaria M&amp;W</span>
<span className="text-xs text-stone-600">Realizacja: Śródmieście</span>
</div>
<div className="p-8 border border-stone-800 hover:border-stone-600 transition-colors duration-300 reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1 text-yellow-700/80 mb-6">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="font-light text-stone-300 italic mb-6 leading-relaxed">
                        "Niesamowite wyczucie stylu i przestrzeni. Apartament zyskał drugie życie. Dziękujemy za cierpliwość i perfekcyjny nadzór."
                    </p>
<span className="text-xs uppercase tracking-widest text-stone-500 block">Marek S.</span>
<span className="text-xs text-stone-600">Realizacja: Mokotów</span>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-24 pb-12 px-6 border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">

<div className="reveal-on-scroll">
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-8 tracking-tight">Porozmawiajmy o Twoim wnętrzu.</h2>
<p className="text-stone-500 font-light mb-12 max-w-md">
                        Skontaktuj się z nami, aby omówić wizję Twojego nowego projektu. Jesteśmy do Twojej dyspozycji w Warszawie.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Telefon</span>
<a className="text-lg text-stone-800 hover:text-stone-600 transition-colors" href="tel:+48602895454">+48 602 895 454</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Adres</span>
<p className="text-lg text-stone-800">Sobieskiego 66/36, Warszawa</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-stone-400 mt-1" icon="solar:letter-linear" width="24"></iconify-icon>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Email</span>
<a className="text-lg text-stone-800 hover:text-stone-600 transition-colors" href="mailto:kontakt@stefaniak.pl">kontakt@stefaniak.pl</a>
</div>
</div>
</div>
</div>

<form className="reveal-on-scroll space-y-8 bg-white p-8 md:p-12 shadow-sm border border-stone-100">
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Imię i Nazwisko</label>
<input className="w-full bg-stone-50 border-0 border-b border-stone-300 px-4 py-3 text-stone-800 focus:ring-0 focus:border-stone-800 transition-colors placeholder:text-stone-300 font-light" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Email</label>
<input className="w-full bg-stone-50 border-0 border-b border-stone-300 px-4 py-3 text-stone-800 focus:ring-0 focus:border-stone-800 transition-colors placeholder:text-stone-300 font-light" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Rodzaj Projektu</label>
<select className="w-full bg-stone-50 border-0 border-b border-stone-300 px-4 py-3 text-stone-800 focus:ring-0 focus:border-stone-800 transition-colors font-light">
<option>Wnętrze Prywatne</option>
<option>Przestrzeń Biurowa</option>
<option>Inne</option>
</select>
</div>
<div className="pt-4">
<button className="w-full bg-stone-900 text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-stone-700 transition-all duration-300 ease-out shadow-lg" type="button">
                            Wyślij Wiadomość
                        </button>
</div>
</form>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200 text-xs text-stone-400 font-light">
<p>© 2023 Architekt Wnętrz Aleksandra Stefaniak. Wszelkie prawa zastrzeżone.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-800 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-800 transition-colors" href="#">Facebook</a>
<a className="hover:text-stone-800 transition-colors" href="#">Homify</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
