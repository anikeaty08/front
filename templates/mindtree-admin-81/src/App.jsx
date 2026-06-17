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



        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        
        // PIN Lock functionality
        const pinInputs = document.querySelectorAll('[data-pin-index]');
        const pinModal = document.getElementById('pinModal');
        const mainPanel = document.getElementById('mainPanel');
        const unlockBtn = document.getElementById('unlockBtn');
        const pinError = document.getElementById('pinError');
        const logoutBtn = document.getElementById('logoutBtn');
        const correctPIN = '123456';
        
        // Auto-focus and navigation between PIN inputs
        pinInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < pinInputs.length - 1) {
                    pinInputs[index + 1].focus();
                }
            });
            
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                    pinInputs[index - 1].focus();
                }
            });
        });
        
        // Unlock panel
        unlockBtn.addEventListener('click', () => {
            const enteredPIN = Array.from(pinInputs).map(input => input.value).join('');
            
            if (enteredPIN === correctPIN) {
                pinModal.classList.add('hidden');
                mainPanel.classList.remove('hidden');
                localStorage.setItem('panel_unlocked', 'true');
            } else {
                pinError.classList.remove('hidden');
                const container = document.getElementById('pinContainer');
                container.classList.add('animate-shake');
                setTimeout(() => {
                    container.classList.remove('animate-shake');
                }, 500);
                pinInputs.forEach(input => input.value = '');
                pinInputs[0].focus();
            }
        });
        
        // Check for saved session
        if (localStorage.getItem('panel_unlocked') === 'true') {
            pinModal.classList.add('hidden');
            mainPanel.classList.remove('hidden');
        }
        
        // Logout
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('panel_unlocked');
            pinModal.classList.remove('hidden');
            mainPanel.classList.add('hidden');
            pinInputs.forEach(input => input.value = '');
            pinError.classList.add('hidden');
        });
        
        // Mobile menu
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMobileMenu = document.getElementById('closeMobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        
        closeMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
        
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                mobileMenu.classList.add('hidden');
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
      

<div className="fixed flex z-50 bg-zinc-950/95 top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center" id="pinModal">
<div className="w-full max-w-sm mx-4">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 mb-4">
<svg className="lucide lucide-lock w-5 h-5 text-zinc-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h1 className="text-xl font-semibold tracking-tight text-white mb-2">MindTree Panel</h1>
<p className="text-sm text-zinc-500">Enter your 6-digit PIN to continue</p>
</div>
<div className="flex justify-center gap-2 mb-6" id="pinContainer">
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="0" maxlength="1" type="password"/>
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="1" maxlength="1" type="password"/>
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="2" maxlength="1" type="password"/>
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="3" maxlength="1" type="password"/>
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="4" maxlength="1" type="password"/>
<input className="w-11 h-12 text-center text-lg font-medium bg-zinc-900 border border-zinc-800 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" data-pin-index="5" maxlength="1" type="password"/>
</div>
<p className="text-center text-red-400 text-sm mb-4 hidden" id="pinError">Incorrect PIN. Please try again.</p>
<button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors" id="unlockBtn">
                Unlock Panel
            </button>
</div>
</div>

<div className="hidden" id="mainPanel">

<aside className="fixed left-0 top-0 bottom-0 w-64 bg-zinc-900/50 border-r border-zinc-800 hidden lg:block">
<div className="p-5 border-b border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">M</span>
</div>
<span className="text-base font-semibold tracking-tight">MindTree</span>
</div>
</div>
<nav className="p-3">
<div className="mb-2">
<p className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Overview</p>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-zinc-800/80 rounded-lg mb-1" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                    Dashboard
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<svg className="lucide lucide-folder-kanban w-4 h-4" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
                    Projects
                </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                    Media
                </a>
<div className="mt-6 mb-2">
<p className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Communication</p>
</div>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                        Messages
                    </div>
<span className="px-2 py-0.5 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">3</span>
</a>
<div className="mt-6 mb-2">
<p className="px-3 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">Insights</p>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                    Analytics
                </a>
</nav>
<div className="absolute bottom-0 left-0 right-0 p-3 border-t border-zinc-800">
<button className="flex items-center gap-3 w-full px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-zinc-800/50 rounded-lg transition-colors" id="logoutBtn">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
                    Lock Panel
                </button>
</div>
</aside>

<header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-zinc-900/80 backdrop-blur-lg border-b border-zinc-800 z-40 flex items-center justify-between px-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">M</span>
</div>
<span className="text-base font-semibold tracking-tight">MindTree</span>
</div>
<button className="p-2 text-zinc-400 hover:text-white" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</header>

<div className="lg:hidden fixed inset-0 bg-zinc-950/90 backdrop-blur-sm z-50 hidden" id="mobileMenu">
<div className="w-72 h-full bg-zinc-900 border-r border-zinc-800">
<div className="p-5 border-b border-zinc-800 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<span className="text-white text-sm font-semibold tracking-tighter">M</span>
</div>
<span className="text-base font-semibold tracking-tight">MindTree</span>
</div>
<button className="p-2 text-zinc-400 hover:text-white" id="closeMobileMenu">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="p-3">
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-white bg-zinc-800/80 rounded-lg mb-1" href="#">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                        Dashboard
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<svg className="lucide lucide-folder-kanban w-4 h-4" data-lucide="folder-kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M8 10v4"></path><path d="M12 10v2"></path><path d="M16 10v6"></path></svg>
                        Projects
                    </a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                        Media
                    </a>
<a className="flex items-center justify-between px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors mb-1" href="#">
<div className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            Messages
                        </div>
<span className="px-2 py-0.5 text-xs font-medium bg-indigo-500/20 text-indigo-400 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors" href="#">
<svg className="lucide lucide-bar-chart-3 w-4 h-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        Analytics
                    </a>
</nav>
</div>
</div>

<main className="lg:ml-64 pt-14 lg:pt-0 min-h-screen">

<div className="sticky top-0 lg:top-0 z-30 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800">
<div className="flex items-center justify-between h-14 px-4 lg:px-6">
<div>
<h1 className="text-base font-semibold tracking-tight">Dashboard</h1>
</div>
<div className="flex items-center gap-3">
<button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors relative">
<svg className="lucide lucide-bell w-4 h-4" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
<span className="text-xs font-semibold text-white">AD</span>
</div>
</div>
</div>
</div>

<div className="p-4 lg:p-6">

<div className="mb-6">
<h2 className="text-2xl font-semibold tracking-tight mb-1">Welcome back</h2>
<p className="text-sm text-zinc-500">Here's what's happening with your portfolio today.</p>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
<svg className="lucide lucide-folder w-4 h-4 text-indigo-400" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                +2
                            </span>
</div>
<p className="text-2xl font-semibold tracking-tight mb-0.5">12</p>
<p className="text-xs text-zinc-500">Total Projects</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<svg className="lucide lucide-eye w-4 h-4 text-emerald-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                +8
                            </span>
</div>
<p className="text-2xl font-semibold tracking-tight mb-0.5">9</p>
<p className="text-xs text-zinc-500">Published</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
<svg className="lucide lucide-mail w-4 h-4 text-amber-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="px-1.5 py-0.5 text-xs font-medium bg-amber-500/20 text-amber-400 rounded">New</span>
</div>
<p className="text-2xl font-semibold tracking-tight mb-0.5">3</p>
<p className="text-xs text-zinc-500">Unread Messages</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
<svg className="lucide lucide-users w-4 h-4 text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                                +12%
                            </span>
</div>
<p className="text-2xl font-semibold tracking-tight mb-0.5">1,247</p>
<p className="text-xs text-zinc-500">Monthly Visitors</p>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl">
<div className="flex items-center justify-between p-4 border-b border-zinc-800">
<h3 className="text-sm font-semibold">Recent Projects</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">View All</button>
</div>
<div className="divide-y divide-zinc-800">
<div className="flex items-center gap-4 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-bar-chart-2 w-5 h-5 text-indigo-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<p className="text-sm font-medium truncate">Sales Analytics Dashboard</p>
<span className="px-1.5 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded flex-shrink-0">Live</span>
</div>
<p className="text-xs text-zinc-500">Analytics • Updated 2 hours ago</p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-globe w-5 h-5 text-emerald-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<p className="text-sm font-medium truncate">E-commerce Platform</p>
<span className="px-1.5 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded flex-shrink-0">Live</span>
</div>
<p className="text-xs text-zinc-500">Web Development • Updated 1 day ago</p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-brain w-5 h-5 text-amber-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<p className="text-sm font-medium truncate">ML Prediction Model</p>
<span className="px-1.5 py-0.5 text-xs bg-zinc-700 text-zinc-400 rounded flex-shrink-0">Draft</span>
</div>
<p className="text-xs text-zinc-500">Data Science • Updated 3 days ago</p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
<div className="flex items-center gap-4 p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-smartphone w-5 h-5 text-pink-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<p className="text-sm font-medium truncate">Mobile App Redesign</p>
<span className="px-1.5 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded flex-shrink-0">Live</span>
</div>
<p className="text-xs text-zinc-500">Other • Updated 5 days ago</p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-zinc-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800 rounded-xl">
<div className="flex items-center justify-between p-4 border-b border-zinc-800">
<h3 className="text-sm font-semibold">Recent Messages</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors">View All</button>
</div>
<div className="divide-y divide-zinc-800">
<div className="p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center flex-shrink-0">
<span className="text-xs font-semibold text-white">JD</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">John Doe</p>
<p className="text-xs text-zinc-500">2 hours ago</p>
</div>
<span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
</div>
<p className="text-xs text-zinc-400 line-clamp-2">I'm interested in collaborating on a data visualization project. Would love to discuss...</p>
</div>
<div className="p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center flex-shrink-0">
<span className="text-xs font-semibold text-white">SM</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Sarah Miller</p>
<p className="text-xs text-zinc-500">5 hours ago</p>
</div>
<span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
</div>
<p className="text-xs text-zinc-400 line-clamp-2">Great portfolio! I have a question about your analytics dashboard project...</p>
</div>
<div className="p-4 hover:bg-zinc-800/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
<span className="text-xs font-semibold text-white">AK</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Alex Kim</p>
<p className="text-xs text-zinc-500">1 day ago</p>
</div>
<span className="w-2 h-2 rounded-full bg-indigo-500 flex-shrink-0"></span>
</div>
<p className="text-xs text-zinc-400 line-clamp-2">Hi! I'm from TechCorp and we're looking for developers with your skill set...</p>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4">
<h3 className="text-sm font-semibold mb-4">Quick Actions</h3>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
<button className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors text-left">
<div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center">
<svg className="lucide lucide-plus w-4 h-4 text-indigo-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div>
<p className="text-sm font-medium">New Project</p>
<p className="text-xs text-zinc-500">Create a project</p>
</div>
</button>
<button className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors text-left">
<div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<svg className="lucide lucide-upload w-4 h-4 text-emerald-400" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Upload Media</p>
<p className="text-xs text-zinc-500">Add images</p>
</div>
</button>
<button className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors text-left">
<div className="w-9 h-9 rounded-lg bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-external-link w-4 h-4 text-purple-400" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
<div>
<p className="text-sm font-medium">View Portfolio</p>
<p className="text-xs text-zinc-500">Open public site</p>
</div>
</button>
<button className="flex items-center gap-3 p-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 rounded-lg transition-colors text-left">
<div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center">
<svg className="lucide lucide-settings w-4 h-4 text-amber-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<div>
<p className="text-sm font-medium">Settings</p>
<p className="text-xs text-zinc-500">Configure panel</p>
</div>
</button>
</div>
</div>

<div className="mt-6 flex items-center justify-between p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-emerald-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-emerald-400">Real-time Sync Active</p>
<p className="text-xs text-zinc-500">Last synced: Just now</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-emerald-400 font-medium">Connected</span>
</div>
</div>
</div>
</main>
</div>

<style>
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
        }
        .animate-shake {
            animation: shake 0.3s ease-in-out;
        }
        .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    </style>

    </>
  );
}
