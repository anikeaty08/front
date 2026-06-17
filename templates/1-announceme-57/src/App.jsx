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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="bg-gray-900 text-white py-3 px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
<span className="font-semibold text-base tracking-tight">Now available in your city</span>
<span className="hidden sm:inline-block w-1 h-1 bg-gray-500 rounded-full"></span>
<span className="text-base text-gray-300">Book your first service with 20% off using code <span className="text-white font-medium">FIRST20</span></span>
</div>

<header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">ServiceHub</span>
</div>
<nav className="hidden md:flex gap-8">
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Services</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Professionals</a>
<a className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">How it works</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-base font-medium text-gray-600 hover:text-gray-900" href="#">Log in</a>
<a className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors" href="#">Sign up</a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-gray-50">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                    Book trusted services <br className="hidden sm:block"/> near you
                </h1>
<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Find experienced professionals for your home and business needs. Compare options, check real reviews, and book with confidence — all in one place.
                </p>

<div className="bg-white p-2 md:p-3 rounded-3xl md:rounded-full shadow-lg shadow-gray-200/50 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-2 border border-gray-100">
<div className="w-full md:w-1/2 flex items-center px-4 py-3 md:py-2 gap-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-text group">
<i className="text-gray-400 group-hover:text-gray-600 w-5 h-5 transition-colors" data-lucide="search"></i>
<input className="w-full bg-transparent border-none outline-none text-lg text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="What service do you need?" type="text"/>
</div>
<div className="hidden md:block w-px h-8 bg-gray-200"></div>
<div className="w-full md:block border-t border-gray-100 md:border-none"></div>
<div className="w-full md:w-1/2 flex items-center px-4 py-3 md:py-2 gap-3 hover:bg-gray-50 rounded-2xl transition-colors cursor-text group relative">
<i className="text-gray-400 group-hover:text-gray-600 w-5 h-5 transition-colors" data-lucide="map-pin"></i>
<input className="w-full bg-transparent border-none outline-none text-lg text-gray-900 placeholder-gray-400 focus:ring-0" placeholder="Enter your location" type="text"/>
<button className="absolute right-2 md:right-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 p-2 md:p-3 rounded-full transition-colors flex items-center gap-2 font-medium">
<span className="hidden md:inline-block px-2 text-base">Find Services</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<button className="w-full md:hidden bg-emerald-100 text-emerald-800 hover:bg-emerald-200 py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 font-medium mt-2">
<span className="text-lg">Find Services</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="mt-12 flex items-center justify-center gap-3">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-50 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-50 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=2"/></div>
<div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-50 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=3"/></div>
<div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-gray-50 flex items-center justify-center text-xs font-semibold text-emerald-800 tracking-tighter">5k+</div>
</div>
<div className="text-left">
<div className="flex items-center gap-1 text-yellow-500 mb-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-gray-600"><span className="font-semibold text-gray-900">4.8</span> average rating from thousands of happy customers</p>
</div>
</div>
</div>
</section>


<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
<div className="lg:col-span-4 lg:sticky lg:top-32 h-max">
<h2 className="uppercase text-sm font-semibold tracking-wider text-emerald-600 mb-4">Categories</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">Services for every need</h3>
<p className="text-lg text-gray-600 leading-relaxed">
                            Whether it's fixing something at home or hiring a professional for your work, explore a wide range of reliable services tailored to your needs.
                        </p>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<a className="group block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200" href="#">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-gray-700" data-lucide="home"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Home Repairs</h4>
<p className="text-base text-gray-500">Plumbing, electrical, handyman</p>
</a>
<a className="group block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200" href="#">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-gray-700" data-lucide="sparkles"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Cleaning</h4>
<p className="text-base text-gray-500">Deep clean, regular, move-in</p>
</a>
<a className="group block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200" href="#">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-gray-700" data-lucide="briefcase"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Business</h4>
<p className="text-base text-gray-500">IT support, consulting, legal</p>
</a>
<a className="group block p-8 rounded-3xl bg-emerald-50 hover:bg-emerald-100 transition-colors border border-transparent hover:border-emerald-200 flex flex-col justify-center items-center text-center" href="#">
<h4 className="text-xl font-semibold tracking-tight text-emerald-900 mb-2">View all categories</h4>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mt-2">
<i className="w-5 h-5 text-emerald-700" data-lucide="arrow-right"></i>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
<div className="lg:col-span-5">
<div className="relative h-[600px] bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col p-8">

<div className="flex-grow flex flex-col gap-6 pt-8">

<div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 opacity-50">
<div className="w-10 h-10 bg-gray-200 rounded-full"></div>
<div className="space-y-2 flex-grow">
<div className="h-3 bg-gray-200 rounded w-1/2"></div>
<div className="h-2 bg-gray-200 rounded w-1/3"></div>
</div>
</div>

<div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-center gap-4 shadow-sm transform scale-105 transition-transform">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 font-semibold text-lg">2</div>
<div className="space-y-2 flex-grow">
<div className="h-4 bg-emerald-200 rounded w-2/3"></div>
<div className="h-3 bg-emerald-200/50 rounded w-1/2"></div>
</div>
<div className="w-6 h-6 text-emerald-600"><i data-lucide="check-circle-2"></i></div>
</div>

<div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 flex items-center gap-4 opacity-50">
<div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
<div className="space-y-2 flex-grow">
<div className="h-3 bg-gray-200 rounded w-full"></div>
<div className="h-2 bg-gray-200 rounded w-2/3"></div>
</div>
</div>
</div>

<div className="mt-auto bg-gray-900 text-white p-4 rounded-2xl text-center font-medium">
                                Booking Confirmed
                            </div>
</div>
</div>
<div className="lg:col-span-6 lg:col-start-7">
<h2 className="uppercase text-sm font-semibold tracking-wider text-gray-500 mb-4">Process</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">How ServiceHub works</h3>
<p className="text-lg text-gray-600 mb-12 leading-relaxed">
                            A simple and transparent way to get your work done without stress.
                        </p>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-xl">1</div>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Choose a service</h4>
<p className="text-lg text-gray-600">Browse through categories or search for what you need in seconds.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-xl">2</div>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Compare professionals</h4>
<p className="text-lg text-gray-600">View ratings, reviews, experience, and pricing before you decide.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0">
<div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold text-xl">3</div>
</div>
<div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Book with confidence</h4>
<p className="text-lg text-gray-600">Schedule at your convenience and get reliable service, on time.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="uppercase text-sm font-semibold tracking-wider text-emerald-600 mb-4">Benefits</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">Why choose ServiceHub</h3>
<p className="text-lg text-gray-600 leading-relaxed">
                        We focus on making your experience simple, reliable, and worry-free.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col h-full border border-gray-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
<i className="w-6 h-6 text-gray-900" data-lucide="shield-check"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Verified professionals</h4>
<p className="text-lg text-gray-600 leading-relaxed mt-auto">Every service provider goes through a quality check process.</p>
</div>

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col h-full border border-gray-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
<i className="w-6 h-6 text-gray-900" data-lucide="banknote"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Transparent pricing</h4>
<p className="text-lg text-gray-600 leading-relaxed mt-auto">Clear pricing details so you know what to expect before booking.</p>
</div>

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col h-full border border-gray-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
<i className="w-6 h-6 text-gray-900" data-lucide="users"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Trusted by customers</h4>
<p className="text-lg text-gray-600 leading-relaxed mt-auto">Ratings and reviews from real users help you make better decisions.</p>
</div>

<div className="bg-gray-50 rounded-3xl p-10 flex flex-col h-full border border-gray-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
<i className="w-6 h-6 text-gray-900" data-lucide="clock"></i>
</div>
<h4 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Reliable service</h4>
<p className="text-lg text-gray-600 leading-relaxed mt-auto">Professionals who show up on time and deliver quality work.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
<div>
<h2 className="uppercase text-sm font-semibold tracking-wider text-emerald-400 mb-4">Top Talent</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">Top-rated professionals near you</h3>
<p className="text-lg text-gray-400 leading-relaxed max-w-lg">
                            Skilled and experienced providers who are consistently rated high by customers for their work and reliability.
                        </p>
</div>
<div className="flex justify-start lg:justify-end">
<a className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-emerald-400 transition-colors group border border-gray-700 px-6 py-3 rounded-full hover:border-emerald-400" href="#">
                            See all professionals
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="flex overflow-x-auto pb-12 px-4 sm:px-6 lg:px-8 gap-6 snap-x snap-mandatory hide-scrollbar" style={{scrollbarWidth: 'none'}}>

<div className="snap-start flex-shrink-0 w-80 sm:w-96 bg-gray-800 rounded-3xl p-8 border border-gray-700 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<h4 className="text-xl font-semibold text-white tracking-tight">Michael T.</h4>
<p className="text-base text-gray-400">Master Electrician</p>
</div>
</div>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-yellow-500 fill-current" data-lucide="star"></i>
<span className="text-lg font-medium">4.9</span>
<span className="text-base text-gray-500">(120 reviews)</span>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-white text-gray-900 rounded-xl font-medium text-base hover:bg-gray-100 transition-colors">View Profile</button>
</div>
</div>

<div className="snap-start flex-shrink-0 w-80 sm:w-96 bg-gray-800 rounded-3xl p-8 border border-gray-700 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=32"/>
</div>
<div>
<h4 className="text-xl font-semibold text-white tracking-tight">Sarah J.</h4>
<p className="text-base text-gray-400">Deep Cleaning Specialist</p>
</div>
</div>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-yellow-500 fill-current" data-lucide="star"></i>
<span className="text-lg font-medium">5.0</span>
<span className="text-base text-gray-500">(85 reviews)</span>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-white text-gray-900 rounded-xl font-medium text-base hover:bg-gray-100 transition-colors">View Profile</button>
</div>
</div>

<div className="snap-start flex-shrink-0 w-80 sm:w-96 bg-gray-800 rounded-3xl p-8 border border-gray-700 flex flex-col">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700">
<img alt="Profile" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=53"/>
</div>
<div>
<h4 className="text-xl font-semibold text-white tracking-tight">David L.</h4>
<p className="text-base text-gray-400">Expert Plumber</p>
</div>
</div>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-yellow-500 fill-current" data-lucide="star"></i>
<span className="text-lg font-medium">4.8</span>
<span className="text-base text-gray-500">(210 reviews)</span>
</div>
<div className="mt-auto">
<button className="w-full py-3 bg-white text-gray-900 rounded-xl font-medium text-base hover:bg-gray-100 transition-colors">View Profile</button>
</div>
</div>

<div className="snap-start flex-shrink-0 w-80 sm:w-96 bg-gray-800/50 rounded-3xl p-8 border border-gray-700 border-dashed flex items-center justify-center">
<div className="text-center">
<div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
<i className="w-5 h-5 text-gray-400" data-lucide="search"></i>
</div>
<p className="text-lg font-medium text-gray-300">Discover more pros</p>
</div>
</div>
</div>

<style>
                .hide-scrollbar::-webkit-scrollbar { display: none; }
            </style>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
<div className="lg:col-span-4 lg:sticky lg:top-32 h-max">
<h2 className="uppercase text-sm font-semibold tracking-wider text-emerald-600 mb-4">Reviews</h2>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">What our customers say</h3>
<p className="text-lg text-gray-600 leading-relaxed">
                            Hear from people who have experienced smooth and reliable service through ServiceHub.
                        </p>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
<p className="text-lg text-gray-600 mb-8 flex-grow">"ServiceHub made it so easy to find a reliable plumber when my pipe burst. The app is intuitive and the professional was top-notch."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=4"/></div>
<span className="text-base font-medium text-gray-900">Emily Davis</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col md:translate-y-8">
<p className="text-lg text-gray-600 mb-8 flex-grow">"I've been using this platform for all my home maintenance needs. It completely takes the stress out of hiring people."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/></div>
<span className="text-base font-medium text-gray-900">John Smith</span>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
<p className="text-lg text-gray-600 mb-8 flex-grow">"The transparent pricing feature is exactly what this industry needed. No hidden fees, just great service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=6"/></div>
<span className="text-base font-medium text-gray-900">Sarah Johnson</span>
</div>
</div>

<div className="hidden md:flex bg-emerald-50 rounded-[3rem] p-8 items-center justify-center md:translate-y-8 opacity-50">
<div className="w-16 h-32 bg-emerald-200/50 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden text-center">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-white to-white -z-10"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">
                    Get your work done without the hassle
                </h2>
<p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    From small tasks to important projects, find the right professional and get started in just a few clicks.
                </p>
<a className="inline-flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-gray-900/20" href="#">
                    Book a Service
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>
</main>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="wrench"></i>
</div>
<span className="text-xl font-semibold tracking-tight">ServiceHub</span>
</div>
</div>
<div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
<div>
<ul className="space-y-4">
<li><a className="text-base text-gray-600 hover:text-gray-900" href="#">Home</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900" href="#">About company</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900" href="#">Product</a></li>
</ul>
</div>
<div>
<ul className="space-y-4">
<li><a className="text-base text-gray-600 hover:text-gray-900" href="#">Contact</a></li>
<li><a className="text-base text-gray-600 hover:text-gray-900" href="#">Blog</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1 flex gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 gap-4">
<div className="flex items-center gap-6 text-sm text-gray-500">
<span>1 (800) 555-0199</span>
<span>hello@servicehub.com</span>
</div>
<p className="text-sm text-gray-500 text-center md:text-left flex-grow md:px-8">
                    ServiceHub — making service booking simple, reliable, and accessible for everyone.
                </p>
<div className="flex items-center gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900" href="#">Privacy Policy</a>
<span>© 2024 ServiceHub</span>
</div>
</div>
</div>
</footer>




    </>
  );
}
