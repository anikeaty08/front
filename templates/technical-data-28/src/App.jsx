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
      

<main className="max-w-5xl mx-auto my-12 bg-white shadow-2xl shadow-slate-200 ring-1 ring-slate-900/5 rounded-2xl overflow-hidden">

<header className="bg-white px-8 py-10 md:px-12 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-3">

<div className="h-10 w-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                    Cimenza
                </h1>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-500 uppercase tracking-widest border border-slate-200">
                    Technical Data Sheet
                </span>
<span className="text-sm font-medium text-slate-400">
                    Ref. TDS-2024
                </span>
</div>
</header>

<div className="px-8 py-12 md:px-12 bg-slate-50/50">
<div className="max-w-3xl">
<p className="text-orange-600 font-medium tracking-wide uppercase text-sm mb-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="droplet" strokeWidth="1.5"></i>
                    Acrylic Primer
                </p>
<h2 className="text-6xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6">
                    Primer
                </h2>
<p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
                    Water-based acrylic copolymer formulation compatible with cement, lime, and hydraulic binders.
                </p>
</div>
</div>

<div className="px-8 md:px-12 pb-16">

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Description
                    </h3>
</div>
<div className="md:col-span-3">
<p className="text-lg leading-relaxed text-slate-600">
                        Primer formulated with water-based acrylic copolymers. Dilutable with water and stable in alkaline media, it is compatible with cement, lime and, in general, with all hydraulic binders. Formulated for both porous and non-porous supports. High resistance to water and alkalis.
                    </p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Applications
                    </h3>
</div>
<div className="md:col-span-3">
<ul className="space-y-4 text-lg text-slate-600">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Primer for microcements, mortar-concrete, mortar-mortar, plaster-concrete, plaster-mortar, plaster-plaster and concrete-concrete.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Ideal for partition walls, wrought iron fronts, large plastering on concrete walls and facades, plastering on vertical or horizontal surfaces, plasterboard, etc.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Union bridge for transparent layers such as polyurethane varnishes.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500 mt-1 shrink-0" data-lucide="check" strokeWidth="1.5"></i>
<span>Enhances adhesion and waterproofing of colored joints, even in porcelain stoneware.</span>
</li>
</ul>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Preparation
                    </h3>
</div>
<div className="md:col-span-3">
<div className="bg-orange-50/50 p-6 rounded-xl border border-orange-100">
<p className="text-lg leading-relaxed text-slate-700">
                            The support must be free of dust and grease. In the case of concrete, in addition, the support must be firm (minimum tensile strength of 15 N/mm2) and dry (maximum humidity allowed 4%).
                        </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Technical Data
                    </h3>
</div>
<div className="md:col-span-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/30 flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Specific Weight</span>
<span className="text-xl font-medium text-slate-900">1,03 ± 0,05</span>
</div>

<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/30 flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">% Solids by Volume</span>
<span className="text-xl font-medium text-slate-900">56,5% ± 1%</span>
</div>

<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/30 flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">pH Level</span>
<span className="text-xl font-medium text-slate-900">8 ± 1</span>
</div>

<div className="p-5 rounded-lg border border-slate-200 bg-slate-50/30 flex flex-col gap-1">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Consumption</span>
<span className="text-xl font-medium text-slate-900">100 - 150 <span className="text-base text-slate-500 font-normal">g/m²</span></span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Working
                    </h3>
</div>
<div className="md:col-span-3">
<p className="text-lg leading-relaxed text-slate-600">
                        It can be applied by roller, brush or spray. It can be applied as supplied or diluted with a maximum of 50% water. The application must be carried out at a support temperature 3°C higher than the dew point, with an ambient temperature higher than 10°C and a humidity lower than 80%. It does not need special precautions for its use.
                    </p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10 border-b border-slate-100">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Conservation
                    </h3>
</div>
<div className="md:col-span-3">
<p className="text-lg leading-relaxed text-slate-600">
                        PRIMER is presented in hermetic containers and approved in accordance with the EU guidelines for the packaging and storage of chemical products. Avoid frost and temperatures above 35° C. The product can be stored for one year in original and closed containers and covered places.
                    </p>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
<div className="md:col-span-1">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                        Precautions
                    </h3>
</div>
<div className="md:col-span-3">
<div className="flex gap-4">
<i className="w-6 h-6 text-slate-400 shrink-0" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<p className="text-lg leading-relaxed text-slate-600">
                            In case of contact with eyes, wash them with plenty of clean water and consult a doctor. Hands and skin should be washed with soap and hot water. Avoid release to the environment.
                        </p>
</div>
</div>
</section>
</div>

<footer className="bg-slate-900 text-slate-400 py-12 px-8 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
<div>
<h4 className="text-white font-semibold text-lg mb-2">Pulsatia S.L.</h4>
<p className="text-sm">Calle Benifaió, 28. 46610 Guadassuar (Valencia)</p>
<p className="text-sm mt-1">Tel. +34 96 116 38 84 <span className="mx-2 text-slate-600">|</span> hello@cimenza.cc</p>
</div>
<div>
<a className="text-xl font-medium text-white hover:text-orange-400 transition-colors" href="#">www.cimenza.cc</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-800">
<p className="text-xs text-slate-500 leading-relaxed text-justify">
                    The indications and technical data appearing in this brochure are based on our current knowledge and on the uses and applications most typical of the product and are of an indicative character, being able to be subject to changes and modifications without prior notice. According to the conditions of use at the site, in which we have no participation, the values expressed can suffer slight variations, as well as by the different methods in tolerances of manufacture, tests realized, etc. For this reason, our guarantee is limited strictly to the quality of the product supplied.
                </p>
</div>
</footer>
</main>


    </>
  );
}
