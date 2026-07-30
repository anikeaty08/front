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
      
<div className="max-w-7xl mx-auto">
<div className="mac-window border border-zinc-800 bg-zinc-900">

<div className="bg-zinc-800 px-4 py-3 flex items-center">
<div className="flex space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="ml-4 text-sm text-zinc-400">Dashboard</div>
</div>

<div className="flex flex-col md:flex-row">

<div className="w-full md:w-64 bg-zinc-800 p-4">
<div className="mb-8">
<div className="flex items-center space-x-3 mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
<span className="text-lg font-bold">A</span>
</div>
<div>
<div className="font-medium">Alex Morgan</div>
<div className="text-xs text-zinc-400">Product Designer</div>
</div>
</div>
<div className="relative mb-4">
<input className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Search..." type="text" />
<svg className="w-4 h-4 text-zinc-400 absolute right-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="space-y-1">
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md bg-indigo-500 bg-opacity-20 text-indigo-300">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Dashboard</span>
</div>
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Analytics</span>
</div>
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Customers</span>
</div>
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Inventory</span>
</div>
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Billing</span>
</div>
<div className="sidebar-item flex items-center space-x-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Settings</span>
</div>
</div>
</div>

<div className="flex-1 p-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
<h1 className="text-2xl font-bold mb-4 md:mb-0">Dashboard Overview</h1>
<div className="flex space-x-2">
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-4 py-2 rounded-md text-sm">Export</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm">Add Widget</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-zinc-400 text-sm">Revenue</p>
<p className="text-2xl font-bold">$24,780</p>
<p className="text-green-400 text-xs mt-1">+12.5% from last month</p>
</div>
<div className="bg-indigo-500 bg-opacity-20 p-3 rounded-md">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-zinc-400 text-sm">Customers</p>
<p className="text-2xl font-bold">1,482</p>
<p className="text-green-400 text-xs mt-1">+8.2% from last month</p>
</div>
<div className="bg-blue-500 bg-opacity-20 p-3 rounded-md">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-zinc-400 text-sm">Orders</p>
<p className="text-2xl font-bold">682</p>
<p className="text-red-400 text-xs mt-1">-2.3% from last month</p>
</div>
<div className="bg-amber-500 bg-opacity-20 p-3 rounded-md">
<svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex items-center justify-between">
<div>
<p className="text-zinc-400 text-sm">Conversion</p>
<p className="text-2xl font-bold">3.42%</p>
<p className="text-green-400 text-xs mt-1">+1.2% from last month</p>
</div>
<div className="bg-green-500 bg-opacity-20 p-3 rounded-md">
<svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h2 className="font-medium">Revenue Overview</h2>
<select className="bg-zinc-700 border border-zinc-600 text-white text-xs rounded-md px-2 py-1">
<option>Last 7 days</option>
<option>Last 30 days</option>
<option>Last 90 days</option>
</select>
</div>
<div className="chart-container bg-zinc-800">

<div className="h-full w-full flex items-end justify-between px-2">
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `30%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `60%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `45%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `80%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `65%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `75%`}}></div>
<div className="w-1/12 bg-indigo-500 rounded-t" style={{height: `55%`}}></div>
</div>
</div>
<div className="flex justify-between text-xs text-zinc-400 mt-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h2 className="font-medium">Traffic Sources</h2>
<select className="bg-zinc-700 border border-zinc-600 text-white text-xs rounded-md px-2 py-1">
<option>Last 7 days</option>
<option>Last 30 days</option>
<option>Last 90 days</option>
</select>
</div>
<div className="chart-container bg-zinc-800 flex items-center justify-center">

<div className="relative w-32 h-32">
<svg className="w-full h-full" viewBox="0 0 36 36">
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#4F46E5" strokeDasharray="75, 100" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3B82F6" strokeDasharray="20, 100" strokeDashoffset="-75" strokeWidth="3"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeDasharray="5, 100" strokeDashoffset="-95" strokeWidth="3"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center text-lg font-bold">75%</div>
</div>
</div>
<div className="grid grid-cols-1 gap-2 mt-4">
<div className="flex items-center">
<span className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></span>
<span className="text-sm">Direct (75%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
<span className="text-sm">Social Media (20%)</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
<span className="text-sm">Referrals (5%)</span>
</div>
</div>
</div>
</div>

<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-4">
<div className="flex justify-between items-center mb-4">
<h2 className="font-medium">Recent Activity</h2>
<button className="text-zinc-400 hover:text-white text-sm">View All</button>
</div>
<div className="space-y-4">
<div className="flex items-start">
<div className="bg-blue-500 bg-opacity-20 p-2 rounded-md mr-3">
<svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm">New customer <span className="font-medium">Sarah Johnson</span> signed up</p>
<p className="text-xs text-zinc-400 mt-1">2 minutes ago</p>
</div>
</div>
<div className="flex items-start">
<div className="bg-green-500 bg-opacity-20 p-2 rounded-md mr-3">
<svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm">Order <span className="font-medium">#45678</span> has been completed</p>
<p className="text-xs text-zinc-400 mt-1">15 minutes ago</p>
</div>
</div>
<div className="flex items-start">
<div className="bg-amber-500 bg-opacity-20 p-2 rounded-md mr-3">
<svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm">You have a new message from <span className="font-medium">Mark Wilson</span></p>
<p className="text-xs text-zinc-400 mt-1">1 hour ago</p>
</div>
</div>
<div className="flex items-start">
<div className="bg-red-500 bg-opacity-20 p-2 rounded-md mr-3">
<svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm">Server load is <span className="font-medium">high</span> - 92% CPU usage</p>
<p className="text-xs text-zinc-400 mt-1">3 hours ago</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
