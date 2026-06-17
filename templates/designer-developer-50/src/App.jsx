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

<nav className="fixed top-0 left-0 right-0 z-40 border-b border-white/[0.06] glass-nav transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tight text-sm hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
<div className="w-2 h-2 rounded-full bg-zinc-100"></div>
                Bruce Cao
            </a>

<div className="flex items-center gap-1 md:gap-2 bg-zinc-900/50 p-1 rounded-full border border-white/[0.08]">
<a className="px-4 py-1.5 text-xs font-medium hover:text-zinc-100 hover:bg-white/[0.04] rounded-full transition-all" href="#work">Work</a>
<a className="px-4 py-1.5 text-xs font-medium text-zinc-100 bg-zinc-800/80 rounded-full shadow-sm border border-white/[0.08] transition-all" href="#aigc">AIGC</a>
<a className="px-4 py-1.5 text-xs font-medium hover:text-zinc-100 hover:bg-white/[0.04] rounded-full transition-all" href="#about">About</a>
<a className="px-4 py-1.5 text-xs font-medium hover:text-zinc-100 hover:bg-white/[0.04] rounded-full transition-all" href="#contact">Contact</a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-24 px-6 relative z-10">
<div className="max-w-5xl mx-auto space-y-32">

<section className="space-y-6 max-w-2xl py-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-100 leading-[1.05]">
                    Designing polished <br/>
<span className="text-zinc-600">software interfaces.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 max-w-lg leading-relaxed">
                    Senior Product Designer focused on developer tools and design systems. Currently crafting interaction patterns at <span className="text-zinc-200">Linear</span>.
                </p>
<div className="pt-2 flex gap-4">
<a className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="https://twitter.com" target="_blank">
<span className="iconify" data-icon="lucide:twitter" data-width="14"></span>
                        Twitter
                    </a>
<a className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="https://github.com" target="_blank">
<span className="iconify" data-icon="lucide:github" data-width="14"></span>
                        Github
                    </a>
</div>
</section>

<section className="space-y-12" id="work">
<div className="flex items-end justify-between border-b border-white/[0.06] pb-4">
<h2 className="text-sm font-medium text-zinc-200">Selected Work</h2>
<span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">2021 — 2024</span>
</div>
<div className="grid grid-cols-1 gap-16">

<article className="group relative grid md:grid-cols-12 gap-8 items-start">
<div className="md:col-span-4 space-y-4 md:sticky md:top-24 transition-opacity duration-500">
<h3 className="text-xl font-medium text-zinc-100 tracking-tight flex items-center gap-2">
                                Adit to Meet
                            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                                A calendar orchestration engine designed for high-velocity teams. We rebuilt the scheduling paradigm to focus on "keyboard-first" interactions.
                            </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400">Next.js</span>
<span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-400">Radix UI</span>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-100 hover:text-zinc-400 transition-colors" href="#">
                                    View Case Study <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>
<div className="md:col-span-8">
<div className="w-full bg-[#0C0C0E] border border-white/[0.08] rounded-xl overflow-hidden relative group hover:border-white/[0.15] transition-all duration-500 shadow-2xl">
<div className="h-9 bg-[#111113] border-b border-white/[0.06] flex items-center px-3 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
</div>
<div className="ml-auto w-32 h-1.5 rounded-full bg-zinc-800/50"></div>
</div>
<div className="p-6 md:p-8 bg-zinc-950/50 card-shine">
<div className="grid grid-cols-4 gap-4 h-[340px]">
<div className="col-span-1 hidden sm:flex flex-col gap-3">
<div className="h-8 w-full bg-zinc-900/80 rounded border border-white/[0.06] mb-4"></div>
<div className="space-y-2">
<div className="h-6 w-3/4 bg-zinc-900/40 rounded"></div>
<div className="h-6 w-full bg-zinc-900/40 rounded"></div>
<div className="h-6 w-5/6 bg-zinc-900/40 rounded"></div>
</div>
<div className="mt-auto space-y-2">
<div className="h-20 w-full bg-zinc-900/30 rounded border border-white/[0.04]"></div>
</div>
</div>
<div className="col-span-4 sm:col-span-3 bg-[#0A0A0A] border border-white/[0.06] rounded-lg shadow-inner overflow-hidden flex flex-col relative group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] origin-top">
<div className="h-12 border-b border-white/[0.06] flex items-center justify-between px-4">
<div className="w-24 h-3 bg-zinc-800 rounded"></div>
<div className="flex gap-2">
<div className="w-6 h-6 rounded border border-white/[0.06]"></div>
<div className="w-6 h-6 rounded border border-white/[0.06]"></div>
</div>
</div>
<div className="flex-1 p-2">
<div className="grid grid-cols-5 gap-px h-full bg-zinc-900/30 border border-white/[0.04] rounded-md overflow-hidden">
<div className="relative bg-zinc-950/80 border-r border-white/[0.02]">
<div className="absolute top-4 left-1 right-1 h-16 bg-indigo-500/10 border border-indigo-500/20 rounded hover:bg-indigo-500/20 transition-colors cursor-pointer">
<div className="w-1.5 h-1.5 bg-indigo-400 rounded-full m-1.5"></div>
</div>
</div>
<div className="relative bg-zinc-950/80 border-r border-white/[0.02]">
<div className="absolute top-24 left-1 right-1 h-24 bg-emerald-500/10 border border-emerald-500/20 rounded hover:bg-emerald-500/20 transition-colors cursor-pointer">
<div className="w-1.5 h-1.5 bg-emerald-400 rounded-full m-1.5"></div>
</div>
</div>
<div className="relative bg-zinc-950/80 border-r border-white/[0.02]"></div>
<div className="relative bg-zinc-950/80 border-r border-white/[0.02]">
<div className="absolute top-10 left-1 right-1 h-12 bg-orange-500/10 border border-orange-500/20 rounded hover:bg-orange-500/20 transition-colors cursor-pointer">
<div className="w-1.5 h-1.5 bg-orange-400 rounded-full m-1.5"></div>
</div>
<div className="absolute bottom-10 left-1 right-1 h-16 bg-blue-500/10 border border-blue-500/20 rounded hover:bg-blue-500/20 transition-colors cursor-pointer">
<div className="w-1.5 h-1.5 bg-blue-400 rounded-full m-1.5"></div>
</div>
</div>
<div className="relative bg-zinc-950/80"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="space-y-8 pt-8" id="aigc">
<div className="flex items-end justify-between border-b border-white/[0.06] pb-4">
<h2 className="text-sm font-medium text-zinc-200">AIGC 探索</h2>
<span className="text-[10px] text-zinc-600 font-mono tracking-widest uppercase">GENERATIVE</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#F2F2EC] hover:border-white/[0.2] transition-colors bento-hover">

<div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
<div className="flex gap-4 text-[10px] text-[#A3A839] uppercase tracking-wider font-mono">
<span>Pre-order</span>
<span>About</span>
</div>
<h3 className="text-5xl font-serif text-[#9CA330] tracking-tighter mix-blend-multiply opacity-90 bento-scale transition-transform duration-700 origin-bottom-left">LeLamp</h3>
</div>

<div className="absolute right-[-20px] bottom-[-40px] w-64 h-64 bg-[#B5BD37] rounded-full mix-blend-multiply opacity-80 filter blur-xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute right-12 bottom-12 w-48 h-8 bg-[#8e9426] rounded-full transform rotate-[-25deg] origin-right opacity-20"></div>
<div className="absolute right-12 top-12 w-32 h-32 bg-[#DCE094] rounded-full opacity-50 blur-2xl"></div>
</div>

<div className="md:row-span-2 relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0A0A] hover:border-white/[0.2] transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-black pointer-events-none"></div>

<div className="absolute inset-6 rounded-[2rem] border border-zinc-800 bg-zinc-950 flex flex-col items-center overflow-hidden shadow-2xl">
<div className="w-24 h-5 bg-zinc-900 rounded-b-xl mb-6 border-b border-l border-r border-zinc-800/50"></div>
<p className="text-[10px] text-zinc-500 font-mono mb-4">The board is live.</p>

<div className="relative w-full h-40 flex justify-center items-center mt-4 group-hover:scale-105 transition-transform duration-500">
<div className="absolute w-20 h-28 bg-red-900 rounded-lg border border-red-500/30 transform -rotate-12 translate-x-[-15px] shadow-lg flex items-center justify-center">
<span className="iconify text-red-500/50 text-2xl" data-icon="lucide:club"></span>
</div>
<div className="absolute w-20 h-28 bg-zinc-800 rounded-lg border border-white/10 transform rotate-6 translate-x-[15px] shadow-lg flex items-center justify-center z-10">
<span className="iconify text-white/50 text-2xl" data-icon="lucide:spade"></span>
</div>
</div>

<div className="mt-8 bg-zinc-800/90 backdrop-blur border border-white/10 px-4 py-3 rounded-lg flex flex-col items-center gap-1 shadow-2xl transform translate-y-2 opacity-90">
<span className="iconify text-white w-5 h-5" data-icon="lucide:check"></span>
<span className="text-[10px] text-zinc-300">已添加到剪贴板</span>
</div>
</div>
</div>

<div className="md:row-span-2 relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#F5F5F7] hover:border-white/[0.2] transition-colors">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[85%] h-[90%] bg-white rounded-[2.5rem] shadow-xl border border-gray-200 p-6 flex flex-col relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">
<div className="flex justify-between items-center mb-8">
<span className="text-[10px] font-bold text-black">9:41</span>
<div className="flex gap-1">
<div className="w-3 h-3 bg-black rounded-full opacity-10"></div>
<div className="w-3 h-3 bg-black rounded-full opacity-10"></div>
</div>
</div>
<div className="flex-1 flex flex-col items-center justify-center text-center z-10">
<h3 className="text-4xl font-serif text-black mb-1 tracking-tight">friend</h3>
<p className="text-xs text-gray-500 font-serif mb-6">[frend] noun<br/>someone who listens.</p>

<div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-300 shadow-inner border border-white flex items-center justify-center relative">
<div className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm"></div>
<div className="absolute inset-0 rounded-full border border-black/5"></div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewbox="0 0 100 200">
<path d="M50 80 Q 90 20 90 0" fill="none" stroke="black" strokeWidth="1"></path>
<path d="M50 80 Q 10 20 10 0" fill="none" stroke="black" strokeWidth="1"></path>
</svg>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-black hover:border-white/[0.2] transition-colors">

<div className="absolute inset-0 flex flex-col">

<div className="flex-1 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 to-purple-900/10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/5 rounded-full backdrop-blur flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:play" data-width="20"></span>
</div>
</div>

<div className="h-20 bg-black border-t border-zinc-800 p-3 flex gap-3 items-center">
<div className="flex-1 h-full bg-zinc-900/50 rounded border border-zinc-800 relative overflow-hidden">

<svg className="absolute inset-0 w-full h-full text-orange-500" preserveaspectratio="none">
<path d="M0 40 C 20 40, 40 10, 100 10" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-10 top-0 bottom-0 w-px bg-white/20"></div>
</div>
<div className="w-16 h-full flex flex-col gap-1">
<div className="flex-1 bg-zinc-900 rounded border border-zinc-800"></div>
<div className="flex-1 bg-zinc-900 rounded border border-zinc-800"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-white hover:border-white/[0.2] transition-colors">
<div className="absolute inset-0 flex">

<div className="w-48 border-r border-gray-100 p-4 hidden md:flex flex-col gap-4">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-full bg-gray-200"></div>
<div className="h-2 w-16 bg-gray-200 rounded"></div>
</div>
<div className="space-y-2 opacity-60">
<div className="h-2 w-full bg-gray-100 rounded"></div>
<div className="h-2 w-2/3 bg-gray-100 rounded"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded"></div>
</div>
</div>

<div className="flex-1 p-5 bg-gray-50/50">
<div className="max-w-sm mx-auto bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transform group-hover:-translate-y-1 transition-transform duration-500">

<div className="p-3 flex items-center justify-between border-b border-gray-50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-blue-100"></div>
<div className="flex flex-col gap-0.5">
<div className="h-1.5 w-16 bg-gray-200 rounded"></div>
<div className="h-1.5 w-10 bg-gray-100 rounded"></div>
</div>
</div>
<span className="text-[10px] text-blue-500 font-medium">Follow</span>
</div>
<div className="aspect-video bg-gray-100 relative">

<div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg animate-bounce"></div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
<svg className="w-full h-full opacity-10" viewbox="0 0 100 100">
<path d="M20 20 L 80 80 M 80 20 L 20 80" stroke="black" strokeWidth="0.5"></path>
</svg>
</div>
<div className="p-3 space-y-2">
<div className="flex gap-2">
<span className="iconify text-gray-400" data-icon="lucide:heart" data-width="14"></span>
<span className="iconify text-gray-400" data-icon="lucide:message-circle" data-width="14"></span>
<span className="iconify text-gray-400" data-icon="lucide:send" data-width="14"></span>
</div>
<div className="h-1.5 w-24 bg-gray-200 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 gap-12 pt-8 border-t border-white/[0.06]" id="about">
<div className="space-y-4">
<h2 className="text-sm font-medium text-zinc-100">About</h2>
<div className="prose prose-invert prose-sm text-zinc-500">
<p>
                            I'm a multidisciplinary designer currently based in San Francisco. With a background in Computer Science and Design, I bridge the gap between engineering and visual design.
                        </p>
<p>
                            I believe in tools that respect the user's time and attention. My work focuses on removing friction and creating systems that scale.
                        </p>
</div>
</div>
<div className="space-y-4" id="contact">
<h2 className="text-sm font-medium text-zinc-100">Contact</h2>
<ul className="space-y-2 text-sm text-zinc-500">
<li>
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group w-max" href="mailto:hello@bruce.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                                hello@bruce.com
                                <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-zinc-600">→</span>
</a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group w-max" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="14"></span>
                                LinkedIn
                            </a>
</li>
<li>
<a className="flex items-center gap-2 hover:text-zinc-200 transition-colors group w-max" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="14"></span>
                                Instagram
                            </a>
</li>
</ul>
</div>
</section>
</div>
</main>
<footer className="border-t border-white/[0.06] py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 Bruce Cao. All rights reserved.</p>
<div className="flex items-center gap-4">
<p>Local time: <span className="text-zinc-400 font-mono">14:02 PST</span></p>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/20 flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-green-500 animate-pulse"></div>
</div>
</div>
</div>
</footer>

    </>
  );
}
