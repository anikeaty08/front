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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold tracking-tighter shadow-lg shadow-slate-900/20">
                    D
                </div>
<span className="text-sm font-bold tracking-tight text-slate-900">Deva Height Classes</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#results">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#programs">Programs</a>
<a className="hover:text-slate-900 transition-colors text-blue-600" href="#specialized">Specialized 28+</a>
<a className="hover:text-slate-900 transition-colors text-amber-600" href="#premium">Lifetime</a>
<a className="px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-xl hover:shadow-slate-200 flex items-center gap-2" href="https://wa.me/919671002232" target="_blank">
<span>Start Training</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<button className="lg:hidden text-slate-900 p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 grid-bg -z-10"></div>

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2 opacity-60"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2 opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-50 border border-blue-100 text-blue-700 mb-8">
<iconify-icon icon="solar:graph-up-bold" width="14"></iconify-icon>
<span className="text-[10px] font-bold uppercase tracking-widest">Guaranteed Progress Protocol</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                    Add up to 5 inches <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">in one year.</span>
</h1>
<p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
                    Advanced biomechanics, limb lengthening guidance, and specialized fitness protocols designed to defy genetics.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all hover:-translate-y-0.5 shadow-xl shadow-slate-900/10" href="#programs">
                        View Programs
                        <iconify-icon className="ml-2" icon="solar:dumbbell-small-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all" href="https://wa.me/919671002232" target="_blank">
<iconify-icon className="mr-2" icon="logos:whatsapp-icon" width="20"></iconify-icon>
                        WhatsApp Us
                    </a>
</div>
<div className="mt-12 flex items-center gap-8 text-sm font-semibold text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:verified-check-bold"></iconify-icon>
<span>Verified Results</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:shield-check-bold"></iconify-icon>
<span>Safe Techniques</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:global-bold"></iconify-icon>
<span>Global Access</span>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="w-full max-w-md bg-slate-900 text-white rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-slate-900/30 ring-1 ring-slate-900/5">

<div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
<div>
<p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Growth Tracker</p>
<h3 className="text-lg font-bold">Performance Stats</h3>
</div>
<div className="bg-blue-600 p-2 rounded-lg">
<iconify-icon icon="solar:chart-square-bold" width="20"></iconify-icon>
</div>
</div>

<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-5xl font-bold tracking-tight">+3.0</span>
<span className="text-xl text-slate-400 font-medium">inches</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-xs font-bold flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-bold"></iconify-icon>
                                Guaranteed Range
                            </div>
<span className="text-xs text-slate-500">within 6-12 months</span>
</div>
</div>

<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-300">Spinal Decompression</span>
<span className="text-white">94%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full w-[94%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-300">Posture Correction</span>
<span className="text-white">88%</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full w-[88%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-slate-300">Limb Lengthening Support</span>
<span className="text-white">Active</span>
</div>
<div className="h-2 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full w-full animate-pulse"></div>
</div>
</div>
</div>

<div className="mt-8 pt-4 border-t border-slate-700 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:user-id-bold"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-white">Advanced Consultation</p>
<p className="text-[10px] text-slate-500 uppercase">Included in Premium</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">Training Programs</h2>
<p className="text-slate-500 font-medium">
                    Choose your trajectory. From core foundation to elite personalized coaching.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-bold text-slate-900">Starter Core</h3>
<p className="text-sm text-slate-500 mt-1">Foundation phase</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900">₹2,499</span>
<span className="text-sm text-slate-400 font-medium">/ $250</span>
</div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">3 Months Access</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Basic Posture Correction
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Stretching Protocol
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Dietary Guidelines
                        </li>
</ul>
<a className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-sm hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all text-center" href="https://wa.me/919671002232?text=I'm%20interested%20in%20the%203%20Months%20Program">Select Plan</a>
</div>

<div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl shadow-slate-900/20 transform md:-translate-y-4 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">RECOMMENDED</div>
<div className="mb-6 relative z-10">
<h3 className="text-lg font-bold text-white">Growth Phase</h3>
<p className="text-sm text-slate-400 mt-1">Accelerated results</p>
</div>
<div className="mb-6 relative z-10">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-white">₹3,499</span>
<span className="text-sm text-slate-400 font-medium">/ $450</span>
</div>
<p className="text-xs font-bold text-blue-400 uppercase tracking-wider mt-2">6 Months Access</p>
</div>
<ul className="space-y-3 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Advanced Techniques
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Limb Lengthening Intro
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Up to 3 inches Guarantee*
                        </li>
</ul>
<a className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all text-center relative z-10" href="https://wa.me/919671002232?text=I'm%20interested%20in%20the%206%20Months%20Program">Start Transformation</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col">
<div className="mb-6">
<h3 className="text-lg font-bold text-slate-900">Complete Transformation</h3>
<p className="text-sm text-slate-500 mt-1">Maximum potential</p>
</div>
<div className="mb-6">
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900">₹6,000</span>
<span className="text-sm text-slate-400 font-medium">/ $800</span>
</div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-2">1 Year Access</p>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Full Year Curriculum
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Comprehensive Diet Plans
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Target: Up to 5 inches
                        </li>
</ul>
<a className="w-full py-3 rounded-xl border-2 border-slate-100 text-slate-900 font-bold text-sm hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all text-center" href="https://wa.me/919671002232?text=I'm%20interested%20in%20the%201%20Year%20Program">Select Plan</a>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 relative overflow-hidden group" id="specialized">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:user-plus-bold" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md text-blue-700 text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm">
                            Specialized
                        </div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Age 28+ Program</h3>
<p className="text-sm text-slate-600 mb-6 max-w-sm">
                            Designed for mature physiology where growth plates are fused. Focuses on spinal decompression and structural realignment.
                        </p>
<div className="flex items-end gap-2 mb-6">
<span className="text-3xl font-bold text-slate-900">₹12,000</span>
<span className="text-lg font-medium text-slate-500">/ $1,500</span>
<span className="text-xs font-bold text-slate-400 mb-1 ml-2">5 MONTHS</span>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20" href="https://wa.me/919671002232?text=I'm%20interested%20in%20the%20Age%2028%2B%20Program">
                            Apply for Program
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100 relative overflow-hidden group" id="premium">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:crown-star-bold" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-md text-amber-700 text-[10px] font-bold uppercase tracking-widest mb-4 shadow-sm">
                            Elite Tier
                        </div>
<h3 className="text-2xl font-bold text-slate-900 mb-2">Lifetime Premium Coaching</h3>
<p className="text-sm text-slate-600 mb-6 max-w-sm">
                            The ultimate holistic package. Overall body height support, fitness coaching, hair guidance, and personality development.
                        </p>
<div className="flex items-end gap-2 mb-6">
<span className="text-3xl font-bold text-slate-900">₹45,000</span>
<span className="text-lg font-medium text-slate-500">/ $3,500</span>
<span className="text-xs font-bold text-slate-400 mb-1 ml-2">LIFETIME</span>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="https://wa.me/919671002232?text=I'm%20interested%20in%20the%20Lifetime%20Premium%20Coaching">
                            Get Elite Access
                            <iconify-icon className="ml-2" icon="solar:crown-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs text-slate-400 max-w-2xl mx-auto italic">
                    *Visible height improvement of up to 3 inches is guaranteed within a 6-month to 1-year period with proper adherence to the protocol. Individual results may vary based on genetics and consistency.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Advanced Physiology &amp; <br/>Limb Lengthening Support</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        We don't just stretch; we restructure. Our programs include access to consultation for limb lengthening solutions and advanced techniques designed to support accelerated progress.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 flex-shrink-0">
<iconify-icon icon="solar:bone-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Micro-Fracture Training</h4>
<p className="text-sm text-slate-500 mt-1">Controlled resistance training to stimulate bone density and potential growth.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-900 flex-shrink-0">
<iconify-icon icon="solar:clipboard-heart-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Holistic Coaching</h4>
<p className="text-sm text-slate-500 mt-1">Included in Lifetime: Hair guidance, personality development, and full fitness coaching.</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl bg-slate-100 overflow-hidden relative group">
<img alt="Fitness Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&amp;h=600&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider">Mobility</span>
</div>
<div className="aspect-square rounded-2xl bg-slate-900 flex items-center justify-center text-white p-6 text-center">
<div>
<h3 className="text-3xl font-bold text-blue-500 mb-1">5"</h3>
<p className="text-xs font-semibold uppercase tracking-wider">Max Potential</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="aspect-square rounded-2xl bg-blue-50 flex items-center justify-center text-blue-900 p-6 text-center border border-blue-100">
<div>
<iconify-icon className="mb-2" icon="solar:running-bold" width="40"></iconify-icon>
<p className="text-xs font-bold uppercase tracking-wider">Active Recovery</p>
</div>
</div>
<div className="aspect-[3/4] rounded-2xl bg-slate-100 overflow-hidden relative group">
<img alt="Strength Training" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&amp;h=600&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-wider">Strength</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white rounded flex items-center justify-center text-slate-900 text-sm font-bold">D</div>
<span className="font-bold text-white text-lg">Deva Height Classes</span>
</div>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
                        We transform stature through science. The premier destination for height growth, posture correction, and confidence building.
                    </p>
<div className="flex flex-wrap gap-4">

<a className="flex items-center gap-3 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700" href="https://www.instagram.com/height_increase_classes_?igsh=MXRwbHU4MWU3d2pxOQ==" target="_blank">
<iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">Instagram</span>
</a>

<a className="flex items-center gap-3 px-4 py-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700" href="https://youtube.com/@devaheightclasses?si=TMU4WmV_7sxxnf45" target="_blank">
<iconify-icon icon="logos:youtube-icon" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">YouTube</span>
</a>

<a className="flex items-center gap-3 px-4 py-2 bg-green-900/30 text-green-400 rounded-lg hover:bg-green-900/50 transition-colors border border-green-800/50" href="https://wa.me/919671002232" target="_blank">
<iconify-icon icon="logos:whatsapp-icon" width="20"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">WhatsApp</span>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Programs</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li><a className="hover:text-white transition-colors" href="#">Starter Core (3 Mo)</a></li>
<li><a className="hover:text-white transition-colors text-blue-400" href="#">Growth Phase (6 Mo)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Transformation (1 Yr)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Age 28+ Special</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400 font-medium">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:phone-linear"></iconify-icon>
                                +91 96710 02232
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="solar:letter-linear"></iconify-icon>
                                contact@devaheight.com
                            </li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium">
<p>© 2024 Deva Height Classes. Results vary by individual.</p>
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
