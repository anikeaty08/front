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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Nunito', 'sans-serif'],
},
}
}
}



      function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('w-[260px]');
        sidebar.classList.toggle('w-[80px]');
        sidebar.classList.toggle('collapsed');
      }

      function toggleTheme() {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        const icon = document.getElementById('theme-icon');
        const text = document.getElementById('theme-text');
        
        if (isDark) {
            // Switch to Light
            html.classList.remove('dark');
            icon.setAttribute('icon', 'solar:moon-linear'); // Show Moon (to go Dark)
            text.textContent = 'Dark Mode';
        } else {
            // Switch to Dark
            html.classList.add('dark');
            icon.setAttribute('icon', 'solar:sun-2-linear'); // Show Sun (to go Light)
            text.textContent = 'Light Mode';
        }
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
      

<div className="absolute top-0 left-0 right-0 h-[2px] bg-[#22c55e] z-50"></div>
<div className="flex w-full h-screen pt-[2px]">

<aside className="flex flex-col shrink-0 sidebar-transition group text-gray-100 bg-[#181b21] w-[260px] z-40 border-gray-800 border-r relative shadow-[4px_0_24px_rgba(0,0,0,0.02)]" id="sidebar">

<div className="h-[72px] flex items-center px-4 border-b border-gray-800 overflow-hidden relative shrink-0 transition-all gap-2 group-[.collapsed]:justify-center group-[.collapsed]:px-1">

<div className="flex shrink-0 transition-all text-white bg-[#009639] w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<iconify-icon className="" icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>

<div className="flex flex-col whitespace-nowrap opacity-100 group-[.collapsed]:opacity-0 group-[.collapsed]:hidden transition-opacity duration-200">
<span className="text-white text-sm font-semibold tracking-tight">SDP </span>
<span className="text-xs text-gray-400 font-medium">Facility Suite</span>
</div>

<button className="ml-auto w-6 h-6 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer group-[.collapsed]:ml-0 group-[.collapsed]:static" onclick="toggleSidebar()">
<iconify-icon className="transition-transform duration-300 group-[.collapsed]:rotate-180" height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="pt-6 px-4 group-[.collapsed]:px-2">
<div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2 group-[.collapsed]:hidden whitespace-nowrap">
            Monitoring
          </div>

<div className="flex items-center gap-3 px-3 py-2 bg-[#22c55e]/10 text-[#22c55e] border-l-[3px] border-[#22c55e] text-sm font-semibold cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0 group-[.collapsed]:border-l-0 group-[.collapsed]:rounded-lg">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap">Dashboard</span>
</div>

<div className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap">Facility Map</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0">
<iconify-icon className="" icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap">Analytics</span>
</div>
</div>

<div className="pt-4 px-4 mt-2 border-t border-gray-800 group-[.collapsed]:px-2">
<div className="text-[10px] font-semibold uppercase tracking-wider text-gray-500 px-3 mb-2 group-[.collapsed]:hidden whitespace-nowrap">
            Management
          </div>

<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap">Events</span>
</div>

<div className="flex items-center gap-3 px-3 py-2 mt-1 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0">
<iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap">Tasks</span>
</div>
</div>
<div className="mt-auto px-4 pb-2 group-[.collapsed]:px-2">

<button className="w-full flex items-center gap-3 px-3 py-2 mb-4 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-gray-200 transition-colors text-sm font-medium cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:px-0 border border-transparent hover:border-gray-700" onclick="toggleTheme()">

<iconify-icon icon="solar:moon-linear" id="theme-icon" strokeWidth="1.5" width="20"></iconify-icon>
<span className="group-[.collapsed]:hidden whitespace-nowrap" id="theme-text">Dark Mode</span>
</button>
</div>

<div className="mb-6 px-4 group-[.collapsed]:px-2">
<div className="flex items-center gap-3 p-2 rounded-lg border border-transparent hover:border-gray-700 hover:bg-gray-800 transition-all cursor-pointer group-[.collapsed]:justify-center group-[.collapsed]:p-0">
<img alt="User" className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-700 shadow-sm shrink-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4aab28e-26fa-437c-bd19-d95c86c0c1a6_320w.jpg"/>
<div className="flex flex-col min-w-0 group-[.collapsed]:hidden">
<span className="text-xs font-semibold text-white truncate">Sarah Johnson</span>
<span className="text-[11px] text-gray-400 truncate">Facility Manager</span>
</div>
<div className="ml-auto text-gray-400 group-[.collapsed]:hidden">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden bg-gray-50/50 dark:bg-[#0f1115]">

<div className="flex-1 overflow-y-auto md:p-8 no-scrollbar pt-4 pr-4 pb-4 pl-4">

<header className="dark:bg-[#181b21]/80 dark:border-gray-800 flex sticky z-30 transition-colors bg-white/80 h-[72px] border-gray-100 border rounded-2xl mb-8 pr-6 pl-6 top-0 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] backdrop-blur-md items-center justify-between">
<div className="flex flex-1 gap-x-4 gap-y-4 items-center">
<div className="md:hidden text-gray-500" onclick="toggleSidebar()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>
<div className="hidden md:flex items-center gap-2 bg-gray-50 dark:bg-[#202329] border border-gray-200 dark:border-gray-700 px-3 py-2 rounded-lg w-[320px] focus-within:ring-2 focus-within:ring-[#009639]/10 focus-within:border-[#009639] dark:focus-within:border-[#22c55e] transition-all">
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<input className="bg-transparent border-none outline-none text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 w-full" placeholder="Search..." type="text"/>
</div>
<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-gray-50 dark:hover:bg-[#202329] text-gray-500 dark:text-gray-400 cursor-pointer border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all">
<iconify-icon className="" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm font-semibold">Jan 24, 2026</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#202329] transition-colors">
<iconify-icon className="" icon="solar:tuning-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#202329] transition-colors">
<iconify-icon icon="solar:sidebar-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#202329] transition-colors">
<iconify-icon icon="solar:share-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="max-w-[1440px] mx-auto mb-5 flex items-center gap-2 text-sm">
<span className="text-gray-500 dark:text-gray-400 font-medium">Building A</span>
<span className="text-gray-300 dark:text-gray-600">/</span>
<span className="text-gray-900 dark:text-white font-semibold">Main Floor</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-[1440px] mr-auto ml-auto pb-10 gap-x-6 gap-y-6">

<div className="bg-white dark:bg-[#181b21] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 flex flex-col transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Power Consumption
                  </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Real-time vs Baseline</p>
</div>
<div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#202329] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
<iconify-icon className="" icon="solar:bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mb-6">
<span className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">482</span>
<span className="text-base text-gray-400 font-medium ml-1">kW</span>
</div>
<div className="flex flex-col gap-4 mt-auto">

<div className="flex items-center justify-between text-sm">
<span className="w-12 text-gray-500 dark:text-gray-400 font-medium">HVAC</span>
<div className="flex-1 mx-4 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#009639] dark:bg-[#22c55e] w-[65%] rounded-full"></div>
</div>
<span className="font-semibold text-gray-900 dark:text-white tabular-nums">312 kW</span>
</div>

<div className="flex items-center justify-between text-sm">
<span className="w-12 text-gray-500 dark:text-gray-400 font-medium">Light</span>
<div className="flex-1 mx-4 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#009639]/60 dark:bg-[#22c55e]/60 w-[25%] rounded-full"></div>
</div>
<span className="font-semibold text-gray-900 dark:text-white tabular-nums">108 kW</span>
</div>

<div className="flex items-center justify-between text-sm">
<span className="w-12 text-gray-500 dark:text-gray-400 font-medium">Plug</span>
<div className="flex-1 mx-4 h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#009639]/30 dark:bg-[#22c55e]/30 w-[15%] rounded-full"></div>
</div>
<span className="font-semibold text-gray-900 dark:text-white tabular-nums">62 kW</span>
</div>
</div>
</div>

<div className="bg-white dark:bg-[#181b21] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 flex flex-col transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Air Quality
                  </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Zone B - Office Floor
                  </p>
</div>
<div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#202329] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
<iconify-icon className="" icon="solar:wind-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="flex gap-8 mb-6">
<div className="">
<div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Temperature
                  </div>
<div className="text-[28px] font-semibold text-gray-900 dark:text-white tracking-tight">
                    22.4°C
                  </div>
</div>
<div className="">
<div className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
  Humidity
</div>
<div className="text-[28px] font-semibold text-gray-900 dark:text-white tracking-tight">
                    45%
                  </div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 bg-gray-50/50 dark:bg-[#202329]/50 rounded-xl border border-gray-100 dark:border-gray-700 p-4 mt-auto">
<div className="">
<div className="flex justify-between mb-2">
<span className="dark:text-gray-400 text-xs font-medium text-gray-500">CO2</span>
<span className="bg-green-50 dark:bg-[#22c55e]/10 text-green-700 dark:text-[#22c55e] px-1.5 py-0.5 rounded text-[10px] font-semibold border border-green-100 dark:border-[#22c55e]/20">Good</span>
</div>
<div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#009639] dark:bg-[#22c55e] w-[30%] rounded-full"></div>
</div>
<div className="text-[10px] text-gray-400 mt-1 font-medium">
                    420 ppm
                  </div>
</div>
<div className="">
<div className="flex justify-between mb-2">
<span className="text-xs font-medium text-gray-500 dark:text-gray-400">VOCs</span>
<span className="bg-green-50 dark:bg-[#22c55e]/10 text-green-700 dark:text-[#22c55e] px-1.5 py-0.5 rounded text-[10px] font-semibold border border-green-100 dark:border-[#22c55e]/20">Good</span>
</div>
<div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
<div className="h-full bg-[#009639] dark:bg-[#22c55e] w-[15%] rounded-full"></div>
</div>
<div className="text-[10px] text-gray-400 mt-1 font-medium">
                    12 ppb
                  </div>
</div>
</div>
</div>

<div className="bg-white dark:bg-[#181b21] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 flex flex-col transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Occupancy
                  </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Badge Access Data</p>
</div>
<div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-[#202329] border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
<div className="mb-4">
<span className="text-4xl font-semibold text-gray-900 dark:text-white tracking-tight">342</span>
<span className="text-base text-gray-400 font-medium ml-1">/ 450</span>
</div>
<div className="mb-6">
<span className="inline-flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2.5 py-1 rounded-full text-xs font-semibold border border-blue-100 dark:border-blue-800/30">
<iconify-icon className="" icon="solar:info-circle-linear" strokeWidth="2" width="12"></iconify-icon>
                  76% Utilization
                </span>
</div>
<div className="flex dark:border-gray-800 dark:text-gray-400 text-xs font-medium text-gray-500 border-gray-100 border-t mt-auto pt-5 items-center justify-between">
<div className="">
    Zone A: <span className="text-gray-900 dark:text-white font-semibold">156</span>
</div>
<div className="">
    Zone B: <span className="text-gray-900 dark:text-white font-semibold">124</span>
</div>
<div>
    Conf: <span className="text-gray-900 dark:text-white font-semibold">62</span>
</div>
</div>
</div>

<div className="bg-white dark:bg-[#181b21] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 flex flex-col transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Zone Controls
                  </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Manual Overrides</p>
</div>
<span className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-amber-100 dark:border-amber-800/30">Override Active</span>
</div>
<div className="flex flex-col">

<div className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-gray-800">
<div className="">
<div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Main Cooling Loop
                    </div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Target: 18°C</div>
</div>
<div className="w-11 h-6 bg-[#009639] dark:bg-[#22c55e] rounded-full relative cursor-pointer transition-colors">
<div className="absolute top-[2px] right-[2px] w-5 h-5 bg-white rounded-full shadow-sm transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between py-4 border-b border-gray-50 dark:border-gray-800">
<div className="">
<div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Ventilation Boost
                    </div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Auto-off in 2h</div>
</div>
<div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer transition-colors hover:bg-gray-300 dark:hover:bg-gray-600">
<div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-sm transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between py-4">
<div className="">
<div className="text-sm font-semibold text-gray-900 dark:text-white">
                      Emergency Lighting
                    </div>
<div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Test Mode</div>
</div>
<div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative cursor-pointer transition-colors hover:bg-gray-300 dark:hover:bg-gray-600">
<div className="absolute top-[2px] left-[2px] w-5 h-5 bg-white rounded-full shadow-sm transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 bg-white dark:bg-[#181b21] rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 flex flex-col transition-colors">
<div className="flex justify-between items-start mb-2">
<div className="">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Energy Intensity Profile
                  </h3>
<p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Compared to last week</p>
</div>
<div className="flex bg-gray-50 dark:bg-[#202329] p-1 rounded-lg border border-gray-100 dark:border-gray-700">
<button className="px-3 py-1 rounded-md text-xs font-semibold bg-white dark:bg-[#2c3036] text-gray-900 dark:text-white shadow-sm border border-gray-100 dark:border-transparent">
                    6h
                  </button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    24h
                  </button>
<button className="px-3 py-1 rounded-md text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    7d
                  </button>
</div>
</div>
<div className="h-[200px] mt-4 flex items-end gap-3 pt-4 px-2">

<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[40%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[55%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[45%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[60%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[75%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[85%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-[#009639] dark:bg-[#22c55e] rounded-t-sm h-[70%] shadow-[0_0_12px_rgba(0,150,57,0.3)] dark:shadow-[0_0_12px_rgba(34,197,94,0.3)] relative group">

<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-semibold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">340 kW</div>
</div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[50%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[40%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[35%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[30%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
<div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-t-sm h-[25%] hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative group"></div>
</div>
<div className="flex justify-between mt-3 px-2 text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
<span>08:00</span>
<span className="">10:00</span>
<span className="">12:00</span>
<span className="">14:00</span>
<span className="">16:00</span>
<span className="">18:00</span>
</div>
</div>

<div className="col-span-1 md:col-span-2 xl:col-span-3 bg-white dark:bg-[#181b21] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors">
<div className="dark:border-gray-800 flex flex-wrap gap-4 border-gray-100 border-b pt-5 pr-6 pb-5 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-base font-semibold text-gray-900 dark:text-white tracking-tight">
                    Device Status Report
                  </h3>
<span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border border-blue-100 dark:border-blue-800/30">124 Connected</span>
</div>
<div className="flex gap-4 ml-auto gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2 text-gray-400">
</div>
<div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700"></div>
<div className="flex gap-3">
<button className="dark:border-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#2c3036] transition-colors dark:bg-[#202329] text-xs font-semibold text-gray-600 bg-white border-gray-200 border rounded-lg pt-1.5 pr-3.5 pb-1.5 pl-3.5">
                      Export CSV
                    </button>
<button className="px-3.5 py-1.5 rounded-lg bg-[#009639] dark:bg-[#22c55e] dark:text-gray-900 text-white text-xs font-semibold shadow-sm hover:bg-[#007a2e] dark:hover:bg-[#16a34a] transition-colors border border-transparent">
                      Add Device
                    </button>
</div>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-gray-50/50 dark:bg-[#202329]/50">
<tr className="">
<th className="dark:text-gray-400 dark:border-gray-800 -multi text-xs font-semibold text-gray-500 border-gray-100 border-b pt-3 pr-6 pb-3 pl-6">
                        Device Name
                      </th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 -multi">
                        Location
                      </th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 -multi">
                        Status Message
                      </th>
<th className="dark:text-gray-400 dark:border-gray-800 text-xs font-semibold text-gray-500 border-gray-100 border-b pt-3 pr-6 pb-3 pl-6">
                        Maintenance
                      </th>
<th className="dark:text-gray-400 dark:border-gray-800 -multi text-xs font-semibold text-gray-500 border-gray-100 border-b pt-3 pr-6 pb-3 pl-6">
                        Firmware
                      </th>
<th className="px-6 py-3 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800 text-right -multi">
                        State
                      </th>
</tr>
</thead>
<tbody className="divide-y divide-gray-50 dark:divide-gray-800">

<tr className="hover:bg-gray-50/50 dark:hover:bg-[#2c3036] transition-colors group">
<td className="px-6 py-4">
<div className="font-semibold text-gray-900 dark:text-white text-sm">
                          PLC-Master-01
                        </div>
<div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                          ID: #88219
                        </div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">
                        Bsmt Level 2
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
<iconify-icon className="text-green-600 dark:text-[#22c55e]" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm">Operating normally</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Jan 12, 2026</td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        v2.4.1
                      </td>
<td className="px-6 py-4 text-right">
<span className="bg-green-50 dark:bg-[#22c55e]/10 text-green-700 dark:text-[#22c55e] px-2.5 py-1 rounded-full text-[11px] font-semibold border border-green-100 dark:border-[#22c55e]/20 inline-block">Active</span>
</td>
</tr>

<tr className="hover:bg-gray-50/50 dark:hover:bg-[#2c3036] transition-colors group">
<td className="px-6 py-4">
<div className="font-semibold text-gray-900 dark:text-white text-sm">
                          HVAC-Controller-B2
                        </div>
<div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                          ID: #44921
                        </div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">
                        Rooftop West
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
<iconify-icon className="text-red-600" icon="solar:danger-circle-linear" width="16"></iconify-icon>
<span className="text-sm">Pressure Error</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Dec 24, 2025</td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        v2.3.0
                      </td>
<td className="px-6 py-4 text-right">
<span className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-red-100 dark:border-red-800/30 inline-block">Alert</span>
</td>
</tr>

<tr className="hover:bg-gray-50/50 dark:hover:bg-[#2c3036] transition-colors group">
<td className="px-6 py-4">
<div className="font-semibold text-gray-900 dark:text-white text-sm">
                          Access-Gateway-04
                        </div>
<div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                          ID: #11029
                        </div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">
                        Lobby Main
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
<iconify-icon className="text-amber-500" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-sm">Update Scheduled</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Jan 02, 2026</td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        v3.0.0
                      </td>
<td className="px-6 py-4 text-right">
<span className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-amber-100 dark:border-amber-800/30 inline-block">Waiting</span>
</td>
</tr>

<tr className="hover:bg-gray-50/50 dark:hover:bg-[#2c3036] transition-colors group">
<td className="px-6 py-4">
<div className="font-semibold text-gray-900 dark:text-white text-sm">
                          Lighting-Panel-L3
                        </div>
<div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                          ID: #77341
                        </div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">
                        Level 3 East
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
<iconify-icon className="text-green-600 dark:text-[#22c55e]" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span className="text-sm">Operating normally</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Jan 18, 2026</td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        v1.9.4
                      </td>
<td className="px-6 py-4 text-right">
<span className="bg-green-50 dark:bg-[#22c55e]/10 text-green-700 dark:text-[#22c55e] px-2.5 py-1 rounded-full text-[11px] font-semibold border border-green-100 dark:border-[#22c55e]/20 inline-block">Active</span>
</td>
</tr>

<tr className="hover:bg-gray-50/50 dark:hover:bg-[#2c3036] transition-colors group">
<td className="px-6 py-4">
<div className="font-semibold text-gray-900 dark:text-white text-sm">
                          Chiller-Unit-02
                        </div>
<div className="text-[11px] text-gray-400 mt-0.5 font-mono">
                          ID: #55990
                        </div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 font-medium">
                        Plant Room
                      </td>
<td className="px-6 py-4">
<div className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
<iconify-icon className="text-amber-500" icon="solar:danger-triangle-linear" width="16"></iconify-icon>
<span className="text-sm">High load trend</span>
</div>
</td>
<td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">Jan 05, 2026</td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">
                        v2.1.7
                      </td>
<td className="px-6 py-4 text-right">
<span className="bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-amber-100 dark:border-amber-800/30 inline-block">Watch</span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-end gap-4">
<span className="text-xs font-medium text-gray-500 dark:text-gray-400">Showing 1-5 of 124</span>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#2c3036] transition-colors bg-white dark:bg-[#202329] disabled:opacity-50">
<iconify-icon icon="solar:alt-arrow-left-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#2c3036] transition-colors bg-white dark:bg-[#202329]">
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
