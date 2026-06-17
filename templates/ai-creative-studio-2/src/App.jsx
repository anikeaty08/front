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



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Text Reveal Setup
            const splitTextElements = document.querySelectorAll(".reveal-text");
            
            splitTextElements.forEach((element) => {
                // Ensure we don't double wrap if re-initialized
                if (!element.classList.contains('wrapped')) {
                    // Simple wrapping strategy for heading text containing potential formatting spans
                    const html = element.innerHTML;
                    // Regex to wrap text chunks ignoring tags
                    const wrappedHtml = html.replace(/(<[^>]+>)|([^<>\s]+(\s+|$))/g, (match, tag, text) => {
                        if (tag) return tag; // Keep tags untouched
                        if (text.trim() === '') return text; // Keep whitespace
                        // Wrap text words
                        const words = text.split(/\s+/).filter(w => w.length > 0);
                        let res = '';
                        text.match(/(\s*)[^\s]+(\s*)/g)?.forEach(chunk => {
                            const trimmed = chunk.trim();
                            if(trimmed) {
                                res += chunk.replace(trimmed, `<span class="word-wrapper"><span class="word-inner">${trimmed}</span></span>`);
                            } else {
                                res += chunk;
                            }
                        });
                        return res || text;
                    });
                    
                    element.innerHTML = wrappedHtml;
                    element.classList.add('wrapped');
                }
            });

            // Animate Words
            const reveals = document.querySelectorAll(".reveal-text");
            reveals.forEach((section) => {
                const words = section.querySelectorAll(".word-inner");
                if (words.length > 0) {
                    gsap.to(words, {
                        y: 0,
                        duration: 1,
                        stagger: 0.03,
                        ease: "power4.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
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
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-zinc-50/70 border-b border-zinc-200/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white group-hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight">LoveArt.ai</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-500">

<div className="group relative py-2 cursor-pointer">
<span className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                        Generators <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 group-hover-visible w-48 z-50">
<div className="bg-white border border-zinc-100 rounded-xl p-2 shadow-lg shadow-zinc-200/20">
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Character Generator</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Anime Generator</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Comic Generator</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Vector Image</a>
</div>
</div>
</div>

<div className="group relative py-2 cursor-pointer">
<span className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                        Editors <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 group-hover-visible w-48 z-50">
<div className="bg-white border border-zinc-100 rounded-xl p-2 shadow-lg shadow-zinc-200/20">
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Remove Background</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Object Remover</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Photo Enhancer</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Photo Expand</a>
</div>
</div>
</div>

<div className="group relative py-2 cursor-pointer">
<span className="hover:text-zinc-900 transition-colors flex items-center gap-1">
                        Filters <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 group-hover-visible w-48 z-50">
<div className="bg-white border border-zinc-100 rounded-xl p-2 shadow-lg shadow-zinc-200/20">
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Style Transfer</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Sketch to Art</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">2D to 3D Converter</a>
<a className="block px-3 py-2 rounded-md hover:bg-zinc-50 text-zinc-900 transition-colors" href="#">Image-to-Prompt</a>
</div>
</div>
</div>
<a className="hover:text-zinc-900 transition-colors" href="#">Prompts</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block font-normal" href="#">Log In</a>
<button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-all active:scale-95 shadow-sm font-normal">
                    Sign Up
                </button>
</div>
</div>
</nav>

<header className="relative pt-24 pb-12 px-4 md:px-6 max-w-7xl mx-auto">
<div className="relative w-full h-[80vh] min-h-[600px] rounded-[2rem] overflow-hidden group bg-zinc-900">

<img alt="AI Generated Art" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-zinc-900/90"></div>

<div className="relative h-full flex flex-col items-center justify-center p-8 md:p-12 text-white text-center max-w-4xl mx-auto mt-12">
<div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-normal">
<span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse"></span>
                    v2.0 is now live
                </div>
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[1.05] mb-6">
                    Where Art Begins.
                </h1>
<p className="text-zinc-300 text-lg md:text-xl font-light max-w-2xl leading-relaxed mb-10">
                    The complete AI studio for creators, marketers, and designers. Generate, edit, and transform your ideas into stunning visuals—instantly.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="bg-white text-zinc-900 h-12 rounded-full flex items-center justify-center px-8 hover:bg-zinc-100 transition-colors w-full sm:w-auto font-medium tracking-tight">
                        Start Creating for Free
                    </button>
<a className="h-12 flex items-center justify-center px-6 text-white hover:text-zinc-300 transition-colors font-normal gap-2" href="#features">
                        Explore the Tools <iconify-icon className="mt-0.5" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="border-b border-zinc-200/60 pb-12 pt-4 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<p className="text-xs text-zinc-400 font-normal tracking-tight mb-8">Loved by creators at Google, Meta, and thousands of startups worldwide</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale">
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" icon="simple-icons:google" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" icon="simple-icons:meta" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" icon="simple-icons:adobe" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" icon="simple-icons:stripe" strokeWidth="1.5" width="32"></iconify-icon>
<iconify-icon className="hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" icon="simple-icons:vercel" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="features">
<div className="text-center mb-24 max-w-3xl mx-auto">
<h2 className="reveal-text text-4xl md:text-5xl font-normal tracking-tight leading-tight mb-6 text-zinc-900">
                Your Entire Creative Workflow, <span className="font-serif italic text-zinc-500">Reimagined.</span>
</h2>
<p className="text-zinc-500 text-lg font-light leading-relaxed">
                Don't just generate. Edit, enhance, and transform with a complete suite of 19 specialized AI tools designed for professional results.
            </p>
</div>
<div className="flex flex-col gap-24">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1 relative group rounded-3xl overflow-hidden border border-zinc-200/50 bg-white">
<div className="aspect-[4/3] w-full relative">
<img alt="AI Generator" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/40 to-transparent"></div>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
<div className="w-12 h-12 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs font-medium tracking-tight text-zinc-400 mb-2 uppercase">AI Art Generators</p>
<h3 className="reveal-text text-3xl font-normal tracking-tight text-zinc-900 mb-4">Breathe Life into Your Ideas</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-8">
                        Go beyond basic prompts. Create consistent characters for your stories, design unique anime and comic book art, or even generate scalable vector graphics from a single line of text. Your imagination is the only limit.
                    </p>
<ul className="space-y-3 border-l-2 border-zinc-100 pl-4">
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Character Generator</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Anime &amp; Comic Generator</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Vector Image Generator</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 lg:pr-8">
<div className="w-12 h-12 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-xl" icon="solar:eraser-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs font-medium tracking-tight text-zinc-400 mb-2 uppercase">AI Image Editors</p>
<h3 className="reveal-text text-3xl font-normal tracking-tight text-zinc-900 mb-4">Effortless Editing, Flawless Results</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-8">
                        Say goodbye to tedious manual editing. Remove backgrounds with pixel-perfect precision, erase unwanted objects seamlessly, expand your canvas beyond its original borders, and upscale images to stunning high resolution with a single click.
                    </p>
<ul className="space-y-3 border-l-2 border-zinc-100 pl-4">
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Remove Background &amp; Objects</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> AI Photo Enhancer</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> AI Photo Expand</li>
</ul>
</div>
<div className="lg:col-span-7 relative group rounded-3xl overflow-hidden border border-zinc-200/50 bg-zinc-100 flex items-center justify-center p-8 md:p-12">
<div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-zinc-200/50 bg-white">
<img alt="Editor Interface" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-y-0 left-0 w-1/2 backdrop-blur-md bg-white/10 border-r border-white/20 flex items-center justify-center">
<iconify-icon className="text-4xl text-white/50" icon="solar:eraser-bold"></iconify-icon>
</div>
<div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-lg px-3 py-2 flex gap-2 border border-zinc-100 text-xs">
<div className="w-6 h-6 rounded bg-zinc-100 flex items-center justify-center"><iconify-icon icon="solar:undo-left-linear"></iconify-icon></div>
<div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1 relative group rounded-3xl overflow-hidden border border-zinc-200/50 bg-white">
<div className="aspect-[4/3] w-full relative flex">
<img alt="Original Photo" className="w-1/2 h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=2845&amp;auto=format&amp;fit=crop"/>
<img alt="Filtered Art" className="w-1/2 h-full object-cover transition-transform duration-700 group-hover:scale-105 origin-left" src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&amp;w=2958&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-y-0 left-1/2 w-px bg-white/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg border border-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 lg:pl-8">
<div className="w-12 h-12 rounded-xl border border-zinc-200 bg-white flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-xs font-medium tracking-tight text-zinc-400 mb-2 uppercase">AI Photo Filters</p>
<h3 className="reveal-text text-3xl font-normal tracking-tight text-zinc-900 mb-4">Transform Photos into Art</h3>
<p className="text-zinc-500 font-light leading-relaxed mb-8">
                        Discover a new dimension of creativity. Instantly apply breathtaking artistic styles to your photos, turn a simple sketch into a polished masterpiece, or even convert 2D images into incredible 3D scenes.
                    </p>
<ul className="space-y-3 border-l-2 border-zinc-100 pl-4">
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> AI Style Transfer</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Turn Sketch to Art</li>
<li className="flex items-center gap-3 text-sm text-zinc-700"><iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 2D to 3D &amp; Image-to-Prompt</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200/60 bg-white py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="reveal-text text-3xl md:text-4xl font-normal tracking-tight text-zinc-900">Create in 3 Simple Steps</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-zinc-100"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center font-medium border-4 border-white shadow-sm">1</span>
<iconify-icon className="text-3xl text-zinc-700" icon="solar:widget-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Choose Your Tool</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">Select from 19 powerful AI tools for generation, editing, or creative filtering.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-zinc-50 rounded-2xl border border-zinc-200 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-zinc-900 text-white text-xs flex items-center justify-center font-medium border-4 border-white shadow-sm">2</span>
<iconify-icon className="text-3xl text-zinc-700" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Provide Your Input</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">Write a text prompt, or upload your own image or sketch to begin.</p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-zinc-900/10">
<span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-white text-zinc-900 text-xs flex items-center justify-center font-medium border-4 border-white shadow-sm">3</span>
<iconify-icon className="text-3xl text-white" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-3 tracking-tight">Make it Magic</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed max-w-xs">Click to generate, edit, or transform. Download your high-resolution, watermark-free artwork.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="pricing">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="reveal-text text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-4">Smarter Pricing for Modern Creators.</h2>
<p className="text-zinc-500 text-lg font-light leading-relaxed">
                No subscriptions. No hidden fees. Just simple, pay-as-you-go credits that never expire. Perfect for projects of any size.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
<p className="text-sm text-zinc-500 font-medium mb-4">Starter Pack</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-normal tracking-tight text-zinc-900">250</span>
<span className="text-sm text-zinc-500">credits</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">Perfect for hobbyists and occasional edits.</p>
<button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors">Select Plan</button>
</div>

<div className="relative bg-zinc-900 rounded-3xl p-8 border border-zinc-800 shadow-2xl md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-zinc-900 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                </div>
<p className="text-sm text-zinc-400 font-medium mb-4">Creator Pack</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-normal tracking-tight text-white">750</span>
<span className="text-sm text-zinc-400">credits</span>
</div>
<p className="text-sm text-zinc-400 font-light mb-8">The sweet spot for daily creators and social managers.</p>
<button className="w-full py-3 rounded-xl bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors shadow-sm">Select Plan</button>
</div>

<div className="bg-white rounded-3xl p-8 border border-zinc-200/60 shadow-sm">
<p className="text-sm text-zinc-500 font-medium mb-4">Pro Pack</p>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-normal tracking-tight text-zinc-900">2000</span>
<span className="text-sm text-zinc-500">credits</span>
</div>
<p className="text-sm text-zinc-500 font-light mb-8">For agencies, businesses, and heavy workflows.</p>
<button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-900 font-medium text-sm hover:bg-zinc-50 transition-colors">Select Plan</button>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:text-zinc-600 hover:border-zinc-600 transition-colors">
                Find Your Perfect Plan
            </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-zinc-200/60 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
<div className="md:col-span-5">
<h2 className="reveal-text text-3xl md:text-4xl font-normal tracking-tight text-zinc-900 mb-6 leading-tight">
                        Powerful for Professionals. <br/><span className="text-zinc-400 font-light">Simple for Everyone.</span>
</h2>
<p className="text-zinc-500 font-light leading-relaxed mb-8">
                        LoveArt.ai is built for the diverse needs of the modern creative world. Whether you are scaling campaigns or just exploring ideas.
                    </p>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">

<div>
<iconify-icon className="text-2xl text-zinc-900 mb-4" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900 mb-2">Artists &amp; Illustrators</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Overcome creative blocks, generate references, and stylize sketches instantly.</p>
</div>

<div>
<iconify-icon className="text-2xl text-zinc-900 mb-4" icon="solar:megaphone-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900 mb-2">Marketers &amp; Creators</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Produce engaging visual content for social media and ads without waiting for design resources.</p>
</div>

<div>
<iconify-icon className="text-2xl text-zinc-900 mb-4" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900 mb-2">Entrepreneurs</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Create professional product mockups and brand imagery on a lean budget.</p>
</div>

<div>
<iconify-icon className="text-2xl text-zinc-900 mb-4" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-base font-medium text-zinc-900 mb-2">Indie Developers</h4>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Generate consistent game assets, character sprites, and concept art rapidly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 md:px-6 pb-12">
<div className="relative rounded-[2.5rem] overflow-hidden bg-zinc-950 text-center py-24 px-6 border-gradient-dark">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-[100%] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-white" icon="solar:palette-bold"></iconify-icon>
</div>
<h2 className="reveal-text text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
                    Ready to Create Your Masterpiece?
                </h2>
<p className="text-zinc-400 text-lg font-light mb-10 leading-relaxed">
                    Join thousands of creators and start bringing your ideas to life today. Get started with free credits on us.
                </p>
<button className="bg-white text-zinc-900 px-8 py-4 rounded-full font-medium text-sm hover:bg-zinc-100 hover:scale-105 transition-all shadow-lg shadow-white/10 active:scale-95">
                    Sign Up and Get Free Credits
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200/60 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-4 lg:col-span-5">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-zinc-900">LoveArt.ai</span>
</a>
<p className="text-sm text-zinc-500 font-light max-w-xs leading-relaxed">
                        The all-in-one web-based AI creative suite. Generate, edit, and filter your imagination into reality.
                    </p>
</div>

<div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
<div>
<h5 className="font-medium text-zinc-900 mb-4 tracking-tight">Tools</h5>
<ul className="space-y-3 font-light text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Art Generators</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Image Editors</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Photo Filters</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Prompt Library</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-zinc-900 mb-4 tracking-tight">Company</h5>
<ul className="space-y-3 font-light text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-zinc-900 mb-4 tracking-tight">Legal</h5>
<ul className="space-y-3 font-light text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-zinc-900 mb-4 tracking-tight">Social</h5>
<ul className="space-y-3 font-light text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="simple-icons:x"></iconify-icon> Twitter</a></li>
<li><a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="simple-icons:instagram"></iconify-icon> Instagram</a></li>
<li><a className="hover:text-zinc-900 transition-colors flex items-center gap-2" href="#"><iconify-icon icon="simple-icons:discord"></iconify-icon> Discord</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-light">
<p>© 2026 LoveArt.ai. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> All systems operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
