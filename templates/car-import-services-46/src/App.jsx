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



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden', !isMenuOpen);
            mobileMenu.classList.toggle('flex', isMenuOpen);
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar background on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-zinc-950/95');
            } else {
                nav.classList.remove('bg-zinc-950/95');
            }
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-2xl font-bold tracking-tighter" href="#">
<span className="text-white">JM</span><span className="text-amber-500">Cars</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#oferta">Oferta</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#dlaczego">Dlaczego my</a>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/25" href="tel:+48123456789">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Zadzwoń
            </a>
<button className="md:hidden text-white" id="mobileMenuBtn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8" id="mobileMenu">
<a className="text-2xl text-zinc-300 hover:text-white transition-colors" href="#oferta">Oferta</a>
<a className="text-2xl text-zinc-300 hover:text-white transition-colors" href="#uslugi">Usługi</a>
<a className="text-2xl text-zinc-300 hover:text-white transition-colors" href="#dlaczego">Dlaczego my</a>
<a className="text-2xl text-zinc-300 hover:text-white transition-colors" href="#kontakt">Kontakt</a>
</div>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#09090b_70%)]"></div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
<span className="text-sm text-zinc-400">Ponad 500+ zadowolonych klientów</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-none">
                Twoje wymarzone<br/>
<span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">auto czeka</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Import samochodów z Niemiec, Holandii i Belgii. Profesjonalna obsługa, 
                pełna dokumentacja i gwarancja bezpieczeństwa transakcji.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="group hover:from-amber-400 hover:to-orange-400 transition-all hover:shadow-2xl hover:shadow-amber-500/30 flex items-center justify-center gap-2 text-base font-semibold text-zinc-950 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full px-8 py-4" href="#oferta">Łapudraki</a>
<a className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-8 py-4 rounded-full font-medium text-base transition-all flex items-center justify-center gap-2" href="#kontakt">
<svg aria-hidden="true" data-icon="lucide:message-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Zapytaj o auto
                </a>
</div>

<div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-10 border-t border-white/5">
<div>
<div className="text-3xl md:text-4xl font-bold tracking-tight text-white">15+</div>
<div className="text-sm text-zinc-500 mt-1">Lat doświadczenia</div>
</div>
<div className="">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-white">500+</div>
<div className="text-sm text-zinc-500 mt-1">Sprzedanych aut</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-bold tracking-tight text-white">100%</div>
<div className="text-sm text-zinc-500 mt-1">Zadowolonych klientów</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
<span className="text-xs text-zinc-500">Przewiń</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="py-32 relative" id="uslugi">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Co oferujemy</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Kompleksowa obsługa</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:search" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Import na zamówienie</h3>
<p className="text-zinc-400 text-base leading-relaxed">Znajdziemy dla Ciebie wymarzone auto w Niemczech, Holandii lub Belgii według Twoich wymagań.</p>
</div>

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:file-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Sprawdzenie historii</h3>
<p className="text-zinc-400 text-base leading-relaxed">Pełna weryfikacja historii pojazdu, sprawdzenie przebiegu i stanu technicznego przed zakupem.</p>
</div>

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:truck" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Transport door-to-door</h3>
<p className="text-zinc-400 text-base leading-relaxed">Organizujemy bezpieczny transport auta bezpośrednio pod Twój adres w całej Polsce.</p>
</div>

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:clipboard-list" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 7h4m-4 5h4m-8-5h.01M8 16h.01"></path></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Formalności</h3>
<p className="text-zinc-400 text-base leading-relaxed">Zajmujemy się wszystkimi formalnościami - od tłumaczeń dokumentów po rejestrację pojazdu.</p>
</div>

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:credit-card" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Finansowanie</h3>
<p className="text-zinc-400 text-base leading-relaxed">Pomożemy w uzyskaniu atrakcyjnego finansowania - leasing lub kredyt samochodowy.</p>
</div>

<div className="group bg-zinc-900/50 hover:bg-zinc-900 border border-white/5 hover:border-amber-500/20 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">Gwarancja</h3>
<p className="text-zinc-400 text-base leading-relaxed">Oferujemy gwarancję na sprzedawane pojazdy oraz pełne wsparcie posprzedażowe.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30 relative" id="oferta">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.05)_0%,transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
<div>
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Aktualna oferta</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">Wybrane pojazdy</h2>
</div>
<a className="mt-6 md:mt-0 text-amber-500 hover:text-amber-400 font-medium flex items-center gap-2 transition-colors group" href="#">
                    Zobacz wszystkie
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:car" data-width="64" height="64" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</div>
<div className="absolute top-4 left-4 bg-emerald-500 text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded-full">Dostępny</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 mb-2">2021 • 45 000 km • Benzyna</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">BMW Seria 3 320i M Sport</h3>
<p className="text-zinc-400 text-sm mb-4">Pełna historia serwisowa, bezwypadkowy, import z Niemiec</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-2xl font-bold tracking-tight text-amber-500">149 900 zł</span>
<button className="bg-white/5 hover:bg-amber-500 hover:text-zinc-950 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                                Szczegóły
                                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:car" data-width="64" height="64" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</div>
<div className="absolute top-4 left-4 bg-emerald-500 text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded-full">Dostępny</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 mb-2">2020 • 62 000 km • Diesel</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Mercedes-Benz C220d AMG</h3>
<p className="text-zinc-400 text-sm mb-4">Panorama, skóra, LED, kamera 360°, import Holandia</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-2xl font-bold tracking-tight text-amber-500">169 900 zł</span>
<button className="bg-white/5 hover:bg-amber-500 hover:text-zinc-950 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                                Szczegóły
                                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-amber-500/20 transition-all duration-300">
<div className="aspect-video bg-zinc-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-800 flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:car" data-width="64" height="64" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></g></svg>
</div>
<div className="absolute top-4 left-4 bg-amber-500 text-zinc-950 text-xs font-semibold px-3 py-1.5 rounded-full">Rezerwacja</div>
</div>
<div className="p-6">
<div className="text-xs text-zinc-500 mb-2">2022 • 28 000 km • Hybryda</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Audi A6 50 TFSI e Quattro</h3>
<p className="text-zinc-400 text-sm mb-4">S-Line, Matrix LED, wirtualne zegary, Niemcy</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-2xl font-bold tracking-tight text-amber-500">229 900 zł</span>
<button className="bg-white/5 hover:bg-amber-500 hover:text-zinc-950 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                                Szczegóły
                                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="dlaczego">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Dlaczego JM Cars</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-8">Zaufaj profesjonalistom</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Sprawdzone źródła</h4>
<p className="text-zinc-400">Współpracujemy tylko z zaufanymi dealerami w Europie Zachodniej.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Transparentność</h4>
<p className="text-zinc-400">Pełna dokumentacja i historia każdego pojazdu bez ukrytych kosztów.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Indywidualne podejście</h4>
<p className="text-zinc-400">Każdego klienta traktujemy indywidualnie, dopasowując ofertę do potrzeb.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-semibold text-lg mb-1">Wsparcie posprzedażowe</h4>
<p className="text-zinc-400">Nie zostawiamy klienta po zakupie - jesteśmy do dyspozycji.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
<div className="relative bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-3xl p-10">
<svg aria-hidden="true" data-icon="lucide:quote" data-width="48" height="48" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xl text-zinc-300 leading-relaxed my-6">
                            "Profesjonalna obsługa od A do Z. Pan Jarek znalazł dokładnie takie auto, jakiego szukałem. Cały proces trwał zaledwie 2 tygodnie. Polecam każdemu!"
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-zinc-950 font-bold">MK</div>
<div>
<div className="font-semibold">Marek Kowalski</div>
<div className="text-sm text-zinc-500">BMW 530d, 2022</div>
</div>
</div>
<div className="flex gap-1 mt-6">
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="18" height="18" role="img" style={{strokeWidth: '1.5', fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/30">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Jak działamy</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">4 proste kroki</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-zinc-950">1</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Kontakt</h3>
<p className="text-zinc-400 text-sm">Powiedz nam, jakiego auta szukasz i jaki masz budżet</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-zinc-950">2</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Wyszukiwanie</h3>
<p className="text-zinc-400 text-sm">Znajdujemy idealne auto i weryfikujemy jego historię</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-zinc-950">3</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Zakup i transport</h3>
<p className="text-zinc-400 text-sm">Kupujemy auto i organizujemy bezpieczny transport</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-zinc-950">4</div>
<h3 className="text-lg font-semibold tracking-tight mb-2">Odbiór</h3>
<p className="text-zinc-400 text-sm">Załatwiamy formalności i przekazujemy Ci kluczyki</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="kontakt">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(245,158,11,0.08)_0%,transparent_60%)]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Kontakt</span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-6">Porozmawiajmy o Twoim wymarzonym aucie</h2>
<p className="text-zinc-400 text-lg mb-10">Zadzwoń lub napisz - odpowiemy na wszystkie pytania i pomożemy znaleźć idealne auto.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:+48123456789">
<div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-2xl flex items-center justify-center transition-colors">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm text-zinc-500">Telefon</div>
<div className="text-lg font-semibold group-hover:text-amber-500 transition-colors">+48 123 456 789</div>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:kontakt@jm-cars.pl">
<div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500/20 rounded-2xl flex items-center justify-center transition-colors">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<div className="text-sm text-zinc-500">Email</div>
<div className="text-lg font-semibold group-hover:text-amber-500 transition-colors">kontakt@jm-cars.pl</div>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<div className="text-sm text-zinc-500">Adres</div>
<div className="text-lg font-semibold">ul. Motorowa 15, 00-000 Miasto</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<div className="text-sm text-zinc-500">Godziny otwarcia</div>
<div className="text-lg font-semibold">Pon-Pt: 9:00-18:00, Sob: 10:00-14:00</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 lg:p-10">
<h3 className="text-2xl font-semibold tracking-tight mb-6">Wyślij zapytanie</h3>
<form className="space-y-5">
<div>
<label className="block text-sm text-zinc-400 mb-2">Imię i nazwisko</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="Jan Kowalski" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm text-zinc-400 mb-2">Telefon</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="+48 123 456 789" type="tel"/>
</div>
<div>
<label className="block text-sm text-zinc-400 mb-2">Email</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="jan@email.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm text-zinc-400 mb-2">Jakiego auta szukasz?</label>
<input className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" placeholder="np. BMW Seria 5, 2020+, diesel" type="text"/>
</div>
<div>
<label className="block text-sm text-zinc-400 mb-2">Wiadomość</label>
<textarea className="w-full bg-zinc-800/50 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none" placeholder="Opisz swoje oczekiwania..." rows="4"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-zinc-950 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2" type="submit">
                            Wyślij zapytanie
                            <svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-2xl font-bold tracking-tighter" href="#">
<span className="text-white">JM</span><span className="text-amber-500">Cars</span>
</a>
<div className="flex items-center gap-6">
<a className="w-10 h-10 bg-white/5 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 bg-white/5 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 bg-white/5 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all group" href="#">
<svg aria-hidden="true" data-icon="lucide:youtube" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
<div className="text-sm text-zinc-500">
                    © 2024 JM Cars. Wszelkie prawa zastrzeżone.
                </div>
</div>
</div>
</footer>


    </>
  );
}
