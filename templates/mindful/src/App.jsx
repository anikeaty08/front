import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize VANTA.FOG (Background Animation from Source)
      // Adjusted settings slightly for a more subtle "Premium" feel while keeping original logic
      VANTA.FOG({
          el: "#bg-animation",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: 0xd4a7f0,
          midtoneColor: 0xffffff,
          lowlightColor: 0xe0e7ff,
          baseColor: 0xffffff,
          blurFactor: 0.73,
          speed: 1.50,
          zoom: 0.80
      });

      // Simple Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('opacity-100', 'translate-y-0');
                      entry.target.classList.remove('opacity-0', 'translate-y-10');
                  }
              });
          }, {
              threshold: 0.1
          });

          // Add animation classes to elements not already animated
          const sections = document.querySelectorAll('section > div');
          sections.forEach(sec => {
              if(!sec.classList.contains('animate-fade-in')) {
                  sec.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-10');
                  observer.observe(sec);
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 opacity-60 pointer-events-none" id="bg-animation"><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1432px', height: '1059px'}} width="1288"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1432px', height: '1059px'}} width="1288"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1432px', height: '1059px'}} width="1288"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><span style={{position: 'relative', zIndex: '1'}}></span><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1432px', height: '1059px'}} width="1288"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><span style={{position: 'relative', zIndex: '1'}}>
</span><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="383" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '385px', height: '852px'}} width="173"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="383" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '385px', height: '852px'}} width="173"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas><canvas className="vanta-canvas" height="953" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1912px', height: '1059px'}} width="1720"></canvas></div>

<div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent -z-10 pointer-events-none"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-semibold tracking-tight text-slate-900">
            mindful
            <span className="text-[#A78BFA]">.</span>
</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">
            Features
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#methodology">
            Methodology
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">
            About
          </a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Log in
          </a>
<a className="px-4 py-2 text-sm font-medium text-white bg-[#A78BFA] hover:bg-[#9061F9] rounded-full shadow-sm shadow-[#A78BFA]/30 hover:shadow-md hover:shadow-[#A78BFA]/40 transition-all transform hover:-translate-y-0.5" href="#">
            Start Free Trial
          </a>
</div>
<button className="md:hidden text-slate-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="transition-all duration-700 ease-out text-center max-w-4xl z-10 mr-auto ml-auto relative">

<div className="inline-flex flex-wrap items-center justify-center text-center gap-2 px-3 py-2 rounded-full bg-white/60 border border-white/40 shadow-sm backdrop-blur-md mb-8 animate-fade-in cursor-default hover:bg-white/80 transition-colors sm:flex-nowrap sm:py-1 sm:text-left">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A78BFA] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#A78BFA]"></span>
</span>
<span className="uppercase font-semibold text-slate-600 leading-tight text-[11px] tracking-normal sm:text-xs sm:tracking-wide">
            Reduce stress. Improve focus. Sleep better.
          </span>
</div>

<h1 className="md:text-7xl leading-[1.1] animate-fade-in delay-100 text-5xl font-semibold text-slate-900 tracking-tight mb-6">
          Find
          <span className="blur-text-reveal">Clarity</span>
          in
          <br className="hidden md:block"/>
          the Daily Noise
        </h1>

<p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in delay-200">
          Daily mental wellness tools backed by science. Join millions regaining
          control of their well-being through guided meditation, sleep stories,
          and mood tracking.
        </p>

<div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in delay-300 mb-8">
<a className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[#A78BFA] hover:bg-[#9061F9] rounded-full shadow-lg shadow-[#A78BFA]/25 transition-all transform hover:scale-[1.02]" href="#">
            Start Your Journey
          </a>
<a className="w-full sm:w-auto group px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:border-[#A78BFA]/30 hover:bg-slate-50 rounded-full shadow-sm transition-all flex items-center justify-center gap-2" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-[#A78BFA] transition-colors iconify--lucide" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
            Watch Demo
          </a>
</div>
<div className="flex items-center justify-center gap-1.5 mb-16 animate-fade-in delay-300">
<svg className="text-amber-400" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<span className="text-sm font-medium text-slate-600">
<span className="font-bold text-slate-800">4.9</span>
            average rating on the App Store
          </span>
</div>

<div className="animate-fade-in delay-500">
<p className="text-sm font-medium text-slate-400 mb-6">
            Trusted by teams focusing on wellness
          </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-800 iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold text-slate-700 tracking-tight">
                AcmeCorp
              </span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-800 iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold text-slate-700 tracking-tight">
                Vertex
              </span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-800 iconify--lucide" data-icon="lucide:circle-dashed" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold text-slate-700 tracking-tight">Orbit</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-800 iconify--lucide" data-icon="lucide:box" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path>
</g>
</svg>
<span className="font-bold text-slate-700 tracking-tight">Cube</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="features">
<div className="max-w-7xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="block text-[#A78BFA] font-semibold tracking-wider text-sm uppercase mb-3">
            One system. Multiple paths to calm.
          </span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Everything you need for a happier mind
          </h2>
<p className="text-slate-500 text-lg">
            Comprehensive tools designed by psychologists to help you navigate
            life's challenges.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-x-6 gap-y-6">

<div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="z-10 relative">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Core Experience
              </p>
<div className="w-12 h-12 rounded-xl bg-[#A78BFA]/10 flex items-center justify-center text-[#A78BFA] mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">
                Personalized Daily Plans
              </h3>
<p className="text-slate-600 mb-8 max-w-md">
                Our AI adapts to your mood and schedule, curating the perfect
                mix of meditation, breathing exercises, and focus sounds for
                your day.
              </p>

<div className="space-y-3 max-w-sm">
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/50 border border-white/60">
<div className="w-5 h-5 rounded-full border-2 border-[#A78BFA] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#A78BFA]"></div>
</div>
<span className="text-sm font-medium text-slate-700">
                    Morning Clarity (10 min)
                  </span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/40 opacity-70">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<span className="text-sm font-medium text-slate-600">
                    Deep Work Focus (25 min)
                  </span>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl bg-white/40 border border-white/40 opacity-70">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<span className="text-sm font-medium text-slate-600">
                    Evening Unwind (7 min)
                  </span>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Insights
              </p>
<div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-rose-500 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide w-[24px] h-[24px]" data-icon="lucide:heart-pulse" data-icon-replaced="true" data-strokeWidth="1.5" data-width="24" height="24" role="img" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(244, 63, 94)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
<path className="" d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
                Mood Tracking
              </h3>
<p className="text-slate-600 mb-6">
                Understand your emotional patterns with beautiful, insightful
                analytics.
              </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-3">
<div className="bg-white/60 rounded-2xl p-4 border border-white/50 backdrop-blur-sm">
<div className="text-xs font-semibold text-slate-500">
                    Weekly balance
                  </div>
<div className="mt-2 flex items-end justify-between">
<div className="text-2xl font-semibold text-slate-900 tracking-tight">
                      +18%
                    </div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-full">
                      Improving
                    </span>
</div>
<div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[72%] bg-[#A78BFA] rounded-full"></div>
</div>
</div>
<div className="bg-white/60 rounded-2xl p-4 border border-white/50 backdrop-blur-sm">
<div className="text-xs font-semibold text-slate-500">
                    Most common mood
                  </div>
<div className="mt-2 flex items-center gap-2">
<span className="text-xl">🙂</span>
<div className="">
<div className="text-sm font-semibold text-slate-900">
                        Steady
                      </div>
<div className="text-xs text-slate-500">3 days this week</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1 text-xs text-slate-500">
<span className="inline-block w-2 h-2 rounded-full bg-[#A78BFA]"></span>
<span className="">Midday check-ins</span>
</div>
</div>
</div>
<div className="mt-4 bg-white/60 rounded-2xl p-4 border border-white/50 backdrop-blur-sm">
<div className="flex items-center justify-between">
<span className="text-xs font-semibold text-slate-500">
                    Today's prompt
                  </span>
<span className="text-xs font-semibold text-[#A78BFA]">
                    1 min
                  </span>
</div>
<p className="mt-2 text-sm text-slate-600">
                  What was the most energizing moment of your day?
                </p>
<div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-600">
<span className="bg-white/50 border border-white/60 px-2 py-1 rounded-full">
                    Reflection
                  </span>
<span className="bg-white/50 border border-white/60 px-2 py-1 rounded-full">
                    Gratitude
                  </span>
</div>
</div>
</div>

<div className="bg-white/60 rounded-2xl p-4 border border-white/50 backdrop-blur-sm">
<div className="flex justify-between items-end h-24 gap-2 mb-4">
<div className="w-full bg-[#A78BFA]/20 rounded-t-lg h-[40%]"></div>
<div className="w-full bg-[#A78BFA]/40 rounded-t-lg h-[60%]"></div>
<div className="w-full bg-[#A78BFA]/30 rounded-t-lg h-[50%]"></div>
<div className="w-full bg-[#A78BFA] rounded-t-lg h-[80%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Good
                  </div>
</div>
<div className="w-full bg-[#A78BFA]/20 rounded-t-lg h-[45%]"></div>
</div>
<div className="flex justify-between text-xs text-slate-400 font-medium">
<span>M</span>
<span>T</span>
<span>W</span>
<span>T</span>
<span>F</span>
</div>
<div className="mt-5 space-y-2">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-600">Streak</span>
<span>12 days</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-600">Top trigger</span>
<span>Late meetings</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-600">Best time</span>
<span>Morning</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Routines
            </p>
<div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Wake Up</h3>
<p className="text-sm text-slate-600 mb-4">
              Energizing morning routines.
            </p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>2-minute breathing</span>
</li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Intention setting</span>
</li>
</ul>
</div>

<div className="glass-card rounded-3xl p-8 group hover:shadow-lg transition-all duration-300">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
              Sleep
            </p>
<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:moon" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">
              Sleep Better
            </h3>
<p className="text-sm text-slate-600 mb-4">
              Sleepcasts and soundscapes.
            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-semibold bg-white/60 border border-white/50 text-slate-600 px-2 py-1 rounded-full">
                Sleep stories
              </span>
<span className="text-xs font-semibold bg-white/60 border border-white/50 text-slate-600 px-2 py-1 rounded-full">
                White noise
              </span>
<span className="text-xs font-semibold bg-white/60 border border-white/50 text-slate-600 px-2 py-1 rounded-full">
                Wind down
              </span>
</div>
</div>

<div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative z-10">
<div className="flex items-start justify-between gap-6">
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                    Guidance
                  </p>
<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:life-buoy" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m4.93 4.93l4.24 4.24m5.66 5.66l4.24 4.24m-4.24-14.14l-4.24 4.24m-5.66 5.66l-4.24 4.24"></path>
<circle cx="12" cy="12" r="4"></circle>
</g>
</svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">
                    Guided Programs
                  </h3>
<p className="text-slate-600 mb-8 max-w-xl">
                    Follow structured journeys for anxiety, burnout, confidence,
                    and better sleep—built by clinicians and designed to fit
                    real life.
                  </p>
</div>
<div className="hidden md:block shrink-0">
<div className="bg-white/60 rounded-2xl p-4 border border-white/50 backdrop-blur-sm w-64">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-slate-500">
                        This week
                      </span>
<span className="text-xs font-semibold text-[#A78BFA]">
                        3/5 complete
                      </span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-[#A78BFA] flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="text-sm text-slate-700 font-medium">
                          Calm your mind
                        </div>
<div className="ml-auto text-xs text-slate-400">8 min</div>
</div>
<div className="flex items-center gap-3 opacity-80">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<div className="text-sm text-slate-600 font-medium">
                          Body scan
                        </div>
<div className="ml-auto text-xs text-slate-400">10 min</div>
</div>
<div className="flex items-center gap-3 opacity-80">
<div className="w-5 h-5 rounded-full border-2 border-slate-300"></div>
<div className="text-sm text-slate-600 font-medium">
                          Evening reset
                        </div>
<div className="ml-auto text-xs text-slate-400">6 min</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/50 border border-white/60 rounded-full px-3 py-1">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:mic" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3m0 0H8m4 0h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Coach-led sessions
                </span>
<span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/50 border border-white/60 rounded-full px-3 py-1">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:shield" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-8 9c-4.5-1.5-8-4-8-9V5l8-3l8 3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Private by default
                </span>
<span className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-white/50 border border-white/60 rounded-full px-3 py-1">
<svg aria-hidden="true" className="iconify text-slate-700 iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4m8-4v4M3 10h18M4 6h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  New content weekly
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white/50 backdrop-blur-sm border-y border-white/20">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="w-full lg:w-1/2">
<div className="inline-block text-[#A78BFA] font-semibold tracking-wider text-sm uppercase mb-4">
            Self Care
          </div>
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight mb-6">
            Check in with yourself, every single day — without friction.
          </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Building a habit is hard. Mindful makes it effortless with a
            beautiful interface that you'll actually want to use. No pressure,
            just progress.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 text-[#A78BFA]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<span className="text-slate-700">
                Smart notifications based on your bio-rhythms
              </span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 text-[#A78BFA]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
</div>
<span className="text-slate-700">
                Integration with Apple Health &amp; Google Fit
              </span>
</li>
</ul>
</div>
<div className="w-full lg:w-1/2 flex justify-center">

<div className="relative w-80 bg-white rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

<div className="h-[580px] w-full bg-[#F8F8F7] relative overflow-hidden flex flex-col">

<div className="pt-12 px-6 pb-4 flex justify-between items-center">
<span className="text-slate-400 text-xs font-semibold">TODAY</span>
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/44.jpg"/>
</div>
</div>

<div className="px-6 mb-8">
<h4 className="text-xl font-semibold text-slate-800 mb-4">
                  How are you feeling?
                </h4>
<div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
<div className="flex justify-between mb-4 text-2xl">
<span>😔</span>
<span className="">😐</span>
<span className="scale-125">🙂</span>
<span>😄</span>
</div>

<div className="relative h-2 bg-slate-100 rounded-full">
<div className="absolute top-0 left-0 h-full w-[65%] bg-[#A78BFA] rounded-full"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[65%] w-6 h-6 bg-white border-2 border-[#A78BFA] rounded-full shadow-md cursor-pointer"></div>
</div>
</div>
</div>

<div className="flex-1 px-6 space-y-4 overflow-y-auto pb-6">
<div className="p-4 bg-[#A78BFA] text-white rounded-2xl shadow-lg shadow-[#A78BFA]/20">
<div className="flex justify-between items-start mb-2">
<svg aria-hidden="true" className="iconify opacity-80 iconify--lucide" data-icon="lucide:wind" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">
                      5 min
                    </span>
</div>
<h5 className="font-semibold text-lg">Daily Breathwork</h5>
<p className="text-sm opacity-90">Reset your nervous system.</p>
</div>
<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<h5 className="font-semibold text-slate-800 text-sm">
                      Gratitude Journal
                    </h5>
<p className="text-xs text-slate-500">Write 3 things...</p>
</div>
<div className="ml-auto text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:waves" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h5 className="font-semibold text-slate-800 text-sm">
                      Sleep Sounds
                    </h5>
<p className="text-xs text-slate-500">Rain on window</p>
</div>
<div className="ml-auto text-slate-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-slate-100 p-4 flex justify-around text-slate-400">
<svg aria-hidden="true" className="iconify text-[#A78BFA] iconify--lucide" data-icon="lucide:home" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</g>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:compass" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-16 tracking-tight">
          Stories of transformation
        </h2>
<div className="relative w-full overflow-hidden mask-gradient">
<div className="flex gap-6 animate-scroll w-max py-4">

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Mindful completely changed how I approach my anxiety. The daily
                check-ins feel like a conversation with a friend who actually
                knows psychology. It’s been a lifeline during stressful
                launches."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/62.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-slate-500">Product Designer</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Using Mindful for 8 months
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "I've tried every meditation app. This is the only one that
                sticks. The UI is gorgeous and the focus music is a game changer
                for my work."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    David Chen
                  </div>
<div className="text-xs text-slate-500">Software Engineer</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Remote worker / burnout recovery
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Sleepcasts knock me out in 10 minutes flat. Best investment for
                my rest."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Emma Wilson
                  </div>
<div className="text-xs text-slate-500">Marketing Director</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Diagnosed anxiety disorder
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "The personalized daily plans take the guesswork out of
                mindfulness. I just open the app and breathe. Simple, effective,
                and beautiful."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Michael Torres
                  </div>
<div className="text-xs text-slate-500">Architect</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    High-stress environment
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "As a resident, I have zero time. This app helps me reset in
                just 5 minutes between shifts. It's essential for my sanity and
                patient care."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/28.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Olivia Martinez
                  </div>
<div className="text-xs text-slate-500">Medical Resident</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Using Mindful for 2 years
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "I never thought I could meditate. The beginner course was so
                gentle and encouraging. Now I can't start my day without it."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/85.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    James Peterson
                  </div>
<div className="text-xs text-slate-500">Teacher</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Mindfulness beginner
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Saved me during finals week. The anxiety SOS sessions are real
                magic when you feel panic setting in."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Sophie Al-Fayed
                  </div>
<div className="text-xs text-slate-500">Law Student</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Exam stress relief
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "The background soundscapes are incredible. My deep work
                sessions have doubled in length since I started using the 'Flow'
                playlist."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Robert Fox
                  </div>
<div className="text-xs text-slate-500">Creative Director</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Focus improvement
                  </div>
</div>
</div>
</div>

<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Mindful completely changed how I approach my anxiety. The daily
                check-ins feel like a conversation with a friend who actually
                knows psychology. It’s been a lifeline during stressful
                launches."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/62.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Sarah Jenkins
                  </div>
<div className="text-xs text-slate-500">Product Designer</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Using Mindful for 8 months
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "I've tried every meditation app. This is the only one that
                sticks. The UI is gorgeous and the focus music is a game changer
                for my work."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    David Chen
                  </div>
<div className="text-xs text-slate-500">Software Engineer</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Remote worker / burnout recovery
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Sleepcasts knock me out in 10 minutes flat. Best investment for
                my rest."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Emma Wilson
                  </div>
<div className="text-xs text-slate-500">Marketing Director</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Diagnosed anxiety disorder
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "The personalized daily plans take the guesswork out of
                mindfulness. I just open the app and breathe. Simple, effective,
                and beautiful."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/45.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Michael Torres
                  </div>
<div className="text-xs text-slate-500">Architect</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    High-stress environment
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "As a resident, I have zero time. This app helps me reset in
                just 5 minutes between shifts. It's essential for my sanity and
                patient care."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/28.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Olivia Martinez
                  </div>
<div className="text-xs text-slate-500">Medical Resident</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Using Mindful for 2 years
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "I never thought I could meditate. The beginner course was so
                gentle and encouraging. Now I can't start my day without it."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/85.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    James Peterson
                  </div>
<div className="text-xs text-slate-500">Teacher</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Mindfulness beginner
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "Saved me during finals week. The anxiety SOS sessions are real
                magic when you feel panic setting in."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Sophie Al-Fayed
                  </div>
<div className="text-xs text-slate-500">Law Student</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Exam stress relief
                  </div>
</div>
</div>
</div>
<div className="w-[350px] md:w-[400px] shrink-0 p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow select-none">
<div className="flex gap-1 text-amber-400 mb-4">
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="lucide lucide-star fill-current" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">
                "The background soundscapes are incredible. My deep work
                sessions have doubled in length since I started using the 'Flow'
                playlist."
              </p>
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://randomuser.me/api/portraits/men/22.jpg"/>
<div>
<div className="text-sm font-semibold text-slate-900">
                    Robert Fox
                  </div>
<div className="text-xs text-slate-500">Creative Director</div>
<div className="text-xs font-medium text-[#A78BFA] mt-0.5">
                    Focus improvement
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="pricing">
<div className="max-w-5xl mx-auto transition-all duration-700 ease-out opacity-0 translate-y-10">
<div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white px-6 py-20 text-center">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute -top-[50%] -left-[20%] w-[80%] h-[150%] bg-[#A78BFA] opacity-20 blur-[100px] rounded-full"></div>
<div className="absolute bottom-[0%] right-[0%] w-[60%] h-[100%] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
              Invest in your peace of mind
            </h2>
<p className="md:mx-20 text-lg text-slate-300 mb-10">
              Get unlimited access to the entire library of meditations, sleep
              stories, and focus music.
            </p>
<div className="mb-8">
<div className="flex items-baseline justify-center gap-1">
<span className="text-5xl font-bold text-white tracking-tight">
                  $12
                </span>
<span className="text-xl text-slate-400 font-medium">/mo</span>
</div>
<p className="text-slate-400 text-sm mt-2 font-medium">
                Less than the cost of one therapy session.
              </p>
</div>
<div className="flex flex-col items-center gap-3">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-xl">
                  Get Mindful Plus
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-slate-700 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors">
                  View Enterprise Plans
                </button>
</div>
<p className="text-sm text-slate-400 font-medium">
                14-day free trial. Cancel anytime.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 px-6 border-t border-slate-200 bg-white/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-bold tracking-tight text-slate-900">
                mindful
                <span className="text-[#A78BFA]">.</span>
</span>
</div>
<p className="text-slate-500 max-w-xs mb-6">
              Designing a world where mental health is a daily priority, not a
              luxury.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#A78BFA] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-[#A78BFA] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="text-slate-400 hover:text-[#A78BFA] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  Features
                </a>
</li>
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  Careers
                </a>
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded ml-1">
                  Hiring
                </span>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-[#A78BFA] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p className="">© 2025 Mindful Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<a className="hover:text-slate-600" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
