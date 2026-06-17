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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ strokeWidth: 1.5 });

      // Handle "Add" minimal UX (text/state only)
      document.querySelectorAll('[data-action="add-contact"]').forEach(btn => {
        btn.addEventListener('click', () => {
          btn.innerHTML = '<i data-lucide="check" class="w-3.5 h-3.5"></i>Added';
          btn.classList.remove('bg-neutral-900','text-white','hover:opacity-90');
          btn.classList.add('bg-emerald-50','text-emerald-700','border','border-emerald-200','cursor-default');
          lucide.createIcons({ strokeWidth: 1.5 });
        });
      });

      // Older messages toggle (main)
      const toggleBtn = document.querySelector('[data-action="toggle-older"]');
      const olderContent = document.getElementById('older-content');
      const chevron = toggleBtn ? toggleBtn.querySelector('[data-lucide="chevron-down"]') : null;
      const stackPreview = document.querySelector('[data-role="stack-preview"]'); // removed; safe check
      if (toggleBtn && olderContent) {
        toggleBtn.addEventListener('click', () => {
          const isOpen = olderContent.classList.toggle('hidden') === false;
          if (stackPreview) stackPreview.classList.toggle('hidden', isOpen);
          if (chevron) chevron.classList.toggle('rotate-180', isOpen);
          toggleBtn.setAttribute('aria-expanded', String(isOpen));
        });
      }

      // Inner collapsibles in older content
      document.querySelectorAll('[data-collapse-target]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-collapse-target');
          const panel = document.getElementById(id);
          const icon = btn.querySelector('[data-lucide="chevron-down"]');
          if (panel) {
            const isOpen = panel.classList.toggle('hidden') === false;
            if (icon) icon.classList.toggle('rotate-180', isOpen);
          }
        });
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
      

<aside className="w-64 shrink-0 border-r border-neutral-200 flex flex-col justify-between px-6 py-6 animate-fade-in" style={{animationDelay: '0.1s', opacity: '0'}}>
<div>
<div className="text-xs font-semibold tracking-widest text-teal-600 mb-8">[UBIK]</div>

<nav className="space-y-4">

<button className="w-full text-left group">
<div className="border border-neutral-200 rounded-md p-4 flex items-start gap-3 hover:shadow-sm transition-shadow duration-300">
<i className="w-5 h-5 shrink-0 group-hover:text-purple-500 transition-colors duration-300" data-lucide="command"></i>
<div>
<h4 className="text-sm font-semibold uppercase">Ask Anything</h4>
<p className="text-xs opacity-70">Command Interface</p>
</div>
</div>
</button>

<button className="w-full text-left">
<div className="border border-transparent rounded-md p-4 flex items-start gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white shadow-md">
<i className="w-5 h-5 shrink-0" data-lucide="inbox"></i>
<div>
<h4 className="text-sm font-semibold uppercase">Inbox</h4>
<p className="text-xs opacity-90">Prioritized Signals</p>
</div>
</div>
</button>

<button className="w-full text-left group">
<div className="border border-neutral-200 rounded-md p-4 flex items-start gap-3 hover:shadow-sm transition-shadow duration-300">
<i className="w-5 h-5 shrink-0 group-hover:text-indigo-500 transition-colors duration-300" data-lucide="users"></i>
<div>
<h4 className="text-sm font-semibold uppercase">People</h4>
<p className="text-xs opacity-70">Relationship Engine</p>
</div>
</div>
</button>

<button className="w-full text-left group">
<div className="border border-neutral-200 rounded-md p-4 flex items-start gap-3 hover:shadow-sm transition-shadow duration-300">
<i className="w-5 h-5 shrink-0 group-hover:text-cyan-500 transition-colors duration-300" data-lucide="brain"></i>
<div>
<h4 className="text-sm font-semibold uppercase">Cognitive</h4>
<p className="text-xs opacity-70">Load &amp; Insights</p>
</div>
</div>
</button>
</nav>
</div>

<div className="pt-8 animate-fade-in" style={{animationDelay: '0.5s', opacity: '0'}}>
<div className="w-full h-1 rounded-full bg-neutral-200 overflow-hidden">
<div className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400" style={{width: '78%'}}></div>
</div>
<div className="text-[10px] uppercase tracking-wide mt-2">Cognitive Load: 78%</div>
</div>
</aside>

<div className="flex-1 flex overflow-hidden animate-fade-in" style={{animationDelay: '0.3s', opacity: '0'}}>

<section className="flex-1 overflow-y-auto p-6">

<div className="flex justify-between items-center mb-6">
<h1 className="text-xl font-semibold tracking-tight">WEEKLY NEWSLETTER: INDUSTRY TRENDS</h1>
<button className="flex items-center text-neutral-600 hover:text-neutral-900 text-sm">
<i className="w-4 h-4 mr-1" data-lucide="arrow-left"></i>
          Back
        </button>
</div>
<div className="max-w-3xl space-y-6">

<div className="border border-neutral-200 rounded-lg overflow-hidden" id="older-stack">
<button aria-expanded="false" className="w-full bg-neutral-50 px-4 py-2 flex items-center justify-between" data-action="toggle-older">
<div className="flex items-center gap-2 text-xs font-medium text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="history"></i>
<span>Older messages in thread (3)</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 transition-transform duration-200" data-lucide="chevron-down"></i>
</div>
</button>

<div className="p-4 space-y-3 hidden" id="older-content">

<div className="border border-neutral-200 rounded-md overflow-hidden">
<button className="w-full px-3 py-2 bg-white flex items-center justify-between text-left" data-collapse-target="oc-1">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="message-square-text"></i>
<span className="font-medium">Sarah: Initial budget outline</span>
</div>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden border-t border-neutral-200 px-3 py-3" id="oc-1">
<div className="flex items-end justify-end gap-2">
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Sarah Chen</span>
<span>•</span>
<time>Mon 9:12 AM</time>
</header>
<p className="leading-relaxed text-sm">
                        Sharing the initial budget outline. Digital split at 65%, brand at 20%, lifecycle at 15%. Feedback welcome.
                      </p>
</div>
<div className="mt-1 text-right text-[11px] text-neutral-500">Delivered</div>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">SC</div>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-md overflow-hidden">
<button className="w-full px-3 py-2 bg-white flex items-center justify-between text-left" data-collapse-target="oc-2">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="message-square-text"></i>
<span className="font-medium">Alex: Benchmarks added</span>
</div>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden border-t border-neutral-200 px-3 py-3" id="oc-2">
<div className="flex items-end gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">AL</div>
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Alex Lee</span>
<span>•</span>
<time>Mon 10:03 AM</time>
</header>
<p className="leading-relaxed text-sm">
                        Added spend benchmarks and CPM trends to the sheet. See tab "Benchmarks" rows 20–45.
                      </p>
</div>
<div className="mt-1 text-[11px] text-neutral-500">Seen by you</div>
</div>
</div>
</div>
</div>

<div className="border border-neutral-200 rounded-md overflow-hidden">
<button className="w-full px-3 py-2 bg-white flex items-center justify-between text-left" data-collapse-target="oc-3">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-3.5 h-3.5" data-lucide="message-square-text"></i>
<span className="font-medium">Mark: ROI sensitivity notes</span>
</div>
<i className="w-4 h-4 transition-transform" data-lucide="chevron-down"></i>
</button>
<div className="hidden border-t border-neutral-200 px-3 py-3" id="oc-3">
<div className="flex items-end gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">MR</div>
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Mark Rivera</span>
<span>•</span>
<time>Mon 1:17 PM</time>
</header>
<p className="leading-relaxed text-sm">
                        Sensitivity at cells D18–F24 now includes CPC variance. Happy to review assumptions if helpful.
                      </p>
</div>
<div className="mt-1 text-[11px] text-neutral-500">Seen by you</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">

<div className="flex items-end gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">MR</div>
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Mark Rivera</span>
<span>•</span>
<time>5 min ago</time>
</header>
<p className="leading-relaxed text-sm">
                  Following up on ROI assumptions. If we push digital to 70%, projected lift holds with a 6% MoM variance.
                </p>
</div>
<div className="mt-1 text-[11px] text-neutral-500">Seen by you</div>
</div>
</div>

<div className="flex items-end justify-end gap-2">
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm text-neutral-900">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Sarah Chen</span>
<span>•</span>
<time>2 min ago</time>
</header>
<p className="leading-relaxed mb-3 text-sm">
                  Hi team,<br/><br/>
                  I need urgent approval for the Q4 marketing budget allocation. The proposal includes increased digital spend and new campaign initiatives.<br/><br/>
                  Please review the attached budget breakdown and let me know your thoughts by EOD.<br/><br/>
                  Best,<br/>
                  Sarah
                </p>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-md px-3 py-2 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200">
<div className="flex items-center space-x-2">
<i className="w-3 h-3" data-lucide="file-spreadsheet"></i>
<span className="font-medium">Q4_Marketing_Budget.xlsx</span>
</div>
<span className="text-neutral-600">2.4MB</span>
</div>
<div className="flex items-center justify-between rounded-md px-3 py-2 text-xs bg-neutral-50 text-neutral-700 border border-neutral-200">
<div className="flex items-center space-x-2">
<i className="w-3 h-3" data-lucide="file-text"></i>
<span className="font-medium">Campaign_Strategy.pdf</span>
</div>
<span className="text-neutral-600">1.8MB</span>
</div>
</div>
</div>
<div className="mt-1 text-right text-[11px] text-neutral-500">Delivered</div>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">SC</div>
</div>

<div className="flex items-end justify-end gap-2">
<div>
<div className="max-w-[80vw] md:max-w-[560px] rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm text-neutral-900">
<header className="flex items-center gap-2 text-[11px] text-neutral-600 mb-1">
<span className="font-medium text-neutral-900">Sarah Chen</span>
<span>•</span>
<time>Just now</time>
</header>
<p className="leading-relaxed text-sm">
                  Adding context: digital split prioritizes performance channels with highest ROAS in the last 90 days.
                </p>
</div>
<div className="mt-1 text-right text-[11px] text-neutral-500">Delivered</div>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-neutral-200 text-xs font-medium shrink-0">SC</div>
</div>
</div>

<div className="rounded-lg">
<div className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white rounded-t-lg px-4 py-3">
<div className="flex items-center space-x-2 text-xs font-semibold tracking-wide uppercase">
<i className="w-3 h-3" data-lucide="sparkles"></i>
<span>Ubik AI Analysis</span>
</div>
</div>
<div className="border border-t-0 border-neutral-200 rounded-b-lg p-4 bg-neutral-900 text-white">
<p className="text-xs font-semibold mb-2">Key Action Items Across Thread:</p>
<ul className="list-disc list-inside space-y-1 text-sm">
<li>Budget approval required by EOD (URGENT)</li>
<li>Review ROI projections in attached spreadsheet</li>
<li>Schedule follow-up with marketing team</li>
<li>Address concerns about digital spend allocation</li>
</ul>
<hr className="my-3 border-neutral-700"/>
<ul className="space-y-1 text-sm">
<li><span className="font-semibold">Risk Level:</span> High</li>
<li><span className="font-semibold">Thread Length:</span> 2 messages</li>
<li><span className="font-semibold">Decision Impact:</span> $2.3M</li>
<li><span className="font-semibold">Confidence:</span> 92% match to previous</li>
</ul>
</div>
</div>

<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-600">Smart Response Options:</p>
<button className="flex items-start w-full border border-neutral-200 rounded-md px-3 py-2 hover:bg-neutral-50 text-left">
<i className="w-4 h-4 text-green-500 mt-0.5 mr-2" data-lucide="check-circle"></i>
<span className="text-sm">"Approved. Please proceed with Q4 allocation as outlined."</span>
</button>
<button className="flex items-start w-full border border-neutral-200 rounded-md px-3 py-2 hover:bg-neutral-50 text-left">
<i className="w-4 h-4 text-rose-500 mt-0.5 mr-2" data-lucide="help-circle"></i>
<span className="text-sm">"Need additional ROI breakdown before approval."</span>
</button>
<button className="flex items-start w-full border border-neutral-200 rounded-md px-3 py-2 hover:bg-neutral-50 text-left">
<i className="w-4 h-4 text-neutral-500 mt-0.5 mr-2" data-lucide="message-circle"></i>
<span className="text-sm">"Let's discuss this in our next meeting."</span>
</button>

<div className="pt-1 flex flex-wrap gap-2">
<button className="flex w-full md:flex-1 items-center gap-2 text-sm px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="bell"></i>
              Remind Me
            </button>
<button className="flex w-full md:flex-1 items-center gap-2 text-sm px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="share-2"></i>
              Delegate
            </button>
<button className="flex w-full md:flex-1 items-center gap-2 text-sm px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50">
<i className="w-3.5 h-3.5" data-lucide="file-cog"></i>
              Analyze Files
            </button>
</div>
</div>

<div className="border-top border-neutral-200 pt-4">
<div className="flex items-end space-x-2">
<textarea className="flex-1 resize-none border border-neutral-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm" placeholder="Type your response..." rows="2"></textarea>
<button className="inline-flex items-center justify-center h-10 w-14 rounded-md bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 text-white hover:opacity-90">
<i className="w-4 h-4" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</section>

<aside className="w-96 border-l border-neutral-200 overflow-y-auto p-6">
<h2 className="text-xs font-semibold uppercase tracking-wide text-neutral-600 mb-4">
        Contextual Intelligence
      </h2>

<section className="mb-6">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">People &amp; Company</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">

<div className="px-3 py-3 flex items-center justify-between">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-medium">SC</div>
<div>
<div className="text-sm font-medium text-neutral-900">Sarah Chen</div>
<div className="text-xs text-neutral-600">VP Marketing • Acme Corp</div>
<div className="text-xs text-neutral-500">sarah.chen@acme.co</div>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md bg-neutral-900 text-white hover:opacity-90" data-action="add-contact">
<i className="w-3.5 h-3.5" data-lucide="user-plus"></i>
              Add
            </button>
</div>

<div className="px-3 py-3 flex items-start justify-between">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="building-2"></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">Acme Corp</div>
<div className="text-xs text-neutral-600">Marketing &amp; Advertising</div>
<div className="text-xs text-neutral-500">acme.co</div>
</div>
</div>

<div className="flex items-center -space-x-2">
<div className="w-5 h-5 rounded-full bg-neutral-200 border border-white flex items-center justify-center text-[10px]">JD</div>
<div className="w-5 h-5 rounded-full bg-neutral-300 border border-white flex items-center justify-center text-[10px]">AL</div>
<div className="w-5 h-5 rounded-full bg-neutral-400 border border-white flex items-center justify-center text-[10px]">MR</div>
<div className="w-5 h-5 rounded-full bg-neutral-100 border border-white flex items-center justify-center text-[10px] text-neutral-700">7+</div>
</div>
</div>
</div>
</section>

<section className="mb-6">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">Connected Files</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">
<div className="flex items-center justify-between px-3 py-2 text-sm">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="file-spreadsheet"></i>
<span>Q4_Budget_Analysis.xlsx</span>
</div>
<span className="text-xs text-neutral-500">3 emails</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="file-text"></i>
<span>Engineering_Roadmap.pdf</span>
</div>
<span className="text-xs text-neutral-500">shared</span>
</div>
</div>
</section>

<section className="mb-6">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">Related Conversations</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">
<div className="px-3 py-2 text-sm">
            Budget Discussion Thread<br/>
<span className="text-xs text-neutral-500">5 participants • Last activity 2 hrs ago</span>
</div>
<div className="px-3 py-2 text-sm">
            Q4 Planning Meeting<br/>
<span className="text-xs text-neutral-500">Follow-up required</span>
</div>
</div>
</section>

<section className="mb-6">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">Project Context</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">
<div className="flex items-center justify-between px-3 py-2 text-sm">
<span>Q4 Budget Planning</span>
<span className="text-xs font-medium text-emerald-600">Active</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm">
<span>Engineering Expansion</span>
<span className="text-xs font-medium text-sky-600">Planning</span>
</div>
</div>
</section>

<section className="mb-6">
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">Smart Nudges</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">
<div className="px-3 py-2 text-sm flex items-start space-x-2">
<i className="w-4 h-4 text-red-500 mt-0.5" data-lucide="alert-circle"></i>
<span>
<span className="font-medium">Urgent Approval Needed</span><br/>
              Sarah's budget request blocks 3 decisions
            </span>
</div>
<div className="px-3 py-2 text-sm flex items-start space-x-2">
<i className="w-4 h-4 text-amber-500 mt-0.5" data-lucide="users"></i>
<span>
<span className="font-medium">Delegate to Team</span><br/>
              Mike's headcount proposal needs review
            </span>
</div>
<div className="px-3 py-2 text-sm flex items-start space-x-2">
<i className="w-4 h-4 text-indigo-500 mt-0.5" data-lucide="file-bar-chart"></i>
<span>
<span className="font-medium">Create Vendor Report</span><br/>
              Alex's contract analysis ready for summary
            </span>
</div>
</div>
</section>

<section>
<h3 className="text-xs font-medium uppercase tracking-wide text-neutral-600 mb-2">Active Auto-Labels</h3>
<div className="border border-neutral-200 rounded-lg divide-y divide-neutral-200">
<div className="flex items-center justify-between px-3 py-2 text-sm">
            Important Decisions
            <span className="text-xs text-neutral-500">5 today</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm">
            Budget Related
            <span className="text-xs text-neutral-500">3 today</span>
</div>
<div className="flex items-center justify-between px-3 py-2 text-sm">
            Vendor Communications
            <span className="text-xs text-neutral-500">2 today</span>
</div>
</div>
</section>
</aside>
</div>
<style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
  </style>


    </>
  );
}
