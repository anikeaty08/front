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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
brand: {
yellow: '#FACC15',
dark: '#0A0A0A',
surface: '#171717',
border: '#262626'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between p-4 md:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<div className="p-1.5 bg-brand-yellow rounded-full">
<i className="w-5 h-5 text-black" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="self-center whitespace-nowrap text-xl font-medium text-white tracking-tight">EV Bees</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-black bg-brand-yellow hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded text-sm px-5 py-2.5 text-center transition-all" type="button">Book Now</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
<li><a aria-current="page" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0" href="#">Home</a></li>
<li className=""><a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-yellow md:p-0 transition-colors" href="#">Models</a></li>
<li><a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-yellow md:p-0 transition-colors" href="#">Business</a></li>
<li className=""><a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-brand-yellow md:p-0 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">

<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-neutral-900 to-brand-dark opacity-50"></div>
<div className="absolute top-20 right-20 -z-10 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-brand-yellow text-xs font-medium uppercase tracking-wider">
<i className="w-3 h-3 text-brand-yellow" data-lucide="zap" strokeWidth="1.5"></i>
                        Next-Gen Mobility
                    </div>
<h1 className="text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white leading-[1.1]">
                        RENT SMARTER<br/>
<span className="text-neutral-500">DELIVER FASTER</span><br/>
                        EXPLORE FREELY
                    </h1>
<p className="text-xl text-neutral-400 max-w-lg leading-relaxed">
                        Flexible EV rentals with 60 &amp; 120km/h speed options perfect for delivery partners and city explorers. Say goodbye to fuel costs.
                    </p>
<div className="flex items-center gap-8 py-4 border-y border-white/10 w-fit pr-12">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">2k+</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Active Riders</p>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<p className="text-3xl font-semibold text-green-400 tracking-tight">₹5200</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Monthly Savings</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-brand-yellow text-black font-medium rounded hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2">
                            START RIDING
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded hover:bg-white/5 transition-colors">
                            VIEW FLEET
                        </button>
</div>
</div>

<div className="relative">
<div className="relative z-10 rounded-xl overflow-hidden shadow-2xl border border-white/10 group">

<div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur text-black px-4 py-2 rounded shadow-lg flex items-center gap-3">
<i className="w-5 h-5 text-green-600" data-lucide="battery-charging" strokeWidth="1.5"></i>
<div>
<p className="text-xs font-bold uppercase text-neutral-500 tracking-wide">Range</p>
<p className="text-sm font-semibold leading-none">Up to 120km</p>
</div>
</div>
<img alt="EV Scooter Rider" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute -bottom-6 -left-6 w-full h-full border border-brand-yellow/30 rounded-xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusted by Delivery Giants</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl font-bold font-display text-white">ubereats</span>
<span className="text-xl font-bold font-display text-white">amazon</span>
<span className="text-xl font-bold font-display text-white">zomato</span>
<span className="text-xl font-bold font-display text-white">zepto</span>
<span className="text-xl font-bold font-display text-white">swiggy</span>
<span className="text-xl font-bold font-display text-white">blinkit</span>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-brand-yellow text-sm font-medium tracking-wide">BETTER ECONOMICS</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-3 tracking-tight">STOP BURNING CASH</h2>
<p className="text-xl text-neutral-400 mt-4 max-w-2xl mx-auto">Internal combustion is obsolete. Switch to the EV Bees platform and watch your operating costs plummet.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 md:p-12 relative group hover:border-red-900/50 transition-colors">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-lg text-neutral-400 font-medium">The Old Way</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">₹4.50</span>
<span className="text-sm text-neutral-500">/km</span>
</div>
<p className="text-xs text-red-500 mt-1 uppercase tracking-wide">Fuel Cost</p>
</div>
<i className="w-12 h-12 text-neutral-700 stroke-1" data-lucide="fuel"></i>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-neutral-400">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle" strokeWidth="1.5"></i>
                            Rising petrol prices
                        </li>
<li className="flex items-center gap-3 text-neutral-400">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle" strokeWidth="1.5"></i>
                            Expensive maintenance
                        </li>
<li className="flex items-center gap-3 text-neutral-400">
<i className="w-5 h-5 text-red-500" data-lucide="x-circle" strokeWidth="1.5"></i>
                            Noise &amp; Vibration
                        </li>
</ul>
</div>

<div className="bg-neutral-900/80 border border-brand-yellow/30 rounded-xl p-8 md:p-12 relative shadow-[0_0_50px_-15px_rgba(250,204,21,0.1)]">
<div className="flex justify-between items-start mb-8">
<div>
<p className="text-lg text-brand-yellow font-medium">The EV Bees Way</p>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-semibold text-white tracking-tight">₹0.25</span>
<span className="text-sm text-neutral-500">/km</span>
</div>
<p className="text-xs text-green-500 mt-1 uppercase tracking-wide">Charging Cost</p>
</div>
<i className="w-12 h-12 text-brand-yellow stroke-1" data-lucide="zap"></i>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<i className="w-5 h-5 text-brand-yellow" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            95% Fuel Savings
                        </li>
<li className="flex items-center gap-3 text-white">
<i className="w-5 h-5 text-brand-yellow" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            Zero Maintenance Motor
                        </li>
<li className="flex items-center gap-3 text-white">
<i className="w-5 h-5 text-brand-yellow" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                            Instant Torque
                        </li>
</ul>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="px-8 py-3 bg-brand-yellow text-black font-semibold tracking-tight rounded hover:bg-yellow-300 transition-colors uppercase text-sm">
                    Switch to EV Bees
                </button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Built</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-2 tracking-tight">FOR EVERYONE</h2>
<p className="text-neutral-500 mt-2">Choose your path</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer">
<img alt="Fleet" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
<div className="mb-4 p-3 bg-white/10 backdrop-blur rounded-lg w-fit">
<i className="w-6 h-6 text-white" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">FOR BUSINESS</h3>
<p className="text-neutral-300 mb-6 text-lg line-clamp-2">Optimize your last-mile delivery fleet with telematics-enabled cargo bikes. Track assets and reduce overhead.</p>
<span className="text-brand-yellow border-b border-brand-yellow pb-0.5 text-sm uppercase tracking-wider font-medium">Partner with us</span>
</div>
</div>

<div className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer">
<img alt="Rider" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
<div className="mb-4 p-3 bg-white/10 backdrop-blur rounded-lg w-fit">
<i className="w-6 h-6 text-white" data-lucide="user" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl font-semibold text-white mb-2 tracking-tight">FOR RIDERS</h3>
<p className="text-neutral-300 mb-6 text-lg line-clamp-2">Reclaim the city. Rent high-performance electric motorcycles by the hour or day. No commitment.</p>
<span className="text-brand-yellow border-b border-brand-yellow pb-0.5 text-sm uppercase tracking-wider font-medium">Start Riding</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Models</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-2 tracking-tight">PICK YOUR PERFECT RIDE</h2>
<p className="text-neutral-500 mt-2">Each bike built tough for real work and real miles.</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="p-12 flex items-center justify-center bg-gradient-to-br from-neutral-800/30 to-transparent">

<img alt="Stratos X1" className="w-full max-w-md object-contain drop-shadow-2xl mix-blend-overlay opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-12 lg:border-l border-neutral-800 flex flex-col justify-center">
<div className="mb-8">
<span className="text-brand-yellow text-xs font-bold uppercase tracking-wider mb-2 block">Hyper-Sport</span>
<h3 className="text-4xl font-display font-semibold text-white tracking-tight mb-4">STRATOS X1</h3>
<p className="text-xl text-neutral-400">Engineered for pure adrenaline. The Stratos X1 combines track-ready performance with urban agility.</p>
</div>
<div className="grid grid-cols-3 gap-6 mb-10 border-y border-neutral-800 py-8">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">140 <span className="text-sm font-normal text-neutral-500">km</span></p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Range</p>
</div>
<div className="border-l border-neutral-800 pl-6">
<p className="text-3xl font-semibold text-white tracking-tight">120 <span className="text-sm font-normal text-neutral-500">km</span></p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Speed</p>
</div>
<div className="border-l border-neutral-800 pl-6">
<p className="text-3xl font-semibold text-white tracking-tight">30 <span className="text-sm font-normal text-neutral-500">min</span></p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Fast Charge</p>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-500 text-sm">Rent from</p>
<p className="text-2xl font-semibold text-white">₹299/hr</p>
</div>
<button className="bg-brand-yellow text-black px-6 py-3 rounded font-medium hover:bg-yellow-300 transition-colors">Book Now</button>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-8">
<button className="p-3 border border-neutral-800 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="p-3 bg-white text-black rounded hover:bg-neutral-200 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark border-t border-neutral-800 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-brand-yellow/20 blur-[80px] rounded-full"></div>
<div className="relative z-10 bg-neutral-800/50 border border-white/10 rounded-2xl p-12 flex items-center justify-center aspect-square lg:aspect-[4/3] group overflow-hidden">
<img alt="Li-ion Battery Pack" className="w-full h-full object-cover rounded-lg opacity-80 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur px-4 py-2 rounded border border-white/10">
<p className="text-brand-yellow font-display text-xl tracking-tight">72V <span className="text-white text-sm font-sans">System</span></p>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<span className="text-brand-yellow text-sm font-medium uppercase tracking-wide">Hardware</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-3 tracking-tight mb-6">OWN THE SOURCE</h2>
<p className="text-xl text-neutral-400 mb-8">High-density NMC Lithium-ion packs. Engineered for 2000+ cycles with advanced BMS protection. Now available for individual purchase.</p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-800 rounded text-brand-yellow">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Rapid Charge Ready</h3>
<p className="text-neutral-500 text-sm">0-80% in 45 minutes with our Supercharger network compatibility.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-800 rounded text-brand-yellow">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Smart BMS</h3>
<p className="text-neutral-500 text-sm">Active thermal management and cell balancing for maximum lifespan.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-neutral-800 rounded text-brand-yellow">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-semibold text-lg">Universal Fit</h3>
<p className="text-neutral-500 text-sm">Compatible with all EV Bees models and standard commercial connectors.</p>
</div>
</div>
</div>
<div className="flex items-center gap-6 border-t border-neutral-800 pt-8">
<div>
<p className="text-neutral-500 text-sm mb-1">Starting at</p>
<p className="text-3xl font-semibold text-white tracking-tight">₹45,000</p>
</div>
<button className="px-8 py-4 bg-white text-black font-medium rounded hover:bg-neutral-200 transition-colors">
                            Order Battery
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="text-black bg-neutral-100 pt-24 pb-24">
<div className="md:px-8 max-w-6xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Reality Check</span>
<div className="flex items-center justify-center gap-4 mt-2">
<h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">PETROL BIKES</h2>
<span className="text-4xl font-serif italic text-brand-yellow font-bold">VS</span>
<div className="flex items-center gap-2">
<i className="w-8 h-8 text-black fill-brand-yellow" data-lucide="zap"></i>
<h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight">EV Bees</h2>
</div>
</div>
<p className="text-neutral-600 mt-4 text-lg">See what really matters in the numbers</p>

<div className="inline-flex flex-wrap select-none bg-white border-neutral-200 border rounded-full mt-8 mr-auto ml-auto pt-1 pr-1 pb-1 pl-1 shadow-sm gap-x-1 gap-y-1 items-center justify-center">

<div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-50 cursor-pointer transition-colors group">
<svg className="lucide lucide-gauge text-neutral-400 group-hover:text-brand-yellow transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 14 4-4"></path>
<path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
</svg>
<span className="text-sm font-semibold text-neutral-700">60 km/day</span>
<svg className="lucide lucide-chevron-down w-[12px] h-[12px]" data-icon-replaced="true" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '12px', height: '12px', color: 'rgb(163, 163, 163)'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="w-px h-4 bg-neutral-200"></div>

<div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-50 cursor-pointer transition-colors group">
<svg className="lucide lucide-map-pin text-neutral-400 group-hover:text-brand-yellow transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-sm font-semibold text-neutral-700">Delhi</span>
<svg className="lucide lucide-chevron-down text-neutral-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="w-px h-4 bg-neutral-200"></div>

<div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-neutral-50 cursor-pointer transition-colors group">
<svg className="lucide lucide-fuel text-neutral-400 group-hover:text-brand-yellow transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"></path>
<path className="" d="M12 12v10"></path>
<path d="m8 7 8-5"></path>
<path d="m8 2 8 5"></path>
</svg>
<span className="text-sm font-semibold text-neutral-700">Petrol ₹100/L</span>
<svg className="lucide lucide-pencil text-neutral-400 ml-1" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>
</div>
</div>
</div>
<div className="grid gap-y-8 gap-x-8 md:grid-cols-2">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
<div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-100" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
<circle className="text-red-500" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552" stroke-dashoffset="138" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<i className="w-8 h-8 text-red-500 mb-1" data-lucide="trending-up"></i>
<span className="text-sm text-neutral-500">Increased</span>
<span className="text-3xl font-bold text-red-600">285%</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-center mb-1">Petrol Bike</h3>
<p className="text-neutral-500 text-center mb-8 text-sm">The old way costs</p>
<div className="space-y-4">
<div className="flex justify-between py-3 border-b border-neutral-100">
<span className="text-neutral-600">Cost Per 100km</span>
<span className="font-semibold text-xl">₹450</span>
</div>
<div className="flex justify-between py-3 border-b border-neutral-100">
<span className="text-neutral-600">Annual Maintenance</span>
<span className="font-semibold text-xl">₹6,000</span>
</div>
<div className="flex justify-between py-3 border-b border-neutral-100">
<span className="text-neutral-600">CO2 Emissions</span>
<span className="font-semibold text-xl">8.5kg</span>
</div>
<div className="mt-6 pt-4 bg-neutral-100 rounded-lg p-4 flex justify-between items-center font-bold">
<span>Total Daily Cost</span>
<span 50="" bg-green-50="" border="" border-green-100"="" className="text-neutral-80&lt;div class=" p-8="" rounded-2xl="" shadow-sm="">
<div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-neutral-200" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
<circle className="text-green-500" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" stroke-dasharray="552" stroke-dashoffset="440" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<i className="w-8 h-8 text-green-500 mb-1" data-lucide="trending-down"></i>
<span className="text-sm text-neutral-500">Decreased</span>
<span className="text-3xl font-bold text-green-600">95%</span>
</div>
</div>
<h3 className="text-2xl font-semibold text-center mb-1">EV Bike</h3>
<p className="text-neutral-500 text-center mb-8 text-sm">The smart choice wins</p>
<div className="space-y-4">
<div className="flex justify-between py-3 border-b border-green-200/50">
<span className="text-neutral-600">Cost Per 100km</span>
<span className="font-semibold text-xl">₹25</span>
</div>
<div className="flex justify-between py-3 border-b border-green-200/50">
<span className="text-neutral-600">Annual Maintenance</span>
<span className="font-semibold text-xl">₹600</span>
</div>
<div className="flex justify-between py-3 border-b border-green-200/50">
<span className="text-neutral-600">CO2 Emissions</span>
<span className="font-semibold text-xl">0kg</span>
</div>
<div className="mt-6 pt-4 bg-green-100 rounded-lg p-4 flex justify-between items-center font-bold text-green-900">
<span>Total Daily Cost</span>
<span>₹50</span>
</div>
</div>
</span></div>
</div>
</div></div></div>
</section>

<section className="py-24 bg-brand-dark">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Plans</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white mt-2 tracking-tight">SIMPLE PRICING</h2>
<p className="text-neutral-400 mt-2 text-lg">Rent by the day, week, or month. No hidden fees. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6 items-end">

<div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800">
<p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Flex</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹299</span>
<span className="text-neutral-500">/hr</span>
</div>
<ul className="space-y-4 mb-8 text-neutral-400 text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Pay as you go
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Basic Insurance
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Standard Helmet
                        </li>
</ul>
<button className="w-full py-3 border border-neutral-700 rounded text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">Select</button>
</div>

<div className="p-8 rounded-xl bg-neutral-900 border border-brand-yellow/50 relative transform lg:-translate-y-4 shadow-2xl shadow-yellow-900/10">
<div className="absolute -top-3 right-8 bg-brand-yellow text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">Best Value</div>
<p className="text-xs font-bold text-brand-yellow uppercase tracking-widest mb-4">Daily Pro</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-semibold text-white tracking-tight">₹1,499</span>
<span className="text-neutral-500">/day</span>
</div>
<ul className="space-y-4 mb-8 text-white text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-yellow" data-lucide="check"></i>
                            Unlimited KMs
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-yellow" data-lucide="check"></i>
                            Zero Liability Insurance
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-brand-yellow" data-lucide="check"></i>
                            2x Battery Swaps
                        </li>
</ul>
<button className="w-full py-3 bg-brand-yellow rounded text-black text-xs font-bold uppercase tracking-wider hover:bg-yellow-300 transition-colors">Select</button>
</div>

<div className="p-8 rounded-xl bg-neutral-900 border border-neutral-800">
<p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Subscription</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹12k</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-neutral-400 text-sm">
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Your Personal Bike
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            Home Charging Kit
                        </li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-neutral-600" data-lucide="check"></i>
                            24/7 Roadside Assist
                        </li>
</ul>
<button className="w-full py-3 border border-neutral-700 rounded text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">Select</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 text-black">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="text-center mb-16">
<span className="text-neutral-500 text-sm font-medium uppercase tracking-wide">Simple</span>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-black mt-2 tracking-tight">THREE STEPS TO GET RIDING</h2>
<p className="text-neutral-600 mt-2">Book online in seconds. Pick up your bike. Ride free and easy.</p>
</div>
<div className="relative grid md:grid-cols-3 gap-12 text-center">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-200 -z-10"></div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-brand-yellow flex items-center justify-center mb-6 shadow-sm z-10">
<i className="w-8 h-8 text-black" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
<p className="text-neutral-600 text-sm max-w-xs mx-auto">Download the EV Bees app and verify your ID and payment method instantly.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-neutral-100 flex items-center justify-center mb-6 shadow-sm z-10">
<i className="w-8 h-8 text-black" data-lucide="key" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-2">2. Pick Up</h3>
<p className="text-neutral-600 text-sm max-w-xs mx-auto">Locate the nearest hub on the map and unlock your reserved bike.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-neutral-100 flex items-center justify-center mb-6 shadow-sm z-10">
<i className="w-8 h-8 text-black" data-lucide="bike" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold mb-2">3. Start Earning</h3>
<p className="text-neutral-600 text-sm max-w-xs mx-auto">Ride with unlimited battery swaps. Return or swap whenever you need.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark">
<div className="max-w-7xl mx-auto px-4 md:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight mb-4">REAL RIDERS</h2>
<p className="text-neutral-400 text-xl">Hear what people who ride say</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl relative">
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-brand-yellow fill-brand-yellow" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-yellow fill-brand-yellow" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-yellow fill-brand-yellow" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-yellow fill-brand-yellow" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-yellow fill-brand-yellow" data-lucide="star"></i>
</div>
<p className="text-xl text-neutral-300 mb-8 leading-relaxed">"These bikes cut my delivery costs in half and I'm done fighting traffic. The instant torque makes city riding actually fun again."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-neutral-700 overflow-hidden">
<img alt="User" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<p className="text-white font-semibold">Marcus Chen</p>
<p className="text-sm text-neutral-500">Courier, Urban Logistics</p>
</div>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-8">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="flex gap-2">
<button className="p-2 border border-neutral-800 rounded text-neutral-400 hover:text-white"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<button className="p-2 bg-white text-black rounded"><i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-8">
<div className="max-w-7xl mx-auto rounded-2xl overflow-hidden relative">
<div className="absolute inset-0 bg-neutral-900"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-yellow/10 blur-[100px]"></div>
<div className="relative z-10 px-8 py-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-4xl md:text-5xl font-display font-semibold text-white tracking-tight mb-2">START RIDING TODAY</h2>
<p className="text-neutral-400">Join the electric revolution today. First ride is 50% off for new members.</p>
</div>
<button className="px-8 py-4 bg-brand-yellow text-black font-bold uppercase tracking-wider rounded hover:bg-yellow-300 transition-colors whitespace-nowrap">
                    Start Riding
                </button>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark">
<div className="max-w-3xl mx-auto px-4 md:px-8">
<h2 className="text-4xl font-display font-semibold text-white text-center mb-4 tracking-tight">FAQ</h2>
<p className="text-neutral-500 text-center mb-12">Everything you need to know about renting and riding with us.</p>
<div className="space-y-4">
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>How long does charging take?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Most of our bikes charge fully in under two hours at any standard outlet. Fast charging stations get you back on the road in thirty minutes or less. You can charge at home, at work, or at any of our stations across the city.
                    </div>
</details>
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>What's the real range per charge?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Our Stratos X1 model delivers a verified 140km range in Eco mode and 100km in Sport mode. Ranges vary slightly based on rider weight and terrain.
                    </div>
</details>
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Do I need a special license?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Yes, a standard two-wheeler license is required for all models that exceed 25km/h. We verify this during the signup process.
                    </div>
</details>
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>What if the bike breaks down?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        We offer 24/7 roadside assistance included in all plans. Just hit the "Help" button in the app and we'll dispatch a team immediately.
                    </div>
</details>
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Can I rent for my business?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                        Absolutely. We have specific B2B fleet plans designed for delivery services, logistics companies, and corporate campuses. Contact our sales team.
                    </div>
</details>
<details className="group bg-neutral-900 border border-neutral-800 rounded-lg open:border-neutral-700 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white">
<span>Can I rent for my delivery?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-500" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-400 mt-0 px-6 pb-6 text-sm leading-relaxed">
                       Yes, many of our riders use EV Bees for food and package delivery. Our 'Daily Pro' plan is specifically optimized for high-mileage commercial use.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white text-black pt-24 pb-8 overflow-hidden relative">
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
<div className="mb-12 flex flex-col items-center">
<div className="flex items-center space-x-2 mb-4">
<div className="p-1.5 bg-brand-yellow rounded-full">
<i className="w-5 h-5 text-black" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="text-2xl font-semibold tracking-tight">EV Bees</span>
</div>
<p className="text-neutral-500 text-lg">Mobility</p>
</div>

<div className="text-[12vw] leading-none font-bold text-neutral-100 select-none pointer-events-none font-display tracking-tighter">
                Thank You!
            </div>
<div className="mt-12 flex justify-center space-x-6">
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
<div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
<p>© 2025 EV Bike Rental. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-black" href="#">Privacy policy</a>
<a className="hover:text-black" href="#">Terms of service</a>
<a className="hover:text-black" href="#">Cookie settings</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
