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
      

<header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<button className="lg:hidden text-neutral-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<div className="flex-shrink-0 flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
<a className="logo-font text-3xl tracking-tight text-neutral-900 hover:text-neutral-700 transition-colors" href="#">
                        ZimCelebs.
                    </a>
</div>

<nav className="hidden lg:flex space-x-8 items-center justify-center flex-1">
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">News</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">Celebrities</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">Music</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">Business</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">Lifestyle</a>
<a className="text-sm font-medium text-neutral-600 hover:text-red-800 transition-colors uppercase tracking-wider" href="#">Interviews</a>
</nav>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium text-neutral-900 hidden sm:block" href="#">Subscribe</a>
<button className="text-neutral-900 hover:text-red-800 transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">

<div className="border-b border-neutral-200 pb-2 mb-10 flex justify-between items-end">
<span className="text-xs font-semibold text-neutral-500 uppercase tracking-widest">
                Harare, Zimbabwe
            </span>
<span className="text-xs font-medium text-neutral-400">
                Tuesday, October 24, 2023
            </span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">

<div className="lg:col-span-8 group cursor-pointer">
<div className="relative overflow-hidden mb-6">
<img alt="Featured Celebrity" className="w-full h-[500px] object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col space-y-4 pr-0 lg:pr-10">
<div className="flex items-center space-x-3">
<span className="w-8 h-[1px] bg-red-800"></span>
<span className="text-xs font-semibold tracking-widest uppercase text-red-800">Cover Story</span>
</div>
<h1 className="text-4xl lg:text-5xl xl:text-6xl serif-font font-medium text-neutral-900 leading-tight tracking-tight group-hover:underline decoration-1 underline-offset-4 decoration-neutral-300 transition-all">
                        The Renaissance of Zimbabwean Cinema: A New Era of Global Storytelling Begins
                    </h1>
<p className="text-lg text-neutral-600 font-light leading-relaxed max-w-3xl">
                        As local productions gain international acclaim on major streaming platforms, we sit down with the visionary directors and actors redefining the nation's cultural export strategy for the next decade.
                    </p>
<div className="pt-2">
<span className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-red-800 hover:border-red-800 transition-colors">
                            Read Full Story
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col h-full border-t lg:border-t-0 lg:border-l border-neutral-200 pt-10 lg:pt-0 lg:pl-10">
<h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Top Stories</h3>
<div className="flex flex-col divide-y divide-neutral-200">

<article className="py-6 first:pt-0 group cursor-pointer">
<div className="flex gap-4">
<div className="flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2 block">Business</span>
<h3 className="text-xl serif-font font-medium text-neutral-900 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                                    Telecom Giants Merge in Historic Deal Shaking Up The Region
                                </h3>
<span className="text-xs text-neutral-400">By Sarah Moyo • 4h ago</span>
</div>
<div className="w-24 h-24 flex-shrink-0 overflow-hidden">
<img alt="Business" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</article>

<article className="py-6 group cursor-pointer">
<div className="flex gap-4">
<div className="flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2 block">Music</span>
<h3 className="text-xl serif-font font-medium text-neutral-900 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                                    Winky D Announces European Tour Dates Following Album Success
                                </h3>
<span className="text-xs text-neutral-400">By Tinashe Chidz • 6h ago</span>
</div>
<div className="w-24 h-24 flex-shrink-0 overflow-hidden">
<img alt="Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</article>

<article className="py-6 group cursor-pointer">
<div className="flex gap-4">
<div className="flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2 block">Lifestyle</span>
<h3 className="text-xl serif-font font-medium text-neutral-900 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                                    The Quiet Luxury Trend Taking Over Harare's Northern Suburbs
                                </h3>
<span className="text-xs text-neutral-400">By Editorial Team • 8h ago</span>
</div>
<div className="w-24 h-24 flex-shrink-0 overflow-hidden">
<img alt="Lifestyle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2724&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</article>

<article className="py-6 group cursor-pointer lg:hidden xl:block">
<div className="flex gap-4">
<div className="flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2 block">Politics</span>
<h3 className="text-xl serif-font font-medium text-neutral-900 leading-snug mb-2 group-hover:text-neutral-600 transition-colors">
                                    Parliament Debates New Media Regulations Bill
                                </h3>
<span className="text-xs text-neutral-400">By Pol Desk • 12h ago</span>
</div>
</div>
</article>
</div>
</div>
</div>

<section className="mt-16 lg:mt-24 border-t border-black pt-8">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl serif-font font-medium text-neutral-900 tracking-tight">Trending Now</h2>
<a className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-red-800 transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
<img alt="Trending 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576267423048-15c0040fec78?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2">Arts &amp; Culture</span>
<h3 className="text-lg serif-font font-medium text-neutral-900 leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">
                            National Gallery Exhibits Rare Collection of 1980s Sculptures
                        </h3>
<div className="mt-auto pt-2 border-t border-neutral-100">
<p className="text-xs text-neutral-500 mt-2">By David K. • Oct 23</p>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
<img alt="Trending 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2">Innovation</span>
<h3 className="text-lg serif-font font-medium text-neutral-900 leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">
                            Young Tech Entrepreneurs Launch Zim's First AI Lab
                        </h3>
<div className="mt-auto pt-2 border-t border-neutral-100">
<p className="text-xs text-neutral-500 mt-2">By Tech Desk • Oct 23</p>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
<img alt="Trending 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2">Fashion</span>
<h3 className="text-lg serif-font font-medium text-neutral-900 leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">
                            Sustainable Fabrics Take Center Stage at Fashion Week
                        </h3>
<div className="mt-auto pt-2 border-t border-neutral-100">
<p className="text-xs text-neutral-500 mt-2">By Lisa M. • Oct 22</p>
</div>
</div>
</article>

<article className="group cursor-pointer flex flex-col h-full">
<div className="aspect-[4/3] overflow-hidden mb-4 bg-neutral-100">
<img alt="Trending 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col flex-1">
<span className="text-xs font-semibold text-red-800 uppercase tracking-wider mb-2">Travel</span>
<h3 className="text-lg serif-font font-medium text-neutral-900 leading-snug mb-3 group-hover:underline decoration-1 underline-offset-4">
                            Why Kariba is Becoming the Top Destination for Luxury Retreats
                        </h3>
<div className="mt-auto pt-2 border-t border-neutral-100">
<p className="text-xs text-neutral-500 mt-2">By Travel Guide • Oct 21</p>
</div>
</div>
</article>
</div>
</section>
</main>

<footer className="bg-neutral-50 border-t border-neutral-200 mt-20 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="logo-font text-2xl text-neutral-900 mb-4">ZimCelebs.</h2>
<p className="text-xs text-neutral-500 uppercase tracking-widest">The Authority in Zimbabwean Entertainment &amp; Business</p>
<div className="mt-8 text-xs text-neutral-400">
                © 2023 ZimCelebs Media Group. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
