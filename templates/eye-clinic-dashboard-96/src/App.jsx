import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to handle custom toggle visual state
        document.getElementById('discharge-ready')?.addEventListener('change', function() {
            const dot = this.parentElement.querySelector('.dot');
            if(this.checked) {
                dot.style.transform = 'translateX(12px)';
            } else {
                dot.style.transform = 'translateX(0)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-16 md:w-56 bg-white border-r border-neutral-200/80 flex flex-col justify-between hidden sm:flex shrink-0">
<div>

<div className="h-14 flex items-center justify-center md:justify-start md:px-6 border-b border-neutral-200/80">
<span className="tracking-tighter font-semibold text-lg text-neutral-900">OCU</span>
</div>

<nav className="p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 bg-neutral-100/80 text-neutral-900 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Overview</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Appointments</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Patients</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Prescriptions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Surgeries</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors" href="#">
<iconify-icon icon="solar:bill-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium hidden md:block">Billing</span>
</a>
</nav>
</div>
<div className="p-4 border-t border-neutral-200/80">
<button className="w-full flex items-center justify-center md:justify-start gap-3 text-neutral-500 hover:text-neutral-900 transition-colors">
<div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-xs font-medium text-neutral-700">DR</div>
<div className="hidden md:block text-left">
<div className="text-sm font-medium text-neutral-900">Dr. Sarah Vance</div>
<div className="text-xs text-neutral-500">Ophthalmologist</div>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-14 bg-white border-b border-neutral-200/80 flex items-center justify-between px-4 sm:px-6 shrink-0 z-10">
<div className="flex items-center gap-4 flex-1">
<button className="sm:hidden text-neutral-500">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2 text-sm text-neutral-500">
<span>Patients</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
<span className="text-neutral-900 font-medium">Record Management</span>
</div>
</div>

<div className="relative w-full max-w-md hidden md:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-1.5 border border-neutral-200 rounded-md leading-5 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-neutral-300 focus:ring-1 focus:ring-neutral-300 sm:text-sm transition-colors" placeholder="Search by Patient ID (e.g. PT-8921) or Name..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-2 flex items-center">
<span className="text-xs text-neutral-400 border border-neutral-200 rounded px-1.5 py-0.5">⌘K</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-neutral-900">Patient Dashboard</h1>
<p className="text-sm text-neutral-500 mt-1">Manage appointments, clinical records, and billing.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                        New Patient
                    </button>
</div>

<section className="bg-white border border-neutral-200/80 rounded-xl shadow-sm overflow-hidden">
<div className="p-5 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between border-b border-neutral-100">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-semibold text-lg">
                                JD
                            </div>
<div>
<div className="flex items-center gap-2">
<h2 className="text-lg font-semibold tracking-tight text-neutral-900">Johnathan Doe</h2>
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200/60">Active</span>
</div>
<div className="text-sm text-neutral-500 flex flex-wrap gap-x-4 gap-y-1 mt-1">
<span>ID: <strong className="font-medium text-neutral-700">PT-89215</strong></span>
<span>Age: 64</span>
<span>Male</span>
<span>Blood Grp: O+</span>
</div>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors">View Full History</button>
</div>
</div>

<div className="bg-neutral-50/50 p-4 px-5">
<h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">Recent Activity</h3>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
<div className="flex gap-3">
<div className="mt-0.5"><iconify-icon className="text-neutral-400" icon="solar:calendar-date-linear" width="16"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-neutral-900">Consultation</p>
<p className="text-xs text-neutral-500">Oct 12, 2023 • Routine Checkup</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5"><iconify-icon className="text-blue-500" icon="solar:document-medicine-linear" width="16"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-neutral-900">Rx Updated</p>
<p className="text-xs text-neutral-500">Oct 12, 2023 • Presbyopia</p>
</div>
</div>
<div className="flex gap-3 opacity-60">
<div className="mt-0.5"><iconify-icon className="text-neutral-400" icon="solar:eye-linear" width="16"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-neutral-900">Cataract Surgery (OS)</p>
<p className="text-xs text-neutral-500">Jan 15, 2021 • Uncomplicated</p>
</div>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<section className="bg-white border border-neutral-200/80 rounded-xl shadow-sm flex flex-col">
<div className="p-5 border-b border-neutral-100 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:calendar-add-linear"></iconify-icon>
                                Book Appointment
                            </h3>
</div>
<div className="p-5 flex-1 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1">Date</label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1">Time</label>
<input className="w-full px-3 py-2 border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900" type="time"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1">Visit Reason</label>
<select className="w-full px-3 py-2 border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 bg-white appearance-none">
<option>Routine Eye Exam</option>
<option>Cataract Evaluation</option>
<option>Glaucoma Follow-up</option>
<option>Lasik Consultation</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1">Notes</label>
<textarea className="w-full px-3 py-2 border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900 placeholder-neutral-400 resize-none" placeholder="Patient complains of blurry vision in right eye..." rows="2"></textarea>
</div>
</div>
<div className="p-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end">
<button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors">Schedule</button>
</div>
</section>

<section className="bg-white border border-neutral-200/80 rounded-xl shadow-sm flex flex-col">
<div className="p-5 border-b border-neutral-100 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:glasses-linear"></iconify-icon>
                                Optical Prescription
                            </h3>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" title="Print Prescription">
<iconify-icon icon="solar:printer-linear" width="18"></iconify-icon>
</button>
</div>
<div className="p-5 flex-1">

<div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr] gap-2 text-center pb-2 border-b border-neutral-100 mb-3">
<div className="text-left text-xs font-semibold text-neutral-400 uppercase">Eye</div>
<div className="text-xs font-semibold text-neutral-500">SPH</div>
<div className="text-xs font-semibold text-neutral-500">CYL</div>
<div className="text-xs font-semibold text-neutral-500">AXIS</div>
<div className="text-xs font-semibold text-neutral-500">VA</div>
<div className="text-xs font-semibold text-neutral-500">ADD</div>
</div>

<div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr] gap-2 items-center mb-3">
<div className="text-sm font-medium text-neutral-900">OD <span className="text-xs text-neutral-400 font-normal block">Right</span></div>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="-1.50"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="-0.50"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="180"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="6/6"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="+2.00"/>
</div>

<div className="grid grid-cols-[60px_1fr_1fr_1fr_1fr_1fr] gap-2 items-center mb-5">
<div className="text-sm font-medium text-neutral-900">OS <span className="text-xs text-neutral-400 font-normal block">Left</span></div>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="-1.75"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="-0.25"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="175"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="6/6"/>
<input className="w-full text-center px-2 py-1.5 border border-neutral-200 rounded text-sm focus:outline-none focus:border-neutral-900" type="text" value="+2.00"/>
</div>
<div className="space-y-3 pt-3 border-t border-neutral-100">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1">Medication / Drops</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm text-neutral-900 focus:outline-none focus:border-neutral-900" type="text" value="Systane Ultra Eye Drops - 1 drop TID"/>
</div>
<div className="flex items-center gap-4">
<label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" type="checkbox"/>
                                        Bifocal
                                    </label>
<label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900" type="checkbox"/>
                                        Anti-Reflective
                                    </label>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end gap-2">
<button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-md hover:bg-neutral-50 transition-colors">Save Draft</button>
<button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors">Generate Rx</button>
</div>
</section>

<section className="bg-white border border-neutral-200/80 rounded-xl shadow-sm flex flex-col lg:col-span-2">
<div className="p-5 border-b border-neutral-100 flex items-center justify-between">
<div>
<h3 className="text-base font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:clipboard-list-linear"></iconify-icon>
                                    Surgery Discharge Summary
                                </h3>
<p className="text-xs text-neutral-500 mt-1">Cataract Phacoemulsification + IOL Implantation</p>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200/60">Pending Sign-off</span>
</div>
<div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-4">
<h4 className="text-sm font-semibold text-neutral-900 border-b border-neutral-100 pb-2">Operation Details</h4>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Date of Surgery</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="date" value="2023-10-24"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Operated Eye</label>
<div className="flex gap-4">
<label className="flex items-center gap-2 text-sm text-neutral-900"><input className="text-neutral-900 focus:ring-neutral-900" name="eye" type="radio"/> OD (Right)</label>
<label className="flex items-center gap-2 text-sm text-neutral-900"><input checked="" className="text-neutral-900 focus:ring-neutral-900" name="eye" type="radio"/> OS (Left)</label>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Surgeon</label>
<input className="w-full px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-md text-sm text-neutral-700 outline-none" readonly="" type="text" value="Dr. Sarah Vance"/>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold text-neutral-900 border-b border-neutral-100 pb-2">IOL Implantation</h4>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Lens Make / Model</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="text" value="Alcon AcrySof IQ"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Power (D)</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="text" value="+21.5 D"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Target Refraction</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="text" value="-0.25 D"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Complications</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="text" value="None. Uneventful procedure."/>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold text-neutral-900 border-b border-neutral-100 pb-2">Post-Op Instructions</h4>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Review Date</label>
<input className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900" type="date" value="2023-10-25"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-1">Medications</label>
<textarea className="w-full px-3 py-1.5 border border-neutral-200 rounded-md text-sm focus:outline-none focus:border-neutral-900 resize-none" rows="3">1. Moxifloxacin Eye Drops (4 times/day)
2. Prednisolone Acetate (4 times/day)
3. Wear protective shield at night.</textarea>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-100 bg-neutral-50/50 flex justify-end gap-3 items-center">

<label className="flex items-center gap-2 cursor-pointer mr-auto">
<div className="relative">
<input className="sr-only toggle-checkbox" id="discharge-ready" type="checkbox"/>
<div className="block bg-neutral-200 w-8 h-5 rounded-full transition-colors toggle-label"></div>
<div className="dot absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform"></div>
</div>
<span className="text-xs font-medium text-neutral-600">Mark Ready for Print</span>
</label>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-md hover:bg-neutral-50 transition-colors">
<iconify-icon icon="solar:printer-linear"></iconify-icon> Print Summary
                            </button>
<button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors">Save Record</button>
</div>
</section>

<section className="bg-white border border-neutral-200/80 rounded-xl shadow-sm flex flex-col lg:col-span-2">
<div className="p-5 border-b border-neutral-100 flex items-center justify-between">
<h3 className="text-base font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="solar:bill-list-linear"></iconify-icon>
                                Billing &amp; Invoicing
                            </h3>
<div className="text-sm font-medium text-neutral-500">Invoice <span className="text-neutral-900">#INV-2023-1089</span></div>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left text-sm border-collapse">
<thead>
<tr className="bg-neutral-50/50 border-b border-neutral-100 text-xs text-neutral-500 uppercase tracking-wider">
<th className="px-5 py-3 font-medium">Description</th>
<th className="px-5 py-3 font-medium text-center">Qty</th>
<th className="px-5 py-3 font-medium text-right">Unit Price</th>
<th className="px-5 py-3 font-medium text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 text-neutral-700">
<tr>
<td className="px-5 py-3 font-medium text-neutral-900">Phacoemulsification Cataract Surgery (OS)</td>
<td className="px-5 py-3 text-center">1</td>
<td className="px-5 py-3 text-right">$1,200.00</td>
<td className="px-5 py-3 text-right text-neutral-900">$1,200.00</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium text-neutral-900">Alcon AcrySof IQ IOL</td>
<td className="px-5 py-3 text-center">1</td>
<td className="px-5 py-3 text-right">$800.00</td>
<td className="px-5 py-3 text-right text-neutral-900">$800.00</td>
</tr>
<tr>
<td className="px-5 py-3 font-medium text-neutral-900">OT Consumables &amp; Medications</td>
<td className="px-5 py-3 text-center">1</td>
<td className="px-5 py-3 text-right">$150.00</td>
<td className="px-5 py-3 text-right text-neutral-900">$150.00</td>
</tr>
</tbody>
</table>
</div>
<div className="p-5 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-end gap-6 bg-neutral-50/30">
<div className="w-full md:w-1/2">
<label className="block text-xs font-medium text-neutral-500 mb-1">Payment Method</label>
<div className="flex gap-2">
<select className="px-3 py-1.5 border border-neutral-200 rounded-md text-sm text-neutral-900 bg-white focus:outline-none focus:border-neutral-900 appearance-none flex-1">
<option>Credit Card (Visa)</option>
<option>Cash</option>
<option>Insurance</option>
</select>
<button className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md text-sm font-medium hover:bg-neutral-50">Add Insurance</button>
</div>
</div>
<div className="w-full md:w-64 space-y-2 text-sm">
<div className="flex justify-between text-neutral-500">
<span>Subtotal</span>
<span className="text-neutral-900">$2,150.00</span>
</div>
<div className="flex justify-between text-neutral-500">
<span>Tax (5%)</span>
<span className="text-neutral-900">$107.50</span>
</div>
<div className="flex justify-between font-semibold text-base pt-2 border-t border-neutral-200 text-neutral-900">
<span>Total Due</span>
<span>$2,257.50</span>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-100 bg-neutral-50 flex justify-between rounded-b-xl">
<button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-md hover:bg-neutral-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear"></iconify-icon> Download PDF
                            </button>
<button className="px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-md hover:bg-neutral-800 transition-colors">Process Payment</button>
</div>
</section>
</div>
</div>

<div className="h-12"></div>
</div>
</main>


    </>
  );
}
