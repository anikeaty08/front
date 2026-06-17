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
      

<div className="bg-lime-500 text-gray-900 text-sm py-2 text-center font-medium flex items-center justify-center gap-2 relative">
<i className="w-4 h-4" data-lucide="sparkles" style={{strokeWidth: '1.5'}}></i>
<span>Announcing Markium 2.0 — Now with advanced delivery tracking</span>
<button className="absolute right-4 md:right-8">
<i className="w-4 h-4" data-lucide="x" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="relative bg-gradient-to-b from-gray-950 via-emerald-950 to-gray-950 overflow-visible pb-64 md:pb-80">
<div className="absolute inset-0 grid-pattern"></div>
<div className="absolute inset-0 glow-effect"></div>

<nav className="relative z-50 px-6 lg:px-12 py-5">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="box" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-white text-xl font-semibold">Markium</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-white text-sm font-medium hover:text-lime-400 transition" href="#">Home</a>
<a className="text-gray-400 text-sm font-medium hover:text-lime-400 transition" href="#">Features</a>
<a className="text-gray-400 text-sm font-medium hover:text-lime-400 transition" href="#">Solutions</a>
<a className="text-gray-400 text-sm font-medium hover:text-lime-400 transition" href="#">Integrations</a>
<a className="text-gray-400 text-sm font-medium hover:text-lime-400 transition" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-gray-300 text-sm font-medium hover:text-white transition" href="#">Sign In</a>
<a className="bg-lime-500 hover:bg-lime-400 text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 transition" href="#">
                        Start Your COD Store
                        <i className="w-4 h-4" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</nav>

<div className="relative z-10 px-6 lg:px-12 pt-16 pb-8 text-center">
<div className="max-w-4xl mx-auto">
<div className="inline-flex items-center gap-2 bg-lime-500/10 border border-lime-500/30 rounded-full px-4 py-2 mb-8">
<span className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></span>
<span className="text-lime-400 text-sm font-medium">Built for Algerian COD sellers</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Take Control of Your<br/>
<span className="text-lime-400 italic font-serif">Cash On Delivery</span> Business
                </h1>
<p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Create your store, manage variant-based products, integrate delivery providers, and track COD orders — all in one platform.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-lime-500 hover:bg-lime-400 text-gray-900 text-base font-semibold px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition" href="#">
                        Start Your COD Store
                        <i className="w-5 h-5" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/20 text-white text-base font-medium px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition" href="#">
                        Learn More
                        <i className="w-5 h-5" data-lucide="arrow-up-right" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="relative z-20 px-6 lg:px-12" style={{marginTop: '-200px'}}>
<div className="max-w-5xl mx-auto">
<div className="bg-white rounded-2xl shadow-2xl shadow-black/20 border border-gray-200 overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-lime-500 rounded-md flex items-center justify-center">
<i className="w-4 h-4 text-gray-900" data-lucide="box" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="font-semibold text-gray-900">Markium</span>
</div>
<div className="hidden md:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
<button className="bg-white text-gray-900 text-sm font-medium px-4 py-1.5 rounded-md shadow-sm">Overview</button>
<button className="text-gray-500 text-sm font-medium px-4 py-1.5">Orders</button>
<button className="text-gray-500 text-sm font-medium px-4 py-1.5">Products</button>
<button className="text-gray-500 text-sm font-medium px-4 py-1.5">Deliveries</button>
<button className="text-gray-500 text-sm font-medium px-4 py-1.5">Reports</button>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-400" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<i className="w-5 h-5 text-gray-400" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
<div className="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center">
<span className="text-sm font-semibold text-lime-700">A</span>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<i className="w-5 h-5 text-amber-500" data-lucide="sun" style={{strokeWidth: '1.5'}}></i>
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight">Good morning, Ahmed</h3>
<p className="text-sm text-gray-500">Stay on top of your orders, track deliveries, and manage payments.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

<div className="bg-gray-50 rounded-xl p-5 md:col-span-1">
<div className="flex items-center justify-between mb-3">
<span className="text-sm text-gray-500">Total Balance</span>
<span className="text-xs bg-gray-200 px-2 py-1 rounded">DZD</span>
</div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">689,372.00</p>
<div className="flex items-center gap-1 mt-2">
<span className="text-xs bg-lime-100 text-lime-700 px-1.5 py-0.5 rounded font-medium">↑ 5%</span>
<span className="text-xs text-gray-400">vs last month</span>
</div>
<div className="flex gap-2 mt-4">
<button className="flex-1 bg-lime-500 text-gray-900 text-sm font-medium py-2 rounded-lg flex items-center justify-center gap-1">
<i className="w-4 h-4" data-lucide="arrow-up-down" style={{strokeWidth: '1.5'}}></i>
                                    Transfer
                                </button>
<button className="flex-1 bg-white border border-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg">
                                    Request
                                </button>
</div>
</div>

<div className="bg-lime-500 rounded-xl p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-lime-900/70">Total Earnings</span>
<i className="w-4 h-4 text-lime-900/50" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">95,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="text-xs text-lime-900/70">↑ 7% This month</span>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-500">Pending COD</span>
<i className="w-4 h-4 text-amber-500" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">70,000</p>
<div className="flex items-center gap-1 mt-2">
<span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">23 orders</span>
</div>
</div>

<div className="bg-gray-50 rounded-xl p-5">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-gray-500">Delivery Status</span>
</div>
<div className="flex items-end justify-between h-16 mt-4">
<div className="flex flex-col items-center gap-1">
<div className="w-6 bg-lime-500 rounded-t" style={{height: '45px'}}></div>
<span className="text-xs text-gray-400">Mon</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 bg-lime-500 rounded-t" style={{height: '35px'}}></div>
<span className="text-xs text-gray-400">Tue</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 bg-lime-500 rounded-t" style={{height: '55px'}}></div>
<span className="text-xs text-gray-400">Wed</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 bg-amber-400 rounded-t" style={{height: '25px'}}></div>
<span className="text-xs text-gray-400">Thu</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 bg-lime-500 rounded-t" style={{height: '60px'}}></div>
<span className="text-xs text-gray-400">Fri</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="bg-gray-50 pt-24 pb-20 px-6 lg:px-12">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<i className="w-5 h-5 text-lime-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-gray-500 uppercase tracking-wider">COD-First</span>
</div>
<p className="text-base text-gray-600">Built specifically for Cash On Delivery business models</p>
</div>
<div className="text-center md:text-left md:border-l md:border-gray-200 md:pl-12">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<i className="w-5 h-5 text-lime-500" data-lucide="map-pin" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Local Focus</span>
</div>
<p className="text-base text-gray-600">Designed for Algerian logistics and delivery providers</p>
</div>
<div className="text-center md:text-left md:border-l md:border-gray-200 md:pl-12">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<i className="w-5 h-5 text-lime-500" data-lucide="layers" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Variants</span>
</div>
<p className="text-base text-gray-600">Full support for sizes, colors, and product options</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 lg:px-12">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-sm font-medium text-lime-600 uppercase tracking-wider">Features</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mt-3 mb-4">Everything you need to run COD</h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">A complete platform designed from the ground up for Cash On Delivery e-commerce operations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="store" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Store Creation</h3>
<p className="text-base text-gray-500">Launch your online store in minutes with a clean, conversion-focused design.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Variant-Based Products</h3>
<p className="text-base text-gray-500">Manage sizes, colors, and options with intuitive variant management tools.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="clipboard-list" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">COD Order Management</h3>
<p className="text-base text-gray-500">Purpose-built workflows for processing and tracking COD orders efficiently.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="truck" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery Integration</h3>
<p className="text-base text-gray-500">Connect with local delivery providers for seamless order fulfillment.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="radar" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Order Status Tracking</h3>
<p className="text-base text-gray-500">Real-time visibility into delivery status and payment collection.</p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition group">
<div className="w-12 h-12 bg-lime-500/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-lime-500/20 transition">
<i className="w-6 h-6 text-lime-600" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Dashboard</h3>
<p className="text-base text-gray-500">All your metrics in one place — revenue, orders, deliveries, and more.</p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 px-6 lg:px-12">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="text-sm font-medium text-lime-600 uppercase tracking-wider">How It Works</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mt-3 mb-4">Start selling in three simple steps</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="text-center">
<div className="w-16 h-16 bg-white border-2 border-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-lime-500/10">
<span className="text-2xl font-semibold text-lime-600">1</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Create your store</h3>
<p className="text-base text-gray-500">Set up your store, add products with variants, and customize your branding.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white border-2 border-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-lime-500/10">
<span className="text-2xl font-semibold text-lime-600">2</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Receive COD orders</h3>
<p className="text-base text-gray-500">Customers place orders and select Cash On Delivery at checkout.</p>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white border-2 border-lime-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-lime-500/10">
<span className="text-2xl font-semibold text-lime-600">3</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Ship &amp; track payments</h3>
<p className="text-base text-gray-500">Send orders via integrated delivery and track payment collection in real-time.</p>
</div>
</div>
</div>
</section>

<section className="bg-gray-900 py-24 px-6 lg:px-12">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<span className="text-sm font-medium text-lime-400 uppercase tracking-wider">Why Markium</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mt-3 mb-6">Built for COD.<br/>Not Adapted to It.</h2>
<p className="text-lg text-gray-400 mb-8">Most e-commerce platforms treat COD as an afterthought. Markium was designed from day one for the realities of cash-based commerce.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4 text-lime-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-base text-gray-300">COD-first logic in every feature</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4 text-lime-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-base text-gray-300">No unnecessary complexity or bloated features</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4 text-lime-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-base text-gray-300">Built for local delivery reality in Algeria</p>
</div>
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-lime-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-4 h-4 text-lime-400" data-lucide="check" style={{strokeWidth: '1.5'}}></i>
</div>
<p className="text-base text-gray-300">Designed to scale with your business</p>
</div>
</div>
</div>
<div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
<div className="space-y-6">
<div className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-lime-400" data-lucide="package" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-white">Order #4521</p>
<p className="text-xs text-gray-500">Nike Air Max - Size 42</p>
</div>
</div>
<span className="text-xs font-medium bg-lime-500/20 text-lime-400 px-3 py-1 rounded-full">Delivered</span>
</div>
<div className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-amber-400" data-lucide="package" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-white">Order #4522</p>
<p className="text-xs text-gray-500">Adidas Hoodie - Black, L</p>
</div>
</div>
<span className="text-xs font-medium bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full">In Transit</span>
</div>
<div className="flex items-center justify-between p-4 bg-gray-900 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-lime-500/20 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-lime-400" data-lucide="banknote" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-medium text-white">Payment Collected</p>
<p className="text-xs text-gray-500">Order #4519 - 8,500 DZD</p>
</div>
</div>
<span className="text-xs font-medium bg-lime-500/20 text-lime-400 px-3 py-1 rounded-full">Paid</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-br from-lime-500 to-lime-600 py-24 px-6 lg:px-12">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Start Selling with Confidence</h2>
<p className="text-lg text-lime-900/70 mb-10 max-w-2xl mx-auto">Join thousands of Algerian sellers who trust Markium to power their COD business. Get started today — no credit card required.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-base font-semibold px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition shadow-lg shadow-gray-900/20" href="#">
                    Start Your COD Store
                    <i className="w-5 h-5" data-lucide="arrow-right" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-gray-900 text-base font-medium px-10 py-4 rounded-xl flex items-center justify-center gap-2 transition" href="#">
                    Contact Sales
                </a>
</div>
</div>
</section>

<footer className="bg-gray-950 py-16 px-6 lg:px-12">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-gray-900" data-lucide="box" style={{strokeWidth: '1.5'}}></i>
</div>
<span className="text-white text-lg font-semibold">Markium</span>
</div>
<p className="text-sm text-gray-500">The COD-first e-commerce platform for Algerian sellers.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Features</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Pricing</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Integrations</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Documentation</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Help Center</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Blog</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Guides</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">About</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Careers</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Privacy</a></li>
<li><a className="text-sm text-gray-500 hover:text-lime-400 transition" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-gray-500">© 2024 Markium. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-gray-500 hover:text-lime-400 transition" href="#">
<i className="w-5 h-5" data-lucide="twitter" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-500 hover:text-lime-400 transition" href="#">
<i className="w-5 h-5" data-lucide="linkedin" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-gray-500 hover:text-lime-400 transition" href="#">
<i className="w-5 h-5" data-lucide="instagram" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
