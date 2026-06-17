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
      

<div className="bg-slate-900 text-slate-300 py-2.5 px-4 text-sm border-b border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-sky-400" data-lucide="truck" strokeWidth="1.5"></i>
<span className="font-medium tracking-wide font-geist" style={{}}>Free shipping for all orders over £100</span>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
<span className="font-geist" style={{}}>sales@tfhgazebos.co.uk</span>
</a>
<div className="flex items-center gap-2 border-l border-slate-700 pl-4">
<img alt="UK" className="w-5 h-auto rounded-sm opacity-80" src="https://flagcdn.com/w20/gb.png"/>
<span className="font-medium font-geist" style={{}}>GBP</span>
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
<div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">

<a className="flex-shrink-0 flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-slate-900 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:bg-sky-600 transition-colors">
<i className="w-6 h-6" data-lucide="tent" strokeWidth="1.5"></i>
</div>
<span className="text-2xl tracking-tight text-slate-900 font-geist font-semibold" style={{}}>TFH GAZEBOS</span>
</a>

<div className="w-full max-w-lg relative">
<input className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-base placeholder:text-slate-400" placeholder="Find your perfect gazebo..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center gap-6 lg:gap-8 flex-shrink-0">
<div className="hidden md:flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="headphones" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide font-geist" style={{}}>Need help?</span>
<span className="text-lg font-semibold text-slate-900 tracking-tight font-geist" style={{}}>01277 350524</span>
</div>
</div>
<div className="flex items-center gap-6 border-l border-slate-100 pl-6">
<a className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
<span className="hidden sm:inline font-medium font-geist" style={{}}>Account</span>
</a>
<a className="flex items-center gap-2 text-slate-600 hover:text-sky-600 transition-colors relative" href="#">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="hidden sm:inline font-medium font-geist" style={{}}>0</span>
</a>
</div>
</div>
</div>
</div>

<div className="hidden md:block border-t border-slate-100">
<nav className="max-w-7xl mx-auto px-4">
<ul className="flex items-center justify-center gap-8 py-4">
<li><a className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors font-geist" href="#" style={{}}>Popup Gazebos</a></li>
<li><a className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors font-geist" href="#" style={{}}>Printed Gazebos</a></li>
<li><a className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors font-geist" href="#" style={{}}>Printed Accessories</a></li>
<li><a className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors font-geist" href="#" style={{}}>Gazebo Accessories</a></li>
<li><a className="text-base font-medium text-red-500 hover:text-red-600 transition-colors font-geist" href="#" style={{}}>Special Offers</a></li>
<li><a className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors font-geist" href="#" style={{}}>Our Work</a></li>
</ul>
</nav>
</div>
</header>

<section className="relative h-[600px] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gazebo Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
</div>
<div className="w-full max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm font-geist font-semibold" style={{}}>
                    Built to Last. <br/>
                    Trusted Across the UK.
                </h1>
<p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8 max-w-xl font-light font-geist" style={{}}>
                    TFH Gazebos is a UK-based supplier of high-quality pop-up gazebos designed for leisure, trade, and heavy-duty commercial use.
                </p>
<div className="flex gap-4">
<a className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg hover:bg-sky-50 transition-colors shadow-lg shadow-slate-900/20 font-geist" href="#" style={{}}>
                        Shop Gazebos
                    </a>
<a className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm font-geist" href="#" style={{}}>
                        View Catalogue
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-16 relative z-20">

<div className="bg-sky-50/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden group border border-sky-100">
<div className="relative z-10">
<span className="text-sm font-medium text-sky-600 uppercase tracking-wide block mb-2 font-geist" style={{}}>Who we are</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight font-geist" style={{}}>UK supplier of pop-up gazebos</h3>
</div>
<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-200/50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
</div>

<div className="bg-slate-50/95 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden group border border-slate-200">
<div className="relative z-10">
<span className="text-sm font-medium text-slate-500 uppercase tracking-wide block mb-2 font-geist" style={{}}>What we do</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight font-geist" style={{}}>Serving traders, event organizers &amp; homeowners</h3>
</div>
<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-200/50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
</div>

<div className="bg-sky-50/90 backdrop-blur-sm p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden group border border-sky-100">
<div className="relative z-10">
<span className="text-sm font-medium text-sky-600 uppercase tracking-wide block mb-2 font-geist" style={{}}>Who we serve</span>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight font-geist" style={{}}>Focused on durability, quality &amp; value</h3>
</div>
<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sky-200/50 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative group">
<div className="absolute inset-0 bg-slate-900/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-1"></div>
<img alt="Outdoor Gazebo" className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5 text-sky-600" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-semibold text-slate-900 font-geist" style={{}}>Premium Quality</p>
<p className="text-sm text-slate-500 font-geist" style={{}}>ISO 9001 Certified</p>
</div>
</div>
</div>
</div>
</div>

<div className="pt-4">
<h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mb-8 font-geist font-semibold" style={{}}>About TFH Gazebos</h2>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed font-normal">
<p className="font-geist" style={{}}>
                            Over the years, we have strived to build a strong reputation for delivering top-notch products and exceptional customer support. Our commitment to quality and customer service has been unwavering, and it is deeply ingrained in our company's culture.
                        </p>
<p className="font-geist" style={{}}>
                            As a small family business with over 15 years in the industry we have grown into one of the markets leaders in the UK, we understand the value of personal relationships and the importance of going above and beyond to meet the needs of our customers.
                        </p>
<p className="font-geist" style={{}}>
                            At the heart of our company is our dedication to our founding principles - quality and customer service. We are grateful to our loyal customers who have supported us throughout our journey.
                        </p>
<p className="font-geist" style={{}}>
                            With our extensive experience in the industry, TFH Gazebos understands the importance of having a reliable and durable pop-up gazebo for your event. Whether it's a trade show, outdoor event, market stall, or any other occasion, we have the perfect solution.
                        </p>
</div>
<div className="mt-10 border-t border-slate-100 pt-8">
<p className="text-xl italic font-serif text-slate-800 mb-2 font-geist" style={{}}>Let us take care of you!</p>
<p className="font-semibold text-slate-900 font-geist" style={{}}>Love the TFH Team</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
<img alt="Gazebo in field" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>

<div className="order-1 lg:order-2 flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mb-10 font-geist font-semibold" style={{}}>Why Choose TFH Gazebos</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>UK-based supplier</h4>
<p className="text-slate-600 mt-1 font-geist" style={{}}>Local stock, fast shipping, and easy returns.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>Quality-tested gazebos</h4>
<p className="text-slate-600 mt-1 font-geist" style={{}}>Rigorously tested against wind and weather conditions.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>Wide range (Leisure → Heavy Duty)</h4>
<p className="text-slate-600 mt-1 font-geist" style={{}}>From garden parties to commercial trade shows.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>Competitive pricing</h4>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>Reliable customer support</h4>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-sky-600 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-white" data-lucide="check" strokeWidth="2"></i>
</div>
<div>
<h4 className="text-xl font-medium text-slate-900 font-geist" style={{}}>Warranty-backed products</h4>
</div>
</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 font-geist" style={{}}>
<i className="w-5 h-5 text-slate-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                        Here we are:
                    </h3>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 font-geist" style={{}}>
<i className="w-5 h-5 text-slate-400" data-lucide="mail" strokeWidth="1.5"></i>
                        Contact:
                    </h3>
<div className="space-y-4">
<div>
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide font-geist" style={{}}>Email</span>
<a className="block text-sky-600 hover:underline font-geist" href="mailto:sales@tfhgazebos.co.uk" style={{}}>sales@tfhgazebos.co.uk</a>
</div>
<div>
<span className="text-sm font-medium text-slate-400 uppercase tracking-wide font-geist" style={{}}>Telephone</span>
<p className="text-slate-900 font-geist" style={{}}>01277 350524</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2 font-geist" style={{}}>
<i className="w-5 h-5 text-slate-400" data-lucide="clock" strokeWidth="1.5"></i>
                        Opening Hours:
                    </h3>
<div className="space-y-2 text-slate-600">
<p className="font-geist" style={{}}>Monday to Friday:<br/><span className="text-slate-900 font-medium font-geist" style={{}}>9am - 5pm</span></p>
<p className="text-amber-600 italic text-sm mt-2 font-geist" style={{}}>Closed at weekends</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-4xl text-slate-900 tracking-tight mb-4 font-geist font-semibold" style={{}}>Explore Our Products</h2>
<p className="text-lg text-slate-500 max-w-2xl font-geist" style={{}}>Check out our top gazebo products to find the ideal fit for your area and arrangement.</p>
</div>
<a className="hidden sm:flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm font-geist" href="#" style={{}}>
                    Explore All <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">

<button className="absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-600 hover:text-sky-600 z-10 hidden lg:flex">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg text-slate-600 hover:text-sky-600 z-10 hidden lg:flex">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all bg-white hover:shadow-lg">
<div className="relative p-6 bg-slate-50 aspect-square flex items-center justify-center">
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full text-xs font-medium text-red-600 font-geist" style={{}}>
<i className="w-3 h-3" data-lucide="tag"></i> Sale
                            </div>
<img alt="Gazebo" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-sky-600 transition-colors font-geist" style={{}}>Santas Grotto Gazebo Option 1</h3>
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-red-600 font-geist" style={{}}>£1,140.00</span>
<span className="text-sm text-slate-400 line-through font-geist" style={{}}>£330.00</span>
</div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all bg-white hover:shadow-lg">
<div className="relative p-6 bg-slate-50 aspect-square flex items-center justify-center">
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full text-xs font-medium text-sky-600 font-geist" style={{}}>
<i className="w-3 h-3" data-lucide="sparkles"></i> New
                            </div>
<img alt="Cleaner" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-sky-600 transition-colors font-geist" style={{}}>Awning &amp; Tent Cleaner - 1L</h3>
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-red-600 font-geist" style={{}}>£6.50</span>
<span className="text-sm text-slate-400 line-through font-geist" style={{}}>£9.99</span>
</div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all bg-white hover:shadow-lg">
<div className="relative p-6 bg-slate-50 aspect-square flex items-center justify-center">
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full text-xs font-medium text-red-600 font-geist" style={{}}>
<i className="w-3 h-3" data-lucide="tag"></i> Sale
                            </div>
<img alt="Red White Gazebo" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-sky-600 transition-colors font-geist" style={{}}>3m x 6m S50 Red &amp; White</h3>
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-red-600 font-geist" style={{}}>£825.00</span>
<span className="text-sm text-slate-400 line-through font-geist" style={{}}>£925.00</span>
</div>
</div>
</div>

<div className="group border border-slate-200 rounded-xl overflow-hidden hover:border-slate-300 transition-all bg-white hover:shadow-lg">
<div className="relative p-6 bg-slate-50 aspect-square flex items-center justify-center">
<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-sky-50 border border-sky-100 px-2.5 py-1 rounded-full text-xs font-medium text-sky-600 font-geist" style={{}}>
<i className="w-3 h-3" data-lucide="sparkles"></i> New
                            </div>
<img alt="Refill" className="w-3/4 h-3/4 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-sky-600 transition-colors font-geist" style={{}}>Awning &amp; Tent Cleaner Refill - 1L</h3>
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-red-600 font-geist" style={{}}>£6.00</span>
<span className="text-sm text-slate-400 line-through font-geist" style={{}}>£7.99</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row items-center gap-12">
<h3 className="text-2xl text-slate-900 tracking-tight flex-shrink-0 font-geist font-semibold" style={{}}>Our Clients</h3>
<div className="flex flex-wrap justify-center md:justify-between items-center w-full gap-8 grayscale opacity-60">

<div className="text-2xl text-slate-400 font-geist font-semibold" style={{}}>Costco</div>
<div className="text-2xl tracking-tighter text-slate-400 font-geist font-semibold" style={{}}>boohoo<span className="text-xs font-normal align-top font-geist" style={{}}>.com</span></div>
<div className="text-2xl text-slate-400 font-geist font-semibold" style={{}}>Kettle</div>
<div className="text-2xl text-slate-400 flex items-center font-geist font-semibold" style={{}}>Jet2<span className="font-geist font-semibold" style={{}}>holidays</span><i className="w-4 h-4 ml-1" data-lucide="plane"></i></div>
<div className="text-xl font-bold text-slate-400 font-geist" style={{}}>GoCompare</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

<div className="lg:col-span-5">
<h3 className="text-2xl text-white tracking-tight mb-6 font-geist font-semibold" style={{}}>WANT TO STAY UP TO DATE?</h3>
<div className="flex gap-2 max-w-md mb-6">
<input className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500" placeholder="Enter Your Email" type="email"/>
<button className="px-6 py-3 bg-white text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors font-geist" style={{}}>Submit</button>
</div>
<p className="text-slate-400 mb-8 max-w-sm font-geist" style={{}}>Elevate your outdoor experience with TFH Gazebos: Where style meets serenity.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="youtube" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="text-white font-medium mb-6 font-geist" style={{}}>Further Info</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>About us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Reviews</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Blogs</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>RSS Syndication</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Sitemap</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-geist" style={{}}>Get in Touch</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Contact Us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Where we are</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-geist" style={{}}>Customer Service</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{}}>Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 font-geist" style={{}}>Contact Info</h4>
<ul className="space-y-4 text-sm">
<li className="flex gap-3">
<i className="w-4 h-4 mt-0.5 text-slate-500" data-lucide="phone"></i>
<div>
<span className="block text-white font-geist" style={{}}>01277 350524</span>
<span className="text-slate-500 text-xs font-geist" style={{}}>Mon to Fri: <br/>9am - 5pm (GMT)</span>
</div>
</li>
<li className="flex gap-3 items-center">
<i className="w-4 h-4 text-slate-500" data-lucide="mail"></i>
<a className="hover:text-white transition-colors font-geist" href="mailto:sales@tfhgazebos.co.uk" style={{}}>sales@tfhgazebos.co.uk</a>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p className="font-geist" style={{}}>© 2025 Gazebos | By Shopify Agency - RVS Media</p>
<a className="flex items-center gap-2 hover:text-white transition-colors font-geist" href="#" style={{}}>
                    Back to Top <i className="w-4 h-4" data-lucide="arrow-up"></i>
</a>
</div>
</div>
</footer>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
