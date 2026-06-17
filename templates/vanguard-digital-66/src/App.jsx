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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple Intersection Observer for scroll animations (replacing external complex plugins)
        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
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
      

<header :className="{ 'bg-[#050505]/80 backdrop-blur-md border-zinc-800/50 py-4': scrolled, 'py-8': !scrolled }" className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
<a className="text-xl font-semibold uppercase tracking-tight text-white hover:opacity-70 transition-opacity" href="#">
                Vanguard©
            </a>
<nav className="hidden md:flex items-center gap-12">
<div className="flex gap-8 text-sm font-medium tracking-tight text-zinc-300">
<a className="hover:text-white transition-colors relative group" href="#about">
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#process">
                        Process
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-white transition-colors relative group" href="#work">
                        Work
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
</nav>
<div className="flex items-center gap-4">
<a className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-medium tracking-tight text-white bg-zinc-900 border border-zinc-700 rounded-full overflow-hidden transition-all hover:border-red-600" href="#contact">
<span className="relative z-10 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:animate-ping"></div>
                        Start Project
                    </span>
<div className="absolute inset-0 h-full w-full bg-red-700 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
</a>
</div>
</div>
</header>

<section className="relative min-h-screen pt-32 pb-12 flex flex-col justify-between overflow-hidden bg-[#050505]">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_var(--tw-gradient-stops))] from-red-800/80 via-red-950/40 to-[#050505] z-0 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-700/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse duration-1000"></div>
<div className="md:px-12 flex-1 flex flex-col w-full max-w-[1600px] z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-12 md:mt-24 reveal active">
<div className="md:col-span-4 lg:col-span-3 text-lg font-medium text-zinc-200 leading-relaxed">
                    We partner with ambitious brands to create digital experiences that command attention, drive conversion, and redefine industry standards.
                </div>
<div className="md:col-start-10 md:col-span-3 flex flex-col gap-2 text-right text-sm font-medium tracking-tight text-zinc-400">
<span className="hover:text-white transition-colors cursor-default">Digital Strategy</span>
<span className="hover:text-white transition-colors cursor-default">Creative Direction</span>
<span className="hover:text-white transition-colors cursor-default">Web Development</span>
<span className="hover:text-white transition-colors cursor-default">Motion Design</span>
</div>
</div>

<div className="mt-auto pt-24 relative reveal active">
<h1 className="text-7xl md:text-8xl lg:text-[11vw] font-semibold uppercase tracking-tight text-white leading-[0.8] mb-0 relative inline-block">
                    VANGUARD
                    <sup className="text-2xl md:text-5xl lg:text-[4vw] absolute top-4 -right-8 md:-right-12 lg:-right-16 text-red-500">®</sup>
</h1>

<div className="absolute right-0 bottom-4 md:bottom-12 w-32 h-20 md:w-64 md:h-40 overflow-hidden border border-zinc-800/50 hidden sm:block group">
<img alt="Abstract 3D" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9825b139-6b4b-46b4-acc3-5942e0ba8b7a_800w.png"/>
<div className="absolute bottom-0 left-0 w-full flex gap-1 p-2">
<div className="h-0.5 bg-white/50 flex-1"></div>
<div className="h-0.5 bg-white/20 flex-1"></div>
<div className="h-0.5 bg-white/20 flex-1"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#050505] border-t border-zinc-900 relative" id="about">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-3 reveal active">
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-tight uppercase text-zinc-400">
<span className="w-1.5 h-1.5 rounded-full border border-zinc-400"></span>
                    About Us
                </div>
</div>
<div className="md:col-span-9 lg:col-span-8 reveal active">
<h2 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase leading-[1.1] text-zinc-200">
                    We are a digital studio focused on creating user-centered websites that are functional, accessible, and visually striking. From landing pages to complex platforms, we turn ideas into immersive online experiences.
                </h2>
</div>
</div>

<div className="mt-24 max-w-[1600px] mx-auto px-6 md:px-12 reveal active">
<div className="flex flex-wrap items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<i className="w-8 h-8 md:w-10 md:h-10 text-white hover:text-red-500 hover:scale-110 transition-all duration-300" data-lucide="figma" strokeWidth="1.5"></i>
<i className="w-8 h-8 md:w-10 md:h-10 text-white hover:text-red-500 hover:scale-110 transition-all duration-300" data-lucide="framer" strokeWidth="1.5"></i>
<i className="w-8 h-8 md:w-10 md:h-10 text-white hover:text-red-500 hover:scale-110 transition-all duration-300" data-lucide="terminal" strokeWidth="1.5"></i>
<i className="w-8 h-8 md:w-10 md:h-10 text-white hover:text-red-500 hover:scale-110 transition-all duration-300" data-lucide="monitor-smartphone" strokeWidth="1.5"></i>
<i className="w-8 h-8 md:w-10 md:h-10 text-white hover:text-red-500 hover:scale-110 transition-all duration-300" data-lucide="layers" strokeWidth="1.5"></i>
<span className="text-sm font-semibold tracking-tight uppercase text-zinc-600">Modern Tech Stack</span>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#050505] relative border-t border-zinc-900" id="process">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 md:mb-0">
<div className="md:col-span-5 lg:col-span-4 reveal active">
<h2 className="text-5xl md:text-7xl font-semibold uppercase tracking-tight text-white leading-none">
                        Work<br/>Process
                    </h2>
</div>
<div className="md:col-start-8 md:col-span-5 lg:col-start-9 lg:col-span-4 flex items-center reveal text-lg text-zinc-400 active">
                    See how our structured approach transforms your vision into a custom digital solution that delivers measurable impact.
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 mt-12 md:mt-[-4rem]">

<div className="md:col-span-5 lg:col-span-4 border border-zinc-800 bg-[#0a0a0a] p-8 md:p-12 group hover:border-red-900 transition-colors duration-500 reveal active">
<div className="w-10 h-10 bg-white text-[#050505] flex items-center justify-center font-semibold text-base mb-12 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        01
                    </div>
<h3 className="text-xl font-semibold uppercase tracking-tight text-white mb-4">Research &amp; Define</h3>
<p className="text-lg text-zinc-500">We begin by diving deep into your brand, understanding the core problem, user needs, and defining business goals from start to finish.</p>
</div>

<div className="hidden md:block md:col-span-2 lg:col-span-4"></div>

<div className="md:col-span-5 lg:col-span-4 border border-zinc-800 bg-[#0a0a0a] p-8 md:p-12 group hover:border-red-900 transition-colors duration-500 reveal md:mt-24 active">
<div className="w-10 h-10 bg-white text-[#050505] flex items-center justify-center font-semibold text-base mb-12 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        03
                    </div>
<h3 className="text-xl font-semibold uppercase tracking-tight text-white mb-4">Build &amp; Launch</h3>
<p className="text-lg text-zinc-500">Translating designs into robust code. We build responsive, performant websites, conduct rigorous testing, and deploy smoothly.</p>
</div>

<div className="hidden md:block md:col-span-3 lg:col-span-4"></div>

<div className="md:col-span-6 lg:col-span-4 border border-zinc-800 border-t-0 md:border-t md:-mt-[1px] md:-ml-[1px] bg-[#0a0a0a] p-8 md:p-12 group hover:border-red-900 transition-colors duration-500 reveal relative z-10 active">
<div className="w-10 h-10 bg-white text-[#050505] flex items-center justify-center font-semibold text-base mb-12 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                        02
                    </div>
<h3 className="text-xl font-semibold uppercase tracking-tight text-white mb-4">Ideate &amp; Design</h3>
<p className="text-lg text-zinc-500">Creating wireframes and high-fidelity interfaces that bring clarity, establish visual direction, and ensure perfect usability.</p>
</div>
</div>
</div>
</section>

<section className="md:py-40 overflow-hidden bg-[#050505] border-zinc-900 border-t pt-24 pb-24" id="work" x-data="{ activeImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2794&amp;auto=format&amp;fit=crop' }">
<div className="max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1 flex flex-col gap-0 relative z-10">
<div className="mb-12 inline-flex items-center gap-2 text-xs font-semibold tracking-tight uppercase text-zinc-400 reveal active">
<span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
                    Selected Cases
                </div>

<div className="flex flex-col border-t border-zinc-800 reveal active">
<a @mouseenter="activeImage = 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&amp;w=2794&amp;auto=format&amp;fit=crop'" className="group py-8 border-b border-zinc-800 flex items-end justify-between hover:px-6 transition-all duration-500 ease-out" href="#">
<div className="flex flex-col gap-2">
<span className="text-sm font-semibold tracking-tight text-zinc-500 group-hover:text-red-500 transition-colors">01 — E-Commerce</span>
<h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">Aura Beauty</h3>
</div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a @mouseenter="activeImage = 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" className="group py-8 border-b border-zinc-800 flex items-end justify-between hover:px-6 transition-all duration-500 ease-out" href="#">
<div className="flex flex-col gap-2">
<span className="text-sm font-semibold tracking-tight text-zinc-500 group-hover:text-red-500 transition-colors">02 — Corporate</span>
<h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">Nexis Tech</h3>
</div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<a @mouseenter="activeImage = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" className="group py-8 border-b border-zinc-800 flex items-end justify-between hover:px-6 transition-all duration-500 ease-out" href="#">
<div className="flex flex-col gap-2">
<span className="text-sm font-semibold tracking-tight text-zinc-500 group-hover:text-red-500 transition-colors">03 — Web App</span>
<h3 className="text-4xl md:text-5xl font-semibold uppercase tracking-tight text-zinc-300 group-hover:text-white transition-colors">Sync Dashboard</h3>
</div>
<i className="w-8 h-8 text-zinc-600 group-hover:text-white group-hover:rotate-45 transition-all duration-300" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="order-1 lg:order-2 h-[400px] lg:h-[700px] w-full relative reveal overflow-hidden bg-zinc-900 border border-zinc-800 active">
<img :src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="Project Preview" className="hover:mix-blend-normal hover:scale-105 transition-all duration-1000 ease-in-out opacity-80 mix-blend-luminosity w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"/>
</div>
</div>
</section>

<section className="py-24 md:py-40 bg-[#0a0a0a] border-t border-zinc-900">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="text-center mb-24 reveal">
<h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tight text-white mb-6">Investment</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Transparent pricing for premium quality. Select the tier that aligns with your business objectives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-b border-zinc-800">

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col group hover:bg-[#0f0f0f] transition-colors duration-500 reveal">
<div className="mb-12">
<span className="text-sm font-semibold tracking-tight uppercase text-zinc-500 block mb-4">Landing Page</span>
<div className="text-4xl font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">From $2k</div>
</div>
<ul className="flex flex-col gap-4 text-lg text-zinc-400 flex-1 mb-12">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Unique Visual Concept</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Responsive Design</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Micro-animations</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Basic SEO Setup</li>
</ul>
<a className="w-full text-center py-4 text-sm font-medium tracking-tight uppercase border border-zinc-700 text-white hover:bg-white hover:text-black transition-colors duration-300" href="#contact">Inquire</a>
</div>

<div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800 flex flex-col group hover:bg-[#0f0f0f] transition-colors duration-500 relative reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-red-600"></div>
<div className="mb-12 relative z-10">
<span className="text-sm font-semibold tracking-tight uppercase text-zinc-500 block mb-4 flex justify-between items-center">Corporate Site <span className="text-[10px] bg-red-600/10 text-red-500 px-2 py-1 rounded-full border border-red-600/20">Popular</span></span>
<div className="text-4xl font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">From $5k</div>
</div>
<ul className="flex flex-col gap-4 text-lg text-zinc-400 flex-1 mb-12 relative z-10">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Multi-page Architecture</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Custom CMS Integration</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Advanced Motion Design</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Third-party API Connect</li>
</ul>
<a className="w-full text-center py-4 text-sm font-medium tracking-tight uppercase bg-white text-black hover:bg-zinc-200 transition-colors duration-300 relative z-10" href="#contact">Inquire</a>
</div>

<div className="p-8 md:p-12 flex flex-col group hover:bg-[#0f0f0f] transition-colors duration-500 reveal">
<div className="mb-12">
<span className="text-sm font-semibold tracking-tight uppercase text-zinc-500 block mb-4">E-Commerce / Custom App</span>
<div className="text-4xl font-semibold tracking-tight text-white group-hover:text-red-500 transition-colors">Custom</div>
</div>
<ul className="flex flex-col gap-4 text-lg text-zinc-400 flex-1 mb-12">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Complex Logic &amp; Routing</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Payment Gateways</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> User Dashboards</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-red-600 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i> Scalable Infrastructure</li>
</ul>
<a className="w-full text-center py-4 text-sm font-medium tracking-tight uppercase border border-zinc-700 text-white hover:bg-white hover:text-black transition-colors duration-300" href="#contact">Discuss</a>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-red-900 overflow-hidden relative border-t border-red-800">
<div className="absolute inset-0 bg-[#050505] opacity-50 mix-blend-multiply"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10 text-center reveal">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold uppercase tracking-tight text-white leading-none mix-blend-overlay opacity-90">
                Design is not just what it looks like.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Design is how it works.</span>
</h2>
</div>
</section>

<section className="py-24 md:py-40 bg-[#050505] border-t border-zinc-900">
<div className="max-w-[1000px] mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tight text-white mb-16 reveal">Common Questions</h2>
<div className="flex flex-col border-t border-zinc-800 reveal">

<div className="border-b border-zinc-800" x-data="{ expanded: false }">
<button @click="expanded = !expanded" className="w-full py-8 flex items-center justify-between text-left group">
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">How long does a project typically take?</span>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-700 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
<i :className="expanded ? 'rotate-45' : ''" className="w-4 h-4 text-white transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</button>
<div style={{display: 'none'}} x-collapse.duration.300ms="" x-show="expanded">
<p className="pb-8 text-lg text-zinc-500 pr-12">A standard landing page takes 2-3 weeks. A corporate multi-page site takes 4-6 weeks. Complex web applications are quoted individually based on scope and requirements.</p>
</div>
</div>

<div className="border-b border-zinc-800" x-data="{ expanded: false }">
<button @click="expanded = !expanded" className="w-full py-8 flex items-center justify-between text-left group">
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">Do you provide ongoing support?</span>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-700 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
<i :className="expanded ? 'rotate-45' : ''" className="w-4 h-4 text-white transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</button>
<div style={{display: 'none'}} x-collapse.duration.300ms="" x-show="expanded">
<p className="pb-8 text-lg text-zinc-500 pr-12">Yes, we offer retainer packages for ongoing maintenance, content updates, design iterations, and technical support to ensure your product scales smoothly.</p>
</div>
</div>

<div className="border-b border-zinc-800" x-data="{ expanded: false }">
<button @click="expanded = !expanded" className="w-full py-8 flex items-center justify-between text-left group">
<span className="text-xl md:text-2xl font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors">What is your design approach?</span>
<div className="w-8 h-8 flex items-center justify-center rounded-full border border-zinc-700 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
<i :className="expanded ? 'rotate-45' : ''" className="w-4 h-4 text-white transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</button>
<div style={{display: 'none'}} x-collapse.duration.300ms="" x-show="expanded">
<p className="pb-8 text-lg text-zinc-500 pr-12">We focus on minimalism, stark typography, and micro-interactions. Our goal is to create premium, memorable experiences that differentiate your brand from templates.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-zinc-900 pt-24 md:pt-40 pb-12 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-red-800/10 blur-[100px] rounded-t-full pointer-events-none"></div>
<div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">

<div className="reveal">
<h2 className="text-6xl md:text-8xl font-semibold uppercase tracking-tight text-white leading-none mb-8">
                        Let's build<br/>a legacy.
                    </h2>
<p className="text-2xl text-zinc-400 mb-12 max-w-md font-medium">Ready to stand out? Let's discuss your project and create something extraordinary together.</p>
<a className="inline-flex items-center gap-4 text-2xl font-medium tracking-tight text-white group" href="mailto:hello@vanguard.studio">
<div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="relative">
                            hello@vanguard.studio
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 transition-all duration-300 group-hover:w-full"></span>
</span>
</a>
</div>

<div className="reveal bg-[#0a0a0a] p-8 md:p-12 border border-zinc-800">
<form className="flex flex-col gap-8">
<div className="flex flex-col gap-2 relative group">
<label className="text-xs font-semibold uppercase tracking-tight text-zinc-500" htmlFor="name">Full Name</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white focus:outline-none focus:border-red-600 transition-colors peer placeholder-zinc-700" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2 relative group">
<label className="text-xs font-semibold uppercase tracking-tight text-zinc-500" htmlFor="email">Email Address</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white focus:outline-none focus:border-red-600 transition-colors peer placeholder-zinc-700" id="email" placeholder="john@company.com" type="email"/>
</div>
<div className="flex flex-col gap-2 relative group">
<label className="text-xs font-semibold uppercase tracking-tight text-zinc-500" htmlFor="budget">Project Budget</label>
<select className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white focus:outline-none focus:border-red-600 transition-colors appearance-none cursor-pointer" id="budget">
<option className="bg-zinc-900" disabled="" selected="" value="">$2k - $5k</option>
<option className="bg-zinc-900" value="5k">$5k - $10k</option>
<option className="bg-zinc-900" value="10k">$10k+</option>
</select>
<i className="absolute right-0 bottom-4 w-5 h-5 text-zinc-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-2 relative group">
<label className="text-xs font-semibold uppercase tracking-tight text-zinc-500" htmlFor="message">Project Details</label>
<textarea className="w-full bg-transparent border-b border-zinc-700 py-3 text-lg text-white focus:outline-none focus:border-red-600 transition-colors resize-none placeholder-zinc-700" id="message" placeholder="Tell us about your vision..." rows="3"></textarea>
</div>
<button className="mt-4 px-8 py-4 bg-white text-black text-sm font-semibold tracking-tight uppercase hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                            Send Request
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-800 pt-8 mt-12 gap-6 text-sm font-medium tracking-tight text-zinc-500 reveal">
<p>© 2024 Vanguard Studio. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter (X)</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<button @click="window.scrollTo({top: 0, behavior: 'smooth'})" className="flex items-center gap-2 hover:text-white transition-colors">
                    Back to top
                    <i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="1.5"></i>
</button>
</div>
<h3 className="text-[12vw] font-semibold uppercase tracking-tighter text-zinc-900/50 leading-none mt-12 text-center pointer-events-none select-none">
                VANGUARD
            </h3>
</div>
</footer>




    </>
  );
}
