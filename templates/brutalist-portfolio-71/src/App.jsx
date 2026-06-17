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



        // Theme Toggle Logic
        const toggle = document.getElementById('theme-toggle');
        const body = document.body;

        // Check for saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemTheme)) {
            body.classList.add('dark-mode');
            toggle.checked = true;
        }

        toggle.addEventListener('change', () => {
            if (toggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
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
      
<div className="grain"></div>

<nav className="fixed top-0 left-0 w-full z-40 theme-bg-page border-b-2 theme-border transition-theme">
<div className="flex justify-between items-stretch h-16">
<a className="flex items-center px-6 border-r-2 theme-border bg-lime-400 hover:bg-lime-300 transition-colors group text-black" href="#">
<span className="iconify text-2xl group-hover:rotate-90 transition-transform duration-300" data-icon="lucide:box" data-strokeWidth="1.5"></span>
<span className="ml-3 font-mono text-sm tracking-tight font-semibold">NEO//RAW</span>
</a>
<div className="hidden md:flex flex-1 items-center justify-end">
<a className="h-full flex items-center px-8 border-l-2 theme-border font-mono text-xs uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors" href="#">Manifesto</a>
<a className="h-full flex items-center px-8 border-l-2 theme-border font-mono text-xs uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors" href="#">Grid</a>
<a className="h-full flex items-center px-8 border-l-2 theme-border font-mono text-xs uppercase hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors" href="#">Components</a>
</div>
<button className="flex md:hidden items-center px-6 border-l-2 theme-border hover:bg-[var(--text-main)] hover:text-[var(--bg-page)]">
<span className="iconify text-xl" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 md:px-12 border-b-2 theme-border theme-bg-page transition-theme">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 mb-4">
<span className="inline-block w-3 h-3 bg-lime-400 border theme-border shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,1)]"></span>
<span className="font-mono text-xs uppercase tracking-widest text-neutral-500">System v2.0.4</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.85] uppercase">
                    Function <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-lime-300 decoration-clone" style={{WebkitTextStroke: '2px var(--border-main)'}}>Over</span> <br/>
                    Form.
                </h1>
<div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
<p className="max-w-md font-mono text-sm leading-relaxed border-l-2 theme-border pl-4">
                        We reject the soft shadows and rounded corners of the modern web. We embrace the grid, the border, and the raw pixel.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="group relative px-8 py-4 bg-[var(--text-main)] text-[var(--bg-page)] font-mono text-sm uppercase border-2 theme-border shadow-hard transition-all shadow-hard-hover shadow-hard-active">
<span className="relative z-10 flex items-center gap-2">
                                Start Building
                                <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</span>
</button>
<button className="group px-8 py-4 bg-transparent text-[var(--text-main)] font-mono text-sm uppercase border-2 theme-border hover:bg-lime-400 hover:text-black hover:border-black transition-colors">
                            Documentation
                        </button>
</div>
</div>
</div>
</div>

<div className="absolute top-32 right-12 hidden lg:block">
<span className="iconify text-9xl opacity-5 rotate-12" data-icon="lucide:cpu" data-strokeWidth="1.5"></span>
</div>
</header>

<div className="w-full border-b-2 theme-border overflow-hidden bg-lime-400 py-3 text-black">
<div className="whitespace-nowrap animate-marquee flex gap-8">
<span className="text-xl font-bold uppercase tracking-tight flex items-center gap-8">
                Raw Aesthetics <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                High Contrast <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Grid Systems <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                No Compromise <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Raw Aesthetics <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                High Contrast <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Grid Systems <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                No Compromise <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
</span>
<span className="text-xl font-bold uppercase tracking-tight flex items-center gap-8">
                Raw Aesthetics <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                High Contrast <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Grid Systems <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                No Compromise <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Raw Aesthetics <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                High Contrast <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                Grid Systems <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
                No Compromise <span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5"></span>
</span>
</div>
</div>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b-2 theme-border transition-theme">

<div className="group relative border-b-2 md:border-b-0 md:border-r-2 theme-border p-8 md:p-12 hover:bg-[var(--bg-card)] transition-colors">
<div className="absolute top-4 right-4 font-mono text-xs border theme-border px-1 rounded-none bg-lime-400 text-black">01</div>
<div className="mb-8">
<span className="iconify text-4xl mb-4" data-icon="lucide:layout-grid" data-strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Rigid Structure</h3>
<p className="font-mono text-xs text-neutral-500 leading-relaxed">
                    Pixels are square. Layouts should be too. Embrace the constraints of the viewport.
                </p>
</div>
<div className="w-full h-24 border-2 theme-border theme-bg-page group-hover:shadow-hard transition-all relative overflow-hidden">
<div className="absolute inset-0 grid grid-cols-4 gap-0 divide-x-2 divide-[var(--border-main)]">
<div></div><div></div><div></div><div></div>
</div>
</div>
</div>

<div className="group relative border-b-2 md:border-b-0 lg:border-r-2 theme-border p-8 md:p-12 hover:bg-[var(--bg-card)] transition-colors">
<div className="absolute top-4 right-4 font-mono text-xs border theme-border px-1 rounded-none text-[var(--text-main)]">02</div>
<div className="mb-8">
<span className="iconify text-4xl mb-4" data-icon="lucide:type" data-strokeWidth="1.5"></span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Typography</h3>
<p className="font-mono text-xs text-neutral-500 leading-relaxed">
                    Scale is the only tool you need. Make it big, make it readable, make it loud.
                </p>
</div>
<div className="flex items-baseline gap-1">
<span className="text-6xl font-bold leading-none">Aa</span>
<span className="font-mono text-xs">JetBrains Mono</span>
</div>
</div>

<div className="group relative p-8 md:p-12 bg-black text-white dark:bg-neutral-800">
<div className="absolute top-4 right-4 font-mono text-xs border border-white px-1 rounded-none">03</div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Interact</h3>
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="space-y-2">
<label className="font-mono text-xs uppercase text-neutral-400">Email Address</label>
<input className="w-full bg-transparent border-b-2 border-neutral-600 py-2 text-sm font-mono focus:outline-none focus:border-lime-400 placeholder-neutral-700 text-white transition-colors" placeholder="user@local.host" type="email"/>
</div>

<label className="flex items-center gap-3 cursor-pointer group/check">
<div className="relative w-5 h-5 border-2 border-white flex items-center justify-center transition-colors group-hover/check:border-lime-400">
<input className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" type="checkbox"/>
<span className="iconify text-lime-400 opacity-0 peer-checked:opacity-100 transition-opacity" data-icon="lucide:check" data-strokeWidth="2"></span>
</div>
<span className="font-mono text-xs uppercase select-none group-hover/check:text-lime-400">Confirm Protocol</span>
</label>

<div className="space-y-2 pt-2">
<div className="flex justify-between font-mono text-xs text-neutral-400">
<span>INTENSITY</span>
<span>100%</span>
</div>
<input className="w-full h-2 bg-neutral-800 appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-lime-400 [&amp;::-webkit-slider-thumb]:border-2 [&amp;::-webkit-slider-thumb]:border-white" type="range"/>
</div>
</form>
</div>
</section>

<section className="flex flex-col lg:flex-row border-b-2 theme-border min-h-[500px] transition-theme">

<div className="w-full lg:w-1/2 bg-neutral-200 border-b-2 lg:border-b-0 lg:border-r-2 theme-border relative overflow-hidden group">
<img alt="Brutalist Architecture" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-lime-400 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 theme-bg-card border-t-2 border-r-2 theme-border">
<span className="font-mono text-xs">FIGURE_01.JPG</span>
</div>
</div>

<div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center theme-bg-page transition-theme">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-[0.9]">
                STRIP IT <br/>
                DOWN TO <br/>
                THE WIRE.
            </h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="min-w-[2rem] pt-1 font-mono text-xs text-neutral-400">01</div>
<div>
<h4 className="font-bold text-lg mb-1">Raw Materials</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                            Show the underlying structure. Expose the grid lines. Let the content dictate the form.
                        </p>
</div>
</div>
<div className="w-full h-px bg-neutral-300 dark:bg-neutral-800"></div>
<div className="flex items-start gap-4">
<div className="min-w-[2rem] pt-1 font-mono text-xs text-neutral-400">02</div>
<div>
<h4 className="font-bold text-lg mb-1">Visual Hierarchy</h4>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                            Use size and weight to guide the eye. Color is a utility, not a decoration.
                        </p>
</div>
</div>
</div>
<div className="mt-12">

<label className="inline-flex items-center cursor-pointer group">
<input className="sr-only peer" id="theme-toggle" type="checkbox"/>
<div className="relative w-14 h-8 bg-neutral-200 border-2 theme-border peer-focus:outline-none transition-colors peer-checked:bg-[var(--text-main)]">
<div className="absolute top-[2px] left-[2px] bg-[var(--bg-card)] border-2 theme-border h-[24px] w-[24px] transition-all peer-checked:translate-x-full peer-checked:border-[var(--bg-page)] peer-checked:bg-lime-400"></div>
</div>
<span className="ml-3 font-mono text-xs uppercase font-medium">Dark Mode (Beta)</span>
</label>
</div>
</div>
</section>

<footer className="theme-bg-card theme-text-main py-16 px-4 md:px-12 transition-theme">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="iconify text-3xl" data-icon="lucide:box" data-strokeWidth="1.5"></span>
<span className="font-bold text-2xl tracking-tighter">NEO//RAW</span>
</a>
<p className="font-mono text-xs max-w-xs text-neutral-500">
                        Designed for the bold. Built for the web. <br/>
                        © 2024 Systems Inc. No rights reserved. Copy this.
                    </p>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-neutral-500 mb-6">Directory</h4>
<ul className="space-y-3 font-medium text-sm">
<li><a className="hover:bg-lime-400 hover:text-black hover:px-2 transition-all duration-200 inline-block -ml-2 p-2" href="#">Index</a></li>
<li><a className="hover:bg-lime-400 hover:text-black hover:px-2 transition-all duration-200 inline-block -ml-2 p-2" href="#">Work</a></li>
<li><a className="hover:bg-lime-400 hover:text-black hover:px-2 transition-all duration-200 inline-block -ml-2 p-2" href="#">Studio</a></li>
<li><a className="hover:bg-lime-400 hover:text-black hover:px-2 transition-all duration-200 inline-block -ml-2 p-2" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase text-neutral-500 mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border-2 theme-border flex items-center justify-center hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]" href="#">
<span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5"></span>
</a>
<a className="w-10 h-10 border-2 theme-border flex items-center justify-center hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]" href="#">
<span className="iconify" data-icon="lucide:github" data-strokeWidth="1.5"></span>
</a>
<a className="w-10 h-10 border-2 theme-border flex items-center justify-center hover:bg-[var(--text-main)] hover:text-[var(--bg-page)] transition-colors shadow-hard hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]" href="#">
<span className="iconify" data-icon="lucide:dribbble" data-strokeWidth="1.5"></span>
</a>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t-2 theme-border flex flex-col md:flex-row justify-between items-center gap-4">
<h1 className="text-[12vw] md:text-[10vw] leading-none font-bold text-neutral-200 dark:text-neutral-800 select-none tracking-tighter transition-colors">
                    BRUTAFUL
                </h1>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="font-mono text-xs">All Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
