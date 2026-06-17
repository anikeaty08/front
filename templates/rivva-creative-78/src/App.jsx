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
      

<section className="bg-[#ea4c24] text-white min-h-screen relative flex flex-col">

<nav className="w-full flex justify-between items-center px-6 py-6 border-b border-white/20 z-20 relative">
<div className="text-2xl font-semibold tracking-tight uppercase">RIVVA.</div>
<div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
<a className="hover:opacity-70 transition-opacity" href="#">About</a>
<a className="hover:opacity-70 transition-opacity" href="#">Projects</a>
<a className="hover:opacity-70 transition-opacity" href="#">Contact</a>
</div>
<button className="w-10 h-10 border border-white/20 rounded flex items-center justify-center hover:bg-white/10 transition-colors">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
<h1 className="text-[25vw] leading-none font-semibold tracking-tighter text-white/90">RIVVA</h1>
</div>

<div className="flex-1 flex flex-col justify-end pb-12 z-10 relative">
<div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">

<div className="md:col-span-3 space-y-6">
<p className="text-lg uppercase tracking-widest font-medium">Less Noise. More Impact.</p>
<p className="text-lg text-white/80 max-w-sm">We help ambitious companies launch memorable brands, build high-impact websites, design digital products people love to use.</p>
<button className="bg-white text-black rounded-full px-6 py-3 flex items-center gap-3 hover:bg-neutral-200 transition-colors w-max group">
<span className="text-sm font-semibold tracking-widest uppercase">Book a Call</span>
<div className="w-6 h-6 rounded-full overflow-hidden bg-neutral-300">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</button>
</div>

<div className="md:col-span-6 flex justify-center mt-12 md:mt-0">
<div className="w-full max-w-md aspect-[3/4] overflow-hidden rounded-t-full shadow-2xl relative">
<img alt="Hero Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="md:col-span-3 flex justify-end">
<a className="group flex items-center gap-3 text-right" href="#">
<div className="bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-xs font-medium tracking-widest uppercase flex items-center gap-2">
<span>12+</span>
<i className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<span className="text-sm tracking-widest uppercase font-medium group-hover:underline underline-offset-4">All Projects</span>
</a>
</div>
</div>
</div>

<div className="h-2 w-full bg-[#111] mt-auto"></div>
<div className="h-1 w-full bg-[#ea4c24] mt-0.5"></div>
<div className="h-0.5 w-full bg-[#111] mt-0.5"></div>
</section>

<section className="bg-[#f4f4f4] border-t border-neutral-300">

<div className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-300">
<div className="lg:col-span-2 p-6 lg:p-8 border-r border-neutral-300 flex items-start">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500">
<i className="w-3 h-3 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> 01 Why Choose Us
                </span>
</div>
<div className="lg:col-span-7 p-6 lg:p-12 border-r border-neutral-300">
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-[0.9]">
                    Design<br/>that works<br/>Results<br/>that last.
                </h2>
</div>
<div className="lg:col-span-3 p-6 lg:p-12 flex items-center bg-white/50">
<p className="text-lg text-neutral-600">We blend strategy, aesthetics, and technology to create brands and digital experiences — and stay memorable.</p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-neutral-300 bg-neutral-300 gap-px">

<div className="bg-white p-8 lg:p-10 flex flex-col justify-between aspect-square group hover:bg-neutral-50 transition-colors">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500">
<i className="w-3 h-3 text-neutral-300 fill-neutral-300" data-lucide="diamond" strokeWidth="1.5"></i> Client Satisfaction
                </span>
<div>
<div className="text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 group-hover:text-[#ea4c24] transition-colors">100<span className="text-5xl lg:text-6xl">%</span></div>
<p className="text-base text-neutral-500 mt-4 border-t border-neutral-200 pt-4 flex justify-between items-end">
                        Trusted by growing digital teams <i className="w-5 h-5 text-neutral-300" data-lucide="activity" strokeWidth="1.5"></i>
</p>
</div>
</div>

<div className="bg-[#f9f9f9] p-8 lg:p-10 flex flex-col justify-between aspect-square hover:bg-white transition-colors">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500">
<i className="w-3 h-3 text-neutral-300 fill-neutral-300" data-lucide="diamond" strokeWidth="1.5"></i> Experience
                </span>
<div>
<div className="text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900">8+</div>
<p className="text-base text-neutral-500 mt-4 border-t border-neutral-200 pt-4 flex justify-between items-end">
                        Years designing scalable digital products <i className="w-5 h-5 text-neutral-300" data-lucide="hexagon" strokeWidth="1.5"></i>
</p>
</div>
</div>

<div className="bg-white p-8 lg:p-10 flex flex-col justify-between aspect-square group hover:bg-neutral-50 transition-colors">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500">
<i className="w-3 h-3 text-neutral-300 fill-neutral-300" data-lucide="diamond" strokeWidth="1.5"></i> Delivered Projects
                </span>
<div>
<div className="text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900">60+</div>
<p className="text-base text-neutral-500 mt-4 border-t border-neutral-200 pt-4 flex justify-between items-end">
                        Across SaaS, AI &amp; digital platforms <i className="w-5 h-5 text-neutral-300" data-lucide="target" strokeWidth="1.5"></i>
</p>
</div>
</div>

<div className="bg-[#f9f9f9] p-8 lg:p-10 flex flex-col justify-between aspect-square hover:bg-white transition-colors">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500">
<i className="w-3 h-3 text-neutral-300 fill-neutral-300" data-lucide="diamond" strokeWidth="1.5"></i> Growth Impact
                </span>
<div>
<div className="text-7xl lg:text-8xl font-semibold tracking-tighter text-[#ea4c24]">+40<span className="text-5xl lg:text-6xl">%</span></div>
<p className="text-base text-neutral-500 mt-4 border-t border-neutral-200 pt-4 flex justify-between items-end">
                        Average ROI growth after new design <i className="w-5 h-5 text-neutral-300" data-lucide="trending-up" strokeWidth="1.5"></i>
</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f4f4f4]">
<div className="grid grid-cols-1 lg:grid-cols-12 border-b border-neutral-300">

<div className="lg:col-span-6 p-6 lg:p-12 border-r border-neutral-300 flex flex-col justify-between">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-12">
<i className="w-3 h-3 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> 02 Portfolio
                </span>
<h2 className="text-6xl lg:text-8xl font-semibold tracking-tight uppercase leading-[0.9]">
                    Our<br/>Projects.
                </h2>
</div>

<div className="lg:col-span-6 p-6 lg:p-12 flex flex-col justify-end items-start lg:items-end bg-white/40">
<div className="max-w-md mb-8 lg:text-right">
<p className="text-sm text-neutral-500 tracking-widest uppercase mb-4">(2024-2025)</p>
<p className="text-lg text-neutral-700">Discover how our creative vision transforms ideas into powerful, conversion-driven brand experiences that truly stand out.</p>
</div>
<button className="bg-black text-white rounded-full px-8 py-4 flex items-center gap-3 hover:bg-neutral-800 transition-colors">
<span className="text-sm font-semibold tracking-widest uppercase">All Projects</span>
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-b border-neutral-300 bg-neutral-300 gap-px">

<div className="bg-neutral-200 group relative overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Project Forge" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">
<div className="flex justify-between items-start w-full">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2">
<i className="w-2 h-2 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> Forge
                        </span>
<span className="text-xs uppercase tracking-widest font-medium">/ Web Design</span>
</div>
</div>
</div>

<div className="bg-neutral-200 group relative overflow-hidden aspect-[4/5] md:aspect-auto md:row-span-2 cursor-pointer">
<img alt="Project Atlas" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">
<div className="flex justify-between items-start w-full">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2">
<i className="w-2 h-2 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> Atlas
                        </span>
<span className="text-xs uppercase tracking-widest font-medium">/ Brand</span>
</div>
</div>
</div>

<div className="bg-neutral-200 group relative overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Project Rivet" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">
<div className="flex justify-between items-start w-full">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2">
<i className="w-2 h-2 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> Rivet
                        </span>
<span className="text-xs uppercase tracking-widest font-medium">/ UX UI</span>
</div>
</div>
</div>

<div className="bg-neutral-200 group relative overflow-hidden aspect-[4/5] cursor-pointer">
<img alt="Project Pulse" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">
<div className="flex justify-between items-start w-full">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2">
<i className="w-2 h-2 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> Pulse
                        </span>
<span className="text-xs uppercase tracking-widest font-medium">/ 3D Motion</span>
</div>
</div>
</div>

<div className="bg-neutral-200 group relative overflow-hidden aspect-[4/5] md:col-span-2 lg:col-span-1 cursor-pointer">
<img alt="Project Foundry" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1518599904199-0ca897819ddb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10 pointer-events-none mix-blend-difference text-white">
<div className="flex justify-between items-start w-full">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2">
<i className="w-2 h-2 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> Foundry
                        </span>
<span className="text-xs uppercase tracking-widest font-medium">/ Strategy</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111] text-white">

<div className="flex flex-col gap-1 py-8 px-6">
<div className="h-[1px] w-full bg-white/20"></div>
<div className="h-[1px] w-full bg-white/20"></div>
<div className="h-[2px] w-full bg-white/40"></div>
<div className="h-[1px] w-full bg-white/20"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">

<div className="lg:col-span-5 p-6 lg:p-12 border-r border-white/10">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-400 mb-12">
<i className="w-3 h-3 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> 03 What We Do
                </span>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-[0.9] text-white/90">
                    Design<br/>Services<br/>That<br/>Drive<br/>Results.
                </h2>
<p className="text-lg text-neutral-400 mt-12 max-w-sm">From strategy to visuals — we craft designs that elevate brands, connect with users, and deliver measurable impact.</p>
</div>

<div className="lg:col-span-7 flex flex-col">
<div className="flex-1 flex flex-col px-6 lg:px-12 justify-center py-12">

<div className="group flex items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:border-white/40 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-[#ea4c24] transition-colors">001</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Brand Identity &amp; Rebranding</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group flex items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:border-white/40 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-[#ea4c24] transition-colors">002</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight">UX / UI Design</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group flex items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:border-white/40 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-[#ea4c24] transition-colors">003</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Art Direction</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group flex items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:border-white/40 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-[#ea4c24] transition-colors">004</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Visual Identity Systems</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>

<div className="group flex items-center justify-between py-8 border-b border-white/10 cursor-pointer hover:border-white/40 transition-colors">
<div className="flex items-center gap-6">
<span className="text-xs font-medium tracking-widest text-neutral-500 group-hover:text-[#ea4c24] transition-colors">005</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight">Typography &amp; Guidelines</h3>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 lg:p-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-end gap-8">
<h2 className="text-5xl lg:text-6xl font-semibold tracking-tight uppercase max-w-2xl leading-[0.9]">
                Design that speaks<br/><span className="text-neutral-500">for your brand.</span>
</h2>
<div className="max-w-xs text-right">
<p className="text-lg text-neutral-400">We create functional, beautiful digital experiences — designed to deliver clarity, innovation, and meaningful impact.</p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-white/10 gap-px">
<div className="bg-[#111] p-8 lg:p-10 relative overflow-hidden group">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-8">
<i className="w-2 h-2 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> First
                </span>
<h4 className="text-xl font-medium mb-4">Collaborative Process</h4>
<p className="text-neutral-400 text-base">From concept to launch — we work closely with clients at every stage.</p>
<div className="absolute -bottom-4 -right-4 text-8xl font-semibold text-white/5 tracking-tighter group-hover:text-white/10 transition-colors">01</div>
</div>
<div className="bg-[#111] p-8 lg:p-10 relative overflow-hidden group">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-8">
<i className="w-2 h-2 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> Second
                </span>
<h4 className="text-xl font-medium mb-4">Multiskilled Team</h4>
<p className="text-neutral-400 text-base">Our team combines UI/UX, motion, and brand strategy under one roof.</p>
<div className="absolute -bottom-4 -right-4 text-8xl font-semibold text-white/5 tracking-tighter group-hover:text-white/10 transition-colors">02</div>
</div>
<div className="bg-[#111] p-8 lg:p-10 relative overflow-hidden group">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-8">
<i className="w-2 h-2 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> Third
                </span>
<h4 className="text-xl font-medium mb-4">Attention to Detail</h4>
<p className="text-neutral-400 text-base">Pixel-perfect execution that reflects your brand's essence.</p>
<div className="absolute -bottom-4 -right-4 text-8xl font-semibold text-white/5 tracking-tighter group-hover:text-white/10 transition-colors">03</div>
</div>
<div className="bg-[#111] p-8 lg:p-10 relative overflow-hidden group">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-8">
<i className="w-2 h-2 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> Fourth
                </span>
<h4 className="text-xl font-medium mb-4">Long-term Partnerships</h4>
<p className="text-neutral-400 text-base">We help brands evolve, not just launch — guiding them through every stage.</p>
<div className="absolute -bottom-4 -right-4 text-8xl font-semibold text-white/5 tracking-tighter group-hover:text-white/10 transition-colors">04</div>
</div>
</div>

<div className="w-full h-[60vh] relative overflow-hidden border-b border-white/10">
<img alt="Office" className="w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
<h2 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tighter uppercase whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    Fast Execution. Premium.
                </h2>
<button className="mt-8 bg-white text-black rounded-full px-8 py-4 flex items-center gap-3 hover:bg-neutral-200 transition-colors group">
<span className="text-sm font-semibold tracking-widest uppercase">Contact Now</span>
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>

<div className="flex flex-col gap-1 py-8 px-6 bg-[#f4f4f4]">
<div className="h-[1px] w-full bg-black/20"></div>
<div className="h-[2px] w-full bg-black/40"></div>
<div className="h-[1px] w-full bg-black/20"></div>
<div className="h-[1px] w-full bg-black/20"></div>
</div>
</section>

<section className="bg-[#f4f4f4] border-b border-neutral-300">
<div className="grid grid-cols-1 lg:grid-cols-12">

<div className="lg:col-span-5 p-6 lg:p-12 border-r border-neutral-300 lg:sticky lg:top-0 h-max">
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-12">
<i className="w-3 h-3 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> 05 Workflow
                </span>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-[0.9] mb-12">
                    Our Process<br/>From Idea<br/>To Impact.
                </h2>
<button className="bg-black text-white rounded-full pl-6 pr-2 py-2 flex items-center gap-4 hover:bg-neutral-800 transition-colors w-max">
<span className="text-sm font-semibold tracking-widest uppercase">Work With Us</span>
<div className="w-10 h-10 rounded-full overflow-hidden">
<img alt="Agent" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
</button>
</div>

<div className="lg:col-span-7 bg-white">

<div className="p-8 lg:p-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest text-[#ea4c24] bg-red-50 px-2 py-1 rounded">001</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Discovery</h3>
<p className="text-lg text-neutral-600">Understanding your goals, audience, brand essence, and unique identity.</p>
</div>

<div className="p-8 lg:p-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest text-[#ea4c24] bg-red-50 px-2 py-1 rounded">002</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Strategy</h3>
<p className="text-lg text-neutral-600">Defining direction and creative foundations that inspire results.</p>
</div>

<div className="p-8 lg:p-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest text-[#ea4c24] bg-red-50 px-2 py-1 rounded">003</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Design</h3>
<p className="text-lg text-neutral-600">Creating visuals that connect form, story, emotion and experience.</p>
</div>

<div className="p-8 lg:p-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest text-[#ea4c24] bg-red-50 px-2 py-1 rounded">004</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Refinement</h3>
<p className="text-lg text-neutral-600">Polishing every element for consistency, coherence, and lasting impact.</p>
</div>

<div className="p-8 lg:p-12 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-4 mb-6">
<span className="text-xs font-semibold tracking-widest text-[#ea4c24] bg-red-50 px-2 py-1 rounded">005</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Delivery</h3>
<p className="text-lg text-neutral-600">Launching your brand with confidence, precision, and strategic focus.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f4f4f4] py-24 px-6 border-b border-neutral-300">
<div className="container mx-auto max-w-7xl">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div>
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-neutral-500 mb-8">
<i className="w-3 h-3 text-[#ea4c24] fill-[#ea4c24]" data-lucide="diamond" strokeWidth="1.5"></i> 06 Pricing
                    </span>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-[0.9]">
                        Our<br/>Plans.
                    </h2>
</div>
<div className="flex flex-col justify-end pb-4">
<p className="text-lg text-neutral-600 mb-8">Choose the plan that fits your pace. We stay close, listen carefully, and create the design work your brand truly needs.</p>

<div className="flex items-center bg-neutral-200 rounded-full p-1 w-max">
<button className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase shadow-sm">Per Project</button>
<button className="text-neutral-500 hover:text-black px-8 py-3 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors">Monthly</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">

<div className="bg-[#ea4c24] text-white p-12 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-12 -top-12 opacity-10">
<i className="w-64 h-64" data-lucide="asterisk" strokeWidth="1"></i>
</div>
<div>
<div className="bg-black/20 backdrop-blur-sm w-max px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium border border-white/20 mb-12">
                            Pro Project
                        </div>
<div className="text-6xl md:text-8xl font-semibold tracking-tighter mb-4">$2490</div>
<p className="text-white/80 text-lg">You can always change or cancel your plan. No risks.</p>
</div>
<button className="mt-16 bg-white text-black rounded-full px-8 py-4 flex items-center justify-between hover:bg-neutral-200 transition-colors w-full group">
<span className="text-sm font-semibold tracking-widest uppercase">Get in touch</span>
<div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>

<div className="p-12 flex flex-col justify-between">
<div>
<h4 className="text-2xl font-semibold tracking-tight mb-8">What's include</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-400 mt-1" data-lucide="minus" strokeWidth="1.5"></i> Home page design
                            </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-400 mt-1" data-lucide="minus" strokeWidth="1.5"></i> 3 Inner pages design
                            </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-400 mt-1" data-lucide="minus" strokeWidth="1.5"></i> Custom development
                            </li>
<li className="flex items-start gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-400 mt-1" data-lucide="minus" strokeWidth="1.5"></i> Basic analytics &amp; reporting
                            </li>
</ul>
</div>
<div className="border-t border-neutral-200 pt-8 mt-12 flex justify-between items-center">
<span className="text-sm uppercase tracking-widest font-medium text-neutral-500">Delivery Time</span>
<span className="text-base font-semibold">2-3 weeks</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#ea4c24] text-white">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col justify-between">
<div>
<span className="text-xs uppercase tracking-widest font-medium flex items-center gap-2 text-white/70 mb-12">
<i className="w-3 h-3 text-white fill-white" data-lucide="diamond" strokeWidth="1.5"></i> 12 Get in Touch
                    </span>
<h2 className="text-6xl md:text-8xl lg:text-[7rem] font-semibold tracking-tighter uppercase leading-[0.85] mb-8">
                        Ready to<br/>Start your<br/>Next project?
                    </h2>
<p className="text-xl text-white/90 max-w-sm mt-12 font-medium">Let's build a brand, product, or digital experience that makes a lasting impact. Tell us what you need — we'll handle the rest.</p>
</div>
<div className="mt-24 flex gap-12 text-sm uppercase tracking-widest font-medium text-white/70">
<div>
<p className="mb-2 text-white"><i className="w-4 h-4 inline mr-2" data-lucide="map-pin" strokeWidth="1.5"></i> Location</p>
<p>Madrid, Spain</p>
</div>
<div>
<p className="mb-2 text-white"><i className="w-4 h-4 inline mr-2" data-lucide="clock" strokeWidth="1.5"></i> Local Time</p>
<p>12:00 PM CET</p>
</div>
</div>
</div>

<div className="p-12 lg:p-24 flex flex-col justify-center">
<form className="space-y-12">
<div className="relative">
<label className="text-xs tracking-widest uppercase font-medium text-white/70 absolute -top-6 left-0">Name</label>
<input className="w-full bg-transparent border-b border-white/30 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors placeholder:text-white/30 font-medium" placeholder="Jane Smith" type="text"/>
</div>
<div className="relative">
<label className="text-xs tracking-widest uppercase font-medium text-white/70 absolute -top-6 left-0">Email</label>
<input className="w-full bg-transparent border-b border-white/30 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors placeholder:text-white/30 font-medium" placeholder="jane@example.com" type="email"/>
</div>
<div className="relative">
<label className="text-xs tracking-widest uppercase font-medium text-white/70 absolute -top-6 left-0">Message</label>
<textarea className="w-full bg-transparent border-b border-white/30 py-4 text-xl md:text-2xl outline-none focus:border-white transition-colors placeholder:text-white/30 font-medium resize-none" placeholder="Leave a message" rows="2"></textarea>
</div>
<div className="pt-8 flex flex-col md:flex-row items-center gap-6 justify-between">
<p className="text-xs tracking-wide text-white/60 max-w-xs uppercase">By submitting, you agree to our terms and privacy policy.</p>
<button className="bg-white text-black rounded-full pl-8 pr-2 py-2 flex items-center gap-4 hover:bg-neutral-200 transition-colors w-full md:w-max" type="button">
<span className="text-sm font-semibold tracking-widest uppercase">Let's Talk</span>
<div className="w-10 h-10 rounded-full overflow-hidden bg-black flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</form>
</div>
</div>

<div className="border-t border-white/20 p-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium tracking-widest uppercase text-white/70">
<p>© 2025 RIVVA. All rights reserved.</p>
<div className="flex gap-8 text-white">
<a className="hover:opacity-70" href="#">Twitter</a>
<a className="hover:opacity-70" href="#">LinkedIn</a>
<a className="hover:opacity-70" href="#">Instagram</a>
</div>
</div>
</section>


    </>
  );
}
