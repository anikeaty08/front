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


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();

        // FAQ toggles
        document.querySelectorAll('.faq-toggle').forEach((btn) => {
          btn.addEventListener('click', () => {
            const content = btn.parentElement.querySelector('div');
            const icon = btn.querySelector('[data-lucide]');
            content.classList.toggle('hidden');
            if (icon && window.lucide) {
              icon.setAttribute('data-lucide', content.classList.contains('hidden') ? 'chevron-down' : 'chevron-up');
              lucide.createIcons();
            }
          });
        });

        // Footer year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
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
      

<div className="relative">

<header className="sticky top-3 z-50 text-white ml-auto mr-auto max-w-7xl">
<div className="pr-3 pl-3 justify-center">
<div className="h-14 flex ring-1 ring-white/10 bg-slate-900/70 rounded-full mr-8 ml-8 pr-2.5 pl-2.5 backdrop-blur-lg items-center justify-between">
<div className="flex gap-0 items-center">
<svg aria-hidden="true" className="md:w-14 md:h-14 w-[36px] h-[36px]" strokeWidth="2" style={{width: '36px', height: '36px'}} viewbox="0 0 48 48">
<path className="" d="M24 8 L36 16 L36 32 L24 40 L12 32 L12 16 Z" fill="currentColor"></path>
</svg>
<span className="text-base font-semibold tracking-tight">FlowCast</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
<a className="hover:text-white transition font-sans" href="#" title="Link disabled in preview mode">Product</a>
<a className="hover:text-white transition font-sans" href="#" title="Link disabled in preview mode">Solutions</a>
<a className="hover:text-white transition font-sans" href="#" title="Link disabled in preview mode">Pricing</a>
<a className="hover:text-white transition font-sans" href="#" title="Link disabled in preview mode">Customers</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 text-sm rounded-md text-slate-300 hover:text-white transition font-sans">Log in</button>
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-2 pr-4 pb-2 pl-4">
<span className="">Sign up</span>
</span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative pt-0 pb-8">
<div className="max-w-7xl sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pt-40 pr-4 pl-4">

<div className="absolute inset-0 w-full h-full -z-10 overflow-hidden">
<div className="absolute w-full h-[625px] top-0 left-0 -z-10" data-us-project="RDB30U4si21PyW2SOs69"></div>

</div>
<div className="max-w-3xl text-left mr-auto ml-0 relative z-20">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs shadow-sm border-zinc-800 bg-black text-zinc-300" style={{}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 bg-emerald-950 text-emerald-400 ring-emerald-800">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="font-medium">1.2M+ creators earning with FlowCast</span>
</div>
<h1 className="sm:text-5xl md:text-6xl text-4xl font-semibold text-zinc-100 tracking-tight mt-8 mb-8" style={{}}>
      Create Clips. Watch. Upload &amp; Earn.
    </h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400" style={{}}>
      Turn your videos into revenue. A better home to share, grow, and get paid.
    </p>
<div className="flex flex-col sm:flex-row gap-3 mt-20 mb-20 items-center">
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65, ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-4 pr-6 pb-4 pl-6">
<svg className="lucide lucide-user-plus w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path className="" d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path className="" d="m8 17 4-4 4 4"></path></svg>
<span className="">Upload Clip</span>
</span>
</button>
<a className="inline-flex items-center gap-2 ring-1 ring-zinc-800 hover:bg-zinc-950 text-sm font-medium text-zinc-100 bg-black rounded-full pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>
<svg className="lucide lucide-wallet h-4 w-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="">See Earnings</span>
</a>
</div>
</div>

<div className="mt-10 relative z-20">
<div className="ring-1 ring-zinc-800 bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-slate-200/20 to-[#131418] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-lg" style={{}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<aside className="order-2 lg:order-1 lg:col-span-2">
<div className="space-y-3">
<button className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700" style={{}}>
<img alt="VR clip" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2193eef4-d7c7-4b14-80c0-08ed6035c6da_800w.jpg"/>
</button>
<button className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700" style={{}}>
<img alt="coding" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/656c6265-9358-4849-8674-c7dd07300ba3_800w.jpg"/>
</button>
<button className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700" style={{}}>
<img alt="workspace" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/28c4d0fd-707a-47de-a843-f7c73fa1d693_800w.jpg"/>
</button>
<button className="w-full overflow-hidden rounded-xl ring-1 ring-zinc-800 hover:ring-zinc-700" style={{}}>
<img alt="nebula" className="h-20 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a7eacbd6-2566-476b-9e41-eebb713e56c1_800w.jpg"/>
</button>
</div>
</aside>

<main className="order-1 lg:order-2 lg:col-span-7">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-800" style={{}}>
<video autoplay="" className="aspect-video w-full object-cover" controls="" data-inline-player="" playsinline="" poster="https://cdn.midjourney.com/3b78d621-e353-44d0-8275-e07dc8e723e3/0_1.png?w=800&amp;q=80" src="https://cdn.midjourney.com/video/ce0968ea-78ec-47f9-b972-80efa98ef4a6/0.mp4"></video>
<button aria-label="Play video" className="absolute inset-0 h-14 w-14 flex hover:bg-black bg-black/90 rounded-full mt-auto mr-auto mb-auto ml-auto shadow-md backdrop-blur items-center justify-center" data-video-src="https://cdn.midjourney.com/video/ce0968ea-78ec-47f9-b972-80efa98ef4a6/0.mp4" onclick="(function(btn){try{const container=btn.closest('div.relative');if(!container)return;const img=container.querySelector('img.aspect-video');let video=container.querySelector('video[data-inline-player]');if(!video){video=document.createElement('video');video.setAttribute('data-inline-player','');video.setAttribute('playsinline','');video.setAttribute('controls','');video.setAttribute('autoplay','');video.muted=true;video.className=img?img.className:'aspect-video w-full object-cover';video.src=btn.getAttribute('data-video-src');if(img){video.poster=img.currentSrc||img.src;img.replaceWith(video);}else{container.prepend(video);}}const p=video.play();if(p&amp;&amp;p.catch){p.catch(function(){video.muted=true;video.play();});}btn.style.display='none';}catch(e){console.error(e);}})(this)" style={{display: 'none'}} type="button">
<svg className="lucide lucide-play h-6 w-6 text-zinc-100" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="flex mt-3 items-center justify-between">
<div className="">
<h3 className="text-lg tracking-tight font-semibold">Exploring Spatial Video</h3>
<p className="text-sm text-zinc-400" style={{}}>by <span className="font-medium text-zinc-200" style={{}}>Ari Nova</span> • 8:21</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex gap-1.5 hover:bg-zinc-800 text-xs font-medium text-zinc-200 bg-zinc-950 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 items-center" style={{}}>
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                4.2k
              </button>
<button className="inline-flex gap-1.5 hover:bg-zinc-800 text-xs font-medium text-zinc-200 bg-zinc-950 rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 items-center" style={{}}>
<svg className="lucide lucide-bookmark h-3.5 w-3.5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                Save
              </button>
</div>
</div>
</main>

<aside className="order-3 lg:col-span-3">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium tracking-tight">Activity</h4>
<button className="rounded-lg px-2.5 py-1.5 text-xs font-medium bg-zinc-900 hover:bg-zinc-800" style={{}}>Live</button>
</div>
<div className="space-y-3 max-h-120 overflow-y-auto pr-1">
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05b8d217-cbbf-409b-a1ff-f4515ea6aab3_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Lena</span> This edit is wild!</p>
<p className="text-xs text-zinc-500" style={{}}>2m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Marco</span> Subscribed. More like this please.</p>
<p className="text-xs text-zinc-500" style={{}}>7m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a923c29b-fee0-4c67-9737-34ddbce2dc31_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Yui</span> The depth looks amazing.</p>
<p className="text-xs text-zinc-500" style={{}}>15m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2893445e-5489-4dcc-b2ce-184eea0a9e95_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Alex</span> Great cinematography techniques here!</p>
<p className="text-xs text-zinc-500" style={{}}>18m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5d61e53b-2050-4b51-93a5-176f90ba5abd_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Sarah</span> Just shared this with my team.</p>
<p className="text-xs text-zinc-500" style={{}}>22m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f52b9e1e-c3e8-4844-b3c5-28aacdc6b434_320w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Jake</span> Can you do a tutorial on this setup?</p>
<p className="text-xs text-zinc-500" style={{}}>25m</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</section></div>

<section className="pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-indigo-950 text-indigo-400 ring-indigo-800" style={{}}>
<svg className="lucide lucide-signal h-4.5 w-4.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Adaptive Streaming</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>HLS playback for smooth viewing on any device.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-indigo-950 text-indigo-400 ring-indigo-800" style={{}}>
<svg className="lucide lucide-database h-4.5 w-4.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Unlimited Library</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>Store videos securely without worrying about caps.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-indigo-950 text-indigo-400 ring-indigo-800" style={{}}>
<svg className="lucide lucide-download h-4.5 w-4.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Offline Downloads</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>Let fans save videos for travel or spotty Wi‑Fi.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center bg-indigo-950 text-indigo-400 ring-indigo-800" style={{}}>
<svg className="lucide lucide-shield h-4.5 w-4.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Mature Filters</h3>
</div>
<p className="mt-2 text-sm text-zinc-400" style={{}}>Granular controls to keep viewing safe and relevant.</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden pt-20 pb-20">
<div className="max-w-7xl sm:px-6 lg:px-8 relative z-10 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-6">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Browse every kind of content</h2>
<p className="text-zinc-400 mt-2" style={{}}>From quick hits to deep dives, curated by a global creator network.</p>
</div>
<div className="grid gap-5 lg:grid-cols-3">
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<img alt="shorts" className="ring-1 w-full ring-zinc-800 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1fa48c7-ba18-42bb-8f81-ba14e39bc0dd_800w.jpg" style={{}}/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Quick Shorts</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Snackable vertical stories that punch above their length.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<img alt="global" className="ring-1 w-full ring-zinc-800 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e3029fb-5efd-4148-a405-7f85d6f6954c_3840w.jpg" style={{}}/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Global Collections</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Stream culture, tech, and lifestyle from anywhere.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<div className="grid grid-cols-4 gap-3">
<img alt="game1" className="ring-1 h-20 w-full ring-zinc-800 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b42f534-53a3-4932-8ea3-0f2ef6c47e8e_320w.jpg" style={{}}/>
<img alt="game2" className="rounded-xl ring-1 object-cover h-20 w-full ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e3e53f-e4cc-4941-8fa1-f22b5b9379f1_320w.jpg" style={{}}/>
<img alt="game3" className="rounded-xl ring-1 object-cover h-20 w-full ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/256db67a-9160-4421-b6ad-10cd2d386754_320w.jpg" style={{}}/>
<img alt="game4" className="ring-1 h-20 w-full ring-zinc-800 object-cover rounded-xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1072397-bcfa-4bcf-ab09-815ad1a8d16e_320w.jpg" style={{}}/>
</div>
<h3 className="text-xl font-semibold tracking-tight mt-4">Free Games</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Play and stream your sessions directly to fans.</p>
<a className="inline-flex items-center gap-1 hover:text-indigo-300 text-sm font-medium text-indigo-400 mt-3 mb-10" href="#" style={{}}>
          Download Hub
          <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a><div className="relative overflow-hidden lg:rounded-3xl hover:border-indigo-400/50 transition-all min-h-[280px] flex flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] w-[320px] h-64 text-white bg-neutral-800/60 rounded-2xl">
<style>
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600&display=swap');
  </style>
<div className="lg:p-8 grow bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/02473057-6060-440e-a47e-2532cb86b2ae_800w.jpg)] bg-cover pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-2 uppercase text-xs font-normal text-white/50 tracking-widest mb-6 font-sans">
    Streaming
  </div>
<div className="space-y-4">
<h3 className="text-3xl font-semibold text-white tracking-tight" style={{fontFamily: '\'Bricolage Grotesque\', \'Arial Black\', sans-serif'}}>Stream Content</h3>
<p className="leading-relaxed text-sm text-white/70">
      Go live or share your screen in real time. Interact with your audience and showcase your expertise as it happens.
    </p>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="text-center">
<div className="text-2xl font-semibold" style={{fontFamily: '\'Bricolage Grotesque\', \'Arial Black\', sans-serif'}}>Live</div>
<div className="text-xs text-white/50 uppercase tracking-wide font-sans">Status</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold" style={{fontFamily: '\'Bricolage Grotesque\', \'Arial Black\', sans-serif'}}>324</div>
<div className="text-xs text-white/50 uppercase tracking-wide font-sans">Viewers</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<img alt="podcasts" className="ring-1 w-full ring-zinc-800 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05a1d91c-0f67-4afe-a92c-5423dbacb38b_800w.jpg" style={{}}/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Podcast Station</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Record long-form conversations and publish in one tap.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<img alt="ebooks" className="rounded-2xl ring-1 w-full object-cover ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee6688ae-f34b-4c9c-9c4e-7230c1b295d4_800w.jpg" style={{}}/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Multilingual eBooks</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Documentaries with companion reading across languages.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21] rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-xl" style={{}}>
<img alt="nature" className="ring-1 w-full ring-zinc-800 object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f775e0-30e1-4e5d-8abb-9b91ec305174_800w.jpg" style={{}}/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Cinematic Nature</h3>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Slow TV: mountains, oceans, and ambient renders.</p>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/24c2884b-4d2b-4046-aad1-e60712a5eec0_3840w.jpg)] bg-cover pt-20 pb-20">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="ring-1 ring-zinc-800 bg-gradient-to-tl from-[#111318] to-[#1c1e21]/70 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-sm backdrop-blur-none" style={{}}>
<div className="text-center">
<span className="inline-flex items-center gap-2 text-xs text-zinc-300 bg-zinc-950 border-zinc-800 border rounded-full pt-1 pr-3 pb-1 pl-3" style={{}}>
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Monetize in under 10 minutes
              </span>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold">How FlowCast works</h2>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="ring-1 ring-zinc-800 bg-slate-50/5 rounded-2xl pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="flex items-center gap-2 text-zinc-300" style={{}}>
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>1</span>
<span className="font-medium">Sign up</span>
</div>
<p className="text-sm text-zinc-400 mt-1" style={{}}>Create your creator profile.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-slate-50/5 rounded-2xl pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="flex items-center gap-2 text-zinc-300" style={{}}>
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>2</span>
<span className="font-medium">Upload video</span>
</div>
<p className="mt-1 text-sm text-zinc-400" style={{}}>We auto-transcode and optimize.</p>
</div>
<div className="ring-1 ring-zinc-800 bg-slate-50/5 rounded-2xl pt-4 pr-4 pb-4 pl-4" style={{}}>
<div className="flex items-center gap-2 text-zinc-300" style={{}}>
<span className="h-7 w-7 rounded-lg ring-1 flex items-center justify-center text-xs font-medium bg-black ring-zinc-800 text-zinc-100" style={{}}>3</span>
<span className="font-medium">Earn</span>
</div>
<p className="mt-1 text-sm text-zinc-400" style={{}}>Revenue from views, tips, and subs.</p>
</div>
</div>
<div className="mt-6">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-zinc-800" style={{}}>
<img alt="creator preview" className="w-full object-cover aspect-video" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bd653881-d87a-48fe-a362-d5264a06b95b_800w.jpg"/>
<button className="absolute inset-0 m-auto h-14 w-14 rounded-full backdrop-blur flex items-center justify-center shadow-md bg-black/90 hover:bg-black">
<svg className="lucide lucide-play h-6 w-6 text-zinc-100" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl bg-gradient-to-br p-6 shadow-sm ring-1 lg:col-span-1 from-indigo-400 to-violet-400 text-black ring-white/10" style={{}}>
<h3 className="text-2xl tracking-tight font-semibold">Start Uploading for Free</h3>
<p className="mt-2 text-sm text-indigo-900" style={{}}>No credit card required. Upgrade only when you grow.</p>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-black/95 text-zinc-100 hover:bg-black" href="#" style={{}}>
<svg className="lucide lucide-upload h-4 w-4" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                Create Account
              </a>
<a className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium ring-1 bg-black/10 text-black ring-black/20 hover:bg-black/15" href="#">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                See Pricing
              </a>
</div>
</div>
<div className="ring-1 lg:col-span-2 ring-zinc-800 bg-gradient-to-t from-slate-900/10 to-slate-700/30 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<h4 className="text-lg tracking-tight font-semibold">Latest on FlowCast</h4>
<a className="text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#" style={{}}>View all</a>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="flex gap-3">
<img alt="dev" className="h-20 w-28 rounded-xl object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0326368c-0ab0-4171-ba13-5f6b2fa02685_320w.jpg" style={{}}/>
<div className="min-w-0">
<p className="text-sm font-medium truncate">Building a motion rig at home</p>
<p className="text-xs text-zinc-400" style={{}}>Rhea Atlas • 5:03</p>
</div>
</div>
<div className="flex gap-3">
<img alt="mountains" className="h-20 w-28 rounded-xl object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46db39e3-1adc-4f2a-b1d4-ebc2a008924a_800w.jpg" style={{}}/>
<div className="min-w-0">
<p className="text-sm font-medium truncate">Clouds over the granite ridge</p>
<p className="text-xs text-zinc-400" style={{}}>Tomo • 2:14</p>
</div>
</div>
<div className="flex gap-3">
<img alt="studio" className="h-20 w-28 rounded-xl object-cover ring-1 ring-zinc-800" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a086201b-fa14-4445-bdc4-551f2de5542f_320w.jpg" style={{}}/>
<div className="min-w-0">
<p className="text-sm font-medium truncate">Studio lighting: soft vs hard</p>
<p className="text-xs text-zinc-400" style={{}}>Devon Ray • 7:42</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Frequently Asked Questions</h2>
<div className="mt-6 grid gap-4 md:grid-cols-2">

<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex faq-toggle pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<span className="text-sm font-medium text-left">How do I start uploading videos?</span>
<svg className="lucide lucide-chevron-up lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="px-4 pb-4">
<p className="text-sm text-zinc-400" style={{}}>Create a free account, verify your email, then drag-and-drop files from your desktop or import from a link.</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left">Is it free to join?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>Yes. You can upload and publish for free. Paid plans unlock advanced analytics and higher limits.</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left">Can I upload in 4K or HDR?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>Absolutely. We transcode to multiple qualities including 4K with HDR passthrough for supported devices.</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left">How and when do I get paid?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>Payouts run weekly to your connected account once you cross the minimum threshold.</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left">What content is allowed?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>Original videos you own the rights to. See our community guidelines for details.</p>
</div>
</div>
<div className="rounded-2xl ring-1 shadow-sm bg-black ring-zinc-800" style={{}}>
<button className="w-full flex items-center justify-between px-4 py-3 faq-toggle">
<span className="text-sm font-medium text-left">Do I get analytics for my videos?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-zinc-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="px-4 pb-4 hidden">
<p className="text-sm text-zinc-400" style={{}}>Yes. Track views, watch time, retention, and revenue by source in real time.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-10 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="ring-1 ring-zinc-800 bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-slate-900 to-slate-700/10 rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{}}>
<div className="grid gap-6 md:grid-cols-4">
<div className="">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 flex items-center justify-center ring-1 to-violet-400 ring-white/5" style={{}}>
<svg className="lucide lucide-play h-5 w-5 text-black" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="text-lg tracking-tight font-semibold">FlowCast</span>
</div>
<p className="mt-3 text-sm text-zinc-400" style={{}}>Create boldly. Earn fairly.</p>
<div className="mt-4 flex items-center gap-3">
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#" style={{}}>
<svg className="lucide lucide-twitter h-4.5 w-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#" style={{}}>
<svg className="lucide lucide-youtube h-4.5 w-4.5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full ring-1 flex items-center justify-center ring-zinc-800 hover:bg-zinc-950" href="#" style={{}}>
<svg className="lucide lucide-github h-4.5 w-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div className="">
<h5 className="text-sm font-medium">Product</h5>
<ul className="mt-3 space-y-2 text-sm text-zinc-400" style={{}}>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Features</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Changelog</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Status</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-medium">Company</h5>
<ul className="mt-3 space-y-2 text-sm text-zinc-400" style={{}}>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>About</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Careers</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Blog</a></li>
<li className=""><a className="hover:text-zinc-100" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="">
<h5 className="text-sm font-medium">Account</h5>
<div className="mt-3 flex gap-2">
<a className="inline-flex items-center gap-2 ring-1 ring-zinc-800 hover:bg-zinc-950 text-sm font-medium rounded-full pt-2 pr-3 pb-2 pl-3" href="#" style={{}}>
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                    Login
                  </a>
<button aria-label="Sign up" className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)] hover:shadow-[0_12px_20px_-6px_rgba(151,65, ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" role="button" style={{backgroundImage: 'linear-gradient(144deg,#AF40FF, #5B42F3 50%, #00DDEB)'}} type="button">
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[80px] w-full h-full transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] rounded-full pt-2 pr-4 pb-2 pl-4">
<svg className="lucide lucide-user-plus w-[16px] h-[16px]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"></path><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><circle cx="10" cy="7" r="4"></circle></svg>
<span className="">Sign In</span>
</span>
</button>
</div>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t pt-4 border-zinc-800" style={{}}>
<p className="text-xs text-zinc-400" style={{}}>© <span className="" id="year">2025</span> FlowCast, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-zinc-400" style={{}}>
<a className="hover:text-zinc-100" href="#" style={{}}>Privacy</a>
<a className="hover:text-zinc-100" href="#" style={{}}>Terms</a>
<a className="hover:text-zinc-100" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
