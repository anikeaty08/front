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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
<span className="text-white tracking-tighter font-semibold text-sm">EA</span>
</div>
<span className="font-semibold tracking-tighter text-lg text-slate-900">EAMS</span>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#use-case">Use Case</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#integrations">Integrations</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Sign In</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-lg shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all" href="#demo">
                        Book a Demo
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-800 text-xs font-medium mb-8">
<iconify-icon className="text-cyan-600" icon="solar:bolt-linear"></iconify-icon>
                AI-assisted support execution for operational teams
            </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
                Turn Support Emails into <br className="hidden md:block"/>
<span className="text-cyan-600">Structured Workflows</span>
</h1>
<p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                EAMS helps support teams classify requests, generate AI-assisted replies, manage tickets, sync with Desk365, and monitor every step of the support process.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-lg shadow-md hover:bg-slate-800 transition-all" href="#demo">
                    Book a Demo
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm hover:bg-slate-50 transition-all gap-2" href="#features">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    See How It Works
                </a>
</div>

<div className="max-w-5xl mx-auto relative rounded-2xl ring-1 ring-slate-200/50 bg-white shadow-2xl overflow-hidden aspect-[16/9] sm:aspect-auto sm:h-[600px] flex text-left">

<div className="hidden sm:flex w-56 bg-slate-50 border-r border-slate-100 flex-col p-4">
<div className="flex items-center gap-2 mb-8">
<div className="w-6 h-6 rounded bg-cyan-600 flex items-center justify-center text-white text-xs tracking-tighter font-semibold">EA</div>
<span className="text-sm font-semibold tracking-tight">EAMS</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white text-cyan-700 rounded-md shadow-sm border border-slate-200/60 text-sm font-medium">
<iconify-icon icon="solar:inbox-linear"></iconify-icon> Inbox
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm font-medium transition-colors">
<iconify-icon icon="solar:list-check-linear"></iconify-icon> Pipeline Logs
                        </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md text-sm font-medium transition-colors">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon> Analytics
                        </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white">

<div className="h-14 border-b border-slate-100 flex items-center justify-between px-6">
<span className="text-sm font-semibold text-slate-800">Inbound Support</span>
<div className="flex items-center gap-2">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-500">Desk365 Sync Active</span>
</div>
</div>
<div className="flex-1 flex overflow-hidden">

<div className="w-1/3 border-r border-slate-100 p-4 space-y-3 overflow-y-auto mockup-scroll bg-slate-50/50">

<div className="bg-white p-3 rounded-lg shadow-sm border border-cyan-200 ring-1 ring-cyan-50 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-900">#10492</span>
<span className="text-[10px] font-medium text-slate-500">2m ago</span>
</div>
<h4 className="text-sm font-medium text-slate-800 mb-1 truncate">Where is my shipment?</h4>
<div className="flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">Logistics</span>
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">High Prio</span>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-slate-200 opacity-75 cursor-pointer">
<div className="flex justify-between items-start mb-1">
<span className="text-xs font-semibold text-slate-900">#10491</span>
<span className="text-[10px] font-medium text-slate-500">15m ago</span>
</div>
<h4 className="text-sm font-medium text-slate-800 mb-1 truncate">Invoice correction requested</h4>
<div className="flex gap-2">
<span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100">Billing</span>
</div>
</div>
</div>

<div className="flex-1 p-6 flex flex-col relative bg-white">
<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Where is my shipment?</h3>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 shadow-sm">Assign</button>
<button className="px-3 py-1.5 bg-slate-900 rounded text-xs font-medium text-white shadow-sm">Resolve</button>
</div>
</div>

<div className="flex gap-4 mb-6">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 shrink-0">JD</div>
<div className="flex-1">
<div className="bg-slate-50 border border-slate-100 rounded-lg p-4">
<p className="text-sm text-slate-700 leading-relaxed">Hello team,<br/><br/>I placed an order (ORD-99382) last week, but the tracking hasn't updated since Tuesday. Can you please let me know when it will arrive at the warehouse?<br/><br/>Thanks,<br/>John Doe</p>
</div>
</div>
</div>

<div className="ml-12 border-l-2 border-cyan-100 pl-6 pb-6 relative">
<div className="absolute -left-[17px] top-0 w-8 h-8 bg-white border-2 border-cyan-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-cyan-600 text-sm" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="mb-4 flex flex-wrap gap-2">
<div className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 flex items-center gap-1 shadow-sm">
<span className="text-slate-400">Extracted ID:</span> ORD-99382
                                        </div>
<div className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 flex items-center gap-1 shadow-sm">
<span className="text-slate-400">Intent:</span> Tracking Status
                                        </div>
<div className="px-2 py-1 bg-emerald-50 border border-emerald-100 rounded text-xs font-medium text-emerald-700 flex items-center gap-1 shadow-sm">
                                            Confidence: 98%
                                        </div>
</div>

<div className="bg-white border border-cyan-200 ring-1 ring-cyan-50 rounded-lg p-4 shadow-sm relative">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-cyan-800 flex items-center gap-1.5">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> AI Draft Response
                                            </span>
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Requires Approval</span>
</div>
<p className="text-sm text-slate-700 mb-4 bg-slate-50/50 p-2 rounded border border-slate-100">
                                            Hi John,<br/><br/>Thank you for reaching out. I've checked order ORD-99382. It is currently in transit and scheduled to arrive at your local distribution center tomorrow morning. You should see an update on the tracking link shortly after.<br/><br/>Let me know if you need anything else.
                                        </p>
<div className="flex justify-end gap-2">
<button className="px-3 py-1.5 bg-white border border-slate-200 rounded text-xs font-medium text-slate-600 hover:bg-slate-50 transition-colors">Edit</button>
<button className="px-3 py-1.5 bg-cyan-600 rounded text-xs font-medium text-white shadow-sm hover:bg-cyan-700 transition-colors flex items-center gap-1">
                                                Approve &amp; Send <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-400/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Support teams are drowning in repetitive email work</h2>
<p className="text-base text-slate-600">Many companies still run operational support through shared inboxes, manual forwarding, copy-paste replies, and disconnected systems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-600 mb-4">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Slow response times</h3>
<p className="text-xs text-slate-600 leading-relaxed">Manual triage and internal coordination cause delays in answering simple requests.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
<iconify-icon className="text-xl" icon="solar:copy-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Inconsistent replies</h3>
<p className="text-xs text-slate-600 leading-relaxed">Different agents give varying answers, and context gets lost across shifts.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 mb-4">
<iconify-icon className="text-xl" icon="solar:link-broken-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Disconnected systems</h3>
<p className="text-xs text-slate-600 leading-relaxed">Emails aren't synced with helpdesks like Desk365, leading to blind spots.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Multilingual struggles</h3>
<p className="text-xs text-slate-600 leading-relaxed">Routing and translating emails from different regions requires manual effort.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">EAMS connects email, AI, tickets, and workflows</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto mb-16">EAMS turns unstructured incoming customer communication into structured, actionable support work.</p>

<div className="relative max-w-5xl mx-auto">
<div className="hidden md:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 mb-4 relative z-10">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">1. Receive</h4>
<p className="text-xs text-slate-500 text-center px-4">Inbound email arrives and ticket is created.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-cyan-200 ring-1 ring-cyan-50 flex items-center justify-center text-cyan-600 mb-4 relative z-10">
<iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">2. AI Process</h4>
<p className="text-xs text-slate-500 text-center px-4">Classify request, extract data, generate draft.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 mb-4 relative z-10">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">3. Human Review</h4>
<p className="text-xs text-slate-500 text-center px-4">Agent reviews, edits, and approves reply.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-slate-700 mb-4 relative z-10">
<iconify-icon className="text-2xl" icon="solar:refresh-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">4. Sync &amp; Log</h4>
<p className="text-xs text-slate-500 text-center px-4">Sync with Desk365, track in analytics.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">A complete support execution layer</h2>
<p className="text-base text-slate-600">Everything operational teams need to process tickets with control and visibility.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:mailbox-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Inbound Email Processing</h3>
<p className="text-xs text-slate-600 leading-relaxed">Automatically create or update tickets from incoming customer emails without manual intervention.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:tag-horizontal-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">AI Classification</h3>
<p className="text-xs text-slate-600 leading-relaxed">Instantly classify requests by category, priority, type, sentiment, and language.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:document-add-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">AI Draft Replies</h3>
<p className="text-xs text-slate-600 leading-relaxed">Generate contextual draft responses based on extracted data that agents can review and send.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Human-in-the-Loop Control</h3>
<p className="text-xs text-slate-600 leading-relaxed">Agents stay in control. AI assists, but humans can approve, edit, or override before customer sees it.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:link-circle-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Desk365 Integration</h3>
<p className="text-xs text-slate-600 leading-relaxed">Keep your stack unified. Sync tickets, conversations, and contacts with Desk365 seamlessly.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Pipeline Flow Logs</h3>
<p className="text-xs text-slate-600 leading-relaxed">Track AI workflow execution step-by-step for debugging, transparency, and auditing.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:history-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Inbound Email Logs</h3>
<p className="text-xs text-slate-600 leading-relaxed">Monitor inbound messages, pipeline status, stored payloads, errors, and access retry options.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:refresh-square-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Sync Failure Management</h3>
<p className="text-xs text-slate-600 leading-relaxed">Never lose data. See failed Desk365 syncs, investigate issues, and trigger retries easily.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:folder-with-files-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Categories &amp; Groups</h3>
<p className="text-xs text-slate-600 leading-relaxed">Route tickets to the exact right team and apply category-specific AI rules for precise handling.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Users &amp; Roles</h3>
<p className="text-xs text-slate-600 leading-relaxed">Maintain security and governance by controlling platform access with role-based permissions.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Dashboard &amp; Analytics</h3>
<p className="text-xs text-slate-600 leading-relaxed">Monitor ticket volume, system health, workflow success, sync failures, and macro support trends.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow group">
<iconify-icon className="text-2xl text-slate-400 group-hover:text-cyan-600 transition-colors mb-4" icon="solar:settings-minimalistic-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-2">Configurable AI Prompts</h3>
<p className="text-xs text-slate-600 leading-relaxed">Admins can securely tune classification, extraction, draft, and summary behaviour with versioned prompts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight mb-4">More than a helpdesk. More than a chatbot.</h2>
<p className="text-base text-slate-400">Why EAMS is built specifically for operations, not just customer chatting.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
<h3 className="text-base font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:database-linear"></iconify-icon> Normal Helpdesk
                    </h3>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Just stores tickets</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Requires manual classification</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Depends on manual replies</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Limited AI visibility</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Weak workflow intelligence</li>
</ul>
</div>

<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
<h3 className="text-base font-semibold mb-6 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:chat-round-line-linear"></iconify-icon> Generic AI Chatbot
                    </h3>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Just answers questions</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Lacks operational context</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Not built for ticket lifecycles</li>
<li className="flex items-start gap-2"><iconify-icon className="text-slate-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Limited human approval workflows</li>
</ul>
</div>

<div className="bg-cyan-900/20 rounded-2xl p-8 border border-cyan-800 ring-1 ring-cyan-500/30 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] rounded-full"></div>
<h3 className="text-base font-semibold mb-6 flex items-center gap-2 text-white">
<div className="w-5 h-5 rounded bg-cyan-600 flex items-center justify-center text-[10px] tracking-tighter font-bold">EA</div> EAMS
                    </h3>
<ul className="space-y-4 text-sm text-cyan-50 relative z-10">
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Creates and updates tickets</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Classifies and extracts data via AI</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Generates draft replies</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Forces human approval</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Syncs directly with Desk365</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Tracks AI and sync workflows</li>
<li className="flex items-start gap-2"><iconify-icon className="text-cyan-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Gives admins visibility and control</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="use-case">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Built for real operational support</h2>
<p className="text-base text-slate-600">See how EAMS transforms a standard request.</p>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 lg:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<div className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 mb-6">Example Scenario</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">A customer emails: <br /><span className="font-normal italic text-slate-600">"Where is my shipment?"</span></br></h3>
<div className="mt-8 space-y-6">
<div className="relative pl-6 border-l border-slate-300">
<div className="absolute w-2 h-2 bg-slate-300 rounded-full -left-[4.5px] top-1.5"></div>
<h4 className="text-sm font-semibold text-slate-500 mb-2 uppercase tracking-wider">The Old Way</h4>
<ul className="text-sm text-slate-600 space-y-2">
<li>• Agent opens email, reads request</li>
<li>• Manually searches tracking number</li>
<li>• Checks internal logistics system</li>
<li>• Types out manual response</li>
<li>• Updates ticket status manually</li>
<li>• Hopes external sync didn't fail</li>
</ul>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-cyan-100 shadow-xl shadow-cyan-900/5 relative">
<div className="absolute -top-4 -right-4 bg-cyan-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                            Result: Faster, Consistent, Visible
                        </div>
<h4 className="text-sm font-semibold text-cyan-700 mb-6 flex items-center gap-2">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> The EAMS Way
                        </h4>
<div className="space-y-4">
<div className="flex gap-4">
<div className="w-6 flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-medium">1</div>
<div className="w-px h-full bg-cyan-100 my-1"></div>
</div>
<div className="pb-4">
<p className="text-sm text-slate-900 font-medium">Email creates/updates ticket instantly</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-medium">2</div>
<div className="w-px h-full bg-cyan-100 my-1"></div>
</div>
<div className="pb-4">
<p className="text-sm text-slate-900 font-medium">AI detects topic, priority &amp; extracts data</p>
<p className="text-xs text-slate-500 mt-1">Topic: Logistics Tracking | Priority: High</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-medium">3</div>
<div className="w-px h-full bg-cyan-100 my-1"></div>
</div>
<div className="pb-4">
<p className="text-sm text-slate-900 font-medium">Draft reply is generated based on context</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-medium">4</div>
<div className="w-px h-full bg-cyan-100 my-1"></div>
</div>
<div className="pb-4">
<p className="text-sm text-slate-900 font-medium">Agent reviews with 1 click and sends</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 text-xs font-medium">5</div>
</div>
<div>
<p className="text-sm text-slate-900 font-medium">Ticket &amp; conversation sync to Desk365</p>
<p className="text-xs text-slate-500 mt-1">Logs update showing successful pipeline</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-6">Designed for high-volume teams</h2>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:box-linear"></iconify-icon> Logistics support teams
                        </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon> eCommerce operations
                        </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:headphones-round-sound-linear"></iconify-icon> Customer service departments
                        </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:bed-linear"></iconify-icon> Hospitality service teams
                        </span>
<span className="px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-lg text-sm font-medium text-cyan-800 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:link-linear"></iconify-icon> Desk365 users
                        </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon icon="solar:earth-linear"></iconify-icon> Multi-language teams
                        </span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                            SMB &amp; Mid-market
                        </span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Because support is not just communication</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">
                        In operational businesses, a support request rarely ends with a simple chat message. It requires a sequence of actions.
                    </p>
<ul className="space-y-3 text-sm text-slate-700 font-medium">
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Checking order status</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Updating a system record</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Routing to a specific depot or team</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Documenting the action taken</li>
<li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div> Syncing with an external helpdesk</li>
</ul>
<p className="text-sm text-slate-500 mt-6 pt-6 border-t border-slate-100">
                        EAMS is designed specifically for this reality, turning unstructured emails into structured workflows.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">AI assistance with control and accountability</h2>
<p className="text-sm text-slate-600 mb-8">We don't believe in "magic AI" that runs loose. EAMS provides controlled operational assistance.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-xl" icon="solar:slider-minimalistic-horizontal-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Configurable Prompts</h4>
<p className="text-xs text-slate-500">Admins can tune category-level AI settings to ensure responses match company policy.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-xl" icon="solar:eye-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Pipeline &amp; Audit Logs</h4>
<p className="text-xs text-slate-500">Full visibility into how AI reached a conclusion. Track execution step-by-step.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-xl" icon="solar:user-hands-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Strict Human Review</h4>
<p className="text-xs text-slate-500">Ensure human review before any AI-generated response is sent to a customer.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">See what is working — and what is broken</h2>
<p className="text-sm text-slate-600 mb-8">Monitor KPIs to keep your operations running smoothly.</p>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<span className="text-xs text-slate-500 font-medium">Workflow Success Rate</span>
<div className="text-2xl font-semibold text-slate-900 mt-1">98.4%</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<span className="text-xs text-slate-500 font-medium">Failed Syncs</span>
<div className="text-2xl font-semibold text-red-600 mt-1">2</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<span className="text-xs text-slate-500 font-medium">AI Confidence (Avg)</span>
<div className="text-2xl font-semibold text-slate-900 mt-1">92%</div>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
<span className="text-xs text-slate-500 font-medium">Open Tickets</span>
<div className="text-2xl font-semibold text-slate-900 mt-1">142</div>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">Ticket volume</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">Overdue tickets</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">Sentiment mix</span>
<span className="text-[10px] font-medium px-2 py-1 bg-slate-200 text-slate-700 rounded">Response workflow visibility</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="integrations">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:link-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Designed to work with your existing stack</h3>
<p className="text-sm text-slate-600 mb-6">EAMS connects smoothly with the tools you already use, keeping your data unified.</p>
<ul className="space-y-3 text-sm text-slate-700">
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Desk365 Sync (Tickets, Contacts, Companies)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Standard Email Channels</li>
<li className="flex items-center gap-2"><iconify-icon className="text-cyan-600" icon="solar:check-circle-linear"></iconify-icon> Ticket Workflows &amp; Categories</li>
<li className="flex items-center gap-2 text-slate-400"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Future: ERP, TMS, CRM integrations</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Built for controlled support operations</h3>
<p className="text-sm text-slate-600 mb-6">Enterprise-grade security and governance features keep your customer data safe.</p>
<div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-slate-700">
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:lock-password-linear"></iconify-icon> Roles &amp; Permissions</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:smartphone-2-linear"></iconify-icon> 2FA Supported</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:shield-warning-linear"></iconify-icon> Blacklist Mgt.</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:document-text-linear"></iconify-icon> Audit Logs</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:settings-linear"></iconify-icon> Controlled AI Prompts</div>
<div className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:checklist-linear"></iconify-icon> Workflow Logs</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative overflow-hidden" id="demo">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-cyan-900/30 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[600px] h-[600px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to make support faster, clearer, and more controlled?</h2>
<p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                EAMS helps your team move from manual email handling to AI-assisted support execution.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white rounded-lg shadow-xl hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white transition-all" href="#">
                Book a Demo
            </a>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center">
<span className="text-white tracking-tighter font-semibold text-sm">EA</span>
</div>
<div>
<span className="font-semibold tracking-tighter text-lg text-slate-900 block leading-none">EAMS</span>
<span className="text-xs text-slate-500">AI-assisted support execution for operational teams</span>
</div>
</div>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
<div className="mt-8 text-center md:text-left text-xs text-slate-400">
                © 2024 EAMS (EAM Management System). All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
