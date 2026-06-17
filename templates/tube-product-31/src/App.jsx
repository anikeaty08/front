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
      

<main className="w-full max-w-6xl mx-auto z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">

<div className="flex flex-col items-center group">

<div className="relative z-20 mb-[-1rem] transform transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 blur-md rounded-[100%]"></div>

<div className="w-28 h-56 tube-body-gradient relative shadow-inner flex items-center justify-center overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'}}>

<div className="absolute top-0 left-0 w-full h-3 border-b border-gray-200 tube-crimp opacity-50"></div>

<div className="absolute left-1/4 top-0 w-8 h-full bg-white/40 blur-sm pointer-events-none"></div>

<h2 className="text-4xl font-bold tracking-widest text-pink-500 transform -rotate-90 opacity-90 select-none">TUBE</h2>
</div>

<div className="w-20 h-10 bg-pink-500 mx-auto rounded-b-2xl rounded-t-sm shadow-md relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 border-2 border-pink-400 rounded-[50%] opacity-50"></div>

<div className="absolute top-0 right-2 w-full h-full bg-gradient-to-l from-black/10 to-transparent"></div>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm w-full pt-16 pb-8 px-6 text-center rounded-none shadow-none flex flex-col items-center relative z-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Tube Name</h3>
<p className="text-base text-slate-500 leading-relaxed max-w-[24ch] mx-auto font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
<div className="my-6">
<span className="text-3xl font-semibold text-slate-800 tracking-tight">$ 9.99</span>
</div>
<div className="flex items-center justify-between w-full max-w-[14rem] mx-auto mt-2">

<div className="flex items-center space-x-3 text-slate-800 font-semibold text-lg">
<button className="hover:text-pink-500 transition-colors">-</button>
<span>1</span>
<button className="hover:text-pink-500 transition-colors">+</button>
</div>

<button className="bg-white hover:bg-pink-50 border border-transparent hover:border-pink-100 shadow-sm text-pink-500 text-sm font-bold py-2 px-6 rounded-full tracking-wide transition-all uppercase">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="flex flex-col items-center relative -mb-6 md:mb-0">

<div className="absolute bottom-0 w-full h-[90%] bg-amber-400 rounded-3xl shadow-xl shadow-amber-400/20 z-0"></div>

<div className="relative z-20 mb-[-0.5rem] transform scale-110 origin-bottom transition-transform duration-300 hover:-translate-y-2">

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black/20 blur-lg rounded-[100%]"></div>

<div className="w-28 h-56 tube-body-gradient relative shadow-2xl flex items-center justify-center overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'}}>
<div className="absolute top-0 left-0 w-full h-3 border-b border-gray-200 tube-crimp opacity-50"></div>
<div className="absolute left-1/4 top-0 w-8 h-full bg-white/40 blur-sm pointer-events-none"></div>
<h2 className="text-5xl font-bold tracking-widest text-blue-500 transform -rotate-90 opacity-90 select-none">TUBE</h2>
</div>

<div className="w-20 h-10 bg-blue-500 mx-auto rounded-b-2xl rounded-t-sm shadow-lg relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 border-2 border-blue-400 rounded-[50%] opacity-50"></div>
<div className="absolute top-0 right-2 w-full h-full bg-gradient-to-l from-black/10 to-transparent"></div>
</div>
</div>

<div className="w-full pt-14 pb-10 px-6 text-center relative z-10">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-3">Tube Name</h3>
<p className="text-base text-amber-100 leading-relaxed max-w-[26ch] mx-auto font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
<div className="my-6">
<span className="text-4xl font-semibold text-white tracking-tight">$ 9.99</span>
</div>
<div className="flex items-center justify-between w-full max-w-[15rem] mx-auto mt-4">

<div className="flex items-center space-x-3 text-white font-semibold text-xl">
<button className="hover:text-blue-200 transition-colors opacity-80 hover:opacity-100">-</button>
<span>1</span>
<button className="hover:text-blue-200 transition-colors opacity-80 hover:opacity-100">+</button>
</div>

<button className="bg-white hover:bg-blue-50 shadow-lg shadow-amber-600/20 text-amber-500 text-sm font-bold py-3 px-7 rounded-full tracking-wide transition-all uppercase">
                            Add to Cart
                        </button>
</div>
</div>
</div>

<div className="flex flex-col items-center group">

<div className="relative z-20 mb-[-1rem] transform transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black/10 blur-md rounded-[100%]"></div>

<div className="w-28 h-56 tube-body-gradient relative shadow-inner flex items-center justify-center overflow-hidden" style={{clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)'}}>
<div className="absolute top-0 left-0 w-full h-3 border-b border-gray-200 tube-crimp opacity-50"></div>
<div className="absolute left-1/4 top-0 w-8 h-full bg-white/40 blur-sm pointer-events-none"></div>
<h2 className="text-4xl font-bold tracking-widest text-amber-600 transform -rotate-90 opacity-90 select-none">TUBE</h2>
</div>

<div className="w-20 h-10 bg-amber-600 mx-auto rounded-b-2xl rounded-t-sm shadow-md relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-6 border-2 border-amber-500 rounded-[50%] opacity-50"></div>
<div className="absolute top-0 right-2 w-full h-full bg-gradient-to-l from-black/10 to-transparent"></div>
</div>
</div>

<div className="bg-white/50 backdrop-blur-sm w-full pt-16 pb-8 px-6 text-center rounded-none shadow-none flex flex-col items-center relative z-10">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Tube Name</h3>
<p className="text-base text-slate-500 leading-relaxed max-w-[24ch] mx-auto font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
<div className="my-6">
<span className="text-3xl font-semibold text-slate-800 tracking-tight">$ 9.99</span>
</div>
<div className="flex items-center justify-between w-full max-w-[14rem] mx-auto mt-2">

<div className="flex items-center space-x-3 text-slate-800 font-semibold text-lg">
<button className="hover:text-amber-600 transition-colors">-</button>
<span>1</span>
<button className="hover:text-amber-600 transition-colors">+</button>
</div>

<button className="bg-white hover:bg-amber-50 border border-transparent hover:border-amber-100 shadow-sm text-amber-600 text-sm font-bold py-2 px-6 rounded-full tracking-wide transition-all uppercase">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</main>

<footer className="fixed bottom-0 w-full h-12 bg-sky-700 flex items-center justify-end px-6 z-0">
<span className="text-white/80 text-sm font-medium tracking-wide">ID 170313071 © Oleg Romanko</span>
</footer>

<div className="fixed top-0 left-0 w-full h-full bg-slate-50 -z-10"></div>
<div className="fixed top-1/4 left-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>


    </>
  );
}
