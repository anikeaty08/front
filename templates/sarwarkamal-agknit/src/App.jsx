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



        document.addEventListener("DOMContentLoaded", () => {
            initDashboardAnimations();
        });

        function initDashboardAnimations() {
            // Animated Counter
            const counters = document.querySelectorAll('.stat-number');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const duration = 1500; // ms
                
                let current = 0;
                // Faster interval, smaller increments for smoother look
                const timer = setInterval(() => {
                    current += Math.ceil(target / (duration / 16)); 
                    if (current >= target) {
                        counter.innerText = target;
                        clearInterval(timer);
                    } else {
                        counter.innerText = current;
                    }
                }, 16);
            });

            // Animated Skill Bars
            setTimeout(() => {
                const bars = document.querySelectorAll(".progress-bar");
                bars.forEach(bar => {
                    bar.style.width = bar.getAttribute("data-width");
                });
            }, 100);
        }

        function toggleView(targetViewId) {
            const views = ['dashboard-view', 'buyers-view', 'countries-view'];
            
            // Find currently active view
            let currentViewId = '';
            views.forEach(id => {
                const el = document.getElementById(id);
                if (el && !el.classList.contains('hidden')) {
                    currentViewId = id;
                }
            });
            
            // Prevent redundant firing
            if (!currentViewId || currentViewId === targetViewId) return;

            const currentView = document.getElementById(currentViewId);
            const targetView = document.getElementById(targetViewId);

            // Hide current view smoothly
            currentView.classList.remove('opacity-100');
            currentView.classList.add('opacity-0');
            
            setTimeout(() => {
                currentView.classList.remove('block');
                currentView.classList.add('hidden');
                
                // Show target view
                targetView.classList.remove('hidden');
                targetView.classList.add('block');
                
                // Small timeout to allow display:block to render before fading in opacity
                setTimeout(() => {
                    targetView.classList.remove('opacity-0');
                    targetView.classList.add('opacity-100');
                }, 50);
            }, 300);
        }
    
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
      
<div className="w-full max-w-3xl animate-fade-in opacity-0">
<div className="rounded-3xl shadow-sm border overflow-hidden relative min-h-[600px] flex flex-col bg-white border-indigo-200/60">

<div className="sm:h-40 overflow-hidden flex shrink-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#ffffff] via-[#ffffff] to-[#c2c2c2] h-32 border-sky-200 border-b relative items-center justify-center">
</div>

<div className="-mt-16 shrink-0 sm:px-12 sm:-mt-20 sm:text-left sm:flex sm:items-end sm:gap-6 text-center bg-white z-10 border-indigo-100/60 border-b pr-6 pb-6 pl-6 relative gap-x-12 gap-y-x-20">
<img alt="Profile" className="sm:mx-0 animate-float object-auto bg-[#ffffff] w-32 h-33 ring-white ring-4 rounded-full mr-auto ml-auto scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e27c4259-d968-4dc7-a61b-3b7485ce866d_320w.png?w=800&amp;q=80"/>
<div className="sm:mt-0 mt-4 pb-2">
<h2 className="sm:text-3xl text-2xl font-semibold text-blue-950 font-poppins text-center w-25">Md.Sarwar Kamal</h2>
<p className="flex items-center justify-center gap-1.5 text-center] sm:justify-start default text-sm font-normal font-poppins text-left bg-gradient-to-r ring-0 mt-2 mb-2 from-white/10 to-white/0 text-blue-950">
            General Manager</p>
<p className="flex items-center justify-center gap-1.5 text-center] sm:justify-start text-sm text-blue-950 font-poppins text-left ring-0 mt-2 mb-2">
            Marketing &amp; Merchandising</p>

</div>
<div className="sm:mt-0 mt-4 pb-2">
<p className="flex items-center justify-center gap-1.5 text-center] sm:justify-start text-sm text-blue-950 font-poppins text-left ring-0 mt-2 mb-2">
            sarwar@azimswtr.com</p>
<p className="flex items-center justify-center gap-1.5 text-center] sm:justify-start text-sm text-blue-950 font-poppins text-left ring-0 mt-2 mb-2">
            +880-17********</p>
</div>
</div>

<div className="sm:p-12 flex-grow bg-white pt-6 pr-6 pb-6 pl-6 relative">

<div className="view-transition opacity-100 block" id="dashboard-view">

<div className="mb-12">
<h3 className="text-lg flex items-center gap-2 mb-6 tracking-tight font-poppins font-medium text-indigo-900">
<iconify-icon className="text-indigo-400" icon="solar:chart-square-linear"></iconify-icon>
                      Profile Statistics
                    </h3>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="flex flex-col transition-colors duration-300 border rounded-2xl pt-5 pr-5 pb-5 pl-5 items-center justify-center hover:bg-indigo-50 bg-indigo-50/50 border-indigo-100">
<div className="sm:text-4xl stat-number text-3xl font-medium font-poppins text-indigo-900" data-target="2558">2558</div>
<div className="uppercase text-xs text-indigo-500 tracking-widest mt-2 font-poppins">Orders Handled</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:shadow-sm cursor-pointer hover:bg-indigo-50 hover:border-indigo-300 bg-indigo-50/50 border-indigo-100 border rounded-2xl pt-5 pr-5 pb-5 pl-5 relative items-center justify-center" onclick="toggleView('buyers-view')">
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">
<iconify-icon className="" height="16" icon="solar:arrow-right-up-linear" style={{color: 'rgb(148, 163, 184)'}} width="16"></iconify-icon>
</div>
<div className="sm:text-4xl stat-number group-hover:text-[#000080] transition-colors text-3xl font-medium font-poppins text-indigo-900" data-target="15">15</div>
<div className="text-xs text-indigo-500 uppercase tracking-widest mt-2 font-poppins">Intl Buyers</div>
</div>

<div className="group flex flex-col transition-all duration-300 border hover:shadow-sm cursor-pointer rounded-2xl pt-5 pr-5 pb-5 pl-5 items-center justify-center relative hover:bg-indigo-50 bg-indigo-50/50 border-indigo-100 hover:border-indigo-300" onclick="toggleView('countries-view')">
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-400">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="sm:text-4xl stat-number text-3xl font-medium font-poppins group-hover:text-[#000080] transition-colors text-indigo-900" data-target="12">12</div>
<div className="text-xs text-indigo-500 uppercase tracking-widest mt-2 font-poppins">Export Countries</div>
</div>
</div>
</div>

<div className="">
<h3 className="flex items-center gap-2 text-lg tracking-tight mb-6 font-poppins font-medium text-indigo-900">
<iconify-icon className="text-indigo-400" icon="solar:tuning-square-2-linear"></iconify-icon>
                      Professional Skills
                    </h3>
<div className="space-y-6">
<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-poppins text-indigo-700">Costing &amp; Pricing</span>
<span className="text-xs text-indigo-500 font-poppins">95%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-indigo-100">
<div className="progress-bar w-0 h-full rounded-full transition-all duration-1000 ease-out bg-indigo-900" data-width="95%" style={{width: '95%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-poppins text-indigo-700">Buyer Communication</span>
<span className="text-xs text-indigo-500 font-poppins">90%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-indigo-100">
<div className="h-full rounded-full w-0 progress-bar transition-all duration-1000 ease-out bg-indigo-900" data-width="90%" style={{width: '90%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-poppins text-indigo-700">Yarn Sourcing</span>
<span className="text-xs text-indigo-500 font-poppins">85%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-indigo-100">
<div className="h-full rounded-full w-0 progress-bar transition-all duration-1000 ease-out bg-indigo-900" data-width="85%" style={{width: '85%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-poppins text-indigo-700">T&amp;A Management</span>
<span className="text-xs text-indigo-500 font-poppins">92%</span>
</div>
<div className="h-1 w-full rounded-full overflow-hidden bg-indigo-100">
<div className="h-full rounded-full w-0 progress-bar transition-all duration-1000 ease-out bg-indigo-900" data-width="92%" style={{width: '92%'}}></div>
</div>
</div>
<div className="">
<div className="flex justify-between items-center mb-2">
<span className="text-sm font-poppins text-indigo-700">Production Planning</span>
<span className="text-xs text-indigo-500 font-poppins">88%</span>
</div>
<div className="overflow-hidden w-full h-1 rounded-full bg-indigo-100">
<div className="h-full rounded-full w-0 progress-bar transition-all duration-1000 ease-out bg-indigo-900" data-width="88%" style={{width: '88%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="view-transition opacity-0 hidden" id="buyers-view">
<button className="flex items-center gap-1.5 text-xs text-indigo-500 transition-colors mb-6 font-poppins uppercase tracking-wider font-medium hover:text-blue-950" onclick="toggleView('dashboard-view')">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon>
                        Back to Dashboard
                    </button>
<h3 className="flex items-center gap-2 text-lg tracking-tight mb-6 font-poppins font-medium text-indigo-900">
<iconify-icon className="text-indigo-400" icon="solar:global-linear"></iconify-icon>
                      International Buyers
                    </h3>
<div className="overflow-x-auto">
<table className="w-full text-left font-poppins text-sm">
<thead>
<tr className="text-xs uppercase tracking-widest text-indigo-400">
<th className="pb-4 font-medium font-poppins w-12 text-center">Flag</th>
<th className="pb-4 font-medium font-poppins pl-2">Country</th>
<th className="pb-4 font-medium font-poppins">Brand / Buyer</th>
<th className="pb-4 font-medium font-poppins hidden sm:table-cell">Address</th>
<th className="pb-4 font-medium text-right font-poppins pr-2">Qty/Yr</th>
</tr>
</thead>
<tbody className="align-top text-indigo-600">
<tr className="group transition-colors rounded-xl hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇺🇸</td>
<td className="py-4 font-poppins pl-2">USA</td>
<td className="py-4 font-medium font-poppins text-indigo-800">Target Corporation</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">1000 Nicollet Mall, Minneapolis, MN</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">1.2M</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇬🇧</td>
<td className="py-4 font-poppins pl-2">UK</td>
<td className="py-4 font-medium font-poppins text-indigo-800">Primark Stores Ltd</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">41 West Street, Reading</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">850K</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇩🇪</td>
<td className="py-4 font-poppins pl-2">Germany</td>
<td className="py-4 font-medium font-poppins text-indigo-800">C&amp;A Europe</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Wanheimer Str. 70, Düsseldorf</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">600K</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇪🇸</td>
<td className="py-4 font-poppins pl-2">Spain</td>
<td className="py-4 font-medium font-poppins text-indigo-800">Inditex (Zara)</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Edificio Inditex, Arteixo, A Coruña</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">450K</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇫🇷</td>
<td className="py-4 font-poppins pl-2">France</td>
<td className="py-4 font-medium font-poppins text-indigo-800">Kiabi Europe</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">100 rue du Calvaire, Hem</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">250K</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="view-transition opacity-0 hidden" id="countries-view">
<button className="flex items-center gap-1.5 text-xs text-indigo-500 transition-colors mb-6 font-poppins uppercase tracking-wider font-medium hover:text-blue-950" onclick="toggleView('dashboard-view')">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon>
                        Back to Dashboard
                    </button>
<h3 className="flex items-center gap-2 text-lg tracking-tight mb-6 font-poppins font-medium text-indigo-900">
<iconify-icon className="text-indigo-400" icon="solar:map-point-linear"></iconify-icon>
                      Export Destinations Detail
                    </h3>
<div className="overflow-x-auto">
<table className="w-full text-left font-poppins text-sm">
<thead>
<tr className="text-xs uppercase tracking-widest text-indigo-400">
<th className="pb-4 font-medium font-poppins w-12 text-center">Flag</th>
<th className="pb-4 font-medium font-poppins pl-2">Country</th>
<th className="pb-4 font-medium font-poppins hidden sm:table-cell">Region</th>
<th className="pb-4 font-medium font-poppins">Product Focus</th>
<th className="pb-4 font-medium text-right font-poppins pr-2">Share</th>
</tr>
</thead>
<tbody className="align-top text-indigo-600">
<tr className="group transition-colors rounded-xl hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇺🇸</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">United States</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">North America</td>
<td className="py-4 font-poppins">Knitwear, Activewear</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">35%</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇬🇧</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">United Kingdom</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Europe</td>
<td className="py-4 font-poppins">Casual Wear, Basics</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">25%</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇩🇪</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">Germany</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Europe</td>
<td className="py-4 font-poppins">Outerwear, Sweaters</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">15%</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇪🇸</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">Spain</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Europe</td>
<td className="py-4 font-poppins">Fast Fashion Knits</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">12%</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇨🇦</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">Canada</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">North America</td>
<td className="py-4 font-poppins">Winter Knits, Fleece</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">8%</td>
</tr>
<tr className="group transition-colors hover:bg-indigo-50/80">
<td className="py-4 text-base text-center rounded-l-xl">🇦🇺</td>
<td className="py-4 font-poppins font-medium pl-2 text-indigo-800">Australia</td>
<td className="py-4 text-indigo-500 text-xs font-poppins hidden sm:table-cell pr-4">Oceania</td>
<td className="py-4 font-poppins">Lightweight Basics</td>
<td className="py-4 text-right font-medium font-poppins rounded-r-xl pr-2 text-indigo-800">5%</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
