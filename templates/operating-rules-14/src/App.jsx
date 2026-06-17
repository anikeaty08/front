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
      

<header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-100">
<div className="text-base tracking-tighter font-semibold text-gray-900 uppercase">
            ROOTED
        </div>
<div className="text-xs text-gray-400 font-medium tracking-wide uppercase">
            Operating Rules
        </div>
</header>

<section className="max-w-7xl mx-auto px-6 py-32 border-b border-gray-100">
<div className="max-w-3xl">
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 mb-8">
                Department Operating Rules
            </h1>
<p className="text-2xl font-semibold tracking-tight text-gray-900 mb-16">
                If you own a task, client area, or role, you own the outcome.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-gray-100">
<div>
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">No passive waiting</h3>
<p className="text-base">Everyone is expected to be proactive, organised, and commercially aware.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:mute-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">No silent delay</h3>
<p className="text-base">Communicate blockers immediately. Work should never stall without visibility.</p>
</div>
<div>
<iconify-icon className="text-3xl text-gray-900 mb-4" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">No excuses</h3>
<p className="text-base">There is no excuse of "I was waiting on someone" without proper escalation.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-16">1. Rules for Everyone</h2>

<div className="mb-24">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">Ownership</h3>
<p className="text-base text-gray-500 mb-8 max-w-2xl">If something sits with you, you own it until complete. That means:</p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="border border-gray-200 rounded-xl p-6">
<iconify-icon className="text-2xl text-gray-900 mb-4" icon="solar:running-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-gray-900 font-medium">You chase what is needed</p>
</div>
<div className="border border-gray-200 rounded-xl p-6">
<iconify-icon className="text-2xl text-gray-900 mb-4" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-gray-900 font-medium">You keep momentum</p>
</div>
<div className="border border-gray-200 rounded-xl p-6">
<iconify-icon className="text-2xl text-gray-900 mb-4" icon="solar:flag-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-gray-900 font-medium">You flag blockers early</p>
</div>
<div className="border border-gray-200 rounded-xl p-6">
<iconify-icon className="text-2xl text-gray-900 mb-4" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm text-gray-900 font-medium">You update the client updates board</p>
</div>
</div>
</div>

<div className="mb-24">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">No Waiting</h3>
<p className="text-base text-gray-500 mb-8">You should never be waiting on something for more than <strong className="font-semibold text-gray-900">2 days</strong>. If you need something, follow this order. There is never an excuse for work silently stalling.</p>
<div className="flex flex-col lg:flex-row items-center gap-4">
<div className="w-full lg:flex-1 border border-gray-200 p-6 rounded-xl flex flex-col justify-center min-h-32">
<span className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-2">Step 1</span>
<h4 className="text-base font-semibold text-gray-900">Message them</h4>
</div>
<iconify-icon className="text-gray-300 text-2xl hidden lg:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-gray-300 text-2xl lg:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-full lg:flex-1 border border-gray-200 p-6 rounded-xl flex flex-col justify-center min-h-32">
<span className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-2">Step 2</span>
<h4 className="text-base font-semibold text-gray-900">Follow them up again</h4>
</div>
<iconify-icon className="text-gray-300 text-2xl hidden lg:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-gray-300 text-2xl lg:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-full lg:flex-1 border border-gray-200 p-6 rounded-xl flex flex-col justify-center min-h-32">
<span className="text-xs text-gray-400 font-medium tracking-wide uppercase mb-2">Step 3</span>
<h4 className="text-base font-semibold text-gray-900">Call them</h4>
</div>
<iconify-icon className="text-gray-300 text-2xl hidden lg:block" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-gray-300 text-2xl lg:hidden" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="w-full lg:flex-1 border border-gray-900 p-6 rounded-xl flex flex-col justify-center min-h-32 bg-gray-50">
<span className="text-xs text-gray-500 font-medium tracking-wide uppercase mb-2">Step 4</span>
<h4 className="text-base font-semibold text-gray-900">Escalate to Seb or Mark</h4>
</div>
</div>
</div>

<div className="mb-24">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Client Updates Board</h3>
<p className="text-base text-gray-500 mb-8 max-w-3xl">Everyone receives <strong className="font-semibold text-gray-900">one row</strong> on the client updates board. This board exists only so <strong className="font-semibold text-gray-900">Seb and Mark can see what is happening across clients at a high level</strong>. You will have your own individual working board through Leo where smaller tasks may be tracked if required. The client updates board is <strong className="font-semibold text-gray-900">not for task management</strong>, only for visibility.</p>
<div className="border border-gray-200 rounded-xl overflow-hidden">
<div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center justify-between">
<div className="text-sm font-semibold text-gray-900">High-Level Visibility Board</div>
<div className="text-xs text-gray-400 font-medium">Read Only</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-gray-100">
<th className="px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wide">Team Member</th>
<th className="px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wide">Client</th>
<th className="px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wide">Status / Blocker</th>
<th className="px-6 py-4 text-xs font-medium text-gray-400 uppercase tracking-wide">Last Updated</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-gray-50">
<td className="px-6 py-4 text-sm font-medium text-gray-900">1 Row Per Person</td>
<td className="px-6 py-4 text-sm text-gray-500">Client A</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border border-gray-200 text-gray-600">
                                        On Track
                                    </span>
</td>
<td className="px-6 py-4 text-sm text-gray-400">Today</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Commercial Awareness</h3>
<p className="text-base text-gray-500 mb-8 max-w-3xl">Everyone is expected to understand the commercial reality. You may be questioned on this by <strong className="font-semibold text-gray-900">Seb or Mark</strong>.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">What the client is paying for</h4>
<p className="text-sm text-gray-500">The core value and deliverable.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Scope boundaries</h4>
<p className="text-sm text-gray-500"><strong className="font-semibold text-gray-900">Exactly</strong> what we are being paid for and what we are not.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:user-id-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Your standing in scope</h4>
<p className="text-sm text-gray-500">Where your specific role fits within the broader project.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Client KPI</h4>
<p className="text-sm text-gray-500">The primary metric defining success.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Output logic</h4>
<p className="text-sm text-gray-500">What is going out and why it matters.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4">
<iconify-icon className="text-xl text-gray-900 mt-1" icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Quarterly trajectory</h4>
<p className="text-sm text-gray-500">Where the client should be heading over the quarter.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100 bg-gray-50/50">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">2. Social Department Rules</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-gray-200 bg-white rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Calendar Deadline</h3>
<span className="text-xs font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">-5 Days</span>
</div>
<p className="text-sm text-gray-500 mb-6">The monthly content calendar must be submitted into <strong className="font-semibold text-gray-900">Monday.com no later than 5 days before the month starts</strong>.</p>
<div className="space-y-3">
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-gray-900 font-medium">Content pillars</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-gray-900 font-medium">Messaging direction</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-gray-900 font-medium">Captions</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon><span className="text-sm text-gray-900 font-medium">Post concepts</span></div>
</div>
</div>

<div className="border border-gray-200 bg-white rounded-xl p-8 shadow-sm">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Feedback Rounds</h3>
<span className="text-xs font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">48 Hours</span>
</div>
<p className="text-sm text-gray-500 mb-6">Clients receive <strong className="font-semibold text-gray-900">one round of feedback only</strong>. That feedback must be completed within <strong className="font-semibold text-gray-900">48 hours</strong>.</p>
<div className="border-t border-gray-100 pt-6 mt-auto">
<p className="text-sm text-gray-900 font-medium">After this round, the content moves forward.</p>
</div>
</div>

<div className="border border-gray-200 bg-white rounded-xl p-8 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-4">Quality Control</h3>
<p className="text-sm text-gray-500 mb-6">There is no tolerance for careless publishing. If content goes out with the following, it triggers a <strong className="font-semibold text-gray-900">performance review</strong>:</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-4">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-sm text-gray-900">Spelling mistakes</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-sm text-gray-900">Bad grammar</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-sm text-gray-900">Incorrect credits</span></div>
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-sm text-gray-900">Formatting errors</span></div>
<div className="flex items-center gap-2 col-span-2"><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><span className="text-sm text-gray-900">Obvious quality issues</span></div>
</div>
</div>

<div className="border border-gray-200 bg-white rounded-xl p-8 shadow-sm flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-4">Strategic Understanding</h3>
<p className="text-sm text-gray-500 mb-6">This role is not just about posting content. Social team members are expected to understand:</p>
<ul className="space-y-3 mb-6">
<li className="flex items-start gap-3"><span className="text-gray-400 mt-0.5">→</span><span className="text-sm text-gray-900 font-medium">What is being posted</span></li>
<li className="flex items-start gap-3"><span className="text-gray-400 mt-0.5">→</span><span className="text-sm text-gray-900 font-medium">Why it is being posted</span></li>
<li className="flex items-start gap-3"><span className="text-gray-400 mt-0.5">→</span><span className="text-sm text-gray-900 font-medium">What KPI it supports</span></li>
<li className="flex items-start gap-3"><span className="text-gray-400 mt-0.5">→</span><span className="text-sm text-gray-900 font-medium">Where the account is heading long term</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">3. Paid Media Department Rules</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="flex flex-col">
<div className="pb-6 border-b border-gray-200 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Access Rule</h3>
<p className="text-sm text-gray-500">You have <strong className="font-semibold text-gray-900">7 days from the brief</strong> to secure all required access.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="text-sm text-gray-900 flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Meta Ads</li>
<li className="text-sm text-gray-900 flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Google Ads</li>
<li className="text-sm text-gray-900 flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Analytics and tracking</li>
<li className="text-sm text-gray-900 flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:key-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Any other platform access</li>
</ul>
<div className="mt-auto bg-gray-50 p-5 rounded-lg border border-gray-200">
<p className="text-xs font-semibold text-gray-900 uppercase tracking-wide mb-2">If access is delayed:</p>
<p className="text-sm text-gray-600 mb-1">• Organise a call with the client</p>
<p className="text-sm text-gray-600 mb-1">• Escalate if needed</p>
<p className="text-sm text-gray-600 font-medium">• Do not let this drift</p>
</div>
</div>

<div className="flex flex-col">
<div className="pb-6 border-b border-gray-200 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">No Waiting</h3>
<p className="text-sm text-gray-500">Passive waiting is not acceptable. If your role is blocked due to lack of communication, you must act.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-sm font-semibold text-gray-900">1</div>
<p className="text-sm text-gray-900 mt-1.5">Follow up</p>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-sm font-semibold text-gray-900">2</div>
<p className="text-sm text-gray-900 mt-1.5">Organise a Google Meet if necessary</p>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-sm font-semibold text-gray-900">3</div>
<p className="text-sm text-gray-900 mt-1.5">Be client-facing where appropriate <span className="text-gray-500">(with Seb’s permission)</span></p>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="pb-6 border-b border-gray-200 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Funnel Responsibility</h3>
<p className="text-sm text-gray-500">Paid media team members are responsible for understanding the <strong className="font-semibold text-gray-900">full funnel</strong>, not only the ads.</p>
</div>
<p className="text-sm text-gray-900 mb-4 font-medium">This triggers a performance review if something goes live where:</p>
<ul className="space-y-3 border-l-2 border-gray-200 pl-4">
<li className="text-sm text-gray-600">The funnel is incorrect</li>
<li className="text-sm text-gray-600">The journey is broken</li>
<li className="text-sm text-gray-600">Tracking is incorrect</li>
<li className="text-sm text-gray-600">The lead flow is wrong</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100 bg-gray-50/50">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">4. Website Department Rules</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-4 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Access and Asset Rule</h3>
<span className="text-xs font-semibold text-gray-900 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm">Within 7 Days</span>
</div>
<p className="text-base text-gray-500 mb-8">You must secure everything required for the build. The objective is <strong className="font-semibold text-gray-900">zero blockers later in the project</strong>.</p>
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">Page-by-page copy</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:gallery-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">Imagery</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">CMS access</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:cloud-storage-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">Hosting access</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">DNS access</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-gray-400 text-lg" icon="solar:align-bottom-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">Form requirements</span></div>
<div className="flex items-center gap-3 col-span-1 md:col-span-2"><iconify-icon className="text-gray-400 text-lg" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon> <span className="text-sm text-gray-900 font-medium">Technical credentials</span></div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">Template Selection</h3>
<p className="text-base text-gray-500 mb-8">Lazy template selection is not acceptable. Templates must be selected with clear reasoning. You must be able to explain:</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-semibold text-gray-900">Mobile &amp; Desktop suitability</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-semibold text-gray-900">UX logic</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-semibold text-gray-900">Why it fits the brief</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
<div>
<p className="text-sm font-semibold text-gray-900">How the copy and interface work together</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-12">5. CRM &amp; AI Department Rules</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="border border-gray-200 rounded-xl p-6">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-gray-900" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-gray-900">Daily System Checks</h3>
</div>
<p className="text-sm text-gray-500 mb-6">You are expected to check systems <strong className="font-semibold text-gray-900">every day</strong>.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">Lead flow</span>
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">Automations</span>
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">Notifications</span>
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">CRM health</span>
<span className="text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">AI agent performance</span>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-gray-900" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-gray-900">Early Checks</h3>
</div>
<span className="text-xs font-semibold text-gray-900 bg-gray-100 px-2.5 py-1 rounded-md">Within 7 Days</span>
</div>
<p className="text-sm text-gray-500 mb-6">Confirm whether the client has the capabilities required for the setup. Any limitations must be flagged early.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium text-gray-600 border border-gray-200 px-2.5 py-1 rounded-md">WhatsApp</span>
<span className="text-xs font-medium text-gray-600 border border-gray-200 px-2.5 py-1 rounded-md">Instagram</span>
<span className="text-xs font-medium text-gray-600 border border-gray-200 px-2.5 py-1 rounded-md">CRM compatibility</span>
<span className="text-xs font-medium text-gray-600 border border-gray-200 px-2.5 py-1 rounded-md">Integration feasibility</span>
</div>
</div>

<div className="border border-gray-200 rounded-xl p-6">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-gray-900" icon="solar:branching-paths-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-semibold text-gray-900">Funnel Understanding</h3>
</div>
<p className="text-sm text-gray-500 mb-4">You are expected to understand:</p>
<ul className="space-y-2">
<li className="text-sm text-gray-900 flex items-center gap-2"><div className="w-1 h-1 bg-gray-300 rounded-full"></div> How the funnel works</li>
<li className="text-sm text-gray-900 flex items-center gap-2"><div className="w-1 h-1 bg-gray-300 rounded-full"></div> What the KPI is</li>
<li className="text-sm text-gray-900 flex items-center gap-2"><div className="w-1 h-1 bg-gray-300 rounded-full"></div> Where leads come from &amp; go</li>
<li className="text-sm text-gray-900 flex items-center gap-2"><div className="w-1 h-1 bg-gray-300 rounded-full"></div> How lead management can improve</li>
</ul>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
<h3 className="text-base font-semibold text-gray-900 mb-2">Escalation Rule</h3>
<p className="text-sm text-gray-600">If there is a problem, raise it with <strong className="font-semibold text-gray-900">Seb first</strong>, then escalate to the client if required.</p>
</div>
<div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
<h3 className="text-base font-semibold text-gray-900 mb-2">No Waiting</h3>
<p className="text-sm text-gray-600">Again, no one should be waiting on something for more than <strong className="font-semibold text-gray-900">2 days</strong> without escalation. Follow the escalation rule if needed.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-b border-gray-100">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">6. Performance &amp; Accountability</h2>
<p className="text-lg text-gray-500 mb-12">A performance review may be triggered by any of the following occurrences:</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12">
<div className="flex items-start gap-4 border-b border-gray-100 pb-4">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Careless publishing errors</span>
</div>
<div className="flex items-start gap-4 border-b border-gray-100 pb-4">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Broken funnels going live</span>
</div>
<div className="flex items-start gap-4 border-b border-gray-100 pb-4">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Repeated delays without escalation</span>
</div>
<div className="flex items-start gap-4 border-b border-gray-100 pb-4 lg:border-0 lg:pb-0">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Poor attention to detail</span>
</div>
<div className="flex items-start gap-4 border-b border-gray-100 pb-4 md:border-0 md:pb-0">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Lack of ownership</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-gray-400 mt-0.5" icon="solar:danger-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-base text-gray-900 font-medium">Failure to update the client board</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32 text-center">
<h2 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">7. The Rooted Standard</h2>
<div className="max-w-3xl mx-auto mb-16">
<p className="text-lg text-gray-500 mb-8 text-left md:text-center">At Rooted, everyone is expected to:</p>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Take initiative</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Chase what is needed</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Own responsibilities</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Understand clients commercially</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Keep boards updated</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Escalate early</span>
<span className="px-4 py-2 border border-gray-200 rounded-full text-sm font-medium text-gray-900 shadow-sm">Move quickly without being careless</span>
</div>
</div>
<div className="py-12 border-t border-b border-gray-100 max-w-4xl mx-auto mb-16">
<p className="text-sm text-gray-400 uppercase tracking-widest mb-4">The standard is:</p>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
                High ownership, high speed, high clarity.
            </h3>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<button className="bg-gradient-to-r from-[#FF7E67] to-[#FFB48F] text-white px-8 py-3 rounded-full font-medium text-sm shadow-sm transition-opacity hover:opacity-90 flex items-center gap-2">
                Generate 1-Page Principles
                <iconify-icon className="text-lg" icon="solar:document-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full font-medium text-sm text-gray-600 border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
                Download Full SOP
            </button>
</div>
</section>

    </>
  );
}
