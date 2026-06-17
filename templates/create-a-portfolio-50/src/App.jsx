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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}

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
      
<div className="bg-noise"></div>

<div className="fixed top-[-20%] left-[20%] w-[500px] h-[500px] bg-white/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter text-white hover:opacity-80 transition-opacity uppercase" href="#">
                SHOVON<span className="text-neutral-600">MALLICK</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#stack">Stack</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="text-neutral-400 hover:text-white transition-colors" href="https://github.com">
<span className="iconify text-lg" data-icon="lucide:github"></span>
</a>
<button className="md:hidden text-neutral-400">
<span className="iconify text-xl" data-icon="lucide:menu"></span>
</button>
</div>
</div>
</nav>
<main className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-20">

<section className="flex flex-col items-start gap-8 mb-40 opacity-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider font-medium text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-slow"></span>
                Open for collaboration
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.05] max-w-3xl">
                Engineering <br/>
<span className="text-neutral-600">polished interfaces.</span>
</h1>
<p className="max-w-xl text-lg text-neutral-400 leading-relaxed font-light">
                I'm Shovon Mallick, a software engineer specialized in building high-performance web applications with a focus on interaction design and scalability.
            </p>
<div className="flex items-center gap-4 pt-4">
<a className="group inline-flex items-center justify-center gap-2 h-10 px-6 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="#work">
                    Explore Work
                    <span className="iconify group-hover:translate-y-0.5 transition-transform" data-icon="lucide:arrow-down"></span>
</a>
<a className="inline-flex items-center justify-center h-10 px-6 rounded border border-white/10 bg-transparent text-neutral-300 text-sm font-medium hover:bg-white/5 transition-all" href="#contact">
                    Contact Me
                </a>
</div>
</section>

<section className="mb-40" id="work">
<div className="flex items-end justify-between mb-10 opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div>
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Selected Projects</h2>
<p className="text-sm text-neutral-500">Highlights from my recent development work.</p>
</div>
<a className="hidden md:flex text-xs text-neutral-500 hover:text-white transition-colors items-center gap-1 group" href="#">
                    View Archive 
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-0 animate-slide-up" style={{animationDelay: '0.3s'}}>

<div className="group relative md:col-span-2 row-span-2 h-[420px] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors cursor-pointer">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950/0 to-transparent"></div>

<div className="absolute top-16 left-8 right-8 bottom-0 bg-[#111] rounded-t-lg border-t border-x border-white/10 shadow-2xl transition-transform duration-500 ease-out group-hover:translate-y-[-10px] group-hover:scale-[1.01] overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700/50"></div>
</div>
</div>

<div className="p-6 grid grid-cols-3 gap-4">
<div className="col-span-1 h-32 rounded bg-white/5 border border-white/5"></div>
<div className="col-span-2 h-32 rounded bg-white/5 border border-white/5 flex flex-col p-4 gap-2">
<div className="w-1/2 h-2 rounded bg-white/10"></div>
<div className="w-3/4 h-2 rounded bg-white/10"></div>
<div className="mt-auto w-full h-12 rounded bg-indigo-500/10 border border-indigo-500/20"></div>
</div>
<div className="col-span-3 h-40 rounded bg-white/5 border border-white/5"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent w-full">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">SAAS</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Nexus Dashboard</h3>
<p className="text-sm text-neutral-400 max-w-sm">A comprehensive analytics platform for real-time data visualization and team management.</p>
</div>
</div>

<div className="group relative h-[200px] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-neutral-950">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.2'}}></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-2xl text-white" data-icon="lucide:layers"></span>
</div>
</div>
<div className="absolute bottom-4 left-5 z-20">
<h3 className="text-base font-medium text-white">Stack UI</h3>
<p className="text-xs text-neutral-500">Component Library</p>
</div>
<div className="absolute top-4 right-4 text-neutral-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-right"></span>
</div>
</div>

<div className="group relative h-[200px] rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/10 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center overflow-hidden">
<div className="w-[120%] h-32 border-t border-white/10 bg-white/5 rotate-[-10deg] translate-y-4 group-hover:translate-y-2 transition-transform duration-500 flex items-center justify-center">
<span className="text-4xl font-mono text-white/5 font-bold tracking-widest">CODE</span>
</div>
</div>
<div className="absolute bottom-4 left-5 z-20">
<h3 className="text-base font-medium text-white">Syntax</h3>
<p className="text-xs text-neutral-500">Dev Tooling</p>
</div>
<div className="absolute top-4 right-4 text-neutral-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-up-right"></span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>

<section className="lg:col-span-7" id="about">
<h2 className="text-lg font-medium text-white tracking-tight mb-8 flex items-center gap-2">
                    Experience
                </h2>
<div className="space-y-8">

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">Senior Frontend Engineer</h3>
<span className="text-xs text-neutral-500 font-mono">2023 — Present</span>
</div>
<div className="text-sm text-neutral-400 mb-3">TechFlow Inc.</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                            Spearheading the migration to Next.js 14 and developing the core design system used across 5 distinct products. Improved load times by 40%.
                        </p>
</div>
<div className="h-px w-full bg-white/5"></div>

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">Software Developer</h3>
<span className="text-xs text-neutral-500 font-mono">2021 — 2023</span>
</div>
<div className="text-sm text-neutral-400 mb-3">Creative Solutions</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                            Built interactive marketing pages for high-profile clients using WebGL and React. Collaborated closely with design teams to ensure pixel-perfect implementation.
                        </p>
</div>
<div className="h-px w-full bg-white/5"></div>

<div className="group">
<div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
<h3 className="text-base font-medium text-white group-hover:text-neutral-200 transition-colors">Frontend Intern</h3>
<span className="text-xs text-neutral-500 font-mono">2020 — 2021</span>
</div>
<div className="text-sm text-neutral-400 mb-3">StartUp Lab</div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-lg">
                            Assisted in the development of the MVP mobile application using React Native.
                        </p>
</div>
</div>
</section>

<section className="lg:col-span-5" id="stack">
<h2 className="text-lg font-medium text-white tracking-tight mb-8">
                    Tech Stack
                </h2>
<div className="grid grid-cols-2 gap-3">

<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/10 transition-all select-none">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-white">
<span className="iconify" data-icon="lucide:zap"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Next.js</div>
<div className="text-[10px] text-neutral-500">Framework</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/10 transition-all select-none">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-blue-400">
<span className="iconify" data-icon="lucide:file-code"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">TypeScript</div>
<div className="text-[10px] text-neutral-500">Language</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/10 transition-all select-none">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-cyan-400">
<span className="iconify" data-icon="lucide:wind"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Tailwind</div>
<div className="text-[10px] text-neutral-500">Styling</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-neutral-900/40 hover:bg-neutral-900 hover:border-white/10 transition-all select-none">
<div className="w-8 h-8 rounded flex items-center justify-center bg-white/5 text-green-400">
<span className="iconify" data-icon="lucide:database"></span>
</div>
<div>
<div className="text-sm font-medium text-neutral-200">Node.js</div>
<div className="text-[10px] text-neutral-500">Backend</div>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-4">Currently Learning</h3>
<div className="flex gap-2">
<span className="px-2.5 py-1 rounded text-xs text-neutral-400 bg-white/5 border border-white/5">Rust</span>
<span className="px-2.5 py-1 rounded text-xs text-neutral-400 bg-white/5 border border-white/5">WebGL</span>
<span className="px-2.5 py-1 rounded text-xs text-neutral-400 bg-white/5 border border-white/5">AI Agents</span>
</div>
</div>
</section>
</div>

<section className="relative rounded-2xl bg-neutral-900 border border-white/5 p-8 md:p-12 overflow-hidden opacity-0 animate-slide-up" id="contact" style={{animationDelay: '0.5s'}}>
<div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
<div className="max-w-lg">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Let's build something extraordinary.</h2>
<p className="text-sm text-neutral-400 mb-8">
                        I'm currently available for freelance projects and open to discussing new full-time opportunities.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors" href="mailto:hello@shovonmallick.dev">
<span className="iconify" data-icon="lucide:mail"></span>
                            Email Me
                        </a>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors">
<span className="iconify" data-icon="lucide:copy"></span>
                            Copy ID
                        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4 w-full md:w-auto">
<a className="flex items-center gap-3 px-4 py-3 rounded bg-neutral-950/50 border border-white/5 hover:border-white/20 transition-all group" href="#">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:twitter"></span>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Twitter</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded bg-neutral-950/50 border border-white/5 hover:border-white/20 transition-all group" href="#">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:linkedin"></span>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">LinkedIn</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded bg-neutral-950/50 border border-white/5 hover:border-white/20 transition-all group" href="#">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:dribbble"></span>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Dribbble</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded bg-neutral-950/50 border border-white/5 hover:border-white/20 transition-all group" href="#">
<span className="iconify text-neutral-400 group-hover:text-white transition-colors" data-icon="lucide:instagram"></span>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Instagram</span>
</a>
</div>
</div>
</section>
</main>
<footer className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-600 border-t border-white/5">
<p>© 2024 Shovon Mallick. All rights reserved.</p>
<div className="flex items-center gap-6">
<span className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
                Systems Operational
            </span>
<span className="text-neutral-700">|</span>
<p>Designed in Code</p>
</div>
</footer>

    </>
  );
}
