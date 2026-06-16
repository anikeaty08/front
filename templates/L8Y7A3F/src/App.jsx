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
      
<div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 animate__animated animate__fadeIn">

<div className="flex items-center justify-between px-5 pt-5">
<div className="flex items-center gap-2">
<i className="fas fa-hiking text-green-500 text-xl"></i>
<span className="text-xl font-semibold tracking-tight text-gray-900">Emerald Lake Loop</span>
</div>
<button className="text-gray-400 hover:text-teal-500 transition">
<i className="fas fa-ellipsis-h"></i>
</button>
</div>

<div className="relative h-56 bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden mt-4">
<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 400 224">
<rect fill="#E0F2FE" height="224" rx="16" width="400"></rect>
<polyline fill="none" points="36,210 110,140 190,170 250,90 310,150 370,80" stroke="#16A34A" strokeLinecap="round" strokeWidth="5"></polyline>
<circle cx="36" cy="210" fill="#22D3EE" r="8" stroke="#0369A1" strokeWidth="2"></circle>
<circle cx="370" cy="80" fill="#22D3EE" r="8" stroke="#0369A1" strokeWidth="2"></circle>
</svg>
<span className="absolute left-6 top-7 flex items-center gap-1 text-xs text-gray-800 bg-white/90 rounded px-2 py-0.5 shadow">
<i className="fas fa-map-marker-alt text-green-500"></i> Trailhead
      </span>
<span className="absolute right-6 bottom-7 flex items-center gap-1 text-xs text-gray-800 bg-white/90 rounded px-2 py-0.5 shadow">
<i className="fas fa-flag-checkered text-blue-500"></i> Finish
      </span>
</div>

<div className="flex justify-around gap-3 py-5 px-5 bg-white">
<div className="flex flex-col items-center">
<span className="font-bold text-lg text-green-700">12.5 km</span>
<span className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">Distance</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold text-lg text-green-700">620 m</span>
<span className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">Elev. Gain</span>
</div>
<div className="flex flex-col items-center">
<span className="font-bold text-lg text-green-700">4 h</span>
<span className="text-xs text-gray-500 uppercase tracking-wide mt-0.5">Est. Time</span>
</div>
</div>

<div className="flex items-center justify-between px-5 pb-3">
<div className="flex items-center gap-2 text-sm text-gray-500">
<i className="fas fa-user text-gray-400"></i>
        Guide: <span className="text-gray-900 font-medium ml-1">Liam Walker</span>
</div>
<div className="flex items-center gap-1 text-xs">
<i className="fas fa-signal text-green-400"></i>
<span className="text-gray-400">Moderate</span>
</div>
</div>

<div className="flex gap-3 px-5 pb-6 pt-2">
<button className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg shadow-lg transition">
<i className="fas fa-play"></i>
        Start Hike
      </button>
<button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 text-green-600 font-semibold py-2 rounded-lg shadow transition">
<i className="fas fa-share-alt"></i>
        Share
      </button>
</div>
</div>

    </>
  );
}
