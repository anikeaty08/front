import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-white border-b border-slate-200 h-16 flex-none z-20">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-semibold tracking-tighter shadow-sm">
                        WF
                    </div>
<div>
<h1 className="text-slate-900 font-medium tracking-tight text-sm">Procurement Workflow</h1>
<p className="text-xs text-slate-400">Rules / Expense Approval</p>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<button className="text-slate-500 hover:text-slate-800 text-xs font-medium px-3 py-2 transition-colors">Reset</button>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-md shadow-sm transition-all flex items-center gap-2">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
                    Publish Workflow
                </button>
</div>
</div>
</header>

<main className="flex-1 overflow-hidden">
<div className="max-w-7xl mx-auto h-full grid grid-cols-12 gap-0">

<div className="col-span-12 lg:col-span-8 h-full overflow-y-auto p-8 relative scroll-smooth">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-3xl mx-auto space-y-8 pb-32">

<div className="flex items-center justify-between">
<h2 className="text-lg font-medium text-slate-900 tracking-tight">Flow Diagram</h2>
<div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:minus-circle-linear" width="18"></iconify-icon></button>
<span className="text-xs font-mono text-slate-500 w-12 text-center">100%</span>
<button className="p-1.5 rounded-md hover:bg-slate-50 text-slate-400 hover:text-slate-600"><iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon></button>
</div>
</div>

<div className="relative pl-2">

<div className="absolute left-[23px] top-4 bottom-8 w-px bg-slate-200 z-0"></div>

<div className="relative flex items-start gap-4 mb-8 z-10">
<div className="w-6 h-6 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center shadow-sm mt-1">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
</div>
<div className="flex-1">
<div className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm w-64">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:user-circle-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Staff</h3>
<p className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Requester</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex items-start gap-4 mb-10 z-10">
<div className="w-6 h-6 rounded-full bg-indigo-50 border-2 border-indigo-500 flex items-center justify-center text-indigo-600 shadow-sm mt-1">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<div className="flex-1">
<div className="bg-white border border-indigo-200 ring-1 ring-indigo-500/10 rounded-lg p-3.5 shadow-sm w-64">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:user-id-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Direct Manager</h3>
<p className="text-[10px] text-indigo-600 font-medium uppercase tracking-wide">Approver</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex items-start gap-4">

<div className="w-6 h-6 rounded-full bg-amber-50 border-2 border-amber-400 text-amber-600 flex items-center justify-center shadow-sm mt-4 z-10">
<iconify-icon icon="solar:branching-paths-down-linear" width="14"></iconify-icon>
</div>
<div className="flex-1 pt-0">

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">

<div className="px-4 py-2.5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:sort-from-top-to-bottom-linear" width="14"></iconify-icon>
<span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Routing Logic</span>
</div>
<span className="text-[10px] text-slate-400 bg-white border border-slate-200 px-2 py-0.5 rounded-full">3 Rules</span>
</div>
<div className="p-6 space-y-8 relative">

<div className="relative">

<div className="absolute left-[11px] top-6 bottom-[-20px] w-px bg-slate-200 border-l border-dashed border-slate-300"></div>
<div className="flex items-start gap-4">

<div className="relative z-10 mt-1.5 flex-none">
<div className="w-6 h-6 rounded bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center">
<iconify-icon icon="solar:wad-of-money-linear" width="14"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">

<div className="flex items-center gap-3 mb-4">
<div className="flex items-center gap-2 bg-amber-50 border border-amber-100 px-2.5 py-1 rounded-md">
<span className="text-[10px] font-bold text-amber-600">IF</span>
<span className="text-xs font-medium text-slate-700">Value &gt; 100,000,000</span>
</div>
<div className="h-px bg-slate-200 flex-1"></div>
</div>

<div className="flex items-center gap-3 mb-6">
<div className="w-16 h-px bg-slate-300"></div>
<div className="flex items-center gap-3 p-2 bg-white border border-slate-200 rounded-md shadow-sm pr-4">
<div className="w-7 h-7 bg-slate-50 rounded flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-800">Dept Head</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>

<div className="relative pl-8 border-l border-slate-200 ml-8 space-y-6 pb-2">

<div className="absolute -left-2.5 top-0 bg-white text-[10px] text-slate-400 px-1">Check</div>

<div className="relative group">
<div className="absolute -left-8 top-3 w-8 h-px bg-slate-200 group-hover:bg-indigo-200 transition-colors"></div>
<div className="bg-indigo-50/30 border border-indigo-100 rounded-lg p-3 hover:border-indigo-300 transition-colors">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-bold text-indigo-600 bg-indigo-100 px-1.5 py-0.5 rounded">IS ASSET</span>
</div>

<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-white border border-slate-200 px-2 py-1.5 rounded shadow-sm">
<span className="w-4 h-4 bg-slate-100 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-500">1</span>
<span className="text-xs font-semibold text-slate-800">Direktur</span>
</div>
<iconify-icon className="text-slate-300" icon="solar:arrow-right-linear" width="12"></iconify-icon>
<div className="flex items-center gap-2 bg-white border border-slate-200 px-2 py-1.5 rounded shadow-sm">
<span className="w-4 h-4 bg-slate-100 rounded-full flex items-center justify-center text-[8px] font-bold text-slate-500">2</span>
<span className="text-xs font-semibold text-slate-800">BOD</span>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-8 top-3 w-8 h-px bg-slate-200"></div>
<div className="bg-white border border-slate-200 rounded-lg p-3 opacity-80 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">ELSE</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-2 py-1.5 rounded border-dashed">
<span className="text-xs font-medium text-slate-600">BOD</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative pt-4">
<div className="flex items-start gap-4">

<div className="relative z-10 mt-1.5 flex-none">
<div className="w-6 h-6 rounded bg-slate-100 border border-slate-300 text-slate-500 flex items-center justify-center">
<iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
<div className="flex-1 min-w-0">

<div className="flex items-center gap-3 mb-4">
<div className="flex items-center gap-2 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
<span className="text-[10px] font-bold text-slate-500">ELSE</span>
<span className="text-xs text-slate-500">(Value &lt;= 100M)</span>
</div>
<div className="h-px bg-slate-200 flex-1"></div>
</div>

<div className="relative border-l border-slate-200 ml-3 pl-6 space-y-6">

<div className="relative">
<div className="absolute -left-6 top-3 w-6 h-px bg-slate-200"></div>

<div className="mb-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-slate-400" icon="solar:box-linear" width="12"></iconify-icon>
<span className="text-[10px] font-mono text-indigo-600">IF IS ASSET</span>
</div>
<div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-md shadow-sm w-fit">
<div className="w-6 h-6 bg-indigo-50 text-indigo-600 rounded flex items-center justify-center">
<iconify-icon icon="solar:clipboard-check-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-800">Pengelola Asset</span>
</div>
</div>

<div className="relative">
<div className="flex items-center gap-2 mb-3">
<span className="text-[10px] font-mono text-slate-400">ELSE</span>
</div>

<div className="relative pl-4 border-l border-slate-200 ml-1 space-y-4">
<div className="absolute -left-[18px] top-4 w-4 h-px bg-slate-200"></div>

<div className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-slate-200"></div>
<div className="flex items-center gap-2 mb-2">
<span className="text-[10px] font-mono text-emerald-600">IF IS INVENTORY</span>
</div>
<div className="flex items-center gap-2 p-2 bg-white border border-slate-200 rounded-md shadow-sm w-fit">
<div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded flex items-center justify-center">
<iconify-icon icon="solar:box-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-800">Gudang</span>
</div>
</div>

<div className="relative">
<div className="absolute -left-4 top-3 w-4 h-px bg-slate-200"></div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-400">ELSE</span>
<span className="text-[10px] text-slate-300 italic">No Action (Proceed to End)</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-2 border-t border-slate-100 flex justify-center hover:bg-slate-100 cursor-pointer transition-colors">
<div className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
<iconify-icon icon="solar:add-circle-linear" width="12"></iconify-icon>
                                            Add Condition
                                        </div>
</div>
</div>
</div>
</div>

<div className="relative flex items-center gap-4 mt-8 ml-0.5 z-10">
<div className="w-6 h-6 rounded-full bg-slate-900 border-2 border-slate-900 text-white flex items-center justify-center shadow-sm">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-xs font-semibold text-slate-800 uppercase tracking-wide">End Workflow</span>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-white border-l border-slate-200 h-full flex flex-col shadow-2xl z-20">

<div className="flex border-b border-slate-200">
<button className="flex-1 py-4 text-xs font-semibold text-slate-900 border-b-2 border-slate-900 bg-slate-50/50">
                        Configuration
                    </button>
<button className="flex-1 py-4 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-50 transition-colors">
                        Test Run
                    </button>
</div>
<div className="flex-1 overflow-y-auto p-6">

<div className="mb-8">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></span>
<h3 className="text-sm font-semibold text-slate-900">Branch Logic</h3>
</div>
<span className="text-[10px] font-mono text-slate-400">ID: #L-492</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                            Define the approval path for High Value requests (&gt; 100M).
                        </p>
</div>

<div className="space-y-6">

<div className="space-y-3">
<label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-2">
<iconify-icon icon="solar:filter-linear" width="12"></iconify-icon>
                                Trigger Condition
                            </label>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm group hover:border-indigo-300 transition-colors">
<div className="flex items-start gap-3">
<div className="mt-1">
<div className="w-4 h-4 rounded border border-indigo-200 bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex-1 space-y-3">
<div className="flex gap-2">
<select className="block w-full text-xs font-medium bg-white border border-slate-200 rounded-md py-1.5 px-2 text-slate-700 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none">
<option>Total Value</option>
</select>
<select className="block w-20 text-xs font-medium bg-white border border-slate-200 rounded-md py-1.5 px-2 text-slate-700 shadow-sm outline-none">
<option>Is &gt; </option>
</select>
</div>
<div className="relative">
<span className="absolute left-2.5 top-1.5 text-xs text-slate-400 font-medium">IDR</span>
<input className="block w-full text-xs font-medium bg-white border border-slate-200 rounded-md py-1.5 pl-10 pr-2 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none" type="text" value="100,000,000"/>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-3">
<label className="text-[10px] uppercase tracking-wider font-bold text-slate-400 flex items-center gap-2">
<iconify-icon icon="solar:route-linear" width="12"></iconify-icon>
                                Approval Path
                            </label>
<div className="relative space-y-0">

<div className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm z-10 relative">
<div className="flex-none w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs font-bold text-slate-500">1</div>
<div className="flex-1">
<p className="text-xs font-semibold text-slate-900">Department Head</p>
<p className="text-[10px] text-slate-400">Fixed Approver</p>
</div>
<button className="text-slate-300 hover:text-slate-500"><iconify-icon icon="solar:menu-dots-linear" width="16"></iconify-icon></button>
</div>

<div className="flex justify-center -my-1 relative z-0">
<div className="h-4 w-px bg-slate-200"></div>
</div>

<div className="bg-amber-50/50 border border-amber-100 rounded-lg p-3 relative z-10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-amber-500" icon="solar:branching-paths-up-linear" width="14"></iconify-icon>
<span className="text-[10px] font-bold text-amber-700 uppercase">Sub-Logic</span>
</div>
<button className="text-[10px] text-amber-600 hover:text-amber-800 font-medium">Edit</button>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-400 w-8 text-right">True</span>
<div className="flex-1 bg-white border border-amber-100 p-1.5 rounded shadow-sm text-[10px] font-medium text-slate-700 flex items-center gap-1">
                                                Direktur <iconify-icon icon="solar:arrow-right-linear" width="10"></iconify-icon> BOD
                                            </div>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-slate-400 w-8 text-right">False</span>
<div className="flex-1 bg-white border border-slate-100 p-1.5 rounded shadow-sm text-[10px] font-medium text-slate-500">
                                                BOD Only
                                            </div>
</div>
</div>
</div>
</div>
<button className="w-full py-2 border border-dashed border-slate-300 text-xs text-slate-500 font-medium rounded-lg hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon>
                                Add Step
                            </button>
</div>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end items-center gap-2">
<button className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-medium px-4 py-2 rounded-md shadow-sm transition-all">Cancel</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-md shadow-sm transition-all">Save Changes</button>
</div>
</div>
</div>
</main>

    </>
  );
}
