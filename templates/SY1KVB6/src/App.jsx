import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();

      // FAQ toggles
      document.querySelectorAll('.faq-toggle').forEach((btn) => {
        btn.addEventListener('click', () => {
          const parent = btn.parentElement;
          const content = parent.querySelector('div');
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
  }, []);

  return (
    <>
      

<div className="relative">

<header className="sticky top-4 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" style={{animation: 'fadeIn 0.6s ease-out both'}}>
<div className="h-14 flex items-center justify-between rounded-full border border-neutral-200/80 bg-white/70 backdrop-blur-md px-2.5 shadow-sm">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center rounded-xl border border-neutral-200 h-10 w-10">

<span className="text-sm font-medium tracking-tight">FK</span>
</div>
<span className="text-base font-medium tracking-tight">FrameKit</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
<a className="transition-colors hover:text-neutral-900" href="#" title="Link disabled in preview mode">Product</a>
<a className="transition-colors hover:text-neutral-900" href="#" title="Link disabled in preview mode">Studio</a>
<a className="transition-colors hover:text-neutral-900" href="#" title="Link disabled in preview mode">Pricing</a>
<a className="transition-colors hover:text-neutral-900" href="#" title="Link disabled in preview mode">Stories</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 text-sm rounded-md text-neutral-600 hover:text-neutral-900 transition-colors">Log in</button>
<button aria-label="Sign up" className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-900 text-white transition-all hover:-translate-y-0.5 hover:shadow-md px-4 py-2 text-sm" role="button" type="button">
<span>Sign up</span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="relative pt-0 pb-12">

<div className="absolute inset-0 -z-10">

<div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden" style={{animation: 'fadeIn 0.8s ease-out both'}}>
<div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full blur-3xl" style={{opacity: '.35', background: 'radial-gradient(closest-side, rgba(99,102,241,0.7), rgba(99,102,241,0))', animation: 'blobMoveA 22s ease-in-out infinite alternate', willChange: 'transform'}}></div>
<div className="absolute top-20 -left-10 h-72 w-72 rounded-full blur-3xl" style={{opacity: '.28', background: 'radial-gradient(closest-side, rgba(16,185,129,0.6), rgba(16,185,129,0))', animation: 'blobMoveB 24s ease-in-out infinite alternate', animationDelay: '-3s', willChange: 'transform'}}></div>
<div className="absolute -bottom-10 left-1/3 h-96 w-96 rounded-full blur-3xl" style={{opacity: '.25', background: 'radial-gradient(closest-side, rgba(59,130,246,0.55), rgba(59,130,246,0))', animation: 'blobMoveA 26s ease-in-out infinite alternate', animationDelay: '-6s', willChange: 'transform'}}></div>
<div className="absolute -bottom-16 right-0 h-80 w-80 rounded-full blur-3xl" style={{opacity: '.25', background: 'radial-gradient(closest-side, rgba(236,72,153,0.5), rgba(236,72,153,0))', animation: 'blobMoveB 28s ease-in-out infinite alternate', animationDelay: '-9s', willChange: 'transform'}}></div>
</div>

<div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-[480px] w-[1200px] rounded-full blur-3xl" style={{background: 'radial-gradient(60% 60% at 50% 20%, rgba(10,132,255,0.12), rgba(10,132,255,0) 60%)', animation: 'blurIn 1s ease-out both'}}></div>
</div>
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28">
<div className="max-w-3xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs shadow-sm text-neutral-700" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-600">
<svg className="lucide lucide-trending-up h-3.5 w-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</span>
<span className="font-medium">950k+ creators earning with FrameKit</span>
</div>
<h1 className="mt-4 mb-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.15s'}}>Make Clips. Share. Earn.</h1>
<p className="mt-3 text-base sm:text-lg text-neutral-600" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.25s'}}>Turn your videos into revenue. A focused home to publish, grow, and get paid—without distractions.</p>
<div className="mt-12 mb-14 flex flex-col sm:flex-row items-center gap-3" style={{animation: 'fadeInUp 0.8s ease-out both', animationDelay: '.35s'}}>
<button aria-label="Upload clip" className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-900 text-white transition-all hover:-translate-y-0.5 hover:shadow-md px-6 py-3 text-sm" role="button" type="button">
<svg className="lucide lucide-upload h-4 w-4" data-lucide="upload" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
<span>Upload Clip</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-50 hover:-translate-y-0.5" href="#">
<svg className="lucide lucide-wallet h-4.5 w-4.5" data-lucide="wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span>View Earnings</span>
</a>
</div>
</div>

<div className="relative" style={{animation: 'fadeIn 0.9s ease-out both', animationDelay: '.45s'}}>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<aside className="order-2 lg:order-1 lg:col-span-2">
<div className="space-y-3">
<button className="w-full overflow-hidden rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<img alt="VR clip" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-full overflow-hidden rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<img alt="coding" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-full overflow-hidden rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<img alt="workspace" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-full overflow-hidden rounded-xl border border-neutral-200 hover:border-neutral-300 transition-colors">
<img alt="nebula" className="h-20 w-full object-cover" src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</aside>

<main className="order-1 lg:order-2 lg:col-span-7">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200">
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/3dglassherobg-xhxFCKvVSQv5b7qPD9xIZ5yC" width="100%"></iframe></div>
<button aria-label="Play video" className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 shadow-sm hover:bg-white" data-video-src="https://cdn.midjourney.com/video/ce0968ea-78ec-47f9-b972-80efa98ef4a6/0.mp4" onclick="(function(btn){try{const container=btn.closest('div.relative');if(!container)return;const img=container.querySelector('img.aspect-video');let video=container.querySelector('video[data-inline-player]');if(!video){video=document.createElement('video');video.setAttribute('data-inline-player','');video.setAttribute('playsinline','');video.setAttribute('controls','');video.setAttribute('autoplay','');video.muted=true;video.className=img?img.className:'aspect-video w-full object-cover';video.src=btn.getAttribute('data-video-src');if(img){video.poster=img.currentSrc||img.src;img.replaceWith(video);}else{container.prepend(video);}}const p=video.play();if(p&amp;&amp;p.catch){p.catch(function(){video.muted=true;video.play();});}btn.style.display='none';}catch(e){console.error(e);}})(this)" style={{display: 'none'}} type="button">
<svg className="lucide lucide-play h-6 w-6 text-neutral-900" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="mt-3 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight">Exploring Spatial Video</h3>
<p className="text-sm text-neutral-500">by <span className="font-medium text-neutral-800">Ari Nova</span> • 8:21</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-50">
<svg className="lucide lucide-thumbs-up h-3.5 w-3.5" data-lucide="thumbs-up" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
                      4.2k
                    </button>
<button className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-800 transition-colors hover:bg-neutral-50">
<svg className="lucide lucide-bookmark h-3.5 w-3.5" data-lucide="bookmark" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                      Save
                    </button>
</div>
</div>
</main>

<aside className="order-3 lg:col-span-3">
<div className="mb-2 flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight">Activity</h4>
<button className="rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-medium transition-colors hover:bg-neutral-50">Live</button>
</div>
<div className="max-h-80 space-y-3 overflow-y-auto pr-1">
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Lena</span> This edit is wild!</p>
<p className="text-xs text-neutral-500">2m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Marco</span> Subscribed. More like this please.</p>
<p className="text-xs text-neutral-500">7m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Yui</span> The depth looks amazing.</p>
<p className="text-xs text-neutral-500">15m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Alex</span> Great cinematography techniques here!</p>
<p className="text-xs text-neutral-500">18m</p>
</div>
</div>
<div className="flex gap-3">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm"><span className="font-medium">Sarah</span> Just shared this with my team.</p>
<p className="text-xs text-neutral-500">22m</p>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.05s'}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-signal h-4.5 w-4.5" data-lucide="signal" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Adaptive Streaming</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">HLS playback for smooth viewing on any device.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-database h-4.5 w-4.5" data-lucide="database" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Unlimited Library</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Store videos securely without worrying about caps.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.15s'}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-download h-4.5 w-4.5" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Offline Downloads</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Let fans save videos for travel or spotty Wi‑Fi.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.2s'}}>
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-lg border border-blue-200 bg-blue-50 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-shield h-4.5 w-4.5" data-lucide="shield" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<h3 className="font-semibold tracking-tight">Safety Controls</h3>
</div>
<p className="mt-2 text-sm text-neutral-600">Granular filters to keep viewing safe and relevant.</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden pt-20 pb-20">
<div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-6" style={{animation: 'fadeInUp 0.7s ease-out both'}}>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Browse every kind of content</h2>
<p className="mt-2 text-neutral-600">From quick hits to deep dives, curated by a global creator network.</p>
</div>
<div className="grid gap-5 lg:grid-cols-3">
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.05s'}}>
<img alt="shorts" className="w-full rounded-2xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Quick Shorts</h3>
<p className="mt-1 text-sm text-neutral-600">Snackable vertical stories that punch above their length.</p>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.1s'}}>
<img alt="global" className="w-full rounded-2xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Global Collections</h3>
<p className="mt-1 text-sm text-neutral-600">Stream culture, tech, and lifestyle from anywhere.</p>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.15s'}}>
<div className="grid grid-cols-4 gap-3">
<img alt="game1" className="h-20 w-full rounded-xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="game2" className="h-20 w-full rounded-xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="game3" className="h-20 w-full rounded-xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="game4" className="h-20 w-full rounded-xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<h3 className="mt-4 text-xl font-semibold tracking-tight">Free Games</h3>
<p className="mt-1 text-sm text-neutral-600">Play and stream your sessions directly to fans.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
            Download Hub
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="relative mt-6 flex h-64 w-full min-w-0 flex-col rounded-2xl border border-neutral-200 bg-neutral-50/60 text-neutral-900 shadow-sm">
<div className="grow rounded-2xl bg-[url(https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover p-6">
<div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wider text-white/70">Streaming</div>
<div className="space-y-4">
<h3 className="text-3xl font-semibold tracking-tight text-white">Stream Content</h3>
<p className="text-sm leading-relaxed text-white/80">Go live or share your screen in real time. Interact and showcase your expertise as it happens.</p>
<div className="grid grid-cols-2 gap-4 pt-2">
<div className="text-center">
<div className="text-2xl font-semibold text-white">Live</div>
<div className="text-xs uppercase tracking-wide text-white/70">Status</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold text-white">324</div>
<div className="text-xs uppercase tracking-wide text-white/70">Viewers</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.2s'}}>
<img alt="podcasts" className="w-full rounded-2xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Podcast Station</h3>
<p className="mt-1 text-sm text-neutral-600">Record long-form conversations and publish in one tap.</p>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.25s'}}>
<img alt="ebooks" className="w-full rounded-2xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Multilingual eBooks</h3>
<p className="mt-1 text-sm text-neutral-600">Documentaries with companion reading across languages.</p>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.3s'}}>
<img alt="nature" className="w-full rounded-2xl border border-neutral-200 object-cover" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<h3 className="mt-4 text-xl tracking-tight font-semibold">Cinematic Nature</h3>
<p className="mt-1 text-sm text-neutral-600">Slow TV: mountains, oceans, and ambient renders.</p>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-20 bg-[url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2400&amp;auto=format&amp;fit=crop)] bg-cover">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-neutral-200/60 bg-white/80 p-5 shadow-sm backdrop-blur-md">
<div className="text-center">
<span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700" style={{animation: 'fadeInUp 0.6s ease-out both'}}>
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Start earning in minutes
          </span>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight font-semibold" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.1s'}}>How FrameKit works</h2>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-neutral-200 bg-white p-4" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.1s'}}>
<div className="flex items-center gap-2 text-neutral-800">
<span className="h-7 w-7 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-medium flex items-center justify-center">1</span>
<span className="font-medium">Sign up</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Create your creator profile.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-4" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.15s'}}>
<div className="flex items-center gap-2 text-neutral-800">
<span className="h-7 w-7 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-medium flex items-center justify-center">2</span>
<span className="font-medium">Upload video</span>
</div>
<p className="mt-1 text-sm text-neutral-600">We auto-transcode and optimize.</p>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-4" style={{animation: 'fadeInUp 0.6s ease-out both', animationDelay: '.2s%'}}>
<div className="flex items-center gap-2 text-neutral-800">
<span className="h-7 w-7 rounded-lg border border-neutral-200 bg-neutral-50 text-xs font-medium flex items-center justify-center">3</span>
<span className="font-medium">Earn</span>
</div>
<p className="mt-1 text-sm text-neutral-600">Revenue from views, tips, and subs.</p>
</div>
</div>
<div className="mt-6">
<div className="relative overflow-hidden rounded-2xl border border-neutral-200">
<img alt="creator preview" className="aspect-video w-full object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{animation: 'fadeIn 0.8s ease-out both'}}/>
<button className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/90 backdrop-blur border border-neutral-200 shadow-sm hover:bg-white transition-colors">
<svg className="lucide lucide-play h-6 w-6 text-neutral-900" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pt-10 pb-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-neutral-200 bg-[linear-gradient(180deg,rgba(10,132,255,0.12),rgba(10,132,255,0.06))] p-6 shadow-sm text-neutral-900" style={{animation: 'fadeInUp 0.7s ease-out both'}}>
<h3 className="text-2xl tracking-tight font-semibold">Start Uploading for Free</h3>
<p className="mt-2 text-sm text-neutral-700">No credit card required. Upgrade only when you grow.</p>
<div className="mt-5 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md" href="#">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
            Create Account
          </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-50" href="#">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            See Pricing
          </a>
</div>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm lg:col-span-2" style={{animation: 'fadeInUp 0.7s ease-out both', animationDelay: '.1s'}}>
<div className="flex items-center justify-between">
<h4 className="text-lg font-semibold tracking-tight">Latest on FrameKit</h4>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">View all</a>
</div>
<div className="mt-4 grid gap-4 md:grid-cols-3">
<div className="flex gap-3">
<img alt="dev" className="h-20 w-28 rounded-xl object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium">Building a motion rig at home</p>
<p className="text-xs text-neutral-600">Rhea Atlas • 5:03</p>
</div>
</div>
<div className="flex gap-3">
<img alt="mountains" className="h-20 w-28 rounded-xl object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium">Clouds over the granite ridge</p>
<p className="text-xs text-neutral-600">Tomo • 2:14</p>
</div>
</div>
<div className="flex gap-3">
<img alt="studio" className="h-20 w-28 rounded-xl object-cover border border-neutral-200" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0">
<p className="truncate text-sm font-medium">Studio lighting: soft vs hard</p>
<p className="text-xs text-neutral-600">Devon Ray • 7:42</p>
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

<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">How do I start uploading videos?</span>
<svg className="lucide lucide-chevron-up h-5 w-5 text-neutral-500" data-lucide="chevron-up" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="px-4 pb-4">
<p className="text-sm text-neutral-600">Create a free account, verify your email, then drag-and-drop files from your desktop or import from a link.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">Is it free to join?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-4 pb-4">
<p className="text-sm text-neutral-600">Yes. You can upload and publish for free. Paid plans unlock advanced analytics and higher limits.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">Can I upload in 4K or HDR?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-4 pb-4">
<p className="text-sm text-neutral-600">Absolutely. We transcode to multiple qualities including 4K with HDR passthrough for supported devices.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">How and when do I get paid?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-4 pb-4">
<p className="text-sm text-neutral-600">Payouts run weekly to your connected account once you cross the minimum threshold.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">What content is allowed?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-4 pb-4">
<p className="text-sm text-neutral-600">Original videos you own the rights to. See our community guidelines for details.</p>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm">
<button className="faq-toggle w-full flex items-center justify-between px-4 py-3">
<span className="text-sm font-medium text-left">Do I get analytics for my videos?</span>
<svg className="lucide lucide-chevron-down h-5 w-5 text-neutral-500" data-lucide="chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden px-4 pb-4">
<p className="text-sm text-neutral-600">Yes. Track views, watch time, retention, and revenue by source in real time.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-10 pb-12">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
<div className="grid gap-6 md:grid-cols-4">
<div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl border border-neutral-200 bg-white flex items-center justify-center">
<svg className="lucide lucide-play h-4.5 w-4.5 text-neutral-900" data-lucide="play" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight">FrameKit</span>
</div>
<p className="mt-3 text-sm text-neutral-600">Create boldly. Earn fairly.</p>
<div className="mt-4 flex items-center gap-3">
<a className="h-9 w-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center transition-colors hover:bg-neutral-50" href="#">
<svg className="lucide lucide-twitter h-4.5 w-4.5" data-lucide="twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center transition-colors hover:bg-neutral-50" href="#">
<svg className="lucide lucide-youtube h-4.5 w-4.5" data-lucide="youtube" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="h-9 w-9 rounded-full border border-neutral-200 bg-white flex items-center justify-center transition-colors hover:bg-neutral-50" href="#">
<svg className="lucide lucide-github h-4.5 w-4.5" data-lucide="github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
<div>
<h5 className="text-sm font-medium">Product</h5>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="transition-colors hover:text-neutral-900" href="#">Features</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Pricing</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Changelog</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Status</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium">Company</h5>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li><a className="transition-colors hover:text-neutral-900" href="#">About</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Blog</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-medium">Account</h5>
<div className="mt-3 flex gap-2">
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-sm font-medium transition-colors hover:bg-neutral-50" href="#">
<svg className="lucide lucide-log-in h-4 w-4" data-lucide="log-in" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                Login
              </a>
<button aria-label="Sign up" className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-md" role="button" type="button">
<svg className="lucide lucide-user-plus h-4 w-4" data-lucide="user-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                Sign Up
              </button>
</div>
</div>
</div>
<div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-neutral-200 pt-4 sm:flex-row">
<p className="text-xs text-neutral-600">© <span id="year">2025</span> FrameKit, Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-neutral-600">
<a className="transition-colors hover:text-neutral-900" href="#">Privacy</a>
<a className="transition-colors hover:text-neutral-900" href="#">Terms</a>
<a className="transition-colors hover:text-neutral-900" href="#">Cookies</a>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
