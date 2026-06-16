import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        lucide.createIcons();
        
        function toggleDropdown(dropdownId, arrowId, btnId, articleId) {
            const dropdown = document.getElementById(dropdownId);
            const arrow = document.getElementById(arrowId);
            const btn = document.getElementById(btnId);
            const article = document.getElementById(articleId);
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(function(el) {
                if (el.id !== dropdownId) {
                    el.classList.remove('open');
                }
            });
            
            // Reset all other arrows and buttons
            document.querySelectorAll('.dropdown-arrow').forEach(function(el) {
                if (el.id !== arrowId) {
                    el.classList.remove('rotated');
                }
            });
            
            document.querySelectorAll('.dropdown-btn').forEach(function(el) {
                if (el.id !== btnId) {
                    el.classList.remove('active');
                }
            });
            
            document.querySelectorAll('.feature-article').forEach(function(el) {
                if (el.id !== articleId) {
                    el.classList.remove('expanded');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('open');
            arrow.classList.toggle('rotated');
            btn.classList.toggle('active');
            article.classList.toggle('expanded');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abbe90fd-9c3a-4dae-acd5-6a3d77c640af_3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<header className="fixed transition-all duration-300 backdrop-blur-[2px] w-full z-50 border-white/5 border-b top-0" id="main-header">
<div className="lg:px-12 flex h-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0 w-[200px]">
<a className="font-serif text-2xl tracking-tight leading-[0.85] text-white inline-flex flex-col items-start group" href="index.html">
<img alt="Adekvat Juridik" className="block w-auto h-12 object-contain pt-0 pl-2 scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/688b4ed2-0a20-4d21-8680-e661bedf8646_320w.png"/>
</a>
</div>

<nav className="hidden lg:flex flex-1 space-x-10 items-center justify-center">
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="index.html">Hem</a>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="om-oss.html">Om Oss</a>

<div className="relative" id="dropdown-trigger">
<a className="text-[11px] hover:text-white transition-colors uppercase flex items-center gap-1 font-medium text-gray-100 tracking-widest pt-4 pb-4" href="rattsomraden.html">
                    Rättsområden
                    <svg className="transition-transform duration-300 w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="12" id="dropdown-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</a>
</div>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="prislista.html">Prislista</a>
<a className="text-[11px] hover:text-white transition-colors uppercase font-medium text-gray-100 tracking-widest" href="index.html#kontakt">Kontakt</a>
</nav>

<div className="hidden lg:flex items-center justify-end w-[200px]">
<a className="inline-flex items-center justify-center text-[11px] hover:bg-gray-200 transition-colors uppercase font-semibold text-black tracking-widest bg-white rounded-sm pt-3 pr-6 pb-3 pl-6" href="index.html#boka">
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

</div></header>

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
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="index.html">Hem</a>
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
<a className="text-[11px] uppercase tracking-widest font-medium text-gray-300 hover:text-white transition-colors py-4 border-b border-white/5" href="index.html#kontakt">Kontakt</a>
</nav>

<div className="px-6 mt-8">
<a className="block text-center text-[11px] uppercase font-semibold text-black tracking-widest bg-white hover:bg-gray-200 transition-colors rounded-sm py-4" href="index.html#boka">
        Boka konsultation
    </a>
</div>

<div className="px-6 mt-auto pt-12 pb-8">
<a href="index.html">
<img className="object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf00919-6189-4dee-9f65-484d675b6568_800w.png"/>
</a>
</div>
</div>
</div>


<div className="z-10 flex flex-col relative">

<div className="flex flex-col lg:px-12 lg:pt-300 text-center bg-zinc-900 w-full mt-0 mb-0 pt-24 pr-6 pb-20 pl-6 items-center justify-center" id="hem" style={{paddingTop: '6.25rem', paddingBottom: '4.375rem'}}>
<div className="mt-20 mr-0 mb-2 ml-0 px-0">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur font-sans">
<svg className="h-3.5 w-3.5 text-violet-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect "="" height="14" width="20" x="2" y="5="></rect><line className="" x1="2" x2="22" y1="10" y2="10"></line></svg>
          Juridik, skräddarsydd för dig
        </span>
</div>
<h2 className="sm:text-5xl md:text-6xl text-4xl font-light text-white tracking-tight font-playfair mb-5">Transparenta
    priser
  </h2>
<p className="text-lg text-zinc-300 max-w-2xl mr-auto ml-auto">Vi erbjuder ett antal juridiska tjänster till fasta priser
    för att du i förväg ska veta vad ditt ärende kostar. Observera att priserna är ungefärliga och kan justeras
    efter ärendets omfattning.</p>
</div>

<section className="lg:py-28 bg-white w-full pt-20 pb-20" id="features">
<div className="max-w-6xl mx-auto px-4 lg:px-6">

<div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 lg:p-12">

<header className="mb-12 lg:mb-16">
<p className="text-xs font-medium uppercase tracking-[0.26em] text-neutral-400 mb-4">
                            Juridik · Skräddarsydd för dig
                        </p>
<h2 className="sm:text-5xl text-4xl font-medium text-neutral-900 tracking-tight font-playfair">Prislista</h2>
<p className="sm:text-base leading-relaxed text-sm font-light text-neutral-500 max-w-2xl mt-4">Vi erbjuder ett antal juridiska tjänster till fasta priser för att du i förväg ska veta vad ditt ärende kostar. Observera att priserna är ungefärliga och kan justeras
efter ärendets omfattning.</p>
</header>

<div className="space-y-0 divide-y divide-neutral-200">

<div className="feature-item slide-left">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article1" onclick="toggleDropdown('dropdown1', 'arrow1', 'btn1', 'article1')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight font-playfair">
                                    Avtal &amp; bolag
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Vi hjälper dig med avtalsrätt, bolagsbildning och företagsjuridik. Professionell rådgivning för att säkerställa dina affärsintressen.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn1">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown1">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Avtalsgranskning</h4>
<p className="text-sm text-neutral-500 font-light">Granskning av avtal med skriftliga kommentarer</p>
</div>
<span className="text-base font-medium text-[#C4A470]">5 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Standardavtal</h4>
<p className="text-sm text-neutral-500 font-light">Upprättande av t.ex. konsult- eller sekretessavtal</p>
</div>
<span className="text-base font-medium text-[#C4A470]">8 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Bolagsstart – paket</h4>
<p className="text-sm text-neutral-500 font-light">Juridik vid bolagsstart, inklusive handlingar</p>
</div>
<span className="text-base font-medium text-[#C4A470]">15 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Aktieägaravtal small business</h4>
<p className="text-sm text-neutral-500 font-light">Aktieägaravtal för 2–4 delägare</p>
</div>
<span className="text-base font-medium text-[#C4A470]">20 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-right">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article2" onclick="toggleDropdown('dropdown2', 'arrow2', 'btn2', 'article2')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-neutral-900 font-medium font-playfair">
                                    Hyresjuridik
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Expert rådgivning vid hyrestvister, uppsägningar och kontraktsfrågor. Vi säkerställer dina rättigheter som hyresvärd eller hyresgäst.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn2">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown2">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Genomgång av hyreskontraktet</h4>
<p className="text-sm text-neutral-500 font-light">Förhandling i hyresnämnden och ev. domstolen</p>
</div>
<span className="text-base font-medium text-[#C4A470]">8 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-left">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article3" onclick="toggleDropdown('dropdown3', 'arrow3', 'btn3', 'article3')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight font-playfair">
                                    Tvister
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Erfaren representation i tvistlösning, både i och utanför domstol. Vi står vid din sida genom hela rättsprocessen med kompetens och engagemang.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn3">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown3">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Tvisteanalys</h4>
<p className="text-sm text-neutral-500 font-light">Genomgång, möte och skriftlig bedömning</p>
</div>
<span className="text-base font-medium text-[#C4A470]">8 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Kravbrev/ombudsbrev</h4>
<p className="text-sm text-neutral-500 font-light">Upprättande av kravbrev</p>
</div>
<span className="text-base font-medium text-[#C4A470]">6 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Svaromål – enklare tvist</h4>
<p className="text-sm text-neutral-500 font-light">Svaromål efter genomgång av underlag</p>
</div>
<span className="text-base font-medium text-[#C4A470]">15 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-right">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article4" onclick="toggleDropdown('dropdown4', 'arrow4', 'btn4', 'article4')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-neutral-900 font-medium font-playfair">
                                    Företag
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Komplett juridiskt stöd för företag – från avtalsrätt och bolagsbildning till tvistlösning och förhandlingar. Vi skyddar dina affärsintressen.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn4">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown4">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Lilla företagsjuridik – månadspris</h4>
<p className="text-sm text-neutral-500 font-light">Löpande juridiskt stöd per månad</p>
</div>
<span className="text-base font-medium text-[#C4A470]">5 000–10 000 kr/mån</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">GDPR-/policygenomgång – light</h4>
<p className="text-sm text-neutral-500 font-light">Översyn av rutiner och policyunderlag</p>
</div>
<span className="text-base font-medium text-[#C4A470]">15 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">HR-/anställningspaket</h4>
<p className="text-sm text-neutral-500 font-light">Avtalsmallar, klausuler och enkel policy</p>
</div>
<span className="text-base font-medium text-[#C4A470]">12 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-left">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article5" onclick="toggleDropdown('dropdown5', 'arrow5', 'btn5', 'article5')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight font-playfair">
                                    Familjerätt
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Vi hjälper dig med äktenskapsförord, vårdnadstvister, bodelning och skilsmässa. Personlig rådgivning i känsliga familjerättsliga frågor med fokus på ditt bästa.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn5">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown5">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Äktenskapsförord</h4>
<p className="text-sm text-neutral-500 font-light">Rådgivning och upprättande av äktenskapsförord</p>
</div>
<span className="text-base font-medium text-[#C4A470]">5 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Samboavtal + skuldebrev</h4>
<p className="text-sm text-neutral-500 font-light">Samboavtal och skuldebrev kopplat till bostad</p>
</div>
<span className="text-base font-medium text-[#C4A470]">7 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Bodelningsavtal (överens parter)</h4>
<p className="text-sm text-neutral-500 font-light">Framtagande av bodelningsavtal</p>
</div>
<span className="text-base font-medium text-[#C4A470]">15 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-right">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article6" onclick="toggleDropdown('dropdown6', 'arrow6', 'btn6', 'article6')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl tracking-tight text-neutral-900 font-medium font-playfair">
                                    Arvsrätt
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Stöd vid arvskiften, testamenten och boutredningar. Vi guidar dig genom processen med omsorg och juridisk expertis för att säkerställa rättvisa lösningar.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn6">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown6">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Testamente – enkel</h4>
<p className="text-sm text-neutral-500 font-light">Rådgivning och upprättande av testamente</p>
</div>
<span className="text-base font-medium text-[#C4A470]">5 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Inbördes testamente</h4>
<p className="text-sm text-neutral-500 font-light">Testamente för makar eller sambor</p>
</div>
<span className="text-base font-medium text-[#C4A470]">8 000 kr</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Boutredning &amp; arvskifte (överens)</h4>
<p className="text-sm text-neutral-500 font-light">Arvskifteshandling och visst stöd</p>
</div>
<span className="text-base font-medium text-[#C4A470]">20 000 kr</span>
</div>
</div>
</div>
</div>
</div>

<div className="feature-item slide-left">
<article className="feature-article flex flex-col sm:flex-row sm:items-center lg:py-10 group transition-colors -mx-6 pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 rounded-lg cursor-pointer" id="article7" onclick="toggleDropdown('dropdown7', 'arrow7', 'btn7', 'article7')">
<h3 className="flex-1 text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-900 tracking-tight font-playfair">
                                    Rådgivning
                                </h3>
<p className="flex-[2] text-sm sm:text-base leading-relaxed text-neutral-500 font-light">
                                    Allmän juridisk rådgivning för privatpersoner och företag. Vi erbjuder skräddarsydda lösningar och vägledning för alla typer av juridiska frågor.
                                </p>
<button className="dropdown-btn ml-auto inline-flex items-center justify-center h-11 w-11 flex-none rounded-full bg-gradient-to-br from-[#C4A470]/20 to-[#C4A470]/5 text-[#C4A470] hover:bg-[#C4A470] hover:text-white outline-none border border-[#C4A470]/20" id="btn7">
<svg className="w-5 h-5 dropdown-arrow" fill="none" height="24" id="arrow7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</article>
<div className="dropdown-content -mx-6 px-6" id="dropdown7">
<div className="dropdown-inner">
<div className="bg-neutral-50 rounded-lg p-6 mb-4 space-y-4">
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">"Fråga juristen" – möte</h4>
<p className="text-sm text-neutral-500 font-light">30–60 min juridisk rådgivning</p>
</div>
<span className="text-base font-medium text-[#C4A470]">2 000 kr (privat inkl. moms)</span>
</div>
<div className="pricing-item flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-neutral-200 last:border-0 gap-2">
<div className="flex-1">
<h4 className="text-base font-medium text-neutral-800">Dokumentgranskning – mini</h4>
<p className="text-sm text-neutral-500 font-light">Snabb genomgång av ett dokument</p>
</div>
<span className="text-base font-medium text-[#C4A470]">4 000 kr</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="lg:pt-32 text-[#1a1a1a] bg-white border-gray-100 border-t pt-32 pb-8" id="kontakt">
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
</div></footer>
</div>


    </>
  );
}
