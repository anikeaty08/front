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



        // Simple View Controller logic for prototype
        function showScreen(screenId) {
            // Hide all screens
            const screens = ['library', 'editor', 'instance', 'review', 'audit'];
            screens.forEach(id => {
                document.getElementById('screen-' + id).classList.add('hidden');
                document.getElementById('nav-' + id).classList.remove('tab-active');
                document.getElementById('nav-' + id).classList.add('tab-inactive');
            });

            // Show selected
            document.getElementById('screen-' + screenId).classList.remove('hidden');
            document.getElementById('nav-' + screenId).classList.add('tab-active');
            document.getElementById('nav-' + screenId).classList.remove('tab-inactive');

            // Toggle sidebar visibility based on context (Review screen is typically full width/public)
            const sidebar = document.getElementById('main-sidebar');
            if (screenId === 'review') {
                sidebar.classList.add('hidden');
                sidebar.classList.remove('md:flex');
            } else {
                sidebar.classList.remove('hidden');
                sidebar.classList.add('md:flex');
            }
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
      

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-20">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:boxes" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm text-gray-900">MentorUnion</span>
<span className="text-gray-300 mx-2 text-sm">/</span>
<span className="text-sm text-gray-500">Agreement Builder</span>
</div>

<div className="flex items-center gap-6 text-sm font-medium">
<button className="tab-active h-14 px-1 transition-colors" id="nav-library" onclick="showScreen('library')">1. Library</button>
<button className="tab-inactive h-14 px-1 transition-colors" id="nav-editor" onclick="showScreen('editor')">2. Editor</button>
<button className="tab-inactive h-14 px-1 transition-colors" id="nav-instance" onclick="showScreen('instance')">3. Create</button>
<button className="tab-inactive h-14 px-1 transition-colors" id="nav-review" onclick="showScreen('review')">4. Review</button>
<button className="tab-inactive h-14 px-1 transition-colors" id="nav-audit" onclick="showScreen('audit')">5. Audit</button>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200 text-gray-500">
<span className="text-xs font-medium">JD</span>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between py-4 hidden md:flex" id="main-sidebar">
<div className="px-3 space-y-1">
<div className="px-3 py-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
                    Mentors
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:file-check" width="18"></iconify-icon>
                    Agreements
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="lucide:building-2" width="18"></iconify-icon>
                    Organizations
                </a>
</div>
<div className="px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 transition-colors" href="#">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
                    Settings
                </a>
</div>
</aside>

<main className="flex-1 bg-gray-50 overflow-auto relative">

<div className="p-8 max-w-6xl mx-auto space-y-6" id="screen-library">
<div className="flex items-center justify-between">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Agreement Templates</h1>
<p className="text-sm text-gray-500 mt-1">Manage standard contracts for mentorship engagements.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm flex items-center gap-2 transition-all">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
                        Create New Template
                    </button>
</div>
<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50/50">
<div className="relative w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" icon="lucide:search" width="16"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 placeholder:text-gray-400" placeholder="Search templates..." type="text"/>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-50">Filter</button>
</div>
</div>
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Template Name</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Standard Mentor MSA</div>
<div className="text-xs text-gray-500">Last edited 2 days ago by Sarah K.</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Master Services</td>
<td className="px-6 py-4 text-sm text-gray-600 font-mono">v2.4</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>

<tr className="group hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
<iconify-icon icon="lucide:file" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">NDA - Confidentiality</div>
<div className="text-xs text-gray-500">Created yesterday</div>
</div>
</div>
</td>
<td className="px-6 py-4 text-sm text-gray-600">Non-Disclosure</td>
<td className="px-6 py-4 text-sm text-gray-600 font-mono">v1.0</td>
<td className="px-6 py-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-500/10">Draft</span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-gray-400 hover:text-gray-600 p-1"><iconify-icon icon="lucide:more-horizontal" width="16"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden h-full flex flex-col" id="screen-editor">

<div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
<div className="flex items-center gap-4">
<button className="text-gray-500 hover:text-gray-700"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<div>
<div className="flex items-center gap-2">
<h1 className="text-sm font-medium text-gray-900">Standard Mentor MSA</h1>
<span className="bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded text-xs font-mono">v2.5 (Draft)</span>
</div>
<p className="text-xs text-gray-500">Editing template structure and variables</p>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5">Discard</button>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-1.5 rounded shadow-sm transition-colors">Save Changes</button>
</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="flex-1 bg-gray-100 p-8 overflow-y-auto flex justify-center">
<div className="w-full max-w-3xl bg-white shadow-sm border border-gray-200 min-h-[800px] flex flex-col">

<div className="sticky top-0 bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-1 z-10">
<button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"><iconify-icon icon="lucide:bold" width="16"></iconify-icon></button>
<button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"><iconify-icon icon="lucide:italic" width="16"></iconify-icon></button>
<button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"><iconify-icon icon="lucide:underline" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-gray-200 mx-2"></div>
<button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"><iconify-icon icon="lucide:align-left" width="16"></iconify-icon></button>
<button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded"><iconify-icon icon="lucide:align-center" width="16"></iconify-icon></button>
<div className="w-px h-4 bg-gray-200 mx-2"></div>
<button className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors">
<iconify-icon icon="lucide:braces" width="14"></iconify-icon>
                                    Insert Variable
                                </button>
</div>

<div className="p-10 text-sm leading-7 text-gray-800 font-serif">
<h2 className="text-xl font-bold text-gray-900 mb-6 font-sans tracking-tight">Mentorship Services Agreement</h2>
<p className="mb-4">This Agreement is made on <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 text-xs font-mono select-none" contenteditable="false">{{current_date}}</span> between:</p>
<p className="mb-4">
<strong>MentorUnion Inc.</strong> ("Company")<br/>
                                    AND<br/>
<span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 text-xs font-mono select-none" contenteditable="false">{{mentor_name}}</span> ("Mentor"), located at <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 text-xs font-mono select-none" contenteditable="false">{{mentor_address}}</span>.
                                </p>
<h3 className="font-bold text-gray-900 mt-6 mb-2 font-sans">1. Services</h3>
<p className="mb-4">The Mentor agrees to provide mentorship sessions for a duration of <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 text-xs font-mono select-none" contenteditable="false">{{engagement_duration}}</span> months.</p>
<h3 className="font-bold text-gray-900 mt-6 mb-2 font-sans">2. Compensation</h3>
<p className="mb-4">Company shall pay Mentor a fee of <span className="bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-100 text-xs font-mono select-none" contenteditable="false">{{session_fee}}</span> per completed session, payable within 30 days of invoice.</p>
</div>
</div>
</div>

<div className="w-80 bg-white border-l border-gray-200 overflow-y-auto p-5">
<h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Variable Mapping</h3>
<div className="space-y-6">

<div className="group">
<label className="block text-xs font-medium text-gray-700 mb-1.5 flex items-center justify-between">
<span>{{mentor_name}}</span>
<iconify-icon className="text-green-500" icon="lucide:check-circle" width="12"></iconify-icon>
</label>
<select className="w-full text-xs border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500 py-2">
<option>Database: Users &gt; Full Name</option>
</select>
<div className="mt-2 flex items-center gap-2">
<div className="relative inline-block w-8 h-4 align-middle select-none">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-8 h-4 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-indigo-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-indigo-600"></div>
</div>
<span className="text-xs text-gray-500">Required</span>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="group">
<label className="block text-xs font-medium text-gray-700 mb-1.5 flex items-center justify-between">
<span>{{session_fee}}</span>
<iconify-icon className="text-orange-400" icon="lucide:alert-circle" width="12"></iconify-icon>
</label>
<select className="w-full text-xs border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500 py-2">
<option>Database: Engagements &gt; Fee</option>
</select>
<div className="mt-1 text-xs text-orange-600">Validation: Must be numeric</div>
</div>
<div className="w-full h-px bg-gray-100"></div>

<div className="group">
<label className="block text-xs font-medium text-gray-700 mb-1.5 flex items-center justify-between">
<span>{{engagement_duration}}</span>
</label>
<select className="w-full text-xs border-gray-300 rounded focus:ring-indigo-500 focus:border-indigo-500 py-2">
<option>Custom Input (At Send)</option>
<option>Database: Engagements &gt; Duration</option>
</select>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-8 max-w-4xl mx-auto space-y-8" id="screen-instance">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Send New Agreement</h1>
<p className="text-sm text-gray-500 mt-1">Generate a contract for a specific mentor engagement.</p>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Select Template</label>
<div className="relative">
<select className="w-full pl-3 pr-10 py-2.5 text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm">
<option>Standard Mentor MSA (v2.4)</option>
<option>NDA - Confidentiality (v1.0)</option>
</select>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1">Select Mentor</label>
<div className="relative">
<input className="w-full pl-3 pr-10 py-2.5 text-sm border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 shadow-sm" type="text" value="Alex Rivera"/>
<iconify-icon className="absolute right-3 top-3 text-gray-400" icon="lucide:search" width="16"></iconify-icon>
</div>
<p className="mt-1 text-xs text-green-600 flex items-center gap-1">
<iconify-icon icon="lucide:check" width="12"></iconify-icon> Data mapped successfully
                        </p>
</div>
</div>
<div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-gray-900">Preview: Alex Rivera - MSA</h3>
<span className="text-xs text-gray-500">Read-only preview</span>
</div>
<div className="bg-white shadow-sm border border-gray-200 p-8 rounded min-h-[400px]">
<div className="text-sm leading-7 text-gray-800 font-serif opacity-90">
<h2 className="text-lg font-bold text-gray-900 mb-4 font-sans tracking-tight">Mentorship Services Agreement</h2>
<p className="mb-4">This Agreement is made on <span className="bg-yellow-50 text-gray-900 border-b border-yellow-300 px-1">October 24, 2023</span> between:</p>
<p className="mb-4">
<strong>MentorUnion Inc.</strong> ("Company")<br/>
                                AND<br/>
<span className="bg-yellow-50 text-gray-900 border-b border-yellow-300 px-1">Alex Rivera</span> ("Mentor"), located at <span className="bg-yellow-50 text-gray-900 border-b border-yellow-300 px-1">123 Innovation Dr, San Francisco, CA</span>.
                            </p>
<p>The Mentor agrees to provide sessions for <span className="bg-yellow-50 text-gray-900 border-b border-yellow-300 px-1">6 months</span>...</p>
</div>
</div>
</div>
<div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
<button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">Cancel</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 flex items-center gap-2">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
                        Send to Mentor
                    </button>
</div>
</div>

<div className="hidden bg-gray-100 h-full overflow-y-auto" id="screen-review">

<div className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 sticky top-0 z-30">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:boxes" width="14"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-gray-900">MentorUnion</span>
</div>
<div className="text-xs text-gray-500 uppercase tracking-wider font-medium">Secure Document Viewer</div>
</div>
<div className="flex justify-center p-8 gap-8 max-w-7xl mx-auto">

<div className="bg-white shadow-lg rounded-sm border border-gray-200 w-full max-w-3xl min-h-[1000px] p-12 relative">
<div className="absolute top-0 right-0 p-4">
<div className="bg-gray-100 text-gray-500 text-xs font-mono px-2 py-1 rounded">Page 1 of 3</div>
</div>

<div className="space-y-6 text-gray-800 font-serif leading-relaxed">
<div className="h-8 w-1/2 bg-gray-100 mb-8 rounded"></div> 
<div className="space-y-2">
<div className="h-4 w-full bg-gray-50 rounded"></div>
<div className="h-4 w-11/12 bg-gray-50 rounded"></div>
<div className="h-4 w-full bg-gray-50 rounded"></div>
</div>
<div className="py-4"></div>
<div className="space-y-2">
<div className="h-4 w-5/6 bg-gray-50 rounded"></div>
<div className="h-4 w-full bg-gray-50 rounded"></div>
</div>

<div className="mt-20 p-6 bg-indigo-50/50 border border-indigo-100 rounded-lg flex flex-col items-start gap-4">
<div className="text-sm font-sans font-medium text-indigo-900">Sign here</div>
<div className="h-16 w-64 border-b-2 border-indigo-200 bg-white"></div>
<div className="text-xs font-sans text-gray-500">Alex Rivera (Mentor)</div>
</div>
</div>
</div>

<div className="w-80 shrink-0">
<div className="sticky top-24 space-y-4">
<div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
<div className="p-5 border-b border-gray-100">
<h3 className="font-semibold text-gray-900">Agreement Summary</h3>
</div>
<div className="p-5 space-y-4">
<div>
<div className="text-xs text-gray-500 mb-1">Mentor Name</div>
<div className="text-sm font-medium text-gray-900">Alex Rivera</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-xs text-gray-500 mb-1">Rate</div>
<div className="text-sm font-medium text-gray-900">$250/session</div>
</div>
<div>
<div className="text-xs text-gray-500 mb-1">Duration</div>
<div className="text-sm font-medium text-gray-900">6 Months</div>
</div>
</div>
<div className="pt-2">
<div className="text-xs text-gray-500 mb-1">Valid Until</div>
<div className="text-sm text-gray-700 flex items-center gap-1.5">
<iconify-icon icon="lucide:calendar" width="14"></iconify-icon>
                                            Nov 24, 2023
                                        </div>
</div>
</div>
<div className="p-5 bg-gray-50 border-t border-gray-100 space-y-3">
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-md shadow-sm transition-all flex items-center justify-center gap-2">
<iconify-icon icon="lucide:pen-tool" width="16"></iconify-icon>
                                        Approve &amp; Sign
                                    </button>
<button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 border border-gray-300 rounded-md transition-all">
                                        Request Changes
                                    </button>
</div>
</div>
<div className="text-center">
<p className="text-xs text-gray-400 flex items-center justify-center gap-1">
<iconify-icon icon="lucide:shield-check" width="12"></iconify-icon>
                                    Encrypted &amp; Compliance Ready
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-8 max-w-3xl mx-auto" id="screen-audit">
<div className="mb-8">
<h1 className="text-xl font-medium tracking-tight text-gray-900">Agreement Audit Trail</h1>
<p className="text-sm text-gray-500 mt-1">Timeline for "Standard Mentor MSA - Alex Rivera"</p>
</div>
<div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
<div className="relative pl-4 border-l-2 border-gray-100 space-y-10">

<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-indigo-600 bg-white"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
<div>
<p className="text-sm font-medium text-gray-900">Signed by Mentor</p>
<p className="text-xs text-gray-500 mt-0.5">IP: 192.168.1.42 • Browser: Chrome 114</p>
</div>
<span className="text-xs font-mono text-gray-400">Oct 24, 14:32</span>
</div>
<div className="mt-2 p-3 bg-green-50 rounded border border-green-100 flex items-center gap-2 text-xs text-green-800">
<iconify-icon icon="lucide:check-circle" width="14"></iconify-icon>
                                Agreement executed successfully
                            </div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-gray-300 bg-white"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
<div>
<p className="text-sm font-medium text-gray-900">Viewed by Alex Rivera</p>
<p className="text-xs text-gray-500 mt-0.5">First opened via email link</p>
</div>
<span className="text-xs font-mono text-gray-400">Oct 24, 09:15</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-gray-300 bg-white"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
<div>
<p className="text-sm font-medium text-gray-900">Sent to Mentor</p>
<p className="text-xs text-gray-500 mt-0.5">Dispatched by Admin (Sarah K.)</p>
</div>
<span className="text-xs font-mono text-gray-400">Oct 23, 16:45</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-[21px] top-1 h-3 w-3 rounded-full border-2 border-gray-300 bg-white"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
<div>
<p className="text-sm font-medium text-gray-900">Draft Created</p>
<p className="text-xs text-gray-500 mt-0.5">Generated from template v2.4</p>
</div>
<span className="text-xs font-mono text-gray-400">Oct 23, 16:40</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
