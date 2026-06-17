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
      

<div className="flex">
<div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0">
<div className="p-6 border-b border-gray-200">
<h1 className="text-xl font-bold text-gray-900">MarketingBlocks</h1>
<p className="text-sm text-gray-500">Agentic AI Dashboard</p>
</div>
<nav className="p-4 space-y-2">
<a className="flex items-center space-x-3 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg" href="#">
<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
<span className="font-medium">AI Agents</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" href="#">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span>Content Pipeline</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" href="#">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span>Lead Generation</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" href="#">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span>Analytics</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg" href="#">
<div className="w-2 h-2 bg-gray-400 rounded-full"></div>
<span>Brand Settings</span>
</a>
</nav>
</div>

<div className="ml-64 flex-1">

<header className="bg-white border-b border-gray-200 px-6 py-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl font-bold text-gray-900">AI Marketing Command Center</h2>
<p className="text-gray-600">Your autonomous marketing team is working 24/7</p>
</div>
<div className="flex items-center space-x-4">
<div className="flex items-center space-x-2 bg-green-50 px-3 py-1 rounded-full">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-sm text-green-700 font-medium">8 Agents Active</span>
</div>
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
                            + Add Agent
                        </button>
</div>
</div>
</header>

<div className="p-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Daily Content Created</p>
<p className="text-2xl font-bold text-gray-900">24</p>
<p className="text-sm text-green-600">+15% from yesterday</p>
</div>
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">New Leads</p>
<p className="text-2xl font-bold text-gray-900">127</p>
<p className="text-sm text-green-600">+23% this week</p>
</div>
<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
<svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">Engagement Rate</p>
<p className="text-2xl font-bold text-gray-900">8.7%</p>
<p className="text-sm text-green-600">Above industry avg</p>
</div>
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
<svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-200">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-gray-600">AI Efficiency</p>
<p className="text-2xl font-bold text-gray-900">94%</p>
<p className="text-sm text-blue-600">Learning &amp; improving</p>
</div>
<div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
<svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-gray-900">Your AI Marketing Team</h3>
<div className="flex items-center space-x-2">
<span className="text-sm text-gray-500">Mode:</span>
<div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">Fully Autonomous</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
<span className="text-blue-600 font-bold text-sm">E</span>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<h4 className="font-medium text-gray-900">Ethan - AI CMO</h4>
<p className="text-sm text-gray-600 mb-2">Managing content strategy</p>
<div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Active - Planning Q1 content</div>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
<span className="text-purple-600 font-bold text-sm">C</span>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<h4 className="font-medium text-gray-900">AI Copywriter</h4>
<p className="text-sm text-gray-600 mb-2">Creating email sequence</p>
<div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Active - Writing hooks</div>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
<span className="text-pink-600 font-bold text-sm">V</span>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<h4 className="font-medium text-gray-900">Video Creator</h4>
<p className="text-sm text-gray-600 mb-2">Editing talking head reels</p>
<div className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">Processing - 3 videos in queue</div>
</div>
<div className="border border-gray-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
<span className="text-green-600 font-bold text-sm">S</span>
</div>
<div className="w-2 h-2 bg-green-500 rounded-full"></div>
</div>
<h4 className="font-medium text-gray-900">Social Manager</h4>
<p className="text-sm text-gray-600 mb-2">Posting &amp; engaging</p>
<div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">Active - Replied to 12 comments</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Recent AI Activity</h3>
<div className="space-y-4">
<div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-blue-600" fill="currentColor" viewbox="0 0 20 20">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Posted Instagram carousel</p>
<p className="text-xs text-gray-500">2 minutes ago • 47 likes already</p>
</div>
</div>
<div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-green-600" fill="currentColor" viewbox="0 0 20 20">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Generated lead magnet</p>
<p className="text-xs text-gray-500">15 minutes ago • "5 Proven Sales Scripts"</p>
</div>
</div>
<div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
<svg className="w-4 h-4 text-purple-600" fill="currentColor" viewbox="0 0 20 20">
<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-gray-900">Optimized LinkedIn post</p>
<p className="text-xs text-gray-500">1 hour ago • +34% engagement predicted</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-xl border border-gray-200 p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-4">Content Pipeline</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
<div>
<p className="text-sm font-medium">Tomorrow's LinkedIn post</p>
<p className="text-xs text-gray-500">Topic: Sales psychology tips</p>
</div>
</div>
<span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">In Review</span>
</div>
<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
<div>
<p className="text-sm font-medium">Video script draft</p>
<p className="text-xs text-gray-500">For "Overcome objections" reel</p>
</div>
</div>
<span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">In Progress</span>
</div>
<div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-green-400 rounded-full"></div>
<div>
<p className="text-sm font-medium">Email nurture sequence</p>
<p className="text-xs text-gray-500">7-part series for new leads</p>
</div>
</div>
<span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Ready</span>
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
