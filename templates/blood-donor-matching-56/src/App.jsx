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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-1.5 cursor-pointer">
<iconify-icon className="text-red-600 text-xl" icon="solar:drop-linear"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter text-gray-900 uppercase">RoktoChai</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors" href="#">How it works</a>
<a className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors" href="#">Emergency</a>
<a className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors" href="#">About Us</a>
</div>

<div className="flex items-center space-x-4">
<a className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Sign In</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all" href="#">
                        Register
                    </a>
</div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="overflow-hidden pt-20 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
                            Need blood <br/>urgently?
                        </h1>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-red-600 mb-6">
                            Find nearby donors quickly
                        </h2>
<p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                            A simple platform that sends instant alerts to matching donors in your vicinity, connecting you when every second counts.
                        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 transition-all w-full sm:w-auto" href="#">
                                Request Blood Now
                            </a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-full shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all w-full sm:w-auto" href="#">
                                Become a Donor
                            </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-red-50 to-white rounded-[3rem] border border-red-50/50 overflow-hidden shadow-sm">
<div className="absolute inset-0 bg-grid opacity-50"></div>
</div>

<div className="relative w-64 h-[28rem] bg-white/90 backdrop-blur-sm rounded-[2.5rem] shadow-xl border border-white/50 flex flex-col overflow-hidden z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-700 ease-out">

<div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
<div className="w-20 h-2.5 bg-gray-100 rounded-full"></div>
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 relative bg-gray-50 flex items-center justify-center overflow-hidden">

<div className="absolute w-32 h-32 border border-red-200 rounded-full animate-ping" style={{animationDuration: '3s', opacity: '0.2'}}></div>
<div className="absolute w-48 h-48 border border-red-200 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s', opacity: '0.1'}}></div>

<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-red-600 border border-red-50 z-20">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="w-3 h-1 bg-red-600/20 rounded-full mt-1 blur-sm"></div>
</div>

<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
<div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-red-400 rounded-full shadow-sm"></div>
</div>

<div className="p-5 bg-white border-t border-gray-100 z-20">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
<iconify-icon className="text-xl" icon="solar:drop-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="w-24 h-3 bg-gray-800 rounded-full mb-2"></div>
<div className="w-16 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="w-full h-10 bg-red-600 rounded-xl flex items-center justify-center">
<div className="w-20 h-2 bg-white/50 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-1/4 -right-4 md:right-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-20 animate-[bounce_4s_infinite]">
<div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:wi-fi-router-linear"></iconify-icon>
</div>
<div>
<div className="w-16 h-2 bg-gray-800 rounded-full mb-1.5"></div>
<div className="w-10 h-1.5 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="absolute bottom-1/4 -left-4 md:left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 z-20 animate-[bounce_5s_infinite]">
<div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:user-circle-linear"></iconify-icon>
</div>
<div>
<div className="w-20 h-2 bg-gray-800 rounded-full mb-1.5"></div>
<div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-red-600 pt-4 pb-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-white">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl opacity-90" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase">Emergency Blood Required?</span>
</div>
<div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl opacity-90" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-sm font-medium opacity-90">Our platform matches you in minutes.</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">How RoktoChai Works</h2>
<p className="text-base text-gray-500 max-w-2xl mr-auto ml-auto">A streamlined process designed to save lives by connecting requests with donors instantly.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px bg-gray-100 -z-10"></div>

<div className="flex flex-col items-center text-center relative bg-white">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative z-10 group hover:border-red-200 hover:shadow-md transition-all">
<iconify-icon className="text-4xl text-gray-700 group-hover:text-red-600 transition-colors" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">1. Make a Request</h3>
<p className="text-sm text-gray-500">Fill out a simple form with blood group, location, and urgency level.</p>
</div>

<div className="flex flex-col items-center text-center relative bg-white">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative z-10 group hover:border-red-200 hover:shadow-md transition-all">
<iconify-icon className="text-4xl text-gray-700 group-hover:text-red-600 transition-colors" icon="solar:bell-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">2. Instant Alert</h3>
<p className="text-sm text-gray-500">Our system instantly notifies registered donors nearby with matching blood types.</p>
</div>

<div className="flex flex-col items-center text-center relative bg-white">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center mb-6 relative z-10 group hover:border-red-200 hover:shadow-md transition-all">
<iconify-icon className="text-4xl text-gray-700 group-hover:text-red-600 transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-2">3. Get Connected</h3>
<p className="text-sm text-gray-500">Available donors accept the request and you get connected directly via phone.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Why choose our platform</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-red-600" icon="solar:bolt-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-gray-900 mb-2">Lightning Fast</h4>
<p className="text-sm text-gray-500">Automated matching algorithm finds donors in milliseconds, not hours.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-red-600" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-gray-900 mb-2">Saves Time</h4>
<p className="text-sm text-gray-500">Stop scrolling social media. Reach the right people directly in emergencies.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-red-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-gray-900 mb-2">Simple &amp; Clean</h4>
<p className="text-sm text-gray-500">No complex registrations. Request or donate with just a few clicks.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-red-600" icon="solar:phone-linear"></iconify-icon>
</div>
<h4 className="text-base font-medium text-gray-900 mb-2">Direct Contact</h4>
<p className="text-sm text-gray-500">Communicate directly with verified donors ensuring privacy and clarity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square md:aspect-[4/3] flex items-center justify-center order-2 lg:order-1">

<div className="absolute inset-0 bg-red-50/50 rounded-full blur-3xl scale-75"></div>

<div className="relative w-72 h-72 bg-white rounded-[3rem] shadow-xl border border-gray-50 flex flex-col items-center justify-center z-10 p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent rounded-[3rem]"></div>

<div className="relative w-24 h-24 mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-red-100 rounded-full scale-110 opacity-50"></div>
<iconify-icon className="text-5xl text-red-600 relative z-10" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="w-32 h-3 bg-gray-100 rounded-full mb-3"></div>
<div className="w-20 h-2 bg-gray-50 rounded-full"></div>
</div>

<div className="absolute bottom-10 left-0 md:-left-4 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 flex items-center gap-3 z-20">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Life Saved</div>
<div className="text-xs text-gray-500">Just now</div>
</div>
</div>
</div>

<div className="max-w-xl order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                            Be a hero. <br/>Give the gift of life.
                        </h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Join our community of voluntary blood donors. A single donation can save up to three lives. Register today and we will only notify you when there's a genuine need in your area.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-red-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Zero spam, only urgent notifications</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Control your availability status</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-600 text-xl" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Completely private and secure</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 rounded-full shadow-sm text-base font-medium text-gray-900 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all" href="#">
                            Register as a Donor
                        </a>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center gap-8 md:gap-16">
<div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<iconify-icon className="text-xl" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Secure Platform</span>
</div>
<div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<iconify-icon className="text-xl" icon="solar:shield-user-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Verified Donors</span>
</div>
<div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">100% Free Service</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-50 border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-gray-400 text-lg" icon="solar:drop-linear"></iconify-icon>
<span className="font-semibold text-sm tracking-tighter text-gray-500 uppercase">RoktoChai</span>
</div>
<div className="flex space-x-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Contact Support</a>
</div>
<p className="text-xs text-gray-400">© 2023 RoktoChai. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
