import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        neugray: '#e6e7ee',
                        primary: '#5A67D8',
                        primaryhover: '#4c58bf',
                        textprimary: '#4A5568',
                        textsecondary: '#718096',
                        success: '#48BB78',
                        warning: '#ED8936',
                        danger: '#F56565'
                    },
                    boxShadow: {
                        'clay': '8px 8px 16px rgba(174, 174, 192, 0.5), -8px -8px 16px rgba(255, 255, 255, 0.9)',
                        'pressed': 'inset 5px 5px 10px rgba(174, 174, 192, 0.5), inset -5px -5px 10px rgba(255, 255, 255, 0.9)',
                        'hover': 'inset 3px 3px 6px rgba(174, 174, 192, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)'
                    }
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="device-frame bg-neugray shadow-2xl border-8 border-gray-700 relative">

<div className="h-full flex flex-col">
<div className="flex-1 p-4 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold">Automation</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</header>

<div className="mb-6">
<h2 className="font-bold mb-4">Active Routines</h2>
<div className="space-y-3">

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Morning Routine</h3>
<p className="text-xs text-textsecondary">Daily • 6:30 AM</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="p-3 rounded-xl bg-neugray shadow-pressed">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Turn on bedroom lights (50%)</span>
</div>
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Set thermostat to 22°C</span>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m5.657-9.9a9 9 0 012.121 2.121" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Play morning news on kitchen speaker</span>
</div>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Leave Home</h3>
<p className="text-xs text-textsecondary">Location based</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="p-3 rounded-xl bg-neugray shadow-pressed">
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Turn off all lights</span>
</div>
<div className="flex items-center gap-2 mb-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Set thermostat to Away mode</span>
</div>
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-sm">Arm security system</span>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="font-bold mb-4">Scheduled</h2>
<div className="space-y-3">

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Night Mode</h3>
<p className="text-xs text-textsecondary">Daily • 10:00 PM</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Weekend Mode</h3>
<p className="text-xs text-textsecondary">Sat-Sun • 8:00 AM</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
</div>
</div>
</div>

<div className="mb-6">
<h2 className="font-bold mb-4">Suggested</h2>
<div className="space-y-3">

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Movie Night</h3>
<p className="text-xs text-textsecondary">Dim lights, close blinds, TV on</p>
</div>
</div>
<button className="px-3 py-1 text-xs rounded-lg bg-primary text-white shadow-clay">
                                    Add
                                </button>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-4">
<div className="flex justify-between items-start">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h3 className="font-semibold">Energy Saving</h3>
<p className="text-xs text-textsecondary">Optimize energy usage when away</p>
</div>
</div>
<button className="px-3 py-1 text-xs rounded-lg bg-primary text-white shadow-clay">
                                    Add
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="h-20 px-2 pt-2 pb-6 bg-neugray shadow-[0_-5px_15px_rgba(174,174,192,0.3)] relative">
<div className="flex justify-around items-center h-full">
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Home</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Devices</span>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Automation</span>
<div className="tab-indicator tab-indicator-3"></div>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Settings</span>
</button>
</div>
</div>
</div>
</div>

    </>
  );
}
