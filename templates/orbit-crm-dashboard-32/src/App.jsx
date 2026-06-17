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



        // Navigation
        const navItems = {
            'nav-opportunities': { view: 'view-opportunities', title: 'Top Opportunities', subtitle: 'Ranked by impact × access asymmetry × upside' },
            'nav-people': { view: 'view-people', title: 'People Network', subtitle: '47 contacts across 23 organizations' },
            'nav-outreach': { view: 'view-outreach', title: 'Draft Messages', subtitle: '6 messages pending your review' },
            'nav-followups': { view: 'view-followups', title: 'Follow-ups Due', subtitle: '3 conversations need attention' }
        };

        Object.keys(navItems).forEach(navId => {
            document.getElementById(navId).addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update nav styles
                Object.keys(navItems).forEach(id => {
                    const el = document.getElementById(id);
                    if (id === navId) {
                        el.className = 'flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-800/50 text-zinc-100 text-sm font-medium';
                    } else {
                        el.className = 'flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 text-sm transition-colors';
                    }
                });
                
                // Show correct view
                Object.values(navItems).forEach(item => {
                    document.getElementById(item.view).classList.add('hidden');
                });
                document.getElementById(navItems[navId].view).classList.remove('hidden');
                
                // Update title
                document.getElementById('page-title').textContent = navItems[navId].title;
                document.getElementById('page-subtitle').textContent = navItems[navId].subtitle;
            });
        });

        // Modal
        function openOpportunityModal(id) {
            document.getElementById('opportunity-modal').classList.remove('hidden');
            document.getElementById('opportunity-modal').classList.add('flex');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('opportunity-modal').classList.add('hidden');
            document.getElementById('opportunity-modal').classList.remove('flex');
            document.body.style.overflow = '';
        }

        // Close modal on background click
        document.getElementById('opportunity-modal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('opportunity-modal')) {
                closeModal();
            }
        });

        // Toast
        function closeToast() {
            document.getElementById('digest-toast').style.display = 'none';
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Mobile menu (simplified)
        document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
            // Toggle mobile menu implementation
            alert('Mobile menu - implement drawer navigation');
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
      

<aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900/50 border-r border-zinc-800/50 p-4 hidden lg:block">
<div className="flex items-center gap-2 mb-8">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">O</span>
</div>
<span className="font-semibold text-base tracking-tight">ORBIT</span>
<span className="text-zinc-500 text-xs ml-auto">MVP</span>
</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 text-sm transition-colors" href="#" id="nav-opportunities">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:radar" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34M4 6h.01M2.29 9.62a10 10 0 1 0 19.02-1.27"></path><path d="M16.24 7.76a6 6 0 1 0-8.01 8.91M12 18h.01m5.98-6.34a6 6 0 0 1-2.22 5.01"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59l5.66-5.66"></path></g></svg>
                Opportunities
                <span className="ml-auto bg-violet-500/20 text-violet-400 text-xs px-2 py-0.5 rounded-full">24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 text-sm transition-colors" href="#" id="nav-people">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:users" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                People
                <span className="ml-auto text-zinc-600 text-xs">47</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 text-sm transition-colors" href="#" id="nav-outreach">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Outreach
                <span className="ml-auto bg-amber-500/20 text-amber-400 text-xs px-2 py-0.5 rounded-full">6</span>
</a>
<a className="flex items-center gap-3 text-sm font-medium text-zinc-100 bg-zinc-800/50 rounded-lg pt-2 pr-3 pb-2 pl-3" href="#" id="nav-followups">Follow-up</a>
</nav>
<div className="absolute bottom-4 left-4 right-4">
<div className="bg-zinc-800/50 rounded-lg p-3 border border-zinc-700/50">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400">Weekly Progress</span>
<span className="text-xs text-zinc-500">18/30</span>
</div>
<div className="h-1.5 bg-zinc-700 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full" style={{width: '60%'}}></div>
</div>
<p className="text-xs text-zinc-500 mt-2">12 more opportunities this week</p>
</div>
<a className="flex items-center gap-3 px-3 py-2 mt-3 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/30 text-sm transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:settings" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                Settings
            </a>
</div>
</aside>

<header className="lg:hidden fixed top-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-xl border-b border-zinc-800/50 px-4 py-3 z-50">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-sm tracking-tighter">O</span>
</div>
<span className="font-semibold text-base tracking-tight">ORBIT</span>
</div>
<button className="p-2 hover:bg-zinc-800 rounded-lg" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">

<div className="border-b border-zinc-800/50 px-6 py-4 bg-zinc-900/30 backdrop-blur-xl sticky top-0 lg:top-0 z-40">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<div>
<h1 className="text-xl font-semibold tracking-tight" id="page-title">Follow-ups Due</h1>
<p className="text-sm text-zinc-500 mt-0.5" id="page-subtitle">3 conversations need attention</p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<svg aria-hidden="true" className="iconify absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 iconify--lucide" data-icon="lucide:search" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-9 pr-4 py-2 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 w-full sm:w-64" placeholder="Search..." type="text"/>
</div>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:refresh-cw" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg>
<span className="hidden sm:inline">Sync</span>
</button>
</div>
</div>
</div>

<div className="p-6">

<div className="space-y-4" id="view-opportunities">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 text-zinc-400 mb-1">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:target" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
<span className="text-xs">This Week</span>
</div>
<p className="text-2xl font-semibold tracking-tight">24</p>
<p className="text-xs text-emerald-400 mt-1">+8 from last week</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 text-zinc-400 mb-1">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs">High Priority</span>
</div>
<p className="text-2xl font-semibold tracking-tight">7</p>
<p className="text-xs text-zinc-500 mt-1">Score ≥ 4.0</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 text-zinc-400 mb-1">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:mail-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12l2 2l4-4"></path></g></svg>
<span className="text-xs">Replies</span>
</div>
<p className="text-2xl font-semibold tracking-tight">3</p>
<p className="text-xs text-violet-400 mt-1">23% response rate</p>
</div>
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4">
<div className="flex items-center gap-2 text-zinc-400 mb-1">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:timer" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 2h4m-2 12l3-3"></path><circle cx="12" cy="14" r="8"></circle></g></svg>
<span className="text-xs">Time Saved</span>
</div>
<p className="text-2xl font-semibold tracking-tight">12h</p>
<p className="text-xs text-zinc-500 mt-1">This week</p>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto pb-2">
<button className="px-3 py-1.5 bg-zinc-800 text-zinc-100 rounded-lg text-sm font-medium whitespace-nowrap">All</button>
<button className="px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg text-sm whitespace-nowrap transition-colors">AI Labs</button>
<button className="px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg text-sm whitespace-nowrap transition-colors">Research</button>
<button className="px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg text-sm whitespace-nowrap transition-colors">Grants</button>
<button className="px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg text-sm whitespace-nowrap transition-colors">Accelerators</button>
<button className="px-3 py-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-lg text-sm whitespace-nowrap transition-colors">Startups</button>
</div>

<div className="space-y-3">

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors group cursor-pointer" onclick="openOpportunityModal(1)">
<div className="flex flex-col lg:flex-row lg:items-start gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-emerald-400 font-semibold text-sm tracking-tighter">AS</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100 tracking-tight">Anthropic Safety Team</h3>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Implicit Hiring</span>
<span className="px-2 py-0.5 bg-violet-500/10 text-violet-400 text-xs rounded-full">AI Safety</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Recent GitHub activity suggests scaling interpretability research. 3 new repos created this week with open issues.</p>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                                San Francisco / Remote
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:github" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
                                                GitHub
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                                2 hours ago
                                            </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:flex-col lg:items-end">
<div className="text-right">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-emerald-400 tracking-tight">4.7</span>
<span className="text-xs text-zinc-500">/5</span>
</div>
<p className="text-xs text-zinc-500">Score</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" title="Snooze">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" title="Archive">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:archive" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Draft
                                    </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors group cursor-pointer">
<div className="flex flex-col lg:flex-row lg:items-start gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-blue-400 font-semibold text-sm tracking-tighter">DB</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100 tracking-tight">DeepMind Robotics</h3>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full">Speculative</span>
<span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 text-xs rounded-full">Robotics</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Blog post hints at new embodied AI initiative. Team expansion likely based on paper co-author patterns.</p>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                                London
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:file-text" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                                                Blog
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                                1 day ago
                                            </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:flex-col lg:items-end">
<div className="text-right">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-blue-400 tracking-tight">4.2</span>
<span className="text-xs text-zinc-500">/5</span>
</div>
<p className="text-xs text-zinc-500">Score</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:archive" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Draft
                                    </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors group cursor-pointer">
<div className="flex flex-col lg:flex-row lg:items-start gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-orange-400 font-semibold text-sm tracking-tighter">YC</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100 tracking-tight">YC W24 Batch - Stealth Biotech</h3>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Explicit</span>
<span className="px-2 py-0.5 bg-orange-500/10 text-orange-400 text-xs rounded-full">Biotech</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Founder LinkedIn shows they're hiring first ML engineer. Company building protein folding tools for drug discovery.</p>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                                San Francisco
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:briefcase" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
                                                YC Batch
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                                3 days ago
                                            </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:flex-col lg:items-end">
<div className="text-right">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-orange-400 tracking-tight">4.1</span>
<span className="text-xs text-zinc-500">/5</span>
</div>
<p className="text-xs text-zinc-500">Score</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:archive" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Draft
                                    </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors group cursor-pointer">
<div className="flex flex-col lg:flex-row lg:items-start gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-purple-400 font-semibold text-sm tracking-tighter">EF</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100 tracking-tight">Entrepreneur First - Climate Tech</h3>
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Fellowship</span>
<span className="px-2 py-0.5 bg-purple-500/10 text-purple-400 text-xs rounded-full">Climate</span>
</div>
<p className="text-sm text-zinc-400 mt-1">New climate-focused cohort launching. Application deadline in 3 weeks. Looking for technical co-founders.</p>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                                London / Singapore
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:graduation-cap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
                                                Accelerator
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:alert-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
<span className="text-amber-400">Deadline: 21 days</span>
</span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:flex-col lg:items-end">
<div className="text-right">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-purple-400 tracking-tight">3.9</span>
<span className="text-xs text-zinc-500">/5</span>
</div>
<p className="text-xs text-zinc-500">Score</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:archive" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Draft
                                    </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors group cursor-pointer">
<div className="flex flex-col lg:flex-row lg:items-start gap-4">
<div className="flex-1 min-w-0">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-cyan-400 font-semibold text-sm tracking-tighter">ML</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100 tracking-tight">MIT CSAIL - Robotics Lab</h3>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full">Grant Funded</span>
<span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">Research</span>
</div>
<p className="text-sm text-zinc-400 mt-1">New NSF grant awarded for human-robot collaboration. Lab hiring postdocs and research engineers.</p>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                                Cambridge, MA
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:building" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10h.01M12 14h.01M12 6h.01M16 10h.01M16 14h.01M16 6h.01M8 10h.01M8 14h.01M8 6h.01M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></g></svg>
                                                University
                                            </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="iconify w-3.5 h-3.5 iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                                                5 days ago
                                            </span>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 lg:flex-col lg:items-end">
<div className="text-right">
<div className="flex items-center gap-1">
<span className="text-2xl font-semibold text-cyan-400 tracking-tight">3.8</span>
<span className="text-xs text-zinc-500">/5</span>
</div>
<p className="text-xs text-zinc-500">Score</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:archive" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="5" rx="1" width="20" x="2" y="3"></rect><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8m-10 4h4"></path></g></svg>
</button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        Draft
                                    </button>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between pt-4">
<p className="text-sm text-zinc-500">Showing 1-5 of 24 opportunities</p>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors disabled:opacity-50" disabled="">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:chevron-left" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18l-6-6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-8 h-8 bg-violet-600 text-white rounded-lg text-sm font-medium">1</button>
<button className="w-8 h-8 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm">2</button>
<button className="w-8 h-8 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm">3</button>
<button className="w-8 h-8 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm">4</button>
<button className="w-8 h-8 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm">5</button>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden" id="view-people">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors">
<div className="flex items-start gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-emerald-400 font-medium text-base">CK</span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-100">Chris Olah</h3>
<p className="text-sm text-zinc-400">Research Lead @ Anthropic</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-xs rounded-full">Warm</span>
<span className="text-xs text-zinc-500">Last: 3 days ago</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800/50">
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
</a>
<button className="ml-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                Message
                            </button>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors">
<div className="flex items-start gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-600/30 rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-blue-400 font-medium text-base">SD</span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-100">Sarah Davis</h3>
<p className="text-sm text-zinc-400">Founding Engineer @ Stealth</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-zinc-500/10 text-zinc-400 text-xs rounded-full">Cold</span>
<span className="text-xs text-zinc-500">Never contacted</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800/50">
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<button className="ml-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                Message
                            </button>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/50 transition-colors">
<div className="flex items-start gap-3">
<div className="w-12 h-12 bg-gradient-to-br from-violet-500/30 to-violet-600/30 rounded-full flex items-center justify-center flex-shrink-0">
<span className="text-violet-400 font-medium text-base">JM</span>
</div>
<div className="flex-1 min-w-0">
<h3 className="font-medium text-zinc-100">James Miller</h3>
<p className="text-sm text-zinc-400">Prof. @ MIT CSAIL</p>
<div className="flex items-center gap-2 mt-2">
<span className="px-2 py-0.5 bg-violet-500/10 text-violet-400 text-xs rounded-full">Active</span>
<span className="text-xs text-zinc-500">Last: Today</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 mt-4 pt-4 border-t border-zinc-800/50">
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
<a className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</a>
<button className="ml-auto bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                Message
                            </button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-4" id="view-outreach">

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden">
<div className="p-5 border-b border-zinc-800/50">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-lg flex items-center justify-center">
<span className="text-emerald-400 font-semibold text-sm tracking-tighter">CK</span>
</div>
<div>
<h3 className="font-medium text-zinc-100">Chris Olah - Anthropic</h3>
<p className="text-sm text-zinc-500">Cold Email Draft</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">Pending Review</span>
</div>
</div>
</div>
<div className="p-5 bg-zinc-950/50">
<div className="space-y-3">
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wide">Subject</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500/50" type="text" value="Your interpretability work + a quick question"/>
</div>
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none" rows="5">Hi Chris,

I've been following your work on mechanistic interpretability, particularly the recent circuits paper. The activation patching approach resonated with some research I'm doing on representation learning.

I noticed Anthropic's interpretability team has been expanding. I'm curious—are there particular technical challenges you're prioritizing that might benefit from someone with a distributed systems background?

Would love to hear your thoughts if you have 10 minutes.

Best,
[Name]</textarea>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-800/50 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:info" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
<span>96 words • Personalized from GitHub activity</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                Regenerate
                            </button>
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                Snooze
                            </button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Approve &amp; Queue
                            </button>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl overflow-hidden">
<div className="p-5 border-b border-zinc-800/50">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
<span className="text-orange-400 font-semibold text-sm tracking-tighter">AK</span>
</div>
<div>
<h3 className="font-medium text-zinc-100">Alex Kim - YC Biotech</h3>
<p className="text-sm text-zinc-500">LinkedIn DM Draft</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-1 bg-amber-500/10 text-amber-400 text-xs rounded-full">Pending Review</span>
</div>
</div>
</div>
<div className="p-5 bg-zinc-950/50">
<div>
<label className="text-xs text-zinc-500 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-zinc-100 mt-1 focus:outline-none focus:ring-2 focus:ring-violet-500/50 resize-none" rows="4">Hi Alex — congrats on the YC batch! Saw you're building protein folding tools for drug discovery. 

I've worked on similar ML infra problems at scale and would love to learn more about your technical approach. Happy to share some lessons learned from production protein prediction pipelines.

Open to a quick chat?</textarea>
</div>
</div>
<div className="p-4 border-t border-zinc-800/50 flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:info" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
<span>58 words • Personalized from LinkedIn</span>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                Regenerate
                            </button>
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                Snooze
                            </button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Approve &amp; Queue
                            </button>
</div>
</div>
</div>
</div>

<div className="space-y-4" id="view-followups">

<div className="bg-zinc-900/50 border border-rose-500/20 rounded-xl p-5">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gradient-to-br from-rose-500/20 to-rose-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-rose-400 font-semibold text-sm tracking-tighter">MP</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100">Maria Peterson</h3>
<span className="text-sm text-zinc-500">@ DeepMind</span>
<span className="px-2 py-0.5 bg-rose-500/10 text-rose-400 text-xs rounded-full">Overdue: 2 days</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Initial email sent 9 days ago. No response yet.</p>
<div className="flex items-center gap-2 mt-3">
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm transition-colors">
                                    View Original
                                </button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                    Send Follow-up
                                </button>
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                    Mark as Lost
                                </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-amber-500/20 rounded-xl p-5">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-amber-400 font-semibold text-sm tracking-tighter">RN</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100">Robert Nguyen</h3>
<span className="text-sm text-zinc-500">@ Antler</span>
<span className="px-2 py-0.5 bg-amber-500/10 text-amber-400 text-xs rounded-full">Due: Tomorrow</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Initial DM sent 6 days ago. LinkedIn shows he viewed your profile.</p>
<div className="flex items-center gap-2 mt-3">
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm transition-colors">
                                    View Original
                                </button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                                    Send Follow-up
                                </button>
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors">
                                    Snooze 3 Days
                                </button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-5">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
<span className="text-zinc-400 font-semibold text-sm tracking-tighter">LW</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 flex-wrap">
<h3 className="font-medium text-zinc-100">Lisa Wang</h3>
<span className="text-sm text-zinc-500">@ Stanford HAI</span>
<span className="px-2 py-0.5 bg-zinc-500/10 text-zinc-400 text-xs rounded-full">Due: 3 days</span>
</div>
<p className="text-sm text-zinc-400 mt-1">Initial email sent 4 days ago. Waiting for 7-day follow-up window.</p>
<div className="flex items-center gap-2 mt-3">
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm transition-colors">
                                    View Original
                                </button>
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-3 py-1.5 rounded-lg text-sm transition-colors">
                                    Preview Follow-up
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden items-center justify-center p-4" id="opportunity-modal">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
<div className="p-6 border-b border-zinc-800 flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl flex items-center justify-center">
<span className="text-emerald-400 font-semibold tracking-tighter">AS</span>
</div>
<div>
<h2 className="text-lg font-semibold tracking-tight">Anthropic Safety Team</h2>
<p className="text-sm text-zinc-400">AI Safety Research • San Francisco / Remote</p>
</div>
</div>
<button className="p-2 hover:bg-zinc-800 rounded-lg text-zinc-400 hover:text-zinc-100 transition-colors" onclick="closeModal()">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="p-6 overflow-y-auto flex-1">

<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
<div className="bg-zinc-800/50 rounded-xl p-4 text-center">
<p className="text-2xl font-semibold text-emerald-400 tracking-tight">5</p>
<p className="text-xs text-zinc-500 mt-1">Impact</p>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 text-center">
<p className="text-2xl font-semibold text-blue-400 tracking-tight">4</p>
<p className="text-xs text-zinc-500 mt-1">Upside</p>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 text-center">
<p className="text-2xl font-semibold text-violet-400 tracking-tight">5</p>
<p className="text-xs text-zinc-500 mt-1">Access Asymmetry</p>
</div>
<div className="bg-zinc-800/50 rounded-xl p-4 text-center">
<p className="text-2xl font-semibold text-amber-400 tracking-tight">4</p>
<p className="text-xs text-zinc-500 mt-1">Timing</p>
</div>
</div>

<div className="space-y-4">
<div>
<h3 className="text-sm font-medium text-zinc-300 mb-2">Why They Might Need Someone Now</h3>
<p className="text-sm text-zinc-400 bg-zinc-800/30 rounded-lg p-3">GitHub activity shows 3 new interpretability repos created in the past 2 weeks. Issue count increasing faster than resolution rate. Team likely scaling research capacity.</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-300 mb-2">Visible Pain Points</h3>
<p className="text-sm text-zinc-400 bg-zinc-800/30 rounded-lg p-3">Open issues mention scaling challenges with activation patching on larger models. Comments suggest infrastructure bottlenecks. Need for distributed systems expertise apparent.</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-300 mb-2">Why Not Publicly Advertised</h3>
<p className="text-sm text-zinc-400 bg-zinc-800/30 rounded-lg p-3">Research direction appears exploratory. Team likely wants to hire opportunistically for specific skillsets rather than generic roles. Prefer referrals and direct outreach.</p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-300 mb-2">Hidden Leverage</h3>
<ul className="text-sm text-zinc-400 bg-zinc-800/30 rounded-lg p-3 space-y-1">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-4 h-4 text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Founder-led team with direct hiring authority
                            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-4 h-4 text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Recent funding announcement ($500M+)
                            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify w-4 h-4 text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Key researcher published paper you can reference
                            </li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-300 mb-2">Key People Identified</h3>
<div className="space-y-2">
<div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
<span className="text-emerald-400 text-xs font-medium">CO</span>
</div>
<div>
<p className="text-sm text-zinc-100">Chris Olah</p>
<p className="text-xs text-zinc-500">Research Lead</p>
</div>
</div>
<button className="text-xs text-violet-400 hover:text-violet-300">View Profile</button>
</div>
<div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
<span className="text-blue-400 text-xs font-medium">NE</span>
</div>
<div>
<p className="text-sm text-zinc-100">Nelson Elhage</p>
<p className="text-xs text-zinc-500">Research Scientist</p>
</div>
</div>
<button className="text-xs text-violet-400 hover:text-violet-300">View Profile</button>
</div>
</div>
</div>
</div>
</div>
<div className="p-4 border-t border-zinc-800 flex items-center justify-between bg-zinc-900/50">
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:thumbs-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.12L10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88M17 14V2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Bad Fit
                    </button>
<button className="px-3 py-1.5 hover:bg-zinc-800 text-zinc-400 rounded-lg text-sm transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:clock" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                        Snooze
                    </button>
</div>
<div className="flex items-center gap-2">
<button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Save to Pipeline
                    </button>
<button className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:pen-line" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13 21h8m.174-14.188a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Generate Outreach
                    </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-2xl max-w-sm z-50" id="digest-toast">
<div className="flex items-start gap-3">
<div className="w-10 h-10 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="iconify w-5 h-5 text-violet-400 iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="flex-1">
<h4 className="font-medium text-zinc-100 text-sm">Daily Digest Ready</h4>
<p className="text-xs text-zinc-400 mt-1">7 new opportunities • 3 follow-ups due • ~8 min to review</p>
<div className="flex items-center gap-2 mt-3">
<button className="bg-violet-600 hover:bg-violet-500 text-white px-3 py-1 rounded-lg text-xs font-medium transition-colors">
                        Review Now
                    </button>
<button className="text-xs text-zinc-500 hover:text-zinc-300" onclick="closeToast()">
                        Later
                    </button>
</div>
</div>
<button className="text-zinc-500 hover:text-zinc-300" onclick="closeToast()">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:x" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>


    </>
  );
}
