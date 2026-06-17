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



  // Workspace dropdown toggle
  document.getElementById('workspaceBtn')?.addEventListener('click', function() {
    const menu = document.getElementById('workspaceMenu');
    menu?.classList.toggle('hidden');
  });

  // Flights toggle functionality
  document.getElementById('flightsToggleLight')?.addEventListener('click', function() {
    const list = document.getElementById('flightsListLight');
    const arrow = this.querySelector('svg');
    list?.classList.toggle('hidden');
    arrow?.classList.toggle('rotate-180');
  });

  document.getElementById('flightsToggleDark')?.addEventListener('click', function() {
    const list = document.getElementById('flightsListDark');
    const arrow = this.querySelector('svg');
    list?.classList.toggle('hidden');
    arrow?.classList.toggle('rotate-180');
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
      

<aside className="sidebar beautiful-shadow overflow-hidden bg-white rounded-2xl border-zinc-200">

<div className="flex items-center justify-between border-b pt-5 pr-5 pb-5 pl-5 border-zinc-100">
<button className="flex items-center gap-2 beautiful-shadow hover:shadow-md transition-all text-sm font-semibold bg-gradient-to-r from-sky-50 to-blue-50 border-sky-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" id="workspaceBtn">
<svg className="w-4 h-4 text-sky-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-zinc-800">SkyFlow</span>
<svg className="w-4 h-4 text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Pilot Avatar" className="w-10 h-10 rounded-xl object-cover border-2 beautiful-shadow border-zinc-200" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1080&amp;q=80"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white pulse-dot"></div>
</div>
</div>

<div className="mx-5 mt-2 rounded-xl bg-gradient-to-br to-sky-50 beautiful-shadow border p-5 text-sm hidden from-zinc-50 border-zinc-200" id="workspaceMenu">
<div className="mb-4 pb-4 border-b border-zinc-200">
<p className="font-semibold text-zinc-800">Captain Sarah Mitchell</p>
<p className="text-xs mt-1 text-zinc-500">sarah.mitchell@skyflow.aero</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
<span className="text-xs text-zinc-600">Active - Ready for Flight</span>
</div>
</div>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="w-4 h-4 text-sky-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="font-medium">SkyFlow Airlines</span>
<svg className="w-4 h-4 ml-auto text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="w-4 h-4 text-orange-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-7l-2-2"></path><path d="M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z"></path><path d="M8 14a5 5 0 1 1 8 0"></path></svg>
<span>Cargo Express</span>
</button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="w-4 h-4 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path><path d="m21 12-6 0m-6 0-6 0"></path></svg>
<span>Charter Wings</span>
</button>
<hr className="my-4 border-zinc-200"/>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors text-zinc-600">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      Flight Settings
    </button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors text-red-600">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16,17 21,12 16,7"></polyline><line x1="21" x2="9" y1="12" y2="12"></line></svg>
      Sign Out
    </button>
</div>

<nav className="select-none text-sm pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
      Flight Dashboard
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m0-18c0 1-4 1-4 1s1 0 1 4"></path></svg>
      Flight Crew
      <span className="ml-auto bg-sky-100 text-sky-800 text-xs px-2 py-1 rounded-full font-medium">6</span>
</a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full uppercase text-xs tracking-wider font-semibold mb-3 text-zinc-500" id="flightsToggleLight">
<svg className="w-4 h-4 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Active Flights
        <svg className="w-4 h-4 ml-auto rounded p-0.5 transition-colors hover:bg-zinc-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1" id="flightsListLight">
<button className="flex items-center gap-3 w-full beautiful-shadow text-white bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl pt-3 pr-4 pb-3 pl-4">
<span className="w-2 h-2 rounded-full bg-white pulse-dot"></span>
<div className="flex flex-col items-start">
<span className="font-medium">SF-2847 JFK→LAX</span>
<span className="text-xs text-sky-100">Boeing 737-800</span>
</div>
<svg className="w-4 h-4 ml-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<a className="block pl-9 py-2 rounded-lg transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50" href="#">Pre-Flight Check</a>
<a className="block pl-9 py-2 rounded-lg transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50" href="#">Weather Brief</a>
<a className="block pl-9 py-2 rounded-lg transition-colors text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50" href="#">Flight Plan</a>
<button className="flex items-center gap-3 w-full px-4 py-3 mt-2 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<div className="flex flex-col items-start">
<span>SF-1203 ORD→MIA</span>
<span className="text-xs text-zinc-500">Airbus A320</span>
</div>
<div className="ml-auto flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs text-zinc-500">2h</span>
</div>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<div className="flex flex-col items-start">
<span className="">SF-0567 SEA→DEN</span>
<span className="text-xs text-zinc-500">Boeing 777-200</span>
</div>
<span className="ml-auto text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">Delayed</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<div className="flex flex-col items-start">
<span>SF-9122 ATL→PHX</span>
<span className="text-xs text-zinc-500">Boeing 737 MAX</span>
</div>
<span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Alert</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="uppercase text-xs tracking-wider font-semibold mb-3 text-zinc-500">Operations</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Schedule Flight
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          Maintenance Log
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors relative text-zinc-700 hover:bg-zinc-100" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
          Flight Alerts
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 pulse-dot"></span>
</a>
</div>
</div>
</nav>
</aside>

<aside className="sidebar beautiful-shadow-dark overflow-hidden rounded-2xl bg-zinc-900 border-zinc-700">

<div className="flex items-center justify-between p-5 border-b border-zinc-800">
<button className="flex items-center gap-2 transition-colors beautiful-shadow-dark text-sm font-semibold border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 hover:bg-zinc-700 bg-zinc-800 border-zinc-700">
<svg className="w-4 h-4 text-cyan-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-white">SkyFlow</span>
<svg className="w-4 h-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Pilot Avatar" className="w-10 h-10 rounded-xl object-cover border-2 beautiful-shadow-dark border-zinc-700" src="https://images.unsplash.com/photo-1502452213786-a5bc0a67e963?w=1080&amp;q=80"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 pulse-dot border-zinc-900"></div>
</div>
</div>

<nav className="select-none text-sm text-white pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl beautiful-shadow-dark" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Control Tower</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors hover:text-white hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
      Flight Operations
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 rounded-xl transition-colors hover:text-white hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-3-3m0-18c0 1-4 1-4 1s1 0 1 4"></path></svg>
      Crew Management
      <span className="ml-auto bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full font-medium">8</span>
</a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full uppercase text-xs tracking-wider font-semibold mb-3 text-zinc-400" id="flightsToggleDark">
<svg className="w-4 h-4 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Current Flights
        <svg className="w-4 h-4 ml-auto rounded p-0.5 transition-colors hover:bg-zinc-700 text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1" id="flightsListDark">
<button className="flex items-center gap-3 w-full beautiful-shadow-dark text-white bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl pt-3 pr-4 pb-3 pl-4">
<span className="w-2 h-2 rounded-full bg-white pulse-dot"></span>
<div className="flex flex-col items-start">
<span className="font-medium">NX-4521 LAX→JFK</span>
<span className="text-xs text-emerald-100">Airbus A350</span>
</div>
<div className="ml-auto flex items-center gap-1">
<span className="text-xs text-emerald-100">Cruising</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12,6 12,12 16,14"></polyline></svg>
</div>
</button>
<a className="block pl-9 py-2 hover:text-white rounded-lg transition-colors text-zinc-400 hover:bg-zinc-800" href="#">Flight Status</a>
<a className="block pl-9 py-2 hover:text-white rounded-lg transition-colors text-zinc-400 hover:bg-zinc-800" href="#">Weather Update</a>
<a className="block pl-9 py-2 hover:text-white rounded-lg transition-colors text-zinc-400 hover:bg-zinc-800" href="#">Navigation</a>
<button className="flex items-center gap-3 w-full px-4 py-3 mt-2 rounded-xl transition-colors text-zinc-300 hover:bg-zinc-800">
<span className="w-2 h-2 rounded-full bg-yellow-500"></span>
<div className="flex flex-col items-start">
<span className="">NX-7849 DFW→SFO</span>
<span className="text-xs text-zinc-500">Boeing 787-9</span>
</div>
<span className="ml-auto text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">Boarding</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-zinc-300 hover:bg-zinc-800">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<div className="flex flex-col items-start">
<span>NX-2196 MIA→BOS</span>
<span className="text-xs text-zinc-500">Embraer E190</span>
</div>
<div className="ml-auto flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-zinc-500">45m</span>
</div>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors text-zinc-300 hover:bg-zinc-800">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
<div className="flex flex-col items-start">
<span>NX-5033 SEA→PHX</span>
<span className="text-xs text-zinc-500">Boeing 737-900</span>
</div>
<span className="ml-auto text-xs bg-orange-500/20 text-orange-300 px-2 py-1 rounded-full">Weather</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="uppercase text-xs tracking-wider font-semibold mb-3 text-zinc-400">Mission Control</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors hover:text-white text-zinc-300 hover:bg-zinc-800" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Flight Schedule
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors hover:text-white text-zinc-300 hover:bg-zinc-800" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
          Aircraft Status
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors hover:text-white relative text-zinc-300 hover:bg-zinc-800" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7-3 9-6 9s-6-2-6-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
          System Alerts
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400 pulse-dot"></span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-colors hover:text-white text-zinc-300 hover:bg-zinc-800" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12"></polyline></svg>
          Performance
        </a>
</div>
</div>
</nav>
</aside>


    </>
  );
}
