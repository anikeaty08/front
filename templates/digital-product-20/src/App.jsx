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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/5 glass-card">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tighter text-lg hover:opacity-80 transition-opacity" href="#">
                dreelio
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-colors" href="#contact">
<span>Let's Talk</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-32 pb-20 px-6">

<section className="max-w-4xl mx-auto mb-32 flex flex-col items-start fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Designing digital <br/>
<span className="text-zinc-500">experiences that matter.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                I help startups and agencies craft minimal, functional, and user-centric interfaces. Focused on motion, interaction, and clean typography.
            </p>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
                    See Selected Work
                    <iconify-icon icon="solar:arrow-right-down-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
                    Copy Email
                    <iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32" id="work">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Selected Works</h2>
<p className="text-sm text-zinc-500">A curation of recent digital products.</p>
</div>
<a className="text-sm text-white hover:text-zinc-300 transition-colors flex items-center gap-1" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700">
<div className="w-full h-full flex items-center justify-center text-zinc-700 opacity-20">
<iconify-icon icon="solar:gallery-wide-linear" width="96"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Fintech Dashboard</h3>
<p className="text-sm text-zinc-400">Product Design, Design System</p>
</div>
<div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 group relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="w-32 h-64 border-2 border-zinc-700 rounded-xl bg-zinc-900/50"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Mobile App</h3>
<p className="text-sm text-zinc-400">iOS, Interaction</p>
</div>
</div>

<div className="group relative h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="text-lg font-medium text-white tracking-tight">AI Integration</h3>
<p className="text-xs text-zinc-400">Concept</p>
</div>
</div>

<div className="md:col-span-2 group relative h-[300px] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
<div className="grid grid-cols-3 gap-4 opacity-30">
<div className="w-20 h-20 rounded-lg bg-zinc-600"></div>
<div className="w-20 h-20 rounded-lg bg-zinc-600"></div>
<div className="w-20 h-20 rounded-lg bg-zinc-600"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full flex justify-between items-end">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Design System Kit</h3>
<p className="text-xs text-zinc-400">Resources, Figma</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-32" id="services">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">What I can do for you</h2>
<div className="space-y-4">
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-zinc-900 text-white border border-white/10">
<iconify-icon icon="solar:figma-file-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Product Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Comprehensive interface design for web and mobile applications, focusing on usability and aesthetics.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-zinc-900 text-white border border-white/10">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Design Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Scalable component libraries and style guides to ensure consistency across your product suite.</p>
</div>
</div>
</div>
<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors cursor-default">
<div className="flex items-start gap-4">
<div className="p-2 rounded-lg bg-zinc-900 text-white border border-white/10">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1">Development</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Bringing designs to life with clean, semantic frontend code using modern frameworks.</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-8">The Stack</h2>
<div className="flex flex-wrap gap-2 mb-12">
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">Figma</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">Framer</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">React</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">Tailwind CSS</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">Spline</span>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-zinc-900 text-sm text-zinc-300">Notion</span>
</div>
</div>
<div className="p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:quote-up-linear" width="32"></iconify-icon>
<p className="text-lg text-white font-medium mb-4 leading-relaxed">
                            "Dreelio transformed our vague ideas into a concrete, beautiful product that our users absolutely love. The attention to detail is unmatched."
                        </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-zinc-700"></div>
<div>
<div className="text-sm text-white">Alex Morgan</div>
<div className="text-xs text-zinc-500">CEO, Nexus Inc.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="max-w-6xl mx-auto border-t border-white/10 pt-20" id="contact">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Let's work together</h2>
<p className="text-zinc-400">Have an idea? Let's build something amazing.</p>
</div>
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden" href="mailto:hello@dreelio.com">
<span className="relative z-10 flex items-center gap-2">
                        hello@dreelio.com
                        <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 gap-4">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-zinc-700"></span>
<span className="text-xs text-zinc-500 font-medium">© 2024 Dreelio. All Rights Reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon> 
</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
