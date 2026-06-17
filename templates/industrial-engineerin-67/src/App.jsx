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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#151e2e',
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">ASA TECHNOLOGIES</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#brands">Brands</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#case-studies">Case Studies</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#brochures">Brochures</a>
</div>
<div className="hidden md:flex">
<a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-xs font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                        Contact Us
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/50"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: '0.3'}}></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Premier Industrial Engineering Partner
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1]">
                Engineering Excellence for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-slate-600">Industrial Solutions</span>
</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
                Trusted partners in engineering products &amp; consulting for Oil &amp; Gas, Power, Chemical, and Process industries. Delivering innovation through global expertise.
            </p>
<div className="mt-10 flex justify-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm hover:shadow-md" href="#brands">
                    Explore Our Solutions
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm" href="#contact">
                    Contact Us
                </a>
</div>

<div className="mt-20 pt-8 border-t border-slate-200/60">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Strategic Partners</p>
<div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-800" icon="solar:valve-linear" width="24"></iconify-icon>
<span className="text-xl font-bold tracking-tight text-slate-800">RaménValves</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-800" icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-xl font-bold tracking-tight text-slate-800">GoodGear</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Bridging Engineering Gaps with Precision &amp; Expertise</h2>
<div className="space-y-6 text-base text-slate-600 leading-relaxed">
<p>
                            ASA Technologies is a premier Engineering products &amp; Consulting services company tailored for the rigorous demands of the Oil &amp; Gas, Power, Chemical, and Process industries. We act as the vital link between world-class innovation and operational reality.
                        </p>
<p>
                            We partner exclusively with industry pioneers like Ramén Valves and Good Gear Solutions to deliver products and consultancy that don't just meet standards—they define them.
                        </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-600 mb-3" icon="solar:target-linear" width="28"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Our Mission</h3>
<p className="text-xs text-slate-500 leading-relaxed">Solving complex industrial problems through innovative valve technology and expert consulting services.</p>
</div>
<div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
<iconify-icon className="text-blue-600 mb-3" icon="solar:handshake-linear" width="28"></iconify-icon>
<h3 className="font-medium text-slate-900 mb-1">Our Approach</h3>
<p className="text-xs text-slate-500 leading-relaxed">We work closely with our principals to provide comprehensive solutions for plant efficiency enhancement.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative">

<div className="absolute inset-0 flex items-center justify-center bg-slate-900">
<div className="grid grid-cols-2 gap-8 text-slate-700 opacity-20 transform -rotate-12 scale-150">
<iconify-icon icon="solar:factory-linear" width="120"></iconify-icon>
<iconify-icon icon="solar:settings-linear" width="120"></iconify-icon>
<iconify-icon icon="solar:bolt-linear" width="120"></iconify-icon>
<iconify-icon icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 z-10">
<div className="text-white text-lg font-medium">Unified Vision</div>
<div className="text-slate-400 text-sm mt-1">Collaborative technical expertise driving customer-centric solutions across 20+ countries.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Sectors</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mt-2">Industries We Serve</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">

<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:drop-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Oil &amp; Gas</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:bolt-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Power</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:factory-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Refinery</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:test-tube-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Petrochemical</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:atom-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Chemical</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:buildings-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Steel</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Cement</span>
</div>
<div className="group flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-default">
<iconify-icon className="text-slate-400 group-hover:text-blue-600 mb-2 transition-colors" icon="solar:file-text-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-slate-600 text-center">Pulp &amp; Paper</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="brands">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Our Partners</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2">World-Class Engineering Brands</h2>
</div>

<div className="mb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm bg-white">
<div className="lg:col-span-5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-slate-800" icon="solar:valve-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight text-slate-800">Ramén Valves</h3>
</div>
<div className="inline-block px-3 py-1 rounded bg-slate-100 text-slate-600 text-xs font-medium mb-6">Est. 1945 • Sweden</div>
<p className="text-slate-600 mb-6 leading-relaxed text-sm">
                                With over 70 years of heritage, Ramén Valves is the inventor of the celebrated Ramén Ball Sector Valve, originally created for the Swedish pulp and paper industry.
                            </p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-700">Innovators in Control &amp; Process valves</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-700">Specialists in high-grade alloys</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-700">Acquired Engelsberg Valves (1949) in 2017</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100">
<p className="text-xs text-slate-500 italic">"Delivering smarter flow technology solutions that keep customers one step ahead"</p>
</div>
</div>
<div className="lg:col-span-7 bg-slate-50 rounded-xl p-8 border border-slate-100 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-blue-500/5 rounded-full blur-3xl"></div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Technology Focus</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<div className="text-xs font-medium text-blue-600 mb-1">Product</div>
<div className="text-sm font-semibold text-slate-900">Ball Sector Valve</div>
<div className="text-xs text-slate-500 mt-2">Precise control for fibre suspensions and slurries.</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<div className="text-xs font-medium text-blue-600 mb-1">Portfolio</div>
<div className="text-sm font-semibold text-slate-900">Engelsberg Valves</div>
<div className="text-xs text-slate-500 mt-2">Critical service valves for harsh industrial environments.</div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm bg-slate-850 text-white">
<div className="lg:col-span-5 flex flex-col justify-between order-1 lg:order-2">
<div>
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-blue-400" icon="solar:settings-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-bold tracking-tight text-white">Good Gear Solutions</h3>
</div>
<div className="inline-block px-3 py-1 rounded bg-slate-700 text-slate-300 text-xs font-medium mb-6">Deployed in 20+ Countries</div>
<p className="text-slate-300 mb-6 leading-relaxed text-sm">
                                Specialists in Pressure Safety Valve (PSV) testing systems. Streamlining testing with accuracy, safety, and minimal downtime for global industries.
                            </p>
<div className="space-y-3">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-300">Online &amp; Offline PSV Testing Systems</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-300">Heavy-Duty Test Benches</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 mt-1 shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm text-slate-300">DNV 2.7-1 Certified Platforms</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7 bg-slate-800 rounded-xl p-8 border border-slate-700 order-2 lg:order-1">
<h4 className="text-sm font-semibold text-white mb-4">Key Offerings</h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
<iconify-icon className="text-blue-400 mb-2" icon="solar:clipboard-check-linear" width="24"></iconify-icon>
<div className="text-sm font-semibold text-white">Container Calibration</div>
<div className="text-xs text-slate-400 mt-1">Mobile workshops for onsite valve certification.</div>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
<iconify-icon className="text-blue-400 mb-2" icon="solar:widget-2-linear" width="24"></iconify-icon>
<div className="text-sm font-semibold text-white">Seat Grinding</div>
<div className="text-xs text-slate-400 mt-1">Precision lapping machines for valve maintenance.</div>
</div>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
<iconify-icon className="text-blue-400 mb-2" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
<div className="text-sm font-semibold text-white">Portable Benches</div>
<div className="text-xs text-slate-400 mt-1">Flexible testing solutions for remote sites.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="case-studies">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">Case Studies</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mt-2">Proven Solutions</h2>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#contact">
                    Discuss your requirements <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:factory-2-linear" width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs font-medium text-blue-600 mb-2">Petrochemical</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Optimizing Flow Control in Corrosive Environments</h3>
<p className="text-xs text-slate-500 line-clamp-3">Implementing Ramén Ball Sector Valves to handle high-friction fibre suspensions, reducing maintenance downtime by 40%.</p>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Read Analysis</span>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:shield-check-linear" width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs font-medium text-blue-600 mb-2">Oil &amp; Gas</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Offshore PSV Calibration Success</h3>
<p className="text-xs text-slate-500 line-clamp-3">Deploying Good Gear Solutions' DNV 2.7-1 certified container platform for onsite valve testing in the North Sea.</p>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Read Analysis</span>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all group">
<div className="h-48 bg-slate-100 flex items-center justify-center border-b border-slate-100">
<iconify-icon className="text-slate-300 group-hover:text-blue-500 transition-colors" icon="solar:graph-new-linear" width="48"></iconify-icon>
</div>
<div className="p-6">
<div className="text-xs font-medium text-blue-600 mb-2">Process Industry</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Plant Efficiency Consulting</h3>
<p className="text-xs text-slate-500 line-clamp-3">Comprehensive valve audit and consulting services resulting in a 15% increase in overall plant processing efficiency.</p>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
<span className="text-xs font-medium text-slate-400">Read Analysis</span>
<iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-200" id="brochures">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Technical Documentation</h2>
<p className="mt-2 text-sm text-slate-500">Access comprehensive product specifications and guides.</p>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded border border-slate-200 text-red-500">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Ramén Ball Sector Valve Catalog</div>
<div className="text-xs text-slate-500">PDF • 4.2 MB</div>
</div>
</div>
<button className="text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded border border-slate-200 text-red-500">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Good Gear PSV Test Bench Specifications</div>
<div className="text-xs text-slate-500">PDF • 3.8 MB</div>
</div>
</div>
<button className="text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors group">
<div className="flex items-center gap-4">
<div className="p-2 bg-white rounded border border-slate-200 text-red-500">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">ASA Engineering Solutions Guide</div>
<div className="text-xs text-slate-500">PDF • 2.1 MB</div>
</div>
</div>
<button className="text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:download-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Get in Touch</h2>
<p className="text-base text-slate-600 mb-8">
                        Ready to enhance your plant efficiency? Contact our engineering team for a consultation or quote.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Headquarters</h3>
<p className="text-sm text-slate-500 mt-1">123 Industrial Park Ave, Suite 400<br/>Engineering District, Tech City</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Phone</h3>
<p className="text-sm text-slate-500 mt-1">+1 (555) 123-4567</p>
<p className="text-xs text-slate-400 mt-1">Mon-Fri 8am-6pm</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Email</h3>
<p className="text-sm text-slate-500 mt-1">info@asa-technologies.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="company">Company</label>
<input className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="company" placeholder="Company Name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="industry">Industry</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="industry">
<option>Oil &amp; Gas</option>
<option>Power</option>
<option>Chemical</option>
<option>Process</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="interest">Interest</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="interest">
<option>Ramén Valves Products</option>
<option>Good Gear Solutions</option>
<option>General Consulting</option>
<option>Request a Quote</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 bg-slate-50" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:layers-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter">ASA TECHNOLOGIES</span>
</div>
<p className="text-xs leading-relaxed max-w-xs">
                        Premier engineering solutions and consulting for the industrial sector. Delivering quality, reliability, and innovation.
                    </p>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#careers">Careers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Solutions</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-blue-400 transition-colors" href="#brands">Ramén Valves</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#brands">Good Gear Solutions</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#case-studies">Consulting</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-white mb-4">Social</h3>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 ASA Technologies. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
