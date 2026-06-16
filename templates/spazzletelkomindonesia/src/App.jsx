import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple interaction for the invite button
        document.querySelector('button.bg-\\[\\#E60000\\]').addEventListener('click', function() {
            const input = this.previousElementSibling.previousElementSibling.querySelector('input');
            if(input.value) {
                alert('Invitation sent to ' + input.value);
                input.value = '';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-[#E60000] flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">SPAZZLE</span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-4">
<div className="px-4 mb-2">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Platform</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-red-50 text-[#E60000]" href="#">
<span className="iconify" data-icon="lucide:app-window" data-strokeWidth="1.5" data-width="18"></span>
                        Applications
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:file-check" data-strokeWidth="1.5" data-width="18"></span>
                        Compliance Tasks
                        <span className="ml-auto bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-xs font-semibold">4</span>
</a>
</nav>
</div>
<div className="px-4 mt-6">
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Governance</p>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="18"></span>
                        Subsidiaries
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                        Access Control
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:scroll-text" data-strokeWidth="1.5" data-width="18"></span>
                        Audit Logs
                    </a>
</nav>
</div>
</div>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-medium text-xs">AD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Admin Holding</p>
<p className="text-xs text-slate-500 truncate">telkom.co.id</p>
</div>
<button className="text-slate-400 hover:text-slate-600">
<span className="iconify" data-icon="lucide:log-out" data-width="16"></span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden">

<header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
<nav className="hidden sm:flex items-center text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Applications</a>
<span className="iconify mx-2" data-icon="lucide:chevron-right" data-width="14"></span>
<span className="font-medium text-slate-900">MyTelkom SuperApp</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="pl-9 pr-4 py-1.5 text-sm bg-slate-50 border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 w-64 placeholder:text-slate-400 transition-all" placeholder="Search members..." type="text"/>
</div>
<button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:bell" data-width="20"></span>
<span className="absolute top-2 right-2 w-2 h-2 bg-[#E60000] rounded-full ring-2 ring-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="max-w-7xl mx-auto space-y-6">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">MyTelkom SuperApp</h1>
<span className="bg-yellow-100 text-yellow-700 text-xs px-2.5 py-0.5 rounded-full font-medium border border-yellow-200">Under Review</span>
</div>
<p className="text-sm text-slate-500">Telkomsel • Consumer Facing • High Criticality</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:settings" data-width="16"></span>
                            Settings
                        </button>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="border-b border-slate-200">
<nav aria-label="Tabs" className="flex -mb-px px-6">
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors" href="#">
                                Overview
                            </a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors flex items-center justify-center gap-2" href="#">
                                Business
                                <span className="bg-green-100 text-green-700 py-0.5 px-2 rounded-full text-[10px]">OK</span>
</a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm flex items-center justify-center gap-2" href="#">
                                Technology
                                <span className="bg-red-100 text-red-700 py-0.5 px-2 rounded-full text-[10px]">Action</span>
</a>
<a className="border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300 w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors" href="#">
                                Security
                            </a>
<a className="border-[#E60000] text-[#E60000] w-1/5 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors flex items-center justify-center gap-2" href="#">
                                Access
                                <span className="bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-[10px]">6</span>
</a>
</nav>
</div>
<div className="p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
<h3 className="text-sm font-medium text-slate-900 mb-4">Invite Team Member</h3>
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-slate-400" data-icon="lucide:mail" data-width="16"></span>
</div>
<input className="pl-10 block w-full text-sm border-slate-300 rounded-md shadow-sm focus:ring-[#E60000] focus:border-[#E60000] py-2" placeholder="colleague@telkom.co.id" type="email"/>
</div>
<select className="block w-full sm:w-40 text-sm border-slate-300 rounded-md shadow-sm focus:ring-[#E60000] focus:border-[#E60000] py-2 text-slate-600">
<option>Viewer</option>
<option>Editor</option>
<option>Admin</option>
</select>
<button className="px-4 py-2 bg-[#E60000] text-white text-sm font-medium rounded-md hover:bg-red-700 transition-colors shadow-sm whitespace-nowrap">
                                        Send Invite
                                    </button>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900">Active Members</h3>
<div className="flex items-center gap-2 text-sm text-slate-500">
<button className="hover:text-slate-900 px-2 py-1 rounded bg-slate-50 border border-slate-200">All</button>
<button className="hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-50 border border-transparent">Admins</button>
</div>
</div>
<div className="border border-slate-200 rounded-lg divide-y divide-slate-100">

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-xs font-medium ring-2 ring-white">AD</div>
<div>
<p className="text-sm font-medium text-slate-900">Admin Holding</p>
<p className="text-xs text-slate-500">admin.holding@telkom.co.id</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">Owner</span>
<div className="w-8"></div> 
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full ring-2 ring-white" src="https://ui-avatars.com/api/?name=Dimas+Anggara&amp;background=random"/>
<div>
<p className="text-sm font-medium text-slate-900">Dimas Anggara</p>
<p className="text-xs text-slate-500">dimas.a@telkom.co.id</p>
</div>
</div>
<div className="flex items-center gap-4">
<select className="text-xs font-medium bg-white border border-slate-200 text-slate-700 rounded-md py-1 px-2 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none cursor-pointer">
<option selected="">Assessor</option>
<option>Viewer</option>
<option>Admin</option>
</select>
<button className="text-slate-300 hover:text-red-600 transition-colors p-1">
<span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>
</div>

<div className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-medium ring-2 ring-white">BS</div>
<div>
<p className="text-sm font-medium text-slate-900">Budi Santoso</p>
<p className="text-xs text-slate-500">budi.tech@telkom.co.id</p>
</div>
</div>
<div className="flex items-center gap-4">
<select className="text-xs font-medium bg-white border border-slate-200 text-slate-700 rounded-md py-1 px-2 focus:ring-1 focus:ring-red-500 focus:border-red-500 outline-none cursor-pointer">
<option>Assessor</option>
<option selected="">Viewer</option>
<option>Admin</option>
</select>
<button className="text-slate-300 hover:text-red-600 transition-colors p-1">
<span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>
</div>

<div className="p-4 flex items-center justify-between bg-yellow-50/30 hover:bg-yellow-50/50 transition-colors group">
<div className="flex items-center gap-4 opacity-75">
<div className="w-10 h-10 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">sarah.ext@vendor.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium text-yellow-600 flex items-center gap-1 bg-yellow-100 px-2 py-0.5 rounded-full border border-yellow-200">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> Pending
                                            </span>
<button className="text-slate-300 hover:text-red-600 transition-colors p-1" title="Revoke Invite">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white rounded-xl p-5 border border-slate-200 sticky top-4">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Permission Levels</h4>
<div className="space-y-4">
<div className="relative pl-4 border-l-2 border-[#E60000]">
<h5 className="text-sm font-medium text-slate-900">Admin</h5>
<p className="text-xs text-slate-500 mt-1">Full access to modify compliance data, submit assessments, and manage team access.</p>
</div>
<div className="relative pl-4 border-l-2 border-slate-200 hover:border-slate-300 transition-colors">
<h5 className="text-sm font-medium text-slate-900">Assessor (Editor)</h5>
<p className="text-xs text-slate-500 mt-1">Can upload documents and fill forms. Cannot submit final assessments or manage users.</p>
</div>
<div className="relative pl-4 border-l-2 border-slate-200 hover:border-slate-300 transition-colors">
<h5 className="text-sm font-medium text-slate-900">Viewer</h5>
<p className="text-xs text-slate-500 mt-1">Read-only access to all compliance data and status reports.</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">Compliance Settings</h4>
<label className="flex items-center justify-between cursor-pointer group">
<span className="text-xs text-slate-600 group-hover:text-slate-900">Restrict access to VPN</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition-colors duration-200 ease-in-out peer-checked:bg-red-600">
<span className="translate-x-1 inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group mt-3">
<span className="text-xs text-slate-600 group-hover:text-slate-900">MFA Required</span>
<div className="relative inline-flex h-5 w-9 items-center rounded-full bg-[#E60000] transition-colors duration-200 ease-in-out">
<span className="translate-x-5 inline-block h-3 w-3 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
</div>
</label>
</div>
</div>
</div>
</div>
</div>

<footer className="py-6 border-t border-slate-200 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2023 Telkom Indonesia. All rights reserved.</p>
<p className="mt-2 sm:mt-0">Confidential &amp; Proprietary</p>
</footer>
</div>
</div>
</main>


    </>
  );
}
