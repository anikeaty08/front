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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 -z-10 pointer-events-none"></div>

<header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-white text-zinc-950 flex items-center justify-center text-xs font-semibold">A</div>
                    AGNCY
                </a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Insights</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">Sign in</a>
<a className="bg-white text-zinc-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors" href="#">
                    Start a project
                </a>
</div>
</div>
</header>
<main className="pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pb-40">

<section className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-300">Accepting new clients for Q3</span>
</div>
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tighter leading-[1.1] max-w-4xl mx-auto mb-6">
                Crafting digital products that define industries.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
                We are a specialized design and engineering agency partnering with forward-thinking companies to build exceptional software.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-zinc-950 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#">
                    View our work
                    <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center" href="#">
                    Read our manifesto
                </a>
</div>
</section>

<section className="mt-24 max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl font-semibold tracking-tighter">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter">GLOBAL</span>
<span className="text-xl font-semibold tracking-tighter">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter hidden sm:block">QUANTUM</span>
</div>
</section>

<section className="mt-32 max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-4">End-to-end expertise.</h2>
<p className="text-base text-zinc-400 max-w-xl">From initial concept to final deployment, our specialized teams handle every aspect of digital product creation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group border border-white/5 bg-zinc-900/30 p-8 rounded-3xl hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="24" icon="solar:lightbulb-bolt-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Product Strategy</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">We validate ideas, define roadmaps, and align business goals with user needs to ensure product-market fit.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Market Research
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            User Testing
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Technical Scoping
                        </li>
</ul>
</div>

<div className="group border border-white/5 bg-zinc-900/30 p-8 rounded-3xl hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="24" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Interface Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Crafting intuitive, accessible, and beautiful interfaces that elevate the user experience and brand perception.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Wireframing
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Design Systems
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Prototyping
                        </li>
</ul>
</div>

<div className="group border border-white/5 bg-zinc-900/30 p-8 rounded-3xl hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white" height="24" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Engineering</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Building scalable, performant, and secure architectures using modern technologies and best practices.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Frontend Development
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Backend &amp; APIs
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-500">
<iconify-icon height="14" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                            Cloud Infrastructure
                        </li>
</ul>
</div>
</div>
</section>

<section className="mt-32 max-w-7xl mx-auto px-6">
<div className="border border-white/5 bg-zinc-900/20 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-2xl md:text-4xl font-semibold text-white tracking-tight mb-6">Precision in every pixel.</h2>
<p className="text-base text-zinc-400 leading-relaxed mb-8">
                            We don't just build software; we engineer experiences. Our obsessive attention to detail ensures that every interaction feels natural, snappy, and perfectly aligned with your brand's core values.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
<span className="text-xs font-medium text-white">1</span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Pixel-perfect implementation</h4>
<p className="text-xs text-zinc-500">We bridge the gap between design and code with zero compromises.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
<span className="text-xs font-medium text-white">2</span>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">Performance first</h4>
<p className="text-xs text-zinc-500">Optimized assets and efficient code for lightning-fast load times.</p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-4 bg-zinc-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex-1 flex justify-center">
<div className="h-6 w-32 bg-zinc-800/50 rounded-md border border-white/5"></div>
</div>
</div>

<div className="flex-1 p-6 flex gap-6">

<div className="w-32 flex flex-col gap-3">
<div className="h-4 w-full bg-zinc-800/50 rounded-sm"></div>
<div className="h-4 w-3/4 bg-zinc-800/50 rounded-sm"></div>
<div className="h-4 w-5/6 bg-zinc-800/50 rounded-sm"></div>
<div className="h-4 w-full bg-zinc-800/50 rounded-sm mt-4"></div>
<div className="h-4 w-2/3 bg-zinc-800/50 rounded-sm"></div>
</div>

<div className="flex-1 flex flex-col gap-6">

<div className="h-32 border border-white/5 rounded-xl bg-zinc-900/30 p-4 relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>

<div className="absolute top-4 right-4 w-10 h-5 bg-zinc-800 rounded-full border border-white/10 flex items-center p-0.5 cursor-not-allowed">
<div className="w-4 h-4 bg-zinc-400 rounded-full"></div>
</div>
<div className="h-3 w-24 bg-zinc-700/50 rounded-sm mb-2"></div>
<div className="h-6 w-16 bg-white/80 rounded-sm"></div>
</div>

<div className="flex-1 border border-white/5 rounded-xl bg-zinc-900/30 p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-4 h-4 rounded border border-white/20 bg-zinc-900"></div>
<div className="h-3 w-32 bg-zinc-800 rounded-sm"></div>
</div>
<div className="h-3 w-12 bg-zinc-800 rounded-sm"></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-indigo-500 bg-indigo-500/20 flex items-center justify-center">
<iconify-icon className="text-indigo-400 text-[10px]" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<div className="h-3 w-40 bg-zinc-700 rounded-sm"></div>
</div>
<div className="h-3 w-16 bg-zinc-700 rounded-sm"></div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-white/20 bg-zinc-900"></div>
<div className="h-3 w-28 bg-zinc-800 rounded-sm"></div>
</div>
<div className="h-3 w-14 bg-zinc-800 rounded-sm"></div>
</div>

<div className="mt-auto pt-4 border-t border-white/5">
<div className="flex justify-between mb-2">
<div className="h-2 w-16 bg-zinc-700 rounded-sm"></div>
<div className="h-2 w-8 bg-zinc-700 rounded-sm"></div>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full relative">
<div className="absolute top-0 left-0 h-full w-2/3 bg-indigo-500 rounded-full"></div>
<div className="absolute top-1/2 left-2/3 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow border border-zinc-300"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-32 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Ready to build something great?</h2>
<p className="text-base text-zinc-400 mb-8 max-w-xl mx-auto">Join the dozens of companies that have transformed their digital presence with our dedicated teams.</p>
<a className="inline-flex bg-white text-zinc-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors items-center justify-center gap-2" href="#">
                Get in touch today
                <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded-md bg-white text-zinc-950 flex items-center justify-center text-xs font-semibold">A</div>
                        AGNCY
                    </a>
<p className="text-xs text-zinc-500 max-w-xs leading-relaxed">
                        A specialized design and engineering agency. Crafting digital products that define industries.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">About us</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Strategy</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Design</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Engineering</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Optimization</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Social</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Twitter</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Dribbble</a></li>
<li><a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-zinc-600">© 2024 AGNCY Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
