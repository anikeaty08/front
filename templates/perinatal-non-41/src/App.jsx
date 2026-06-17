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
      

<nav className="w-full pt-12 pb-12 px-6 bg-white">
<div className="max-w-7xl mx-auto flex flex-col items-center gap-10">

<div className="flex items-center gap-3">

<div className="relative w-14 h-14 flex items-center justify-center">
<div className="absolute inset-0 bg-teal-100 rounded-full opacity-50"></div>
<div className="grid grid-cols-2 gap-0.5 relative z-10 p-2">
<div className="w-4 h-4 rounded-full bg-teal-400/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-500/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-600/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-300/80"></div>
</div>
</div>

<div className="flex flex-col border-l-2 border-slate-200 pl-4">
<span className="text-2xl font-serif font-semibold text-slate-800 tracking-tight leading-none">PERINATAL</span>
<span className="text-xs font-semibold text-teal-600 uppercase tracking-[0.2em] mt-1">Stem Cell Society</span>
</div>
</div>

<div className="flex flex-wrap justify-center gap-y-4 gap-x-8">
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Who We Are</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Sponsor a Vet</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Vets Apply Here</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors decoration-teal-500 underline underline-offset-4" href="#">Our Plan</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Conferences</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Contact</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Types of Stem Cells</a>
<a className="text-xs font-medium text-slate-500 hover:text-teal-600 uppercase tracking-widest transition-colors" href="#">Right to Try</a>
</div>
</div>
</nav>

<main className="max-w-4xl mx-auto px-6 pb-32">

<div className="space-y-8 mb-20">
<p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 text-justify">
                In 2013, the International Perinatal Stem Cell Society, Inc. a non-profit (501(c)(3) organization was founded on the basic principle that stem cells from perinatal tissues contain enormous, untapped life potential to treat many diseases and disorders. Perinatal stem cell sources include: amnion, amniotic fluid, cord blood, cord tissue/wharton's jelly, as well as placental blood and placental tissue. Perinatal stem cells are formed around the time of birth and are classified as adult stem cells but they really are more primitive then stem cells found in bone marrow or adipose tissue or other traditional sources of adult stem cells and as such, have greater therapeutic potential. As pioneers in the use of Perinatal stem cells and tissue products we gathered the leading manufactures and drafted this position paper on how we believe we could advance stem cell therapy to the masses through simple regulatory law changes and improvements without compromising safety or efficacy.
            </p>
</div>

<div className="bg-slate-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 mb-20">

<div className="flex items-center justify-between h-14 px-4 bg-slate-800 border-b border-slate-700/60 shadow-sm select-none z-20 relative">

<div className="flex items-center gap-3 flex-1 min-w-0">
<button className="group flex items-center justify-center w-8 h-8 rounded-md hover:bg-slate-700/50 transition-all duration-200">
<svg className="lucide lucide-menu text-slate-400 group-hover:text-slate-100 transition-colors w-5 h-5" data-lucide="menu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="h-4 w-px bg-slate-700/50 hidden sm:block"></div>
<span className="text-xs font-medium text-slate-200 truncate tracking-wide hidden sm:block">Perinatal Society Position Paper</span>
<span className="text-xs font-medium text-slate-200 truncate tracking-wide sm:hidden">Position Paper</span>
</div>

<div className="flex items-center bg-slate-900/40 ring-1 ring-white/5 rounded-lg p-1 gap-0.5 shadow-sm backdrop-blur-sm">

<div className="flex items-center px-2.5 gap-1.5 border-r border-white/5 pr-2.5 mr-0.5 h-6">
<span className="text-xs font-medium text-slate-200 tabular-nums">1</span>
<span className="text-[10px] text-slate-500 font-medium">/</span>
<span className="text-xs text-slate-500 font-medium tabular-nums">8</span>
</div>

<button className="p-1 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-100 transition-all disabled:opacity-50">
<svg className="lucide lucide-minus w-3.5 h-3.5" data-lucide="minus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<div className="min-w-[40px] text-center px-1">
<span className="text-[11px] font-medium text-slate-300 tabular-nums">100%</span>
</div>
<button className="p-1 rounded-md hover:bg-white/5 text-slate-400 hover:text-slate-100 transition-all">
<svg className="lucide lucide-plus w-3.5 h-3.5" data-lucide="plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="flex items-center justify-end gap-1 flex-1">
<button className="group flex items-center justify-center w-8 h-8 rounded-md hover:bg-slate-700/50 transition-all duration-200" title="Download">
<svg className="lucide lucide-download text-slate-400 group-hover:text-slate-100 w-4.5 h-4.5" data-lucide="download" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="group flex items-center justify-center w-8 h-8 rounded-md hover:bg-slate-700/50 transition-all duration-200" title="Print">
<svg className="lucide lucide-printer text-slate-400 group-hover:text-slate-100 w-4.5 h-4.5" data-lucide="printer" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
</button>
<div className="h-4 w-px bg-slate-700 mx-1"></div>
<button className="group flex items-center justify-center w-8 h-8 rounded-md hover:bg-slate-700/50 transition-all duration-200" title="More options">
<svg className="lucide lucide-more-vertical text-slate-400 group-hover:text-slate-100 w-4.5 h-4.5" data-lucide="more-vertical" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle className="" cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</div>

<div className="bg-slate-200/50 h-[500px] overflow-y-auto flex justify-center p-8 relative">

<div className="hidden md:flex flex-col gap-4 absolute left-0 top-0 bottom-0 w-48 bg-slate-900/95 p-4 overflow-y-auto border-r border-slate-700 z-10">
<div className="aspect-[3/4] bg-white opacity-100 ring-2 ring-teal-500 cursor-pointer"></div>
<div className="aspect-[3/4] bg-white opacity-50 hover:opacity-80 transition-opacity cursor-pointer"></div>
<div className="aspect-[3/4] bg-white opacity-50 hover:opacity-80 transition-opacity cursor-pointer"></div>
</div>

<div className="w-full max-w-2xl bg-white shadow-lg min-h-[800px] p-12 md:ml-48">

<div className="flex flex-col items-center border-b border-slate-100 pb-8 mb-8">
<div className="w-12 h-12 mb-4 opacity-80 grid grid-cols-2 gap-0.5 p-2">
<div className="w-4 h-4 rounded-full bg-teal-400/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-500/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-600/80"></div>
<div className="w-4 h-4 rounded-full bg-teal-300/80"></div>
</div>
<h2 className="text-xl font-serif font-bold text-center text-slate-900 mb-1">PERINATAL</h2>
<div className="text-[0.6rem] font-bold text-teal-600 uppercase tracking-widest">Stem Cell Society</div>
</div>
<h3 className="text-xl font-serif font-bold text-center text-slate-900 leading-tight mb-6">Perinatal Society's Position Paper on the Regulatory Landscape for Perinatal Stem Cell and Tissue Products</h3>
<div className="space-y-4 text-justify">
<p className="text-xs leading-relaxed text-slate-800 font-serif">The International Perinatal Stem Cell Society, Inc., a 501(c)3 patient focused non-profit organization founded in 2013, is dedicated to advancing perinatal stem cell and tissue products from the laboratory to clinical applications. Perinatal stem cells and tissue products are ethically sourced from perinatal tissues such as the amnion, amniotic fluid, cord blood, decidua, Wharton's jelly/cord tissue, and placental blood.</p>
<p className="text-xs leading-relaxed text-slate-800 font-serif">We believe that the current regulatory framework can be optimized to allow for faster patient access without compromising safety...</p>
<div className="w-full h-32 bg-slate-50 rounded border border-slate-100 mt-4"></div>
</div>
</div>
</div>
</div>

<div className="relative max-w-2xl mx-auto mb-16 group cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
<div className="relative bg-black rounded-xl overflow-hidden aspect-video shadow-lg">
<img alt="Speaker Video" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors">
<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ring-1 ring-white/50 group-hover:scale-110 transition-transform">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
<svg className="lucide lucide-play w-5 h-5 text-slate-900 fill-slate-900 ml-1 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm">
<div className="grid grid-cols-2 gap-px w-6 h-6">
<div className="w-2 h-2 rounded-full bg-teal-500"></div>
<div className="w-2 h-2 rounded-full bg-teal-600"></div>
<div className="w-2 h-2 rounded-full bg-teal-700"></div>
<div className="w-2 h-2 rounded-full bg-teal-400"></div>
</div>
<div className="flex flex-col">
<span className="text-[0.5rem] font-bold text-slate-900 leading-none">PERINATAL</span>
<span className="text-[0.4rem] font-semibold text-teal-600 uppercase tracking-wider">Stem Cell Society</span>
</div>
</div>
</div>
</div>
<hr className="border-t border-slate-200 mb-16"/>

<div className="relative w-full rounded-sm overflow-hidden mb-16 shadow-xl">

<div className="aspect-[16/7] w-full relative">
<img alt="Mountain Landscape with Rainbow" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/10"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="bg-white/95 backdrop-blur-sm px-10 py-10 max-w-xl text-center shadow-2xl">
<h2 className="text-2xl md:text-3xl font-bold font-sans text-slate-800 uppercase tracking-tighter leading-snug">
                        Our Goal is to Change Federal Law that Regulates <span className="text-teal-700">Perinatal Stem Cell</span> and Tissue Products in the United States
                    </h2>
</div>
</div>
</div>
<hr className="border-t border-slate-200 mb-16"/>

<div className="max-w-3xl mx-auto text-center mb-24">
<h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 tracking-tight mb-8">
                Here is how the World will change with this new law.
            </h3>
<div className="relative w-full group cursor-pointer">
<div className="absolute -inset-2 bg-slate-200 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
<div className="relative bg-slate-900 rounded-xl overflow-hidden aspect-video shadow-2xl ring-1 ring-slate-900/5">
<img alt="Speaker Video 2" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors">
<div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center ring-1 ring-white/40 group-hover:scale-105 transition-transform duration-300">
<div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-play w-6 h-6 text-slate-900 fill-slate-900 ml-1 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>

<div className="absolute bottom-5 left-5 bg-white px-4 py-3 rounded-lg shadow-md flex items-center gap-3">
<div className="grid grid-cols-2 gap-0.5 w-8 h-8 p-1 bg-slate-50 rounded-sm">
<div className="w-full h-full rounded-full bg-teal-400"></div>
<div className="w-full h-full rounded-full bg-teal-500"></div>
<div className="w-full h-full rounded-full bg-teal-600"></div>
<div className="w-full h-full rounded-full bg-teal-300"></div>
</div>
<div className="flex flex-col items-start">
<span className="text-[0.6rem] font-bold text-slate-900 leading-none">PERINATAL</span>
<span className="text-[0.5rem] font-semibold text-teal-600 uppercase tracking-wider mt-0.5 border-t border-slate-200 pt-0.5 w-full">Stem Cell Society</span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full border-t border-slate-100 py-12">
<div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
<div className="w-8 h-8 opacity-20 grid grid-cols-2 gap-0.5 mb-6">
<div className="rounded-full bg-teal-900"></div>
<div className="rounded-full bg-teal-900"></div>
<div className="rounded-full bg-teal-900"></div>
<div className="rounded-full bg-teal-900"></div>
</div>
<p className="text-sm text-slate-400">© 2025 Perinatal Stem Cell Society. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
