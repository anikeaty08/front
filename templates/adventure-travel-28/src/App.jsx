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
extend: {
colors: {
border: "hsl(var(--border))",
input: "hsl(var(--input))",
ring: "hsl(var(--ring))",
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-emerald-900 to-neutral-800 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-colors duration-300">
<span className="text-white font-medium text-xs tracking-tighter">HF</span>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:text-emerald-400 transition-colors">HIGH FRONTIER</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-white transition-colors" href="#expeditions">Expeditions</a>
<a className="hover:text-white transition-colors" href="#hunting">Trophy Hunting</a>
<a className="hover:text-white transition-colors" href="#about">Legacy</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center justify-center px-4 py-2 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 transition-all rounded shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                    Book Consultation
                </button>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-light text-neutral-400 tracking-wide uppercase">Locals of the North · 30+ Years Experience</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent pb-2">
                    Beyond the <br className="hidden md:block"/>Known Frontier.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10">
                    Premium hunting expeditions and alpine tours in the untamed ranges of Northern Pakistan. Guided by locals who call the mountains home.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-neutral-950 rounded font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2">
                        Start Your Journey
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
                        View Hunting Records
                    </button>
</div>
</div>

<div className="mt-20 relative rounded-xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 aspect-video mask-gradient">
<img alt="Northern Pakistan Mountains" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 bg-neutral-950/80 backdrop-blur border border-white/10 p-4 rounded-lg">
<div className="bg-neutral-800 p-2 rounded text-white">
<iconify-icon icon="lucide:mountain-snow" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider">Current Location</p>
<p className="text-sm text-white font-medium">Karakoram Range, Pakistan</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">30+</span>
<span className="text-sm text-neutral-500 mt-1">Years of Legacy</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">100%</span>
<span className="text-sm text-neutral-500 mt-1">Safety Record</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">Local</span>
<span className="text-sm text-neutral-500 mt-1">Native Guides Only</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl font-medium text-white tracking-tight">Elite</span>
<span className="text-sm text-neutral-500 mt-1">Conservation Hunting</span>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="expeditions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Curated Expeditions</h2>
<p className="text-neutral-400 font-light max-w-xl">We specialize in bespoke itineraries. Whether you seek the thrill of the hunt or the silence of the alpine peaks, we handle every logistic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Ibex Hunting" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1470755008296-2939845775eb?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 rounded bg-emerald-900/50 backdrop-blur border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
<iconify-icon icon="lucide:crosshair" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Trophy Hunting</h3>
<p className="text-neutral-300 font-light text-sm max-w-md">Sustainable community-based hunting programs for Markhor, Ibex, and Blue Sheep. We possess the exclusive government permits and local expertise.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Trekking" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1548588627-f978862b85e1?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 rounded bg-blue-900/50 backdrop-blur border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon icon="lucide:footprints" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Alpine Trekking</h3>
<p className="text-neutral-300 font-light text-sm">Navigate the legendary trails of K2 Basecamp, Fairy Meadows, and Snow Lake.</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
<img alt="Culture" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 rounded bg-orange-900/50 backdrop-blur border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cultural Jeep Safaris</h3>
<p className="text-neutral-300 font-light text-sm">Experience the ancient silk route, Hunza valley heritage, and Kalash festivals.</p>
</div>
</div>

<div className="md:col-span-2 group relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 flex items-center">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-950"></div>
<div className="relative z-10 p-8 md:p-12 w-full">
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
<div>
<h3 className="text-xl font-medium text-white mb-2">Full-Service Logistics</h3>
<p className="text-neutral-400 font-light text-sm max-w-md">From NOCs and visa invitations to 4x4 transport and high-altitude porters. We handle the bureaucracy so you can focus on the frontier.</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Permits
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Security
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Transport
                                </div>
<div className="flex items-center gap-2 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle"></iconify-icon> Accommodation
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-emerald-500 mb-6" icon="lucide:compass" width="32"></iconify-icon>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6">Decades in the High Frontier</h2>
<p className="text-neutral-400 font-light leading-7 mb-8">
                For over 30 years, High Frontier Tours has been the bridge between the world and the majesty of Northern Pakistan. We are not just tour operators; we are locals. We were born in these valleys, we know the shifting of the glaciers, the migration paths of the Markhor, and the unspoken rules of the high altitude.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
<iconify-icon icon="lucide:shield-check"></iconify-icon> Licensed Operator
                </span>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
<iconify-icon icon="lucide:globe-2"></iconify-icon> Multilingual Guides
                </span>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-800 border border-neutral-700 text-xs text-neutral-300">
<iconify-icon icon="lucide:leaf"></iconify-icon> Eco-Conscious
                </span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Plan Your Expedition</h2>
<p className="text-neutral-400 font-light mb-8">Tell us your objective. Whether it's a specific peak or a trophy hunt, we will construct a custom itinerary for you.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-neutral-800 rounded text-white">
<iconify-icon icon="lucide:mail" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">Direct Line</p>
<p className="text-sm text-neutral-500">info@highfrontiertours.pk</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 p-1 bg-neutral-800 rounded text-white">
<iconify-icon icon="lucide:phone" width="14"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-white">WhatsApp Support</p>
<p className="text-sm text-neutral-500">+92 300 1234567</p>
</div>
</li>
</ul>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-xl p-8 shadow-2xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium ml-1">First Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700" placeholder="John" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Last Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Email</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Interest</label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all appearance-none">
<option>Trophy Hunting</option>
<option>Trekking / Climbing</option>
<option>Cultural Tour</option>
<option>Jeep Safari</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all placeholder:text-neutral-700 resize-none" placeholder="Tell us about your plans..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-medium text-sm transition-colors shadow-lg shadow-emerald-900/20" type="button">
                            Send Request
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center border border-white/10">
<span className="text-white font-medium text-[10px] tracking-tighter">HF</span>
</div>
<span className="text-white font-medium tracking-tight text-sm">HIGH FRONTIER</span>
</div>
<p className="text-neutral-500 text-sm font-light max-w-xs">
                        Specialized tours and hunts in Northern Pakistan.<br/>Established 1993.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Permits &amp; Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Adventures</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Markhor Hunting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ibex Hunting</a></li>
<li><a className="hover:text-white transition-colors" href="#">K2 Trek</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hunza Valley</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-neutral-600 text-xs font-light">© 2023 High Frontier Tours. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
