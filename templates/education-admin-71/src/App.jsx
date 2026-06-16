import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            const body = document.body;

            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                body.style.overflow = 'hidden';
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
                body.style.overflow = '';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-slate-900/40 z-40 hidden backdrop-blur-sm transition-opacity opacity-0" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<aside className="sidebar-transition fixed inset-y-0 left-0 z-50 w-64 flex flex-col border-r border-gray-200 bg-white h-full transform -translate-x-full md:translate-x-0 md:static md:flex shadow-2xl md:shadow-none" id="sidebar">
<div className="h-16 flex items-center px-6 border-b border-gray-100 justify-between md:justify-start">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:book-open" data-width="14" height="14" role="img" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">SCRIBE.</span>
</div>
<button className="md:hidden text-slate-400 hover:text-slate-600" onclick="toggleMobileMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-900 bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="18" data-icon="lucide:layout-grid" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors iconify--lucide" data-height="18" data-icon="lucide:library" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Subjects
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors iconify--lucide" data-height="18" data-icon="lucide:users" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                Teachers
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors iconify--lucide" data-height="18" data-icon="lucide:bookmark" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Saved Notes
            </a>
<div className="my-6 border-t border-gray-100 mx-3"></div>

<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Admin Control</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors iconify--lucide" data-height="18" data-icon="lucide:shield-check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                Permissions
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-600 transition-colors iconify--lucide" data-height="18" data-icon="lucide:upload-cloud" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 13v8m-8-6.101A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17l4-4l4 4"></path></g></svg>
                Upload Center
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative">
<img alt="Admin" className="h-9 w-9 rounded-full ring-2 ring-white shadow-sm group-hover:ring-indigo-100 transition-all" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&amp;backgroundColor=e2e8f0"/>
<div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Principal Anderson</p>
<p className="text-xs text-slate-500 truncate">Administrator</p>
</div>
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-slate-600 iconify--lucide" data-icon="lucide:chevron-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden bg-white/50">

<header className="h-16 sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200 z-30 px-4 sm:px-8 flex items-center justify-between">
<div className="flex items-center gap-4 md:hidden">
<button className="text-slate-500 hover:text-slate-900 p-1" onclick="toggleMobileMenu()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<span className="text-sm font-semibold tracking-tight text-slate-900">SCRIBE.</span>
</div>
<div className="hidden md:flex flex-1 max-w-lg relative">
<svg aria-hidden="true" className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 iconify--lucide" data-height="18" data-icon="lucide:search" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-indigo-200 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-slate-400 text-slate-900 outline-none" placeholder="Search notes, subjects, or teachers..." type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-medium text-slate-400 bg-white border border-gray-200 rounded">⌘K</kbd>
</div>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-500 hover:bg-gray-100 rounded-full transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:bell" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="absolute top-2.5 right-2.5 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"></span>
</button>
<div className="h-6 w-px bg-gray-200 mx-1 hidden md:block"></div>
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:help-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
                    Help
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8" id="main-scroll">
<div className="max-w-6xl mx-auto space-y-8 pb-24 md:pb-0">

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 fade-in">

<div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div className="">
<p className="uppercase text-xs font-medium text-slate-500 tracking-wide">Total Subjects</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-2 tracking-tight">12</h3>
</div>
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:library" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Active Teachers</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-2 tracking-tight">28</h3>
</div>
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:users" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
</div>
</div>

<div className="p-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start">
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Notes Uploaded</p>
<h3 className="text-2xl font-semibold text-slate-900 mt-2 tracking-tight">1,405</h3>
</div>
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:file-stack" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1m12 4a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m12-1a2 2 0 0 0-.586-1.414l-2-2A2 2 0 0 0 17 2h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<section className="space-y-4 pt-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-slate-900 tracking-tight">Quick Actions</h2>
</div>
<div className="bg-white border border-gray-200 rounded-xl p-8 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 mb-4">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:layout-template" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</div>
<h3 className="text-sm font-medium text-slate-900">Dashboard Content</h3>
<p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Select an item from the sidebar or use the search bar to find specific notes and materials managed by Principal Anderson.</p>
</div>
</section>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur-lg border-t border-gray-200 pb-safe z-50">
<div className="flex justify-around items-center h-16">
<a className="flex flex-col items-center gap-1 p-2 text-indigo-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:layout-grid" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:search" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<span className="text-[10px] font-medium">Search</span>
</a>
<div className="relative -top-5">
<button className="bg-indigo-600 text-white p-3 rounded-full shadow-lg shadow-indigo-600/30 active:scale-95 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:plus" data-width="24" height="24" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:bell" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0m-10.47-5.674A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[10px] font-medium">Alerts</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-slate-400 hover:text-slate-600" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:user" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>
</nav>


    </>
  );
}
