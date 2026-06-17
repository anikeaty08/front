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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: unobserve after animation triggers once
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            // Observe reveal elements
            document.querySelectorAll('.reveal, .reveal-scale, .img-mask-reveal').forEach((el) => {
                // Remove active class initially if it's there (for image masks)
                if(!el.classList.contains('img-mask-reveal')) {
                    el.classList.remove('active');
                } else {
                     setTimeout(() => el.classList.add('active'), 500); // Hero images reveal immediately
                }
                observer.observe(el);
            });

            // Sticky Navbar logic
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    navbar.classList.add('shadow-sm', 'border-slate-200');
                    navbar.classList.remove('border-transparent', 'bg-white/80');
                    navbar.classList.add('bg-white/95');
                } else {
                    navbar.classList.remove('shadow-sm', 'border-slate-200', 'bg-white/95');
                    navbar.classList.add('border-transparent', 'bg-white/80');
                }
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
      

<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl bg-emerald-800 flex items-center justify-center text-white transform group-hover:rotate-12 transition-transform duration-300 shadow-md">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900 uppercase tracking-widest">Florida Apex</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative group" href="#about">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative group" href="#services">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative group" href="#projects">
                        Projects
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-800 transition-colors relative group" href="#reviews">
                        Reviews
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-500 transition-colors" href="tel:727-627-8606">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        727-627-8606
                    </a>
<a className="px-5 py-2.5 rounded-full bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-700 hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-800/20 flex items-center gap-2" href="#contact">
                        Request Quote
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="lg:hidden p-2 text-slate-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="min-h-screen flex overflow-hidden bg-slate-50 pt-20 relative items-center">

<div className="glass-blob w-[40rem] h-[40rem] bg-emerald-200/50 -top-20 -right-20 animate-float"></div>
<div className="glass-blob w-[30rem] h-[30rem] bg-amber-100/40 bottom-10 -left-10 animate-float-delayed"></div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#065f46 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full">
<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8 reveal">
<iconify-icon className="text-amber-500" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-700 uppercase tracking-widest">30+ Years Experience</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-tight mb-6 reveal delay-100">
                    Elevating Florida Properties <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-500">Inside &amp; Out</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed reveal delay-200">
                    From beautiful outdoor landscaping to premium interior remodels and flooring, Florida Apex LLC delivers exceptional craftsmanship, innovative design, and reliable service for both residential and commercial spaces.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="px-8 py-4 rounded-full bg-amber-500 text-white font-medium hover:bg-amber-400 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group" href="#contact">
                        Get Your Estimate
                        <iconify-icon className="text-xl group-hover:rotate-45 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full bg-white text-slate-900 font-medium border border-slate-200 hover:border-emerald-800 hover:text-emerald-800 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md" href="tel:727-627-8606">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
                        Call 727-627-8606
                    </a>
</div>

<div className="mt-12 flex items-center gap-6 reveal delay-300 border-t border-slate-200 pt-8">
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Commercial
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Residential
                    </div>
<div className="flex items-center gap-2 text-sm font-medium text-slate-700">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Fully Custom
                    </div>
</div>
</div>

<div className="relative hidden lg:block h-[600px] reveal-scale delay-200">
<div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 border-4 border-white img-mask-reveal active">
<img alt="Modern Landscaping" className="hover:scale-105 transition-transform duration-1000 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b717c07-bd5e-49aa-b148-9d89423d47f5_1600w.png"/>
</div>
<div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-white transform -translate-y-12 translate-x-12 hover:-translate-y-16 transition-transform duration-500 img-mask-reveal active">
<img alt="Interior Remodel" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07a5a5cd-30de-4eda-aa93-a10f81071bfd_800w.png"/>
</div>

<div className="absolute top-1/2 -left-12 z-30 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
<iconify-icon className="text-emerald-800 text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900 tracking-tight">Top Rated</p>
<p className="text-xs text-slate-500">Local Contractor</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-emerald-900 relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-emerald-800/50">
<div className="text-center reveal">
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">30+</p>
<p className="text-xs font-medium text-emerald-200 uppercase tracking-widest">Years Experience</p>
</div>
<div className="text-center reveal delay-100">
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">100%</p>
<p className="text-xs font-medium text-emerald-200 uppercase tracking-widest">Custom Designs</p>
</div>
<div className="text-center reveal delay-200">
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">2</p>
<p className="text-xs font-medium text-emerald-200 uppercase tracking-widest">Core Divisions</p>
</div>
<div className="text-center reveal delay-300">
<p className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">5★</p>
<p className="text-xs font-medium text-emerald-200 uppercase tracking-widest">Quality Standard</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-scale">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative">
<img alt="Team working" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d19fbe9-4fc3-4241-a9fa-40ec746e02e0_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<p className="text-xl font-semibold text-white tracking-tight mb-2">Committed to Excellence</p>
<p className="text-sm text-slate-200">Delivering quality every time.</p>
</div>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-50 rounded-full z-[-1]"></div>
<div className="absolute -top-8 -left-8 w-32 h-32 bg-amber-50 rounded-full z-[-1]"></div>
</div>
<div className="">
<span className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3 block reveal">Our Story</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 reveal delay-100">
                        A Legacy of Quality Craftsmanship
                    </h2>
<div className="space-y-6 text-slate-600 text-base leading-relaxed reveal delay-200">
<p className="">
                            At <span className="font-medium text-slate-900">Florida Apex Indoor &amp; Outdoor Living</span>, we started with a simple goal: providing the absolute best services to our customers. With over 30 years of hands-on experience in the industry, we have established ourselves as a trusted brand that delivers unwavering quality on every project.
                        </p>
<p>
                            Our mission is to utilize our deep expertise to provide exceptional service. We work closely with homeowners and commercial clients to understand their vision, providing customized solutions that consistently exceed expectations. From smaller handyman tasks to sprawling residential landscaping and large-scale commercial remodels, we have the broad range of skills needed to bring any vision to life.
                        </p>
<p className="font-medium text-emerald-800">
                            Indoor or outdoor, anything can be accomplished.
                        </p>
</div>
<div className="mt-10 flex gap-4 reveal delay-300">
<div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
<iconify-icon className="text-3xl text-emerald-600 mb-3 block" icon="solar:leaf-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 tracking-tight mb-1">Outdoor Masters</h3>
<p className="text-sm text-slate-500">Commercial &amp; residential landscaping design and installation.</p>
</div>
<div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
<iconify-icon className="text-3xl text-amber-500 mb-3 block" icon="solar:home-smile-linear"></iconify-icon>
<h3 className="font-semibold text-slate-900 tracking-tight mb-1">Indoor Experts</h3>
<p className="text-sm text-slate-500">Premium remodeling, flooring, and interior upgrades.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-3 block">Comprehensive Solutions</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Everything You Need Under One Roof</h2>
<p className="text-slate-600">From innovative landscaping designs to detailed interior remodels, we tailor our services to meet the exact needs of your property.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-emerald-600 transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Commercial Landscaping</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Enhance curb appeal and maintain professional exteriors with our large-scale property management and landscape design.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal delay-100">
<div className="flex group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500 bg-slate-50 w-14 h-14 rounded-2xl mb-6 items-center justify-center">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-emerald-600 transition-colors" icon="solar:tree-linear"></iconify-icon>
<iconify-icon className="group-hover:text-emerald-600 transition-colors text-3xl text-slate-700" height="30" icon="solar:ruler-pen-linear" style={{color: 'rgb(5, 150, 105)'}} width="30"></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Residential Landscaping</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Transform your backyard into an oasis. Custom outdoor living upgrades, planting, hardscaping, and ongoing care.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal delay-200">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="group-hover:text-emerald-600 transition-colors text-3xl text-slate-700" height="30" icon="solar:code-scan-outline" style={{color: 'rgb(5, 150, 105)'}} width="30"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Indoor Remodels</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Complete interior transformations. Kitchens, bathrooms, and living spaces redesigned to elevate your lifestyle.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-emerald-600 transition-colors" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Flooring Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Premium hardwood, tile, laminate, and custom flooring solutions installed with meticulous attention to detail.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal delay-100">
<div className="flex group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500 bg-slate-50 w-14 h-14 rounded-2xl mb-6 items-center justify-center">
<iconify-icon className="text-3xl text-slate-700 group-hover:text-emerald-600 transition-colors" icon="solar:hammer-linear"></iconify-icon>
<iconify-icon className="group-hover:text-emerald-600 transition-colors text-3xl text-slate-700" height="30" icon="solar:magic-stick-3-linear" style={{color: 'rgb(5, 150, 105)'}} width="30"></iconify-icon></div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Handyman Services</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">No job is too small. General maintenance, repairs, and minor property improvements executed flawlessly.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500 reveal delay-200">
<div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-emerald-50 group-hover:scale-110 transition-all duration-500">
<iconify-icon className="group-hover:text-emerald-600 transition-colors text-3xl text-slate-700" height="30" icon="solar:tornado-outline" style={{color: 'rgb(5, 150, 105)'}} width="30"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Custom Property Upgrades</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Bespoke design solutions tailored to your specific goals, integrating both indoor and outdoor improvements seamlessly.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-800 group-hover:text-amber-500 transition-colors" href="#contact">
                        Learn more <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-0 flex flex-col lg:flex-row w-full h-auto lg:h-[600px]">

<div className="lg:w-1/2 relative group overflow-hidden h-[400px] lg:h-full">
<img alt="Commercial Building" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/70 transition-colors duration-500"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-end reveal">
<span className="text-emerald-400 text-sm font-medium uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon icon="solar:buildings-linear"></iconify-icon> B2B Solutions
                </span>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Commercial Expertise</h2>
<p className="text-slate-200 text-sm max-w-md mb-6 hidden sm:block">Reliable, large-scale property enhancements and ongoing landscape management for business owners and property managers.</p>
<a className="inline-flex items-center justify-center w-max px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-slate-900 transition-all duration-300 text-sm font-medium" href="#contact">
                    View Commercial Services
                </a>
</div>
</div>

<div className="lg:w-1/2 relative group overflow-hidden h-[400px] lg:h-full">
<img alt="Residential Home" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-900/60 group-hover:bg-emerald-900/70 transition-colors duration-500"></div>
<div className="absolute inset-0 p-12 flex flex-col justify-end reveal delay-100">
<span className="text-amber-400 text-sm font-medium uppercase tracking-widest mb-2 flex items-center gap-2">
<iconify-icon className="" icon="solar:home-smile-linear"></iconify-icon> Homeowners
                </span>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Residential Transformations</h2>
<p className="text-emerald-100 text-sm max-w-md mb-6 hidden sm:block">Personalized indoor/outdoor upgrades, curb appeal improvements, and custom remodels to make your house a dream home.</p>
<a className="inline-flex items-center justify-center w-max px-6 py-3 rounded-full bg-amber-500 text-white hover:bg-amber-400 transition-all duration-300 text-sm font-medium shadow-lg shadow-amber-500/20" href="#contact">
                    Start Your Home Project
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end gap-6 reveal mb-16 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-3 block">Portfolio</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Work Speaks for Itself</h2>
<p className="text-slate-600 text-sm">Explore our recent residential and commercial projects, showcasing our commitment to quality craftsmanship and innovative design.</p>
</div>
<a className="hidden md:inline-flex px-6 py-3 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 font-medium text-sm transition-colors whitespace-nowrap" href="#contact">
                    Start a Project
                </a>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden reveal">
<img alt="Landscape" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b717c07-bd5e-49aa-b148-9d89423d47f5_800w.png)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="">
<p className="text-white font-medium tracking-tight">Modern Landscape Design</p>
<p className="text-emerald-300 text-xs">Residential Outdoor</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden reveal delay-100">
<img alt="Kitchen Remodel" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<p className="text-white font-medium tracking-tight">Luxury Kitchen Remodel</p>
<p className="text-amber-400 text-xs">Indoor Improvements</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden reveal delay-200">
<img alt="Hardwood Flooring" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div className="">
<p className="text-white font-medium tracking-tight">Premium Hardwood Flooring</p>
<p className="text-emerald-300 text-xs">Flooring Installation</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-sm transition-colors" href="#contact">
                    Start a Project
                </a>
</div>
</div>
</section>

<section className="py-24 bg-emerald-900 relative overflow-hidden" id="reviews">

<div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
<iconify-icon className="text-[40rem] text-emerald-100" icon="solar:leaf-bold"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-xs font-semibold text-emerald-300 uppercase tracking-widest mb-3 block">Client Reviews</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Trusted by Florida Properties</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl reveal hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-50 text-sm leading-relaxed mb-6">"Florida Apex transformed our entire backyard and installed new hardwood floors inside. Their team was professional, clean, and the craftsmanship is outstanding. Highly recommend for any property upgrades."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-medium text-sm">MS</div>
<div className="">
<p className="text-white text-sm font-medium">Michael S.</p>
<p className="text-xs text-emerald-300">Homeowner</p>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl reveal delay-100 hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-50 text-sm leading-relaxed mb-6">"We manage several commercial properties and rely on Florida Apex for our landscaping needs. They are dependable, their work always looks immaculate, and they communicate perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-800 flex items-center justify-center text-white font-medium text-sm">JD</div>
<div className="">
<p className="text-white text-sm font-medium">Jessica D.</p>
<p className="text-xs text-emerald-300">Homeowner</p>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl reveal delay-200 hover:-translate-y-2 transition-transform duration-300">
<div className="flex gap-1 mb-4 text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-50 text-sm leading-relaxed mb-6">"Hired them for a kitchen remodel and some handyman fixes around the house. They brought 30+ years of experience and it showed. The attention to detail was exceptional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-medium text-sm">RT</div>
<div>
<p className="text-white text-sm font-medium">Robert T.</p>
<p className="text-emerald-300 text-xs">Homeowner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden reveal-scale">

<div className="lg:col-span-3 p-8 md:p-12">
<span className="text-xs font-semibold text-amber-500 uppercase tracking-widest mb-2 block">Free Estimate</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Let's Transform Your Property</h2>
<p className="text-sm text-slate-500 mb-8">Fill out the form below or call us directly. We respond promptly to all inquiries.</p>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white" id="phone" placeholder="(727) 627-8606" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white" id="email" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 appearance-none transition-all focus:bg-white" id="service">
<option>Commercial Landscaping</option>
<option>Residential Landscaping</option>
<option>Indoor Remodel</option>
<option>Flooring Installation</option>
<option>Handyman Services</option>
<option>Other / Not Sure</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1" htmlFor="message">Project Details</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all focus:bg-white resize-none" id="message" placeholder="Tell us about your project goals..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-emerald-800 text-white font-medium hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-800/20 flex items-center justify-center gap-2 group" type="button">
                            Submit Request
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>

<div className="lg:col-span-2 bg-emerald-900 relative overflow-hidden flex flex-col">
<div className="p-8 md:p-12 relative z-10 flex-grow">
<h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
<div className="space-y-6">
<a className="flex items-start gap-4 text-emerald-100 hover:text-white transition-colors group" href="tel:727-627-8606">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-emerald-300 mb-1">Call Us</p>
<p className="text-lg font-medium tracking-tight">727-627-8606</p>
</div>
</a>
<div className="flex items-start gap-4 text-emerald-100">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-emerald-300 mb-1">Service Area</p>
<p className="text-sm leading-relaxed">Proudly Serving Florida Clients.<br/>Residential &amp; Commercial Properties.</p>
</div>
</div>
<div className="flex items-start gap-4 text-emerald-100">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-widest text-emerald-300 mb-1">Hours</p>
<p className="text-sm">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment</p>
</div>
</div>
</div>
</div>

<div className="h-64 w-full bg-slate-200 relative mt-auto filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766094.6143927656!2d-83.33777265882672!3d27.994402636952755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d1b0d0a0!2sFlorida!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 group mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-emerald-800 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white uppercase tracking-widest">Florida Apex</span>
</a>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Premium landscaping, indoor remodels, flooring, and property improvements backed by 30+ years of industry experience.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-800 hover:bg-emerald-900 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon> 
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-800 hover:bg-emerald-900 transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon> 
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold tracking-tight mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-amber-500 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-amber-500 transition-colors" href="#projects">Project Gallery</a></li>
<li><a className="text-sm text-slate-400 hover:text-amber-500 transition-colors" href="#reviews">Testimonials</a></li>
<li><a className="text-sm text-slate-400 hover:text-amber-500 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold tracking-tight mb-6">Services</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors" href="#services">Commercial Landscaping</a></li>
<li><a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors" href="#services">Residential Landscaping</a></li>
<li><a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors" href="#services">Indoor Remodels</a></li>
<li><a className="text-sm text-slate-400 hover:text-emerald-400 transition-colors" href="#services">Flooring Installation</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold tracking-tight mb-6">Get in Touch</h4>
<div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 relative overflow-hidden group">
<div className="absolute inset-0 bg-emerald-900/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
<div className="relative z-10">
<p className="text-sm text-slate-300 mb-4">Ready to start your next project? Let's discuss your vision.</p>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 text-white text-sm font-medium hover:bg-emerald-700 transition-colors w-full justify-center" href="tel:727-627-8606">
<iconify-icon icon="solar:phone-linear"></iconify-icon> 727-627-8606
                            </a>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2023 Florida Apex LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="lg:hidden fixed bottom-6 right-6 w-14 h-14 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-xl shadow-amber-500/30 z-50 hover:scale-110 transition-transform" href="tel:727-627-8606">
<iconify-icon className="text-2xl animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
</a>



    </>
  );
}
