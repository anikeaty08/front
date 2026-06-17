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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
lucide.createIcons();
});



        (function() {
            const artworks = [
                {
                    type: 'secondary',
                    image: 'https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80',
                    alt: 'Previous Artwork'
                },
                {
                    type: 'featured',
                    image: 'https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80',
                    title: 'Abstract Flow',
                    number: '02',
                    alt: 'Featured Artwork'
                },
                {
                    type: 'secondary',
                    image: 'https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80',
                    alt: 'Next Artwork'
                },
                {
                    type: 'secondary',
                    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80',
                    alt: 'Structural Form'
                },
                {
                    type: 'secondary',
                    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&q=80',
                    alt: 'Neon Night'
                }
            ];

            const renderCard = (art) => {
                if (art.type === 'featured') {
                    return `
                        <div class="group relative w-[260px] sm:w-[280px] shrink-0 snap-center cursor-pointer z-10 my-2">
                            <div class="aspect-[3/4] overflow-hidden rounded-[32px] bg-neutral-900 relative">
                                <img src="${art.image}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt="${art.alt}">
                                
                                <!-- Overlay Gradient -->
                                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

                                <!-- Center Floating Action -->
                                <div class="flex group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center cursor-pointer" onclick="window.location.href='/artwork-view'" role="button">
                                    <div class="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize-2 text-white drop-shadow-md">
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <polyline points="9 21 3 21 3 15"></polyline>
                                            <line x1="21" x2="14" y1="3" y2="10"></line>
                                            <line x1="3" x2="10" y1="21" y2="14"></line>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Content Badge -->
                                <div class="absolute bottom-6 left-6 right-6 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
                                    <div class="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-4 pl-5 shadow-lg">
                                        <div class="flex flex-col gap-1">
                                            <span class="text-[10px] uppercase tracking-wider font-bold text-white/70">Featured</span>
                                            <span class="text-[17px] font-semibold text-white tracking-tight leading-none">${art.title}</span>
                                        </div>
                                        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-white text-neutral-900 font-bold text-xs shadow-md">
                                            ${art.number}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                } else {
                    return `
                        <div class="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
                            <div class="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
                                <img src="${art.image}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" alt="${art.alt}">
                            </div>
                        </div>`;
                }
            };

            const html = artworks.map(renderCard).join('');
            const script = document.currentScript;
            if (script) {
                script.insertAdjacentHTML('beforebegin', html);
            }
        })();
    
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
      

<div className="fixed inset-0 pointer-events-none flex w-full justify-center z-0 opacity-20">
<div className="h-full border-r border-neutral-400/20 w-[33%] shrink-0"></div>
<div className="h-full border-r border-neutral-400/20 w-[33%] shrink-0"></div>
</div>

<div className="relative z-10 w-full max-w-[414px] h-[100dvh] sm:h-[850px] bg-[#fafafa] sm:rounded-[40px] shadow-2xl overflow-hidden flex flex-col ring-1 ring-white/10">

<div className="px-6 pt-8 pb-2 flex justify-between items-center z-50 bg-[#fafafa]/90 backdrop-blur-sm sticky top-0 border-b border-transparent transition-all duration-300">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-neutral-900 tracking-tight font-display" style={{}}>bSide</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500 mb-2"></div>
</div>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors relative group">
<svg className="lucide lucide-bell w-6 h-6 text-neutral-800 stroke-[1.5] group-hover:text-black" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-[#fafafa] rounded-full"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto hide-scrollbar pb-32">

<div className="animate-on-scroll [animation:animationIn_0.6s_ease-out_0s_both] animate pt-6 pr-4 pb-8 pl-4">

<div className="relative w-full">

<div className="absolute -top-5 left-12 right-12 h-48 bg-gradient-to-b from-neutral-100 to-white rounded-t-[20px] z-0"></div>

<div className="absolute -top-3 left-6 right-6 h-48 bg-gradient-to-b from-neutral-200/50 to-neutral-50/50 rounded-t-[24px] z-10"></div>

<div className="flex flex-col z-20 bg-white border-neutral-200 rounded-[32px] pt-7 pr-5 pb-5 pl-5 relative shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] gap-x-6 gap-y-6">

<div className="flex justify-between items-start pl-1">
<h2 className="text-[26px] leading-[1.1] font-semibold text-neutral-900 tracking-tight font-display">My Favorite Artworks <span className="block text-xl font-medium text-neutral-400 mt-0.5">in Frieze Seoul 2025</span></h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-1 -mr-1 mt-1">
<svg className="lucide lucide-more-horizontal w-6 h-6 stroke-[1.5]" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-x-2 gap-y-2 items-center" id="dynamic-artwork-container">
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Previous Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>
<div className="group relative w-[260px] sm:w-[280px] shrink-0 snap-center cursor-pointer z-10 my-2">
<div className="aspect-[3/4] overflow-hidden rounded-[32px] bg-neutral-900 relative">
<img alt="Featured Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

<div className="flex group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center cursor-pointer" onclick="window.location.href='/artwork-view'" role="button">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
<svg className="lucide lucide-maximize-2 text-white drop-shadow-md" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 3 21 3 21 9"></polyline>
<polyline points="9 21 3 21 3 15"></polyline>
<line x1="21" x2="14" y1="3" y2="10"></line>
<line x1="3" x2="10" y1="21" y2="14"></line>
</svg>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
<div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-4 pl-5 shadow-lg">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider font-bold text-white/70">Featured</span>
<span className="text-[17px] font-semibold text-white tracking-tight leading-none">Abstract Flow</span>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-neutral-900 font-bold text-xs shadow-md">
                                            02
                                        </div>
</div>
</div>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Next Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Structural Form" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&amp;q=80"/>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Neon Night" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&amp;q=80"/>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Previous Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>
<div className="group relative w-[260px] sm:w-[280px] shrink-0 snap-center cursor-pointer z-10 my-2">
<div className="aspect-[3/4] overflow-hidden rounded-[32px] bg-neutral-900 relative">
<img alt="Featured Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

<div className="flex group-hover:opacity-100 transition-opacity duration-500 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center cursor-pointer" onclick="window.location.href='/artwork-view'" role="button">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500">
<svg className="lucide lucide-maximize-2 text-white drop-shadow-md" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="15 3 21 3 21 9"></polyline>
<polyline points="9 21 3 21 3 15"></polyline>
<line x1="21" x2="14" y1="3" y2="10"></line>
<line x1="3" x2="10" y1="21" y2="14"></line>
</svg>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 translate-y-0 transition-transform duration-300 group-hover:-translate-y-1">
<div className="flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 p-4 pl-5 shadow-lg">
<div className="flex flex-col gap-1">
<span className="text-[10px] uppercase tracking-wider font-bold text-white/70">Featured</span>
<span className="text-[17px] font-semibold text-white tracking-tight leading-none">Abstract Flow</span>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-neutral-900 font-bold text-xs shadow-md">
                                            02
                                        </div>
</div>
</div>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Next Artwork" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Structural Form" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&amp;q=80"/>
</div>
</div>
<div className="group relative w-[160px] sm:w-[180px] shrink-0 snap-center transition-all duration-500 cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-[20px] bg-neutral-100 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105 shadow-sm border border-neutral-200/50">
<img alt="Neon Night" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=800&amp;q=80"/>
</div>
</div>
</div>

<div className="flex justify-between items-center gap-4 mt-2">
<div className="bg-neutral-50/50 border-0 rounded-full pt-2 pr-4 pb-2 pl-4">
<span className="text-[11px] text-xs font-bold text-neutral-600 tracking-wider">1 / 235</span>
</div>
<button className="hover:bg-neutral-50 active:bg-neutral-100 transition-all active:scale-[0.99] flex gap-2 group font-semibold text-neutral-900 border-neutral-200 border rounded-2xl pt-2 pr-10 pb-2 pl-10 gap-x-2 gap-y-2 items-center justify-center">
<span className="group-hover:text-black">Share</span>
</button>
</div>
</div>
</div>
</div>

<div className="pt-4 pb-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate">
<div className="px-6 mb-4 flex justify-between items-center">
<h3 className="text-xl font-medium text-neutral-900 font-display">My Recent Captures</h3>
<button className="text-neutral-400 hover:text-neutral-600 transition-colors">
<svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex overflow-x-auto hide-scrollbar px-6 gap-3">
<div className="w-20 h-20 rounded-2xl bg-neutral-50 shrink-0 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400 hover:bg-neutral-100 hover:text-neutral-600 hover:border-solid hover:border-neutral-300 transition-all cursor-pointer">
<svg className="lucide lucide-plus w-6 h-6 stroke-[1.5]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 shadow-sm">
<img alt="Capture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 shadow-sm">
<img alt="Capture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 shadow-sm">
<img alt="Capture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-100 shadow-sm">
<img alt="Capture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="px-6 pt-2 pb-6 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.35s_both]">
<div className="flex mb-2 items-center justify-between">
<h3 className="text-xl font-display font-medium text-neutral-900">Shared with You</h3>
<a className="text-xs font-medium text-neutral-400 hover:text-neutral-900 transition-colors" href="#">View All</a>
</div>
<div className="flex flex-col gap-1">

<div className="flex group cursor-pointer border-0 pt-2 pr-0 pb-3 pl-0 gap-x-4 gap-y-4 items-center">

<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full object-cover ring-2 ring-white border border-neutral-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
<div className="bg-blue-500 w-4 h-4 rounded-full flex items-center justify-center">
<svg className="lucide lucide-message-circle w-2.5 h-2.5 text-white stroke-[3]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
</div>
</div>

<div className="flex-1 min-w-0">
<p className="text-[14px] font-medium text-neutral-900 truncate leading-snug">
<span className="text-neutral-500 font-normal">Sarah shared</span> "Ethereal"
                            </p>
<p className="text-xs text-neutral-400 mt-0.5 truncate">"You have to see this texture..."</p>
</div>

<div className="w-12 h-14 rounded-lg bg-neutral-100 overflow-hidden shrink-0 border border-neutral-100">
<img alt="Shared Art" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=200&amp;q=80"/>
</div>
</div>

<div className="flex gap-4 group cursor-pointer transition-all pt-2 pr-0 pb-2 pl-0 gap-x-4 gap-y-4 items-center">
<div className="relative shrink-0">
<img className="w-12 h-12 rounded-full object-cover ring-2 ring-white border border-neutral-100" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
<div className="bg-rose-500 w-4 h-4 rounded-full flex items-center justify-center">
<svg className="lucide lucide-heart w-2.5 h-2.5 text-white stroke-[3]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
</div>
<div className="flex-1 min-w-0">
<p className="text-[14px] font-medium text-neutral-900 truncate leading-snug">
<span className="text-neutral-500 font-normal">David liked</span> "Structure V"
                            </p>
<p className="text-xs text-neutral-400 mt-0.5 truncate">Added to 'Inspiration' list</p>
</div>
<div className="w-12 h-14 rounded-lg bg-neutral-100 overflow-hidden shrink-0 border border-neutral-100">
<img alt="Shared Art" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=200&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] pt-2 pr-6 pb-12 pl-6">
<h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Recommended for You</h3>
<div className="grid grid-cols-2 gap-x-3 gap-y-6">

<div className="group flex flex-col gap-3 cursor-pointer gap-x-3 gap-y-3" onclick="window.location.href='/artwork-view'" role="button">
<div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-neutral-100">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 p-2 rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-[15px] leading-tight group-hover:text-neutral-600 transition-colors truncate font-medium text-neutral-900">Silent Echoes</h4>
<span className="text-[10px] uppercase font-semibold text-neutral-400 tracking-wider">Thaddaeus Ropac</span>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer gap-x-3 gap-y-3" onclick="window.location.href='/artwork-view'" role="button">
<div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-neutral-100">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 p-2 rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-[15px] leading-tight group-hover:text-neutral-600 transition-colors truncate font-medium text-neutral-900">Neon Dreams</h4>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Lehmann Maupin</span>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer">
<div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-neutral-100">
<img alt="Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-2 right-2 p-2 rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-[15px] leading-tight group-hover:text-neutral-600 transition-colors truncate font-medium text-neutral-900">Blue Period</h4>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">Pace Gallery</span>
</div>
</div>

<div className="group flex flex-col gap-3 cursor-pointer">
<div className="relative w-full aspect-square rounded-[24px] overflow-hidden bg-neutral-100">
<img alt="Art" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&amp;q=80"/>
<button className="absolute top-2 right-2 p-2 rounded-full bg-black/20 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40">
<svg className="lucide lucide-bookmark w-4 h-4 stroke-[1.5]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="flex flex-col gap-1">
<h4 className="text-[15px] leading-tight group-hover:text-neutral-600 transition-colors truncate font-medium text-neutral-900">Structure IV</h4>
<span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider">White Cube</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2 rounded-[40px] bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] min-w-[280px] justify-between">

<button className="flex hover:text-white hover:bg-white/10 transition-all duration-300 group cursor-pointer text-neutral-400 w-14 h-14 rounded-full relative items-center justify-center" onclick="window.location.href='/search-modal'" role="button">
<svg className="lucide lucide-search w-6 h-6 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>

<div className="group cursor-pointer -mt-8 relative">



<div className="flex group-hover:text-white group-hover:bg-[#333] group-hover:scale-[1.02] active:scale-95 transition-all duration-300 text-neutral-400 bg-[#262626] w-20 h-20 rounded-full ring-[#1a1a1a] ring-4 relative items-center justify-center">
<svg className="lucide lucide-camera w-8 h-8 stroke-[1.5]" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
</div>

<button className="flex hover:text-white hover:bg-white/10 transition-all duration-300 group text-neutral-400 w-14 h-14 rounded-full relative items-center justify-center cursor-pointer" onclick="window.location.href='/my-page'" role="button">
<svg className="lucide lucide-user w-6 h-6 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></button></div></div>
    </>
  );
}
