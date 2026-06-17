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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-[#7847CB] text-white flex items-center justify-center shadow-lg shadow-[#7847CB]/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Track it</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-[#7847CB] transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-neutral-500 hover:text-[#7847CB] transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-neutral-500 hover:text-[#7847CB] transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Sign In</a>
<a className="bg-[#111111] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg flex items-center gap-2" href="#">
<iconify-icon height="18" icon="solar:download-linear" width="18"></iconify-icon>
<span>Get App</span>
</a>
</div>
</div>
</nav>
<main className="pt-24 pb-20 overflow-hidden">

<div className="max-w-7xl mx-auto px-4 sm:px-6 mb-20 md:mb-32">
<div className="bg-[#7847CB] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden min-h-[800px] md:min-h-[750px] flex flex-col md:block shadow-2xl shadow-[#7847CB]/30">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

<div className="relative z-10 max-w-2xl mt-8 md:mt-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
</span>
                        v2.0 is now live
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        One place for <br/> every parcel.
                    </h1>
<p className="text-lg md:text-xl text-white/80 font-normal leading-relaxed max-w-md mb-10">
                        Stop checking multiple websites. Follow your global and local shipments from the warehouse to your doorstep in one beautiful timeline.
                    </p>
<div className="flex flex-col sm:flex-row items-start gap-4">
<button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-200 border border-white/10 shadow-xl">
<iconify-icon icon="logos:apple" width="24"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] text-neutral-400 font-medium mb-1">Download on the</span>
<span className="text-base font-semibold">App Store</span>
</div>
</button>
<button className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform duration-200 border border-white/10 shadow-xl">
<iconify-icon icon="logos:google-play-icon" width="22"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] text-neutral-400 font-medium mb-1">GET IT ON</span>
<span className="text-base font-semibold">Google Play</span>
</div>
</button>
</div>
</div>

<div className="relative md:absolute md:top-[8%] md:-right-[5%] lg:right-[2%] mt-16 md:mt-0 flex justify-center md:justify-end scale-[0.85] md:scale-[0.8] lg:scale-90 origin-top-right">

<div className="hidden md:block absolute top-12 right-[280px] w-[340px] h-[700px] bg-white rounded-[3.5rem] border-[10px] border-white shadow-2xl rotate-[-12deg] z-0 overflow-hidden ring-1 ring-black/5 transform transition-transform hover:rotate-[-8deg] duration-500">
<div className="w-full h-full bg-neutral-50 flex flex-col relative font-sans">

<div className="h-2/3 w-full relative bg-neutral-200 overflow-hidden">

<svg className="w-full h-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 340 500">
<rect fill="#f3f4f6" height="500" width="340"></rect>
<path d="M100 -50 V 600" stroke="white" strokeWidth="12"></path>
<path d="M240 -50 V 600" stroke="white" strokeWidth="12"></path>
<path d="M-50 150 H 400" stroke="white" strokeWidth="12"></path>
<path d="M-50 350 H 400" stroke="white" strokeWidth="12"></path>

<path d="M100 150 Q 170 250 240 350" fill="none" stroke="#7847CB" stroke-dasharray="8 6" strokeWidth="4"></path>

<circle className="animate-ping" cx="240" cy="350" fill="#7847CB" fillOpacity="0.2" r="24"></circle>
<circle cx="240" cy="350" fill="#7847CB" r="8" stroke="white" strokeWidth="3"></circle>
</svg>

<div className="absolute bottom-6 left-4 right-4 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3 animate-[bounce_3s_infinite]">
<div className="w-10 h-10 rounded-full bg-[#7847CB]/10 flex items-center justify-center text-[#7847CB]">
<iconify-icon icon="solar:truck-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium">Estimated Arrival</p>
<p className="text-sm font-bold text-neutral-900">Today, 14:00 - 16:00</p>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-t-[2rem] -mt-4 relative z-10 p-6">
<div className="w-10 h-1 bg-neutral-200 rounded-full mx-auto mb-6"></div>
<div className="space-y-4">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-2.5 h-2.5 bg-[#7847CB] rounded-full"></div>
<div className="w-0.5 h-full bg-neutral-100 my-1"></div>
</div>
<div>
<p className="text-sm font-bold">Out for Delivery</p>
<p className="text-xs text-neutral-500">New York, NY</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-2.5 h-2.5 bg-neutral-300 rounded-full"></div>
</div>
<div>
<p className="text-sm font-medium text-neutral-500">Arrived at Facility</p>
<p className="text-xs text-neutral-400">Queens, NY</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-[360px] h-[740px] bg-white rounded-[3.5rem] border-[12px] border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] z-10 overflow-hidden ring-1 ring-black/5">
<div className="w-full h-full bg-white flex flex-col font-sans">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>

<div className="pt-14 px-6 pb-2 flex justify-between items-center bg-white z-10">
<button className="w-10 h-10 rounded-full hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full hover:bg-neutral-50 flex items-center justify-center text-neutral-900 transition-colors">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</button>
</div>

<div className="px-6 mb-6">
<h2 className="text-3xl font-bold text-neutral-900 tracking-tight">Track it</h2>
<div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="px-4 py-1.5 bg-[#111111] text-white rounded-full text-xs font-medium shrink-0">All (4)</button>
<button className="px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-full text-xs font-medium shrink-0 hover:bg-neutral-200">Transit</button>
<button className="px-4 py-1.5 bg-neutral-100 text-neutral-500 rounded-full text-xs font-medium shrink-0 hover:bg-neutral-200">Delivered</button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-6 pb-28 no-scrollbar space-y-4">

<div className="bg-[#F8F8FA] p-5 rounded-[24px] group cursor-pointer hover:bg-[#F2F2F5] transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#7847CB]"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-neutral-900">MacBook Pro M3</p>
<p className="text-[10px] text-neutral-400 tracking-wider">UPS • 1Z99283...</p>
</div>
</div>
<span className="text-xs font-bold text-[#7847CB] bg-[#7847CB]/10 px-2 py-1 rounded-lg">On the way</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-[#7847CB] rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 font-medium">2 days left</span>
</div>
</div>

<div className="bg-[#F8F8FA] p-5 rounded-[24px] group cursor-pointer hover:bg-[#F2F2F5] transition-colors relative overflow-hidden">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-neutral-900">Sony XM5</p>
<p className="text-[10px] text-neutral-400 tracking-wider">DHL • 882910...</p>
</div>
</div>
<span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-lg">Delivered</span>
</div>
<p className="text-xs text-neutral-500 mt-2">Delivered to front porch at 10:42 AM.</p>
</div>

<div className="bg-[#F8F8FA] p-5 rounded-[24px] group cursor-pointer hover:bg-[#F2F2F5] transition-colors relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-neutral-900 shadow-sm">
<iconify-icon icon="solar:t-shirt-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-neutral-900">Winter Jacket</p>
<p className="text-[10px] text-neutral-400 tracking-wider">FEDEX • 44921...</p>
</div>
</div>
<span className="text-xs font-bold text-orange-500 bg-orange-100 px-2 py-1 rounded-lg">Customs</span>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="flex-1 h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-orange-400 rounded-full"></div>
</div>
<span className="text-[10px] text-neutral-500 font-medium">Held</span>
</div>
</div>
</div>

<div className="absolute bottom-28 right-6 z-20">
<button className="w-14 h-14 bg-black rounded-full text-white shadow-xl shadow-black/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
<iconify-icon icon="solar:add-linear" strokeWidth="2" width="28"></iconify-icon>
</button>
</div>

<div className="absolute bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-neutral-100 pb-8 pt-4 px-8 flex justify-between items-center z-10 rounded-b-[2.5rem]">
<div className="flex flex-col items-center gap-1 text-[#7847CB]">
<iconify-icon icon="solar:box-bold" width="24"></iconify-icon>
<span className="text-[10px] font-bold">Track</span>
</div>
<div className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600">
<iconify-icon icon="solar:map-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Map</span>
</div>
<div className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-600">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Settings</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="mx-auto" icon="logos:ups" width="40"></iconify-icon>
<iconify-icon className="mx-auto" icon="logos:dhl" width="80"></iconify-icon>
<iconify-icon className="mx-auto" icon="logos:fedex" width="60"></iconify-icon>
<iconify-icon className="mx-auto" icon="simple-icons:usps" width="40"></iconify-icon>
</div>
<p className="text-center text-xs font-semibold text-neutral-400 uppercase tracking-widest mt-12">Trusted by 2M+ active shoppers</p>
</div>

<section className="max-w-7xl mx-auto px-6 mb-32" id="features">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-16 max-w-lg">Everything you need to track your deliveries.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-[#F8F8FA] border border-neutral-100 hover:border-neutral-200 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-[#7847CB]/10 text-[#7847CB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">Global Carrier Support</h3>
<p className="text-sm text-neutral-500 leading-relaxed">We automatically detect and support over 700+ carriers worldwide including local postal services.</p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-[#F8F8FA] border border-neutral-100 hover:border-neutral-200 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">Instant Notifications</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Get notified via push, email, or SMS the second your package status changes or out for delivery.</p>
</div>

<div className="group p-8 rounded-3xl bg-neutral-50 hover:bg-[#F8F8FA] border border-neutral-100 hover:border-neutral-200 transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 text-neutral-900">Home Screen Widgets</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Track your most important packages directly from your home screen without opening the app.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-32">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-800/50 to-transparent"></div>
<div className="flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7847CB]/20 text-[#9E77E3] text-xs font-semibold border border-[#7847CB]/20 mb-6">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="14"></iconify-icon>
                            Smart Shopping
                        </div>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                            Never miss a <br/>
                            delivery or a deal.
                        </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                            Track it isn't just for tracking. Organize your receipts, monitor price drops for items you want, and see delivery predictions before you buy.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-[#7847CB]" icon="solar:check-circle-bold"></iconify-icon>
                                Receipt Scanner &amp; Organizer
                            </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-[#7847CB]" icon="solar:check-circle-bold"></iconify-icon>
                                Return Reminders
                            </li>
<li className="flex items-center gap-3 text-neutral-300">
<iconify-icon className="text-[#7847CB]" icon="solar:check-circle-bold"></iconify-icon>
                                Holiday Shopping Planner
                            </li>
</ul>
</div>
<div className="w-full lg:w-1/3">

<div className="bg-white rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-center mb-6">
<span className="font-bold text-lg text-neutral-900">November</span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<span className="w-2 h-2 rounded-full bg-green-500"></span>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center mb-4">
<span className="text-xs text-neutral-400">S</span>
<span className="text-xs text-neutral-400">M</span>
<span className="text-xs text-neutral-400">T</span>
<span className="text-xs text-neutral-400">W</span>
<span className="text-xs text-neutral-400">T</span>
<span className="text-xs text-neutral-400">F</span>
<span className="text-xs text-neutral-400">S</span>
</div>
<div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm font-medium text-neutral-600 mb-6">
<span className="opacity-30">29</span><span className="opacity-30">30</span><span className="opacity-30">31</span>
<span>1</span><span>2</span><span>3</span><span>4</span>
<span>5</span><span>6</span><span>7</span><span>8</span>
<span className="relative">
                                    9
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
</span>
<span>10</span>
<span className="bg-[#7847CB] text-white rounded-lg shadow-lg shadow-[#7847CB]/40 flex items-center justify-center h-8 w-8 mx-auto -mt-1.5">11</span>
</div>
<div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 flex gap-3 items-center">
<div className="bg-[#7847CB] w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:bag-heart-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-neutral-900">Shopping Festival</p>
<p className="text-[10px] text-neutral-500">Big discounts on electronics</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-16 md:gap-24">
<div className="w-full md:w-1/2 order-2 md:order-1 relative">

<div className="absolute -top-10 -left-10 w-full h-full bg-[#F0F0F5] rounded-full filter blur-3xl opacity-50 z-0"></div>

<div className="relative z-10 bg-white p-2 rounded-[2rem] shadow-xl border border-neutral-100 transform hover:scale-[1.02] transition-transform duration-500">
<div className="relative overflow-hidden rounded-[1.8rem] aspect-[4/3] bg-neutral-100">

<svg fill="none" height="100%" viewbox="0 0 600 450" width="100%">
<rect fill="#E5E5EA" height="450" width="600"></rect>

<path d="M0 100H600" stroke="white" strokeWidth="20"></path>
<path d="M0 250H600" stroke="white" strokeWidth="20"></path>
<path d="M0 400H600" stroke="white" strokeWidth="20"></path>
<path d="M150 0V450" stroke="white" strokeWidth="20"></path>
<path d="M450 0V450" stroke="white" strokeWidth="20"></path>

<path d="M450 100 C 450 250 150 250 150 400" stroke="#7847CB" stroke-dasharray="12 8" strokeWidth="6"></path>

<circle cx="150" cy="400" fill="#7847CB" r="16" stroke="white" strokeWidth="4"></circle>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-bounce">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs font-bold text-neutral-900">Driver nearby</span>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2">
<div className="w-12 h-12 rounded-2xl bg-[#7847CB]/10 text-[#7847CB] flex items-center justify-center mb-6">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Real-time live map tracking.</h2>
<p className="text-lg text-neutral-500 leading-relaxed mb-8">
                    Don't just read the status. See it. For supported local carriers, watch the delivery truck move on the map in real-time as it approaches your address.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="mt-1 bg-green-100 rounded-full p-1 text-green-600">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900">Precise ETA</h4>
<p className="text-sm text-neutral-500">Know exactly when to be home.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-blue-100 rounded-full p-1 text-blue-600">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-900">Driver Details</h4>
<p className="text-sm text-neutral-500">See who is delivering your package.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="reviews">
<h2 className="text-center text-3xl font-semibold tracking-tight mb-12">Loved by power shoppers.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-medium text-neutral-800 mb-6 leading-relaxed">"The visual timeline is a game changer. I used to have 5 different apps for tracking, now I just copy the number and Track it does the rest."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-sm font-bold">SJ</div>
<div>
<p className="text-sm font-bold text-neutral-900">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">New York, USA</p>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-[#7847CB]/5 border border-[#7847CB]/10">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-lg font-medium text-neutral-800 mb-6 leading-relaxed">"Cleanest interface I've seen in a utility app. The widget support for iOS is fantastic, I can see my deliveries without unlocking my phone."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#7847CB] flex items-center justify-center text-white text-sm font-bold">MK</div>
<div>
<p className="text-sm font-bold text-neutral-900">Mike K.</p>
<p className="text-xs text-neutral-500">London, UK</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 text-center mb-24">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">Ready to track smarter?</h2>
<p className="text-lg text-neutral-500 mb-10 max-w-xl mx-auto">Join millions of users who trust Track it for their daily deliveries. Download now for free.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="bg-black text-white px-8 py-3.5 rounded-xl hover:bg-neutral-800 transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1" href="#">
<iconify-icon icon="logos:apple" width="24"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] text-neutral-400 font-medium mb-1">Download on the</span>
<span className="text-base font-semibold">App Store</span>
</div>
</a>
<a className="bg-white text-neutral-900 border border-neutral-200 px-8 py-3.5 rounded-xl hover:bg-neutral-50 transition-all flex items-center gap-3 shadow-md hover:shadow-xl hover:-translate-y-1" href="#">
<iconify-icon icon="logos:google-play-icon" width="22"></iconify-icon>
<div className="flex flex-col items-start leading-none">
<span className="text-[10px] text-neutral-500 font-medium mb-1">GET IT ON</span>
<span className="text-base font-semibold">Google Play</span>
</div>
</a>
</div>
</section>
</main>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-lg bg-[#7847CB] text-white flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">Track it</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed">The all-in-one package tracking solution for modern shoppers. Simple, fast, and beautiful.</p>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Download</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Features</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Carriers</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#7847CB] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-neutral-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#7847CB] transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Track it Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-[#7847CB] transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-[#7847CB] transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-[#7847CB] transition-colors" href="#">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
