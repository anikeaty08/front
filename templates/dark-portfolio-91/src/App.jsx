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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="noise-bg"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[100px] rounded-full pointer-events-none z-0 bg-slate-800/20" style={{}}></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-24 flex flex-col gap-20">

<header className="flex justify-between items-start animate-[fadeIn_1s_ease-out]">
<div className="flex flex-col gap-1">
<a className="text-lg font-semibold tracking-tighter hover:opacity-80 transition-opacity text-white" href="#">JARIN.CZ</a>
<span className="text-xs font-mono text-slate-500" style={{}}>PRAGUE, CZ</span>
</div>
<nav className="flex gap-6 text-sm font-mono text-slate-400" style={{}}>
<a className="transition-colors relative group hover:text-white" href="#work">
                    WORK
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all group-hover:w-full bg-white"></span>
</a>
<a className="transition-colors relative group hover:text-white" href="#about">
                    ABOUT
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all group-hover:w-full bg-white"></span>
</a>
<a className="transition-colors relative group hover:text-white" href="mailto:hello@jarin.cz">
                    CONTACT
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] transition-all group-hover:w-full bg-white"></span>
</a>
</nav>
</header>

<main className="flex flex-col gap-8">
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-light tracking-tight text-white">
                Product Designer &amp;<br/>
<span className="text-slate-500" style={{}}>Developer crafting</span><br/>
                digital experiences.
            </h1>
<p className="max-w-md text-sm md:text-base leading-relaxed font-light text-slate-400" style={{}}>
                Specializing in building high-quality websites and applications with a focus on interaction, motion, and visual precision.
            </p>
<div className="flex gap-4 pt-4">
<a className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-[1.02] bg-slate-100 text-black hover:bg-white" href="#work" style={{}}>
<span>View Projects</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group flex items-center gap-2 px-5 py-2.5 border backdrop-blur-sm rounded-full text-sm font-medium transition-all border-slate-800 bg-slate-900/50 text-slate-300 hover:border-slate-600 hover:text-white" href="#" style={{}}>
<span>Copy Email</span>
<iconify-icon icon="solar:copy-linear" width="16"></iconify-icon>
</a>
</div>
</main>

<hr className="border-t border-slate-900" style={{}}/>

<section className="flex flex-col gap-8" id="work">
<div className="flex justify-between items-end">
<h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest" style={{}}>Selected Work</h2>
<span className="text-xs font-mono text-slate-600" style={{}}>2021 — 2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<a className="group relative col-span-1 md:col-span-2 h-[320px] rounded-2xl overflow-hidden border transition-all duration-500 border-slate-800 bg-slate-900/40 hover:border-slate-700" href="#" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br via-transparent z-10 from-slate-800/10 to-black/80" style={{}}></div>

<div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity duration-700">
<div className="w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full group-hover:bg-cyan-400/30 transition-all" style={{}}></div>
<div className="w-48 h-48 bg-green-500/20 blur-[60px] rounded-full absolute translate-x-12 -translate-y-8"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 flex justify-between items-end">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-white">Fintech Dashboard</h3>
<p className="text-sm text-slate-400" style={{}}>Product Design, Frontend Architecture</p>
</div>
<div className="w-10 h-10 rounded-full border flex items-center justify-center backdrop-blur-md group-hover:bg-white group-hover:text-black transition-all border-white/20 bg-white/5">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</a>

<a className="group relative h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 border-slate-800 bg-slate-900/40 hover:border-slate-700" href="#" style={{}}>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
<div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-transparent from-slate-700/20 via-slate-900" style={{}}></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-lg font-medium tracking-tight mb-1 text-white">Vercel Integration</h3>
<p className="text-slate-500 text-xs font-mono" style={{}}>DEVELOPER TOOLS</p>
</div>
<div className="absolute top-6 right-6 w-8 h-8 rounded-full border flex items-center justify-center group-hover:text-white transition-colors border-white/10 text-slate-400" style={{}}>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative h-[280px] rounded-2xl overflow-hidden border transition-all duration-500 border-slate-800 bg-slate-900/40 hover:border-slate-700" href="#" style={{}}>
<div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">

<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20">
<h3 className="text-lg font-medium tracking-tight mb-1 text-white">Design System</h3>
<p className="text-slate-500 text-xs font-mono" style={{}}>UI LIBRARY</p>
</div>
<div className="absolute top-6 right-6 w-8 h-8 rounded-full border flex items-center justify-center group-hover:text-white transition-colors border-white/10 text-slate-400" style={{}}>
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-slate-900" id="about" style={{}}>
<div className="md:col-span-1">
<h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest sticky top-24" style={{}}>Stack &amp; Tools</h2>
</div>
<div className="md:col-span-2 flex flex-col gap-10">

<div className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-4">
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:code-circle-linear" style={{}} width="20"></iconify-icon>
                        React / Next.js
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:paint-palette-linear" style={{}} width="20"></iconify-icon>
                        Tailwind CSS
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:figma-file-linear" style={{}} width="20"></iconify-icon>
                        Figma
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:server-square-linear" style={{}} width="20"></iconify-icon>
                        Node.js
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:database-linear" style={{}} width="20"></iconify-icon>
                        PostgreSQL
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300" style={{}}>
<iconify-icon className="text-slate-500" icon="solar:layers-minimalistic-linear" style={{}} width="20"></iconify-icon>
                        Three.js
                    </div>
</div>
<div className="space-y-6">
<p className="text-sm leading-relaxed font-light text-slate-400" style={{}}>
                        My approach combines technical precision with artistic direction. I believe the best digital products feel invisible—they just work, with a subtle layer of delight that makes them memorable.
                    </p>
</div>
</div>
</section>

<section className="py-20 flex flex-col items-center justify-center gap-8 text-center border-t mt-12 relative overflow-hidden rounded-3xl border border-slate-900 bg-slate-900/20 border-slate-800/50" style={{}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] blur-[80px] rounded-full pointer-events-none bg-slate-800/20" style={{}}></div>
<div className="relative z-10 flex flex-col items-center gap-6">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">Let's build somethingexceptional.</h2>
<div className="flex gap-4">
<a className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-colors bg-white text-black hover:bg-slate-200" href="mailto:hello@jarin.cz" style={{}}>
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
                        Say Hello
                    </a>
<a className="flex items-center gap-2 px-6 py-3 border rounded-lg text-sm font-medium transition-all border-slate-800 bg-black/50 text-slate-300 hover:border-slate-600 hover:text-white" href="#" style={{}}>
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
                        Schedule Call
                    </a>
</div>
</div>
</section>
<footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono pt-8 pb-4 text-slate-600" style={{}}>
<div>
                © 2024 JARIN PLACHÝ.
            </div>
<div className="flex gap-6">
<a className="transition-colors hover:text-slate-400" href="#" style={{}}>TWITTER / X</a>
<a className="transition-colors hover:text-slate-400" href="#" style={{}}>GITHUB</a>
<a className="transition-colors hover:text-slate-400" href="#" style={{}}>LINKEDIN</a>
</div>
</footer>
</div>

    </>
  );
}
