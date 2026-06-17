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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // Chart
        const ctx = document.getElementById('statsChart');
        if (ctx && window.Chart) {
          const gradient = ctx.getContext('2d').createLinearGradient(0,0,0,160);
          gradient.addColorStop(0,'rgba(249,115,22,0.35)');
          gradient.addColorStop(1,'rgba(249,115,22,0.05)');
          new Chart(ctx, {
            type: 'line',
            data: {
              labels: Array.from({length: 12}, (_,i) => i + 1),
              datasets: [{
                label: 'Streams',
                data: [12,9,11,15,14,18,16,20,24,22,28,30],
                tension: 0.35,
                borderColor: 'rgb(249,115,22)',
                backgroundColor: gradient,
                fill: true,
                pointRadius: 0,
                borderWidth: 2,
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {legend: {display: false}},
              scales: {
                x: {display:false, grid: {display:false}},
                y: {display:false, grid: {display:false}}
              }
            }
          });
        }

        // Theme toggle
        const themeBtn = document.getElementById('themeToggle');
        themeBtn?.addEventListener('click', () => {
          const root = document.documentElement;
          root.classList.toggle('dark');
          themeBtn.setAttribute('aria-pressed', root.classList.contains('dark'));
          if (window.lucide) lucide.createIcons();
        });

        // Tabs
        const tabs = document.querySelectorAll('.tab-btn');
        tabs.forEach(btn => {
          btn.addEventListener('click', () => {
            const view = btn.getAttribute('data-view');
            if (!view) return;
            document.querySelectorAll('main section').forEach(s => s.classList.add('hidden'));
            document.getElementById(view)?.classList.remove('hidden');
            // active color
            tabs.forEach(b => b.classList.remove('text-orange-600'));
            btn.classList.add('text-orange-600');
          });
        });

        // Segmented header
        document.querySelectorAll('.segment-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            document.querySelectorAll('.segment-btn').forEach(b=>{
              b.setAttribute('aria-pressed','false');
              b.classList.remove('font-semibold','bg-white','dark:bg-[#0b1220]','border-stone-200','dark:border-white/10','text-stone-900','dark:text-stone-100');
            });
            btn.setAttribute('aria-pressed','true');
            btn.classList.add('font-semibold','bg-white','dark:bg-[#0b1220]','border-stone-200','dark:border-white/10','text-stone-900','dark:text-stone-100');
          });
        });

        // Menus
        const langBtn = document.getElementById('langBtn');
        const langMenu = document.getElementById('langMenu');
        langBtn?.addEventListener('click', (e)=> {
          e.stopPropagation();
          langMenu?.classList.toggle('hidden');
        });

        const visibilityBtn = document.getElementById('visibilityBtn');
        const visibilityMenu = document.getElementById('visibilityMenu');
        visibilityBtn?.addEventListener('click', (e)=>{
          e.stopPropagation();
          visibilityMenu?.classList.toggle('hidden');
        });

        document.addEventListener('click', ()=>{
          langMenu?.classList.add('hidden');
          visibilityMenu?.classList.add('hidden');
        });

        // Toggles: 2FA / Data Saver
        function wireSwitch(id, bodyClass){
          const btn = document.getElementById(id);
          btn?.addEventListener('click', ()=>{
            const pressed = btn.getAttribute('aria-pressed') === 'true';
            btn.setAttribute('aria-pressed', String(!pressed));
            const knob = btn.querySelector('span > span:last-child');
            if (knob) knob.style.transform = pressed ? 'translateX(0)' : 'translateX(16px)';
            if (bodyClass) document.body.classList.toggle(bodyClass, !pressed);
            if (id === 'dataSaver') {
              document.body.classList.toggle('low-data', !pressed);
              // set lazy/async on images
              document.querySelectorAll('img').forEach(img => {
                img.loading = 'lazy';
                img.decoding = 'async';
                img.referrerPolicy = 'no-referrer';
              });
            }
          });
        }
        wireSwitch('twoFA');
        wireSwitch('dataSaver');

        // Color-blind filters
        document.querySelectorAll('.cb-btn').forEach(btn=>{
          btn.addEventListener('click', ()=>{
            const mode = btn.getAttribute('data-filter');
            document.body.classList.remove('cb-deuteranopia','cb-protanopia','cb-tritanopia');
            if (mode === 'deuteranopia') document.body.classList.add('cb-deuteranopia');
            if (mode === 'protanopia') document.body.classList.add('cb-protanopia');
            if (mode === 'tritanopia') document.body.classList.add('cb-tritanopia');
          });
        });

        // Mini player play/pause demo
        document.getElementById('miniPlay')?.addEventListener('click', (e)=>{
          const icon = e.currentTarget.querySelector('i');
          const isPause = icon?.getAttribute('data-lucide') === 'pause';
          if (icon) {
            icon.setAttribute('data-lucide', isPause ? 'play' : 'pause');
            if (window.lucide) lucide.createIcons();
          }
        });

        // Auth
        const openAuth = document.getElementById('open-auth');
        const authSheet = document.getElementById('authSheet');
        const authClose = document.getElementById('authClose');
        openAuth?.addEventListener('click', ()=>{
          authSheet?.classList.remove('hidden');
          authSheet?.classList.add('flex');
        });
        authClose?.addEventListener('click', ()=>{
          authSheet?.classList.add('hidden');
          authSheet?.classList.remove('flex');
        });

        // Upgrade
        const upgradeBtn = document.getElementById('upgradeBtn');
        const upgradeModal = document.getElementById('upgradeModal');
        const upgradeClose = document.getElementById('upgradeClose');
        upgradeBtn?.addEventListener('click', ()=>{
          upgradeModal?.classList.remove('hidden');
          upgradeModal?.classList.add('flex');
        });
        upgradeClose?.addEventListener('click', ()=>{
          upgradeModal?.classList.add('hidden');
          upgradeModal?.classList.remove('flex');
        });

        // OTP auto-advance
        const otp = document.querySelectorAll('.otp');
        otp.forEach((input, idx)=>{
          input.addEventListener('input', ()=>{
            if (input.value && idx < otp.length-1) otp[idx+1].focus();
          });
          input.addEventListener('keydown', (e)=>{
            if (e.key === 'Backspace' && !input.value && idx>0) otp[idx-1].focus();
          });
        });

        // Voice search demo
        document.getElementById('voiceSearch')?.addEventListener('click', ()=>{
          const b = document.getElementById('voiceSearch');
          b?.classList.add('ring-2','ring-orange-500');
          setTimeout(()=>b?.classList.remove('ring-2','ring-orange-500'), 1000);
        });
      });

      // Video detail handlers
      function openVideoDetail(){
        const m = document.getElementById('videoDetail');
        m?.classList.remove('hidden');
        m?.classList.add('flex');
      }
      function closeVideoDetail(){
        const m = document.getElementById('videoDetail');
        const v = document.getElementById('detailPlayer');
        if (v) { try { v.pause(); } catch(e){} }
        m?.classList.add('hidden');
        m?.classList.remove('flex');
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
      

<div className="min-h-screen w-full flex justify-center">
<div className="w-full max-w-md relative flex flex-col dark:bg-[#0b1220] transition-colors duration-300 bg-white">

<div className="h-5"></div>

<header className="sticky top-0 z-40 px-4 pb-3 pt-2 dark:bg-[#0b1220]/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-[#0b1220]/60 border-b dark:border-white/10 bg-white/80 border-stone-200/70">
<div className="flex items-center gap-3">
<button aria-label="Open Account" className="inline-flex items-center justify-center rounded-xl border dark:border-white/10 dark:hover:bg-white/5 transition h-10 w-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 border-stone-200 hover:bg-stone-50" id="open-auth">
<span className="inline-flex items-center justify-center rounded-full h-6 w-6 bg-orange-500 text-xs font-semibold tracking-tight text-white">GT</span>
</button>
<div className="flex-1">
<h1 className="text-[22px] leading-6 font-semibold tracking-tight dark:text-white text-stone-900">Gaza Tunes</h1>
<p className="text-[12px] text-stone-500 dark:text-stone-400">Social • Messaging • Music • Video</p>
</div>
<div className="flex items-center gap-2">

<button aria-label="Toggle Theme" aria-pressed="true" className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 h-10 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 border-stone-200 hover:bg-stone-50" id="themeToggle">
<i className="hidden dark:inline-block h-4 w-4 text-red-400" data-lucide="sun"></i>
<i className="inline-block dark:hidden h-4 w-4 text-stone-700" data-lucide="moon"></i>
<span className="text-[12px] font-medium dark:text-stone-200 text-stone-700">Theme</span>
</button>

<button aria-label="Notifications" className="inline-flex items-center justify-center rounded-xl border dark:border-white/10 dark:hover:bg-white/5 transition h-10 w-10 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4 dark:text-stone-200 text-stone-700" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 h-4 min-w-[16px] rounded-full bg-orange-500 text-[10px] font-medium px-1 flex items-center justify-center text-white">3</span>
</button>
</div>
</div>

<div className="mt-3 rounded-2xl border dark:border-white/10 p-1 dark:bg-white/5 border-stone-200 bg-stone-50/70">
<div aria-label="Media Type" className="grid grid-cols-2 gap-1" role="tablist">
<button aria-pressed="true" className="segment-btn inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 dark:bg-[#0b1220] border dark:border-white/10 dark:text-stone-100 text-[13px] font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 bg-white border-stone-200 text-stone-900" data-segment="music">
<i className="h-4 w-4" data-lucide="music"></i> Music
              </button>
<button aria-pressed="false" className="segment-btn inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 dark:text-stone-300 hover:dark:bg-white/5 text-[13px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 text-stone-600 hover:bg-white/70" data-segment="video">
<i className="h-4 w-4" data-lucide="clapperboard"></i> Video
              </button>
</div>
</div>
</header>

<div className="mx-4 mt-3 rounded-2xl border dark:border-white/10 bg-gradient-to-r from-orange-500/10 to-stone-500/10 p-3 flex items-center gap-3 border-stone-200" id="adBanner">
<i className="h-5 w-5 text-orange-500" data-lucide="badge-dollar-sign"></i>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight dark:text-stone-100 text-stone-900">Ad • Upgrade for ad‑free experience</p>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Premium unlocks 4K HDR, lossless audio, and downloads.</p>
</div>
<button className="rounded-xl text-[12px] font-semibold px-3 py-2 hover:bg-orange-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 bg-orange-600 text-white" id="upgradeBtn">Try</button>
</div>

<div className="mt-3 pl-4 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-3 pr-4">
<button className="flex flex-col items-center gap-1">
<span className="h-14 w-14 rounded-full border-2 border-orange-500/60 p-0.5">
<span className="h-full w-full rounded-full overflow-hidden block">
<img alt="Your story" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800"/>
</span>
</span>
<span className="text-[11px] text-stone-500">You</span>
</button>
<button className="flex flex-col items-center gap-1">
<span className="h-14 w-14 rounded-full border-2 border-orange-500/60 p-0.5">
<img alt="Maya story" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800"/>
</span>
<span className="text-[11px] text-stone-500">Maya</span>
</button>
<button className="flex flex-col items-center gap-1">
<span className="h-14 w-14 rounded-full border-2 border-orange-500/60 p-0.5">
<img alt="Nour story" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=800"/>
</span>
<span className="text-[11px] text-stone-500">Nour</span>
</button>
<button className="flex flex-col items-center gap-1">
<span className="h-14 w-14 rounded-full border-2 border-orange-500/60 p-0.5">
<img alt="Rami story" className="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&amp;w=800"/>
</span>
<span className="text-[11px] text-stone-500">Rami</span>
</button>
</div>
</div>

<main className="flex-1 pb-44">

<section aria-label="Home Feed" className="block" id="homeView">

<div className="mt-4 px-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight dark:text-white text-stone-900">Featured</h2>
</div>
<div className="mt-3 pl-4 overflow-x-auto no-scrollbar">
<div className="flex gap-3 pr-4">

<article className="min-w-[260px] max-w-[260px] rounded-2xl overflow-hidden border dark:border-white/10 dark:bg-white/5 hover:border-orange-500/50 transition focus-within:ring-2 focus-within:ring-orange-500 border-stone-200 bg-white">
<div className="relative">
<img alt="Live concert" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-black/60 text-white">
<i className="h-3.5 w-3.5" data-lucide="music-3"></i><span>New Single</span>
</div>
<button aria-label="Play" className="absolute bottom-2 right-2 rounded-full dark:bg-black/70 backdrop-blur border dark:border-white/10 h-10 w-10 flex items-center justify-center hover:scale-105 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 bg-white/90 border-stone-200">
<i className="h-5 w-5 dark:text-stone-200 text-stone-900" data-lucide="play"></i>
</button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[16px] font-semibold tracking-tight dark:text-white leading-5 text-stone-900">Night Pulse</h3>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Ayla Khan • 1.2M streams</p>
</div>
<button aria-label="More" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</article>

<article className="min-w-[260px] max-w-[260px] rounded-2xl overflow-hidden border dark:border-white/10 dark:bg-white/5 hover:border-orange-500/50 transition border-stone-200 bg-white">
<div className="relative">
<img alt="Cinematic scene" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-black/60 text-white">
<i className="h-3.5 w-3.5" data-lucide="film"></i><span>Dolby Vision</span>
</div>
<button aria-label="Play Video" className="absolute bottom-2 right-2 rounded-full dark:bg-black/70 backdrop-blur border dark:border-white/10 h-10 w-10 flex items-center justify-center hover:scale-105 transition bg-white/90 border-stone-200" onclick="openVideoDetail()">
<i className="h-5 w-5 dark:text-stone-200 text-stone-900" data-lucide="play"></i>
</button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[16px] font-semibold tracking-tight dark:text-white leading-5 text-stone-900">Frequencies</h3>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Sci‑Fi Series • S1 • Trending</p>
</div>
<button aria-label="More" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</article>

<article className="min-w-[260px] max-w-[260px] rounded-2xl overflow-hidden border dark:border-white/10 dark:bg-white/5 hover:border-orange-500/50 transition border-stone-200 bg-white">
<div className="relative">
<img alt="DJ deck" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] bg-black/60 text-white">
<i className="h-3.5 w-3.5" data-lucide="headphones"></i><span>Editor’s Pick</span>
</div>
<button aria-label="Play" className="absolute bottom-2 right-2 rounded-full dark:bg-black/70 backdrop-blur border dark:border-white/10 h-10 w-10 flex items-center justify-center hover:scale-105 transition bg-white/90 border-stone-200">
<i className="h-5 w-5 dark:text-stone-200 text-stone-900" data-lucide="play"></i>
</button>
</div>
<div className="p-3">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-[16px] font-semibold tracking-tight dark:text-white leading-5 text-stone-900">Midnight Drive</h3>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Curated Playlist • Fresh</p>
</div>
<button aria-label="More" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</article>
</div>
</div>

<div className="mt-6 px-4">

<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight dark:text-white text-stone-900">New Releases</h2>
<button className="text-[12px] font-medium hover:underline text-orange-600">See all</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">

<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Album art" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<button aria-label="Play Neon Air" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
<span className="h-10 w-10 rounded-full backdrop-blur flex items-center justify-center border bg-black/70 border-white/10">
<i className="h-5 w-5 text-white" data-lucide="play"></i>
</span>
</button>
</div>
<p className="mt-2 text-[13px] dark:text-white font-semibold tracking-tight truncate text-stone-900">Neon Air</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">Amir Rayan</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Album art" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<button aria-label="Play Blue Hour" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
<span className="h-10 w-10 rounded-full backdrop-blur flex items-center justify-center border bg-black/70 border-white/10">
<i className="h-5 w-5 text-white" data-lucide="play"></i>
</span>
</button>
</div>
<p className="mt-2 text-[13px] dark:text-white font-semibold tracking-tight truncate text-stone-900">Blue Hour</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">Lina Z.</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Album art" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1495231916356-a86217efff12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button aria-label="Play Echo Bay" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
<span className="h-10 w-10 rounded-full backdrop-blur flex items-center justify-center border bg-black/70 border-white/10">
<i className="h-5 w-5 text-white" data-lucide="play"></i>
</span>
</button>
</div>
<p className="mt-2 text-[13px] dark:text-white font-semibold tracking-tight truncate text-stone-900">Echo Bay</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">J Yara</p>
</div>
</div>

<div className="mt-6 flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight dark:text-white text-stone-900">Top Charts</h2>
<div className="inline-flex text-[12px] border dark:border-white/10 rounded-xl overflow-hidden border-stone-200">
<button className="px-3 py-1.5 dark:bg-[#0b1220] font-semibold bg-white">Global</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Regional</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Music</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Video</button>
</div>
</div>
<div className="mt-2 divide-y dark:divide-white/10 rounded-2xl border dark:border-white/10 overflow-hidden divide-stone-200/80 border-stone-200">

<div className="flex items-center gap-3 p-3">
<span className="w-6 text-[12px] text-stone-500">1</span>
<img alt="Cover" className="h-10 w-10 rounded-lg object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight dark:text-white text-stone-900">Starlight</p>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Reem Sol • 3.1M streams</p>
</div>
<button aria-label="Like" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="heart"></i></button>
<button aria-label="Play" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="play"></i></button>
</div>
<div className="flex items-center gap-3 p-3">
<span className="w-6 text-[12px] text-stone-500">2</span>
<img alt="Cover" className="h-10 w-10 rounded-lg object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight dark:text-white text-stone-900">Afterglow</p>
<p className="text-[12px] dark:text-stone-300 text-stone-600">Malek • 2.8M streams</p>
</div>
<button aria-label="Like" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="heart"></i></button>
<button aria-label="Play" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="play"></i></button>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight dark:text-white text-stone-900">Inspired by your watch</h2>
<button className="text-[12px] hover:underline text-orange-600">Refresh</button>
</div>
<p className="text-[12px] dark:text-stone-300 mt-1 text-stone-600">Playlists and music videos related to “Frequencies”.</p>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="MV" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 rounded-full px-2 py-1 text-[11px] bg-black/60 text-white">MV</div>
</div>
<p className="mt-2 text-[13px] font-semibold tracking-tight dark:text-white truncate text-stone-900">Signal Lost (MV)</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">Rami Kay</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Playlist" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 rounded-full px-2 py-1 text-[11px] bg-black/60 text-white">Playlist</div>
</div>
<p className="mt-2 text-[13px] font-semibold tracking-tight dark:text-white truncate text-stone-900">Cinematic Synth</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">36 tracks</p>
</div>
<div className="group cursor-pointer">
<div className="relative rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Soundtrack" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 rounded-full px-2 py-1 text-[11px] bg-black/60 text-white">OST</div>
</div>
<p className="mt-2 text-[13px] font-semibold tracking-tight dark:text-white truncate text-stone-900">Frequencies OST</p>
<p className="text-[12px] dark:text-stone-300 truncate text-stone-600">Album • 2025</p>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight dark:text-white text-stone-900">Top Picks (On‑Demand)</h2>
<button className="text-[12px] hover:underline text-orange-600">Explore</button>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Movie" className="aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="p-2">
<p className="text-[12px] font-semibold tracking-tight">Aurora</p>
<p className="text-[11px] text-stone-500">4K HDR</p>
</div>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Series" className="aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="p-2">
<p className="text-[12px] font-semibold tracking-tight">Frontier</p>
<p className="text-[11px] text-stone-500">Dolby Vision</p>
</div>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Original" className="aspect-[3/4] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-2">
<p className="text-[12px] font-semibold tracking-tight">GT Originals</p>
<p className="text-[11px] text-stone-500">New</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Chats" className="hidden" id="chatView">
<div className="px-4 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Chats</h2>
<div className="inline-flex gap-2">
<button aria-label="New Group" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="users"></i></button>
<button aria-label="New Chat" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="plus"></i></button>
</div>
</div>

<div className="mt-3 rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<div className="flex items-center justify-between">
<p className="text-[13px] font-semibold tracking-tight">Status</p>
<button className="text-[12px] text-orange-600 hover:underline">Privacy</button>
</div>
<div className="mt-2 pl-1 overflow-x-auto no-scrollbar">
<div className="flex gap-3 pr-2">
<button aria-label="Add Status" className="flex flex-col items-center gap-1">
<span className="h-12 w-12 rounded-full bg-orange-500/10 text-orange-600 flex items-center justify-center border border-orange-500/20">
<i className="h-4 w-4" data-lucide="plus"></i>
</span>
<span className="text-[11px] text-stone-500">My status</span>
</button>
<div className="flex flex-col items-center gap-1">
<img alt="Maya status" className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500/60" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800"/>
<span className="text-[11px] text-stone-500">Maya</span>
</div>
<div className="flex flex-col items-center gap-1">
<img alt="Nour status" className="h-12 w-12 rounded-full object-cover ring-2 ring-orange-500/60" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=800"/>
<span className="text-[11px] text-stone-500">Nour</span>
</div>
</div>
</div>
</div>

<div className="mt-3 rounded-2xl border dark:border-white/10 overflow-hidden border-stone-200">
<div className="flex items-center justify-between px-3 py-2 border-b dark:border-white/10 border-stone-200">
<div className="inline-flex text-[12px] border dark:border-white/10 rounded-xl overflow-hidden border-stone-200">
<button className="px-3 py-1.5 dark:bg-[#0b1220] font-semibold bg-white">All</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Groups</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Unread</button>
</div>
<div className="inline-flex gap-2">
<button aria-label="Calls" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="phone"></i></button>
<button aria-label="Broadcast" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="megaphone"></i></button>
</div>
</div>
<div className="divide-y dark:divide-white/10 divide-stone-200/80">
<button className="w-full text-left px-3 py-2 flex items-center gap-3 hover:bg-stone-50 dark:hover:bg-white/5 focus:outline-none">
<img alt="Rami" className="h-10 w-10 rounded-lg object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&amp;w=800"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[13px] font-semibold tracking-tight">Rami</p>
<span className="text-[11px] text-stone-500">now</span>
</div>
<p className="text-[12px] text-stone-500">Typing… <span className="ml-1 inline-flex items-center gap-1 text-teal-500"><i className="h-3.5 w-3.5" data-lucide="shield"></i>E2EE</span></p>
</div>
<span className="min-w-[20px] h-5 rounded-full bg-orange-600 text-white text-[11px] px-1 flex items-center justify-center">2</span>
</button>
<button className="w-full text-left px-3 py-2 flex items-center gap-3 hover:bg-stone-50 dark:hover:bg-white/5 focus:outline-none">
<img alt="Maya" className="h-10 w-10 rounded-lg object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&amp;w=800"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[13px] font-semibold tracking-tight">Group: Weekend Jam</p>
<span className="text-[11px] text-stone-500">12:05</span>
</div>
<p className="text-[12px] text-stone-500">Noor: check this riff 🔥</p>
</div>
</button>
</div>
</div>

<div className="mt-3 rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<p className="text-[12px] text-stone-500 mb-2">Swipe right on a message to reply</p>
<div className="space-y-2">
<div className="flex justify-start">
<div className="max-w-[75%] rounded-2xl rounded-tl-sm px-3 py-2 border dark:border-white/10 bg-white/70 dark:bg-white/5 border-stone-200">
<p className="text-[13px]">Check out this track</p>
</div>
</div>
<div className="flex justify-end">
<div className="max-w-[75%] rounded-2xl rounded-tr-sm px-3 py-2 border border-orange-500/30 bg-orange-500/10">
<p className="text-[13px]">Loved it! Sending to the group.</p>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-2">
<button aria-label="Attach" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="paperclip"></i></button>
<div className="flex-1">
<input aria-label="Message input" className="w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="Message" type="text"/>
</div>
<button aria-label="Send" className="rounded-xl px-3 h-9 text-[12px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Send</button>
<button aria-label="Voice Message" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="mic"></i></button>
<button aria-label="Start Watch Party" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="tv"></i></button>
</div>
</div>
</div>
</section>

<section aria-label="Discover" className="hidden" id="discoverView">
<div className="px-4 pt-4">
<div className="rounded-2xl border dark:border-white/10 p-3 dark:bg-white/5 border-stone-200 bg-white">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-stone-500" data-lucide="search"></i>
<input aria-label="Global search" className="flex-1 bg-transparent text-[14px] focus:outline-none placeholder:text-stone-400" id="searchInput" placeholder="Search across posts, people, music, videos…" type="text"/>
<button aria-label="Voice Search" className="h-9 w-9 rounded-xl border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50" id="voiceSearch">
<i className="h-4 w-4" data-lucide="mic"></i>
</button>
</div>

<div className="mt-3 flex flex-wrap gap-2">
<button className="filter-chip inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="user"></i> Creators
                  </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="music"></i> Music
                  </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="film"></i> Video
                  </button>
<button className="filter-chip inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="hash"></i> Hashtags
                  </button>
</div>
</div>
<div className="mt-5">
<h3 className="text-[16px] font-semibold tracking-tight dark:text-white text-stone-900">Explore</h3>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight">Shorts</h3>
<button className="text-[12px] hover:underline text-orange-600">Open feed</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="relative rounded-2xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Short 1" className="aspect-[9/16] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 text-white">
<p className="text-[12px] font-semibold tracking-tight">Synth jam</p>
<div className="mt-1 inline-flex items-center gap-2">
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="heart"></i></button>
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="message-circle"></i></button>
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="share-2"></i></button>
</div>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Short 2" className="aspect-[9/16] object-cover" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-2 left-2 right-2 text-white">
<p className="text-[12px] font-semibold tracking-tight">Beat switch</p>
<div className="mt-1 inline-flex items-center gap-2">
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="heart"></i></button>
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="message-circle"></i></button>
<button className="h-8 w-8 rounded-lg backdrop-blur bg-white/10 border border-white/20 flex items-center justify-center"><i className="h-4 w-4" data-lucide="share-2"></i></button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight">Trending now</h3>
<div className="inline-flex text-[12px] border dark:border-white/10 rounded-xl overflow-hidden border-stone-200">
<button className="px-3 py-1.5 dark:bg-[#0b1220] font-semibold bg-white">Music</button>
<button className="px-3 py-1.5 dark:hover:bg:white/5 hover:bg-stone-50 dark:hover:bg-white/5">Video</button>
<button className="px-3 py-1.5 dark:hover:bg:white/5 hover:bg-stone-50 dark:hover:bg-white/5">Posts</button>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-xl overflow-hidden border dark:border-white/10 border-stone-200">
<img alt="Trending" className="aspect-square object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Library" className="hidden" id="libraryView">
<div className="px-4 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Your Library</h2>
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 dark:hover:bg-white/5 text-[12px] border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="plus"></i> New Playlist
                </button>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<a className="rounded-2xl border dark:border-white/10 p-3 dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" href="#">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center border border-orange-500/20">
<i className="h-5 w-5" data-lucide="download"></i>
</span>
<div>
<p className="text-[13px] font-semibold tracking-tight">Downloads</p>
<p className="text-[12px] text-stone-500">Offline</p>
</div>
</div>
</a>
<a className="rounded-2xl border dark:border-white/10 p-3 dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" href="#">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center border border-red-500/20">
<i className="h-5 w-5" data-lucide="heart"></i>
</span>
<div>
<p className="text-[13px] font-semibold tracking-tight">Liked</p>
<p className="text-[12px] text-stone-500">162 items</p>
</div>
</div>
</a>
<a className="rounded-2xl border dark:border-white/10 p-3 dark:hover:bg-white/5 col-span-2 border-stone-200 hover:bg-stone-50" href="#">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-lg bg-pink-500/20 text-pink-500 flex items-center justify-center border border-pink-500/20">
<i className="h-5 w-5" data-lucide="users"></i>
</span>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight">Collab: Roadtrip 2025</p>
<p className="text-[12px] text-stone-500">Sami, Noor + you</p>
</div>
<span className="text-[11px] rounded-full border dark:border-white/10 px-2 py-0.5 border-stone-200">Active</span>
</div>
</a>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight">Recently played</h3>
<button className="text-[12px] hover:underline text-orange-600">See all</button>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center gap-3 rounded-xl border dark:border-white/10 p-2 border-stone-200">
<img alt="Cover" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight">Haze Lane</p>
<p className="text-[12px] text-stone-500">Aya • 856K streams</p>
</div>
<button aria-label="Play" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="play"></i></button>
</div>
<div className="flex items-center gap-3 rounded-xl border dark:border-white/10 p-2 border-stone-200">
<img alt="Cover" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[13px] font-semibold tracking-tight">Deep Dive (Doc)</p>
<p className="text-[12px] text-stone-500">90m • 4K HDR</p>
</div>
<button aria-label="Play" className="h-8 w-8 rounded-lg border dark:border-white/10 dark:hover:bg-white/5 flex items-center justify-center border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="play"></i></button>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Profile" className="hidden" id="profileView">
<div className="px-4 pt-4">
<div className="rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-12 w-12 rounded-xl object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[16px] font-semibold tracking-tight">Nour Al‑Deen</p>
<p className="text-[12px] text-stone-500">@nourad • Premium</p>
</div>
<button className="rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" id="editProfileBtn">
                    Edit
                  </button>
</div>
<div className="mt-3 flex items-center gap-3">
<button className="inline-flex items-center gap-1.5 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="user-plus"></i> Followed: 128
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-xl border dark:border-white/10 px-3 py-1.5 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="bell-ring"></i> Alerts
                  </button>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<p className="text-[12px] text-stone-500">Creator Hub</p>
<p className="text-[14px] font-semibold tracking-tight mt-1">Monetization &amp; Analytics</p>
<div className="mt-2 flex items-center gap-2 text-[12px]">
<span className="inline-flex items-center gap-1"><i className="h-4 w-4" data-lucide="eye"></i> 42k</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4" data-lucide="clock"></i> 128h</span>
<span className="inline-flex items-center gap-1"><i className="h-4 w-4" data-lucide="users"></i> 6.2k</span>
</div>
</div>
<div className="rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<p className="text-[12px] text-stone-500">Profiles</p>
<p className="text-[14px] font-semibold tracking-tight mt-1">Manage Family</p>
<div className="mt-2 inline-flex gap-2">
<span className="h-8 w-8 rounded-lg bg-stone-200/60 dark:bg-white/10 flex items-center justify-center text-[12px]">N</span>
<span className="h-8 w-8 rounded-lg bg-stone-200/60 dark:bg-white/10 flex items-center justify-center text-[12px]">S</span>
<span className="h-8 w-8 rounded-lg bg-stone-200/60 dark:bg-white/10 flex items-center justify-center text-[12px]">K</span>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<div className="flex items-center justify-between">
<div>
<h3 className="text-[16px] font-semibold tracking-tight">Your Stats</h3>
<p className="text-[12px] text-stone-500">Last 30 days</p>
</div>
<div className="inline-flex text-[12px] border dark:border-white/10 rounded-xl overflow-hidden border-stone-200">
<button className="px-3 py-1.5 dark:bg-[#0b1220] font-semibold bg-white">Daily</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Weekly</button>
</div>
</div>
<div className="mt-2">
<div className="rounded-xl border dark:border-white/10 p-2 dark:bg-white/5 border-stone-200 bg-white">
<div className="relative">
<div className="p-2">
<div className="w-full">
<div>
<div className="h-40 w-full relative">
<div className="h-full w-full">
<div>
<div className="relative">
<div className="chart-wrap">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">

<div className="relative">
<canvas height="160" id="statsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-2 right-2 text-[11px] text-stone-500">Streams &amp; watch time</div>
</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-xl border dark:border-white/10 p-2 border-stone-200">
<p className="text-[11px] text-stone-500">Top Track</p>
<p className="text-[13px] font-semibold tracking-tight">Starlight</p>
</div>
<div className="rounded-xl border dark:border-white/10 p-2 border-stone-200">
<p className="text-[11px] text-stone-500">Watch Time</p>
<p className="text-[13px] font-semibold tracking-tight">14h 22m</p>
</div>
<div className="rounded-xl border dark:border-white/10 p-2 border-stone-200">
<p className="text-[11px] text-stone-500">Wrapped</p>
<button className="text-[13px] font-semibold hover:underline text-orange-600">View 2025</button>
</div>
</div>
</div>

<div className="mt-4 rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<h3 className="text-[16px] font-semibold tracking-tight mb-2">Settings</h3>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Text Size</p>
<p className="text-[12px] text-stone-500">Adjust interface text</p>
</div>
<input aria-label="Text size" className="w-28 accent-orange-600" id="textScale" max="120" min="90" type="range" value="100"/>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Color‑blind Mode</p>
<p className="text-[12px] text-stone-500">Apply assistive filters</p>
</div>
<div className="inline-flex gap-2">
<button className="cb-btn rounded-xl border dark:border-white/10 px-2 py-1 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" data-filter="deuteranopia">Deut</button>
<button className="cb-btn rounded-xl border dark:border-white/10 px-2 py-1 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" data-filter="protanopia">Prot</button>
<button className="cb-btn rounded-xl border dark:border-white/10 px-2 py-1 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" data-filter="tritanopia">Trit</button>
<button className="cb-btn rounded-xl border dark:border-white/10 px-2 py-1 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" data-filter="none">Off</button>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Two‑Factor Authentication</p>
<p className="text-[12px] text-stone-500">Add extra security</p>
</div>
<button aria-label="Toggle 2FA" aria-pressed="false" className="inline-flex items-center rounded-xl border dark:border-white/10 px-1 py-1 border-stone-200" id="twoFA">
<span className="w-10 h-6 relative inline-block">
<span className="absolute inset-0 rounded-full dark:bg-white/10 bg-stone-200"></span>
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white dark:bg-stone-300 transition-transform"></span>
</span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Low‑Data Mode</p>
<p className="text-[12px] text-stone-500">Optimize for limited bandwidth</p>
</div>
<button aria-label="Toggle Low Data Mode" aria-pressed="false" className="inline-flex items-center rounded-xl border dark:border-white/10 px-1 py-1 border-stone-200" id="dataSaver">
<span className="w-10 h-6 relative inline-block">
<span className="absolute inset-0 rounded-full dark:bg-white/10 bg-stone-200"></span>
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white dark:bg-stone-300 transition-transform"></span>
</span>
</button>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Language</p>
<p className="text-[12px] text-stone-500">Content &amp; UI</p>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" id="langBtn">
<i className="h-4 w-4" data-lucide="globe"></i> English
                        <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-40 rounded-2xl border dark:border-white/10 dark:bg-[#0b1220] shadow-lg overflow-hidden border-stone-200 bg-white" id="langMenu">
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">العربية</button>
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">Français</button>
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">Deutsch</button>
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">Español</button>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Devices</p>
<p className="text-[12px] text-stone-500">AirPlay, Chromecast, Bluetooth</p>
</div>
<div className="inline-flex gap-2">
<button aria-label="AirPlay" className="rounded-xl border dark:border-white/10 h-9 w-9 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="airplay"></i></button>
<button aria-label="Cast" className="rounded-xl border dark:border-white/10 h-9 w-9 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="cast"></i></button>
<button aria-label="Bluetooth" className="rounded-xl border dark:border-white/10 h-9 w-9 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="bluetooth"></i></button>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-[13px] font-semibold tracking-tight">Privacy</p>
<p className="text-[12px] text-stone-500">Encrypted &amp; compliant</p>
</div>
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="shield-check"></i> Manage</button>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Create" className="hidden" id="createView">
<div className="px-4 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Create</h2>
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="settings-2"></i> Tools
                </button>
</div>
<div className="mt-3 rounded-2xl border dark:border-white/10 p-3 border-stone-200">
<div className="inline-flex text-[12px] border dark:border-white/10 rounded-xl overflow-hidden border-stone-200">
<button className="px-3 py-1.5 dark:bg-[#0b1220] font-semibold bg-white">Post</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Story</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Reel</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Music</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Video</button>
<button className="px-3 py-1.5 dark:hover:bg-white/5 hover:bg-stone-50">Live</button>
</div>
<div className="mt-3 space-y-2">
<div className="rounded-xl border dark:border-white/10 p-3 border-stone-200">
<div className="flex items-center gap-2">
<button aria-label="Pick media" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="image-plus"></i></button>
<button aria-label="Record video" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="camera"></i></button>
<button aria-label="Add music overlay" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="music"></i></button>
<button aria-label="Effects" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="sparkles"></i></button>
<button aria-label="Duet" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="split"></i></button>
</div>
<div className="mt-3">
<input aria-label="Caption" className="w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="Caption" type="text"/>
<div className="mt-2 grid grid-cols-2 gap-2">
<input aria-label="Hashtags" className="rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="#hashtags" type="text"/>
<input aria-label="Location" className="rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="Location" type="text"/>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="relative">
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" id="visibilityBtn">
<i className="h-4 w-4" data-lucide="eye"></i> Public
                            <i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute left-0 mt-2 w-36 rounded-2xl border dark:border-white/10 overflow-hidden border-stone-200 bg-white dark:bg-[#0b1220]" id="visibilityMenu">
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">Public</button>
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white/5 hover:bg-stone-50">Friends</button>
<button className="w-full text-left px-3 py-2 text-[13px] dark:hover:bg-white.../5 hover:bg-stone-50">Close Friends</button>
</div>
</div>
<div className="inline-flex items-center gap-2">
<label className="inline-flex items-center gap-2 text-[12px]">
<input checked="" className="accent-orange-600 rounded" type="checkbox"/>
                            Allow comments
                          </label>
<label className="inline-flex items-center gap-2 text-[12px]">
<input className="accent-orange-600 rounded" type="checkbox"/>
                            Allow duets
                          </label>
<label className="inline-flex items-center gap-2 text-[12px]">
<input className="accent-orange-600 rounded" type="checkbox"/>
                            Monetize
                          </label>
</div>
</div>

<details className="mt-2 rounded-xl border dark:border-white/10 border-stone-200 open:bg-white/50 dark:open:bg-white/5">
<summary className="flex cursor-pointer items-center justify-between px-3 py-2 text-[12px]">
<span className="inline-flex items-center gap-2"><i className="h-4 w-4" data-lucide="sliders"></i> Advanced options</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</summary>
<div className="px-3 pb-3 space-y-2">
<div className="grid grid-cols-2 gap-2">
<label className="text-[12px] text-stone-500">Release date
                              <input className="mt-1 w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" type="date"/>
</label>
<label className="text-[12px] text-stone-500">Release time
                              <input className="mt-1 w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" type="time"/>
</label>
</div>
<div className="grid grid-cols-2 gap-2">
<label className="text-[12px] text-stone-500">Tag collaborators
                              <input className="mt-1 w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="@user1, @user2" type="text"/>
</label>
<label className="text-[12px] text-stone-500">Restrictions
                              <select className="mt-1 w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200">
<option className="dark:bg-[#0b1220]">None</option>
<option className="dark:bg-[#0b1220]">Age 13+</option>
<option className="dark:bg-[#0b1220]">Age 18+</option>
</select>
</label>
</div>
<label className="inline-flex items-center gap-2 text-[12px]">
<input className="accent-orange-600 rounded" type="checkbox"/>
                            Contains explicit content
                          </label>
</div>
</details>

<div className="mt-3 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="folder-down"></i> Save draft
                        </button>
<div className="inline-flex items-center gap-2">
<button aria-label="Preview" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50"><i className="h-4 w-4" data-lucide="eye"></i></button>
<button className="rounded-xl px-4 h-9 text-[12px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Post</button>
</div>
</div>
</div>
</div>

<div className="rounded-xl border dark:border-white/10 p-3 border-stone-200">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5 text-orange-500" data-lucide="radio"></i>
<p className="text-[13px] font-semibold tracking-tight">Go Live</p>
</div>
<button className="rounded-xl px-3 h-9 text-[12px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Start</button>
</div>
<div className="mt-2 grid grid-cols-2 gap-2">
<input aria-label="Stream title" className="rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200" placeholder="Stream title" type="text"/>
<select aria-label="Quality" className="rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] focus:outline-none border-stone-200">
<option className="dark:bg-[#0b1220]">1080p</option>
<option className="dark:bg-[#0b1220]">720p</option>
<option className="dark:bg-[#0b1220]">480p</option>
</select>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="fixed bottom-16 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-40" id="miniPlayer">
<div className="rounded-2xl border dark:border-white/10 p-2 shadow-lg dark:bg-white/5 backdrop-blur bg-white/80 border-stone-200">
<div className="flex items-center gap-3">
<img alt="Cover" className="h-10 w-10 rounded-lg object-cover border dark:border-white/10 border-stone-200" src="https://images.unsplash.com/photo-1495435229349-e86db7bfa013?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-semibold tracking-tight truncate dark:text-white text-stone-900">Starlight</p>
<p className="text-[11px] truncate text-stone-500">Reem Sol</p>
</div>
<div className="inline-flex items-center gap-1">
<button aria-label="Prev" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5"><i className="h-4 w-4" data-lucide="skip-back"></i></button>
<button aria-label="Play/Pause" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5" id="miniPlay"><i className="h-4 w-4" data-lucide="pause"></i></button>
<button aria-label="Next" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5"><i className="h-4 w-4" data-lucide="skip-forward"></i></button>
</div>
</div>
<div className="mt-2 h-1 w-full rounded bg-stone-200/60 dark:bg-white/10">
<div className="h-1 w-1/3 rounded bg-orange-500"></div>
</div>
</div>
</div>

<nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md border-t dark:border-white/10 bg-white/90 dark:bg-[#0b1220]/80 backdrop-blur z-50 border-stone-200">
<div className="grid grid-cols-5">
<button aria-label="Home" className="tab-btn flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-orange-600" data-view="homeView">
<i className="h-5 w-5" data-lucide="home"></i><span>Home</span>
</button>
<button aria-label="Discover" className="tab-btn flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-200" data-view="discoverView">
<i className="h-5 w-5" data-lucide="compass"></i><span>Discover</span>
</button>
<button className="tab-btn -mt-4" data-view="createView">
<span aria-label="Create" className="inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-orange-600 text-white shadow-lg ring-4 ring-orange-500/20">
<i className="h-6 w-6" data-lucide="plus"></i>
</span>
</button>
<button aria-label="Chats" className="tab-btn flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-200" data-view="chatView">
<i className="h-5 w-5" data-lucide="message-square"></i><span>Chats</span>
</button>
<button aria-label="Profile" className="tab-btn flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium text-stone-500 hover:text-stone-900 dark:hover:text-stone-200" data-view="profileView">
<i className="h-5 w-5" data-lucide="user"></i><span>Profile</span>
</button>
</div>
</nav>

<div className="hidden fixed inset-0 z-50 items-end justify-center sm:items-center" id="videoDetail">
<div aria-hidden="true" className="absolute inset-0 bg-black/60"></div>
<div className="relative w-full max-w-md rounded-t-2xl sm:rounded-2xl overflow-hidden border dark:border-white/10 bg-white dark:bg-[#0b1220]">
<div className="flex items-center justify-between px-3 py-2 border-b dark:border-white/10 border-stone-200">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5 text-orange-500" data-lucide="clapperboard"></i>
<p className="text-[13px] font-semibold tracking-tight">Frequencies • S1E1</p>
</div>
<button aria-label="Close" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5" onclick="closeVideoDetail()">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="aspect-video bg-black">
<video className="w-full h-full" controls="" id="detailPlayer" playsinline="" poster="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80">
<source src="https://cdn.coverr.co/videos/coverr-frequency-7106/1080p.mp4" type="video/mp4"/>
</video>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-2 text-[12px]">
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 border dark:border-white/10 border-stone-200"><i className="h-4 w-4 text-teal-500" data-lucide="badge-check"></i> 4K HDR</span>
<span className="inline-flex items-center gap-1 rounded-full px-2 py-1 border dark:border-white/10 border-stone-200"><i className="h-4 w-4" data-lucide="message-square"></i> CC</span>
</div>
<div className="inline-flex gap-2">
<button aria-label="Like" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5"><i className="h-4 w-4" data-lucide="heart"></i></button>
<button aria-label="Share" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5"><i className="h-4 w-4" data-lucide="share-2"></i></button>
<button aria-label="Download" className="h-9 w-9 rounded-xl border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5"><i className="h-4 w-4" data-lucide="download"></i></button>
</div>
</div>
<p className="text-[12px] text-stone-500 line-clamp-3">A mysterious signal unlocks hidden layers of reality. Team Nova races to decode frequencies before they reshape the world.</p>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-center justify-center" id="upgradeModal">
<div aria-hidden="true" className="absolute inset-0 bg-black/60"></div>
<div className="relative w-full max-w-sm rounded-2xl overflow-hidden border dark:border-white/10 bg-white dark:bg-[#0b1220]">
<div className="p-4">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-500" data-lucide="crown"></i>
<h3 className="text-[16px] font-semibold tracking-tight">Go Premium</h3>
</div>
<p className="mt-1 text-[13px] text-stone-600 dark:text-stone-300">Ad‑free, 4K HDR video, lossless audio, downloads on up to 10 devices.</p>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-xl border dark:border-white/10 p-3 border-stone-200">
<p className="text-[12px] font-semibold">Monthly</p>
<p className="text-[20px] font-bold">$7.99</p>
</div>
<div className="rounded-xl border dark:border-white/10 p-3 border-stone-200">
<p className="text-[12px] font-semibold">Yearly</p>
<p className="text-[20px] font-bold">$69.99</p>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50" id="upgradeClose">Not now</button>
<button className="rounded-xl px-3 py-2 text-[12px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Start trial</button>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 items-end justify-center sm:items-center" id="authSheet">
<div aria-hidden="true" className="absolute inset-0 bg-black/60"></div>
<div className="relative w-full max-w-md rounded-t-2xl sm:rounded-2xl overflow-hidden border dark:border-white/10 bg-white dark:bg-[#0b1220]">
<div className="flex items-center justify-between px-3 py-2 border-b dark:border-white/10 border-stone-200">
<div className="inline-flex items-center gap-2">
<i className="h-5 w-5 text-orange-500" data-lucide="lock"></i>
<p className="text-[13px] font-semibold tracking-tight">Sign in</p>
</div>
<button aria-label="Close" className="h-8 w-8 rounded-lg border dark:border-white/10 flex items-center justify-center border-stone-200 hover:bg-stone-50 dark:hover:bg-white/5" id="authClose">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<div className="p-3 space-y-3">
<label className="block text-[12px] text-stone-500">Phone
                <input className="mt-1 w-full rounded-xl border dark:border-white/10 bg-transparent px-3 py-2 text-[13px] border-stone-200 focus:outline-none" placeholder="+970 55 123 4567" type="tel"/>
</label>
<button className="w-full rounded-xl px-3 py-2 text-[13px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Send code</button>
<div className="grid grid-cols-6 gap-2">
<input aria-label="Digit 1" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
<input aria-label="Digit 2" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
<input aria-label="Digit 3" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
<input aria-label="Digit 4" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
<input aria-label="Digit 5" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
<input aria-label="Digit 6" className="otp h-10 rounded-lg text-center border dark:border-white/10 bg-transparent text-[14px] border-stone-200 focus:outline-none" inputmode="numeric" maxlength="1"/>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 text-[12px]">
<input className="accent-orange-600 rounded" id="bioToggle" type="checkbox"/>
                  Enable biometrics
                </label>
<button className="inline-flex items-center gap-2 rounded-xl border dark:border-white/10 px-3 py-2 text-[12px] dark:hover:bg-white/5 border-stone-200 hover:bg-stone-50">
<i className="h-4 w-4" data-lucide="fingerprint"></i> Use Face/Touch ID
                </button>
</div>
<button className="w-full rounded-xl px-3 py-2 text-[13px] font-semibold hover:bg-orange-500 bg-orange-600 text-white">Continue</button>
<p className="text-[11px] text-stone-500 text-center">Protected by E2EE • Terms apply</p>
</div>
</div>
</div>
</div>
</div>

<style>
      .no-scrollbar::-webkit-scrollbar{display:none;}
      .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none;}
      .cb-deuteranopia{filter:hue-rotate(15deg) saturate(0.9);}
      .cb-protanopia{filter:hue-rotate(-15deg) saturate(0.9);}
      .cb-tritanopia{filter:hue-rotate(90deg) saturate(0.85);}
      .low-data img{filter:saturate(0.8);transition-filter:200ms}
    </style>



    </>
  );
}
