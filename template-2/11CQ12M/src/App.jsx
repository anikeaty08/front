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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

      // Initialize lucide icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Tabs logic
      const tabButtons = document.querySelectorAll('.tab-btn');
      const panels = document.querySelectorAll('[data-tab-panel]');
      tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const target = btn.getAttribute('data-tab-target');
          panels.forEach(p => {
            if (p.getAttribute('data-tab-panel') === target) {
              p.classList.remove('hidden');
            } else {
              p.classList.add('hidden');
            }
          });
          tabButtons.forEach(b => b.classList.remove('bg-zinc-900', 'text-white'));
          btn.classList.add('bg-zinc-900', 'text-white');
        });
      });
      // Activate first tab
      if (tabButtons[0]) tabButtons[0].click();

      // Copy buttons
      document.querySelectorAll('[data-copy]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const pre = btn.closest('pre');
          const code = pre.querySelector('code')?.innerText ?? '';
          try {
            await navigator.clipboard.writeText(code);
            const icon = btn.querySelector('i[data-lucide]');
            btn.innerHTML = '<i data-lucide="check" class="h-3.5 w-3.5 text-emerald-300"></i> Copied';
            if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            setTimeout(() => {
              btn.innerHTML = '<i data-lucide="copy" class="h-3.5 w-3.5"></i> Copy';
              if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }, 1400);
          } catch (e) {
            btn.innerHTML = '<i data-lucide="x" class="h-3.5 w-3.5 text-rose-300"></i> Failed';
            if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            setTimeout(() => {
              btn.innerHTML = '<i data-lucide="copy" class="h-3.5 w-3.5"></i> Copy';
              if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }, 1400);
          }
        });
      });
    
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/3dgradient-AcpgG6LxFkpnJSoowRHPfcbO" width="100%"></iframe></div>

<header className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/75 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-14 items-center gap-4">

<a className="flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-gradient-to-b from-zinc-800 to-zinc-900 ring-1 ring-white/10 grid place-items-center">
<span className="text-[11px] tracking-tight font-semibold text-zinc-50">PX</span>
</div>
<span className="hidden md:block text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors">Docs</span>
</a>

<div className="flex-1">
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
<svg className="lucide lucide-search h-4 w-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
</div>
<input className="w-full rounded-lg bg-zinc-900/80 text-sm pl-9 pr-24 h-10 outline-none ring-1 ring-white/10 focus:ring-indigo-500/40 focus:outline-none placeholder:text-zinc-500 transition" placeholder="Search docs, endpoints, guides..." type="text" />
<div className="absolute inset-y-0 right-2 hidden sm:flex items-center gap-1">
<span className="text-[11px] text-zinc-500">to search</span>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-2">
<details className="relative">
<summary className="list-none">
<button className="h-9 rounded-md px-3 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900/80 hover:text-zinc-100 transition inline-flex items-center gap-2">
<svg className="lucide lucide-git-branch h-4 w-4" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path></svg>
                  v1.4
                  <svg className="lucide lucide-chevron-down h-3.5 w-3.5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</summary>
<div className="absolute right-0 mt-2 w-44 rounded-lg bg-zinc-950 ring-1 ring-white/10 shadow-xl p-1">
<a className="flex items-center justify-between gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-50 transition" href="#">
                  v1.4 <span className="text-[10px] text-emerald-400/90">Latest</span>
</a>
<a className="block rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-50 transition" href="#">v1.3</a>
<a className="block rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-50 transition" href="#">v1.2</a>
<a className="block rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-50 transition" href="#">Legacy</a>
</div>
</details>
<a className="h-9 rounded-md px-3 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900/80 hover:text-zinc-100 transition inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              API Ref
            </a>
<a className="h-9 rounded-md px-3 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900/80 hover:text-zinc-100 transition inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
              Changelog
            </a>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-10 grid grid-cols-12 gap-6">

<aside className="hidden lg:block col-span-3">
<div className="sticky top-20 space-y-6">

<div className="ring-1 ring-white/10 bg-zinc-950/40 rounded-xl pt-3 pr-3 pb-3 pl-3 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb157054-620a-4023-8af4-73869ab9ec33_800w.jpg" />
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Docs Assistant</div>
<div className="text-xs text-zinc-500">Ask questions, get examples</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                Quick Q&A
              </button>
<button className="flex-1 rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
                Examples
              </button>
</div>
</div>

<nav className="ring-1 ring-white/10 divide-y divide-white/5 bg-zinc-950/40 rounded-xl backdrop-blur-md">
<div className="p-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">Getting Started</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-rocket h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
                  Overview
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-key-round h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="16.5" cy="7.5" fill="currentColor"></circle></svg>
                  Authentication
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-zap h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Rate Limits
                </a>
</div>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">API</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-search h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
                  Search
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-message-square h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Answers
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-waves h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  Streaming
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-shuffle h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
                  Tools & Functions
                </a>
</div>
</div>
<div className="p-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">Guides</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-puzzle h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
                  Relevance Tuning
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-lock h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
                  Securing APIs
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-folder-cog h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="folder-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><path></path><circle cx="18" cy="18"></circle></svg>
                  Deploying to Edge
                </a>
</div>
</div>
</nav>
</div>
</aside>

<section className="col-span-12 lg:col-span-6 space-y-6">

<div className="text-xs text-zinc-500 flex items-center gap-2">
<a className="hover:text-zinc-300 transition" href="#">Docs</a>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<a className="hover:text-zinc-300 transition" href="#">API</a>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-zinc-400">Search & Answers</span>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-start justify-between gap-3">
<div className="">
<h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-zinc-50">
                Search & Answers API
              </h1>
<p className="mt-2 text-sm md:text-base text-zinc-400 max-w-2xl">
                Query the web and your data, synthesize answers with citations, and stream structured results in real time.
              </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-globe h-3.5 w-3.5 text-zinc-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg> Web sources
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-database h-3.5 w-3.5 text-zinc-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path></path><path></path></svg> Private index
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-file-text h-3.5 w-3.5 text-zinc-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg> Citations
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-waves h-3.5 w-3.5 text-zinc-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> SSE streaming
                </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<a className="rounded-md bg-zinc-900/70 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-list h-4 w-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
                Endpoints
              </a>
<a className="hover:bg-indigo-500 transition inline-flex items-center gap-2 text-xs text-white bg-indigo-600/90 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Try<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg></a>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-center justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-zinc-100">Quickstart</h2>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition inline-flex items-center gap-1.5" href="#">
<svg className="lucide lucide-external-link h-3.5 w-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg> Full guide
            </a>
</div>
<ol className="mt-4 space-y-3">
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-indigo-600/20 text-indigo-300 ring-1 ring-indigo-500/30 grid place-items-center text-[11px] font-medium">1</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-200">Create an API key</div>
<div className="text-sm text-zinc-400">Go to the dashboard and generate a secret token with read scope.</div>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-indigo-600/20 text-indigo-300 ring-1 ring-indigo-500/30 grid place-items-center text-[11px] font-medium">2</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-200">Make your first query</div>
<div className="text-sm text-zinc-400">Send a POST request to /v1/answers with your question and options.</div>
</div>
</li>
<li className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-indigo-600/20 text-indigo-300 ring-1 ring-indigo-500/30 grid place-items-center text-[11px] font-medium">3</div>
<div className="flex-1">
<div className="text-sm font-medium text-zinc-200">Stream tokens & citations</div>
<div className="text-sm text-zinc-400">Use SSE to receive incremental tokens and citations as they are discovered.</div>
</div>
</li>
</ol>
</div>

<div className="ring-1 ring-white/10 overflow-hidden bg-zinc-950/40 rounded-xl backdrop-blur-md">
<div className="flex items-center justify-between px-4 py-3">
<h3 className="text-base font-medium text-zinc-200">Answer request</h3>
<div className="flex items-center gap-1.5">
<button className="tab-btn rounded-md px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900/70 ring-1 ring-white/10 transition bg-zinc-900 text-white" data-tab-target="curl">cURL</button>
<button className="tab-btn rounded-md px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900/70 ring-1 ring-white/10 transition" data-tab-target="node">Node</button>
<button className="tab-btn rounded-md px-2.5 py-1.5 text-xs text-zinc-300 hover:text-white hover:bg-zinc-900/70 ring-1 ring-white/10 transition" data-tab-target="python">Python</button>
</div>
</div>
<div className="border-t border-white/5">

<div className="code-panel" data-tab-panel="curl">
<pre className="relative m-0 p-0"><code className="block overflow-x-auto text-[12.5px] leading-6 bg-zinc-950 p-4 md:p-5 text-zinc-200"><span className="text-zinc-500"># Ask a question and get an answer with citations</span>
curl https://api.example.com/v1/answers \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"{"}
    "query": "How do I stream server-sent events in JavaScript?",
    "sources": ["web", "docs"],
    "stream": true,
    "max_sources": 5
  {"}"}'</code>
<button className="copy-btn absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" data-copy="">
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg> Copy
</button></pre>
</div>

<div className="code-panel hidden" data-tab-panel="node">
<pre className="relative m-0 p-0"><code className="block overflow-x-auto text-[12.5px] leading-6 bg-zinc-950 p-4 md:p-5 text-zinc-200"><span className="text-zinc-500">// npm i cross-fetch eventsource-parser</span>
import fetch from "cross-fetch";
import {"{"} createParser {"}"} from "eventsource-parser";

const res = await fetch("https://api.example.com/v1/answers", {"{"}
  method: "POST",
  headers: {"{"}
    "Authorization": `Bearer ${"{"}process.env.API_KEY{"}"}`,
    "Content-Type": "application/json"
  {"}"},
  body: JSON.stringify({"{"}
    query: "How do I stream server-sent events in JavaScript?",
    sources: ["web", "docs"],
    stream: true
  {"}"})
{"}"});

const parser = createParser((event) ={">"} {"{"}
  if (event.type === "event" && event.data) {"{"}
    if (event.data === "[DONE]") return;
    const chunk = JSON.parse(event.data);
    if (chunk.type === "citation") console.log("Source:", chunk.url);
    if (chunk.type === "token") process.stdout.write(chunk.text);
  {"}"}
{"}"});

for await (const chunk of res.body) {"{"}
  parser.feed(new TextDecoder().decode(chunk));
{"}"}</code>
<button className="copy-btn absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" data-copy="">
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg> Copy
</button></pre>
</div>

<div className="code-panel hidden" data-tab-panel="python">
<pre className="relative m-0 p-0"><code className="block overflow-x-auto text-[12.5px] leading-6 bg-zinc-950 p-4 md:p-5 text-zinc-200"><span className="text-zinc-500"># pip install httpx sseclient-py</span>
import os, json, httpx
from sseclient import SSEClient

payload = {"{"}
  "query": "How do I stream server-sent events in JavaScript?",
  "sources": ["web", "docs"],
  "stream": True
{"}"}

with httpx.Client(timeout=None) as client:
  with client.stream("POST", "https://api.example.com/v1/answers",
    headers={"{"}"Authorization": f"Bearer {"{"}os.environ['API_KEY']{"}"}",
             "Content-Type": "application/json"{"}"},
    json=payload) as response:

    client = SSEClient(response)
    for event in client.events():
      if event.data == "[DONE]":
        break
      data = json.loads(event.data)
      if data.get("type") == "citation":
        print("Source:", data["url"])
      elif data.get("type") == "token":
        print(data["text"], end="")</code>
<button className="copy-btn absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" data-copy="">
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14"></rect><path></path></svg> Copy
</button></pre>
</div>
</div>
<div className="flex border-white/5 border-t pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="text-xs text-zinc-400">
              Tip: Prefer streaming for better perceived latency.
            </div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-400/20">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Fast
              </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/10 text-blue-300 px-2 py-1 text-[11px] ring-1 ring-blue-400/20">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> Secure
              </span>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<h3 className="text-xl tracking-tight font-semibold text-zinc-100">Parameters</h3>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">query</div>
<span className="text-[11px] text-zinc-400">string</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Question to answer. Supports multi-sentence and follow-ups.</p>
</div>
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">sources</div>
<span className="text-[11px] text-zinc-400">array</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Select "web", "docs", or "all" to control retrieval sources.</p>
</div>
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">stream</div>
<span className="text-[11px] text-zinc-400">boolean</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Return tokens incrementally using Server-Sent Events.</p>
</div>
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">max_sources</div>
<span className="text-[11px] text-zinc-400">integer</span>
</div>
<p className="mt-1 text-sm text-zinc-400">Maximum number of citations to include in the response.</p>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-zinc-100">Citations</h3>
<a className="text-xs text-zinc-400 hover:text-zinc-200 inline-flex items-center gap-1.5 transition" href="#">
<svg className="lucide lucide-link h-3.5 w-3.5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> View schema
            </a>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="group rounded-lg bg-zinc-900/50 ring-1 ring-white/10 p-3 hover:ring-indigo-500/40 hover:bg-zinc-900/70 transition" href="#">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">
                  MDN — EventSource
                </div>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<p className="mt-1 text-xs text-zinc-400 truncate">https://developer.mozilla.org/en-US/docs/Web/API/EventSource</p>
</a>
<a className="group rounded-lg bg-zinc-900/50 ring-1 ring-white/10 p-3 hover:ring-indigo-500/40 hover:bg-zinc-900/70 transition" href="#">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">
                  HTML Standard — Server-Sent Events
                </div>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<p className="mt-1 text-xs text-zinc-400 truncate">https://html.spec.whatwg.org/multipage/server-sent-events.html</p>
</a>
</div>
</div>

<details className="rounded-xl bg-zinc-950/40 ring-1 ring-white/10 open:shadow-inner">
<summary className="cursor-pointer flex pt-4 pr-5 pb-4 pl-5 backdrop-blur-md items-center justify-between">
<div className="text-xl tracking-tight font-semibold text-zinc-100">Errors & Troubleshooting</div>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</summary>
<div className="px-5 pb-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<svg className="lucide lucide-shield-alert h-4 w-4 text-amber-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
                  401 Unauthorized
                </div>
<p className="mt-1 text-sm text-zinc-400">Missing or invalid API key. Ensure Authorization header is present.</p>
</div>
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<svg className="lucide lucide-timer h-4 w-4 text-rose-400" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><circle cx="12" cy="14"></circle></svg>
                  429 Rate Limited
                </div>
<p className="mt-1 text-sm text-zinc-400">Back off and retry with exponential strategy. See retry-after header.</p>
</div>
</div>
</div>
</details>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium text-zinc-200">Was this page helpful?</div>
<div className="text-xs text-zinc-500">Your feedback improves our docs experience.</div>
</div>
<div className="flex items-center gap-2">
<button className="rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:ring-emerald-400/40 transition inline-flex items-center gap-2">
<svg className="lucide lucide-thumbs-up h-4 w-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                Yes
              </button>
<button className="rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:ring-rose-400/40 transition inline-flex items-center gap-2">
<svg className="lucide lucide-thumbs-down h-4 w-4" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
                No
              </button>
</div>
</div>
</div>

<div className="pt-2 pb-8">
<div className="text-xs text-zinc-500">Last updated 2 days ago • v1.4</div>
</div>
</section>

<aside className="hidden xl:block col-span-3">
<div className="sticky top-20 space-y-6">

<div className="ring-1 ring-white/10 bg-zinc-950/40 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">On this page</div>
<nav className="space-y-2 text-sm">
<a className="block text-zinc-300 hover:text-white transition" href="#">Quickstart</a>
<a className="block text-zinc-300 hover:text-white transition" href="#">Parameters</a>
<a className="block text-zinc-300 hover:text-white transition" href="#">Citations</a>
<a className="block text-zinc-300 hover:text-white transition" href="#">Errors</a>
</nav>
</div>

<div className="ring-1 ring-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/30 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="flex items-start gap-3">
<svg className="lucide lucide-info h-5 w-5 text-indigo-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
<div className="">
<div className="text-sm font-medium text-zinc-200">SDKs</div>
<p className="text-sm text-zinc-400 mt-1">Use our typed SDKs for Node and Python with built-in streaming helpers.</p>
<div className="mt-2 flex items-center gap-2">
<a className="text-xs text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1" href="#">
<svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg> Explore SDKs
                  </a>
</div>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 bg-zinc-950/40 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="author" className="h-9 w-9 rounded-full ring-1 ring-white/10 object-cover" src="/assets/2535b76b-b8ce-41f7-828a-ed8a321b3c22_320w.jpg" />
<div className="">
<div className="text-sm font-medium text-zinc-200">Maintainer</div>
<div className="text-xs text-zinc-500">devrel@example.com</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/70 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" href="#">
<svg className="lucide lucide-share-2 h-3.5 w-3.5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg> Share
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/70 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" href="#">
<svg className="lucide lucide-rss h-3.5 w-3.5" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="5" cy="19"></circle></svg> Subscribe
              </a>
</div>
</div>
</div>
</aside>
</main>


    </>
  );
}
