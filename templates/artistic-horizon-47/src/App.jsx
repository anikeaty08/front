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
      

<header className="fixed flex backdrop-blur-[2px] bg-gradient-to-b from-black/80 to-transparent w-full z-50 pt-5 pr-6 pb-5 pl-6 top-0 left-0 items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white hover:opacity-80 transition-opacity" href="#">
<iconify-icon className="text-white" height="32" icon="simple-icons:artstation" width="96"></iconify-icon>
</a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
<span>Products</span>
<iconify-icon className="" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<a className="hover:text-white transition-colors" href="#">Showcase</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="bg-[#a3e635] hover:bg-[#8cd32a] text-black font-medium text-sm px-5 py-2.5 rounded-md transition-colors flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:file-download-linear" strokeWidth="1.5" width="18"></iconify-icon>
                Start Creating
            </a>
</div>
</header>

<main className="flex-grow flex flex-col min-h-[90vh] w-full pt-20 pb-20 relative items-center justify-center">

<div className="absolute top-24 right-6 md:top-28 md:right-10 z-30">
<button className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/5 text-gray-400 hover:text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all backdrop-blur-md">
<iconify-icon height="14" icon="solar:eye-closed-linear" width="14"></iconify-icon>
                Reduce motion
            </button>
</div>

<div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-10 md:mt-0">
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] text-6xl font-semibold text-white tracking-tight font-display drop-shadow-2xl">
                Artistic horizon
            </h1>
<p className="font-display font-medium italic text-3xl md:text-5xl lg:text-6xl text-gray-300 mt-4 tracking-tight">
                (Without boundaries)
            </p>
</div>



<div className="hidden md:block absolute top-[18%] left-[5%] w-48 h-56 rotate-[-6deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out">
<img alt="Nature" className="hover:brightness-110 w-full h-full object-cover rounded shadow-2xl brightness-90" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden lg:block absolute top-[12%] left-[22%] w-40 h-40 rotate-[3deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out z-10">
<img alt="Abstract Art" className="hover:brightness-110 w-full h-full object-cover rounded shadow-2xl brightness-90" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden md:block absolute top-[15%] left-1/2 -translate-x-1/2 w-44 h-52 rotate-[-2deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out opacity-80 hover:opacity-100">
<img alt="3D Abstract" className="w-full h-full object-cover rounded shadow-2xl" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden lg:block absolute top-[10%] right-[15%] w-52 h-52 rotate-[4deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out z-10">
<img alt="Portrait" className="hover:brightness-110 w-full h-full object-cover rounded shadow-2xl hue-rotate-15 brightness-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden md:block absolute bottom-[15%] left-[8%] w-48 h-60 rotate-[5deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out z-10">
<img alt="Illustration" className="hover:grayscale-0 transition-all w-full h-full object-cover rounded shadow-2xl grayscale" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden lg:block absolute bottom-[8%] left-[60%] -translate-x-1/2 w-44 h-44 rotate-[-3deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out">
<img alt="Landscape" className="hover:brightness-100 w-full h-full object-cover rounded shadow-2xl brightness-75" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden md:block absolute bottom-[20%] right-[5%] w-56 h-48 rotate-[2deg] hover:scale-105 hover:z-30 transition-transform duration-500 ease-out">
<img alt="Art" className="w-full h-full object-cover rounded shadow-2xl" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-8 left-6 md:left-12 bg-white rounded-lg p-3 w-full max-w-xs shadow-2xl z-40 transform transition-transform hover:-translate-y-1 group cursor-pointer hidden sm:flex items-center gap-4">
<div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded bg-gray-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
<div className="bg-white rounded-full p-1 pl-1.5 shadow-sm">
<iconify-icon className="text-black" height="12" icon="solar:play-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col">
<h3 className="text-gray-900 font-semibold text-base leading-tight">Unlock the tools?</h3>
<div className="flex items-center gap-1 text-gray-500 mt-1 group-hover:text-black transition-colors">
<span className="text-xs font-medium">Watch preview</span>
<iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
</div>
</div>
</main>

    </>
  );
}
