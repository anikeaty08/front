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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Nunito', 'sans-serif'],
},
colors: {
brand: {
green: '#10b981', // Emerald 500
dark: '#0f172a',  // Slate 900
light: '#f8fafc', // Slate 50
accent: '#6366f1', // Indigo 500
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex cursor-pointer group gap-x-2 gap-y-2 items-center">
<div className="group-hover:rotate-6 transition-transform bg-center text-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90e68279-25aa-4e57-af3e-1c1317866017_320w.png)] bg-cover rounded-lg pt-5 pr-7 pb-5 pl-7">
</div>
<span className="font-display font-bold text-xl tracking-tight text-slate-800">AycesMarket</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-brand-green text-sm font-medium transition-colors" href="#">Home</a>
<a className="hover:text-brand-green transition-colors text-sm font-medium text-slate-600" href="/items">Items</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 p-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-28 pb-16 relative">

<div className="-mr-20 -mt-20 bg-emerald-100 opacity-50 w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl pointer-events-none"></div>
<div className="-ml-20 -mb-20 bg-indigo-100 opacity-50 w-80 h-80 rounded-full absolute bottom-0 left-0 blur-3xl pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="text-center lg:text-left space-y-6 order-last lg:order-first">
<div className="inline-flex gap-2 uppercase text-[10px] sm:text-xs font-semibold text-emerald-600 tracking-wide bg-emerald-50 border-emerald-100 border rounded-full pt-1 pr-3 pb-1 pl-3 items-center">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Items sold and shipped through Ebay
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] font-bold text-slate-900 tracking-tight font-display">
                        Collectibles, Cards, Legos, Items, Etc.
                    </h1>
<p className="text-base sm:text-lg lg:text-xl leading-relaxed text-slate-500 max-w-lg mx-auto lg:mx-0">
                        Mini marketplace of things that I am selling. Verified authentic and packed with care.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 lg:justify-start pt-2 justify-center">
<button className="w-full sm:w-auto hover:border-emerald-200 hover:text-emerald-600 transition-all hover:shadow-sm flex gap-2 cursor-pointer font-semibold text-slate-700 bg-white border-slate-200 border rounded-full py-3.5 px-8 items-center justify-center" onclick="window.location.href='/items'" role="button">
                            Browse Listings
                        </button>
</div>
</div>

<div className="flex w-full min-h-[380px] sm:min-h-[450px] lg:h-[500px] relative items-center justify-center order-first lg:order-last mb-4 lg:mb-0">

<div className="absolute w-[280px] sm:w-[350px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-emerald-400/30 to-indigo-500/30 blur-[60px] sm:blur-[80px] rounded-full animate-pulse-slow"></div>

<div className="relative w-[280px] sm:w-[320px] h-[400px] sm:h-[460px] rounded-[32px] animate-float z-20 group perspective-1000">

<div className="absolute inset-0 rounded-[32px] p-[2px] holo-gradient">
<div className="h-full w-full bg-slate-900 rounded-[30px] relative overflow-hidden">

<div className="absolute inset-0 bg-slate-900 grid-pattern"></div>

<div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

<div className="flex flex-col text-center h-full p-4 relative items-center justify-center z-10">

<div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-800/80 backdrop-blur-sm border border-slate-700 shadow-xl shadow-emerald-500/10 flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:border-emerald-500/50">
<svg aria-hidden="true" className="iconify text-emerald-400 w-10 h-10 sm:w-12 sm:h-12" data-icon="lucide:sparkles" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mb-2">AycesMarket</h3>
<p className="leading-relaxed text-xs sm:text-sm font-medium text-slate-400 max-w-[200px]">Sold and Shipped through eBay | Things I have or find and don't want or need anymore</p>

<div className="absolute bottom-8 left-0 right-0 flex justify-center">
<div className="bg-slate-800/50 border border-slate-700/50 backdrop-blur rounded-full px-4 py-1.5 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="uppercase text-[10px] sm:text-xs font-bold text-emerald-400 tracking-wider">Live Inventory</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-4 sm:left-1/4 w-10 h-10 sm:w-12 sm:h-12 border-2 border-slate-200/40 rounded-full animate-float opacity-50" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-20 right-4 sm:right-10 w-6 h-6 sm:w-8 sm:h-8 bg-indigo-500/20 rounded-lg rotate-12 animate-float opacity-50" style={{animationDelay: '2s'}}></div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 border-y bg-white border-slate-100 pt-20 pb-20">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">Socials &amp; Stores</h2>
<p className="text-slate-500 mt-4 text-base sm:text-lg">Follow us for the latest drops, live auctions, and inventory
            updates.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

<a className="group relative flex flex-col items-center justify-center p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-200 hover:border-red-500/30 hover:bg-red-50/30 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="https://www.ebay.com/usr/ayceton" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10 text-[#e53238]">
<svg aria-hidden="true" className="iconify w-7 h-7 sm:w-8 sm:h-8" data-icon="simple-icons:ebay" fill="currentColor" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M6.056 12.132v-4.92h1.2v3.026c.59-.703 1.402-.906 2.202-.906c1.34 0 2.828.904 2.828 2.855c0 .233-.015.457-.06.668c.24-.953 1.274-1.305 2.896-1.344c.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244c-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62c1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125l2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04l-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8a7 7 0 0 1-.046-.765c-.603.734-1.32.96-2.32.96c-1.48 0-2.272-.78-2.272-1.695q.002-.224.037-.405c-.3 1.246-1.36 2.086-2.767 2.086c-.87 0-1.694-.315-2.2-.93c0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74c.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.009 0 13.822 0 12.232c0-1.754.982-2.91 3.116-2.91c1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95c0 .465.36.97 1.305.97c1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546c-.944 0-1.694.474-1.815 1.546z">
</path>
</svg>
</div>
<span className="font-display font-bold text-lg text-slate-700 group-hover:text-red-600 transition-colors relative z-10">eBay Store</span>
</a>

<a className="group relative flex flex-col items-center justify-center p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-200 hover:border-pink-500/30 hover:bg-pink-50/30 hover:shadow-xl hover:shadow-pink-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="https://www.instagram.com/aycesmarket/" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 sm:mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 relative z-10 text-[#ec4899]">
<svg aria-hidden="true" className="iconify w-7 h-7 sm:w-8 sm:h-8" data-icon="simple-icons:instagram" fill="currentColor" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm-5 3a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm5.5-.9a1.1 1.1 0 1 0 0 2.2a1.1 1.1 0 0 0 0-2.2z">
</path>
</svg>
</div>
<span className="font-display font-bold text-lg text-slate-700 group-hover:text-pink-600 transition-colors relative z-10">Instagram</span>
</a>

<a className="group relative flex flex-col items-center justify-center p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-200 hover:border-slate-800/30 hover:bg-slate-100 hover:shadow-xl hover:shadow-slate-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="https://www.tiktok.com/@aycesmarket" rel="noopener noreferrer" target="_blank">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
</div>
<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 sm:mb-6 group-hover:scale-110 group-hover:skew-x-3 transition-transform duration-300 relative z-10 text-slate-900">
<svg aria-hidden="true" className="iconify w-7 h-7 sm:w-8 sm:h-8" data-icon="simple-icons:tiktok" fill="currentColor" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07">
</path>
</svg>
</div>
<span className="font-display font-bold text-lg text-slate-700 group-hover:text-slate-900 transition-colors relative z-10">TikTok</span>
</a>

<a className="group relative flex flex-col items-center justify-center p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-200 hover:border-yellow-500/30 hover:bg-yellow-50/30 hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden" href="https://www.whatnot.com/user/ayceton" rel="noopener noreferrer" target="_blank">
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-slate-100 mb-4 sm:mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 relative z-10 text-black">
<svg aria-hidden="true" className="iconify w-7 h-7 sm:w-8 sm:h-8" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<rect fill="#000000" height="20" rx="6" width="20" x="2" y="2"></rect>
<path d="M7 7.5l2.5 7 2-4.2 2 4.2 2.5-7" fill="none" stroke="#FFD500" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6"></path>
</svg>
</div>
<span className="font-display font-bold text-lg text-slate-700 group-hover:text-black transition-colors relative z-10">Whatnot</span>
</a>
</div>
</div>
</section>

<section className="bg-white pt-10 pb-20 sm:pt-20" id="shop">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex mb-10 items-end justify-between">
<div className="">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight font-display">Featured Items
                    </h2>
<p className="text-slate-500 mt-2">Verified authentic. Ready to ship.</p>
</div>
<a className="hidden sm:flex items-center gap-1 hover:gap-2 transition-all font-semibold text-emerald-600" href="/items">
                    View All <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

<div className="group relative bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
<img alt="Pokemon Card" className="group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 bg-center w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3569a22e-f411-4244-bd02-82e2850274c3_800w.png"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="font-display font-bold text-slate-900 text-lg leading-tight">Venusaur EX 141/146</h3>
<span className="text-sm font-bold text-emerald-600 bg-emerald-50 rounded pt-1 pr-2 pb-1 pl-2">$39.99</span>
</div>
<p className="line-clamp-2 text-sm text-slate-500 mb-4">A bit older, not mint condition images of the card are on eBay.</p>
<a className="hover:bg-slate-900 hover:text-white transition-all flex gap-2 group-hover:border-slate-900 text-sm font-semibold text-slate-700 bg-slate-50 w-full border-slate-200 border rounded-xl pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center" href="https://www.ebay.com/itm/358062006763?epid=6043385119&amp;itmmeta=01KDKVFQRWVW7V4AZGVTE0F28Z&amp;hash=item535e28a1eb:g:EjcAAeSwd4BpUZCk" rel="noopener noreferrer" target="_blank">
<span className="">View on eBay</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
<img alt="Lego Star Wars" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/555d70d0-00f9-4fbb-b6d7-3c5b59a7af64_800w.png"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="leading-tight group-hover:text-yellow-600 transition-colors text-lg font-bold text-slate-900 font-display">
                                Ampharos GX 185/181</h3>
<span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded text-sm">$29.99</span>
</div>
<p className="line-clamp-2 text-sm text-slate-500 mb-4" style={{}}>Just like new, had gloves on, put it right into its sleeve. Mint</p>
<a className="hover:bg-slate-900 hover:text-white transition-all flex gap-2 group-hover:border-slate-900 gap-x-2 gap-y-2 items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 w-full border-slate-200 border rounded-xl pt-2.5 pb-2.5" href="https://www.ebay.com/itm/358064847231" rel="noopener noreferrer" target="_blank">
<span className="">View on eBay</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
<img alt="Sneaker" className="group-hover:scale-110 group-hover:-rotate-2 transition-transform duration-500 bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82c051a7-6a6e-4c67-bf65-f9c3c3329b71_800w.png"/>
</div>
<div className="pt-5 pr-5 pb-5 pl-5">
<div className="flex justify-between items-start mb-2">
<h3 className="leading-tight text-lg font-bold text-slate-900 font-display">M Mewtwo EX 63/162</h3>
<span className="text-sm font-bold text-emerald-600 bg-emerald-50 rounded pt-1 pr-2 pb-1 pl-2">$24.99</span>
</div>
<p className="line-clamp-2 text-sm text-slate-500 mb-4">Just like new, had gloves on, put it right into its sleeve. Mint</p>
<a className="hover:bg-slate-900 hover:text-white transition-all flex gap-2 group-hover:border-slate-900 gap-x-2 gap-y-2 items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 w-full border-slate-200 border rounded-xl pt-2.5 pb-2.5" href="https://www.ebay.com/itm/358067776585?epid=14043371849&amp;itmmeta=01KDR0J04TT3DK2K0D56VK99YE&amp;hash=item535e80ac49:g:PtIAAeSwkwVpU~iv" rel="noopener noreferrer" target="_blank">
<span className="">View on eBay</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="group relative bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative overflow-hidden rounded-t-3xl aspect-[4/3]">
<img alt="Gameboy" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/679962bd-52b7-420c-ac91-c4e361617ffc_800w.png"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<h3 className="leading-tight text-lg font-bold text-slate-900 font-display">M Gyarados EX – 115/122
                            </h3>
<span className="text-sm font-bold text-red-700 bg-red-300 rounded pt-1 pr-2 pb-1 pl-2">SOLD</span>
</div>
<p className="line-clamp-2 text-sm text-slate-500 mb-4">One minor mini ding only noticeable with a flash of light</p>
<a className="hover:bg-slate-900 hover:text-white transition-all flex gap-2 group-hover:border-slate-900 gap-x-2 gap-y-2 items-center justify-center text-sm font-semibold text-slate-700 bg-slate-50 w-full border-slate-200 border rounded-xl pt-2.5 pb-2.5" href="https://www.ebay.com/itm/358065386681?epid=25043363858&amp;itmmeta=01KDP81Q7JCGDMT7ZBWJG0T0ME&amp;hash=item535e5c34b9:g:ry8AAeSwg5ppUvyR" rel="noopener noreferrer" target="_blank">
<span className="">View on eBay</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:external-link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center sm:hidden">
<button className="w-full hover:border-emerald-200 hover:text-emerald-600 transition-all hover:shadow-sm flex cursor-pointer font-semibold text-slate-700 bg-white border-slate-200 border rounded-full py-3.5 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/items'" role="button">
                    View Items
                </button>
</div>
</div>
</section>

<section className="overflow-hidden text-slate-300 bg-slate-900 pt-16 pb-16 sm:pt-20 sm:pb-20 relative" id="about">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
<div className="">
<h2 className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">About the Shop</h2>
<p className="text-lg leading-relaxed text-slate-400 mb-6">
                        AycesMarket is a trusted independent reseller sharing cool finds with collectors everywhere. From the nostalgia of Pokémon cards to the engineering of Lego sets and the culture of sneakers.
                    </p>
<p className="text-lg leading-relaxed text-slate-400">
                        We aren't a big corporation. We are collectors serving collectors. Every item is inspected by hand and packed with care.
                    </p>
</div>
<div className="bg-slate-800/50 p-6 sm:p-8 rounded-3xl border border-slate-700">
<h3 className="text-xl font-bold text-white font-display mb-6">Why buy from me?</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 group">
<div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<span className="font-medium">Fast &amp; Secure Shipping</span>
</div>
<div className="flex items-center gap-4 group">
<div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<span className="font-medium">100% Authentic Guarantee</span>
</div>
<div className="flex items-center gap-4 group">
<div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-medium">Collector-Friendly Pricing</span>
</div>
<div className="flex items-center gap-4 group">
<div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<span className="font-medium">Secure Stripe Payments</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-50 pt-16 pb-16 sm:pt-20 sm:pb-20" id="contact">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="md:p-12 shadow-emerald-900/5 bg-white border-emerald-100 border rounded-3xl p-6 sm:p-8 shadow-xl">
<div className="inline-block p-3 rounded-2xl bg-emerald-100 text-emerald-600 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle-heart" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719">
</path>
<path d="M7.828 13.07A3 3 0 0 1 12 8.764a3 3 0 0 1 5.004 2.224a3 3 0 0 1-.832 2.083l-3.447 3.62a1 1 0 0 1-1.45-.001z">
</path>
</g>
</svg>
</div>
<h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Looking for something specific?</h2>
<p className="text-slate-500 mb-8 max-w-lg mx-auto">
                    We can help source rare items or answer questions about condition. Shoot us a message directly!
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="hover:bg-blue-700 flex gap-2 transition-all hover:-translate-y-1 items-center justify-center font-semibold text-white bg-blue-600 rounded-xl pt-3 pr-6 pb-3 pl-6" href="https://www.facebook.com/profile.php?id=61585538798407" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        Message on Facebook
                    </a>
<a className="hover:border-slate-400 flex gap-2 transition-all hover:-translate-y-1 items-center justify-center font-semibold text-slate-700 bg-white border-slate-200 border-2 rounded-xl pt-3 pr-6 pb-3 pl-6" href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=aycesmarket@gmail.com" rel="noopener noreferrer" target="_blank">
                        Email Me
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-display font-bold text-lg tracking-tight text-slate-900">AycesMarket</span>
</div>
<div className="flex gap-6 text-slate-500">
<a className="hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-emerald-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:tiktok" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07" fill="currentColor"></path></svg></a>
</div>
<div className="text-sm text-slate-400">© 2026 AycesMarket. All rights reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
