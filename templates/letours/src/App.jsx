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



        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const contactBtn = document.getElementById('contact-btn-desktop');
        const menuBtn = document.getElementById('menu-btn');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('nav-scrolled');
                navbar.classList.remove('py-6', 'text-white', 'bg-transparent');
                
                // Contact button style change on scroll
                if(contactBtn) {
                     contactBtn.classList.remove('bg-black/30', 'border-white/40', 'text-white');
                     contactBtn.classList.add('bg-slate-900', 'border-slate-800', 'text-white');
                }
                
                menuBtn.classList.remove('text-inherit');
                menuBtn.classList.add('text-slate-800');

            } else {
                navbar.classList.remove('nav-scrolled');
                navbar.classList.add('py-6', 'text-white', 'bg-transparent');

                if(contactBtn) {
                     contactBtn.classList.add('bg-black/30', 'border-white/40', 'text-white');
                     contactBtn.classList.remove('bg-slate-900', 'border-slate-800', 'text-white');
                }

                menuBtn.classList.add('text-inherit');
                menuBtn.classList.remove('text-slate-800');
            }
        });

        // Mobile Menu Toggle
        const mobileMenu = document.getElementById('mobile-menu');
        const body = document.body;
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                body.classList.add('menu-open');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:x" width="24" stroke-width="2.5"></iconify-icon>';
                menuBtn.classList.add('text-slate-800');
            } else {
                mobileMenu.classList.add('translate-x-full');
                body.classList.remove('menu-open');
                menuBtn.innerHTML = '<iconify-icon icon="lucide:menu" width="24" stroke-width="2.5"></iconify-icon>';
                if(window.scrollY <= 20) {
                    menuBtn.classList.remove('text-slate-800');
                }
            }
        }
        
        menuBtn.addEventListener('click', toggleMenu);
    
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
      

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 py-6 text-white bg-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">

<a className="flex items-center gap-2 group z-50 relative flex-shrink-0" href="#">
<img alt="LE-TOURS" className="h-12 md:h-14 w-auto object-contain bg-white rounded-xl shadow-lg px-2 py-1 group-hover:scale-105 transition-transform" src="https://www.le-tours.de/wp-content/themes/letours%202.0/images/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-2" id="nav-links-container">

<div className="group relative">
<button className="bg-[#84cc16] hover:bg-[#65a30d] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#84cc16]/30 transition-all flex items-center gap-1">
                            Ferienlager
                            <iconify-icon className="opacity-70 group-hover:rotate-180 transition-transform" icon="lucide:chevron-down" width="16"></iconify-icon>
</button>

<div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-[#84cc16] overflow-hidden py-2 text-slate-700">
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#d9f99d] hover:text-[#365314] transition-colors" href="#">Ferienlager Sommer</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#d9f99d] hover:text-[#365314] transition-colors" href="#">Ferienlager Herbst</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#d9f99d] hover:text-[#365314] transition-colors" href="#">Ferienlager Winter</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#d9f99d] hover:text-[#365314] transition-colors" href="#">Ferienlager Ostern</a>
<div className="h-px bg-slate-100 my-1 mx-4"></div>
<a className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors" href="#">Reiseinformationen</a>
</div>
</div>

<div className="group relative">
<button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#f97316]/30 transition-all flex items-center gap-1">
                            Klassenfahrten
                            <iconify-icon className="opacity-70 group-hover:rotate-180 transition-transform" icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-[#f97316] overflow-hidden py-2 text-slate-700">
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#fed7aa] hover:text-[#7c2d12] transition-colors" href="#">1. - 6. Klasse</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#fed7aa] hover:text-[#7c2d12] transition-colors" href="#">7. - 13. Klasse</a>
<div className="h-px bg-slate-100 my-1 mx-4"></div>
<a className="block px-4 py-2 text-sm font-semibold hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors" href="#">Individuelle Fahrten</a>
</div>
</div>

<div className="group relative">
<button className="bg-[#06b6d4] hover:bg-[#0891b2] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#06b6d4]/30 transition-all flex items-center gap-1">
                            Bus mieten
                            <iconify-icon className="opacity-70 group-hover:rotate-180 transition-transform" icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-[#06b6d4] overflow-hidden py-2 text-slate-700">
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#a5f3fc] hover:text-[#155e75] transition-colors" href="#">Unsere Flotte</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#a5f3fc] hover:text-[#155e75] transition-colors" href="#">Anfragen</a>
</div>
</div>

<div className="group relative">
<button className="bg-[#db2777] hover:bg-[#be185d] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#db2777]/30 transition-all flex items-center gap-1">
                            Betreuer
                            <iconify-icon className="opacity-70 group-hover:rotate-180 transition-transform" icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border-2 border-[#db2777] overflow-hidden py-2 text-slate-700">
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#fbcfe8] hover:text-[#831843] transition-colors" href="#">Betreuerteam</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#fbcfe8] hover:text-[#831843] transition-colors" href="#">Schulung</a>
<a className="block px-4 py-2 text-sm font-bold hover:bg-[#fbcfe8] hover:text-[#831843] transition-colors" href="#">FAQ</a>
<div className="h-px bg-slate-100 my-1 mx-4"></div>
<a className="block px-4 py-2 text-sm font-bold bg-[#db2777] text-white hover:bg-[#be185d] transition-colors mx-2 rounded-lg text-center mt-1" href="#">Jetzt bewerben</a>
</div>
</div>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 font-bold text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/40 hover:bg-white/20 transition-all text-white shadow-lg" href="#kontakt" id="contact-btn-desktop">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
<span>Kontakt</span>
</a>
</div>

<button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md z-50 relative transition-colors text-inherit" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="2.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white translate-x-full lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto" id="mobile-menu">
<div className="space-y-6">

<div className="space-y-2">
<div className="text-[#84cc16] font-black text-xl flex items-center gap-2">
<span className="w-2 h-8 rounded-full bg-[#84cc16]"></span> Ferienlager
                </div>
<div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-1">
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Sommer</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Herbst</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Winter</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Ostern</a>
<a className="block py-1 text-slate-500 font-medium text-sm" href="#">Reiseinformationen</a>
</div>
</div>

<div className="space-y-2">
<div className="text-[#f97316] font-black text-xl flex items-center gap-2">
<span className="w-2 h-8 rounded-full bg-[#f97316]"></span> Klassenfahrten
                </div>
<div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-1">
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">1. - 6. Klasse</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">7. - 13. Klasse</a>
<a className="block py-1 text-slate-500 font-medium text-sm" href="#">Individuelle Fahrten</a>
</div>
</div>

<div className="space-y-2">
<div className="text-[#06b6d4] font-black text-xl flex items-center gap-2">
<span className="w-2 h-8 rounded-full bg-[#06b6d4]"></span> Bus mieten
                </div>
<div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-1">
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Unsere Flotte</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Anfragen</a>
</div>
</div>

<div className="space-y-2">
<div className="text-[#db2777] font-black text-xl flex items-center gap-2">
<span className="w-2 h-8 rounded-full bg-[#db2777]"></span> Betreuer
                </div>
<div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-1">
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Betreuerteam</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">Schulung</a>
<a className="block py-1 text-slate-800 font-bold text-sm" href="#">FAQ</a>
<a className="block py-2 text-[#db2777] font-bold text-sm" href="#">Jetzt bewerben →</a>
</div>
</div>
</div>
<div className="mt-auto pt-8 border-t border-slate-100">
<div className="bg-slate-900 text-white rounded-2xl p-6 text-center">
<p className="text-sm font-medium text-slate-300 mb-2">Fragen?</p>
<a className="text-xl font-bold flex items-center justify-center gap-2" href="tel:03411234567">
<iconify-icon icon="lucide:phone"></iconify-icon> 0341 1234567
                </a>
</div>
</div>
</div>

<main className="w-full">

<section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Kinder im Ferienlager beim Zelten" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#a3e635]/80"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-20">
<h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tight mb-2 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] leading-[0.9]">
                    FERIEN
                </h1>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#FFE600] tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                    ERLEBEN
                </h2>
<p className="mt-8 text-xl md:text-2xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)] max-w-2xl leading-relaxed">
                    Unvergessliche Kinder- und Jugendreisen. <br className="hidden md:block"/>Deine Abenteuer starten genau hier.
                </p>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#bef264"></path>
</svg>
</div>
</section>

<section className="py-24 bg-[#bef264] relative" id="ferienlager">
<div className="absolute top-10 right-10 text-[#65a30d]/30 floating hidden lg:block">
<iconify-icon icon="lucide:sun" width="120"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#365314] mt-4 drop-shadow-sm">
                            Unsere <span className="text-[#365314] inline-block transform -rotate-2 bg-[#d9f99d] px-4 py-1 rounded-2xl shadow-sm border-4 border-[#365314]">
                                Ferienlager
                            </span>
</h2>
<p className="mt-6 text-[#365314] font-bold text-lg max-w-2xl">Raus in die Natur! Egal ob Ostern, Sommer, Herbst oder Winter – hier erlebst du was!</p>
</div>
<button className="bg-[#365314] text-[#bef264] px-6 py-3 rounded-2xl font-black shadow-lg shadow-[#365314]/30 flex items-center gap-2 hover:scale-105 hover:bg-[#1a2e05] transition-all border-2 border-transparent">
                        Alle Camps ansehen <iconify-icon icon="lucide:arrow-right" strokeWidth="3"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-[2.5rem] p-3 shadow-xl shadow-[#365314]/10 hover:shadow-2xl hover:shadow-[#365314]/20 transition-all duration-300 hover:-translate-y-2 border-b-8 border-[#365314]">
<div className="h-48 overflow-hidden relative rounded-[2rem] border-2 border-slate-100">
<img alt="Ostern" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-3 left-3 bg-[#FFE600] text-black font-black text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-black">FRÜHLING</div>
</div>
<div className="p-4">
<h3 className="text-xl font-black text-slate-800 mb-2">Osterferien</h3>
<p className="text-slate-600 text-sm mb-4 font-bold leading-relaxed">Startet ins Jahr mit den ersten Sonnenstrahlen und Entdeckertouren.</p>
<a className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#d9f99d] text-[#365314] font-black text-sm group-hover:bg-[#84cc16] group-hover:text-white transition-all" href="#">
                                Termine checken
                            </a>
</div>
</div>

<div className="group bg-white rounded-[2.5rem] p-3 shadow-xl shadow-[#365314]/10 hover:shadow-2xl hover:shadow-[#365314]/20 transition-all duration-300 hover:-translate-y-2 ring-4 ring-[#365314] border-b-8 border-[#365314]">
<div className="h-48 overflow-hidden relative rounded-[2rem] border-2 border-slate-100">
<img alt="Sommer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-3 left-3 bg-[#ef4444] text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-white">HOT!</div>
</div>
<div className="p-4">
<h3 className="text-xl font-black text-slate-800 mb-2">Sommerferien</h3>
<p className="text-slate-600 text-sm mb-4 font-bold leading-relaxed">Baden, Lagerfeuer, Zelten und neue beste Freunde finden.</p>
<a className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#84cc16] text-white font-black text-sm shadow-md hover:bg-[#65a30d] transition-all" href="#">
                                Termine checken
                            </a>
</div>
</div>

<div className="group bg-white rounded-[2.5rem] p-3 shadow-xl shadow-[#365314]/10 hover:shadow-2xl hover:shadow-[#365314]/20 transition-all duration-300 hover:-translate-y-2 border-b-8 border-[#365314]">
<div className="h-48 overflow-hidden relative rounded-[2rem] border-2 border-slate-100">
<img alt="Herbst" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 bg-[#f97316] text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-white">BUNT</div>
</div>
<div className="p-4">
<h3 className="text-xl font-black text-slate-800 mb-2">Herbstferien</h3>
<p className="text-slate-600 text-sm mb-4 font-bold leading-relaxed">Halloween-Partys und gemütliche Kinoabende in unseren Resorts.</p>
<a className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#d9f99d] text-[#365314] font-black text-sm group-hover:bg-[#84cc16] group-hover:text-white transition-all" href="#">
                                Termine checken
                            </a>
</div>
</div>

<div className="group bg-white rounded-[2.5rem] p-3 shadow-xl shadow-[#365314]/10 hover:shadow-2xl hover:shadow-[#365314]/20 transition-all duration-300 hover:-translate-y-2 border-b-8 border-[#365314]">
<div className="h-48 overflow-hidden relative rounded-[2rem] border-2 border-slate-100">
<img alt="Winter" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-3 left-3 bg-[#0ea5e9] text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg border-2 border-white">SCHNEE</div>
</div>
<div className="p-4">
<h3 className="text-xl font-black text-slate-800 mb-2">Winterferien</h3>
<p className="text-slate-600 text-sm mb-4 font-bold leading-relaxed">Action im Schnee! Skifahren, Rodeln und Hüttenzauber.</p>
<a className="inline-flex items-center justify-center w-full py-3 rounded-xl bg-[#d9f99d] text-[#365314] font-black text-sm group-hover:bg-[#84cc16] group-hover:text-white transition-all" href="#">
                                Termine checken
                            </a>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none rotate-180">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#fed7aa"></path>
</svg>
</div>
</section>

<section className="py-24 bg-[#fed7aa] relative overflow-hidden" id="klassenfahrten">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ea580c 3px, transparent 3px)', backgroundSize: '30px 30px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-12 text-center md:text-left">
<h2 className="text-4xl lg:text-5xl font-black tracking-tight text-[#7c2d12] mt-4">
                        Klassenfahrten &amp; <br/>
<span className="text-[#ea580c] drop-shadow-sm">Gruppenreisen</span>
</h2>
</div>
<div className="grid lg:grid-cols-12 gap-10">

<div className="lg:col-span-7 space-y-6">
<p className="text-lg text-[#9a3412] font-bold mb-8">Lehrer aufgepasst: Hier gibt es fertig organisierte Pakete. Einfach, sicher und pädagogisch wertvoll.</p>
<div className="bg-white rounded-[2rem] p-4 flex flex-col sm:flex-row gap-6 border-b-8 border-[#ea580c] hover:translate-x-2 transition-transform group shadow-xl">
<div className="w-full sm:w-40 h-32 rounded-3xl overflow-hidden flex-shrink-0 relative border-2 border-orange-100">
<div className="absolute top-0 right-0 w-8 h-8 bg-[#ea580c] rounded-bl-xl z-10"></div>
<img alt="Kultur" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 py-2">
<h3 className="text-2xl font-black text-slate-800 group-hover:text-[#ea580c] transition-colors">Kultur &amp; Geschichte</h3>
<p className="text-sm text-slate-600 mt-2 font-bold">Städtereisen nach Berlin, Dresden oder München mit coolem Programm.</p>
<div className="mt-3 flex items-center gap-2 text-xs font-black text-[#ea580c]">
<span className="bg-[#ffedd5] px-3 py-1 rounded-full border border-[#ea580c]/20">5 Tage</span>
<span className="bg-[#ffedd5] px-3 py-1 rounded-full border border-[#ea580c]/20">Ab 5. Klasse</span>
</div>
</div>
<div className="flex items-center justify-center sm:justify-end pr-4">
<button className="w-12 h-12 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-[#c2410c] hover:scale-110 transition-all shadow-md">
<iconify-icon icon="lucide:arrow-right" strokeWidth="3" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="bg-white rounded-[2rem] p-4 flex flex-col sm:flex-row gap-6 border-b-8 border-[#ea580c] hover:translate-x-2 transition-transform group shadow-xl">
<div className="w-full sm:w-40 h-32 rounded-3xl overflow-hidden flex-shrink-0 relative border-2 border-orange-100">
<div className="absolute top-0 right-0 w-8 h-8 bg-[#ea580c] rounded-bl-xl z-10"></div>
<img alt="Sport" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 py-2">
<h3 className="text-2xl font-black text-slate-800 group-hover:text-[#ea580c] transition-colors">Sport &amp; Action</h3>
<p className="text-sm text-slate-600 mt-2 font-bold">Teambuilding im Kletterwald, Kanutouren und Spaß in der Natur.</p>
<div className="mt-3 flex items-center gap-2 text-xs font-black text-[#ea580c]">
<span className="bg-[#ffedd5] px-3 py-1 rounded-full border border-[#ea580c]/20">3-5 Tage</span>
<span className="bg-[#ffedd5] px-3 py-1 rounded-full border border-[#ea580c]/20">Alle Klassen</span>
</div>
</div>
<div className="flex items-center justify-center sm:justify-end pr-4">
<button className="w-12 h-12 rounded-full bg-[#ea580c] text-white flex items-center justify-center hover:bg-[#c2410c] hover:scale-110 transition-all shadow-md">
<iconify-icon icon="lucide:arrow-right" strokeWidth="3" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-gradient-to-br from-[#ea580c] to-[#c2410c] text-white rounded-[3rem] p-8 lg:p-10 h-full relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(234,88,12,0.6)] transform rotate-1 hover:rotate-0 transition-transform duration-500 border-4 border-[#ffedd5]">

<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
<div className="absolute bottom-10 -left-10 w-24 h-24 bg-yellow-400/40 rounded-full blur-xl"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg text-[#ea580c] transform -rotate-6">
<iconify-icon icon="lucide:pencil" strokeWidth="3" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-black mb-4">Wunschkonzert?</h3>
<p className="text-white/90 font-bold leading-relaxed mb-8">
                                    Nicht das Passende dabei? Wir basteln euch ein individuelles Angebot, genau so wie ihr es braucht!
                                </p>
<form className="space-y-4 mt-auto">
<input className="w-full bg-white/20 border-2 border-white/40 rounded-2xl px-5 py-4 text-sm font-bold placeholder:text-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition-all text-white" placeholder="Name der Schule" type="text"/>
<input className="w-full bg-white/20 border-2 border-white/40 rounded-2xl px-5 py-4 text-sm font-bold placeholder:text-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition-all text-white" placeholder="E-Mail für das Angebot" type="email"/>
<button className="w-full bg-[#FFE600] text-[#c2410c] font-black py-4 rounded-2xl hover:bg-white hover:scale-[1.02] transition-all shadow-xl mt-4" type="button">
                                        Angebot anfragen
                                    </button>
</form>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#67e8f9"></path>
</svg>
</div>
</section>

<section className="py-24 bg-[#67e8f9] relative" id="busvermietung">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[3rem] p-3 lg:p-4 shadow-xl border-b-[12px] border-[#0891b2] overflow-hidden">
<div className="bg-[#155e75] rounded-[2.5rem] overflow-hidden relative min-h-[500px] flex flex-col lg:flex-row">

<div className="absolute top-10 left-10 w-64 h-64 bg-[#22d3ee] rounded-full blur-3xl opacity-40 pointer-events-none"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-[#0e7490] rounded-full blur-3xl opacity-60 pointer-events-none"></div>

<div className="lg:w-3/5 relative h-64 lg:h-auto order-1 lg:order-2">
<img alt="Reisebus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-[#22d3ee] text-[#083344] font-black p-6 rounded-full rotate-12 border-4 border-white hidden lg:block shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
<span className="text-3xl block">30-80</span>
<span className="text-sm">Plätze</span>
</div>
</div>

<div className="lg:w-2/5 p-8 lg:p-14 flex flex-col justify-center relative z-20 order-2 lg:order-1">
<div className="w-16 h-16 rounded-2xl bg-[#06b6d4] text-white flex items-center justify-center mb-8 shadow-[0_8px_0_#0891b2] transform hover:-translate-y-1 transition-transform border-2 border-white/20">
<iconify-icon icon="lucide:bus" width="32"></iconify-icon>
</div>
<h2 className="text-4xl lg:text-5xl font-black text-white mb-6 drop-shadow-md">Dein eigener Bus.</h2>
<p className="text-[#cffafe] text-lg mb-8 font-bold leading-relaxed">
                                Wir bringen euch sicher ans Ziel! Für Klassenfahrten, Vereinsausflüge oder Party-Trips.
                            </p>
<div className="grid grid-cols-1 gap-4 mb-10">
<div className="bg-[#083344]/60 p-4 rounded-xl flex items-center gap-4 border-2 border-[#22d3ee]/30 hover:bg-[#083344] transition-colors">
<iconify-icon className="text-[#22d3ee] text-2xl" icon="lucide:shield-check"></iconify-icon>
<span className="text-white font-bold">100% Sicher &amp; Modern</span>
</div>
<div className="bg-[#083344]/60 p-4 rounded-xl flex items-center gap-4 border-2 border-[#22d3ee]/30 hover:bg-[#083344] transition-colors">
<iconify-icon className="text-[#22d3ee] text-2xl" icon="lucide:smile"></iconify-icon>
<span className="text-white font-bold">Coole Busfahrer</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[#22d3ee] hover:bg-[#67e8f9] text-[#083344] font-black rounded-xl transition-all shadow-lg w-fit group" href="#">
                                Bus anfragen <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="3"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t-4 border-[#690B54]" id="betreuer">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-block p-4 rounded-full bg-[#fbcfe8] mb-6 text-[#be185d]">
<iconify-icon icon="lucide:users" width="40"></iconify-icon>
</div>
<h2 className="text-4xl font-black text-slate-900 mb-6">Werde Betreuer!</h2>
<p className="text-xl text-slate-600 font-bold mb-8">Du bist über 16, hast Bock auf Action und arbeitest gerne mit Kids? Dann bewirb dich jetzt als Teamer für die nächste Saison!</p>
<a className="inline-block bg-[#db2777] text-white font-black px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-xl shadow-[#db2777]/30 hover:bg-[#be185d]" href="#">
                     Jetzt bewerben &amp; Infos
                 </a>
</div>
</section>

<footer className="bg-[#500740] text-white pt-24 pb-12 mt-0 relative overflow-hidden" id="kontakt">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[50px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0v46l600 74 600-74V0H0z" fill="#67e8f9"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-12">

<div className="space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="bg-white rounded-xl p-2 w-16 shadow-lg rotate-3">
<img alt="LE-TOURS Logo" className="w-full h-auto" src="https://www.le-tours.de/wp-content/themes/letours%202.0/images/logo.png"/>
</div>
</a>
<p className="text-white/80 text-sm font-bold leading-relaxed max-w-xs">
                            Wir machen Kinder glücklich. Seit über 10 Jahren dein Partner für unvergessliche Ferien.
                        </p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-[#d946ef] hover:scale-110 transition-all border border-white/10" href="#">
<iconify-icon icon="lucide:facebook" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center hover:bg-[#d946ef] hover:scale-110 transition-all border border-white/10" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="font-black mb-6 text-xl text-[#f0abfc]">Kontakt</h4>
<ul className="space-y-4 text-sm text-white/90 font-bold">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-[#f0abfc]" icon="lucide:map-pin"></iconify-icon>
<span>Musterstraße 123<br/>04109 Leipzig</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f0abfc]" icon="lucide:phone"></iconify-icon>
<span>0341 1234567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#f0abfc]" icon="lucide:mail"></iconify-icon>
<span>info@le-tours.de</span>
</li>
</ul>
</div>

<div>
<h4 className="font-black mb-6 text-xl text-[#f0abfc]">Entdecken</h4>
<ul className="space-y-3 text-sm text-white/90 font-bold">
<li><a className="hover:text-[#bef264] hover:pl-2 transition-all" href="#ferienlager">Ferienlager</a></li>
<li><a className="hover:text-[#fdba74] hover:pl-2 transition-all" href="#klassenfahrten">Klassenfahrten</a></li>
<li><a className="hover:text-[#67e8f9] hover:pl-2 transition-all" href="#busvermietung">Busvermietung</a></li>
<li><a className="hover:text-[#f0abfc] hover:pl-2 transition-all" href="#betreuer">Betreuer werden</a></li>
</ul>
</div>

<div>
<h4 className="font-black mb-6 text-xl text-[#f0abfc]">Rechtliches</h4>
<ul className="space-y-3 text-sm text-white/90 font-bold">
<li><a className="hover:text-white transition-colors" href="#">Impressum</a></li>
<li><a className="hover:text-white transition-colors" href="#">Datenschutz</a></li>
<li><a className="hover:text-white transition-colors" href="#">AGB</a></li>
</ul>
</div>
</div>
<div className="text-center text-sm font-bold text-white/30">
                    © 2024 Le-Tours GmbH. Mit viel ❤️ für Kids gemacht.
                </div>
</div>
</footer>
</main>


    </>
  );
}
