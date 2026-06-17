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
      
<section className="py-24 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto">

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 lg:gap-16">
<div className="max-w-2xl">
<span className="text-sm font-medium text-gray-500 mb-6 block tracking-widest uppercase">
                    [ Our Services ]
                </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight font-medium leading-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Elevate your space with our restoration expertise.
                </h2>
</div>
<div className="max-w-md pb-2">
<p className="text-xl text-gray-600 leading-relaxed font-normal">
                    We offer a complete range of kitchen restoration services designed to elevate both the look and feel of your space.
                </p>
</div>
</div>

<div className="flex flex-col gap-12 lg:gap-16">

<div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 flex flex-col lg:flex-row p-3 md:p-4 gap-4 lg:gap-8">

<div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-10">
<i className="w-5 h-5 text-gray-800" data-lucide="brush" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl md:text-4xl text-gray-900 mb-6 tracking-tight font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Cabinet Restoration
                    </h3>
<p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                        Restore your existing kitchen cabinets with a flawless, hand-finished result. We carefully prepare, repair, and refinish surfaces to achieve a smooth, durable finish that rivals factory spraying.
                    </p>
<ul className="space-y-4 mt-auto mb-12">
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Surface preparation and repair</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Professional hand-painted finishes</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Durable, long-lasting coatings</span>
</li>
</ul>
<a className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-500 transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:w-[45%] h-[350px] md:h-[450px] lg:h-auto">
<img alt="Cabinet Restoration" className="w-full h-full object-cover rounded-3xl md:rounded-[2rem]" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>

<div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 flex flex-col lg:flex-row-reverse p-3 md:p-4 gap-4 lg:gap-8">

<div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-10">
<i className="w-5 h-5 text-gray-800" data-lucide="door-open" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl md:text-4xl text-gray-900 mb-6 tracking-tight font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Cabinet Refacing
                    </h3>
<p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                        Give your kitchen a completely new look without replacing the full structure. Cabinet refacing updates doors, panels, and visible elements while maintaining your existing layout.
                    </p>
<ul className="space-y-4 mt-auto mb-12">
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Replacement doors and panels</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Updated styles and finishes</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Cost-effective transformation</span>
</li>
</ul>
<a className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-500 transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:w-[45%] h-[350px] md:h-[450px] lg:h-auto">
<img alt="Cabinet Refacing" className="w-full h-full object-cover rounded-3xl md:rounded-[2rem]" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>

<div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 flex flex-col lg:flex-row p-3 md:p-4 gap-4 lg:gap-8">

<div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-10">
<i className="w-5 h-5 text-gray-800" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl md:text-4xl text-gray-900 mb-6 tracking-tight font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Custom Finishes
                    </h3>
<p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                        Create a unique, design-led kitchen with tailored finishes that reflect your style. From modern minimal tones to warm, earthy palettes, we craft finishes that feel both timeless and refined.
                    </p>
<ul className="space-y-4 mt-auto mb-12">
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Bespoke colour matching</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Matte, satin, or textured finishes</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Premium detailing and edges</span>
</li>
</ul>
<a className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-500 transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:w-[45%] h-[350px] md:h-[450px] lg:h-auto">
<img alt="Custom Finishes" className="w-full h-full object-cover rounded-3xl md:rounded-[2rem]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>

<div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 flex flex-col lg:flex-row-reverse p-3 md:p-4 gap-4 lg:gap-8">

<div className="flex-1 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
<div className="w-12 h-12 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center mb-10">
<i className="w-5 h-5 text-gray-800" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl md:text-4xl text-gray-900 mb-6 tracking-tight font-medium" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Kitchen Transformation
                    </h3>
<p className="text-xl text-gray-600 mb-10 leading-relaxed font-normal">
                        For a complete visual upgrade, we combine multiple services to transform your kitchen into a cohesive, elevated space. This includes colour updates, refinishing, and design improvements.
                    </p>
<ul className="space-y-4 mt-auto mb-12">
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Full aesthetic transformation</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Before &amp; after planning</span>
</li>
<li className="flex items-start text-lg text-gray-500 font-normal">
<i className="w-5 h-5 mr-4 mt-1 flex-shrink-0 text-gray-400" data-lucide="minus" strokeWidth="1.5"></i>
<span>Layout and visual optimisation</span>
</li>
</ul>
<a className="inline-flex items-center text-base font-medium text-gray-900 hover:text-gray-500 transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="lg:w-[45%] h-[350px] md:h-[450px] lg:h-auto">
<img alt="Kitchen Transformation" className="w-full h-full object-cover rounded-3xl md:rounded-[2rem]" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
</section>


    </>
  );
}
