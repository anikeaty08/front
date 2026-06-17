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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed top-0 w-full h-screen -z-10 pointer-events-none opacity-30">
<div className="absolute top-0 left-0 w-full h-full mix-blend-multiply" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/435d613f-d4c2-403a-8de6-2807eaadddcb_3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 100%)', opacity: '0.05'}}></div>
</div>
<div className="flex flex-wrap items-center justify-center gap-[40px] scale-[0.85] md:scale-100 origin-top">

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-stone-100 ring-1 ring-black/5 p-[10px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),_0_30px_60px_-30px_rgba(0,0,0,0.1),_inset_0_-2px_6px_0_rgba(10,37,64,0.05)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#FDFBF7] ring-1 ring-stone-900/5">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black z-50"></div>

<div className="h-full w-full flex flex-col relative overflow-hidden">

<div className="flex items-center justify-between px-6 pt-14 pb-4 z-10 bg-[#FDFBF7]/80 backdrop-blur-sm">
<div className="flex items-center gap-1">
<span className="text-xl font-medium serif tracking-tight text-stone-900">Aurora</span>
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1"></span>
</div>
<button className="p-2 rounded-full hover:bg-stone-100 transition-colors">
<i className="w-5 h-5 text-stone-600" data-lucide="search"></i>
</button>
</div>

<div className="overflow-y-auto no-scrollbar px-6 pb-20">
<div className="mb-8">
<h2 className="text-3xl serif text-stone-900 mb-1">Collections</h2>
<p className="text-xs text-stone-500">Curated for the discerning mind</p>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] uppercase tracking-widest text-white font-medium bg-black/20 backdrop-blur px-2 py-1 rounded-full border border-white/20">Abstract</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 mt-8">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] uppercase tracking-widest text-white font-medium bg-black/20 backdrop-blur px-2 py-1 rounded-full border border-white/20">Sculpture</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] uppercase tracking-widest text-white font-medium bg-black/20 backdrop-blur px-2 py-1 rounded-full border border-white/20">Digital</span>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 mt-8">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-multiply opacity-60 bg-[#FDFBF7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute bottom-4 left-4">
<span className="text-[10px] uppercase tracking-widest text-stone-900 font-medium bg-white/40 backdrop-blur px-2 py-1 rounded-full border border-stone-900/10">Nature</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between border-b border-stone-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Exhibitions</p>
<p className="text-xs text-stone-500">Upcoming Shows</p>
</div>
</div>
<i className="w-4 h-4 text-stone-400" data-lucide="chevron-right"></i>
</div>
<div className="flex items-center justify-between border-b border-stone-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="gem"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-900">Membership</p>
<p className="text-xs text-stone-500">Join the circle</p>
</div>
</div>
<i className="w-4 h-4 text-stone-400" data-lucide="chevron-right"></i>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-20 bg-white/90 backdrop-blur border-t border-stone-100 flex items-center justify-around px-6">
<button className="flex flex-col items-center gap-1 text-stone-900">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-stone-400 hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="compass"></i>
</button>
<button className="flex flex-col items-center gap-1 text-stone-400 hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="ticket"></i>
</button>
<button className="flex flex-col items-center gap-1 text-stone-400 hover:text-stone-900 transition-colors">
<i className="w-5 h-5" data-lucide="user"></i>
</button>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-stone-100 ring-1 ring-black/5 p-[10px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),_0_30px_60px_-30px_rgba(0,0,0,0.1),_inset_0_-2px_6px_0_rgba(10,37,64,0.05)] z-10">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#FDFBF7] ring-1 ring-stone-900/5">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black z-50"></div>

<div className="h-full w-full flex flex-col relative">

<div className="flex items-center justify-between px-6 pt-14 pb-4">
<div className="p-2 border border-stone-200 rounded-full">
<i className="w-4 h-4 text-stone-900" data-lucide="menu"></i>
</div>
<div className="text-xs font-bold uppercase tracking-widest text-stone-400">The Gallery</div>
<div className="w-8 h-8 rounded-full overflow-hidden border border-stone-200">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center text-center px-4 pb-20">

<div className="flex items-center gap-2 mb-2">
<h1 className="text-5xl serif tracking-tighter text-stone-900 uppercase">Such</h1>
<div className="w-12 h-8 rounded-full border border-stone-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<h1 className="text-5xl serif tracking-tighter text-stone-900 uppercase mb-2">Splendid</h1>

<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-white -rotate-12">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
<h1 className="text-5xl serif tracking-tighter text-stone-900 uppercase">Spaces</h1>
</div>

<div className="relative w-64 h-80 rounded-t-full border border-stone-200 p-2 mb-8">
<div className="w-full h-full rounded-t-full overflow-hidden bg-stone-100 relative">
<img className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm">
<i className="w-4 h-4 ml-0.5 fill-stone-900 text-stone-900" data-lucide="play"></i>
</div>
</div>

<span className="absolute -right-8 top-12 script text-4xl text-orange-400 -rotate-12">Art</span>
</div>

<button className="bg-stone-900 text-white px-8 py-3 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-orange-500 transition-colors flex items-center gap-2 group">
                            Enter Gallery
                            <i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="relative w-[393px] h-[852px] rounded-[56px] bg-stone-100 ring-1 ring-black/5 p-[10px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.15),_0_30px_60px_-30px_rgba(0,0,0,0.1),_inset_0_-2px_6px_0_rgba(10,37,64,0.05)]">
<div className="relative w-full h-full rounded-[44px] overflow-hidden bg-[#FDFBF7] ring-1 ring-stone-900/5">

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-8 w-32 rounded-full bg-black z-50"></div>

<div className="h-full w-full flex flex-col overflow-hidden relative">

<div className="h-[55%] w-full relative overflow-hidden bg-stone-200">
<img alt="Chrome Head" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-0 left-0 w-full px-6 pt-14 flex justify-between items-start">
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/10 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border border-white/10 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="share-2"></i>
</button>
</div>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FDFBF7] to-transparent"></div>
</div>

<div className="flex-1 px-6 -mt-10 relative z-10">
<div className="flex items-start justify-between mb-2">
<div>
<span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 block">Featured Piece</span>
<h2 className="text-4xl serif tracking-tight text-stone-900 leading-none">Chrome <br/>Visionary</h2>
</div>
<div className="text-right">
<p className="text-2xl serif text-stone-900">$24k</p>
<p className="text-[10px] text-stone-500 uppercase tracking-wide">Current Bid</p>
</div>
</div>
<div className="flex items-center gap-3 my-6">
<div className="flex -space-x-3">
<img className="w-8 h-8 rounded-full border-2 border-[#FDFBF7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86071fe2-c5b4-4d6d-8cc8-87a7cc2edda1_320w.jpg"/>
<img className="w-8 h-8 rounded-full border-2 border-[#FDFBF7]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a97544a-e641-4759-a1a7-7dae56e72f14_320w.webp"/>
<div className="w-8 h-8 rounded-full border-2 border-[#FDFBF7] bg-stone-900 text-white text-[10px] flex items-center justify-center">+12</div>
</div>
<p className="text-xs text-stone-500">People watching this piece</p>
</div>
<p className="text-sm text-stone-600 leading-relaxed mb-8">
                            Unleashing the power of creativity through digital design. A sanctuary where every pixel tells a story of the future.
                        </p>

<div className="flex items-center gap-3 mt-auto pb-8">
<button className="flex-1 bg-stone-900 text-white py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
                                Place Bid
                            </button>
<button className="w-14 h-14 rounded-full border border-stone-200 flex items-center justify-center text-stone-900 hover:bg-stone-100 transition-colors">
<i className="w-5 h-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
