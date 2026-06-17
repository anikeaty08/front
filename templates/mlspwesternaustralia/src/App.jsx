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
colors: {
brand: {
navy: '#0E1A2B',
dark: '#1F1F1F',
green: '#2F5D50',
sand: '#F4EFE8',
light: '#F5F5F5',
}
},
spacing: {
'section-sm': '60px',
'section-md': '80px',
'section-lg': '120px',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Header scroll effect
            const header = document.getElementById('main-header');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.remove('bg-transparent', 'border-white/10');
                    header.classList.add('bg-brand-navy', 'border-transparent', 'shadow-sm');
                } else {
                    header.classList.add('bg-transparent', 'border-white/10');
                    header.classList.remove('bg-brand-navy', 'border-transparent', 'shadow-sm');
                }
            }, { passive: true });

            // Mobile Menu Toggle logic
            const menuToggle = document.getElementById('menu-toggle');
            const menuIcon = document.getElementById('menu-icon');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            const toggleMenu = (open) => {
                isMenuOpen = open;
                menuToggle.setAttribute('aria-expanded', isMenuOpen);
                mobileMenu.setAttribute('aria-hidden', !isMenuOpen);
                
                if (isMenuOpen) {
                    mobileMenu.classList.remove('mobile-menu-hidden');
                    mobileMenu.classList.add('mobile-menu-active');
                    menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                    menuToggle.setAttribute('aria-label', 'Close mobile menu');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.remove('mobile-menu-active');
                    mobileMenu.classList.add('mobile-menu-hidden');
                    menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                    menuToggle.setAttribute('aria-label', 'Open mobile menu');
                    document.body.style.overflow = '';
                }
            };

            menuToggle.addEventListener('click', () => {
                toggleMenu(!isMenuOpen);
            });

            // Close menu when clicking a link
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    toggleMenu(false);
                });
            });
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
      

<header className="fixed top-0 left-0 w-full h-[70px] z-50 px-6 md:px-10 lg:px-20 border-b transition-all duration-300 flex items-center justify-between" id="main-header">

<a aria-label="MLSP Home" className="text-2xl lg:text-3xl font-semibold tracking-tighter uppercase z-50 relative text-white focus-ring font-manrope" href="#">
            MLSP
        </a>

<nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-10">
<a className="text-sm font-semibold transition-colors tracking-wide text-white/90 hover:text-white focus-ring font-manrope" href="#platform">Platform</a>
<a className="text-sm font-semibold transition-colors tracking-wide text-white/90 hover:text-white focus-ring font-manrope" href="#programs">Programs</a>
<a className="text-sm font-semibold transition-colors tracking-wide text-white/90 hover:text-white focus-ring font-manrope" href="#roadmap">Roadmap</a>
<a className="text-sm font-semibold transition-colors tracking-wide text-white/90 hover:text-white focus-ring font-manrope" href="#about">About</a>
<a className="text-sm font-semibold transition-colors tracking-wide text-white/90 hover:text-white focus-ring font-manrope" href="#contact">Contact</a>
</nav>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open mobile menu" className="lg:hidden z-50 relative flex items-center justify-center p-2 text-white focus-ring" id="menu-toggle">
<iconify-icon aria-hidden="true" height="28" icon="solar:hamburger-menu-linear" id="menu-icon" width="28"></iconify-icon>
</button>
</header>

<div aria-hidden="true" className="fixed inset-0 bg-brand-navy z-40 flex flex-col justify-center px-8 transition-all duration-300 ease-in-out mobile-menu-hidden" id="mobile-menu">
<nav aria-label="Mobile Navigation" className="flex flex-col gap-8 text-center">
<a className="text-xl font-semibold transition-colors mobile-link text-white hover:text-white/70 focus-ring font-manrope" href="#platform">Platform</a>
<a className="text-xl font-semibold transition-colors mobile-link text-white hover:text-white/70 focus-ring font-manrope" href="#programs">Programs</a>
<a className="text-xl font-semibold transition-colors mobile-link text-white hover:text-white/70 focus-ring font-manrope" href="#roadmap">Roadmap</a>
<a className="text-xl font-semibold transition-colors mobile-link text-white hover:text-white/70 focus-ring font-manrope" href="#about">About</a>
<a className="text-xl font-semibold transition-colors mobile-link text-white hover:text-white/70 focus-ring font-manrope" href="#contact">Contact</a>
</nav>
</div>
<main className="" id="main-content">

<section aria-labelledby="hero-heading" className="relative min-h-[90vh] flex items-center pt-[100px]">

<div aria-hidden="true" className="absolute inset-0 w-full h-full z-0">
<img alt="Aerial view of Western Australia coastline" className="w-full h-full object-cover bg-center" fetchpriority="high" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22fec708-c031-4d89-8746-c023460d2133_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full px-6 md:px-10 lg:px-20 mt-16 md:mt-32">
<div className="max-w-4xl">
<span className="block text-xs md:text-sm font-semibold tracking-widest uppercase text-brand-sand/80 mb-6 font-manrope">
                        MLSP • WA Modular Development Platform
                    </span>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white font-manrope" id="hero-heading">
                        Developing Structured Modular Pathways <br className="hidden lg:block"/> Across Western Australia
                    </h1>
<p className="text-base md:text-lg lg:text-xl text-brand-sand/90 max-w-3xl mt-8 leading-relaxed font-manrope">
                        An independent modular integration initiative coordinating phased tourism and regional housing partnerships.
                    </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-brand-green px-8 py-4 text-sm font-semibold transition-colors hover:bg-brand-green/90 text-white focus-ring font-manrope" href="#platform">
                            Explore the Platform
                        </a>
<a className="inline-flex justify-center items-center border border-white px-8 py-4 text-sm font-semibold transition-colors text-white hover:bg-white hover:text-brand-navy focus-ring font-manrope" href="#contact">
                            Start a Conversation
                        </a>
</div>
</div>
</div>
</section>

<section aria-labelledby="opportunity-heading" className="py-section-sm md:py-section-md lg:py-section-lg bg-white" id="about">
<hr aria-hidden="true" className="border-brand-light max-w-[1100px] mx-auto mb-16 md:mb-24 w-full"/>
<div className="max-w-[1100px] mx-auto px-6 md:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-8 max-w-3xl font-manrope" id="opportunity-heading">
                    The Opportunity in Regional Western Australia
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
<p className="text-base md:text-lg text-brand-dark/80 leading-relaxed font-manrope">
                        Across Western Australia, many regional tourism locations operate with aging accommodation assets and long construction lead times. At the same time, guest expectations continue to evolve toward higher-quality, well-designed, and environmentally integrated experiences.
                    </p>
<div className="space-y-6">
<p className="text-base md:text-lg text-brand-dark/80 leading-relaxed font-manrope">
                            Modular development offers a structured pathway to upgrade tourism infrastructure with greater speed, predictability, and design consistency — when aligned with responsible delivery and compliant construction practices.
                        </p>
<p className="text-base md:text-lg font-semibold text-brand-dark leading-relaxed font-manrope">
                            MLSP exists to coordinate that alignment.
                        </p>
</div>
</div>
</div>
</section>

<section aria-labelledby="platform-heading" className="py-section-sm md:py-section-md lg:py-section-lg bg-brand-sand" id="platform">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-6 font-manrope" id="platform-heading">
                                The Modular Living Solutions Partnership Framework
                            </h2>
<p className="text-base md:text-lg text-brand-dark/80 leading-relaxed max-w-lg font-manrope">
                                We provide a disciplined coordination layer between property owners, manufacturers, and licensed builders to ensure seamless integration of modular assets into existing operational environments.
                            </p>
</div>

<aside aria-label="Compliance Note" className="mt-12 lg:mt-24 pt-8 border-t border-brand-dark/10">
<p className="text-xs md:text-sm text-brand-dark/60 uppercase tracking-widest font-semibold font-manrope">Compliance Note</p>
<p className="text-sm md:text-base text-brand-dark/80 mt-2 font-manrope">
                                MLSP is not a construction company. It works alongside licensed professionals in compliance with WA regulations.
                            </p>
</aside>
</div>

<div className="flex items-center">
<ul className="space-y-8 w-full">
<li className="flex items-start gap-4 pb-6 border-b border-brand-dark/10">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Modular cabin systems sourcing</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Identifying and vetting premium modular manufacturers.</p>
</div>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-brand-dark/10">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Site integration planning</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Strategic placement mapped to topography and operations.</p>
</div>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-brand-dark/10">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Licensed builder alignment</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Coordinating with certified local contractors for installation.</p>
</div>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-brand-dark/10">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:plug-circle-linear" width="24"></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Utility coordination</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Managing connections to existing infrastructure networks.</p>
</div>
</li>
<li className="flex items-start gap-4 pb-6 border-b border-brand-dark/10">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
<div>
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Revenue model structuring</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Financial frameworks designed for partnership yield.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon aria-hidden="true" className="text-brand-green shrink-0 mt-1" height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-brand-dark font-manrope">Phased expansion governance</h3>
<p className="text-sm text-brand-dark/70 mt-1 font-manrope">Controlled rollout strategies based on validated metrics.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section aria-labelledby="programs-heading" className="py-section-sm md:py-section-md lg:py-section-lg bg-white" id="programs">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="order-2 lg:order-1 relative">
<img alt="Premium modular cabin installed in a regional Western Australia tourism park" className="aspect-video lg:aspect-[4/3] w-full object-cover bg-center rounded-sm" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0a60aff-cda4-47c9-89b1-387dbba2cfce_1600w.jpg?w=800&amp;q=80"/>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-brand-dark mb-10 font-manrope" id="programs-heading">
                            Phase 1 — Tourism Park Upgrade Pilot
                        </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<div className="">
<h3 className="text-sm font-semibold tracking-widest uppercase text-brand-dark mb-4 border-b border-brand-dark/10 pb-2 font-manrope">MLSP Coordinates</h3>
<ul className="space-y-3">
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-green rounded-full"></span> Cabin selection
                                    </li>
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-green rounded-full"></span> Integration planning
                                    </li>
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-green rounded-full"></span> Licensed partner alignment
                                    </li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold tracking-widest uppercase text-brand-dark mb-4 border-b border-brand-dark/10 pb-2 font-manrope">Park Operators Coordinate</h3>
<ul className="space-y-3">
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-dark/40 rounded-full"></span> Site preparation
                                    </li>
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-dark/40 rounded-full"></span> Utilities connection
                                    </li>
<li className="text-base text-brand-dark/80 flex items-center gap-2 font-manrope">
<span aria-hidden="true" className="w-1 h-1 bg-brand-dark/40 rounded-full"></span> Daily operations
                                    </li>
</ul>
</div>
</div>
<div className="mt-10 pt-8 border-t border-brand-dark/10">
<p className="text-lg font-semibold text-brand-dark font-manrope">
                                Pilot-first approach validates before expansion.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="why-modular-heading" className="py-section-sm md:py-section-md lg:py-section-lg bg-white" id="why-modular">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
<h2 className="sr-only font-manrope" id="why-modular-heading">Why Modular</h2>
<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:rocket-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Faster Deployment</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Concurrent site preparation and manufacturing significantly reduces overall project timelines.</p>
</li>

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:calculator-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Cost Predictability</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Factory-controlled environments mitigate weather delays and material waste, stabilizing budgets.</p>
</li>

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:buildings-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Reduced Disruption</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Minimized on-site construction hours ensures ongoing tourism operations remain unaffected.</p>
</li>

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:pen-new-square-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Design Consistency</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Standardized architectural detailing guarantees high-quality finishes across every unit.</p>
</li>

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:star-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Guest Experience</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Premium, well-insulated modular builds elevate the standard of regional accommodation.</p>
</li>

<li className="border border-brand-light p-8 md:p-10 flex flex-col justify-start transition-shadow hover:shadow-sm">
<iconify-icon aria-hidden="true" className="text-brand-navy" height="28" icon="solar:leaf-linear" width="28"></iconify-icon>
<h3 className="font-semibold text-lg text-brand-dark mt-6 mb-2 tracking-tight font-manrope">Sustainability Benefits</h3>
<p className="text-sm md:text-base text-brand-dark/70 leading-relaxed font-manrope">Lower site impact, reduced waste, and improved thermal efficiency align with modern standards.</p>
</li>
</ul>
</div>
</section>

<section aria-labelledby="roadmap-heading" className="bg-brand-navy py-section-sm md:py-section-md lg:py-section-lg" id="roadmap">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center text-white font-manrope" id="roadmap-heading">
                    Strategic Implementation Roadmap
                </h2>
<div className="relative mt-12">

<div aria-hidden="true" className="hidden lg:block absolute top-[24px] left-0 w-full h-[1px] z-0 bg-white/20"></div>
<div aria-hidden="true" className="lg:hidden absolute top-0 left-[24px] w-[1px] h-full z-0 bg-white/20"></div>
<ol className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">

<li className="relative flex lg:flex-col items-start gap-6 lg:gap-8">
<div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-navy border-2 border-brand-green flex items-center justify-center shrink-0 z-10 font-semibold text-sm text-white font-manrope">Q1</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-2 text-white font-manrope">Partner Alignment</h3>
<p className="text-sm text-brand-sand/70 font-manrope">Initial engagement, site feasibility studies, and formulation of partnership agreements.</p>
</div>
</li>

<li className="relative flex lg:flex-col items-start gap-6 lg:gap-8">
<div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-navy border-2 flex items-center justify-center shrink-0 z-10 font-semibold text-sm border-white/30 text-white font-manrope">Q2</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-2 text-white font-manrope">Site &amp; Approvals</h3>
<p className="text-sm text-brand-sand/70 font-manrope">Navigating local council requirements, environmental approvals, and civil engineering plans.</p>
</div>
</li>

<li className="relative flex lg:flex-col items-start gap-6 lg:gap-8">
<div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-navy border-2 flex items-center justify-center shrink-0 z-10 font-semibold text-sm border-white/30 text-white font-manrope">Q3</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-2 text-white font-manrope">Manufacturing &amp; Logistics</h3>
<p className="text-sm text-brand-sand/70 font-manrope">Commencement of off-site construction and coordination of heavy transport logistics.</p>
</div>
</li>

<li className="relative flex lg:flex-col items-start gap-6 lg:gap-8">
<div aria-hidden="true" className="w-12 h-12 rounded-full bg-brand-navy border-2 flex items-center justify-center shrink-0 z-10 font-semibold text-sm border-white/30 text-white font-manrope">Q4</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight mb-2 text-white font-manrope">Installation &amp; Review</h3>
<p className="text-sm text-brand-sand/70 font-manrope">On-site assembly by licensed professionals, commissioning, and post-installation validation.</p>
</div>
</li>
</ol>
</div>
<p className="text-center mt-16 md:mt-24 text-brand-sand/70 text-sm md:text-base font-semibold max-w-2xl mx-auto border-t pt-8 border-white/10 font-manrope">
                    Expansion decisions are based on performance validation, not projections.
                </p>
</div>
</section>

<section aria-labelledby="vision-heading" className="bg-brand-light border-t border-brand-dark/10 py-section-sm md:py-section-md lg:py-section-lg px-4 sm:px-6 md:px-8" id="vision">
<div className="max-w-[800px] mx-auto w-full text-center flex flex-col items-center">
<h2 className="text-[28px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-semibold text-brand-dark tracking-tight mb-8 font-manrope" id="vision-heading">
            Beyond Phase 1
        </h2>
<div className="max-w-[720px] w-full text-[15px] sm:text-[16px] lg:text-[18px] leading-[1.6] lg:leading-[1.7] text-brand-dark">
<p className="mb-6 font-manrope">
                Subject to successful pilot outcomes, MLSP intends to explore broader regional modular initiatives across Western Australia.
            </p>
<div className="mb-6 flex flex-col items-center w-full">
<div className="inline-flex flex-col text-left">
<p className="mb-4 font-manrope">Long-term exploration may include:</p>
<ul className="space-y-3 md:space-y-4">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0"></span>
<span className="font-manrope">Regional expansion partnerships</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0"></span>
<span className="font-manrope">Structured development initiatives</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-brand-dark mt-2 shrink-0"></span>
<span className="font-manrope">Broader modular housing pathways</span>
</li>
</ul>
</div>
</div>
<p className="mb-6 font-manrope">
                All future phases remain subject to compliance alignment, feasibility validation, and responsible governance.
            </p>
<p className="font-manrope">
                MLSP prioritises disciplined growth over rapid scale.
            </p>
</div>
</div>
</section>

<section aria-labelledby="contact-heading" className="bg-[#2F5D50] py-[60px] md:py-[80px] lg:py-[120px]" id="contact">
<div className="w-[92%] max-w-[800px] mx-auto text-center font-manrope text-white">

<h2 className="text-[32px] md:text-[36px] lg:text-[40px] font-semibold tracking-tight mb-8" id="contact-heading">
      Partner With MLSP
    </h2>

<p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] max-w-[700px] mx-auto mb-[24px]">
      MLSP welcomes structured discussions with:
    </p>

<ul className="inline-block text-left space-y-[14px] text-[16px] md:text-[17px] lg:text-[18px] mb-[24px] w-full md:w-auto">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
        Caravan park operators
      </li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
        Regional tourism asset owners
      </li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0"></span>
        Licensed builders and delivery partners
      </li>
</ul>

<p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] max-w-[700px] mx-auto mb-[28px] md:mb-[32px]">
      If you are interested in responsible modular integration aligned with regional development opportunities, we welcome a conversation.
    </p>

<a className="inline-flex items-center justify-center bg-white text-[#2F5D50] font-medium px-[28px] py-[14px] rounded min-h-[48px] w-full md:w-auto transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2F5D50]" href="mailto:contact@mlsp.wa">
      Start a Partnership Conversation
    </a>
</div>
</section>
</main>

<footer className="bg-brand-light border-brand-dark/10 border-t pt-16 pb-8 mt-auto">
<div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-16">

<div aria-hidden="true" className="text-brand-dark text-2xl font-semibold tracking-tighter uppercase font-manrope">
                    MLSP
                </div>

<nav aria-label="Footer Navigation" className="flex flex-wrap gap-6 md:gap-10">
<a className="text-sm font-semibold text-brand-dark/70 hover:text-brand-dark transition-colors focus-ring-dark font-manrope" href="#platform">Platform</a>
<a className="text-sm font-semibold text-brand-dark/70 hover:text-brand-dark transition-colors focus-ring-dark font-manrope" href="#programs">Programs</a>
<a className="text-sm font-semibold text-brand-dark/70 hover:text-brand-dark transition-colors focus-ring-dark font-manrope" href="#roadmap">Roadmap</a>
<a className="text-sm font-semibold text-brand-dark/70 hover:text-brand-dark transition-colors focus-ring-dark font-manrope" href="#contact">Contact</a>
</nav>
</div>

<div className="border-t border-brand-dark/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<p className="text-xs text-brand-dark/60 max-w-3xl leading-relaxed font-manrope">
                    MLSP operates as a modular integration and coordination initiative. All construction works are carried out by licensed professionals in compliance with Western Australian regulations.
                </p>
<p className="uppercase shrink-0 text-xs font-semibold text-brand-dark/40 tracking-widest font-manrope">
                    An independent initiative developed under the EMMAZO platform.
                </p>
</div>
</div>
</footer>



    </>
  );
}
