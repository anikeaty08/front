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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="text-base font-medium tracking-tighter text-[#001F3F]">SHASHI<span className="text-gray-400">.AI</span></span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#001F3F] transition-colors" href="#">Platform</a>
<a className="text-[#001F3F] transition-colors" href="#">Smart Access</a>
<a className="hover:text-[#001F3F] transition-colors" href="#">Hardware</a>
</div>
<div>
<a className="text-xs font-medium bg-[#F8F9FA] text-[#001F3F] px-4 py-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors" href="#">Sign In</a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden bg-white border-b border-gray-100">
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-xl">
<div className="inline-flex items-center space-x-2 bg-[#F8F9FA] border border-gray-200 rounded-full px-3 py-1 mb-6">
<div className="w-2 h-2 rounded-full bg-[#001F3F] animate-pulse"></div>
<span className="text-xs font-medium text-[#001F3F] uppercase tracking-widest">Arrival Suite Core Module</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[#001F3F] leading-[1.1] mb-6">
                    The Phone is the Key.<br/>
<span className="text-gray-400">Access Reinvented.</span>
</h1>
<p className="text-lg text-gray-500 leading-relaxed mb-10 font-normal">
                    Eliminate plastic waste and front desk friction. Turn every guest's smartphone into a secure digital key the moment check-in is complete—no cards required.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex items-center justify-center rounded-full bg-[#001F3F] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#001F3F]/90 transition-all shadow-lg shadow-[#001F3F]/20" href="#">
                        Request an Access Demo
                    </a>
<a className="inline-flex items-center justify-center rounded-full bg-white text-[#001F3F] border border-gray-200 px-7 py-3.5 text-sm font-medium hover:bg-gray-50 transition-colors" href="#">
                        View Hardware Specs
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] bg-[#F8F9FA] rounded-3xl border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/40 to-transparent"></div>

<div className="absolute right-8 md:right-16 w-24 h-48 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col items-center justify-between py-6 z-10">
<div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
<div className="w-8 h-12 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center">
<div className="w-1 h-3 bg-gray-300 rounded-full"></div>
</div>
<iconify-icon className="text-gray-400" icon="solar:lock-keyhole-unlocked-linear" width="20"></iconify-icon>
</div>

<div className="absolute left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 w-56 h-[26rem] bg-white rounded-[2.5rem] border-[6px] border-gray-100 shadow-2xl flex flex-col p-4 z-20">
<div className="w-full h-full bg-[#001F3F] rounded-[2rem] overflow-hidden relative flex flex-col">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"></div>

<div className="flex justify-between items-center px-4 pt-4 z-10">
<span className="text-xs font-medium text-white">9:41</span>
<div className="flex space-x-1">
<iconify-icon className="text-white" icon="solar:signal-linear" width="14"></iconify-icon>
<iconify-icon className="text-white" icon="solar:battery-charge-linear" width="14"></iconify-icon>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center z-10 relative">

<div className="absolute w-48 h-48 bg-blue-400/20 rounded-full animate-ping opacity-75"></div>
<div className="absolute w-32 h-32 bg-blue-400/30 rounded-full animate-pulse"></div>

<div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg relative z-20">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#001F3F] shadow-inner">
<iconify-icon icon="solar:smartphone-update-linear" width="28"></iconify-icon>
</div>
</div>
<h3 className="text-white font-medium text-base mt-6 tracking-tight">Room 402</h3>
<p className="text-white/60 text-xs mt-1">Tap to unlock</p>
</div>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex space-x-4 z-10 opacity-40">
<iconify-icon className="text-[#001F3F] w-12 h-12" icon="solar:routing-3-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#001F3F]/5 flex items-center justify-center mb-6">
<iconify-icon className="text-[#001F3F]" icon="solar:door-open-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Frictionless Entry</h3>
<p className="text-sm text-gray-500 leading-relaxed">Provide a seamless, app-based entry experience that sets a modern tone from the first step through the door.</p>
</div>

<div className="glass-card rounded-2xl p-8 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#001F3F]/5 flex items-center justify-center mb-6">
<iconify-icon className="text-[#001F3F]" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Zero Waste</h3>
<p className="text-sm text-gray-500 leading-relaxed">Eliminate the ongoing cost and environmental impact of plastic key cards entirely from your operational budget.</p>
</div>

<div className="glass-card rounded-2xl p-8 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow">
<div className="w-12 h-12 rounded-xl bg-[#001F3F]/5 flex items-center justify-center mb-6">
<iconify-icon className="text-[#001F3F]" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#001F3F] mb-3">Instant Delivery</h3>
<p className="text-sm text-gray-500 leading-relaxed">Keys are delivered instantly to the guest's device upon check-in confirmation, securely bypassing the lobby.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 border-b border-gray-100 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-[#001F3F] mb-2">Technical Capabilities</h2>
<p className="text-sm text-gray-500">Enterprise-grade access control infrastructure.</p>
</div>
<a className="text-sm font-medium text-[#001F3F] hover:underline flex items-center" href="#">
                    Read Security Whitepaper <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">

<div className="relative">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
<iconify-icon className="text-[#001F3F] mb-5" icon="solar:fingerprint-linear" width="28"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Multi-Modal Access</h4>
<p className="text-sm text-gray-500 leading-relaxed">Support for diverse entry methods including secure PIN codes, Bluetooth (BLE), NFC tap-to-open, and biometric authentication for maximum flexibility.</p>
</div>

<div className="relative">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>
<iconify-icon className="text-[#001F3F] mb-5" icon="solar:buildings-linear" width="28"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Multi-Room Permissioning</h4>
<p className="text-sm text-gray-500 leading-relaxed">One digital key provides secure, conditional access to guest rooms, elevators, gyms, and restricted amenity areas.</p>
</div>

<div className="relative">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-100 hidden md:block"></div>
<iconify-icon className="text-[#001F3F] mb-5" icon="solar:user-speak-rounded-linear" width="28"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Secure Key Sharing</h4>
<p className="text-sm text-gray-500 leading-relaxed">Primary guests can securely generate and share temporary digital keys with additional occupants directly through the app.</p>
</div>

<div className="relative">
<div className="absolute -left-4 top-0 bottom-0 w-px bg-gray-100 hidden lg:block"></div>
<iconify-icon className="text-[#001F3F] mb-5" icon="solar:shield-check-linear" width="28"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight text-gray-900 mb-2">Cloud-Managed Security</h4>
<p className="text-sm text-gray-500 leading-relaxed">Real-time monitoring of lock battery levels, firmware status, and encrypted entry logs via a unified operational dashboard.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#F8F9FA] border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)] overflow-hidden">
<div className="flex-1 p-10 md:p-12 text-center border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center">
<div className="text-5xl md:text-6xl font-semibold tracking-tight text-[#001F3F] mb-2">$0</div>
<div className="text-xs font-medium uppercase tracking-widest text-gray-400">Annual Cost for Plastic Key Cards</div>
</div>
<div className="flex-1 p-10 md:p-12 text-center border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center bg-gradient-to-b from-transparent to-gray-50/50">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#001F3F] mb-3">INSTANT</div>
<div className="text-xs font-medium uppercase tracking-widest text-gray-400">Key Delivery Time</div>
</div>
<div className="flex-1 p-10 md:p-12 text-center flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#001F3F] mb-3">24/7</div>
<div className="text-xs font-medium uppercase tracking-widest text-gray-400">Autonomous Access Management</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#001F3F] mb-6">The Standard for Modern Access.</h2>
<p className="text-base text-gray-500 leading-relaxed mb-10 max-w-xl">
                    Deploying mobile keys shouldn't require complex middleware. Native integration with <strong className="text-gray-900 font-medium">Cloudbeds, YCS, and StayNTouch</strong> ensures secure credentialing and real-time access logs straight out of the box.
                </p>
<div className="space-y-6">
<div className="flex items-start">
<div className="mt-0.5 mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#001F3F]">
<iconify-icon icon="solar:server-square-update-linear" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-gray-900 mb-1">Direct PMS Sync</h5>
<p className="text-xs text-gray-500 leading-relaxed">Credentials generated automatically upon reservation status change.</p>
</div>
</div>
<div className="flex items-start">
<div className="mt-0.5 mr-4 flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#001F3F]">
<iconify-icon icon="solar:key-minimalistic-square-linear" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold tracking-tight text-gray-900 mb-1">Hardware Agnostic Foundation</h5>
<p className="text-xs text-gray-500 leading-relaxed">Built to work seamlessly with our proprietary locks or standard integrations.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute inset-0 bg-gradient-to-br from-[#001F3F] to-[#001122] rounded-[2rem] transform rotate-3 scale-105 opacity-10"></div>
<div className="bg-[#001F3F] rounded-[2rem] p-10 text-white shadow-2xl relative overflow-hidden border border-[#001F3F]/50">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/90 mb-6 uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                            Complete Package
                        </div>
<div className="flex items-baseline mb-8">
<span className="text-6xl font-semibold tracking-tight text-white">$8</span>
<span className="text-sm font-normal text-white/60 ml-2">/ room / month</span>
</div>
<div className="space-y-4 mb-10 pt-6 border-t border-white/10">
<div className="flex items-center text-sm text-white/90 font-medium">
<iconify-icon className="mr-3 text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Price includes smart lock hardware
                            </div>
<div className="flex items-center text-sm text-white/90 font-medium">
<iconify-icon className="mr-3 text-blue-400" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Full software &amp; dashboard access
                            </div>
<div className="flex items-center text-sm text-white/60">
<iconify-icon className="mr-3" icon="solar:info-circle-linear" width="20"></iconify-icon>
                                Professional installation is optional
                            </div>
</div>
<button className="w-full bg-white text-[#001F3F] py-3.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                            Get a Custom Quote
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#001F3F] mb-3">The Seamless Guest Journey</h2>
<p className="text-sm text-gray-500">From booking to arrival, a frictionless experience.</p>
</div>
<div className="relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-gray-100 z-0"></div>

<div className="md:hidden absolute top-6 bottom-6 left-1/2 w-[2px] bg-gray-100 -translate-x-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-5 shadow-[0_0_0_8px_rgba(255,255,255,1)]">
<iconify-icon className="text-[#001F3F]" icon="solar:smartphone-2-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-[#001F3F] mb-1">1. Digital Check-In</h4>
<p className="text-xs text-gray-500 leading-relaxed px-2">Identity verification and payment handled pre-arrival.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-5 shadow-[0_0_0_8px_rgba(255,255,255,1)]">
<iconify-icon className="text-[#001F3F]" icon="solar:key-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-[#001F3F] mb-1">2. Key Delivery</h4>
<p className="text-xs text-gray-500 leading-relaxed px-2">Secure digital key provisioned instantly to their smartphone.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#001F3F] flex items-center justify-center mb-5 shadow-[0_0_0_8px_rgba(255,255,255,1)] relative">
<div className="absolute -inset-1 bg-blue-100 rounded-full animate-ping opacity-20"></div>
<iconify-icon className="text-[#001F3F]" icon="solar:door-open-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-[#001F3F] mb-1">3. Bypass Front Desk</h4>
<p className="text-xs text-gray-500 leading-relaxed px-2">Guest heads directly to room and taps phone to unlock.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center mb-5 shadow-[0_0_0_8px_rgba(255,255,255,1)]">
<iconify-icon className="text-[#001F3F]" icon="solar:stars-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-[#001F3F] mb-1">4. Elevated Stay</h4>
<p className="text-xs text-gray-500 leading-relaxed px-2">Seamless, autonomous access to room and hotel amenities.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8F9FA] border-t border-gray-100 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#001F3F] mb-6">Ready to Unlock a Better Guest Journey?</h2>
<p className="text-lg text-gray-500 mb-10 font-normal">
                Deploy Smart Access in hours, not months, and measure the impact on your operational efficiency with a 60-day pilot.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
<a className="inline-flex items-center justify-center rounded-full bg-[#001F3F] text-white px-8 py-4 text-sm font-medium hover:bg-[#001F3F]/90 transition-all shadow-lg shadow-[#001F3F]/20" href="#">
                    Start Your Access Pilot Today
                </a>
<a className="inline-flex items-center justify-center text-[#001F3F] text-sm font-medium hover:underline" href="#">
                    Talk to an Engineer <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
<span className="text-sm font-medium tracking-tighter text-gray-900 mb-4 md:mb-0">SHASHI<span className="text-gray-400">.AI</span></span>
<div className="text-xs text-gray-400">
                © 2024 Shashi.ai. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
