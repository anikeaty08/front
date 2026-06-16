import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Initialize Lucide Icons
      lucide.createIcons();

      function toggleTaskPanel() {
        const taskPanel = document.getElementById('task-side-panel');
        const agentPanel = document.getElementById('agent-side-panel');
        
        if (!agentPanel.classList.contains('translate-x-full')) {
          agentPanel.classList.add('translate-x-full');
        }
        taskPanel.classList.toggle('translate-x-full');
      }

      function toggleAgentPanel() {
        const taskPanel = document.getElementById('task-side-panel');
        const agentPanel = document.getElementById('agent-side-panel');
        
        if (!taskPanel.classList.contains('translate-x-full')) {
          taskPanel.classList.add('translate-x-full');
        }
        agentPanel.classList.toggle('translate-x-full');
      }

      function openActionModal() {
        const modal = document.getElementById('action-modal');
        const content = document.getElementById('action-modal-content');
        
        // Default to Agent tab upon opening, as it aligns with the "Add scheduled task" context
        switchActionTab('agent');
        
        modal.classList.remove('pointer-events-none');
        modal.style.opacity = '1';
        
        setTimeout(() => {
          content.classList.remove('scale-95', 'opacity-0');
          content.classList.add('scale-100', 'opacity-100');
        }, 10);
      }

      function closeActionModal() {
        const modal = document.getElementById('action-modal');
        const content = document.getElementById('action-modal-content');
        
        content.classList.remove('scale-100', 'opacity-100');
        content.classList.add('scale-95', 'opacity-0');
        
        setTimeout(() => {
          modal.style.opacity = '0';
          modal.classList.add('pointer-events-none');
        }, 200);
      }

      function switchActionTab(tab) {
        const formHuman = document.getElementById('form-human');
        const formAgent = document.getElementById('form-agent');
        const btnHuman = document.getElementById('tab-btn-human');
        const btnAgent = document.getElementById('tab-btn-agent');
        const submitBtn = document.getElementById('submit-action-btn');
        const modalTitle = document.getElementById('modal-title');

        if (tab === 'human') {
          formHuman.classList.remove('hidden');
          formAgent.classList.add('hidden');
          
          btnHuman.className = 'flex-1 sm:px-6 py-2 text-base font-medium rounded-lg bg-white text-neutral-900 shadow-sm transition-all border border-neutral-200/50';
          btnAgent.className = 'flex-1 sm:px-6 py-2 text-base font-medium rounded-lg text-neutral-500 hover:text-neutral-900 transition-all border border-transparent';
          
          modalTitle.textContent = 'Create new task';
          submitBtn.textContent = 'Create Task';
        } else {
          formAgent.classList.remove('hidden');
          formHuman.classList.add('hidden');
          
          btnAgent.className = 'flex-1 sm:px-6 py-2 text-base font-medium rounded-lg bg-white text-neutral-900 shadow-sm transition-all border border-neutral-200/50';
          btnHuman.className = 'flex-1 sm:px-6 py-2 text-base font-medium rounded-lg text-neutral-500 hover:text-neutral-900 transition-all border border-transparent';
          
          modalTitle.textContent = 'Add scheduled task';
          submitBtn.textContent = 'Save';
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden lg:flex flex-col border-r border-neutral-200 w-[260px] bg-neutral-50/50 shrink-0">
<div className="px-5 pt-6 pb-4">
<div className="rounded-xl p-4 flex items-center gap-3 shadow-sm" style={{background: 'linear-gradient(137deg,#a955f7,#6366f1,#22d3ee)'}}>
<div className="w-6 h-6 border-[1.5px] border-white/80 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm">
<iconify-icon className="text-white text-sm" icon="solar:command-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs tracking-wider text-white font-medium uppercase">Ask Anything</div>
<div className="text-xs text-white/80 mt-0.5 font-mono">Command Interface</div>
</div>
</div>
</div>
<div className="px-5 pb-3 pt-2">
<div className="text-xs tracking-widest text-neutral-500 font-medium uppercase">[UBIK]</div>
</div>
<nav className="mt-1 text-base font-medium flex-1 px-2 space-y-0.5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:inbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="flex-1 text-left text-sm">Inbox</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="flex-1 text-left text-sm">Suppliers &amp; Buyers</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-fuchsia-600 hover:bg-fuchsia-50/80 transition-colors">
<iconify-icon className="text-fuchsia-500 text-lg" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="flex-1 text-left text-sm">Deep Sourcing</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-white shadow-sm border border-neutral-200/60 text-neutral-900 transition-colors relative">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:widget-5-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="flex-1 text-left text-sm">Tasks &amp; Agents</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors">
<iconify-icon className="text-neutral-400 text-lg" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="flex-1 text-left text-sm">Shipments</span>
</button>
</nav>
<div className="px-5 pb-6 pt-6 mt-auto border-t border-neutral-200/60 mx-2">
<div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full rounded-full" style={{background: 'linear-gradient(90deg,#a855f7,#6366f1,#22d3ee)', width: '78%'}}></div>
</div>
<div className="mt-3 text-xs uppercase tracking-widest text-neutral-500 font-medium">
          Cognitive load: 78%
        </div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0 bg-white relative h-screen">

<header className="border-b border-neutral-200 px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shrink-0 bg-white z-10">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2 text-neutral-500 text-xs font-mono uppercase tracking-wider">
<iconify-icon className="text-sm" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>/</span>
<span>Operations</span>
</div>
<div className="flex items-end gap-3">
<h1 className="text-2xl md:text-3xl tracking-tight font-medium text-neutral-900">
              Tasks &amp; Agents
            </h1>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:block w-72 relative">
<div className="absolute left-3 top-2.5 text-neutral-400">
<iconify-icon className="text-lg" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 focus:bg-white transition-all font-sans" placeholder="Search across all activity..."/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors shadow-sm" onclick="openActionModal()">
<iconify-icon className="text-base" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            New Action
          </button>
</div>
</header>

<div className="flex-1 overflow-hidden relative flex">

<main className="flex-1 overflow-y-auto px-6 lg:px-8 py-8 flex flex-col gap-6 transition-all duration-300 ease-in-out" id="main-feed">

<div className="flex flex-col gap-4 border-b border-neutral-100 pb-4 shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 pt-2 -mt-2">
<div className="flex flex-wrap items-center gap-2 text-sm font-medium">
<button className="px-3.5 py-1.5 rounded-lg bg-neutral-100 text-neutral-900 shadow-sm border border-neutral-200/50">Unified Feed</button>
<div className="w-px h-4 bg-neutral-200 mx-1"></div>
<button className="px-3.5 py-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors">My Tasks</button>
<button className="px-3.5 py-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors">Agent Tasks</button>
<button className="px-3.5 py-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors">Background Agents</button>
<div className="ml-auto flex items-center gap-2 text-sm text-neutral-500">
<button className="px-3 py-1.5 rounded-lg border border-neutral-200 hover:bg-neutral-50 flex items-center gap-2 transition-colors bg-white shadow-sm">
<iconify-icon className="text-base" icon="solar:filter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Filter</span>
</button>
</div>
</div>
</div>
<div className="flex flex-col xl:flex-row gap-8 min-h-0 pb-12">

<section className="flex-1 min-w-0 flex flex-col gap-6">
<div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col divide-y divide-neutral-100">

<div className="flex items-start gap-4 p-4 hover:bg-neutral-50 transition-colors group cursor-pointer relative" onclick="toggleTaskPanel()">
<div className="absolute inset-y-0 left-0 w-1 bg-amber-400 hidden group-hover:block transition-all"></div>
<button className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-[4px] border border-neutral-300 flex items-center justify-center group-hover:border-neutral-400 transition-colors bg-white">
<iconify-icon className="text-transparent text-sm group-hover:text-neutral-300" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</button>
<div className="flex-1 min-w-0 flex flex-col gap-1">
<div className="flex items-center justify-between gap-2">
<p className="text-base font-medium text-neutral-900 truncate group-hover:text-indigo-600 transition-colors">Review B/L vs PO weight discrepancy - Container MSKU90342</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 shrink-0 shadow-sm">Action Required</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1">Supplier billed 24,500 lbs vs original PO 25,000 lbs for frozen Atlantic Salmon.</p>
<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Supplier Context</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Purchase Order #8821</span>
<div className="flex items-center -space-x-1 ml-auto">
<img alt="Agent" className="w-5 h-5 rounded-full border border-white" src="https://ui-avatars.com/api/?name=UBIK&amp;background=e0e7ff&amp;color=4f46e5"/>
<img alt="User" className="w-5 h-5 rounded-full border border-white" src="https://ui-avatars.com/api/?name=User&amp;background=f3f4f6&amp;color=4b5563"/>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 hover:bg-neutral-50 transition-colors group cursor-pointer relative" onclick="toggleAgentPanel()">
<div className="absolute inset-y-0 left-0 w-1 bg-emerald-400 hidden group-hover:block transition-all"></div>
<div className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="flex-1 min-w-0 flex flex-col gap-1">
<div className="flex items-center justify-between gap-2">
<p className="text-base font-medium text-neutral-900 truncate group-hover:text-emerald-600 transition-colors">Monitoring FDA Import Alerts for Yellowfin Tuna</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 shadow-sm">Background Agent</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1">Background agent matching incoming shipments against updated FDA Red Lists.</p>
<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Compliance</span>
<span className="flex items-center gap-1.5 text-emerald-600"><iconify-icon className="text-base" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Last check: 5m ago</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 bg-neutral-50/50 hover:bg-neutral-50 transition-colors group cursor-pointer">
<button className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-[4px] border border-indigo-500 bg-indigo-500 flex items-center justify-center transition-colors shadow-sm">
<iconify-icon className="text-white text-sm" icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</button>
<div className="flex-1 min-w-0 flex flex-col gap-1">
<div className="flex items-center justify-between gap-2">
<p className="text-base font-medium text-neutral-600 line-through truncate">Re-route PO-8821 to Miami Cold Storage</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0 shadow-sm">Auto-Resolved</span>
</div>
<p className="text-base text-neutral-400 line-clamp-1">Agent detected port congestion in Jacksonville and autonomously re-routed to Miami facility.</p>
<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:map-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Logistics</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 2 hours ago</span>
<span className="text-xs font-medium text-indigo-500 ml-auto bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100 shadow-sm">Saved $450 in delays</span>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 hover:bg-neutral-50 transition-colors group cursor-pointer">
<div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-[4px] border border-neutral-300 flex items-center justify-center bg-neutral-100 shadow-sm">
<iconify-icon className="text-neutral-500 text-xs" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex-1 min-w-0 flex flex-col gap-1">
<div className="flex items-center justify-between gap-2">
<p className="text-base font-medium text-neutral-900 truncate">Compile Weekly Cold-Chain Temperature Report</p>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-600 border border-neutral-200 shrink-0 shadow-sm">Scheduled Task</span>
</div>
<p className="text-base text-neutral-500 line-clamp-1">Extracts IoT data from transit containers, formats into PDF, sends to Quality Assurance.</p>
<div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-500">
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:thermometer-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Quality Assurance</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-base" icon="solar:alarm-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Runs Friday 5:00 PM</span>
</div>
</div>
</div>
</div>
</section>

<aside className="w-full xl:w-[340px] flex flex-col gap-6 shrink-0 transition-opacity duration-300 ease-in-out" id="right-rail">
<section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-emerald-500/5 rounded-bl-full pointer-events-none"></div>
<div className="flex items-center justify-between mb-5 relative">
<h3 className="text-base tracking-tight font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:ghost-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    System Scorecard
                  </h3>
<button className="flex items-center gap-1 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors border border-neutral-200 rounded-md px-2 py-1 bg-neutral-50 shadow-sm">
                    This Week <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="grid grid-cols-2 gap-3 mb-6 relative">
<div className="p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/80 flex flex-col gap-1.5 shadow-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider line-clamp-1">Containers Proc.</span>
<div className="flex items-end gap-2">
<span className="text-2xl tracking-tight font-medium text-neutral-900 leading-none">142</span>
<span className="flex items-center text-xs font-medium text-emerald-600 mb-0.5">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '2'}}></iconify-icon> 12%
                      </span>
</div>
</div>
<div className="p-3.5 rounded-xl border border-neutral-100 bg-neutral-50/80 flex flex-col gap-1.5 shadow-sm">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider line-clamp-1">Sales ↔ PO Match</span>
<div className="flex items-end gap-2">
<span className="text-2xl tracking-tight font-medium text-neutral-900 leading-none">98<span className="text-xl text-neutral-400">%</span></span>
<span className="flex items-center text-xs font-medium text-emerald-600 mb-0.5">
<iconify-icon className="mr-0.5" icon="solar:arrow-right-up-linear" style={{strokeWidth: '2'}}></iconify-icon> 2%
                      </span>
</div>
</div>
<div className="col-span-2 p-3.5 rounded-xl border border-indigo-100 bg-indigo-50/30 flex items-center justify-between shadow-sm">
<div className="flex flex-col gap-1">
<span className="text-xs font-medium text-indigo-800 uppercase tracking-wider">Yield Retention (Seafood)</span>
<span className="text-sm font-medium text-neutral-600">Avg loss dropped to 1.2%</span>
</div>
<div className="w-10 h-10 rounded-full border border-indigo-200 bg-white flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-indigo-600 text-lg" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>

<div className="relative">
<h4 className="text-xs uppercase tracking-widest text-neutral-500 font-medium mb-3">Initiatives Taken</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded border border-neutral-200 bg-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<iconify-icon className="text-amber-500 text-sm" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm text-neutral-700 leading-snug">
<span className="font-medium text-neutral-900">Re-routed 3 shipments</span> from Long Beach to avoid $1.2k port demurrage fees.
                      </div>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded border border-neutral-200 bg-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-sm text-neutral-700 leading-snug">
<span className="font-medium text-neutral-900">Prevented spoilage</span> by flagging temp anomaly in Route 4 (Chile -&gt; Miami).
                      </div>
</li>
</ul>
</div>

<div className="mt-6 pt-5 border-t border-neutral-100 relative">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Agent Matrix</span>
<span className="text-xs text-neutral-400">Current Focus</span>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-neutral-700">Logistics Proactivity</span>
<span className="text-indigo-600">94%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '94%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-neutral-700">Yield Optimization</span>
<span className="text-emerald-600">88%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs font-medium mb-1">
<span className="text-neutral-700">Quality Assurance</span>
<span className="text-amber-600">97%</span>
</div>
<div className="w-full h-1.5 bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '97%'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5 shadow-sm">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs uppercase tracking-widest text-neutral-500 font-medium">Yield Opportunity</h4>
</div>
<div className="group bg-white border border-neutral-200 p-4 rounded-xl hover:shadow-md transition-shadow cursor-pointer relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-emerald-500"></div>
<div className="flex items-start gap-3">
<iconify-icon className="text-indigo-500 text-xl shrink-0 mt-0.5" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<p className="text-base font-medium text-neutral-900 leading-tight">Automate Credit Memos?</p>
<p className="text-sm text-neutral-500 mt-1">You manually drafted 14 credit requests for weight discrepancies last month.</p>
<button className="mt-3 text-sm font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group-hover:gap-2 transition-all">
                        Create Agent Task <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>
</aside>
</div>
</main>

<div className="absolute inset-y-0 right-0 w-full md:w-[600px] bg-white border-l border-neutral-200 shadow-[0_0_40px_rgba(0,0,0,0.1)] z-30 flex flex-col transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" id="task-side-panel">
<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<span className="hover:text-neutral-900 cursor-pointer">Operations</span>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-neutral-900">Task Details</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
<iconify-icon className="text-lg" icon="solar:square-share-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors" onclick="toggleTaskPanel()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col bg-white">
<div className="flex flex-col gap-5 mb-6">
<h2 className="text-2xl tracking-tight font-medium text-neutral-900 leading-snug">Review B/L vs PO weight discrepancy - Container MSKU90342</h2>
<div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
<div className="text-neutral-500 flex items-center">Status</div>
<div>
<button className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium text-xs hover:bg-amber-100 transition-colors shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Action Required
                  </button>
</div>
<div className="text-neutral-500 flex items-center">Assignee</div>
<div className="flex items-center gap-2 font-medium text-neutral-900">
<img alt="User" className="w-5 h-5 rounded-full border border-neutral-200" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=f3f4f6&amp;color=4b5563"/>
                  Sarah J.
                </div>
<div className="text-neutral-500 flex items-center">Source Agent</div>
<div className="flex items-center gap-2 font-medium text-neutral-900">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Logistics Auditor <span className="text-xs text-neutral-400 font-normal ml-1">#4892</span>
</div>
</div>
</div>
<div className="flex flex-col gap-3 mb-8">
<h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-100 pb-2">
<iconify-icon className="text-neutral-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Description
              </h3>
<div className="text-sm text-neutral-700 leading-relaxed font-sans bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
<p className="mb-3">Agent UBIK detected a <strong className="text-neutral-900 font-medium bg-amber-100 px-1 rounded">500 lbs weight mismatch</strong> during document reconciliation for the incoming frozen Atlantic Salmon shipment.</p>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
<div className="text-xs text-neutral-500 mb-1">Supplier Bill of Lading</div>
<div className="font-mono text-neutral-900 font-medium">24,500 lbs</div>
</div>
<div className="bg-neutral-50 p-3 rounded-lg border border-neutral-100">
<div className="text-xs text-neutral-500 mb-1">Original PO #8821</div>
<div className="font-mono text-neutral-900 font-medium">25,000 lbs</div>
</div>
</div>
<p className="text-neutral-600">Please advise team or agent if we should request a credit memo from the supplier, approve the invoice as-is (due to accepted moisture loss yields), or reject the load entirely.</p>
</div>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider flex items-center justify-between border-b border-neutral-100 pb-2 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Team &amp; Agent Chat
                </div>
<span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">3 messages</span>
</h3>
<div className="flex flex-col gap-6 flex-1 mb-6">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
<img alt="Agent" className="w-full h-full rounded-full" src="https://ui-avatars.com/api/?name=UBIK&amp;background=e0e7ff&amp;color=4f46e5"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-neutral-900">UBIK Agent</span>
<span className="text-xs text-neutral-400">10:42 AM</span>
</div>
<div className="text-sm text-neutral-700 bg-neutral-50 border border-neutral-100 rounded-2xl rounded-tl-none px-4 py-3 leading-relaxed">
                      I flagged this discrepancy. I've cross-referenced the supplier's email thread. The supplier noted a "minor yield loss during head-off processing" in their dispatch email.
                    </div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full border border-neutral-200 shrink-0">
<img alt="User" className="w-full h-full rounded-full" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=f3f4f6&amp;color=4b5563"/>
</div>
<div className="flex-1 flex flex-col items-end">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs text-neutral-400">11:15 AM</span>
<span className="text-sm font-medium text-neutral-900">Sarah J.</span>
</div>
<div className="text-sm text-neutral-800 bg-indigo-50 border border-indigo-100 rounded-2xl rounded-tr-none px-4 py-3 leading-relaxed max-w-[90%] shadow-sm">
<span className="font-medium text-indigo-700 bg-indigo-100/50 px-1 rounded">@UBIK</span> Let's request a credit memo for the 500 lbs difference. We need the inventory for our distributor so do not reject the load.
                    </div>
</div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
<img alt="Agent" className="w-full h-full rounded-full" src="https://ui-avatars.com/api/?name=UBIK&amp;background=e0e7ff&amp;color=4f46e5"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-neutral-900">UBIK Agent</span>
<span className="text-xs text-neutral-400">Just now</span>
</div>
<div className="text-sm text-indigo-700 font-medium flex items-center gap-2 bg-white border border-indigo-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
<iconify-icon className="text-indigo-500 animate-pulse text-base" icon="solar:pen-new-round-linear"></iconify-icon>
                      Drafting credit memo request to supplier...
                    </div>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-neutral-100 bg-neutral-50/50 shrink-0">
<div className="flex items-start gap-3">
<img alt="User" className="w-8 h-8 rounded-full border border-neutral-200 shrink-0 shadow-sm" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=f3f4f6&amp;color=4b5563"/>
<div className="flex-1 relative">
<textarea className="w-full bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-300 transition-all shadow-sm resize-none min-h-[100px]" placeholder="Chat with team or ask @UBIK to take action..."></textarea>
<div className="absolute bottom-2 right-2 flex items-center gap-2">
<button className="bg-neutral-900 text-white rounded-lg px-4 py-1.5 text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-1.5">
                    Send <iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-y-0 right-0 w-full md:w-[600px] bg-white border-l border-neutral-200 shadow-[0_0_40px_rgba(0,0,0,0.1)] z-30 flex flex-col transform translate-x-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" id="agent-side-panel">
<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-white/80 backdrop-blur-md sticky top-0 z-10 shrink-0">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-500">
<span className="hover:text-neutral-900 cursor-pointer">Operations</span>
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-neutral-900">Agent Configuration</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors">
<iconify-icon className="text-lg" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="p-1.5 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-md transition-colors" onclick="toggleAgentPanel()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-6 flex flex-col bg-white">
<div className="flex items-center gap-4 mb-6">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0 shadow-sm border border-emerald-600/20">
<iconify-icon className="text-white text-2xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<h2 className="text-2xl tracking-tight font-medium text-neutral-900 leading-snug">FDA Import Monitor</h2>
<div className="flex items-center gap-2 mt-1">
<span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> Active Background
                  </span>
<span className="text-xs text-neutral-400 font-mono">ID: AGT-9902</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Data Sources</div>
<div className="text-sm font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:database-linear"></iconify-icon> FDA RSS, CBP API
                </div>
</div>
<div className="bg-neutral-50/50 p-4 rounded-xl border border-neutral-100">
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Match Rate (24h)</div>
<div className="text-sm font-medium text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:scanner-linear"></iconify-icon> 1,402 Records
                </div>
</div>
</div>
<div className="flex flex-col gap-3 mb-8">
<h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider flex items-center gap-2 border-b border-neutral-100 pb-2">
<iconify-icon className="text-neutral-400" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Core Prompt &amp; Objective
              </h3>
<div className="text-sm text-neutral-700 leading-relaxed font-sans bg-neutral-900 text-neutral-300 rounded-xl p-4 shadow-inner border border-neutral-800 relative group">
<button className="absolute top-3 right-3 p-1.5 text-neutral-500 hover:text-white bg-neutral-800 rounded-md transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</button>
<p className="font-mono text-xs leading-relaxed">
                  "Continuously monitor incoming shipment manifests (MSKU, MSCU) against the live FDA Import Alert Red List. Specifically target 'Yellowfin Tuna', 'Mahi Mahi', and 'Shrimp' commodities originating from SE Asia and South America. If an exact or partial match (&gt;85% confidence) is found on shipper name or facility registration number, flag immediately and halt US Customs auto-clearance process."
                </p>
</div>
</div>
<div className="flex flex-col flex-1">
<h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wider flex items-center justify-between border-b border-neutral-100 pb-2 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:history-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Execution Logs
                </div>
<span className="text-xs font-medium text-neutral-400 hover:text-neutral-900 cursor-pointer">View All</span>
</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400"><iconify-icon className="text-base text-emerald-500" icon="solar:check-circle-linear"></iconify-icon></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-900">Routine Check Completed</p>
<span className="text-xs text-neutral-400 font-mono">11:42 AM</span>
</div>
<p className="text-sm text-neutral-500">Cross-referenced 42 new manifests. 0 anomalies detected.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400"><iconify-icon className="text-base text-amber-500" icon="solar:danger-circle-linear"></iconify-icon></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-900">Alert Generated</p>
<span className="text-xs text-neutral-400 font-mono">08:15 AM</span>
</div>
<p className="text-sm text-neutral-500">Flagged shipment <span className="text-neutral-700 font-medium">MSCU8812</span>. Partial match on supplier name with FDA Alert #16-81.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 text-neutral-400"><iconify-icon className="text-base text-blue-500" icon="solar:refresh-circle-linear"></iconify-icon></div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-neutral-900">Ruleset Updated</p>
<span className="text-xs text-neutral-400 font-mono">Yesterday</span>
</div>
<p className="text-sm text-neutral-500">System pulled new red list criteria via CBP API endpoint.</p>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 border-t border-neutral-100 bg-neutral-50/50 shrink-0 flex items-center justify-between">
<button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:stop-circle-linear"></iconify-icon> Pause Agent
            </button>
<button className="bg-white border border-neutral-200 text-neutral-900 rounded-lg px-4 py-2 text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm flex items-center gap-1.5">
              Edit Configuration <iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-900/40 backdrop-blur-sm transition-opacity pointer-events-none" id="action-modal" style={{opacity: '0'}}>
<div className="w-full max-w-[640px] bg-white border border-neutral-200/80 rounded-2xl shadow-2xl flex flex-col font-sans overflow-hidden transform transition-all duration-300 ease-out scale-95 opacity-0" id="action-modal-content">

<div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100 shrink-0 bg-white">
<h2 className="text-xl tracking-tight font-medium text-neutral-900" id="modal-title">Add scheduled task</h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors p-1.5 rounded-md hover:bg-neutral-100" onclick="closeActionModal()">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="px-6 pt-6 shrink-0 bg-white">
<div className="flex p-1 bg-neutral-100/60 rounded-xl w-full sm:w-fit border border-neutral-200/50">
<button className="flex-1 sm:px-6 py-2 text-base font-medium rounded-lg bg-white text-neutral-900 shadow-sm transition-all border border-neutral-200/50" id="tab-btn-agent" onclick="switchActionTab('agent')">Agent Task</button>
<button className="flex-1 sm:px-6 py-2 text-base font-medium rounded-lg text-neutral-500 hover:text-neutral-900 transition-all border border-transparent" id="tab-btn-human" onclick="switchActionTab('human')">Human Task</button>
</div>
</div>

<div className="px-6 py-6 overflow-y-auto max-h-[65vh] custom-scrollbar bg-white">

<div className="space-y-6" id="form-agent">
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Title</label>
<input className="w-full bg-neutral-50/80 border border-transparent hover:bg-neutral-100 rounded-xl px-4 py-2.5 text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all" placeholder="Summary of AI news" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Prompt</label>
<textarea className="w-full min-h-[120px] bg-neutral-50/80 border border-transparent hover:bg-neutral-100 rounded-xl px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all resize-none" placeholder="Search for yesterday's most impactful AI news and send me a brief summary."></textarea>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Schedule</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent focus-within:border-neutral-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-neutral-100 transition-all">
<span className="text-base text-neutral-900">No Repeat</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<span className="text-base text-neutral-900">Feb 9, 2026</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<span className="text-base text-neutral-900">23:30</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Expiration date <span className="text-neutral-400 font-normal">(optional)</span></label>
<input className="w-full bg-neutral-50/80 border border-transparent hover:bg-neutral-100 rounded-xl px-4 py-2.5 text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all" placeholder="Select expiration date" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Connectors <span className="text-neutral-400 font-normal">(optional)</span></label>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<div className="flex items-center gap-3">
<div className="flex -space-x-1">
<div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center border border-neutral-100 z-30"><i className="w-3.5 h-3.5 text-blue-500" data-lucide="hard-drive" strokeWidth="2"></i></div>
<div className="w-6 h-6 rounded-full bg-neutral-900 shadow-sm flex items-center justify-center border border-neutral-800 z-20"><i className="w-3.5 h-3.5 text-white" data-lucide="github" strokeWidth="2"></i></div>
<div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center border border-neutral-100 z-10"><i className="w-3.5 h-3.5 text-indigo-500" data-lucide="trello" strokeWidth="2"></i></div>
</div>
<span className="text-base text-neutral-900 font-medium">Google Drive, GitHub, Linear</span>
</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="border border-neutral-200 rounded-xl overflow-hidden bg-white shadow-sm">
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-neutral-50/50 transition-colors">
<span className="text-base font-medium text-neutral-900">Advanced settings</span>
<div className="flex items-center gap-2 text-neutral-500 text-sm">
<span>Manus 1.6 · Always ask</span>
<i className="w-4 h-4" data-lucide="chevron-up" strokeWidth="1.5"></i>
</div>
</div>
<div className="border-t border-neutral-100 p-4 space-y-5 bg-neutral-50/30">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex-1">
<div className="text-base font-medium text-neutral-900">Agent preference</div>
<div className="text-sm text-neutral-500 mt-0.5">Choose your preferred agent to run the task.</div>
</div>
<div className="bg-white hover:bg-neutral-50 rounded-lg px-3.5 py-2 flex items-center gap-3 cursor-pointer transition-colors border border-neutral-200 shadow-sm shrink-0">
<span className="text-base text-neutral-900 font-medium">Manus 1.6</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div className="flex-1">
<div className="text-base font-medium text-neutral-900">Tasks that require confirmation</div>
<div className="text-sm text-neutral-500 mt-0.5">Choose what happens when confirmation is required.</div>
</div>
<div className="bg-white hover:bg-neutral-50 rounded-lg px-3.5 py-2 flex items-center gap-3 cursor-pointer transition-colors border border-neutral-200 shadow-sm shrink-0">
<span className="text-base text-neutral-900 font-medium">Always ask</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 hidden" id="form-human">
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Task Name</label>
<input className="w-full bg-neutral-50/80 border border-transparent hover:bg-neutral-100 rounded-xl px-4 py-2.5 text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all" placeholder="e.g., Review Q3 Logistics Contract" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Description</label>
<textarea className="w-full min-h-[120px] bg-neutral-50/80 border border-transparent hover:bg-neutral-100 rounded-xl px-4 py-3 text-base text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all resize-none" placeholder="Provide necessary context and instructions..."></textarea>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Assign To</label>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<div className="flex items-center gap-2">
<img alt="User" className="w-5 h-5 rounded-full border border-neutral-200" src="https://ui-avatars.com/api/?name=Sarah+J&amp;background=f3f4f6&amp;color=4b5563"/>
<span className="text-base text-neutral-900">Sarah J. (Me)</span>
</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Priority</label>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500 ring-4 ring-amber-50"></div>
<span className="text-base text-neutral-900">High</span>
</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-900 mb-2">Due Date &amp; Time <span className="text-neutral-400 font-normal">(optional)</span></label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<span className="text-base text-neutral-400">Select date...</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div className="bg-neutral-50/80 hover:bg-neutral-100 rounded-xl px-4 py-2.5 flex items-center justify-between cursor-pointer border border-transparent transition-all">
<span className="text-base text-neutral-400">Select time...</span>
<i className="w-4 h-4 text-neutral-400" data-lucide="clock" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 py-5 border-t border-neutral-100 bg-white flex items-center justify-end gap-3 shrink-0">
<button className="px-5 py-2.5 rounded-xl text-base font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors" onclick="closeActionModal()">Cancel</button>
<button className="px-5 py-2.5 rounded-xl text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors shadow-sm" id="submit-action-btn" onclick="closeActionModal()">Save</button>
</div>
</div>
</div>


    </>
  );
}
