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
      

<nav className="fixed w-full z-50 top-0 border-b border-neutral-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-900 rounded-md flex items-center justify-center text-white">
<iconify-icon height="18" icon="solar:leaf-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-neutral-900 text-md">GCS LLC</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-500">
<a className="hover:text-emerald-900 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-900 transition-colors" href="#process">Process</a>
<a className="hover:text-emerald-900 transition-colors" href="#offer">Offer</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-neutral-800 transition-all" href="tel:+">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
                Call for Help
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium mb-8">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon>
                Serving Reading, PA and surrounding communities
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Emergency Tree Removal <br className="hidden md:block"/> in Reading, PA
            </h1>
<p className="text-lg md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Fast, safe removal of dangerous or fallen trees by local professionals you can trust.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 bg-emerald-900 hover:bg-emerald-800 text-white rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-sm shadow-emerald-900/20">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Call Now for Immediate Help
                </button>
<button className="w-full sm:w-auto h-12 px-8 bg-white border border-neutral-200 hover:bg-neutral-50 text-neutral-900 rounded-md font-medium text-sm transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Call for Emergency Service
                </button>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-y border-neutral-200/60">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4 leading-tight">
                        When a Tree Becomes a Safety Risk, You Need Professionals — <span className="text-emerald-800">Not Guesswork.</span>
</h2>
<p className="text-neutral-500 mb-6 leading-relaxed">
                        Ground Care Solutions LLC provides emergency tree removal for situations that require immediate attention. Whether a tree has fallen, is leaning dangerously, or was damaged by severe weather, our team responds quickly to remove hazards and protect your property.
                    </p>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        We focus on controlled removals using professional equipment to reduce risk and prevent further damage to your home or surroundings.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-neutral-200/60 shadow-sm">
<div className="text-emerald-700 mt-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-900 text-sm">Fast Response</h3>
<p className="text-xs text-neutral-500 mt-1">For emergency situations</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-neutral-200/60 shadow-sm">
<div className="text-emerald-700 mt-1">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-900 text-sm">Safety-First</h3>
<p className="text-xs text-neutral-500 mt-1">Controlled removal methods</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-neutral-200/60 shadow-sm">
<div className="text-emerald-700 mt-1">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-900 text-sm">Property Protection</h3>
<p className="text-xs text-neutral-500 mt-1">Prevent further damage</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-lg bg-white border border-neutral-200/60 shadow-sm">
<div className="text-emerald-700 mt-1">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-neutral-900 text-sm">Clear Communication</h3>
<p className="text-xs text-neutral-500 mt-1">During urgent situations</p>
</div>
</div>
</div>
</div>

<div className="relative bg-white rounded-xl border border-neutral-200 p-8 shadow-sm">
<div className="absolute -top-4 -right-4 bg-emerald-50 text-emerald-800 px-4 py-2 rounded-lg border border-emerald-100 text-xs font-medium shadow-sm">
                        Licensed &amp; Insured
                    </div>
<div className="space-y-6">
<div className="flex items-center justify-between border-b border-neutral-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:clipboard-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Risk Assessment</p>
<p className="text-xs text-neutral-500">Evaluated</p>
</div>
</div>
<div className="text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between border-b border-neutral-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Hazard Control</p>
<p className="text-xs text-neutral-500">Secured</p>
</div>
</div>
<div className="text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-neutral-900">Emergency Team</p>
<p className="text-xs text-neutral-500">Dispatched</p>
</div>
</div>
<div className="text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Our Emergency Tree Services</h2>
<p className="text-neutral-500 mt-2 max-w-lg">If a tree poses an immediate threat, do not wait. Professional removal helps prevent injuries, property damage, and further complications.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Emergency Tree Removal</h3>
<p className="text-sm text-neutral-500">Immediate response for critical situations posing threats.</p>
</div>

<div className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:tree-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Fallen Tree Removal</h3>
<p className="text-sm text-neutral-500">Clearing trees blocking driveways, yards, or roads.</p>
</div>

<div className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:cloud-storm-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Storm-Damaged Cleanup</h3>
<p className="text-sm text-neutral-500">Post-storm clearing of broken limbs and debris.</p>
</div>

<div className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Dangerous &amp; Leaning Trees</h3>
<p className="text-sm text-neutral-500">Stabilizing and removing unstable trees before they fall.</p>
</div>

<div className="group p-6 rounded-xl border border-neutral-200 bg-white hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-4 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Emergency Stump Grinding</h3>
<p className="text-sm text-neutral-500">Available with tree removal to fully clear the hazard.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 text-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">This Service Is for Homeowners Facing Urgent Tree Hazards</h2>
<p className="text-neutral-400 mb-8">Don't risk injury or property damage. We are the solution for properties requiring professional intervention immediately.</p>
<a className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors" href="#offer">
                        View our emergency offer 
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-neutral-200">Trees leaning toward homes or structures</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-neutral-200">Trees damaged by storms or high winds</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-neutral-200">Fallen trees blocking driveways or yards</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-neutral-200">Large branches threatening roofs or power lines</span>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-neutral-200">Any tree that feels unsafe or unstable</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 text-center mb-16">Our Emergency Tree Removal Process</h2>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-px bg-neutral-200 -z-10 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8">

<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-semibold text-sm mb-4 mx-auto md:mx-0">1</div>
<h4 className="font-semibold text-neutral-900 mb-1">Call Us</h4>
<p className="text-xs text-neutral-500">Speak directly with our team about the situation.</p>
</div>

<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center font-semibold text-sm mb-4 mx-auto md:mx-0">2</div>
<h4 className="font-semibold text-neutral-900 mb-1">Assessment</h4>
<p className="text-xs text-neutral-500">We evaluate the risk and safest removal approach.</p>
</div>

<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center font-semibold text-sm mb-4 mx-auto md:mx-0">3</div>
<h4 className="font-semibold text-neutral-900 mb-1">Preparation</h4>
<p className="text-xs text-neutral-500">Property and area protection before removal.</p>
</div>

<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center font-semibold text-sm mb-4 mx-auto md:mx-0">4</div>
<h4 className="font-semibold text-neutral-900 mb-1">Removal</h4>
<p className="text-xs text-neutral-500">Controlled, professional emergency tree removal.</p>
</div>

<div className="bg-white p-4 rounded-xl border border-neutral-100 shadow-sm text-center md:text-left">
<div className="w-10 h-10 rounded-full bg-white border border-neutral-200 text-neutral-900 flex items-center justify-center font-semibold text-sm mb-4 mx-auto md:mx-0">5</div>
<h4 className="font-semibold text-neutral-900 mb-1">Cleanup</h4>
<p className="text-xs text-neutral-500">Debris cleared and area made safe.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6" id="offer">
<div className="max-w-4xl mx-auto bg-emerald-900 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center">

<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 text-emerald-100 text-xs font-medium mb-6">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                    February Special — Limited Time
                </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4 leading-tight">
                    50% Off Stump Grinding <br/> <span className="text-emerald-300">with Any Emergency Tree Removal</span>
</h2>
<p className="text-emerald-100/80 mb-8 max-w-xl mx-auto">
                    Available for February only. Call now to take advantage of this limited-time offer.
                </p>
<button className="bg-white text-emerald-950 px-8 py-3 rounded-md font-medium text-sm hover:bg-emerald-50 transition-colors shadow-lg">
                    📞 Call Now to Claim This Offer
                </button>
</div>
</div>
</section>

<section className="py-20 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="text-2xl font-semibold text-neutral-900 mb-8 tracking-tight">Emergency Tree Removal in Reading, PA &amp; Nearby Areas</h2>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Reading</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Wyomissing</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">West Reading</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Shillington</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Sinking Spring</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Exeter</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Temple</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Mount Penn</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Laureldale</span>
<span className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600">Surrounding Communities</span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-900">
<iconify-icon icon="solar:chat-round-call-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Need Emergency Tree Removal Right Now?</h2>
<p className="text-neutral-500 mb-8">Call immediately to speak with our team and get fast, professional help for dangerous tree situations.</p>
<div className="flex flex-col items-center gap-4">
<button className="w-full sm:w-auto h-12 px-10 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md font-medium text-sm transition-all shadow-lg shadow-neutral-900/10">
                    📞 Call Now for Immediate Help
                </button>
<div className="text-sm text-neutral-500 mt-4 flex flex-col gap-2">
<a className="hover:text-emerald-700 transition-colors flex items-center justify-center gap-2" href="mailto:Groundcaresolutionsllc@gmail.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                        Groundcaresolutionsllc@gmail.com
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-neutral-200 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400">
<p>© 2024 Ground Care Solutions LLC. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-600" href="#">Privacy Policy</a>
<a className="hover:text-neutral-600" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
