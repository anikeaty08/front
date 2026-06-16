import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col flex-shrink-0">
<div className="h-16 flex items-center px-6 border-b border-gray-200">
<span className="text-base font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs font-semibold">PR</div>
                PROCUREMENT
            </span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 flex flex-col gap-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:text-slate-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
                Dashboard
            </a>
<div className="pt-4 pb-1">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-widest">Management</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:text-slate-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
                Vendor Management
            </a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
                    Strategic Sourcing
                </div>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="pl-9 pr-3 py-1 flex flex-col gap-1">
<a className="block px-3 py-1.5 text-sm font-medium text-blue-600" href="#">Create Project</a>
<a className="block px-3 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Project List</a>
</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:text-slate-900 hover:bg-gray-50 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
                Contracts
            </a>
</nav>
<div className="p-4 border-t border-gray-200">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">JD</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">John Doe</span>
<span className="text-xs text-slate-500">Procurement Staff</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-gray-50">

<header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8 flex-shrink-0">
<div className="flex flex-col">
<nav className="flex items-center text-xs font-medium text-slate-500 mb-0.5">
<a className="hover:text-slate-900 transition-colors" href="#">Procurement</a>
<iconify-icon className="mx-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<a className="hover:text-slate-900 transition-colors" href="#">Strategic Sourcing</a>
<iconify-icon className="mx-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-900">Create Project</span>
</nav>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight leading-none">Create Strategic Sourcing</h1>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-200 transition-colors" type="button">
                    Cancel
                </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-md shadow-sm hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 transition-colors flex items-center gap-2" type="button">
<iconify-icon icon="solar:diskette-linear" strokeWidth="1.5"></iconify-icon>
                    Save Project
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-5xl mx-auto space-y-6">

<section className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:info-circle-linear"></iconify-icon>
                            Project Information
                        </h2>
</div>
<div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-500">Project ID <span className="text-slate-400 font-normal ml-1">(Auto Generate)</span></label>
<input className="w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-slate-500 cursor-not-allowed focus:outline-none" readonly="" type="text" value="PRJ-SS-2026-0014"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Project Name <span className="text-red-500">*</span></label>
<input className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors placeholder:text-slate-400" placeholder="Enter project name" type="text" value="Strategic Sourcing Security Paper Rupiah 2027"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Project Type <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors">
<option value="Investasi">Investasi</option>
<option selected="" value="Raw Material">Raw Material</option>
<option value="Packaging">Packaging</option>
<option value="Chemical">Chemical</option>
<option value="Consumable">Consumable</option>
<option value="IT &amp; Digital">IT &amp; Digital</option>
<option value="Konstruksi &amp; Utilitas">Konstruksi &amp; Utilitas</option>
<option value="Admin &amp; Barang Umum">Admin &amp; Barang Umum</option>
<option value="Maintenance, Repair &amp; Operations">Maintenance, Repair &amp; Operations</option>
<option value="Other">Other</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Start Date <span className="text-red-500">*</span></label>
<input className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors" type="date" value="2026-02-10"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">User / Initiating Unit <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors">
<option selected="" value="Divisi Produksi Uang">Divisi Produksi Uang</option>
<option value="Divisi Logistik">Divisi Logistik</option>
<option value="Divisi IT">Divisi IT</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Status</label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors">
<option value="Draft">Draft</option>
<option selected="" value="On Progress">On Progress</option>
<option value="Hold">Hold</option>
<option value="Completed">Completed</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-1.5 lg:col-span-2">
<label className="text-xs font-medium text-slate-700">Target Objectives</label>
<textarea className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none placeholder:text-slate-400" placeholder="e.g. Cost reduction, quality improvement..." rows="2">Efisiensi 6% + peningkatan kualitas durability</textarea>
</div>

<div className="flex flex-col gap-1.5 lg:col-span-2">
<label className="text-xs font-medium text-slate-700">Related Units (Collaboration)</label>
<div className="min-h-[42px] w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors flex flex-wrap gap-1.5 items-center cursor-text">
<span className="inline-flex items-center gap-1.5 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-slate-700 border border-gray-200">
                                    Produksi
                                    <iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1.5 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-slate-700 border border-gray-200">
                                    Procurement
                                    <iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1.5 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-slate-700 border border-gray-200">
                                    QA
                                    <iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1.5 rounded bg-gray-100 px-2 py-1 text-xs font-medium text-slate-700 border border-gray-200">
                                    Keamanan
                                    <iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<input className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none min-w-[120px] px-1 py-0.5" placeholder="Select units..." type="text"/>
</div>
</div>

<div className="flex flex-col gap-1.5 lg:col-span-2">
<label className="text-xs font-medium text-slate-700">Participating Vendors</label>
<div className="min-h-[42px] w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-colors flex flex-wrap gap-1.5 items-center cursor-text">
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100">
<iconify-icon className="text-blue-500" icon="solar:buildings-linear"></iconify-icon>
                                    PT Security Paper Indonesia
                                    <iconify-icon className="text-blue-400 hover:text-blue-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100">
<iconify-icon className="text-blue-500" icon="solar:buildings-linear"></iconify-icon>
                                    De La Rue International Ltd
                                    <iconify-icon className="text-blue-400 hover:text-blue-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 border border-blue-100">
<iconify-icon className="text-blue-500" icon="solar:buildings-linear"></iconify-icon>
                                    Giesecke+Devrient GmbH
                                    <iconify-icon className="text-blue-400 hover:text-blue-600 cursor-pointer" icon="solar:close-circle-linear"></iconify-icon>
</span>
<input className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none min-w-[150px] px-1 py-0.5" placeholder="Search vendors database..." type="text"/>
</div>
<p className="text-[11px] text-slate-500 mt-0.5">Integrated with master vendor data. Type to search.</p>
</div>
</div>
</section>

<section className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:flag-linear"></iconify-icon>
                            Project Progress tracking
                        </h2>

<div className="flex items-center gap-3 bg-gray-50 rounded-md border border-gray-200 px-3 py-1.5">
<span className="text-xs font-medium text-slate-500">Current Phase:</span>
<div className="relative w-48">
<select className="w-full appearance-none bg-transparent py-0.5 pl-1 pr-6 text-sm font-semibold text-blue-600 focus:outline-none cursor-pointer">
<option value="P1">P1 - Initiation</option>
<option value="P2">P2 - Approval</option>
<option value="P3">P3 - RFI</option>
<option selected="" value="P4">P4 - Evaluation</option>
<option value="P5">P5 - Clarification</option>
<option value="P6">P6 - Reporting</option>
<option value="SC">SC - Sourcing Completed</option>
<option value="SS">SS - Savings Secured</option>
</select>
<iconify-icon className="absolute right-0 top-1 text-blue-600 pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="2"></iconify-icon>
</div>
</div>
</div>
<div className="p-6">

<div className="relative w-full hide-scrollbar overflow-x-auto pb-4">
<div className="flex items-center min-w-[800px] justify-between relative pt-2">

<div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-200 -z-10 rounded-full"></div>

<div className="absolute top-6 left-6 h-0.5 bg-green-500 -z-10 rounded-full transition-all duration-500" style={{width: '42%'}}></div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm border-2 border-white ring-2 ring-transparent group-hover:ring-green-100 transition-all z-10">
<iconify-icon className="text-lg" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-semibold text-slate-900">P1</span>
<span className="text-[10px] text-slate-500 mt-0.5 leading-tight">Initiation</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm border-2 border-white ring-2 ring-transparent group-hover:ring-green-100 transition-all z-10">
<iconify-icon className="text-lg" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-semibold text-slate-900">P2</span>
<span className="text-[10px] text-slate-500 mt-0.5 leading-tight">Approval</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center shadow-sm border-2 border-white ring-2 ring-transparent group-hover:ring-green-100 transition-all z-10">
<iconify-icon className="text-lg" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-semibold text-slate-900">P3</span>
<span className="text-[10px] text-slate-500 mt-0.5 leading-tight">RFI</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md border-2 border-white ring-4 ring-blue-100 z-10 transition-all">
<span className="text-xs font-semibold tracking-wide">P4</span>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-semibold text-blue-700">Evaluation</span>
<span className="text-[10px] text-blue-500 mt-0.5 leading-tight">In Progress</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-gray-300 flex items-center justify-center z-10 transition-colors group-hover:border-slate-400">
<span className="text-xs font-medium tracking-wide">P5</span>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-medium text-slate-500">Clarification</span>
<span className="text-[10px] text-slate-400 mt-0.5 leading-tight">Pending</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-gray-300 flex items-center justify-center z-10 transition-colors group-hover:border-slate-400">
<span className="text-xs font-medium tracking-wide">P6</span>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-medium text-slate-500">Reporting</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-gray-300 flex items-center justify-center z-10 transition-colors group-hover:border-slate-400">
<span className="text-xs font-medium tracking-wide">SC</span>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-medium text-slate-500">Completed</span>
</div>
</div>

<div className="relative flex flex-col items-center group w-20">
<div className="w-8 h-8 rounded-full bg-white text-slate-400 border-2 border-gray-300 flex items-center justify-center z-10 transition-colors group-hover:border-slate-400">
<span className="text-xs font-medium tracking-wide">SS</span>
</div>
<div className="mt-3 flex flex-col items-center text-center">
<span className="text-xs font-medium text-slate-500">Savings</span>
<span className="text-[10px] text-slate-400 mt-0.5 leading-tight">Secured</span>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-6 mt-6 pt-6 border-t border-gray-100 justify-center">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
<span className="text-xs text-slate-500 font-medium">Done</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-blue-600 ring-2 ring-blue-100"></div>
<span className="text-xs text-slate-600 font-semibold">Active Phase</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<span className="text-xs text-slate-400 font-medium">Pending</span>
</div>
</div>
</div>
</section>

<section className="bg-white border border-gray-200 rounded-lg shadow-sm">
<div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
<h2 className="text-base font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:folder-with-files-linear"></iconify-icon>
                            Document Attachments
                        </h2>
</div>
<div className="p-6">

<div className="bg-gray-50 border border-gray-200 rounded-md p-4 mb-6">
<h3 className="text-xs font-semibold text-slate-700 uppercase tracking-wide mb-4">Upload New Document</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Category <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
<option disabled="" selected="" value="">Select category</option>
<option value="legal">Legal</option>
<option value="technical">Technical</option>
<option value="commercial">Commercial</option>
</select>
<iconify-icon className="absolute right-3 top-2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Doc Type <span className="text-red-500">*</span></label>
<div className="relative">
<select className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
<option disabled="" selected="" value="">Select type</option>
<option value="rfi_response">RFI Response</option>
<option value="spec">Specification</option>
<option value="nda">NDA</option>
</select>
<iconify-icon className="absolute right-3 top-2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Document No</label>
<input className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="e.g. DOC-001" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Remarks</label>
<input className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-slate-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Optional notes" type="text"/>
</div>

<div className="lg:col-span-4 mt-2">
<div className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50 hover:border-blue-400 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors">
<iconify-icon className="text-xl text-blue-600" icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700">Click to upload or drag and drop</p>
<p className="text-xs text-slate-500 mt-1">PDF, DOCX, XLSX (max. 10MB)</p>
</div>
</div>
<div className="lg:col-span-4 flex justify-end mt-2">
<button className="px-3 py-1.5 text-sm font-medium text-slate-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none transition-colors flex items-center gap-2" type="button">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                                        Add to List
                                    </button>
</div>
</div>
</div>

<div className="overflow-x-auto rounded-lg border border-gray-200">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
<th className="px-4 py-3">Category</th>
<th className="px-4 py-3">Doc Type</th>
<th className="px-4 py-3">Document No</th>
<th className="px-4 py-3">Upload Date</th>
<th className="px-4 py-3">File</th>
<th className="px-4 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-gray-200 bg-white">
<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-4 py-3 font-medium text-slate-900">Technical</td>
<td className="px-4 py-3 text-slate-500">Specification</td>
<td className="px-4 py-3 text-slate-500">SPEC-SP-2026-V1</td>
<td className="px-4 py-3 text-slate-500">10 Feb 2026</td>
<td className="px-4 py-3">
<a className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
<span className="truncate max-w-[150px] block text-xs">Security_Paper_Specs_V1.pdf</span>
</a>
</td>
<td className="px-4 py-3 text-right">
<button className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50 transition-colors group">
<td className="px-4 py-3 font-medium text-slate-900">Legal</td>
<td className="px-4 py-3 text-slate-500">NDA</td>
<td className="px-4 py-3 text-slate-500">NDA-099-2026</td>
<td className="px-4 py-3 text-slate-500">11 Feb 2026</td>
<td className="px-4 py-3">
<a className="flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:file-download-linear"></iconify-icon>
<span className="truncate max-w-[150px] block text-xs">NDA_Template_Signed.pdf</span>
</a>
</td>
<td className="px-4 py-3 text-right">
<button className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>


</div>
</div>
</section>
<div className="h-8"></div> 
</div>
</div>
</main>

    </>
  );
}
