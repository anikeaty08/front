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
      

<header className="relative w-full h-screen flex flex-col justify-between p-6 sm:p-12 z-10 overflow-hidden bg-white">

<div id="canvas-container">
<img alt="Panoramic Ultra-Aesthetic Art" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white"></div>
</div>

<div className="flex justify-between items-start pointer-events-auto w-full max-w-[1400px] mx-auto z-10">
<div className="text-lg font-bold tracking-tight text-black">LoveArt.ai</div>
<nav className="hidden sm:flex gap-8 text-xs font-medium text-neutral-500 uppercase tracking-wide items-center">
<a className="hover:text-black transition-colors" href="#main-content">Home</a>
<a className="hover:text-black transition-colors" href="#features">Style Explorer</a>
<a className="hover:text-black transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="text-black font-bold border-b border-black pb-0.5 hover:text-neutral-600 hover:border-neutral-400 transition-all" href="#studio">Launch Studio</a>
</nav>
</div>

<div className="flex flex-col md:flex-row justify-between items-end gap-12 pointer-events-auto w-full max-w-[1400px] mx-auto mb-4 z-10">

<div className="max-w-xs space-y-8">
<p className="text-sm leading-relaxed text-neutral-800 font-medium">
                    Gallery-quality art. No prompts required. Create stunning, masterpiece-level artwork in seconds using our intuitive AI engine.
                </p>
<button className="group flex items-center gap-2 text-xs font-bold tracking-widest uppercase border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-400 transition-all cursor-pointer" onclick="document.getElementById('main-content').scrollIntoView()">
                    Start Creating for Free <span className="group-hover:translate-y-0.5 transition-transform duration-300">↓</span>
</button>
</div>

<div className="text-right">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.85] text-black">
<span className="block">Create Art</span>
<span className="block">&amp; Masterpieces</span>
</h1>
<p className="text-2xl md:text-4xl text-neutral-500 font-normal mt-3 tracking-tight">powered by ai</p>
</div>
</div>
</header>

<aside className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 z-30">
<div className="flex flex-col gap-2 bg-white border-neutral-200 border rounded-full p-2 shadow-lg items-center">
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.scrollTo(0,0)" role="button">
<iconify-icon className="w-5 h-5" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Home</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#features'" role="button">
<iconify-icon className="w-5 h-5" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Style Explorer</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#gallery'" role="button">
<iconify-icon className="w-5 h-5" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Gallery</span>
</button>
<button className="group grid place-items-center hover:text-black hover:bg-neutral-100 transition relative text-neutral-400 w-10 h-10 rounded-full cursor-pointer" onclick="window.location.href='#pricing'" role="button">
<iconify-icon className="w-5 h-5" icon="solar:tag-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute left-12 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-geist-mono">Pricing</span>
</button>
</div>
</aside>

<main className="relative z-20 bg-white" id="main-content">

<section className="sm:px-8 px-6 pt-20 pb-16 border-t border-neutral-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

<div className="lg:col-span-5">
<div className="relative overflow-hidden bg-neutral-100 rounded-2xl aspect-[4/5]">
<img alt="High-End AI Art" className="w-full h-full object-cover transition-all duration-700" src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-7">
<div className="flex flex-col justify-center h-full">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="w-5 h-5 text-neutral-400" icon="solar:arrow-right-down-linear" strokeWidth="1.5"></iconify-icon>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl font-semibold text-neutral-900 mb-6 tracking-tight">No Prompts Required</h2>
<p className="text-lg leading-relaxed text-neutral-600 mb-8 font-geist-mono">
                                Experience the next evolution of digital creativity. LoveArt.ai translates your raw ideas into breathtaking gallery-quality art without the need for complex prompt engineering. Just select, tweak, and generate masterpieces effortlessly.
                            </p>

<div className="grid grid-cols-2 gap-4 mb-10">
<div className="space-y-3">
<h3 className="text-sm font-semibold text-neutral-900 font-geist-mono uppercase tracking-wide">CAPABILITIES</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="font-geist-mono">• Aspect Ratio Control</li>
<li className="font-geist-mono">• Color Grading AI</li>
<li className="font-geist-mono">• Ultra-HD Upscaling</li>
</ul>
</div>
<div className="space-y-3">
<h3 className="text-sm font-semibold text-neutral-900 font-geist-mono uppercase tracking-wide">STYLES</h3>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="font-geist-mono">• Cinematic &amp; Photoreal</li>
<li className="font-geist-mono">• Digital Illustration</li>
<li className="font-geist-mono">• Abstract &amp; Fine Art</li>
</ul>
</div>
</div>
<div className="flex gap-4">
<a className="px-6 py-3 rounded-lg bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors font-geist-mono text-sm" href="#studio">
                                Launch Studio
                                </a>
<a className="px-6 py-3 rounded-lg border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-colors font-geist-mono text-sm" href="#gallery">
                                    View Gallery
                                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 px-6 bg-neutral-50 border-t border-neutral-200" id="features">
<div className="py-24 max-w-6xl mx-auto">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-geist-mono">Features</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">The Creative Process</h2>
<p className="text-lg text-neutral-500 font-geist-mono max-w-2xl">Everything you need to create your next masterpiece, streamlined into an intuitive engine.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 mb-6 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-100 flex items-center justify-center">
<div className="absolute inset-4 bg-white shadow-sm rounded-lg border border-neutral-200 p-3">
<div className="w-full h-full border-2 border-dashed border-neutral-300 rounded flex items-center justify-center">
<iconify-icon className="w-6 h-6 text-neutral-400" icon="solar:maximize-square-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="inline-flex gap-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium font-geist-mono mb-4 border border-blue-100 items-center">
<iconify-icon className="w-4 h-4" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon> Step 1
                        </div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Choose Canvas</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Select the perfect aspect ratio and base material for your artwork. From standard portraits to sweeping cinematic landscapes.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 mb-6 bg-neutral-900 rounded-xl overflow-hidden relative border border-neutral-800 flex items-center justify-center p-4">
<div className="grid grid-cols-2 gap-3 w-full max-w-[200px]">
<div className="aspect-square rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg"></div>
<div className="aspect-square rounded-lg bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg"></div>
<div className="col-span-2 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"></div>
</div>
</div>
<div className="inline-flex gap-2 bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-medium font-geist-mono mb-4 border border-purple-100 items-center">
<iconify-icon className="w-4 h-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Step 2
                        </div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Select Vibe &amp; Style</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Browse through hundreds of curated artistic styles, moods, and color palettes. Express your vision through intuitive visual selection.</p>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
<div className="h-48 mb-6 bg-neutral-100 rounded-xl overflow-hidden relative border border-neutral-100 flex items-center justify-center p-0">
<img alt="Artwork Output" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="inline-flex gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-xs font-medium font-geist-mono mb-4 border border-emerald-100 items-center">
<iconify-icon className="w-4 h-4" icon="solar:stars-line-duotone" strokeWidth="1.5"></iconify-icon> Output
                        </div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Masterpiece Output</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Our proprietary AI engine generates ultra-high-resolution, gallery-quality digital masterpieces in seconds. Ready to export or print.</p>
</div>
</div>
</div>
</section>

<section className="px-6 sm:px-8 bg-white border-t border-neutral-200" id="gallery">
<div className="mx-auto max-w-6xl py-24">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-geist-mono">Hall of Fame</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Gallery</h2>
<p className="text-lg text-neutral-500 max-w-2xl font-geist-mono">A curated collection of masterpieces created by the LoveArt community.</p>
</div>
<div className="space-y-12">

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs text-neutral-500 font-geist-mono font-medium">@sarahj_art</span>
<div className="h-1 w-1 rounded-full bg-neutral-300"></div>
<span className="text-xs text-neutral-500 font-geist-mono font-medium">Abstract Expressionism</span>
</div>
<h3 className="text-2xl font-bold text-neutral-900 mb-4">Ethereal Dreamscape</h3>
<p className="text-neutral-600 mb-6 leading-relaxed font-geist-mono">A fluid blend of vivid colors and dreamlike textures, created by merging the 'Surrealist' vibe with an ultra-wide panoramic canvas setting.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">Vibrant</span>
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">Surreal</span>
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">4K Upscale</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-0.5" href="#gallery">
                                View details <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="order-1 lg:order-2">
<div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-50 group-hover:-translate-y-2 transition-transform duration-500 aspect-video">
<img alt="Ethereal Dreamscape" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2">
<div className="flex items-center gap-2 mb-4">
<span className="text-xs text-neutral-500 font-geist-mono font-medium">@neo_creator</span>
<div className="h-1 w-1 rounded-full bg-neutral-300"></div>
<span className="text-xs text-neutral-500 font-geist-mono font-medium">Sci-Fi Portrait</span>
</div>
<h3 className="text-2xl font-bold text-neutral-900 mb-4">Cyberpunk Elegance</h3>
<p className="text-neutral-600 mb-6 leading-relaxed font-geist-mono">A striking juxtaposition of high-tech lighting and classical portraiture. This piece demonstrates LoveArt's unparalleled handling of complex lighting scenarios.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">Neon Lighting</span>
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">Portrait</span>
<span className="px-3 py-1 text-xs bg-neutral-100 text-neutral-600 border border-neutral-200 rounded-full font-geist-mono">Cinematic</span>
</div>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-blue-600 transition-colors border-b border-transparent hover:border-blue-600 pb-0.5" href="#gallery">
                                View details <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="order-1">
<div className="rounded-xl overflow-hidden border border-neutral-200 shadow-xl bg-neutral-50 group-hover:-translate-y-2 transition-transform duration-500 aspect-[4/3]">
<img alt="Cyberpunk Elegance" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="text-center mt-20">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-neutral-200 rounded-full text-neutral-900 hover:bg-neutral-50 transition-all font-geist-mono text-sm shadow-sm hover:shadow-md" href="#gallery">
                        View all gallery pieces <iconify-icon className="w-4 h-4" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="bg-neutral-50 border-t border-neutral-200 px-6 sm:px-8">
<div className="max-w-4xl mx-auto py-24 text-center">
<div className="mb-10">
<iconify-icon className="w-8 h-8 mx-auto text-neutral-300 mb-6" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-3xl md:text-4xl font-medium text-neutral-900 leading-tight mb-8">
                        "I've never considered myself a creative person, but LoveArt.ai completely changed that. I simply selected a moody vibe and a canvas, and within seconds I had a gallery-worthy masterpiece that I actually ended up printing for my living room."
                    </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden">
<img alt="Sarah Jenkins" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<div className="font-bold text-neutral-900 text-sm">Sarah Jenkins</div>
<div className="text-neutral-500 text-xs font-geist-mono">Digital Artist &amp; Enthusiast</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 px-6 bg-white border-t border-neutral-200" id="pricing">
<div className="py-24 max-w-6xl mx-auto">
<div className="mb-16">
<div className="flex items-center gap-3 mb-6">
<span className="text-xs font-bold text-neutral-400 uppercase tracking-widest font-geist-mono">Plans</span>
<div className="h-px flex-1 bg-neutral-200"></div>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Pricing</h2>
<p className="text-lg text-neutral-500 font-geist-mono max-w-2xl">Start creating for free, or upgrade to unlock unlimited high-res generation and commercial rights.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Free</h3>
<p className="text-neutral-500 text-sm font-geist-mono mb-4">Perfect for exploring styles.</p>
<div className="text-4xl font-bold text-neutral-900 tracking-tight">$0<span className="text-lg text-neutral-400 font-medium">/mo</span></div>
</div>
<div className="h-px w-full bg-neutral-100 mb-6"></div>
<ul className="text-sm text-neutral-500 space-y-3 font-geist-mono flex-1 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> 50 Generations/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Standard Resolution</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Personal License</li>
<li className="flex items-center gap-2 text-neutral-300"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> No Watermarks</li>
</ul>
<button className="w-full px-6 py-3 rounded-lg border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-colors font-geist-mono text-sm">
                            Get Started
                        </button>
</div>

<div className="group bg-neutral-900 border border-neutral-900 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider font-geist-mono">Popular</div>
<div className="mb-6">
<h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
<p className="text-neutral-400 text-sm font-geist-mono mb-4">For serious digital creators.</p>
<div className="text-4xl font-bold text-white tracking-tight">$15<span className="text-lg text-neutral-500 font-medium">/mo</span></div>
</div>
<div className="h-px w-full bg-neutral-800 mb-6"></div>
<ul className="text-sm text-neutral-300 space-y-3 font-geist-mono flex-1 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 500 Generations/month</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> 4K Resolution Upscale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Commercial License</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> No Watermarks</li>
</ul>
<button className="w-full px-6 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors font-geist-mono text-sm">
                            Upgrade to Pro
                        </button>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Plus</h3>
<p className="text-neutral-500 text-sm font-geist-mono mb-4">Unlimited power for studios.</p>
<div className="text-4xl font-bold text-neutral-900 tracking-tight">$39<span className="text-lg text-neutral-400 font-medium">/mo</span></div>
</div>
<div className="h-px w-full bg-neutral-100 mb-6"></div>
<ul className="text-sm text-neutral-500 space-y-3 font-geist-mono flex-1 mb-8">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Unlimited Generations</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> 8K Resolution Upscale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Full Commercial Rights</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-900" icon="solar:check-circle-linear"></iconify-icon> Priority Engine Queue</li>
</ul>
<button className="w-full px-6 py-3 rounded-lg border border-neutral-200 text-neutral-900 font-medium hover:bg-neutral-50 transition-colors font-geist-mono text-sm">
                            Subscribe Plus
                        </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 px-6 sm:px-8">
<div className="mx-auto max-w-6xl py-12 md:py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
<div>
<div className="font-bold text-lg tracking-tight mb-2">LoveArt.ai</div>
<p className="text-neutral-500 text-sm font-geist-mono">© 2026 LoveArt.ai. All rights reserved.</p>
<div className="mt-4 flex gap-4 text-xs text-neutral-400 font-geist-mono">
<a className="hover:text-black transition" href="#">Terms</a>
<a className="hover:text-black transition" href="#">Privacy</a>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 md:justify-end items-start md:items-center text-sm font-medium text-neutral-600">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-geist-mono">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                            Engine Status: Operational
                        </div>
<nav className="flex gap-6 items-center">
<a aria-label="X (Twitter)" className="text-neutral-400 hover:text-black transition flex items-center" href="#">
<iconify-icon className="w-5 h-5" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Instagram" className="text-neutral-400 hover:text-black transition flex items-center" href="#">
<iconify-icon className="w-5 h-5" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a aria-label="Behance" className="text-neutral-400 hover:text-black transition flex items-center" href="#">
<iconify-icon className="w-5 h-5" icon="solar:palette-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
