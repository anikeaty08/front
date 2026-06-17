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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
925: '#0f0f0f',
}
},
backgroundImage: {
'glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
'subtle-grid': 'linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-6 h-6 bg-gradient-to-tr from-white to-neutral-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity">Lumina</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Research</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-full bg-subtle-grid bg-grid opacity-[0.07]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 hover:border-white/20 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">Lumina 2.0 is now available</span>
<i className="w-3 h-3 text-neutral-500" data-lucide="arrow-right"></i>
</div>

<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 tracking-tight leading-[1.1] mb-6">
                Design at the speed of <br className="hidden md:block"/> neural intelligence.
            </h1>

<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Generate high-fidelity UI, complex design systems, and production-ready assets with a single prompt. The new standard for creative workflows.
            </p>

<div className="w-full max-w-2xl relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
<div className="relative bg-neutral-900 border border-white/10 rounded-xl p-2 flex items-center shadow-2xl">
<div className="p-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="sparkles"></i>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-white text-sm placeholder-neutral-500 px-2 font-light h-10 outline-none" disabled="" placeholder="Describe your dream interface..." type="text"/>
<button className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
</div>

<div className="absolute -right-12 -top-12 hidden lg:block animate-pulse-slow">
<div className="glass p-3 rounded-lg flex items-center gap-3 transform rotate-6 border border-white/10">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><i className="w-4 h-4" data-lucide="image"></i></div>
<div className="space-y-1">
<div className="h-1.5 w-16 bg-white/20 rounded-full"></div>
<div className="h-1.5 w-10 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -left-12 -bottom-8 hidden lg:block animate-pulse-slow" style={{animationDelay: '1s'}}>
<div className="glass p-3 rounded-lg flex items-center gap-3 transform -rotate-3 border border-white/10">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400"><i className="w-4 h-4" data-lucide="code"></i></div>
<div className="space-y-1">
<div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
<div className="h-1.5 w-20 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-6 text-xs text-neutral-500">
<span className="flex items-center gap-1"><i className="w-3 h-3 text-emerald-500" data-lucide="check"></i> No credit card required</span>
<span className="flex items-center gap-1"><i className="w-3 h-3 text-emerald-500" data-lucide="check"></i> 14-day free trial</span>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-neutral-500 mb-8 uppercase tracking-widest">Powering next-gen teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale mix-blend-screen">

<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="20" width="20" x="35" y="5"></rect><path d="M70,25 L80,5 L90,25" stroke="currentColor" strokeWidth="3"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><rect height="10" width="20" x="10" y="10"></rect><circle cx="50" cy="15" r="8"></circle><rect height="20" width="5" x="80" y="5"></rect></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 Q20,25 30,5 T50,5"></path><circle cx="70" cy="15" r="5"></circle><circle cx="90" cy="15" r="5"></circle></svg>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Craft without limits.</h2>
<p className="text-neutral-400 max-w-lg">Our engine understands context, brand guidelines, and user experience patterns to generate production-ready assets.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 row-span-1 md:row-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="mb-auto">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 mb-4 text-indigo-400">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Generative UI Systems</h3>
<p className="text-sm text-neutral-400 max-w-sm">Move from prompt to fully layered design files. Export to Figma, React, or plain HTML instantly.</p>
</div>

<div className="mt-8 relative h-64 w-full bg-neutral-950 rounded-t-xl border border-white/10 overflow-hidden shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">

<div className="border-b border-white/5 p-3 flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="p-6 grid grid-cols-2 gap-4">
<div className="h-24 rounded-lg bg-neutral-800/50 border border-white/5"></div>
<div className="h-24 rounded-lg bg-neutral-800/50 border border-white/5"></div>
<div className="h-24 col-span-2 rounded-lg bg-neutral-800/50 border border-white/5"></div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
<div className="p-8 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 mb-4 text-pink-400">
<i className="w-5 h-5" data-lucide="wand-2"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Upscaling</h3>
<p className="text-sm text-neutral-400">Enhance vector assets without losing fidelity.</p>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-white mt-4">
<div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-pink-500 w-3/4"></div>
</div>
<span>4x</span>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/50 hover:border-white/20 transition-all duration-500">
<div className="p-8 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 mb-4 text-emerald-400">
<i className="w-5 h-5" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time Collab</h3>
<p className="text-sm text-neutral-400">AI agents that work alongside your team.</p>
</div>
<div className="flex -space-x-3 mt-4">
<div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-500 border-2 border-neutral-900 flex items-center justify-center text-[10px] text-white font-bold">+3</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight">Fine-tune control</h2>
<p className="text-sm text-neutral-400 mt-2">Adjust parameters to get the exact style you need.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">

<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-neutral-300">Creativity Level</label>
<span className="text-xs text-neutral-500">High</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden cursor-pointer group">
<div className="h-full bg-indigo-500 w-[80%] rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
</div>
</div>
</div>

<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-medium text-neutral-300">Style Consistency</label>
<span className="text-xs text-neutral-500">Strict</span>
</div>
<div className="h-2 bg-neutral-800 rounded-full overflow-hidden cursor-pointer">
<div className="h-full bg-white/20 w-[95%] rounded-full"></div>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-400" data-lucide="moon"></i>
<div>
<div className="text-xs font-medium text-neutral-200">Dark Mode Generation</div>
<div className="text-[10px] text-neutral-500">Force dark themed outputs</div>
</div>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300 checked:border-indigo-500" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
<div className="relative bg-black rounded-xl border border-neutral-800 overflow-hidden aspect-square flex flex-col">
<div className="border-b border-neutral-800 p-4 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-800"></div>
</div>
<div className="text-[10px] text-neutral-600 font-mono">dashboard_v2.png</div>
</div>
<div className="flex-1 p-6 relative">

<div className="h-full w-full rounded border border-neutral-800 bg-neutral-900/50 p-4 flex gap-4">
<div className="w-16 h-full rounded bg-neutral-800/50 flex flex-col gap-2 py-2">
<div className="w-8 h-8 rounded-full bg-neutral-700 mx-auto"></div>
<div className="w-8 h-1 bg-neutral-700 mx-auto mt-auto rounded-full"></div>
<div className="w-8 h-1 bg-neutral-700 mx-auto rounded-full"></div>
</div>
<div className="flex-1 flex flex-col gap-4">
<div className="h-32 rounded bg-neutral-800/30 border border-white/5 w-full"></div>
<div className="flex gap-4 h-full">
<div className="flex-1 rounded bg-neutral-800/30 border border-white/5"></div>
<div className="flex-1 rounded bg-neutral-800/30 border border-white/5"></div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 px-3 py-1 bg-indigo-500 text-white text-[10px] font-medium rounded-full shadow-lg flex items-center gap-1">
<i className="w-3 h-3 fill-current" data-lucide="zap"></i> Generated in 0.4s
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-neutral-925">
<div className="max-w-3xl mx-auto px-6 text-center">
<i className="w-6 h-6 text-neutral-600 mx-auto mb-6" data-lucide="quote"></i>
<h3 className="text-xl md:text-2xl font-light leading-relaxed text-neutral-200 mb-8">
                "Lumina didn't just speed up our workflow; it completely redefined how we approach system architecture. It's like having a senior designer who never sleeps."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-800"></div>
<div className="text-left">
<div className="text-sm font-medium text-white">Alex Chen</div>
<div className="text-xs text-neutral-500">Product Director @ Stripe</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-950">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-12 text-center overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to design the future?</h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">Join 10,000+ designers and developers building with Lumina today.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto">
                    Start Generating Free
                </button>
<button className="px-8 py-3 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i> Watch Demo
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white rounded-full"></div>
<span className="text-white font-medium text-sm">Lumina</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs">
                    Pioneering the intersection of artificial intelligence and human creativity. Built for the dreamers.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-1">Product</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Features</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Integrations</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-1">Resources</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-1">Company</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Legal</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-medium text-white mb-1">Social</h4>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-[10px] text-neutral-600">© 2024 Lumina AI Inc. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-neutral-500">All systems operational</span>
</div>
</div>
</footer>


    </>
  );
}
