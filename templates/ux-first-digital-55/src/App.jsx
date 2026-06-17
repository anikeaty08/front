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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight flex items-center gap-2 group" href="#">
<span className="w-8 h-8 bg-[#FD3B00] rounded-lg flex items-center justify-center text-white text-lg font-bold">C</span>
<span className="text-[#1A1717]">Craftora</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#FD3B00] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#FD3B00] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#FD3B00] transition-colors" href="#work">Portfolio</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#FD3B00] transition-colors" href="#process">About</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#1A1717] hover:bg-[#FD3B00] rounded-full transition-all duration-300" href="#contact">
                    Start a Project
                </a>

<button className="md:hidden text-[#1A1717] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8 z-10">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#1A1717] leading-[1.1] mb-8">
                    UX-first digital products that move <span className="text-[#FD3B00]">businesses forward.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl leading-relaxed mb-10 font-light">
                    We craft strategic UX research, scalable product design, MVPs, and no-code websites that turn complex ideas into clarity.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#FD3B00] rounded-full hover:bg-red-600 transition-all shadow-lg shadow-orange-500/20 group" href="#contact">
                        Start a Project
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#1A1717] bg-white border border-slate-200 rounded-full hover:border-slate-400 transition-all" href="#work">
                        View Work
                    </a>
</div>
</div>

<div className="lg:col-span-4 relative h-full flex items-center justify-center lg:justify-end opacity-80">
<div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-[#FD3B00]/10 to-slate-100 rounded-full blur-3xl animate-pulse"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-sm border border-slate-100 bg-white/50 backdrop-blur-sm p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
</div>
<div className="space-y-4">
<div className="h-8 bg-slate-100 rounded w-3/4"></div>
<div className="h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="h-8 bg-[#FD3B00] rounded w-full"></div>
<div className="h-8 bg-slate-100 rounded w-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-4 md:px-6 mb-24">
<div className="max-w-[1400px] mx-auto relative rounded-3xl overflow-hidden aspect-video md:aspect-[21/9] bg-[#1A1717] group cursor-pointer">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-20 transition-opacity">

<div className="w-1/2 h-1/2 bg-gradient-to-r from-[#FD3B00] to-purple-600 rounded-full blur-[100px] animate-pulse"></div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
<iconify-icon className="text-6xl md:text-8xl font-light mb-4 group-hover:scale-110 transition-transform duration-300" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-sm md:text-base font-medium tracking-widest uppercase opacity-80">Design in Motion</span>
</div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white/50 text-xs md:text-sm">
                Agency Reel 2024 ©
            </div>
</div>
</section>

<section className="mb-24 px-6">
<div className="max-w-7xl mx-auto border-y border-slate-100 py-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-slate-500 font-medium text-sm whitespace-nowrap">Trusted by innovators in:</p>
<div className="flex flex-wrap justify-center md:justify-end gap-3">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wide">EdTech</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wide">Healthcare</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wide">AI SaaS</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wide">FinTech</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-600 uppercase tracking-wide">Web3</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="services">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1717] mb-4">How we add value.</h2>
<p className="text-slate-500 text-lg">Comprehensive design solutions from idea to launch.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FD3B00] flex items-center justify-center mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">UX Research &amp; Strategy</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Data-driven insights to validate assumptions and understand user needs before pixel perfection.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">UX/UI Design</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">World-class interfaces for web and mobile applications that balance aesthetics with functionality.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">MVP Design</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Rapid prototyping and lean design systems to get startups to market and funding faster.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Branding</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Modern visual identities that communicate trust, innovation, and character.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Framer Development</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Pixel-perfect no-code development for marketing sites that are easy to manage.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">UX Audit</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Identify friction points and opportunities in your existing product with a deep dive audit.</p>
<div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-[#1A1717] group-hover:border-[#1A1717] group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-semibold text-[#1A1717] hover:text-[#FD3B00] border-b border-black/10 hover:border-[#FD3B00] pb-1 transition-all" href="#">Explore all services</a>
</div>
</section>

<section className="py-10 border-y border-slate-100 bg-white overflow-hidden mb-32">
<div className="flex items-center gap-4 mb-8 px-6 max-w-7xl mx-auto">
<div className="w-2 h-2 rounded-full bg-[#EA4C89]"></div>
<span className="text-xs font-bold tracking-widest uppercase text-slate-400">Design Explorations</span>
</div>
<div className="relative w-full">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex whitespace-nowrap animate-scroll w-max gap-6 hover:pause">

<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-72 h-56 bg-slate-100 rounded-xl overflow-hidden relative group">
<img alt="UI Shot" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1A1717] mb-2">Selected Work</h2>
<p className="text-slate-500">Case studies in product transformation.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-semibold hover:text-[#FD3B00] transition-colors group" href="#">
                View All Projects
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="FinTech Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-semibold text-[#1A1717] mb-1">Nova Financial</h3>
<p className="text-slate-500 text-sm">SaaS Product Design • Design System</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Medical App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-semibold text-[#1A1717] mb-1">Vital Health</h3>
<p className="text-slate-500 text-sm">Mobile App UX • Healthcare</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative">
<img alt="Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="text-2xl font-semibold text-[#1A1717] mb-1">Lumina Edu</h3>
<p className="text-slate-500 text-sm">EdTech Platform • Web App</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>

<div className="md:hidden mt-8">
<a className="inline-flex items-center text-sm font-semibold hover:text-[#FD3B00] transition-colors" href="#">
                    View All Projects
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-[#1A1717] py-32 text-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-20 text-center md:text-left">Our Process.</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">

<div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/20 z-0"></div>

<div className="relative z-10 group">
<div className="w-12 h-12 rounded-full bg-[#1A1717] border border-white/20 flex items-center justify-center text-sm font-mono mb-6 group-hover:border-[#FD3B00] group-hover:bg-[#FD3B00] transition-colors duration-300">01</div>
<h3 className="text-xl font-semibold mb-2">Discover</h3>
<p className="text-slate-400 text-sm leading-relaxed">Workshops and audits to uncover the core user problem.</p>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 rounded-full bg-[#1A1717] border border-white/20 flex items-center justify-center text-sm font-mono mb-6 group-hover:border-[#FD3B00] group-hover:bg-[#FD3B00] transition-colors duration-300">02</div>
<h3 className="text-xl font-semibold mb-2">Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Iterative prototyping focused on usability and flow.</p>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 rounded-full bg-[#1A1717] border border-white/20 flex items-center justify-center text-sm font-mono mb-6 group-hover:border-[#FD3B00] group-hover:bg-[#FD3B00] transition-colors duration-300">03</div>
<h3 className="text-xl font-semibold mb-2">Validate</h3>
<p className="text-slate-400 text-sm leading-relaxed">Testing with real users to ensure the solution works.</p>
</div>

<div className="relative z-10 group">
<div className="w-12 h-12 rounded-full bg-[#1A1717] border border-white/20 flex items-center justify-center text-sm font-mono mb-6 group-hover:border-[#FD3B00] group-hover:bg-[#FD3B00] transition-colors duration-300">04</div>
<h3 className="text-xl font-semibold mb-2">Launch</h3>
<p className="text-slate-400 text-sm leading-relaxed">Handing over pixel-perfect assets and Framer builds.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<p className="text-lg text-[#1A1717] font-medium leading-relaxed mb-6">"Craftora didn't just design our app; they helped us define our entire product strategy. The investment paid off 10x in our seed round."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Founder, FinFlow</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<p className="text-lg text-[#1A1717] font-medium leading-relaxed mb-6">"The speed and quality of delivery was unmatched. They understand how to move fast without breaking the user experience."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold">David Chen</p>
<p className="text-xs text-slate-500">CTO, HealthPlus</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<p className="text-lg text-[#1A1717] font-medium leading-relaxed mb-6">"Finally, an agency that speaks 'business' as fluently as they speak 'design'. Our conversion rate increased by 40%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200"></div>
<div>
<p className="text-sm font-semibold">Elena Rodriguez</p>
<p className="text-xs text-slate-500">VP Marketing, EduCorp</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32">
<h2 className="text-3xl font-semibold mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 open:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-[#1A1717]">
                    What makes Craftora different?
                    <span className="transform group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                    We aren't just decorators. We are product thinkers who use design to solve business problems. Our background in both UX research and no-code development means we build things that work, not just look pretty.
                </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 open:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-[#1A1717]">
                    Do you work with early-stage startups?
                    <span className="transform group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                    Yes, we specialize in MVP design. We help founders take their loose concepts and turn them into tangible, clickable prototypes that are ready for investor pitches and development.
                </div>
</details>

<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-300 open:border-slate-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-lg font-medium text-[#1A1717]">
                    Do you provide development?
                    <span className="transform group-open:rotate-180 transition-transform duration-300">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-500 leading-relaxed text-sm">
                    For marketing websites, we develop exclusively in Framer. For complex web apps (SaaS), we focus on the Design &amp; Handoff phase, providing developers with pixel-perfect files and documentation.
                </div>
</details>
</div>
</section>

<section className="px-6 pb-20" id="contact">
<div className="max-w-7xl mx-auto bg-[#1A1717] rounded-[2.5rem] p-12 md:p-24 text-center md:text-left relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#FD3B00] rounded-full blur-[120px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                        Have a product idea or <br/> <span className="text-[#FD3B00]">UX problem?</span>
</h2>
<p className="text-slate-400 text-lg mb-10 max-w-md">Let's design something meaningful together. Schedule a free discovery call to discuss your goals.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-[#FD3B00] text-white font-semibold rounded-full hover:bg-red-600 transition-all shadow-lg shadow-orange-500/20">
                            Start a Project
                        </button>
<button className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
                            Book Discovery Call
                        </button>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FD3B00] transition-colors" placeholder="Name" type="text"/>
<input className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FD3B00] transition-colors" placeholder="Email" type="email"/>
</div>
<select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white/80 focus:outline-none focus:border-[#FD3B00] transition-colors appearance-none">
<option className="bg-[#1A1717]">Project Type: UX/UI Design</option>
<option className="bg-[#1A1717]">Project Type: MVP Design</option>
<option className="bg-[#1A1717]">Project Type: Branding</option>
<option className="bg-[#1A1717]">Project Type: Framer Site</option>
</select>
<textarea className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#FD3B00] transition-colors resize-none" placeholder="Tell us about your project..." rows="3"></textarea>
<button className="w-full py-3 bg-white text-[#1A1717] font-semibold rounded-xl hover:bg-slate-200 transition-colors" type="button">Send Message</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-bold tracking-tight text-[#1A1717] mb-4 block" href="#">Craftora</a>
<p className="text-slate-500 text-sm">Strategic design for ambitious companies.</p>
</div>
<div>
<h4 className="font-semibold text-[#1A1717] mb-4">Sitemap</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">Home</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">Work</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">About</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A1717] mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">UX Research</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">UI Design</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">MVP Development</a></li>
<li><a className="hover:text-[#FD3B00] transition-colors" href="#">Framer Sites</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#1A1717] mb-4">Socials</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#FD3B00] transition-colors" href="#">
<iconify-icon icon="solar:basketball-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#FD3B00] transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#FD3B00] transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400">
<p>© 2024 Craftora. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#1A1717]" href="#">Privacy Policy</a>
<a className="hover:text-[#1A1717]" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
