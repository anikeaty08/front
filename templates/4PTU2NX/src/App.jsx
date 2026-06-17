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



    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();
      const ctx = document.getElementById("costChart").getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Materials", "Labor", "Equipment", "Permits", "Overhead"],
          datasets: [{
            data: [42100, 25750, 8480, 2000, 18000],
            backgroundColor: ["#3b82f6", "#f97316", "#a855f7", "#10b981", "#facc15"],
            borderWidth: 0,
          }]
        },
        options: {
          responsive: true,
          cutout: "68%",
          plugins: { legend: { position: "bottom" } }
        }
      });
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
      

<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-stagger px-6 pt-6">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Job #23741<span className="text-gray-400 font-medium"> • Commercial Roofing</span></h1>
<p className="text-sm text-gray-500">Last updated 4 mins ago</p>
</div>
<nav className="flex gap-2">
<button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="user"></i>Customer
      </button>
<button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="briefcase"></i>Job
      </button>
<button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="refresh-ccw"></i>Refresh
      </button>
<button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
<i className="w-4 h-4" data-lucide="printer"></i>Print
      </button>
<button className="flex items-center gap-2 px-3.5 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>Analytics
      </button>
</nav>
</header>

<main className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 animate-stagger">

<section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
<h2 className="text-xl font-semibold tracking-tight mb-4">Financial Overview</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="flex flex-col gap-2">
<span className="text-sm text-gray-500">Revenue</span>
<span className="text-3xl font-semibold tracking-tight text-blue-600">$182,450</span>
<span className="text-xs bg-blue-50 text-blue-600 rounded-md py-1 px-2 w-max">+3.8% MoM</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-gray-500">Direct Costs</span>
<span className="text-3xl font-semibold tracking-tight text-orange-500">$97,330</span>
<span className="text-xs bg-orange-50 text-orange-600 rounded-md py-1 px-2 w-max">-1.2% MoM</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-sm text-gray-500">Gross Profit</span>
<span className="text-3xl font-semibold tracking-tight text-green-600">$85,120</span>
<span className="text-xs bg-green-50 text-green-600 rounded-md py-1 px-2 w-max">+6.1% MoM</span>
</div>
</div>

<div className="border-t border-gray-200 my-6"></div>
<div className="grid md:grid-cols-2 gap-8">

<div>
<h3 className="text-sm font-medium mb-2">Cost Distribution</h3>
<div className="flex items-center justify-center">
<div className="p-4 bg-gray-50 rounded-xl">
<canvas className="w-60 h-60" id="costChart"></canvas>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-medium mb-2">Detailed Breakdown</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between"><span className="text-gray-600">Materials</span> <span className="font-medium">$42,100</span></li>
<li className="flex justify-between"><span className="text-gray-600">Labor</span> <span className="font-medium">$25,750</span></li>
<li className="flex justify-between"><span className="text-gray-600">Equipment</span> <span className="font-medium">$8,480</span></li>
<li className="flex justify-between"><span className="text-gray-600">Permits &amp; Fees</span> <span className="font-medium">$2,000</span></li>
<li className="flex justify-between"><span className="text-gray-600">Overhead</span> <span className="font-medium">$18,000</span></li>
<li className="flex justify-between pt-2 mt-2 border-t border-gray-200 text-gray-800"><span>Total Direct Costs</span> <span className="font-semibold">$97,330</span></li>
</ul>
</div>
</div>
</section>

<section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col">
<h2 className="text-xl font-semibold tracking-tight mb-4">Project Information</h2>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-700 mb-2">Project Details</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between"><span>Contract Signed</span><span className="font-medium">Feb 12, 2024</span></div>
<div className="flex justify-between"><span>Projected Close</span><span className="font-medium">May 18, 2024</span></div>
<div className="flex justify-between"><span>Job Days</span><span className="font-medium">27</span></div>
<div className="flex justify-between"><span>Square Footage</span><span className="font-medium">12,500 ft²</span></div>
</div>
</div>
<div className="border-t border-gray-200 my-4"></div>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-700 mb-2">Customer</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between"><span>Customer ID</span><span className="font-medium">C-8421</span></div>
<div className="flex justify-between"><span>Name</span><span className="font-medium">Apex Builders LLC</span></div>
<div className="flex items-start justify-between">
<span>Address</span>
<span className="font-medium text-right flex gap-1 items-start">
<i className="w-4 h-4 text-gray-500 mt-0.5" data-lucide="map-pin"></i>
              812 Industrial Ave, Denver, CO
            </span>
</div>
</div>
</div>
<div className="border-t border-gray-200 my-4"></div>

<div>
<h3 className="text-sm font-medium text-gray-700 mb-2">Team</h3>
<div className="space-y-2 text-sm">
<div className="flex justify-between items-center">
<span>Project Manager</span>
<span className="flex items-center gap-1 font-medium">
              Jordan Miles
              <i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i>
</span>
</div>
<div className="flex justify-between items-center">
<span>Lead Crew</span>
<span className="flex items-center gap-1 font-medium">
              Site Crew A
              <i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i>
</span>
</div>
<div className="flex justify-between items-center">
<span>Sales</span>
<span className="flex items-center gap-1 font-medium">
              Dana Nguyen
              <i className="w-4 h-4 text-green-600" data-lucide="check-circle"></i>
</span>
</div>
</div>
</div>
</section>
</main>

<section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-6 mx-6 animate-stagger">
<h2 className="text-xl font-semibold tracking-tight mb-4">Project Notes</h2>
<div className="grid md:grid-cols-2 gap-6">

<div>
<h3 className="text-sm font-medium mb-2">Quick Flags</h3>
<ul className="space-y-3 text-sm">

<li className="flex items-center gap-3">
<input className="hidden peer" id="flag1" type="checkbox"/>
<label className="peer-checked:bg-blue-600 peer-checked:text-white w-5 h-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer transition" htmlFor="flag1">
<i className="w-3 h-3 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</label>
<span className="select-none">Price too low</span>
</li>
<li className="flex items-center gap-3">
<input className="hidden peer" id="flag2" type="checkbox"/>
<label className="peer-checked:bg-blue-600 peer-checked:text-white w-5 h-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer transition" htmlFor="flag2">
<i className="w-3 h-3 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</label>
<span className="select-none">Materials too high</span>
</li>
<li className="flex items-center gap-3">
<input className="hidden peer" id="flag3" type="checkbox"/>
<label className="peer-checked:bg-blue-600 peer-checked:text-white w-5 h-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer transition" htmlFor="flag3">
<i className="w-3 h-3 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</label>
<span className="select-none">Crew availability</span>
</li>
<li className="flex items-center gap-3">
<input className="hidden peer" id="flag4" type="checkbox"/>
<label className="peer-checked:bg-blue-600 peer-checked:text-white w-5 h-5 border border-gray-300 rounded flex items-center justify-center cursor-pointer transition" htmlFor="flag4">
<i className="w-3 h-3 opacity-0 peer-checked:opacity-100" data-lucide="check"></i>
</label>
<span className="select-none">Awaiting permits</span>
</li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium mb-2">Additional Notes</h3>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Add project observations, blockers, or insights..." rows="6"></textarea>
</div>
</div>
</section>



    </>
  );
}
