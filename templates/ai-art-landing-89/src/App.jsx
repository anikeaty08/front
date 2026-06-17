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



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{background: 'radial-gradient(circle at 50% 0%, rgba(30, 41, 59, 0.4) 0%, transparent 70%)'}}></div>

<main className="relative z-10 w-full max-w-[88rem] bg-[#0a0a0a] md:bg-[#0c0c0c] md:border border-white/5 md:rounded-[2rem] md:shadow-2xl overflow-hidden flex flex-col">

<nav className="sticky top-0 z-50 w-full px-6 py-4 bg-[#0a0a0a]/80 md:bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-neutral-200 to-neutral-600 flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-[#0a0a0a] rounded-sm transform group-hover:rotate-45 transition-transform duration-300"></div>
</div>
<span className="text-sm font-medium tracking-tight">LoveArt.ai</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">

<div className="relative group py-2">
<button className="flex items-center gap-1 hover:text-white transition-colors">
                        Tools <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[#111] border border-white/10 rounded-xl p-2 opacity-0 invisible -translate-y-2 transition-all duration-200 shadow-xl">
<a className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">AI Art Generators</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">AI Image Editors</a>
<a className="block px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" href="#">AI Photo Filters</a>
</div>
</div>
<a className="hover:text-white transition-colors" href="#">Prompts</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log In</a>
<a className="text-xs md:text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors tracking-tight" href="#">Sign Up</a>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center w-full">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>
<h1 className="animate-on-scroll text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 max-w-4xl leading-[1.1] mb-6">
                Where Art Begins.
            </h1>
<p className="animate-on-scroll text-base md:text-lg font-normal text-neutral-400 max-w-2xl mb-10 leading-relaxed" style={{animationDelay: '100ms'}}>
                The complete AI studio for creators, marketers, and designers. Generate, edit, and transform your ideas into stunning visuals—instantly.
            </p>
<div className="animate-on-scroll flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: '200ms'}}>
<a className="h-12 px-6 flex items-center justify-center bg-white text-black text-sm font-medium tracking-tight rounded-full hover:scale-105 transition-transform duration-300 w-full sm:w-auto" href="#">
                    Start Creating for Free
                </a>
<a className="h-12 px-6 flex items-center justify-center text-neutral-300 hover:text-white text-sm font-medium tracking-tight border border-white/10 rounded-full hover:bg-white/5 transition-all w-full sm:w-auto gap-2" href="#features">
                    Explore the Tools <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="hidden lg:flex absolute top-32 left-[15%] items-center gap-2 bg-[#111]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-neutral-300 animate-on-scroll" style={{animationDelay: '400ms'}}>
<iconify-icon className="text-neutral-500" icon="solar:magic-stick-3-linear"></iconify-icon> 19 Specialized Tools
            </div>
<div className="hidden lg:flex absolute bottom-32 right-[15%] items-center gap-2 bg-[#111]/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-xs font-medium text-neutral-300 animate-on-scroll" style={{animationDelay: '500ms'}}>
<iconify-icon className="text-neutral-500" icon="solar:gallery-linear"></iconify-icon> Watermark-free
            </div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0a]/50 py-8 overflow-hidden flex flex-col items-center">
<p className="text-xs font-normal text-neutral-500 mb-6 uppercase tracking-widest text-center">Loved by creators at innovative companies</p>
<div className="w-full relative flex items-center max-w-5xl mx-auto mask-image" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee gap-16 md:gap-24 items-center pr-16 md:pr-24">

<span className="text-xl font-medium tracking-tight text-neutral-600">Google</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Meta</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Netflix</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Spotify</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Stripe</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Vercel</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Google</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Meta</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Netflix</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Spotify</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Stripe</span>
<span className="text-xl font-medium tracking-tight text-neutral-600">Vercel</span>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full" id="features">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Your Entire Creative Workflow, Reimagined.</h2>
<p className="text-sm md:text-base font-normal text-neutral-400 max-w-2xl mx-auto">Don't just generate. Edit, enhance, and transform with a complete suite of 19 specialized AI tools designed for professional results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="animate-on-scroll bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#131313] transition-colors duration-300 flex flex-col" style={{animationDelay: '100ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">AI Art Generators</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed mb-6 flex-grow">Go beyond basic prompts. Create consistent characters for your stories, design unique anime and comic book art, or even generate scalable vector graphics from a single line of text. Your imagination is the only limit.</p>
<div className="border-t border-white/5 pt-4">
<p className="text-xs font-medium text-neutral-500 mb-2 tracking-tight">FEATURED TOOLS</p>
<ul className="flex flex-wrap gap-2">
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Character Gen</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Anime</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Comic</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Vector</li>
</ul>
</div>
</div>

<div className="animate-on-scroll bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#131313] transition-colors duration-300 flex flex-col" style={{animationDelay: '200ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:crop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">AI Image Editors</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed mb-6 flex-grow">Say goodbye to tedious manual editing. Remove backgrounds with pixel-perfect precision, erase unwanted objects seamlessly, expand your canvas beyond its original borders, and upscale images to stunning high resolution with a single click.</p>
<div className="border-t border-white/5 pt-4">
<p className="text-xs font-medium text-neutral-500 mb-2 tracking-tight">FEATURED TOOLS</p>
<ul className="flex flex-wrap gap-2">
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Remove BG</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Object Eraser</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Enhancer</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Expand</li>
</ul>
</div>
</div>

<div className="animate-on-scroll bg-[#111] border border-white/5 rounded-2xl p-8 hover:bg-[#131313] transition-colors duration-300 flex flex-col" style={{animationDelay: '300ms'}}>
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-neutral-300" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3">AI Photo Filters</h3>
<p className="text-sm font-normal text-neutral-400 leading-relaxed mb-6 flex-grow">Discover a new dimension of creativity. Instantly apply breathtaking artistic styles to your photos, turn a simple sketch into a polished masterpiece, or even convert 2D images into incredible 3D scenes.</p>
<div className="border-t border-white/5 pt-4">
<p className="text-xs font-medium text-neutral-500 mb-2 tracking-tight">FEATURED TOOLS</p>
<ul className="flex flex-wrap gap-2">
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Style Transfer</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Sketch to Art</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">2D to 3D</li>
<li className="text-xs font-normal text-neutral-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">Img-to-Prompt</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a]">
<div className="max-w-5xl mx-auto">
<h2 className="animate-on-scroll text-2xl md:text-4xl font-semibold tracking-tight text-center mb-16">Create in 3 Simple Steps</h2>
<div className="relative flex flex-col md:flex-row gap-12 md:gap-8 justify-between">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="animate-on-scroll flex flex-col items-center text-center relative z-10 flex-1" style={{animationDelay: '100ms'}}>
<div className="w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xl font-semibold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
<iconify-icon icon="solar:cursor-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Choose Your Tool</h3>
<p className="text-sm font-normal text-neutral-400 max-w-xs">Select from 19 powerful AI tools for generation, editing, or creative filtering.</p>
</div>

<div className="animate-on-scroll flex flex-col items-center text-center relative z-10 flex-1" style={{animationDelay: '200ms'}}>
<div className="w-16 h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-xl font-semibold text-white mb-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
<iconify-icon icon="solar:keyboard-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Provide Your Input</h3>
<p className="text-sm font-normal text-neutral-400 max-w-xs">Write a text prompt, or upload your own image or sketch to guide the AI.</p>
</div>

<div className="animate-on-scroll flex flex-col items-center text-center relative z-10 flex-1" style={{animationDelay: '300ms'}}>
<div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center text-xl font-semibold mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Make it Magic</h3>
<p className="text-sm font-normal text-neutral-400 max-w-xs">Click to generate. Download your high-resolution, watermark-free artwork instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0c0c0c] border-t border-white/5" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Smarter Pricing for Modern Creators.</h2>
<p className="text-sm md:text-base font-normal text-neutral-400 max-w-xl mx-auto">No subscriptions. No hidden fees. Just simple, pay-as-you-go credits that never expire. Perfect for projects of any size.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

<div className="animate-on-scroll bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col h-full" style={{animationDelay: '100ms'}}>
<h3 className="text-lg font-medium tracking-tight text-neutral-300 mb-2">Starter Pack</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">250</span>
<span className="text-sm font-normal text-neutral-500">credits</span>
</div>
<p className="text-sm font-normal text-neutral-400 mb-8 flex-grow">Perfect for trying out the tools or occasional small projects.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> All 19 tools included</li>
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Commercial usage rights</li>
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> No expiration date</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Select Plan</a>
</div>

<div className="animate-on-scroll bg-[#161616] border border-white/20 rounded-2xl p-8 flex flex-col h-full relative md:scale-105 shadow-2xl z-10" style={{animationDelay: '200ms'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full text-xs font-medium tracking-tight">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Creator Pack</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-semibold tracking-tight">750</span>
<span className="text-sm font-normal text-neutral-400">credits</span>
</div>
<p className="text-sm font-normal text-neutral-400 mb-8 flex-grow">Ideal for regular users, social media managers, and hobbyists.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white font-normal"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> All 19 tools included</li>
<li className="flex items-center gap-2 text-sm text-white font-normal"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Commercial usage rights</li>
<li className="flex items-center gap-2 text-sm text-white font-normal"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> No expiration date</li>
<li className="flex items-center gap-2 text-sm text-white font-normal"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Priority generation speed</li>
</ul>
<a className="w-full py-3 rounded-lg bg-white text-black text-center text-sm font-medium hover:bg-neutral-200 transition-colors" href="#">Select Plan</a>
</div>

<div className="animate-on-scroll bg-[#111] border border-white/5 rounded-2xl p-8 flex flex-col h-full" style={{animationDelay: '300ms'}}>
<h3 className="text-lg font-medium tracking-tight text-neutral-300 mb-2">Pro Pack</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight">2000</span>
<span className="text-sm font-normal text-neutral-500">credits</span>
</div>
<p className="text-sm font-normal text-neutral-400 mb-8 flex-grow">Designed for professionals, agencies, and high-volume needs.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> All 19 tools included</li>
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Commercial usage rights</li>
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> No expiration date</li>
<li className="flex items-center gap-2 text-sm text-neutral-300 font-normal"><iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon> Highest priority speed</li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 text-center text-sm font-medium hover:bg-white/5 transition-colors" href="#">Select Plan</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Powerful for Professionals.<br/><span className="text-neutral-500">Simple for Everyone.</span></h2>
<p className="text-sm font-normal text-neutral-400">LoveArt.ai is built for the diverse needs of the modern creative world. Whatever your goal, our tools adapt to your workflow.</p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="animate-on-scroll flex gap-4" style={{animationDelay: '100ms'}}>
<div className="mt-1"><iconify-icon className="text-xl text-neutral-300" icon="solar:pen-new-round-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-medium tracking-tight mb-1">Digital Artists</h3>
<p className="text-xs font-normal text-neutral-400 leading-relaxed">Break creative blocks, generate base concepts, and refine your style with precision control.</p>
</div>
</div>
<div className="animate-on-scroll flex gap-4" style={{animationDelay: '200ms'}}>
<div className="mt-1"><iconify-icon className="text-xl text-neutral-300" icon="solar:smartphone-update-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-medium tracking-tight mb-1">Marketers</h3>
<p className="text-xs font-normal text-neutral-400 leading-relaxed">Produce high-quality ad creatives, social posts, and marketing assets in seconds, not days.</p>
</div>
</div>
<div className="animate-on-scroll flex gap-4" style={{animationDelay: '300ms'}}>
<div className="mt-1"><iconify-icon className="text-xl text-neutral-300" icon="solar:shop-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-medium tracking-tight mb-1">Entrepreneurs</h3>
<p className="text-xs font-normal text-neutral-400 leading-relaxed">Create professional product mockups, logos, and brand visuals without hiring an agency.</p>
</div>
</div>
<div className="animate-on-scroll flex gap-4" style={{animationDelay: '400ms'}}>
<div className="mt-1"><iconify-icon className="text-xl text-neutral-300" icon="solar:code-square-linear"></iconify-icon></div>
<div>
<h3 className="text-base font-medium tracking-tight mb-1">Game Developers</h3>
<p className="text-xs font-normal text-neutral-400 leading-relaxed">Generate textures, concept art, and UI elements rapidly to accelerate your development pipeline.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden flex justify-center">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 rounded-[100%] blur-[80px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-2xl animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">Ready to Create Your Masterpiece?</h2>
<p className="text-base font-normal text-neutral-400 mb-10">Join thousands of creators and start bringing your ideas to life today. Get started with free credits on us.</p>
<a className="inline-flex h-14 px-8 items-center justify-center bg-white text-black text-base font-medium tracking-tight rounded-full hover:scale-105 transition-transform duration-300" href="#">
                    Sign Up and Get Free Credits
                </a>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8 px-6 md:px-12">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
<a className="flex items-center gap-2" href="#">
<div className="w-5 h-5 rounded bg-gradient-to-br from-neutral-200 to-neutral-600 flex items-center justify-center">
<div className="w-2 h-2 bg-[#0a0a0a] rounded-sm transform rotate-45"></div>
</div>
<span className="text-sm font-medium tracking-tight">LoveArt.ai</span>
</a>
<p className="text-xs font-normal text-neutral-500 max-w-xs">
                        The ultimate AI creative suite. Empowering everyone to generate, edit, and transform ideas into reality.
                    </p>
</div>

<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white tracking-tight mb-2">Platform</h4>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">AI Art Generators</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">AI Image Editors</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">AI Photo Filters</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white tracking-tight mb-2">Company</h4>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">Contact</a>
</div>

<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white tracking-tight mb-2">Legal</h4>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-xs font-normal text-neutral-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
<div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs font-normal text-neutral-600">© 2026 LoveArt.ai. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a> 
</div>
</div>
</footer>
</main>


    </>
  );
}
