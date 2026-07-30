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
      

<header className="bg-white shadow-md">
<div className="container flex mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center space-x-2">
<span className="text-3xl font-bold text-green-800">ShowTrack AI</span>
</div>
<nav className="hidden md:block font-medium space-x-6">
<a className="hover:text-green-700 text-gray-700" href="#features">Features</a>
<a className="text-gray-700 hover:text-green-700" href="#tiers">Pricing</a>
<a className="text-gray-700 hover:text-green-700" href="#contact">Contact</a>
</nav>
<a className="hover:bg-green-700 text-sm font-semibold text-white bg-green-600 rounded-lg pt-2 pr-4 pb-2 pl-4 shadow" href="#">Get Started</a>
</div>
</header>

<section className="container flex flex-col-reverse md:flex-row mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 items-center">
<div className="md:w-1/2 mt-8 md:mt-0">
<h1 className="md:text-5xl text-4xl font-extrabold text-green-900 mb-4">Smarter Animal Tracking for Exhibitors, Buyers, Teachers  & 4-H Organizations</h1>
<p className="text-lg text-gray-700 mb-6">ShowTrack AI is the cross-platform solution for tracking and managing your stock show animals’ growth, health, and show performance. Designed for iOS, Android, and Web.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Cross-platform: Web, iOS*, Android*</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Manual animal profiles & tracking (Free)</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>AI-assisted weight & muscle mass (Pro)</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Feed Reminders, Weight Tracking & Photo Journal</li>
</ul>
<a className="inline-block bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition" href="#">Try ShowTrack AI Free</a>
</div>
<div className="md:w-1/2 flex justify-center">
<img alt="Livestock" className="w-full max-w-md object-cover border-green-100 border-4 rounded-xl shadow-lg" src="https://imagizer.imageshack.com/img923/8879/r5agyW.jpg?w=1080&q=80" />
</div>
</section>

<section className="bg-white pt-16 pb-16" id="features">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-green-800 mb-8">Key Features</h2>
<div className="grid gap-10 md:grid-cols-3">
<div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z"></path><path d="M12 12V4l9 5-9 5-9-5 9-5z"></path></svg>
</div>
<h3 className="font-bold text-lg text-green-700 mb-2">Animal Profiles</h3>
<p className="text-gray-600">Easily create and manage detailed animal profiles including breed, age, and show history.</p>
</div>
<div className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.405-1.405C19.79 15.023 20 14.523 20 14c0-1.104-.896-2-2-2s-2 .896-2 2c0 .523.21 1.023.405 1.595L15 17z"></path><path d="M9 17H4l1.405-1.405C4.21 15.023 4 14.523 4 14c0-1.104.896-2 2-2s2 .896 2 2c0 .523-.21 1.023-.405 1.595L9 17z"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-bold text-lg text-blue-700 mb-2">Manual Tracking</h3>
<p className="text-gray-600">Track weight, feeding schedules, health notes, and show results, all in one place.</p>
<ul className="mt-4 space-y-2">
<li className="flex items-center"><svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Feed Reminders, Weight Tracking & Photo Journal</li>
</ul>
</div>
<div className="bg-yellow-50 p-6 rounded-lg shadow hover:shadow-lg transition">
<div className="flex items-center justify-center mb-4">
<svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l4-16M12 20l-4-16M12 20v-4M12 16l4-4M12 16l-4-4"></path></svg>
</div>
<h3 className="font-bold text-lg text-yellow-700 mb-2">AI-Assisted Analysis</h3>
<p className="text-gray-600">Unlock advanced AI features for accurate weight & muscle mass estimation with the Pro Tier. *</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gradient-to-r from-green-100 to-blue-100" id="tiers">
<div className="container mx-auto px-6">
<h2 className="text-3xl font-bold text-center text-green-900 mb-10">Choose Your Plan</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center items-center">

<div className="w-full md:w-1/3 bg-white rounded-xl shadow-xl p-8 border-t-8 border-green-500">
<h3 className="text-2xl font-semibold text-green-700 mb-2">MVP (Free)</h3>
<p className="text-gray-700 mb-6">Best for getting started with basic tracking and animal management.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Unlimited animal profiles</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Manual weight & growth tracking</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Show performance logs</li>
<li className="flex items-center"><svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Social Networks</li>
</ul>
<div className="text-3xl font-bold text-green-600 mb-4">Free</div>
<a className="block bg-green-600 text-white font-semibold py-2 rounded-lg text-center hover:bg-green-700" href="#">Start Free</a>
</div>

<div className="w-full md:w-1/3 bg-white rounded-xl shadow-2xl p-8 border-t-8 border-blue-600 relative scale-105 z-10">
<span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow">Most Popular</span>
<h3 className="text-2xl font-semibold text-blue-700 mb-2">Pro Tier</h3>
<p className="text-gray-700 mb-6">Unlock AI-powered analysis and advanced features for serious exhibitors.</p>
<ul className="mb-8 space-y-3">
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Everything in Free Tier</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>AI-assisted weight & muscle mass estimation</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Advanced analytics & reporting</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Priority support</li>
<li className="flex items-center"><svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Feed Reminders, Weight Tracking & Photo Journal</li>
</ul>
<div className="text-3xl font-bold text-blue-600 mb-4"><span className="text-lg font-normal text-gray-700">/month</span>$29</div>
<a className="block bg-blue-600 text-white font-semibold py-2 rounded-lg text-center hover:bg-blue-700" href="#">Go Pro</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="container text-center mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ready to track your animals smarter?</h2>
<p className="text-lg text-gray-700 mb-8">Sign up now and join exhibitors who trust ShowTrack AI to help their animals shine in the show ring.</p>
<a className="inline-block bg-green-600 text-white font-bold px-8 py-4 rounded-lg shadow hover:bg-green-700 transition" href="#">Get Started Free</a>
</div>
</section>

<footer className="bg-green-900 text-green-100 py-8 mt-auto">
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<div className="text-sm" id="contact">© 2025 ShowTrack AI. All rights reserved.</div>
<div className="mb-4 md:mb-0 flex items-center space-x-2">
<svg className="w-6 h-6 text-green-300" fill="currentColor" viewBox="0 0 24 24"><circle className="text-green-100" cx="12" cy="12" fill="#dcfce7" r="10"></circle><path className="text-green-300" d="M16 8c-1.5-2-5.5-2-7 0C7 10 9.5 13 12 17c2.5-4 5-7 4-9z" fill="currentColor"></path></svg>
<span className="font-bold text-lg">ShowTrack <span className="text-blue-300">AI</span></span>
</div>
<div className="space-x-4 text-sm">
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Terms</a>
<a className="hover:underline" href="mailto:info@showtrack.ai">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
