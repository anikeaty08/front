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



      // Initialize Lucide icons
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
      

<nav className="sticky top-0 z-50 w-full bg-neutral-50/80 backdrop-blur-md border-b border-transparent transition-all duration-200">
<div className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tight select-none" href="index.html">
          NESTED
        </a>
<div className="flex gap-6 md:gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="index.html">
            Home
          </a>
<a className="hover:text-neutral-900 transition-colors" href="/portfolio">
            Portfolio
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">
            Contact
          </a>
</div>
</div>
</nav>
<main className="w-full max-w-5xl mx-auto px-6">

<section className="py-20 md:py-28">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.05]">
          NESTED
          <span className="block text-3xl md:text-4xl mt-3 text-neutral-400 font-normal tracking-tight">
            Commercial photography for spaces and brands.
          </span>
</h1>
<p className="text-lg text-neutral-600 mb-10 max-w-2xl font-normal">
          Based in Brisbane. Available for commissioned work.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-900 px-8 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]" href="/portfolio">
            View portfolio
          </a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-neutral-200 bg-transparent px-8 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:border-neutral-300 active:scale-[0.98]" href="mailto:mj@nestedstudio.co">
            Get in touch
          </a>
</div>
</section>

<section className="py-12 border-t border-neutral-200">
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 text-base md:text-lg font-medium text-neutral-900 tracking-tight">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="coffee"></i>
            Hospitality
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="building-2"></i>
            Built Form
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="plane"></i>
            Aerial
          </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="camera"></i>
            Selected Weddings
          </div>
</div>
</section>

<section className="py-16 border-t border-neutral-200">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Built Form" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d82132-7747-4314-a576-29f414c893f5_800w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Hospitality" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76a76700-f091-41da-a6ca-57d1e976d8ce_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Urban" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8af31694-3064-486a-b7dd-2e40ad87065f_800w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Residential" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e628d6d4-3c8f-46aa-bc7e-796a6b5cdf2c_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Aerial" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/be34f0e8-77d3-4f62-adae-06f8a96bab09_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
<a className="group block relative aspect-[4/5] overflow-hidden rounded-lg bg-neutral-100 cursor-pointer" href="/portfolio">
<img alt="Wedding" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d7be75d9-1f0e-4e49-9d47-8f7b57a822ac_800w.jpg"/>
<div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5"></div>
</a>
</div>
</section>

<section className="py-24 border-t border-neutral-200">
<div className="max-w-3xl">
<p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-900 mb-8 tracking-tight">
            I photograph spaces, brands, and people with a focus on clarity and
            atmosphere.
          </p>
<p className="text-lg text-neutral-600 leading-relaxed mb-6 font-normal">
            My work spans hospitality, built form, aerials, and selected
            commissions. Each project is approached with structure first,
            followed by intuition on the day.
          </p>
<p className="text-lg text-neutral-600 leading-relaxed font-normal">
            Based in Brisbane. Working with clients who value thoughtful visuals
            that serve a purpose.
          </p>
</div>
</section>

<section className="py-24 border-t border-neutral-200 pb-32" id="contact">
<div className="max-w-2xl">
<h2 className="text-sm font-semibold text-neutral-500 mb-4 uppercase tracking-wider">
            For project enquiries or availability
          </h2>
<a className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 hover:text-neutral-600 transition-colors mb-8" href="mailto:mj@nestedstudio.co">
            mj@nestedstudio.co
            <i className="w-6 h-6 text-neutral-400 group-hover:text-neutral-600 transition-colors" data-lucide="arrow-up-right"></i>
</a>
<p className="text-neutral-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
            Brisbane, Australia
          </p>
</div>
</section>
</main>


    </>
  );
}
