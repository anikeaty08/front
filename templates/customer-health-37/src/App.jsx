import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        function openUserPanel(userId) {
            document.getElementById('userPanel').classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeUserPanel() {
            document.getElementById('userPanel').classList.add('hidden');
            document.body.style.overflow = '';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-60 border-r flex flex-col h-screen sticky top-0 hidden lg:flex bg-black border-gray-800" style={{}}>
<div className="p-4 border-b border-gray-800" style={{}}>
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center from-lime-400 to-emerald-400" style={{}}>
<svg className="lucide lucide-activity w-4 h-4 text-black" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="font-semibold tracking-tight text-gray-100" style={{}}>Pulse</span>
<svg className="lucide lucide-chevron-down w-4 h-4 ml-auto text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="p-3">
<button className="w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span>Quick actions</span>
<span className="ml-auto text-xs px-1.5 py-0.5 rounded text-gray-600 bg-gray-900" style={{}}>⌘K</span>
</button>
</div>
<nav className="flex-1 px-3 py-2 space-y-1 overflow-y-auto">
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span>Command Center</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span>Notifications</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
<span>Tasks</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span>Notes</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Emails</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<span>Reports</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Automations</span>
</a>
<div className="pt-4">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Favorites</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<p className="px-3 py-1 text-xs text-gray-600" style={{}}>No favorites</p>
</div>
<div className="pt-4">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Records</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg text-black bg-gray-100" href="#" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Users</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-building-2 w-4 h-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span>Companies</span>
</a>
</div>
<div className="pt-4">
<div className="flex items-center justify-between px-3 py-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Lists</span>
<svg className="lucide lucide-chevron-down w-3 h-3 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-list w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<span>At Risk Users</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-list w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5h.01"></path><path d="M3 12h.01"></path><path d="M3 19h.01"></path><path d="M8 5h13"></path><path d="M8 12h13"></path><path d="M8 19h13"></path></svg>
<span>Power Users</span>
</a>
</div>
</nav>
<div className="p-3 border-t space-y-1 border-gray-800" style={{}}>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-user-plus w-4 h-4" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
<span>Invite teammates</span>
</a>
<a className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" href="#" style={{}}>
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>Help and first steps</span>
<span className="ml-auto text-xs px-1.5 py-0.5 rounded text-lime-400 bg-lime-900" style={{}}>1/6</span>
</a>
<div className="flex items-center gap-2 px-3 py-2">
<span className="text-sm font-medium text-lime-400" style={{}}>14</span>
<span className="text-sm text-gray-400" style={{}}>days left on trial</span>
<button className="ml-auto px-3 py-1 text-xs font-medium rounded-lg transition-colors text-black bg-lime-400 hover:bg-lime-300" style={{}}>Add billing</button>
</div>
</div>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="border-b sticky top-0 z-30 bg-black border-gray-800" style={{}}>
<div className="flex items-center justify-between px-4 lg:px-6 h-14">
<div className="flex items-center gap-3">
<button className="lg:hidden p-2 text-gray-500 rounded-lg hover:text-gray-300 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<h1 className="text-base font-semibold tracking-tight text-gray-100" style={{}}>Users</h1>
<button className="p-1 text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="hidden sm:inline">View settings</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="hidden sm:inline">Import / Export</span>
<svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="w-8 h-8 bg-gradient-to-br to-cyan-500 rounded-full flex items-center justify-center text-xs font-medium text-black from-green-600" style={{}}>AS</div>
</div>
</div>
</header>

<div className="border-b px-4 lg:px-6 py-3 bg-black border-gray-800" style={{}}>
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors text-gray-300 bg-gray-900 hover:bg-gray-800" style={{}}>
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>All Users</span>
<svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="flex flex-1 gap-x-2 gap-y-2 items-center">
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-arrow-up-down w-4 h-4" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
<span className="">Sort</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-lg transition-colors text-gray-400 hover:bg-gray-900" style={{}}>
<svg className="lucide lucide-filter w-4 h-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span className="">Filter</span>
</button>
<div className="hidden sm:flex items-center gap-2 ml-auto">
<div className="relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-9 pr-4 py-1.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent w-48 border-gray-800 focus:ring-lime-500" placeholder="Search users..." style={{}} type="text"/>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors text-black bg-lime-400 hover:bg-lime-300" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add User</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-auto scrollbar-thin">
<table className="w-full min-w-[1200px]">
<thead className="border-b sticky top-0 z-10 bg-gray-950 border-gray-800" style={{}}>
<tr className="">
<th className="w-10 px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600" style={{}}></div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>User</span>
<button className="text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-tag w-3 h-3 text-gray-600" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Status</span>
<button className="text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-dollar-sign w-3 h-3 text-gray-600" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>MRR</span>
<button className="text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-trending-up w-3 h-3 text-gray-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>LTV</span>
<button className="text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-calendar w-3 h-3 text-gray-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Last Active</span>
<button className="text-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-sparkles w-3 h-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-3 h-3 text-gray-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Automations</span>
</div>
</th>
<th className="px-4 py-3 text-left">
<div className="flex items-center gap-2">
<svg className="lucide lucide-message-circle w-3 h-3 text-gray-600" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Last Contact</span>
</div>
</th>
<th className="px-4 py-3 text-right">
<div className="flex items-center gap-2 justify-end">
<svg className="lucide lucide-activity w-3 h-3 text-gray-600" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide" style={{}}>Health</span>
</div>
</th>
</tr>
</thead>
<tbody className="divide-y bg-black divide-gray-900" style={{}}>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('sarah')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-rose-500 rounded-full flex items-center justify-center text-sm font-medium from-pink-600 text-black" style={{}}>SC</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Sarah Chen</p>
<p className="text-xs text-gray-500" style={{}}>sarah@acmecorp.com</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-900 text-amber-300" style={{}}>At Risk</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-lime-900 text-lime-300" style={{}}>High Value</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$299</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$2,392</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>6 days ago</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-blue-900 text-blue-300" style={{}}>Re-engagement</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-500" style={{}}>No contact</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-1/4 h-full bg-amber-500 rounded-full" style={{}}></div>
</div>
<span className="text-xs font-medium text-amber-400" style={{}}>25</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('mike')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br rounded-full flex items-center justify-center text-sm font-medium from-blue-600 text-black to-emerald-500" style={{}}>MJ</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Mike Johnson</p>
<p className="text-xs text-gray-500" style={{}}>mike@techcorp.io</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-900 text-blue-300" style={{}}>Trial</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-900 text-gray-400" style={{}}>Not Activated</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>$0</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>$0</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>3 days ago</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-green-900 text-green-300" style={{}}>Onboarding</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-500" style={{}}>No contact</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-1/2 h-full bg-blue-500 rounded-full" style={{}}></div>
</div>
<span className="text-xs font-medium text-blue-400" style={{}}>50</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('emma')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-teal-500 rounded-full flex items-center justify-center text-sm font-medium text-black from-green-600" style={{}}>EW</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Emma Wilson</p>
<p className="text-xs text-gray-500" style={{}}>emma@designstudio.co</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>Active</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-purple-900 text-purple-300" style={{}}>Power User</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$199</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$2,786</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-green-400" style={{}}>Today</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-purple-900 text-purple-300" style={{}}>Upsell</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>2h ago</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-11/12 h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>92</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('john')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-amber-500 rounded-full flex items-center justify-center text-sm font-medium from-orange-600 text-black" style={{}}>JD</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>John Davis</p>
<p className="text-xs text-gray-500" style={{}}>john@startup.io</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>Active</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$49</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$294</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>Yesterday</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>None</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>4h ago</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-3/4 h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>75</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('lisa')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-purple-500 rounded-full flex items-center justify-center text-sm font-medium text-black from-lime-600" style={{}}>LM</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Lisa Martinez</p>
<p className="text-xs text-gray-500" style={{}}>lisa@agency.com</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-amber-900 text-amber-300" style={{}}>At Risk</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$99</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$297</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-amber-400" style={{}}>5 days ago</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-blue-900 text-blue-300" style={{}}>Re-engagement</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-500" style={{}}>No contact</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-1/3 h-full bg-amber-500 rounded-full" style={{}}></div>
</div>
<span className="text-xs font-medium text-amber-400" style={{}}>32</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" onclick="openUserPanel('robert')" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-blue-500 rounded-full flex items-center justify-center text-sm font-medium from-cyan-600 text-black" style={{}}>RK</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Robert Kim</p>
<p className="text-xs text-gray-500" style={{}}>robert@enterprise.co</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-900 text-blue-300" style={{}}>Trial</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>High Potential</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>$0</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>$0</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-green-400" style={{}}>Today</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-green-900 text-green-300" style={{}}>Welcome</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-500" style={{}}>No contact</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-4/5 h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>80</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-pink-500 rounded-full flex items-center justify-center text-sm font-medium from-rose-600 text-black" style={{}}>AT</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Alex Thompson</p>
<p className="text-xs text-gray-500" style={{}}>alex@creative.io</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>Active</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$149</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$1,490</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>2 days ago</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>None</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>1 week ago</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-2/3 h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>68</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br to-orange-500 rounded-full flex items-center justify-center text-sm font-medium from-amber-600 text-black" style={{}}>NP</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Nina Patel</p>
<p className="text-xs text-gray-500" style={{}}>nina@fintech.com</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>Active</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-lime-900 text-lime-300" style={{}}>Enterprise</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$499</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$5,988</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-green-400" style={{}}>Today</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-lime-900 text-lime-300" style={{}}>VIP</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>Yesterday</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-full h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>98</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br rounded-full flex items-center justify-center text-sm font-medium text-black to-lime-500 from-emerald-600" style={{}}>DL</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>David Lee</p>
<p className="text-xs text-gray-500" style={{}}>david@saas.co</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-red-900 text-red-300" style={{}}>Churned</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm line-through text-gray-600" style={{}}>$99</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$594</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-red-400" style={{}}>30 days ago</span>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1">
<span className="px-2 py-0.5 text-xs rounded bg-red-900 text-red-300" style={{}}>Win-back</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>2 weeks ago</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-0 h-full bg-red-500 rounded-full" style={{}}></div>
</div>
<span className="text-xs font-medium text-red-400" style={{}}>0</span>
</div>
</td>
</tr>

<tr className="cursor-pointer transition-colors group hover:bg-gray-950" style={{}}>
<td className="px-4 py-3">
<div className="w-4 h-4 border rounded cursor-pointer border-gray-700 bg-black hover:border-gray-600 group-hover:border-lime-400" style={{}}></div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-gradient-to-br rounded-full flex items-center justify-center text-sm font-medium from-teal-600 text-black to-green-500" style={{}}>JW</div>
<div>
<p className="text-sm font-medium text-gray-100" style={{}}>Jennifer Wang</p>
<p className="text-xs text-gray-500" style={{}}>jennifer@marketing.io</p>
</div>
</div>
</td>
<td className="px-4 py-3">
<div className="flex items-center gap-1.5 flex-wrap">
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-900 text-green-300" style={{}}>Active</span>
</div>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$79</span>
</td>
<td className="px-4 py-3">
<span className="text-sm font-medium text-gray-100" style={{}}>$948</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-400" style={{}}>1 day ago</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-600" style={{}}>None</span>
</td>
<td className="px-4 py-3">
<span className="text-sm text-gray-500" style={{}}>No contact</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 rounded-full overflow-hidden bg-gray-800" style={{}}>
<div className="w-7/12 h-full rounded-full bg-green-500" style={{}}></div>
</div>
<span className="text-xs font-medium text-green-400" style={{}}>58</span>
</div>
</td>
</tr>
</tbody>
</table>

<div className="border-t px-4 lg:px-6 py-3 sticky bottom-0 bg-black border-gray-800" style={{}}>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-4 text-sm text-gray-500" style={{}}>
<span className="font-medium text-gray-100" style={{}}>10</span> count
                        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-300" style={{}}>
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add calculation
                        </button>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg disabled:opacity-50 text-gray-600 hover:text-gray-400 hover:bg-gray-900" disabled="" style={{}}>
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-sm text-gray-400" style={{}}>Page 1 of 1</span>
<button className="p-2 rounded-lg disabled:opacity-50 text-gray-600 hover:text-gray-400 hover:bg-gray-900" disabled="" style={{}}>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="userPanel">
<div className="absolute inset-0 bg-white/30" onclick="closeUserPanel()"></div>
<div className="absolute right-0 top-0 h-full w-full max-w-xl shadow-2xl overflow-y-auto bg-black">

<div className="sticky top-0 border-b px-6 py-4 z-10 bg-black border-gray-800" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-gradient-to-br to-rose-500 rounded-full flex items-center justify-center font-medium text-lg from-pink-600 text-black" style={{}}>SC</div>
<div>
<h2 className="text-lg font-semibold tracking-tight text-gray-100" style={{}}>Sarah Chen</h2>
<p className="text-sm text-gray-500" style={{}}>sarah@acmecorp.com</p>
</div>
</div>
<button className="p-2 rounded-lg text-gray-600 hover:text-gray-400 hover:bg-gray-900" onclick="closeUserPanel()" style={{}}>
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="p-6 space-y-6">

<div className="flex flex-wrap gap-2">
<button className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors text-black bg-lime-400 hover:bg-lime-300" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Send Email</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 border text-sm font-medium rounded-lg transition-colors bg-black border-gray-800 text-gray-300 hover:bg-gray-950" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Call</span>
</button>
<button className="flex items-center gap-2 px-3 py-2 border text-sm font-medium rounded-lg transition-colors bg-black border-gray-800 text-gray-300 hover:bg-gray-950" style={{}}>
<svg className="lucide lucide-video w-4 h-4" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<span>Schedule Meeting</span>
</button>
</div>

<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-sm font-medium rounded-full bg-amber-900 text-amber-300" style={{}}>At Risk</span>
<span className="px-3 py-1 text-sm font-medium rounded-full bg-lime-900 text-lime-300" style={{}}>High Value</span>
<button className="px-3 py-1 border border-dashed text-gray-500 text-sm rounded-full border-gray-700 hover:border-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-plus w-3 h-3 inline" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Add tag
                    </button>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-xl p-4 bg-gray-950" style={{}}>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1" style={{}}>Monthly Revenue</p>
<p className="text-2xl font-semibold tracking-tight text-gray-100" style={{}}>$299</p>
<p className="text-xs text-gray-500 mt-1" style={{}}>Pro plan</p>
</div>
<div className="rounded-xl p-4 bg-gray-950" style={{}}>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1" style={{}}>Lifetime Value</p>
<p className="text-2xl font-semibold tracking-tight text-gray-100" style={{}}>$2,392</p>
<p className="text-xs text-gray-500 mt-1" style={{}}>8 months</p>
</div>
<div className="rounded-xl p-4 bg-gray-950" style={{}}>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1" style={{}}>Health Score</p>
<div className="flex items-center gap-2">
<p className="text-2xl font-semibold tracking-tight text-amber-400" style={{}}>25</p>
<span className="flex items-center gap-1 text-xs text-red-400" style={{}}>
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                -40
                            </span>
</div>
<p className="text-xs text-gray-500 mt-1" style={{}}>Critical</p>
</div>
<div className="rounded-xl p-4 bg-gray-950" style={{}}>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1" style={{}}>Last Active</p>
<p className="text-2xl font-semibold tracking-tight text-gray-100" style={{}}>6d</p>
<p className="text-xs mt-1 text-amber-400" style={{}}>Usually daily</p>
</div>
</div>

<div>
<h3 className="text-sm font-semibold mb-3 text-gray-100" style={{}}>Activity Summary</h3>
<div className="space-y-3">
<div className="flex items-center justify-between py-2 border-b border-gray-900" style={{}}>
<span className="text-sm text-gray-400" style={{}}>Sessions this month</span>
<span className="text-sm font-medium text-gray-100" style={{}}>12</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-gray-900" style={{}}>
<span className="text-sm text-gray-400" style={{}}>Avg. session duration</span>
<span className="text-sm font-medium text-gray-100" style={{}}>18 min</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-gray-900" style={{}}>
<span className="text-sm text-gray-400" style={{}}>Features used</span>
<span className="text-sm font-medium text-gray-100" style={{}}>8 of 12</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-gray-900" style={{}}>
<span className="text-sm text-gray-400" style={{}}>Team members</span>
<span className="text-sm font-medium text-gray-100" style={{}}>3</span>
</div>
<div className="flex items-center justify-between py-2">
<span className="text-sm text-gray-400" style={{}}>Support tickets</span>
<span className="text-sm font-medium text-gray-100" style={{}}>0</span>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-gray-100" style={{}}>Automations</h3>
<button className="text-sm font-medium text-lime-400 hover:text-lime-300" style={{}}>Manage</button>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg bg-blue-950" style={{}}>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm text-blue-200" style={{}}>Re-engagement sequence</span>
</div>
<span className="text-xs text-blue-400" style={{}}>Active</span>
</div>
<button className="w-full flex items-center justify-center gap-2 p-3 border border-dashed rounded-lg text-sm text-gray-500 transition-colors border-gray-700 hover:border-gray-600 hover:text-gray-400" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                            Add to automation
                        </button>
</div>
</div>

<div>
<h3 className="text-sm font-semibold mb-3 text-gray-100" style={{}}>Recent Activity</h3>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-900" style={{}}>
<svg className="lucide lucide-log-out w-4 h-4 text-gray-500" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</div>
<div>
<p className="text-sm text-gray-100" style={{}}>Last session ended</p>
<p className="text-xs text-gray-500" style={{}}>6 days ago • 23 min session</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-lime-900" style={{}}>
<svg className="lucide lucide-download w-4 h-4 text-lime-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</div>
<div>
<p className="text-sm text-gray-100" style={{}}>Exported report data</p>
<p className="text-xs text-gray-500" style={{}}>6 days ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-green-900" style={{}}>
<svg className="lucide lucide-user-plus w-4 h-4 text-green-400" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div>
<p className="text-sm text-gray-100" style={{}}>Invited team member</p>
<p className="text-xs text-gray-500" style={{}}>1 week ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-900" style={{}}>
<svg className="lucide lucide-settings w-4 h-4 text-blue-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<p className="text-sm text-gray-100" style={{}}>Updated integration settings</p>
<p className="text-xs text-gray-500" style={{}}>1 week ago</p>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold text-gray-100" style={{}}>Notes</h3>
<button className="text-sm font-medium text-lime-400 hover:text-lime-300" style={{}}>Add note</button>
</div>
<div className="rounded-lg p-4 bg-gray-950" style={{}}>
<p className="text-sm text-gray-400" style={{}}>No notes yet. Add a note to track important information about this user.</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
