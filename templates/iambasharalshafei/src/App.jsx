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



        // Initialize Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Navbar glass effect optimization
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-zinc-950/80');
            } else {
                nav.classList.remove('bg-zinc-950/80');
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/0 to-transparent blur-3xl"></div>
<div className="absolute top-0 left-0 w-full h-[800px] bg-grid z-[-1]"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm tracking-widest font-medium text-white uppercase flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-zinc-100 text-zinc-950 flex items-center justify-center rounded-sm text-[10px] font-bold group-hover:scale-110 transition-transform duration-300">B</div>
<span className="tracking-[0.2em] opacity-90 group-hover:opacity-100 transition-opacity">Bashar</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#work">Selected Work</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#experience">Experience</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 transition-all duration-200" href="mailto:basharshafie13@gmail.com">Contact</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-6xl mx-auto px-6">

<section className="mb-32 reveal active">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-zinc-400">Open for projects</span>
</div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
                Creating <span className="hero-text-gradient">visual<br/>narratives</span> that connect.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl mb-10">
                I am Bashar Al Shafei, a multidisciplinary Video Editor &amp; Graphic Designer. I bridge the gap between static design and fluid motion to craft compelling brand stories.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="h-11 px-7 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2" href="https://www.behance.net/basharshafie" target="_blank">
                    View Portfolio <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
<a className="h-11 px-7 rounded-full glass-panel text-zinc-300 text-sm font-medium hover:bg-zinc-800/50 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2" href="#experience">
                    About Me
                </a>
</div>
</section>

<section className="mb-32" id="services">
<div className="flex items-end justify-between mb-10 reveal">
<h2 className="text-xl font-medium text-white tracking-tight">Expertise</h2>
<span className="text-xs text-zinc-500 uppercase tracking-widest hidden sm:block">What I deliver</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 glass-panel rounded-xl hover:bg-zinc-900/40 transition-all duration-500 reveal delay-100 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-5 h-5 text-zinc-600" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-5 h-5 text-zinc-300" data-lucide="scissors"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Video Editing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        End-to-end post-production for commercials, social content, and documentaries. Focus on rhythm, pacing, and narrative flow.
                    </p>
</div>

<div className="group p-8 glass-panel rounded-xl hover:bg-zinc-900/40 transition-all duration-500 reveal delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-5 h-5 text-zinc-600" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-5 h-5 text-zinc-300" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Visual Identity</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Building cohesive brand systems. From logo design to comprehensive guidelines that ensure consistency across all touchpoints.
                    </p>
</div>

<div className="group p-8 glass-panel rounded-xl hover:bg-zinc-900/40 transition-all duration-500 reveal delay-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<i className="w-5 h-5 text-zinc-600" data-lucide="arrow-up-right"></i>
</div>
<div className="w-12 h-12 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-5 h-5 text-zinc-300" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-3">Motion Graphics</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Adding life to static assets through subtle animation and kinetic typography. Enhancing engagement for digital campaigns.
                    </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-32" id="work">

<div className="md:col-span-6 mb-4 reveal">
<div className="flex items-center justify-between">
<h2 className="text-xl font-medium text-white tracking-tight">Selected Works</h2>
<a className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1" href="https://www.behance.net/basharshafie" target="_blank">
                        Behance Archive <i className="w-3 h-3" data-lucide="chevron-right"></i>
</a>
</div>
</div>

<div className="md:col-span-4 glass-panel rounded-xl p-8 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500 reveal delay-100">
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 bg-zinc-900 rounded-lg border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
<i className="w-5 h-5 text-white" data-lucide="pen-tool"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">ZAS Management</h3>
<p className="text-sm text-zinc-500 mb-6 max-w-sm leading-relaxed">Overseeing the visual output for a major facilities management firm. Designing daily social media content and annual event branding that aligns with corporate goals.</p>
</div>
<div className="flex gap-2">
<span className="px-2.5 py-1 text-[10px] border border-zinc-800 bg-zinc-900/50 rounded text-zinc-400">Photoshop</span>
<span className="px-2.5 py-1 text-[10px] border border-zinc-800 bg-zinc-900/50 rounded text-zinc-400">Illustrator</span>
<span className="px-2.5 py-1 text-[10px] border border-zinc-800 bg-zinc-900/50 rounded text-zinc-400">Marketing</span>
</div>
</div>

<div className="absolute right-[-40px] top-12 w-72 h-72 bg-zinc-900 border border-zinc-800 rounded-xl opacity-40 group-hover:opacity-80 group-hover:-translate-x-2 transition-all duration-500 transform rotate-3 shadow-2xl">
<div className="p-4 border-b border-zinc-800 flex gap-2 bg-zinc-950/50">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="p-5 grid grid-cols-2 gap-3">
<div className="w-full h-24 bg-zinc-800/50 rounded border border-zinc-700/30"></div>
<div className="w-full h-24 bg-zinc-800/50 rounded border border-zinc-700/30"></div>
<div className="w-full h-24 bg-zinc-800/50 rounded col-span-2 border border-zinc-700/30"></div>
</div>
</div>
</div>

<div className="md:col-span-2 row-span-2 glass-panel rounded-xl p-8 flex flex-col justify-between hover:border-zinc-700 transition-all duration-500 reveal delay-200">
<div>
<div className="flex items-center justify-between mb-8">
<h3 className="text-sm font-medium text-zinc-200">Creative Stack</h3>
<i className="w-4 h-4 text-zinc-500" data-lucide="palette"></i>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-sm text-zinc-400 group/item cursor-default">
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:border-zinc-600 group-hover/item:bg-zinc-800 transition-all">
<i className="w-4 h-4 text-zinc-300" data-lucide="video"></i>
</div>
<span className="group-hover/item:text-zinc-200 transition-colors">Premiere Pro</span>
</li>
<li className="flex items-center gap-4 text-sm text-zinc-400 group/item cursor-default">
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:border-zinc-600 group-hover/item:bg-zinc-800 transition-all">
<i className="w-4 h-4 text-zinc-300" data-lucide="image"></i>
</div>
<span className="group-hover/item:text-zinc-200 transition-colors">Ps / Illustrator</span>
</li>
<li className="flex items-center gap-4 text-sm text-zinc-400 group/item cursor-default">
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:border-zinc-600 group-hover/item:bg-zinc-800 transition-all">
<i className="w-4 h-4 text-zinc-300" data-lucide="figma"></i>
</div>
<span className="group-hover/item:text-zinc-200 transition-colors">Figma</span>
</li>
<li className="flex items-center gap-4 text-sm text-zinc-400 group/item cursor-default">
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover/item:border-zinc-600 group-hover/item:bg-zinc-800 transition-all">
<i className="w-4 h-4 text-zinc-300" data-lucide="bot"></i>
</div>
<span className="group-hover/item:text-zinc-200 transition-colors">AI Workflows</span>
</li>
</ul>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800">
<p className="text-xs text-zinc-500 leading-5">Certified in Adobe Photoshop. Experienced in color grading, sound design, and advanced composition techniques.</p>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-xl p-8 hover:border-zinc-700 transition-all duration-500 flex flex-col justify-between reveal delay-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-zinc-200">Attention to Detail</h3>
<i className="w-4 h-4 text-zinc-500" data-lucide="sliders-horizontal"></i>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group">
<span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">Motion Blur</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-zinc-900 appearance-none cursor-pointer transition-all duration-300 ease-in-out" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>

<div className="space-y-3 group">
<div className="flex justify-between text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
<span>Quality</span>
<span>100%</span>
</div>
<input className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer" max="100" min="1" type="range" value="100"/>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-xl p-8 hover:border-zinc-700 transition-all duration-500 reveal delay-300">
<div className="flex flex-col h-full justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-500 mb-1">Experience</h3>
<div className="text-4xl font-medium text-white tracking-tight">4 Years</div>
</div>
<div className="flex gap-1 mt-4 items-end h-12">
<div className="w-full bg-zinc-800 rounded-sm h-[40%] hover:bg-white transition-colors duration-300"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[70%] hover:bg-white transition-colors duration-300"></div>
<div className="w-full bg-white rounded-sm h-[90%] shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[50%] hover:bg-white transition-colors duration-300"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[60%] hover:bg-white transition-colors duration-300"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[80%] hover:bg-white transition-colors duration-300"></div>
<div className="w-full bg-zinc-800 rounded-sm h-[45%] hover:bg-white transition-colors duration-300"></div>
</div>
</div>
</div>
</section>

<section className="mb-32 reveal" id="process">
<div className="flex items-center justify-between mb-12">
<h2 className="text-xl font-medium text-white tracking-tight">Process</h2>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Workflow</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-800 to-transparent z-0"></div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-600 group-hover:scale-105 transition-all duration-300 shadow-xl">
<span className="font-mono text-lg text-zinc-500 group-hover:text-white transition-colors">01</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Discovery</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Understanding the core message and target audience to set the visual direction.</p>
</div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-600 group-hover:scale-105 transition-all duration-300 shadow-xl">
<span className="font-mono text-lg text-zinc-500 group-hover:text-white transition-colors">02</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Concept</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Drafting storyboards, style frames, and mood boards to align on aesthetics.</p>
</div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-600 group-hover:scale-105 transition-all duration-300 shadow-xl">
<span className="font-mono text-lg text-zinc-500 group-hover:text-white transition-colors">03</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Production</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Execution of design, editing, and motion work with iterative feedback loops.</p>
</div>

<div className="relative z-10 group">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-zinc-600 group-hover:scale-105 transition-all duration-300 shadow-xl">
<span className="font-mono text-lg text-zinc-500 group-hover:text-white transition-colors">04</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Delivery</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Final rendering in required formats, optimized for specific platforms.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mb-32 reveal" id="experience">
<h2 className="text-sm font-medium text-zinc-400 mb-12 uppercase tracking-widest text-center md:text-left">Career Timeline</h2>
<div className="space-y-12 relative">

<div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-zinc-800 via-zinc-800 to-transparent"></div>
<div className="relative pl-10 group">
<div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Graphic Designer</h3>
<span className="text-xs text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800">2022 — Present</span>
</div>
<p className="text-sm text-zinc-300 mb-2">ZAS Facilities Management (Al Ain)</p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                        Leading the visual communication department. Responsible for the full lifecycle of digital assets, from conceptualization to publishing. Successfully rebranded key internal documents and presentation standards.
                    </p>
</div>
<div className="relative pl-10 group">
<div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Graphic Designer</h3>
<span className="text-xs text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800">2022</span>
</div>
<p className="text-sm text-zinc-300 mb-2">Sela Zone (Dubai)</p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                        Designed marketing materials for high-tech surveillance equipment. Focused on technical accuracy and clean, trustworthy aesthetics for B2B clients.
                    </p>
</div>
<div className="relative pl-10 group">
<div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Visual Designer</h3>
<span className="text-xs text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800">2020</span>
</div>
<p className="text-sm text-zinc-300 mb-2">Pixel Center (Palestine)</p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                        Specialized in photo manipulation and advanced retouching. Delivered high-volume banner ads and social media assets with strict deadlines.
                    </p>
</div>
<div className="relative pl-10 group">
<div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-800 border border-zinc-900 group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-300"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-emerald-400 transition-colors">Bachelor's Degree</h3>
<span className="text-xs text-zinc-500 font-mono px-2 py-1 rounded bg-zinc-900 border border-zinc-800">2015 — 2020</span>
</div>
<p className="text-sm text-zinc-300 mb-2">Islamic University</p>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xl">
                        Graduated in IT &amp; Web Development. Supplemented technical skills with specialized Graphic Design certifications from Al Omran Center.
                    </p>
</div>
</div>
</section>

<section className="mb-20 reveal">
<div className="glass-panel rounded-2xl p-12 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">Ready to start a project?</h2>
<p className="text-zinc-400 mb-8 max-w-lg mx-auto font-light">Let's collaborate to create visuals that elevate your brand and engage your audience.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all hover:scale-105 flex items-center gap-2" href="mailto:basharshafie13@gmail.com">
<i className="w-4 h-4" data-lucide="mail"></i> basharshafie13@gmail.com
                        </a>
<button className="h-12 px-8 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition-all hover:border-zinc-600 flex items-center gap-2" onclick="navigator.clipboard.writeText('basharshafie13@gmail.com')">
<i className="w-4 h-4" data-lucide="copy"></i> Copy
                        </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-zinc-800/30 blur-[80px] rounded-full pointer-events-none"></div>
</div>
</section>

<footer className="border-t border-zinc-900 pt-12 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 reveal">
<div className="flex flex-col gap-2">
<span className="text-sm font-medium text-white tracking-tight flex items-center gap-2">
                    Bashar Al Shafei <span className="text-zinc-600">•</span> <span className="text-zinc-500 font-normal">Dubai, UAE</span>
</span>
<span className="text-xs text-zinc-500">+971 50 498 4559</span>
</div>
<div className="flex flex-col md:flex-row gap-6 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="mailto:basharshafie13@gmail.com">Email</a>
<a className="hover:text-white transition-colors" href="https://www.behance.net/basharshafie" target="_blank">Behance</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
</footer>
</main>


    </>
  );
}
