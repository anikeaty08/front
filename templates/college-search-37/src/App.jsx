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
            strokeWidth: 1.5
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
      

<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">
            Find the Right College &amp; Career After<br className="hidden md:block"/> 12th
        </h1>
<p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
            Discover your perfect path from 20,000+ colleges and 500+ exams across India.
        </p>

<div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] border border-gray-200 p-1.5 w-full max-w-4xl mx-auto text-left">
<div className="flex-1 flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="book"></i>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-0.5">Course</span>
<span className="text-base font-medium text-gray-900 leading-tight">Select Course</span>
</div>
</div>
<div className="hidden md:block w-px bg-gray-200 my-2"></div>
<div className="flex-1 flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="map-pin"></i>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-0.5">Location</span>
<span className="text-base font-medium text-gray-900 leading-tight">Any Location</span>
</div>
</div>
<div className="hidden md:block w-px bg-gray-200 my-2"></div>
<div className="flex-1 flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors">
<i className="w-5 h-5 text-gray-400" data-lucide="graduation-cap"></i>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-0.5">Level</span>
<span className="text-base font-medium text-gray-900 leading-tight">Undergraduate</span>
</div>
</div>
<button className="mt-2 md:mt-0 bg-blue-600 text-white px-8 py-3.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors w-full md:w-auto">
<i className="w-4 h-4" data-lucide="search"></i>
<span className="text-base">Search</span>
</button>
</div>

<div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm">
<span className="text-gray-500 text-base">Trending:</span>
<span className="bg-blue-50 text-blue-600 px-3.5 py-1.5 rounded-full text-xs font-medium border border-blue-100/50 cursor-pointer hover:bg-blue-100 transition-colors">B.Tech in Delhi</span>
<span className="bg-red-50 text-red-500 px-3.5 py-1.5 rounded-full text-xs font-medium border border-red-100/50 cursor-pointer hover:bg-red-100 transition-colors">MBA in Mumbai</span>
<span className="bg-green-50 text-green-600 px-3.5 py-1.5 rounded-full text-xs font-medium border border-green-100/50 cursor-pointer hover:bg-green-100 transition-colors">NEET 2024 Dates</span>
<span className="bg-purple-50 text-purple-600 px-3.5 py-1.5 rounded-full text-xs font-medium border border-purple-100/50 cursor-pointer hover:bg-purple-100 transition-colors">Top Medical Colleges</span>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-5">
<div className="bg-blue-50 p-2.5 rounded-xl text-blue-600">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Top Colleges</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">B.Tech</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">MBA</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">MBBS</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">B.Sc</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-5">
<div className="bg-red-50 p-2.5 rounded-xl text-red-500">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Top Exams</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">JEE Main</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">NEET</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">CAT</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">CUET</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-5">
<div className="bg-green-50 p-2.5 rounded-xl text-green-600">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Top Courses</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">Engineering</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">Medical</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">Design</span>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)] cursor-pointer hover:border-gray-300 transition-colors">
<div className="flex items-center gap-3 mb-5">
<div className="bg-orange-50 p-2.5 rounded-xl text-orange-500">
<i className="w-5 h-5" data-lucide="arrow-right-left"></i>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Compare</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">IIT vs NIT</span>
<span className="px-3 py-1.5 rounded-lg border border-gray-100 text-sm text-gray-600 hover:bg-gray-50 transition-colors">IIM vs ISB</span>
</div>
</div>
</section>

<section>
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Explore Career Paths</h2>
<p className="text-base text-gray-500">Find colleges and courses based on your interests.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-blue-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Engineering</h4>
<p className="text-xs text-gray-500">10,000+ Colleges</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-red-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="briefcase"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Management</h4>
<p className="text-xs text-gray-500">8,500+ Colleges</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-green-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Medical</h4>
<p className="text-xs text-gray-500">2,000+ Colleges</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-orange-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Design</h4>
<p className="text-xs text-gray-500">1,500+ Colleges</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-purple-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Law</h4>
<p className="text-xs text-gray-500">1,200+ Colleges</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-center cursor-pointer hover:border-teal-200 hover:shadow-sm transition-all group">
<div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mb-4 group-hover:scale-105 transition-transform">
<i className="w-5 h-5" data-lucide="calculator"></i>
</div>
<h4 className="text-base font-medium text-gray-900 mb-1 tracking-tight">Commerce</h4>
<p className="text-xs text-gray-500">5,000+ Colleges</p>
</div>
</div>

<div className="flex items-center flex-wrap gap-1.5 mt-8 text-gray-500">
<span className="mr-3 text-sm font-medium">Browse by Alphabet:</span>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">A</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">B</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">C</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white shadow-sm text-sm font-medium transition-colors">D</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">E</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">F</button>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">G</button>
<span className="px-2 text-sm font-medium text-gray-400">...</span>
<button className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 text-sm font-medium transition-colors">Z</button>
</div>
</section>

<section className="bg-[#F2FBF5] rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 border border-[#E5F5EC]">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                    Not Sure What to Study?<br className="hidden md:block"/> Let Us Guide You.
                </h2>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Take our 5-minute career assessment test.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Get personalized college and course recommendations.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-green-600 mt-0.5 shrink-0" data-lucide="check-circle-2"></i>
<span className="text-base text-gray-700">Connect with expert counselors for free guidance.</span>
</li>
</ul>
<button className="bg-[#22C55E] hover:bg-green-600 text-white px-7 py-3.5 rounded-xl font-medium inline-flex items-center gap-2 transition-colors shadow-sm">
<span className="text-base">Take Career Test</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex-1 w-full">
<div className="bg-gray-200/50 rounded-2xl w-full aspect-video md:aspect-auto md:h-full min-h-[300px] flex flex-col items-center justify-center border border-gray-300/50 border-dashed">
<i className="w-12 h-12 mb-3 text-gray-400" data-lucide="image"></i>
<span className="text-sm font-medium text-gray-500">Illustration Placeholder</span>
</div>
</div>
</section>

<section>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Featured Colleges</h2>
<p className="text-base text-gray-500">Handpicked institutions for your bright future.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors">B.Tech</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium transition-colors">MBA</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium transition-colors">Medical</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-4 py-2 rounded-full text-sm font-medium transition-colors">Design</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] group hover:shadow-md transition-shadow">
<div className="h-44 bg-gradient-to-b from-gray-200 to-gray-300 relative flex items-center justify-center">
<i className="w-8 h-8 text-gray-400/80" data-lucide="image"></i>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2.5 py-1 rounded text-gray-700 shadow-sm">Featured</span>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-blue-900 mb-1.5 tracking-tight group-hover:text-blue-700 transition-colors">IIT Madras</h3>
<div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span>Chennai, Tamil Nadu</span>
</div>
<div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 mb-5">
<div>
<p className="text-xs text-gray-500 mb-1">Rating</p>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.8/5</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹2.1L / yr</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Brochure</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors text-center shadow-sm">Apply Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] group hover:shadow-md transition-shadow">
<div className="h-44 bg-gradient-to-b from-gray-200 to-gray-300 relative flex items-center justify-center">
<i className="w-8 h-8 text-gray-400/80" data-lucide="image"></i>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-blue-900 mb-1.5 tracking-tight group-hover:text-blue-700 transition-colors">BITS Pilani</h3>
<div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span>Pilani, Rajasthan</span>
</div>
<div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 mb-5">
<div>
<p className="text-xs text-gray-500 mb-1">Rating</p>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.6/5</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹5.4L / yr</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Brochure</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors text-center shadow-sm">Apply Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] group hover:shadow-md transition-shadow">
<div className="h-44 bg-gradient-to-b from-gray-200 to-gray-300 relative flex items-center justify-center">
<i className="w-8 h-8 text-gray-400/80" data-lucide="image"></i>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-blue-900 mb-1.5 tracking-tight group-hover:text-blue-700 transition-colors">VIT Vellore</h3>
<div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span>Vellore, Tamil Nadu</span>
</div>
<div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 mb-5">
<div>
<p className="text-xs text-gray-500 mb-1">Rating</p>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.3/5</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹1.9L / yr</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Brochure</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors text-center shadow-sm">Apply Now</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] group hover:shadow-md transition-shadow">
<div className="h-44 bg-gradient-to-b from-gray-200 to-gray-300 relative flex items-center justify-center">
<i className="w-8 h-8 text-gray-400/80" data-lucide="image"></i>
</div>
<div className="p-5">
<h3 className="text-lg font-medium text-blue-900 mb-1.5 tracking-tight group-hover:text-blue-700 transition-colors">SRM Institute</h3>
<div className="flex items-center gap-1.5 text-sm text-gray-500 mb-5">
<i className="w-4 h-4 text-gray-400" data-lucide="map-pin"></i>
<span>Chennai, Tamil Nadu</span>
</div>
<div className="grid grid-cols-2 gap-4 pb-5 border-b border-gray-100 mb-5">
<div>
<p className="text-xs text-gray-500 mb-1">Rating</p>
<div className="flex items-center gap-1 text-sm font-medium text-gray-900">
<i className="w-4 h-4 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.1/5</span>
</div>
</div>
<div>
<p className="text-xs text-gray-500 mb-1">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹2.5L / yr</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Brochure</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors text-center shadow-sm">Apply Now</button>
</div>
</div>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-1.5 text-base font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#">
                    View All Colleges <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section>
<div className="bg-white rounded-[2rem] border border-gray-200 p-6 md:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Top Colleges by City</h2>

<div className="mb-10 last:mb-0">
<div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-blue-600" data-lucide="map-pin"></i>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Colleges in New Delhi</h3>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all cursor-pointer">
<div>
<h4 className="text-base font-medium text-gray-900">IIT Delhi</h4>
<div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.9</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all cursor-pointer">
<div>
<h4 className="text-base font-medium text-gray-900">DTU Delhi</h4>
<div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.5</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all cursor-pointer">
<div>
<h4 className="text-base font-medium text-gray-900">NSUT Delhi</h4>
<div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.4</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="mb-10 last:mb-0">
<div className="flex items-center justify-between mb-5 pb-3 border-b border-gray-100">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-red-500" data-lucide="map-pin"></i>
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Colleges in Mumbai</h3>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all cursor-pointer">
<div>
<h4 className="text-base font-medium text-gray-900">IIT Bombay</h4>
<div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.9</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:border-gray-300 hover:bg-white transition-all cursor-pointer">
<div>
<h4 className="text-base font-medium text-gray-900">VJTI Mumbai</h4>
<div className="flex items-center gap-1 mt-1 text-sm text-gray-600">
<i className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<span>4.3</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section>
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Courses &amp; Specializations</h2>
<p className="text-base text-gray-500">Explore wide range of programs.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div>
<div className="flex items-center gap-2 mb-5">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<h3 className="text-base font-medium text-gray-900">Engineering</h3>
</div>
<ul className="space-y-3.5">
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Computer Science</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Mechanical</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Civil</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Electrical</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Information Tech</a></li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-5">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h3 className="text-base font-medium text-gray-900">Medical</h3>
</div>
<ul className="space-y-3.5">
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">MBBS</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">BDS</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Nursing</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Pharmacy</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Physiotherapy</a></li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-5">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<h3 className="text-base font-medium text-gray-900">Management</h3>
</div>
<ul className="space-y-3.5">
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">MBA / PGDM</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">BBA</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Finance</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Human Resources</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Marketing</a></li>
</ul>
</div>
<div>
<div className="flex items-center gap-2 mb-5">
<div className="w-2 h-2 rounded-full bg-orange-400"></div>
<h3 className="text-base font-medium text-gray-900">Science</h3>
</div>
<ul className="space-y-3.5">
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">B.Sc</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">M.Sc</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Physics</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Chemistry</a></li>
<li><a className="text-base text-gray-500 hover:text-blue-600 transition-colors block" href="#">Mathematics</a></li>
</ul>
</div>
</div>
</section>

<section>
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Top Entrance Exams</h2>
<p className="text-base text-gray-500">Stay updated with important dates and notifications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow">
<div className="flex items-start justify-between mb-1">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">JEE Main 2024</h3>
<span className="bg-[#ECFDF5] text-[#059669] px-2.5 py-1 rounded text-[11px] uppercase tracking-wide font-medium">Applications Open</span>
</div>
<p className="text-sm text-gray-500 mb-6">Joint Entrance Examination</p>
<div className="space-y-3 mb-8 flex-1">
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<span>Exam: 24 Jan - 1 Feb 2024</span>
</div>
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="user"></i>
<span>Level: National</span>
</div>
</div>
<div className="flex gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center">Overview</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Exam Dates</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow">
<div className="flex items-start justify-between mb-1">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">NEET UG 2024</h3>
<span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded text-[11px] uppercase tracking-wide font-medium border border-blue-100/50">Upcoming</span>
</div>
<p className="text-sm text-gray-500 mb-6">National Eligibility Entrance Test</p>
<div className="space-y-3 mb-8 flex-1">
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<span>Exam: 5 May 2024</span>
</div>
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="user"></i>
<span>Level: National</span>
</div>
</div>
<div className="flex gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center">Overview</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Exam Dates</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-sm transition-shadow">
<div className="flex items-start justify-between mb-1">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">CAT 2023</h3>
<span className="bg-red-50 text-red-700 px-2.5 py-1 rounded text-[11px] uppercase tracking-wide font-medium border border-red-100/50">Results Declared</span>
</div>
<p className="text-sm text-gray-500 mb-6">Common Admission Test</p>
<div className="space-y-3 mb-8 flex-1">
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i>
<span>Exam: 26 Nov 2023</span>
</div>
<div className="flex items-center gap-2.5 text-base text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="user"></i>
<span>Level: National</span>
</div>
</div>
<div className="flex gap-3 mt-auto">
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-center">Overview</button>
<button className="flex-1 px-4 py-2.5 text-sm font-medium text-blue-600 bg-white border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors text-center">Cutoffs</button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
