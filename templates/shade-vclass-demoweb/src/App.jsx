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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
neutral: {
850: '#1f1f1f',
925: '#0f0f0f',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-medium tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
</div>
                Shade
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#concept">The Concept</a>
<a className="hover:text-white transition-colors duration-200" href="#features">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#craftsmanship">Craftsmanship</a>
<a className="hover:text-white transition-colors duration-200" href="#gallery">Gallery</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-white text-neutral-950 px-4 py-2 rounded text-xs font-medium hover:bg-neutral-200 transition-colors" href="#contact">
                    Configure
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Car Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950"></div>
<div className="absolute inset-0 bg-neutral-950/40"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 mb-8 animate-fade-up" style={{animationDelay: '0.1s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Now accepting 2024 V-Class commissions
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-none animate-fade-up" style={{animationDelay: '0.2s'}}>
                Sanctuary in<br/>Motion.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 tracking-tight font-light animate-fade-up" style={{animationDelay: '0.3s'}}>
                We transform the Mercedes V-Class into an uncompromising private jet for the road. Handcrafted luxury, absolute privacy, and seamless technology.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
<a className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-950 text-sm font-medium rounded hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Start Configuration
                </a>
<a className="w-full sm:w-auto px-8 py-3 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="#features">
                    Explore Interior
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Engineered for Silence.</h2>
<p className="text-neutral-500 max-w-md text-sm leading-relaxed">
                        Every Shade conversion begins with complete acoustic isolation, creating a void where only your thoughts resonate.
                    </p>
</div>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:border-white/30 text-white transition-colors">
<iconify-icon icon="lucide:chevron-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-3 rounded-full border border-white/10 hover:border-white/30 text-white transition-colors">
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/5 aspect-[16/9] md:aspect-auto">
<img alt="Seating" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 p-2 bg-white/10 w-fit rounded backdrop-blur-md">
<iconify-icon className="text-white" icon="lucide:armchair" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Zero-Gravity Seating</h3>
<p className="text-sm text-neutral-400">Heated, ventilated, massaging captain's chairs upholstered in premium Nappa leather.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/5 aspect-[4/5] md:aspect-auto">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=2601&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="mb-3 p-2 bg-white/10 w-fit rounded backdrop-blur-md">
<iconify-icon className="text-white" icon="lucide:wifi" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-2 tracking-tight">Connected Suite</h3>
<p className="text-sm text-neutral-400">Starlink integration, 5G redundancy, and secure on-board Wi-Fi for uninterrupted workflow.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between min-h-[240px]">
<div className="p-2 bg-white/5 w-fit rounded border border-white/5">
<iconify-icon className="text-white" icon="lucide:monitor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Cinema Partition</h3>
<p className="text-sm text-neutral-500">40-inch retractable 4K OLED display separating the cabin from the cockpit.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between min-h-[240px]">
<div className="p-2 bg-white/5 w-fit rounded border border-white/5">
<iconify-icon className="text-white" icon="lucide:glass-water" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Refreshment Center</h3>
<p className="text-sm text-neutral-500">Crystal glassware storage and dual-zone refrigeration for champagne and beverages.</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/5 p-8 flex flex-col justify-between min-h-[240px]">
<div className="p-2 bg-white/5 w-fit rounded border border-white/5">
<iconify-icon className="text-white" icon="lucide:sun-moon" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-medium mb-2 tracking-tight">Ambient Atmosphere</h3>
<p className="text-sm text-neutral-500">Starlight headliner with shooting stars and customizable 64-color ambient lighting.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-925 border-t border-white/5" id="craftsmanship">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-lg overflow-hidden border border-white/5">
<img alt="Leather Detail" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1615887110697-0819ec23465f?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="bg-neutral-900 p-6 rounded border border-white/5">
<h4 className="text-white font-medium mb-1">Hermès Leather</h4>
<p className="text-xs text-neutral-500">Sourced from the finest tanneries in Europe.</p>
</div>
<div className="bg-neutral-900 p-6 rounded border border-white/5">
<h4 className="text-white font-medium mb-1">Open Pore Wood</h4>
<p className="text-xs text-neutral-500">Book-matched veneers finished by hand.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-6">Tactile Perfection.</h2>
<p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                        The difference is in the details you touch. We reject plastics in favor of cold milled aluminum, warm open-pore wood, and the softest grade-A hides. Every switch, button, and surface is re-engineered to provide a satisfying tactile response.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Custom diamond quilting patterns available</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Sound-deadening Alcantara pillars and headlining</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-1" icon="lucide:check" width="16"></iconify-icon>
<span className="text-sm text-neutral-300">Deep-pile lambswool floor mats</span>
</li>
</ul>
<a className="inline-flex items-center text-white border-b border-white pb-0.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors text-sm" href="#">
                        View Material Catalog
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Command Center</h2>
<p className="text-neutral-500">Integrated technology that works seamlessly in the background.</p>
</div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
<div className="bg-neutral-950 p-8 flex flex-col items-center text-center group hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-white mb-4 transition-colors" icon="lucide:gamepad-2" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Entertainment</h3>
<p className="text-xs text-neutral-500">PlayStation 5 / Apple TV integration</p>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center text-center group hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-white mb-4 transition-colors" icon="lucide:speaker" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Audio</h3>
<p className="text-xs text-neutral-500">Focal Utopia 18-speaker system</p>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center text-center group hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-white mb-4 transition-colors" icon="lucide:thermometer" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Climate</h3>
<p className="text-xs text-neutral-500">Independent rear HVAC control</p>
</div>
<div className="bg-neutral-950 p-8 flex flex-col items-center text-center group hover:bg-neutral-900 transition-colors">
<iconify-icon className="text-neutral-500 group-hover:text-white mb-4 transition-colors" icon="lucide:tablet" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-2">Control</h3>
<p className="text-xs text-neutral-500">Custom iPad management app</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/20 via-neutral-950 to-neutral-950 pointer-events-none"></div>
<div className="max-w-xl mx-auto relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Commission Your Build</h2>
<p className="text-neutral-500 text-sm">
                    Production is limited to 50 units per year. Enter your details to schedule a consultation with our design team.
                </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400 ml-1">First Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400 ml-1">Last Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="jane@company.com" type="email"/>
</div>
<div className="pt-2 pb-4">
<label className="text-xs font-medium text-neutral-400 ml-1 mb-2 block">Interests</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-3 p-3 border border-neutral-800 rounded bg-neutral-925 cursor-pointer hover:border-neutral-700 transition-colors group">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-neutral-600 rounded bg-neutral-900 checked:bg-white checked:border-white transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Business Mobile Office</span>
</label>
<label className="flex items-center gap-3 p-3 border border-neutral-800 rounded bg-neutral-925 cursor-pointer hover:border-neutral-700 transition-colors group">
<div className="relative flex items-center">
<input className="peer appearance-none w-4 h-4 border border-neutral-600 rounded bg-neutral-900 checked:bg-white checked:border-white transition-all" type="checkbox"/>
<iconify-icon className="absolute inset-0 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-400 group-hover:text-white transition-colors">Family Touring</span>
</label>
</div>
</div>
<button className="w-full bg-white text-neutral-950 font-medium py-3 rounded hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                    Request Brochure
                    <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="text-white text-lg font-medium tracking-tighter uppercase flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-950 rounded-full"></div>
</div>
                    Shade
                </a>
<p className="text-xs text-neutral-600">
                    Redefining the journey for the discerning few. Engineered in Germany, finished in London.
                </p>
</div>
<div className="flex gap-16 text-sm">
<div className="flex flex-col gap-3">
<h5 className="text-white font-medium mb-1">Company</h5>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-white font-medium mb-1">Legal</h5>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="flex flex-col gap-3">
<h5 className="text-white font-medium mb-1">Social</h5>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
<p className="text-[10px] text-neutral-700">© 2024 Shade Automotive Design. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
