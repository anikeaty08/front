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
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
925: '#101010',
950: '#0a0a0a',
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-medium tracking-tight text-white group-hover:opacity-80 transition-opacity">Farness<span className="text-neutral-500 align-top text-xs ml-0.5">®</span></span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-neutral-900/80 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
<a className="px-4 py-1.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Home</a>
<a className="px-4 py-1.5 text-sm font-medium text-white bg-neutral-800 rounded-full shadow-inner border border-white/5" href="#">Technologies</a>
<a className="px-4 py-1.5 text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Use cases</a>
</nav>
<a className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                Contact
            </a>
</div>
</header>
<main className="relative pt-32 pb-20 px-6">

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-10%] left-[20%] w-[40vw] h-[40vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[30vw] h-[30vw] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<section className="max-w-4xl mx-auto text-center mb-32 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-xs font-medium text-neutral-400 mb-8">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                Technology Overview
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 gradient-text pb-2">
                How Our Technology Works
            </h1>
<p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
                Farness transforms a simple human instruction into a fully autonomous, coordinated drone mission—without manual planning or technical setup.
            </p>

<div className="relative group mx-auto max-w-xl">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative glass-card rounded-xl p-8 flex items-center gap-6 text-left">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-blue-400">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="mic"></i>
</div>
<div className="flex-1">
<p className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-2">Voice Command Input</p>
<p className="text-xl md:text-2xl font-normal text-white italic font-serif">
                            “Inspect the northern pipeline for damage or leaks.”
                        </p>
</div>
<div className="hidden md:flex flex-col gap-1">
<div className="w-1 h-1 bg-green-500 rounded-full"></div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32">
<div className="mb-12 flex items-end justify-between border-b border-white/5 pb-6">
<h2 className="text-3xl font-medium text-white tracking-tight">The Autonomous Journey</h2>
<span className="text-sm text-neutral-500 font-mono hidden md:block">01 — 04 PROCESS FLOW</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

<div className="group glass-card rounded-2xl p-6 hover:bg-neutral-800/40 transition-colors duration-500 relative">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-mono text-sm text-white">01</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Command to Understanding</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Farness interprets the command, extracts intent, constraints, and priorities, and analyzes the operational environment to build a structured mission plan.
                    </p>
</div>

<div className="group glass-card rounded-2xl p-6 hover:bg-neutral-800/40 transition-colors duration-500 relative">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-mono text-sm text-white">02</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">AI Transforms the Mission</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        The system dynamically assigns roles to specialized drones—mapping, inspection, analysis—optimizing task distribution in real time.
                    </p>
</div>

<div className="group glass-card rounded-2xl p-6 hover:bg-neutral-800/40 transition-colors duration-500 relative">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-mono text-sm text-white">03</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Mission in Action</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Drones operate collaboratively, sharing perception data and adapting trajectories autonomously to changing conditions in the field.
                    </p>
</div>

<div className="group glass-card rounded-2xl p-6 hover:bg-neutral-800/40 transition-colors duration-500 relative">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
<span className="font-mono text-sm text-white">04</span>
</div>
<h3 className="text-xl font-medium text-white mb-3">Continuous Feedback</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Operators receive live mission updates and actionable insights, from initial detection to final operational reporting.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-32">
<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Core Technology</h2>
<p className="text-xl text-neutral-400 font-light max-w-2xl">Built on a foundation of distributed intelligence and safe-by-design principles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="message-square-text"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Voice &amp; Chat Interface</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Launch and control missions using natural language through voice or text, without complex configuration or training.
                        </p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="cpu"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">AI-Powered Decision Making</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Advanced AI converts human intent into executable mission logic, handling planning, prioritization, and adaptation autonomously.
                        </p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="network"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Collaborative Execution</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Multi-agent coordination enables obstacle avoidance, redundancy, and real-time decision sharing across the drone fleet.
                        </p>
</div>
</div>

<div className="glass-card rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start hover:border-white/20 transition-colors group">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="layers"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Compatibility</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                            Designed to integrate with leading drone platforms and operate under real-world constraints such as battery limits and range.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mb-20" id="watch-video">
<div className="glass-card rounded-3xl p-2 md:p-3 overflow-hidden bg-neutral-900">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-neutral-950">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/z3pA7QZ-B8c?si=Rj3k9XqXqXqXqXqX&amp;rel=0&amp;controls=1&amp;showinfo=0&amp;modestbranding=1" title="Voice Control – Farness">
</iframe>

<div className="absolute top-6 left-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2 flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<div>
<p className="text-xs font-medium text-white tracking-wide">Voice Control – Farness</p>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest">Farness AI</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12">
<a className="group inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-full text-sm font-medium transition-all" href="#">
<span>Explore Use Cases</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black pt-20 pb-10 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<h3 className="text-2xl font-medium text-white mb-6">Ready to Deploy<br/>Autonomous Intelligence?</h3>
<a className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">
                        Request a Demo
                    </a>
</div>
<div className="flex flex-col md:items-end justify-between">
<div className="flex gap-6 mb-8 md:mb-0">

<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
</div>
</div>
</div>

<div className="relative border-t border-white/5 pt-10">
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 mb-12 gap-4">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
<div>
                        © 2024 Farness . All rights reserved.
                    </div>
</div>
<div className="w-full text-center md:text-left select-none pointer-events-none">
<span className="block text-[15vw] leading-none tracking-tighter font-semibold text-white/90">
                        Farness<span className="text-2xl align-top ml-2 relative top-8 md:top-16">©</span>
</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
