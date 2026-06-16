import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import createGlobe from 'https://cdn.skypack.dev/cobe'
    let phi = 0
    let canvas = document.getElementById("cobe")
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.15,
      mapSamples: 18000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.55],
      markerColor: [1, 0.5, 1],
      glowColor: [0.7, 0.7, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7749, -122.4194], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.04 },
        { location: [35.6895, 139.6917], size: 0.04 },
        { location: [40.7128, -74.0060], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003;
      },
    })
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-6xl w-full grid gap-6 md:grid-cols-3 grid-cols-1">

<div className="bg-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl flex flex-col justify-between p-8 md:col-span-1">
<div>
<div className="mb-4 flex items-center justify-center">
<div className="bg-gradient-to-br from-pink-500/70 to-indigo-500/80 rounded-xl p-2">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 3v4M12 17v4M4.22 4.22l2.83 2.83M17.17 17.17l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83M17.17 6.83l2.83-2.83" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
</div>
<h3 className="text-xl font-bold text-white">Real-time Collaboration</h3>
<p className="mt-2 text-white/70">
          Collaborate with anyone, anywhere instantly and securely, with live updates.
        </p>
</div>
<div className="mt-6">
<span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-indigo-300 font-medium">Live Sync</span>
</div>
</div>

<div className="relative bg-white/10 rounded-2xl shadow-2xl overflow-hidden border border-white/10 md:col-span-2 flex flex-col">
<div className="relative h-64 md:h-[22rem]">
<canvas className="absolute inset-0" height="1000" id="cobe" style={{width: '100%', height: '100%'}} width="1000"></canvas>
<div className="absolute top-4 left-5 z-10">
<h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">3D Interactive Globe</h2>
<p className="text-white/70 text-sm md:text-base">Explore a real-time global network in 3D</p>
</div>
<div className="absolute bottom-3 right-4 bg-black/30 backdrop-blur-md rounded-lg p-2 z-10">
<div className="flex space-x-3 text-xs text-white">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-pink-500 mr-1"></span>
<span>Main Hub</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
<span>Regional</span>
</div>
</div>
</div>
</div>
<div className="p-6 bg-black/30 flex flex-col md:flex-row justify-between gap-4">
<div>
<p className="font-semibold text-white">San Francisco</p>
<p className="text-xs text-white/70">Headquarters</p>
</div>
<div>
<p className="font-semibold text-white">London</p>
<p className="text-xs text-white/70">EMEA Office</p>
</div>
<div>
<p className="font-semibold text-white">Tokyo</p>
<p className="text-xs text-white/70">APAC Hub</p>
</div>
</div>
<div className="p-6 border-t border-white/10 bg-black/40">
<p className="text-white/60 text-sm">Our distributed presence empowers us to provide 24/7 service and on-the-ground expertise, wherever you operate.</p>
</div>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-xl flex flex-col justify-between p-8 md:col-span-1 order-2 md:order-none">
<div>
<div className="mb-4 flex items-center justify-center">
<div className="bg-gradient-to-br from-sky-400/80 to-blue-700/70 rounded-xl p-2">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M8.5 16.5a4.97 4.97 0 0 1 7 0M5 12a9 9 0 0 1 14 0M2.5 8.5A13 13 0 0 1 21.5 8.5M12 20h.01" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<h3 className="text-xl font-bold text-white">Global Connectivity</h3>
<p className="mt-2 text-white/70">
          Harness a vast, resilient infrastructure built for high availability worldwide.
        </p>
</div>
<div className="mt-6">
<span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-sky-300 font-medium">99.99% Uptime</span>
</div>
</div>

<div className="bg-white/10 rounded-2xl shadow-xl overflow-hidden md:col-span-2 flex flex-col justify-between p-8 order-3 md:order-none">
<div>
<div className="mb-4 flex items-center">
<div className="bg-gradient-to-br from-yellow-300/70 to-orange-500/80 rounded-xl p-2">

<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="10" rx="2" width="6" x="9" y="7"></rect>
<path d="M12 7V3M15 10h4M9 10H5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<h3 className="text-xl font-bold text-white ml-4">Seamless Integration</h3>
</div>
<p className="text-white/70">
          Integrate your essential tools and services with robust APIs and built-in connectors.
        </p>
</div>
<div className="mt-6">
<span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-yellow-400 font-medium">Flexible API</span>
<span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full text-orange-400 font-medium ml-2">Plug &amp; Play</span>
</div>
</div>
</div>


    </>
  );
}
