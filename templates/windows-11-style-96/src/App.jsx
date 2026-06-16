import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Segoe UI Variable', 'Segoe UI', 'Inter', 'sans-serif'],
},
colors: {
win: {
bg: 'rgba(243, 243, 243, 0.85)',
glass: 'rgba(255, 255, 255, 0.75)',
hover: 'rgba(255, 255, 255, 0.5)',
border: 'rgba(0, 0, 0, 0.06)',
}
},
boxShadow: {
'glass': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'window': '0 0 0 1px rgba(0,0,0,0.08), 0 20px 40px rgba(0,0,0,0.12)',
'flyout': '0 0 0 1px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.12)',
},
animation: {
'pop-in': 'popIn 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
},
keyframes: {
popIn: {
'0%': { transform: 'scale(0.95) translateY(10px)', opacity: '0' },
'100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="flex flex-col z-0 w-full h-full pt-2 pr-2 pb-2 pl-2 relative gap-x-1 gap-y-1">

<div className="w-24 h-24 flex flex-col items-center justify-start p-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-colors cursor-pointer group border border-transparent hover:border-white/10">
<div className="w-10 h-10 mb-1 relative drop-shadow-md">
<svg className="w-full h-full text-white fill-white/10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
</svg>
</div>
<span className="text-xs text-white text-center drop-shadow-md line-clamp-2 leading-tight">Recycle Bin</span>
</div>

<div className="w-24 h-24 flex flex-col items-center justify-start p-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-colors cursor-pointer group border border-transparent hover:border-white/10">
<div className="w-10 h-10 mb-1 relative drop-shadow-md">
<svg className="w-full h-full text-blue-200 fill-blue-400/20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="14" rx="2" ry="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
<span className="text-xs text-white text-center drop-shadow-md line-clamp-2 leading-tight">This PC</span>
</div>

<div className="w-24 h-24 flex flex-col items-center justify-start p-2 rounded-sm hover:bg-white/10 hover:backdrop-blur-sm transition-colors cursor-pointer group border border-transparent hover:border-white/10">
<div className="w-10 h-10 mb-1 relative drop-shadow-md flex items-center justify-center bg-gradient-to-b from-green-400 to-blue-600 rounded-full p-2 text-white">
<svg className="lucide lucide-waves w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<span className="text-xs text-white text-center drop-shadow-md line-clamp-2 leading-tight">Microsoft Edge</span>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#f3f3f3] rounded-lg shadow-window flex flex-col overflow-hidden animate-pop-in border border-gray-400/20 ring-1 ring-white/40 z-10">

<div className="h-10 bg-white/50 flex items-center justify-between px-4 select-none draggable backdrop-blur-xl">
<div className="flex items-center gap-3">
<span className="text-xs font-medium">Settings</span>
</div>
<div className="flex items-center gap-4 h-full">
<button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-md transition-colors"><svg className="lucide lucide-minus w-4 h-4 text-gray-500" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg></button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-md transition-colors"><svg className="lucide lucide-square w-3 h-3 text-gray-500" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg></button>
<button className="w-8 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white rounded-md transition-colors group"><svg className="lucide lucide-x w-4 h-4 text-gray-500 group-hover:text-white" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
</div>
</div>

<div className="flex-1 flex bg-[#f3f3f3]">

<div className="w-64 p-2 flex flex-col gap-1 overflow-y-auto">
<div className="flex items-center gap-3 p-2 px-3 mb-4">
<div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border border-gray-400/20">
<img alt="User" className="w-full h-full bg-white" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-gray-800">User</span>
<span className="text-xs text-gray-500">Local Account</span>
</div>
</div>
<div className="relative">
<input className="w-full h-8 bg-white border border-gray-300 rounded-md px-8 text-xs focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="Find a setting" type="text"/>
<svg className="lucide lucide-search absolute left-2.5 top-2 w-3.5 h-3.5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="mt-4 flex flex-col gap-0.5">
<button className="flex items-center gap-3 px-3 py-2 rounded-md bg-white text-gray-900 shadow-sm border border-black/5">
<svg className="lucide lucide-monitor w-4 h-4 text-blue-500" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
<span className="text-sm">System</span>
<div className="ml-auto w-1 h-3 rounded-full bg-blue-500"></div>
</button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200/50 text-gray-600 transition-colors">
<svg className="lucide lucide-bluetooth w-4 h-4 text-gray-500" data-lucide="bluetooth" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10-5 5V2l5 5L7 17"></path></svg>
<span className="text-sm">Bluetooth &amp; devices</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200/50 text-gray-600 transition-colors">
<svg className="lucide lucide-wifi w-4 h-4 text-gray-500" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="text-sm">Network &amp; internet</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200/50 text-gray-600 transition-colors">
<svg className="lucide lucide-brush w-4 h-4 text-gray-500" data-lucide="brush" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 10 3 3"></path><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"></path><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"></path></svg>
<span className="text-sm">Personalization</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200/50 text-gray-600 transition-colors">
<svg className="lucide lucide-layout-grid w-4 h-4 text-gray-500" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-sm">Apps</span>
</button>
<button className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-200/50 text-gray-600 transition-colors">
<svg className="lucide lucide-user-circle w-4 h-4 text-gray-500" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
<span className="text-sm">Accounts</span>
</button>
</div>
</div>

<div className="flex-1 bg-white m-2 ml-0 rounded-lg border border-black/5 p-6 overflow-y-auto">
<h1 className="text-2xl font-semibold mb-6">System</h1>
<div className="grid grid-cols-1 gap-1">

<div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 border border-gray-100 hover:border-gray-200 transition-all cursor-pointer group mb-4 bg-gray-50">
<div className="flex items-center gap-4">
<svg className="lucide lucide-laptop w-12 h-12 text-gray-400 stroke-1" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<div className="flex flex-col">
<span className="font-semibold text-base">Surface Laptop Studio</span>
<span className="text-xs text-gray-500">Rename</span>
</div>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
<svg className="lucide lucide-monitor w-4 h-4 text-blue-600" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-gray-900">Display</span>
<span className="text-xs text-gray-500">Monitors, brightness, night light, display profile</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded-md bg-purple-50 flex items-center justify-center">
<svg className="lucide lucide-volume-2 w-4 h-4 text-purple-600" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-gray-900">Sound</span>
<span className="text-xs text-gray-500">Volume levels, output, input, sound devices</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded-md bg-orange-50 flex items-center justify-center">
<svg className="lucide lucide-bell w-4 h-4 text-orange-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-gray-900">Notifications</span>
<span className="text-xs text-gray-500">Alerts from apps and system, do not disturb</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center">
<svg className="lucide lucide-battery-medium w-4 h-4 text-teal-600" data-lucide="battery-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14v-4"></path><path d="M22 14v-4"></path><path d="M6 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-gray-900">Power &amp; battery</span>
<span className="text-xs text-gray-500">Sleep, battery usage, battery saver</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-200 hover:shadow-sm transition-all cursor-pointer">
<div className="w-8 h-8 rounded-md bg-indigo-50 flex items-center justify-center">
<svg className="lucide lucide-hard-drive w-4 h-4 text-indigo-600" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
</div>
<div className="flex flex-col flex-1">
<span className="text-sm font-medium text-gray-900">Storage</span>
<span className="text-xs text-gray-500">Storage space, drives, configuration rules</span>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>
</div>
</div>



<div className="w-full h-12 taskbar-glass border-t border-white/20 flex items-center justify-between px-3 relative z-50">

<div className="flex items-center h-full hover:bg-white/40 rounded-md px-2 cursor-default transition-colors group">
<div className="relative w-6 h-6 mr-2">
<svg className="lucide lucide-cloud-sun w-5 h-5 text-yellow-600" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-medium text-gray-700">72°F</span>
<span className="text-[10px] text-gray-500 leading-none">Sunny</span>
</div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 h-full flex items-center gap-1">

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<svg className="w-6 h-6" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H11V11H4V4Z" fill="#00ADEF"></path>
<path d="M4 13H11V20H4V13Z" fill="#00ADEF"></path>
<path d="M13 4H20V11H13V4Z" fill="#00ADEF"></path>
<path d="M13 13H20V20H13V13Z" fill="#00ADEF"></path>
</svg>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<svg className="lucide lucide-search w-5 h-5 text-gray-700 stroke-[2.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<div className="w-5 h-5 flex items-center justify-center opacity-70">
<svg className="w-4 h-4" fill="black" viewbox="0 0 24 24"><path d="M2 5h9v9H2zM13 5h9v9h-9zM2 16h9v3H2zM13 16h9v3h-9z"></path></svg>
</div>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<div className="bg-gradient-to-tr from-blue-300 to-white w-5 h-5 rounded-sm border border-gray-400/30"></div>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<div className="relative w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm">
<svg className="lucide lucide-video w-3 h-3 text-purple-600 fill-purple-600" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full border border-white"></div>
</div>
</div>

<div className="w-[1px] h-5 bg-gray-400/30 mx-1"></div>

<div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/40 border-b-2 border-blue-500 cursor-default relative">
<div className="w-6 h-6 bg-[#FCD53F] rounded-sm shadow-sm relative flex items-center justify-center overflow-hidden">
<div className="absolute top-0 w-full h-2 bg-[#FCD53F] brightness-110"></div>
<div className="absolute bottom-0 w-full h-4 bg-[#FCD53F] shadow-inner"></div>
<div className="w-4 h-1 bg-white/30 absolute top-2 rounded-full"></div>
</div>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-green-400 via-blue-500 to-blue-700 flex items-center justify-center text-white shadow-sm">
<span className="font-bold text-[10px] italic">e</span>
</div>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/50 active:bg-white/30 transition-all cursor-default">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center shadow-sm text-blue-500 relative">
<div className="absolute inset-0 bg-gradient-to-br from-sky-300 to-blue-600 opacity-20 rounded-md"></div>
<svg className="lucide lucide-shopping-bag w-3.5 h-3.5 fill-current" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
</div>

<div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/40 border-b-2 border-gray-500 cursor-default">
<div className="w-6 h-6 bg-gray-500 rounded-md flex items-center justify-center shadow-sm text-white">
<svg className="lucide lucide-settings w-4 h-4 animate-spin-slow" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
</div>

<div className="flex items-center gap-1 h-full">
<div className="hover:bg-white/40 rounded-md p-1 cursor-default">
<svg className="lucide lucide-chevron-up w-4 h-4 text-gray-600" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</div>

<div className="flex items-center gap-2 hover:bg-white/40 rounded-md px-2 py-1 transition-colors cursor-default h-[80%]">
<svg className="lucide lucide-wifi w-4 h-4 text-gray-700" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-volume-2 w-4 h-4 text-gray-700" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-battery-medium w-4 h-4 text-gray-700 -rotate-90" data-lucide="battery-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14v-4"></path><path d="M22 14v-4"></path><path d="M6 14v-4"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>

<div className="flex flex-col items-end justify-center px-2 hover:bg-white/40 rounded-md h-[80%] cursor-default transition-colors min-w-[70px]">
<span className="text-xs font-medium text-gray-800 leading-none mb-0.5">10:42 AM</span>
<span className="text-[10px] text-gray-800 leading-none">10/24/2024</span>
</div>
<div className="hover:bg-white/40 rounded-md p-1 cursor-default ml-1">
<svg className="lucide lucide-bell w-4 h-4 text-gray-600 fill-gray-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="w-1 h-full border-l border-gray-300 ml-1"></div>
</div>
</div>


    </>
  );
}
