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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 gap-4 sm:gap-8">

<div className="flex-shrink-0 flex items-center gap-4">
<button className="lg:hidden text-slate-500 hover:text-slate-900 focus:outline-none">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="text-xl sm:text-2xl font-semibold tracking-tighter text-slate-900" href="#">
                        NEXUS
                    </a>
</div>

<div className="flex-1 max-w-2xl hidden sm:flex">
<div className="relative w-full group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
<iconify-icon height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all duration-200" placeholder="Search for logos, templates, video tools..." type="text"/>
</div>
</div>

<div className="flex items-center gap-4 sm:gap-6">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 hidden md:block transition-colors" href="#">Start Selling</a>
<button className="text-slate-500 hover:text-slate-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-indigo-600 text-[0.65rem] font-medium text-white">2</span>
</button>
<button className="text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">
<iconify-icon height="22" icon="solar:user-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>

<div className="pb-3 sm:hidden">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-full leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all" placeholder="Search..." type="text"/>
</div>
</div>
</div>

<nav className="border-t border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<ul className="flex items-center gap-6 overflow-x-auto py-2 hide-scrollbar text-sm font-medium text-slate-600 whitespace-nowrap">
<li><a className="text-slate-900 border-b-2 border-slate-900 pb-2 inline-block" href="#">Discover</a></li>
<li><a className="hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-2 inline-block transition-all" href="#">Logo Design</a></li>
<li><a className="hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-2 inline-block transition-all" href="#">Presentations</a></li>
<li><a className="hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-2 inline-block transition-all" href="#">Assignments</a></li>
<li><a className="hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-2 inline-block transition-all" href="#">Social Media Kits</a></li>
<li><a className="hover:text-slate-900 hover:border-b-2 hover:border-slate-300 pb-2 inline-block transition-all" href="#">Video Editing</a></li>
</ul>
</div>
</nav>
</header>
<main className="flex-grow">

<section className="bg-slate-50 border-b border-slate-200 overflow-hidden relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10">
<div className="max-w-3xl">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        The premium marketplace for digital creators.
                    </h1>
<p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl">
                        Discover, buy, and sell top-tier logo designs, pitch decks, academic templates, social media assets, and professional video editing tools.
                    </p>
<div className="mt-8 flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors shadow-sm" href="#">
                            Browse Catalog
                        </a>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-300 text-sm font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors shadow-sm" href="#">
                            Become a Seller
                        </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-sm transition-all duration-200" href="#">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<iconify-icon height="24" icon="solar:pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-slate-900 text-center">Logo Design</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-sm transition-all duration-200" href="#">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<iconify-icon height="24" icon="solar:presentation-graph-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-slate-900 text-center">Presentations</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-sm transition-all duration-200" href="#">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<iconify-icon height="24" icon="solar:document-text-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-slate-900 text-center">Assignments</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-sm transition-all duration-200" href="#">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<iconify-icon height="24" icon="solar:smartphone-update-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-slate-900 text-center">Social Media</span>
</a>
<a className="group flex flex-col items-center p-6 bg-white border border-slate-200 rounded-2xl hover:border-indigo-500 hover:shadow-sm transition-all duration-200" href="#">
<div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
<iconify-icon height="24" icon="solar:video-frame-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="mt-3 text-sm font-medium text-slate-900 text-center">Video Tools</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Trending Resources</h2>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1" href="#">
                    View all <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 relative">
<div className="absolute top-3 left-3 z-10">
<span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-white/90 text-slate-800 backdrop-blur-sm shadow-sm">Bestseller</span>
</div>
<button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/50 text-slate-500 hover:bg-white hover:text-rose-500 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="18" icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>

<div className="aspect-[4/3] w-full bg-gradient-to-br from-indigo-100 to-purple-50 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-indigo-200" height="48" icon="solar:vector-square-linear" width="48"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="text-xs text-slate-500 mb-1 flex justify-between items-center">
<span>Logo Design</span>
<div className="flex items-center gap-0.5 text-amber-500">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-slate-600 ml-0.5">4.9</span>
<span className="text-slate-400">(128)</span>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-1 group-hover:text-indigo-600 transition-colors">Minimalist Tech Startup Logo Kit (AI, EPS, SVG)</h3>
<p className="text-xs text-slate-500 mb-4">by DesignStudioX</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$29.00</span>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 relative">
<button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/50 text-slate-500 hover:bg-white hover:text-rose-500 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="18" icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="aspect-[4/3] w-full bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300" height="48" icon="solar:presentation-graph-linear" width="48"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="text-xs text-slate-500 mb-1 flex justify-between items-center">
<span>Presentations</span>
<div className="flex items-center gap-0.5 text-amber-500">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-slate-600 ml-0.5">4.7</span>
<span className="text-slate-400">(84)</span>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-1 group-hover:text-indigo-600 transition-colors">Series A Pitch Deck Template - Figma &amp; Keynote</h3>
<p className="text-xs text-slate-500 mb-4">by ElevateFounders</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$45.00</span>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 relative">
<button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/50 text-slate-500 hover:bg-white hover:text-rose-500 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="18" icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="aspect-[4/3] w-full bg-gradient-to-b from-rose-50 to-orange-50 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-rose-200" height="48" icon="solar:smartphone-rotate-2-linear" width="48"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="text-xs text-slate-500 mb-1 flex justify-between items-center">
<span>Social Media</span>
<div className="flex items-center gap-0.5 text-amber-500">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-slate-600 ml-0.5">5.0</span>
<span className="text-slate-400">(412)</span>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-1 group-hover:text-indigo-600 transition-colors">Instagram Creator Pack - 100+ Post Templates</h3>
<p className="text-xs text-slate-500 mb-4">by SocialBoost</p>
<div className="mt-auto flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400 line-through">$39.00</span>
<span className="text-lg font-semibold text-rose-600">$19.00</span>
</div>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-200 relative">
<button className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-white/50 text-slate-500 hover:bg-white hover:text-rose-500 backdrop-blur-sm transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon height="18" icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="aspect-[4/3] w-full bg-gradient-to-r from-teal-50 to-emerald-50 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-teal-200" height="48" icon="solar:clapperboard-play-linear" width="48"></iconify-icon>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="text-xs text-slate-500 mb-1 flex justify-between items-center">
<span>Video Tools</span>
<div className="flex items-center gap-0.5 text-amber-500">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-slate-600 ml-0.5">4.8</span>
<span className="text-slate-400">(56)</span>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 line-clamp-2 mb-1 group-hover:text-indigo-600 transition-colors">Cinematic Color Grading LUTs - Premiere &amp; DaVinci</h3>
<p className="text-xs text-slate-500 mb-4">by FramePerfect</p>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-semibold text-slate-900">$15.00</span>
<button className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-t border-slate-100">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Sell your digital craft to the world.</h2>
<p className="text-slate-300 text-base mb-8 max-w-md">Join thousands of creators earning passive income. Upload your assignments, design templates, and video assets in minutes.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Keep up to 95% of your sales revenue.
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Instant payouts to your bank account.
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Built-in analytics and customer management.
                            </li>
</ul>
<div>
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 transition-colors" href="#">
                                Open Your Store
                            </a>
</div>
</div>
<div className="bg-slate-800 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">

<div className="absolute w-full h-full opacity-10 top-0 left-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
<div className="relative w-full max-w-sm bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6">
<div className="flex justify-between items-center mb-6">
<div className="h-4 w-24 bg-slate-700 rounded"></div>
<div className="h-6 w-16 bg-emerald-500/20 text-emerald-400 text-[10px] font-semibold flex items-center justify-center rounded-full border border-emerald-500/30">+12%</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="h-10 w-10 bg-indigo-500/20 rounded-lg flex items-center justify-center border border-indigo-500/30">
<iconify-icon className="text-indigo-400" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<div className="h-3 w-16 bg-slate-700 rounded mb-2"></div>
<div className="h-4 w-20 bg-slate-600 rounded"></div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 bg-amber-500/20 rounded-lg flex items-center justify-center border border-amber-500/30">
<iconify-icon className="text-amber-400" icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<div className="h-3 w-16 bg-slate-700 rounded mb-2"></div>
<div className="h-4 w-20 bg-slate-600 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-12 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-slate-900 inline-block mb-4" href="#">
                        NEXUS
                    </a>
<p className="text-sm text-slate-500 mb-4 pr-4">The ultimate marketplace for creators to buy and sell premium digital assets.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-4">Marketplace</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Logos &amp; Graphics</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Presentations</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Academic Assignments</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">For Sellers</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Open a Store</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Seller Handbook</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing &amp; Fees</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2024 Nexus Market Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:figma-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
