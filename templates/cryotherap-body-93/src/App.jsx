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



        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });
    
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="snowflake"></i>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight">MD Body Sculpting</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-sky-600 transition" href="#">Home</a>
<a className="text-base font-medium text-slate-600 hover:text-sky-600 transition" href="#">About Us</a>
<a className="text-base font-medium text-slate-600 hover:text-sky-600 transition" href="#">Services</a>
<a className="text-base font-medium text-slate-600 hover:text-sky-600 transition" href="#">Contact Us</a>
</div>
<div>
<a className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition shadow-lg shadow-sky-200" href="#schedule">
                        Book Consultation
                    </a>
</div>
</div>
</div>
</nav>

<section className="hero-bg relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
<div className="absolute top-10 left-10 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-10 right-10 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="relative max-w-4xl mx-auto px-4 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100/50 border border-sky-200 text-sky-700 text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>Aesthetic Cryobody Service</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Non-Surgical Cryo Body Sculpting
            </h1>
<p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Advanced cryotherapy designed to target stubborn fat and contour the body—naturally and effectively.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition shadow-xl text-lg flex items-center gap-2" href="#pricing">
                    View Pricing <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition shadow-sm text-lg flex items-center gap-2" href="#areas">
<i className="w-5 h-5" data-lucide="map-pin"></i> View Areas
                </a>
</div>
<div className="mt-20 animate-bounce text-slate-400 flex justify-center">
<i className="w-8 h-8" data-lucide="mouse"></i>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                What is Aesthetic Cryobody?
            </h2>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10">
                Aesthetic Cryobody is a non-invasive body sculpting treatment that uses controlled cooling technology to target stubborn fat cells. Over time, the body naturally processes the treated fat cells, helping create a more sculpted and defined appearance.
            </p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium border border-sky-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="thermometer-snowflake"></i> Controlled Cooling
                </span>
<span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-lg text-sm font-medium border border-indigo-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i> Non-Invasive
                </span>
<span className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg text-sm font-medium border border-teal-100 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i> Efficient Process
                </span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="areas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Treatment Focus Areas</h2>
<p className="text-lg text-slate-500">Targeted cold therapy for specific body contours</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
<i className="w-6 h-6" data-lucide="circle-dashed"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Core &amp; Torso</h3>
<p className="text-base text-slate-500 mb-4">Central body contouring</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Abdomen
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Flanks
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Limbs</h3>
<p className="text-base text-slate-500 mb-4">Definition for arms and legs</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Thighs
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Arms
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-slate-100">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
<i className="w-6 h-6" data-lucide="sparkle"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Custom Areas</h3>
<p className="text-base text-slate-500 mb-4">Targeted spot treatment</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Other problem areas
                        </li>
<li className="flex items-center gap-3 text-lg text-slate-700 font-medium">
<i className="w-5 h-5 text-sky-500" data-lucide="check"></i> Specific contouring
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Simple, Transparent Pricing</h2>
<p className="text-lg text-slate-500">Choose a single session or maximize results with a package</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden h-full flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Single Area Treatment</h3>
<p className="text-slate-500 text-base mb-8">Perfect for targeting one specific trouble spot.</p>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-5xl font-semibold text-slate-900 tracking-tight">$279</span>
<span className="text-lg text-slate-500">/ per area</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-sky-500" data-lucide="check-circle-2"></i> Non-surgical treatment
                            </li>
<li className="flex items-center gap-3 text-slate-600">
<i className="w-5 h-5 text-sky-500" data-lucide="check-circle-2"></i> No downtime required
                            </li>
</ul>
</div>
<a className="w-full py-4 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition text-center shadow-lg" href="#schedule">
                        Book Session
                    </a>
</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden text-white">
<div className="absolute top-0 right-0 bg-sky-500 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl">Best Value</div>
<div className="mb-10">
<h3 className="text-xl font-semibold text-white mb-2">Multi-Session Packages</h3>
<p className="text-slate-400 text-base">Consistent treatment yields the best definition.</p>
</div>

<div className="bg-slate-800/50 rounded-xl p-6 mb-4 border border-slate-700/50 hover:border-sky-500/30 transition cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-400" data-lucide="package"></i>
<span className="text-lg font-medium text-white">Package of 5</span>
</div>
<span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md font-medium">Save $196</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold text-white">$1199</span>
<span className="text-sm text-slate-400 line-through">$1395</span>
</div>
</div>

<div className="bg-slate-800/50 rounded-xl p-6 mb-8 border border-slate-700/50 hover:border-sky-500/30 transition cursor-pointer group">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-400" data-lucide="layers"></i>
<span className="text-lg font-medium text-white">Package of 10</span>
</div>
<span className="text-xs bg-sky-500/20 text-sky-300 px-2 py-1 rounded-md font-medium">Save $591</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold text-white">$2199</span>
<span className="text-sm text-slate-400 line-through">$2790</span>
</div>
</div>
<a className="w-full py-4 rounded-xl bg-sky-600 text-white font-medium hover:bg-sky-500 transition text-center shadow-lg shadow-sky-900/50 block" href="#schedule">
                        Purchase Package
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Benefits of Cryobody Sculpting</h2>
<p className="text-lg text-slate-500">Experience the transformative power of targeted cold therapy</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
<div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Targets Stubborn Fat</h3>
<p className="text-lg text-slate-500 leading-relaxed">Specifically addresses areas that are resistant to diet and exercise.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Non-Surgical</h3>
<p className="text-lg text-slate-500 leading-relaxed">A completely non-invasive alternative to liposuction or surgery.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">No Downtime</h3>
<p className="text-lg text-slate-500 leading-relaxed">Return to your daily activities immediately after your session.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Gradual Results</h3>
<p className="text-lg text-slate-500 leading-relaxed">Natural-looking transformation as your body processes fat cells.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6" data-lucide="user-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Improved Contour &amp; Definition</h3>
<p className="text-lg text-slate-500 leading-relaxed">Helps sculpt the body for a more athletic and defined silhouette.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Before &amp; After Results</h2>
<p className="text-lg text-slate-500">Real body contouring progress and visible results</p>
</div>
<div className="max-w-5xl mx-auto px-4">

<div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize group">

<img alt="After Result" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/50 bg-slate-200">
<img alt="Before Result" className="absolute top-0 left-0 w-[200%] max-w-none h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-sm text-white px-4 py-1.5 rounded-md text-sm font-medium">Before</div>
<div className="absolute bottom-4 right-4 bg-sky-600/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-md text-sm font-medium">After</div>

<div className="absolute top-0 bottom-0 left-1/2 w-10 -ml-5 flex items-center justify-center">
<div className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 group-hover:scale-110 transition">
<i className="w-5 h-5" data-lucide="chevrons-left-right"></i>
</div>
</div>
</div>
<p className="text-center text-sm text-slate-400 mt-6">* Individual results may vary. Consult with our specialists for realistic expectations.</p>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800" id="schedule">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Schedule Your Cryobody Consultation</h2>
<p className="text-lg text-slate-400 mb-8 max-w-lg">
                        Ready to sculpt your body? Contact us today to discuss your goals and create a personalized treatment plan.
                    </p>
<div className="flex flex-col space-y-4">
<div className="flex items-center gap-4 text-lg">
<i className="w-6 h-6 text-sky-500" data-lucide="phone"></i>
<span>(410) 505-8595</span>
</div>
<div className="flex items-center gap-4 text-lg">
<i className="w-6 h-6 text-sky-500" data-lucide="mail"></i>
<span>mdbodysculpting@outlook.com</span>
</div>
<div className="flex items-start gap-4 text-lg">
<i className="w-6 h-6 text-sky-500 mt-1" data-lucide="map-pin"></i>
<span>3525 Ellicott Mills Dr, Ellicott City, MD 21043, USA</span>
</div>
</div>
</div>
<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
<h3 className="text-2xl font-semibold mb-2">Stay Updated</h3>
<p className="text-slate-400 mb-6 text-base">Maryland's premier non-surgical body contouring clinic. Get expert tips and exclusive offers.</p>
<form className="flex gap-3 flex-col sm:flex-row">
<input className="flex-1 px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition" placeholder="Your Email Address" type="email"/>
<button className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white font-medium rounded-lg transition shadow-lg shadow-sky-900/20">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-500 text-sm">
                    © 2025 MD Body Sculpting Studio. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-500 hover:text-white transition" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
