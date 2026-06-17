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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#0a0a0a',
surface: '#171717',
surfaceHighlight: '#262626',
border: '#2e2e2e',
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/30 via-background to-transparent opacity-50"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<span className="iconify text-white" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
                CHRONICLE
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Journal</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Culture</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Engineering</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Design</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-neutral-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<a className="hidden sm:inline-flex items-center justify-center h-8 px-4 text-xs font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Subscribe
                </a>
</div>
</div>
</nav>
<main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">

<header className="mb-20 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                New Issue Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Insights for the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">modern builder.</span>
</h1>
<p className="text-lg text-neutral-400 font-light leading-relaxed max-w-xl">
                Exploring the intersection of design, technology, and human experience. Deep dives into the mechanics of building great products.
            </p>
</header>

<div className="flex items-center gap-3 overflow-x-auto pb-8 mb-4 no-scrollbar">
<button className="shrink-0 px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium border border-white">All Posts</button>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-xs font-medium border border-white/10">Architecture</button>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-xs font-medium border border-white/10">Productivity</button>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-xs font-medium border border-white/10">Minimalism</button>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-transparent hover:bg-white/5 text-neutral-400 hover:text-white transition-colors text-xs font-medium border border-white/10">Development</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<article className="group relative col-span-1 md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-white/10 transition-all duration-500">
<div className="absolute inset-0 bg-neutral-800">
<img alt="Workspace" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
<div className="flex items-center gap-3 mb-4">
<span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/20 backdrop-blur-sm">Featured</span>
<span className="text-xs font-medium text-neutral-300 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> 8 min read
                        </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-3 group-hover:text-neutral-200 transition-colors">
                        The Psychology of Minimalism in Digital Interfaces
                    </h2>
<p className="text-neutral-300 line-clamp-2 max-w-lg text-sm md:text-base">
                        Why stripping away the non-essential creates more powerful user experiences and how to implement it without losing functionality.
                    </p>
</div>
</article>

<article className="group flex flex-col justify-between p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-surfaceHighlight/50 transition-all duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-white group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-xs text-neutral-500">Oct 24</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Design Systems 101</h3>
<p className="text-sm text-neutral-400 line-clamp-3">
                        A comprehensive guide to building scalable UI libraries that your engineering team will actually love to use.
                    </p>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-white">
<span>Read Article</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="h-48 bg-neutral-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
<span className="text-xs font-medium text-neutral-400">Product</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">The Linear Curve</h3>
<p className="text-sm text-neutral-400 line-clamp-2">
                        How velocity charts can mislead teams and better ways to measure progress.
                    </p>
</div>
</article>

<article className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-center text-center">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<span className="iconify mx-auto mb-4 text-neutral-500 group-hover:text-white transition-colors" data-icon="lucide:quote" data-width="24"></span>
<h3 className="text-2xl font-medium text-white tracking-tight mb-4 italic">
                    "Simplicity is the ultimate sophistication."
                </h3>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest">— Leonardo da Vinci</p>
</article>

<article className="group flex flex-col justify-between p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-surfaceHighlight/50 transition-all duration-300">
<div>
<div className="flex justify-between items-start mb-6">
<div className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-white group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-xs text-neutral-500">Oct 20</span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Rust for JS Developers</h3>
<p className="text-sm text-neutral-400 line-clamp-3">
                        Bridging the gap between high-level scripting and systems programming. What you need to know.
                    </p>
</div>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-medium text-white">
<span>Read Article</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</article>

<article className="group relative overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="h-48 bg-neutral-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<span className="text-xs font-medium text-neutral-400">Technology</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">The AI Paradigm</h3>
<p className="text-sm text-neutral-400 line-clamp-2">
                        Understanding large language models and their impact on creative workflows.
                    </p>
</div>
</article>
</div>

<section className="mt-24 relative rounded-3xl bg-neutral-900 border border-white/5 overflow-hidden">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
<span className="inline-block mb-4 p-3 rounded-xl bg-white/5 border border-white/5 text-white">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="24"></span>
</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Stay in the loop</h2>
<p className="text-neutral-400 mb-8 max-w-md mx-auto text-sm">
                    Get the latest insights on design, engineering, and culture delivered directly to your inbox. No spam, ever.
                </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
<div className="relative flex-grow">
<input className="w-full h-10 px-4 rounded-lg bg-black/50 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 text-sm transition-all" placeholder="email@example.com" type="email"/>
</div>
<button className="h-10 px-6 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" type="button">
                        Subscribe
                    </button>
</form>
<div className="mt-6 flex items-center justify-center gap-6 text-neutral-600">
<span className="flex items-center gap-1.5 text-xs">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="14"></span> Weekly updates
                    </span>
<span className="flex items-center gap-1.5 text-xs">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="14"></span> Unsubscribe anytime
                    </span>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-background">
<div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<span className="iconify text-white" data-icon="lucide:layers" data-width="20"></span>
                        CHRONICLE
                    </a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Crafting digital experiences for the future. Based in San Francisco.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Content</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Newsletter</a></li>
<li><a className="hover:text-white transition-colors" href="#">RSS Feed</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Chronicle Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
