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



        (function () {
            const toggle = document.getElementById("menuToggle");
            const menu = document.getElementById("mobileMenu");
            const backdrop = document.getElementById("menuBackdrop");

            if (!toggle || !menu) return;

            function openMenu() {
                menu.classList.add("is-open");
                document.body.classList.add("no-scroll");
                if (backdrop) backdrop.classList.add("is-open");
                toggle.setAttribute("aria-expanded", "true");
            }

            function closeMenu() {
                menu.classList.remove("is-open");
                document.body.classList.remove("no-scroll");
                if (backdrop) backdrop.classList.remove("is-open");
                toggle.setAttribute("aria-expanded", "false");
            }

            toggle.addEventListener("click", () => menu.classList.contains("is-open") ? closeMenu() : openMenu());
            if (backdrop) backdrop.addEventListener("click", closeMenu);
            menu.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
            document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
        })();

        // Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
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
      

<div id="menuBackdrop"></div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-2.5 group hover:opacity-80 transition-opacity" href="#home">
<div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
<iconify-icon icon="solar:matrix-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold font-heading tracking-tight text-white">Caledonia</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Pricing</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Free Audit</a>
<a className="hover:text-white transition-colors duration-300" href="#process">About</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="px-5 py-2 bg-white text-zinc-950 text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95" href="#contact">
                    Book Now
                </a>
</div>

<button aria-expanded="false" className="md:hidden text-zinc-400 hover:text-white transition-colors p-2" id="menuToggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="flex flex-col h-full bg-zinc-950 text-white" id="mobileMenu">

<div className="flex items-center justify-between px-6 h-16 border-b border-zinc-800">
<a className="flex items-center gap-2.5" href="#home">
<div className="w-8 h-8 bg-white text-black rounded-md flex items-center justify-center">
<iconify-icon icon="solar:matrix-linear" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold font-heading tracking-tight">Caledonia</span>
</a>
<button className="p-2 text-zinc-400 hover:text-white transition-colors bg-zinc-900 rounded-full" onclick="document.getElementById('menuToggle').click()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto px-6 py-12">
<div className="flex flex-col gap-8">
<div className="space-y-2">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 pl-1 font-heading">Navigation</p>
<a className="menu-link block text-3xl font-heading font-medium text-white hover:text-zinc-400 transition-colors" href="#home">Home</a>
<a className="menu-link block text-3xl font-heading font-medium text-white hover:text-zinc-400 transition-colors" href="#services">Pricing</a>
<a className="menu-link block text-3xl font-heading font-medium text-white hover:text-zinc-400 transition-colors" href="#contact">Free Audit</a>
<a className="menu-link block text-3xl font-heading font-medium text-white hover:text-zinc-400 transition-colors" href="#process">About</a>
</div>
<div className="mt-8 pt-8 border-t border-zinc-900">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-6 pl-1 font-heading">Get in touch</p>
<a className="block text-xl text-zinc-300 hover:text-white mb-2" href="mailto:hello@caledonia.com">hello@caledonia.com</a>
<p className="text-zinc-600 text-sm">Edinburgh, Scotland</p>
</div>
</div>
</div>

<div className="p-6 border-t border-zinc-800 bg-zinc-950 pb-safe">
<a className="menu-link w-full flex items-center justify-center gap-2 py-4 bg-white text-zinc-950 text-sm font-bold uppercase tracking-wide rounded-lg active:scale-95 transition-transform" href="#contact">
                Book Free Audit <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="home">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-bold text-zinc-300 tracking-wider uppercase">Accepting New Clients</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight text-white leading-[0.95] mb-8 font-heading">
                    Simple websites.<br/>
<span className="text-zinc-500">Real business results.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg mb-10 font-light">
                    Modern websites and AI business assistants for Edinburgh small businesses. Designed to convert visitors into loyal customers.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02] active:scale-95 group text-sm font-semibold uppercase tracking-wide text-zinc-950 bg-white rounded-full px-8 py-4" href="#contact">
                        Get a Free Website Audit 
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center hover:bg-zinc-900 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-95 text-sm font-semibold uppercase tracking-wide text-zinc-400 bg-transparent border border-zinc-800 rounded-full px-8 py-4" href="#process">
                        See How It Works
                    </a>
</div>
</div>

<div className="relative h-[400px] md:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black border border-zinc-800 fade-in-up delay-200 group">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60"></div>
<img alt="Edinburgh Coffee Shop Interior" className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 will-change-transform grayscale-[0.2]" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-80 bg-zinc-950/90 backdrop-blur-md p-5 rounded-xl border border-zinc-800 shadow-xl z-20 flex items-start gap-4 transform transition-all duration-500 hover:-translate-y-2">
<div className="h-10 w-10 bg-white/10 rounded-full flex-shrink-0 flex items-center justify-center text-white border border-white/10">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">AI Assistant</div>
<div className="text-sm font-medium text-white leading-snug">"I've booked that table for you for Friday at 7pm."</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
<div className="max-w-7xl mx-auto">
<div className="max-w-xl mb-16 reveal">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4 font-heading">The trouble with local digital.</h2>
<p className="text-zinc-500 text-lg leading-relaxed font-light">Running a business is hard enough without worrying about your website crashing or missing leads.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group reveal delay-100-trans p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-5 group-hover:text-white transition-colors">
<iconify-icon icon="solar:monitor-camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">Outdated websites</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Sites built in 2010 that don't load on mobile and scare customers away.</p>
</div>

<div className="group reveal delay-200-trans p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-5 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">Missed enquiries</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Customers message when you are closed. Without an instant reply, they leave.</p>
</div>

<div className="group reveal delay-300-trans p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-5 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">Complicated pricing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Confusing retainers, hidden fees, and long contracts you can't escape.</p>
</div>

<div className="group reveal p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 mb-5 group-hover:text-white transition-colors">
<iconify-icon icon="solar:hourglass-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">Long build times</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Agencies taking months to launch a simple 5-page site while you wait.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-12 reveal font-heading">What we do.</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 flex flex-col h-full reveal delay-100-trans group cursor-default">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-medium text-white mb-3">One-off website builds</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        A clean, high-performance website that you own 100%. Built for mobile first, optimized for Google, and designed to convert.
                    </p>
</div>

<div className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-[0_0_50px_rgba(255,255,255,0.1)] flex flex-col h-full relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 reveal delay-200-trans cursor-default">
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-900 mb-6 border border-zinc-200">
<iconify-icon icon="solar:robot-linear" width="24"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<h3 className="text-2xl font-heading font-medium text-zinc-900">AI Business Assistant</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-zinc-900 text-white uppercase tracking-wide">Trial</span>
</div>
<p className="text-zinc-600 text-sm leading-relaxed">
                            A smart chatbot trained on your business data. It answers FAQs and takes booking details 24/7, so you never miss a lead.
                        </p>
</div>
</div>

<div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 flex flex-col h-full reveal delay-300-trans group cursor-default">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-white mb-6 border border-zinc-700">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-heading font-medium text-white mb-3">Optional website care</h3>
<p className="text-zinc-400 text-sm leading-relaxed">
                        Don't want to manage updates? We offer a simple monthly package for hosting, security, and small content changes.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950 border-y border-zinc-900">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-12 reveal font-heading">Who we work with.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-100-trans">
<img alt="Tradesperson" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-60" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between">
<h3 className="text-xl font-heading font-medium text-white">Trades &amp; Services</h3>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white border border-white/10">
<iconify-icon icon="solar:sledgehammer-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-200-trans">
<img alt="Cafe" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-60" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between">
<h3 className="text-xl font-heading font-medium text-white">Cafés &amp; Hospitality</h3>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white border border-white/10">
<iconify-icon icon="solar:cup-hot-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-default reveal delay-300-trans">
<img alt="Gym" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center justify-between">
<h3 className="text-xl font-heading font-medium text-white">Gyms &amp; Wellness</h3>
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm text-white border border-white/10">
<iconify-icon icon="solar:dumbbell-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-4 font-heading">How it works.</h2>
<p className="text-zinc-500 font-light">Straightforward from start to finish.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-px bg-zinc-800 -z-10 reveal"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative flex flex-col items-center text-center reveal delay-100-trans group">
<div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-white mb-6 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-600">
<iconify-icon icon="solar:magnifer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">1. Free website audit</h3>
<p className="text-zinc-500 text-sm leading-relaxed px-2">We review your current setup and identify opportunities.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-200-trans group">
<div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-white mb-6 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-600">
<iconify-icon icon="solar:sledgehammer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">2. One-off build</h3>
<p className="text-zinc-500 text-sm leading-relaxed px-2">We design and build a fast, modern site tailored to your brand.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-300-trans group">
<div className="w-20 h-20 bg-white border border-white/20 rounded-2xl flex items-center justify-center text-zinc-950 mb-6 z-10 transition-all duration-500 group-hover:scale-110 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<iconify-icon icon="solar:robot-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">3. 30-day AI trial</h3>
<p className="text-zinc-500 text-sm leading-relaxed px-2">We install the AI. You test it risk-free. See real leads come in.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal group">
<div className="w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-white mb-6 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-zinc-600">
<iconify-icon icon="solar:check-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-heading font-medium text-white mb-2">4. You choose</h3>
<p className="text-zinc-500 text-sm leading-relaxed px-2">Keep the AI if it works. Keep the site always. No lock-in.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto bg-white rounded-[2rem] p-10 md:p-24 text-center relative overflow-hidden shadow-2xl reveal border border-zinc-800">

<div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-white z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-[56px] font-semibold tracking-tight text-zinc-950 mb-8 max-w-2xl leading-[1.1] font-heading">
                    See how your website could work harder.
                </h2>
<button className="hover:bg-zinc-900 hover:text-white transition-all duration-300 shadow-xl flex group hover:scale-105 active:scale-95 font-bold uppercase tracking-wide text-xs text-white bg-zinc-950 rounded-full py-5 px-10 gap-2 items-center justify-center border border-zinc-950" onclick="window.location.href='#contact'">
                    Book Your Free Website Audit 
                    <iconify-icon className="text-zinc-400 group-hover:text-white transition-colors duration-300" icon="solar:calendar-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity" href="#home">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center">
<iconify-icon icon="solar:matrix-linear" width="12"></iconify-icon>
</div>
<span className="font-semibold text-white tracking-tight font-heading">Caledonia</span>
</a>
<p className="text-zinc-500 text-sm leading-relaxed">
                        Helping Edinburgh's small businesses grow through clean design and smart automation.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider font-heading">Services</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors duration-300" href="#">Web Design</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">AI Automation</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Website Audits</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-4 text-xs uppercase tracking-wider font-heading">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors duration-300" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors duration-300" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Caledonia Digital Studios. Made in Edinburgh.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter" style={{filter: 'grayscale(1) invert(1)'}} width="14"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:instagram-icon" style={{filter: 'grayscale(1) invert(1)'}} width="14"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" style={{filter: 'grayscale(1) invert(1)'}} width="14"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
