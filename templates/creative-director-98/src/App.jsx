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
      
<main className="w-full">

<section className="relative w-full overflow-hidden bg-zinc-900 min-h-screen flex flex-col pb-12 sm:pb-16 shadow-2xl shadow-orange-900/10">

<div className="absolute inset-0 z-0">
<img alt="Creative Director" className="w-full h-full object-cover mix-blend-luminosity opacity-40" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-[#ff5100]/90 via-[#b31212]/80 to-[#120505] mix-blend-multiply"></div>
<div className="bg-gradient-to-t from-[#120505] via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-400/30 blur-[100px] rounded-full -translate-x-1/4 -translate-y-1/4"></div>
</div>
<div className="w-full max-w-7xl mx-auto flex flex-col flex-1 relative z-10">

<nav className="flex items-center justify-between p-6 sm:px-12">
<div className="text-xl font-semibold tracking-tight text-white">Folioblox</div>
<div className="hidden md:flex items-center space-x-10 text-base font-medium text-white/90">
<a className="hover:text-white transition" href="#">Home</a>
<a className="hover:text-white transition" href="#">About</a>
<a className="hover:text-white transition" href="#">Projects</a>
</div>
<button className="flex items-center gap-3 bg-white text-black pl-5 pr-1.5 py-1.5 rounded-full text-base font-medium hover:bg-gray-100 transition duration-300 group">
                        Get in touch
                        <span className="bg-orange-500 text-white p-1.5 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition duration-300">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</nav>

<div className="flex-1 flex flex-col sm:px-12 md:mt-0 mt-8 pr-6 pl-6 justify-center">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-7">
<span className="text-lg sm:text-xl font-medium text-white/90 mb-2 block">Hey, I'm a</span>
<h1 className="text-[3.5rem] sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tight leading-[0.95] text-white">
                                Creative<br/>Director
                            </h1>
</div>

<div className="md:col-span-5 md:pl-12 flex flex-col justify-end pt-8 md:pt-24">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-white">
                                Great design should<br/>feel invisible.
                            </h3>
<p className="text-base sm:text-lg text-white/70 max-w-[300px] leading-relaxed">
                                From logo to language, I build brands that connect and convert.
                            </p>
</div>
</div>
</div>

<div className="px-6 sm:px-12 mt-16 sm:mt-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="group cursor-pointer">
<div className="text-orange-400 text-sm font-medium mb-1.5">#01</div>
<div className="text-base font-medium text-white/80 group-hover:text-white transition">Brand Strategy</div>
</div>
<div className="group cursor-pointer">
<div className="text-orange-400 text-sm font-medium mb-1.5">#02</div>
<div className="text-base font-medium text-white/80 group-hover:text-white transition">Brand Identity Design</div>
</div>
<div className="group cursor-pointer">
<div className="text-orange-400 text-sm font-medium mb-1.5">#03</div>
<div className="text-base font-medium text-white/80 group-hover:text-white transition">Packaging Design</div>
</div>
<div className="group cursor-pointer">
<div className="text-orange-400 text-sm font-medium mb-1.5">#04</div>
<div className="text-base font-medium text-white/80 group-hover:text-white transition">Creative Direction</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] w-full border-y border-white/5">
<div className="max-w-7xl mx-auto w-full p-8 sm:px-12 sm:py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12">
<h4 className="text-base font-medium text-white/60 max-w-[160px] leading-snug">
                    Trusted by Brands I've Helped Shape
                </h4>
<div className="flex flex-wrap items-center gap-8 sm:gap-12 lg:gap-16 opacity-80">
<div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white group cursor-pointer hover:opacity-100 transition">
<iconify-icon className="text-white" height="24" icon="solar:planet-linear" width="24"></iconify-icon> Supa Blox
                    </div>
<div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white group cursor-pointer hover:opacity-100 transition">
<iconify-icon className="text-white" height="24" icon="solar:infinity-linear" width="24"></iconify-icon> Hype Blox
                    </div>
<div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white group cursor-pointer hover:opacity-100 transition">
<iconify-icon className="text-white" height="24" icon="solar:widget-linear" width="24"></iconify-icon> Frame Blox
                    </div>
<div className="flex items-center gap-3 font-semibold text-xl tracking-tight text-white group cursor-pointer hover:opacity-100 transition">
<iconify-icon className="text-white" height="24" icon="solar:slider-minimalistic-horizontal-linear" width="24"></iconify-icon> Ultra Blox
                    </div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto w-full mt-24 sm:mt-32 px-6 sm:px-12 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

<div className="">
<span className="text-orange-500 text-base font-medium mb-6 block">Behind the Designs</span>
<h2 className="text-4xl sm:text-[3.25rem] font-semibold tracking-tight leading-[1.1] text-white">
                        Shaping<br/>Experiences That<br/>Make Life Simpler
                    </h2>
</div>

<div className="flex flex-col justify-end pt-4">
<p className="text-xl sm:text-2xl font-medium text-white/90 mb-12 leading-snug max-w-lg">
                        I'm a product designer focused on building clean, intuitive interfaces that solve real-world problems.
                    </p>
<div className="flex items-center justify-between border-t border-white/10 pt-8 mt-auto">
<p className="text-base font-medium text-white/50 max-w-[220px] leading-relaxed">
                            Let's Build Something Meaningful Together
                        </p>
<button className="flex items-center gap-3 bg-orange-600 text-white pl-6 pr-2 py-2 rounded-full text-base font-medium hover:bg-orange-500 transition duration-300 group">
                            Get in touch
                            <span className="bg-white text-orange-600 p-1.5 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition duration-300">
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24">
<div className="aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] group cursor-pointer relative">
<img alt="Jacket Design" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 ease-in-out" src="https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="group-hover:bg-transparent transition duration-700 bg-black/10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] group cursor-pointer relative">
<img alt="Audio Experience" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 ease-in-out" src="https://images.unsplash.com/photo-1618365908648-e71bd5716cba?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-700"></div>
</div>
<div className="aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-[#1a1a1a] group cursor-pointer relative">
<img alt="Product Packaging" className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700 ease-in-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-700"></div>
</div>
</div>
</section>
</main>

    </>
  );
}
