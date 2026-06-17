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
brand: {
50: '#fdf4ff',
100: '#fae8ff',
500: '#d946ef',
600: '#c026d3',
700: '#8e24aa', // Primary Color Locked
800: '#86198f',
900: '#701a75',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



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
      

<div className="bg-brand-700 text-white py-3 text-sm font-medium">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-4">
<span className="bg-white/20 px-3 py-1 rounded-full text-xs tracking-wide">GRAND OPENING</span>
<span>🎉 New Maryland Body Sculpting location opening inside Rockwell Fitness in Severna Park</span>
</div>
<div className="flex items-center gap-6">
<span className="bg-white text-brand-700 px-3 py-1 rounded-full text-xs font-semibold">November 7, 2025</span>
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i> Now Booking Appointments!</span>
<div className="flex text-yellow-300 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3 h-3 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-3 h-3 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="text-2xl tracking-tight font-medium text-slate-900 flex items-center gap-2">
<span className="text-brand-700">MD</span> Body Sculpting
                </div>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-brand-700 transition-colors" href="#">Home</a>
<a className="hover:text-brand-700 transition-colors" href="#">About Us</a>
<a className="flex items-center gap-1 hover:text-brand-700 transition-colors bg-slate-100 px-3 py-1.5 rounded-full" href="#">
                    Treatments <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<a className="hover:text-brand-700 transition-colors" href="#">Membership</a>
<a className="hover:text-brand-700 transition-colors" href="#">Payment Plans</a>
<a className="hover:text-brand-700 transition-colors" href="#">Locations</a>
<a className="hover:text-brand-700 transition-colors" href="#">Careers</a>
<a className="hover:text-brand-700 transition-colors" href="#">Contact Us</a>
</div>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium flex items-center gap-2 hover:text-brand-700" href="tel:4105058595">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> (410) 505-8595
                </a>
<button className="bg-brand-700 hover:bg-brand-800 transition-all text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg shadow-brand-700/20">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> Book Appointment
                </button>
</div>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Cryotherapy" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-brand-700/95 via-brand-700/80 to-brand-700/40"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-4">Cryotherapy</h1>
<p className="text-2xl font-light text-white/90 mb-8 tracking-wide">In Ellicott City</p>
<h2 className="text-2xl md:text-3xl font-normal mb-8 leading-snug">Experience the Targeted Benefits of Localized Cryotherapy</h2>
<p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 font-light">
                Localized cryotherapy is a powerful, precision-based treatment designed to rejuvenate your body by focusing on specific areas in need of relief. Unlike whole-body cryotherapy, this non-invasive technique uses advanced cooling technology to rapidly reduce inflammation, accelerate muscle recovery, and tighten skin for a smoother, more youthful appearance.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5"></i>
                    Performance Enhancement
                </div>
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-6">Faster Recovery and Enhanced Performance</h2>
<div className="text-lg text-slate-600 leading-relaxed space-y-4">
<p>Localized cryotherapy is a favorite among athletes and fitness enthusiasts for its ability to ease sore muscles, promote circulation, and enhance flexibility. By reducing inflammation and swelling, it speeds up recovery after intense workouts or injuries—helping you stay at the top of your game.</p>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-700/10">
<img alt="Cryotherapy Face" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-1 relative">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Skin Treatment" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-2">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-6">Enhanced Performance</h2>
<div className="text-lg text-slate-600 leading-relaxed">
<p>Localized cryotherapy is a favorite among athletes and fitness enthusiasts for its ability to ease sore muscles, promote circulation, and enhance flexibility. By reducing inflammation and swelling, it speeds up recovery after intense workouts or injuries—helping you stay at the top of your game.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 lg:p-16 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-700/10 text-brand-700 text-sm font-medium mb-6 w-fit">
<i className="w-4 h-4" data-lucide="leaf" strokeWidth="1.5"></i>
                            Wellness &amp; Detox
                        </div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">Detoxify and Revitalize Your Body</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                            This cutting-edge treatment supports lymphatic drainage, helping your body naturally flush out toxins while improving circulation. By targeting specific areas, localized cryotherapy enhances overall wellness, leaving you feel lighter, more refreshed, and energized.
                        </p>
</div>
<div className="relative h-[400px] lg:h-auto">
<img alt="Detox Treatment" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="bg-brand-700 text-white px-6 py-2 rounded-full text-base font-medium inline-block shadow-lg shadow-brand-700/20 mb-8">
<i className="w-4 h-4 inline mr-2" data-lucide="check-circle" strokeWidth="1.5"></i>Benefits Of Cryotherapy
                </span>
</div>

<h3 className="text-2xl font-medium text-brand-700 text-center mb-10 tracking-tight">Wellness Benefits of Localized Cryotherapy</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Pain Relief &amp; Recovery</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="arrow-down-circle" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Reduced Inflammation</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Accelerated Muscle Healing</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Improved Circulation</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="frown" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Migraine Relief</p>
</div>
</div>

<h3 className="text-2xl font-medium text-brand-700 text-center mb-10 tracking-tight">Beauty &amp; Aesthetic Benefits of Localized Cryotherapy</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Skin Tightening &amp; Anti-Aging</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Cellulite Reduction</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Acne &amp; Skin Clarity</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Reduced Puffiness &amp; Dark Circles</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center border border-slate-100 h-full">
<div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mb-4">
<i className="w-6 h-6" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<p className="font-medium text-slate-800 text-sm">Boosted Metabolism</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-brand-700 to-brand-900">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-3xl p-12 text-center shadow-2xl">
<div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-700">
<i className="w-8 h-8" data-lucide="calendar-check" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl font-medium text-slate-900 mb-4 tracking-tight">Ready to Experience Cryotherapy?</h2>
<p className="text-xl text-slate-500 mb-8 max-w-xl mx-auto font-light">
                    Book your localized cryotherapy session today and start your journey to enhanced wellness and recovery.
                </p>
<button className="bg-brand-700 hover:bg-brand-800 transition-all text-white text-lg px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2">
<i className="w-5 h-5" data-lucide="calendar" strokeWidth="1.5"></i> Book Online Now
                </button>
<p className="text-xs text-slate-400 mt-6 uppercase tracking-wider">Secure online booking • Instant confirmation • Flexible scheduling</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-4">Visit <span className="text-brand-700">Us</span></h2>
<p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    With locations in Ellicott City and inside RockWell Fitness in Severna Park, our state-of-the-art facilities provide a luxurious and comfortable setting for your transformation journey
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
<h3 className="text-xl font-medium text-slate-900 mb-4">Ellicott City</h3>
<div className="rounded-2xl overflow-hidden h-64 bg-slate-200 mb-6 grayscale hover:grayscale-0 transition-all duration-500">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.266297371804!2d-76.7960!3d39.2673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDE2JzAyLjMiTiA3NsKwNDcnNDUuNiJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<button className="w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-xl font-medium transition-colors flex justify-center items-center gap-2">
<i className="w-4 h-4" data-lucide="navigation" strokeWidth="1.5"></i> Get Directions
                    </button>
</div>

<div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
<h3 className="text-xl font-medium text-slate-900 mb-4">Severna Park / Annapolis</h3>
<div className="rounded-2xl overflow-hidden h-64 bg-slate-200 mb-6 grayscale hover:grayscale-0 transition-all duration-500">

<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3096.0!2d-76.56!3d39.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDA2JzAwLjAiTiA3NsKwMzMnMzYuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
<button className="w-full bg-brand-700 hover:bg-brand-800 text-white py-3 rounded-xl font-medium transition-colors flex justify-center items-center gap-2">
<i className="w-4 h-4" data-lucide="navigation" strokeWidth="1.5"></i> Get Directions
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-black text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">

<div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700 rounded-3xl p-10 mb-16 text-center relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-2xl md:text-3xl font-medium text-white mb-2">Start Your Transformation Today</h2>
<p className="text-slate-400 mb-6 font-light">Ready to achieve the body you've always wanted? Book your free consultation and take the first step towards your transformation.</p>
<button className="bg-brand-700 hover:bg-brand-600 text-white px-8 py-3 rounded-full font-medium transition-colors">
                        Book Appointment Now
                    </button>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-700/20 blur-[100px] rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-12">

<div>
<h3 className="text-white text-lg font-medium mb-6">MD Body Sculpting</h3>
<p className="mb-6 leading-relaxed text-sm">Maryland's premier non-surgical body contouring clinic. Advanced treatments, expert care, real results.</p>
<div className="space-y-3 text-sm">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:4105058595">
<i className="w-4 h-4 text-brand-700" data-lucide="phone" strokeWidth="1.5"></i> (410) 505-8595
                        </a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:mdbodysculpting@outlook.com">
<i className="w-4 h-4 text-brand-700" data-lucide="mail" strokeWidth="1.5"></i> mdbodysculpting@outlook.com
                        </a>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-brand-700 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-brand-700 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Severna Park/Annapolis - Inside RockWell Fitness, 551D Baltimore Annapolis Blvd, Severna Park, MD 21146</span>
</div>
</div>
<div className="flex gap-4 mt-6">
<a className="text-slate-500 hover:text-brand-700" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-slate-500 hover:text-brand-700" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>

<div>
<h3 className="text-white text-lg font-medium mb-6">Our Services</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Localized Cryotherapy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Skin Tightening &amp; Anti-Aging</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fat Reduction &amp; Body Contouring</a></li>
<li><a className="hover:text-white transition-colors" href="#">HIFU + Liposonix Fat Reduction</a></li>
</ul>
</div>

<div>
<h3 className="text-white text-lg font-medium mb-6">Quick Links</h3>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Locations</a></li>
</ul>
</div>

<div>
<h3 className="text-white text-lg font-medium mb-6">Stay Updated</h3>
<p className="text-sm mb-4">Get exclusive offers, transformation tips, and the latest news delivered to your inbox.</p>
<form className="flex flex-col gap-2">
<input className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-brand-700 text-white placeholder-slate-600" placeholder="Enter your email" type="email"/>
<button className="bg-brand-700 hover:bg-brand-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">Subscribe Now</button>
</form>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p>© 2025 MD Body Sculpting. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
