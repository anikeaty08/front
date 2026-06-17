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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
}
},
letterSpacing: {
tightest: '-.075em',
}
}
}
}



        // Simple vanilla JS for tab switching
        function switchTab(tabId, btnElement) {
            // Hide all tabs
            const panels = document.querySelectorAll('.tab-panel');
            panels.forEach(panel => panel.classList.add('hidden'));

            // Show selected tab
            document.getElementById(tabId).classList.remove('hidden');

            // Reset buttons
            const buttons = document.querySelectorAll('.tab-btn');
            buttons.forEach(btn => {
                btn.classList.remove('border-zinc-900', 'text-zinc-900');
                btn.classList.add('border-transparent', 'text-zinc-500');
            });

            // Highlight active button
            btnElement.classList.remove('border-transparent', 'text-zinc-500');
            btnElement.classList.add('border-zinc-900', 'text-zinc-900');
        }
    
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
      

<div className="bg-amber-50 border-b border-amber-100 px-4 py-3 relative">
<div className="max-w-6xl mx-auto flex items-start gap-3">
<div className="text-amber-600 mt-0.5 shrink-0">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-amber-900 tracking-tight mb-1">Heavy rain warning</h3>
<p className="text-xs text-amber-800/80 leading-relaxed font-light">
                    While caution is still advised for travel, most areas are accessible. Expect single-lane access around Helena Bay, Oakura, and Whangaruru Peninsula.
                </p>
<a className="text-xs font-medium text-amber-900 underline underline-offset-2 mt-2 inline-block hover:text-amber-700" href="#">Latest updates</a>
</div>
<button className="text-amber-800/50 hover:text-amber-900 transition-colors" onclick="this.parentElement.parentElement.remove()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex items-center justify-between h-16">

<button className="lg:hidden p-2 -ml-2 text-zinc-500 hover:text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="flex items-center gap-2 group" href="#">
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tighter text-zinc-900 uppercase leading-none group-hover:opacity-70 transition-opacity">Whangarei</span>
<span className="text-xs font-medium tracking-widest text-zinc-500 uppercase leading-none mt-0.5">District Council</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Business</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Community</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Council</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Events</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">What's New</a>
</nav>

<div className="flex items-center gap-2">
<button className="p-2 text-zinc-500 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-50">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="hidden sm:block h-4 w-px bg-zinc-200"></div>
<a className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 bg-zinc-50 rounded-full border border-zinc-200 hover:border-zinc-300 transition-all" href="#">
<span>Contact Us</span>
</a>
</div>
</div>
</div>
</header>
<main className="flex-1">

<section className="pt-12 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
<div className="mb-10 text-center sm:text-left">
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-2">Welcome to Whangārei</h1>
<p className="text-base text-zinc-500 font-light max-w-2xl">Local government services, recreation, and business information.</p>
</div>

<div className="border-b border-zinc-200 mb-8 overflow-x-auto no-scrollbar">
<div className="flex space-x-8 min-w-max" id="tabs-nav">
<button className="pb-3 text-sm font-medium border-b-2 border-zinc-900 text-zinc-900 transition-colors tracking-tight tab-btn" onclick="switchTab('quick-links', this)">Quick links</button>
<button className="pb-3 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-700 transition-colors tracking-tight tab-btn" onclick="switchTab('news', this)">News and notices</button>
<button className="pb-3 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-700 transition-colors tracking-tight tab-btn" onclick="switchTab('events', this)">What's on</button>
<button className="pb-3 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-700 transition-colors tracking-tight tab-btn" onclick="switchTab('consultation', this)">Have your say</button>
</div>
</div>

<div className="tab-panel animate-fade-in" id="quick-links">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Freedom camping</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Find out where you can camp and the rules for camping in tents and vehicles.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:trash-bin-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Rubbish and recycling</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Find your bin collection day, transfer station hours, and disposal guide.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Dog access rules</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Find out where you can take dogs, including on-leash and off-leash areas.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:tree-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Parks and reserves</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Explore our local parks and reserves to find a BBQ spot or stretch your legs.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:masks-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Forum North</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Explore events or hire Whangārei’s premier venue for arts and entertainment.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Beaches</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">GIS map and information about beaches, swimming quality and coastal facilities.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Pay it</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Make an online payment and view details on other payment methods.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Rates and payments</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Information about land and water rates, dates, rebates and valuations.</p>
</a>

<a className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200" href="#">
<div className="w-10 h-10 rounded-xl bg-zinc-50 text-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 border border-zinc-100">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Report it</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Want to report a non-urgent issue? View information and let us know.</p>
</a>
</div>
</div>

<div className="tab-panel hidden animate-fade-in" id="news">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Construction" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-zinc-400">19 Jan 2026</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Northland water CCO establishment</h3>
<p className="text-sm text-zinc-500 font-light">Advisory team appointed to provide independent assurance for the new water organisation.</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Mayor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-zinc-400">22 Dec 2025</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Mayor's Column: Easing pressure</h3>
<p className="text-sm text-zinc-500 font-light">Discussing options to reduce the planned rates increase for next year's budget.</p>
</article>
<article className="group cursor-pointer">
<div className="aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Flooding relief" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-xs font-medium text-zinc-400">17 Dec 2025</span>
<h3 className="text-lg font-medium text-zinc-900 mt-1 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Morningside flood-relief complete</h3>
<p className="text-sm text-zinc-500 font-light">Frequent flooding around Kaka Street is set to become a distant memory.</p>
</article>
</div>
</div>
<div className="tab-panel hidden animate-fade-in" id="events">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Kids art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">20 Jan</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Summer Holiday Programme</h3>
<p className="text-sm text-zinc-500 font-light">Creative workshops at Quarry Arts Centre designed to spark imagination.</p>
</article>
<article className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Painting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">21 Jan</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Stamp Shape Painting</h3>
<p className="text-sm text-zinc-500 font-light">FREE summer family activities experimenting with handmade stamps.</p>
</article>
<article className="group cursor-pointer">
<div className="relative aspect-video bg-zinc-100 rounded-lg mb-4 overflow-hidden">
<img alt="Concert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-zinc-900 shadow-sm">21 Jan</div>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Robbie Williams Tribute Show</h3>
<p className="text-sm text-zinc-500 font-light">Tony performs all across the globe, winning fans everywhere.</p>
</article>
</div>
</div>
<div className="tab-panel hidden animate-fade-in" id="consultation">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<article className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">Open</span>
<span className="text-xs text-zinc-500">Closes 15 Feb</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Control of Vehicles on Beaches</h3>
<p className="text-sm text-zinc-500 font-light mb-4">We are reviewing our Bylaw. We want to hear your views on vehicle access on beaches.</p>
<span className="text-sm font-medium text-zinc-900 underline underline-offset-2">Read more</span>
</article>
<article className="group p-5 border border-zinc-200 rounded-xl hover:border-zinc-400 transition-colors">
<div className="flex items-start justify-between mb-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">Open</span>
<span className="text-xs text-zinc-500">Closes 27 Feb</span>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">Help shape Whangārei’s future</h3>
<p className="text-sm text-zinc-500 font-light mb-4">Share your feedback on the Long Term Plan 2027-37 and help shape priorities.</p>
<span className="text-sm font-medium text-zinc-900 underline underline-offset-2">Take survey</span>
</article>
</div>
</div>
</section>

<section className="bg-zinc-50 border-y border-zinc-200 py-16 px-4">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-6">What's happening in my area?</h2>
<div className="relative flex items-center shadow-sm rounded-lg">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input className="custom-input block w-full pl-10 pr-32 py-3.5 border border-zinc-300 rounded-lg leading-5 bg-white placeholder-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-0 sm:text-sm font-light transition-all" placeholder="Enter your street address" type="text"/>
<button className="absolute inset-y-1 right-1 px-4 text-xs font-medium bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors">
                        Search
                    </button>
</div>
<button className="mt-4 text-xs font-medium text-zinc-500 hover:text-zinc-900 flex items-center justify-center gap-1 mx-auto transition-colors">
<iconify-icon icon="solar:gps-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Use my location
                </button>
</div>
</section>

<section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group block" href="#">
<div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 mb-4 border border-zinc-100">
<img alt="Workshops" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1 group-hover:underline decoration-zinc-300 underline-offset-4">Community workshops</h3>
<p className="text-sm text-zinc-500 font-light">Check out our capability-building workshops and training opportunities.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 mb-4 border border-zinc-100">
<img alt="Festival" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1 group-hover:underline decoration-zinc-300 underline-offset-4">Endless Summer Festival</h3>
<p className="text-sm text-zinc-500 font-light">Celebrate summer with a vibrant programme of events.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 mb-4 border border-zinc-100">
<img alt="Newsletters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1 group-hover:underline decoration-zinc-300 underline-offset-4">Sign up for newsletters</h3>
<p className="text-sm text-zinc-500 font-light">Get the latest news, events and updates direct to your inbox.</p>
</a>
<a className="group block" href="#">
<div className="aspect-[4/3] rounded-lg overflow-hidden bg-zinc-100 mb-4 border border-zinc-100">
<img alt="Podcast" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight mb-1 group-hover:underline decoration-zinc-300 underline-offset-4">Whangārei Matters podcast</h3>
<p className="text-sm text-zinc-500 font-light">Listen to our podcast, where we take a deep dive into local topics.</p>
</a>
</div>
</section>
</main>

<footer className="bg-zinc-850 text-white/80 pt-16 pb-8 text-sm font-light border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

<div>
<h3 className="text-white font-medium text-base mb-6 tracking-tight">Contact us</h3>
<div className="space-y-4">
<div className="flex flex-col">
<span className="font-medium text-white/90">Te Iwitahi (civic centre)</span>
<span>9 Rust Avenue, Whangārei</span>
</div>
<div className="flex flex-col">
<span className="font-medium text-white/90">Ruakākā service centre</span>
<span>9 Takutai Place, Ruakākā</span>
</div>
<div className="space-y-1 pt-2">
<a className="block hover:text-white transition-colors" href="tel:094304200">Phone: 09 430 4200</a>
<a className="block hover:text-white transition-colors" href="tel:0800932463">Freephone: 0800 932 463</a>
<a className="block hover:text-white transition-colors" href="mailto:mailroom@wdc.govt.nz">mailroom@wdc.govt.nz</a>
</div>
</div>
</div>

<div>
<h3 className="text-white font-medium text-base mb-6 tracking-tight">Connect with us</h3>
<div className="grid grid-cols-2 gap-3 mb-6">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:globus-linear"></iconify-icon> Facebook</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon> Instagram</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:play-circle-linear"></iconify-icon> YouTube</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:case-linear"></iconify-icon> LinkedIn</a>
</div>
<a className="inline-flex items-center gap-2 text-white/90 hover:text-white border border-white/20 rounded-lg px-4 py-2 hover:bg-white/10 transition-all" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon> Sign up to our newsletters
                    </a>
</div>

<div>
<h3 className="text-white font-medium text-base mb-6 tracking-tight">Our other sites</h3>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Whangarei District Libraries</a></li>
<li><a className="hover:text-white transition-colors" href="#">Whangārei District Love It Here!</a></li>
<li><a className="hover:text-white transition-colors" href="#">Claphams National Clock Museum</a></li>
</ul>
<div className="mt-8 pt-8 border-t border-white/10">
<div className="flex items-center gap-3 opacity-70">
<img alt="NZ Govt" className="h-8 grayscale brightness-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="text-xs leading-tight">Kāwanatanga o Aotearoa<br/>New Zealand Government</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
<div className="flex flex-wrap justify-center md:justify-start gap-4">
<a className="hover:text-white transition-colors" href="#">Disclaimer &amp; Copyright</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">About this site</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<div className="text-center md:text-right">
                    © 2026 Whangarei District Council
                </div>
</div>
</div>
</footer>


    </>
  );
}
