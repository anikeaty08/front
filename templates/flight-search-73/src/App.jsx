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



        if(window.lucide){window.lucide.createIcons();}
      


      // Initialize Lucide Icons
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
      

<div className="w-full max-w-6xl bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.04)] border border-gray-200 flex flex-col lg:flex-row items-stretch lg:items-center relative overflow-hidden">

<div className="flex-1 flex items-center justify-between px-5 py-4 cursor-text hover:bg-gray-50/80 transition-colors relative group">
<span className="text-base text-gray-900 group-hover:text-gray-700 transition-colors">
          Madrid
        </span>
<span className="text-sm font-medium text-gray-400">MAD</span>

<button className="absolute -bottom-3.5 right-6 z-10 bg-white border border-gray-200 rounded-full p-1.5 text-gray-400 hover:text-gray-600 shadow-sm lg:hidden focus:outline-none">
<i className="w-3 h-3" data-lucide="arrow-up-down" strokeWidth="1.5"></i>
</button>
</div>

<button className="hidden lg:flex absolute left-[25%] -ml-4 z-10 bg-white hover:bg-gray-50 rounded-full p-1 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none">
<i className="w-4 h-4" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</button>

<div className="flex-1 flex cursor-text hover:bg-gray-50/80 transition-colors bg-blue-50/20 pt-4 pr-5 pb-4 pl-5 relative items-center justify-between">
<div className="flex items-center">
<span className="text-base text-gray-900">Par</span>

<span className="w-[1.5px] h-5 bg-blue-500 animate-pulse ml-[1px]"></span>
</div>
<span className="text-sm font-medium text-gray-400">PAR</span>

<div className="absolute bottom-0 left-4 right-4 lg:left-0 lg:right-0 h-[3px] bg-blue-500 rounded-t-sm"></div>
</div>

<div className="flex-[1.5] flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50/80 transition-colors gap-4">
<span className="text-base text-gray-900 whitespace-nowrap">
          20 may, tu
        </span>
<div className="flex items-center gap-3">
<span className="text-base text-gray-900 whitespace-nowrap">
            27 may, tu
          </span>
<button className="text-gray-400 hover:text-gray-700 transition-colors focus:outline-none p-1 rounded-md hover:bg-gray-200/50">
<i className="w-4 h-4" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50/80 transition-colors">
<span className="text-base text-gray-900 whitespace-nowrap">1 Pax</span>
</div>

<div className="p-3 bg-white flex items-center justify-center">
<button className="w-full lg:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-7 py-2.5 rounded-lg transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:scale-[0.98] uppercase tracking-wide">
          Search
        </button>
</div>
</div>
<div className="w-full max-w-6xl flex flex-col gap-3">
<div className="bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.04)] border border-gray-200 p-5 flex flex-col lg:flex-row items-center justify-between hover:shadow-md transition-shadow gap-6 lg:gap-0 cursor-pointer group">
<div className="flex items-center gap-4 w-full lg:w-48">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="plane"></i>
</div>
<div>
<div className="text-sm font-semibold text-gray-900">Air Europa</div>
<div className="text-xs text-gray-500">UX1024</div>
</div>
</div>
<div className="flex-1 w-full flex items-center justify-between lg:justify-center gap-4 lg:gap-12">
<div className="text-right lg:text-center">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
              10:30
            </div>
<div className="text-sm text-gray-500 font-medium">MAD</div>
</div>
<div className="flex flex-col items-center flex-1 lg:flex-none lg:w-48">
<div className="text-xs text-gray-400 mb-1.5 font-medium">2h 15m</div>
<div className="w-full relative flex items-center">
<div className="w-1.5 h-1.5 rounded-full border-2 border-gray-300 bg-white z-10"></div>
<div className="flex-1 border-t-2 border-gray-200 border-dashed"></div>
<div className="w-1.5 h-1.5 rounded-full border-2 border-gray-300 bg-white z-10"></div>
<i className="absolute left-1/2 -ml-2 text-gray-300 w-4 h-4 -mt-0.5" data-lucide="plane"></i>
</div>
<div className="text-xs text-gray-400 mt-1.5 font-medium">Direct</div>
</div>
<div className="text-left lg:text-center">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
              12:45
            </div>
<div className="text-sm text-gray-500 font-medium">PAR</div>
</div>
</div>
<div className="w-full lg:w-48 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center pt-4 lg:pt-0 lg:pl-6 border-t lg:border-t-0 border-gray-100">
<div className="text-2xl font-semibold text-gray-900 tracking-tight mb-0 lg:mb-2">
            €124
          </div>
<button className="bg-gray-100 group-hover:bg-blue-500 group-hover:text-white text-gray-900 font-semibold text-sm px-6 py-2 rounded-lg transition-colors focus:outline-none">
            Select
          </button>
</div>
</div>
<div className="bg-white rounded-xl shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06),0_1px_2px_-1px_rgba(0,0,0,0.04)] border border-gray-200 p-5 flex flex-col lg:flex-row items-center justify-between hover:shadow-md transition-shadow gap-6 lg:gap-0 cursor-pointer group">
<div className="flex items-center gap-4 w-full lg:w-48">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600">
<i className="w-5 h-5" data-lucide="plane"></i>
</div>
<div>
<div className="text-sm font-semibold text-gray-900">Iberia</div>
<div className="text-xs text-gray-500">IB3402</div>
</div>
</div>
<div className="flex-1 w-full flex items-center justify-between lg:justify-center gap-4 lg:gap-12">
<div className="text-right lg:text-center">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
              14:15
            </div>
<div className="text-sm text-gray-500 font-medium">MAD</div>
</div>
<div className="flex flex-col items-center flex-1 lg:flex-none lg:w-48">
<div className="text-xs text-gray-400 mb-1.5 font-medium">2h 10m</div>
<div className="w-full relative flex items-center">
<div className="w-1.5 h-1.5 rounded-full border-2 border-gray-300 bg-white z-10"></div>
<div className="flex-1 border-t-2 border-gray-200 border-dashed"></div>
<div className="w-1.5 h-1.5 rounded-full border-2 border-gray-300 bg-white z-10"></div>
<i className="absolute left-1/2 -ml-2 text-gray-300 w-4 h-4 -mt-0.5" data-lucide="plane"></i>
</div>
<div className="text-xs text-gray-400 mt-1.5 font-medium">Direct</div>
</div>
<div className="text-left lg:text-center">
<div className="text-xl font-semibold text-gray-900 tracking-tight">
              16:25
            </div>
<div className="text-sm text-gray-500 font-medium">PAR</div>
</div>
</div>
<div className="w-full lg:w-48 flex lg:flex-col items-center lg:items-end justify-between lg:justify-center pt-4 lg:pt-0 lg:pl-6 border-t lg:border-t-0 border-gray-100">
<div className="text-2xl font-semibold text-gray-900 tracking-tight mb-0 lg:mb-2">
            €145
          </div>
<button className="bg-gray-100 group-hover:bg-blue-500 group-hover:text-white text-gray-900 font-semibold text-sm px-6 py-2 rounded-lg transition-colors focus:outline-none">
            Select
          </button>
</div>
</div>

</div>


    </>
  );
}
