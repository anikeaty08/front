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



        function toggleChat() {
            const chat = document.getElementById('ai-chat');
            if (chat.classList.contains('hidden')) {
                chat.classList.remove('hidden');
                chat.classList.add('chat-enter');
            } else {
                chat.classList.add('hidden');
                chat.classList.remove('chat-enter');
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
      

<nav className="fixed w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:sparkle-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">Home Fresh</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900" href="#book">Log in</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 transition-all shadow-sm" href="#book">
                    Book Now
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-40 right-20 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
                        Trusted by 500+ local families
                    </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Home cleaning that <span className="text-slate-400">feels effortless.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Book in minutes. Flexible scheduling. Consistent results. We give you back your weekends with a clean you can trust.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm shadow-blue-200 transition-all" href="#book">
                            Get a Quote
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 shadow-sm transition-all" href="#services">
                            View Services
                        </a>
</div>

<div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:shield-check-linear"></iconify-icon> Fully Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon> Vetted Team
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600 text-lg" icon="solar:bottle-linear"></iconify-icon> Supplies Included
                        </div>
</div>
</div>

<div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 lg:p-8" id="book">
<h3 className="text-xl font-semibold tracking-tight mb-1">Get an instant estimate</h3>
<p className="text-sm text-slate-500 mb-6">No credit card required for quote.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Bedrooms</label>
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
<option>Studio</option>
<option selected="">1 Bedroom</option>
<option>2 Bedrooms</option>
<option>3 Bedrooms</option>
<option>4+ Bedrooms</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Bathrooms</label>
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
<option selected="">1 Bathroom</option>
<option>1.5 Bathrooms</option>
<option>2 Bathrooms</option>
<option>2.5 Bathrooms</option>
<option>3+ Bathrooms</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Service Type</label>
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
<option selected="">Standard Cleaning</option>
<option>Deep Cleaning</option>
<option>Move-In / Move-Out</option>
<option>Airbnb / Turnover</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Zip Code</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-400" placeholder="e.g. 90210" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Email Address</label>
<input className="bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder:text-slate-400" placeholder="you@example.com" type="email"/>
</div>
<button className="w-full text-white bg-slate-900 hover:bg-slate-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-colors mt-2" type="button">
                            See Pricing &amp; Book
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Cleaning for every need</h2>
<p className="text-slate-500">Whether you need a one-time refresh or recurring maintenance, we have a plan that fits your home.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-white relative overflow-hidden">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:broom-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Standard Cleaning</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Perfect for maintaining a tidy home. Best for recurring weekly or bi-weekly visits.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Dusting all surfaces
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Vacuuming &amp; mopping floors
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Bathroom sanitation
                        </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#book">
                        Book Standard <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-white">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Deep Cleaning</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">A thorough top-to-bottom clean. Recommended for first-time customers.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Baseboards &amp; doors detailed
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Light switches &amp; handles
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Heavy scrubbing in baths/kitchen
                        </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#book">
                        Book Deep Clean <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition-all bg-white">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Move-In / Out</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Ensure you get your deposit back or walk into a fresh new home.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Inside cabinets &amp; drawers
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Inside appliances (Fridge/Oven)
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-teal-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon> Spot cleaning walls
                        </li>
</ul>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#book">
                        Book Move Clean <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>


<section className="py-20 bg-slate-50" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">A cleaner home in three simple steps</h2>
<p className="text-slate-500 mb-10 text-lg">We’ve streamlined the process so you can spend less time managing cleaners and more time enjoying your home.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">1</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Book online in 60 seconds</h3>
<p className="text-sm text-slate-500 leading-relaxed">Select your service, choose a date and time that works for you, and get pricing instantly.</p>
</div>
</div>
<div className="relative flex gap-4">

<div className="absolute left-5 top-[-32px] bottom-[40px] w-px bg-slate-200 -z-10"></div>
<div className="w-10 h-10 shrink-0 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-semibold">2</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">We clean thoroughly</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our vetted, background-checked pros arrive on time with all supplies needed to make your home shine.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center font-semibold">3</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Enjoy your fresh home</h3>
<p className="text-sm text-slate-500 leading-relaxed">Relax in a spotless space. If you're not 100% happy, let us know and we'll re-clean for free.</p>
</div>
</div>
</div>
</div>
<div className="space-y-4">

<div className="aspect-square rounded-3xl overflow-hidden bg-slate-200 relative shadow-2xl border border-slate-200 group">
<img alt="Clean Living Room" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-4 rounded-xl border border-white/50 shadow-lg flex items-center gap-3 animate-[slideIn_1s_ease-out]">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Cleaning Completed</p>
<p className="text-xs text-slate-500">Your home is ready!</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="h-32 rounded-2xl overflow-hidden relative">
</div>
<div className="h-32 rounded-2xl overflow-hidden relative">
<img alt="Clean Kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Real homes, real clean</h2>
<p className="text-slate-500">Take a look at the results we deliver every day. From modern apartments to family homes.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[1200px] md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden relative group image-card bg-slate-100">
<img alt="Sparkling Kitchen" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg text-sm font-medium text-white border border-white/10">
                        Kitchen Deep Clean
                    </div>
</div>

<div className="md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden relative group image-card bg-slate-100">
<img alt="Bright Bedroom" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-slate-900 shadow-sm">
                        Bedroom
                    </div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group image-card bg-slate-100">
</div>

<div className="md:col-span-1 md:row-span-1 rounded-2xl overflow-hidden relative group image-card bg-slate-100">
<img alt="Living Area" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
<div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative group image-card">
</div>
<div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden relative group image-card">
<img alt="Bedroom 2" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="col-span-2 md:col-span-2 aspect-video md:aspect-[8/3] rounded-2xl overflow-hidden relative group image-card">
<img alt="Open Plan Living" className="w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 right-4 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full text-xs font-medium">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Move-In Ready
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Don't just take our word for it</h2>
<div className="flex items-center gap-2">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600">4.9/5 Average Rating</span>
</div>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                    See all reviews <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Absolutely the best cleaning service I've used. They arrived right at the start of the window and left my apartment sparkling. The eco-friendly products were a huge plus."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold">SJ</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Deep Clean • 2 Bed</p>
</div>
</div>
</div>

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Home Fresh has been a lifesaver for our Airbnb turnover. Reliable, thorough, and the photo updates give me peace of mind when I'm out of town."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-xs font-bold">MR</div>
<div>
<p className="text-sm font-medium text-slate-900">Mark Roberts</p>
<p className="text-xs text-slate-500">Airbnb Host</p>
</div>
</div>
</div>

<div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 text-sm mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed mb-6">"Professional from start to finish. Booking was super easy and the team was respectful of my home office while I was working. Highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-xs font-bold">EL</div>
<div>
<p className="text-sm font-medium text-slate-900">Emily Liu</p>
<p className="text-xs text-slate-500">Recurring Standard</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Transparent pricing, <br/>no surprises.</h2>
<p className="text-slate-400 mb-8 text-lg font-light">We price based on home size and condition, not by the hour. You'll always know what you're paying before we start.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium">Flat-rate pricing</p>
<p className="text-xs text-slate-400">Based on bedrooms, bathrooms, and sqft.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-medium">Recurring discounts</p>
<p className="text-xs text-slate-400">Save 15% on weekly, 10% on bi-weekly cleans.</p>
</div>
</div>
</div>
</div>
<div className="bg-white text-slate-900 rounded-2xl p-8 lg:p-10">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Our Mission</span>
</div>
<h3 className="text-2xl font-semibold mb-4 tracking-tight">Make homes healthier and lives easier.</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Home Fresh isn't just a cleaning company; we're a local team dedicated to giving you back your time. Our cleaners undergo rigorous training and background checks to ensure your home is in safe hands.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">Reliability</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">Respect</span>
<span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-slate-600">Consistency</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-10 text-center">Frequently asked questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
<span>What is included in a standard clean?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        A standard clean covers all the basics: dusting surfaces, vacuuming and mopping floors, cleaning bathrooms (toilets, showers, mirrors), and cleaning the kitchen (counters, sink, stove top, microwave exterior). It's perfect for maintaining a tidy home.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
<span>Do I need to be home during the cleaning?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        No, you do not need to be home. Many clients provide a key or door code. If you choose to be home, we just ask for a comfortable amount of space to work efficiently.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
<span>Do you bring your own supplies?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Yes! We bring all necessary cleaning supplies and equipment (vacuums, mops, cloths). If you have specific products you'd prefer us to use, just let us know.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
<span>What if I'm not satisfied with the cleaning?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        We offer a Satisfaction Guarantee. If you're not happy with any area we cleaned, let us know within 24 hours and we will return to re-clean that area at no extra cost.
                    </div>
</details>
<details className="group bg-slate-50 rounded-xl">
<summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900">
<span>Are you insured?</span>
<iconify-icon className="text-slate-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Absolutely. Home Fresh is fully insured and bonded. Every cleaner undergoes a strict background check before joining our team.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6">Ready for a Home Fresh clean?</h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto">Join hundreds of happy neighbors and book your first cleaning today. It only takes a minute.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all" href="#book">
                    Book Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all" href="tel:+15551234567">
                    Call (555) 123-4567
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:sparkle-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Home Fresh</span>
</a>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Reliable, thorough, and trustworthy home cleaning services for busy families and professionals.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Standard Cleaning</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Deep Cleaning</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Move In/Out</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Service Area</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>Downtown Metro</li>
<li>North Suburbs</li>
<li>West Side</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Home Fresh Cleaning. All rights reserved.</p>
<div className="flex items-center gap-1">
<span>Designed with</span>
<iconify-icon className="text-red-400" icon="solar:heart-bold"></iconify-icon>
<span>for clean homes.</span>
</div>
</div>
</div>
</footer>


<button aria-label="Open AI Assistant" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-slate-900 text-white rounded-full shadow-xl shadow-slate-900/20 hover:scale-105 transition-all flex items-center justify-center group hover:bg-slate-800" onclick="toggleChat()">
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>

<span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center">
<span className="w-full h-full rounded-full bg-blue-500 animate-ping opacity-75 absolute inline-flex"></span>
</span>
</button>

<div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden hidden origin-bottom-right" id="ai-chat">

<div className="bg-white/80 backdrop-blur-md p-4 border-b border-slate-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
<iconify-icon icon="solar:stars-minimalistic-bold" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight">Cleaning AI</h4>
<p className="text-[10px] text-blue-600 font-medium uppercase tracking-wider flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span> Online Now
                    </p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1 rounded-full hover:bg-slate-50" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="p-4 h-80 overflow-y-auto space-y-4 bg-slate-50/50 scroll-smooth">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shrink-0 shadow-sm">
<iconify-icon icon="solar:robot-linear" width="16"></iconify-icon>
</div>
<div className="space-y-1 max-w-[80%]">
<div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 shadow-sm">
                        Hi there! 👋 I'm your scheduling assistant.
                    </div>
<div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none text-sm text-slate-600 shadow-sm">
                        I can check availability and help you book your cleaning instantly. What type of home do you have?
                    </div>
</div>
</div>

<div className="pl-11 flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors">1 Bedroom</button>
<button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors">2 Bedrooms</button>
<button className="px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-100 rounded-lg text-xs font-medium hover:bg-blue-100 transition-colors">Studio</button>
</div>
</div>

<div className="p-4 border-t border-slate-100 bg-white">
<form className="relative" onsubmit="event.preventDefault();">
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 block p-3 pr-12 transition-all outline-none" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-700 w-8 h-8 rounded-lg flex items-center justify-center transition-colors shadow-sm" type="button">
<iconify-icon className="ml-0.5" icon="solar:plain-linear" width="16"></iconify-icon>
</button>
</form>
<p className="text-[10px] text-center text-slate-400 mt-2">Powered by Home Fresh AI</p>
</div>
</div>


    </>
  );
}
