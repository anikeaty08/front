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



tailwind.config = {
theme: {
extend: {
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
blue: {
450: '#4da3ff',
}
},
boxShadow: {
'glow': '0 0 20px -5px rgba(59, 130, 246, 0.3)',
}
}
}
}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-strong transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-xs text-white font-bold">A</div>
                AGENCY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="group relative px-5 py-2 rounded-full bg-white text-neutral-950 text-xs font-medium overflow-hidden transition-all hover:scale-105" href="#contact">
<span className="relative z-10">Get Started</span>
<div className="absolute inset-0 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0 opacity-10"></div>
</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Accepting New Projects</span>
</div>
<h1 className="reveal delay-100 text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[1.1] tracking-tight">
                Crafting digital <br/>
<span className="text-gradient-blue italic pr-2">experiences</span> that scale.
            </h1>
<p className="reveal delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We build high-converting websites and applications for ambitious brands. From strategy to deployment, we handle the complexity.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="px-8 py-4 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:scale-105 transition-transform duration-300 shadow-glow hover:shadow-blue-500/20">
                    Start Project
                </button>
<button className="px-8 py-4 rounded-xl border border-neutral-800 text-white font-medium text-sm hover:bg-neutral-900 hover:border-neutral-700 hover:scale-105 transition-all duration-300 flex items-center gap-2 group">
                    View Portfolio
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="reveal delay-300 pt-8 border-t border-neutral-900/50 max-w-3xl mx-auto">
<p className="text-xs text-neutral-500 mb-6 uppercase tracking-widest">Trusted by 50+ innovative teams</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:align-bottom-linear"></iconify-icon> Acme</span>
<span className="text-lg font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:atom-linear"></iconify-icon> Vertex</span>
<span className="text-lg font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:bold-duotone"></iconify-icon> Bolt</span>
<span className="text-lg font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> Cube</span>
<span className="text-lg font-bold font-sans tracking-tight text-white flex items-center gap-1"><iconify-icon icon="solar:infinity-linear"></iconify-icon> Loop</span>
</div>
</div>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto h-[400px] md:h-[600px] relative perspective-1000 reveal delay-300 group">
<div className="absolute inset-x-4 inset-y-0 bg-neutral-900 rounded-t-3xl border border-neutral-800 shadow-2xl transform rotate-x-12 group-hover:rotate-x-0 transition-transform duration-1000 overflow-hidden">
<div className="w-full h-8 border-b border-neutral-800 bg-neutral-950 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>
<div className="relative w-full h-full bg-neutral-950 grid grid-cols-12 gap-4 p-8 opacity-50">

<div className="col-span-12 h-64 bg-neutral-900 rounded-xl mb-4 border border-neutral-800"></div>
<div className="col-span-4 h-40 bg-neutral-900 rounded-xl border border-neutral-800"></div>
<div className="col-span-4 h-40 bg-neutral-900 rounded-xl border border-neutral-800"></div>
<div className="col-span-4 h-40 bg-neutral-900 rounded-xl border border-neutral-800"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="container mx-auto px-6">
<div className="max-w-xl mb-16 reveal">
<h2 className="text-3xl md:text-4xl text-white font-medium mb-4">Solutions for every stage.</h2>
<p className="text-neutral-400 text-lg font-light">Select your primary objective to see how we structure our engagement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group glass rounded-2xl p-8 hover-card cursor-pointer reveal delay-100 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-blue-500" height="120" icon="solar:chart-2-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-500 mb-6">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">Lead Generation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">High-performance landing pages and funnels designed to capture and convert traffic into qualified leads.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Conversion Audit</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> A/B Testing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Analytics Setup</li>
</ul>
</div>

<div className="group glass rounded-2xl p-8 hover-card cursor-pointer reveal delay-200 relative overflow-hidden border-blue-500/20">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-purple-500" height="120" icon="solar:cart-large-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-500 mb-6">
<iconify-icon icon="solar:cart-large-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">E-Commerce</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Scalable storefronts using Shopify or Custom headless solutions that drive sales and retention.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Headless Commerce</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Payment Integration</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Inventory Logic</li>
</ul>
</div>

<div className="group glass rounded-2xl p-8 hover-card cursor-pointer reveal delay-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-10 transition-opacity duration-500">
<iconify-icon className="text-emerald-500" height="120" icon="solar:code-circle-linear" width="120"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-500 mb-6">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3">SaaS / Custom</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Full-stack web applications tailored to your specific business logic and user needs.</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> React / Next.js</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Database Design</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> API Development</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="work">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
<div>
<h2 className="text-3xl md:text-4xl text-white font-medium mb-2">Selected Work</h2>
<p className="text-neutral-400 font-light">Recent projects shipping to production.</p>
</div>
<a className="text-sm text-white border-b border-white/20 pb-1 mt-4 md:mt-0 hover:border-white transition-colors" href="#">View all projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

<div className="group relative col-span-1 md:col-span-2 row-span-2 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 reveal delay-100">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1481487484168-9b995ecc1679?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-2">Fintech</div>
<h3 className="text-2xl text-white font-medium mb-2">Nova Financial</h3>
<p className="text-neutral-400 text-sm max-w-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Complete dashboard redesign and marketing site for a Series B fintech startup.</p>
<button className="text-white text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="group relative col-span-1 md:col-span-2 row-span-1 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 reveal delay-200">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-emerald-400 text-xs font-medium tracking-widest uppercase mb-1">E-Commerce</div>
<h3 className="text-xl text-white font-medium">Lumina Lighting</h3>
</div>
</div>

<div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 reveal delay-300">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-purple-400 text-xs font-medium tracking-widest uppercase mb-1">SaaS</div>
<h3 className="text-lg text-white font-medium">TaskFlow</h3>
</div>
</div>

<div className="group relative col-span-1 row-span-1 rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 reveal delay-300">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="text-orange-400 text-xs font-medium tracking-widest uppercase mb-1">Branding</div>
<h3 className="text-lg text-white font-medium">Mono Archi</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="process">
<div className="container mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl md:text-4xl text-white font-medium mb-4">How we work</h2>
<p className="text-neutral-400 font-light max-w-lg mx-auto">A transparent, iterative process designed for speed and quality.</p>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent"></div>

<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-center gap-8 reveal group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0 order-2 md:order-1">
<h3 className="text-xl text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">01. Discovery</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We deep dive into your business goals, audience, and technical requirements to build a roadmap.</p>
</div>
<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-700 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
<iconify-icon className="text-white text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 order-3 md:order-2 hidden md:block opacity-20">

</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 reveal delay-100 group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0 order-2 md:order-1 hidden md:block opacity-20">
</div>
<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-700 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
<iconify-icon className="text-white text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 order-2 md:order-2">
<h3 className="text-xl text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">02. Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Wireframes, high-fidelity UI, and interactive prototypes to visualize the end product.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 reveal delay-200 group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0 order-2 md:order-1">
<h3 className="text-xl text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">03. Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Clean, performant code using modern stacks like Next.js and Tailwind. Built for scale.</p>
</div>
<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-700 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
<iconify-icon className="text-white text-lg" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 order-3 md:order-2 hidden md:block opacity-20">
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 reveal delay-300 group">
<div className="md:w-1/2 md:text-right md:pr-12 pl-12 md:pl-0 order-2 md:order-1 hidden md:block opacity-20">
</div>
<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950 border border-neutral-700 z-10 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all">
<iconify-icon className="text-white text-lg" icon="solar:rocket-linear"></iconify-icon>
</div>
<div className="md:w-1/2 md:pl-12 pl-12 order-2 md:order-2">
<h3 className="text-xl text-white font-medium mb-2 group-hover:text-blue-400 transition-colors">04. Launch</h3>
<p className="text-sm text-neutral-400 leading-relaxed">QA testing, SEO optimization, and final deployment. We ensure a smooth lift-off.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="absolute inset-0 bg-neutral-950">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-12 reveal border border-neutral-800 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-3xl text-white font-medium mb-4">Start your project</h2>
<p className="text-neutral-400 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-600" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-600" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-4">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Budget Range</label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="w-full p-3 text-center text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/50 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-400 transition-all hover:bg-neutral-800">
                                    &lt; $5k
                                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="w-full p-3 text-center text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/50 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-400 transition-all hover:bg-neutral-800">
                                    $5k - 10k
                                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="w-full p-3 text-center text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/50 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-400 transition-all hover:bg-neutral-800">
                                    $10k - 25k
                                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="budget" type="radio"/>
<div className="w-full p-3 text-center text-xs text-neutral-400 border border-neutral-800 bg-neutral-900/50 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:text-blue-400 transition-all hover:bg-neutral-800">
                                    $25k+
                                </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-neutral-600 min-h-[120px]" placeholder="Tell us about your goals..."></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium text-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.01] transition-all duration-300">
                        Send Inquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 bg-neutral-950 py-12">
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-xs text-white font-bold">A</div>
<span className="text-white text-sm font-medium tracking-tight">AGENCY © 2024</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>


    </>
  );
}
