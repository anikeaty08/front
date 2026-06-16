import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-gray-50/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<i data-lucide="bus-front"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">Kaduna Line</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Schedules</a>
<a className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Manage Booking</a>
<a className="text-base font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#">Support</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-base font-medium text-gray-600 hover:text-gray-900">Log in</button>
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors shadow-sm">Sign up</button>
</div>
</div>
</nav>

<main>

<section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
<div className="max-w-4xl mx-auto text-center mb-10">
<h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
                    Book Interstate <br className="hidden md:block"/> Bus Trips Easily
                </h1>
<p className="text-lg md:text-xl text-gray-500 font-normal max-w-2xl mx-auto">
                    Safe, reliable, and convenient travel across Nigeria. Experience the new standard of road transport with Kaduna Line.
                </p>
</div>

<div className="max-w-5xl mx-auto bg-white p-3 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
<form className="grid grid-cols-1 md:grid-cols-12 gap-3">

<div className="md:col-span-4 relative group">
<div className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div className="h-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl px-4 py-3 pl-12 flex flex-col justify-center cursor-pointer border border-transparent focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">From</label>
<input className="bg-transparent w-full text-lg font-medium text-gray-900 outline-none placeholder-gray-400" placeholder="City or Station" type="text" value="Kaduna"/>
</div>
</div>

<div className="hidden md:flex md:col-span-1 items-center justify-center">
<button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-emerald-600 transition-colors" type="button">
<i className="w-4 h-4" data-lucide="arrow-left-right"></i>
</button>
</div>

<div className="md:col-span-4 relative group">
<div className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
<i className="w-5 h-5" data-lucide="navigation"></i>
</div>
<div className="h-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl px-4 py-3 pl-12 flex flex-col justify-center cursor-pointer border border-transparent focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Destination</label>
<input className="bg-transparent w-full text-lg font-medium text-gray-900 outline-none placeholder-gray-400" placeholder="Where to?" type="text"/>
</div>
</div>

<div className="md:col-span-3 flex flex-col md:flex-row gap-3">
<div className="flex-grow relative group w-full">
<div className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 group-focus-within:text-emerald-600 transition-colors">
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div className="h-full bg-gray-50 hover:bg-gray-100 transition-colors rounded-2xl px-4 py-3 pl-12 flex flex-col justify-center cursor-pointer border border-transparent focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10">
<label className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-0.5">Date</label>
<input className="bg-transparent w-full text-lg font-medium text-gray-900 outline-none placeholder-gray-400" type="text" value="Today"/>
</div>
</div>
</div>

<div className="md:col-span-12 mt-2">
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-14 rounded-2xl text-lg font-medium shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="button">
<span>Search Trips</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</form>
</div>

<div className="mt-8 flex justify-center">
<div className="flex items-center gap-3 overflow-x-auto hide-scrollbar max-w-full px-4 py-2">
<span className="text-sm font-medium text-gray-400 whitespace-nowrap">Recent:</span>
<button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-emerald-500 hover:text-emerald-700 transition-colors group whitespace-nowrap">
<span className="text-sm font-medium text-gray-600 group-hover:text-emerald-700">Kaduna <span className="text-gray-300 mx-1">→</span> Abuja</span>
<span className="text-xs text-gray-400">Tomorrow</span>
</button>
<button className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 hover:border-emerald-500 hover:text-emerald-700 transition-colors group whitespace-nowrap">
<span className="text-sm font-medium text-gray-600 group-hover:text-emerald-700">Lagos <span className="text-gray-300 mx-1">→</span> Zaria</span>
<span className="text-xs text-gray-400">24 Oct</span>
</button>
</div>
</div>
</section>

<section className="py-16 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="flex flex-col items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Reliable &amp; Safe</h3>
<p className="text-base text-gray-500 leading-relaxed">Verified drivers and tracked vehicles for your peace of mind.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Daily Departures</h3>
<p className="text-base text-gray-500 leading-relaxed">Frequent schedules morning, afternoon, and night.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="credit-card"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Secure Payment</h3>
<p className="text-base text-gray-500 leading-relaxed">Pay instantly with card, transfer, or USSD securely.</p>
</div>
</div>
<div className="flex flex-col items-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
<i className="w-6 h-6" data-lucide="map"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-1">Nationwide</h3>
<p className="text-base text-gray-500 leading-relaxed">Connecting major cities across Northern and Southern Nigeria.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-20">
<div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">

<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-sm font-medium rounded-full mb-3">Limited Offer</span>
<h3 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight mb-2">Save ₦500 on your first online booking</h3>
<p className="text-lg text-gray-600">No code needed. Discount applied automatically at checkout.</p>
</div>
<button className="relative z-10 bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors whitespace-nowrap">
                    Book Now
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex items-end justify-between mb-8">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Popular Routes</h2>
<a className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1" href="#">
                    View all <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Kaduna</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Abuja</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦4,500</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Abuja</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Lagos</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦12,000</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Kaduna</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Zaria</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦1,500</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Abuja</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Kano</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦6,000</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Lagos</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Ilorin</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦8,000</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>

<div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="flex items-start justify-between mb-8">
<div className="flex flex-col gap-1">
<span className="text-xl font-semibold text-gray-900">Jos</span>
<i className="w-4 h-4 text-gray-300" data-lucide="arrow-down"></i>
<span className="text-xl font-semibold text-gray-900">Abuja</span>
</div>
<div className="bg-gray-50 p-2 rounded-lg group-hover:bg-emerald-50 transition-colors">
<i className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 transition-colors" data-lucide="bus"></i>
</div>
</div>
<div className="flex items-center justify-between border-t border-gray-50 pt-4">
<div className="flex flex-col">
<span className="text-xs text-gray-400 font-medium uppercase">Starting from</span>
<span className="text-lg font-semibold text-gray-900">₦3,500</span>
</div>
<span className="text-emerald-600 text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                            View trips <i className="w-4 h-4" data-lucide="chevron-right"></i>
</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6">Practical Travel Tips</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
<i className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" data-lucide="clock"></i>
<div>
<span className="block text-gray-900 font-medium">Arrive 30 minutes early</span>
<span className="text-gray-500 text-base">Boarding gates close 15 minutes before departure to ensure timely takeoff.</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
<i className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" data-lucide="ticket"></i>
<div>
<span className="block text-gray-900 font-medium">Keep your ticket QR ready</span>
<span className="text-gray-500 text-base">Save your booking confirmation on your phone for a seamless check-in.</span>
</div>
</li>
<li className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
<i className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" data-lucide="briefcase"></i>
<div>
<span className="block text-gray-900 font-medium">Luggage Allowance</span>
<span className="text-gray-500 text-base">Each passenger is allowed one main bag (20kg) and one carry-on.</span>
</div>
</li>
</ul>
</div>

<div>
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6">Passenger Stories</h3>
<div className="grid grid-cols-1 gap-4">
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-1 mb-3 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-4 text-base italic">"The bus was brand new and the AC was working perfectly. We arrived in Abuja exactly on time. Best interstate experience I've had."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">E</div>
<div>
<span className="block text-sm font-semibold text-gray-900">Emeka O.</span>
<span className="block text-xs text-gray-400">Traveled Kaduna → Abuja</span>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-1 mb-3 text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-gray-600 mb-4 text-base italic">"Booking online was so fast. No wahala at the park, just showed my phone and boarded."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-medium">Z</div>
<div>
<span className="block text-sm font-semibold text-gray-900">Zainab A.</span>
<span className="block text-xs text-gray-400">Traveled Abuja → Lagos</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Help Center</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Lost &amp; Found</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Stations</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Kaduna Main</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Abuja Jabi</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Lagos Jibowu</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-base text-gray-500 hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="bus-front"></i>
</div>
<span className="text-gray-900 font-semibold text-sm">Kaduna Line</span>
</div>
<p className="text-sm text-gray-400">© 2023 Kaduna Line Transport. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-gray-400 hover:text-gray-600" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
