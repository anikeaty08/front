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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#4f46e5',
primaryHover: '#4338ca',
secondary: '#2563eb',
dark: '#0f172a',
surface: '#ffffff',
border: '#e2e8f0',
subtle: '#f8fafc',
}
}
}
}



        // Simple View Router
        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => {
                view.classList.add('hidden');
            });

            // Show target view
            const target = document.getElementById(`view-${viewId}`);
            if (target) {
                target.classList.remove('hidden');
            }

            // Update Header Breadcrumb
            const breadcrumb = document.getElementById('header-breadcrumb');
            const titles = {
                'dashboard': 'Dashboard',
                'research': 'Research & Trends',
                'calendar': 'Content Calendar',
                'create-entry': 'Create New',
                'create-editor': 'Post Editor'
            };
            breadcrumb.textContent = titles[viewId] || 'Dashboard';

            // Close mobile menu if open
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-nav-overlay');
            if (window.innerWidth < 768) {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-nav-overlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('hidden');
            }
        }

        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        // Initialize
        switchView('dashboard');
    
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
      

<div className="fixed inset-0 bg-slate-900/50 z-40 hidden backdrop-blur-sm transition-opacity" id="mobile-nav-overlay" onclick="toggleSidebar()"></div>

<aside className="w-64 bg-white border-r border-slate-200 flex-col justify-between h-full fixed md:static transform -translate-x-full md:translate-x-0 transition-transform duration-300 z-50 flex dark:bg-slate-900 dark:border-slate-800" id="sidebar">

<div className="p-4 space-y-6">

<div className="flex items-center gap-2 px-2 mt-1">
<div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
<span className="iconify text-white" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">growthIn</h1>
</div>

<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-[0_1px_2px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.1)] transition-all active:scale-[0.98] rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 font-medium text-sm" onclick="switchView('create-entry')">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
                Create Post
            </button>

<nav className="space-y-1">
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white bg-slate-50 text-indigo-600 dark:bg-slate-800/50 dark:text-indigo-400" href="#" onclick="switchView('dashboard')">
<span className="iconify group-hover:text-indigo-600 transition-colors" data-icon="lucide:layout-grid" data-width="18"></span>
                    Dashboard
                </a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider dark:text-slate-500">Research</p>
</div>
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#" onclick="switchView('research')">
<span className="iconify group-hover:text-indigo-600 transition-colors" data-icon="lucide:flame" data-width="18"></span>
                    Trending Posts
                </a>
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">
<span className="iconify group-hover:text-indigo-600 transition-colors" data-icon="lucide:users" data-width="18"></span>
                    Influencers
                </a>
<a className="nav-item group flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#" onclick="switchView('calendar')">
<span className="iconify group-hover:text-indigo-600 transition-colors" data-icon="lucide:calendar" data-width="18"></span>
                    My Posts
                </a>
<a className="nav-item group flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 rounded-md hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="iconify group-hover:text-indigo-600 transition-colors" data-icon="lucide:bar-chart-2" data-width="18"></span>
                        Analyze
                    </div>
</a>
<div className="pt-4 pb-2">
<p className="px-3 text-xs font-medium text-slate-400 uppercase tracking-wider dark:text-slate-500">Tools</p>
</div>
<a className="nav-item group flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 rounded-md opacity-70 cursor-not-allowed" href="#">
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:message-circle" data-width="18"></span>
                        Engage
                    </div>
<span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 font-medium dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">SOON</span>
</a>
<a className="nav-item group flex items-center justify-between px-3 py-2 text-sm font-medium text-slate-600 rounded-md opacity-70 cursor-not-allowed" href="#">
<div className="flex items-center gap-3">
<span className="iconify" data-icon="lucide:mic" data-width="18"></span>
                        Top Voice
                    </div>
<span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded border border-slate-200 font-medium dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400">SOON</span>
</a>
</nav>
</div>

<div className="p-4 border-t border-slate-100 space-y-4 dark:border-slate-800">

<div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-3 shadow-sm dark:from-slate-800 dark:to-slate-800 dark:border-slate-700">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-indigo-700 dark:text-indigo-400">Early Adopter</span>
<span className="text-xs text-slate-500 dark:text-slate-400">4 days left</span>
</div>
<div className="w-full bg-indigo-100 rounded-full h-1.5 mb-3 dark:bg-slate-700">
<div className="bg-indigo-600 h-1.5 rounded-full" style={{width: '60%'}}></div>
</div>
<button className="w-full text-xs font-medium bg-white border border-slate-200 text-slate-700 py-1.5 rounded hover:bg-slate-50 hover:border-slate-300 transition-colors dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600">Upgrade Plan</button>
</div>

<button className="flex items-center gap-3 w-full p-2 hover:bg-slate-50 rounded-lg transition-colors dark:hover:bg-slate-800">
<img alt="User" className="w-8 h-8 rounded-full border border-slate-200 dark:border-slate-700" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="flex flex-col items-start">
<span className="text-sm font-medium text-slate-700 dark:text-slate-200">Alex Creator</span>
<span className="text-xs text-slate-500 dark:text-slate-400">Settings</span>
</div>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md flex items-center justify-between px-6 sticky top-0 z-30 dark:bg-slate-900/80 dark:border-slate-800">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-500 hover:text-slate-700" onclick="toggleSidebar()">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
<div className="hidden md:flex items-center text-sm text-slate-500 dark:text-slate-400">
<span className="iconify mr-2" data-icon="lucide:home" data-width="14"></span>
<span className="mx-2 text-slate-300 dark:text-slate-700">/</span>
<span className="font-medium text-slate-800 dark:text-slate-200" id="header-breadcrumb">Dashboard</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-500 hover:text-slate-800 transition-colors dark:text-slate-400 dark:hover:text-slate-200" onclick="toggleTheme()">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</button>
<div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
<button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 dark:text-slate-400">
<span className="iconify" data-icon="lucide:bell" data-width="18"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-50 p-6 dark:bg-slate-950">
<div className="max-w-6xl mx-auto pb-20">

<div className="view-section animate-fade-in" id="view-dashboard">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white mb-1">Good morning, Alex.</h2>
<p className="text-slate-500 dark:text-slate-400">Ready to grow your audience today?</p>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-10">
<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden dark:bg-slate-900 dark:border-slate-800" onclick="switchView('create-entry')">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-indigo-600" data-icon="lucide:pen-tool" data-width="80"></span>
</div>
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 dark:bg-indigo-900/30">
<span className="iconify text-indigo-600" data-icon="lucide:plus" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1 dark:text-white">Create a new post</h3>
<p className="text-slate-500 text-sm mb-4 dark:text-slate-400">Write from scratch, use templates, or generate with AI.</p>
<span className="text-indigo-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Start creation <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></span>
</div>
<div className="group bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all cursor-pointer relative overflow-hidden dark:bg-slate-900 dark:border-slate-800">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-blue-500" data-icon="lucide:lightbulb" data-width="80"></span>
</div>
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 dark:bg-blue-900/30">
<span className="iconify text-blue-600" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-1 dark:text-white">Start with an idea</h3>
<p className="text-slate-500 text-sm mb-4 dark:text-slate-400">Get personalized content suggestions based on trends.</p>
<span className="text-blue-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore ideas <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span></span>
</div>
</div>

<div className="mb-4 flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 dark:text-white">Your Personalized Content Ideas</h3>
<div className="flex gap-2">
<button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900">All</button>
<button className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">SaaS</button>
<button className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">AI</button>
<button className="px-3 py-1 text-xs font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">Engineering</button>
</div>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 -mx-6 px-6 scrollbar-hide">

<div className="min-w-[280px] bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-200 transition-colors flex flex-col justify-between h-48 dark:bg-slate-900 dark:border-slate-800">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="bg-purple-100 text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide dark:bg-purple-900/30 dark:text-purple-300">Trending</span>
</div>
<h4 className="font-medium text-slate-900 leading-snug mb-2 dark:text-slate-200">Why "Founder Mode" is misunderstood in 2024</h4>
<p className="text-xs text-slate-500 line-clamp-3 dark:text-slate-400">Contrast the YC definition with practical application for bootstrapped SaaS founders...</p>
</div>
<button className="text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded py-1.5 w-full hover:bg-slate-100 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700" onclick="switchView('create-editor')">Draft this</button>
</div>

<div className="min-w-[280px] bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-200 transition-colors flex flex-col justify-between h-48 dark:bg-slate-900 dark:border-slate-800">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide dark:bg-blue-900/30 dark:text-blue-300">Educational</span>
</div>
<h4 className="font-medium text-slate-900 leading-snug mb-2 dark:text-slate-200">5 VS Code extensions that save me 2 hours/week</h4>
<p className="text-xs text-slate-500 line-clamp-3 dark:text-slate-400">Listicle format focusing on productivity tools for frontend devs. High save potential.</p>
</div>
<button className="text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded py-1.5 w-full hover:bg-slate-100 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700" onclick="switchView('create-editor')">Draft this</button>
</div>

<div className="min-w-[280px] bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-200 transition-colors flex flex-col justify-between h-48 dark:bg-slate-900 dark:border-slate-800">
<div>
<div className="flex items-center gap-2 mb-3">
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide dark:bg-green-900/30 dark:text-green-300">Personal</span>
</div>
<h4 className="font-medium text-slate-900 leading-snug mb-2 dark:text-slate-200">My biggest failure building an MVP</h4>
<p className="text-xs text-slate-500 line-clamp-3 dark:text-slate-400">Vulnerability post about feature creep. Discuss the importance of shipping fast.</p>
</div>
<button className="text-sm font-medium text-slate-900 bg-slate-50 border border-slate-200 rounded py-1.5 w-full hover:bg-slate-100 transition-colors dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-700" onclick="switchView('create-editor')">Draft this</button>
</div>
</div>
</div>

<div className="view-section hidden animate-fade-in max-w-2xl mx-auto pt-12" id="view-create-entry">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3 dark:text-white">Ready to create your next post?</h2>
<p className="text-slate-500 dark:text-slate-400">Choose how you want to start.</p>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<button className="bg-white border border-slate-200 rounded-xl p-6 hover:border-indigo-400 hover:ring-1 hover:ring-indigo-400 transition-all text-left group dark:bg-slate-900 dark:border-slate-800 dark:hover:border-indigo-500" onclick="switchView('create-editor')">
<div className="h-10 w-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-indigo-900/30">
<span className="iconify text-indigo-600" data-icon="lucide:wand-2" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 dark:text-white">Create with AI</h3>
<p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Generate viral posts from a simple topic.</p>
</button>
<button className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-400 transition-all text-left group dark:bg-slate-900 dark:border-slate-800 dark:hover:border-slate-600" onclick="switchView('create-editor')">
<div className="h-10 w-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform dark:bg-slate-800">
<span className="iconify text-slate-600 dark:text-slate-300" data-icon="lucide:pen-line" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 dark:text-white">Write your own</h3>
<p className="text-sm text-slate-500 mt-1 dark:text-slate-400">Open the blank editor with preview.</p>
</button>
</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4 text-center">Assets</p>
<div className="grid grid-cols-3 gap-4">
<button className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-sm transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
<span className="iconify text-slate-600 dark:text-slate-400" data-icon="lucide:layers" data-width="20"></span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">Carousel</span>
</button>
<button className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-sm transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
<span className="iconify text-slate-600 dark:text-slate-400" data-icon="lucide:image" data-width="20"></span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI Image</span>
</button>
<button className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-white hover:shadow-sm transition-all dark:bg-slate-900 dark:border-slate-800 dark:hover:bg-slate-800">
<span className="iconify text-slate-600 dark:text-slate-400" data-icon="lucide:user-circle-2" data-width="20"></span>
<span className="text-sm font-medium text-slate-700 dark:text-slate-300">AI Twin</span>
</button>
</div>
</div>

<div className="view-section hidden h-[calc(100vh-8rem)]" id="view-create-editor">
<div className="flex flex-col lg:flex-row h-full gap-6">

<div className="w-full lg:w-1/2 flex flex-col h-full bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden dark:bg-slate-900 dark:border-slate-800">
<div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30 dark:border-slate-700">
<h3 className="font-medium text-slate-800 dark:text-white flex items-center gap-2">
<span className="iconify text-indigo-600" data-icon="lucide:sparkles" data-width="16"></span>
                                    Post Generator
                                </h3>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" onclick="switchView('dashboard')"><span className="iconify" data-icon="lucide:x" data-width="18"></span></button>
</div>
<div className="p-6 flex-1 overflow-y-auto space-y-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 dark:text-slate-300">Topic</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all min-h-[80px] text-slate-800 placeholder:text-slate-400 dark:bg-slate-950 dark:border-slate-700 dark:text-white" placeholder="e.g. The importance of deep work in a distracted world..."></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 dark:text-slate-300">Category</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm focus:border-indigo-500 outline-none text-slate-700 dark:bg-slate-950 dark:border-slate-700 dark:text-white">
<option>Thought Leadership</option>
<option>Educational</option>
<option>Personal Story</option>
<option>Contrarian</option>
</select>
<span className="iconify absolute right-3 top-3 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 dark:text-slate-300">Tone</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-slate-200 rounded-lg py-2.5 pl-3 pr-8 text-sm focus:border-indigo-500 outline-none text-slate-700 dark:bg-slate-950 dark:border-slate-700 dark:text-white">
<option>Professional</option>
<option>Casual</option>
<option>Energetic</option>
<option>Storyteller</option>
</select>
<span className="iconify absolute right-3 top-3 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="14"></span>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5 dark:text-slate-300">Length</label>
<div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
<button className="flex-1 py-1.5 text-xs font-medium rounded text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">Short</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded bg-white text-indigo-600 shadow-sm dark:bg-slate-700 dark:text-indigo-400">Medium</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">Long</button>
</div>
</div>
<div className="flex items-center justify-between py-2">
<div className="flex items-center gap-2">
<div className="w-9 h-5 bg-indigo-600 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="text-sm text-slate-700 dark:text-slate-300">Use viral template structure</span>
</div>
</div>
</div>
<div className="p-4 border-t border-slate-100 bg-slate-50/50 dark:bg-slate-800/30 dark:border-slate-700">
<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 rounded-lg shadow-sm flex items-center justify-center gap-2 transition-all">
<span className="iconify" data-icon="lucide:sparkles" data-width="16"></span>
                                    Generate Draft
                                </button>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col h-full">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">Preview</h3>
<div className="flex gap-2">
<button className="text-xs font-medium px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-700 hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">Add to queue</button>
<button className="text-xs font-medium px-3 py-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 shadow-sm">Publish Now</button>
</div>
</div>

<div className="flex-1 bg-[#F3F2EF] rounded-xl border border-slate-200 overflow-y-auto p-4 dark:bg-black dark:border-slate-800">
<div className="bg-white rounded-lg border border-gray-300/50 shadow-sm max-w-[500px] mx-auto dark:bg-[#1b1f23] dark:border-gray-700">

<div className="p-3 flex gap-3">
<img alt="Profile" className="w-12 h-12 rounded-full" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div>
<div className="flex flex-col">
<span className="font-semibold text-sm text-slate-900 dark:text-white">Alex Creator <span className="text-slate-500 font-normal dark:text-slate-400">• You</span></span>
<span className="text-xs text-slate-500 dark:text-slate-400">Growth Specialist | SaaS Founder</span>
<span className="text-xs text-slate-500 flex items-center gap-1 mt-0.5 dark:text-slate-400">Now • <span className="iconify" data-icon="lucide:globe" data-width="10"></span></span>
</div>
</div>
</div>

<div className="px-4 pb-2 text-sm text-slate-900 leading-relaxed whitespace-pre-wrap dark:text-slate-200" contenteditable="true">
Deep work is becoming a superpower in our distracted economy.

While most people are bouncing between Slack, email, and 15-minute meetings, the top 1% of builders are carving out 4-hour blocks of uninterrupted time.

I tried this for 2 weeks. The result?

I shipped more features in 14 days than I did in the previous 2 months.

Here is my exact schedule for deep work sessions:
👇
                                    </div>

<div className="mt-2 bg-slate-100 h-64 w-full flex items-center justify-center text-slate-400 dark:bg-slate-800">
<span className="flex flex-col items-center gap-2">
<span className="iconify" data-icon="lucide:image" data-width="24"></span>
<span className="text-xs">Image Preview</span>
</span>
</div>

<div className="px-4 py-2 border-b border-gray-100 flex items-center justify-between text-xs text-slate-500 dark:border-gray-800 dark:text-slate-400">
<div className="flex items-center gap-1">
<div className="flex -space-x-1">
<div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center"><span className="iconify text-white" data-icon="lucide:thumbs-up" data-width="8"></span></div>
<div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"><span className="iconify text-white" data-icon="lucide:heart" data-width="8"></span></div>
</div>
<span>0</span>
</div>
<span>0 comments • 0 reposts</span>
</div>

<div className="px-2 py-1 flex justify-between items-center">
<button className="flex items-center gap-2 px-3 py-3 rounded hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors flex-1 justify-center dark:hover:bg-slate-800 dark:text-slate-300">
<span className="iconify" data-icon="lucide:thumbs-up" data-width="18"></span> Like
                                        </button>
<button className="flex items-center gap-2 px-3 py-3 rounded hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors flex-1 justify-center dark:hover:bg-slate-800 dark:text-slate-300">
<span className="iconify" data-icon="lucide:message-square" data-width="18"></span> Comment
                                        </button>
<button className="flex items-center gap-2 px-3 py-3 rounded hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors flex-1 justify-center dark:hover:bg-slate-800 dark:text-slate-300">
<span className="iconify" data-icon="lucide:repeat" data-width="18"></span> Repost
                                        </button>
<button className="flex items-center gap-2 px-3 py-3 rounded hover:bg-slate-100 text-slate-600 text-sm font-medium transition-colors flex-1 justify-center dark:hover:bg-slate-800 dark:text-slate-300">
<span className="iconify" data-icon="lucide:send" data-width="18"></span> Send
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="view-section hidden animate-fade-in" id="view-research">
<div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1 dark:text-white">Top posts trending this month</h2>
<p className="text-slate-500 dark:text-slate-400">Analyze what's going viral in your niche.</p>
</div>
<div className="flex gap-2 w-full md:w-auto">
<div className="relative w-full md:w-64">
<span className="iconify absolute left-3 top-2.5 text-slate-400" data-icon="lucide:search" data-width="16"></span>
<input className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none dark:bg-slate-900 dark:border-slate-700 dark:text-white" placeholder="Search keywords..." type="text"/>
</div>
</div>
</div>

<div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
<button className="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full bg-indigo-600 text-white shadow-sm">All Topics</button>
<button className="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">Artificial Intelligence</button>
<button className="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">SaaS Growth</button>
<button className="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">Product Management</button>
<button className="whitespace-nowrap px-4 py-1.5 text-sm font-medium rounded-full bg-white border border-slate-200 text-slate-600 hover:border-slate-300 dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300">Coding</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-slate-200 rounded-full dark:bg-slate-700"></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Jenkins</p>
<p className="text-xs text-slate-500 dark:text-slate-400">2 days ago • 14k likes</p>
</div>
</div>
<p className="text-sm text-slate-800 mb-4 line-clamp-4 leading-relaxed dark:text-slate-300">
                                Stop trying to build a "Perfect" MVP. It doesn't exist. Instead, focus on the SLC (Simple Lovable Complete) model. Here is why most founders fail at the first step...
                            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded dark:bg-slate-800 dark:text-slate-400">Product</span>
<button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">See more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-slate-200 rounded-full dark:bg-slate-700"></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">David Chen</p>
<p className="text-xs text-slate-500 dark:text-slate-400">5 hours ago • 2.1k likes</p>
</div>
</div>
<p className="text-sm text-slate-800 mb-4 line-clamp-4 leading-relaxed dark:text-slate-300">
                                The new React compiler is going to change everything we know about memoization. I dug into the source code and found 3 surprising optimizations that no one is talking about. 🧵
                            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded dark:bg-slate-800 dark:text-slate-400">Engineering</span>
<button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">See more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow dark:bg-slate-900 dark:border-slate-800">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 bg-slate-200 rounded-full dark:bg-slate-700"></div>
<div>
<p className="text-sm font-semibold text-slate-900 dark:text-white">Elena Ross</p>
<p className="text-xs text-slate-500 dark:text-slate-400">1 week ago • 45k likes</p>
</div>
</div>
<p className="text-sm text-slate-800 mb-4 line-clamp-4 leading-relaxed dark:text-slate-300">
                                Unpopular opinion: Remote work isn't killing culture, bad management is. If you need to see people in a chair to know they are working, you are not a leader, you are a babysitter.
                            </p>
<div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded dark:bg-slate-800 dark:text-slate-400">Leadership</span>
<button className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center gap-1">See more <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span></button>
</div>
</div>
</div>
</div>

<div className="view-section hidden animate-fade-in" id="view-calendar">
<div className="flex justify-between items-center mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Content Calendar</h2>
<button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-sm" onclick="switchView('create-entry')">New Post</button>
</div>

<div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center justify-between mb-8 dark:bg-amber-900/20 dark:border-amber-800">
<div className="flex items-center gap-3">
<span className="iconify text-amber-600 dark:text-amber-500" data-icon="lucide:alert-circle" data-width="20"></span>
<span className="text-sm text-amber-900 dark:text-amber-200">Connect your LinkedIn account to enable auto-publishing.</span>
</div>
<button className="text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wide dark:text-amber-400">Connect</button>
</div>

<div className="border-b border-slate-200 mb-6 dark:border-slate-800">
<nav className="flex gap-6">
<a className="border-b-2 border-indigo-600 text-indigo-600 py-2 px-1 text-sm font-medium dark:text-indigo-400 dark:border-indigo-400" href="#">Scheduled</a>
<a className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 py-2 px-1 text-sm font-medium dark:text-slate-400 dark:hover:text-slate-200" href="#">Published</a>
<a className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 py-2 px-1 text-sm font-medium dark:text-slate-400 dark:hover:text-slate-200" href="#">Drafts</a>
</nav>
</div>

<div className="space-y-4">

<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-6 mb-2 dark:text-slate-400">Today, Oct 24</h3>

<div className="flex gap-4 items-start group">
<div className="w-16 pt-3 text-right text-xs font-medium text-slate-400">09:00 AM</div>
<div className="flex-1 bg-white border-l-4 border-indigo-500 rounded-r-lg shadow-sm p-4 border-y border-r border-slate-200 hover:border-slate-300 transition-all dark:bg-slate-900 dark:border-slate-800 dark:border-l-indigo-500">
<div className="flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-slate-900 mb-1 dark:text-white">5 Lessons from bootstrapping</h4>
<p className="text-xs text-slate-500 line-clamp-1 dark:text-slate-400">It took me 3 years to realize that revenue is vanity and profit is sanity...</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-600 uppercase dark:bg-indigo-900/30 dark:text-indigo-300">Queue</span>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
</div>
</div>
</div>

<div className="flex gap-4 items-center group">
<div className="w-16 text-right text-xs font-medium text-slate-400">01:00 PM</div>
<button className="flex-1 border-2 border-dashed border-slate-200 rounded-lg p-3 flex items-center justify-center gap-2 text-slate-400 hover:border-indigo-300 hover:text-indigo-500 hover:bg-indigo-50/30 transition-all dark:border-slate-800 dark:hover:border-indigo-700 dark:hover:bg-indigo-900/10" onclick="switchView('create-entry')">
<span className="iconify" data-icon="lucide:plus" data-width="16"></span>
<span className="text-sm font-medium">Add to queue</span>
</button>
</div>

<h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider mt-8 mb-2 dark:text-slate-400">Tomorrow, Oct 25</h3>

<div className="flex gap-4 items-start group">
<div className="w-16 pt-3 text-right text-xs font-medium text-slate-400">10:00 AM</div>
<div className="flex-1 bg-white border-l-4 border-purple-500 rounded-r-lg shadow-sm p-4 border-y border-r border-slate-200 hover:border-slate-300 transition-all dark:bg-slate-900 dark:border-slate-800 dark:border-l-purple-500">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-1">
<span className="iconify text-purple-500" data-icon="lucide:layers" data-width="12"></span>
<h4 className="text-sm font-medium text-slate-900 dark:text-white">Carousel: AI Tools Guide</h4>
</div>
<p className="text-xs text-slate-500 line-clamp-1 dark:text-slate-400">Slide 1: The landscape is changing fast. Here are...</p>
</div>
<div className="flex items-center gap-2">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 uppercase dark:bg-slate-800 dark:text-slate-400">Draft</span>
<button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"><span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
