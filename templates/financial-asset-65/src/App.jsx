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
      

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '6s', animationDelay: '0s'}}>

<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">

<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>

<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>

<div className="flex justify-between items-end mb-6">
<div className="">
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>

<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<defs>
<lineargradient id="gradient-1" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ef4444" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,50 C20,50 40,40 60,45 C80,50 100,25 120,30 C140,35 160,30 180,35 C200,40 220,55 240,45 C260,35 280,40 300,30" fill="url(#gradient-1)"></path>
<path d="M0,50 C20,50 40,40 60,45 C80,50 100,25 120,30 C140,35 160,30 180,35 C200,40 220,55 240,45 C260,35 280,40 300,30" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '7s', animationDelay: '1.5s'}}>
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>
<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<defs>
<lineargradient id="gradient-2" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ef4444" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,45 C30,48 50,20 80,25 C110,30 130,40 160,35 C190,30 210,45 240,40 C270,35 290,20 300,25" fill="url(#gradient-2)"></path>
<path d="M0,45 C30,48 50,20 80,25 C110,30 130,40 160,35 C190,30 210,45 240,40 C270,35 290,20 300,25" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '6.5s', animationDelay: '0.8s'}}>
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>
<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<path d="M0,48 C25,48 50,25 75,30 C100,35 125,40 150,32 C175,24 200,45 225,40 C250,35 275,30 300,28" fill="url(#gradient-1)"></path>
<path d="M0,48 C25,48 50,25 75,30 C100,35 125,40 150,32 C175,24 200,45 225,40 C250,35 275,30 300,28" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '8s', animationDelay: '2.2s'}}>
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>
<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<path d="M0,55 C40,55 60,35 90,40 C120,45 140,20 170,25 C200,30 220,50 250,45 C280,40 290,30 300,35" fill="url(#gradient-2)"></path>
<path d="M0,55 C40,55 60,35 90,40 C120,45 140,20 170,25 C200,30 220,50 250,45 C280,40 290,30 300,35" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '7.2s', animationDelay: '0.5s'}}>
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>
<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<path d="M0,45 C20,45 40,30 60,35 C80,40 100,50 120,45 C140,40 160,25 180,30 C200,35 220,40 240,35 C260,30 280,35 300,30" fill="url(#gradient-1)"></path>
<path d="M0,45 C20,45 40,30 60,35 C80,40 100,50 120,45 C140,40 160,25 180,30 C200,35 220,40 240,35 C260,30 280,35 300,30" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-100 animate-float flex flex-col justify-between h-full" style={{animationDuration: '5.8s', animationDelay: '2s'}}>
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="bg-gray-100 rounded-full p-3 flex items-center justify-center text-gray-900">
<svg className="lucide lucide-apple w-6 h-6 fill-current" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<span className="text-green-600 font-medium text-sm tracking-wide">AAPL</span>
</div>
<div className="text-green-700">
<svg className="lucide lucide-file-down w-5 h-5" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg>
</div>
</div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Apple Electronics and Funds
            </h3>
<div className="flex justify-between items-end mb-6">
<div>
<p className="text-gray-400 text-base mb-1">Price:</p>
<p className="text-gray-900 text-xl font-medium tracking-tight">AED 203.65</p>
</div>
<div className="text-right">
<p className="text-gray-400 text-base mb-1">1Y Return:</p>
<div className="flex items-center justify-end gap-1 text-red-500">
<svg className="lucide lucide-arrow-down w-4 h-4 stroke-[2.5]" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
<span className="text-xl font-medium tracking-tight">1.5%</span>
</div>
</div>
</div>
<div className="relative h-16 w-full overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 300 60">
<path d="M0,52 C30,52 50,30 80,35 C110,40 130,55 160,50 C190,45 210,30 240,35 C270,40 290,30 300,32" fill="url(#gradient-2)"></path>
<path d="M0,52 C30,52 50,30 80,35 C110,40 130,55 160,50 C190,45 210,30 240,35 C270,40 290,30 300,32" fill="none" stroke="#ef4444" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>


    </>
  );
}
