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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="min-h-screen w-full p-3 sm:p-4 md:p-6 lg:p-8">
<main className="relative mx-auto w-full max-w-[110rem] overflow-hidden rounded-[2rem] border border-white/70 bg-[#f3f3f1] shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_30px_80px_rgba(0,0,0,0.08)]">
<div className="pointer-events-none absolute inset-0 opacity-[0.36]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(20,20,20,0.055) 1px, transparent 0)', backgroundSize: '12px 12px'}}></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white/80 via-white/35 to-transparent"></div>
<div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-white/60 blur-3xl"></div>
<section className="relative px-4 pb-8 pt-6 sm:px-6 md:px-8 lg:px-10 lg:pb-12 lg:pt-8">
<div className="mx-auto flex max-w-3xl justify-center">
<nav className="flex w-full max-w-2xl items-center justify-between rounded-full border border-black/5 bg-white/80 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:px-5">
<div className="flex items-center gap-3">
<div className="text-sm font-semibold tracking-tight text-black">A9</div>
</div>
<div className="hidden items-center gap-7 text-sm font-medium text-neutral-600 sm:flex">
<a className="inline-flex items-center gap-1.5 transition hover:text-black" href="#">
<span>Solutions</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" style={{color: '#737373'}} width="16"></iconify-icon>
</a>
<a className="transition hover:text-black" href="#">Products</a>
<a className="transition hover:text-black" href="#">Pricing</a>
</div>
<a className="rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition hover:bg-neutral-800 sm:px-5 sm:py-2.5" href="#">
              Start free trial
            </a>
</nav>
</div>
<div className="relative mx-auto mt-14 max-w-5xl text-center sm:mt-16 lg:mt-20">
<div className="mx-auto inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/75 px-3 py-1.5 text-xs font-medium text-neutral-600 shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur">
<span className="flex h-5 w-5 items-center justify-center rounded-md bg-[#ff6d3a] text-xs font-semibold text-white">Y</span>
<span>Backed by real store data</span>
</div>
<h1 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-[0.92] tracking-tight text-neutral-950 sm:text-5xl lg:text-7xl">
            Built around how your store actually sells
          </h1>
<p className="mx-auto mt-5 max-w-2xl text-base font-normal leading-7 text-neutral-600 sm:text-lg">
            Stop guessing what works. Track behavior, predict demand, and optimize conversions with automation that adapts to your customers.
          </p>
<div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
<a className="inline-flex items-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-[0_12px_28px_rgba(0,0,0,0.18)] transition hover:bg-neutral-800" href="#">
              Start free trial – 14 days
            </a>
<a className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-neutral-700 shadow-[0_8px_20px_rgba(0,0,0,0.04)] backdrop-blur transition hover:bg-white" href="#">
              View live demo
            </a>
</div>
<div className="pointer-events-none absolute -left-6 top-8 hidden xl:block">
<div className="relative">
<img alt="" className="absolute -left-2 top-0 h-12 w-12 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="ml-10 mt-12 rounded-[1.25rem] border border-black/5 bg-white/88 px-4 py-3 text-base font-normal text-neutral-600 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur">
                Sales jumped overnight 📈
              </div>
</div>
</div>
<div className="pointer-events-none absolute left-20 top-24 hidden xl:block">
<img alt="" className="h-12 w-12 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
</div>
<div className="pointer-events-none absolute left-24 top-60 hidden xl:flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="rounded-[1.1rem] border border-black/5 bg-white/88 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.06)]">
<iconify-icon height="20" icon="solar:menu-dots-linear" style={{color: '#d4d4d4'}} width="20"></iconify-icon>
</div>
</div>
<div className="pointer-events-none absolute -right-4 top-8 hidden xl:block">
<div className="relative">
<img alt="" className="absolute right-4 top-14 h-12 w-12 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<img alt="" className="absolute left-6 top-0 h-10 w-10 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="mr-14 mt-16 rounded-[1.25rem] border border-black/5 bg-white/88 px-4 py-3 text-base font-normal text-neutral-600 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur whitespace-nowrap">
                This insight is crazy useful 🔥
              </div>
</div>
</div>
<div className="pointer-events-none absolute right-14 top-56 hidden xl:block">
<div className="relative">
<img alt="" className="mt-8 h-14 w-14 rounded-full object-cover shadow-[0_10px_24px_rgba(0,0,0,0.12)]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div className="absolute -left-36 top-0 rounded-[1.25rem] border border-black/5 bg-white/88 px-4 py-3 text-base font-normal text-neutral-600 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur whitespace-nowrap">
                Checkout drop fixed! ✅
              </div>
</div>
</div>
<div className="pointer-events-none absolute left-1/2 top-[22rem] hidden -translate-x-[24rem] xl:block">
<div className="rounded-[1.25rem] border border-black/5 bg-white/88 px-4 py-3 text-base font-normal text-neutral-600 shadow-[0_12px_30px_rgba(0,0,0,0.06)] backdrop-blur">
              Finally understand my customers 💬
            </div>
</div>
</div>
<div className="relative mx-auto mt-12 max-w-[108rem] overflow-hidden rounded-[2rem] border border-white/70 bg-[#ececea] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] sm:mt-14 lg:mt-16">
<div className="grid grid-cols-1 xl:grid-cols-[1fr_16rem_1fr]">
<div className="relative min-h-[32rem] p-5 sm:p-6 lg:p-8">
<div className="mx-auto mt-12 max-w-xl rounded-[1.5rem] border border-white/80 bg-white/88 shadow-[0_22px_50px_rgba(0,0,0,0.06)] backdrop-blur">
<div className="divide-y divide-neutral-200/80">
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-4">
<img alt="" className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-neutral-900">Emma Carter</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
<iconify-icon height="12" icon="solar:check-circle-linear" style={{color: 'white'}} width="12"></iconify-icon>
</span>
</div>
<p className="text-xs text-neutral-500">emma@northlane.co</p>
</div>
</div>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">O-54218</span>
</div>
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-4">
<img alt="" className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-neutral-900">Liam Brooks</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white">
<iconify-icon height="12" icon="solar:star-linear" style={{color: 'white'}} width="12"></iconify-icon>
</span>
</div>
<p className="text-xs text-neutral-500">liam@brooksetc.com</p>
</div>
</div>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">O-54241</span>
</div>
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-4">
<div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-200 text-sm font-medium text-violet-800">AR</div>
<div>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-neutral-900">Ava Reed</span>
</div>
<p className="text-xs text-neutral-500">ava@reedstudio.com</p>
</div>
</div>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">O-54267</span>
</div>
<div className="flex items-center justify-between px-5 py-4">
<div className="flex items-center gap-4">
<img alt="" className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<div>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-neutral-900">Noah Kim</span>
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-500 text-white">
<iconify-icon height="12" icon="solar:magic-stick-3-linear" style={{color: 'white'}} width="12"></iconify-icon>
</span>
</div>
<p className="text-xs text-neutral-500">noah@pixelmarket.io</p>
</div>
</div>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">O-54302</span>
</div>
</div>
</div>
<div className="mx-auto mt-5 grid max-w-xl grid-cols-3 gap-3">
<div className="rounded-[1.25rem] border border-white/80 bg-white/72 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.04)]">
<div className="text-xs font-medium text-neutral-500">Sessions</div>
<div className="mt-2 text-lg font-semibold text-neutral-900">12.8k</div>
</div>
<div className="rounded-[1.25rem] border border-white/80 bg-white/72 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.04)]">
<div className="text-xs font-medium text-neutral-500">Add to cart</div>
<div className="mt-2 text-lg font-semibold text-neutral-900">2.4k</div>
</div>
<div className="rounded-[1.25rem] border border-white/80 bg-white/72 p-4 shadow-[0_14px_30px_rgba(0,0,0,0.04)]">
<div className="text-xs font-medium text-neutral-500">Checkout</div>
<div className="mt-2 text-lg font-semibold text-neutral-900">1.8k</div>
</div>
</div>
</div>
<div className="relative min-h-[32rem] overflow-hidden border-y border-white/60 xl:border-x xl:border-y-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
<div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/70"></div>
<div className="absolute inset-y-4 left-1/2 w-24 -translate-x-1/2 rounded-full bg-gradient-to-b from-violet-300/45 via-pink-300/45 to-sky-300/45 blur-3xl"></div>
<div className="absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.85) 1px, transparent 1.5px)', backgroundSize: '10px 10px'}}></div>
<div className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black shadow-[0_18px_40px_rgba(0,0,0,0.22)]">
<div className="text-sm font-semibold tracking-tight text-white">A9</div>
</div>
<div className="absolute left-1/2 top-32 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-300/90 shadow-[0_0_20px_rgba(196,181,253,0.8)]"></div>
<div className="absolute left-[42%] top-52 h-1.5 w-1.5 rounded-full bg-pink-300/90 shadow-[0_0_20px_rgba(249,168,212,0.8)]"></div>
<div className="absolute left-[58%] top-72 h-2 w-2 rounded-full bg-sky-300/90 shadow-[0_0_20px_rgba(125,211,252,0.8)]"></div>
<div className="absolute left-[46%] bottom-24 h-1.5 w-1.5 rounded-full bg-amber-200/90 shadow-[0_0_20px_rgba(253,230,138,0.8)]"></div>
</div>
<div className="relative min-h-[32rem] p-5 sm:p-6 lg:p-8">
<div className="mx-auto mt-12 max-w-xl rounded-[1.5rem] border border-white/80 bg-white/92 p-5 shadow-[0_24px_56px_rgba(0,0,0,0.08)] backdrop-blur">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-5 w-5 rounded-full bg-neutral-100"></div>
<div className="h-2.5 w-20 rounded-full bg-neutral-100"></div>
<div className="h-2.5 w-16 rounded-full bg-neutral-100"></div>
</div>
<iconify-icon height="18" icon="solar:menu-dots-linear" style={{color: '#d4d4d4'}} width="18"></iconify-icon>
</div>
<div className="mt-6 grid gap-4">
<div className="rounded-[1.1rem] border border-neutral-100 bg-neutral-50/80 p-4">
<div className="flex items-start justify-between">
<div>
<p className="text-xs font-medium text-neutral-500">Conversion rate increase</p>
<div className="mt-2 flex items-end gap-3">
<span className="text-3xl font-semibold tracking-tight text-neutral-950">+24%</span>
<span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">up this week</span>
</div>
</div>
<div className="rounded-xl bg-emerald-100 p-2">
<iconify-icon height="18" icon="solar:graph-up-linear" style={{color: '#047857'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div className="rounded-[1.1rem] border border-neutral-100 bg-white p-4">
<p className="text-xs font-medium text-neutral-500">Predicted best-selling products</p>
<div className="mt-4 space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-800">Everyday Tote</span>
<span className="text-xs text-neutral-500">92% demand</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-[92%] rounded-full bg-neutral-900"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-800">Cloud Knit Set</span>
<span className="text-xs text-neutral-500">84% demand</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-[84%] rounded-full bg-neutral-700"></div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-neutral-800">Travel Bottle</span>
<span className="text-xs text-neutral-500">73% demand</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-[73%] rounded-full bg-neutral-500"></div>
</div>
</div>
</div>
<div className="rounded-[1.1rem] border border-neutral-100 bg-white p-4">
<p className="text-xs font-medium text-neutral-500">Funnel improvements</p>
<div className="mt-4 space-y-4">
<div>
<div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
<span>Product views</span>
<span>18.2k</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-full rounded-full bg-neutral-900"></div>
</div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
<span>Add to cart</span>
<span>2.4k</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-1/2 rounded-full bg-neutral-700"></div>
</div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
<span>Checkout started</span>
<span>1.8k</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-[42%] rounded-full bg-neutral-600"></div>
</div>
</div>
<div>
<div className="mb-1 flex items-center justify-between text-xs text-neutral-500">
<span>Completed</span>
<span>1.2k</span>
</div>
<div className="h-2 rounded-full bg-neutral-100">
<div className="h-2 w-[31%] rounded-full bg-emerald-500"></div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-[1.1rem] border border-neutral-100 bg-white p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-neutral-500">Revenue trend</p>
<p className="mt-1 text-lg font-medium text-neutral-900">$184,200</p>
</div>
<span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">+18.4%</span>
</div>
<div className="mt-5 h-32 rounded-[1rem] bg-gradient-to-b from-neutral-50 to-white p-3">
<div className="relative h-full w-full">
<div className="absolute inset-0">
<div className="flex h-full items-end gap-2">
<div className="h-[24%] flex-1 rounded-t-xl bg-neutral-200"></div>
<div className="h-[30%] flex-1 rounded-t-xl bg-neutral-200"></div>
<div className="h-[36%] flex-1 rounded-t-xl bg-neutral-200"></div>
<div className="h-[42%] flex-1 rounded-t-xl bg-neutral-300"></div>
<div className="h-[55%] flex-1 rounded-t-xl bg-neutral-300"></div>
<div className="h-[61%] flex-1 rounded-t-xl bg-neutral-400"></div>
<div className="h-[72%] flex-1 rounded-t-xl bg-neutral-500"></div>
<div className="h-[86%] flex-1 rounded-t-xl bg-neutral-900"></div>
</div>
</div>
<svg className="absolute inset-0 h-full w-full" viewbox="0 0 100 40">
<path d="M2 33 C12 31, 16 27, 24 26 S40 24, 48 21 S60 16, 68 15 S82 10, 98 4" fill="none" stroke="#10b981" strokeLinecap="round" strokeWidth="2.5"></path>
<circle cx="98" cy="4" fill="#10b981" r="2.5"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>

    </>
  );
}
