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
                        danger: '#F56565',
                        cool: '#63B3ED',
                        heat: '#F6AD55'
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

<div className="h-full p-4 overflow-auto">

<header className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<h1 className="text-xl font-bold">Living Room Thermostat</h1>
</div>
<div className="flex items-center gap-2">
<button className="p-3 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</header>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<div className="flex justify-between items-center mb-3">
<div>
<h2 className="font-semibold">Current Status</h2>
<p className="text-xs text-textsecondary">Updated 2 minutes ago</p>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center">
<svg className="h-5 w-5 text-cool mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-textsecondary">Cooling</span>
</div>
<div className="flex items-center mt-1">
<svg className="h-5 w-5 text-primary mr-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-textsecondary">Energy Saving Mode</span>
</div>
</div>
<div>
<div className="text-sm text-textsecondary">Room Temperature</div>
<div className="text-2xl font-bold">24°C</div>
</div>
</div>
</div>

<div className="flex flex-col items-center mb-6">
<div className="temperature-dial w-60 h-60 rounded-full shadow-clay mb-6 flex items-center justify-center">
<div className="relative z-10 text-center">
<div className="text-5xl font-bold text-primary">22°</div>
<div className="text-textsecondary text-sm">Target Temperature</div>
</div>
</div>
<div className="flex gap-6 w-full max-w-xs justify-center">
<button className="w-16 h-16 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-8 w-8 text-cool" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="w-16 h-16 rounded-full bg-neugray shadow-clay hover:shadow-hover transition-all flex items-center justify-center">
<svg className="h-8 w-8 text-heat" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5 mb-6">
<h3 className="font-semibold mb-4">Mode</h3>
<div className="grid grid-cols-3 gap-3">
<button className="p-3 rounded-xl bg-primary text-white shadow-clay">
<div className="flex flex-col items-center">
<svg className="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Cool</span>
</div>
</button>
<button className="p-3 rounded-xl bg-neugray text-textsecondary shadow-clay hover:shadow-hover transition-all">
<div className="flex flex-col items-center">
<svg className="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Heat</span>
</div>
</button>
<button className="p-3 rounded-xl bg-neugray text-textsecondary shadow-clay hover:shadow-hover transition-all">
<div className="flex flex-col items-center">
<svg className="h-6 w-6 mb-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs">Auto</span>
</div>
</button>
</div>
</div>

<div className="grid grid-cols-1 gap-6 mb-6">

<div className="bg-neugray rounded-2xl shadow-clay p-5">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold">Schedule</h3>
<button className="text-primary text-sm">Edit</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-neugray shadow-pressed">
<div className="flex items-center">
<div className="w-8 h-8 rounded-lg bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-medium">Night Mode</h4>
<p className="text-xs text-textsecondary">10:00 PM - 6:00 AM • 19°C</p>
</div>
</div>
<label className="relative inline-block w-10 h-5">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-10 h-5 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-4 h-4 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-neugray shadow-pressed">
<div className="flex items-center">
<div className="w-8 h-8 rounded-lg bg-primary shadow-clay flex items-center justify-center mr-3">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-medium">Away Mode</h4>
<p className="text-xs text-textsecondary">9:00 AM - 5:00 PM • 24°C</p>
</div>
</div>
<label className="relative inline-block w-10 h-5">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-10 h-5 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-4 h-4 bg-white rounded-full shadow"></div>
</label>
</div>
</div>
</div>

<div className="bg-neugray rounded-2xl shadow-clay p-5">
<h3 className="font-semibold mb-4">Energy Usage</h3>
<div className="flex justify-between items-end h-24 mb-4">
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '40%'}}></div>
<span className="text-xs text-textsecondary">Mon</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '65%'}}></div>
<span className="text-xs text-textsecondary">Tue</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '50%'}}></div>
<span className="text-xs text-textsecondary">Wed</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-primary shadow-pressed" style={{height: '80%'}}></div>
<span className="text-xs text-textsecondary">Thu</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '60%'}}></div>
<span className="text-xs text-textsecondary">Fri</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '45%'}}></div>
<span className="text-xs text-textsecondary">Sat</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="w-6 rounded-t-md bg-neugray shadow-pressed" style={{height: '30%'}}></div>
<span className="text-xs text-textsecondary">Sun</span>
</div>
</div>
<div className="p-3 rounded-xl bg-neugray shadow-pressed">
<div className="flex justify-between items-center mb-2">
<div>
<p className="text-xs text-textsecondary">This Week</p>
<h4 className="font-medium">8.7 kWh</h4>
</div>
<div>
<p className="text-xs text-success text-right">-12% vs last week</p>
</div>
</div>
<div className="h-2 w-full bg-neugray shadow-pressed rounded-full overflow-hidden">
<div className="energy-bar" style={{width: '65%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
