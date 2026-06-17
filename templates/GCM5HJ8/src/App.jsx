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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // App State
      const state = {
        seeded: false,
        currentView: 'login',
        base: null,
        templateName: null,
        project: {
          name: '',
          start: '',
          end: '',
          team: [],
          desc: '',
          tags: [],
          visibility: 'Private',
        },
        tasks: [],
        playbooks: [],
        shared: [],
        versions: [],
        orgUsers: [
          { name: 'Alex Chen', email: 'alex@deepfunding.org', role: 'Org Admin' },
          { name: 'Taylor Lee', email: 'taylor@deepfunding.org', role: 'Member' },
        ],
        orgTemplates: [
          { name: 'RFP 12 steps', steps: 12, type: 'ops', desc: 'From scope to submission.' },
          { name: 'Budget 10', steps: 10, type: 'finance', desc: 'Forecast to close.' },
        ],
        templateLibrary: [
          { name: 'Procurement Intake', steps: 7, type: 'ops', desc: 'Standardize requests to approvals.' },
          { name: 'Hackathon 8', steps: 8, type: 'events', desc: 'Plan and run a hackathon.' },
          { name: 'Community Grant Review', steps: 9, type: 'finance', desc: 'Review, score, fund, report.' },
          { name: 'Budget 10', steps: 10, type: 'finance', desc: 'Forecast to reporting.' },
          { name: 'Onboarding Flow', steps: 6, type: 'ops', desc: 'From offer to ramp-up.' },
          { name: 'RFP 12 steps', steps: 12, type: 'ops', desc: 'End-to-end RFP flow.' },
        ],
        publicGallery: [
          {
            id: 'pub-1',
            title: 'Open-Source Grant Cycle',
            org: 'Cardano Ops',
            owner: 'Morgan Wu',
            tags: ['proposal','grants'],
            desc: 'Transparent grant lifecycle with reviews and post-award reporting.',
            type: 'finance',
            duration: 'long',
            tasks: [
              { title: 'Call for proposals', assignees: ['PMO'], start: '2025-01-05', end: '2025-01-10' },
              { title: 'Reviewer signup', assignees: ['Community'], start: '2025-01-11', end: '2025-01-15' },
            ],
          },
          {
            id: 'pub-2',
            title: 'University Hack Night',
            org: 'Dev Guild',
            owner: 'Avery Kim',
            tags: ['hackathon','events'],
            desc: 'One-evening hack focused on quick wins.',
            type: 'events',
            duration: 'short',
            tasks: [
              { title: 'Book venue', assignees: ['Ops'], start: '2025-02-01', end: '2025-02-01' },
              { title: 'Promote event', assignees: ['Marketing'], start: '2025-02-02', end: '2025-02-07' },
            ],
          },
          {
            id: 'pub-3',
            title: 'Vendor Procurement',
            org: 'Ops Collective',
            owner: 'Jordan Park',
            tags: ['procurement','legal'],
            desc: 'Intake, shortlist, negotiate, sign.',
            type: 'ops',
            duration: 'medium',
            tasks: [
              { title: 'Intake request', assignees: ['Requester'], start: '2025-03-01', end: '2025-03-01' },
              { title: 'Legal review', assignees: ['Legal'], start: '2025-03-05', end: '2025-03-08' },
            ],
          }
        ],
        activePB: null,
        autosaveTimers: {},
      };

      // Utilities
      function $(sel, root = document) { return root.querySelector(sel); }
      function $all(sel, root = document) { return Array.from(root.querySelectorAll(sel)); }
      function show(el) { el.classList.remove('hidden'); }
      function hide(el) { el.classList.add('hidden'); }
      function reicon() { lucide.createIcons({ attrs: { 'stroke-width': 1.5 } }); }
      function toast(msg) {
        const t = document.createElement('div');
        t.setAttribute('role','status');
        t.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg text-sm bg-gray-900 text-white shadow-lg';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(()
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="hidden border-b border-gray-200/80 backdrop-blur bg-white/75 sticky top-0 z-40" id="topnav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#8338EC]/10 text-[#8338EC] ring-1 ring-[#8338EC]/20">
<span className="font-semibold tracking-tight text-base">DF</span>
</div>
<div className="flex flex-col">
<div className="text-sm text-gray-900 font-medium tracking-tight">Playbook App</div>
<div className="text-[11px] text-gray-500">Operations Cubix</div>
</div>
<span className="mx-3 h-6 w-px bg-gray-200"></span>

<div className="hidden md:flex items-center relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input aria-label="Search" className="w-72 rounded-lg pl-9 pr-3 py-2 bg-white border border-gray-200 text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC] transition" id="globalSearch" placeholder="Search playbooks, templates, people…"/>
<div className="hidden absolute left-0 top-10 w-80 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 overflow-hidden z-50" id="globalSearchResults"></div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition ring-1 ring-gray-200" onclick="openTemplates()">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Templates
              </button>
<button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition ring-1 ring-gray-200" onclick="openCommunity()">
<i className="w-4 h-4" data-lucide="globe"></i>
                Community
              </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] active:bg-[#5c27af] transition ring-1 ring-[#8338EC]/30 shadow-sm" onclick="openWizard()">
<i className="w-4 h-4" data-lucide="plus"></i>
                New Project
              </button>

<div className="ml-2 relative">
<button aria-expanded="false" aria-haspopup="true" className="flex items-center gap-2 px-2 py-1.5 rounded-lg hover:bg-gray-50 ring-1 ring-gray-200 transition" id="userMenuBtn">
<img alt="User avatar" className="w-7 h-7 rounded-md" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span className="hidden md:block text-sm text-gray-700">Alex Chen</span>
<i className="w-4 h-4 text-gray-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 overflow-hidden" id="userMenu">
<div className="px-3 py-2">
<div className="text-sm font-medium text-gray-900 tracking-tight">Alex Chen</div>
<div className="text-xs text-gray-500">alex@deepfunding.org</div>
</div>
<div className="h-px bg-gray-100"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onclick="openAdmin()">
<i className="w-4 h-4" data-lucide="settings"></i>
                    Organization Admin
                  </button>
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50" onclick="showView('login')">
<i className="w-4 h-4" data-lucide="log-out"></i>
                    Log out
                  </button>
</div>
</div>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="min-h-[84vh] flex items-center justify-center px-4" id="login">
<div className="w-full max-w-md mx-auto">
<div className="flex flex-col items-center mb-8">
<div className="w-14 h-14 rounded-2xl bg-[#8338EC]/10 ring-1 ring-[#8338EC]/30 flex items-center justify-center mb-4">
<span className="text-[#8338EC] text-xl font-semibold tracking-tight">DF</span>
</div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">Welcome to Playbook App</h1>
<p className="text-sm text-gray-600 mt-2 text-center">Build, share, and collaborate on operational playbooks.</p>
</div>
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
<label className="text-sm text-gray-700" htmlFor="loginEmail">Email</label>
<input aria-required="true" className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC] transition" id="loginEmail" placeholder="you@organization.org" type="email"/>
<button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] active:bg-[#5c27af] transition ring-1 ring-[#8338EC]/30 shadow-sm" onclick="handleMagicLink()">
<i className="w-4 h-4" data-lucide="mail"></i>
                Send magic link
              </button>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-gray-200"></div>
</div>
<div className="relative flex justify-center">
<span className="bg-white px-2 text-xs text-gray-500">or</span>
</div>
</div>
<button className="inline-flex gap-2 hover:bg-gray-50 transition text-sm text-gray-900 bg-white w-full ring-gray-200 ring-1 rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-center" id="aura-emffa7xf4" onclick="completeLogin()">Deep Funding Account</button>
<p className="text-xs text-[#8338EC] hidden" id="loginFeedback">Check your inbox for a secure link. We’ll take you right in.</p>
</div>
<div className="flex items-center justify-between text-xs text-gray-500 mt-6">
<div className="flex items-center gap-2">
<input aria-label="Agree to terms" className="accent-[#8338EC]" id="tos" type="checkbox"/>
<label htmlFor="tos">I agree to the Terms</label>
</div>
<div className="flex gap-4">
<a className="hover:text-gray-700 underline underline-offset-4" href="#">Terms</a>
<a className="hover:text-gray-700 underline underline-offset-4" href="#">Privacy</a>
</div>
</div>
</div>
</section>

<section className="hidden" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h2>
<p className="text-sm text-gray-600 mt-1">Your workspace at a glance.</p>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="w-64 rounded-lg pl-9 pr-3 py-2 bg-white border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC] transition" id="dashSearch" placeholder="Search playbooks…"/>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition ring-1 ring-gray-200" id="filterBtn">
<i className="w-4 h-4" data-lucide="filter"></i>
                    Filters
                  </button>

<div className="hidden absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-3 space-y-3 z-30" id="filterMenu">
<div>
<div className="text-xs text-gray-500 mb-1">Visibility</div>
<div className="flex gap-2 flex-wrap">
<button className="filter-chip active px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 bg-gray-50" data-filter="all">All</button>
<button className="filter-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-filter="Private">Private</button>
<button className="filter-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-filter="Org">Org</button>
<button className="filter-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-filter="Public">Public</button>
</div>
</div>
<div className="h-px bg-gray-100"></div>
<div>
<div className="text-xs text-gray-500 mb-1">Sort</div>
<div className="grid grid-cols-2 gap-2">
<button className="sort-chip active px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 bg-gray-50" data-sort="updated">Updated</button>
<button className="sort-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-sort="created">Created</button>
<button className="sort-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-sort="title">Title</button>
<button className="sort-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-sort="owner">Owner</button>
</div>
</div>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] transition ring-1 ring-[#8338EC]/30" onclick="openWizard()">
<i className="w-4 h-4" data-lucide="plus"></i>
                  New Project
                </button>
</div>
</div>

<div className="flex items-center gap-2 border-b border-gray-200">
<button className="dash-tab active px-3 py-2 text-sm text-gray-900 border-b-2 border-[#8338EC]" data-tab="mine">My Playbooks</button>
<button className="dash-tab px-3 py-2 text-sm text-gray-600 hover:text-gray-900" data-tab="shared">Shared with me</button>
<button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onclick="openTemplates()">Templates</button>
<button className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900" onclick="openCommunity()">Community Gallery</button>
</div>

<div className="space-y-6" id="dashContent">

<div className="hidden rounded-2xl border border-dashed border-gray-300 p-10 flex flex-col items-center text-center" id="emptyMine">
<i className="w-10 h-10 text-gray-400 mb-3" data-lucide="table"></i>
<h3 className="text-lg font-medium tracking-tight">No playbooks yet</h3>
<p className="text-sm text-gray-600 mt-1">Start from scratch or use a curated template.</p>
<div className="mt-4 flex gap-2">
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] transition ring-1 ring-[#8338EC]/30" onclick="openWizard()">
<i className="w-4 h-4" data-lucide="plus"></i>
                    New Project
                  </button>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200 transition" onclick="openTemplates()">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                    Browse Templates
                  </button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="gridMine">

</div>
<div className="hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="gridShared">

</div>
</div>
</div>
</section>

<section className="hidden" id="wizard">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="flex items-center justify-between gap-4 mb-6">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">New Project</h2>
<p className="text-sm text-gray-600">Follow the steps to create your playbook.</p>
</div>
<div className="flex items-center gap-2 text-xs text-gray-500" id="autosaveWizard">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8338EC]/40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8338EC]"></span>
</span>
                Autosaving…
              </div>
</div>

<ol className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
<li className="step-item active flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-gray-200 bg-gray-50">
<span className="step-index w-6 h-6 rounded-md flex items-center justify-center text-xs bg-[#8338EC] text-white">1</span>
<span className="text-sm text-gray-900">Choose Base</span>
</li>
<li className="step-item flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-gray-200">
<span className="step-index w-6 h-6 rounded-md flex items-center justify-center text-xs bg-gray-100 text-gray-700">2</span>
<span className="text-sm text-gray-700">Project Setup</span>
</li>
<li className="step-item flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-gray-200">
<span className="step-index w-6 h-6 rounded-md flex items-center justify-center text-xs bg-gray-100 text-gray-700">3</span>
<span className="text-sm text-gray-700">Task Plan</span>
</li>
<li className="step-item flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-gray-200">
<span className="step-index w-6 h-6 rounded-md flex items-center justify-center text-xs bg-gray-100 text-gray-700">4</span>
<span className="text-sm text-gray-700">Review &amp; Create</span>
</li>
</ol>

<div className="space-y-6">

<div className="step-panel rounded-2xl border border-gray-200 p-5 shadow-sm" id="step1">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<button className="group text-left rounded-xl border border-gray-200 hover:border-[#8338EC] hover:shadow-sm transition p-4" onclick="selectBase('scratch')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8338EC]" data-lucide="file-plus"></i>
<h3 className="font-medium tracking-tight">Start from Scratch</h3>
</div>
<i className="w-4 h-4 text-gray-400 group-hover:text-[#8338EC]" data-lucide="chevron-right"></i>
</div>
<p className="text-sm text-gray-600 mt-2">Define your workflow step by step.</p>
</button>
<button className="group text-left rounded-xl border border-gray-200 hover:border-[#8338EC] hover:shadow-sm transition p-4" onclick="selectBase('template','RFP 12 steps')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8338EC]" data-lucide="file-text"></i>
<h3 className="font-medium tracking-tight">RFP 12 steps</h3>
</div>
<span className="text-xs text-gray-500">12 steps</span>
</div>
<p className="text-sm text-gray-600 mt-2">From scoping to submission with approvals.</p>
</button>
<button className="group text-left rounded-xl border border-gray-200 hover:border-[#8338EC] hover:shadow-sm transition p-4" onclick="selectBase('template','Hackathon 8')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8338EC]" data-lucide="rocket"></i>
<h3 className="font-medium tracking-tight">Hackathon 8</h3>
</div>
<span className="text-xs text-gray-500">8 steps</span>
</div>
<p className="text-sm text-gray-600 mt-2">Plan, recruit, run, and follow up.</p>
</button>
<button className="group text-left rounded-xl border border-gray-200 hover:border-[#8338EC] hover:shadow-sm transition p-4 md:col-span-1" onclick="selectBase('template','Budget 10')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8338EC]" data-lucide="wallet"></i>
<h3 className="font-medium tracking-tight">Budget 10</h3>
</div>
<span className="text-xs text-gray-500">10 steps</span>
</div>
<p className="text-sm text-gray-600 mt-2">Forecast to reporting with guardrails.</p>
</button>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-sm text-gray-600" id="baseSelected">Select a base to continue.</p>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="cancelWizard()">Cancel</button>
<button className="px-4 py-2 rounded-lg text-sm text-white bg-gray-300 cursor-not-allowed" disabled="" id="next1">Continue</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-2xl border border-gray-200 p-5 shadow-sm" id="step2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="text-sm text-gray-700">Project Name <span className="text-pink-600">*</span></label>
<input className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="projName" placeholder="e.g., Q4 Grants RFP"/>
<p className="text-xs text-pink-600 mt-1 hidden" id="errName">Project name is required.</p>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-sm text-gray-700">Start Date <span className="text-pink-600">*</span></label>
<input className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="projStart" type="date"/>
<p className="text-xs text-pink-600 mt-1 hidden" id="errStart">Start date is required.</p>
</div>
<div>
<label className="text-sm text-gray-700">End Date <span className="text-pink-600">*</span></label>
<input className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="projEnd" type="date"/>
<p className="text-xs text-pink-600 mt-1 hidden" id="errEnd">End date must be after start date.</p>
</div>
</div>
<div className="md:col-span-2">
<label className="text-sm text-gray-700">Team Members <span className="text-pink-600">*</span></label>

<div className="mt-1">
<div className="flex flex-wrap gap-2" id="teamChips">

</div>
<div className="relative mt-2">
<input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="teamInput" placeholder="Type a name and press Enter…"/>
<div className="hidden absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg ring-1 ring-gray-200 overflow-hidden" id="teamSuggest">

</div>
</div>
<p className="text-xs text-pink-600 mt-1 hidden" id="errTeam">Add at least one team member.</p>
</div>
</div>
<div className="md:col-span-2">
<label className="text-sm text-gray-700">Description</label>
<textarea className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="projDesc" placeholder="What is this project about?" rows="3"></textarea>
</div>
<div>
<label className="text-sm text-gray-700">Tags</label>
<input className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="projTags" placeholder="proposal, grants, ops"/>
<p className="text-[11px] text-gray-500 mt-1">Comma-separated.</p>
</div>
<div>
<label className="text-sm text-gray-700">Visibility</label>
<div className="mt-1 grid grid-cols-3 gap-2">
<button className="vis-chip active px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm bg-gray-50" data-vis="Private">Private</button>
<button className="vis-chip px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm hover:bg-gray-50" data-vis="Org">Org</button>
<button className="vis-chip px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm hover:bg-gray-50" data-vis="Public">Public</button>
</div>
<p className="text-xs text-gray-500 mt-2">Public requires Description and Tags.</p>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="prevStep(1)">Back</button>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="cancelWizard()">Cancel</button>
<button className="px-4 py-2 rounded-lg text-sm text-white bg-gray-300 cursor-not-allowed" disabled="" id="next2">Continue</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-2xl border border-gray-200 p-5 shadow-sm" id="step3">
<div className="flex items-center justify-between">
<h3 className="font-medium tracking-tight">Plan Tasks</h3>
<div className="flex items-center gap-2">
<div className="text-xs text-gray-500" id="taskValidation">Ensure tasks have assignees and dates in range.</div>
</div>
</div>
<div className="mt-4 overflow-x-auto">
<div className="min-w-[960px]">
<div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs text-gray-500">
<div className="col-span-3">Task Title</div>
<div className="col-span-2">Assignees</div>
<div className="col-span-2">Start</div>
<div className="col-span-2">End</div>
<div className="col-span-2">Dependency</div>
<div className="col-span-1">Link</div>
</div>
<div className="divide-y divide-gray-100" id="taskRows">

</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="addTaskRow()">
<i className="w-4 h-4" data-lucide="plus"></i>
                    Add task
                  </button>
<div className="flex items-center gap-2">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="prevStep(2)">Back</button>
<button className="px-4 py-2 rounded-lg text-sm text-white bg-gray-300 cursor-not-allowed" disabled="" id="next3">Continue</button>
</div>
</div>
</div>

<div className="step-panel hidden rounded-2xl border border-gray-200 p-5 shadow-sm" id="step4">
<h3 className="font-medium tracking-tight">Review</h3>
<div className="mt-2 hidden rounded-lg bg-pink-50 text-pink-700 text-sm p-3 ring-1 ring-pink-200" id="reviewWarnings">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="alert-triangle"></i>
<span>Fix the issues below before creating.</span>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-xl border border-gray-200 p-4">
<h4 className="text-sm font-medium tracking-tight mb-2">Project</h4>
<dl className="text-sm text-gray-700 space-y-1">
<div className="flex justify-between"><dt className="text-gray-500">Name</dt><dd className="font-medium" id="rName"></dd></div>
<div className="flex justify-between"><dt className="text-gray-500">Dates</dt><dd className="font-medium" id="rDates"></dd></div>
<div className="flex justify-between"><dt className="text-gray-500">Team</dt><dd className="font-medium" id="rTeam"></dd></div>
<div className="flex justify-between"><dt className="text-gray-500">Visibility</dt><dd className="font-medium" id="rVis"></dd></div>
<div><dt className="text-gray-500">Tags</dt><dd className="font-medium mt-1" id="rTags"></dd></div>
<div><dt className="text-gray-500">Description</dt><dd className="font-medium mt-1 text-gray-700" id="rDesc"></dd></div>
</dl>
</div>
<div className="rounded-xl border border-gray-200 p-4">
<h4 className="text-sm font-medium tracking-tight mb-2">Tasks</h4>
<div className="text-sm text-gray-700 space-y-2 max-h-56 overflow-auto pr-1" id="rTasks">

</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="prevStep(3)">Back</button>
<button className="px-4 py-2 rounded-lg text-sm text-white bg-gray-300 cursor-not-allowed" disabled="" id="createPlaybookBtn">Create Playbook</button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="playbook">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">

<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
<div className="flex-1 space-y-2">
<div className="flex items-center gap-2">
<input className="text-2xl md:text-3xl font-semibold tracking-tight bg-transparent border-none focus:outline-none focus:ring-0" id="pbTitle" value="Untitled Playbook"/>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ring-1 ring-gray-200 text-gray-700 bg-gray-50" id="pbVisibilityPill">
<i className="w-3.5 h-3.5" data-lucide="lock"></i>
                    Private
                  </span>
</div>
<div className="flex flex-wrap items-center gap-2">
<input className="text-sm text-gray-700 bg-transparent border border-transparent px-2 py-1 rounded-md hover:border-gray-200 focus:border-[#8338EC] focus:ring-4 focus:ring-[#8338EC]/15 transition w-full md:w-auto" id="pbDesc" placeholder="Add a short description…"/>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-gray-400" data-lucide="tag"></i>
<input className="text-sm text-gray-700 bg-transparent border border-transparent px-2 py-1 rounded-md hover:border-gray-200 focus:border-[#8338EC] focus:ring-4 focus:ring-[#8338EC]/15 transition" id="pbTags" placeholder="tags (comma…)"/>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="list-checks"></i>
<span id="statTotal">0</span> tasks
                  </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="users"></i>
<span id="statAssigned">0</span> assigned
                  </div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-pink-600" data-lucide="alert-triangle"></i>
<span id="statOverdue">0</span> overdue
                  </div>
<div className="flex items-center gap-2 text-xs text-gray-500" id="autosavePB">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8338EC]/40"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#8338EC]"></span>
</span>
                    Autosaving…
                  </div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="openShare()">
<i className="w-4 h-4" data-lucide="share-2"></i>
                  Share
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="duplicatePlaybook()">
<i className="w-4 h-4" data-lucide="copy"></i>
                  Duplicate
                </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="exportCSV()">
<i className="w-4 h-4" data-lucide="file-down"></i>
                  Export CSV
                </button>
</div>
</div>

<div className="flex items-center gap-2 border-b border-gray-200">
<button className="pb-tab active px-3 py-2 text-sm text-gray-900 border-b-2 border-[#8338EC]" data-pbtab="list">List View</button>
<button className="pb-tab px-3 py-2 text-sm text-gray-600 hover:text-gray-900" data-pbtab="flow">Flowchart (read-only)</button>
<button className="pb-tab px-3 py-2 text-sm text-gray-600 hover:text-gray-900" data-pbtab="activity">Activity</button>
<button className="pb-tab px-3 py-2 text-sm text-gray-600 hover:text-gray-900" data-pbtab="versions">Versions</button>
</div>

<div className="space-y-3" id="pbList">

<div className="overflow-x-auto">
<div className="min-w-[960px] rounded-xl border border-gray-200">
<div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs text-gray-500 bg-gray-50 rounded-t-xl">
<div className="col-span-4">Task Title</div>
<div className="col-span-3">Assignees</div>
<div className="col-span-2">Start</div>
<div className="col-span-2">End</div>
<div className="col-span-1"></div>
</div>
<div className="divide-y divide-gray-100" id="pbTaskRows">

</div>
</div>
</div>
<div className="flex justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="addPBTask()">
<i className="w-4 h-4" data-lucide="plus"></i>
                  Add task
                </button>
<div className="text-xs text-gray-500">Dates must be within project range. Tasks require ≥1 assignee.</div>
</div>
</div>
<div className="hidden" id="pbFlow">
<div className="rounded-xl border border-gray-200 p-6 text-sm text-gray-600 bg-gray-50">
                Flowchart view is a preview. Editing is coming soon.
              </div>
</div>
<div className="hidden space-y-2" id="pbActivity">
<div className="rounded-xl border border-gray-200 p-4 text-sm space-y-3" id="activityList">
<div className="flex justify-between text-xs text-gray-500"><span>Today</span><span>09:41</span></div>
<div className="flex items-start gap-3">
<img alt="User avatar" className="w-8 h-8 rounded-md" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm"><span className="font-medium">Taylor</span> added 2 tasks</div>
<div className="text-xs text-gray-500">“Draft brief”, “Stakeholder review”</div>
</div>
</div>
<div className="h-px bg-gray-100"></div>
<div className="flex justify-between text-xs text-gray-500"><span>Yesterday</span><span>16:22</span></div>
<div className="text-sm">Snapshot saved by <span className="font-medium">Alex</span></div>
</div>
</div>
<div className="hidden space-y-3" id="pbVersions">
<div className="flex items-center justify-between">
<div className="text-sm text-gray-600">Create manual checkpoints while autosave runs continuously.</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] transition ring-1 ring-[#8338EC]/30" onclick="saveSnapshot()">
<i className="w-4 h-4" data-lucide="save"></i>
                  Save Snapshot
                </button>
</div>
<div className="rounded-xl border border-gray-200 divide-y divide-gray-100" id="versionList">

</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-50" id="shareModal">
<div className="absolute inset-0 bg-black/30"></div>
<div className="relative max-w-lg mx-auto mt-24 bg-white rounded-2xl shadow-xl ring-1 ring-gray-200 p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-lg font-medium tracking-tight">Share Playbook</h3>
<button className="p-2 rounded-lg hover:bg-gray-50 ring-1 ring-gray-200" onclick="closeShare()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-4">
<div>
<div className="text-sm text-gray-700 mb-2">Visibility</div>
<div className="grid grid-cols-3 gap-2">
<button className="share-vis active px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm bg-gray-50 flex items-center justify-center gap-2" data-sharevis="Private">
<i className="w-4 h-4" data-lucide="lock"></i>Private
                  </button>
<button className="share-vis px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm hover:bg-gray-50 flex items-center justify-center gap-2" data-sharevis="Org">
<i className="w-4 h-4" data-lucide="building-2"></i>Org
                  </button>
<button className="share-vis px-3 py-2 rounded-lg ring-1 ring-gray-200 text-sm hover:bg-gray-50 flex items-center justify-center gap-2" data-sharevis="Public">
<i className="w-4 h-4" data-lucide="globe"></i>Public
                  </button>
</div>
<p className="mt-2 text-xs text-gray-600" id="publicReqMsg">Public requires Description and Tags.</p>
</div>
<div>
<div className="text-sm text-gray-700 mb-2">Invite by email</div>
<div className="flex gap-2">
<input className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="inviteEmail" placeholder="teammate@org.org" type="email"/>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" id="roleBtn">
<i className="w-4 h-4" data-lucide="shield"></i>
<span id="roleLabel">Editor</span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 overflow-hidden z-10" id="roleMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-role="Owner">Owner</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-role="Editor">Editor</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-role="Viewer">Viewer</button>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] transition ring-1 ring-[#8338EC]/30" onclick="inviteUser()">
                    Invite
                  </button>
</div>
<p className="text-xs text-[#8338EC] mt-1 hidden" id="inviteFeedback">Invitation sent.</p>
</div>
<div className="rounded-xl ring-1 ring-gray-200 p-3">
<div className="text-sm text-gray-700 mb-2">Public link</div>
<div className="flex gap-2">
<input className="flex-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700" id="publicLink" readonly="" value="https://deepfunding.org/playbooks/slug"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white text-gray-400 ring-1 ring-gray-200 cursor-not-allowed" disabled="" id="copyLinkBtn">
<i className="w-4 h-4" data-lucide="copy"></i>
                    Copy
                  </button>
</div>
<p className="text-xs text-gray-500 mt-2" id="shareHelper">Enable Public to copy and share the link.</p>
</div>
<div className="flex justify-end">
<button className="px-4 py-2 rounded-lg text-sm text-gray-900 bg-white hover:bg-gray-50 ring-1 ring-gray-200" onclick="closeShare()">Close</button>
</div>
</div>
</div>
</div>

<section className="hidden" id="templates">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Templates Library</h2>
<p className="text-sm text-gray-600 mt-1">Jumpstart with curated templates.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="showView('dashboard')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>Back
              </button>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="w-72 rounded-lg pl-9 pr-3 py-2 bg-white border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC] transition" id="tplSearch" placeholder="Search templates…"/>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" id="tplFilterBtn">
<i className="w-4 h-4" data-lucide="filter"></i>Filter
                </button>
<div className="hidden absolute mt-2 w-64 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-3 z-30" id="tplFilterMenu">
<div className="text-xs text-gray-500 mb-1">Type</div>
<div className="flex gap-2 flex-wrap">
<button className="tpl-chip active px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 bg-gray-50" data-type="all">All</button>
<button className="tpl-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-type="ops">Ops</button>
<button className="tpl-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-type="finance">Finance</button>
<button className="tpl-chip px-2.5 py-1.5 rounded-md text-xs ring-1 ring-gray-200 hover:bg-gray-50" data-type="events">Events</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="tplGrid">

</div>
</div>
</section>

<section className="hidden" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Community Gallery</h2>
<p className="text-sm text-gray-600 mt-1">Explore public playbooks from the community.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="showView('dashboard')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>Back
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-3">
<div className="md:col-span-3 flex items-center gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" data-lucide="search"></i>
<input className="w-full rounded-lg pl-9 pr-3 py-2 bg-white border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC] transition" id="publicSearch" placeholder="Search playbooks…"/>
</div>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" id="typeBtn">
<i className="w-4 h-4" data-lucide="grid-2x2"></i>Type
                  </button>
<div className="hidden absolute mt-2 w-44 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 z-30" id="typeMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-type="all">All</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-type="ops">Operations</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-type="events">Events</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-type="finance">Finance</button>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" id="tagBtn">
<i className="w-4 h-4" data-lucide="tag"></i>Tags
                  </button>
<div className="hidden absolute mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 p-3 z-30" id="tagMenu">
<div className="flex gap-2 flex-wrap text-xs">
<button className="tag-chip px-2.5 py-1.5 rounded-md ring-1 ring-gray-200 hover:bg-gray-50">proposal</button>
<button className="tag-chip px-2.5 py-1.5 rounded-md ring-1 ring-gray-200 hover:bg-gray-50">budget</button>
<button className="tag-chip px-2.5 py-1.5 rounded-md ring-1 ring-gray-200 hover:bg-gray-50">hackathon</button>
<button className="tag-chip px-2.5 py-1.5 rounded-md ring-1 ring-gray-200 hover:bg-gray-50">procurement</button>
<button className="tag-chip px-2.5 py-1.5 rounded-md ring-1 ring-gray-200 hover:bg-gray-50">legal</button>
</div>
</div>
</div>
<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" id="durationBtn">
<i className="w-4 h-4" data-lucide="clock"></i>Duration
                  </button>
<div className="hidden absolute mt-2 w-40 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 z-30" id="durationMenu">
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-dur="any">Any</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-dur="short">Short</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-dur="medium">Medium</button>
<button className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50" data-dur="long">Long</button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" id="galleryGrid">

</div>
</div>
</section>

<section className="hidden" id="public">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex items-center justify-between">
<div className="space-y-1">
<div className="flex items-center gap-2">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight" id="pubTitle">Public Playbook</h2>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs ring-1 ring-[#8338EC]/30 text-[#8338EC] bg-[#8338EC]/10">
<i className="w-3.5 h-3.5" data-lucide="globe"></i>Public
                  </span>
</div>
<div className="text-sm text-gray-600">
<span className="font-medium" id="pubOrg">DeepFunding Org</span> • <span id="pubOwner">Alex Chen</span>
</div>
<div className="flex items-center gap-2 text-sm text-gray-700">
<i className="w-4 h-4 text-gray-400" data-lucide="tag"></i>
<span id="pubTags">proposal, grants</span>
</div>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="openCommunity()">
<i className="w-4 h-4" data-lucide="arrow-left"></i>Back to Gallery
              </button>
</div>
<p className="text-sm text-gray-700" id="pubDesc">Description goes here.</p>
<div className="rounded-xl border border-gray-200">
<div className="grid grid-cols-12 gap-2 px-3 py-2 text-xs text-gray-500 bg-gray-50 rounded-t-xl">
<div className="col-span-6">Task Title</div>
<div className="col-span-3">Assignees</div>
<div className="col-span-2">Start</div>
<div className="col-span-1">End</div>
</div>
<div className="divide-y divide-gray-100" id="pubTasks">

</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] ring-1 ring-[#8338EC]/30" onclick="duplicateFromPublic()">
<i className="w-4 h-4" data-lucide="copy"></i>Duplicate to My Workspace
              </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="exportPublicCSV()">
<i className="w-4 h-4" data-lucide="download"></i>Download CSV
              </button>
</div>
</div>
</section>

<section className="hidden" id="admin">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
<div className="flex items-center justify-between">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Organization Admin</h2>
<p className="text-sm text-gray-600 mt-1">Manage users and default templates.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="showView('dashboard')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>Back
              </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-2xl border border-gray-200 p-5">
<div className="flex items-center justify-between mb-3">
<h3 className="font-medium tracking-tight">Users</h3>
<div className="flex items-center gap-2">
<input className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-[#8338EC]/15 focus:border-[#8338EC]" id="userEmail" placeholder="invite@org.org"/>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white bg-[#8338EC] hover:bg-[#6f2fd2] ring-1 ring-[#8338EC]/30" onclick="inviteOrgUser()">
                      Invite user
                    </button>
</div>
</div>
<div className="overflow-x-auto">
<table className="min-w-full text-sm">
<thead className="bg-gray-50">
<tr className="text-left text-xs text-gray-500">
<th className="px-3 py-2">Name</th>
<th className="px-3 py-2">Email</th>
<th className="px-3 py-2">Role</th>
<th className="px-3 py-2"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100" id="userTable">

</tbody>
</table>
</div>
</div>

<div className="rounded-2xl border border-gray-200 p-5">
<h3 className="font-medium tracking-tight mb-3">Org Default Templates</h3>
<div className="space-y-3" id="orgTpls">

</div>
<button className="mt-3 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-white ring-1 ring-gray-200 hover:bg-gray-50" onclick="openTemplates()">
<i className="w-4 h-4" data-lucide="sparkles"></i>Browse Templates
                </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-200 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-gray-600">
<div className="w-8 h-8 rounded-lg bg-[#8338EC]/10 ring-1 ring-[#8338EC]/30 flex items-center justify-center">
<span className="text-[#8338EC] font-semibold tracking-tight text-xs">DF</span>
</div>
<span>DeepFunding • Playbook App</span>
</div>
<div className="text-xs text-gray-500 flex gap-4">
<a className="hover:text-gray-700 underline underline-offset-4" href="#">Accessibility</a>
<a className="hover:text-gray-700 underline underline-offset-4" href="#">Privacy</a>
<a className="hover:text-gray-700 underline underline-offset-4" href="#">Terms</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
