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



    function toggleTheme() {
      const phone = document.getElementById('phone');
      const themeToggle = document.getElementById('toggle-theme');
      const themeText = document.getElementById('theme-text');
      
      if (themeToggle.checked) {
        phone.classList.remove('light-mode');
        phone.classList.add('dark-mode');
        themeText.textContent = 'Dark mode';
      } else {
        phone.classList.remove('dark-mode');
        phone.classList.add('light-mode');
        themeText.textContent = 'Light mode';
      }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
      const themeToggle = document.getElementById('toggle-theme');
      themeToggle.addEventListener('change', toggleTheme);
      
      // Initialize with dark mode
      document.getElementById('phone').classList.add('dark-mode');
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
      
<div className="relative mx-auto h-[844px] w-[390px] rounded-[54px] overflow-hidden border-[14px] border-zinc-800 shadow-2xl" id="phone">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[34px] notch z-10"></div>

<div className="status-bar pt-1 px-6 flex items-center justify-between h-[47px] relative z-0">
<div className="text-sm font-semibold ml-1">9:41</div>
<div className="flex items-center space-x-1.5 mr-1">
<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
<path d="M18.5 10c0-4.14-3.36-7.5-7.5-7.5S3.5 5.86 3.5 10c0 2.55 1.28 4.81 3.23 6.17.32.23.48.27.49.74.02.5 0 1 0 1.5 0 .83.67 1.5 1.5 1.5h4.5c.83 0 1.5-.67 1.5-1.5 0-.53-.02-1 0-1.5 0-.46.17-.51.49-.74 1.95-1.36 3.23-3.62 3.23-6.17zM15 17.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5V17h6v.5z"></path>
</svg>
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path>
</svg>
<div className="flex items-center">
<div className="w-6 h-3 bg-current rounded-sm relative overflow-hidden">
<div className="absolute inset-0.5 right-auto bg-black dark:bg-white rounded-sm" style={{width: `30%`}}></div>
</div>
</div>
</div>
</div>

<div className="overflow-auto h-[700px] px-5 pb-20">

<div className="pt-6 pb-4 flex items-center justify-between">
<div>
<h1 className="text-2xl font-bold">Profile</h1>
<p className="text-sm text-dimmed mt-0.5">Manage your account details</p>
</div>
<button className="w-10 h-10 icon-bg rounded-full flex items-center justify-center">
<svg className="w-5 h-5 text-dimmed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="mb-6">
<div className="card backdrop-blur-lg rounded-2xl p-5">
<div className="flex items-center mb-4">
<div className="w-20 h-20 icon-bg rounded-full flex items-center justify-center mr-4 border-2 border-zinc-600 dark:border-zinc-600 light:border-zinc-300">
<span className="text-dimmed font-semibold text-2xl">JS</span>
</div>
<div>
<h2 className="text-xl font-bold">John Smith</h2>
<p className="text-dimmed text-sm">Premium Member</p>
<div className="flex items-center mt-1">
<div className="icon-bg text-xs px-2 py-0.5 rounded-full text-dimmed">
                  Since May 2023
                </div>
</div>
</div>
</div>
<div className="flex justify-between items-center">
<button className="icon-bg hover:bg-opacity-80 rounded-lg px-4 py-2 text-sm font-medium flex items-center">
<svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
</svg>
              Edit Profile
            </button>
<button className="icon-bg hover:bg-opacity-80 rounded-lg px-4 py-2 text-sm font-medium flex items-center">
<svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"></path>
</svg>
              Security
            </button>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-dimmed mb-3">ACCOUNT DETAILS</h3>

<div className="card backdrop-blur-lg rounded-xl p-4 mb-3 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">Email Address</h4>
<p className="text-sm text-dimmed">john.smith@example.com</p>
</div>
<button className="text-indigo-500">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
</svg>
</button>
</div>
</div>

<div className="card backdrop-blur-lg rounded-xl p-4 mb-3 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">Phone Number</h4>
<p className="text-sm text-dimmed">+1 (555) 123-4567</p>
</div>
<button className="text-indigo-500">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
</svg>
</button>
</div>
</div>

<div className="card backdrop-blur-lg rounded-xl p-4 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">Password</h4>
<p className="text-sm text-dimmed">Last changed 30 days ago</p>
</div>
<button className="text-indigo-500">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm font-medium text-dimmed mb-3">PREFERENCES</h3>

<div className="card backdrop-blur-lg rounded-xl p-4 mb-3 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">Notifications</h4>
<p className="text-sm text-dimmed">Payment reminders, updates</p>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked className="absolute block w-6 h-6 rounded-full bg-white border-4 border-indigo-600 appearance-none cursor-pointer checked:right-0 checked:border-indigo-600 focus:outline-none duration-200 ease-in" id="toggle-notifications" name="toggle" type="checkbox" />
<label className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer" htmlFor="toggle-notifications"></label>
</div>
</div>
</div>

<div className="card backdrop-blur-lg rounded-xl p-4 mb-3 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">Currency</h4>
<p className="text-sm text-dimmed">USD ($)</p>
</div>
<button className="text-indigo-500">
<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
<path d="M7 10l5 5 5-5z"></path>
</svg>
</button>
</div>
</div>

<div className="card backdrop-blur-lg rounded-xl p-4 profile-card">
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
<svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="font-medium">App Theme</h4>
<p className="text-sm text-dimmed" id="theme-text">Dark mode</p>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked className="absolute block w-6 h-6 rounded-full bg-white border-4 border-indigo-600 appearance-none cursor-pointer checked:right-0 checked:border-indigo-600 focus:outline-none duration-200 ease-in" id="toggle-theme" name="toggle" type="checkbox" />
<label className="block overflow-hidden h-6 rounded-full bg-gray-700 cursor-pointer" htmlFor="toggle-theme"></label>
</div>
</div>
</div>
</div>

<div className="mb-6">
<button className="w-full card backdrop-blur-lg rounded-xl p-4 text-red-500 font-medium flex items-center justify-center">
<svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
<path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path>
</svg>
          Log Out
        </button>
</div>
</div>

<div className="absolute bottom-6 left-5 right-5 nav-bar backdrop-blur-lg rounded-2xl py-3 px-6 flex items-center justify-between">
<button className="flex flex-col items-center justify-center w-16">
<svg className="w-6 h-6 text-dimmed" fill="currentColor" viewBox="0 0 24 24">
<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
</svg>
<span className="text-xs mt-1 text-dimmed">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16">
<svg className="w-6 h-6 text-dimmed" fill="currentColor" viewBox="0 0 24 24">
<path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path>
</svg>
<span className="text-xs mt-1 text-dimmed">Bills</span>
</button>
<button className="flex flex-col items-center justify-center w-16">
<svg className="w-6 h-6 text-dimmed" fill="currentColor" viewBox="0 0 24 24">
<path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
</svg>
<span className="text-xs mt-1 text-dimmed">Insights</span>
</button>
<button className="flex flex-col items-center justify-center w-16">
<svg className="w-6 h-6 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
<span className="text-xs mt-1 text-indigo-500 font-medium">Profile</span>
</button>
</div>

<div className="absolute bottom-2 left-0 right-0 flex justify-center">
<div className="home-indicator"></div>
</div>
</div>

    </>
  );
}
