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
      

<nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center text-[#202a2d] uppercase tracking-widest text-xs font-medium border-b border-[#202a2d]/10">
<div className="flex gap-8">
<a className="hover:opacity-60 transition-opacity" href="#">About</a>
<a className="hover:opacity-60 transition-opacity hidden md:block" href="#">Services</a>
</div>
<div className="font-['DM_Serif_Display'] text-2xl tracking-tight text-[#202a2d]">ubuntu</div>
<div className="flex gap-8">
<a className="hover:opacity-60 transition-opacity hidden md:block" href="#">Journal</a>
<a className="hover:opacity-60 transition-opacity" href="#">Contact</a>
</div>
</nav>

<header className="w-full max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-12 md:pt-32 md:pb-20">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
<div className="max-w-3xl">
<h1 className="font-['DM_Serif_Display'] text-[#202a2d] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                    meet the <br/><span className="italic font-normal opacity-80">family</span>
</h1>
<p className="text-lg md:text-xl text-[#202a2d]/80 leading-relaxed max-w-2xl font-light">
                    Since 2013, we have been drawn to South Africa year after year – it has now become our second home. The diversity of this country continues to fascinate us anew.
                </p>
</div>

<div className="hidden md:block rotate-[-6deg] translate-y-[-2rem]">
<p className="font-['Reenie_Beanie'] text-[#202a2d] text-4xl">behind the scenes</p>
<i className="text-[#202a2d] w-8 h-8 ml-8 mt-2 stroke-[1.5]" data-lucide="arrow-down-right"></i>
</div>
</div>
</header>

<section className="w-full px-4 md:px-12 mb-24 md:mb-32">
<div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden rounded-[2rem] md:rounded-[3rem]">
<img alt="The Family behind Ubuntu Guesthouse" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&amp;w=2848&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-[#202a2d]/80 to-transparent">
<span className="text-[#cbd0b5] font-['DM_Serif_Display'] text-3xl md:text-5xl tracking-tight">The Family</span>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">

<div className="flex flex-col gap-6 group">
<div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#202a2d]/5">
<img alt="Beat" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['DM_Serif_Display'] text-4xl text-[#202a2d] tracking-tight">Beat</h3>
<span className="text-xs uppercase tracking-widest text-[#202a2d]/70 font-medium">Mountain Biker</span>
</div>
<p className="text-lg text-[#202a2d]/80 leading-relaxed font-light">
                        Passionate mountain biker who knows the trails like the back of his hand.
                    </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#202a2d]/5">
<img alt="Esther" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['DM_Serif_Display'] text-4xl text-[#202a2d] tracking-tight">Esther</h3>
<span className="text-xs uppercase tracking-widest text-[#202a2d]/70 font-medium">Community</span>
</div>
<p className="text-lg text-[#202a2d]/80 leading-relaxed font-light">
                        Dedicates herself wholeheartedly to Kayamandi, a township in Stellenbosch.
                    </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#202a2d]/5">
<img alt="Silas" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['DM_Serif_Display'] text-4xl text-[#202a2d] tracking-tight">Silas</h3>
<span className="text-xs uppercase tracking-widest text-[#202a2d]/70 font-medium">Adventure Lover</span>
</div>
<p className="text-lg text-[#202a2d]/80 leading-relaxed font-light">
                        Loves biking, nature, and exciting adventures – always looking for the next thrill.
                    </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#202a2d]/5">
<img alt="Salome" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['DM_Serif_Display'] text-4xl text-[#202a2d] tracking-tight">Salome</h3>
<span className="text-xs uppercase tracking-widest text-[#202a2d]/70 font-medium">Creative</span>
</div>
<p className="text-lg text-[#202a2d]/80 leading-relaxed font-light">
                        Actively involved in the children's project songo.info where she contributes her creativity.
                    </p>
</div>
</div>

<div className="flex flex-col gap-6 group">
<div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#202a2d]/5">
<img alt="Enea" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1562004760-aceed7bb0fe3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-baseline justify-between mb-2">
<h3 className="font-['DM_Serif_Display'] text-4xl text-[#202a2d] tracking-tight">Enea</h3>
<span className="text-xs uppercase tracking-widest text-[#202a2d]/70 font-medium">Pool Relaxer</span>
</div>
<p className="text-lg text-[#202a2d]/80 leading-relaxed font-light">
                        Enjoys browsing while shopping or relaxing during peaceful hours by the pool.
                    </p>
</div>
</div>

<div className="hidden lg:flex flex-col justify-end p-8 border border-[#202a2d]/20 rounded-[2rem]">
<i className="w-12 h-12 text-[#202a2d] mb-4 stroke-[1.5]" data-lucide="heart-handshake"></i>
<p className="font-['DM_Serif_Display'] text-3xl text-[#202a2d] leading-tight tracking-tight">
                    "We didn't just build a guesthouse, we built a home for travelers."
                </p>
</div>
</div>
</section>

<section className="w-full mb-20 overflow-hidden">
<div className="px-6 md:px-12 mb-10 flex items-end justify-between">
<h2 className="font-['DM_Serif_Display'] text-[#202a2d] text-5xl md:text-7xl tracking-tight leading-[0.9]">
                building the <br/>dream
            </h2>
<div className="hidden md:flex gap-4">
<button className="w-14 h-14 rounded-full border border-[#202a2d]/30 flex items-center justify-center text-[#202a2d] hover:bg-[#202a2d] hover:text-[#cbd0b5] transition-colors">
<i className="stroke-[1.5]" data-lucide="arrow-left" width="24"></i>
</button>
<button className="w-14 h-14 rounded-full border border-[#202a2d]/30 flex items-center justify-center text-[#202a2d] hover:bg-[#202a2d] hover:text-[#cbd0b5] transition-colors">
<i className="stroke-[1.5]" data-lucide="arrow-right" width="24"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto no-scrollbar px-6 md:px-12 pb-12 snap-x snap-mandatory">

<div className="snap-start shrink-0 w-[85vw] md:w-[35vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
<img alt="Construction 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-[#cbd0b5]/90 backdrop-blur-sm px-5 py-3 rounded-full">
<p className="text-xs uppercase tracking-widest font-semibold text-[#202a2d]">Foundations</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[35vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
<img alt="Construction 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-[#cbd0b5]/90 backdrop-blur-sm px-5 py-3 rounded-full">
<p className="text-xs uppercase tracking-widest font-semibold text-[#202a2d]">Structure</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[35vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
<img alt="Construction 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-6 left-6 bg-[#cbd0b5]/90 backdrop-blur-sm px-5 py-3 rounded-full">
<p className="text-xs uppercase tracking-widest font-semibold text-[#202a2d]">Detailing</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[35vw] aspect-[4/3] rounded-[2rem] overflow-hidden relative group">
<img alt="Construction 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-[#cbd0b5]/90 backdrop-blur-sm px-5 py-3 rounded-full">
<p className="text-xs uppercase tracking-widest font-semibold text-[#202a2d]">The Garden</p>
</div>
</div>
</div>
</section>

<footer className="w-full px-6 md:px-12 py-16 bg-[#202a2d] text-[#cbd0b5]">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<span className="font-['DM_Serif_Display'] text-3xl">ubuntu</span>
<div className="flex gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
<p className="text-xs opacity-60 uppercase tracking-widest">© 2023 Ubuntu Guesthouse</p>
</div>
</footer>


    </>
  );
}
