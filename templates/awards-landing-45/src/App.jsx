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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#CC9A18] opacity-[0.03] blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="relative z-10 border-b border-white/5 backdrop-blur-md bg-[#0a0a0a]/80">
<nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<a className="font-['Georgia',serif] text-2xl tracking-tight font-semibold text-white flex items-center gap-2 group" href="https://emergeusconference.com/">
<i className="w-6 h-6 text-[#CC9A18] group-hover:rotate-12 transition-transform" data-lucide="crown" strokeWidth="1.5"></i>
                B. L. A. C. K. I AM
            </a>
<a className="text-base font-medium text-gray-400 hover:text-[#CC9A18] transition-colors flex items-center gap-2" href="https://emergeusconference.com/" target="_blank">
                EmergeUs Conference <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</nav>
</header>

<main className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="xl:col-span-7 flex flex-col gap-10">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#CC9A18]/20 bg-[#CC9A18]/10 text-[#CC9A18] text-sm font-medium w-fit shadow-[0_0_20px_rgba(204,154,24,0.1)]">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> 10th Annual Event
                </div>
<h1 className="font-['Georgia',serif] text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
<span className="text-[#CC9A18]">B. L. A. C. K. I AM</span><br/>
                    International Awards
                </h1>
<p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                    The 10th Annual B. L. A. C. K. I AM International Awards honors extraordinary individuals whose leadership and humanitarian work uplift humanity.
                </p>
</div>
<div className="space-y-6 pt-8 border-t border-white/10">
<h3 className="font-['Georgia',serif] text-3xl font-semibold tracking-tight text-white">Award Categories</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/40 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-[#CC9A18]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#CC9A18]/20 transition-all duration-300">
<i className="w-6 h-6 text-[#CC9A18]" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h4 className="font-['Georgia',serif] text-xl font-semibold tracking-tight text-white">B. L. A. C. K. I AM Award</h4>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/40 hover:bg-white/[0.04] transition-all duration-300 group">
<div className="w-12 h-12 rounded-full bg-[#CC9A18]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#CC9A18]/20 transition-all duration-300">
<i className="w-6 h-6 text-[#CC9A18]" data-lucide="landmark" strokeWidth="1.5"></i>
</div>
<h4 className="font-['Georgia',serif] text-xl font-semibold tracking-tight text-white">B. L. A. C. K. House Award</h4>
</div>

<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CC9A18]/40 hover:bg-white/[0.04] transition-all duration-300 group sm:col-span-2">
<div className="w-12 h-12 rounded-full bg-[#CC9A18]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#CC9A18]/20 transition-all duration-300">
<i className="w-6 h-6 text-[#CC9A18]" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<h4 className="font-['Georgia',serif] text-xl font-semibold tracking-tight text-white">Rare Jewel Award</h4>
</div>
</div>
</div>
<div className="pt-6">
<p className="text-lg text-[#CC9A18] font-['Georgia',serif] italic mb-8 border-l-2 border-[#CC9A18] pl-6 py-2 bg-gradient-to-r from-[#CC9A18]/5 to-transparent">
                    "These awards celebrate leaders whose work transforms lives and strengthens communities."
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#CC9A18] text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(204,154,24,0.3)]" href="https://www.emergeusconference.com/black-i-am-awards">
                        Submit Recommendations <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="xl:col-span-5 relative group mt-8 xl:mt-0">
<div className="absolute -inset-4 bg-gradient-to-r from-[#CC9A18]/20 to-transparent blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 rounded-3xl z-0"></div>
<div className="relative w-full aspect-[2/3] max-w-lg mx-auto xl:max-w-none rounded-3xl overflow-hidden shadow-2xl border border-[#CC9A18]/20 bg-[#0a0a0a] z-10">
<img alt="B.L.A.C.K. I AM Awards Poster" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://i.ibb.co/C311Lttz/241d713c-0af1-4560-afb6-df41fdd09b2e.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
</div>
</div>
</main>

<footer className="relative z-10 border-t border-white/5 py-12 mt-12 text-center bg-black/50">
<p className="text-base text-gray-500 max-w-7xl mx-auto px-6">
            © 2024 B. L. A. C. K. I AM International Awards. An EmergeUs Entertainment Gala.<br className="hidden sm:block"/> Making Africa Great Again.
        </p>
</footer>


    </>
  );
}
