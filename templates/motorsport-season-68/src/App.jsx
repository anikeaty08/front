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



        // Main Tab Switching Logic
        function switchTab(tabId) {
            // Hide all tab contents
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.add('hidden');
            });
            // Show target tab content
            document.getElementById('tab-' + tabId).classList.remove('hidden');

            // Update tab buttons styling (Wireframe B&W)
            document.querySelectorAll('.tab-btn').forEach(btn => {
                if (btn.dataset.target === tabId) {
                    btn.classList.add('text-black', 'border-black', 'font-semibold');
                    btn.classList.remove('text-gray-500', 'border-transparent', 'font-normal');
                    
                    // Center the active tab in the scrollable nav
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    btn.classList.remove('text-black', 'border-black', 'font-semibold');
                    btn.classList.add('text-gray-500', 'border-transparent', 'font-normal');
                }
            });
        }

        // Budget Sub-tab Switching Logic
        function switchBudgetTab(tabId) {
            document.querySelectorAll('.budget-content').forEach(el => {
                el.classList.add('hidden');
            });
            document.getElementById('budget-' + tabId).classList.remove('hidden');

            document.querySelectorAll('.budget-tab-btn').forEach(btn => {
                if (btn.dataset.target === tabId) {
                    btn.classList.add('bg-black', 'text-white', 'shadow-sm', 'border-black');
                    btn.classList.remove('text-gray-600', 'bg-transparent', 'border-transparent');
                } else {
                    btn.classList.remove('bg-black', 'text-white', 'shadow-sm', 'border-black');
                    btn.classList.add('text-gray-600', 'bg-transparent', 'border-transparent');
                }
            });
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
      

<main className="w-full max-w-md mx-auto bg-white min-h-screen flex flex-col relative pb-20 border-x-2 border-black">

<header className="sticky top-0 z-50 bg-white border-b-2 border-black pt-12 pb-4 px-5">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">D R V R</span>
</div>
<button className="w-8 h-8 rounded-full bg-white border-2 border-black flex items-center justify-center text-black hover:bg-gray-100 transition-colors">
<iconify-icon icon="solar:bell-linear" width="1.2em"></iconify-icon>
</button>
</div>
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-black">2026 Season</h1>
</div>
<div className="flex items-center gap-1.5 bg-white border-2 border-black px-2.5 py-1 rounded-md">
<iconify-icon className="text-black" icon="solar:star-fall-linear" width="1em"></iconify-icon>
<span className="text-xs text-black font-semibold">Stage 1</span>
</div>
</div>
</header>

<nav className="sticky top-[105px] z-40 bg-white border-b-2 border-black px-2 pt-2">
<ul className="flex overflow-x-auto no-scrollbar gap-1" id="main-tabs">
<li><button className="tab-btn active px-4 py-2.5 text-sm font-semibold text-black border-b-2 border-black transition-all whitespace-nowrap" data-target="overview" onclick="switchTab('overview')">Overview</button></li>
<li><button className="tab-btn px-4 py-2.5 text-sm font-normal text-gray-500 hover:text-black border-b-2 border-transparent transition-all whitespace-nowrap" data-target="schedule" onclick="switchTab('schedule')">Schedule</button></li>
<li><button className="tab-btn px-4 py-2.5 text-sm font-normal text-gray-500 hover:text-black border-b-2 border-transparent transition-all whitespace-nowrap" data-target="budget" onclick="switchTab('budget')">Budget</button></li>
<li><button className="tab-btn px-4 py-2.5 text-sm font-normal text-gray-500 hover:text-black border-b-2 border-transparent transition-all whitespace-nowrap" data-target="milestones" onclick="switchTab('milestones')">Milestones</button></li>
<li><button className="tab-btn px-4 py-2.5 text-sm font-normal text-gray-500 hover:text-black border-b-2 border-transparent transition-all whitespace-nowrap" data-target="license" onclick="switchTab('license')">License</button></li>
</ul>
</nav>

<div className="flex-1 px-5 py-6">

<div className="tab-content flex flex-col gap-4" id="tab-overview">

<div className="bg-white border-2 border-black rounded-xl p-4 flex flex-col gap-4">
<div className="flex justify-between items-start">
<div>
<span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">Current Goal</span>
<h2 className="text-base text-black font-semibold">Complete Development Phase</h2>
</div>
<span className="text-xs text-black border-2 border-black bg-gray-100 px-2 py-1 rounded-md font-medium">3/8 Races</span>
</div>
<div>
<div className="w-full bg-gray-200 border border-black rounded-full h-2.5 overflow-hidden">
<div className="bg-black h-full rounded-r-full w-[37.5%] border-r border-black"></div>
</div>
<div className="flex justify-between text-xs text-gray-600 font-medium mt-2">
<span>0%</span>
<span>37.5% Completed</span>
</div>
</div>
</div>

<div className="bg-white border-2 border-black rounded-xl p-4">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gray-100 border border-black flex items-center justify-center text-black">
<iconify-icon icon="solar:flag-linear" width="1.2em"></iconify-icon>
</div>
<div>
<span className="text-xs text-gray-500 font-medium block">Next Event</span>
<h3 className="text-sm font-semibold text-black">Silverstone GP</h3>
</div>
</div>
<div className="text-right">
<span className="text-sm text-black font-medium block">Apr 12-14</span>
<span className="text-xs text-black border border-black px-1.5 py-0.5 rounded font-medium">Confirmed</span>
</div>
</div>
<button className="w-full py-2.5 bg-white hover:bg-gray-100 text-sm font-semibold text-black rounded-lg border-2 border-black transition-colors flex items-center justify-center gap-2" onclick="switchTab('schedule')">
                        View Full Schedule
                        <iconify-icon icon="solar:arrow-right-linear" width="1em"></iconify-icon>
</button>
</div>

<div className="bg-white border-2 border-black rounded-xl p-4">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-black flex items-center gap-2">
<iconify-icon className="text-black" icon="solar:wallet-linear"></iconify-icon>
                            Season Budget
                        </h3>
<span className="text-xs text-gray-500 font-medium">Read-only</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<span className="text-xs text-gray-500 font-medium block mb-1">Spent</span>
<span className="text-lg font-semibold text-black">€45,200</span>
</div>
<div>
<span className="text-xs text-gray-500 font-medium block mb-1">Remaining</span>
<span className="text-lg font-semibold text-black">€104,800</span>
</div>
</div>
<div className="w-full bg-gray-200 border border-black rounded-full h-2 overflow-hidden">
<div className="bg-black h-full rounded-r-full border-r border-black w-[30%]"></div>
</div>
<div className="mt-4 border-t-2 border-black pt-4 flex gap-2">
<button className="flex-1 py-2 bg-white text-black border-2 border-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors" onclick="switchTab('budget')">
                            Detailed Breakdown
                        </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-white border-2 border-black rounded-xl p-4 flex flex-col justify-between hover:bg-gray-50 cursor-pointer" onclick="switchTab('milestones')">
<iconify-icon className="text-black mb-2" icon="solar:checklist-minimalistic-linear" width="1.5em"></iconify-icon>
<div>
<span className="text-xs text-gray-500 font-medium block">Milestones</span>
<span className="text-sm text-black font-semibold">2 Pending</span>
</div>
</div>

<div className="bg-white border-2 border-black rounded-xl p-4 flex flex-col justify-between hover:bg-gray-50 cursor-pointer" onclick="switchTab('license')">
<iconify-icon className="text-black mb-2" icon="solar:card-linear" width="1.5em"></iconify-icon>
<div>
<span className="text-xs text-gray-500 font-medium block">License Status</span>
<span className="text-sm text-black font-semibold flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-black border border-black"></div> Active
                            </span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-4 relative" id="tab-schedule">

<div className="absolute left-6 top-2 bottom-4 w-0.5 bg-black z-0"></div>

<div className="relative z-10 flex gap-4">
<div className="w-3 h-3 mt-1.5 rounded-full bg-white border-2 border-black shrink-0 relative z-10"></div>
<div className="flex-1 bg-gray-50 border-2 border-gray-300 rounded-xl p-3 opacity-70">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs text-gray-500 font-medium block">Mar 15-17</span>
<h3 className="text-sm font-semibold text-gray-600">Winter Testing</h3>
</div>
<span className="text-xs border border-gray-400 text-gray-600 px-1.5 py-0.5 rounded font-medium">Test</span>
</div>
<p className="text-xs text-gray-500 mb-3">Circuit de Barcelona-Catalunya</p>
<div className="flex items-center gap-1.5 text-xs text-black font-medium">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
                            Participated
                        </div>
</div>
</div>

<div className="relative z-10 flex gap-4">
<div className="w-3 h-3 mt-1.5 rounded-full bg-black border-2 border-black shrink-0 relative z-10"></div>
<div className="flex-1 bg-white border-2 border-black rounded-xl p-4">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs text-black font-bold block">Apr 12-14 (Next)</span>
<h3 className="text-base font-semibold text-black">Silverstone GP</h3>
</div>
<span className="text-xs border-2 border-black text-black px-1.5 py-0.5 rounded font-semibold">Race</span>
</div>
<p className="text-xs text-gray-600 mb-4">Silverstone Circuit, UK</p>
<div className="flex items-center gap-1.5 text-xs text-black border border-black w-fit px-2 py-1 rounded font-medium">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                            Pending Participation
                        </div>
</div>
</div>

<div className="relative z-10 flex gap-4">
<div className="w-3 h-3 mt-1.5 rounded-full bg-white border-2 border-black shrink-0 relative z-10"></div>
<div className="flex-1 bg-white border-2 border-black border-dashed rounded-xl p-4">
<div className="flex justify-between items-start mb-2">
<div>
<span className="text-xs text-gray-500 font-medium block">May 05-07</span>
<h3 className="text-sm font-semibold text-black">Spa-Francorchamps</h3>
</div>
<span className="text-xs border border-black text-black px-1.5 py-0.5 rounded font-medium">Race</span>
</div>
<p className="text-xs text-gray-500">Circuit de Spa-Francorchamps, BE</p>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-4" id="tab-budget">

<div className="flex p-1 bg-white rounded-lg border-2 border-black mb-2">
<button className="budget-tab-btn flex-1 text-xs py-1.5 rounded-md bg-black text-white font-medium shadow-sm transition-all border border-black" data-target="actual" onclick="switchBudgetTab('actual')">Actual</button>
<button className="budget-tab-btn flex-1 text-xs py-1.5 rounded-md text-gray-600 font-medium hover:text-black transition-all border border-transparent" data-target="forecast" onclick="switchBudgetTab('forecast')">Forecast</button>
<button className="budget-tab-btn flex-1 text-xs py-1.5 rounded-md text-gray-600 font-medium hover:text-black transition-all border border-transparent" data-target="estimator" onclick="switchBudgetTab('estimator')">Estimator</button>
</div>

<div className="budget-content flex flex-col gap-4" id="budget-actual">

<div className="bg-white border-2 border-black rounded-xl p-5 text-center">
<span className="text-xs text-gray-500 font-semibold block mb-1 uppercase tracking-wider">Total Season Spent</span>
<h2 className="text-3xl tracking-tight text-black font-semibold mb-4">€45,200<span className="text-sm text-gray-500 font-normal">.00</span></h2>
<div className="flex justify-between items-center text-xs font-medium px-2 mb-2">
<span className="text-gray-600">Budget: €150k</span>
<span className="text-black">Remaining: €104.8k</span>
</div>
<div className="w-full bg-gray-200 border border-black rounded-full h-2 overflow-hidden">
<div className="bg-black h-full border-r border-black rounded-r-full w-[30%]"></div>
</div>
</div>
<h4 className="text-xs font-bold text-black uppercase tracking-wider mt-2 px-1">Category Breakdown</h4>

<div className="flex flex-col gap-2">

<details className="group bg-white border-2 border-black rounded-xl overflow-hidden" open="">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-black">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-semibold text-black block">Team &amp; Program</span>
<span className="text-xs text-gray-500 font-medium">2 Items</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-black">€25,000</span>
<iconify-icon className="text-black expand-icon transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-4 pt-1 bg-gray-50 border-t-2 border-black">
<ul className="flex flex-col gap-3 pt-3">
<li className="flex justify-between text-xs font-medium">
<span className="text-gray-600">Base Entry Fee</span>
<span className="text-black">€15,000</span>
</li>
<li className="flex justify-between text-xs font-medium">
<span className="text-gray-600">Mechanics &amp; Crew</span>
<span className="text-black">€10,000</span>
</li>
</ul>
</div>
</details>

<details className="group bg-white border-2 border-black rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-black">
<iconify-icon icon="solar:flag-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-semibold text-black block">Event Fees</span>
<span className="text-xs text-gray-500 font-medium">1 Item</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-black">€12,500</span>
<iconify-icon className="text-black expand-icon transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-4 pt-1 bg-gray-50 border-t-2 border-black">
<ul className="flex flex-col gap-3 pt-3">
<li className="flex justify-between text-xs font-medium">
<span className="text-gray-600">Winter Testing Pack</span>
<span className="text-black">€12,500</span>
</li>
</ul>
</div>
</details>

<details className="group bg-white border-2 border-black rounded-xl overflow-hidden">
<summary className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-black flex items-center justify-center text-black">
<iconify-icon icon="solar:wheel-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-semibold text-black block">Tires</span>
<span className="text-xs text-gray-500 font-medium">3 Sets</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-black">€7,700</span>
<iconify-icon className="text-black expand-icon transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="px-4 pb-4 pt-1 bg-gray-50 border-t-2 border-black">
<ul className="flex flex-col gap-3 pt-3">
<li className="flex justify-between text-xs font-medium">
<span className="text-gray-600">Slicks (x2)</span>
<span className="text-black">€5,200</span>
</li>
<li className="flex justify-between text-xs font-medium">
<span className="text-gray-600">Wets (x1)</span>
<span className="text-black">€2,500</span>
</li>
</ul>
</div>
</details>
</div>
</div>

<div className="budget-content hidden flex flex-col gap-4" id="budget-forecast">
<div className="bg-white border-2 border-black rounded-xl p-5">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-black" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-semibold text-black">Season Projection</span>
</div>
<p className="text-xs text-gray-600 font-medium mb-6 leading-relaxed">Based on current spending velocity and remaining events, you are projected to finish within the baseline budget.</p>
<div className="space-y-4">
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-gray-600">Projected Final Cost</span>
<span className="text-black font-bold">€142,500</span>
</div>
<div className="w-full bg-gray-200 border border-black rounded-full h-2 overflow-hidden">
<div className="bg-gray-500 h-full border-r border-black w-[95%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1.5">
<span className="text-gray-600">Total Approved Budget</span>
<span className="text-black font-bold">€150,000</span>
</div>
<div className="w-full bg-gray-200 border border-black rounded-full h-2 overflow-hidden">
<div className="bg-black h-full w-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="budget-content hidden flex flex-col gap-4" id="budget-estimator">
<div className="bg-white border-2 border-black border-dashed rounded-xl p-5">
<div className="mb-5 border-b-2 border-black pb-5">
<span className="text-xs text-gray-500 font-semibold uppercase tracking-wider block mb-1">Estimated Total</span>
<span className="text-2xl text-black font-bold">€85,000</span>
<span className="text-xs text-gray-500 font-medium block mt-1 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> For planning purposes only
                            </span>
</div>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm font-medium mb-2">
<label className="text-black">Number of Races</label>
<span className="text-black font-semibold border border-black px-2 py-0.5 rounded text-xs">4 Races</span>
</div>
<input className="w-full" max="8" min="1" type="range" value="4"/>
</div>

<div>
<div className="flex justify-between text-sm font-medium mb-2">
<label className="text-black">Extra Tire Sets</label>
<span className="text-black font-semibold border border-black px-2 py-0.5 rounded text-xs">2 Sets</span>
</div>
<input className="w-full" max="10" min="0" type="range" value="2"/>
</div>

<div>
<label className="text-sm font-medium text-black block mb-2">Technical Support Level</label>
<div className="relative">
<select className="w-full bg-white border-2 border-black text-black font-medium text-sm rounded-lg focus:ring-black focus:border-black block p-2.5 appearance-none">
<option>Standard (Shared Eng.)</option>
<option selected="">Premium (Dedicated Eng.)</option>
<option>Elite (Full Telemetry Crew)</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-black">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-4" id="tab-milestones">

<div className="bg-white border-2 border-black rounded-xl p-5 flex items-center justify-between">
<div>
<span className="text-sm text-black font-semibold block">Season Completion</span>
<span className="text-xs text-gray-500 font-medium block mt-0.5">3 of 5 Milestones</span>
</div>
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-gray-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3"></path>
<path className="text-black" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="60, 100" strokeWidth="3"></path>
</svg>
<span className="absolute text-xs text-black font-bold">60%</span>
</div>
</div>

<div className="flex flex-col gap-2">

<div className="flex items-start gap-3 p-3 rounded-lg bg-white border-2 border-black">
<iconify-icon className="text-black mt-0.5" icon="solar:check-circle-bold" width="1.2em"></iconify-icon>
<div>
<span className="text-sm text-gray-500 font-medium block line-through">Complete Medical &amp; License</span>
<span className="text-xs text-gray-400">Jan 10, 2026</span>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-white border-2 border-black">
<iconify-icon className="text-black mt-0.5" icon="solar:check-circle-bold" width="1.2em"></iconify-icon>
<div>
<span className="text-sm text-gray-500 font-medium block line-through">Finish Winter Testing</span>
<span className="text-xs text-gray-400">Mar 17, 2026</span>
</div>
</div>

<div className="flex items-start gap-3 p-4 rounded-lg bg-white border-2 border-black shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2 bg-black"></div>
<iconify-icon className="text-black mt-0.5" icon="solar:record-circle-linear" width="1.2em"></iconify-icon>
<div className="ml-1">
<span className="text-sm text-black font-bold block">Complete First 3 Races</span>
<span className="text-xs text-black font-semibold mt-1 block">In Progress (0/3)</span>
</div>
</div>

<div className="flex items-start gap-3 p-3 rounded-lg bg-white border-2 border-dashed border-gray-400 opacity-60">
<iconify-icon className="text-gray-500 mt-0.5" icon="solar:record-circle-linear" width="1.2em"></iconify-icon>
<div>
<span className="text-sm text-gray-600 font-medium block">Score Top 10 Finish</span>
<span className="text-xs text-gray-500">Pending</span>
</div>
</div>
</div>
</div>

<div className="tab-content hidden flex flex-col gap-4" id="tab-license">

<div className="relative w-full aspect-[1.6/1] rounded-2xl overflow-hidden p-5 border-2 border-black bg-white">
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start">
<div>
<span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">Digital Credential</span>
<span className="text-lg font-bold tracking-tight text-black mt-1 block">FIA Grade B</span>
</div>
<div className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center">
<iconify-icon className="text-black" icon="solar:shield-check-linear" width="1.5em"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-0.5">Driver ID</span>
<span className="text-sm font-mono font-bold text-black">DRV-8492-XX</span>
</div>
<div className="text-right">
<span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block mb-0.5">Valid Until</span>
<span className="text-sm font-bold text-black">12 / 2026</span>
</div>
</div>
</div>
</div>

<div className="bg-white border-2 border-black rounded-xl p-4 flex gap-4 items-center">
<div className="w-10 h-10 rounded-full border border-black bg-gray-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-black" icon="solar:routing-2-linear" width="1.2em"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-black">Upgrade Path</h4>
<p className="text-xs text-gray-600 font-medium mt-1">Complete 5 more races in the current category to be eligible for <span className="text-black font-bold">Grade A</span> upgrade review.</p>
</div>
</div>

<button className="w-full py-3 bg-white hover:bg-gray-100 text-sm font-bold text-black rounded-xl border-2 border-black transition-colors flex items-center justify-center gap-2 mt-2">
<iconify-icon icon="solar:document-text-linear" width="1.2em"></iconify-icon>
                    View License Documents
                </button>
</div>
</div>
</main>


    </>
  );
}
