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
<svg className="lucide lucide-search h-4 w-4 text-zinc-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<input className="w-full rounded-lg bg-zinc-900/80 text-sm pl-9 pr-24 h-10 outline-none ring-1 ring-white/10 focus:ring-indigo-500/40 focus:outline-none placeholder:text-zinc-500 transition" placeholder="Search docs, endpoints, guides..." type="text"/>
<div className="absolute inset-y-0 right-2 hidden sm:flex items-center gap-1">
<span className="text-[11px] text-zinc-500">to search</span>
</div>
</div>
</div>

<div className="hidden md:flex items-center gap-2">
<details className="relative">
<summary className="list-none">
<button className="h-9 rounded-md px-3 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900/80 hover:text-zinc-100 transition inline-flex items-center gap-2">
<svg className="lucide lucide-git-branch h-4 w-4" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                  v1.4
                  <svg className="lucide lucide-chevron-down h-3.5 w-3.5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
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
<svg className="lucide lucide-book-open h-4 w-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              API Ref
            </a>
<a className="h-9 rounded-md px-3 text-sm text-zinc-300 ring-1 ring-white/10 hover:bg-zinc-900/80 hover:text-zinc-100 transition inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-external-link h-4 w-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
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
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb157054-620a-4023-8af4-73869ab9ec33_800w.jpg"/>
<div>
<div className="text-sm font-medium text-zinc-200 tracking-tight">Docs Assistant</div>
<div className="text-xs text-zinc-500">Ask questions, get examples</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-message-square h-3.5 w-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Quick Q&amp;A
              </button>
<button className="flex-1 rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center justify-center gap-2">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Examples
              </button>
</div>
</div>

<nav className="ring-1 ring-white/10 divide-y divide-white/5 bg-zinc-950/40 rounded-xl backdrop-blur-md">
<div className="p-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">Getting Started</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-rocket h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  Overview
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-key-round h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="key-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                  Authentication
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-zap h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                  Rate Limits
                </a>
</div>
</div>
<div className="pt-3 pr-3 pb-3 pl-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">API</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-search h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                  Search
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-message-square h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                  Answers
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-waves h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
                  Streaming
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-shuffle h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
                  Tools &amp; Functions
                </a>
</div>
</div>
<div className="p-3">
<div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">Guides</div>
<div className="space-y-1">
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-puzzle h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path></svg>
                  Relevance Tuning
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-lock h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Securing APIs
                </a>
<a className="group flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-zinc-300 hover:bg-zinc-900/70 hover:text-white transition" href="#">
<svg className="lucide lucide-folder-cog h-4 w-4 text-zinc-400 group-hover:text-white" data-lucide="folder-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"></path><path d="m14.305 19.53.923-.382"></path><path d="m15.228 16.852-.923-.383"></path><path d="m16.852 15.228-.383-.923"></path><path d="m16.852 20.772-.383.924"></path><path d="m19.148 15.228.383-.923"></path><path d="m19.53 21.696-.382-.924"></path><path d="m20.772 16.852.924-.383"></path><path d="m20.772 19.148.924.383"></path><circle cx="18" cy="18" r="3"></circle></svg>
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
<svg className="lucide lucide-chevron-right h-3.5 w-3.5 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<a className="hover:text-zinc-300 transition" href="#">API</a>
<svg className="lucide lucide-chevron-right h-3.5 w-3.5 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-zinc-400">Search &amp; Answers</span>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-start justify-between gap-3">
<div className="">
<h1 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-semibold text-zinc-50">
                Search &amp; Answers API
              </h1>
<p className="mt-2 text-sm md:text-base text-zinc-400 max-w-2xl">
                Query the web and your data, synthesize answers with citations, and stream structured results in real time.
              </p>
<div className="mt-3 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-globe h-3.5 w-3.5 text-zinc-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Web sources
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-database h-3.5 w-3.5 text-zinc-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Private index
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-file-text h-3.5 w-3.5 text-zinc-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Citations
                </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900/70 px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">
<svg className="lucide lucide-waves h-3.5 w-3.5 text-zinc-400" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg> SSE streaming
                </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<a className="rounded-md bg-zinc-900/70 ring-1 ring-white/10 px-3 py-2 text-xs text-zinc-300 hover:text-white hover:ring-indigo-500/40 transition inline-flex items-center gap-2" href="#">
<svg className="lucide lucide-list h-4 w-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h.01"></path><path d="M3 18h.01"></path><path d="M3 6h.01"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M8 6h13"></path></svg>
                Endpoints
              </a>
<a className="hover:bg-indigo-500 transition inline-flex items-center gap-2 text-xs text-white bg-indigo-600/90 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">Try<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></a>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 md:p-6 bg-zinc-950/40 rounded-xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-md">
<div className="flex items-center justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-zinc-100">Quickstart</h2>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition inline-flex items-center gap-1.5" href="#">
<svg className="lucide lucide-external-link h-3.5 w-3.5" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> Full guide
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
<div className="text-sm font-medium text-zinc-200">Stream tokens &amp; citations</div>
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
  -d '{
    "query": "How do I stream server-sent events in JavaScript?",
    "sources": ["web", "docs"],
    "stream": true,
    "max_sources": 5
  }'</code>
<button className="copy-btn absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" data-copy="">
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy
</button></pre>
</div>

<div className="code-panel hidden" data-tab-panel="node">
<pre className="relative m-0 p-0"><code className="block overflow-x-auto text-[12.5px] leading-6 bg-zinc-950 p-4 md:p-5 text-zinc-200"><span className="text-zinc-500">// npm i cross-fetch eventsource-parser</span>
import fetch from "cross-fetch";
import { createParser } from "eventsource-parser";

const res = await fetch("https://api.example.com/v1/answers", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    query: "How do I stream server-sent events in JavaScript?",
    sources: ["web", "docs"],
    stream: true
  })
});

const parser = createParser((event) =&gt; {
  if (event.type === "event" &amp;&amp; event.data) {
    if (event.data === "[DONE]") return;
    const chunk = JSON.parse(event.data);
    if (chunk.type === "citation") console.log("Source:", chunk.url);
    if (chunk.type === "token") process.stdout.write(chunk.text);
  }
});

for await (const chunk of res.body) {
  parser.feed(new TextDecoder().decode(chunk));
}</code>
<button className="copy-btn absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" data-copy="">
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy
</button></pre>
</div>

<div className="code-panel hidden" data-tab-panel="python">
<pre className="relative m-0 p-0"><code className="block overflow-x-auto text-[12.5px] leading-6 bg-zinc-950 p-4 md:p-5 text-zinc-200"><span className="text-zinc-500"># pip install httpx sseclient-py</span>
import os, json, httpx
from sseclient import SSEClient

payload = {
  "query": "How do I stream server-sent events in JavaScript?",
  "sources": ["web", "docs"],
  "stream": True
}

with httpx.Client(timeout=None) as client:
  with client.stream("POST", "https://api.example.com/v1/answers",
    headers={"Authorization": f"Bearer {os.environ['API_KEY']}",
             "Content-Type": "application/json"},
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
  <svg className="lucide lucide-copy h-3.5 w-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> Copy
</button></pre>
</div>
</div>
<div className="flex border-white/5 border-t pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="text-xs text-zinc-400">
              Tip: Prefer streaming for better perceived latency.
            </div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 text-emerald-300 px-2 py-1 text-[11px] ring-1 ring-emerald-400/20">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Fast
              </span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-400/10 text-blue-300 px-2 py-1 text-[11px] ring-1 ring-blue-400/20">
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Secure
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
<svg className="lucide lucide-link h-3.5 w-3.5" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg> View schema
            </a>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="group rounded-lg bg-zinc-900/50 ring-1 ring-white/10 p-3 hover:ring-indigo-500/40 hover:bg-zinc-900/70 transition" href="#">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">
                  MDN — EventSource
                </div>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-1 text-xs text-zinc-400 truncate">https://developer.mozilla.org/en-US/docs/Web/API/EventSource</p>
</a>
<a className="group rounded-lg bg-zinc-900/50 ring-1 ring-white/10 p-3 hover:ring-indigo-500/40 hover:bg-zinc-900/70 transition" href="#">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-zinc-200">
                  HTML Standard — Server-Sent Events
                </div>
<svg className="lucide lucide-arrow-up-right h-3.5 w-3.5 text-zinc-500 group-hover:text-zinc-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<p className="mt-1 text-xs text-zinc-400 truncate">https://html.spec.whatwg.org/multipage/server-sent-events.html</p>
</a>
</div>
</div>

<details className="rounded-xl bg-zinc-950/40 ring-1 ring-white/10 open:shadow-inner">
<summary className="cursor-pointer flex pt-4 pr-5 pb-4 pl-5 backdrop-blur-md items-center justify-between">
<div className="text-xl tracking-tight font-semibold text-zinc-100">Errors &amp; Troubleshooting</div>
<svg className="lucide lucide-chevron-down h-4 w-4 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<svg className="lucide lucide-shield-alert h-4 w-4 text-amber-400" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                  401 Unauthorized
                </div>
<p className="mt-1 text-sm text-zinc-400">Missing or invalid API key. Ensure Authorization header is present.</p>
</div>
<div className="rounded-lg bg-zinc-900/60 ring-1 ring-white/10 p-3">
<div className="text-sm font-medium text-zinc-200 flex items-center gap-2">
<svg className="lucide lucide-timer h-4 w-4 text-rose-400" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
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
<svg className="lucide lucide-thumbs-up h-4 w-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                Yes
              </button>
<button className="rounded-md bg-zinc-900/60 ring-1 ring-white/10 px-3 py-2 text-sm text-zinc-300 hover:text-white hover:ring-rose-400/40 transition inline-flex items-center gap-2">
<svg className="lucide lucide-thumbs-down h-4 w-4" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg>
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
<svg className="lucide lucide-info h-5 w-5 text-indigo-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="">
<div className="text-sm font-medium text-zinc-200">SDKs</div>
<p className="text-sm text-zinc-400 mt-1">Use our typed SDKs for Node and Python with built-in streaming helpers.</p>
<div className="mt-2 flex items-center gap-2">
<a className="text-xs text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1" href="#">
<svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Explore SDKs
                  </a>
</div>
</div>
</div>
</div>

<div className="ring-1 ring-white/10 bg-zinc-950/40 rounded-xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="flex items-center gap-3">
<img alt="author" className="h-9 w-9 rounded-full ring-1 ring-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2535b76b-b8ce-41f7-828a-ed8a321b3c22_320w.jpg"/>
<div className="">
<div className="text-sm font-medium text-zinc-200">Maintainer</div>
<div className="text-xs text-zinc-500">devrel@example.com</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<a className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/70 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" href="#">
<svg className="lucide lucide-share-2 h-3.5 w-3.5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Share
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/70 px-2.5 py-1.5 text-[11px] text-zinc-300 ring-1 ring-white/10 hover:text-white hover:ring-indigo-500/40 transition" href="#">
<svg className="lucide lucide-rss h-3.5 w-3.5" data-lucide="rss" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg> Subscribe
              </a>
</div>
</div>
</div>
</aside>
</main>


    </>
  );
}
