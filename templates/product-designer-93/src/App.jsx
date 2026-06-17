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



        // Icons
        lucide.createIcons();

        // Text Splitting Logic for Staggered Animation
        document.addEventListener('DOMContentLoaded', () => {
            const splitTargets = document.querySelectorAll('.split-text');
            
            splitTargets.forEach(target => {
                const text = target.innerText;
                const baseDelay = parseInt(target.getAttribute('data-delay-start') || 0);
                target.innerHTML = '';
                
                [...text].forEach((char, i) => {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.className = 'char';
                    span.style.animationDelay = `${baseDelay + (i * 60)}ms`;
                    target.appendChild(span);
                });
            });
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-medium tracking-tight text-white hover:text-neutral-300 transition-colors" href="#">
                CHAD MOSHIN
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="bg-white/5 hover:bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-full border border-white/10 transition-all" href="mailto:hello@chadmoshin.com">
                Let's Talk
            </a>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-neutral-800/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="absolute inset-0 bg-grid -z-20"></div>
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col gap-8 max-w-5xl">

<div className="flex items-center gap-3 opacity-0 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-neutral-400 tracking-wide uppercase">Available for projects</span>
</div>

<h1 className="text-[60px] md:text-[80px] font-medium tracking-tighter leading-[1] md:leading-[0.95] -ml-1">
<div className="text-white split-text" data-delay-start="0">Designing the next</div>
<div className="text-neutral-500 split-text" data-delay-start="1100">generation of web.</div>
</h1>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed delay-300 opacity-0 animate-fade-in font-light mt-2">
                    I'm Chad Moshin. A 26-year-old product designer and developer based on the East Coast. I craft high-performance interfaces specifically for the modern web ecosystem.
                </p>
<div className="flex items-center gap-4 mt-4 delay-300 opacity-0 animate-fade-in">
<button className="group flex items-center gap-2 bg-neutral-100 text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-white transition-all">
                        View Projects
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-neutral-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
                        Resume
                    </button>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-neutral-900/30 backdrop-blur-sm overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex w-[200%] animate-infinite-scroll">

<div className="flex items-center justify-around w-1/2 gap-16 px-8">

<svg className="h-8 w-auto text-neutral-500 fill-current" viewbox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><mask height="180" id="mask0_408_134" maskunits="userSpaceOnUse" style={{maskType: 'alpha'}} width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90" stroke="currentColor" strokeWidth="6"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor"></path><rect fill="currentColor" height="72" width="12" x="115" y="54"></rect></g></svg>

<svg className="h-6 w-auto text-neutral-500 fill-current" viewbox="0 0 54 33" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"></path></g></svg>

<svg className="h-7 w-auto text-neutral-500 fill-current" viewbox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" fill="currentColor" r="2.05"></circle><g fill="none" stroke="currentColor" strokeWidth="1"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>

<svg className="h-8 w-auto text-neutral-500 fill-current" viewbox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"></path><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"></path><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"></path><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"></path><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"></path></svg>

<svg className="h-7 w-auto text-neutral-500 fill-current" viewbox="0 0 128 128"><path d="M2 64C2 29.758 29.758 2 64 2S126 29.758 126 64S98.242 126 64 126S2 98.242 2 64ZM74.5 56.5V64.75H82.25V97H90.5V64.75H98.25V56.5H74.5ZM43 85C45.25 87.25 48.25 88 51.25 88C55 88 57.25 86.5 57.25 83.5C57.25 80.5 55 78.25 51.25 78.25H47.5C41.5 78.25 37 73.75 37 67.75C37 61.75 41.5 57.25 47.5 57.25C51.25 57.25 55.75 58 58 59.5L55.75 66.25C54.25 65.5 51.25 64.75 48.25 64.75C45.25 64.75 43.75 66.25 43.75 68.5C43.75 70.75 45.25 72.25 48.25 72.25H52.75C58 72.25 64 76.75 64 82.75C64 88.75 59.5 94 51.25 94C45.25 94 40.75 92.5 37.75 90.25L43 85Z"></path></svg>

<svg className="h-6 w-auto text-neutral-500 fill-current" viewbox="0 0 1155 1000" xmlns="http://www.w3.org/2000/svg"><path d="M577.344 0L1154.69 1000H0L577.344 0Z"></path></svg>
</div>

<div className="flex items-center justify-around w-1/2 gap-16 px-8">
<svg className="h-8 w-auto text-neutral-500 fill-current" viewbox="0 0 180 180" xmlns="http://www.w3.org/2000/svg"><mask height="180" id="mask0_408_134_2" maskunits="userSpaceOnUse" style={{maskType: 'alpha'}} width="180" x="0" y="0"><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#mask0_408_134_2)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90" stroke="currentColor" strokeWidth="6"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="currentColor"></path><rect fill="currentColor" height="72" width="12" x="115" y="54"></rect></g></svg>
<svg className="h-6 w-auto text-neutral-500 fill-current" viewbox="0 0 54 33" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"></path></g></svg>
<svg className="h-7 w-auto text-neutral-500 fill-current" viewbox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" fill="currentColor" r="2.05"></circle><g fill="none" stroke="currentColor" strokeWidth="1"><ellipse rx="11" ry="4.2"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse><ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse></g></svg>
<svg className="h-8 w-auto text-neutral-500 fill-current" viewbox="0 0 38 57" xmlns="http://www.w3.org/2000/svg"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z"></path><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0Z"></path><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19Z"></path><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"></path><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"></path></svg>
<svg className="h-7 w-auto text-neutral-500 fill-current" viewbox="0 0 128 128"><path d="M2 64C2 29.758 29.758 2 64 2S126 29.758 126 64S98.242 126 64 126S2 98.242 2 64ZM74.5 56.5V64.75H82.25V97H90.5V64.75H98.25V56.5H74.5ZM43 85C45.25 87.25 48.25 88 51.25 88C55 88 57.25 86.5 57.25 83.5C57.25 80.5 55 78.25 51.25 78.25H47.5C41.5 78.25 37 73.75 37 67.75C37 61.75 41.5 57.25 47.5 57.25C51.25 57.25 55.75 58 58 59.5L55.75 66.25C54.25 65.5 51.25 64.75 48.25 64.75C45.25 64.75 43.75 66.25 43.75 68.5C43.75 70.75 45.25 72.25 48.25 72.25H52.75C58 72.25 64 76.75 64 82.75C64 88.75 59.5 94 51.25 94C45.25 94 40.75 92.5 37.75 90.25L43 85Z"></path></svg>
<svg className="h-6 w-auto text-neutral-500 fill-current" viewbox="0 0 1155 1000" xmlns="http://www.w3.org/2000/svg"><path d="M577.344 0L1154.69 1000H0L577.344 0Z"></path></svg>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="work">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 tracking-tight">Selected Work</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start mb-24">
<div className="p-3 bg-neutral-800/50 rounded-lg border border-white/5">
<i className="w-6 h-6 text-neutral-300" data-lucide="layers"></i>
</div>
<span className="text-xs font-mono text-neutral-500">2023</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Nexus Design System</h3>
<p className="text-sm text-neutral-400 max-w-sm">A comprehensive component library built for scale. Scalable, accessible, and themeable.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="p-3 bg-neutral-800/50 rounded-lg border border-white/5">
<i className="w-6 h-6 text-neutral-300" data-lucide="zap"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Bolt AI Wrapper</h3>
<p className="text-xs text-neutral-400">High performance interface for LLMs using Next.js stream.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start mb-12">
<div className="p-3 bg-neutral-800/50 rounded-lg border border-white/5">
<i className="w-6 h-6 text-neutral-300" data-lucide="activity"></i>
</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">FinTech Dash</h3>
<p className="text-xs text-neutral-400">Real-time financial data visualization dashboard.</p>
</div>
</div>
</div>

<div className="lg:col-span-2 group relative rounded-xl border border-white/10 bg-neutral-900/50 overflow-hidden hover:border-white/20 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start mb-24">
<div className="p-3 bg-neutral-800/50 rounded-lg border border-white/5">
<i className="w-6 h-6 text-neutral-300" data-lucide="globe"></i>
</div>
<span className="text-xs font-mono text-neutral-500">2024</span>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Global Commerce</h3>
<p className="text-sm text-neutral-400 max-w-sm">Headless e-commerce solution serving millions of requests daily.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-2xl font-medium text-white mb-6 tracking-tight">Philosophy</h2>
<div className="space-y-6 text-neutral-400 leading-relaxed font-light">
<p>
                        I believe software should feel invisible. Good design isn't just about how it looks, but how it works and how it makes the user feel. 
                    </p>
<p>
                        Based on the East Coast, I've spent the last 5 years refining a process that blends technical engineering with intuitive design. My focus is on the React ecosystem, specifically leveraging Vercel and Tailwind to ship products faster without compromising quality.
                    </p>
</div>
<div className="mt-8 flex gap-4 text-sm font-medium text-neutral-300">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="map-pin"></i>
                        East Coast, USA
                    </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-500" data-lucide="user"></i>
                        26 Years Old
                    </div>
</div>
</div>
<div>
<h2 className="text-2xl font-medium text-white mb-6 tracking-tight">Stack</h2>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500" data-lucide="layout"></i>
<span className="text-sm font-medium">User Interface</span>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500" data-lucide="code-2"></i>
<span className="text-sm font-medium">Frontend Dev</span>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500" data-lucide="cpu"></i>
<span className="text-sm font-medium">System Arch</span>
</div>
<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] flex items-center gap-3">
<i className="w-5 h-5 text-neutral-500" data-lucide="box"></i>
<span className="text-sm font-medium">3D / WebGL</span>
</div>
</div>
<div className="mt-8">
<div className="text-xs font-mono text-neutral-500 mb-4 uppercase tracking-widest">Preferences</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">Next.js 14</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">React Server Components</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">TypeScript</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">Tailwind</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">Framer Motion</span>
<span className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400">Postgres</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent -z-10"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-6">Ready to collaborate?</h2>
<p className="text-neutral-400 mb-10 max-w-md mx-auto">Currently available for select freelance opportunities and consulting.</p>
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-colors" href="mailto:hello@chadmoshin.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                hello@chadmoshin.com
            </a>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Chad Moshin. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-neutral-400 transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
