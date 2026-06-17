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



        lucide.createIcons();
    
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
      

<header className="bg-[#f8fafc]/80 w-full z-20 border-slate-200/50 border-b relative backdrop-blur-xl">
<nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center">

<a className="text-4xl text-[#E55B3C] tracking-tight hover:opacity-90 transition-opacity font-bricolage font-semibold" href="/" style={{fontFamily: 'Pacifico, cursive'}}>
                    Bésame
                </a>
</div>
<div className="hidden md:flex items-center gap-10 text-lg font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors font-sans" href="#flavors">Flavors</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#story">Our Story</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#location">Location</a>
</div>
<div className="hidden md:flex">
<a className="bg-white text-slate-900 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 px-6 py-3 rounded-full text-lg font-medium transition-all shadow-sm font-sans" href="#visit">
                    Order Online
                </a>
</div>
<button className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>
</header>

<main className="flex-grow md:pt-24 md:pb-32 flex flex-col lg:flex-row lg:gap-20 overflow-hidden w-full max-w-7xl z-10 mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="absolute top-1/4 left-0 w-96 h-96 bg-[#9BC3F4]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#E55B3C]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-blob animation-delay-2000"></div>

<div className="flex-1 flex flex-col gap-10 lg:max-w-2xl w-full gap-x-10 gap-y-10 items-start">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#E55B3C]/10 border border-[#E55B3C]/20 text-[#D8492A] text-sm font-medium tracking-tight font-sans">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                Locally crafted in Austin, TX
            </div>
<div className="flex flex-col gap-6">
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl text-slate-900 tracking-tight font-bricolage font-semibold">
                    Layers of joy in every <span className="text-[#E55B3C] font-bricolage font-semibold">single scoop.</span>
</h1>
<p className="md:text-xl leading-relaxed text-lg text-slate-600 max-w-xl font-bricolage font-semibold">
                    Experience the magic of small-batch artisanal ice cream. We blend locally sourced ingredients to create decadent, layered flavors that make every bite an unforgettable celebration.
                </p>
</div>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm w-full max-w-lg relative overflow-hidden group hover:border-[#9BC3F4] transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-[#E55B3C]"></div>
<div className="p-3 bg-slate-50 rounded-xl text-slate-700 border border-slate-100 group-hover:bg-[#9BC3F4]/20 group-hover:text-[#3B82F6] group-hover:border-[#9BC3F4]/30 transition-colors">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col gap-1.5">
<h3 className="text-xl tracking-tight text-slate-900 font-bricolage font-semibold">Open Daily</h3>
<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-lg text-slate-600">
<span className="font-sans">11:30 AM – 10:00 PM</span>
<span className="hidden sm:inline text-slate-300 font-sans">•</span>
<span className="text-slate-500 font-sans">1808 Blanco Ave.</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E55B3C] hover:bg-[#D8492A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all shadow-lg shadow-[#E55B3C]/25 hover:shadow-[#E55B3C]/40 hover:-translate-y-0.5 font-sans" href="#visit">
                    Visit Us
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex-1 w-full relative max-w-xl lg:max-w-none mx-auto">

<div className="absolute -inset-4 md:-inset-8 bg-[#9BC3F4] rounded-[2.5rem] md:rounded-[3rem] transform rotate-3 opacity-30 -z-10"></div>
<div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-[#9BC3F4] border-8 border-white ring-1 ring-slate-900/5 group">

<img alt="Cross section of layered artisanal ice cream" className="transition-transform duration-700 ease-out group-hover:scale-[1.03] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ee5f13-fb32-43f8-b58e-b86a52d80afe_3840w.png?w=800&amp;q=80"/>

<div className="group-hover:opacity-100 transition-opacity duration-500 cursor-pointer bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/attachments/attachments/107ef279-d67a-4d9c-b691-89ce70fe1ae2.png'" role="button"></div>

<div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md px-5 py-3 md:px-6 md:py-4 rounded-2xl shadow-xl border border-white/40 flex items-center gap-3 md:gap-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<div className="bg-amber-100 p-2 md:p-2.5 rounded-full text-amber-600">
<i className="w-4 h-4 md:w-5 md:h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-lg md:text-xl tracking-tight text-slate-900 leading-none mb-1 font-bricolage font-semibold">Top Rated</span>
<span className="text-slate-600 text-sm md:text-base leading-none font-sans">Voted Best in ATX</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
