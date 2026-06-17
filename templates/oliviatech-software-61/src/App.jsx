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



        // SPA Routing
        function navigate(pageId) {
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.remove('active');
            });
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Re-trigger reveal animations for new page
                setTimeout(initReveal, 100);
            }
        }

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            // small delay for transition
            setTimeout(() => { mobileMenu.classList.remove('opacity-0'); }, 10);
        });

        function closeMenu() {
            mobileMenu.classList.add('opacity-0');
            setTimeout(() => { mobileMenu.classList.add('hidden'); }, 300);
        }
        closeBtn.addEventListener('click', closeMenu);

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('bg-[#F5F7FA]', 'border-b', 'border-[#D8E4F0]');
                navbar.classList.remove('bg-transparent', 'py-5');
                navbar.classList.add('py-4');
            } else {
                navbar.classList.remove('bg-[#F5F7FA]', 'border-b', 'border-[#D8E4F0]', 'py-4');
                navbar.classList.add('bg-transparent', 'py-5');
            }
        });

        // Scroll Reveal Animation via IntersectionObserver
        function initReveal() {
            const revealElements = document.querySelectorAll('.page-view.active .reveal');
            
            const revealOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            revealElements.forEach(el => {
                el.classList.remove('active'); // reset for page changes
                revealObserver.observe(el);
            });
        }

        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            initReveal();
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
      

<div className="fixed top-0 left-0 w-full h-[2px] bg-[#00B4D8] z-[100]"></div>

<nav className="fixed top-[2px] left-0 w-full z-[90] transition-all duration-300 bg-transparent py-5 px-6 lg:px-12 xl:px-24 flex items-center justify-between" id="navbar">

<a className="flex items-center space-x-1.5 group cursor-pointer" href="#" onclick="navigate('home')">
<span className="font-serif font-semibold text-2xl text-[#0E1A4C] tracking-tight group-hover:opacity-90 transition-opacity">OLIVIA</span>
<div className="relative flex flex-col">
<span className="font-serif font-semibold text-2xl text-[#00B4D8] tracking-tight">TECH</span>
<div className="h-[1.5px] w-full bg-[#00B4D8] mt-0.5"></div>
</div>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="nav-link text-sm font-medium text-[#0E1A4C] tracking-wide" href="#" onclick="navigate('work')">Work</a>
<a className="nav-link text-sm font-medium text-[#0E1A4C] tracking-wide" href="#" onclick="navigate('services')">Services</a>
<a className="nav-link text-sm font-medium text-[#0E1A4C] tracking-wide" href="#" onclick="navigate('about')">About</a>
<a className="nav-link text-sm font-medium text-[#0E1A4C] tracking-wide" href="#" onclick="navigate('blog')">Blog</a>
</div>

<a className="hidden md:flex px-6 h-10 items-center justify-center rounded-full bg-[#00B4D8] text-white text-xs font-medium tracking-wide transition-colors duration-250 hover:bg-[#0E1A4C]" href="#" onclick="navigate('contact')">
            Start a Project <span className="ml-1.5 font-sans">→</span>
</a>

<button className="md:hidden text-[#0E1A4C] p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-[#0E1A4C] z-[95] hidden flex-col items-center justify-center space-y-8 px-6 transition-opacity duration-300 opacity-0" id="mobile-menu">
<button className="absolute top-6 right-6 text-white p-2" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<a className="font-serif text-4xl text-white tracking-tight" href="#" onclick="navigate('home'); closeMenu();">Home</a>
<a className="font-serif text-4xl text-white tracking-tight" href="#" onclick="navigate('work'); closeMenu();">Work</a>
<a className="font-serif text-4xl text-white tracking-tight" href="#" onclick="navigate('services'); closeMenu();">Services</a>
<a className="font-serif text-4xl text-white tracking-tight" href="#" onclick="navigate('about'); closeMenu();">About</a>
<a className="font-serif text-4xl text-white tracking-tight" href="#" onclick="navigate('blog'); closeMenu();">Blog</a>
<a className="mt-8 px-8 h-12 flex items-center justify-center rounded-full bg-[#00B4D8] text-white text-sm font-medium" href="#" onclick="navigate('contact'); closeMenu();">Start a Project →</a>
</div>

<main id="app">



<div className="page-view active" id="home">

<section className="relative w-full h-auto lg:h-screen min-h-screen flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 bg-dot-grid hidden lg:block z-0"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,_#E8F8FC_0%,_transparent_60%)] z-0 pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 xl:px-24 w-full h-full flex flex-col lg:flex-row items-center justify-between z-10 relative pt-32 pb-32 lg:py-0">
<div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col items-center text-center lg:items-start lg:text-left z-20">
<div className="flex items-center space-x-3 mb-6 relative">
<span className="font-serif font-bold text-5xl lg:text-6xl text-[#0E1A4C] tracking-tight anim-hidden anim-fade-up delay-100">OLIVIA</span>
<div className="relative inline-block anim-hidden anim-fade-up delay-250">
<span className="font-serif font-bold text-5xl lg:text-6xl text-[#00B4D8] tracking-tight">TECH</span>
<div className="absolute -bottom-1 left-0 h-[2px] bg-[#00B4D8] w-0" style={{animation: 'expandWidth 0.55s ease-out 0.45s forwards'}}></div>
</div>
</div>
<p className="font-normal text-sm text-slate-600 tracking-wider mb-6 anim-hidden anim-fade-up delay-550">
                            Build · Launch · Grow
                        </p>
<div className="h-[1.5px] bg-[#00B4D8] w-0 mb-8 mx-auto lg:mx-0" style={{animation: 'expandDivider 0.3s ease-out 0.65s forwards'}}></div>
<h1 className="font-serif text-4xl lg:text-5xl text-[#0E1A4C] leading-tight tracking-tight mb-6">
<span className="block anim-hidden anim-fade-up delay-700">Your idea deserves</span>
<span className="block anim-hidden anim-fade-up delay-800">software that</span>
<span className="block anim-hidden anim-fade-up delay-900">actually works.</span>
</h1>
<p className="font-normal text-base lg:text-lg text-slate-600 leading-relaxed max-w-[440px] mb-10 anim-hidden anim-fade-up delay-1000">
                            We build websites, apps, ecommerce stores, and AI products for startups ready to grow — and done re-doing work that should have been right the first time.
                        </p>
<div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 mb-8 anim-hidden anim-fade-up delay-1100">
<a className="w-full sm:w-auto px-8 h-12 flex items-center justify-center rounded-full bg-[#00B4D8] text-white font-normal text-sm transition-colors duration-250 hover:bg-[#0E1A4C]" href="#" onclick="navigate('contact')">
                                Start a Project <span className="ml-2">→</span>
</a>
<a className="w-full sm:w-auto px-8 h-12 flex items-center justify-center rounded-full border-[1.5px] border-[#0E1A4C] text-[#0E1A4C] font-normal text-sm transition-colors duration-250 hover:bg-[#EBF0F8]" href="#" onclick="navigate('work')">
                                See Our Work
                            </a>
</div>
<p className="font-normal text-xs text-slate-400 anim-hidden anim-fade-up delay-1200">
                            20+ Products Shipped · India &amp; Beyond · 98% Client Retention
                        </p>
</div>
<div className="hidden lg:block w-[55%] xl:w-[60%] h-[700px] relative z-10">
<div className="absolute inset-0 z-0 flex items-center justify-center anim-hidden" style={{animation: 'fadeIn 0.4s ease-out 1.8s forwards'}}>
<div className="absolute w-[320px] h-[320px] rounded-full border border-[#D8E4F0] opacity-50 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute w-[200px] h-[200px] rounded-full border border-[#E8F8FC] opacity-40 top-[10%] right-[15%]"></div>
<div className="absolute w-[100px] h-[100px] rounded-full border border-dashed border-[#D8E4F0] opacity-35 bottom-[15%] left-[20%]"></div>
</div>
<svg className="absolute inset-0 w-full h-full z-0 opacity-0 transition-opacity duration-700 delay-1200" preserveaspectratio="none" style={{animation: 'fadeIn 0.7s ease-out 1.2s forwards'}} viewbox="0 0 100 100">
<path className="anim-dash-flow" d="M 15 15 C 35 15, 45 15, 55 25 C 65 35, 50 40, 40 50 C 30 60, 55 60, 65 70 C 75 80, 55 80, 45 85 C 35 90, 60 90, 80 92" fill="none" opacity="0.65" stroke="#00B4D8" strokeWidth="0.3"></path>
</svg>
<div className="absolute left-[15%] top-[15%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-1 z-10 cursor-pointer w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_2px_16px_rgba(14,26,76,0.07)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:global-linear" width="26"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">Website Dev</div>
</div>
<div className="absolute left-[55%] top-[25%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-2 z-10 cursor-pointer w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_2px_16px_rgba(14,26,76,0.07)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:cpu-linear" width="26"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">Custom AI Dev</div>
</div>
<div className="absolute left-[40%] top-[50%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-3 z-20 cursor-pointer w-[76px] h-[76px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_4px_20px_rgba(14,26,76,0.09)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:smart-speaker-linear" width="30"></iconify-icon>
<div className="absolute top-[calc(100%+10px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">AI Agents</div>
</div>
<div className="absolute left-[65%] top-[70%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-4 z-10 cursor-pointer w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_2px_16px_rgba(14,26,76,0.07)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:refresh-circle-linear" width="26"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">Automation</div>
</div>
<div className="absolute left-[45%] top-[85%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-5 z-10 cursor-pointer w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_2px_16px_rgba(14,26,76,0.07)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:smartphone-linear" width="26"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">App Dev</div>
</div>
<div className="absolute left-[80%] top-[92%] -translate-x-1/2 -translate-y-1/2 group service-node flex flex-col items-center anim-hidden anim-pop-in delay-node-6 z-10 cursor-pointer w-[68px] h-[68px] rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-[0_2px_16px_rgba(14,26,76,0.07)] justify-center">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:network-linear" width="26"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300 leading-tight">ERP / CRM</div>
</div>
</div>
<div className="block lg:hidden w-full relative mt-16 z-10">
<svg className="absolute inset-0 w-full h-full z-0 opacity-0" preserveaspectratio="none" style={{animation: 'fadeIn 0.7s ease-out 1.2s forwards'}} viewbox="0 0 100 100">
<path className="anim-dash-flow" d="M 25 16.6 L 75 16.6 M 25 50 L 75 50 M 25 83.3 L 75 83.3 M 25 16.6 L 25 83.3 M 75 16.6 L 75 83.3" fill="none" opacity="0.4" stroke="#00B4D8" strokeWidth="0.5"></path>
</svg>
<div className="grid grid-cols-2 gap-y-16 gap-x-6 relative z-10 w-full max-w-[400px] mx-auto">
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-1 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:global-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">Website Dev</div>
</div>
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-2 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:cpu-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">Custom AI Dev</div>
</div>
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-3 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:smart-speaker-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">AI Agents</div>
</div>
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-4 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:refresh-circle-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">Automation</div>
</div>
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-5 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:smartphone-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">App Dev</div>
</div>
<div className="group service-node flex flex-col items-center justify-center anim-hidden anim-pop-in delay-node-6 relative w-[56px] h-[56px] mx-auto rounded-full bg-white border-[1.5px] border-[#D8E4F0] shadow-sm">
<iconify-icon className="text-[#0E1A4C] node-icon transition-colors duration-300" icon="solar:network-linear" width="22"></iconify-icon>
<div className="absolute top-[calc(100%+8px)] w-max text-center text-xs text-slate-600 font-normal node-label transition-colors duration-300">ERP / CRM</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center anim-hidden z-20" style={{animation: 'fadeIn 0.4s ease-out 2.0s forwards'}}>
<div className="h-8 w-[1px] bg-[#00B4D8] mb-3" style={{animation: 'pulseScroll 1.6s ease-in-out infinite'}}></div>
<span className="font-normal text-[10px] text-slate-400 uppercase tracking-widest">SCROLL</span>
</div>
</section>

<section className="py-24 bg-[#EBF0F8]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="max-w-2xl reveal">
<span className="eyebrow">The Reality</span>
<h2 className="font-serif text-4xl md:text-[48px] leading-tight tracking-tight text-[#0E1A4C] mb-16">
                            Bad digital products don't announce themselves. They just quietly cost you.
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-white border-l-[3px] border-[#00B4D8] shadow-sm p-8 custom-card reveal" style={{transitionDelay: '0.1s'}}>
<div className="font-serif text-[52px] text-[#0E1A4C] leading-none mb-4">4.2s</div>
<p className="font-sans text-base font-semibold text-[#0E1A4C] mb-3">Average load time of startup websites.</p>
<p className="text-sm text-[#475569] leading-relaxed">53% of visitors leave before it finishes loading. You're paying for traffic you'll never see.</p>
</div>

<div className="bg-white border-l-[3px] border-[#00B4D8] shadow-sm p-8 custom-card reveal" style={{transitionDelay: '0.2s'}}>
<div className="font-serif text-[52px] text-[#0E1A4C] leading-none mb-4">70%</div>
<p className="font-sans text-base font-semibold text-[#0E1A4C] mb-3">Of ecommerce carts are abandoned.</p>
<p className="text-sm text-[#475569] leading-relaxed">Most of it is fixable — a confusing checkout, a missing payment option, a slow redirect. We've seen all of it.</p>
</div>

<div className="bg-white border-l-[3px] border-[#00B4D8] shadow-sm p-8 custom-card reveal" style={{transitionDelay: '0.3s'}}>
<div className="font-serif text-[52px] text-[#0E1A4C] leading-none mb-4">Day 1</div>
<p className="font-sans text-base font-semibold text-[#0E1A4C] mb-3">When users decide if your app is worth keeping.</p>
<p className="text-sm text-[#475569] leading-relaxed">If your onboarding confuses someone in the first 60 seconds, they don't come back. Ever.</p>
</div>
</div>
<p className="bridge-sentence reveal">This is exactly the territory we work in. Here's what we build — and what each one changes for you.</p>
</div>
</section>

<section className="py-24 bg-[#F5F7FA]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="eyebrow mx-auto justify-center">Six Capabilities</span>
<h2 className="font-serif text-4xl md:text-[48px] leading-tight tracking-tight text-[#0E1A4C]">
                            Every service is a transformation. Not just a deliverable.
                        </h2>
</div>
<div className="space-y-32">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 reveal">
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-[#E8F8FC] rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="w-3/4 h-3/4 border border-[#00B4D8]/30 bg-white rounded-lg shadow-sm flex flex-col p-4">
<div className="w-1/3 h-2 bg-[#D8E4F0] rounded mb-6"></div>
<div className="w-full h-32 bg-[#F5F7FA] rounded mb-4"></div>
<div className="flex space-x-2"><div className="w-1/2 h-20 bg-[#EBF0F8] rounded"></div><div className="w-1/2 h-20 bg-[#EBF0F8] rounded"></div></div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="font-mono text-xs text-[#00B4D8] mb-4 block">01 /</span>
<h3 className="font-serif text-[32px] text-[#0E1A4C] leading-tight mb-2">Websites &amp; Landing Pages</h3>
<p className="font-sans font-semibold text-[17px] text-[#0E1A4C] mb-4">From a link nobody clicks → To the first thing that makes people trust you.</p>
<p className="text-base text-[#475569] leading-relaxed mb-6">Your website is your pitch deck, your storefront, and your reputation — all at once. We build fast, conversion-focused websites that communicate your value in the first 5 seconds. Every pixel earns its place.</p>
<ul className="space-y-2 text-sm text-[#475569] mb-8">
<li>— Sub-2 second load times</li>
<li>— Mobile-first, SEO-ready architecture</li>
<li>— Designed to convert, not just impress</li>
</ul>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Next.js</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Tailwind</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Framer</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Figma</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium hover:text-[#0E1A4C] transition-colors flex items-center" href="#" onclick="navigate('work')">See related work <span className="ml-1">→</span></a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20 reveal">
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-[#EBF0F8] rounded-2xl flex items-center justify-center relative overflow-hidden">
<div className="w-2/3 h-5/6 border border-[#D8E4F0] bg-white rounded-t-3xl shadow-md flex flex-col p-6 items-center justify-end translate-y-10">
<div className="w-full h-12 border border-[#D8E4F0] rounded mb-4 flex items-center px-4"><div className="w-4 h-4 rounded-full bg-[#E8F8FC]"></div></div>
<div className="w-full h-12 bg-[#0E1A4C] rounded text-white text-[10px] flex items-center justify-center font-medium">Checkout Complete</div>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="font-mono text-xs text-[#00B4D8] mb-4 block">02 /</span>
<h3 className="font-serif text-[32px] text-[#0E1A4C] leading-tight mb-2">Ecommerce Apps</h3>
<p className="font-sans font-semibold text-[17px] text-[#0E1A4C] mb-4">From a cart people abandon → To a checkout experience people actually complete.</p>
<p className="text-base text-[#475569] leading-relaxed mb-6">Ecommerce is won or lost in micro-moments — the product image that loads too slowly, the discount code that doesn't work, the payment method that's missing. We remove every reason to leave.</p>
<ul className="space-y-2 text-sm text-[#475569] mb-8">
<li>— Shopify and custom builds</li>
<li>— Cart recovery and upsell flows</li>
<li>— Multi-gateway payment support</li>
</ul>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Shopify</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">React</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Stripe</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium hover:text-[#0E1A4C] transition-colors flex items-center" href="#" onclick="navigate('work')">See related work <span className="ml-1">→</span></a>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 reveal">
<div className="w-full md:w-1/2 aspect-square md:aspect-[4/3] bg-[#E8F8FC] rounded-2xl flex items-center justify-center">
<iconify-icon className="text-[#00B4D8]" icon="solar:smartphone-rotate-2-linear" width="80"></iconify-icon>
</div>
<div className="w-full md:w-1/2">
<span className="font-mono text-xs text-[#00B4D8] mb-4 block">03 /</span>
<h3 className="font-serif text-[32px] text-[#0E1A4C] leading-tight mb-2">Mobile Apps</h3>
<p className="font-sans font-semibold text-[17px] text-[#0E1A4C] mb-4">From a Figma file collecting dust → To an app your users open every day.</p>
<p className="text-base text-[#475569] leading-relaxed mb-6">We build mobile apps that feel native, load fast, and survive their first week of real users. From architecture to App Store listing, we handle the whole journey.</p>
<ul className="space-y-2 text-sm text-[#475569] mb-8">
<li>— React Native and native builds</li>
<li>— Offline-first capability</li>
<li>— Push notifications and analytics</li>
</ul>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">React Native</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Firebase</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium hover:text-[#0E1A4C] transition-colors flex items-center" href="#" onclick="navigate('work')">See related work <span className="ml-1">→</span></a>
</div>
</div>
</div>
<p className="bridge-sentence reveal">Words are easy. Here's what we've actually shipped — and what happened after.</p>
</div>
</section>

<section className="py-24 bg-[#0E1A4C] relative overflow-hidden">
<div className="absolute inset-0 bg-dot-grid-dark z-0"></div>
<div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
<div className="reveal mb-16">
<span className="eyebrow !text-[#00B4D8]">Selected Work</span>
<h2 className="font-serif text-4xl md:text-[52px] leading-tight tracking-tight text-white max-w-2xl">
                            Products we've built. Outcomes we're proud of.
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

<div className="bg-[#1A2B6B] rounded-xl overflow-hidden group custom-card border border-transparent reveal">
<div className="h-48 bg-[#F5F7FA] w-full relative">
<div className="absolute inset-0 flex items-center justify-center text-[#0E1A4C] font-serif text-xl opacity-20">Mockup</div>
</div>
<div className="p-8">
<div className="font-serif text-[36px] text-[#00B4D8] mb-2">+140%</div>
<p className="text-white/80 text-sm mb-6 leading-relaxed">Increase in online course sales through a custom Next.js storefront.</p>
<div className="flex gap-2 mb-6">
<span className="px-2.5 py-1 border border-[#00B4D8] text-[#00B4D8] text-[10px] uppercase tracking-wider rounded-full">Web App</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium flex items-center group-hover:gap-2 transition-all" href="#" onclick="navigate('work')">Case Study <span>→</span></a>
</div>
</div>

<div className="bg-[#1A2B6B] rounded-xl overflow-hidden group custom-card border border-transparent reveal delay-100">
<div className="h-48 bg-[#EBF0F8] w-full relative">
<div className="absolute inset-0 flex items-center justify-center text-[#0E1A4C] font-serif text-xl opacity-20">Mockup</div>
</div>
<div className="p-8">
<div className="font-serif text-[36px] text-[#00B4D8] mb-2">12hrs</div>
<p className="text-white/80 text-sm mb-6 leading-relaxed">Manual data entry saved weekly via custom AI document extraction.</p>
<div className="flex gap-2 mb-6">
<span className="px-2.5 py-1 border border-[#00B4D8] text-[#00B4D8] text-[10px] uppercase tracking-wider rounded-full">AI MVP</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium flex items-center group-hover:gap-2 transition-all" href="#" onclick="navigate('work')">Case Study <span>→</span></a>
</div>
</div>

<div className="bg-[#1A2B6B] rounded-xl overflow-hidden group custom-card border border-transparent reveal delay-200">
<div className="h-48 bg-[#E8F8FC] w-full relative">
<div className="absolute inset-0 flex items-center justify-center text-[#0E1A4C] font-serif text-xl opacity-20">Mockup</div>
</div>
<div className="p-8">
<div className="font-serif text-[36px] text-[#00B4D8] mb-2">4.9</div>
<p className="text-white/80 text-sm mb-6 leading-relaxed">App Store rating after redesigning and rebuilding the native flow.</p>
<div className="flex gap-2 mb-6">
<span className="px-2.5 py-1 border border-[#00B4D8] text-[#00B4D8] text-[10px] uppercase tracking-wider rounded-full">Mobile</span>
</div>
<a className="text-[#00B4D8] text-sm font-medium flex items-center group-hover:gap-2 transition-all" href="#" onclick="navigate('work')">Case Study <span>→</span></a>
</div>
</div>
</div>
<div className="text-center reveal">
<a className="text-[#00B4D8] text-[15px] font-medium hover:text-white transition-colors flex items-center justify-center mx-auto w-max group" href="#" onclick="navigate('work')">
                            View all 20+ projects <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<p className="bridge-sentence !text-white/60 reveal">Great work doesn't happen by accident. It happens through a process you can actually see.</p>
</div>
</section>

<section className="py-24 bg-[#F5F7FA] overflow-hidden">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="max-w-2xl reveal mb-16">
<span className="eyebrow">The Journey</span>
<h2 className="font-serif text-4xl md:text-[48px] leading-tight tracking-tight text-[#0E1A4C]">
                            From your first message to your launch day — here's what it feels like.
                        </h2>
</div>

<div className="relative reveal timeline-scroll overflow-x-auto pb-8">
<div className="md:hidden absolute left-[15px] top-0 bottom-0 w-[2px] bg-[#00B4D8]/30"></div>
<div className="hidden md:block absolute top-[24px] left-0 w-[800px] lg:w-[1000px] h-[2px] bg-[#00B4D8]/30"></div>
<div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between w-full md:w-[800px] lg:w-[1000px] relative">

<div className="relative pl-10 md:pl-0 md:w-48 group cursor-pointer">
<div className="absolute left-0 md:left-auto top-1 md:top-0 md:-mt-2.5 w-8 h-8 rounded-full border-2 border-[#00B4D8] bg-white flex items-center justify-center transition-all group-hover:bg-[#00B4D8]">
<div className="w-3 h-3 rounded-full bg-[#0E1A4C] group-hover:bg-white"></div>
</div>
<div className="md:mt-12">
<p className="font-mono text-xs text-[#00B4D8] mb-1">Week 1</p>
<h4 className="font-serif text-xl text-[#0E1A4C] mb-2">Discovery</h4>
<p className="text-[13px] text-[#475569] mb-3 leading-relaxed">We listen more than we talk. Goals, audience, competitors, constraints — everything mapped before we write one line of code.</p>
<p className="text-[12px] italic text-[#0E1A4C]">"Someone finally gets what we're building."</p>
</div>
</div>

<div className="relative pl-10 md:pl-0 md:w-48 group cursor-pointer">
<div className="absolute left-0 md:left-auto top-1 md:top-0 md:-mt-2.5 w-8 h-8 rounded-full border-2 border-[#00B4D8] bg-white flex items-center justify-center transition-all group-hover:bg-[#00B4D8]">
<div className="w-3 h-3 rounded-full bg-[#0E1A4C] group-hover:bg-white"></div>
</div>
<div className="md:mt-12">
<p className="font-mono text-xs text-[#00B4D8] mb-1">Week 2-3</p>
<h4 className="font-serif text-xl text-[#0E1A4C] mb-2">Design</h4>
<p className="text-[13px] text-[#475569] mb-3 leading-relaxed">Wireframes, UI in Figma, component library. You see and approve every screen before we build it.</p>
<p className="text-[12px] italic text-[#0E1A4C]">"I can see exactly what we're making — and I love it."</p>
</div>
</div>

<div className="relative pl-10 md:pl-0 md:w-48 group cursor-pointer">
<div className="absolute left-0 md:left-auto top-1 md:top-0 md:-mt-2.5 w-8 h-8 rounded-full border-2 border-[#00B4D8] bg-white flex items-center justify-center transition-all group-hover:bg-[#00B4D8]">
<div className="w-3 h-3 rounded-full bg-[#0E1A4C] group-hover:bg-white"></div>
</div>
<div className="md:mt-12">
<p className="font-mono text-xs text-[#00B4D8] mb-1">Week 3-7</p>
<h4 className="font-serif text-xl text-[#0E1A4C] mb-2">Development</h4>
<p className="text-[13px] text-[#475569] mb-3 leading-relaxed">Agile sprints, weekly video demos, a shared Notion board. No black box.</p>
<p className="text-[12px] italic text-[#0E1A4C]">"Progress is visible. I'm not anxious about the deadline."</p>
</div>
</div>

</div>
</div>
<p className="bridge-sentence reveal">A process is only as good as the team running it. Here's who's driving.</p>
</div>
</section>

<section className="py-24 bg-[#EBF0F8]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center reveal">
<div className="w-full md:w-5/12 aspect-[4/5] bg-[#D8E4F0] rounded-xl overflow-hidden relative shadow-sm">

<div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#E8F8FC] to-[#D8E4F0] text-[#0E1A4C]/30 font-serif">
<iconify-icon icon="solar:user-linear" width="80"></iconify-icon>
</div>
</div>
<div className="w-full md:w-7/12">
<span className="eyebrow">The Person Behind It</span>
<h2 className="font-serif text-4xl md:text-[44px] leading-tight tracking-tight text-[#0E1A4C] mb-8">
                                I built this agency because I kept watching great ideas die on bad software.
                            </h2>
<div className="space-y-4 text-[17px] text-[#475569] leading-[1.8] mb-8">
<p>I'm Pritam — founder and CTO of OliviaTech. I started building on the internet in college, and somewhere between my third freelance client and my first real startup, I figured out what separates digital products that grow from ones that don't.</p>
<p>It's not the tech stack. It's not the design tool. It's whether someone who deeply cares about both was in the room when decisions were made. That's the gap OliviaTech fills.</p>
<p>We're a small team that moves like a startup and builds like a senior engineer. We take on fewer clients so we can do better work for each one.</p>
</div>
<div className="flex gap-4">
<a className="text-[#00B4D8] hover:text-[#0E1A4C] transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon></a>
<a className="text-[#00B4D8] hover:text-[#0E1A4C] transition-colors" href="#"><iconify-icon icon="solar:square-academic-cap-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
<p className="bridge-sentence reveal">Don't just take my word for it. Here's what founders say after launch day.</p>
</div>
</section>

<section className="py-24 bg-[#F5F7FA]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24 reveal">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col">
<div className="flex gap-1 text-[#00B4D8] mb-6">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-2xl text-[#0E1A4C] leading-relaxed mb-6">"They didn't just build what we asked for. They told us what we actually needed, and it completely changed our conversion rate."</p>
<p className="font-sans text-sm font-semibold text-[#0E1A4C]">Founder, E-commerce Startup</p>
</div>
<div className="flex flex-col">
<div className="flex gap-1 text-[#00B4D8] mb-6">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-2xl text-[#0E1A4C] leading-relaxed mb-6">"Fast, transparent, and the code quality is flawless. Best agency experience I've had in 10 years of tech."</p>
<p className="font-sans text-sm font-semibold text-[#0E1A4C]">CTO, SaaS Platform</p>
</div>
<div className="flex flex-col">
<div className="flex gap-1 text-[#00B4D8] mb-6">
<iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon><iconify-icon icon="solar:star-fall-linear" width="16"></iconify-icon>
</div>
<p className="font-serif italic text-2xl text-[#0E1A4C] leading-relaxed mb-6">"Our MVP was live in 6 weeks. The AI integration was smooth, and users love the clean interface."</p>
<p className="font-sans text-sm font-semibold text-[#0E1A4C]">Product Lead, AI Tools</p>
</div>
</div>
<p className="bridge-sentence">Every great product starts with a single conversation. Let's have yours.</p>
</div>
</section>

<section className="py-32 bg-[#0E1A4C] relative overflow-hidden">
<div className="absolute inset-0 bg-dot-grid-dark z-0"></div>
<div className="container mx-auto px-6 lg:px-12 xl:px-24 relative z-10 text-center flex flex-col items-center reveal">
<h2 className="font-serif text-5xl md:text-[64px] leading-tight tracking-tight text-white mb-6 max-w-3xl">
                        Tell us what you're building. We'll tell you how to make it something people remember.
                    </h2>
<p className="text-[18px] text-white/65 max-w-[560px] mb-12">
                        No templates. No vague proposals. One real conversation with someone who has shipped what you're trying to build.
                    </p>
<form className="w-full max-w-[640px] text-left space-y-4 mb-8">
<textarea className="w-full bg-[#1A2B6B] border border-[#1A2B6B] focus:border-[#00B4D8] text-white p-4 rounded-xl outline-none transition-colors resize-none h-32 text-sm placeholder-white/40" placeholder="Describe your project or problem (2–3 sentences is enough)"></textarea>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#1A2B6B] border border-[#1A2B6B] focus:border-[#00B4D8] text-white p-4 rounded-xl outline-none transition-colors text-sm placeholder-white/40" placeholder="Name" type="text"/>
<input className="w-full bg-[#1A2B6B] border border-[#1A2B6B] focus:border-[#00B4D8] text-white p-4 rounded-xl outline-none transition-colors text-sm placeholder-white/40" placeholder="Email" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<select className="w-full bg-[#1A2B6B] border border-[#1A2B6B] focus:border-[#00B4D8] text-white p-4 rounded-xl outline-none transition-colors text-sm">
<option disabled="" selected="" value="">Budget Range</option>
<option>Under ₹1L</option><option>₹1L–5L</option><option>₹5L–20L</option><option>₹20L+</option>
</select>
<select className="w-full bg-[#1A2B6B] border border-[#1A2B6B] focus:border-[#00B4D8] text-white p-4 rounded-xl outline-none transition-colors text-sm">
<option disabled="" selected="" value="">Timeline</option>
<option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option>
</select>
</div>
<button className="w-full h-[56px] bg-[#00B4D8] hover:bg-white hover:text-[#0E1A4C] text-white font-medium rounded-full transition-colors mt-4 text-[15px]" type="button">
                            Send My Brief →
                        </button>
</form>
<p className="text-[13px] text-white/50 tracking-wide">
                        — We reply within 24 hours · — First call is always free · — We've shipped 20+ products like yours
                    </p>
</div>
</section>
</div>



<div className="page-view pt-24 pb-32" id="work">
<div className="bg-[#F5F7FA] py-20 text-center">
<span className="eyebrow mx-auto justify-center">Portfolio</span>
<h1 className="font-serif text-5xl md:text-[56px] text-[#0E1A4C] tracking-tight mb-4">Things we've built. Problems we've solved.</h1>
<p className="text-[#475569] text-[18px]">Across 6 capability areas, 20+ products, and counting.</p>
</div>
<div className="container mx-auto px-6 lg:px-12 xl:px-24 mt-8">
<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="px-5 py-2 rounded-full bg-[#0E1A4C] text-white text-sm">All</button>
<button className="px-5 py-2 rounded-full border border-[#D8E4F0] text-[#0E1A4C] text-sm hover:border-[#00B4D8]">Websites</button>
<button className="px-5 py-2 rounded-full border border-[#D8E4F0] text-[#0E1A4C] text-sm hover:border-[#00B4D8]">Ecommerce</button>
<button className="px-5 py-2 rounded-full border border-[#D8E4F0] text-[#0E1A4C] text-sm hover:border-[#00B4D8]">Mobile Apps</button>
<button className="px-5 py-2 rounded-full border border-[#D8E4F0] text-[#0E1A4C] text-sm hover:border-[#00B4D8]">AI MVPs</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-video bg-[#EBF0F8] rounded-xl overflow-hidden relative mb-6">
<div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#0E1A4C] text-[11px] rounded-full uppercase tracking-wider font-semibold z-10 shadow-sm">AI MVP</div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-[#00B4D8] rounded-xl"></div>
</div>
<h3 className="font-serif text-[22px] text-[#0E1A4C] mb-1">DocuFlow AI</h3>
<p className="font-sans font-bold text-[#00B4D8] mb-2">12hrs saved per week</p>
<p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-2">Automated document extraction and processing via LangChain and OpenAI, replacing manual data entry for a legal tech startup.</p>
<span className="text-[#00B4D8] text-sm font-medium">View Case Study →</span>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-video bg-[#E8F8FC] rounded-xl overflow-hidden relative mb-6">
<div className="absolute top-4 left-4 px-3 py-1 bg-white text-[#0E1A4C] text-[11px] rounded-full uppercase tracking-wider font-semibold z-10 shadow-sm">Ecommerce</div>
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-[#00B4D8] rounded-xl"></div>
</div>
<h3 className="font-serif text-[22px] text-[#0E1A4C] mb-1">Aura Storefront</h3>
<p className="font-sans font-bold text-[#00B4D8] mb-2">+140% Conversion</p>
<p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-2">Headless Shopify build using Next.js for a premium wellness brand, dropping load times from 5s to 1.2s.</p>
<span className="text-[#00B4D8] text-sm font-medium">View Case Study →</span>
</div>
</div>
</div>
</div>



<div className="page-view" id="services">
<section className="pt-32 pb-24 bg-[#0E1A4C] text-center">
<div className="container mx-auto px-6 max-w-4xl">
<span className="eyebrow !text-[#00B4D8] mx-auto justify-center">What We Do</span>
<h1 className="font-serif text-5xl md:text-[60px] text-white tracking-tight mb-6 leading-tight">Six ways we make your digital product something people love.</h1>
<p className="text-white/70 text-[18px]">Every capability. Every tech choice. Every outcome — explained.</p>
</div>
</section>
<section className="py-24 bg-[#F5F7FA]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="max-w-3xl">
<span className="font-mono text-xs text-[#00B4D8] mb-4 block">01 / Website Dev</span>
<h2 className="font-serif text-4xl text-[#0E1A4C] mb-6">Websites &amp; Landing Pages</h2>
<p className="text-[#475569] text-base leading-relaxed mb-8">We build fast, conversion-focused websites that communicate your value in the first 5 seconds. Every pixel earns its place. From marketing sites to complex CMS structures, we ensure your digital storefront actually converts visitors into leads.</p>
<ul className="space-y-3 text-sm text-[#475569] mb-8">
<li>— Sub-2 second load times guaranteed</li>
<li>— Mobile-first, responsive architecture</li>
<li>— Technical SEO foundations built-in</li>
<li>— Headless CMS integrations (Sanity, Contentful)</li>
<li>— Analytics and tracking setup</li>
<li>— 30 days post-launch support</li>
</ul>
<div className="flex gap-2 mb-8">
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Next.js</span>
<span className="px-3 py-1 bg-[#0E1A4C] text-white text-[11px] rounded-full">Tailwind</span>
</div>
<button className="px-8 h-12 rounded-full bg-[#00B4D8] text-white text-sm font-medium hover:bg-[#0E1A4C] transition-colors">Start this →</button>
</div>
</div>
</section>

<section className="py-24 bg-[#EBF0F8]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24 text-center">
<h2 className="font-serif text-[36px] text-[#0E1A4C] mb-16 max-w-2xl mx-auto leading-tight">We choose proven technology that ships on time and scales when it needs to.</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">React</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">Next.js</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">TypeScript</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">Node.js</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">PostgreSQL</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">AWS</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">React Native</div>
<div className="bg-white py-6 border border-[#D8E4F0] rounded-xl flex items-center justify-center text-[#0E1A4C] font-semibold text-sm">OpenAI</div>
</div>
</div>
</section>
</div>



<div className="page-view pt-24 pb-0" id="about">

<section className="py-24 bg-[#F5F7FA]">
<div className="container mx-auto px-6 max-w-3xl">
<span className="eyebrow">How We Started</span>
<h1 className="font-serif text-[52px] text-[#0E1A4C] tracking-tight leading-tight mb-8">OliviaTech exists because the right agency didn't.</h1>
<p className="text-[#475569] text-lg leading-relaxed mb-6">I started building on the internet in college. Over the years, working with startups and founders, I noticed a frustrating pattern. The big agencies moved too slow and cost too much. The cheap freelancers wrote terrible code and disappeared when things broke.</p>
<p className="text-[#475569] text-lg leading-relaxed">Founders were forced to choose between speed, quality, and budget. I built OliviaTech to sit exactly in the middle — an agency that moves with the urgency of a startup but builds with the discipline of a senior engineering team.</p>
</div>
</section>

<section className="py-24 bg-[#EBF0F8]">
<div className="container mx-auto px-6 max-w-3xl">
<span className="eyebrow">How We Think</span>
<div className="space-y-16 mt-8">
<div>
<h3 className="font-serif text-3xl text-[#0E1A4C] mb-4">"We ship things we'd use ourselves."</h3>
<p className="text-[#475569] text-base leading-relaxed">Every project goes through one question before launch: would we be embarrassed to show this to someone we respect? If the answer is yes, we keep building.</p>
</div>
<div>
<h3 className="font-serif text-3xl text-[#0E1A4C] mb-4">"We communicate like humans, not agencies."</h3>
<p className="text-[#475569] text-base leading-relaxed">No 'per our last email.' No weekly status PDFs. You get a real Slack channel, a shared Notion board, and honest updates — even when something is running behind.</p>
</div>
<div>
<h3 className="font-serif text-3xl text-[#0E1A4C] mb-4">"We care about what happens after launch day."</h3>
<p className="text-[#475569] text-base leading-relaxed">30-day post-launch support is included in every project. We watch your metrics with you. If something breaks at 2am, we fix it — we don't ask you to file a ticket.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E1A4C]">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div><div className="font-serif text-[56px] text-white">20+</div><div className="text-[#00B4D8] text-sm">Projects Shipped</div></div>
<div><div className="font-serif text-[56px] text-white">98%</div><div className="text-[#00B4D8] text-sm">Client Retention</div></div>
<div><div className="font-serif text-[56px] text-white">2 Yrs</div><div className="text-[#00B4D8] text-sm">Building</div></div>
<div><div className="font-serif text-[56px] text-white">1M+</div><div className="text-[#00B4D8] text-sm">Users Reached</div></div>
</div>
</div>
</section>

<section className="py-32 bg-[#EBF0F8] text-center">
<div className="container mx-auto px-6 max-w-2xl">
<span className="eyebrow mx-auto justify-center">Work With Us</span>
<h2 className="font-serif text-[44px] text-[#0E1A4C] leading-tight mb-6">We're selective. Not because we're exclusive — but because we want to do our best work.</h2>
<p className="text-[#475569] mb-8">We take 3–4 new projects per quarter. If the timing is right, let's talk.</p>
<button className="px-8 h-12 rounded-full bg-[#0E1A4C] text-white text-sm font-medium hover:bg-[#00B4D8] transition-colors" onclick="navigate('contact')">Tell us about your project →</button>
</div>
</section>
</div>



<div className="page-view pt-32 pb-32 bg-[#F5F7FA] min-h-screen" id="contact">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<span className="eyebrow">Get In Touch</span>
<h1 className="font-serif text-[44px] text-[#0E1A4C] leading-tight mb-6">Tell us what you're trying to build.</h1>
<p className="text-[17px] text-[#475569] leading-relaxed mb-12">We respond to every message personally within 24 hours. No auto-responders. No sales team. Just Pritam or someone from the team who has actually shipped what you're describing.</p>
<a className="text-2xl md:text-3xl font-sans font-medium text-[#00B4D8] hover:text-[#0E1A4C] transition-colors block mb-6" href="mailto:oliviatechoffice@gmail.com">oliviatechoffice@gmail.com</a>
<div className="flex items-center space-x-2 text-sm text-[#0F766E] font-medium bg-[#E8F8FC] w-max px-4 py-2 rounded-full border border-[#D8E4F0] mb-12">
<div className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse"></div>
<span>Currently accepting new projects for Q2 2026</span>
</div>
<p className="font-serif italic text-xl text-[#0E1A4C] border-l-2 border-[#00B4D8] pl-6 py-2">"The only agency I'll ever recommend. They just get it."</p>
</div>
<div className="w-full lg:w-1/2 bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#D8E4F0]">
<form className="space-y-5">
<input className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] focus:ring-4 focus:ring-[#E8F8FC] text-[#0E1A4C] p-4 rounded-xl outline-none transition-all text-sm placeholder-[#475569]/60" placeholder="Name" type="text"/>
<input className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] focus:ring-4 focus:ring-[#E8F8FC] text-[#0E1A4C] p-4 rounded-xl outline-none transition-all text-sm placeholder-[#475569]/60" placeholder="Email" type="email"/>
<textarea className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] focus:ring-4 focus:ring-[#E8F8FC] text-[#0E1A4C] p-4 rounded-xl outline-none transition-all resize-none text-sm placeholder-[#475569]/60" placeholder="What are you building? (2-3 sentences)" rows="4"></textarea>
<div className="grid grid-cols-2 gap-4">
<select className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] text-[#0E1A4C] p-4 rounded-xl outline-none transition-colors text-sm cursor-pointer">
<option disabled="" selected="" value="">Budget Range</option>
<option>Under ₹1L</option><option>₹1L–5L</option><option>₹5L–20L</option><option>₹20L+</option>
</select>
<select className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] text-[#0E1A4C] p-4 rounded-xl outline-none transition-colors text-sm cursor-pointer">
<option disabled="" selected="" value="">Timeline</option>
<option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>Flexible</option>
</select>
</div>
<input className="w-full bg-white border border-[#D8E4F0] focus:border-[#00B4D8] focus:ring-4 focus:ring-[#E8F8FC] text-[#0E1A4C] p-4 rounded-xl outline-none transition-all text-sm placeholder-[#475569]/60" placeholder="How did you hear about us? (Optional)" type="text"/>
<button className="w-full h-[52px] bg-[#00B4D8] hover:bg-[#0E1A4C] text-white font-medium rounded-full transition-colors mt-2 text-[15px]" type="button">
                                Send My Brief →
                            </button>
</form>
</div>
</div>
</div>
</div>



<div className="page-view pt-32 pb-32 bg-[#F5F7FA] min-h-screen" id="blog">
<div className="container mx-auto px-6 lg:px-12 xl:px-24">
<div className="text-center max-w-2xl mx-auto mb-20">
<h1 className="font-serif text-[48px] text-[#0E1A4C] leading-tight tracking-tight mb-4">Ideas from the people building the product.</h1>
<p className="text-[#475569] text-lg">Thoughts on startups, software, design, and the gap between the two.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden border border-[#D8E4F0] custom-card cursor-pointer">
<div className="h-48 bg-[#EBF0F8] w-full"></div>
<div className="p-6">
<div className="flex justify-between text-xs text-[#475569] mb-3">
<span>Oct 12, 2025</span><span>4 min read</span>
</div>
<h3 className="font-serif text-xl text-[#0E1A4C] mb-2 leading-snug">Why your MVP shouldn't take 6 months to build</h3>
<p className="text-sm text-[#475569] line-clamp-2">Stop optimizing for a million users when you don't even have ten. Here is how to scope properly.</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-[#D8E4F0] custom-card cursor-pointer">
<div className="h-48 bg-[#E8F8FC] w-full"></div>
<div className="p-6">
<div className="flex justify-between text-xs text-[#475569] mb-3">
<span>Sep 28, 2025</span><span>6 min read</span>
</div>
<h3 className="font-serif text-xl text-[#0E1A4C] mb-2 leading-snug">React Native vs Native in 2026</h3>
<p className="text-sm text-[#475569] line-clamp-2">The gap has closed. For 95% of startups, building twice is a waste of capital.</p>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#0E1A4C] border-t border-[#00B4D8]">
<div className="container mx-auto px-6 lg:px-12 xl:px-24 py-16">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0 mb-16">

<div className="flex flex-col">
<div className="flex items-center space-x-1 mb-6">
<span className="font-serif font-semibold text-2xl text-white tracking-tight">OLIVIA</span>
<span className="font-serif font-semibold text-2xl text-[#00B4D8] tracking-tight border-b-2 border-[#00B4D8]">TECH</span>
</div>
</div>

<div className="flex flex-col lg:items-center">
<a className="text-[#00B4D8] text-lg font-medium hover:text-white transition-colors mb-6" href="mailto:oliviatechoffice@gmail.com">oliviatechoffice@gmail.com</a>
<div className="flex space-x-6 text-white/70">
<a className="hover:text-[#00B4D8] transition-colors" href="#"><iconify-icon icon="mdi:github" width="24"></iconify-icon></a>
<a className="hover:text-[#00B4D8] transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="24"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col space-y-3">
<a className="text-white hover:text-[#00B4D8] transition-colors text-sm tracking-wide" href="#" onclick="navigate('work')">Work</a>
<a className="text-white hover:text-[#00B4D8] transition-colors text-sm tracking-wide" href="#" onclick="navigate('services')">Services</a>
<a className="text-white hover:text-[#00B4D8] transition-colors text-sm tracking-wide" href="#" onclick="navigate('about')">About</a>
<a className="text-white hover:text-[#00B4D8] transition-colors text-sm tracking-wide" href="#" onclick="navigate('blog')">Blog</a>
<a className="text-white hover:text-[#00B4D8] transition-colors text-sm tracking-wide" href="#" onclick="navigate('contact')">Contact</a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-white/50">
<p>© 2026 OliviaTech · Built in India</p>
<p>Powered by craft and caffeine</p>
</div>
</div>
</footer>



    </>
  );
}
