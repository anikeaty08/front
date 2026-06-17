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
aura: {
black: '#080808',
card: '#0f0f0f',
border: '#1f1f1f',
accent: '#818cf8', // Indigo-400
}
},
backgroundImage: {
'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
}
}
}
}



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
      

<div className="fixed top-0 left-0 w-full h-[500px] bg-indigo-600/10 blur-[120px] -translate-y-1/2 pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] translate-y-1/3 pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-[10px] text-white font-bold">P</div>
                    PROMPTLIB
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors duration-200" href="#">Explore</a>
<a className="hover:text-white transition-colors duration-200" href="#">Collections</a>
<a className="hover:text-white transition-colors duration-200" href="#">Artists</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-4 w-[1px] bg-white/10"></div>
<a className="group relative inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Submit Prompt
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-[11px] font-medium tracking-wide uppercase mb-6 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                System v2.0 Live
            </div>
<h1 className="text-5xl md:text-6xl font-medium text-white tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                Curated intelligence <br/> for the modern creator.
            </h1>
<p className="text-lg text-neutral-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                A meticulously designed library of high-performance prompts for engineering, design, and writing. Copy, paste, and create.
            </p>

<div className="relative max-w-xl mx-auto group">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 shadow-2xl">
<iconify-icon className="text-neutral-500" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<input className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-neutral-600 px-3 font-light" placeholder="Search for 'React Component' or 'Blog Post'..." type="text"/>
<div className="flex items-center gap-1.5 pr-1">
<kbd className="hidden sm:inline-flex items-center h-5 px-1.5 border border-white/10 rounded-[4px] text-[10px] font-sans text-neutral-500">⌘K</kbd>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-2">
<button className="px-3 py-1 text-xs text-neutral-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all">Development</button>
<button className="px-3 py-1 text-xs text-neutral-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all">Midjourney</button>
<button className="px-3 py-1 text-xs text-neutral-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all">Copywriting</button>
<button className="px-3 py-1 text-xs text-neutral-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all">SEO</button>
<button className="px-3 py-1 text-xs text-neutral-400 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 hover:border-white/10 hover:text-white transition-all">Marketing</button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4 border-b border-white/5 pb-6">
<div className="flex items-center gap-6">
<button className="text-white text-sm font-medium border-b border-indigo-500 pb-6 -mb-6">All Prompts</button>
<button className="text-neutral-500 hover:text-neutral-300 text-sm font-normal pb-6 -mb-6 transition-colors">Featured</button>
<button className="text-neutral-500 hover:text-neutral-300 text-sm font-normal pb-6 -mb-6 transition-colors">Newest</button>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center border border-white/10 bg-white/5 rounded-lg p-0.5">
<button className="p-1.5 rounded-md bg-white/10 text-white">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-neutral-500 hover:text-white transition-colors">
<iconify-icon icon="solar:list-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors">Code Refactor</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">DEV-01</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        Analyze the following code snippet for potential performance bottlenecks, security vulnerabilities, and adherence to Clean Code principles. Suggest improvements...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Engineering</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Python</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-purple-200 transition-colors">Blog Post Generator</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">WRT-88</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        Write a comprehensive blog post about the future of AI in minimalist design. Structure the article with an engaging hook, three main body paragraphs discussing...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Writing</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">SEO</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-emerald-200 transition-colors">Midjourney Realistic</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">ART-24</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        /imagine prompt: cinematic shot of a futuristic cyberpunk city street at night, raining, neon signs reflecting on wet pavement, volumetric fog, highly detailed...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Art</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Midjourney</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-orange-200 transition-colors">Socratic Tutor</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">EDU-09</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        Act as a Socratic tutor. You will help me learn [TOPIC]. Do not give me the answer directly. Instead, ask probing questions that guide me to discover...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Learning</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Education</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-400 border border-pink-500/20">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-pink-200 transition-colors">Email Outreach</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">MKT-12</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        Draft a cold email to a prospective client offering web design services. Focus on value proposition, mention their recent funding round, and keep it under 150 words...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Sales</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Business</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 hover:bg-[#0f0f0f] card-hover flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-cyan-200 transition-colors">SQL Query Builder</h3>
<p className="text-[10px] text-neutral-500 font-mono mt-0.5">DEV-33</p>
</div>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="relative mb-6 flex-grow">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a0a0a] group-hover:to-[#0f0f0f] z-10 pointer-events-none"></div>
<p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3 font-mono opacity-80">
                        Create a PostgreSQL query to retrieve the top 10 users by spending amount from the 'orders' and 'users' tables, joining on user_id, for the last 30 days...
                    </p>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">Data</span>
<span className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-neutral-400 border border-white/5">SQL</span>
</div>
<button className="flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors group/btn">
<span>Copy</span>
<iconify-icon className="group-hover/btn:scale-110 transition-transform" icon="solar:copy-linear" strokeWidth="1.5" width="12"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="flex justify-center mt-12">
<button className="text-xs font-medium text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white/50 pb-0.5">Load more prompts</button>
</div>
</main>

<footer className="border-t border-white/5 bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2 text-white font-medium text-sm tracking-tight">
<div className="w-4 h-4 rounded-sm bg-neutral-800"></div>
                    PROMPTLIB
                </div>
<p className="text-[10px] text-neutral-500">Designed for the future of creation.</p>
</div>
<div className="flex gap-6 text-[11px] text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
<a className="hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</footer>

    </>
  );
}
