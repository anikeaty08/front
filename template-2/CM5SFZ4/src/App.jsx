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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    lucide.createIcons();
  
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
      
<div className="w-full max-w-6xl flex flex-col xl:flex-row gap-12 items-center justify-center">

<div className="relative h-[740px] w-[360px] overflow-hidden flex flex-col bg-white border-gray-200 border rounded-[32px] mr-auto ml-auto shadow-2xl -translate-y-4">
<div className="flex pt-6 pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-9 h-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1080&q=80" />
<span className="text-sm font-medium">Sarah Chen</span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-search text-gray-500 hover:text-gray-700" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
<svg className="lucide lucide-bell text-gray-500 hover:text-gray-700" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
<div className="mx-6 mt-5 p-6 rounded-2xl bg-gradient-to-br from-violet-200 to-violet-400/80 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width= bg-[url(https://images.unsplash.com/photo-1676022763096-a1ad12b2e370?w=1080&q=80)] bg-cover" cx="30" cy="30" fill="none" fillOpacity="0.1" fillRule="evenodd" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"></div>
<h3 className="relative z-10 text-lg font-medium leading-snug tracking-tight">Drive innovation<br />through collaboration</h3>
<div className="relative z-10 mt-6 flex items-center justify-between">
<div className="">
<p className="text-xs text-violet-900/70">4h 12m today</p>
<p className="text-xs font-medium text-violet-900">Sprint milestone reached</p>
</div>
<div className="w-11 h-11 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
<svg className="lucide lucide-trending-up text-violet-900 w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
</div>
</div>
<div className="flex items-center justify-between mx-6 mt-6">
<h4 className="font-medium">Active Tasks <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-900 text-white">3</span></h4>
<div className="flex items-center gap-4">
<svg className="lucide lucide-plus text-gray-500 hover:text-gray-700" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<button className="text-gray-500 hover:text-gray-700 text-sm">View all</button>
</div>
</div>

<div className="mx-6 mt-4 bg-white rounded-2xl border border-gray-100 p-5">
<div className="flex items-start justify-between">
<div className="flex gap-3 items-start">
<svg className="lucide lucide-code w-4 h-4 text-violet-600 mt-0.5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="">
<h5 className="font-medium">API Integration</h5>
<div className="flex items-center gap-2 mt-1">
<svg className="lucide lucide-clock w-3.5 h-3.5 text-gray-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-xs text-gray-500">In Progress</span>
<span className="px-2 py-0.5 rounded-full bg-orange-100 text-xs text-orange-700">Medium</span>
</div>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</div>
<div className="h-2 rounded-full bg-gray-100 mt-4 overflow-hidden">
<div className="h-full bg-violet-500 w-3/4 transition-all duration-300"></div>
</div>
<div className="flex items-center justify-between mt-4 text-xs text-gray-500">
<div className="flex -space-x-1.5">
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=28&h=28&fit=crop&crop=face" />
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=28&h=28&fit=crop&crop=face" />
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar-days w-3.5 h-3.5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span>Mar 15</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span>5</span>
</div>
</div>
</div>
<div className="mx-6 mt-3 bg-white rounded-2xl border border-gray-100 p-5">
<div className="flex items-start justify-between">
<div className="flex gap-3 items-start">
<svg className="lucide lucide-palette w-4 h-4 text-blue-600 mt-0.5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="13.5" cy="6.5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" fill="currentColor"></circle></svg>
<div className="">
<h5 className="font-medium">Design System 2.0</h5>
<div className="flex items-center gap-2 mt-1">
<svg className="lucide lucide-play-circle w-3.5 h-3.5 text-gray-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="text-xs text-gray-500">Starting</span>
<span className="px-2 py-0.5 rounded-full bg-red-100 text-xs text-red-700">Critical</span>
</div>
</div>
</div>
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</div>
<div className="h-2 rounded-full bg-gray-100 mt-4 overflow-hidden">
<div className="h-full bg-blue-500 w-1/4"></div>
</div>
<div className="flex items-center justify-between mt-4 text-xs text-gray-500">
<div className="flex -space-x-1.5">
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=28&h=28&fit=crop&crop=face" />
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">+2</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar-days w-3.5 h-3.5" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path><path></path><path></path><path></path><path></path><path></path><path></path></svg>
<span className="">Mar 22</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span>8</span>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0">
<div className="h-20 bg-gray-900 rounded-t-3xl flex items-center justify-around relative border-t border-gray-800">
<svg className="lucide lucide-home text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<svg className="lucide lucide-folder text-gray-400 hover:text-white" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-violet-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-violet-700 transition-colors">
<svg className="lucide lucide-plus text-white w-6 h-6" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<svg className="lucide lucide-activity text-gray-400 hover:text-white" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<svg className="lucide lucide-settings text-gray-400 hover:text-white" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
</div>
</div>
</div>

<div className="relative h-[740px] w-[360px] overflow-hidden flex flex-col bg-white border-gray-200 border rounded-[32px] mr-auto ml-auto shadow-2xl translate-y-8">
<div className="flex items-center justify-between px-6 pt-6">
<svg className="lucide lucide-arrow-left text-gray-700 hover:text-gray-900" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<h4 className="font-medium">Task Details</h4>
<svg className="lucide lucide-share-2 text-gray-700 hover:text-gray-900" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</div>
<div className="mx-6 mt-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400/80 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width= bg-[url(https://images.unsplash.com/photo-1661092133357-e50572adedc1?w=1080&q=80)] bg-cover" fill="none" fillOpacity="0.15" fillRule="evenodd" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"></div>
<div className="relative z-10 flex items-center gap-3">
<svg className="lucide lucide-code w-5 h-5 text-emerald-900" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<h3 className="text-lg font-medium tracking-tight">API Integration</h3>
</div>
<p className="relative z-10 text-xs mt-2 text-emerald-900/80">Assigned by <span className="font-medium">Marcus Rodriguez</span></p>
<svg className="lucide lucide-edit absolute top-5 right-5 bg-white/30 backdrop-blur text-emerald-900 rounded-full p-1.5 hover:bg-white/40 transition-colors" data-lucide="edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex gap-3 overflow-x-auto px-6 mt-5 pb-2">
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100">
<svg className="lucide lucide-calendar mx-auto w-5 h-5 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><rect height="18" rx="2" width="18"></rect><path></path></svg>
<p className="text-xs mt-2 text-gray-500">Due Date</p>
<p className="font-medium mt-1 text-sm">Mar 15</p>
</div>
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100">
<svg className="lucide lucide-users mx-auto w-5 h-5 text-gray-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<p className="text-xs mt-2 text-gray-500">Team</p>
<div className="flex justify-center -space-x-1.5 mt-1">
<img className="w-5 h-5 object-cover border-white border-2 rounded-full" src="https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?w=1080&q=80" />
<img className="w-5 h-5 object-cover border-white border-2 rounded-full" src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=1080&q=80" />
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100">
<svg className="lucide lucide-bar-chart-3 mx-auto w-5 h-5 text-gray-600" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
<p className="text-xs mt-2 text-gray-500">Progress</p>
<p className="font-medium mt-1 text-sm">75%</p>
</div>
</div>
<div className="flex justify-between mx-6 mt-6 bg-gray-50 rounded-2xl p-1">
<button className="w-1/3 text-center py-2.5 rounded-xl bg-white text-gray-900 text-sm font-medium shadow-sm">Subtasks</button>
<button className="w-1/3 text-center py-2.5 rounded-xl text-gray-600 text-sm font-medium hover:text-gray-900">Files</button>
<button className="w-1/3 text-center py-2.5 rounded-xl text-gray-600 text-sm font-medium hover:text-gray-900">Activity</button>
</div>
<div className="flex-1 overflow-y-auto mt-4">
<div className="px-6 space-y-3">
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
<div className="">
<h6 className="font-medium text-sm">Database Schema</h6>
<p className="text-xs text-gray-500">Backend Foundation</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">Complete</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
<div className="flex items-center gap-3">
<svg className="lucide lucide-circle w-5 h-5 text-gray-300" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
<div className="">
<h6 className="font-medium text-sm">REST Endpoints</h6>
<p className="text-xs text-gray-500">Core API Routes</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700">In Progress</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
<div className="flex items-center gap-3">
<svg className="lucide lucide-circle w-5 h-5 text-gray-300" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
<div className="">
<h6 className="font-medium text-sm">Authentication</h6>
<p className="text-xs text-gray-500">Security Layer</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">Pending</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100">
<div className="flex items-center gap-3">
<svg className="lucide lucide-circle w-5 h-5 text-gray-300" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle></svg>
<div className="">
<h6 className="font-medium text-sm">Documentation</h6>
<p className="text-xs text-gray-500">API Reference</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">Pending</span>
</div>
</div>
</div>
</div>

<div className="relative h-[740px] w-[360px] overflow-hidden flex flex-col bg-white border-gray-200 border rounded-[32px] mr-auto ml-auto shadow-2xl -translate-y-4">
<div className="flex items-center justify-between px-6 pt-6">
<h4 className="font-medium">Sprint Timeline</h4>
<svg className="lucide lucide-filter text-gray-700 hover:text-gray-900" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="mx-6 mt-5">
<div className="flex items-center gap-1 justify-between">
<div className="flex gap-1 overflow-x-auto">
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-medium text-gray-400">12</span>
<span className="text-xs text-gray-400 -mt-0.5">Sun</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-medium text-gray-400">13</span>
<span className="text-xs text-gray-400 -mt-0.5">Mon</span>
</div>
<div className="w-12 flex flex-col items-center py-2 bg-gray-900 rounded-xl text-white relative flex-shrink-0">
<span className="text-sm font-medium">14</span>
<span className="text-xs -mt-0.5">Tue</span>
<span className="absolute -bottom-1 w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-medium text-gray-400">15</span>
<span className="text-xs text-gray-400 -mt-0.5">Wed</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-medium text-gray-400">16</span>
<span className="text-xs text-gray-400 -mt-0.5">Thu</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-medium text-gray-400">17</span>
<span className="text-xs text-gray-400 -mt-0.5">Fri</span>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-5 mt-5 border border-gray-100">
<div className="flex items-center justify-between mb-4">
<h6 className="text-sm font-medium">Daily Standup <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-900 text-white">3</span></h6>
<svg className="lucide lucide-video w-4 h-4 text-gray-400" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><rect height="12" rx="2" width="14"></rect></svg>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-7 h-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080&q=80" />
<div className="">
<p className="text-xs font-medium">9:00 AM - 9:30 AM</p>
<p className="text-xs text-gray-500">Team Sync</p>
</div>
</div>
<button className="text-xs bg-violet-500 text-white rounded-xl px-3 py-1 font-medium hover:bg-violet-600">Join</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-7 h-7 object-cover rounded-full" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=1080&q=80" />
<div className="">
<p className="text-xs font-medium">2:00 PM - 3:00 PM</p>
<p className="text-xs text-gray-500">Design Review</p>
</div>
</div>
<button className="text-xs bg-white border border-gray-200 rounded-xl px-3 py-1 font-medium hover:bg-gray-50">Remind</button>
</div>
</div>
</div>
</div>

<div className="mt-5 flex-1 relative">
<div className="absolute inset-0 bg-gray-900 bg-[url(https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=1080&q=80)] bg-cover rounded-2xl mr-6 ml-6"></div>
<div className="absolute inset-6 text-white pr-4 pl-4">
<h6 className="text-sm font-medium mb-4">Project Timeline</h6>
<svg className="w-full h-48">
<g stroke="#374151" strokeDasharray="2 2" strokeWidth="1">
<line></line>
<line></line>
<line></line>
<line></line>
</g>
<g className="">
<rect className="" fill="#8b5cf6" height="8%" rx="4" width="45%"></rect>
<rect className="" fill="#06d6a0" height="8%" rx="4" width="35%"></rect>
<rect className="" fill="#f72585" height="8%" rx="4" width="40%"></rect>
<rect className="" fill="#ffd166" height="8%" rx="4" width="30%"></rect>
</g>
</svg>
<div className="mt-4 grid grid-cols-2 gap-2 text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-violet-500 rounded-full"></span>
<span className="">API Development</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
<span>UI Components</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-pink-500 rounded-full"></span>
<span className="">Testing Phase</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
<span>Documentation</span>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
