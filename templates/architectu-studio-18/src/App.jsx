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
      

<nav className="fixed top-0 left-0 right-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 py-5 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight uppercase z-50 relative group font-sans" href="#">
                Miller Tischler
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neutral-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">WORK</a>
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">STUDIO</a>
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">NEWS</a>
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">CONTACT</a>
</div>

<button className="md:hidden group flex flex-col items-end space-y-1.5 cursor-pointer z-50">
<span className="w-6 h-[1.5px] bg-neutral-900 group-hover:w-4 transition-all duration-300"></span>
<span className="w-4 h-[1.5px] bg-neutral-900 group-hover:w-6 transition-all duration-300"></span>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 max-w-screen-2xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl">
<h1 className="serif md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-light text-neutral-900 tracking-tight font-newsreader mb-8" style={{}}>
                Thinking through <br className="hidden md:block"/>
<span className="text-neutral-600 font-newsreader font-light" style={{}}>space</span> and <span className="text-neutral-600 font-newsreader font-light" style={{}}>materiality</span>.
            </h1>
<p className="text-sm md:text-base text-neutral-500 font-light max-w-xl leading-relaxed font-sans">
                We are a multi-disciplinary architecture studio focused on residential and commercial projects that harmonize modern aesthetics with functional living.
            </p>
</div>
</header>

<section className="px-4 md:px-6 w-full mb-24 md:mb-32">
<div className="w-full h-[60vh] md:h-[85vh] overflow-hidden relative group">
<img alt="Modern Architecture" className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-6 md:p-10 w-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<p className="text-white text-sm font-medium tracking-widest uppercase font-sans">The Highlands Residence</p>
<p className="text-white/80 text-xs mt-1 font-light font-sans">Aspen, Colorado</p>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-200 pb-6">
<h2 className="serif text-3xl md:text-4xl tracking-tight font-newsreader font-light" style={{}}>Selected Works</h2>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors group font-sans" href="#">
                VIEW ALL PROJECTS
                <iconify-icon className="transform transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-2xl tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors font-newsreader font-light" style={{}}>Dune House</h3>
<p className="text-xs text-neutral-400 mt-1 font-light font-sans">Residential — Hamptons, NY</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-2xl tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors font-newsreader font-light" style={{}}>Gallery 109</h3>
<p className="text-xs text-neutral-400 mt-1 font-light font-sans">Commercial — Chelsea, NY</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-6">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-2xl tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors font-newsreader font-light" style={{}}>Concrete Pavillion</h3>
<p className="text-xs text-neutral-400 mt-1 font-light font-sans">Public — Seattle, WA</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-6">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="serif text-2xl tracking-tight text-neutral-900 group-hover:text-neutral-600 transition-colors font-newsreader font-light" style={{}}>Forest Retreat</h3>
<p className="text-xs text-neutral-400 mt-1 font-light font-sans">Residential — Portland, OR</p>
</div>
<iconify-icon className="text-neutral-300 group-hover:text-neutral-900 transition-colors" icon="lucide:arrow-up-right" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 block mb-4 font-sans">Philosophy</span>
<h2 className="serif text-3xl md:text-4xl tracking-tight text-neutral-900 font-newsreader font-light" style={{}}>
                    Designing for <br/> longevity.
                </h2>
</div>
<div className="md:col-span-8 flex flex-col gap-8 md:pr-24">
<p className="text-neutral-600 font-light text-lg leading-relaxed font-sans">
                    We believe that architecture is not merely about structure, but about the experience of space. Our approach is rooted in a deep respect for context, materiality, and light. Each project is a dialogue between the client's vision and the site's unique characteristics.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-neutral-200 mb-4 shadow-sm">
<iconify-icon className="text-neutral-700" icon="lucide:layers" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-neutral-900 font-sans">Contextual Design</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed font-sans">Every structure should feel like it belongs, rooted firmly in its environment.</p>
</div>
<div className="space-y-3">
<div className="w-8 h-8 flex items-center justify-center bg-white rounded-full border border-neutral-200 mb-4 shadow-sm">
<iconify-icon className="text-neutral-700" icon="lucide:sun" width="16"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-neutral-900 font-sans">Sustainable Practice</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed font-sans">Using local materials and passive design strategies to minimize footprint.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
<div>
<h2 className="serif text-4xl md:text-5xl tracking-tight text-neutral-900 mb-6 font-newsreader font-light" style={{}}>Let's build something <br/> <span className="text-neutral-400 font-newsreader font-light" style={{}}>timeless.</span></h2>
<p className="text-neutral-500 font-light mb-10 max-w-md font-sans">Based in New York, working globally. Reach out to discuss your next project.</p>
<div className="space-y-1">
<a className="flex items-center gap-3 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors group font-sans" href="mailto:hello@millertischler.com">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600" icon="lucide:mail" width="18"></iconify-icon>
                            hello@millertischler.com
                        </a>
<a className="flex items-center gap-3 text-lg font-medium text-neutral-900 hover:text-neutral-600 transition-colors group font-sans" href="tel:+12125550199">
<iconify-icon className="text-neutral-400 group-hover:text-neutral-600" icon="lucide:phone" width="18"></iconify-icon>
                            +1 (212) 555 0199
                        </a>
</div>
</div>

<div className="bg-neutral-50 p-8 md:p-10 rounded-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 font-sans">Name</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 font-sans">Email</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-300 font-light" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wide text-neutral-500 font-sans">Project Type</label>
<div className="relative w-full">
<select className="w-full appearance-none bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 transition-colors font-light cursor-pointer">
<option className="font-sans">Residential Construction</option>
<option className="font-sans">Commercial Space</option>
<option className="font-sans">Interior Renovation</option>
<option className="font-sans">Landscape Architecture</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="pt-2">
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 border border-neutral-300 transition-all rounded-[2px] flex items-center justify-center bg-white group-hover:border-neutral-500">
<iconify-icon className="text-white hidden" icon="lucide:check" width="10"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 font-light select-none font-sans">I agree to the processing of my personal data for contact purposes.</span>
</label>
</div>
<button className="group flex items-center justify-between w-full bg-neutral-900 text-white px-6 py-4 mt-4 hover:bg-neutral-800 transition-all duration-300" type="submit">
<span className="text-sm font-medium tracking-wide font-sans">SEND INQUIRY</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 text-xs text-neutral-400 font-light">
<p className="font-sans">© 2024 Miller Tischler. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">Instagram</a>
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">LinkedIn</a>
<a className="hover:text-neutral-900 transition-colors font-sans" href="#">Pinterest</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
