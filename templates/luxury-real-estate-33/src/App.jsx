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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter uppercase text-stone-900">HEVS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#problem">The Problem</a>
<a className="hover:text-stone-900 transition-colors" href="#solution">Process</a>
<a className="hover:text-stone-900 transition-colors" href="#work">Work</a>
</div>
<a className="hidden md:inline-flex text-xs font-medium uppercase tracking-wide border border-stone-300 px-4 py-2 rounded-full hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300" href="#contact">
                Book Sample
            </a>
</div>
</nav>

<header className="md:pt-52 md:pb-32 pt-40 pr-6 pb-20 pl-6">
<div className="max-w-4xl mx-auto text-center">
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-stone-900 tracking-tight mb-8">
                Virtual staging that<br/>actually looks real.
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-stone-500 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>High-end digital staging for luxury listings when physical staging isn’t an option. No AI slop. Just premium visuals.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-stone-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    Request a sample
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="sm:w-auto hover:border-stone-400 transition-colors text-sm font-medium text-stone-600 bg-white w-full border-stone-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" onclick="window.location.href='#work'">
    See before / after
</button>
</div>
</div>

<div className="max-w-6xl mx-auto mt-20 relative aspect-[16/9] overflow-hidden rounded-sm shadow-sm">
<img alt="Luxury Interior" className="object-cover w-full h-full opacity-90" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-100 select-none group overflow-hidden" style={{'--position': '50%'}}>

<div className="absolute inset-0 w-full h-full">
<img alt="Staged Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2160&amp;q=80"/>
<div className="absolute top-6 right-6 bg-white/90 text-stone-900 px-3 py-1.5 text-xs font-medium rounded-sm backdrop-blur-sm z-10 shadow-sm border border-white/20">Staged</div>
</div>

<div className="absolute inset-0 w-full h-full overflow-hidden" style={{clipPath: 'inset(0 calc(100% - var(--position)) 0 0)', willChange: 'clip-path'}}>
<img alt="Empty Interior" className="absolute inset-0 w-full h-full object-cover max-w-none" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute top-6 left-6 bg-black/50 text-white px-3 py-1.5 text-xs font-medium rounded-sm backdrop-blur-sm z-10 shadow-sm border border-white/10">Vacant</div>
</div>

<div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.2)] z-20 pointer-events-none will-change: left" style={{left: 'var(--position)'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-stone-100 text-stone-600">
<svg className="lucide lucide-chevrons-left-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>

<input aria-label="Comparison slider" className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30 m-0 p-0 appearance-none touch-none focus:outline-none" max="100" min="0" oninput="this.parentElement.style.setProperty('--position', this.value + '%')" type="range" value="50"/>
</div>
</div>
</header>

<section className="py-24 px-6 border-t border-stone-200" id="problem">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
<div>
<span className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4 block">The Context</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-tight">
                        Most virtual staging looks fake. Luxury buyers spot it instantly.
                    </h2>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
</div>
<p className="text-stone-600 leading-relaxed">
                            Bad staging is worse than an empty room. It creates a disconnect between the digital listing and the physical showing.
                        </p>
</div>
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<p className="text-stone-600 leading-relaxed">
                            Physical staging is the gold standard, but it is expensive, slow, and painful to coordinate for every listing.
                        </p>
</div>
<div className="flex gap-4">
<div className="mt-1 text-stone-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mouse-pointer-click" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1L12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2L8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 leading-relaxed">
                            First click equals first showing. If the digital representation feels cheap, the property value is perceived as lower.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2">The Difference</h2>
<p className="text-stone-500 text-sm">Hover or tap to stage the room.</p>
</div>
<div className="flex gap-2">
<span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">Living Room</span>
<span className="px-3 py-1 border border-stone-100 text-stone-400 text-xs rounded-full">Bedroom</span>
</div>
</div>

<div className="relative w-full aspect-[4/3] md:aspect-[21/9] group overflow-hidden bg-stone-100 rounded-sm cursor-crosshair">

<div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
<img alt="Staged" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur text-stone-900 px-4 py-2 text-xs font-medium rounded-sm">
                        Virtually Staged
                    </div>
</div>

<div className="absolute inset-0 z-10">
<img alt="Empty" className="w-full h-full object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 bg-black/50 backdrop-blur text-white px-4 py-2 text-xs font-medium rounded-sm">
                        Original Vacant
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="solution">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5">
<h2 className="text-3xl font-medium tracking-tight mb-6">Designed for the<br/>discerning eye.</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                        We don't use templates. Our team of designers uses AI as a tool, not a driver, to create photorealistic interiors that respect lighting physics and architectural scale.
                    </p>
<div className="p-6 bg-white border border-stone-200 rounded-sm">
<span className="text-4xl font-light text-stone-900 block mb-2">50%</span>
<p className="text-sm text-stone-500">Vacant homes staged properly have been shown to sell up to 50% faster.</p>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-stone-200 rounded-sm text-stone-700 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-stone-900">Hyper-Realistic Lighting</h3>
<p className="text-sm text-stone-500 leading-relaxed">Shadows, reflections, and ambient occlusion are calculated to match the room’s natural light sources.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-stone-200 rounded-sm text-stone-700 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:armchair" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-stone-900">Luxury Furniture Assets</h3>
<p className="text-sm text-stone-500 leading-relaxed">Curated collections featuring pieces from Minotti, Poliform, and Restoration Hardware styles.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-stone-200 rounded-sm text-stone-700 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-sm font-semibold text-stone-900">Consistency Across Angles</h3>
<p className="text-sm text-stone-500 leading-relaxed">We ensure the same rug, sofa, and art appear in the correct positions across multiple photos.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-stone-200 rounded-sm text-stone-700 mb-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-sm font-semibold text-stone-900">Lifestyle Matching</h3>
<p className="text-sm text-stone-500 leading-relaxed">Styled specifically to appeal to the likely buyer profile for the neighborhood and price point.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h3 className="text-lg font-medium tracking-tight mb-8">What you won't find</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-stone-400">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="line-through decoration-stone-300">Floating furniture</span>
</li>
<li className="flex items-center gap-3 text-stone-400">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="line-through decoration-stone-300">Plastic-looking textures</span>
</li>
<li className="flex items-center gap-3 text-stone-400">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="line-through decoration-stone-300">Generic "big box" templates</span>
</li>
<li className="flex items-center gap-3 text-stone-400">
<svg aria-hidden="true" className="iconify text-stone-300 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="line-through decoration-stone-300">Impossible layouts</span>
</li>
</ul>
</div>

<div>
<h3 className="text-lg font-medium tracking-tight mb-8">Who this is for</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-stone-900 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Luxury agents representing homes above $600k.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-stone-900 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Agents who prioritize brand integrity and credibility.</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-stone-900 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Vacant properties needing warmth and scale definition.</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-stone-100">
<p className="text-xs text-stone-400 uppercase tracking-widest font-semibold mb-2">Ethical Disclosure</p>
<p className="text-sm text-stone-500">
                        We design with transparency. All images are delivered with clear disclosure capabilities. We only add furniture and decor; we do not hide structural defects or alter permanent fixtures.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center" id="contact">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">
                Turn vacant listings into<br/>homes buyers can feel.
            </h2>
<p className="text-stone-500 mb-10">One room. No commitment. Experience the quality first.</p>
<div className="flex flex-col items-center gap-4">
<button className="bg-stone-900 text-white text-sm font-medium px-10 py-4 rounded-full hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 duration-200 shadow-xl shadow-stone-200">
                    Get a sample staging
                </button>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-stone-200 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter uppercase text-stone-900">HEVS</span>
</div>
<p className="text-xs text-stone-400">
                © 2024 High-End Virtual Staging. All rights reserved.
            </p>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
