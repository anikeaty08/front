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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/10 blur-[150px] rounded-full animate-pulse" style={{animationDuration: '10s'}}></div>
<div className="absolute top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 blur-[150px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#05060A]/60 backdrop-blur-xl animate-fade-in">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-2xl font-medium tracking-tight text-white flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:shadow-[0_0_25px_rgba(37,99,235,0.7)] transition-shadow duration-500">
<i className="text-white w-5 h-5 group-hover:scale-110 transition-transform duration-300" data-lucide="gem" strokeWidth="1.5"></i>
</div>
                Media Diamond
            </a>
<div className="hidden md:flex items-center space-x-10 text-base font-normal text-slate-300 bg-slate-900/40 px-6 py-2 rounded-full border border-slate-800/60 backdrop-blur-md">
<a className="hover:text-white transition-colors" href="#home">Works</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
</div>
<div className="hidden md:block relative group">
<div className="absolute -inset-1 bg-blue-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
<a className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-slate-800 rounded-full hover:bg-slate-700 transition-colors border border-slate-600" href="#contact">
                    Contact
                </a>
</div>
<button className="md:hidden text-slate-300 hover:text-white">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="relative pt-44 pb-20 px-6 flex flex-col items-center justify-center min-h-[90vh]" id="home">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-md mb-10 shadow-lg shadow-black/20 opacity-0-init animate-fade-in-up">
<div className="flex -space-x-2">
<img alt="User" className="w-5 h-5 rounded-full border border-slate-800" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-5 h-5 rounded-full border border-slate-800" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-sm text-slate-300 font-normal pr-1 tracking-wide">Trusted by founders worldwide</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[84px] leading-[1.05] font-medium tracking-tight text-white text-center max-w-5xl mx-auto mb-8 opacity-0-init animate-fade-in-up delay-100">
            Effortless <span className="inline-flex items-center justify-center w-[1em] h-[1em] bg-blue-600 rounded-full mx-1 align-middle overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.4)]"><img className="w-full h-full object-cover mix-blend-overlay" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/></span> Design <br className="hidden md:block"/>
            for <span className="inline-flex items-center justify-center w-[1em] h-[1em] bg-slate-800 rounded-full mx-1 align-middle overflow-hidden"><img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/></span> Digital Startups
        </h1>
<p className="text-xl text-slate-400 font-normal max-w-2xl mx-auto text-center mb-12 leading-relaxed tracking-wide opacity-0-init animate-fade-in-up delay-200">
            We make it easy for startups to launch, grow, and scale with clean, conversion-focused designs — no delays, no drama.
        </p>
<div className="opacity-0-init animate-fade-in-up delay-300 relative group mb-20 z-10">
<div className="absolute -inset-1.5 bg-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
<a className="relative flex items-center gap-2 justify-center px-8 py-4 text-base font-medium text-white bg-slate-900 border border-slate-700 rounded-full hover:bg-slate-800 transition-colors" href="#work">
                View Work <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="w-full max-w-4xl mx-auto relative z-10 opacity-0-init animate-fade-in-up delay-400">
<div className="bg-[#0B0D14]/80 backdrop-blur-xl border border-slate-800/80 rounded-2xl p-5 shadow-2xl shadow-black/50 group hover:border-blue-500/30 transition-colors duration-500">
<div className="text-slate-400 text-lg mb-14 px-3 pt-2 font-normal flex items-center">
                    Describe your project vision, and let's build it. 
                    <span className="animate-pulse ml-1 text-blue-500">|</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/60 pt-5 px-1 mt-4">
<div className="flex flex-wrap items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-colors text-sm text-slate-300 font-normal">
<i className="w-4 h-4 text-slate-400" data-lucide="layers" strokeWidth="1.5"></i> Project Builder
                        </button>
<div className="hidden sm:block h-5 w-[1px] bg-slate-800 mx-2"></div>
<div className="flex items-center gap-1">
<button className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-800/50">
<i className="w-5 h-5" data-lucide="paperclip" strokeWidth="1.5"></i>
</button>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20 ml-auto group-hover:scale-105">
<i className="w-4 h-4 ml-0.5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</main>

<div className="py-10 border-y border-white/[0.02] bg-[#030407] overflow-hidden opacity-0-init animate-fade-in delay-500">
<div className="flex items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<div className="marquee-content gap-20 pr-20 items-center">

<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="fill-current w-6 h-6" data-lucide="triangle"></i> ipsum</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-8 h-8" data-lucide="infinity"></i> logo</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="hash"></i> logoipsum</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="fill-current w-6 h-6" data-lucide="hexagon"></i> brand</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i> LOGO</span>

<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="fill-current w-6 h-6" data-lucide="triangle"></i> ipsum</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-8 h-8" data-lucide="infinity"></i> logo</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="hash"></i> logoipsum</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="fill-current w-6 h-6" data-lucide="hexagon"></i> brand</span>
<span className="text-2xl font-medium tracking-tight text-slate-300 flex items-center gap-2"><i className="w-6 h-6" data-lucide="box"></i> LOGO</span>
</div>
</div>
</div>

<section className="py-32 bg-[#05060A] relative overflow-hidden" id="work">
<div className="max-w-[1400px] mx-auto px-6">
<div className="relative h-[700px] rounded-[3rem] bg-[#090B10] border border-slate-800/80 overflow-hidden shadow-2xl shadow-black/80 flex items-center justify-center">

<div className="absolute w-[150%] h-[150%] flex gap-6 -rotate-6 scale-[1.15] opacity-80 hover:opacity-100 transition-opacity duration-1000 ease-in-out p-10">

<div className="flex flex-col gap-6 animate-float" style={{animationDelay: '-2s'}}>
<div className="w-[300px] h-[400px] rounded-3xl bg-slate-900 overflow-hidden border border-slate-700/50 relative group">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
<h3 className="text-white text-2xl font-medium tracking-tight">EXPERIENCE</h3>
</div>
</div>
<div className="w-[300px] h-[250px] rounded-3xl bg-slate-900 overflow-hidden border border-slate-700/50 relative group">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col gap-6 -mt-20 animate-float" style={{animationDelay: '0s'}}>
<div className="w-[450px] h-[300px] rounded-3xl bg-slate-900 overflow-hidden border border-slate-700/50 relative group">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<h2 className="text-5xl font-medium tracking-tighter text-white drop-shadow-2xl">VNTNR.</h2>
</div>
</div>
<div className="w-[450px] h-[450px] rounded-3xl bg-[#0B0D14] overflow-hidden border border-slate-700/50 relative group flex items-center justify-center">

<div className="w-[200px] h-[300px] rounded-2xl bg-slate-800 shadow-2xl border border-slate-600/50 overflow-hidden animate-float-slow">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-10 animate-float" style={{animationDelay: '-4s'}}>
<div className="w-[350px] h-[350px] rounded-3xl bg-slate-900 overflow-hidden border border-slate-700/50 relative group">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1627398240411-8bbeb73bba7d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center">
<span className="text-3xl font-medium text-white tracking-tight rotate-[-15deg] bg-blue-600/80 px-4 py-1 backdrop-blur-md rounded-lg">sottozero</span>
</div>
</div>
<div className="w-[350px] h-[400px] rounded-3xl bg-slate-900 overflow-hidden border border-slate-700/50 relative group">
<img className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 text-right">
<h3 className="text-white text-3xl font-medium tracking-tight">CREATIVE</h3>
<h3 className="text-white text-3xl font-medium tracking-tight text-slate-500">+ SENSE</h3>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#090B10_100%)] pointer-events-none"></div>
<div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#090B10] to-transparent pointer-events-none"></div>
</div>
</div>
</section>

<div className="relative py-32 overflow-hidden flex flex-col items-center justify-center bg-[#05060A]">

<div className="absolute w-[110%] h-16 bg-[#0B0D14] rotate-3 flex items-center z-0 border-y border-slate-800/80 overflow-hidden">
<div className="marquee-content-reverse items-center text-slate-500 text-lg font-medium tracking-widest uppercase">
<span className="mx-8">Senior Designer</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>
<span className="mx-8">10 Years of Experience</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>
<span className="mx-8">Over 100 Customers</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>

<span className="mx-8">Senior Designer</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>
<span className="mx-8">10 Years of Experience</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>
<span className="mx-8">Over 100 Customers</span> <i className="w-4 h-4 mx-8 text-slate-700" data-lucide="x"></i>
</div>
</div>

<div className="absolute w-[110%] h-16 bg-blue-600 -rotate-2 flex items-center z-10 shadow-[0_0_40px_rgba(37,99,235,0.2)] border-y border-blue-500/50 overflow-hidden">
<div className="marquee-content items-center text-white text-lg font-medium tracking-widest uppercase">
<span className="mx-8">Website Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Brand Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Logo Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>

<span className="mx-8">Website Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Brand Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Logo Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Website Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Brand Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
<span className="mx-8">Logo Design</span> <i className="w-4 h-4 mx-8 text-blue-300" data-lucide="plus"></i>
</div>
</div>
</div>

<section className="py-32 px-6 bg-[#05060A] relative overflow-hidden flex flex-col items-center border-t border-slate-800/30">
<div className="text-center mb-10 w-full animate-fade-in-up">
<span className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">(Services)</span>
<h2 className="text-4xl font-medium tracking-tight text-white">What we do</h2>
</div>
<div className="relative w-full max-w-[1400px] flex items-center justify-center animate-fade-in-up delay-200 mt-10">

<div className="absolute w-full flex justify-between px-10 pointer-events-none text-slate-800/40 text-7xl md:text-[160px] font-bold tracking-tighter whitespace-nowrap overflow-hidden select-none">
<span className="opacity-50">Web Design</span>
<span className="opacity-50">Logo Design</span>
</div>

<div className="relative z-10 flex flex-col items-center w-full">
<div className="flex items-center justify-center w-full gap-4 md:gap-8 mb-12">
<span className="text-slate-600 text-3xl md:text-5xl font-light hidden md:block">×</span>
<h3 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-slate-400 whitespace-nowrap">
                        Brand Design
                    </h3>
<span className="text-slate-600 text-3xl md:text-5xl font-light hidden md:block">×</span>
</div>

<div className="relative w-[300px] md:w-[450px] h-[250px] md:h-[300px] rounded-3xl overflow-hidden border border-slate-700/60 shadow-2xl shadow-blue-900/20 animate-float-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 z-20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1627398240411-8bbeb73bba7d?q=80&amp;w=800&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-black/30 flex items-center justify-center">
<div className="w-20 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg flex items-center justify-center transform -rotate-12">
<span className="text-white font-bold tracking-tight text-sm">sottozero</span>
</div>
</div>
</img></div>

<div className="h-[150px] md:h-[200px]"></div>
<p className="text-slate-400 text-lg font-normal max-w-lg text-center mt-12 mb-8 leading-relaxed">
                    We build bold, cohesive brand identities that leave a lasting impression across all digital touchpoints.
                </p>

<div className="flex flex-wrap justify-center gap-3">
<span className="px-5 py-2 rounded-full border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors cursor-default">Visual Identity</span>
<span className="px-5 py-2 rounded-full border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors cursor-default">Style Guides</span>
<span className="px-5 py-2 rounded-full border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm text-slate-300 text-sm font-medium hover:bg-slate-800 transition-colors cursor-default">Brand Strategy</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#030407] border-t border-slate-800/30 flex flex-col items-center text-center">
<span className="text-blue-500 font-medium italic mb-6 animate-pulse">(hello)</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-3xl leading-[1.2] mb-12">
            We help fast moving digital startups launch sharper <span className="text-slate-400">brands and websites — with clarity, speed, and no drama.</span>
</h2>
<div className="flex flex-wrap justify-center gap-3 max-w-2xl">
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="pen-tool"></i> Branding</span>
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="aperture"></i> Logo</span>
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="monitor"></i> Website</span>
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="image"></i> Illustration</span>
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="layout"></i> Interface</span>
<span className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-sm text-slate-300"><i className="w-4 h-4" data-lucide="target"></i> Strategy</span>
</div>
</section>

<section className="py-40 px-6 bg-[#05060A] relative overflow-hidden border-t border-slate-800/30">

<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-bold tracking-tighter text-slate-800/10 pointer-events-none whitespace-nowrap z-0 select-none">
            Meet Finton
        </div>
<div className="text-center w-full mb-20 relative z-10 animate-fade-in-up">
<span className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase block">(Intro)</span>
</div>
<div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="relative mx-auto md:mr-0 md:ml-auto w-[280px] h-[350px] md:w-[350px] md:h-[450px] animate-fade-in-up delay-200">
<div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-700/50 relative shadow-2xl shadow-blue-900/10">
<img className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 bg-blue-900/20" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=800&amp;auto=format&amp;fit=crop" />

<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent mix-blend-overlay"></div>
</img></div>

<div className="absolute -bottom-8 -left-8 md:-left-12 w-28 h-28 bg-[#0B0D14] border border-slate-700/80 rounded-full flex items-center justify-center text-[10px] text-slate-300 font-medium uppercase tracking-[0.2em] p-2 text-center leading-tight shadow-xl animate-spin-slow backdrop-blur-md">
<svg className="w-full h-full absolute inset-0 text-slate-400" style={{transform: 'scale(0.85)'}} viewbox="0 0 100 100">
<path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" id="circlePath"></path>
<text>
<textpath href="#circlePath" startoffset="0%">
                                • CREATIVE DIRECTOR • FOUNDER •
                            </textpath>
</text>
</svg>
<i className="w-5 h-5 text-blue-500 relative z-10 animate-pulse" data-lucide="zap"></i>
</div>
</div>

<div className="animate-fade-in-up delay-300">
<h3 className="text-4xl font-medium tracking-tight text-white mb-6">The Founder</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md font-light">
                    Franklin Clinton is a visual designer focused on crafting bold, functional design systems. He works with creative teams and startups to build standout brands and seamless digital experiences. Based in London, he balances clarity with character — and enjoys experimenting with motion design and interactive visuals in his spare time.
                </p>

<div className="space-y-4 w-full max-w-md border-t border-slate-800/80 pt-8">
<div className="flex justify-between items-center text-base text-slate-400 border-b border-slate-800/50 pb-4 hover:text-white transition-colors group">
<span className="font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Founder at Agero</span>
<span className="text-sm font-light">2024-Now</span>
</div>
<div className="flex justify-between items-center text-base text-slate-400 border-b border-slate-800/50 pb-4 hover:text-white transition-colors group">
<span className="font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Brand Designer at Google</span>
<span className="text-sm font-light">2022-2024</span>
</div>
<div className="flex justify-between items-center text-base text-slate-400 border-b border-slate-800/50 pb-4 hover:text-white transition-colors group">
<span className="font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Web Designer at Shopify</span>
<span className="text-sm font-light">2019-2022</span>
</div>
<div className="flex justify-between items-center text-base text-slate-400 border-b border-slate-800/50 pb-4 hover:text-white transition-colors group">
<span className="font-medium text-slate-300 group-hover:text-blue-400 transition-colors">Junior Designer at Meta</span>
<span className="text-sm font-light">2015-2019</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#030407] border-t border-slate-800/30">
<div className="max-w-5xl mx-auto animate-fade-in-up">
<div className="text-center mb-16">
<span className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">(Awards)</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Awards Winning</h2>
</div>
<div className="border-t-2 border-slate-800">

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-slate-800/60 hover:bg-slate-900/50 transition-colors px-4 group cursor-pointer">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-2 sm:mb-0 w-32 uppercase">Awwwards</div>
<div className="text-slate-200 text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">SOTY 2023 - 1st Winner</div>
<div className="text-slate-600 text-sm mt-2 sm:mt-0 w-32 text-right">Archin</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-slate-800/60 hover:bg-slate-900/50 transition-colors px-4 group cursor-pointer">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-2 sm:mb-0 w-32 uppercase">CSS Design</div>
<div className="text-slate-200 text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">Top 5 Best of eCommerce Websites 2023</div>
<div className="text-slate-600 text-sm mt-2 sm:mt-0 w-32 text-right">VNTNR</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-slate-800/60 hover:bg-slate-900/50 transition-colors px-4 group cursor-pointer">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-2 sm:mb-0 w-32 uppercase">Behance</div>
<div className="text-slate-200 text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">Winner - US Behance Portfolio Review 2024</div>
<div className="text-slate-600 text-sm mt-2 sm:mt-0 w-32 text-right">Awards</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-slate-800/60 hover:bg-slate-900/50 transition-colors px-4 group cursor-pointer">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-2 sm:mb-0 w-32 uppercase">Dribbble</div>
<div className="text-slate-200 text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">Top 10 Best of Mobile App Design 2024</div>
<div className="text-slate-600 text-sm mt-2 sm:mt-0 w-32 text-right">Swift Co.</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 border-b border-slate-800/60 hover:bg-slate-900/50 transition-colors px-4 group cursor-pointer">
<div className="text-slate-500 text-sm font-medium tracking-wide mb-2 sm:mb-0 w-32 uppercase">FWA Awards</div>
<div className="text-slate-200 text-lg md:text-xl font-medium group-hover:text-blue-400 transition-colors">Winner - Best of Architecture Website 2025</div>
<div className="text-slate-600 text-sm mt-2 sm:mt-0 w-32 text-right">Unero</div>
</div>
</div>
<div className="text-center mt-12">
<span className="text-slate-500 text-xs font-medium tracking-[0.2em] uppercase block">(Pricing Plan)</span>
</div>
</div>
</section>

<footer className="border-t border-slate-800/50 bg-[#05060A] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-sm">
<a className="text-2xl font-medium tracking-tight text-white flex items-center gap-2 mb-6 group" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-shadow">
<i className="text-white w-5 h-5" data-lucide="gem" strokeWidth="1.5"></i>
</div>
                    Media Diamond
                </a>
<p className="text-slate-400 text-base font-normal leading-relaxed">Engineered digital experiences for forward-thinking brands. We build the future of the web, effortlessly.</p>
</div>
<div className="flex flex-wrap gap-16 md:gap-24">
<div className="flex flex-col gap-4 text-base">
<span className="text-white font-medium mb-2 tracking-wide">Platform</span>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Our Work</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">About Us</a>
</div>
<div className="flex flex-col gap-4 text-base">
<span className="text-white font-medium mb-2 tracking-wide">Connect</span>
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i> Twitter
                    </a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i> LinkedIn
                    </a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i> Instagram
                    </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/40 text-sm text-slate-500 font-normal">
<p>© 2024 Media Diamond. All rights reserved.</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
