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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-semibold text-xl tracking-tight text-slate-900">
                SCULPT<span className="text-[#8e24aa]">MED</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-[#8e24aa] transition-colors" href="#">Treatments</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Technology</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Results</a>
<a className="hover:text-[#8e24aa] transition-colors" href="#">Locations</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#8e24aa] rounded-full hover:bg-[#7b1fa2] transition-all shadow-lg shadow-purple-900/20" href="#book">
                Book Consultation
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[#8e24aa] text-xs font-medium uppercase tracking-wide">
<span className="iconify" data-icon="lucide:sparkles" data-width="14"></span>
                        Premium Aesthetic Medicine
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        Redefine Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8e24aa] to-purple-400">Natural Silhouette</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                        Experience advanced, non-invasive body contouring designed to eliminate stubborn fat and tighten skin without surgery or downtime.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#8e24aa] rounded-full hover:bg-[#7b1fa2] transition-all shadow-xl shadow-[#8e24aa]/20 hover:shadow-[#8e24aa]/30 hover:-translate-y-0.5" href="#book">
                            Book Appointment
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-slate-300" href="#learn-more">
                            View Treatments
                        </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Trusted by <span className="font-semibold text-slate-900">2,000+</span> patients</p>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#8e24aa] rounded-[2rem] blur-3xl opacity-10 translate-y-8 translate-x-8"></div>
<img alt="Body Contouring Treatment" className="relative w-full h-[600px] object-cover rounded-[2rem] shadow-2xl shadow-slate-900/10 z-10" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>

<div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs">
<div className="flex items-start gap-3">
<div className="p-2 bg-purple-100 text-[#8e24aa] rounded-xl">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Beverly Hills &amp; NYC</p>
<p className="text-xs text-slate-500">Top-rated clinics nationwide</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-[4rem] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10 space-y-6">
<span className="inline-flex items-center gap-1.5 text-[#8e24aa] font-medium text-sm tracking-wide uppercase">
<span className="iconify" data-icon="lucide:zap" data-width="16"></span>
                            Targeted Results
                        </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                            Advanced Fat Elimination
                        </h2>
<p className="text-slate-500 leading-relaxed text-lg">
                            Our state-of-the-art technology specifically targets and destroys fat cells in problem areas. Once eliminated, these cells are naturally processed and removed by your body, leaving you with a more sculpted physique permanently.
                        </p>
<ul className="space-y-3 pt-2">
<li className="flex items-center gap-3 text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle-2" data-width="20"></span>
                                Permanent fat cell reduction
                            </li>
<li className="flex items-center gap-3 text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle-2" data-width="20"></span>
                                FDA-cleared technology
                            </li>
<li className="flex items-center gap-3 text-slate-700">
<span className="iconify text-[#8e24aa]" data-icon="lucide:check-circle-2" data-width="20"></span>
                                Treat abdomen, flanks, thighs &amp; more
                            </li>
</ul>
</div>
</div>

<div className="relative h-full min-h-[500px]">
<img alt="Fat Elimination Process" className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-slate-200" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-gradient-to-br from-[#8e24aa]/20 to-transparent rounded-[2.5rem] blur-lg"></div>
<img alt="Non-Invasive Sculpting" className="relative w-full h-[600px] object-cover rounded-[2rem] shadow-lg" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
</div>

<div className="order-1 lg:order-2">
<div className="bg-white rounded-3xl p-10 lg:p-12 shadow-xl shadow-purple-900/5 border border-purple-100/50">
<div className="w-12 h-12 rounded-xl bg-purple-100 text-[#8e24aa] flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:feather" data-width="24"></span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                            Non-Invasive Body Sculpting
                        </h2>
<p className="text-slate-500 leading-relaxed text-lg mb-8">
                            Achieve the body you desire without the risks of surgery. Our non-invasive treatments require zero incisions, zero anesthesia, and zero recovery time. Walk in for your session and return to your daily activities immediately.
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="text-[#8e24aa] font-semibold text-lg mb-1">0 Days</div>
<div className="text-sm text-slate-500">Downtime Required</div>
</div>
<div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
<div className="text-[#8e24aa] font-semibold text-lg mb-1">30 Mins</div>
<div className="text-sm text-slate-500">Average Session</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">

<div className="absolute top-0 right-0 w-2/3 h-full bg-purple-50/40 rounded-l-[4rem] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="space-y-8">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 text-slate-600 font-medium text-xs tracking-wide uppercase bg-white">
                        Rejuvenation
                    </span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                        Medical-Grade Skin Tightening
                    </h2>
<p className="text-slate-500 leading-relaxed text-lg">
                        Restore your skin’s elasticity and firmness. Using advanced radiofrequency and ultrasound energy, we stimulate collagen production deep within the dermis to lift and tighten loose skin for a youthful appearance.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-purple-200 transition-colors cursor-default">
<div className="mt-1 text-[#8e24aa]">
<span className="iconify" data-icon="lucide:layers" data-width="24"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Deep Collagen Stimulation</h4>
<p className="text-sm text-slate-500 mt-1">Triggers natural regeneration.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100 hover:border-purple-200 transition-colors cursor-default">
<div className="mt-1 text-[#8e24aa]">
<span className="iconify" data-icon="lucide:smile" data-width="24"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Face &amp; Body Applications</h4>
<p className="text-sm text-slate-500 mt-1">Versatile treatment for all areas.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
<img alt="Skin Tightening" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1935&amp;q=80"/>

<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
<p className="text-white font-medium">Clinically Proven Results</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Why Choose SculptMed?
                </h2>
<p className="text-slate-500 text-lg">
                    More than just aesthetics. We focus on your overall wellness and confidence.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="space-y-6">
<h3 className="text-xl font-semibold text-slate-900 px-2">Health &amp; Wellness</h3>
<div className="grid gap-6">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
<span className="iconify" data-icon="lucide:heart-pulse" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Metabolic Boost</h4>
<p className="text-sm text-slate-500 leading-relaxed">Encourages a healthier metabolism through fat cell elimination.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-500 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Lymphatic Drainage</h4>
<p className="text-sm text-slate-500 leading-relaxed">Supports the body's natural detoxification processes.</p>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xl font-semibold text-slate-900 px-2">Aesthetic &amp; Confidence</h3>
<div className="grid gap-6">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-[#8e24aa] flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Contoured Physique</h4>
<p className="text-sm text-slate-500 leading-relaxed">Sculpt specific areas that are resistant to diet and exercise.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Enhanced Confidence</h4>
<p className="text-sm text-slate-500 leading-relaxed">Feel comfortable and empowered in your own skin.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#8e24aa] relative overflow-hidden" id="book">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready to Transform Your Body?
            </h2>
<p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
                Schedule your complimentary consultation today and let our experts create a personalized treatment plan just for you.
            </p>
<a className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-[#8e24aa] bg-white rounded-full hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" href="#">
                Book Online Now
                <span className="iconify ml-2" data-icon="lucide:calendar" data-width="20"></span>
</a>
<p className="mt-6 text-sm text-purple-200/80">
                No credit card required for consultation booking.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Visit Our Clinics</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-4 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100">
<div className="h-64 bg-slate-200 rounded-2xl w-full relative overflow-hidden group">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<span className="text-slate-400 font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map" data-width="20"></span>
                                Map View
                            </span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                            Beverly Hills
                        </div>
</div>
<div className="p-4 pt-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-slate-900">Beverly Hills</h3>
<p className="text-slate-500 text-sm mt-1">450 N Roxbury Dr, Suite 300<br/>Beverly Hills, CA 90210</p>
</div>
<div className="p-2 bg-purple-50 text-[#8e24aa] rounded-full">
<span className="iconify" data-icon="lucide:navigation" data-width="20"></span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                            Get Directions
                        </button>
</div>
</div>

<div className="bg-white p-4 rounded-3xl shadow-lg shadow-slate-200/50 hover:shadow-xl transition-shadow border border-slate-100">
<div className="h-64 bg-slate-200 rounded-2xl w-full relative overflow-hidden group">

<div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
<span className="text-slate-400 font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map" data-width="20"></span>
                                Map View
                            </span>
</div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-semibold shadow-sm">
                            Manhattan
                        </div>
</div>
<div className="p-4 pt-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-xl font-semibold text-slate-900">New York City</h3>
<p className="text-slate-500 text-sm mt-1">1025 5th Avenue<br/>New York, NY 10028</p>
</div>
<div className="p-2 bg-purple-50 text-[#8e24aa] rounded-full">
<span className="iconify" data-icon="lucide:navigation" data-width="20"></span>
</div>
</div>
<button className="w-full py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                            Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 mb-16">

<div className="lg:col-span-4 space-y-6">
<div className="font-semibold text-2xl tracking-tight text-white">
                        SCULPT<span className="text-[#8e24aa]">MED</span>
</div>
<p className="text-slate-400 leading-relaxed max-w-sm">
                        Premier body contouring and medical aesthetics clinic. We combine science and art to help you look and feel your absolute best.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#8e24aa] transition-colors text-white" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>

<div className="lg:col-span-2 space-y-6">
<h4 className="text-white font-medium">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Fat Reduction</a></li>
<li><a className="hover:text-white transition-colors" href="#">Muscle Toning</a></li>
<li><a className="hover:text-white transition-colors" href="#">Skin Tightening</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cellulite Treatment</a></li>
</ul>
</div>
<div className="lg:col-span-2 space-y-6">
<h4 className="text-white font-medium">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Doctors</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-4 space-y-6">
<h4 className="text-white font-medium">Stay Updated</h4>
<p className="text-sm text-slate-400">Subscribe for latest offers and aesthetic news.</p>
<form className="flex gap-2">
<input className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#8e24aa]" placeholder="Email address" type="email"/>
<button className="px-6 py-3 bg-[#8e24aa] text-white rounded-xl hover:bg-[#7b1fa2] transition-colors font-medium" type="button">
                            Join
                        </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2023 SculptMed Aesthetics. All rights reserved.</p>
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
