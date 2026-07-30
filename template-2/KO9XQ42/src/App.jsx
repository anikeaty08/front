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
      

<nav className="fixed top-0 w-full backdrop-blur-sm border-b z-50 bg-white/95 border-gray-100">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="flex h-20 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-xl font-medium tracking-tight">LuxuryHomes</span>
</div>
<div className="hidden lg:flex items-center gap-12">
<a className="text-sm font-normal transition-colors text-gray-700 hover:text-black" href="#">Properties</a>
<a className="text-sm font-normal transition-colors text-gray-700 hover:text-black" href="#">Services</a>
<a className="text-sm font-normal transition-colors text-gray-700 hover:text-black" href="#">About</a>
<a className="text-sm font-normal transition-colors text-gray-700 hover:text-black" href="#">Contact</a>
</div>
<button className="px-6 py-2.5 text-sm font-medium transition-colors bg-black hover:bg-gray-900 text-white">
          Get Started
        </button>
</div>
</div>
</nav>

<section className="pt-20">
<div className="max-w-screen-2xl lg:p-12 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-screen">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 w-fit text-gray-600 bg-gray-100">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              Premium Properties Available
            </div>
<div className="space-y-6">
<h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-none text-gray-900">
                Luxury
                <br />
<span className="font-medium">Properties</span>
<br />
<span className="text-gray-400">Redefined</span>
</h1>
<p className="text-lg lg:text-xl font-light leading-relaxed max-w-lg text-gray-600">
                Discover extraordinary homes curated for the most discerning clients. 
                Each property represents the pinnacle of luxury living.
              </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 text-sm font-medium transition-colors flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white">
<span>Explore Collection</span>
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="border px-8 py-4 text-sm font-medium transition-colors border-gray-300 hover:border-black text-gray-900">
                Schedule Consultation
              </button>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-4 lg:gap-6 h-full">

<div className="col-span-2 row-span-2 group cursor-pointer">
<div className="relative h-80 lg:h-96 overflow-hidden bg-gray-900">
<img alt="Luxury Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/assets/cca81beb-4f3e-4874-a88a-6608b8a91637_1600w.jpg" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/10 transition-colors duration-300 bg-black/20"></div>
<div className="absolute top-6 left-6">
<span className="px-3 py-1 text-xs font-medium bg-white text-black">FEATURED</span>
</div>
<div className="absolute bottom-6 left-6 text-white">
<div className="text-2xl font-light mb-1">$2,850,000</div>
<div className="text-sm opacity-90">Beverly Hills Estate</div>
<div className="text-xs opacity-75 flex items-center gap-1 mt-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    California
                  </div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative h-32 lg:h-40 overflow-hidden bg-gray-900">
<img alt="Manhattan Penthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/assets/6f9ebb4a-77d8-4b87-9ae2-a392fe9626d8_800w.jpg" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/30"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-light">$1,750,000</div>
<div className="text-xs opacity-90">Manhattan Loft</div>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative h-32 lg:h-40 overflow-hidden bg-gray-900">
<img alt="Modern Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/assets/e74be831-5deb-4313-853a-8949b05f2171_800w.jpg" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/30"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-light">$3,200,000</div>
<div className="text-xs opacity-90">Malibu Villa</div>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative h-32 lg:h-40 overflow-hidden bg-gray-900">
<img alt="Urban Penthouse" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/assets/d6a247fd-9763-4426-8296-4c6414122bfc_800w.jpg" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/30"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-light">$4,100,000</div>
<div className="text-xs opacity-90">Tribeca Penthouse</div>
</div>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative h-32 lg:h-40 overflow-hidden bg-gray-900">
<img alt="Waterfront Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/assets/21c2faef-8c83-49a8-b921-a4c6fd4effc6_800w.jpg" style={{}} />
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300 bg-black/30"></div>
<div className="absolute bottom-3 left-3 text-white">
<div className="text-sm font-light">$6,500,000</div>
<div className="text-xs opacity-90">Hamptons Estate</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

<div className="lg:col-span-1 flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 text-gray-900">
            Our
            <br />
<span className="font-medium">Services</span>
</h2>
<p className="text-lg font-light leading-relaxed text-gray-600">
            Comprehensive luxury real estate services tailored to your unique requirements.
          </p>
</div>

<div className="lg:col-span-2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:border-black transition-colors border-gray-200">
<svg className="lucide lucide-search w-5 h-5 group-hover:text-black transition-colors text-gray-700" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-gray-900">Property Search</h3>
<p className="text-sm font-light leading-relaxed text-gray-600">
                Curated selection of premium properties matching your exact specifications and lifestyle preferences.
              </p>
</div>
<div className="group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:border-black transition-colors border-gray-200">
<svg className="lucide lucide-users w-5 h-5 group-hover:text-black transition-colors text-gray-700" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-gray-900">Advisory Services</h3>
<p className="text-sm font-light leading-relaxed text-gray-600">
                Expert guidance from seasoned professionals with deep market knowledge and exclusive networks.
              </p>
</div>
<div className="group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:border-black transition-colors border-gray-200">
<svg className="lucide lucide-key w-5 h-5 group-hover:text-black transition-colors text-gray-700" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-gray-900">Concierge Sales</h3>
<p className="text-sm font-light leading-relaxed text-gray-600">
                White-glove service from initial consultation through closing and beyond for seamless transactions.
              </p>
</div>
<div className="group p-8 border transition-colors cursor-pointer border-gray-100 hover:border-gray-200">
<div className="w-12 h-12 border flex items-center justify-center mb-6 group-hover:border-black transition-colors border-gray-200">
<svg className="lucide lucide-trending-up w-5 h-5 group-hover:text-black transition-colors text-gray-700" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3 text-gray-900">Market Analysis</h3>
<p className="text-sm font-light leading-relaxed text-gray-600">
                Comprehensive market insights and investment analysis to ensure informed decision-making.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center">
<div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">250+</div>
<div className="text-sm font-medium tracking-wide text-gray-600">PROPERTIES SOLD</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">$2.8B</div>
<div className="text-sm font-medium tracking-wide text-gray-600">TOTAL SALES VOLUME</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">98%</div>
<div className="text-sm font-medium tracking-wide text-gray-600">CLIENT SATISFACTION</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-light mb-2 text-gray-900">15</div>
<div className="text-sm font-medium tracking-wide text-gray-600">YEARS EXPERIENCE</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
<div className="space-y-8">
<h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight">
            Begin Your
            <br />
<span className="font-medium">Luxury Journey</span>
</h2>
<p className="text-lg font-light leading-relaxed max-w-lg text-gray-300">
            Connect with our team of luxury real estate specialists. 
            We're here to make your property dreams a reality.
          </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 border flex items-center justify-center border-gray-600">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<span className="font-light">+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 border flex items-center justify-center border-gray-600">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="font-light">hello@luxuryhomes.com</span>
</div>
</div>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600" placeholder="First Name" type="text" />
<input className="bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600" placeholder="Last Name" type="text" />
</div>
<input className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors border-gray-600" placeholder="Email Address" type="email" />
<textarea className="w-full bg-transparent border px-4 py-4 text-sm font-light focus:border-white focus:outline-none transition-colors resize-none border-gray-600" placeholder="Tell us about your ideal property..." rows="4"></textarea>
<button className="w-full py-4 text-sm font-medium transition-colors bg-white text-black hover:bg-gray-100">
            Send Message
          </button>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-gray-900 text-white">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 rounded-sm flex items-center justify-center bg-white">
<svg className="lucide lucide-home w-5 h-5 text-black" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<span className="text-xl font-medium">LuxuryHomes</span>
</div>
<p className="text-sm font-light leading-relaxed max-w-md mb-6 text-gray-400">
            The premier destination for luxury real estate worldwide. 
            Connecting discerning clients with extraordinary properties.
          </p>
<div className="flex gap-4">
<div className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<div className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
<div className="w-8 h-8 border flex items-center justify-center hover:border-gray-500 transition-colors cursor-pointer border-gray-700">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-wide">SERVICES</h4>
<div className="space-y-3 text-sm font-light text-gray-400">
<a className="block transition-colors hover:text-white" href="#">Property Search</a>
<a className="block transition-colors hover:text-white" href="#">Market Analysis</a>
<a className="block transition-colors hover:text-white" href="#">Investment Advisory</a>
<a className="block transition-colors hover:text-white" href="#">Property Management</a>
</div>
</div>
<div className="">
<h4 className="text-sm font-medium mb-4 tracking-wide">COMPANY</h4>
<div className="space-y-3 text-sm font-light text-gray-400">
<a className="block transition-colors hover:text-white" href="#">About</a>
<a className="block transition-colors hover:text-white" href="#">Team</a>
<a className="block transition-colors hover:text-white" href="#">Careers</a>
<a className="block transition-colors hover:text-white" href="#">Press</a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-light text-gray-500 border-gray-800">
<p>© 2024 LuxuryHomes. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors hover:text-gray-300" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-gray-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
