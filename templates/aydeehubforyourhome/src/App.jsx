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



        let currentLang = 'en';
        
        const translations = {
            en: {
                heroTitle: 'A Hub for <br> <span class="text-gold-gradient">Your Home</span>',
                heroSub: 'Mortgage, real estate, and remodeling, guided by one trusted team, built to help families grow long-term wealth.',
                heroCtaPri: 'Get Started',
                heroCtaSec: 'Explore Services',
                svc1Title: 'Mortgage & Financing',
                svc1Desc: 'Buying, refinancing, or investing, we help you choose the right loan with clarity.',
                svc1Btn: 'View Financing Options',
                svc2Title: 'Real Estate (Buy & Sell)',
                svc2Desc: 'From finding the right home to selling with a plan, we guide you through every step.',
                svc2Btn: 'View Real Estate Services',
                svc3Title: 'Remodeling & Improvements',
                svc3Desc: 'Upgrade your home with trusted guidance so it looks better and can be worth more.',
                svc3Btn: 'View Remodeling Services',
                formTitle: 'Start Your Home Journey Here',
                formSub: 'Quick form. Friendly call. No pressure.',
                formBtn: 'Start Here',
                formMicro: 'We respect your privacy. No spam. No pressure.'
            },
            es: {
                heroTitle: 'Un Centro Para <br> <span class="text-gold-gradient">Tu Hogar</span>',
                heroSub: 'Hipoteca, bienes raíces y remodelación, con un solo equipo de confianza, para ayudarte a construir riqueza a largo plazo.',
                heroCtaPri: 'Comenzar',
                heroCtaSec: 'Ver Servicios',
                svc1Title: 'Hipoteca y Financiamiento',
                svc1Desc: 'Compra, refinanciamiento o inversión, te ayudamos a elegir el préstamo correcto con claridad.',
                svc1Btn: 'Ver Opciones de Financiamiento',
                svc2Title: 'Bienes Raíces (Compra y Venta)',
                svc2Desc: 'Desde encontrar la casa ideal hasta vender con un plan, te guiamos en cada paso.',
                svc2Btn: 'Ver Servicios de Bienes Raíces',
                svc3Title: 'Remodelación y Mejoras',
                svc3Desc: 'Mejora tu hogar con guía experta para que luzca mejor y valga más.',
                svc3Btn: 'Ver Servicios de Remodelación',
                formTitle: 'Empieza Aquí Tu Camino a Casa',
                formSub: 'Formulario rápido. Llamada amable. Sin presión.',
                formBtn: 'Empezar Aquí',
                formMicro: 'Respetamos tu privacidad. Sin spam. Sin presión.'
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            const t = translations[currentLang];
            
            // Toggle UI
            const dot = document.getElementById('lang-dot');
            const langActive = document.getElementById('lang-active');
            const langIndicator = document.getElementById('lang-indicator');
            
            if(currentLang === 'es') {
                dot.style.transform = 'translateX(100%)';
                langActive.innerText = 'ES';
                langIndicator.innerText = 'EN';
            } else {
                dot.style.transform = 'translateX(0)';
                langActive.innerText = 'EN';
                langIndicator.innerText = 'ES';
            }

            // Update Text
            document.getElementById('hero-title').innerHTML = t.heroTitle;
            document.getElementById('hero-sub').innerText = t.heroSub;
            document.getElementById('hero-cta-pri').innerText = t.heroCtaPri;
            document.getElementById('hero-cta-sec').innerText = t.heroCtaSec;
            
            document.getElementById('svc-1-title').innerText = t.svc1Title;
            document.getElementById('svc-1-desc').innerText = t.svc1Desc;
            document.getElementById('svc-1-btn').innerText = t.svc1Btn;
            
            document.getElementById('svc-2-title').innerText = t.svc2Title;
            document.getElementById('svc-2-desc').innerText = t.svc2Desc;
            document.getElementById('svc-2-btn').innerText = t.svc2Btn;
            
            document.getElementById('svc-3-title').innerText = t.svc3Title;
            document.getElementById('svc-3-desc').innerText = t.svc3Desc;
            document.getElementById('svc-3-btn').innerText = t.svc3Btn;
            
            document.getElementById('form-title').innerText = t.formTitle;
            document.getElementById('form-sub').innerText = t.formSub;
            document.getElementById('form-btn').innerText = t.formBtn;
            document.getElementById('form-micro').innerText = t.formMicro;
        }
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#011812]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-400 text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-widest uppercase text-white">The Hub</span>
<span className="text-[0.65rem] text-slate-400 tracking-wide">MORTGAGE • REALTY • DESIGN</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-amber-400 transition-colors" href="#services">Services</a>
<a className="hover:text-amber-400 transition-colors" href="#process">How It Works</a>
<a className="hover:text-amber-400 transition-colors" href="#testimonials">Stories</a>
<a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">

<button className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors" onclick="toggleLanguage()">
<span className="opacity-50" id="lang-indicator">ES</span>
<div className="w-8 h-4 rounded-full border border-slate-600 relative flex items-center px-0.5">
<div className="w-3 h-3 bg-amber-400 rounded-full shadow-sm transition-all translate-x-0" id="lang-dot"></div>
</div>
<span className="text-amber-400" id="lang-active">EN</span>
</button>
<a className="hidden sm:block px-5 py-2.5 bg-white text-[#011812] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all hover:scale-105" href="#contact">
                    Contact
                </a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 opacity-40">

<img alt="Modern home interior" className="w-full h-full object-cover animate-drift" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#011812] via-[#011812]/80 to-[#011812]/40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#011812]/90 via-transparent to-[#011812]/90"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-8">
<iconify-icon className="text-amber-400" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-amber-200 uppercase tracking-widest" id="hero-badge">Trusted. Community-First. No Pressure.</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]" id="hero-title">
                    A Hub for <br/> <span className="text-gold-gradient">Your Home</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed" id="hero-sub">
                    Mortgage, real estate, and remodeling, guided by one trusted team, built to help families grow long-term wealth.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-[#011812] rounded-lg font-bold hover:bg-amber-400 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]" href="#contact" id="hero-cta-pri">
                        Get Started
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-medium hover:border-white/50 hover:bg-white/5 transition-all" href="#services" id="hero-cta-sec">
                        Explore Services
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</header>

<section className="border-y border-white/5 bg-[#00100c] py-8 overflow-hidden relative z-20">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-12 mb-8">
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:chat-round-check-linear"></iconify-icon>
<span>Fast, clear answers</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:map-point-wave-linear"></iconify-icon>
<span>Guidance start to finish</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Community-first service</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span>Options for many situations</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:heart-angle-linear"></iconify-icon>
<span>No pressure, just help</span>
</div>
</div>

<div className="flex justify-center items-center gap-8 md:gap-16 opacity-30 grayscale mix-blend-screen">

<span className="text-lg font-bold font-serif tracking-widest">FORBES</span>
<span className="text-lg font-bold font-serif tracking-widest">YAHOO!</span>
<span className="text-lg font-bold font-serif tracking-widest">REALTOR</span>
<span className="text-lg font-bold font-serif tracking-widest">ZILLOW</span>
</div>
</div>
</section>

<section className="py-24 bg-[#011812] relative" id="services">
<div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/5 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Everything Under One Roof</h2>
<p className="text-slate-400 font-light max-w-2xl mx-auto">Simplify your life. We handle the complex parts of homeownership so you can focus on living.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl bg-[#022019] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3" id="svc-1-title">Mortgage &amp; Financing</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-grow" id="svc-1-desc">Buying, refinancing, or investing, we help you choose the right loan with clarity.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>First-time buyer support</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>FHA, VA, Conventional, ITIN options</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Simple steps, clear numbers</span>
</li>
</ul>
<a className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#011812] transition-all" href="#" id="svc-1-btn">
                        View Financing Options
                    </a>
</div>

<div className="group relative p-8 rounded-2xl bg-[#022019] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col h-full">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3" id="svc-2-title">Real Estate (Buy &amp; Sell)</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-grow" id="svc-2-desc">From finding the right home to selling with a plan, we guide you through every step.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Buyer and seller guidance</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Market strategy that makes sense</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Support from offer to closing</span>
</li>
</ul>
<a className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#011812] transition-all" href="#" id="svc-2-btn">
                        View Real Estate Services
                    </a>
</div>

<div className="group relative p-8 rounded-2xl bg-[#022019] border border-white/5 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col h-full">
<div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-white/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3" id="svc-3-title">Remodeling &amp; Improvements</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed mb-6 flex-grow" id="svc-3-desc">Upgrade your home with trusted guidance so it looks better and can be worth more.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Kitchens, bathrooms, updates</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Remodel planning support</span>
</li>
<li className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Improvements that add value</span>
</li>
</ul>
<a className="inline-flex items-center justify-center w-full py-3 rounded-lg border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-[#011812] transition-all" href="#" id="svc-3-btn">
                        View Remodeling Services
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00100c] border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="relative">
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon icon="solar:chat-line-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">1. Connect</h4>
<p className="text-slate-400 text-sm font-light">Tell us what you need. We listen first.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
</div>
<div className="relative">
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">2. Plan</h4>
<p className="text-slate-400 text-sm font-light">We match you with the right solution.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
</div>
<div>
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon icon="solar:rocket-2-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">3. Move Forward</h4>
<p className="text-slate-400 text-sm font-light">We guide you all the way through.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium tracking-wide" href="#contact">
                    Get Started <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#011812]" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight">Community Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"They explained everything in a way I could actually understand. I didn't feel like a number."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">Sarah J.</p>
</div>

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"We felt supported from the first call to closing day. The team handled both our loan and the purchase."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">The Martinez Family</p>
</div>

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"Our remodel plan made our home feel brand new, and the financing process was seamless."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">David L.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[#00100c]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="hidden lg:block">
<h2 className="text-4xl font-medium text-white mb-6 tracking-tight">Ready to begin?</h2>
<p className="text-slate-400 font-light mb-10 text-lg">One form connects you to all our experts. Whether you are buying, fixing, or funding, we are here.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Quick Response</h4>
<p className="text-slate-500 text-sm">We usually reply within 2 hours during business days.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Secure &amp; Private</h4>
<p className="text-slate-500 text-sm">Your data is encrypted and never sold to lists.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Bilingual Support</h4>
<p className="text-slate-500 text-sm">Hablamos Español. Support in your preferred language.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#011812] p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] relative group">

<div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="mb-8">
<h3 className="text-2xl font-medium text-white mb-2" id="form-title">Start Your Home Journey Here</h3>
<p className="text-sm text-slate-400" id="form-sub">Quick form. Friendly call. No pressure.</p>
</div>
<form className="space-y-4">
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Name / Nombre" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Phone / Teléfono" type="tel"/>
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Email" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<select className="form-input w-full px-4 py-3 rounded-lg text-slate-300 text-sm appearance-none cursor-pointer">
<option>Need: Financing</option>
<option>Need: Buying</option>
<option>Need: Selling</option>
<option>Need: Remodeling</option>
</select>
<select className="form-input w-full px-4 py-3 rounded-lg text-slate-300 text-sm appearance-none cursor-pointer">
<option>Call: Morning</option>
<option>Call: Afternoon</option>
<option>Call: Evening</option>
</select>
</div>

<div className="flex gap-6 py-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-amber-400">
<div className="w-2 h-2 rounded-full bg-amber-400 opacity-100"></div>
</div>
<span className="text-xs text-slate-300">English</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-amber-400">
<div className="w-2 h-2 rounded-full bg-amber-400 opacity-0"></div>
</div>
<span className="text-xs text-slate-300">Español</span>
</label>
</div>
<button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#011812] font-bold rounded-lg transition-all shadow-lg shadow-amber-900/20 mt-2 text-sm tracking-wide" id="form-btn" type="button">
                            Start Here
                        </button>
<p className="text-center text-[10px] text-slate-600 mt-4 uppercase tracking-wider" id="form-micro">
                            We respect your privacy. No spam. No pressure.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00100c] border-t border-white/5" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>Can you help with more than one service?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        Yes! We are a "Hub" for a reason. We can handle your loan, help you find the property, and even plan renovations before you move in.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>Do I need perfect credit?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        No. We have FHA and other programs designed for various credit situations. Let's talk about where you stand.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>Can I buy with ITIN?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        Absolutely. We specialize in ITIN financing to help those without an SSN achieve homeownership.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>How do I get started?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        Simply fill out the form above. A team member will call you to discuss your goals. No obligation.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#011812] border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-amber-400 text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-lg font-bold text-white tracking-widest uppercase">The Hub</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                        Your trusted partner for mortgage, real estate, and remodeling. Building wealth and community, one home at a time.
                    </p>

<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Mortgage &amp; Financing</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Real Estate Buying</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Selling Strategy</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Home Remodeling</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:phone-linear"></iconify-icon> (555) 123-4567</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:letter-linear"></iconify-icon> hello@hubforyourhome.com</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:map-point-linear"></iconify-icon> 123 Main St, City, ST</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 Hub for Your Home. NMLS #000000. Equal Housing Lender.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Licensing</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
