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
      

<nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#4F7DF3] rounded-lg flex items-center justify-center text-white font-semibold text-sm tracking-tighter">
                    WK
                </div>
<span className="font-medium text-base tracking-tight">WorkSpace</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Sign In</a>
<a className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm" href="#">Post a Job</a>
</div>
</div>
</nav>

<header className="w-full py-16 sm:py-24 px-4 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#4F7DF3]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4">Find Your Dream Job</h1>
<p className="text-base sm:text-lg text-gray-500 mb-10 max-w-2xl mx-auto">Discover thousands of remote and local opportunities in design, engineering, marketing, and more.</p>

<div className="bg-white p-2 rounded-2xl sm:rounded-full shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col sm:flex-row gap-2 relative z-10">

<div className="flex-1 flex items-center px-4 py-3 sm:py-2 border-b sm:border-b-0 sm:border-r border-gray-100">
<iconify-icon className="text-gray-400 text-xl shrink-0" icon="solar:magnifier-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 ml-3 truncate" placeholder="Job title, company, or keywords" type="text"/>
</div>

<div className="flex-1 flex items-center px-4 py-3 sm:py-2">
<iconify-icon className="text-gray-400 text-xl shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-none text-sm text-gray-900 placeholder-gray-400 ml-3 truncate" placeholder="City, state, or remote" type="text"/>
</div>

<button className="bg-[#4F7DF3] hover:bg-[#3D69DB] text-white text-sm font-medium rounded-xl sm:rounded-full px-8 py-3.5 sm:py-3 transition duration-200 w-full sm:w-auto shrink-0 shadow-sm">
                    Search Jobs
                </button>
</div>
</div>
</header>

<main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 pb-24">

<div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-10">
<button className="bg-[#4F7DF3] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm transition duration-200">All Jobs</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.01)]">Full Time</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.01)]">Part Time</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.01)]">Freelance</button>
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition duration-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.01)]">Internship</button>
</div>

<div className="flex flex-col gap-4">

<a className="group block bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300" href="#">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">

<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-xl font-medium text-gray-400 tracking-tighter">
                        AC
                    </div>

<div className="flex-1 flex flex-col gap-1.5 min-w-0 w-full">
<div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row w-full">
<h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">Senior Product Designer</h3>
<span className="inline-flex items-center rounded-full bg-[#EEF2FF] px-2.5 py-1 text-xs font-medium text-[#4F7DF3] whitespace-nowrap">Full Time</span>
</div>
<p className="text-sm text-gray-500">Acme Corp</p>

<div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>San Francisco, CA</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-md">Remote</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>2 hours ago</span>
</div>
</div>
</div>

<div className="mt-4 sm:mt-0 w-full sm:w-auto shrink-0 flex justify-end">
<button className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white group-hover:bg-gray-50 transition duration-200">View Job</button>
</div>
</div>
</a>

<a className="group block bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300" href="#">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-xl font-medium text-gray-400 tracking-tighter">
                        NV
                    </div>
<div className="flex-1 flex flex-col gap-1.5 min-w-0 w-full">
<div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row w-full">
<h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">Frontend Engineer (React)</h3>
<span className="inline-flex items-center rounded-full bg-[#FAF5FF] px-2.5 py-1 text-xs font-medium text-[#9333EA] whitespace-nowrap">Freelance</span>
</div>
<p className="text-sm text-gray-500">Nova Studios</p>
<div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>New York, NY</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:building-linear" strokeWidth="1.5"></iconify-icon>
<span>On-site</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>1 day ago</span>
</div>
</div>
</div>
<div className="mt-4 sm:mt-0 w-full sm:w-auto shrink-0 flex justify-end">
<button className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white group-hover:bg-gray-50 transition duration-200">View Job</button>
</div>
</div>
</a>

<a className="group block bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300" href="#">
<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
<div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-xl font-medium text-gray-400 tracking-tighter">
                        OX
                    </div>
<div className="flex-1 flex flex-col gap-1.5 min-w-0 w-full">
<div className="flex items-start sm:items-center justify-between gap-3 flex-col sm:flex-row w-full">
<h3 className="text-base sm:text-lg font-medium text-gray-900 truncate">Marketing Intern</h3>
<span className="inline-flex items-center rounded-full bg-[#F0FDF4] px-2.5 py-1 text-xs font-medium text-[#166534] whitespace-nowrap">Internship</span>
</div>
<p className="text-sm text-gray-500">Onyx Digital</p>
<div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-gray-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>London, UK</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded-md">Hybrid</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-base" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>3 days ago</span>
</div>
</div>
</div>
<div className="mt-4 sm:mt-0 w-full sm:w-auto shrink-0 flex justify-end">
<button className="w-full sm:w-auto px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 bg-white group-hover:bg-gray-50 transition duration-200">View Job</button>
</div>
</div>
</a>

<div className="mt-8 flex justify-center">
<button className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-3 rounded-xl text-sm font-medium transition duration-200 shadow-sm flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
                    Load More Jobs
                </button>
</div>
</div>
</main>

<footer className="w-full bg-white border-t border-gray-100 py-10 mt-auto">
<div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-100 rounded-md flex items-center justify-center text-gray-400 font-semibold text-xs tracking-tighter">
                    WK
                </div>
<span>© 2024 WorkSpace. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
