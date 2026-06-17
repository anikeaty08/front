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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-zinc-900 font-semibold tracking-tighter text-lg">TUMY IS</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Case Study</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Outcome</a>
</div>
</div>
</nav>

<header className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
<div className="max-w-3xl mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                UX/UI Design Case Study
            </div>
<h1 className="md:text-6xl leading-[1.1] text-5xl font-medium text-zinc-900 tracking-tight mb-6" style={{}}>Visa Application &amp; Management Platform</h1>
<p className="leading-relaxed text-lg text-zinc-500 max-w-xl">
                Simplifying complex visa processes with a transparent mobile app for travelers and a powerful, flexible dashboard for service providers.
            </p>
</div>

<div className="relative w-full aspect-[16/9] bg-zinc-50 rounded-2xl border border-zinc-200 overflow-hidden flex items-center justify-center shadow-sm">

<div className="[background-size:24px_24px] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div><div className="[background-size:24px_24px] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute right-12 bottom-0 w-2/3 h-3/4 bg-white rounded-t-xl border border-zinc-200 shadow-xl overflow-hidden translate-x-12 md:translate-x-0">
<div className="h-10 border-b border-zinc-100 flex items-center gap-2 px-4">
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-zinc-200"></div>
</div>
<div className="flex h-full">
<div className="w-48 border-r border-zinc-100 p-4 space-y-3 hidden md:block">
<div className="h-2 w-20 bg-zinc-100 rounded"></div>
<div className="h-2 w-24 bg-zinc-100 rounded"></div>
<div className="h-2 w-16 bg-zinc-100 rounded"></div>
</div>
<div className="flex-1 p-6 space-y-4">
<div className="flex justify-between">
<div className="h-6 w-32 bg-zinc-100 rounded"></div>
<div className="h-6 w-20 bg-indigo-50 rounded"></div>
</div>
<div className="grid grid-cols-3 gap-4">
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
<div className="h-24 bg-zinc-50 rounded border border-zinc-100"></div>
</div>
</div>
</div>
</div>

<div className="absolute left-12 bottom-[-40px] w-64 h-[400px] bg-zinc-900 rounded-[2.5rem] p-3 shadow-2xl rotate-[-6deg] transform hover:rotate-0 transition-transform duration-500">
<div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
<div className="bg-indigo-600 h-32 w-full absolute top-0 p-6">
<div className="mt-8 h-6 w-24 bg-white/20 rounded"></div>
</div>
<div className="absolute top-24 inset-x-4 bg-white rounded-xl shadow-lg p-4 space-y-3">
<div className="h-3 w-1/2 bg-zinc-100 rounded"></div>
<div className="h-2 w-full bg-zinc-50 rounded"></div>
<div className="h-2 w-3/4 bg-zinc-50 rounded"></div>
</div>
</div>
</div>
</div>
</header>

<main className="max-w-5xl mx-auto px-6 pb-32 space-y-32">

<section className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-4">01. Overview</h2>
</div>
<div className="md:col-span-8 space-y-6">
<h3 className="text-2xl font-medium text-zinc-900 tracking-tight">Bridging the gap between applicants and providers.</h3>
<p className="text-zinc-500 leading-relaxed">
                    Tumy IS consists of two interconnected systems: a user-friendly mobile application for applicants and a comprehensive web-based admin dashboard for providers. The platform focuses on transparency, flexibility, and efficiency, replacing opaque agent-based workflows with a clear, digital-first approach.
                </p>
<div className="grid grid-cols-2 gap-4 pt-6">
<div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
<span className="block text-xs text-zinc-400 font-medium mb-1">Duration</span>
<span className="text-sm font-medium text-zinc-900">8 Weeks</span>
</div>
<div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
<span className="block text-xs text-zinc-400 font-medium mb-1">Tools</span>
<span className="text-sm font-medium text-zinc-900">Figma, Linear, Protopie</span>
</div>
</div>
</div><div className="md:col-span-8 space-y-6">
<h3 className="text-2xl font-medium text-zinc-900 tracking-tight">Bridging the gap between applicants and providers.</h3>
<p className="text-zinc-500 leading-relaxed">
                    Tumy IS consists of two interconnected systems: a user-friendly mobile application for applicants and a comprehensive web-based admin dashboard for providers. The platform focuses on transparency, flexibility, and efficiency, replacing opaque agent-based workflows with a clear, digital-first approach.
                </p>
<div className="grid grid-cols-2 gap-4 pt-6">
<div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
<span className="block text-xs font-medium text-zinc-400 mb-1">Duration</span>
<span className="text-sm font-medium text-zinc-900">8 Weeks</span>
</div>
<div className="p-4 rounded-lg bg-zinc-50 border border-zinc-100">
<span className="block text-xs text-zinc-400 font-medium mb-1">Tools</span>
<span className="text-sm font-medium text-zinc-900">Figma, Linear, Protopie</span>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200">
<div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:cloud-lightning" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"></path><path d="m13 12l-3 5h4l-3 5"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-3">The Problem</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                    Applying for a visa is traditionally stressful. Users face hidden costs, unclear requirements, and dependency on agents. Providers struggle with manual data entry and rigid legacy systems that can't handle complex pricing models.
                </p>

<div className="flex items-center gap-2 p-3 rounded bg-white border border-zinc-100">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="text-xs text-zinc-400">Confusion &amp; Complexity</span>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-900 text-white">
<div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:target" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-3">The Goal</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    To design a unified ecosystem that creates transparency for users through clear pricing and requirements, while giving admins granular control over visa configurations without needing code.
                </p>

<div className="flex items-center gap-2 p-3 rounded bg-zinc-800 border border-zinc-700">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-zinc-300">Transparency &amp; Efficiency</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-100 pt-12">
<div className="md:col-span-4">
<h2 className="text-sm font-medium text-zinc-900 uppercase tracking-widest">04. My Role</h2>
</div>
<div className="md:col-span-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-600 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-600">User Research &amp; Analysis</span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-600 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-600">Information Architecture</span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-600 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-600">UI/Visual Design (App &amp; Web)</span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-indigo-600 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-zinc-600">Design System Creation</span>
</div>
</div>
</div>
</section>

<section className="">
<div className="mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-4">Understanding the Users</h2>
<p className="text-zinc-500 max-w-2xl">Research revealed a massive disconnect: Applicants want speed and clarity, while providers need flexibility and control. </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

<div className="p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
<span className="font-medium text-zinc-500">A</span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Ahmed (The Applicant)</h4>
<p className="text-xs text-zinc-500">Business Traveler</p>
</div>
</div>
<p className="text-sm text-zinc-500 mb-4">"I just want to know exactly how much it costs and what papers I need before I start. I hate hidden surprises."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-50 text-xs text-zinc-600 rounded border border-zinc-100">Speed</span>
<span className="px-2 py-1 bg-zinc-50 text-xs text-zinc-600 rounded border border-zinc-100">Clarity</span>
</div>
</div>

<div className="p-6 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center">
<span className="font-medium text-zinc-500">S</span>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-900">Sara (The Admin)</h4>
<p className="text-xs text-zinc-500">Visa Operations Manager</p>
</div>
</div>
<p className="text-sm text-zinc-500 mb-4">"Visa rules change weekly. I need a system where I can update requirements myself without calling a developer."</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-zinc-50 text-xs text-zinc-600 rounded border border-zinc-100">Flexibility</span>
<span className="px-2 py-1 bg-zinc-50 text-xs text-zinc-600 rounded border border-zinc-100">Control</span>
</div>
</div>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
<h3 className="text-sm font-medium text-zinc-900 mb-6">Competitive Landscape</h3>
<div className="space-y-4">
<div className="grid grid-cols-4 gap-4 text-xs font-medium text-zinc-400 border-b border-zinc-200 pb-2">
<div className="col-span-1">Feature</div>
<div className="text-center">Traditional Agencies</div>
<div className="text-center">Gov Portals</div>
<div className="text-center text-indigo-600">Tumy IS</div>
</div>
<div className="grid grid-cols-4 gap-4 items-center">
<div className="text-sm font-medium text-zinc-700">Mobile First</div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:minus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</div>
<div className="grid grid-cols-4 gap-4 items-center">
<div className="text-sm font-medium text-zinc-700">Transparent Pricing</div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</div>
<div className="grid grid-cols-4 gap-4 items-center">
<div className="text-sm font-medium text-zinc-700">Dynamic Forms</div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-zinc-300 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div className="flex justify-center"><svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</div>
</div>
</div>
</section>

<section>
<h2 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-8">User Journey &amp; Flow</h2>
<div className="relative py-12 px-6 bg-zinc-50 border border-zinc-200 rounded-2xl overflow-hidden">

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-zinc-200 -translate-y-1/2 hidden md:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<h4 className="text-sm font-medium text-zinc-900">Discovery</h4>
<p className="text-xs text-zinc-500 mt-2">Views visa types &amp; pricing clearly</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:file-text" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-zinc-900">Details</h4>
<p className="text-xs text-zinc-500 mt-2">Checks requirements &amp; time</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h4 className="text-sm font-medium text-zinc-900">Application</h4>
<p className="text-xs text-zinc-500 mt-2">Fills dynamic form &amp; uploads</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:credit-card" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h4 className="text-sm font-medium text-zinc-900">Payment</h4>
<p className="text-xs text-zinc-500 mt-2">Secure checkout via gateway</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-12 h-12 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center mb-4 group-hover:border-indigo-400 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-zinc-900">Tracking</h4>
<p className="text-xs text-zinc-500 mt-2">Real-time status updates</p>
</div>
</div>
</div>
</section>

<section>
<div className="mb-12">
<h2 className="text-2xl font-medium text-zinc-900 tracking-tight mb-4">The Solution: Visual Design</h2>
<p className="text-zinc-500 max-w-2xl">Clean, distraction-free interfaces focusing on data legibility. We used a card-based layout to segment complex information.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="bg-zinc-100 rounded-[2rem] p-3 border border-zinc-200">
<div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-[500px] flex flex-col">

<div className="bg-indigo-600 p-6 pb-8">
<div className="flex justify-between items-center text-white mb-6">
<span className="text-sm font-medium">Hello, Ahmed</span>
<div className="w-8 h-8 rounded-full bg-white/20"></div>
</div>
<h3 className="text-xl font-medium text-white leading-tight">Where would youlike to go?</h3>
</div>

<div className="flex-1 -mt-4 bg-white rounded-t-2xl p-5 space-y-4 overflow-y-auto hide-scrollbar">
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 shadow-sm hover:border-indigo-100">
<div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-bold">UAE</div>
<div>
<div className="text-sm font-medium text-zinc-900">United Arab Emirates</div>
<div className="text-xs text-zinc-400">Tourist &amp; Business</div>
</div>
<svg aria-hidden="true" className="iconify ml-auto text-zinc-300 iconify--lucide" data-icon="lucide:chevron-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-100 shadow-sm">
<div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center text-red-600 text-xs font-bold">TR</div>
<div>
<div className="text-sm font-medium text-zinc-900">Turkey</div>
<div className="text-xs text-zinc-400">E-Visa Available</div>
</div>
<svg aria-hidden="true" className="iconify ml-auto text-zinc-300 iconify--lucide" data-icon="lucide:chevron-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="text-center mt-3 text-xs text-zinc-400 font-medium">Visa Discovery</div>
</div>

<div className="bg-zinc-100 rounded-[2rem] p-3 border border-zinc-200">
<div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-[500px] flex flex-col relative">
<div className="p-5 border-b border-zinc-50 flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:arrow-left" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-medium text-zinc-900">UAE Tourist Visa</span>
</div>
<div className="p-5 space-y-6 overflow-y-auto hide-scrollbar">
<div className="flex justify-between items-end">
<div className="text-2xl font-medium text-zinc-900">$120</div>
<div className="text-xs text-zinc-500">Per applicant</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-3 bg-zinc-50 rounded-lg">
<div className="text-[10px] uppercase text-zinc-400 tracking-wider mb-1">Process</div>
<div className="text-xs font-medium text-zinc-900">2-3 Days</div>
</div>
<div className="p-3 bg-zinc-50 rounded-lg">
<div className="text-[10px] uppercase text-zinc-400 tracking-wider mb-1">Stay</div>
<div className="text-xs font-medium text-zinc-900">30 Days</div>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 mb-3">Required Documents</h4>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Passport Copy
                                    </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Personal Photo
                                    </li>
</ul>
</div>
</div>
<div className="absolute bottom-0 w-full p-5 bg-white border-t border-zinc-100">
<button className="w-full py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium">Apply Now</button>
</div>
</div>
<div className="text-center mt-3 text-xs text-zinc-400 font-medium">Visa Details</div>
</div>

<div className="bg-zinc-100 rounded-[2rem] p-3 border border-zinc-200">
<div className="bg-white rounded-[1.5rem] overflow-hidden shadow-sm h-[500px] flex flex-col">
<div className="p-5 border-b border-zinc-50 flex items-center justify-between">
<span className="text-sm font-medium text-zinc-900">Documents</span>
<span className="text-xs text-zinc-400">Step 2/3</span>
</div>
<div className="p-5 space-y-4">
<div className="border border-dashed border-zinc-300 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-zinc-50">
<svg aria-hidden="true" className="iconify text-zinc-400 mb-2 iconify--lucide" data-icon="lucide:upload-cloud" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
<span className="text-xs font-medium text-zinc-900">Passport Front</span>
<span className="text-[10px] text-zinc-400 mt-1">JPEG or PNG, max 5MB</span>
</div>
<div className="border border-zinc-100 rounded-xl p-3 flex items-center gap-3">
<div className="w-10 h-10 rounded bg-indigo-50 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-icon="lucide:image" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-xs font-medium text-zinc-900">photo_final.jpg</div>
<div className="text-[10px] text-zinc-400">1.2 MB • Uploaded</div>
</div>
<svg aria-hidden="true" className="iconify text-zinc-400 iconify--lucide" data-icon="lucide:trash-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6m4-6v6m5-11v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="text-center mt-3 text-xs text-zinc-400 font-medium">Document Upload</div>
</div>
</div>

<div className="border border-zinc-200 rounded-xl overflow-hidden shadow-lg bg-white">
<div className="bg-zinc-50 border-b border-zinc-200 p-3 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="flex h-[400px]">

<div className="w-64 bg-zinc-50 border-r border-zinc-200 p-4 hidden md:block">
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white border border-zinc-200 shadow-sm rounded-lg text-sm font-medium text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-dashboard" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
                                Dashboard
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 rounded-lg hover:bg-zinc-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:files" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706zM5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></g></svg>
                                Applications
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-500 rounded-lg hover:bg-zinc-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                                Visa Settings
                            </div>
</div>
</div>

<div className="flex-1 p-8 bg-white overflow-y-auto">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg font-medium text-zinc-900">Visa Configurations</h3>
<button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-lg">+ Add New Visa</button>
</div>

<div className="border border-zinc-200 rounded-lg overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-50 border-b border-zinc-200">
<tr>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Visa Type</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Price</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-zinc-500 text-xs uppercase tracking-wider">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">UAE 30 Days Tourist</td>
<td className="px-6 py-4 text-zinc-500">$120.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
<td className="px-6 py-4 text-zinc-400">Edit</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Turkey E-Visa</td>
<td className="px-6 py-4 text-zinc-500">$60.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Active</span></td>
<td className="px-6 py-4 text-zinc-400">Edit</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-zinc-900">Schengen Business</td>
<td className="px-6 py-4 text-zinc-500">$180.00</td>
<td className="px-6 py-4"><span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">Draft</span></td>
<td className="px-6 py-4 text-zinc-400">Edit</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div className="text-center mt-3 text-xs text-zinc-400 font-medium">Admin Dashboard - Visa Management</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h2 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-6">Usability Testing</h2>
<div className="space-y-4">
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-sm font-medium text-zinc-900">Stepper Flow Success</h4>
</div>
<p className="text-xs text-zinc-500">Users found the step-by-step wizard reduced anxiety compared to long single-page forms.</p>
</div>
<div className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="text-sm font-medium text-zinc-900">Admin Efficiency</h4>
</div>
<p className="text-xs text-zinc-500">Admins were able to create a new visa type in under 2 minutes using the new builder.</p>
</div>
</div>
</div>
<div>
<h2 className="text-sm font-medium text-zinc-900 uppercase tracking-widest mb-6">Style Guide</h2>
<div className="space-y-6">
<div>
<span className="text-xs text-zinc-400 block mb-2">Colors</span>
<div className="flex gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-600 shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-zinc-900 shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-zinc-500 shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-zinc-100 border border-zinc-200"></div>
</div>
</div>
<div>
<span className="text-xs text-zinc-400 block mb-2">Typography (Inter)</span>
<div className="space-y-1">
<div className="text-2xl font-semibold text-zinc-900 tracking-tight">Aa Headings</div>
<div className="text-base font-normal text-zinc-600">Aa Body text for readability</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-100 pt-20 text-center">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight mb-6">Final Outcome</h2>
<p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-12">
                Tumy IS successfully transformed a manual, error-prone process into a streamlined digital experience. The platform allows admins to launch new visa products in minutes, while giving travelers the transparency and confidence they need.
            </p>
<div className="flex justify-center gap-6">
<a className="px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors" href="#">View Prototype</a>
<a className="px-6 py-3 bg-white border border-zinc-200 text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors" href="#">Contact Me</a>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 py-12 bg-zinc-50">
<div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
<div className="text-zinc-400 text-xs">© 2023 Tumy IS Case Study</div>
<div className="flex gap-4">
<svg aria-hidden="true" className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
<svg aria-hidden="true" className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-zinc-400 hover:text-zinc-900 cursor-pointer transition-colors iconify--lucide" data-icon="lucide:dribbble" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94m19.5 1.9c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></g></svg>
</div>
</div>
</footer>

    </>
  );
}
