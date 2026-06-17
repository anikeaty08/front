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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      

<nav className="fixed md:px-12 flex reveal active mix-blend-difference w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="text-2xl tracking-tighter font-semibold text-white uppercase">Vantage.</div>
<div className="hidden md:flex gap-8">
<a className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase" href="#">Portfolio</a>
<a className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase" href="#">Process</a>
<a className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase" href="#">Studio</a>
</div>
<button className="text-sm font-medium border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-500 uppercase tracking-wide">
            Inquire
        </button>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Modern Architectural Home" className="w-full h-full object-cover grayscale opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
</div>
<div className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center">

<h1 className="reveal delay-200 text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] text-white mb-8">
                Silence <br/> &amp; Stone.
            </h1>

<p className="reveal delay-500 text-lg md:text-xl text-neutral-300 max-w-xl font-light leading-relaxed mb-12">
                Award-winning custom residences tailored for the uncompromising. 
                Where architecture meets absolute stillness.
            </p>

<div className="reveal delay-700 flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 mb-16 grayscale">
<span className="text-xs tracking-widest uppercase border-b border-white/20 pb-1">ArchDaily</span>
<span className="text-xs tracking-widest uppercase border-b border-white/20 pb-1">Dezeen</span>
<span className="text-xs tracking-widest uppercase border-b border-white/20 pb-1">Dwell</span>
<span className="text-xs tracking-widest uppercase border-b border-white/20 pb-1">Architectural Digest</span>
</div>

<div className="reveal delay-700">
<a className="group flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#portfolio">
<span>Explore The Work</span>
<svg className="lucide lucide-arrow-down w-4 h-4 group-hover:translate-y-2 transition-transform duration-500" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-white text-black py-32 md:py-48 px-6 md:px-12 relative">
<div className="container mx-auto max-w-4xl">
<div className="flex flex-col items-center text-center">
<svg className="lucide lucide-quote w-8 h-8 mb-8 text-neutral-300 reveal" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h2 className="reveal text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight mb-12">
                    "Vantage didn't just build a house; they curated an atmosphere. The result is a masterclass in restraint and light."
                </h2>
<div className="reveal delay-200 flex flex-col items-center gap-1">
<span className="text-sm font-semibold tracking-widest uppercase text-neutral-900">The Harrison Residence</span>
<span className="text-xs font-medium text-neutral-500">Pacific Palisades, CA</span>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-32 md:py-40 px-6 md:px-12 border-t border-neutral-900" id="portfolio">
<div className="container mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight">Selected Works</h3>
<a className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wide mt-4 md:mt-0" href="#">
                    View Full Archive <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">

<div className="group cursor-pointer reveal delay-100">
<div className="overflow-hidden aspect-[4/3] mb-6 relative">
<img alt="Modern Concrete Home" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Onyx Villa</h4>
<p className="text-sm text-neutral-500">Residential • 4,500 sq ft</p>
</div>
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24 reveal delay-200">
<div className="overflow-hidden aspect-[3/4] mb-6 relative">
<img alt="Minimal Interior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Highland Retreat</h4>
<p className="text-sm text-neutral-500">Renovation • 3,200 sq ft</p>
</div>
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">2022</span>
</div>
</div>

<div className="group cursor-pointer reveal delay-100">
<div className="overflow-hidden aspect-[4/3] mb-6 relative">
<img alt="Glass House" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Glass Pavilion</h4>
<p className="text-sm text-neutral-500">New Build • 6,000 sq ft</p>
</div>
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">2024</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24 reveal delay-200">
<div className="overflow-hidden aspect-[4/3] mb-6 relative">
<img alt="Modern Exterior" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-neutral-800 pt-4">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">North Point</h4>
<p className="text-sm text-neutral-500">Estate • 8,500 sq ft</p>
</div>
<span className="text-sm text-neutral-500 group-hover:text-white transition-colors">2023</span>
</div>
</div>
</div>
<div className="mt-16 md:hidden text-center reveal">
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 text-sm uppercase tracking-wide" href="#">
                    View Full Archive <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-white text-black py-32 md:py-40 px-6 md:px-12">
<div className="container mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 reveal">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">The Methodology</h3>
<p className="text-lg text-neutral-500 font-light leading-relaxed">
                        Precision isn't an accident. Our process is a linear progression from abstract vision to concrete reality, removing chaos from construction.
                    </p>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group reveal delay-100">
<div className="text-6xl font-light text-neutral-200 mb-6 group-hover:text-black transition-colors duration-500">01</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Vision &amp; Feasibility</h4>
<p className="text-base text-neutral-500 leading-relaxed">
                            We align architectural ambition with site constraints and budget realities before a single line is drawn.
                        </p>
</div>
<div className="group reveal delay-200">
<div className="text-6xl font-light text-neutral-200 mb-6 group-hover:text-black transition-colors duration-500">02</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Detailed Design</h4>
<p className="text-base text-neutral-500 leading-relaxed">
                            Every material, shadow line, and fixture is selected. We build the home virtually before breaking ground.
                        </p>
</div>
<div className="group reveal delay-300">
<div className="text-6xl font-light text-neutral-200 mb-6 group-hover:text-black transition-colors duration-500">03</div>
<h4 className="text-xl font-semibold tracking-tight mb-3">Execution</h4>
<p className="text-base text-neutral-500 leading-relaxed">
                            Rigorous project management. Weekly site reports. A construction phase defined by order, not noise.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white py-32 md:py-40 px-6 md:px-12 border-t border-neutral-900">
<div className="container mx-auto">
<div className="mb-24 max-w-2xl reveal">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Capabilities</h3>
<p className="text-xl text-neutral-400 font-light">
                    A holistic approach to high-end residential creation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal">
<svg className="lucide lucide-pencil-ruler w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Architecture</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Full-service design from conceptual massing to construction documentation.</p>
</div>

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal delay-100">
<svg className="lucide lucide-hammer w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Construction</h4>
<p className="text-sm text-neutral-400 leading-relaxed">General contracting with an obsessive focus on craft and tolerance.</p>
</div>

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal delay-200">
<svg className="lucide lucide-sofa w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="sofa" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"></path><path d="M4 18v2"></path><path d="M20 18v2"></path><path d="M12 4v9"></path></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Interiors</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Material selection, custom millwork design, and furniture curation.</p>
</div>

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal">
<svg className="lucide lucide-trees w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Landscape</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Blurring the lines between interior volume and exterior environment.</p>
</div>

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal delay-100">
<svg className="lucide lucide-key w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Concierge</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Post-completion estate management and seasonal maintenance.</p>
</div>

<div className="bg-black p-12 hover:bg-neutral-950 transition-colors duration-500 group reveal delay-200">
<svg className="lucide lucide-sun w-8 h-8 text-neutral-500 mb-6 group-hover:text-white transition-colors" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<h4 className="text-lg font-semibold tracking-tight mb-3">Sustainability</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Passive house standards and net-zero energy integration.</p>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-32 md:py-40 px-6 md:px-12">
<div className="container mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 reveal">
<div className="aspect-[4/5] bg-neutral-100 relative overflow-hidden">
<img alt="Thomas Wright" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full lg:w-1/2 reveal delay-200">
<span className="block text-xs font-semibold tracking-widest uppercase text-neutral-500 mb-6">Principal Architect</span>
<h3 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8">Thomas Wright</h3>
<div className="space-y-6 text-lg md:text-xl font-light leading-relaxed text-neutral-800">
<p>
                            "I founded Vantage on a simple premise: a home should be the quietest place in your life."
                        </p>
<p className="text-neutral-500 text-base">
                            We don't chase trends. We chase light, proportion, and texture. 
                            Our work is designed to age with dignity, providing a backdrop for life that feels both monumental and intimate.
                        </p>
</div>
<div className="mt-12 pt-12 border-t border-neutral-200">
<img alt="Signature" className="h-12 opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-neutral-900">
<div className="container mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="col-span-1 md:col-span-2">
<h4 className="text-3xl font-semibold tracking-tight mb-8">Ready to build?</h4>
<a className="text-xl text-neutral-400 hover:text-white underline decoration-neutral-700 underline-offset-8 transition-colors" href="mailto:hello@vantage.com">hello@vantage.com</a>
</div>
<div>
<h5 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-6">Office</h5>
<p className="text-neutral-400 font-light">4040 NE 2nd AveMiami Design District, FL 33137</p>
</div>
<div>
<h5 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-6">Social</h5>
<ul className="space-y-4">
<li><a className="text-neutral-400 hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-neutral-400 hover:text-white transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900 text-xs text-neutral-600 uppercase tracking-widest">
<p>© 2024 Vantage Homes. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
