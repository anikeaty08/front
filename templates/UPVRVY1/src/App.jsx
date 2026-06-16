import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();
document.getElementById('year').textContent = new Date().getFullYear();

// Export HTML
document.getElementById('downloadPage').addEventListener('click',()=>{const b=new Blob([document.documentElement.outerHTML],{type:'text/html'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download='nebulaq.html';document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(u);});

// Chart.js sample data
const ctx=document.getElementById('queryChart');
new Chart(ctx,{type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Queries',data:[1200,1650,1420,2200,1980,2780,3120],borderColor:'#22d3ee',backgroundColor:'rgba(34,211,238,0.1)',tension:0.4}]},options:{plugins:{legend:{display:false}},scales:{y:{grid:{color:'rgba(255,255,255,0.05)'}},x:{grid:{display:false}}}}});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe></div>

<header className="container mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
<div className="flex items-center space-x-2" style={{animation: 'appear 0.7s ease-out forwards'}}>
<svg className="lucide lucide-aperture w-6 h-6 text-cyan-500" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="font-bold text-lg tracking-tight">NebulaQ</span>
</div>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium" style={{animation: 'appear 0.7s 0.15s ease-out forwards'}}>
<a className="hover:text-white transition" href="#">Platform</a>
<a className="hover:text-white transition" href="#">Use-Cases</a>
<a className="hover:text-white transition" href="#">Docs</a>
<a className="hover:text-white transition" href="#">Pricing</a>
<a className="hover:text-white transition" href="#">Company</a>
</nav>
<div className="flex items-center space-x-4" style={{animation: 'appear 0.7s 0.3s ease-out forwards'}}>
<button className="hidden md:inline-block text-slate-300 hover:text-white text-sm font-semibold">Log in</button>
<button className="rounded-md border border-cyan-500 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-white px-4 py-2 text-sm font-semibold transition">Sign up</button>
<button className="ml-2 hidden sm:inline-flex items-center gap-1 rounded-md border border-slate-600 hover:border-slate-400 px-3 py-2 text-xs text-slate-300" id="downloadPage">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>Export
    </button>
</div>
</header>
<main className="">

<section className="text-center pt-24 pb-32 px-6 lg:px-0">
<h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-white tracking-tight" style={{animation: 'appear 0.8s ease-out forwards'}}>Generate Answers, Not Noise</h1>
<p className="mt-2 text-3xl italic font-medium text-cyan-400" style={{animation: 'appear 0.8s 0.15s ease-out forwards'}}>knowledge in under 2 seconds</p>
<p className="max-w-xl mx-auto mt-6 text-slate-400 text-lg" style={{animation: 'appear 0.8s 0.3s ease-out forwards'}}>NebulaQ’s neural engine scours every connected source to return concise, context-rich knowledge before you can blink.</p>
<button className="mt-10 inline-flex items-center gap-2 rounded-md border border-cyan-500 bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600 transition" style={{animation: 'appear 0.8s 0.45s ease-out forwards'}}>
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>Launch demo
    </button>
</section>

<section className="relative isolate px-6 lg:px-0 -mt-16">
<div className="mx-auto max-w-5xl bg-[#111827]/60 ring-1 ring-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden" id="aura-emd6iaxbn" style={{animation: 'appear 0.9s ease-out forwards'}}>
<div className="md:p-10 pt-6 pr-6 pb-6 pl-6" id="aura-emd6iaw3h" style={{background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'saturate(180%) blur(20px)', border: '1px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', borderRadius: '1rem'}}>
<div className="flex gap-6 items-start" id="aura-emd6iavjh">

<aside className="hidden md:block w-48 shrink-0">
<button className="w-full mb-6 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-600/20 px-3 py-2 text-sm font-semibold flex items-center gap-1 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>Start thread
        </button>
<ul className="space-y-2 text-slate-400 text-sm">
<li><a className="flex items-center gap-2 hover:text-white transition" href="#"><svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>Inbox</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition" href="#"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>Live</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition" href="#"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>Datasets</a></li>
<li><a className="flex items-center gap-2 hover:text-white transition" href="#"><svg className="lucide lucide-archive w-4 h-4" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>Archive</a></li>
</ul>
</aside>

<div className="flex-1 rounded-xl bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 p-8 min-h-[360px] relative">
<h2 className="text-xl font-semibold tracking-tight text-center text-white mb-8 font-sans">Real-time Knowledge Pulse</h2>

<div className="grid gap-6 sm:grid-cols-2">
<div className="rounded-lg bg-[#020617]/60 border border-white/5 p-6 hover:ring-1 hover:ring-cyan-500 transition flex flex-col" style={{animation: 'appear 0.7s 0.1s ease-out forwards'}}>
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex items-center justify-center rounded-full bg-cyan-500/10 p-3">
<svg className="lucide lucide-clock w-6 h-6 text-cyan-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<div>
<p className="font-semibold text-slate-300 text-base font-sans">Median Response</p>
<p className="text-xs text-slate-400">1.8 s across 2.2k requests/min</p>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-sans">The median response time represents the typical latency of our neural engine, ensuring rapid and consistent knowledge delivery across high traffic.</p>
</div>
<div className="rounded-lg bg-[#020617]/60 border border-white/5 p-6 hover:ring-1 hover:ring-fuchsia-500 transition flex flex-col" style={{animation: 'appear 0.7s 0.2s ease-out forwards'}}>
<div className="flex items-center gap-3 mb-3">
<span className="inline-flex items-center justify-center rounded-full bg-fuchsia-500/10 p-3">
<svg className="lucide lucide-search w-6 h-6 text-fuchsia-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<div>
<p className="font-semibold text-slate-300 text-base font-sans">Precision</p>
<p className="text-xs text-slate-400">97.4% relevancy on benchmark</p>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed font-sans">Measured against industry benchmarks, our precision score reflects the accuracy of retrieved knowledge, minimizing irrelevant results for optimal insights.</p>
</div>
<div className="hover:ring-1 hover:ring-cyan-500 transition sm:col-span-2 flex flex-col bg-[#020617]/60 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6" id="aura-emd6igmy1" style={{animation: 'appear 0.7s 0.3s ease-out forwards'}}>
<h3 className="text-lg font-semibold text-white mb-4 font-sans tracking-tight">Weekly Query Trends</h3>
<canvas className="w-full h-48" height="612" id="queryChart" style={{display: 'block', boxSizing: 'border-box', height: '306px', width: '612px', filter: 'drop-shadow(0 0 6px #22d3ee)'}} width="1224"></canvas>
<p className="mt-3 text-xs text-slate-400 font-sans">Query volume trends over the last week demonstrate growing user engagement and system scalability.</p>
</div>
</div>

<div className="absolute inset-x-1/2 -top-3 -translate-x-1/2 w-48 h-6 bg-cyan-500/40 blur-2xl opacity-75 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl py-14 px-6 lg:px-0">
</section>

<section className="py-24 px-6 lg:px-0">
<div className="max-w-4xl mx-auto text-center">
<p className="uppercase tracking-widest text-cyan-400 text-xs font-semibold mb-2">Why NebulaQ?</p>
<h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">Your Personal AI Research Department</h2>
<p className="text-slate-400 max-w-2xl mx-auto">Stop scrolling through endless docs. Ask a question, have NebulaQ synthesize every relevant source, and receive an actionable brief—instantly.</p>
</div>
<div className="max-w-6xl mx-auto mt-16 grid gap-8 md:grid-cols-3">
<div className="rounded-2xl bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 p-6 flex flex-col items-center text-center hover:ring-1 hover:ring-cyan-500 transition" style={{animation: 'appear 0.7s 0.1s ease-out forwards'}}>
<span className="inline-flex items-center justify-center rounded-xl bg-amber-500/10 p-3 mb-4">
<svg className="lucide lucide-database w-6 h-6 text-amber-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</span>
<h3 className="text-lg font-semibold text-white mb-2">Omni-Source Indexing</h3>
<p className="text-sm text-slate-400">Sync files, APIs, and live feeds—NebulaQ unifies them all.</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 p-6 flex flex-col items-center text-center hover:ring-1 hover:ring-cyan-500 transition" style={{animation: 'appear 0.7s 0.2s ease-out forwards'}}>
<span className="inline-flex items-center justify-center rounded-xl bg-rose-500/10 p-3 mb-4">
<svg className="lucide lucide-lock w-6 h-6 text-rose-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</span>
<h3 className="text-lg font-semibold text-white mb-2">Granular Privacy</h3>
<p className="text-sm text-slate-400">Role-based access controls keep data where it belongs.</p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-[#1e293b]/60 to-[#0f172a]/60 p-6 flex flex-col items-center text-center hover:ring-1 hover:ring-cyan-500 transition" style={{animation: 'appear 0.7s 0.3s ease-out forwards'}}>
<span className="inline-flex items-center justify-center rounded-xl bg-indigo-500/10 p-3 mb-4">
<svg className="lucide lucide-settings-2 w-6 h-6 text-indigo-400" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</span>
<h3 className="text-lg font-semibold text-white mb-2">Custom Pipelines</h3>
<p className="text-sm text-slate-400">Fine-tune prompts &amp; retrieval rules—no code required.</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 py-12 px-6 lg:px-0">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<svg className="lucide lucide-aperture w-5 h-5 text-cyan-500" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="font-semibold text-lg">NebulaQ</span>
</div>
<p className="text-slate-500 text-xs">© <span id="year">2025</span> NebulaQ Labs. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-white transition" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-white transition" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-slate-400 hover:text-white transition" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>





    </>
  );
}
