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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-slate-900 text-white p-1 rounded-md">
<iconify-icon height="20" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">RC SYSTEMS</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How Sparks Work</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm shadow-blue-200" href="#pricing">
                    Buy Sparks
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Remote Support Available Now
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Your Family’s Remote Tech Team — <span className="text-blue-600">Pay Only When You Need Us</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        From laptops to smart homes, get expert remote support during extended hours — evenings and weekends included. Powered by Sparks.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                            Get Help Now
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300" href="#pricing">
                            Buy Sparks
                        </a>
</div>
<div className="mt-8 flex items-center gap-4 text-xs font-medium text-slate-400">
<div className="flex -space-x-2">
<img alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<p>Trusted by 500+ families</p>
</div>
</div>
<div className="relative fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 bg-slate-100 aspect-[4/3]">
<img alt="Family using laptop together" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 border border-slate-100 shadow-lg flex items-center gap-4">
<div className="bg-green-100 text-green-600 p-2 rounded-lg">
<iconify-icon height="24" icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Issue Resolved</p>
<p className="text-xs text-slate-500">Wi-Fi connectivity restored in 15 mins</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">How Sparks Work</h2>
<p className="text-slate-500 text-lg">A flexible currency for modern support. No monthly subscriptions if you don't need them. Pay as you go.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:credit-card" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Buy Sparks</h3>
<p className="text-slate-500 leading-relaxed">Purchase Sparks in bundles. 1 Spark equals 5 minutes of expert time. They never expire and sit in your account until you need help.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Use in 10-Min Blocks</h3>
<p className="text-slate-500 leading-relaxed">Connect with an expert. Usage is deducted in 10-minute blocks (2 Sparks). Efficient, transparent billing for every session.</p>
</div>

<div className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Protect &amp; Support</h3>
<p className="text-slate-500 leading-relaxed">Get expert help for any device. From troubleshooting printers to securing your home Wi-Fi network.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-6">How do we Work?</h2>
<p className="text-slate-500 text-lg mb-10">We make tech support seamless. No hauling computers to a store. We fix it while you watch.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">1</div>
<div className="w-px h-full bg-slate-200 my-2"></div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Reach out with your issue</h4>
<p className="text-slate-500 mt-1">Contact us via chat or phone. Describe the problem you are facing with any device.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-semibold text-sm">2</div>
<div className="w-px h-full bg-slate-200 my-2"></div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Grant secure remote connection</h4>
<p className="text-slate-500 mt-1">We send a secure link. You grant one-time access so we can see your screen.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-semibold text-sm">3</div>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Watch expert resolve it</h4>
<p className="text-slate-500 mt-1">Sit back and watch the cursor move as we fix settings, remove viruses, or install software.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-100 rounded-3xl transform rotate-3 scale-95 opacity-50"></div>
<div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">

<div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wider">Secure Connection</div>
</div>
<div className="p-10 flex flex-col items-center justify-center text-center space-y-6">
<div className="flex items-center gap-8">
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="lucide:user" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-500">You</span>
</div>
<div className="flex flex-col items-center text-blue-500">
<iconify-icon className="animate-pulse" icon="lucide:arrow-right-left" width="24"></iconify-icon>
<span className="text-xs font-semibold mt-1">ENCRYPTED</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center relative">
<iconify-icon className="text-blue-600" icon="lucide:headphones" width="32"></iconify-icon>
<div className="absolute top-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<span className="text-sm font-medium text-slate-500">Expert</span>
</div>
</div>
<div className="w-full bg-slate-100 rounded-lg p-4 mt-4">
<div className="h-2 bg-slate-200 rounded w-3/4 mb-2"></div>
<div className="h-2 bg-slate-200 rounded w-1/2"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Comprehensive Support</h2>
<p className="text-slate-500 text-lg">We cover all your household technology needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:laptop" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Laptop &amp; Computers</h3>
<p className="text-sm text-slate-500">Full Windows support. Optimization, virus removal, software installation, and troubleshooting.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:smartphone" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Smartphone &amp; Tablets</h3>
<p className="text-sm text-slate-500">Android support. App configuration, email setup, storage management, and device syncing.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Smart Homes</h3>
<p className="text-sm text-slate-500">Setup and troubleshooting for Alexa, Google Home, smart lights, thermostats, and IoT devices.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wifi" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Wi-Fi &amp; Connectivity</h3>
<p className="text-sm text-slate-500">Fixing dead zones, slow speeds, Bluetooth pairing issues, and network security configuration.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:activity" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Continuous Tech Monitoring</h3>
<p className="text-sm text-slate-500">24/7 Protection to catch issues before they become problems. Automated health checks.</p>
</div>

<div className="p-6 rounded-xl border border-slate-200 bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
<div className="w-10 h-10 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:credit-card" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Credit &amp; Identity Monitoring</h3>
<p className="text-sm text-slate-500">Safeguard your digital identity with robust monitoring services and alert systems.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 mb-4">Choose Your Pack</h2>
<p className="text-slate-500 text-lg">Purchase Sparks once, use them whenever. No expiration.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-lg font-medium text-slate-900">Starter Pack</h3>
<p className="text-slate-500 text-sm mt-1">Perfect for quick fixes.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900">$49.99</span>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="24"></iconify-icon>
<span className="font-semibold text-lg text-slate-900">12 Sparks</span>
</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>~60 minutes of support time</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Ideal for 1-2 devices</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Single issue resolution</span>
</li>
</ul>
<button className="w-full mt-8 py-2.5 px-4 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            Choose Starter Pack
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl relative transform scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">
                        MOST POPULAR
                    </div>
<h3 className="text-lg font-medium text-slate-900">Smart Pack</h3>
<p className="text-slate-500 text-sm mt-1">Best value for families.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900">$119.99</span>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="24"></iconify-icon>
<span className="font-semibold text-lg text-slate-900">30 Sparks</span>
</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>~2.5 hours of support time</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Covers Smart Home setup</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Priority queue access</span>
</li>
</ul>
<button className="w-full mt-8 py-2.5 px-4 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                            Choose Smart Pack
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<h3 className="text-lg font-medium text-slate-900">Premium Pack</h3>
<p className="text-slate-500 text-sm mt-1">Complete peace of mind.</p>
<div className="mt-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-slate-900">$219.99</span>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-amber-500" icon="lucide:zap" width="24"></iconify-icon>
<span className="font-semibold text-lg text-slate-900">60 Sparks</span>
</div>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>~5 hours of support time</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Multiple complex issues</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-blue-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon>
<span>Year-round periodic checks</span>
</li>
</ul>
<button className="w-full mt-8 py-2.5 px-4 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50 transition-colors">
                            Choose Premium Pack
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-8">What Makes Us Different</h2>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:globe" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Global Coverage</h4>
<p className="text-slate-500 text-sm mt-1">Wherever you are, our remote experts can connect and assist instantly.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Clear Communication</h4>
<p className="text-slate-500 text-sm mt-1">No jargon. We explain what's wrong and how we're fixing it in plain English.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Privacy First</h4>
<p className="text-slate-500 text-sm mt-1">Connections are encrypted. You grant access, and the session ends when you say so.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Support for All Ages</h4>
<p className="text-slate-500 text-sm mt-1">Patient, respectful support tailored for seniors and non-tech savvy users.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Real-Life Solutions</h4>
<p className="text-slate-500 text-sm mt-1">We don't just fix code; we help you print photos, organize files, and more.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Tech expert smiling" className="rounded-2xl shadow-2xl shadow-slate-200 border border-slate-100" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="flex text-amber-400">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<span className="text-xs font-bold text-slate-900">5.0 RATING</span>
</div>
<p className="text-sm text-slate-600 italic">"Finally, tech support that feels like a helpful friend rather than a call center."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6">Ready when you are.</h2>
<p className="text-slate-400 text-xl mb-10 max-w-2xl mx-auto">Start a support request in minutes. Schedule a session that fits your calendar and get started immediately.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all shadow-lg shadow-white/10" href="#">
                    Get Help Now
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-slate-700 bg-transparent rounded-lg hover:bg-slate-800 transition-all" href="#pricing">
                    See Pricing
                </a>
</div>
<div className="mt-12 pt-12 border-t border-slate-800 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:moon" width="18"></iconify-icon>
<span>Evening support available</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:calendar" width="18"></iconify-icon>
<span>Weekend sessions included</span>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="bg-slate-900 text-white p-1 rounded-md">
<iconify-icon height="16" icon="lucide:zap" width="16"></iconify-icon>
</div>
<span className="text-base font-bold tracking-tight text-slate-900">RC SYSTEMS</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Professional, patient remote technical support for your home and small business.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Navigation</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#services">Our Services</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="lucide:mail" width="16"></iconify-icon>
<span>support@rcsystems.com</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="lucide:phone" width="16"></iconify-icon>
<span>(555) 123-4567</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 RC Systems and Support, LLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="hover:text-slate-600" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-slate-600" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
