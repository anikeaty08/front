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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-2">
<div className="bg-gray-900 text-white px-2.5 py-1.5 rounded-md font-semibold text-sm tracking-tight">AT</div>
<span className="text-lg font-semibold tracking-tight">AeroTag Assist</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#technology">Technology</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#features">Features</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#how-it-works">How It Works</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
<button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">Get Started</button>
</div>
<button className="md:hidden">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-6">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm text-gray-700">Powered by GI Technology</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">One QR Code.<br/>Infinite Intelligence.</h1>
<p className="text-xl text-gray-600 mb-8 leading-relaxed">Location-aware QR solutions that adapt to your guests' context. Inside for service, outside for loyalty.</p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2">
<span>Request Demo</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span>Watch Video</span>
</button>
</div>
</div>
<div className="relative">
<div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 p-8 lg:p-12">
<div className="bg-white rounded-xl shadow-lg p-8 mb-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Location Status</div>
<div className="text-sm font-semibold">Inside Hotel</div>
</div>
</div>
<div className="w-24 h-24 bg-gray-900 rounded-lg flex items-center justify-center">
<i className="w-16 h-16 text-white" data-lucide="qr-code"></i>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center space-x-3 text-sm text-gray-700">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
<span>Room Service Available</span>
</div>
<div className="flex items-center space-x-3 text-sm text-gray-700">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
<span>Concierge Access</span>
</div>
<div className="flex items-center space-x-3 text-sm text-gray-700">
<i className="w-4 h-4 text-green-500" data-lucide="check-circle"></i>
<span>Housekeeping Request</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl shadow-lg p-8 opacity-60">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-gray-500" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Location Status</div>
<div className="text-sm font-semibold">Outside Hotel</div>
</div>
</div>
<div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
<i className="w-16 h-16 text-gray-400" data-lucide="qr-code"></i>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center space-x-3 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="gift"></i>
<span>Loyalty Rewards</span>
</div>
<div className="flex items-center space-x-3 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Book Next Stay</span>
</div>
<div className="flex items-center space-x-3 text-sm text-gray-500">
<i className="w-4 h-4" data-lucide="percent"></i>
<span>Special Offers</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-b border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mx-auto text-center mb-16">
<div className="inline-flex items-center space-x-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4 text-red-600" data-lucide="alert-circle"></i>
<span className="text-sm text-red-700 font-medium">The Problem</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Traditional QR Codes Create Chaos</h2>
<p className="text-lg text-gray-600 leading-relaxed">Hotels face operational confusion and security risks when guests retain access to service QR codes after checkout.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-red-600" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Security Risks</h3>
<p className="text-gray-600 text-sm leading-relaxed">Guests can screenshot QR links and access room services after checkout, creating unauthorized service requests.</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-orange-600" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Operational Confusion</h3>
<p className="text-gray-600 text-sm leading-relaxed">Staff receive service requests for unoccupied rooms, wasting time and resources on invalid operations.</p>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8">
<div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-amber-600" data-lucide="trending-down"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Missed Opportunities</h3>
<p className="text-gray-600 text-sm leading-relaxed">Post-stay marketing potential remains untapped with static QR systems that don't adapt to guest context.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="technology">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
<i className="w-4 h-4 text-blue-600" data-lucide="zap"></i>
<span className="text-sm text-blue-700 font-medium">Proprietary Technology</span>
</div>
<h2 className="text-4xl font-semibold tracking-tight mb-6">Meet GI Technology</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">Geo-Intelligent Technology is our proprietary layer that makes QR codes context-aware. One code, multiple intelligent experiences based on location.</p>
<div className="space-y-6">
<div className="flex space-x-4">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="radar"></i>
</div>
<div>
<h4 className="font-semibold mb-2">Location Detection</h4>
<p className="text-sm text-gray-600">Automatically detects whether guests are inside or outside your property boundaries.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="git-branch"></i>
</div>
<div>
<h4 className="font-semibold mb-2">Smart Routing</h4>
<p className="text-sm text-gray-600">Dynamically routes to appropriate services or marketing based on real-time context.</p>
</div>
</div>
<div className="flex space-x-4">
<div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold mb-2">Access Control</h4>
<p className="text-sm text-gray-600">Ensures only active guests within property can access room and guest services.</p>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
<div className="mb-8">
<div className="text-sm text-gray-400 mb-2">GI Technology Flow</div>
<div className="h-px bg-gray-700 w-full"></div>
</div>
<div className="space-y-8">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
<span className="text-sm font-semibold">1</span>
</div>
<div>
<div className="font-medium mb-1">Guest Scans QR</div>
<div className="text-sm text-gray-400">Single QR code placed in room or property</div>
</div>
</div>
<div className="ml-4 h-8 w-px bg-gray-700"></div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
<span className="text-sm font-semibold">2</span>
</div>
<div>
<div className="font-medium mb-1">Location Detected</div>
<div className="text-sm text-gray-400">GI Technology checks guest location instantly</div>
</div>
</div>
<div className="ml-4 h-8 w-px bg-gray-700"></div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
<span className="text-sm font-semibold">3</span>
</div>
<div>
<div className="font-medium mb-1">Smart Redirect</div>
<div className="text-sm text-gray-400">Routes to services (inside) or marketing (outside)</div>
</div>
</div>
<div className="ml-4 h-8 w-px bg-gray-700"></div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-green-400" data-lucide="check"></i>
</div>
<div>
<div className="font-medium mb-1">Contextual Experience</div>
<div className="text-sm text-gray-400">Guest receives relevant interface automatically</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-gray-200" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Everything You Need</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">A complete solution that adapts to your guests' journey, from check-in to loyalty.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-blue-600" data-lucide="home"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Inside Experience</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">Room service, housekeeping, spa bookings, concierge - all accessible when inside the property.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Room Service Orders</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Housekeeping Requests</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Concierge Access</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-purple-600" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Outside Experience</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">Promotions, loyalty programs, and direct booking when guests are outside the property.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Loyalty Programs</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Special Offers</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Direct Booking</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-green-600" data-lucide="shield"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Security First</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">Prevents post-checkout service requests and unauthorized access to room features.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Auto Access Control</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Location Verification</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Misuse Prevention</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-orange-600" data-lucide="minimize"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Single QR Code</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">One code for everything. No confusion, no reprints, no multiple codes to manage.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Universal Code</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Easy Management</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Cost Effective</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-indigo-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Analytics Dashboard</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">Track guest behavior, service usage, and marketing engagement in real-time.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Usage Metrics</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Guest Insights</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>ROI Tracking</span>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-gray-300 transition-colors">
<div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-pink-600" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-semibold mb-3">Instant Setup</h3>
<p className="text-gray-600 text-sm mb-4 leading-relaxed">Deploy in minutes with our plug-and-play integration. No complex installation needed.</p>
<div className="space-y-2">
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Quick Integration</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>24/7 Support</span>
</div>
<div className="flex items-center space-x-2 text-xs text-gray-500">
<i className="w-3 h-3" data-lucide="check"></i>
<span>Training Included</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">How It Works</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">See AeroTag Assist in action across different guest scenarios.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">
<div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200 p-8 lg:p-10">
<div className="flex items-center space-x-3 mb-8">
<div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm text-green-700 font-medium">Scenario 1</div>
<div className="text-xl font-semibold tracking-tight">Inside the Hotel</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-white rounded-xl p-6 border border-green-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-green-700">1</span>
</div>
<div>
<div className="font-medium mb-1">Guest Enters Room</div>
<div className="text-sm text-gray-600">Checks in and finds QR code on welcome card</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-green-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-green-700">2</span>
</div>
<div>
<div className="font-medium mb-1">Scans QR Code</div>
<div className="text-sm text-gray-600">Opens camera and scans the AeroTag code</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-green-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-green-700">3</span>
</div>
<div>
<div className="font-medium mb-1">Location Verified</div>
<div className="text-sm text-gray-600">GI Technology confirms they're inside property</div>
</div>
</div>
</div>
<div className="bg-green-600 text-white rounded-xl p-6">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<div>
<div className="font-medium mb-1">Access Services</div>
<div className="text-sm text-green-100">Full access to room service, concierge, housekeeping</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8 lg:p-10">
<div className="flex items-center space-x-3 mb-8">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="plane"></i>
</div>
<div>
<div className="text-sm text-blue-700 font-medium">Scenario 2</div>
<div className="text-xl font-semibold tracking-tight">Outside the Hotel</div>
</div>
</div>
<div className="space-y-6">
<div className="bg-white rounded-xl p-6 border border-blue-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-blue-700">1</span>
</div>
<div>
<div className="font-medium mb-1">Guest Checks Out</div>
<div className="text-sm text-gray-600">Leaves hotel but keeps QR code saved</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-blue-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-blue-700">2</span>
</div>
<div>
<div className="font-medium mb-1">Scans Later</div>
<div className="text-sm text-gray-600">Opens saved QR code from home or another location</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-blue-100">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<span className="text-sm font-semibold text-blue-700">3</span>
</div>
<div>
<div className="font-medium mb-1">Location Detected</div>
<div className="text-sm text-gray-600">GI Technology recognizes they're outside property</div>
</div>
</div>
</div>
<div className="bg-blue-600 text-white rounded-xl p-6">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4" data-lucide="gift"></i>
</div>
<div>
<div className="font-medium mb-1">Marketing &amp; Loyalty</div>
<div className="text-sm text-blue-100">Redirected to offers, rewards, and booking page</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-4">Why Hotels Choose AeroTag</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Real benefits for operations, security, and revenue.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-gray-900" data-lucide="shield-check"></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">100%</div>
<div className="text-sm text-gray-600">Security Assured</div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-gray-900" data-lucide="clock"></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">80%</div>
<div className="text-sm text-gray-600">Time Saved</div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-gray-900" data-lucide="trending-up"></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">45%</div>
<div className="text-sm text-gray-600">Revenue Increase</div>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white border border-gray-200 rounded-xl flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-gray-900" data-lucide="users"></i>
</div>
<div className="text-3xl font-semibold tracking-tight mb-2">95%</div>
<div className="text-sm text-gray-600">Guest Satisfaction</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to Transform Your Guest Experience?</h2>
<p className="text-xl text-gray-600 mb-10 leading-relaxed">Join leading hotels using GI Technology to deliver smarter, safer, and more profitable guest interactions.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2">
<span>Schedule a Demo</span>
<i className="w-5 h-5" data-lucide="calendar"></i>
</button>
<button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-medium border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center justify-center space-x-2">
<span>Contact Sales</span>
<i className="w-5 h-5" data-lucide="mail"></i>
</button>
</div>
<div className="mt-12 flex items-center justify-center space-x-8 text-sm text-gray-500">
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span>No setup fees</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span>Free trial available</span>
</div>
<div className="flex items-center space-x-2">
<i className="w-4 h-4" data-lucide="check-circle"></i>
<span>Cancel anytime</span>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-200 py-12 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<div className="flex items-center space-x-2 mb-4">
<div className="bg-gray-900 text-white px-2.5 py-1.5 rounded-md font-semibold text-sm tracking-tight">AT</div>
<span className="font-semibold tracking-tight">AeroTag Assist</span>
</div>
<p className="text-sm text-gray-600">Geo-intelligent QR solutions for modern hospitality.</p>
</div>
<div>
<div className="font-semibold mb-4 text-sm">Product</div>
<div className="space-y-3">
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Features</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Technology</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Pricing</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Integrations</a>
</div>
</div>
<div>
<div className="font-semibold mb-4 text-sm">Company</div>
<div className="space-y-3">
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Blog</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Careers</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div>
<div className="font-semibold mb-4 text-sm">Legal</div>
<div className="space-y-3">
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Privacy</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Terms</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Security</a>
<a className="block text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Compliance</a>
</div>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="text-sm text-gray-500">© 2024 AeroTag Assist. All rights reserved.</div>
<div className="flex items-center space-x-6">
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="text-gray-400 hover:text-gray-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
