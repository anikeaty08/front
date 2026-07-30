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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-oNju9tQxB1nyaHSc0bBhpEAE" width="100%"></iframe></div>

<div className="min-h-screen flex flex-col">

<header className="shadow-sm transition-all duration-700 ease-out opacity-100 translate-y-0 bg-black" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex space-x-8 items-center">
<span className="select-none text-2xl font-normal text-neutral-50 tracking-tight font-geist" style={{userSelect: `none`}}>Caption</span>
<nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Projects</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Violations</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Discovery</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Compliance</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Policies</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Reports</a>
<a className="font-geist tracking-tight text-neutral-400 hover:text-neutral-100" href="#" style={{}}>Workflows</a>
</nav>
</div>
<div className="flex items-center space-x-6">
<button className="relative text-neutral-500 hover:text-neutral-300">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.268 21a2 2 0 0 0 3.464 0"></path><path className="" d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 text-xs rounded-full flex items-center justify-center font-geist tracking-tight text-black" style={{}}>3</span>
</button>
<button className="text-neutral-500 hover:text-neutral-300">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<div className="flex items-center space-x-2">
<div className="text-right hidden sm:block">
<p className="text-sm font-geist tracking-tight" style={{}}>Sarah Chen</p>
<p className="text-xs text-neutral-500 font-geist tracking-tight" style={{}}>Security Lead</p>
</div>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-geist tracking-tight bg-cyan-400 text-black" style={{}}>SC</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">
<section className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 mr-auto ml-auto items-center justify-center">
<div className="text-center lg:text-left max-w-3xl mx-auto space-y-6">
<div className="inline-flex items-center px-3 py-1 rounded-full text-sm mb-4 font-geist tracking-tight bg-indigo-950 text-indigo-300" style={{}}>
<svg className="lucide lucide-trending-up w-4 h-4 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
            94% Security Coverage Across All Pipelines
          </div>
<h1 className="sm:text-5xl font-bricolage tracking-tight text-5xl text-neutral-100" style={{}}>Comprehensive DevSecOps Protection for Modern Teams</h1>
<p className="text-lg font-geist tracking-tight text-neutral-400" style={{}}>Monitor 847 repositories, 15 cloud accounts, and 200+ build workflows with real-time threat detection and automated compliance reporting across your entire software supply chain.</p>
<div className="flex justify-center lg:justify-start space-x-4">
<a className="inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 hover:bg-cyan-300 text-base text-black tracking-tight font-geist bg-gradient-to-br from-teal-400 to-[#310af5] rounded-md pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>
<svg className="lucide lucide-rocket w-4 h-4 mr-2" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              Start Free Trial
            </a>
<a className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 font-geist tracking-tight border-neutral-700 text-neutral-300 hover:bg-neutral-900" href="#" style={{}}>
<svg className="lucide lucide-play w-4 h-4 mr-2" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
              Watch Demo
            </a>
</div>
</div>

<div className="w-full transition-all duration-700 ease-out opacity-100 outline outline-1 outline-white/20 bg-gradient-to-r from-[#000000]/50 to-[#000000]/80 rounded-xl mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 translate-y-0" data-animate="" style={{opacity: `1`, transform: `translateY(0px)`, backgroundColor: `transparent`}}>
<div className="flex mt-6 mr-6 mb-6 ml-6 items-center justify-between">
<h2 className="text-sm text-neutral-50 tracking-tight font-geist mt-0 mr-0 mb-0 ml-0" style={{}}>DEVELOPMENT PIPELINE COVERAGE</h2>
<div className="flex items-center space-x-2 text-xs">
<span className="text-neutral-500 font-geist tracking-tight" style={{}}>Last updated:</span>
<span className="font-geist tracking-tight" style={{}}>2 minutes ago</span>
<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="divide-y divide-white/10 rounded-xl shadow-sm">

<div className="sm:px-6 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center space-x-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-900">
<svg className="lucide lucide-file-code w-5 h-5 text-purple-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path><path className="" d="M14 2v4a2 2 0 0 0 2 2h4"></path><path className="" d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path></svg>
</span>
<div className="flex-1">
<p className="font-geist tracking-tight" style={{}}>Source Code Repositories</p>
<p className="text-sm text-neutral-500 font-geist tracking-tight" style={{}}><span className="font-geist tracking-tight" style={{}}>847</span> active repos across <span className="font-geist tracking-tight" style={{}}>12 organizations</span></p>
<div className="flex items-center mt-1">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="w-full h-full bg-indigo-500"></div>
</div>
<span className="ml-2 text-xs text-neutral-500 font-geist tracking-tight" style={{}}>100% monitored</span>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-geist tracking-tight bg-blue-950 text-blue-300" style={{}}>
<svg className="lucide lucide-alert-triangle w-4 h-4 mr-1" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
                    28
                  </span>
</div>
</div>
<div className="flex items-center space-x-2 mt-3">
<div className="flex text-xs rounded pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<img alt="" className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
<span className="font-geist tracking-tight" style={{}}>GitHub</span>
</div>
<div className="flex text-xs rounded pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<img alt="" className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" />
<span className="font-geist tracking-tight" style={{}}>GitLab</span>
</div>
<div className="flex text-xs rounded pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<img alt="" className="h-4 w-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" />
<span className="font-geist tracking-tight" style={{}}>Bitbucket</span>
</div>
</div>
</div>

<div className="sm:px-6 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center space-x-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-teal-900">
<svg className="lucide lucide-workflow w-5 h-5 text-teal-400" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</span>
<div className="flex-1">
<p className="font-geist tracking-tight" style={{}}>CI/CD Build Workflows</p>
<p className="text-sm text-neutral-500 font-geist tracking-tight" style={{}}><span className="font-geist tracking-tight" style={{}}>203</span> active pipelines, <span className="font-geist tracking-tight" style={{}}>1.2k</span> builds/day</p>
<div className="flex items-center mt-1">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="w-4/5 h-full bg-teal-500"></div>
</div>
<span className="ml-2 text-xs text-neutral-500 font-geist tracking-tight" style={{}}>82% secured</span>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-geist tracking-tight bg-blue-950 text-blue-300" style={{}}>
<svg className="lucide lucide-alert-circle w-4 h-4 mr-1" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                    14
                  </span>
</div>
</div>
<div className="flex items-center space-x-2 mt-3">
<div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 rounded-full flex items-center justify-center bg-white">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>GH</span>
</div>
<span className="font-geist tracking-tight" style={{}}>Actions</span>
</div>
<div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>J</span>
</div>
<span className="font-geist tracking-tight" style={{}}>Jenkins</span>
</div>
<div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 rounded-full flex items-center justify-center bg-indigo-400">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>AZ</span>
</div>
<span className="font-geist tracking-tight" style={{}}>Azure</span>
</div>
</div>
</div>

<div className="sm:px-6 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center space-x-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900">
<svg className="lucide lucide-container w-5 h-5 text-pink-400" data-lucide="container" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path><path className="" d="M10 21.9V14L2.1 9.1"></path><path d="m10 14 11.9-6.9"></path><path d="M14 19.8v-8.1"></path><path d="M18 17.5V9.4"></path></svg>
</span>
<div className="flex-1">
<p className="font-geist tracking-tight" style={{}}>Container Registries</p>
<p className="text-sm text-neutral-500 font-geist tracking-tight" style={{}}><span className="font-geist tracking-tight" style={{}}>1,847</span> images across <span className="font-geist tracking-tight" style={{}}>8 registries</span></p>
<div className="flex items-center mt-1">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="w-full h-full bg-blue-500"></div>
</div>
<span className="ml-2 text-xs text-neutral-500 font-geist tracking-tight" style={{}}>100% scanned</span>
</div>
</div>
<div className="text-right">
<span className="text-sm flex items-center font-geist tracking-tight text-indigo-400" style={{}}>
<svg className="lucide lucide-shield-check w-4 h-4 mr-1" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                    All Clear
                  </span>
</div>
</div>
<div className="flex items-center space-x-2 mt-3">
<div className="flex text-xs rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 rounded flex items-center justify-center bg-indigo-400">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>D</span>
</div>
<span className="font-geist tracking-tight" style={{}}>Docker Hub</span>
</div>
<div className="flex text-xs rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 rounded flex items-center justify-center bg-blue-400">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>Q</span>
</div>
<span className="font-geist tracking-tight" style={{}}>Quay.io</span>
</div>
<div className="flex text-xs rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>E</span>
</div>
<span className="font-geist tracking-tight" style={{}}>ECR</span>
</div>
</div>
</div>

<div className="sm:px-6 rounded-b-xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center space-x-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-900">
<svg className="lucide lucide-cloud-cog w-5 h-5 text-blue-400" data-lucide="cloud-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 19.772-.383.924"></path><path d="m13.148 14.228.383-.923"></path><path d="M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path className="" d="m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 15.852.923-.383"></path><path d="m14.772 18.148.923.383"></path><path className="" d="M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"></path><path d="m9.228 15.852-.923-.383"></path><path d="m9.228 18.148-.923.383"></path></svg>
</span>
<div className="flex-1">
<p className="font-geist tracking-tight" style={{}}>Cloud Infrastructure</p>
<p className="text-sm text-neutral-500 font-geist tracking-tight" style={{}}><span className="font-geist tracking-tight" style={{}}>15</span> cloud accounts, <span className="font-geist tracking-tight" style={{}}>2,847</span> resources</p>
<div className="flex items-center mt-1">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="w-5/6 h-full bg-indigo-500"></div>
</div>
<span className="ml-2 text-xs text-neutral-500 font-geist tracking-tight" style={{}}>89% compliant</span>
</div>
</div>
<div className="text-right">
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-geist tracking-tight bg-cyan-950 text-cyan-300" style={{}}>
<svg className="lucide lucide-info w-4 h-4 mr-1" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    5
                  </span>
</div>
</div>
<div className="flex mt-3 space-x-2 items-center">
<div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>A</span>
</div>
<span className="font-geist tracking-tight" style={{}}>AWS</span>
</div><div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>A</span>
</div>
<span className="font-geist tracking-tight" style={{}}>AWS</span>
</div><div className="flex text-xs border-0 rounded-none pt-1 pr-2 pb-1 pl-2 space-x-1 items-center">
<div className="h-4 w-4 bg-blue-500 rounded flex items-center justify-center">
<span className="text-xs font-geist tracking-tight text-black" style={{}}>A</span>
</div>
<span className="font-geist tracking-tight" style={{}}>AWS</span>
</div>
</div></div></div></div></div></section><section className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="max-w-7xl outline outline-1 outline-white/20 divide-y divide-white/10 bg-gradient-to-b from-gray-900/30 to-[#000000]/60 rounded-xl mr-auto ml-auto shadow-sm">
<h2 className="text-3xl text-neutral-100 tracking-tight font-bricolage text-center mb-12 pt-6 pr-6 pl-6">Key Features</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative pr-6 pb-6 pl-6">
<article className="flex flex-col hover:shadow-lg transition-shadow duration-300 rounded-lg pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex items-center space-x-4 mb-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-900 text-white">
<svg className="lucide lucide-shield-check w-7 h-7" data-lucide="shield-check" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</span>
<h3 className="text-xl font-geist tracking-tight text-neutral-100 font-semibold">Automated Compliance</h3>
</div>
<p className="text-sm text-neutral-400 font-geist tracking-tight mb-6 flex-1">Ensure continuous compliance with automated audits and actionable reporting across your entire software supply chain. Includes compliance dashboards, audit trail, and regulatory templates for seamless governance.</p>
<dl className="flex flex-col space-y-3">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-check-circle w-5 h-5 text-indigo-400 flex-shrink-0" data-lucide="check-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(129, 140, 248)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<dt className="text-indigo-300 text-sm font-geist tracking-tight">24/7 Monitoring</dt>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-indigo-400 flex-shrink-0" data-lucide="bar-chart-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(129, 140, 248)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10"></path><path d="M18 20v-4"></path><path d="M6 20V4"></path></svg>
<dt className="text-indigo-300 text-sm font-geist tracking-tight">Compliance Dashboards</dt>
</div>
</dl>
</article>
<div className="hidden md:block absolute top-0 bottom-0 w-px bg-white/20 left-1/3"></div>
<div className="hidden md:block absolute top-0 bottom-0 w-px bg-white/20 left-2/3"></div>
<article className="flex flex-col hover:shadow-lg transition-shadow duration-300 rounded-lg pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex items-center space-x-4 mb-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-teal-900 text-white">
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</span>
<h3 className="text-xl font-geist tracking-tight text-neutral-100 font-semibold">Real-Time Threat Detection</h3>
</div>
<p className="text-sm text-neutral-400 font-geist tracking-tight mb-6 flex-1">Detect vulnerabilities and threats instantly with intelligent monitoring and alerts integrated directly into your pipelines. Supports custom alert rules and automated incident response workflows to keep your systems safe.</p>
<dl className="flex flex-col space-y-3">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-alert-octagon w-5 h-5 text-teal-400 flex-shrink-0" data-lucide="alert-octagon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(45, 212, 191)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<dt className="text-teal-300 text-sm font-geist tracking-tight">Instant Alerts</dt>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-cpu w-5 h-5 text-teal-400 flex-shrink-0" data-lucide="cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(45, 212, 191)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="14" x="5" y="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 18h2"></path><path d="M12 18h6"></path></svg>
<dt className="text-teal-300 text-sm font-geist tracking-tight">Intelligent Pipeline Integration</dt>
</div>
</dl>
</article>
<article className="flex flex-col hover:shadow-lg transition-shadow duration-300 rounded-lg pt-6 pr-6 pb-6 pl-6 shadow-md">
<div className="flex items-center space-x-4 mb-4">
<span className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-900 text-white">
<svg className="lucide lucide-git-branch w-7 h-7" data-lucide="git-branch" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `28px`, height: `28px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</span>
<h3 className="text-xl font-geist tracking-tight text-neutral-100 font-semibold">Unified Pipeline Management</h3>
</div>
<p className="text-sm text-neutral-400 font-geist tracking-tight mb-6 flex-1">Streamline and secure CI/CD workflows with unified visibility and control across multiple platforms and tools. Features role-based access, audit logs, and pipeline analytics for optimized development lifecycle management.</p>
<dl className="flex flex-col space-y-3">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-layers w-5 h-5 text-blue-400 flex-shrink-0" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(96, 165, 250)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><path d="M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><rect height="8" rx="2" width="8" x="14" y="14"></rect></svg>
<dt className="text-blue-300 text-sm font-geist tracking-tight">Multi-Platform Support</dt>
</div>
<div className="flex items-center space-x-2">
<svg className="lucide lucide-user-check w-5 h-5 text-blue-400 flex-shrink-0" data-lucide="user-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(96, 165, 250)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path className="" d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<dt className="text-blue-300 text-sm font-geist tracking-tight">Role-Based Access Control</dt>
</div>
</dl>
</article>
</div>
</div>
</section></main></div>
    </>
  );
}
