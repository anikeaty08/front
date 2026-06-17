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
      

<section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Cimenza Microcement Surface Texture" className="w-full h-full object-cover opacity-90 brightness-95 grayscale-[0.2]" src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent"></div>
</div>
<div className="relative z-10 container mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                Cimenza Microcement Systems
            </h1>
<p className="text-lg md:text-xl text-neutral-100 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                Premium mineral-based microcement systems developed for professional distribution and long-term performance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-neutral-900 text-sm font-medium rounded-md hover:bg-neutral-100 transition-colors duration-200" href="#system">
                    Explore the System
                </a>
<a className="px-8 py-3 bg-transparent border border-white text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors duration-200 backdrop-blur-sm" href="#technical">
                    Technical Files
                </a>
</div>
</div>
</section>

<section className="py-24 border-b border-neutral-100">
<div className="container mx-auto px-6 max-w-4xl text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-8">
                What Is Cimenza Microcement?
            </h2>
<div className="space-y-6 text-lg text-neutral-500 font-light leading-relaxed">
<p>
                    Cimenza microcement is a mineral-based coating system designed to create seamless, continuous surfaces.
                </p>
<p>
                    It is supplied as a structured system combining primers, microcement layers and protective sealers to ensure consistent performance, durability and aesthetic quality.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50" id="system">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">
                    A Complete Microcement System
                </h2>
<p className="text-neutral-500">
                    Cimenza microcement is developed as a complete system rather than a single product. Each component is designed and tested to work together.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm shadow-neutral-100/50">
<div className="w-10 h-10 bg-neutral-50 rounded flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:layers" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-2">Primers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Developed to provide stable adhesion on a variety of substrates.</p>
</div>

<div className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm shadow-neutral-100/50">
<div className="w-10 h-10 bg-neutral-50 rounded flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:box" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-2">Microcement Layers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Mineral-based layers that create texture, strength and surface character.</p>
</div>

<div className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm shadow-neutral-100/50">
<div className="w-10 h-10 bg-neutral-50 rounded flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:shield-check" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-2">Protective Sealers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Final protective layers enhancing resistance and durability.</p>
</div>

<div className="bg-white p-8 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm shadow-neutral-100/50">
<div className="w-10 h-10 bg-neutral-50 rounded flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:check-circle" data-width="20" strokeWidth="1.5"></span>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-2">System Compatibility</h3>
<p className="text-sm text-neutral-500 leading-relaxed">All components are optimized to function as one integrated system.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-neutral-100">
<div className="container mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">The Rockbase Series</h2>
<p className="text-neutral-500 mt-2">Versatile grain structures for every design requirement.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-all duration-300">
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-neutral-900">Rockbase S</h3>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded text-neutral-600">Ultra-Fine</span>
</div>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                            A microcement with an ultra-fine grain structure, designed for smooth, refined, and low-maintenance finishes. It creates a seamless and even surface with a modern, sophisticated appearance, while fully preserving excellent mechanical strength.
                        </p>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-neutral-100">
<span className="iconify text-neutral-300 mb-2" data-icon="lucide:package" data-width="24"></span>
<span className="text-xs text-neutral-400">Rockbase S Pot</span>
</div>

<div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-100">
<img alt="Rockbase S Texture" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1595111667057-a49688df2d85?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-all duration-300">
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-neutral-900">Rockbase M</h3>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded text-neutral-600">Medium</span>
</div>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                            A medium grain size, ideal as an intermediate layer or as a finishing layer when a balanced combination of texture and smoothness is desired. Enhances natural character while maintaining high strength.
                        </p>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-neutral-100">
<span className="iconify text-neutral-300 mb-2" data-icon="lucide:package" data-width="24"></span>
<span className="text-xs text-neutral-400">Rockbase M Pot</span>
</div>

<div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-100">
<img alt="Rockbase M Texture" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1595111667057-a49688df2d85?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-all duration-300">
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-neutral-900">Rockbase L</h3>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded text-neutral-600">Coarse</span>
</div>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                            Coarse-grain microcement combining high mechanical and chemical resistance with a pronounced texture. Used for projects seeking a more rustic, natural appearance. Reliable performance in demanding applications.
                        </p>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-neutral-100">
<span className="iconify text-neutral-300 mb-2" data-icon="lucide:package" data-width="24"></span>
<span className="text-xs text-neutral-400">Rockbase L Pot</span>
</div>

<div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-100">
<img alt="Rockbase L Texture" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="group border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-300 transition-all duration-300">
<div className="p-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-neutral-900">Rockbase XL</h3>
<span className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded text-neutral-600">Structural</span>
</div>
<p className="text-sm text-neutral-500 mb-8 leading-relaxed">
                            The coarsest grain structure, developed to level surfaces and provide structural strength to the overall system. Suitable for substrates requiring initial smoothing and maximum durability.
                        </p>
<div className="grid grid-cols-2 gap-4">

<div className="aspect-square bg-neutral-50 rounded-lg flex flex-col items-center justify-center border border-neutral-100">
<span className="iconify text-neutral-300 mb-2" data-icon="lucide:package" data-width="24"></span>
<span className="text-xs text-neutral-400">Rockbase XL Pot</span>
</div>

<div className="aspect-square bg-neutral-100 rounded-lg overflow-hidden border border-neutral-100">
<img alt="Rockbase XL Texture" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/30">
<div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Key Characteristics</h2>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Seamless and joint-free surfaces
                    </li>
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Durable and wear-resistant
                    </li>
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Water-resistant when properly sealed
                    </li>
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Suitable for walls and floors
                    </li>
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Compatible with multiple substrates
                    </li>
<li className="flex items-center gap-3 text-neutral-600 text-sm">
<span className="iconify text-neutral-400" data-icon="lucide:check" data-width="18"></span>
                        Available in a wide range of colours and finishes
                    </li>
</ul>
</div>

<div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-8">Applications</h2>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                    Cimenza microcement systems can be specified in a wide range of professional architectural and interior contexts. Typical uses include:
                </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-white border border-neutral-200 rounded text-sm text-neutral-700">Walls</div>
<div className="p-4 bg-white border border-neutral-200 rounded text-sm text-neutral-700">Floors</div>
<div className="p-4 bg-white border border-neutral-200 rounded text-sm text-neutral-700">Bathrooms</div>
<div className="p-4 bg-white border border-neutral-200 rounded text-sm text-neutral-700">Kitchens</div>
<div className="col-span-2 p-4 bg-white border border-neutral-200 rounded text-sm text-neutral-700">Furniture and architectural elements</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-100">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">
<div className="lg:w-1/2">
<img alt="Cimenza Colour Palette Swatches" className="rounded-lg grayscale-[0.2] object-cover h-[400px] w-full" src="https://images.unsplash.com/photo-1596464871038-727c95e135b9?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-6">Colours and Finishes</h2>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        Cimenza offers a carefully developed palette of colours and textures. The finishes emphasize natural, mineral depth and subtle variation, supporting contemporary architectural design.
                    </p>
<div className="bg-neutral-50 border border-neutral-200 p-6 rounded-lg">
<h3 className="text-sm font-medium text-neutral-900 mb-2">Colour System</h3>
<p className="text-xs text-neutral-500 mb-4 leading-relaxed">
                            Cimenza microcement is coloured using a professional paint-mixing system. The colour palette shown serves as a reference range; additional colours can be produced on request.
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-neutral-900 border-b border-neutral-300 pb-0.5 hover:border-neutral-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-text" data-width="16"></span>
                            Download Colour Palette (PDF)
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F9F8]"> 
<div className="container mx-auto px-6 max-w-4xl">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-4">ROCKBASE Application Method</h2>
<p className="text-neutral-500 max-w-2xl mx-auto text-sm leading-relaxed">
                    The ROCKBASE system follows a structured application method designed to ensure optimal adhesion, durability and aesthetic quality. Below is an overview of the recommended application steps for professional use.
                </p>
</div>
<div className="space-y-6 relative">

<div className="absolute left-8 top-8 bottom-8 w-px bg-neutral-200 hidden md:block"></div>

<div className="relative bg-white p-8 rounded-xl border border-neutral-200 shadow-sm md:ml-20">
<div className="hidden md:flex absolute -left-[4.5rem] top-8 w-10 h-10 bg-white border border-neutral-200 rounded-full items-center justify-center text-sm font-medium text-neutral-400">01</div>
<div className="flex items-start justify-between mb-4">
<div>
<span className="md:hidden text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Step 01</span>
<h3 className="text-lg font-medium text-neutral-900">Surface Preparation</h3>
</div>
<span className="iconify text-neutral-300" data-icon="lucide:hammer" data-width="24"></span>
</div>
<div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
<p>Proper substrate preparation is essential to achieve a flawless and durable result.</p>
<p>The surface must be clean, dry, and free from dust, grease, loose paint, or any other contaminants. All cracks, imperfections, or irregularities must be repaired prior to application.</p>
<p>Light sanding is recommended to increase surface roughness. Remove residues using a vacuum cleaner or damp cloth and allow to dry.</p>
</div>
</div>

<div className="relative bg-white p-8 rounded-xl border border-neutral-200 shadow-sm md:ml-20">
<div className="hidden md:flex absolute -left-[4.5rem] top-8 w-10 h-10 bg-white border border-neutral-200 rounded-full items-center justify-center text-sm font-medium text-neutral-400">02</div>
<div className="flex items-start justify-between mb-4">
<div>
<span className="md:hidden text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Step 02</span>
<h3 className="text-lg font-medium text-neutral-900">Mesh Installation &amp; Primer</h3>
</div>
<span className="iconify text-neutral-300" data-icon="lucide:grid" data-width="24"></span>
</div>
<div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
<p><strong className="font-medium text-neutral-700">Mesh:</strong> Recommended to reinforce the surface and reduce cracking risk, especially on uneven substrates. Optional on stable surfaces.</p>
<p><strong className="font-medium text-neutral-700">Primer:</strong> Apply an even coat of PRIMER or PRIMERQUARTZ using a roller or brush. Drying time: approx. 30–60 minutes.</p>
</div>
</div>

<div className="relative bg-white p-8 rounded-xl border border-neutral-200 shadow-sm md:ml-20">
<div className="hidden md:flex absolute -left-[4.5rem] top-8 w-10 h-10 bg-white border border-neutral-200 rounded-full items-center justify-center text-sm font-medium text-neutral-400">03</div>
<div className="flex items-start justify-between mb-4">
<div>
<span className="md:hidden text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Step 03</span>
<h3 className="text-lg font-medium text-neutral-900">Base Layer – Rockbase XL or L</h3>
</div>
<span className="iconify text-neutral-300" data-icon="lucide:trowel" data-width="24"></span>
</div>
<div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
<p><strong className="font-medium text-neutral-700">First coat:</strong> Apply Rockbase XL or L evenly using a flexible metal trowel. Allow to dry for 6–12 hours. Sand with 40-grit sandpaper.</p>
<p><strong className="font-medium text-neutral-700">Second coat (optional):</strong> Apply a second coat if required to achieve a perfectly even base.</p>
</div>
</div>

<div className="relative bg-white p-8 rounded-xl border border-neutral-200 shadow-sm md:ml-20">
<div className="hidden md:flex absolute -left-[4.5rem] top-8 w-10 h-10 bg-white border border-neutral-200 rounded-full items-center justify-center text-sm font-medium text-neutral-400">04</div>
<div className="flex items-start justify-between mb-4">
<div>
<span className="md:hidden text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Step 04</span>
<h3 className="text-lg font-medium text-neutral-900">Finishing Layer – Rockbase M or S</h3>
</div>
<span className="iconify text-neutral-300" data-icon="lucide:brush" data-width="24"></span>
</div>
<div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
<p><strong className="font-medium text-neutral-700">First coat:</strong> Apply Rockbase M (texture) or Rockbase S (smooth). Once dry, sand with 120-grit sandpaper.</p>
<p><strong className="font-medium text-neutral-700">Second coat:</strong> Apply a second layer. After drying, sand again to obtain a uniform, silky and natural final finish.</p>
</div>
</div>

<div className="relative bg-white p-8 rounded-xl border border-neutral-200 shadow-sm md:ml-20">
<div className="hidden md:flex absolute -left-[4.5rem] top-8 w-10 h-10 bg-white border border-neutral-200 rounded-full items-center justify-center text-sm font-medium text-neutral-400">05</div>
<div className="flex items-start justify-between mb-4">
<div>
<span className="md:hidden text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-1">Step 05</span>
<h3 className="text-lg font-medium text-neutral-900">Final Sealing &amp; Protection</h3>
</div>
<span className="iconify text-neutral-300" data-icon="lucide:shield" data-width="24"></span>
</div>
<div className="text-sm text-neutral-500 space-y-3 leading-relaxed">
<p>To protect the surface and ensure long-term system performance, apply two coats of VARNISH W.</p>
<p>When increased water resistance is required, use VARNISH DSV instead. Always respect drying times.</p>
</div>
</div>
</div>

<div className="mt-12 bg-neutral-100 border border-neutral-200 p-8 rounded-lg md:ml-20">
<h4 className="text-sm font-medium text-neutral-900 mb-4">Additional Recommendations</h4>
<ul className="text-sm text-neutral-600 space-y-2 list-disc list-inside">
<li>Always perform a test application to verify colour and product compatibility.</li>
<li>Apply the system under controlled conditions, between 10°C and 25°C, with moderate humidity.</li>
<li>Clean tools immediately after use to prevent material hardening.</li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-200" id="technical">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-neutral-900 rounded-xl p-10 text-white">
<h2 className="text-2xl font-medium tracking-tight mb-4">Technical Documentation</h2>
<p className="text-neutral-400 mb-8 font-light">
                        Detailed technical documentation, datasheets and system information are available for professional reference.
                    </p>
<a className="inline-flex items-center gap-2 text-white border border-neutral-700 bg-neutral-800 px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-700 transition-colors" href="#">
                        Access Technical Files
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="bg-white border border-neutral-200 rounded-xl p-10">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-4">Professional Distribution</h2>
<p className="text-neutral-500 mb-8 font-light">
                        Cimenza collaborates with selected distributors and professional partners. For distribution inquiries or technical information, please contact us.
                    </p>
<a className="inline-flex items-center gap-2 text-neutral-900 border border-neutral-200 bg-white px-6 py-3 rounded-md text-sm font-medium hover:border-neutral-400 transition-colors" href="#">
                        Contact Cimenza
                        <span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 bg-white">
<div className="container mx-auto px-6 text-center">
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium">Cimenza Microcement Systems</p>
</div>
</footer>

    </>
  );
}
