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



        lucide.createIcons();
        
        // Add smooth scroll behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe></div>

<header className="animate-fade-in backdrop-saturate-150 sticky top-0 z-50 bg-white/30 border-gray-200 border-b shadow-sm backdrop-blur-md" style={{position: `sticky`, top: `0`, zIndex: `50`}}>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center">
<div className="text-2xl text-blue-600 tracking-tight font-playfair font-medium">TravelHub</div>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-geist" href="#">Flights</a>
<a className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-geist" href="#">Hotels</a>
<a className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-geist" href="#">Cars</a>
<a className="text-gray-700 hover:text-blue-600 font-medium transition-colors font-geist" href="#">Packages</a>
</nav>
<div className="flex space-x-4 items-center">
<button className="hover:text-blue-600 transition-colors font-medium text-gray-700 font-geist pr-8 pl-0">Sign in</button>
<button aria-label="Sign up" className="hover:bg-blue-700 transition-colors font-medium text-white font-geist" style={{'--fancy-button-gradient-0': `#8d49fd`, '--fancy-button-gradient-50': `#7f56f3`, '--fancy-button-gradient-100': `#5691f3`, '--fancy-button-inner-shadow-top': `rgba(233, 209, 255, 0.2)`, '--fancy-button-inner-shadow-top-lg': `rgba(9, 12, 60, 0.1)`, '--fancy-button-inner-shadow-bottom': `rgba(137, 222, 246, 0.3)`, '--fancy-button-shine-top': `#e9d1ff`, '--fancy-button-shine-bottom': `#adfff9`, fontWeight: `500`, fontSize: `15px`, lineHeight: `21px`, textShadow: `rgba(0, 0, 0, 0.2) 0px 0.5px 0.5px`, padding: `0px`, margin: `0px`, appearance: `none`, border: `none`, overflow: `hidden`, position: `relative`, cursor: `pointer`, zIndex: `1`, color: `rgb(255, 255, 255)`, backgroundImage: `linear-gradient(to bottom, var(--fancy-button-gradient-0) 0%, var(--fancy-button-gradient-50) 50%, var(--fancy-button-gradient-100) 100%)`, boxShadow: `0px 4px 12px rgba(9, 12, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px var(--fancy-button-inner-shadow-top-lg), inset 0px 1px 1px var(--fancy-button-inner-shadow-top), inset 0px -1px 3px var(--fancy-button-inner-shadow-bottom)`, borderRadius: `25px`}}><span className="" style={{display: `block`, padding: `12px 24px`, borderRadius: `25px`, overflow: `hidden`, position: `relative`, backgroundImage: `linear-gradient(to bottom, var(--fancy-button-shine-top), transparent 8px)`, backgroundPosition: `0 -6px`, backgroundRepeat: `no-repeat`, zIndex: `1`}}>Sign up</span></button>
</div>
</div>
</div>
</header>

<section className="lg:py-24 text-white bg-[url(/assets/d6683c27-db00-4574-a03f-40b1577013ad_3840w.jpg)] bg-cover pt-16 pb-16 blur-none">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12 animate-slide-up" style={{animationDelay: `0.2s`}}>
<h1 className="text-4xl lg:text-6xl tracking-tight mb-4 font-playfair font-medium">Find your next adventure</h1>
<p className="text-xl text-blue-100 max-w-2xl mx-auto font-geist">Compare flights, hotels, and rental cars from hundreds of travel sites</p>
</div>

<div className="max-w-4xl mx-auto animate-slide-up" style={{animationDelay: `0.4s`}}>
<div className="lg:p-8 bg-white/70 rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-xl backdrop-blur-2xl">

<div className="flex border-b border-gray-200 mb-6">
<button className="flex items-center space-x-2 px-4 py-3 border-b-2 border-blue-600 text-blue-600 font-medium">
<svg className="lucide lucide-plane w-5 h-5" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="font-geist">Flights</span>
</button>
<button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors">
<svg className="lucide lucide-bed w-5 h-5" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
<span className="font-geist">Hotels</span>
</button>
<button className="flex items-center space-x-2 px-4 py-3 text-gray-600 hover:text-gray-900 font-medium transition-colors">
<svg className="lucide lucide-car w-5 h-5" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
<span className="font-geist">Cars</span>
</button>
</div>

<div className="flex space-x-4 mb-6">
<label className="flex items-center">
<input checked className="w-4 h-4 text-blue-600" name="trip" type="radio" value="roundtrip" />
<span className="ml-2 text-gray-700 font-medium font-geist">Round trip</span>
</label>
<label className="flex items-center">
<input className="w-4 h-4 text-blue-600" name="trip" type="radio" value="oneway" />
<span className="ml-2 text-gray-700 font-medium font-geist">One way</span>
</label>
<label className="flex items-center">
<input className="w-4 h-4 text-blue-600" name="trip" type="radio" value="multicity" />
<span className="ml-2 text-gray-700 font-medium font-geist">Multi-city</span>
</label>
</div>

<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
<div className="lg:col-span-1">
<label className="block text-sm font-medium text-gray-700 mb-2 font-geist">From</label>
<div className="relative">
<input className="custom-input w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="City or airport" type="text" />
<svg className="lucide lucide-plane-takeoff absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="plane-takeoff" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2 22h20"></path><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path></svg>
</div>
</div>
<div className="lg:col-span-1">
<label className="block text-sm font-medium text-gray-700 mb-2 font-geist">To</label>
<div className="relative">
<input className="custom-input w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="City or airport" type="text" />
<svg className="lucide lucide-plane-landing absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" data-lucide="plane-landing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"></path></svg>
</div>
</div>
<div className="lg:col-span-1">
<label className="block text-sm font-medium text-gray-700 mb-2 font-geist">Depart</label>
<div className="relative">
<input className="custom-input w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" type="date" />
</div>
</div>
<div className="lg:col-span-1">
<label className="block text-sm font-medium text-gray-700 mb-2 font-geist">Return</label>
<div className="relative">
<input className="custom-input w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent border-gray-300 border rounded-lg pt-3 pr-4 pb-3 pl-4" type="date" />
</div>
</div>
<div className="lg:col-span-1">
<label className="block text-sm font-medium text-gray-700 mb-2 font-geist">Travelers</label>
<div className="relative">
<select className="custom-input w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none border-gray-300 border rounded-lg pt-3 pr-4 pb-3 pl-4">
<option className="font-geist">1 adult</option>
<option className="font-geist">2 adults</option>
<option className="font-geist">3 adults</option>
<option className="font-geist">4+ adults</option>
</select>
<svg className="lucide lucide-users absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
<button className="w-full bg-blue-600 text-white rounded-[25px] font-medium text-[15px] leading-[21px] overflow-hidden relative cursor-pointer z-10 hover:bg-blue-600 transition-colors" style={{backgroundImage: `linear-gradient(to bottom, #8d49fd 0%, #7f56f3 50%, #5691f3 100%)`, boxShadow: `0px 4px 12px rgba(9, 12, 60, 0.15), 0px 2px 8px rgba(9, 12, 60, 0.15), 0px 1px 3px rgba(9, 12, 60, 0.1), inset 0px 1px 1px rgba(233, 209, 255, 0.2), inset 0px -1px 3px rgba(137, 222, 246, 0.3)`, padding: `0`}}>
<span className="" style={{display: `block`, padding: `12px 24px`, borderRadius: `25px`, overflow: `hidden`, position: `relative`, backgroundImage: `linear-gradient(to bottom, #e9d1ff, transparent 8px)`, backgroundPosition: `0 -6px`, backgroundRepeat: `no-repeat`, zIndex: `1`}}>
    Search flights
    
</span>
</button>
</div>
</div>
</div>
</section>

<section className="lg:py-24 pt-16 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 animate-slide-up" style={{animationDelay: `0.1s`}}>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-4 font-playfair font-medium">Why choose TravelHub?</h2>
<p className="text-xl text-gray-600 max-w-2xl mx-auto font-geist">We make travel planning simple with the best deals and comprehensive search</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="animate-slide-up text-center bg-slate-50/50 border-slate-950/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md" style={{animationDelay: `0.2s`}}>
<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-search w-8 h-8 text-blue-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist">Compare hundreds of sites</h3>
<p className="text-gray-600 font-geist">Search flights, hotels, and cars from over 700 travel sites to find you the best deal</p>
</div>
<div className="animate-slide-up text-center bg-slate-50/50 border-slate-950/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md" style={{animationDelay: `0.3s`}}>
<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-dollar-sign w-8 h-8 text-green-600" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist">No hidden fees</h3>
<p className="text-gray-600 font-geist">What you see is what you pay. We don't add any booking fees or hidden charges</p>
</div>
<div className="animate-slide-up text-center bg-slate-50/50 border-slate-950/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md" style={{animationDelay: `0.4s`}}>
<div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-clock w-8 h-8 text-purple-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4 font-geist">Free to use</h3>
<p className="text-gray-600 font-geist">Our service is completely free. Compare prices and book directly with airlines and hotels</p>
</div>
</div>
</div>
</section>

<section className="lg:py-24 bg-white pt-16 pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 animate-slide-up" style={{animationDelay: `0.1s`}}>
<h2 className="text-3xl lg:text-4xl tracking-tight mb-4 font-playfair font-medium">Popular destinations</h2>
<p className="text-xl text-gray-600 font-geist">Discover amazing places around the world</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="group cursor-pointer animate-slide-up" style={{animationDelay: `0.2s`}}>
<div className="relative overflow-hidden rounded-xl">
<img alt="Paris" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://cdn.midjourney.com/69ef569d-c417-4267-8358-b1ec112821e8/0_2.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-semibold font-geist">Paris</h3>
<p className="text-sm text-gray-200 font-geist">From $299</p>
</div>
</div>
</div>
<div className="group cursor-pointer animate-slide-up" style={{animationDelay: `0.3s`}}>
<div className="relative overflow-hidden rounded-xl">
<img alt="London" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://cdn.midjourney.com/00cbc8f8-e7a7-4c18-84bb-ea368e3e5aaa/0_0.png?w=800&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-semibold font-geist">London</h3>
<p className="text-sm text-gray-200 font-geist">From $399</p>
</div>
</div>
</div>
<div className="group cursor-pointer animate-slide-up" style={{animationDelay: `0.4s`}}>
<div className="relative overflow-hidden rounded-xl">
<img alt="Tokyo" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://cdn.midjourney.com/c8c5785a-dc36-48e3-a003-9aeddf0f2919/0_0.png?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-semibold font-geist">Tokyo</h3>
<p className="text-sm text-gray-200 font-geist">From $599</p>
</div>
</div>
</div>
<div className="group cursor-pointer animate-slide-up" style={{animationDelay: `0.5s`}}>
<div className="relative overflow-hidden rounded-xl">
<img alt="Sydney" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://cdn.midjourney.com/e4a2d4b8-4ea8-4a06-b1bf-cdabd58696cb/0_0.png?w=800&q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<h3 className="text-lg font-semibold font-geist">Sydney</h3>
<p className="text-sm text-gray-200 font-geist">From $799</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="">
<div className="text-2xl tracking-tight mb-4 font-playfair font-medium">TravelHub</div>
<p className="text-gray-400 font-geist">Your trusted travel companion for finding the best deals worldwide.</p>
</div>
<div className="">
<h3 className="font-semibold mb-4 font-geist">Company</h3>
<ul className="space-y-2 text-gray-400">
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">About</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition-colors font-geist" href="#">Press</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Support</h3>
<ul className="space-y-2 text-gray-400">
<li><a className="hover:text-white transition-colors font-geist" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#">Terms</a></li>
</ul>
</div>
<div>
<h3 className="font-semibold mb-4 font-geist">Follow Us</h3>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
<p className="font-geist">© 2024 TravelHub. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
