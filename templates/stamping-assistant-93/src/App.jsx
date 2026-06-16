import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Main Sidebar Navigation
        function switchMainTab(tabName) {
            // Hide all views
            ['dashboard', 'apply', 'records', 'settings'].forEach(id => {
                document.getElementById(`view-${id}`).classList.add('hidden-state');
                const navBtn = document.getElementById(`nav-${id}`);
                navBtn.classList.remove('active-nav');
                navBtn.classList.add('text-slate-500');
                navBtn.classList.remove('text-slate-900');
            });

            // Show selected view
            document.getElementById(`view-${tabName}`).classList.remove('hidden-state');
            const activeBtn = document.getElementById(`nav-${tabName}`);
            activeBtn.classList.add('active-nav');
            activeBtn.classList.remove('text-slate-500');
            activeBtn.classList.add('text-slate-900');

            // Reset Apply state if switching back to Apply
            if(tabName === 'apply' && document.getElementById('state-apply-detail').classList.contains('hidden-state') === false) {
                 // Keep current sub-state if already there, or default to search?
                 // For now, let's leave it as is so user context is preserved.
            } else if (tabName === 'apply') {
                switchApplyState('search');
            }
        }

        // Apply Stamping Internal State Navigation
        function switchApplyState(stateName) {
            // Hide all states
            ['search', 'apply-detail', 'add-step1', 'add-step2'].forEach(id => {
                document.getElementById(`state-${id}`).classList.add('hidden-state');
            });

            // Show selected state
            document.getElementById(`state-${stateName}`).classList.remove('hidden-state');
            
            // Scroll to top
            document.querySelector('main').scrollTop = 0;
        }

        // Dynamic Customer Apply Opener
        function openCustomerApply(customerName) {
            // Update Title
            document.getElementById('dynamic-customer-title').textContent = `Apply Stamping – ${customerName}`;
            
            // Switch View (logic handles keeping main tab active)
            switchMainTab('apply');
            switchApplyState('apply-detail');
        }

        // Initialize
        switchMainTab('apply');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 border-b border-slate-200 bg-white fixed top-0 w-full z-30 flex items-center justify-between px-5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center text-white font-semibold tracking-tighter text-sm">
                SA
            </div>
<span className="font-semibold tracking-tight text-slate-900">Stamping Assistant</span>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                System Online
            </div>
<button className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex flex-1 pt-14 h-full">

<aside className="w-64 border-r border-slate-200 bg-white fixed h-[calc(100vh-3.5rem)] flex flex-col justify-between z-20">
<nav className="p-4 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-500" id="nav-dashboard" onclick="switchMainTab('dashboard')">
<iconify-icon icon="solar:widget-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item active-nav w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-900" id="nav-apply" onclick="switchMainTab('apply')">
<iconify-icon icon="solar:stamp-linear" width="18"></iconify-icon>
                    Apply Stamping
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-500" id="nav-records" onclick="switchMainTab('records')">
<iconify-icon icon="solar:database-linear" width="18"></iconify-icon>
                    Stamping Records
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-slate-500" id="nav-settings" onclick="switchMainTab('settings')">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </button>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="text-xs text-slate-400 font-medium">v1.0.0 Production</div>
</div>
</aside>

<main className="flex-1 ml-64 bg-slate-50/50 h-full overflow-y-auto relative">

<div className="hidden-state p-8 max-w-7xl mx-auto" id="view-dashboard">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Dashboard</h1>
<div className="p-12 border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-400">
<iconify-icon className="mb-4 text-slate-300" icon="solar:chart-square-linear" width="48"></iconify-icon>
<span className="font-medium">Dashboard Overview</span>
</div>
</div>

<div className="h-full" id="view-apply">

<div className="p-8 max-w-7xl mx-auto min-h-full" id="state-search">
<div className="flex justify-between items-end mb-6">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Apply Stamping</h1>
<p className="text-slate-500 text-sm mt-1">Select a customer record to begin verification.</p>
</div>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-md shadow-sm flex items-center gap-2 transition-colors" onclick="switchApplyState('add-step1')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            Add New Stamping Data
                        </button>
</div>

<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 mb-6">
<div className="relative">
<iconify-icon className="absolute left-4 top-3 text-slate-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Search by Establishment Name, Trader Number, Mobile or Machine No..." type="text"/>
</div>
</div>

<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium text-slate-500">Establishment Name</th>
<th className="px-6 py-3 font-medium text-slate-500">Trader Number</th>
<th className="px-6 py-3 font-medium text-slate-500">Mobile</th>
<th className="px-6 py-3 font-medium text-slate-500">Total Machines</th>
<th className="px-6 py-3 font-medium text-slate-500">Last CV Year</th>
<th className="px-6 py-3 font-medium text-slate-500 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">Metro Retail Pvt Ltd</td>
<td className="px-6 py-4 text-slate-600 font-mono text-xs">TR-2023-8891</td>
<td className="px-6 py-4 text-slate-600">9876543210</td>
<td className="px-6 py-4 text-slate-600">12</td>
<td className="px-6 py-4 text-slate-600"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs font-medium">2023</span></td>
<td className="px-6 py-4 text-right">
<button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded transition-colors" onclick="openCustomerApply('Metro Retail Pvt Ltd')">
                                            Apply
                                        </button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors group">
<td className="px-6 py-4 font-medium text-slate-900">Golden Weights &amp; Measures</td>
<td className="px-6 py-4 text-slate-600 font-mono text-xs">TR-2022-1045</td>
<td className="px-6 py-4 text-slate-600">9988776655</td>
<td className="px-6 py-4 text-slate-600">4</td>
<td className="px-6 py-4 text-slate-600"><span className="bg-red-50 text-red-600 px-2 py-0.5 rounded text-xs font-medium">2021</span></td>
<td className="px-6 py-4 text-right">
<button className="text-indigo-600 hover:text-indigo-700 font-medium text-xs border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded transition-colors" onclick="openCustomerApply('Golden Weights &amp; Measures')">
                                            Apply
                                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="hidden-state h-full" id="state-apply-detail">

<div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center gap-4 sticky top-0 z-10 shadow-sm">
<button className="text-slate-400 hover:text-slate-800 transition-colors flex items-center gap-1 text-sm font-medium" onclick="switchApplyState('search')">
<iconify-icon icon="solar:arrow-left-linear" width="18"></iconify-icon>
                            Back
                        </button>
<div className="h-4 w-px bg-slate-200"></div>
<h1 className="text-lg font-semibold tracking-tight text-slate-900" id="dynamic-customer-title">Apply Stamping – Customer</h1>
</div>
<div className="p-6 max-w-full mx-auto grid grid-cols-12 gap-8">

<div className="col-span-9 space-y-6">

<div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
                                    Application Overview
                                </h3>
<div className="grid grid-cols-4 gap-6">
<div>
<label className="block text-xs text-slate-500 mb-1">Stamping Type</label>
<div className="text-sm font-medium text-slate-900 bg-slate-50 px-2 py-1 rounded border border-slate-100 inline-block">Re-verification</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Trader Number</label>
<div className="text-sm font-medium text-slate-700 font-mono">TR-2023-8891</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Prev. CV Number</label>
<div className="text-sm font-medium text-slate-700 font-mono">CV-99821</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Prev. CV Date</label>
<div className="text-sm font-medium text-slate-700">12 Oct 2023</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Invoice Number</label>
<div className="text-sm font-medium text-slate-700 font-mono">INV-2024-001</div>
</div>
<div>
<label className="block text-xs text-slate-500 mb-1">Invoice Date</label>
<div className="text-sm font-medium text-slate-700">22 May 2024</div>
</div>
<div className="col-span-2">
<label className="block text-xs font-semibold text-indigo-600 mb-1">Verification Location</label>
<div className="relative">
<select className="w-full bg-indigo-50/50 border border-indigo-200 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 text-slate-700 font-medium">
<option>Office Premises</option>
<option>On-Site (Client Location)</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-indigo-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:user-id-linear"></iconify-icon>
                                        Customer Details
                                    </h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-1">Establishment Name</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="Metro Retail Pvt Ltd"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="45, Industrial Area, Phase 2"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Town</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="Bangalore East"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Taluk</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="Bangalore North"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">District</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="Bangalore Urban"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Pincode</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="560048"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Mobile</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" type="text" value="9876543210"/>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
<button className="text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded transition-colors shadow-sm">Update &amp; Save Customer</button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
<div className="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
<h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:scale-linear"></iconify-icon>
                                        Machine Details
                                    </h3>
<button className="text-xs bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-md shadow-sm font-medium flex items-center gap-1 transition-colors">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon>
                                        Add Machine
                                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-xs">
<thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
<tr>
<th className="px-4 py-2">Class</th>
<th className="px-4 py-2">Denom.</th>
<th className="px-4 py-2">Max</th>
<th className="px-4 py-2">Min</th>
<th className="px-4 py-2">e/d</th>
<th className="px-4 py-2">Make</th>
<th className="px-4 py-2">Model</th>
<th className="px-4 py-2">Machine No</th>
<th className="px-4 py-2 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-4 py-3 text-slate-900">III</td>
<td className="px-4 py-3 text-slate-600">Digital</td>
<td className="px-4 py-3 text-slate-600">15kg</td>
<td className="px-4 py-3 text-slate-600">100g</td>
<td className="px-4 py-3 text-slate-600">5g</td>
<td className="px-4 py-3 text-slate-600">Essae</td>
<td className="px-4 py-3 text-slate-600">DS-215</td>
<td className="px-4 py-3 font-mono text-slate-700">M-9912</td>
<td className="px-4 py-3 text-right">
<button className="text-indigo-600 hover:text-indigo-800 mr-2 font-medium">Edit</button>
<button className="text-red-500 hover:text-red-700 font-medium">Delete</button>
</td>
</tr>
<tr>
<td className="px-4 py-3 text-slate-900">II</td>
<td className="px-4 py-3 text-slate-600">Digital</td>
<td className="px-4 py-3 text-slate-600">600g</td>
<td className="px-4 py-3 text-slate-600">2g</td>
<td className="px-4 py-3 text-slate-600">0.01g</td>
<td className="px-4 py-3 text-slate-600">Phoenix</td>
<td className="px-4 py-3 text-slate-600">Gold-1</td>
<td className="px-4 py-3 font-mono text-slate-700">P-1102</td>
<td className="px-4 py-3 text-right">
<button className="text-indigo-600 hover:text-indigo-800 mr-2 font-medium">Edit</button>
<button className="text-red-500 hover:text-red-700 font-medium">Delete</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm mb-12">
<h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:folder-with-files-linear"></iconify-icon>
                                    Documents Section
                                </h3>
<div className="grid grid-cols-3 gap-4">

<div className="border border-slate-200 rounded-md p-3 flex flex-col justify-between h-32 hover:border-slate-300 transition-colors">
<div>
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:file-check-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase">Verified</span>
</div>
<p className="text-xs font-semibold text-slate-700">Previous CV</p>
<p className="text-[10px] text-slate-400">CV-99821.pdf</p>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-medium py-1.5 rounded transition-colors">View</button>
<button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-[10px] font-medium py-1.5 rounded transition-colors">Replace</button>
</div>
</div>

<div className="border border-slate-200 rounded-md p-3 flex flex-col justify-between h-32 hover:border-slate-300 transition-colors">
<div>
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:user-hand-up-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase">Uploaded</span>
</div>
<p className="text-xs font-semibold text-slate-700">Authorization Letter</p>
<p className="text-[10px] text-slate-400">Auth-Metro.pdf</p>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-medium py-1.5 rounded transition-colors">View</button>
<button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-[10px] font-medium py-1.5 rounded transition-colors">Replace</button>
</div>
</div>

<div className="border border-slate-200 rounded-md p-3 flex flex-col justify-between h-32 hover:border-slate-300 transition-colors">
<div>
<div className="flex justify-between items-start mb-2">
<div className="w-8 h-8 rounded bg-slate-100 text-slate-400 flex items-center justify-center">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded uppercase">Empty</span>
</div>
<p className="text-xs font-semibold text-slate-700">PAN Card</p>
<p className="text-[10px] text-slate-400 text-red-500">Missing File</p>
</div>
<div className="flex gap-2 mt-2">
<button className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-medium py-1.5 rounded transition-colors">View</button>
<button className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 text-[10px] font-medium py-1.5 rounded transition-colors">Upload</button>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-3">
<div className="sticky top-6">
<div className="bg-slate-900 rounded-xl p-5 shadow-lg text-white">
<h3 className="text-sm font-semibold mb-4 border-b border-slate-700 pb-3">Submission Summary</h3>
<div className="space-y-3 mb-6">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300">Certificate Loaded</span>
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300">Machines Available</span>
<div className="flex items-center gap-1">
<span className="font-bold text-white">2</span>
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-300">Documents Uploaded</span>
<div className="flex items-center gap-1">
<span className="font-bold text-yellow-400">2/3</span>
<iconify-icon className="text-yellow-400" icon="solar:danger-circle-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="bg-slate-800 rounded-lg p-3 mb-6">
<p className="text-[10px] uppercase font-bold text-slate-400 mb-2">Required Documents</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-emerald-400">
<iconify-icon icon="solar:file-check-linear"></iconify-icon> Previous CV
                                            </li>
<li className="flex items-center gap-2 text-xs text-emerald-400">
<iconify-icon icon="solar:user-hand-up-linear"></iconify-icon> Authorization Letter
                                            </li>
<li className="flex items-center gap-2 text-xs text-slate-500 opacity-60">
<iconify-icon icon="solar:card-linear"></iconify-icon> PAN Card
                                            </li>
</ul>
</div>
<button className="w-full bg-white hover:bg-indigo-50 text-slate-900 text-sm font-bold py-3 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2">
                                        Proceed to Submission
                                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden-state p-8 max-w-4xl mx-auto min-h-full flex flex-col justify-center" id="state-add-step1">
<div className="text-center mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Add New Stamping Data</h1>
<p className="text-slate-500 text-sm mt-1">Step 1 of 2: Upload Documents</p>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
<div className="space-y-6">

<div>
<label className="block text-sm font-medium text-slate-700 mb-2">CV Certificate PDF <span className="text-red-500">*</span></label>
<div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-600">Click to upload CV Certificate</span>
<span className="text-xs text-slate-400 mt-1">PDF up to 5MB</span>
</div>
</div>

<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">Authorization Letter <span className="text-red-500">*</span></label>
<div className="border border-slate-200 rounded-lg p-4 flex items-center justify-between bg-slate-50">
<span className="text-sm text-slate-500">No file selected</span>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">Browse</button>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2">PAN Card <span className="text-red-500">*</span></label>
<div className="border border-slate-200 rounded-lg p-4 flex items-center justify-between bg-slate-50">
<span className="text-sm text-slate-500">No file selected</span>
<button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">Browse</button>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-100 flex justify-end gap-3">
<button className="text-sm font-medium text-slate-500 px-6 py-2.5 rounded-lg hover:text-slate-800 transition-colors" onclick="switchApplyState('search')">Cancel</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg shadow-sm flex items-center gap-2 transition-colors" onclick="switchApplyState('add-step2')">
                                Extract Data
                                <iconify-icon icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden-state p-8 max-w-5xl mx-auto" id="state-add-step2">
<div className="flex items-center gap-4 mb-6">
<button className="text-slate-400 hover:text-slate-800 transition-colors" onclick="switchApplyState('add-step1')">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Verify Extracted Data</h1>
<p className="text-slate-500 text-xs mt-1">Step 2 of 2: Review &amp; Save</p>
</div>
</div>
<div className="space-y-6 pb-24">

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-bl-lg text-xs font-medium flex items-center gap-1">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Auto-Extracted
                            </div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Certificate Details</h3>
<div className="grid grid-cols-4 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">CV Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="CV-88210"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">CV Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="15-05-2023"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Trader Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="TR-9981"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Application Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="APP-0012"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Invoice Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="INV-991"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Invoice Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:bg-white outline-none" type="text" value="20-05-2024"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Stamping Type</label>
<select className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm outline-none">
<option>Re-verification</option>
<option>New Verification</option>
</select>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Customer Details</h3>
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-1">Establishment Name</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm outline-none" type="text" value="New Horizon Traders"/>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-slate-500 mb-1">Address</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm outline-none" type="text" value="Shop 12, Electronic City"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Town</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm outline-none" type="text" value="Bangalore"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Pincode</label>
<input className="w-full bg-white border border-slate-200 rounded px-3 py-2 text-sm outline-none" type="text" value="560100"/>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
<div className="bg-slate-50 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
<h3 className="text-sm font-semibold text-slate-900">Machine Details</h3>
<button className="text-xs text-indigo-600 font-medium hover:underline">Add Machine</button>
</div>
<table className="w-full text-left text-xs">
<thead className="bg-white text-slate-500 font-medium border-b border-slate-200">
<tr>
<th className="px-6 py-2">Class</th>
<th className="px-6 py-2">Make/Model</th>
<th className="px-6 py-2">Machine No.</th>
<th className="px-6 py-2">Cap (Max/Min)</th>
<th className="px-6 py-2 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="px-6 py-3">III</td>
<td className="px-6 py-3">Phoenix / PX-100</td>
<td className="px-6 py-3 font-mono">M-9912</td>
<td className="px-6 py-3">100kg / 200g</td>
<td className="px-6 py-3 text-right">
<button className="text-slate-400 hover:text-indigo-600 mr-2"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-slate-400 hover:text-red-600"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="grid grid-cols-2 gap-6">
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">PAN Details</h3>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">PAN Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm font-mono outline-none" type="text" value="ABCDE1234F"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1">Incorporation Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm outline-none" type="text" value="01-01-2010"/>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Documents Preview</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-500" icon="solar:file-text-linear"></iconify-icon>
<span className="text-xs text-slate-600">CV.pdf</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-500" icon="solar:user-hand-up-linear"></iconify-icon>
<span className="text-xs text-slate-600">Auth.pdf</span>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 right-0 left-64 bg-white border-t border-slate-200 p-4 px-8 flex justify-between items-center z-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<button className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors" onclick="switchApplyState('search')">Cancel</button>
<div className="flex gap-3">
<button className="px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors" onclick="switchApplyState('search')">
                                Save Stamping Data
                            </button>
<button className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 shadow-md transition-colors flex items-center gap-2" onclick="openCustomerApply('New Horizon Traders')">
                                Apply for Stamping
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden-state p-8 max-w-7xl mx-auto" id="view-records">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Stamping Records</h1>
<div className="bg-white p-12 border border-slate-200 rounded-xl text-center text-slate-400">
<iconify-icon className="mb-4 text-slate-300" icon="solar:database-linear" width="48"></iconify-icon>
<p>Records Database View Placeholder</p>
</div>
</div>

<div className="hidden-state p-8 max-w-7xl mx-auto" id="view-settings">
<h1 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Settings</h1>
<div className="bg-white p-12 border border-slate-200 rounded-xl text-center text-slate-400">
<iconify-icon className="mb-4 text-slate-300" icon="solar:settings-linear" width="48"></iconify-icon>
<p>Configuration Placeholder</p>
</div>
</div>
</main>
</div>



    </>
  );
}
