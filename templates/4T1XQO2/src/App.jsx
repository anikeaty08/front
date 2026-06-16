import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons({strokeWidth:1.5});

// Cycle-time chart
const ctx=document.getElementById('chartCycleTime');
if(ctx){
 new Chart(ctx,{
  type:'line',
  data:{
   labels:['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11','W12'],
   datasets:[{
    label:'Cycle Time (hrs)',
    data:[34,29,31,28,26,24,22,23,21,20,19,18],
    borderColor:'#6366F1',
    backgroundColor:'rgba(99,102,241,.2)',
    tension:.4,
    fill:true,
    pointRadius:3
   }]
  },
  options:{
   plugins:{legend:{display:false}},
   scales:{
    x:{grid:{display:false},ticks:{color:'#6b7280'}},
    y:{grid:{color:'rgba(255,255,255,.05)'},ticks:{color:'#6b7280'}}
   }
  }
 });
}

// Fade, blur & slide animation
const animatedNodes=[...document.querySelectorAll('[data-animate]')];
animatedNodes.forEach(el=>{
 el.classList.add('opacity-0','translate-y-6','blur-sm','transition-all','duration-700','ease-out');
});

const observer=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   const target=entry.target;
   const index=animatedNodes.indexOf(target);
   setTimeout(()=>{
    target.classList.remove('opacity-0','translate-y-6','blur-sm');
   },index*120);
   observer.unobserve(target);
  }
 });
},{threshold:.15});

animatedNodes.forEach(el=>observer.observe(el));

// Download
document.getElementById('downloadBtn')?.addEventListener('click',()=>{
 const blob=new Blob([document.documentElement.outerHTML],{type:'text/html'});
 const url=URL.createObjectURL(blob);
 const a=document.createElement('a');
 a.href=url;
 a.download='index.html';
 a.click();
 URL.revokeObjectURL(url);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative z-20">
<nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 transition-all duration-700 ease-out" data-animate="">
<a className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight" href="#">
<svg className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
      H
    </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Roadmap</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Docs</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Pricing</a>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-colors px-4 py-2 text-sm font-medium text-white shadow-lg" id="downloadBtn">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
      Clone Template
    </button>
</nav>
</header>

<section className="relative overflow-visible"> 
<div className="max-w-7xl mx-auto px-6 pt-24 md:pt-36">
<h1 className="max-w-3xl sm:text-5xl md:text-7xl leading-tight transition-all duration-700 ease-out text-4xl font-extrabold tracking-tight" data-animate="" id="aura-emd8xurbj" style={{color: 'white'}}>
      Real-time, <span style={{background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent'}}>two-way GitHub sync</span><br className="hidden md:block"/>for every sprint.
    </h1><p className="max-w-xl text-lg/relaxed transition-all duration-700 ease-out text-gray-400 mt-6" data-animate="">
      HyperSync keeps issues, pull requests, and project boards fully aligned across every workspace—without the copy-paste fatigue.
    </p>
<div className="mt-10 flex gap-4 transition-all duration-700 ease-out" data-animate="">
<button className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium px-5 py-3 text-white backdrop-blur-sm transition">
<svg className="lucide lucide-play w-4 h-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
        Watch Demo
      </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium px-5 py-3 text-white shadow-lg transition">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        Get Started Free
      </button>
</div>

<div className="relative mt-20 md:mt-28 transition-all duration-700 ease-out" data-animate="">

<div className="absolute inset-0 -top-8 -left-8 -right-8 -bottom-32 bg-gradient-to-br from-indigo-500/30 via-blue-600/20 to-transparent rounded-3xl blur-[120px] -z-10 pointer-events-none"></div>
<div className="relative mx-auto max-w-5xl bg-[#111318] rounded-3xl ring-1 ring-white/10 shadow-2xl overflow-hidden">

<div className="flex items-center gap-3 px-4 py-3 bg-[#0d0e12] border-b border-white/10">
<input className="flex-1 bg-[#1a1c22] placeholder-gray-500 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-600" placeholder="Search tasks…" type="text"/>
<button className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm transition">
<svg className="lucide lucide-layout-grid w-4 h-4" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
            View
          </button>
<button className="inline-flex items-center gap-1 text-gray-400 hover:text-white text-sm transition">
<svg className="lucide lucide-sliders w-4 h-4" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
            Filter
          </button>
</div>
<div className="flex">

<aside className="w-14 flex flex-col items-center gap-6 py-6 border-r border-white/10">
<button className="relative flex items-center justify-center w-10 h-10 bg-[#1a1c22] rounded-xl ring-1 ring-white/5 hover:ring-indigo-600 transition">
<span className="text-[10px] font-extrabold text-indigo-400">82%</span>
</button>
<nav className="flex flex-col items-center gap-6 text-gray-500">
<button aria-label="Home" className="hover:text-white transition-colors"><svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></button>
<button aria-label="Bell" className="hover:text-white transition-colors"><svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg></button>
<button aria-label="Calendar" className="hover:text-white transition-colors"><svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg></button>
<button aria-label="Check-square" className="hover:text-white transition-colors"><svg className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg></button>
<button aria-label="Clock" className="hover:text-white transition-colors"><svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></button>
<button aria-label="Plus" className="hover:text-white transition-colors"><svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></button>
</nav>
</aside>

<section className="flex-1">
<div className="px-4 py-4">
<h2 className="text-xs font-semibold text-gray-400 tracking-wider mb-4 flex items-center gap-2 transition-all duration-700 ease-out" data-animate="">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
                IN PROGRESS
                <span className="text-gray-600">– 4</span>
</h2>

<article className="group relative bg-[#14171d] hover:bg-[#1a1d23] transition-colors border border-white/5 rounded-xl p-3 mb-2 transition-all duration-700 ease-out" data-animate="">
<div className="flex items-start gap-3">
<span className="text-xs font-medium text-gray-500 pt-1">HS-14</span>
<p className="text-sm text-gray-200 font-medium">Add keyboard shortcuts to backlog view</p>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded-md">2/3</span>
<span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-0.5 rounded-md flex items-center gap-1"><svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Beta</span>
</div>
</div>
</article>

<article className="group relative bg-[#14171d] hover:bg-[#1a1d23] transition-colors border border-white/5 rounded-xl p-3 mb-2 transition-all duration-700 ease-out" data-animate="">
<div className="flex items-start gap-3">
<span className="text-xs font-medium text-gray-500 pt-1">HS-29</span>
<p className="text-sm text-gray-200 font-medium">Real-time Slack notifications</p>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs bg-gray-700/60 text-gray-300 px-2 py-0.5 rounded-md">1/2</span>
<span className="text-xs flex items-center gap-1 bg-amber-600/20 text-amber-400 px-2 py-0.5 rounded-md"><svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>ETA Aug 2</span>
</div>
</div>
</article>

<article className="group relative bg-[#14171d] hover:bg-[#1a1d23] transition-colors border border-white/5 rounded-xl p-3 mb-2 transition-all duration-700 ease-out" data-animate="">
<div className="flex items-start gap-3">
<span className="text-xs font-medium text-gray-500 pt-1">HS-31</span>
<p className="text-sm text-gray-200 font-medium">GraphQL rate-limit dashboard</p>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs flex items-center gap-1 bg-gray-600/20 text-gray-400 px-2 py-0.5 rounded-md"><svg className="lucide lucide-message-circle w-3 h-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>3</span>
</div>
</div>
</article>

<article className="group relative hover:bg-[#1a1d23] transition-colors transition-all duration-700 ease-out bg-[#14171d] border-white/5 border rounded-xl mb-2 pt-3 pr-3 pb-3 pl-3" data-animate="">
<div className="flex items-start gap-3">
<span className="text-xs font-medium text-gray-500 pt-1">HS-37</span>
<p className="text-sm text-gray-200 font-medium">OAuth device-flow authentication</p>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs bg-indigo-600/20 text-indigo-400 px-2 py-0.5 rounded-md flex items-center gap-1"><svg className="lucide lucide-flame w-3 h-3" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>Hotfix</span>
</div>
</div>
</article><article className="group relative hover:bg-[#1a1d23] transition-colors transition-all duration-700 ease-out bg-[#14171d] border-white/5 border rounded-xl mb-2 pt-3 pr-3 pb-3 pl-3" data-animate="">
<div className="flex items-start gap-3">
<span className="text-xs font-medium text-gray-500 pt-1">HS-45</span>
<p className="text-sm text-gray-200 font-medium">Implement multi-factor authentication</p>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs bg-green-600/20 text-green-400 px-2 py-0.5 rounded-md flex items-center gap-1">
<svg className="lucide lucide-shield w-3 h-3" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
        Security
      </span>
</div>
</div>
</article>
</div>
</section>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto mt-36 px-6 transition-all duration-700 ease-out" data-animate="">
<div className="h-px bg-white/10"></div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="transition-all duration-700 ease-out" data-animate="">
<h2 className="font-bold text-3xl md:text-4xl tracking-tight text-white">Cycle time analytics</h2>
<p className="mt-4 text-gray-400 max-w-md">
        Spot bottlenecks before they cause delays. HyperSync crunches every PR, review, and deployment to give you a crystal-clear picture of team velocity.
      </p>
<ul className="mt-8 space-y-3 text-sm text-gray-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-activity w-4 h-4 text-indigo-500" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> Weekly trendline with rolling average</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-clock w-4 h-4 text-indigo-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Lead, cycle, and review time breakdown</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-alert-circle w-4 h-4 text-indigo-500" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg> Smart alerts when metrics spike</li>
</ul>
</div>
<div className="relative transition-all duration-700 ease-out" data-animate="">
<div className="absolute inset-0 -top-8 -left-8 -right-8 -bottom-8 bg-gradient-to-tr from-indigo-500/20 via-blue-600/10 to-transparent rounded-2xl blur-2xl"></div>
<div className="relative bg-[#111318] rounded-2xl ring-1 ring-white/10 p-6">
<h3 className="text-sm font-semibold text-gray-200 mb-4 flex items-center gap-2"><svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Cycle Time – Last 12 Weeks</h3>
<div className="h-64">
<canvas className="" height="512" id="chartCycleTime" style={{display: 'block', boxSizing: 'border-box', height: '256px', width: '512px'}} width="1024"></canvas>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-32 py-12 border-t border-white/10 transition-all duration-700 ease-out" data-animate="">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
<p>© 2024 HyperSync. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Status</a>
</div>
</div>
</footer>





    </>
  );
}
