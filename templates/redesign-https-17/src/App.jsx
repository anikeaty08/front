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
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
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
      

<nav className="fixed w-full z-50 top-0 border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-2" href="#">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20"></span>
                BATTENPRO
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Projects</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Technical</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors">
                    Log in
                </button>
<button className="bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                    Request Sample
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-gray-600">New Timber Grain Finishes Available</span>
</div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-[1.1] mb-6">
                    Precision Engineered <br/>
<span className="text-gray-400">Architectural Battens.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                    Lightweight, durable aluminium click-on battens designed for modern Australian architecture. Fire-rated performance with the warmth of natural timber.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="bg-gray-900 text-white h-12 px-6 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
                        View Product Range
                        <span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
<button className="h-12 px-6 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all flex items-center gap-2">
                        Download Brochure
                        <span className="iconify" data-icon="lucide:download" data-width="16"></span>
</button>
</div>
</div>
<div className="relative lg:h-[600px] w-full">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white rounded-2xl -z-10"></div>

<div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100">
<img alt="Modern Batten Facade" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-lg max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 bg-gray-900 rounded-full flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">AS1530.1 Rated</p>
<p className="text-xs text-gray-500">Non-combustible certified</p>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100 py-4">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-xs font-medium transition-colors">
                    All Series
                </button>
<button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 text-xs font-medium transition-colors">
                    Timber Finish
                </button>
<button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 text-xs font-medium transition-colors">
                    Solid Colours
                </button>
<button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900 text-xs font-medium transition-colors">
                    Accessories
                </button>
</div>
<div className="flex items-center gap-3 border-l border-gray-200 pl-4 hidden sm:flex">
<span className="text-xs text-gray-400 font-medium">View:</span>
<button className="p-2 text-gray-900 bg-gray-100 rounded">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600">
<span className="iconify" data-icon="lucide:list" data-width="16"></span>
</button>
</div>
</div>
</div>

<section className="py-20 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Standard Profiles</h2>
<p className="text-sm text-gray-500 mt-1">Our most popular click-on batten sizes.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl border border-gray-200 p-2 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
<img alt="40x40 Batten" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-gray-600 border border-gray-100">
                            Timber Look
                        </div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-gray-900">Batten 40x40</h3>
<p className="text-xs text-gray-500">Square Profile Series</p>
</div>
<span className="text-xs font-medium text-gray-900">$29.50<span className="text-gray-400 font-normal">/lm</span></span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-4">
                            Ideal for internal ceilings and subtle wall detailing. Features our patented hidden clip system.
                        </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-[#8B5A2B] ring-1 ring-gray-200" title="Oak"></div>
<div className="w-3 h-3 rounded-full bg-[#5D4037] ring-1 ring-gray-200" title="Walnut"></div>
<div className="w-3 h-3 rounded-full bg-[#2a2a2a] ring-1 ring-gray-200" title="Blackbutt"></div>
<span className="text-[10px] text-gray-400 ml-1">+4 more</span>
</div>
<span className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Specs <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-2 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
<img alt="40x80 Batten" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-gray-900">Batten 40x80</h3>
<p className="text-xs text-gray-500">Rectangular Deep Profile</p>
</div>
<span className="text-xs font-medium text-gray-900">$45.00<span className="text-gray-400 font-normal">/lm</span></span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-4">
                            Deep profile offering substantial shadow lines and depth. Perfect for external facades.
                        </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-gray-200 ring-1 ring-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-gray-800 ring-1 ring-gray-200"></div>
</div>
<span className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Specs <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-2 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
<img alt="40x100 Batten" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider text-white">
                            Popular
                        </div>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-gray-900">Batten 40x100</h3>
<p className="text-xs text-gray-500">Block Profile</p>
</div>
<span className="text-xs font-medium text-gray-900">$58.00<span className="text-gray-400 font-normal">/lm</span></span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-4">
                            Bold architectural statement piece. High impact resistance for high-traffic areas.
                        </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-1">
<div className="w-3 h-3 rounded-full bg-[#8B5A2B] ring-1 ring-gray-200"></div>
<div className="w-3 h-3 rounded-full bg-[#2a2a2a] ring-1 ring-gray-200"></div>
</div>
<span className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Specs <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-gray-200 p-2 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer flex flex-col">
<div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
<img alt="Custom Batten" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-base font-medium text-gray-900">Custom Profile</h3>
<p className="text-xs text-gray-500">Bespoke Manufacturing</p>
</div>
<span className="text-xs font-medium text-gray-900">POA</span>
</div>
<p className="text-xs text-gray-500 line-clamp-2 mb-4">
                            Need a specific size or shape? We manufacture custom extrusion dies for large projects.
                        </p>
<div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
<span className="text-xs text-gray-400">Min. order 500lm</span>
<span className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                                Enquire <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>

<div className="md:col-span-2 bg-gray-900 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group cursor-pointer">
<div className="relative z-10 max-w-md">
<h3 className="text-xl font-medium text-white mb-2">Request a sample kit</h3>
<p className="text-sm text-gray-400 mb-6">Experience the finish quality and test the click-lock mechanism firsthand before you specify.</p>
<button className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors">
                            Order Free Samples
                        </button>
</div>
<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
<div className="absolute -right-10 -bottom-10 opacity-20 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
<span className="iconify text-white" data-height="200" data-icon="lucide:box" data-width="200"></span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col gap-3">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900">
<span className="iconify" data-icon="lucide:flame" data-width="20"></span>
</div>
<h4 className="text-sm font-medium text-gray-900">Non-Combustible</h4>
<p className="text-xs text-gray-500 leading-relaxed">Certified to AS1530.1 &amp; AS1530.3. Safe for all building classes.</p>
</div>
<div className="flex flex-col gap-3">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900">
<span className="iconify" data-icon="lucide:hammer" data-width="20"></span>
</div>
<h4 className="text-sm font-medium text-gray-900">Easy Install</h4>
<p className="text-xs text-gray-500 leading-relaxed">Two-piece click system reduces installation time by up to 30%.</p>
</div>
<div className="flex flex-col gap-3">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900">
<span className="iconify" data-icon="lucide:droplets" data-width="20"></span>
</div>
<h4 className="text-sm font-medium text-gray-900">Weatherproof</h4>
<p className="text-xs text-gray-500 leading-relaxed">Marine grade aluminium available for coastal applications.</p>
</div>
<div className="flex flex-col gap-3">
<div className="h-10 w-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-900">
<span className="iconify" data-icon="lucide:recycle" data-width="20"></span>
</div>
<h4 className="text-sm font-medium text-gray-900">Sustainable</h4>
<p className="text-xs text-gray-500 leading-relaxed">100% Recyclable aluminium. Low VOC finishes available.</p>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Recent Projects</h2>
<a className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                View Gallery <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-96">
<div className="lg:col-span-2 relative rounded-xl overflow-hidden group">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-sm font-medium">Bondi Residence</p>
<p className="text-xs opacity-80">Timber Look 40x40</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group">
<img alt="Project 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-sm font-medium">Commercial Bay</p>
<p className="text-xs opacity-80">Monument 40x100</p>
</div>
</div>
<div className="relative rounded-xl overflow-hidden group">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white">
<p className="text-sm font-medium">The Gantry</p>
<p className="text-xs opacity-80">Ceiling Systems</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-2 mb-4" href="#">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20"></span>
                        BATTENPRO
                    </a>
<p className="text-xs text-gray-500 max-w-xs mb-6">
                        Australia's leading supplier of aluminium architectural battens. Engineering excellence meets design versatility.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Aluminium Battens</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Timber Finishes</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Cladding Systems</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Installation Guide</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Fire Certificates</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Care &amp; Maintenance</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Warranty</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Projects</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-xs text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-[10px] text-gray-400">© 2024 Battenpro Australia. All rights reserved.</span>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1.5 text-[10px] text-gray-500 border border-gray-200 px-2 py-1 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Systems Operational
                    </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
