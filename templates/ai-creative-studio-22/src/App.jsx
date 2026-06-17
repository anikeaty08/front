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
      

<div className="absolute inset-0 z-0 bg-glow pointer-events-none"></div>

<header className="w-full border-b border-neutral-900/80 sticky top-0 bg-neutral-950/80 backdrop-blur-md z-50">
<div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between gap-6">

<a className="inline-flex items-center gap-3 relative z-10" href="#">
<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-neutral-900 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
<iconify-icon className="text-violet-400" height="20" icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-neutral-100">
                    LoveArt.ai
                </span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<div className="group relative py-2 cursor-pointer hover:text-neutral-100 transition-colors">
<span className="flex items-center gap-1">Tools <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></span>

<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="w-48 rounded-xl border border-neutral-800 bg-neutral-900/95 backdrop-blur-xl p-2 shadow-xl border-gradient-container">
<a className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 rounded-lg transition-colors" href="#">AI Art Generators</a>
<a className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 rounded-lg transition-colors" href="#">AI Image Editors</a>
<a className="block px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50 rounded-lg transition-colors" href="#">AI Photo Filters</a>
</div>
</div>
</div>
<a className="hover:text-neutral-100 transition-colors" href="#prompts">Prompts</a>
<a className="hover:text-neutral-100 transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-3 z-10">
<a className="hidden sm:inline-flex items-center text-sm font-medium text-neutral-400 hover:text-neutral-100 transition-colors" href="#login">
                    Log in
                </a>
<a className="inline-flex items-center rounded-full bg-neutral-50 text-neutral-950 px-4 py-2 text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-neutral-200 transition-colors" href="#signup">
                    Sign Up
                </a>

<button className="md:hidden text-neutral-400 hover:text-neutral-50">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-1 w-full relative z-10">

<section className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-6xl mx-auto pt-20 pb-16 px-4 md:px-6 gap-12">

<div className="w-full lg:w-1/2 flex flex-col items-start z-10">

<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-300 bg-neutral-900/80 rounded-full px-3 py-1.5 mb-8 border-gradient-container" style={{borderRadius: '9999px'}}>
<span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></span>
<span>New: 19 specialized AI tools</span>
</div>

<div className="space-y-6">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-neutral-50 leading-[1.05]">
                        Where Art <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Begins.</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed">
                        The complete AI studio for creators, marketers, and designers. Generate, edit, and transform your ideas into stunning visuals—instantly.
                    </p>
</div>

<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-violet-600 text-white px-6 py-3.5 text-base font-medium hover:bg-violet-500 transition-colors shadow-[0_0_30px_rgba(139,92,246,0.3)]" href="#signup">
                        Start Creating for Free
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-6 py-3.5 text-base font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors" href="#features">
                        Explore the Tools
                    </a>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">

<div className="absolute inset-4 md:inset-8 lg:inset-4 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl z-10">
<img alt="AI Generated Abstract Art" className="w-full h-full object-cover opacity-80 mix-blend-screen" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6">
<div className="bg-neutral-950/80 backdrop-blur-xl rounded-2xl p-4 border-gradient-container" style={{borderRadius: '1rem'}}>
<div className="flex items-center gap-3 text-sm text-neutral-300 mb-3">
<iconify-icon className="text-violet-400" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="truncate">A futuristic cyberpunk city with neon reflections in puddles...</span>
</div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[75%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
</div>
<div className="flex justify-between items-center mt-2 text-xs text-neutral-500">
<span>Generating...</span>
<span>75%</span>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 z-20 bg-neutral-900/90 backdrop-blur-md rounded-2xl p-3 border-gradient-container shadow-xl" style={{borderRadius: '1rem'}}>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-neutral-800 flex items-center justify-center">
<iconify-icon className="text-neutral-300" icon="solar:eraser-linear"></iconify-icon>
</div>
<div className="text-xs">
<p className="text-neutral-200 font-medium">Object Remover</p>
<p className="text-neutral-500">Auto-detected</p>
</div>
</div>
</div>

<div className="absolute bottom-1/4 -left-4 md:left-0 z-20 bg-neutral-900/90 backdrop-blur-md rounded-2xl p-3 border-gradient-container shadow-xl" style={{borderRadius: '1rem'}}>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full border-2 border-neutral-900 bg-violet-500"></div>
<div className="h-8 w-8 rounded-full border-2 border-neutral-900 bg-fuchsia-500"></div>
</div>
<span className="text-xs font-medium text-neutral-200 pl-1">Style Transfer</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-neutral-900/80 bg-neutral-950/50">
<div className="max-w-6xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
<p className="text-sm text-neutral-500 font-medium text-center md:text-left">
                    Loved by creators at Google, Meta, and thousands of startups worldwide
                </p>
<div className="flex items-center justify-center gap-8 flex-wrap opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tight flex items-center gap-1"><iconify-icon icon="solar:ghost-linear"></iconify-icon> Google</span>
<span className="text-xl font-semibold tracking-tight flex items-center gap-1"><iconify-icon icon="solar:infinity-linear"></iconify-icon> Meta</span>
<span className="text-xl font-semibold tracking-tight flex items-center gap-1"><iconify-icon icon="solar:cup-star-linear"></iconify-icon> StartupCo</span>
<span className="text-xl font-semibold tracking-tight flex items-center gap-1"><iconify-icon icon="solar:planet-linear"></iconify-icon> Agency</span>
</div>
</div>
</section>

<section className="w-full py-24 relative" id="features">
<div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-16">

<div className="text-center max-w-3xl mx-auto space-y-4">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">
                        Your Entire Creative Workflow, <span className="text-neutral-500">Reimagined.</span>
</h2>
<p className="text-base sm:text-lg text-neutral-400">
                        Don't just generate. Edit, enhance, and transform with a complete suite of 19 specialized AI tools designed for professional results.
                    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="flex flex-col bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 group hover:border-violet-500/30 transition-colors">
<div className="relative h-64 bg-neutral-950 p-6 flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 opacity-40 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
<div className="relative z-10 space-y-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-50">AI Art Generators</h3>
</div>
</div>
<div className="p-6 pt-2 space-y-6 flex-1 flex flex-col">
<div className="space-y-2 flex-1">
<h4 className="text-base font-medium text-neutral-200">Breathe Life into Your Ideas</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Go beyond basic prompts. Create consistent characters for your stories, design unique anime and comic book art, or even generate scalable vector graphics from a single line of text.
                                </p>
</div>
<div className="space-y-3">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Featured Tools</p>
<ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:user-id-linear"></iconify-icon> Character Gen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:face-scan-circle-linear"></iconify-icon> Anime Gen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:book-linear"></iconify-icon> Comic Gen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:pen-new-round-linear"></iconify-icon> Vector Image</li>
</ul>
</div>
</div>
</article>

<article className="flex flex-col bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 group hover:border-fuchsia-500/30 transition-colors">
<div className="relative h-64 bg-neutral-950 p-6 flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 flex">
<div className="w-1/2 h-full bg-neutral-800/50 border-r border-neutral-700 relative">
<div className="absolute inset-0 flex items-center justify-center text-neutral-600"><iconify-icon icon="solar:image-linear" width="48"></iconify-icon></div>
</div>
<div className="w-1/2 h-full bg-gradient-to-br from-fuchsia-900/40 to-violet-900/40 relative">
<div className="absolute inset-0 flex items-center justify-center text-fuchsia-400"><iconify-icon icon="solar:stars-linear" width="48"></iconify-icon></div>
</div>

<div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/20 -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.5)]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 shadow-lg">
<iconify-icon icon="solar:round-transfer-horizontal-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
<div className="relative z-10 space-y-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400">
<iconify-icon icon="solar:crop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-50">AI Image Editors</h3>
</div>
</div>
<div className="p-6 pt-2 space-y-6 flex-1 flex flex-col">
<div className="space-y-2 flex-1">
<h4 className="text-base font-medium text-neutral-200">Effortless Editing, Flawless Results</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Say goodbye to tedious manual editing. Remove backgrounds with pixel-perfect precision, erase unwanted objects seamlessly, and expand your canvas beyond its original borders.
                                </p>
</div>
<div className="space-y-3">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Featured Tools</p>
<ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:layers-minimalistic-linear"></iconify-icon> Remove BG</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:eraser-linear"></iconify-icon> Object Remover</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:maximize-square-linear"></iconify-icon> Photo Expand</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:gallery-bold"></iconify-icon> Photo Enhancer</li>
</ul>
</div>
</div>
</article>

<article className="flex flex-col bg-neutral-900 rounded-[2rem] overflow-hidden border border-neutral-800 group hover:border-cyan-500/30 transition-colors">
<div className="relative h-64 bg-neutral-950 p-6 flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-50 pointer-events-none">
<div className="flex items-center justify-between text-xs text-neutral-400"><span>Style Intensity</span><span>85%</span></div>
<div className="h-1.5 w-full bg-neutral-800 rounded-full"><div className="h-full bg-cyan-500 w-[85%] rounded-full"></div></div>
<div className="flex gap-2 mt-2">
<div className="h-12 w-12 rounded-lg bg-cyan-900/40 border border-cyan-500/50"></div>
<div className="h-12 w-12 rounded-lg bg-neutral-800"></div>
<div className="h-12 w-12 rounded-lg bg-neutral-800"></div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent"></div>
<div className="relative z-10 space-y-3">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
<iconify-icon icon="solar:filters-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-50">AI Photo Filters</h3>
</div>
</div>
<div className="p-6 pt-2 space-y-6 flex-1 flex flex-col">
<div className="space-y-2 flex-1">
<h4 className="text-base font-medium text-neutral-200">Transform Photos into Art</h4>
<p className="text-sm text-neutral-400 leading-relaxed">
                                    Discover a new dimension of creativity. Instantly apply breathtaking artistic styles to your photos, turn a simple sketch into a polished masterpiece, or convert 2D images to 3D.
                                </p>
</div>
<div className="space-y-3">
<p className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Featured Tools</p>
<ul className="grid grid-cols-2 gap-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:palette-round-linear"></iconify-icon> Style Transfer</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:pen-linear"></iconify-icon> Sketch to Art</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:box-linear"></iconify-icon> 2D to 3D</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-500" icon="solar:document-text-linear"></iconify-icon> Image-to-Prompt</li>
</ul>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="w-full py-24 border-t border-neutral-900/80 bg-neutral-950/30">
<div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-12">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50 text-center">
                    Create in 3 Simple Steps
                </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

<div className="flex flex-col items-center text-center space-y-4 relative z-10">
<div className="h-20 w-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-300" icon="solar:widget-add-linear" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">1. Choose Your Tool</h3>
<p className="text-sm text-neutral-400 max-w-xs mx-auto">
                                Select from 19 powerful AI tools for generation, editing, or creative filtering.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-4 relative z-10">
<div className="h-20 w-20 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center shadow-lg">
<iconify-icon className="text-neutral-300" icon="solar:keyboard-linear" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">2. Provide Your Input</h3>
<p className="text-sm text-neutral-400 max-w-xs mx-auto">
                                Write a text prompt, or upload your own image or sketch to get started.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-4 relative z-10">
<div className="h-20 w-20 rounded-2xl bg-neutral-900 border border-violet-500/30 bg-violet-500/10 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.15)]">
<iconify-icon className="text-violet-400" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-lg font-medium text-neutral-100 tracking-tight">3. Make it Magic</h3>
<p className="text-sm text-neutral-400 max-w-xs mx-auto">
                                Click to generate, edit, or transform. Download your high-resolution, watermark-free artwork.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 border-t border-neutral-900/80" id="pricing">
<div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col gap-16">

<div className="text-center max-w-2xl mx-auto space-y-4">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-50">
                        Smarter Pricing for Modern Creators.
                    </h2>
<p className="text-base sm:text-lg text-neutral-400">
                        No subscriptions. No hidden fees. Just simple, pay-as-you-go credits that never expire. Perfect for projects of any size.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="flex flex-col p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800">
<div className="space-y-2 mb-6">
<h3 className="text-xl font-medium text-neutral-200 tracking-tight">Starter</h3>
<p className="text-4xl font-semibold tracking-tight text-neutral-50">$5</p>
<p className="text-sm text-neutral-500">One-time payment</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-2xl font-semibold text-neutral-200">250</span>
<span className="text-sm text-neutral-500">Credits</span>
</div>
<a className="w-full inline-flex justify-center rounded-xl bg-neutral-800 text-neutral-200 px-4 py-2.5 text-sm font-medium hover:bg-neutral-700 transition-colors" href="#signup">
                            Buy Starter Pack
                        </a>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-neutral-900 border border-violet-500/50 relative shadow-[0_0_40px_rgba(139,92,246,0.15)] md:-my-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-500 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide">
                            Most Popular
                        </div>
<div className="space-y-2 mb-6">
<h3 className="text-xl font-medium text-violet-300 tracking-tight">Pro</h3>
<p className="text-4xl font-semibold tracking-tight text-neutral-50">$12</p>
<p className="text-sm text-neutral-500">One-time payment</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-2xl font-semibold text-neutral-200">750</span>
<span className="text-sm text-neutral-500">Credits</span>
</div>
<a className="w-full inline-flex justify-center rounded-xl bg-violet-600 text-white px-4 py-3 text-sm font-medium hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/50" href="#signup">
                            Find Your Perfect Plan
                        </a>
<p className="text-xs text-center text-neutral-500 mt-4">Equivalent to ~750 basic images</p>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800">
<div className="space-y-2 mb-6">
<h3 className="text-xl font-medium text-neutral-200 tracking-tight">Studio</h3>
<p className="text-4xl font-semibold tracking-tight text-neutral-50">$25</p>
<p className="text-sm text-neutral-500">One-time payment</p>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-2xl font-semibold text-neutral-200">2000</span>
<span className="text-sm text-neutral-500">Credits</span>
</div>
<a className="w-full inline-flex justify-center rounded-xl bg-neutral-800 text-neutral-200 px-4 py-2.5 text-sm font-medium hover:bg-neutral-700 transition-colors" href="#signup">
                            Buy Studio Pack
                        </a>
</div>
</div>
</div>
</section>

<section className="w-full py-24 border-t border-neutral-900/80 bg-neutral-950/30">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="w-full lg:w-1/3 space-y-6 lg:sticky lg:top-32">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                            Powerful for Professionals. Simple for Everyone.
                        </h2>
<p className="text-base text-neutral-400">
                            LoveArt.ai is built for the diverse needs of the modern creative world. Whether you're conceptualizing a game or running social media.
                        </p>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight mb-2">Artists &amp; Illustrators</h3>
<p className="text-sm text-neutral-400">Overcome creative blocks. Use AI to generate base concepts, then refine and iterate on your unique style faster than ever.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight mb-2">Marketers &amp; Brands</h3>
<p className="text-sm text-neutral-400">Generate countless ad variations instantly. Edit product photos, remove backgrounds, and create campaigns at scale.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:shop-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight mb-2">Small Business Owners</h3>
<p className="text-sm text-neutral-400">Achieve agency-quality visuals without the agency price tag. Perfect for social media posts, website assets, and emails.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
<div className="h-10 w-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-300">
<iconify-icon icon="solar:gamepad-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-neutral-100 tracking-tight mb-2">Indie Developers</h3>
<p className="text-sm text-neutral-400">Rapidly prototype game assets, conceptualize environments, and generate UI elements to bring your virtual worlds to life.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 sm:py-32 relative overflow-hidden">

<div className="absolute inset-0 bg-neutral-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/20 blur-[100px] rounded-[100%] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center space-y-8 flex flex-col items-center">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-50 leading-tight">
                    Ready to Create Your Masterpiece?
                </h2>
<p className="text-lg sm:text-xl text-neutral-300 max-w-2xl">
                    Join thousands of creators and start bringing your ideas to life today. Get started with free credits on us.
                </p>
<div className="pt-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-neutral-950 px-8 py-4 text-base font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="#signup">
                        Sign Up and Get Free Credits
                    </a>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-neutral-900 bg-neutral-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2 space-y-4">
<a className="inline-flex items-center gap-2" href="#">
<iconify-icon className="text-violet-400" icon="solar:palette-linear" width="20"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-neutral-100">LoveArt.ai</span>
</a>
<p className="text-sm text-neutral-400 max-w-xs">
                        The all-in-one AI creative suite providing users with powerful tools for generation, editing, and filtering.
                    </p>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-neutral-100">Tools</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-neutral-200 transition-colors" href="#">AI Art Generators</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">AI Image Editors</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">AI Photo Filters</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">Prompt Library</a></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-neutral-100">Company</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-neutral-200 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="space-y-4">
<h4 className="text-sm font-medium text-neutral-100">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-neutral-200 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-200 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">
                    © 2026 LoveArt.ai. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-200 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon icon="solar:map-arrow-up-linear" width="20"></iconify-icon> 
</a>
<a className="hover:text-neutral-200 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-neutral-200 transition-colors" href="#">
<span className="sr-only">Discord</span>
<iconify-icon icon="solar:chat-square-code-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
