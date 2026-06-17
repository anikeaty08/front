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
      

<nav className="fixed w-full top-0 z-50 bg-[#FDF2F8]/80 backdrop-blur-md border-b border-pink-200">
<div className="md:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-3 cursor-pointer group items-center">

<div className="group-hover:text-pink-600 transition-colors duration-300 text-neutral-900 w-10 h-10 relative">
<svg className="w-[40px] h-[40px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" style={{width: '40px', height: '40px', color: 'rgb(219, 39, 119)'}} viewbox="0 0 100 100">

<path className="" d="M42 22 C42 16, 50 16, 50 22"></path>

<path className="" d="M50 22 C52 22, 54 24, 80 26 C92 28, 90 55, 88 60 L84 80 L72 80 L72 70 L54 70 L54 80 L42 80 L38 58 C30 60, 10 55, 12 38 C14 28, 30 24, 34 26 L42 22"></path>

<path className="" d="M88 56 Q 98 52 96 62 Q 94 66 90 62"></path>

<circle className="" cx="34" cy="36" fill="currentColor" r="3" stroke="none"></circle>

<path className="" d="M18 38 Q 22 36 24 40" strokeWidth="4"></path>
</svg>
</div>
<span className="serif-font text-3xl text-neutral-900 tracking-tight">hippocampus</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#">Memory Graph</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Integrations</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Enterprise</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-neutral-900 hover:text-white transition-all duration-300 text-sm font-medium text-neutral-900 border-neutral-900 border rounded-full pt-2 pr-5 pb-2 pl-5 shadow-sm cursor-pointer" onclick="window.location.href='https://calendly.com/utkarshtyagi/30-min-chat'" role="button">
                    Connect Context
                </button>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-32 pb-24 relative items-center">
<div className="md:px-12 grid lg:grid-cols-2 gap-16 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">

<div className="space-y-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-300 bg-white/50 shadow-sm">
<span className="w-2 h-2 rounded-full border border-pink-500 bg-pink-100 animate-pulse"></span>
<span className="text-xs font-medium text-pink-900 uppercase tracking-wide">Business Context Layer</span>
</div>
<h1 className="md:text-8xl leading-[0.9] serif-font text-6xl text-neutral-900 tracking-tight" style={{}}>Your company is a <br/> <span className="relative inline-block">
<span className="z-10 italic relative" style={{}}>living entity.</span>
<svg className="absolute bottom-1 left-0 w-full h-3 text-pink-300 -z-10 opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q50,10 100,5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span> <br/> Give it knowledge.</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-600 max-w-lg" style={{}}>Cursor made developers 10x. hippocampus brings that power to all teams. Centralize tribal knowledge and execute tasks with accurate business context.</p>
<div className="flex flex-col sm:flex-row pt-4 gap-x-4 gap-y-4">
<button className="hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300 flex gap-3 group text-lg font-medium text-white bg-neutral-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-sm gap-x-3 gap-y-3 items-center justify-center cursor-pointer" onclick="window.location.href='https://calendly.com/utkarshtyagi/30-min-chat'" role="button">
                        Start capturing context
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="relative">

<svg className="absolute -top-10 -right-10 w-64 h-64 text-pink-200" fill="none" stroke="currentColor" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="4 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="30" strokeWidth="0.5"></circle>
<line strokeWidth="0.5" x1="50" x2="90" y1="50" y2="20"></line>
<line strokeWidth="0.5" x1="50" x2="10" y1="50" y2="80"></line>
</svg>

<div className="relative bg-white border border-pink-200 rounded-[2rem] p-8 shadow-sm rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex justify-between items-start mb-8 border-b border-pink-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-neutral-900">
<svg className="lucide lucide-network w-5 h-5" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="">
<h3 className="font-medium text-neutral-900 text-sm">hippo-campus Memory Graph</h3>
<p className="text-xs text-neutral-500">Context Source: Hybrid</p>
</div>
</div>
<span className="px-2 py-0.5 rounded-full border border-pink-200 text-pink-600 text-[10px] font-bold uppercase tracking-wider bg-pink-50">Active</span>
</div>
<div className="space-y-4">

<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex-shrink-0 flex items-center justify-center text-xs font-bold">PM</div>
<div className="space-y-2 w-full">
<div className="bg-neutral-50 p-3 rounded-xl rounded-tl-none border border-neutral-200">
<p className="text-sm text-neutral-700">Draft the Q3 roadmap update based on last week's churn analysis and the new features discussed in #engineering.</p>
</div>
</div>
</div>

<div className="flex items-center gap-2 pl-12 py-2">
<div className="h-px bg-pink-200 flex-1"></div>
<span className="text-[10px] text-pink-500 uppercase font-bold tracking-widest bg-pink-50 px-2 rounded-full border border-pink-100">Connecting Dots</span>
<div className="h-px bg-pink-200 flex-1"></div>
</div>

<div className="grid grid-cols-3 gap-2 pl-12">
<div className="bg-white border border-pink-200 p-2 rounded-lg flex flex-col items-center gap-1 text-center shadow-sm">
<svg className="lucide lucide-slack w-3 h-3 text-neutral-500" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
<span className="text-[10px] font-medium text-neutral-900">#engineering</span>
</div>
<div className="bg-white border border-pink-200 p-2 rounded-lg flex flex-col items-center gap-1 text-center shadow-sm">
<svg className="lucide lucide-file-text w-3 h-3 text-neutral-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-[10px] font-medium text-neutral-900">Churn.pdf</span>
</div>
<div className="bg-white border border-pink-200 p-2 rounded-lg flex flex-col items-center gap-1 text-center shadow-sm">
<svg className="lucide lucide-trello w-3 h-3 text-neutral-500" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
<span className="text-[10px] font-medium text-neutral-900">Jira Ticket-204</span>
</div>
</div>

<div className="flex gap-4 items-start pl-12">
<div className="bg-white border border-neutral-200 text-neutral-900 p-4 rounded-xl w-full shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-neutral-900"></div>
<h4 className="text-xs font-bold mb-1">Q3 Roadmap Draft Generated</h4>
<p className="text-xs text-neutral-500">Prioritizing "Sticky Sessions" to reduce churn (referenced in Churn.pdf). Backend resources allocated per thread in #engineering...</p>
</div>
</div>
</div>

<div className="absolute -right-4 bottom-12 bg-white px-4 py-3 rounded-xl border border-pink-200 shadow-sm flex items-center gap-3 transform rotate-3">
<div className="w-8 h-8 rounded-full border border-pink-100 flex items-center justify-center">
<svg className="lucide lucide-brain-circuit w-4 h-4 text-pink-500" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<div className="text-xs font-medium">
<div className="text-neutral-900">Context Index</div>
<div className="text-neutral-400">Synced 2ms ago</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden pt-32 pb-32 relative">
<div className="md:px-12 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-5xl md:text-6xl mb-6 serif-font tracking-tight text-neutral-900">Level the <span className="italic text-pink-600">playing field</span>.</h2>
<p className="text-xl text-neutral-500 font-light">Transform from individual productivity to a company-wide "subconscious".</p>
</div>

<div className="flex mb-12 justify-center">
<div className="inline-flex bg-white border-pink-200 border rounded-full pt-1 pr-1 pb-1 pl-1 shadow-sm">
<button className="px-6 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium shadow-sm">Memory Graph</button>
<button className="hover:text-neutral-900 transition-colors text-sm font-medium text-neutral-500 rounded-full pt-2 pr-6 pb-2 pl-6" style={{}}>Integrations</button>
<button className="px-6 py-2 rounded-full text-neutral-500 hover:text-neutral-900 text-sm font-medium transition-colors">Workflows</button>
</div>
</div>

<div className="outline-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden bg-white">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h3 className="text-4xl md:text-5xl serif-font leading-none text-neutral-900">Always-on context. Zero friction.</h3>
<p className="leading-relaxed text-lg font-medium text-neutral-500">hippocampus connects to Confluence, Jira, and Slack, Drive to build a persistent memory graph. No more spending hours reviewing materials or context switching.</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-pink-50 border border-pink-100 rounded-full text-xs font-bold text-pink-700">Faster PRDs</span>
<span className="px-3 py-1 bg-pink-50 border border-pink-100 rounded-full text-xs font-bold text-pink-700">Unblocked Comms</span>
<span className="px-3 py-1 bg-pink-50 border border-pink-100 rounded-full text-xs font-bold text-pink-700">Persistent Memory</span>
</div>
</div>

<div className="bg-[#FDF2F8] border border-pink-200 rounded-[2rem] p-6 shadow-sm transform rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full border border-neutral-200 bg-white text-neutral-900 flex items-center justify-center">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="">
<div className="font-bold text-neutral-900">Knowledge Synthesis</div>
<div className="text-xs text-neutral-500">8 Sources Connected</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white border border-pink-100 rounded-lg">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-[#E6F0FF] rounded text-[#0052CC]"><svg className="lucide lucide-trello w-3 h-3" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg></div>
<span className="text-xs font-medium text-neutral-600">Jira Tickets</span>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Indexed</span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-pink-100 rounded-lg">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-[#E1F7F4] rounded text-[#4A154B]"><svg className="lucide lucide-slack w-3 h-3" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg></div>
<span className="text-xs font-medium text-neutral-600">Slack Threads</span>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">Live Sync</span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-neutral-200 rounded-lg border-l-4 border-l-neutral-900">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-[#FFEEEE] rounded text-[#E11D48]"><svg className="lucide lucide-book w-3 h-3" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg></div>
<span className="text-xs font-medium text-neutral-900">Tribal Knowledge</span>
</div>
<span className="text-[10px] text-neutral-900 font-bold">Synthesizing...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-pink-200 border-t pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-20">
<h2 className="md:text-6xl serif-font text-5xl text-neutral-900 tracking-tight mb-6">The <span className="underline decoration-wavy decoration-pink-300">CoS</span> you never had.</h2>
<p className="text-lg text-neutral-500 max-w-2xl mr-auto ml-auto">Employees lack centralized access to tribal knowledge. hippocampus bridges the gap between scattered tools and actionable execution.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="outline-card p-8 rounded-[2rem] hover:-translate-y-1 transition-all duration-300 bg-white">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 bg-[#FDF2F8]">
<svg className="lucide lucide-user-plus w-5 h-5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="">
<div className="font-bold text-neutral-900">Onboarding</div>
<div className="text-xs text-neutral-400 font-medium">Instant Ramp-up</div>
</div>
</div>
<p className="leading-relaxed text-sm text-neutral-600 mb-6">New employees struggle with context collection. hippocampus gives them the entire company history and reasoning from day one.</p>
</div>

<div className="bg-neutral-900 p-8 rounded-[2rem] border border-neutral-900 shadow-xl transform md:-translate-y-4 relative overflow-hidden">
<div className="flex items-center gap-4 mb-6 relative z-10">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-neutral-900">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="font-bold text-white">Attrition Insurance</div>
<div className="text-xs text-pink-300 font-medium">Retain Knowledge</div>
</div>
</div>
<p className="leading-relaxed z-10 text-sm text-white/90 mb-6 relative">When key people leave, their knowledge usually leaves with them. hippocampus records and synthesizes everything, securing your operational IP.</p>
</div>

<div className="outline-card p-8 rounded-[2rem] hover:-translate-y-1 transition-all duration-300 bg-white">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-900 bg-[#FDF2F8]">
<svg className="lucide lucide-arrow-left-right w-5 h-5" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
<div>
<div className="font-bold text-neutral-900">Handoffs</div>
<div className="text-xs text-neutral-400 font-medium">Sales to CS</div>
</div>
</div>
<p className="leading-relaxed text-sm text-neutral-600 mb-6">Teams get bombarded with repeated questions. hippocampus ensures Sales context flows perfectly to CS without dropping the ball.</p>
</div>
</div>
</div>
</section>

<section className="border-pink-200 border-t pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16 space-y-4">
<h2 className="text-5xl md:text-6xl text-neutral-900 serif-font tracking-tight">Simple, seat-based <span className="italic text-pink-600">pricing</span>.</h2>
<p className="text-lg font-light text-neutral-500">Secure enterprise context deployment for all teams. Ready to use in 1 week.</p>

</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="outline-card p-8 rounded-[2rem] bg-white">
<div className="mb-6">
<h3 className="serif-font text-2xl text-neutral-900">Teams</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-neutral-900">$15</span>
<span className="text-sm text-neutral-500 ml-2">/user/mo</span>
</div>
<p className="mt-2 text-xs text-neutral-500">Perfect for SMBs &amp; Startups.</p>
</div>
<a className="block hover:border-neutral-900 transition-colors text-sm font-medium text-neutral-900 text-center bg-transparent w-full border-neutral-200 border rounded-xl mb-8 pt-3 pr-4 pb-3 pl-4" href="https://calendly.com/utkarshtyagi/30-min-chat">Start free trial</a>
<ul className="space-y-4 text-xs text-neutral-600 font-medium">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center" style={{}}><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 Connectors</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Basic Memory Graph</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hosted SaaS</li>
</ul>
</div>

<div className="p-8 rounded-[2rem] border border-neutral-900 bg-white shadow-lg relative transform md:-translate-y-4">
<div className="absolute top-0 right-0 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Recommended</div>
<div className="mb-6">
<h3 className="serif-font text-2xl text-neutral-900">Usage + Seat</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-neutral-900">Hybrid</span>
</div>
<p className="mt-2 text-xs text-neutral-500">For heavy context dependency.</p>
</div>
<a className="block hover:opacity-90 transition-opacity text-sm font-bold text-white text-center bg-neutral-900 w-full border-neutral-900 border rounded-xl mb-8 pt-3 pr-4 pb-3 pl-4" href="https://calendly.com/utkarshtyagi/30-min-chat">Talk to us</a>
<ul className="space-y-4 text-xs text-neutral-600 font-medium">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unlimited Connectors</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced Usage Limits</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> API Access</li>
</ul>
</div>

<div className="outline-card p-8 rounded-[2rem] bg-white">
<div className="mb-6">
<h3 className="serif-font text-2xl text-neutral-900">Enterprise</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-neutral-900">Custom</span>
</div>
<p className="mt-2 text-xs text-neutral-500">Security-first deployment.</p>
</div>
<a className="block hover:border-neutral-900 transition-colors text-sm font-medium text-neutral-900 text-center bg-transparent w-full border-neutral-200 border rounded-xl mb-8 pt-3 pr-4 pb-3 pl-4" href="https://calendly.com/utkarshtyagi/30-min-chat">Talk to us</a>
<ul className="space-y-4 text-xs text-neutral-600 font-medium">
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Private VPC / On-Premise</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Audit Logs &amp; SSO</li>
<li className="flex items-center gap-3"><svg className="lucide lucide-check w-4 h-4 text-pink-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Dedicated Success</li>
</ul>
</div>
</div>
</div>
</section>

<section className="flex flex-col overflow-hidden text-center border-pink-200 border-t pt-32 pb-32 relative items-center justify-center">
<div className="max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6">
<div className="w-20 h-20 mx-auto mb-8 text-neutral-900">
<svg className="w-[80px] h-[80px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" style={{width: '80px', height: '80px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 100 100">
<path d="M42 22 C42 16, 50 16, 50 22"></path>
<path className="" d="M50 22 C52 22, 54 24, 80 26 C92 28, 90 55, 88 60 L84 80 L72 80 L72 70 L54 70 L54 80 L42 80 L38 58 C30 60, 10 55, 12 38 C14 28, 30 24, 34 26 L42 22"></path>
<path className="" d="M88 56 Q 98 52 96 62 Q 94 66 90 62"></path>
<circle cx="34" cy="36" fill="currentColor" r="3" stroke="none"></circle>
<path d="M18 38 Q 22 36 24 40" strokeWidth="4"></path>
</svg>
</div>
<h2 className="text-6xl md:text-8xl text-neutral-900 mb-8 serif-font tracking-tight leading-[0.9]">
                Give your team a 
                <span className="text-pink-300 italic text-5xl md:text-7xl">shared brain.</span>
</h2>
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
<button className="hover:bg-neutral-800 hover:-translate-y-1 transition-all duration-300 text-xl font-medium text-white bg-neutral-900 rounded-full pt-5 pr-10 pb-5 pl-10 shadow-sm cursor-pointer" onclick="window.location.href='https://calendly.com/utkarshtyagi/30-min-chat'" role="button">Activate hippocampus</button>
</div>
</div>
</section>

<footer className="overflow-hidden bg-white border-pink-200 rounded-t-[3rem] border-t pt-24 pb-12 relative">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-4 gap-12 mb-24 text-sm">
<div className="space-y-4">
<h5 className="font-bold text-neutral-900 uppercase tracking-wider mb-4 text-xs">Platform</h5>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Context Graph</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Security</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Integrations</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-neutral-900 uppercase tracking-wider mb-4 text-xs">Resources</h5>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Blog</a>
<a className="block hover:text-neutral-900 transition-colors text-neutral-500" href="#">Thesis</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-neutral-900 uppercase tracking-wider mb-4 text-xs">Company</h5>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About</a>
<a className="block text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
<div className="space-y-4">
<h5 className="font-bold text-neutral-900 uppercase tracking-wider mb-4 text-xs">Social</h5>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-900 transition-all" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 border-neutral-100 border-t pt-12 gap-x-8 gap-y-8 items-end justify-between">
<div className="flex-1 flex items-center gap-4">
<div className="w-16 h-16 text-neutral-900">
<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" viewbox="0 0 100 100">
<path d="M42 22 C42 16, 50 16, 50 22"></path>
<path d="M50 22 C52 22, 54 24, 80 26 C92 28, 90 55, 88 60 L84 80 L72 80 L72 70 L54 70 L54 80 L42 80 L38 58 C30 60, 10 55, 12 38 C14 28, 30 24, 34 26 L42 22"></path>
<path d="M88 56 Q 98 52 96 62 Q 94 66 90 62"></path>
<circle cx="34" cy="36" fill="currentColor" r="3" stroke="none"></circle>
<path d="M18 38 Q 22 36 24 40" strokeWidth="4"></path>
</svg>
</div>
<span className="text-[clamp(2.5rem,6vw,5rem)] leading-none serif-font block font-medium text-neutral-900 tracking-tighter">hippocampus</span>
</div>
<div className="flex items-center gap-2 mb-4 md:mb-6">
<div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></div>
<span className="text-xs text-neutral-400">Memory Graph Active</span>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between text-xs text-neutral-400 mt-8">
<p className="">© 2025 hippocampus Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
