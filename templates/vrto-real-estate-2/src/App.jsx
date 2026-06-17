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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
},
brand: {
500: '#3b82f6', // Blue-ish tone for VRTO
600: '#2563eb',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 2s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
'100%': { transform: 'translate(-50%, -50%) rotate(360deg)' },
}
}
}
}
}



        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Flashlight/Glow Effect on Cards
        const cards = document.querySelectorAll(".flashlight-card");
        
        document.body.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-white rounded flex items-center justify-center text-black font-bold text-xs tracking-tighter shadow-[0_0_15px_rgba(255,255,255,0.3)]">
<iconify-icon icon="solar:box-bold" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">VRTO</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#tours">Tours</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors" href="#showcase">Showcase</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-[0_0_10px_rgba(255,255,255,0.1)]">Create Tour</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 mb-32 relative">
<div className="relative z-10 text-center max-w-4xl mx-auto">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors cursor-pointer">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></span>
<span className="text-xs font-medium text-blue-100">#1 Virtual Tour Software for Real Estate</span>
<iconify-icon className="text-white/50" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="reveal-on-scroll text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1]">
                    Bring spaces<br/>
<span className="text-gradient">to life online.</span>
</h1>
<p className="reveal-on-scroll text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The easiest way to create professional 360° virtual tours. Upload your panoramas, add hotspots, and publish in minutes.
                </p>
<div className="reveal-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative rounded-full p-[1px] overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-beam"></div>
<div className="relative bg-neutral-950 rounded-full px-8 py-3 transition-all group-hover:bg-neutral-900">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-white">Start Creating for Free</span>
<iconify-icon className="text-white group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</button>
<button className="px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-sm font-medium text-white">
                        View Example Tour
                    </button>
</div>
</div>

<div className="reveal-on-scroll mt-24 relative max-w-5xl mx-auto">
<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-blue-900/20 overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md bg-black/50 border border-white/5 text-[10px] text-neutral-500 font-mono">
<iconify-icon icon="solar:lock-keyhole-minimalistic-bold" width="8"></iconify-icon>
                                vrto.me/tour/luxury-penthouse
                            </div>
</div>
</div>

<div className="aspect-[16/9] relative bg-neutral-900 group overflow-hidden">

<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://kuula.co/share/collection/7lVLq?logo=0&amp;info=0&amp;fs=1&amp;vr=1&amp;sd=1&amp;initload=0&amp;thumbs=1" width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-black/50 backdrop-blur-sm py-12 mb-32 overflow-hidden">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Powering agencies &amp; photographers worldwide</p>
<div className="relative flex overflow-x-hidden group mask-gradient" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="animate-marquee flex gap-20 items-center whitespace-nowrap px-8">

<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:home-bold" width="24"></iconify-icon> ESTATES</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:city-bold" width="24"></iconify-icon> UrbanLiving</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:buildings-bold" width="24"></iconify-icon> SKYLINE</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:key-bold" width="24"></iconify-icon> KeyPoint</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:sofa-bold" width="24"></iconify-icon> INTERIORS</div>

<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:home-bold" width="24"></iconify-icon> ESTATES</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:city-bold" width="24"></iconify-icon> UrbanLiving</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:buildings-bold" width="24"></iconify-icon> SKYLINE</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:key-bold" width="24"></iconify-icon> KeyPoint</div>
<div className="flex items-center gap-2 text-neutral-600 font-semibold text-lg"><iconify-icon icon="solar:sofa-bold" width="24"></iconify-icon> INTERIORS</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="text-center mb-20">
<h2 className="reveal-on-scroll text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">How it works</h2>
<p className="reveal-on-scroll text-neutral-400 max-w-xl mx-auto">Create immersive experiences in three simple steps. No coding required.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] border-t border-dashed border-white/10 z-0"></div>

<div className="reveal-on-scroll flex flex-col items-center text-center relative z-10">
<div className="w-24 h-24 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-blue-400" height="40" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">1. Capture</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Use any 360° camera or DSLR to capture panoramic photos of your space.</p>
</div>

<div className="reveal-on-scroll flex flex-col items-center text-center relative z-10" style={{transitionDelay: '100ms'}}>
<div className="w-24 h-24 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-purple-400" height="40" icon="solar:upload-track-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">2. Upload &amp; Edit</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Upload to VRTO. Our editor automatically stitches and links the rooms.</p>
</div>

<div className="reveal-on-scroll flex flex-col items-center text-center relative z-10" style={{transitionDelay: '200ms'}}>
<div className="w-24 h-24 rounded-2xl bg-[#0f0f0f] border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<iconify-icon className="text-emerald-400" height="40" icon="solar:share-circle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">3. Publish</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Get a shareable link instantly. Embed on your website or share on social media.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="features">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">

<div className="reveal-on-scroll flashlight-card group min-h-[400px]">
<div className="flashlight-inner p-8">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center mb-6 border border-white/5">
<iconify-icon className="text-white" icon="solar:ruler-pen-bold" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Interactive Floor Plans</h3>
<p className="text-neutral-400 text-sm leading-relaxed max-w-sm">Automatically generate schematic floor plans from your tour data. Viewers can navigate by clicking rooms on the map.</p>
</div>
<div className="mt-8 relative w-full h-48 bg-neutral-900 rounded border border-white/5 overflow-hidden flex items-center justify-center">

<svg className="opacity-50 group-hover:opacity-100 transition-opacity duration-500" fill="none" height="150" viewbox="0 0 200 150" width="200">
<path d="M10 10 H190 V140 H10 V10" stroke="white" strokeWidth="1.5"></path>
<path d="M10 80 H80 V10" stroke="white" strokeWidth="1.5"></path>
<path d="M120 10 V140" stroke="white" strokeWidth="1.5"></path>
<circle className="animate-pulse" cx="45" cy="45" fill="#3b82f6" r="4"></circle>
<circle className="animate-pulse" cx="155" cy="75" fill="#3b82f6" r="4" style={{animationDelay: '1s'}}></circle>
</svg>
</div>
</div>
</div>
</div>
<div className="grid grid-rows-2 gap-6">

<div className="reveal-on-scroll flashlight-card group">
<div className="flashlight-inner p-6 flex flex-row items-center gap-6">
<div className="flex-1">
<iconify-icon className="text-blue-400 mb-4" icon="solar:glasses-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">VR Headset Ready</h3>
<p className="text-neutral-400 text-xs leading-relaxed">Fully compatible with Meta Quest, cardboard, and other WebVR devices.</p>
</div>
</div>
</div>

<div className="reveal-on-scroll flashlight-card group">
<div className="flashlight-inner p-6 flex flex-row items-center gap-6">
<div className="flex-1">
<iconify-icon className="text-purple-400 mb-4" icon="solar:smartphone-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Mobile Optimized</h3>
<p className="text-neutral-400 text-xs leading-relaxed">Blazing fast load times on 4G/5G networks. Responsive controls for touch.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 border-t border-white/5 pt-24" id="pricing">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="reveal-on-scroll text-3xl font-medium tracking-tight text-white mb-2">Flexible plans.</h2>
<p className="reveal-on-scroll text-neutral-400">Choose the perfect plan for your business needs.</p>
</div>
<div className="reveal-on-scroll flex items-center bg-neutral-900 p-1 rounded-lg border border-white/10">
<button className="px-4 py-1.5 rounded-md bg-neutral-800 text-white text-xs font-medium shadow-sm">Monthly</button>
<button className="px-4 py-1.5 rounded-md text-neutral-400 text-xs font-medium hover:text-white transition-colors">Yearly (-20%)</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll flashlight-card h-full">
<div className="flashlight-inner p-8 flex flex-col h-full bg-neutral-900/40">
<div className="mb-6">
<h3 className="text-sm font-semibold text-white">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$0</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> 1 Active Tour</li>
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> 15 Panoramas per tour</li>
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Standard Quality</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-colors">Get Started</button>
</div>
</div>

<div className="reveal-on-scroll flashlight-card h-full relative" style={{transitionDelay: '100ms'}}>
<div className="absolute -inset-[1px] bg-gradient-to-b from-blue-600/50 to-transparent rounded-xl opacity-40"></div>
<div className="flashlight-inner p-8 flex flex-col h-full bg-neutral-900/80">
<div className="mb-6">
<div className="flex justify-between items-center">
<h3 className="text-sm font-semibold text-white">Professional</h3>
<span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] border border-blue-500/20 font-medium">Most Popular</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$29</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-neutral-200"><iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Unlimited Tours</li>
<li className="flex items-center gap-3 text-xs text-neutral-200"><iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> White-label (Your Branding)</li>
<li className="flex items-center gap-3 text-xs text-neutral-200"><iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Floor Plan Generation</li>
<li className="flex items-center gap-3 text-xs text-neutral-200"><iconify-icon className="text-blue-400" icon="solar:check-read-linear"></iconify-icon> Custom Domain</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors">Start Free Trial</button>
</div>
</div>

<div className="reveal-on-scroll flashlight-card h-full" style={{transitionDelay: '200ms'}}>
<div className="flashlight-inner p-8 flex flex-col h-full bg-neutral-900/40">
<div className="mb-6">
<h3 className="text-sm font-semibold text-white">Agency</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-bold text-white tracking-tight">$99</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> 5 Team Members</li>
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> API Access</li>
<li className="flex items-center gap-3 text-xs text-neutral-300"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Lead Generation Tools</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-xs font-semibold text-white hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32">
<div className="relative rounded-2xl overflow-hidden border border-white/10 p-12 text-center bg-gradient-to-b from-neutral-900 to-black">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.1),transparent_50%)]"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6">Ready to create your first tour?</h2>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto">Join thousands of real estate agents and photographers using VRTO to showcase properties.</p>
<div className="flex justify-center gap-4">
<button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-neutral-200 transition-colors">Get Started Free</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1 pr-8">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center text-black font-bold text-[10px] tracking-tighter">
<iconify-icon icon="solar:box-bold" width="12"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">VRTO</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed">VRTO is the leading platform for creating, hosting, and sharing 360° virtual tours for real estate and businesses.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Tour Editor</a></li>
<li><a className="hover:text-white transition-colors" href="#">Floor Plans</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hosting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Showcase</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tutorials</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Docs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<div className="text-[10px] text-neutral-600">© 2024 VRTO Inc. All rights reserved.</div>
<div className="flex gap-4">
<iconify-icon className="text-neutral-600 hover:text-white transition-colors cursor-pointer" icon="simple-icons:twitter" width="14"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors cursor-pointer" icon="simple-icons:instagram" width="14"></iconify-icon>
<iconify-icon className="text-neutral-600 hover:text-white transition-colors cursor-pointer" icon="simple-icons:linkedin" width="14"></iconify-icon>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
