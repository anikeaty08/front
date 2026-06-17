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
      
    lucide.createIcons();
    // Animate fade-in with stagger on load
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.fade-in, .fade-in-blur').forEach(el => {
        el.style.visibility = 'visible';
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
      
<div className="w-full max-w-6xl flex flex-col xl:flex-row gap-12 items-center justify-center">

<div className="relative h-[740px] w-[360px] flex flex-col bg-white border border-gray-200 rounded-[32px] mr-auto ml-auto shadow-2xl overflow-hidden fade-in fade-in-delay-1">

<div className="flex pt-6 pr-6 pl-6 items-center justify-between border-b border-gray-100">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-9 h-9 object-cover rounded-full shadow" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=1080&amp;q=80"/>
<span className="text-sm font-medium text-gray-900">Sarah Chen</span>
</div>
<div className="flex items-center gap-4">
<i className="lucide text-gray-500 hover:text-gray-700 transition-colors cursor-pointer" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
<i className="lucide text-gray-500 hover:text-gray-700 transition-colors cursor-pointer" data-lucide="bell" style={{strokeWidth: '1.5'}}></i>
</div>
</div>

<div className="mx-6 mt-5 p-6 rounded-2xl bg-gradient-to-br from-violet-200 to-violet-400/80 relative overflow-hidden fade-in fade-in-delay-2 shadow">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1676022763096-a1ad12b2e370?w=1080&amp;q=80')] bg-cover opacity-20 blur-sm"></div>
<h3 className="relative z-10 text-lg font-semibold leading-snug tracking-tight text-violet-900">Drive innovation<br/>through collaboration</h3>
<div className="relative z-10 mt-6 flex items-center justify-between">
<div>
<p className="text-xs text-violet-900/70">4h 12m today</p>
<p className="text-xs font-medium text-violet-900">Sprint milestone reached</p>
</div>
<div className="w-11 h-11 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
<i className="lucide text-violet-900 w-5 h-5" data-lucide="trending-up" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="flex items-center justify-between mx-6 mt-6 fade-in fade-in-delay-3">
<h4 className="font-semibold text-gray-900 tracking-tight">Active Tasks
          <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-900 text-white font-medium">3</span>
</h4>
<div className="flex items-center gap-4">
<i className="lucide text-gray-500 hover:text-gray-700 cursor-pointer transition-colors" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
<button className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors">View all</button>
</div>
</div>

<div className="mx-6 mt-4 bg-white rounded-2xl border border-gray-100 p-5 space-y-3 fade-in fade-in-delay-4">

<div>
<div className="flex items-start justify-between">
<div className="flex gap-3 items-start">
<i className="lucide w-4 h-4 text-violet-600 mt-0.5" data-lucide="code" style={{strokeWidth: '1.5'}}></i>
<div>
<h5 className="font-semibold text-gray-900">API Integration</h5>
<div className="flex items-center gap-2 mt-1">
<i className="lucide w-3.5 h-3.5 text-gray-400" data-lucide="clock" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-gray-500">In Progress</span>
<span className="px-2 py-0.5 rounded-full bg-orange-100 text-xs text-orange-700 font-medium">Medium</span>
</div>
</div>
</div>
<i className="lucide w-4 h-4 text-gray-400 cursor-pointer" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="h-2 rounded-full bg-gray-100 mt-4 overflow-hidden">
<div className="h-full bg-violet-500 w-3/4 transition-all duration-300"></div>
</div>
<div className="flex items-center justify-between mt-4 text-xs text-gray-500">
<div className="flex -space-x-1.5">
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=28&amp;h=28&amp;fit=crop&amp;crop=face"/>
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=28&amp;h=28&amp;fit=crop&amp;crop=face"/>
</div>
<div className="flex items-center gap-1">
<i className="lucide w-3.5 h-3.5" data-lucide="calendar-days" style={{strokeWidth: '1.5'}}></i>
<span>Mar 15</span>
</div>
<div className="flex items-center gap-1">
<i className="lucide w-3.5 h-3.5" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
<span>5</span>
</div>
</div>
</div>

<div>
<div className="flex items-start justify-between">
<div className="flex gap-3 items-start">
<i className="lucide w-4 h-4 text-blue-600 mt-0.5" data-lucide="palette" style={{strokeWidth: '1.5'}}></i>
<div>
<h5 className="font-semibold text-gray-900">Design System 2.0</h5>
<div className="flex items-center gap-2 mt-1">
<i className="lucide w-3.5 h-3.5 text-gray-400" data-lucide="play-circle" style={{strokeWidth: '1.5'}}></i>
<span className="text-xs text-gray-500">Starting</span>
<span className="px-2 py-0.5 rounded-full bg-red-100 text-xs text-red-700 font-medium">Critical</span>
</div>
</div>
</div>
<i className="lucide w-4 h-4 text-gray-400 cursor-pointer" data-lucide="more-horizontal" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="h-2 rounded-full bg-gray-100 mt-4 overflow-hidden">
<div className="h-full bg-blue-500 w-1/4 transition-all duration-300"></div>
</div>
<div className="flex items-center justify-between mt-4 text-xs text-gray-500">
<div className="flex -space-x-1.5">
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=28&amp;h=28&amp;fit=crop&amp;crop=face"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium">+2</div>
</div>
<div className="flex items-center gap-1">
<i className="lucide w-3.5 h-3.5" data-lucide="calendar-days" style={{strokeWidth: '1.5'}}></i>
<span>Mar 22</span>
</div>
<div className="flex items-center gap-1">
<i className="lucide w-3.5 h-3.5" data-lucide="message-square" style={{strokeWidth: '1.5'}}></i>
<span>8</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 fade-in fade-in-delay-5">
<div className="h-20 bg-gray-900 rounded-t-3xl flex items-center justify-around border-t border-gray-800 relative">
<i className="lucide text-white w-6 h-6 cursor-pointer" data-lucide="home" style={{strokeWidth: '1.5'}}></i>
<i className="lucide text-gray-400 hover:text-white w-6 h-6 transition-colors cursor-pointer" data-lucide="folder" style={{strokeWidth: '1.5'}}></i>
<button className="absolute -top-6 left-1/2 -translate-x-1/2 bg-violet-600 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-violet-700 transition-colors">
<i className="lucide text-white w-6 h-6" data-lucide="plus" style={{strokeWidth: '1.5'}}></i>
</button>
<i className="lucide text-gray-400 hover:text-white w-6 h-6 transition-colors cursor-pointer" data-lucide="activity" style={{strokeWidth: '1.5'}}></i>
<i className="lucide text-gray-400 hover:text-white w-6 h-6 transition-colors cursor-pointer" data-lucide="settings" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>

<div className="relative h-[740px] w-[360px] flex flex-col bg-white border border-gray-200 rounded-[32px] mr-auto ml-auto shadow-2xl overflow-hidden fade-in fade-in-delay-2">

<div className="flex items-center justify-between px-6 pt-6 border-b border-gray-100">
<i className="lucide text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" data-lucide="arrow-left" style={{strokeWidth: '1.5'}}></i>
<h4 className="font-semibold text-gray-900 tracking-tight">Task Details</h4>
<i className="lucide text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" data-lucide="share-2" style={{strokeWidth: '1.5'}}></i>
</div>

<div className="mx-6 mt-5 p-6 rounded-2xl bg-gradient-to-br from-emerald-200 to-emerald-400/80 relative overflow-hidden fade-in fade-in-delay-3 shadow">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1661092133357-e50572adedc1?w=1080&amp;q=80')] bg-cover opacity-30 blur-sm"></div>
<div className="relative z-10 flex items-center gap-3">
<i className="lucide w-5 h-5 text-emerald-900" data-lucide="code" style={{strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-emerald-900">API Integration</h3>
</div>
<p className="relative z-10 text-xs mt-2 text-emerald-900/80">Assigned by <span className="font-medium">Marcus Rodriguez</span></p>
<i className="lucide absolute top-5 right-5 bg-white/30 backdrop-blur text-emerald-900 rounded-full p-1.5 hover:bg-white/40 transition-colors cursor-pointer" data-lucide="edit" style={{strokeWidth: '1.5'}}></i>
</div>

<div className="flex gap-3 overflow-x-auto px-6 mt-5 pb-2 fade-in fade-in-delay-4">
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm">
<i className="lucide mx-auto w-5 h-5 text-gray-600" data-lucide="calendar" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs mt-2 text-gray-500">Due Date</p>
<p className="font-medium mt-1 text-sm">Mar 15</p>
</div>
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm">
<i className="lucide mx-auto w-5 h-5 text-gray-600" data-lucide="users" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs mt-2 text-gray-500">Team</p>
<div className="flex justify-center -space-x-1.5 mt-1">
<img className="w-5 h-5 object-cover border-white border-2 rounded-full" src="https://images.unsplash.com/photo-1574406280735-351fc1a7c5e0?w=1080&amp;q=80"/>
<img className="w-5 h-5 object-cover border-white border-2 rounded-full" src="https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=1080&amp;q=80"/>
</div>
</div>
<div className="flex-shrink-0 w-32 bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm">
<i className="lucide mx-auto w-5 h-5 text-gray-600" data-lucide="bar-chart-3" style={{strokeWidth: '1.5'}}></i>
<p className="text-xs mt-2 text-gray-500">Progress</p>
<p className="font-medium mt-1 text-sm">75%</p>
</div>
</div>

<div className="flex justify-between mx-6 mt-6 bg-gray-50 rounded-2xl p-1 fade-in fade-in-delay-5">
<button className="w-1/3 text-center py-2.5 rounded-xl bg-white text-gray-900 text-sm font-semibold shadow-sm transition-colors">Subtasks</button>
<button className="w-1/3 text-center py-2.5 rounded-xl text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">Files</button>
<button className="w-1/3 text-center py-2.5 rounded-xl text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors">Activity</button>
</div>

<div className="flex-1 overflow-y-auto mt-4 fade-in fade-in-delay-6">
<div className="px-6 space-y-3">
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3">
<i className="lucide w-5 h-5 text-emerald-500" data-lucide="check-circle-2" style={{strokeWidth: '1.5'}}></i>
<div>
<h6 className="font-semibold text-sm text-gray-900">Database Schema</h6>
<p className="text-xs text-gray-500">Backend Foundation</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 font-medium">Complete</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3">
<i className="lucide w-5 h-5 text-gray-300" data-lucide="circle" style={{strokeWidth: '1.5'}}></i>
<div>
<h6 className="font-semibold text-sm text-gray-900">REST Endpoints</h6>
<p className="text-xs text-gray-500">Core API Routes</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-700 font-medium">In Progress</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3">
<i className="lucide w-5 h-5 text-gray-300" data-lucide="circle" style={{strokeWidth: '1.5'}}></i>
<div>
<h6 className="font-semibold text-sm text-gray-900">Authentication</h6>
<p className="text-xs text-gray-500">Security Layer</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium">Pending</span>
</div>
<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
<div className="flex items-center gap-3">
<i className="lucide w-5 h-5 text-gray-300" data-lucide="circle" style={{strokeWidth: '1.5'}}></i>
<div>
<h6 className="font-semibold text-sm text-gray-900">Documentation</h6>
<p className="text-xs text-gray-500">API Reference</p>
</div>
</div>
<span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium">Pending</span>
</div>
</div>
</div>
</div>

<div className="relative h-[740px] w-[360px] flex flex-col bg-white border border-gray-200 rounded-[32px] mr-auto ml-auto shadow-2xl overflow-hidden fade-in fade-in-delay-3">

<div className="flex items-center justify-between px-6 pt-6 border-b border-gray-100">
<h4 className="font-semibold text-gray-900 tracking-tight">Sprint Timeline</h4>
<i className="lucide text-gray-700 hover:text-gray-900 transition-colors cursor-pointer" data-lucide="filter" style={{strokeWidth: '1.5'}}></i>
</div>

<div className="mx-6 mt-5 fade-in fade-in-delay-4">
<div className="flex gap-1 overflow-x-auto">
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-semibold text-gray-400">12</span>
<span className="text-xs text-gray-400 -mt-0.5">Sun</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-semibold text-gray-400">13</span>
<span className="text-xs text-gray-400 -mt-0.5">Mon</span>
</div>
<div className="w-12 flex flex-col items-center py-2 bg-gray-900 rounded-xl text-white relative flex-shrink-0">
<span className="text-sm font-semibold">14</span>
<span className="text-xs -mt-0.5">Tue</span>
<span className="absolute -bottom-1 w-1.5 h-1.5 bg-violet-400 rounded-full"></span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-semibold text-gray-400">15</span>
<span className="text-xs text-gray-400 -mt-0.5">Wed</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-semibold text-gray-400">16</span>
<span className="text-xs text-gray-400 -mt-0.5">Thu</span>
</div>
<div className="w-12 flex flex-col items-center py-2 flex-shrink-0">
<span className="text-sm font-semibold text-gray-400">17</span>
<span className="text-xs text-gray-400 -mt-0.5">Fri</span>
</div>
</div>
</div>

<div className="mx-6 mt-5 bg-white rounded-2xl p-5 border border-gray-100 fade-in fade-in-delay-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h6 className="text-sm font-semibold text-gray-900 tracking-tight">Daily Standup
            <span className="ml-1 px-2 py-0.5 text-xs rounded-full bg-gray-900 text-white font-medium">3</span>
</h6>
<i className="lucide w-4 h-4 text-gray-400" data-lucide="video" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-7 h-7 object-cover rounded-full shadow" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1080&amp;q=80"/>
<div>
<p className="text-xs font-semibold text-gray-900">9:00 AM - 9:30 AM</p>
<p className="text-xs text-gray-500">Team Sync</p>
</div>
</div>
<button className="text-xs bg-violet-500 text-white rounded-xl px-3 py-1 font-semibold hover:bg-violet-600 transition-colors">Join</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-7 h-7 object-cover rounded-full shadow" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=1080&amp;q=80"/>
<div>
<p className="text-xs font-semibold text-gray-900">2:00 PM - 3:00 PM</p>
<p className="text-xs text-gray-500">Design Review</p>
</div>
</div>
<button className="text-xs bg-white border border-gray-200 rounded-xl px-3 py-1 font-semibold hover:bg-gray-50 transition-colors">Remind</button>
</div>
</div>
</div>

<div className="mt-5 flex-1 relative fade-in fade-in-delay-6">
<div className="absolute inset-0 bg-gray-900 bg-[url('https://images.unsplash.com/photo-1650611250959-1e823abf6841?w=1080&amp;q=80')] bg-cover rounded-2xl mr-6 ml-6"></div>
<div className="absolute inset-6 text-white pr-4 pl-4">
<h6 className="text-sm font-semibold mb-4 tracking-tight">Project Timeline</h6>
<svg className="w-full h-48">
<g stroke="#374151" stroke-dasharray="2 2" strokeWidth="1">
<line x1="0" x2="100%" y1="20%" y2="20%"></line>
<line x1="0" x2="100%" y1="40%" y2="40%"></line>
<line x1="0" x2="100%" y1="60%" y2="60%"></line>
<line x1="0" x2="100%" y1="80%" y2="80%"></line>
</g>
<g>
<rect fill="#8b5cf6" height="8%" rx="4" width="45%" x="15%" y="15%"></rect>
<rect fill="#06d6a0" height="8%" rx="4" width="35%" x="25%" y="35%"></rect>
<rect fill="#f72585" height="8%" rx="4" width="40%" x="45%" y="55%"></rect>
<rect fill="#ffd166" height="8%" rx="4" width="30%" x="35%" y="75%"></rect>
</g>
</svg>
<div className="mt-4 grid grid-cols-2 gap-2 text-xs">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-violet-500 rounded-full"></span>
<span>API Development</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
<span>UI Components</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-pink-500 rounded-full"></span>
<span>Testing Phase</span>
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
