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



  // Initialize Lucide icons
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
      
<div className="flex h-screen">

<aside className="w-64 bg-neutral-900 border-r border-neutral-800 flex flex-col fade-in">
<div className="p-6 border-b border-neutral-800">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
<span className="text-neutral-900 text-sm font-medium font-nunito">A</span>
</div>
<div>
<h1 className="font-medium text-white font-nunito">Aura</h1>
<p className="text-sm text-neutral-400 font-nunito">Acme Inc.</p>
</div>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<div className="mb-6">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-3 font-nunito">Navigation</p>
<div className="space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-nunito">Dashboard</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3"></path><path d="m16 17-2 2"></path></svg>
<span className="font-nunito">Team</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm bg-neutral-800 text-white font-medium" href="#">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="font-nunito">Analytics</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<svg className="w-4 h-4 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m21 12-6 0m-6 0-6 0"></path></svg>
<span className="font-nunito">Projects</span>
</a>
</div>
</div>
<div>
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-3 font-nunito">Teams</p>
<div className="space-y-1">
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<div className="w-4 h-4 bg-blue-500 rounded-sm"></div>
<span className="font-nunito">Engineering</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<div className="w-4 h-4 bg-green-500 rounded-sm"></div>
<span className="font-nunito">Design</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm text-neutral-300 hover:bg-neutral-800 transition-colors" href="#">
<div className="w-4 h-4 bg-purple-500 rounded-sm"></div>
<span className="font-nunito">Product</span>
</a>
</div>
</div>
</nav>
<div className="p-4 border-t border-neutral-800">
<div className="flex items-center space-x-3">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/a4239f65-c647-458d-b02f-57640ce3f623_320w.jpg" style={{}} />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate font-nunito">Alex Rivera</p>
<p className="text-xs text-neutral-400 truncate font-nunito">alex@acme.com</p>
</div>
<svg className="w-4 h-4 stroke-[1.5] text-neutral-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">

<header className="h-16 px-6 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between fade-in fade-in-delay-1">
<div>
<h1 className="text-xl font-medium text-white font-nunito">Team Analytics</h1>
<p className="text-sm text-neutral-400 mt-0.5 font-nunito">Monitor team performance and activity</p>
</div>
<div className="flex items-center space-x-3">
<div className="relative">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[1.5] text-neutral-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-64 pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-sm placeholder-neutral-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Search..." type="text" />
</div>
<button className="p-2 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors">
<svg className="w-4 h-4 stroke-[1.5] text-neutral-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</button>
</div>
</header>

<div className="flex-1 overflow-auto p-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:shadow-sm transition-shadow fade-in fade-in-delay-1">
<div className="relative h-32 bg-[url(/assets/f198d06f-9683-4085-b9be-e6dccc631f60_800w.jpg)] bg-cover">
<img alt="Sarah" className="absolute bottom-4 left-4 w-16 h-16 rounded-full border-4 border-neutral-900 object-cover" src="/assets/8034cded-525d-4ab5-8d29-c44e6b8d2881_800w.jpg" style={{}} />
<div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full border-2 border-neutral-900"></div>
</div>
<div className="p-4 pt-8">
<div className="mb-4">
<h3 className="font-medium text-white font-nunito">Sarah Chen</h3>
<p className="text-sm text-neutral-400 font-nunito">Senior Frontend Developer</p>
<div className="flex items-center space-x-2 mt-2">
<div className="flex space-x-1">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
</div>
<span className="text-xs text-neutral-400 font-nunito">React • TypeScript • Node.js</span>
</div>
</div>
<div className="flex space-x-2">
<button className="flex-1 py-2 px-3 border border-neutral-700 rounded-lg text-sm font-medium text-neutral-300 hover:bg-neutral-800 transition-colors font-nunito">Message</button>
<button className="flex-1 py-2 px-3 bg-white text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors font-nunito">View Profile</button>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-2">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-white font-nunito">Active Session</h3>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-xs text-neutral-400 font-nunito">Live</span>
</div>
</div>
<div className="text-center mb-6">
<div className="text-4xl text-white tracking-tight mb-1 font-nunito font-semibold">04:23:17</div>
<p className="text-sm text-neutral-400 font-nunito">Focus time today</p>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between py-2">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">Component refactoring</span>
</div>
<span className="text-sm font-medium text-white font-nunito">2:45:32</span>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">API integration</span>
</div>
<span className="text-sm font-medium text-white font-nunito">1:37:45</span>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">Bug fixes</span>
</div>
<span className="text-sm font-medium text-white font-nunito">0:52:18</span>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-3">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-white font-nunito">Work Distribution</h3>
<span className="text-xs text-neutral-400 font-nunito">Last 30 days</span>
</div>
<div className="flex justify-center mb-6">
<div className="relative w-32 h-32">
<svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#404040" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="#3b82f6" strokeDasharray="251" strokeDashoffset="75" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl text-white font-nunito font-semibold">70%</span>
<span className="text-xs text-neutral-400 font-nunito">Office</span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">Office</span>
</div>
<span className="text-sm font-medium text-white font-nunito">70%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-green-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">Remote</span>
</div>
<span className="text-sm font-medium text-white font-nunito">22%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
<span className="text-sm text-neutral-300 font-nunito">Hybrid</span>
</div>
<span className="text-sm font-medium text-white font-nunito">8%</span>
</div>
</div>
</div>

<div className="hover:shadow-sm transition-shadow fade-in fade-in-delay-4 bg-neutral-900 bg-[url(/assets/b88e97f2-2dd8-442b-a9bb-3e4f80d7fb9f_800w.jpg)] bg-cover border-neutral-800 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<h3 className="font-medium text-white mb-6 font-nunito">Performance Stats</h3>
<div className="space-y-6">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-300 font-nunito">Velocity Score</span>
<span className="text-2xl text-white font-nunito font-semibold">92</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-green-500 h-2 rounded-full" style={{width: `92%`}}></div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-300 font-nunito">Code Quality</span>
<span className="text-2xl text-white font-nunito font-semibold">85</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: `85%`}}></div>
</div>
</div>
<div className="">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-neutral-300 font-nunito">Team Collaboration</span>
<span className="text-2xl text-white font-nunito font-semibold">96</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-purple-500 h-2 rounded-full" style={{width: `96%`}}></div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-5">
<h3 className="font-medium text-white mb-6 font-nunito">Recent Activity</h3>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-4 h-4 stroke-[1.5] text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-nunito">Updated dashboard components</p>
<p className="text-xs text-neutral-400 mt-1 font-nunito">2 hours ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-4 h-4 stroke-[1.5] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-nunito">Completed sprint planning</p>
<p className="text-xs text-neutral-400 mt-1 font-nunito">4 hours ago</p>
</div>
</div>
<div className="flex items-start space-x-3">
<div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-4 h-4 stroke-[1.5] text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3"></path><path d="m16 17-2 2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-nunito">Code review completed</p>
<p className="text-xs text-neutral-400 mt-1 font-nunito">6 hours ago</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-white font-nunito">Task Completion</h3>
<span className="text-xs text-neutral-400 font-nunito">This week</span>
</div>
<div className="text-center mb-6">
<div className="text-4xl text-white tracking-tight mb-1 font-nunito font-semibold">24/32</div>
<p className="text-sm text-neutral-400 font-nunito">Tasks completed</p>
</div>
<div className="w-full bg-neutral-800 rounded-full h-3 mb-4">
<div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{width: `75%`}}></div>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-300 font-nunito">Progress</span>
<span className="text-white font-medium font-nunito">75%</span>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-1">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-white font-nunito">Notifications</h3>
<div className="w-2 h-2 bg-red-500 rounded-full"></div>
</div>
<div className="space-y-4">
<div className="flex items-start space-x-3 p-3 bg-neutral-800 rounded-lg">
<div className="w-8 h-8 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-4 h-4 stroke-[1.5] text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="m13.73 21a2 2 0 0 1-3.46 0"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-nunito">Stand-up meeting in 15 minutes</p>
<p className="text-xs text-neutral-400 mt-1 font-nunito">Conference Room A</p>
</div>
</div>
<div className="flex items-start space-x-3 p-3 rounded-lg border border-neutral-800">
<div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
<svg className="w-4 h-4 stroke-[1.5] text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14,2 14,8 20,8"></polyline></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-nunito">New design specs uploaded</p>
<p className="text-xs text-neutral-400 mt-1 font-nunito">Review by EOD</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:shadow-sm transition-shadow fade-in fade-in-delay-2">
<h3 className="font-medium text-white mb-6 font-nunito">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="p-4 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors group">
<div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-500/20">
<svg className="w-4 h-4 stroke-[1.5] text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="text-xs text-neutral-300 font-nunito">New Task</span>
</button>
<button className="p-4 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors group">
<div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-500/20">
<svg className="w-4 h-4 stroke-[1.5] text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<span className="text-xs text-neutral-300 font-nunito">Send Message</span>
</button>
<button className="p-4 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors group">
<div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/20">
<svg className="w-4 h-4 stroke-[1.5] text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<span className="text-xs text-neutral-300 font-nunito">Schedule</span>
</button>
<button className="p-4 border border-neutral-700 rounded-lg hover:bg-neutral-800 transition-colors group">
<div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-500/20">
<svg className="w-4 h-4 stroke-[1.5] text-yellow-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
</div>
<span className="text-xs text-neutral-300 font-nunito">Report</span>
</button>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
