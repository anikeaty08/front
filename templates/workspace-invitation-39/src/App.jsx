import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
25: '#fcfcfd',
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
700: '#334155',
800: '#1e293b',
900: '#0f172a',
},
indigo: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
700: '#4338ca',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'floating': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
}
}
}
}



        function switchTab(tab) {
            const emailTab = document.getElementById('tab-email');
            const linkTab = document.getElementById('tab-link');
            const emailContent = document.getElementById('content-email');
            const linkContent = document.getElementById('content-link');
            const submitBtn = document.getElementById('btn-submit');

            if (tab === 'email') {
                emailTab.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                emailTab.classList.remove('text-slate-500');
                linkTab.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                linkTab.classList.add('text-slate-500');
                
                emailContent.classList.remove('hidden');
                linkContent.classList.add('hidden');
                submitBtn.textContent = 'Send Invitation';
            } else {
                linkTab.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                linkTab.classList.remove('text-slate-500');
                emailTab.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                emailTab.classList.add('text-slate-500');
                
                linkContent.classList.remove('hidden');
                emailContent.classList.add('hidden');
                submitBtn.textContent = 'Generate Link';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<span className="iconify text-indigo-600 mr-2" data-icon="lucide:hexagon" data-strokeWidth="1.5" data-width="24"></span>
<span className="font-semibold text-slate-900 tracking-tight text-sm">ACME CORP</span>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="18"></span>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:users" data-strokeWidth="1.5" data-width="18"></span>
                Members
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-slate-100 text-indigo-600 rounded-lg transition-colors" href="#">
<span className="iconify" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="18"></span>
                Invitations
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
                Access Control
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-colors" href="#">
<span className="iconify" data-icon="lucide:settings" data-strokeWidth="1.5" data-width="18"></span>
                Settings
            </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3">
<img alt="Admin" className="h-8 w-8 rounded-full bg-slate-200" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Elias R.</span>
<span className="text-[10px] text-slate-400">Workspace Owner</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
<span className="iconify text-indigo-600" data-icon="lucide:hexagon" data-width="24"></span>
<button className="text-slate-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</header>

<div className="bg-white border-b border-slate-200 px-6 py-6 sm:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div>
<h1 className="text-xl font-semibold text-slate-900 tracking-tight">Invitations</h1>
<p className="text-sm text-slate-500 mt-1">Invite and manage who can access your workspace.</p>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-300 rounded-lg shadow-sm text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all focus:ring-2 focus:ring-offset-1 focus:ring-slate-200">
<span className="iconify" data-icon="lucide:link" data-width="16"></span>
                        Create Invite Link
                    </button>

<button className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white hover:bg-indigo-700 transition-all focus:ring-2 focus:ring-offset-1 focus:ring-indigo-600" onclick="document.getElementById('inviteModal').classList.remove('hidden')">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
                        Invite Members
                    </button>
</div>
</div>

<div className="flex items-center gap-6 mt-8 overflow-x-auto hide-scrollbar">
<button className="group flex items-center gap-2 pb-3 border-b-2 border-indigo-600 text-sm font-semibold text-indigo-600 whitespace-nowrap">
                    Requests
                    <span className="flex items-center justify-center h-5 px-1.5 rounded-full bg-indigo-100 text-indigo-700 text-[10px] font-bold">3</span>
</button>
<button className="group flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-slate-300 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">
                    Pending
                    <span className="flex items-center justify-center h-5 px-1.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold">12</span>
</button>
<button className="group flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-slate-300 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">
                    Accepted
                </button>
<button className="group flex items-center gap-2 pb-3 border-b-2 border-transparent hover:border-slate-300 text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors whitespace-nowrap">
                    Invite Links
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 sm:p-8">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div className="relative w-full sm:w-72">
<span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input className="block w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm shadow-sm transition-all" placeholder="Search by name or email..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<span className="iconify" data-icon="lucide:filter" data-width="14"></span>
                        Status
                    </button>
<button className="inline-flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<span className="iconify" data-icon="lucide:user" data-width="14"></span>
                        Role
                    </button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-card overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-3 text-left" scope="col">
<div className="flex items-center gap-2">
<input className="custom-checkbox h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500" type="checkbox"/>
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">User</span>
</div>
</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Requested Role</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Requested On</th>
<th className="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider" scope="col">Actions</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-slate-100">

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<input className="custom-checkbox h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 mr-4" type="checkbox"/>
<div className="h-9 w-9 flex-shrink-0">
<img alt="" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div className="ml-4">
<div className="text-sm font-medium text-slate-900">Alicia Vandeberg</div>
<div className="text-xs text-slate-500">alicia.v@designco.com</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Member</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                        Pending Review
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"><span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="18"></span></button>
<button className="p-1.5 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"><span className="iconify" data-icon="lucide:x" data-strokeWidth="2" data-width="18"></span></button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/80 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center">
<input className="custom-checkbox h-4 w-4 text-indigo-600 border-slate-300 rounded focus:ring-indigo-500 mr-4" type="checkbox"/>
<div className="h-9 w-9 flex-shrink-0 flex items-center justify-center bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100 text-xs font-semibold">
                                            MK
                                        </div>
<div className="ml-4">
<div className="text-sm font-medium text-slate-900">Marcus Kim</div>
<div className="text-xs text-slate-500">marcus@partner.io</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">Collaborator</span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">Oct 23, 2023</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                                        Pending Review
                                    </span>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"><span className="iconify" data-icon="lucide:check" data-strokeWidth="2" data-width="18"></span></button>
<button className="p-1.5 rounded-md text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"><span className="iconify" data-icon="lucide:x" data-strokeWidth="2" data-width="18"></span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


<div aria-labelledby="modal-title" aria-modal="true" className="relative z-50" id="inviteModal" role="dialog">

<div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onclick="document.getElementById('inviteModal').classList.add('hidden')"></div>

<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
<div className="relative transform rounded-xl bg-white text-left shadow-modal transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-100">

<div className="px-6 pt-6 pb-4">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-50 text-indigo-600">
<span className="iconify" data-icon="lucide:user-plus" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-semibold leading-6 text-slate-900 tracking-tight">Invite Members</h3>
<p className="text-sm text-slate-500 mt-0.5">Invite people to collaborate in your workspace.</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-500 hover:bg-slate-50 p-2 rounded-lg transition-colors -mr-2" onclick="document.getElementById('inviteModal').classList.add('hidden')">
<span className="iconify" data-icon="lucide:x" data-width="20"></span>
</button>
</div>

<div className="mt-6 bg-slate-100 p-1 rounded-lg flex gap-1">
<button className="flex-1 bg-white shadow-sm py-1.5 text-sm font-medium text-slate-900 rounded-md transition-all" id="tab-email" onclick="switchTab('email')">Email Invitation</button>
<button className="flex-1 text-slate-500 hover:text-slate-900 py-1.5 text-sm font-medium rounded-md transition-all" id="tab-link" onclick="switchTab('link')">Invite Link</button>
</div>
</div>

<div className="px-6 pb-6 space-y-5" id="content-email">

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Addresses</label>
<div className="min-h-[44px] p-1.5 bg-white border border-slate-200 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 flex flex-wrap gap-2 transition-all">
<span className="inline-flex items-center gap-1 bg-indigo-50 text-indigo-700 rounded-md px-2 py-1 text-xs font-medium border border-indigo-100">
<span>alex@designco.com</span>
<button className="hover:bg-indigo-100 rounded p-0.5 transition-colors"><span className="iconify" data-icon="lucide:x" data-width="12"></span></button>
</span>
<input className="flex-1 border-0 bg-transparent p-1 focus:ring-0 text-sm placeholder:text-slate-400 min-w-[120px]" placeholder="Enter email addresses..." type="text"/>
</div>
<p className="mt-1.5 text-xs text-slate-400">Use commas or enter to add multiple people.</p>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Assign Role</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition-all">
<option>Member</option>
<option>Admin</option>
<option>Collaborator</option>
<option>Billing</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Expires In</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition-all">
<option>7 Days</option>
<option>24 Hours</option>
<option>30 Days</option>
<option>Never</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
</div>
</div>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Personal Message <span className="text-slate-400 font-normal">(Optional)</span></label>
<textarea className="block w-full rounded-lg border border-slate-200 py-2.5 px-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm resize-none transition-all" placeholder="Hey! I'm inviting you to join our workspace on Acme Corp..." rows="3"></textarea>
</div>
</div>

<div className="hidden px-6 pb-6 space-y-5" id="content-link">

<div className="grid grid-cols-3 gap-4">
<div className="col-span-2">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Link Name</label>
<input className="block w-full rounded-lg border border-slate-200 py-2.5 px-3 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm transition-all" placeholder="e.g. Design Team Fall 2023" type="text"/>
</div>
<div className="col-span-1">
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Default Role</label>
<div className="relative">
<select className="block w-full appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3 pr-10 text-slate-900 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:text-sm">
<option>Member</option>
<option>Guest</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-700 mb-2">Access Permissions</label>
<div className="space-y-3">

<label className="relative block cursor-pointer group">
<input checked="" className="peer sr-only radio-card" name="link_type" type="radio"/>
<div className="flex items-start gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-50/50 peer-checked:shadow-sm">
<div className="mt-0.5 flex-shrink-0 text-slate-400 peer-checked:text-indigo-600">
<span className="iconify" data-icon="lucide:globe" data-width="18"></span>
</div>
<div className="flex-1">
<span className="block text-sm font-medium text-slate-900 group-hover:text-indigo-700">Generic Link</span>
<span className="block text-xs text-slate-500 mt-0.5">Anyone with this link can join as a member.</span>
</div>
<div className="mt-0.5 h-4 w-4 rounded-full border border-slate-300 bg-white radio-indicator flex items-center justify-center peer-checked:border-indigo-600"></div>
</div>
</label>

<label className="relative block cursor-pointer group">
<input className="peer sr-only radio-card" name="link_type" type="radio"/>
<div className="flex flex-col p-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-50/50 peer-checked:shadow-sm">
<div className="flex items-start gap-3">
<div className="mt-0.5 flex-shrink-0 text-slate-400 peer-checked:text-indigo-600">
<span className="iconify" data-icon="lucide:building-2" data-width="18"></span>
</div>
<div className="flex-1">
<span className="block text-sm font-medium text-slate-900 group-hover:text-indigo-700">Domain Restricted</span>
<span className="block text-xs text-slate-500 mt-0.5">Only emails from specific domains can join.</span>
</div>
<div className="mt-0.5 h-4 w-4 rounded-full border border-slate-300 bg-white radio-indicator flex items-center justify-center peer-checked:border-indigo-600"></div>
</div>

<div className="hidden peer-checked:block mt-3 ml-8">
<input className="block w-full rounded border border-slate-300 py-1.5 px-2.5 text-xs text-slate-900 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder:text-slate-400" placeholder="e.g. acme.com" type="text"/>
</div>
</div>
</label>
</div>
</div>
</div>

<div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-t border-slate-100 rounded-b-xl">
<div className="text-xs text-slate-400 flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:info" data-width="14"></span>
                            Admins will be notified
                        </div>
<div className="flex items-center gap-3">
<button className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="document.getElementById('inviteModal').classList.add('hidden')" type="button">Cancel</button>
<button className="inline-flex justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" id="btn-submit" type="button">Send Invitation</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
