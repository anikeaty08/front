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
      
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1200px] w-full">

<div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/60 overflow-hidden flex flex-col w-full max-w-[380px] mx-auto min-h-[750px] relative">
<div className="p-8 pb-6 flex flex-col flex-grow">

<div className="relative flex items-center justify-center mb-6">
<button className="absolute left-0 text-blue-900 hover:text-blue-700 transition-colors">
<i className="w-7 h-7" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="text-center">
<h1 className="font-semibold text-xl tracking-tight text-[#0f2a5b]">Select Your City &amp; Services</h1>
<p className="text-base text-slate-400 mt-1">Step 1 of 3</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-8"></div>

<div className="space-y-6 flex-grow flex flex-col">

<div className="space-y-2">
<label className="block text-base font-medium text-[#0f2a5b]">Country</label>
<div className="relative flex items-center w-full px-4 py-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
<span className="mr-3 text-xl leading-none">🇹🇿</span>
<span className="text-base text-slate-700 flex-grow">Tanzania</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-[#0f2a5b]">City</label>
<div className="relative flex items-center w-full px-4 py-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
<span className="mr-3 text-xl leading-none">🇹🇿</span>
<span className="text-base text-slate-700 flex-grow">Dar es Salaam</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="space-y-4 py-2">
<div className="flex items-center text-base font-medium text-[#0f2a5b]">
                            Work Radius: 
                            <span className="mx-2 px-2 py-0.5 bg-slate-500 text-white rounded text-sm font-semibold">10</span>
<span className="text-sm font-normal text-slate-500">km Around Me</span>
</div>
<div className="relative w-full h-1.5 bg-slate-200 rounded-full flex items-center">
<div className="absolute left-0 h-full bg-[#0f2a5b] rounded-full" style={{width: '75%'}}></div>
<div className="absolute w-4 h-4 bg-white border-2 border-[#0f2a5b] rounded-full shadow cursor-pointer transform -translate-x-1/2" style={{left: '75%'}}></div>
</div>
</div>
<div className="w-full h-px bg-slate-100 my-2"></div>

<div className="space-y-4">
<label className="block text-base font-medium text-[#0f2a5b]">Choose Your Services <span className="text-slate-400 font-normal text-sm">(Select up to 2)</span></label>
<div className="grid grid-cols-2 gap-3">

<button className="flex items-center gap-2 px-3 py-3 bg-[#1e61b0] text-white rounded-lg border border-transparent shadow-sm">
<i className="w-5 h-5 fill-white/20" data-lucide="droplet" strokeWidth="1.5"></i>
<span className="text-base font-medium">Plumbing</span>
</button>

<button className="flex items-center gap-2 px-3 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-[#476595]" data-lucide="wrench" strokeWidth="1.5"></i>
<span className="text-base font-medium">Electrician</span>
</button>
<button className="flex items-center gap-2 px-3 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-[#10b981]" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-base font-medium">Cleaning</span>
</button>
<button className="flex items-center gap-2 px-3 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-[#476595]" data-lucide="hammer" strokeWidth="1.5"></i>
<span className="text-base font-medium">Carpentry</span>
</button>
<button className="flex items-center gap-2 px-3 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-[#f59e0b]" data-lucide="truck" strokeWidth="1.5"></i>
<span className="text-base font-medium">Delivery</span>
</button>
<button className="flex items-center gap-2 px-3 py-3 bg-slate-50 text-slate-700 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5 text-[#0ea5e9]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-medium">Tutoring</span>
</button>
</div>
</div>
</div>

<div className="mt-8 pt-4">
<button className="w-full bg-gradient-to-r from-[#fb923c] to-[#f97316] text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-orange-500/20 hover:opacity-90 transition-opacity">
                        Next
                    </button>
</div>
</div>
</div>

<div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/60 overflow-hidden flex flex-col w-full max-w-[380px] mx-auto min-h-[750px] relative">
<div className="p-8 pb-6 flex flex-col flex-grow">

<div className="relative flex items-center justify-center mb-6">
<button className="absolute left-0 text-blue-900 hover:text-blue-700 transition-colors">
<i className="w-7 h-7" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="text-center">
<h1 className="font-semibold text-xl tracking-tight text-[#0f2a5b]">Professional Details</h1>
<p className="text-base text-slate-400 mt-1">Step 2 of 3</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-8"></div>

<div className="space-y-6 flex-grow flex flex-col">

<div className="space-y-2">
<label className="block text-base font-medium text-[#0f2a5b]">Years of Experience</label>
<div className="relative flex items-center w-full px-4 py-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
<span className="text-base text-slate-700 flex-grow">3 - 5 Years</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-[#0f2a5b]">About Me</label>
<textarea className="w-full border border-slate-200 rounded-xl p-4 text-base text-slate-700 resize-none h-28 focus:outline-none focus:ring-1 focus:ring-[#1e61b0] focus:border-[#1e61b0] placeholder:text-slate-400" placeholder="Tell us about your skills and experience..."></textarea>
</div>
<div className="w-full h-px bg-slate-100 my-2"></div>

<div className="space-y-3">
<label className="block text-base font-medium text-[#0f2a5b]">Upload Certifications</label>
<div className="border border-slate-200 rounded-xl p-1.5 flex items-center">
<button className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-base hover:bg-slate-100 transition-colors">
<i className="w-4 h-4 text-[#1e61b0]" data-lucide="lock" strokeWidth="1.5"></i>
                                Upload Document
                            </button>
</div>
</div>

<div className="space-y-4 pt-2">
<label className="block text-base font-medium text-[#0f2a5b]">Profile Photo</label>
<div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>

<button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 bg-[#1e61b0] text-white rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition-colors whitespace-nowrap border border-white/10">
<i className="w-4 h-4" data-lucide="camera" strokeWidth="1.5"></i>
                                Upload Photo
                            </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200/60 overflow-hidden flex flex-col w-full max-w-[380px] mx-auto min-h-[750px] relative">
<div className="p-8 pb-6 flex flex-col flex-grow">

<div className="relative flex items-center justify-center mb-6">
<button className="absolute left-0 text-blue-900 hover:text-blue-700 transition-colors">
<i className="w-7 h-7" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="text-center">
<h1 className="font-semibold text-xl tracking-tight text-[#0f2a5b]">Set Your Availability</h1>
<p className="text-base text-slate-400 mt-1">Step 3 of 3</p>
</div>
</div>
<div className="w-full h-px bg-slate-100 mb-8"></div>

<div className="space-y-8 flex-grow flex flex-col">

<div className="space-y-4">
<label className="block text-base font-medium text-[#0f2a5b]">My Work Days</label>
<div className="flex flex-wrap gap-x-4 gap-y-3">

<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Mon</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Tue</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Wed</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Thu</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Fri</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 bg-[#1e61b0] rounded flex items-center justify-center shadow-sm">
<i className="w-3.5 h-3.5 text-white" data-lucide="check" strokeWidth="2.5"></i>
</div>
<span className="text-base text-slate-700">Sat</span>
</label>

<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 border-[1.5px] border-slate-300 bg-white rounded flex items-center justify-center group-hover:border-[#1e61b0] transition-colors">
</div>
<span className="text-base text-slate-600">Sun</span>
</label>
</div>
</div>

<div className="space-y-4 pt-2">
<label className="block text-base font-medium text-[#0f2a5b]">Daily Working Hours</label>
<div className="flex items-center gap-3">
<div className="relative flex items-center flex-1 px-4 py-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
<span className="text-base text-slate-700 flex-grow">8:00 AM</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<svg className="text-[#0f2a5b]" fill="none" height="12" viewbox="0 0 10 12" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 5.13397C10.1667 5.51887 10.1667 6.48113 9.5 6.86603L2 11.1962C1.33333 11.5811 0.5 11.1001 0.5 10.3301L0.5 1.66987C0.5 0.89994 1.33333 0.418815 2 0.803715L9.5 5.13397Z" fill="currentColor"></path>
</svg>
<div className="relative flex items-center flex-1 px-4 py-3 border border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
<span className="text-base text-slate-700 flex-grow">6:00 PM</span>
<i className="w-5 h-5 text-slate-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-100 my-2"></div>

<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<label className="text-base font-semibold text-[#0f2a5b]">Available Now</label>
<i className="w-6 h-6 text-[#22c55e]" data-lucide="check-circle-2" strokeWidth="2"></i>
</div>

<div className="w-12 h-6 bg-[#22c55e] rounded-full relative cursor-pointer shadow-inner">
<div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm border border-black/5"></div>
</div>
</div>
<p className="text-sm text-slate-500 italic">Get instant job alerts when you're available.</p>
</div>

<div className="flex-grow flex flex-col justify-end space-y-4">
<div className="w-full h-px bg-slate-50"></div>
<div className="w-full h-px bg-slate-50"></div>
</div>
</div>

<div className="mt-8 pt-4">
<button className="w-full bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-red-500/20 hover:opacity-90 transition-opacity">
                        Submit
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
