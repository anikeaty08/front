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
      

<div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide relative z-50">
<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-2">
<span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">Grand Opening</span>
<span>New Maryland Body Sculpting location opening inside Rockwell Fitness in Severna Park</span>
</div>
<div className="flex items-center gap-4">
<span className="bg-white text-primary px-3 py-0.5 rounded-full text-xs font-semibold">November 7, 2025</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="sparkles"></i> Now Booking Appointments!</span>
<div className="flex gap-0.5 text-yellow-300">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<header className="absolute top-10 left-0 w-full z-40 border-b border-white/10">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">

<div className="text-white font-semibold text-xl tracking-tight leading-none">
                    MD Body<br/><span className="opacity-80 font-normal">Sculpting</span>
</div>
</div>
<nav className="hidden lg:flex items-center gap-8 text-white/90 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                    Treatments <i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
<a className="hover:text-white transition-colors" href="#">Membership</a>
<a className="hover:text-white transition-colors" href="#">Payment Plans</a>
<a className="hover:text-white transition-colors" href="#">Locations</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden xl:flex items-center gap-2 text-white text-sm font-medium hover:opacity-80" href="tel:4105058595">
<i className="w-4 h-4" data-lucide="phone"></i> (410) 505-8595
                </a>
<a className="bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-50 transition-all shadow-lg flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="calendar-days"></i> Book Appointment
                </a>
</div>
</div>
</header>

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Skin Tightening Hero" className="w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="container mx-auto px-6 relative z-10 text-center text-white mt-16">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 drop-shadow-sm">
                Skin Tightening &amp; Anti-Aging
                <span className="block text-3xl md:text-4xl font-normal mt-3 opacity-90">In Ellicott City</span>
</h1>
<p className="text-xl md:text-2xl font-medium mb-8 text-white/90">
                Restore Youthful Skin with Advanced Non-Surgical Solutions
            </p>
<p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-10">
                Achieve firmer, more youthful skin with our cutting-edge skin tightening and anti-aging treatments. Whether you want to reduce fine lines, improve skin elasticity, or rejuvenate your overall complexion, our non-invasive solutions help you look and feel your best—without surgery or downtime.
            </p>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="bg-white p-10 rounded-[2rem] shadow-soft border border-gray-100 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8e24aa] to-transparent opacity-50"></div>
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 text-primary text-sm font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> Collagen Enhancement
                    </span>
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                        Enhanced Skin Rejuvenation &amp; Collagen Production
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Our advanced treatments, including HIFU (High-Intensity Focused Ultrasound) and RF Skin Tightening (Thermalift), work by stimulating collagen and elastin production, naturally restoring skin firmness. Experience long-lasting improvements in skin texture, hydration, and overall radiance.
                    </p>
<p className="text-primary font-medium text-lg border-l-2 border-primary pl-4">
                        Ideal for wrinkle reduction, sagging skin, and improving facial contours.
                    </p>
</div>
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
<img alt="Woman face closeup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-50/50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] order-2 lg:order-1">
<img alt="Anti-aging treatment" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/40 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/3 w-40 h-40 border border-white/30 rounded-full"></div>
</div>
<div className="order-1 lg:order-2 pl-0 lg:pl-8">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-primary text-sm font-medium mb-6 shadow-sm border border-purple-100">
<i className="w-3.5 h-3.5" data-lucide="heart"></i> Skin Firming
                    </span>
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                        Smooth &amp; Tighten Loose Skin
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Over time, the skin loses its natural elasticity, leading to sagging and fine lines. Our treatments gently lift, firm, and sculpt your skin while reducing wrinkles, fine lines, and puffiness, giving you a naturally youthful appearance.
                    </p>
<p className="text-primary font-medium text-lg bg-white/60 p-4 rounded-xl inline-block backdrop-blur-sm border border-white/50">
                        Perfect for treating areas like the face, neck, arms, stomach, and thighs.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="bg-white p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium mb-6">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i> Non-Invasive Technology
                    </span>
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                        Non-Invasive Face &amp; Body Contouring
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Say goodbye to surgical facelifts and painful recovery! Our skin-tightening technology penetrates deep into the dermis, creating instant tightening effects while working over time to reverse aging signs and improve skin resilience.
                    </p>
<p className="text-primary font-medium text-lg">
                        Popular for jawline definition, cheek enhancement, and under-eye smoothing.
                    </p>
</div>
<div className="relative -ml-6 lg:-ml-12 mt-8 lg:mt-0">
<div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px]">
<img alt="Medical body contouring device" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="bg-primary text-white px-6 py-2 rounded-full text-base font-medium shadow-lg shadow-purple-200 inline-flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle-2"></i> Benefits of Skin Tightening &amp; Anti-Aging Treatments
                </span>
</div>

<div className="mb-16">
<h3 className="text-2xl font-medium text-primary text-center mb-8">Wellness &amp; Youthful Appearance</h3>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Increases natural collagen &amp; elastin production</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Firms &amp; tightens sagging skin</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Reduces wrinkles, fine lines, and crow's feet</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Enhances hydration &amp; skin elasticity</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Improves skin tone, texture, and smoothness</p>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-medium text-primary text-center mb-8">Beauty &amp; Aesthetic Enhancements</h3>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Lifts &amp; sculpts facial features</p>
</div>

<div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Brightens dull, tired-looking skin</p>
</div>

<div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Smooths puffiness, dark circles, and under-eye bags</p>
</div>

<div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Minimizes acne scars &amp; skin blemishes</p>
</div>

<div className="bg-purple-50/50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center h-full">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4">
<i className="w-5 h-5" data-lucide="heart"></i>
</div>
<p className="text-sm font-medium text-gray-700 leading-snug">Long-lasting anti-aging results without surgery</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 purple-gradient-bg relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="bg-white rounded-[2rem] p-12 md:p-16 text-center max-w-4xl mx-auto shadow-2xl">
<div className="inline-block p-4 rounded-2xl bg-purple-50 mb-6">
<i className="w-10 h-10 text-primary" data-lucide="calendar"></i>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
                    Ready to Experience Skin Tightening &amp; Anti-Aging?
                </h2>
<p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                    Book your skin tightening and anti-aging session today and start your journey to youthful, radiant skin.
                </p>
<a className="inline-flex items-center gap-2 bg-primary text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-purple-800 transition-all shadow-glow hover:scale-105 duration-300" href="#">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
                    Book Online Now
                    <i className="w-4 h-4 ml-1 opacity-70" data-lucide="external-link"></i>
</a>
<p className="mt-6 text-xs text-gray-400 font-medium">
                    Secure online booking • Instant confirmation • Flexible scheduling
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight">Visit <span className="text-primary">Us</span></h2>
<p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
                    With locations in Ellicott City and inside RockWell Fitness in Severna Park, our state-of-the-art facilities provide a luxurious and comfortable setting for your transformation journey
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col h-full bg-gray-50">
<div className="p-6 bg-white border-b border-gray-100">
<h3 className="text-xl font-semibold text-gray-900">Ellicott City</h3>
</div>
<div className="flex-grow min-h-[300px] relative bg-gray-200">

<img alt="Map Location Ellicott City" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 p-3 rounded-lg shadow-lg text-center backdrop-blur-sm">
<p className="text-xs font-bold text-gray-800">3525 Ellicott Mills Dr</p>
<p className="text-[10px] text-gray-500">Ellicott City, MD 21043</p>
</div>
</div>
</div>
<div className="p-4 bg-primary text-white text-center">
<button className="w-full py-2 flex items-center justify-center gap-2 hover:opacity-90 font-medium">
<i className="w-4 h-4" data-lucide="navigation"></i> Get Directions
                        </button>
</div>
</div>

<div className="rounded-3xl overflow-hidden border border-gray-200 shadow-sm flex flex-col h-full bg-gray-50">
<div className="p-6 bg-white border-b border-gray-100">
<h3 className="text-xl font-semibold text-gray-900">Severna Park / Annapolis</h3>
</div>
<div className="flex-grow min-h-[300px] relative bg-gray-200">

<img alt="Map Location Severna Park" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&amp;w=2831&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 p-3 rounded-lg shadow-lg text-center backdrop-blur-sm">
<p className="text-xs font-bold text-gray-800">Inside RockWell Fitness</p>
<p className="text-[10px] text-gray-500">551D Baltimore Annapolis Blvd</p>
</div>
</div>
</div>
<div className="p-4 bg-primary text-white text-center">
<button className="w-full py-2 flex items-center justify-center gap-2 hover:opacity-90 font-medium">
<i className="w-4 h-4" data-lucide="navigation"></i> Get Directions
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#111] text-gray-400 pt-20 pb-10 border-t border-gray-800">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div>
<h4 className="text-white text-lg font-semibold mb-6">MD Body Sculpting</h4>
<p className="text-sm leading-relaxed mb-6">
                        Maryland's premier non-surgical body contouring clinic. Advanced treatments, expert care, real results.
                    </p>
<div className="space-y-3 text-sm">
<a className="flex items-center gap-3 hover:text-white transition-colors" href="tel:4105058595">
<i className="w-4 h-4 text-primary" data-lucide="phone"></i> (410) 505-8595
                        </a>
<a className="flex items-center gap-3 hover:text-white transition-colors" href="mailto:mdbodysculpting@outlook.com">
<i className="w-4 h-4 text-primary" data-lucide="mail"></i> mdbodysculpting@outlook.com
                        </a>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-primary mt-1" data-lucide="map-pin"></i>
<span>3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
</div>
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-primary mt-1" data-lucide="map-pin"></i>
<span>Severna Park/Annapolis - Inside RockWell Fitness, 551D Baltimore Annapolis Blvd, Severna Park, MD 21146</span>
</div>
</div>
<div className="flex gap-4 mt-6">
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>

<div>
<h4 className="text-white text-lg font-semibold mb-6">Our Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">Localized Cryotherapy</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Skin Tightening &amp; Anti-Aging</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Fat Reduction &amp; Body Contouring</a></li>
<li><a className="hover:text-primary transition-colors" href="#">HIFU + Liposonix Fat Reduction</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Locations</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-lg font-semibold mb-6">Stay Updated</h4>
<p className="text-sm mb-4">Get exclusive offers, transformation tips, and the latest news delivered to your inbox.</p>
<div className="flex flex-col gap-3">
<input className="bg-gray-800 border border-gray-700 text-white px-4 py-2.5 rounded-lg focus:outline-none focus:border-primary text-sm" placeholder="Enter your email" type="email"/>
<button className="bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-purple-700 transition-colors text-sm">Subscribe Now</button>
</div>
</div>
</div>

<div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12 text-center border border-gray-800 mb-12">
<h3 className="text-white text-2xl font-semibold mb-2">Start Your Transformation Today</h3>
<p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
                    Ready to achieve the body you've always wanted? Book your free consultation and take the first step towards your transformation.
                </p>
<button className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-900/50">
                    Book Appointment Now
                </button>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-500">
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
