import React, { useEffect } from 'react';
import { createIcons } from 'https://unpkg.com/lucide@latest/dist/esm/lucide.js';

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

  createIcons();
  document.getElementById('year').textContent = new Date().getFullYear();

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
      

<div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] bg-gradient-to-b from-orange-500/20 via-red-400/10 to-transparent blur-3xl opacity-0 animate-fade-in"></div>

<header className="relative z-20 opacity-0 animate-fade-in" style={{animationDelay: `0.2s`}}>
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 lg:px-8">
<a className="flex items-center gap-2 text-lg font-semibold hover:text-orange-400 transition-colors" href="#">
<i className="h-6 w-6 text-orange-400" data-lucide="sparkles"></i>
<span className="font-geist">Nexus Studio</span>
</a>
<nav className="hidden items-center gap-8 text-sm font-medium md:flex">
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Dashboard</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Gallery</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Features</a>
<a className="hover:text-orange-400 transition-colors font-geist" href="#">Plans</a>
<button className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2 text-sm font-medium shadow-lg transition-all hover:scale-105 hover:shadow-orange-500/25 font-geist">
        Get Started
      </button>
</nav>
<button className="md:hidden hover:text-orange-400 transition-colors">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative z-10 mx-auto mt-16 max-w-7xl px-4 lg:px-8">
<div className="grid gap-16 lg:grid-cols-2 items-center">

<div className="opacity-0 animate-slide-up" style={{animationDelay: `0.4s`}}>
<span className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-200 backdrop-blur-sm font-geist">
<svg className="w-[16px] h-[16px]" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(254, 215, 170)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path><path></path></svg>
        Powered by AI Technology
      </span>
<h1 className="mb-8 text-5xl font-bold tracking-tight leading-tight lg:text-7xl">
<span className="block bg-gradient-to-r from-red-400 via-orange-400 to-blue-400 bg-clip-text text-transparent font-playfair font-medium">
          Create Beyond
        </span>
<span className="block bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 bg-clip-text text-transparent font-playfair font-medium">
          Imagination
        </span>
</h1>
<p className="mb-10 max-w-xl text-lg leading-relaxed text-stone-300 font-geist">
        Transform your creative vision into stunning digital artworks with Nexus Studio. Join over 50,000 artists and designers using advanced AI tools to craft breathtaking visuals. From concept sketches to masterpiece renders, your creativity knows no bounds.
      </p>
<button className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-base font-medium shadow-xl transition-all hover:scale-105 hover:shadow-orange-500/25 font-geist">
<svg className="transition-transform group-hover:rotate-12 w-[20px] h-[20px]" data-lucide="palette" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path className=""></path><path className=""></path></svg>
        Start Creating
      </button>
</div>

<div className="relative opacity-0 animate-scale-in" style={{animationDelay: `0.6s`}}>
<div className="relative">
<img alt="Digital artwork creation" className="aspect-[4/5] w-full ring-1 ring-white/10 object-cover rounded-3xl shadow-2xl" src="https://cdn.midjourney.com/video/14b2db76-0a2a-4605-88b3-21405f25baab/2.mp4?w=800&q=80" />

<div className="absolute -right-4 top-8 w-80 ring-1 ring-white/10 lg:-right-8 bg-stone-900/80 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-2xl backdrop-blur-2xl">
<h3 className="text-base font-semibold text-white font-geist mb-5">Recent Activity</h3>
<div className="space-y-3">
<div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-500 shadow-lg">
<svg className="w-[16px] h-[16px]" data-lucide="layers" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white font-geist">Style Transfer</p>
<p className="text-xs text-stone-400 font-geist">New Feature · Dec 15, 2023</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-indigo-500 shadow-lg">
<svg className="w-[16px] h-[16px]" data-lucide="paintbrush" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white font-geist">Canvas Editor</p>
<p className="text-xs text-stone-400 font-geist">Update · Dec 12, 2023</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 shadow-lg">
<svg className="w-[16px] h-[16px]" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white font-geist">Performance</p>
<p className="text-xs text-stone-400 font-geist">Dec 10, 2023</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg">
<svg className="w-[16px] h-[16px]" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white font-geist">v3.2 Launch</p>
<p className="text-xs text-stone-400 font-geist">Major Release · Dec 8, 2023</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-xl bg-white/5 p-4 transition-colors hover:bg-white/10">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg">
<svg className="w-[16px] h-[16px]" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-white font-geist">Team Workspace</p>
<p className="text-xs text-stone-400 font-geist">Dec 5, 2023</p>
</div>
</div>
</div>
<button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-4 py-3 text-sm font-medium text-white/80 transition-all hover:bg-white/20 hover:text-white font-geist">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
            Show all activity
          </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 mt-32 opacity-0 animate-slide-up" style={{animationDelay: `0.8s`}}>
<div className="mx-auto max-w-7xl px-4 lg:px-8">
<div className="rounded-3xl bg-stone-900/50 p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl lg:p-12">
<div className="grid gap-8 lg:grid-cols-3">

<div className="group overflow-hidden rounded-2xl bg-stone-800/50 ring-1 ring-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:ring-white/20">
<div className="relative overflow-hidden">
<img alt="API integration" className="h-56 w-full transition-transform duration-500 group-hover:scale-110 object-cover" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_0.png?w=800&q=80" />
<button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 backdrop-blur-sm transition-all hover:bg-stone-900/90 hover:scale-110">
<svg className="w-[20px] h-[20px]" data-lucide="code" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="6"></circle><path></path><path></path><circle cx="19" cy="18"></circle><path></path><path></path></svg>
</button>
</div>
<div className="p-6">
<div className="mb-4">
<h4 className="text-lg font-semibold text-white font-geist">API Integration</h4>
<p className="text-sm font-medium text-orange-300 font-geist">Building Powerful Workflows</p>
</div>
<p className="mb-6 text-sm leading-relaxed text-stone-300 font-geist">
              Integrate Nexus Studio's powerful AI capabilities directly into your applications with our comprehensive REST API and SDK libraries.
            </p>
<button className="flex items-center gap-2 rounded-full bg-stone-700/60 px-5 py-2.5 text-sm font-medium transition-all hover:bg-stone-600 hover:shadow-lg font-geist">
<i className="h-4 w-4" data-lucide="terminal"></i>
              View API Docs
            </button>
</div>
</div>

<div className="group overflow-hidden rounded-2xl bg-stone-800/50 ring-1 ring-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:ring-white/20">
<div className="relative overflow-hidden">
<img alt="Creative workflows" className="h-56 w-full transition-transform duration-500 group-hover:scale-110 object-cover" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_1.png?w=800&q=80" />
<button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 backdrop-blur-sm transition-all hover:bg-stone-900/90 hover:scale-110">
<svg className="w-[20px] h-[20px]" data-lucide="play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
</button>
</div>
<div className="p-6">
<div className="mb-4">
<h4 className="text-lg font-semibold text-white font-geist">Video Tutorials</h4>
<p className="text-sm font-medium text-orange-300 font-geist">Master Advanced Techniques</p>
</div>
<p className="mb-6 text-sm leading-relaxed text-stone-300 font-geist">
              Learn from industry professionals with our comprehensive video library covering everything from basic concepts to advanced artistic techniques.
            </p>
<button className="flex items-center gap-2 rounded-full bg-stone-700/60 px-5 py-2.5 text-sm font-medium transition-all hover:bg-stone-600 hover:shadow-lg font-geist">
<i className="h-4 w-4" data-lucide="video"></i>
              Watch Tutorials
            </button>
</div>
</div>

<div className="group overflow-hidden rounded-2xl bg-stone-800/50 ring-1 ring-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:ring-white/20">
<div className="relative overflow-hidden">
<img alt="Community showcase" className="h-56 w-full transition-transform duration-500 group-hover:scale-110 object-cover" src="https://cdn.midjourney.com/75f56835-6654-41e6-8982-4f699e4a413a/0_1.png?w=800&q=80" />
<button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-900/70 backdrop-blur-sm transition-all hover:bg-stone-900/90 hover:scale-110">
<svg className="w-[20px] h-[20px]" data-lucide="star" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<div className="p-6">
<div className="mb-4">
<h4 className="text-lg font-semibold text-white font-geist">Community Hub</h4>
<p className="text-sm font-medium text-orange-300 font-geist">Connect & Share Creations</p>
</div>
<p className="mb-6 text-sm leading-relaxed text-stone-300 font-geist">
              Join thousands of creators in our vibrant community. Share your work, get feedback, and discover inspiring artworks from fellow artists.
            </p>
<button className="flex items-center gap-2 rounded-full bg-stone-700/60 px-5 py-2.5 text-sm font-medium transition-all hover:bg-stone-600 hover:shadow-lg font-geist">
<i className="h-4 w-4" data-lucide="heart"></i>
              Join Community
            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 mt-32 border-t border-white/10 py-12 opacity-0 animate-fade-in" style={{animationDelay: `1s`}}>
<div className="mx-auto max-w-7xl px-4 text-center text-sm text-stone-400 lg:px-8 font-geist">
    © <span id="year"></span> Nexus Studio. All rights reserved.
  </div>
</footer>



    </>
  );
}
