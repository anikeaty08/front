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
      

<div className="sticky top-0 z-[60] bg-[#F59E0B] text-slate-900 border-b border-black/10 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 md:gap-4">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-black/10 rounded-full px-3 py-1.5 text-xs font-extrabold tracking-wide uppercase">
<span className="text-sm">🚨</span>
<span>Open 24 Hours — Emergency Callouts</span>
</div>
<div className="flex items-center gap-1 text-sm font-black tracking-tight">
<span>Call:</span>
<a className="hover:underline decoration-2 underline-offset-2" href="tel:01316691007">0131 669 1007</a>
</div>
</div>
</div>

<nav className="relative z-40 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex flex-col leading-none select-none">
<span className="text-slate-900 font-semibold tracking-tighter text-lg uppercase">Emergency Plumbers</span>
<span className="text-slate-400 text-[10px] tracking-[0.2em] font-medium uppercase mt-0.5">Edinburgh (24/7)</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">Why Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#emergency-form">Contact</a>
<a className="inline-flex items-center gap-2 bg-[#0B1220] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:shadow-slate-200" href="tel:01316691007">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        0131 669 1007
                    </a>
</div>

<button className="md:hidden text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>
<div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-100/50 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                24/7 Emergency Plumber <br className="hidden md:block"/> in Edinburgh
            </h1>

<div className="inline-flex flex-col items-center md:items-start text-left max-w-lg mx-auto bg-white/80 backdrop-blur-sm border border-slate-200 p-4 rounded-xl mb-8 shadow-sm">
<div className="flex gap-0.5 text-[#F59E0B] mb-2 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 italic text-sm leading-relaxed opacity-90">“After trying countless other ‘emergency 24/7’ plumbers — this was the only plumber who picked up on my first try...”</p>
<span className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-wide">— Google Review</span>
</div>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                Leaks, burst pipes, toilets, heating issues and urgent repairs. Fast response, honest advice and professional workmanship.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
<a className="inline-flex justify-center items-center gap-2 bg-[#2563EB] text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-blue-600 transition-all shadow-sm hover:shadow-blue-200 hover:-translate-y-0.5" href="tel:01316691007">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call Now — 0131 669 1007
                </a>
<a className="inline-flex justify-center items-center gap-2 bg-white border border-slate-200 text-slate-700 text-base font-medium px-8 py-3.5 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all hover:border-slate-300" href="#emergency-form">
                    Get Emergency Help
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 border-t border-slate-100 pt-12 max-w-4xl mx-auto">
<div className="flex flex-col items-center gap-2 group">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Open 24 hours</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:stopwatch-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Fast response</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Emergency Callouts</span>
</div>
<div className="flex flex-col items-center gap-2 group">
<div className="p-3 bg-slate-50 rounded-full text-slate-900 mb-1 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Local Edinburgh</span>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200/60" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="flex justify-center items-center gap-1 mb-4 text-[#F59E0B]">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Trusted 24/7 emergency plumbing</h2>
<p className="text-slate-500">Customers regularly mention fast callouts, clear communication and getting problems fixed quickly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
<div className="flex gap-1 text-[#F59E0B] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-normal">“Had an issue with a leaking water tank and David was fantastic. He talked me through how to drain the tank and prevented a potential disaster. Great service and very responsive!”</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">CJ</div>
<div>
<div className="text-sm font-semibold text-slate-900">C J</div>
<div className="text-xs text-slate-400">Local Guide</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
<div className="flex gap-1 text-[#F59E0B] mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-700 leading-relaxed mb-6 font-normal">“Had a tap that basically would not shut off… I found David online who came out really quickly to assist me. Very helpful…”</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-semibold text-sm">TS</div>
<div>
<div className="text-sm font-semibold text-slate-900">TheCerberusSoul</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Emergency Plumbing Services</h2>
<p className="text-slate-500 text-lg">Available 24/7 across Edinburgh for urgent plumbing callouts and repairs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:water-drop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Burst Pipes &amp; Leaks (24/7)</h3>
<p className="text-slate-500 text-sm leading-relaxed">Fast help for urgent leaks and burst pipes to prevent water damage to your property.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Toilets, Taps &amp; Sinks</h3>
<p className="text-slate-500 text-sm leading-relaxed">Repairs and replacements for common emergency plumbing problems like non-flushing toilets.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:cylinder-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Water Tank Issues</h3>
<p className="text-slate-500 text-sm leading-relaxed">Support with leaking tanks, pressure issues and urgent repairs to restore your supply.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Blockages &amp; Drain Issues</h3>
<p className="text-slate-500 text-sm leading-relaxed">Professional unblocking services for toilets, sinks and waste pipes.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Heating &amp; Hot Water</h3>
<p className="text-slate-500 text-sm leading-relaxed">Urgent support when your hot water stops working or your heating fails.</p>
</div>

<div className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:ambulance-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Emergency Callouts</h3>
<p className="text-slate-500 text-sm leading-relaxed">Call now for immediate advice and assistance. We prioritize emergency situations.</p>
</div>
</div>
<div className="mt-12 p-4 bg-blue-50 border border-blue-100 rounded-lg flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
<iconify-icon className="text-blue-600 hidden sm:block" icon="solar:info-circle-linear" width="24"></iconify-icon>
<span className="text-blue-900 font-medium">Need an emergency plumber now?</span>
<a className="text-blue-600 font-semibold underline decoration-blue-300 underline-offset-4 hover:decoration-blue-600 transition-all" href="tel:01316691007">Call 0131 669 1007</a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Simple, fast emergency help</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-200 z-0 transform -translate-y-1/2"></div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-slate-300">1</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Request Help</h3>
<p className="text-sm text-slate-500 px-4">Call now or request a callback online.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-slate-300">2</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Quick Diagnosis</h3>
<p className="text-sm text-slate-500 px-4">We assess the issue and provide immediate advice.</p>
</div>

<div className="relative z-10 text-center">
<div className="w-24 h-24 mx-auto bg-white border border-slate-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
<span className="text-3xl font-bold text-slate-300">3</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Repair Completed</h3>
<p className="text-sm text-slate-500 px-4">Our plumber fixes the problem professionally.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-8">Why choose Emergency Plumbers?</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-600">Open 24 hours for emergencies</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-600">Fast response for urgent callouts</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-slate-600">Honest advice and clear pricing</span>
</li>
</ul>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">Areas we cover</h2>
<p className="text-slate-600 mb-6">We serve Edinburgh and surrounding areas including:</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Portobello</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Musselburgh</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Leith</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">Duddingston</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600">City Centre</span>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-[#0B1220] text-white" id="emergency-form">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Request emergency help</h2>
<p className="text-slate-400 mb-8 text-lg">If it’s urgent, call us now. If you can’t speak, send details below and we’ll call you back as soon as possible.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm text-slate-400">Call 24/7</div>
<div className="text-xl font-semibold text-white">0131 669 1007</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 text-slate-900 shadow-xl">
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="form-input block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="form-input block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="phone" name="phone" placeholder="07..." type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="postcode">Postcode</label>
<input className="form-input block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="postcode" name="postcode" placeholder="EH..." type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="issue">What’s the issue?</label>
<div className="relative">
<select className="form-select appearance-none block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="issue" name="issue">
<option>Leak/Burst Pipe</option>
<option>Toilet Issue</option>
<option>Tap Issue</option>
<option>Water Tank</option>
<option>Blockage</option>
<option>No Hot Water</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="form-textarea block w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm" id="message" name="message" placeholder="Brief details about the emergency..." rows="3"></textarea>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors" type="submit">
                            Request Call Back
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Emergency plumber in Edinburgh — 24/7</h3>
<div className="flex justify-center gap-4 mt-6">
<a className="px-5 py-2 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition-colors" href="tel:01316691007">Call Now</a>
<a className="px-5 py-2 bg-white border border-slate-300 text-slate-700 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors" href="#emergency-form">Request Call Back</a>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
<div className="text-center md:text-left">
<p className="font-medium text-slate-600 mb-1">Emergency Plumbers Edinburgh (24/7)</p>
<p>130 Vexhim Park, Edinburgh EH15 3SE</p>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 md:hidden shadow-[0_-4px_10px_rgba(0,0,0,0.05)]">
<div className="max-w-lg mx-auto grid grid-cols-2 gap-3">

<a className="flex justify-center items-center gap-2 bg-[#0B1220] text-white text-sm font-extrabold py-3.5 rounded-xl border border-slate-900 active:scale-[0.98] transition-transform" href="tel:01316691007">
<span>📞</span> Call Now
            </a>

<a className="flex justify-center items-center gap-2 bg-[#2563EB] text-white text-sm font-extrabold py-3.5 rounded-xl border border-blue-600 active:scale-[0.98] transition-transform" href="#emergency-form">
<span>🚨</span> Emergency Help
            </a>
</div>
</div>

    </>
  );
}
