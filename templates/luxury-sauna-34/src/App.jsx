import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Scroll Reveal Script
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl tracking-tighter font-medium uppercase z-50" href="#">Lumen<span className="text-stone-400">.</span></a>
<div className="hidden md:flex space-x-12 text-sm tracking-wide font-medium text-stone-600">
<a className="hover:text-black transition-colors" href="#about">Filozofia</a>
<a className="hover:text-black transition-colors" href="#products">Kolekcja</a>
<a className="hover:text-black transition-colors" href="#process">Proces</a>
<a className="hover:text-black transition-colors" href="#realizations">Realizacje</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest border border-stone-200 px-6 py-2.5 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-500" href="#contact">
                Kontakt
            </a>

<button className="md:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
<div className="absolute inset-0 w-full h-full">
<img alt="Luxury Sauna Interior" className="w-full h-full object-cover grayscale-[20%] brightness-[0.85]" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"></div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto mt-16">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-tight mb-6 reveal active">
                Sauny tworzone jak<br/>dzieła architektury
            </h1>
<p className="text-lg md:text-xl font-light tracking-wide text-stone-200 max-w-2xl mx-auto mb-12 reveal active" style={{transitionDelay: '100ms'}}>
                Projektujemy i produkujemy sauny premium, które stają się integralną częścią Twojej przestrzeni życiowej.
            </p>
<div className="reveal active" style={{transitionDelay: '200ms'}}>
<a className="inline-flex items-center gap-3 bg-white text-stone-900 px-10 py-4 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors duration-300" href="#contact">
                    Zamów projekt
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 px-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="reveal">
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-4 block">O Marce</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-snug">
                    Rzemiosło spotyka<br/>nowoczesny design.
                </h2>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
<p>
                        W świecie masowej produkcji, my wybieramy drogę bezkompromisowej jakości. Każda nasza realizacja to wynik połączenia szlachetnego drewna, szkła i innowacyjnej technologii.
                    </p>
<p>
                        Nie budujemy po prostu saun. Tworzymy intymne przestrzenie regeneracji, inspirowane skandynawskim minimalizmem i japońską dbałością o detal. Jesteśmy architektami Twojego spokoju.
                    </p>
</div>
<div className="mt-10 flex gap-12">
<div>
<span className="block text-4xl font-light text-stone-900 mb-1">15+</span>
<span className="text-xs uppercase tracking-wider text-stone-400">Lat doświadczenia</span>
</div>
<div>
<span className="block text-4xl font-light text-stone-900 mb-1">500+</span>
<span className="text-xs uppercase tracking-wider text-stone-400">Realizacji premium</span>
</div>
</div>
</div>
<div className="relative h-[600px] w-full reveal" style={{transitionDelay: '100ms'}}>
<img alt="Craftsmanship Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-stone-100 p-8 flex items-center justify-center text-center">
<p className="font-serif italic text-stone-800 text-lg">"Perfekcja w każdym detalu."</p>
</div>
</div>
</div>
</section>

<section className="w-full" id="products">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="group relative h-[80vh] overflow-hidden">
<img alt="Finnish Sauna" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 text-white">
<h3 className="text-3xl font-medium mb-2 tracking-tight">Sauna Fińska</h3>
<p className="text-white/80 font-light mb-6 max-w-sm">Tradycja wysokich temperatur w nowoczesnej, przeszklonej formie.</p>
<a className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-stone-300 hover:border-stone-300 transition-colors" href="#contact">Zobacz specyfikację</a>
</div>
</div>

<div className="group relative h-[80vh] overflow-hidden">
<img alt="Infrared Sauna" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 text-white">
<h3 className="text-3xl font-medium mb-2 tracking-tight">Sauna Infrared</h3>
<p className="text-white/80 font-light mb-6 max-w-sm">Głębokie ciepło promieni podczerwonych dla maksymalnej regeneracji.</p>
<a className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-stone-300 hover:border-stone-300 transition-colors" href="#contact">Zobacz specyfikację</a>
</div>
</div>

<div className="group relative h-[80vh] overflow-hidden">
<img alt="Garden Sauna" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 text-white">
<h3 className="text-3xl font-medium mb-2 tracking-tight">Sauna Ogrodowa</h3>
<p className="text-white/80 font-light mb-6 max-w-sm">Harmonia z naturą. Architektoniczna bryła w Twoim ogrodzie.</p>
<a className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-stone-300 hover:border-stone-300 transition-colors" href="#contact">Zobacz specyfikację</a>
</div>
</div>

<div className="group relative h-[80vh] overflow-hidden bg-stone-900 flex items-center justify-center">
<div className="absolute inset-0 opacity-20">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1"></path>
</svg>
</div>
<div className="text-center p-10 relative z-10">
<h3 className="text-4xl md:text-5xl font-medium text-white mb-4 tracking-tight">Projekt Indywidualny</h3>
<p className="text-stone-400 font-light mb-8 max-w-md mx-auto">Masz nietypową przestrzeń? Stworzymy saunę skrojoną na miarę Twoich marzeń.</p>
<a className="bg-white text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-200 transition-colors" href="#contact">Konsultacja</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<span className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-2 block">Jak pracujemy</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Proces realizacji</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative p-8 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 reveal group">
<div className="text-stone-300 text-6xl font-light absolute top-4 right-4 group-hover:text-stone-900 transition-colors">01</div>
<div className="mb-6 mt-4">
<iconify-icon className="text-stone-800" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Projekt</h3>
<p className="text-sm text-stone-600 leading-relaxed">Analiza przestrzeni, dobór materiałów i wizualizacja 3D dopasowana do wnętrza.</p>
</div>

<div className="relative p-8 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 reveal group" style={{transitionDelay: '100ms'}}>
<div className="text-stone-300 text-6xl font-light absolute top-4 right-4 group-hover:text-stone-900 transition-colors">02</div>
<div className="mb-6 mt-4">
<iconify-icon className="text-stone-800" icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Produkcja</h3>
<p className="text-sm text-stone-600 leading-relaxed">Ręczne wykonanie w naszej polskiej manufakturze z selekcjonowanego drewna.</p>
</div>

<div className="relative p-8 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 reveal group" style={{transitionDelay: '200ms'}}>
<div className="text-stone-300 text-6xl font-light absolute top-4 right-4 group-hover:text-stone-900 transition-colors">03</div>
<div className="mb-6 mt-4">
<iconify-icon className="text-stone-800" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Dostawa</h3>
<p className="text-sm text-stone-600 leading-relaxed">Bezpieczny transport elementów bezpośrednio do Twojego domu lub ogrodu.</p>
</div>

<div className="relative p-8 bg-white border border-stone-200 hover:border-stone-300 hover:shadow-lg transition-all duration-300 reveal group" style={{transitionDelay: '300ms'}}>
<div className="text-stone-300 text-6xl font-light absolute top-4 right-4 group-hover:text-stone-900 transition-colors">04</div>
<div className="mb-6 mt-4">
<iconify-icon className="text-stone-800" icon="solar:screwdrivers-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Montaż</h3>
<p className="text-sm text-stone-600 leading-relaxed">Profesjonalna instalacja, testy systemów i instruktaż użytkowania.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
<div className="flex flex-col items-center gap-4 reveal">
<iconify-icon className="text-stone-400" icon="solar:flag-linear" width="32"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">Produkcja w Polsce</span>
</div>
<div className="flex flex-col items-center gap-4 reveal" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-stone-400" icon="solar:diamond-linear" width="32"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">Materiały Premium</span>
</div>
<div className="flex flex-col items-center gap-4 reveal" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-stone-400" icon="solar:palette-linear" width="32"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">Design Indywidualny</span>
</div>
<div className="flex flex-col items-center gap-4 reveal" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-stone-400" icon="solar:shield-check-linear" width="32"></iconify-icon>
<span className="text-sm uppercase tracking-widest font-medium">Gwarancja Jakości</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="realizations">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight reveal">Wybrane realizacje</h2>
<a className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-stone-600 transition-colors reveal" href="#">
                Zobacz wszystkie
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 px-0 md:px-6">
<div className="col-span-1 md:col-span-2 h-96 md:h-[600px] relative group overflow-hidden reveal">
<img alt="Realization 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-96 md:h-[600px] relative group overflow-hidden reveal" style={{transitionDelay: '100ms'}}>
<img alt="Realization 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 h-96 relative group overflow-hidden reveal">
<img alt="Realization 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="col-span-1 md:col-span-2 h-96 relative group overflow-hidden reveal" style={{transitionDelay: '100ms'}}>
<img alt="Realization 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-300 mb-8" icon="solar:quote-up-linear" width="48"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-light leading-normal text-stone-800 mb-8 reveal">
                "Współpraca z Lumen to czysta przyjemność. Sauna nie tylko wygląda spektakularnie, ale jakość wykonania detali przewyższa to, co widziałem w luksusowych hotelach."
            </blockquote>
<div className="flex flex-col items-center reveal" style={{transitionDelay: '100ms'}}>
<span className="font-medium text-stone-900">Marek Kamiński</span>
<span className="text-sm text-stone-500">Architekt, Warszawa</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center reveal">Warianty wykonania</h2>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 border border-stone-200">

<div className="p-12 hover:bg-stone-50 transition-colors reveal">
<h3 className="text-xl font-medium mb-2">Essential</h3>
<p className="text-stone-500 text-sm mb-8 h-10">Ponadczasowa klasyka w najlepszym wydaniu.</p>
<ul className="space-y-4 mb-10 text-sm text-stone-600">
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Świerk skandynawski</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Front szklany</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Piec elektryczny standard</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Oświetlenie LED</li>
</ul>
<a className="block text-center border border-stone-300 py-3 text-xs uppercase tracking-widest hover:border-black hover:bg-black hover:text-white transition-all" href="#contact">Zapytaj o cenę</a>
</div>

<div className="p-12 bg-stone-50 relative reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-900 text-white text-[10px] uppercase tracking-widest px-3 py-1">Best Choice</div>
<h3 className="text-xl font-medium mb-2">Premium</h3>
<p className="text-stone-500 text-sm mb-8 h-10">Szlachetne gatunki drewna i zaawansowana technologia.</p>
<ul className="space-y-4 mb-10 text-sm text-stone-600">
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Cedr kanadyjski / Hemlock</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Przeszklenia panoramiczne</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Sterownik dotykowy WiFi</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> System audio premium</li>
</ul>
<a className="block text-center bg-stone-900 text-white border border-stone-900 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="#contact">Zapytaj o cenę</a>
</div>

<div className="p-12 hover:bg-stone-50 transition-colors reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-xl font-medium mb-2">Bespoke</h3>
<p className="text-stone-500 text-sm mb-8 h-10">Brak ograniczeń. Pełna personalizacja.</p>
<ul className="space-y-4 mb-10 text-sm text-stone-600">
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Dowolny gatunek drewna</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Nietypowe kształty</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Piece designerskie</li>
<li className="flex items-center gap-3"><iconify-icon className="text-stone-800" icon="solar:check-circle-linear"></iconify-icon> Integracja Smart Home</li>
</ul>
<a className="block text-center border border-stone-300 py-3 text-xs uppercase tracking-widest hover:border-black hover:bg-black hover:text-white transition-all" href="#contact">Zapytaj o cenę</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-stone-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 reveal">Stwórzmy Twoją saunę.</h2>
<p className="text-stone-400 font-light text-lg reveal" style={{transitionDelay: '100ms'}}>Wypełnij formularz. Skontaktujemy się, aby omówić Twoją wizję.</p>
</div>
<form className="space-y-12 reveal" style={{transitionDelay: '200ms'}}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-stone-700 py-3 focus:outline-none focus:border-white transition-colors text-lg placeholder-transparent" id="name" placeholder="Imię i Nazwisko" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-stone-300" htmlFor="name">Imię i Nazwisko</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-stone-700 py-3 focus:outline-none focus:border-white transition-colors text-lg placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-stone-300" htmlFor="email">Adres Email</label>
</div>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-stone-700 py-3 focus:outline-none focus:border-white transition-colors text-lg placeholder-transparent" id="phone" placeholder="Telefon" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-stone-300" htmlFor="phone">Numer Telefonu</label>
</div>
<div className="pt-8 text-center">
<button className="bg-white text-stone-900 px-12 py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-stone-200 transition-colors" type="button">
                        Wyślij zapytanie
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl tracking-tighter font-medium uppercase block mb-6" href="#">Lumen<span className="text-stone-400">.</span></a>
<p className="text-stone-500 text-sm leading-relaxed">
                        Definiujemy na nowo pojęcie relaksu, łącząc sztukę stolarstwa z nowoczesną technologią.
                    </p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-stone-900">Oferta</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-black transition-colors" href="#">Sauny Fińskie</a></li>
<li><a className="hover:text-black transition-colors" href="#">Sauny Infrared</a></li>
<li><a className="hover:text-black transition-colors" href="#">Sauny Ogrodowe</a></li>
<li><a className="hover:text-black transition-colors" href="#">Projekty Indywidualne</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-stone-900">Firma</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-black transition-colors" href="#">O nas</a></li>
<li><a className="hover:text-black transition-colors" href="#">Realizacje</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-stone-900">Social Media</h4>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-black transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="hover:text-black transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="hover:text-black transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400">
<p>© 2023 Lumen Saunas. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-stone-600" href="#">Polityka Prywatności</a>
<a className="hover:text-stone-600" href="#">Regulamin</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
