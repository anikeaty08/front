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
      

<nav className="fixed w-full z-50 transition-all duration-500 bg-white/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-medium tracking-tighter text-stone-900 uppercase" href="#">
                        Mar Azul
                    </a>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#tents">Campsites</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#experience">The Experience</a>
<a className="text-sm font-light text-stone-600 hover:text-stone-900 transition-colors" href="#location">Mal Pais</a>
</div>
<div className="hidden md:flex items-center">
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-light rounded-full text-white bg-stone-900 hover:bg-stone-800 transition-colors shadow-sm" href="#reserve">
                        Reserve Stay
                    </a>
</div>
<div className="flex items-center md:hidden">
<button className="text-stone-600 hover:text-stone-900 focus:outline-none" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="relative h-screen flex items-center justify-center pt-20">
<div className="absolute inset-0 z-0">
<img alt="Sunset at Mal Pais beach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60 mix-blend-multiply"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-12">
<span className="text-xs uppercase tracking-widest text-stone-200 mb-4 font-light">Mal Pais, Costa Rica</span>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl leading-tight font-serif drop-shadow-sm">
                Untamed nature meets<br/>the Pacific shore.
            </h1>
<p className="text-base md:text-lg text-stone-200 font-light max-w-2xl mb-12">
                Wake up to the sound of crashing waves at our beachfront campsites, hidden within the lush jungles of the Nicoya Peninsula.
            </p>

<div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl p-2 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-center gap-2 md:gap-0 ring-1 ring-stone-900/5" id="reserve">
<div className="flex-1 w-full flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-stone-200 relative group cursor-pointer hover:bg-stone-50 rounded-t-xl md:rounded-l-full md:rounded-tr-none transition-colors">
<iconify-icon className="text-stone-400 mr-3" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
<div className="flex flex-col text-left w-full relative">
<span className="text-xs font-medium text-stone-900">Check in</span>
<input className="bg-transparent text-sm font-light text-stone-500 focus:outline-none w-full cursor-pointer" type="date"/>
</div>
</div>
<div className="flex-1 w-full flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-stone-200 relative group cursor-pointer hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-400 mr-3" height="20" icon="solar:calendar-linear" width="20"></iconify-icon>
<div className="flex flex-col text-left w-full relative">
<span className="text-xs font-medium text-stone-900">Check out</span>
<input className="bg-transparent text-sm font-light text-stone-500 focus:outline-none w-full cursor-pointer" type="date"/>
</div>
</div>
<div className="flex-1 w-full flex items-center px-6 py-3 border-b md:border-b-0 md:border-r border-stone-200 group cursor-pointer hover:bg-stone-50 transition-colors">
<iconify-icon className="text-stone-400 mr-3" height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<div className="flex flex-col text-left w-full">
<span className="text-xs font-medium text-stone-900">Guests</span>
<select className="bg-transparent text-sm font-light text-stone-500 focus:outline-none appearance-none cursor-pointer w-full">
<option>2 Adults</option>
<option>1 Adult</option>
<option>Family (4)</option>
</select>
</div>
</div>
<div className="flex-1 w-full flex items-center px-6 py-3 md:py-2">
<input className="w-full bg-transparent text-sm font-light text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-0" placeholder="Email for best rates" type="email"/>
</div>
<div className="w-full md:w-auto p-1">
<button className="w-full md:w-auto bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-xl md:rounded-full text-sm font-light transition-all flex items-center justify-center shadow-md">
                        Check Availability
                    </button>
</div>
</div>
<p className="text-xs text-stone-300 mt-4 font-light tracking-wide">Enter your email to unlock hidden seasonal availability and exclusive offers.</p>
</div>
</div>

<section className="py-24 bg-stone-50" id="tents">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4 font-serif">The Grounds</h2>
<p className="text-base text-stone-500 font-light">Set up camp just steps from the pristine tide pools and famous surf breaks of the Nicoya Peninsula.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Oceanfront coastline at Mal Pais" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1620063259960-9d0b6ca72a81?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Ocean View</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-2 font-serif group-hover:text-stone-600 transition-colors">Oceanfront Sites</h3>
<p className="text-sm text-stone-500 font-light mb-4 line-clamp-2">Pitch your tent right along the tree line facing the Pacific Ocean. Enjoy direct beach access, stunning sunset views, and the constant breeze rolling off the waves.</p>
<div className="flex items-center space-x-4 text-stone-400 mb-4">
<div className="flex items-center space-x-1" title="Direct Beach Access">
<iconify-icon height="18" icon="solar:water-sun-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Beach Access</span>
</div>
<div className="flex items-center space-x-1" title="Shared Showers">
<iconify-icon height="18" icon="solar:shower-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Facilities</span>
</div>
<div className="flex items-center space-x-1" title="Fire Pit">
<iconify-icon height="18" icon="solar:fire-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Fire Pits</span>
</div>
</div>
<div className="mt-auto flex items-center text-sm font-medium text-stone-900 group-hover:text-stone-500 transition-colors">
                        Discover More <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Jungle canopy and palms at Mal Pais" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1583344186532-a5ec08ee50f3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-stone-900 text-xs px-3 py-1 rounded-full font-medium">Shaded Lots</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-stone-900 mb-2 font-serif group-hover:text-stone-600 transition-colors">Jungle Enclave</h3>
<p className="text-sm text-stone-500 font-light mb-4 line-clamp-2">Nestled just behind the beach in the vibrant tropical foliage. Benefit from natural shade cast by ancient trees and frequent visits from local wildlife.</p>
<div className="flex items-center space-x-4 text-stone-400 mb-4">
<div className="flex items-center space-x-1" title="Shade">
<iconify-icon height="18" icon="solar:tree-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Natural Shade</span>
</div>
<div className="flex items-center space-x-1" title="Communal Kitchen">
<iconify-icon height="18" icon="solar:chef-hat-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Shared Kitchen</span>
</div>
<div className="flex items-center space-x-1" title="Wi-Fi">
<iconify-icon height="18" icon="solar:wi-fi-linear" width="18"></iconify-icon>
<span className="text-xs font-light text-stone-600">Free Wi-Fi</span>
</div>
</div>
<div className="mt-auto flex items-center text-sm font-medium text-stone-900 group-hover:text-stone-500 transition-colors">
                        Discover More <iconify-icon className="ml-2" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
<img alt="Surfer at sunset in Costa Rica" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585489069677-2c13eeeb22a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
</div>
<div className="order-1 lg:order-2 flex flex-col justify-center">
<span className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-light">The Experience</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6 font-serif leading-tight">Where time slows down<br/>and senses awaken.</h2>
<p className="text-base text-stone-500 font-light mb-8 leading-relaxed">
                        Beyond the campgrounds lies Mal Pais—a haven for surfers, yogis, and those seeking connection with the earth. Mar Azul provides a basecamp for exploration, offering immediate access to secluded breaks, tide pool adventuring, and rugged nature walks along the coast.
                    </p>
<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<h3 className="text-xl font-medium tracking-tight text-stone-900 mb-2 font-serif">Planning a trip to Costa Rica?</h3>
<p className="text-sm text-stone-500 font-light mb-6">Download our exclusive "Insider's Guide to Mal Pais &amp; Santa Teresa" and receive a pristine welcome gift upon booking.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-stone-200 px-4 py-3 rounded-xl text-sm font-light text-stone-800 placeholder-stone-400 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-colors" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-stone-900 text-white px-6 py-3 rounded-xl text-sm font-light hover:bg-stone-800 transition-colors whitespace-nowrap" type="submit">
                                Get the Guide
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200 bg-stone-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-700">
<iconify-icon height="24" icon="solar:cup-hot-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Local Coffee</h4>
<p className="text-xs text-stone-500 font-light">Available every morning</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-700">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Eco-Conscious</h4>
<p className="text-xs text-stone-500 font-light">Committed to sustainability</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-700">
<iconify-icon height="24" icon="solar:waterdrops-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Tide Pools</h4>
<p className="text-xs text-stone-500 font-light">Right at our doorstep</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-700">
<iconify-icon height="24" icon="solar:routing-2-linear" width="24"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-stone-900 mb-1">Surf Breaks</h4>
<p className="text-xs text-stone-500 font-light">Walking distance to waves</p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 pt-24 pb-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="col-span-1 md:col-span-4 lg:col-span-5">
<a className="text-2xl font-medium tracking-tighter text-white uppercase mb-6 inline-block" href="#">
                        Mar Azul
                    </a>
<p className="text-sm text-stone-400 font-light max-w-sm mb-8 leading-relaxed">
                        A true coastal escape on the Nicoya Peninsula. We provide intimate, immersive nature experiences for those looking to disconnect.
                    </p>
<div className="flex items-center space-x-2 text-stone-400">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Mal Pais, Puntarenas Province, Costa Rica</span>
</div>
</div>
<div className="col-span-1 md:col-span-3 lg:col-span-2">
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wider">Explore</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light text-stone-400 hover:text-white transition-colors" href="#">Campsites</a></li>
<li><a className="text-sm font-light text-stone-400 hover:text-white transition-colors" href="#">Experiences</a></li>
<li><a className="text-sm font-light text-stone-400 hover:text-white transition-colors" href="#">Facilities</a></li>
<li><a className="text-sm font-light text-stone-400 hover:text-white transition-colors" href="#">Gallery</a></li>
</ul>
</div>
<div className="col-span-1 md:col-span-5 lg:col-span-5">
<div className="bg-stone-800/50 p-6 rounded-2xl border border-stone-700/50">
<h4 className="text-base font-medium text-white mb-2">Have specific dates in mind?</h4>
<p className="text-sm text-stone-400 font-light mb-6">Our reservation specialists respond within 2 hours to help craft your perfect itinerary.</p>
<form className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-stone-900/50 border border-stone-700 px-4 py-2.5 rounded-lg text-sm font-light text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors" placeholder="First Name" type="text"/>
<input className="w-full bg-stone-900/50 border border-stone-700 px-4 py-2.5 rounded-lg text-sm font-light text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-stone-900/50 border border-stone-700 px-4 py-2.5 rounded-lg text-sm font-light text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Email Address" required="" type="email"/>
<textarea className="w-full bg-stone-900/50 border border-stone-700 px-4 py-2.5 rounded-lg text-sm font-light text-white placeholder-stone-500 focus:outline-none focus:border-stone-500 transition-colors resize-none" placeholder="Tell us about your ideal stay..." rows="2"></textarea>
<button className="w-full bg-white text-stone-900 px-4 py-3 rounded-lg text-sm font-medium hover:bg-stone-100 transition-colors flex items-center justify-center" type="submit">
                                Start a Conversation <iconify-icon className="ml-2" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
<div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
<p className="text-xs text-stone-500 font-light mb-4 md:mb-0">© 2024 Camping Mar Azul, Mal Pais. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-stone-500 hover:text-white transition-colors text-xs font-light" href="#">Privacy Policy</a>
<a className="text-stone-500 hover:text-white transition-colors text-xs font-light" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
