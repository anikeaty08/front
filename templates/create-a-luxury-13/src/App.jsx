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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-2xl font-medium tracking-tighter text-white uppercase" href="#">Velorex</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#technology">Technology</a>
<a className="hover:text-white transition-colors duration-300" href="#products">Models</a>
<a className="hover:text-white transition-colors duration-300" href="#performance">Performance</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300 group" href="#contact">
                Inquire
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Cycling abstract" className="w-full h-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 animate-fade-in-up">
<iconify-icon className="text-white" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-xs font-light tracking-widest uppercase text-white">The New Standard</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-none mb-6">
                ENGINEERED FOR <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-600">PURE PERFORMANCE</span>
</h1>
<p className="text-base md:text-lg font-light text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed tracking-tight">
                Elite carbon technology built for speed, precision, and power. Experience the future of aerodynamic cycling.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3 bg-white text-black text-sm font-medium tracking-wide rounded hover:bg-neutral-200 transition-colors duration-300" href="#products">
                    Explore Products
                </a>
<a className="w-full md:w-auto px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide rounded hover:bg-white/10 backdrop-blur-sm transition-colors duration-300" href="#contact">
                    Contact Us
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-black border-t border-white/5" id="philosophy">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-6">
                        BEYOND THE LIMITS OF <br/> PHYSICS AND FORM.
                    </h2>
<div className="h-px w-24 bg-white/30 mb-8"></div>
<p className="text-neutral-400 font-light leading-loose text-sm md:text-base mb-6">
                        At Velorex, we don't just build bicycles; we engineer propulsion systems. Every curve, every fiber, and every component is meticulously designed to reduce drag and maximize energy transfer.
                    </p>
<p className="text-neutral-400 font-light leading-loose text-sm md:text-base">
                        Our philosophy is rooted in subtraction. We remove the excess to reveal the essential. The result is a machine that feels like an extension of your own body—instantaneous, rigid, and impossibly light.
                    </p>
</div>
<div className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded bg-neutral-900">
<img alt="Engineering Detail" className="object-cover w-full h-full opacity-80 hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
<span className="text-xs tracking-widest uppercase text-white border-b border-white pb-1">Precision Engineering</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="technology">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Innovation</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mt-4">CORE TECHNOLOGY</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 bg-black border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:atom-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Nano-Carbon Matrix</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Our proprietary T1100G carbon lay-up technique eliminates microscopic voids, resulting in a frame that is 15% lighter and 20% stiffer than industry standards.
                    </p>
</div>

<div className="group p-8 bg-black border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:wind-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Active Aero Shaping</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Sculpted in the wind tunnel, every tube profile is optimized for yaw angles between 0 and 15 degrees, ensuring minimal drag in real-world conditions.
                    </p>
</div>

<div className="group p-8 bg-black border border-white/5 hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3 tracking-tight">Kinetic Transfer</h3>
<p className="text-sm font-light text-neutral-400 leading-relaxed">
                        Oversized bottom bracket junctions and asymmetrical chainstays ensure that 100% of your pedal stroke is converted into forward momentum.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-black" id="products">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter">THE COLLECTION</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#">
                    View Specs
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative h-80 w-full bg-neutral-900 overflow-hidden mb-6 rounded-sm">
<img alt="Velorex Aero Pro" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">Flagship</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Velorex Aero Pro</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">The ultimate wind-cheating machine.</p>
</div>
<button className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative h-80 w-full bg-neutral-900 overflow-hidden mb-6 rounded-sm">
<img alt="Velorex Carbon X" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Velorex Carbon X</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">All-road endurance and versatility.</p>
</div>
<button className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative h-80 w-full bg-neutral-900 overflow-hidden mb-6 rounded-sm">
<img alt="Velorex UltraLite" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 border border-white/20 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">&lt; 6KG</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Velorex UltraLite</h3>
<p className="text-xs text-neutral-500 mt-2 font-light">Defying gravity on the steepest ascents.</p>
</div>
<button className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-neutral-900 border-y border-white/5 overflow-hidden" id="performance">
<div className="absolute inset-0 opacity-20">
<img alt="Performance Texture" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="text-center px-6 py-8 md:py-0">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-white mb-2">6.8<span className="text-2xl text-neutral-500 ml-1">kg</span></div>
<div className="text-xs uppercase tracking-widest text-neutral-400">Total Weight</div>
</div>
<div className="text-center px-6 py-8 md:py-0">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-white mb-2">45<span className="text-2xl text-neutral-500 ml-1">km/h</span></div>
<div className="text-xs uppercase tracking-widest text-neutral-400">Optimal Aero Efficiency</div>
</div>
<div className="text-center px-6 py-8 md:py-0">
<div className="text-6xl md:text-7xl font-light tracking-tighter text-white mb-2">100<span className="text-2xl text-neutral-500 ml-1">%</span></div>
<div className="text-xs uppercase tracking-widest text-neutral-400">Carbon Purity</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
<div className="w-full md:w-1/2">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Our Mission</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mt-4 mb-8">
                    DEFINING THE FUTURE OF CYCLING LUXURY.
                </h2>
<p className="text-neutral-400 font-light leading-loose text-sm mb-6">
                    Velorex was founded with a singular ambition: to create the world's most advanced performance bicycles without compromise. We combine aerospace-grade materials with artisanal craftsmanship.
                </p>
<div className="flex items-center gap-4 mt-8">
<img alt="Founder" className="w-12 h-12 rounded-full object-cover grayscale opacity-70" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-white text-sm font-medium">Dr. Elias Thorne</div>
<div className="text-neutral-500 text-xs">Chief Engineer</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-white/20"></div>
<img alt="Workshop" className="w-full h-auto grayscale opacity-90 rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-white/20"></div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter mb-4">BEGIN YOUR JOURNEY</h2>
<p className="text-neutral-400 font-light text-sm">Speak with a specialist to configure your Velorex.</p>
</div>
<form className="space-y-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative group">
<input className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" id="name" required="" type="text"/>
<label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Name</label>
</div>
<div className="relative group">
<input className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" id="email" required="" type="email"/>
<label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Address</label>
</div>
</div>
<div className="relative group">
<textarea className="block py-4 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-white/20 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors resize-none" id="message" rows="4"></textarea>
<label className="peer-focus:font-medium absolute text-sm text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="message">Your Message</label>
</div>

<div className="flex items-center gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded-none border border-neutral-500 checked:bg-white checked:border-white transition-all" id="newsletter" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<label className="text-xs text-neutral-400 font-light cursor-pointer select-none" htmlFor="newsletter">Send me exclusive updates on new technology.</label>
</div>
<div className="pt-6 text-center">
<button className="group relative inline-flex items-center justify-center px-12 py-4 overflow-hidden font-medium tracking-widest text-white transition duration-300 ease-out border border-white rounded-full shadow-md" type="button">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-neutral-800 group-hover:translate-x-0 ease">
<iconify-icon icon="solar:plain-3-linear" width="24"></iconify-icon>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease uppercase text-xs">Submit Inquiry</span>
<span className="relative invisible uppercase text-xs">Submit Inquiry</span>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-2xl font-medium tracking-tighter text-white uppercase">Velorex</div>
<div className="flex gap-6 text-xs text-neutral-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Strava</a>
</div>
<div className="text-neutral-600 text-xs font-light">
                © 2023 Velorex Performance.
            </div>
</div>
</footer>

<a className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group" href="#">
<iconify-icon className="text-white" icon="solar:phone-calling-linear" width="28"></iconify-icon>
<span className="absolute right-16 bg-white text-black text-xs font-medium px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">Chat with us</span>
</a>

    </>
  );
}
