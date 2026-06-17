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
      

<header className="bg-white border-b border-gray-200 h-14 flex items-center justify-between px-6 sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="font-semibold text-sm tracking-tight text-gray-900">Hotel Visual Editor</div>
<div className="h-4 w-px bg-gray-300"></div>
<div className="text-xs text-gray-500">Seraphine Dunes Demo UI</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1.5">
<i data-lucide="rotate-ccw" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                Undo
            </button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1.5">
<i data-lucide="rotate-cw" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                Redo
            </button>
<div className="h-4 w-px bg-gray-300 mx-2"></div>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1.5">
<i data-lucide="monitor" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                Desktop
            </button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="tablet" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="smartphone" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<div className="h-4 w-px bg-gray-300 mx-2"></div>
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all flex items-center gap-1.5">
<i data-lucide="clock" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                History
            </button>
<button className="px-4 py-1.5 text-xs font-medium bg-gray-900 text-white hover:bg-gray-800 rounded-md transition-all flex items-center gap-1.5">
<i data-lucide="check" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                Publish
            </button>
</div>
</header>

<div className="flex h-[calc(100vh-3.5rem)]">

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
<div className="p-4 border-b border-gray-200">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Page Navigator</h2>
<button className="text-gray-400 hover:text-gray-600 transition-colors">
<i data-lucide="plus" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-600">
<i data-lucide="eye" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
<span>Show guide overlay</span>
<div className="ml-auto w-8 h-4 bg-gray-900 rounded-full relative cursor-pointer transition-all">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
<nav className="flex-1 overflow-y-auto p-3">
<div className="space-y-1">
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-900 bg-gray-100 rounded-md hover:bg-gray-100 transition-all group">
<i data-lucide="image" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-medium text-sm">Hero Banner</span>
<i data-lucide="chevron-right" style={{width: '14px', height: '14px', strokeWidth: '1.5', marginLeft: 'auto'}}></i>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all group">
<i data-lucide="type" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Welcome Section</span>
<i data-lucide="chevron-right" style={{width: '14px', height: '14px', strokeWidth: '1.5', marginLeft: 'auto', opacity: '0'}}></i>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all group">
<i data-lucide="grid-3x3" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Quick Services Grid</span>
<i data-lucide="chevron-right" style={{width: '14px', height: '14px', strokeWidth: '1.5', marginLeft: 'auto', opacity: '0'}}></i>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all group">
<i data-lucide="layout" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Footer</span>
<i data-lucide="chevron-right" style={{width: '14px', height: '14px', strokeWidth: '1.5', marginLeft: 'auto', opacity: '0'}}></i>
</button>
</div>
<div className="mt-6 pt-4 border-t border-gray-200">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 px-3">Theme Settings</h3>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="palette" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Colors</span>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="type" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Typography</span>
</button>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="layout-template" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Layout Style</span>
</button>
</div>
<div className="mt-6 pt-4 border-t border-gray-200">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 px-3">Assets</h3>
<button className="w-full flex items-center gap-2.5 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-all">
<i data-lucide="folder-open" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="font-normal text-sm">Media Library</span>
</button>
</div>
</nav>
<div className="p-3 border-t border-gray-200 bg-gray-50">
<div className="flex items-center gap-2 text-xs text-gray-600">
<i data-lucide="info" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
<span>Auto-save enabled</span>
<div className="ml-auto w-1.5 h-1.5 bg-green-500 rounded-full"></div>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-gray-100 p-6">
<div className="max-w-5xl mx-auto">

<div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
<i className="text-blue-600 mt-0.5" data-lucide="lightbulb" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<div className="flex-1">
<p className="text-sm text-blue-900 font-medium mb-0.5">Getting Started</p>
<p className="text-xs text-blue-700">Faded demo acts as your design guide. Click any area to start customizing your hotel page.</p>
</div>
<button className="text-blue-400 hover:text-blue-600 transition-colors">
<i data-lucide="x" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">

<div className="relative group cursor-pointer" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200\')', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px'}}>

<div className="absolute inset-0 bg-white opacity-60"></div>

<div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-10 transition-all border-2 border-transparent group-hover:border-blue-500 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transition-all bg-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
<i className="text-gray-700" data-lucide="edit-3" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="text-sm font-medium text-gray-700">Edit Hero Banner</span>
</div>
</div>

<div className="relative z-10 h-full flex flex-col opacity-40">

<div className="flex items-center justify-between p-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white bg-opacity-90 rounded-lg flex items-center justify-center text-gray-900 font-bold text-sm tracking-tight">SD</div>
<div>
<div className="text-gray-900 text-2xl font-semibold tracking-tight">Seraphine Dunes</div>
<div className="text-gray-600 text-xs">Powered by AeroTag Assist</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center transition-all">
<i className="text-gray-600" data-lucide="bell" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
<button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center transition-all">
<i className="text-gray-600" data-lucide="globe" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
<button className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center transition-all">
<i className="text-gray-600" data-lucide="chevron-down" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="bg-white bg-opacity-95 backdrop-blur-sm px-8 py-4 rounded-xl shadow-lg">
<p className="text-2xl font-semibold text-gray-900 tracking-tight">You are in Room 101!</p>
</div>
</div>
</div>
</div>

<div className="relative group cursor-pointer hover:bg-gray-50 transition-all p-12 text-center border-2 border-transparent hover:border-blue-500 opacity-40">
<div className="opacity-0 group-hover:opacity-100 absolute top-4 right-4 bg-white px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 transition-all">
<i className="text-gray-700" data-lucide="edit-3" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-gray-700">Edit Section</span>
</div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Welcome</h2>
<p className="text-base text-gray-600 max-w-2xl mx-auto">Explore room service, essentials, housekeeping, and more.</p>
</div>

<div className="p-12 bg-gray-50 opacity-40">
<div className="mb-8 text-center">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight mb-1">Quick Services</h3>
<p className="text-sm text-gray-600">Select Services</p>
</div>
<div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-blue-600" data-lucide="utensils" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Room Service</h4>
<p className="text-xs text-gray-500">24/7 menu</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-green-600" data-lucide="shopping-bag" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Essentials</h4>
<p className="text-xs text-gray-500">On-Demand</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-purple-600" data-lucide="sparkles" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Spa &amp; Wellness</h4>
<p className="text-xs text-gray-500">Relax &amp; Recharge</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-orange-600" data-lucide="home" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Housekeeping</h4>
<p className="text-xs text-gray-500">Anytime Care</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-red-600" data-lucide="wrench" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Maintenance</h4>
<p className="text-xs text-gray-500">Quick Fix</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-cyan-600" data-lucide="shirt" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Laundry</h4>
<p className="text-xs text-gray-500">Fresh &amp; Ready</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-yellow-600" data-lucide="car" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Taxi &amp; Transfer</h4>
<p className="text-xs text-gray-500">Ride Your Way</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-indigo-600" data-lucide="info" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Hotel Info</h4>
<p className="text-xs text-gray-500">Stay Connected</p>
</div>

<div className="relative group cursor-pointer bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-blue-500">
<div className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 transition-all">
<button className="w-7 h-7 bg-white border border-gray-200 rounded-md shadow-sm flex items-center justify-center hover:bg-gray-50">
<i className="text-gray-600" data-lucide="edit-3" style={{width: '13px', height: '13px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center mb-3">
<i className="text-pink-600" data-lucide="more-horizontal" style={{width: '22px', height: '22px', strokeWidth: '1.5'}}></i>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-0.5">Other Services</h4>
<p className="text-xs text-gray-500">Extra Convenience</p>
</div>
</div>
</div>

<div className="relative group cursor-pointer hover:bg-gray-50 transition-all p-8 bg-white border-t border-gray-200 border-2 border-transparent hover:border-blue-500 opacity-40">
<div className="opacity-0 group-hover:opacity-100 absolute top-4 right-4 bg-white px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5 transition-all">
<i className="text-gray-700" data-lucide="edit-3" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
<span className="text-xs font-medium text-gray-700">Edit Footer</span>
</div>
<div className="flex items-center justify-between max-w-4xl mx-auto">
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-all">
<i data-lucide="message-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                                Chat with Assistant
                            </button>
<p className="text-xs text-gray-500">© 2025 AeroTag Assist</p>
</div>
</div>
</div>
</div>
</main>

<aside className="w-80 bg-white border-l border-gray-200 flex flex-col overflow-hidden">
<div className="p-4 border-b border-gray-200">
<h2 className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-1">Smart Editor</h2>
<p className="text-xs text-gray-500">Hero Banner selected</p>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div>
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 block">Background Image</label>
<div className="aspect-video bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-all">
<i className="text-gray-400 mb-2" data-lucide="upload" style={{width: '24px', height: '24px', strokeWidth: '1.5'}}></i>
<p className="text-xs text-gray-600 font-medium">Upload Image</p>
<p className="text-xs text-gray-400 mt-1">or drag and drop</p>
</div>
<button className="w-full mt-2 px-3 py-2 text-xs font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-md transition-all flex items-center justify-center gap-2">
<i data-lucide="folder-open" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                        Browse Media Library
                    </button>
</div>
<div className="border-t border-gray-200 pt-6">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 block">Logo</label>
<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
<div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-gray-900 font-bold text-xs">SD</div>
<div className="flex-1">
<p className="text-xs font-medium text-gray-900">Current Logo</p>
<p className="text-xs text-gray-500">Text-based</p>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i data-lucide="upload" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="border-t border-gray-200 pt-6">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 block">Hotel Name</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="text" value="Seraphine Dunes"/>
<div className="mt-4 space-y-3">
<div>
<label className="text-xs text-gray-600 mb-1.5 block">Font Family</label>
<select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
<option>Inter</option>
<option>Helvetica</option>
<option>Playfair Display</option>
<option>Montserrat</option>
</select>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-xs text-gray-600 mb-1.5 block">Size</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" type="number" value="24"/>
</div>
<div>
<label className="text-xs text-gray-600 mb-1.5 block">Weight</label>
<select className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
<option>Regular</option>
<option selected="">Semibold</option>
<option>Bold</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-gray-600 mb-1.5 block">Text Color</label>
<div className="flex gap-2">
<input className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono" type="text" value="#FFFFFF"/>
<div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-md cursor-pointer hover:border-gray-300 transition-all"></div>
</div>
</div>
<div>
<label className="text-xs text-gray-600 mb-1.5 block">Alignment</label>
<div className="flex gap-1 p-1 bg-gray-100 rounded-md">
<button className="flex-1 px-3 py-1.5 bg-white rounded text-xs font-medium text-gray-900 shadow-sm transition-all">
<i data-lucide="align-left" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<button className="flex-1 px-3 py-1.5 hover:bg-gray-50 rounded text-xs font-medium text-gray-600 transition-all">
<i data-lucide="align-center" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
<button className="flex-1 px-3 py-1.5 hover:bg-gray-50 rounded text-xs font-medium text-gray-600 transition-all">
<i data-lucide="align-right" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-200 pt-6">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 block">Room Label</label>
<input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3" type="text" value="You are in Room 101!"/>
<div className="flex items-center gap-2 text-xs text-gray-600">
<input checked="" className="w-4 h-4 rounded border-gray-300" type="checkbox"/>
<span>Show room number dynamically</span>
</div>
</div>
<div className="border-t border-gray-200 pt-6">
<label className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-3 block">Action Icons</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="text-gray-600" data-lucide="bell" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="text-xs text-gray-700">Notifications</span>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i data-lucide="settings" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="text-gray-600" data-lucide="globe" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="text-xs text-gray-700">Language</span>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i data-lucide="settings" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
<div className="flex items-center justify-between p-2 bg-gray-50 rounded-md border border-gray-200">
<div className="flex items-center gap-2">
<i className="text-gray-600" data-lucide="chevron-down" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
<span className="text-xs text-gray-700">Menu</span>
</div>
<button className="text-gray-400 hover:text-gray-600">
<i data-lucide="settings" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<button className="w-full mt-2 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-50 border border-gray-200 rounded-md transition-all flex items-center justify-center gap-2">
<i data-lucide="plus" style={{width: '14px', height: '14px', strokeWidth: '1.5'}}></i>
                        Add Icon
                    </button>
</div>
</div>
<div className="p-4 border-t border-gray-200 bg-gray-50">
<button className="w-full px-4 py-2.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-all">
                    Apply Changes
                </button>
</div>
</aside>
</div>


    </>
  );
}
