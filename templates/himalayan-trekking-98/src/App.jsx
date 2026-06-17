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
      

<div className="bg-slate-900 text-slate-400 py-3 text-sm border-b border-slate-800">
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center space-x-6">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-yellow-400" data-lucide="mail"></i>
<span>info@himalayansteps.com</span>
</div>
<div className="flex items-center space-x-2 hidden md:flex">
<i className="w-4 h-4 text-yellow-400" data-lucide="phone"></i>
<span>+977 1 423 4567</span>
</div>
</div>
<div className="flex items-center space-x-6">
<span className="hidden md:inline">FAQ</span>
<span className="hidden md:inline">Support</span>
<div className="flex items-center space-x-1">
<span>Eng</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<nav className="bg-slate-900 py-6 relative z-50">
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900">
<i className="w-5 h-5 fill-current" data-lucide="mountain"></i>
</div>
<span className="text-white text-2xl font-semibold tracking-tight">Himalaya</span>
</div>
<div className="hidden lg:flex items-center space-x-8 text-slate-300 text-lg">
<a className="text-yellow-400 font-medium" href="#">Home</a>
<a className="hover:text-white transition" href="#">About us</a>
<a className="hover:text-white transition" href="#">Treks</a>
<a className="hover:text-white transition flex items-center" href="#">Pages <i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i></a>
<a className="hover:text-white transition" href="#">Blog</a>
<a className="hover:text-white transition" href="#">Contact</a>
</div>
<button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-2.5 rounded-full font-medium text-sm transition hidden md:block">
                Book a Trek
            </button>
<button className="lg:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative bg-slate-900 text-white overflow-hidden pb-20 pt-10">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,60.5,29.6C50.8,40.8,42.7,50.8,32.7,57.6C22.7,64.4,10.8,68,0.7,66.8C-9.4,65.6,-17.7,59.6,-27.1,53.4C-36.5,47.2,-47,40.8,-55.5,31.8C-64,22.8,-70.5,11.2,-72.6,-1.3C-74.7,-13.8,-72.4,-27.2,-64.8,-37.9C-57.2,-48.6,-44.3,-56.6,-31.4,-64.5C-18.5,-72.4,-5.6,-80.2,5.2,-89.2L16,-98.2Z" fill="#FACC15" transform="translate(100 100)"></path>
</svg>
</div>
<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<span className="handwriting text-yellow-400 text-3xl block mb-2">Adventure Awaits You!!</span>
<h1 className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
                    Explore the <br/>
<span className="text-white">Majestic Himalayas</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                    Experience the thrill of Nepal's peaks. From Everest Base Camp to the Annapurna Circuit, we guide you through safe and unforgettable journeys.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3.5 rounded-full font-medium transition">
                        Find Your Trek
                    </button>
<button className="border border-slate-600 hover:border-white text-white px-8 py-3.5 rounded-full font-medium transition">
                        Watch Video
                    </button>
</div>
</div>
<div className="relative">

<div className="absolute -top-10 -right-10 w-24 h-24 border-2 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>

<div className="relative rounded-[3rem] overflow-hidden border-4 border-slate-800 shadow-2xl">
<img alt="Himalayan Trek" className="w-full h-auto object-cover transform scale-105 hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-3 max-w-xs">
<div className="bg-green-100 p-2 rounded-full text-green-600">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div>
<p className="text-slate-900 font-semibold text-sm">100% Success Rate</p>
<p className="text-slate-500 text-xs">On guided expeditions</p>
</div>
</div>
</div>
</div>

<button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition">
<i className="w-6 h-6 text-slate-900" data-lucide="chevron-left"></i>
</button>
<button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 border border-slate-700 text-white rounded-full flex items-center justify-center hover:bg-slate-800 transition">
<i className="w-6 h-6" data-lucide="chevron-right"></i>
</button>
</header>

<div className="relative z-20 -mt-16 container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition duration-300">
<div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mb-6 text-rose-500">
<i className="w-7 h-7" data-lucide="tent"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Best Accommodation</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">Comfortable tea houses and lodges handpicked for your rest.</p>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition" href="#">
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-rose-500 p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition duration-300 transform scale-105">
<div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-6 text-white">
<i className="w-7 h-7" data-lucide="map"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Expert Guides</h3>
<p className="text-base text-white/80 mb-6 leading-relaxed">Certified Sherpas ensuring your safety and enhancing your journey.</p>
<a className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-yellow-300 transition text-slate-900 shadow-lg" href="#">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition duration-300">
<div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-6 text-orange-500">
<i className="w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Safe Travel</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">Comprehensive insurance and safety protocols on every trek.</p>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition" href="#">
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl hover:-translate-y-1 transition duration-300">
<div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-500">
<i className="w-7 h-7" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Eco Friendly</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">Sustainable practices to keep the Himalayas pristine for future.</p>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition" href="#">
<i className="w-5 h-5 text-slate-400" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 overflow-hidden">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -left-10 top-10 text-slate-200">

<svg fill="currentColor" height="200" width="100">
<pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" r="2"></circle>
</pattern>
<rect fill="url(#dots)" height="200" width="100"></rect>
</svg>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="rounded-t-[4rem] rounded-b-xl w-full h-64 object-cover shadow-lg translate-y-8" src="https://images.unsplash.com/photo-1585938389612-a552a28d6914?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="space-y-4">
<img className="rounded-[3rem] w-full h-40 object-cover shadow-lg bg-yellow-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="rounded-b-[4rem] rounded-t-xl w-full h-56 object-cover shadow-lg" src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-0 left-0 -translate-x-6 translate-y-6 w-24 h-24 bg-yellow-400 rounded-full opacity-80 -z-10"></div>
<div className="absolute bottom-10 right-10 w-20 h-20 border-4 border-rose-500 rounded-full flex items-center justify-center bg-white shadow-xl z-10 rotate-12">
<div className="text-center leading-none">
<span className="block text-xs font-bold uppercase tracking-wider text-rose-500">Est.</span>
<span className="block text-xl font-bold text-slate-900">1998</span>
</div>
</div>
</div>

<div className="lg:pl-8">
<span className="handwriting text-rose-500 text-3xl block mb-2">About Our Agency</span>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight">
                        We organize the <br/>best treks in Nepal
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        With over 20 years of experience, we connect you to the soul of the mountains. Our mission is to provide authentic, safe, and life-changing trekking experiences while supporting local communities.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center shrink-0 text-rose-500">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-slate-900">Local Sherpa Team</h4>
<p className="text-slate-500 mt-1 text-base">Born in the mountains, our guides are the true legends of the Himalayas.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center shrink-0 text-yellow-600">
<i className="w-6 h-6" data-lucide="compass"></i>
</div>
<div>
<h4 className="text-xl font-semibold text-slate-900">Custom Itineraries</h4>
<p className="text-slate-500 mt-1 text-base">Tailor-made trips to suit your pace, fitness level, and interests.</p>
</div>
</div>
</div>
<button className="border border-slate-300 hover:border-rose-500 hover:text-rose-500 text-slate-600 px-8 py-3 rounded-full font-medium transition">
                        Learn More
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-slate-900 bg-[url('https://images.unsplash.com/photo-1483017770860-2621cb45722c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-fixed bg-center">
<div className="absolute inset-0 bg-slate-900/80"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<i className="w-10 h-10 text-yellow-400 mx-auto mb-4 stroke-[1.5]" data-lucide="globe"></i>
<h3 className="text-4xl font-bold text-white mb-2">50+</h3>
<p className="text-slate-300 text-sm uppercase tracking-wider">Destinations</p>
</div>
<div>
<i className="w-10 h-10 text-yellow-400 mx-auto mb-4 stroke-[1.5]" data-lucide="user-check"></i>
<h3 className="text-4xl font-bold text-white mb-2">480+</h3>
<p className="text-slate-300 text-sm uppercase tracking-wider">Expert Guides</p>
</div>
<div>
<i className="w-10 h-10 text-yellow-400 mx-auto mb-4 stroke-[1.5]" data-lucide="smile"></i>
<h3 className="text-4xl font-bold text-white mb-2">15k+</h3>
<p className="text-slate-300 text-sm uppercase tracking-wider">Happy Trekkers</p>
</div>
<div>
<i className="w-10 h-10 text-yellow-400 mx-auto mb-4 stroke-[1.5]" data-lucide="award"></i>
<h3 className="text-4xl font-bold text-white mb-2">25</h3>
<p className="text-slate-300 text-sm uppercase tracking-wider">Years Active</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<span className="handwriting text-rose-500 text-2xl block mb-2">Popular Packages</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Best Selling Treks</h2>
</div>
<button className="hidden md:block border border-slate-300 px-6 py-2 rounded-full text-sm font-medium hover:bg-slate-50 transition">
                    View all treks
                </button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                            Hard
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-sm font-medium">
<span className="text-yellow-600 bg-yellow-50 px-3 py-1 rounded-md">14 Days</span>
<span className="text-slate-500">Max 5,364m</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-rose-500 transition">Everest Base Camp</h3>
<p className="text-slate-500 mb-6 text-base line-clamp-2">The classic trek to the foot of the world's highest mountain. Experience Sherpa culture.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-6">
<div>
<span className="block text-xs text-slate-400">Starting from</span>
<span className="text-lg font-bold text-slate-900">$1,450</span>
</div>
<button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-500 transition">Book Now</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                            Moderate
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-sm font-medium">
<span className="text-yellow-600 bg-yellow-50 px-3 py-1 rounded-md">12 Days</span>
<span className="text-slate-500">Max 4,130m</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-rose-500 transition">Annapurna Sanctuary</h3>
<p className="text-slate-500 mb-6 text-base line-clamp-2">Walk through rhododendron forests to the spectacular natural amphitheater.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-6">
<div>
<span className="block text-xs text-slate-400">Starting from</span>
<span className="text-lg font-bold text-slate-900">$1,100</span>
</div>
<button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-500 transition">Book Now</button>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-2xl transition duration-300">
<div className="relative h-64 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-900">
                            Easy
                        </div>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-sm font-medium">
<span className="text-yellow-600 bg-yellow-50 px-3 py-1 rounded-md">9 Days</span>
<span className="text-slate-500">Max 3,210m</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-rose-500 transition">Poon Hill Sunrise</h3>
<p className="text-slate-500 mb-6 text-base line-clamp-2">The best short trek in Nepal offering panoramic views of Dhaulagiri and Annapurna.</p>
<div className="flex items-center justify-between border-t border-slate-100 pt-6">
<div>
<span className="block text-xs text-slate-400">Starting from</span>
<span className="text-lg font-bold text-slate-900">$850</span>
</div>
<button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-500 transition">Book Now</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="text-white">
<span className="handwriting text-yellow-400 text-3xl block mb-2">Start your journey</span>
<h2 className="text-5xl font-semibold mb-6 tracking-tight">Book Your Trek <br/>With Us Today</h2>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">
                        Ready to embrace the mountains? Fill out the form to secure your spot or inquire about a custom itinerary. Our team will get back to you within 24 hours with a detailed plan.
                    </p>
<button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-8 py-3.5 rounded-full font-semibold transition">
                        View Full Itinerary
                    </button>
</div>
<div className="bg-rose-500 rounded-3xl p-10 shadow-2xl text-white relative">
<div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold transform rotate-12 shadow-lg">
                        Book
                    </div>
<h3 className="text-2xl font-bold mb-2 uppercase tracking-wide opacity-90">Quick Enquiry</h3>
<p className="text-white/80 text-sm mb-8">Plan your dream adventure now.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:bg-white/30 focus:border-white transition" placeholder="Your Name" type="text"/>
<input className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:bg-white/30 focus:border-white transition" placeholder="Phone" type="text"/>
</div>
<input className="w-full bg-white/20 border border-white/30 rounded-lg px-4 py-3 placeholder-white/70 text-white focus:outline-none focus:bg-white/30 focus:border-white transition" placeholder="Email Address" type="email"/>
<div className="bg-white/10 rounded-xl p-4 border border-white/20">
<span className="block text-xs uppercase tracking-wider mb-3 opacity-80">Budget / Deposit</span>
<div className="flex flex-wrap gap-2">
<button className="flex-1 bg-white text-rose-500 py-2 rounded-md text-sm font-bold shadow-sm hover:bg-gray-100" type="button">$500</button>
<button className="flex-1 bg-rose-600 border border-rose-400 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition" type="button">$1000</button>
<button className="flex-1 bg-rose-600 border border-rose-400 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition" type="button">$2000</button>
<button className="flex-1 bg-rose-600 border border-rose-400 py-2 rounded-md text-sm font-medium hover:bg-rose-700 transition" type="button">Other</button>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg mt-4 transition transform hover:scale-[1.02]">
                            Send Enquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<span className="handwriting text-rose-500 text-3xl block mb-2">Updates</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Upcoming Departures &amp; News</h2>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col md:flex-row gap-6 items-center">
<img className="w-full md:w-48 h-48 object-cover rounded-xl shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<div className="flex items-center text-xs text-slate-400 mb-3 space-x-4">
<span className="flex items-center"><i className="w-3 h-3 mr-1" data-lucide="calendar"></i> Oct 15, 2023</span>
<span className="flex items-center"><i className="w-3 h-3 mr-1" data-lucide="map-pin"></i> Lukla</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">Group Departure: Everest Base Camp Autumn 2023</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Join a group of like-minded adventurers for the autumn season. Best visibility guaranteed.</p>
<a className="inline-block px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition" href="#">View Details</a>
</div>
</div>

<div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col md:flex-row gap-6 items-center">
<img className="w-full md:w-48 h-48 object-cover rounded-xl shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div>
<div className="flex items-center text-xs text-slate-400 mb-3 space-x-4">
<span className="flex items-center"><i className="w-3 h-3 mr-1" data-lucide="calendar"></i> Nov 05, 2023</span>
<span className="flex items-center"><i className="w-3 h-3 mr-1" data-lucide="map-pin"></i> Kathmandu</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 leading-tight">New Route: Manaslu Circuit Hidden Gems</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">We have opened bookings for the restricted Manaslu area with new tea house partners.</p>
<a className="inline-block px-5 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition" href="#">View Details</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden relative">
<div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
<span className="handwriting text-rose-500 text-3xl block mb-2">Testimonials</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-12">What Trekkers Say</h2>
<div className="relative py-10">

<span className="text-9xl text-yellow-100 font-serif absolute top-0 left-1/2 -translate-x-1/2 -z-10">"</span>
<p className="text-xl md:text-2xl text-slate-600 font-medium italic leading-relaxed mb-8">
                    "The organization was flawless. Our guide, Pemba, was knowledgeable and incredibly supportive when the altitude got tough. It wasn't just a trek; it was a cultural immersion I will never forget."
                </p>
<div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<h4 className="text-lg font-bold text-slate-900">Sarah Jenkins</h4>
<p className="text-slate-400 text-sm">United Kingdom</p>
</div>

<div className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
<div className="hidden md:block absolute top-20 right-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-70">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
</div>
<div className="hidden md:block absolute bottom-10 left-20 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg opacity-60">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/85.jpg"/>
</div>
<div className="hidden md:block absolute bottom-1/2 right-0 w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/65.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="handwriting text-yellow-400 text-3xl block mb-2">Meet Our Guides</span>
<h2 className="text-4xl font-semibold tracking-tight">Legends of the Mountains</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden group text-center pb-6">
<div className="relative overflow-hidden pt-6 px-6">
<div className="bg-rose-100 rounded-t-full rounded-b-3xl h-64 w-full relative overflow-hidden mx-auto">
<img className="w-full h-full object-cover object-top mix-blend-multiply filter contrast-125" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="pt-6 px-4">
<h3 className="text-xl font-bold text-slate-900">Lakpa Sherpa</h3>
<p className="text-slate-500 text-sm mb-4">Senior Guide (12x Everest)</p>
<div className="flex justify-center space-x-3">
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 hover:bg-yellow-300 transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden group text-center pb-6 transform md:-translate-y-4 shadow-2xl border-b-4 border-rose-500">
<div className="relative overflow-hidden pt-6 px-6">
<div className="bg-yellow-100 rounded-t-full rounded-b-3xl h-64 w-full relative overflow-hidden mx-auto">
<img className="w-full h-full object-cover object-top mix-blend-multiply filter contrast-125" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-0 group-hover:opacity-100 transition duration-300">
<span className="bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">Head Guide</span>
</div>
</div>
<div className="pt-6 px-4">
<h3 className="text-xl font-bold text-slate-900">Tenzing Norgay Jr.</h3>
<p className="text-slate-500 text-sm mb-4">Expedition Leader</p>
<div className="flex justify-center space-x-3">
<a className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 hover:bg-yellow-300 transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden group text-center pb-6">
<div className="relative overflow-hidden pt-6 px-6">
<div className="bg-blue-100 rounded-t-full rounded-b-3xl h-64 w-full relative overflow-hidden mx-auto">
<img className="w-full h-full object-cover object-top mix-blend-multiply filter contrast-125" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
</div>
<div className="pt-6 px-4">
<h3 className="text-xl font-bold text-slate-900">Maya Gurung</h3>
<p className="text-slate-500 text-sm mb-4">Cultural Guide</p>
<div className="flex justify-center space-x-3">
<a className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 hover:bg-yellow-300 transition" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="handwriting text-rose-500 text-3xl block mb-2">Blog</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Latest from the Trails</h2>
<p className="text-slate-500 mb-10 text-lg">Tips, stories and guides to help you prepare for your Himalayan adventure.</p>
<div className="space-y-8">
<div className="group">
<div className="relative rounded-2xl overflow-hidden h-64 w-full mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-yellow-400 text-slate-900 px-3 py-1 font-bold text-xs rounded uppercase">15 April</div>
</div>
<h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-500 transition mb-2">How to prepare for high altitude?</h3>
<p className="text-slate-500 line-clamp-2">Acclimatization is key. Learn the golden rules of ascending safely in the thin air of the Himalayas.</p>
</div>
<a className="inline-block border border-slate-300 px-6 py-2 rounded-full text-slate-600 hover:bg-slate-900 hover:text-white transition" href="#">View all posts</a>
</div>
</div>
<div className="space-y-8">

<div className="flex gap-6 items-start">
<div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 bg-yellow-400 text-slate-900 px-2 py-0.5 text-[10px] font-bold">24 May</div>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 hover:text-rose-500 transition mb-2">Packing list for Annapurna</h3>
<p className="text-slate-500 text-sm line-clamp-2 mb-3">Don't forget your down jacket and good boots. Here is the ultimate checklist.</p>
<a className="text-rose-500 font-medium text-sm hover:underline" href="#">Read More</a>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552590635-27c2c2128abf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute bottom-0 left-0 bg-yellow-400 text-slate-900 px-2 py-0.5 text-[10px] font-bold">27 May</div>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 hover:text-rose-500 transition mb-2">Sherpa Culture Explained</h3>
<p className="text-slate-500 text-sm line-clamp-2 mb-3">Understanding the traditions, prayer flags, and monasteries of the region.</p>
<a className="text-rose-500 font-medium text-sm hover:underline" href="#">Read More</a>
</div>
</div>
<div className="bg-rose-50 rounded-2xl p-6 text-center">
<i className="w-8 h-8 text-rose-500 mx-auto mb-3" data-lucide="mail-open"></i>
<h4 className="font-bold text-slate-900 mb-1">Subscribe to Newsletter</h4>
<p className="text-sm text-slate-500 mb-4">Get trekking guides &amp; discounts.</p>
<div className="flex bg-white p-1 rounded-full shadow-sm">
<input className="w-full bg-transparent px-4 text-sm focus:outline-none" placeholder="Email" type="email"/>
<button className="bg-rose-500 text-white p-2 rounded-full"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-2 md:grid-cols-5 h-48 md:h-64">
<div className="group relative overflow-hidden h-full">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
</div>
<div className="group relative overflow-hidden h-full">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
</div>
<div className="group relative overflow-hidden h-full hidden md:block">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition flex items-center justify-center">
<i className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition" data-lucide="instagram"></i>
</div>
</div>
<div className="group relative overflow-hidden h-full">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
</div>
<div className="group relative overflow-hidden h-full">
<img className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1542359649-31e03cd4d909?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition"></div>
</div>
</div>

<div className="bg-yellow-400 py-16 relative overflow-hidden">
<div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
<div className="mb-6 md:mb-0">
<span className="handwriting text-slate-800 text-2xl block mb-1">Join With Us</span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900">Let's be a Part of your Journey</h2>
</div>
<div className="w-full md:w-auto bg-white rounded-full p-2 flex shadow-xl max-w-md">
<input className="flex-1 bg-transparent px-6 py-2 text-slate-600 focus:outline-none placeholder-slate-400" placeholder="Enter your email address" type="email"/>
<button className="bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-800 transition">Join Now</button>
</div>
</div>

<div className="absolute -bottom-10 left-10 opacity-30">
<svg fill="white" height="150" viewbox="0 0 24 24" width="150" xmlns="http://www.w3.org/2000/svg">
<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
</svg>
</div>
</div>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
<div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center space-x-2 mb-6">
<div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900">
<i className="w-5 h-5 fill-current" data-lucide="mountain"></i>
</div>
<span className="text-white text-2xl font-semibold tracking-tight">Himalaya</span>
</div>
<p className="text-slate-400 mb-6 leading-relaxed">
                    Lorem consultancy elit sed eiusmod tempor inci didunt labore et dolore magna aliqua sed eiusmod.
                </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 transition" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center hover:bg-white transition" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-yellow-400 hover:text-slate-900 hover:border-yellow-400 transition" href="#"><i className="w-4 h-4" data-lucide="youtube"></i></a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Useful Links</h4>
<ul className="space-y-4">
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> About Us</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Popular Treks</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Upcoming Events</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Latest Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-4">
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Terms of use</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Privacy Policy</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Report Violation</a></li>
<li><a className="hover:text-yellow-400 transition flex items-center" href="#"><i className="w-4 h-4 mr-2" data-lucide="chevron-right"></i> Cookies</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start">
<i className="w-5 h-5 text-yellow-400 mt-1 mr-3 shrink-0" data-lucide="map-pin"></i>
<span>45 Grand Ventral, <br/>Thamel, Kathmandu</span>
</li>
<li className="flex items-center">
<i className="w-5 h-5 text-yellow-400 mr-3 shrink-0" data-lucide="mail"></i>
<span>hello@himalayasteps.com</span>
</li>
<li className="flex items-center">
<i className="w-5 h-5 text-yellow-400 mr-3 shrink-0" data-lucide="phone"></i>
<span>+ 123 456 7890</span>
</li>
</ul>
</div>
</div>
<div className="container mx-auto px-6 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2023 Himalayan Steps. All Rights Reserved</p>
<div className="flex items-center space-x-2 mt-4 md:mt-0">
<span className="mr-2">We Accept:</span>
<div className="flex space-x-2">
<div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-white">VISA</div>
<div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-white">MC</div>
<div className="w-10 h-6 bg-slate-700 rounded flex items-center justify-center text-xs font-bold text-white">PAY</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
