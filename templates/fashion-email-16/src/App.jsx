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
      

<main className="w-full max-w-[600px] bg-white sm:shadow-sm sm:border sm:border-zinc-200/50 flex flex-col mx-auto">

<div className="bg-zinc-50 py-3 px-6 text-center border-b border-zinc-100">
<a className="text-xs text-zinc-500 hover:text-zinc-800 transition-colors" href="#">View this email in your browser</a>
</div>

<header className="py-8 px-6 text-center flex flex-col items-center justify-center">

<a className="font-['Inter'] text-2xl font-medium tracking-tighter text-zinc-900 decoration-transparent" href="#">
                AURA
            </a>
</header>

<section className="w-full">
<div className="w-full aspect-[4/3] bg-zinc-100 overflow-hidden">
<img alt="Fall Collection" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="py-10 px-8 text-center flex flex-col items-center">
<span className="text-xs font-medium text-zinc-400 tracking-widest uppercase mb-3">New Arrivals</span>

<h1 className="font-['Playfair_Display'] text-3xl font-normal tracking-tight text-zinc-900 mb-4">
                    The Autumn Edit
                </h1>

<p className="text-base text-zinc-500 max-w-sm mx-auto leading-relaxed">
                    Embrace the changing seasons with our latest collection of thoughtfully crafted essentials, designed for effortless layering.
                </p>
<a className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">
                    Shop the Collection
                </a>
</div>
</section>
<div className="px-8 py-4">
<hr className="border-zinc-100"/>
</div>

<section className="py-8 px-8">
<div className="text-center mb-8">

<h2 className="font-['Playfair_Display'] text-xl font-normal tracking-normal text-zinc-900">
                    Curated for You
                </h2>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-10">

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
<img alt="Merino Wool Sweater" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>

<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:underline decoration-1 underline-offset-2">Merino Wool Sweater</h3>
<p className="text-sm text-zinc-500">$125.00</p>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
<img alt="Tailored Trousers" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:underline decoration-1 underline-offset-2">Tailored Trousers</h3>
<p className="text-sm text-zinc-500">$140.00</p>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
<img alt="Leather Tote" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:underline decoration-1 underline-offset-2">Everyday Leather Tote</h3>
<p className="text-sm text-zinc-500">$210.00</p>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-zinc-100 mb-4 overflow-hidden">
<img alt="Cashmere Scarf" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1 group-hover:underline decoration-1 underline-offset-2">Cashmere Scarf</h3>
<p className="text-sm text-zinc-500">$85.00</p>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center justify-center border border-zinc-200 px-6 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors" href="#">
                    View All Products
                </a>
</div>
</section>

<section className="bg-zinc-50 py-12 px-8 text-center mt-4">
<iconify-icon className="text-zinc-400 text-2xl mb-4" icon="solar:leaf-linear"></iconify-icon>
<h2 className="font-['Playfair_Display'] text-xl font-normal tracking-normal text-zinc-900 mb-3">Sustainable Practices</h2>
<p className="text-sm text-zinc-500 max-w-sm mx-auto leading-relaxed">
                We are committed to using responsibly sourced materials and ethical manufacturing processes for every piece we create.
            </p>
</section>

<footer className="py-10 px-8 text-center border-t border-zinc-100">

<div className="flex items-center justify-center gap-6 mb-8">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="22"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="22"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</a>
</div>
<div className="text-xs text-zinc-400 leading-relaxed mb-4">
<p>AURA Studios, 123 Minimalist Way, New York, NY 10001</p>
<p className="mt-1">You received this email because you subscribed to our newsletter.</p>
</div>
<div className="flex items-center justify-center gap-4 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 underline decoration-zinc-300 underline-offset-2" href="#">Update Preferences</a>
<span>·</span>
<a className="hover:text-zinc-900 underline decoration-zinc-300 underline-offset-2" href="#">Unsubscribe</a>
</div>
<div className="mt-8 font-['Inter'] text-xs font-medium tracking-tighter text-zinc-300">
                AURA
            </div>
</footer>
</main>

    </>
  );
}
