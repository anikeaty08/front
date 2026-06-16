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
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.9],
      markerColor: [0.9, 0.5, 1],
      glowColor: [0.2, 0.2, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [22.3193, 114.1694], size: 0.03 },
        { location: [-33.8688, 151.2093], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.005
      },
    })
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Orbital</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div>
<button className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all">
          Sign in
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-black to-black z-0"></div>

<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span> your world with precision
          </h1>
<p className="text-gray-300 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Build, track, and manage your projects with a seamless platform designed for modern teams.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-black font-light rounded-md px-6 py-3 hover:bg-opacity-90 transition-all">
              Get started
            </button>
<button className="bg-transparent border border-gray-700 rounded-md px-6 py-3 hover:bg-white/5 transition-all">
              View demo
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
<canvas className="relative z-10" height="1000" id="cobe" style={{width: '500px', height: '500px'}} width="1000"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight">93%</p>
<p className="text-gray-400 font-extralight">Faster workflow</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">10k+</p>
<p className="text-gray-400 font-extralight">Global users</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">24/7</p>
<p className="text-gray-400 font-extralight">Support available</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight">99.9%</p>
<p className="text-gray-400 font-extralight">Uptime guarantee</p>
</div>
</div>
</div>
</div>


    </>
  );
}
