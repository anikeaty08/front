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


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            // Theme toggling functionality
            const html = document.documentElement;
            const themeToggles = [document.getElementById('theme-toggle'), document.getElementById('mobile-theme-toggle')];
            
            themeToggles.forEach(btn => {
                if(btn) {
                    btn.addEventListener('click', () => {
                        html.classList.toggle('dark');
                    });
                }
            });

            // Mobile Menu
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileNav = document.getElementById('mobile-nav');
            
            if(menuBtn && mobileNav) {
                menuBtn.addEventListener('click', () => {
                    mobileNav.classList.toggle('hidden');
                });
                
                // Close nav on link click
                const mobileLinks = mobileNav.querySelectorAll('a');
                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        mobileNav.classList.add('hidden');
                    });
                });
            }

            // Scroll Animation Observer (Respects reduced motion via CSS)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Run once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-fade-up').forEach((el) => {
                observer.observe(el);
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
      

<header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg-surface)] border-b border-[var(--border-color)] transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="font-headings font-bold text-2xl tracking-tighter text-[var(--text-primary)]" href="#">
                        IMM<span className="text-[var(--accent)]">.</span>
</a>
</div>

<nav className="hidden lg:flex space-x-8">
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#experience">Experience</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#quality">Quality</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#training">Training</a>
</nav>

<div className="hidden lg:flex items-center space-x-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors" id="theme-toggle">
<iconify-icon className="text-xl dark:hidden" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors" href="tel:9289656524">928-965-6524</a>
<a className="bg-[var(--accent)] text-[var(--color-graphite)] text-sm font-medium px-5 py-2.5 rounded-[4px] hover:scale-[1.02] transition-transform flex items-center gap-2" href="#contact">
                        Request Quote <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="flex items-center lg:hidden gap-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-secondary)]" id="mobile-theme-toggle">
<iconify-icon className="text-xl dark:hidden" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl hidden dark:block" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-[var(--text-primary)] p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)]" id="mobile-nav">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-[var(--text-primary)]" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-medium text-[var(--text-primary)]" href="#experience">Experience</a>
<a className="block px-3 py-3 text-base font-medium text-[var(--text-primary)]" href="#quality">Quality</a>
<a className="block px-3 py-3 text-base font-medium text-[var(--text-primary)]" href="#training">Training</a>
<div className="pt-4 mt-2 border-t border-[var(--border-color)] flex flex-col gap-3 px-3">
<a className="flex items-center gap-2 text-[var(--text-primary)] py-2" href="tel:9289656524">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> 928-965-6524
                    </a>
<a className="bg-[var(--accent)] text-[var(--color-graphite)] text-center text-base font-medium px-5 py-3 rounded-[4px]" href="#contact">
                        Request Quote
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-20">

<section className="relative min-h-[85vh] flex flex-col justify-center bg-[var(--color-graphite)] overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Heavy mining equipment maintenance" className="w-full h-full object-cover object-center grayscale opacity-60" src="https://images.unsplash.com/photo-1587582423116-ec07293f0395?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0" style={{backgroundColor: 'var(--overlay-color)'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
<div className="max-w-4xl">
<span className="inline-block bg-[var(--color-graphite)] text-[var(--color-yellow)] text-xs md:text-sm uppercase font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] border border-[var(--color-graphite-60)] mb-6">
                        Independent Mine Maintenance
                    </span>

<h1 className="font-headings text-h1 font-bold text-[var(--color-white)] tracking-tight mb-8 uppercase">
<span className="hero-word" style={{animationDelay: '0.1s'}}>Less</span>
<span className="hero-word" style={{animationDelay: '0.2s'}}>Downtime.</span><br className="hidden md:block"/>
<span className="hero-word" style={{animationDelay: '0.3s'}}>More</span>
<span className="hero-word text-[var(--color-yellow)]" style={{animationDelay: '0.4s'}}>Production.</span>
</h1>
<p className="text-body text-[var(--color-graphite-30)] max-w-2xl mb-10 hero-word" style={{animationDelay: '0.5s'}}>
                        Independent Mine Maintenance provides field service, fabrication, welding, inspections, rebuilds, and precision machining for mining and construction operations across Arizona, Nevada, and New Mexico.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 hero-word" style={{animationDelay: '0.6s'}}>
<a className="bg-[var(--color-yellow)] text-[var(--color-graphite)] text-base font-medium px-8 py-4 rounded-[4px] hover:scale-[1.02] transition-transform text-center flex justify-center items-center gap-2" href="#contact">
                            Request a Quote <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="bg-transparent border-2 border-[var(--color-white)] text-[var(--color-white)] text-base font-medium px-8 py-4 rounded-[4px] hover:border-[var(--color-yellow)] hover:text-[var(--color-yellow)] transition-all text-center flex justify-center items-center gap-2" href="tel:9289656524">
                            Call 928-965-6524
                        </a>
</div>
</div>
</div>
</section>

<div className="bg-[var(--bg-surface)] border-b border-[var(--border-color)] relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
<div className="border-l-2 border-[var(--accent)] pl-4">
<p className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">Founded</p>
<p className="font-headings text-2xl font-semibold text-[var(--text-primary)]">2012</p>
</div>
<div className="border-l-2 border-[var(--accent)] pl-4">
<p className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">Team</p>
<p className="font-headings text-2xl font-semibold text-[var(--text-primary)]">11 Technicians</p>
</div>
<div className="border-l-2 border-[var(--accent)] pl-4">
<p className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">Structure</p>
<p className="font-headings text-2xl font-semibold text-[var(--text-primary)]">Employee-Owned</p>
</div>
<div className="border-l-2 border-[var(--accent)] pl-4">
<p className="text-[var(--text-secondary)] text-sm font-semibold uppercase tracking-wider mb-1">Service Area</p>
<p className="font-headings text-2xl font-semibold text-[var(--text-primary)]">AZ / NV / NM</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-[var(--bg-base)] border-b border-[var(--border-color)] overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative animate-fade-up">
<div className="aspect-square w-full bg-[var(--bg-alt)] border border-[var(--border-color)] rounded-[4px] relative overflow-hidden">
<img alt="Industrial welding operation" className="w-full h-full object-cover mix-blend-luminosity opacity-80 dark:opacity-60" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-[4px] border-[var(--bg-base)] m-4 rounded-[4px] pointer-events-none"></div>
</div>
</div>
<div className="animate-fade-up">
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                            Why IMM
                        </span>
<h2 className="font-headings text-h2 font-semibold text-[var(--text-primary)] tracking-tight mb-8 uppercase">
                            Operational Reliability. Guaranteed.
                        </h2>
<div className="space-y-6 text-body text-[var(--text-secondary)]">
<p>Founded in Arizona in 2012, Independent Mine Maintenance operates on a strict employee-owned model. This means every technician on your site has a vested interest in the safety, quality, and efficiency of the work performed.</p>
<p>Our specialized team is capable of executing complete equipment rebuilds, managing large plant outages, delivering responsive field service, and performing precision machining in the most demanding environments.</p>
<p className="border-l-4 border-[var(--accent)] pl-4 text-[var(--text-primary)] font-medium">
                                Our core promise is straightforward: improved machine availability, reduced downtime, and lower operating costs for your site.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-alt)] border-b border-[var(--border-color)]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 animate-fade-up">
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                        Core Capabilities
                    </span>
<h2 className="font-headings text-h2 font-semibold text-[var(--text-primary)] tracking-tight uppercase">
                        Industrial Services
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full">
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Field Service</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">Comprehensive on-site troubleshooting and repair for hydraulic and electric mining shovels, rotary blasthole drills, sonic drills, and top hammer drills.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full" style={{transitionDelay: '50ms'}}>
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Equipment Rebuilds</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">Full overhauls including diesel engine diagnosis, hydraulic systems, air systems repair, and total equipment frame restorations.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Crush &amp; Convey</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">Maintenance for crushing systems and conveyors, crusher chutes, jaw crushers, cone crushers, and precision liner package installation.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full" style={{transitionDelay: '150ms'}}>
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:flashlight-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Welding &amp; Fabrication</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">On-site welding, stainless steel and aluminum repair, structural modifications, tank repairs, and equipment structure relocations.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Precision Machining</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">Expert on-site field machining and line boring capabilities ranging precisely from 1.5 inch up to 12 inch diameters.</p>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-8 xl:hover:-translate-y-1 transition-transform duration-300 animate-fade-up flex flex-col h-full" style={{transitionDelay: '250ms'}}>
<iconify-icon className="text-4xl text-[var(--accent)] mb-6" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-h3 font-semibold text-[var(--text-primary)] mb-4">Preventative Maintenance</h3>
<p className="text-body text-[var(--text-secondary)] mt-auto">Systematic inspections and preventative maintenance execution to catch critical failures before they impact your production schedule.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-base)] border-b border-[var(--border-color)]" id="experience">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 animate-fade-up">
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                            Technical Scope
                        </span>
<h2 className="font-headings text-h2 font-semibold text-[var(--text-primary)] tracking-tight uppercase mb-6">
                            Equipment Experience
                        </h2>
<p className="text-body text-[var(--text-secondary)] mb-8">
                            IMM technicians carry deep specialized knowledge across major OEMs and heavy industrial equipment classes operating in surface mining environments.
                        </p>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-up" style={{transitionDelay: '100ms'}}>

<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4 border-b border-[var(--border-color)] pb-2">Equipment Types</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Hydraulic Mining Shovels
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Electric Mining Shovels
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Rotary Blasthole Drills
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Sonic Drills &amp; Top Hammer Drills
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Heavy Duty Trucks &amp; Support
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Diesel Engines
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Hydraulic and Air Systems
                                </li>
<li className="flex items-start gap-3 text-body text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] mt-1 flex-shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                    Caterpillar Equipment
                                </li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-4 border-b border-[var(--border-color)] pb-2">Departments Served</h3>
<div className="flex flex-wrap gap-2">
<span className="bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm px-3 py-1.5 rounded-[4px]">Shovel and Drill</span>
<span className="bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm px-3 py-1.5 rounded-[4px]">Heavy Duty Truck Shop</span>
<span className="bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm px-3 py-1.5 rounded-[4px]">Crush and Convey</span>
<span className="bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm px-3 py-1.5 rounded-[4px]">Light Duty Truck Shop</span>
<span className="bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] text-sm px-3 py-1.5 rounded-[4px]">Acid Plant / Hydromet</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-alt)] border-b border-[var(--border-color)]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="animate-fade-up">
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                            OEM Partnerships
                        </span>
<h2 className="font-headings text-h3 font-semibold text-[var(--text-primary)] uppercase mb-8">Authorized Support For</h2>
<div className="flex flex-wrap gap-4">
<div className="px-6 py-4 border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-[4px] font-headings text-xl font-bold uppercase tracking-widest text-[var(--text-primary)]">Manitex</div>
<div className="px-6 py-4 border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-[4px] font-headings text-xl font-bold uppercase tracking-widest text-[var(--text-primary)]">Prinoth</div>
<div className="px-6 py-4 border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-[4px] font-headings text-xl font-bold uppercase tracking-widest text-[var(--text-primary)]">Palfinger</div>
<div className="px-6 py-4 border border-[var(--border-color)] bg-[var(--bg-surface)] rounded-[4px] font-headings text-xl font-bold uppercase tracking-widest text-[var(--text-primary)]">Carco</div>
</div>
</div>

<div className="animate-fade-up" style={{transitionDelay: '100ms'}}>
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                            Trusted By
                        </span>
<h2 className="font-headings text-h3 font-semibold text-[var(--text-primary)] uppercase mb-8">Operations Served</h2>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-2 text-body font-medium text-[var(--text-secondary)]">
<div>FMI Morenci</div>
<div>FMI Safford</div>
<div>Freeport-McMoRan</div>
<div>Southwest Energy</div>
<div>BHP Billiton</div>
<div>Western Mesquite</div>
</div>
<p className="mt-8 text-sm italic text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-4">
                            References available on request.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--bg-base)] border-b border-[var(--border-color)]" id="quality">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl animate-fade-up">
<span className="inline-block bg-[var(--eyebrow-bg)] text-[var(--eyebrow-text)] text-xs font-semibold tracking-[0.18em] px-3 py-1 rounded-[4px] mb-6 uppercase border border-[var(--border-color)]">
                    Standards
                </span>
<h2 className="font-headings text-h2 font-semibold text-[var(--text-primary)] tracking-tight uppercase mb-6">
                    Quality, Safety, and Compliance Built Into Every Job
                </h2>
<p className="text-body text-[var(--text-secondary)] mb-16">
                    IMM operates under a stringent quality management approach based on ISO 9001:2015 principles. We guarantee full traceability, active non-conformance management, and continuous improvement across all operational outputs.
                </p>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-6 text-center animate-fade-up">
<div className="w-12 h-12 rounded-full bg-[var(--bg-alt)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-4">
<span className="font-headings font-bold text-lg text-[var(--text-primary)]">1</span>
</div>
<h4 className="font-headings text-lg font-semibold text-[var(--text-primary)] mb-2 uppercase">Inbound Material</h4>
<p className="text-sm text-[var(--text-secondary)]">Strict verification of materials and components prior to initiating any service or fabrication.</p>
</div>
<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-6 text-center animate-fade-up" style={{transitionDelay: '50ms'}}>
<div className="w-12 h-12 rounded-full bg-[var(--bg-alt)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-4">
<span className="font-headings font-bold text-lg text-[var(--text-primary)]">2</span>
</div>
<h4 className="font-headings text-lg font-semibold text-[var(--text-primary)] mb-2 uppercase">In-Process Inspection</h4>
<p className="text-sm text-[var(--text-secondary)]">Continuous quality checks during rebuilds, machining, and welding to ensure standard adherence.</p>
</div>
<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-[4px] p-6 text-center animate-fade-up" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-[var(--bg-alt)] border border-[var(--border-color)] flex items-center justify-center mx-auto mb-4">
<span className="font-headings font-bold text-lg text-[var(--text-primary)]">3</span>
</div>
<h4 className="font-headings text-lg font-semibold text-[var(--text-primary)] mb-2 uppercase">Final Inspection</h4>
<p className="text-sm text-[var(--text-secondary)]">Comprehensive QA sign-off and documentation before equipment is returned to active service.</p>
</div>
</div>

<div className="bg-[var(--bg-alt)] border border-[var(--border-color)] rounded-[4px] p-8 lg:p-12 animate-fade-up">
<h3 className="font-headings text-xl font-semibold text-[var(--text-primary)] mb-8 uppercase text-center border-b border-[var(--border-color)] pb-4">Working to Industry Standards</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">AWS D1.1</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">API 1104</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">ASME Section IX</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">ISO 3834</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">SSPC-SP 10</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">SSPC-PA 1</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">PCI Guidelines</span></div>
<div className="flex items-center gap-2"><iconify-icon className="text-[var(--accent)] text-xl" icon="solar:check-circle-linear"></iconify-icon><span className="text-sm font-medium">Weld Certifications</span></div>
</div>
<div className="mt-8 text-center text-sm text-[var(--text-secondary)]">
                        Full documentation provided. All quality records retained for a minimum of 5 years.
                    </div>
</div>
</div>
</section>

<section className="py-16 bg-[var(--bg-surface)] border-b border-[var(--border-color)]" id="training">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] animate-fade-up">
<div className="py-6 md:py-0 md:pr-8">
<iconify-icon className="text-3xl text-[var(--accent)] mb-4" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-lg font-semibold text-[var(--text-primary)] uppercase mb-2">Operator Training</h3>
<p className="text-sm text-[var(--text-secondary)]">Ensuring your crew operates rebuilt and repaired equipment within specifications to maximize lifecycle.</p>
</div>
<div className="py-6 md:py-0 md:px-8">
<iconify-icon className="text-3xl text-[var(--accent)] mb-4" icon="solar:checklist-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-lg font-semibold text-[var(--text-primary)] uppercase mb-2">Preventative Programs</h3>
<p className="text-sm text-[var(--text-secondary)]">Structured intervals for inspection, lubrication, and wear-part replacement tailored to your specific environment.</p>
</div>
<div className="py-6 md:py-0 md:pl-8">
<iconify-icon className="text-3xl text-[var(--accent)] mb-4" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-headings text-lg font-semibold text-[var(--text-primary)] uppercase mb-2">Maintenance Plans</h3>
<p className="text-sm text-[var(--text-secondary)]">Long-term outage scheduling and planned reliability strategies to forecast costs and labor requirements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[var(--color-graphite)] border-t border-[var(--color-graphite-30)] relative" id="contact">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="animate-fade-up">
<h2 className="font-headings text-h2 font-semibold text-[var(--color-white)] tracking-tight uppercase mb-8">
                            Talk to IMM about your next shutdown, rebuild, or field repair
                        </h2>
<div className="space-y-6 mt-12">
<a className="flex items-center gap-4 group" href="tel:9289656524">
<div className="w-12 h-12 bg-[var(--color-white)]/10 border border-[var(--color-white)]/20 rounded-[4px] flex items-center justify-center group-hover:bg-[var(--color-yellow)] group-hover:text-[var(--color-graphite)] transition-colors">
<iconify-icon className="text-xl text-[var(--color-white)] group-hover:text-[var(--color-graphite)] transition-colors" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[var(--color-graphite-30)] uppercase tracking-wider">Call Us</p>
<p className="text-lg font-medium text-[var(--color-white)]">928-965-6524</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:imm_arizona@yahoo.com">
<div className="w-12 h-12 bg-[var(--color-white)]/10 border border-[var(--color-white)]/20 rounded-[4px] flex items-center justify-center group-hover:bg-[var(--color-yellow)] group-hover:text-[var(--color-graphite)] transition-colors">
<iconify-icon className="text-xl text-[var(--color-white)] group-hover:text-[var(--color-graphite)] transition-colors" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-[var(--color-graphite-30)] uppercase tracking-wider">Email</p>
<p className="text-lg font-medium text-[var(--color-white)]">imm_arizona@yahoo.com</p>
</div>
</a>
</div>
</div>
<div className="bg-[var(--color-white)] rounded-[4px] p-8 animate-fade-up" style={{transitionDelay: '100ms'}}>
<form action="#" className="space-y-4" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="name">Name</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="name" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="company">Company</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="company" name="company" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="phone">Phone</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="phone" name="phone" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="email">Email</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="email" name="email" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="location">Mine Site / Location</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="location" name="location" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="urgency">Urgency</label>
<select className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)] appearance-none" id="urgency" name="urgency">
<option value="planning">Planning phase</option>
<option value="soon">Within 30 days</option>
<option value="immediate">Immediate / Breakdown</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="service">Service Needed</label>
<input className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="service" name="service" placeholder="e.g. Shovel rebuild, Line boring..." type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--color-graphite)] uppercase tracking-wider mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-[var(--color-white)] border border-[var(--color-graphite-30)] text-[var(--color-graphite)] rounded-[4px] px-4 py-3 focus:outline-none focus:border-[var(--color-graphite)] focus:ring-1 focus:ring-[var(--color-graphite)]" id="message" name="message" rows="4"></textarea>
</div>
<button className="w-full bg-[var(--color-graphite)] text-[var(--color-white)] font-semibold text-base py-4 rounded-[4px] hover:bg-[var(--color-yellow)] hover:text-[var(--color-graphite)] transition-colors duration-200 uppercase tracking-wide" type="submit">
                                Submit Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[var(--bg-surface)] border-t border-[var(--border-color)] py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="md:col-span-2 border-b md:border-b-0 md:border-r border-[var(--border-color)] pb-8 md:pb-0 md:pr-8">
<a className="font-headings font-bold text-2xl tracking-tighter text-[var(--text-primary)] inline-block mb-4" href="#">
                        IMM<span className="text-[var(--accent)]">.</span>
</a>
<p className="text-sm text-[var(--text-secondary)] max-w-sm">
                        Field service, fabrication, welding, inspections, rebuilds, and machining for mining and construction operations.
                    </p>
</div>
<div>
<h4 className="font-headings text-sm font-semibold text-[var(--text-primary)] uppercase tracking-widest mb-4">Navigation</h4>
<ul className="space-y-2 text-sm text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="#experience">Experience</a></li>
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="#quality">Quality Standards</a></li>
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-headings text-sm font-semibold text-[var(--text-primary)] uppercase tracking-widest mb-4">Contact Info</h4>
<ul className="space-y-2 text-sm text-[var(--text-secondary)]">
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="tel:9289656524">928-965-6524</a></li>
<li><a className="hover:text-[var(--text-primary)] transition-colors" href="mailto:imm_arizona@yahoo.com">imm_arizona@yahoo.com</a></li>
<li className="pt-2 text-xs uppercase tracking-wider">Serving AZ / NV / NM</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--text-secondary)]">
<p>©  Independent Mine Maintenance. All rights reserved.</p>
</div>
</div>
</footer>

<div className="lg:hidden fixed bottom-0 left-0 w-full z-40 p-4 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex gap-2">
<a className="flex-1 bg-[var(--bg-alt)] border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm py-3 rounded-[4px] flex justify-center items-center gap-2" href="tel:9289656524">
<iconify-icon icon="solar:phone-linear"></iconify-icon> Call
        </a>
<a className="flex-1 bg-[var(--accent)] text-[var(--color-graphite)] font-medium text-sm py-3 rounded-[4px] flex justify-center items-center gap-2" href="#contact">
            Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>



    </>
  );
}
