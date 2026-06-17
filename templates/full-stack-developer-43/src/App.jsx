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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30 group-hover:bg-purple-500/30 transition-colors">
                    IM
                </span>
<span className="opacity-90 group-hover:opacity-100 transition-opacity">imad.dev</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-purple-400 transition-colors" href="#about">About</a>
<a className="hover:text-purple-400 transition-colors" href="#stack">Stack</a>
<a className="hover:text-purple-400 transition-colors" href="#projects">Projects</a>
<a className="hover:text-purple-400 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-xs font-medium hover:bg-white/5 hover:border-purple-500/50 hover:text-purple-300 transition-all" href="mailto:hello@imad.dev">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                Get in touch
            </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex items-center pt-20 relative overflow-hidden">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px] -z-10"></div>
<div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-6 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
                    Available for work
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Building digital <br/>
<span className="text-gradient">experiences</span> that matter.
                </h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    I'm Imad, a Full Stack Developer passionate about crafting accessible, pixel-perfect user interfaces that blend art and engineering.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-purple-50 transition-colors flex items-center gap-2" href="#projects">
                        View Projects
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-6 py-3 glass-card text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2" href="#">
<iconify-icon icon="solar:file-download-linear"></iconify-icon>
                        Download CV
                    </a>
</div>
<div className="flex items-center gap-6 pt-8 border-t border-white/5">
<a className="text-slate-400 hover:text-purple-400 transition-transform hover:-translate-y-1" href="#">
<iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-purple-400 transition-transform hover:-translate-y-1" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="24"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-purple-400 transition-transform hover:-translate-y-1" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon>
</a>
</div>
</div>

<div className="relative flex justify-center lg:justify-end fade-in-up delay-200">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse"></div>

<div className="relative w-72 h-72 lg:w-96 lg:h-96 animate-float">

<div className="absolute inset-0 bg-gradient-to-b from-purple-500 to-indigo-600 rounded-[2rem] opacity-30 blur-md animate-glow"></div>

<div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">

<img alt="Imad" className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center gap-3 animate-float" style={{animationDelay: '1s'}}>
<div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-white text-xs font-medium">Current Focus</div>
<div className="text-purple-300 text-xs">React &amp; Next.js</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-[#050508]" id="stack">
<div className="max-w-6xl mx-auto px-6 mb-8 text-center">
<h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase">Technologies</h2>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex gap-12 whitespace-nowrap py-4 items-center">

<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:figma-file-linear" width="40"></iconify-icon>
<span className="text-xs">Figma</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:react" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">React</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:tailwindcss-icon" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">Tailwind</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:nextjs-icon" style={{filter: 'invert(1)', opacity: '0.5'}} width="40"></iconify-icon>
<span className="text-xs">Next.js</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:nodejs-icon" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">Node.js</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:typescript-icon" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">TypeScript</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:postgresql" style={{filter: 'grayscale(100%)', opacity: '0.6'}} width="40"></iconify-icon>
<span className="text-xs">Postgres</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:git-icon" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">Git</span>
</div>

<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="solar:figma-file-linear" width="40"></iconify-icon>
<span className="text-xs">Figma</span>
</div>
<div className="flex flex-col items-center gap-2 text-slate-500 hover:text-white transition-colors">
<iconify-icon icon="logos:react" style={{filter: 'grayscale(100%)'}} width="40"></iconify-icon>
<span className="text-xs">React</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="projects">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Featured Projects</h2>
<p className="text-slate-400 font-light">A selection of projects I've worked on recently.</p>
</div>
<a className="text-purple-400 hover:text-purple-300 text-sm flex items-center gap-1 group" href="#">
                    View all work 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
<div className="aspect-video bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>

<div className="w-full h-full bg-slate-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:gallery-wide-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">E-Commerce Dashboard</h3>
<div className="flex gap-2">
<a className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            A comprehensive analytics dashboard for online retailers. Features real-time data visualization, inventory management, and sales reporting.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Next.js</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Tailwind</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Recharts</span>
</div>
</div>
</div>

<div className="group relative rounded-xl bg-[#0a0a0a] border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
<div className="aspect-video bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 opacity-60"></div>
<div className="w-full h-full bg-slate-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:iphone-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">Task Management App</h3>
<div className="flex gap-2">
<a className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</a>
<a className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="24"></iconify-icon>
</a>
</div>
</div>
<p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            A collaborative productivity tool allowing teams to organize tasks. Includes drag-and-drop interfaces and real-time socket updates.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">React</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Node.js</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs text-slate-300">Socket.io</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050508] border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">What I do</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl md:col-span-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:monitor-smartphone-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Frontend Development</h3>
<p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            I build responsive, accessible, and performant web applications using modern frameworks like React and Next.js. I obsess over small details, from fluid animations to semantic HTML.
                        </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:server-square-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:database-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Backend</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Robust APIs and database architecture using Node.js, Express, and PostgreSQL.
                        </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl relative overflow-hidden group">
<div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:palette-linear" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6">
<iconify-icon icon="solar:figma-file-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">UI/UX Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            Translating requirements into clean, intuitive designs using Figma before a single line of code is written.
                        </p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl md:col-span-2 relative overflow-hidden group flex flex-col justify-center">
<div className="flex items-center gap-12 justify-around">
<div className="text-center">
<span className="block text-4xl font-semibold text-white mb-1">3+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="text-center">
<span className="block text-4xl font-semibold text-white mb-1">20+</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Projects Completed</span>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="text-center hidden sm:block">
<span className="block text-4xl font-semibold text-white mb-1">100%</span>
<span className="text-xs text-slate-500 uppercase tracking-wider">Client Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-2xl mx-auto px-6 text-center">
<h2 className="text-4xl font-medium text-white tracking-tight mb-4">Let's work together</h2>
<p className="text-slate-400 mb-10 font-light">
                Have a project in mind or just want to say hi? I'm currently available for freelance projects and open to full-time opportunities.
            </p>
<form className="text-left space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="group">
<label className="block text-xs text-slate-500 mb-1 ml-1">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-slate-500 mb-1 ml-1">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs text-slate-500 mb-1 ml-1">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-medium rounded-lg hover:bg-purple-50 transition-colors mt-4 flex justify-center items-center gap-2" type="button">
                    Send Message
                    <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-slate-400 text-sm">
<iconify-icon className="text-purple-400" icon="solar:letter-linear"></iconify-icon>
                    hello@imad.dev
                 </div>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/5 bg-[#030014]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-600 text-xs">© 2023 Imad. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-purple-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
