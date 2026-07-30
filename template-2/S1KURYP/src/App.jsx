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



        lucide.createIcons();
        
        // Simple timer animation
        let seconds = 19723; // 5:28:43 in seconds
        setInterval(() => {
            seconds++;
            const hours = Math.floor(seconds / 3600);
            const mins = Math.floor((seconds % 3600) / 60);
            const secs = seconds % 60;
            const timeStr = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
            document.querySelector('.font-mono').textContent = timeStr;
        }, 1000);
    
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
      

<nav className="floating-nav">
<div className="h-full flex pr-4 pl-4 items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-xl font-bold text-gray-900">FlowDesk</span>
</div>
<div className="flex items-center space-x-8">
<a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" href="#">Platform</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" href="#">Features</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" href="#">Resources</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors font-medium" href="#">Pricing</a>
</div>
<button className="bg-black text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Get Started
            </button>
</div>
</nav>

<section className="bg-gradient-hero py-20 px-6" style={{paddingTop: `120px`}}>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center px-4 py-2 bg-white/70 rounded-full text-xs font-semibold text-gray-600 mb-8 border border-white/30">
                TRANSFORM YOUR WORKPLACE
            </div>
<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Streamline Your<br />
                Workflow with Smart<br />
                Productivity Hub
            </h1>
<p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
                Transform how your team works with intelligent project management and real-time collaboration tools
            </p>
<button className="hover:bg-indigo-600 transition-colors font-semibold text-white bg-slate-950 rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg">
                Try FlowDesk Free
            </button>
</div>

<div className="max-w-7xl mx-auto mt-16">
<div className="app-window bg-white flex flex-col text-gray-900" style={{height: `700px`}}>

<div className="flex bg-gray-100 border-gray-200 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-gray-200 rounded-md transition">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="p-2 hover:bg-gray-200 rounded-md transition">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-2 hover:bg-gray-200 rounded-md transition">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-72 bg-gray-50 border-r border-gray-200 flex flex-col">

<div className="bg-gray-50 border-gray-200 border-b pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<img alt="Profile" className="w-12 h-12 object-cover rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1080&q=80" />
<div>
<h3 className="font-semibold">Alex Chen</h3>
<p className="text-sm text-gray-600">Product Manager</p>
</div>
</div>
<div className="flex gap-2 text-sm text-gray-600 items-center mb-3">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span>Active • Deep Work Mode</span>
</div>
<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-gray-500">Daily Progress</span>
<span className="text-xs font-medium">5h 28m</span>
</div>
<div className="w-full bg-gray-200 rounded-full h-2">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: `68%`}}></div>
</div>
</div>
</div>

<nav className="flex-1 bg-gray-50 pt-4 pr-4 pb-4 pl-4 space-y-2">
<a className="flex items-center gap-3 px-3 py-3 bg-indigo-100 text-indigo-600 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span>My Tasks</span>
<span className="ml-auto text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>Workspaces</span>
<span className="ml-auto bg-emerald-500 text-white text-xs rounded-full px-2 py-1">4</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span>Performance</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-pie-chart w-5 h-5" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span>Insights</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<span>Colleagues</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Notifications</span>
<span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">6</span>
</a>
<a className="flex items-center gap-3 px-3 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition hover-scale" href="#">
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span>Resources</span>
</a>
</nav>

<div className="bg-gray-50 border-gray-200 border-t pt-4 pr-4 pb-4 pl-4">
<button className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition flex gap-2 text-white rounded-lg mb-3 pt-3 pr-4 pb-3 pl-4 items-center justify-center font-medium">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>New Project</span>
</button>
<div className="text-xs text-gray-500 text-center bg-gray-100 rounded-lg py-2">
<p className="font-medium">🚀 Upcoming: Design Review</p>
<p>starts in 18 minutes</p>
</div>
</div>
</div>

<div className="flex-1 overflow-auto bg-gray-50">
<div className="pt-6 pr-6 pb-6 pl-6">

<div className="flex mb-6 items-center justify-between">
<div className="">
<h1 className="text-3xl font-bold mb-2">Welcome back, Alex! ✨</h1>
<p className="text-gray-600">Track your productivity and manage your projects effectively</p>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-2 bg-emerald-50 border border-emerald-200 rounded-lg pt-2 pr-4 pb-2 pl-4 items-center">
<svg className="lucide lucide-clock w-4 h-4 text-emerald-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-sm font-mono text-emerald-700">05:29:07</span>
</div>
<button className="bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition flex items-center gap-2">
<svg className="lucide lucide-share w-4 h-4" data-lucide="share" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v13"></path><path d="m16 6-4-4-4 4"></path><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path></svg>
<span className="text-sm">Share Report</span>
</button>
</div>
</div>

<div className="grid grid-cols-4 gap-6 mb-6">
<div className="bg-white border border-gray-200 rounded-xl pt-6 pr-6 pb-6 pl-6 hover-scale">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-target w-5 h-5 text-emerald-600" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-sm text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">+18%</span>
</div>
<h3 className="text-2xl font-bold mb-1">94%</h3>
<p className="text-sm text-gray-600">Goal Achievement</p>
<div className="w-full bg-gray-200 rounded-full h-1 mt-3">
<div className="bg-emerald-500 h-1 rounded-full" style={{width: `94%`}}></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl pt-6 pr-6 pb-6 pl-6 hover-scale">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-briefcase w-5 h-5 text-blue-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<span className="text-sm text-blue-600">4 ongoing</span>
</div>
<h3 className="text-2xl font-bold mb-1">16</h3>
<p className="text-sm text-gray-600">Active Workspaces</p>
<div className="flex gap-1 mt-3">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<div className="w-2 h-2 bg-blue-300 rounded-full"></div>
<div className="w-2 h-2 bg-blue-200 rounded-full"></div>
<div className="w-2 h-2 bg-gray-200 rounded-full"></div>
</div>
</div>
<div className="bg-white border border-gray-200 rounded-xl pt-6 pr-6 pb-6 pl-6 hover-scale">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-activity w-5 h-5 text-indigo-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-sm text-indigo-600">This month</span>
</div>
<h3 className="text-2xl font-bold mb-1">142.3h</h3>
<p className="text-sm text-gray-600">Productive Time</p>
<p className="text-xs text-gray-500 mt-2">Avg: 7.8h/day</p>
</div>
<div className="bg-white border border-gray-200 rounded-xl pt-6 pr-6 pb-6 pl-6 hover-scale">
<div className="flex items-center justify-between mb-4">
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-purple-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-sm text-purple-600">+12 today</span>
</div>
<h3 className="text-2xl font-bold mb-1">289</h3>
<p className="text-sm text-gray-600">Tasks Delivered</p>
<p className="text-xs text-emerald-600 mt-2">↗ 31% improvement</p>
</div>
</div>
<div className="grid grid-cols-3 gap-6">

<div className="col-span-2 bg-white border-gray-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex mb-6 items-center justify-between">
<h3 className="text-lg font-semibold">Time Distribution</h3>
<select className="text-sm border border-gray-200 rounded-lg px-3 py-1">
<option>Past 14 days</option>
<option>Past month</option>
</select>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
<span className="text-sm font-medium">Product Strategy</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-indigo-500 h-3 rounded-full progress-bar" style={{width: `82%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">42.1h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<span className="text-sm font-medium">Team Collaboration</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-emerald-500 h-3 rounded-full progress-bar" style={{width: `58%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">24.7h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span className="text-sm font-medium">User Analysis</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-purple-500 h-3 rounded-full progress-bar" style={{width: `36%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">16.3h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-amber-500 rounded-full"></div>
<span className="text-sm font-medium">Planning & Reviews</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-amber-500 h-3 rounded-full progress-bar" style={{width: `28%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">11.4h</span>
</div>
</div><div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-indigo-500 rounded-full"></div>
<span className="text-sm font-medium">Product Strategy</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-indigo-500 h-3 rounded-full progress-bar" style={{width: `82%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">42.1h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
<span className="text-sm font-medium">Team Collaboration</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-emerald-500 h-3 rounded-full progress-bar" style={{width: `58%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">24.7h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span className="text-sm font-medium">User Analysis</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-purple-500 h-3 rounded-full progress-bar" style={{width: `36%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">16.3h</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-amber-500 rounded-full"></div>
<span className="text-sm font-medium">Planning & Reviews</span>
</div>
<div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
<div className="bg-amber-500 h-3 rounded-full progress-bar" style={{width: `28%`}}></div>
</div>
<span className="text-sm font-semibold text-gray-800">11.4h</span>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold">Current Focus</h3>
<button className="text-indigo-600 text-sm hover:text-indigo-700">See more</button>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
<div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-smartphone w-4 h-4 text-indigo-600" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium">E-commerce Platform</h4>
<p className="text-xs text-gray-500">Sprint ends tomorrow</p>
</div>
<div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
<div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-purple-600" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium">Analytics Dashboard</h4>
<p className="text-xs text-gray-500">Review scheduled</p>
</div>
<div className="w-2 h-2 bg-orange-500 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
<div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-user-check w-4 h-4 text-emerald-600" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium">Customer Journey Map</h4>
<p className="text-xs text-gray-500">Research phase</p>
</div>
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
