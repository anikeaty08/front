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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 group hover:shadow-md bg-gradient-to-b to-transparent hover:bg-white from-black/50 hover:from-white">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-serif group-hover:text-slate-900 flex items-center gap-2 tracking-wide transition-colors text-white" href="#">
<iconify-icon className="group-hover:text-amber-600 text-amber-400" icon="solar:crown-linear" strokeWidth="1.5" width="24"></iconify-icon>
                LUXE.ESTATE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium group-hover:text-slate-600 text-white/90">
<a className="group-hover:hover:text-amber-600 transition-colors hover:text-amber-400" href="#featured">Collection</a>
<a className="group-hover:hover:text-amber-600 transition-colors hover:text-amber-400" href="#process">Concierge</a>
<a className="group-hover:hover:text-amber-600 transition-colors hover:text-amber-400" href="#reviews">Journal</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-none hover:bg-amber-500 transition-all duration-300 text-slate-900 bg-white hover:text-white" href="#contact">
                Private Viewing
            </a>
</div>
</nav>

<section className="relative min-h-[110vh] flex items-center pt-20 pb-20 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r to-transparent from-slate-950/90 via-slate-950/60"></div>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-slate-950/80"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center relative z-10">

<div className="lg:col-span-7 pt-10">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border text-xs font-medium mb-8 backdrop-blur-sm animate-fade-up border-white/20 bg-white/5 text-amber-300">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-amber-400"></span>
                    Global Luxury Real Estate
                </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 animate-fade-up delay-100 text-white">
                    Curating <i className="font-serif italic text-amber-200">Exquisite</i> <br/> Lifestyles.
                </h1>
<p className="text-lg mb-10 max-w-lg leading-relaxed font-light animate-fade-up delay-200 text-slate-300">
                    Discover a portfolio of the world's most distinguished properties. Where architectural mastery meets unparalleled comfort.
                </p>
<div className="flex items-center gap-10 animate-fade-up delay-300">
<div className="flex -space-x-4">
<img alt="" className="w-12 h-12 rounded-full border-2 object-cover border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-12 h-12 rounded-full border-2 object-cover border-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-12 h-12 rounded-full border-2 object-cover border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-12 h-12 rounded-full border-2 bg-amber-500 flex items-center justify-center text-xs font-medium border-slate-900 text-white">2k+</div>
</div>
<div>
<p className="font-medium text-white">Trusted by Elites</p>
<div className="flex gap-1 text-sm text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 animate-fade-right delay-200">
<div className="glass-card p-8 md:p-10 rounded-none md:rounded-tl-[3rem] md:rounded-br-[3rem] relative">

<div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 rounded-tr-3xl border-amber-400/50"></div>
<div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 rounded-bl-3xl border-amber-400/50"></div>
<div className="mb-8">
<span className="text-xs font-semibold tracking-widest uppercase text-amber-600">Concierge Service</span>
<h3 className="text-3xl mt-2 text-slate-900">Find your sanctuary</h3>
</div>
<form className="space-y-6">
<div className="relative pt-4 group">
<input className="floating-input w-full bg-transparent border-b py-3 text-lg focus:outline-none focus:border-amber-600 transition-colors border-slate-300 text-slate-900" id="name" placeholder=" " type="text"/>
<label className="absolute left-0 top-3 text-base transition-all duration-300 pointer-events-none group-focus-within:text-amber-600 text-slate-400" htmlFor="name">Full Name</label>
</div>
<div className="relative pt-4 group">
<input className="floating-input w-full bg-transparent border-b py-3 text-lg focus:outline-none focus:border-amber-600 transition-colors border-slate-300 text-slate-900" id="location" placeholder=" " type="text"/>
<label className="absolute left-0 top-3 text-base transition-all duration-300 pointer-events-none group-focus-within:text-amber-600 text-slate-400" htmlFor="location">Desired Location</label>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="relative pt-4 group">
<input className="floating-input w-full bg-transparent border-b py-3 text-lg focus:outline-none focus:border-amber-600 transition-colors border-slate-300 text-slate-900" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-0 top-3 text-base transition-all duration-300 pointer-events-none group-focus-within:text-amber-600 text-slate-400" htmlFor="phone">Phone</label>
</div>
<div className="relative pt-4 group">
<input className="floating-input w-full bg-transparent border-b py-3 text-lg focus:outline-none focus:border-amber-600 transition-colors border-slate-300 text-slate-900" id="email" placeholder=" " type="email"/>
<label className="absolute left-0 top-3 text-base transition-all duration-300 pointer-events-none group-focus-within:text-amber-600 text-slate-400" htmlFor="email">Email</label>
</div>
</div>
<div className="pt-4 pb-2">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-slate-500">Budget Range</span>
<span className="text-sm font-semibold text-slate-900">$1M - $50M+</span>
</div>
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer bg-slate-200 accent-amber-600" type="range"/>
</div>
<button className="w-full py-4 text-sm tracking-widest uppercase transition-all duration-500 shadow-xl flex items-center justify-center gap-3 group bg-slate-900 text-white hover:bg-amber-600 shadow-slate-900/10" type="button">
<span>Request Consultation</span>
<iconify-icon className="group-hover:translate-x-2 transition-transform duration-300" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 z-10">
<span className="text-[10px] tracking-[0.2em] uppercase text-white">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="border-b py-12 border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
<span className="text-2xl font-serif italic text-slate-900">Vogue Living</span>
<span className="text-2xl font-serif italic text-slate-900">Architectural Digest</span>
<span className="text-2xl font-serif italic text-slate-900">Forbes Global</span>
<span className="text-2xl font-serif italic text-slate-900">The New York Times</span>
<span className="text-2xl font-serif italic text-slate-900">Elle Decor</span>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-50" id="featured">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-xs font-bold tracking-widest uppercase mb-2 block text-amber-600">Exclusive Listings</span>
<h2 className="text-4xl md:text-5xl leading-tight text-slate-900">Handpicked <br/> <i className="font-serif italic text-slate-400">Masterpieces</i></h2>
</div>
<a className="group flex items-center gap-2 text-sm font-medium border-b pb-1 transition-all text-slate-900 border-slate-200 hover:border-slate-900" href="#">
                    View Full Collection <iconify-icon className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group cursor-pointer">
<div className="relative h-[28rem] overflow-hidden mb-6">
<img alt="Estate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10"></div>
<div className="absolute top-6 left-6 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/90 text-slate-900">
                            Beverly Hills
                        </div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-amber-700 transition-colors text-slate-900">The Glass Villa</h3>
<span className="font-serif text-xl italic text-slate-500">$14.5M</span>
</div>
<p className="font-light text-sm mb-4 text-slate-400">924 Bel Air Rd, Los Angeles</p>
<div className="flex items-center gap-6 text-slate-500 text-xs tracking-wider uppercase border-t pt-4 border-slate-200">
<span className="flex items-center gap-2"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 5 Beds</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 6 Baths</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon> 8,200 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative h-[28rem] overflow-hidden mb-6">
<img alt="Estate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?q=80&amp;w=2944&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10"></div>
<div className="absolute top-6 left-6 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/90 text-slate-900">
                            Malibu
                        </div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-amber-700 transition-colors text-slate-900">Oceanfront Zen</h3>
<span className="font-serif text-xl italic text-slate-500">$22.0M</span>
</div>
<p className="font-light text-sm mb-4 text-slate-400">2000 Pacific Coast Hwy</p>
<div className="flex items-center gap-6 text-slate-500 text-xs tracking-wider uppercase border-t pt-4 border-slate-200">
<span className="flex items-center gap-2"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 4 Beds</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 4 Baths</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon> 4,500 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative h-[28rem] overflow-hidden mb-6">
<img alt="Estate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-transparent transition-colors bg-black/10"></div>
<div className="absolute top-6 left-6 backdrop-blur px-4 py-1.5 text-xs font-medium uppercase tracking-wider bg-white/90 text-slate-900">
                            Aspen
                        </div>
</div>
<div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-2xl group-hover:text-amber-700 transition-colors text-slate-900">Mountain Chalet</h3>
<span className="font-serif text-xl italic text-slate-500">$18.9M</span>
</div>
<p className="font-light text-sm mb-4 text-slate-400">404 Red Mountain Rd</p>
<div className="flex items-center gap-6 text-slate-500 text-xs tracking-wider uppercase border-t pt-4 border-slate-200">
<span className="flex items-center gap-2"><iconify-icon icon="solar:bed-linear" width="16"></iconify-icon> 6 Beds</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:bath-linear" width="16"></iconify-icon> 7 Baths</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:maximize-square-linear" width="16"></iconify-icon> 9,100 sqft</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-slate-900 text-white" id="process">

<div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none bg-amber-600/10"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<span className="text-amber-500 text-xs font-bold tracking-widest uppercase mb-4 block">The Experience</span>
<h2 className="text-5xl font-serif mb-8 leading-tight">Beyond <br/> Real Estate.</h2>
<p className="text-lg leading-relaxed mb-12 max-w-md font-light text-slate-400">
                        We don't just sell homes; we curate life-enhancing environments. Our approach combines data-driven insights with white-glove concierge service.
                    </p>
<a className="inline-flex items-center gap-3 border px-8 py-4 uppercase tracking-widest text-xs transition-all duration-300 text-white border-white/20 hover:bg-white hover:text-slate-900" href="#">
                        Read Our Story
                    </a>
</div>
<div className="grid gap-10">
<div className="flex gap-6 group">
<div className="w-16 h-16 shrink-0 border flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 border-white/10">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl mb-3 font-medium">Private Access</h3>
<p className="font-light leading-relaxed text-slate-400">Gain access to off-market "pocket" listings available only to our private circle of clients.</p>
</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex gap-6 group">
<div className="w-16 h-16 shrink-0 border flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 border-white/10">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl mb-3 font-medium">Investment Advisory</h3>
<p className="font-light leading-relaxed text-slate-400">Our financial analysts provide deep dives into asset appreciation and yield forecasts.</p>
</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex gap-6 group">
<div className="w-16 h-16 shrink-0 border flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 border-white/10">
<iconify-icon icon="solar:key-minimalistic-square-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl mb-3 font-medium">Global Citizenship</h3>
<p className="font-light leading-relaxed text-slate-400">Assistance with Golden Visas and residency programs when purchasing international properties.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t bg-white border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center mb-16 text-center">
<a className="text-3xl font-serif flex items-center gap-3 mb-6 text-slate-900" href="#">
<iconify-icon className="text-amber-500" icon="solar:crown-linear" width="28"></iconify-icon>
                    LUXE.ESTATE
                </a>
<p className="text-slate-500 max-w-lg font-light leading-relaxed">
                    Headquartered in New York, with offices in London, Dubai, and Singapore.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-16 mb-16 border-slate-100">
<div>
<h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-slate-900">Collections</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-amber-600" href="#">Penthouse</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Waterfront</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Historic</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Estates</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-slate-900">Locations</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-amber-600" href="#">New York</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Los Angeles</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Miami</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Dubai</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-slate-900">Company</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-amber-600" href="#">Our Story</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Agents</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Careers</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-slate-900">Social</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="transition-colors hover:text-amber-600" href="#">Instagram</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">LinkedIn</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Twitter</a></li>
<li><a className="transition-colors hover:text-amber-600" href="#">Facebook</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-light uppercase tracking-wider text-slate-400">
<p>© 2024 LuxeEstate Inc. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Use</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
