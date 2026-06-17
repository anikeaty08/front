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
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center cursor-pointer">
<span className="font-semibold tracking-tighter text-xl text-gray-900">edusphere.</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Explore</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Compare</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Admissions</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Resources</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Log in</a>
<a className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors shadow-sm" href="#">
                        For Schools
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main className="flex-grow">
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32 lg:pb-24">
<div className="mx-auto max-w-3xl">
<span className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-3 py-1 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">Admissions open for 2024-25</span>
</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight leading-tight mb-6">
                    Discover the perfect school <br className="hidden sm:block"/> for your child's journey.
                </h1>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto font-normal">
                    Comprehensive insights on 50,000+ schools across India, from Nursery to 12th. Compare curricula, facilities, and real parent reviews.
                </p>

<div className="bg-white p-2 rounded-2xl sm:rounded-full border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto focus-within:ring-2 focus-within:ring-gray-100 focus-within:border-gray-300 transition-all">

<div className="flex items-center w-full sm:w-1/3 px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-100 group">
<iconify-icon className="text-gray-400 text-xl mr-3 group-focus-within:text-gray-900 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<div className="flex-grow text-left">
<label className="block text-xs font-medium text-gray-400 mb-0.5">Location</label>
<input className="w-full bg-transparent focus:outline-none text-sm text-gray-900 placeholder-gray-300 truncate" placeholder="City or Pincode" type="text"/>
</div>
</div>

<div className="flex items-center w-full sm:w-1/3 px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-100 cursor-pointer group">
<iconify-icon className="text-gray-400 text-xl mr-3 group-hover:text-gray-900 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="flex-grow text-left">
<label className="block text-xs font-medium text-gray-400 mb-0.5">Class / Grade</label>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-900 truncate">Nursery to 12th</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center w-full sm:w-1/3 px-4 py-3 sm:py-2 cursor-pointer group">
<iconify-icon className="text-gray-400 text-xl mr-3 group-hover:text-gray-900 transition-colors" icon="solar:book-linear"></iconify-icon>
<div className="flex-grow text-left">
<label className="block text-xs font-medium text-gray-400 mb-0.5">Curriculum</label>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-900 truncate">CBSE, ICSE, IB...</span>
<iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<button className="w-full sm:w-auto mt-2 sm:mt-0 bg-gray-900 text-white rounded-xl sm:rounded-full px-8 py-3 sm:py-4 flex items-center justify-center hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
<iconify-icon className="text-lg mr-2" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm font-medium">Search</span>
</button>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-2">
<span className="text-xs text-gray-400 py-1.5 px-2">Popular searches:</span>
<a className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm" href="#">Boarding Schools</a>
<a className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm" href="#">International Schools</a>
<a className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm" href="#">Montessori</a>
<a className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full hover:border-gray-300 hover:text-gray-900 transition-all shadow-sm" href="#">Schools Near Me</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">Curriculum Board</h3>
<div className="space-y-3">

<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input checked="" className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">CBSE</span>
<span className="ml-auto text-xs text-gray-400">12k</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">ICSE / ISC</span>
<span className="ml-auto text-xs text-gray-400">4.5k</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">State Board</span>
<span className="ml-auto text-xs text-gray-400">28k</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">IB / IGCSE</span>
<span className="ml-auto text-xs text-gray-400">1.2k</span>
</label>
</div>
</div>
<div className="h-px bg-gray-200 w-full"></div>
<div>
<h3 className="text-sm font-semibold text-gray-900 mb-4 tracking-tight">School Type</h3>
<div className="space-y-3">
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input checked="" className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Co-ed</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Boys only</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<div className="relative w-4 h-4 mr-3">
<input className="absolute opacity-0 w-0 h-0" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors group-hover:border-gray-400">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity absolute pointer-events-none" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">Girls only</span>
</label>
</div>
</div>
<div className="h-px bg-gray-200 w-full"></div>

<div>
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-gray-900 tracking-tight">Annual Fee Range</h3>
<span className="text-xs font-medium text-gray-500">₹50k - ₹3L+</span>
</div>
<div className="relative w-full h-1 bg-gray-200 rounded-full mb-6">
<div className="absolute left-[10%] right-[30%] h-full bg-gray-900 rounded-full"></div>
<div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-900 rounded-full cursor-pointer shadow-sm"></div>
<div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-gray-900 rounded-full cursor-pointer shadow-sm"></div>
</div>
</div>
</aside>

<div className="flex-grow">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Featured Schools</h2>
<p className="text-sm text-gray-500 mt-1">Showing top rated institutions</p>
</div>

<div className="hidden sm:flex items-center text-sm">
<span className="text-gray-500 mr-2">Sort by:</span>
<div className="flex items-center space-x-1 cursor-pointer font-medium text-gray-900 group">
<span>Highest Rated</span>
<iconify-icon className="text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">

<div className="h-48 bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="w-full h-full flex items-center justify-center text-gray-300">
<iconify-icon className="text-6xl" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 flex space-x-2">
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">CBSE</span>
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">Day School</span>
</div>

<button className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>

<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">Delhi Public School</h3>
<div className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
<iconify-icon className="text-yellow-400 text-xs mr-1" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-gray-700">4.8</span>
</div>
</div>
<div className="flex items-center text-sm text-gray-500 mb-4">
<iconify-icon className="mr-1.5" icon="solar:map-point-linear"></iconify-icon>
<span className="truncate">R.K. Puram, New Delhi</span>
</div>
<div className="space-y-2 mb-6 flex-grow">
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Nursery - 12th Class</span>
</div>
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:wallet-money-linear"></iconify-icon>
<span>₹1.2L - ₹2.5L / year</span>
</div>
</div>
<div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Admissions Open</span>
<a className="text-sm font-medium text-gray-900 hover:underline flex items-center" href="#">
                                        View Details <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="w-full h-full flex items-center justify-center text-gray-300">
<iconify-icon className="text-6xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 flex space-x-2">
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">ICSE</span>
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">Girls Only</span>
</div>
<button className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">Loreto Convent School</h3>
<div className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
<iconify-icon className="text-yellow-400 text-xs mr-1" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-gray-700">4.9</span>
</div>
</div>
<div className="flex items-center text-sm text-gray-500 mb-4">
<iconify-icon className="mr-1.5" icon="solar:map-point-linear"></iconify-icon>
<span className="truncate">Chembur, Mumbai</span>
</div>
<div className="space-y-2 mb-6 flex-grow">
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>LKG - 10th Class</span>
</div>
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:wallet-money-linear"></iconify-icon>
<span>₹80k - ₹1.5L / year</span>
</div>
</div>
<div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Check Availability</span>
<a className="text-sm font-medium text-gray-900 hover:underline flex items-center" href="#">
                                        View Details <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group flex flex-col h-full">
<div className="h-48 bg-gray-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
<div className="w-full h-full flex items-center justify-center text-gray-300">
<iconify-icon className="text-6xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div className="absolute top-4 left-4 z-20 flex space-x-2">
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">IB</span>
<span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-2 py-1 rounded shadow-sm">Boarding</span>
</div>
<button className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="p-5 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-gray-900 tracking-tight leading-tight group-hover:text-blue-600 transition-colors">The Doon School</h3>
<div className="flex items-center bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
<iconify-icon className="text-yellow-400 text-xs mr-1" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium text-gray-700">4.7</span>
</div>
</div>
<div className="flex items-center text-sm text-gray-500 mb-4">
<iconify-icon className="mr-1.5" icon="solar:map-point-linear"></iconify-icon>
<span className="truncate">Dehradun, Uttarakhand</span>
</div>
<div className="space-y-2 mb-6 flex-grow">
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<span>7th - 12th Class</span>
</div>
<div className="flex items-center text-sm text-gray-600">
<iconify-icon className="w-5 text-gray-400 mr-2" icon="solar:wallet-money-linear"></iconify-icon>
<span>₹10L+ / year</span>
</div>
</div>
<div className="pt-4 border-t border-gray-100 flex justify-between items-center mt-auto">
<span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Admissions Open</span>
<a className="text-sm font-medium text-gray-900 hover:underline flex items-center" href="#">
                                        View Details <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="mt-10 flex justify-center">
<nav className="flex items-center space-x-2">
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-white font-medium text-sm">1</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm">2</button>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors font-medium text-sm">3</button>
<span className="px-2 text-gray-400">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</nav>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<span className="font-semibold tracking-tighter text-xl text-gray-900 mb-4 block">edusphere.</span>
<p className="text-sm text-gray-500 mb-6 max-w-sm">
                        Simplifying school search for parents across India. Find, compare, and connect with the best educational institutions.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Top Cities</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Schools in Delhi</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Schools in Mumbai</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Schools in Bangalore</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Schools in Pune</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Boards</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">CBSE Schools</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">ICSE Schools</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">IB Schools</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">State Board</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-gray-400 mb-4 md:mb-0">
                    © 2024 Edusphere Search Platform. All rights reserved.
                </p>
<div className="flex space-x-6">
<span className="text-xs text-gray-400 flex items-center">
<iconify-icon className="mr-1" icon="solar:shield-check-linear"></iconify-icon> Verified Data
                    </span>
<span className="text-xs text-gray-400 flex items-center">
<iconify-icon className="mr-1" icon="solar:user-speak-linear"></iconify-icon> Real Reviews
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
