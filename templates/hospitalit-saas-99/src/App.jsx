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
theme: {
extend: {
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
700: '#44403c',
800: '#292524',
900: '#1c1917',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
animation: {
'fade-in-up': 'fadeUp 0.8s ease-out forwards',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Simple Intersection Observer for scroll reveal effects
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      
<div className="bg-grain"></div>

<nav className="w-full flex justify-between items-center py-6 px-6 md:px-12 max-w-screen-2xl mx-auto z-50 relative opacity-0 animate-fade-in-up">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-stone-200 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
<iconify-icon className="text-stone-600 relative z-10 group-hover:text-stone-900 transition-colors" icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-medium text-stone-900">Payper</span>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-normal text-stone-500 hover:text-stone-900 transition-colors tracking-wide" href="#features">Features</a>
<a className="text-xs font-normal text-stone-500 hover:text-stone-900 transition-colors tracking-wide" href="#pricing">Pricing</a>
</div>
<button className="bg-stone-900 text-stone-50 text-xs font-medium px-5 py-2 rounded-full hover:bg-stone-800 hover:scale-105 transition-all duration-300 shadow-lg shadow-stone-200/50">
                Buy System
            </button>
</div>
</nav>

<main className="flex-grow flex flex-col items-center pt-20 md:pt-28 relative w-full z-10">

<div className="z-20 text-center max-w-4xl mx-auto px-6 mb-24 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-in-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest text-stone-500 font-medium">Available for Implementation</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-normal tracking-tighter opacity-0 animate-fade-in-up delay-200 text-stone-900 mb-6">
                A complete system built for 
                <span className="text-stone-400">Hospitality Operations.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up delay-300 mb-8">
                A ready-to-use platform designed specifically for the hospitality sector, delivered as a white-label solution.
            </p>
<div className="opacity-0 animate-fade-in-up delay-500 flex flex-col items-center gap-6">
<p className="text-stone-900 font-medium tracking-tight">Buy it. Customize it. Launch it under your brand.</p>
<div className="flex items-center gap-4">
<button className="bg-stone-900 text-stone-50 text-xs font-medium px-6 py-3 rounded-full hover:bg-stone-800 transition-all duration-300">
                        Buy white-label system
                    </button>
<button className="text-stone-600 text-xs font-medium px-6 py-3 rounded-full border border-stone-200 hover:border-stone-400 hover:text-stone-900 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                        View features
                    </button>
</div>
</div>
</div>

<section className="w-full max-w-6xl mx-auto px-6 mb-32 relative z-20 reveal-on-scroll">
<div className="grid md:grid-cols-12 gap-12 items-start border-t border-stone-200 pt-16">
<div className="md:col-span-4">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-4">Who this product is for</h2>
</div>
<div className="md:col-span-8">
<p className="text-lg text-stone-500 font-light leading-relaxed mb-8">
                        If you already work in this industry and need a proven system instead of building from scratch, this product is for you.
                    </p>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex gap-3">
<div className="mt-1"><iconify-icon className="text-stone-400" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-stone-700">Restaurant owners, hotel managers, and hospitality chains</span>
</div>
<div className="flex gap-3">
<div className="mt-1"><iconify-icon className="text-stone-400" icon="solar:check-circle-linear"></iconify-icon></div>
<span className="text-sm text-stone-700">Teams managing multiple clients or internal workflows</span>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-stone-100/50 py-24 border-y border-subtle">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 reveal-on-scroll">
<span className="text-[10px] font-semibold tracking-widest text-stone-400 uppercase mb-3 block">The Problem</span>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-stone-900 mb-6">
                        The problem we solve
                    </h2>
<p className="text-stone-500 font-light max-w-xl">
                        Most Hospitality businesses struggle with manual workflows and generic tools that don't fit real industry logic.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-stone-200 p-6 rounded-xl reveal-on-scroll hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center mb-4 text-stone-600 border border-stone-100">
<iconify-icon icon="solar:link-broken-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-900 leading-snug">Disconnected tools and manual order workflows</p>
</div>

<div className="bg-white border border-stone-200 p-6 rounded-xl reveal-on-scroll hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 delay-100">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center mb-4 text-stone-600 border border-stone-100">
<iconify-icon icon="solar:eye-closed-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-900 leading-snug">Poor visibility over operations and kitchen data</p>
</div>

<div className="bg-white border border-stone-200 p-6 rounded-xl reveal-on-scroll hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 delay-200">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center mb-4 text-stone-600 border border-stone-100">
<iconify-icon icon="solar:card-recieved-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-900 leading-snug">High costs and slow development for custom POS systems</p>
</div>

<div className="bg-white border border-stone-200 p-6 rounded-xl reveal-on-scroll hover:shadow-lg hover:shadow-stone-200/40 transition-all duration-300 delay-300">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center mb-4 text-stone-600 border border-stone-100">
<iconify-icon icon="solar:settings-minimalistic-linear" width="20"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-900 leading-snug">Generic tools that don't fit real hospitality workflows</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-32 relative z-20">
<div className="grid md:grid-cols-2 gap-16 items-center reveal-on-scroll">
<div>
<span className="text-[10px] font-semibold tracking-widest text-stone-400 uppercase mb-3 block">The Solution</span>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-stone-900 mb-6">
                        The Livv Payper System
                    </h2>
<p className="text-lg text-stone-500 font-light leading-relaxed mb-8">
                        Payper is a fully built system created specifically for Hospitality operations. Instead of developing software from scratch, you get a proven platform that already covers the core workflows — adapted to your business and delivered under your brand.
                    </p>
<blockquote className="border-l-2 border-stone-900 pl-6 py-2 mb-8">
<p className="text-xl font-light italic text-stone-800">"Delivered as a complete white-label solution, ready to launch."</p>
</blockquote>
</div>

<div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
<h3 className="text-lg font-medium tracking-tight text-stone-900 mb-6">What's included</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:clipboard-check-linear"></iconify-icon>
<span>Industry-specific order workflows and logic</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Role-based access (Waiters, Kitchen, Admin)</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:chart-square-linear"></iconify-icon>
<span>Centralized dashboard and real-time reporting</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:box-minimalistic-linear"></iconify-icon>
<span>Automation for repetitive inventory tasks</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:card-transfer-linear"></iconify-icon>
<span>Payment gateway and POS integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-900 mt-0.5 min-w-[16px]" icon="solar:palette-linear"></iconify-icon>
<span>White-label branding (logo, colors, domain)</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full bg-stone-900 text-stone-200 py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 reveal-on-scroll">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">White-label, done properly</h2>
<p className="text-stone-400 font-light">
                        We adapt branding, structure, and integrations so the system looks and works as if it was built in-house by your company. Your clients or team never see Livv.
                    </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">Company Logo &amp; Identity</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">Custom Domain &amp; SSL</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">Tailored Color Palette</span>
</div>
<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide">Industry Specific Logic</span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-32 reveal-on-scroll" id="pricing">
<div className="flex flex-col items-center">
<div className="bg-white border border-stone-200 rounded-2xl shadow-xl shadow-stone-200/50 overflow-hidden max-w-md w-full relative">
<div className="bg-stone-50 p-8 border-b border-stone-100 text-center">
<h3 className="text-lg font-medium text-stone-900 mb-1">White-label access</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest">Full industry system</p>
</div>
<div className="p-8">
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-5xl font-light text-stone-900 tracking-tighter">$49</span>
<span className="text-stone-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 pl-4">
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Full system access
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Custom branding setup
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Initial configuration
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<iconify-icon className="text-emerald-600" icon="solar:check-read-linear"></iconify-icon>
                                Deployment support
                            </li>
</ul>
<div className="text-center mb-6">
<span className="inline-block bg-stone-100 text-stone-600 text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-md">
                                One-time setup: $499
                            </span>
</div>
<button className="w-full bg-stone-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-stone-800 transition-colors">
                            Buy now
                        </button>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 mb-32 reveal-on-scroll">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-12 text-center">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-stone-200 -z-10"></div>

<div className="bg-[#FDFBF9] pt-2 pr-4">
<span className="text-xs font-bold text-stone-300 mb-3 block bg-[#FDFBF9] w-fit pr-2">01</span>
<h4 className="text-lg font-medium text-stone-900 mb-2">Purchase</h4>
<p className="text-sm text-stone-500 leading-relaxed">Select and buy the system access</p>
</div>

<div className="bg-[#FDFBF9] pt-2 pr-4">
<span className="text-xs font-bold text-stone-300 mb-3 block bg-[#FDFBF9] w-fit pr-2">02</span>
<h4 className="text-lg font-medium text-stone-900 mb-2">Configure</h4>
<p className="text-sm text-stone-500 leading-relaxed">We set up your branding &amp; flows</p>
</div>

<div className="bg-[#FDFBF9] pt-2 pr-4">
<span className="text-xs font-bold text-stone-300 mb-3 block bg-[#FDFBF9] w-fit pr-2">03</span>
<h4 className="text-lg font-medium text-stone-900 mb-2">Review</h4>
<p className="text-sm text-stone-500 leading-relaxed">You approve the implementation</p>
</div>

<div className="bg-[#FDFBF9] pt-2 pr-4">
<span className="text-xs font-bold text-stone-300 mb-3 block bg-[#FDFBF9] w-fit pr-2">04</span>
<h4 className="text-lg font-medium text-stone-900 mb-2">Launch</h4>
<p className="text-sm text-stone-500 leading-relaxed">We deploy under your brand</p>
</div>
</div>
</section>

<section className="w-full bg-white border-t border-stone-200 pt-24 pb-16">
<div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll">
<div className="mb-20">
<h3 className="text-xl font-medium text-stone-900 mb-3">Resell this system to your clients</h3>
<p className="text-stone-500 text-sm mb-6 max-w-lg mx-auto">
                        Agencies and consultants can resell this system under their own brand. No development, no maintenance — just implementation and margin.
                    </p>
<a className="text-stone-900 text-sm font-medium border-b border-stone-300 hover:border-stone-900 transition-colors pb-0.5" href="#">Become a reseller</a>
</div>
<div className="border-t border-stone-100 pt-20">
<span className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold mb-6 block">Ready to go</span>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-stone-900 mb-8">
                        A proven system. <br className="hidden md:block"/>
                        Built for your industry. Ready to launch.
                    </h2>
<button className="bg-stone-900 text-stone-50 text-sm font-medium px-8 py-3 rounded-full hover:bg-stone-800 hover:scale-105 transition-all duration-300 shadow-xl">
                        Buy white-label system
                    </button>
<p className="mt-12 text-xs text-stone-400">© 2024 Payper System. All rights reserved.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
