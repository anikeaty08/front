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
dark: {
950: '#030303',
900: '#050505',
800: '#0a0a0a',
700: '#121212',
border: '#262626',
active: '#1e1e1e'
}
},
fontSize: {
xxs: '0.65rem'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em'
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
      

<header className="h-14 border-b border-white/5 bg-dark-900 flex items-center justify-between px-4 z-20 shrink-0">
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-white font-semibold tracking-tighter hover:opacity-80 transition-opacity" href="#">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:code-square-linear" width="16"></iconify-icon>
</div>
</a>
<div className="h-4 w-[1px] bg-white/10"></div>
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">coffe-startup-landing</span>
<span className="text-xs text-neutral-500 bg-white/5 px-1.5 rounded border border-white/5">v1.2</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center mr-2">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-dark-900 flex items-center justify-center text-xxs font-bold text-white">JD</div>
<div className="w-7 h-7 rounded-full bg-purple-500 border-2 border-dark-900 flex items-center justify-center text-xxs font-bold text-white">AI</div>
</div>
<span className="ml-2 text-xs text-neutral-500">Editing</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white hover:bg-white/10 transition-colors">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                Export
            </button>
<button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors">
<iconify-icon icon="solar:rocket-2-linear"></iconify-icon>
                Deploy
            </button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<aside className="w-full md:w-[400px] lg:w-[450px] flex flex-col border-r border-white/5 bg-dark-900 relative z-10">

<div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">

<div className="flex justify-center">
<span className="text-xs text-neutral-600">Today, 10:42 AM</span>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0">
<span className="text-xs font-medium text-neutral-400">JD</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">You</span>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">
                            Create a modern landing page for a high-end coffee startup called "Aura Brew". Dark mode, minimalist. It needs a hero section, a featured products grid, and a newsletter footer.
                        </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
<iconify-icon className="text-white text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<span className="text-sm font-medium text-white">Codivio</span>

<div className="bg-dark-800 rounded-lg border border-white/5 p-3 space-y-2">
<div className="flex items-center gap-2 text-xs text-emerald-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Project initialized</span>
</div>
<div className="flex items-center gap-2 text-xs text-emerald-400">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Tailwind CSS configured</span>
</div>
<div className="flex items-center gap-2 text-xs text-blue-400 animate-pulse">
<iconify-icon className="animate-spin" icon="solar:refresh-circle-linear"></iconify-icon>
<span>Generating Layout components...</span>
</div>
</div>
<p className="text-sm text-neutral-300">I've set up the project structure. I'm building the Hero section with a dark aesthetic as requested. Check the preview.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/5 flex items-center justify-center shrink-0">
<span className="text-xs font-medium text-neutral-400">JD</span>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">You</span>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">
                            Can you make the "Get Started" button in the hero section a glowing gradient? And make the font tighter.
                        </p>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-900/20">
<iconify-icon className="text-white text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1 space-y-3">
<span className="text-sm font-medium text-white">Codivio</span>
<div className="bg-dark-800 rounded-lg border border-white/5 p-2 px-3 flex items-center justify-between group cursor-pointer hover:bg-dark-700 transition-colors">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-400" icon="solar:file-code-linear"></iconify-icon>
<span className="text-xs text-neutral-300 font-mono">Hero.tsx</span>
</div>
<span className="text-xxs text-neutral-500 group-hover:text-neutral-300">Updated</span>
</div>
<p className="text-sm text-neutral-300">Done. I've updated the button styles and applied <code className="bg-white/10 px-1 py-0.5 rounded text-xs">tracking-tight</code> globally.</p>
</div>
</div>

<div className="h-20"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900 via-dark-900 to-transparent">
<div className="relative bg-dark-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden focus-within:border-white/20 transition-colors">
<textarea className="w-full bg-transparent text-sm text-white placeholder-neutral-500 p-3 pb-10 resize-none focus:outline-none" placeholder="Describe changes or add a new section..." rows="2"></textarea>
<div className="absolute bottom-2 left-2 flex items-center gap-1">
<button className="p-1.5 rounded-md text-neutral-500 hover:bg-white/5 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:paperclip-linear"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-neutral-500 hover:bg-white/5 hover:text-neutral-300 transition-colors">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</button>
</div>
<button className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white text-black hover:bg-neutral-200 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</button>
</div>
<div className="text-center mt-2">
<span className="text-xxs text-neutral-600">AI can make mistakes. Review generated code.</span>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-dark-950 relative overflow-hidden">

<div className="h-10 border-b border-white/5 bg-dark-900 flex items-center justify-between px-4">

<div className="flex items-center gap-1 bg-dark-800 p-0.5 rounded-lg border border-white/5">
<button className="px-3 py-1 rounded-md bg-dark-700 text-xs font-medium text-white shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:eye-linear"></iconify-icon> Preview
                    </button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-neutral-500 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:code-linear"></iconify-icon> Code
                    </button>
</div>

<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-dark-800 border border-white/5 rounded-md w-64 opacity-60 hover:opacity-100 transition-opacity">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-xs text-neutral-400 font-mono">localhost:3000</span>
<iconify-icon className="text-neutral-500 text-xs ml-auto cursor-pointer hover:text-white" icon="solar:refresh-linear"></iconify-icon>
</div>

<div className="flex items-center gap-2 text-neutral-500">
<button className="p-1.5 hover:text-white hover:bg-white/5 rounded transition-colors text-white bg-white/5">
<iconify-icon icon="solar:monitor-linear"></iconify-icon>
</button>
<button className="p-1.5 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon>
</button>
<div className="w-[1px] h-4 bg-white/10 mx-1"></div>
<button className="p-1.5 hover:text-white hover:bg-white/5 rounded transition-colors">
<iconify-icon icon="solar:maximize-square-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 bg-neutral-900 relative overflow-hidden flex items-center justify-center p-4">

<div className="w-full h-full bg-black rounded-lg shadow-2xl overflow-y-auto border border-white/5 relative">

<div className="min-h-full font-sans text-neutral-200">

<nav className="flex items-center justify-between p-6 px-8 border-b border-white/10">
<div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                Aura Brew
                            </div>
<div className="flex gap-6 text-sm text-neutral-400">
<a className="hover:text-white" href="#">Blends</a>
<a className="hover:text-white" href="#">Subscriptions</a>
<a className="hover:text-white" href="#">About</a>
</div>
<button className="text-sm text-white border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">Sign In</button>
</nav>

<section className="px-8 py-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-4 block">Limited Edition</span>
<h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-[1.1]">
                                    Coffee that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500">transcends</span> gravity.
                                </h1>
<p className="text-neutral-400 mb-8 leading-relaxed max-w-md">
                                    Artisan roasted beans delivered to your doorstep. Experience the future of caffeine with our AI-curated blends.
                                </p>
<div className="flex gap-4">
<button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                                        Get Started
                                    </button>
<button className="text-white px-8 py-3 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors">
                                        View Menu
                                    </button>
</div>
</div>
<div className="relative">

<div className="aspect-square rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)]"></div>
<div className="w-48 h-64 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-4 transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
<div className="w-full h-32 bg-neutral-800 rounded-lg mb-4 opacity-50"></div>
<div className="h-2 w-2/3 bg-neutral-700 rounded mb-2"></div>
<div className="h-2 w-1/2 bg-neutral-700 rounded"></div>
<div className="mt-8 flex justify-between items-center">
<div className="h-4 w-12 bg-orange-500/20 rounded text-orange-400 text-xs flex items-center justify-center">$24</div>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black text-xs">+</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 -left-4 bg-black border border-white/10 p-3 rounded-xl flex items-center gap-3 shadow-xl">
<div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
<iconify-icon icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-white font-medium">100% Organic</p>
<p className="text-[10px] text-neutral-500">Certified farmers</p>
</div>
</div>
</div>
</section>

<section className="px-8 py-20 bg-neutral-900/50 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-2xl font-semibold text-white mb-10 tracking-tight">Weekly Drops</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-black border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-colors cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-white font-medium mb-1">Ethiopian Yirgacheffe</h3>
<p className="text-xs text-neutral-500 mb-3">Floral notes, light roast</p>
<div className="flex justify-between items-center">
<span className="text-sm font-mono text-white">$22.00</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-black border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-colors cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<h3 className="text-white font-medium mb-1">Colombia Excelso</h3>
<p className="text-xs text-neutral-500 mb-3">Caramel, medium roast</p>
<div className="flex justify-between items-center">
<span className="text-sm font-mono text-white">$19.50</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group bg-black border border-white/5 rounded-2xl p-4 hover:border-white/20 transition-colors cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-xl mb-4 relative overflow-hidden">
<div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">SOLD OUT</div>
</div>
<h3 className="text-white font-medium mb-1">Sumatra Mandheling</h3>
<p className="text-xs text-neutral-500 mb-3">Earth, heavy body</p>
<div className="flex justify-between items-center">
<span className="text-sm font-mono text-white">$25.00</span>
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-neutral-600 cursor-not-allowed">
<iconify-icon icon="solar:bag-3-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
</div>
</div>

<div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-white/10 rounded-full cursor-col-resize hover:bg-white/30"></div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/10 rounded-full cursor-row-resize hover:bg-white/30"></div>
</div>

<div className="h-8 bg-dark-900 border-t border-white/5 flex items-center justify-between px-4 text-xs select-none">
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-white hover:text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:terminal-linear"></iconify-icon>
                        Terminal
                    </button>
<button className="flex items-center gap-2 text-neutral-500 hover:text-white">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                        Problems <span className="bg-neutral-800 px-1.5 rounded-full text-[10px]">0</span>
</button>
</div>
<div className="flex items-center gap-2 text-emerald-500">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Ready
                </div>
</div>
</main>
</div>

    </>
  );
}
