import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



import Grid1Background from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.16/build/backgrounds/grid1.cdn.min.js";
addEventListener("DOMContentLoaded", () => {
const bg = Grid1Background(document.getElementById("webgl-canvas"));
bg?.camera?.position?.set(0, 0, 65);
});



    lucide.createIcons();
    document.querySelectorAll('[data-animate]').forEach((el, i) => {
      setTimeout(() => el.classList.remove('opacity-0', 'translate-y-6'), 150 + i * 120);
    });
    document.getElementById('downloadBtn').addEventListener('click', () => {
      const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = Object.assign(document.createElement('a'), { href: url, download: 'pulsepeak-dashboard.html' });
      a.click();
      URL.revokeObjectURL(url);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<canvas aria-hidden="true" className="pointer-events-none fixed inset-0 w-screen h-screen" data-engine="three.js r170" height="1962" id="webgl-canvas" style={{display: 'block', width: '1997px', height: '981px'}} width="3994"></canvas>
<a className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-indigo-600 text-sm px-3 py-1 rounded-md z-50 font-geist" href="#main" style={{}}>Skip to content</a>

<header className="relative z-10">
<nav className="flex lg:px-10 pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-base font-semibold tracking-tight font-geist" style={{}}>Pulse</span>
<span className="text-base font-semibold tracking-tight text-indigo-400 font-geist" style={{}}>Peak</span>
</a>
<ul className="hidden md:flex items-center gap-6">
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="#" style={{}}>Overview</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="#" style={{}}>Analytics</a></li>
<li className=""><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="#" style={{}}>Workflow</a></li>
<li><a className="text-sm text-neutral-300 hover:text-white transition font-geist" href="#" style={{}}>Billing</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="group flex items-center gap-1 text-sm font-medium px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 rounded-full transition">
<svg className="lucide lucide-globe w-4 h-4 text-neutral-400 group-hover:text-indigo-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="group-hover:text-indigo-100 text-neutral-300 font-geist" style={{}}>pulsepeak.co</span>
</button>
<button className="relative flex items-center justify-center w-9 h-9 rounded-full bg-indigo-600 shadow hover:bg-indigo-500 transition focus-visible:ring-2 ring-offset-2 ring-indigo-500">
<span className="sr-only font-geist" style={{}}>Notifications</span>
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<img alt="Your avatar" className="w-9 h-9 ring-2 ring-neutral-800 object-cover rounded-full" src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=1080&amp;q=80"/>
</div>
</nav>
<div className="h-px bg-white/10"></div>
</header>

<section className="relative z-10 mx-auto max-w-3xl pt-14 lg:pt-20 px-6 lg:px-10 text-center space-y-6 mb-16 lg:mb-24">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight font-bricolage" style={{transition: 'outline 0.1s ease-in-out'}}>Growth intelligence, distilled.</h1>
<p className="text-neutral-400 text-base md:text-lg leading-relaxed font-geist" style={{}}>Instantly surface the metrics that matter, benchmark against industry leaders and project your next milestone—all without spreadsheets.</p>
<div className="flex items-center justify-center gap-3">
<button className="px-5 py-2.5 text-sm font-medium rounded-full bg-indigo-600 hover:bg-indigo-500 transition focus-visible:ring-2 ring-offset-2 ring-indigo-500 font-geist" style={{}}>Start free trial</button>
<button className="group flex items-center gap-1 text-sm rounded-full px-5 py-2.5 ring-1 ring-white/10 hover:ring-indigo-500 transition font-geist" style={{}}>
<svg className="lucide lucide-play-circle w-4 h-4 text-indigo-400 group-hover:animate-pulse" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
        Watch demo
      </button>
</div>
</section>

<main className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pb-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" id="main">

<section className="bg-white/5 backdrop-blur-lg ring-1 ring-white/10 rounded-3xl p-6 flex flex-col gap-6 transition-all" data-animate="">
<div className="flex justify-between items-center">
<h2 className="text-sm font-medium text-neutral-300 tracking-tight font-geist" style={{}}>Customer churn</h2>
<div className="flex items-center gap-1 text-emerald-400 text-sm font-semibold font-geist" style={{}}>
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> 4.2%
        </div>
</div>
<div className="relative">
<div className="h-1.5 rounded-full bg-white/10"></div>
<div className="absolute top-0 left-1/4 h-1.5 bg-indigo-500 rounded-full" style={{width: '45%'}}></div>
<div className="absolute -top-1.5 left-[24%] h-4 w-4 bg-neutral-900 border-2 border-indigo-500 rounded-full"></div>
<div className="absolute -top-1.5 left-[69%] h-4 w-4 bg-neutral-900 border-2 border-indigo-500 rounded-full"></div>
</div>
<label className="sr-only font-geist" htmlFor="churnSlider" style={{}}>Adjust churn benchmark</label>
<input className="w-full h-2 rounded-full bg-neutral-800 cursor-pointer accent-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:bg-indigo-500 [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:h-4 [&amp;::-moz-range-thumb]:w-4 [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:bg-indigo-500" id="churnSlider" max="100" min="0" type="range" value="45"/>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 p-4">
<div className="h-8 w-8 bg-indigo-600/20 text-indigo-400 flex items-center justify-center rounded-full">
<svg className="lucide lucide-thumbs-up w-4 h-4" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12"></path><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path></svg>
</div>
<p className="text-sm leading-snug text-neutral-300 font-geist" style={{}}>You retain more users than <span className="font-medium text-white font-geist" style={{}}>91%</span> of SaaS peers. Keep nurturing supporters!</p>
</div>
<div>
<h3 className="font-semibold mb-1 tracking-tight font-geist" style={{}}>Context</h3>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Stay on top of churn to unlock sustainable, compounding growth.</p>
</div>
</section>

<section className="bg-white/5 backdrop-blur-lg ring-1 ring-white/10 rounded-3xl p-6 flex flex-col gap-6 transition-all" data-animate="">
<div className="flex justify-between items-center">
<span className="text-xs uppercase tracking-wide text-neutral-400 font-geist" style={{}}>Q2 ARR objective</span>
<span className="text-sm font-semibold font-geist" style={{}}>$2.1 M</span>
</div>
<div className="relative h-6 rounded-full bg-white/10 overflow-hidden">
<div className="absolute left-0 h-6 bg-indigo-500 transition-[width] duration-700" style={{width: '58%'}}></div>
<span className="absolute right-3 text-[10px] font-medium text-neutral-300 font-geist" style={{}}>Jun 30</span>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-flag w-4 h-4 text-neutral-400" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line></svg>
<div className="flex-1">
<p className="text-sm font-medium font-geist" style={{}}>Cross $50 k weekly bookings</p>
<div className="w-full h-1 rounded-full bg-white/10 mt-1">
<div className="h-1 rounded-full bg-emerald-500" style={{width: '88%'}}></div>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist" style={{}}>88%</span>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-trending-up w-4 h-4 text-neutral-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div className="flex-1">
<p className="text-sm font-medium font-geist" style={{}}>Sub-10 % lead-to-trial drop-off</p>
<div className="w-full h-1 rounded-full bg-white/10 mt-1">
<div className="h-1 rounded-full bg-indigo-500" style={{width: '41%'}}></div>
</div>
</div>
<span className="text-xs text-neutral-400 font-geist" style={{}}>41%</span>
</div>
</div>
<div>
<h3 className="font-semibold mb-1 tracking-tight font-geist" style={{}}>Objectives</h3>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Align the crew around ambitious yet achievable quarterly goals.</p>
</div>
</section>

<section className="bg-white/5 backdrop-blur-lg ring-1 ring-white/10 rounded-3xl p-6 flex flex-col gap-6 transition-all" data-animate="">
<div className="grid grid-cols-3 gap-4">
<div className="flex flex-col items-center gap-1 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-lg py-4">
<svg className="lucide lucide-activity w-4 h-4 text-neutral-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-sm font-medium font-geist" style={{}}>9.1%</span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Activation</span>
</div>
<div className="flex flex-col items-center gap-1 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-lg py-4">
<svg className="lucide lucide-clock-4 w-4 h-4 text-neutral-400" data-lucide="clock-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span className="text-sm font-medium font-geist" style={{}}>11 d</span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Onboarding</span>
</div>
<div className="flex flex-col items-center gap-1 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-lg py-4">
<svg className="lucide lucide-user-plus w-4 h-4 text-neutral-400" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span className="text-sm font-medium font-geist" style={{}}>312</span>
<span className="text-[10px] text-neutral-400 font-geist" style={{}}>Trials</span>
</div>
</div>
<div className="w-full grid grid-cols-2 gap-3">
<button aria-label="Mark metric complete" className="flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 hover:bg-white/10 text-[13px] transition focus-visible:ring-2 focus-visible:ring-indigo-400 font-geist" style={{}}>
<svg className="lucide lucide-check-circle w-4 h-4 text-emerald-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          Complete
        </button>
<button aria-label="Refresh metrics" className="flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 hover:bg-white/10 text-[13px] transition focus-visible:ring-2 focus-visible:ring-indigo-400 font-geist" style={{}}>
<svg className="lucide lucide-refresh-ccw w-4 h-4 text-neutral-300 animate-spin" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDuration: '2.4s'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
          Refresh
        </button>
<button aria-label="Add note" className="flex items-center gap-2 py-2 px-3 rounded-2xl bg-white/5 backdrop-blur-lg ring-1 ring-white/10 hover:bg-white/10 text-[13px] transition col-span-2 focus-visible:ring-2 focus-visible:ring-indigo-400 font-geist" style={{}}>
<svg className="lucide lucide-plus w-4 h-4 text-indigo-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
          Note
        </button>
</div>
<div>
<h3 className="font-semibold mb-1 tracking-tight font-geist" style={{}}>KPI spotlight</h3>
<p className="text-sm text-neutral-400 font-geist" style={{}}>Surface key signals and act while they still matter.</p>
</div>
</section>
</main>

<button className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full p-4 shadow-lg focus-visible:ring-2 ring-offset-2 ring-indigo-500" id="downloadBtn">
<span className="sr-only font-geist" style={{}}>Download dashboard</span>
<svg className="lucide lucide-download w-5 h-5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>


    </>
  );
}
