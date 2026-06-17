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



    try {
      const ctx = document.getElementById('workChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 12 }, (_, i) => i + 1),
            datasets: [{
              data: [65,75,80,85,90,88,95,92,98,94,96,100],
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              borderColor: 'rgba(99, 102, 241, 0.8)',
              borderWidth: 2,
              fill: true,
              tension: 0.4,
              pointRadius: 0,
              pointHoverRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: { display: false, grid: { display: false } },
              y: { display: false, grid: { display: false }, suggestedMin: 60, suggestedMax: 105 }
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false }
            }
          }
        });
      }
    } catch (e) { console.log('Chart init error', e); }
  


      document.addEventListener('DOMContentLoaded', function () {
        try { lucide.createIcons(); } catch (e) { console.log('Lucide icons failed to initialize'); }
      });
    
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
      <div className="absolute top-0 w-full -z-10 h-[920px] blur-3xl bg-cover bg-center" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f03d228e-5eab-4149-af94-7d6c5c2eb5c5_3840w.jpg")'}}></div>

<div className="relative w-full overflow-hidden">
<div className="flex w-full mr-auto ml-auto justify-center"></div>
</div>

<section className="relative w-full sm:px-6 md:px-10 max-w-7xl mt-12 mr-auto mb-12 ml-auto pr-4 pl-4">

<header className="w-full">
<header className="flex gap-4 w-full mb-8 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-lg font-semibold text-black tracking-tight font-sans" style={{fontFamily: '"Playfair Display", serif'}}>RELAY</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
<a className="hover:text-black transition-colors font-medium font-sans" href="#work" style={{}}>Work</a>
<a className="hover:text-black transition-colors font-medium font-sans" href="#services" style={{}}>Services</a>
<a className="hover:text-black transition-colors font-medium font-sans" href="#approach" style={{}}>Approach</a>
<a className="hover:text-black transition-colors font-medium font-sans" href="#contact" style={{}}>Contact</a>
</nav>
<div className="flex gap-3 items-center">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/20 bg-black text-white hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="hidden md:inline-flex cursor-pointer flex-col leading-none outline-none overflow-hidden no-underline align-baseline whitespace-nowrap select-none transition-all duration-150 hover:opacity-85 focus:outline-none focus:ring-4 focus:ring-black/50 max-sm:h-12 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] text-sm text-white text-center bg-gradient-to-b from-neutral-700 to-neutral-900 border-0 rounded-full pt-3 pr-8 pb-3 pl-8 items-center justify-center" role="button">Get Started</button>
</div>
</header>
</header>

<h1 className="max-w-3xl sm:text-5xl md:text-6xl lg:text-8xl leading-[1.05] text-4xl font-medium text-black tracking-tighter font-bricolage" style={{fontFamily: '"Playfair Display", serif'}}>
    We design<img alt="Product UI" className="inline-block align-middle h-10 w-14 sm:h-12 sm:w-20 md:h-16 md:w-28 object-cover rounded-xl mr-2 ml-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0c07c30e-40d3-4e44-b2b4-f36565320508_800w.jpg" style={{}}/> brands, products, and websites that ship. <img alt="Brand system" className="inline-block align-middle h-10 w-12 sm:h-12 sm:w-16 md:h-16 md:w-24 object-cover rounded-xl mr-2 ml-2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/75013a1d-ac6c-4409-9764-7d4b6db81eb3_320w.jpg" style={{}}/>
</h1>

<p className="sm:text-3xl max-w-3xl text-base text-black mt-4" style={{}}>
    Relay is a design and engineering studio partnering with ambitious teams to build category-defining experiences—from zero-to-one to scale. Senior-only, outcome-first, fast by default.
  </p>

<div className="flex flex-wrap gap-2.5 mt-24">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3" style={{backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-pen-tool w-[14px] h-[14px] text-white/90" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
      Product Design
    </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans" style={{backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-shapes w-[14px] h-[14px] text-white/90" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
      Brand Systems
    </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans" style={{backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-code-2 w-[14px] h-[14px] text-white/90" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
      Design Engineering
    </span>
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border border-white/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans" style={{backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
<svg className="lucide lucide-film w-[14px] h-[14px] text-white/90" data-lucide="film" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
      Motion &amp; 3D
    </span>
</div>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
<button className="button shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-sans">Get Started<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg></span>
<style>
.button {
cursor: pointer;
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
overflow: hidden;
transition: all 0.25s ease;
background: radial-gradient(65.28% 65.28% at 50% 100%,
    rgba(255, 165, 0, 0.8) 0%,
    rgba(255, 165, 0, 0) 100%),
  linear-gradient(0deg, #f97316, #f97316);
border-radius: 9999px;
border: none;
outline: none;
padding: 12px 24px;
min-height: 48px;
min-width: 102px;
}

.button::before,
.button::after {
content: "";
position: absolute;
transition: all 0.5s ease-in-out;
z-index: 0;
}

.button::before {
inset: 1px;
background: linear-gradient(177.95deg,
    rgba(255, 255, 255, 0.19) 0%,
    rgba(255, 255, 255, 0) 100%);
border-radius: 9999px;
}

.button::after {
inset: 2px;
background: radial-gradient(65.28% 65.28% at 50% 100%,
    rgba(255, 165, 0, 0.8) 0%,
    rgba(255, 165, 0, 0) 100%),
  linear-gradient(0deg, #f97316, #f97316);
border-radius: 9999px;
}

.button:active {
transform: scale(0.95);
}

.points_wrapper {
overflow: hidden;
width: 100%;
height: 100%;
pointer-events: none;
position: absolute;
z-index: 1;
}

.points_wrapper .point {
bottom: -10px;
position: absolute;
animation: floating-points infinite ease-in-out;
pointer-events: none;
width: 2px;
height: 2px;
background-color: #fff;
border-radius: 9999px;
}

@keyframes floating-points {
0% {
  transform: translateY(0);
}

85% {
  opacity: 0;
}

100% {
  transform: translateY(-55px);
  opacity: 0;
}
}

.points_wrapper .point:nth-child(1) {
left: 10%;
opacity: 1;
animation-duration: 2.35s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(2) {
left: 30%;
opacity: 0.7;
animation-duration: 2.5s;
animation-delay: 0.5s;
}

.points_wrapper .point:nth-child(3) {
left: 25%;
opacity: 0.8;
animation-duration: 2.2s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(4) {
left: 44%;
opacity: 0.6;
animation-duration: 2.05s;
}

.points_wrapper .point:nth-child(5) {
left: 50%;
opacity: 1;
animation-duration: 1.9s;
}

.points_wrapper .point:nth-child(6) {
left: 75%;
opacity: 0.5;
animation-duration: 1.5s;
animation-delay: 1.5s;
}

.points_wrapper .point:nth-child(7) {
left: 88%;
opacity: 0.9;
animation-duration: 2.2s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(8) {
left: 58%;
opacity: 0.8;
animation-duration: 2.25s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(9) {
left: 98%;
opacity: 0.6;
animation-duration: 2.6s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(10) {
left: 65%;
opacity: 1;
animation-duration: 2.5s;
animation-delay: 0.2s;
}

.inner {
z-index: 2;
gap: 6px;
position: relative;
width: 100%;
color: white;
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
line-height: 1.5;
transition: color 0.2s ease-in-out;
}

.inner svg.icon {
width: 18px;
height: 18px;
transition: transform 0.3s ease;
stroke: white;
fill: none;
}

.button:hover svg.icon {
transform: translateX(2px);
}

.button:hover svg.icon path {
animation: dash 0.8s linear forwards;
}

@keyframes dash {
0% {
  stroke-dasharray: 0, 20;
  stroke-dashoffset: 0;
}

50% {
  stroke-dasharray: 10, 10;
  stroke-dashoffset: -5;
}

100% {
  stroke-dasharray: 20, 0;
  stroke-dashoffset: -10;
}
}
</style>
</button>
<a className="inline-flex items-center justify-center hover:bg-white/10 text-base font-medium text-white/90 bg-black/20 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur" href="#work" style={{backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)'}}>
      See our work
    </a>
</div>

</section>

<section className="sm:p-8 max-w-7xl bg-neutral-50 rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent">
</div>
<div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent">
</div>
<div className="absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent">
</div>
<div className="absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-neutral-300 to-transparent">
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">

<div className="flex flex-col justify-between min-h-full">
<div className="">
<span className="text-sm font-normal text-neutral-500 font-sans" style={{}}>Portfolio showcase</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-neutral-900 mt-2 font-bricolage font-medium tracking-tighter" style={{}}>
          Projects that define categories and drive growth.
        </h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200"></div>
</div>
<div className="hidden sm:grid grid-cols-3 gap-6 text-neutral-600 bg-neutral-50 px-4 relative">
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-sans" style={{}}>Brand Identity</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-sans" style={{}}>Product Design</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="text-sm font-normal font-sans" style={{}}>Web Development</span>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-neutral-900 tracking-tight font-sans" style={{}}>Impactful results across
            industries</p>
<p className="text-sm text-neutral-600 mt-1 max-w-sm" style={{}}>From startup MVPs to enterprise transformations,
            our projects consistently deliver measurable outcomes and user engagement that drives business growth.</p>
<a className="w-full inline-flex items-center justify-center gap-2 h-10 hover:bg-neutral-800 transition text-sm font-normal text-white bg-neutral-900 rounded-full mt-4 pr-4 pl-4 max-w-sm" href="#work" style={{}}>
            View all projects
            <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 relative">

<div className="flex flex-col gap-4">

<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c6bb21d7-3ce2-44b4-abbf-2b0d092cd7fc_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur" style={{}}>Branding</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-sans" style={{}}>Arcadia OS</p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/3] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9b13123e-ec51-4d3a-b994-c64aab4555ba_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-activity h-3.5 w-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur" style={{}}>Health</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-sans" style={{}}>Helix Care</p>
</div>
</article>
</div>

<div className="flex flex-col gap-4">

<article className="relative overflow-hidden aspect-[4/3] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6dc04406-de49-4988-8d82-e1d9fe1d83c1_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-layout-dashboard w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur" style={{}}>Product</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-sans" style={{}}>Nimbus Finance
            </p>
</div>
</article>

<article className="relative overflow-hidden aspect-[4/5] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5ee0a38a-b5d3-4531-8793-98beed4af162_800w.jpg)] bg-cover border-neutral-200 border rounded-2xl">
<div className="absolute top-3 left-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 backdrop-blur">
<svg className="lucide lucide-clapperboard h-3.5 w-3.5" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path><path d="m6.2 5.3 3.1 3.9"></path><path d="m12.4 3.4 3.1 4"></path><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path></svg>
</span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur" style={{}}>Motion</span>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-lg font-medium tracking-tight leading-tight font-sans" style={{}}>Lumen AI</p>
</div>
</article>
</div>
</div>
</div>
</section><section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="relative overflow-hidden rounded-3xl bg-white ring-1 ring-neutral-200 sm:p-8 p-6">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500 font-sans">(01) Innovation</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-neutral-900 mt-2 font-bricolage font-medium tracking-tighter" style={{fontFamily: '"Playfair Display", serif'}}>Driving Success with Quantum Labs</h2>
</div>
<p className="text-sm sm:text-base text-neutral-600 max-w-[42ch] font-sans">Quantum Labs empowers startups and enterprises with cutting-edge solutions to accelerate growth, optimize performance, and scale seamlessly—delivering innovation, reliability, and exponential results.</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<article className="lg:col-span-2 group relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6">
<div className="flex items-start justify-between mb-4">
<h3 className="text-neutral-900 text-xl sm:text-2xl font-bricolage font-medium tracking-tighter" style={{}}>Real-Time Performance Analytics</h3>
<span className="text-lg font-semibold text-emerald-600 font-sans">99.2%</span>
</div>
<p className="text-sm text-neutral-600 mb-6 font-sans">Monitor system performance, user engagement, and business metrics with our advanced analytics dashboard.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="relative h-[180px] rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 ring-1 ring-blue-200 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-8 opacity-10">
<div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className="border-r border-blue-300"></div><div className=""></div>
</div>
<div className="absolute left-4 top-4 flex -space-x-2">
<img alt="team member 1" className="h-8 w-8 ring-2 ring-white object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/184099c3-3f6c-4f6f-a05a-830150bf75c1_320w.jpg"/>
<img alt="team member 2" className="h-8 w-8 ring-2 ring-white object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/292b814a-2c70-4f95-a74d-5a101fc0b698_320w.jpg"/>
<img alt="team member 3" className="h-8 w-8 ring-2 ring-white object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9e675575-668c-4087-8408-fa06dd33c5f0_320w.jpg"/>
</div>
<div className="absolute left-4 bottom-4">
<span className="inline-flex items-center gap-2 text-[11px] text-blue-800 bg-white/90 rounded-full px-3 py-1.5 ring-1 ring-blue-200 font-sans">
<svg className="lucide lucide-trending-up w-3.5 h-3.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path className="" d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Performance Insights
              </span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 ring-1 ring-emerald-200 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-emerald-500"></span>
<span className="text-sm text-emerald-800 font-medium font-sans">System Health Check</span>
</div>
<span className="text-[11px] text-emerald-600 font-sans">Active</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 ring-1 ring-orange-200 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-orange-500"></span>
<span className="text-sm text-orange-800 font-medium font-sans">Load Balancing</span>
</div>
<span className="text-[11px] text-orange-600 font-sans">Optimizing</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 ring-1 ring-purple-200 px-4 py-3">
<div className="flex items-center gap-3">
<span className="h-3 w-3 rounded-full bg-purple-500"></span>
<div className="flex flex-col">
<span className="text-sm text-purple-800 font-medium font-sans">Data Processing</span>
<span className="text-[10px] text-purple-600 font-sans">Real-time stream analysis active</span>
</div>
</div>
<span className="text-[11px] text-purple-600 font-sans">Live</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-700 bg-neutral-100 rounded-full px-3 py-1 ring-1 ring-neutral-200 font-sans">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            Powered by AI
          </span>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-700 bg-neutral-100 rounded-full px-3 py-1 ring-1 ring-neutral-200 font-sans">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Secure &amp; Compliant
          </span>
</div>
</article>

<article className="group relative rounded-2xl border border-neutral-200 bg-white p-6">
<h3 className="text-neutral-900 text-lg sm:text-xl tracking-tight font-medium font-sans">Smart Automation Hub</h3>
<p className="mt-2 text-sm text-neutral-600 font-sans">Streamline workflows and boost productivity with intelligent automation.</p>
<div className="mt-6 rounded-xl bg-neutral-100 ring-1 ring-neutral-200 p-4">
<div className="relative h-[120px]">
<canvas className="" height="240" id="workChart" style={{display: 'block', boxSizing: 'border-box', height: '120px', width: '286px'}} width="572"></canvas>
</div>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-indigo-700 bg-indigo-50 rounded-full px-2 py-1 ring-1 ring-indigo-200 font-sans">
<svg className="lucide lucide-cpu w-3.5 h-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
            Auto-Scaling
          </span>
</div>
</article>

<article className="group relative rounded-2xl border border-neutral-200 bg-white p-6">
<h3 className="text-neutral-900 text-lg sm:text-xl tracking-tight font-medium font-sans">Enterprise Integration</h3>
<p className="mt-2 text-sm text-neutral-600 font-sans">Seamlessly connect with your existing tech stack and third-party services.</p>
<div className="mt-6 space-y-3">
<div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm text-neutral-800 font-sans">01 API Gateway Setup</span>
<svg className="lucide lucide-check text-emerald-500" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm text-neutral-800 font-sans">02 Data Synchronization</span>
<svg className="lucide lucide-check text-emerald-500" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-orange-200 bg-orange-50 px-3 py-2">
<span className="text-sm text-neutral-800 font-sans">03 Security Protocols</span>
<svg className="lucide lucide-clock text-orange-500" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="flex items-center justify-between rounded-lg ring-1 ring-neutral-200 bg-neutral-50 px-3 py-2">
<span className="text-sm text-neutral-800 font-sans">04 Performance Optimization</span>
<svg className="lucide lucide-clock text-neutral-400" data-lucide="clock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
</div>
</article>

<article className="lg:col-span-2 group relative overflow-hidden bg-white border-neutral-200 border rounded-2xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-neutral-900 text-xl sm:text-2xl font-bricolage font-medium tracking-tighter" style={{}}>Advanced Security &amp; Compliance</h3>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50 rounded-full px-2 py-1 ring-1 ring-emerald-200 font-sans">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Enterprise Grade
            </span>
<span className="text-lg font-semibold text-neutral-800 font-sans">SOC 2 Certified</span>
</div>
</div>
<p className="text-sm text-neutral-600 mb-6 font-sans">Protect your data and maintain compliance with industry-leading security measures and automated governance tools.</p>
<div className="grid grid-cols-3 gap-4">
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-red-50 to-red-100 ring-1 ring-red-200">
<div className="inline-flex items-center justify-center w-8 h-8 bg-red-500 text-white rounded-full mb-2">
<svg className="lucide lucide-lock" data-lucide="lock" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h4 className="font-medium text-red-800 text-sm font-sans">Encryption</h4>
<p className="text-xs text-red-600 font-sans">End-to-end AES-256</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 ring-1 ring-green-200">
<div className="inline-flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full mb-2">
<svg className="lucide lucide-eye" data-lucide="eye" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h4 className="font-medium text-green-800 text-sm font-sans">Monitoring</h4>
<p className="text-xs text-green-600 font-sans">24/7 threat detection</p>
</div>
<div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-200">
<div className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full mb-2">
<svg className="lucide lucide-file-check" data-lucide="file-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h4 className="font-medium text-blue-800 text-sm font-sans">Compliance</h4>
<p className="text-xs text-blue-600 font-sans">GDPR, HIPAA ready</p>
</div>
</div>
</article>
</div>

<div className="mt-10">
<div className="relative">
<div className="h-px w-full bg-gradient-to-r from-black/0 via-neutral-300 to-black/0"></div>
<div className="mt-6 grid grid-cols-5 text-[11px] text-neutral-600 font-geist">
<div className="flex items-center gap-2 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            DISCOVERY
          </div>
<div className="flex items-center gap-2 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            PLANNING
          </div>
<div className="flex items-center gap-2 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-orange-400"></span>
            DEVELOPMENT
          </div>
<div className="flex items-center gap-2 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
            TESTING
          </div>
<div className="flex items-center gap-2 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-neutral-300"></span>
            DEPLOYMENT
          </div>
</div>
</div>
</div>
</div>



</section>

<section className="relative z-10 max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-20 pl-4">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div className="">
<p className="text-sm font-medium text-black/50 font-sans" style={{fontFamily: '"Playfair Display", serif'}}>What we do best</p>
<h2 className="sm:text-4xl md:text-5xl text-3xl text-black font-bricolage font-medium tracking-tighter" style={{fontFamily: '"Playfair Display", serif'}}>Strategy, design, and engineering—tightly integrated</h2>
<p className="sm:text-lg max-w-[85ch] text-base text-neutral-600 mt-4 font-sans" style={{}}>We deliver end-to-end: from brand platforms and design systems to production-ready interfaces and high-performance marketing sites.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative overflow-hidden md:col-span-2 md:row-span-2 bg-white border border-neutral-200 rounded-2xl">
<div className="relative overflow-hidden">
<img alt="Sprint workshop" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8eb65de1-5616-4a1b-a6cb-f2a48d70bcb7_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex items-center gap-2">
<span className="inline-flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 font-sans">SPRINTS</span>
<span className="text-xs text-neutral-600 font-sans">End-to-end product</span>
</div>
<h3 className="text-2xl sm:text-5xl text-neutral-900 mt-3 font-bricolage font-medium tracking-tighter" style={{}}>Design sprints that move from idea to shipped</h3>
<p className="text-sm sm:text-base text-neutral-600 mt-2 font-sans">We structure work in focused sprints: align on outcomes, explore broadly, converge through testing, and deliver production-ready designs with handoff or code.</p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-900 font-sans" href="#services">
<svg className="lucide lucide-list-checks h-4 w-4" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
                See process
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-emerald-600 rounded-lg px-4 py-2 font-sans" href="#contact">
<svg className="lucide lucide-calendar-plus h-4 w-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                Book a intro call
              </a>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 font-sans">
                Design systems
              </h3>
<span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 font-sans">SCALABLE</span>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans">Token-driven systems, accessibility by default, and component libraries that teams love to use.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Design system components" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/97aab9d9-1ab5-4a9b-a254-33095a9fadf2_800w.jpg"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight text-neutral-900 font-sans">
                High‑performance websites
              </h3>
<span className="inline-flex items-center text-xs font-medium text-neutral-700 bg-neutral-100 border border-neutral-200 rounded-full px-3 py-1 font-sans">SEO &amp; SPEED</span>
</div>
<p className="mt-2 text-sm text-neutral-600 font-sans">Narratives that convert, visuals that differentiate, and performance that ranks.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Website performance and code" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/452fb7c8-d2af-414b-9dd0-99ba9a76cc5a_800w.jpg"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2 font-sans">
              Research &amp; testing
              <span className="ml-2 inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 font-sans">INSIGHT</span>
</h3>
<p className="mt-2 text-sm text-neutral-600 font-sans">Discovery, interviews, and evaluative testing inform design decisions and reduce risk.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="User research session" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3499908d-d502-44d2-9721-9b471b0460bb_800w.jpg"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2 font-sans">
              Motion &amp; content
            </h3>
<p className="mt-2 text-sm text-neutral-600 font-sans">Launch films, micro‑interactions, and content systems that bring products to life.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Motion and storytelling" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f03d228e-5eab-4149-af94-7d6c5c2eb5c5_800w.jpg"/>
</div>
</div>
</div>

<div className="group bg-white border border-neutral-200 rounded-2xl p-6">
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
<h3 className="text-lg font-medium tracking-tight text-neutral-900 flex items-center gap-2 font-sans">
              Embedded partnerships
            </h3>
<p className="mt-2 text-sm text-neutral-600 font-sans">We join your standups, work in your repos, and deliver like an internal team.</p>
<div className="mt-4 rounded-lg overflow-hidden border border-neutral-200">
<img alt="Collaborative partnership" className="aspect-video w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0153dbec-e119-4666-b642-3f8e0284fb69_800w.jpg"/>
</div>
</div>
</div>
</div>
</section><section className="sm:px-6 lg:px-8 max-w-7xl border-neutral-200 border-t mt-12 mr-auto ml-auto pt-16 pr-4 pl-4">
<div className="grid grid-cols-1 gap-8">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
<div className="">
<p className="text-sm font-medium text-neutral-600 font-sans" style={{fontFamily: '"Playfair Display", serif'}}>Transparent pricing</p>
<h3 className="text-3xl sm:text-4xl md:text-5xl text-neutral-900 mt-2 font-bricolage font-medium tracking-tighter" style={{fontFamily: '"Playfair Display", serif'}}>Plans that match how you ship</h3>
<p className="sm:text-base text-sm text-neutral-600 mt-4 max-w-[80ch] font-sans">Clear scopes, fixed sprints, and embedded options. No surprises—just momentum.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition rounded-xl px-6 py-3 ring-1 ring-neutral-800 font-sans" href="#contact">
        Get a tailored quote
        <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900 font-sans" style={{fontFamily: '"Playfair Display", serif'}}>Starter Sprint</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 font-sans">
<svg className="lucide lucide-rocket w-3.5 h-3.5" data-lucide="rocket" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
            Quick start
          </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-bricolage font-medium tracking-tighter" style={{}}>$25k</span>
<span className="text-neutral-600 text-sm font-sans">per 2-week sprint</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-sans">Best for focused features or MVP validation.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700 font-geist">
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            1 pod: Designer + Engineer
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Weekly demo + async updates
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Handoff or code-ready assets
          </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-3 transition font-sans" href="#contact">
          Start with Starter
        </a>
</div>

<div className="relative rounded-2xl border-2 border-emerald-200 bg-gradient-to-b from-emerald-50 to-white p-8 shadow-lg shadow-emerald-100/50">
<div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-emerald-600 text-white text-xs font-medium px-3 py-1 ring-2 ring-white font-sans">Most popular</div>
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900 font-sans" style={{fontFamily: '"Playfair Display", serif'}}>Growth Sprint</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-100 px-3 py-1 text-xs text-emerald-800 font-sans">
<svg className="lucide lucide-gauge w-3.5 h-3.5" data-lucide="gauge" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
            More velocity
          </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-bricolage font-medium tracking-tighter" style={{}}>$40k</span>
<span className="text-neutral-600 text-sm font-sans">per 3-week sprint</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-sans">For multi-track work: design + build in parallel.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700 font-geist">
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            2 pods: Design + Engineering
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Research, testing, and analytics setup
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Design system tokens + components
          </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 text-sm font-medium px-4 py-3 transition ring-1 ring-emerald-600 font-sans" href="#contact">
          Book a Growth sprint
          <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
</div>

<div className="relative rounded-2xl border border-neutral-200 bg-white p-8 hover:shadow-lg hover:border-neutral-300 transition-all duration-300">
<div className="flex items-center justify-between">
<h4 className="text-lg font-medium tracking-tight text-neutral-900 font-sans" style={{fontFamily: '"Playfair Display", serif'}}>Embedded Partner</h4>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 font-sans">
<svg className="lucide lucide-handshake w-3.5 h-3.5" data-lucide="handshake" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
            Embedded
          </span>
</div>
<div className="mt-6">
<div className="flex items-baseline gap-2">
<span className="text-4xl sm:text-5xl text-neutral-900 font-bricolage font-medium tracking-tighter" style={{}}>$12k</span>
<span className="text-neutral-600 text-sm font-sans">per week</span>
</div>
<p className="text-sm text-neutral-600 mt-2 font-sans">Your senior squad integrated with your team.</p>
</div>
<ul className="mt-6 space-y-3 text-sm text-neutral-700 font-geist">
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Dedicated PM, Designers, Engineers
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Standups, roadmaps, repo access
          </li>
<li className="flex items-start gap-3 font-sans">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
            Priority support + fast turnarounds
          </li>
</ul>
<a className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-neutral-900 text-sm font-medium px-4 py-3 transition font-sans" href="#contact">
          Discuss Embedded
        </a>
</div>
</div>
<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 text-sm">
<div className="text-neutral-600 font-geist">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          What's included
        </div>
<p className="font-sans">Every plan includes weekly demos, shared roadmaps, async updates, and access to source files or repos.</p>
</div>
<div className="text-neutral-600 font-geist">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Flexible scope
        </div>
<p className="font-sans">Pause between sprints. Scale pods up or down as priorities shift.</p>
</div>
<div className="text-neutral-600 font-geist">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-xs text-neutral-700 mb-3 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
          Custom engagements
        </div>
<p className="font-sans">Have a unique scope? We'll tailor a plan and price to your goals.</p>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-8 pb-10 pl-8">
<div className="relative bg-neutral-50">
<div className="relative z-10 pt-0 pr-0 pb-0 pl-0">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-neutral-200 border-b pb-12">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-bolt w-6 h-6 text-emerald-600" data-lucide="bolt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="4"></circle></svg>
<h3 className="text-2xl sm:text-3xl text-neutral-900 font-bricolage font-medium tracking-tighter" style={{}}>Relay</h3>
</div>
<p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl font-sans">We're a senior design and engineering studio partnering with ambitious teams to build brands, products, and websites that perform.</p>
</div>

<div className="lg:col-span-1">
<h4 className="text-neutral-900 font-medium mb-4 font-sans">Services</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#services">Product Design</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#services">Brand Systems</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#services">Design Engineering</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#services">Research &amp; Testing</a></li>
<li><a className="hover:text-emerald-600 transition font-sans" href="#services">Motion &amp; 3D</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-neutral-900 font-medium mb-4 font-sans">Company</h4>
<ul className="space-y-2 text-sm text-neutral-600">
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#work">Work</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#approach">Approach</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#pricing">Pricing</a></li>
<li className=""><a className="hover:text-emerald-600 transition font-sans" href="#contact">Contact</a></li>
</ul>
</div>
</div>

<div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 md:p-8" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 ring-1 ring-emerald-200 text-xs text-emerald-800 bg-emerald-100 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 font-sans">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              Now booking Q4 2024
            </div>
<h4 className="text-xl sm:text-2xl text-neutral-900 font-bricolage font-medium tracking-tighter" style={{}}>Ready to ship something great?</h4>
<ul className="text-sm text-neutral-700 space-y-3">
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Senior-only team on every engagement</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Weekly demos and shared roadmaps</span>
</li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="font-sans">Clear pricing, flexible scopes</span>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition font-sans" href="mailto:hello@relay.studio">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@relay.studio
              </a>
<span className="text-neutral-400 hidden sm:inline font-sans">•</span>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-emerald-600 transition font-sans" href="tel:+1-555-RELAY-01">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Schedule a call
              </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Name</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="Your name" required="" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Email</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="you@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Company</label>
<input className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="Company name" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Budget</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-white font-sans" value="25-50k">$25k–$50k</option>
<option className="bg-white font-sans" value="50-100k">$50k–$100k</option>
<option className="bg-white font-sans" value="100-250k">$100k–$250k</option>
<option className="bg-white font-sans" value="custom">Custom</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Timeline</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-white font-sans" value="asap">ASAP</option>
<option className="bg-white font-sans" value="1-2m">1–2 months</option>
<option className="bg-white font-sans" value="3m+">3+ months</option>
</select>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Services</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3">
<option className="bg-white font-sans">Product Design</option>
<option className="bg-white font-sans">Brand &amp; Identity</option>
<option className="bg-white font-sans">Web Design &amp; Build</option>
<option className="bg-white font-sans">Design System</option>
<option className="bg-white font-sans">Motion &amp; Content</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-xs font-medium text-neutral-700 mb-2 font-sans">Project details</label>
<textarea className="w-full placeholder-neutral-500 outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-300 transition text-sm text-neutral-900 bg-white border-neutral-200 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" placeholder="What are you building? Goals, scope, links…" rows="3"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<p className="text-xs text-neutral-600 font-sans">We'll get back to you within 24 hours with next steps.</p>
<button className="inline-flex gap-2 ring-1 ring-emerald-300 hover:bg-emerald-300 transition text-sm font-medium text-white bg-emerald-500 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center font-sans" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Send inquiry
              </button>
</div>
</form>
</div>
</div>

<div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0 border-neutral-200 border-t mt-8 pt-6 justify-between">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
<p className="text-neutral-500 text-sm font-sans">© 2024 Relay Studio. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500 text-sm">
<span className="font-sans">Remote-first • Global</span>
<span className="hidden sm:inline text-neutral-300 font-sans">•</span>
<span className="font-sans">Working across timezones</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-twitter w-[20px] h-[20px]" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-500 hover:text-emerald-600 transition" href="#">
<svg className="lucide lucide-linkedin w-[20px] h-[20px]" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
