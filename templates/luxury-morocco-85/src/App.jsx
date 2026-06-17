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
      

<nav className="absolute top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">
<div className="flex-shrink-0">
<a className="text-2xl font-semibold tracking-tighter text-white" href="#">
                        MRCO
                    </a>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-sm font-medium text-white hover:text-[#C19B4C] transition-colors" href="#">Transfers</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Fleet</a>
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">Excursions</a>
</div>
</div>
<div>
<button className="inline-flex items-center justify-center px-5 py-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white rounded-md text-sm font-medium transition-colors">
                        Contact Us
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<img alt="Morocco Desert" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-tight">
                Experience Morocco in <br className="hidden md:block"/>
<span className="text-[#C19B4C]">Unparalleled Luxury</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
                Elevate your journey with our exclusive chauffeur services, premium fleet, and curated excursions across the country.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#C19B4C] hover:bg-[#b08c43] text-white rounded-md text-base font-medium transition-colors">
                    Book Your Journey
                    <iconify-icon className="ml-2 text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-md text-base font-medium transition-colors">
                    Explore Services
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-neutral-500">
<span className="text-xs font-medium uppercase tracking-widest mb-2">Scroll</span>
<iconify-icon className="text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Choose Your Journey
            </h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                Select the service that fits your travel needs across Morocco.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 min-h-[500px] hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
<img alt="Professional Chauffeur Transfer" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
<div className="relative p-8 flex flex-col items-start">
<h3 className="text-2xl font-medium tracking-tight text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-[#C19B4C]" icon="solar:routing-linear"></iconify-icon>
                        Transfers
                    </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                        Airport pickups, city transfers, and custom routes across Morocco with professional chauffeurs.
                    </p>
<button className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C19B4C] hover:bg-[#b08c43] text-white rounded-md text-base font-medium transition-colors">
                        Explore Transfers
                    </button>
</div>
</div>

<div className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 min-h-[500px] hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
<img alt="Premium Luxury Fleet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
<div className="relative p-8 flex flex-col items-start">
<h3 className="text-2xl font-medium tracking-tight text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-[#C19B4C]" icon="solar:steering-wheel-linear"></iconify-icon>
                        Fleet
                    </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                        Discover our premium fleet including luxury sedans, SUVs, vans, and executive vehicles.
                    </p>
<button className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C19B4C] hover:bg-[#b08c43] text-white rounded-md text-base font-medium transition-colors">
                        View Fleet
                    </button>
</div>
</div>

<div className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-white/10 min-h-[500px] hover:-translate-y-1 hover:border-white/20 transition-all duration-300">
<img alt="Moroccan Landscape Excursions" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent"></div>
<div className="relative p-8 flex flex-col items-start">
<h3 className="text-2xl font-medium tracking-tight text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-[#C19B4C]" icon="solar:map-point-linear"></iconify-icon>
                        Excursions
                    </h3>
<p className="text-base text-neutral-300 mb-8 leading-relaxed">
                        Curated day trips and private tours to Morocco's most beautiful destinations.
                    </p>
<button className="inline-flex items-center justify-center px-6 py-2.5 bg-[#C19B4C] hover:bg-[#b08c43] text-white rounded-md text-base font-medium transition-colors">
                        Discover Excursions
                    </button>
</div>
</div>
</div>
</section>

    </>
  );
}
