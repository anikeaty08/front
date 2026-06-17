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
      

<header className="bg-slate-900 text-white sticky top-0 z-50">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-8">
<a className="flex items-center gap-2" href="#">
<iconify-icon className="text-blue-400 text-2xl" icon="solar:mountains-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xl font-medium tracking-tight">TrekSeeker</span>
</a>
<div className="hidden md:block relative group cursor-pointer">
<div className="flex items-center gap-1 text-base font-normal text-slate-300 hover:text-white transition-colors">
                            Destinations
                            <iconify-icon className="text-sm" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="hidden lg:flex flex-1 max-w-lg mx-8">
<div className="relative w-full">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-base text-slate-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-700 rounded-md leading-5 bg-slate-800 text-slate-200 placeholder-slate-400 focus:outline-none focus:bg-white focus:text-slate-900 focus:border-white transition-colors text-base font-normal" placeholder="Search our guided expeditions..." type="text"/>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-normal text-slate-300 hover:text-white transition-colors" href="#">Our Story</a>
<a className="hidden md:block text-base font-normal text-slate-300 hover:text-white transition-colors" href="#">Client Portal</a>
<a className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md text-base font-medium transition-colors" href="#">Book Consultation</a>
</div>
</div>
</div>
</header>

<div className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0">
<img alt="Mountains" className="w-full h-full object-cover object-center opacity-50" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6">
                Experience the ultimate <span className="text-blue-400">Adventure</span>
</h1>
<p className="text-lg md:text-xl font-normal text-slate-300 mb-12 max-w-2xl mx-auto">
                Join our guided expeditions to the world's most breathtaking peaks. Expertly planned, safely executed.
            </p>

<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl p-2 flex flex-col md:flex-row gap-2">

<div className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200">
<div className="flex items-center h-full px-4 text-slate-600">
<iconify-icon className="text-xl mr-2 text-slate-400" icon="solar:map-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<select className="appearance-none bg-transparent w-full cursor-pointer focus:outline-none text-base font-normal py-3">
<option>All Regions</option>
<option>Himalayas</option>
<option>Andes</option>
<option>Alps</option>
</select>
<iconify-icon className="text-sm ml-2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative flex-1 border-b md:border-b-0 md:border-r border-gray-200">
<div className="flex items-center h-full px-4 text-slate-600">
<iconify-icon className="text-xl mr-2 text-slate-400" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<select className="appearance-none bg-transparent w-full cursor-pointer focus:outline-none text-base font-normal py-3">
<option>Any Difficulty</option>
<option>Introductory</option>
<option>Moderate</option>
<option>Advanced</option>
</select>
<iconify-icon className="text-sm ml-2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative flex-[2]">
<div className="flex items-center h-full px-4">
<iconify-icon className="text-xl mr-2 text-slate-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="w-full focus:outline-none text-base font-normal py-3 placeholder-slate-400 text-slate-800" placeholder="Search itineraries..." type="text"/>
</div>
</div>

<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors w-full md:w-auto mt-2 md:mt-0">
                    SEARCH
                </button>
</div>

<div className="mt-12 flex flex-wrap justify-center gap-6">
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Trekking</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:mountains-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Alpinism</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Basecamps</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Private</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:backpack-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Equipment</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="w-12 h-12 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">
<iconify-icon className="text-xl text-slate-300 group-hover:text-white" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm text-slate-300 font-normal">Photo Tours</span>
</a>
</div>
</div>
</div>

<div className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-blue-600" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Curated Itineraries</h3>
<p className="text-base font-normal text-slate-500 mb-6 flex-grow">We offer a collection of handpicked, thoroughly tested routes globally.</p>
<a className="inline-flex items-center justify-center px-6 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors" href="#">View Routes</a>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-green-600" icon="solar:medal-ribbon-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Expert Local Guides</h3>
<p className="text-base font-normal text-slate-500 mb-6 flex-grow">Our in-house team of certified professionals ensures your safety.</p>
<a className="inline-flex items-center justify-center px-6 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors" href="#">Meet the Team</a>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-purple-600" icon="solar:compass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Tailored Experiences</h3>
<p className="text-base font-normal text-slate-500 mb-6 flex-grow">We build custom trek plans including permits, logistics, and meals.</p>
<a className="inline-flex items-center justify-center px-6 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors" href="#">Start Planning</a>
</div>

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center flex flex-col items-center hover:shadow-md transition-shadow">
<div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl text-orange-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Premium Gear</h3>
<p className="text-base font-normal text-slate-500 mb-6 flex-grow">We provide industry-leading trekking equipment for all our clients.</p>
<a className="inline-flex items-center justify-center px-6 py-2 border border-slate-200 rounded-full text-base font-medium text-slate-600 hover:bg-slate-50 transition-colors" href="#">Gear List</a>
</div>
</div>
</div>

<section className="py-16 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Our Flagship Expeditions</h2>
<p className="text-lg font-normal text-slate-500">Discover highly rated trails and expeditions hosted by our experts.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Everest Base Camp</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Hard (14 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Himalayas, Nepal</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Annapurna Circuit</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Hard (16 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Himalayas, Nepal</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Inca Trail</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mod (4 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Andes, Peru</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Kilimanjaro</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Hard (7 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Tanzania</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Tour du Mont Blanc</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mod (11 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Alps, Europe</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Patagonia O-Trek</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Hard (8 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Andes, Chile</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Zion Narrows</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mod (2 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">Utah, USA</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 group hover:shadow-md transition-all">
<div className="relative h-48 overflow-hidden">
<img alt="Trek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-5">
<div className="flex justify-between items-center mb-1">
<h4 className="text-lg font-medium tracking-tight text-slate-900">Milford Track</h4>
<span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Mod (4 Days)</span>
</div>
<p className="text-base font-normal text-slate-500">New Zealand</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors" href="#">
                    View all expeditions
                </a>
</div>
</div>
</section>

<section className="py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-2xl overflow-hidden relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 shadow-lg">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center"></div>
<div className="relative z-10 text-center md:text-left mb-8 md:mb-0 max-w-xl">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<iconify-icon className="text-xl text-blue-400" icon="solar:snowflake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base font-medium text-blue-400 tracking-wider uppercase">Winter Expeditions</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                        Book your guided winter adventure today
                    </h2>
<p className="text-lg font-normal text-slate-300 mb-6">The #1 Choice for Alpinists. Early bird booking discounts available.</p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors" href="#">
                        View Itineraries
                    </a>
</div>
<div className="relative z-10 flex gap-4">
<button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Explore more ways to adventure</h2>
<div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="relative h-96 rounded-2xl overflow-hidden group">
<img alt="Group Treks" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Join Group Treks</h3>
<div>
<a className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors" href="#">
                                View schedules <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative h-96 rounded-2xl overflow-hidden group">
<img alt="Private" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Private Expeditions</h3>
<div>
<a className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors" href="#">
                                Get a quote <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="relative h-96 rounded-2xl overflow-hidden group">
<img alt="Family" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end text-center">
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Family Adventures</h3>
<div>
<a className="inline-flex items-center justify-center px-6 py-2 bg-blue-600 text-white rounded-lg text-base font-medium hover:bg-blue-700 transition-colors" href="#">
                                Explore options <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Why Trek With Us</h2>
<p className="text-lg font-normal text-slate-500">Discover the TrekSeeker difference on every expedition.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-8 text-center flex flex-col hover:border-blue-300 transition-colors shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1">Safety First</h3>
<p className="text-base font-normal text-slate-500 mb-6">Industry-leading safety protocols.</p>
<div className="mb-6 flex-grow flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-700" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-normal text-slate-600 mb-8">Rigorous training and premium equipment for every client.</p>
<a className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg text-base font-medium hover:bg-blue-50 transition-colors" href="#">Learn More</a>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 text-center flex flex-col hover:border-blue-300 transition-colors shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1">Sustainable</h3>
<p className="text-base font-normal text-slate-500 mb-6">100% Carbon neutral operations.</p>
<div className="mb-6 flex-grow flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-700" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-normal text-slate-600 mb-8">We strictly adhere to Leave No Trace principles globally.</p>
<a className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg text-base font-medium hover:bg-blue-50 transition-colors" href="#">Our Impact</a>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 text-center flex flex-col hover:border-blue-300 transition-colors shadow-sm">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-1">Small Groups</h3>
<p className="text-base font-normal text-slate-500 mb-6">Max 8 clients per guide.</p>
<div className="mb-6 flex-grow flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-700" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-normal text-slate-600 mb-8">Ensures personal attention, flexibility, and a tighter team.</p>
<a className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-lg text-base font-medium hover:bg-blue-50 transition-colors" href="#">Meet Guides</a>
</div>

<div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 text-center flex flex-col shadow-md">
<h3 className="text-xl font-medium tracking-tight text-white mb-1">All-Inclusive</h3>
<p className="text-base font-normal text-slate-400 mb-6">We handle all the logistics.</p>
<div className="mb-6 flex-grow flex items-center justify-center">
<iconify-icon className="text-6xl text-white" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-base font-normal text-slate-300 mb-8">From airport transfers to permits and chef-prepared meals.</p>
<a className="w-full py-3 px-4 bg-white text-slate-900 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors" href="#">View Details</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">How It Works</h2>
<p className="text-lg font-normal text-slate-500 max-w-2xl mx-auto">Prepare for your next adventure in four simple steps. We provide the expertise, you bring the courage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center relative">

<div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-100 -z-10"></div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-4xl text-blue-600" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Consultation</h3>
<p className="text-base font-normal text-slate-500">Discuss your goals, experience level, and timeframe with our experts.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-4xl text-green-600" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Custom Plan</h3>
<p className="text-base font-normal text-slate-500">We design the itinerary, handle permits, and arrange all logistics.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-4xl text-orange-600" icon="solar:backpack-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Preparation</h3>
<p className="text-base font-normal text-slate-500">We provide detailed training guides and exact equipment checklists.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 mx-auto bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-4xl text-purple-600" icon="solar:mountains-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">The Expedition</h3>
<p className="text-base font-normal text-slate-500">Meet your guide at basecamp and hit the trail with absolute confidence.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 overflow-hidden relative border-t border-gray-200">

<div className="absolute bottom-0 w-full h-32 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjE0IDIgMTggNiA3IDE5IDMgMTkgMyAxNSAxNCAyIj48L3BvbHlnb24+PC9zdmc+')] opacity-50 z-0"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 flex justify-center lg:justify-end relative">
<div className="w-64 h-[500px] bg-slate-800 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden relative z-20 transform -rotate-6">
<div className="absolute top-0 inset-x-0 h-6 bg-slate-900 rounded-b-xl w-32 mx-auto z-30"></div>

<div className="w-full h-full bg-slate-50 flex flex-col">
<div className="h-20 bg-blue-600 p-4 text-white">
<div className="w-full bg-white/20 h-8 rounded mt-4"></div>
</div>
<div className="p-4 space-y-4 flex-grow">
<div className="w-full h-32 bg-slate-200 rounded-lg"></div>
<div className="w-3/4 h-4 bg-slate-200 rounded"></div>
<div className="w-1/2 h-4 bg-slate-200 rounded"></div>
<div className="w-full h-24 bg-slate-200 rounded-lg mt-8"></div>
</div>
</div>
</div>
<div className="w-64 h-[500px] bg-white rounded-[3rem] border-[8px] border-slate-200 shadow-xl overflow-hidden absolute top-12 -right-12 z-10 transform rotate-6 hidden md:block">
<div className="absolute top-0 inset-x-0 h-6 bg-slate-200 rounded-b-xl w-32 mx-auto z-30"></div>

<div className="w-full h-full bg-white flex flex-col border border-slate-100">
<img className="h-48 object-cover" src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="p-4 space-y-3">
<div className="w-2/3 h-5 bg-slate-200 rounded"></div>
<div className="w-full h-3 bg-slate-100 rounded"></div>
<div className="w-full h-3 bg-slate-100 rounded"></div>
<div className="w-4/5 h-3 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
                        Manage your expedition seamlessly. Get the Client App.
                    </h2>
<ul className="space-y-4 mb-8">
<li className="flex items-start">
<iconify-icon className="text-2xl text-blue-600 mr-3 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-lg font-normal text-slate-600">Access your full daily itinerary and packing list</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-blue-600 mr-3 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-lg font-normal text-slate-600">Download customized topographic maps for offline use</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-blue-600 mr-3 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-lg font-normal text-slate-600">Directly message your guide before the trip</span>
</li>
<li className="flex items-start">
<iconify-icon className="text-2xl text-blue-600 mr-3 shrink-0 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '2'}}></iconify-icon>
<span className="text-lg font-normal text-slate-600">Emergency SOS and live location sharing features</span>
</li>
</ul>
<p className="text-base font-normal text-slate-500 mb-6">Exclusively for booked clients. Open the link on your phone to install.</p>
<div className="flex flex-wrap gap-4">
<a className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition" href="#">
<iconify-icon className="text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-left">
<div className="text-xs font-normal">GET IT ON</div>
<div className="text-base font-medium leading-tight">Google Play</div>
</div>
</a>
<a className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-3 hover:bg-slate-800 transition" href="#">
<iconify-icon className="text-2xl" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-left">
<div className="text-xs font-normal">Download on the</div>
<div className="text-base font-medium leading-tight">App Store</div>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-emerald-800 py-10 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between">
<div className="flex items-center gap-3 mb-6 md:mb-0">
<iconify-icon className="text-3xl text-emerald-300" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-2xl font-medium tracking-tight text-white">
                    Ready to start planning? <span className="font-normal text-emerald-200">Speak with our expedition experts.</span>
</h3>
</div>
<a className="bg-white text-emerald-900 px-8 py-3 rounded-lg text-base font-medium hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap" href="#">
                CONTACT US
            </a>
</div>
</section>

<section className="bg-blue-700 py-20 relative overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Join our upcoming informational webinars</h2>
<p className="text-lg font-normal text-blue-100 mb-8 max-w-2xl mx-auto">
                Learn everything you need to know about our upcoming season, new destinations, and required training protocols directly from our lead guides.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3 border border-white text-white rounded-lg text-base font-medium hover:bg-white hover:text-blue-700 transition-colors" href="#">
                REGISTER NOW <iconify-icon className="ml-2" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 text-slate-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pb-12 border-b border-slate-800 mb-12 text-lg">
<div className="flex items-center gap-2">
<span className="text-slate-400 font-normal">Expedition Support:</span>
<span className="font-medium text-white">+1 800 5426 244</span>
</div>
<div className="hidden md:block w-px h-6 bg-slate-700"></div>
<div className="flex items-center gap-2">
<span className="text-slate-400 font-normal">Email:</span>
<span className="font-medium text-white">expeditions@trekseeker.com</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

<div className="col-span-2 lg:col-span-1">
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Destinations</h4>
<ul className="space-y-3 font-normal">
<li><a className="text-base hover:text-white transition-colors" href="#">Himalayas, Nepal</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Andes, South America</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Alps, Europe</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Rockies, North America</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Patagonia</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1">
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Expeditions</h4>
<ul className="space-y-3 font-normal">
<li><a className="text-base hover:text-white transition-colors" href="#">Guided Groups</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Private Charters</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Winter Ascents</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Family Adventures</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Photography Tours</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1">
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Resources</h4>
<ul className="space-y-3 font-normal">
<li><a className="text-base hover:text-white transition-colors" href="#">Gear Checklists</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Training Plans</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Permit Information</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Altitude Advice</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Expedition Blog</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1">
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Company</h4>
<ul className="space-y-3 font-normal">
<li><a className="text-base hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Careers / Guides</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-1">
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Client App</h4>
<div className="flex flex-col gap-3 mb-6">
<a className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-700 transition" href="#">
<iconify-icon className="text-base" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal">Google Play</span>
</a>
<a className="bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-slate-700 transition" href="#">
<iconify-icon className="text-base" icon="solar:apple-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-normal">App Store</span>
</a>
</div>
<h4 className="text-sm font-medium text-white tracking-wider uppercase mb-4">Follow Us</h4>
<div className="flex gap-4 font-normal text-sm">
<a className="text-slate-400 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Facebook</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Instagram</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-wrap justify-center gap-4 text-sm font-normal text-slate-500">
<a className="hover:text-slate-300" href="#">Australia</a>
<a className="hover:text-slate-300" href="#">UK</a>
<a className="hover:text-slate-300" href="#">USA</a>
<a className="hover:text-slate-300" href="#">India</a>
<a className="hover:text-slate-300" href="#">Germany</a>
<a className="hover:text-slate-300" href="#">Nepal</a>
<a className="hover:text-slate-300" href="#">Peru</a>
</div>
<p className="text-sm font-normal text-slate-500 text-center">
                    Copyright © 2024 TrekSeeker Expeditions. All rights reserved.
                </p>
</div>
</div>
</footer>

    </>
  );
}
