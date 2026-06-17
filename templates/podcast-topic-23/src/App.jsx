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
      

<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/10 bg-slate-900/80 px-6 py-3 shadow-lg backdrop-blur-xl">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-violet-500 shadow-md">
<iconify-icon className="text-xl text-white" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-white">Ngobrolin Web</span>
</div>
<div className="hidden items-center gap-1 sm:flex">
<button className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white">Episodes</button>
<button className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white">About</button>
<button className="ml-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all hover:scale-110 hover:bg-white/10 hover:text-white">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</button>
</div>
</nav>
</div>
<main className="mx-auto max-w-7xl px-6 pb-24 pt-32">

<header className="mb-16 text-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-sm font-semibold text-yellow-300">
<iconify-icon className="text-base" icon="solar:confetti-minimalistic-linear"></iconify-icon>
<span>Season 4 is here!</span>
</div>
<h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl">
                Pick the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">next topic</span>
</h1>
<p className="mx-auto max-w-2xl text-xl text-slate-400 font-medium">
                Help us decide what to ramble about next! Vote for the nerdy stuff or let chaos decide.
            </p>
</header>

<section className="relative mx-auto mb-24 max-w-4xl overflow-hidden rounded-[40px] border border-white/10 bg-slate-800/40 p-1 shadow-2xl backdrop-blur-sm">

<div className="absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-pink-500/20 blur-[100px]"></div>
<div className="relative flex flex-col items-center justify-center rounded-[36px] border border-white/5 bg-slate-900/50 px-8 py-16 text-center">
<h2 className="mb-8 mt-2 text-4xl font-semibold text-slate-500">
                    🎲 No topic selected yet...
                </h2>
<div className="flex flex-col gap-4 sm:flex-row">
<button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-slate-900 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.4)] active:scale-95">
<iconify-icon className="text-xl transition-transform group-hover:rotate-180" icon="solar:shuffle-linear"></iconify-icon>
                        Pick Random Topic
                    </button>
<button className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
<iconify-icon className="text-xl transition-transform group-hover:spin" icon="solar:refresh-circle-linear"></iconify-icon>
                        Spin the Wheel
                    </button>
</div>
</div>
</section>

<section className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
<div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-slate-800/30 p-6 text-center transition-transform hover:scale-105">
<div className="text-4xl font-bold text-pink-400">93</div>
<div className="mt-1 text-sm font-semibold text-slate-400">Total Topics</div>
</div>
<div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-slate-800/30 p-6 text-center transition-transform hover:scale-105">
<div className="text-4xl font-bold text-cyan-400">234</div>
<div className="mt-1 text-sm font-semibold text-slate-400">Total Votes</div>
</div>
<div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-slate-800/30 p-6 text-center transition-transform hover:scale-105">
<div className="text-4xl font-bold text-yellow-400">54</div>
<div className="mt-1 text-sm font-semibold text-slate-400">Comments</div>
</div>
<div className="flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-slate-800/30 p-6 text-center transition-transform hover:scale-105">
<div className="text-4xl font-bold text-violet-400">21</div>
<div className="mt-1 text-sm font-semibold text-slate-400">Friends</div>
</div>
</section>

<div className="mb-10 flex flex-col justify-between gap-6 pb-2 md:flex-row md:items-center">
<div>
<h3 className="flex items-center gap-2 text-2xl font-bold text-white">
<iconify-icon className="text-orange-400" icon="solar:fire-bold"></iconify-icon>
                    Hot Topics
                </h3>
</div>
<div className="flex flex-wrap gap-2 rounded-2xl bg-slate-800/50 p-1.5">
<button className="rounded-xl bg-pink-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-pink-500/20 transition-all hover:scale-105">
                    Most Votes
                </button>
<button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                    Talked About
                </button>
<button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                    Fresh
                </button>
<button className="rounded-xl px-4 py-2 text-sm font-semibold text-slate-400 transition-colors hover:bg-white/5 hover:text-white">
                    Dusty
                </button>
</div>
</div>

<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative flex flex-col justify-between rounded-[32px] border-2 border-pink-500/50 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:rotate-1 hover:shadow-xl hover:shadow-pink-500/10">
<div className="absolute -right-2 -top-2 rotate-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1 text-xs font-bold text-white shadow-lg">
                    ✨ Picked!
                </div>
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-white group-hover:text-pink-300 transition-colors">
                        Basic Web Security
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-blue-400"></div>
<span className="text-sm font-medium text-slate-400">mazipan</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg bg-pink-500/10 px-3 py-1.5 text-pink-400 transition-colors hover:bg-pink-500/20">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">11</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">2</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-sm transition-transform hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-xl hover:shadow-cyan-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                        Websocket
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-orange-400"></div>
<span className="text-sm font-medium text-slate-400">rizafahmi</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">10</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">1</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-cyan-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-emerald-400/30 hover:shadow-xl hover:shadow-emerald-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-emerald-300 transition-colors">
                        Monorepo
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-green-400"></div>
<span className="text-sm font-medium text-slate-400">rizafahmi</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">9</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">1</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-emerald-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-purple-400/30 hover:shadow-xl hover:shadow-purple-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-purple-300 transition-colors">
                        Database Scaling
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-pink-400"></div>
<span className="text-sm font-medium text-slate-400">triadmoko</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">8</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">1</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-purple-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-red-400/30 hover:shadow-xl hover:shadow-red-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-red-300 transition-colors">
                        WebRTC deep dive
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-orange-400"></div>
<span className="text-sm font-medium text-slate-400">rizafahmi</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">7</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">0</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-red-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-indigo-400/30 hover:shadow-xl hover:shadow-indigo-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-indigo-300 transition-colors">
                        Design Patterns
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-indigo-400"></div>
<span className="text-sm font-medium text-slate-400">azman-aziz</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">6</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">2</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-indigo-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-blue-300 transition-colors">
                        Storybook: Component Docs
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-blue-400"></div>
<span className="text-sm font-medium text-slate-400">mazipan</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">4</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">0</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-blue-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-yellow-300 transition-colors">
                        HTTP1 vs HTTP2 vs HTTP3
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-orange-400"></div>
<span className="text-sm font-medium text-slate-400">rizafahmi</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">4</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">1</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-yellow-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-[32px] border border-white/5 bg-slate-800/40 p-6 transition-all hover:-translate-y-2 hover:border-orange-400/30 hover:shadow-xl hover:shadow-orange-400/5">
<div>
<h4 className="mb-3 text-2xl font-bold leading-tight text-slate-100 group-hover:text-orange-300 transition-colors">
                        Semantic Versioning
                    </h4>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full border-2 border-slate-700 bg-orange-400"></div>
<span className="text-sm font-medium text-slate-400">rizafahmi</span>
</div>
</div>
<div className="mt-8 rounded-2xl bg-slate-900/50 p-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 pl-2">
<button className="flex items-center gap-1.5 rounded-lg hover:bg-white/5 px-3 py-1.5 text-slate-300 transition-colors">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear"></iconify-icon>
<span className="text-sm font-bold">4</span>
</button>
<div className="flex items-center gap-1.5 px-3 py-1.5 text-slate-500">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="text-sm font-semibold">1</span>
</div>
</div>
<a className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-white transition-all group-hover:bg-orange-400 group-hover:text-slate-900 hover:scale-110" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<button className="flex items-center gap-2 rounded-full border-2 border-slate-700 bg-slate-800 px-8 py-4 text-base font-bold text-slate-300 transition-all hover:border-pink-500 hover:bg-slate-700 hover:text-white hover:-translate-y-1">
                Show more topics
                <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</main>
<footer className="border-t border-white/5 bg-slate-900/80 py-16 backdrop-blur-lg">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:copyright-linear"></iconify-icon>
<span className="text-sm font-medium">2024 Ngobrolin Web</span>
</div>
<p className="text-xs text-slate-600">Built for fun and profit (mostly fun).</p>
</div>
<div className="flex gap-6">
<a className="rounded-full bg-white/5 p-3 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:camera-minimalistic-linear"></iconify-icon>
</a>
<a className="rounded-full bg-white/5 p-3 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</a>
<a className="rounded-full bg-white/5 p-3 text-slate-400 hover:bg-white/10 hover:text-white hover:scale-110 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:chat-square-call-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
