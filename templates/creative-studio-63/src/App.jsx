import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      // Navigation Mobile
      const menuBtn = document.getElementById('mobile-menu-btn');
      const closeBtn = document.getElementById('mobile-menu-close');
      const menuIcon = document.getElementById('menu-icon');
      const closeIcon = document.getElementById('close-icon');
      const mobileMenu = document.getElementById('mobile-menu');
      const mobileLinks = document.querySelectorAll('.mobile-link');

      function openMenu() {
        if (mobileMenu) {
          mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
          mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = 'hidden';
          menuIcon.classList.add('opacity-0');
          closeIcon.classList.remove('opacity-0');
        }
      }

      function closeMenu() {
        if (mobileMenu) {
          mobileMenu.classList.add('opacity-0', 'pointer-events-none');
          mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
          document.body.style.overflow = '';
          menuIcon.classList.remove('opacity-0');
          closeIcon.classList.add('opacity-0');
        }
      }

      if (menuBtn) menuBtn.addEventListener('click', () => {
        if (mobileMenu.classList.contains('opacity-0')) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

      // Cookie Management System Logic
      const cookieManager = {
          banner: document.getElementById('cookie-banner'),
          modal: document.getElementById('cookie-settings-modal'),
          checkboxes: {
              analytics: document.getElementById('cookie-analytics'),
              marketing: document.getElementById('cookie-marketing')
          },

          init: function() {
              // Check if consent is already stored
              const consent = localStorage.getItem('bila_cookie_consent');
              if (!consent) {
                  this.showBanner();
              } else {
                  this.applyConsent(JSON.parse(consent));
              }
          },

          showBanner: function() {
              if (this.banner) {
                  // Small delay for animation entrance
                  setTimeout(() => {
                      this.banner.classList.remove('translate-y-24', 'opacity-0');
                  }, 1000);
              }
          },

          hideBanner: function() {
              if (this.banner) {
                  this.banner.classList.add('translate-y-24', 'opacity-0');
                  // Remove from DOM after animation if needed, or just hide
                  setTimeout(() => this.banner.style.display = 'none', 500);
              }
          },

          openSettings: function() {
              // Pre-fill checkboxes based on current saved state (or default false)
              const consent = JSON.parse(localStorage.getItem('bila_cookie_consent') || '{"analytics": false, "marketing": false}');
              if (this.checkboxes.analytics) this.checkboxes.analytics.checked = consent.analytics;
              if (this.checkboxes.marketing) this.checkboxes.marketing.checked = consent.marketing;

              if (this.modal) {
                  this.modal.classList.remove('hidden');
                  document.body.style.overflow = 'hidden'; // Prevent scrolling
              }
          },

          closeSettings: function() {
              if (this.modal) {
                  this.modal.classList.add('hidden');
                  document.body.style.overflow = '';
              }
          },

          acceptAll: function() {
              const consent = { necessary: true, analytics: true, marketing: true };
              localStorage.setItem('bila_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.hideBanner();
          },

          refuseAll: function() {
              const consent = { necessary: true, analytics: false, marketing: false };
              localStorage.setItem('bila_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.hideBanner();
          },

          savePreferences: function() {
              const consent = {
                  necessary: true,
                  analytics: this.checkboxes.analytics ? this.checkboxes.analytics.checked : false,
                  marketing: this.checkboxes.marketing ? this.checkboxes.marketing.checked : false
              };
              localStorage.setItem('bila_cookie_consent', JSON.stringify(consent));
              this.applyConsent(consent);
              this.closeSettings();
              this.hideBanner();
          },

          applyConsent: function(consent) {
              console.log('Applying cookie consent:', consent);

              // Logic to enable scripts based on consent
              if (consent.analytics) {
                  // Example: Enable Google Analytics
                  // window.dataLayer = window.dataLayer || [];
                  // function gtag(){dataLayer.push(arguments);}
                  // gtag('js', new Date());
                  // gtag('config', 'UA-XXXXX-Y');
                  console.log('Analytics scripts enabled');
              }

              if (consent.marketing) {
                  // Example: Enable Meta Pixel
                  console.log('Marketing scripts enabled');
              }
          }
      };

      // Initialize Cookie Manager on load
      window.addEventListener('DOMContentLoaded', () => {
          cookieManager.init();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
<nav className="flex adaptive-text w-full max-w-[90rem] mx-auto px-8 py-8 items-center justify-between pointer-events-auto">
<a className="hover:opacity-80 transition-opacity z-50 text-2xl italic text-zinc-950 font-instrument-serif relative" href="#">
          Bila.
        </a>

<div className="hidden md:flex gap-10 text-slate-950 gap-x-10 gap-y-10 items-center">
<a className="hover:opacity-70 transition-opacity text-lg font-medium" href="/services">
            Services
          </a>
<a className="hover:opacity-70 transition-opacity text-lg font-medium" href="/portfolio">
            Portfolio
          </a>
<a className="hover:opacity-70 transition-opacity text-lg font-medium" href="/agence">
            L'agence
          </a>
</div>

<a className="hidden hover:bg-white hover:text-black transition-colors md:block text-lg font-medium text-zinc-950 border-slate-950 border rounded-full pt-2 pr-6 pb-2 pl-6" href="/contact">
          Discutons
        </a>

<button aria-label="Menu" className="md:hidden relative z-50 p-1" id="mobile-menu-btn">
<svg className="transition-opacity duration-300" fill="none" height="32" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16"></path>
<path d="M4 6h16"></path>
<path d="M4 18h16"></path>
</svg>
<svg className="transition-opacity duration-300 opacity-0 absolute top-1 left-1" fill="none" height="32" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</nav>
</header>


<main className="relative w-full flex flex-col">

<section className="flex flex-col overflow-hidden animate-gradient-bg md:min-h-[110vh] md:pt-40 w-full min-h-[90vh] z-0 pt-32 relative items-center justify-start">

<div className="relative z-10 text-center px-4 adaptive-text mt-12 md:mt-20 pb-40">
<h1 className="text-[15vw] md:text-[12vw] leading-[0.85] tracking-tighter opacity-95 animate-hero-reveal">
            Bila
            <br/>
<span className="font-light italic opacity-90">Designs.</span>
</h1>
</div>

<div className="hill-curve flex bg-[#Fdfcf8] w-full h-[35vh] z-20 absolute bottom-0 left-0 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] justify-center items-start pt-12 md:pt-16">
<a className="animate-gradient-bg hover:opacity-90 transition-all flex gap-x-2 gap-y-2 items-center group text-sm font-medium text-stone-900 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" href="#intro" style={{boxShadow: '0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3)', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8))', -BorderRadiusBefore: '9999px'}}>
<span className="group-hover:text-black transition-colors text-sm font-medium text-stone-800 tracking-tight">
    Découvrir
  </span>
<svg className="w-4 h-4 text-stone-700 group-hover:text-black transition-colors group-hover:translate-x-0.5 duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<style>
    [style*="--border-gradient"]::before {
      content: "";
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: var(--border-radius-before, inherit);
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      background: var(--border-gradient);
      pointer-events: none;
    }
  </style>
</a>
</div>
</section>

<section className="md:pb-32 -mt-1 bg-[#Fdfcf8] z-20 pt-12 pb-20 relative" id="intro">
<div className="md:px-12 max-w-[90rem] mx-auto px-6">

<div className="max-w-4xl mx-auto text-center mb-32 scroll-mt-32" id="agence">
<p className="md:text-5xl leading-[1.15] text-3xl font-medium text-stone-800 tracking-tight">Nous sommes un studio indépendant créant des <span className="serif md:text-6xl text-4xl italic text-teal-600">
                expériences digitales
              </span> à travers la conception de sites web clairs, fonctionnels et durables.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-32 gap-x-12 gap-y-20 scroll-mt-32" id="portfolio">

<article className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 mb-6">
<div className="absolute inset-0 bg-stone-300 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center bg-[#E8E6E1]">
<div className="w-32 h-32 rounded-full bg-orange-400 mix-blend-multiply filter blur-2xl opacity-60"></div>
<div className="w-40 h-40 rounded-full bg-blue-400 mix-blend-multiply filter blur-2xl opacity-60 -ml-12"></div>
</div>
</div>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex justify-between items-center border-t border-stone-300 pt-5 min-h-[5rem]">
<div className="">
<h3 className="md:text-4xl leading-none text-3xl text-stone-900 mb-1">
                    Orion security
                  </h3>
<span className="text-lg text-stone-500">
                    Sécurité privée, projet web
                  </span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-bold uppercase tracking-widest text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    Voir le site
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 mb-6">
<div className="absolute inset-0 bg-stone-300 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center bg-[#E8E6E1]">
<div className="w-32 h-32 rounded-full bg-red-500 mix-blend-multiply filter blur-2xl opacity-60"></div>
<div className="w-40 h-40 rounded-full bg-slate-500 mix-blend-multiply filter blur-2xl opacity-60 -ml-12"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-center border-t border-stone-300 pt-5 min-h-[5rem]">
<div className="">
<h3 className="md:text-4xl leading-none text-3xl text-stone-900 mb-1">
                    Fremont-Bousso
                  </h3>
<span className="text-lg text-stone-500">
                    Avocate indépendante, projet web
                  </span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-bold uppercase tracking-widest text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    Voir le site
                    <svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 mb-6">
<div className="absolute inset-0 bg-stone-300 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center bg-[#E8E6E1]">
<div className="w-32 h-32 rounded-full bg-[#AA7A56] mix-blend-multiply filter blur-2xl opacity-60"></div>
<div className="w-40 h-40 rounded-full bg-[#232F42] mix-blend-multiply filter blur-2xl opacity-60 -ml-12"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-center border-t border-stone-300 pt-5 min-h-[5rem]">
<div className="">
<h3 className="md:text-4xl leading-none text-3xl text-stone-900 mb-1">
                    FOCUS emlyon
                  </h3>
<span className="text-lg text-stone-500">
                    association audiovisuel, projet web
                  </span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-bold uppercase tracking-widest text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    Voir le site
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200 mb-6">
<div className="absolute inset-0 bg-stone-300 group-hover:scale-105 transition-transform duration-700 ease-in-out">
<div className="w-full h-full flex items-center justify-center bg-[#E8E6E1]">
<div className="w-32 h-32 rounded-full bg-[#6EC6D9] mix-blend-multiply filter blur-2xl opacity-60"></div>
<div className="w-40 h-40 rounded-full bg-gray-400 mix-blend-multiply filter blur-2xl opacity-60 -ml-12"></div>
</div>
</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-center border-t border-stone-300 pt-5 min-h-[5rem]">
<div className="">
<h3 className="md:text-4xl leading-none text-3xl text-stone-900 mb-1">
                    Auravocats
                  </h3>
<span className="text-lg text-stone-500">
                    Cabinet d'avocats, projet web
                  </span>
</div>
<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-bold uppercase tracking-widest text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                    Voir le site
                    <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</span>
</div>
</div>
</article>
</div>

<div className="mt-40 mb-20 scroll-mt-32" id="services">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 flex flex-col items-start">
<h2 className="md:text-5xl serif text-4xl italic text-stone-900 mb-8">
                  Notre expertise
                </h2>
<a className="inline-flex items-center gap-3 hover:bg-teal-600 transition-all duration-300 hover:shadow-xl group text-lg font-medium text-white bg-stone-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="/portfolio">
                  Voir le portfolio
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="md:col-span-8 flex flex-col">

<div className="group py-8 border-b border-stone-300 cursor-pointer overflow-hidden transition-all duration-500">
<div className="flex items-center justify-between mb-2">
<span className="md:text-3xl text-2xl font-medium text-stone-400 group-hover:text-stone-900 transition-colors duration-300">
                      Sites webs
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
<svg className="text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl pt-4">
<p className="leading-relaxed text-lg font-light text-stone-600">Conception de plateformes digitales immersives et performantes. Nous utilisons des outils de nouvelle génération pour concevoir rapidement des sites web fiables, clairs et efficaces.</p>
<div className="flex gap-3 mt-4 text-sm font-medium text-teal-600 uppercase tracking-wide">
<span>• UX/UI Design</span>
<span>• Développement</span>
<span>• E-commerce</span>
</div>
</div>
</div>
</div>
</div>

<div className="group py-8 border-b border-stone-300 cursor-pointer overflow-hidden transition-all duration-500">
<div className="flex items-center justify-between mb-2">
<span className="md:text-3xl text-2xl font-medium text-stone-400 group-hover:text-stone-900 transition-colors duration-300">
                      Rebranding
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
<svg className="text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl">
<p className="text-lg text-stone-600 leading-relaxed font-light">
                          Refonte complète de l'identité de marque. Nous
                          redéfinissons votre territoire visuel et verbal pour
                          assurer une cohérence totale sur tous les points de
                          contact, du logo aux supports marketing.
                        </p>
<div className="flex gap-3 mt-4 text-sm font-medium text-teal-600 uppercase tracking-wide">
<span className="">• Logo</span>
<span className="">• Direction Artistique</span>
<span className="">• Charte Graphique</span>
</div>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer overflow-hidden transition-all duration-500 border-stone-300 border-b pt-8 pb-8">
<div className="flex items-center justify-between mb-2">
<span className="md:text-3xl text-2xl font-medium text-stone-400 group-hover:text-stone-900 transition-colors duration-300">
                      Audit &amp; Stratégie
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
<svg className="text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl">
<p className="leading-relaxed text-lg font-light text-stone-600">
                          Analyse approfondie de votre présence en ligne et
                          définition d'une feuille de route claire. Nous
                          identifions les opportunités de croissance pour
                          maximiser votre impact digital.
                        </p>
<div className="flex gap-3 mt-4 text-sm font-medium text-teal-600 uppercase tracking-wide">
<span>• Audit UX</span>
<span className="">• Positionnement</span>
<span className="">• Contenu</span>
</div>
</div>
</div>
</div>
</div>
<div className="group cursor-pointer overflow-hidden transition-all duration-500 border-stone-300 border-b pt-8 pb-8">
<div className="flex items-center justify-between mb-2">
<span className="md:text-3xl group-hover:text-stone-900 transition-colors duration-300 text-2xl font-medium text-stone-400">
                      Stratégie de référencement SEO
                    </span>
<div className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-300 group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
<svg className="text-stone-400 group-hover:text-white group-hover:rotate-90 transition-all duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
<div className="overflow-hidden">
<div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-2xl">
<p className="leading-relaxed text-lg font-light text-stone-600">Analyse de votre visibilité en ligne et définition de stratégies adaptées à vos objectifs. Nous mobilisons différents leviers de référencement pour identifier des axes de croissance concrets et améliorer durablement votre performance digitale.</p>
<div className="flex gap-3 mt-4 text-sm font-medium text-teal-600 uppercase tracking-wide">
<span className="">• Audit SEO</span>
<span className="">• Référencement naturel</span>
<span className="">• Résultat de recherche</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#Fdfcf8] pb-6 px-4 md:px-6 relative z-30" id="contact">
<div className="w-full max-w-[90rem] mx-auto bg-[#07201D] rounded-[2.5rem] md:rounded-[3.5rem] text-[#F0F7F6] py-20 px-6 md:px-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">

<div className="flex justify-center mb-8 opacity-10 text-teal-400">
<svg fill="currentColor" height="56" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3z"></path>
</svg>
</div>

<div className="max-w-5xl mx-auto mb-16">
<h2 className="md:text-7xl leading-[1.1] text-4xl text-white tracking-tight font-instrument-serif mb-8">
              "Tout ce qui peut être imaginé est réel"
            </h2>
<p className="md:text-sm uppercase text-xs font-medium text-teal-400/50 tracking-[0.25em] font-manrope">
              — pablo Picasso
            </p>
</div>

<div className="w-full h-px bg-white/5 mb-16 max-w-6xl mx-auto"></div>

<div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10 items-center justify-center">

<div className="flex items-center gap-3 text-teal-400/60 uppercase tracking-[0.15em] text-xs font-bold font-manrope">
<div className="w-1.5 h-1.5 rounded-full bg-teal-600/80"></div>
<span className="">Lyon, France</span>
</div>

<nav className="flex flex-wrap justify-center gap-8 md:gap-16 text-teal-100/80 uppercase tracking-[0.15em] text-xs font-bold font-manrope">
<a className="hover:text-white transition-colors" href="/services">
                Services
              </a>
<a className="hover:text-white transition-colors" href="/portfolio">
                Portfolio
              </a>
<a className="hover:text-white transition-colors" href="/agence">
                L'agence
              </a>
<a className="hover:text-white transition-colors" href="/contact">
                Contact
              </a>
</nav>

<nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-teal-400/30 uppercase tracking-[0.1em] text-[10px] font-medium font-manrope">
<a className="hover:text-teal-200/50 transition-colors" href="#">
                Mentions Légales
              </a>

<button className="hover:text-teal-200/50 transition-colors uppercase tracking-[0.1em] text-[10px] font-medium" onclick="cookieManager.openSettings()">
                Gestion des Cookies
              </button>
<a className="hover:text-teal-200/50 transition-colors" href="#">
                Politique de confidentialité
              </a>
</nav>

<div className="flex items-center gap-3 text-teal-400/40 text-xs mt-4">
<span className="font-instrument-serif italic text-2xl text-white opacity-90">
                Bila.
              </span>
<span className="tracking-widest font-manrope text-[10px] mt-1">
                © 2025
              </span>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-[60] bg-[#Fdfcf8] flex flex-col items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<button aria-label="Fermer le menu" className="absolute top-8 right-8 text-stone-900 p-2" id="mobile-menu-close">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
<nav className="flex flex-col items-center gap-8 text-3xl font-instrument-serif italic text-stone-900">
<a className="mobile-link hover:text-teal-600 transition-colors" href="/services">
          Services
        </a>
<a className="mobile-link hover:text-teal-600 transition-colors" href="/portfolio">
          Portfolio
        </a>
<a className="mobile-link hover:text-teal-600 transition-colors" href="/agence">
          L'agence
        </a>
<a className="mobile-link mt-4 px-8 py-3 border border-stone-900 rounded-full font-manrope not-italic text-lg hover:bg-stone-900 hover:text-white transition-all" href="/contact">
          Discutons
        </a>
</nav>
</div>



<div className="fixed bottom-8 right-4 md:bottom-8 md:right-8 z-50 max-w-sm w-[calc(100%-2rem)] bg-white/90 backdrop-blur-md border border-stone-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-2xl p-6 transform transition-all duration-500 flex flex-col gap-4" id="cookie-banner">
<div className="">
<div className="flex items-center gap-2 text-stone-900 font-semibold mb-2">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5 10 10 0 0 0-4 4 4 4 0 0 1-5-5"></path>
</svg>
<span className="">Vie privée &amp; Cookies</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">
          Nous utilisons des cookies pour améliorer votre expérience et analyser
          notre trafic. Vous pouvez choisir vos préférences.
        </p>
</div>
<div className="flex flex-col gap-2">
<div className="flex gap-2 w-full">
<button className="flex-1 py-2.5 px-4 rounded-lg border border-stone-200 text-xs font-bold uppercase tracking-wider text-stone-600 hover:bg-stone-50 transition-colors" onclick="cookieManager.refuseAll()">
            Refuser
          </button>
<button className="flex-1 uppercase hover:bg-teal-700 transition-colors shadow-teal-900/10 text-xs font-bold text-white tracking-wider bg-stone-900 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-lg" onclick="cookieManager.acceptAll()">
            Accepter
          </button>
</div>
<button className="w-full py-2 text-[10px] text-stone-400 font-bold uppercase tracking-widest hover:text-stone-800 transition-colors underline decoration-stone-200 underline-offset-4" onclick="cookieManager.openSettings()">
          Paramétrer les cookies
        </button>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-stone-900/20 backdrop-blur-sm hidden flex items-center justify-center p-4" id="cookie-settings-modal">
<div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-blur-in">

<div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
<h3 className="font-instrument-serif text-2xl italic text-stone-900">
            Préférences cookies
          </h3>
<button className="text-stone-400 hover:text-stone-900 transition-colors p-2 rounded-full hover:bg-stone-100" onclick="cookieManager.closeSettings()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
<p className="text-sm text-stone-500 mb-6">
            Gérez vos préférences de consentement pour les différentes
            catégories de cookies utilisées sur notre site.
          </p>

<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<p className="font-semibold text-stone-900 text-sm mb-1">
                Cookies Essentiels
              </p>
<p className="text-xs text-stone-500 leading-relaxed">
                Nécessaires au fonctionnement technique du site. Ne peuvent être
                désactivés.
              </p>
</div>
<div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full border-2 border-transparent bg-stone-300 transition-colors duration-200 ease-in-out opacity-50">
<span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</div>

<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<p className="font-semibold text-stone-900 text-sm mb-1">
                Analytique &amp; Performance
              </p>
<p className="text-xs text-stone-500 leading-relaxed">
                Nous aident à comprendre comment vous interagissez avec le site
                pour l'améliorer.
              </p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="cookie-analytics" type="checkbox"/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-900"></div>
</label>
</div>

<div className="flex items-start justify-between gap-4">
<div className="flex-1">
<p className="font-semibold text-stone-900 text-sm mb-1">Marketing</p>
<p className="text-xs text-stone-500 leading-relaxed">
                Utilisés pour afficher des publicités pertinentes sur d'autres
                sites.
              </p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="cookie-marketing" type="checkbox"/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-teal-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-stone-900"></div>
</label>
</div>
</div>

<div className="p-6 border-t border-stone-100 bg-stone-50 flex justify-end gap-3">
<button className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-stone-900 hover:bg-stone-200/50 transition-colors" onclick="cookieManager.closeSettings()">
            Annuler
          </button>
<button className="px-6 py-2.5 rounded-lg bg-stone-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-teal-700 transition-colors shadow-lg shadow-teal-900/10" onclick="cookieManager.savePreferences()">
            Enregistrer
          </button>
</div>
</div>
</div>




    </>
  );
}
