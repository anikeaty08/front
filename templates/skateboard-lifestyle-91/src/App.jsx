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
colors: {
brand: {
red: '#FF2E00',
dark: '#050505',
}
},
letterSpacing: {
tighter: '-0.05em',
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
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start text-sm font-medium">
<div className="flex flex-col gap-1 opacity-80">
<a className="hover:text-brand-red transition-colors" href="mailto:info@wesco.io">info@wesco.io</a>
<span>(+12) 808 130 1190</span>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-6">
<div className="bg-brand-red rounded-full px-6 py-2 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg shadow-brand-red/20">
<span className="font-medium text-white tracking-tight text-lg">wesco.</span>
</div>
</div>
<div className="flex gap-6 opacity-80">
<a className="hover:text-white text-neutral-400 transition-colors" href="#">Twitter</a>
<span className="text-neutral-600">/</span>
<a className="hover:text-white text-neutral-400 transition-colors" href="#">Instagram</a>
<span className="text-neutral-600">/</span>
<a className="hover:text-white text-neutral-400 transition-colors" href="#">Youtube</a>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col pt-24 pb-12 overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark z-10"></div>
<div className="absolute inset-0 bg-black/20 z-10"></div>
<img alt="Skateboarding" className="w-full h-full object-cover object-center opacity-90 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute right-10 top-1/3 z-20 hidden lg:flex flex-col items-end gap-4 max-w-xs text-right">
<div className="flex items-center -space-x-3 mb-2">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-brand-dark" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&amp;auto=format&amp;fit=crop&amp;q=60"/>
<button className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center border-2 border-brand-dark text-white hover:bg-red-700 transition-colors">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<p className="text-base text-neutral-300 leading-relaxed">
                Just the board, the streets, &amp; your trick.
            </p>
</div>

<div className="relative z-20 flex flex-col justify-end flex-grow px-6 lg:px-12 mt-20">
<div className="max-w-7xl w-full mx-auto relative">

<div className="flex items-baseline gap-4">
<h1 className="display-font text-[14vw] leading-[0.85] font-semibold uppercase text-white tracking-tighter mix-blend-overlay opacity-90">
                        Just<span className="text-brand-red">-</span>
</h1>
<div className="hidden md:block mb-8">
<p className="text-xl text-neutral-200 font-light leading-tight">
                            Are you <br/> <span className="text-white font-normal">Ready to roll?</span>
</p>
</div>
</div>

<div className="relative">
<h1 className="display-font text-[14vw] leading-[0.85] font-semibold uppercase text-white tracking-tighter mix-blend-overlay opacity-90">
                        Olie N' Fly
                    </h1>

<div className="absolute top-1/2 -right-4 md:right-20 -translate-y-1/2">
<div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,46,0,0.5)] animate-bounce">
<i className="w-6 h-6 text-white fill-white" data-lucide="sparkles"></i>
</div>
</div>
</div>

<div className="flex justify-end mt-8 md:mt-0 md:absolute md:bottom-4 md:right-0 max-w-md">
<p className="text-lg text-neutral-400 leading-relaxed">
                        Sending it off a stair set, this is where the real ones ride. Join the crew, push past the limits, and keep the wheels turning.
                    </p>
</div>
</div>
</div>
</header>

<section className="relative w-full bg-brand-dark border-t border-white/10">

<div className="grid grid-cols-1 lg:grid-cols-2 w-full">

<div className="relative p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-dashed border-white/10 flex flex-col justify-between min-h-[800px]">

<div className="absolute left-1/2 top-0 w-px h-full bg-white/5 -translate-x-1/2 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center gap-4 mb-10">
<button className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-medium tracking-tight hover:bg-red-700 transition-colors">
                            Tricks Landed
                        </button>
<button className="border border-white/20 text-neutral-400 px-5 py-2 rounded-full text-sm font-medium tracking-tight hover:text-white hover:border-white/40 transition-colors">
                            Competitions
                        </button>
</div>
<h3 className="text-2xl text-neutral-400 font-normal mb-2">
<span className="text-brand-red font-semibold">10M+</span> Tricks Landed from first
                    </h3>
<p className="text-2xl text-neutral-500 font-normal">
                        ollies to pro-level flips
                    </p>
</div>
<div className="relative z-10 mt-20 lg:mt-0">
<div className="flex items-start">
<span className="display-font text-[12rem] leading-none font-bold tracking-tighter text-white">120</span>
<span className="text-brand-red text-8xl font-bold mt-4 leading-none">+</span>
</div>
<p className="text-xl text-neutral-400 mt-4 max-w-sm">
                        Connected through skate spots, meetups, and events
                    </p>
</div>

<div className="absolute bottom-8 left-8 text-neutral-600 text-lg">
                    /est. 2024
                </div>
</div>

<div className="relative">

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

<div className="grid grid-cols-2 h-[600px] border-b border-dashed border-white/10">

<div className="relative border-r border-dashed border-white/10 group overflow-hidden">
<img alt="Skater" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-mono text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">@2025/</span>
</div>
</div>

<div className="grid grid-rows-2 h-full">
<div className="relative border-b border-dashed border-white/10 group overflow-hidden">
<img alt="Skate shoes" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="relative group overflow-hidden">
<img alt="Skate jump" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1464666495445-5a33228a808e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="text-xs font-mono text-white bg-black/50 px-2 py-1 rounded backdrop-blur-md">Jon Snow</span>
</div>
</div>
</div>
</div>

<div className="p-12 flex flex-col justify-between h-[calc(100%-600px)] min-h-[300px]">

<div className="absolute -top-6 right-8 z-20">
<button className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center hover:border-white transition-colors group">
<i className="text-white w-5 h-5 group-hover:translate-x-0.5 transition-transform" data-lucide="chevron-right"></i>
</button>
</div>
<div className="mt-auto">
<p className="text-lg text-neutral-400 leading-relaxed mb-8 max-w-md">
                            We live for the grind, the push, and the thrill of landing something new. Whether you're a beginner learning the ropes for fresh spots.
                        </p>
<div className="flex items-center justify-end border-t border-dashed border-white/10 pt-8">
<button className="bg-brand-red hover:bg-red-600 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-3 group transition-all duration-300">
<span className="font-medium tracking-tight">Join Now</span>
<div className="bg-black rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300">
<i className="w-4 h-4 text-white" data-lucide="chevron-right"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
