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



    function updateClock() {
      const now = new Date();
      document.getElementById('clock').textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    }
    setInterval(updateClock, 1000);
    updateClock();
  
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
      
<div className="relative w-[390px] max-w-full h-[844px] bg-gradient-to-b from-[#ffffff] to-[#f0f2f5] shadow-xl rounded-[40px] overflow-hidden border-4 border-[#e1e4e8] flex flex-col mx-auto">

<div className="absolute left-1/2 -top-1.5 -translate-x-1/2 z-10 flex items-center justify-center" style={{height: `44px`}}>
<div className="w-24 h-4 bg-black/80 rounded-b-3xl mt-2"></div>
</div>
<div className="flex-1 flex flex-col">

<div className="flex justify-between items-center p-2 text-xs mt-2">
<span id="clock">9:41</span>
<div className="flex space-x-1">
<i className="fas fa-signal"></i>
<i className="fas fa-wifi"></i>
<i className="fas fa-battery-three-quarters"></i>
</div>
</div>

<header className="px-6 py-4">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Settings</h1>
</div>
</header>

<main className="px-4 pb-20 flex-1 overflow-y-auto hide-scrollbar">

<div className="bg-[#eaecf0] rounded-2xl p-4 shadow-lg mb-6">
<div className="flex items-center">
<div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-orange-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
</div>
<div className="flex-1">
<h3 className="font-bold text-lg">Sarah Johnson</h3>
<p className="text-gray-500 text-sm">sarah.j@example.com</p>
</div>
<button className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
<i className="fas fa-pencil-alt text-orange-500 text-sm"></i>
</button>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold text-sm text-gray-500 uppercase mb-2 px-2">Account</h3>
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow-lg">
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-user text-blue-500 text-sm"></i>
</div>
<span>Personal Information</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
<i className="fas fa-bell text-purple-500 text-sm"></i>
</div>
<span>Notifications</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
<i className="fas fa-lock text-green-500 text-sm"></i>
</div>
<span>Privacy & Security</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold text-sm text-gray-500 uppercase mb-2 px-2">Preferences</h3>
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow-lg">
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
<i className="fas fa-utensils text-yellow-500 text-sm"></i>
</div>
<span>Dietary Preferences</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
<i className="fas fa-ban text-red-500 text-sm"></i>
</div>
<span>Allergies & Restrictions</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
<i className="fas fa-globe text-indigo-500 text-sm"></i>
</div>
<span>Language</span>
</div>
<div className="flex items-center">
<span className="text-sm text-gray-500 mr-2">English</span>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
<i className="fas fa-moon text-orange-500 text-sm"></i>
</div>
<span>Dark Mode</span>
</div>
<div className="w-12 h-6 bg-gray-300 rounded-full relative">
<div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5 shadow"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="font-bold text-sm text-gray-500 uppercase mb-2 px-2">General</h3>
<div className="bg-[#eaecf0] rounded-2xl overflow-hidden shadow-lg">
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3">
<i className="fas fa-question-circle text-teal-500 text-sm"></i>
</div>
<span>Help & Support</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4 border-b border-gray-200">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
<i className="fas fa-info-circle text-blue-500 text-sm"></i>
</div>
<span>About Us</span>
</div>
<i className="fas fa-chevron-right text-gray-400 text-sm"></i>
</div>
</div>
<div className="p-4">
<div className="flex justify-between items-center">
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
<i className="fas fa-sign-out-alt text-red-500 text-sm"></i>
</div>
<span className="text-red-500">Log Out</span>
</div>
</div>
</div>
</div>
</div>
<div className="text-center text-xs text-gray-400 mb-4">
<p>Version 2.4.1</p>
</div>
</main>
</div>

<nav className="absolute bottom-0 left-0 right-0 bg-[#ffffff]/90 rounded-t-3xl py-4 px-6 backdrop-blur-sm border-t border-gray-200" style={{zIndex: `20`}}>
<div className="flex justify-between items-center">
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-home text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Home</span>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-search text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Explore</span>
</div>
<div className="relative -mt-8">
<button className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
<i className="fas fa-plus text-white text-xl"></i>
</button>
</div>
<div className="nav-item flex flex-col items-center cursor-pointer">
<i className="fas fa-bookmark text-gray-400"></i>
<span className="text-xs text-gray-400 mt-1">Saved</span>
</div>
<div className="nav-item flex flex-col items-center active cursor-pointer">
<i className="fas fa-cog text-orange-600"></i>
<span className="text-xs text-orange-600 mt-1">Settings</span>
<div className="w-1 h-1 bg-orange-600 rounded-full mt-1"></div>
</div>
</div>
</nav>
</div>



    </>
  );
}
