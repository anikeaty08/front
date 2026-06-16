import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-md bg-white rounded-xl border border-gray-100 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-0 overflow-hidden animate__animated animate__fadeIn">

<div className="flex items-center justify-between px-5 pt-5 pb-2">
<div className="flex items-center gap-2">
<i className="fas fa-mountain text-green-500 text-lg"></i>
<span className="text-lg font-semibold tracking-tight text-gray-900">Pine Ridge Trail</span>
</div>
<button className="text-gray-400 hover:text-green-500 focus:outline-none">
<i className="fas fa-ellipsis-h"></i>
</button>
</div>

<div className="bg-gray-100 relative h-56 flex items-center justify-center">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 400 224">
<rect fill="#F4F7FA" height="224" rx="12" width="400"></rect>
<polyline fill="none" points="30,200 80,140 130,160 180,90 220,120 260,60 330,40 370,80" stroke="#38BDF8" strokeLinecap="round" strokeWidth="4"></polyline>
<circle cx="30" cy="200" fill="#22D3EE" r="6"></circle>
<circle cx="370" cy="80" fill="#22D3EE" r="6"></circle>
</svg>
<span className="absolute left-4 top-4 flex items-center gap-1 text-xs text-gray-500 bg-white/80 rounded px-2 py-0.5 shadow">
<i className="fas fa-map-marker-alt text-green-400"></i> Start
      </span>
<span className="absolute right-4 bottom-4 flex items-center gap-1 text-xs text-gray-500 bg-white/80 rounded px-2 py-0.5 shadow">
<i className="fas fa-flag-checkered text-blue-400"></i> End
      </span>
</div>

<div className="grid grid-cols-3 divide-x divide-gray-100 text-center py-4 px-5 bg-white">
<div>
<div className="text-gray-900 font-semibold text-base">8.2 km</div>
<div className="text-xs text-gray-500 tracking-wide mt-0.5">Distance</div>
</div>
<div>
<div className="text-gray-900 font-semibold text-base">520 m</div>
<div className="text-xs text-gray-500 tracking-wide mt-0.5">Elevation</div>
</div>
<div>
<div className="text-gray-900 font-semibold text-base">3 h</div>
<div className="text-xs text-gray-500 tracking-wide mt-0.5">Est. Time</div>
</div>
</div>

<div className="flex gap-3 px-5 pb-5 pt-2">
<button className="flex-1 flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-2 rounded-lg transition">
<i className="fas fa-route"></i>
        Start
      </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-2 rounded-lg transition">
<i className="fas fa-share-alt"></i>
        Share
      </button>
</div>

<div className="px-5 pb-5">
<div className="flex items-center gap-2 text-sm text-gray-500">
<i className="fas fa-user text-gray-400"></i>
        Guide: <span className="text-gray-900 font-medium ml-1">Ava Brooks</span>
</div>
</div>
</div>

    </>
  );
}
