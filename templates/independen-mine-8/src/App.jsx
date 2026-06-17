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



        // Update Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Theme Toggle Logic
        const body = document.body;
        const toggleBtns = [document.getElementById('theme-toggle'), document.getElementById('theme-toggle-mobile')];
        
        // Check local storage or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
            body.classList.remove('dark');
        }

        toggleBtns.forEach(btn => {
            if(btn) {
                btn.addEventListener('click', () => {
                    body.classList.toggle('dark');
                    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
                });
            }
        });

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileCloseBtn = document.getElementById('mobile-close-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            if(mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => mobileMenu.classList.remove('translate-x-full'), 10);
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    document.body.style.overflow = '';
                }, 300);
            }
        }

        if(mobileMenuBtn && mobileCloseBtn) {
            mobileMenuBtn.addEventListener('click', toggleMenu);
            mobileCloseBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));
        }

        // Hero H1 Staggered Word Fade
        const h1 = document.getElementById('hero-headline');
        if(h1) {
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if(!prefersReducedMotion) {
                const text = h1.innerText;
                const words = text.split(' ');
                h1.innerHTML = '';
                
                words.forEach((word, i) => {
                    const span = document.createElement('span');
                    span.className = 'word-span';
                    span.style.animationDelay = `${i * 90}ms`;
                    // Highlight target word based on prompt
                    if(word.includes('Production')) {
                        span.classList.add('text-[var(--accent)]');
                    }
                    span.innerHTML = word + '&nbsp;';
                    h1.appendChild(span);
                });
            }
        }

        // Scroll Reveal Intersection Observer
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    if(prefersReducedMotion) {
                        entry.target.style.transition = 'none';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'none';
                    }
                    
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); 
                }
            });
        }, {
            root: null,
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));
    
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
      

<header className="sticky top-0 z-50 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-sm" href="#">
<span className="font-heading font-bold text-xl md:text-2xl tracking-tighter text-[var(--text-primary)]">IMM</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#experience">Capabilities</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#quality">Quality</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#training">Training</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#clients">Experience</a>
<a className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[var(--accent)] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" id="theme-toggle">
<iconify-icon className="dark:hidden text-lg" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-sm font-medium px-4 py-2 border border-[var(--border)] text-[var(--text-primary)] rounded-[4px] hover:border-[var(--accent)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" href="tel:9289656524">
                    Call Now
                </a>
<a className="text-sm font-medium px-5 py-2 bg-[var(--accent)] text-[var(--btn-text)] rounded-[4px] hover:scale-[1.02] hover:bg-[var(--accent-soft)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]" href="#contact">
                    Request a Quote
                </a>
</div>

<div className="flex items-center gap-3 md:hidden">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-secondary)]" id="theme-toggle-mobile">
<iconify-icon className="dark:hidden text-lg" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Open Menu" className="p-2 text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px]" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-[var(--bg)] transform translate-x-full transition-transform duration-300 flex flex-col hidden" id="mobile-menu">
<div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
<span className="font-heading font-bold text-xl tracking-tighter text-[var(--text-primary)]">IMM</span>
<button className="p-2 text-[var(--text-primary)]" id="mobile-close-btn">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<nav className="flex flex-col p-6 gap-6">
<a className="mobile-link text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2" href="#services">Services</a>
<a className="mobile-link text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2" href="#experience">Capabilities</a>
<a className="mobile-link text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2" href="#quality">Quality</a>
<a className="mobile-link text-lg font-medium text-[var(--text-primary)] border-b border-[var(--border)] pb-2" href="#contact">Contact</a>
</nav>
<div className="mt-auto p-6 flex flex-col gap-4">
<a className="w-full text-center text-sm font-medium px-4 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-[4px]" href="tel:9289656524">Call 928-965-6524</a>
<a className="w-full text-center text-sm font-medium px-4 py-3 bg-[var(--accent)] text-[var(--btn-text)] rounded-[4px]" href="#contact">Request a Quote</a>
</div>
</div>
<main className="flex-grow flex flex-col">

<section className="relative flex flex-col justify-end min-h-[85vh] lg:min-h-[90vh] bg-[#222C31]">

<div className="absolute inset-0 overflow-hidden">
<img alt="Heavy mining equipment maintenance" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1578319439584-104c94d37305?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#222C31] via-[#222C31]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#222C31] via-transparent to-transparent hidden md:block"></div>

<div className="absolute inset-0 bg-weave"></div>
</div>

<div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20">
<div className="max-w-4xl">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4 reveal">
                        Independent Mine Maintenance
                    </span>
<h1 className="font-heading text-[clamp(2.625rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-[-0.03em] text-[#FFFFFF] mb-6 uppercase" id="hero-headline">
                        Less Downtime. More Production.
                    </h1>
<p className="text-base md:text-lg text-[#C0C4C6] max-w-2xl mb-8 leading-[1.65] reveal delay-200">
                        Independent Mine Maintenance provides field service, fabrication, welding, inspections, rebuilds, and precision machining for mining and construction operations across Arizona, Nevada, and New Mexico.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="inline-flex justify-center items-center h-12 md:h-14 px-8 bg-[var(--accent)] text-[var(--btn-text)] text-sm md:text-base font-medium rounded-[4px] hover:bg-[var(--accent-soft)] hover:scale-[1.02] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222C31]" href="#contact">
                            Request a Quote
                        </a>
<a className="inline-flex justify-center items-center h-12 md:h-14 px-8 bg-transparent text-[#FFFFFF] border border-[var(--accent)] text-sm md:text-base font-medium rounded-[4px] hover:bg-[var(--accent)]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#222C31]" href="tel:9289656524">
                            Call 928-965-6524
                        </a>
</div>
</div>
</div>

<div className="relative z-10 w-full border-t border-[rgba(255,255,255,0.16)] bg-[#222C31]/80 backdrop-blur-md">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[rgba(255,255,255,0.16)] border-l border-r border-[rgba(255,255,255,0.16)]">
<div className="p-4 md:p-6 flex items-center gap-3">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF] tracking-wide relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity">Founded 2012</span>
</div>
<div className="p-4 md:p-6 flex items-center gap-3">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF] tracking-wide relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity">11 Specialized Technicians</span>
</div>
<div className="p-4 md:p-6 flex items-center gap-3">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF] tracking-wide relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity">Employee-Owned Model</span>
</div>
<div className="p-4 md:p-6 flex items-center gap-3">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#FFFFFF] tracking-wide relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[var(--accent)] after:opacity-0 hover:after:opacity-100 after:transition-opacity">Serving AZ / NV / NM</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[var(--bg)] border-b border-[var(--border)] overflow-hidden">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="reveal">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4">Why IMM</span>
<h2 className="font-heading text-[clamp(1.875rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-[var(--text-primary)] mb-6 uppercase">
                            Operational Excellence. Zero <span className="text-[var(--accent)]">Fluff.</span>
</h2>
<div className="space-y-6 text-base md:text-lg text-[var(--text-secondary)] font-normal leading-[1.65]">
<p>Founded in 2012 in Arizona, Independent Mine Maintenance operates on an employee-owned basis. We align our success directly with the reliability and output of your operations.</p>
<p>Our specialized team is capable of executing complete equipment rebuilds, managing large plant outages, delivering responsive field service, and performing precision on-site machining.</p>
<p className="font-medium text-[var(--text-primary)] border-l-2 border-[var(--accent)] pl-4">
                                Our core promise is simple: improved machine availability, reduced downtime, enhanced production metrics, and lower operating costs.
                            </p>
</div>
</div>
<div className="relative reveal delay-200 mt-8 lg:mt-0">

<div className="absolute inset-0 border-2 border-[var(--accent)] translate-x-4 translate-y-4 rounded-[4px] z-0"></div>
<div className="relative z-10 bg-[var(--surface-1)] rounded-[4px] overflow-hidden aspect-[4/3] border border-[var(--border)]">
<img alt="Precision welding and fabrication" className="w-full h-full object-cover object-center grayscale-[20%] mix-blend-luminosity opacity-90" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
<div className="absolute inset-0 bg-[var(--bg)] opacity-10 mix-blend-color"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[var(--surface-1)] border-b border-[var(--border)] relative overflow-hidden" id="services">
<div className="absolute inset-0 bg-weave opacity-50"></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4">Core Capabilities</span>
<h2 className="font-heading text-[clamp(1.875rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-[var(--text-primary)] uppercase">
                        Industrial <span className="text-[var(--accent)]">Maintenance</span> Services
                    </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Field Service</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">Comprehensive troubleshooting and repair for hydraulic systems, air systems, and diesel engine diagnosis.</p>
</div>

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal delay-100 group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Equipment Rebuilds</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">Complete overhauls for hydraulic and electric mining shovels, rotary blasthole drills, sonic drills, and top hammer drills.</p>
</div>

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal delay-200 group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Crushing &amp; Conveyor</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">Maintenance of crushing systems, conveyors, crusher chutes, jaw crushers, cone crushers, and liner package installation.</p>
</div>

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:flame-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Welding &amp; Fabrication</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">On-site welding, stainless steel and aluminum repair, vehicle/equipment frame repair, tank repair, and structure modifications.</p>
</div>

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal delay-100 group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:ruler-cross-pen-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Precision Machining</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">Specialized precision field machining and on-site line boring ranging from 1.5 inch to 12 inch diameters.</p>
</div>

<div className="bg-[var(--bg)] border border-[var(--border)] p-8 rounded-[4px] reveal delay-200 group hover:border-[var(--accent)] transition-colors duration-300">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:clipboard-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading text-xl md:text-2xl font-semibold tracking-tight text-[var(--text-primary)] mb-3">Preventative Maintenance</h3>
<p className="text-[var(--text-secondary)] text-sm md:text-base leading-[1.65]">Structured preventative maintenance programs, scheduled inspections, and equipment/structure relocations.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[var(--bg)] border-b border-[var(--border)]" id="experience">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-5 reveal">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4">Technical Specs</span>
<h2 className="font-heading text-[clamp(1.875rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-[var(--text-primary)] mb-6 uppercase">
                            Equipment &amp; Technical <span className="text-[var(--accent)]">Experience</span>
</h2>
<p className="text-base md:text-lg text-[var(--text-secondary)] leading-[1.65] mb-8">
                            Our technicians bring thousands of hours of specialized experience working on heavy-duty mining and construction assets. We service machinery across the entire operational lifecycle.
                        </p>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-8 reveal delay-200">

<div>
<h3 className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase border-b-2 border-[var(--accent)] pb-3 mb-4 inline-block">Equipment Types</h3>
<ul className="flex flex-col border-t border-[var(--border)]">
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Hydraulic Mining Shovels</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Electric Mining Shovels</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Rotary Blasthole Drills</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Sonic Drills &amp; Top Hammer Drills</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Heavy Duty Trucks &amp; Support</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Diesel Engines</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Hydraulic and Air Systems</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Caterpillar Equipment</li>
</ul>
</div>

<div>
<h3 className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase border-b-2 border-[var(--accent)] pb-3 mb-4 inline-block">Departments Served</h3>
<ul className="flex flex-col border-t border-[var(--border)]">
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Shovel and Drill</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Heavy Duty Truck Shop</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Crush and Convey</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Light Duty Truck Shop</li>
<li className="py-3 text-sm md:text-base text-[var(--text-secondary)] border-b border-[var(--border)] flex items-center before:content-[''] before:w-1 before:h-1 before:bg-[var(--accent)] before:mr-3 before:rounded-full hover:text-[var(--text-primary)] transition-colors">Acid Plant / Hydromet</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[var(--surface-1)] border-b border-[var(--border)] relative overflow-hidden" id="clients">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="mb-16 reveal">
<p className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] uppercase text-center mb-6">Certified / Authorized Support</p>
<div className="flex flex-wrap justify-center gap-3 md:gap-4">
<span className="inline-flex items-center justify-center px-4 md:px-6 py-2 border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs md:text-sm font-semibold uppercase tracking-wider rounded-[4px] hover:border-[var(--accent)] transition-colors">Manitex</span>
<span className="inline-flex items-center justify-center px-4 md:px-6 py-2 border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs md:text-sm font-semibold uppercase tracking-wider rounded-[4px] hover:border-[var(--accent)] transition-colors">Prinoth</span>
<span className="inline-flex items-center justify-center px-4 md:px-6 py-2 border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs md:text-sm font-semibold uppercase tracking-wider rounded-[4px] hover:border-[var(--accent)] transition-colors">Palfinger</span>
<span className="inline-flex items-center justify-center px-4 md:px-6 py-2 border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] text-xs md:text-sm font-semibold uppercase tracking-wider rounded-[4px] hover:border-[var(--accent)] transition-colors">Carco</span>
</div>
</div>

<div className="pt-12 border-t border-[var(--border)] reveal delay-100">
<p className="text-sm font-semibold tracking-widest text-[var(--text-secondary)] uppercase text-center mb-8">Trusted by operations including</p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 text-[var(--text-primary)] font-heading text-lg md:text-xl font-semibold tracking-tight uppercase opacity-80">
<span className="hover:text-[var(--accent)] transition-colors">FMI Morenci</span>
<span className="text-[var(--border)] hidden sm:inline">|</span>
<span className="hover:text-[var(--accent)] transition-colors">FMI Safford</span>
<span className="text-[var(--border)] hidden sm:inline">|</span>
<span className="hover:text-[var(--accent)] transition-colors">Freeport-McMoRan</span>
<span className="text-[var(--border)] hidden lg:inline">|</span>
<span className="hover:text-[var(--accent)] transition-colors">Southwest Energy</span>
<span className="text-[var(--border)] hidden sm:inline">|</span>
<span className="hover:text-[var(--accent)] transition-colors">BHP Billiton</span>
<span className="text-[var(--border)] hidden sm:inline">|</span>
<span className="hover:text-[var(--accent)] transition-colors">Western Mesquite</span>
</div>
<p className="text-center text-sm text-[var(--text-secondary)] mt-8 italic">References available on request.</p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[var(--bg)] border-b border-[var(--border)]" id="quality">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-4xl mx-auto mb-16 reveal">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4">Standards</span>
<h2 className="font-heading text-[clamp(1.875rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-[var(--text-primary)] mb-6 uppercase">
                        Quality, Safety, and <span className="text-[var(--accent)]">Compliance</span> Built Into Every Job
                    </h2>
<p className="text-base md:text-lg text-[var(--text-secondary)] leading-[1.65]">
                        IMM follows a stringent quality management approach based on ISO 9001:2015 principles. We ensure traceability, maintain full documentation, enforce strict non-conformance management, and drive continuous improvement. Records are retained for a minimum of 5 years.
                    </p>
</div>

<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16 reveal delay-100">
<div className="bg-[var(--surface-1)] border-l-2 border-[var(--border)] hover:border-[var(--accent)] p-6 transition-colors duration-300">
<span className="text-[var(--accent)] font-mono text-sm font-bold mb-2 block">01</span>
<h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-2">Inbound Material Inspection</h3>
<p className="text-sm text-[var(--text-secondary)]">Verification of all incoming parts, materials, and consumables against engineered specs.</p>
</div>
<div className="bg-[var(--surface-1)] border-l-2 border-[var(--border)] hover:border-[var(--accent)] p-6 transition-colors duration-300">
<span className="text-[var(--accent)] font-mono text-sm font-bold mb-2 block">02</span>
<h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-2">In-Process Inspection</h3>
<p className="text-sm text-[var(--text-secondary)]">Continuous monitoring of hold points, weld parameters, and tolerance checks during execution.</p>
</div>
<div className="bg-[var(--surface-1)] border-l-2 border-[var(--border)] hover:border-[var(--accent)] p-6 transition-colors duration-300">
<span className="text-[var(--accent)] font-mono text-sm font-bold mb-2 block">03</span>
<h3 className="text-base md:text-lg font-semibold text-[var(--text-primary)] mb-2">Final Inspection</h3>
<p className="text-sm text-[var(--text-secondary)]">Rigorous testing, QA sign-off, and handover documentation prior to returning to service.</p>
</div>
</div>

<div className="bg-[var(--surface-2)] border border-[var(--border)] rounded-[4px] p-6 md:p-10 reveal delay-200 relative overflow-hidden">
<div className="absolute inset-0 bg-weave opacity-30"></div>
<div className="relative z-10">
<h3 className="text-sm font-bold tracking-widest text-[var(--text-primary)] uppercase mb-6 text-center">Process &amp; Compliance Capabilities</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> AWS D1.1
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> API 1104
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> ASME Section IX
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> ISO 3834
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> SSPC-SP 10
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> SSPC-PA 1
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> PCI Guidelines
                            </div>
<div className="flex items-center gap-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Weld Certifications
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-[var(--surface-1)] border-b border-[var(--border)]" id="training">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6 md:gap-12 reveal">
<div>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3 flex items-center gap-3">
<iconify-icon className="text-[var(--accent)]" icon="solar:book-bookmark-linear"></iconify-icon> Operator Training
                        </h3>
<p className="text-sm text-[var(--text-secondary)] leading-[1.65]">On-site, practical training to ensure your operators understand equipment limits, proper handling, and daily inspection routines to prevent catastrophic failures.</p>
</div>
<div>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3 flex items-center gap-3">
<iconify-icon className="text-[var(--accent)]" icon="solar:shield-check-linear"></iconify-icon> Preventative Programs
                        </h3>
<p className="text-sm text-[var(--text-secondary)] leading-[1.65]">Custom-developed PM schedules based on actual site conditions, utilization rates, and OEM recommendations to catch wear before it causes downtime.</p>
</div>
<div>
<h3 className="font-heading text-xl font-semibold tracking-tight text-[var(--text-primary)] mb-3 flex items-center gap-3">
<iconify-icon className="text-[var(--accent)]" icon="solar:graph-up-linear"></iconify-icon> Maintenance Plans
                        </h3>
<p className="text-sm text-[var(--text-secondary)] leading-[1.65]">Strategic outage and turnaround planning. We map resources, parts, and timelines to execute complex rebuilds within tight operational windows.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[#222C31] border-t border-[rgba(255,255,255,0.16)] relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-weave opacity-50"></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="reveal text-left">
<span className="block text-xs md:text-sm font-semibold tracking-[0.18em] text-[var(--accent)] uppercase mb-4">Contact Operations</span>
<h2 className="font-heading text-[clamp(1.875rem,4vw,3.25rem)] font-semibold leading-tight tracking-tight text-[#FFFFFF] mb-8 uppercase">
                            Talk to IMM about your next shutdown, rebuild, or <span className="text-[var(--accent)]">field repair</span>
</h2>
<div className="space-y-6">
<a className="group flex items-center gap-4 bg-[#2A353B] border border-[rgba(255,255,255,0.16)] p-4 md:p-6 rounded-[4px] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" href="tel:9289656524">
<div className="w-12 h-12 bg-[#303C42] border border-[rgba(255,255,255,0.16)] flex items-center justify-center rounded-[4px] group-hover:bg-[var(--accent)]/10 transition-colors">
<iconify-icon className="text-2xl text-[var(--accent)]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#C0C4C6] uppercase tracking-wider font-semibold mb-1">Direct Dispatch</p>
<p className="text-lg md:text-xl font-medium text-[#FFFFFF]">928-965-6524</p>
</div>
</a>
<a className="group flex items-center gap-4 bg-[#2A353B] border border-[rgba(255,255,255,0.16)] p-4 md:p-6 rounded-[4px] hover:border-[var(--accent)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" href="mailto:imm_arizona@yahoo.com">
<div className="w-12 h-12 bg-[#303C42] border border-[rgba(255,255,255,0.16)] flex items-center justify-center rounded-[4px] group-hover:bg-[var(--accent)]/10 transition-colors">
<iconify-icon className="text-2xl text-[var(--accent)]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#C0C4C6] uppercase tracking-wider font-semibold mb-1">Email</p>
<p className="text-lg md:text-xl font-medium text-[#FFFFFF]">imm_arizona@yahoo.com</p>
</div>
</a>
<div className="flex items-center gap-4 bg-[#2A353B] border border-[rgba(255,255,255,0.16)] p-4 md:p-6 rounded-[4px]">
<div className="w-12 h-12 bg-[#303C42] border border-[rgba(255,255,255,0.16)] flex items-center justify-center rounded-[4px]">
<iconify-icon className="text-2xl text-[var(--accent)]" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#C0C4C6] uppercase tracking-wider font-semibold mb-1">Headquarters</p>
<p className="text-base text-[#FFFFFF]">[Corporate Address - Editable via CMS]</p>
</div>
</div>
</div>
</div>

<div className="bg-[#2A353B] border border-[rgba(255,255,255,0.16)] rounded-[4px] p-6 md:p-8 reveal delay-200">
<h3 className="text-xl font-semibold text-[#FFFFFF] mb-6">Request a Quote / Service</h3>
<form className="space-y-4 text-left">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Name</label>
<input className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E]" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Company</label>
<input className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E]" placeholder="Mining Corp" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Phone</label>
<input className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E]" placeholder="(555) 555-5555" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Email</label>
<input className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E]" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Mine Site / Location</label>
<input className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E]" placeholder="Site name or city" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Service Needed</label>
<select className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select service</option>
<option value="field-service">Field Service</option>
<option value="rebuild">Equipment Rebuild</option>
<option value="machining">Precision Machining</option>
<option value="welding">Welding / Fabrication</option>
<option value="other">Other</option>
</select>
<iconify-icon className="absolute right-3 top-[34px] text-[#C0C4C6] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Urgency</label>
<select className="w-full h-11 bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] px-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all appearance-none cursor-pointer">
<option value="routine">Routine / Planned</option>
<option value="urgent">Urgent / Breakdown</option>
<option value="outage">Upcoming Outage</option>
</select>
<iconify-icon className="absolute right-3 top-[34px] text-[#C0C4C6] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-[#C0C4C6] uppercase tracking-wide">Message details</label>
<textarea className="w-full bg-[#222C31] border border-[rgba(255,255,255,0.16)] rounded-[4px] p-3 text-[#FFFFFF] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-all placeholder:text-[#838A8E] resize-none" placeholder="Describe equipment issues or project scope..." rows="4"></textarea>
</div>
<button className="w-full h-12 mt-4 bg-[var(--accent)] text-[var(--btn-text)] text-sm font-medium rounded-[4px] hover:bg-[var(--accent-soft)] hover:scale-[1.02] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A353B]" type="button">
                                Submit Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#222C31] border-t border-[rgba(255,255,255,0.16)] pt-16 pb-8">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
<div className="md:col-span-1">
<span className="font-heading font-bold text-2xl tracking-tighter text-[#FFFFFF] block mb-4">IMM</span>
<p className="text-sm text-[#C0C4C6] leading-[1.65]">
                        Field service, fabrication, welding, inspections, rebuilds, and machining for mining and construction operations.
                    </p>
</div>
<div>
<h4 className="text-sm font-bold tracking-widest text-[#FFFFFF] uppercase mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-4 after:h-[2px] after:bg-[var(--accent)]">Navigation</h4>
<ul className="space-y-2 mt-4">
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="#experience">Capabilities</a></li>
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="#quality">Quality</a></li>
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="#training">Training</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold tracking-widest text-[#FFFFFF] uppercase mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-4 after:h-[2px] after:bg-[var(--accent)]">Contact</h4>
<ul className="space-y-2 mt-4">
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="tel:9289656524">928-965-6524</a></li>
<li><a className="text-sm text-[#C0C4C6] hover:text-[var(--accent)] transition-colors" href="mailto:imm_arizona@yahoo.com">imm_arizona@yahoo.com</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold tracking-widest text-[#FFFFFF] uppercase mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-4 after:h-[2px] after:bg-[var(--accent)]">Service Region</h4>
<ul className="space-y-2 text-sm text-[#C0C4C6] mt-4">
<li>Arizona</li>
<li>Nevada</li>
<li>New Mexico</li>
</ul>
</div>
</div>
<div className="border-t border-[rgba(255,255,255,0.16)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#838A8E]">© <span id="year"></span> Independent Mine Maintenance. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-[#838A8E]">
<span>Employee-Owned</span>
<span className="w-1 h-1 bg-[#838A8E] rounded-full"></span>
<span>Safety First</span>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[var(--bg)] border-t border-[var(--border)] z-40 pb-[calc(1rem+env(safe-area-inset-bottom))]">
<a className="flex items-center justify-center gap-2 w-full h-12 bg-[var(--accent)] text-[var(--btn-text)] text-sm font-semibold rounded-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]" href="tel:9289656524">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon> Call 928-965-6524
        </a>
</div>



    </>
  );
}
