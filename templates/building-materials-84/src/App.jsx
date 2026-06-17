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



        // 1. Navigation Scroll Effect
        const navbar = document.getElementById('navbar');
        const logoText = document.getElementById('nav-logo');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Scrolled state
                navbar.classList.add('bg-white/[0.85]', 'backdrop-blur-[24px]', 'backdrop-saturate-[180%]', 'border-b', 'border-[#0359a7]/[0.12]', 'shadow-[0_4px_24px_rgba(3,89,167,0.08)]');
                logoText.classList.remove('text-white');
                logoText.classList.add('text-[#0359a7]');
                navLinks.forEach(link => {
                    link.classList.remove('text-white/90');
                    link.classList.add('text-[#374151]');
                });
            } else {
                // Default state
                navbar.classList.remove('bg-white/[0.85]', 'backdrop-blur-[24px]', 'backdrop-saturate-[180%]', 'border-b', 'border-[#0359a7]/[0.12]', 'shadow-[0_4px_24px_rgba(3,89,167,0.08)]');
                logoText.classList.remove('text-[#0359a7]');
                logoText.classList.add('text-white');
                navLinks.forEach(link => {
                    link.classList.remove('text-[#374151]');
                    link.classList.add('text-white/90');
                });
            }
        });

        // 2. Animate Counters
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // lower is slower

        const animateCounters = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Trigger counter animation when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        // Observe the container of the counters
        const statsStrip = document.querySelector('.counter')?.closest('div.absolute');
        if(statsStrip) observer.observe(statsStrip);

        // Make details exclusive (accordion logic)
        const details = document.querySelectorAll("details");
        details.forEach((targetDetail) => {
            targetDetail.addEventListener("click", () => {
                details.forEach((detail) => {
                    if (detail !== targetDetail) {
                        detail.removeAttribute("open");
                    }
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
      

<nav className="fixed top-0 w-full h-[80px] z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-20 h-full flex items-center justify-between">

<a className="group flex items-baseline" href="#">
<span className="font-inter font-extrabold text-3xl tracking-tighter transition-colors duration-300" id="nav-logo">OXY</span>
<span className="font-inter font-extrabold text-3xl text-[#ffcd05]">.</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="nav-link relative font-inter font-medium text-sm transition-colors duration-300 group" href="#">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0359a7] transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="nav-link relative font-inter font-medium text-sm transition-colors duration-300 group" href="#about">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0359a7] transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="nav-link relative font-inter font-medium text-sm transition-colors duration-300 group" href="#products">
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0359a7] transition-all duration-200 group-hover:w-full"></span>
</a>
<a className="nav-link relative font-inter font-medium text-sm transition-colors duration-300 group" href="#inspiration">
                    Inspiration
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#0359a7] transition-all duration-200 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#0359a7] text-white px-6 py-2.5 rounded-[10px] font-inter font-medium text-sm shadow-[0_0_0_0_rgba(3,89,167,0.4)] hover:bg-[#024d95] hover:shadow-[0_0_0_6px_rgba(3,89,167,0.15)] hover:-translate-y-[1px] transition-all duration-200" href="#quote">
                    Get a Quote
                </a>
<button className="md:hidden text-white hover:text-gray-300 transition-colors" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative w-full h-screen min-h-[700px] flex items-center bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp'}}>

<div className="absolute inset-0 bg-gradient-to-r from-[#020e28]/80 via-[#020e28]/50 to-transparent"></div>

<div className="lg:px-20 lg:pt-2 w-full max-w-7xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex uppercase text-xs font-medium text-white tracking-[0.15em] font-poppins bg-[#0359a7]/30 border-[#0359a7]/50 border rounded-full mb-6 pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center">
                    Kerala's #1 Building Solutions Brand
                </div>
<h1 className="font-inter font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-4">
<span className="block animate-slide-up-1">Your home deserves</span>
<span className="block animate-slide-up-2">more than just a roof.</span>
<span className="block animate-slide-up-3 inline-block relative">
                        It deserves OXY.
                        <span className="absolute -bottom-2 left-0 h-[3px] bg-[#ffcd05] animate-expand-line"></span>
</span>
</h1>
<div className="flex flex-col sm:flex-row gap-4">
<a className="animate-slide-up-btn-1 inline-flex items-center justify-center hover:bg-[#024d95] hover:-translate-y-[2px] hover:shadow-[0_12px_40px_rgba(3,89,167,0.6)] transition-all duration-300 -translate-y-16 text-base font-semibold text-white font-inter bg-[#0359a7] rounded-[10px] pt-4 pr-9 pb-4 pl-9 shadow-[0_8px_32px_rgba(3,89,167,0.5)]" href="#products">
                        Explore Solutions
                    </a>
<a className="animate-slide-up-btn-2 inline-flex items-center justify-center border-[1.5px] hover:bg-white/20 hover:border-white transition-all duration-300 text-base font-semibold text-white font-inter bg-white/10 border-white/50 rounded-[10px] pt-4 pr-9 pb-4 pl-9 backdrop-blur-md -translate-y-16" href="#about">
                        Our Story
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-[20px] border-t border-white/20 px-6 lg:px-20 py-6 hidden md:block">
<div className="max-w-7xl mx-auto flex items-center justify-between divide-x divide-white/20">
<div className="flex-1 px-8 first:pl-0">
<div className="font-inter font-extrabold text-4xl text-white mb-1"><span className="counter" data-target="100">4</span>+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-white/70">Projects Completed</div>
</div>
<div className="flex-1 px-8">
<div className="font-inter font-extrabold text-4xl text-white mb-1"><span className="counter" data-target="50">4</span>+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-white/70">Diverse Clients</div>
</div>
<div className="flex-1 px-8">
<div className="font-inter font-extrabold text-4xl text-white mb-1"><span className="counter" data-target="80">4</span>+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-white/70">Industry Partners</div>
</div>
<div className="flex-1 px-8 last:pr-0">
<div className="text-4xl font-extrabold text-white font-inter mb-1"><span className="counter" data-target="30">4</span>+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-white/70">Custom Solutions</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative bg-white overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0359a7]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row gap-16 items-center relative z-10">

<div className="lg:w-[55%]">
<div className="inline-block bg-[#e8f2ff] text-[#0359a7] font-poppins font-semibold text-xs uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-5">
                    The OXY Standard
                </div>
<h2 className="font-inter font-bold text-4xl lg:text-5xl leading-[1.1] tracking-tight text-black mb-6">
                    Strength, Style, and <span className="relative inline-block">Sustainability<span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#0359a7]"></span></span>
</h2>
<p className="font-poppins font-light text-lg text-[#4a5568] leading-relaxed mb-12">
                    OXY is a trusted name in building and interior solutions, offering high-quality products such as durable roofing, doors, and innovative PVC boards. We lead the industry with customer-centric designs, eco-friendly materials, and exceptional quality in every product we deliver. Our mission is to create a sustainable future by delivering roofing solutions that combine strength, innovation, and elegance.
                </p>

<div className="grid grid-cols-2 gap-4">
<div className="bg-[#f5f8fc] border border-[#e2e8f0] rounded-[16px] p-6 group hover:border-[#0359a7] hover:shadow-[0_4px_16px_rgba(3,89,167,0.1)] hover:-translate-y-1 transition-all duration-300">
<div className="font-inter font-extrabold text-3xl text-[#0359a7] mb-1">100+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Projects Completed</div>
</div>
<div className="bg-[#f5f8fc] border border-[#e2e8f0] rounded-[16px] p-6 group hover:border-[#0359a7] hover:shadow-[0_4px_16px_rgba(3,89,167,0.1)] hover:-translate-y-1 transition-all duration-300">
<div className="font-inter font-extrabold text-3xl text-[#0359a7] mb-1">50+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Diverse Clients</div>
</div>
<div className="bg-[#f5f8fc] border border-[#e2e8f0] rounded-[16px] p-6 group hover:border-[#0359a7] hover:shadow-[0_4px_16px_rgba(3,89,167,0.1)] hover:-translate-y-1 transition-all duration-300">
<div className="font-inter font-extrabold text-3xl text-[#0359a7] mb-1">80+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Industry Partners</div>
</div>
<div className="bg-[#f5f8fc] border border-[#e2e8f0] rounded-[16px] p-6 group hover:border-[#0359a7] hover:shadow-[0_4px_16px_rgba(3,89,167,0.1)] hover:-translate-y-1 transition-all duration-300">
<div className="font-inter font-extrabold text-3xl text-[#0359a7] mb-1">30+</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Custom Solutions</div>
</div>
</div>
</div>

<div className="lg:w-[45%] relative">
<div className="rounded-[24px] overflow-hidden border border-[#0359a7] shadow-[0_20px_60px_rgba(3,89,167,0.15)] h-[520px]">
<img alt="Master craftsman reviewing plans" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-[#0359a7]/20 rounded-[14px] px-4 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.1)] flex items-center gap-2">
<iconify-icon className="text-[#0359a7]" height="20" icon="solar:verified-check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="font-poppins font-semibold text-sm text-[#0359a7]">ISO Certified Quality</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f5f8fc] relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#0359a7 1px, transparent 1px), linear-gradient(to right, #0359a7 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">

<div className="mb-12">
<h2 className="font-inter font-bold text-5xl tracking-tight text-black">Core Advantages</h2>
<p className="font-poppins font-light text-lg text-[#6b7280] mt-3">Why architects and homeowners choose OXY solutions.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="col-span-1 md:col-span-2 lg:row-span-2 bg-[#0359a7] rounded-[24px] p-8 lg:p-11 flex flex-col justify-between min-h-[380px] relative overflow-hidden group hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(3,89,167,0.3)] transition-all duration-400">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1615528656157-cd34c004a622?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center mix-blend-overlay opacity-15"></div>

<div className="absolute bottom-0 right-0 w-16 h-16 border-b-[3px] border-r-[3px] border-[#ffcd05] rounded-br-[24px] transform translate-x-4 translate-y-4"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white/20 rounded-[14px] flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-white" height="32" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="font-inter font-semibold text-2xl text-white mb-3">Extreme Durability</h3>
<p className="font-poppins font-light text-base text-white/80 leading-[1.65]">
                            Built to last in every climate and condition. Our materials undergo rigorous stress tests to ensure longevity and structural integrity for generations.
                        </p>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:row-span-1 bg-white border border-[#e2e8f0] rounded-[20px] p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:border-[#0359a7] hover:shadow-[0_8px_32px_rgba(3,89,167,0.12)] hover:-translate-y-[3px] transition-all duration-300">
<div className="w-14 h-14 shrink-0 bg-[#e8f2ff] rounded-[14px] flex items-center justify-center">
<iconify-icon className="text-[#0359a7]" height="32" icon="solar:cloud-water-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="font-inter font-semibold text-xl text-black mb-2">Weather Resistance</h3>
<p className="font-poppins font-light text-sm text-[#4a5568] leading-[1.65]">
                            Superior protection against heavy rains, humidity, and UV rays.
                        </p>
</div>
</div>

<div className="col-span-1 lg:row-span-1 bg-[#e8f2ff] rounded-[20px] p-8 flex flex-col justify-between group hover:bg-[#d0e6ff] hover:-translate-y-[3px] transition-all duration-300">
<iconify-icon className="text-[#0359a7] mb-6" height="32" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<div>
<h3 className="font-inter font-semibold text-xl text-black mb-2">Fast Installation</h3>
<p className="font-poppins font-light text-sm text-[#4a5568] leading-[1.65]">
                            Engineered for efficiency, reducing construction time significantly.
                        </p>
</div>
</div>

<div className="col-span-1 lg:row-span-1 bg-white border border-[#e2e8f0] rounded-[20px] p-8 flex flex-col justify-between group hover:border-[#0359a7] hover:-translate-y-[3px] transition-all duration-300">
<iconify-icon className="text-[#ffcd05] mb-6" height="32" icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<div>
<h3 className="font-inter font-semibold text-xl text-black mb-2">Innovation</h3>
<p className="font-poppins font-light text-sm text-[#4a5568] leading-[1.65]">
                            Constantly evolving with modern needs and smart technology.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f5f8fc]" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-20">

<div className="text-center mb-16">
<h2 className="font-inter font-bold text-5xl tracking-tight text-black">Our Product Solutions</h2>
<div className="w-16 h-[3px] bg-[#0359a7] mx-auto mt-4 rounded-full"></div>
</div>
<div className="flex flex-col gap-7">

<div className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden bg-[#0359a7] shadow-[0_4px_16px_rgba(3,89,167,0.08)] group">
<div className="lg:w-[40%] p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
<div className="self-start bg-white/15 text-white font-poppins font-medium text-[11px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-6">
                            Roofing Systems
                        </div>
<h3 className="font-inter font-extrabold text-5xl lg:text-6xl text-white leading-none tracking-tight mb-4">OXY ROOF</h3>
<p className="font-poppins font-light text-base text-white/85 leading-[1.75] mb-8">
                            Premium roofing tiles and sheets that combine aesthetic elegance with uncompromised structural strength.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-white/10 border border-white/25 text-white font-poppins text-xs px-3.5 py-1.5 rounded-full">25+ Year Lifespan</span>
<span className="bg-white/10 border border-white/25 text-white font-poppins text-xs px-3.5 py-1.5 rounded-full">UV Resistant</span>
<span className="bg-white/10 border border-white/25 text-white font-poppins text-xs px-3.5 py-1.5 rounded-full">Kerala Climate Tested</span>
</div>
<a className="self-start inline-flex items-center gap-1.5 text-[#ffcd05] font-inter font-semibold text-[15px] border-b border-[#ffcd05]/40 pb-1 hover:border-[#ffcd05] hover:tracking-[0.3px] transition-all duration-300" href="#">
                            View Products <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="lg:w-[60%] h-[350px] lg:h-[560px] order-1 lg:order-2 overflow-hidden">
<img alt="OXY Roof Installed" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613553497126-a44624272024?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>

<div className="flex flex-col lg:flex-row rounded-[24px] overflow-hidden bg-white border border-[#e2e8f0] shadow-[0_4px_16px_rgba(3,89,167,0.08)] group">
<div className="lg:w-[60%] h-[350px] lg:h-[560px] overflow-hidden">
<img alt="OXY WUD Interior" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="lg:w-[40%] p-10 lg:p-14 flex flex-col justify-center border-l border-[#e2e8f0]">
<div className="self-start bg-[#e8f2ff] text-[#0359a7] font-poppins font-medium text-[11px] uppercase tracking-[0.15em] px-3.5 py-1.5 rounded-full mb-6">
                            Interior Solutions
                        </div>
<h3 className="font-inter font-extrabold text-5xl lg:text-6xl text-[#0359a7] leading-none tracking-tight mb-4">OXY WUD</h3>
<p className="font-poppins font-light text-base text-[#4a5568] leading-[1.75] mb-8">
                            Innovative WPC boards, PVC sheets, and designer Doors for modern interiors and resilient exteriors.
                        </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-[#f5f8fc] border border-[#e2e8f0] text-[#374151] font-poppins text-xs px-3.5 py-1.5 rounded-full">100% Waterproof</span>
<span className="bg-[#f5f8fc] border border-[#e2e8f0] text-[#374151] font-poppins text-xs px-3.5 py-1.5 rounded-full">Zero Warping</span>
<span className="bg-[#f5f8fc] border border-[#e2e8f0] text-[#374151] font-poppins text-xs px-3.5 py-1.5 rounded-full">Eco-Friendly Material</span>
</div>
<a className="self-start inline-flex items-center gap-1.5 text-[#0359a7] font-inter font-semibold text-[15px] border-b border-[#0359a7]/30 pb-1 hover:border-[#0359a7] transition-all duration-300" href="#">
                            View Products <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="inspiration">
<div className="max-w-7xl mx-auto px-6 lg:px-20">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-inter font-bold text-5xl tracking-tight text-black">Our Social Hub</h2>
<p className="font-inter font-semibold text-lg text-[#0359a7] mt-2">#BuildWithOXY</p>
</div>
<a className="font-inter font-medium text-sm text-[#0359a7] border-b border-[#0359a7] pb-0.5 hover:opacity-70 transition-opacity" href="#">
                    Follow @OXYIndia <iconify-icon className="inline align-middle" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] lg:auto-rows-[260px]">

<div className="col-span-1 row-span-2 relative rounded-[16px] overflow-hidden group">
<img alt="Roofing installation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden group">
<img alt="Roofing tile detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 row-span-2 relative rounded-[16px] overflow-hidden group">
<img alt="Interior lifestyle" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden group">
<img alt="Texture macro" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>

<div className="col-span-2 row-span-1 relative rounded-[16px] overflow-hidden group">
<img alt="Wide exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 row-span-1 relative rounded-[16px] overflow-hidden group">
<img alt="Door detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-[#0359a7]/55 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="32" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#f5f8fc] border-y border-[#e2e8f0] overflow-hidden">
<h2 className="font-inter font-bold text-4xl text-black text-center mb-12 tracking-tight">Trusted by Industry Leaders</h2>
<div className="relative w-full flex overflow-hidden">

<div className="animate-marquee items-center">

<div className="flex items-center">
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">LULU</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">SOUTH INDIAN BANK</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">AXIS BANK</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">ASTER</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">HiLITE</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">KFC</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
</div>

<div className="flex items-center">
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">LULU</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">SOUTH INDIAN BANK</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">AXIS BANK</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">ASTER</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">HiLITE</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
<span className="font-inter font-semibold text-xl text-[#9ca3af] uppercase tracking-[0.08em] px-12 hover:text-[#0359a7] transition-colors duration-200 cursor-default">KFC</span>
<iconify-icon className="text-[#0359a7] w-2 h-2 text-[8px]" icon="solar:rhombus-fill"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative bg-white overflow-hidden">

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#0359a7] rounded-full blur-[120px] opacity-[0.07] pointer-events-none -translate-x-1/4 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">

<div className="text-center mb-16">
<h2 className="font-inter font-bold text-5xl tracking-tight text-black">Voices of Trust</h2>
<p className="font-poppins font-light text-lg text-[#6b7280] mt-3">What our clients say about building with OXY.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/80 backdrop-blur-md border border-[#0359a7]/12 rounded-[24px] p-10 shadow-[0_8px_32px_rgba(3,89,167,0.08)] relative overflow-hidden border-t-[4px] border-t-[#0359a7] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(3,89,167,0.14)] hover:border-[#0359a7]/25 transition-all duration-300">
<div className="absolute -top-4 -right-2 font-inter font-extrabold text-[120px] text-[#0359a7]/[0.06] leading-none select-none">"</div>
<div className="flex gap-[2px] mb-5 relative z-10">
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-poppins font-light italic text-base text-[#374151] leading-[1.8] mb-7 relative z-10">
                        OXY's roofing tiles transformed our project. The color consistency and ease of installation were unmatched. Highly recommended for Kerala's climate.
                    </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-[#e8f2ff] border-2 border-[#0359a7] flex items-center justify-center font-inter font-bold text-[#0359a7] text-sm">
                            R
                        </div>
<div>
<div className="font-inter font-semibold text-sm text-black">Ar. Rajesh Nair</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Principal Architect</div>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md border border-[#0359a7]/12 rounded-[24px] p-10 shadow-[0_8px_32px_rgba(3,89,167,0.08)] relative overflow-hidden border-t-[4px] border-t-[#0359a7] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(3,89,167,0.14)] hover:border-[#0359a7]/25 transition-all duration-300">
<div className="absolute -top-4 -right-2 font-inter font-extrabold text-[120px] text-[#0359a7]/[0.06] leading-none select-none">"</div>
<div className="flex gap-[2px] mb-5 relative z-10">
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-poppins font-light italic text-base text-[#374151] leading-[1.8] mb-7 relative z-10">
                        The WPC doors from OXY are incredibly durable. We haven't seen any warping despite the heavy rains. It's truly a 'set it and forget it' solution.
                    </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-[#e8f2ff] border-2 border-[#0359a7] flex items-center justify-center font-inter font-bold text-[#0359a7] text-sm">
                            S
                        </div>
<div>
<div className="font-inter font-semibold text-sm text-black">Sreerag V.</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Homeowner</div>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md border border-[#0359a7]/12 rounded-[24px] p-10 shadow-[0_8px_32px_rgba(3,89,167,0.08)] relative overflow-hidden border-t-[4px] border-t-[#0359a7] hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(3,89,167,0.14)] hover:border-[#0359a7]/25 transition-all duration-300">
<div className="absolute -top-4 -right-2 font-inter font-extrabold text-[120px] text-[#0359a7]/[0.06] leading-none select-none">"</div>
<div className="flex gap-[2px] mb-5 relative z-10">
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-[#ffcd05]" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="font-poppins font-light italic text-base text-[#374151] leading-[1.8] mb-7 relative z-10">
                        Working with OXY has been a seamless experience. Their technical support and product quality make them our preferred partner for all building solutions.
                    </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-10 h-10 rounded-full bg-[#e8f2ff] border-2 border-[#0359a7] flex items-center justify-center font-inter font-bold text-[#0359a7] text-sm">
                            M
                        </div>
<div>
<div className="font-inter font-semibold text-sm text-black">Meera Krishnan</div>
<div className="font-poppins font-normal text-xs uppercase tracking-[0.15em] text-[#6b7280]">Interior Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#f5f8fc]">
<div className="max-w-7xl mx-auto px-6 lg:px-20 grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32">
<div className="font-poppins font-medium text-[13px] uppercase tracking-[0.15em] text-[#0359a7] mb-4">
                    Got Questions?
                </div>
<h2 className="font-inter font-extrabold text-5xl lg:text-6xl text-black leading-none tracking-tight">
                    Frequently<br/>
<span className="text-[#0359a7]">Asked</span><br/>
                    Questions
                </h2>
<p className="font-poppins font-light text-base text-[#4a5568] mt-4 leading-[1.7]">
                    Everything you need to know about OXY products, installation, and sustainability.
                </p>
<div className="mt-10 rounded-[20px] overflow-hidden w-[200px] h-[200px] shadow-[0_16px_40px_rgba(3,89,167,0.15)] hidden md:block">
<img alt="Roof ridge detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="mt-6 font-poppins font-light text-sm text-[#4a5568]">
                    Still have questions? 
                    <a className="font-poppins font-medium text-[#0359a7] hover:underline hover:underline-offset-4" href="#contact">Contact our team <iconify-icon className="inline align-middle" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="lg:col-span-7 space-y-3">
<details className="group bg-white border border-[#e2e8f0] rounded-[16px] overflow-hidden hover:border-[#0359a7] hover:bg-[#f8fafc] transition-all duration-200 open:border-[#0359a7] open:bg-white" open="">
<summary className="p-6 lg:px-7 flex justify-between items-center cursor-pointer group-open:bg-[#e8f2ff] transition-colors">
<span className="font-inter font-medium text-base text-black group-open:text-[#0359a7]">What is the lifespan of OXY Roofing tiles?</span>
<iconify-icon className="text-[#0359a7] transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 lg:px-7 pb-6 pt-0 border-t border-[#e2e8f0] bg-white text-[#4a5568] font-poppins font-light text-[15px] leading-[1.75] mt-4 pt-4">
                        OXY roofing solutions are engineered for longevity, typically lasting over 25-30 years with minimal maintenance, thanks to our high-quality raw materials and protective coatings.
                    </div>
</details>
<details className="group bg-white border border-[#e2e8f0] rounded-[16px] overflow-hidden hover:border-[#0359a7] hover:bg-[#f8fafc] transition-all duration-200 open:border-[#0359a7] open:bg-white">
<summary className="p-6 lg:px-7 flex justify-between items-center cursor-pointer group-open:bg-[#e8f2ff] transition-colors">
<span className="font-inter font-medium text-base text-black group-open:text-[#0359a7]">Are OXY WPC boards eco-friendly?</span>
<iconify-icon className="text-[#0359a7] transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 lg:px-7 pb-6 pt-0 border-t border-[#e2e8f0] bg-white text-[#4a5568] font-poppins font-light text-[15px] leading-[1.75] mt-4 pt-4">
                        Yes, our WPC (Wood Polymer Composite) boards are made from sustainable materials and are 100% recyclable, reducing the demand for natural timber.
                    </div>
</details>
<details className="group bg-white border border-[#e2e8f0] rounded-[16px] overflow-hidden hover:border-[#0359a7] hover:bg-[#f8fafc] transition-all duration-200 open:border-[#0359a7] open:bg-white">
<summary className="p-6 lg:px-7 flex justify-between items-center cursor-pointer group-open:bg-[#e8f2ff] transition-colors">
<span className="font-inter font-medium text-base text-black group-open:text-[#0359a7]">Can OXY products withstand coastal humidity?</span>
<iconify-icon className="text-[#0359a7] transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</summary>
<div className="px-6 lg:px-7 pb-6 pt-0 border-t border-[#e2e8f0] bg-white text-[#4a5568] font-poppins font-light text-[15px] leading-[1.75] mt-4 pt-4">
                        Absolutely. Our products are specifically tested for resistance against salt-spray and high humidity, making them ideal for coastal regions like Kerala.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#f5f8fc] border-t-[3px] border-[#0359a7]">
<div className="max-w-7xl mx-auto pt-[72px] px-6 lg:px-20 pb-10">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

<div className="lg:col-span-2 pr-4">
<div className="flex items-baseline mb-4">
<span className="font-inter font-extrabold text-3xl tracking-tighter text-[#0359a7]">OXY</span>
<span className="font-inter font-extrabold text-3xl text-[#ffcd05]">.</span>
</div>
<p className="font-poppins font-light text-sm text-[#6b7280] leading-[1.7] max-w-[280px]">
                        Leading the industry with customer-centric designs, eco-friendly materials, and exceptional quality in every building solution.
                    </p>
<div className="flex items-center gap-3 mt-6">
<a className="w-9 h-9 border-[1.5px] border-[#d1d5db] rounded-[10px] flex items-center justify-center text-[#6b7280] hover:border-[#0359a7] hover:text-[#0359a7] hover:bg-[#e8f2ff] hover:-translate-y-[2px] transition-all duration-200" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
<a className="w-9 h-9 border-[1.5px] border-[#d1d5db] rounded-[10px] flex items-center justify-center text-[#6b7280] hover:border-[#0359a7] hover:text-[#0359a7] hover:bg-[#e8f2ff] hover:-translate-y-[2px] transition-all duration-200" href="#">
<iconify-icon icon="solar:camera-minimalistic-linear" width="18"></iconify-icon> 
</a>
</div>
</div>

<div>
<h4 className="font-inter font-semibold text-[13px] text-black uppercase tracking-[0.15em] mb-5">Solutions</h4>
<ul className="space-y-2.5">
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">Roofing Systems</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">WPC Boards</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">PVC Sheets</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">Designer Doors</a></li>
</ul>
</div>

<div>
<h4 className="font-inter font-semibold text-[13px] text-black uppercase tracking-[0.15em] mb-5">Company</h4>
<ul className="space-y-2.5">
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">About Us</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">Case Studies</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">Technical Guide</a></li>
<li><a className="font-poppins font-light text-sm text-[#6b7280] hover:text-[#0359a7] hover:pl-1 transition-all duration-200 block" href="#">Contact Support</a></li>
</ul>
</div>

<div>
<h4 className="font-inter font-semibold text-[13px] text-black uppercase tracking-[0.15em] mb-5">Connect</h4>
<address className="not-italic font-poppins font-light text-[13px] text-[#6b7280] leading-[1.75]">
                        OZONE LYF PRIVATE LIMITED,<br/>
                        Plot No. C6-B,<br/>
                        KINFRA TEXTILE CENTER,<br/>
                        Nadukani, Pallivayal PO,<br/>
                        Taliparamba, Kannur,<br/>
                        Kerala, India – 670142
                    </address>
</div>
</div>

<div className="mt-12 pt-6 border-t border-[#e2e8f0] flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-poppins font-light text-xs text-[#9ca3af]">© 2023 OXY India. All Rights Reserved.</p>
<p className="font-poppins font-light text-xs text-[#9ca3af]">Crafted by Storibod</p>
</div>
</div>
</footer>



    </>
  );
}
