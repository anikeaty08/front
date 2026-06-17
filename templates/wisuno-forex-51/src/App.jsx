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
      

<aside className="w-72 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 h-full overflow-y-auto">

<div className="h-16 flex items-center px-6 border-b border-transparent">
<img alt="Wisuno Logo" className="w-auto h-8 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c75b8696-c8ee-4c12-b1b0-45b1d4b38b1d_320w.png"/>
</div>

<nav className="flex-1 px-4 py-4 space-y-1">
<a className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group" href="#">
<svg className="lucide lucide-home w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Home</span>
</a>

<div className="space-y-1">
<button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-900 bg-gray-50 rounded-md group">
<div className="flex items-center">
<svg className="lucide lucide-users w-5 h-5 mr-3 text-gray-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium">IB Management</span>
</div>
<svg className="lucide lucide-chevron-up w-4 h-4 text-gray-400" data-lucide="chevron-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<div className="pl-11 space-y-1">
<a className="block px-3 py-2 text-gray-500 hover:text-gray-900 font-medium" href="#">Activated IB</a>
<a className="block px-3 py-2 text-gray-500 hover:text-gray-900 font-medium" href="#">Pending IB</a>
</div>
</div>
<a className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group" href="#">
<svg className="lucide lucide-user w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="font-medium">Client</span>
</a>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
<div className="flex items-center">
<svg className="lucide lucide-wallet w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<span className="font-medium">Funding</span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
<div className="flex items-center">
<svg className="lucide lucide-pie-chart w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
<span className="font-medium">Trade Reports</span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<a className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group" href="#">
<svg className="lucide lucide-link w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="font-medium">Tracking Link</span>
</a>
<div className="group">
<button className="w-full flex items-center justify-between px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md">
<div className="flex items-center">
<svg className="lucide lucide-headphones w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
<span className="font-medium">Service Desk</span>
</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<a className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-md group" href="#">
<svg className="lucide lucide-wrench w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="font-medium">Info &amp; Tools</span>
</a>

<div className="mx-3 mt-4 relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white shadow-lg transition-all hover:shadow-xl group">

<div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-transform duration-700 group-hover:scale-110 pointer-events-none"></div>
<div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>

<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 backdrop-blur-md shadow-sm border border-white/10">
<svg className="lucide lucide-zap text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-lg font-bold tracking-tight text-white">Earn+</h3>
</div>
<span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm shadow-sm border border-white/10">New</span>
</div>
<p className="mb-6 text-sm font-medium leading-relaxed text-orange-50">
            Get your <span className="font-bold text-white">3% Passive Income</span> monthly with no trade required.
        </p>
<button className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-white py-2.5 text-xs font-bold uppercase tracking-wide text-red-600 shadow-sm transition-all hover:bg-orange-50 active:scale-[0.98]">
            Join Campaign
            <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="mt-6 pt-4 border-t border-gray-100">
<a className="flex items-center px-3 py-2.5 text-gray-500 hover:text-gray-900 group" href="#">
<svg className="lucide lucide-settings w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-medium">Settings</span>
</a>
<a className="flex items-center justify-between px-3 py-2.5 text-gray-500 hover:text-gray-900 group" href="#">
<div className="flex items-center">
<svg className="lucide lucide-bell w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="font-medium">Notifications</span>
</div>
<span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs font-medium">10</span>
</a>
<a className="flex items-center justify-between px-3 py-2.5 text-gray-500 hover:text-gray-900 group" href="#">
<div className="flex items-center">
<svg className="lucide lucide-languages w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-600" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="font-medium">Language</span>
</div>
<span className="bg-gray-100 text-gray-600 py-0.5 px-2 rounded text-xs font-medium border border-gray-200">EN</span>
</a>
</div>

<div className="mx-3 mt-4 mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-gray-900">Online</span>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Need help with something?</h4>
<p className="text-xs text-gray-500 mb-3">Our expert team are ready to help.</p>
<button className="w-full py-2 bg-white border border-gray-200 rounded-md text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 flex items-center justify-center gap-2">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Chat to support
                </button>
</div>

<div className="mx-3 mb-6 p-3 border border-gray-200 rounded-lg flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Support" className="w-8 h-8 rounded-full" src="https://placehold.co/40x40/orange/white?text=W"/>
<div className="overflow-hidden">
<p className="text-sm font-semibold text-gray-900 truncate">Wisuno Support</p>
<p className="text-xs text-gray-500 truncate">support@wisuno.com</p>
</div>
</div>
<svg className="lucide lucide-chevrons-up-down w-4 h-4 text-gray-400" data-lucide="chevrons-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>
</nav>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-white">

<header className="h-16 border-b border-gray-200 flex items-center justify-between px-8 bg-white shrink-0 z-10">
<div className="flex-1"></div> 
<div className="flex items-center gap-6">
<button className="bg-green-600 hover:bg-green-700 text-white rounded px-6 py-2 text-sm font-medium uppercase tracking-wide shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
    Deposit
</button>
<div className="h-6 w-px bg-gray-200 mx-2"></div>
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span>Contact US</span>
</button>
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span>Notifications</span>
</button>
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm">
<svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
<span>Full Screen</span>
</button>
<button className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-sm">
<svg className="lucide lucide-languages w-4 h-4" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="">Language</span>
</button>
<div className="ml-4 flex items-center gap-3 pl-4 border-l border-gray-200">
<img alt="Avatar" className="w-8 h-8 rounded-full border border-gray-200" src="https://placehold.co/40x40/fcd34d/333?text=User"/>
<span className="text-gray-700 font-medium text-sm">小李子</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-white pt-8 pr-8 pb-8 pl-8">
<div className="max-w-[1600px] mx-auto space-y-8">

<div className="flex items-center gap-3">
<svg className="lucide lucide-credit-card w-7 h-7 text-gray-800" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Withdraw Details</h1>
</div>

<div className="flex w-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:flex-row md:items-center">

<div className="relative z-10 flex shrink-0 items-center justify-between bg-red-600 px-4 py-3 text-white shadow-md md:w-auto md:justify-center md:shadow-none">
<div className="flex items-center gap-2.5">
<span className="relative flex h-2.5 w-2.5">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest">Breaking News</span>
</div>
</div>

<div className="flex flex-1 items-center overflow-hidden bg-white py-2 md:py-0">
<div className="flex w-full items-center overflow-x-auto md:px-2" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>.no-scrollbar::-webkit-scrollbar { display: none; }</style>
<div className="no-scrollbar flex min-w-max items-center divide-x divide-gray-100">

<a className="group flex min-w-max items-center gap-3 px-6 py-1.5 transition-colors hover:bg-gray-50" href="#">
<span className="rounded bg-orange-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-orange-700 ring-1 ring-orange-200">Licenses</span>
<span className="text-sm font-medium text-gray-900 group-hover:text-red-600">New Regulatory Licenses acquired in FSA and ASIC jurisdictions</span>
<svg className="lucide lucide-arrow-right text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-red-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<a className="group flex min-w-max items-center gap-3 px-6 py-1.5 transition-colors hover:bg-gray-50" href="#">
<span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 ring-1 ring-blue-200">Protection</span>
<span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">$1 Million Client Protection insurance coverage added</span>
<svg className="lucide lucide-arrow-right text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<a className="group flex min-w-max items-center gap-3 px-6 py-1.5 transition-colors hover:bg-gray-50" href="#">
<span className="rounded bg-purple-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-purple-700 ring-1 ring-purple-200">System</span>
<span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Major CRM System Update: Faster deposits &amp; real-time analytics</span>
<svg className="lucide lucide-arrow-right text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="hidden h-full items-center border-l border-gray-100 bg-gray-50 md:flex">
<button className="flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:bg-white hover:text-gray-900 focus:outline-none">
<svg className="lucide lucide-chevron-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="h-4 w-px bg-gray-200"></div>
<button className="flex h-full w-10 items-center justify-center text-gray-400 transition-colors hover:bg-white hover:text-gray-900 focus:outline-none">
<svg className="lucide lucide-chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="border border-gray-200 rounded-lg bg-white shadow-sm">
<div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
<svg className="lucide lucide-filter w-4 h-4 text-gray-500" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<h2 className="text-base font-medium text-gray-900">Filter Accounts</h2>
</div>
<div className="p-6">
<div className="grid grid-cols-4 gap-6">

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Organization</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md shadow-sm appearance-none bg-white border">
<option>Wisunu</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="col-span-1">
<div className="flex justify-between mb-1.5">
<label className="block text-xs font-medium text-gray-700">Owner IB</label>
<label className="inline-flex items-center">
<input className="rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 h-3 w-3 mr-1" type="checkbox"/>
<span className="text-xs text-gray-500">Direct</span>
</label>
</div>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md shadow-sm appearance-none bg-white border">
<option>All</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Status</label>
<div className="relative">
<select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md shadow-sm appearance-none bg-white border">
<option>All</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Trading Account</label>
<input className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 py-2 text-base border px-3" type="text"/>
</div>

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Email</label>
<input className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 py-2 text-base border px-3" type="email"/>
</div>

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Name</label>
<input className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 py-2 text-base border px-3" type="text"/>
</div>

<div className="col-span-1">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Apply Time</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<svg className="lucide lucide-calendar w-4 h-4 text-gray-400" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<input className="block w-full pl-10 border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 py-2 text-base border text-gray-600" type="text" value="Jan 10, 2025 - Jan 16, 2025"/>
</div>
</div>

<div className="col-span-1 flex items-end pb-2">
<label className="inline-flex items-center">
<input checked="" className="rounded border-gray-300 text-orange-500 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50 h-5 w-5 checkbox-orange" type="checkbox"/>
<span className="ml-2 text-sm text-gray-700">Excluding Test Data</span>
</label>
</div>
</div>
</div>
<div className="px-6 py-4 border-t border-gray-100 flex justify-end items-center gap-4 bg-gray-50/30 rounded-b-lg">
<button className="text-sm font-medium text-gray-600 hover:text-gray-900">Clear All Filters</button>
<button className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
<svg className="lucide lucide-search w-4 h-4 mr-2" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                            Search
                        </button>
</div>
</div>

<div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50/50">
<tr className="">
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Trading Account</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Apply Time</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Update Time</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Status</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Withdraw Method</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Account / Address</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Name</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">City</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Withdraw Amount</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Net Withdrawal Amount</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Received Amount</th>
<th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" scope="col">Remark</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-gray-200">

<tr className="h-24"><td className="" colspan="12"></td></tr>
<tr className="h-24"><td colspan="12"></td></tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-1 text-sm text-gray-600 pl-2">
<p className="flex gap-1">
<span className="text-gray-500">• Total Received Amount (USD):</span>
<span className="text-orange-500 font-medium">450</span>
</p>
<p className="flex gap-1">
<span className="text-gray-500">• Total Received Amount (USC):</span>
<span className="text-orange-500 font-medium">0</span>
</p>
</div>

<footer className="pt-12 pb-8 text-gray-500 text-sm leading-relaxed max-w-5xl">
<h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
<p className="mb-2">
                        Wisuno is the trading name of WISUNO LIMITED. WISUNO LIMITED is part of a group of affiliated companies operating in multiple jurisdictions.
                        WISUNO LIMITED is regulated by the Financial Services Authority of Seychelles ("FSA") under the License Number SD178.
                    </p>
<p className="mb-2">
                        Risk Warning: Trading in forex, securities and other leveraged products carries a high level of risk and may not be suitable for all investors. The value of your investments may fluctuate, and you may lose all of your invested capital, particularly when trading with leverage. Price fluctuations may render securities valueless, and engaging in the buying and selling of securities may result in losses exceeding potential profits. In some cases, you may incur unlimited losses that exceed your initial deposit.
                    </p>
<p className="mb-8">
                        CFDs are complex financial instruments that require a thorough understanding before trading. You should carefully assess your investment objectives, level of experience, and risk tolerance before deciding to trade, especially when using it. It is your responsibility to ensure that you fully understand the risks involved and seek independent advice if necessary.
                    </p>
<p>© Copyright 2025 WisunoFX. All Rights Reserved.</p>
</footer>
</div>
</div>
</main>


    </>
  );
}
