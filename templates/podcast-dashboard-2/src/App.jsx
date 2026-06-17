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



        lucide.createIcons();
    
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
      

<aside className="w-72 h-full bg-slate-50/50 border-r border-slate-200 flex flex-col flex-shrink-0 transition-all duration-300">

<div className="p-4 pt-6">
<div className="flex items-center justify-between mb-6 group cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-sm shadow-orange-200">
<i className="w-5 h-5" data-lucide="waves"></i>
</div>
<div>
<h2 className="text-sm font-semibold tracking-tight text-slate-900 group-hover:text-slate-700">Podpress</h2>
<p className="text-xs text-slate-500">Pro Workspace</p>
</div>
</div>
<i className="w-4 h-4 text-slate-400" data-lucide="chevrons-up-down"></i>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-medium py-2.5 px-4 rounded-lg shadow-sm transition-all text-sm mb-6 group">
<i className="w-4 h-4 text-slate-500 group-hover:text-orange-600 transition-colors" data-lucide="plus"></i>
<span>Upload Podcast</span>
</button>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-100/80 transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="layout-grid"></i>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-100/80 transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="layout-template"></i>
                    Templates
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-lg hover:bg-slate-100/80 transition-colors" href="#">
<i className="w-4 h-4 text-slate-400" data-lucide="settings-2"></i>
                    Settings
                </a>
</nav>
</div>

<div className="h-px bg-slate-200 mx-4 my-2"></div>

<div className="flex-1 overflow-y-auto px-4 py-2 no-scrollbar">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 pl-1">Recent</h3>
<div className="space-y-1">

<div className="group">
<div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-slate-900 bg-white rounded-lg shadow-sm border border-slate-200/60 cursor-pointer">
<i className="w-4 h-4 text-orange-500 fill-orange-50" data-lucide="folder-open"></i>
<span className="truncate">The Future of AI</span>
</div>

<div className="pl-4 mt-1 space-y-0.5 border-l border-slate-200 ml-4">
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-orange-600 bg-orange-50/50 rounded-md font-medium transition-colors relative" href="#">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
                            Newsletter
                            <span className="absolute right-2 w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
</a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 rounded-md transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="mic"></i>
                            Transcription
                        </a>
<a className="flex items-center gap-2 px-3 py-1.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100/50 rounded-md transition-colors" href="#">
<i className="w-3.5 h-3.5" data-lucide="share-2"></i>
                            Social Clips
                        </a>
</div>
</div>

<div className="group pt-2">
<div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors opacity-70 hover:opacity-100">
<i className="w-4 h-4 text-slate-400" data-lucide="folder"></i>
<span className="truncate">Design Engineering #42</span>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors opacity-70 hover:opacity-100">
<i className="w-4 h-4 text-slate-400" data-lucide="folder"></i>
<span className="truncate">Startup School</span>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-white">
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200" src="https://ui-avatars.com/api/?name=Alex+M&amp;background=f1f5f9&amp;color=64748b"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Alex Morgan</p>
<p className="text-xs text-slate-500 truncate">Free Plan</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<i className="w-4 h-4" data-lucide="log-out"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="flex-shrink-0 h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-white z-20">

<div className="flex items-center gap-2 text-sm">
<span className="text-slate-400 font-medium">Podcasts</span>
<i className="w-4 h-4 text-slate-300" data-lucide="chevron-right"></i>
<span className="text-slate-900 font-medium">The Future of AI</span>
<span className="px-2 py-0.5 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100 ml-2">Ready</span>
</div>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 text-xs text-slate-400 font-medium mr-4">
<i className="w-3.5 h-3.5 text-green-500" data-lucide="check-circle-2"></i>
                    Auto-saved
                </div>
<button className="text-slate-500 hover:text-slate-800 p-2 rounded-md hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="share"></i>
</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 transition-all">
                    Export
                    <i className="w-3.5 h-3.5 text-slate-400" data-lucide="download"></i>
</button>
</div>
</header>

<div className="flex-shrink-0 px-6 border-b border-slate-100 bg-white z-10 sticky top-0">
<div className="flex items-center gap-6">
<button className="py-3 text-sm font-medium border-b-2 border-orange-600 text-orange-600">Newsletter</button>
<button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-900 transition-colors">Transcription</button>
<button className="py-3 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-900 transition-colors">Templates</button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-white relative">
<div className="max-w-3xl mx-auto py-12 px-8">

<div className="mb-10 p-1 rounded-xl bg-gradient-to-r from-orange-50 via-purple-50 to-blue-50 border border-slate-100 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3 px-3">
<div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-orange-600">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<span className="text-sm font-medium text-slate-700">AI Suggestions available</span>
</div>
<button className="bg-white text-slate-800 hover:text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 transition-colors flex items-center gap-1.5">
                        Optimize
                        <span className="text-slate-400 font-normal">⌘J</span>
</button>
</div>

<div className="group relative mb-8">
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-2 outline-none" contenteditable="true">The Rise of Generative Agents</h1>
<div className="flex items-center gap-4 text-sm text-slate-500">
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="calendar"></i> Oct 24, 2023</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 45 min listen</span>
<span className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="user"></i> Host: Sarah Jenkins</span>
</div>
</div>

<article className="prose prose-slate prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-orange-600 prose-blockquote:border-l-orange-500">
<p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        In this week's episode, we dive deep into the world of autonomous agents. Are we moving beyond simple chatbots to systems that can actually <span className="bg-orange-50 text-orange-800 px-1 py-0.5 rounded border border-orange-100 cursor-pointer hover:bg-orange-100 transition-colors" title="AI Suggestion: Rephrase for impact">reason and execute tasks?</span> The answer might surprise you.
                    </p>
<h2 className="text-2xl text-slate-900 mt-8 mb-4">Key Takeaways</h2>
<ul className="space-y-3 mb-8 list-none pl-0">
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" data-lucide="check"></i>
<span className="text-slate-600"><strong>Memory Systems:</strong> Why vector databases are the hippocampus of modern AI infrastructure.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" data-lucide="check"></i>
<span className="text-slate-600"><strong>Tool Use:</strong> Giving LLMs hands by connecting them to APIs like Zapier and Stripe.</span>
</li>
<li className="flex gap-3 items-start">
<i className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" data-lucide="check"></i>
<span className="text-slate-600"><strong>Safety Alignment:</strong> The risks of autonomous loops and how to build "human-in-the-loop" safeguards.</span>
</li>
</ul>
<div className="my-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
<h3 className="text-lg font-medium text-slate-900 mb-2">Quote of the week</h3>
<blockquote className="italic text-slate-600 border-none p-0 text-xl font-medium tracking-tight">
                            "We are not just building search engines anymore; we are building reasoning engines that can act on the world."
                        </blockquote>
<div className="mt-4 flex items-center gap-2">
<img className="w-6 h-6 rounded-full" src="https://ui-avatars.com/api/?name=Sam+A&amp;background=e2e8f0&amp;color=475569"/>
<span className="text-sm font-medium text-slate-900">Dr. Emily Chen, AI Researcher</span>
</div>
</div>
<h2 className="text-2xl text-slate-900 mt-8 mb-4">Deep Dive: The Agent Loop</h2>
<p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        The core loop of an agent is simple: <strong>Observation → Thought → Action</strong>. However, making this reliable is the engineering challenge of the decade. We discussed the new framework 'AutoGPT-4' and how it manages context windows efficiently.
                    </p>
<p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        For developers looking to get started, the barrier to entry has never been lower. However, the cost of API calls can scale linearly with complexity.
                    </p>
</article>

<div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between text-sm text-slate-400">
<span>Generated by Podpress AI</span>
<span>1,240 words</span>
</div>

<div className="h-24"></div>
</div>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-1.5 py-1.5 rounded-xl shadow-xl flex items-center gap-1 z-30 ring-1 ring-white/10">
<button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="bold"></i></button>
<button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="italic"></i></button>
<button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="link"></i></button>
<div className="w-px h-4 bg-white/20 mx-1"></div>
<button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="heading-1"></i></button>
<button className="p-2 hover:bg-white/20 rounded-lg transition-colors"><i className="w-4 h-4" data-lucide="list"></i></button>
<div className="w-px h-4 bg-white/20 mx-1"></div>
<button className="px-3 py-1.5 bg-orange-600 hover:bg-orange-500 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                    AI Edit
                </button>
</div>
</div>
</main>


    </>
  );
}
