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
      
<div className="max-w-[800px] mx-auto space-y-4">

<section className="card rounded-xl overflow-hidden bg-white transition duration-200">
<div className="flex flex-col md:flex-row">
<div className="w-full md:w-1/2 p-6">
<span className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full mb-2">WELCOME</span>
<h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">Bento Layout Experience</h1>
<p className="text-sm text-gray-600 mb-4">A modern, responsive grid layout that adapts beautifully to any screen size.</p>
<button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition text-gray-700">
            Explore Now
          </button>
</div>
<div className="w-full md:w-1/2 bg-gray-100 p-6 flex items-center justify-center">
<div className="grid grid-cols-3 gap-2">
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
<div className="bg-white h-12 w-12 rounded-lg border border-gray-200"></div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="card rounded-xl p-5 bg-white transition duration-200">
<span className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full mb-2">ANALYTICS</span>
<h2 className="text-lg font-bold mb-3 text-gray-800">Performance Metrics</h2>
<p className="text-xs text-gray-600 mb-4">Track your key metrics with our intuitive dashboard.</p>
<div className="space-y-2 mt-auto">
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-blue-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-purple-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
</div>

<div className="card rounded-xl p-5 bg-white transition duration-200">
<span className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full mb-2">CALENDAR</span>
<h2 className="text-lg font-bold mb-3 text-gray-800">Upcoming Events</h2>
<div className="space-y-2 mb-4">
<div className="flex items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center mr-2 text-xs">15</div>
<div>
<p className="text-xs font-medium text-gray-800">Team Meeting</p>
<p className="text-xs text-gray-500">10:00 AM</p>
</div>
</div>
<div className="flex items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-8 h-8 bg-purple-100 text-purple-600 rounded flex items-center justify-center mr-2 text-xs">22</div>
<div>
<p className="text-xs font-medium text-gray-800">Product Launch</p>
<p className="text-xs text-gray-500">2:00 PM</p>
</div>
</div>
</div>
</div>

<div className="card rounded-xl p-5 bg-white transition duration-200">
<span className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full mb-2">RESOURCES</span>
<h2 className="text-lg font-bold mb-3 text-gray-800">Documentation</h2>
<div className="space-y-2">
<div className="flex items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
<svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-gray-800">Getting Started Guide</p>
</div>
<div className="flex items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
<svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-gray-800">API Documentation</p>
</div>
<div className="flex items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
<svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-xs text-gray-800">Best Practices</p>
</div>
</div>
</div>

<div className="card rounded-xl p-5 bg-white transition duration-200">
<span className="inline-block px-2 py-0.5 text-xs text-gray-600 border border-gray-200 rounded-full mb-2">TEAM</span>
<h2 className="text-lg font-bold mb-3 text-gray-800">Project Members</h2>
<div className="flex flex-wrap gap-2 mb-4">
<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs">JD</div>
<div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs">KM</div>
<div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs">TS</div>
<div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-xs">AL</div>
<div className="w-8 h-8 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center text-xs border border-gray-200">+3</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center">
<span className="text-xs text-gray-500">Progress</span>
<span className="text-xs text-gray-800">68%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-1.5 border border-gray-200">
<div className="bg-green-500 h-1.5 rounded-full" style={{width: '68%'}}></div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
