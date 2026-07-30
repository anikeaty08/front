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
screens: {
'xs': '375px',
}
}
}
};



        // Simple 3D Card Script - Checks for mouse capabilities to avoid touch glitches
        if (window.matchMedia("(hover: hover)").matches) {
            const cards = document.querySelectorAll('.card-3d');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -5;
                    const rotateY = ((x - centerX) / centerX) * 5;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                });
            });
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
      
<div className="grain"></div>

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 shrink-0">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<span className="text-xs font-semibold tracking-tighter">A</span>
</div>
<span className="text-sm font-medium text-white/90 tracking-tight truncate max-w-[120px] xs:max-w-none">6401 Amboy Road</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#details">Details</a>
<a className="hover:text-white transition-colors" href="#gallery">Surveys</a>
<a className="hover:text-white transition-colors" href="#location">Location</a>
</div>

<a className="text-xs md:text-sm bg-white text-black px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors shrink-0" href="#inquire">
                Inquire
            </a>
</div>
</nav>

<main className="relative pt-24 md:pt-32 pb-16 md:pb-20 px-4 md:px-6 min-h-[90vh] md:min-h-screen flex flex-col justify-center overflow-hidden" id="overview">

<div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-900/20 rounded-full blur-[80px] md:blur-[128px] pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-emerald-900/10 rounded-full blur-[80px] md:blur-[128px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 md:gap-16 items-center perspective-container">

<div className="space-y-6 md:space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm reveal">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="uppercase text-[10px] md:text-xs font-medium text-neutral-300 tracking-wide">For Sale • Commercial Lot</span>
</div>
<h1 className="text-4xl xs:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] reveal delay-100">
<span className="text-gradient">Prime Land</span> in<br />
                    Staten Island.
                </h1>
<p className="text-base md:text-lg text-neutral-400 max-w-md leading-relaxed reveal delay-200">
                    A rare opportunity to acquire approximately 60,000 sq. ft. of prime real estate. Commercial locale opposite a shopping center and near transit.
                </p>

<div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 pt-4 reveal delay-300">
<div className="pb-4 md:pb-0 border-b md:border-b-0 border-white/10 w-full md:w-auto">
<p className="text-2xl md:text-3xl font-medium text-white">$5,100,000</p>
<p className="text-xs text-neutral-500 uppercase tracking-wider mt-1">Asking Price</p>
</div>
<div className="hidden md:block h-10 w-px bg-white/10"></div>
<div className="grid grid-cols-3 gap-4 md:flex md:gap-6 w-full md:w-auto">
<div className="flex flex-col">
<span className="flex items-center gap-1 text-white font-medium text-sm md:text-base">
<iconify-icon className="md:text-lg text-base" icon="solar:map-point-linear"></iconify-icon> 1.38
                            </span>
<span className="text-[10px] md:text-xs text-neutral-500">Acres</span>
</div>
<div className="flex flex-col border-l border-white/10 pl-4 md:border-0 md:pl-0">
<span className="flex items-center gap-1 text-white font-medium text-sm md:text-base">
<iconify-icon className="md:text-lg text-base" icon="solar:ruler-linear"></iconify-icon> ~60k
                            </span>
<span className="text-[10px] md:text-xs text-neutral-500">Sq Ft Lot</span>
</div>
<div className="flex flex-col border-l border-white/10 pl-4 md:border-0 md:pl-0">
<span className="flex items-center gap-1 text-white font-medium text-sm md:text-base">
<iconify-icon className="md:text-lg text-base" icon="solar:city-linear"></iconify-icon> Comm
                            </span>
<span className="text-[10px] md:text-xs text-neutral-500">Zoning</span>
</div>
</div>
</div>
<div className="flex flex-col xs:flex-row gap-3 md:gap-4 pt-4 reveal delay-300">
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 text-sm md:text-base" onClick={(e) => { document.getElementById('inquire').scrollIntoView({behavior: 'smooth'}) }}>
                        Contact Agent
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition-all text-white text-sm md:text-base" onClick={(e) => { document.getElementById('gallery').scrollIntoView({behavior: 'smooth'}) }}>
                        View Surveys
                    </button>
</div>
</div>

<div className="relative w-full aspect-[4/3] lg:aspect-[4/3] card-3d group reveal delay-200 mt-8 md:mt-0">
<div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
<img alt="6401 Amboy Road Survey Map" className="object-cover w-full h-full scale-105 group-hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100" src="https://photos.zillowstatic.com/fp/79af4eafa5501917fa01ec523576e958-cc_ft_1536.jpg" />
</div>

<div className="hidden md:block absolute -z-10 -top-10 -right-10 w-full h-full border border-white/5 rounded-2xl"></div>
</div>
</div>
</main>

<section className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5" id="details">
<div className="max-w-7xl mx-auto">
<div className="mb-10 md:mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Investment Highlights</h2>
<p className="text-neutral-400 max-w-xl text-sm md:text-base">
                    City of "Yes" possibilities. This expansive irregular lot offers significant potential for commercial or mixed-use development.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 perspective-container">

<div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 md:mb-6 text-3d">
<iconify-icon className="md:w-6 md:h-6" icon="solar:map-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-medium text-white mb-2">Massive Scale</h3>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                        Approximately 60,000 sq. ft. of land area (1.38 Acres), providing a blank canvas for substantial projects.
                    </p>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 md:mb-6 text-3d">
<iconify-icon className="md:w-6 md:h-6" icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-medium text-white mb-2">Approvals in Place</h3>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                        DEC approvals secured and W/B renewed, streamlining the initial phases of development.
                    </p>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all card-3d">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4 md:mb-6 text-3d">
<iconify-icon className="md:w-6 md:h-6" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base md:text-lg font-medium text-white mb-2">Strategic Location</h3>
<p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                        Situated opposite a shopping center and near the train station, ensuring high visibility and accessibility.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16">

<div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6 md:mb-8">Property Data</h2>
<div className="space-y-3 md:space-y-4 mb-8 md:mb-10">
<div className="flex justify-between items-center py-3 md:py-4 border-b border-white/5 group hover:bg-white/[0.02] px-2 md:px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-xs md:text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:home-linear"></iconify-icon> Type
                        </span>
<span className="text-white font-medium text-xs md:text-sm text-right">Unimproved Land / Comm</span>
</div>
<div className="flex justify-between items-center py-3 md:py-4 border-b border-white/5 group hover:bg-white/[0.02] px-2 md:px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-xs md:text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:ruler-angular-linear"></iconify-icon> Lot Size
                        </span>
<span className="text-white font-medium text-xs md:text-sm text-right">1.38 Acres</span>
</div>
<div className="flex justify-between items-center py-3 md:py-4 border-b border-white/5 group hover:bg-white/[0.02] px-2 md:px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-xs md:text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:file-text-linear"></iconify-icon> MLS #
                        </span>
<span className="text-white font-medium text-xs md:text-sm text-right">498222</span>
</div>
<div className="flex justify-between items-center py-3 md:py-4 border-b border-white/5 group hover:bg-white/[0.02] px-2 md:px-4 rounded-lg transition-colors cursor-default">
<span className="text-neutral-400 text-xs md:text-sm flex items-center gap-2">
<iconify-icon className="text-neutral-600" icon="solar:dollar-linear"></iconify-icon> Tax Assessment
                        </span>
<span className="text-white font-medium text-xs md:text-sm text-right">$864,000 (2024)</span>
</div>
</div>

<div className="grid grid-cols-2 gap-3 md:gap-4">
<div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/5">
<div className="flex items-center gap-2 md:gap-3">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:walking-round-linear" width="18"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-white">Walk</span>
</div>
<span className="text-base md:text-lg font-semibold text-white">73</span>
</div>
<div className="bg-white/5 rounded-xl p-4 flex items-center justify-between border border-white/5">
<div className="flex items-center gap-2 md:gap-3">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:bicycle-linear" width="18"></iconify-icon>
</div>
<span className="text-xs md:text-sm font-medium text-white">Bike</span>
</div>
<span className="text-base md:text-lg font-semibold text-white">50</span>
</div>
</div>
</div>

<div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight mb-6 md:mb-8">Nearby Schools</h2>
<div className="space-y-3 md:space-y-4">

<div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="text-[10px] md:text-xs font-bold">PK-5</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-xs md:text-sm">Ps 3 The Margaret Gioiosa School</h4>
<p className="text-neutral-500 text-[10px] md:text-xs mt-1">Public • 0.3 miles</p>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-medium">
                                    8/10
                                </div>
</div>
</div>
</div>

<div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="text-[10px] md:text-xs font-bold">6-8</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-xs md:text-sm">Is 34 Tottenville</h4>
<p className="text-neutral-500 text-[10px] md:text-xs mt-1">Public • 1.7 miles</p>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-medium">
                                    8/10
                                </div>
</div>
</div>
</div>

<div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<span className="text-[10px] md:text-xs font-bold">9-12</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-white font-medium text-xs md:text-sm">Tottenville High School</h4>
<p className="text-neutral-500 text-[10px] md:text-xs mt-1">Public • 1.4 miles</p>
</div>
<div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] md:text-xs font-medium">
                                    7/10
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-8 md:mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-2">Property Surveys</h2>
<p className="text-neutral-400 text-sm md:text-base">Plot plans and location maps.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">

<div className="h-[250px] md:h-auto md:col-span-2 md:row-span-2 rounded-xl overflow-hidden relative group border border-white/5 bg-neutral-900">
<img alt="Main Survey" className="absolute inset-0 w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://photos.zillowstatic.com/fp/79af4eafa5501917fa01ec523576e958-cc_ft_1536.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium">Site Plan</span>
</div>
</div>

<div className="h-[200px] md:h-auto overflow-hidden group bg-neutral-900 border-white/5 border rounded-xl relative">
<img alt="Secondary Survey" className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" src="https://photos.zillowstatic.com/fp/68a225e6153d770af85d3681199fffbe-cc_ft_576.jpg" />
<div className="text-xs text-gray-50 absolute bottom-4 left-4 font-medium">Plot Map 1</div>
</div>
<div className="h-[200px] md:h-auto rounded-xl overflow-hidden relative group bg-neutral-900 border border-white/5">
<img alt="Secondary Survey" className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" src="https://photos.zillowstatic.com/fp/d1bbacf801cc3354731cf69b93111908-cc_ft_576.jpg" />
<div className="text-xs text-neutral-50 absolute bottom-4 left-4 font-medium">Plot Map 2</div>
</div>
<div className="h-[200px] md:h-auto md:col-span-2 rounded-xl overflow-hidden relative group bg-neutral-900 border border-white/5">
<img alt="Area Map" className="w-full h-full object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity" src="https://photos.zillowstatic.com/fp/e84c737b4e8af053ffaed706c7d60b5b-cc_ft_576.jpg" />
<div className="text-xs text-zinc-50 absolute bottom-4 left-4 font-medium">Area Context</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6" id="location">
<div className="max-w-7xl mx-auto h-[300px] md:h-[400px] rounded-2xl overflow-hidden relative border border-white/10 group transition-all duration-500">

<iframe allowfullscreen="" className="map-filter w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.338573130639!2d-74.21976868460046!3d40.52166407935316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c334d855555555%3A0x1234567890abcdef!2s6401%20Amboy%20Rd%2C%20Staten%20Island%2C%20NY%2010309!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: `0`}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="glass px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 animate-float pointer-events-auto">
<iconify-icon className="text-white" icon="solar:map-point-bold"></iconify-icon>
<span className="text-xs md:text-sm font-medium">6401 Amboy Road</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 border-t border-white/5" id="inquire">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-4">Interested in this property?</h2>
<p className="text-neutral-400 text-sm md:text-base">Contact the listing professional for details on sale or lease.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">

<div className="glass p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[10px] md:text-xs font-medium text-white mb-4">Listing Agent</span>
<h3 className="text-lg md:text-xl font-semibold text-white mb-1">Josephine A. Coffey</h3>
<p className="text-sm text-neutral-400 mb-6">DiTommaso Real Estate</p>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white transition-colors" href="tel:9178428518">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                                (917) 842-8518
                            </a>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
<iconify-icon icon="solar:buildings-linear"></iconify-icon>
</div>
                                Brokerage: (718) 667-8000
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="py-8 text-center border-t border-white/5 px-4">
<p className="text-[10px] md:text-xs text-neutral-600">© 2024 DiTommaso Real Estate. Information deemed reliable but not guaranteed.</p>
</footer>


    </>
  );
}
