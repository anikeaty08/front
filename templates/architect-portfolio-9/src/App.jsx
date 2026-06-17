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
      

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-stone-900 px-6 py-6 md:px-12 flex justify-between items-center bg-[#FDFCFB]/80 backdrop-blur-sm border-b border-stone-100">
<div className="uppercase tracking-[0.2em] text-xs font-medium font-sans" style={{}}>
            Nico Donà
        </div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase text-stone-500">
<a className="hover:text-stone-900 transition-colors duration-300 font-sans" href="#philosophy" style={{}}>Philosophy</a>
<a className="hover:text-stone-900 transition-colors duration-300 font-sans" href="#projects" style={{}}>Portfolio</a>
<a className="hover:text-stone-900 transition-colors duration-300 font-sans" href="#contact" style={{}}>Contact</a>
</div>
<a className="md:hidden" href="#contact">
<svg aria-hidden="true" className="iconify w-5 h-5 text-stone-900 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</nav>

<header className="min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 pt-32 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-stone-50/50 -z-10 border-l border-stone-100 hidden lg:block"></div>
<div className="max-w-7xl w-full mx-auto">
<p className="uppercase animate-word delay-100 text-xs font-medium text-stone-400 tracking-[0.2em] mb-8">Est. 1994 — Veneto, Italy</p>
<h1 className="text-[3.5rem] leading-[1] md:text-[5rem] lg:text-[6rem] font-light text-stone-900 tracking-tight font-manrope mb-12" style={{}}>
<span className="block overflow-hidden">
<span className="inline-block animate-word delay-200 font-custom" style={{}}>The</span>
<span className="inline-block animate-word delay-300 font-custom" style={{}}>Art</span>
<span className="inline-block animate-word delay-400 font-custom" style={{}}>of</span>
</span>
<span className="block overflow-hidden text-stone-400">
<span className="inline-block animate-word delay-500 font-custom" style={{}}>Invisible</span>
<span className="inline-block animate-word delay-600 text-stone-900 font-custom" style={{}}>Precision.</span>
</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
<div className="col-span-1 md:col-span-5 lg:col-span-4">
<p className="text-sm leading-relaxed text-stone-600 animate-word delay-700 font-inter font-sans" style={{}}>
                        Thirty years of quiet excellence in architectural renovation. We build trust through punctuality, hands-on craftsmanship, and an obsession with detail.
                    </p>
</div>
<div className="col-span-1 md:col-span-7 flex md:justify-end animate-word delay-800">
<svg aria-hidden="true" className="iconify w-6 h-6 text-stone-300 animate-bounce iconify--lucide" data-icon="lucide:arrow-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 border-t border-stone-100" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:gap-32 gap-x-16 gap-y-16 items-center">
<div className="relative group">
<div className="img-container aspect-[3/4] bg-stone-100">
<img alt="Detailed architectural texture" className="w-full h-full object-cover img-hover opacity-90 grayscale-[20%]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white border border-stone-100 flex items-center justify-center p-4 shadow-sm">
<span className="text-4xl text-stone-900 font-custom" style={{}}>30</span>
<span className="absolute bottom-2 text-[10px] uppercase tracking-widest text-stone-400 font-sans" style={{}}>Years</span>
</div>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl tracking-tight mb-8 text-stone-900 font-custom" style={{}}>
                        Grown by whispers,  <span className="text-stone-400 font-custom" style={{}}>not shouts.</span>
</h2>
<div className="space-y-6 text-sm text-stone-600 font-inter leading-relaxed max-w-md">
<p className="font-sans" style={{}}>
                            In an industry often defined by delays and uncertainty, we offer the rare luxury of reliability. Our growth has been entirely organic—a testament to three decades of word-of-mouth recommendations in Northern Italy.
                        </p>
<p className="font-sans" style={{}}>
                            We approach every project, from a €4,000 bathroom restoration to a €100,000 complete apartment renovation, with the same level of architectural rigor and ethical transparency.
                        </p>
</div>
<div className="mt-12 grid grid-cols-2 gap-8">
<div>
<svg aria-hidden="true" className="iconify w-5 h-5 text-stone-800 mb-3 iconify--lucide" data-icon="lucide:ruler" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-normal text-lg mb-1 font-sans" style={{}}>Precision</h3>
<p className="text-xs text-stone-500 font-sans" style={{}}>Millimeter-perfect execution.</p>
</div>
<div className="">
<svg aria-hidden="true" className="iconify w-5 h-5 text-stone-800 mb-3 iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h3 className="font-normal text-lg mb-1 font-sans" style={{}}>Punctuality</h3>
<p className="text-xs text-stone-500 font-sans" style={{}}>Respecting your time, always.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-50" id="projects">
<div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-end border-b border-stone-200 pb-8">
<h2 className="text-4xl md:text-6xl tracking-tight text-stone-900 font-custom" style={{}}>Selected Works</h2>
<p className="text-xs uppercase tracking-widest text-stone-500 mt-4 md:mt-0 font-sans" style={{}}>Private &amp; Commercial</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 max-w-7xl mx-auto">

<div className="md:col-span-8 group cursor-pointer">
<div className="img-container aspect-[16/9] mb-6 overflow-hidden">
<img alt="Condominium Renovation" className="w-full h-full object-cover img-hover grayscale-[10%]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-normal text-xl text-stone-900 font-sans" style={{}}>Condominium Restoration</h3>
<p className="text-xs text-stone-500 mt-1 font-sans" style={{}}>Facade &amp; Structural Reinforcement</p>
</div>
<svg aria-hidden="true" className="iconify w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="md:col-span-4 flex flex-col justify-between bg-white p-8 border border-stone-100 group">
<div>
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify w-4 h-4 text-stone-600 iconify--lucide" data-icon="lucide:pen-tool" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-2xl text-stone-900 mb-4 font-custom" style={{}}>Architectural Consulting</h3>
<p className="text-sm text-stone-500 leading-relaxed font-sans" style={{}}>
                        Beyond construction, we provide detailed technical mapping and feasibility studies for complex renovations. Bridging the gap between design intent and on-site reality.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-stone-100">
<p className="text-xs font-mono text-stone-400 font-sans" style={{}}>REF: CONSULT-24</p>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer">
<div className="img-container aspect-[4/5] mb-6">
<img alt="Apartment Interior" className="w-full h-full object-cover img-hover grayscale-[10%]" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-normal text-xl text-stone-900 font-sans" style={{}}>Private Residence</h3>
<p className="text-xs text-stone-500 mt-1 font-sans" style={{}}>Full Apartment Renovation</p>
</div>
<svg aria-hidden="true" className="iconify w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="md:col-span-7 group cursor-pointer">
<div className="img-container aspect-[16/10] mb-6">
<img alt="Architectural Plans" className="w-full h-full object-cover img-hover grayscale-[100%] contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-t border-stone-200 pt-4">
<div>
<h3 className="font-normal text-xl text-stone-900 font-sans" style={{}}>Project Planning</h3>
<p className="text-xs text-stone-500 mt-1 font-sans" style={{}}>Technical Maps &amp; Blueprints</p>
</div>
<svg aria-hidden="true" className="iconify w-4 h-4 text-stone-400 group-hover:text-stone-900 transition-colors iconify--lucide" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-stone-900 text-stone-100">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
<div>
<h2 className="text-4xl mb-4 font-custom" style={{}}>Capabilities</h2>
<p className="text-stone-400 text-sm max-w-xs font-inter font-sans" style={{}}>Operating with discretion across the region. Projects ranging from €4k to €100k executed with equal dedication.</p>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="border-t border-stone-700 pt-6">
<span className="text-xs font-mono text-stone-500 mb-2 block font-sans" style={{}}>01</span>
<h3 className="text-xl font-normal mb-3 text-stone-200 font-sans" style={{}}>Condominium Renovations</h3>
<p className="text-sm text-stone-400 leading-relaxed font-inter font-sans" style={{}}>
                            Common area upgrades, structural repairs, and exterior maintenance managed with minimal disruption to residents.
                        </p>
</div>

<div className="border-t border-stone-700 pt-6">
<span className="text-xs font-mono text-stone-500 mb-2 block font-sans" style={{}}>02</span>
<h3 className="text-xl font-normal mb-3 text-stone-200 font-sans" style={{}}>Apartment Interiors</h3>
<p className="text-sm text-stone-400 leading-relaxed font-inter font-sans" style={{}}>
                            Complete turn-key solutions. Demolition, reconstruction, tiling, and finishing with artisan quality.
                        </p>
</div>

<div className="border-t border-stone-700 pt-6">
<span className="text-xs font-mono text-stone-500 mb-2 block font-sans" style={{}}>03</span>
<h3 className="text-xl font-normal mb-3 text-stone-200 font-sans" style={{}}>Architectural Consulting</h3>
<p className="text-sm text-stone-400 leading-relaxed font-inter font-sans" style={{}}>
                            Expert advice on materials, structural feasibility, and cost optimization before work begins.
                        </p>
</div>

<div className="border-t border-stone-700 pt-6">
<span className="text-xs font-mono text-stone-500 mb-2 block font-sans" style={{}}>04</span>
<h3 className="text-xl font-normal mb-3 text-stone-200 font-sans" style={{}}>Maps &amp; Planning</h3>
<p className="text-sm text-stone-400 leading-relaxed font-inter font-sans" style={{}}>
                            Creation of detailed project plans and maps to guide the renovation process efficiently.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#FDFCFB]">
<div className="max-w-7xl mx-auto border border-stone-100 p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-stone-100">
<div className="px-4 pb-8 md:pb-0">
<svg aria-hidden="true" className="iconify w-8 h-8 text-stone-800 mx-auto mb-4 iconify--lucide" data-icon="lucide:handshake" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m11 17l2 2a1 1 0 1 0 3-3"></path><path d="m14 14l2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"></path></g></svg>
<h4 className="text-sm font-medium uppercase tracking-wider mb-2 font-sans" style={{}}>Referral Only History</h4>
<p className="text-xs text-stone-500 font-inter font-sans" style={{}}>Built entirely on trust and results.</p>
</div>
<div className="px-4 py-8 md:py-0">
<svg aria-hidden="true" className="iconify w-8 h-8 text-stone-800 mx-auto mb-4 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h4 className="text-sm font-medium uppercase tracking-wider mb-2 font-sans" style={{}}>Transparent Process</h4>
<p className="text-xs text-stone-500 font-inter font-sans" style={{}}>No hidden costs. Clear timelines.</p>
</div>
<div className="px-4 pt-8 md:pt-0">
<svg aria-hidden="true" className="iconify w-8 h-8 text-stone-800 mx-auto mb-4 iconify--lucide" data-icon="lucide:hard-hat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m0-4a6 6 0 0 1 6 6v3M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></g></svg>
<h4 className="text-sm font-medium uppercase tracking-wider mb-2 font-sans" style={{}}>Hands-On Experience</h4>
<p className="text-xs text-stone-500 font-inter font-sans" style={{}}>Direct artisan involvement.</p>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 md:px-12 bg-white relative" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-5xl md:text-7xl tracking-tight text-stone-900 mb-8 font-custom" style={{}}>
                    Let's discuss <br/> your project.
                </h2>
<p className="text-sm text-stone-600 font-inter max-w-md font-sans" style={{}}>
                    We accept a limited number of projects per year to maintain our standards of precision and availability. Please reach out to discuss your renovation or consulting needs.
                </p>
</div>
<div className="space-y-12 lg:pl-24">
<div className="group">
<p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans" style={{}}>Email</p>
<a className="block text-xl md:text-2xl text-stone-900 hover:text-stone-500 transition-colors font-custom" href="mailto:nico.dona@tiscali.it" style={{}}>
                        nico.dona@tiscali.it
                    </a>
<a className="block text-xl md:text-2xl text-stone-900 hover:text-stone-500 transition-colors mt-2 font-custom" href="mailto:arc.nico.dona@gmail.com" style={{}}>
                        arc.nico.dona@gmail.com
                    </a>
</div>
<div className="group">
<p className="text-xs uppercase tracking-widest text-stone-400 mb-2 font-sans" style={{}}>Phone</p>
<a className="block text-xl md:text-2xl text-stone-900 hover:text-stone-500 transition-colors font-custom" href="tel:3473010509" style={{}}>
                        +39 347 301 0509
                    </a>
</div>
<div className="pt-12 border-t border-stone-100">
<p className="text-xs text-stone-400 font-inter font-sans" style={{}}>
                        © 2024 Nico Donà. Artisan Contractor. All rights reserved. <br/>
                        VAT: Included in invoice | Veneto, Italy
                    </p>
</div>
</div>
</div>
</footer>

    </>
  );
}
