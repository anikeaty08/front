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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
925: '#101012',
}
}
}
}
}



        // Icon Initialization
        lucide.createIcons();

        // State Management
        function openDetails(mode = 'preview') {
            document.getElementById('view-list').classList.add('hidden');
            document.getElementById('view-details').classList.remove('hidden');
            switchTab(mode);
        }

        function closeDetails() {
            document.getElementById('view-details').classList.add('hidden');
            document.getElementById('view-list').classList.remove('hidden');
        }

        function switchTab(tab) {
            const editBtn = document.getElementById('tab-edit');
            const prevBtn = document.getElementById('tab-preview');
            const editContent = document.getElementById('content-edit');
            const prevContent = document.getElementById('content-preview');

            if (tab === 'edit') {
                editBtn.classList.replace('border-transparent', 'border-white');
                editBtn.classList.replace('text-zinc-500', 'text-white');
                prevBtn.classList.replace('border-white', 'border-transparent');
                prevBtn.classList.replace('text-white', 'text-zinc-500');
                
                editContent.classList.remove('hidden');
                prevContent.classList.add('hidden');
            } else {
                prevBtn.classList.replace('border-transparent', 'border-white');
                prevBtn.classList.replace('text-zinc-500', 'text-white');
                editBtn.classList.replace('border-white', 'border-transparent');
                editBtn.classList.replace('text-white', 'text-zinc-500');

                prevContent.classList.remove('hidden');
                editContent.classList.add('hidden');
            }
        }

        function openModal(id) {
            document.getElementById('modal-' + id).classList.remove('hidden');
        }

        function closeModal(id) {
            document.getElementById('modal-' + id).classList.add('hidden');
        }

        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = message;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function confirmAssign() {
            closeModal('assign');
            showToast('Assigned to 3 mentors');
        }

        function confirmDeactivate() {
            closeModal('deactivate');
            showToast('Agreement deactivated successfully');
        }

        function saveChanges() {
            showToast('Document changes saved');
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
      

<aside className="w-64 border-r border-zinc-800 flex flex-col justify-between bg-zinc-950 shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-zinc-800/50">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-bold">M</div>
<span className="font-medium text-sm tracking-tight text-white">MentorUnion</span>
</div>
</div>

<nav className="p-3 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="users"></i>
                    Mentors
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-zinc-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
                    Agreements
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="wallet"></i>
                    Payouts
                </a>
</nav>
</div>

<div className="p-3 border-t border-zinc-800/50">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 rounded-md hover:bg-zinc-900 hover:text-zinc-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
                Settings
            </a>
<div className="mt-2 flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
<img alt="Admin" className="w-full h-full object-cover opacity-80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-white truncate">Alex Morgan</p>
<p className="text-xs text-zinc-500 truncate">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="flex flex-col h-full w-full" id="view-list">

<header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 bg-zinc-950">
<h1 className="text-lg font-medium text-white tracking-tight">Agreements</h1>
<button className="bg-white text-black hover:bg-zinc-200 px-3 py-1.5 rounded text-xs font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Upload Agreement
                </button>
</header>

<div className="px-8 py-6 pb-2">
<div className="flex items-center justify-between gap-4">

<div className="flex items-center gap-3 w-full max-w-lg">
<div className="relative flex-1 group">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-zinc-300 transition-colors" data-lucide="search"></i>
<input className="w-full bg-zinc-900/50 border border-zinc-800 text-sm text-white rounded pl-9 pr-3 py-2 outline-none focus:border-zinc-700 focus:bg-zinc-900 transition-all placeholder:text-zinc-600" placeholder="Search agreements..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-2 border border-zinc-800 rounded text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="list-filter"></i>
                            Filters
                        </button>
</div>

<div className="flex items-center gap-4">
<span className="text-xs text-zinc-500">Showing 10 of 12</span>
<button className="p-2 text-zinc-500 hover:text-white transition-colors border border-transparent hover:border-zinc-800 rounded">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
</div>

<div className="flex-1 px-8 py-4 overflow-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800">
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-32">Date</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-32">Status</th>
<th className="py-3 px-4 text-xs font-medium text-zinc-500 uppercase tracking-wider w-24 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">

<tr className="group hover:bg-zinc-900/40 transition-colors cursor-pointer" onclick="openDetails('preview')">
<td className="py-3 px-4 text-xs text-zinc-400">Oct 24, 2023</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-400">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Letter of Engagement</p>
<p className="text-xs text-zinc-500">Updated by Alex M.</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Active
                                </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="openDetails('edit')" title="Edit">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
</button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="openDetails('preview')" title="View">
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
</button>
</div>
</td>
</tr>

<tr className="group hover:bg-zinc-900/40 transition-colors cursor-pointer" onclick="openDetails('preview')">
<td className="py-3 px-4 text-xs text-zinc-400">Sep 12, 2023</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-400">
<i className="w-4 h-4" data-lucide="file-lock"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Non-Disclosure Agreement (NDA)</p>
<p className="text-xs text-zinc-500">Updated by Sarah K.</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    Active
                                </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="openDetails('edit')">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
</button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="openDetails('preview')">
<i className="w-3.5 h-3.5" data-lucide="eye"></i>
</button>
</div>
</td>
</tr>

<tr className="group hover:bg-zinc-900/40 transition-colors cursor-pointer" onclick="openDetails('preview')">
<td className="py-3 px-4 text-xs text-zinc-400">Aug 05, 2023</td>
<td className="py-3 px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-zinc-800/50 flex items-center justify-center border border-zinc-700/50 text-zinc-400">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Platform Terms of Service</p>
<p className="text-xs text-zinc-500">System Generated</p>
</div>
</div>
</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-zinc-800 text-zinc-400 border border-zinc-700">
                                    Draft
                                </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity" onclick="event.stopPropagation()">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white transition-colors" onclick="openDetails('edit')">
<i className="w-3.5 h-3.5" data-lucide="pencil"></i>
</button>
<button className="p-1.5 hover:bg-red-500/10 rounded text-zinc-400 hover:text-red-400 transition-colors" onclick="openModal('deactivate')">
<i className="w-3.5 h-3.5" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden flex flex-col h-full w-full bg-zinc-950 absolute inset-0 z-30" id="view-details">

<header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-zinc-950 shrink-0">
<div className="flex items-center gap-4">
<button className="p-1.5 -ml-2 text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md transition-colors" onclick="closeDetails()">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<nav className="flex items-center text-sm">
<span className="text-zinc-500">Agreements</span>
<i className="w-4 h-4 text-zinc-600 mx-1" data-lucide="chevron-right"></i>
<span className="text-white font-medium">Letter of Engagement</span>
</nav>
<span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Active
                    </span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-zinc-400 hover:text-white transition-colors rounded hover:bg-zinc-900">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
<div className="h-4 w-px bg-zinc-800"></div>
<button className="text-xs font-medium text-zinc-400 hover:text-white px-3 py-1.5 transition-colors">Save as Draft</button>
<button className="bg-white text-black hover:bg-zinc-200 px-3 py-1.5 rounded text-xs font-medium transition-colors" onclick="saveChanges()">Save Changes</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="w-1/3 min-w-[320px] max-w-sm border-r border-zinc-800 flex flex-col bg-zinc-925">
<div className="p-4 border-b border-zinc-800">
<div className="flex items-center justify-between mb-3">
<h2 className="text-xs font-semibold text-zinc-100 uppercase tracking-wide">Coverage</h2>
<span className="text-xs text-zinc-500">Active for 82 mentors</span>
</div>
<div className="relative mb-3">
<i className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-zinc-900 border border-zinc-800 text-xs text-white rounded pl-8 pr-3 py-1.5 outline-none focus:border-zinc-700 transition-colors" placeholder="Search mentor..." type="text"/>
</div>
<div className="flex items-center justify-between">
<div className="flex gap-2">
<button className="text-[10px] font-medium text-white px-2 py-1 bg-zinc-800 rounded border border-zinc-700">All</button>
<button className="text-[10px] font-medium text-zinc-500 hover:text-zinc-300 px-2 py-1 hover:bg-zinc-800 rounded transition-colors">Active</button>
<button className="text-[10px] font-medium text-zinc-500 hover:text-zinc-300 px-2 py-1 hover:bg-zinc-800 rounded transition-colors">Inactive</button>
</div>
<button className="text-[10px] font-medium text-indigo-400 hover:text-indigo-300 transition-colors" onclick="openModal('assign')">
                                + Assign
                            </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-0.5">

<div className="px-2 py-1.5 flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-3.5 h-3.5" type="checkbox"/>
<span className="text-[10px] text-zinc-500">Select All</span>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
<img className="w-6 h-6 rounded-full bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav"/>
<div>
<p className="text-xs font-medium text-zinc-200">Aarav Mehta</p>
<p className="text-[10px] text-zinc-500">Updated 2d ago</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 transition-all" onclick="openModal('deactivate')">
<i className="w-3 h-3" data-lucide="power"></i>
</button>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
<img className="w-6 h-6 rounded-full bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"/>
<div>
<p className="text-xs font-medium text-zinc-200">Sarah Khan</p>
<p className="text-[10px] text-zinc-500">Updated 5d ago</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-red-400 transition-all" onclick="openModal('deactivate')">
<i className="w-3 h-3" data-lucide="power"></i>
</button>
</div>
</div>

<div className="group flex items-center justify-between p-2 rounded hover:bg-zinc-800/50 transition-colors cursor-default">
<div className="flex items-center gap-3">
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" type="checkbox"/>
<img className="w-6 h-6 rounded-full bg-zinc-800 grayscale opacity-70" src="https://api.dicebear.com/7.x/avataaars/svg?seed=David"/>
<div>
<p className="text-xs font-medium text-zinc-400">David Chen</p>
<p className="text-[10px] text-zinc-600">Inactive</p>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<button className="opacity-0 group-hover:opacity-100 p-1 text-zinc-500 hover:text-emerald-400 transition-all">
<i className="w-3 h-3" data-lucide="power"></i>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-zinc-950">

<div className="flex items-center px-6 pt-4 border-b border-zinc-800 gap-6">
<button className="pb-3 text-sm font-medium border-b-2 border-white text-white transition-colors" id="tab-edit" onclick="switchTab('edit')">Edit Document</button>
<button className="pb-3 text-sm font-medium border-b-2 border-transparent text-zinc-500 hover:text-zinc-300 transition-colors" id="tab-preview" onclick="switchTab('preview')">Preview</button>
</div>

<div className="flex-1 bg-zinc-950 p-6 overflow-y-auto relative">

<div className="h-full flex flex-col" id="content-edit">

<div className="flex items-center justify-between mb-4 p-2 bg-zinc-900/50 border border-zinc-800 rounded-md">
<div className="flex items-center gap-1">
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"><i className="w-4 h-4" data-lucide="bold"></i></button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"><i className="w-4 h-4" data-lucide="italic"></i></button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"><i className="w-4 h-4" data-lucide="underline"></i></button>
<div className="w-px h-4 bg-zinc-700 mx-1"></div>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"><i className="w-4 h-4" data-lucide="list"></i></button>
<button className="p-1.5 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"><i className="w-4 h-4" data-lucide="list-ordered"></i></button>
</div>
<div className="relative group">
<button className="flex items-center gap-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 px-2 py-1 hover:bg-zinc-800 rounded">
                                        { } Variables
                                        <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
</div>
</div>

<textarea className="flex-1 w-full bg-transparent resize-none outline-none text-zinc-300 text-sm leading-relaxed font-mono p-4 border border-zinc-800/50 rounded-md focus:border-zinc-700 focus:bg-zinc-900/20 transition-colors" spellcheck="false">
LETTER OF ENGAGEMENT

Date: {{StartDate}}

Dear {{MentorName}},

This agreement outlines the terms and conditions for your mentorship sessions with {{MenteeName}}. 

1. Scope of Services
You agree to provide mentorship services focusing on career development and technical guidance.

2. Fees
The agreed rate per session is {{SessionCost}}.

3. Terms
{{Terms}}

By accepting this agreement, you acknowledge that you have read and understood the terms.
                            </textarea>
</div>

<div className="hidden h-full flex justify-center" id="content-preview">
<div className="w-full max-w-2xl bg-white text-black p-12 shadow-2xl rounded-sm overflow-y-auto min-h-[800px]">
<div className="flex justify-between items-start mb-12">
<div className="w-8 h-8 rounded bg-black text-white flex items-center justify-center font-bold text-xs">M</div>
<div className="text-right text-[10px] text-gray-500 uppercase tracking-widest">Confidential</div>
</div>
<h1 className="text-2xl font-bold tracking-tight mb-8">Letter of Engagement</h1>
<div className="text-sm leading-7 space-y-6 text-gray-800">
<p><strong>Date:</strong> October 24, 2023</p>
<p>Dear <strong>Aarav Mehta</strong>,</p>
<p>This agreement outlines the terms and conditions for your mentorship sessions with the assigned mentee.</p>
<h2 className="text-base font-bold mt-6 mb-2">1. Scope of Services</h2>
<p>You agree to provide mentorship services focusing on career development and technical guidance as stipulated in the MentorUnion platform guidelines.</p>
<h2 className="text-base font-bold mt-6 mb-2">2. Fees</h2>
<p>The agreed rate per session is <strong>$150.00 USD</strong>, payable on a bi-weekly basis pending session completion verification.</p>
<h2 className="text-base font-bold mt-6 mb-2">3. Terms</h2>
<p>This engagement is at-will and may be terminated by either party with 7 days written notice. Confidentiality regarding mentee projects must be maintained for a period of 2 years.</p>
<div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-end">
<div>
<div className="h-12 w-32 mb-2">
<img alt="Signature" className="w-full h-full object-contain opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-xs font-bold border-t border-black pt-1 inline-block pr-12">Mentor Signature</p>
</div>
<div className="text-xs text-gray-400">Page 1 of 1</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" id="modal-assign">
<div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-200">
<div className="p-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="font-medium text-white">Assign to Mentors</h3>
<button className="text-zinc-500 hover:text-white" onclick="closeModal('assign')"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<div className="p-4">
<div className="relative mb-3">
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" data-lucide="search"></i>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded pl-9 pr-3 py-2 text-sm text-white focus:border-zinc-700 outline-none" placeholder="Search mentors..." type="text"/>
</div>
<div className="max-h-60 overflow-y-auto space-y-1">

<label className="flex items-center justify-between p-2 hover:bg-zinc-800/50 rounded cursor-pointer">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span className="text-sm text-zinc-200">Felix Johnson</span>
</div>
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-4 h-4" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 hover:bg-zinc-800/50 rounded cursor-pointer">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"/>
<span className="text-sm text-zinc-200">Maria Garcia</span>
</div>
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-4 h-4" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-2 hover:bg-zinc-800/50 rounded cursor-pointer">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full bg-zinc-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=James"/>
<span className="text-sm text-zinc-200">James Wilson</span>
</div>
<input className="rounded border-zinc-700 bg-zinc-800 text-indigo-500 focus:ring-0 w-4 h-4" type="checkbox"/>
</label>
</div>
</div>
<div className="p-4 border-t border-zinc-800 flex justify-end gap-2 bg-zinc-900">
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors" onclick="closeModal('assign')">Cancel</button>
<button className="px-3 py-1.5 text-xs font-medium bg-white text-black rounded hover:bg-zinc-200 transition-colors" onclick="confirmAssign()">Assign Selected</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" id="modal-deactivate">
<div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl w-full max-w-sm p-6 text-center animate-in fade-in zoom-in-95 duration-200">
<div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
<i className="w-5 h-5" data-lucide="alert-triangle"></i>
</div>
<h3 className="text-base font-medium text-white mb-2">Deactivate Agreement?</h3>
<p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                This will deactivate the agreement for the selected mentors. They will no longer be bound by these terms for new sessions.
            </p>
<div className="flex gap-3 justify-center">
<button className="flex-1 py-2 text-xs font-medium border border-zinc-800 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" onclick="closeModal('deactivate')">Cancel</button>
<button className="flex-1 py-2 text-xs font-medium bg-red-600/90 text-white rounded hover:bg-red-600 transition-colors" onclick="confirmDeactivate()">Deactivate</button>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-zinc-900 border border-zinc-800 shadow-2xl rounded-md p-3 flex items-center gap-3 translate-y-20 opacity-0 transition-all duration-300 z-50" id="toast">
<div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="check"></i>
</div>
<span className="text-xs font-medium text-zinc-200" id="toast-message">Changes saved successfully</span>
</div>


    </>
  );
}
