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
slate: {
850: '#151f32',
900: '#0f172a',
950: '#020617',
}
},
animation: {
'sonar': 'sonar 3s linear infinite',
}
}
}
}

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
      

<div className="fixed bottom-6 right-6 z-50">
<button className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 transition-colors" onclick="document.documentElement.classList.toggle('dark')">
<iconify-icon height="24" icon="solar:moon-stars-bold-duotone" width="24"></iconify-icon>
</button>
</div>

<nav className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-indigo-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">
<span className="font-semibold tracking-tighter text-sm">P</span>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">PLUGINDEV</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Products</a>
<a className="text-slate-900 dark:text-white" href="#">Blog</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Docs</a>
<a className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-slate-400 cursor-pointer" icon="solar:magnifer-bold-duotone" width="20"></iconify-icon>
<button className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-4 py-2 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative overflow-hidden">

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center border-b border-slate-200 dark:border-slate-800/50">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20">
<div className="w-64 h-64 sonar-ring animate-sonar sonar-delay-1"></div>
<div className="w-64 h-64 sonar-ring animate-sonar sonar-delay-2"></div>
<div className="w-64 h-64 sonar-ring animate-sonar sonar-delay-3"></div>
</div>
<div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-300 text-xs font-medium mb-6">
<iconify-icon icon="solar:stars-minimalistic-bold-duotone"></iconify-icon>
<span>AI-Enhanced Learning Hub</span>
</div>
<h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl mx-auto">
                Master your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">workflow</span> with expert insights.
            </h1>
<p className="relative z-10 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Tutorials, use cases, and technical deep-dives for WP Dark Mode, FlexTable, and more. Optimized for developers and store owners.
            </p>

<div className="relative z-10 w-full max-w-lg relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-30 blur group-hover:opacity-50 transition duration-200"></div>
<div className="relative bg-white dark:bg-slate-900 rounded-xl flex items-center p-2 shadow-sm border border-slate-200 dark:border-slate-800">
<div className="pl-3 pr-2 text-indigo-500">
<iconify-icon icon="solar:magic-stick-3-bold-duotone" width="24"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder-slate-400" placeholder="Ask AI: How do I enable Dark Mode on mobile?" type="text"/>
<button className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
<iconify-icon className="text-slate-500 dark:text-slate-300" icon="solar:arrow-right-bold-duotone"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

<div className="flex flex-wrap gap-2 mb-12">
<button className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-medium shadow-sm">All Posts</button>
<button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 text-xs font-medium transition-colors">Tutorials</button>
<button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 text-xs font-medium transition-colors">New Features</button>
<button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 text-xs font-medium transition-colors">Case Studies</button>
<button className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-500 hover:text-indigo-500 text-xs font-medium transition-colors">Dev Tips</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-indigo-500/20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 text-[10px] font-semibold tracking-wide uppercase text-slate-900 dark:text-white">
<iconify-icon className="text-purple-500" icon="solar:moon-bold-duotone"></iconify-icon>
                                WP Dark Mode
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span className="text-emerald-500">Beginner</span>
<span>•</span>
<span>5 min read</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                            The Ultimate Guide to Configuring Dark Mode for Accessibility
                        </h3>
<div className="mb-4 bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
<div className="flex gap-2">
<iconify-icon className="text-indigo-500 flex-shrink-0 mt-0.5" icon="solar:smart-home-angle-bold-duotone"></iconify-icon>
<p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
<span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Summary:</span> 
                                    Learn to toggle system preferences, handle color contrast automatically, and improve WCAG compliance using WP Dark Mode settings.
                                </p>
</div>
</div>
</div>
</article>

<article className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 text-[10px] font-semibold tracking-wide uppercase text-slate-900 dark:text-white">
<iconify-icon className="text-blue-500" icon="solar:table-bold-duotone"></iconify-icon>
                                FlexTable
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span className="text-orange-500">Intermediate</span>
<span>•</span>
<span>8 min read</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                            Managing High-Volume Data Sets without Slowing Down WordPress
                        </h3>
<div className="mb-4 bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
<div className="flex gap-2">
<iconify-icon className="text-indigo-500 flex-shrink-0 mt-0.5" icon="solar:smart-home-angle-bold-duotone"></iconify-icon>
<p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
<span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Summary:</span> 
                                    Techniques for lazy loading, pagination logic, and database optimization when displaying 10k+ rows with FlexTable.
                                </p>
</div>
</div>
</div>
</article>

<article className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 text-[10px] font-semibold tracking-wide uppercase text-slate-900 dark:text-white">
<iconify-icon className="text-emerald-500" icon="solar:box-bold-duotone"></iconify-icon>
                                FlexStock
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span className="text-red-500">Advanced</span>
<span>•</span>
<span>12 min read</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                            Automating Inventory Sync Across Multiple Shopify Stores
                        </h3>
<div className="mb-4 bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
<div className="flex gap-2">
<iconify-icon className="text-indigo-500 flex-shrink-0 mt-0.5" icon="solar:smart-home-angle-bold-duotone"></iconify-icon>
<p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
<span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Summary:</span> 
                                    Using FlexStock API webhooks to trigger real-time updates and prevent overselling during flash sales events.
                                </p>
</div>
</div>
</div>
</article>

<article className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-rose-500/20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 text-[10px] font-semibold tracking-wide uppercase text-slate-900 dark:text-white">
<iconify-icon className="text-pink-500" icon="solar:rocket-2-bold-duotone"></iconify-icon>
                                Performance
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span className="text-orange-500">Intermediate</span>
<span>•</span>
<span>6 min read</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                            5 Shopify App Optimization Tricks for Higher Google Lighthouse Scores
                        </h3>
<div className="mb-4 bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
<div className="flex gap-2">
<iconify-icon className="text-indigo-500 flex-shrink-0 mt-0.5" icon="solar:smart-home-angle-bold-duotone"></iconify-icon>
<p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
<span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Summary:</span> 
                                    Reducing app script blocking, deferring non-essential assets, and optimizing liquid rendering.
                                </p>
</div>
</div>
</div>
</article>

<article className="group relative flex flex-col h-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
<div className="h-48 w-full bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-yellow-500/20 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute top-4 left-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/90 dark:bg-slate-950/90 backdrop-blur border border-slate-200 dark:border-slate-700 text-[10px] font-semibold tracking-wide uppercase text-slate-900 dark:text-white">
<iconify-icon className="text-amber-500" icon="solar:accessibility-bold-duotone"></iconify-icon>
                                UX / UI
                            </span>
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
<span className="text-emerald-500">Beginner</span>
<span>•</span>
<span>4 min read</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-500 transition-colors">
                            Designing Accessible Toggle Switches for Dark Mode Plugins
                        </h3>
<div className="mb-4 bg-indigo-50 dark:bg-indigo-950/30 p-3 rounded-lg border border-indigo-100 dark:border-indigo-500/20">
<div className="flex gap-2">
<iconify-icon className="text-indigo-500 flex-shrink-0 mt-0.5" icon="solar:smart-home-angle-bold-duotone"></iconify-icon>
<p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
<span className="font-semibold text-indigo-600 dark:text-indigo-400">AI Summary:</span> 
                                    Best practices for focus states, aria-labels, and maintaining contrast ratios in switch components.
                                </p>
</div>
</div>
</div>
</article>
</div>

<div className="mt-16 bg-slate-900 dark:bg-slate-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h2 className="text-2xl font-semibold text-white mb-2">Unsure which plugin fits your store?</h2>
<p className="text-slate-300">Our AI assistant can analyze your site requirements and suggest the perfect stack.</p>
</div>
<button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2">
<iconify-icon icon="solar:chat-round-line-bold-duotone"></iconify-icon>
                        Ask the Assistant
                    </button>
</div>

<div className="absolute right-0 top-0 opacity-10 transform translate-x-10 -translate-y-10">
<iconify-icon className="text-white" height="200" icon="solar:cpu-bold-duotone" width="200"></iconify-icon>
</div>
</div>
</section>
</main>

<div className="w-full h-24 bg-slate-100 dark:bg-slate-950 flex items-center justify-center border-y border-dashed border-slate-300 dark:border-slate-800">
<span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Single Blog Post View Below</span>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 py-16">

<header className="max-w-3xl mx-auto mb-10">
<nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 font-medium">
<a className="hover:text-indigo-500" href="#">Blog</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-indigo-500" href="#">WP Dark Mode</a>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900 dark:text-slate-200">Accessibility Guide</span>
</nav>
<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
                The Ultimate Guide to Configuring Dark Mode for Accessibility Standards
            </h1>
<div className="flex items-center justify-between py-6 border-y border-slate-200 dark:border-slate-800">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">AS</div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Alex Sarah</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Updated: Oct 24, 2023</p>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-bold-duotone"></iconify-icon> 5 min read</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:eye-bold-duotone"></iconify-icon> 2.4k views</span>
</div>
</div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-24 space-y-8">
<div>
<h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Table of Contents</h4>
<ul className="space-y-3 text-sm border-l border-slate-200 dark:border-slate-800 pl-4">
<li><a className="text-indigo-600 dark:text-indigo-400 font-medium border-l-2 border-indigo-600 dark:border-indigo-400 -ml-[18px] pl-4 block" href="#">Introduction</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors block" href="#">Why WCAG Matters</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors block" href="#">Configuring Contrast</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors block" href="#">Handling Images</a></li>
<li><a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors block" href="#">Testing Your Site</a></li>
</ul>
</div>

<div className="bg-indigo-50 dark:bg-slate-900 p-4 rounded-xl border border-indigo-100 dark:border-indigo-500/20">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-indigo-500" icon="solar:moon-bold-duotone"></iconify-icon>
<span className="font-semibold text-sm text-slate-900 dark:text-white">WP Dark Mode</span>
</div>
<p className="text-xs text-slate-600 dark:text-slate-400 mb-3">One-click accessibility compliance for your site.</p>
<button className="w-full bg-white dark:bg-indigo-600 text-slate-900 dark:text-white border border-slate-200 dark:border-indigo-500 shadow-sm py-2 rounded-lg text-xs font-semibold hover:bg-slate-50 dark:hover:bg-indigo-500 transition-colors">
                            Download Free
                        </button>
</div>
</div>
</aside>

<article className="lg:col-span-9 max-w-3xl">

<div className="mb-10 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border border-indigo-200 dark:border-indigo-900/50 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon height="80" icon="solar:stars-minimalistic-bold-duotone" width="80"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide mb-3">
<iconify-icon icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
                            AI Summary (TL;DR)
                        </h3>
<p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                            Web Content Accessibility Guidelines (WCAG) require sufficient color contrast. WP Dark Mode automates this by analyzing your theme's colors and generating a high-contrast dark palette. This guide covers the "OS-Aware" setting, how to exclude specific images from inversion, and using the built-in accessibility tester.
                        </p>
</div>
</div>

<div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 max-w-none">
<p className="lead text-lg text-slate-600 dark:text-slate-400">
                        Accessibility isn't just a legal requirement; it's a user experience imperative. When implementing dark mode, simply inverting colors often leads to muddy grays and unreadable text. Here is how to fix it using WP Dark Mode.
                    </p>
<h2 className="text-2xl mt-8 mb-4">Why WCAG Matters for Dark Mode</h2>
<p>
                        The WCAG 2.1 standard requires a contrast ratio of at least 4.5:1 for normal text. In dark mode, this means your background shouldn't be pure black (#000000) because it causes eye strain (smearing) on OLED screens. Instead, aim for a dark gray (#121212).
                    </p>

<div className="my-8 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800">
<div className="bg-slate-50 dark:bg-slate-900 px-4 py-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<span className="text-xs font-mono text-slate-500">custom-css-overrides.css</span>
<span className="text-[10px] uppercase bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded font-bold">Pro Tip</span>
</div>
<div className="bg-slate-900 p-4 overflow-x-auto">
<pre className="text-xs font-mono text-slate-300"><code><span className="text-purple-400">.wp-dark-mode-active</span> body {
  <span className="text-slate-500">// Avoid pure black for better readability</span>
  <span className="text-blue-400">background-color</span>: <span className="text-orange-400">#121212</span> <span className="text-purple-400">!important</span>;
  <span className="text-blue-400">color</span>: <span className="text-orange-400">#e0e0e0</span>;
}</code></pre>
</div>
</div>
<h2 className="text-2xl mt-8 mb-4">Configuring Contrast Automatically</h2>
<p>
                        Instead of writing CSS manually, go to <strong>WP Dark Mode &gt; Settings &gt; Color Settings</strong>. Enable the "Smart Contrast" toggle. This uses an AI-driven algorithm to calculate the luminance of your existing elements and shift them to the nearest accessible dark equivalent.
                    </p>
<div className="my-8 p-4 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
<div className="flex gap-3">
<iconify-icon className="text-amber-500 mt-1 flex-shrink-0" icon="solar:info-circle-bold-duotone" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Caution for Image Filters</h4>
<p className="text-sm text-slate-600 dark:text-slate-400">
                                    Avoid applying global grayscale filters to your entire site. This will ruin product photos. Use the "Image Exclusion" selector in the plugin settings to protect `img.product` classes.
                                </p>
</div>
</div>
</div>
<h2 className="text-2xl mt-8 mb-4">Testing Your Site</h2>
<p>Use the Google Chrome "Lighthouse" tab to run an accessibility audit while Dark Mode is active. A score above 90 is recommended for production environments.</p>
</div>

<div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-10">
<div className="bg-slate-900 dark:bg-white rounded-2xl p-8 md:p-10 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<iconify-icon className="text-white dark:text-slate-900 mb-4 mx-auto" height="48" icon="solar:download-square-bold-duotone" width="48"></iconify-icon>
<h2 className="text-2xl font-bold text-white dark:text-slate-900 mb-3">Ready to improve your site?</h2>
<p className="text-slate-300 dark:text-slate-600 mb-8 max-w-md mx-auto">Get WP Dark Mode today and join 10,000+ developers building accessible web experiences.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg font-semibold transition-colors shadow-lg shadow-indigo-500/25">
                                    Download Plugin
                                </button>
<button className="px-6 py-3 bg-transparent border border-slate-600 dark:border-slate-300 text-white dark:text-slate-900 hover:bg-white/10 dark:hover:bg-slate-100 rounded-lg font-semibold transition-colors">
                                    View Live Demo
                                </button>
</div>
</div>
</div>
</div>

<div className="mt-20">
<h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">Recommended Next Reads</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="block group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors" href="#">
<span className="text-xs font-medium text-indigo-500 mb-2 block">Performance</span>
<h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">Optimizing FlexTable for Large Data Sets</h4>
</a>
<a className="block group p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors" href="#">
<span className="text-xs font-medium text-indigo-500 mb-2 block">Case Study</span>
<h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">How AgencyX increased sales by 15% with Dark Mode</h4>
</a>
</div>
</div>
</article>
</div>
</main>

<footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12 px-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-indigo-600 text-white w-6 h-6 rounded flex items-center justify-center">
<span className="font-bold text-xs">P</span>
</div>
<span className="text-sm font-semibold text-slate-900 dark:text-white">PLUGINDEV</span>
</div>
<div className="text-sm text-slate-500 dark:text-slate-400">
                © 2023 PluginDev Inc. All rights reserved.
            </div>
<div className="flex gap-4">
<iconify-icon className="text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" icon="simple-icons:twitter"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer" icon="simple-icons:discord"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
