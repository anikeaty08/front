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
      

<header className="bg-white border-b border-[#EEEEEE] sticky top-0 z-50">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 gap-8">

<a className="flex-shrink-0 flex items-center gap-2" href="#">
<div className="w-10 h-10 rounded-full flex items-center justify-center relative border-[3px] border-[#0465C5]">
<div className="absolute inset-[3px] border-[3px] border-[#00B2CA] rounded-full border-t-transparent -rotate-45"></div>
<span className="text-[#0465C5] font-semibold text-lg tracking-tight">e</span>
</div>
<span className="text-2xl font-semibold tracking-tight text-[#1E1E1E]">eClassify</span>
</a>

<div className="flex-1 max-w-3xl hidden md:block">
<div className="flex items-center w-full h-12 bg-[#FAFAFA] border border-[#EEEEEE] rounded-lg overflow-hidden focus-within:border-[#0465C5] focus-within:ring-1 focus-within:ring-[#0465C5] transition-all">
<button className="flex items-center gap-2 px-4 h-full bg-[#FAFAFA] border-r border-[#EEEEEE] text-[#5A5A5A] text-sm font-medium hover:bg-[#EEEEEE] transition-colors whitespace-nowrap">
                            All Categories
                            <iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<input className="flex-1 h-full px-4 bg-transparent text-[#1E1E1E] text-base placeholder:text-[#999999] outline-none" placeholder="Search for cars, properties, electronics..." type="text"/>
<button className="h-full px-6 bg-[#0465C5] text-white hover:bg-blue-700 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-6 flex-shrink-0">
<button className="hidden lg:flex items-center gap-2 text-[#5A5A5A] hover:text-[#0465C5] transition-colors">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Add Location</span>
</button>
<button className="hidden lg:flex items-center gap-1.5 text-[#5A5A5A] hover:text-[#0465C5] transition-colors">
<iconify-icon className="text-xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">EN</span>
</button>
<div className="hidden sm:flex items-center gap-4 text-sm font-medium">
<a className="text-[#1E1E1E] hover:text-[#0465C5] transition-colors" href="#">Login</a>
<a className="text-[#1E1E1E] hover:text-[#0465C5] transition-colors" href="#">Register</a>
</div>
<a className="flex items-center gap-2 bg-[#0465C5] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm" href="#">
<iconify-icon className="text-xl" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Post Ad
                    </a>
</div>
</div>
</div>
</header>

<nav className="bg-white border-b border-[#EEEEEE] shadow-sm">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
<ul className="flex items-center gap-8 h-14 overflow-x-auto scrollbar-hide text-sm font-medium text-[#5A5A5A] whitespace-nowrap">
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:tag-linear" strokeWidth="1.5"></iconify-icon> Cars</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:home-angle-linear" strokeWidth="1.5"></iconify-icon> Real Estate</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:paw-linear" strokeWidth="1.5"></iconify-icon> Pets</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon> Clothing</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon> Electronics</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon> Services</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon> Jobs</a></li>
<li><a className="flex items-center gap-2 hover:text-[#1E1E1E] transition-colors h-14" href="#"><iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Other</a></li>
</ul>
</div>
</nav>

<main className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

<nav className="flex items-center gap-2 text-sm text-[#999999] mb-6">
<a className="hover:text-[#1E1E1E] transition-colors" href="#">Home</a>
<span>/</span>
<a className="hover:text-[#1E1E1E] transition-colors" href="#">Automotive &amp; Vehicles</a>
<span>/</span>
<span className="text-[#5A5A5A]">BMW 7 Series</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

<div className="lg:col-span-8 flex flex-col gap-8">

<div className="bg-white rounded-xl border border-[#EEEEEE] overflow-hidden shadow-sm">

<div className="relative aspect-video sm:aspect-[16/10] bg-gray-100 group cursor-pointer">
<img alt="BMW 7 Series Main" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#1E1E1E] shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#1E1E1E] shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-xl" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="p-4 flex gap-3 overflow-x-auto scrollbar-hide border-t border-[#EEEEEE]">
<button className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-[#0465C5]">
<img alt="Thumb 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-transparent hover:border-[#EEEEEE] transition-colors">
<img alt="Thumb 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-transparent hover:border-[#EEEEEE] transition-colors">
<img alt="Thumb 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border-2 border-transparent hover:border-[#EEEEEE] transition-colors">
<img alt="Thumb 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] p-6 lg:p-8 shadow-sm">
<h1 className="text-3xl font-semibold tracking-tight text-[#1E1E1E] mb-2">BMW 7 Series</h1>
<div className="text-4xl font-semibold tracking-tight text-[#0465C5] mb-5">₹ 1,840,000</div>
<div className="flex items-center text-sm text-[#999999] gap-2">
<iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span>Posted on December 11, 2024</span>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] p-6 lg:p-8 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-[#1E1E1E] mb-6">Specifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Car Brand</span>
<span className="text-sm font-medium text-[#1E1E1E]">BMW</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Year of Registration</span>
<span className="text-sm font-medium text-[#1E1E1E]">2023</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Kilometer</span>
<span className="text-sm font-medium text-[#1E1E1E]">0-10,000 km</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Type</span>
<span className="text-sm font-medium text-[#1E1E1E]">SUV</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Fuel</span>
<span className="text-sm font-medium text-[#1E1E1E]">Petrol</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Seats</span>
<span className="text-sm font-medium text-[#1E1E1E]">6</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Transmission</span>
<span className="text-sm font-medium text-[#1E1E1E]">Manual</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Horsepower</span>
<span className="text-sm font-medium text-[#1E1E1E]">750-800 HP</span>
</div>
<div className="flex items-center justify-between py-3.5 border-b border-[#EEEEEE] md:border-b-0">
<span className="text-sm text-[#5A5A5A]">Engine Capacity</span>
<span className="text-sm font-medium text-[#1E1E1E]">2,000-2,500 CC</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] p-6 lg:p-8 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-[#1E1E1E] mb-5">Description</h2>
<div className="text-base text-[#5A5A5A] leading-relaxed space-y-4">
<p>Looking for a luxurious ride that combines performance, comfort, and state-of-the-art technology? Look no further! Presenting a pristine condition BMW 7 Series, meticulously maintained and driven with utmost care.</p>
<p>This vehicle comes fully loaded with premium features including a panoramic sunroof, adaptive air suspension, advanced driver assistance systems, and a premium surround sound setup. The interior boasts premium leather upholstery with heated and ventilated seats for maximum comfort on long journeys.</p>
<p>Under manufacturer warranty with a complete dealership service history available. No accidents, original paintwork throughout. Perfect for executives or anyone who appreciates the finer things in life. Price is slightly negotiable for serious buyers.</p>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-[#EEEEEE] p-6 shadow-sm">

<div className="flex items-start gap-4 mb-6">
<div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden shrink-0 border border-[#EEEEEE]">
<img alt="David Miller" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="flex items-center gap-1.5 mb-1">
<h3 className="text-lg font-semibold text-[#1E1E1E]">David Miller</h3>
<div className="flex items-center justify-center w-5 h-5 bg-[#00B2CA]/10 rounded-full text-[#00B2CA]" title="Verified Seller">
<iconify-icon className="text-xs" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
</div>
<div className="text-sm text-[#5A5A5A] flex items-center gap-1.5 mb-1.5">
<iconify-icon className="text-yellow-500 fill-yellow-500" icon="solar:star-linear"></iconify-icon>
<span className="font-medium text-[#1E1E1E]">5.0</span>
<span className="text-[#EEEEEE]">|</span>
<span>1 Rating</span>
</div>
<div className="text-xs text-[#999999]">Member since Oct 2021</div>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full flex items-center justify-center gap-2 bg-[#0465C5] text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                            Start Chat
                        </button>
<button className="w-full flex items-center justify-center gap-2 bg-white border border-[#EEEEEE] text-[#1E1E1E] py-3 rounded-lg text-sm font-medium hover:bg-[#FAFAFA] hover:border-[#CECECE] transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            Call Mobile
                        </button>
<button className="w-full flex items-center justify-center gap-2 bg-white border border-[#EEEEEE] text-[#1E1E1E] py-3 rounded-lg text-sm font-medium hover:bg-[#FAFAFA] hover:text-green-600 hover:border-green-200 transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp
                        </button>
<button className="w-full flex items-center justify-center gap-2 bg-white border border-[#EEEEEE] text-[#1E1E1E] py-3 rounded-lg text-sm font-medium hover:bg-[#FAFAFA] hover:border-[#CECECE] transition-all shadow-sm">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            Email
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] p-6 shadow-sm">
<h3 className="text-lg font-semibold text-[#1E1E1E] mb-4 tracking-tight">Location</h3>
<div className="flex items-start gap-3 text-sm text-[#5A5A5A] mb-5">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="leading-relaxed">Kodki, Gujarat, India</span>
</div>

<div className="aspect-video bg-[#EEEEEE] rounded-lg mb-5 relative overflow-hidden group border border-[#EEEEEE]">
<img alt="Map" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=600&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(80%)'}}/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#0465C5]/10 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm animate-pulse">
<iconify-icon className="text-2xl text-[#0465C5] fill-[#0465C5]" icon="solar:map-point-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full text-sm font-medium text-[#0465C5] hover:bg-[#FAFAFA] py-2.5 border border-[#EEEEEE] rounded-lg transition-colors flex items-center justify-center gap-2">
                        View on Google Map
                    </button>
</div>

<div className="flex items-center justify-between p-5 bg-white rounded-xl border border-[#EEEEEE] shadow-sm">
<span className="text-sm text-[#999999]">Ad id #1064</span>
<button className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
                        Report this ad
                    </button>
</div>
</div>
</div>

<div className="mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-[#1E1E1E] mb-8">Related Ads</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200 cursor-pointer">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
<img alt="Mercedes-Benz" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full text-[#999999] hover:text-red-500 shadow-sm transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur rounded text-xs font-medium text-[#1E1E1E] flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 8
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-[#1E1E1E] line-clamp-1 mb-1">Mercedes C-Class</h3>
<p className="text-sm text-[#5A5A5A] mb-4">Automatic • 15,000 km</p>
<div className="text-xl font-semibold tracking-tight text-[#1E1E1E] mt-auto">₹ 1,450,000</div>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-[#EEEEEE] text-xs text-[#999999]">
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Delhi</div>
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> 2h ago</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200 cursor-pointer">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
<img alt="Audi RS5" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full text-[#999999] hover:text-red-500 shadow-sm transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur rounded text-xs font-medium text-[#1E1E1E] flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 6
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-[#1E1E1E] line-clamp-1 mb-1">Audi RS5 Sportback</h3>
<p className="text-sm text-[#5A5A5A] mb-4">Automatic • 12,400 km</p>
<div className="text-xl font-semibold tracking-tight text-[#1E1E1E] mt-auto">₹ 1,780,500</div>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-[#EEEEEE] text-xs text-[#999999]">
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Mumbai</div>
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> 1d ago</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200 cursor-pointer">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
<img alt="BMW 5 Series" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full text-[#999999] hover:text-red-500 shadow-sm transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur rounded text-xs font-medium text-[#1E1E1E] flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 4
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-[#1E1E1E] line-clamp-1 mb-1">BMW 5 Series M Sport</h3>
<p className="text-sm text-[#5A5A5A] mb-4">Automatic • 30,000 km</p>
<div className="text-xl font-semibold tracking-tight text-[#1E1E1E] mt-auto">₹ 1,380,000</div>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-[#EEEEEE] text-xs text-[#999999]">
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Pune</div>
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> 3d ago</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all duration-200 cursor-pointer">
<div className="relative aspect-[4/3] bg-gray-100 overflow-hidden shrink-0">
<img alt="Range Rover" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute top-3 right-3 p-2 bg-white rounded-full text-[#999999] hover:text-red-500 shadow-sm transition-colors z-10">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur rounded text-xs font-medium text-[#1E1E1E] flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 9
                        </div>
</div>
<div className="p-5 flex flex-col flex-grow">
<h3 className="text-lg font-medium text-[#1E1E1E] line-clamp-1 mb-1">Range Rover Velar</h3>
<p className="text-sm text-[#5A5A5A] mb-4">Automatic • 5,000 km</p>
<div className="text-xl font-semibold tracking-tight text-[#1E1E1E] mt-auto">₹ 2,620,000</div>
<div className="flex items-center justify-between mt-4 pt-4 border-t border-[#EEEEEE] text-xs text-[#999999]">
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon> Gujarat</div>
<div className="flex items-center gap-1 uppercase tracking-wider"><iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> 1w ago</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 bg-[#0465C5] rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-lg">

<div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="z-10 max-w-xl mb-10 md:mb-0">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Experience the Magic of the eClassify App
                </h2>
<p className="text-xl text-blue-100 mb-10 leading-relaxed font-light">
                    Buy, sell, and chat on the go. Download our free app and never miss a great deal again. Available on iOS and Android.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm group">
<iconify-icon className="text-2xl text-[#1E1E1E]" icon="solar:play-bold"></iconify-icon>
<div className="text-left">
<div className="text-xs text-[#5A5A5A] font-medium uppercase tracking-wider">GET IT ON</div>
<div className="text-lg font-semibold text-[#1E1E1E] leading-none mt-0.5 tracking-tight">Google Play</div>
</div>
</button>
<button className="flex items-center gap-3 bg-white px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors shadow-sm group">
<iconify-icon className="text-3xl text-[#1E1E1E]" icon="solar:apple-bold"></iconify-icon>
<div className="text-left">
<div className="text-xs text-[#5A5A5A] font-medium uppercase tracking-wider">Download on the</div>
<div className="text-lg font-semibold text-[#1E1E1E] leading-none mt-0.5 tracking-tight">App Store</div>
</div>
</button>
</div>
</div>

<div className="z-10 w-full md:w-[400px] h-[300px] relative hidden md:block">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[280px] h-[580px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-white/20 rotate-12 overflow-hidden flex flex-col transform origin-bottom-right">
<div className="h-20 bg-[#FAFAFA] border-b border-[#EEEEEE] flex items-center px-6">
<div className="w-full h-8 bg-gray-200 rounded-full"></div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4 bg-white">
<div className="w-full h-32 bg-gray-100 rounded-xl"></div>
<div className="grid grid-cols-2 gap-4">
<div className="w-full h-24 bg-gray-100 rounded-xl"></div>
<div className="w-full h-24 bg-gray-100 rounded-xl"></div>
<div className="w-full h-24 bg-gray-100 rounded-xl"></div>
<div className="w-full h-24 bg-gray-100 rounded-xl"></div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-[#EEEEEE] mt-8 pt-20 pb-8">
<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full flex items-center justify-center relative border-2 border-[#0465C5]">
<div className="absolute inset-[2px] border-2 border-[#00B2CA] rounded-full border-t-transparent -rotate-45"></div>
<span className="text-[#0465C5] font-semibold text-sm tracking-tight">e</span>
</div>
<span className="text-xl font-semibold tracking-tight text-[#1E1E1E]">eClassify</span>
</a>
<p className="text-base text-[#5A5A5A] leading-relaxed mb-6 pe-4">
                        Unleash the power of your passion. Share your unique creations, spark conversations, and find like-minded individuals. eClassify is more than just a marketplace - it's a community where your content shines.
                    </p>
</div>

<div>
<h4 className="text-lg font-semibold text-[#1E1E1E] mb-6">Quick Links</h4>
<ul className="flex flex-col gap-4">
<li><a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="#">About Us</a></li>
<li><a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="#">Contact Us</a></li>
<li><a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="#">Subscription</a></li>
<li><a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="#">Our Blog</a></li>
<li><a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="#">FAQs</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold text-[#1E1E1E] mb-6">Get in touch</h4>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#999999] mt-0.5" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="mailto:wrteam@gmail.com">wrteam@gmail.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#999999] mt-0.5" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="tel:9797945459">9797945459</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-[#999999] mt-0.5" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-base text-[#5A5A5A] hover:text-[#0465C5] transition-colors" href="tel:9797945459">9797945459</a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold text-[#1E1E1E] mb-6">Download App</h4>
<div className="flex flex-col gap-3">
<a className="flex items-center gap-3 bg-black px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors w-max" href="#">
<iconify-icon className="text-2xl text-white" icon="solar:play-bold"></iconify-icon>
<div className="text-left text-white">
<div className="text-[10px] font-medium uppercase tracking-wide opacity-80">GET IT ON</div>
<div className="text-sm font-semibold leading-none mt-0.5">Google Play</div>
</div>
</a>
<a className="flex items-center gap-3 bg-black px-4 py-2.5 rounded-lg hover:bg-gray-800 transition-colors w-max" href="#">
<iconify-icon className="text-2xl text-white" icon="solar:apple-bold"></iconify-icon>
<div className="text-left text-white">
<div className="text-[10px] font-medium uppercase tracking-wide opacity-80">Download on the</div>
<div className="text-sm font-semibold leading-none mt-0.5">App Store</div>
</div>
</a>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#EEEEEE] gap-4">
<div className="flex items-center gap-6 text-sm text-[#999999]">
<a className="hover:text-[#5A5A5A] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#5A5A5A] transition-colors" href="#">T&amp;Cs</a>
<a className="hover:text-[#5A5A5A] transition-colors" href="#">Refund Policy</a>
</div>
<p className="text-sm text-[#999999]">
                    Copyright © eClassify 2026. All Rights Reserved
                </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-[#EEEEEE] flex items-center justify-center text-[#999999] hover:text-[#0465C5] hover:border-[#0465C5] transition-all bg-[#FAFAFA]" href="#">
<iconify-icon className="text-lg" icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#EEEEEE] flex items-center justify-center text-[#999999] hover:text-[#0465C5] hover:border-[#0465C5] transition-all bg-[#FAFAFA]" href="#">
<iconify-icon className="text-sm" icon="ri:twitter-x-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#EEEEEE] flex items-center justify-center text-[#999999] hover:text-[#0465C5] hover:border-[#0465C5] transition-all bg-[#FAFAFA]" href="#">
<iconify-icon className="text-lg" icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#EEEEEE] flex items-center justify-center text-[#999999] hover:text-[#0465C5] hover:border-[#0465C5] transition-all bg-[#FAFAFA]" href="#">
<iconify-icon className="text-lg" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
