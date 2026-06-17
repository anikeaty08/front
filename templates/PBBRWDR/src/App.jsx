import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  lucide.createIcons();

  // Workspace dropdown
  const workspaceBtn = document.getElementById('workspaceBtn');
  const workspaceMenu = document.getElementById('workspaceMenu');
  if (workspaceBtn && workspaceMenu) {
    workspaceBtn.addEventListener('click', () => {
      workspaceMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
      if (!workspaceBtn.contains(e.target) && !workspaceMenu.contains(e.target)) {
        workspaceMenu.classList.add('hidden');
      }
    });
  }

  // Projects accordions
  function setupAccordion(toggleId, listId) {
    const toggle = document.getElementById(toggleId);
    const list = document.getElementById(listId);
    if (toggle && list) {
      const icon = toggle.querySelector('[data-lucide="chevron-down"]');
      toggle.addEventListener('click', () => {
        list.classList.toggle('hidden');
        if (icon) icon.classList.toggle('rotate-180');
      });
    }
  }
  setupAccordion('projectsToggleLight', 'projectsListLight');
  setupAccordion('projectsToggleDark', 'projectsListDark');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<aside className="sidebar beautiful-shadow overflow-hidden bg-white border-slate-200 rounded-2xl">

<div className="flex items-center justify-between border-slate-100 border-b pt-5 pr-5 pb-5 pl-5">
<button className="flex items-center gap-2 beautiful-shadow hover:shadow-md transition-all text-sm font-semibold bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4" id="workspaceBtn">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-slate-800">TechFlow</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Avatar" className="w-10 h-10 rounded-xl object-cover border-2 border-slate-200 beautiful-shadow" src="https://randomuser.me/api/portraits/women/68.jpg"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white"></div>
</div>
</div>

<div className="mx-5 mt-2 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50 beautiful-shadow border border-slate-200 p-5 text-sm hidden" id="workspaceMenu">
<div className="mb-4 pb-4 border-b border-slate-200">
<p className="font-semibold text-slate-800">Alexandra Chen</p>
<p className="text-slate-500 text-xs mt-1">alexandra@techflow.co</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
<span className="text-xs text-slate-600">Online</span>
</div>
</div>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="lucide lucide-zap w-4 h-4 text-indigo-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-medium">TechFlow</span>
<svg className="lucide lucide-check w-4 h-4 ml-auto text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="lucide lucide-briefcase w-4 h-4 text-blue-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span>InnovateLab</span>
</button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors">
<svg className="lucide lucide-rocket w-4 h-4 text-purple-600" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span>StartupHub</span>
</button>
<hr className="my-4 border-slate-200"/>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors text-slate-600">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> Settings
    </button>
<button className="flex items-center gap-3 w-full py-2.5 px-2 rounded-lg hover:bg-white/60 transition-colors text-red-600">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Sign Out
    </button>
</div>

<nav className="select-none text-sm pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Dashboard
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg> Team Members
      <span className="ml-auto bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-medium">12</span>
</a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full text-slate-500 uppercase text-xs tracking-wider font-semibold mb-3" id="projectsToggleLight">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Active Projects
        <svg className="lucide lucide-plus w-4 h-4 ml-auto hover:bg-slate-200 rounded p-0.5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1" id="projectsListLight">
<button className="flex items-center gap-3 w-full beautiful-shadow text-white bg-gradient-to-tl from-teal-400 to-blue-500 rounded-xl pt-3 pr-4 pb-3 pl-4">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="font-medium">Mobile App Redesign</span>
<svg className="lucide lucide-star w-4 h-4 ml-auto" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<a className="block pl-9 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">Sprint Planning</a>
<a className="block pl-9 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">User Testing</a>
<a className="block pl-9 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" href="#">Design System</a>
<button className="flex items-center gap-3 w-full px-4 py-3 mt-2 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>AI Integration</span>
<div className="ml-auto flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs text-slate-500">3</span>
</div>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span>API Development</span>
<span className="ml-auto text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">In Review</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span>Security Audit</span>
<span className="ml-auto text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded-full">Urgent</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="text-slate-500 uppercase text-xs tracking-wider font-semibold mb-3">Quick Actions</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> Schedule Meeting
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors" href="#">
<svg className="lucide lucide-file-plus w-4 h-4" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg> Create Document
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-100 rounded-xl transition-colors relative" href="#">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg> Notifications
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></span>
</a>
</div>
</div>
</nav>
</aside>

<aside className="sidebar beautiful-shadow-dark overflow-hidden bg-slate-900 border-slate-700 rounded-2xl">

<div className="flex items-center justify-between p-5 border-b border-slate-800">
<button className="flex items-center gap-2 hover:bg-slate-700 transition-colors beautiful-shadow-dark text-sm font-semibold bg-slate-800 border-slate-700 border rounded-xl pt-2.5 pr-4 pb-2.5 pl-4">
<svg className="lucide lucide-zap w-4 h-4 text-cyan-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-white">TechFlow</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="relative">
<img alt="Avatar" className="w-10 h-10 rounded-xl object-cover border-2 border-slate-700 beautiful-shadow-dark" src="https://randomuser.me/api/portraits/men/85.jpg"/>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-900"></div>
</div>
</div>

<nav className="select-none text-sm text-white pt-6 pr-2 pl-2">
<a className="flex items-center gap-3 px-4 py-3 mx-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl beautiful-shadow-dark" href="#">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300 hover:text-white" href="#">
<svg className="lucide lucide-folder-open w-5 h-5" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg> My Workspace
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300 hover:text-white" href="#">
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> Video Calls
      <span className="ml-auto bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded-full">2</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300 hover:text-white relative" href="#">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Messages
      <span className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400"></span>
</a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300 hover:text-white" href="#">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Shared Files
    </a>
<a className="flex items-center gap-3 px-4 py-3 mx-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300 hover:text-white" href="#">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg> Team Directory
    </a>

<div className="px-4 mt-6">
<button className="flex items-center gap-2 w-full text-slate-400 uppercase text-xs tracking-wider font-semibold mb-3" id="projectsToggleDark">
<svg className="lucide lucide-chevron-down w-4 h-4 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
        Current Projects
        <svg className="lucide lucide-plus w-4 h-4 ml-auto hover:bg-slate-700 rounded p-0.5 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="space-y-1" id="projectsListDark">
<button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 beautiful-shadow-dark">
<span className="w-2 h-2 rounded-full bg-cyan-400"></span>
<span className="font-medium text-white">Mobile App Redesign</span>
<svg className="lucide lucide-star w-4 h-4 ml-auto text-cyan-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<a className="block pl-9 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" href="#">Design Review</a>
<a className="block pl-9 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" href="#">Prototype Testing</a>
<a className="block pl-9 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors" href="#">Final Handoff</a>
<button className="flex items-center gap-3 w-full px-4 py-3 mt-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-300">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="">Backend API</span>
<div className="ml-auto flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs text-slate-400">5</span>
</div>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-800 rounded-xl transition-colors text-slate-300">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span>Database Migration</span>
<span className="ml-auto text-xs bg-amber-900 text-amber-300 px-2 py-1 rounded-full">Pending</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-slate-800 rounded-xl transition-colors text-slate-300">
<span className="w-2 h-2 rounded-full bg-purple-400"></span>
<span className="">Analytics Dashboard</span>
<span className="ml-auto text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded-full">New</span>
</button>
</div>
</div>

<div className="px-4 mt-6 pb-6">
<p className="text-slate-400 uppercase text-xs tracking-wider font-semibold mb-3">Developer Tools</p>
<div className="space-y-1">
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors" href="#">
<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg> Terminal
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors" href="#">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> Database
        </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-colors relative" href="#">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> System Monitor
          <span className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-400"></span>
</a>
</div>
</div>
</nav>
</aside>


    </>
  );
}
