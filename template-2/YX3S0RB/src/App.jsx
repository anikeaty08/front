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



    // Initialize Lucide icons
    lucide.createIcons();

    // Filter functionality
    const filterTabs = document.querySelectorAll('.filter-tab');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.dataset.filter;
        
        // Update active tab
        filterTabs.forEach(t => {
          t.classList.remove('active', 'bg-gray-900', 'text-white');
          t.classList.add('bg-gray-100', 'text-gray-700');
        });
        tab.classList.add('active', 'bg-gray-900', 'text-white');
        tab.classList.remove('bg-gray-100', 'text-gray-700');
        
        // Filter items
        galleryItems.forEach(item => {
          const category = item.dataset.category;
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });

    // Back button functionality
    document.getElementById('backBtn').addEventListener('click', () => {
      window.history.back();
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe></div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 opacity-0 translate-y-[-20px]" style={{animation: `fadeInSlide 0.6s ease-out forwards`}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-4">
<button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105" id="backBtn">
<svg className="lucide lucide-arrow-left w-5 h-5 text-gray-700" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="">
<h1 className="text-xl font-semibold tracking-tight font-geist">Explore Categories</h1>
<p className="text-sm text-gray-600 font-geist">Discover inspiring collections</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-search w-5 h-5 text-gray-700" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-filter w-5 h-5 text-gray-700" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 opacity-0 translate-y-6" style={{animation: `fadeInSlide 0.8s ease-out 0.2s forwards`}}>
<div className="flex overflow-x-auto hide-scrollbar gap-2 pb-4">
<button className="filter-tab active whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-900 text-white hover:bg-gray-800" data-filter="all">All</button>
<button className="filter-tab whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200" data-filter="nature">Nature</button>
<button className="filter-tab whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200" data-filter="fashion">Fashion</button>
<button className="filter-tab whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200" data-filter="architecture">Architecture</button>
<button className="filter-tab whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200" data-filter="art">Art</button>
<button className="filter-tab whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 bg-gray-100 text-gray-700 hover:bg-gray-200" data-filter="abstract">Abstract</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 opacity-0 translate-y-6" style={{animation: `fadeInSlide 0.8s ease-out 0.3s forwards`}}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-600 p-8 text-white hover:shadow-xl transition-all duration-300 hover:scale-[1.02] opacity-0" style={{animation: `fadeInScale 0.8s ease-out 0.4s forwards`}}>
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-2 font-geist tracking-tight">Trending Now</h3>
<p className="text-emerald-100 mb-4 font-geist">Discover the most popular collections this week</p>
<button className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-200">
            Explore <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="absolute inset-0 bg-[url(/assets/445dcfd9-d3b8-4f16-ac08-1279950515b8_1600w.jpg)] bg-cover" style={{}}></div>
</div>

<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] opacity-0" style={{animation: `fadeInScale 0.8s ease-out 0.5s forwards`}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold font-geist">Collections</h3>
<svg className="lucide lucide-trending-up w-5 h-5 text-emerald-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600 font-geist">Total</span>
<span className="font-semibold font-geist">2,847</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600 font-geist">New Today</span>
<span className="font-semibold text-emerald-600 font-geist">+24</span>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600 font-geist">Popular</span>
<span className="font-semibold font-geist">156</span>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-12 pl-4">
<div className="masonry-grid">

<div className="masonry-item gallery-item opacity-0" data-category="nature" style={{animation: `fadeInScale 0.6s ease-out 0.6s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Mountain Landscape" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/aa0bfedd-e749-4510-a536-6b7f289b4b1d/0_3.png" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Mountain Peaks</h4>
<p className="text-sm text-gray-200 font-geist">Nature • 47 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="fashion" style={{animation: `fadeInScale 0.6s ease-out 0.7s forwards`}}>
<div className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white rounded-2xl shadow-sm">
<img alt="Fashion Portrait" className="w-full h-auto object-cover" src="/assets/faa7e8a2-81bb-4195-961a-8639261bf5ac_800w.jpg" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Modern Fashion</h4>
<p className="text-sm text-gray-200 font-geist">Fashion • 32 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="nature" style={{animation: `fadeInScale 0.6s ease-out 0.8s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Frost Pattern" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/e7f73911-7831-48ae-a9d2-b55c782dd157/0_0.png" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Winter Frost</h4>
<p className="text-sm text-gray-200 font-geist">Nature • 28 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="art" style={{animation: `fadeInScale 0.6s ease-out 0.9s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Romance Art" className="w-full h-auto object-cover" src="/assets/b46c2aa7-ae37-40d8-84ef-0098781b773a_800w.jpg" />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Romance Collection</h4>
<p className="text-sm text-gray-200 font-geist">Art • 19 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="architecture" style={{animation: `fadeInScale 0.6s ease-out 1.0s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Royal Architecture" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/43fa584b-0435-40c0-982f-be0752cc9ea0/0_3.png" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Royal Palace</h4>
<p className="text-sm text-gray-200 font-geist">Architecture • 35 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="nature" style={{animation: `fadeInScale 0.6s ease-out 1.1s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Ocean Wave" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/ff469743-a422-4f94-9180-dd7715886658/0_0.png" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Ocean Waves</h4>
<p className="text-sm text-gray-200 font-geist">Nature • 52 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="abstract" style={{animation: `fadeInScale 0.6s ease-out 1.2s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Abstract Art" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/e5b4d02f-8d2d-461a-bda1-9da06745c53d/0_0.png" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Abstract Forms</h4>
<p className="text-sm text-gray-200 font-geist">Abstract • 41 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="art" style={{animation: `fadeInScale 0.6s ease-out 1.3s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Artistic Portrait" className="w-full h-auto object-cover" src="https://cdn.midjourney.com/b0ad527e-4204-493e-9d20-334d36e18515/0_3.png" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Portrait Series</h4>
<p className="text-sm text-gray-200 font-geist">Art • 23 images</p>
</div>
</div>
</div>

<div className="masonry-item gallery-item opacity-0" data-category="technology" style={{animation: `fadeInScale 0.6s ease-out 1.4s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Futuristic Tech" className="w-full h-auto object-cover" src="/assets/c559c9bc-e44b-4961-98dc-a38fa548ee96_800w.jpg" style={{}} />
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Futuristic Tech</h4>
<p className="text-sm text-gray-200 font-geist">Technology • 15 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="travel" style={{animation: `fadeInScale 0.6s ease-out 1.5s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Travel Landscape" className="w-full h-auto object-cover" src="/assets/c76feb04-3191-4abd-9b87-e7dbf7f29fdd_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Adventure Travels</h4>
<p className="text-sm text-gray-200 font-geist">Travel • 27 images</p>
</div>
</div>
</div>
<div className="masonry-item gallery-item opacity-0" data-category="food" style={{animation: `fadeInScale 0.6s ease-out 1.6s forwards`}}>
<div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
<img alt="Delicious Food" className="w-full h-auto object-cover" src="/assets/312678b4-7b45-4205-9581-c1bde61bd96f_800w.jpg" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="font-semibold font-geist">Gourmet Cuisine</h4>
<p className="text-sm text-gray-200 font-geist">Food • 34 images</p>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 opacity-0 translate-y-6" style={{animation: `fadeInSlide 0.8s ease-out 1.4s forwards`}}>
<div className="text-center">
<button className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 hover:scale-105">
        Load More Collections
        <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>


    </>
  );
}
