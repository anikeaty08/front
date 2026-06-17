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



        // Initialize Lucide icons with custom stroke width for thinner, more elegant look
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<input className="hidden peer" id="sidebar-toggle" type="checkbox"/>

<label className="fixed left-0 top-0 bottom-0 w-14 bg-white border-r border-slate-200 flex flex-col items-center py-4 z-40 cursor-pointer hover:bg-slate-50 transition-colors shadow-[4px_0_24px_rgba(0,0,0,0.02)] peer-checked:hidden" htmlFor="sidebar-toggle">
<div className="w-8 h-8 flex items-center justify-center text-blue-600 mb-8">
<i className="w-6 h-6" data-lucide="dna"></i>
</div>
<div className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 mb-2 transition-colors">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
</div>
<div className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 mb-2 transition-colors">
<i className="w-5 h-5" data-lucide="flask-conical"></i>
</div>
<div className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 mb-2 transition-colors">
<i className="w-5 h-5" data-lucide="line-chart"></i>
</div>
<div className="mt-auto p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
<i className="w-5 h-5" data-lucide="settings"></i>
</div>
</label>

<div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-slate-200 z-50 transform -translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-in-out shadow-2xl flex flex-col">
<div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tight">
<i className="w-5 h-5 text-blue-600" data-lucide="dna"></i>
                BioCore OS
            </div>
<label className="p-1.5 rounded-md text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer transition-colors" htmlFor="sidebar-toggle">
<i className="w-4 h-4" data-lucide="panel-left-close"></i>
</label>
</div>
<nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">Production</div>
<a className="flex items-center gap-3 px-2 py-2 rounded-md bg-blue-50 text-blue-700 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                Active Batches
            </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="flask-conical"></i>
                Cell Lines
            </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="microscope"></i>
                Assay Results
            </a>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-8 mb-3 px-2">Analytics</div>
<a className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="line-chart"></i>
                Trending
            </a>
<a className="flex items-center gap-3 px-2 py-2 rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-spreadsheet"></i>
                Reports
            </a>
</nav>
</div>

<main className="flex-1 flex flex-col min-w-0 pl-14 transition-all duration-300">

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex flex-col">
<nav className="flex text-sm font-medium text-slate-500 mb-1">
<ol className="flex items-center space-x-2">
<li><a className="hover:text-slate-900 transition-colors" href="#">Production</a></li>
<li><i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-right"></i></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Mammalian</a></li>
<li><i className="w-3.5 h-3.5 text-slate-400" data-lucide="chevron-right"></i></li>
<li className="text-slate-900">Current Run</li>
</ol>
</nav>
<div className="flex items-center gap-4">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">CD CHO 050</h1>
<div className="h-5 w-px bg-slate-300"></div>

<div className="group relative flex items-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 cursor-pointer transition-colors">
<i className="w-4 h-4 text-slate-500" data-lucide="beaker"></i>
                        Batch 1245
                        <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>

<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Stable
                        <i className="w-3.5 h-3.5 text-emerald-600/70 ml-0.5" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-sm font-medium text-slate-500 flex items-center gap-2 mr-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
                    April 25, 2024
                </div>
<button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<i className="w-4 h-4" data-lucide="download"></i>
                    Export
                </button>
<div className="h-6 w-px bg-slate-200 mx-1"></div>
<button className="relative p-1.5 text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white text-sm font-semibold shadow-sm border border-slate-200/50 cursor-pointer ml-1">
                    JD
                </div>
</div>
</header>

<div className="p-6 max-w-[1600px] mx-auto w-full space-y-6">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900 mb-4">Daily Status Overview</h2>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="group bg-white rounded-xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-blue-200 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-medium text-slate-700">Daily Growth</h3>
<p className="text-xs text-slate-500 mt-0.5">TCD Change (24h)</p>
</div>
<div className="p-1.5 bg-blue-50 rounded-md text-blue-600">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="text-3xl font-semibold tracking-tight text-slate-900">+1.45</span>
<span className="text-sm font-medium text-slate-500">e6 cells/mL</span>
</div>
<div className="my-4 border-t border-slate-100"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Current Density</span>
<span className="font-medium text-slate-900">4.82 e6</span>
</div>
<div className="flex justify-between items-center text-sm mt-2">
<span className="text-slate-500">Phase</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Log Phase</span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-medium text-slate-700">Viability</h3>
<p className="text-xs text-slate-500 mt-0.5">Cell health ratio</p>
</div>
<div className="p-1.5 bg-slate-50 rounded-md text-slate-500">
<i className="w-4 h-4" data-lucide="activity"></i>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">96.8</span>
<span className="text-lg font-medium text-slate-500">%</span>
<span className="inline-flex items-center text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded ml-1">
<i className="w-3 h-3 mr-0.5" data-lucide="arrow-up-right"></i> 1.9%
                            </span>
</div>
<div className="my-4 border-t border-slate-100"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Target Spec</span>
<span className="font-medium text-slate-900">&gt; 90.0%</span>
</div>
<div className="flex justify-between items-center text-sm mt-2">
<span className="text-slate-500">Status</span>
<span className="flex items-center gap-1.5 text-emerald-600 font-medium text-xs">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i> Optimal
                            </span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-medium text-slate-700">Glucose</h3>
<p className="text-xs text-slate-500 mt-0.5">Metabolic indicator</p>
</div>
<div className="p-1.5 bg-amber-50 rounded-md text-amber-600">
<i className="w-4 h-4" data-lucide="droplets"></i>
</div>
</div>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="text-3xl font-semibold tracking-tight text-slate-900">2.4</span>
<span className="text-sm font-medium text-slate-500">g/L</span>
</div>
<div className="my-4 border-t border-slate-100"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Consumption Rate</span>
<span className="font-medium text-slate-900">0.8 g/L/day</span>
</div>
<div className="flex justify-between items-center text-sm mt-2">
<span className="text-slate-500">Feed Action</span>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                Scheduled Today
                            </span>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300">
<div className="flex justify-between items-start mb-1">
<div>
<h3 className="text-sm font-medium text-slate-700">Glyco Quality</h3>
<p className="text-xs text-slate-500 mt-0.5">Estimated profile</p>
</div>
<div className="p-1.5 bg-indigo-50 rounded-md text-indigo-600">
<i className="w-4 h-4" data-lucide="gem"></i>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-900">92</span>
<span className="text-lg font-medium text-slate-500">%</span>
<span className="inline-flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded ml-1">
<i className="w-3 h-3 mr-0.5" data-lucide="minus"></i> 0.0%
                            </span>
</div>
<div className="my-4 border-t border-slate-100"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-500">Target Spec</span>
<span className="font-medium text-slate-900">&gt; 90.0%</span>
</div>
<div className="flex justify-between items-center text-sm mt-2">
<span className="text-slate-500">Confidence</span>
<span className="flex items-center gap-1.5 text-slate-600 font-medium text-xs">
                                High <i className="w-3.5 h-3.5 text-slate-400 cursor-help" data-lucide="help-circle"></i>
</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col">

<div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900">Metabolic Profile &amp; Growth Kinetics</h2>
<p className="text-sm text-slate-500 mt-0.5">Multi-parameter overlay vs cultivation time</p>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-700 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
<i className="w-4 h-4 text-slate-400" data-lucide="clock"></i>
                            Time: Days
                            <i className="w-4 h-4 text-slate-400 ml-1" data-lucide="chevron-down"></i>
</div>
<button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-700 hover:bg-slate-50 bg-white shadow-sm transition-colors">
<i className="w-4 h-4" data-lucide="maximize-2"></i>
</button>
</div>
</div>

<div className="p-6 relative">

<div className="absolute left-6 top-6 bottom-16 w-8 flex flex-col justify-between text-xs font-medium text-slate-400 items-end pr-2 z-10">
<span>8</span>
<span>6</span>
<span>4</span>
<span>2</span>
<span>0</span>
</div>

<div className="absolute right-6 top-6 bottom-16 w-8 flex flex-col justify-between text-xs font-medium text-slate-400 items-start pl-2 z-10">
<span>40</span>
<span>30</span>
<span>20</span>
<span>10</span>
<span>0</span>
</div>
<div className="ml-10 mr-10 relative h-[380px]">

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">

<line stroke="#f1f5f9" stroke-dasharray="4 4" strokeWidth="1.5" x1="0" x2="100%" y1="0%" y2="0%"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="100%" y1="25%" y2="25%"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="100%" y1="50%" y2="50%"></line>
<line stroke="#f1f5f9" strokeWidth="1" x1="0" x2="100%" y1="75%" y2="75%"></line>
<line stroke="#e2e8f0" strokeWidth="1.5" x1="0" x2="100%" y1="100%" y2="100%"></line>

<g stroke="#f8fafc" strokeWidth="1">
<line x1="10%" x2="10%" y1="0" y2="100%"></line>
<line x1="20%" x2="20%" y1="0" y2="100%"></line>
<line x1="30%" x2="30%" y1="0" y2="100%"></line>
<line x1="40%" x2="40%" y1="0" y2="100%"></line>
<line x1="50%" x2="50%" y1="0" y2="100%"></line>
<line x1="60%" x2="60%" y1="0" y2="100%"></line>
<line x1="70%" x2="70%" y1="0" y2="100%"></line>
<line x1="80%" x2="80%" y1="0" y2="100%"></line>
<line x1="90%" x2="90%" y1="0" y2="100%"></line>
</g>


<path d="M0,20 C100,30 200,50 300,100 C400,150 500,280 600,320" fill="none" stroke="#0ea5e9" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,350 C150,340 250,200 350,150 C450,100 550,80 600,90" fill="none" stroke="#f43f5e" strokeLinecap="round" strokeWidth="2.5" vector-effect="non-scaling-stroke"></path>

<path d="M0,370 C200,360 300,250 400,180 C500,100 550,40 600,20" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="3" vector-effect="non-scaling-stroke"></path>

<path d="M0,10 C300,15 450,20 600,60" fill="none" stroke="#94a3b8" stroke-dasharray="6 4" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<line stroke="#cbd5e1" stroke-dasharray="4 4" strokeWidth="1.5" x1="45%" x2="45%" y1="0" y2="100%"></line>

<circle cx="45%" cy="210" fill="#0ea5e9" r="4" stroke="#fff" strokeWidth="2"></circle>
<circle cx="45%" cy="115" fill="#f43f5e" r="4" stroke="#fff" strokeWidth="2"></circle>
<circle cx="45%" cy="135" fill="#6366f1" r="4" stroke="#fff" strokeWidth="2"></circle>
<circle cx="45%" cy="18" fill="#94a3b8" r="4" stroke="#fff" strokeWidth="2"></circle>
</svg>

<div className="absolute left-[45%] top-[25%] ml-4 bg-white/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-200 rounded-lg p-3 w-56 z-20 font-medium">
<div className="flex justify-between items-center mb-2 pb-2 border-b border-slate-100">
<span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Day 3, 13:55h</span>
<i className="w-3 h-3 text-slate-400 hover:text-slate-600 cursor-pointer" data-lucide="share"></i>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-600">
<div className="w-2 h-2 rounded-full bg-rose-500"></div> Lactate
                                    </div>
<span className="text-slate-900">1.38 <span className="text-xs text-slate-500 font-normal">g/L</span></span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-600">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div> Glutamine
                                    </div>
<span className="text-slate-900">0.41 <span className="text-xs text-slate-500 font-normal">g/L</span></span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-slate-600">
<div className="w-2 h-2 rounded-full bg-amber-500"></div> Ammonia
                                    </div>
<span className="text-slate-900">0.38 <span className="text-xs text-slate-500 font-normal">g/L</span></span>
</div>
<div className="flex justify-between items-center pt-1 border-t border-slate-50">
<div className="flex items-center gap-2 text-slate-800 font-semibold">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div> Cell Density
                                    </div>
<span className="text-indigo-600 font-semibold">2.9e6 <span className="text-xs text-indigo-400 font-normal">/mL</span></span>
</div>
</div>
</div>
</div>

<div className="ml-10 mr-10 mt-4 flex justify-between text-xs font-medium text-slate-400">
<span>0</span>
<span>2</span>
<span>4</span>
<span>6</span>
<span>8</span>
<span>10</span>
<span>12</span>
<span>14</span>
<span>16</span>
<span>18</span>
<span>20</span>
<span>22</span>
<span>24</span>
</div>

<div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded border border-slate-300 bg-white flex items-center justify-center"></div> Glucose
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded bg-rose-500 border border-rose-600 flex items-center justify-center"><i className="w-2 h-2 text-white" data-lucide="check"></i></div> Lactate
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded bg-emerald-500 border border-emerald-600 flex items-center justify-center"><i className="w-2 h-2 text-white" data-lucide="check"></i></div> Glutamine
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded bg-amber-400 border border-amber-500 flex items-center justify-center"></div> Ammonia
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded bg-indigo-500 border border-indigo-600 flex items-center justify-center"><i className="w-2 h-2 text-white" data-lucide="check"></i></div> Cell Density
                        </div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-900 transition-colors">
<div className="w-3 h-3 rounded bg-slate-200 border border-slate-300 flex items-center justify-center"></div> Viability
                        </div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col">
<h2 className="text-base font-semibold tracking-tight text-slate-900 mb-6">Titer Tracking</h2>
<div className="flex-1 relative min-h-[200px] flex items-center justify-center border border-slate-100 rounded-lg bg-slate-50/50">

<svg className="w-full h-full p-4 overflow-visible" preserveaspectratio="none">
<g stroke="#e2e8f0" stroke-dasharray="2 2" strokeWidth="1">
<line x1="0" x2="100%" y1="20%" y2="20%"></line>
<line x1="0" x2="100%" y1="50%" y2="50%"></line>
<line x1="0" x2="100%" y1="80%" y2="80%"></line>
</g>
<path d="M10,180 C50,150 100,100 200,80 C300,60 350,20 400,10" fill="none" stroke="#6366f1" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M10,180 C80,160 150,130 250,90 C320,60 380,40 400,30" fill="none" stroke="#93c5fd" strokeLinecap="round" strokeWidth="1.5" vector-effect="non-scaling-stroke"></path>
<path d="M10,10 C100,5 200,10 400,30" fill="none" stroke="#f43f5e" stroke-dasharray="4 4" strokeLinecap="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
<div className="absolute -left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium text-slate-400 tracking-wider uppercase">Titer (g/L)</div>
<div className="absolute -right-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-medium text-slate-400 tracking-wider uppercase">% Viability</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Feed Strategy</h2>
<span className="text-sm font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Day 3</span>
</div>
<div className="space-y-1">

<label className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-slate-300 bg-white group-hover:border-blue-500 transition-colors flex items-center justify-center"></div>
<span className="font-medium text-slate-700 group-hover:text-slate-900">Feed A 3%</span>
</div>
<span className="text-slate-900 font-semibold">2.0 <span className="text-sm text-slate-500 font-normal">L</span></span>
</label>
<label className="group flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded border border-slate-300 bg-white group-hover:border-blue-500 transition-colors flex items-center justify-center"></div>
<span className="font-medium text-slate-700 group-hover:text-slate-900">Feed B 0.3%</span>
</div>
<span className="text-slate-900 font-semibold">0.2 <span className="text-sm text-slate-500 font-normal">L</span></span>
</label>
</div>
<button className="mt-4 w-full py-2.5 flex items-center justify-center gap-2 border border-dashed border-slate-300 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-800 hover:border-slate-400 hover:bg-slate-50 transition-all">
<i className="w-4 h-4" data-lucide="plus"></i>
                        Add supplement
                    </button>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-center mb-6">
<h2 className="text-base font-semibold tracking-tight text-slate-900">Cultivation Setup</h2>
<i className="w-4 h-4 text-slate-400" data-lucide="settings-2"></i>
</div>
<div className="grid grid-cols-[1fr_auto] gap-y-3.5 text-base">
<div className="text-slate-500">Medium</div>
<div className="font-medium text-slate-900 text-right">CD-CHO</div>
<div className="text-slate-500">Passage</div>
<div className="font-medium text-slate-900 text-right">P5</div>
<div className="text-slate-500">Current Phase</div>
<div className="font-medium text-slate-900 text-right">Log Phase</div>
<div className="col-span-2 border-t border-slate-100 my-1"></div>
<div className="text-slate-500">Temperature</div>
<div className="font-medium text-slate-900 text-right">37.0 °C</div>
<div className="text-slate-500 flex items-center gap-1">CO<sub className="text-[10px] relative top-1">2</sub></div>
<div className="font-medium text-slate-900 text-right">5.0 %</div>
<div className="text-slate-500">Base Strategy</div>
<div className="font-medium text-slate-900 text-right">A3 0.3%</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-sm">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
</span>
<span className="font-medium text-emerald-700">System Parameters Stable</span>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
