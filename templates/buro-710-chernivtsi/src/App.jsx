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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm bg-[#0C0A09]/80 border-b border-white/5">
<div className="max-w-[1800px] mx-auto px-6 py-6 flex justify-between items-center">

<a className="text-2xl tracking-[0.2em] font-light uppercase z-50 text-stone-100" href="#">
                Buro 710
            </a>

<div className="hidden md:flex items-center space-x-12 text-sm tracking-widest font-light text-stone-400">
<a className="hover:text-stone-100 transition-colors duration-300" href="#">PROJECTS</a>
<a className="hover:text-stone-100 transition-colors duration-300" href="#">STUDIO</a>
<a className="hover:text-stone-100 transition-colors duration-300" href="#">SERVICES</a>
<a className="hover:text-stone-100 transition-colors duration-300" href="#">JOURNAL</a>
</div>

<div className="flex items-center space-x-6">
<a className="hidden md:block text-sm tracking-widest font-light text-stone-300 border-b border-stone-700 pb-0.5 hover:border-stone-100 hover:text-stone-100 transition-colors" href="#">
                    GET IN TOUCH
                </a>
<button className="md:hidden text-stone-100">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-24 pb-12 px-4 md:px-6 flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Luxury Interior" className="w-full h-full object-cover object-center opacity-60 animate-[fadeIn_1.5s_ease-out]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1800px] mx-auto w-full h-full flex flex-col justify-end pb-12 md:pb-24">
<h1 className="text-5xl md:text-7xl lg:text-9xl text-stone-100 font-light tracking-tight leading-[0.9] serif italic">
                Timeless <br/> <span className="not-italic">Darkness</span>
</h1>
<div className="mt-8 flex flex-col md:flex-row md:items-end justify-between border-t border-white/20 pt-6">
<p className="text-stone-300 max-w-md text-sm md:text-base font-light tracking-wide leading-relaxed">
                    Buro 710 curates spaces that embody sophistication and shadows, blending modern minimalism with deep, atmospheric warmth.
                </p>
<div className="mt-8 md:mt-0">
<span className="iconify text-stone-100 animate-bounce" data-icon="lucide:arrow-down" data-width="32"></span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#0C0A09]">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-light tracking-[0.3em] uppercase text-stone-500 mb-6 block">Philosophy</span>
<h2 className="text-3xl md:text-5xl font-light leading-tight text-stone-200 serif mb-10">
                "Interior design is not just about arranging furniture; it’s about creating an atmosphere that resonates with the soul."
            </h2>
<a className="inline-flex items-center gap-2 text-sm tracking-widest uppercase border-b border-stone-600 pb-1 hover:border-stone-200 text-stone-400 hover:text-stone-200 transition-all duration-300" href="#">
                Read our story
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</section>

<section className="px-4 md:px-6 pb-24 bg-[#0C0A09]">
<div className="max-w-[1800px] mx-auto">
<div className="flex justify-between items-end mb-16">
<h3 className="text-2xl md:text-4xl font-light serif text-stone-100">Selected Works</h3>
<a className="hidden md:block text-xs tracking-widest uppercase text-stone-500 hover:text-stone-200 transition-colors" href="#">View All Projects</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

<div className="group relative overflow-hidden cursor-pointer">
<div className="aspect-[4/5] overflow-hidden bg-stone-900">
<img alt="Project 1" className="w-full h-full object-cover image-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-4 flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
<div>
<h4 className="text-xl serif font-normal text-stone-200">Kyiv Penthouse</h4>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Residential</p>
</div>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-stone-500 group-hover:text-stone-100" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group relative overflow-hidden cursor-pointer md:mt-24">
<div className="aspect-[4/5] overflow-hidden bg-stone-900">
<img alt="Project 2" className="w-full h-full object-cover image-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
<div>
<h4 className="text-xl serif font-normal text-stone-200">Lviv Heritage</h4>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Renovation</p>
</div>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-stone-500 group-hover:text-stone-100" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group relative overflow-hidden cursor-pointer">
<div className="aspect-[3/2] overflow-hidden bg-stone-900">
<img alt="Project 3" className="w-full h-full object-cover image-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
<div>
<h4 className="text-xl serif font-normal text-stone-200">Odesa Seaside Villa</h4>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Architecture</p>
</div>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-stone-500 group-hover:text-stone-100" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>

<div className="group relative overflow-hidden cursor-pointer md:mt-12">
<div className="aspect-[3/2] overflow-hidden bg-stone-900">
<img alt="Project 4" className="w-full h-full object-cover image-hover-zoom opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-4 flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
<div>
<h4 className="text-xl serif font-normal text-stone-200">Modern Loft</h4>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Commercial</p>
</div>
<span className="iconify -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-stone-500 group-hover:text-stone-100" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="text-xs tracking-widest uppercase text-stone-500 border-b border-stone-800 pb-1" href="#">View All Projects</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#141210]">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4">
<span className="text-xs font-light tracking-[0.3em] uppercase text-stone-500 block mb-6">Services</span>
<h3 className="text-3xl md:text-4xl serif font-normal leading-tight mb-6 text-stone-200">Comprehensive design solutions tailored to your lifestyle.</h3>
<p className="text-stone-400 font-light text-sm leading-relaxed mb-8 max-w-sm">
                    From initial concept to final touches, we handle every aspect of the design process with precision and care.
                </p>
<a className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-stone-700 hover:bg-stone-100 hover:text-stone-900 hover:border-stone-100 text-stone-300 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:arrow-down-right" data-width="20"></span>
</a>
</div>
<div className="lg:col-span-8 flex flex-col divide-y divide-white/10">

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300">
<div className="flex items-baseline gap-6">
<span className="text-xs font-mono text-stone-600">01</span>
<h4 className="text-2xl serif font-normal text-stone-300 group-hover:text-white group-hover:italic transition-all">Interior Architecture</h4>
</div>
<p className="mt-4 md:mt-0 text-sm text-stone-500 font-light max-w-xs group-hover:text-stone-400">Space planning, structural modifications, and detailed layouts.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300">
<div className="flex items-baseline gap-6">
<span className="text-xs font-mono text-stone-600">02</span>
<h4 className="text-2xl serif font-normal text-stone-300 group-hover:text-white group-hover:italic transition-all">Decoration &amp; Styling</h4>
</div>
<p className="mt-4 md:mt-0 text-sm text-stone-500 font-light max-w-xs group-hover:text-stone-400">Curating furniture, lighting, art, and accessories.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300">
<div className="flex items-baseline gap-6">
<span className="text-xs font-mono text-stone-600">03</span>
<h4 className="text-2xl serif font-normal text-stone-300 group-hover:text-white group-hover:italic transition-all">Project Management</h4>
</div>
<p className="mt-4 md:mt-0 text-sm text-stone-500 font-light max-w-xs group-hover:text-stone-400">Overseeing construction and installation for seamless delivery.</p>
</div>

<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:pl-4 transition-all duration-300">
<div className="flex items-baseline gap-6">
<span className="text-xs font-mono text-stone-600">04</span>
<h4 className="text-2xl serif font-normal text-stone-300 group-hover:text-white group-hover:italic transition-all">Furniture Design</h4>
</div>
<p className="mt-4 md:mt-0 text-sm text-stone-500 font-light max-w-xs group-hover:text-stone-400">Bespoke pieces crafted specifically for your unique space.</p>
</div>
</div>
</div>
</section>

<section className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden">
<img alt="Detail" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-[#0C0A09]/90 backdrop-blur-sm p-8 md:p-12 text-center max-w-lg mx-4 border border-white/10 shadow-2xl">
<h3 className="text-2xl serif font-normal mb-4 text-stone-100">Book a Consultation</h3>
<p className="text-sm font-light text-stone-400 mb-8 leading-relaxed">
                    Ready to transform your space? Let's discuss your vision and bring it to life with elegance and precision.
                </p>
<button className="bg-stone-100 text-stone-950 px-8 py-3 text-xs tracking-[0.2em] uppercase hover:bg-stone-300 transition-colors">
                    Contact Us
                </button>
</div>
</div>
</section>

<footer className="bg-black text-stone-400 pt-24 pb-12 px-6 border-t border-white/5">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
<div className="md:col-span-1">
<a className="text-3xl text-stone-100 serif tracking-widest uppercase mb-8 block" href="#">Buro 710</a>
<p className="text-xs font-light leading-relaxed max-w-[200px]">
                    Kyiv, Ukraine<br/>
                    Volodymyrska St, 101<br/>
                    +380 44 123 4567
                </p>
</div>
<div className="md:col-span-1 flex flex-col space-y-3 text-xs font-light tracking-wider uppercase">
<span className="text-stone-600 mb-2">Explore</span>
<a className="hover:text-white transition-colors" href="#">Projects</a>
<a className="hover:text-white transition-colors" href="#">Studio</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
</div>
<div className="md:col-span-1 flex flex-col space-y-3 text-xs font-light tracking-wider uppercase">
<span className="text-stone-600 mb-2">Social</span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Pinterest</a>
<a className="hover:text-white transition-colors" href="#">Behance</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
<div className="md:col-span-1">
<span className="text-xs font-light tracking-wider uppercase text-stone-600 mb-4 block">Newsletter</span>
<form className="flex border-b border-stone-800 pb-2">
<input className="bg-transparent w-full text-sm text-stone-200 placeholder-stone-700 focus:outline-none font-light" placeholder="Email Address" type="email"/>
<button className="text-stone-500 hover:text-white transition-colors" type="submit">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</div>
<div className="max-w-[1800px] mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-stone-600">
<p>© 2024 Buro 710. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-stone-400" href="#">Privacy Policy</a>
<a className="hover:text-stone-400" href="#">Terms of Use</a>
</div>
</div>
</footer>

    </>
  );
}
