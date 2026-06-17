import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('scroll', function() {
            const sun = document.getElementById('sun');
            
            // Calculate scroll progress (0 to 1)
            const html = document.documentElement;
            const body = document.body;
            const scrollTop = html.scrollTop || body.scrollTop;
            const scrollHeight = html.scrollHeight || body.scrollHeight;
            const clientHeight = html.clientHeight;
            
            // Prevent division by zero and cap at 1
            const progress = Math.min(scrollTop / (scrollHeight - clientHeight), 1);
            
            // --- ARC POSITION CALCULATION ---
            
            // X-Axis: Linear from Left (-10vw) to Right (90vw)
            const startX = -10;
            const endX = 90;
            const currentX = startX + (progress * (endX - startX));
            
            // Y-Axis: Parabolic Arc (Sine Wave)
            // Starts low (bottom), peaks high (top), ends low (bottom)
            // Note: CSS Top 0 = Top of Screen. CSS Top 100vh = Bottom.
            // So "Bottom" is a high number, "Top" is a low number.
            
            const startY = 80; // Start at 80vh (bottom)
            const peakY = -10; // Peak at -10vh (slightly above top)
            // Using sine wave for smooth arc: sin(0)=0, sin(PI/2)=1, sin(PI)=0
            // We map progress 0-1 to radians 0-PI
            
            // Calculate displacement. When sine is 0, y = startY. When sine is 1, y = peakY.
            const amplitude = startY - peakY;
            const currentY = startY - (amplitude * Math.sin(progress * Math.PI));

            sun.style.transform = `translate3d(${currentX}vw, ${currentY}vh, 0)`;

            // --- COLOR INTERPOLATION ---
            // Pale Blue -> Beige -> Orange
            
            // Color definitions
            const colorStart = { r: 186, g: 230, b: 253 }; // Pale Blue (Sky-200)
            const colorMid =   { r: 245, g: 245, b: 220 }; // Beige
            const colorEnd =   { r: 249, g: 115, b: 22 };  // Orange (Orange-500)

            let r, g, b;

            if (progress < 0.5) {
                // Phase 1: Blue to Beige (0.0 - 0.5)
                const localProgress = progress * 2; // Map 0-0.5 to 0-1
                r = Math.round(colorStart.r + (colorMid.r - colorStart.r) * localProgress);
                g = Math.round(colorStart.g + (colorMid.g - colorStart.g) * localProgress);
                b = Math.round(colorStart.b + (colorMid.b - colorStart.b) * localProgress);
            } else {
                // Phase 2: Beige to Orange (0.5 - 1.0)
                const localProgress = (progress - 0.5) * 2; // Map 0.5-1.0 to 0-1
                r = Math.round(colorMid.r + (colorEnd.r - colorMid.r) * localProgress);
                g = Math.round(colorMid.g + (colorEnd.g - colorMid.g) * localProgress);
                b = Math.round(colorMid.b + (colorEnd.b - colorMid.b) * localProgress);
            }

            const rgbString = `rgb(${r}, ${g}, ${b})`;
            sun.style.backgroundColor = rgbString;
            sun.style.boxShadow = `0 0 150px 50px ${rgbString}`;
        });
        
        // Trigger scroll event once on load to set initial position
        window.dispatchEvent(new Event('scroll'));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-50 bg-black"></div>

<div className="sun-orb" id="sun" style={{transform: 'translate3d(-10vw, 80vh, 0px)', backgroundColor: 'rgb(186, 230, 253)', boxShadow: 'rgb(186, 230, 253) 0px 0px 150px 50px'}}></div>
<div className="noise-overlay"></div>

<nav className="fixed mix-blend-normal top-8 left-6">
<a className="inline-flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm font-semibold text-white font-geist bg-white/10 h-10 border-white/10 border rounded-full pr-6 pl-6 backdrop-blur-md" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
            PCMRCN
        </a>
</nav>

<nav className="fixed flex text-sm font-medium text-neutral-400 mix-blend-plus-lighter top-10 right-6">
<a className="hover:text-white transition-colors font-geist" href="#focus" style={{transition: 'outline 0.1s ease-in-out'}}>Focus</a>
<a className="hover:text-white transition-colors font-geist mr-2 ml-2" href="#network" style={{transition: 'outline 0.1s ease-in-out'}}>Network</a>
<a className="hover:text-white transition-colors font-geist" href="#contact" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</nav>
<main className="relative z-10 px-6 pb-24 max-w-[1600px] mx-auto">

<header className="md:pt-64 md:pb-48 pt-48 pb-32 relative">

<div className="absolute right-0 top-0 bottom-0 w-full md:w-[70%] lg:w-[60%] z-[-1] pointer-events-none hero-graphic-mask opacity-[0.25] overflow-hidden mix-blend-screen">
<svg height="100%" preserveaspectratio="xMidYMid slice" viewbox="0 0 800 600" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>

<pattern height="52" id="hexGrid" patternunits="userSpaceOnUse" width="60">
<path className="text-white/20" d="M30 0 L60 17 L60 51 L30 68 L0 51 L0 17 Z" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>

<rect className="opacity-30" fill="url(#hexGrid)" height="100%" width="100%" x="0" y="0"></rect>

<g transform="translate(350, 50) scale(1.2) rotate(15)">

<path className="text-white/40" d="M100,0 Q200,100 100,200 T100,400 T100,600" fill="none" stroke="currentColor" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<path className="text-white/40" d="M200,0 Q100,100 200,200 T200,400 T200,600" fill="none" stroke="currentColor" stroke-dasharray="4,4" strokeWidth="1.5"></path>

<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="120" x2="180" y1="30" y2="30"></line>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="100" x2="200" y1="100" y2="100"></line>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="120" x2="180" y1="170" y2="170"></line>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="100" x2="200" y1="300" y2="300"></line>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="120" x2="180" y1="370" y2="370"></line>
<line className="text-white/20" stroke="currentColor" strokeWidth="1" x1="100" x2="200" y1="500" y2="500"></line>
</g>

<g className="text-white/30" transform="translate(500, 300)">
<polygon fill="none" points="50,0 100,25 100,75 50,100 0,75 0,25" stroke="currentColor" strokeWidth="1"></polygon>
<circle cx="50" cy="50" fill="none" r="20" stroke="currentColor" stroke-dasharray="2,2" strokeWidth="0.5"></circle>
<line stroke="currentColor" strokeWidth="0.5" x1="100" x2="150" y1="25" y2="0"></line>
<circle cx="155" cy="-2" fill="none" r="5" stroke="currentColor" strokeWidth="1"></circle>
</g>

<g className="text-white/10">
<line stroke="currentColor" stroke-dasharray="10,5" strokeWidth="0.5" x1="750" x2="750" y1="50" y2="550"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="740" x2="760" y1="100" y2="100"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="740" x2="760" y1="300" y2="300"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="740" x2="760" y1="500" y2="500"></line>
<text fill="currentColor" fontFamily="monospace" fontSize="10" text-anchor="end" x="720" y="105">SEQ.01</text>
<text fill="currentColor" fontFamily="monospace" fontSize="10" text-anchor="end" x="720" y="305">MOL.STRUCT</text>
</g>
</svg>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] max-w-4xl text-white font-geist relative z-10" style={{}}>
                An international academic initiative connecting clinicians and researchers.
            </h1>
<p className="mt-8 text-lg text-neutral-400 max-w-2xl leading-relaxed font-geist relative z-10" style={{transition: 'outline 0.1s ease-in-out'}}>
                Whether based in Warsaw or Ningbo, we provide the rigorous framework for scientific writing, translational medicine, and evidence synthesis.
            </p>
</header>

<section className="w-full" id="focus">

<div className="group md:py-20 grid grid-cols-1 md:grid-cols-12 hover:border-neutral-700 transition-colors duration-500 border-neutral-800/60 border-t pt-16 pb-16 gap-x-12 gap-y-8">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white group-hover:text-orange-100 transition-colors font-geist" style={{}}>Neurosurgery</h2>
</div>
<div className="md:col-span-7 flex flex-col justify-between h-full">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mb-8 group-hover:text-neutral-300 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Perioperative Neuroscience and advanced surgical interventions. We focus on improving patient outcomes through rigorous retrospective analysis and prospective observation.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Outcomes</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Microsurgery</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Oncology</span>
</div>
</div>
</div>

<div className="group border-t border-neutral-800/60 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 hover:border-neutral-700 transition-colors duration-500">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white group-hover:text-orange-100 transition-colors font-geist" style={{}}>Anesthesiology</h2>
</div>
<div className="md:col-span-7 flex flex-col justify-between h-full">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mb-8 group-hover:text-neutral-300 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Perioperative Medicine and critical care pathways. Defining standards for high-risk patients through international collaboration and data sharing.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Critical Care</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Pathways</span>
</div>
</div>
</div>

<div className="group border-t border-neutral-800/60 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 hover:border-neutral-700 transition-colors duration-500">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white group-hover:text-orange-100 transition-colors font-geist" style={{}}>Translational</h2>
</div>
<div className="md:col-span-7 flex flex-col justify-between h-full">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mb-8 group-hover:text-neutral-300 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Bridging the gap between basic science and clinical application. We synthesize evidence to create actionable medical knowledge.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Evidence Synthesis</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Meta-Analysis</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Systematic Review</span>
</div>
</div>
</div>

<div className="group border-t border-neutral-800/60 py-16 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-y-8 gap-x-12 hover:border-neutral-700 transition-colors duration-500">
<div className="md:col-span-5">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white group-hover:text-orange-100 transition-colors font-geist" style={{}}>Data Science</h2>
</div>
<div className="md:col-span-7 flex flex-col justify-between h-full">
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed max-w-xl mb-8 group-hover:text-neutral-300 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Utilizing large clinical datasets to understand trends, improve patient safety, and predict outcomes in complex surgical cases.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Big Data</span>
<span className="px-3 py-1 border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm rounded-full text-[10px] font-semibold uppercase tracking-wider text-neutral-300 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Patient Safety</span>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-800/60 pt-24 pb-12" id="network">
<div className="mb-12">
<span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>The Network</span>
<h3 className="text-2xl text-white mt-4 font-medium font-geist" style={{}}>Key Coordinators</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm rounded-lg hover:border-neutral-600 transition-all group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-neutral-500 uppercase group-hover:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Poland</span>
<iconify-icon className="text-neutral-600 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Wojciech Czyżewski, MD, PhD</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Neurosurgeon</p>
</div>

<div className="p-6 border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm rounded-lg hover:border-neutral-600 transition-all group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-neutral-500 uppercase group-hover:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Poland</span>
<iconify-icon className="text-neutral-600 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Jakub Litak, MD</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Neurosurgeon</p>
</div>

<div className="p-6 border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm rounded-lg hover:border-neutral-600 transition-all group">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold text-neutral-500 uppercase group-hover:text-white transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>China</span>
<iconify-icon className="text-neutral-600 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Binbin Zhu, Prof.</h4>
<p className="text-sm text-neutral-400 mt-1 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Anesthesiologist, Ningbo</p>
</div>
</div>
</section>

<section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-neutral-800/60" id="contact">
<div className="">
<h3 className="text-2xl font-medium text-white mb-6 font-geist" style={{}}>Scientific Integrity</h3>
<ul className="space-y-4">
<li className="flex gap-4 items-start text-neutral-400 font-light">
<iconify-icon className="text-neutral-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Reproducibility guaranteed in all research outputs.</span>
</li>
<li className="flex gap-4 items-start text-neutral-400 font-light">
<iconify-icon className="text-neutral-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Authorship strictly consistent with ICMJE guidance.</span>
</li>
<li className="flex gap-4 items-start text-neutral-400 font-light">
<iconify-icon className="text-neutral-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Adherence to local IRB approvals and ethics.</span>
</li>
</ul>
</div>
<div className="">
<h3 className="text-2xl font-medium text-white mb-6 font-geist" style={{}}>Start a conversation</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-8 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    We are always looking for new collaborators to join our retrospective studies or meta-analysis working groups.
                </p>
<a className="inline-flex items-center gap-3 text-white border-b border-white pb-1 hover:text-orange-300 hover:border-orange-300 transition-colors" href="mailto:contact@pcmrcn.org">
<span className="text-lg font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>contact@pcmrcn.org</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="pt-12 border-t border-neutral-900/80">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<span className="text-sm text-neutral-600 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2023 PCMRCN. All rights reserved.</span>
<div className="flex gap-6 text-sm text-neutral-600">
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Warsaw, PL</span>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Ningbo, CN</span>
</div>
</div>
<p className="mt-8 text-[10px] text-neutral-700 uppercase tracking-wide max-w-2xl leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Disclaimer: PCMRCN is an academic collaboration network. The website is for informational purposes only. Any clinical research activity is conducted under the governance and approvals required by the participating institutions.
            </p>
</footer>
</main>


    </>
  );
}
