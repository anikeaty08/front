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



      // Sticky Header shrink effect
      const header = document.getElementById('header');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              header.classList.add('h-16');
              header.classList.remove('h-20');
          } else {
              header.classList.add('h-20');
              header.classList.remove('h-16');
          }
      });

      // Intersection Observer for Scroll Animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('is-visible');
                  observer.unobserve(entry.target); // Run once
              }
          });
      }, observerOptions);

      document.querySelectorAll('.animate-on-scroll').forEach((elem) => {
          observer.observe(elem);
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/70 backdrop-blur-xl border-b border-slate-200/80 h-20" id="header">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1a3a5c] to-blue-800 flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
<iconify-icon icon="solar:screencast-2-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            Precision Pro
          </span>
</a>

<nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-sm">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#home">
            Home
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#services">
            Services
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#capabilities">
            Capabilities
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#industries">
            Industries
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#quality">
            Quality
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white px-4 py-2 rounded-full transition-all duration-300" href="#about">
            About
          </a>
</nav>

<div className="hidden lg:flex items-center gap-5">
<a className="hidden xl:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#1a3a5c] transition-colors" href="tel:0422466237">
<iconify-icon className="text-blue-600" icon="solar:phone-bold-duotone" width="18"></iconify-icon>
            0422 466 237
          </a>
<a className="bg-slate-900 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#1a3a5c] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2" href="#contact">
            Request Quote
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>

<button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 transition-colors focus:outline-none">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900 flex items-center min-h-[90vh]" id="home">

<div className="absolute inset-0 z-0">
<img alt="CNC Machining" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-[#1a3a5c]/80 to-slate-900/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full animate-on-scroll">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-medium tracking-wide mb-6">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
            Australian Manufacturing Excellence
          </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[1.1] mb-6">
            We Make Precision Parts Work.
          </h1>
<p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed">
            Custom CNC Turning &amp; Milling for Metal and Plastic Components —
            Based in Australia, Serving Clients Globally.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-white text-[#1a3a5c] px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-slate-100 transition-colors" href="#contact">
              Request a Quote
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors" href="#capabilities">
              View Our Capabilities
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#1a3a5c] py-12 relative z-20 mt-[-2rem] max-w-7xl mx-auto rounded-2xl shadow-xl animate-on-scroll">
<div className="px-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 divide-y lg:divide-y-0 lg:divide-x divide-white/10 text-center">
<div className="pt-4 lg:pt-0">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">
              20+
            </div>
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              Years Experience
            </div>
</div>
<div className="pt-4 lg:pt-0">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">
              ISO
            </div>
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              9001 Certified
            </div>
</div>
<div className="pt-4 lg:pt-0">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">
              ±0.01
            </div>
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              mm Tolerance
            </div>
</div>
<div className="pt-4 lg:pt-0">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">
              6+
            </div>
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              Industries Served
            </div>
</div>
<div className="pt-4 lg:pt-0 col-span-2 md:col-span-1">
<div className="text-3xl font-semibold tracking-tighter text-white mb-1">
              100%
            </div>
<div className="text-xs font-medium text-blue-200 uppercase tracking-widest">
              Quality Inspected
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
            Core Manufacturing Services
          </h2>
<p className="text-base text-slate-500">
            Advanced machinery combined with decades of expertise to deliver
            components that meet exact specifications.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll delay-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1a3a5c] flex items-center justify-center mb-6">
<iconify-icon icon="solar:settings-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              CNC Turning
            </h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
              15-station power turret, 4-axis linkage capabilities. Managing
              turning diameters from Ø2.0 to Ø360mm, and lengths up to 750mm
              with exceptional precision.
            </p>
<a className="text-sm font-medium text-[#1a3a5c] flex items-center gap-1 group w-max" href="#contact">
              Discuss Project
              <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll delay-200 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1a3a5c] flex items-center justify-center mb-6">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              CNC Milling
            </h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
              Utilizing 3, 4 &amp; 5-axis machining centers to achieve tight
              tolerances up to ±0.01mm and exceptional surface finishes up to
              0.2 Ra.
            </p>
<a className="text-sm font-medium text-[#1a3a5c] flex items-center gap-1 group w-max" href="#contact">
              Discuss Project
              <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-on-scroll delay-300 flex flex-col h-full">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-[#1a3a5c] flex items-center justify-center mb-6">
<iconify-icon icon="solar:check-circle-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">
              Quality Assurance
            </h3>
<p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed">
              ISO 9001 quality management system featuring a rigorous 5-step
              inspection process utilizing advanced Keyence, Mitutoyo &amp; Tesa
              metrology instruments.
            </p>
<a className="text-sm font-medium text-[#1a3a5c] flex items-center gap-1 group w-max" href="#quality">
              View Process
              <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
              Industries Served
            </h2>
<p className="text-base text-slate-500">
              Delivering critical components across high-demand sectors
              requiring uncompromising accuracy and reliability.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:wheel-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Automotive
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Precision-engineered components for high-performance automotive
              applications, ensuring durability and exact tolerances.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:health-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Medical
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Biocompatible parts manufactured to strict hygiene and regulatory
              standards for critical medical devices.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Electronics
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Intricate casings and micro-components with superior surface
              finishes for advanced electronic devices.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:tractor-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Industrial
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Heavy-duty, wear-resistant parts designed to withstand extreme
              conditions in automated machinery and equipment.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:dashboard-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Instruments
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              High-precision components for scientific, measurement, and optical
              instruments where accuracy is paramount.
            </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-[#1a3a5c]/30 hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left">
<div className="w-14 h-14 rounded-xl bg-slate-50 text-[#1a3a5c] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#1a3a5c] group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:plane-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">
              Aerospace
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Lightweight, high-strength parts crafted from aerospace-grade
              materials meeting uncompromising safety standards.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-300" id="capabilities">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="animate-on-scroll">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-8">
              Materials We Machine
            </h2>
<div className="grid grid-cols-2 gap-x-8 gap-y-4">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Aluminum
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Steel &amp; Stainless Steel
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Titanium Alloys
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Brass &amp; Copper
                </li>
</ul>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Nylon &amp; POM
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  PEEK
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Superalloys
                </li>
<li className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:check-circle-bold" width="18"></iconify-icon>
                  Composites
                </li>
</ul>
</div>
</div>

<div className="animate-on-scroll delay-100">
<h2 className="text-3xl font-semibold tracking-tighter text-white mb-8">
              Technical Capabilities
            </h2>
<div className="bg-white/5 border border-white/10 rounded-xl p-6">
<div className="space-y-5">
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">
                    CNC Turning Capacity
                  </span>
<span className="text-sm font-mono text-blue-300">Ø2–360mm</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">
                    CNC Milling Envelope
                  </span>
<span className="text-sm font-mono text-blue-300">
                    800×600×400mm
                  </span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">
                    Swiss-type Lathe
                  </span>
<span className="text-sm font-mono text-blue-300">Ø0.5–25mm</span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">
                    Multi-Axis Operations
                  </span>
<span className="text-sm font-mono text-blue-300">
                    3, 4 &amp; 5-axis
                  </span>
</div>
<div className="flex justify-between items-center border-b border-white/10 pb-4">
<span className="text-sm font-medium text-white">
                    Standard Tolerance
                  </span>
<span className="text-sm font-mono text-blue-300">±0.01mm</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">
                    Surface Finish
                  </span>
<span className="text-sm font-mono text-blue-300">
                    Up to 0.2 Ra
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-16 text-center animate-on-scroll">
          Why Partner With Us
        </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-on-scroll">

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Diverse Material Processing
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Expert handling of metals, plastics, superalloys &amp;
                composites.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Scalable Production
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Seamless transition from small batch prototypes to large-scale
                manufacturing.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Turnkey Solutions
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                End-to-end service from design support to final assembly and
                surface treatment.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Industry Expertise
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Deep understanding of aerospace, automotive, medical &amp;
                electronics standards.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:routing-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Integrated Supply Chain
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Strong supplier network ensuring high-quality raw materials and
                on-time delivery.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 w-10 h-10 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#1a3a5c]">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900 mb-1">
                Experienced Stable Team
              </h4>
<p className="text-sm text-slate-500 leading-relaxed">
                Skilled engineers and operators with decades of combined
                industry experience.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="quality">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
            Rigorous Quality Assurance
          </h2>
<p className="text-base text-slate-500">
            We strictly adhere to the ISO 9001 international quality management
            system, taking full responsibility for every part we produce.
          </p>
</div>
<div className="relative process-line animate-on-scroll delay-100">
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-[#1a3a5c] shadow-sm mb-4">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Step 1
              </span>
<h5 className="text-sm font-medium text-slate-900">
                First Piece Inspection
              </h5>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-[#1a3a5c] shadow-sm mb-4">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Step 2
              </span>
<h5 className="text-sm font-medium text-slate-900">
                In-Production Inspection
              </h5>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-[#1a3a5c] border-4 border-blue-100 flex items-center justify-center text-white shadow-md mb-4 ring-4 ring-slate-50">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Step 3
              </span>
<h5 className="text-sm font-medium text-slate-900">
                QC Room Inspection
              </h5>
<p className="text-xs text-slate-500 mt-1">Keyence, Mitutoyo</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-[#1a3a5c] shadow-sm mb-4">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Step 4
              </span>
<h5 className="text-sm font-medium text-slate-900">
                Final Inspection
              </h5>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-white border-4 border-slate-50 flex items-center justify-center text-[#1a3a5c] shadow-sm mb-4">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
                Step 5
              </span>
<h5 className="text-sm font-medium text-slate-900">
                Packing &amp; Shipping
              </h5>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900">
            Precision in Practice
          </h2>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-medium tracking-wide">
              All Parts
            </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium tracking-wide hover:bg-slate-100 transition-colors">
              Automotive
            </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium tracking-wide hover:bg-slate-100 transition-colors">
              Medical
            </button>
<button className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium tracking-wide hover:bg-slate-100 transition-colors">
              Electronics
            </button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-on-scroll delay-100">
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-[3/4] md:col-span-2 bg-slate-200 rounded-xl overflow-hidden relative group">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-[3/4] bg-slate-200 rounded-xl overflow-hidden relative group">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square bg-slate-200 rounded-xl overflow-hidden relative group md:col-span-2">
<img alt="CNC Part" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-6">
              About Precision Pro Engineering
            </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
              Precision Pro Engineering is a technology-driven CNC machining
              specialist based in Keiraville, NSW, Australia. With over 20 years
              of industry experience, we deliver custom precision metal and
              plastic components to clients across Australia and
              internationally.
            </p>
<p className="text-base text-slate-600 mb-8 leading-relaxed">
              Our team combines deep engineering expertise with advanced CNC
              equipment to produce parts that meet the most demanding tolerances
              and industry standards. We serve clients in automotive, medical,
              electronics, aerospace, and industrial sectors, offering
              end-to-end solutions from design consultation through to final
              inspection and delivery.
            </p>
<div className="flex items-center gap-6">
<div>
<div className="text-2xl font-semibold text-[#1a3a5c]">100%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Australian Owned
                </div>
</div>
<div className="w-px h-8 bg-slate-200"></div>
<div>
<div className="text-2xl font-semibold text-[#1a3a5c]">ISO</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                  Quality Standard
                </div>
</div>
</div>
</div>
<div className="relative animate-on-scroll delay-100">
<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
<img alt="Manufacturing Facility" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-slate-900 mb-4">
              Get in Touch
            </h2>
<p className="text-base text-slate-500 mb-10">
              Send us your technical drawings or project details, and our
              engineering team will get back to you with a comprehensive quote
              within 24 hours.
            </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#1a3a5c]">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Headquarters
                  </h4>
<p className="text-sm text-slate-600">
                    3 Cassian St
                    <br/>
                    Keiraville NSW 2500, Australia
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#1a3a5c]">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Phone / WhatsApp
                  </h4>
<a className="text-sm text-slate-600 hover:text-[#1a3a5c] transition-colors" href="tel:0422466237">
                    0422 466 237
                  </a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#1a3a5c]">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">
                    Email
                  </h4>
<a className="text-sm text-slate-600 hover:text-[#1a3a5c] transition-colors" href="mailto:email@precisionproengineering.com.au">
                    email@precisionproengineering.com.au
                  </a>
</div>
</div>
</div>

<div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13146.502804533036!2d150.8653835!3d-34.4093952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1319760df224f1%3A0x5017d681632cf40!2sKeiraville%20NSW%202500%2C%20Australia!5e0!3m2!1sen!2sus!4v1698765432109!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-on-scroll delay-100">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name
                  </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Company Name
                  </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none" placeholder="Acme Corp" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email Address
                  </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none" placeholder="john@example.com" type="email"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone Number
                  </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none" placeholder="+61 ..." type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Service Interested In
                </label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none text-slate-600">
<option>CNC Turning</option>
<option>CNC Milling</option>
<option>Quality Inspection</option>
<option>Other / Not Sure</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Message / Project Details
                </label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-sm focus:bg-white focus:border-[#1a3a5c] focus:ring-1 focus:ring-[#1a3a5c] transition-all outline-none resize-none" placeholder="Please provide dimensions, materials, and quantities if known..." rows="4"></textarea>
</div>
<button className="w-full bg-[#1a3a5c] text-white py-3 rounded-lg text-sm font-semibold hover:bg-[#11273e] transition-colors shadow-sm mt-2" type="submit">
                Send Enquiry
              </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="text-xl font-semibold tracking-tighter text-white uppercase">
                Precision Pro
              </span>
</a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">
              Precision engineered. Australian made. Delivering high-quality CNC
              machined components globally.
            </p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Company
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm hover:text-white transition-colors" href="#about">
                  About Us
                </a>
</li>
<li>
<a className="text-sm hover:text-white transition-colors" href="#quality">
                  Quality Assurance
                </a>
</li>
<li>
<a className="text-sm hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
<ul className="space-y-3">
<li>
<a className="text-sm hover:text-white transition-colors" href="#services">
                  CNC Turning
                </a>
</li>
<li>
<a className="text-sm hover:text-white transition-colors" href="#services">
                  CNC Milling
                </a>
</li>
<li>
<a className="text-sm hover:text-white transition-colors" href="#capabilities">
                  Materials
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Contact
            </h4>
<ul className="space-y-3">
<li className="text-sm">3 Cassian St, Keiraville NSW 2500</li>
<li className="text-sm">
<a className="hover:text-white transition-colors" href="tel:0422466237">
                  0422 466 237
                </a>
</li>
<li className="text-sm">
<a className="hover:text-white transition-colors" href="mailto:email@precisionproengineering.com.au">
                  email@precisionproengineering.com.au
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
            © 2025 Precision Pro Engineering. All rights reserved.
          </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1 hover:shadow-xl transition-all duration-300" href="https://wa.me/61422466237" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>



    </>
  );
}
