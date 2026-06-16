import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#FF6600',
dark: '#050505',
gray: '#1a1a1a',
text: '#e5e5e5'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
animation: {
'infinite-scroll': 'infinite-scroll 80s linear infinite',
'shimmer': 'shimmer 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'spin-slow': 'spin 60s linear infinite',
'spin-reverse': 'spin 40s linear infinite reverse',
},
keyframes: {
'infinite-scroll': {
from: { transform: 'translateX(0)' },
to: { transform: 'translateX(-100%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



{
"imports": {
"react": "https://esm.sh/react@^19.2.4",
"react-dom/": "https://esm.sh/react-dom@^19.2.4/",
"react/": "https://esm.sh/react@^19.2.4/",
"lucide-react": "https://esm.sh/lucide-react@^0.563.0"
}
}



    document.addEventListener('DOMContentLoaded', () => {
            // 1. Initialize Lenis (Smooth Scroll) - Desktop Only
            if (window.innerWidth >= 768) {
                const lenis = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    direction: 'vertical',
                    smooth: true,
                });
                function raf(time) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);
            }

            // 2. Parallax Effects (Hero & Footer)
            const heroBg = document.getElementById('hero-bg');
            const heroContent = document.getElementById('hero-content');
            const footerWatermark = document.getElementById('footer-watermark');
            const orbs = [document.getElementById('orb-1'), document.getElementById('orb-2')];

            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                
                // Hero Parallax
                if (scrollY < 1000) {
                    if(heroBg) heroBg.style.transform = `translateY(${scrollY * 0.5}px) scale(1.1)`;
                    if(heroContent) {
                        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
                        heroContent.style.opacity = 1 - Math.min(1, scrollY / 700);
                    }
                }

                // Features Orbs Parallax
                if(orbs[0]) orbs[0].style.transform = `translate(-50%, ${scrollY * 0.1}px)`;
                if(orbs[1]) orbs[1].style.transform = `translate(20%, -${scrollY * 0.05}px)`;

                // Footer Watermark
                const docHeight = document.body.offsetHeight;
                if(window.innerHeight + scrollY >= docHeight - 1000) {
                    // Simple parallax calculation based on distance from bottom
                    if(footerWatermark) footerWatermark.style.transform = `translateY(${10 - (scrollY * 0.02)}%)`;
                }
            });

            // 3. Scroll Reveal Animations (Intersection Observer)
            const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Find child lines to animate
                        const lines = entry.target.querySelectorAll('.grow-line');
                        lines.forEach(line => line.classList.add('is-visible'));
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right, .reveal-on-scroll');
            animatedElements.forEach(el => observer.observe(el));
            
            // Also observe parent containers for the lines
            document.querySelectorAll('.process-step').forEach(step => observer.observe(step));


            // 4. Pricing Cards Spotlight Effect
            document.querySelectorAll('.pricing-card').forEach(card => {
                card.onmousemove = e => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const spotlight = card.querySelector('.spotlight');
                    if(spotlight) {
                         spotlight.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 102, 0, 0.15), transparent 40%)`;
                    }
                };
            });
        });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav :className="isScrolled || mobileMenuOpen ? 'bg-black/90 backdrop-blur-xl py-3' : 'bg-transparent py-5'" className="fixed w-full z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-5 md:px-6 flex justify-between items-center relative z-50">
<div className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight">
        Solaris <span className="font-serif italic font-light text-white/90">Marketing</span>
</div>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium h-full">

<div @mouseenter="open = true" @mouseleave="open = false" className="group relative cursor-pointer flex items-center gap-1 hover:text-brand-orange transition-colors h-10" x-data="{ open: false }">
          Platform
          <i :className="open ? 'rotate-180' : ''" className="ph ph-caret-down transition-transform duration-300"></i>

<div className="fixed left-0 top-full w-full bg-black/95 border-b border-white/10 backdrop-blur-3xl overflow-hidden transition-all duration-300 origin-top" style={{display: 'none'}} x-show="open" x-transition:enter="transition ease-out duration-200" x-transition:enter-end="opacity-100 translate-y-0" x-transition:enter-start="opacity-0 -translate-y-2" x-transition:leave="transition ease-in duration-150" x-transition:leave-end="opacity-0 -translate-y-2" x-transition:leave-start="opacity-100 translate-y-0">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-12 gap-12">

<div className="col-span-4 space-y-8">
<div>
<h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Core Capabilities</h3>
<ul className="space-y-4">
<li><a className="group flex items-center gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-colors">
<i className="ph-bold ph-brain"></i></div>
<div>
<div className="text-white font-medium">Predictive Intelligence</div>
<div className="text-xs text-gray-500">Foresee outcomes before spending</div>
</div>
</a></li>
<li><a className="group flex items-center gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors" href="#">
<div className="w-8 h-8 rounded bg-brand-orange/10 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-black transition-colors">
<i className="ph-bold ph-robot"></i></div>
<div>
<div className="text-white font-medium">Autonomous Agents</div>
<div className="text-xs text-gray-500">24/7 media buying &amp; optimization</div>
</div>
</a></li>
</ul>
</div>
</div>

<div className="col-span-4 space-y-8">
<div>
<h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">Use Cases</h3>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-brand-orange transition-colors flex items-center gap-2 group" href="#">E-Commerce
                          Growth
                          <i className="ph ph-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i></a>
</li>
<li><a className="hover:text-brand-orange transition-colors flex items-center gap-2 group" href="#">Lead
                          Generation
                          <i className="ph ph-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i></a>
</li>
</ul>
</div>
</div>

<div className="col-span-4">
<div className="bg-gray-900 rounded-xl overflow-hidden border border-white/10 relative group cursor-pointer h-full min-h-[200px]">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-brand-orange group-hover:text-black group-hover:border-transparent transition-all shadow-xl">
<i className="ph-fill ph-play text-2xl"></i></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-brand-orange transition-colors">
          Resources <i className="ph ph-caret-down"></i></div>
<a className="hover:text-brand-orange transition-colors" href="#">Pricing</a>
<a className="hover:text-brand-orange transition-colors" href="#">Enterprise</a>
</div>
<div className="hidden md:flex items-center space-x-4">
<button className="text-sm font-medium hover:text-brand-orange transition-colors">Log in</button>
<button className="bg-gradient-to-r from-[#FF6600] to-[#FF9E44] text-black text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,102,0,0.3)] hover:shadow-[0_0_25px_rgba(255,102,0,0.5)]">Start Free Trial</button>
</div>

<div className="md:hidden">
<button @click="mobileMenuOpen = !mobileMenuOpen" className="p-2 text-white active:scale-90 transition-transform">
<i :className="mobileMenuOpen ? 'ph-x' : 'ph-list'" className="ph text-2xl"></i>
</button>
</div>
</div>

<div :className="mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'" className="fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 transition-all duration-300 ease-out md:hidden flex flex-col pt-24 px-5">
<div className="flex flex-col space-y-6 text-2xl font-medium tracking-tight">
<a className="border-b border-white/10 pb-4 hover:text-brand-orange transition-colors flex justify-between group" href="#">Platform
          <span className="text-white/20 group-hover:text-brand-orange">→</span></a>
<a className="border-b border-white/10 pb-4 hover:text-brand-orange transition-colors flex justify-between group" href="#">Resources
          <span className="text-white/20 group-hover:text-brand-orange">→</span></a>
<a className="border-b border-white/10 pb-4 hover:text-brand-orange transition-colors flex justify-between group" href="#">Pricing
          <span className="text-white/20 group-hover:text-brand-orange">→</span></a>
<a className="pt-2 hover:text-brand-orange transition-colors text-lg text-gray-400" href="#">Log in</a>
</div>
</div>
</nav>
<main>

<section className="relative h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden bg-black" id="hero">

<div className="absolute inset-0 z-0 will-change-transform scale-110" id="hero-bg">
<img alt="Landscape" className="w-full h-full object-cover object-[center_60%] md:object-center opacity-60" src="https://i.postimg.cc/nFT9Rhzw/hf-20260129-171005-8aec9a7d-9d5e-48c9-a88c-0728bf22e731.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
</div>

<div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 w-full flex flex-col items-center justify-center h-full pb-20 md:pb-0 will-change-transform" id="hero-content">
<h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 md:mb-8 animate-fade-in-up">
          Turn Ad Spend into Revenue.<br className="hidden md:block"/>
<span className="font-serif italic text-white/90 block md:inline mt-2 md:mt-0">Autonomously.</span>
</h1>
<p className="text-base md:text-xl text-gray-300 max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-2 animate-fade-in-up" style={{animationDelay: '100ms'}}>
          Solaris acts as your 24/7 marketing orchestrator. Stop guessing. Start scaling with predictive AI agents
          across Meta &amp; TikTok.
        </p>
<div className="hidden md:flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto animate-fade-in-up" style={{animationDelay: '200ms'}}>
<button className="w-full sm:w-auto bg-gradient-to-r from-[#FF6600] to-[#FF9E44] text-black font-semibold px-8 py-3 rounded-full satisfying-glow transition-all hover:opacity-90 active:scale-95">Start Free Trial</button>
<button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium px-8 py-3 rounded-full hover:bg-white/20 transition-all active:scale-95">Watch Demo</button>
</div>
<div className="md:hidden w-full max-w-xs animate-fade-in-up" style={{animationDelay: '200ms'}}>
<button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-3.5 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-3 active:scale-95">
<span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center pl-1">▶</span>
<span>Watch Demo</span>
</button>
</div>
</div>
</section>

<section className="bg-black border-b border-white/5 py-12 relative overflow-hidden">
<div className="flex w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
<div className="flex animate-infinite-scroll whitespace-nowrap group">

<template x-htmlFor="i in 3">
<div className="flex">
<div className="mx-16 flex items-center gap-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-default">
<i className="ph-fill ph-planet text-3xl text-white group-hover:text-brand-orange transition-colors"></i><span className="text-xl font-bold tracking-tighter text-white font-sans">NEBULA</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-default">
<i className="ph-fill ph-atom text-3xl text-white group-hover:text-brand-orange transition-colors"></i><span className="text-xl font-bold tracking-tighter text-white font-sans">QUANTA</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-default">
<i className="ph-fill ph-lightning text-3xl text-white group-hover:text-brand-orange transition-colors"></i><span className="text-xl font-bold tracking-tighter text-white font-sans">ACEX</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-default">
<i className="ph-fill ph-globe-hemisphere-west text-3xl text-white group-hover:text-brand-orange transition-colors"></i><span className="text-xl font-bold tracking-tighter text-white font-sans">ORBIT</span>
</div>
<div className="mx-16 flex items-center gap-3 opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 cursor-default">
<i className="ph-fill ph-waveform text-3xl text-white group-hover:text-brand-orange transition-colors"></i><span className="text-xl font-bold tracking-tighter text-white font-sans">SYNTH</span>
</div>
</div>
</template>
</div>
</div>
</section>

<section className="bg-black border-y border-white/5 py-8 md:py-24">
<div className="max-w-7xl mx-auto px-5 md:px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="max-w-xs">
<p className="text-xl md:text-2xl font-medium leading-snug">Recover lost revenue, <br/>automatically.</p>
</div>
<div className="flex flex-row flex-wrap gap-x-12 gap-y-6 md:gap-24 w-full md:w-auto">
<div>
<p className="text-xs md:text-sm text-gray-400 mb-1">Total revenue recovered</p>
<p className="text-3xl md:text-5xl font-serif italic text-white">$54m+</p>
</div>
<div>
<p className="text-xs md:text-sm text-gray-400 mb-1">Avg. recovery rate</p>
<p className="text-3xl md:text-5xl font-serif italic text-white">35%</p>
</div>
</div>
</div>
</section>

<section className="bg-black py-32 relative overflow-hidden" id="features">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none opacity-50 will-change-transform" id="orb-1">
</div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none opacity-30 will-change-transform" id="orb-2">
</div>
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
<div className="mb-24 md:flex md:justify-between md:items-end">
<div className="max-w-2xl">
<span className="text-brand-orange font-mono text-xs tracking-widest mb-4 block">/// SYSTEM ARCHITECTURE</span>
<h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] tracking-tight">Intelligence,
              <span className="italic text-gray-500">embedded.</span></h2>
</div>
<p className="text-gray-400 max-w-sm text-sm mt-6 md:mt-0 leading-relaxed text-right md:text-left">Solaris acts as
            the central nervous system for your revenue stack, processing signals 24/7.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 grid-rows-auto gap-4">

<div className="md:col-span-4 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/5 transition-all duration-500 hover:border-white/10">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale">
</div>
<div className="relative z-20 p-8 h-full flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md">
<i className="ph ph-cpu text-brand-orange text-lg"></i></div>
<div className="flex gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span><span className="text-[10px] font-mono text-gray-500 uppercase">System Active</span>
</div>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Predictive Outcomes</h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm">Transformer models predict campaign decay 48h
                  before it happens.</p>
</div>
<div className="mt-8 w-full h-48 relative border-t border-white/5 pt-6 flex items-end justify-between gap-1 px-2">

<div className="w-full bg-gray-800 rounded-sm h-[40%] group-hover:bg-gray-700 transition-colors duration-500">
</div>
<div className="w-full bg-gray-800 rounded-sm h-[70%] group-hover:bg-gray-700 transition-colors duration-500">
</div>
<div className="w-full bg-gray-800 rounded-sm h-[55%] group-hover:bg-gray-700 transition-colors duration-500">
</div>
<div className="w-full bg-gray-800 rounded-sm h-[90%] group-hover:bg-gray-700 transition-colors duration-500">
</div>
<div className="w-full bg-gray-800 rounded-sm h-[65%] group-hover:bg-gray-700 transition-colors duration-500">
</div>
<div className="absolute top-8 left-4 bg-black/60 backdrop-blur border border-brand-orange/30 px-3 py-1 rounded text-xs text-brand-orange font-mono">
                  ROI Forecast: +24%</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6">
<i className="ph ph-lightning text-white text-lg"></i></div>
<h3 className="text-lg font-medium text-white mb-2">Autonomous Agents</h3>
<p className="text-gray-500 text-xs leading-relaxed mb-6">24/7 media buying execution without human
                intervention.</p>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-brand-orange flex items-center justify-center text-black font-bold text-xs">
                  AI</div>
<div className="flex-1 min-w-0">
<div className="h-1.5 w-16 bg-white/20 rounded-full mb-1.5"></div>
<div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
</div>
<div className="text-[10px] text-brand-orange font-mono">OPTIMIZING</div>
</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-1 row-span-1 group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500">
<div className="p-8 relative z-10">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 mb-6">
<i className="ph ph-stack text-white text-lg"></i></div>
<h3 className="text-lg font-medium text-white mb-2">Creative Studio</h3>
<p className="text-gray-500 text-xs leading-relaxed">Generative resizing for 50+ markets instantly.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col md:flex-row items-center">
<div className="p-8 flex-1 relative z-10">
<div className="flex items-center gap-2 mb-4">
<i className="ph ph-globe text-brand-orange"></i><span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Global Signals</span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Market Intelligence</h3>
<p className="text-gray-400 text-sm max-w-xs">Real-time signals from 4.2 billion data points processing
                continuously.</p>
</div>
<div className="w-full md:w-1/2 h-full min-h-[160px] relative overflow-hidden bg-white/[0.02] md:border-l border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10">
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-brand-orange/30 rounded-full animate-ping">
</div>
<div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-2 row-span-1 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#080808] to-[#0f0f0f] border border-white/5 hover:border-brand-orange/20 transition-all duration-500">
<div className="p-8 h-full flex flex-col justify-center relative z-10">
<h3 className="text-3xl font-serif text-white italic mb-1">$54,203,000+</h3>
<p className="text-sm text-gray-400 mb-6">Ad spend managed autonomously</p>
<div className="flex items-center gap-4 text-xs font-mono text-gray-500">
<span className="flex items-center gap-1"><i className="ph ph-arrow-up-right text-green-500"></i> 99.9% Uptime</span>
<span>Latency: 24ms</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-black overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
<div className="mb-32 max-w-3xl">
<span className="text-brand-orange font-mono text-xs tracking-widest mb-6 block">/// PROCESS_FLOW</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-[1.1] tracking-tight">From anonymous click
            to
            <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 italic">loyal customer.</span>
</h2>
<p className="text-gray-400 text-lg max-w-xl">Solaris creates a digital twin of every visitor, predicting their
            next move with 94% accuracy.</p>
</div>

<div className="process-step grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group mb-24 lg:mb-32 relative">
<div className="lg:col-span-5 flex flex-col justify-center slide-in-left">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl font-mono text-brand-orange shadow-[0_0_15px_rgba(255,102,0,0.1)]">01</span>
<span className="text-brand-orange font-mono text-xs tracking-widest uppercase">DE-ANONYMIZATION</span>
</div>
<h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 leading-[1.1]">Identify invisible traffic.</h3>
<p className="text-gray-400 leading-relaxed text-base lg:text-lg font-light border-l border-white/10 pl-6">We
              identify up to 20% of anonymous visitors from their first click using probabilistic matching, giving you
              insights before they ever add to cart.</p>
</div>
<div className="hidden lg:flex lg:col-span-1 justify-center relative">
<div className="h-full w-px bg-white/10 relative">
<div className="absolute top-0 left-0 w-full bg-brand-orange grow-line"></div>
</div>
</div>
<div className="lg:col-span-6 slide-in-right">
<div className="h-[400px] bg-black/50 border border-white/10 rounded-xl relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-64 h-80 bg-[#0A0A0A] border border-white/10 rounded-xl p-6 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-gray-800 mb-6 border border-brand-orange/50"></div>
<div className="w-full space-y-3 font-mono text-xs">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-gray-500">Device</span><span className="text-white">iPhone 14</span></div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-gray-500">Location</span><span className="text-white">London, UK</span></div>
<div className="flex justify-between">
<span className="text-gray-500">Intent</span><span className="text-brand-orange">High Value</span></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="process-step grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 group mb-24 lg:mb-32 relative">
<div className="lg:col-span-5 flex flex-col justify-center slide-in-left">
<div className="flex items-center gap-4 mb-6">
<span className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-xl font-mono text-brand-orange shadow-[0_0_15px_rgba(255,102,0,0.1)]">02</span>
<span className="text-brand-orange font-mono text-xs tracking-widest uppercase">PREDICTIVE_VECTORS</span>
</div>
<h3 className="text-3xl lg:text-5xl font-serif text-white mb-6 leading-[1.1]">Analyze behavior instantly.</h3>
<p className="text-gray-400 leading-relaxed text-base lg:text-lg font-light border-l border-white/10 pl-6">Our
              transformers analyze 384 data points per second to calculate purchase probability in real-time.</p>
</div>
<div className="hidden lg:flex lg:col-span-1 justify-center relative">
<div className="h-full w-px bg-white/10 relative">
<div className="absolute top-0 left-0 w-full bg-brand-orange grow-line"></div>
</div>
</div>
<div className="lg:col-span-6 slide-in-right">
<div className="h-[400px] bg-black/50 border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center">
<div className="text-center">
<div className="text-6xl font-bold text-white mb-2">94.2%</div>
<div className="text-brand-orange font-mono uppercase text-xs tracking-widest">Purchase Probability</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 md:py-32 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none">
</div>
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
<div className="text-center mb-20">
<span className="text-brand-orange font-mono text-xs tracking-widest mb-4 block">/// PLANS &amp; PRICING</span>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-[1.1] tracking-tight">Stop burning
            money.<br/><span className="italic text-gray-500">Start scaling it.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

<div className="pricing-card relative rounded-3xl border border-white/10 bg-black p-8 md:p-10 group overflow-hidden">
<div className="spotlight pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
</div>
<div className="relative z-20">
<h3 className="text-lg font-medium tracking-wide mb-2 text-gray-400">Growth</h3>
<p className="text-sm text-gray-500 mb-8">For emerging brands ready to automate.</p>
<div className="mb-8">
<span className="text-5xl font-serif text-white">$99</span><span className="text-lg text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-10 text-sm text-gray-300">
<li className="flex gap-3"><i className="ph-bold ph-check text-brand-orange"></i> Up to $10k/mo Spend</li>
<li className="flex gap-3"><i className="ph-bold ph-check text-brand-orange"></i> Meta &amp; Google Integration</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold text-sm">Get Started</button>
</div>
</div>

<div className="pricing-card relative rounded-3xl border border-brand-orange/30 bg-[#080808] p-8 md:p-10 group overflow-hidden">
<div className="spotlight pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
</div>
<div className="relative z-20">
<div className="flex justify-between items-start">
<h3 className="text-lg font-medium tracking-wide mb-2 text-white">Scale</h3>
<span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</span>
</div>
<p className="text-sm text-gray-500 mb-8">For dominators scaling to 8-figures.</p>
<div className="mb-8">
<span className="text-5xl font-serif text-white">$299</span><span className="text-lg text-gray-500">/mo</span>
</div>
<ul className="space-y-4 mb-10 text-sm text-gray-300">
<li className="flex gap-3"><i className="ph-bold ph-check text-brand-orange"></i> Up to $100k/mo Spend</li>
<li className="flex gap-3"><i className="ph-bold ph-check text-brand-orange"></i> All Channels (TikTok)</li>
</ul>
<button className="w-full py-4 rounded-xl bg-brand-orange text-black hover:bg-[#ff8534] transition-all font-bold text-sm shadow-[0_0_20px_rgba(255,102,0,0.3)]">Start Free Trial</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black py-16 md:py-24" x-data="{ activeTab: 'CROs' }">
<div className="max-w-7xl mx-auto px-5 md:px-6">
<div className="mb-12">
<span className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2 block">■ Actionable intelligence</span>
<h2 className="text-3xl md:text-5xl font-serif text-white max-w-2xl mb-8 leading-tight">Solaris delivers
            transformative results.</h2>
<div className="flex space-x-8 border-b border-white/10 overflow-x-auto hide-scrollbar pb-1">
<button :className="activeTab === 'CROs' ? 'text-white' : 'text-gray-500'" @click="activeTab = 'CROs'" className="pb-4 text-sm font-medium transition-colors relative">CROs <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" x-show="activeTab === 'CROs'"></div></button>
<button :className="activeTab === 'Founders' ? 'text-white' : 'text-gray-500'" @click="activeTab = 'Founders'" className="pb-4 text-sm font-medium transition-colors relative">Founders <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" x-show="activeTab === 'Founders'"></div></button>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden bg-gray-900 min-h-[400px]">

<div className="absolute inset-0" x-show="activeTab === 'CROs'" x-transition.opacity.duration.500ms="">
<img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
<div className="relative z-10 p-6 md:p-12 h-full flex flex-col md:flex-row items-center justify-between gap-12">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:max-w-xl order-2 md:order-1">
<div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div className="text-brand-orange text-3xl font-bold mb-1">43%</div>
<div className="text-[10px] uppercase text-gray-400">Cart recovery lift</div>
</div>
<div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div className="text-brand-orange text-3xl font-bold mb-1">67%</div>
<div className="text-[10px] uppercase text-gray-400">Mobile conversion</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 w-full md:max-w-sm ml-auto order-1 md:order-2">
<p className="text-xl md:text-2xl font-serif text-white/90 mb-6 italic">"Solaris found revenue we didn't
                  even know we were losing."</p>
<div className="font-bold text-white">Alec Paterson</div>
<div className="text-xs text-gray-400">Director, Dottines UK</div>
</div>
</div>
</div>

<div className="absolute inset-0" style={{display: 'none'}} x-show="activeTab === 'Founders'" x-transition.opacity.duration.500ms="">
<img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
<div className="relative z-10 p-6 md:p-12 h-full flex flex-col md:flex-row items-center justify-between gap-12">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:max-w-xl order-2 md:order-1">
<div className="bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
<div className="text-brand-orange text-3xl font-bold mb-1">$12M</div>
<div className="text-[10px] uppercase text-gray-400">Run-rate achieved</div>
</div>
</div>
<div className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 w-full md:max-w-sm ml-auto order-1 md:order-2">
<p className="text-xl md:text-2xl font-serif text-white/90 mb-6 italic">"We scaled from $1M to $12M without
                  hiring a media buyer."</p>
<div className="font-bold text-white">Michael Chen</div>
<div className="text-xs text-gray-400">Founder, Aura</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black pt-32 relative overflow-hidden" x-data="{ openFaq: null }">
<div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">

<div className="mb-32">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div className="max-w-xl">
<span className="text-brand-orange font-mono text-xs tracking-widest mb-4 block">/// KNOWLEDGE BASE</span>
<h2 className="text-4xl md:text-5xl font-serif text-white leading-[1.1]">Common queries from
              <br/><span className="italic text-gray-500">growth leaders.</span></h2>
</div>
</div>
<div className="border-t border-white/10">
<div className="group border-b border-white/5">
<button @click="openFaq === 0 ? openFaq = null : openFaq = 0" className="w-full py-8 flex justify-between items-center text-left px-4">
<span :className="openFaq === 0 ? 'text-brand-orange' : 'text-white'" className="text-lg md:text-xl font-medium">How does the prediction model work?</span>
<span :className="openFaq === 0 ? 'bg-brand-orange text-black border-brand-orange' : 'border-white/10 text-gray-500'" className="w-8 h-8 flex items-center justify-center rounded-full border transition-all"><i :className="openFaq === 0 ? 'ph-minus' : 'ph-plus'" className="ph"></i></span>
</button>
<div x-collapse="" x-show="openFaq === 0">
<div className="pb-8 px-4 text-gray-400 max-w-2xl">Solaris uses a proprietary transformer model trained on
                over $4B of ad spend data.</div>
</div>
</div>
<div className="group border-b border-white/5">
<button @click="openFaq === 1 ? openFaq = null : openFaq = 1" className="w-full py-8 flex justify-between items-center text-left px-4">
<span :className="openFaq === 1 ? 'text-brand-orange' : 'text-white'" className="text-lg md:text-xl font-medium">Does this replace my agency?</span>
<span :className="openFaq === 1 ? 'bg-brand-orange text-black border-brand-orange' : 'border-white/10 text-gray-500'" className="w-8 h-8 flex items-center justify-center rounded-full border transition-all"><i :className="openFaq === 1 ? 'ph-minus' : 'ph-plus'" className="ph"></i></span>
</button>
<div x-collapse="" x-show="openFaq === 1">
<div className="pb-8 px-4 text-gray-400 max-w-2xl">It's designed to be a force multiplier. While Solaris can
                autonomously handle day-to-day bidding, strategic decisions remain yours.</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-24 border-b border-white/10">
<div className="lg:col-span-4">
<h2 className="text-2xl font-bold tracking-tighter text-white mb-6">Solaris
            <span className="font-serif italic font-light text-gray-500">Marketing</span></h2>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">The autonomous revenue engine for modern
            consumer brands.</p>
</div>
<div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-white font-medium mb-6">Product</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>Predictive Engine</li>
<li>Autonomous Agents</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-2 text-sm text-gray-400">
<li>About</li>
<li>Careers</li>
<li>Contact</li>
</ul>
</div>
</div>
</div>
<div className="py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
<span>© 2026 Solaris AI Inc.</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none flex justify-center opacity-[0.03] will-change-transform" id="footer-watermark">
<h1 className="text-[18vw] font-bold leading-[0.75] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-transparent">
        SOLARIS</h1>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-40 px-5 py-4 pb-6 bg-black/80 backdrop-blur-xl border-t border-white/10 md:hidden animate-fade-in-up">
<button className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF9E44] text-black font-bold text-lg py-3.5 rounded-full shadow-[0_0_20px_rgba(255,102,0,0.3)] active:scale-95 transition-transform">Start Free Trial</button>
</div>




    </>
  );
}
