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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple View Router for Mockup
        function navigateTo(viewId) {
            // Check if it's a subview of Admin Shell
            if (viewId === 'dashboard' || viewId === 'editor') {
                document.getElementById('view-auth').classList.remove('active');
                
                // Show Shell first with a tiny delay for transition if needed, 
                // but here we just toggle display
                const shell = document.getElementById('admin-shell');
                shell.classList.remove('hidden');
                shell.classList.add('flex');
                
                // Hide all subviews
                document.getElementById('subview-dashboard').classList.add('hidden');
                document.getElementById('subview-editor').classList.add('hidden');
                
                // Show target subview
                document.getElementById('subview-' + viewId).classList.remove('hidden');
                
                // Update Breadcrumb
                const bc = document.getElementById('breadcrumb-current');
                if(bc) bc.innerText = viewId.charAt(0).toUpperCase() + viewId.slice(1);
            } 
            else if (viewId === 'auth') {
                document.getElementById('admin-shell').classList.add('hidden');
                document.getElementById('admin-shell').classList.remove('flex');
                
                const auth = document.getElementById('view-auth');
                auth.classList.add('active');
            }
        }

        // Auth Toggle Logic
        let isLogin = true;
        function toggleAuthMode() {
            isLogin = !isLogin;
            const title = document.getElementById('auth-title');
            const subtitle = document.getElementById('auth-subtitle');
            const btnText = document.getElementById('submit-text');
            const toggleText = document.getElementById('toggle-text');
            const toggleBtn = document.getElementById('toggle-btn');
            const nameField = document.getElementById('field-name');
            const forgotLink = document.getElementById('forgot-link');

            if (isLogin) {
                title.innerText = 'Welcome back';
                subtitle.innerText = 'Enter your credentials to access the dashboard';
                btnText.innerText = 'Sign In';
                toggleText.innerText = "Don't have an account?";
                toggleBtn.innerText = 'Sign up';
                nameField.classList.add('hidden');
                forgotLink.classList.remove('hidden');
            } else {
                title.innerText = 'Create an account';
                subtitle.innerText = 'Start creating your digital journal templates';
                btnText.innerText = 'Create Account';
                toggleText.innerText = "Already have an account?";
                toggleBtn.innerText = 'Sign in';
                nameField.classList.remove('hidden');
                forgotLink.classList.add('hidden');
            }
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
      



<div className="view-section active w-full h-full bg-white relative" id="view-auth">

<div className="hidden lg:flex flex-col overflow-hidden bg-[#F5F2EF] w-1/2 h-full border-stone-200 border-r pt-12 pr-12 pb-12 pl-12 relative justify-between">
<div className="z-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-stone-900 rounded-lg flex items-center justify-center text-white">
<span className="serif-font italic font-medium">J</span>
</div>
<span className="font-semibold tracking-tight text-lg">Journalia Admin</span>
</div>
<h1 className="serif-font text-5xl leading-tight text-stone-900 mb-4">Craft beautiful<br/>digital journals.</h1>
<p className="text-stone-500 max-w-sm text-lg">Manage templates, stickers, and user data in one unified workspace.</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-stone-100 to-transparent"></div>
<div className="z-10 flex gap-4 text-xs font-medium text-stone-400">
<span>© 2024 Journalia Inc.</span>
<a className="hover:text-stone-900" href="#">Privacy</a>
<a className="hover:text-stone-900" href="#">Terms</a>
</div>
</div>

<div className="w-full lg:w-1/2 h-full flex items-center justify-center p-8">
<div className="w-full max-w-sm space-y-8">

<div className="text-center">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900" id="auth-title">Welcome back</h2>
<p className="mt-2 text-sm text-stone-500" id="auth-subtitle">Enter your credentials to access the dashboard</p>
</div>

<form className="space-y-4" onsubmit="event.preventDefault(); navigateTo('dashboard');">

<div className="space-y-1 hidden" id="field-name">
<label className="text-xs font-medium text-stone-700">Full Name</label>
<input className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="Isabella Chen" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700">Email Address</label>
<input className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="admin@journalia.com" type="email"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-stone-700">Password</label>
<a className="text-xs text-rose-600 hover:text-rose-700 font-medium" href="#" id="forgot-link">Forgot?</a>
</div>
<input className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center justify-center gap-2 group" type="submit">
<span id="submit-text">Sign In</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
<div className="relative">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-stone-200"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-stone-400">Or continue with</span></div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
<iconify-icon icon="logos:google-icon" width="16"></iconify-icon> Google
                    </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm font-medium text-stone-700 hover:bg-stone-50 transition-colors">
<iconify-icon icon="logos:github-icon" width="16"></iconify-icon> GitHub
                    </button>
</div>
<p className="text-center text-xs text-stone-500">
<span id="toggle-text">Don't have an account?</span>
<button className="text-stone-900 font-semibold hover:underline ml-1" id="toggle-btn" onclick="toggleAuthMode()">Sign up</button>
</p>
</div>
</div>
</div>



<div className="view-section w-full h-full bg-stone-50 hidden" id="admin-shell">

<aside className="w-64 bg-white border-r border-stone-200 flex flex-col flex-shrink-0 z-20">

<div className="h-14 flex items-center px-5 border-b border-stone-100">
<div className="w-6 h-6 bg-stone-900 rounded-md flex items-center justify-center text-white mr-3">
<span className="serif-font italic text-xs">J</span>
</div>
<span className="font-semibold text-stone-900 text-sm tracking-tight">Journalia Admin</span>
</div>

<nav className="flex-1 p-3 space-y-1 overflow-y-auto">
<div className="px-2 mb-2 text-[10px] font-bold text-stone-400 uppercase tracking-wider">Overview</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-stone-100 text-stone-900" onclick="navigateTo('dashboard')">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Users
                </button>
<button className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:graph-up-linear" width="18"></iconify-icon>
                        Analytics
                    </div>
</button>
<div className="px-2 mt-6 mb-2 text-[10px] font-bold text-stone-400 uppercase tracking-wider">Content</div>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors group" onclick="navigateTo('editor')">
<iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
                    Templates
                    <span className="ml-auto opacity-0 group-hover:opacity-100"><iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon></span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<iconify-icon icon="solar:sticker-smile-circle-linear" width="18"></iconify-icon>
                    Stickers
                </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-50 transition-colors">
<iconify-icon icon="solar:tag-linear" width="18"></iconify-icon>
                    Categories
                </button>
</nav>

<div className="p-3 border-t border-stone-100">
<button className="w-full flex items-center gap-3 px-2 py-2 rounded-md hover:bg-stone-50 transition-colors">
<div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden">
<img alt="Admin" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Admin"/>
</div>
<div className="text-left flex-1 min-w-0">
<p className="text-xs font-semibold text-stone-900 truncate">Admin User</p>
<p className="text-[10px] text-stone-400 truncate">admin@journalia.com</p>
</div>
<iconify-icon className="text-stone-400" icon="solar:settings-linear"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden h-full relative">

<header className="h-14 bg-white border-b border-stone-200 flex items-center justify-between px-6 shrink-0 z-10">
<div className="flex items-center gap-2 text-sm text-stone-500">
<span className="text-stone-900 font-medium">Dashboard</span>
<iconify-icon className="text-stone-300" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span id="breadcrumb-current">Overview</span>
</div>
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:text-stone-900 relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
</button>
<button className="text-xs font-medium text-stone-500 hover:text-stone-900" onclick="navigateTo('auth')">Logout</button>
</div>
</header>

<div className="flex-1 overflow-y-auto pt-8 pr-8 pb-8 pl-8" id="subview-dashboard">
<div className="max-w-6xl mr-auto ml-auto space-y-8">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold text-stone-900 tracking-tight mb-1">Overview</h1>
<p className="text-sm text-stone-500">Welcome back! Here's what's happening today.</p>
</div>
<button className="px-4 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg hover:bg-stone-800 transition-colors flex items-center gap-2" onclick="navigateTo('editor')">
<iconify-icon icon="solar:add-circle-bold"></iconify-icon>
                            New Template
                        </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<h3 className="text-2xl font-semibold text-stone-900">2,543</h3>
<p className="text-xs text-stone-500 mt-1">Total Active Users</p>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:file-text-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+5%</span>
</div>
<h3 className="text-2xl font-semibold text-stone-900">142</h3>
<p className="text-xs text-stone-500 mt-1">Published Templates</p>
</div>
<div className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-400 bg-stone-50 px-2 py-0.5 rounded-full">0%</span>
</div>
<h3 className="text-2xl font-semibold text-stone-900">4.9</h3>
<p className="text-xs text-stone-500 mt-1">Average Rating</p>
</div>
</div>

<div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between">
<h3 className="text-sm font-semibold text-stone-900">Recent Templates</h3>
<button className="text-xs text-stone-500 hover:text-stone-900">View All</button>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 text-stone-500">
<tr>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Template Name</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Category</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider">Status</th>
<th className="px-6 py-3 font-medium text-xs uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-10 bg-stone-200 rounded-sm border border-stone-300"></div>
<span className="font-medium text-stone-900">Minimalist Daily</span>
</div>
</td>
<td className="px-6 py-4 text-stone-500">Productivity</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Published
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900" onclick="navigateTo('editor')"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
<tr className="hover:bg-stone-50/50 transition-colors">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-8 h-10 bg-rose-100 rounded-sm border border-rose-200"></div>
<span className="font-medium text-stone-900">Floral Planner 2024</span>
</div>
</td>
<td className="px-6 py-4 text-stone-500">Wellness</td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-medium bg-stone-100 text-stone-600 border border-stone-200">
                                            Draft
                                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-stone-400 hover:text-stone-900" onclick="navigateTo('editor')"><iconify-icon icon="solar:pen-linear" width="18"></iconify-icon></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden flex-1 flex flex-col relative bg-stone-100 h-full" id="subview-editor">

<div className="h-12 bg-white border-b border-stone-200 flex items-center justify-between px-4 shrink-0">
<div className="flex items-center gap-4">
<button className="text-stone-400 hover:text-stone-900" onclick="navigateTo('dashboard')">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-stone-200"></div>
<span className="text-sm font-medium text-stone-900">Floral Planner 2024</span>
<span className="px-1.5 py-0.5 bg-stone-100 rounded text-[10px] text-stone-500">Draft</span>
</div>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-stone-50 text-stone-500"><iconify-icon icon="solar:undo-left-linear" width="18"></iconify-icon></button>
<button className="p-1.5 rounded hover:bg-stone-50 text-stone-500"><iconify-icon icon="solar:redo-right-linear" width="18"></iconify-icon></button>
<div className="h-4 w-px bg-stone-200 mx-1"></div>
<span className="text-xs font-medium text-stone-500 w-12 text-center">100%</span>
</div>
<div className="flex items-center gap-3">
<button className="text-xs font-medium text-stone-500 hover:text-stone-900">Preview</button>
<button className="px-3 py-1.5 bg-stone-900 text-white text-xs font-medium rounded hover:bg-stone-800 transition-colors">Save</button>
</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-12 bg-white border-r border-stone-200 flex flex-col items-center py-4 gap-4 z-10">
<button className="p-2 rounded-lg bg-rose-50 text-rose-600 shadow-sm"><iconify-icon icon="solar:cursor-bold" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-50"><iconify-icon icon="solar:text-square-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-50"><iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-50"><iconify-icon icon="solar:shapes-linear" width="20"></iconify-icon></button>
<button className="p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-50"><iconify-icon icon="solar:pen-linear" width="20"></iconify-icon></button>
<div className="flex-1"></div>
<button className="p-2 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-50"><iconify-icon icon="solar:layers-linear" width="20"></iconify-icon></button>
</div>

<div className="flex-1 relative overflow-auto canvas-bg flex items-center justify-center p-12">

<div className="w-[500px] h-[700px] bg-white shadow-lg relative cursor-crosshair ring-1 ring-stone-900/5" id="konva-container">

<div className="absolute top-10 left-0 w-full text-center">
<h1 className="serif-font text-3xl text-stone-800">2024</h1>
<p className="text-xs uppercase tracking-[0.2em] text-stone-400 mt-2">Planner</p>
</div>

<div className="absolute top-32 left-10 w-32 h-32 border border-rose-400 border-dashed bg-rose-50/10">
<div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-rose-400"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-rose-400"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-rose-400"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-rose-400"></div>
<iconify-icon className="text-rose-300 opacity-50" height="100%" icon="solar:flower-linear" width="100%"></iconify-icon>
</div>
</div>
</div>

<div className="w-64 bg-white border-l border-stone-200 flex flex-col z-10">
<div className="p-3 border-b border-stone-100 text-xs font-semibold text-stone-500 uppercase tracking-wide">
                            Properties
                        </div>
<div className="p-4 space-y-6 overflow-y-auto">

<div className="space-y-2">
<label className="text-xs text-stone-500">Alignment</label>
<div className="flex justify-between bg-stone-50 p-1 rounded-md border border-stone-100">
<button className="p-1 hover:bg-white hover:shadow-sm rounded"><iconify-icon icon="solar:align-left-linear"></iconify-icon></button>
<button className="p-1 hover:bg-white hover:shadow-sm rounded"><iconify-icon icon="solar:align-horizontal-center-linear"></iconify-icon></button>
<button className="p-1 hover:bg-white hover:shadow-sm rounded"><iconify-icon icon="solar:align-right-linear"></iconify-icon></button>
<button className="p-1 hover:bg-white hover:shadow-sm rounded"><iconify-icon icon="solar:align-top-linear"></iconify-icon></button>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-stone-500">Position</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<span className="absolute left-2 top-1.5 text-[10px] text-stone-400">X</span>
<input className="w-full pl-6 pr-2 py-1 bg-stone-50 border border-stone-200 rounded text-xs text-right" type="text" value="40"/>
</div>
<div className="relative">
<span className="absolute left-2 top-1.5 text-[10px] text-stone-400">Y</span>
<input className="w-full pl-6 pr-2 py-1 bg-stone-50 border border-stone-200 rounded text-xs text-right" type="text" value="128"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-stone-500">Fill</label>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded border border-stone-200 bg-rose-300"></div>
<input className="flex-1 py-1.5 px-2 text-xs border border-stone-200 rounded uppercase text-stone-600" type="text" value="#FDA4AF"/>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between">
<label className="text-xs text-stone-500">Opacity</label>
<span className="text-xs text-stone-900">50%</span>
</div>
<div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-stone-900 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
