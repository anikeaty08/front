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
      

<main className="w-full max-w-6xl glass-panel rounded-3xl overflow-hidden shadow-2xl relative">

<nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="px-6 py-4 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<span className="bg-white text-black w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold tracking-tighter">JD</span>
<span className="opacity-80">Portfolio</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#skills">Skills</a>
<a className="hover:text-white transition-colors duration-200" href="#projects">Projects</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Services</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full text-white transition-all" href="#contact">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="14"></iconify-icon>
<span>Contact Me</span>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-20 pb-20 px-6 md:px-12 lg:px-20 overflow-hidden" id="hero">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Available for new projects
                    </div>
<div className="space-y-4">
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                            Visual Designer <br/>
<span className="text-neutral-500">&amp;</span> Full Stack Dev.
                        </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-md font-light leading-relaxed">
                            Crafting immersive digital experiences where strict logic meets fluid creativity. Based in San Francisco.
                        </p>
</div>
<div className="flex flex-wrap gap-4">
<a className="px-6 py-3 bg-white text-black font-medium rounded-full text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#contact">
                            Get in Touch
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-full text-sm hover:bg-white/10 transition-colors backdrop-blur-sm" href="#projects">
                            View Work
                        </a>
</div>
<div className="flex items-center gap-6 pt-4 border-t border-white/5">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:dribbble" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
<div className="relative aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-white/10 bg-neutral-900/50">
<img alt="Portrait" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 left-4 right-4 p-4 glass-panel rounded-xl border border-white/10 flex items-center justify-between">
<div>
<p className="text-white text-xs font-medium">Jonathan Doe</p>
<p className="text-[10px] text-neutral-400 uppercase tracking-wider">Product Enthusiast</p>
</div>
<iconify-icon className="text-yellow-400" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5 bg-black/20" id="about">
<div className="grid lg:grid-cols-12 gap-8">

<div className="lg:col-span-8 space-y-8">
<div className="space-y-2">
<h2 className="text-2xl font-medium text-white tracking-tight">About Me</h2>
<p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                            I am a developer driven by curiosity and a designer at heart. My journey began with hacking together simple HTML pages, which evolved into a passion for building complex, scalable applications with intuitive user interfaces. I believe that good code is poetry and good design is invisible.
                        </p>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="glass-card p-6 rounded-2xl space-y-3">
<div className="h-8 w-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Education</h3>
<p className="text-xs text-neutral-500">BS in Computer Science<br/>University of Technology, 2019</p>
</div>
<div className="glass-card p-6 rounded-2xl space-y-3">
<div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-2">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-white text-sm font-medium">Current Goal</h3>
<p className="text-xs text-neutral-500">Mastering WebGL and creating 3D interactive web experiences.</p>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">
<div className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between">
<div>
<h3 className="text-white text-sm font-medium mb-4">Motivations</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300">Problem Solving</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300">Open Source</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-neutral-300">Minimalism</span>
</div>
</div>
<div className="mt-8">
<h3 className="text-white text-sm font-medium mb-4">Interests</h3>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:camera" width="14"></iconify-icon>
                                    Analog Photography
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:music" width="14"></iconify-icon>
                                    Synthesizers
                                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:coffee" width="14"></iconify-icon>
                                    Specialty Coffee
                                </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5" id="skills">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Expertise &amp; Tools</h2>
<p className="text-sm text-neutral-400">A curated list of the tech stack I use to build digital products.</p>
</div>
<div className="flex gap-2 text-xs font-medium">
<button className="px-4 py-2 bg-white text-black rounded-full">All</button>
<button className="px-4 py-2 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition rounded-full">Dev</button>
<button className="px-4 py-2 bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition rounded-full">Design</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-indigo-400" icon="lucide:layout" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-white font-medium text-sm">Frontend Engineering</h3>
</div>
<div className="space-y-4">
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">React / Next.js</span>
<span className="text-neutral-500 group-hover:text-white transition-colors">95%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-[95%] rounded-full"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">Tailwind CSS</span>
<span className="text-neutral-500 group-hover:text-white transition-colors">98%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-[98%] rounded-full"></div>
</div>
</div>
<div className="group">
<div className="flex justify-between text-xs mb-1">
<span className="text-neutral-300">TypeScript</span>
<span className="text-neutral-500 group-hover:text-white transition-colors">90%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neutral-200 w-[90%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-pink-400" icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-white font-medium text-sm">UI/UX Design</h3>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="aspect-square bg-white/5 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/80" icon="lucide:figma" width="24"></iconify-icon>
<span className="text-[10px] text-neutral-400">Figma</span>
</div>
<div className="aspect-square bg-white/5 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/80" icon="lucide:framer" width="24"></iconify-icon>
<span className="text-[10px] text-neutral-400">Framer</span>
</div>
<div className="aspect-square bg-white/5 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/80" icon="lucide:layers" width="24"></iconify-icon>
<span className="text-[10px] text-neutral-400">Systems</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-emerald-400" icon="lucide:terminal" strokeWidth="1.5" width="20"></iconify-icon>
<h3 className="text-white font-medium text-sm">Workflow &amp; Tools</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="lucide:git-branch" width="12"></iconify-icon> Git
                        </span>
<span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="lucide:container" width="12"></iconify-icon> Docker
                        </span>
<span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="lucide:database" width="12"></iconify-icon> PostgreSQL
                        </span>
<span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="lucide:command" width="12"></iconify-icon> VS Code
                        </span>
<span className="px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-md text-xs text-neutral-400 flex items-center gap-2">
<iconify-icon icon="lucide:cloud" width="12"></iconify-icon> Vercel
                        </span>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5 bg-black/20" id="projects">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12">Selected Works</h2>
<div className="space-y-8">

<div className="glass-card rounded-2xl overflow-hidden group">
<div className="grid md:grid-cols-2 gap-0">
<div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1 border-t md:border-t-0 md:border-r border-white/5">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs font-medium text-blue-400 uppercase tracking-wide">Fintech</span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Nova Banking Dashboard</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                A comprehensive financial platform featuring real-time data visualization, secure transaction processing, and a highly accessible UI built with Next.js and Tailwind.
                            </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">React</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">D3.js</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">Supabase</span>
</div>
<div className="flex items-center gap-4">
<a className="text-white text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Live <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-neutral-500 text-xs font-medium hover:text-white transition-colors" href="#">
                                    Source Code
                                </a>
</div>
</div>
<div className="relative h-64 md:h-auto bg-neutral-900 overflow-hidden order-1 md:order-2 group">
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden group">
<div className="grid md:grid-cols-2 gap-0">
<div className="relative h-64 md:h-auto bg-neutral-900 overflow-hidden">
<img alt="App" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-purple-500"></span>
<span className="text-xs font-medium text-purple-400 uppercase tracking-wide">AI Tool</span>
</div>
<h3 className="text-xl text-white font-medium mb-3">Syntax AI Editor</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">
                                An intelligent markdown editor that uses OpenAI's API to suggest content improvements and generate creative writing prompts on the fly.
                            </p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">OpenAI API</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">Node.js</span>
<span className="text-[10px] uppercase tracking-wider text-neutral-500 border border-white/5 px-2 py-1 rounded bg-neutral-900/50">Stripe</span>
</div>
<div className="flex items-center gap-4">
<a className="text-white text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Live <iconify-icon icon="lucide:arrow-up-right" width="12"></iconify-icon>
</a>
<a className="text-neutral-500 text-xs font-medium hover:text-white transition-colors" href="#">
                                    Source Code
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5" id="testimonial">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Words form Collaborators</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="glass-card p-8 rounded-2xl relative">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="lucide:quote" width="40"></iconify-icon>
<p className="text-sm text-neutral-300 mb-6 relative z-10 leading-relaxed">
                        "Jonathan has an incredible eye for detail. The design system he built for us didn't just look good, it completely streamlined our development workflow. Highly recommended."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white">AS</div>
<div>
<p className="text-white text-xs font-medium">Alex Smith</p>
<p className="text-neutral-500 text-[10px] uppercase">CTO, TechFlow</p>
</div>
</div>
</div>
<div className="glass-card p-8 rounded-2xl relative">
<iconify-icon className="text-white/10 absolute top-6 right-6" icon="lucide:quote" width="40"></iconify-icon>
<p className="text-sm text-neutral-300 mb-6 relative z-10 leading-relaxed">
                        "Rarely do you find a developer who understands design this well. The implementation was pixel-perfect and the animations were buttery smooth."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white">EM</div>
<div>
<p className="text-white text-xs font-medium">Elena Miller</p>
<p className="text-neutral-500 text-[10px] uppercase">Product Manager, Base</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 lg:px-20 py-20 border-t border-white/5 bg-black/20" id="pricing">
<div className="text-center mb-12 space-y-2">
<h2 className="text-2xl font-medium text-white tracking-tight">Simple Pricing</h2>
<p className="text-sm text-neutral-400">Transparent rates for my services.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col">
<h3 className="text-white font-medium text-sm mb-2">Hourly</h3>
<p className="text-2xl text-white font-medium mb-4">$80 <span className="text-sm text-neutral-500 font-normal">/ hr</span></p>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed">Perfect for small tasks, bug fixes, or consultation calls.</p>
<a className="mt-auto w-full py-2 rounded-lg border border-white/10 text-xs text-center text-white hover:bg-white/5 transition-colors" href="#">Start Project</a>
</div>

<div className="glass-card p-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 relative flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-[10px] text-white rounded-full font-medium">Most Popular</div>
<h3 className="text-white font-medium text-sm mb-2">Project Base</h3>
<p className="text-2xl text-white font-medium mb-4">$3k <span className="text-sm text-neutral-500 font-normal">/ start</span></p>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed">For complete website builds, landing pages, or MVPs.</p>
<a className="mt-auto w-full py-2 rounded-lg bg-white text-black text-xs text-center font-medium hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col">
<h3 className="text-white font-medium text-sm mb-2">Retainer</h3>
<p className="text-2xl text-white font-medium mb-4">$5k <span className="text-sm text-neutral-500 font-normal">/ mo</span></p>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed">Dedicated development and design support for your team.</p>
<a className="mt-auto w-full py-2 rounded-lg border border-white/10 text-xs text-center text-white hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</section>

<footer className="px-6 md:px-12 lg:px-20 py-8 border-t border-white/5 bg-neutral-950/50" id="footer">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-white font-semibold text-sm">JD</span>
<span className="text-xs text-neutral-500">© 2023 Jonathan Doe. All rights reserved.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
