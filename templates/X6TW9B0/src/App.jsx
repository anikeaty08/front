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
      
      const screens = {
        splash: document.getElementById('screen-splash'),
        chat: document.getElementById('screen-chat'),
        map: document.getElementById('screen-map'),
      };

      function showToast(message, color = 'sky') {
        const area = document.getElementById('toast-area');
        const wrap = document.createElement('div');
        wrap.className =
          'pointer-events-auto inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm ring-1 shadow ' +
          (color === 'fuchsia'
            ? 'bg-fuchsia-500/15 text-fuchsia-200 ring-fuchsia-400/30 shadow-[0_0_18px_rgba(217,70,239,0.25)]'
            : color === 'emerald'
            ? 'bg-emerald-500/15 text-emerald-200 ring-emerald-400/30 shadow-[0_0_18px_rgba(16,185,129,0.25)]'
            : 'bg-sky-500/15 text-sky-200 ring-sky-400/30 shadow-[0_0_18px_rgba(56,189,248,0.25)]'
          );
        wrap.innerHTML = '<i data-lucide="sparkles" stroke-width="1.5" class="w-4 h-4"></i><span class="text-[13px]">' + message + '</span>';
        area.appendChild(wrap);
        lucide.createIcons();
        setTimeout(() => {
          wrap.style.transition = 'opacity .25s ease, transform .25s ease';
          wrap.style.opacity = '0';
          wrap.style.transform = 'translateY(-6px)';
          setTimeout(() => wrap.remove(), 280);
        }, 1800);
      }

      function goTo(target) {
        Object.entries(screens).forEach(([key, el]) => {
          if (key === target) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        });
        lucide.createIcons();
      }

      function directions(place) {
        const url = 'https://www.google.com/maps/search/?api=1&query=' + place;
        window.open(url, '_blank');
      }

      function comingSoon(msg) {
        showToast(msg || 'People finder is coming soon.', 'fuchsia');
      }

      function vipTease() {
        showToast('VIP Mode unlocks exclusive parties and faster connects.', 'emerald');
      }

      function dismissPrompt(btn) {
        const bubble = btn.closest('.rounded-2xl');
        if (!bubble) return;
        bubble.style.transition = 'opacity .25s ease, transform .25s ease';
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(-6px)';
        setTimeout(() => {
          const wrap = bubble.parentElement?.parentElement;
          if (wrap) wrap.remove();
        }, 260);
      }

      document.getElementById('enter-btn').addEventListener('click', () => goTo('chat'));
      // Optional: auto-advance from splash after a moment
      setTimeout(() => {
        if (!screens.chat.classList.contains('hidden')) return;
        goTo('chat');
      }, 1600);

      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<div className="fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[38rem] rounded-[50%] bg-indigo-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.06),transparent_45%)]"></div>
</div>

<div className="fixed top-4 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none" id="toast-area"></div>

<main className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-5xl" id="app">

<section className="fixed inset-0 z-40 flex items-center justify-center hidden" id="screen-splash">
<button className="group relative flex flex-col gap-6 ring-1 ring-white/10 hover:ring-white/20 transition-all bg-slate-900/40 rounded-3xl pt-10 pr-10 pb-10 pl-10 backdrop-blur-sm items-center justify-center" id="enter-btn">
<div className="relative">
<div className="absolute -inset-6 rounded-full bg-sky-500/20 blur-2xl"></div>
<h1 className="relative text-5xl sm:text-6xl font-semibold tracking-tight text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.45)]">
              Bingle
            </h1>
</div>
<p className="text-sm text-slate-300/80">Nightlife &amp; Connections</p>
<div className="flex items-center gap-2 text-sky-300/90 animate-pulse">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs">Tap to enter</span>
</div>
<div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"></div>
</button>
</section>

<section className="fixed inset-0 z-30 overflow-y-auto hidden" id="screen-chat">
<div className="mx-auto flex min-h-full max-w-md flex-col px-5 py-6">

<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900/60 ring-1 ring-white/10">
<span className="text-sky-300 text-[11px] font-semibold tracking-tight">B</span>
</div>
<span className="text-lg font-medium tracking-tight text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.35)]">Bingle</span>
</div>
<button className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-slate-200/90 hover:text-white hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition" onclick="goTo('map')">
              Skip
              <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="relative mb-5 overflow-hidden rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-fuchsia-500/20 blur-2xl"></div>
<div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-sky-500/20 blur-2xl"></div>
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Bingle AI Mascot" className="h-16 w-16 rounded-full object-cover ring-2 ring-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.25)]" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<span className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-medium text-white ring-2 ring-slate-900">AI</span>
</div>
<div>
<p className="text-sm text-slate-300/90">Your flirty nightlife guide</p>
<p className="text-xs text-slate-400/80">Online • Tonight’s concierge</p>
</div>
</div>

<div className="mt-5 space-y-3">
<div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-3 ring-1 ring-white/10">
<p className="text-[15px] leading-relaxed">Hello [Name], welcome to Bingle AI 💋</p>
</div>
<div className="max-w-[90%] rounded-2xl rounded-tl-sm bg-white/5 px-4 py-3 ring-1 ring-white/10">
<p className="text-[15px] leading-relaxed">I’ll help you find the hottest spots tonight… and maybe some fun company too 😉</p>
</div>
</div>

<div className="mt-5 flex flex-col gap-2 sm:flex-row">
<button className="inline-flex w-full gap-2 ring-1 ring-sky-400/30 hover:bg-sky-500/20 hover:ring-sky-300/50 transition text-sm font-medium text-sky-300 bg-sky-500/15 rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-center" onclick="goTo('map')">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Find Clubs
              </button>
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition" onclick="comingSoon()">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Find People
              </button>
</div>
</div>

<div className="mx-auto flex w-full max-w-md items-center justify-between rounded-xl bg-slate-900/30 px-4 py-3 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-slate-300/90">
<svg className="lucide lucide-message-circle w-4 h-4 text-sky-300" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<p className="text-xs">Tip: I can whisper VIP spots if you’re nice.</p>
</div>
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium text-fuchsia-300/90 ring-1 ring-fuchsia-400/30 hover:bg-fuchsia-500/10 hover:ring-fuchsia-300/50 transition" onclick="vipTease()">
              Try VIP
            </button>
</div>
</div>
</section>

<section className="fixed inset-0 z-20" id="screen-map">

<div className="absolute left-0 right-0 top-0 z-20 mx-auto flex max-w-md items-center justify-between px-5 pt-5">
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10 transition" onclick="goTo('chat')">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
            Back
          </button>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900/60 px-3 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10 transition">
<svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
              Filters
            </button>
<button className="inline-flex items-center justify-center rounded-xl bg-slate-900/60 p-2 text-slate-200 ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/10 transition">
<svg className="lucide lucide-locate-fixed w-5 h-5" data-lucide="locate-fixed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="2" x2="5" y1="12" y2="12"></line><line x1="19" x2="22" y1="12" y2="12"></line><line x1="12" x2="12" y1="2" y2="5"></line><line x1="12" x2="12" y1="19" y2="22"></line><circle cx="12" cy="12" r="7"></circle><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>

<div className="relative h-full w-full overflow-hidden">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.15]"></div>
<div className="absolute inset-0"></div>
</div>

<div className="pointer-events-none absolute inset-0">

<div className="absolute left-[22%] top-[38%]">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-rose-300 drop-shadow-[0_0_8px_rgba(244,63,94,0.45)]">Wild Thyme</span>
<div className="relative flex flex-col items-center">
<span className="absolute -top-6">
<svg className="lucide lucide-flame w-4 h-4 text-rose-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</span>
<span className="absolute -inset-5 rounded-full bg-rose-500/25 blur-xl"></span>
<span className="absolute h-8 w-8 rounded-full bg-rose-500/40 animate-ping"></span>
<div className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-500 text-white ring-2 ring-rose-300/40 shadow-[0_0_22px_rgba(244,63,94,0.65)] hover:scale-105 transition">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>

<div className="absolute left-[66%] top-[54%]">
<span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.45)]">Fire Sign</span>
<div className="relative flex flex-col items-center">
<span className="absolute -inset-5 rounded-full bg-sky-500/25 blur-xl"></span>
<span className="absolute h-8 w-8 rounded-full bg-sky-500/40 animate-ping"></span>
<div className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500 text-white ring-2 ring-sky-300/40 shadow-[0_0_22px_rgba(56,189,248,0.65)] hover:scale-105 transition">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>

<div className="absolute left-[40%] top-[20%] h-8 w-8 rounded-full bg-fuchsia-500/20 blur-xl"></div>
<div className="absolute left-[15%] top-[70%] h-10 w-10 rounded-full bg-sky-500/20 blur-xl"></div>
<div className="absolute left-[75%] top-[24%] h-10 w-10 rounded-full bg-emerald-500/20 blur-xl"></div>
</div>

<div className="absolute bottom-48 left-4 right-4 z-20 mx-auto max-w-md">
<div className="flex max-w-[92%] items-start gap-3">
<img alt="Mascot" className="h-9 w-9 rounded-full object-cover ring-2 ring-sky-400/40" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="rounded-2xl rounded-tl-sm bg-slate-900/70 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
<p className="text-[13px] leading-relaxed text-slate-200">Looks like Wild Thyme is on fire tonight 🔥… should I land you there?</p>
<div className="mt-2 flex gap-2">
<button className="inline-flex items-center gap-1 rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30 hover:bg-emerald-500/20 hover:ring-emerald-300/50 transition" onclick="directions('Wild%20Thyme')">
<svg className="lucide lucide-navigation w-3.5 h-3.5" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                    Yes
                  </button>
<button className="inline-flex items-center gap-1 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/10 hover:ring-white/20 transition" onclick="dismissPrompt(this)">
                    Not now
                  </button>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 z-30">
<div className="mx-auto w-full max-w-md rounded-t-3xl bg-slate-950/70 backdrop-blur ring-1 ring-white/10">
<div className="flex flex-col px-4 pt-3 pb-2">
<div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/10"></div>
<div className="mb-3 flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-slate-100">Tonight’s Spots</h2>
<button className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition">
<svg className="lucide lucide-sliders w-4 h-4" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
                    Tune
                  </button>
</div>

<div className="space-y-3 pb-4">

<div className="group flex gap-3 rounded-2xl bg-white/5 p-2.5 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/20 transition">
<div className="relative h-16 w-16 overflow-hidden rounded-xl">
<img alt="Wild Thyme" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<span className="absolute left-1 top-1 rounded-md bg-rose-500/90 px-1.5 py-0.5 text-[10px] font-medium text-white">🔥 Hot</span>
</div>
<div className="flex min-w-0 flex-1 items-center justify-between">
<div className="min-w-0">
<div className="flex items-center gap-2">
<p className="truncate text-sm font-medium">Wild Thyme</p>
<span className="inline-flex items-center gap-1 rounded-md bg-rose-500/10 px-1.5 py-0.5 text-[10px] font-medium text-rose-300 ring-1 ring-rose-400/30">Trending</span>
</div>
<p className="mt-0.5 text-xs text-slate-400">Tonight’s Hottest Spot</p>
<div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-300">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.5
                        </div>
</div>
<div className="ml-3">
<button className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500/15 px-3 py-2 text-xs font-medium text-sky-300 ring-1 ring-sky-400/30 group-hover:bg-sky-500/20 group-hover:ring-sky-300/50 transition" onclick="directions('Wild%20Thyme')">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                          Get Directions
                        </button>
</div>
</div>
</div>

<div className="group flex gap-3 rounded-2xl bg-white/5 p-2.5 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/20 transition">
<div className="relative h-16 w-16 overflow-hidden rounded-xl">
<img alt="Fire Sign" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="flex min-w-0 flex-1 items-center justify-between">
<div className="min-w-0">
<p className="truncate text-sm font-medium">Fire Sign</p>
<div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-300">
<svg className="lucide lucide-star w-3.5 h-3.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.7
                        </div>
</div>
<div className="ml-3">
<button className="inline-flex items-center gap-1.5 rounded-xl bg-sky-500/15 px-3 py-2 text-xs font-medium text-sky-300 ring-1 ring-sky-400/30 group-hover:bg-sky-500/20 group-hover:ring-sky-300/50 transition" onclick="directions('Fire%20Sign')">
<svg className="lucide lucide-navigation w-4 h-4" data-lucide="navigation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                          Get Directions
                        </button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between border-t border-white/10 pt-3">
<div className="flex items-center gap-2 text-[11px] text-slate-400">
<svg className="lucide lucide-info w-3.5 h-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Live busyness updates refresh every 5m
                  </div>
<button className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] text-fuchsia-300 ring-1 ring-fuchsia-400/30 hover:bg-fuchsia-500/10 hover:ring-fuchsia-300/50 transition" onclick="comingSoon('Matching at these spots is coming soon.')">
                    Match there
                  </button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
