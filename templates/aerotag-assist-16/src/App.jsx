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

        // Switcher functionality
        const customerBtn = document.getElementById('customerBtn');
        const hotelBtn = document.getElementById('hotelBtn');
        const customerContent = document.getElementById('customerContent');
        const hotelContent = document.getElementById('hotelContent');

        customerBtn.addEventListener('click', () => {
            customerBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
            customerBtn.classList.remove('text-gray-600');
            hotelBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
            hotelBtn.classList.add('text-gray-600');
            customerContent.classList.remove('hidden');
            hotelContent.classList.add('hidden');
        });

        hotelBtn.addEventListener('click', () => {
            hotelBtn.classList.add('bg-white', 'text-gray-900', 'shadow-sm');
            hotelBtn.classList.remove('text-gray-600');
            customerBtn.classList.remove('bg-white', 'text-gray-900', 'shadow-sm');
            customerBtn.classList.add('text-gray-600');
            hotelContent.classList.remove('hidden');
            customerContent.classList.add('hidden');
            lucide.createIcons();
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2">
<div className="text-xl font-semibold tracking-tight">AeroTag<span className="text-blue-600">Assist</span></div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#benefits">Benefits</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#technology">Technology</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
<button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">Request Demo</button>
</div>
<button className="md:hidden">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full mb-6">
<i className="w-4 h-4 text-blue-600" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-blue-600">Introducing GI Technology</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">One QR Code.<br/>Infinite Possibilities.</h1>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">Location-aware QR technology that adapts to your guests' context. Inside your hotel for services, outside for marketing.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
<span>Get Started</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span>Watch Demo</span>
</button>
</div>
</div>
<div className="relative">
<div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-12 border border-gray-200">
<img alt="Hotel" className="rounded-xl shadow-2xl" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
<div className="flex items-center space-x-3">
<div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
<i className="w-8 h-8 text-white" data-lucide="qr-code"></i>
</div>
<div>
<div className="text-sm text-gray-500">Smart QR Active</div>
<div className="text-lg font-semibold">Room 247</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-50 border-y border-gray-200">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-50 border border-red-100 rounded-full mb-6">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle"></i>
<span className="text-sm font-medium text-red-600">The Problem</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Traditional QR Codes Create Operational Chaos</h2>
<p className="text-xl text-gray-600 mb-12 leading-relaxed">Guests screenshot QR codes and make service requests after checkout. Static codes can't adapt to context. Multiple codes create confusion.</p>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-red-600" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Security Risks</h3>
<p className="text-gray-600 text-sm">Post-checkout guests can still access room services</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-red-600" data-lucide="refresh-ccw"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Operational Confusion</h3>
<p className="text-gray-600 text-sm">Invalid service requests waste staff time and resources</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-red-600" data-lucide="trending-down"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Missed Opportunities</h3>
<p className="text-gray-600 text-sm">No way to engage guests after they leave the property</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="benefits">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Benefits for Everyone</h2>
<p className="text-xl text-gray-600">See how AeroTag Assist transforms the experience</p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-gray-100 rounded-lg p-1 border border-gray-200">
<button className="px-6 py-2.5 rounded-md font-medium text-sm transition-all bg-white text-gray-900 shadow-sm" id="customerBtn">
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="users"></i>
<span>For Customers</span>
</div>
</button>
<button className="px-6 py-2.5 rounded-md font-medium text-sm transition-all text-gray-600 hover:text-gray-900" id="hotelBtn">
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="building-2"></i>
<span>For Hotels</span>
</div>
</button>
</div>
</div>

<div className="transition-all duration-300" id="customerContent">
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="relative">
<img alt="Guest experience" className="rounded-xl shadow-lg border border-gray-200" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&amp;q=80"/>
<div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-xl border border-gray-100">
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm font-medium">Inside Hotel</span>
</div>
</div>
</div>
<div className="flex flex-col justify-center space-y-6">
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="smartphone"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Seamless In-Room Services</h3>
<p className="text-gray-600">Access room service, housekeeping, spa bookings, and concierge with a single scan. No apps, no passwords.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="gift"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Exclusive Offers Outside</h3>
<p className="text-gray-600">When you're away, the same QR code shows you loyalty rewards, special promotions, and easy rebooking options.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-blue-600" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Instant, Context-Aware</h3>
<p className="text-gray-600">The experience adapts automatically to your location. Always relevant, never outdated.</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden transition-all duration-300" id="hotelContent">
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Enhanced Security</h3>
<p className="text-gray-600">Location-based access control ensures only active guests can request in-room services. No more post-checkout confusion.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Unlock Marketing Potential</h3>
<p className="text-gray-600">Automatically engage past guests with promotions and loyalty programs when they're outside the hotel. Turn visitors into repeat customers.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="layers"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Single Code Simplicity</h3>
<p className="text-gray-600">One QR code per room. No reprints, no confusion, no extra costs. Update everything from your dashboard.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
<i className="w-6 h-6 text-green-600" data-lucide="bar-chart-3"></i>
</div>
<div>
<h3 className="text-lg font-semibold mb-2">Actionable Analytics</h3>
<p className="text-gray-600">Track guest engagement, service requests, and marketing performance in real-time with comprehensive insights.</p>
</div>
</div>
</div>
<div className="relative order-1 md:order-2">
<img alt="Hotel management" className="rounded-xl shadow-lg border border-gray-200" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&amp;q=80"/>
<div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl border border-gray-100">
<div className="text-sm text-gray-500 mb-1">Operational Efficiency</div>
<div className="text-2xl font-semibold text-green-600">+42%</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-y border-gray-200" id="technology">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-100 border border-blue-200 rounded-full mb-6">
<i className="w-4 h-4 text-blue-700" data-lucide="cpu"></i>
<span className="text-sm font-semibold text-blue-700">Powered by GI Technology</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight mb-4">Geo-Intelligent Technology</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">Our proprietary technology layer ensures every scan delivers a contextually relevant experience based on guest location.</p>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
<div>
<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
<div className="space-y-8">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">1</div>
<div>
<h4 className="font-semibold mb-1">Guest Scans QR Code</h4>
<p className="text-sm text-gray-600">A single QR code placed in the hotel room or on promotional materials</p>
</div>
</div>
<div className="border-l-2 border-blue-200 h-8 ml-4"></div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">2</div>
<div>
<h4 className="font-semibold mb-1">Location Detection</h4>
<p className="text-sm text-gray-600">GI Technology instantly determines if the guest is inside or outside the hotel property</p>
</div>
</div>
<div className="border-l-2 border-blue-200 h-8 ml-4"></div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-semibold text-sm">3</div>
<div>
<h4 className="font-semibold mb-1">Intelligent Redirect</h4>
<p className="text-sm text-gray-600">Automatically routes to services (inside) or marketing (outside) — seamlessly and instantly</p>
</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
<div className="text-center mb-6">
<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
<i className="w-12 h-12 text-white" data-lucide="qr-code"></i>
</div>
<div className="text-sm font-medium text-gray-500 mb-2">Single QR Code</div>
<div className="text-2xl font-semibold">Dual Functionality</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-green-50 border border-green-200 rounded-lg">
<div className="flex items-center space-x-3 mb-2">
<i className="w-5 h-5 text-green-600" data-lucide="map-pin"></i>
<span className="font-semibold text-green-900">Inside Hotel</span>
</div>
<div className="text-sm text-green-700">Room service, Housekeeping, Spa, Concierge</div>
</div>
<div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
<div className="flex items-center space-x-3 mb-2">
<i className="w-5 h-5 text-purple-600" data-lucide="globe"></i>
<span className="font-semibold text-purple-900">Outside Hotel</span>
</div>
<div className="text-sm text-purple-700">Promotions, Loyalty Programs, Direct Booking</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Everything You Need</h2>
<p className="text-xl text-gray-600">Comprehensive features designed for modern hospitality</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="map"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Location Intelligence</h3>
<p className="text-gray-600 text-sm">Automatic geo-detection for context-aware experiences without manual input</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Access Control</h3>
<p className="text-gray-600 text-sm">Prevent unauthorized service requests from former guests automatically</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Centralized Dashboard</h3>
<p className="text-gray-600 text-sm">Manage all QR codes, services, and promotions from one simple interface</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="users-2"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Guest Profiles</h3>
<p className="text-gray-600 text-sm">Build rich guest profiles based on interactions and preferences</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="megaphone"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Marketing Automation</h3>
<p className="text-gray-600 text-sm">Automatically engage past guests with targeted campaigns and offers</p>
</div>
<div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="w-6 h-6 text-blue-600" data-lucide="line-chart"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
<p className="text-gray-600 text-sm">Track performance, engagement, and ROI with detailed reporting</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
<div className="max-w-4xl mx-auto text-center text-white">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to Transform Your Guest Experience?</h2>
<p className="text-xl text-blue-100 mb-8">Join leading hotels worldwide using GI Technology to enhance operations and guest satisfaction</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">Schedule a Demo</button>
<button className="px-8 py-3 bg-blue-700 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-800 transition-colors">Contact Sales</button>
</div>
<div className="mt-12 grid grid-cols-3 gap-8 pt-12 border-t border-blue-500">
<div>
<div className="text-3xl font-semibold mb-1">500+</div>
<div className="text-blue-200 text-sm">Hotels Worldwide</div>
</div>
<div>
<div className="text-3xl font-semibold mb-1">2M+</div>
<div className="text-blue-200 text-sm">Guest Interactions</div>
</div>
<div>
<div className="text-3xl font-semibold mb-1">99.9%</div>
<div className="text-blue-200 text-sm">Uptime SLA</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 py-12 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="text-lg font-semibold tracking-tight mb-4">AeroTag<span className="text-blue-600">Assist</span></div>
<p className="text-sm text-gray-600">Geo-intelligent QR technology for modern hospitality</p>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Technology</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-gray-600">
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm text-gray-600">© 2024 AeroTag Assist. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
