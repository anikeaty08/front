import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import createGlobe from 'https://cdn.skypack.dev/cobe'
    let phi = 0
    let theta = 0
    let dragging = false
    let lastX = 0
    let lastY = 0
    let autoRotate = true
    const canvas = document.getElementById("cobe")
    const globe = createGlobe(canvas, {
      devicePixelRatio: 2,
      width: 1000,
      height: 1000,
      phi: 0,
      theta: 0,
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16000,
      mapBrightness: 3,
      baseColor: [0.45, 0.5, 1],
      markerColor: [0.66, 0.37, 1],
      glowColor: [0.5, 0.5, 1],
      offset: [0, 0],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
        { location: [51.5074, -0.1278], size: 0.05 },   // London
        { location: [35.6762, 139.6503], size: 0.05 },  // Tokyo
      ],
      onRender: (state) => {
        state.phi = phi
        state.theta = theta
        if (autoRotate && !dragging) phi += 0.005
      },
    })

    const pointerDown = (clientX, clientY) => {
      dragging = true
      autoRotate = false
      lastX = clientX
      lastY = clientY
      canvas.style.cursor = "grabbing"
    }
    const pointerMove = (clientX, clientY) => {
      if (!dragging) return
      const deltaX = clientX - lastX
      const deltaY = clientY - lastY
      lastX = clientX
      lastY = clientY
      phi += deltaX * -0.008
      theta += deltaY * -0.008
      theta = Math.max(-Math.PI/2, Math.min(Math.PI/2, theta))
    }
    const pointerUp = () => {
      dragging = false
      canvas.style.cursor = "grab"
      setTimeout(() => { autoRotate = true }, 500)
    }
    canvas.addEventListener("mousedown", e => pointerDown(e.clientX, e.clientY))
    window.addEventListener("mousemove", e => pointerMove(e.clientX, e.clientY))
    window.addEventListener("mouseup", pointerUp)
    canvas.addEventListener("touchstart", e => {
      if (e.touches.length === 1) {
        pointerDown(e.touches[0].clientX, e.touches[0].clientY)
      }
    }, {passive: false})
    window.addEventListener("touchmove", e => {
      if (dragging && e.touches.length === 1) {
        pointerMove(e.touches[0].clientX, e.touches[0].clientY)
      }
    }, {passive: false})
    window.addEventListener("touchend", pointerUp)
    canvas.style.cursor = "grab"
  


    document.querySelectorAll('.fade-in, .slide-in-up, .blur-in').forEach((el) => {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.filter = 'none';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="h-8 w-8 text-indigo-500" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight font-manrope font-light">Orbital</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-600">
<a className="hover:text-indigo-600 transition-colors font-normal" href="#">Features</a>
<a className="hover:text-indigo-600 transition-colors font-normal" href="#">Solutions</a>
<a className="hover:text-indigo-600 transition-colors font-normal" href="#">Resources</a>
<a className="hover:text-indigo-600 transition-colors font-normal" href="#">Pricing</a>
</div>
<div>
<button className="text-sm border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-100 transition-all font-normal">Sign in</button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
<div className="relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-white to-white z-0"></div>

<div className="container mx-auto px-6 pt-12 pb-16 md:pt-20 md:pb-24 relative z-10 flex flex-col items-center">

<div className="w-full flex justify-center fade-in anim-delay-0">
<div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[480px] md:w-[480px]">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-400/10 to-purple-300/10 rounded-full blur-3xl"></div>

<div className="pointer-events-none absolute inset-0 z-20" style={{width: '100%', height: '100%'}}>

<svg className="absolute inset-0 w-full h-full" fill="none" strokeWidth="2">

<path className="fade-in anim-delay-0" d="M85,160 Q60,90 60,45" stroke="#6366f1" strokeLinecap="round"></path>

<path className="fade-in anim-delay-1" d="M240,40 Q210,0 270,10" stroke="#7c3aed" strokeLinecap="round"></path>

<path className="fade-in anim-delay-2" d="M410,240 Q465,310 450,400" stroke="#6366f1" strokeLinecap="round"></path>
</svg>


<div className="noodle-label absolute left-0 top-0 fade-in anim-delay-0" style={{transform: 'translate(24px,8px)'}}>
<div className="bg-white/90 rounded-lg shadow px-3 py-2 font-manrope font-semibold text-indigo-700 text-[15px] border border-indigo-100">
                Color
              </div>
</div>

<div className="noodle-label absolute right-12 top-0 fade-in anim-delay-1" style={{transform: 'translate(-30px,80px)'}}>
<div className="bg-white/90 rounded-lg shadow px-3 py-2 font-manrope font-semibold text-purple-700 text-[15px] border border-purple-100">
                Size
              </div>
</div>

<div className="noodle-label absolute right-0 bottom-0 fade-in anim-delay-2" style={{transform: 'translate(-36px,-32px)'}}>
<div className="bg-white/90 rounded-lg shadow px-3 py-2 font-manrope font-semibold text-indigo-700 text-[15px] border border-indigo-100">
                Radius
              </div>
</div>
</div>
<canvas className="relative z-10 cursor-grab" height="1000" id="cobe" style={{width: '100%', height: '100%'}} width="1000"></canvas>
</div>
</div>

<h1 className="font-manrope text-[48px] sm:text-[56px] md:text-[64px] font-light tracking-tighter mb-5 mt-10 leading-tight text-center fade-in anim-delay-1" style={{letterSpacing: '-0.04em'}}>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500">Connect</span> your world with precision
      </h1>

<p className="text-gray-700 text-[16px] sm:text-[18px] md:text-[20px] mb-8 max-w-xl font-normal tracking-tight text-center slide-in-up anim-delay-2">
        Build, track, and manage your projects with a seamless platform designed for modern teams.
      </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center blur-in anim-delay-3 mb-12">
<button className="bg-indigo-600 text-white font-light rounded-md px-6 py-3 hover:bg-indigo-700 transition-all text-[15px]">Get started</button>
<button className="bg-transparent border border-gray-300 rounded-md px-6 py-3 hover:bg-gray-100 transition-all text-[15px] text-gray-900">View demo</button>
</div>

<div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
<div className="fade-in anim-delay-1 text-center">
<p className="text-4xl md:text-5xl font-manrope font-light mb-1 tracking-tight" style={{letterSpacing: '-0.03em'}}>93%</p>
<p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">Faster workflow</p>
</div>
<div className="fade-in anim-delay-2 text-center">
<p className="text-4xl md:text-5xl font-manrope font-light mb-1 tracking-tight" style={{letterSpacing: '-0.03em'}}>10k+</p>
<p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">Global users</p>
</div>
<div className="fade-in anim-delay-3 text-center">
<p className="text-4xl md:text-5xl font-manrope font-light mb-1 tracking-tight" style={{letterSpacing: '-0.03em'}}>24/7</p>
<p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">Support available</p>
</div>
<div className="fade-in anim-delay-4 text-center">
<p className="text-4xl md:text-5xl font-manrope font-light mb-1 tracking-tight" style={{letterSpacing: '-0.03em'}}>99.9%</p>
<p className="text-gray-500 font-normal text-[14px] sm:text-[16px]">Uptime guarantee</p>
</div>
</div>
</div>
</div>



    </>
  );
}
