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
      
<div className="relative bg-black rounded-[2.5rem] shadow-2xl p-2 w-[390px] h-[844px] flex flex-col items-center border-8 border-neutral-900 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-black rounded-b-2xl w-32 h-5 flex items-center justify-center">
<div className="w-7 h-2 rounded bg-neutral-800 mx-1"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>

<div className="absolute right-0 top-24 w-1 h-10 rounded-l bg-neutral-900"></div>
<div className="absolute right-0 top-44 w-1 h-7 rounded-l bg-neutral-900"></div>
<div className="absolute left-0 top-32 w-1 h-20 rounded-r bg-neutral-900"></div>

<div className="relative bg-gradient-to-br from-indigo-100 via-pink-50 to-yellow-50 rounded-[2rem] w-[366px] h-[800px] overflow-y-auto">

<div className="fixed -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-indigo-400 to-blue-400 opacity-30 rounded-full blur-2xl z-0"></div>
<div className="fixed top-20 right-0 w-72 h-72 bg-gradient-to-br from-pink-300 to-yellow-200 opacity-40 rounded-full blur-2xl z-0"></div>
<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-96 h-44 bg-gradient-to-br from-indigo-200 via-pink-200 to-yellow-100 opacity-30 rounded-full blur-2xl z-0"></div>
<main className="relative z-10 flex flex-col px-5 pt-8 pb-6 min-h-full">

<div className="flex items-center mb-7">
<button className="mr-4 rounded-xl bg-white/60 border border-white/40 shadow backdrop-blur p-2 hover:bg-white/80 transition">
<svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<div>
<h2 className="font-bold text-xl text-indigo-900">Profile</h2>
<p className="text-xs text-pink-500 font-medium">Account</p>
</div>
</div>

<div className="flex flex-col items-center mb-6 relative">
<div className="relative">
<img alt="User Avatar" className="w-24 h-24 rounded-2xl border-4 border-white shadow-lg object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<span className="absolute bottom-1 right-1 w-6 h-6 rounded-full border-2 border-white bg-gradient-to-br from-yellow-300 to-pink-400 flex items-center justify-center text-white shadow text-xs font-bold">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="#FCD34D" stroke="#F59E42"></path>
</svg>
</span>
</div>
<h3 className="mt-4 text-lg font-bold text-indigo-900">Ava Henderson</h3>
<p className="text-indigo-500 text-sm">UI/UX Designer</p>
<div className="flex items-center gap-2 mt-2">
<span className="bg-white/80 border border-white/40 rounded-lg px-3 py-1 text-xs text-pink-500 font-medium shadow">Premium</span>
<span className="bg-white/80 border border-white/40 rounded-lg px-3 py-1 text-xs text-indigo-500 font-medium shadow flex items-center">
<svg className="w-3 h-3 mr-1 text-yellow-400" fill="currentColor" viewbox="0 0 20 20">
<path d="M10 15l-5.878 3.09 1.122-6.545L.487 6.91l6.564-.955L10 0l2.949 5.955 6.564.955-4.757 4.635 1.122 6.545z"></path>
</svg>
              2,530 XP
            </span>
</div>
</div>

<div className="bg-white/80 border border-white/40 rounded-2xl shadow-lg p-5 mb-7 flex flex-col items-center">
<div className="flex justify-between w-full mb-4">
<div className="flex flex-col items-center">
<span className="text-lg font-bold text-indigo-900">24</span>
<span className="text-xs text-indigo-500">Courses</span>
</div>
<div className="flex flex-col items-center">
<span className="text-lg font-bold text-indigo-900">13</span>
<span className="text-xs text-indigo-500">Certs</span>
</div>
<div className="flex flex-col items-center">
<span className="text-lg font-bold text-indigo-900">89%</span>
<span className="text-xs text-indigo-500">Progress</span>
</div>
</div>
<div className="w-full mb-2">
<div className="flex items-center justify-between mb-1">
<span className="text-xs text-indigo-900 font-semibold">Learning Streak</span>
<span className="text-xs text-yellow-400 font-semibold">🔥 21 days</span>
</div>
<div className="w-full h-2 bg-pink-100 rounded-full relative overflow-hidden">
<div className="h-full bg-gradient-to-r from-pink-400 via-yellow-200 to-yellow-300 rounded-full" style={{width: '89%'}}></div>
</div>
</div>
</div>

<h4 className="font-bold text-indigo-900 text-base mb-2">Badges</h4>
<div className="flex gap-3 mb-8">
<div className="flex flex-col items-center bg-white/80 border border-white/40 rounded-xl px-3 py-2 shadow">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-pink-400 flex items-center justify-center mb-1">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="#FCD34D" r="10"></circle>
<path d="M12 8v4l3 3" stroke="#fff" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-indigo-900">Streak</span>
</div>
<div className="flex flex-col items-center bg-white/80 border border-white/40 rounded-xl px-3 py-2 shadow">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 flex items-center justify-center mb-1">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M17 17l-5 5m0 0l-5-5m5 5V12a5 5 0 00-5-5H5" stroke="#fff" strokeLinecap="round"></path>
<circle cx="12" cy="7" fill="#818CF8" r="4"></circle>
</svg>
</div>
<span className="text-xs font-semibold text-indigo-900">Top Learner</span>
</div>
<div className="flex flex-col items-center bg-white/60 border border-white/40 rounded-xl px-3 py-2 shadow">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-yellow-200 flex items-center justify-center mb-1 opacity-60">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 17l-5-5h10l-5 5z" fill="#F472B6" stroke="#fff"></path>
</svg>
</div>
<span className="text-xs font-semibold text-indigo-400">Creative</span>
</div>
</div>

<h4 className="font-bold text-indigo-900 text-base mb-2">Settings</h4>
<div className="flex flex-col gap-3 mb-8">
<a className="flex items-center justify-between bg-white/80 border border-white/40 rounded-xl px-4 py-3 shadow hover:bg-white/90 transition" href="#">
<span className="flex items-center gap-2 text-indigo-500 font-medium">
<svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4l3 3"></path>
</svg>
              Account
            </span>
<svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<a className="flex items-center justify-between bg-white/80 border border-white/40 rounded-xl px-4 py-3 shadow hover:bg-white/90 transition" href="#">
<span className="flex items-center gap-2 text-indigo-500 font-medium">
<svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M16 3v4a1 1 0 001 1h4"></path>
</svg>
              Notifications
            </span>
<svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<a className="flex items-center justify-between bg-white/80 border border-white/40 rounded-xl px-4 py-3 shadow hover:bg-white/90 transition" href="#">
<span className="flex items-center gap-2 text-indigo-500 font-medium">
<svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 00-3.95 19.31c.63.12.85-.27.85-.6v-2.17c-3.34.73-4.04-1.61-4.04-1.61-.57-1.44-1.39-1.83-1.39-1.83-1.13-.76.09-.74.09-.74 1.25.09 1.91 1.28 1.91 1.28 1.11 1.89 2.91 1.35 3.63 1.03.11-.8.43-1.35.78-1.66-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.51.12-3.14 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 7.07c1.02.005 2.04.139 2.99.41 2.29-1.55 3.3-1.23 3.3-1.23.66 1.63.24 2.84.12 3.14.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.44.38.82 1.13.82 2.28v3.38c0 .33.22.72.86.6A10 10 0 0012 2z"></path>
</svg>
              Help Center
            </span>
<svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>

<a className="mt-auto w-full bg-gradient-to-r from-pink-400 via-yellow-200 to-yellow-300 text-indigo-900 font-bold py-3 rounded-xl shadow-xl text-center text-base transition hover:scale-105" href="#">
          Sign Out
        </a>
</main>

<nav className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 border border-white/40 rounded-2xl shadow-lg backdrop-blur-xl flex items-center justify-around py-3 z-20">
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M3 9.75L12 3l9 6.75V19a2 2 0 01-2 2H5a2 2 0 01-2-2V9.75z"></path>
<path d="M9 22V12h6v10"></path>
</svg>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
<span className="text-xs">Courses</span>
</button>
<button className="flex flex-col items-center text-indigo-400">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 16l4-8 4 8"></path>
</svg>
<span className="text-xs">Progress</span>
</button>
<button className="flex flex-col items-center text-indigo-600 font-semibold">
<svg className="w-6 h-6 mb-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
</svg>
<span className="text-xs">Profile</span>
</button>
</nav>
</div>
</div>

    </>
  );
}
