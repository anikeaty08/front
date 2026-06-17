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



        // Image Gallery Logic
        function updateMainImage(buttonElement) {
            const mainImage = document.getElementById('main-image');
            const newSrc = buttonElement.getAttribute('data-src');
            
            // Update main image source
            mainImage.src = newSrc;

            // Reset border colors on all thumbnails
            const thumbnails = buttonElement.parentElement.children;
            for (let thumb of thumbnails) {
                thumb.classList.remove('border-[#0465C5]');
                thumb.classList.add('border-transparent');
            }

            // Set active border color on clicked thumbnail
            buttonElement.classList.remove('border-transparent');
            buttonElement.classList.add('border-[#0465C5]');
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
      

<header className="bg-white border-b border-[#EEEEEE] sticky top-0 z-50">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20 gap-8">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-tr from-[#0465C5] to-[#00B2CA] rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-2xl font-medium tracking-tight">eClassify</span>
</div>

<div className="flex-1 max-w-3xl hidden md:flex">
<div className="flex w-full border border-[#EEEEEE] rounded-lg overflow-hidden focus-within:ring-1 focus-within:ring-[#0465C5] focus-within:border-[#0465C5] transition-all bg-[#FAFAFA]">
<button className="flex items-center gap-2 px-4 py-3 bg-[#FAFAFA] border-r border-[#EEEEEE] text-[#5A5A5A] text-sm hover:bg-gray-100 transition-colors">
                            All Categories
                            <iconify-icon className="text-base" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<input className="flex-1 px-4 py-3 bg-transparent outline-none text-[#1E1E1E] placeholder:text-[#999999] text-sm" placeholder="Search for cars, properties, electronics..." type="text"/>
<button className="bg-[#0465C5] hover:bg-[#0353a4] transition-colors text-white px-6 py-3 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-6">
<button className="hidden lg:flex items-center gap-2 text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors text-sm">
<iconify-icon className="text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Add Location
                    </button>
<button className="hidden lg:flex items-center gap-2 text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors text-sm">
<iconify-icon className="text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                        EN
                    </button>
<div className="hidden sm:flex items-center gap-4 text-sm">
<a className="text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors" href="#">Login</a>
<a className="text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors" href="#">Register</a>
</div>
<button className="bg-[#0465C5] hover:bg-[#0353a4] transition-colors text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-medium">
<iconify-icon className="text-lg" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Post Ad
                    </button>
</div>
</div>
</div>

<div className="border-t border-[#EEEEEE] hidden md:block">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<nav className="flex items-center gap-8 h-14 overflow-x-auto text-sm text-[#5A5A5A] whitespace-nowrap">
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:car-linear" strokeWidth="1.5"></iconify-icon> Cars</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon> Real Estate</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:cat-linear" strokeWidth="1.5"></iconify-icon> Pets</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:fridge-linear" strokeWidth="1.5"></iconify-icon> Home Appliances</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon> Furniture</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon> Clothing</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:smartphone-linear" strokeWidth="1.5"></iconify-icon> Electronics</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon> Services</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon> Jobs</a>
<a className="flex items-center gap-2 hover:text-[#0465C5] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:widget-linear" strokeWidth="1.5"></iconify-icon> Other</a>
</nav>
</div>
</div>
</header>

<main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

<nav className="flex items-center gap-2 text-sm text-[#5A5A5A] mb-5">
<a className="hover:text-[#0465C5] transition-colors" href="#">Home</a>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#0465C5] transition-colors" href="#">Cars</a>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#0465C5] transition-colors" href="#">BMW</a>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1E1E1E]">7 Series</span>
</nav>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

<div className="lg:col-span-8 space-y-6">

<div className="grid grid-cols-4 gap-3">

<div className="col-span-4 md:col-span-3 aspect-[4/3] bg-white border border-[#EEEEEE] rounded-xl overflow-hidden shadow-sm relative group">
<img alt="BMW 7 Series Front View" className="w-full h-full object-cover transition-transform duration-500" id="main-image" src="https://images.unsplash.com/photo-1555353540-64fd1b6226f7?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm text-[#5A5A5A] hover:text-[#0465C5] transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="col-span-4 md:col-span-1 flex md:flex-col gap-3 overflow-x-auto md:overflow-hidden">
<button className="flex-shrink-0 w-28 md:w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#EEEEEE] transition-colors bg-white relative" data-src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" onclick="updateMainImage(this)">
<img alt="BMW Side Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</button>
<button className="flex-shrink-0 w-28 md:w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-transparent hover:border-[#EEEEEE] transition-colors bg-white relative" data-src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" onclick="updateMainImage(this)">
<img alt="BMW Rear View" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</button>
<button className="flex-shrink-0 w-28 md:w-full aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#0465C5] transition-colors bg-white relative" data-src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200" onclick="updateMainImage(this)">
<img alt="BMW Interior Dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</button>
</div>
</div>

<div className="bg-white border border-[#EEEEEE] rounded-xl p-5 md:p-6 shadow-sm">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
<div className="w-full">
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1E1E1E]">BMW 7 Series 740Li M Sport</h1>
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1E1E1E] mt-2 mb-5">₹ 1,840,000</div>

<div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-[#5A5A5A] pt-4 border-t border-[#EEEEEE]">
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon> 2023</span>
<span className="w-1 h-1 bg-[#D9D9D9] rounded-full"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:speedometer-linear" strokeWidth="1.5"></iconify-icon> 10,000 km</span>
<span className="w-1 h-1 bg-[#D9D9D9] rounded-full"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:gas-station-linear" strokeWidth="1.5"></iconify-icon> Petrol</span>
<span className="w-1 h-1 bg-[#D9D9D9] rounded-full"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Automatic</span>
</div>
</div>
<div className="flex-shrink-0 flex items-center gap-4 text-sm mt-2 md:mt-0">
<button className="flex items-center gap-1.5 text-[#5A5A5A] hover:text-[#0465C5] transition-colors font-medium">
<iconify-icon className="text-xl" icon="solar:share-linear" strokeWidth="1.5"></iconify-icon> Share
                            </button>
</div>
</div>
</div>

<div className="bg-white border border-[#EEEEEE] rounded-xl p-5 md:p-6 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight mb-4 text-[#1E1E1E]">Specifications</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Car Brand</span>
<span className="text-sm font-medium text-[#1E1E1E]">BMW</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Year of Registration</span>
<span className="text-sm font-medium text-[#1E1E1E]">2023</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Kilometer</span>
<span className="text-sm font-medium text-[#1E1E1E]">0-10,000 km</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Type</span>
<span className="text-sm font-medium text-[#1E1E1E]">Sedan</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Fuel</span>
<span className="text-sm font-medium text-[#1E1E1E]">Petrol</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE]">
<span className="text-sm text-[#5A5A5A]">Seats</span>
<span className="text-sm font-medium text-[#1E1E1E]">5</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE] md:border-b-0">
<span className="text-sm text-[#5A5A5A]">Transmission</span>
<span className="text-sm font-medium text-[#1E1E1E]">Automatic</span>
</div>
<div className="flex justify-between py-3 border-b border-[#EEEEEE] md:border-b-0">
<span className="text-sm text-[#5A5A5A]">Engine Capacity</span>
<span className="text-sm font-medium text-[#1E1E1E]">3,000 CC</span>
</div>
</div>
</div>

<div className="bg-white border border-[#EEEEEE] rounded-xl p-5 md:p-6 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight mb-4 text-[#1E1E1E]">Description</h2>
<div className="text-sm md:text-base text-[#5A5A5A] leading-relaxed space-y-4">
<p>Immaculate condition BMW 740Li M Sport Edition. Single owner, carefully driven and always serviced at authorized BMW service centers.</p>
<ul className="list-disc pl-5 space-y-2 mt-4">
<li>Valid comprehensive insurance until Dec 2024.</li>
<li>Ceramic coating done recently.</li>
<li>BSI Plus package active.</li>
<li>No accident history, original paint.</li>
</ul>
<p>Features include panoramic sunroof, rear seat entertainment, massage seats, Bowers &amp; Wilkins diamond surround sound system, and laser lights.</p>
<p>Price is slightly negotiable for serious buyers. Dealers kindly excuse. Available for viewing in Kodki area.</p>
</div>
</div>

<div className="pt-6">
<div className="flex items-center justify-between mb-5">
<h2 className="text-xl font-semibold tracking-tight text-[#1E1E1E]">Related Ads</h2>
<a className="text-sm font-medium text-[#0465C5] hover:text-[#0353a4] flex items-center gap-1 transition-colors" href="#">
                            View all <iconify-icon className="text-base" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all relative">
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#999999] hover:text-[#0465C5] transition-colors z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1555353540-64fd1b6226f7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 5
                                </div>
</div>
<div className="p-4">
<h3 className="font-medium text-[#1E1E1E] truncate text-base">BMW 5 Series M Sport</h3>
<p className="text-xs text-[#5A5A5A] mt-1 truncate">Automatic • 25,000 km • Petrol</p>
<p className="text-lg font-semibold tracking-tight text-[#1E1E1E] mt-3">₹ 650,000</p>
<div className="flex items-center justify-between mt-4 text-[11px] text-[#999999]">
<span className="flex items-center gap-1"><iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> GUJARAT</span>
<span>2 HOURS AGO</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all relative">
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#999999] hover:text-[#0465C5] transition-colors z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 8
                                </div>
</div>
<div className="p-4">
<h3 className="font-medium text-[#1E1E1E] truncate text-base">Audi A8 L Luxury</h3>
<p className="text-xs text-[#5A5A5A] mt-1 truncate">Automatic • 12,000 km • Diesel</p>
<p className="text-lg font-semibold tracking-tight text-[#1E1E1E] mt-3">₹ 1,450,000</p>
<div className="flex items-center justify-between mt-4 text-[11px] text-[#999999]">
<span className="flex items-center gap-1"><iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> GUJARAT</span>
<span>5 HOURS AGO</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all relative hidden sm:block">
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#999999] hover:text-[#0465C5] transition-colors z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 3
                                </div>
</div>
<div className="p-4">
<h3 className="font-medium text-[#1E1E1E] truncate text-base">Mercedes-Benz S-Class</h3>
<p className="text-xs text-[#5A5A5A] mt-1 truncate">Automatic • 18,000 km • Petrol</p>
<p className="text-lg font-semibold tracking-tight text-[#1E1E1E] mt-3">₹ 1,600,000</p>
<div className="flex items-center justify-between mt-4 text-[11px] text-[#999999]">
<span className="flex items-center gap-1"><iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> MUMBAI</span>
<span>1 DAY AGO</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-[#EEEEEE] shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-all relative hidden lg:block">
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#999999] hover:text-[#0465C5] transition-colors z-10">
<iconify-icon className="text-lg" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
<img alt="Car" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded flex items-center gap-1 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:gallery-linear" strokeWidth="1.5"></iconify-icon> 6
                                </div>
</div>
<div className="p-4">
<h3 className="font-medium text-[#1E1E1E] truncate text-base">Porsche Panamera</h3>
<p className="text-xs text-[#5A5A5A] mt-1 truncate">Automatic • 8,000 km • Petrol</p>
<p className="text-lg font-semibold tracking-tight text-[#1E1E1E] mt-3">₹ 2,100,000</p>
<div className="flex items-center justify-between mt-4 text-[11px] text-[#999999]">
<span className="flex items-center gap-1"><iconify-icon className="text-sm" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> DELHI</span>
<span>2 DAYS AGO</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">

<div className="bg-white border border-[#EEEEEE] rounded-xl p-5 md:p-6 shadow-sm">
<div className="flex items-center gap-4 mb-5">
<div className="relative shrink-0">
<img alt="Seller Avatar" className="w-14 h-14 rounded-full object-cover border border-[#EEEEEE]" src="https://ui-avatars.com/api/?name=Arjun+Patel&amp;background=F3F4F6&amp;color=1E1E1E"/>
<div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5">
<h3 className="text-base font-semibold tracking-tight text-[#1E1E1E] truncate">Arjun Patel</h3>
<iconify-icon className="text-[#0465C5] text-lg shrink-0" icon="solar:verify-check-bold" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-1 mt-0.5">
<iconify-icon className="text-sm text-yellow-400" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-[#1E1E1E]">4.8</span>
<span className="text-xs text-[#999999] ml-1">(12 reviews)</span>
</div>
<p className="text-[11px] text-[#5A5A5A] mt-1.5 flex items-center gap-1">
<iconify-icon className="text-sm" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon> Member since Oct 2021
                            </p>
</div>
</div>

<div className="flex flex-col gap-2.5">
<button className="w-full bg-[#0465C5] hover:bg-[#0353a4] transition-colors text-white py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
                            Start Chat
                        </button>
<button className="w-full bg-white border border-[#EEEEEE] hover:bg-gray-50 transition-colors text-[#1E1E1E] py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                            Show Phone Number
                        </button>
<button className="w-full bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/20 transition-colors text-[#1E1E1E] py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-xl text-[#25D366]" icon="solar:chat-line-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp
                        </button>
<button className="w-full bg-white border border-[#EEEEEE] hover:bg-gray-50 transition-colors text-[#1E1E1E] py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                            Email
                        </button>
</div>
</div>

<div className="bg-white border border-[#EEEEEE] rounded-xl p-5 md:p-6 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight mb-4">Location</h3>
<p className="text-sm font-medium text-[#1E1E1E] mb-1">Kodki Road near Royal Residency</p>
<p className="text-sm text-[#5A5A5A] mb-4">Gujarat, India 370001</p>
<div className="w-full h-40 bg-gray-100 rounded-xl overflow-hidden border border-[#EEEEEE] relative">
<img alt="Map Preview" className="w-full h-full object-cover opacity-80 grayscale" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<iconify-icon className="text-3xl text-[#0465C5] drop-shadow-md" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="bg-[#FAFAFA] border border-[#EEEEEE] rounded-xl p-5 shadow-sm">
<h4 className="text-sm font-medium text-[#1E1E1E] mb-3 flex items-center gap-2">
<iconify-icon className="text-lg text-[#00B2CA]" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon> Safety Tips
                    </h4>
<ul className="text-xs text-[#5A5A5A] space-y-2 list-disc pl-4">
<li>Don't pay anything in advance.</li>
<li>Meet the seller in a safe, public place.</li>
<li>Inspect the item before buying.</li>
</ul>
</div>

<div className="flex items-center justify-between text-xs px-2 mt-2">
<span className="text-[#999999] flex items-center gap-1.5"><iconify-icon className="text-sm" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Ad ID: 8945201</span>
<button className="text-[#5A5A5A] hover:text-red-600 transition-colors flex items-center gap-1.5 underline underline-offset-2">
<iconify-icon className="text-sm" icon="solar:flag-linear" strokeWidth="1.5"></iconify-icon> Report this ad
                    </button>
</div>
</div>
</div>
</main>

<section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="bg-gradient-to-r from-[#0465C5] to-[#00B2CA] rounded-2xl overflow-hidden relative shadow-lg">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-14 relative z-10">
<div className="text-white space-y-5 text-center md:text-left">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">Experience the Magic of<br/>the eClassify App</h2>
<p className="text-base text-white/90 max-w-md mx-auto md:mx-0">Buy, sell, and chat on the go. Download our free app and never miss a great deal again. Available on iOS and Android.</p>
<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
<button className="bg-white text-[#1E1E1E] px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
<iconify-icon className="text-2xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-none text-[#5A5A5A]">GET IT ON</div>
<div className="text-sm font-medium leading-tight mt-0.5">Google Play</div>
</div>
</button>
<button className="bg-white text-[#1E1E1E] px-5 py-2.5 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
<iconify-icon className="text-2xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-left">
<div className="text-[10px] leading-none text-[#5A5A5A]">DOWNLOAD ON THE</div>
<div className="text-sm font-medium leading-tight mt-0.5">App Store</div>
</div>
</button>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-[20%] -mb-20 w-64 h-64 bg-[#00B2CA]/30 rounded-full blur-3xl"></div>
</div>
</section>

<footer className="bg-white border-t border-[#EEEEEE] pt-14 pb-8 mt-6">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
<div className="lg:col-span-2 pr-0 lg:pr-12">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-tr from-[#0465C5] to-[#00B2CA] rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-2xl font-medium tracking-tight">eClassify</span>
</div>
<p className="text-sm text-[#5A5A5A] leading-relaxed">Unleash the power of your passion. Share your unique creations, spark conversations, and find like-minded individuals. eClassify is more than just a marketplace - it's a community where your content shines.</p>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-5">Quick Links</h4>
<ul className="space-y-3 text-sm text-[#5A5A5A]">
<li><a className="hover:text-[#0465C5] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#0465C5] transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-[#0465C5] transition-colors" href="#">Subscription</a></li>
<li><a className="hover:text-[#0465C5] transition-colors" href="#">Our Blog</a></li>
<li><a className="hover:text-[#0465C5] transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight mb-5">Get in touch</h4>
<ul className="space-y-3 text-sm text-[#5A5A5A]">
<li className="flex items-center gap-2.5"><iconify-icon className="text-lg text-[#999999]" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon> wrteam@gmail.com</li>
<li className="flex items-center gap-2.5"><iconify-icon className="text-lg text-[#999999]" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> +91 9797945459</li>
<li className="flex items-center gap-2.5"><iconify-icon className="text-lg text-[#999999]" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> +91 9797945459</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-[#EEEEEE] text-xs text-[#999999] gap-4">
<div className="flex items-center gap-5">
<a className="hover:text-[#1E1E1E] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#1E1E1E] transition-colors" href="#">T&amp;Cs</a>
<a className="hover:text-[#1E1E1E] transition-colors" href="#">Refund Policy</a>
</div>
<p>Copyright © eClassify 2026. All Rights Reserved</p>
<div className="flex items-center gap-4">
<a className="hover:text-[#1E1E1E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#1E1E1E] transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
