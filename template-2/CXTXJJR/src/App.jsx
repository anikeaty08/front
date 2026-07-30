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



  lucide.createIcons({ strokeWidth: 1.5 });

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-animate]').forEach((el, idx) => {
      el.classList.add('opacity-0', 'translate-y-4', 'blur-sm', 'transition', 'duration-700', 'ease-out');
      setTimeout(() => {
        el.classList.remove('opacity-0', 'translate-y-4', 'blur-sm');
      }, 100 + idx * 100);
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/1aa813b3-2a85-4e60-9b3c-256572f920ab_3840w.jpg")`}}></div>

<header className="border-b bg-black border-gray-800">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between transition duration-700 ease-out" data-animate="">
<div className="flex items-center gap-2 w-1/3 text-indigo-400">
<span className="select-none text-lg font-semibold text-neutral-50 tracking-tight font-geist" style={{fontFamily: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont`}}>DevOps</span>
</div>
<button className="p-2 transition rounded-full md:hidden mx-auto text-gray-400 hover:bg-gray-900">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<nav className="hidden md:flex gap-6 text-sm font-medium justify-end w-1/3">
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Products</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Incidents</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Explore</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Assurance</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Guidelines</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Analytics</a>
<a className="text-gray-400 hover:text-gray-100 font-geist" href="#" style={{}}>Pipelines</a>
</nav>
<div className="flex items-center gap-4 w-1/3 justify-end">
<button className="relative p-2 rounded-full transition text-gray-400 hover:bg-gray-900">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-red-500"></span>
</button>
<button className="p-2 rounded-full transition text-gray-400 hover:bg-gray-900">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold select-none bg-gray-800 text-gray-300 font-geist" style={{}}>AV</button>
</div>
</div>
</div>
</header>

<main className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-8 pl-4 space-y-20">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition duration-700 ease-out items-center" data-animate="">

<div className="space-y-4">
<h1 className="lg:text-4xl text-3xl text-gray-100 font-geist-mono tracking-tight font-light" style={{letterSpacing: `-0.025em`, fontWeight: `600`}}>Real-Time Insights and Automated Pipelines</h1>
<p className="text-sm max-w-md text-gray-400 font-geist" style={{}}>Monitor your DevOps pipeline with integrated insights, automated workflows, and continuous delivery metrics to enhance efficiency and reliability.</p>
</div>

<div className="bg-neutral-950/60 border-gray-800 border rounded-xl mt-4 mr-4 mb-4 ml-4 pt-4 pr-4 pb-4 pl-4">
<h2 className="text-xs font-semibold tracking-wide text-gray-500 mb-4 font-geist" style={{}}>DEVOPS MONITORING</h2>
<div className="space-y-3">

<div className="flex items-center justify-between rounded-xl border px-4 py-3 transition border-gray-800 bg-black hover:border-indigo-700">
<div className="flex items-center gap-3 w-1/3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-800">
<svg className="lucide lucide-git-branch w-5 h-5 text-purple-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</span>
<span className="text-sm font-medium font-geist" style={{}}>Source Control</span>
</div>
<div className="flex items-center gap-2 w-1/3">
<svg className="lucide lucide-repo w-4 h-4 text-gray-600" data-lucide="repo" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12l9-5-9-5-9 5 9 5z"></path><path d="M12 12v9"></path><path d="M12 12L3 7"></path><path d="M21 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7"></path></svg>
<span className="text-sm font-geist" style={{}}><span className="font-semibold font-geist" style={{}}>240</span> Repos</span>
</div>
<div className="flex items-center gap-2 w-1/3 justify-end">
<span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-red-900 text-red-400 font-geist" style={{}}>
<svg className="lucide lucide-alert-circle w-3 h-3" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>12 Critical
        </span>
<span className="text-xs text-gray-500 font-geist" style={{}}>/ 42 Issues</span>
</div>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 transition border-gray-800 bg-black hover:border-indigo-700">
<div className="flex items-center gap-3 w-1/3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-800">
<svg className="lucide lucide-git-pull-request w-5 h-5 text-emerald-400" data-lucide="git-pull-request" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" x2="6" y1="9" y2="21"></line></svg>
</span>
<span className="text-sm font-medium font-geist" style={{}}>CI/CD Pipelines</span>
</div>
<div className="flex items-center gap-2 w-1/3">
<svg className="lucide lucide-hard-drive w-4 h-4 text-gray-600" data-lucide="hard-drive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="2" y1="12" y2="12"></line><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" x2="6.01" y1="16" y2="16"></line><line x1="10" x2="10.01" y1="16" y2="16"></line></svg>
<span className="text-sm font-geist" style={{}}><span className="font-semibold font-geist" style={{}}>64</span> Pipelines</span>
</div>
<div className="flex items-center gap-2 w-1/3 justify-end">
<span className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded bg-orange-900 text-orange-400 font-geist" style={{}}>
<svg className="lucide lucide-alert-triangle w-3 h-3" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>6 High
        </span>
<span className="text-xs text-gray-500 font-geist" style={{}}>/ 18 Issues</span>
</div>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 transition border-gray-800 bg-black hover:border-indigo-700">
<div className="flex items-center gap-3 w-1/3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink-800">
<svg className="lucide lucide-package w-5 h-5 text-pink-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</span>
<span className="text-sm font-medium font-geist" style={{}}>Container Registry</span>
</div>
<div className="flex items-center gap-2 w-1/3">
<svg className="lucide lucide-archive w-4 h-4 text-gray-600" data-lucide="archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path><path d="M10 12h4"></path></svg>
<span className="text-sm font-geist" style={{}}><span className="font-semibold font-geist" style={{}}>12</span> Images</span>
</div>
<div className="flex items-center gap-2 w-1/3 justify-end text-xs text-gray-500 font-geist" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-gray-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>No Issues
      </div>
</div>

<div className="flex items-center justify-between rounded-xl border px-4 py-3 transition border-gray-800 bg-black hover:border-indigo-700">
<div className="flex items-center gap-3 w-1/3">
<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-800">
<svg className="lucide lucide-server w-5 h-5 text-blue-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</span>
<span className="text-sm font-medium font-geist" style={{}}>Cloud Infrastructure</span>
</div>
<div className="flex items-center gap-2 w-1/3">
<svg className="lucide lucide-cloud w-4 h-4 text-gray-600" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
<span className="text-sm font-geist" style={{}}><span className="font-semibold font-geist" style={{}}>6</span> Accounts</span>
</div>
<div className="flex items-center gap-2 w-1/3 justify-end text-xs text-gray-500 font-geist" style={{}}>
<svg className="lucide lucide-check w-3 h-3 text-gray-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>No Issues
      </div>
</div>
</div>
</div>
</section>


<section className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col gap-6 transition duration-700 ease-out hover:border-indigo-700 bg-black/60 border-gray-800 border rounded-xl pt-6 pr-6 pb-6 pl-6" data-animate="">
<div className="flex items-center justify-between text-sm font-semibold">
<span className="flex items-center gap-2 text-gray-300 font-geist" style={{}}>Blocked <svg className="lucide lucide-info w-4 h-4 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
</div>
<div className="text-3xl text-gray-100 font-geist-mono tracking-tight font-light" style={{}}>846</div>
<div className="text-sm text-gray-500 font-geist" style={{}}>Issues Prevented Pre-Merge</div>
<div className="h-3 w-full overflow-hidden rounded-full bg-blue-900">
<div className="h-full bg-blue-400" style={{width: `78%`}}></div>
</div>
<div className="flex justify-between text-[10px] font-medium">
<span className="flex items-center gap-1 text-blue-300 font-geist" style={{}}><svg className="lucide lucide-git-branch w-3 h-3" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>78%</span>
<span className="flex items-center gap-1 text-orange-400 font-geist" style={{}}><svg className="lucide lucide-git-commit w-3 h-3" data-lucide="git-commit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><line x1="3" x2="9" y1="12" y2="12"></line><line x1="15" x2="21" y1="12" y2="12"></line></svg>22%</span>
</div>
</div>

<div className="flex flex-col gap-6 transition duration-700 ease-out hover:border-indigo-700 bg-black/60 border-gray-800 border rounded-xl pt-6 pr-6 pb-6 pl-6" data-animate="">
<div className="flex items-center justify-between text-sm font-semibold">
<span className="flex items-center gap-2 text-gray-300 font-geist" style={{}}>New <svg className="lucide lucide-info w-4 h-4 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
</div>
<div className="text-3xl text-gray-100 font-geist-mono tracking-tight font-light" style={{}}>60</div>
<div className="text-sm text-gray-500 font-geist" style={{}}>Issues Detected</div>
<div className="h-3 w-full overflow-hidden rounded-full flex bg-red-900">
<div className="h-full bg-red-300" style={{width: `40%`}}></div>
<div className="h-full bg-red-500" style={{width: `30%`}}></div>
<div className="h-full bg-orange-600" style={{width: `15%`}}></div>
<div className="h-full bg-yellow-600" style={{width: `15%`}}></div>
</div>
<div className="flex justify-between text-[10px] font-medium">
<span className="text-red-300 font-geist" style={{}}>Critical 12</span>
<span className="text-red-500 font-geist" style={{}}>High 24</span>
<span className="text-orange-500 font-geist" style={{}}>Medium 8</span>
<span className="text-yellow-500 font-geist" style={{}}>Low 16</span>
</div>
</div>

<div className="flex flex-col gap-6 transition duration-700 ease-out hover:border-indigo-700 bg-black/60 border-gray-800 border rounded-xl pt-6 pr-6 pb-6 pl-6" data-animate="">
<div className="flex items-center justify-between text-sm font-semibold">
<span className="flex items-center gap-2 text-gray-300 font-geist" style={{}}>Resolved <svg className="lucide lucide-info w-4 h-4 text-gray-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
</div>
<div className="text-3xl text-gray-100 font-geist-mono tracking-tight font-light" style={{}}>224</div>
<div className="text-sm text-gray-500 font-geist" style={{}}>Issues Closed & Deferred</div>
<div className="h-3 w-full overflow-hidden rounded-full flex bg-green-900">
<div className="h-full bg-green-400" style={{width: `60%`}}></div>
<div className="h-full bg-green-500" style={{width: `30%`}}></div>
<div className="h-full bg-green-600" style={{width: `10%`}}></div>
</div>
<div className="flex justify-between text-[10px] font-medium">
<span className="text-green-300 font-geist" style={{}}>≤ 7 days 112</span>
<span className="text-green-400 font-geist" style={{}}>8-30 days 82</span>
<span className="text-green-500 font-geist" style={{}}>{">"} 30 days 30</span>
</div>
</div>
</section>
</main>




    </>
  );
}
