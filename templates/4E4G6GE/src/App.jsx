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



tailwind.config = { theme: { extend: { fontFamily: { sans: ['Inter', 'sans-serif'] }}}}



// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const closeMobileMenu = document.getElementById('closeMobileMenu');

mobileMenuBtn?.addEventListener('click', () => {
  mobileMenuOverlay?.classList.remove('hidden');
});

closeMobileMenu?.addEventListener('click', () => {
  mobileMenuOverlay?.classList.add('hidden');
});

mobileMenuOverlay?.addEventListener('click', (e) => {
  if (e.target === mobileMenuOverlay) {
    mobileMenuOverlay.classList.add('hidden');
  }
});

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
      
<div className="w-full max-w-[1440px] bg-gray-100 rounded-[28px] shadow-xl overflow-hidden animate-fade-blur-1">

<header className="md:hidden flex items-center justify-between p-4 animate-slide-left-1">
<button className="text-gray-600" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<h1 className="font-semibold text-lg">Analytics Hub</h1>
<button className="text-gray-600">
<svg className="lucide lucide-bell w-6 h-6" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</header>
<div className="flex">

<aside className="hidden md:flex flex-col w-64 bg-white/80 backdrop-blur-md border-r border-gray-200 animate-slide-left-2" id="sidebar">
<div className="flex items-center justify-between p-4 animate-fade-blur-2">
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=1080&amp;q=80"/>
<div>
<p className="font-medium text-sm">Alex Chen</p>
<p className="text-xs text-gray-500">Analyst</p>
</div>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-plus w-4 h-4 text-gray-600" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="px-4 animate-slide-left-3">
<label className="relative w-full block">
<span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<input className="w-full bg-gray-100 rounded-lg py-2 pl-9 pr-2 text-sm focus:outline-none hover:bg-gray-50 focus:bg-white transition-colors" placeholder="Search projects" type="text"/>
</label>
</div>

<nav className="flex-1 mt-6 px-2 space-y-1 text-sm font-medium animate-slide-left-4">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-layout w-4 h-4" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> Projects
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-target w-4 h-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Goals
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> My Earnings
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200" href="#">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Performance
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg> Favorites
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-settings w-4 h-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> Preferences
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg> Feedback
        </a>
</nav>

<div className="p-4 animate-scale-1">
<div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
<p className="text-xs text-gray-500 mb-1">Monthly Revenue</p>
<p className="text-2xl font-semibold">2,847 <span className="text-sm font-medium">USD</span></p>
<div className="mt-4">
<p className="text-xs text-gray-500">Reach 90% target to unlock bonus</p>
<div className="mt-2 w-full h-10 rounded-xl bg-gradient-to-tr from-orange-400 to-yellow-300 flex items-center justify-center text-xs font-semibold text-white hover:from-orange-500 hover:to-yellow-400 transition-all duration-200">82%</div>
</div>
</div>
</div>

<div className="mt-auto p-4 animate-fade-blur-4">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 border border-black/10 hover:border-gray-300 transition-all duration-200">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Log out
        </button>
</div>
</aside>

<main className="flex-1 p-6 space-y-6 overflow-y-auto">

<div className="flex items-center justify-between animate-slide-right-1">
<h2 className="text-3xl font-semibold">Performance Metrics</h2>
<div className="flex items-center gap-2">
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-sun w-4 h-4 text-gray-600 hidden dark:inline" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<svg className="lucide lucide-moon w-4 h-4 text-gray-600 inline dark:hidden" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</button>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-download w-4 h-4 text-gray-600" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 animate-slide-right-2">
<button className="px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">This Week</button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Top Performers</button>
<button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">High Revenue</button>
<button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-sliders w-4 h-4 text-gray-600" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg>
</button>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="space-y-4 lg:col-span-2">

<div className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 animate-slide-up-1">
<div>
<p className="text-sm text-gray-500">Page Views <span className="text-xs text-gray-400">| across all platforms</span></p>
<p className="mt-1 text-2xl font-semibold">12.4k <span className="text-base font-medium text-gray-500">Views</span></p>
</div>
<div className="flex items-center gap-2">
<div className="w-24 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-yellow-300 flex items-center justify-center text-white text-sm font-medium hover:from-orange-500 hover:to-yellow-400 transition-all duration-200">+18.3</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 animate-slide-up-2">
<div>
<p className="text-sm text-gray-500">Conversions <span className="text-xs text-gray-400">| from campaigns</span></p>
<p className="mt-1 text-2xl font-semibold">847 <span className="text-base font-medium text-gray-500">Sales</span></p>
</div>
<div className="flex items-center gap-2">
<div className="w-14 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-medium hover:bg-gray-800 transition-colors">12.4</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 animate-slide-up-3">
<div className="">
<p className="text-sm text-gray-500">New Signups <span className="text-xs text-gray-400">| from referrals</span></p>
<p className="mt-1 text-2xl font-semibold">289 <span className="text-base font-medium text-gray-500">Users</span></p>
</div>
<div className="flex items-center gap-2">
<div className="w-24 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-medium hover:bg-gray-400 hover:text-white transition-all duration-200">4.62</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 animate-slide-up-4">
<div>
<p className="text-sm text-gray-500">Engagement <span className="text-xs text-gray-400">| on social media</span></p><p className="mt-1 text-2xl font-semibold">6.8% <span className="text-base font-medium text-gray-500">Rate</span></p>
</div>
<div className="flex items-center gap-2">
<div className="w-16 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-medium hover:bg-green-600 transition-all duration-200">+2.3</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 animate-slide-up-5">
<div>
<p className="text-sm text-gray-500">Total Revenue <span className="text-xs text-gray-400">| this quarter</span></p>
<p className="mt-1 text-2xl font-semibold">$24,750 <span className="text-base font-medium text-gray-500">USD</span></p>
</div>
<div className="flex items-center gap-2">
<div className="w-20 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-sm font-medium hover:bg-blue-600 transition-all duration-200">+15.2%</div>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white rounded-2xl p-4 hover:shadow-md transition-shadow duration-200 animate-slide-right-3">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-lg">Weekly Performance</h3>
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-gray-600" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Mon</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-gradient-to-r from-orange-400 to-yellow-300"></div>
</div>
<span className="text-sm font-medium">75%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Tue</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-gradient-to-r from-orange-400 to-yellow-300"></div>
</div>
<span className="text-sm font-medium">82%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Wed</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-orange-400 to-yellow-300"></div>
</div>
<span className="text-sm font-medium">95%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Thu</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-gradient-to-r from-orange-400 to-yellow-300"></div>
</div>
<span className="text-sm font-medium">68%</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-gray-500">Fri</span>
<div className="flex items-center gap-2">
<div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
<div className="w-5/6 h-full bg-gradient-to-r from-orange-400 to-yellow-300"></div>
</div>
<span className="text-sm font-medium">88%</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 hover:shadow-md transition-shadow duration-200 animate-scale-2">
<div className="flex items-center justify-between mb-4">
<h3 className="font-semibold text-lg">Top Contributors</h3>
<button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-medium">Marcus Webb</p>
<p className="text-xs text-gray-500">Designer</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold">94%</p>
<p className="text-xs text-green-600">+12%</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-medium">Sarah Chen</p>
<p className="text-xs text-gray-500">Developer</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold">89%</p>
<p className="text-xs text-green-600">+8%</p>
</div>
</div>
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-medium">David Park</p>
<p className="text-xs text-gray-500">Manager</p>
</div>
<div className="text-right">
<p className="text-sm font-semibold">85%</p>
<p className="text-xs text-red-600">-2%</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-4 hover:shadow-md transition-shadow duration-200 animate-scale-3">
<h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
<svg className="w-4 h-4 text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10,9 9,9 8,9"></polyline></svg>
</div>
<div>
<p className="text-sm font-medium">Generate Report</p>
<p className="text-xs text-gray-500">Export analytics data</p>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
<svg className="w-4 h-4 text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Send Update</p>
<p className="text-xs text-gray-500">Notify team members</p>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
<svg className="w-4 h-4 text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect></svg>
</div>
<div>
<p className="text-sm font-medium">Schedule Review</p>
<p className="text-xs text-gray-500">Plan team meeting</p>
</div>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 bg-black/50 z-50 hidden md:hidden" id="mobileMenuOverlay">
<div className="absolute left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-md">
<div className="p-4">
<button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors mb-4" id="closeMobileMenu">
<svg className="w-4 h-4 text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
</button>

<nav className="space-y-2 text-sm font-medium">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg> Projects
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Performance
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg> My Earnings
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg> Settings
          </a>
</nav>
</div>
</div>
</div>
</div>


    </>
  );
}
