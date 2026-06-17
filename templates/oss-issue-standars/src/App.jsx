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



        const templates = {
            task: `## Parent Issue
Parent: #

## Context
<!-- Why is this change needed? -->


## Scope

### ✅ In Scope
- 

### ❌ Out of Scope
- 

## Implementation Checklist
- [ ] 
- [ ] 

## Acceptance Criteria
- [ ] 
- [ ] 

## Technical Notes (Optional)
**Design:** 
**Docs:** `,

            bug: `## Context
<!-- What problem does this bug cause? -->


## Current Behavior
<!-- What is happening right now? -->


## Steps to Reproduce
1. 
2. 
3. 

## Expected Behavior
<!-- What should happen? -->


## Implementation Checklist
- [ ] 
- [ ] 

## Technical Notes
**Logs:** 
**Suspect file:** `,

            epic: `## Overview
<!-- 2–3 sentence executive summary -->


## Problem Statement
<!-- What problem does this solve? Include data if possible -->


## Goals
- 
- 

## Non-Goals
- 
- 

## Linked Issues

### Phase 1
- [ ] # - [AREA][TASK] Description
- [ ] # - [AREA][TASK] Description

### Phase 2
- [ ] # - [AREA][TASK] Description

## Open Questions
- [ ] 
- [ ] `
        };

        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.querySelector('span:last-child').textContent = message;
            toast.classList.remove('opacity-0', 'translate-y-4');
            toast.classList.add('opacity-100', 'translate-y-0');
            
            setTimeout(() => {
                toast.classList.remove('opacity-100', 'translate-y-0');
                toast.classList.add('opacity-0', 'translate-y-4');
            }, 2500);
        }

        function copyTemplate(type) {
            navigator.clipboard.writeText(templates[type]);
            const names = { task: 'Task', bug: 'Bug', epic: 'Epic' };
            showToast(`${names[type]} template copied`);
        }
    
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
      

<nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-gray-900">Issue Standards</span>
<span className="text-xs text-gray-400 font-medium">v0.1</span>
</div>
<div className="flex items-center gap-4 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#why">Why</a>
<a className="hover:text-gray-900 transition-colors" href="#templates">Templates</a>
<a className="hover:text-gray-900 transition-colors" href="#labels">Labels</a>
</div>
</div>
</nav>
<main className="max-w-3xl mx-auto px-6 py-12 space-y-16">

<header className="text-center space-y-4">
<h1 className="text-3xl font-semibold tracking-tight text-gray-900">Issue Standardization</h1>
<p className="text-base text-gray-500 leading-relaxed max-w-lg mx-auto">
                A practical guide to documenting issues clearly and consistently in Open Source projects.
            </p>
</header>

<section className="space-y-8" id="why">
<div className="space-y-3">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Why standardize?</h2>
<p className="text-sm text-gray-500 leading-relaxed">
                    In open source projects, issues are the main communication channel between maintainers, contributors, and users. A poorly documented issue creates friction, unnecessary questions, and duplicated work.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-red-500 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold text-gray-900">Without a standard</span>
</div>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
<span>Vague issues: "Login doesn't work"</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
<span>Missing context, multiple follow-up questions</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
<span>Contributors don't know where to start</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
<span>Undefined scope, PRs get rejected</span>
</li>
</ul>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold text-gray-900">With a standard</span>
</div>
<ul className="space-y-3 text-sm text-gray-600">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
<span>Clear issues with context and steps</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
<span>Contributors can start immediately</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
<span>Defined scope, less back-and-forth</span>
</li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></span>
<span>PRs aligned with expectations</span>
</li>
</ul>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg p-6">
<h3 className="text-sm font-semibold text-gray-900 mb-4">Checklist for a good issue</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:file-text" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Clear context</p>
<p className="text-xs text-gray-500">Why does this issue exist?</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:target" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Defined scope</p>
<p className="text-xs text-gray-500">What’s in and what’s out</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:list-checks" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8m-8 7h8m-8 7h8M3 17l2 2l4-4M3 7l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Acceptance criteria</p>
<p className="text-xs text-gray-500">How do we know it's done?</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:git-branch" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></g></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Reproducibility</p>
<p className="text-xs text-gray-500">Clear steps for bugs</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:link" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">References</p>
<p className="text-xs text-gray-500">Links to docs, designs, related issues</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-blue-600 iconify--lucide" data-icon="lucide:tags" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.172 2a2 2 0 0 1 1.414.586l6.71 6.71a2.4 2.4 0 0 1 0 3.408l-4.592 4.592a2.4 2.4 0 0 1-3.408 0l-6.71-6.71A2 2 0 0 1 6 9.172V3a1 1 0 0 1 1-1zM2 7v6.172a2 2 0 0 0 .586 1.414l6.71 6.71a2.4 2.4 0 0 0 3.191.193"></path><circle cx="10.5" cy="6.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Appropriate labels</p>
<p className="text-xs text-gray-500">Type, area, priority, status</p>
</div>
</div>
</div>
</div>
</section>

<hr className="border-gray-200"/>

<section className="space-y-8" id="templates">
<div className="space-y-3">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Issue Types</h2>
<p className="text-sm text-gray-500 leading-relaxed">
                    Each issue type has a specific purpose. Use the right template to keep your project consistent.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<a className="bg-white p-5 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-sm transition-all group" href="#task-template">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-sm font-semibold text-gray-900">TASK</span>
</div>
<p className="text-sm text-gray-500">New feature, improvement, or technical task.</p>
</a>

<a className="bg-white p-5 rounded-lg border border-gray-200 hover:border-red-300 hover:shadow-sm transition-all group" href="#bug-template">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-semibold text-gray-900">BUG</span>
</div>
<p className="text-sm text-gray-500">Error, crash, or unexpected behavior.</p>
</a>

<a className="bg-white p-5 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm transition-all group" href="#epic-template">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-sm font-semibold text-gray-900">EPIC</span>
</div>
<p className="text-sm text-gray-500">Large initiative that groups multiple tasks.</p>
</a>
</div>
</section>

<hr className="border-gray-200"/>

<section className="space-y-8" id="task-template">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-500"></div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Task Template</h2>
</div>

<div className="relative group">
<div className="absolute right-2 top-2 z-10">
<button className="group-hover:opacity-100 transition-opacity flex hover:bg-gray-50 text-xs font-medium bg-white/90 opacity-0 border-gray-200 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur gap-x-1.5 gap-y-1.5 items-center" onclick="copyTemplate('task')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:copy" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path className="" d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg> Copy
                    </button>
</div>
<div className="bg-gray-900 rounded-lg overflow-hidden">
<div className="px-4 py-4 bg-gray-800 border-b border-gray-700 text-xs text-gray-400 font-mono flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                        .github/ISSUE_TEMPLATE/task.md
                    </div>
<pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed" id="task-code"><code>## Parent Issue
Parent: #

## Context
&lt;!-- Why is this change needed? --&gt;


## Scope

### ✅ In Scope
- 

### ❌ Out of Scope
- 

## Implementation Checklist
- [ ] 
- [ ] 

## Acceptance Criteria
- [ ] 
- [ ] 

## Technical Notes (Optional)
**Design:** 
**Docs:** </code></pre>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Preview</h3>
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">

<div className="px-6 py-4 border-b border-gray-100">
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold text-gray-900">Implement zap confirmation modal</h4>
<div className="flex items-center gap-2 mt-2">
<span className="gh-label" style={{backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff'}}>type: task</span>
<span className="gh-label" style={{backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b'}}>area: frontend</span>
</div>
</div>
<span className="text-xs text-gray-400">#847</span>
</div>
</div>

<div className="px-6 py-5 text-sm preview-markdown">
<h3>Parent Issue</h3>
<p><a href="#">#801</a> - Task Parent</p>
<h3>Context</h3>
<p>Users abandon the payment flow at the confirmation step due to unclear feedback. Analytics show 34% drop-off. We need immediate visual feedback when a zap is processing.</p>
<h3>Scope</h3>
<p></p>
<ul>
<li>Modal component with loading/success/error states</li>
<li>Retry button for failed payments</li>
</ul>
<p></p>
<ul>
<li>Backend payment logic</li>
<li>Sound effects</li>
</ul>
<h3>Implementation Checklist</h3>
<ul style={{listStyle: 'none', paddingLeft: '0'}}>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> Create ZapModal base component</li>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> Add loading spinner animation</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Implement success state</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Add error state with retry</li>
</ul>
<h3>Acceptance Criteria</h3>
<ul style={{listStyle: 'none', paddingLeft: '0'}}>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Modal appears within 100ms of zap initiation</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> User can retry without closing modal</li>
</ul>
</div>
</div>
</div>
</section>

<hr className="border-gray-200"/>

<section className="space-y-8" id="bug-template">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Bug Template</h2>
</div>

<div className="relative group">
<div className="absolute right-2 top-2 z-10">
<button className="bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 hover:bg-gray-50" onclick="copyTemplate('bug')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:copy" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg> Copy
                    </button>
</div>
<div className="bg-gray-900 rounded-lg overflow-hidden">
<div className="px-4 py-4 bg-gray-800 border-b border-gray-700 text-xs text-gray-400 font-mono flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                        .github/ISSUE_TEMPLATE/bug.md
                    </div>
<pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed" id="bug-code"><code>## Context
&lt;!-- What problem does this bug cause? --&gt;


## Current Behavior
&lt;!-- What is happening right now? --&gt;


## Steps to Reproduce
1. 
2. 
3. 

## Expected Behavior
&lt;!-- What should happen? --&gt;


## Implementation Checklist
- [ ] 
- [ ] 

## Technical Notes
**Logs:** 
**Suspect file:** </code></pre>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Preview</h3>
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">

<div className="px-6 py-4 border-b border-gray-100">
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold text-gray-900">Invoice status stuck in "pending"</h4>
<div className="flex items-center gap-2 mt-2">
<span className="gh-label" style={{backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182'}}>type: bug</span>
<span className="gh-label" style={{backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182'}}>priority: critical</span>
<span className="gh-label" style={{backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b'}}>area: backend</span>
</div>
</div>
<span className="text-xs text-gray-400">#892</span>
</div>
</div>

<div className="px-6 py-5 text-sm preview-markdown">
<h3>Context</h3>
<p>Users report paying but invoice shows pending. Causing confusion and support tickets. Affects ~5% of payments.</p>
<h3>Current Behavior</h3>
<p>After payment callback, invoice status remains <code>pending</code> instead of <code>paid</code>.</p>
<h3>Steps to Reproduce</h3>
<ol>
<li>Create invoice for 1000 sats</li>
<li>Pay using external wallet</li>
<li>Wait for callback (webhook received in logs)</li>
<li>Check invoice status → Still "pending"</li>
</ol>
<h3>Expected Behavior</h3>
<p>Invoice status updates to <code>paid</code> within 5 seconds of callback.</p>
<h3>Implementation Checklist</h3>
<ul style={{listStyle: 'none', paddingLeft: '0'}}>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> Investigate race condition</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Add database transaction lock</li>
</ul>
<h3>Technical Notes</h3>
<p> <code>grep "invoice_id:xyz" /var/log/api.log</code>
<code>src/handlers/payment_callback.ts:142</code></p>
</div>
</div>
</div>
</section>

<hr className="border-gray-200"/>

<section className="space-y-8" id="epic-template">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-purple-500"></div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Epic Template</h2>
</div>

<div className="relative group">
<div className="absolute right-2 top-2 z-10">
<button className="bg-white/90 backdrop-blur px-3 py-1.5 text-xs font-medium rounded-md border border-gray-200 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 hover:bg-gray-50" onclick="copyTemplate('epic')">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:copy" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg> Copy
                    </button>
</div>
<div className="bg-gray-900 rounded-lg overflow-hidden">
<div className="px-4 py-4 bg-gray-800 border-b border-gray-700 text-xs text-gray-400 font-mono flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                        .github/ISSUE_TEMPLATE/epic.md
                    </div>
<pre className="p-4 text-sm font-mono text-gray-300 overflow-x-auto leading-relaxed" id="epic-code"><code>## Overview
&lt;!-- 2–3 sentence executive summary --&gt;


## Problem Statement
&lt;!-- What problem does this solve? Include data if possible --&gt;


## Goals
- 
- 

## Non-Goals
- 
- 

## Linked Issues

### Phase 1
- [ ] # - [AREA][TASK] Description
- [ ] # - [AREA][TASK] Description

### Phase 2
- [ ] # - [AREA][TASK] Description

## Open Questions
- [ ] 
- [ ] </code></pre>
</div>
</div>

<div className="space-y-3">
<h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Preview</h3>
<div className="bg-white rounded-lg border border-gray-200 overflow-hidden">

<div className="px-6 py-4 border-b border-gray-100">
<div className="flex items-start justify-between">
<div>
<h4 className="text-lg font-semibold text-gray-900">Lightning Payment System v2</h4>
<div className="flex items-center gap-2 mt-2">
<span className="gh-label" style={{backgroundColor: '#fbefff', color: '#8250df', borderColor: '#c297ff'}}>type: epic</span>
<span className="gh-label" style={{backgroundColor: '#fff8c5', color: '#9a6700', borderColor: '#d4a72c'}}>priority: high</span>
</div>
</div>
<span className="text-xs text-gray-400">#801</span>
</div>
</div>

<div className="px-6 py-5 text-sm preview-markdown">
<h3>Overview</h3>
<p>Redesign of the Lightning payment system to improve reliability, reduce confirmation time, and add support for recurring payments.</p>
<h3>Problem Statement</h3>
<p>The current system has a 12% failure rate, confirmation times up to 30 seconds, and does not support subscriptions.</p>
<h3>Goals</h3>
<ul>
<li>Reduce failure rate to &lt;2%</li>
<li>Confirm within &lt;5 seconds</li>
</ul>
<h3>Non-Goals</h3>
<ul>
<li>Migrate to a new node provider</li>
<li>Multi-currency support</li>
</ul>
<h3>Linked Issues</h3>
<p></p>
<ul style={{listStyle: 'none', paddingLeft: '0'}}>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> <a href="#">#802</a> - Upgrade LND to 0.18.0</li>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> <a href="#">#803</a> - Setup redundant cluster</li>
<li className="flex items-center gap-2"><input checked="" disabled="" type="checkbox"/> <a href="#">#810</a> - Payment queue with retry</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> <a href="#">#811</a> - Idempotency for callbacks</li>
</ul>
<h3>Open Questions</h3>
<ul style={{listStyle: 'none', paddingLeft: '0'}}>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Maintain compatibility with API v1?</li>
<li className="flex items-center gap-2"><input disabled="" type="checkbox"/> Which provider should we use for recurring payments?</li>
</ul>
</div>
</div>
</div>
</section>

<hr className="border-gray-200"/>

<section className="space-y-8" id="labels">
<div className="space-y-3">
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Label System</h2>
<p className="text-sm text-gray-500 leading-relaxed">
                    Labels help categorize, filter, and prioritize issues quickly. Set up these labels in your repository to keep things consistent.
                </p>
</div>

<div className="space-y-6">

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:tag" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
<h3 className="text-sm font-semibold text-gray-900">type:</h3>
</div>
<span className="text-xs text-gray-400">Issue classification</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff'}}>type: task</span>
<span className="text-sm text-gray-500">New feature or improvement</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ddf4ff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182'}}>type: bug</span>
<span className="text-sm text-gray-500">Error or unexpected behavior</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ffebe9</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fbefff', color: '#8250df', borderColor: '#c297ff'}}>type: epic</span>
<span className="text-sm text-gray-500">Initiative that groups multiple tasks</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fbefff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fff8c5', color: '#9a6700', borderColor: '#d4a72c'}}>type: docs</span>
<span className="text-sm text-gray-500">Documentation</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fff8c5</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#eaeef2', color: '#57606a', borderColor: '#afb8c1'}}>type: refactor</span>
<span className="text-sm text-gray-500">Code improvement with no functional change</span>
</div>
<code className="text-xs text-gray-400 font-mono">#eaeef2</code>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:layers" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<h3 className="text-sm font-semibold text-gray-900">area:</h3>
</div>
<span className="text-xs text-gray-400">Affected area of the codebase</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b'}}>area: frontend</span>
<span className="text-sm text-gray-500">UI, components, client</span>
</div>
<code className="text-xs text-gray-400 font-mono">#dafbe1</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff'}}>area: backend</span>
<span className="text-sm text-gray-500">API, services, business logic</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ddf4ff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fbefff', color: '#8250df', borderColor: '#c297ff'}}>area: design</span>
<span className="text-sm text-gray-500">UI/UX, visual design, prototypes</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fbefff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fce7f3', color: '#db2777', borderColor: '#f472b6'}}>area: database</span>
<span className="text-sm text-gray-500">Schemas, migrations, queries</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fce7f3</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#eaeef2', color: '#57606a', borderColor: '#afb8c1'}}>area: infra</span>
<span className="text-sm text-gray-500">DevOps, CI/CD, deploy</span>
</div>
<code className="text-xs text-gray-400 font-mono">#eaeef2</code>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:alert-triangle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-sm font-semibold text-gray-900">priority:</h3>
</div>
<span className="text-xs text-gray-400">Issue urgency</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182'}}>priority: critical</span>
<span className="text-sm text-gray-500">Blocks production; handle immediately</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ffebe9</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fff1e5', color: '#bc4c00', borderColor: '#fb8f44'}}>priority: high</span>
<span className="text-sm text-gray-500">Important; resolve this week</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fff1e5</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fff8c5', color: '#9a6700', borderColor: '#d4a72c'}}>priority: medium</span>
<span className="text-sm text-gray-500">Normal; plan for the next sprint</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fff8c5</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b'}}>priority: low</span>
<span className="text-sm text-gray-500">Nice to have; when there's time</span>
</div>
<code className="text-xs text-gray-400 font-mono">#dafbe1</code>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:circle-dot" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></g></svg>
<h3 className="text-sm font-semibold text-gray-900">status:</h3>
</div>
<span className="text-xs text-gray-400">Current issue status</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#eaeef2', color: '#57606a', borderColor: '#afb8c1'}}>status: backlog</span>
<span className="text-sm text-gray-500">Pending prioritization</span>
</div>
<code className="text-xs text-gray-400 font-mono">#eaeef2</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff'}}>status: ready</span>
<span className="text-sm text-gray-500">Ready to be picked up</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ddf4ff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fff8c5', color: '#9a6700', borderColor: '#d4a72c'}}>status: in progress</span>
<span className="text-sm text-gray-500">Someone is working on it</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fff8c5</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fbefff', color: '#8250df', borderColor: '#c297ff'}}>status: in review</span>
<span className="text-sm text-gray-500">PR open; awaiting review</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fbefff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#fff1e5', color: '#bc4c00', borderColor: '#fb8f44'}}>status: blocked</span>
<span className="text-sm text-gray-500">Waiting on a dependency or decision</span>
</div>
<code className="text-xs text-gray-400 font-mono">#fff1e5</code>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-gray-400 iconify--lucide" data-icon="lucide:sparkles" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<h3 className="text-sm font-semibold text-gray-900">Special</h3>
</div>
<span className="text-xs text-gray-400">Useful labels for open source</span>
</div>
<div className="p-5 space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ddf4ff', color: '#0969da', borderColor: '#54aeff'}}>good first issue</span>
<span className="text-sm text-gray-500">Great for new contributors</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ddf4ff</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#dafbe1', color: '#1a7f37', borderColor: '#4ac26b'}}>help wanted</span>
<span className="text-sm text-gray-500">Help from the community is welcome</span>
</div>
<code className="text-xs text-gray-400 font-mono">#dafbe1</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#eaeef2', color: '#57606a', borderColor: '#afb8c1'}}>duplicate</span>
<span className="text-sm text-gray-500">Duplicate issue</span>
</div>
<code className="text-xs text-gray-400 font-mono">#eaeef2</code>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="gh-label" style={{backgroundColor: '#ffebe9', color: '#cf222e', borderColor: '#ff8182'}}>wontfix</span>
<span className="text-sm text-gray-500">Won't be implemented</span>
</div>
<code className="text-xs text-gray-400 font-mono">#ffebe9</code>
</div>
</div>
</div>
</div>
</section>

<footer className="text-center pt-8 pb-4 border-t border-gray-200">
<p className="text-xs text-gray-400">
                Copy these templates into <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">.github/ISSUE_TEMPLATE/</code> in your repository.
            </p>
</footer>
</main>

<div className="fixed bottom-6 right-6 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 opacity-0 translate-y-4 transition-all duration-300 pointer-events-none z-50" id="toast">
<svg aria-hidden="true" className="iconify text-green-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm">Template copied</span>
</div>


    </>
  );
}
