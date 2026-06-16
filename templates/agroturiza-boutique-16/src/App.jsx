import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
400: '#A8A29E',
500: '#78716C',
600: '#57534E',
800: '#292524',
900: '#1C1917',
},
olive: { // Custom earthy green based on Istrian terrain
50: '#F7F8F6',
100: '#EEF1EC',
500: '#84966F',
600: '#697A55',
800: '#3F4A33',
900: '#2C3324',
},
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
}
}
}
}



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'py-3');
                navbar.classList.remove('py-6', 'border-transparent');
            } else {
                navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-sm', 'py-3');
                navbar.classList.add('py-6', 'border-transparent');
            }
        });

        // Intersection Observer for Reveal Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
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
                menuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>';
            } else {
                mobileNav.classList.remove('translate-x-0');
                mobileNav.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>';
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-500 py-6 border-b border-transparent" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

<a className="relative z-50 group" href="#">
<div className="flex flex-col items-start">
<span className="font-serif text-2xl text-stone-900 tracking-tight leading-none">Kaštel Pineta</span>
<span className="text-[10px] uppercase tracking-widest text-olive-600 mt-1">Sveti Martin · Istra</span>
</div>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#home">Home</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#gastronomy">Gastronomija</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#accommodation">Smještaj</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#relax">Relax &amp; Meeting</a>
<a className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 transition-colors" href="#contact">Kontakt</a>
</div>

<div className="hidden md:flex items-center gap-6">
<div className="flex gap-3 text-[10px] uppercase font-medium text-stone-400">
<a className="text-stone-900" href="#">HR</a>
<span className="w-px h-3 bg-stone-300"></span>
<a className="hover:text-stone-900 transition-colors" href="#">EN</a>
<a className="hover:text-stone-900 transition-colors" href="#">DE</a>
<a className="hover:text-stone-900 transition-colors" href="#">IT</a>
</div>
<a className="px-5 py-2 bg-stone-900 text-stone-50 text-[10px] uppercase tracking-widest hover:bg-olive-600 transition-colors duration-300" href="#contact">
                    Rezerviraj
                </a>
</div>

<button className="md:hidden z-50 text-stone-900" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-stone-50 z-40 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8" id="mobile-nav">
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#home">Naslovna</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#gastronomy">Gastronomija</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#accommodation">Smještaj</a>
<a className="font-serif text-3xl text-stone-900 mobile-link" href="#relax">Doživljaj</a>
<a className="font-serif text-3xl text-olive-600 mobile-link" href="#contact">Kontakt</a>
</div>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-stone-900" id="home">

<div className="absolute inset-0 z-0 opacity-60">

<img alt="Kaštel Pineta Courtyard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533090631849-014f3c7dc79b?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<div className="reveal-up">
<div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-olive-500"></span>
<span className="text-stone-200 text-[11px] uppercase tracking-widest">Agroturizam na poseban način</span>
</div>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-50 leading-[1.1] mb-8 reveal-up tracking-tight" style={{transitionDelay: '100ms'}}>
                Tradicija obitelji<br/>
<span className="text-olive-100/90 italic font-light">Radićanin.</span>
</h1>
<p className="text-stone-300 text-lg md:text-xl font-light max-w-lg mx-auto mb-10 reveal-up" style={{transitionDelay: '200ms'}}>
                U srcu Istre, 15km od Rapca. Doživite povijest plemićkog imanja, vrhunsku gastronomiju i mir stoljetne borove šume.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal-up" style={{transitionDelay: '300ms'}}>
<a className="min-w-[180px] bg-stone-100 text-stone-900 px-8 py-4 hover:bg-olive-100 transition duration-300 text-xs tracking-widest uppercase font-medium" href="#gastronomy">
                    Istraži Ponudu
                </a>
</div>
</div>
<a className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-pulse hover:text-white transition-colors" href="#about">
<iconify-icon icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</a>
</header>

<section className="py-24 md:py-32 px-6 lg:px-12 bg-stone-50 border-b border-stone-200" id="about">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal-up order-2 lg:order-1">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-olive-600"></span>
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest">Povijest &amp; Baština</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 leading-tight tracking-tight">
                    Pineta – Prošlost <br/>i sadašnjost.
                </h2>
<div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
<p>
                        Velika seoska kuća, nekoć vlasništvo plemenite obitelji Lazzarini iz Labina, dominira ulaskom u malo selo Sveti Martin. Ime "Pineta" imanje je dobilo po gustoj crnogoričnoj šumi koja pruža hladovinu iza kuće.
                    </p>
<p>
                        Pozivamo Vas na povratak prirodi. Naše gospodarstvo nudi mirno utočište za uživanje u ekološki očuvanoj prirodi, daleko od gradske vreve, a opet blizu mora.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-stone-200 pt-8">
<div>
<span className="block text-4xl font-serif text-stone-900 mb-1">15<span className="text-sm text-stone-400 ml-1">km</span></span>
<span className="text-xs uppercase tracking-widest text-stone-500">Udaljenost od Rapca</span>
</div>
<div>
<span className="block text-4xl font-serif text-stone-900 mb-1">1936</span>
<span className="text-xs uppercase tracking-widest text-stone-500">Godina fotografije baruna</span>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 reveal-up h-[600px] w-full" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 w-3/4 h-5/6 overflow-hidden rounded-sm">
<div className="img-placeholder w-full h-full bg-stone-200">
<iconify-icon className="opacity-30 mb-2" icon="solar:gallery-linear" width="40"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest opacity-50">Stari Dvorac / Dvorište</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 overflow-hidden border-8 border-stone-50 rounded-sm shadow-2xl">
<div className="img-placeholder w-full h-full bg-stone-300">
<iconify-icon className="opacity-30 mb-2" icon="solar:history-linear" width="32"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest opacity-50">Povijesna Fotografija</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="gastronomy">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div>
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest mb-3 block">Gastronomija</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Gurmanski doživljaj</h2>
</div>
<div className="text-right mt-6 md:mt-0">
<p className="text-stone-900 font-medium text-sm mb-1">Radno vrijeme kuhinje</p>
<p className="text-stone-500 font-light text-sm">Svaki dan: 17:00 – 22:00h</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-5 reveal-up">
<h3 className="font-serif text-2xl text-stone-800 mb-4">Tradicionalna Istarska kuhinja</h3>
<p className="text-stone-500 font-light leading-relaxed mb-8">
                        Pripremamo isključivo tradicionalna jela, spravljena od poljskih plodova s vlastitog, obiteljskog dobra. Restoran Pineta Vam stoji na usluzi cijele godine.
                    </p>
<div className="bg-stone-50 p-6 border border-stone-100 mb-8">
<div className="flex gap-4 items-start">
<iconify-icon className="text-olive-600 mt-1" icon="solar:chef-hat-minimalistic-linear" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-stone-900 text-sm mb-2">Chef Florian</h4>
<p className="text-xs text-stone-500 leading-relaxed">
                                    Iskusan kuhar koji posebnu pažnju poklanja pravim istarskim specijalitetima, od ručno rađene tjestenine do mesa pod pekom.
                                </p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-stone-900 border-b border-stone-200 hover:border-olive-600 pb-1 transition-all" href="#contact">
                        Rezerviraj Stol
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="md:col-span-7 grid grid-cols-2 gap-4 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="space-y-4 mt-12">
<div className="aspect-[3/4] w-full rounded-sm overflow-hidden group">
<div className="img-placeholder w-full h-full">
<iconify-icon className="opacity-30 mb-2" icon="solar:wine-trash-linear" width="32"></iconify-icon>
<span className="text-[10px] uppercase opacity-50">Vino Pineta</span>
</div>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] w-full rounded-sm overflow-hidden group">
<div className="img-placeholder w-full h-full">
<iconify-icon className="opacity-30 mb-2" icon="solar:bone-linear" width="32"></iconify-icon>
<span className="text-[10px] uppercase opacity-50">Istarski Pršut</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-y border-stone-200" id="accommodation">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 reveal-up">
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest mb-3 block">Smještaj</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight mb-4">Udobnost Barunskog dvorca</h2>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-olive-600" icon="solar:medal-star-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Domus Bonus Certifikat</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 group hover:shadow-lg transition-all duration-300 reveal-up">
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-olive-600 transition-colors">
<iconify-icon icon="solar:home-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">AP4 / AP6</span>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Premium Apartman</h3>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Za 4 osobe</p>
<ul className="text-sm text-stone-500 font-light space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Prostrani dnevni boravak</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Pogled na park</li>
</ul>
<a className="w-full block text-center py-3 border border-stone-200 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors" href="#contact">Upit za rezervaciju</a>
</div>

<div className="bg-white p-8 group hover:shadow-lg transition-all duration-300 reveal-up" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-olive-600 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">AP2</span>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Obiteljski Apartman</h3>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Za 4 osobe</p>
<ul className="text-sm text-stone-500 font-light space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Dvije spavaće sobe</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Idealno za obitelji</li>
</ul>
<a className="w-full block text-center py-3 border border-stone-200 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors" href="#contact">Upit za rezervaciju</a>
</div>

<div className="bg-white p-8 group hover:shadow-lg transition-all duration-300 reveal-up" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-start mb-6">
<div className="p-2 bg-stone-50 rounded-full text-stone-400 group-hover:text-olive-600 transition-colors">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-mono text-stone-400">AP3 / AP5</span>
</div>
<h3 className="font-serif text-xl text-stone-900 mb-2">Studio Apartman</h3>
<p className="text-stone-500 text-xs uppercase tracking-widest mb-4">Za 2 osobe</p>
<ul className="text-sm text-stone-500 font-light space-y-2 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Intimna atmosfera</li>
<li className="flex items-center gap-2"><iconify-icon className="text-stone-300" icon="solar:check-circle-linear"></iconify-icon>Čajna kuhinja</li>
</ul>
<a className="w-full block text-center py-3 border border-stone-200 text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors" href="#contact">Upit za rezervaciju</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative" id="relax">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-olive-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="reveal-up">
<span className="text-olive-500 font-medium text-xs uppercase tracking-widest mb-4 block">Relax &amp; Meeting</span>
<h2 className="font-serif text-4xl md:text-6xl text-white mb-8 tracking-tight">Odmor u skladu s prirodom.</h2>
<div className="space-y-10">
<div className="flex gap-5">
<div className="w-12 h-12 flex-shrink-0 border border-stone-700 rounded-full flex items-center justify-center text-olive-400">
<iconify-icon icon="solar:swimming-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-serif mb-2">Slatkovodni Bazen</h4>
<p className="text-stone-400 font-light text-sm leading-relaxed">
                                    Moderan bazen okružen zelenilom, sa ležaljkama za ugodno sunčanje u privatnosti dvorca.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 flex-shrink-0 border border-stone-700 rounded-full flex items-center justify-center text-olive-400">
<iconify-icon icon="solar:wineglass-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-serif mb-2">Vinski Podrum &amp; Cesta</h4>
<p className="text-stone-400 font-light text-sm leading-relaxed">
                                    Vino Pineta je uvršteno u Vinske ceste Istre. Posjetite našu salu za degustaciju i probajte Malvaziju vlastite proizvodnje.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 flex-shrink-0 border border-stone-700 rounded-full flex items-center justify-center text-olive-400">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-serif mb-2">Aktivni Odmor</h4>
<p className="text-stone-400 font-light text-sm leading-relaxed">
                                    Biciklizam, jahanje konja na imanju ili pješačenje kroz netaknutu prirodu okolice Svetog Martina.
                                </p>
</div>
</div>
</div>
</div>
<div className="reveal-up relative">
<div className="aspect-square bg-stone-800 p-4 rounded-sm border border-stone-700/50">
<div className="img-placeholder bg-stone-800 text-stone-600 border border-stone-700 w-full h-full">
<iconify-icon className="opacity-40 mb-3" icon="solar:gallery-wide-linear" width="48"></iconify-icon>
<span className="text-xs uppercase tracking-widest opacity-60">Galerija: Bazen i Priroda</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-24 pb-12 px-6 lg:px-12" id="contact">
<div className="max-w-[1200px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="reveal-up">
<span className="text-olive-600 font-medium text-xs uppercase tracking-widest mb-4 block">Kontakt</span>
<h2 className="font-serif text-5xl text-stone-900 mb-8 tracking-tight">Posjetite nas.</h2>
<p className="text-stone-600 font-light mb-12 text-lg">
                        Rezervirajte smještaj ili stol u restoranu.
                    </p>
<div className="grid gap-8">
<a className="flex items-start gap-6 group" href="tel:+38552654045">
<div className="mt-1 text-olive-600 group-hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Telefon</span>
<span className="font-serif text-2xl text-stone-900 group-hover:text-olive-600 transition-colors">+385 (0)52 654 045</span>
</div>
</a>
<a className="flex items-start gap-6 group" href="mailto:agroturizam.pineta@gmail.com">
<div className="mt-1 text-olive-600 group-hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Email</span>
<span className="font-serif text-2xl text-stone-900 group-hover:text-olive-600 transition-colors break-all">agroturizam.pineta@gmail.com</span>
</div>
</a>
<div className="flex items-start gap-6">
<div className="mt-1 text-olive-600">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-stone-400 mb-1">Lokacija</span>
<span className="font-serif text-xl text-stone-900 block">Sveti Martin 32/B</span>
<span className="text-stone-500 font-light text-sm">52231 Nedešćina, Istra (45°07'40.9"N 14°03'01.2"E)</span>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-12 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.03)] border border-stone-100 reveal-up" style={{transitionDelay: '200ms'}}>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Ime</label>
<input className="w-full bg-stone-50 border-b border-stone-200 py-2 focus:outline-none focus:border-olive-600 transition-colors text-stone-800" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Prezime</label>
<input className="w-full bg-stone-50 border-b border-stone-200 py-2 focus:outline-none focus:border-olive-600 transition-colors text-stone-800" type="text"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Email</label>
<input className="w-full bg-stone-50 border-b border-stone-200 py-2 focus:outline-none focus:border-olive-600 transition-colors text-stone-800" type="email"/>
</div>
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-2">Poruka</label>
<textarea className="w-full bg-stone-50 border-b border-stone-200 py-2 focus:outline-none focus:border-olive-600 transition-colors text-stone-800 resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-stone-900 text-white py-4 mt-4 uppercase tracking-widest text-[10px] font-bold hover:bg-olive-600 transition-all duration-300" type="button">
                            Pošalji Upit
                        </button>
</form>
</div>
</div>

<div className="mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-6 text-[10px] uppercase tracking-widest text-stone-500">
<span className="text-stone-900 font-serif text-lg capitalize tracking-normal mr-4">Kaštel Pineta</span>
<a className="hover:text-olive-600 transition-colors" href="http://www.istra.hr" target="_blank">Istra.hr</a>
<a className="hover:text-olive-600 transition-colors" href="http://www.istria-gourmet.com" target="_blank">Istra Gourmet</a>
<a className="hover:text-olive-600 transition-colors" href="#" target="_blank">Vinistra</a>
</div>
<div className="text-[10px] uppercase tracking-widest text-stone-400">
                    © 2024 Pineta Radićanin d.o.o.
                </div>
</div>
</div>
</footer>



    </>
  );
}
