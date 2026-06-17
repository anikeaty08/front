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



                !function () {
                    if (!window.UnicornStudio) {
                    window.UnicornStudio = { isInitialized: !1 };
                    var i = document.createElement("script");
                    i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
                    i.onload = function () {
                        window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
                    },
                    (document.head || document.body).appendChild(i)
                    }
                }();
                


        document.addEventListener('DOMContentLoaded', () => {
            // Initialize Lucide Icons globally with 1.5 stroke-width
            lucide.createIcons({
                strokeWidth: 1.5
            });

            // Navbar blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 10) {
                    navbar.classList.add('shadow-sm', 'bg-white/90');
                    navbar.classList.remove('bg-white/80');
                } else {
                    navbar.classList.remove('shadow-sm', 'bg-white/90');
                    navbar.classList.add('bg-white/80');
                }
            });

            // Intersection Observer for Scroll Animations using Tailwind standard classes
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove the setup classes and apply final state
                        entry.target.classList.remove('opacity-0', 'translate-y-8', '-translate-x-8', 'translate-x-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.scroll-element');
            scrollElements.forEach(el => observer.observe(el));
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
      

<div className="hidden md:block bg-[#0A0F1C] text-slate-300 py-2.5 z-50 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
<div className="flex items-center gap-4 text-sm tracking-tight">
<span className="flex items-center gap-1.5 font-light">
<i className="w-4 h-4 text-[#0F52BA]" data-lucide="shield-check"></i>
                    Licence: 0092666
                </span>
<span className="flex items-center gap-1.5 text-[#E34234] font-normal">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
                    24/7 Emergency Service
                </span>
</div>
<div className="flex flex-wrap justify-center items-center gap-4 text-sm tracking-tight">
<span className="inline-flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full text-white font-light">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>
                    Hablamos Español
                </span>
<a className="hidden md:inline-flex items-center gap-1.5 font-light hover:text-white transition-colors cursor-pointer group" href="https://www.synchrony.com/mmc/S6241328100" rel="noopener noreferrer" target="_blank">
<i className="w-4 h-4 text-[#0F52BA] group-hover:text-white transition-colors" data-lucide="credit-card"></i>
                    Credit Cards &amp; Financing
                </a>

<div className="flex items-center gap-3 border-l border-slate-700 pl-4 ml-1">
<a className="text-slate-400 hover:text-white transition-colors flex items-center" href="https://www.facebook.com/p/One-Stop-Cooling-And-Heating-LLC-61567419657995/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="16" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center" href="https://www.instagram.com/hvaclv702/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="16" icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 backdrop-blur-xl border-b border-slate-200/50 transition-all duration-300" id="navbar">
<div className="flex md:h-20 sm:px-6 h-16 max-w-7xl mx-auto px-4 items-center justify-between">

<a className="flex items-center gap-2 group shrink-0 whitespace-nowrap transition-transform hover:scale-105" href="#">
<i className="w-7 h-7 md:w-8 md:h-8 text-[#0F52BA]" data-lucide="snowflake"></i>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-1.5">
<span className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 leading-none">One Stop</span>
<i className="w-4 h-4 md:w-5 md:h-5 text-[#E34234]" data-lucide="flame" fill="currentColor"></i>
</div>
<span className="text-xs font-normal tracking-tight text-slate-600 leading-none mt-1">Cooling and Heating LLC</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-lg font-light text-slate-800">
<a className="hover:text-[#0F52BA] transition-colors" href="#about">About</a>
<a className="hover:text-[#0F52BA] transition-colors" href="#services">Services</a>
<a className="hover:text-[#0F52BA] transition-colors" href="#catalog">Work</a>
<a className="hover:text-[#0F52BA] transition-colors" href="#process">Process</a>
<a className="hover:text-[#0F52BA] transition-colors" href="#testimonials">Reviews</a>
</div>
<div className="flex items-center gap-3 md:gap-4 shrink-0">
<a className="hidden md:flex items-center gap-2 text-lg font-normal text-slate-900 hover:text-[#0F52BA] transition-colors group" href="tel:+17028120095">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
<i className="w-4 h-4 text-[#0F52BA]" data-lucide="phone"></i>
</div>
                    702.812.0095
                </a>
<a className="hover:bg-[#0F52BA] transition-all hover:shadow-lg hover:shadow-[#0F52BA]/30 transform hover:-translate-y-0.5 text-sm md:text-base font-normal text-white bg-slate-900 rounded-full px-4 py-2 md:px-5 md:py-2.5" href="#contact">
                    Request Service
                </a>
</div>
</div>
</nav>

<section className="w-full flex flex-col z-30 relative bg-white">

<div className="bg-[#182942] py-8 md:py-10 px-4 flex flex-col items-center justify-center text-center">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Call us</span>
<a className="text-6xl md:text-8xl font-semibold text-white tracking-tight mb-2 hover:opacity-80 transition-opacity" href="tel:+17028120095">702.812.0095</a>
<span className="text-2xl md:text-3xl font-medium text-[#5bb4ff] tracking-tight mt-1">Hablamos Español</span>
</div>

<div className="relative py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden min-h-[500px]">

<div className="absolute inset-0 z-0">
<img alt="Adjusting thermostat" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c772ec3e-d6c0-49c3-a646-e87801a9493e_800w.png"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#1c5596]/90 to-[#d63327]/90"></div>

<div className="relative z-20 max-w-5xl mx-auto px-4 flex flex-col items-center w-full drop-shadow-xl">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Welcome to</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight w-full flex flex-col items-center mb-6">
<span className="flex items-center justify-center gap-4 mb-2">
<span>❄️</span>
<span>One Stop</span>
<span>🔥</span>
</span>
<span>Cooling and Heating LLC</span>
</h1>
<p className="text-3xl md:text-4xl font-normal text-white tracking-tight mb-6">Residential Installation, Repair &amp; Maintenance</p>
<p className="text-4xl md:text-5xl font-medium text-white tracking-tight mt-2">Licence: 0092666</p>

<div className="flex items-center gap-6 mt-10 md:mt-12">
<a aria-label="Follow us on Facebook" className="text-white/50 hover:text-white transition-all duration-300 hover:scale-110 flex items-center" href="https://www.facebook.com/p/One-Stop-Cooling-And-Heating-LLC-61567419657995/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="32" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</a>
<a aria-label="Follow us on Instagram" className="text-white/50 hover:text-white transition-all duration-300 hover:scale-110 flex items-center" href="https://www.instagram.com/hvaclv702/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="32" icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-[#182942] py-12 md:py-16 px-4 flex flex-col items-center justify-center text-center border-t border-[#2a3f6a]">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#facc15] tracking-tight max-w-5xl leading-tight mb-8">We accept credit cards and financing available.</h2>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-[#0A0F1C] text-lg font-medium rounded-full hover:bg-slate-100 transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-black/10 group" href="https://www.synchrony.com/mmc/S6241328100" rel="noopener noreferrer" target="_blank">
                Apply Online
                <i className="w-5 h-5 text-slate-400 group-hover:text-[#0A0F1C] transition-colors" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="w-full bg-slate-100 flex justify-center overflow-hidden">
<img alt="Service Van Placeholder" className="w-full h-auto object-cover max-h-[60vh] object-center mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af76825c-a869-42ae-a1dd-02baa40ddf22_800w.png"/>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-b border-slate-100 relative" id="about">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center scroll-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl tracking-tight font-normal text-slate-900 mb-2">About Us</h2>
<h3 className="text-xl md:text-2xl tracking-tight font-normal text-[#0F52BA] mb-6">One Stop Cooling and Heating LLC</h3>
<p className="text-lg md:text-xl font-light text-slate-500 leading-relaxed max-w-3xl mx-auto">
                    We specialize in providing top-notch heating and cooling solutions for your home or business. With years of experience in the industry, our team of professionals is dedicated to delivering the best service, ensuring a comfortable and efficient environment all year round.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 scroll-element transition-all duration-700 ease-out opacity-100 translate-y-0 translate-x-0">
<h2 className="md:text-4xl text-3xl font-normal text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="md:text-xl text-lg text-slate-500 font-light">Expert installation, repair, and maintenance for all your residential heating and cooling needs. Fast, reliable, and licensed.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="group bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-200 scroll-element duration-700 ease-out">
<div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center text-[#0F52BA] mb-6 group-hover:scale-110 group-hover:bg-[#0F52BA] group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="snowflake"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">Home AC Installation &amp; Repair</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">Stay cool during peak summer. We install high-efficiency units and repair existing home systems swiftly.</p>
<a className="inline-flex items-center gap-2 text-base md:text-lg font-normal text-[#0F52BA] group-hover:translate-x-1 transition-transform" href="#contact">
                        Request Service <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-200 scroll-element duration-700 ease-out delay-100">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E34234] mb-6 group-hover:scale-110 group-hover:bg-[#E34234] group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="flame"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">Residential Heating Systems</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">Reliable residential furnace and heat pump repair, maintenance, and new installations to keep your house warm.</p>
<a className="inline-flex items-center gap-2 text-base md:text-lg font-normal text-[#E34234] group-hover:translate-x-1 transition-transform" href="#contact">
                        Request Service <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group md:p-8 md:rounded-3xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-200 scroll-element duration-700 ease-out bg-slate-50 border-slate-100 border rounded-2xl px-6 py-6">
<div className="w-12 h-12 rounded-xl bg-blue-100/50 flex items-center justify-center text-[#0F52BA] mb-6 group-hover:scale-110 group-hover:bg-[#0F52BA] group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">Home HVAC Maintenance</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">Preventative care to extend the life of your household equipment and lower residential energy bills year-round.</p>
</div>

<div className="group bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl hover:border-slate-200 scroll-element duration-700 ease-out delay-200">
<div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E34234] mb-6 group-hover:scale-110 group-hover:bg-[#E34234] group-hover:text-white transition-all">
<i className="w-6 h-6" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">Emergency Services</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-6">24/7 rapid response for critical residential HVAC failures. We're here when your family needs us most.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FAFAFA] border-t border-slate-200/50" id="catalog">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-10 md:mb-16 scroll-element transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl tracking-tight font-normal text-slate-900 mb-4">Recent Home Installations &amp; Projects</h2>
<p className="text-lg md:text-xl font-light text-slate-500">Take a look at some of the premium systems we’ve serviced and installed for homeowners.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white aspect-[4/3] sm:aspect-square shadow-sm scroll-element transition-all duration-700 ease-out delay-75">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1775024179/IMG_1057_bhebo5.mov"></video>
</div>

<div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white aspect-[4/3] sm:aspect-square shadow-sm scroll-element transition-all duration-700 ease-out delay-75">
<img alt="Outdoor AC Unit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ee4f9a65-83e9-4ffd-b765-dff9c4f1d601_800w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white aspect-[4/3] sm:aspect-square shadow-sm scroll-element transition-all duration-700 ease-out delay-75">
<img alt="Smart Thermostat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23165c27-49e3-4208-b76f-93b8fa5ded6e_800w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/60 bg-white aspect-[4/3] sm:aspect-square shadow-sm scroll-element transition-all duration-700 ease-out delay-75">
<img alt="HVAC Equipment" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1cc5b9c-fc16-40e5-86e3-0b20a90f8b2e_800w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white relative overflow-hidden border-t border-slate-200/60" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-2xl mx-auto mb-12 md:mb-20 scroll-element transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl tracking-tight font-normal text-slate-900 mb-4">Our Simple Process</h2>
<p className="text-lg md:text-xl font-light text-slate-500">Getting your home back to comfortable is just three steps away.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">

<div className="hidden md:block absolute top-[40%] left-[15%] right-[15%] h-px bg-slate-200 -translate-y-1/2 z-0"></div>

<div className="z-10 scroll-element transition-all duration-700 ease-out bg-slate-50 border-slate-100 border rounded-2xl md:rounded-3xl p-8 relative flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 relative shadow-sm border border-slate-100">
<span className="absolute -top-3 -right-3 text-5xl font-light text-slate-200 select-none pointer-events-none tracking-tight">1</span>
<i className="w-7 h-7 text-[#0F52BA] relative z-10" data-lucide="phone-call"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">Call or Request</h3>
<p className="text-lg font-light text-slate-500">Reach out via phone (<a className="text-[#0F52BA] hover:underline font-normal" href="tel:+17028120095">702.812.0095</a>) or our online form. Hablamos Español.</p>
</div>

<div className="z-10 scroll-element transition-all duration-700 ease-out delay-100 bg-slate-50 border-slate-100 border rounded-2xl md:rounded-3xl p-8 relative flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 relative shadow-sm border border-slate-100">
<span className="absolute -top-3 -right-3 text-5xl font-light text-slate-200 select-none pointer-events-none tracking-tight">2</span>
<i className="w-7 h-7 text-slate-800 relative z-10" data-lucide="search"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">We Diagnose</h3>
<p className="text-lg font-light text-slate-500">Our licensed residential technicians arrive promptly, inspect the issue, and provide a clear solution.</p>
</div>

<div className="z-10 scroll-element transition-all duration-700 ease-out delay-200 bg-slate-50 border-slate-100 border rounded-2xl md:rounded-3xl p-8 relative flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 relative shadow-sm border border-slate-100">
<span className="absolute -top-3 -right-3 text-5xl font-light text-slate-200 select-none pointer-events-none tracking-tight">3</span>
<i className="w-7 h-7 text-[#E34234] relative z-10" data-lucide="settings"></i>
</div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 mb-3">We Fix It</h3>
<p className="text-lg font-light text-slate-500">Professional, high-quality repair or installation. We test everything before leaving your home.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-900 relative overflow-hidden text-white" id="testimonials">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#0F52BA] rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
<div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E34234] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
</div>
<div className="max-w-[100vw] mx-auto relative z-10">
<div className="mb-12 md:mb-16 text-center scroll-element transition-all duration-700 ease-out px-4 sm:px-6">
<p className="text-sm uppercase text-slate-400 tracking-widest mb-3">Homeowner Reviews</p>
<h2 className="text-3xl md:text-4xl tracking-tight font-normal text-white">Service You Can Count On</h2>
</div>

<div className="group relative overflow-hidden flex scroll-element transition-all duration-700 ease-out delay-100 py-4">
<div className="flex w-max animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">

<div className="flex gap-4 md:gap-6 pr-4 md:pr-6">

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col h-full min-h-[300px]">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8 flex-grow">"Incredibly fast response when our home's AC died mid-July. The technician was polite, explained the issue clearly, and had financing options ready. Highly recommend One Stop."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-normal text-white">JD</div>
<div>
<div className="text-base font-normal text-white tracking-tight">James D.</div>
<div className="text-sm font-light text-slate-400">Homeowner</div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-white text-slate-900 rounded-2xl border border-slate-100 shadow-xl p-6 md:p-8 flex flex-col h-full min-h-[300px] md:-translate-y-4">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-700 font-light leading-relaxed mb-8 flex-grow">"Owning an older home means I need reliable contractors. One Stop Cooling and Heating is exactly that. They handled our home's HVAC replacement professionally. The fact they speak Spanish is a huge plus."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-base font-normal text-white">MR</div>
<div>
<div className="text-base font-normal text-slate-900 tracking-tight">Maria R.</div>
<div className="text-sm font-light text-slate-500">Homeowner</div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col h-full min-h-[300px]">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8 flex-grow">"Honest assessment on our heating unit. Instead of pushing a completely new expensive unit immediately, they repaired the valve and offered financing options. Trustworthy team for residential repairs."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-normal text-white">TW</div>
<div>
<div className="text-base font-normal text-white tracking-tight">Thomas W.</div>
<div className="text-sm font-light text-slate-400">Homeowner</div>
</div>
</div>
</div>
</div>

<div className="flex gap-4 md:gap-6 pr-4 md:pr-6">

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col h-full min-h-[300px]">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8 flex-grow">"Incredibly fast response when our home's AC died mid-July. The technician was polite, explained the issue clearly, and had financing options ready. Highly recommend One Stop."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-normal text-white">JD</div>
<div>
<div className="text-base font-normal text-white tracking-tight">James D.</div>
<div className="text-sm font-light text-slate-400">Homeowner</div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-white text-slate-900 rounded-2xl border border-slate-100 shadow-xl p-6 md:p-8 flex flex-col h-full min-h-[300px] md:-translate-y-4">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-700 font-light leading-relaxed mb-8 flex-grow">"Owning an older home means I need reliable contractors. One Stop Cooling and Heating is exactly that. They handled our home's HVAC replacement professionally. The fact they speak Spanish is a huge plus."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-base font-normal text-white">MR</div>
<div>
<div className="text-base font-normal text-slate-900 tracking-tight">Maria R.</div>
<div className="text-sm font-light text-slate-500">Homeowner</div>
</div>
</div>
</div>

<div className="w-[85vw] sm:w-[350px] md:w-[400px] shrink-0 bg-slate-800/60 backdrop-blur-md rounded-2xl border border-slate-700/50 p-6 md:p-8 flex flex-col h-full min-h-[300px]">
<div className="flex text-amber-400 mb-4 gap-1">
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
<i className="w-4 h-4 text-amber-400 border-none" data-lucide="star" fill="currentColor"></i>
</div>
<p className="text-lg text-slate-300 font-light leading-relaxed mb-8 flex-grow">"Honest assessment on our heating unit. Instead of pushing a completely new expensive unit immediately, they repaired the valve and offered financing options. Trustworthy team for residential repairs."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center text-base font-normal text-white">TW</div>
<div>
<div className="text-base font-normal text-white tracking-tight">Thomas W.</div>
<div className="text-sm font-light text-slate-400">Homeowner</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-8 md:pt-24 md:pb-12 bg-[#FAFAFA] relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="bg-[#0A0F1C] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-slate-800 scroll-element transition-all duration-700 ease-out">
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0F52BA] rounded-full mix-blend-screen filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center gap-6 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0F52BA] to-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#0F52BA]/20">
<i className="w-8 h-8" data-lucide="sun"></i>
</div>
<div>
<h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight mb-3">☀️ Summer Savings Event</h2>
<p className="text-slate-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
                            Take $1000 OFF your new home system installation.<br className="hidden sm:block"/> Upgrade your comfort and save big today.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative overflow-hidden bg-[#0F52BA]">
<div className="absolute inset-0 opacity-30 mix-blend-luminosity overflow-hidden pointer-events-none">
<div className="aura-background-component absolute inset-0 w-full h-full">
<div className="absolute inset-0 w-full h-full bg-[#0F52BA]" data-us-project="XxCmD31vVBmiINgvYCho"></div>

</div>
</div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-white rounded-full mix-blend-overlay filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 scroll-element transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-5xl tracking-tight font-normal text-white mb-4 md:mb-6">Need Home Heating or Cooling Help?</h2>
<p className="text-xl md:text-2xl text-blue-100 mb-8 md:mb-10 font-light">Fast, reliable residential service you can count on. Licensed professionals ready to dispatch.</p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4">
<a className="w-full sm:w-auto px-6 py-4 md:px-8 bg-white text-[#0F52BA] text-lg font-normal rounded-full hover:bg-slate-50 transition-all shadow-xl flex items-center justify-center gap-2 group" href="tel:+17028120095">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="phone"></i>
                    Call Now: 702.812.0095
                </a>
</div>
<p className="mt-8 text-base text-blue-200 font-light flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="check"></i> We Accept Credit Cards</span>
<span className="hidden sm:inline opacity-50">•</span>
<a className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer" href="https://www.synchrony.com/mmc/S6241328100" rel="noopener noreferrer" target="_blank"><i className="w-4 h-4" data-lucide="check"></i> Financing Available</a>
<span className="hidden sm:inline opacity-50">•</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="check"></i> Hablamos Español</span>
</p>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FAFAFA]" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<div className="scroll-element opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl tracking-tight font-normal text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 text-lg font-normal text-slate-900 cursor-pointer hover:text-[#0F52BA] transition-colors">
                            What services do you offer?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2 bg-white">
                            We offer comprehensive residential HVAC (cooling and heating) services. This includes installations, emergency repairs, and routine maintenance exclusively for homes and residential properties.
                        </div>
</details>
<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 text-lg font-normal text-slate-900 cursor-pointer hover:text-[#0F52BA] transition-colors">
                            Do you offer financing and what payments are accepted?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2 bg-white">
                            Yes! We accept all major credit cards and offer flexible financing options through Synchrony to help make major home repairs or new installations manageable for your budget. <a className="text-[#0F52BA] hover:underline" href="https://www.synchrony.com/mmc/S6241328100" target="_blank">Apply online here.</a>
</div>
</details>
<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 text-lg font-normal text-slate-900 cursor-pointer hover:text-[#0F52BA] transition-colors">
                            What types of properties do you service?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2 bg-white">
                            We specialize exclusively in residential properties. Our technicians are experienced and equipped to handle the unique heating and cooling demands of your home. We do not service commercial properties.
                        </div>
</details>
<details className="group border border-slate-200 rounded-2xl bg-white overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-5 text-lg font-normal text-slate-900 cursor-pointer hover:text-[#0F52BA] transition-colors">
                            Are you licensed?
                            <i className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-300" data-lucide="chevron-down"></i>
</summary>
<div className="p-5 pt-0 text-lg text-slate-600 font-light leading-relaxed border-t border-slate-100 mt-2 bg-white">
                            Yes, we are fully licensed professionals. Our license number is 0092666. We adhere to all local residential building codes and safety standards.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0F1C] pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 border-b border-slate-800 pb-12">
<div className="md:col-span-2">

<div className="flex items-center gap-2 mb-5">
<i className="w-7 h-7 md:w-8 md:h-8 text-blue-400" data-lucide="snowflake"></i>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-1.5">
<span className="text-xl md:text-2xl font-medium tracking-tight text-white leading-none">One Stop</span>
<i className="w-4 h-4 md:w-5 md:h-5 text-[#E34234]" data-lucide="flame" fill="currentColor"></i>
</div>
<span className="text-xs font-normal tracking-tight text-slate-400 leading-none mt-1">Cooling and Heating LLC</span>
</div>
</div>
<p className="text-lg text-slate-400 max-w-sm leading-relaxed mb-6 font-light">
                        Premium heating and cooling services strictly for residential properties. Fast response, professional results for your home.
                    </p>
<div className="flex items-center gap-2 text-base text-slate-300 font-light bg-slate-800/50 w-fit px-3 py-1.5 rounded-full border border-slate-700">
<i className="w-4 h-4 text-[#0F52BA]" data-lucide="globe"></i> Hablamos Español
                    </div>
</div>
<div>
<h4 className="text-lg font-normal text-white mb-4 tracking-tight">Services</h4>
<ul className="space-y-3 text-lg font-light text-slate-400">
<li><a className="hover:text-[#0F52BA] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#0F52BA] transition-colors" href="#services">Home AC Repair &amp; Install</a></li>
<li><a className="hover:text-[#E34234] transition-colors" href="#services">Residential Heating</a></li>
<li><a className="hover:text-white transition-colors" href="https://www.synchrony.com/mmc/S6241328100" rel="noopener noreferrer" target="_blank">Apply for Home Financing</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-normal text-white mb-4 tracking-tight">Contact</h4>
<ul className="space-y-3 text-lg font-light text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+17028120095"><i className="w-4 h-4" data-lucide="phone"></i> 702.812.0095</a></li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0F52BA]" data-lucide="shield-check"></i> Licence: 0092666</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-[#0F52BA]" data-lucide="credit-card"></i> Credit Cards Accepted</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between text-base text-slate-500 gap-6 font-light">
<p>© 2023 One Stop Cooling and Heating LLC. All rights reserved.</p>

<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition-colors flex items-center justify-center bg-slate-800/50 p-2.5 rounded-full border border-slate-700 hover:bg-[#0F52BA] hover:border-[#0F52BA]" href="https://www.facebook.com/p/One-Stop-Cooling-And-Heating-LLC-61567419657995/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="lucide:facebook" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center justify-center bg-slate-800/50 p-2.5 rounded-full border border-slate-700 hover:bg-[#E34234] hover:border-[#E34234]" href="https://www.instagram.com/hvaclv702/" rel="noopener noreferrer" target="_blank">
<iconify-icon height="18" icon="lucide:instagram" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="hidden sm:block w-px h-6 bg-slate-800"></div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
