import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                if (!modal.classList.contains('active')) {
                    modal.classList.add('active');
                } else {
                    modal.classList.remove('active');
                }
            }
        }

        function closeModal(event, modalId) {
            if (event.target.id === modalId) {
                document.getElementById(modalId).classList.remove('active');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
<div className="p-5 flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Konfirmity</span>
</div>
<nav className="flex-1 px-3 space-y-0.5 overflow-y-auto py-2">
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:home-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-emerald-700 bg-emerald-50/60 rounded-md group transition-colors" href="#">
<iconify-icon icon="solar:file-text-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Documents</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:tuning-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Controls</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">People</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:shop-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Vendors</span>
</a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Risk Management</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Risks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-md group transition-colors" href="#">
<iconify-icon className="text-slate-400 group-hover:text-slate-600" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
<span className="text-[14px] font-medium">Audits</span>
</a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3 p-1 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-xs border border-indigo-200">VP</div>
<div className="flex-1 overflow-hidden">
<p className="text-[13px] font-medium text-slate-900 truncate">Vaishnavi Pawar</p>
<p className="text-[11px] text-slate-500 truncate">Konfirmity Pte Ltd</p>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white relative">

<header className="px-8 py-5 border-b border-gray-200 bg-white flex justify-between items-center sticky top-0 z-10">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-slate-500">Workspace</span>
<iconify-icon className="text-slate-300" height="12" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-xs font-medium text-slate-900">Compliance</span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Documents</h1>
</div>

<div className="flex items-center gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition-all">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition-all">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-gray-50/30 pb-24"> 
<div className="p-8">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="relative w-64 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-9 pr-4 py-1.5 bg-white border border-gray-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm" placeholder="Filter by name..." type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-gray-100/50 hover:bg-gray-100 border border-transparent hover:border-gray-200 rounded text-sm text-slate-600 font-medium transition-all">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filter
                        </button>
</div>
<div className="flex items-center gap-2 bg-white p-1 rounded-md border border-gray-200 shadow-sm">
<button className="p-1.5 rounded bg-gray-100 text-slate-900"><iconify-icon icon="solar:list-linear" width="16"></iconify-icon></button>
<button className="p-1.5 rounded text-slate-400 hover:text-slate-600 hover:bg-gray-50"><iconify-icon icon="solar:kanban-linear" width="16"></iconify-icon></button>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-200">
<th className="pl-6 pr-4 py-3 w-8">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
</label>
</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-4/12">Document Name</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Owner</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Updated</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Completion</th>
<th className="px-4 py-3 w-10"></th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">

<tr className="hover:bg-gray-50 transition-colors group">
<td className="pl-6 pr-4 py-3">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
</label>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:file-text-bold" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Physical Security Policy</span>
<span className="block text-[11px] text-slate-400">PSP-001 • v2.1</span>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-[10px] font-bold border border-white shadow-sm">SJ</div>
<span className="text-xs text-slate-600">Sarah J.</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-slate-600">Mar 27, 2026</span>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                        Active
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 w-20 bg-gray-100 rounded-full h-1.5">
<div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-xs text-slate-500">100%</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600 hover:bg-gray-100 p-1 rounded transition-all">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>

<tr className="hover:bg-gray-50 transition-colors group">
<td className="pl-6 pr-4 py-3">
<label className="custom-checkbox flex items-center cursor-pointer">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-gray-300 rounded bg-white flex items-center justify-center transition-colors">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
</label>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-50 flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:document-add-bold" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm font-medium text-slate-900">Vendor Management</span>
<span className="block text-[11px] text-slate-400">VMP-003 • Draft</span>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-[10px] font-bold border border-white shadow-sm">AG</div>
<span className="text-xs text-slate-600">Alex G.</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-slate-600">2 mins ago</span>
</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
                                        Draft
                                    </span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-2">
<div className="flex-1 w-20 bg-gray-100 rounded-full h-1.5">
<div className="bg-amber-400 h-1.5 rounded-full" style={{width: '45%'}}></div>
</div>
<span className="text-xs text-slate-500">45%</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<button className="text-slate-400 hover:text-slate-600 hover:bg-gray-100 p-1 rounded transition-all">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 floating-bar">
<div className="bg-white/90 backdrop-blur-md border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-1.5 rounded-full flex items-center gap-1.5">

<button className="flex items-center gap-2 pl-3 pr-4 py-2 bg-gradient-to-r from-purple-50 to-indigo-50 hover:from-purple-100 hover:to-indigo-100 text-purple-700 rounded-full transition-all group border border-purple-100/50" onclick="toggleModal('tambiModal')">
<iconify-icon className="group-hover:animate-pulse" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight">Ask Tambi</span>
</button>
<div className="w-px h-5 bg-gray-200 mx-1"></div>

<button className="flex items-center justify-center w-10 h-10 rounded-full text-slate-600 hover:bg-gray-100 hover:text-slate-900 transition-all tooltip-trigger relative group" onclick="toggleModal('importModal')">
<iconify-icon icon="solar:upload-minimalistic-linear" width="20"></iconify-icon>

<span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Import</span>
</button>

<button className="flex items-center gap-2 pl-3 pr-4 py-2 bg-slate-900 text-white hover:bg-slate-800 rounded-full shadow-lg shadow-slate-200 transition-all active:scale-95 border border-slate-700">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
<span className="text-sm font-medium tracking-tight">New Doc</span>
</button>
</div>
</div>
</main>

<aside className="w-[400px] bg-[#F4F5F7] border-l border-gray-200 flex flex-col z-10 shadow-[rgba(0,0,0,0.05)_0px_0px_10px]">
<div className="p-5 border-b border-gray-200 bg-white">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-500" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h2 className="text-base font-semibold text-slate-900">Tasks</h2>
<span className="px-2 py-0.5 rounded-full bg-gray-100 text-slate-500 text-xs font-medium">4</span>
</div>
<button className="text-slate-400 hover:text-slate-600 transition-colors p-1 hover:bg-gray-100 rounded">
<iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex gap-2 mb-2">
<div className="h-1.5 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1.5 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
<div className="h-1.5 flex-1 bg-gray-200 rounded-full"></div>
</div>
<p className="text-xs text-slate-500 text-right">50% Completed</p>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3">
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 pl-1">To Do</p>

<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group relative">
<div className="flex justify-between items-start mb-2">
<span className="bg-red-50 text-red-700 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-red-100">CRITICAL</span>
<button className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:pen-linear" width="14"></iconify-icon></button>
</div>
<h3 className="text-sm font-medium text-slate-800 leading-snug mb-3">Deploy Comprehensive Logging and Monitoring</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span className="text-xs">Dec 25</span>
</div>
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-white flex items-center justify-center text-[9px] text-slate-500 font-medium">AG</div>
</div>
</div>
</div>

<div className="bg-white p-3 rounded-lg border border-gray-200 shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:shadow-md hover:border-gray-300 transition-all cursor-pointer group">
<div className="flex justify-between items-start mb-2">
<span className="bg-amber-50 text-amber-700 text-[10px] font-semibold px-1.5 py-0.5 rounded border border-amber-100">HIGH</span>
</div>
<h3 className="text-sm font-medium text-slate-800 leading-snug mb-3">Enable MFA for all admin accounts</h3>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-400">
<iconify-icon icon="solar:paperclip-linear" width="14"></iconify-icon>
<span className="text-xs">2</span>
</div>
<div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 border border-white flex items-center justify-center text-[9px] font-medium">VP</div>
</div>
</div>

<div className="bg-slate-50 p-3 rounded-lg border border-gray-200 transition-all cursor-pointer opacity-75 hover:opacity-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-xs text-emerald-700 font-medium line-through">Security Training</span>
</div>
<h3 className="text-sm font-medium text-slate-500 line-through leading-snug">Q4 Security Awareness Session</h3>
</div>
</div>

<div className="p-3 bg-white border-t border-gray-200">
<button className="w-full py-2 flex items-center justify-center gap-2 text-slate-500 hover:bg-gray-50 hover:text-slate-700 rounded-md transition-colors text-sm font-medium">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                Add another card
            </button>
</div>
</aside>

<div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm" id="tambiModal" onclick="closeModal(event, 'tambiModal')">
<div className="modal-content bg-white w-full max-w-lg rounded-xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col h-[500px]" onclick="event.stopPropagation()">

<div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-purple-50/50 to-white">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
<iconify-icon icon="solar:stars-minimalistic-bold" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Tambi AI</h3>
<p className="text-[11px] text-slate-500">Compliance Assistant</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600" onclick="document.getElementById('tambiModal').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 p-5 overflow-y-auto bg-gray-50/30 space-y-4">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 border border-purple-200">
<iconify-icon icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
</div>
<div className="space-y-2">
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm text-sm text-slate-700 leading-relaxed">
                            Hi Vaishnavi! I've analyzed your <strong>Physical Security Policy</strong>. It looks 95% complete but misses a section on "Visitor Logging".
                        </div>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white border border-purple-100 hover:border-purple-300 rounded-full text-xs text-purple-700 font-medium transition-colors shadow-sm">
                                Generate Visitor Section
                            </button>
<button className="px-3 py-1.5 bg-white border border-gray-200 hover:border-gray-300 rounded-full text-xs text-slate-600 font-medium transition-colors shadow-sm">
                                Ignore
                            </button>
</div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-700 border border-indigo-200 text-xs font-bold">
                         VP
                    </div>
<div className="bg-indigo-600 text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm leading-relaxed">
                        Can you draft that section for me based on ISO 27001 standards?
                    </div>
</div>

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center text-purple-600 border border-purple-200">
<iconify-icon icon="solar:magic-stick-3-bold" width="14"></iconify-icon>
</div>
<div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1">
<span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-75"></span>
<span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-150"></span>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-100 bg-white">
<div className="relative">
<input className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all" placeholder="Ask Tambi to write policies, check risks..." type="text"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors shadow-sm">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-sm" id="importModal" onclick="closeModal(event, 'importModal')">
<div className="modal-content bg-white w-full max-w-2xl rounded-xl shadow-2xl border border-gray-100 overflow-hidden" onclick="event.stopPropagation()">
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Import Documents</h3>
<p className="text-sm text-slate-500 mt-1">Upload existing policies to auto-map controls.</p>
</div>
<button className="text-slate-400 hover:text-slate-600" onclick="document.getElementById('importModal').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="border-2 border-dashed border-gray-200 rounded-xl p-10 flex flex-col items-center justify-center text-center bg-gray-50 hover:bg-gray-50/80 hover:border-emerald-400 transition-all cursor-pointer group">
<div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-emerald-500" icon="solar:cloud-upload-linear" width="32"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-slate-900">Click to upload or drag and drop</h4>
<p className="text-xs text-slate-500 mt-1">PDF, DOCX, or XLSX (max 10MB)</p>
</div>

<div className="mt-6">
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Or import from</h4>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all text-left">
<iconify-icon icon="logos:google-drive" width="24"></iconify-icon>
<div>
<span className="block text-sm font-medium text-slate-900">Google Drive</span>
<span className="block text-xs text-slate-500">Connect account</span>
</div>
</button>
<button className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all text-left">
<iconify-icon icon="logos:microsoft-onedrive" width="24"></iconify-icon>
<div>
<span className="block text-sm font-medium text-slate-900">OneDrive</span>
<span className="block text-xs text-slate-500">Connect account</span>
</div>
</button>
</div>
</div>
</div>
<div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-gray-100">
<button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="document.getElementById('importModal').classList.remove('active')">Cancel</button>
<button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-md hover:bg-emerald-700 shadow-sm transition-all">Upload Files</button>
</div>
</div>
</div>


    </>
  );
}
