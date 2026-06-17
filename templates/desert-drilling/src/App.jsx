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
navy: '#1a365d',
blue: '#2c5282',
orange: '#c05621',
gold: '#d69e2e',
gray: '#f7fafc',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}

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
      

<nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-3">

<div className="flex flex-col">
<span className="block"><img alt="Desert Eagle Drilling" className="h-16 w-auto object-contain" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b8f76a74ce62e5a9396b0.jpg"/></span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#about">About Us</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#area">Service Area</a>
<a className="text-base font-medium text-slate-600 hover:text-brand-navy transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center gap-6">
<div className="flex flex-col items-end">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">24/7 Emergency</span>
<a className="text-base font-semibold text-brand-navy hover:text-brand-orange transition-colors" href="tel:2148865098">(214) 886-5098</a>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-brand-orange hover:bg-orange-700 shadow-sm transition-all duration-200" href="#contact">
                        Get Free Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-700 focus:outline-none">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 h-screen min-h-[700px] flex items-center hero-bg">
<div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/50 to-transparent"></div>
<div className="sm:px-6 lg:px-8 overflow-hidden w-full max-w-7xl rounded-3xl mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative shadow-2xl" style={{backgroundImage: 'linear-gradient(to right, rgba(26, 54, 93, 0.9) 0%, rgba(26, 54, 93, 0.75) 40%, rgba(26, 54, 93, 0.2) 100%), url(\'https: //storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b9295ff9d323db9a5fb08.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="max-w-3xl relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-brand-orange mb-6 backdrop-blur-md">
<span className="flex h-2 w-2 rounded-full bg-brand-orange mr-2 animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase">Serving Dallas-Fort Worth &amp; North Texas</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
            North Texas Water Solutions. <br/>
<span className="text-brand-orange">Done Right.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-200 mb-10 leading-relaxed font-light max-w-2xl text-shadow-sm">
            Experience matters. With over 500 wells drilled and a legacy spanning three generations, we deliver reliable water solutions built to Texas standards.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-brand-orange hover:bg-orange-700 shadow-lg shadow-orange-900/20 transition-all" href="#contact">
                Request Consultation
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all" href="tel:2148865098">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                Emergency Service
            </a>
</div>
<div className="mt-12 flex items-center gap-8 text-slate-300">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-orange" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">TDLR Licensed #60601</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-orange" icon="solar:verified-check-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">500+ Wells Experience</span>
</div>
</div>
</div>
</div>
</section>

<div className="relative stats-bg border-b border-slate-100 py-16">
<div className="absolute inset-0 bg-white/95"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-brand-navy tracking-tight">500+</p>
<p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Wells Drilled</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-brand-navy tracking-tight">2019</p>
<p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Founded in Dallas</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-brand-navy tracking-tight">100%</p>
<p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">TDLR Compliant</p>
</div>
<div className="text-center md:text-left">
<p className="text-4xl font-semibold text-brand-navy tracking-tight">24/7</p>
<p className="text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">Emergency Response</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-brand-gray" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-orange font-semibold tracking-wider uppercase text-xs">Our Expertise</span>
<h2 className="mt-2 text-4xl font-semibold text-brand-navy tracking-tight">Comprehensive Water Well Services</h2>
<p className="mt-4 text-lg text-slate-600">From initial site survey to final completion, we handle every aspect of your water system with industrial-grade precision.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group flex flex-col h-full">
<div className="h-48 w-full overflow-hidden relative">
<img alt="Drill bit penetrating soil" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b94a5f7a877db452ced66.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg">
<iconify-icon className="text-brand-navy" icon="solar:screws-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">New Well Drilling</h3>
<p className="text-base text-slate-600 mb-6 leading-relaxed flex-1">
                            Custom well design tailored to North Texas aquifers. We manage all permitting, site reviews, and coordination.
                        </p>
<ul className="space-y-3 pt-4 border-t border-slate-50">
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Site review &amp; Geology
                            </li>
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                TDLR Code Compliant
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group flex flex-col h-full relative">
<div className="h-48 w-full overflow-hidden relative">
<img alt="Technician inspecting pump" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg">
<iconify-icon className="text-brand-orange" icon="solar:wrench-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Emergency Repair</h3>
<p className="text-base text-slate-600 mb-6 leading-relaxed flex-1">
                            No water? Low pressure? Our team troubleshoots pumps and electrical controls to restore supply quickly.
                        </p>
<ul className="space-y-3 pt-4 border-t border-slate-50">
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Pump failure diagnostics
                            </li>
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Fast water restoration
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-all group flex flex-col h-full">
<div className="h-48 w-full overflow-hidden relative">
<img alt="Hands checking pressure gauge" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b9526b3ae8354bdad7df2.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg">
<iconify-icon className="text-green-600" icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-1 flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Maintenance &amp; Testing</h3>
<p className="text-base text-slate-600 mb-6 leading-relaxed flex-1">
                            Protect your investment with periodic inspections, flow checks, and water quality testing to ensure safety.
                        </p>
<ul className="space-y-3 pt-4 border-t border-slate-50">
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Annual inspection programs
                            </li>
<li className="flex items-start text-slate-600 text-sm">
<iconify-icon className="text-brand-orange mr-2 flex-shrink-0" icon="solar:check-circle-linear" width="18"></iconify-icon>
                                Water quality analysis
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div>
<span className="text-brand-orange font-semibold tracking-wider uppercase text-xs">Why Own A Well?</span>
<h2 className="mt-2 text-4xl font-semibold text-brand-navy tracking-tight mb-6">Invest in Independence</h2>
<p className="text-lg text-slate-600 mb-8">
                        A private water well isn't just a utility; it's an asset that adds value, security, and savings to your North Texas property.
                    </p>
<div className="space-y-8">
<div className="flex">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-navy/5 text-brand-navy">
<iconify-icon icon="solar:dollar-linear" width="24"></iconify-icon>
</div>
</div>
<div className="ml-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Economic Savings</h3>
<p className="mt-2 text-base text-slate-600">Eliminate monthly water bills. With utility rates rising, a well pays for itself over time, providing free water for irrigation and home use.</p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-navy/5 text-brand-navy">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
</div>
<div className="ml-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Total Reliability</h3>
<p className="mt-2 text-base text-slate-600">Avoid city-wide outages and rationing. Your water supply stays in your control, year-round.</p>
</div>
</div>
<div className="flex">
<div className="flex-shrink-0">
<div className="flex items-center justify-center h-12 w-12 rounded-lg bg-brand-navy/5 text-brand-navy">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
</div>
<div className="ml-6">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">Increased Property Value</h3>
<p className="mt-2 text-base text-slate-600">Self-sufficiency is a premium feature for buyers. A functioning well is a major selling point for rural real estate.</p>
</div>
</div>
</div>
</div>
<div className="mt-12 lg:mt-0 relative">

<img alt="Clean water flowing from faucet" className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block border border-slate-100">
<div className="flex items-center gap-4 mb-2">
<div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<iconify-icon icon="solar:water-drop-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-500 uppercase">Quality</p>
<p className="text-base font-semibold text-slate-900">Naturally Filtered</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-navy text-white overflow-hidden relative" id="about">

<div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
<svg className="" fill="none" height="404" viewbox="0 0 404 404" width="404"><defs><pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0"><rect fill="currentColor" height="4" width="4" x="0" y="0"></rect></pattern></defs><rect className="" fill="url(#dots)" height="404" width="404"></rect></svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="">
<span className="text-brand-orange font-semibold tracking-wider uppercase text-xs">Our Story</span>
<h2 className="mt-2 text-4xl font-semibold tracking-tight mb-6">Built on Oil Field Standards. Adapted for Water.</h2>
<p className="text-lg text-slate-300 mb-6 leading-relaxed">
                        Desert Eagle Drilling was founded in 2019 by <strong>Brad Butler</strong> as a strategic pivot from helium exploration. With experience drilling over 500 wells across Kansas, Oklahoma, and the Rockies, Brad brings industrial-grade rigor to the water well industry.
                    </p>
<p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        Partnering with <strong>David Maynor</strong>, a third-generation driller, we combine deep geological knowledge with modern equipment. We don't just dig holes; we engineer water systems designed to last.
                    </p>
<div className="flex flex-col sm:flex-row gap-8 pt-6 border-t border-white/10">
<div>
<p className="text-white font-semibold text-lg">Brad Butler</p>
<p className="text-slate-400 text-sm">CEO &amp; Founder</p>
</div>
<div>
<p className="text-white font-semibold text-lg">David Maynor</p>
<p className="text-slate-400 text-sm">Drilling Operations Manager</p>
</div>
</div>
</div>
<div className="space-y-6">

<div className="relative">
<img alt="Brad Butler, CEO &amp; Founder of Desert Eagle Drilling" className="w-full h-64 object-cover border-white/10 border rounded-xl shadow-2xl" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b962eff9d32bb1aa6e4ae.jpg"/>
</div>

<div className="relative">
<img alt="David Maynor" className="object-center w-full h-64 object-cover border-white/10 border rounded-xl shadow-2xl" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b96f9f7a87726872d57a6.jpg"/>
<div className="absolute -bottom-4 -right-4 bg-brand-orange p-4 rounded-lg shadow-lg">
<p className="text-2xl font-semibold text-white">TDLR #60601</p>
<p className="text-orange-100 mt-1 text-xs font-medium uppercase tracking-wide">Licensed Contractor</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-gray" id="area">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-4xl font-semibold text-brand-navy tracking-tight">Serving North Texas</h2>
<p className="mt-4 text-lg text-slate-600">Proudly serving the Dallas-Fort Worth Metroplex, Tarrant County, and surrounding communities.</p>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden grid lg:grid-cols-2">
<div className="p-10 flex flex-col justify-center">
<h3 className="text-2xl font-semibold text-brand-navy mb-6">Local Geology Experts</h3>
<p className="text-lg text-slate-600 mb-8">
                        Drilling in North Texas requires specific knowledge of local aquifers. We tailor every well depth, casing, and screen design to the specific formation beneath your property.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> Dallas
                        </div>
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> Fort Worth
                        </div>
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> Plano
                        </div>
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> Frisco
                        </div>
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> Denton
                        </div>
<div className="flex items-center gap-2 text-slate-700 font-medium text-sm">
<iconify-icon className="text-brand-orange" icon="solar:map-point-linear" width="18"></iconify-icon> McKinney
                        </div>
</div>
</div>
<div className="bg-slate-200 min-h-[400px] relative group">

<img alt="North Texas Landscape" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-brand-navy/20"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<img alt="North Texas Limestone Geology" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b9857d5b65eecb7ae6f91.jpg"/>
<div className="absolute inset-0 bg-brand-navy/20"></div>
<div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg relative">
<p className="font-semibold text-brand-navy flex items-center gap-2">
<iconify-icon className="text-brand-orange" icon="solar:map-linear" width="20"></iconify-icon>
            DFW Metroplex Coverage
        </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-4xl font-semibold text-brand-navy tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border border-slate-200 rounded-lg p-6 hover:border-brand-orange/30 transition-colors bg-slate-50/50">
<h3 className="text-lg font-semibold text-slate-900 mb-2">How deep will my well need to be?</h3>
<p className="text-base text-slate-600">Depth varies significantly based on your specific location in North Texas. Residential wells in the DFW area typically range from 150 to 600+ feet depending on which aquifer we target (Trinity, Woodbine, etc.).</p>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:border-brand-orange/30 transition-colors bg-slate-50/50">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need permits for a water well in Texas?</h3>
<p className="text-base text-slate-600">Yes. While Texas law respects groundwater rights, specific groundwater conservation districts (GCDs) and municipalities have permitting requirements. Desert Eagle Drilling handles all the paperwork and compliance for you.</p>
</div>

<div className="border border-slate-200 rounded-lg p-6 hover:border-brand-orange/30 transition-colors bg-slate-50/50">
<h3 className="text-lg font-semibold text-slate-900 mb-2">How long does drilling take?</h3>
<p className="text-base text-slate-600">Most residential wells are drilled and completed within 3 to 7 days, weather permitting. Complex commercial projects may take longer. We'll provide a clear timeline during your consultation.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-brand-orange font-medium hover:text-orange-700 text-base inline-flex items-center" href="#contact">
                    Have more questions? Contact us
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-4xl font-semibold text-brand-navy tracking-tight mb-4">Get Your Free Quote</h2>
<p className="text-lg text-slate-600 mb-8">Fill out the form below, and we'll get back to you within 24 hours. For emergencies, please call.</p>
<form className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-sm" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-sm" id="phone" placeholder="(214) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-sm" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all appearance-none bg-white text-slate-600 text-sm" id="service">
<option>New Well Drilling</option>
<option>Emergency Repair</option>
<option>Maintenance / Inspection</option>
<option>Other / Not Sure</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1 uppercase tracking-wide" htmlFor="message">Message / Property Details</label>
<textarea className="w-full px-4 py-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all text-sm" id="message" placeholder="Tell us about your project or issue..." rows="4"></textarea>
</div>
<button className="w-full bg-brand-navy text-white font-medium py-4 rounded-md hover:bg-slate-800 transition-colors shadow-lg text-sm tracking-wide uppercase" type="button">
                            Send Request
                        </button>
</form>
</div>

<div className="flex flex-col justify-start space-y-8">
<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
<h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-orange" icon="solar:phone-calling-linear" width="24"></iconify-icon>
                            Contact Information
                        </h3>
<div className="space-y-6">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Phone</p>
<a className="text-2xl font-semibold text-brand-navy hover:text-brand-orange transition-colors" href="tel:2148865098">(214) 886-5098</a>
<p className="text-xs text-green-600 font-medium mt-1 uppercase tracking-wide">Available 24/7 for Emergencies</p>
</div>
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Address</p>
<p className="text-lg text-slate-800 mt-1">
                                    17330 Preston Rd, Suite 200D-208
                                    Dallas, TX 75252
                                </p>
</div>
<div className="">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email</p>
<a className="text-lg text-brand-navy hover:text-brand-orange transition-colors mt-1" href="mailto:info@deserteagledrilling.com">info@deserteagledrilling.com</a>
</div>
</div>
</div>

<div className="h-64 w-full bg-slate-200 rounded-xl overflow-hidden relative border border-slate-300 shadow-sm">
<img alt="Technician talking to customer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-black/60 to-transparent absolute inset-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent), url(\'https: //storage.googleapis.com/msgsndr/KALcb59FRo6Yq0Wy7qaZ/media/697b98f3ff9d32b8b0a773f7.jpg\')', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-semibold text-lg">Real People. Real Solutions.</p>
<p className="text-sm opacity-90">We walk you through every step.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="mb-6">
<span className="text-2xl font-bold tracking-tighter text-white leading-none">DESERT EAGLE</span>
</div>
<p className="text-slate-400 mb-6 leading-relaxed text-sm">
                        Professional water well drilling and service for North Texas. Built on experience, driven by integrity.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-orange transition-colors" href="#">Home</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#about">About Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-orange transition-colors" href="#">New Well Construction</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Pump Repair</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-orange transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-xs">© 2024 Desert Eagle Drilling. All rights reserved.</p>
<p className="text-slate-600 text-xs">Designed with Texas Pride.</p>
</div>
</div>
</footer>

    </>
  );
}
