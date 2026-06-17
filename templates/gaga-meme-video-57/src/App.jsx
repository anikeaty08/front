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
      

<header className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
<div className="">
<div className="flex items-center gap-3 mb-2">
<img alt="Gaga Logo" className="w-12 h-12 rounded-xl border border-slate-200 bg-white object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h1 className="text-4xl font-medium tracking-tight text-slate-900">Gaga</h1>
</div>
<p className="text-lg text-slate-500 font-normal max-w-xl">
                A meme-centric video creation community for Gen Z. <br/>
                Empowering social expression through AI-driven remix &amp; cameo tools.
            </p>
</div>
<div className="flex flex-col items-end gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-500 uppercase tracking-wide">Version 1.0 Concept</span>
<span className="text-xs text-slate-400">Designed for iOS &amp; Android</span>
</div>
</header>

<main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

<section className="lg:col-span-3 space-y-8">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Brand Colors</h3>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-yellow-400 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Gaga Yellow</p>
<p className="text-xs text-slate-400">#FACC15</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-slate-900 shadow-sm"></div>
<div>
<p className="text-sm font-medium text-slate-900">Ink Black</p>
<p className="text-xs text-slate-400">#0F172A</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100"></div>
<div>
<p className="text-sm font-medium text-slate-900">Canvas White</p>
<p className="text-xs text-slate-400">#F8FAFC</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Typography</h3>
<div className="space-y-4">
<div>
<p className="text-3xl font-medium tracking-tight text-slate-900">Aa</p>
<p className="text-xs text-slate-400 mt-1">Inter Display</p>
</div>
<div className="border-t border-slate-100 pt-3 space-y-2">
<p className="text-xl tracking-tight font-medium text-slate-900">Heading 1</p>
<p className="text-base font-medium text-slate-900">Subheading</p>
<p className="text-sm text-slate-500 leading-relaxed">Body text is set to be clean, legible, and slightly thinner than standard weights to convey a modern, technical feel.</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-sm font-medium text-slate-400 mb-4 uppercase tracking-wider">Iconography</h3>
<div className="grid grid-cols-4 gap-4 text-slate-700">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<svg className="lucide lucide-ghost w-6 h-6" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
<svg className="lucide lucide-music w-6 h-6" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<svg className="lucide lucide-share-2 w-6 h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<svg className="lucide lucide-heart w-6 h-6" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</section>

<section className="lg:col-span-5 flex justify-center">
<div className="relative w-[340px] h-[720px] bg-slate-900 rounded-[3rem] phone-shadow overflow-hidden border-8 border-slate-900 ring-1 ring-slate-900/10">

<div className="absolute top-0 w-full h-12 z-50 flex justify-between items-end px-6 pb-2 text-white">
<span className="text-xs font-medium">9:41</span>
<div className="flex gap-1.5 items-center">
<svg className="lucide lucide-signal w-3.5 h-3.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-5 h-2.5 rounded-[2px] border border-white/40 relative">
<div className="absolute inset-0.5 bg-white w-3/4"></div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gray-800">

<img alt="Feed Video" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>

<div className="absolute top-14 left-0 w-full px-6 flex justify-between items-center text-white z-40">
<svg className="lucide lucide-search w-6 h-6 opacity-0" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> 
<div className="flex gap-6 text-[15px]">
<span className="font-medium text-white/60">Following</span>
<span className="font-semibold text-white border-b-2 border-yellow-400 pb-1">For You</span>
</div>
<svg className="lucide lucide-search w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>

<div className="absolute right-3 bottom-24 flex flex-col gap-5 items-center z-40">
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-red-500/20 transition-all">
<svg className="lucide lucide-heart w-7 h-7 text-white group-hover:text-red-500 fill-current/0 group-hover:fill-red-500 transition-colors" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<span className="text-xs font-medium text-white">12.5k</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all">
<svg className="lucide lucide-message-circle w-7 h-7 text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<span className="text-xs font-medium text-white">348</span>
</div>

<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="relative p-2.5 bg-gradient-to-tr from-yellow-400 to-yellow-300 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-pulse hover:scale-105 transition-transform">
<svg className="lucide lucide-sparkles w-7 h-7 text-slate-900" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-yellow-300">Remix</span>
</div>
<div className="flex flex-col items-center gap-1 group cursor-pointer">
<div className="p-2.5 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all">
<svg className="lucide lucide-share-2 w-7 h-7 text-white" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<span className="text-xs font-medium text-white">Share</span>
</div>
</div>

<div className="absolute left-4 bottom-24 right-16 z-30">

<div className="flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-sm w-fit px-2 py-1 rounded-lg">
<svg className="lucide lucide-git-branch w-3 h-3 text-yellow-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
<span className="text-[10px] text-white/90">Remixed from <span className="font-medium text-white">@ducklord</span></span>
</div>
<div className="flex items-center gap-2 mb-2">
<h2 className="text-base font-medium text-white shadow-sm">@meme_creator</h2>
<button className="bg-yellow-400 text-black text-[10px] font-semibold px-2 py-0.5 rounded-md">Follow</button>
</div>
<p className="text-sm text-white/90 leading-snug font-normal line-clamp-2">
                            When the AI generates a better dance than me 🦆💀 Try this template! <span className="text-yellow-400">#gaga #ai #dance</span>
</p>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 bg-black/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-2 z-50">
<button className="flex flex-col items-center gap-1 w-12 text-yellow-400">
<svg className="lucide lucide-house w-6 h-6 stroke-[2]" data-lucide="house" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[9px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 w-12 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-compass w-6 h-6" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[9px] font-medium">Discover</span>
</button>

<button className="w-12 h-8 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<svg className="lucide lucide-plus w-6 h-6 text-slate-900 stroke-[2.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<button className="flex flex-col items-center gap-1 w-12 text-slate-400 hover:text-white transition-colors relative">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="absolute top-0 right-2 w-2 h-2 bg-red-500 rounded-full border border-black"></div>
<span className="text-[9px] font-medium">Friends</span>
</button>
<button className="flex flex-col items-center gap-1 w-12 text-slate-400 hover:text-white transition-colors">
<svg className="lucide lucide-user w-6 h-6" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[9px] font-medium">Me</span>
</button>
</div>

<div className="absolute bottom-1 w-full flex justify-center z-50">
<div className="w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</section>

<section className="lg:col-span-4 flex flex-col gap-8">

<div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative">
<div className="p-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<span className="text-sm font-medium text-slate-900">Create Video</span>
<svg className="lucide lucide-x w-5 h-5 text-slate-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="p-6 space-y-6">

<div className="flex gap-3">
<button className="flex-1 py-2 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 transition">Ratio: 9:16</button>
<button className="flex-1 py-2 rounded-lg bg-slate-100 text-xs font-medium text-slate-600 hover:bg-slate-200 transition">Duration: 10s</button>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Cast Characters</span>
<span className="text-xs text-yellow-600 cursor-pointer">View All</span>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">

<div className="flex-shrink-0 w-12 h-12 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-slate-400 cursor-pointer hover:border-yellow-400 hover:text-yellow-400 transition-colors bg-slate-50">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>

<div className="relative flex-shrink-0 cursor-pointer group">
<img className="w-12 h-12 rounded-full border-2 border-yellow-400 object-cover bg-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute -bottom-1 -right-1 bg-yellow-400 text-[8px] font-bold px-1 rounded-md border border-white">Gaga</span>
</div>

<div className="flex-shrink-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-xl">🐸</div>
</div>

<div className="flex-shrink-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity">
<div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-xl">🐼</div>
</div>
</div>
</div>

<div className="relative">
<textarea className="w-full h-32 p-4 bg-slate-50 rounded-2xl border border-slate-200 resize-none text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400 placeholder-slate-400 transition-all" placeholder="Describe your meme or type @ to add a character..."></textarea>
<div className="absolute bottom-3 left-3 flex gap-2">
<button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors tooltip" title="Upload Image">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors">
<svg className="lucide lucide-mic w-4 h-4" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
</div>
</div>

<button className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium shadow-lg shadow-slate-200 transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-wand-2 w-4 h-4 text-yellow-400" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
<span>Generate Video</span>
</button>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 flex flex-col gap-5">
<div className="flex justify-between items-start">
<div className="flex gap-4">
<div className="relative">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-white shadow-sm">
                                M
                            </div>
<div className="absolute bottom-0 right-0 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
<svg className="lucide lucide-star w-3 h-3 text-black fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="flex flex-col pt-1">
<h3 className="text-lg font-medium text-slate-900">MemeKing_01</h3>
<div className="flex gap-4 mt-1 text-xs text-slate-500">
<span> Works</span>
<span> Followers</span>
</div>
</div>
</div>
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50">
<svg className="lucide lucide-settings-2 w-4 h-4 text-slate-600" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</button>
</div>

<div className="flex border-b border-slate-100">
<button className="flex-1 pb-3 text-sm font-medium text-slate-900 border-b-2 border-yellow-400">Works</button>
<button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-slate-600">Drafts <span className="ml-1 text-[10px] bg-slate-100 px-1.5 py-0.5 rounded-full">2</span></button>
<button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-slate-600">Likes</button>
</div>

<div className="grid grid-cols-3 gap-2">
<div className="aspect-[3/4] bg-slate-100 rounded-lg relative overflow-hidden group cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute bottom-1 right-1 flex items-center gap-0.5 text-white drop-shadow-md">
<svg className="lucide lucide-play w-3 h-3 fill-current" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="text-[10px] font-medium">12k</span>
</div>
</div>
<div className="aspect-[3/4] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
<div className="text-center">
<span className="text-2xl">🦆</span>
</div>
</div>
<div className="aspect-[3/4] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200">
<div className="text-center">
<span className="text-2xl">😼</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 text-center">
<p className="text-xs text-slate-400">
            Concept Design for Gaga App © 2025. All icons by Lucide.
        </p>
</footer>


    </>
  );
}
