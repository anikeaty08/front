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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="text-xl tracking-tighter font-semibold text-neutral-900">WASHINGTON VILLAS</div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-orange-600 transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Washington Villas Buildings" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 text-white space-y-8">
<div>
<span className="block text-sm font-medium tracking-[0.2em] text-orange-400 uppercase mb-4">Your Island, Your Lifestyle</span>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">A PRIVATE OASIS</h1>
</div>
<div className="pl-6 border-l-2 border-orange-500">
<p className="text-lg lg:text-xl font-light text-white/90 leading-relaxed italic">
                            “Living at Washington Gardens means enjoying the perfect blend of tranquility and proximity to Aruba’s most vibrant areas — Palm Beach.”
                        </p>
</div>
</div>

<div className="lg:col-span-5">
<div className="bg-orange-600 rounded-3xl p-8 lg:p-10 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
<p className="text-white font-medium text-lg mb-6 tracking-tight">If you would like more information…</p>
<form className="space-y-4">
<div>
<input className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Name" type="text"/>
</div>
<div className="grid grid-cols-3 gap-3">
<input className="col-span-1 w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Code" type="text"/>
<input className="col-span-2 w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Phone Number" type="tel"/>
</div>
<div>
<input className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Email" type="email"/>
</div>
<div>
<select className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm appearance-none cursor-pointer">
<option className="text-neutral-900">Country</option>
<option className="text-neutral-900">USA</option>
<option className="text-neutral-900">Canada</option>
<option className="text-neutral-900">Netherlands</option>
</select>
</div>
<button className="w-full bg-white text-orange-600 font-semibold py-4 rounded-lg mt-4 hover:bg-neutral-100 transition-colors shadow-lg text-sm tracking-wide" type="button">
                                SEND ME
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 order-2 lg:order-1">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">The Perfect Balance</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</span>
<span className="text-lg text-neutral-600 font-light">Boutique 26 Residences</span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</span>
<span className="text-lg text-neutral-600 font-light">Prime Washington Inland Location</span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</span>
<span className="text-lg text-neutral-600 font-light">4–6 Minutes to Eagle &amp; Palm Beach</span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</span>
<span className="text-lg text-neutral-600 font-light">Gated &amp; Secure Homes</span>
</li>
<li className="flex items-start gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 mt-1">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</span>
<span className="text-lg text-neutral-600 font-light">Fully Furnished Turn-Key Living</span>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
<img alt="Interior" className="rounded-2xl object-cover h-64 w-full shadow-lg transform translate-y-4" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<img alt="Exterior" className="rounded-2xl object-cover h-64 w-full shadow-lg transform -translate-y-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900">MODELS</h2>
<div className="w-20 h-1 bg-orange-500 mx-auto mt-6 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-8 lg:p-10 space-y-6">
<div className="flex justify-between items-start">
<h3 className="text-xl font-semibold text-neutral-900">TYPE A APARTMENTS (GROUND FLOOR)</h3>
<span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded font-medium">Type A</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-600 border-y border-neutral-100 py-4">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bed-double"></span> 2
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bath"></span> 2.5
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:maximize"></span> 103.7 m²
                            </div>
</div>
<p className="text-neutral-500 leading-relaxed font-light">
                            Experience spacious luxury with direct garden access, featuring an open-concept living area and premium finishes throughout the residence.
                        </p>
<button className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                            More details <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-8 lg:p-10 space-y-6">
<div className="flex justify-between items-start">
<h3 className="text-xl font-semibold text-neutral-900">TYPE B APARTMENTS (1st &amp; 2nd FLOOR)</h3>
<span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded font-medium">Type B</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-600 border-y border-neutral-100 py-4">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bed-double"></span> 2
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bath"></span> 2
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:maximize"></span> 116 m²
                            </div>
</div>
<p className="text-neutral-500 leading-relaxed font-light">
                            Elevated living spaces providing exceptional views, modern amenities, and a layout designed for both privacy and entertainment.
                        </p>
<button className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                            More details <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-8 lg:p-10 space-y-6">
<div className="flex justify-between items-start">
<h3 className="text-xl font-semibold text-neutral-900">TYPE C APARTMENTS (THIRD FLOOR)</h3>
<span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded font-medium">Type C</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-600 border-y border-neutral-100 py-4">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bed-double"></span> 1
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bath"></span> 1
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:maximize"></span> 61.83 m²
                            </div>
</div>
<p className="text-neutral-500 leading-relaxed font-light">
                            A cozy, sophisticated penthouse suite perfect for singles or couples, offering breathtaking panoramic views of the island.
                        </p>
<button className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                            More details <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-xl transition-shadow duration-300 group">
<div className="p-8 lg:p-10 space-y-6">
<div className="flex justify-between items-start">
<h3 className="text-xl font-semibold text-neutral-900">TYPE D APARTMENTS (2nd &amp; 3rd FLOOR)</h3>
<span className="bg-neutral-100 text-neutral-600 text-xs px-2 py-1 rounded font-medium">Type D</span>
</div>
<div className="flex items-center gap-6 text-sm text-neutral-600 border-y border-neutral-100 py-4">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bed-double"></span> 3
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:bath"></span> 3
                            </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:maximize"></span> 189.89 m²
                            </div>
</div>
<p className="text-neutral-500 leading-relaxed font-light">
                            The ultimate in luxury family living, featuring expansive rooms, high-end fixtures, and generous outdoor terrace spaces.
                        </p>
<button className="flex items-center gap-2 text-orange-600 font-medium text-sm group-hover:gap-3 transition-all">
                            More details <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="h-[500px] w-full bg-neutral-200 relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">

<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-70.0400,12.5600,13,0/1200x500')] bg-cover bg-center"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="w-16 h-16 bg-orange-500 rounded-full opacity-30 animate-ping absolute"></div>
<div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl relative z-10 border-4 border-orange-500 text-orange-600">
<span className="iconify" data-icon="lucide:map-pin" data-width="32"></span>
</div>
</div>
</div>
</section>

<section className="relative py-24 lg:py-32">
<div className="absolute inset-0 z-0">
<img alt="Aruba Aerial" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-[2px]"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="text-white">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-10">WHY INVEST IN ARUBA</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="mt-1 text-orange-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</span>
<span className="text-lg font-light text-neutral-200">Aruba is located outside of the hurricane belt</span>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-orange-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</span>
<span className="text-lg font-light text-neutral-200">Aruba is ranked as one of the safest destination in the world</span>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-orange-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</span>
<span className="text-lg font-light text-neutral-200">Aruba’s residents are really welcoming… Happiness level at 78%</span>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-orange-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</span>
<span className="text-lg font-light text-neutral-200">Barrier less immigration with the US</span>
</li>
<li className="flex items-start gap-4">
<span className="mt-1 text-orange-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="24"></span>
</span>
<span className="text-lg font-light text-neutral-200">No legal restrictions on property ownership</span>
</li>
</ul>
</div>

<div>
<div className="bg-orange-600 rounded-3xl p-8 lg:p-10 shadow-2xl ring-1 ring-white/10">
<p className="text-white font-medium text-lg mb-6 tracking-tight">If you would like more information…</p>
<form className="space-y-4">
<div>
<input className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Name" type="text"/>
</div>
<div className="grid grid-cols-3 gap-3">
<input className="col-span-1 w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Code" type="text"/>
<input className="col-span-2 w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Phone Number" type="tel"/>
</div>
<div>
<input className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white placeholder-orange-200 focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm" placeholder="Email" type="email"/>
</div>
<div>
<select className="w-full bg-orange-700/50 border border-orange-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:bg-orange-700 focus:border-white transition-all text-sm appearance-none cursor-pointer">
<option className="text-neutral-900">Country</option>
<option className="text-neutral-900">USA</option>
<option className="text-neutral-900">Canada</option>
<option className="text-neutral-900">Netherlands</option>
</select>
</div>
<button className="w-full bg-white text-orange-600 font-semibold py-4 rounded-lg mt-4 hover:bg-neutral-100 transition-colors shadow-lg text-sm tracking-wide" type="button">
                                SEND ME
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-center mb-16">TESTIMONIALS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 gap-1 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="iconify text-neutral-300" data-icon="logos:google-icon" data-width="18"></span>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">"A truly exceptional place to live. The attention to detail is remarkable."</p>
<p className="font-semibold text-neutral-900 text-sm">Sarah Johnson</p>
</div>

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 gap-1 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="iconify text-neutral-300" data-icon="logos:google-icon" data-width="18"></span>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">"The location is unbeatable, close to everything yet so private."</p>
<p className="font-semibold text-neutral-900 text-sm">Michael Chang</p>
</div>

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 gap-1 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="iconify text-neutral-300" data-icon="logos:google-icon" data-width="18"></span>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">"Investing here was the best decision. The team is incredibly professional."</p>
<p className="font-semibold text-neutral-900 text-sm">Emma Davis</p>
</div>

<div className="bg-neutral-50 p-6 rounded-xl border border-neutral-100">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 gap-1 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="iconify text-neutral-300" data-icon="logos:google-icon" data-width="18"></span>
</div>
<p className="text-neutral-600 text-sm leading-relaxed mb-4">"High quality construction and beautiful design. Highly recommended."</p>
<p className="font-semibold text-neutral-900 text-sm">Robert Wilson</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-100 border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Contact Us</h2>
<p className="text-neutral-600 text-lg font-light mb-10">Have questions? Send us a message and we’ll get back to you soon.</p>
<form className="text-left bg-white p-8 lg:p-12 rounded-2xl shadow-sm border border-neutral-200/60">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Full Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-700">Email</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" type="email"/>
</div>
</div>
<div className="mb-6 space-y-2">
<label className="text-sm font-medium text-neutral-700">Phone</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" type="tel"/>
</div>
<div className="mb-8 space-y-2">
<label className="text-sm font-medium text-neutral-700">Message</label>
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm" rows="4"></textarea>
</div>
<button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-4 rounded-lg transition-all shadow-md text-sm tracking-wide" type="button">
                    SEND MESSAGE
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-900 text-neutral-400 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h4 className="text-white font-semibold mb-6">About</h4>
<p className="text-sm leading-relaxed font-light">
                        Washington Villas offers premium real estate solutions in Aruba's most desirable locations. Quality, integrity, and excellence.
                    </p>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Models</a></li>
<li><a className="hover:text-white transition-colors" href="#">Location</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Get more information</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Brochure</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Investment Guide</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact details</h4>
<ul className="space-y-3 text-sm font-light">
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
                            Washington, Aruba
                        </li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            +297 555 1234
                        </li>
<li className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
                            info@washingtonvillas.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<p>© 2025 Casa Bon Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
