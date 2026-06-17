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
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-multiply pointer-events-none">
<div className="pointer-events-auto">
<span className="font-display text-2xl tracking-tighter italic">Sunplanet</span>
</div>
<a className="pointer-events-auto group flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity duration-500" href="#">
<span>Back to Store</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-end bg-[#FFE459] px-6 pb-12 pt-32 md:px-12 md:pb-20">
<div className="max-w-screen-2xl mx-auto w-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
<div className="md:col-span-9">
<h1 className="font-display text-7xl md:text-9xl tracking-tight leading-[0.9] font-light italic">
                        Activate what <br/>
<span className="not-italic">makes us human.</span>
</h1>
</div>
<div className="md:col-span-3 flex flex-col justify-end gap-6">
<p className="font-body font-light text-sm md:text-base leading-relaxed opacity-90">
                        Design doesn't just sit in a room. It accompanies you across miles, pauses, and the quiet moments between destinations.
                    </p>
<div className="w-full h-[1px] bg-[#141414] opacity-20"></div>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Available at Repsol</span>
</div>
</div>
</div>
</div>
</header>

<section className="w-full py-24 md:py-40 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-md mx-auto">
<span className="block font-body text-xs uppercase tracking-widest opacity-40 mb-8">The Collaboration</span>
<h2 className="font-display text-4xl md:text-5xl leading-tight font-normal mb-12 tracking-tight">
                Not a replacement, but a companion in the moment of need.
            </h2>
<div className="flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/12 border-t border-[#141414] opacity-20 pt-2"></div>
<div className="w-full md:w-11/12">
<p className="font-body text-lg md:text-xl font-light leading-relaxed text-[#141414] opacity-80">
                        Sunplanet resides within Repsol stations not as a commercial aisle, but as a curated intervention. We understand that travel requires distinct essentials—sunglasses for the glare, hydration vessels for the heat, soft textiles for the rest. We have selected a specific collection designed for the immediate reality of the road.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full py-12 md:py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto border-t border-b border-[#141414] border-opacity-10">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="py-16 md:py-32 md:pr-16 border-b md:border-b-0 md:border-r border-[#141414] border-opacity-10 flex flex-col justify-between min-h-[50vh]">
<div className="mb-8">
<iconify-icon className="opacity-60 mb-6" icon="solar:armchair-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-display text-5xl md:text-6xl tracking-tight">Design as<br/><span className="italic">destination</span></h3>
</div>
<p className="font-body text-sm font-light opacity-60 max-w-xs">
                        Pieces meant to be lived with, in the stillness of your home. Found in our flagship digital store.
                    </p>
</div>

<div className="py-16 md:py-32 md:pl-16 flex flex-col justify-between min-h-[50vh]">
<div className="mb-8">
<iconify-icon className="opacity-60 mb-6" icon="solar:wheel-angle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="font-display text-5xl md:text-6xl tracking-tight">Design on<br/><span className="italic">the road</span></h3>
</div>
<p className="font-body text-sm font-light opacity-60 max-w-xs">
                        Pieces meant to move. Durable, essential, immediate. Found at Repsol service points.
                    </p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto">
<div className="flex justify-between items-end mb-16">
<h2 className="font-display text-3xl md:text-4xl tracking-tight">The Travel Edit</h2>
<span className="font-body text-xs uppercase tracking-widest opacity-40">Curated for Transit</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative">

<img alt="Sunplanet Eyewear" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-50" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-display text-2xl tracking-tight">Solaris Frame</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Eye Protection</p>
</div>
</article>

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative">
<img alt="Sunplanet Textile" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-50" src="https://images.unsplash.com/photo-1590845947698-8924d7409b56?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-display text-2xl tracking-tight">Merino Travel Throw</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Comfort</p>
</div>
</article>

<article className="group cursor-default">
<div className="aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] mb-6 relative">
<img alt="Sunplanet Vessel" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000 ease-out saturate-0 group-hover:saturate-50" src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-display text-2xl tracking-tight">Ceramic Thermal Vessel</h3>
<p className="font-body text-xs opacity-50 tracking-wide uppercase">Hydration</p>
</div>
</article>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 bg-[#FBF7EF]">
<div className="max-w-screen-2xl mx-auto">
<div className="w-full h-[60vh] bg-[#F2EDE4] relative overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#141414 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 600">
<path d="M0,300 C200,300 300,100 500,300 S800,500 1000,300" fill="none" stroke="#141414" strokeWidth="1.5"></path>
<path d="M200,600 C200,400 400,400 400,200" fill="none" stroke="#141414" strokeWidth="1.5"></path>
<circle cx="500" cy="300" fill="#141414" r="4"></circle>
<circle cx="200" cy="300" fill="#141414" r="3"></circle>
<circle cx="800" cy="400" fill="#141414" r="3"></circle>
</svg>
<div className="relative z-10 text-center">
<h3 className="font-display text-3xl md:text-5xl tracking-tight mb-8">Waypoints</h3>
<button className="flex items-center gap-3 px-8 py-4 border border-[#141414] hover:bg-[#141414] hover:text-[#FBF7EF] transition-colors duration-300 rounded-full group">
<span className="text-sm uppercase tracking-widest font-body">Find your nearest Sunplanet</span>
<iconify-icon className="group-hover:rotate-45 transition-transform duration-500" icon="solar:compass-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-32 md:py-48 px-6 md:px-12 bg-[#FFE459] flex items-center justify-center text-center">
<div className="max-w-screen-md">
<iconify-icon className="mb-12 opacity-80 animate-spin-slow" icon="solar:sun-2-linear" strokeWidth="1" style={{animationDuration: '10s'}} width="48"></iconify-icon>
<p className="font-display text-4xl md:text-6xl tracking-tight italic leading-tight mb-12">
                "Some designs are discovered in silence. Others meet you when the road gets long."
            </p>
<div className="flex justify-center">
<a className="font-body text-xs uppercase tracking-widest border-b border-[#141414] pb-1 hover:opacity-50 transition-opacity" href="#">
                    Return to Sunplanet Store
                </a>
</div>
</div>
</section>

<footer className="w-full py-8 px-6 md:px-12 bg-[#FFE459] flex justify-between items-center border-t border-[#141414] border-opacity-10">
<span className="font-body text-xs opacity-40">© Sunplanet Lifestyle</span>
<div className="flex gap-4 opacity-40">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
</footer>

    </>
  );
}
