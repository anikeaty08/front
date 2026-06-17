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



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


      // Initialize icons
      lucide.createIcons();

      // Set year
      document.getElementById('y').textContent = new Date().getFullYear();

      // Simple "favorite" toggle demo
      document.querySelectorAll('button[aria-label="Favorite"]').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.classList.toggle('text-rose-500');
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px] hue-rotate-90 saturate-50"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qTiAlX0sxkuBOAiL7qHL"></div></div>

<header className="sticky top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/70 bg-white/80 border-b border-neutral-200 [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<nav className="hidden md:flex items-center gap-7 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors font-geist" href="#">Dogs</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#">Cats</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#">Birds</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="#">Small Pets</a>
</nav>
<a className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium" href="#">Pawsome</a>
<div className="flex items-center gap-3">
<button aria-label="Search" className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-sm font-geist">Search</span>
</button>
<button aria-label="Wishlist" className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<button aria-label="Cart" className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition relative">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 text-[10px] leading-none px-1.5 py-1 rounded-full bg-neutral-900 text-white font-geist">2</span>
</button>
<button className="md:hidden p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
<div className="grid lg:grid-cols-12 gap-8 items-stretch">
<div className="lg:col-span-12 [animation:fadeSlideIn_1s_ease-out_0.1s_both]">
<h1 className="text-[13vw] leading-[0.8] sm:text-[9rem] md:text-[10rem] lg:text-[11rem] tracking-tight text-neutral-900 font-playfair font-medium">Pawsome</h1>
</div>
<div className="lg:col-span-12 grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-8 rounded-3xl overflow-hidden relative [animation:fadeSlideIn_1s_ease-out_0.2s_both]">
<img alt="Happy dog running" className="w-full h-[300px] sm:h-[420px] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ce1e6bec-65f8-4065-b37f-d4fc224616d4_800w.jpg"/>
<div className="sm:p-6 flex pt-4 pr-4 pb-4 pl-4 absolute right-0 bottom-0 left-0 items-end justify-between">
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-geist">
                    Shop New
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-auto sm:right-4 sm:translate-x-0">
<div className="flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-2 py-2 shadow">
<button className="px-3 py-1.5 text-xs rounded-full bg-neutral-900 text-white font-geist">Food</button>
<button className="px-3 py-1.5 text-xs rounded-full hover:bg-neutral-100 font-geist">Toys</button>
<button className="px-3 py-1.5 text-xs rounded-full hover:bg-neutral-100 font-geist">Beds</button>
<button className="px-3 py-1.5 text-xs rounded-full hover:bg-neutral-100 font-geist">Care</button>
</div>
</div>
</div>
<div className="lg:col-span-4 rounded-3xl bg-white border border-neutral-200 p-5 sm:p-6 flex flex-col justify-between [animation:fadeSlideIn_1s_ease-out_0.3s_both]">
<div className="">
<h2 className="text-2xl sm:text-3xl tracking-tight font-playfair font-medium">New: Nature's Choice</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist">Organic nutrition with zero fillers. Real ingredients your pet will love, backed by veterinary science.</p>
</div>
<div className="mt-5 grid grid-cols-2 gap-4">
<div className="rounded-2xl overflow-hidden border border-neutral-200">
<img alt="Dog food bowl" className="w-full h-28 object-cover" src="https://cdn.midjourney.com/721423f2-bd9c-4873-b746-fb9ef9288fef/0_0.png?w=800&amp;q=80"/>
<div className="p-3">
<p className="text-sm font-medium font-geist">Premium Dry Food</p>
<p className="text-xs text-neutral-600 font-geist">$42</p>
</div>
</div>
<div className="rounded-2xl overflow-hidden border border-neutral-200">
<img alt="Cat treats" className="w-full h-28 object-cover" src="https://cdn.midjourney.com/6226de22-08d6-4336-be78-c384baf6db55/0_0.png?w=800&amp;q=80"/>
<div className="p-3">
<p className="text-sm font-medium font-geist">Gourmet Treats</p>
<p className="text-xs text-neutral-600 font-geist">$18</p>
</div>
</div>
</div>
<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-geist">
                  Explore Collection
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10 sm:mt-28">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex items-center gap-3">
<span className="text-sm text-neutral-500 font-geist">Filter by</span>
<div className="flex items-center gap-2 flex-wrap">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm hover:border-neutral-300 font-geist">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
                Category
              </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm hover:border-neutral-300 font-geist">
                Pet Size
                <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm hover:border-neutral-300 font-geist">
                Type: Dogs
                <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-600"></span>
</button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white text-sm hover:border-neutral-300 font-geist">
                Price
                <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full border border-neutral-200 bg-white text-neutral-600 w-64">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full bg-transparent outline-none text-sm placeholder:text-neutral-400" placeholder="Search" type="text"/>
</div>
</div>
</div>
</section>

<section className="sm:mt-8 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative">
<img alt="Premium Dog Food" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/a4759e97-43ff-4a43-8985-ee83b226e1a4/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist">Premium Dry Food</h3>
<p className="text-sm font-medium font-geist">$42</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Organic chicken &amp; brown rice formula.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.9</span>
<span className="text-neutral-400 font-geist">(342)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative">
<img alt="Interactive Toy" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/3b13548f-45ac-469a-9a45-435a59e1066b/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Smart Puzzle Toy</h3>
<p className="text-sm font-medium font-geist">$28</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Mental stimulation &amp; treat dispenser.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.7</span>
<span className="text-neutral-400 font-geist">(218)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative">
<img alt="Orthopedic Pet Bed" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/976ff5ab-f0a8-46d0-89c5-020c1e3f46b1/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold font-geist">Cloud Comfort Bed</h3>
<p className="text-sm font-medium font-geist">$89</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Memory foam with washable cover.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.8</span>
<span className="text-neutral-400 font-geist">(156)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="relative">
<img alt="Gourmet Treats" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/bc5fafbd-0c4c-4085-87fe-87acd5eae983/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Gourmet Treats Box</h3>
<p className="text-sm font-medium font-geist">$18</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Freeze-dried salmon &amp; sweet potato.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.9</span>
<span className="text-neutral-400 font-geist">(284)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<div className="relative">
<img alt="Cat Scratching Post" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/1d3e3086-0cd4-48b1-af6b-e01017a4ce26/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Modern Scratch Tower</h3>
<p className="text-sm font-medium font-geist">$64</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Natural sisal with plush perch.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.6</span>
<span className="text-neutral-400 font-geist">(192)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>

<article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<div className="relative">
<img alt="Grooming Kit" className="w-full h-72 object-cover" src="https://cdn.midjourney.com/25e056c6-57c6-4c5f-96fa-d2840628e06a/0_0.png?w=800&amp;q=80"/>
<button aria-label="Favorite" className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 text-neutral-600 hover:text-rose-500 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight font-geist">Pro Grooming Kit</h3>
<p className="text-sm font-medium font-geist">$52</p>
</div>
<p className="mt-1 text-sm text-neutral-600 font-geist">Complete care with natural shampoo.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-1 text-neutral-600 text-xs">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.7</span>
<span className="text-neutral-400 font-geist">(134)</span>
</div>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 text-xs font-geist">
                  Add to bag
                  <svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl tracking-tight [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-playfair font-medium">Pet Life Gallery</h2>
</div>
<div className="mt-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 rounded-3xl overflow-hidden bg-neutral-900 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<img alt="Dog playing outdoors" className="mix-blend-luminosity w-full h-[420px] object-cover" src="https://cdn.midjourney.com/2175b39e-4865-4364-80c3-4db57a55d87d/0_0.png?w=800&amp;q=80"/>
</div>
<div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
<div className="rounded-3xl overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll">
<img alt="Cat portrait" className="w-full h-48 object-cover" src="https://cdn.midjourney.com/7a97b0ed-14bd-4c12-8f2f-bcf39fe383dd/0_0.png?w=800&amp;q=80"/>
</div>
<div className="rounded-3xl overflow-hidden [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll">
<img alt="Bird in nature" className="w-full h-48 object-cover" src="https://cdn.midjourney.com/8519ba6e-dbac-4b02-933e-c55bb4d5a526/0_0.png?w=800&amp;q=80"/>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full text-xs bg-neutral-900 text-white font-geist">Dogs</button>
<button className="px-3 py-1.5 rounded-full text-xs border border-neutral-200 bg-white font-geist">Cats</button>
<button className="px-3 py-1.5 rounded-full text-xs border border-neutral-200 bg-white font-geist">Birds</button>
<button className="px-3 py-1.5 rounded-full text-xs border border-neutral-200 bg-white font-geist">Rabbits</button>
<button className="px-3 py-1.5 rounded-full text-xs border border-neutral-200 bg-white font-geist">Reptiles</button>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-2 rounded-full border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mt-20 sm:mt-28 bg-neutral-900 text-white">
<div className="sm:px-6 lg:px-8 sm:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<h3 className="text-4xl sm:text-6xl tracking-tight [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll font-playfair font-medium">Happy Pets, Happy Life</h3>
<p className="mt-4 text-sm/relaxed text-neutral-300 max-w-xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll font-geist">Science-backed nutrition and thoughtfully crafted accessories. Because they deserve the very best.</p>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="bg-lime-400 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7bbb668c-3149-4a85-957c-ac3592f8705e_800w.jpg)] bg-cover rounded-2xl [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll"></div>
<div className="bg-violet-400 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9bc6a9fc-d5f6-456f-8805-4dc091bf7d0f_800w.jpg)] bg-cover rounded-2xl [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll"></div>
<div className="bg-orange-400 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1cde2a93-8ded-44b4-93b4-2f5455b71b69_800w.jpg)] bg-cover rounded-2xl [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll"></div>
<div className="bg-amber-400 h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0d8aca8d-7da0-4da9-9c6c-720dfd147ca3_800w.jpg)] bg-cover rounded-2xl [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll"></div>
</div>
<div className="mt-8">
<p className="text-xs text-neutral-400 [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll font-geist">Use code FUREVER to get 15% off your first order.</p>
</div>
</div>
</section>

<section className="mt-16 sm:mt-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl overflow-hidden relative [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<img alt="Dog in nature" className="w-full h-[460px] object-cover" src="https://cdn.midjourney.com/75d8c52c-230e-4ef5-b633-d92605e8c2c9/0_0.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-tr from-black/60 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute left-6 sm:left-10 bottom-8 sm:bottom-12 max-w-lg">
<h4 className="text-3xl sm:text-5xl tracking-tight text-white font-playfair font-medium">Nature's Best</h4>
<p className="mt-2 text-sm text-neutral-200 font-geist">Introducing our organic wellness line. Real ingredients, real results, real love.</p>
<div className="mt-5 flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-neutral-900 hover:bg-neutral-100 transition text-sm font-geist">
                Shop Now
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition text-sm font-geist">
                Learn More
                <svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 sm:mt-24 border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 [animation:fadeSlideIn_1s_ease-out_0.1s_both] animate-on-scroll">
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Contact</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="font-geist">hello@pawsome.pet</li>
<li className="font-geist">Support Center</li>
<li className="font-geist">+1 (555) PAW-SOME</li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Social</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="font-geist">Instagram</li>
<li className="font-geist">Twitter</li>
<li className="font-geist">TikTok</li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Company</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="font-geist">About</li>
<li className="font-geist">Careers</li>
<li className="font-geist">Vet Advisory</li>
</ul>
</div>
<div>
<p className="text-sm font-semibold tracking-tight font-geist">Terms &amp; Policy</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-600">
<li className="font-geist">Terms of Service</li>
<li className="font-geist">Privacy Policy</li>
<li className="font-geist">Accessibility</li>
</ul>
</div>
</div>
<div className="mt-8 flex items-center justify-between [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll">
<p className="text-sm text-neutral-500 font-geist">© <span className="font-geist" id="y">2025</span> Pawsome</p>
<div className="flex items-center gap-3">
<button className="p-2 rounded-full border border-neutral-200 hover:border-neutral-300">
<svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
