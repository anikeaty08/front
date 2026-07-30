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
      
<div className="iphone-frame">
<div className="iphone-screen">
<div className="notch"></div>
<div className="screen-content bg-gray-50">

<div className="pt-8 px-5 flex justify-between text-xs font-semibold">
<span>9:41</span>
<div className="flex space-x-1">
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path><path></path><path></path><path></path><path></path>
</svg>
</span>
<span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
<path></path>
<path></path>
</svg>
</span>
</div>
</div>

<header className="px-6 pt-3 pb-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold text-gray-900">Devices</h1>
<div className="flex space-x-2">
<button className="p-2 rounded-full bg-gray-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</button>
<button className="p-2 rounded-full bg-blue-500 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<line></line>
<line></line>
</svg>
</button>
</div>
</div>
</header>

<main className="px-6">

<div className="mb-6">
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11"></circle>
<line></line>
</svg>
</span>
<input className="search-box bg-white w-full py-3 pl-10 pr-4 rounded-xl text-sm border border-gray-200 focus:border-blue-500 transition-colors" placeholder="Search devices..." type="text" />
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-gray-800 mb-3">Favorites</h2>
<div className="grid grid-cols-2 gap-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Living Room</span>
</div>
<svg fill="#FCD34D" height="16" stroke="#FCD34D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">ON</span>
<label className="toggle-switch" style={{width: `40px`, height: `24px`}}>
<input checked type="checkbox" />
<span className="toggle-slider" style={{height: `24px`}}></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Thermostat</span>
</div>
<svg fill="#FCD34D" height="16" stroke="#FCD34D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">22°C</span>
<label className="toggle-switch" style={{width: `40px`, height: `24px`}}>
<input checked type="checkbox" />
<span className="toggle-slider" style={{height: `24px`}}></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-purple-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<circle cx="12" cy="12"></circle>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">TV</span>
</div>
<svg fill="#FCD34D" height="16" stroke="#FCD34D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">OFF</span>
<label className="toggle-switch" style={{width: `40px`, height: `24px`}}>
<input type="checkbox" />
<span className="toggle-slider" style={{height: `24px`}}></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Air Purifier</span>
</div>
<svg fill="#FCD34D" height="16" stroke="#FCD34D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div className="flex justify-between items-center">
<span className="text-sm text-gray-600">ON</span>
<label className="toggle-switch" style={{width: `40px`, height: `24px`}}>
<input checked type="checkbox" />
<span className="toggle-slider" style={{height: `24px`}}></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-3">
<h2 className="text-lg font-semibold text-gray-800">All Devices</h2>
<button className="text-xs font-medium text-blue-600">Filter</button>
</div>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-600 mb-2">Living Room</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Lights</h4>
<p className="text-xs text-gray-500">Phillips Hue • 5 bulbs</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-purple-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="15" rx="2" ry="2" width="20"></rect>
<polyline points="17 2 12 7 7 2"></polyline>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart TV</h4>
<p className="text-xs text-gray-500">Samsung QN90A</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-green-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Air Purifier</h4>
<p className="text-xs text-gray-500">Dyson Pure Cool</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Thermostat</h4>
<p className="text-xs text-gray-500">Nest Learning • 22°C</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-indigo-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<circle cx="12" cy="12"></circle>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Speaker</h4>
<p className="text-xs text-gray-500">Sonos One</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-600 mb-2">Kitchen</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Kitchen Lights</h4>
<p className="text-xs text-gray-500">Phillips Hue • 3 bulbs</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-orange-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20"></rect>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Oven</h4>
<p className="text-xs text-gray-500">Samsung Chef Collection</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div bg-blue-100="" className="w-10 h- <div class=" flex="" items-center="" justify-center="" rounded-full="">
<svg className="text-blue-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="16"></rect>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Refrigerator</h4>
<p className="text-xs text-gray-500">LG InstaView</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-amber-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Coffee Maker</h4>
<p className="text-xs text-gray-500">Philips Smart Brew</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-teal-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18"></rect>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Dishwasher</h4>
<p className="text-xs text-gray-500">Bosch 800 Series</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-600 mb-2">Bedroom</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Bedroom Lights</h4>
<p className="text-xs text-gray-500">Phillips Hue • 2 bulbs</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-blue-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Bedroom Thermostat</h4>
<p className="text-xs text-gray-500">Ecobee Smart • 20°C</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-gray-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Sleep Monitor</h4>
<p className="text-xs text-gray-500">Withings Sleep</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>

<div className="mb-4">
<h3 className="text-sm font-medium text-gray-600 mb-2">Bathroom</h3>
<div className="space-y-3">
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-yellow-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Bathroom Lights</h4>
<p className="text-xs text-gray-500">Phillips Hue • 1 bulb</p>
</div>
</div>
<label className="toggle-switch">
<input type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
<div className="bg-white rounded-2xl p-4 shadow-sm">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mr-3">
<svg className="text-cyan-600" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
<path></path>
</svg>
</div>
<div>
<h4 className="font-medium text-gray-900">Smart Scale</h4>
<p className="text-xs text-gray-500">Withings Body+</p>
</div>
</div>
<label className="toggle-switch">
<input checked type="checkbox" />
<span className="toggle-slider"></span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="text-lg font-semibold text-gray-800 mb-3">Categories</h2>
<div className="grid grid-cols-2 gap-3">
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-yellow-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Lighting</span>
</div>
<p className="text-xs text-gray-500 mt-1">11 devices</p>
</button>
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-blue-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Climate</span>
</div>
<p className="text-xs text-gray-500 mt-1">3 devices</p>
</button>
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-purple-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="15" rx="2" ry="2" width="20"></rect>
<polyline points="17 2 12 7 7 2"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Entertainment</span>
</div>
<p className="text-xs text-gray-500 mt-1">2 devices</p>
</button>
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Air Quality</span>
</div>
<p className="text-xs text-gray-500 mt-1">1 device</p>
</button>
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-orange-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20"></rect>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
<line></line>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Kitchen</span>
</div>
<p className="text-xs text-gray-500 mt-1">5 devices</p>
</button>
<button className="bg-white rounded-2xl p-4 shadow-sm text-left">
<div className="flex items-center">
<div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
<svg className="text-red-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-sm font-medium text-gray-800">Security</span>
</div>
<p className="text-xs text-gray-500 mt-1">2 devices</p>
</button>
</div>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3 rounded-b-[40px]">
<div className="flex justify-between max-w-md mx-auto">
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
<span className="text-xs mt-1">Home</span>
</button>
<button className="flex flex-col items-center text-blue-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20"></rect>
<line></line>
<line></line>
</svg>
<span className="text-xs mt-1">Devices</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-xs mt-1">Security</span>
</button>
<button className="flex flex-col items-center text-gray-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<path></path>
</svg>
<span className="text-xs mt-1">Settings</span>
</button>
</div>
</nav>
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
