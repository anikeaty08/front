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
sans: ['DM Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#FAFAF9',
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
800: '#292524',
900: '#1C1917',
},
olive: {
50: '#F4F7F2',
100: '#E6EBE1',
500: '#84966F', // Muted olive
600: '#697A55',
900: '#2F3826',
},
},
letterSpacing: {
tight: '-0.03em',
widest: '0.15em',
}
}
}
}



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                navbar.classList.remove('py-6', 'border-transparent');
            } else {
                navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                navbar.classList.add('py-6', 'border-transparent');
            }
        });

        // Intersection Observer for Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        const links = document.querySelectorAll('.mobile-link');
        let isOpen = false;

        function toggleMenu() {
            isOpen = !isOpen;
            if (isOpen) {
                mobileNav.classList.remove('translate-x-full');
                mobileNav.classList.add('translate-x-0');
                document.body.style.overflow = 'hidden';
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="26"></iconify-icon>';
            } else {
                mobileNav.classList.remove('translate-x-0');
                mobileNav.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="26"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));
    
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
      

<nav className="fixed w-full z-50 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

<a className="relative z-50 group" href="#">
<div className="flex flex-col">
<span className="font-serif text-2xl text-stone-900 tracking-tight">Kaštel Pineta</span>
<span className="text-[10px] uppercase tracking-widest text-olive-600 mt-0.5">Agroturizam</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#home">Naslovna</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#gastronomy">Gastronomija</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#accommodation">Smještaj</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#wine">Vino</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#experience">Doživljaj</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-stone-50 text-xs uppercase tracking-widest hover:bg-olive-600 transition-colors duration-300" href="#contact">
<span>Rezerviraj</span>
</a>
<button className="md:hidden z-50 text-stone-900 p-1" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="26"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-stone-50 z-40 transform translate-x-full flex flex-col justify-center items-center gap-8" id="mobile-nav">
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#home">Naslovna</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#gastronomy">Gastronomija</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#accommodation">Smještaj</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#wine">Vino</a>
<a className="font-serif text-3xl text-olive-600 mobile-link" href="#contact">Kontakt</a>
</div>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">


<img alt="Kaštel Pineta Stone Courtyard" className="w-full h-full object-cover transform scale-105" src="https://images.unsplash.com/photo-1543666299-c45474771212?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-stone-900/40 to-stone-900/60 mix-blend-multiply"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-12">
<div className="reveal-up">
<span className="inline-block py-1.5 px-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] uppercase tracking-widest mb-6">
                    Sveti Martin, Istra
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8 reveal-up" style={{transitionDelay: '100ms'}}>
                Tradicija u kamenu,<br/>
<span className="italic font-light opacity-90">duša Istre.</span>
</h1>
<p className="text-stone-100 text-lg md:text-xl font-light max-w-lg mx-auto mb-12 reveal-up drop-shadow-sm" style={{transitionDelay: '200ms'}}>
                Bijeg u tišinu. Doživite autentičnu gastronomiju, vrhunska vina i povijesni ambijent plemićkog imanja.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-up" style={{transitionDelay: '300ms'}}>
<a className="min-w-[160px] bg-white text-stone-900 px-8 py-4 hover:bg-stone-100 transition duration-300 text-xs tracking-widest uppercase font-medium" href="#gastronomy">
                    Istraži
                </a>
</div>
</div>
<a className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce hover:text-white transition-colors" href="#about">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="28"></iconify-icon>
</a>
</header>

<section className="py-24 md:py-32 px-6 lg:px-12 bg-stone-50 border-b border-stone-200" id="about">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-up order-2 lg:order-1">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-olive-600"></span>
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest">Povijest &amp; Baština</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight tracking-tight">
                    Čuvari vremena u <br/>srcu Istre.
                </h2>
<div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed text-justify">
<p>
                        Kaštel Pineta nije samo mjesto odmora, već živi spomenik. Smješten u bivšoj rezidenciji obitelji Lazzarini-Battiala, naš agroturizam spaja stoljetnu povijest s modernim komforom.
                    </p>
<p>
                        Svaki kamen u zidu priča priču, svako drvo u našem parku pruža hlad generacijama. Ovdje vrijeme teče sporije, usklađeno s ritmom prirode, berbi grožđa i dozrijevanjem pršuta.
                    </p>
</div>
<div className="mt-10">
<a className="group inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#contact">
<span className="text-sm font-medium">Pročitajte našu priču</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative order-1 lg:order-2 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="grid grid-cols-12 gap-4 h-[500px]">

<div className="col-span-7 h-full group cursor-pointer">
<div className="img-marker rounded-sm">
<iconify-icon className="mb-2 opacity-40" icon="solar:gallery-linear" width="32"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest opacity-60">Kameni detalji (Vertikalno)</span>
</div>
</div>

<div className="col-span-5 flex flex-col gap-4 h-full pt-12">
<div className="h-1/2 w-full group cursor-pointer">
<div className="img-marker rounded-sm">
<iconify-icon className="mb-2 opacity-40" icon="solar:camera-minimalistic-linear" width="24"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest opacity-60">Ambijent</span>
</div>
</div>
<div className="h-1/2 w-full bg-stone-100 p-6 flex flex-col justify-center border border-stone-200 rounded-sm">
<iconify-icon className="text-olive-600 mb-3" icon="solar:star-linear" width="24"></iconify-icon>
<p className="font-serif text-lg italic text-stone-800 leading-snug">"Autentičnost koju je nemoguće kopirati."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gastronomy">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest mb-3 block">Restoran</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Okusi tradicije</h2>
</div>
<p className="text-stone-500 font-light max-w-sm text-right md:text-left mt-4 md:mt-0 leading-relaxed">
                    Domaća tjestenina, meso ispod peke i sezonske namirnice iz našeg vrta. Jednostavno, iskreno i vrhunsko.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer reveal-up">
<div className="aspect-[4/5] w-full overflow-hidden mb-6 relative">
<div className="img-marker absolute inset-0 bg-stone-100 border-none group-hover:bg-stone-200">
<iconify-icon className="mb-3 opacity-30" icon="solar:chef-hat-heart-linear" width="40"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-50">Domaća Pašta</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-olive-600 transition-colors">Domaća Pašta</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                        Ručno rađeni fuži, pljukanci i njoki, servirani s tartufima ili divljači. Okus koji se pamti.
                    </p>
</div>

<div className="group cursor-pointer reveal-up" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/5] w-full overflow-hidden mb-6 relative">
<div className="img-marker absolute inset-0 bg-stone-100 border-none group-hover:bg-stone-200">
<iconify-icon className="mb-3 opacity-30" icon="solar:bone-linear" width="40"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-50">Istarski Pršut</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-olive-600 transition-colors">Istarski Pršut</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                        Sušen na istarskoj buri, rezan rukom pred vama. Ponos naše konobe i uvod u svaki obrok.
                    </p>
</div>

<div className="group cursor-pointer reveal-up" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/5] w-full overflow-hidden mb-6 relative">
<div className="img-marker absolute inset-0 bg-stone-100 border-none group-hover:bg-stone-200">
<iconify-icon className="mb-3 opacity-30" icon="solar:fire-linear" width="40"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-50">Kamin</span>
</div>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-olive-600 transition-colors">Otvoreni Kamin</h3>
<p className="text-stone-500 font-light text-sm leading-relaxed">
                        Toplina vatre, miris drva i rustikalni ambijent stvaraju savršenu atmosferu za večere.
                    </p>
</div>
</div>
<div className="mt-16 text-center reveal-up">
<a className="inline-block px-10 py-4 border border-stone-200 text-stone-900 uppercase tracking-widest text-xs font-medium hover:border-stone-900 hover:bg-stone-50 transition duration-300" href="#contact">
                    Rezerviraj Stol
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200" id="accommodation">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div className="grid grid-cols-2 gap-4 h-[600px] reveal-up">
<div className="col-span-2 row-span-2 group">
<div className="img-marker rounded-sm bg-white border-stone-200">
<iconify-icon className="mb-3 opacity-30" icon="solar:bed-linear" width="48"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-50">Glavna Soba / Interijer</span>
</div>
</div>
<div className="col-span-1 row-span-1 group">
<div className="img-marker rounded-sm bg-white border-stone-200">
<span className="text-[10px] uppercase tracking-widest opacity-50">Detalj</span>
</div>
</div>
<div className="col-span-1 row-span-1 group">
<div className="img-marker rounded-sm bg-white border-stone-200">
<span className="text-[10px] uppercase tracking-widest opacity-50">Bazen</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center reveal-up" style={{transitionDelay: '200ms'}}>
<div className="mb-6">
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest">Apartmani &amp; Sobe</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mt-3 mb-6 tracking-tight">Mirne istarske noći.</h2>
<p className="text-stone-600 font-light text-lg mb-8 leading-relaxed">
                            Probudite se uz pjev ptica i pogled na maslinike. Naši apartmani nude savršen spoj rustikalnog šarma i moderne udobnosti. Svaka soba je unikatna, uređena s pažnjom prema povijesti objekta.
                        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-10">
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-full border border-stone-200 text-olive-600">
<iconify-icon icon="solar:swimming-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-stone-900">Vanjski Bazen</h4>
<p className="text-xs text-stone-500 mt-1">Osvježenje u vrtu s ležaljkama.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-full border border-stone-200 text-olive-600">
<iconify-icon icon="solar:wifi-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-stone-900">Brzi Wi-Fi</h4>
<p className="text-xs text-stone-500 mt-1">Povezani s prirodom i svijetom.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-full border border-stone-200 text-olive-600">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-stone-900">Klimatizirano</h4>
<p className="text-xs text-stone-500 mt-1">Ugodna temperatura ljeti i zimi.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-white rounded-full border border-stone-200 text-olive-600">
<iconify-icon icon="solar:parking-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-stone-900">Privatni Parking</h4>
<p className="text-xs text-stone-500 mt-1">Siguran parking za goste.</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-olive-700 font-medium hover:text-olive-900 transition group w-fit" href="#contact">
<span className="border-b border-olive-300 group-hover:border-olive-900 pb-0.5 transition-colors">Provjeri raspoloživost</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-stone-900 text-stone-50 overflow-hidden" id="wine">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-olive-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="text-center mb-20 reveal-up">
<span className="text-olive-500 font-medium text-xs uppercase tracking-widest block mb-4">Vinski Podrum</span>
<h2 className="font-serif text-4xl md:text-6xl text-white mb-6 tracking-tight">Plodovi naše zemlje.</h2>
<p className="text-stone-400 max-w-2xl mx-auto font-light text-lg">
                    U hladu kamenog podruma dozrijevaju vina koja u sebi nose sunce, crvenu zemlju i trud naših ruku.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="reveal-up order-2 md:order-1">
<div className="aspect-[4/5] w-full border border-stone-700/50 p-3 bg-stone-800/30">
<div className="img-marker bg-stone-800 border-stone-700 text-stone-600">
<iconify-icon className="mb-3 opacity-40" icon="solar:wine-trash-linear" width="48"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-60">Vinska boca / Podrum</span>
</div>
</div>
</div>

<div className="reveal-up order-1 md:order-2 space-y-12">
<div className="group border-b border-stone-800 pb-8 hover:border-olive-900 transition-colors duration-500">
<div className="flex justify-between items-end mb-3">
<h3 className="font-serif text-3xl text-stone-200 group-hover:text-olive-400 transition-colors">Malvazija</h3>
<span className="text-xs font-mono text-stone-500 uppercase">Suho Bijelo</span>
</div>
<p className="text-stone-400 font-light leading-relaxed">
                            Svježe i mineralno vino zlatno-žute boje. Note bagrema i citrusa, savršeno uz naše domaće tjestenine.
                        </p>
</div>
<div className="group border-b border-stone-800 pb-8 hover:border-olive-900 transition-colors duration-500">
<div className="flex justify-between items-end mb-3">
<h3 className="font-serif text-3xl text-stone-200 group-hover:text-red-400 transition-colors">Teran</h3>
<span className="text-xs font-mono text-stone-500 uppercase">Crno</span>
</div>
<p className="text-stone-400 font-light leading-relaxed">
                            Kralj istarskih crnih vina. Rubinske boje, punog tijela i karakteristične svježine. Prati jela od divljači.
                        </p>
</div>
<div className="group pb-4">
<div className="flex justify-between items-end mb-3">
<h3 className="font-serif text-3xl text-stone-200 group-hover:text-olive-400 transition-colors">Domaće Rakije</h3>
<span className="text-xs font-mono text-stone-500 uppercase">Digestiv</span>
</div>
<p className="text-stone-400 font-light leading-relaxed">
                            Biska, Medica i Erba Luigia. Tradicionalni recepti prenošeni generacijama, idealan završetak večere.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-3 px-6 py-3 border border-stone-600 rounded-full text-xs uppercase tracking-widest hover:bg-stone-800 hover:border-stone-500 transition-all" href="#contact">
<iconify-icon icon="solar:wineglass-linear" width="16"></iconify-icon>
                             Dogovori degustaciju
                         </a>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 h-64 md:h-80 bg-stone-200">
<div className="border-r border-stone-50/20 w-full h-full relative">
<div className="img-marker bg-stone-300 border-none text-stone-500">
<span className="text-[10px] uppercase">Galerija 1</span>
</div>
</div>
<div className="border-r border-stone-50/20 w-full h-full relative">
<div className="img-marker bg-stone-200 border-none text-stone-400">
<span className="text-[10px] uppercase">Galerija 2</span>
</div>
</div>
<div className="border-r border-stone-50/20 w-full h-full relative">
<div className="img-marker bg-stone-300 border-none text-stone-500">
<span className="text-[10px] uppercase">Galerija 3</span>
</div>
</div>
<div className="w-full h-full relative">
<div className="img-marker bg-stone-200 border-none text-stone-400">
<span className="text-[10px] uppercase">Galerija 4</span>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-24 pb-12 px-6 lg:px-12" id="contact">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="reveal-up">
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest mb-4 block">Kontakt</span>
<h2 className="font-serif text-5xl text-stone-900 mb-8 tracking-tight">Tu smo za vas.</h2>
<p className="text-stone-600 font-light mb-12 text-lg max-w-md">
                        Za rezervacije stola, smještaja ili degustacije vina, slobodno nas kontaktirajte.
                    </p>
<div className="grid gap-8">
<a className="flex items-start gap-6 group" href="tel:+385911234567">
<div className="mt-1 text-olive-600 group-hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="28"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Telefon</span>
<span className="font-serif text-2xl text-stone-900 group-hover:text-olive-600 transition-colors">+385 (0)91 123 4567</span>
</div>
</a>
<a className="flex items-start gap-6 group" href="mailto:info@kastel-pineta.com">
<div className="mt-1 text-olive-600 group-hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:letter-linear" width="28"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Email</span>
<span className="font-serif text-2xl text-stone-900 group-hover:text-olive-600 transition-colors">info@kastel-pineta.com</span>
</div>
</a>
<div className="flex items-start gap-6">
<div className="mt-1 text-olive-600">
<iconify-icon icon="solar:map-point-linear" width="28"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Lokacija</span>
<span className="font-serif text-xl text-stone-900 block">Sveti Martin 32/B</span>
<span className="text-stone-500 font-light">52231 Nedešćina, Istra</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-stone-100 reveal-up" style={{transitionDelay: '200ms'}}>
<form className="space-y-8">
<div className="grid grid-cols-2 gap-6">
<div className="relative group">
<input className="peer w-full border-b border-stone-200 py-2 placeholder-transparent focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-olive-600" htmlFor="name">Ime</label>
</div>
<div className="relative group">
<input className="peer w-full border-b border-stone-200 py-2 placeholder-transparent focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900" id="surname" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-olive-600" htmlFor="surname">Prezime</label>
</div>
</div>
<div className="relative group">
<input className="peer w-full border-b border-stone-200 py-2 placeholder-transparent focus:outline-none focus:border-olive-600 transition-colors bg-transparent text-stone-900" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-olive-600" htmlFor="email">Email adresa</label>
</div>
<div className="relative group">
<textarea className="peer w-full border-b border-stone-200 py-2 placeholder-transparent focus:outline-none focus:border-olive-600 transition-colors bg-transparent resize-none text-stone-900" id="message" rows="3"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-stone-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-olive-600" htmlFor="message">Vaša poruka</label>
</div>
<button className="w-full bg-stone-900 text-white py-4 mt-6 uppercase tracking-widest text-xs font-bold hover:bg-olive-600 transition-all duration-300 shadow-lg hover:shadow-xl" type="button">
                            Pošalji Upit
                        </button>
</form>
</div>
</div>

<div className="mt-24 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
<a className="font-serif text-2xl text-stone-900 tracking-tight" href="#">Kaštel Pineta</a>
<div className="flex gap-8">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="22"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="22"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon></a>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#">Privatnost</a>
<a className="hover:text-stone-900 transition-colors" href="#">Uvjeti</a>
<span>© 2024</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
