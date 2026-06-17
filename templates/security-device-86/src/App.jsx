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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-medium tracking-tight text-gray-900 flex items-center gap-2" href="#">
<i className="w-5 h-5" data-lucide="shield"></i>
                    CRFD.
                </a>
<div className="hidden md:flex items-center gap-6 text-base font-normal text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#features">Technology</a>
<a className="hover:text-gray-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-base font-normal text-gray-600 hover:text-gray-900 transition-colors hidden sm:block" href="#">Contact Sales</a>
<a className="bg-gray-900 text-white text-base font-normal px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2" href="#pricing">
                    Pre-order
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-8 text-sm font-normal text-gray-600">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    Now accepting corporate pre-orders
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gray-900 max-w-4xl leading-[1.1] mb-6">
                    Vision and access control, <br className="hidden md:block text-gray-400"/> unified in one device.
                </h1>
<p className="text-xl text-gray-500 max-w-2xl mb-10 font-normal leading-relaxed">
                    Deploy a self-contained security ecosystem instantly. HD camera, embedded RFID sensor, and automated Call &amp; SMS alerts—all built-in with zero external infrastructure required.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="bg-gray-900 text-white text-base font-normal px-8 py-3.5 rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/20 w-full sm:w-auto" href="#pricing">
                        Deploy for $150
                    </a>
<a className="bg-white text-gray-900 border border-gray-200 text-base font-normal px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm" href="#solutions">
                        View Use Cases
                    </a>
</div>

<div className="mt-20 relative w-full max-w-4xl aspect-[4/3] md:aspect-video bg-gray-100 rounded-[2rem] border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden">
<img alt="CRFD Security Device" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">Complete technology stack,<br/>inside the hardware.</h2>
<p className="text-gray-500 text-lg max-w-xl font-normal">No servers to provision, no complex wiring. Everything required for monitoring and alerting is embedded directly into the unit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Standalone Architecture</h3>
<p className="text-base text-gray-500 font-normal mt-auto">Process RFID scans and video locally. The system operates independently, minimizing points of failure.</p>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full lg:col-span-2">
<div className="flex flex-col md:flex-row gap-10 items-start md:items-center h-full">
<div className="flex-1">
<div className="w-12 h-12 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Inbuilt GSM/LTE Module</h3>
<p className="text-base text-gray-500 font-normal">Directly transmits SMS and Voice Call alerts to administrators immediately upon unauthorized access or triggered events.</p>
</div>
<div className="w-full md:w-1/2 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
<div className="flex items-center gap-4 mb-4 border-b border-gray-100 pb-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-600" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Incoming Call</p>
<p className="text-xs text-gray-500 font-normal mt-0.5">Security Device #04</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<i className="w-5 h-5 text-gray-600" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs text-gray-500 font-normal mb-0.5">SMS Alert</p>
<p className="text-sm font-normal text-gray-900">RFID scan denied at Server Room A.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900">
<i className="w-6 h-6" data-lucide="id-card"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">Integrated RFID Reader</h3>
<p className="text-base text-gray-500 font-normal mt-auto">High-frequency sensor embedded directly beneath the camera housing for seamless tap-to-enter access logs.</p>
</div>

<div className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full">
<div className="w-12 h-12 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center mb-6 text-gray-900">
<i className="w-6 h-6" data-lucide="video"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">HD Surveillance</h3>
<p className="text-base text-gray-500 font-normal mt-auto">Crystal clear optics capture who is scanning the RFID card, preventing badge sharing and ensuring visual verification.</p>
</div>

<div className="bg-gray-900 rounded-[2rem] p-8 flex flex-col h-full text-white">
<div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Plug &amp; Play Setup</h3>
<p className="text-base text-gray-400 font-normal mt-auto">Mount it, power it, and insert a SIM. Configure phone numbers via a simple SMS command. Zero IT degree required.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">Engineered for critical environments.</h2>
<p className="text-gray-500 text-lg max-w-xl mx-auto font-normal">Designed to meet the stringent security and monitoring requirements of modern enterprises and healthcare facilities.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-5 mb-8">
<div className="w-14 h-14 bg-pink-50 text-pink-600 rounded-full flex items-center justify-center">
<i className="w-7 h-7" data-lucide="stethoscope"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">Hospitals &amp; Clinics</h3>
</div>
<ul className="space-y-5 mb-8">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Secure restricted areas like pharmacies and medical supply rooms.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Monitor sensitive wards with immediate alerts for unauthorized access.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Log staff movements efficiently with visual confirmation.</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-5 mb-8">
<div className="w-14 h-14 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center">
<i className="w-7 h-7" data-lucide="building-2"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight text-gray-900">Corporate Offices</h3>
</div>
<ul className="space-y-5 mb-8">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Protect server rooms and executive suites with dual-factor (Card + Camera) logging.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Streamline employee attendance with exact timestamps and visual proof.</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-gray-400 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-600 font-normal">Instant calls to security desk if a door is forced or tailgating occurs.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3"></div>
<div className="relative z-10 text-white flex-1 text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-5">Simple, transparent pricing.</h2>
<p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0 font-normal">One device. All features included. No mandatory cloud subscriptions or hidden software licensing fees.</p>
</div>
<div className="relative z-10 w-full md:w-auto">
<div className="bg-white rounded-3xl p-10 text-center shadow-2xl">
<p className="text-base font-normal text-gray-500 uppercase tracking-widest mb-3">Hardware Unit</p>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-3xl font-medium text-gray-900">$</span>
<span className="text-7xl font-medium tracking-tight text-gray-900">150</span>
</div>
<ul className="space-y-4 mb-10 text-left text-base text-gray-600 font-normal">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-900" data-lucide="check"></i> Camera &amp; RFID built-in
                                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-900" data-lucide="check"></i> Integrated Alert Module
                                </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-900" data-lucide="check"></i> 1 Year Hardware Warranty
                                </li>
</ul>
<button className="w-full bg-gray-900 text-white text-base font-normal px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
                                Pre-order Now
                            </button>
<p className="text-sm text-gray-400 mt-5 font-normal">Volume discounts available for orders &gt; 10 units.</p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-gray-900" data-lucide="shield"></i>
<span className="text-lg font-medium tracking-tight text-gray-900">CRFD.</span>
</div>
<div className="flex flex-wrap items-center justify-center gap-8 text-base text-gray-500 font-normal">
<a className="hover:text-gray-900 transition-colors" href="#">Documentation</a>
<a className="hover:text-gray-900 transition-colors" href="#">Support</a>
<a className="hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms</a>
</div>
<p className="text-sm text-gray-400 font-normal">
                © 2024 CRFD Security Technologies.
            </p>
</div>
</footer>


    </>
  );
}
