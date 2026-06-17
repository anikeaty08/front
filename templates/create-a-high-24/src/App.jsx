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



        // Initialize Icons
        lucide.createIcons();

        // Copyright Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('translate-x-full');
            });
        });

        // Accordion Logic
        const accordions = document.querySelectorAll('.accordion-btn');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const icon = this.querySelector('[data-lucide="plus"]');
                
                // Toggle current
                content.classList.toggle('hidden');
                
                // Rotate icon
                if (content.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                    icon.classList.remove('text-amber-500');
                } else {
                    icon.style.transform = 'rotate(45deg)';
                    icon.classList.add('text-amber-500');
                }
            });
        });

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => revealObserver.observe(el));

        // Scroll to Top Logic
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollToTopBtn.classList.remove('translate-y-20', 'opacity-0');
                scrollToTopBtn.classList.add('translate-y-0', 'opacity-100');
            } else {
                scrollToTopBtn.classList.add('translate-y-20', 'opacity-0');
                scrollToTopBtn.classList.remove('translate-y-0', 'opacity-100');
            }
        });

        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-semibold tracking-tighter text-blue-900 uppercase">
                    Brenda<span className="text-amber-500">Jafrudy</span>
</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-amber-600 transition-colors" href="tel:4165543705">
<i className="w-4 h-4" data-lucide="phone"></i> (416) 554-3705
                </a>
<a className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all shadow-lg shadow-amber-500/30" href="#contact">
                    Book Free Consultation
                </a>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" id="menu-toggle" type="button">
<span className="sr-only">Open main menu</span>
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#process">Process</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#about">About</a></li>
<li><a className="block py-2 px-3 text-slate-600 hover:text-blue-900 md:p-0 transition-colors" href="#resources">Resources</a></li>
</ul>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 md:hidden pt-24 px-6" id="mobile-menu">
<div className="flex flex-col space-y-6 text-lg font-medium text-blue-900">
<a className="border-b border-slate-100 pb-2" href="#services">Services</a>
<a className="border-b border-slate-100 pb-2" href="#process">Process</a>
<a className="border-b border-slate-100 pb-2" href="#about">About Brenda</a>
<a className="border-b border-slate-100 pb-2" href="#resources">Resources</a>
<a className="flex items-center gap-2 text-amber-600" href="tel:4165543705">
<i className="w-5 h-5" data-lucide="phone"></i> Call Now
            </a>
</div>
</div>

<section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-xs font-medium tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                    License M17000206
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
                    Get Beyond One Bank. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Explore All Your Mortgage Options.</span>
</h1>
<p className="text-lg text-slate-300 max-w-lg font-light leading-relaxed">
                    Toronto Mortgage Agent helping first-time buyers, homeowners 55+, and self-employed clients secure the best financing tailored to your unique story.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:ring-amber-500/30 transition-all shadow-lg shadow-amber-500/20" href="#contact">
                        Book Free Consultation
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white border border-slate-400 rounded-lg hover:bg-white/10 focus:ring-4 focus:ring-slate-500/30 transition-all" href="#process">
                        Get Pre-Approved Now
                    </a>
</div>
<div className="pt-6 flex items-center gap-6 text-slate-400 text-sm border-t border-blue-800/50">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
<span>15+ Years Exp.</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-400" data-lucide="building-2"></i>
<span>100+ Lenders</span>
</div>
</div>
</div>
<div className="relative h-full flex justify-center md:justify-end reveal delay-200">

<div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-blue-950/50 border border-white/10 bg-slate-800">
<img alt="Brenda Jafrudy Professional Mortgage Agent" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iLcy23XY9dHWgd0toyUV/media/6939d4c6f282864c5bffbb42.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="text-lg font-semibold">Brenda Jafrudy</p>
<p className="text-sm text-slate-300">Mortgage Agent Level 2</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
<i className="w-6 h-6" data-lucide="chevron-down"></i>
</div>
</section>

<section className="bg-slate-50 border-b border-slate-200 py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center justify-center text-center gap-2 reveal">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="award"></i>
<h3 className="font-semibold text-blue-900 text-lg">15+ Years</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-100">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="file-check"></i>
<h3 className="font-semibold text-blue-900 text-lg">M17000206</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Licensed Agent</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-200">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="landmark"></i>
<h3 className="font-semibold text-blue-900 text-lg">100+ Lenders</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Lending Partners</p>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2 reveal delay-300">
<i className="w-6 h-6 text-blue-900 mb-1" data-lucide="briefcase"></i>
<h3 className="font-semibold text-blue-900 text-lg">Bank Alumni</h3>
<p className="text-xs text-slate-500 uppercase tracking-wider">Insider Knowledge</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full blur-2xl z-0"></div>
<img alt="Stressed couple looking at finances" className="relative z-10 rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6 reveal delay-200">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900">Are You Limiting Yourself to One Bank's Rates?</h2>
<p className="text-lg text-slate-600 font-light">
                        Many homebuyers go straight to their primary bank, unaware that they might be leaving thousands of dollars on the table or risking rejection due to strict policies.
                    </p>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Missing out on lower rates available only through broker channels.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Navigating complex mortgage terms and penalties alone.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Uncertainty about qualifying with self-employment or credit issues.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" data-lucide="x-circle"></i>
<span className="text-slate-600">Wasting valuable time applying to multiple institutions individually.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 space-y-8 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900">I Shop 100+ Lenders So You Get the Best Deal</h2>
<p className="text-lg text-slate-600 font-light">
                        As an independent expert, I work for <i>you</i>, not the bank. I leverage relationships with dozens of lenders to find the perfect match for your financial picture.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Broad Access</h4>
<p className="text-slate-600 text-sm mt-1">Major banks, credit unions, monoline lenders, and private options.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Personalized Guidance</h4>
<p className="text-slate-600 text-sm mt-1">Tailored strategies for self-employed, bruised credit, and first-time buyers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-700">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-blue-900">Lifetime Support</h4>
<p className="text-slate-600 text-sm mt-1">I'm here for renewals, refinancing, and advice long after closing.</p>
</div>
</div>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white bg-amber-500 hover:bg-amber-600 font-medium rounded-lg text-sm px-6 py-3 transition-colors shadow-md" href="#process">
                            See How It Works <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="order-1 md:order-2 relative reveal delay-200">
<img alt="Closing deal handshake" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Tailored Solutions for Every Stage</h2>
<p className="text-blue-200 font-light text-lg">Whether you are just starting out or looking to leverage your equity, I have specialized programs for you.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold mb-3">First-Time Buyers</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
                        Navigate your first purchase with confidence. I help with pre-approvals, down payment strategies, and explain every step clearly.
                    </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal delay-100">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Homeowners 55+</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
                        Unlock your home equity tax-free without monthly mortgage payments. Specialized Reverse Mortgage solutions tailored for Canadian seniors.
                    </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#reverse-mortgage">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-blue-800/40 backdrop-blur-sm border border-blue-700/50 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 reveal delay-200">
<div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="briefcase"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Self-Employed &amp; Unique</h3>
<p className="text-blue-200 text-sm leading-relaxed mb-6">
                        Bruised credit? Self-employed income? Separation? I work with lenders who understand the full story behind non-traditional scenarios.
                    </p>
<a className="text-amber-400 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                        Learn More <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="services">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-12 reveal">Full-Service Mortgage Solutions</h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-4 text-left bg-slate-50 p-8 rounded-2xl border border-slate-100 reveal delay-100">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Pre-Approvals &amp; Purchase Apps</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Refinancing &amp; Mortgage Renewals</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">First-Time Home Buyer Programs</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Investment Property Financing</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Reverse Mortgages (55+)</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Debt Consolidation</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Self-Employed Mortgages</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">HELOC (Home Equity Line of Credit)</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Private Financing</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Bruised Credit Solutions</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Separation/Divorce Mortgages</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-amber-500" data-lucide="check-circle-2"></i>
<span className="text-slate-700">Renovation Mortgages</span>
</div>
</div>
<div className="mt-10 reveal">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-amber-500 rounded-lg hover:bg-amber-600 transition-all shadow-md" href="#contact">
                    Schedule a Consultation
                </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-4">Your Mortgage Journey, Simplified</h2>
<p className="text-slate-600 max-w-2xl mx-auto">From our first chat to the day you get your keys, I handle the heavy lifting.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-100">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="message-circle"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Free Consultation</h3>
<p className="text-sm text-slate-500 leading-relaxed">We discuss your goals, review your finances, and explore possibilities.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-200">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="search"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Lender Shopping</h3>
<p className="text-sm text-slate-500 leading-relaxed">I compare 100+ lenders to find the rates and terms that fit you best.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-300">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="file-signature"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Application &amp; Approval</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamless paperwork handling and advocacy until approval is secured.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-400">
<div className="w-24 h-24 bg-white border-4 border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
<i className="w-8 h-8 text-amber-500" data-lucide="key"></i>
<div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Closing &amp; Support</h3>
<p className="text-sm text-slate-500 leading-relaxed">Keys in hand, plus continued monitoring for future opportunities.</p>
</div>
</div>
</div>
</section>

<section className="py-0 bg-blue-900 text-white overflow-hidden" id="about">
<div className="grid md:grid-cols-2">
<div className="relative h-96 md:h-auto">
<img alt="Brenda Jafrudy" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/iLcy23XY9dHWgd0toyUV/media/6939d4c6f282864c5bffbb42.jpg"/>
<div className="absolute inset-0 bg-blue-900/20"></div>
</div>
<div className="p-12 md:p-20 flex flex-col justify-center reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8">Why Work With Brenda?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="map-pin"></i>
<div>
<h4 className="font-medium text-lg">Toronto Area Specialist</h4>
<p className="text-blue-200 text-sm font-light mt-1">Deep understanding of the GTA market dynamics and values.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="graduation-cap"></i>
<div>
<h4 className="font-medium text-lg">Economics &amp; Accounting Background</h4>
<p className="text-blue-200 text-sm font-light mt-1">York University graduate with a strong financial foundation.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="lightbulb"></i>
<div>
<h4 className="font-medium text-lg">Educational Approach</h4>
<p className="text-blue-200 text-sm font-light mt-1">I prioritize empowering you with knowledge through every step.</p>
</div>
</div>
<div className="flex gap-4">
<i className="w-6 h-6 text-amber-400 flex-shrink-0" data-lucide="heart"></i>
<div>
<h4 className="font-medium text-lg">Dedicated Advocacy</h4>
<p className="text-blue-200 text-sm font-light mt-1">I fight for your approval like it's my own mortgage.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-all" href="#contact">
                        Book Your Free Consultation
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 text-center mb-16 reveal">What Clients Are Saying</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
                        "Brenda made our first home purchase stress-free. She explained everything clearly and found us a rate our bank couldn't match. We felt supported every step of the way. 10/10 would recommend!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">SM</div>
<div>
<p className="text-sm font-semibold text-blue-900">Sarah &amp; Michael T.</p>
<p className="text-xs text-slate-500">First-Time Buyers, Toronto</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal delay-100">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
                        "As a self-employed contractor, I thought getting a mortgage would be impossible. Brenda knew exactly which lenders to approach and secured approval within two weeks. Her expertise was invaluable."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">DL</div>
<div>
<p className="text-sm font-semibold text-blue-900">David L.</p>
<p className="text-xs text-slate-500">Self-Employed Professional</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 reveal delay-200">
<div className="flex gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 italic text-sm mb-6 leading-relaxed">
                        "My parents were hesitant about a reverse mortgage, but Brenda took the time to educate us all. She answered every question with patience and helped them unlock their home equity safely."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">JK</div>
<div>
<p className="text-sm font-semibold text-blue-900">Jennifer K.</p>
<p className="text-xs text-slate-500">Family of Client 55+</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-12 text-center reveal">Free Resources to Empower Your Decision</h2>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Mortgage Calculators</h3>
<p className="text-sm text-slate-500 mb-4">Estimate payments, land transfer taxes, and compare scenarios to plan your budget.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Try Calculators <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal delay-100" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Educational Blog</h3>
<p className="text-sm text-slate-500 mb-4">Articles on interest rates, pre-approval tips, debt consolidation strategies and more.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Read Blog <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
<a className="group block p-6 border border-slate-200 rounded-xl hover:border-amber-400 transition-colors reveal delay-200" href="#">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900 group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="monitor-play"></i>
</div>
<h3 className="text-lg font-semibold text-blue-900 mb-2">Free Webinars</h3>
<p className="text-sm text-slate-500 mb-4">Join live sessions to learn about mortgages, market trends and ask me questions.</p>
<span className="text-amber-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">View Schedule <i className="w-4 h-4" data-lucide="arrow-right"></i></span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-8 text-center reveal">Common Questions</h2>
<div className="space-y-4 reveal delay-100" id="accordion">

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>What does a mortgage agent do differently than a bank?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
                        While a bank specialist can only offer you products from their specific institution, I act as an intermediary between you and over 100 different lenders. This means I can shop around to find the rate and terms that truly fit your needs, rather than fitting you into a bank's limited box.
                    </div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>How much does it cost to use a mortgage agent?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
                        In most residential mortgage transactions (OAC), my services are completely free to you! I am compensated by the lender that we choose to work with. Fees may apply only in specialized circumstances like private lending or complex commercial deals, which would be disclosed upfront.
                    </div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>Can you help if I have bruised credit or I'm self-employed?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
                        Absolutely. This is one of my specialties. Traditional banks often have rigid criteria that exclude self-employed individuals or those with credit hiccups. I have access to "B-lenders" and private institutions specifically designed to help clients in these situations get approved.
                    </div>
</div>

<div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left font-medium text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors accordion-btn">
<span>What documents do I need to provide?</span>
<i className="w-5 h-5 text-slate-400 transform transition-transform duration-200" data-lucide="plus"></i>
</button>
<div className="hidden px-5 pb-5 pt-0 text-sm text-slate-600 accordion-content">
                        Typically, you'll need proof of income (pay stubs, T4s, or NOAs), proof of down payment, and identification. Depending on your situation (e.g., self-employed), additional documentation may be required. I provide a clear checklist to make gathering these items easy.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900 mb-8 text-center reveal">See What You Can Afford</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 reveal">
<h3 className="text-xl font-semibold text-blue-900 mb-6">Purchase Calculator</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Home Price</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">$800,000</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Down Payment</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">$160,000 (20%)</div>
</div>
<button className="w-full h-10 bg-blue-900 text-white rounded font-medium text-sm mt-2">Calculate Payments</button>
<div className="pt-4 border-t border-slate-200 text-center">
<p className="text-xs text-slate-500">Estimated Monthly Payment</p>
<p className="text-2xl font-bold text-blue-900">$3,845*</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 reveal delay-100">
<h3 className="text-xl font-semibold text-blue-900 mb-6">Refinance Savings</h3>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Current Mortgage Balance</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">$450,000</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Additional Funds Needed</label>
<div className="h-10 bg-white border border-slate-300 rounded flex items-center px-3 text-slate-400">$50,000</div>
</div>
<button className="w-full h-10 bg-amber-500 text-white rounded font-medium text-sm mt-2">Check Eligibility</button>
<div className="pt-4 border-t border-slate-200 text-center">
<p className="text-xs text-slate-500">Result</p>
<p className="text-lg font-semibold text-slate-700">Contact for accurate quote</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-10 reveal">
<a className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700" href="#contact">
                    Book a Call to Review Your Numbers <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
<p className="text-xs text-slate-400 mt-2">*Estimates only. Subject to OAC.</p>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50/50" id="reverse-mortgage">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="reveal">
<img alt="Happy senior couple gardening" className="rounded-2xl shadow-xl w-full h-auto object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6 reveal delay-200">
<div className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full uppercase tracking-wide">55+ Solution</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-blue-900">Homeowners 55+: Unlock Your Home Equity</h2>
<h3 className="text-xl text-slate-600 font-light">Access tax-free cash without monthly payments or selling your home.</h3>
<ul className="space-y-4 pt-2">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">Remain in your home while accessing equity.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">No monthly mortgage payments required.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-500 mt-1" data-lucide="check"></i>
<span className="text-slate-700">Tax-free funds for retirement, renovations, or helping family.</span>
</li>
</ul>
<div className="pt-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-all shadow-md" href="#contact">
                            Learn About Reverse Mortgages
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-900 text-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Let's Find Your Best Mortgage Solution</h2>
<p className="text-xl text-blue-200 font-light mb-10 max-w-2xl mx-auto">
                Book a free, no-obligation consultation. I'll review your situation and show you all available options tailored to your goals.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium text-blue-900 bg-amber-400 rounded-lg hover:bg-amber-300 focus:ring-4 focus:ring-amber-500/30 transition-all shadow-lg shadow-amber-500/20" href="mailto:mortgages@brendajafrudy.com">
                    Book Free Consultation
                </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-lg font-medium text-white border border-blue-400 rounded-lg hover:bg-blue-800 transition-all" href="tel:4165543705">
                    Call Now: (416) 554-3705
                </a>
</div>
<div className="mt-8 text-sm text-blue-300">
<p>No pressure. No obligation. Just honest guidance.</p>
<p className="mt-1 opacity-70">Mon-Fri 9am-8pm</p>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 mb-12">

<div>
<span className="text-xl font-semibold tracking-tighter text-white uppercase block mb-6">
                        Brenda<span className="text-amber-500">Jafrudy</span>
</span>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:mortgages@brendajafrudy.com">mortgages@brendajafrudy.com</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:4165543705">(416) 554-3705</a>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-500" data-lucide="clock"></i>
<span>Mon-Fri: 9:00 AM - 8:00 PM</span>
</li>
</ul>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#services">Mortgage Services</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#resources">Calculators</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#resources">Blog &amp; Webinars</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#contact">Book a Call</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#about">About Brenda</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Resources</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-amber-500 transition-colors" href="#">First-Time Buyer Guide</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#reverse-mortgage">Reverse Mortgage Info</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© <span id="year"></span> Brenda Jafrudy. All rights reserved.</p>
<div className="text-center md:text-right">
<p>Brenda Jafrudy, Mortgage Agent Level 2 - License M17000206</p>
<p>Tango Financial (ON) #13691</p>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-900 text-white shadow-lg translate-y-20 opacity-0 transition-all duration-300 hover:bg-amber-500 z-50" id="scrollToTop">
<i className="w-5 h-5" data-lucide="arrow-up"></i>
</button>


    </>
  );
}
