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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>

<main className="w-full max-w-2xl px-6 py-20 z-10 relative">

<header className="mb-20">
<div className="flex items-start justify-between mb-8">
<div>
<h1 className="text-3xl text-neutral-100 tracking-tight font-serif font-medium mb-2">Ayushman Mukherjee</h1>
<div className="flex items-center gap-3">
<p className="text-sm text-neutral-500 tracking-tight">Kolkata, India</p>
<span className="h-1 w-1 rounded-full bg-neutral-700"></span>

<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-900/10 border border-green-900/20">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-wider font-medium text-green-500/80">Online</span>
</div>
</div>
</div>

<div className="h-12 w-12 border border-neutral-800 rounded-lg bg-neutral-900/30 flex items-center justify-center text-neutral-200 text-sm tracking-tighter font-serif italic">
                    Am.
                </div>
</div>
<div className="space-y-6">
<p className="text-base text-neutral-300 leading-relaxed max-w-lg">
                    Engineer &amp; Founder. Exploring <span className="text-white font-medium">non-backprop architectures</span> and building autonomous systems. Currently fixing how brands operate at scale.
                </p>

<div className="border-l-2 border-neutral-800 pl-4 py-1">
<p className="text-sm text-neutral-500 italic font-serif">"Currently held together by duct tape, VS Code, and a healthy amount of delusion."</p>
</div>
</div>

<div className="flex flex-wrap gap-3 mt-8">
<button className="group flex items-center gap-2 px-4 py-2 bg-neutral-100 text-black rounded text-xs font-medium hover:bg-white transition-colors">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
<span>Email Me</span>
</button>
<a className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded text-xs font-medium hover:text-neutral-200 hover:border-neutral-700 transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="16"></iconify-icon>
<span>GitHub</span>
</a>
<a className="group flex items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-400 rounded text-xs font-medium hover:text-neutral-200 hover:border-neutral-700 transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon>
<span>LinkedIn</span>
</a>
</div>
</header>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-6 flex items-center gap-2">
                Current Focus
            </h2>
<div className="grid grid-cols-1 gap-4">

<div className="group relative p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 -rotate-45">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-neutral-200" icon="solar:atom-linear" width="24"></iconify-icon>
<h3 className="text-neutral-200 font-medium tracking-tight">MindMorph Labs</h3>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        Engineering N3L — The <span className="text-neutral-200">NoBackprop Revolution</span>. Moving beyond standard gradient descent to create local-learning architectures for scalable intelligence.
                    </p>
<div className="flex items-center gap-3">
<span className="text-xs text-green-400/80 bg-green-900/10 border border-green-900/20 px-2 py-0.5 rounded">Founder &amp; CTO</span>
<span className="text-[10px] text-neutral-600 font-mono">2025 - Present</span>
</div>
</div>

<div className="group relative p-6 rounded-xl border border-neutral-800 bg-neutral-900/20 hover:border-neutral-700 hover:bg-neutral-900/40 transition-all duration-300">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 -rotate-45">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-neutral-200" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<h3 className="text-neutral-200 font-medium tracking-tight">Torobari</h3>
</div>
<p className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        Building the world's first <span className="text-neutral-200">AI Operating System for Brands</span>. Acting as a fractional Chief Brand Officer for businesses through autonomous agents.
                    </p>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-400 bg-neutral-800/50 border border-neutral-800 px-2 py-0.5 rounded">Co-Founder &amp; CTO</span>
<span className="text-[10px] text-neutral-600 font-mono">2025 - Present</span>
</div>
</div>
</div>
</section>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-6">
                Selected Builds
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<a className="group block p-4 rounded-lg border border-neutral-900 bg-neutral-900/10 hover:border-neutral-700 transition-colors" href="#">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="solar:code-file-linear"></iconify-icon>
<iconify-icon className="text-neutral-700 group-hover:text-neutral-400 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-sm text-neutral-200 font-medium mb-1">Custom GPT RAG Pipeline</h3>
<p className="text-xs text-neutral-500 mb-3">Retrieval Augmented Generation system optimized for legal documents.</p>
<div className="flex gap-2">
<span className="text-[10px] text-neutral-600">Python</span>
<span className="text-[10px] text-neutral-600">LangChain</span>
</div>
</a>

<a className="group block p-4 rounded-lg border border-neutral-900 bg-neutral-900/10 hover:border-neutral-700 transition-colors" href="#">
<div className="flex justify-between items-start mb-3">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<iconify-icon className="text-neutral-700 group-hover:text-neutral-400 transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<h3 className="text-sm text-neutral-200 font-medium mb-1">Synthica Research Platform</h3>
<p className="text-xs text-neutral-500 mb-3">Collaboration hub for high-school researchers in ML/AI.</p>
<div className="flex gap-2">
<span className="text-[10px] text-neutral-600">Next.js</span>
<span className="text-[10px] text-neutral-600">Supabase</span>
</div>
</a>
</div>
</section>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-8">
                Timeline
            </h2>
<div className="space-y-10 border-l border-neutral-800/50 ml-3 pl-8">

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-neutral-600 ring-4 ring-[#050505]"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
<h3 className="text-neutral-200 font-medium text-sm">VenturEd Fellowship (W25)</h3>
<span className="text-xs text-neutral-600 font-mono">Dec 2025</span>
</div>
<p className="text-sm text-neutral-500">Commended Fellow. Selected from hundreds of applicants.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-neutral-800 ring-4 ring-[#050505]"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
<h3 className="text-neutral-200 font-medium text-sm">Vidoori</h3>
<span className="text-xs text-neutral-600 font-mono">Feb 2025</span>
</div>
<p className="text-sm text-neutral-500">Finalist Fellow (W25). Shortlisted for placement.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-neutral-800 ring-4 ring-[#050505]"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
<h3 className="text-neutral-200 font-medium text-sm">NASA</h3>
<span className="text-xs text-neutral-600 font-mono">Jul 2025</span>
</div>
<p className="text-sm text-neutral-500">Open Science Trainee. Awards: AL-113199, AL-113200.</p>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-neutral-800 ring-4 ring-[#050505]"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-neutral-200 font-medium text-sm">Open Source Leadership</h3>
</div>
<div className="grid gap-2">
<div className="flex items-center gap-3 text-xs text-neutral-500">
<iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon>
<span>Project Admin @ Data Science Club, VIT Bhopal</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon>
<span>Project Admin @ GirlScript Summer of Code</span>
</div>
<div className="flex items-center gap-3 text-xs text-neutral-500">
<iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon>
<span>Mentor @ Apertre 3.0</span>
</div>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-neutral-800 ring-4 ring-[#050505]"></span>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
<h3 className="text-neutral-200 font-medium text-sm">Freelance AI Developer</h3>
<span className="text-xs text-neutral-600 font-mono">2024 - 2025</span>
</div>
<p className="text-sm text-neutral-500">LLM Automation, Custom GPTs, RAG Systems.</p>
</div>
</div>
</section>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-6">
                Arsenal
            </h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">Python</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">PyTorch</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">TensorFlow</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">LangChain</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">Next.js</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">Docker</span>
<span className="px-3 py-1.5 rounded text-xs font-medium bg-neutral-900 text-neutral-400 border border-neutral-800">Linux</span>
</div>
</section>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-6">
                Honors
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 rounded-lg overflow-hidden">

<div className="p-5 bg-[#050505] hover:bg-neutral-900/50 transition-colors">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-neutral-200 font-medium">MetaMorph 2K25</h3>
<iconify-icon className="text-yellow-500/50" icon="solar:cup-star-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Hackathon Winner</p>
</div>

<div className="p-5 bg-[#050505] hover:bg-neutral-900/50 transition-colors">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-neutral-200 font-medium">StatusCode2</h3>
<iconify-icon className="text-yellow-500/50" icon="solar:cup-star-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Hackathon Winner</p>
</div>

<div className="p-5 bg-[#050505] hover:bg-neutral-900/50 transition-colors">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-neutral-200 font-medium">ETHGlobal</h3>
<iconify-icon className="text-neutral-700" icon="solar:medal-ribbon-star-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">New Delhi Hacker &amp; ETHOnline</p>
</div>

<div className="p-5 bg-[#050505] hover:bg-neutral-900/50 transition-colors">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-neutral-200 font-medium">NASA Open Science</h3>
<iconify-icon className="text-neutral-700" icon="solar:medal-ribbon-star-linear"></iconify-icon>
</div>
<p className="text-xs text-neutral-500">Essentials Certification</p>
</div>
</div>
</section>

<section className="mb-20">
<h2 className="text-lg font-serif text-neutral-200 mb-6">
                Vouches
            </h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="relative">
<div className="text-neutral-700 mb-3">
<iconify-icon icon="solar:quote-up-linear" width="20"></iconify-icon>
</div>
<blockquote className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        "He isn’t just my cofounder, he’s my closest friend in this whole chaos... His cracked engineering brain and unstoppable energy feel unfair at times."
                    </blockquote>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-neutral-800 flex items-center justify-center text-[9px] text-white font-medium">AH</div>
<div>
<p className="text-xs text-neutral-200 font-medium">Adnan Hussain</p>
<p className="text-[10px] text-neutral-600">Dropout Unsloping Brands</p>
</div>
</div>
</div>

<div className="relative">
<div className="text-neutral-700 mb-3">
<iconify-icon icon="solar:quote-up-linear" width="20"></iconify-icon>
</div>
<blockquote className="text-sm text-neutral-400 mb-4 leading-relaxed">
                        "What truly sets Ayushman apart is his ability to think like both an engineer and a strategist. He builds systems that make business sense."
                    </blockquote>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-neutral-800 flex items-center justify-center text-[9px] text-white font-medium">DM</div>
<div className="">
<p className="text-xs text-neutral-200 font-medium">Debosmita Mallick</p>
<p className="text-[10px] text-neutral-600">IIM ROHTAK’27</p>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full flex justify-between items-center py-8 border-t border-neutral-900 text-[10px] text-neutral-600">
<p>© 2025 Ayushman Mukherjee</p>
<div className="flex gap-4 uppercase tracking-widest">
<span>Resume</span>
<span>Twitter</span>
</div>
</footer>
</main>

    </>
  );
}
