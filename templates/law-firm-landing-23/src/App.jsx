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



      const header = document.getElementById('main-header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.remove('bg-transparent');
                header.classList.add('bg-zinc-700/40');
            } else {
                header.classList.add('bg-transparent');
                header.classList.remove('bg-zinc-700/40');
            }
        });
    


    const trigger = document.getElementById('dropdown-trigger');
    const dropdown = document.getElementById('dropdown-menu');
    const arrow = document.getElementById('dropdown-arrow');
    
    function showDropdown() {
        dropdown.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
        dropdown.classList.add('opacity-100', 'visible');
        arrow.classList.add('rotate-180');
    }
    
    function hideDropdown() {
        dropdown.classList.add('opacity-0', 'invisible', 'pointer-events-none');
        dropdown.classList.remove('opacity-100', 'visible');
        arrow.classList.remove('rotate-180');
    }
    
    trigger.addEventListener('mouseenter', showDropdown);
    trigger.addEventListener('mouseleave', (e) => {
        setTimeout(() => {
            if (!dropdown.matches(':hover')) {
                hideDropdown();
            }
        }, 100);
    });
    
    dropdown.addEventListener('mouseenter', showDropdown);
    dropdown.addEventListener('mouseleave', hideDropdown);



    const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
    const mobileSubmenuTrigger = document.getElementById('mobile-submenu-trigger');
    const mobileSubmenu = document.getElementById('mobile-submenu');
    const mobileSubmenuArrow = document.getElementById('mobile-submenu-arrow');
    
    function openMobileMenu() {
        mobileMenu.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'visible', 'pointer-events-auto');
        mobileMenuPanel.classList.remove('translate-x-full');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
        mobileMenu.classList.add('opacity-0', 'invisible', 'pointer-events-none');
        mobileMenu.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
        mobileMenuPanel.classList.add('translate-x-full');
        document.body.style.overflow = '';
    }
    
    function toggleSubmenu() {
        if (mobileSubmenu.style.maxHeight) {
            mobileSubmenu.style.maxHeight = null;
            mobileSubmenuArrow.classList.remove('rotate-180');
        } else {
            mobileSubmenu.style.maxHeight = mobileSubmenu.scrollHeight + 'px';
            mobileSubmenuArrow.classList.add('rotate-180');
        }
    }
    
    mobileMenuTrigger.addEventListener('click', openMobileMenu);
    mobileMenuClose.addEventListener('click', closeMobileMenu);
    mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    mobileSubmenuTrigger.addEventListener('click', toggleSubmenu);

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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abbe90fd-9c3a-4dae-acd5-6a3d77c640af_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<header className="fixed transition-all duration-300 backdrop-blur-[2px] z-50 w-full border-white/5 border-b top-0" id="main-header">
<div className="lg:px-12 flex h-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0 w-[200px]" onclick="window.location.href='/hem'" role="button">
<a className="font-serif text-2xl tracking-tight leading-[0.85] text-white inline-flex flex-col items-start group" href="index.html">
<img alt="Adekvat Juridik" className="block cursor-pointer w-auto h-12 object-contain pt-0 pl-2 scale-150" onclick="window.location.href='/hem'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/688b4ed2-0a20-4d21-8680-e661bedf8646_320w.png"/>
</a>
</div>

<nav className="hidden lg:flex flex-1 space-x-10 items-center justify-center">
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="/hem">Hem</a>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="/om-oss">Om
        Oss</a>

<div className="relative" id="dropdown-trigger">
<a className="text-[11px] hover:text-white transition-colors uppercase flex items-center gap-1 font-medium text-gray-100 tracking-widest pt-4 pb-4" href="/rattsomraden">
          Rättsområden
          <svg className="transition-transform duration-300" fill="none" height="12" id="dropdown-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
</div>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="/prislista">Prislista</a>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="/kontakt">Kontakt</a>
</nav>

<div className="hidden lg:flex items-center justify-end w-[200px]">
<a className="inline-flex items-center justify-center text-[11px] hover:bg-gray-200 transition-colors uppercase font-semibold text-black tracking-widest bg-white rounded-sm pt-3 pr-6 pb-3 pl-6" href="/kontakt">
        Boka konsultation
      </a>
</div>

<div className="lg:hidden text-white cursor-pointer ml-auto" id="mobile-menu-trigger">
<svg className="w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</div>

</div>
</header>

<div className="hidden lg:block fixed top-20 left-1/2 -translate-x-1/2 transition-all duration-300 z-[99999]" id="dropdown-menu">
<div className="bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-sm py-2 min-w-[220px] pointer-events-auto">
<a className="block px-5 py-3 text-[11px] uppercase tracking-widest font-medium text-gray-600 hover:text-[#C4A470] hover:bg-gray-50 transition-colors" href="juridisk-radgivning.html">Juridisk
            Rådgivning</a>
<a className="block px-5 py-3 text-[11px] uppercase tracking-widest font-medium text-gray-600 hover:text-[#C4A470] hover:bg-gray-50 transition-colors" href="tvister.html">Tvister</a>
<a className="block px-5 py-3 text-[11px] uppercase tracking-widest font-medium text-gray-600 hover:text-[#C4A470] hover:bg-gray-50 transition-colors" href="konsultverksamhet.html">Konsultverksamhet</a>
<a className="block px-5 py-3 text-[11px] uppercase tracking-widest font-medium text-gray-600 hover:text-[#C4A470] hover:bg-gray-50 transition-colors" href="foretagsoverlatelser.html">Företagsöverlåtelser</a>
</div>
</div>


<div className="lg:hidden fixed inset-0 z-[99999] pointer-events-none opacity-0 invisible transition-all duration-300" id="mobile-menu">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" id="mobile-menu-backdrop"></div>

<div className="absolute top-0 right-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/10 transform translate-x-full transition-transform duration-300" id="mobile-menu-panel">

<div className="flex justify-end p-6">
<div className="text-white cursor-pointer" id="mobile-menu-close">
<svg className="w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</div>

<nav className="flex flex-col px-6 space-y-1">
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="hem.html">Hem</a>
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="om-oss.html">Om
                Oss</a>

<div className="border-b border-white/5">
<div className="flex items-center justify-between py-4 cursor-pointer" id="mobile-submenu-trigger">
<span className="text-[11px] uppercase tracking-widest font-medium text-gray-300">Rättsområden</span>
<svg className="text-gray-500 transition-transform duration-300" fill="none" height="12" id="mobile-submenu-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="overflow-hidden max-h-0 transition-all duration-300" id="mobile-submenu">
<a className="block text-[11px] uppercase tracking-widest font-medium text-gray-500 hover:text-[#C4A470] transition-colors py-3 pl-4" href="juridisk-radgivning.html">Juridisk
                        Rådgivning</a>
<a className="block text-[11px] uppercase tracking-widest font-medium text-gray-500 hover:text-[#C4A470] transition-colors py-3 pl-4" href="tvister.html">Tvister</a>
<a className="block text-[11px] uppercase tracking-widest font-medium text-gray-500 hover:text-[#C4A470] transition-colors py-3 pl-4" href="konsultverksamhet.html">Konsultverksamhet</a>
<a className="block text-[11px] uppercase tracking-widest font-medium text-gray-500 hover:text-[#C4A470] transition-colors py-3 pl-4 pb-4" href="foretagsoverlatelser.html">Företagsöverlåtelser</a>
</div>
</div>
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="prislista.html">Prislista</a>
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="#kontakt">Kontakt</a>
</nav>

<div className="px-6 mt-8">
<a className="block text-center text-[11px] uppercase font-semibold text-black tracking-widest bg-white hover:bg-gray-200 transition-colors rounded-sm py-4" href="#kontakt">
        Boka konsultation
    </a>
</div>

<div className="px-6 mt-auto pt-12 pb-8">
<a href="hem.html">
<img className="object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf00919-6189-4dee-9f65-484d675b6568_800w.png"/>
</a>
</div>
</div>
</div>


<div className="z-10 flex flex-col relative">

<section className="min-h-screen flex lg:px-12 w-full pt-28 pr-6 pb-20 pl-6 items-center justify-center" id="hem">
<div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
<div className="lg:col-span-7 flex flex-col">
<div className="mb-6 pl-1">
<span className="text-[10px] tracking-[0.25em] text-white/50 uppercase font-medium" style={{}}>
                            Est. 1984
                        </span>
</div>
<h1 className="leading-[0.95] -translate-x-16 md:text-8xl lg:text-[7rem] xl:text-[8rem] xl:text-7xl text-7xl italic text-white tracking-tight font-playfair w-13 h-50 pt-5 pb-5 pl-10 scale-75 skew-x-5" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
                        Trygg juridik, när det gäller.
                    </h1>
</div>
<div className="lg:col-span-5 flex flex-col justify-end lg:pb-6 pl-0 lg:pl-10">
<div className="lg:border-l border-white/10 lg:pl-10 space-y-8">
<p className="text-sm lg:text-base text-gray-400 font-light leading-relaxed max-w-md" style={{}}>
                            Juridisk expertis med över 40 års erfarenhet. Vi stöttar privatpersoner och företag genom hela den juridiska processen med engagemang och precision.
                        </p>
<a className="group inline-flex items-center gap-4 mt-4" href="#om-oss">
<div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300">
<svg className="w-3.5 h-3.5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<span className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/70 group-hover:text-white transition-colors" style={{}}>
                                Upptäck mer
                            </span>
</a>
</div>
</div>
</div>
</section>

<section className="lg:py-48 text-[#1a1a1a] bg-[#F9F8F6] w-full pt-32 pb-32 relative" id="om-oss">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">

<div className="h-16 w-px bg-[#C4A470] mb-12"></div>

<h2 className="md:text-5xl lg:text-7xl leading-[1.1] text-[#111] text-4xl tracking-tight font-serif max-w-5xl mb-12">
                    Med över <span className="text-[#C4A470] font-playfair">40 års erfarenhet</span> och specialistkompetens inom flera rättsområden erbjuder vi juridisk rådgivning av <span className="font-playfair">högsta klass.</span>
</h2>

<div className="w-12 h-px bg-[#C4A470] mb-10"></div>

<p className="text-xs md:text-sm text-[#666] leading-relaxed max-w-lg mx-auto font-light" style={{}}>
                    Vi finns vid din sida från första kontakt till avslutat ärende. Med personligt engagemang och djup kunskap säkerställer vi att dina intressen alltid sätts i första rummet.
                </p>
</div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div>
</section>

<section className="lg:py-32 overflow-hidden text-black bg-white w-full pt-24 pb-24">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

<div className="flex flex-col justify-center">
<span className="text-[10px] tracking-[0.25em] text-[#C4A470] uppercase font-medium mb-6" style={{}}>
                            Vilka vi är
                        </span>
<h2 className="font-serif text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-8 text-[#1a1a1a] font-playfair" style={{}}>
                            Vi hanterar juridiken, 
                            <span className="text-[#9ca3af] font-playfair" style={{}}>så du kan fokusera på livet.</span>
</h2>
<div className="space-y-6 text-[#666] font-light leading-relaxed mb-12 text-sm lg:text-[15px] max-w-lg">
<p className="" style={{}}>
                                Adekvat Juridik hjälper enskilda personer och företag att hantera juridiska problem, konflikter och avtal på ett effektivt och begripligt sätt.
                            </p>
<p className="" style={{}}>
                                Hos oss möter du kunniga jurister som finns vid din sida från första kontakt till avslutat ärende – oavsett om det gäller en tvist, ett avtal eller framtidsplanering.
                            </p>
</div>

<div className="w-full h-px bg-gray-100 mb-10"></div>

<div className="grid grid-cols-3 gap-8">

<div className="flex flex-col items-start">
<div className="text-[#C4A470] mb-5">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h4 className="font-serif text-lg text-[#1a1a1a] mb-2 tracking-tight" style={{}}>Tydliga råd</h4>
<p className="text-[9px] tracking-widest uppercase text-gray-400 font-medium leading-relaxed" style={{}}>Vi krånglar inte till det.</p>
</div>

<div className="flex flex-col items-start">
<div className="text-[#C4A470] mb-5">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h4 className="font-serif text-lg text-[#1a1a1a] mb-2 tracking-tight" style={{}}>Raka besked</h4>
<p className="text-[9px] tracking-widest uppercase text-gray-400 font-medium leading-relaxed" style={{}}>Ärlighet varar längst.</p>
</div>

<div className="flex flex-col items-start">
<div className="text-[#C4A470] mb-5">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h4 className="font-serif text-lg text-[#1a1a1a] mb-2 tracking-tight" style={{}}>Personligt</h4>
<p className="text-[9px] tracking-widest uppercase text-gray-400 font-medium leading-relaxed" style={{}}>Ditt ärende är unikt.</p>
</div>
</div>
</div>

<div className="relative h-[650px] lg:h-[750px] w-full group overflow-hidden">
<div className="absolute inset-0 w-full h-full">
<img alt="Suit Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff6c94fb-dd52-4770-a6cb-3510b4571bb2_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F9F8F6]" id="rattsomraden">
<div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16">
<h2 className="lg:text-5xl uppercase text-4xl text-[#1a1a1a] tracking-widest font-playfair mb-6" style={{}}>
                        Rättsområden</h2>
<div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
<p className="text-gray-500 font-light text-sm lg:text-base" style={{}}>
                        Vi erbjuder kvalificerad juridisk hjälp inom bland annat:
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start" onclick="window.location.href='juridisk-radgivning.html'" role="button">
<div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Juridisk Rådgivning</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Allmänna juridiska frågor, avtal, genomgång av handlingar.</p>
<div className="mt-auto">
<span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                                Läs mer <svg className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start" onclick="window.location.href='tvister.html'" role="button">
<div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Tvister</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Processer i och utanför domstol, medling och förhandling.</p>
<div className="mt-auto">
<span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                                Läs mer <svg className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start" onclick="window.location.href='konsultverksamhet.html'" role="button">
<div className="w-12 h-12 rounded-full border border-[#EBE5DA] flex items-center justify-center text-[#C4A470] mb-6 group-hover:border-[#C4A470] transition-colors">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-xl text-[#1a1a1a] font-serif mb-4">Konsultverksamhet</h3>
<p className="text-xs text-gray-500 font-light leading-relaxed mb-6">Löpande stöd till företag och organisationer i vardagen.</p>
<div className="mt-auto">
<span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors cursor-pointer font-medium text-[#C4A470] tracking-[0.15em]">
                                Läs mer <svg className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>

<div className="flex flex-col group hover:-translate-y-1 transition-transform duration-300 cursor-pointer bg-white h-full pt-10 pr-10 pb-10 pl-10 items-start" onclick="window.location.href='foretagsoverlatelser.html'" role="button">
<div className="flex group-hover:border-[#C4A470] transition-colors text-[#C4A470] w-12 h-12 border-[#EBE5DA] border rounded-full mb-6 items-center justify-center">
<svg className="stroke-[1.5] w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="font-serif text-xl text-[#1a1a1a] mb-4">Företagsöverlåtelser</h3>
<p className="leading-relaxed text-xs font-light text-gray-500 mb-6">Rådgivning, avtal och förhandling vid köp och försäljning.</p>
<div className="mt-auto">
<span className="inline-flex items-center text-[10px] uppercase group-hover:text-[#1a1a1a] transition-colors font-medium text-[#C4A470] tracking-[0.15em]">
                                Läs mer <svg className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</div>
</div>

<div className="mt-20 text-center">
<p className="text-sm italic text-gray-400 font-serif" onclick="window.location.href='/#kontakt'" role="button">
                        Kontakta oss gärna om du är osäker på om ditt ärende faller inom våra områden
                    </p>
</div>
</div>
</section>

<section className="lg:py-32 text-white bg-[#03052b] pt-24 pb-24" id="prislista">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

<div className="">
<h2 className="lg:text-5xl uppercase leading-tight text-4xl tracking-widest font-playfair mb-4">
                    Rättshjälp 
                    <span className="italic font-normal text-[#C4A470] font-playfair" style={{}}>&amp;</span> Arvode
                    </h2>
<div className="w-12 h-px bg-[#C4A470] mb-12"></div>

<div className="bg-[#050615] border-white/5 border px-12 py-12 relative">
<span className="absolute top-8 right-8 text-[10px] tracking-[0.2em] uppercase text-gray-500 font-medium" style={{}}>Erbjudande</span>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#C4A470] mb-8">
<svg className="w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-3xl text-white tracking-tight font-playfair mb-2">1 timmes fri konsultation</h3>
<p className="font-serif italic text-[#C4A470] text-lg mb-8" style={{}}>Värde 2 500 kr</p>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-10 max-w-sm" style={{}}>
                            Vi erbjuder alltid ett kostnadsfritt första möte för att gå igenom din situation och bedöma hur vi bäst kan hjälpa dig.
                        </p>
<a className="inline-flex items-center text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:text-[#C4A470] transition-colors group" href="#boka" style={{}}>
                            Boka tid nu <svg className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col justify-center space-y-10 lg:pt-8">

<div className="flex gap-8 group">
<div className="flex-shrink-0 pt-1">
<div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 italic font-serif text-lg group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300" style={{}}>1</div>
</div>
<div className="flex flex-col">
<h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Timarvode &amp; Fakturering</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed mb-4 max-w-lg" style={{}}>
                            Vi debiterar per timme och fakturerar normalt när ärendet är avslutat. I vissa fall kan vi be om ett löpande förskott till vårt klientmedelskonto. Detta dras sedan av från det slutliga arvodet när uppdraget avslutas.
                            </p>
<a className="hover:text-white transition-colors underline-offset-4 hover:underline text-xs text-[#C4A470]" href="prislista.html">Se fullständig prislista</a>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="flex gap-8 group">
<div className="flex-shrink-0 pt-1">
<div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"></path></svg>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Fasta Priser</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg" style={{}}>
                            Vid upprättande av exempelvis testamente, äktenskapsförord eller samboavtal tillämpar vi ofta fasta priser för att ge dig trygghet och överskådlighet. Kontakta oss för aktuella prisuppgifter.
                            </p>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="flex gap-8 group">
<div className="flex-shrink-0 pt-1">
<div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:border-[#C4A470]/50 group-hover:text-[#C4A470] transition-colors duration-300">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-2xl text-white tracking-tight font-playfair mb-3">Rättsskydd &amp; Försäkring</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-lg" style={{}}>
                            I många ärenden har du rätt till ersättning genom rättsskydd i din hemförsäkring eller företagsförsäkring. Vi hjälper dig att kontakta försäkringsbolaget och utreda om du kan använda rättsskyddet.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="lg:pt-32 text-[#1a1a1a] bg-white border-gray-100 border-t pt-24 pb-8" id="kontakt">
<div className="max-w-[1200px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16">
<h2 className="lg:text-5xl text-4xl text-black tracking-tight font-playfair mb-4">Kontakta oss</h2>
<div className="w-12 h-px bg-[#C4A470] mx-auto mb-8"></div>
<p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed" style={{}}>
            Vi ser fram emot att höra från dig. Kontakta oss för en kostnadsfri konsultation.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mb-20 gap-x-12 gap-y-12">

<div className="flex flex-col">

<form className="space-y-4 mb-12">
<input className="w-full border border-gray-200 px-5 py-4 text-sm focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm" placeholder="Namn *" type="text"/>
<input className="focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all placeholder-gray-400 text-sm font-light bg-white w-full border-gray-200 border rounded-sm pt-4 pr-5 pb-4 pl-5" placeholder="E-post *" type="email"/>
<input className="focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all placeholder-gray-400 text-sm font-light bg-white w-full border-gray-200 border rounded-sm pt-4 pr-5 pb-4 pl-5" placeholder="Telefon" type="tel"/>
<input className="w-full border border-gray-200 px-5 py-4 text-sm focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm" placeholder="Ämne *" type="text"/>
<textarea className="w-full border border-gray-200 px-5 py-4 text-sm focus:outline-none focus:border-[#C4A470] focus:ring-1 focus:ring-[#C4A470] transition-all bg-white placeholder-gray-400 font-light rounded-sm resize-none" placeholder="Meddelande *" rows="5"></textarea>
<button className="w-full bg-[#C4A470] hover:bg-[#b39360] text-white font-medium uppercase tracking-widest text-[11px] py-4 transition-colors flex items-center justify-center gap-2 rounded-sm mt-2 shadow-sm" style={{}} type="button">
<svg className="lucide lucide-send w-3.5 h-3.5 stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg> Skicka meddelande
                            </button>
</form>

<div className="space-y-8 pl-1">

<div className="flex gap-5 group">
<div className="text-[#C4A470] mt-1">
<svg className="lucide lucide-phone w-5 h-5 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384">
</path>
</svg>
</div>
<div className="">
<h4 className="text-lg text-[#1a1a1a] tracking-tight font-playfair mb-1">Telefon</h4>
<p className="text-sm text-gray-500 font-light" style={{}}>+46 (0)123-456 78</p>
</div>
</div>

<div className="flex gap-5 group">
<div className="text-[#C4A470] mt-1">
<svg className="lucide lucide-mail w-5 h-5 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</div>
<div className="">
<h4 className="text-lg text-[#1a1a1a] tracking-tight font-playfair mb-1">E-post</h4>
<a className="text-sm text-gray-500 font-light hover:text-[#C4A470] transition-colors" href="mailto:info@adekvat-juridik.se" style={{}}>info@adekvat-juridik.se</a>
</div>
</div>

<div className="flex gap-5 group gap-x-5 gap-y-5">
<div className="text-[#C4A470] mt-1">
</div>
<div className="">
</div>
</div>
</div>
</div>

<div className="hidden md:flex min-h-[300px] lg:min-h-[400px] justify-center lg:-translate-y-16 h-full items-center">
<img alt="Adekvat Juridik Monogram" className="mix-blend-multiply w-auto h-72 md:h-80 lg:h-96 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/993d51c5-c52c-48fe-9e05-82911667c3ff_800w.png"/>
</div>

<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-wider font-medium">
<p style={{}}>© 2024 Adekvat Juridik. Alla rättigheter förbehållna.</p>
<div className="flex gap-8 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#" style={{}}>Integritetspolicy</a>
<a className="hover:text-black transition-colors" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</div></footer></div>
    </>
  );
}
