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
<h1 className="text-xl font-bold">Devices</h1>
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
<div className="flex items-center bg-neugray shadow-pressed rounded-xl px-4 py-3">
<svg className="h-5 w-5 text-textsecondary mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input className="bg-transparent outline-none w-full text-textprimary placeholder-textsecondary" placeholder="Search devices..." type="text"/>
</div>
</div>

<div className="mb-6">
<div className="flex gap-3 overflow-x-auto py-2 no-scrollbar">
<button className="px-4 py-2 rounded-xl bg-primary text-white shadow-clay whitespace-nowrap">
                            All Devices
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary shadow-clay whitespace-nowrap">
                            Lighting
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary shadow-clay whitespace-nowrap">
                            Climate
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary shadow-clay whitespace-nowrap">
                            Security
                        </button>
<button className="px-4 py-2 rounded-xl bg-neugray text-textsecondary shadow-clay whitespace-nowrap">
                            Entertainment
                        </button>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-center mb-4">
<h2 className="font-bold">Favorites</h2>
<button className="text-primary text-sm">Edit</button>
</div>
<div className="grid grid-cols-2 gap-3">

<div className="p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<h3 className="font-semibold">Living Room Lights</h3>
<p className="text-xs text-textsecondary">On • 80% Brightness</p>
</div>

<div className="p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex justify-between items-start mb-3">
<div className="w-10 h-10 rounded-xl bg-primary shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<h3 className="font-semibold">Thermostat</h3>
<p className="text-xs text-textsecondary">On • 22°C</p>
</div>
</div>
</div>

<div>
<h2 className="font-bold mb-4">All Devices</h2>

<div className="mb-6">
<h3 className="text-sm text-textsecondary mb-3">Living Room</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Main Light</h4>
<p className="text-xs text-textsecondary">On • 80% Brightness</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-success peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Floor Lamp</h4>
<p className="text-xs text-textsecondary">Off</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-textsecondary peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Smart TV</h4>
<p className="text-xs text-textsecondary">Off</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-textsecondary peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
</div>
</div>

<div className="mb-6">
<h3 className="text-sm text-textsecondary mb-3">Kitchen</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Ceiling Light</h4>
<p className="text-xs text-textsecondary">Off</p>
</div>
</div>
<label className="relative inline-block w-12 h-6">
<input className="sr-only peer" type="checkbox"/>
<div className="toggle-bg w-12 h-6 rounded-full bg-textsecondary peer"></div>
<div className="toggle-dot absolute w-5 h-5 bg-white rounded-full shadow"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-neugray shadow-clay">
<div className="flex items-center">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center mr-3">
<svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h4 className="font-semibold">Smart Refrigerator</h4>
<p className="text-xs text-textsecondary">On • 4°C</p>
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
<div className="w-10 h-10 rounded-xl bg-primary shadow-pressed flex items-center justify-center">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-primary mt-1">Devices</span>
<div className="tab-indicator tab-indicator-2"></div>
</button>
<button className="flex flex-col items-center justify-center w-16 h-full">
<div className="w-10 h-10 rounded-xl bg-neugray shadow-clay flex items-center justify-center">
<svg className="h-5 w-5 text-textsecondary" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs font-semibold text-textsecondary mt-1">Automation</span>
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
