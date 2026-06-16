import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Interaction Logic
        document.querySelectorAll('#order-list > div').forEach(item => {
            item.addEventListener('click', function() {
                // Reset all items
                document.querySelectorAll('#order-list > div').forEach(div => {
                    div.classList.remove('bg-white', 'border-slate-200', 'shadow-sm', 'relative', 'overflow-hidden');
                    div.classList.add('hover:bg-white', 'hover:shadow-sm', 'border-transparent');
                    // Remove blue active bar
                    const bar = div.querySelector('.absolute.bg-indigo-500');
                    if(bar) bar.remove();
                });

                // Set active state
                this.classList.remove('hover:bg-white', 'hover:shadow-sm', 'border-transparent');
                this.classList.add('bg-white', 'border-slate-200', 'shadow-sm', 'relative', 'overflow-hidden');
                
                // Add blue bar
                const bar = document.createElement('div');
                bar.className = 'absolute left-0 top-0 bottom-0 w-1 bg-indigo-500';
                this.prepend(bar);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 h-full bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight">RxFlow</span>
</div>
</div>

<nav className="p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-slate-50 text-indigo-600 font-medium text-sm transition-all-custom" href="#">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Order Board
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium text-sm transition-all-custom" href="#">
<iconify-icon icon="solar:hospital-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Clinics
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium text-sm transition-all-custom" href="#">
<iconify-icon icon="solar:bottle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Inventory
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium text-sm transition-all-custom" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Patients
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-50 font-medium text-sm transition-all-custom" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Reports
                </a>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-lg transition-all-custom">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                    JD
                </div>
<div className="flex flex-col items-start">
<span className="text-xs font-medium text-slate-900">John Doe</span>
<span className="text-[10px] text-slate-400">Head Pharmacist</span>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 glass border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-4">
<h1 className="text-base font-semibold text-slate-900 tracking-tight">Fulfillment Queue</h1>
<div className="h-4 w-px bg-slate-300"></div>
<span className="text-xs text-slate-500 font-medium">Today, Oct 24</span>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-64 transition-all-custom placeholder:text-slate-400" placeholder="Search orders, patients..." type="text"/>
</div>
<button className="relative p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all-custom">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-hidden">

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 pb-2">
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pending</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-medium text-slate-900 tracking-tight">24</span>
<span className="text-xs font-medium text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded">+4 new</span>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Processing</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-medium text-slate-900 tracking-tight">12</span>
<iconify-icon className="text-indigo-500 opacity-50" icon="solar:refresh-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Ready for Pickup</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-medium text-slate-900 tracking-tight">8</span>
<iconify-icon className="text-emerald-500 opacity-50" icon="solar:bag-check-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-1">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Urgent</span>
<div className="flex items-end justify-between">
<span className="text-2xl font-medium text-slate-900 tracking-tight">3</span>
<span className="text-xs font-medium text-red-600 bg-red-50 px-1.5 py-0.5 rounded">Action req</span>
</div>
</div>
</div>

<div className="px-6 py-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-3 py-1.5 text-xs font-medium bg-white border border-slate-200 text-slate-900 shadow-sm rounded-md hover:border-slate-300 transition-colors">All Orders</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Pending Review</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Filling</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Completed</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-slate-400">Sort by:</span>
<button className="flex items-center gap-1 text-xs font-medium text-slate-700">
                            Priority
                            <iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
</div>

<div className="px-6 flex items-center text-xs font-medium text-slate-400 pb-2 border-b border-slate-200 mx-6">
<div className="w-16">ID</div>
<div className="flex-1">Patient / Medication</div>
<div className="w-40 hidden md:block">Clinic</div>
<div className="w-32">Status</div>
<div className="w-24 text-right">Time</div>
</div>

<div className="flex-1 overflow-y-auto px-6 py-2 space-y-1" id="order-list">

<div className="group flex items-center py-3 px-3 -mx-3 rounded-lg bg-white border border-slate-200 shadow-sm cursor-pointer transition-all-custom relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
<div className="w-16 text-xs font-medium text-slate-500">#4029</div>
<div className="flex-1 pr-4">
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:pill-linear" width="12"></iconify-icon>
                                Amoxicillin 500mg
                            </div>
</div>
<div className="w-40 hidden md:flex items-center gap-2 text-xs text-slate-600">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:hospital-linear" width="12"></iconify-icon>
</div>
                            City Health Center
                        </div>
<div className="w-32">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<div className="w-1 h-1 rounded-full bg-amber-500"></div>
                                Pending Review
                            </span>
</div>
<div className="w-24 text-right text-xs text-slate-400 font-medium">10m ago</div>
</div>

<div className="group flex items-center py-3 px-3 -mx-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 cursor-pointer transition-all-custom">
<div className="w-16 text-xs font-medium text-slate-500">#4028</div>
<div className="flex-1 pr-4">
<div className="text-sm font-medium text-slate-900">Michael Ross</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:pill-linear" width="12"></iconify-icon>
                                Lisinopril 10mg
                            </div>
</div>
<div className="w-40 hidden md:flex items-center gap-2 text-xs text-slate-600">
<div className="w-5 h-5 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="solar:stethoscope-linear" width="12"></iconify-icon>
</div>
                            Dr. Smith Practice
                        </div>
<div className="w-32">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
<div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse"></div>
                                Filling
                            </span>
</div>
<div className="w-24 text-right text-xs text-slate-400 font-medium">25m ago</div>
</div>

<div className="group flex items-center py-3 px-3 -mx-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 cursor-pointer transition-all-custom">
<div className="w-16 text-xs font-medium text-slate-500">#4027</div>
<div className="flex-1 pr-4">
<div className="text-sm font-medium text-slate-900">Elena Gomez</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:pill-linear" width="12"></iconify-icon>
                                Metformin 500mg
                            </div>
</div>
<div className="w-40 hidden md:flex items-center gap-2 text-xs text-slate-600">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:hospital-linear" width="12"></iconify-icon>
</div>
                            City Health Center
                        </div>
<div className="w-32">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                Ready
                            </span>
</div>
<div className="w-24 text-right text-xs text-slate-400 font-medium">42m ago</div>
</div>

<div className="group flex items-center py-3 px-3 -mx-3 rounded-lg hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 cursor-pointer transition-all-custom">
<div className="w-16 text-xs font-medium text-slate-500">#4026</div>
<div className="flex-1 pr-4">
<div className="flex items-center gap-2">
<div className="text-sm font-medium text-slate-900">David Chen</div>
<span className="bg-red-50 text-red-600 text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded border border-red-100">Urgent</span>
</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
<iconify-icon icon="solar:pill-linear" width="12"></iconify-icon>
                                Atorvastatin 20mg
                            </div>
</div>
<div className="w-40 hidden md:flex items-center gap-2 text-xs text-slate-600">
<div className="w-5 h-5 rounded bg-teal-50 text-teal-600 flex items-center justify-center">
<iconify-icon icon="solar:home-smile-linear" width="12"></iconify-icon>
</div>
                            Valley Care
                        </div>
<div className="w-32">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-100">
<div className="w-1 h-1 rounded-full bg-amber-500"></div>
                                Pending Review
                            </span>
</div>
<div className="w-24 text-right text-xs text-slate-400 font-medium">1h ago</div>
</div>
</div>
</div>

<aside className="w-[400px] bg-white border-l border-slate-200 flex flex-col hidden lg:flex shadow-xl z-30">

<div className="h-16 border-b border-slate-100 flex items-center justify-between px-6 bg-slate-50/50">
<div>
<div className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-0.5">Order Details</div>
<div className="text-sm font-semibold text-slate-900">#4029 - Amoxicillin</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all-custom">
<iconify-icon icon="solar:printer-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all-custom">
<iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8">

<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 text-lg font-medium shadow-inner">
                            SJ
                        </div>
<div className="flex-1">
<h3 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h3>
<p className="text-xs text-slate-500 mt-1">DOB: Jan 12, 1985 (39y)</p>
<div className="flex gap-2 mt-2">
<span className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">No Allergies</span>
<span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">Insurance Active</span>
</div>
</div>
</div>
<div className="h-px bg-slate-100 w-full"></div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Prescription</h4>
<span className="text-[10px] text-slate-400 font-mono">RX-99283-A</span>
</div>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
<div className="flex items-start justify-between mb-3">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-white rounded-md border border-slate-100 shadow-sm text-indigo-600">
<iconify-icon icon="solar:pill-linear" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900">Amoxicillin</span>
</div>
<span className="text-xs font-medium text-slate-900">500mg</span>
</div>
<div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
<div>
<span className="text-slate-400 block mb-0.5">Quantity</span>
<span className="font-medium text-slate-700">30 Capsules</span>
</div>
<div>
<span className="text-slate-400 block mb-0.5">Refills</span>
<span className="font-medium text-slate-700">0 remaining</span>
</div>
<div className="col-span-2">
<span className="text-slate-400 block mb-0.5">Instructions</span>
<span className="font-medium text-slate-700 leading-relaxed">Take 1 capsule by mouth every 8 hours for 10 days. Finish all medication.</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-lg border border-slate-100 hover:border-slate-200 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:user-id-linear" width="16"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs font-medium text-slate-900">Dr. Emily Zhang</div>
<div className="text-[10px] text-slate-500 truncate">City Health Center • NPI #1293810</div>
</div>
<button className="text-indigo-600 text-xs font-medium hover:underline">Contact</button>
</div>
</div>

<div className="space-y-3">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">Verification Steps</h4>
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all-custom group-hover:border-indigo-400 shrink-0">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors">Verify patient identity and insurance coverage</span>
</label>
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all-custom group-hover:border-indigo-400 shrink-0">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors">Check for drug interactions (DUR)</span>
</label>
<label className="custom-checkbox flex items-start gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 mt-0.5 rounded border border-slate-300 bg-white flex items-center justify-center transition-all-custom group-hover:border-indigo-400 shrink-0">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-slate-600 peer-checked:text-slate-400 peer-checked:line-through transition-colors">Count and package medication</span>
</label>
</div>
</div>

<div className="p-4 border-t border-slate-200 bg-white">
<div className="flex gap-3">
<button className="flex-1 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-lg shadow-sm hover:bg-slate-50 hover:border-slate-300 focus:ring-2 focus:ring-slate-100 transition-all-custom">
                            Reject
                        </button>
<button className="flex-[2] py-2.5 px-4 bg-slate-900 border border-transparent text-white text-xs font-medium rounded-lg shadow-sm hover:bg-slate-800 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-all-custom flex items-center justify-center gap-2" onclick="this.innerHTML = '&lt;iconify-icon icon=\'solar:check-circle-linear\' class=\'animate-spin\'&gt;&lt;/iconify-icon&gt; Processing'; setTimeout(() =&gt; { this.innerHTML = 'Fulfillment Started'; this.classList.add('bg-emerald-600', 'border-emerald-600'); }, 1000)">
<span>Start Fulfillment</span>
<iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</aside>
</div>
</main>


    </>
  );
}
