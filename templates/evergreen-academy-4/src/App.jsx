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
      

<nav className="fixed top-0 left-0 right-0 glass border-b border-white/20 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
<span className="text-white font-bold text-sm tracking-tighter">EA</span>
</div>
<div className="">
<span className="font-semibold text-gray-900 tracking-tight block leading-none">Evergreen Academy</span>
<span className="text-xs text-emerald-600 font-medium">Be HAPPY</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-emerald-600 transition-colors" href="#">About</a>
<a className="text-sm text-gray-600 hover:text-emerald-600 transition-colors" href="#">Programs</a>
<a className="text-sm text-gray-600 hover:text-emerald-600 transition-colors" href="#">HAPPY Values</a>
<a className="text-sm text-gray-600 hover:text-emerald-600 transition-colors" href="#">Campus Life</a>
<a className="text-sm text-gray-600 hover:text-emerald-600 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors" href="#">Portal</a>
<a className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105" href="#">Apply Now</a>
<button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-cyan-50 to-violet-50"></div>
<div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float"></div>
<div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse-glow"></div>

<div className="absolute top-32 right-20 hidden lg:block animate-float">
<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-xl shadow-orange-400/30 flex items-center justify-center rotate-12">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:sun" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
</div>
<div className="absolute bottom-40 left-20 hidden lg:block animate-float-delayed">
<div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full shadow-xl shadow-pink-400/30 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="24" data-icon="lucide:heart" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-6 shadow-lg shadow-emerald-500/10 border border-emerald-100">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        Enrolling for Fall 2025
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
                        Where 
                        <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">HAPPY</span>
                        learners become future leaders
                    </h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Building <span className="font-semibold text-violet-600">Honorable</span>, <span className="font-semibold text-blue-600">Adaptive</span>, <span className="font-semibold text-emerald-600">Progressive</span>, <span className="font-semibold text-amber-600">Positive</span>, and <span className="font-semibold text-pink-600">Youthful</span> minds for tomorrow's world.
                    </p>

<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 bg-violet-100 text-violet-700 text-xs font-semibold rounded-full">Honorable</span>
<span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Adaptive</span>
<span className="px-3 py-1.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">Progressive</span>
<span className="px-3 py-1.5 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Positive</span>
<span className="px-3 py-1.5 bg-pink-100 text-pink-700 text-xs font-semibold rounded-full">Youthful</span>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-full shadow-xl shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50 hover:scale-105" href="#">
                            Schedule a Visit
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-full border border-gray-200 shadow-lg transition-all hover:scale-105" href="#">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--lucide" data-height="20" data-icon="lucide:play-circle" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                            Watch Our Story
                        </a>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Happy students learning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&amp;h=800&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:award" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<div>
<p className="text-3xl font-bold text-gray-900 tracking-tight">98%</p>
<p className="text-sm text-gray-500">College Acceptance</p>
</div>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl shadow-xl p-4 rotate-12 hover:rotate-0 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="32" data-icon="lucide:smile" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-emerald-500 to-pink-500"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:sparkles" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
                    Our Core Values
                </div>
<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                    The <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">HAPPY</span> Difference
                </h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg">Our educational philosophy is built on five core values that shape every student's journey.</p>
</div>
<div className="grid md:grid-cols-5 gap-6">

<div className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-violet-500/10 border border-violet-100 hover:border-violet-300 transition-all hover:-translate-y-2 hover:shadow-violet-500/20">
<div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:shield-check" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-4xl font-bold text-violet-500 mb-1">H</h3>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Honorable</h4>
<p className="text-sm text-gray-600">Building integrity, ethics, and strong moral character.</p>
</div>

<div className="group shadow-blue-500/10 hover:border-blue-300 transition-all hover:-translate-y-2 hover:shadow-blue-500/20 bg-white border-blue-100 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-xl">
<div className="flex shadow-blue-500/30 group-hover:scale-110 transition-transform bg-gradient-to-br from-blue-400 to-cyan-500 w-14 h-14 rounded-2xl mb-4 shadow-lg items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[28px] h-[28px]" data-height="28" data-icon="lucide:refresh-cw" data-icon-replaced="true" data-width="28" height="28" role="img" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path className="" d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path className="" d="M8 16H3v5"></path></g></svg>
</div>
<h3 className="text-4xl font-bold text-blue-500 mb-1">A</h3>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Adaptive</h4>
<p className="text-sm text-gray-600">Embracing change and learning flexibility.</p>
</div>

<div className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-emerald-500/10 border border-emerald-100 hover:border-emerald-300 transition-all hover:-translate-y-2 hover:shadow-emerald-500/20">
<div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:trending-up" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-4xl font-bold text-emerald-500 mb-1">P</h3>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Progressive</h4>
<p className="text-sm text-gray-600">Forward-thinking education and innovation.</p>
</div>

<div className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-amber-500/10 border border-amber-100 hover:border-amber-300 transition-all hover:-translate-y-2 hover:shadow-amber-500/20">
<div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:sun" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="text-4xl font-bold text-amber-500 mb-1">P</h3>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Positive</h4>
<p className="text-sm text-gray-600">Nurturing optimism and growth mindset.</p>
</div>

<div className="group relative bg-white rounded-3xl p-6 shadow-xl shadow-pink-500/10 border border-pink-100 hover:border-pink-300 transition-all hover:-translate-y-2 hover:shadow-pink-500/20">
<div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="28" data-icon="lucide:sparkles" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="text-4xl font-bold text-pink-500 mb-1">Y</h3>
<h4 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">Youthful</h4>
<p className="text-sm text-gray-600">Celebrating curiosity and creative energy.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 relative overflow-hidden">
<div className="absolute inset-0 opacity-10">
<div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">1,200+</p>
<p className="text-sm text-white/80 mt-2 font-medium">Happy Students</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">15:1</p>
<p className="text-sm text-white/80 mt-2 font-medium">Student-Teacher Ratio</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">50+</p>
<p className="text-sm text-white/80 mt-2 font-medium">Clubs &amp; Activities</p>
</div>
<div className="text-center">
<p className="text-4xl sm:text-5xl font-bold text-white tracking-tight">25</p>
<p className="text-sm text-white/80 mt-2 font-medium">Years of Excellence</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-white text-emerald-700 text-xs font-semibold px-4 py-2 rounded-full mb-4 shadow-md">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:book-open" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Academic Excellence
                </div>
<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Our Programs</h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive education pathways designed to inspire curiosity and foster intellectual growth.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl border border-gray-100 hover:border-emerald-200 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all overflow-hidden hover:-translate-y-2">
<div className="aspect-video overflow-hidden relative">
<img alt="Elementary students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white font-semibold">Explore Program →</span>
</div>
</div>
<div className="p-6">
<div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="12" data-icon="lucide:smile" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
                            Grades K-5
                        </div>
<h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">Elementary School</h3>
<p className="text-sm text-gray-600 mb-4">Building strong foundations through play-based learning, literacy, and STEM exploration.</p>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group-hover:gap-2" href="#">
                            Learn more
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 hover:border-blue-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all overflow-hidden hover:-translate-y-2">
<div className="aspect-video overflow-hidden relative">
<img alt="Middle school students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white font-semibold">Explore Program →</span>
</div>
</div>
<div className="p-6">
<div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="12" data-icon="lucide:brain" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></g></svg>
                            Grades 6-8
                        </div>
<h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">Middle School</h3>
<p className="text-sm text-gray-600 mb-4">Developing critical thinking skills and personal responsibility during formative years.</p>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group-hover:gap-2" href="#">
                            Learn more
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="group bg-white rounded-3xl border border-gray-100 hover:border-violet-200 shadow-lg hover:shadow-2xl hover:shadow-violet-500/10 transition-all overflow-hidden hover:-translate-y-2">
<div className="aspect-video overflow-hidden relative">
<img alt="High school students" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-violet-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
<span className="text-white font-semibold">Explore Program →</span>
</div>
</div>
<div className="p-6">
<div className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 bg-violet-50 px-3 py-1.5 rounded-full mb-3">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="12" data-icon="lucide:rocket" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
                            Grades 9-12
                        </div>
<h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2">High School</h3>
<p className="text-sm text-gray-600 mb-4">College preparatory curriculum with AP courses, honors programs, and career pathways.</p>
<a className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 hover:text-violet-700 transition-colors group-hover:gap-2" href="#">
                            Learn more
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 text-pink-700 text-xs font-semibold px-4 py-2 rounded-full mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:camera" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
                    Life at Evergreen
                </div>
<h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">Campus Life</h2>
<p className="text-gray-600 max-w-2xl mx-auto text-lg">Where every day is filled with discovery, friendship, and growth.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="lg:col-span-2 lg:row-span-2 relative group rounded-3xl overflow-hidden shadow-xl">
<img alt="Campus" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-600/90 via-emerald-600/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs text-white font-medium mb-2">Featured</span>
<h3 className="text-2xl font-bold text-white tracking-tight mb-1">Modern Campus</h3>
<p className="text-sm text-white/90">State-of-the-art facilities designed for 21st-century learning</p>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden shadow-xl">
<img alt="Classroom" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-sm font-semibold text-white">Smart Classrooms</h3>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden shadow-xl">
<img alt="Sports" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-amber-600/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-sm font-semibold text-white">Athletics Center</h3>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden shadow-xl">
<img alt="Music" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514820720301-4c4790309f46?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-pink-600/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-sm font-semibold text-white">Performing Arts</h3>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden shadow-xl">
<img alt="Science" className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-violet-600/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-sm font-semibold text-white">STEM Labs</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-float"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float-delayed"></div>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur rounded-2xl mb-8">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-height="32" data-icon="lucide:quote" data-width="32" height="32" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<blockquote className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-relaxed mb-8">
                "Evergreen Academy didn't just prepare my daughter for college — it prepared her for life. The HAPPY values have shaped her into a confident, compassionate leader."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<img alt="Parent" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-lg" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="text-left">
<p className="font-semibold text-white">Sarah Mitchell</p>
<p className="text-sm text-white/80">Parent, Class of 2024</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
<div className="max-w-7xl mx-auto">
<div className="bg-gray-900 rounded-[2.5rem] px-8 py-20 sm:px-16 text-center relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl animate-pulse-glow"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1.5s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float"></div>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:heart" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Join the HAPPY Family
                    </div>
<h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">Begin your child's <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">HAPPY</span> journey today</h2>
<p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">Schedule a campus tour and discover why families choose Evergreen Academy for their children's education.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-gray-900 font-semibold px-8 py-4 rounded-full shadow-xl shadow-emerald-500/30 transition-all hover:scale-105" href="#">
                            Schedule a Tour
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:calendar" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105" href="#">
                            Request Information
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:mail" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
<span className="text-white font-bold text-sm tracking-tighter">EA</span>
</div>
<div>
<span className="font-semibold text-gray-900 tracking-tight block leading-none">Evergreen Academy</span>
<span className="text-xs text-emerald-600 font-medium">Be HAPPY</span>
</div>
</div>
<p className="text-sm text-gray-500 max-w-xs mb-6">Nurturing Honorable, Adaptive, Progressive, Positive, and Youthful minds since 1999.</p>

<div className="flex flex-wrap gap-1 mb-6">
<span className="px-2 py-1 bg-violet-100 text-violet-600 text-xs font-medium rounded-full">H</span>
<span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">A</span>
<span className="px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-medium rounded-full">P</span>
<span className="px-2 py-1 bg-amber-100 text-amber-600 text-xs font-medium rounded-full">P</span>
<span className="px-2 py-1 bg-pink-100 text-pink-600 text-xs font-medium rounded-full">Y</span>
</div>
<div className="flex gap-3">
<a className="w-10 h-10 bg-gray-100 hover:bg-emerald-100 text-gray-500 hover:text-emerald-600 rounded-xl flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:facebook" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-100 hover:bg-pink-100 text-gray-500 hover:text-pink-600 rounded-xl flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:instagram" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 bg-gray-100 hover:bg-blue-100 text-gray-500 hover:text-blue-600 rounded-xl flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:twitter" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-10 h-10 bg-gray-100 hover:bg-red-100 text-gray-500 hover:text-red-600 rounded-xl flex items-center justify-center transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:youtube" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Academics</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">Elementary</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">Middle School</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">High School</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">AP Courses</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Admissions</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">How to Apply</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">Tuition &amp; Aid</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">Visit Campus</a></li>
<li><a className="text-sm text-gray-500 hover:text-emerald-600 transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-gray-500">
<svg aria-hidden="true" className="iconify mt-0.5 text-emerald-500 iconify--lucide" data-height="16" data-icon="lucide:map-pin" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                            123 Education LaneSpringfield, ST 12345
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-height="16" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-2 text-sm text-gray-500">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-height="16" data-icon="lucide:mail" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                            info@evergreen.edu
                        </li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">© 2025 Evergreen Academy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-gray-400 hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-400 hover:text-emerald-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
