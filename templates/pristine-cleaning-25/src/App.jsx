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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="16" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase">Pristine.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium" href="tel:+1234567890">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span>(555) 123-4567</span>
</a>
<button className="bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-900/10 active:scale-95">
                    Book Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative z-10 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6 w-fit">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
<span className="text-xs font-medium text-stone-600 uppercase tracking-wide">Available for booking today</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Perfect Cleanliness <br/> <span className="text-stone-500">Without the Hassle.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-md leading-relaxed">
                    Experience a spotless home with our premium, eco-friendly cleaning service. Trusted professionals, impeccable results, and zero stress.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-stone-800 transition-all hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-0.5">
<span>Book Cleaning</span>
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-700 px-8 py-3.5 rounded-full font-medium hover:bg-stone-50 hover:border-stone-300 transition-all">
<iconify-icon icon="lucide:calculator" width="18"></iconify-icon>
<span>Calculate Price</span>
</button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-stone-500">
<div className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-stone-50 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span>Trusted by 500+ local homeowners</span>
</div>
</div>

<div className="relative lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-stone-200 animate-fade-in delay-200 group">
<div className="absolute inset-0 bg-stone-900/10 z-10 transition-colors group-hover:bg-stone-900/0"></div>
<img alt="Professional Cleaner" className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-500 uppercase font-medium">Satisfaction Guarantee</p>
<p className="text-sm font-semibold text-stone-900">100% Quality Assured</p>
</div>
</div>
<div className="text-emerald-600">
<iconify-icon className="fill-current" icon="lucide:star" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Why choose Pristine?</h2>
<p className="text-stone-600 text-lg">We bring hotel-standard cleanliness to your private space with a focus on reliability and eco-conscious practices.</p>
</div>
<a className="group flex items-center gap-2 text-stone-900 font-medium hover:text-emerald-700 transition-colors" href="#">
<span>Learn more about us</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-all hover:shadow-lg hover:shadow-stone-200/50 group">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Impeccable Quality</h3>
<p className="text-sm text-stone-600 leading-relaxed">Rigorous checklists and trained professionals ensure every corner meets our high standards.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-all hover:shadow-lg hover:shadow-stone-200/50 group">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Reliable Team</h3>
<p className="text-sm text-stone-600 leading-relaxed">Background-checked, insured, and friendly staff you can trust in your home.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-all hover:shadow-lg hover:shadow-stone-200/50 group">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Eco-Friendly</h3>
<p className="text-sm text-stone-600 leading-relaxed">We use safe, non-toxic products and professional HEPA-filter equipment.</p>
</div>

<div className="p-8 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 transition-all hover:shadow-lg hover:shadow-stone-200/50 group">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-700 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-stone-900 mb-3">Convenient Service</h3>
<p className="text-sm text-stone-600 leading-relaxed">Easy online booking, flexible scheduling, and automated reminders.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-12 text-center">What We Clean</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Apartments" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Apartments</h3>
<p className="text-stone-300 text-sm mb-6 line-clamp-2">Regular maintenance cleaning for studios, lofts, and multi-bedroom units tailored to your lifestyle.</p>
<button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white hover:text-stone-900 transition-all">
                            Book Apartment Cleaning
                        </button>
</div>
</div>

<div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Houses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Private Houses</h3>
<p className="text-stone-300 text-sm mb-6 line-clamp-2">Deep cleaning solutions for family homes, including kitchens, bathrooms, and living areas.</p>
<button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white hover:text-stone-900 transition-all">
                            Book House Cleaning
                        </button>
</div>
</div>

<div className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer">
<img alt="Office" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight">Commercial Spaces</h3>
<p className="text-stone-300 text-sm mb-6 line-clamp-2">Keep your workspace professional and hygienic. Perfect for offices, showrooms, and retail.</p>
<button className="w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-medium hover:bg-white hover:text-stone-900 transition-all">
                            Request Commercial Quote
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Clean space, clear mind.</h2>
<p className="text-lg text-stone-600 mb-10">We handle the mess so you can focus on what matters. Book your service in less than 60 seconds.</p>
<form className="bg-stone-50 p-6 rounded-2xl shadow-inner border border-stone-100 flex flex-col md:flex-row gap-4 items-center max-w-2xl mx-auto">
<div className="flex-1 w-full relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" icon="lucide:map-pin"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400 text-sm" placeholder="Enter your Zip Code" type="text"/>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-stone-900 text-white font-medium rounded-xl hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10" type="button">
                    Get Started
                </button>
</form>
</div>
</section>

<footer className="bg-stone-900 text-stone-300 py-16 lg:py-20" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="space-y-6">
<a className="flex items-center gap-2 text-white" href="#">
<div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center text-white border border-stone-700">
<iconify-icon height="16" icon="lucide:sparkles" width="16"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter uppercase">Pristine.</span>
</a>
<p className="text-sm text-stone-400 leading-relaxed">
                    Elevating hygiene standards for homes and businesses. Professional, efficient, and detail-oriented.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">House Cleaning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Apartment Cleaning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Move-in / Move-out</a></li>
<li><a className="hover:text-white transition-colors" href="#">Office Cleaning</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-stone-500" icon="lucide:map-pin"></iconify-icon>
<span>123 Clean Street, Suite 100<br/>New York, NY 10012</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="lucide:phone"></iconify-icon>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="lucide:mail"></iconify-icon>
<span>hello@pristineclean.com</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2023 Pristine Cleaning Services. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed with precision.</p>
</div>
</footer>

    </>
  );
}
