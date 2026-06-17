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



        // Initialize Lucide Icons
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
<div className="bg-[#1e5926] p-2 rounded-lg group-hover:bg-[#16431c] transition-colors">
<i className="h-6 w-6 text-white" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-[#1e5926] font-bold text-xl tracking-tighter uppercase">Gingery Bros</span>
<span className="text-[#e8601c] text-xs font-semibold tracking-[0.2em] uppercase">Landscaping</span>
</div>
</div>

<nav className="hidden md:flex space-x-8 items-center">
<a className="text-slate-600 hover:text-[#1e5926] font-medium transition-colors text-base" href="#">Home</a>
<a className="text-slate-600 hover:text-[#1e5926] font-medium transition-colors text-base" href="#services">Services</a>
<a className="text-slate-600 hover:text-[#1e5926] font-medium transition-colors text-base" href="#about">About</a>

<a className="text-slate-600 hover:text-[#1e5926] font-medium transition-colors text-base" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex">
<a className="bg-[#e8601c] hover:bg-[#d55415] text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95 text-base" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 focus:outline-none">
<i className="h-8 w-8" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Beautiful Lawn" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1e5926]/90 to-[#1e5926]/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-6 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-[#e8601c]"></span>
                    Now booking for Spring 2024
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Professional care for <br/> your outdoor spaces.
                </h1>
<p className="text-xl md:text-2xl text-slate-100 mb-10 font-normal max-w-2xl leading-relaxed">
                    We transform overgrown yards into manicured masterpieces. Reliable, rugged, and refined landscaping services by the Gingery Bros.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-[#e8601c] hover:bg-[#d55415] text-white font-medium text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                        Request a Quote
                        <i className="ml-2 h-5 w-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-[#1e5926] font-semibold text-base uppercase tracking-widest mb-2">Our Expertise</h2>
<h3 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Comprehensive Landscaping</h3>
<p className="text-xl text-slate-500 leading-relaxed">Everything you need to keep your property looking pristine year-round.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Lawn Maintenance</h4>
<p className="text-lg text-slate-500 leading-relaxed">Regular mowing, edging, and trimming to ensure your grass remains healthy and perfectly manicured.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="shovel" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Hardscaping</h4>
<p className="text-lg text-slate-500 leading-relaxed">Custom patios, walkways, and retaining walls designed to add functionality and value to your home.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Irrigation Systems</h4>
<p className="text-lg text-slate-500 leading-relaxed">Installation and repair of efficient sprinkler systems to keep your greenery hydrated without waste.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="trees" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Tree Care</h4>
<p className="text-lg text-slate-500 leading-relaxed">Professional pruning, trimming, and removal services to maintain the safety and aesthetics of your trees.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="flower-2" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Garden Design</h4>
<p className="text-lg text-slate-500 leading-relaxed">Curated planting of seasonal flowers, shrubs, and mulch installation to enhance curb appeal.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#e8601c]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="h-6 w-6 text-[#1e5926]" data-lucide="snowflake" strokeWidth="1.5"></i>
</div>
<h4 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">Seasonal Cleanup</h4>
<p className="text-lg text-slate-500 leading-relaxed">Spring and fall leaf removal, snow clearing, and debris cleanup to prepare your yard for the season.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#e8601c]/10 rounded-full blur-2xl"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">

<img alt="Gingery Bros Recent Project" className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-[#e8601c] font-semibold text-base uppercase tracking-widest mb-2">About Us</h2>
<h3 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Rooted in Quality. <br/>Driven by Pride.</h3>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        Gingery Bros Landscaping was founded on the belief that your outdoor space is an extension of your home. We combine old-school work ethic with modern design principles to deliver results that stand the test of time. Whether it's a simple mow or a complete redesign, we treat every lawn as if it were our own.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="mt-1 bg-[#e8601c] rounded-full p-0.5">
<i className="h-4 w-4 text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-lg text-slate-700">Family-owned and operated business.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-[#e8601c] rounded-full p-0.5">
<i className="h-4 w-4 text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-lg text-slate-700">Fully licensed and insured professionals.</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 bg-[#e8601c] rounded-full p-0.5">
<i className="h-4 w-4 text-white" data-lucide="check" strokeWidth="3"></i>
</div>
<span className="text-lg text-slate-700">Commitment to eco-friendly practices.</span>
</li>
</ul>
<a className="inline-flex items-center text-[#1e5926] font-semibold text-lg hover:text-[#e8601c] transition-colors group" href="#contact">
                        Learn More About Us
                        <i className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>


<section className="py-24 bg-[#1e5926]" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="text-white">
<h2 className="text-[#e8601c] font-semibold text-base uppercase tracking-widest mb-2">Get Started</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to transform your yard?</h3>
<p className="text-xl text-white/80 mb-10 leading-relaxed">
                        Fill out the form to request your free estimate. Our team will review your requirements and get back to you within 24 hours to schedule a site visit.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-white/10 p-3 rounded-lg">
<i className="h-6 w-6 text-white" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white/60 text-sm">Call us directly</p>
<p className="text-xl font-medium">(555) 123-4567</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="bg-white/10 p-3 rounded-lg">
<i className="h-6 w-6 text-white" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white/60 text-sm">Email us</p>
<p className="text-xl font-medium">hello@gingerybros.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-2xl">
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="first-name">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e8601c] focus:border-transparent transition-all" id="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="last-name">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e8601c] focus:border-transparent transition-all" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e8601c] focus:border-transparent transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e8601c] focus:border-transparent transition-all appearance-none bg-white" id="service">
<option>General Landscaping</option>
<option>Lawn Maintenance</option>
<option>Hardscaping</option>
<option>Tree Service</option>
<option>Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#e8601c] focus:border-transparent transition-all resize-none" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-[#e8601c] hover:bg-[#d55415] text-white font-medium py-4 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.99] text-lg" type="button">
                            Request Your Free Estimate Today
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#16431c] py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-white font-bold text-lg tracking-tight uppercase">Gingery Bros</span>
<span className="text-[#e8601c] text-xs font-semibold tracking-widest uppercase">Landscaping</span>
</div>
<p className="text-white/40 text-sm">© 2024 Gingery Bros Landscaping. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
