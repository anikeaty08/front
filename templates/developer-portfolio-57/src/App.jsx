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
      

<div className="noise-bg"></div>

<div className="fixed inset-0 grid-bg z-[-1]"></div>

<div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none z-[-1]"></div>
<main className="max-w-[1600px] mx-auto min-h-screen p-4 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-6 md:gap-12">

<aside className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)]">

<div className="flex-1 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group card-glow transition-all duration-500">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full -mr-10 -mt-10 transition-opacity duration-500 opacity-50 group-hover:opacity-100"></div>
<div>
<div className="flex items-center justify-between mb-8">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center text-black font-bold text-xl tracking-tighter">
                            DS
                        </div>
<div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] font-mono uppercase tracking-wider text-green-400">Open to Work</span>
</div>
</div>
<h1 className="text-4xl font-medium tracking-tight text-white mb-2">Devin Smith</h1>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">Full Stack Engineer &amp; Interface Designer crafting high-performance digital experiences.</p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
<span className="iconify text-neutral-400" data-icon="lucide:map-pin" data-width="14"></span>
                            San Francisco, CA (UTC-8)
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
<span className="iconify text-neutral-400" data-icon="lucide:terminal" data-width="14"></span>
                            Lat: 37.7749, Long: -122.4194
                        </div>
<div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
<span className="iconify text-neutral-400" data-icon="lucide:coffee" data-width="14"></span>
                            Fuel Level: 87%
                        </div>
</div>
</div>
<div className="space-y-4 mt-8">
<button className="w-full group/btn relative flex items-center justify-between bg-white text-black px-5 py-3 rounded-xl font-medium text-sm overflow-hidden transition-all hover:scale-[1.02]">
<span className="relative z-10">Contact Me</span>
<span className="relative z-10 iconify group-hover/btn:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
<div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
</button>
<div className="flex gap-2">
<a className="flex-1 flex items-center justify-center py-3 rounded-xl bg-neutral-800/50 border border-white/5 hover:bg-neutral-800 hover:text-white text-neutral-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="18"></span>
</a>
<a className="flex-1 flex items-center justify-center py-3 rounded-xl bg-neutral-800/50 border border-white/5 hover:bg-[#1DA1F2]/10 hover:border-[#1DA1F2]/30 hover:text-[#1DA1F2] text-neutral-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="flex-1 flex items-center justify-center py-3 rounded-xl bg-neutral-800/50 border border-white/5 hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30 hover:text-[#0A66C2] text-neutral-400 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>

<div className="bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 card-glow transition-all duration-300">
<div className="flex justify-between items-center text-xs font-mono uppercase text-neutral-500 tracking-wider">
<span>Core Stack</span>
<span>v2.4.0</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">React</span>
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">Next.js</span>
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">TypeScript</span>
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">Node</span>
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">Postgres</span>
<span className="px-2 py-1 rounded bg-neutral-800/50 border border-white/5 text-xs text-neutral-300 font-mono">AWS</span>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col gap-6">

<nav className="sticky top-4 z-40 bg-neutral-900/60 backdrop-blur-xl border border-white/5 rounded-2xl px-2 py-2 flex items-center justify-between shadow-2xl shadow-black/50">
<div className="flex gap-1 overflow-x-auto no-scrollbar">
<button className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-medium border border-white/5 shadow-sm">All</button>
<button className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">Projects</button>
<button className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">Laboratory</button>
<button className="px-4 py-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/5 text-xs font-medium transition-colors">Writing</button>
</div>
<div className="px-4 hidden sm:flex items-center gap-2 text-xs text-neutral-500 font-mono border-l border-white/5 ml-2 pl-4">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    System Online
                </div>
</nav>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">

<div className="col-span-1 md:col-span-2 lg:col-span-2 group relative overflow-hidden rounded-3xl bg-neutral-900/40 border border-white/5 card-glow transition-all duration-500 h-[400px]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-20 transition-opacity duration-500 scale-100 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute top-6 left-6 flex gap-2">
<span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-white tracking-wide uppercase">Fintech</span>
<span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono text-white tracking-wide uppercase">2023</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Nexus Protocol</h3>
<p className="text-neutral-400 text-sm max-w-md line-clamp-2">A decentralized trading interface enabling real-time asset swaps with sub-second latency and gas optimization.</p>
</div>
<div className="hidden md:flex opacity-0 group-hover:opacity-100 transition-opacity duration-500 items-center justify-center w-12 h-12 rounded-full bg-white text-black">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col justify-between card-glow">
<div className="flex items-start justify-between">
<span className="iconify text-neutral-500" data-icon="lucide:git-commit-horizontal" data-width="24"></span>
<span className="text-[10px] font-mono text-neutral-600 uppercase">Yearly Activity</span>
</div>
<div className="space-y-4">
<div className="flex items-end gap-2">
<span className="text-4xl font-semibold text-white tracking-tight">1,402</span>
<span className="text-sm text-neutral-500 mb-1">commits</span>
</div>

<div className="flex gap-1 h-8 items-end opacity-50">
<div className="w-1 bg-neutral-700 h-[30%] rounded-sm"></div>
<div className="w-1 bg-neutral-600 h-[50%] rounded-sm"></div>
<div className="w-1 bg-neutral-500 h-[80%] rounded-sm"></div>
<div className="w-1 bg-white h-[100%] rounded-sm"></div>
<div className="w-1 bg-neutral-400 h-[60%] rounded-sm"></div>
<div className="w-1 bg-neutral-700 h-[40%] rounded-sm"></div>
<div className="w-1 bg-neutral-600 h-[70%] rounded-sm"></div>
<div className="w-1 bg-neutral-800 h-[20%] rounded-sm"></div>
<div className="w-1 bg-neutral-500 h-[50%] rounded-sm"></div>
<div className="w-1 bg-neutral-700 h-[30%] rounded-sm"></div>
<div className="w-1 bg-neutral-600 h-[50%] rounded-sm"></div>
<div className="w-1 bg-neutral-500 h-[80%] rounded-sm"></div>
<div className="w-1 bg-white h-[90%] rounded-sm"></div>
<div className="w-1 bg-neutral-400 h-[60%] rounded-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-[#0d0d0d] border border-white/5 rounded-3xl p-6 font-mono text-xs md:text-sm overflow-hidden relative group">
<div className="absolute top-0 left-0 w-full h-8 bg-[#1a1a1a] flex items-center px-4 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
</div>
<div className="ml-4 text-neutral-600 text-[10px]">philosophy.ts</div>
</div>
<div className="mt-8 text-neutral-400 space-y-1">
<div className="flex"><span className="text-neutral-700 mr-4 select-none">01</span><span className="text-purple-400">const</span> <span className="text-blue-400">designPhilosophy</span> = {</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">02</span>  obsessive: <span className="text-yellow-400">true</span>,</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">03</span>  minimalist: <span className="text-yellow-400">true</span>,</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">04</span>  focus: <span className="text-green-400">'User Centricity'</span>,</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">05</span>  stack: [<span className="text-green-400">'Code'</span>, <span className="text-green-400">'Design'</span>, <span className="text-green-400">'Strategy'</span>]</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">06</span>};</div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">07</span></div>
<div className="flex"><span className="text-neutral-700 mr-4 select-none">08</span><span className="text-neutral-500">// I build software that feels like magic.</span></div>
</div>
<div className="absolute bottom-4 right-4 text-xs text-neutral-700 group-hover:text-neutral-500 transition-colors">
                        TypeScript
                    </div>
</div>

<div className="col-span-1 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 card-glow group cursor-pointer">
<div className="flex justify-between items-start">
<div className="bg-indigo-500/10 p-3 rounded-xl text-indigo-400">
<span className="iconify" data-icon="lucide:box" data-width="24"></span>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:external-link" data-width="18"></span>
</div>
<div className="mt-auto">
<h4 className="text-lg font-medium text-white">Vercel UI Kit</h4>
<p className="text-neutral-400 text-xs mt-1">Component library for rapid prototyping.</p>
</div>
</div>

<div className="col-span-1 bg-neutral-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-6 flex flex-col gap-4 card-glow group cursor-pointer">
<div className="flex justify-between items-start">
<div className="bg-orange-500/10 p-3 rounded-xl text-orange-400">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<span className="iconify text-neutral-600 group-hover:text-white transition-colors" data-icon="lucide:external-link" data-width="18"></span>
</div>
<div className="mt-auto">
<h4 className="text-lg font-medium text-white">Bolt API</h4>
<p className="text-neutral-400 text-xs mt-1">High throughput serverless functions.</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-neutral-100 rounded-3xl p-8 flex flex-col justify-between group hover:bg-white transition-colors duration-500">
<div className="flex justify-between items-start mb-6">
<span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wide">Latest Writing</span>
<span className="text-xs text-neutral-400">Oct 24, 2023</span>
</div>
<div>
<h3 className="text-2xl font-semibold text-neutral-900 mb-3 group-hover:underline decoration-neutral-300 decoration-2 underline-offset-4">Why CSS Grid is Turing Complete</h3>
<p className="text-neutral-600 text-sm leading-relaxed max-w-lg">Exploring the computational possibilities within stylesheet logic and how we can abuse layout engines for fun.</p>
</div>
<div className="mt-6 flex items-center gap-2 text-neutral-900 text-sm font-medium">
                        Read Article <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</div>

<footer className="mt-8 border-t border-white/5 pt-8 pb-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-neutral-600 font-mono">
<div className="flex gap-6">
<span>© 2024 Devin Smith</span>
<span>Built with Tailwind &amp; Love</span>
</div>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        All systems operational
                    </div>
</div>
</footer>
</section>
</main>

    </>
  );
}
