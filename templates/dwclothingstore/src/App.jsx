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
      
<main className="max-w-4xl w-full bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200 overflow-hidden flex flex-col">

<div className="w-full h-64 sm:h-80 relative overflow-hidden bg-gray-100">
<img alt="Neatly folded colorful men's clothing on shelves" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 shadow-sm">
<i className="w-4 h-4 text-yellow-500 fill-yellow-500" data-lucide="star" strokeWidth="1.5"></i>
                    4.6 (77 Reviews)
                </span>
</div>
</div>
<div className="p-6 sm:p-10">

<header className="mb-10 border-b border-gray-100 pb-8">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-2">
                    DW Clothing Brand
                </h1>
<p className="text-xl font-medium text-gray-500 mb-6">
                    Best Men’s Clothing in Pune
                </p>
<div className="flex items-start gap-3 text-lg text-gray-600">
<i className="w-6 h-6 shrink-0 mt-0.5 text-gray-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Pcmt Bus Stop, Gavhanevasti, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411039</span>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="space-y-10">
<section>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="info" strokeWidth="1.5"></i>
                            About Us
                        </h2>
<p className="text-lg text-gray-600 leading-relaxed">
                            DW Clothing Brand is your go-to store for high-quality and stylish men’s clothing. From trendy t-shirts, shirts, and jeans to formal wear, we offer a wide variety that keeps you looking sharp every day.
                        </p>
</section>
<section>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-4 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="thumbs-up" strokeWidth="1.5"></i>
                            The Experience
                        </h2>
<p className="text-lg text-gray-600 leading-relaxed">
                            Huge collection of t-shirts, shirts, jeans, casual &amp; formal wear. Friendly staff, top-quality clothes at reasonable prices. Always clean, organized, and well-stocked. Keep your style sharp—visit us today!
                        </p>
</section>
</div>

<div className="space-y-10">
<section>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-5 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="check-circle" strokeWidth="1.5"></i>
                            Why Choose Us
                        </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 text-gray-900 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Huge variety of t-shirts, shirts, jeans &amp; formal wear</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 text-gray-900 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Affordable prices without compromising quality</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 text-gray-900 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">Friendly staff ready to help you pick the perfect outfit</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 text-gray-900 mt-0.5" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-lg text-gray-700">In-store shopping, pick-up, and delivery available</span>
</li>
</ul>
</section>
<section>
<h2 className="text-2xl font-medium tracking-tight text-gray-900 mb-5 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="shirt" strokeWidth="1.5"></i>
                            Customer Favorites
                        </h2>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<span className="text-lg text-gray-700">Trendy casual wear</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<span className="text-lg text-gray-700">Stylish formal shirts &amp; trousers</span>
</li>
<li className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<span className="text-lg text-gray-700">Seasonal collections and latest fashion trends</span>
</li>
</ul>
</section>
</div>
</div>

<footer className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-6 text-base font-medium text-gray-500">
<span className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="store" strokeWidth="1.5"></i>
                        In-Store
                    </span>
<span className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
                        Pick-up
                    </span>
<span className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="truck" strokeWidth="1.5"></i>
                        Delivery
                    </span>
</div>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-base font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto" href="https://www.instagram.com/dw_clothing_brand_official" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
                    Follow on Instagram
                </a>
</footer>
</div>
</main>


    </>
  );
}
