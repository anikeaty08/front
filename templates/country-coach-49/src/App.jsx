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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl opacity-60"></div>
<div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-3xl opacity-50"></div>
</div>

<nav className="sticky top-4 z-50 w-[95%] sm:w-[90%] max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-stone-200/60 rounded-full shadow-sm shadow-stone-200/20 px-6 mt-4">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center text-orange-50 font-bold tracking-tighter shadow-md shadow-stone-200 group-hover:scale-105 transition-transform duration-300">
                    CC
                </div>
<span className="font-semibold text-stone-800 tracking-tight">Country Coach</span>
</div>

<div className="hidden md:flex items-center space-x-1">
<a className="px-4 py-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#dashboard">Dashboard</a>
<a className="px-4 py-2 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#study">Study</a>
<a className="px-4 py-2 text-sm font-medium text-stone-900 bg-white shadow-sm rounded-full border border-stone-100" href="#admin">Admin</a>
</div>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-100 rounded-full text-orange-700">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:shield" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold">Admin</span>
</div>
<button className="w-9 h-9 rounded-full bg-stone-200 overflow-hidden focus:outline-none ring-2 ring-white shadow-sm hover:ring-orange-200 transition-all">
<img alt="User" className="w-full h-full object-cover bg-amber-100" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 space-y-20 pt-10">

<section className="" id="admin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div className="">
<h1 className="text-3xl font-serif font-medium text-stone-800 tracking-tight">Content Manager</h1>
<p className="text-stone-500 mt-1">Add, edit, or remove countries and quiz data.</p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-xl text-sm font-medium hover:bg-stone-50 transition-colors shadow-sm flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                        Export
                    </button>
<button className="px-4 py-2 bg-stone-800 text-white rounded-xl text-sm font-medium hover:bg-stone-900 transition-colors shadow-lg shadow-stone-200 flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        New Entry
                    </button>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-4 bg-white rounded-[2rem] border border-stone-200/80 shadow-sm overflow-hidden flex flex-col h-[600px]">

<div className="p-4 border-b border-stone-100 sticky top-0 bg-white z-10">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</span>
<input className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border-none rounded-xl text-sm text-stone-700 placeholder:text-stone-400 focus:ring-2 focus:ring-stone-200 focus:outline-none transition-all" placeholder="Search countries..." type="text"/>
</div>
<div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
<button className="px-3 py-1 bg-stone-800 text-white text-xs font-semibold rounded-full whitespace-nowrap">All</button>
<button className="px-3 py-1 bg-stone-100 text-stone-500 hover:text-stone-700 text-xs font-semibold rounded-full whitespace-nowrap transition-colors">Europe</button>
<button className="px-3 py-1 bg-stone-100 text-stone-500 hover:text-stone-700 text-xs font-semibold rounded-full whitespace-nowrap transition-colors">Asia</button>
<button className="px-3 py-1 bg-stone-100 text-stone-500 hover:text-stone-700 text-xs font-semibold rounded-full whitespace-nowrap transition-colors">Africa</button>
</div>
</div>

<div className="overflow-y-auto flex-1 p-2 space-y-1">

<div className="group flex items-center justify-between p-3 rounded-xl bg-teal-50 border border-teal-100 cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl shadow-sm border border-stone-100">
                                    🇯🇵
                                </div>
<div className="">
<h4 className="text-sm font-semibold text-stone-800">Japan</h4>
<p className="text-xs text-stone-500">Asia • Capital: Tokyo</p>
</div>
</div>
<div className="text-teal-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-xl border border-stone-100">
                                    🇪🇸
                                </div>
<div className="">
<h4 className="text-sm font-semibold text-stone-700">Spain</h4>
<p className="text-xs text-stone-400">Europe • Capital: Madrid</p>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-xl border border-stone-100">
                                    🇧🇷
                                </div>
<div>
<h4 className="text-sm font-semibold text-stone-700">Brazil</h4>
<p className="text-xs text-stone-400">S. America • Capital: Brasília</p>
</div>
</div>
</div>

<div className="group flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 border border-transparent hover:border-stone-100 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-xl border border-stone-100">
                                    🇨🇦
                                </div>
<div>
<h4 className="text-sm font-semibold text-stone-700">Canada</h4>
<p className="text-xs text-stone-400">N. America • Capital: Ottawa</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-white rounded-[2rem] border border-stone-200 shadow-xl shadow-stone-200/40 p-8 relative">

<div className="flex justify-between items-start mb-8 pb-6 border-b border-stone-100">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="bg-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md">Editing</span>
<span className="text-stone-400 text-xs">ID: #JP-001</span>
</div>
<h2 className="text-2xl font-semibold text-stone-800">Japan</h2>
</div>
<div className="flex gap-2">
<button className="w-9 h-9 flex items-center justify-center text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trash-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-6">

<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Country Name</label>
<input className="custom-input w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 font-medium placeholder-stone-400 transition-all hover:bg-white focus:bg-white focus:border-teal-500" type="text" value="Japan"/>
</div>
<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Capital City</label>
<input className="custom-input w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 font-medium placeholder-stone-400 transition-all hover:bg-white focus:bg-white focus:border-teal-500" type="text" value="Tokyo"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Region</label>
<div className="relative">
<select className="custom-input w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 font-medium appearance-none cursor-pointer hover:bg-white focus:bg-white focus:border-teal-500">
<option>Asia</option>
<option>Europe</option>
<option>Africa</option>
<option>Americas</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-stone-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Currency</label>
<input className="custom-input w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-stone-800 font-medium transition-all hover:bg-white focus:bg-white focus:border-teal-500" type="text" value="Yen (¥)"/>
</div>
</div>
</div>

<div className="space-y-6">

<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Flag / Image</label>
<div className="flex items-center gap-4">
<div className="w-24 h-16 bg-white border-2 border-dashed border-stone-200 rounded-xl flex items-center justify-center text-4xl shadow-sm relative overflow-hidden group cursor-pointer hover:border-teal-400 transition-colors">
                                        🇯🇵
                                        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:upload" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12m5-7l-5-5l-5 5m14 7v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex-1">
<button className="text-xs font-semibold text-teal-600 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-2 rounded-lg transition-colors mb-1">Replace Image</button>
<p className="text-[10px] text-stone-400">Recommended: SVG or PNG, max 1MB.</p>
</div>
</div>
</div>

<div>
<label className="block text-xs font-bold text-stone-500 uppercase tracking-wide mb-2">Memory Hint / Fact</label>
<textarea className="custom-input w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-xl text-sm text-stone-800 font-medium placeholder-stone-400 resize-none transition-all hover:bg-white focus:bg-white focus:border-teal-500" rows="4">Land of the Rising Sun. Famous for cherry blossoms (sakura) and Mount Fuji.</textarea>
</div>

<div className="flex items-center gap-6 pt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 rounded border border-stone-300 bg-white flex items-center justify-center group-hover:border-teal-500 transition-colors">
<div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
</div>
<span className="text-sm font-medium text-stone-600 group-hover:text-stone-900">Active</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-5 h-5 rounded border border-stone-300 bg-white flex items-center justify-center group-hover:border-teal-500 transition-colors">

</div>
<span className="text-sm font-medium text-stone-600 group-hover:text-stone-900">Featured</span>
</label>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-stone-100 flex justify-end gap-3">
<button className="px-6 py-2.5 text-stone-500 font-semibold hover:text-stone-800 transition-colors">Cancel</button>
<button className="px-8 py-2.5 bg-stone-800 text-white font-bold rounded-xl shadow-lg shadow-stone-300 hover:bg-teal-600 hover:shadow-teal-200 hover:-translate-y-0.5 transition-all flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:save" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"></path></g></svg>
                            Save Changes
                        </button>
</div>
</div>
</div>
</section>

<section className="pt-10" id="dashboard">

<div className="mb-12 text-center md:text-left">
<h1 className="text-4xl sm:text-5xl font-serif font-medium text-stone-800 tracking-tight mb-3">Good morning, Admin.</h1>
<p className="text-stone-500 text-lg">Your content dashboard is ready.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">

<div className="group relative bg-white p-6 rounded-[1.5rem] border border-stone-100 shadow-sm">
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Total Countries</p>
<p className="text-3xl font-bold text-stone-800 mt-2">195</p>
</div>

<div className="group relative bg-white p-6 rounded-[1.5rem] border border-stone-100 shadow-sm">
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Pending Review</p>
<p className="text-3xl font-bold text-orange-600 mt-2">3</p>
</div>

<div className="group relative bg-white p-6 rounded-[1.5rem] border border-stone-100 shadow-sm">
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Active Quizzes</p>
<p className="text-3xl font-bold text-stone-800 mt-2">12</p>
</div>

<div className="group relative bg-white p-6 rounded-[1.5rem] border border-stone-100 shadow-sm">
<p className="text-xs font-bold text-stone-400 uppercase tracking-wide">User Reports</p>
<p className="text-3xl font-bold text-stone-800 mt-2">0</p>
</div>
</div>
</section>

<footer className="border-t border-stone-200/60 py-16 text-center mt-20">
<div className="flex items-center justify-center gap-3 mb-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 bg-stone-800 rounded-lg flex items-center justify-center text-white text-xs font-bold">CC</div>
<span className="font-bold text-stone-800 text-base">Country Coach</span>
</div>
<p className="text-xs text-stone-400">© 2023 Country Coach. Admin Panel.</p>
</footer>
</main>

    </>
  );
}
