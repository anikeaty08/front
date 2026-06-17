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
      

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/15 via-transparent to-transparent -z-10 pointer-events-none rounded-full blur-3xl"></div>

<header className="w-full max-w-6xl mx-auto px-6 pt-10 pb-8">
<div className="text-base font-medium tracking-tighter text-white">AGENTIC.</div>
</header>
<main className="w-full max-w-6xl mx-auto px-6 pb-32 flex flex-col items-center">

<div className="text-center max-w-3xl mb-14 space-y-6 pt-10">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]">
                Agentic AI Full-Stack Course
            </h1>
<p className="text-lg md:text-xl text-zinc-400 font-normal leading-relaxed max-w-2xl mx-auto">
                Master the skills required to build intelligent AI applications — from Python foundations to deploying real-world AI systems.
            </p>

<div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 pt-4">
<div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
<iconify-icon className="text-lg text-emerald-400 opacity-80" icon="solar:check-circle-linear"></iconify-icon>
                    Beginner Friendly
                </div>
<div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
<iconify-icon className="text-lg text-blue-400 opacity-80" icon="solar:folder-with-files-linear"></iconify-icon>
                    Real-World Projects
                </div>
<div className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
<iconify-icon className="text-lg text-purple-400 opacity-80" icon="solar:layers-linear"></iconify-icon>
                    Full-Stack AI Development
                </div>
</div>
</div>

<div className="w-full max-w-4xl flex flex-col items-center mb-28">
<div className="group relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9] rounded-2xl md:rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/5 shadow-2xl transition-all duration-500 hover:border-white/15 cursor-pointer flex items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern opacity-50 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/50 to-zinc-950"></div>

<div className="relative z-10 w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-white/15 transition-all duration-300 shadow-xl">
<iconify-icon className="text-3xl text-white translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>

<div className="absolute bottom-0 inset-x-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-white">What is Agentic AI?</h3>
<span className="text-xs font-medium text-zinc-300 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 w-fit flex items-center gap-2">
                        Intro Preview <span className="w-1 h-1 rounded-full bg-zinc-500"></span> 00:42
                    </span>
</div>
</div>

<div className="mt-8">
<button className="inline-flex items-center justify-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors rounded-full px-8 py-3 text-sm font-semibold tracking-wide">
                    Enroll Now
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="w-full max-w-5xl mb-20 flex flex-col items-center">
<div className="flex flex-wrap justify-center gap-6 w-full">

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-7 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-300" icon="solar:programming-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Python Foundations</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Build strong Python programming skills including file handling and essential AI libraries.</p>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-7 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-300" icon="solar:network-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">AI Pipeline Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Create scalable AI pipelines using LangChain, ChromaDB, and LlamaIndex.</p>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-7 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-300" icon="solar:chat-square-code-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Working with LLMs</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Gain hands-on experience with large language models, prompt engineering, and OpenAI API integration.</p>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-7 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-300" icon="solar:server-square-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Full-Stack AI Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Develop AI applications using Flask, Streamlit, Docker, and cloud deployment.</p>
</div>

<div className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex flex-col p-7 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 hover:bg-zinc-900/60 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/5 flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-xl text-zinc-300" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-3">Real-World AI Projects</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Apply your knowledge through mini projects and build a capstone Generative AI application.</p>
</div>
</div>
</div>

<div className="flex justify-center w-full">
<button className="inline-flex items-center justify-center bg-transparent text-zinc-300 border border-white/10 hover:bg-white/5 hover:text-white transition-colors rounded-full px-6 py-2.5 text-sm font-medium">
                Explore Curriculum
            </button>
</div>
</main>

    </>
  );
}
