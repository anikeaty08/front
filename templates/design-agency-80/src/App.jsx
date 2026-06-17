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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-1 group" href="#">
                Reovlp
                <span className="w-2 h-2 rounded-full bg-orange-600 mt-1 group-hover:scale-125 transition-transform duration-300"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-orange-600 transition-colors" href="#services">Expertise</a>
<a className="hover:text-orange-600 transition-colors" href="#work">Work</a>
<a className="hover:text-orange-600 transition-colors" href="#process">Process</a>
<a className="hover:text-orange-600 transition-colors" href="#about">Studio</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-neutral-900 rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-sm hover:shadow-orange-200" href="#contact">
                Start Project
            </a>

<button className="md:hidden text-neutral-900 p-1">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-neutral-50 rounded-full blur-3xl opacity-80"></div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
            Accepting new projects for Q4
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-balance mb-8 max-w-5xl">
            We craft digital<br/>
<span className="text-neutral-400">experiences that</span><br/>
            define the future.
        </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed mb-10 text-balance font-light">
            Reovlp is a strategic design agency building distinct identities, immersive websites, and products for ambitious startups and tech brands.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-orange-600 rounded-xl hover:bg-orange-700 transition-all duration-300 shadow-lg shadow-orange-600/20 group" href="#contact">
                Start Your Project
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-neutral-900 bg-white border border-neutral-200 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300" href="#work">
                View Case Studies
            </a>
</div>
</section>

<div className="w-full border-y border-neutral-100 overflow-hidden py-8 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 items-center">

<span className="text-lg font-semibold tracking-tight">ACME CORP</span>
<span className="text-lg font-semibold tracking-tight">KINETIC</span>
<span className="text-lg font-semibold tracking-tight">NEXUS AI</span>
<span className="text-lg font-semibold tracking-tight">VERIDIAN</span>
<span className="text-lg font-semibold tracking-tight">STRATOS</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-sm font-semibold tracking-widest text-orange-600 uppercase mb-4">About Studio</h2>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
                    Bridging the gap between <span className="text-neutral-400">strategy</span> and <span className="text-orange-600">visual excellence</span>.
                </h3>
</div>
<div className="space-y-6 text-neutral-500 text-lg leading-relaxed font-light">
<p>
                    At Reovlp, we believe that design is not just about aesthetics; it's about solving problems and communicating values. We partner with visionaries to build brands that stand out in a crowded digital landscape.
                </p>
<p>
                    Our approach is rooted in simplicity and impact. We strip away the non-essential to reveal the core of your brand, delivering products that are intuitive, beautiful, and strategically sound.
                </p>
<div className="pt-4">
<a className="text-neutral-900 font-medium hover:text-orange-600 inline-flex items-center gap-2 transition-colors border-b border-transparent hover:border-orange-600 pb-0.5" href="#about">
                        Read our philosophy
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Our Expertise</h2>
<p className="text-neutral-500 max-w-md">Comprehensive design solutions tailored for growth.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border border-neutral-200 bg-white px-4 py-2 rounded-lg hover:border-orange-500 transition-colors" href="#contact">
                    View Pricing
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Brand Identity</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Logo design, visual systems, and brand guidelines that tell your unique story.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">UI/UX Design</h3>
<p className="text-neutral-500 leading-relaxed text-sm">User-centric interfaces for web and mobile applications that drive engagement.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Development</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Pixel-perfect Webflow and React development optimized for performance and SEO.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Product Design</h3>
<p className="text-neutral-500 leading-relaxed text-sm">End-to-end product thinking from MVP to scalable design systems.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-neutral-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight group-hover:text-orange-600 transition-colors">Creative Strategy</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Market analysis and creative direction to position your brand for success.</p>
</div>

<div className="group bg-orange-600 p-8 rounded-2xl flex flex-col justify-center items-start text-white hover:bg-orange-700 transition-all duration-300">
<h3 className="text-2xl font-semibold mb-2 tracking-tight">Need something else?</h3>
<p className="text-orange-100 mb-6 text-sm">Let's discuss your custom requirements.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-white/40 pb-1 hover:border-white transition-colors" href="#contact">
                        Get in Touch
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="work">
<div className="flex items-center justify-between mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">Selected Work</h2>
<div className="hidden md:block h-[1px] flex-1 bg-neutral-100 mx-8"></div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-orange-600 hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative mb-6">

<div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="w-2/3 h-2/3 bg-white shadow-xl rounded-lg opacity-80 rotate-3 group-hover:rotate-0 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/5 to-transparent"></div>
</div>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-neutral-800">Fintech</div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 group-hover:text-orange-600 transition-colors">Nova Finance App</h3>
<p className="text-neutral-500 text-sm">Product Design, UI/UX</p>
</div>
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-orange-600 transition-colors -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-white/20 group-hover:scale-125 transition-all duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-bl from-orange-500/20 to-transparent"></div>
</div>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-neutral-800">E-Commerce</div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 group-hover:text-orange-600 transition-colors">Lumina Fashion</h3>
<p className="text-neutral-500 text-sm">Branding, Web Development</p>
</div>
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-orange-600 transition-colors -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-orange-50 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="w-2/3 h-1/2 bg-white shadow-sm border border-orange-100 rounded group-hover:-translate-y-2 transition-all duration-500"></div>
</div>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-neutral-800">SaaS</div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 group-hover:text-orange-600 transition-colors">TaskFlow Dashboard</h3>
<p className="text-neutral-500 text-sm">UX Research, Interface Design</p>
</div>
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-orange-600 transition-colors -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] bg-neutral-100 rounded-2xl overflow-hidden relative mb-6">
<div className="absolute inset-0 bg-neutral-100 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<div className="text-neutral-200 text-9xl font-bold tracking-tighter select-none">Aa</div>
</div>
<div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-neutral-800">Typography</div>
</div>
<div className="flex justify-between items-end">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-1 group-hover:text-orange-600 transition-colors">Mono Type Foundry</h3>
<p className="text-neutral-500 text-sm">Visual Identity, Website</p>
</div>
<iconify-icon className="text-2xl text-neutral-300 group-hover:text-orange-600 transition-colors -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-orange-600 transition-colors" href="#">
                View Archive
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white px-6" id="process">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How we work</h2>
<p className="text-neutral-400 max-w-lg">A structured approach to ensure consistency, quality, and speed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-neutral-800 -z-10"></div>

<div className="group">
<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-8 group-hover:border-orange-500 group-hover:bg-orange-600/10 transition-colors duration-300">
<span className="text-3xl font-semibold text-neutral-600 group-hover:text-orange-500 transition-colors">01</span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Discover</h3>
<p className="text-neutral-400 text-sm leading-relaxed">We immerse ourselves in your world to understand your goals, audience, and challenges.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-8 group-hover:border-orange-500 group-hover:bg-orange-600/10 transition-colors duration-300">
<span className="text-3xl font-semibold text-neutral-600 group-hover:text-orange-500 transition-colors">02</span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Define</h3>
<p className="text-neutral-400 text-sm leading-relaxed">We create a strategic roadmap and define the visual direction to align with your objectives.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-8 group-hover:border-orange-500 group-hover:bg-orange-600/10 transition-colors duration-300">
<span className="text-3xl font-semibold text-neutral-600 group-hover:text-orange-500 transition-colors">03</span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Design</h3>
<p className="text-neutral-400 text-sm leading-relaxed">We craft pixel-perfect designs, iterating based on feedback to reach the perfect solution.</p>
</div>

<div className="group">
<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded-full flex items-center justify-center mb-8 group-hover:border-orange-500 group-hover:bg-orange-600/10 transition-colors duration-300">
<span className="text-3xl font-semibold text-neutral-600 group-hover:text-orange-500 transition-colors">04</span>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Deliver</h3>
<p className="text-neutral-400 text-sm leading-relaxed">We launch your project with precision and provide necessary assets for your team.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Why leading brands trust Reovlp.</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 text-orange-600">
<iconify-icon height="24" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Business-First Design</h3>
<p className="text-neutral-500 text-sm">We don't just make things look good; we design for conversion, retention, and growth.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-orange-600">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Rapid Velocity</h3>
<p className="text-neutral-500 text-sm">We work in fast sprints to get your product to market sooner without sacrificing quality.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 text-orange-600">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold mb-1">Senior Talent Only</h3>
<p className="text-neutral-500 text-sm">You work directly with the creators. No middlemen, no junior teams.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-neutral-50 p-8 md:p-12 rounded-3xl border border-neutral-100">
<iconify-icon className="text-6xl text-orange-200 absolute top-8 left-8" icon="solar:quote-up-linear"></iconify-icon>
<div className="relative z-10 pt-8">
<p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                        "Reovlp completely transformed our digital presence. The team’s ability to translate complex ideas into a simple, beautiful interface is unmatched."
                    </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden">

<div className="w-full h-full bg-neutral-300"></div>
</div>
<div>
<div className="font-semibold">Sarah Jenkins</div>
<div className="text-sm text-neutral-500">CEO, TechFlow Inc.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-5xl mx-auto bg-neutral-50 border border-neutral-200 rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-200 rounded-full blur-[100px] opacity-40"></div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-40"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 text-balance">
                    Ready to build something <span className="text-orange-600">extraordinary?</span>
</h2>
<p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">
                    We are currently accepting new projects. Tell us about your vision and let's create the future together.
                </p>
<button className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-medium text-white bg-orange-600 rounded-full hover:bg-orange-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-600/30">
                    Book a Discovery Call
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 border-t border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter uppercase flex items-center gap-1 mb-6" href="#">
                        Reovlp
                        <span className="w-2 h-2 rounded-full bg-orange-600 mt-1"></span>
</a>
<p className="text-neutral-500 max-w-sm mb-8 text-sm leading-relaxed">
                        A digital design agency crafting premium experiences for forward-thinking brands. Based in San Francisco, working globally.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-neutral-50 text-neutral-600 hover:bg-orange-50 hover:text-orange-600 transition-colors" href="#">
<iconify-icon icon="solar:brand-dribbble-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-6">Sitemap</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#work">Work</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 text-xs text-neutral-400">
<p>© 2024 Reovlp Studio. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
