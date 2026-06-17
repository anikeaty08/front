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
      

<div className="bg-indigo-600 text-white text-xs py-2 text-center font-medium tracking-wide">
<span className="opacity-90">Transparency: This site contains affiliate links. We may earn a commission if you make a purchase.</span>
</div>

<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:compass" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<span className="text-lg font-semibold text-slate-900 tracking-tight" style={{}}>Travel Tips Finder</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Destinations</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Gear Reviews</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Flight Deals</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Guides</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<button className="text-slate-500 hover:text-slate-900">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:search" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<a className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm hover:shadow-md" href="#">
                        Subscribe
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-slate-900">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<header className="lg:pt-32 lg:pb-40 overflow-hidden pt-16 pb-24 relative">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
                New Guide: Digital Nomad Visas 2024
            </div>
<h1 className="md:text-7xl leading-tight text-5xl font-semibold text-slate-900 tracking-tight mb-6" style={{}}>Curated travel <br className="hidden md:block"/> for the modern explorer.</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 font-normal leading-relaxed">
                Discover hidden gems, honest gear reviews, and flight hacks. We do the research so you can focus on the journey.
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:map-pin" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<input className="block w-full sm:w-80 pl-10 pr-3 py-3 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition-shadow" placeholder="Where do you want to go?" type="text"/>
</div>
<button className="flex items-center justify-center gap-2 px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                    Start Exploring
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-full -z-10 overflow-hidden opacity-40">
<div className="absolute left-[calc(50%-11rem)] top-[calc(50%-30rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-sky-200 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
</div>
</header>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Trending Now</h2>
<p className="mt-1 text-sm text-slate-500">Destinations capturing the imagination this month.</p>
</div>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center gap-1 group" href="#">
                    View all 
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block relative overflow-hidden rounded-2xl bg-slate-100" href="#">
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="Kyoto" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-xs font-medium text-indigo-300 mb-1">Japan</span>
<h3 className="text-lg font-medium text-white tracking-tight">Kyoto Autumn Guide</h3>
</div>
</a>

<a className="group block relative overflow-hidden rounded-2xl bg-slate-100" href="#">
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="Cinque Terre" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-xs font-medium text-indigo-300 mb-1">Italy</span>
<h3 className="text-lg font-medium text-white tracking-tight">Cinque Terre Hiking</h3>
</div>
</a>

<a className="group block relative overflow-hidden rounded-2xl bg-slate-100" href="#">
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="Iceland" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-xs font-medium text-indigo-300 mb-1">Iceland</span>
<h3 className="text-lg font-medium text-white tracking-tight">Ring Road Itinerary</h3>
</div>
</a>

<a className="group block relative overflow-hidden rounded-2xl bg-slate-100" href="#">
<div className="aspect-[4/5] w-full overflow-hidden">
<img alt="Seattle" className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-xs font-medium text-indigo-300 mb-1">USA</span>
<h3 className="text-lg font-medium text-white tracking-tight">PNW Road Trip</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row gap-12">

<div className="w-full md:w-64 flex-shrink-0">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Gear Filters</h3>
<div className="space-y-6">

<div>
<label className="text-xs font-medium text-slate-500 mb-2 block">Category</label>
<div className="space-y-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input checked="" className="appearance-none h-4 w-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:ring-1 focus:ring-indigo-500 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Backpacks</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="appearance-none h-4 w-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:ring-1 focus:ring-indigo-500 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Photography</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input className="appearance-none h-4 w-4 border border-slate-300 rounded bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:ring-1 focus:ring-indigo-500 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Clothing</span>
</label>
</div>
</div>

<div>
<div className="flex justify-between text-xs text-slate-500 mb-2">
<span>Price</span>
<span>$0 - $500</span>
</div>
<div className="relative h-1.5 w-full bg-slate-200 rounded-full">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-600 rounded-full"></div>
<div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-white border border-slate-300 rounded-full shadow-sm cursor-grab"></div>
</div>
</div>

<div className="flex items-center justify-between">
<span className="text-sm text-slate-600">On Sale</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-slate-200 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>

<div className="flex-1">
<div className="mb-6 flex justify-between items-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Editor's Picks</h2>
<div className="relative">
<button className="flex items-center gap-2 text-sm font-medium text-slate-600 border border-slate-200 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50">
                                Sort by: Top Rated
                                <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:chevron-down" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="relative bg-slate-100 p-6 flex items-center justify-center h-48">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-indigo-700 shadow-sm">Top Pick</div>
<img alt="Backpack" className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900">Nomad 40L Pack</h3>
<p className="text-xs text-slate-500">Osprey</p>
</div>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<svg aria-hidden="true" className="iconify fill-current iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 font-medium">4.9</span>
</div>
</div>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">Perfect carry-on size with breathable mesh back panel.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="font-semibold text-slate-900">$180</span>
<a className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg hover:bg-indigo-100 transition-colors" href="#">
                                        Check Price
                                    </a>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="relative bg-slate-100 p-6 flex items-center justify-center h-48">
<img alt="Camera" className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900">Alpha Mirrorless</h3>
<p className="text-xs text-slate-500">Sony</p>
</div>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<svg aria-hidden="true" className="iconify fill-current iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 font-medium">4.8</span>
</div>
</div>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">The ultimate travel camera for video and low light.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="font-semibold text-slate-900">$2,400</span>
<a className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg hover:bg-indigo-100 transition-colors" href="#">
                                        Check Price
                                    </a>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group">
<div className="relative bg-slate-100 p-6 flex items-center justify-center h-48">
<span className="absolute top-3 right-3 text-xs text-rose-500 bg-rose-50 border border-rose-100 px-2 py-1 rounded font-medium">-20%</span>
<img alt="Headphones" className="h-32 object-contain mix-blend-multiply group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-slate-900">Noise Cancelling</h3>
<p className="text-xs text-slate-500">Bose</p>
</div>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<svg aria-hidden="true" className="iconify fill-current iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-600 font-medium">4.7</span>
</div>
</div>
<p className="text-sm text-slate-600 mb-4 line-clamp-2">Essential for long haul flights. Best in class silence.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-4">
<span className="font-semibold text-slate-900">$329</span>
<a className="text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-2 rounded-lg hover:bg-indigo-100 transition-colors" href="#">
                                        Check Price
                                    </a>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors" href="#">
                            Load More Gear
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8">Latest from the Journal</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<article className="lg:col-span-2 group cursor-pointer">
<div className="rounded-2xl overflow-hidden aspect-[16/9] mb-4 relative">
<img alt="Switzerland" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Budget Travel</span>
<span className="text-xs text-slate-500">Oct 24, 2023</span>
<span className="text-xs text-slate-400">•</span>
<span className="text-xs text-slate-500">8 min read</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">How to Travel Switzerland Without Breaking the Bank</h3>
<p className="text-slate-600 leading-relaxed">Switzerland is notorious for being expensive, but with the right rail passes, hostel choices, and supermarket hacks, you can experience the Alps on a shoestring budget...</p>
</article>

<div className="space-y-8 flex flex-col justify-center">
<article className="group cursor-pointer">
<div className="flex gap-4 items-start">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<span className="text-xs font-medium text-emerald-600 mb-1 block">Eco Tourism</span>
<h4 className="text-base font-medium text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">Top 5 Sustainable Lodges in Costa Rica</h4>
<span className="text-xs text-slate-500">5 min read</span>
</div>
</div>
</article>
<article className="group cursor-pointer">
<div className="flex gap-4 items-start">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<span className="text-xs font-medium text-amber-600 mb-1 block">Road Trips</span>
<h4 className="text-base font-medium text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">Van Life Essentials: What You Actually Need</h4>
<span className="text-xs text-slate-500">12 min read</span>
</div>
</div>
</article>
<article className="group cursor-pointer">
<div className="flex gap-4 items-start">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div>
<span className="text-xs font-medium text-rose-600 mb-1 block">Food &amp; Drink</span>
<h4 className="text-base font-medium text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors line-clamp-2">Street Food Safety: A Guide for Beginners</h4>
<span className="text-xs text-slate-500">6 min read</span>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-900 z-0"></div>
<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-indigo-400 w-12 h-12 mb-6 iconify--lucide" data-icon="lucide:send" data-strokeWidth="1" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Join the Travel Club</h2>
<p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">Get our "Ultimate Packing Checklist" PDF for free when you sign up, plus weekly flight deals delivered to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 appearance-none rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email address" type="email"/>
<button className="flex-shrink-0 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900" type="button">
                    Get the Checklist
                </button>
</form>
<p className="mt-4 text-xs text-slate-500">No spam, unsubscribe at any time.</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:compass" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<span className="text-base font-bold text-slate-900 tracking-tight" style={{}}>Travel Tips Finder</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        Helping you explore the world smarter. We provide honest reviews, curated guides, and the best travel deals on the web.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Explore</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Destinations</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Flight Deals</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Travel Insurance</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">City Guides</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Gear</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Backpacks</a></li>
<li className=""><a className="hover:text-indigo-600 transition-colors" href="#">Cameras</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Tech Accessories</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Packing Cubes</a></li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Affiliate Disclosure</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2024 Vantage Travel Media. All rights reserved.
                </p>
<div className="flex items-center gap-6">
<span className="text-xs text-slate-400">Terms</span>
<span className="text-xs text-slate-400">Privacy</span>
<span className="text-xs text-slate-400">Sitemap</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
