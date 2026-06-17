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



        // Animations
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('is-visible');
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.slide-up').forEach((el) => observer.observe(el));

            // Cookie Logic Implementation
            const cookieBanner = document.getElementById('cookie-banner');
            const acceptBtn = document.getElementById('accept-cookies');
            const rejectBtn = document.getElementById('reject-cookies');

            // Pomocná funkcia na spustenie analytických/sledovacích skriptov
            function enableAnalytics() {
                console.log("Cookies prijaté: Analytika a sledovanie sú AKTÍVNE.");
                // TU VLOŽTE KÓD PRE GOOGLE ANALYTICS, FACEBOOK PIXEL ATĎ.
            }

            // Pomocná funkcia na blokovanie/vymazanie nesúhlasených skriptov
            function disableAnalytics() {
                console.log("Cookies odmietnuté: Bežia len nevyhnutné funkcie.");
            }

            // Funkcia na skrytie baneru
            const hideBanner = () => {
                cookieBanner.classList.remove('translate-y-0', 'opacity-100');
                cookieBanner.classList.add('translate-y-[150%]', 'opacity-0', 'pointer-events-none');
            };

            // Funkcia na uloženie volby
            function handleConsent(isAccepted) {
                const consentSettings = {
                    necessary: true,
                    analytics: isAccepted,
                    marketing: isAccepted,
                    timestamp: new Date().toISOString()
                };
                
                localStorage.setItem('cookie-consent-settings', JSON.stringify(consentSettings));
                hideBanner();

                if (isAccepted) {
                    enableAnalytics();
                } else {
                    disableAnalytics();
                }
            }

            // Kontrola existujúceho súhlasu pri načítaní
            const existingConsent = localStorage.getItem('cookie-consent-settings');
            
            if (!existingConsent) {
                // Zobraz banner ak ešte nebolo vybrané
                setTimeout(() => {
                    cookieBanner.classList.remove('translate-y-[150%]', 'opacity-0', 'pointer-events-none');
                    cookieBanner.classList.add('translate-y-0', 'opacity-100');
                }, 2000);
            } else {
                // Aplikuj predošlé nastavenie
                try {
                    const parsedConsent = JSON.parse(existingConsent);
                    if (parsedConsent.analytics === true) {
                        enableAnalytics();
                    } else {
                        disableAnalytics();
                    }
                } catch(e) {
                    console.error("Chyba pri čítaní nastavení cookies");
                }
            }

            // Event Listeners
            if(acceptBtn) acceptBtn.addEventListener('click', () => handleConsent(true));
            if(rejectBtn) rejectBtn.addEventListener('click', () => handleConsent(false));
        });

        // Simple Router & Smooth Scrolling
        function handleRouting() {
            const hash = window.location.hash;
            const pages = ['page-home', 'page-gdpr', 'page-insoles', 'page-models'];
            pages.forEach(p => document.getElementById(p).classList.add('hidden'));
            
            if (hash === '#gdpr') {
                document.getElementById('page-gdpr').classList.remove('hidden');
                window.scrollTo(0, 0);
            } else if (hash === '#insoles') {
                document.getElementById('page-insoles').classList.remove('hidden');
                window.scrollTo(0, 0);
            } else if (hash === '#models') {
                document.getElementById('page-models').classList.remove('hidden');
                window.scrollTo(0, 0);
            } else {
                document.getElementById('page-home').classList.remove('hidden');
                if (hash && hash !== '#home') {
                    setTimeout(() => {
                        const el = document.querySelector(hash);
                        if (el) {
                            const yOffset = el.getBoundingClientRect().top + window.scrollY - 80;
                            window.scrollTo({ top: yOffset, behavior: 'smooth' });
                        }
                    }, 50);
                } else {
                    window.scrollTo({ top: 0, behavior: hash === '#home' ? 'smooth' : 'instant' });
                }
            }
        }

        window.addEventListener('hashchange', handleRouting);
        window.addEventListener('load', handleRouting);

        // Mobile Menu
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
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
      

<nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group" href="/home" onclick="showPage('home')">
<img alt="INSOL3D Logo" className="w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/453d57b5-45b5-4870-89c6-6cec719fe315_800w.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="hover:text-cyan-600 transition-colors nav-link text-base font-normal text-slate-600" href="/insoles">3D ortopedické vložky</a>
<a className="hover:text-cyan-600 transition-colors nav-link text-base font-normal text-slate-600" href="#process">Technológia</a>
<a className="hover:text-cyan-600 transition-colors nav-link text-base font-normal text-slate-600" href="#benefits">Benefity</a>
<a className="hover:text-cyan-600 transition-colors nav-link text-base font-normal text-slate-600" href="#professionals">Pre Lekárov</a>
<a className="hover:bg-cyan-600 hover:-translate-y-0.5 transition-all hover:shadow-[0_8px_20px_-6px_rgba(34,211,238,0.4)] nav-link text-base font-normal text-white bg-cyan-500 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-sm" href="#contact">Kontaktujte nás</a>
</div>

<div className="md:hidden">
<button className="text-slate-600 hover:text-cyan-600 p-2 flex items-center justify-center focus:outline-none transition-colors" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white/90 backdrop-blur-xl border-b border-slate-100 absolute top-20 left-0 w-full shadow-2xl transition-all duration-300" id="mobile-menu">
<div className="flex flex-col px-6 py-6 space-y-6">
<a className="mobile-link text-lg font-normal text-slate-600 hover:text-cyan-600 tracking-tight" href="/insoles">3D ortopedické vložky</a>
<a className="mobile-link text-lg font-normal text-slate-600 hover:text-cyan-600 tracking-tight" href="#process">Technológia</a>
<a className="mobile-link text-lg font-normal text-slate-600 hover:text-cyan-600 tracking-tight" href="#benefits">Benefity</a>
<a className="mobile-link text-lg font-normal text-slate-600 hover:text-cyan-600 tracking-tight" href="#professionals">Pre Lekárov</a>
<a className="mobile-link text-lg font-normal text-cyan-600 tracking-tight" href="#contact">Kontaktujte nás</a>
</div>
</div>
</nav>

<div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100] transform transition-all duration-700 ease-out translate-y-[150%] opacity-0 pointer-events-none" id="cookie-banner">
<div className="bg-slate-900 rounded-3xl p-6 shadow-2xl shadow-black/50 border border-slate-800 backdrop-blur-md">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
<iconify-icon className="text-cyan-400" height="24" icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div className="space-y-1.5">
<h4 className="text-lg font-normal text-white tracking-tight">Používame cookies</h4>
<p className="text-base text-slate-400 font-light leading-relaxed">Naša stránka používa súbory cookies na zlepšenie vášho používateľského zážitku a analýzu návštevnosti.</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 hover:bg-cyan-400 transition-colors text-base font-normal text-slate-950 bg-cyan-500 rounded-full pt-3 pr-4 pb-3 pl-4" id="accept-cookies">Prijať všetko</button>
<button className="flex-1 bg-slate-800 text-slate-300 text-base font-light py-3 px-4 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors" id="reject-cookies">Odmietnuť</button>
</div>
</div>
</div>

<div className="block" id="page-home">

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-950 min-h-screen flex items-center" id="home">

<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute -top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-cyan-600/20 blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[100px] mix-blend-screen"></div>
<div className="bg-center opacity-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e745c5ca-b91c-4523-8992-8ef5fddc36af_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 relative">
<div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8 items-center text-center lg:text-left">

<div className="mobile-contents lg:block max-w-2xl mx-auto lg:mx-0 pt-10 lg:pt-0" onclick="window.location.href='/insoles'" role="button">
<div className="order-1 slide-up inline-flex gap-2 sm:gap-3 lg:mb-8 lg:mt-0 bg-cyan-500/10 border-cyan-500/20 border rounded-full mt-6 mb-6 py-1.5 px-3 sm:py-2 sm:px-4 backdrop-blur-sm items-center is-visible">
<span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
</span>
<span className="uppercase text-xs sm:text-sm md:text-base font-light text-cyan-300 tracking-widest">3D tlačené ortopedické vložky</span>
</div>
<h1 className="order-2 slide-up delay-100 lg:text-[5.5rem] leading-[1.05] text-5xl sm:text-6xl font-light text-white tracking-tighter mb-6 lg:mb-8 is-visible">
                            Budúcnosť <br className="hidden lg:block"/>
<span className="bg-clip-text font-normal text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">na mieru.</span>
</h1>
<p className="order-4 slide-up delay-200 leading-relaxed lg:mx-0 text-xl sm:text-2xl font-light text-slate-400 max-w-xl mx-auto mb-10 lg:mb-12 mt-6 lg:mt-0 is-visible">Spájame presnú 3D tlač s inovatívnymi materiálmi. Výsledkom sú 3D ortopedické vložky poskytujúce optimálnu oporu a prirodzený pohyb.</p>
<div className="order-5 slide-up delay-300 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start w-full px-4 lg:px-0 is-visible">
<a className="inline-flex justify-center items-center hover:bg-cyan-400 hover:scale-105 transition-all duration-300 text-xl font-light text-slate-950 bg-cyan-500 rounded-full pt-4 pr-10 pb-4 pl-10 shadow-[0_0_30px_rgba(34,211,238,0.2)]" href="/insoles">
                                Objavte 3D vložky
                            </a>
</div>
</div>

<div className="order-3 lg:order-none slide-up delay-400 relative h-[350px] sm:h-[400px] lg:h-[600px] w-full flex items-center justify-center my-2 lg:my-0 is-visible">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-[3rem] border border-white/5 transform rotate-3 scale-105 backdrop-blur-3xl"></div>
<div className="relative w-full h-full flex items-center justify-center float-anim">
<img alt="3D Insole Visualization" className="shadow-black/50 hover:mix-blend-normal transition-all duration-700 object-repeat bg-center opacity-80 mix-blend-luminosity w-full h-full object-cover border-white/10 border rounded-[2.5rem] shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ffcf1536-6022-4186-8961-b2b5e8cffb01_1600w.jpg"/>

<div className="absolute top-10 right-10 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce hidden lg:flex">
<span className="text-xs font-light tracking-widest uppercase text-slate-400">Scroll</span>
<iconify-icon className="text-cyan-400" height="16" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</header>

<section className="border-b bg-white border-slate-200 py-32 relative overflow-hidden">
<div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<p className="slide-up uppercase text-lg font-light text-slate-400 tracking-[0.2em] text-center mb-10 is-visible">Overené odborníkmi. Navrhnuté pre vás.</p>
<h2 className="slide-up delay-100 text-3xl md:text-5xl font-light text-slate-900 tracking-tighter text-center max-w-4xl mx-auto mb-20 leading-tight is-visible">
                    Vaša spokojnosť a zdravý krok sú našou prioritou. Odbornosť spojená s modernou technológiou.
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="slide-up delay-200 group overflow-hidden aspect-[4/3] flex flex-col text-slate-400 bg-slate-100 rounded-[2rem] relative items-center justify-center is-visible">
<img alt="Process" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff548bbc-b8af-4942-b4fd-51c635ebb5bf_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="slide-up delay-300 group overflow-hidden aspect-[4/3] flex flex-col text-slate-400 bg-slate-100 rounded-[2rem] relative items-center justify-center is-visible">
<img alt="Technology" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb44812c-6acd-43d7-a84b-3e074047ce71_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="slide-up delay-400 group overflow-hidden aspect-[4/3] flex flex-col text-slate-400 bg-slate-100 rounded-[2rem] relative items-center justify-center is-visible">
<img alt="Care" className="group-hover:scale-105 transition-transform duration-700 bg-center w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/deeeeb6a-97d5-4bc2-acaf-4fb4bca2c312_800w.png"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50 relative" id="process">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-24">
<h2 className="slide-up lg:text-5xl text-4xl font-normal text-slate-900 tracking-tighter mb-6 is-visible">Presnosť v každom milimetri</h2>
<p className="slide-up delay-100 text-2xl font-light text-slate-500 leading-relaxed is-visible">3D tlač nám umožňuje dosiahnuť maximálnu presnosť a detail. Digitálne navrhnuté riešenia presne kopírujú anatómiu vášho chodidla.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
<div className="hidden lg:block absolute top-16 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-200 to-transparent -z-10"></div>
<div className="slide-up delay-100 group relative bg-white p-10 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-slate-100 is-visible">
<div className="flex group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-300 group-hover:text-cyan-500 text-slate-400 bg-slate-50 w-16 h-16 rounded-2xl mb-8 items-center justify-center">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">1. Analýza</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Odborné vyšetrenie chodidiel a presné hodnotenie ich tvaru a biomechaniky.</p>
</div>
<div className="slide-up delay-200 group relative bg-white p-10 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-slate-100 is-visible">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-300 text-slate-400 group-hover:text-cyan-500">
<iconify-icon height="32" icon="solar:mouse-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">2. Návrh</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Digitálne modelovanie vložky na mieru pre zabezpečenie optimálnej podpory klenby.</p>
</div>
<div className="slide-up delay-300 group relative bg-white p-10 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-slate-100 is-visible">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-300 text-slate-400 group-hover:text-cyan-500">
<iconify-icon className="" height="32" icon="solar:printer-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">3. Výroba</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Aditívna výroba modernými postupmi 3D tlače z flexibilných a odolných materiálov.</p>
</div>
<div className="slide-up delay-400 group relative bg-white p-10 rounded-[2rem] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-slate-100 is-visible">
<div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-50 group-hover:scale-110 transition-all duration-300 text-slate-400 group-hover:text-cyan-500">
<iconify-icon height="32" icon="solar:map-point-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-slate-900 mb-4 tracking-tight">4. Výsledok</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Odovzdanie, skúška v obuvi a bezprostredná úprava pre dokonalý komfort.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-950 py-32 relative overflow-hidden" id="benefits">
<div className="absolute inset-0 opacity-20">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe09c99f-7f5f-44c0-ba82-edce57201ae2_1600w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
<div className="slide-up relative mb-16 lg:mb-0 order-2 lg:order-1 mt-10 lg:mt-0 is-visible">
<div className="bg-slate-900/50 rounded-[2.5rem] p-4 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(34,211,238,0.1)]">
<div className="w-full h-[400px] lg:h-[600px] bg-slate-950 rounded-[2rem] flex items-center justify-center overflow-hidden relative border border-slate-800">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/30 to-transparent"></div>
<img alt="Insole Detail" className="filter w-full h-full object-contain z-10 pt-8 pr-8 pb-8 pl-8 relative drop-shadow-2xl brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d4cf2aa-322b-45c0-8326-4d56ed6fda9c_1600w.png"/>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-cyan-400 font-light tracking-widest uppercase text-lg mb-4 block">Benefity technológie</span>
<h2 className="slide-up lg:text-5xl text-4xl font-normal text-white tracking-tighter mb-10 leading-tight is-visible">Každý krok si zaslúži dokonalú oporu</h2>
<div className="space-y-12">
<div className="slide-up delay-100 flex gap-6 is-visible">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mt-1">
<iconify-icon height="28" icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-normal text-white mb-2">Precízna 3D tlač</h3>
<p className="text-xl font-light text-slate-400 leading-relaxed">Na rozdiel od bežných metód zabezpečuje 3D tlač stopercentnú zhodu s digitálnym modelom s dôrazom na každý detail profilu.</p>
</div>
</div>
<div className="slide-up delay-200 flex gap-6 is-visible">
<div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mt-1">
<iconify-icon height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-normal text-white mb-2">Ľahké a Pružné materiály</h3>
<p className="text-xl font-light text-slate-400 leading-relaxed">Špeciálne filamenty garantujú dlhú životnosť, tvarovú stálosť a neporovnateľný komfort počas celého dňa.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-32 pb-32 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative" id="professionals">
<div className="max-w-3xl mb-20 text-center mx-auto">
<span className="slide-up uppercase block text-lg font-light text-cyan-400 tracking-[0.2em] mb-4 is-visible">Pre Odborníkov</span>
<h2 className="slide-up delay-100 lg:text-5xl text-4xl font-normal tracking-tighter mb-8 is-visible">Posuňte vašu prax do digitálnej éry</h2>
<p className="slide-up delay-200 leading-relaxed text-2xl font-light text-slate-400 is-visible">Hľadáte inovatívneho partnera pre individuálne ortopedické riešenia? Ponúkame výrobu 3D ortopedických vložiek pre vaše ambulancie.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="slide-up delay-200 bg-slate-950/50 border border-slate-800 p-10 rounded-[2rem] hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-500 is-visible">
<div className="flex text-cyan-400 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-16 h-16 border-cyan-500/10 border rounded-2xl mb-8 items-center justify-center">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-4">Vaša diagnostika</h3>
<p className="leading-relaxed text-xl font-light text-slate-400">Vy vykonáte odbornú analýzu pacienta a odošlete nám naskenované dáta.</p>
</div>
<div className="slide-up delay-300 bg-slate-950/50 border border-slate-800 p-10 rounded-[2rem] hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-500 relative overflow-hidden is-visible">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full"></div>
<div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/10 relative z-10">
<iconify-icon className="" height="32" icon="solar:printer-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white mb-4 tracking-tight relative z-10">Naša výroba</h3>
<p className="text-slate-400 text-xl font-light leading-relaxed relative z-10">Postaráme sa o precízny 3D dizajn, špičkovú tlač a promptné doručenie.</p>
</div>
<div className="slide-up delay-400 bg-slate-950/50 border border-slate-800 p-10 rounded-[2rem] hover:bg-slate-800/80 hover:border-slate-700 transition-all duration-500 is-visible">
<div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/10">
<iconify-icon className="" height="32" icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-normal text-white tracking-tight mb-4">Rast vašej praxe</h3>
<p className="leading-relaxed text-xl font-light text-slate-400">Poskytnite pacientom najmodernejšie riešenie bez nutnosti investícií do technológií.</p>
</div>
</div>
<div className="slide-up delay-500 mt-24 text-center is-visible">
<a className="group hover:text-cyan-300 transition-all duration-300 inline-flex items-center gap-3 hover:border-cyan-400 text-2xl font-light text-white border-cyan-500/50 border-b pb-2" href="https://canva.link/pxmgc4mxs3sjzt7">
                        Katalóg pre lekárov
                        <iconify-icon className="transform group-hover:translate-x-2 transition-transform duration-300 text-cyan-400" height="24" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-slate-50 py-32" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="slide-up bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-8 sm:p-12 lg:p-20 bg-slate-950 text-white relative overflow-hidden">
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/20 blur-[80px] rounded-full"></div>
<h2 className="text-4xl lg:text-5xl font-normal tracking-tighter mb-6 relative z-10">Pripravení na zdravšiu chôdzu?</h2>
<p className="text-2xl text-slate-400 font-light mb-16 relative z-10">Kontaktujte nás a objednajte sa na konzultáciu.</p>

<div className="space-y-10 relative z-10">
<div className="flex items-center gap-4 sm:gap-6 group">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
<iconify-icon height="28" icon="solar:phone-rounded-linear" width="28"></iconify-icon>
</div>
<div className="">
<p className="text-lg font-light text-slate-400 mb-1">Telefón</p>
<p className="text-xl sm:text-2xl font-normal text-white whitespace-nowrap">+421 918 397 881</p>
</div>
</div>
<div className="flex items-center gap-4 sm:gap-6 group">
<div className="w-full overflow-hidden">
</div>
</div>
</div>
</div>
<div className="lg:p-20 min-h-[400px] bg-slate-100 bg-[url(https://images.unsplash.com/photo-1704283843476-4e7da04666d5?w=1600&amp;q=80)] bg-cover bg-center">
</div>
</div>
</div>

<div className="max-w-4xl mx-auto mt-24">
<details className="group bg-white border border-slate-200 rounded-3xl overflow-hidden text-left transition-all duration-300 hover:shadow-md">
<summary className="flex cursor-pointer hover:bg-slate-50 transition-colors font-normal text-slate-800 p-8 items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:text-cyan-600 transition-colors">
<iconify-icon className="" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="tracking-tight text-xl">Zásady ochrany osobných údajov (GDPR)</span>
</div>
<span className="transform group-open:rotate-180 transition-transform duration-500 text-slate-400">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="p-8 pt-4 text-sm text-slate-500 font-light leading-relaxed border-t border-slate-100 max-h-[500px] overflow-y-auto">
<div className="space-y-6">
<p className="text-base text-slate-600">
                                    Markont-n, s.r.o., Štítnická 9, 048 01 Rožňava ako prevádzkovateľ stránky Insol3D, poskytuje za účelom dodržiavania spravodlivosti a transparentnosti voči dotknutým osobám toto oboznámenie dotknutej osoby o spracovaní osobných údajov...
                                </p>
<div className="space-y-3">
<h4 className="font-normal text-slate-900 text-base tracking-tight">Účel spracúvania osobných údajov vo výdajni zdravotníckych pomôcok:</h4>
<p> Ochrana osobných údajov
Markont-n, s.r.o., Štítnická 9, 048 01 Rožňava

Markont-n, s.r.o., Štítnická 9, 048 01 Rožňava ako prevádzkovateľ, poskytuje za účelom dodržiavania spravodlivosti a transparentnosti voči dotknutým osobám toto oboznámenie dotknutej osoby o spracovaní osobných údajov podľa článkov 13. a 14. Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 z 27. apríla 2016 o ochrane fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe takýchto údajov (ďalej len „Nariadenie“) a § 19 Zákona NR SR č. 18/2018 Z.z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonov pod názvom Zásady ochrany osobných údajov Účel spracúvania osobných údajov vo výdajni zdravotníckych pomôcok:v rámci činnosti dochádza ku spracúvaniu osobných údajov pri evidovaní osôb na účely poskytnutia zdravotnej starostlivosti – individuálne zhotovenie/oprava/úprava a výdaj ortopedickoprotetickej zdravotníckej pomôcky na mieru. Okruh dotknutých osôb: fyzické osoby – klienti Zoznam osobných údajov: rodné číslo, titul, meno a priezvisko, bydlisko, telefónne číslo, e-mail, zdravotná poisťovňa, číslo diagnózy. Právny základ spracúvania osobných údajov: Zákon č. 362/2011 Z.z. o liekoch a zdravotníckych pomôckach a o zmene a doplnení niektorých zákonov, Zákon č. 152/1994 Z.z. o sociálnom fonde a o zmene a doplnení zákona č. 286/1992 Zb. o daniach z príjmov v znení neskorších predpisov, zákon č. 578/2004 Z.z. o poskytovateľoch zdravotnej starostlivosti, zdravotníckych pracovníkoch, stavovských organizáciách v zdravotníctve a o zmene a doplnení niektorých zákonov, zákon č. 581/2004 Z.z. o zdravotných poisťovniach, dohľade nad zdravotnou starostlivosťou a o zmene a doplnení niektorých zákonov, zákon č. 576/2004 Z.z. o zdravotnej starostlivosti, službách súvisiacich s poskytovaním zdravotnej starostlivosti a o zmene a doplnení niektorých zákonov, zákon č. 580/2004 Z.z. o zdravotnom poistení a o zmene a doplnení zákona č. 95/2002 Z.z. o poisťovníctve a o zmene a doplnení niektorých zákonov, § 13 ods. 1 písm. b) zákona č. 18/2018 Z.z. o ochrane osobných údajov a o zmene a doplnení niektorých zákonovstarostlivosti, národné centrum zdravotníckych informácií, tretie subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb – pacientov (napr. Úrad pre dohľad nad zdravotnou starostlivosťou, súdy), zmluvní partneri – dodávatelia softwéru: PhDr. Tibor Vilček Provax, Svetlá 41, 98052 Hrachovo, IČO: 32822804. Prenos osobných údajov do tretích krajín sa nerealizuje. Lehoty na vymazanie osobných údajov: merné listy – 5 rokov od posledného poskytnutia zdravotnej starostlivosti. Automatizované rozhodovanie vrátane profilovania sa neuskutočňuje. Z dôvodu dodržiavania zásady minimalizácie sú všetky Vami poskytnuté osobné údaje nevyhnutnou zákonnou a zmluvnou požiadavkou pre naplnenie účelu ich spracúvania. Účel spracúvania osobných údajov v evidencii reklamácii: V rámci činnosti dochádza ku spracúvaniu osobných údajov pri evidovaní osôb na účely uplatnenia reklamácie. Okruh dotknutých osôb: fyzické osoby – klienti Zoznam osobných údajov: meno, priezvisko, titul, bydlisko/prípadne adresa umiestnenia výrobku, telefón, e-mail, povaha reklamácie, účtovný doklad Právny základ spracúvania osobných údajov: Zákon č. 40/1964 Zb. Občiansky zákonník v znení neskorších predpisov, Zákon č. 250/2007 Z.z. o ochrane spotrebiteľa a o zmene zákona Slovenskej národnej rady č. 372/1990 Zb. o priestupkoch v znení neskorších predpisov a iné súvisiace všeobecne záväzné právne predpisy Kategórie príjemcov: SOI – Zákon č. 128/2002 Z.z. o štátnej kontrole vnútorného trhu vo veciach ochrany spotrebiteľa a o zmene a doplnení niektorých zákonov a subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb (napr. súdy) a zoznam sprostredkovateľov sa nachádza v sídle spoločnosti Prenos osobných údajov do tretích krajín sa nerealizuje. Lehoty na vymazanie osobných údajov: 10 rokov Automatizované rozhodovanie vrátane profilovania sa neuskutočňuje. Z dôvodu dodržiavania zásady minimalizácie sú všetky Vami poskytnuté osobné údaje nevyhnutou zákonnou požiadavkou pre naplnenie účelu ich spracúvania. Účel spracúvania osobných údajov v Evidencii došlej a odoslanej pošty a v správe registratúry: V rámci činnosti dochádza ku spracúvaniu osobných údajov pri evidencii došlej a odoslanej pošty a úkony spojené so správou registratúry. Okruh dotknutých osôb: fyzické osoby – adresáti, zamestnanci. Zoznam osobných údajov: rodné číslo, meno, priezvisko, titul, adresa, názov organizácie, pracovné zaradenie, e-mailová adresa, predmet a obsah pošty. Právny základ spracúvania osobných údajov: Zákon č. 395/2002 Z.z. o archívoch a registratúrach a o doplnení niektorých zákonov v znení neskorších predpisov, Zákon č. 305/2013 Z.z. o elektronickej podobe výkonu pôsobnosti orgánov verejnej moci a o zmene a doplnení niektorých zákonov (zákon o e-Governmente). Kategórie príjemcov: subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach Prenos osobných údajov do tretích krajín sa nerealizuje. Lehoty na vymazanie osobných údajov:bežná korešpondencia – 3 roky, registratúrny denník 10 rokov Automatizované rozhodovanie vrátane profilovania sa neuskutočňuje. Z dôvodu dodržiavania zásady minimalizácie sú všetky Vami poskytnuté osobné údaje nevyhnutou zákonnou požiadavkou pre naplnenie účelu ich spracúvania. Účel spracúvania osobných údajov v Evidencii účtovných a daňových dokladov: V rámci činnosti dochádza ku spracúvaniu osobných údajov pri spracovaní účtovných dokladov a agendy spojenej s jej spracovaním. Okruh dotknutých osôb: fyzické osoby – klienti, zamestnanci Zoznam osobných údajov: meno, priezvisko, titul, adresa trvalého pobytu, adresa prechodného pobytu, telefónne číslo, e-mailová adresa, dátum narodenia, druh a číslo dokladu totožnosti, podpis, číslo bankového účtu fyzickej osoby. Právny základ spracúvania osobných údajov: zákon č. 431/2002 Z.z. o účtovníctve v znení neskorších predpisov, zákon č. 222/2004 Z.z. o dani z pridanej hodnoty v znení neskorších predpisov, zákon č. 40/1964 Zb. Občiansky zákonník v znení neskorších predpisov, zákon č. 152/1994 Z.z. o sociálnom fonde a o zmene a doplnení zákona č. 286/1992 Zb. o daniach z príjmov v znení neskorších predpisov, zákon č. 311/2001 Z.z. Zákonník práce v znení neskorších predpisov. Kategórie príjemcov: sociálna poisťovňa, zdravotné poisťovne, daňový úrad a subjekty, ktorým osobitný predpis zveruje právomoc rozhodovať o právach a povinnostiach fyzických osôb (napr. súdy). Prenos osobných údajov do tretích krajín sa nerealizuje. Lehoty na vymazanie osobných údajov: 10 rokov Automatizované rozhodovanie vrátane profilovania sa neuskutočňuje. Z dôvodu dodržiavania zásady minimalizácie sú všetky Vami poskytnuté osobné údaje nevyhnutou zákonnou požiadavkou pre naplnenie účelu ich spracúvania. Osobné údaje spracovávané na základe súhlasu dotknutej osoby Osobné údaje spracovávame, ak dotknutá osoba vyjadrila súhlas so spracúvaním svojich osobných údajov na konkrétny účel. Osobné údaje sú spracovávané po dobu trvania súhlasu alebo na dobu, na ktorú dotknutá osoba udelila súhlas. Dotknutá osoba má právo kedykoľvek odvolať súhlas so spracovaním osobných údajov, ktoré sa jej týkajú. Odvolanie súhlasu nemá vplyv na zákonnosť spracúvania osobných údajov založeného na súhlase pred jeho odvolaním, pred poskytnutím súhlasu musí byť dotknutá osoba o tejto skutočnosti informovaná. Dotknutá osoba môže súhlas odvolať rovnakým spôsobom, akým súhlas udelila. Kontaktný formulár - účelom je zaslanie odpovede na položenú otázku. Doba uchovávania osobných údajov – maximálne 6 mesiacov (v prípade plnenia si zákonných povinností či právnych nárokov prevádzkovateľa podľa platnej legislatívy). Cookies – získavame na základe súhlasu z našej webstránky za účelom zlepšovania kvality našich produktov a služieb, analýzy návštevnosti našej webstránky a Vášho správania na webe. Spracovávané súbory cookies je možné oddeliť podľa: Platnosti na: dočasné cookies (tzv. sessioncookies), ktoré zostávajú uložené vo Vašom prehliadači len do doby, kým neuplynie ich životnosť alebo kým ich manuálne neodstránite (doba uloženia súborov cookies vo Vašom prehliadači závisí na nastavení samotných cookies a nastavení Vášho prehliadača), Podľa funkcií na: esenciálne, ktoré sú nevyhnutné pre funkčnosť našich webstránok, a preferenčné, ktoré umožňujú, aby si naše webstránky zapamätali informácie, ktoré menia, ako sa webstránka správa alebo ako vyzerá (napr. preferovaný jazyk alebo región, kde sa nachádzate), tieto cookies nie sú nevyhnutne nutné pre fungovanie našich webstránok, ale zvyšujú funkčnosť a praktickosť ich používania, a analytické, ktoré nám pomáhajú s analýzou Vášhozážitku na našom webe (tzv. User Experience = používateľský zážitok) a vďaka ktorým rozumieme, ako používate naše webstránky. Nepoužívame cookies tretích strán, na základe ktorých prebieha sledovanie viacerých internetových stránok, aby sme Vám mohli poskytovať personalizovaný obsah a reklamu na webových stránkach tretích strán a iných predajných kanáloch. Dotknuté osoby, o ktorých sú spracúvané osobné údaje pre konkrétne vymedzené účely, si môžu uplatniť nasledovné práva: Právo požadovať prístup k svojim osobným údajom – Právo na opravu osobných údajov – Právo na vymazanie osobných údajov – Právo na obmedzenie spracúvania osobných údajov – Právo namietať proti spracúvaniu osobných údajov –Právo na prenos svojich osobných údajov – Právo podať sťažnosť dozornému orgánu, t.j. Úradu na ochranu osobných údajov SR. Uvedené práva dotknutej osoby sú bližšie špecifikované v článkoch 15 až 21 Nariadenia. Dotknutá osoba si uvedené práva uplatňuje v súlade s Nariadením a ďalšími príslušnými právnymi predpismi. Voči prevádzkovateľovi si dotknutá osoba môže svoje práva uplatniť prostredníctvom písomnej žiadosti alebo elektronickými prostriedkami. V prípade, že dotknutá osoba požiada o ústne poskytnutie informácií, informácie sa môžu takto poskytnúť za predpokladu, že dotknutá osoba preukázala svoju totožnosť. Markont-n, s.r.o. prijalo všetky primerané personálne, organizačné a technické opatrenia za účelom maximálnej ochrany Vašich osobných údajov s cieľom v čo najväčšej miere znížiť riziko ich zneužitia. V zmysle našej povinnosti vyplývajúcej z článku 34 Nariadenia, Vám ako dotknutým osobám oznamujeme, že ak nastane situácia, že ako prevádzkovateľ porušíme ochranu Vašich osobných údajov spôsobom, ktorý pravdepodobne povedie k vysokému riziku pre práva a slobody fyzických osôb, bez zbytočného odkladu Vám túto skutočnosť oznámime. Právne predpisy i naša obchodná stratégia a s ňou súvisiace spôsoby spracovávania Vašich osobných údajov sa môžu meniť. Ak sa tieto zásady rozhodneme aktualizovať, umiestnime zmeny na našej webstránke a budeme Vás o týchto zmenách informovať. V prípadoch, kedy má dôjsť k zásadnejšej zmene týchto zásad, alebo v prípade, kedy nám tak uloží zákon, budeme Vás informovať vopred. Žiadame Vás, aby ste si tieto zásady starostlivo prečítali a pri ďalšej komunikácii s nami, resp. používaní našej webstránky tieto zásady pravidelne kontrolovali. Kontaktná osoba, na ktorú sa môže obrátiť každá dotknutá osoba, ktorej osobné údaje sú spracúvané v našej spoločnosti: Richard Nagy, mob. 0918 397 881, email: r.nagy@markont.sk.</p>
</div>
</div>
</div>
</details>
</div>
</div>
</section>
</div>

<div className="hidden pt-20" id="page-insoles">
<section className="py-32 bg-slate-50 min-h-screen">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
<h1 className="text-5xl lg:text-7xl font-light text-slate-900 tracking-tighter mb-8">O technológii 3D vložiek</h1>
<p className="text-2xl text-slate-500 font-light max-w-3xl mx-auto mb-20 leading-relaxed">Revolúcia v personalizovanej starostlivosti o chodidlá. Maximálny komfort a presná biomechanická opora.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
<div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
<div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon height="28" icon="solar:focus-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-normal text-slate-900 mb-6 tracking-tight">Biometrické prispôsobenie</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Každá vložka je unikátom, navrhnutým tak, aby plne rešpektovala jedinečnú anatómiu a potreby vášho chodidla.</p>
</div>
<div className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon height="28" icon="solar:layers-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-3xl font-normal text-slate-900 mb-6 tracking-tight">Dynamická podpora</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Inteligentné materiály absorbujúce nárazy výrazne znižujú záťaž na kĺby a chrbticu pri každom vašom kroku.</p>
</div>
</div>
<div className="mt-20">
<a className="inline-flex justify-center items-center hover:bg-slate-900 hover:text-white transition-all duration-300 text-xl font-light text-slate-900 bg-transparent border-slate-900 border rounded-full py-4 px-10" href="#models">Zobraziť modely</a>
</div>
</div>
</section>
</div>

<div className="hidden pt-20 bg-slate-50 pb-32" id="page-models">
<section className="pt-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h1 className="text-5xl lg:text-7xl font-light text-slate-900 tracking-tighter mb-20 text-center">Modely 3D vložiek</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm group">
<div className="relative h-80 overflow-hidden">
<img alt="Casual" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=1200"/>
</div>
<div className="p-10 lg:p-12">
<h3 className="text-3xl font-normal mb-4 text-slate-900 tracking-tight">Bežná obuv</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Tenký profil určený na každodenné nosenie v mestskej, elegantnej a vychádzkovej obuvi bez straty miesta.</p>
</div>
</div>
<div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm group">
<div className="relative h-80 overflow-hidden">
<img alt="Sport" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?q=80&amp;w=1200"/>
</div>
<div className="p-10 lg:p-12">
<h3 className="text-3xl font-normal mb-4 text-slate-900 tracking-tight">Športová obuv</h3>
<p className="text-xl font-light text-slate-500 leading-relaxed">Zosilnená štruktúra pre maximálnu ochranu, stability a absorbciu nárazov pri aktívnom pohybe a športe.</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden pt-40 pb-32 bg-slate-50 min-h-screen" id="page-gdpr">
<div className="max-w-4xl mx-auto px-6 lg:px-8 bg-white p-10 lg:p-20 rounded-[3rem] border border-slate-100 shadow-sm">
<h1 className="text-4xl lg:text-5xl font-normal text-slate-900 tracking-tighter mb-10">Ochrana osobných údajov</h1>
<p className="text-xl font-light text-slate-500 leading-relaxed">Markont-n, s.r.o. spracúva vaše osobné údaje v plnom súlade s platnou legislatívou (GDPR). Bezpečnosť vašich dát je pre nás kľúčová.</p>
</div>
</div>

<footer className="bg-slate-950 border-t border-slate-900 py-16 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start gap-6">
<img alt="INSOL3D" className="w-auto h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/453d57b5-45b5-4870-89c6-6cec719fe315_320w.png"/>
<p className="text-base font-light text-slate-500">© 2026 Insol3D. Vytvorené spoločnosťou Markont-n.</p>
</div>
<div className="flex gap-8 text-base font-light text-slate-400">
<a className="hover:text-cyan-400 transition-colors flex items-center gap-3" href="https://www.facebook.com/profile.php?id=61577338986380" target="_blank">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
                    Sledujte nás na Facebooku
                </a>
</div>
</div>
</footer>


    </>
  );
}
