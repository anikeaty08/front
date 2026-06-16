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
      
<div className="max-w-5xl mx-auto">

<header className="mb-8 flex justify-between items-center">
<div>
<h1 className="text-2xl font-medium tracking-tight">Tesla Model 3</h1>
<p className="text-[#8a8a8a] text-sm mt-1">Connected • Last updated 2 minutes ago</p>
</div>
<div className="bg-[#1c1c1c] px-4 py-2 rounded-full text-[#e2e2e2] text-sm">
        Parked • Home
      </div>
</header>

<div className="grid grid-cols-2 gap-6 mb-6">

<div className="bg-[#141414] rounded-3xl p-8 flex flex-col justify-between border border-[#1c1c1c]">
<div>
<p className="text-[#8a8a8a] text-sm mb-2">Battery Status</p>
<div className="flex items-end gap-2">
<span className="text-5xl font-medium">76</span>
<span className="text-xl mb-1 text-[#8a8a8a]">%</span>
</div>
</div>
<div className="mt-8">
<div className="h-1.5 bg-[#1c1c1c] rounded-full overflow-hidden mb-2">
<div className="h-full bg-[#2dd4bf] rounded-full" style={{width: '76%'}}></div>
</div>
<div className="flex justify-between text-[#8a8a8a] text-xs">
<span>267 miles range</span>
<span>Full charge: 3h 15m</span>
</div>
</div>
</div>

<div className="bg-[#141414] rounded-3xl p-8 border border-[#1c1c1c]">
<div className="flex justify-between mb-8">
<div>
<p className="text-[#8a8a8a] text-sm mb-2">Current Speed</p>
<div className="flex items-end gap-2">
<span className="text-5xl font-medium">65</span>
<span className="text-xl mb-1 text-[#8a8a8a]">mph</span>
</div>
</div>
<div>
<p className="text-[#8a8a8a] text-sm mb-2">Cabin</p>
<div className="flex items-end gap-2">
<span className="text-5xl font-medium">72</span>
<span className="text-xl mb-1 text-[#8a8a8a]">°F</span>
</div>
</div>
</div>
<div className="flex justify-between text-[#8a8a8a] text-sm">
<div>Eco mode: <span className="text-[#e2e2e2]">Active</span></div>
<div>A/C: <span className="text-[#e2e2e2]">On</span></div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-6">

<div className="bg-[#141414] rounded-3xl p-8 border border-[#1c1c1c]">
<p className="text-[#8a8a8a] text-sm mb-6">Trip Information</p>
<div className="space-y-6">
<div>
<p className="text-[#8a8a8a] text-xs mb-1">Distance</p>
<p className="text-2xl font-medium">42.5 mi</p>
</div>
<div>
<p className="text-[#8a8a8a] text-xs mb-1">Duration</p>
<p className="text-2xl font-medium">1h 12m</p>
</div>
<div>
<p className="text-[#8a8a8a] text-xs mb-1">Efficiency</p>
<p className="text-2xl font-medium">4.1 mi/kWh</p>
</div>
</div>
</div>

<div className="bg-[#141414] rounded-3xl p-8 border border-[#1c1c1c] flex flex-col items-center justify-center">
<svg height="160" viewbox="0 0 160 160" width="160">
<circle cx="80" cy="80" fill="none" r="70" stroke="#1c1c1c" strokeWidth="12"></circle>
<circle className="gauge-ring" cx="80" cy="80" fill="none" r="70" stroke="#2dd4bf" stroke-dasharray="314" stroke-dashoffset="78.5" strokeWidth="12"></circle>
<text fill="#e2e2e2" fontSize="32" font-weight="500" text-anchor="middle" x="80" y="75">65</text>
<text fill="#8a8a8a" fontSize="14" text-anchor="middle" x="80" y="95">mph</text>
</svg>
<p className="text-[#8a8a8a] text-sm mt-4">Speed Limit: 70 mph</p>
</div>

<div className="bg-[#141414] rounded-3xl p-8 border border-[#1c1c1c]">
<p className="text-[#8a8a8a] text-sm mb-6">Tire Pressure (psi)</p>
<div className="grid grid-cols-2 gap-6 mt-4">
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1c1c1c] mb-2">
<span className="text-xl font-medium">36</span>
</div>
<p className="text-xs text-[#8a8a8a]">Front Left</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1c1c1c] mb-2">
<span className="text-xl font-medium">36</span>
</div>
<p className="text-xs text-[#8a8a8a]">Front Right</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1c1c1c] mb-2">
<span className="text-xl font-medium">35</span>
</div>
<p className="text-xs text-[#8a8a8a]">Rear Left</p>
</div>
<div className="text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1c1c1c] mb-2">
<span className="text-xl font-medium">35</span>
</div>
<p className="text-xs text-[#8a8a8a]">Rear Right</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
