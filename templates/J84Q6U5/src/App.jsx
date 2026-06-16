import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    window.tailwind = {
      theme: {
        extend: {
          fontFamily: {
            heading: ['Inter', 'sans-serif'],
            body: ['Geist', 'sans-serif']
          },
          letterSpacing: {
            tightest: '-0.03em'
          }
        }
      }
    }
  


    import createGlobe from 'https://cdn.skypack.dev/cobe'
    let phi = 0
    let canvas = document.getElementById("cobe")
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.2,
      dark: 1,
      diffuse: 1.2,
      scale: 1.1,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.6],
      markerColor: [1, 0.5, 1],
      glowColor: [0.7, 0.7, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.06 },
        { location: [40.7128, -74.006], size: 0.03 },
        { location: [51.5074, -0.1278], size: 0.03 },
        { location: [35.6762, 139.6503], size: 0.03 },
      ],
      onRender: (state) => {
        state.phi = phi
        phi += 0.003
      },
    })
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl border border-white/10 flex overflow-hidden min-h-[520px]">

<aside className="w-60 bg-transparent border-r border-white/10 flex flex-col py-8 px-5">
<div className="flex items-center mb-10">
<span className="w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-blue-400 flex items-center justify-center text-white text-base mr-2 font-heading font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>G</span>
<span className="text-white text-lg font-heading font-semibold tracking-tight" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Onboard</span>
</div>
<nav className="flex-1">
<ol className="space-y-5">
<li>
<a className="flex items-center space-x-3 group" href="#">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-500 text-white text-[11px] font-heading font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>1</span>
<span className="text-white text-[13px] font-heading font-semibold tracking-tight group-hover:underline" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Welcome</span>
</a>
</li>
<li>
<a className="flex items-center space-x-3 group opacity-70" href="#">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-400 text-white text-[11px] font-heading font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>2</span>
<span className="text-white text-[13px] font-heading font-semibold tracking-tight group-hover:underline" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Set Up Profile</span>
</a>
</li>
<li>
<a className="flex items-center space-x-3 group opacity-70" href="#">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-white text-[11px] font-heading font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>3</span>
<span className="text-white text-[13px] font-heading font-semibold tracking-tight group-hover:underline" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Explore Features</span>
</a>
</li>
<li>
<a className="flex items-center space-x-3 group opacity-70" href="#">
<span className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 text-white text-[11px] font-heading font-semibold" style={{fontFamily: 'Inter, sans-serif'}}>4</span>
<span className="text-white text-[13px] font-heading font-semibold tracking-tight group-hover:underline" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Get Started</span>
</a>
</li>
</ol>
</nav>
<div className="mt-8">
<button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-[12px] py-2 rounded-xl font-body font-medium transition" style={{fontFamily: 'Geist, sans-serif'}}>Next Step</button>
</div>
</aside>

<main className="flex-1 p-8 flex flex-col font-body" style={{fontFamily: 'Geist, sans-serif'}}>
<div className="relative h-52 rounded-xl overflow-hidden shadow mb-6 bg-black/10">
<canvas className="absolute inset-0" height="800" id="cobe" style={{width: '100%', height: '100%'}} width="800"></canvas>
<div className="absolute top-4 left-5 z-10">
<h2 className="text-white text-[28px] font-heading font-semibold tracking-tight" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Welcome to Global Network</h2>
<p className="text-white/70 text-[14px] font-body mt-1" style={{fontFamily: 'Geist, sans-serif'}}>Discover our global reach in a 3D interactive globe.</p>
</div>
<div className="absolute bottom-3 right-4 bg-black/30 rounded-md p-2 z-10">
<div className="flex space-x-3 text-xs text-white">
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-pink-500 mr-1"></span>
<span className="font-body" style={{fontFamily: 'Geist, sans-serif'}}>Main Hub</span>
</div>
<div className="flex items-center">
<span className="w-3 h-3 rounded-full bg-blue-400 mr-1"></span>
<span className="font-body" style={{fontFamily: 'Geist, sans-serif'}}>Regional Office</span>
</div>
</div>
</div>
</div>
<section className="flex-1 flex flex-col justify-between">
<div>
<h3 className="text-white text-[20px] font-heading font-semibold tracking-tight mb-2" style={{fontFamily: 'Inter, sans-serif', letterSpacing: '-0.03em'}}>Your Journey Begins</h3>
<p className="text-white/80 text-[13px] mb-4 font-body" style={{fontFamily: 'Geist, sans-serif'}}>
            As part of our global team, you’ll have access to resources and support from around the world. Let's walk through a quick onboarding to get you started!
          </p>
<ul className="list-disc pl-6 text-white/70 text-[13px] space-y-1 font-body" style={{fontFamily: 'Geist, sans-serif'}}>
<li>Explore the interactive 3D globe to see our offices.</li>
<li>Set up your personal profile for seamless collaboration.</li>
<li>Discover platform features tailored for your success.</li>
<li>Complete onboarding to unlock your full workspace.</li>
</ul>
</div>
<div className="mt-8 flex justify-end">
<button className="bg-blue-400 hover:bg-blue-500 text-white text-[13px] px-6 py-2 rounded-lg font-body font-medium transition" style={{fontFamily: 'Geist, sans-serif'}}>Continue</button>
</div>
</section>
</main>
</div>


    </>
  );
}
