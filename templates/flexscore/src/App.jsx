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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // Simple filter chip active state
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const group = btn.parentElement.querySelectorAll('.filter-btn');
            group.forEach(b => {
              b.classList.remove('active');
              b.classList.remove('bg-gradient-to-br','from-indigo-500/20','to-violet-500/20','text-indigo-200','ring-indigo-400/30');
              b.classList.add('bg-white/5','text-white/80','ring-white/10');
            });
            btn.classList.add('active');
            btn.classList.remove('bg-white/5','text-white/80','ring-white/10');
            btn.classList.add('bg-gradient-to-br','from-indigo-500/20','to-violet-500/20','text-indigo-200','ring-indigo-400/30');
          });
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
      <div className="fixed -z-10 bg-center w-full h-screen bg-cover top-0" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a1f43713-97b5-42cd-b934-83d43014acf1_3840w.webp")'}}></div>

<div className="min-h-screen overflow-hidden bg-gradient-to-b to-slate-900 from-slate-500/10 via-slate-500/10 relative">
<div className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full blur-3xl bg-slate-400/20" style={{}}></div>
<div className="pointer-events-none absolute -bottom-40 -right-40 h-[36rem] w-[36rem] rounded-full blur-3xl bg-slate-500/20" style={{}}></div>
<main className="xl:pt-24 w-full h-full max-w-7xl max-h-none mt-auto mr-auto mb-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 gap-x-6 gap-y-6">

<section className="shadow-slate-500/10 bg-slate-950/60 border-white/10 border rounded-[2rem] shadow-2xl backdrop-blur">
<div className="sm:p-6 pt-5 pr-5 pb-5 pl-5 space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-[22px] tracking-tight font-semibold">Discover</h2>
</div>
<button className="hover:bg-white/10 transition bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-more-horizontal h-5 w-5 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="no-scrollbar flex gap-3 overflow-x-auto pt-1 pb-1 pl-1 gap-x-3 gap-y-3">
<button className="shrink-0 rounded-full bg-gradient-to-br px-4 py-2 text-sm font-medium ring-1 transition from-slate-500/20 text-slate-300 ring-slate-400/20 hover:ring-slate-400/30 to-slate-500/20" style={{}}>Top</button>
<button className="shrink-0 hover:bg-white/10 transition text-sm text-white/80 bg-white/5 rounded-full ring-white/10 ring-1 pt-2 pr-4 pb-2 pl-4" style={{}}>EuroLiga</button>
<button className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>ProGrid</button>
<button className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>HoopOne</button>
<button className="shrink-0 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>IceLeague</button>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5">
<div className="flex items-center justify-between">
<span className="text-xs text-white/60">Fri • 10:00 pm</span>
<div className="flex items-center gap-2 text-white/60">
<i className="h-4 w-4" data-lucide="broadcast"></i>
<span className="text-xs">Live preview</span>
</div>
</div>
<div className="mt-4 grid grid-cols-3 items-center gap-4">
<div className="flex flex-col items-center">
<div className="flex w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c8798c73-b4a9-4c0c-b924-98d573f87329_320w.webp)] bg-cover ring-slate-300/30 ring-1 rounded-full items-center justify-center" style={{}}>
</div>
<span className="mt-2 text-sm text-white/80" style={{}}>Apex</span>
</div>
<div className="text-center">
<div className="text-sm text-white/60">Vs</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">0 - 0</div>
<div className="mt-1 text-[10px] text-white/50">Predicted</div>
</div>
<div className="flex flex-col items-center">
<div className="flex w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/53ceb92c-fb1a-442c-9718-ff452bc70871_320w.webp)] bg-cover rounded-full ring-slate-300/30 ring-1 items-center justify-center" style={{}}>
</div>
<span className="mt-2 text-sm text-white/80" style={{}}>Orion</span>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1"><svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg><span className="">4.2K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg><span className="">68</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-heart h-4 w-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg><span className="">112</span></div>
</div>
<button className="rounded-lg px-3 py-2 text-sm font-medium ring-1 transition bg-slate-500/20 text-slate-200 ring-slate-400/30 hover:bg-slate-500/25" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span className="">Preview</span>
</div>
</button>
</div>
</div>

<article className="rounded-2xl border border-white/10 bg-white/5">
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33c42d62-ab0d-457e-8726-b928962dede2_320w.webp)] bg-cover rounded-full ring-white/10 ring-1" style={{}}></div>
<div className="flex flex-col">
<span className="text-sm font-medium">PulseWire</span>
<span className="text-[10px] text-white/50">18h ago</span>
</div>
</div>
<button className="rounded-full p-1.5 hover:bg-white/10 transition">
<svg className="lucide lucide-more-horizontal h-4 w-4 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="px-4 pb-4">
<p className="text-[15px] text-white/80" style={{}}>Apex confirms late roster addition ahead of weekend fixtures. Analysts expect a tighter midfield and faster breakouts.</p>
</div>
<div className="overflow-hidden rounded-b-2xl">
<img alt="Team update" className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e9a3233f-05ee-4e21-9f4c-39326154c905_800w.webp"/>
</div>
<div className="flex items-center justify-between px-4 py-3 text-xs text-white/60">
<div className="flex items-center gap-4">
<div className="flex items-center gap-1"><svg className="lucide lucide-thumbs-up h-4 w-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg><span>1.1K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-share-2 h-4 w-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg><span className="">123</span></div>
</div>
<button className="rounded-lg bg-white/5 px-3 py-1.5 hover:bg-white/10 transition">Read</button>
</div>
</article>

<nav className="sticky -mx-4 -mb-4 bg-slate-950/60 border-white/10 rounded-3xl border-t mt-2 pt-3 pr-4 pb-3 pl-4 bottom-0 backdrop-blur" style={{}}>
<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center gap-1 rounded-xl bg-white/10 px-3 py-2">
<svg className="lucide lucide-home h-5 w-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="text-[11px]">Home</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-trophy h-5 w-5 text-white/80" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg><span className="text-[11px] text-white/80" style={{}}>Fantasy</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-white/80" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg><span className="text-[11px] text-white/80" style={{}}>Scores</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-user h-5 w-5 text-white/80" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="text-[11px] text-white/80" style={{}}>Profile</span>
</button>
</div>
</nav>
</div>
</section>

<section className="rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur shadow-slate-500/10" style={{}}>
<div className="space-y-6 p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-[22px] tracking-tight font-semibold">FantasyX</h2>
</div>
<button className="hover:bg-white/10 transition bg-white/5 rounded-full pt-2 pr-2 pb-2 pl-2">
<svg className="lucide lucide-more-horizontal h-5 w-5 text-white/80" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f7a78f35-2d5c-490a-bef7-e0150073bc52_800w.webp)] bg-cover border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-xl tracking-tight font-semibold">Premier Fantasy Cup</h3>
<p className="mt-1 text-sm text-white/80" style={{}}>Draft now. Claim bonus packs and climb the leaderboard.</p>
<div className="mt-4 flex gap-2">
<button className="rounded-lg bg-white/90 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-white" style={{}}>Play now</button>
<button className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/80 hover:bg-white/15" style={{}}>Details</button>
</div>
</div>
<img alt="Trophy" className="hidden sm:block mix-blend-screen w-40 h-28 object-cover rounded-xl ring-white/20 ring-1" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0b06628e-dbbd-4586-b021-0994159e045d_320w.webp"/>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-slate-400/15 ring-slate-400/30" style={{}}>
<svg className="lucide lucide-check-square h-5 w-5 text-slate-300" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="">
<div className="text-[15px] font-medium">Prime League Pick’em</div>
<div className="text-xs text-white/60">Make 5 picks • Streak mode</div>
</div>
</div>
<button className="rounded-lg px-3 py-2 text-sm font-medium ring-1 bg-slate-500/20 text-slate-200 ring-slate-400/30 hover:bg-slate-500/25" style={{}}>Play</button>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-slate-400/15 ring-slate-400/30" style={{}}>
<svg className="lucide lucide-layers h-5 w-5 text-slate-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div className="">
<div className="text-[15px] font-medium">HoopOne Draft</div>
<div className="text-xs text-white/60">8-round snake • Live rooms</div>
</div>
</div>
<button className="rounded-lg px-3 py-2 text-sm font-medium ring-1 bg-slate-500/20 text-slate-200 ring-slate-400/30 hover:bg-slate-500/25" style={{}}>Join</button>
</div>
<div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-xl ring-1 bg-slate-400/15 ring-slate-400/30" style={{}}>
<svg className="lucide lucide-bar-chart-2 h-5 w-5 text-slate-300" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="">
<div className="text-[15px] font-medium">ProGrid Showdown</div>
<div className="text-xs text-white/60">Single-game • Captain boost</div>
</div>
</div>
<button className="rounded-lg px-3 py-2 text-sm font-medium ring-1 bg-slate-500/20 text-slate-200 ring-slate-400/30 hover:bg-slate-500/25" style={{}}>Enter</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity h-4 w-4 text-white/80" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-sm font-medium">Live lobby</span>
</div>
<button className="rounded-lg bg-white/10 px-2.5 py-1.5 text-xs text-white/80 hover:bg-white/15" style={{}}>View all</button>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between rounded-xl bg-slate-900/50 p-3" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/53ceb92c-fb1a-442c-9718-ff452bc70871_320w.webp)] bg-cover ring-white/10 ring-1 rounded-full" style={{}}></div>
<div className="text-sm">
<div className="font-medium">Sprint Contest #214</div>
<div className="text-[11px] text-white/60">1m ago • 245 joined</div>
</div>
</div>
<span className="rounded bg-white/10 px-2 py-1 text-[11px] text-white/80" style={{}}>$10 Entry</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-slate-900/50 p-3" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0fda787-91bb-4419-b448-4a2141f25e2a_320w.webp)] bg-cover rounded-full ring-white/10 ring-1" style={{}}></div>
<div className="text-sm">
<div className="font-medium">Mega Pool • Night Slate</div>
<div className="text-[11px] text-white/60">3m ago • 1,102 joined</div>
</div>
</div>
<span className="rounded bg-white/10 px-2 py-1 text-[11px] text-white/80" style={{}}>$25 Entry</span>
</div>
</div>
</div>

<nav className="sticky -mx-4 -mb-4 bg-slate-950/60 border-white/10 rounded-3xl border-t mt-2 pt-3 pr-4 pb-3 pl-4 bottom-0 backdrop-blur" style={{}}>
<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-home h-5 w-5 text-white/80" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="text-[11px] text-white/80" style={{}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl bg-white/10 px-3 py-2">
<svg className="lucide lucide-trophy h-5 w-5" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg><span className="text-[11px]">Fantasy</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-bar-chart-3 h-5 w-5 text-white/80" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg><span className="text-[11px] text-white/80" style={{}}>Scores</span>
</button>
<button className="flex flex-col gap-1 hover:bg-white/10 transition rounded-xl px-3 py-2 gap-x-1 gap-y-1 items-center">
<svg className="lucide lucide-user h-5 w-5 text-white/80" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="text-[11px] text-white/80" style={{}}>Profile</span>
</button>
</div>
</nav>
</div>
</section>

<section className="shadow-slate-500/10 bg-slate-950/60 border-white/10 border rounded-[2rem] shadow-2xl backdrop-blur" style={{}}>
<div className="space-y-6 p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-[22px] tracking-tight font-semibold">Scores</h2>
</div>
<div className="flex items-center gap-2">
<button className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition"><svg className="lucide lucide-search h-5 w-5 text-white/80" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></button>
<button className="rounded-full bg-white/5 p-2 hover:bg-white/10 transition"><svg className="lucide lucide-sliders-horizontal h-5 w-5 text-white/80" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg></button>
</div>
</div>

<div className="no-scrollbar flex overflow-x-auto xl:pt-1 xl:pl-1 pt-1 pb-1 pl-1 gap-x-2 gap-y-2">
<button className="filter-btn active shrink-0 rounded-full bg-gradient-to-br px-3 py-1.5 text-xs font-medium ring-1 from-slate-500/20 text-slate-200 ring-slate-400/30 to-slate-500/20" style={{}}>Top</button>
<button className="filter-btn shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>ProGrid</button>
<button className="filter-btn shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>EuroLiga</button>
<button className="filter-btn shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>HoopOne</button>
<button className="filter-btn shrink-0 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/80 ring-1 ring-white/10 hover:bg-white/10 transition" style={{}}>IceLeague</button>
</div>

<div className="space-y-4">

<div className="bg-gradient-to-b from-white/5 to-transparent border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between text-xs text-white/60">
<span className="">Sat • 5:00 am</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-satellite h-4 w-4" data-lucide="satellite" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.5 6.5-3.148-3.148a1.205 1.205 0 0 0-1.704 0L6.352 5.648a1.205 1.205 0 0 0 0 1.704L9.5 10.5"></path><path d="M16.5 7.5 19 5"></path><path d="m17.5 10.5 3.148 3.148a1.205 1.205 0 0 1 0 1.704l-2.296 2.296a1.205 1.205 0 0 1-1.704 0L13.5 14.5"></path><path d="M9 21a6 6 0 0 0-6-6"></path><path d="M9.352 10.648a1.205 1.205 0 0 0 0 1.704l2.296 2.296a1.205 1.205 0 0 0 1.704 0l4.296-4.296a1.205 1.205 0 0 0 0-1.704l-2.296-2.296a1.205 1.205 0 0 0-1.704 0z"></path></svg> Intl</span>
</div>
<div className="mt-3 grid grid-cols-3 items-center">
<div className="flex items-center gap-3">
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/02bd1baf-39b1-4b81-938a-210700ef00c9_320w.webp)] bg-cover rounded-full ring-slate-400/30 ring-1 items-center justify-center">
</div>
<div className="text-sm">
<div className="font-medium">Nova</div>
<div className="text-[10px] text-white/60">Away</div>
</div>
</div>
<div className="text-center text-xl tracking-tight font-semibold">1 - 1</div>
<div className="flex items-center justify-end gap-3">
<div className="text-right text-sm">
<div className="font-medium">Metro</div>
<div className="text-[10px] text-white/60">Home</div>
</div>
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/adf333d6-7074-49d2-8f95-8576241d7cb3_320w.webp)] bg-cover ring-slate-400/30 ring-1 rounded-full items-center justify-center">
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1"><svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> <span className="">5.0K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> <span className="">55</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="">xG 1.2 - 0.9</span></div>
</div>
</div>

<div className="bg-gradient-to-b from-white/5 to-transparent border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between text-xs text-white/60">
<span className="">Sat • 8:00 pm</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg> National</span>
</div>
<div className="mt-3 grid grid-cols-3 items-center">
<div className="flex items-center gap-3">
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/adf333d6-7074-49d2-8f95-8576241d7cb3_320w.webp)] bg-cover ring-slate-400/30 ring-1 rounded-full items-center justify-center">
</div>
<div className="text-sm">
<div className="font-medium">Comets</div>
<div className="text-[10px] text-white/60">Away</div>
</div>
</div>
<div className="text-center text-xl tracking-tight font-semibold">0 - 1</div>
<div className="flex items-center justify-end gap-3">
<div className="text-right text-sm">
<div className="font-medium">Falx</div>
<div className="text-[10px] text-white/60">Home</div>
</div>
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1b195ac7-3904-47a7-89da-2845ba98b9d8_320w.webp)] bg-cover ring-slate-400/30 ring-1 rounded-full items-center justify-center">
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1"><svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> <span className="">3.3K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> <span className="">35</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="">xG 0.7 - 1.4</span></div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
<div className="flex items-center justify-between text-xs text-white/60">
<span className="">Sat • 11:00 pm</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> City Arena</span>
</div>
<div className="mt-3 grid grid-cols-3 items-center">
<div className="flex items-center gap-3">
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/da012a7f-8683-49b8-95ee-d5378991b6bb_320w.webp)] bg-cover ring-slate-400/30 ring-1 rounded-full items-center justify-center">
</div>
<div className="text-sm">
<div className="font-medium">Drakes</div>
<div className="text-[10px] text-white/60">Away</div>
</div>
</div>
<div className="text-center text-xl tracking-tight font-semibold">1 - 1</div>
<div className="flex items-center justify-end gap-3">
<div className="text-right text-sm">
<div className="font-medium">Coltside</div>
<div className="text-[10px] text-white/60">Home</div>
</div>
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c4bd618-3688-46c0-9a0a-65aea3460700_320w.webp)] bg-cover ring-slate-400/30 ring-1 rounded-full items-center justify-center">
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1"><svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> <span className="">2.9K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> <span>29</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="">xG 1.0 - 1.1</span></div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-4">
<div className="flex items-center justify-between text-xs text-white/60">
<span className="">Sun • 2:30 am</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-globe-2 h-4 w-4" data-lucide="globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg> National</span>
</div>
<div className="mt-3 grid grid-cols-3 items-center">
<div className="flex items-center gap-3">
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/41a16bdb-55ea-443c-94b8-1b49eef138aa_320w.webp)] bg-cover rounded-full ring-slate-400/30 ring-1 items-center justify-center">
</div>
<div className="text-sm">
<div className="font-medium">Orion</div>
<div className="text-[10px] text-white/60">Away</div>
</div>
</div>
<div className="text-center text-xl tracking-tight font-semibold">2 - 0</div>
<div className="flex items-center justify-end gap-3">
<div className="text-right text-sm">
<div className="font-medium">Apex</div>
<div className="text-[10px] text-white/60">Home</div>
</div>
<div className="flex bg-slate-400/15 w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f5af7f50-7eca-495e-90ce-70b0013a24f5_320w.webp)] bg-cover rounded-full ring-slate-400/30 ring-1 items-center justify-center">
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1"><svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg> <span>4.8K</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg> <span>42</span></div>
<div className="flex items-center gap-1"><svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="">xG 1.8 - 0.5</span></div>
</div>
</div>

</div>

<nav className="sticky -mx-4 -mb-4 bg-slate-950/60 border-white/10 rounded-3xl border-t mt-2 pt-3 pr-4 pb-3 pl-4 bottom-0 backdrop-blur" style={{}}>
<div className="grid grid-cols-4 gap-2">
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-home h-5 w-5 text-white/80" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg><span className="text-[11px] text-white/80" style={{}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl px-3 py-2 hover:bg-white/10 transition">
<svg className="lucide lucide-trophy h-5 w-5 text-white/80" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg><span className="text-[11px] text-white/80" style={{}}>Fantasy</span>
</button>
<button className="flex flex-col items-center gap-1 rounded-xl bg-white/10 px-3 py-2">
<svg className="lucide lucide-bar-chart-3 h-5 w-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg><span className="text-[11px]">Scores</span>
</button>
<button className="flex flex-col gap-1 hover:bg-white/10 transition rounded-xl px-3 py-2 gap-x-1 gap-y-1 items-center">
<svg className="lucide lucide-user h-5 w-5 text-white/80" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><span className="text-[11px] text-white/80" style={{}}>Profile</span>
</button>
</div>
</nav>
</div>
</section>
</div>
</main>
</div>



    </>
  );
}
