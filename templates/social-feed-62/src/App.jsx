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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="max-w-[120rem] mr-auto ml-auto pr-4 pl-4 fixed top-0 left0 right-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200/70">
<div className="flex h-14 items-center justify-between">

<div className="flex items-center gap-3 lg:hidden">
<div className="size-8 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-white grid place-items-center">
<span className="text-sm tracking-tight font-semibold">m</span>
</div>
<span className="text-[15px] font-medium tracking-tight text-slate-700">Memr</span>
</div>
<div className="hidden lg:flex items-center gap-10">
<div className="flex items-center gap-3">
<div className="size-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 text-white grid place-items-center shadow-sm">
<span className="text-sm tracking-tight font-semibold">m</span>
</div>
<div className="h-6 w-px bg-slate-200"></div>
</div>
</div>

<div className="flex-1 flex justify-center px-3">
<div className="relative w-full max-w-xl">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<svg className="lucide lucide-search size-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-10 py-2.5 text-[14px] placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300" placeholder="Search" type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg bg-slate-900 text-white px-3.5 py-1.5 text-[12px] font-medium hover:bg-slate-900/90">
                Go
              </button>
</div>
</div>

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<button className="rounded-lg p-2 hover:bg-slate-100">
<svg className="lucide lucide-bell size-5 text-slate-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="rounded-lg p-2 hover:bg-slate-100">
<svg className="lucide lucide-plus-square size-5 text-slate-600" data-lucide="plus-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="h-7 w-px bg-slate-200 mx-1"></div>
<button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2 py-1.5 hover:bg-slate-50">
<img alt="avatar" className="size-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="hidden md:inline text-[13px] font-medium">You</span>
</button>
</div>
</div>
</div>
</header>
<main className="xl:pl-40 xl:pr-40 xl:pt-4 xl:pb-4 max-w-[120rem] mr-auto ml-auto pt-6 pr-4 pb-6 pl-4">
<div className="grid grid-cols-12 gap-x-20 gap-y-6 xl:gap-x-6">

<aside className="col-span-2 hidden lg:block">
<div className="sticky top-[5.25rem]">
<div className="space-y-3">
<a className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 hover:border-slate-300" href="#">
<svg className="lucide lucide-home size-5 text-slate-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[14px] font-medium">Feed</span>
</a>
<a className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 hover:border-slate-300" href="#">
<svg className="lucide lucide-film size-5 text-slate-600" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
<span className="text-[14px] font-medium">Reel</span>
</a>
<a className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 hover:border-slate-300" href="#">
<svg className="lucide lucide-users size-5 text-slate-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[14px] font-medium">Groups</span>
</a>
<a className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 hover:border-slate-300" href="#">
<svg className="lucide lucide-wallet size-5 text-slate-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="text-[14px] font-medium">Wallet</span>
</a>
<a className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 hover:border-slate-300" href="#">
<svg className="lucide lucide-layout-dashboard size-5 text-slate-600" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-[14px] font-medium">Template</span>
</a>
</div>
</div>
</aside>

<section className="col-span-12 lg:col-span-7">

<div aria-hidden="true" className="bg-white border-slate-200 border rounded-2xl mb-4 pt-4 pr-4 pb-4 pl-4 hidden"></div>

<div className="overflow-x-auto [&amp;::-webkit-scrollbar]:w-0 [&amp;::-webkit-scrollbar]:h-0 [&amp;::-webkit-scrollbar-thumb]:w-0 [&amp;::-webkit-scrollbar-thumb]:h-0 xl:mt-14 mt-14 mb-4 pt-4 pr-4 pb-4 pl-4" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch', overscrollBehaviorX: 'contain'}}>
<div className="flex w-max gap-x-3 gap-y-3 items-center">
<button className="flex-shrink-0 rounded-full bg-slate-900 text-white px-3.5 py-1.5 text-[13px] font-medium tracking-tight hover:bg-slate-900/90 focus:outline-none focus:ring-4 focus:ring-slate-100 focus:border-slate-300">For you</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Following</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Design</button>
<button className="flex-shrink-0 text-[13px] hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100 font-medium text-slate-700 bg-white border-slate-200 border rounded-full pt-1.5 pr-3.5 pb-1.5 pl-3.5">Development</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">AI</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Photography</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Travel</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Music</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Gaming</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">Sports</button>
<button className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100">News</button>
<div className="ml-auto flex items-center gap-2">
<button className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 hover:bg-slate-50">
<svg className="lucide lucide-flame" data-lucide="flame" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
<span>Hot</span>
<svg className="lucide lucide-chevron-down text-slate-500" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</div>

<article className="bg-white border-slate-200 border rounded-2xl mb-4">
<header className="flex items-start justify-between p-4">
<div className="flex items-center gap-3">
<img alt="user" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-[15px] font-semibold tracking-tight">Xyz adx</h3>
<span className="text-[11px] rounded-full bg-orange-500/10 text-orange-600 px-2 py-0.5 font-medium">Follow</span>
</div>
<p className="text-[12px] text-slate-500">@memr • 2h</p>
</div>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-more-horizontal size-5 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="px-4 pb-4">
<p className="text-[14px] leading-6 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.
              </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[12px] text-slate-500">#adkj</span>
<span className="text-[12px] text-slate-500">#lksd</span>
<span className="text-[12px] text-slate-500">#lincs</span>
</div>
</div>
<div className="mx-4 overflow-hidden rounded-xl border border-slate-200">
<img alt="post image" className="w-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<footer className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-up size-4 text-slate-600" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg><span className="text-[12px] text-slate-600">538</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-down size-4 text-slate-600" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg><span className="text-[12px] text-slate-600">10</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-message-circle size-4 text-slate-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span className="text-[12px] text-slate-600">36</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-share-2 size-4 text-slate-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span className="text-[12px] text-slate-600">9</span>
</button>
</div>
<div className="flex items-center gap-3 pr-1">
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-eye size-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[12px]">29.4k</span>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-bookmark size-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</footer>
</article>

<article className="mb-4 rounded-2xl border border-slate-200 bg-white">
<header className="flex items-start justify-between p-4">
<div className="flex items-center gap-3">
<img alt="user" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-[15px] font-semibold tracking-tight">hasd asd</h3>
<span className="text-[11px] rounded-full bg-orange-500/10 text-orange-600 px-2 py-0.5 font-medium">Follow</span>
</div>
<p className="text-[12px] text-slate-500">@memr • 4h</p>
</div>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-more-horizontal size-5 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="px-4 pb-4">
<p className="text-[14px] leading-6 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[12px] text-slate-500">#adkj</span>
<span className="text-[12px] text-slate-500">#lksd</span>
<span className="text-[12px] text-slate-500">#lincs</span>
</div>
</div>
<div className="mx-4 overflow-hidden rounded-xl border border-slate-200">
<img alt="post image" className="w-full object-cover" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<footer className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-up size-4 text-slate-600" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg><span className="text-[12px] text-slate-600">142</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-down size-4 text-slate-600" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg><span className="text-[12px] text-slate-600">3</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-message-circle size-4 text-slate-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span className="text-[12px] text-slate-600">20</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-share-2 size-4 text-slate-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span className="text-[12px] text-slate-600">4</span>
</button>
</div>
<div className="flex items-center gap-3 pr-1">
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-eye size-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[12px]">9.8k</span>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-bookmark size-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</footer>
</article>

<article className="mb-4 rounded-2xl border border-slate-200 bg-white">
<header className="flex items-start justify-between p-4">
<div className="flex items-center gap-3">
<img alt="user" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-[15px] font-semibold tracking-tight">jhvads asdj</h3>
<span className="text-[11px] rounded-full bg-orange-500/10 text-orange-600 px-2 py-0.5 font-medium">Follow</span>
</div>
<p className="text-[12px] text-slate-500">@memr • 6h</p>
</div>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-more-horizontal size-5 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="px-4 pb-4">
<p className="text-[14px] leading-6 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.
              </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[12px] text-slate-500">#adkj</span>
<span className="text-[12px] text-slate-500">#lksd</span>
<span className="text-[12px] text-slate-500">#lincs</span>
</div>
</div>
<div className="mx-4 overflow-hidden rounded-xl border border-slate-200">
<div className="relative aspect-[4/5] w-full bg-slate-950">
<img alt="video cover" className="opacity-70 w-full h-full object-cover absolute inset-0" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>

<div className="absolute top-2 right-2 rounded-md bg-black/70 px-2 py-0.5 text-[12px] text-white">12:45</div>
<button className="-translate-x-1/2 -translate-y-1/2 hover:bg-white bg-white/90 ring-slate-200 ring-1 rounded-full p-4 absolute top-1/2 left-1/2 shadow-lg">
<svg className="lucide lucide-play text-slate-900" data-lucide="play" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
<footer className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-up size-4 text-slate-600" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg><span className="text-[12px] text-slate-600">65</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-down size-4 text-slate-600" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg><span className="text-[12px] text-slate-600">1</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-message-circle size-4 text-slate-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span className="text-[12px] text-slate-600">18</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-share-2 size-4 text-slate-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span className="text-[12px] text-slate-600">3</span>
</button>
</div>
<div className="flex items-center gap-3 pr-1">
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-eye size-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[12px]">5.1k</span>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-bookmark size-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</footer>
</article>

<article className="mb-4 rounded-2xl border border-slate-200 bg-white">
<header className="flex items-start justify-between p-4">
<div className="flex items-center gap-3">
<img alt="user" className="size-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2">
<h3 className="text-[15px] font-semibold tracking-tight">sfas asf</h3>
<span className="text-[11px] rounded-full bg-orange-500/10 text-orange-600 px-2 py-0.5 font-medium">Follow</span>
</div>
<p className="text-[12px] text-slate-500">@memr • 1d</p>
</div>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-more-horizontal size-5 text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</header>
<div className="px-4 pb-4">
<p className="text-[14px] leading-6 text-slate-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu.
              </p>
<div className="mt-2 flex flex-wrap gap-2">
<span className="text-[12px] text-slate-500">#adkj</span>
<span className="text-[12px] text-slate-500">#lksd</span>
<span className="text-[12px] text-slate-500">#lincs</span>
</div>
</div>
<div className="mx-4 overflow-hidden rounded-xl border border-slate-200">
<img alt="post image" className="w-full object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<footer className="flex items-center justify-between px-3 py-2">
<div className="flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-up size-4 text-slate-600" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg><span className="text-[12px] text-slate-600">980</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-thumbs-down size-4 text-slate-600" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 14V2"></path><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path></svg><span className="text-[12px] text-slate-600">21</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-message-circle size-4 text-slate-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg><span className="text-[12px] text-slate-600">102</span>
</button>
<button className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 hover:bg-slate-100">
<svg className="lucide lucide-share-2 size-4 text-slate-600" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span className="text-[12px] text-slate-600">24</span>
</button>
</div>
<div className="flex items-center gap-3 pr-1">
<div className="flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-eye size-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[12px]">120k</span>
</div>
<button className="rounded-lg p-1.5 hover:bg-slate-100">
<svg className="lucide lucide-bookmark size-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</footer>
</article>
</section>

<aside className="col-span-3 hidden xl:block">
<div className="sticky top-[5.25rem] space-y-4">

<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="mb-2 flex items-center justify-between">
<h2 className="text-[18px] font-semibold tracking-tight">Popular groups</h2>
<button className="text-[12px] text-slate-600 hover:text-slate-900">See more</button>
</div>
<div className="divide-y divide-slate-200">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="group" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-[14px] font-medium">oddodsa asd</p>
<p className="text-[12px] text-slate-500">12.4k members</p>
</div>
</div>
<button className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-medium hover:bg-slate-50">Join</button>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="group" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[14px] font-medium">clkdosd ede</p>
<p className="text-[12px] text-slate-500">8.1k members</p>
</div>
</div>
<button className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-medium hover:bg-slate-50">Join</button>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<img alt="group" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[14px] font-medium">clodosd erwe</p>
<p className="text-[12px] text-slate-500">5.9k members</p>
</div>
</div>
<button className="rounded-full border border-slate-200 px-3 py-1.5 text-[12px] font-medium hover:bg-slate-50">Join</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="mb-2 flex items-center justify-between">
<h2 className="text-[18px] font-semibold tracking-tight">Members you might like</h2>
<button className="text-[12px] text-slate-600 hover:text-slate-900">See more</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="member" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-[14px] font-medium">Full name</p>
<p className="text-[12px] text-slate-500">@username</p>
</div>
</div>
<button className="rounded-full bg-slate-900 text-white px-3 py-1.5 text-[12px] font-medium hover:bg-slate-900/90">Follow</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="member" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-[14px] font-medium">Full name</p>
<p className="text-[12px] text-slate-500">@username</p>
</div>
</div>
<button className="rounded-full bg-slate-900 text-white px-3 py-1.5 text-[12px] font-medium hover:bg-slate-900/90">Follow</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="member" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-[14px] font-medium">Full name</p>
<p className="text-[12px] text-slate-500">@username</p>
</div>
</div>
<button className="rounded-full bg-slate-900 text-white px-3 py-1.5 text-[12px] font-medium hover:bg-slate-900/90">Follow</button>
</div>
</div>
<div className="mt-4 text-[12px] text-slate-500">
<div className="flex flex-wrap gap-x-3 gap-y-1">
<a className="hover:text-slate-700" href="#">Report &amp; safety</a>
<span>•</span>
<a className="hover:text-slate-700" href="#">Privacy</a>
<span>•</span>
<a className="hover:text-slate-700" href="#">Terms of use</a>
<span>•</span>
<a className="hover:text-slate-700" href="#">Contact us</a>
</div>
</div>
</div>


</div>
</aside>
</div>
</main>

<nav className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur lg:hidden">
<div className="mx-auto max-w-[120rem] px-6">
<div className="grid grid-cols-5">
<button className="flex flex-col items-center gap-1 py-2.5 text-slate-700 hover:text-slate-900">
<svg className="lucide lucide-home" data-lucide="home" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[11px]">Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-2.5 text-slate-700 hover:text-slate-900">
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[11px]">Search</span>
</button>
<button className="flex flex-col items-center gap-1 py-2.5 text-slate-700 hover:text-slate-900">
<svg className="lucide lucide-plus-circle" data-lucide="plus-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
<span className="text-[11px]">Create</span>
</button>
<button className="flex flex-col items-center gap-1 py-2.5 text-slate-700 hover:text-slate-900">
<svg className="lucide lucide-play-square" data-lucide="play-square" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path></svg>
<span className="text-[11px]">Reels</span>
</button>
<button className="flex flex-col items-center gap-1 py-2.5 text-slate-700 hover:text-slate-900">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[11px]">Profile</span>
</button>
</div>
</div>
</nav>




    </>
  );
}
