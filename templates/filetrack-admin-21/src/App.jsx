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
      

<aside className="w-64 bg-white border-r border-zinc-200 hidden md:flex flex-col flex-shrink-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:folder-search" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-sm">FILETRACK</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-zinc-100 text-zinc-900" href="#">
<iconify-icon className="text-zinc-900" icon="lucide:search" width="18"></iconify-icon>
                Search &amp; Monitor
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="lucide:inbox" width="18"></iconify-icon>
                Incoming Requests
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="lucide:building-2" width="18"></iconify-icon>
                Departments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon icon="lucide:bar-chart-3" width="18"></iconify-icon>
                Analytics
            </a>
</nav>
<div className="p-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-500 text-xs font-medium">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 truncate">John Doe</p>
<p className="text-xs text-zinc-500 truncate">Admin</p>
</div>
<iconify-icon className="text-zinc-400 cursor-pointer hover:text-zinc-600" icon="lucide:settings-2" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-sm border-b border-zinc-200 sticky top-0 z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-900 cursor-pointer">Files</span>
<iconify-icon icon="lucide:chevron-right" width="14"></iconify-icon>
<span className="text-zinc-900 font-medium">Search</span>
</div>
<div className="flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors relative">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
<div className="md:hidden w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs">JD</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-6xl mx-auto space-y-8">

<section className="space-y-4">
<div className="flex flex-col md:flex-row md:items-center gap-4">
<div className="relative flex-1 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" icon="lucide:search" width="18"></iconify-icon>
<input className="w-full pl-10 pr-4 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-400 shadow-sm transition-all placeholder:text-zinc-400" placeholder="Search by File #, Applicant Name, Department..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded border border-zinc-200 bg-zinc-50 text-[10px] text-zinc-400 font-medium">⌘K</span>
</div>
</div>
<div className="flex gap-2">
<div className="relative">
<select className="appearance-none pl-3 pr-8 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm outline-none focus:border-zinc-400 shadow-sm text-zinc-600 cursor-pointer hover:bg-zinc-50 transition-colors">
<option>2024</option>
<option>2023</option>
<option>2022</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
<button className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all active:scale-[0.98]">
<iconify-icon icon="lucide:qr-code" width="18"></iconify-icon>
<span className="hidden sm:inline">Scan QR</span>
</button>
</div>
</div>

<div className="flex flex-wrap items-center gap-2">
<span className="text-xs font-medium text-zinc-400 mr-2">FILTERS:</span>
<button className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-colors flex items-center gap-1.5">
<iconify-icon icon="lucide:hash" width="12"></iconify-icon>
                            File Number
                        </button>
<button className="px-2.5 py-1 rounded-full bg-zinc-100 border border-transparent text-xs font-medium text-zinc-900 flex items-center gap-1.5">
<iconify-icon icon="lucide:building" width="12"></iconify-icon>
                            Dept: Urban Planning
                            <iconify-icon className="text-zinc-400 hover:text-zinc-900" icon="lucide:x" width="12"></iconify-icon>
</button>
<button className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-600 hover:border-zinc-300 transition-colors flex items-center gap-1.5">
<iconify-icon icon="lucide:user" width="12"></iconify-icon>
                            Applicant
                        </button>
</div>
</section>
<div className="h-px bg-zinc-200 w-full"></div>

<section className="animate-fade-in-up">
<div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
<div>
<div className="flex items-center gap-3 mb-1">
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight">File #UP-2024-8921</h1>
<span className="px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                    In Transit
                                </span>
</div>
<p className="text-sm text-zinc-500">Commercial Development License • Created Jan 12, 2024</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors border border-transparent hover:border-zinc-200">
<iconify-icon icon="lucide:printer" width="18"></iconify-icon>
</button>
<button className="p-2 text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors border border-transparent hover:border-zinc-200">
<iconify-icon icon="lucide:share-2" width="18"></iconify-icon>
</button>
<button className="px-3 py-1.5 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 text-xs font-medium rounded-md shadow-sm transition-colors">
                                Edit Details
                            </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<h3 className="text-sm font-medium text-zinc-900">File Information</h3>
<iconify-icon className="text-zinc-400" icon="lucide:file-text" width="16"></iconify-icon>
</div>
<div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Applicant Name</label>
<div className="text-sm text-zinc-900 font-medium">Sarah Jenkins</div>
<div className="text-xs text-zinc-500">ID: 9821-0012</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Department</label>
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="lucide:building-2" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-900">Urban Planning &amp; Dev</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Subject</label>
<div className="text-sm text-zinc-900">Zone B Commercial Expansion Project Approval Request</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1 uppercase tracking-wider">Contact</label>
<div className="text-sm text-zinc-900">sarah.j@example.com</div>
<div className="text-xs text-zinc-500">+1 (555) 012-3456</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
<h3 className="text-sm font-medium text-zinc-900">Scanned Documents</h3>
<button className="text-xs text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                                        Download All <iconify-icon icon="lucide:download" width="12"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex items-start gap-4 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 bg-zinc-50/50 transition-colors cursor-pointer group">
<div className="w-10 h-12 bg-red-50 rounded border border-red-100 flex items-center justify-center text-red-500 flex-shrink-0">
<iconify-icon icon="lucide:file-text" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Application_Form_Signed.pdf</p>
<p className="text-xs text-zinc-500">2.4 MB • Scanned Today, 09:41 AM</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="lucide:eye" width="16"></iconify-icon>
</div>
<div className="mt-3 flex items-start gap-4 p-3 rounded-lg border border-zinc-100 hover:border-zinc-200 bg-white transition-colors cursor-pointer group">
<div className="w-10 h-12 bg-zinc-100 rounded border border-zinc-200 flex items-center justify-center text-zinc-400 flex-shrink-0">
<iconify-icon icon="lucide:image" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">Site_Plan_Map_v2.png</p>
<p className="text-xs text-zinc-500">4.1 MB • Scanned Jan 12, 2024</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-600 transition-colors" icon="lucide:eye" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl shadow-lg p-5 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-10">
<iconify-icon icon="lucide:map-pin" width="80"></iconify-icon>
</div>
<h3 className="text-xs font-medium text-zinc-300 uppercase tracking-wider mb-2">Current Location</h3>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10">
<iconify-icon icon="lucide:truck" width="18"></iconify-icon>
</div>
<div>
<p className="text-lg font-semibold leading-tight">Logistics Hub A</p>
<p className="text-xs text-zinc-400">Desk 4, Officer M. Ross</p>
</div>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
<div className="bg-blue-500 h-full rounded-full w-2/3"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-medium uppercase tracking-wide">
<span>Received</span>
<span>Processing</span>
<span>Complete</span>
</div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 shadow-sm p-5">
<h3 className="text-sm font-medium text-zinc-900 mb-5">Movement History</h3>
<div className="relative pl-2">

<div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200"></div>

<div className="relative pl-6 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-blue-500 rounded-full z-10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-blue-600 mb-0.5">Today, 10:30 AM</span>
<span className="text-sm font-medium text-zinc-900">Departed from Secretariat</span>
<span className="text-xs text-zinc-500 mt-1">Courier: DHL Express (Track #9921)</span>
</div>
</div>

<div className="relative pl-6 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-zinc-100 border-2 border-zinc-300 rounded-full z-10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400 mb-0.5">Today, 09:15 AM</span>
<span className="text-sm font-medium text-zinc-700">Scan Verification</span>
<span className="text-xs text-zinc-500 mt-1">QR Scan by Admin (John Doe)</span>
<div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-[10px] text-zinc-500 w-fit">
<iconify-icon icon="lucide:qr-code" width="10"></iconify-icon>
                                                Verified
                                            </div>
</div>
</div>

<div className="relative pl-6 pb-8">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-zinc-100 border-2 border-zinc-300 rounded-full z-10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400 mb-0.5">Jan 14, 04:00 PM</span>
<span className="text-sm font-medium text-zinc-700">Director Approval</span>
<span className="text-xs text-zinc-500 mt-1">Status changed to "Approved"</span>
</div>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-zinc-100 border-2 border-zinc-300 rounded-full z-10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400 mb-0.5">Jan 12, 09:00 AM</span>
<span className="text-sm font-medium text-zinc-700">File Created</span>
<span className="text-xs text-zinc-500 mt-1">Initial submission at Front Desk</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

    </>
  );
}
