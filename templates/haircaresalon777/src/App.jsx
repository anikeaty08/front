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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-rose-500 transition-colors duration-300">
<span className="font-semibold text-lg tracking-tighter">A</span>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">Hair Salon</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#specialists">Specialists</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-slate-200 focus:outline-none">
<span>Sign In</span>
</button>
<button className="flex items-center gap-2 text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 focus:outline-none">
<span>Book Now</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-16 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                    New in Indiranagar
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Refining beauty <br/> <span className="text-slate-400">with precision.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
                    Experience a blend of traditional Indian wellness and modern aesthetics. A sanctuary for your hair and skin in the heart of the city.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-2 text-sm font-medium text-white bg-slate-900 px-6 py-3 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                        Book Appointment
                    </button>
<button className="flex items-center justify-center gap-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 px-6 py-3 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all">
                        View Price List
                    </button>
</div>
</div>
<div className="relative h-[400px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 group">
<img alt="Salon Interior" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20">
<div className="flex items-center justify-between">
<div className="">
<p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Top Specialist</p>
<p className="text-sm font-medium text-slate-900">Ananya R. - Senior Stylist</p>
</div>
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-slate-200 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div className="px-4 py-2">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-rose-50 rounded-lg text-rose-600">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Organic Products</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        We use 100% sulphate-free, ayurvedic, and organic products suited for Indian hair and skin types.
                    </p>
</div>
<div className="px-4 py-2">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600">
<iconify-icon icon="solar:chair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Private Suites</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Exclusive private rooms for bridal makeup and hijabi-friendly services ensuring complete privacy.
                    </p>
</div>
<div className="px-4 py-2">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900">Late Hours</h3>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        Open until 9 PM every day to accommodate your busy work schedule and last-minute plans.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Curated Services</h2>
<p className="text-slate-500">Expert care tailored to your personal style.</p>
</div>
<a className="text-sm font-medium text-slate-900 hover:text-rose-600 transition-colors flex items-center gap-1" href="#">
                    View Full Menu 
                    <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">From ₹800</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Haircuts &amp; Styling</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Precision cuts, blowouts, and custom styling including traditional oil massages.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:face-scan-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">From ₹1500</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Ayurvedic Facials</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Glow-enhancing treatments using saffron, turmeric, and sandalwood extracts.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">Consultation</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Bridal &amp; Event Makeup</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Comprehensive bridal packages including pre-wedding skin prep and draping.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">From ₹400</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Nail Artistry</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Gel extensions, classic manicures, and intricate nail art designs.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:dropper-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">From ₹3000</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Keratin &amp; Treatments</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Restore shine and strength with our signature keratin and botox hair treatments.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-pointer">
<div className="flex justify-between items-start mb-4">
<div className="p-3 rounded-xl bg-slate-50 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 text-slate-900">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium bg-slate-100 text-slate-600 px-2 py-1 rounded">From ₹500</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Mehendi &amp; Henna</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Traditional and modern designs for hands and organic henna for hair conditioning.</p>
<div className="flex items-center text-xs font-medium text-rose-600 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Book Service <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="pt-16 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto">
<div className="overflow-hidden md:px-16 md:py-24 md:text-left text-center bg-slate-900 rounded-3xl pt-16 pr-6 pb-16 pl-6 relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                            Ready for your glow up?
                        </h2>
<p className="text-slate-400 text-lg mb-8 max-w-md">
                            Join over 2,000 happy clients in Bangalore. Book your appointment today and get 10% off your first visit.
                        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
<button className="flex gap-2 hover:bg-slate-100 transition-all text-sm font-medium text-slate-900 bg-white rounded-lg pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center">
                                Book Now
                            </button>
<button className="flex gap-2 hover:bg-slate-800 transition-all cursor-pointer text-sm font-medium text-white border-slate-700 border rounded-lg pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/tel:919876543210'" role="button">
                                Call +91 98765 43210
                            </button>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
<h3 className="text-white font-medium mb-4">Quick Enquiry</h3>
<div className="space-y-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="sr-only">Service</label>
<div className="relative">
<select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors appearance-none">
<option>Select Service</option>
<option>Haircut</option>
<option>Facial</option>
<option>Makeup</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-rose-600 text-white text-sm font-medium py-3 rounded-lg hover:bg-rose-500 transition-colors">
                                Request Call Back
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8 px-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-6 w-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs">A</div>
<span className="font-semibold text-slate-900 tracking-tight">Hair Salon</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Modern salon services in Indiranagar, Bangalore. Redefining your style with organic products and expert hands.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Hair Styling</a></li>
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Bridal Makeup</a></li>
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Nail Art</a></li>
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Spa Treatments</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-rose-600 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-rose-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Visit Us</h4>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 Aara Salon. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500 font-medium">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
