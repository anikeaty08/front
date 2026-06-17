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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with customized stroke width
        lucide.createIcons({
            strokeWidth: 1.5
        });
    
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
      

<header className="w-full">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="flex flex-col items-center justify-center cursor-pointer">
<div className="flex items-center space-x-1 text-[#E14545]">
<i className="h-5 w-5" data-lucide="beef"></i>
<i className="h-5 w-5 -ml-2" data-lucide="piggy-bank"></i>
</div>
<span className="mt-1 text-lg font-semibold tracking-tight text-[#E14545] leading-none">Stutzer &amp; Flüeler</span>
<span className="mt-0.5 text-[0.5rem] uppercase tracking-[0.2em] text-gray-400 font-medium">Metzgerei</span>
</div>

<nav className="hidden md:flex items-center space-x-10">
<a className="text-base font-medium text-[#E14545]" href="#">Home</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Products</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Catering</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center space-x-6 text-gray-700">
<button className="hover:text-gray-900 transition-colors"><i className="h-5 w-5" data-lucide="search"></i></button>
<button className="hover:text-gray-900 transition-colors"><i className="h-5 w-5" data-lucide="shopping-bag"></i></button>
<button className="hover:text-gray-900 transition-colors"><i className="h-5 w-5" data-lucide="globe"></i></button>
</div>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:pt-20 lg:pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="flex flex-col items-start pr-0 lg:pr-12">
<h1 className="text-5xl sm:text-6xl lg:text-[4rem] font-semibold tracking-tight text-gray-900 leading-[1.1]">
                    Fresh, Local, and<br/>
                    Made with <span className="text-[#E14545]">Care</span> —<br/>
                    Every Day 
                    <span className="inline-flex items-center align-middle ml-3 mb-2 lg:mb-3">
<img alt="Meat selection" className="h-12 w-32 sm:h-14 sm:w-36 rounded-full object-cover shadow-sm ring-1 ring-black/5" src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&amp;fit=crop&amp;q=80&amp;w=300&amp;h=120"/>
</span>
</h1>
<p className="mt-8 text-lg text-gray-500 leading-relaxed max-w-xl">
                    Combining freshness, local sourcing, and thoughtful preparation, we create dishes every day that prioritize your well-being and bring joy to your table.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-[#E14545] text-[#E14545] text-base font-medium hover:bg-red-50 transition-colors duration-200" href="#">
                        Order Catering <i className="ml-2 h-4 w-4" data-lucide="chevron-right"></i>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#E14545] text-white text-base font-medium hover:bg-[#c93b3b] transition-colors duration-200 shadow-sm" href="#">
                        Shop Meats <i className="ml-2 h-4 w-4" data-lucide="shopping-basket"></i>
</a>
</div>
</div>

<div className="w-full">

<div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl ring-1 ring-black/5">
<img alt="Butcher in shop" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>

<div className="absolute inset-0 flex items-center justify-center">
<button className="group flex h-20 w-20 items-center justify-center rounded-full bg-[#E14545] border-[4px] border-white shadow-lg hover:scale-105 transition-transform duration-300 focus:outline-none">
<i className="h-8 w-8 text-white fill-white ml-1" data-lucide="play"></i>
</button>
</div>
</div>

<div className="mt-12 grid grid-cols-3 gap-6 sm:gap-8 divide-x divide-gray-100 pl-2 sm:pl-4">
<div className="flex flex-col">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">10K+</span>
<span className="mt-2 text-base font-medium text-gray-700">Happy Customers</span>
</div>
<div className="flex flex-col pl-6 sm:pl-8">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">100%</span>
<span className="mt-2 text-base font-medium text-gray-700">Swiss Meats</span>
</div>
<div className="flex flex-col pl-6 sm:pl-8">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">39+</span>
<span className="mt-2 text-base font-medium text-gray-700">Years Tradition</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
