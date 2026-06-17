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



        lucide.createIcons();
    


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
      

<div className="fixed inset-0 z-0 flex justify-center items-end pointer-events-none">
<img alt="Designer" className="h-[60vh] lg:h-[92vh] w-auto object-cover opacity-80 saturate-0 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/848d89a4-9074-40a7-8a7a-5d6d38723d55_1600w.png" style={{maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', objectPosition: 'center top'}}/>
</div>

<nav className="sticky lg:absolute top-0 inset-x-0 z-50 w-full flex justify-between items-center p-6 lg:px-8 lg:py-8 text-sm font-normal tracking-wide bg-[#6D28D9]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-none border-white/10">

<div className="lg:hidden font-bold text-lg tracking-tight">Portfolio</div>

<div className="hidden lg:flex gap-6 items-center mix-blend-plus-lighter">
<a className="hover:opacity-70 transition-opacity font-medium" href="#">Work</a>
<a className="hover:opacity-70 transition-opacity" href="#">About</a>
<a className="hover:opacity-70 transition-opacity" href="#">Process</a>
</div>

<div className="flex gap-6 items-center">

<div className="hidden lg:flex items-center gap-2 mix-blend-plus-lighter">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs font-medium uppercase tracking-wider opacity-80">Available for hire</span>
</div>

<a className="hidden lg:block hover:opacity-70 transition-opacity mix-blend-plus-lighter" href="#">Contact</a>

<button className="lg:hidden p-2 -mr-2 text-white hover:opacity-70">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<div className="relative z-10 w-full min-h-screen grid grid-cols-1 lg:grid-cols-4 pointer-events-none">

<div className="lg:hidden h-[85vh] col-span-1 flex flex-col justify-end pb-12 px-6 pointer-events-auto">
<div className="w-full select-none">
<span className="text-hero-mobile font-[800] tracking-tighter text-white mix-blend-overlay opacity-90 block">UI UX</span>
<span className="text-hero-mobile font-[800] tracking-tighter text-white mix-blend-overlay opacity-90 block text-right">AI</span>
</div>
<div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-80 mix-blend-plus-lighter">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span>Available for hire</span>
</div>
</div>

<div className="h-full border-r border-white/10 flex flex-col justify-between relative pointer-events-auto min-h-0 lg:min-h-screen">

<div className="hidden lg:block absolute top-24 lg:top-28 left-0 w-[200%] pointer-events-none select-none z-[60] px-[1vw] overflow-visible">
<span className="text-hero font-[800] tracking-tighter text-white mix-blend-overlay opacity-90 block whitespace-nowrap pl-4 lg:pl-0">UI UX</span>
</div>

<div className="relative lg:absolute lg:top-[40%] left-0 w-full px-6 lg:px-8 z-30 flex flex-col gap-6 mb-12 lg:mb-0 pt-0 lg:pt-0">

<div className="relative w-full aspect-[3/2] bg-neutral-900 overflow-hidden group cursor-pointer shadow-2xl border border-white/10 rounded-sm">

<img alt="Interface" className="transition-transform duration-700 group-hover:scale-105 opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa10ce6c-f914-4d7e-90ee-9546128a33e4_800w.webp"/>

<div className="absolute top-4 left-4 z-10 flex gap-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider uppercase rounded text-white">Case Study</span>
</div>
</div>

<div className="relative flex items-start gap-4 pr-4">
<p className="text-sm font-normal opacity-90 leading-relaxed text-white drop-shadow-md flex-1">
                        Crafting intuitive digital ecosystems and design systems for fintech scaling.
                    </p>
<div className="shrink-0 w-10 h-10 bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors cursor-pointer shadow-lg rounded-full">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>

<div className="w-full h-24 bg-white/5 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:bg-white/10 transition-colors mt-auto border-t border-white/10 z-30 group relative lg:static">
<span className="text-sm font-medium tracking-tight mr-2">Download Resume</span>
<svg className="lucide lucide-download w-4 h-4 group-hover:translate-y-0.5 transition-transform" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
</div>

<div className="hidden lg:block h-full border-r border-white/10 relative"></div>

<div className="hidden lg:block h-full border-r border-white/10 relative"></div>

<div className="h-full relative pointer-events-auto flex flex-col justify-end border-r lg:border-none border-white/10 min-h-0 lg:min-h-screen">

<div className="hidden lg:block absolute top-10 lg:top-28 right-0 lg:w-[200%] pointer-events-none select-none z-[60] px-[1vw] text-right overflow-visible">
<span className="text-hero font-[800] tracking-tighter text-white mix-blend-overlay opacity-90 block pr-4 lg:pr-0">AI</span>
</div>

<div className="relative lg:absolute lg:top-[40%] right-0 w-full px-6 lg:px-8 text-right z-30 mt-12 lg:mt-0 mb-8 lg:mb-0">
<div className="flex flex-col items-end gap-1">
<span className="text-6xl font-light tracking-tighter flex items-start gap-1 drop-shadow-lg">
<span className="opacity-50 text-4xl font-light mt-1">/</span>
                        07
                    </span>
<div className="mt-2 text-[10px] font-semibold tracking-widest uppercase opacity-90 leading-normal w-32 text-right border-t border-white/30 pt-2 ml-auto">
                        Years Experience
                    </div>
<div className="mt-12 flex flex-col items-end gap-1">
<div className="flex items-center gap-2 text-sm font-medium">
<svg className="lucide lucide-figma w-4 h-4 opacity-80" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-framer w-4 h-4 opacity-80" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
</div>
<span className="text-[10px] opacity-60 uppercase tracking-widest">Stack</span>
</div>
</div>
</div>

<div className="relative w-full bg-white text-black p-8 group cursor-pointer h-[340px] flex flex-col justify-between z-30 overflow-hidden border-t border-white/10">

<div className="absolute -right-16 -top-16 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-60 pointer-events-none z-0"></div>
<div className="relative z-10">
<div className="flex justify-between items-start">
<h3 className="text-lg font-bold tracking-tight text-neutral-900">Struct.sys</h3>
<span className="w-2 h-2 rounded-full bg-neutral-900 mt-2"></span>
</div>
<p className="text-xs text-neutral-500 mt-1 font-medium tracking-wide">DESIGN SYSTEM • 2024</p>
</div>
<div className="relative w-full flex justify-center items-center flex-1 z-0 my-4">

<div className="w-48 h-32 bg-white border border-neutral-200 shadow-sm rounded-lg p-2 flex gap-2 group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-1/3 h-full bg-neutral-100 rounded-md"></div>
<div className="w-2/3 h-full flex flex-col gap-2">
<div className="w-full h-4 bg-neutral-100 rounded-sm"></div>
<div className="w-2/3 h-4 bg-neutral-100 rounded-sm"></div>
<div className="w-full h-12 bg-neutral-50 border border-neutral-100 rounded-sm mt-auto flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-[#6D28D9]"></div>
</div>
</div>
</div>
</div>
<div className="flex justify-between items-end pt-4 border-t border-neutral-100 relative z-10">
<div className="">
<p className="text-[10px] text-neutral-400 font-bold uppercase tracking-wide">Role</p>
<p className="text-sm font-semibold tracking-tight mt-0.5 text-neutral-800">Lead Product Designer</p>
</div>
</div>

<div className="absolute bottom-6 right-6 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform z-20 shadow-xl">
<svg className="lucide lucide-arrow-up-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<section className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto">
<div className="grid grid-cols-1 lg:grid-cols-4 w-full">

<div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b border-white/10 flex flex-col lg:flex-row justify-between items-end gap-8">
<div className="max-w-4xl">
<h2 className="text-4xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[0.9]">
                        Precision Engineering.<br/>
<span className="text-neutral-500">Uncompromising Design.</span>
</h2>
<p className="text-neutral-400 text-lg max-w-xl leading-relaxed">
                        A multidisciplinary approach that bridges the gap between aesthetic excellence and technical robustness. 
                    </p>
</div>
<div className="mb-2">
<a className="group flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors pb-1 border-b border-white/20 hover:border-white" href="#">
                        Explore Methodology
                        <svg className="lucide lucide-arrow-right ml-1 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
<div className="relative w-full h-48 border border-white/10 bg-neutral-900/50 flex flex-col items-center justify-center overflow-hidden">

<div className="w-24 h-32 bg-neutral-800 border border-white/10 absolute top-8 left-8 z-10 group-hover:bg-neutral-700 transition-colors"></div>
<div className="w-24 h-32 bg-neutral-900 border border-white/10 absolute top-12 left-16 z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
<div className="absolute bottom-4 right-4 text-[10px] font-mono text-neutral-500">FIG-01</div>
</div>
<div>
<div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
<iconify-icon icon="lucide:pen-tool" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-2">Product Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Pixel-perfect interfaces focusing on usability and conversion. No detail is too small.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
<div className="relative w-full h-48 border border-white/10 bg-[#0d1117] flex flex-col p-4 overflow-hidden">
<div className="flex gap-1.5 mb-3 opacity-50">
<div className="w-2 h-2 bg-white/20"></div>
<div className="w-2 h-2 bg-white/20"></div>
</div>
<div className="font-mono text-[10px] text-neutral-400 space-y-1 leading-tight">
<p className=""><span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-yellow-300">function</span>() {</p>
<p className="pl-2 text-neutral-600">// Optimized</p>
<p className="pl-2"><span className="text-purple-400">return</span> <span className="text-green-400">&lt;Scale /&gt;</span></p>
<p className="">}</p>
<div className="w-3 h-4 bg-white/50 animate-pulse mt-1"></div>
</div>
</div>
<div className="">
<div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
<iconify-icon icon="lucide:code-2" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-2">Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Frontend architecture built on React &amp; Next.js. Fast, accessible, and scalable.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-r border-b border-white/10 p-8 h-[500px] flex flex-col justify-between hover:bg-neutral-900/50 transition-colors">
<div className="relative w-full h-48 border border-white/10 bg-neutral-900/50 flex items-center justify-center p-4">
<div className="grid grid-cols-2 gap-2 w-24">
<div className="h-10 border border-white/20 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="h-10 border border-white/20 bg-white/5 group-hover:bg-white/10 transition-colors delay-75"></div>
<div className="h-10 border border-white/20 bg-white/5 group-hover:bg-white/10 transition-colors delay-100"></div>
<div className="h-10 bg-white text-black flex items-center justify-center">
<iconify-icon className="" icon="lucide:check" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="">
<div className="w-8 h-8 flex items-center justify-center bg-white text-black mb-6">
<iconify-icon className="" icon="lucide:layout-grid" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-bold tracking-tight mb-2">Systems</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Creating unified languages that streamline collaboration between design and code.
                    </p>
</div>
</div>

<div className="group relative col-span-1 border-b border-white/10 p-0 h-[500px] flex flex-col hover:bg-neutral-900/50 transition-colors">
<div className="w-full h-1/2 relative overflow-hidden">
<img alt="Art" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a785da47-4d49-4c0b-839a-fb2dc262a8c1_800w.png" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-white text-black flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
<iconify-icon icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="p-8 flex flex-col justify-end h-1/2 border-l border-white/10 lg:border-l-0">
<h3 className="text-xl font-bold tracking-tight mb-2">Showreel 2025</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">
                        Motion, interaction, and 3D exploration.
                    </p>
<a className="text-xs font-mono uppercase tracking-widest border-b border-white/20 pb-1 self-start hover:border-white transition-colors" href="#">Watch Full Video</a>
</div>
</div>
</div>

<div className="w-full border-b border-white/10 py-16 px-8">
<p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-10 text-center lg:text-left">Selected Clients &amp; Partners</p>
<div className="flex flex-wrap justify-center lg:justify-start items-center gap-12 lg:gap-20 opacity-40 hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-white" height="36" icon="simple-icons:vercel" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:notion" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:airbnb" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:raycast" width="96"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 w-full text-xs text-neutral-500 font-mono uppercase tracking-widest">
<div className="p-8 border-r border-white/10">© 2024 Portfolio</div>
<div className="p-8 border-r border-white/10">San Francisco, CA</div>
<div className="p-8 border-r border-white/10">Local Time: 10:42 AM</div>
<div className="p-8 hover:text-white transition-colors cursor-pointer flex items-center justify-between group">
                Back to Top
                <iconify-icon className="group-hover:-translate-y-1 transition-transform" icon="lucide:arrow-up"></iconify-icon>
</div>
</div>
</section><section className="relative z-20 bg-[#6D28D9] text-white w-full border-b border-white/10 pointer-events-auto font-sans">
<div className="grid grid-cols-1 lg:grid-cols-4 w-full">

<div className="col-span-1 lg:col-span-4 p-8 lg:p-12 border-b border-white/10 flex flex-col items-start gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-sm">
<iconify-icon className="text-white" icon="solar:star-fall-minimalistic-2-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/90 uppercase">Expert Designer</span>
</div>
<h2 className="text-5xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9]">
                Johan Beker<span className="text-white/40">.</span>
</h2>
<p className="text-white/70 text-xl lg:text-2xl max-w-2xl font-light leading-relaxed">
                Brief initial presentation of myself and my previous experiences in the digital realm.
            </p>
</div>

<div className="col-span-1 lg:col-span-1 lg:border-b-0 flex flex-col min-h-[600px] bg-black/5 h-full border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="flex flex-col gap-8">

<div className="aspect-[4/5] overflow-hidden group bg-black/20 w-full border-white/10 border rounded-sm relative shadow-2xl">
<img alt="Profile" className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2da6658-f187-40c3-b46c-cd9d3d98faff_800w.webp"/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
<div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
<span className="text-[10px] font-medium uppercase tracking-wider">Available for work</span>
</div>
</div>
</div>
<div>
<h3 className="text-3xl font-medium tracking-tight mb-2">Hello I am Johan</h3>
<p className="text-base text-white/60 leading-relaxed font-light">
                        UI/UX Interaction Designer Based in Berlin.
                    </p>
</div>

<div className="flex items-center gap-3">
<a className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group" href="#">
<iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group" href="#">
<iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full hover:bg-white hover:text-[#6D28D9] transition-all hover:scale-110 group" href="#">
<iconify-icon icon="simple-icons:dribbble" width="20"></iconify-icon>
</a>
</div>
</div>
<button className="group mt-12 w-full py-4 px-6 bg-white text-[#6D28D9] font-semibold text-sm tracking-wide rounded-sm flex items-center justify-between hover:bg-white/90 transition-all shadow-xl">
                Connect with me
                <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2]" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
</div>

<div className="col-span-1 lg:col-span-3 flex flex-col h-full">

<div className="p-8 lg:p-12 border-b border-white/10 bg-white/[0.02]">
<p className="text-2xl lg:text-3xl font-normal leading-snug text-white/90 max-w-3xl">
                    I'm a dedicated Web Designer &amp; Developer based in the vibrant city of Berlin. I specialize in creative design with seamless technical execution to craft exceptional digital experiences.
                </p>

<div className="flex flex-wrap gap-2 mt-12">
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">Product Design</span>
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">UX Design</span>
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">UI Design</span>
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">Framer</span>
<span className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-xs font-mono uppercase tracking-wider text-white/80 hover:bg-white/10 transition-colors cursor-default">Branding</span>
<span className="px-4 py-2 bg-white/5 border border-white/-white/10 transition-colors cursor-default">Webflow</span>
</div>
</div>

<div className="flex-1 bg-black/10 flex flex-col">

<div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-32">
<iconify-icon className="text-white/40" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">2021</span>
</div>
<h4 className="text-lg font-medium tracking-tight">Freelance</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
<iconify-icon className="text-white/40 group-hover:text-[#1DB954] transition-colors" height="36" icon="simple-icons:spotify" width="96"></iconify-icon>
<iconify-icon className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-32">
<iconify-icon className="text-white/40" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">2022</span>
</div>
<h4 className="text-lg font-medium tracking-tight">UX/UI Designer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
<iconify-icon className="text-white/40 group-hover:text-[#FF5A5F] transition-colors" height="36" icon="simple-icons:airbnb" width="96"></iconify-icon>
<iconify-icon className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-32">
<iconify-icon className="text-white/40" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">2023</span>
</div>
<h4 className="text-lg font-medium tracking-tight">Product Designer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
<iconify-icon className="text-white/40 group-hover:text-[#5E6AD2] transition-colors" height="36" icon="simple-icons:linear" width="96"></iconify-icon>
<iconify-icon className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="group flex-1 flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 lg:px-12 hover:bg-white/5 transition-colors cursor-default gap-4">
<div className="flex items-center gap-8 w-full lg:w-auto">
<div className="flex items-center gap-3 w-32">
<iconify-icon className="text-white/40" icon="solar:calendar-linear" width="16"></iconify-icon>
<span className="text-sm font-mono text-white/40 group-hover:text-white/60 transition-colors">2024</span>
</div>
<h4 className="text-lg font-medium tracking-tight">Graphic Designer</h4>
</div>
<div className="flex items-center justify-between w-full lg:w-auto lg:flex-1 lg:justify-end gap-8">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" height="36" icon="simple-icons:vercel" width="96"></iconify-icon>
<iconify-icon className="text-white/20 group-hover:text-white group-hover:translate-x-2 transition-transform" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section><div className="fixed inset-0 z-0 flex justify-center items-end pointer-events-none">
<img alt="Designer" className="h-[60vh] lg:h-[92vh] w-auto object-cover opacity-80 saturate-0 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/848d89a4-9074-40a7-8a7a-5d6d38723d55_1600w.png" style={{maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', objectPosition: 'center top'}}/>
</div><nav className="sticky lg:absolute top-0 inset-x-0 z-50 w-full flex justify-between items-center p-6 lg:px-8 lg:py-8 text-sm font-normal tracking-wide bg-[#6D28D9]/80 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none border-b lg:border-none border-white/10">
<div className="lg:hidden font-bold text-lg tracking-tight">Portfolio</div>
<div className="hidden lg:flex gap-6 items-center mix-blend-plus-lighter">
<a className="hover:opacity-70 transition-opacity font-medium" href="#">Work</a>
<a className="hover:opacity-70 transition-opacity" href="#">About</a>
<a className="hover:opacity-70 transition-opacity" href="#">Process</a>
</div>
<div className="flex gap-6 items-center">
<div className="hidden lg:flex items-center gap-2 mix-blend-plus-lighter">
<div className="w-2 h-2 rounded-full bg-green-400"></div>
<span className="text-xs font-medium uppercase tracking-wider opacity-80">Available for hire</span>
</div>
<a className="hidden lg:block hover:opacity-70 transition-opacity mix-blend-plus-lighter" href="#">Contact</a>
<button className="lg:hidden p-2 -mr-2 text-white hover:opacity-70">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav><section className="relative z-20 bg-black text-white w-full border-b border-white/10 pointer-events-auto font-sans">
<div className="grid grid-cols-1 lg:grid-cols-4 w-full">

<div className="col-span-1 lg:col-span-2 border-r border-white/10 flex flex-col">

<div className="p-8 lg:p-12 border-b border-white/10 bg-white/[0.02]">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:heart-angle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/60 uppercase">Client Stories</span>
</div>
<h2 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white leading-[0.95] max-w-lg">
                        Hear what our satisfied <span className="text-[#6D28D9]">partners</span> have to say.
                    </h2>
</div>

<div className="flex-1 relative min-h-[500px] overflow-hidden group">
<img alt="Abstract Nature" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7f83ca2-8834-4deb-8448-b3bbb5dcda51_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-8 lg:bottom-12 left-8 lg:left-12 z-10">
<div className="text-7xl lg:text-9xl font-semibold tracking-tighter text-white mb-2">
                            10.9K<span className="text-[#6D28D9]">+</span>
</div>
<p className="text-xl text-white/60 font-light max-w-md">
                            Happy clients and successful collaborations across the globe in the last 4 years.
                        </p>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 flex flex-col h-full bg-white/[0.01]">

<div className="p-8 lg:p-10 border-b border-white/10 bg-[#6D28D9] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon className="text-white" icon="solar:quote-up-linear" width="64"></iconify-icon>
</div>
<div className="flex gap-1 mb-6 text-white">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-xl lg:text-2xl font-normal leading-relaxed text-white mb-8">
                        "The team took our financial platform and elevated it to new heights. Their strategic design approach helped us create a cohesive identity that resonates with our enterprise clients."
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 border border-white/20 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<div className="text-sm font-semibold text-white">Mark Ramirez</div>
<div className="text-xs text-white/60 uppercase tracking-wider mt-0.5">CTO @ Stripe</div>
</div>
</div>
<div className="flex items-center justify-between w-full sm:w-auto">
<iconify-icon className="text-white/60" height="30" icon="simple-icons:stripe" width="80"></iconify-icon>
<div className="sm:hidden w-8 h-8 rounded-full bg-white text-[#6D28D9] flex items-center justify-center">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="p-8 lg:p-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors cursor-default relative group">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-1 text-[#6D28D9]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
<p className="text-lg text-white/80 font-light leading-relaxed mb-8">
                        "As a fellow creative professional, I have high standards. Not only were they met, but exceeded. Optimized specifically for seamless user experiences across devices."
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026302d"/>
</div>
<div>
<div className="text-sm font-medium text-white">Thomas Gala</div>
<div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Founder, Zentech</div>
</div>
</div>
<iconify-icon className="text-white/20 group-hover:text-white transition-colors" height="24" icon="simple-icons:vercel" width="70"></iconify-icon>
</div>
</div>

<div className="flex-1 p-8 lg:p-10 hover:bg-white/[0.02] transition-colors cursor-default relative group flex flex-col justify-between">
<div className="">
<div className="flex gap-1 text-[#6D28D9] mb-6">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-lg text-white/80 font-light leading-relaxed mb-6">
                            "The attention to detail in the interaction design is unmatched. A true partner in building the future of our product."
                        </p>
</div>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 overflow-hidden grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenks</div>
<div className="text-[10px] text-white/40 uppercase tracking-wider mt-0.5">Product Lead</div>
</div>
</div>
<iconify-icon className="text-white/20 group-hover:text-[#5E6AD2] transition-colors" height="24" icon="simple-icons:linear" width="70"></iconify-icon>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-4 border-t border-white/10 bg-white/[0.05] backdrop-blur-sm p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#6D28D9] flex items-center justify-center text-white shadow-lg shadow-purple-900/50">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-2xl font-medium tracking-tight text-white">Are you the next success story?</h3>
<p className="text-sm text-white/50 mt-1">Join 100+ companies scaling with better design.</p>
</div>
</div>
<button className="group px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide rounded-sm hover:bg-[#6D28D9] hover:text-white transition-all duration-300 shadow-xl w-full md:w-auto flex items-center justify-center gap-3">
                    Start a Project
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section><section className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto font-sans">
<div className="w-full">

<div className="grid grid-cols-1 lg:grid-cols-12 border-white/10 border-b bg-[#6D28D9]">

<div className="col-span-1 lg:col-span-5 lg:p-16 lg:border-b-0 lg:border-r flex flex-col border-white/10 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:chat-round-dots-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-white/60 uppercase">Get in touch</span>
</div>
<h2 className="text-4xl lg:text-6xl font-medium tracking-tighter text-white leading-[0.95] mb-6">
                        Ready to elevate your digital <span className="text-violet-300">presence?</span>
</h2>
<p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                        My workflow is tailored for ambitious brands looking to make a statement. Let's build a safe, clean, and organized digital space together.
                    </p>
</div>
<div className="hidden lg:block mt-12">
<div className="flex items-center gap-2 text-sm text-white/40 mb-2">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Avg. response time: 24h</span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-7 p-8 lg:p-16 bg-white/5">
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="relative group input-group">
<label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:border-white/0 transition-colors" placeholder="Johan Beker" type="text"/>
<div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 input-line opacity-0"></div>
</div>

<div className="relative group input-group">
<label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">Email</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:border-white/0 transition-colors" placeholder="johan@example.com" type="email"/>
<div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 input-line opacity-0"></div>
</div>
</div>

<div className="relative group input-group">
<label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">Phone Number</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:border-white/0 transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
<div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 input-line opacity-0"></div>
</div>

<div className="relative group input-group">
<label className="block uppercase text-xs font-medium text-white/80 tracking-widest mb-2">Tell me about your project</label>
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-lg text-white placeholder-white/20 focus:border-white/0 transition-colors resize-none" placeholder="I need a new design system for..." rows="3"></textarea>
<div className="absolute bottom-0 left-0 h-[1px] bg-green-400 w-0 input-line opacity-0"></div>
</div>
<div className="flex items-center justify-end pt-4">
<button className="group relative px-8 py-4 bg-white text-black text-sm font-semibold tracking-wide rounded-sm overflow-hidden transition-all hover:bg-green-400 hover:text-black hover:shadow-lg hover:shadow-green-900/20" type="button">
<span className="relative z-10 flex items-center gap-2">
                                Send Request
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</form>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 bg-[#0A0A0A]">

<div className="col-span-1 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between h-full min-h-[300px]">
<div className="space-y-8">

<div className="w-12 h-12 flex items-center justify-center bg-white text-black rounded-sm">
<iconify-icon icon="solar:infinity-bold" width="24"></iconify-icon>
</div>
<div className="space-y-4">
<h3 className="text-xl font-medium tracking-tight text-white">Johan Beker</h3>
<p className="text-sm text-white/40 leading-relaxed max-w-[200px]">
                            Crafting digital experiences that merge art with function.
                        </p>
</div>
</div>

<div className="flex gap-4 mt-auto pt-8">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3">

<div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-white/10">
<h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">Sitemap</h4>
<ul className="space-y-4">
<li className=""><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                            Work
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                            Services
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                            Process
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a></li>
<li className=""><a className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-2 group" href="#">
                            About
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#6D28D9]" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a></li>
</ul>
</div>

<div className="p-8 lg:p-12 border-r border-b lg:border-b-0 border-white/10">
<h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">Resources</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Design System</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Framer Templates</a></li>
</ul>
</div>

<div className="col-span-2 md:col-span-1 p-8 lg:p-12">
<h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-8">Legal</h4>
<ul className="space-y-4">
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
<li><a className="text-sm text-white/70 hover:text-white transition-colors" href="#">Impressum</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/10 p-6 lg:px-12 lg:py-8 bg-black flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs text-white/30 font-light tracking-wide">
                © 2024 Johan Beker. All rights reserved. Berlin, Germany.
            </div>
<button className="group flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-wider cursor-pointer border px-4 py-2 border-white/10 rounded-full hover:bg-white/5" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                Back to top
                <iconify-icon className="group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-up-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</section><section className="relative z-20 bg-black text-white w-full border-t border-white/10 pointer-events-auto">

</section>


    </>
  );
}
