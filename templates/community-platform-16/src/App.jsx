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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Simple Tab/View Switcher
        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            
            // Show target view
            const target = document.getElementById('view-' + viewName);
            if (target) target.classList.remove('hidden');

            // Update Sidebar Active State
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-slate-100', 'text-slate-900');
                el.classList.add('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                
                const icon = el.querySelector('.nav-icon');
                if(icon) {
                    icon.classList.remove('text-slate-900');
                    icon.classList.add('text-slate-400');
                }
            });

            // Set active state if applicable
            let activeNav;
            if(viewName === 'guide') activeNav = document.getElementById('nav-guide');
            if(viewName === 'jobs' || viewName === 'job-detail') activeNav = document.getElementById('nav-jobs');

            if (activeNav) {
                activeNav.classList.remove('text-slate-600', 'hover:bg-slate-50', 'hover:text-slate-900');
                activeNav.classList.add('bg-slate-100', 'text-slate-900');
                const icon = activeNav.querySelector('.nav-icon');
                if(icon) {
                    icon.classList.remove('text-slate-400');
                    icon.classList.add('text-slate-900');
                }
            }
            
            // Re-init icons just in case dynamic content needs it (mostly for new DOM elements, but safe here)
            lucide.createIcons();
            
            // Scroll top
            window.scrollTo(0,0);
        }
    
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
      

<aside className="w-72 bg-white border-r border-slate-200 flex-col hidden lg:flex h-full flex-shrink-0 z-30">
<div className="h-20 flex items-center px-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-semibold shadow-sm">
<div className="bg-yellow-400 h-3 w-3 rounded-full"></div>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">UAGermany</span>
</div>
</div>
<div className="flex-1 overflow-y-auto no-scrollbar py-4 px-4 space-y-8">
<div>
<h3 className="px-3 text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Community</h3>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group text-left" onclick="switchView('guide')">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="home"></i>
                        Home
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group text-left">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" data-lucide="bookmark"></i>
                        Saved
                    </button>
</nav>
</div>
<div>
<h3 className="px-3 text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider">Resources</h3>
<nav className="space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-900 bg-slate-100 rounded-lg transition-colors group text-left nav-item" id="nav-guide" onclick="switchView('guide')">
<i className="w-5 h-5 text-slate-900 nav-icon" data-lucide="book-open"></i>
                        Guides &amp; Wiki
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors group text-left nav-item" id="nav-jobs" onclick="switchView('jobs')">
<i className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors nav-icon" data-lucide="briefcase"></i>
                        Job Board
                    </button>
</nav>
</div>
</div>
<div className="p-4 border-t border-slate-200">
<a className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<img alt="User" className="h-10 w-10 rounded-full border border-slate-200 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Olena Petrenko</p>
<p className="text-sm text-slate-500 truncate">Berlin, DE</p>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="settings"></i>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative bg-white">

<header className="h-20 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-20 flex-shrink-0">
<div className="flex-1 max-w-lg relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<i className="h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" data-lucide="search"></i>
</div>
<input className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white transition-all text-base" placeholder="Search guides, jobs..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
<span className="text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 text-xs">⌘K</span>
</div>
</div>
<div className="flex items-center gap-6 ml-6">
<a className="hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-sm hover:shadow hover:opacity-90 transition-all" href="#">
<span className="text-sm font-medium">Donate</span>
</a>
<div className="flex items-center gap-4 border-l border-slate-200 pl-6">
<button className="relative text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-amber-400"></span>
</button>
<button className="text-slate-400 hover:text-slate-600 transition-colors">
<i className="w-6 h-6" data-lucide="bell"></i>
</button>
<button className="lg:hidden text-slate-400 hover:text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<div className="view-section flex-1 overflow-y-auto bg-white" id="view-guide">
<div className="border-b border-slate-200 bg-slate-50/50">
<div className="max-w-5xl mx-auto px-6 py-10 lg:px-8">
<nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
<a className="hover:text-slate-900 transition-colors" href="#">Resources</a>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<a className="hover:text-slate-900 transition-colors" href="#">Bureaucracy</a>
<i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
<span className="text-slate-900 font-medium">Registration</span>
</nav>
<h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                        How to complete "Anmeldung" in Berlin: A Step-by-Step Guide
                    </h1>
<div className="flex flex-wrap items-center gap-6 text-sm">
<div className="flex items-center gap-3">
<img alt="Author" className="w-10 h-10 rounded-full border border-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-slate-900 font-medium">Marina Koval</p>
<p className="text-slate-500">Legal Advisor</p>
</div>
</div>
<div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
<div className="flex items-center gap-2 text-slate-500">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Updated Oct 24, 2023</span>
</div>
<div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-100 text-green-700 font-medium text-xs border border-green-200">
<i className="w-3.5 h-3.5" data-lucide="check-circle-2"></i>
                            Verified Content
                        </div>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-12 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
<article className="lg:col-span-8 space-y-8">
<p className="text-xl text-slate-600 leading-relaxed">
                        Completing your registration (<span className="italic text-slate-900">Anmeldung</span>) is the most critical first step when moving to Germany. This guide simplifies the process.
                    </p>
<div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 flex gap-4">
<i className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" data-lucide="info"></i>
<div>
<h4 className="text-indigo-900 font-medium mb-1">Important Requirement</h4>
<p className="text-indigo-700 text-base">You must register within <strong>14 days</strong> of moving into your new address.</p>
</div>
</div>
<hr className="border-slate-100"/>
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4 flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-600 text-sm font-semibold">1</span>
                            Required Documents
                        </h2>
<ul className="space-y-4">
<li className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-green-600">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<span className="block text-slate-900 font-medium">Passport or ID Card</span>
<span className="text-slate-500 text-sm">Valid biometric passport or Ukrainian ID card.</span>
</div>
</li>
<li className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-green-600">
<i className="w-3.5 h-3.5" data-lucide="check"></i>
</div>
<div>
<span className="block text-slate-900 font-medium">Wohnungsgeberbestätigung</span>
<span className="text-slate-500 text-sm">Landlord confirmation form.</span>
</div>
</li>
</ul>
</div>
</article>
<aside className="lg:col-span-4 space-y-8">
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm sticky top-24">
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">On this page</h3>
<nav className="space-y-3 relative border-l border-slate-200 ml-1">
<a className="block pl-4 -ml-px border-l-2 border-indigo-600 text-indigo-600 text-sm font-medium" href="#">Required Documents</a>
<a className="block pl-4 -ml-px border-l-2 border-transparent hover:border-slate-300 text-slate-500 hover:text-slate-900 text-sm transition-colors" href="#">Booking Appointment</a>
</nav>
<div className="mt-8 pt-6 border-t border-slate-100">
<h3 className="text-sm font-semibold text-slate-900 mb-3">Resources</h3>
<a className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors group" href="#">
<div className="bg-white p-1.5 rounded border border-slate-200 shadow-sm text-red-500 group-hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="file-text"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-900 truncate">Formular.pdf</p>
<p className="text-xs text-slate-500">Download PDF</p>
</div>
</a>
</div>
</div>
</aside>
</div>
<footer className="bg-slate-50 border-t border-slate-200 py-12 mt-12">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-slate-500 text-sm">© 2023 UAGermany Community.</p>
</div>
</footer>
</div>

<div className="view-section hidden flex-1 overflow-y-auto bg-white" id="view-jobs">
<div className="border-b border-slate-200 bg-white sticky top-0 z-10">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h1 className="text-2xl font-semibold text-slate-900 tracking-tight">Job Board</h1>
<p className="text-slate-500 text-sm mt-1">Discover opportunities with verified visa sponsorship or German language support.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-slate-300 transition-colors text-sm font-medium">
<i className="w-4 h-4" data-lucide="filter"></i>
                            Filters
                        </button>
<button className="flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm">
<i className="w-4 h-4" data-lucide="plus"></i>
                            Post a Job
                        </button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

<div className="lg:col-span-1 space-y-8">
<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Job Type</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Full-time</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Part-time</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Internship</span>
</label>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Location</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Berlin</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Munich</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Remote</span>
</label>
</div>
</div>
<div>
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Category</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Engineering</span>
</label>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox group">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded bg-white flex items-center justify-center transition-all group-hover:border-slate-400">
<i className="w-3 h-3 text-white hidden stroke-[3]" data-lucide="check"></i>
</div>
<span className="text-sm text-slate-700">Design</span>
</label>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-4">

<div className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all" onclick="switchView('job-detail')">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center text-white font-bold flex-shrink-0">
<span className="text-lg">Ac</span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Product Designer</h3>
<p className="text-slate-500 font-medium">Acme Corp • Berlin, Mitte</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Full-time</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">English Speaking</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">€65k - €85k</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-xs text-slate-400">2h ago</span>
<span className="hidden group-hover:inline-flex items-center gap-1 text-sm font-medium text-indigo-600">
                                    View Details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</span>
</div>
</div>
</div>

<div className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold flex-shrink-0">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Senior Frontend Engineer</h3>
<p className="text-slate-500 font-medium">CloudScale • Remote (Germany)</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">Full-time</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">Visa Support</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-xs text-slate-400">1d ago</span>
</div>
</div>
</div>

<div className="group p-5 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:shadow-sm cursor-pointer transition-all">
<div className="flex items-start justify-between">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold flex-shrink-0">
<span className="text-lg">Z</span>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">Customer Success Manager</h3>
<p className="text-slate-500 font-medium">Zalando • Berlin</p>
<div className="flex flex-wrap gap-2 mt-3">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700">On-site</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">German Required</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<span className="text-xs text-slate-400">3d ago</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden flex-1 overflow-y-auto bg-white" id="view-job-detail">

<div className="border-b border-slate-200 px-8 py-4 bg-slate-50/50">
<button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" onclick="switchView('jobs')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                    Back to Job Board
                </button>
</div>
<div className="max-w-5xl mx-auto px-6 py-10 lg:px-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-10 border-b border-slate-200">
<div className="flex items-center gap-5">
<div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center text-white font-bold text-2xl shadow-sm">
                            Ac
                        </div>
<div>
<h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">Product Designer</h1>
<div className="flex items-center gap-2 text-slate-500">
<span className="font-medium text-slate-900">Acme Corp</span>
<span>•</span>
<span>Berlin, Mitte</span>
<span>•</span>
<span className="text-green-600 bg-green-50 px-2 py-0.5 rounded text-xs font-medium">Active hiring</span>
</div>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors font-medium">
<i className="w-4 h-4" data-lucide="share"></i>
                            Share
                        </button>
<button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium shadow-sm hover:shadow">
                            Apply Now
                            <i className="w-4 h-4" data-lucide="external-link"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-8">
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">About the role</h3>
<p className="text-slate-600 leading-relaxed mb-4">
                                We are looking for a Product Designer to join our core team in Berlin. You will work closely with engineers and product managers to define and ship features that our customers love. We value craftsmanship, attention to detail, and a user-centric approach.
                            </p>
<p className="text-slate-600 leading-relaxed">
                                As a key member of the design team, you will have ownership over significant parts of the product and help shape our design system.
                            </p>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">What you'll do</h3>
<ul className="space-y-3 text-slate-600">
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
<span>Design simple, elegant, and functional interfaces for complex workflows.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
<span>Collaborate with engineering to ensure high-quality implementation.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
<span>Conduct user research and usability testing to validate design decisions.</span>
</li>
<li className="flex items-start gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0"></div>
<span>Contribute to and maintain our design system.</span>
</li>
</ul>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-4">Requirements</h3>
<ul className="space-y-3 text-slate-600">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>3+ years of experience in product design for web applications.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Strong portfolio showcasing problem-solving skills and visual design.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Proficiency in Figma and modern prototyping tools.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<span>Fluent English (German is a plus but not required).</span>
</li>
</ul>
</div>
</div>

<aside className="lg:col-span-4 space-y-6">
<div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Job Details</h4>
<div className="space-y-4">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 mt-0.5" data-lucide="map-pin"></i>
<div>
<p className="text-sm font-medium text-slate-900">Location</p>
<p className="text-sm text-slate-500">Berlin, Germany (Hybrid)</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 mt-0.5" data-lucide="banknote"></i>
<div>
<p className="text-sm font-medium text-slate-900">Salary Range</p>
<p className="text-sm text-slate-500">€65,000 - €85,000 / year</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 mt-0.5" data-lucide="briefcase"></i>
<div>
<p className="text-sm font-medium text-slate-900">Experience</p>
<p className="text-sm text-slate-500">Mid-Senior Level</p>
</div>
</div>
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-400 mt-0.5" data-lucide="globe"></i>
<div>
<p className="text-sm font-medium text-slate-900">Visa Sponsorship</p>
<p className="text-sm text-slate-500">Available for eligible candidates</p>
</div>
</div>
</div>
</div>
<div className="border border-slate-200 rounded-xl p-6">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">About Acme Corp</h4>
<p className="text-sm text-slate-600 mb-4">
                                Acme Corp is building the future of digital collaboration. We are a team of 50+ diverse individuals passionate about software.
                            </p>
<a className="text-indigo-600 text-sm font-medium hover:underline flex items-center gap-1" href="#">
                                Visit Website <i className="w-3 h-3" data-lucide="external-link"></i>
</a>
</div>
</aside>
</div>
</div>
<footer className="bg-slate-50 border-t border-slate-200 py-12 mt-12">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-slate-500 text-sm">© 2023 UAGermany Community.</p>
</div>
</footer>
</div>
</main>


    </>
  );
}
