import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initialize Vanta waves background
    document.addEventListener('DOMContentLoaded', function() {
      if (typeof VANTA !== 'undefined' && VANTA.WAVES) {
        VANTA.WAVES({
          el: "#vanta-bg",
          mouseControls: true,
          touchControls: true,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9ca3af,
          shininess: 30.00,
          waveHeight: 3.00,
          waveWidth: 200.00,
          waveSpeed: 0.75,
          zoom: 0.75,
          backgroundColor: 0xe5e7eb,
          waveShadow: 0x4b5563,
        });
      }
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    });
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0" id="vanta-bg"><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas><canvas className="vanta-canvas" height="1430" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1060px', height: '715px'}} width="2120"></canvas></div>

<nav className="border-b-8 border-black bg-white/90">
<div className="container mr-auto ml-auto pt-3 pr-4 pb-3 pl-4">
<div className="flex items-center justify-between">
<div className="uppercase text-[10px] font-semibold font-geist-mono" style={{}}>BASE0</div>
<div className="flex gap-4 items-center">
<a className="uppercase hover:underline hover:bg-black transition-colors text-[10px] hover:text-[#FF0000] pt-1 pr-2 pb-1 pl-2 font-geist-mono" href="#manifesto" style={{}}>MANIFESTO</a>
<a className="uppercase hover:underline hover:bg-black transition-colors text-[10px] hover:text-[#FF0000] font-geist-mono pt-1 pr-2 pb-1 pl-2" href="#what" style={{}}>WHAT</a>
<a className="uppercase hover:underline hover:bg-black transition-colors text-[10px] hover:text-[#FF0000] font-geist-mono pt-1 pr-2 pb-1 pl-2" href="#who" style={{}}>WHO</a>
<a className="uppercase hover:underline hover:bg-black transition-colors text-[10px] hover:text-[#FF0000] font-geist-mono pt-1 pr-2 pb-1 pl-2" href="#join" style={{}}>JOIN</a>
<a className="ml-4 inline-block uppercase text-[10px] font-semibold bg-black text-white pt-1 pb-1 pl-4 pr-4 hover:bg-gray-800 transition-colors tracking-tight font-geist-mono" href="#join" style={{letterSpacing: '0px'}}>COUNT ME IN</a>
</div>
</div>
</div>
</nav>
<div className="relative z-10 flex-1 flex flex-col bg-slate-50/40">

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="hero">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white/50">
<div className="md:col-span-12 bg-white/75 border-2 pb-24">
<h1 className="md:text-5xl uppercase leading-none text-3xl font-semibold tracking-tight font-geist-mono mb-2" style={{}}>BASE0</h1>
<h2 className="uppercase text-base font-normal tracking-tight font-geist-mono mb-4" style={{letterSpacing: '-0.025em'}}>Where you begin and come home to</h2>
<div className="w-full h-1 bg-black border-stone-950 border-4 mb-4"></div>
<p className="md:text-3xl text-2xl font-semibold tracking-tighter font-geist-mono mb-3" style={{lineHeight: '1.2'}}>
    Built anything lately? No? Then come lah.
  </p>
<p className="text-sm font-normal font-geist-mono mb-3" style={{lineHeight: '1.6'}}>Stop waiting for permission. Start building. We'll pass you the kopi. Talk is cheap, so is space.</p>
<p className="text-sm tracking-tight font-geist-mono mb-5" style={{lineHeight: '1.6'}}>Singapore's next chapter won't be written in boardrooms. It'll be written at 2am by builders and creators too impatient to wait for grants. 56,000 sq ft of grassroots collision where tomorrow gets built.</p>
<a className="inline-block uppercase hover:bg-gray-800 transition-colors text-base font-semibold text-white font-geist-mono bg-black border-black border-4 pt-2 pr-5 pb-2 pl-5" href="#join" style={{}}>
    START FROM ZERO
  </a>
</div>
</div>
</section>

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="manifesto">
<h2 className="md:text-3xl uppercase text-2xl tracking-tight mb-4 font-geist-mono font-semibold" style={{}}>THE KAMPONG AGREEMENT</h2>
<div className="leading-relaxed text-base bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<p className="text-base font-normal tracking-tight font-geist-mono mb-4" style={{lineHeight: '1.6'}}>We're the kampong that kills excuses with kopi and kindness. Where builders ship broken things, creators teach half-learned skills, and everyone grows by failing in public. Not your typical innovation hub - this is grassroots collision where tomorrow gets built by people too impatient to wait for permission. Here's the deal:</p>
<ol className="list-decimal text-base mb-5 pl-4 space-y-2">
<li className="">
<span className="font-semibold font-geist-mono" style={{}}>Ship something monthly.</span>
<div className="text-sm text-black/70 font-geist-mono pl-2" style={{}}>
        Broken also can. Perfect is the enemy of shipped.
      </div>
</li>
<li className="">
<span className="font-semibold font-geist-mono" style={{}}>Teach what you know.</span>
<div className="text-sm text-black/70 pl-2 font-geist-mono" style={{}}>
        Even if you think everyone knows already. They don't.
      </div>
</li>
<li className="">
<span className="font-semibold font-geist-mono" style={{}}>Share your failures.</span>
<div className="text-sm text-black/70 pl-2 font-geist-mono" style={{}}>
        We celebrate spectacular failures over mediocre successes.
      </div>
</li>
<li className="">
<span className="font-semibold font-geist-mono" style={{}}>Help without being asked.</span>
<div className="text-sm text-black/70 pl-2 font-geist-mono" style={{}}>
        See someone struggling? Don't wait for invitation.
      </div>
</li>
<li className="">
<span className="font-semibold font-geist-mono" style={{}}>Take without guilt.</span>
<div className="text-sm text-black/70 pl-2 font-geist-mono" style={{}}>
        Need help? Take lah. You'll pay it forward later.
      </div>
</li>
</ol>
<div className="text-base font-geist-mono mb-5" style={{}}>No bureaucracy. Just build, share, repeat.</div>
<a className="inline-block uppercase hover:bg-gray-800 transition-colors text-base font-semibold text-white tracking-tight bg-black border-black border-4 pt-2 pr-5 pb-2 pl-5 font-geist-mono" href="#join" style={{letterSpacing: '0px'}}>
    Be Part of This
  </a>
</div>
</section>

<section className="container bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" id="who">
<h2 className="md:text-3xl uppercase text-2xl tracking-tight mb-4 font-geist-mono font-semibold" style={{}}>ARE YOU BASE0?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0">

<div className="flex flex-col h-full flex-1 space-y-0">
<div className="flex-1 flex flex-col bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 mb-0">
<div className="flex gap-3 mb-2 items-center">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold font-geist-mono" style={{}}>🚀</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight font-geist-mono" style={{}}>Builders</h3>
</div>
<ul className="text-xs leading-relaxed mb-1 pl-0 space-y-1">
<li className="font-semibold font-geist-mono" style={{}}>Shipping &gt; Planning</li>
<li className="font-geist-mono" style={{}}>Tired of waiting for permission</li>
</ul>
<div className="text-xs font-semibold text-black mt-2 font-geist-mono" style={{}}>S$400-4,000/month</div>
</div>
</div>

<div className="flex flex-col h-full flex-1 space-y-0">
<div className="flex-1 flex flex-col bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 mb-0">
<div className="flex gap-3 mb-2 items-center">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold font-geist-mono" style={{}}>🎨</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight font-geist-mono" style={{}}>Creators</h3>
</div>
<ul className="text-xs leading-relaxed mb-1 pl-0 space-y-1">
<li className="font-semibold font-geist-mono" style={{}}>Making without monetizing (yet)</li>
<li className="font-geist-mono" style={{}}>Need space, not handouts</li>
</ul>
<div className="text-xs font-semibold text-black mt-2 font-geist-mono" style={{}}>S$150-600/month</div>
</div>
</div>

<div className="flex flex-col h-full flex-1 space-y-0">
<div className="flex-1 flex flex-col bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 mb-0">
<div className="flex gap-3 mb-2 items-center">
<div className="w-6 h-6 bg-black flex items-center justify-center text-white text-xs font-bold font-geist-mono" style={{}}>💼</div>
<h3 className="uppercase text-base font-semibold text-[#0000EE] tracking-tight font-geist-mono" style={{}}>Enterprises</h3>
</div>
<ul className="text-xs leading-relaxed mb-1 pl-0 space-y-1">
<li className="font-semibold font-geist-mono" style={{}}>Want real innovation, not theater</li>
<li className="font-geist-mono" style={{}}>Ready to fund the future</li>
</ul>
<div className="text-xs font-semibold text-black mt-2 font-geist-mono" style={{}}>S$5,000+/month</div>
</div>
</div>
</div>
<div className="flex justify-center mt-8">
<a className="inline-block uppercase hover:bg-gray-800 transition-colors text-base font-semibold text-white tracking-tight font-geist-mono bg-black border-black border-4 pt-2 pr-8 pb-2 pl-8" href="#join" style={{letterSpacing: '-0.025em'}}>
      Apply for Early Access
    </a>
</div>
</section><section className="container font-geist-mono bg-white/75 mr-auto ml-auto pt-8 pr-2 pb-8">
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight font-geist-mono mb-4" style={{}}>WHAT WE'RE BUILDING</h2><h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">
<ul className="grid grid-cols-1 md:grid-cols-3">
<li className="flex flex-col border-slate-950 border-8 pt-2 pr-2 pb-2 pl-2">
<span className="block uppercase text-base font-semibold text-[#0000EE] font-geist-mono mb-1" style={{}}>THE SPACE</span>
<ul className="border-slate-950 pl-0 space-y-1">
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>CBD W MRT + CHEAP HAWKER WITH KOPI</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Opening Q2 2024</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Your base from zero</li>
</ul>
</li>
<li className="flex flex-col text-slate-50 bg-slate-950 border-slate-950 border-8 pt-2 pr-2 pb-2 pl-2">
<span className="block uppercase text-base font-semibold text-slate-50/70 font-geist-mono mb-1" style={{}}>THE MODEL</span>
<ul className="pl-0 space-y-1">
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Enterprises fund creatives</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Everyone builds</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>We help ourselves</li>
</ul>
</li>
<li className="flex flex-col border-slate-950 border-8 px-2 py-2">
<span className="block uppercase text-base font-semibold text-[#0000EE]/70 tracking-tight font-geist-mono mb-1" style={{}}>THE MOVEMENT</span>
<ul className="pl-0 space-y-1">
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Got an idea? Just start liao</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Ship monthly or leave</li>
<li className="text-sm font-light tracking-tighter font-geist-mono" style={{}}>Kampong that actually cares</li>
</ul>
</li>
</ul>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
<div className="flex flex-col gap-0">
<div className="flex-1 bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 scale-100">
<h3 className="uppercase text-base font-semibold tracking-tight font-geist-mono mb-2" style={{}}>PRIVATE OFFICES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="space-y-1 text-xs">
<div className="font-semibold text-[#FF0000] font-geist-mono" style={{}}>From $4.0 psf.</div>
</div>
</div>
<div className="flex-1 bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 scale-100">
<h3 className="uppercase text-base font-semibold tracking-tight mb-2 font-geist-mono" style={{}}>FLEXIBLE WORKSPACES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs space-y-1">
<div className="font-geist-mono" style={{}}>HOT DESK (80 AVAILABLE): <span className="font-semibold text-[#FF0000] font-geist-mono" style={{}}>To be announced.</span></div>
<div className="pb-4 font-geist-mono" style={{}}>DEDICATED DESK: <span className="font-semibold text-[#FF0000] font-geist-mono" style={{}}>To be announced.</span></div>
</div>
</div>
</div>
<div className="flex flex-col gap-0">
<div className="flex-1 flex flex-col bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="uppercase text-base font-semibold tracking-tight mb-2 font-geist-mono" style={{}}>CREATIVE PROGRAM (By application only)</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs space-y-1">
<div className="font-geist-mono" style={{}}>ARTIST RESIDENCY: <span className="text-[#FF0000] font-geist-mono" style={{}}>To be announced.</span></div>
<div className="font-geist-mono" style={{}}>BUILDER FELLOWSHIP: <span className="text-[#FF0000] font-geist-mono" style={{}}>To be announced.</span></div>
<div className="font-geist-mono" style={{}}>CREATIVE LABS: <span className="text-xs text-[#FF0000] font-geist-mono pl-3" style={{}}>To be announced.</span></div><div className="font-geist-mono" style={{}}>SELECTION CRITERIA:<span className="text-xs text-[#FF0000] font-geist-mono pl-3" style={{}}>To be announced.</span></div>
<div className="inline-block uppercase hover:bg-gray-800 transition-colors hover:underline hover:bg-black text-[10px] hover:text-[#FF0000] text-base font-semibold text-white font-geist-mono bg-black border-black border-4 mt-2 pt-0 pr-4 pb-1 pl-4" style={{filter: 'blur(0px)'}}>
                Apply
              </div>
<div className="uppercase text-[10px] italic font-geist-mono mt-10 pt-2 pb-2" style={{}}>*HEAVILY SUBSIDIZED THROUGH ENTERPRISE CROSS-FUNDING</div>
</div>
</div>
<div className="flex-1 bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="uppercase text-base font-semibold tracking-tight mb-2 font-geist-mono" style={{}}>ENTERPRISE SUITES</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs space-y-1">
<div className="font-semibold text-[#FF0000] font-geist-mono" style={{}}>From $6.0psf</div>
<div className="pt-2 pb-2 space-y-0"><span className="italic font-geist-mono" style={{}}>2-year commitments receive preferred rates</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="container font-geist-mono bg-white/80 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<h2 className="md:text-3xl uppercase text-2xl font-semibold tracking-tight mb-4">PROGRAMS</h2>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="group hover:bg-black transition-colors hover:text-white bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4" style={{transform: 'translateY(0px)'}}>
<h3 className="uppercase text-base font-semibold mb-2">WEEKLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="text-xs space-y-1">
<div className="">Demo Fridays - Show your half-finished thing</div>
<div className="">Kopi &amp; Crisis - Debug together</div>
<div className="">Open Forge - Make things, break things
</div>
<div className="">Investor Office Hours - Well...</div>
</div>
</div>
<div className="border-8 border-black p-4 group hover:bg-black transition-colors bg-white/90 hover:text-[#FF0000]" style={{transform: 'translateY(0px)'}}>
<h3 className="text-base font-semibold uppercase mb-2">MONTHLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="text-xs space-y-1">
<div className="">Studio Open Hours - Come see what I'm working on</div>
<div className="">Failure Party - Celebrate spectacular failures</div>
<div className="">Teaching Tuesday - Everyone teaches something</div>
<div className="">Cross pollination Thursdays</div>
</div>
</div>
<div className="group hover:bg-black transition-colors hover:text-[#FF0000] bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4" style={{transform: 'translateY(0px)'}}>
<h3 className="text-base font-semibold uppercase mb-2 group-hover:text-white">QUARTERLY</h3>
<div className="w-1/2 h-1 bg-black group-hover:bg-white mb-2"></div>
<div className="space-y-1 text-xs">
<div className="group-hover:text-white">STARTUP DEMO DAY</div>
<div className="group-hover:text-white">CREATIVE FESTIVAL</div>
<div className="group-hover:text-white">HACKATHONS &amp; BUILD WEEKENDS</div>
</div>
</div>
</div>
</section>

<section className="container font-geist-mono bg-white/80 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<h2 className="text-2xl md:text-3xl font-semibold uppercase tracking-tight mb-4">MEMBER BENEFITS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">
<div className="border-8 border-black p-4 bg-white/90">
<div className="space-y-3 text-xs">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="">24/7 BUILDING ACCESS ACROSS ALL 25 FLOORS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="">CROSS-TIER NETWORKING WITH 350+ BUILDERS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-book-open w-3.5 h-3.5" data-lucide="book-open" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="">EQUIPMENT LIBRARY INCLUDING MAKER TOOLS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar-check w-3.5 h-3.5" data-lucide="calendar-check" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
<span className="">MEETING ROOM CREDITS BASED ON TIER</span>
</div>
</div>
</div>
<div className="border-8 border-black p-4 bg-white/90">
<div className="space-y-3 text-xs">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="">EVENT PRIORITY ACCESS TO 200+ PROGRAMS</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-handshake w-3.5 h-3.5" data-lucide="handshake" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
<span className="">MENTORSHIP MATCHING ACROSS EXPERIENCE</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-share-2 w-3.5 h-3.5" data-lucide="share-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<span className="">COLLABORATION TOOLS &amp; SKILL SHARING</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-target w-3.5 h-3.5" data-lucide="target" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle className="" cx="12" cy="12" r="2"></circle></svg>
<span className="">REVENUE SHARE PROGRAMS FOR CREATORS</span>
</div>
</div>
</div>
</div>
</section>

<section className="container font-geist-mono bg-white/60 mr-auto ml-auto pt-8 pr-2 pb-8 pl-2">
<div className="flex flex-col text-center mb-8 items-center">
<h2 className="md:text-4xl uppercase text-3xl font-semibold tracking-tight font-geist-mono mb-2" style={{}}>Start From Zero</h2>
<div className="md:text-xl text-lg font-normal text-black/70 tracking-tight font-geist-mono mb-2" style={{}}>Be among the first 100 founding members</div>
</div>
<div className="grid grid-cols-1">
<div className="flex flex-col h-full bg-white/90 border-black border-8 pt-4 pr-4 pb-4 pl-4">
<h3 className="uppercase text-base font-semibold tracking-tight font-geist-mono mb-2" style={{}}>Founding Member Perks</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs font-geist-mono mb-3" style={{}}>Lock in exclusive, lowest pricing as a founding member.</div><div className="text-xs font-geist-mono mb-3" style={{}}>Directly influence the culture, events, and vision from day one.</div><div className="text-xs font-geist-mono mb-3" style={{}}>Get priority selection for workspaces and studios.</div>
</div>
<div className="bg-gray-100/90 border-black border-8 pt-4 pr-4 pb-4 pl-4 flex flex-col h-full">
<h3 className="text-base font-semibold uppercase mb-2 font-geist-mono tracking-tight" style={{}}>Contact</h3>
<div className="w-1/4 h-1 bg-black mb-2"></div>
<div className="text-xs mb-3 space-y-1">
<div className="font-geist-mono" style={{}}><span className="text-[#0000EE]">Email:</span> hello@base0.sg</div>
<div className="font-geist-mono" style={{}}><span className="text-[#0000EE]">WhatsApp:</span> +65 XXXX XXXX</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 text-white bg-black pt-8 pb-8" id="contact">
<div className="container mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="">
<h3 className="text-lg font-semibold tracking-tight uppercase mb-3 font-geist-mono" style={{}}>Questions?</h3>
<div className="text-xs space-y-1">
<div className="flex items-center gap-2 font-geist-mono">
<svg className="lucide lucide-mail w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 6-10 7L2 6"></path></svg>
<a className="hover:underline transition-colors" href="mailto:hello@sq-collective.com">hello@base0.sg</a>
</div>
<div className="flex items-center gap-2 font-geist-mono">
<svg className="lucide lucide-message-circle w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4c-.4.4-.5 1-.4 1.6a1 1 0 0 1-1.3 1.1c-1.3-.2-2.7-.6-4.3-1.3A8.5 8.5 0 1 1 21 11.5Z"></path><path d="M8 12h.01"></path><path d="M12 12h.01"></path><path d="M16 12h.01"></path></svg>
<a className="hover:underline transition-colors" href="https://wa.me/6588888888" target="_blank">WhatsApp</a>
</div>
</div>
</div>

<div className="">
<h3 className="text-lg font-semibold tracking-tight uppercase mb-3 font-geist-mono" style={{}}>Launch Info</h3>
<div className="text-xs space-y-1 font-geist-mono">
<div className="flex gap-2 items-center">Opening Q3 2024<svg className="lucide lucide-calendar w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg></div>
<div className="flex gap-2 items-center">Postal Code: To be announced<svg className="lucide lucide-map-pin w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M12 21c-4.8-4.9-8-8.2-8-11.5A8 8 0 1 1 20 9.5C20 12.8 16.8 16.1 12 21Z"></path><circle cx="12" cy="9.5" r="3"></circle></svg></div>
</div>
</div>

<div className="">
<h3 className="text-lg font-semibold tracking-tight uppercase mb-3 font-geist-mono" style={{}}>Social</h3>
<div className="flex gap-4 items-center">
<a aria-label="Instagram" className="hover:text-[#FF0000] transition-colors" href="https://instagram.com/sqcollective" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="hover:text-[#FF0000] transition-colors" href="https://twitter.com/sqcollective" target="_blank">
<svg className="lucide lucide-twitter w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.01c-.77.35-1.6.59-2.47.7A4.15 4.15 0 0 0 21.41 2s-.88.52-1.78.8C18.14 2.32 17.12 2 16 2c-2.13 0-4.02 1.72-4.02 4.02 0 .32.04.63.11.92-3.34-.17-6.3-1.77-8.28-4.2-.35.6-.56 1.28-.56 2.01 0 1.39.7 2.61 1.76 3.31-.65-.02-1.26-.2-1.8-.5v.05c0 1.94 1.38 3.56 3.22 3.93-.34.09-.7.14-1.08.14-.26 0-.51-.02-.76-.07.51 1.6 2.01 2.77 3.78 2.8A8.32 8.32 0 0 1 2 18.58c-.35 0-.7-.02-1.04-.06A11.69 11.69 0 0 0 7.29 20c7.55 0 11.69-6.26 11.69-11.69 0-.18 0-.35-.01-.53A8.1 8.1 0 0 0 22 4.01Z"></path></svg>
</a>
<a aria-label="LinkedIn" className="hover:text-[#FF0000] transition-colors" href="https://linkedin.com/company/sqcollective" target="_blank">
<svg className="lucide lucide-linkedin w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><line x1="8" x2="8" y1="11" y2="16"></line><line x1="8" x2="8" y1="8" y2="8"></line><line x1="16" x2="16" y1="11" y2="16"></line><path d="M12 11v5"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col justify-end">
<div className="mt-8 md:mt-auto border-t border-gray-700 pt-4">
<div className="text-xs text-gray-400 text-center font-geist-mono" style={{}}>
            © 2024 BASE0. BUILDING THE FUTURE OF WORK &amp; CREATIVITY IN SINGAPORE.
          </div>
</div>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
