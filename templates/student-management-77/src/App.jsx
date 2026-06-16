import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
accent: '#1A73E8',
'accent-hover': '#155db5',
'accent-light': '#e8f0fe',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col md:flex-row">

<aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-screen sticky top-0 z-20">
<div className="h-16 flex items-center px-6 border-b border-slate-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white font-semibold tracking-tighter">
                        SM
                    </div>
<span className="font-semibold text-slate-800 tracking-tight">Academix</span>
</div>
</div>
<nav className="flex-1 p-4 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:bg-slate-50 transition-colors" href="#">
<iconify-icon icon="lucide:layout-dashboard" strokeWidth="1.5" width="18"></iconify-icon>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-accent bg-accent-light rounded-md transition-colors" href="#">
<iconify-icon icon="lucide:graduation-cap" strokeWidth="1.5" width="18"></iconify-icon>
                    Students
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:bg-slate-50 transition-colors" href="#">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="18"></iconify-icon>
                    Teachers
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 rounded-md hover:bg-slate-50 transition-colors" href="#">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
                    Attendance
                </a>
</nav>
<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 px-3 py-2">
<div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
<img alt="Admin" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=random"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Admin User</span>
<span className="text-[10px] text-slate-400">admin@school.com</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="md:hidden h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4">
<span className="font-semibold text-slate-800 tracking-tight">Academix</span>
<button className="text-slate-500">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-12 scroll-smooth">

<section className="max-w-7xl mx-auto w-full">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<div>
<h1 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">All Students</h1>
<p className="text-sm text-slate-500 mt-1">Manage student records, admissions, and details.</p>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm">
<iconify-icon icon="lucide:upload" strokeWidth="1.5" width="16"></iconify-icon>
                                Import
                            </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent-hover transition-all shadow-sm shadow-blue-500/20">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="16"></iconify-icon>
                                Add Student
                            </button>
</div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
<div className="flex flex-col md:flex-row items-center gap-4">

<div className="relative w-full md:w-96">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-slate-400" placeholder="Search by name, roll, or ID..." type="text"/>
</div>

<div className="flex w-full md:w-auto gap-3">
<div className="relative w-full md:w-40">
<select className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer">
<option>All Classes</option>
<option>Class 10</option>
<option>Class 9</option>
<option>Class 8</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
<div className="relative w-full md:w-40">
<select className="w-full appearance-none bg-white border border-slate-200 text-slate-700 py-2 pl-3 pr-8 rounded-lg text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 cursor-pointer">
<option>All Sections</option>
<option>Section A</option>
<option>Section B</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
<button className="p-2 border border-slate-200 rounded-lg text-slate-500 hover:text-accent hover:bg-slate-50 transition-colors">
<iconify-icon icon="lucide:filter" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/80 border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 font-medium">
<th className="px-6 py-4 whitespace-nowrap">Roll</th>
<th className="px-6 py-4 whitespace-nowrap">Student</th>
<th className="px-6 py-4 whitespace-nowrap">Class Info</th>
<th className="px-6 py-4 whitespace-nowrap">Parents</th>
<th className="px-6 py-4 whitespace-nowrap">Contact</th>
<th className="px-6 py-4 whitespace-nowrap text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">

<tr className="hover:bg-slate-50/60 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">#1001</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Smith</div>
<div className="text-xs text-slate-400">Female • 14 Apr 2008</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">Class 10 - A</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-slate-700">Robert Smith</div>
<div className="text-xs text-slate-400">Father</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:phone" width="12"></iconify-icon>
                                                    +1 (555) 123-4567
                                                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:mail" width="12"></iconify-icon>
                                                    sarah.s@example.com
                                                </div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md text-slate-400 hover:text-accent hover:bg-blue-50 transition-colors" title="View">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-orange-500 hover:bg-orange-50 transition-colors" title="Edit">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
<iconify-icon icon="lucide:trash-2" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/60 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">#1002</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 text-xs font-semibold border border-indigo-100">JD</div>
<div>
<div className="text-sm font-medium text-slate-900">John Doe</div>
<div className="text-xs text-slate-400">Male • 22 May 2008</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Class 10 - B</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-slate-700">Michael Doe</div>
<div className="text-xs text-slate-400">Father</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:phone" width="12"></iconify-icon>
                                                    +1 (555) 987-6543
                                                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:mail" width="12"></iconify-icon>
                                                    john.d@example.com
                                                </div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md text-slate-400 hover:text-accent hover:bg-blue-50 transition-colors">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-orange-500 hover:bg-orange-50 transition-colors">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
<iconify-icon icon="lucide:trash-2" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-slate-50/60 transition-colors group">
<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">#1003</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div>
<div className="text-sm font-medium text-slate-900">Emily Chen</div>
<div className="text-xs text-slate-400">Female • 02 Feb 2009</div>
</div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">Class 9 - A</span>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="text-sm text-slate-700">David Chen</div>
<div className="text-xs text-slate-400">Father</div>
</td>
<td className="px-6 py-4 whitespace-nowrap">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:phone" width="12"></iconify-icon>
                                                    +1 (555) 456-7890
                                                </div>
<div className="flex items-center gap-1.5 text-xs text-slate-600">
<iconify-icon className="text-slate-400" icon="lucide:mail" width="12"></iconify-icon>
                                                    emily.c@example.com
                                                </div>
</div>
</td>
<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 rounded-md text-slate-400 hover:text-accent hover:bg-blue-50 transition-colors">
<iconify-icon icon="lucide:eye" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-orange-500 hover:bg-orange-50 transition-colors">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors">
<iconify-icon icon="lucide:trash-2" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="bg-white px-4 py-3 flex items-center justify-between border-t border-slate-200">
<div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
<div>
<p className="text-sm text-slate-500">
                                        Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">10</span> of <span className="font-medium text-slate-900">97</span> results
                                    </p>
</div>
<div>
<nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
<a className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:chevron-left" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a aria-current="page" className="z-10 bg-accent/10 border-accent text-accent relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">1</a>
<a className="bg-white border-slate-200 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">2</a>
<a className="bg-white border-slate-200 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">3</a>
<span className="relative inline-flex items-center px-4 py-2 border border-slate-200 bg-white text-sm font-medium text-slate-700">...</span>
<a className="bg-white border-slate-200 text-slate-500 hover:bg-slate-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" href="#">8</a>
<a className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-200 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50" href="#">
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</div>
</section>

<div className="relative py-4">
<div aria-hidden="true" className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-200 border-dashed"></div>
</div>
<div className="relative flex justify-center">
<span className="px-3 bg-slate-50 text-xs font-medium text-slate-400 uppercase tracking-wider">Example: Student Details View</span>
</div>
</div>

<section className="max-w-5xl mx-auto w-full pb-10">

<div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<span className="hover:text-slate-800 cursor-pointer">Students</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="hover:text-slate-800 cursor-pointer">Class 10-A</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="14"></iconify-icon>
<span className="text-slate-800 font-medium">Sarah Smith</span>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

<div className="p-6 md:p-8 border-b border-slate-100 flex flex-col md:flex-row md:items-start justify-between gap-6">
<div className="flex flex-col md:flex-row gap-6">

<div className="relative group">
<div className="w-32 h-32 rounded-xl overflow-hidden border-4 border-slate-50 shadow-inner">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=256&amp;h=256"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-1.5 rounded-full border-2 border-white" title="Active">
<iconify-icon icon="lucide:check" strokeWidth="3" width="12"></iconify-icon>
</div>
</div>

<div className="space-y-1 mt-2">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Sarah Smith</h2>
<div className="flex items-center gap-2 text-slate-500 text-sm">
<iconify-icon icon="lucide:hash" strokeWidth="1.5" width="14"></iconify-icon>
<span>Roll: 1001</span>
<span className="mx-1 text-slate-300">|</span>
<span>Admission ID: #20230589</span>
</div>
<div className="pt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                            Class 10
                                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-100">
                                            Section A
                                        </span>
</div>
</div>
</div>

<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all shadow-sm">
<iconify-icon icon="lucide:printer" strokeWidth="1.5" width="16"></iconify-icon>
                                    Print
                                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-accent hover:border-accent/30 hover:bg-blue-50 transition-all shadow-sm">
<iconify-icon icon="lucide:file-down" strokeWidth="1.5" width="16"></iconify-icon>
                                    PDF
                                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-full text-sm font-medium hover:bg-accent-hover transition-all shadow-sm shadow-blue-500/20">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="16"></iconify-icon>
                                    Edit Profile
                                </button>
</div>
</div>

<div className="p-6 md:p-8">
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100">Personal Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Full Name</dt>
<dd className="text-sm font-medium text-slate-900">Sarah Marie Smith</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Gender</dt>
<dd className="text-sm font-medium text-slate-900">Female</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Date of Birth</dt>
<dd className="text-sm font-medium text-slate-900">14 April 2008 <span className="text-slate-400 font-normal">(15 Years)</span></dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Blood Group</dt>
<dd className="text-sm font-medium text-slate-900">O+</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Religion</dt>
<dd className="text-sm font-medium text-slate-900">Christianity</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Admission Date</dt>
<dd className="text-sm font-medium text-slate-900">01 September 2020</dd>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 uppercase tracking-wider mt-10 mb-6 pb-2 border-b border-slate-100">Family &amp; Contact</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Father's Name</dt>
<dd className="text-sm font-medium text-slate-900">Robert Smith</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Mother's Name</dt>
<dd className="text-sm font-medium text-slate-900">Mary Smith</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Email Address</dt>
<dd className="text-sm font-medium text-slate-900 flex items-center gap-2">
                                        sarah.s@example.com
                                        <iconify-icon className="text-emerald-500" icon="lucide:check-circle-2" width="14"></iconify-icon>
</dd>
</div>

<div>
<dt className="text-xs font-medium text-slate-500 mb-1">Phone Number</dt>
<dd className="text-sm font-medium text-slate-900">+1 (555) 123-4567</dd>
</div>

<div className="md:col-span-2">
<dt className="text-xs font-medium text-slate-500 mb-1">Address</dt>
<dd className="text-sm font-medium text-slate-900 leading-relaxed max-w-lg">
                                        123 Maple Avenue, Springfield Gardens,<br/>
                                        New York, NY 11413, United States
                                    </dd>
</div>
</div>
</div>

<div className="bg-slate-50/50 px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
<span>Record created: 20 Sep 2020</span>
<span>Last updated: 2 days ago</span>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
