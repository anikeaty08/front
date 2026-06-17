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
      

<header className="bg-white border-b border-stone-100 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex items-center gap-3">
<div className="h-11 w-11 bg-[#FF8DA1] rounded-full flex items-center justify-center text-white font-semibold text-lg tracking-tighter shadow-sm shadow-pink-200">
                        BD
                    </div>
<div className="flex flex-col">
<h1 className="text-xl font-semibold tracking-tight leading-none text-stone-900">Badi Di <span className="text-stone-400 text-sm font-normal ml-1">by dBee</span></h1>
<p className="text-sm text-stone-500 font-medium mt-1">Har madad, ek awaaz par</p>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="h-10 w-10 rounded-full bg-stone-50 hover:bg-stone-100 flex items-center justify-center text-stone-600 transition-colors border border-stone-200">
<iconify-icon icon="lucide:bell" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="h-10 w-10 rounded-full bg-stone-200 overflow-hidden border border-stone-100">
<img alt="Profile" className="h-full w-full object-cover" src="https://ui-avatars.com/api/?name=Anita+Devi&amp;background=FF8DA1&amp;color=fff"/>
</div>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-6 py-8 space-y-10 flex-grow w-full">

<div className="grid grid-cols-1 gap-8">

<div className="bg-white rounded-3xl border border-stone-100 p-8 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between relative overflow-hidden group gap-8">
<div className="absolute top-0 right-0 p-8 opacity-[0.03]">
<iconify-icon icon="lucide:calendar-clock" width="280"></iconify-icon>
</div>
<div className="relative z-10 max-w-2xl">
<span className="bg-pink-50 text-pink-700 px-4 py-1.5 rounded-full text-xs font-medium inline-block mb-4 tracking-wide uppercase">Aaj ka Dhyan</span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-2">SHG Meeting Reminder</h2>
<p className="text-lg text-stone-500 leading-relaxed">Aaj dopehar 2 baje Panchayat Hall mein milna hai. Sabhi sadasya samay par pahunche.</p>
<div className="mt-6 flex flex-wrap gap-4">
<div className="pl-4 pr-6 py-3 bg-stone-50 rounded-2xl border border-stone-100 flex items-center gap-3">
<div className="bg-green-100 text-green-700 p-1.5 rounded-full flex items-center justify-center">
<iconify-icon icon="lucide:check-circle-2" strokeWidth="2" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-stone-800 text-sm">Loan EMI Status</p>
<p className="text-stone-500 text-xs">₹500 Jama Ho Gaya</p>
</div>
</div>
</div>
</div>
<div className="relative z-10 flex-shrink-0">
<button className="group flex items-center gap-3 bg-white hover:bg-stone-50 border border-stone-200 text-stone-900 px-6 py-4 rounded-2xl font-medium text-lg transition-all shadow-sm hover:shadow-md">
<div className="bg-pink-50 text-[#FF8DA1] p-2 rounded-full group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:volume-2" strokeWidth="2" width="24"></iconify-icon>
</div>
<span className="text-base">Details suniye</span>
</button>
</div>
</div>
</div>

<section>
<div className="flex items-center gap-3 mb-6">
<div className="h-6 w-1 bg-[#FF8DA1] rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-stone-800">Schemes &amp; Madad</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-stone-100 transition-all card-hover cursor-pointer group hover:border-pink-100">
<div className="bg-blue-50 text-blue-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:landmark" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Loan &amp; Funding</h4>
<p className="text-stone-500 text-sm mb-4">Sarkari loan aur paise ki jaankari.</p>
<button className="text-stone-400 hover:text-[#FF8DA1] flex items-center gap-2 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:volume-2" width="14"></iconify-icon> Voice mein samjhao
                    </button>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 transition-all card-hover cursor-pointer group hover:border-pink-100">
<div className="bg-green-50 text-green-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Subsidy Yojana</h4>
<p className="text-stone-500 text-sm mb-4">Sarkari chhoot aur fayde.</p>
<button className="text-stone-400 hover:text-[#FF8DA1] flex items-center gap-2 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:volume-2" width="14"></iconify-icon> Voice mein samjhao
                    </button>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-100 transition-all card-hover cursor-pointer group hover:border-pink-100">
<div className="bg-orange-50 text-orange-500 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:file-question" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Form Bharne mein Madad</h4>
<p className="text-stone-500 text-sm mb-4">Avedan kaise karein, seekhein.</p>
<button className="text-stone-400 hover:text-[#FF8DA1] flex items-center gap-2 text-xs font-medium transition-colors">
<iconify-icon icon="lucide:volume-2" width="14"></iconify-icon> Voice mein samjhao
                    </button>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-6">
<div className="h-6 w-1 bg-[#FF8DA1] rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-stone-800">Business Badhayein (ONDC)</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-stone-50 hover:bg-white rounded-2xl p-5 border border-stone-200 hover:border-pink-200 transition-all flex items-center gap-4 cursor-pointer group">
<div className="bg-white p-3 rounded-xl shadow-sm text-stone-600 group-hover:text-[#FF8DA1] transition-colors">
<iconify-icon icon="lucide:package-plus" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Product Listing</h4>
<p className="text-xs text-stone-500 mt-0.5">Samaan online bechein</p>
</div>
</div>
<div className="bg-stone-50 hover:bg-white rounded-2xl p-5 border border-stone-200 hover:border-pink-200 transition-all flex items-center gap-4 cursor-pointer group">
<div className="bg-white p-3 rounded-xl shadow-sm text-stone-600 group-hover:text-[#FF8DA1] transition-colors">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Photo Catalog</h4>
<p className="text-xs text-stone-500 mt-0.5">Photo kheenchne ki madad</p>
</div>
</div>
<div className="bg-stone-50 hover:bg-white rounded-2xl p-5 border border-stone-200 hover:border-pink-200 transition-all flex items-center gap-4 cursor-pointer group">
<div className="bg-white p-3 rounded-xl shadow-sm text-stone-600 group-hover:text-[#FF8DA1] transition-colors">
<iconify-icon icon="lucide:shopping-cart" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-stone-900">Orders &amp; Buyers</h4>
<p className="text-xs text-stone-500 mt-0.5">Grahak se baat karein</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-3 mb-6">
<div className="h-6 w-1 bg-[#FF8DA1] rounded-full"></div>
<h3 className="text-xl font-semibold tracking-tight text-stone-800">Seekho aur Jaano</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative bg-stone-200 rounded-xl aspect-video overflow-hidden mb-3">
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
<div className="bg-white/90 rounded-full p-2.5 pl-3 text-[#FF8DA1] shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:play" strokeWidth="2.5" width="18"></iconify-icon>
</div>
</div>
</div>
<h5 className="text-sm font-medium text-stone-900 group-hover:text-[#FF8DA1] transition-colors">SHG Naye Niyam</h5>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-200 rounded-xl aspect-video overflow-hidden mb-3">
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
<div className="bg-white/90 rounded-full p-2.5 pl-3 text-[#FF8DA1] shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:play" strokeWidth="2.5" width="18"></iconify-icon>
</div>
</div>
</div>
<h5 className="text-sm font-medium text-stone-900 group-hover:text-[#FF8DA1] transition-colors">ONDC Onboarding</h5>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-200 rounded-xl aspect-video overflow-hidden mb-3">
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
<div className="bg-white/90 rounded-full p-2.5 pl-3 text-[#FF8DA1] shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:play" strokeWidth="2.5" width="18"></iconify-icon>
</div>
</div>
</div>
<h5 className="text-sm font-medium text-stone-900 group-hover:text-[#FF8DA1] transition-colors">Pricing Sahi Karein</h5>
</div>

<div className="group cursor-pointer">
<div className="relative bg-stone-200 rounded-xl aspect-video overflow-hidden mb-3">
<div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
<div className="bg-white/90 rounded-full p-2.5 pl-3 text-[#FF8DA1] shadow-lg group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:play" strokeWidth="2.5" width="18"></iconify-icon>
</div>
</div>
</div>
<h5 className="text-sm font-medium text-stone-900 group-hover:text-[#FF8DA1] transition-colors">Bachat ke Tarike</h5>
</div>
</div>
</section>

<section className="bg-stone-900 rounded-3xl p-8 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10">
<iconify-icon icon="lucide:brain-circuit" width="200"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-xl font-semibold mb-2 text-white">Badi Di yaad rakhti hai</h3>
<p className="text-stone-400 text-sm">Aapki pichli baatein aur progress yahan hai.</p>
</div>
<div className="flex flex-wrap gap-4">
<div className="bg-stone-800 border border-stone-700 rounded-xl p-4 flex items-center gap-3 pr-8">
<div className="bg-green-500/20 text-green-400 p-1.5 rounded-full">
<iconify-icon icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">Last Meeting</p>
<p className="font-medium text-sm">Attended ✅</p>
</div>
</div>
<div className="bg-stone-800 border border-stone-700 rounded-xl p-4 flex items-center gap-3 pr-8">
<div className="bg-[#FF8DA1]/20 text-[#FF8DA1] p-1.5 rounded-full">
<iconify-icon icon="lucide:hourglass" strokeWidth="2" width="16"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">Lakhpati Yojana</p>
<p className="font-medium text-sm">Pending ⏳</p>
</div>
</div>
<div className="bg-stone-800 border border-stone-700 rounded-xl p-4 flex items-center gap-3 pr-8">
<div className="bg-blue-500/20 text-blue-400 p-1.5 rounded-full">
<iconify-icon icon="lucide:bell-ring" strokeWidth="2" width="16"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">Next Loan</p>
<p className="font-medium text-sm">Upcoming 🔔</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-100 py-8 mb-20 md:mb-0">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-stone-400">
<iconify-icon className="text-rose-400 fill-current" icon="lucide:heart" width="14"></iconify-icon>
<span className="text-xs font-medium">Made in India, for the heart of India</span>
</div>
<div className="text-xs text-stone-400 font-medium">
                © 2024 Badi Di Platform
            </div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="voice-active bg-[#FF8DA1] text-white h-16 w-16 rounded-full flex items-center justify-center shadow-xl shadow-pink-300/40 hover:scale-105 active:scale-95 transition-all cursor-pointer group">
<iconify-icon className="group-hover:text-white transition-colors" icon="lucide:mic" strokeWidth="2" width="32"></iconify-icon>
</button>

<div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-stone-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity">
            Badi Di se baat karein
        </div>
</div>

    </>
  );
}
