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



  lucide.createIcons();
  document.addEventListener('DOMContentLoaded', () => {
    // include hero + all cards
    document.querySelectorAll('.hero, .card').forEach((el, idx) => {
      setTimeout(() => {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, idx * 180);
    });
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
      <div className="video-background-container fixed top-0 w-full h-screen -z-10"><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/88a9a95e-0766-4df2-95b7-fdd5f2f0bc3b/1.mp4"></video></div>

<section className="hero max-w-6xl mx-auto pt-20 pb-14 px-6 text-center space-y-6" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.7s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<h1 className="text-4xl md:text-5xl font-manrope tracking-tighter" style={{}}>Your work, <span className="text-indigo-600 font-manrope tracking-tighter" style={{}}>synchronized</span>.</h1>
<p className="max-w-2xl mx-auto text-base text-gray-600 font-sans" style={{}}>One unified workspace that keeps every conversation, decision, and deliverable perfectly aligned—wherever your team works best.</p>
<button aria-label="Get started" className="inline-flex gap-2 hover:bg-indigo-700 active:scale-95 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 text-sm text-white bg-gradient-to-tl from-[#aa5ee8] to-[#495fd0] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-md items-center" style={{}}>
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
    Get started
  </button>
</section>

<div className="max-w-6xl mx-auto p-6 space-y-10">

<section className="card flex flex-col lg:flex-row bg-white/50 border-0 rounded-2xl pt-10 pr-10 pb-10 pl-10 shadow-md backdrop-blur-sm" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.7s cubic-bezier(0.22, 1, 0.36, 1)'}}>

<div className="lg:w-1/3 w-full lg:pr-10 mb-6 lg:mb-0">
<h2 className="text-2xl mb-3 font-manrope tracking-tighter" style={{}}>Stay perfectly in sync.</h2>
<p className="text-sm text-gray-600 leading-relaxed font-sans" style={{}}>Workboard lets you keep every bit of work, conversation and decision in a single space—no matter where your team is.</p>
</div>

<div className="lg:w-2/3 w-full">
<div className="overflow-hidden bg-slate-50 border rounded-xl">

<nav aria-label="Applicant filters" className="flex text-sm border-b pt-3 pr-6 pb-3 pl-6 space-x-6 items-center">
<button className="text-gray-900 focus:outline-none font-sans" style={{}}>All</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors focus:outline-none font-sans" style={{}}>New</button>
<button className="text-gray-500 hover:text-gray-900 flex items-center transition-colors focus:outline-none font-sans" style={{}}>
            Trial <span className="inline-flex items-center justify-center text-xs bg-gray-100 text-gray-600 rounded-full h-5 w-5 ml-1 font-sans" style={{}}>3</span>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors focus:outline-none font-sans" style={{}}>Off-boarded</button>
</nav>

<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-gray-50 text-gray-500">
<tr className="">
<th className="text-left px-6 py-3 font-sans" scope="col" style={{}}>Brand</th>
<th className="text-left px-6 py-3 font-sans" scope="col" style={{}}>ID No.</th>
<th className="text-left px-6 py-3 font-sans" scope="col" style={{}}>Full Name</th>
<th className="text-left px-6 py-3 font-sans" scope="col" style={{}}>Contact</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Shopify</td>
<td className="px-6 py-3 font-sans" style={{}}>810-439-221</td>
<td className="px-6 py-3 font-sans" style={{}}>Marcus Rivers</td>
<td className="px-6 py-3 font-sans" style={{}}>(415) 341-8820</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Tesla</td>
<td className="px-6 py-3 font-sans" style={{}}>910-122-678</td>
<td className="px-6 py-3 font-sans" style={{}}>Alina Sanders</td>
<td className="px-6 py-3 font-sans" style={{}}>(702) 212-5676</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Netflix</td>
<td className="px-6 py-3 font-sans" style={{}}>710-949-555</td>
<td className="px-6 py-3 font-sans" style={{}}>Diego Alvarez</td>
<td className="px-6 py-3 font-sans" style={{}}>(305) 338-0184</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Adidas</td>
<td className="px-6 py-3 font-sans" style={{}}>620-488-432</td>
<td className="px-6 py-3 font-sans" style={{}}>Jamie Liu</td>
<td className="px-6 py-3 font-sans" style={{}}>(773) 554-7822</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Airbnb</td>
<td className="px-6 py-3 font-sans" style={{}}>830-127-364</td>
<td className="px-6 py-3 font-sans" style={{}}>Zoë Hart</td>
<td className="px-6 py-3 font-sans" style={{}}>(646) 998-3007</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Samsung</td>
<td className="px-6 py-3 font-sans" style={{}}>921-302-599</td>
<td className="px-6 py-3 font-sans" style={{}}>Hassan Mahmoud</td>
<td className="px-6 py-3 font-sans" style={{}}>(470) 812-1134</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Porsche</td>
<td className="px-6 py-3 font-sans" style={{}}>531-426-883</td>
<td className="px-6 py-3 font-sans" style={{}}>Greta Schultz</td>
<td className="px-6 py-3 font-sans" style={{}}>(213) 224-0982</td>
</tr>
<tr className="hover:bg-gray-50 transition">
<td className="px-6 py-3 font-sans" style={{}}>Spotify</td>
<td className="px-6 py-3 font-sans" style={{}}>231-874-605</td>
<td className="px-6 py-3 font-sans" style={{}}>Javier Ortega</td>
<td className="px-6 py-3 font-sans" style={{}}>(917) 441-9931</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-2 gap-6">

<section className="card bg-white/50 rounded-2xl pt-8 pr-8 pb-8 pl-8 drop-shadow-2xl backdrop-blur-sm space-y-8" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.7s cubic-bezier(0.22, 1, 0.36, 1)'}}>
<header className="">
<h2 className="text-2xl mb-3 font-manrope tracking-tighter" style={{}}>Customize your workspace.</h2>
<p className="text-sm text-gray-600 leading-relaxed font-sans" style={{}}>Fine-tune the dashboard to match the way your team thinks. Drag tools, swap colors, pin shortcuts—make it yours.</p>
</header>
<div className="grid md:grid-cols-2 gap-8 bg-slate-50 border-slate-950/10 border rounded-xl pt-8 pr-8 pb-8 pl-8">

<div className="">
<h3 className="text-sm flex items-center mb-6 font-sans" style={{}}>Quick tools
            <button aria-label="More tools" className="ml-auto text-gray-400 hover:text-gray-600 transition-colors focus:outline-none">
<svg className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</h3>
<div className="grid grid-cols-2 gap-6">
<button className="flex flex-col hover:border-gray-300 transition-all focus:outline-none relative border rounded-xl pt-5 pr-5 pb-5 pl-5 items-center justify-center">
<svg className="lucide lucide-file-text w-6 h-6 text-indigo-500 mb-3" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-xs text-center leading-snug font-sans" style={{}}>Docs</span>
<span className="absolute top-2 right-2 bg-indigo-100 text-indigo-600 text-[10px] rounded-full px-1.5 py-0.5 font-sans" style={{}}>New</span>
</button>
<button className="border rounded-xl flex flex-col items-center justify-center p-5 hover:border-gray-300 transition-all focus:outline-none relative">
<svg className="lucide lucide-file-spreadsheet w-6 h-6 text-emerald-500 mb-3" data-lucide="file-spreadsheet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
<span className="text-xs text-center leading-snug font-sans" style={{}}>Sheets</span>
<span className="absolute top-2 right-2 bg-emerald-100 text-emerald-600 text-[10px] rounded-full px-1.5 py-0.5 font-sans" style={{}}>Updated</span>
</button>
<button className="border rounded-xl flex flex-col items-center justify-center p-5 hover:border-gray-300 transition-all focus:outline-none relative">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-amber-500 mb-3" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="text-xs text-center leading-snug font-sans" style={{}}>Analytics</span>
<span className="absolute top-2 right-2 bg-amber-100 text-amber-600 text-[10px] rounded-full px-1.5 py-0.5 font-sans" style={{}}>Hot</span>
</button>
<button className="border rounded-xl flex flex-col items-center justify-center p-5 hover:border-gray-300 transition-all focus:outline-none relative">
<svg className="lucide lucide-briefcase w-6 h-6 text-pink-500 mb-3" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-xs text-center leading-snug font-sans" style={{}}>Projects</span>
</button>
</div>
</div>

<div className="space-y-8">
<div className="">
<h3 className="text-sm mb-4 font-sans" style={{}}>Theme palette</h3>
<div className="grid grid-cols-6 gap-3">
<span aria-label="Blue" className="h-6 w-6 rounded-full bg-blue-600 hover:ring-2 hover:ring-blue-300 transition cursor-pointer shadow-md ring-1 ring-blue-400" tabindex="0"></span>
<span aria-label="Violet" className="h-6 w-6 rounded-full bg-violet-600 hover:ring-2 hover:ring-violet-300 transition cursor-pointer shadow-md ring-1 ring-violet-400" tabindex="0"></span>
<span aria-label="Rose" className="h-6 w-6 rounded-full bg-rose-500 hover:ring-2 hover:ring-rose-300 transition cursor-pointer shadow-md ring-1 ring-rose-400" tabindex="0"></span>
<span aria-label="Orange" className="h-6 w-6 rounded-full bg-orange-500 hover:ring-2 hover:ring-orange-300 transition cursor-pointer shadow-md ring-1 ring-orange-400" tabindex="0"></span>
<span aria-label="Lime" className="h-6 w-6 rounded-full bg-lime-500 hover:ring-2 hover:ring-lime-300 transition cursor-pointer shadow-md ring-1 ring-lime-400" tabindex="0"></span>
<span aria-label="Sky" className="h-6 w-6 rounded-full bg-sky-500 hover:ring-2 hover:ring-sky-300 transition cursor-pointer shadow-md ring-1 ring-sky-400" tabindex="0"></span>
</div>
</div>
<div className="">
<h3 className="text-sm mb-4 font-sans" style={{}}>Pinned shortcuts</h3>
<ul className="space-y-3 text-sm">
<li className="flex items-center hover:text-gray-900 transition-colors cursor-pointer font-sans" style={{}}>
<svg className="lucide lucide-users w-4 h-4 text-gray-400 mr-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Team directory
              </li>
<li className="flex items-center hover:text-gray-900 transition-colors cursor-pointer font-sans" style={{}}>
<svg className="lucide lucide-clock w-4 h-4 text-gray-400 mr-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                Timesheets
              </li>
<li className="flex items-center hover:text-gray-900 transition-colors cursor-pointer font-sans" style={{}}>
<svg className="lucide lucide-life-buoy w-4 h-4 text-gray-400 mr-3" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                Support center
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="card flex flex-col bg-white/50 rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm backdrop-blur-2xl space-y-8" style={{opacity: '1', transform: 'translateY(0px)', transition: '0.7s cubic-bezier(0.22, 1, 0.36, 1)'}}>

<article className="bg-slate-50 border rounded-xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<header className="flex items-start justify-between">
<div className="">
<h4 className="text-sm font-sans" style={{}}>Quarterly report due</h4>
<p className="text-xs text-gray-500 mt-0.5 font-sans" style={{}}>Sep 30 · 5 business days left</p>
</div>
<button aria-label="Open detail" className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</header>
<p className="text-sm leading-relaxed font-sans" style={{}}>Consolidate revenue data and update growth charts before the executive review. Reach out to finance if any discrepancies appear.</p>
<div className="flex flex-wrap gap-2">
<span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-sans" style={{}}>Finance</span>
<span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-sans" style={{}}>Analytics</span>
<span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-sans" style={{}}>Leadership</span>
<span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-sans" style={{}}>Urgent</span>
<span className="bg-gray-100 rounded-full px-3 py-1 text-xs font-sans" style={{}}>Q3 2024</span>
</div>
<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<h5 className="text-xs text-gray-600 uppercase tracking-tight mb-2 font-sans" style={{}}>Progress</h5>
<div className="w-full bg-gray-200 rounded-full h-3.5 overflow-hidden">
<div className="bg-emerald-500 h-3.5 rounded-full transition-all" style={{width: '65%'}}></div>
</div>
<p className="text-xs text-gray-500 mt-1 font-sans" style={{}}>65% completed</p>
</div>
<div className="">
<h5 className="text-xs text-gray-600 uppercase tracking-tight mb-2 font-sans" style={{}}>Next steps</h5>
<ul className="list-disc list-inside text-xs text-gray-700 space-y-1 leading-snug">
<li className="font-sans" style={{}}>Verify data accuracy with finance team</li>
<li className="font-sans" style={{}}>Prepare presentation slides</li>
<li className="font-sans" style={{}}>Schedule executive meeting</li>
</ul>
</div>
</section>
</article>

<div className="">
<h2 className="text-2xl mb-3 font-manrope tracking-tighter" style={{}}>Track everything.</h2>
<p className="text-sm text-gray-600 leading-relaxed font-sans" style={{}}>Set reminders, comment in real time and never lose an action item again—get work over the finish line with zero surprises.</p>
</div>
</section>
</div>
</div>




    </>
  );
}
