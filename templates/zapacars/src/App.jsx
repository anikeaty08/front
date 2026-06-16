import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
gold: '#C5A059', // Metallic Gold from logo
dark: '#0a0a0a',
panel: '#121212',
accent: '#E30613' // Subtle red accent mentioned in prompt
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<a className="flex items-center group" href="#">
<img alt="Zapa Cars Logo" className="md:h-16 group-hover:brightness-125 transition-all w-auto h-12 object-contain brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6712608e-ca99-49cd-b43f-5d1f42854452_320w.webp"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal tracking-wide text-white">
<a className="hover:text-brand-gold transition-colors" href="#home">Start</a>
<a className="hover:text-brand-gold transition-colors" href="#oferta">Oferta</a>
<a className="hover:text-brand-gold transition-colors" href="#realizacje">Realizacje</a>
<a className="hover:text-brand-gold transition-colors" href="#o-nas">Zespół</a>
<a className="hover:text-brand-gold transition-colors" href="#cennik">Cennik</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-black bg-brand-gold hover:bg-white transition-colors uppercase tracking-wider" href="#kontakt">
            Umów Wizytę
        </a>
<button className="lg:hidden text-white">
<svg className="lucide lucide-menu w-8 h-8" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Luxury Sports Car Garage" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-transparent to-brand-dark/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand-gold/30 rounded-full bg-brand-gold/10 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs font-medium text-brand-gold uppercase tracking-widest">Premium Automotive Services</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight leading-[0.9] mb-6">
                    PRZYWRACAMY <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">DUSZĘ MASZYNOM</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-xl leading-relaxed">
                    Kompleksowa renowacja klasyków, zaawansowana mechanika i import aut marzeń. ZapaCars to pasja, która zmienia metal w sztukę.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-black bg-brand-gold hover:bg-white transition-all uppercase tracking-wide" href="#oferta">
                        Poznaj Ofertę
                        <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/20 hover:bg-white/5 transition-all uppercase tracking-wide backdrop-blur-sm" href="#realizacje">
                        Zobacz Projekty
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-brand-dark relative" id="oferta">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">NASZE USŁUGI</h2>
<p className="text-neutral-400 max-w-md">Specjalizujemy się w obsłudze pojazdów premium oraz projektach specjalnych.</p>
</div>
<div className="hidden md:block h-px bg-white/10 flex-grow ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-wrench w-16 h-16 text-white" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-settings text-brand-gold w-6 h-6" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Mechanika i Serwis</h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
                        Kompleksowy serwis bieżący, naprawy główne silników i skrzyń biegów. Diagnostyka komputerowa najnowszej generacji.
                    </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Serwis olejowy</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Układy hamulcowe</li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-gem text-brand-gold w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Renowacja i Tuning</h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
                        Przywracamy blask klasykom (Youngtimer/Oldtimer) i modyfikujemy auta współczesne. Detailing, tapicerstwo, odbudowa.
                    </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Blacharstwo i lakiernictwo</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Stage 1/2/3 Tuning</li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-globe text-brand-gold w-6 h-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Import Pojazdów</h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
                        Sprowadzamy pewne auta z USA, Kanady i Europy. Pełna weryfikacja historii, licytacja, transport i procedury celne.
                    </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Raporty Carfax/AutoDNA</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Dostawa pod dom</li>
</ul>
</article>

<article className="group relative p-8 bg-brand-panel border border-white/5 hover:border-brand-gold/50 transition-all duration-300">
<div className="w-12 h-12 bg-brand-gold/10 flex items-center justify-center rounded mb-6 group-hover:bg-brand-gold/20 transition-colors">
<svg className="lucide lucide-crown text-brand-gold w-6 h-6" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Projekty Indywidualne</h3>
<p className="text-base text-neutral-500 mb-6 group-hover:text-neutral-400 transition-colors">
                        Budowa aut od podstaw, swapy silników, modyfikacje zawieszenia. Realizujemy wizje, których inni się boją.
                    </p>
<ul className="text-sm text-neutral-400 space-y-2">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Custom fabrication</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-brand-gold rounded-full"></div>Air Ride &amp; Stance</li>
</ul>
</article>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-white/5" id="o-nas">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold/50"></div>
<img alt="Team ZapaCars working" className="relative z-10 w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl shadow-black/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold/50"></div>
</div>
<div className="">
<h4 className="text-brand-gold uppercase tracking-widest font-medium mb-2">Nasza Historia</h4>
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">OD JEDNEJ TOYOTY SUPRY...</h2>
<div className="space-y-6 text-neutral-400">
<p className="">
                            Wszystko zaczęło się od pasji i jednego garażu, w którym  podjęli się niemożliwego – przywrócenia blasku legendarnej Toyocie Suprze, którą inni spisali na straty. Ten projekt zdefiniował nasze DNA.
                        </p>
<p className="">
                            Dziś ZapaCars to nie tylko warsztat. To miejsce, gdzie inżynierska precyzja spotyka się z artystycznym podejściem do motoryzacji. Nie naprawiamy samochodów „na sztukę”. Budujemy relacje i maszyny, które przetrwają próbę czasu.
                        </p>
<p className="">
                            Stawiamy na transparentność, najwyższej jakości części i technologie lakiernicze klasy premium. Każde auto traktujemy jak własne.
                        </p>
</div>
<div className="mt-10 flex gap-8 border-t border-white/10 pt-8">
<div className="">
<span className="block text-3xl font-display text-white font-semibold">10+</span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">Lat doświadczenia</span>
</div>
<div className="">
<span className="block text-3xl font-display text-white font-semibold">500+</span>
<span className="text-sm text-neutral-500 uppercase tracking-wide">Uratowanych klasyków</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark" id="realizacje">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">GALERIA REALIZACJI</h2>
<a className="hidden md:inline-flex items-center text-brand-gold hover:text-white transition-colors mt-4 md:mt-0" href="#">
                Zobacz pełne portfolio <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Renowacja Mustang" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Renowacja</p>
<h3 className="text-white text-2xl font-display font-medium">Ford Mustang '67</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Porsche Lakiernictwo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Lakiernictwo</p>
<h3 className="text-white text-2xl font-display font-medium">Porsche 911 Turbo</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Tuning Chevrolet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Tuning</p>
<h3 className="text-white text-2xl font-display font-medium">Chevrolet Camaro ZL1</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Serwis BMW" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Serwis Bieżący</p>
<h3 className="text-white text-2xl font-display font-medium">BMW M4 Competition</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Import USA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Import USA</p>
<h3 className="text-white text-2xl font-display font-medium">Dodge Challenger Hellcat</h3>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Detailing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
<p className="text-brand-gold text-sm uppercase tracking-widest mb-1">Detailing</p>
<h3 className="text-white text-2xl font-display font-medium">Ceramika &amp; PPF</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-panel" id="cennik">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">ORIENTACYJNY CENNIK</h2>
<p className="text-neutral-400 mb-8">Każdy projekt wyceniamy indywidualnie po oględzinach pojazdu. Poniżej przedstawiamy stawki bazowe dla usług serwisowych.</p>
<div className="space-y-4">
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Diagnostyka komputerowa</span>
<span className="text-brand-gold font-medium">od 150 PLN</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Serwis olejowy (robocizna)</span>
<span className="text-brand-gold font-medium">od 200 PLN</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Przegląd przedzakupowy</span>
<span className="text-brand-gold font-medium">od 400 PLN</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Import auta (prowizja)</span>
<span className="text-brand-gold font-medium">od 2500 PLN</span>
</div>
<div className="flex justify-between items-center p-4 bg-white/5 border border-white/5 rounded">
<span className="text-white">Renowacja / Projekty</span>
<span className="text-brand-gold font-medium">Wycena indywidualna</span>
</div>
</div>
<div className="mt-8 p-6 bg-brand-gold/10 border border-brand-gold/20 rounded">
<p className="text-sm text-brand-gold"><svg className="lucide lucide-info inline w-4 h-4 mr-1" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Wystawiamy faktury VAT. Gwarancja na usługi lakiernicze 24 miesiące.</p>
</div>
</div>

<div className="">
<h2 className="font-display text-4xl font-semibold text-white tracking-tight mb-8">NAJCZĘSTSZE PYTANIA (FAQ)</h2>
<div className="space-y-4">
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                            Czy pomagacie w formalnościach przy imporcie z USA?
                            <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                            Tak, ZapaCars oferuje kompleksową obsługę "pod klucz". Zajmujemy się licytacją, transportem lądowym i morskim, opłatami celnymi (cło, VAT, akcyza) oraz tłumaczeniami dokumentów. Dostarczamy auto gotowe do rejestracji.
                        </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                            Ile trwa pełna renowacja klasyka?
                            <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                            Czas renowacji zależy od stanu wyjściowego pojazdu. Zazwyczaj proces ten trwa od 3 do 12 miesięcy. Działamy etapowo: demontaż, blacharka, lakierowanie, mechanika, tapicerka i finalny montaż. Na każdym etapie otrzymujesz dokumentację fotograficzną.
                        </p>
</details>
<details className="group p-6 bg-neutral-900 border-l-2 border-transparent open:border-brand-gold cursor-pointer transition-colors hover:bg-neutral-800">
<summary className="flex justify-between items-center font-medium text-white list-none">
                            Czy serwisujecie tylko auta sportowe?
                            <span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<p className="text-neutral-400 mt-4 text-base">
                            Specjalizujemy się w autach premium i sportowych (Porsche, BMW M, Audi RS, AMG, Muscle Cars), ale obsługujemy również standardowe pojazdy osobowe, zapewniając ten sam wysoki standard usług mechanicznych.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="kontakt">
<div className="bg-gradient-to-l from-brand-gold/5 to-transparent w-1/3 h-full absolute top-0 right-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">SKONTAKTUJ SIĘ</h2>
<p className="text-neutral-400 mb-10 text-lg">Masz pytania dotyczące naprawy lub importu? Wypełnij formularz, a Arek lub Maciej wrócą do Ciebie z konkretną odpowiedzią.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Imię i nazwisko" type="text"/>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Telefon" type="tel"/>
</div>
<input className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Adres e-mail" type="email"/>
<select className="w-full bg-neutral-900 border border-white/10 p-4 text-white focus:border-brand-gold focus:outline-none transition-colors rounded-sm appearance-none">
<option className="text-neutral-500" disabled="" selected="" value="">Temat rozmowy</option>
<option value="serwis">Serwis / Mechanika</option>
<option value="renowacja">Renowacja / Tuning</option>
<option value="import">Import Auta</option>
<option value="inne">Inne</option>
</select>
<textarea className="w-full bg-neutral-900 border border-white/10 p-4 text-white placeholder-neutral-500 focus:border-brand-gold focus:outline-none transition-colors rounded-sm" placeholder="Opisz swój samochód lub problem..." rows="4"></textarea>
<button className="w-full md:w-auto px-10 py-4 bg-brand-gold hover:bg-white text-black font-medium uppercase tracking-widest transition-colors flex items-center justify-center gap-2" type="submit">
                            Wyślij wiadomość <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
<div className="flex flex-col justify-between">
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg className="lucide lucide-map-pin text-brand-gold w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Lokalizacja</h3>
<p className="text-neutral-400">ul. Przykładowa 12300-000 Warszawa, Polska</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg className="lucide lucide-phone text-brand-gold w-6 h-6" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<h3 className="text-white font-medium mb-1">Telefon</h3>
<p className="text-neutral-400 hover:text-white transition-colors cursor-pointer">+48 123 456 789</p>
<p className="text-neutral-400 hover:text-white transition-colors cursor-pointer">+48 987 654 321</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-brand-panel border border-white/5 rounded">
<svg className="lucide lucide-clock text-brand-gold w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h3 className="text-white font-medium mb-1">Godziny otwarcia</h3>
<p className="text-neutral-400">Pn - Pt: 9:00 - 18:00</p>
<p className="text-neutral-400">Sob: Po umówieniu</p>
</div>
</div>
</div>

<div className="mt-8 w-full h-64 bg-neutral-900 border border-white/5 relative flex items-center justify-center group overflow-hidden">
<img alt="Map Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<a className="relative z-10 px-6 py-2 bg-white text-black font-medium text-sm rounded shadow-lg hover:bg-brand-gold transition-colors" href="#">
                            Otwórz w Google Maps
                         </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-brand-dark border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-wrench text-brand-gold w-5 h-5" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="font-display font-bold text-xl text-white tracking-tight">ZAPA<span className="text-brand-gold">CARS</span></span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Profesjonalny serwis samochodowy, lakiernictwo i import aut z USA. Twoje auto w rękach pasjonatów.
                    </p>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Usługi</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-brand-gold transition-colors" href="#">Mechanika pojazdowa</a></li>
<li className=""><a className="hover:text-brand-gold transition-colors" href="#">Blacharstwo i lakiernictwo</a></li>
</ul>
</div>
<div className="">
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Firma</h5>
<ul className="space-y-2 text-sm text-neutral-500">
<li className=""><a className="hover:text-brand-gold transition-colors" href="#o-nas">O nas</a></li>
<li className=""><a className="hover:text-brand-gold transition-colors" href="#realizacje">Realizacje</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4 uppercase tracking-wider text-sm">Social Media</h5>
<div className="flex gap-4">
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-brand-gold transition-all" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs">© 2024 ZapaCars. Wszelkie prawa zastrzeżone.</p>
<div className="text-neutral-700 text-xs flex gap-4">
<span>Renowacja Samochodów</span>
<span>•</span>
<span>Mechanik Warszawa</span>
<span>•</span>
<span>Import USA</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
