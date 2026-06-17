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
serif: ['Playfair Display', 'serif'],
condensed: ['Anton', 'sans-serif'],
},
colors: {
cream: {
50: '#FFFCF5',
100: '#FFF8E6',
}
}
}
}
}



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
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center items-center">
<div className="w-[80vw] h-[80vw] md:w-[40rem] md:h-[40rem] bg-orange-100/60 rounded-full blur-3xl opacity-60 translate-y-[-10%]"></div>
</div>

<header className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex-shrink-0">
<a className="font-serif italic text-3xl font-medium tracking-tight text-black" href="#">Balika.</a>
</div>
<nav className="hidden md:flex items-center gap-10">
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">Home</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">Properties</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">About</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">Services</a>
<a className="text-base font-medium text-neutral-800 hover:text-black transition-colors" href="#">Reviews</a>
</nav>
<div className="">
<a className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl" href="#">
                Contact
            </a>
</div>
</header>

<main className="z-10 min-h-[calc(100vh-100px)] flex flex-col md:justify-center md:pb-10 w-full max-w-[1400px] mr-auto ml-auto pt-10 pb-0 relative items-center justify-end">

<div className="absolute top-[10%] md:top-[15%] w-full text-center z-10 pointer-events-none select-none">
<h1 className="font-serif italic text-7xl md:text-9xl lg:text-[11rem] leading-none text-neutral-900 font-normal">
<span className="mr-4">Hey,</span> <span className="ml-4">there</span>
</h1>
</div>

<div className="absolute top-[45%] md:top-[42%] left-6 md:left-20 z-30 hidden md:block">
<div className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-sm rounded-full pl-2 pr-6 py-2 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center relative">
<div className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"></div>
<div className="absolute inset-0 rounded-full bg-orange-400 opacity-20 animate-ping"></div>
</div>
<span className="text-base font-medium text-neutral-800">Available for new listings</span>
</div>
</div>
<div className="absolute top-[45%] md:top-[42%] right-6 md:right-20 max-w-xs z-30 hidden md:block text-left">
<p className="leading-relaxed text-lg font-normal text-neutral-800 translate-x-16 -translate-y-16 rotate-x-10" style={{maskImage: 'linear-gradient(80deg, transparent, black 100%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(80deg, transparent, black 100%, black 100%, transparent)'}}>
                Specialized in luxury homes, 
                penthouses, market analysis, and 
                high-end investment properties.
            </p>
</div>

<div className="flex flex-col md:flex-row md:h-auto md:mt-0 w-full h-[70vh] mt-20 relative items-end justify-center">

<div className="absolute md:relative left-4 md:left-auto bottom-20 md:bottom-0 z-0 md:z-20 text-left md:translate-x-12 md:self-end mb-4">
<div className="flex flex-col font-condensed tracking-tighter leading-[0.85] text-neutral-950 uppercase">
<span className="md:text-[10rem] lg:text-[12rem] -translate-y-3 text-8xl">I AM</span>
<span className="md:text-[10rem] lg:text-[12rem] -mt-2 md:-mt-6 text-8xl">BALIKA</span>
</div>
</div>


<div className="relative z-10 w-full md:w-auto flex justify-center items-end h-full">

<div className="relative w-[90%] md:w-[500px] lg:w-[600px] h-[500px] md:h-[700px] lg:h-[800px] overflow-visible flex items-end justify-center">

<img alt="Realtor Balika" className="object-top md:object-center mask-image-gradient w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6833d4c-067b-437e-8faa-043eb93055b1_1600w.png" style={{objectPosition: '50% 20%'}}/>
</div>
</div>

<div className="absolute md:relative right-4 md:right-auto bottom-32 md:bottom-8 z-20 text-right md:text-left md:-translate-x-12 md:self-end mb-4">
<div className="flex flex-col font-condensed tracking-tighter leading-[0.85] text-neutral-950 uppercase">
<span className="md:text-7xl lg:text-8xl text-5xl translate-x-12">LUXURY</span>
<span className="md:text-7xl lg:text-8xl text-5xl translate-x-16">ESTATE</span>
<span className="md:text-7xl lg:text-8xl text-5xl translate-x-12">AGENT</span>
</div>
</div>
</div>

<div className="w-full px-6 py-8 md:hidden z-30 flex flex-col gap-4 bg-white/50 backdrop-blur-md mt-[-50px]">
<div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full py-1.5 px-4 w-fit shadow-sm">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<span className="text-sm font-medium">Available for new listings</span>
</div>
<p className="text-base text-neutral-700 leading-relaxed">
                Specialized in luxury homes, penthouses, and high-end investment properties.
            </p>
</div>
</main>


    </>
  );
}
