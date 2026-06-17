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



        // Scroll Animation Logic using Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg', 'shadow-indigo-500/5', 'bg-black/80');
                navbar.classList.remove('bg-black/50', 'border-b');
                navbar.style.borderBottom = '1px solid rgba(255,255,255,0.08)';
            } else {
                navbar.classList.remove('shadow-lg', 'shadow-indigo-500/5', 'bg-black/80');
                navbar.classList.add('bg-black/50', 'border-b');
                navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
            }
        });

        // Card Animation Logic
        const container = document.getElementById('cardContainer');
        const card = document.getElementById('card3d');
        const glare = document.getElementById('cardGlare');
        const shadow = document.getElementById('cardShadow');
        const rotationLimit = 20;
        
        container.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.1s ease-out';
            shadow.style.transition = 'all 0.1s ease-out';
            glare.style.opacity = '1';
            shadow.style.width = '80%';
            shadow.style.opacity = '0.6';
            shadow.style.filter = 'blur(24px)';
        });

        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const rotateY = (x / (rect.width / 2)) * rotationLimit;
            const rotateX = (y / (rect.height / 2)) * -rotationLimit;

            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            glare.style.background = `linear-gradient(${135 + rotateY}deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)`;
        });

        container.addEventListener('mouseleave', () => {
            card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            shadow.style.transition = 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
            
            // Return to specific landing page angle (slightly different from centered)
            card.style.transform = 'rotateX(10deg) rotateY(15deg) rotateZ(-2deg)';
            glare.style.opacity = '0';
            shadow.style.width = '90%';
            shadow.style.opacity = '0.4';
            shadow.style.filter = 'blur(16px)';
        });

        // Simple Pricing Toggle Logic
        const monthlyBtn = document.getElementById('monthlyBtn');
        const yearlyBtn = document.getElementById('yearlyBtn');
        const priceText = document.querySelector('.price-text');
        
        yearlyBtn.addEventListener('click', () => {
            monthlyBtn.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm');
            monthlyBtn.classList.add('text-zinc-500');
            
            yearlyBtn.classList.remove('text-zinc-500');
            yearlyBtn.classList.add('bg-zinc-800', 'text-white', 'shadow-sm');
            
            // Update price visual
            priceText.innerHTML = '$24';
        });
        
        monthlyBtn.addEventListener('click', () => {
            yearlyBtn.classList.remove('bg-zinc-800', 'text-white', 'shadow-sm');
            yearlyBtn.classList.add('text-zinc-500');
            
            monthlyBtn.classList.remove('text-zinc-500');
            monthlyBtn.classList.add('bg-zinc-800', 'text-white', 'shadow-sm');
            
            // Update price visual
            priceText.innerHTML = '$29';
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white cursor-pointer group">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-[10px] font-bold shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">N</div>
<span className="font-medium tracking-tight text-sm group-hover:text-indigo-200 transition-colors">Nova Financial</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200 relative group" href="#">
                    Products
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-200 relative group" href="#">
                    Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-200 relative group" href="#">
                    Developers
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors duration-200 relative group" href="#">
                    Pricing
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="btn-shine btn-bounce text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 relative">
<div className="absolute inset-0 bg-grid -z-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 relative z-20">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-indigo-300 hover:bg-white/10 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        New v2.0 Released
                    </div>
</div>
<h1 className="fade-in-up delay-100 text-5xl sm:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                    Banking built for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-zinc-400 animate-gradient-x">modern founders.</span>
</h1>
<p className="fade-in-up delay-200 text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    Experience the future of financial management. Real-time insights, instant transfers, and zero hidden fees. Designed for the builders of tomorrow.
                </p>
<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="btn-shine btn-bounce group relative px-6 py-3 bg-white text-black rounded-full font-medium text-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:pr-8">
<span className="relative z-10">Start for free</span>
<span className="iconify absolute right-2.5 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" data-icon="lucide:arrow-right"></span>
</button>
<button className="btn-bounce px-6 py-3 text-zinc-300 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group">
<span className="iconify group-hover:scale-110 transition-transform duration-300 text-indigo-400" data-icon="lucide:play-circle" data-width="18"></span>
                        Watch Showreel
                    </button>
</div>
<div className="fade-in-up delay-300 pt-8 flex items-center gap-6 text-zinc-500">
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<span className="iconify" data-icon="lucide:shield-check"></span>
<span className="text-xs">FDIC Insured</span>
</div>
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<span className="iconify" data-icon="lucide:zap"></span>
<span className="text-xs">Instant Setup</span>
</div>
<div className="flex items-center gap-2 hover:text-zinc-300 transition-colors cursor-default">
<span className="iconify" data-icon="lucide:globe"></span>
<span className="text-xs">Global Access</span>
</div>
</div>
</div>

<div className="relative h-[400px] sm:h-[500px] flex items-center justify-center fade-in-up delay-200 lg:justify-end">
<div className="card-container group relative w-full max-w-sm sm:max-w-md aspect-[1.586/1] z-10 cursor-pointer" id="cardContainer">
<div className="card-3d relative w-full h-full rounded-2xl will-change-transform" id="card3d">
<div className="absolute inset-0 rounded-2xl bg-indigo-900/80 layer-depth-1 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-indigo-950/80 layer-depth-2 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-indigo-950/80 layer-depth-3 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-indigo-950/80 layer-depth-4 border border-white/5 pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl bg-black/50 layer-depth-5 shadow-2xl pointer-events-none"></div>
<div className="absolute inset-0 rounded-2xl epic-gradient glass-panel overflow-hidden">
<div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 pointer-events-none transition-opacity duration-300" id="cardGlare"></div>
<div className="relative h-full flex flex-col justify-between p-6 sm:p-8 z-10 pointer-events-none">
<div className="flex justify-between items-start">
<div className="flex items-center gap-2 text-white/90">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
<span className="font-semibold text-lg tracking-tighter">N</span>
</div>
<span className="text-sm font-medium tracking-wide uppercase opacity-80">Nova</span>
</div>
<span className="iconify text-white/60" data-icon="lucide:nfc" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex flex-col gap-6 mt-2">
<div className="w-12 h-9 rounded-md chip relative border border-white/20 shadow-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 border border-black/10 rounded-md"></div>
<div className="absolute w-[1px] h-full bg-black/10 left-1/3"></div>
<div className="absolute w-[1px] h-full bg-black/10 right-1/3"></div>
<div className="absolute h-[1px] w-full bg-black/10 top-1/2"></div>
<div className="absolute w-6 h-4 border border-black/10 rounded-sm"></div>
</div>
<div className="flex justify-between items-center w-full max-w-[90%]">
<span className="text-lg sm:text-2xl font-mono-card text-white/90 tracking-widest drop-shadow-md">4242</span>
<span className="text-lg sm:text-2xl font-mono-card text-white/90 tracking-widest drop-shadow-md">9911</span>
<span className="text-lg sm:text-2xl font-mono-card text-white/90 tracking-widest drop-shadow-md">6224</span>
<span className="text-lg sm:text-2xl font-mono-card text-white/90 tracking-widest drop-shadow-md">1085</span>
</div>
</div>
<div className="flex justify-between items-end">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-medium">Cardholder</span>
<span className="text-sm sm:text-base font-medium text-white tracking-wide uppercase">Jordan Rivers</span>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] uppercase tracking-widest text-white/50 mb-1 font-medium">Expires</span>
<span className="text-sm sm:text-base font-mono-card text-white tracking-wide">09/28</span>
</div>
<div className="relative flex items-center ml-4">
<div className="w-8 h-8 rounded-full bg-red-500/80 backdrop-blur-sm mix-blend-screen z-10"></div>
<div className="w-8 h-8 rounded-full bg-orange-400/80 backdrop-blur-sm -ml-4 z-0"></div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/40 blur-xl rounded-[100%] transition-all duration-500 opacity-40" id="cardShadow"></div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-12 mb-20 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll stagger-1 group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Track every transaction as it happens. Visualize spending patterns with zero latency.</p>
</div>

<div className="reveal-on-scroll stagger-2 group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-fuchsia-500/10 flex items-center justify-center mb-4 text-fuchsia-400 group-hover:bg-fuchsia-500/20 group-hover:scale-110 transition-all duration-300">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Virtual Cards</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Create unlimited virtual cards for specific vendors. Set limits and freeze instantly.</p>
</div>

<div className="reveal-on-scroll stagger-3 group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
<span className="iconify" data-icon="lucide:lock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Ironclad Security</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Bank-grade encryption with biometric authentication standard on all accounts.</p>
</div>
</div>
</div>

<div className="w-full relative py-20 border-t border-white/5 bg-white/[0.005]">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="reveal-on-scroll flex flex-col items-center text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Trusted by modern founders</h2>
<p className="text-zinc-400 text-sm max-w-lg">Join thousands of companies who trust Nova to power their financial infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal-on-scroll stagger-1 p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-white/10 transition-colors duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-medium text-white shadow-lg shadow-indigo-500/20">AS</div>
<div>
<h4 className="text-sm font-medium text-white">Alex Sarah</h4>
<p className="text-xs text-zinc-500">CEO at TechFlow</p>
</div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Nova completely transformed how we manage our startup's runway. The virtual cards feature alone has saved us countless hours of reconciliation."</p>
</div>

<div className="reveal-on-scroll stagger-2 p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-white/10 transition-colors duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-xs font-medium text-white shadow-lg shadow-emerald-500/20">DR</div>
<div>
<h4 className="text-sm font-medium text-white">David Ross</h4>
<p className="text-xs text-zinc-500">Founder at Prism</p>
</div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"The API is a dream to work with. We built our entire internal expense dashboard on top of Nova in less than a week. Highly recommended."</p>
</div>

<div className="reveal-on-scroll stagger-3 p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-white/10 transition-colors duration-300">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-600 flex items-center justify-center text-xs font-medium text-white shadow-lg shadow-fuchsia-500/20">EM</div>
<div>
<h4 className="text-sm font-medium text-white">Elena M.</h4>
<p className="text-xs text-zinc-500">CTO at Vertex</p>
</div>
</div>
<p className="text-sm text-zinc-300 font-light leading-relaxed">"Finally, a banking interface that doesn't look like it was built in 1999. It's fast, beautiful, and the customer support is incredible."</p>
</div>
</div>
</div>
</div>

<div className="w-full relative py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal-on-scroll flex flex-col items-center text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-400 text-sm max-w-lg mb-8">Start for free, scale as you grow. No hidden transaction fees.</p>

<div className="flex items-center gap-3 bg-zinc-900 border border-white/5 p-1 rounded-full relative">
<div className="w-[1px] h-4 bg-white/10 mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-0"></div>
<button className="relative z-10 px-4 py-1.5 rounded-full text-xs font-medium text-white bg-zinc-800 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95" id="monthlyBtn">Monthly</button>
<button className="relative z-10 px-4 py-1.5 rounded-full text-xs font-medium text-zinc-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95" id="yearlyBtn">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="reveal-on-scroll stagger-1 p-8 rounded-3xl border border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-500 group">
<h3 className="text-sm font-medium text-zinc-400 mb-2 group-hover:text-white transition-colors">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">$0</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                2 Virtual Cards
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                $5k Monthly Limit
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                Basic Analytics
                            </li>
</ul>
<button className="btn-bounce w-full py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300">Get Started</button>
</div>

<div className="reveal-on-scroll stagger-2 relative p-8 rounded-3xl border border-indigo-500/30 bg-zinc-900/40 hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-500 group z-10">

<div className="pricing-glow"></div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-sm font-medium text-indigo-400 group-hover:text-indigo-300 transition-colors">Pro</h3>
<span className="px-2 py-0.5 rounded-full bg-indigo-500/10 text-[10px] font-semibold text-indigo-400 border border-indigo-500/20 uppercase tracking-wide">Popular</span>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight price-text">$29</span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-200">
<span className="iconify text-indigo-400 group-hover:scale-110 transition-transform" data-icon="lucide:check" data-width="16"></span>
                                Unlimited Virtual Cards
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-200">
<span className="iconify text-indigo-400 group-hover:scale-110 transition-transform" data-icon="lucide:check" data-width="16"></span>
                                $50k Monthly Limit
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-200">
<span className="iconify text-indigo-400 group-hover:scale-110 transition-transform" data-icon="lucide:check" data-width="16"></span>
                                Advanced Analytics
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-200">
<span className="iconify text-indigo-400 group-hover:scale-110 transition-transform" data-icon="lucide:check" data-width="16"></span>
                                Priority Support
                            </li>
</ul>
<button className="btn-shine btn-bounce w-full py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-indigo-500/20">Start Free Trial</button>
</div>

<div className="reveal-on-scroll stagger-3 p-8 rounded-3xl border border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-500 group">
<h3 className="text-sm font-medium text-zinc-400 mb-2 group-hover:text-white transition-colors">Enterprise</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-semibold text-white tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                Dedicated Account Manager
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                Unlimited Limits
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<span className="iconify text-zinc-500 group-hover:text-zinc-300 transition-colors" data-icon="lucide:check" data-width="16"></span>
                                Custom Integrations
                            </li>
</ul>
<button className="btn-bounce w-full py-2.5 rounded-full border border-white/10 text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300">Contact Sales</button>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black/20 backdrop-blur-xl relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">

<div className="col-span-2 md:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 text-white mb-6 group cursor-pointer">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center text-[10px] font-bold group-hover:rotate-12 transition-transform duration-300">N</div>
<span className="font-medium tracking-tight text-sm group-hover:text-indigo-200 transition-colors">Nova Financial</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs mb-6">
                        Redefining the standard for modern banking. Built for high-growth startups and global founders who demand more.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:-translate-y-1 hover:text-indigo-400 flex items-center justify-center transition-all duration-300 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:-translate-y-1 hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 hover:-translate-y-1 hover:text-blue-400 flex items-center justify-center transition-all duration-300 text-zinc-400" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="14"></span>
</a>
</div>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Features</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Pricing</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Changelog</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Docs</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Contact</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Partners</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Community</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Help Center</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Status</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Security</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-zinc-500 font-medium">
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Privacy</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Terms</a></li>
<li><a className="hover:text-zinc-300 transition-colors hover:translate-x-1 inline-block duration-200" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-500">All systems operational</span>
</div>
<span className="text-xs text-zinc-600">© 2024 Nova Financial Inc. All rights reserved.</span>
</div>
</div>
</footer>


    </>
  );
}
