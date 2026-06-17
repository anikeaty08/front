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
      

<nav className="sticky top-0 z-50 bg-white border-b border-[#e3e5eb] px-4 md:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-8">
<div className="flex items-center gap-2 font-semibold tracking-tight text-xl">
<div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
                EduPortal
            </div>
<div className="hidden md:flex items-center gap-6 text-base font-medium text-gray-600">
<a className="hover:text-gray-900 flex items-center gap-1" href="#">Colleges <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 flex items-center gap-1" href="#">Courses <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 flex items-center gap-1" href="#">Exams <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 flex items-center gap-1" href="#">Study Abroad <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="hover:text-gray-900 flex items-center gap-1" href="#">More <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center relative">
<i className="w-4 h-4 absolute left-3 text-gray-400" data-lucide="search"></i>
<input className="pl-9 pr-4 py-2 bg-[#f4f5f7] border-transparent focus:bg-white focus:border-[#3e64de] focus:ring-1 focus:ring-[#3e64de] rounded-md outline-none text-base transition-all w-64" placeholder="Search colleges, exams, courses" type="text"/>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#e3e5eb] rounded-md text-base font-medium hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="user"></i> Login / Sign Up
            </button>
<button className="md:hidden p-2 text-gray-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="bg-white pt-16 pb-12 px-4 md:px-8 text-center border-b border-[#e3e5eb]">
<div className="max-w-4xl mx-auto">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Find the Right College &amp; Career After 12th</h1>
<p className="text-lg text-gray-500 mb-10">Discover your perfect path from 20,000+ colleges and 500+ exams across India.</p>
<div className="bg-white border border-[#e3e5eb] rounded-xl shadow-sm p-2 flex flex-col md:flex-row items-center gap-2 max-w-3xl mx-auto mb-6 relative z-10">
<div className="flex-1 flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-[#e3e5eb]">
<i className="w-5 h-5 text-gray-400 mr-3" data-lucide="book"></i>
<div className="flex-1 text-left">
<p className="text-xs text-gray-500 font-medium">COURSE</p>
<select className="w-full bg-transparent outline-none text-base font-medium appearance-none cursor-pointer">
<option>Select Course</option>
<option>B.Tech</option>
<option>MBA</option>
</select>
</div>
</div>
<div className="flex-1 flex items-center w-full px-4 py-2 border-b md:border-b-0 md:border-r border-[#e3e5eb]">
<i className="w-5 h-5 text-gray-400 mr-3" data-lucide="map-pin"></i>
<div className="flex-1 text-left">
<p className="text-xs text-gray-500 font-medium">LOCATION</p>
<select className="w-full bg-transparent outline-none text-base font-medium appearance-none cursor-pointer">
<option>Any Location</option>
<option>Delhi</option>
<option>Mumbai</option>
</select>
</div>
</div>
<div className="flex-1 flex items-center w-full px-4 py-2">
<i className="w-5 h-5 text-gray-400 mr-3" data-lucide="graduation-cap"></i>
<div className="flex-1 text-left">
<p className="text-xs text-gray-500 font-medium">LEVEL</p>
<select className="w-full bg-transparent outline-none text-base font-medium appearance-none cursor-pointer">
<option>Undergraduate</option>
<option>Postgraduate</option>
</select>
</div>
</div>
<button className="w-full md:w-auto bg-[#3e64de] hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium text-base transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="search"></i> Search
                </button>
</div>
<div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
<span>Trending:</span>
<span className="bg-[#eef2ff] text-[#3e64de] px-3 py-1 rounded-full cursor-pointer hover:bg-blue-100 transition-colors">B.Tech in Delhi</span>
<span className="bg-[#fef1f4] text-[#f44337] px-3 py-1 rounded-full cursor-pointer hover:bg-red-50 transition-colors">MBA in Mumbai</span>
<span className="bg-[#f2fdf5] text-[#24a148] px-3 py-1 rounded-full cursor-pointer hover:bg-green-50 transition-colors">NEET 2024 Dates</span>
<span className="bg-[#f3bafd] text-purple-700 px-3 py-1 rounded-full cursor-pointer hover:bg-purple-100 transition-colors bg-opacity-30">Top Medical Colleges</span>
</div>
</div>
</section>
<div className="max-w-7xl mx-auto px-4 md:px-8 py-12 space-y-16">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-[#e3e5eb] p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#eef2ff] text-[#3e64de] flex items-center justify-center">
<i className="w-5 h-5" data-lucide="building"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight">Top Colleges</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#3e64de] hover:text-[#3e64de] cursor-pointer transition-colors">B.Tech</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#3e64de] hover:text-[#3e64de] cursor-pointer transition-colors">MBA</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#3e64de] hover:text-[#3e64de] cursor-pointer transition-colors">MBBS</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#3e64de] hover:text-[#3e64de] cursor-pointer transition-colors">B.Sc</span>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#fef1f4] text-[#f44337] flex items-center justify-center">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight">Top Exams</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#f44337] hover:text-[#f44337] cursor-pointer transition-colors">JEE Main</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#f44337] hover:text-[#f44337] cursor-pointer transition-colors">NEET</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#f44337] hover:text-[#f44337] cursor-pointer transition-colors">CAT</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#f44337] hover:text-[#f44337] cursor-pointer transition-colors">CUET</span>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-[#f2fdf5] text-[#24a148] flex items-center justify-center">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight">Top Courses</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#24a148] hover:text-[#24a148] cursor-pointer transition-colors">Engineering</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#24a148] hover:text-[#24a148] cursor-pointer transition-colors">Medical</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#24a148] hover:text-[#24a148] cursor-pointer transition-colors">Design</span>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-[#ed9700] flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-left-right"></i>
</div>
<h3 className="font-semibold text-lg tracking-tight">Compare</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#ed9700] hover:text-[#ed9700] cursor-pointer transition-colors">IIT vs NIT</span>
<span className="text-sm border border-[#e3e5eb] px-3 py-1.5 rounded-md hover:border-[#ed9700] hover:text-[#ed9700] cursor-pointer transition-colors">IIM vs ISB</span>
</div>
</div>
</div>

<div>
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Explore Career Paths</h2>
<p className="text-base text-gray-500">Find colleges and courses based on your interests.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#3e64de] hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-[#eef2ff] text-[#3e64de] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<div>
<h4 className="font-semibold text-base">Engineering</h4>
<p className="text-xs text-gray-500 mt-1">10,000+ Colleges</p>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#f44337] hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-[#fef1f4] text-[#f44337] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="briefcase"></i>
</div>
<div>
<h4 className="font-semibold text-base">Management</h4>
<p className="text-xs text-gray-500 mt-1">8,500+ Colleges</p>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#24a148] hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-[#f2fdf5] text-[#24a148] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="stethoscope"></i>
</div>
<div>
<h4 className="font-semibold text-base">Medical</h4>
<p className="text-xs text-gray-500 mt-1">2,000+ Colleges</p>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-[#ed9700] hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-orange-50 text-[#ed9700] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<div>
<h4 className="font-semibold text-base">Design</h4>
<p className="text-xs text-gray-500 mt-1">1,500+ Colleges</p>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-purple-500 hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="gavel"></i>
</div>
<div>
<h4 className="font-semibold text-base">Law</h4>
<p className="text-xs text-gray-500 mt-1">1,200+ Colleges</p>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-teal-500 hover:shadow-sm cursor-pointer transition-all group">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="calculator"></i>
</div>
<div>
<h4 className="font-semibold text-base">Commerce</h4>
<p className="text-xs text-gray-500 mt-1">5,000+ Colleges</p>
</div>
</div>
</div>

<div className="flex flex-wrap items-center gap-1 mt-4">
<span className="text-sm font-medium text-gray-500 mr-2">Browse by Alphabet:</span>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">A</button>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">B</button>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">C</button>
<button className="w-8 h-8 rounded text-sm bg-[#3e64de] text-white transition-colors">D</button>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">E</button>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">F</button>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">G</button>
<span className="text-gray-400 mx-1">...</span>
<button className="w-8 h-8 rounded text-sm hover:bg-[#e3e5eb] text-gray-700 transition-colors">Z</button>
</div>
</div>

<div className="bg-[#f2fdf5] border border-[#e3e5eb] rounded-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
<div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Not Sure What to Study? Let Us Guide You.</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-base text-gray-700">
<i className="w-5 h-5 text-[#24a148] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Take our 5-minute career assessment test.
                    </li>
<li className="flex items-start gap-3 text-base text-gray-700">
<i className="w-5 h-5 text-[#24a148] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Get personalized college and course recommendations.
                    </li>
<li className="flex items-start gap-3 text-base text-gray-700">
<i className="w-5 h-5 text-[#24a148] shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
                        Connect with expert counselors for free guidance.
                    </li>
</ul>
<div>
<button className="bg-[#24a148] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-base transition-colors inline-flex items-center gap-2 shadow-sm">
                        Take Career Test <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="hidden md:flex flex-1 bg-[#e3e5eb] bg-opacity-50 items-center justify-center p-8">
<div className="text-gray-400 flex flex-col items-center gap-2">
<i className="w-12 h-12" data-lucide="image"></i>
<span className="text-sm font-medium">Illustration Placeholder</span>
</div>
</div>
</div>

<div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Featured Colleges</h2>
<p className="text-base text-gray-500">Handpicked institutions for your bright future.</p>
</div>
<div className="flex overflow-x-auto pb-2 -mb-2 no-scrollbar gap-2">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full whitespace-nowrap">B.Tech</button>
<button className="px-4 py-2 bg-white border border-[#e3e5eb] text-gray-600 hover:bg-gray-50 text-sm font-medium rounded-full whitespace-nowrap transition-colors">MBA</button>
<button className="px-4 py-2 bg-white border border-[#e3e5eb] text-gray-600 hover:bg-gray-50 text-sm font-medium rounded-full whitespace-nowrap transition-colors">Medical</button>
<button className="px-4 py-2 bg-white border border-[#e3e5eb] text-gray-600 hover:bg-gray-50 text-sm font-medium rounded-full whitespace-nowrap transition-colors">Design</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-[#e3e5eb] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col group">
<div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<i className="w-8 h-8 text-gray-300 z-0 group-hover:scale-110 transition-transform duration-500" data-lucide="image"></i>
<span className="absolute bottom-2 left-3 z-20 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded text-gray-800">Featured</span>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-[#3e64de] transition-colors">IIT Madras</h3>
<p className="text-sm text-gray-500 mb-3 flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Chennai, Tamil Nadu</p>
<div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
<div>
<p className="text-xs text-gray-400 font-medium">Rating</p>
<p className="text-sm font-medium flex items-center gap-1"><i className="w-3.5 h-3.5 text-[#ed9700] fill-current" data-lucide="star"></i> 4.8/5</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹2.1L / yr</p>
</div>
</div>
<div className="pt-3 border-t border-[#e3e5eb] flex gap-2">
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors text-center">Brochure</button>
<button className="flex-1 bg-[#3e64de] text-white hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-colors text-center">Apply Now</button>
</div>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col group">
<div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<i className="w-8 h-8 text-gray-300 z-0 group-hover:scale-110 transition-transform duration-500" data-lucide="image"></i>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-[#3e64de] transition-colors">BITS Pilani</h3>
<p className="text-sm text-gray-500 mb-3 flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Pilani, Rajasthan</p>
<div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
<div>
<p className="text-xs text-gray-400 font-medium">Rating</p>
<p className="text-sm font-medium flex items-center gap-1"><i className="w-3.5 h-3.5 text-[#ed9700] fill-current" data-lucide="star"></i> 4.6/5</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹5.4L / yr</p>
</div>
</div>
<div className="pt-3 border-t border-[#e3e5eb] flex gap-2">
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors text-center">Brochure</button>
<button className="flex-1 bg-[#3e64de] text-white hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-colors text-center">Apply Now</button>
</div>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col group">
<div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<i className="w-8 h-8 text-gray-300 z-0 group-hover:scale-110 transition-transform duration-500" data-lucide="image"></i>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-[#3e64de] transition-colors">VIT Vellore</h3>
<p className="text-sm text-gray-500 mb-3 flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Vellore, Tamil Nadu</p>
<div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
<div>
<p className="text-xs text-gray-400 font-medium">Rating</p>
<p className="text-sm font-medium flex items-center gap-1"><i className="w-3.5 h-3.5 text-[#ed9700] fill-current" data-lucide="star"></i> 4.3/5</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹1.9L / yr</p>
</div>
</div>
<div className="pt-3 border-t border-[#e3e5eb] flex gap-2">
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors text-center">Brochure</button>
<button className="flex-1 bg-[#3e64de] text-white hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-colors text-center">Apply Now</button>
</div>
</div>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col group">
<div className="h-32 bg-gray-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<i className="w-8 h-8 text-gray-300 z-0 group-hover:scale-110 transition-transform duration-500" data-lucide="image"></i>
</div>
<div className="p-5 flex-1 flex flex-col">
<h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-[#3e64de] transition-colors">SRM Institute</h3>
<p className="text-sm text-gray-500 mb-3 flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Chennai, Tamil Nadu</p>
<div className="grid grid-cols-2 gap-3 mb-4 mt-auto">
<div>
<p className="text-xs text-gray-400 font-medium">Rating</p>
<p className="text-sm font-medium flex items-center gap-1"><i className="w-3.5 h-3.5 text-[#ed9700] fill-current" data-lucide="star"></i> 4.1/5</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium">Avg Fees</p>
<p className="text-sm font-medium text-gray-900">₹2.5L / yr</p>
</div>
</div>
<div className="pt-3 border-t border-[#e3e5eb] flex gap-2">
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors text-center">Brochure</button>
<button className="flex-1 bg-[#3e64de] text-white hover:bg-blue-700 py-2 rounded-lg text-sm font-medium transition-colors text-center">Apply Now</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-[#3e64de] font-medium text-base hover:underline inline-flex items-center gap-1">View All Colleges <i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] rounded-2xl p-6 md:p-8 shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 border-b border-[#e3e5eb] pb-4">Top Colleges by City</h2>
<div className="space-y-6">

<div>
<div className="flex items-center justify-between mb-3">
<h4 className="font-medium text-base text-gray-900 flex items-center gap-2"><i className="w-4 h-4 text-[#3e64de]" data-lucide="map-pin"></i> Colleges in New Delhi</h4>
<a className="text-sm text-[#3e64de] hover:underline" href="#">View All</a>
</div>
<div className="flex overflow-x-auto pb-2 -mb-2 gap-4 no-scrollbar">
<div className="min-w-[240px] border border-[#e3e5eb] rounded-lg p-3 hover:border-[#3e64de] transition-colors flex items-center justify-between group cursor-pointer bg-gray-50 hover:bg-white">
<div>
<p className="font-medium text-sm text-gray-900 group-hover:text-[#3e64de]">IIT Delhi</p>
<p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><i className="w-3 h-3 text-[#ed9700] fill-current" data-lucide="star"></i> 4.9</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#e3e5eb] flex items-center justify-center text-gray-400 hover:text-[#3e64de] hover:border-[#3e64de] transition-colors" title="Compare">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="min-w-[240px] border border-[#e3e5eb] rounded-lg p-3 hover:border-[#3e64de] transition-colors flex items-center justify-between group cursor-pointer bg-gray-50 hover:bg-white">
<div>
<p className="font-medium text-sm text-gray-900 group-hover:text-[#3e64de]">DTU Delhi</p>
<p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><i className="w-3 h-3 text-[#ed9700] fill-current" data-lucide="star"></i> 4.5</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#e3e5eb] flex items-center justify-center text-gray-400 hover:text-[#3e64de] hover:border-[#3e64de] transition-colors" title="Compare">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="min-w-[240px] border border-[#e3e5eb] rounded-lg p-3 hover:border-[#3e64de] transition-colors flex items-center justify-between group cursor-pointer bg-gray-50 hover:bg-white">
<div>
<p className="font-medium text-sm text-gray-900 group-hover:text-[#3e64de]">NSUT Delhi</p>
<p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><i className="w-3 h-3 text-[#ed9700] fill-current" data-lucide="star"></i> 4.4</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#e3e5eb] flex items-center justify-center text-gray-400 hover:text-[#3e64de] hover:border-[#3e64de] transition-colors" title="Compare">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h4 className="font-medium text-base text-gray-900 flex items-center gap-2"><i className="w-4 h-4 text-[#f44337]" data-lucide="map-pin"></i> Colleges in Mumbai</h4>
<a className="text-sm text-[#3e64de] hover:underline" href="#">View All</a>
</div>
<div className="flex overflow-x-auto pb-2 -mb-2 gap-4 no-scrollbar">
<div className="min-w-[240px] border border-[#e3e5eb] rounded-lg p-3 hover:border-[#3e64de] transition-colors flex items-center justify-between group cursor-pointer bg-gray-50 hover:bg-white">
<div>
<p className="font-medium text-sm text-gray-900 group-hover:text-[#3e64de]">IIT Bombay</p>
<p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><i className="w-3 h-3 text-[#ed9700] fill-current" data-lucide="star"></i> 4.9</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#e3e5eb] flex items-center justify-center text-gray-400 hover:text-[#3e64de] hover:border-[#3e64de] transition-colors" title="Compare">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
<div className="min-w-[240px] border border-[#e3e5eb] rounded-lg p-3 hover:border-[#3e64de] transition-colors flex items-center justify-between group cursor-pointer bg-gray-50 hover:bg-white">
<div>
<p className="font-medium text-sm text-gray-900 group-hover:text-[#3e64de]">VJTI Mumbai</p>
<p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5"><i className="w-3 h-3 text-[#ed9700] fill-current" data-lucide="star"></i> 4.3</p>
</div>
<button className="w-8 h-8 rounded-full border border-[#e3e5eb] flex items-center justify-center text-gray-400 hover:text-[#3e64de] hover:border-[#3e64de] transition-colors" title="Compare">
<i className="w-4 h-4" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="mb-6 border-b border-[#e3e5eb] pb-4">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Courses &amp; Specializations</h2>
<p className="text-base text-gray-500">Explore wide range of programs.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="font-semibold text-base mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#3e64de]"></div> Engineering</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Computer Science</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Mechanical</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Civil</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Electrical</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Information Tech</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-base mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#24a148]"></div> Medical</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">MBBS</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">BDS</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Nursing</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Pharmacy</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Physiotherapy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-base mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f44337]"></div> Management</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">MBA / PGDM</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">BBA</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Finance</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Human Resources</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Marketing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-base mb-4 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#ed9700]"></div> Science</h4>
<ul className="space-y-2 text-sm">
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">B.Sc</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">M.Sc</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Physics</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Chemistry</a></li>
<li><a className="text-gray-500 hover:text-[#3e64de] transition-colors" href="#">Mathematics</a></li>
</ul>
</div>
</div>
</div>

<div>
<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Top Entrance Exams</h2>
<p className="text-base text-gray-500">Stay updated with important dates and notifications.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#e3e5eb] rounded-xl p-5 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg text-gray-900">JEE Main 2024</h3>
<p className="text-xs text-gray-500 mt-1">Joint Entrance Examination</p>
</div>
<span className="bg-[#f2fdf5] text-[#24a148] text-xs font-medium px-2 py-1 rounded">Applications Open</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i> Exam: 24 Jan - 1 Feb 2024
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="award"></i> Level: National
                        </div>
</div>
<div className="flex gap-3">
<button className="flex-1 border border-[#e3e5eb] text-gray-700 hover:bg-gray-50 py-2 rounded-lg text-sm font-medium transition-colors">Overview</button>
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors">Exam Dates</button>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] rounded-xl p-5 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg text-gray-900">NEET UG 2024</h3>
<p className="text-xs text-gray-500 mt-1">National Eligibility Entrance Test</p>
</div>
<span className="bg-[#eef2ff] text-[#3e64de] text-xs font-medium px-2 py-1 rounded">Upcoming</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i> Exam: 5 May 2024
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="award"></i> Level: National
                        </div>
</div>
<div className="flex gap-3">
<button className="flex-1 border border-[#e3e5eb] text-gray-700 hover:bg-gray-50 py-2 rounded-lg text-sm font-medium transition-colors">Overview</button>
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors">Exam Dates</button>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] rounded-xl p-5 hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="font-semibold text-lg text-gray-900">CAT 2023</h3>
<p className="text-xs text-gray-500 mt-1">Common Admission Test</p>
</div>
<span className="bg-[#fef1f4] text-[#f44337] text-xs font-medium px-2 py-1 rounded">Results Declared</span>
</div>
<div className="space-y-2 mb-5">
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="calendar"></i> Exam: 26 Nov 2023
                        </div>
<div className="flex items-center gap-2 text-sm text-gray-600">
<i className="w-4 h-4 text-gray-400" data-lucide="award"></i> Level: National
                        </div>
</div>
<div className="flex gap-3">
<button className="flex-1 border border-[#e3e5eb] text-gray-700 hover:bg-gray-50 py-2 rounded-lg text-sm font-medium transition-colors">Overview</button>
<button className="flex-1 bg-white border border-[#3e64de] text-[#3e64de] hover:bg-[#eef2ff] py-2 rounded-lg text-sm font-medium transition-colors">Cutoffs</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div>
<div className="flex items-center justify-between mb-4 border-b border-[#e3e5eb] pb-2">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2"><i className="w-5 h-5 text-[#ed9700]" data-lucide="award"></i> Scholarships</h2>
<a className="text-sm text-[#3e64de] hover:underline" href="#">View All</a>
</div>
<div className="space-y-3">
<div className="bg-white border border-[#e3e5eb] rounded-lg p-4 flex items-center justify-between hover:border-[#ed9700] transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-orange-50 flex items-center justify-center text-[#ed9700]">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<div>
<h4 className="font-medium text-base text-gray-900">Merit Cum Means Scholarship</h4>
<p className="text-xs text-gray-500 mt-0.5">Govt. of India • Upto <span className="text-[#24a148] font-medium">₹50,000</span></p>
</div>
</div>
<button className="text-sm font-medium text-[#3e64de] opacity-0 group-hover:opacity-100 transition-opacity">Apply</button>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-lg p-4 flex items-center justify-between hover:border-[#ed9700] transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center text-[#3e64de]">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<div>
<h4 className="font-medium text-base text-gray-900">HDFC Educational Crisis Scholarship</h4>
<p className="text-xs text-gray-500 mt-0.5">HDFC Bank • Upto <span className="text-[#24a148] font-medium">₹25,000</span></p>
</div>
</div>
<button className="text-sm font-medium text-[#3e64de] opacity-0 group-hover:opacity-100 transition-opacity">Apply</button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4 border-b border-[#e3e5eb] pb-2">
<h2 className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2"><i className="w-5 h-5 text-[#24a148]" data-lucide="briefcase"></i> Internships</h2>
<a className="text-sm text-[#3e64de] hover:underline" href="#">View All</a>
</div>
<div className="space-y-3">
<div className="bg-white border border-[#e3e5eb] rounded-lg p-4 flex items-center justify-between hover:border-[#24a148] transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-600">
<i className="w-5 h-5" data-lucide="code"></i>
</div>
<div>
<h4 className="font-medium text-base text-gray-900">Frontend Developer Intern</h4>
<p className="text-xs text-gray-500 mt-0.5">TechCorp Inc. • Remote • <span className="text-[#24a148] font-medium">₹15k/mo</span></p>
</div>
</div>
<button className="text-sm font-medium text-[#3e64de] opacity-0 group-hover:opacity-100 transition-opacity">Apply</button>
</div>
<div className="bg-white border border-[#e3e5eb] rounded-lg p-4 flex items-center justify-between hover:border-[#24a148] transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-gray-100 flex items-center justify-center text-gray-600">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div>
<h4 className="font-medium text-base text-gray-900">Marketing Intern</h4>
<p className="text-xs text-gray-500 mt-0.5">GrowthWorks • Bangalore • <span className="text-[#24a148] font-medium">₹10k/mo</span></p>
</div>
</div>
<button className="text-sm font-medium text-[#3e64de] opacity-0 group-hover:opacity-100 transition-opacity">Apply</button>
</div>
</div>
</div>
</div>

<div className="bg-white border border-[#e3e5eb] rounded-2xl p-8 text-center shadow-sm">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">How It Works</h2>
<p className="text-base text-gray-500 mb-8">Your journey to the perfect career in 3 simple steps.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 relative">
<div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-[#e3e5eb] -translate-y-1/2 z-0"></div>
<div className="flex-1 flex flex-col items-center relative z-10 bg-white px-4">
<div className="w-16 h-16 rounded-full bg-[#eef2ff] border-4 border-white text-[#3e64de] flex items-center justify-center mb-4 shadow-sm">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h4 className="font-semibold text-lg text-gray-900 mb-1">1. Search</h4>
<p className="text-sm text-gray-500 max-w-[200px]">Find colleges, courses and exams that match your profile.</p>
</div>
<div className="flex-1 flex flex-col items-center relative z-10 bg-white px-4">
<div className="w-16 h-16 rounded-full bg-orange-50 border-4 border-white text-[#ed9700] flex items-center justify-center mb-4 shadow-sm">
<i className="w-6 h-6" data-lucide="copy-plus"></i>
</div>
<h4 className="font-semibold text-lg text-gray-900 mb-1">2. Compare</h4>
<p className="text-sm text-gray-500 max-w-[200px]">Compare options side-by-side based on fees, placements.</p>
</div>
<div className="flex-1 flex flex-col items-center relative z-10 bg-white px-4">
<div className="w-16 h-16 rounded-full bg-[#f2fdf5] border-4 border-white text-[#24a148] flex items-center justify-center mb-4 shadow-sm">
<i className="w-6 h-6" data-lucide="send"></i>
</div>
<h4 className="font-semibold text-lg text-gray-900 mb-1">3. Apply</h4>
<p className="text-sm text-gray-500 max-w-[200px]">Submit your application directly through our portal easily.</p>
</div>
</div>
</div>

<div>
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">Student Stories</h2>
<p className="text-base text-gray-500">Hear from those who found their path with us.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#fafafa] border border-[#e3e5eb] rounded-xl p-6 relative">
<i className="w-8 h-8 text-[#e3e5eb] absolute top-4 right-4" data-lucide="quote"></i>
<p className="text-sm text-gray-600 italic mb-6 relative z-10">"The compare tool was a lifesaver. It helped me decide between two NITs by clearly laying out the placement stats and fees. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">AS</div>
<div>
<p className="font-medium text-sm text-gray-900">Amit Sharma</p>
<p className="text-xs text-gray-500">B.Tech Student</p>
</div>
</div>
</div>
<div className="bg-[#fafafa] border border-[#e3e5eb] rounded-xl p-6 relative">
<i className="w-8 h-8 text-[#e3e5eb] absolute top-4 right-4" data-lucide="quote"></i>
<p className="text-sm text-gray-600 italic mb-6 relative z-10">"I wasn't sure about MBA specializations. The career path explorer and detailed course structures provided here cleared all my doubts."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">PK</div>
<div>
<p className="font-medium text-sm text-gray-900">Priya Kumar</p>
<p className="text-xs text-gray-500">MBA Aspirant</p>
</div>
</div>
</div>
<div className="bg-[#fafafa] border border-[#e3e5eb] rounded-xl p-6 relative">
<i className="w-8 h-8 text-[#e3e5eb] absolute top-4 right-4" data-lucide="quote"></i>
<p className="text-sm text-gray-600 italic mb-6 relative z-10">"Getting exam updates on WhatsApp and the portal helped me never miss a deadline. The scholarship section is also surprisingly well updated."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-sm">RJ</div>
<div>
<p className="font-medium text-sm text-gray-900">Rahul Jain</p>
<p className="text-xs text-gray-500">Medical Student</p>
</div>
</div>
</div>
</div>
</div>

<div className="py-8 flex flex-wrap justify-around items-center gap-8 border-t border-b border-[#e3e5eb]">
<div className="text-center">
<p className="text-4xl font-semibold text-[#3e64de] mb-1">20,000+</p>
<p className="text-sm text-gray-500 font-medium">Colleges Listed</p>
</div>
<div className="text-center">
<p className="text-4xl font-semibold text-[#3e64de] mb-1">5M+</p>
<p className="text-sm text-gray-500 font-medium">Students Helped</p>
</div>
<div className="text-center">
<p className="text-4xl font-semibold text-[#3e64de] mb-1">500+</p>
<p className="text-sm text-gray-500 font-medium">Exams Covered</p>
</div>
</div>
</div>

<section className="bg-gray-900 text-white py-16 px-4 text-center">
<div className="max-w-2xl mx-auto">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-white" data-lucide="rocket"></i>
</div>
<h2 className="text-3xl font-semibold tracking-tight mb-4">Still Confused? Let AI Decide Your Career Path</h2>
<p className="text-lg text-gray-400 mb-8">Join thousands of students who found their dream college through our AI counselor.</p>
<button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-base transition-colors shadow-lg">
                Register Now for Free
            </button>
</div>
</section>

<footer className="bg-white border-t border-[#e3e5eb] pt-12 pb-8 px-4 md:px-8">
<div className="max-w-7xl mx-auto">

<div className="mb-10 pb-6 border-b border-[#e3e5eb] flex flex-wrap items-center gap-2 text-sm text-gray-500">
<span className="font-medium text-gray-900">Colleges By Alphabet:</span>
<a className="hover:text-[#3e64de]" href="#">A</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">B</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">C</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">D</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">E</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">F</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">G</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">H</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">I</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">J</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">K</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">L</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">M</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">N</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">O</a> <span className="text-gray-300">|</span>
<a className="hover:text-[#3e64de]" href="#">P</a>
<span className="text-gray-400">...</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Top Cities</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">New Delhi</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Mumbai</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Bangalore</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Chennai</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Hyderabad</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Pune</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Top States</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">Maharashtra</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Delhi NCR</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Karnataka</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Tamil Nadu</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Uttar Pradesh</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Telangana</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Top Exams</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">JEE Main</a></li>
<li><a className="hover:text-[#3e64de]" href="#">NEET</a></li>
<li><a className="hover:text-[#3e64de]" href="#">CAT</a></li>
<li><a className="hover:text-[#3e64de]" href="#">GATE</a></li>
<li><a className="hover:text-[#3e64de]" href="#">CLAT</a></li>
<li><a className="hover:text-[#3e64de]" href="#">CUET</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Top Courses</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">B.Tech</a></li>
<li><a className="hover:text-[#3e64de]" href="#">MBA</a></li>
<li><a className="hover:text-[#3e64de]" href="#">MBBS</a></li>
<li><a className="hover:text-[#3e64de]" href="#">BCA</a></li>
<li><a className="hover:text-[#3e64de]" href="#">B.A</a></li>
<li><a className="hover:text-[#3e64de]" href="#">B.Sc</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Quick Links</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">About Us</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Careers</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Contact Us</a></li>
<li><a className="hover:text-[#3e64de]" href="#">News &amp; Articles</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Q&amp;A Forum</a></li>
</ul>
</div>
<div>
<h5 className="font-semibold text-sm text-gray-900 mb-4">Legal</h5>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-[#3e64de]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Cookie Policy</a></li>
<li><a className="hover:text-[#3e64de]" href="#">Grievance Redressal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#e3e5eb] gap-4">
<div className="flex items-center gap-2 font-semibold text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="book-open"></i>
</div>
                    EduPortal
                </div>
<p className="text-sm text-gray-500">© 2024 EduPortal Pvt Ltd. All rights reserved.</p>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-gray-900" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
