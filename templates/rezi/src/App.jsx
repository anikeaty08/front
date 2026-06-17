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
      

<aside className="w-60 border-r hidden md:flex flex-col justify-between flex-shrink-0 border-slate-200 bg-white">
<div className="flex-1 overflow-y-auto no-scrollbar">

<div className="h-12 flex items-center px-4 border-b border-slate-100">
<span className="inline-flex items-center" style={{transition: 'outline 0.1s ease-in-out'}}><img alt="Rezi" className="w-auto h-6" src="https://cdn.prod.website-files.com/62f0854c1cef28185535ab61/62f0a15cf4eb678703006e9b_rezi.svg"/></span>
</div>
<div className="pt-2 pr-2 pb-2 pl-2 space-y-0.5">
<p className="px-2 text-[10px] font-medium uppercase tracking-wider mb-1 mt-2 text-slate-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Platform</p>
<a className="flex items-center gap-2.5 font-medium text-slate-900 bg-slate-100 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/home" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                    Overview
                </a>
<a className="flex items-center gap-2.5 transition-colors hover:text-slate-900 hover:bg-slate-50 font-medium text-slate-500 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/jobs" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
                    Jobs
                </a>
<a className="flex items-center gap-2.5 transition-colors hover:text-slate-900 hover:bg-slate-50 font-medium text-slate-500 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/candidates" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                    Candidates
                </a>
</div>
<div className="pt-2 pr-2 pb-2 pl-2 space-y-0.5">
<p className="text-[10px] uppercase font-medium text-slate-400 tracking-wider mb-1 pr-2 pl-2">Settings</p>
<a className="flex items-center gap-2.5 transition-colors hover:text-slate-900 hover:bg-slate-50 font-medium text-slate-500 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/general">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    General
                </a>
<a className="flex items-center gap-2.5 transition-colors hover:text-slate-900 hover:bg-slate-50 font-medium text-slate-500 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/members">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    Members
                </a>
<a className="flex items-center gap-2.5 transition-colors hover:text-slate-900 hover:bg-slate-50 font-medium text-slate-500 rounded-md pt-1.5 pr-2.5 pb-1.5 pl-2.5" href="/plans">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    Plans
                </a>
</div>
</div>
<div className="p-2 border-t border-slate-100 flex flex-col gap-2">

<button className="group flex gap-2 transition-all hover:bg-slate-100 text-left w-full rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
<img alt="Rezi" className="h-3 opacity-90 w-auto grayscale-0" src="https://cdn.prod.website-files.com/62f0854c1cef28185535ab61/62f0a15cf4eb678703006e9b_rezi.svg"/>
</div>
<span className="text-sm font-semibold text-slate-900">Rezi</span>
</div>
<svg className="transition-colors group-hover:text-slate-600 mr-1 w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(71, 85, 105)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-12 flex items-center justify-between px-4 border-b flex-shrink-0 border-slate-200 bg-white">
<div className="flex items-center gap-3">
<button className="md:hidden text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<nav className="hidden md:flex items-center text-slate-500">
<span className="cursor-pointer transition-colors hover:text-slate-900 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Dashboard</span>
<svg aria-hidden="true" className="iconify mx-1.5 text-slate-300 iconify--lucide" data-icon="lucide:chevron-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-medium text-slate-900 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Overview</span>
</nav>
</div>
</header>

<div className="flex-1 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="w-full max-w-md mx-auto flex flex-col items-center text-center">

<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-5 shadow-sm bg-slate-100 border-slate-200">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>

<h2 className="text-base font-semibold tracking-tight mb-1 text-slate-900 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>No active jobs found</h2>
<p className="leading-relaxed text-xs text-slate-500 max-w-xs mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>Create your job postings to start gathering applicants.</p>

<div className="flex gap-x-3 gap-y-3 items-center justify-center w-full">
<button className="group inline-flex hover:bg-[#3b31b0] transition-all duration-200 text-xs font-medium text-white bg-[#473cce] border-transparent border rounded-md pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-sm gap-x-2 gap-y-2 items-center justify-center" onclick="const t=document.createElement('div');t.className='fixed bottom-5 right-5 z-[9999] flex items-center gap-2 px-3 py-2 bg-slate-800 text-white text-xs font-medium rounded-md shadow-lg transition-all duration-300 opacity-0 translate-y-4 font-sans';t.innerHTML='&lt;svg xmlns=\'http://www.w3.org/2000/svg\' width=\'14\' height=\'14\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' strokeWidth=\'2\' strokeLinecap=\'round\' strokeLinejoin=\'round\' class=\'text-emerald-400\'&gt;&lt;polyline points=\'20 6 9 17 4 12\'&gt;&lt;/polyline&gt;&lt;/svg&gt;&lt;span&gt;Button is not functional&lt;/span&gt;';document.body.appendChild(t);requestAnimationFrame(()=&gt;t.classList.remove('opacity-0','translate-y-4'));setTimeout(()=&gt;{t.classList.add('opacity-0','translate-y-4');setTimeout(()=&gt;t.remove(),300)},2000);">
<svg className="text-white transition-colors" fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<span className="">Import jobs from Ashby</span>
</button>
</div>

<div className="w-full mt-12 border border-dashed rounded-lg p-2 opacity-60 pointer-events-none select-none border-slate-200 bg-slate-50/50">
<div className="h-2 rounded w-1/3 mb-2 bg-slate-200"></div>
<div className="space-y-1">
<div className="h-8 border rounded w-full bg-white border-slate-100"></div>
<div className="h-8 border rounded w-full bg-white border-slate-100"></div>
<div className="h-8 border rounded w-full bg-white border-slate-100"></div>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
