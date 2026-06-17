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
      

<div className="bg-gray-900 text-white py-2 text-xs border-b border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-6">
<span className="flex items-center gap-2"><i className="w-3 h-3 text-[#10aeec]" data-lucide="phone"></i> (410) 432-6140</span>
<span className="flex items-center gap-2"><i className="w-3 h-3 text-[#10aeec]" data-lucide="mail"></i> info@rwfitness.com</span>
</div>
<div className="flex items-center gap-6 opacity-80">
<span>M-F 5am-8pm</span>
<span>Sat 7am-7pm</span>
<span>Sun 8am-6pm</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<div className="font-heading font-bold text-2xl tracking-tighter text-gray-900 uppercase">
                    RockWell <span className="text-[#10aeec]">Fitness</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-[#10aeec] transition-colors" href="#">HOME</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">GYM MEMBERSHIPS</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">CLASSES</a>
<a className="hover:text-[#10aeec] transition-colors" href="#">TRAINERS</a>
</div>

<div className="hidden md:flex items-center gap-3">
<a className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#ccff00] text-gray-900 hover:bg-[#b3e600] transition-colors shadow-sm" href="#">
                    FREE CLASS
                </a>
<a className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#10aeec] text-white hover:bg-[#0e9bd1] transition-colors shadow-md shadow-[#10aeec]/20" href="#">
                    FREE TRIAL
                </a>
</div>

<button className="md:hidden text-gray-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h1 className="font-heading text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight mb-6">
                ABOUT OUR GYM
            </h1>
<p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                More than just a gym — a complete fitness and wellness destination.
            </p>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-40">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white"></div>
</div>
</header>

<div className="w-full max-w-7xl mx-auto px-6 mb-24">
<div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[21/9] group">

<img alt="RockWell Fitness Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 text-white">
<div className="flex items-center gap-3 mb-2">
<div className="h-0.5 w-12 bg-[#ccff00]"></div>
<span className="text-[#ccff00] font-heading font-semibold tracking-widest uppercase text-sm">Severna Park</span>
</div>
<h3 className="font-heading text-2xl md:text-3xl font-semibold tracking-tight">The premier 14,500 sq ft health facility.</h3>
</div>
</div>
</div>

<section className="max-w-3xl mx-auto px-6 mb-32 text-center">
<div className="inline-flex items-center justify-center p-2 mb-8 bg-gray-50 rounded-full border border-gray-100">
<span className="px-3 py-1 text-xs font-semibold tracking-wide text-[#10aeec] uppercase rounded-full bg-white shadow-sm border border-gray-100">Who We Are</span>
</div>
<p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
<span className="text-gray-900 font-medium">RockWell Fitness</span> is a premier health and fitness facility designed to support every stage of your wellness journey. With state-of-the-art equipment, expert trainers, and a welcoming environment, we help members train smarter, recover better, and stay motivated.
        </p>
<p className="mt-6 text-lg text-gray-500">
            Whether your goal is strength, endurance, recovery, or overall wellness, RockWell Fitness provides the tools and support you need to succeed.
        </p>
</section>

<section className="bg-gray-50 py-24 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Our Focus</h2>
<p className="mt-4 text-gray-500 text-lg">Everything you need under one roof.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-[#10aeec]/10 rounded-xl flex items-center justify-center text-[#10aeec] mb-6">
<i className="w-7 h-7" data-lucide="dumbbell"></i>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Fitness</h3>
<p className="text-gray-500 leading-relaxed">
                        Strength training, cardio, group classes, and personal coaching designed for real results.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-[#10aeec]/10 rounded-xl flex items-center justify-center text-[#10aeec] mb-6">
<i className="w-7 h-7" data-lucide="heart-pulse"></i>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Wellness</h3>
<p className="text-gray-500 leading-relaxed">
                        Recovery, mobility, and holistic services that support long-term health.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-14 h-14 bg-[#10aeec]/10 rounded-xl flex items-center justify-center text-[#10aeec] mb-6">
<i className="w-7 h-7" data-lucide="layout-grid"></i>
</div>
<h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">Amenities</h3>
<p className="text-gray-500 leading-relaxed">
                        Premium equipment, outdoor turf, and specialty services for a complete experience.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-[#10aeec] font-semibold hover:gap-3 transition-all" href="#">
                    View Equipment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-heading text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Take a Video Tour</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Step inside our facility and see what makes RockWell Fitness the perfect place to train, recover, and grow stronger.
                </p>
</div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video ring-1 ring-gray-900/5">

<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&amp;controls=1&amp;rel=0" title="RockWell Fitness Tour">
</iframe>
</div>
</div>
</section>

<section className="py-20 border-t border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="py-4">
<div className="font-heading text-5xl md:text-6xl font-semibold text-[#10aeec] tracking-tighter mb-2">15,000+</div>
<div className="text-gray-900 font-medium">Square Feet</div>
<div className="text-sm text-gray-400 mt-1">Of premium training space</div>
</div>
<div className="py-4">
<div className="font-heading text-5xl md:text-6xl font-semibold text-[#10aeec] tracking-tighter mb-2">20+</div>
<div className="text-gray-900 font-medium">Years in Business</div>
<div className="text-sm text-gray-400 mt-1">Serving Severna Park</div>
</div>
<div className="py-4">
<div className="font-heading text-5xl md:text-6xl font-semibold text-[#10aeec] tracking-tighter mb-2">2,500+</div>
<div className="text-gray-900 font-medium">Sq. Ft Outdoor Turf</div>
<div className="text-sm text-gray-400 mt-1">For functional training</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#10aeec] text-white mb-8 shadow-lg shadow-[#10aeec]/30">
<i className="w-5 h-5 fill-current" data-lucide="quote"></i>
</div>
<blockquote className="font-heading text-2xl md:text-4xl font-light text-gray-900 leading-tight tracking-tight mb-8">
                “I have been going to this facility for about two years now and honestly nothing beats it. The staff is welcoming, the atmosphere is motivating, and it truly feels like home.”
            </blockquote>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">

<img alt="User" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=RockWell+Member&amp;background=10aeec&amp;color=fff"/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-gray-900">John Doe</div>
<div className="text-xs text-gray-500">RockWell Member</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#10aeec] text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Ready to Start Your Fitness Journey?
            </h2>
<p className="text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
                Explore our classes, training options, and amenities — and experience the RockWell difference today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-[#ccff00] text-gray-900 rounded-full font-semibold text-sm hover:bg-white transition-colors shadow-lg shadow-black/10" href="#">
                    GET STARTED
                </a>
<a className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-colors" href="#">
                    VIEW CLASSES
                </a>
</div>
<p className="mt-6 text-sm text-white/70">
                Receive a free one week trial when you sign up today.
            </p>
</div>
</section>

<footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-heading font-bold text-xl uppercase tracking-tighter text-white">
                RockWell <span className="text-[#10aeec]">Fitness</span>
</div>
<div className="text-sm">
                © 2023 RockWell Fitness. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>



    </>
  );
}
