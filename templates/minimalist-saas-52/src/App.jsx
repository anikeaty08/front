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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

<section className="relative z-10 w-full min-h-screen pt-12 pb-32 px-8 md:px-16 lg:px-24 border-b border-white/5 flex flex-col items-center">

<div className="absolute top-0 left-0 w-full h-[40rem] bg-lime-500/5 blur-[120px] pointer-events-none -z-10"></div>

<div className="w-full max-w-7xl mx-auto flex justify-between text-xs text-stone-500 uppercase tracking-widest font-sans-custom mb-16">
<span>Identity</span>
<span>Your Role</span>
</div>

<div className="w-full max-w-7xl mx-auto mb-20">
<h1 className="text-6xl md:text-7xl font-sans-custom font-normal tracking-tight text-[#e4f2ca] mb-6">Website Design</h1>
<p className="text-base md:text-lg font-sans-custom font-light text-stone-400 max-w-2xl leading-relaxed">
                We worked closely with the brand's well-known and modern typographic system. The new system communicates a dynamic brand and core energy, positioning the website as a true hub that drives engagement and brand awareness.
            </p>
</div>

<div className="w-full max-w-5xl mx-auto bg-[#050604] border-[8px] border-[#161a13] rounded-[2rem] shadow-[0_20px_100px_rgba(0,0,0,0.8)] overflow-hidden relative flex flex-col items-center">

<nav className="w-full flex justify-between items-center p-8 relative z-20">
<div className="border border-white/20 rounded px-4 py-1 text-xs font-sans-custom tracking-widest text-white uppercase">Aerospace</div>
<div className="hidden md:flex gap-8 text-xs font-sans-custom tracking-widest text-stone-400">
<a className="hover:text-white transition-colors" href="#">SERVICES</a>
<a className="hover:text-white transition-colors" href="#">WORK</a>
<a className="hover:text-white transition-colors" href="#">ABOUT</a>
<a className="hover:text-white transition-colors" href="#">BLOG</a>
<a className="hover:text-white transition-colors" href="#">CAREERS</a>
</div>
</nav>

<div className="absolute top-8 right-8 w-80 bg-lime-400 rounded-2xl p-8 shadow-2xl z-40 hidden md:block">
<div className="flex justify-between items-start mb-8 text-black">
<div>
<h3 className="text-3xl font-sans-custom tracking-tight leading-none mb-2 font-normal">Get<br/>Started</h3>
<p className="text-xs font-sans-custom font-light text-black/70">We'd love to hear from you!</p>
</div>
<button><i className="w-5 h-5 text-black" data-lucide="x" strokeWidth="1.5"></i></button>
</div>
<div className="space-y-6">
<div className="border-b border-black/20 pb-2"><p className="text-xs text-black/60 font-sans-custom">Name</p></div>
<div className="border-b border-black/20 pb-2"><p className="text-xs text-black/60 font-sans-custom">Company</p></div>
<div className="border-b border-black/20 pb-2"><p className="text-xs text-black/60 font-sans-custom">Email Address</p></div>
<div className="border-b border-black/20 pb-2"><p className="text-xs text-black/60 font-sans-custom">Project details</p></div>
<button className="w-full mt-8 border border-black rounded-full py-3 flex items-center justify-center gap-2 text-sm font-sans-custom hover:bg-black/5 transition-colors">
                        Submit <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="w-full pt-16 pb-32 flex flex-col items-center relative overflow-hidden">
<div className="absolute bottom-0 w-[150%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,_rgba(163,230,53,0.15)_0%,_transparent_70%)]"></div>
<h2 className="text-6xl md:text-8xl text-white font-sans-custom tracking-tight text-center leading-none relative z-10 font-normal">
                    Reach<br/>
<div className="flex items-center justify-center gap-4 my-2">
<div className="w-12 md:w-16 h-px bg-white/20 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border border-white/50 rounded-full"></div></div>
<span className="font-serif-custom italic font-light text-5xl md:text-7xl">New</span>
<div className="w-12 md:w-16 h-px bg-white/20 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border border-white/50 rounded-full"></div></div>
</div>
                    Horizons
                </h2>
<button className="mt-12 relative z-10 rounded-full border border-lime-400/40 px-8 py-3 bg-lime-400/5 text-sm text-lime-300 font-sans-custom tracking-widest uppercase hover:bg-lime-400/10 transition-colors">
                    Get Started
                </button>
</div>

<div className="w-full max-w-4xl mx-auto text-center py-24 px-8 relative z-10">
<p className="text-lg md:text-xl text-stone-300 font-sans-custom font-light leading-relaxed uppercase tracking-wide">
                    AEROSPACE is a full-service STRATEGY, DESIGN and DIGITAL MARKETING AGENCY that helps EMERGING and ESTABLISHED BRANDS GROW FASTER.
                </p>
</div>

<div className="relative w-full h-80 bg-black overflow-hidden border-y border-white/5">
<div className="absolute top-10 right-[20%] w-48 h-48 bg-amber-500/20 blur-[80px] rounded-full z-10"></div>
<div className="absolute top-16 right-[22%] w-16 h-16 bg-white/30 blur-[20px] rounded-full z-10"></div>

<div className="absolute -bottom-[70%] left-1/2 -translate-x-1/2 w-[180%] aspect-square rounded-full border-t border-cyan-500/30 bg-[radial-gradient(ellipse_at_top,_#082f49_0%,_#000000_50%)] shadow-[inset_0_20px_100px_rgba(6,182,212,0.1)] z-10 mix-blend-screen"></div>
</div>

<div className="w-full py-32 flex flex-col items-center relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-lime-400/5 rounded-full blur-[100px] pointer-events-none"></div>
<h3 className="text-3xl md:text-4xl text-stone-100 font-sans-custom font-light tracking-tight text-center mb-24 max-w-2xl relative z-10 leading-snug">
                    Custom data-driven, performance-focused<br/>
<span className="font-serif-custom italic text-lime-400">growth</span> marketing solutions.
                </h3>

<div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full border border-lime-400/20 flex items-center justify-center z-10">
<div className="absolute inset-16 md:inset-20 rounded-full border border-white/5 border-dashed"></div>
<div className="text-center bg-[#050604] w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center border border-white/10 shadow-2xl relative z-20">
<p className="text-sm md:text-base text-white font-sans-custom tracking-tight leading-tight">The 5 Pillars<br/>of Ecommerce</p>
</div>

<div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
<p className="text-xs text-stone-400 font-sans-custom tracking-wide">Acquisition</p>
<div className="w-4 h-4 rounded-full bg-[#050604] border border-lime-400 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div></div>
</div>
<div className="absolute top-[30%] -right-8 md:-right-10 flex flex-col items-center gap-3">
<div className="w-4 h-4 rounded-full bg-[#050604] border border-lime-400 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div></div>
<p className="text-xs text-stone-400 font-sans-custom tracking-wide">Conversion</p>
</div>
<div className="absolute bottom-6 md:bottom-10 right-6 md:right-10 flex flex-col items-center gap-3">
<div className="w-4 h-4 rounded-full bg-[#050604] border border-lime-400 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div></div>
<p className="text-xs text-stone-400 font-sans-custom tracking-wide">Retention</p>
</div>
<div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 flex flex-col items-center gap-3">
<div className="w-4 h-4 rounded-full bg-[#050604] border border-lime-400 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div></div>
<p className="text-xs text-stone-400 font-sans-custom tracking-wide">LTV</p>
</div>
<div className="absolute top-[30%] -left-12 md:-left-16 flex flex-col items-center gap-3">
<p className="text-xs text-stone-400 font-sans-custom tracking-wide">Brand Awareness</p>
<div className="w-4 h-4 rounded-full bg-[#050604] border border-lime-400 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div></div>
</div>
</div>
</div>

<div className="w-full relative py-32 flex justify-center items-end min-h-[35rem] md:min-h-[40rem] overflow-hidden mt-10">

<div className="absolute bottom-32 md:bottom-40 text-center z-30">
<p className="text-xs uppercase tracking-widest text-stone-500 font-sans-custom mb-6">A Select Collection</p>
<h3 className="text-4xl md:text-5xl text-white font-sans-custom tracking-tight leading-none mb-10 font-normal">
                        Next Level<br/>
<span className="font-serif-custom italic font-light text-stone-300">Results</span>
</h3>
<button className="rounded-full border border-white/20 px-8 py-3 text-sm text-white font-sans-custom tracking-widest hover:bg-white/10 transition-colors">
                        View Cases
                    </button>
</div>

<div className="absolute bottom-[-10%] left-[5%] md:left-[10%] w-56 md:w-72 h-80 md:h-96 bg-[#0a0a0a] rounded-3xl border-[6px] md:border-[8px] border-[#161a13] -rotate-12 z-20 overflow-hidden shadow-2xl flex flex-col justify-end p-6">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.2)_0%,_transparent_70%)]"></div>
<p className="text-2xl md:text-3xl font-sans-custom text-white tracking-tight leading-none font-normal relative z-10">BLACK<br/>COFFEE</p>
</div>
<div className="absolute bottom-[-5%] right-[5%] md:right-[10%] w-56 md:w-72 h-80 md:h-96 bg-[#0a0a0a] rounded-3xl border-[6px] md:border-[8px] border-[#161a13] rotate-[15deg] z-20 overflow-hidden shadow-2xl flex flex-col justify-end p-6 text-right">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(214,211,209,0.2)_0%,_transparent_70%)]"></div>
<p className="text-2xl md:text-3xl font-serif-custom text-white tracking-tight italic relative z-10">Parisian</p>
</div>
</div>
</div>
</section>

<main className="relative z-10 w-full min-h-screen flex flex-col md:flex-row border-b border-white/5">

<section className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-white/5">
<div className="mb-10 self-start">
<div className="inline-flex items-center justify-center rounded-full border border-lime-400/30 px-4 py-1.5 shadow-[0_0_20px_rgba(163,230,53,0.15)] bg-lime-400/5">
<span className="text-xs uppercase tracking-widest text-stone-100 font-light leading-none pt-[1px]">Title</span>
</div>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-serif-custom font-normal tracking-tight text-stone-50 mb-12">
                PP Editorial New
            </h1>
<div className="flex-1 flex items-center justify-start overflow-hidden py-12">
<span className="text-7xl md:text-8xl lg:text-9xl leading-none font-serif-custom text-white/5 select-none tracking-tight">
                    AaBb
                </span>
</div>
<div className="mt-auto w-full max-w-[28rem]">
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Designed By</span>
<span className="text-lg text-stone-300 font-serif-custom font-light">Pangram Pangram Foundry</span>
</div>
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Usage</span>
<span className="text-lg text-stone-300 font-serif-custom font-light">Titles/Captions</span>
</div>
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Category</span>
<span className="text-lg text-stone-300 font-serif-custom font-light">Serif</span>
</div>
</div>
</section>

<section className="flex-1 flex flex-col p-8 md:p-16 lg:p-24">
<div className="mb-10 self-start">
<div className="inline-flex items-center justify-center rounded-full border border-lime-400/30 px-4 py-1.5 shadow-[0_0_20px_rgba(163,230,53,0.15)] bg-lime-400/5">
<span className="text-xs uppercase tracking-widest text-stone-100 font-light leading-none pt-[1px]">Body Text</span>
</div>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-sans-custom font-normal tracking-tight text-stone-50 mb-12">
                PP Neue Montreal
            </h1>
<div className="flex-1 flex items-center justify-start overflow-hidden py-12">
<span className="text-7xl md:text-8xl lg:text-9xl leading-none font-sans-custom text-white/5 select-none tracking-tight">
                    AaBb
                </span>
</div>
<div className="mt-auto w-full max-w-[28rem]">
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Designed By</span>
<span className="text-lg text-stone-300 font-sans-custom font-light">Pangram Pangram Foundry</span>
</div>
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Usage</span>
<span className="text-lg text-stone-300 font-sans-custom font-light">Body Text</span>
</div>
<div className="flex justify-between items-center py-5 border-b border-white/5">
<span className="text-lg text-stone-500 font-light font-sans-custom">Category</span>
<span className="text-lg text-stone-300 font-sans-custom font-light">Sans Serif</span>
</div>
</div>
</section>
</main>

<section className="relative z-10 w-full min-h-screen py-24 px-8 md:px-16 lg:px-24">

<div className="absolute top-40 left-20 w-[40rem] h-[40rem] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
<div className="absolute bottom-40 right-20 w-[30rem] h-[30rem] bg-lime-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-stone-500/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

<div className="mb-20">
<h2 className="text-5xl md:text-7xl font-sans-custom font-normal tracking-tight text-stone-50 leading-tight">
                Responsive<br/>
                Design
            </h2>
</div>

<div className="flex flex-col md:flex-row gap-8 lg:gap-16 w-full max-w-7xl mx-auto items-start justify-center">

<div className="w-full md:w-1/3 flex flex-col gap-12 lg:gap-24">

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#050505] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden">
<div className="absolute bottom-0 inset-x-0 h-3/5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-400/30 via-lime-900/10 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-center px-6 pt-10 pb-4 relative z-10">
<span className="text-xs text-stone-300 tracking-widest uppercase font-sans-custom font-light border border-white/20 rounded-full px-2 py-0.5">Brand</span>
<span className="text-xs text-stone-300 tracking-widest uppercase font-sans-custom font-light">Menu</span>
</div>
<div className="flex-1 flex flex-col items-center justify-center p-6 relative z-10 pb-20">
<h3 className="text-4xl text-stone-50 font-sans-custom tracking-tight text-center leading-tight font-normal">
                                Reach<br/>
<span className="font-serif-custom italic font-light block my-1">New</span>
                                Horizons
                            </h3>
<button className="mt-12 rounded-full border border-lime-400/40 px-6 py-2.5 bg-lime-400/5 text-sm text-lime-100 font-sans-custom tracking-wide transition-colors hover:bg-lime-400/10">
                                Get Started
                            </button>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#111111] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden px-5 pt-16 pb-8">
<p className="text-xs text-stone-400 uppercase tracking-widest text-center mb-4 font-sans-custom">Category</p>
<h3 className="text-4xl text-stone-50 font-sans-custom tracking-tight text-center leading-tight mb-10 font-normal">
                            Digital<br/>
<span className="font-serif-custom italic font-light">Advertising</span>
</h3>
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="aspect-[4/5] rounded-xl bg-stone-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-900/40 to-transparent"></div>
</div>
<div className="aspect-[4/5] rounded-xl bg-stone-800 relative overflow-hidden mt-6">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-900/40 to-transparent"></div>
</div>
</div>
<p className="text-sm text-stone-400 text-center font-sans-custom font-light px-4 leading-relaxed">
                            The best performing assets delivered.
                        </p>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#a3e635] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden p-6 pt-16 items-center text-black">
<div className="w-20 h-20 rounded-full border border-black/20 flex items-center justify-center mb-12 relative">
<div className="absolute inset-2 border border-black border-dashed rounded-full"></div>
<i className="w-6 h-6 text-black" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<p className="text-xs uppercase tracking-widest font-sans-custom mb-6">Let's Connect</p>
<h3 className="text-4xl font-sans-custom tracking-tight text-center leading-tight mb-auto font-normal">
                            Let us help<br/>
                            your company<br/>
                            accelerate<br/>
<span className="font-serif-custom italic font-light">years ahead.</span>
</h3>
<button className="mt-8 rounded-full border border-black px-8 py-3 text-sm font-sans-custom tracking-wide hover:bg-black/5 transition-colors">
                            Contact Us
                        </button>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex flex-col gap-12 lg:gap-24 md:mt-16 lg:mt-32">

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#0c1209] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden px-6 pt-16 pb-8 items-center text-center">
<h3 className="text-2xl text-stone-100 font-sans-custom font-light tracking-tight leading-snug mb-6">
                            Custom data-driven, performance-focused<br/>
<span className="font-serif-custom italic text-3xl block mt-1 text-lime-200">growth</span>
                            marketing solutions.
                        </h3>
<p className="text-sm text-stone-400 font-sans-custom font-light leading-relaxed mb-auto px-2">
                            Our custom, data-driven, performance focused growth marketing solutions have helped companies of all shapes and sizes grow faster.
                        </p>
<div className="relative w-44 h-44 rounded-full border border-lime-500/20 flex items-center justify-center mt-8">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-lime-400"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-lime-400"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-lime-400"></div>
<p className="text-sm text-lime-200 font-sans-custom text-center leading-tight">
                                The 5 Pillars<br/>of Ecommerce
                            </p>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#111111] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden">
<div className="px-6 pt-16 pb-8 flex flex-col items-center text-center">
<h3 className="text-4xl text-stone-50 font-sans-custom tracking-tight leading-tight mb-4 font-normal">
                                We Help<br/>Companies<br/>
<span className="font-serif-custom italic font-light text-5xl">Grow</span>
</h3>
<p className="text-sm text-stone-400 font-sans-custom font-light mb-6 px-4">
                                A collection of projects we helped accelerate years ahead.
                            </p>
<button className="rounded-full border border-white/20 px-5 py-2 text-sm text-stone-200 font-sans-custom hover:bg-white/5 transition-colors">
                                Case Studies
                            </button>
</div>
<div className="flex-1 w-full bg-[#1e3b2b] rounded-t-3xl relative overflow-hidden border-t border-white/10 mt-auto">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[size:4px_4px]"></div>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#0a0a0a] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden p-6 pt-16 items-center text-center">
<h3 className="text-4xl text-stone-50 font-sans-custom tracking-tight leading-tight mb-12 font-normal">
                            What our<br/>clients are<br/>
<span className="font-serif-custom italic font-light">saying.</span>
</h3>
<p className="text-base tracking-widest text-stone-300 font-sans-custom mb-8">GE VENTURES</p>
<p className="text-base text-stone-400 font-serif-custom italic font-light leading-relaxed mb-auto">
                            "These guys are the real deal. Effective, efficient, and a pleasure to work with. They quickly understood and were able to help us better articulate the nuances of our business."
                        </p>
<div className="flex flex-col items-center gap-2 mt-8">
<div className="w-10 h-10 rounded-full bg-stone-800 border border-white/10"></div>
<div>
<p className="text-xs text-stone-200 font-sans-custom">Jordan Fader</p>
<p className="text-xs text-stone-500 font-sans-custom">VC at GE Ventures</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 flex flex-col gap-12 lg:gap-24 md:mt-32 lg:mt-48">

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#0d0a08] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-hidden">
<div className="absolute top-1/3 -right-1/4 w-64 h-64 bg-orange-900/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="p-6 pt-24 flex flex-col items-center text-center relative z-10">
<p className="text-xs text-stone-400 uppercase tracking-widest mb-6 font-sans-custom">To Infinity and Beyond</p>
<h3 className="text-5xl text-stone-50 font-sans-custom tracking-tight leading-none mb-10 font-normal">
                                Next Level<br/>
<span className="font-serif-custom italic font-light">Results</span>
</h3>
<button className="rounded-full border border-lime-400/30 px-6 py-2 text-sm text-lime-100 font-sans-custom bg-lime-400/5 hover:bg-lime-400/10 transition-colors">
                                View Cases
                            </button>
</div>
<div className="mt-auto pb-8 pt-4 px-6 flex justify-between items-center border-t border-white/5 relative z-10">
<span className="text-xs text-stone-500 tracking-widest font-sans-custom leading-tight">BLACK<br/>COFFEE</span>
<div className="w-6 h-6 rounded-full border border-stone-700"></div>
<span className="text-xs text-stone-500 tracking-widest font-sans-custom">KETTLE</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[9/19.5] max-w-[280px] mx-auto rounded-[2.5rem] border-[6px] border-[#1c1c1c] bg-[#f8faea] overflow-hidden shadow-2xl flex flex-col ring-1 ring-white/10">
<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-50">
<div className="w-28 h-5 bg-[#1c1c1c] rounded-b-[1.25rem]"></div>
</div>
<div className="relative flex-1 w-full h-full flex flex-col overflow-y-auto no-scrollbar p-6 pt-16 text-stone-900">
<h3 className="text-4xl font-sans-custom tracking-tight leading-tight mb-10 text-center font-normal">
                            What we<br/>do <span className="font-serif-custom italic font-light">best.</span>
</h3>
<div className="flex flex-col gap-6">
<div className="border-t border-stone-200 pt-4">
<div className="flex gap-3 mb-2 items-baseline">
<span className="text-xs font-sans-custom text-stone-400">01</span>
<h4 className="text-base font-sans-custom tracking-tight">Marketing Strategy</h4>
</div>
<p className="text-sm font-sans-custom font-light text-stone-600 pl-6 leading-relaxed">
                                    Holistic digital marketing expertise with specific forward-data driven solutions specifically tailored to your needs.
                                </p>
</div>
<div className="border-t border-stone-200 pt-4">
<div className="flex gap-3 mb-2 items-baseline">
<span className="text-xs font-sans-custom text-stone-400">02</span>
<h4 className="text-base font-sans-custom tracking-tight">Digital Advertising</h4>
</div>
<p className="text-sm font-sans-custom font-light text-stone-600 pl-6 leading-relaxed">
                                    We create effective and measurable, full-funnel marketing and advertising campaign strategies to maximize your Return On Ad Spend (ROAS).
                                </p>
</div>
<div className="border-t border-stone-200 pt-4 pb-4">
<div className="flex gap-3 mb-2 items-baseline">
<span className="text-xs font-sans-custom text-stone-400">03</span>
<h4 className="text-base font-sans-custom tracking-tight">Content &amp; Creative</h4>
</div>
<p className="text-sm font-sans-custom font-light text-stone-600 pl-6 leading-relaxed">
                                    Our creative and copy team architects designed visual assets and content that attract, engage and effectively convert your perfect audience.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
