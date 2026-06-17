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



        // Tab switching
        function switchTab(tabId) {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            const tabs = ['glossary', 'translation'];
            tabs.forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                if (t === tabId) {
                    btn.classList.remove('text-gray-500', 'border-transparent', 'hover:border-gray-200');
                    btn.classList.add('text-gray-900', 'border-gray-900');
                } else {
                    btn.classList.add('text-gray-500', 'border-transparent', 'hover:border-gray-200');
                    btn.classList.remove('text-gray-900', 'border-gray-900');
                }
            });
            document.getElementById(`content-${tabId}`).classList.add('active');
        }

        // Modal logic
        function toggleModal(show) {
            const modal = document.getElementById('modal-overlay');
            if (show) {
                modal.classList.add('open');
                setTimeout(() => { modal.querySelector('input').focus(); }, 100);
            } else {
                modal.classList.remove('open');
            }
        }
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleModal(false);
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
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col z-20">
<div className="h-14 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 rounded-md flex items-center justify-center text-white text-xs font-semibold tracking-tight">TM</div>
<span className="text-sm font-medium tracking-tight">TransManager</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-50 rounded-md" href="#">
<span className="iconify text-gray-500" data-icon="lucide:languages" data-width="18"></span>
                Translations
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<span className="iconify text-gray-500" data-icon="lucide:book" data-width="18"></span>
                Glossary
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<span className="iconify text-gray-500" data-icon="lucide:layout-grid" data-width="18"></span>
                Projects
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#">
<span className="iconify text-gray-500" data-icon="lucide:users" data-width="18"></span>
                Team
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-width="18"></span>
                Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white md:bg-gray-50/50">

<header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-sm font-medium text-gray-500">Workspace <span className="text-gray-300 mx-1">/</span> <span className="text-gray-900">Localization</span></h1>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="16"></span>
</button>
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-white shadow-sm"></div>
</div>
</header>

<div className="bg-white border-b border-gray-200 px-6 pt-6 pb-0">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-gray-900">Content Manager</h2>
<p className="text-sm text-gray-500 mt-1">Manage your application strings and terminologies.</p>
</div>
</div>
<div className="flex gap-6 relative">
<button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors border-b-2 border-transparent hover:border-gray-200 relative top-[1px]" id="tab-glossary" onclick="switchTab('glossary')">
                    Glossary
                </button>
<button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900 relative top-[1px]" id="tab-translation" onclick="switchTab('translation')">
                    Translation
                </button>
</div>
</div>

<div className="flex-1 overflow-hidden relative">

<div className="tab-content h-full flex flex-col" id="content-glossary">
<div className="flex items-center justify-center h-full text-gray-400 text-sm">
                    Glossary content placeholder
                </div>
</div>

<div className="tab-content h-full flex flex-col active" id="content-translation">

<div className="px-6 py-4 border-b border-gray-100 bg-white">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
<div className="flex flex-col md:flex-row gap-3 flex-1">

<div className="relative w-full md:w-64 group">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="w-full pl-9 pr-3 py-1.5 text-sm bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-gray-400" placeholder="Search keys..." type="text"/>
</div>

<div className="relative w-full md:w-40">
<select className="appearance-none pl-3 pr-8 py-1.5 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-600 hover:bg-gray-50 cursor-pointer w-full transition-colors">
<option disabled="" selected="" value="">Filter Project</option>
<option>Web App</option>
<option>Mobile App</option>
<option>Marketing Site</option>
</select>
<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</span>
</div>

<div className="relative w-full md:w-40">
<select className="appearance-none pl-3 pr-8 py-1.5 text-sm bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-600 hover:bg-gray-50 cursor-pointer w-full transition-colors">
<option disabled="" selected="" value="">Filter Feature</option>
<option>Authentication</option>
<option>Checkout</option>
<option>Dashboard</option>
<option>Settings</option>
</select>
<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:upload" data-width="14"></span>
                                    Import
                                </button>

<div className="relative group">
<button className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 text-xs font-medium rounded-md hover:bg-gray-50 hover:text-gray-900 shadow-sm transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:download" data-width="14"></span>
                                        Export
                                        <span className="iconify text-gray-400 group-hover:text-gray-600 transition-colors" data-icon="lucide:chevron-down" data-width="12"></span>
</button>
<div className="dropdown-menu absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-30 py-1">
<div className="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Format</div>
<a className="flex items-center justify-between px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-indigo-600 transition-colors" href="#">
                                            JSON
                                            <span className="iconify text-gray-400" data-icon="lucide:file-json" data-width="12"></span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50 hover:text-green-600 transition-colors" href="#">
                                            Excel (.xlsx)
                                            <span className="iconify text-gray-400" data-icon="lucide:sheet" data-width="12"></span>
</a>
</div>
</div>
</div>
<div className="h-6 w-px bg-gray-200 hidden md:block"></div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-800 shadow-sm transition-all hover:ring-2 hover:ring-gray-900/20 hover:ring-offset-1" onclick="toggleModal(true)">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                Add New
                            </button>
</div>
</div>
</div>

<div className="flex-1 overflow-auto bg-white">
<table className="w-full text-left border-collapse min-w-[1200px]">
<thead className="bg-gray-50/80 sticky top-0 z-10 backdrop-blur-sm shadow-sm border-b border-gray-200">
<tr>
<th className="py-2.5 px-6 text-xs font-medium text-gray-500 uppercase tracking-tight w-48">Key</th>
<th className="py-2.5 px-4 text-xs font-medium text-gray-500 uppercase tracking-tight w-40">Context</th>
<th className="py-2.5 px-4 text-xs font-medium text-gray-500 uppercase tracking-tight">English</th>
<th className="py-2.5 px-4 text-xs font-medium text-gray-500 uppercase tracking-tight">Japanese</th>
<th className="py-2.5 px-4 text-xs font-medium text-gray-500 uppercase tracking-tight w-40">Link UI</th>
<th className="py-2.5 px-4 text-xs font-medium text-gray-500 uppercase tracking-tight w-40">Places</th>
<th className="py-2.5 px-4 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="group hover:bg-gray-50/60 transition-colors">
<td className="py-2 px-6 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-600 transition-all outline-none placeholder:text-gray-300" placeholder="key_name" type="text" value="home.hero.title"/>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs text-gray-500 transition-all outline-none placeholder:text-gray-300" placeholder="Context" type="text" value="Landing Page"/>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1">Welcome back</textarea>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1">おかえりなさい</textarea>
</td>
<td className="py-2 px-4 align-top">
<div className="relative">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm pl-1.5 pr-6 py-1 -mx-1.5 text-xs text-indigo-600 hover:underline cursor-pointer focus:cursor-text focus:no-underline transition-all outline-none truncate placeholder:text-gray-300" placeholder="Add Link" type="text" value="https://figma.com/file/..."/>
<a className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
<span className="iconify" data-icon="lucide:external-link" data-width="10"></span>
</a>
</div>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-400 transition-all outline-none placeholder:text-gray-300" placeholder="File path" type="text" value="src/pages/index.tsx"/>
</td>
<td className="py-2 px-4 align-top text-right">
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-red-50 rounded">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/60 transition-colors">
<td className="py-2 px-6 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-600 transition-all outline-none placeholder:text-gray-300" placeholder="key_name" type="text" value="btn.submit_payment"/>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs text-gray-500 transition-all outline-none placeholder:text-gray-300" placeholder="Context" type="text" value="Checkout Flow"/>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1">Pay Now</textarea>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1">今すぐ支払う</textarea>
</td>
<td className="py-2 px-4 align-top">
<div className="relative">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm pl-1.5 pr-6 py-1 -mx-1.5 text-xs text-gray-500 focus:text-gray-900 transition-all outline-none truncate placeholder:text-gray-300 placeholder:italic" placeholder="Paste link..." type="text" value=""/>
</div>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-400 transition-all outline-none placeholder:text-gray-300" placeholder="File path" type="text" value="src/components/Checkout.tsx"/>
</td>
<td className="py-2 px-4 align-top text-right">
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-red-50 rounded">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</button>
</td>
</tr>

<tr className="group hover:bg-gray-50/60 transition-colors">
<td className="py-2 px-6 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-600 transition-all outline-none placeholder:text-gray-300" placeholder="key_name" type="text" value="error.generic"/>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs text-gray-500 transition-all outline-none placeholder:text-gray-300" placeholder="Context" type="text" value="Global"/>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1">Something went wrong. Please try again.</textarea>
</td>
<td className="py-2 px-4 align-top">
<textarea className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1.5 -mx-1.5 text-sm text-gray-900 transition-all outline-none resize-none overflow-hidden placeholder:text-gray-300" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" rows="1"></textarea>
<div className="flex items-center gap-1.5 mt-1.5 px-1.5">
<span className="iconify text-amber-500" data-icon="lucide:alert-circle" data-width="12"></span>
<span className="text-[10px] text-amber-600 font-medium">Missing translation</span>
</div>
</td>
<td className="py-2 px-4 align-top">
<div className="relative">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm pl-1.5 pr-6 py-1 -mx-1.5 text-xs text-indigo-600 hover:underline cursor-pointer focus:cursor-text focus:no-underline transition-all outline-none truncate placeholder:text-gray-300" placeholder="Add Link" type="text" value="https://jira.atlassian.com/browse/..."/>
<a className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
<span className="iconify" data-icon="lucide:external-link" data-width="10"></span>
</a>
</div>
</td>
<td className="py-2 px-4 align-top">
<input className="w-full bg-transparent border border-transparent focus:border-indigo-200 focus:bg-white focus:ring-2 focus:ring-indigo-500/10 rounded-sm px-1.5 py-1 -mx-1.5 text-xs font-mono text-gray-400 transition-all outline-none placeholder:text-gray-300" placeholder="File path" type="text" value="src/utils/error.ts"/>
</td>
<td className="py-2 px-4 align-top text-right">
<button className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-red-50 rounded">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal" id="modal-overlay">

<div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm" onclick="toggleModal(false)"></div>

<div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-gray-200 modal-content overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
<h3 className="text-sm font-semibold text-gray-900">Add Translation Key</h3>
<button className="text-gray-400 hover:text-gray-600 transition-colors" onclick="toggleModal(false)">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</button>
</div>

<div className="px-6 py-6 space-y-5">

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">Key Name</label>
<input className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-mono placeholder:text-gray-400" placeholder="e.g. home.title" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">Context</label>
<input className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-gray-400" placeholder="e.g. Landing Page" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">English (Source)</label>
<span className="text-[10px] text-gray-400">Required</span>
</div>
<textarea className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-gray-400 resize-none" placeholder="Enter source text..." rows="3"></textarea>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="block text-xs font-medium text-gray-500 uppercase tracking-wide">Japanese (Target)</label>
<button className="text-[10px] text-indigo-600 hover:underline flex items-center gap-1">
<span className="iconify" data-icon="lucide:sparkles" data-width="10"></span> Auto-translate
                        </button>
</div>
<textarea className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all placeholder:text-gray-400 resize-none" placeholder="Enter translation..." rows="3"></textarea>
</div>
</div>

<div className="flex items-center justify-end gap-3 px-6 py-4 bg-gray-50/50 border-t border-gray-100">
<button className="px-4 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors" onclick="toggleModal(false)">Cancel</button>
<button className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-md hover:bg-gray-800 shadow-sm transition-colors flex items-center gap-2" onclick="toggleModal(false)">
                    Create Key
                </button>
</div>
</div>
</div>


    </>
  );
}
