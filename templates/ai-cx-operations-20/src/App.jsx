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



        // Simple Router
        function nav(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-slate-50', 'text-indigo-600');
                el.classList.add('text-slate-600');
                el.querySelector('iconify-icon').classList.remove('text-indigo-600');
            });

            // Show target
            const target = document.getElementById('page-' + pageId);
            if(target) target.classList.add('active');

            // Highlight nav
            const navBtn = document.getElementById('nav-' + pageId);
            if(navBtn) {
                navBtn.classList.add('bg-slate-50', 'text-indigo-600');
                navBtn.classList.remove('text-slate-600');
                navBtn.querySelector('iconify-icon').classList.add('text-indigo-600');
            }
        }

        // Scope Switcher logic
        function setScope(name) {
            document.getElementById('current-scope').innerText = name;
            // Simulated Toast
            const toast = document.createElement('div');
            toast.className = 'fixed bottom-4 right-4 bg-slate-800 text-white px-4 py-2 rounded-lg shadow-lg text-sm z-50 flex items-center gap-2';
            toast.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Switched to ' + name;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
            
            // Update scope names on page
            document.querySelectorAll('.scope-name').forEach(el => el.innerText = name);
        }

        // Init
        nav('home');
    
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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between flex-shrink-0 z-20">
<div>

<div className="h-14 flex items-center px-4 border-b border-slate-100">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold tracking-tight mr-3">
                    C
                </div>
<span className="font-semibold text-slate-900 tracking-tight">Commplify</span>
</div>

<div className="overflow-y-auto h-[calc(100vh-3.5rem)] pb-4">
<nav className="p-3 space-y-6">

<div>
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Core</div>
<ul className="space-y-0.5">
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-home" onclick="nav('home')">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon>
                                    Home
                                </button>
</li>
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-conversations" onclick="nav('conversations')">
<iconify-icon icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                                    Conversations
                                    <span className="ml-auto bg-indigo-50 text-indigo-600 text-[10px] font-semibold px-1.5 py-0.5 rounded-full">12</span>
</button>
</li>
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-performance" onclick="nav('performance')">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
                                    Performance &amp; Ops
                                </button>
</li>
</ul>
</div>

<div>
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Build</div>
<ul className="space-y-0.5">
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-agents" onclick="nav('agents')">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
                                    AI Agents
                                </button>
</li>
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-knowledge" onclick="nav('knowledge')">
<iconify-icon icon="solar:book-bookmark-linear" width="18"></iconify-icon>
                                    Knowledge Hub
                                </button>
</li>
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-workflows" onclick="nav('workflows')">
<iconify-icon icon="solar:diagram-up-linear" width="18"></iconify-icon>
                                    Workflow Builder
                                </button>
</li>
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-integrations" onclick="nav('integrations')">
<iconify-icon icon="solar:plug-circle-linear" width="18"></iconify-icon>
                                    Integrations
                                </button>
</li>
</ul>
</div>

<div>
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider flex justify-between items-center">
<span>Orbit Modules</span>
<iconify-icon className="text-slate-400 cursor-pointer hover:text-indigo-600" icon="solar:add-circle-linear"></iconify-icon>
</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors group">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
                                    Co-Pilot
                                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
</button>
</li>
<li>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:check-read-linear" width="18"></iconify-icon>
                                    Co-QA
                                </button>
</li>
</ul>
</div>

<div>
<div className="px-3 mb-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Admin</div>
<ul className="space-y-0.5">
<li>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-colors" id="nav-settings" onclick="nav('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                                    Administration
                                </button>
</li>
</ul>
</div>
</nav>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-50 relative">

<header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 flex-shrink-0 z-10">

<div className="flex items-center gap-4">
<div className="relative group">
<button className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:buildings-2-linear" width="16"></iconify-icon>
<span id="current-scope">Acme Corp (HQ)</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 shadow-lg rounded-lg p-1 hidden group-hover:block group-focus-within:block z-50">
<div className="px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded cursor-pointer flex items-center justify-between" onclick="setScope('Acme Corp (HQ)')">
                            HQ <iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="h-px bg-slate-100 my-1"></div>
<div className="px-2 text-xs text-slate-400 mb-1 uppercase tracking-wide">Regions</div>
<div className="px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded cursor-pointer" onclick="setScope('North America')">North America</div>
<div className="px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded cursor-pointer" onclick="setScope('EMEA')">EMEA</div>
</div>
</div>
</div>

<div className="flex-1 max-w-lg mx-6">
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-2 text-sm bg-slate-100 border-transparent rounded-md focus:bg-white focus:ring-1 focus:ring-indigo-500/30 focus:border-indigo-500/50 transition-all placeholder:text-slate-400 outline-none" placeholder="Search conversations, agents, KB..." type="text"/>
<div className="absolute right-2 top-2 px-1.5 py-0.5 bg-white rounded border border-slate-200 text-[10px] text-slate-400 font-mono">/</div>
</div>
</div>

<div className="flex items-center gap-4">
<button className="relative text-slate-500 hover:text-indigo-600 transition-colors">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-6 w-px bg-slate-200"></div>
<button className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-semibold border border-indigo-200">
                        JD
                    </div>
<div className="text-left hidden lg:block">
<div className="text-xs font-medium text-slate-700">Jane Doe</div>
<div className="text-[10px] text-slate-400">Admin</div>
</div>
</button>
</div>
</header>


<div className="page-view flex-1 overflow-y-auto p-8" id="page-home">
<div className="max-w-7xl mx-auto space-y-8">

<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Overview</h1>
<p className="text-sm text-slate-500 mt-1">Platform operational health and metrics for <span className="font-medium text-slate-700 scope-name">Acme Corp (HQ)</span>.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded text-slate-600 hover:bg-slate-50 transition">Export Report</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">1,248</div>
<div className="text-xs text-slate-500 mt-1">Active Conversations</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-violet-50 rounded-lg text-violet-600">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">68%</span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">Automation Rate</div>
<div className="text-xs text-slate-500 mt-1">AI Handled without human</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 rounded-lg text-blue-600">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">$4,203</div>
<div className="text-xs text-slate-500 mt-1">Est. Cost Savings (Mo)</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 rounded-lg text-amber-600">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">85%</span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">System Health</div>
<div className="text-xs text-slate-500 mt-1">Operational Baseline Met</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 col-span-2">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:checklist-minimalistic-linear"></iconify-icon>
                            Setup Health Checklist
                        </h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-700">AI Agent Configured</span>
</div>
<span className="text-xs text-slate-400">Completed</span>
</div>
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-700">Knowledge Base Connected</span>
</div>
<span className="text-xs text-slate-400">2 Sources</span>
</div>
<div className="flex items-center justify-between p-3 border border-amber-100 rounded-lg bg-amber-50/30">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:exclamation-mark-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-900 font-medium">Channels Verified</span>
</div>
<button className="text-xs font-medium text-amber-700 hover:underline">Fix Now</button>
</div>
<div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg bg-slate-50/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-slate-700">Security Baseline Met</span>
</div>
<span className="text-xs text-slate-400">Audited</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Recent Activity</h3>
<div className="relative pl-4 border-l border-slate-100 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500 border-2 border-white"></div>
<div className="text-xs font-medium text-slate-900">Workflow "Returns v2" published</div>
<div className="text-[10px] text-slate-400 mt-0.5">2 mins ago by Jane Doe</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="text-xs font-medium text-slate-900">New Knowledge Source added</div>
<div className="text-[10px] text-slate-400 mt-0.5">1 hour ago • PDF Upload</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="text-xs font-medium text-slate-900">Credential Rotation</div>
<div className="text-[10px] text-slate-400 mt-0.5">Yesterday • System</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view h-full flex flex-row" id="page-conversations">

<div className="w-80 bg-white border-r border-slate-200 flex flex-col h-full">
<div className="p-4 border-b border-slate-100">
<div className="flex items-center justify-between mb-3">
<h2 className="text-sm font-semibold text-slate-900">Inbox</h2>
<button className="text-slate-400 hover:text-indigo-600"><iconify-icon icon="solar:filter-linear"></iconify-icon></button>
</div>

<div className="flex bg-slate-100 p-0.5 rounded-lg">
<button className="flex-1 text-[11px] font-medium py-1 rounded bg-white text-slate-900 shadow-sm">Live (4)</button>
<button className="flex-1 text-[11px] font-medium py-1 rounded text-slate-500 hover:text-slate-700">Waiting</button>
<button className="flex-1 text-[11px] font-medium py-1 rounded text-slate-500 hover:text-slate-700">AI</button>
</div>
</div>
<div className="flex-1 overflow-y-auto">

<div className="p-4 border-b border-slate-50 bg-indigo-50/50 border-l-2 border-l-indigo-600 cursor-pointer hover:bg-slate-50">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-semibold text-slate-900">Alice Smith</span>
<span className="text-[10px] text-slate-400">2m</span>
</div>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-slate-400" icon="solar:chat-line-linear" width="12"></iconify-icon>
<span className="text-xs text-slate-500 line-clamp-1">My order hasn't arrived yet.</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] bg-red-100 text-red-700 px-1.5 rounded font-medium">Urgent</span>
<span className="text-[10px] bg-white border border-slate-200 text-slate-500 px-1.5 rounded">Shipping</span>
</div>
</div>

<div className="p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 border-l-2 border-l-transparent">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-700">Michael Brown</span>
<span className="text-[10px] text-slate-400">14m</span>
</div>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-slate-400" icon="solar:phone-linear" width="12"></iconify-icon>
<span className="text-xs text-slate-500 line-clamp-1">Transcription active...</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 rounded font-medium">Active</span>
</div>
</div>

<div className="p-4 border-b border-slate-50 cursor-pointer hover:bg-slate-50 border-l-2 border-l-transparent opacity-75">
<div className="flex justify-between items-start mb-1">
<span className="text-sm font-medium text-slate-700">Support Bot</span>
<span className="text-[10px] text-slate-400">1h</span>
</div>
<div className="flex items-center gap-1 mb-2">
<iconify-icon className="text-slate-400" icon="solar:robot-linear" width="12"></iconify-icon>
<span className="text-xs text-slate-500 line-clamp-1">Refund processed successfully.</span>
</div>
<div className="flex gap-2">
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 rounded font-medium">Resolved</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">

<div className="h-16 border-b border-slate-200 flex items-center justify-between px-6">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium">AS</div>
<div>
<div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                Alice Smith
                                <span className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-white"></span>
</div>
<div className="text-xs text-slate-500">alice@example.com • London, UK</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 px-2 py-1 rounded-md">
<iconify-icon className="text-indigo-500" icon="solar:magic-stick-3-linear"></iconify-icon>
                            AI Assist On
                        </div>
<button className="text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon></button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
<div className="flex justify-center">
<span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">Today, 10:23 AM</span>
</div>

<div className="flex items-start gap-3">
<div className="w-8 h-8 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-xs">AS</div>
<div className="max-w-[70%]">
<div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
                                Hi, I ordered the Premium Plan last week but I'm still seeing the free tier limits. Can you check?
                            </div>
</div>
</div>

<div className="flex justify-center">
<div className="flex items-center gap-2 text-[10px] text-slate-500 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
<iconify-icon className="text-indigo-500" icon="solar:stars-minimalistic-linear"></iconify-icon>
                            AI checked account #8821: Subscription active but cache stale.
                         </div>
</div>

<div className="flex items-start gap-3 flex-row-reverse">
<div className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-semibold">JD</div>
<div className="max-w-[70%]">
<div className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white">
                                I can certainly help with that, Alice. Let me refresh your account status on our end. One moment.
                            </div>
<div className="text-[10px] text-slate-400 text-right mt-1">Read 10:25 AM</div>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-white">

<div className="flex gap-2 mb-3 overflow-x-auto">
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 border border-indigo-100 rounded-full text-xs text-indigo-700 transition-colors whitespace-nowrap">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
                            "I've refreshed your session. Please log out and back in."
                        </button>
<button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-full text-xs text-slate-600 transition-colors whitespace-nowrap">
                            Request Screenshot
                        </button>
</div>
<div className="relative">
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none resize-none" placeholder="Type a message or / for commands..." rows="3"></textarea>
<div className="absolute bottom-2 right-2 flex items-center gap-2">
<button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded"><iconify-icon icon="solar:paperclip-linear" width="18"></iconify-icon></button>
<button className="p-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-sm transition-colors">
<iconify-icon className="-rotate-45 translate-x-0.5 -translate-y-0.5" icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="w-72 bg-white border-l border-slate-200 overflow-y-auto hidden xl:block">
<div className="p-4 border-b border-slate-100 bg-slate-50/50">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Copilot</h3>

<div className="mb-4">
<div className="flex justify-between text-xs mb-1 text-slate-600">
<span>Sentiment</span>
<span className="text-amber-600 font-medium">Neutral</span>
</div>
<div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[60%]"></div>
</div>
</div>
</div>

<div className="p-4 border-b border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:bolt-linear"></iconify-icon> Suggested Actions
                    </h4>
<div className="space-y-2">
<div className="p-3 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all bg-white group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Trigger "Force Sync"</span>
<iconify-icon className="text-slate-300 group-hover:text-indigo-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<p className="text-[10px] text-slate-500 mt-1">Fixes cache issues.</p>
</div>
<div className="p-3 border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-sm cursor-pointer transition-all bg-white group">
<div className="flex justify-between items-start">
<span className="text-xs font-medium text-slate-700 group-hover:text-indigo-700">Offer Discount</span>
<iconify-icon className="text-slate-300 group-hover:text-indigo-500" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<p className="text-[10px] text-slate-500 mt-1">Retention policy applied.</p>
</div>
</div>
</div>

<div className="p-4">
<h4 className="text-xs font-semibold text-slate-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:book-bookmark-linear"></iconify-icon> Knowledge
                    </h4>
<div className="space-y-3">
<a className="block text-xs text-indigo-600 hover:underline" href="#">Troubleshooting Subscription Delays</a>
<a className="block text-xs text-indigo-600 hover:underline" href="#">Refund Policy 2023</a>
</div>
</div>
</div>
</div>

<div className="page-view flex-1 overflow-hidden relative bg-slate-50 dots-pattern" id="page-workflows">

<div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg shadow-sm border border-slate-200 flex items-center justify-between px-4 z-10">
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600" onclick="nav('home')"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<span className="text-sm font-semibold text-slate-800">Returns Handling Logic v2.4</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded border border-emerald-100">Active</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 rounded hover:bg-slate-200">Test Run</button>
<button className="px-3 py-1.5 text-xs font-medium bg-indigo-600 text-white rounded hover:bg-indigo-700 shadow-sm">Publish</button>
</div>
</div>

<div className="w-full h-full relative overflow-auto pt-20 pl-10">

<div className="absolute top-24 left-20 w-64 bg-white rounded-lg border border-slate-200 shadow-md">
<div className="p-3 border-b border-slate-100 bg-slate-50 rounded-t-lg flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:bolt-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-700">Trigger: New Message</span>
</div>
<div className="p-3">
<div className="text-xs text-slate-500">Condition: Intent == 'return_request'</div>
</div>

<div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-slate-300 rounded-full border-2 border-white"></div>
</div>

<svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{zIndex: '0'}}>
<path d="M 360 140 L 410 140 L 410 240 L 460 240" fill="none" stroke="#cbd5e1" strokeWidth="2"></path>
</svg>

<div className="absolute top-48 left-[460px] w-64 bg-white rounded-lg border-2 border-indigo-500 shadow-lg">
<div className="p-3 border-b border-slate-100 bg-indigo-50 rounded-t-lg flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold text-indigo-900">AI Agent: Order Check</span>
</div>
<div className="p-3 space-y-2">
<div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">Prompts: Check eligibility based on purchase date.</div>
<div className="flex gap-2 text-[10px]">
<span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200">Tool: API</span>
<span className="px-1.5 py-0.5 bg-slate-100 rounded border border-slate-200">KB: Policy</span>
</div>
</div>

<div className="absolute -left-1.5 top-1/2 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"></div>
<div className="absolute -right-1.5 top-1/2 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white"></div>
</div>
</div>

<div className="absolute left-4 bottom-4 w-12 bg-white border border-slate-200 rounded-lg shadow-lg flex flex-col items-center py-2 gap-3 z-20">
<button className="text-slate-400 hover:text-indigo-600" title="Add Node"><iconify-icon icon="solar:add-square-linear" width="20"></iconify-icon></button>
<button className="text-slate-400 hover:text-indigo-600" title="Zoom In"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="20"></iconify-icon></button>
<button className="text-slate-400 hover:text-indigo-600" title="Zoom Out"><iconify-icon icon="solar:magnifer-zoom-out-linear" width="20"></iconify-icon></button>
</div>
</div>

<div className="page-view flex-1 overflow-y-auto p-8" id="page-agents">
<div className="max-w-5xl mx-auto">
<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">AI Agents</h1>
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm shadow-indigo-200 flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Create Agent
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
<iconify-icon icon="solar:headphones-round-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500">Live</span>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Tier 1 Support</h3>
<p className="text-xs text-slate-500 mb-4 h-10">Handles general inquiries, shipping status, and FAQs.</p>
<div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
<span>v2.1</span>
<div className="flex gap-2">
<button className="hover:text-indigo-600">Edit</button>
<button className="hover:text-indigo-600">Logs</button>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow group">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center">
<iconify-icon icon="solar:bag-heart-linear" width="22"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span className="text-xs text-slate-500">Draft</span>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-1">Sales Concierge</h3>
<p className="text-xs text-slate-500 mb-4 h-10">Proactive upselling for enterprise visitors on pricing page.</p>
<div className="border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-500">
<span>v0.4</span>
<div className="flex gap-2">
<button className="hover:text-indigo-600">Edit</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-view flex-1 overflow-y-auto p-8" id="page-performance">
<div className="max-w-6xl mx-auto">
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">Performance Analytics</h1>

<div className="border-b border-slate-200 mb-6">
<div className="flex gap-6">
<button className="text-sm font-medium text-indigo-600 border-b-2 border-indigo-600 pb-2">Operational</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-2">CX Metrics</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-700 pb-2">Cost &amp; ROI</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-900">Conversation Volume</h3>
<select className="text-xs border-none bg-slate-50 rounded px-2 py-1 text-slate-600 outline-none"><option>Last 7 Days</option></select>
</div>

<div className="flex items-end justify-between h-48 gap-2">
<div className="w-full bg-slate-100 rounded-t h-[40%] group relative"><div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">40</div></div>
<div className="w-full bg-slate-100 rounded-t h-[60%] group relative hover:bg-indigo-100 transition-colors"><div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">60</div></div>
<div className="w-full bg-indigo-500 rounded-t h-[85%] relative shadow-lg shadow-indigo-200"></div>
<div className="w-full bg-slate-100 rounded-t h-[55%]"></div>
<div className="w-full bg-slate-100 rounded-t h-[70%]"></div>
<div className="w-full bg-slate-100 rounded-t h-[45%]"></div>
<div className="w-full bg-slate-100 rounded-t h-[50%]"></div>
</div>
<div className="flex justify-between text-[10px] text-slate-400 mt-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>

<div className="space-y-4">
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="text-sm text-slate-500 mb-1">Avg Resolution Time</div>
<div className="text-2xl font-semibold text-slate-900">4m 12s</div>
<div className="text-xs text-emerald-600 mt-1 flex items-center gap-1"><iconify-icon icon="solar:trending-down-linear"></iconify-icon> -15% vs last week</div>
</div>
<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
<div className="text-sm text-slate-500 mb-1">CSAT Score</div>
<div className="text-2xl font-semibold text-slate-900">4.8/5</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
<div className="bg-indigo-500 h-full w-[96%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
