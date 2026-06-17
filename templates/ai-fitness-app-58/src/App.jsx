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



        // Initialize Icons
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
      

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 w-full max-w-[1600px]">

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] overflow-hidden border-[8px] mx-auto flex flex-col bg-white border-gray-900">

<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-semibold z-20">
<span>9:41</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-signal w-3.5 h-3.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-full w-3.5 h-3.5" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v4"></path><path d="M14 10v4"></path><path d="M22 14v-4"></path><path d="M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar relative pb-20 bg-gray-50">

<div className="px-5 pt-4 pb-2">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-semibold tracking-wider uppercase text-gray-400">Dashboard</div>
<div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200">
<img alt="Profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Alex+Trainer&amp;background=0F172A&amp;color=fff"/>
</div>
</div>
<h1 className="text-3xl font-semibold tracking-tight leading-tight text-gray-900">Good Morning,<br/>Alex.</h1>
</div>

<div className="px-5 mt-6 grid grid-cols-2 gap-3">
<div className="p-4 rounded-2xl shadow-sm border bg-white border-gray-100">
<div className="flex justify-between items-start mb-2">
<svg className="lucide lucide-users w-5 h-5 text-blue-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-xs font-medium text-gray-400">+2</span>
</div>
<div className="text-2xl font-semibold tracking-tight">12</div>
<div className="text-xs text-gray-500 font-medium mt-1">Active Clients</div>
</div>
<div className="p-4 rounded-2xl shadow-sm border bg-white border-gray-100">
<div className="flex justify-between items-start mb-2">
<svg className="lucide lucide-activity w-5 h-5 text-purple-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-medium text-gray-400">98%</span>
</div>
<div className="text-2xl font-semibold tracking-tight">24</div>
<div className="text-xs text-gray-500 font-medium mt-1">Workouts Sent</div>
</div>
</div>

<div className="px-5 mt-6">
<button className="w-full rounded-2xl p-4 flex items-center justify-between shadow-lg active:scale-95 transition-transform duration-200 bg-gray-900 text-white shadow-gray-200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/20">
<svg className="lucide lucide-sparkles w-5 h-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="text-left">
<div className="text-sm font-semibold">Create with AI</div>
<div className="text-xs text-gray-300">Generate personalized plans</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="px-5 mt-8">
<div className="flex justify-between items-end mb-4">
<h2 className="text-lg font-semibold tracking-tight">Recent Activity</h2>
<a className="text-sm text-blue-500 font-medium" href="#" style={{}}>See All</a>
</div>
<div className="space-y-3">

<div className="p-3 rounded-2xl shadow-sm border flex items-center gap-3 bg-white border-gray-100">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=1"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-500 border-2 rounded-full border-white" style={{}}></div>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-gray-900">Sarah Jenkins</div>
<div className="text-xs text-gray-500">Completed "Leg Day B"</div>
</div>
<div className="text-xs font-medium text-gray-400">2m ago</div>
</div>

<div className="p-3 rounded-2xl shadow-sm border flex items-center gap-3 bg-white border-gray-100">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=2"/>
<div className="absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full bg-gray-300 border-white"></div>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-gray-900">Marcus Cole</div>
<div className="text-xs text-gray-500">Pending check-in</div>
</div>
<div className="text-xs font-medium text-gray-400">2h ago</div>
</div>

<div className="p-3 rounded-2xl shadow-sm border flex items-center gap-3 bg-white border-gray-100">
<div className="relative">
<img className="w-12 h-12 rounded-full object-cover" src="https://i.pravatar.cc/150?u=8"/>
</div>
<div className="flex-1">
<div className="text-sm font-semibold text-gray-900">Emma Wu</div>
<div className="text-xs text-gray-500">Sent progress photo</div>
</div>
<svg className="lucide lucide-image w-4 h-4 text-blue-500 mr-2" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-20 glass border-t flex justify-around items-center px-4 pb-2 z-30 border-gray-200/50">
<div className="flex flex-col items-center gap-1 text-gray-900">
<svg className="lucide lucide-layout-grid w-6 h-6" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-[10px] font-medium">Home</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[10px] font-medium">Clients</span>
</div>
<div className="flex flex-col items-center gap-1 text-gray-400">
<svg className="lucide lucide-message-circle w-6 h-6" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-[10px] font-medium">Chat</span>
</div>
</div>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full z-40 bg-gray-900"></div>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] overflow-hidden border-[8px] mx-auto flex flex-col bg-white border-gray-900">

<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-semibold z-20 bg-white">
<span>9:42</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-signal w-3.5 h-3.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-full w-3.5 h-3.5" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v4"></path><path d="M14 10v4"></path><path d="M22 14v-4"></path><path d="M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="px-5 pb-4 border-b flex items-center justify-between bg-white border-gray-100">
<button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-50 text-gray-900">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="text-sm font-semibold">New Workout</div>
<div className="w-8"></div>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-gray-50 pt-6 pr-6 pb-6 pl-6">
<div className="mb-8 text-center">
<div className="w-16 h-16 bg-gradient-to-br from-blue-500 rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg to-pink-600 shadow-blue-200" style={{}}>
<svg className="lucide lucide-sparkles w-8 h-8 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Design with AI</h2>
<p className="text-sm text-gray-500 mt-2 leading-relaxed">Select parameters and let the engine build the perfect routine.</p>
</div>
<form className="space-y-6">

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">Primary Goal</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer hidden" name="goal" type="radio"/>
<div className="p-4 rounded-2xl border peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 transition-all text-center h-full flex flex-col items-center justify-center gap-2 bg-white border-gray-200" style={{}}>
<svg className="lucide lucide-dumbbell w-6 h-6 peer-checked:text-blue-500 text-gray-400" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
<span className="text-sm font-medium peer-checked:text-gray-900 text-gray-700">Hypertrophy</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer hidden" name="goal" type="radio"/>
<div className="p-4 rounded-2xl border peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500 transition-all text-center h-full flex flex-col items-center justify-center gap-2 bg-white border-gray-200" style={{}}>
<svg className="lucide lucide-flame w-6 h-6 peer-checked:text-blue-500 text-gray-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-sm font-medium peer-checked:text-gray-900 text-gray-700">Fat Loss</span>
</div>
</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500 ml-1">Equipment Available</label>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full text-sm font-medium border bg-gray-900 text-white border-gray-900">Gym Full</span>
<span className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-gray-600 border-gray-200">Dumbbells</span>
<span className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-gray-600 border-gray-200">Bodyweight</span>
<span className="px-4 py-2 rounded-full text-sm font-medium border bg-white text-gray-600 border-gray-200">Bands</span>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center ml-1 mr-1">
<label className="text-xs font-semibold uppercase tracking-wider text-gray-500">Intensity</label>
<span className="text-xs font-medium px-2 py-0.5 rounded text-blue-600 bg-blue-50" style={{}}>High</span>
</div>
<div className="h-12 rounded-2xl flex items-center px-4 border bg-white border-gray-200">
<input className="w-full h-1 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-6 [&amp;::-webkit-slider-thumb]:h-6 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-md [&amp;::-webkit-slider-thumb]:border [&amp;::-webkit-slider-thumb]:border-gray-200 bg-gray-100" type="range" value="80"/>
</div>
</div>

<div className="pt-4">
<div className="flex items-center justify-between p-4 rounded-2xl border bg-white border-gray-200">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=1"/>
<span className="text-sm font-medium">For: Sarah Jenkins</span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</form>
</div>

<div className="absolute bottom-0 w-full p-5 glass border-t z-30 border-white/20">
<button className="w-full font-semibold py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2 bg-gray-900 text-white">
<svg className="lucide lucide-wand-2 w-5 h-5" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>
                    Generate Workout
                </button>
</div>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full z-40 bg-gray-900"></div>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] overflow-hidden border-[8px] mx-auto flex flex-col bg-white border-gray-900">

<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-semibold z-20">
<span>9:45</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-signal w-3.5 h-3.5" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3.5 h-3.5" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-full w-3.5 h-3.5" data-lucide="battery-full" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v4"></path><path d="M14 10v4"></path><path d="M22 14v-4"></path><path d="M6 10v4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar bg-gray-50">

<div className="px-6 pt-6 pb-8 rounded-b-[2.5rem] shadow-sm z-10 relative bg-white">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs font-semibold uppercase tracking-wider mb-1 text-gray-400">Thursday, Nov 14</div>
<h1 className="text-2xl font-semibold tracking-tight text-gray-900">Lower BodyStrength</h1>
</div>
<div className="w-12 h-12 relative flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">
<path className="text-slate-100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" style={{}}></path>
<path className="text-blue-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="30, 100" strokeWidth="3" style={{}}></path>
</svg>
<span className="text-[10px] font-semibold absolute text-blue-500" style={{}}>30%</span>
</div>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-xs font-medium text-gray-600">45 min</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-flame w-4 h-4 text-gray-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-xs font-medium text-gray-600">320 kcal</span>
</div>
</div>
</div>

<div className="p-5 space-y-4">
<div className="text-xs font-semibold uppercase tracking-wider ml-1 text-gray-400">Warm Up</div>

<div className="rounded-2xl p-4 flex items-center gap-4 opacity-60 bg-white">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white" style={{}}>
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold line-through text-gray-900">Dynamic Stretching</div>
<div className="text-xs text-gray-500">5 mins • Light intensity</div>
</div>
</div>
<div className="text-xs font-semibold uppercase tracking-wider ml-1 mt-6 text-gray-400">Main Circuit</div>

<div className="rounded-2xl p-0 shadow-sm border overflow-hidden bg-white border-gray-100">
<div className="p-4 flex items-start gap-4">
<button className="w-6 h-6 rounded-full border-2 mt-1 hover:border-blue-500 transition-colors border-gray-300" style={{}}></button>
<div className="flex-1">
<div className="flex justify-between">
<div className="text-sm font-semibold text-gray-900">Barbell Squat</div>
<svg className="lucide lucide-info w-4 h-4 text-gray-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
<div className="text-xs text-gray-500 mt-1">3 Sets • 10-12 Reps</div>

<div className="mt-4 space-y-2">
<div className="flex items-center gap-3 text-xs">
<span className="w-8 font-medium text-gray-400">Set 1</span>
<div className="px-3 py-1.5 rounded-lg font-medium min-w-[60px] text-center bg-gray-50 text-gray-700">45kg</div>
<div className="px-3 py-1.5 rounded-lg font-medium min-w-[60px] text-center bg-gray-50 text-gray-700">12 reps</div>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500 ml-auto" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex items-center gap-3 text-xs">
<span className="w-8 font-medium text-gray-400">Set 2</span>
<div className="px-3 py-1.5 rounded-lg font-medium min-w-[60px] text-center bg-gray-50 text-gray-400">kg</div>
<div className="px-3 py-1.5 rounded-lg font-medium min-w-[60px] text-center bg-gray-50 text-gray-400">reps</div>
</div>
</div>
</div>
</div>

<div className="px-4 py-2 border-t flex items-center justify-center gap-2 text-xs font-medium bg-gray-50 border-gray-100 text-blue-600" style={{}}>
<svg className="lucide lucide-play-circle w-3.5 h-3.5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> Watch Technique
                        </div>
</div>

<div className="rounded-2xl p-4 flex items-start gap-4 border shadow-sm bg-white border-gray-100">
<button className="w-6 h-6 rounded-full border-2 mt-1 border-gray-300"></button>
<div className="flex-1">
<div className="text-sm font-semibold text-gray-900">Romanian Deadlift</div>
<div className="text-xs text-gray-500 mt-1">3 Sets • 12 Reps</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6">
<button className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl bg-gray-900 text-white">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
</div>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full z-40 bg-gray-900"></div>
</div>

<div className="relative w-full max-w-[375px] h-[812px] rounded-[40px] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] overflow-hidden border-[8px] mx-auto flex flex-col bg-white border-gray-900">

<div className="h-12 w-full flex justify-between items-center px-6 text-xs font-semibold z-20 glass sticky top-0 border-b border-gray-100">
<div className="flex items-center gap-3 py-2">
<img className="w-8 h-8 rounded-full" src="https://i.pravatar.cc/150?u=1"/>
<div>
<div className="text-xs font-semibold text-gray-900">Sarah Jenkins</div>
<div className="text-[10px] text-gray-500 font-medium">Online</div>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-5 h-5 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar p-4 bg-gray-50">

<div className="text-center py-4">
<span className="text-[10px] font-medium uppercase tracking-wide text-gray-400">Today</span>
</div>

<div className="flex items-end gap-2 mb-4">
<img className="w-6 h-6 rounded-full mb-1" src="https://i.pravatar.cc/150?u=1"/>
<div className="px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border max-w-[75%] bg-white border-gray-100">
<p className="text-sm leading-relaxed text-gray-700">Hey Alex! Just finished the leg workout. The split squats were killer today 😅</p>
</div>
</div>

<div className="flex items-end gap-2 mb-4 justify-end">
<div className="bg-blue-500 px-4 py-3 rounded-2xl rounded-br-none shadow-sm max-w-[75%]" style={{}}>
<p className="text-sm leading-relaxed text-white">Nice work Sarah! 💪 Did you manage to increase the weight on the squats?</p>
</div>
</div>

<div className="flex items-end gap-2 mb-4">
<img className="w-6 h-6 rounded-full mb-1" src="https://i.pravatar.cc/150?u=1"/>
<div className="flex flex-col gap-1 max-w-[75%]">
<div className="p-2 rounded-2xl rounded-bl-none shadow-sm border overflow-hidden bg-white border-gray-100">
<img className="w-full h-40 object-cover rounded-xl" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
<span className="text-[10px] ml-1 text-gray-400">Form check? felt a bit weird</span>
</div>
</div>

<div className="mt-8 mb-4">
<div className="flex items-center justify-between mb-3 px-1">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-400">Progress Feed</span>
<span className="text-xs text-blue-500 font-medium" style={{}}>View All</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute bottom-0 w-full p-2 bg-gradient-to-t to-transparent from-black/60" style={{}}>
<p className="text-[10px] font-medium text-white">Week 4 Check-in</p>
</div>
</div>
<div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200">
<img className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute bottom-0 w-full p-2 bg-gradient-to-t to-transparent from-black/60" style={{}}>
<p className="text-[10px] font-medium text-white">Back progress</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-3 border-t pb-8 bg-white border-gray-100">
<div className="flex items-center gap-2 rounded-full px-4 py-2 bg-gray-100">
<button className="transition text-gray-400 hover:text-gray-600">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<input className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-gray-400 text-gray-900" placeholder="Message..." type="text"/>
<button className="text-blue-500 transition hover:text-blue-600" style={{}}>
<svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</div>

<div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-32 h-1 rounded-full z-40 bg-gray-900"></div>
</div>
</div>


    </>
  );
}
