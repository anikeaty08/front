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
        lucide.createIcons({
            attrs: {
                class: "w-5 h-5",
                "stroke-width": 1.5
            }
        });

        // Time Update
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('time').textContent = timeString;
        }
        updateTime();
        setInterval(updateTime, 60000);

        // Spotlight Effect Logic
        const container = document.getElementById('cards-container');
        
        container.onmousemove = e => {
            for(const card of document.getElementsByClassName("spotlight-card")) {
                const rect = card.getBoundingClientRect(),
                      x = e.clientX - rect.left,
                      y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
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
      
<div className="ambient-light"></div>
<div className="fixed inset-0 bg-grid z-[-1] pointer-events-none h-[80vh]"></div>

<nav className="fixed top-6 z-50 animate-fade-up">
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex items-center gap-6 shadow-2xl shadow-black/20">
<a className="text-white text-xs font-semibold tracking-tighter hover:text-neutral-300 transition-colors" href="#">
                AYAT
            </a>
<span className="w-[1px] h-3 bg-white/10"></span>
<div className="flex gap-5">
<a className="text-[11px] font-medium tracking-wide uppercase hover:text-white transition-colors" href="#work">Work</a>
<a className="text-[11px] font-medium tracking-wide uppercase hover:text-white transition-colors" href="#about">About</a>
<a className="text-[11px] font-medium tracking-wide uppercase hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</nav>

<main className="w-full max-w-4xl px-6 mt-40 pb-32 space-y-32">

<section className="space-y-8 relative">
<div className="space-y-4 max-w-2xl animate-fade-up delay-1">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[11px] font-medium text-neutral-300 backdrop-blur-md mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Available for new projects
                </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                    Crafting digital <br/>
<span className="text-gradient">perfection.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-light">
                    Software Engineer with a passion for details. I build accessible, pixel-perfect, and performant web interfaces that blend art with code.
                </p>
</div>
<div className="flex flex-wrap gap-4 pt-2 animate-fade-up delay-2">
<a className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-all hover:pr-4 hover:pl-6" href="#contact">
<span>Let's talk</span>
<i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/10 bg-white/5 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm" href="https://github.com/ayataliev" target="_blank">
<i className="w-4 h-4" data-lucide="github"></i>
<span>GitHub</span>
</a>
</div>
</section>

<section className="space-y-12 animate-fade-up delay-3" id="work">
<h2 className="text-xs font-semibold text-white tracking-widest uppercase opacity-60 ml-1">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-6 gap-4" id="cards-container">

<a className="spotlight-card group md:col-span-4 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between h-[340px]" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="h-12 w-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div className="text-neutral-500 group-hover:text-emerald-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="relative z-10 space-y-2">
<h3 className="text-2xl text-white font-medium tracking-tight">Finance Dashboard</h3>
<p className="text-neutral-400 font-light max-w-md">
                            Real-time data visualization platform with sub-millisecond updates and optimistic UI rendering.
                        </p>
<div className="flex gap-2 pt-2">
<span className="text-[10px] font-medium border border-white/10 bg-white/5 px-2 py-1 rounded text-neutral-300">React</span>
<span className="text-[10px] font-medium border border-white/10 bg-white/5 px-2 py-1 rounded text-neutral-300">D3.js</span>
</div>
</div>
</a>

<a className="spotlight-card group md:col-span-2 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between h-[340px]" href="#">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-blue-500/5 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="h-12 w-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)] backdrop-blur-md">
<i className="w-6 h-6" data-lucide="box"></i>
</div>
</div>
<div className="relative z-10 space-y-2">
<h3 className="text-xl text-white font-medium tracking-tight">SaaS Kit</h3>
<p className="text-sm text-neutral-400 font-light">
                            Production-ready Next.js boilerplate with auth &amp; payments.
                        </p>
<div className="flex gap-2 pt-1">
<span className="text-[10px] font-medium border border-white/10 bg-white/5 px-2 py-1 rounded text-neutral-300">Next.js</span>
</div>
</div>
</a>

<a className="spotlight-card group md:col-span-3 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between h-[280px]" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-purple-500/5 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="h-12 w-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.1)] backdrop-blur-md">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<div className="text-neutral-500 group-hover:text-purple-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="relative z-10 space-y-2">
<h3 className="text-xl text-white font-medium tracking-tight">Global API Gateway</h3>
<p className="text-sm text-neutral-400 font-light">
                            High-performance edge network handling 1M+ daily requests.
                        </p>
</div>
</a>

<a className="spotlight-card group md:col-span-3 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between h-[280px]" href="#">
<div className="absolute inset-0 bg-gradient-to-tl from-amber-500/10 via-amber-500/5 to-transparent z-0 transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
<div className="relative z-10 flex justify-between items-start">
<div className="h-12 w-12 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)] backdrop-blur-md">
<i className="w-6 h-6" data-lucide="command"></i>
</div>
<div className="text-neutral-500 group-hover:text-amber-400 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="relative z-10 space-y-2">
<h3 className="text-xl text-white font-medium tracking-tight">Command Palette</h3>
<p className="text-sm text-neutral-400 font-light">
                            Accessible, fuzzy-search enabled command menu for React apps.
                        </p>
</div>
</a>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-16" id="about">
<div className="space-y-8">
<h2 className="text-xs font-semibold text-white tracking-widest uppercase opacity-60">Experience</h2>
<div className="space-y-6 relative border-l border-white/10 ml-2 pl-8">

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-700"></span>
<h4 className="text-white font-medium text-base">Senior Frontend Engineer</h4>
<div className="flex justify-between items-baseline mt-1">
<span className="text-sm text-neutral-400">TechCorp Inc.</span>
<span className="text-xs text-neutral-600 font-mono">2021 — Present</span>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-800"></span>
<h4 className="text-white font-medium text-base">Software Developer</h4>
<div className="flex justify-between items-baseline mt-1">
<span className="text-sm text-neutral-400">Startup Studio</span>
<span className="text-xs text-neutral-600 font-mono">2019 — 2021</span>
</div>
</div>

<div className="relative">
<span className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border-2 border-neutral-900 bg-neutral-800"></span>
<h4 className="text-white font-medium text-base">Freelance Engineer</h4>
<div className="flex justify-between items-baseline mt-1">
<span className="text-sm text-neutral-400">Self Employed</span>
<span className="text-xs text-neutral-600 font-mono">2017 — 2019</span>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-xs font-semibold text-white tracking-widest uppercase opacity-60">Tech Stack</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="code-2"></i>
<span className="text-sm text-neutral-300">TypeScript</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="layout-template"></i>
<span className="text-sm text-neutral-300">React / Next.js</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="server"></i>
<span className="text-sm text-neutral-300">Node.js</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="database"></i>
<span className="text-sm text-neutral-300">PostgreSQL</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="cloud"></i>
<span className="text-sm text-neutral-300">AWS</span>
</div>
<div className="bg-white/5 border border-white/5 rounded-lg p-3 flex items-center gap-3">
<i className="w-4 h-4 text-white" data-lucide="figma"></i>
<span className="text-sm text-neutral-300">Figma</span>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10 pt-16 pb-8" id="contact">
<div className="rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight relative z-10">Ready to build together?</h2>
<p className="text-neutral-400 max-w-lg mx-auto font-light relative z-10">
                    Currently available for freelance projects and open to new full-time opportunities.
                </p>
<div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-full hover:scale-105 transition-transform" href="mailto:hello@ayataliev.com">
                        Say Hello
                    </a>
<div className="flex gap-2">
<a className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors" href="https://github.com/ayataliev">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="p-3 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</div>
<div className="mt-16 flex justify-between items-center text-[10px] text-neutral-600 uppercase tracking-wider font-medium">
<span>© 2024 Ayat Aliev</span>
<span>Local time: <span id="time"></span></span>
</div>
</section>
</main>


    </>
  );
}
