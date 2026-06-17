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
      

<header className="sticky top-0 z-50 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-black/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center sm:hidden">
<button className="text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center sm:justify-start flex-1 sm:flex-none">
<a className="text-lg font-medium tracking-tighter text-stone-900 uppercase" href="#">
              Mivana
            </a>
</div>

<nav className="hidden sm:flex space-x-8">
<a className="text-sm font-medium text-stone-900 border-b border-stone-900 pb-0.5" href="#">
              Shop
            </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Origin
            </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Wholesale
            </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Journal
            </a>
</nav>

<div className="flex items-center space-x-5">
<button className="text-stone-500 hover:text-stone-900 transition-colors hidden sm:block">
<iconify-icon className="" height="20" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="text-stone-500 hover:text-stone-900 transition-colors hidden sm:block">
<iconify-icon height="20" icon="solar:user-linear" width="20"></iconify-icon>
</button>
<button className="text-stone-500 hover:text-stone-900 transition-colors relative flex items-center">
<iconify-icon height="20" icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-stone-900 text-white text-[0.65rem] font-medium h-4 w-4 rounded-full flex items-center justify-center">
                2
              </span>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1 sm:px-6 lg:px-8 lg:py-16 w-full max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="lg:grid lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">

<div className="flex flex-col space-y-4">

<nav aria-label="Breadcrumb" className="flex sm:hidden mb-4">
<ol className="flex items-center space-x-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900" href="#">Home</a></li>
<li><span className="text-stone-300">/</span></li>
<li><a className="hover:text-stone-900" href="#">Fruits</a></li>
<li><span className="text-stone-300">/</span></li>
<li className="text-stone-900 font-medium">Figs</li>
</ol>
</nav>
<div className="aspect-square w-full rounded-2xl bg-stone-100 overflow-hidden relative group">
<img alt="Sun-Dried Estahban Figs" className="object-center group-hover:scale-105 transition-transform duration-700 ease-in-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-stone-900 shadow-sm">
              New Harvest
            </div>
</div>

<div className="grid grid-cols-4 gap-4">
<button className="aspect-square rounded-xl bg-stone-100 overflow-hidden border-2 border-stone-900">
<img alt="Thumbnail 1" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square rounded-xl bg-stone-100 overflow-hidden border border-transparent hover:border-stone-300 transition-colors">
<img alt="Thumbnail 2" className="object-center hover:opacity-100 transition-opacity opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="aspect-square rounded-xl bg-stone-100 overflow-hidden border border-transparent hover:border-stone-300 transition-colors flex items-center justify-center">
<iconify-icon className="text-stone-400" height="24" icon="solar:gallery-linear" width="24"></iconify-icon>
</button>
<button className="aspect-square rounded-xl bg-stone-100 overflow-hidden border border-transparent hover:border-stone-300 transition-colors flex items-center justify-center">
<iconify-icon className="text-stone-400" height="24" icon="solar:play-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="mt-10 px-2 sm:px-0 lg:mt-0">

<nav aria-label="Breadcrumb" className="hidden sm:flex mb-6">
<ol className="flex items-center space-x-2 text-xs text-stone-500">
<li className="">
<a className="hover:text-stone-900 transition-colors" href="#">
                  Home
                </a>
</li>
<li><span className="text-stone-300">/</span></li>
<li className="">
<a className="hover:text-stone-900 transition-colors" href="#">
                  Dried Fruits
                </a>
</li>
<li><span className="text-stone-300">/</span></li>
<li className="text-stone-900">Figs</li>
</ol>
</nav>
<h1 className="sm:text-4xl text-3xl font-semibold text-stone-900 tracking-tight">
            Sun-Dried Estahban Figs
          </h1>
<div className="mt-4 flex items-center">

<div className="flex items-center space-x-2 cursor-pointer group">
<div className="flex text-amber-500">
<iconify-icon className="fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon className="fill-current opacity-40" height="16" icon="solar:star-linear" style={{color: 'rgb(245, 158, 11)'}} width="16"></iconify-icon>
</div>
<span className="text-sm text-stone-500 group-hover:text-stone-900 transition-colors">
                128 reviews
              </span>
</div>
</div>
<div className="mt-6">
<p className="leading-relaxed text-sm text-stone-500">
              Hand-picked from the ancient, rain-fed orchards of Estahban, Iran.
              These premium figs are naturally sun-dried on the branch to
              preserve their rich, honey-like sweetness, delicate texture, and
              natural golden color. Free from any additives or preservatives.
            </p>
</div>
<form className="mt-8">

<div className="">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-stone-900">
                  Packaging Option
                </h3>
</div>
<div className="grid grid-cols-2 gap-3 mt-3">
<label className="cursor-pointer">
<input checked="" className="sr-only peer" name="packaging" type="radio" value="bulk"/>
<div className="rounded-xl border border-stone-200 bg-white px-4 py-4 text-sm text-center text-stone-600 hover:border-stone-300 peer-checked:border-stone-900 peer-checked:bg-stone-900 peer-checked:text-white transition-all h-full flex items-center justify-center">
<span className="block font-medium">Bulk Packaging</span>
</div>
</label>
<label className="cursor-pointer">
<input className="sr-only peer" name="packaging" type="radio" value="retail"/>
<div className="hover:border-stone-300 peer-checked:border-stone-900 peer-checked:bg-stone-900 peer-checked:text-white transition-all flex text-sm text-stone-600 text-center bg-white h-full border-stone-200 border rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<span className="block font-medium leading-tight">
                      White Label Retail Ready
                    </span>
</div>
</label>
</div>
</div>

<div className="mt-8 flex space-x-4">

<div className="flex items-center border border-stone-200 rounded-xl bg-white h-12 w-32">
<button className="px-4 text-stone-400 hover:text-stone-900 transition-colors" type="button">
<iconify-icon height="16" icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<input className="w-full text-center text-sm font-medium text-stone-900 bg-transparent border-none focus:ring-0 p-0" readonly="" type="text" value="1"/>
<button className="px-4 text-stone-400 hover:text-stone-900 transition-colors" type="button">
<iconify-icon height="16" icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>

<button className="flex-1 bg-stone-900 text-white rounded-xl h-12 flex items-center justify-center text-sm font-medium hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:ring-offset-2 focus:ring-offset-[#FAF9F6] transition-all active:scale-[0.98]" type="button">
                Request Quotation
              </button>
</div>
</form>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-black/5">
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 mt-0.5 text-stone-400">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-stone-900">
                  Origin Verified
                </h4>
<p className="mt-1 text-xs text-stone-500">
                  Directly sourced from Estahban, Fars Province.
                </p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 mt-0.5 text-stone-400">
<iconify-icon height="20" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-stone-900">100% Natural</h4>
<p className="mt-1 text-xs text-stone-500">
                  No added sugars, preservatives, or sulfur.
                </p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 mt-0.5 text-stone-400">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-stone-900">
                  Export Quality
                </h4>
<p className="mt-1 text-xs text-stone-500">
                  Sorted and graded for international standards.
                </p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="flex-shrink-0 mt-0.5 text-stone-400">
<iconify-icon height="20" icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-stone-900">
                  Secure Packaging
                </h4>
<p className="mt-1 text-xs text-stone-500">
                  Vacuum-sealed to retain freshness during transit.
                </p>
</div>
</div>
</div>

<div className="mt-10 border-t border-black/5 divide-y divide-black/5">
<div className="pt-4 pb-4">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-sm font-medium text-stone-900">
                  Nutritional Information
                </span>
<span className="ml-6 flex items-center text-stone-400 group-hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
</div>
<div className="py-4">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-sm font-medium text-stone-900">
                  Shipping &amp; Returns
                </span>
<span className="ml-6 flex items-center text-stone-400 group-hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
</div>
<div className="py-4">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-sm font-medium text-stone-900">
                  Wholesale Inquiries
                </span>
<span className="ml-6 flex items-center text-stone-400 group-hover:text-stone-900 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-black/5 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between">
<p className="text-xs text-stone-500">
          © 2024 Mivana Trading. All rights reserved.
        </p>
<div className="flex space-x-6 mt-4 sm:mt-0">
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Terms
          </a>
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Privacy
          </a>
<a className="text-xs text-stone-500 hover:text-stone-900 transition-colors" href="#">
            Contact
          </a>
</div>
</div>
</footer>

    </>
  );
}
