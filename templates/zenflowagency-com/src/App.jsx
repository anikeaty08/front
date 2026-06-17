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



      lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">

<a className="flex items-center gap-2.5 z-10 min-w-max group" href="#">

<div className="relative w-9 h-9">
<svg className="w-full h-full drop-shadow-sm" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

<path d="M20 35 L80 35 L80 80 L20 80 Z" fill="white" stroke="#2563eb" strokeLinejoin="round" strokeWidth="6"></path>
<path d="M15 35 L85 35 L80 20 L20 20 Z" fill="#2563eb" stroke="#2563eb" strokeLinejoin="round" strokeWidth="4"></path>

<path d="M20 35 C20 42 30 42 30 35 C30 42 40 42 40 35 C40 42 50 42 50 35 C50 42 60 42 60 35 C60 42 70 42 70 35 C70 42 80 42 80 35" fill="#3b82f6"></path>

<rect fill="none" height="30" stroke="#2563eb" strokeWidth="4" width="15" x="30" y="50"></rect>
<rect fill="none" height="15" stroke="#2563eb" strokeWidth="4" width="20" x="55" y="50"></rect>

<path d="M65 65 L90 90 L82 92 L80 98 L72 90 L65 92 Z" fill="#0f172a" stroke="white" strokeWidth="2"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight text-slate-900">ZenFlow</span>
<span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase">Agency</span>
</div>
</a>

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#">Home</a>
<a className="hover:text-blue-600 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-blue-600 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-blue-600 transition-colors" href="#contact">
            Contact
          </a>
</div>

<div className="flex items-center gap-4 z-10">
<a className="hidden sm:inline-flex px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-sm shadow-blue-500/20 whitespace-nowrap" href="#contact">
            Get a Free Demo
          </a>

<button className="md:hidden text-slate-500 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden bg-slate-950 hero-glow">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl animate-fade-in order-2 lg:order-1 relative z-10">
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
            Clean, modern websites
            <br/>
<span className="text-slate-500">for local trades.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 font-light leading-relaxed max-w-md">
            Help customers trust your business and contact you without hassle.
            We build sites that turn clicks into calls.
          </p>
<div className="flex flex-wrap items-center gap-3 mb-8 text-sm font-medium text-slate-300">
<span className="bg-slate-900 border border-slate-800 px-3 py-1 rounded-full text-white shadow-sm">
              $97/month
            </span>
<span className="text-slate-600">•</span>
<span>No contracts</span>
<span className="text-slate-600">•</span>
<span>Free demo</span>
</div>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/10" href="#contact">
              Get a Free Demo
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:border-slate-600 font-medium text-sm transition-all shadow-sm" href="#pricing">
              View Pricing
            </a>
</div>
</div>

<div className="relative animate-fade-in delay-200 order-1 lg:order-2">

<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-slate-950/50 border border-slate-800 group">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors duration-500 z-10"></div>
<img alt="Professional Contractor Planning" className="w-full h-[400px] lg:h-[500px] object-cover object-center transform scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1581578731117-104f2a863a86?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 z-20 bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-800 max-w-[240px] animate-fade-in delay-300">
<div className="flex items-center gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
<i className="w-5 h-5" data-lucide="phone-call"></i>
</div>
<div>
<div className="text-xs font-semibold text-white">New Lead</div>
<div className="text-[10px] text-slate-400">
                    Just now from Website
                  </div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-3/4"></div>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
<div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-800/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</header>

<section className="py-12 border-b border-slate-800 bg-slate-900/50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
<div className="flex items-start gap-4 justify-center md:justify-start group">
<div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 shrink-0 group-hover:bg-blue-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">
                Built for local service businesses
              </h3>
<p className="text-sm text-slate-400 mt-1">
                Tailored for trades, not tech companies.
              </p>
</div>
</div>
<div className="flex items-start gap-4 justify-center md:justify-start group">
<div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 shrink-0 group-hover:bg-blue-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">
                Designed for mobile and easy calls
              </h3>
<p className="text-sm text-slate-400 mt-1">
                Click-to-call buttons everywhere.
              </p>
</div>
</div>
<div className="flex items-start gap-4 justify-center md:justify-start group">
<div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500 shrink-0 group-hover:bg-blue-500/20 transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-sm font-semibold text-white">
                Simple setup. No complicated software.
              </h3>
<p className="text-sm text-slate-400 mt-1">
                We handle the tech headaches.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Serving local trades
          </h2>
<p className="text-slate-400 max-w-2xl mx-auto">
            Specialized designs for every type of service business.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="Plumber fixing sink" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505798577917-a651a48096cc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="wrench"></i>
</div>
<div>
<h3 className="font-semibold text-white">Plumbing</h3>
<p className="text-xs text-slate-500">
                  Residential &amp; Commercial
                </p>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="Electrician at panel" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1565689157206-363c8361021a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-semibold text-white">Electrical</h3>
<p className="text-xs text-slate-500">
                  Wiring, Panels &amp; Lighting
                </p>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="HVAC technician" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<div>
<h3 className="font-semibold text-white">HVAC</h3>
<p className="text-xs text-slate-500">Heating &amp; Cooling</p>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="Roofing work" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1635424970476-06830502e64d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<div>
<h3 className="font-semibold text-white">Roofing</h3>
<p className="text-xs text-slate-500">Repairs &amp; Installation</p>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="Handyman tools" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="hammer"></i>
</div>
<div>
<h3 className="font-semibold text-white">Handyman</h3>
<p className="text-xs text-slate-500">General Repairs</p>
</div>
</div>
</div>

<div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-slate-900/50 transition-all duration-300">
<div className="h-48 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 z-10 transition-colors"></div>
<img alt="Painting wall" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shrink-0 border border-slate-700">
<i className="w-5 h-5" data-lucide="paint-roller"></i>
</div>
<div>
<h3 className="font-semibold text-white">Painting</h3>
<p className="text-xs text-slate-500">Interior &amp; Exterior</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-slate-800">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            What's included
          </h2>
<p className="text-slate-400">
            Everything you need to look professional online.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 border border-green-500/20">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">
                Mobile-friendly website
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Looks perfect on phones, tablets, and desktops. Google loves
                these sites.
              </p>
</div>
</div>

<div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0 border border-blue-500/20">
<i className="w-6 h-6" data-lucide="phone-call"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">
                Click-to-call buttons
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Sticky buttons make it one tap for customers to dial your
                number.
              </p>
</div>
</div>

<div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0 border border-purple-500/20">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">Contact form</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Receive quote requests and leads directly to your email inbox.
              </p>
</div>
</div>

<div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0 border border-indigo-500/20">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">
                Simple chat widget
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Let customers message you instantly while you are on the job.
              </p>
</div>
</div>

<div className="flex gap-5 items-start p-4 rounded-xl hover:bg-slate-800 transition-colors md:col-span-2 md:w-2/3 md:mx-auto">
<div className="w-12 h-12 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-1">
                Hosting + light updates
              </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                Secure hosting included. We handle small text or image changes
                for you.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white">
            How it works
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-0 transform scale-x-75"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 shadow-sm flex items-center justify-center mb-6">
<span className="text-4xl font-semibold text-slate-700">1</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Request a free demo
            </h3>
<p className="text-sm text-slate-400 max-w-xs">
              Fill out a simple form to get started. No payment needed.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 shadow-sm flex items-center justify-center mb-6">
<span className="text-4xl font-semibold text-slate-700">2</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              We build a preview
            </h3>
<p className="text-sm text-slate-400 max-w-xs">
              See what your business looks like online with a custom mockup.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-slate-900 rounded-full border border-slate-800 shadow-sm flex items-center justify-center mb-6">
<span className="text-4xl font-semibold text-slate-700">3</span>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Go live for $97/month
            </h3>
<p className="text-sm text-slate-400 max-w-xs">
              Approve the design and launch.
            </p>
</div>
</div>
<p className="text-center text-slate-500 mt-12 font-medium">
          No contracts. Cancel anytime.
        </p>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 mb-12">

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:shadow-lg hover:shadow-slate-900 transition-shadow">
<div className="flex gap-1 text-blue-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">
              "My website looks way more professional and customers can reach me
              easily."
            </p>
<div className="flex items-center gap-4">
<img alt="Mike" className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 shadow-sm" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold text-white text-sm">
                  Mike Thompson
                </div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Thompson Plumbing
                </div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:shadow-lg hover:shadow-slate-900 transition-shadow">
<div className="flex gap-1 text-blue-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">
              "Simple, clean, and affordable. Exactly what I needed to get my
              business online."
            </p>
<div className="flex items-center gap-4">
<img alt="Jason" className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 shadow-sm" src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold text-white text-sm">Jason Miller</div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  Miller HVAC
                </div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:shadow-lg hover:shadow-slate-900 transition-shadow">
<div className="flex gap-1 text-blue-500 mb-6">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-300 mb-6 leading-relaxed">
              "Setup was fast and the site looks legit. I'm getting more leads
              from Google now."
            </p>
<div className="flex items-center gap-4">
<img alt="Chris" className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 shadow-sm" src="https://images.unsplash.com/photo-1583333338579-3692bd29d36b?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold text-white text-sm">Chris Evans</div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wide">
                  City Electric
                </div>
</div>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20" href="#contact">
            Get a Free Demo
          </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-t border-slate-800" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Simple pricing
          </h2>
<p className="text-slate-400">No hidden fees. One plan for everything.</p>
</div>
<div className="max-w-md mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl shadow-slate-900/50">
<h3 className="text-xl font-semibold text-white mb-2">Website Plan</h3>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-5xl font-bold text-white tracking-tight">
              $97
            </span>
<span className="text-slate-400">/month</span>
</div>
<p className="text-sm text-slate-500 mb-8">Cancel anytime.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
              Mobile-friendly website
            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
              Click-to-call buttons
            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
              Contact form
            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
              Simple chat widget
            </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<div className="p-0.5 rounded-full bg-green-500/20 text-green-500">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
              Hosting + updates
            </li>
</ul>
<a className="block w-full py-3.5 rounded-lg bg-white hover:bg-slate-200 text-slate-900 text-center font-semibold text-sm transition-all shadow-lg" href="#contact">
            Get a Free Demo
          </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 border-t border-slate-800" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">
            Get your free demo
          </h2>
<p className="text-slate-400">
            See exactly what your new website could look like before you pay a
            dime.
          </p>
</div>
<form className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
              Business Name
            </label>
<input className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="e.g. Austin Plumbing Co." type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
              Email Address
            </label>
<input className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="you@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-slate-400 mb-2">
              Phone Number
            </label>
<input className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors" placeholder="(512) 555-0123" type="tel"/>
</div>
<button className="w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-md shadow-blue-500/20 mt-2" type="button">
            Get a Free Demo
          </button>
<p className="text-center text-xs text-slate-500 mt-4">
            We'll text you a link to your demo within 24 hours.
          </p>
</form>
</div>
</section>

<footer className="border-t border-slate-800 bg-slate-950 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-center gap-2 group">

<div className="w-6 h-6">
<svg className="w-full h-full" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M20 35 L80 35 L80 80 L20 80 Z" fill="none" stroke="#2563eb" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M15 35 L85 35 L80 20 L20 20 Z" fill="#2563eb" stroke="#2563eb" strokeLinejoin="round" strokeWidth="4"></path>
<path d="M65 65 L90 90 L82 92 L80 98 L72 90 L65 92 Z" fill="#0f172a" stroke="white" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-bold tracking-tight text-white">ZENFLOW</span>
</div>
</div>
<p className="text-xs text-slate-500 mt-1">
            Helping trades look professional online.
          </p>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-white transition-colors" href="#contact">
            Contact
          </a>
</div>
<a className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-md transition-colors" href="#contact">
          Get a Free Demo
        </a>
</div>
</footer>


    </>
  );
}
