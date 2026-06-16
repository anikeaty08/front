import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config = {
      theme: {
        extend: {
          colors: {
            taupe: {
              50: '#f8f7f6',
              100: '#e9e6e2',
              200: '#d8d2cc',
              300: '#bfb5ab',
              400: '#a69688',
              500: '#95846f',
              600: '#857361',
              700: '#6f5f51',
              800: '#5c5045',
              900: '#4d443b',
            }
          }
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-[390px] h-[852px] rounded-3xl overflow-hidden shadow-md">
<div className="w-full h-full bg-taupe-50 flex flex-col">

<div className="pt-14 pb-4 px-6">
<div className="flex items-center">
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
<i className="bi bi-chevron-left text-taupe-700"></i>
</button>
<h1 className="text-xl font-medium text-taupe-800 ml-4">Search Location</h1>
</div>
</div>

<div className="px-6 pb-4">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
<i className="bi bi-search text-taupe-400"></i>
</div>
<input className="bg-white border border-taupe-200 text-taupe-800 text-base rounded-xl block w-full pl-11 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-taupe-300 shadow-sm" placeholder="Search city or zip code" type="search"/>
</div>
</div>

<div className="px-6 pb-4">
<button className="w-full bg-white border border-taupe-200 text-taupe-800 font-medium py-4 px-4 rounded-xl shadow-sm flex items-center justify-center">
<i className="bi bi-geo-alt text-taupe-500 mr-2"></i>
          Use Current Location
        </button>
</div>

<div className="px-6 pb-4">
<div className="flex justify-between items-center mb-2">
<h2 className="text-sm font-medium text-taupe-500">RECENT SEARCHES</h2>
<button className="text-xs text-taupe-500">Clear All</button>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center">
<i className="bi bi-clock-history text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">San Francisco, CA</p>
<p className="text-taupe-500 text-xs">United States</p>
</div>
<button className="ml-auto text-taupe-400">
<i className="bi bi-x-lg"></i>
</button>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-clock-history text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">London</p>
<p className="text-taupe-500 text-xs">United Kingdom</p>
</div>
<button className="ml-auto text-taupe-400">
<i className="bi bi-x-lg"></i>
</button>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-clock-history text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Tokyo</p>
<p className="text-taupe-500 text-xs">Japan</p>
</div>
<button className="ml-auto text-taupe-400">
<i className="bi bi-x-lg"></i>
</button>
</div>
</div>
</div>

<div className="px-6 pb-4 flex-1 overflow-y-auto">
<h2 className="text-sm font-medium text-taupe-500 mb-2">POPULAR CITIES</h2>
<div className="bg-white rounded-2xl shadow-sm border border-taupe-100 overflow-hidden">
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">New York City</p>
<p className="text-taupe-500 text-xs">United States</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Paris</p>
<p className="text-taupe-500 text-xs">France</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Sydney</p>
<p className="text-taupe-500 text-xs">Australia</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Dubai</p>
<p className="text-taupe-500 text-xs">United Arab Emirates</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
<div className="border-t border-taupe-100"></div>
<div className="p-4 flex items-center">
<i className="bi bi-geo-alt text-taupe-400 text-lg"></i>
<div className="ml-3">
<p className="text-taupe-800">Singapore</p>
<p className="text-taupe-500 text-xs">Singapore</p>
</div>
<i className="bi bi-chevron-right ml-auto text-taupe-400"></i>
</div>
</div>
</div>

<div className="pb-2 flex justify-center">
<div className="w-[134px] h-[5px] bg-taupe-200 rounded-full"></div>
</div>
</div>
</div>

    </>
  );
}
