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



tailwind.config = {
  theme: {
    fontFamily: {
      sans: ['Inter var', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      colors: {
        accent: '#ff5b2f',
        accentLight: '#ffa88c'
      }
    }
  }
}



lucide.createIcons()
// fix dynamic checkbox icons
document.querySelectorAll('input[type=checkbox]').forEach(cb=>{
  cb.addEventListener('change',()=>lucide.createIcons())
})

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
      

<header className="flex justify-between items-center">
<h1 className="text-2xl font-semibold">Analytics Hub</h1>
<div className="flex items-center gap-4">

<details className="relative">
<summary className="cursor-pointer flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50">
<span>Admin</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</summary>
<ul className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg text-sm p-1 space-y-1">
<li><a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">Account</a></li>
<li><a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">Preferences</a></li>
<li><a className="block px-3 py-2 rounded hover:bg-gray-100" href="#">Sign Out</a></li>
</ul>
</details>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-accent transition-colors after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-transform peer-checked:after:translate-x-4"></div>
</label>
</div>
</header>

<main className="grid grid-cols-1 xl:grid-cols-12 gap-6">

<section className="col-span-1 xl:col-span-12 bg-white rounded-2xl shadow-sm p-6">
<div className="flex justify-between items-start">
<div>
<h2 className="text-sm font-medium text-gray-500 flex items-center gap-1">Monthly Earnings <i className="w-3 h-3" data-lucide="info"></i></h2>
<p className="text-3xl font-semibold mt-1">$89,250 <span className="text-green-600 text-base align-middle">+14%</span></p>
<div className="mt-4 text-sm space-x-4">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-accent inline-block"></span>Books <span className="font-medium">$42,880</span></span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-200 inline-block"></span>Software <span className="font-medium">$46,370</span></span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-gray-50 rounded-md border overflow-hidden text-xs font-medium">
<button className="px-3 py-1 hover:bg-white">1D</button>
<button className="px-3 py-1 hover:bg-white">1W</button>
<button className="px-3 py-1 hover:bg-white">1M</button>
<button className="px-3 py-1 hover:bg-white">6M</button>
<button className="px-3 py-1 bg-white text-gray-900">1Y</button>
<button className="px-3 py-1 hover:bg-white">Custom</button>
</div>
<button className="p-2 bg-gray-50 hover:bg-gray-100 rounded-md border">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="mt-6 h-48 w-full bg-[repeating-linear-gradient(135deg,#f0f0f0_0_10px,#fff_10px_20px)] rounded-lg relative overflow-hidden">
<div className="absolute bottom-0 left-1/3 w-8 h-28 bg-accent rounded-t"></div>
<div className="absolute bottom-0 left-[38%] w-8 h-20 bg-accentLight rounded-t"></div>
</div>
<div className="flex justify-between text-xs text-gray-400 mt-2">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
</div>
</section>

<section className="col-span-1 xl:col-span-4 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1">Live Orders <i className="w-3 h-3" data-lucide="info"></i></h3>
<p className="text-2xl font-semibold mt-1">$18,742 <span className="text-green-600 text-xs align-middle">+18%</span></p>
</div>
<div className="flex flex-col items-end text-xs">
<span className="flex items-center gap-1 text-orange-600"><i className="w-4 h-4" data-lucide="bar-chart-3"></i>Current</span>
<span className="flex items-center gap-1 text-gray-400"><i className="w-4 h-4 opacity-50" data-lucide="bar-chart-3"></i>Previous</span>
</div>
</div>
<button className="mt-6 text-sm font-medium flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
      View Report <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</section>
<section className="col-span-1 xl:col-span-4 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1">Items Shipped <i className="w-3 h-3" data-lucide="info"></i></h3>
<p className="text-2xl font-semibold mt-1">3,847 <span className="text-green-600 text-xs align-middle">+23%</span></p>
</div>

<div className="relative">
<svg className="transform -rotate-90" height="60" viewbox="0 0 42 42" width="60">
<circle cx="21" cy="21" fill="none" r="15" stroke="#f3f3f3" strokeWidth="6"></circle>
<circle cx="21" cy="21" fill="none" r="15" stroke="#ff5b2f" stroke-dasharray="40 100" strokeWidth="6"></circle>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xs font-semibold">75%</span>
</div>
</div>
</div>
<button className="mt-6 text-sm font-medium flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
      View Report <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</section>
<section className="col-span-1 xl:col-span-4 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1">Success Rate <i className="w-3 h-3" data-lucide="info"></i></h3>
<p className="text-2xl font-semibold mt-1">94.8% <span className="text-green-600 text-xs align-middle">+5%</span></p>
</div>
<div className="flex flex-col items-end text-xs">
<span className="flex items-center gap-1 text-orange-600"><i className="w-4 h-4" data-lucide="line-chart"></i>Current</span>
<span className="flex items-center gap-1 text-gray-400"><i className="w-4 h-4 opacity-50" data-lucide="line-chart"></i>Previous</span>
</div>
</div>
<button className="mt-6 text-sm font-medium flex items-center justify-between px-3 py-2 bg-gray-50 rounded-md hover:bg-gray-100">
      View Report <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</section>

<section className="col-span-1 xl:col-span-6 bg-white rounded-2xl shadow-sm p-6 flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1">User Sessions <i className="w-3 h-3" data-lucide="info"></i></h3>
<p className="text-3xl font-semibold mt-1">284,392 <span className="text-green-600 text-xs align-middle">+15.3%</span></p>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-6 text-sm font-medium">
<div className="space-y-2">
<p>Tablet <span className="font-semibold">167,845</span></p>
<div className="h-6 bg-gray-200 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#ffa88c_0_10px,#ff5b2f_10px_20px)]" style={{width: '60%'}}></div>
<span className="absolute inset-0 flex items-center justify-center text-white text-xs">59%</span>
</div>
</div>
<div className="space-y-2">
<p>Laptop <span className="font-semibold">116,547</span></p>
<div className="h-6 bg-gray-200 rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#ffa88c_0_10px,#ff5b2f_10px_20px)]" style={{width: '40%'}}></div>
<span className="absolute inset-0 flex items-center justify-center text-white text-xs">41%</span>
</div>
</div>
</div>
</section>

<section className="col-span-1 xl:col-span-6 bg-white rounded-2xl shadow-sm p-6 flex flex-col">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-gray-500 flex items-center gap-1">Best Sellers <i className="w-3 h-3" data-lucide="info"></i></h3>
<a className="text-xs font-medium text-accent flex items-center gap-1" href="#">View Catalog <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
<div className="mt-4 overflow-auto">
<table className="w-full text-sm">
<thead>
<tr className="text-left text-gray-500">
<th className="py-2 px-2"><label className="inline-flex items-center">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-accent peer-checked:border-accent flex-shrink-0 flex items-center justify-center">
<i className="w-3 h-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
</label></th>
<th className="py-2">Item</th>
<th className="py-2">Orders</th>
<th className="py-2">Income</th>
<th className="py-2">Available</th>
<th className="py-2">Status</th>
</tr>
</thead>
<tbody className="divide-y">
<tr>
<td className="py-2 px-2">
<label className="inline-flex items-center">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-accent peer-checked:border-accent flex items-center justify-center">
<i className="w-3 h-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
</label>
</td>
<td className="py-2">NovaTech Wireless Headphones • Blue</td>
<td className="py-2">2,847 units</td>
<td className="py-2">$7,892.45</td>
<td className="py-2">85</td>
<td className="py-2"><span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-700">Available</span></td>
</tr>
<tr>
<td className="py-2 px-2">
<label className="inline-flex items-center">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-accent peer-checked:border-accent flex items-center justify-center">
<i className="w-3 h-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
</label>
</td>
<td className="py-2">PixelForge Gaming Mouse • Black</td>
<td className="py-2">1,923 units</td>
<td className="py-2">$3,847.60</td>
<td className="py-2">0</td>
<td className="py-2"><span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">Sold Out</span></td>
</tr>
<tr>
<td className="py-2 px-2">
<label className="inline-flex items-center">
<input className="sr-only peer" type="checkbox"/>
<span className="w-4 h-4 rounded border border-gray-300 peer-checked:bg-accent peer-checked:border-accent flex items-center justify-center">
<i className="w-3 h-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
</label>
</td>
<td className="py-2">ZenithPro Mechanical Keyboard • Silver</td>
<td className="py-2">5,284 units</td>
<td className="py-2">$12,390.80</td>
<td className="py-2">12</td>
<td className="py-2"><span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">Low Stock</span></td>
</tr>
</tbody>
</table>
</div>

<div className="mt-6">
<label className="text-sm font-medium text-gray-600" htmlFor="stockRange">Inventory Alert Threshold</label>
<input className="w-full h-2 mt-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--tw-accent)]" id="stockRange" max="100" min="0" style={{accentColor: '#ff5b2f'}} type="range" value="50"/>
</div>
</section>
</main>



    </>
  );
}
