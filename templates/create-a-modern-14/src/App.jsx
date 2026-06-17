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
steel: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



        function navigateTo(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden-section');
            });

            // Show target section
            const target = document.getElementById(sectionId);
            if (target) {
                target.classList.remove('hidden-section');
            }
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Close mobile menu if implemented (simplified here)
        }

        // Initialize default view
        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-steel-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center cursor-pointer" onclick="navigateTo('home')">
<div className="w-8 h-8 bg-steel-900 text-white flex items-center justify-center rounded-sm mr-2">
<span className="font-semibold tracking-tighter">S</span>
</div>
<span className="text-xl font-semibold tracking-tight text-steel-900">STEELVENT</span>
</div>

<nav className="hidden md:flex space-x-8 text-sm font-medium text-steel-600">
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('home')">Home</button>
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('services')">Services</button>
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('products')">Products</button>
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('portfolio')">Portfolio</button>
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('about')">About</button>
<button className="hover:text-steel-900 transition-colors" onclick="navigateTo('contact')">Contact</button>
</nav>

<div className="flex items-center space-x-4">
<button className="hidden lg:flex items-center text-xs font-medium text-steel-500 hover:text-steel-900" onclick="navigateTo('admin')">
<iconify-icon className="mr-1" icon="lucide:layout-dashboard" width="16"></iconify-icon>
                        Admin
                    </button>
<div className="h-4 w-px bg-steel-200 hidden lg:block"></div>
<button className="relative text-steel-600 hover:text-steel-900">
<iconify-icon icon="lucide:shopping-cart" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full border border-white"></span>
</button>
<button className="hidden sm:flex bg-steel-900 text-white px-4 py-2 text-xs font-medium rounded hover:bg-steel-800 transition-colors tracking-wide items-center gap-2" onclick="navigateTo('contact')">
<span>REQUEST QUOTE</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>

<button className="md:hidden text-steel-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow pt-16">

<section className="page-section animate-fade-in" id="home">

<div className="relative bg-white border-b border-steel-200 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-steel-100 border border-steel-200 text-xs font-medium text-steel-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Operational &amp; Shipping Worldwide
                        </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-steel-900 mb-6 leading-[1.1]">
                            Precision Stainless <br/> <span className="text-steel-400">Engineering.</span>
</h1>
<p className="text-lg text-steel-600 mb-8 max-w-xl leading-relaxed">
                            Industrial-grade ventilation systems and custom stainless steel fabrication for commercial kitchens. Designed for hygiene, durability, and performance.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-steel-900 text-white px-6 py-3 text-sm font-medium rounded hover:bg-steel-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-steel-900/20" onclick="navigateTo('products')">
                                Browse Catalog
                                <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
<button className="bg-white text-steel-900 border border-steel-200 px-6 py-3 text-sm font-medium rounded hover:bg-steel-50 transition-colors flex items-center justify-center gap-2" onclick="navigateTo('contact')">
                                Book Consultation
                            </button>
</div>
</div>
</div>

<div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-bl from-steel-100 to-white border-l border-steel-200 flex items-center justify-center">
<div className="relative w-64 h-64">
<div className="absolute inset-0 border border-steel-300 rounded-lg transform rotate-6 bg-white shadow-xl"></div>
<div className="absolute inset-0 border border-steel-300 rounded-lg transform -rotate-3 bg-steel-50/50 backdrop-blur-sm"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-steel-300 animate-[spin_10s_linear_infinite]" icon="lucide:fan" width="64"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-steel-50 border-b border-steel-200 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-steel-400 uppercase tracking-widest mb-6">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-steel-800"><iconify-icon icon="lucide:chef-hat" width="24"></iconify-icon> GOURMET INC</div>
<div className="flex items-center gap-2 font-semibold text-steel-800"><iconify-icon icon="lucide:building-2" width="24"></iconify-icon> URBAN HOTEL</div>
<div className="flex items-center gap-2 font-semibold text-steel-800"><iconify-icon icon="lucide:utensils-crossed" width="24"></iconify-icon> DARK KITCHEN</div>
<div className="flex items-center gap-2 font-semibold text-steel-800"><iconify-icon icon="lucide:factory" width="24"></iconify-icon> CONTRACTORS</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-6 bg-white border border-steel-200 rounded-lg hover:border-steel-400 hover:shadow-md transition-all">
<div className="w-10 h-10 bg-steel-100 rounded flex items-center justify-center mb-4 group-hover:bg-steel-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-steel-900 mb-2">Advanced Ventilation</h3>
<p className="text-sm text-steel-500 leading-relaxed">Custom extraction canopies with baffled filters designed for high-heat commercial environments.</p>
</div>
<div className="group p-6 bg-white border border-steel-200 rounded-lg hover:border-steel-400 hover:shadow-md transition-all">
<div className="w-10 h-10 bg-steel-100 rounded flex items-center justify-center mb-4 group-hover:bg-steel-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-steel-900 mb-2">Bespoke Fabrication</h3>
<p className="text-sm text-steel-500 leading-relaxed">From sinks to prep tables, we fabricate 304/316 grade stainless steel to your exact dimensions.</p>
</div>
<div className="group p-6 bg-white border border-steel-200 rounded-lg hover:border-steel-400 hover:shadow-md transition-all">
<div className="w-10 h-10 bg-steel-100 rounded flex items-center justify-center mb-4 group-hover:bg-steel-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-steel-900 mb-2">Global Logistics</h3>
<p className="text-sm text-steel-500 leading-relaxed">Seamless cargo integration ensures your equipment arrives safely, whether local or international.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden-section bg-white min-h-screen" id="services">
<div className="bg-steel-50 border-b border-steel-200 py-16">
<div className="max-w-7xl mx-auto px-4">
<h1 className="text-3xl font-semibold tracking-tight text-steel-900">Our Services</h1>
<p className="text-steel-500 mt-2">End-to-end solutions for commercial kitchens.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="flex gap-6 items-start">
<div className="w-12 h-12 shrink-0 bg-steel-100 border border-steel-200 rounded flex items-center justify-center text-steel-900">
<iconify-icon icon="lucide:pen-tool" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-steel-900 mb-2">Design &amp; CAD Planning</h3>
<p className="text-steel-500 text-sm leading-relaxed mb-4">
                                Our engineers provide detailed CAD drawings for gas interlocks, ductwork routing, and kitchen layouts to ensure compliance with local regulations.
                            </p>
<a className="text-sm font-medium text-steel-900 underline underline-offset-4 decoration-steel-300 hover:decoration-steel-900" href="#">View Sample Plans</a>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-12 h-12 shrink-0 bg-steel-100 border border-steel-200 rounded flex items-center justify-center text-steel-900">
<iconify-icon icon="lucide:settings" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-steel-900 mb-2">Maintenance &amp; Cleaning</h3>
<p className="text-steel-500 text-sm leading-relaxed mb-4">
                                TR19 compliant duct cleaning and fan maintenance services. Scheduled maintenance contracts available for hotels and large facilities.
                            </p>
<ul className="text-sm text-steel-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-green-600" icon="lucide:check" width="12"></iconify-icon> 24/7 Emergency Callout</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-600" icon="lucide:check" width="12"></iconify-icon> Compliance Certification</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden-section bg-white min-h-screen" id="products">
<div className="border-b border-steel-200 sticky top-16 bg-white z-40">
<div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-xl font-semibold text-steel-900 tracking-tight">Catalog</h2>
<div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
<button className="px-3 py-1.5 text-xs font-medium bg-steel-900 text-white rounded">All</button>
<button className="px-3 py-1.5 text-xs font-medium bg-steel-100 text-steel-600 hover:bg-steel-200 rounded">Ventilation</button>
<button className="px-3 py-1.5 text-xs font-medium bg-steel-100 text-steel-600 hover:bg-steel-200 rounded">Benches</button>
<button className="px-3 py-1.5 text-xs font-medium bg-steel-100 text-steel-600 hover:bg-steel-200 rounded">Sinks</button>
<button className="px-3 py-1.5 text-xs font-medium bg-steel-100 text-steel-600 hover:bg-steel-200 rounded">Shelving</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-1 space-y-8 hidden lg:block">
<div>
<h3 className="text-sm font-semibold text-steel-900 mb-4">Dimensions</h3>
<div className="space-y-4">
<div className="flex justify-between text-xs text-steel-500">
<span>0mm</span>
<span>3000mm</span>
</div>
<input className="w-full h-1 bg-steel-200 rounded-lg appearance-none cursor-pointer" max="3000" min="0" type="range"/>
</div>
</div>
<div>
<h3 className="text-sm font-semibold text-steel-900 mb-4">Material Grade</h3>
<div className="space-y-2">
<label className="flex items-center space-x-2 cursor-pointer">
<div className="w-4 h-4 border border-steel-300 rounded flex items-center justify-center">
<div className="w-2 h-2 bg-steel-900 rounded-sm hidden"></div>
</div>
<span className="text-sm text-steel-600">304 Food Grade</span>
</label>
<label className="flex items-center space-x-2 cursor-pointer">
<div className="w-4 h-4 border border-steel-300 rounded flex items-center justify-center"></div>
<span className="text-sm text-steel-600">430 Standard</span>
</label>
<label className="flex items-center space-x-2 cursor-pointer">
<div className="w-4 h-4 border border-steel-300 rounded flex items-center justify-center"></div>
<span className="text-sm text-steel-600">316 Laboratory</span>
</label>
</div>
</div>
</div>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="group border border-steel-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 relative">
<div className="aspect-[4/3] bg-steel-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-steel-300">
<iconify-icon icon="lucide:box" width="48"></iconify-icon>
</div>
<div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded border border-steel-100">In Stock</div>
</div>
<div className="p-4">
<div className="text-xs text-steel-500 mb-1">Ventilation</div>
<h3 className="text-sm font-semibold text-steel-900 mb-2">Wall Canopy 2400mm</h3>
<p className="text-xs text-steel-500 mb-4 line-clamp-2">Complete with baffle filters and grease collection. 304 Stainless steel construction.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-steel-900">$1,250.00</span>
<button className="w-8 h-8 rounded bg-steel-900 text-white flex items-center justify-center hover:bg-steel-700 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-steel-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 relative">
<div className="aspect-[4/3] bg-steel-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-steel-300">
<iconify-icon icon="lucide:table" width="48"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="text-xs text-steel-500 mb-1">Fabrication</div>
<h3 className="text-sm font-semibold text-steel-900 mb-2">Prep Table w/ Undershelf</h3>
<p className="text-xs text-steel-500 mb-4 line-clamp-2">Heavy duty reinforced top. Adjustable feet. 1800mm width.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-steel-900">$420.00</span>
<button className="w-8 h-8 rounded bg-steel-900 text-white flex items-center justify-center hover:bg-steel-700 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-steel-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 relative">
<div className="aspect-[4/3] bg-steel-100 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center text-steel-300">
<iconify-icon icon="lucide:waves" width="48"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="text-xs text-steel-500 mb-1">Plumbing</div>
<h3 className="text-sm font-semibold text-steel-900 mb-2">Double Bowl Sink Unit</h3>
<p className="text-xs text-steel-500 mb-4 line-clamp-2">Left hand drainer. Pre-drilled for mixer tap. Industrial waste fitting.</p>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-steel-900">$890.00</span>
<button className="w-8 h-8 rounded bg-steel-900 text-white flex items-center justify-center hover:bg-steel-700 transition-colors">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden-section bg-white min-h-screen" id="portfolio">
<div className="bg-steel-900 py-20 text-white">
<div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-4xl font-semibold tracking-tight mb-4">Project Gallery</h1>
<p className="text-steel-400 max-w-2xl mx-auto">From dark kitchens to 5-star hotel banquet halls. See our engineering in action.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="relative group aspect-square bg-steel-100 overflow-hidden rounded-lg cursor-pointer">
<div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/60 transition-all duration-300 z-10 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<h3 className="text-white font-semibold">The Ivy Brasserie</h3>
<p className="text-steel-300 text-xs mt-1">Full Ventilation Fit-out</p>
</div>
</div>

<div className="w-full h-full flex items-center justify-center text-steel-300 bg-steel-200">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
</div>

<div className="relative group aspect-square bg-steel-100 overflow-hidden rounded-lg cursor-pointer">
<div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/60 transition-all duration-300 z-10 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<h3 className="text-white font-semibold">Cloud Kitchens Hub</h3>
<p className="text-steel-300 text-xs mt-1">Multi-unit Fabrication</p>
</div>
</div>
<div className="w-full h-full flex items-center justify-center text-steel-300 bg-steel-100">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
</div>

<div className="relative group aspect-square bg-steel-100 overflow-hidden rounded-lg cursor-pointer">
<div className="absolute inset-0 bg-steel-900/0 group-hover:bg-steel-900/60 transition-all duration-300 z-10 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<h3 className="text-white font-semibold">Hilton Convention Ctr</h3>
<p className="text-steel-300 text-xs mt-1">Extraction Upgrade</p>
</div>
</div>
<div className="w-full h-full flex items-center justify-center text-steel-300 bg-steel-200">
<iconify-icon icon="lucide:image" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden-section bg-white min-h-screen" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
<div className="bg-steel-50 p-10 lg:p-20 flex flex-col justify-center">
<div className="max-w-md">
<h2 className="text-3xl font-semibold tracking-tight text-steel-900 mb-6">Get in touch</h2>
<p className="text-steel-600 mb-8 leading-relaxed">
                            Whether you need a single sink or a full kitchen ventilation system, our technical team is ready to assist.
                        </p>
<div className="space-y-6 mb-10">
<div className="flex items-center gap-4 text-steel-700">
<div className="w-10 h-10 rounded bg-white border border-steel-200 flex items-center justify-center">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-semibold">HQ &amp; Factory</span>
                                    12 Industrial Way, Sheffield, UK
                                </div>
</div>
<div className="flex items-center gap-4 text-steel-700">
<div className="w-10 h-10 rounded bg-white border border-steel-200 flex items-center justify-center">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-semibold">24/7 Support</span>
                                    +44 20 1234 5678
                                </div>
</div>
<div className="flex items-center gap-4 text-steel-700">
<div className="w-10 h-10 rounded bg-white border border-steel-200 flex items-center justify-center">
<iconify-icon icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<div className="text-sm">
<span className="block font-semibold">WhatsApp</span>
                                    Chat with Sales
                                </div>
</div>
</div>

<div className="w-full h-48 bg-steel-200 rounded-lg flex items-center justify-center text-steel-500 text-sm font-medium">
<iconify-icon className="mr-2" icon="lucide:map"></iconify-icon> Google Maps Integration
                        </div>
</div>
</div>
<div className="bg-white p-10 lg:p-20 flex flex-col justify-center border-l border-steel-200">
<form className="max-w-md w-full space-y-6">
<div>
<label className="block text-xs font-semibold text-steel-700 uppercase tracking-wide mb-2">Full Name</label>
<input className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded focus:outline-none focus:border-steel-900 focus:ring-1 focus:ring-steel-900 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-steel-700 uppercase tracking-wide mb-2">Email Address</label>
<input className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded focus:outline-none focus:border-steel-900 focus:ring-1 focus:ring-steel-900 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-steel-700 uppercase tracking-wide mb-2">Project Type</label>
<div className="grid grid-cols-2 gap-4">
<label className="flex items-center space-x-2 border border-steel-200 p-3 rounded cursor-pointer hover:bg-steel-50">
<input className="w-4 h-4 text-steel-900 rounded border-gray-300 focus:ring-steel-900" type="checkbox"/>
<span className="text-sm text-steel-600">Fabrication</span>
</label>
<label className="flex items-center space-x-2 border border-steel-200 p-3 rounded cursor-pointer hover:bg-steel-50">
<input className="w-4 h-4 text-steel-900 rounded border-gray-300 focus:ring-steel-900" type="checkbox"/>
<span className="text-sm text-steel-600">Ventilation</span>
</label>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-steel-700 uppercase tracking-wide mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-steel-50 border border-steel-200 rounded focus:outline-none focus:border-steel-900 focus:ring-1 focus:ring-steel-900 transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-steel-900 text-white font-medium py-3 rounded hover:bg-steel-800 transition-colors flex items-center justify-center gap-2" type="button">
                            Send Request
                            <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="page-section hidden-section bg-white min-h-screen" id="about">
<div className="max-w-4xl mx-auto px-4 py-24">
<h1 className="text-4xl font-semibold tracking-tight text-steel-900 mb-8">Engineering Excellence since 1998</h1>
<div className="prose prose-slate prose-lg text-steel-600">
<p>
                        SteelVent is a premier manufacturer of commercial kitchen ventilation systems and stainless steel fabrication. We serve a diverse range of clients from independent restaurants to large-scale industrial food processing facilities.
                    </p>
<p>
                        Our factory utilizes state-of-the-art laser cutting and folding machinery, ensuring millimeter-perfect precision in every product we ship.
                    </p>
</div>
<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-steel-200 pt-12">
<div>
<div className="text-3xl font-bold text-steel-900">25+</div>
<div className="text-sm text-steel-500">Years Experience</div>
</div>
<div>
<div className="text-3xl font-bold text-steel-900">5k+</div>
<div className="text-sm text-steel-500">Projects Completed</div>
</div>
<div>
<div className="text-3xl font-bold text-steel-900">100%</div>
<div className="text-sm text-steel-500">In-House Mfg</div>
</div>
<div>
<div className="text-3xl font-bold text-steel-900">Global</div>
<div className="text-sm text-steel-500">Shipping Network</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden-section bg-steel-50 min-h-screen flex flex-col" id="admin">
<div className="flex-grow flex overflow-hidden">

<aside className="w-64 bg-white border-r border-steel-200 hidden md:flex flex-col">
<div className="p-6">
<span className="text-xs font-bold text-steel-400 uppercase tracking-widest">Dashboard</span>
</div>
<nav className="flex-1 px-4 space-y-1">
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-steel-900 bg-steel-100 rounded-lg" href="#">
<iconify-icon icon="lucide:bar-chart-2" width="18"></iconify-icon> Overview
                        </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-steel-500 hover:text-steel-900 hover:bg-steel-50 rounded-lg" href="#">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon> Orders
                            <span className="ml-auto bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full text-[10px]">3</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-steel-500 hover:text-steel-900 hover:bg-steel-50 rounded-lg" href="#">
<iconify-icon icon="lucide:box" width="18"></iconify-icon> Products
                        </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-steel-500 hover:text-steel-900 hover:bg-steel-50 rounded-lg" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon> Customers
                        </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-steel-500 hover:text-steel-900 hover:bg-steel-50 rounded-lg" href="#">
<iconify-icon icon="lucide:message-square" width="18"></iconify-icon> Inquiries
                        </a>
</nav>
<div className="p-4 border-t border-steel-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-steel-900 flex items-center justify-center text-white text-xs">A</div>
<div>
<div className="text-sm font-medium text-steel-900">Admin User</div>
<div className="text-xs text-steel-500">admin@steelvent.com</div>
</div>
</div>
</div>
</aside>

<div className="flex-1 overflow-auto p-8">
<div className="flex justify-between items-end mb-8">
<h1 className="text-2xl font-semibold text-steel-900 tracking-tight">Overview</h1>
<button className="px-4 py-2 bg-steel-900 text-white text-sm font-medium rounded hover:bg-steel-800">
                            Download Report
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-lg border border-steel-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-steel-500">Total Revenue</h3>
<iconify-icon className="text-steel-400" icon="lucide:dollar-sign"></iconify-icon>
</div>
<div className="text-2xl font-bold text-steel-900">$124,500</div>
<div className="text-xs text-green-600 mt-1 flex items-center gap-1">
<iconify-icon icon="lucide:trending-up" width="12"></iconify-icon> +12% from last month
                            </div>
</div>
<div className="bg-white p-6 rounded-lg border border-steel-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-steel-500">Pending Quotes</h3>
<iconify-icon className="text-steel-400" icon="lucide:file-text"></iconify-icon>
</div>
<div className="text-2xl font-bold text-steel-900">18</div>
<div className="text-xs text-steel-500 mt-1">Requires action</div>
</div>
<div className="bg-white p-6 rounded-lg border border-steel-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-steel-500">Active Orders</h3>
<iconify-icon className="text-steel-400" icon="lucide:truck"></iconify-icon>
</div>
<div className="text-2xl font-bold text-steel-900">7</div>
<div className="text-xs text-steel-500 mt-1">In fabrication</div>
</div>
</div>

<div className="bg-white border border-steel-200 rounded-lg overflow-hidden">
<div className="px-6 py-4 border-b border-steel-200">
<h3 className="text-sm font-semibold text-steel-900">Recent Inquiries</h3>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-steel-50 text-steel-500">
<tr>
<th className="px-6 py-3 font-medium">ID</th>
<th className="px-6 py-3 font-medium">Client</th>
<th className="px-6 py-3 font-medium">Type</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-steel-100">
<tr className="hover:bg-steel-50 transition-colors">
<td className="px-6 py-4 font-mono text-steel-500">#TR-8821</td>
<td className="px-6 py-4 font-medium text-steel-900">The Burger Joint</td>
<td className="px-6 py-4">Ventilation</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Pending Quote</span></td>
<td className="px-6 py-4 text-steel-500">Oct 24, 2023</td>
</tr>
<tr className="hover:bg-steel-50 transition-colors">
<td className="px-6 py-4 font-mono text-steel-500">#TR-8820</td>
<td className="px-6 py-4 font-medium text-steel-900">Grand Plaza Hotel</td>
<td className="px-6 py-4">Fabrication</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Completed</span></td>
<td className="px-6 py-4 text-steel-500">Oct 23, 2023</td>
</tr>
<tr className="hover:bg-steel-50 transition-colors">
<td className="px-6 py-4 font-mono text-steel-500">#TR-8819</td>
<td className="px-6 py-4 font-medium text-steel-900">KFC Franchise</td>
<td className="px-6 py-4">Maintenance</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Scheduled</span></td>
<td className="px-6 py-4 text-steel-500">Oct 22, 2023</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-steel-900 text-steel-400 border-t border-steel-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<span className="text-white text-lg font-semibold tracking-tight">STEELVENT</span>
<p className="mt-4 text-sm leading-relaxed text-steel-500">
                         Engineered for the modern commercial kitchen. Precision, durability, and compliance.
                     </p>
</div>
<div>
<h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Solutions</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Ventilation Systems</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Fabrication</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gas Interlocks</a></li>
<li><a className="hover:text-white transition-colors" href="#">Duct Cleaning</a></li>
</ul>
</div>
<div>
<h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Company</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">Connect</h3>
<div className="flex space-x-4 mb-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
<div className="flex items-center gap-2 text-sm">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
<span>Secure Payments</span>
</div>
</div>
</div>
<div className="border-t border-steel-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 SteelVent Ltd. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
