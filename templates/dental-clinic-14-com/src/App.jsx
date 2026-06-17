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


document.write(new Date().getFullYear())
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-lg text-slate-900">DS</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#clinic">The Clinic</a>
<a className="hover:text-slate-900 transition-colors" href="#location">Location</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="#location">
                    Find us
                </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm active:scale-95 gap-2" href="https://wa.me/919816364267?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment." rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Book Visit
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full -z-10 pointer-events-none" style={{background: 'radial-gradient(circle at top center, rgba(59, 130, 246, 0.08) 0%, transparent 60%)'}}></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex text-xs font-medium text-blue-600 bg-blue-50 border-blue-100 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Accepting New Patients
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight">
                Modern dentistry for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">healthier smile.</span>
</h1>
<p className="mt-6 text-base md:text-xl text-slate-500 max-w-2xl mx-auto font-normal leading-relaxed">
                Welcome to Dental square-Oral and dental health care. We provide comprehensive, gentle care in a state-of-the-art environment.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center hover:bg-blue-700 transition-all active:scale-95 gap-2 text-base font-medium text-white bg-blue-600 w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="https://wa.me/919816364267?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment." rel="noopener noreferrer" target="_blank">Book your appointment </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm active:scale-95" href="#services">
                    Explore Services
                </a>
</div>
</div>
</main>

<section className="py-20 bg-white border-y border-slate-200/60" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-xl">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Care</h2>
<p className="text-sm md:text-base text-slate-500">From routine checkups to advanced procedures, our experienced team utilizes the latest technology to ensure your optimal oral health.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-all mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Preventive Care</h3>
<p className="text-sm text-slate-500 leading-relaxed">Regular checkups, professional cleanings, and oral cancer screenings to maintain a healthy foundation.</p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-all mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-sm text-slate-500 leading-relaxed">Enhance your smile with professional whitening, veneers, and aesthetic bonding procedures.</p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50/50 border border-slate-200/60 hover:border-blue-200 hover:bg-blue-50/30 transition-all">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-all mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:medical-kit-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Restorative Treatments</h3>
<p className="text-sm text-slate-500 leading-relaxed">Durable solutions including crowns, bridges, and tooth-colored fillings to restore function and appearance.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="location">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row">

<div className="p-10 md:p-12 md:w-1/2 flex flex-col justify-center bg-white relative z-10">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Visit Our Clinic</h2>
<p className="text-sm text-slate-500 mb-8">Conveniently located to serve you with the best oral health care.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-slate-400">
<iconify-icon className="text-xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Dental square</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    Oral and dental health care<br/>
                                    Bus stand, near, Chattar road,<br/>
                                    Rehan, Himachal Pradesh 176022
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-slate-400">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Contact</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                                    +91 98163 64267
                                </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0 text-slate-400">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1">Hours</h4>
<div className="text-sm text-slate-500 grid grid-cols-2 gap-x-4 gap-y-1 w-full max-w-[200px]">
<span>Mon - Sat:</span>
<span>9:00 AM - 6:00 PM</span>
<span>Sunday:</span>
<span>Closed</span>
</div>
</div>
</div>
<div className="flex items-start gap-4 pt-4 border-t border-slate-100">
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="https://maps.google.com/?q=Bus+stand,+near,+Chattar+road,+Rehan,+Himachal+Pradesh+176022" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Get Directions
                            </a>
</div>
</div>
</div>

<div className="md:w-1/2 bg-slate-50 relative min-h-[300px] border-l border-slate-100 flex items-center justify-center p-8 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative w-full max-w-sm aspect-square bg-white rounded-full border border-slate-200/80 shadow-sm flex items-center justify-center">
<div className="absolute inset-0 rounded-full border border-blue-100 scale-[1.15] opacity-50"></div>
<div className="absolute inset-0 rounded-full border border-blue-50 scale-[1.3] opacity-30"></div>
<div className="text-center">
<div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4 transform -rotate-6 shadow-sm border border-blue-100">
<iconify-icon className="text-3xl" icon="solar:map-bold-duotone" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest">Rehan, HP</p>
</div>

<div className="absolute top-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.2)]"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="tracking-tighter font-semibold text-xl text-slate-900">DS</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Advanced oral and dental health care dedicated to preserving your smile.
                    </p>
</div>
<div className="flex flex-col md:flex-row gap-10">
<div className="flex flex-col gap-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Location</h4>
<p className="text-sm text-slate-500">Bus stand, near, Chattar road</p>
<p className="text-sm text-slate-500">Rehan, Himachal Pradesh 176022</p>
</div>
<div className="flex flex-col gap-2">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Contact</h4>
<a className="text-sm text-slate-500 hover:text-blue-600 transition-colors" href="tel:+919816364267">+91 98163 64267</a>
<a className="text-sm text-slate-500 hover:text-green-600 transition-colors flex items-center gap-1" href="https://wa.me/919816364267?text=Hello,%20I%20would%20like%20to%20book%20an%20appointment." rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon> WhatsApp Us
                        </a>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                    © 20262026 Dental square. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
