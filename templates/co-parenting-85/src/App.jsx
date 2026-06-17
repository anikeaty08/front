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



    // Initialize Lucide icons
    lucide.createIcons({ strokeWidth: 1.5 });

    // State management
    let hasChildren = true; // Toggle between true/false/'empty' for different dashboard states
    let hasData = true; // Toggle between true/false for empty state

    // Show appropriate dashboard based on state
    function showDashboard() {
      document.getElementById('screen-dashboard-no-children').classList.add('hidden');
      document.getElementById('screen-dashboard-empty').classList.add('hidden');
      document.getElementById('screen-dashboard').classList.add('hidden');
      
      if (!hasChildren) {
        document.getElementById('screen-dashboard-no-children').classList.remove('hidden');
        // Hide children in sidebar
        document.getElementById('sidebar-children').innerHTML = '<p class="text-xs text-slate-500">No children yet</p>';
      } else if (!hasData) {
        document.getElementById('screen-dashboard-empty').classList.remove('hidden');
      } else {
        document.getElementById('screen-dashboard').classList.remove('hidden');
      }
    }

    // Authentication
    document.getElementById('preview-dashboard')?.addEventListener('click', () => {
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      showDashboard();
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    document.getElementById('email-login')?.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('auth-screen').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      showDashboard();
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    // Add first child button
    document.getElementById('add-first-child')?.addEventListener('click', () => {
      alert('Add child functionality would open here');
      // After adding child, update state
      hasChildren = true;
      hasData = false; // Show empty state after adding first child
      showDashboard();
      // Restore children in sidebar
      document.getElementById('sidebar-children').innerHTML = `
        <span class="inline-flex items-center gap-1 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-[11px] px-2 py-0.5">
          <span class="h-1.5 w-1.5 rounded-full bg-pink-500"></span>Ava
        </span>
        <span class="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[11px] px-2 py-0.5">
          <span class="h-1.5 w-1.5 rounded-full bg-sky-500"></span>Liam
        </span>
        <span class="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-[11px] px-2 py-0.5">
          <span class="h-1.5 w-1.5 rounded-full bg-violet-500"></span>Noah
        </span>
      `;
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    // Navigation
    document.querySelectorAll('[data-screen]').forEach(btn => {
      btn.addEventListener('click', () => {
        const screen = btn.dataset.screen;
        
        // Hide all screens
        document.querySelectorAll('section[id^="screen-"]').forEach(s => s.classList.add('hidden'));
        
        // Show selected screen
        if (screen === 'dashboard') {
          showDashboard();
        } else {
          document.getElementById(`screen-${screen}`).classList.remove('hidden');
        }
        
        // Update active nav
        document.querySelectorAll('.nav-item').forEach(n => {
          n.classList.remove('bg-slate-100', 'text-slate-900');
          n.classList.add('text-slate-700');
        });
        document.querySelectorAll(`[data-screen="${screen}"]`).forEach(n => {
          n.classList.add('bg-slate-100', 'text-slate-900');
          n.classList.remove('text-slate-700');
        });
        
        lucide.createIcons({ strokeWidth: 1.5 });
      });
    });

    // Set dashboard as active initially
    document.querySelector('[data-screen="dashboard"]')?.classList.add('bg-slate-100', 'text-slate-900');

    // Notification panel
    document.getElementById('notif-btn')?.addEventListener('click', () => {
      document.getElementById('notif-panel').classList.toggle('hidden');
    });

    document.getElementById('clear-notifs')?.addEventListener('click', () => {
      document.getElementById('notif-panel').classList.add('hidden');
      document.getElementById('notif-dot').classList.add('hidden');
    });

    // Quick add modal
    document.getElementById('quick-add')?.addEventListener('click', () => {
      document.getElementById('add-modal').classList.remove('hidden');
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    document.getElementById('mobile-add')?.addEventListener('click', () => {
      document.getElementById('add-modal').classList.remove('hidden');
      lucide.createIcons({ strokeWidth: 1.5 });
    });

    document.getElementById('close-add')?.addEventListener('click', () => {
      document.getElementById('add-modal').classList.add('hidden');
    });

    // Logout
    document.getElementById('logout')?.addEventListener('click', () => {
      document.getElementById('app').classList.add('hidden');
      document.getElementById('auth-screen').classList.remove('hidden');
    });

    // Remember me checkbox
    document.getElementById('remember-toggle')?.addEventListener('click', function() {
      this.classList.toggle('active');
    });

    // Custom toggles
    document.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const dot = this.querySelector('.toggle-dot');
        const isActive = this.classList.contains('active');
        
        if (isActive) {
          this.classList.remove('active', 'bg-indigo-600', 'border-indigo-600');
          this.classList.add('bg-slate-200', 'border-slate-300');
          dot.style.transform = 'translateX(0)';
        } else {
          this.classList.add('active', 'bg-indigo-600', 'border-indigo-600');
          this.classList.remove('bg-slate-200', 'border-slate-300');
          dot.style.transform = 'translateX(20px)';
        }
      });
    });

    // Demo: Toggle between states (for testing)
    // Uncomment to test different states:
    // hasChildren = false; // No children state
    // hasChildren = true; hasData = false; // Empty state
    // hasChildren = true; hasData = true; // Full data state (default)
  
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
      

<section className="min-h-screen flex items-center justify-center px-4 py-10" id="auth-screen">
<div className="w-full max-w-md">
<div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-600 text-white px-2 py-1 text-sm tracking-tight">TFK</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">Time for Kids</span>
</div>
<span className="text-xs text-slate-500">Co‑parenting made simple</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Welcome back</h1>
<p className="text-sm text-slate-600 mb-6">Manage schedules, tasks, expenses, and notes together.</p>
<div className="space-y-3">
<button className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors px-4 py-2.5" id="google-login">
<i className="w-4 h-4 text-slate-700" data-lucide="mail"></i>
<span className="text-sm font-medium text-slate-700">Continue with Google</span>
</button>
<button className="w-full flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors px-4 py-2.5" id="apple-login">
<i className="w-4 h-4 text-slate-700" data-lucide="apple"></i>
<span className="text-sm font-medium text-slate-700">Continue with Apple</span>
</button>
</div>
<div className="relative my-6">
<div className="absolute inset-0 flex items-center">
<span className="w-full border-t border-slate-200"></span>
</div>
<div className="relative flex justify-center text-xs">
<span className="bg-white px-2 text-slate-500">or with email</span>
</div>
</div>
<form className="space-y-4" id="email-login">
<div>
<label className="block text-sm text-slate-700 mb-1.5">Email</label>
<input className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white px-3 py-2.5 text-sm placeholder:text-slate-400" id="login-email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1.5">Password</label>
<input className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 bg-white px-3 py-2.5 text-sm placeholder:text-slate-400" id="login-password" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between">

<button className="flex items-center gap-2 group" id="remember-toggle" type="button">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] border border-slate-300 bg-white group-[.active]:bg-indigo-600 group-[.active]:border-indigo-600 transition-colors" data-checked="false">
<svg className="hidden group-[.active]:block" fill="none" height="14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14"><polyline points="20 6 9 17 4 12"></polyline></svg>
</span>
<span className="text-xs text-slate-600">Remember me</span>
</button>
<button className="text-xs text-indigo-600 hover:text-indigo-700" type="button">Forgot password?</button>
</div>
<button className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-sm font-medium transition-colors" type="submit">Sign in</button>
</form>
<p className="text-xs text-slate-600 mt-6">New here? <button className="text-indigo-600 hover:text-indigo-700 font-medium" id="show-register">Create an account</button></p>

<p className="text-xs text-slate-500 mt-2">Just looking around? <button className="text-slate-700 hover:text-slate-900 underline decoration-slate-300 hover:decoration-slate-400" id="preview-dashboard">Preview dashboard</button></p>
</div>
<p className="text-center text-[11px] text-slate-500 mt-4">By continuing, you agree to our Terms and Privacy Policy.</p>
</div>
</section>

<div className="hidden min-h-screen" id="app">
<div className="min-h-screen md:grid md:grid-cols-[260px_1fr]">

<aside className="hidden md:flex md:flex-col border-r border-slate-200 bg-white">
<div className="px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="rounded-md bg-indigo-600 text-white px-2 py-1 text-sm tracking-tight">TFK</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">Time for Kids</span>
</div>
<span className="rounded-full bg-emerald-50 text-emerald-700 text-[11px] px-2 py-0.5 border border-emerald-200">Live</span>
</div>
<div className="px-3">
<div className="rounded-lg border border-slate-200 bg-white p-3" id="sidebar-profile">
<div className="flex items-center gap-2 mb-3">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Jordan Lee</div>
<div className="text-xs text-slate-500">Parent</div>
</div>
</div>
<div className="flex flex-wrap gap-1.5" id="sidebar-children">
<span className="inline-flex items-center gap-1 rounded-full border border-pink-200 bg-pink-50 text-pink-700 text-[11px] px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-pink-500"></span>Ava
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-[11px] px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>Liam
              </span>
<span className="inline-flex items-center gap-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-[11px] px-2 py-0.5">
<span className="h-1.5 w-1.5 rounded-full bg-violet-500"></span>Noah
              </span>
</div>
</div>
</div>
<nav className="mt-4 px-2 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="dashboard">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i><span className="text-sm">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="calendar">
<i className="w-4 h-4" data-lucide="calendar"></i><span className="text-sm">Calendar</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="expenses">
<i className="w-4 h-4" data-lucide="wallet"></i><span className="text-sm">Expenses</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="tasks">
<i className="w-4 h-4" data-lucide="check-square"></i><span className="text-sm">Tasks</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="notes">
<i className="w-4 h-4" data-lucide="notebook-text"></i><span className="text-sm">Notes</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="chat">
<i className="w-4 h-4" data-lucide="messages-square"></i><span className="text-sm">Chat</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" data-screen="profile">
<i className="w-4 h-4" data-lucide="settings"></i><span className="text-sm">Profile</span>
</button>
</nav>
<div className="mt-auto px-3 py-4">
<div className="rounded-lg border border-slate-200 p-3 bg-slate-50">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-indigo-600" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-slate-900">Premium</span>
</div>
<ul className="text-xs text-slate-600 space-y-1.5">
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-500" data-lucide="calendar-plus"></i> Google Calendar sync</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-500" data-lucide="share-2"></i> WhatsApp share</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-500" data-lucide="file-down"></i> Export reports</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-500" data-lucide="paintbrush"></i> Themes</li>
</ul>
<button className="mt-3 w-full rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-xs py-2">Try Pro</button>
</div>
</div>
</aside>

<main className="flex flex-col min-h-screen">

<header className="sticky top-0 z-10 bg-white border-b border-slate-200">
<div className="flex items-center justify-between px-4 py-3 md:px-6">
<div className="flex items-center gap-3">

<div className="md:hidden flex items-center gap-2">
<div className="rounded-md bg-indigo-600 text-white px-2 py-1 text-sm tracking-tight">TFK</div>
<span className="text-slate-900 text-lg font-semibold tracking-tight">Time for Kids</span>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="relative">
<i className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" data-lucide="search"></i>
<input className="pl-9 pr-3 py-2 w-[340px] rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 text-sm bg-white placeholder:text-slate-400" placeholder="Search events, tasks, expenses…"/>
</div>
<div className="hidden lg:flex items-center gap-2">
<div className="rounded-full bg-pink-50 text-pink-700 text-xs px-2 py-1 border border-pink-200">Ava</div>
<div className="rounded-full bg-sky-50 text-sky-700 text-xs px-2 py-1 border border-sky-200">Liam</div>
<div className="rounded-full bg-violet-50 text-violet-700 text-xs px-2 py-1 border border-violet-200">Noah</div>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="relative rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-2" id="notif-btn">
<i className="w-5 h-5 text-slate-700" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 inline-flex h-4 min-w-[16px] items-center justify-center rounded-full bg-rose-600 text-white text-[10px] px-1" id="notif-dot">3</span>
</button>
<button className="hidden sm:flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="quick-add">
<i className="w-4 h-4" data-lucide="plus"></i> Add
              </button>
<button className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-2" id="logout">
<i className="w-5 h-5 text-slate-700" data-lucide="log-out"></i>
</button>
<img alt="" className="h-8 w-8 rounded-full object-cover border border-slate-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="hidden absolute right-4 md:right-6 mt-1 w-[360px] bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden" id="notif-panel">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<span className="text-sm font-medium text-slate-900">Notifications</span>
<button className="text-xs text-slate-500 hover:text-slate-700" id="clear-notifs">Clear</button>
</div>
<div className="max-h-72 overflow-auto">
<div className="divide-y divide-slate-200">
<div className="flex gap-3 px-4 py-3 hover:bg-slate-50">
<i className="w-4 h-4 text-sky-600 mt-0.5" data-lucide="calendar"></i>
<div className="text-sm">
<div className="text-slate-900">New event added: Soccer practice</div>
<div className="text-xs text-slate-500">Today at 5:00 PM · Shared</div>
</div>
</div>
<div className="flex gap-3 px-4 py-3 hover:bg-slate-50">
<i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="check-circle-2"></i>
<div className="text-sm">
<div className="text-slate-900">Task completed: Pack lunch</div>
<div className="text-xs text-slate-500">2h ago</div>
</div>
</div>
<div className="flex gap-3 px-4 py-3 hover:bg-slate-50">
<i className="w-4 h-4 text-indigo-600 mt-0.5" data-lucide="wallet"></i>
<div className="text-sm">
<div className="text-slate-900">Expense added: School supplies</div>
<div className="text-xs text-slate-500">Yesterday · Split 50/50</div>
</div>
</div>
</div>
</div>
<div className="px-4 py-2 border-t border-slate-200">
<button className="w-full text-xs text-indigo-600 hover:text-indigo-700">View all</button>
</div>
</div>
</header>

<div className="flex-1">

<section className="hidden px-4 py-6 md:px-6" id="screen-dashboard-no-children">
<div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
<div className="max-w-md text-center">
<div className="mb-6 flex justify-center">
<div className="h-20 w-20 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center">
<i className="w-10 h-10 text-indigo-600" data-lucide="users"></i>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Add your first child</h2>
<p className="text-sm text-slate-600 mb-6">To manage events, schedules, expenses, and more, start by adding at least one child to your account.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 text-sm font-medium" id="add-first-child">
<i className="w-4 h-4" data-lucide="user-plus"></i> Add your first child
                </button>
<div className="mt-8 pt-6 border-t border-slate-200">
<p className="text-xs text-slate-500 mb-3">Once you add a child, you'll be able to:</p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-400" data-lucide="calendar"></i> Create and manage events</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-400" data-lucide="wallet"></i> Track expenses per child</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-400" data-lucide="repeat"></i> Set custody schedules</li>
<li className="flex items-center gap-2"><i className="w-3.5 h-3.5 text-slate-400" data-lucide="check-square"></i> Assign tasks and responsibilities</li>
</ul>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-dashboard-empty">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h2>
<p className="text-sm text-slate-600">Your upcoming events and recent activity.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-7">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="home"></i>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Custody today</h3>
</div>
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-2 py-1.5 text-xs" data-screen="profile">Manage schedule</button>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-pink-200 bg-pink-50">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-700 font-medium">A</span>
<div>
<div className="text-sm font-medium text-slate-900">Ava</div>
<div className="text-xs text-slate-600">Age 8</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-900">Mom</div>
<div className="text-xs text-slate-500">Until Friday</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-sky-200 bg-sky-50">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-medium">L</span>
<div>
<div className="text-sm font-medium text-slate-900">Liam</div>
<div className="text-xs text-slate-600">Age 6</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-900">Dad</div>
<div className="text-xs text-slate-500">Until Sunday</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-violet-200 bg-violet-50">
<div className="flex items-center gap-3">
<span className="h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-700 font-medium">N</span>
<div>
<div className="text-sm font-medium text-slate-900">Noah</div>
<div className="text-xs text-slate-600">Age 4</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-slate-900">Mom</div>
<div className="text-xs text-slate-500">Until Friday</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-xs text-slate-500 mb-1">This month</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">$0</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="pie-chart"></i>
</div>
<button className="w-full rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs text-slate-700" data-screen="expenses">Add your first expense</button>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div>
<div className="text-xs text-slate-500 mb-1">Events</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">0</div>
</div>
<i className="w-5 h-5 text-slate-400" data-lucide="calendar"></i>
</div>
<button className="w-full rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-xs text-slate-700" data-screen="calendar">Add your first event</button>
</div>
</div>
<div className="mt-4 bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="activity"></i>
<h3 className="text-base font-medium tracking-tight text-slate-900">Recent activity</h3>
</div>
</div>
<div className="text-center py-6">
<i className="w-8 h-8 text-slate-300 mx-auto mb-2" data-lucide="inbox"></i>
<p className="text-xs text-slate-500">No activity yet</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 py-6 md:px-6" id="screen-dashboard">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Dashboard</h2>
<p className="text-sm text-slate-600">Your upcoming events and recent activity.</p>
</div>
<div className="hidden sm:flex gap-2">
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-sm">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> New Event
                </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-sm">
<i className="w-4 h-4" data-lucide="wallet"></i> Add Expense
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

<div className="lg:col-span-7 space-y-4">

<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="home"></i>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Custody today</h3>
</div>
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-2 py-1.5 text-xs" data-screen="profile">Manage schedule</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-pink-200 bg-pink-50">
<span className="h-10 w-10 rounded-full bg-pink-100 border border-pink-200 flex items-center justify-center text-pink-700 font-medium flex-shrink-0">A</span>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900">Ava</div>
<div className="text-xs text-slate-600 truncate">With Mom</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-sky-200 bg-sky-50">
<span className="h-10 w-10 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 font-medium flex-shrink-0">L</span>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900">Liam</div>
<div className="text-xs text-slate-600 truncate">With Dad</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-violet-200 bg-violet-50">
<span className="h-10 w-10 rounded-full bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-700 font-medium flex-shrink-0">N</span>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900">Noah</div>
<div className="text-xs text-slate-600 truncate">With Mom</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="alarm-clock"></i>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Upcoming</h3>
</div>
<div className="flex items-center gap-2">
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-2 py-1.5 text-xs">Today</button>
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-2 py-1.5 text-xs" data-screen="calendar">Open Calendar</button>
</div>
</div>
<div className="divide-y divide-slate-200">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-sky-500 flex-shrink-0"></span>
<div>
<div className="text-sm text-slate-900">Soccer practice</div>
<div className="text-xs text-slate-500">Today · 5:00 PM–6:30 PM · Liam</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="users"></i> Shared</span>
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 px-2 py-1.5 text-xs">Details</button>
</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-pink-500 flex-shrink-0"></span>
<div>
<div className="text-sm text-slate-900">Dentist appointment</div>
<div className="text-xs text-slate-500">Tomorrow · 9:00 AM · Ava</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="lock"></i> Private</span>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-violet-500 flex-shrink-0"></span>
<div>
<div className="text-sm text-slate-900">Parent-teacher conference</div>
<div className="text-xs text-slate-500">Fri · 3:00 PM · Noah</div>
</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-0.5 text-[11px] text-slate-600"><i className="w-3.5 h-3.5" data-lucide="users"></i> Shared</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="grid grid-cols-2 gap-4">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-slate-500 mb-1">This month expenses</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">$428</div>
</div>
<i className="w-5 h-5 text-indigo-600" data-lucide="pie-chart"></i>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5"><i className="w-3.5 h-3.5" data-lucide="trending-up"></i> +8%</span>
<span className="text-slate-500">vs last month</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-xs text-slate-500 mb-1">Open tasks</div>
<div className="text-xl font-semibold tracking-tight text-slate-900">7</div>
</div>
<i className="w-5 h-5 text-indigo-600" data-lucide="list-checks"></i>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5"><i className="w-3.5 h-3.5" data-lucide="alert-circle"></i> 2 overdue</span>
</div>
</div>
</div>
<div className="mt-4 bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-600" data-lucide="activity"></i>
<h3 className="text-base font-medium tracking-tight text-slate-900">Recent activity</h3>
</div>
<button className="text-xs text-slate-600 hover:text-slate-800" data-screen="expenses">View all</button>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-indigo-600" data-lucide="wallet"></i>
</div>
<div className="text-sm min-w-0">
<div className="text-slate-900 truncate">Added $36.50 for school lunch</div>
<div className="text-xs text-slate-500">Split 50/50 · 30m ago</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-sky-600" data-lucide="calendar-plus"></i>
</div>
<div className="text-sm min-w-0">
<div className="text-slate-900 truncate">Created "Soccer practice"</div>
<div className="text-xs text-slate-500">Today 5:00 PM · Liam</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4 text-emerald-600" data-lucide="check-square"></i>
</div>
<div className="text-sm min-w-0">
<div className="text-slate-900 truncate">Completed "Pack lunch"</div>
<div className="text-xs text-slate-500">Today 8:10 AM</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-calendar">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Shared Calendar</h2>
<p className="text-sm text-slate-600">Color-coded per child, with private or shared visibility.</p>
</div>
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-2" id="prev-month"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<div className="min-w-[140px] text-center text-sm font-medium text-slate-900" id="month-label"></div>
<button className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-2" id="next-month"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
<button className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="new-event">
<i className="w-4 h-4" data-lucide="calendar-plus"></i> New Event
                </button>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl p-3 mb-4">
<div className="flex flex-wrap items-center gap-2">

<div className="flex items-center gap-2">
<button className="child-filter rounded-full bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 text-xs px-3 py-1" data-child="Ava">Ava</button>
<button className="child-filter rounded-full bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 text-xs px-3 py-1" data-child="Liam">Liam</button>
<button className="child-filter rounded-full bg-violet-50 hover:bg-violet-100 text-violet-700 border border-violet-200 text-xs px-3 py-1" data-child="Noah">Noah</button>
</div>
<span className="h-5 w-px bg-slate-200"></span>

<div className="relative">
<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs" id="assignee-btn">
<i className="w-3.5 h-3.5" data-lucide="user-round"></i><span id="assignee-label">Assignee: Any</span><i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden z-10" id="assignee-menu">
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-assignee="Any">Any</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-assignee="Mom">Mom</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-assignee="Dad">Dad</button>
</div>
</div>
<div className="relative">
<button className="flex items-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs" id="type-btn">
<i className="w-3.5 h-3.5" data-lucide="tag"></i><span id="type-label">Type: Any</span><i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="hidden absolute mt-1 w-40 bg-white border border-slate-200 rounded-lg shadow-md overflow-hidden z-10" id="type-menu">
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-type="Any">Any</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-type="School">School</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-type="Health">Health</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-type="Sports">Sports</button>
<button className="w-full text-left px-3 py-2 text-xs hover:bg-slate-50" data-type="Other">Other</button>
</div>
</div>
<span className="h-5 w-px bg-slate-200"></span>

<div className="flex items-center gap-2 text-xs">
<button className="vis-filter inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5" data-vis="shared">
<i className="w-3.5 h-3.5" data-lucide="users"></i> Shared
                  </button>
<button className="vis-filter inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-2.5 py-1.5" data-vis="private">
<i className="w-3.5 h-3.5" data-lucide="lock"></i> Private
                  </button>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="grid grid-cols-7 text-xs text-slate-500 border-b border-slate-200">
<div className="px-3 py-2 text-center">Sun</div>
<div className="px-3 py-2 text-center">Mon</div>
<div className="px-3 py-2 text-center">Tue</div>
<div className="px-3 py-2 text-center">Wed</div>
<div className="px-3 py-2 text-center">Thu</div>
<div className="px-3 py-2 text-center">Fri</div>
<div className="px-3 py-2 text-center">Sat</div>
</div>
<div className="grid grid-cols-7 auto-rows-[110px] sm:auto-rows-[130px] divide-x divide-y divide-slate-200" id="calendar-grid"></div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-expenses">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Expenses</h2>
<p className="text-sm text-slate-600">Track shared costs and visualize spending.</p>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs">
<button className="px-2 py-1 rounded-md bg-slate-100" id="chart-mode-child">Per child</button>
<button className="px-2 py-1 rounded-md" id="chart-mode-category">By category</button>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="add-expense">
<i className="w-4 h-4" data-lucide="plus"></i> Add Expense
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
<div className="lg:col-span-5">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<h3 className="text-base font-medium tracking-tight text-slate-900">Spending overview</h3>
<p className="text-xs text-slate-500">This month</p>
<div className="mt-3">
<div className="h-56">
<canvas id="expenseChart"></canvas>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Expense list</div>
<div className="text-xs text-slate-500">Split evenly unless specified</div>
</div>
<div className="divide-y divide-slate-200" id="expense-list">

</div>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-tasks">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Tasks</h2>
<p className="text-sm text-slate-600">Assign tasks, set deadlines, and mark complete.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="add-task">
<i className="w-4 h-4" data-lucide="plus-square"></i> New Task
              </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
<div className="lg:col-span-7">
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">To‑Do</div>
<div className="flex items-center gap-2 text-xs">
<span className="rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5">2 overdue</span>
<span className="rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5">5 open</span>
</div>
</div>
<div className="divide-y divide-slate-200" id="task-list">

</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<h3 className="text-base font-medium tracking-tight text-slate-900">My assignments</h3>
<div className="mt-3 space-y-3 text-sm" id="my-assignments">

</div>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-notes">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Notes</h2>
<p className="text-sm text-slate-600">Keep private or shared notes.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="add-note">
<i className="w-4 h-4" data-lucide="file-plus-2"></i> New Note
              </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
<div className="lg:col-span-6">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-slate-900">Note editor</h3>

<div className="flex items-center gap-2 text-xs">
<span className="text-slate-600">Privacy</span>
<button className="inline-flex items-center rounded-full border border-slate-300 bg-white px-1 py-0.5" id="note-privacy">
<span className="px-2 py-1 rounded-full bg-indigo-600 text-white">Shared</span>
<span className="px-2 py-1 rounded-full text-slate-600">Private</span>
</button>
</div>
</div>
<input className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 px-3 py-2 mb-3 text-sm" id="note-title" placeholder="Title"/>
<textarea className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 px-3 py-2 text-sm" id="note-body" placeholder="Write your note..." rows="6"></textarea>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="clock"></i> Autosaves every 10s
                    </div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-sm" id="save-note">
<i className="w-4 h-4" data-lucide="save"></i> Save
                    </button>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Notes list</div>
<div className="text-xs text-slate-500">Private notes visible only to you</div>
</div>
<div className="divide-y divide-slate-200" id="note-list">

</div>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-chat">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Chat</h2>
<p className="text-sm text-slate-600">Coordinate in real time.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white text-xs px-3 py-1.5"><i className="w-3.5 h-3.5" data-lucide="link"></i> WhatsApp <span className="ml-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-1">Pro</span></button>
<button className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white text-xs px-3 py-1.5"><i className="w-3.5 h-3.5" data-lucide="calendar-sync"></i> Google Calendar <span className="ml-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-1">Pro</span></button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl h-[520px] md:h-[600px] flex flex-col">
<div className="px-4 py-3 border-b border-slate-200 flex items-center gap-2">
<img alt="" className="h-7 w-7 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=60&amp;auto=format&amp;fit=crop"/>
<div className="text-sm">
<div className="text-slate-900 font-medium">Jordan &amp; Alex</div>
<div className="text-[11px] text-emerald-600">Online</div>
</div>
</div>
<div className="flex-1 overflow-auto p-4 space-y-3" id="chat-thread">

<div className="max-w-[70%] rounded-lg bg-slate-100 border border-slate-200 px-3 py-2 text-sm">
                  Reminder: Soccer practice today at 5 PM.
                </div>
<div className="max-w-[70%] ml-auto rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm">
                  Got it! I'll pick Liam up at 4:30.
                </div>
</div>
<div className="border-t border-slate-200 p-3">
<div className="flex items-center gap-2">
<button className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 p-2">
<i className="w-5 h-5 text-slate-700" data-lucide="paperclip"></i>
</button>
<input className="flex-1 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 px-3 py-2 text-sm" id="chat-input" placeholder="Write a message…"/>
<button className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm" id="chat-send">
                    Send
                  </button>
</div>
</div>
</div>
</section>

<section className="hidden px-4 py-6 md:px-6" id="screen-profile">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Profile &amp; Settings</h2>
<p className="text-sm text-slate-600">Manage children, co-parent, and preferences.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-sm">
<i className="w-4 h-4" data-lucide="file-down"></i> Export report <span className="ml-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-1">Pro</span>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
<div className="lg:col-span-7 space-y-4">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center gap-3 mb-3">
<img alt="" className="h-10 w-10 rounded-full border border-slate-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium text-slate-900">Jordan Lee</div>
<div className="text-xs text-slate-500">jordan@example.com</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-slate-600 mb-1">Name</label>
<input className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 px-3 py-2 text-sm" value="Jordan Lee"/>
</div>
<div>
<label className="block text-xs text-slate-600 mb-1">Email</label>
<input className="w-full rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 px-3 py-2 text-sm" value="jordan@example.com"/>
</div>
</div>
<div className="flex items-center justify-end mt-3">
<button className="rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-sm">Save changes</button>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-slate-900">Children</h3>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-1.5 text-sm" id="add-child">
<i className="w-4 h-4" data-lucide="plus"></i> Add
                    </button>
</div>
<div className="flex flex-wrap gap-2" id="children-list">
<span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1.5 text-sm text-pink-700">
<span className="h-2 w-2 rounded-full bg-pink-500"></span>Ava
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm text-sky-700">
<span className="h-2 w-2 rounded-full bg-sky-500"></span>Liam
                    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-sm text-violet-700">
<span className="h-2 w-2 rounded-full bg-violet-500"></span>Noah
                    </span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-base font-medium tracking-tight text-slate-900">Co-parent</h3>
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 text-sm" id="invite-parent">
<i className="w-4 h-4" data-lucide="send"></i> Invite
                    </button>
</div>
<div className="text-sm text-slate-600">Invite your co-parent by email to share calendars, tasks, and expenses.</div>
</div>
</div>
<div className="lg:col-span-5 space-y-4">
<div className="bg-white border border-slate-200 rounded-xl p-4">
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-3">Preferences</h3>
<div className="space-y-3 text-sm">

<div className="flex items-center justify-between">
<span className="text-slate-700">Push notifications</span>
<button className="toggle-btn inline-flex items-center h-6 w-11 rounded-full border border-slate-300 bg-slate-200 relative">
<span className="toggle-dot absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-700">Email summaries</span>
<button className="toggle-btn inline-flex items-center h-6 w-11 rounded-full border border-slate-300 bg-slate-200 relative">
<span className="toggle-dot absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all"></span>
</button>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-700">Theme</span>
<div className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 text-xs">
<button className="px-2 py-1 rounded-md bg-slate-100">Light</button>
<button className="px-2 py-1 rounded-md">Dark</button>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-xl p-4">
<h3 className="text-base font-medium tracking-tight text-slate-900 mb-3">Integrations</h3>
<div className="grid grid-cols-2 gap-2">
<button className="flex items-center justify-between rounded-lg border border-slate-200 bg-white hover:bg-slate-50 p-3 text-sm">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="calendar-sync"></i> Google Calendar</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[11px]">Pro</span>
</button>
<button className="flex items-center justify-between rounded-lg border border-slate-200 bg-white hover:bg-slate-50 p-3 text-sm">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="message-square-share"></i> WhatsApp</span>
<span className="rounded-full bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 text-[11px]">Pro</span>
</button>
</div>
</div>
</div>
</div>
</section>
</div>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200">
<div className="grid grid-cols-5">
<button className="nav-item flex flex-col items-center gap-1 py-2 text-xs text-slate-600" data-screen="dashboard">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i><span>Home</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 py-2 text-xs text-slate-600" data-screen="calendar">
<i className="w-5 h-5" data-lucide="calendar"></i><span>Calendar</span>
</button>
<button className="flex items-center justify-center -mt-5" id="mobile-add">
<div className="h-10 w-10 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white flex items-center justify-center shadow">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
</button>
<button className="nav-item flex flex-col items-center gap-1 py-2 text-xs text-slate-600" data-screen="tasks">
<i className="w-5 h-5" data-lucide="check-square"></i><span>Tasks</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 py-2 text-xs text-slate-600" data-screen="profile">
<i className="w-5 h-5" data-lucide="settings"></i><span>Profile</span>
</button>
</div>
</nav>
</main>
</div>
</div>

<div className="hidden fixed inset-0 z-20" id="add-modal">
<div className="absolute inset-0 bg-slate-900/40"></div>
<div className="absolute inset-0 flex items-end sm:items-center justify-center p-4">
<div className="w-full max-w-lg bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-700" data-lucide="plus"></i>
<span className="text-sm font-medium text-slate-900">Quick Add</span>
</div>
<button className="rounded-md border border-slate-200 bg-white hover:bg-slate-50 p-1.5" id="close-add">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-4">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-4 py-6 text-sm" data-quick="event">
<i className="w-6 h-6 text-sky-600" data-lucide="calendar-plus"></i>
<span className="font-medium">Event</span>
</button>
<button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-4 py-6 text-sm" data-quick="expense">
<i className="w-6 h-6 text-indigo-600" data-lucide="wallet"></i>
<span className="font-medium">Expense</span>
</button>
<button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-4 py-6 text-sm" data-quick="task">
<i className="w-6 h-6 text-emerald-600" data-lucide="check-square"></i>
<span className="font-medium">Task</span>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
