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
      

<header className="border-b border-zinc-800/60 sticky top-0 bg-zinc-950/80 backdrop-blur-md z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white" href="#">NRML.</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-white transition-colors" href="#">Products</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Bundles</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Resources</a>
<a className="text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-5">
<button className="relative text-zinc-400 hover:text-white transition-colors flex items-center justify-center group">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1.5 w-4 h-4 bg-white text-zinc-950 text-xs font-medium rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">0</span>
</button>
<div className="hidden sm:block w-px h-4 bg-zinc-800"></div>
<button className="hidden sm:inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200">
                    Log in
                </button>
</div>
</div>
</header>
<main className="flex-1">

<section className="py-24 md:py-32 px-6 text-center max-w-4xl mx-auto flex flex-col items-center">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 text-xs font-medium text-zinc-400 mb-8 hover:bg-zinc-900 hover:text-zinc-300 transition-colors" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                Introducing Atlas UI Kit v2.0
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Crafted digital assets <br className="hidden sm:block"/>for modern creators.
            </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl font-normal leading-relaxed">
                Elevate your workflow with meticulously designed UI kits, framer templates, and icon sets. Built for peak performance and aesthetics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<button className="h-11 px-6 rounded-lg bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
                    Explore Catalog
                </button>
<button className="h-11 px-6 rounded-lg bg-transparent border border-zinc-700 text-white font-medium text-sm hover:bg-zinc-900 hover:border-zinc-600 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Preview Demo
                </button>
</div>
</section>

<section className="py-16 px-6 max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-white">Featured Releases</h2>
<p className="text-sm text-zinc-500 mt-1 font-normal">Our most popular design systems and templates.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="w-8 h-8 rounded-md border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-md border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative flex flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-2 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
<div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4 overflow-hidden relative group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-zinc-700/50 flex items-center justify-center bg-zinc-900/50 backdrop-blur-sm">
<iconify-icon className="text-zinc-300 group-hover:text-white transition-colors" icon="solar:figma-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-4 mb-1">
<h3 className="text-base font-medium tracking-tight text-white">Atlas Design System</h3>
<span className="text-sm font-medium text-white bg-zinc-800 px-2 py-0.5 rounded-md">$59</span>
</div>
<p className="text-sm text-zinc-500 mb-6 flex-1 line-clamp-2 font-normal">A comprehensive UI kit with 800+ components, smart variants, and strict auto-layout.</p>
<div className="flex items-center gap-2 mt-auto">
<button className="flex-1 h-9 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Add
                            </button>
<button className="w-9 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-2 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
<div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-tr from-zinc-950 to-zinc-800 mb-4 overflow-hidden relative group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow">

<div className="absolute inset-0 flex items-center justify-center opacity-50">
<div className="grid grid-cols-4 gap-2">
<div className="w-6 h-6 rounded-sm border border-zinc-600"></div>
<div className="w-6 h-6 rounded-sm bg-zinc-600"></div>
<div className="w-6 h-6 rounded-sm border border-zinc-600"></div>
<div className="w-6 h-6 rounded-sm border border-zinc-600"></div>
<div className="w-6 h-6 rounded-sm bg-zinc-600"></div>
<div className="w-6 h-6 rounded-sm border border-zinc-600"></div>
<div className="w-6 h-6 rounded-sm bg-zinc-600"></div>
<div className="w-6 h-6 rounded-sm border border-zinc-600"></div>
</div>
</div>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-4 mb-1">
<h3 className="text-base font-medium tracking-tight text-white">Linearity Icons</h3>
<span className="text-sm font-medium text-white bg-zinc-800 px-2 py-0.5 rounded-md">$39</span>
</div>
<p className="text-sm text-zinc-500 mb-6 flex-1 line-clamp-2 font-normal">1,200 pixel-perfect smooth icons tailored for minimal and modern digital interfaces.</p>
<div className="flex items-center gap-2 mt-auto">
<button className="flex-1 h-9 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Add
                            </button>
<button className="w-9 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-2 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300">
<div className="aspect-[4/3] w-full rounded-xl bg-zinc-900 mb-4 overflow-hidden relative group-hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow flex items-center justify-center">
<div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-transparent to-transparent"></div>
<iconify-icon className="text-zinc-600 group-hover:text-zinc-400 transition-colors relative z-10" icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="px-3 pb-3 flex-1 flex flex-col">
<div className="flex items-start justify-between gap-4 mb-1">
<h3 className="text-base font-medium tracking-tight text-white">SaaS Framer Template</h3>
<span className="text-sm font-medium text-white bg-zinc-800 px-2 py-0.5 rounded-md">$79</span>
</div>
<p className="text-sm text-zinc-500 mb-6 flex-1 line-clamp-2 font-normal">A highly converting, fully responsive landing page built directly in Framer. No code required.</p>
<div className="flex items-center gap-2 mt-auto">
<button className="flex-1 h-9 rounded-lg bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                Add
                            </button>
<button className="w-9 h-9 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-800/50 mt-12 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-transparent to-transparent">
<div className="max-w-5xl mx-auto text-center mb-16">
<h2 className="text-2xl font-medium tracking-tight text-white mb-3">Why creators choose us</h2>
<p className="text-base text-zinc-500 font-normal">Everything you need to build faster, beautifully.</p>
</div>
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center mb-5 text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight text-white mb-2">Meticulous Detail</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Every component, icon, and layout is constructed with precision to ensure scalable and cohesive design systems.</p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center mb-5 text-white">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight text-white mb-2">Lifetime Access</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Pay once and receive all future updates, fixes, and new additions to the products you purchase directly to your inbox.</p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="w-10 h-10 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center mb-5 text-white">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-base font-medium tracking-tight text-white mb-2">Instant Delivery</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Secure checkout process powered by global payment providers. Download your assets immediately after purchase.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 py-10 px-6 mt-auto">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<span className="text-base font-medium tracking-tighter text-white">NRML.</span>
<div className="w-1 h-1 rounded-full bg-zinc-700"></div>
<span className="text-xs text-zinc-500 font-normal">© 2024 Digital Assets. All rights reserved.</span>
</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">License</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
</div>
</footer>

    </>
  );
}
