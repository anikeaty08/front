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
      
<div className="min-h-screen" id="app">
<div className="sr-only focus-within:not-sr-only focus-within:block bg-black text-white">
<a className="inline-block p-3 underline text-sm" href="#main-content">Skip to main content</a>
</div>
<section className="min-h-screen flex flex-col bg-neutral-100" id="loginView">
<header className="border-b border-neutral-200 bg-black text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 gap-4">
<div className="flex items-center gap-4">
<div aria-hidden="true" className="h-14 w-14 rounded-full bg-[#FCD116] text-black flex items-center justify-center shadow-sm">
<div className="text-center leading-none">
<div className="text-xs font-medium tracking-[0.18em]">PNG</div>
<div className="text-lg font-semibold tracking-tight">MLIR</div>
</div>
</div>
<div>
<div className="text-sm uppercase tracking-[0.22em] text-[#FCD116]">Government Portal</div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">IRCMS - Industrial Relationship Case Management System</h1>
<p className="text-base text-neutral-300">Papua New Guinea Ministry of Labour &amp; Industrial Relations</p>
</div>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                Secure Access
              </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1.5">
<i className="h-4 w-4" data-lucide="file-text"></i>
                Official Use
              </span>
</div>
</div>
</div>
</header>
<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
<div className="grid lg:grid-cols-2 gap-8 xl:gap-12 items-stretch">
<section className="rounded-3xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
<div className="bg-gradient-to-br from-[#CE1126] via-[#a20d1d] to-black text-white p-6 sm:p-8">
<div className="flex items-start justify-between gap-6">
<div>
<p className="text-xs uppercase tracking-[0.22em] text-[#FCD116]">National Industrial Relations Platform</p>
<h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">Official case management for labour disputes, mediation, and compliance.</h2>
<p className="mt-4 text-base text-white/85 max-w-xl">A unified digital system for the Ministry to lodge, assess, investigate, mediate, resolve, and report industrial relationship cases across all provinces of Papua New Guinea.</p>
</div>
<div className="hidden sm:flex h-20 w-20 rounded-2xl bg-white/10 border border-white/15 items-center justify-center">
<i className="h-10 w-10" data-lucide="building-2"></i>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-[#FCD116]/20 text-black flex items-center justify-center">
<i className="h-5 w-5" data-lucide="folder-open"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Case Types</p>
<p className="text-lg font-medium">Termination, Disputes, Entitlements</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div>
<p className="text-xs text-neutral-500">User Roles</p>
<p className="text-lg font-medium">8 Access Profiles</p>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center">
<i className="h-5 w-5" data-lucide="chart-column"></i>
</div>
<div>
<p className="text-xs text-neutral-500">Reporting</p>
<p className="text-lg font-medium">Interactive analytics</p>
</div>
</div>
</div>
</div>
<div className="mt-8">
<h3 className="text-lg font-medium tracking-tight">Available role demos</h3>
<div className="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Super Admin" type="button">
<div className="font-medium">Super Admin</div>
<div className="text-neutral-500 text-base">Full system administration</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Director" type="button">
<div className="font-medium">Director</div>
<div className="text-neutral-500 text-base">Executive oversight and approvals</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Case Manager / Industrial Relations Officer" type="button">
<div className="font-medium">Case Manager / Industrial Relations Officer</div>
<div className="text-neutral-500 text-base">Case creation and investigations</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Legal Officer" type="button">
<div className="font-medium">Legal Officer</div>
<div className="text-neutral-500 text-base">Legal opinions and referrals</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Conciliator / Mediator" type="button">
<div className="font-medium">Conciliator / Mediator</div>
<div className="text-neutral-500 text-base">Sessions and settlements</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Employer Representative" type="button">
<div className="font-medium">Employer Representative</div>
<div className="text-neutral-500 text-base">Respond to disputes</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Employee / Worker (Complainant)" type="button">
<div className="font-medium">Employee / Worker (Complainant)</div>
<div className="text-neutral-500 text-base">Lodge and track complaints</div>
</button>
<button className="role-btn text-left rounded-2xl border border-neutral-200 bg-white hover:bg-neutral-50 p-4 focus:outline-none focus:ring-2 focus:ring-[#CE1126]" data-role="Read-Only / Auditor" type="button">
<div className="font-medium">Read-Only / Auditor</div>
<div className="text-neutral-500 text-base">View records and audit trail</div>
</button>
</div>
</div>
</div>
</section>
<section className="rounded-3xl bg-white border border-neutral-200 shadow-sm p-6 sm:p-8 self-center">
<div className="max-w-md mx-auto">
<div className="text-center">
<div className="mx-auto h-16 w-16 rounded-2xl bg-black text-white flex items-center justify-center">
<i className="h-7 w-7" data-lucide="lock-keyhole"></i>
</div>
<h2 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight">Sign in to IRCMS</h2>
<p className="mt-2 text-base text-neutral-600">Use your assigned ministry or stakeholder account to access the portal.</p>
</div>
<form aria-label="Login form" className="mt-8 space-y-5" id="loginForm">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="username">Email or Username</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
<i className="h-5 w-5" data-lucide="user"></i>
</span>
<input autocomplete="username" className="w-full rounded-2xl border border-neutral-300 bg-[#eaf1ff] pl-12 pr-4 py-3 text-sm outline-none focus:border-black focus:ring-2 focus:ring-black/5" id="username" name="username" placeholder="director@labour.gov.pg" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="password">Password</label>
<div className="relative">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
<i className="h-5 w-5" data-lucide="key-round"></i>
</span>
<input autocomplete="current-password" className="w-full rounded-2xl border border-neutral-300 bg-white pl-12 pr-12 py-3 text-sm outline-none focus:border-black focus:ring-2 focus:ring-black/5" id="password" name="password" placeholder="Enter password" required="" type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700" id="togglePassword" type="button">
<i className="h-5 w-5" data-lucide="eye"></i>
</button>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<label className="flex items-center gap-3 cursor-pointer select-none">
<input className="peer sr-only" id="rememberMe" type="checkbox"/>
<span className="h-6 w-11 rounded-full bg-neutral-300 peer-checked:bg-[#CE1126] relative transition">
<span className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-sm peer-checked:translate-x-5 transition"></span>
</span>
<span className="text-base text-neutral-600">Remember me</span>
</label>
<a className="text-sm text-[#CE1126] hover:underline" href="#">Forgot Password?</a>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-2" htmlFor="roleSelect">Login as Role</label>
<div className="relative">
<select aria-label="Select role" className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black focus:ring-2 focus:ring-black/5" id="roleSelect">
<option>Super Admin</option>
<option>Director</option>
<option>Case Manager / Industrial Relations Officer</option>
<option>Legal Officer</option>
<option>Conciliator / Mediator</option>
<option>Employer Representative</option>
<option>Employee / Worker (Complainant)</option>
<option>Read-Only / Auditor</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</span>
</div>
</div>
<button className="w-full rounded-2xl bg-[#CE1126] hover:bg-[#b90f22] text-white py-3 text-sm font-medium shadow-sm ring-1 ring-inset ring-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CE1126]" type="submit">
                    Sign In
                  </button>
<div className="rounded-2xl border border-[#FCD116]/60 bg-[#FCD116]/10 p-4 text-sm text-neutral-700">
<div className="flex gap-3">
<i className="h-5 w-5 shrink-0 mt-0.5 text-black" data-lucide="info"></i>
<div>
<p className="font-medium">Demo access</p>
<p className="text-neutral-600 mt-1 text-base">Any username and password will sign in. Select a role or click a role tile to load permissions.</p>
</div>
</div>
</div>
<p className="hidden rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-[#CE1126]" id="loginError"></p>
</form>
</div>
</section>
</div>
</div>
</main>
<footer className="border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-xs text-neutral-500">
          © 2026 Papua New Guinea Ministry of Labour &amp; Industrial Relations. All Rights Reserved.
        </div>
</footer>
</section>
<section className="hidden min-h-screen" id="appView">
<header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
<div className="flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-3 min-w-0">
<button aria-label="Open sidebar" className="lg:hidden h-10 w-10 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-700" id="mobileSidebarBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="h-11 w-11 rounded-2xl bg-black text-white flex items-center justify-center shrink-0">
<div className="text-center leading-none">
<div className="text-xs tracking-[0.16em]">PNG</div>
<div className="text-sm font-medium tracking-tight">IR</div>
</div>
</div>
<div className="min-w-0">
<div className="text-xs uppercase tracking-[0.18em] text-[#CE1126]">Papua New Guinea Ministry of Labour &amp; Industrial Relations</div>
<h1 className="text-lg sm:text-xl font-semibold tracking-tight truncate">IRCMS - Industrial Relationship Case Management System</h1>
</div>
</div>
<div className="hidden md:flex items-center gap-3 flex-1 max-w-xl mx-4">
<div className="relative w-full">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
<i className="h-4 w-4" data-lucide="search"></i>
</span>
<input className="w-full rounded-2xl border border-neutral-300 bg-neutral-50 pl-11 pr-4 py-2.5 text-sm outline-none focus:border-black focus:bg-white" id="globalSearch" placeholder="Global search by case ref, complainant, employer, province..." type="search"/>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button aria-label="Notifications" className="relative h-10 w-10 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-700 bg-white">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute -top-1 -right-1 min-w-5 h-5 rounded-full bg-[#CE1126] text-white text-xs flex items-center justify-center">6</span>
</button>
<button className="hidden sm:flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-3 py-2">
<div className="h-9 w-9 rounded-xl bg-[#FCD116]/30 text-black flex items-center justify-center font-medium text-sm" id="topAvatar">DM</div>
<div className="text-left">
<div className="text-sm font-medium" id="topUserName">David Moka</div>
<div className="text-xs text-neutral-500" id="topUserRole">Director</div>
</div>
</button>
<button aria-label="Sign out" className="h-10 w-10 rounded-xl border border-neutral-200 flex items-center justify-center text-neutral-700 bg-white" id="logoutBtn">
<i className="h-5 w-5" data-lucide="log-out"></i>
</button>
</div>
</div>
</header>
<div className="flex">
<aside className="fixed lg:sticky top-0 left-0 z-50 lg:z-30 h-screen w-80 max-w-[85vw] -translate-x-full lg:translate-x-0 transition-transform duration-200 border-r border-neutral-200 bg-black text-white overflow-y-auto" id="sidebar">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10 lg:hidden">
<div className="text-sm font-medium">Navigation</div>
<button className="h-9 w-9 rounded-xl border border-white/10 flex items-center justify-center" id="closeSidebarBtn">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 py-5">
<div className="rounded-2xl bg-white/5 border border-white/10 p-4">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-[#CE1126] text-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="badge-check"></i>
</div>
<div>
<div className="text-sm font-medium" id="sidebarUserName">David Moka</div>
<div className="text-xs text-white/70" id="sidebarUserRole">Director</div>
</div>
</div>
</div>
</div>
<nav aria-label="Sidebar navigation" className="px-3 pb-8">
<div className="space-y-1">
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium bg-white text-black" data-section="dashboard">
<i className="h-5 w-5" data-lucide="layout-dashboard"></i>
                Dashboard
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="cases">
<i className="h-5 w-5" data-lucide="folder-kanban"></i>
                Case Management
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="newCase">
<i className="h-5 w-5" data-lucide="folder-plus"></i>
                Lodge New Case
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="caseDetail">
<i className="h-5 w-5" data-lucide="file-check-2"></i>
                Case Detail
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="conciliation">
<i className="h-5 w-5" data-lucide="handshake"></i>
                Conciliation &amp; Mediation
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="documents">
<i className="h-5 w-5" data-lucide="files"></i>
                Documents
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="calendar">
<i className="h-5 w-5" data-lucide="calendar-days"></i>
                Hearings &amp; Appointments
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="reports">
<i className="h-5 w-5" data-lucide="chart-no-axes-column"></i>
                Reporting &amp; Analytics
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="notifications">
<i className="h-5 w-5" data-lucide="messages-square"></i>
                Communications
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="templates">
<i className="h-5 w-5" data-lucide="printer"></i>
                Forms &amp; Templates
              </button>
<button className="nav-btn admin-only w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="admin">
<i className="h-5 w-5" data-lucide="settings"></i>
                Settings &amp; Administration
              </button>
<button className="nav-btn w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/85 hover:bg-white/5" data-section="audit">
<i className="h-5 w-5" data-lucide="shield"></i>
                Audit Trail
              </button>
</div>
<div className="mt-8 rounded-2xl border border-[#FCD116]/30 bg-[#FCD116]/10 p-4 text-sm text-white">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-[#FCD116]" data-lucide="triangle-alert"></i>
<div>
<div className="font-medium text-[#FCD116]">SLA Monitor</div>
<div className="text-white/75 mt-1 text-base">4 cases amber, 2 cases overdue and escalated to Director.</div>
</div>
</div>
</div>
</nav>
</aside>
<div className="hidden fixed inset-0 bg-black/40 z-40 lg:hidden" id="sidebarOverlay"></div>
<main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 space-y-8" id="main-content">
<section className="section-view space-y-8" id="section-dashboard">
<div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
<div>
<p className="text-sm text-[#CE1126] font-medium">Dashboard Overview</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">National industrial relations case intelligence</h2>
<p className="mt-2 text-base text-neutral-600">Operational view of active cases, SLA risk, hearings, provincial distribution, and recent activity.</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="quick-nav rounded-2xl bg-[#CE1126] text-white px-4 py-3 text-sm font-medium" data-section-jump="newCase">Lodge New Case</button>
<button className="quick-nav rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium" data-section-jump="cases">Search Cases</button>
<button className="quick-nav rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium" data-section-jump="notifications">My Tasks</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Total Active Cases</p>
<p className="mt-2 text-3xl font-semibold tracking-tight" id="statActiveCases">10</p>
</div>
<div className="h-12 w-12 rounded-2xl bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center">
<i className="h-6 w-6" data-lucide="folder-open"></i>
</div>
</div>
<p className="mt-4 text-base text-neutral-500">Across all operational statuses excluding closed and withdrawn.</p>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Approaching SLA</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-[#b45309]">4</p>
</div>
<div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
<i className="h-6 w-6" data-lucide="alarm-clock"></i>
</div>
</div>
<p className="mt-4 text-base text-neutral-500">Amber flagged at 75% of case handling timeline.</p>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Overdue Cases</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-[#CE1126]">2</p>
</div>
<div className="h-12 w-12 rounded-2xl bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center">
<i className="h-6 w-6" data-lucide="octagon-alert"></i>
</div>
</div>
<p className="mt-4 text-base text-neutral-500">Auto-escalated to Director for intervention.</p>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-[0.18em] text-neutral-500">Upcoming Hearings</p>
<p className="mt-2 text-3xl font-semibold tracking-tight">7</p>
</div>
<div className="h-12 w-12 rounded-2xl bg-black/5 text-black flex items-center justify-center">
<i className="h-6 w-6" data-lucide="calendar-check-2"></i>
</div>
</div>
<p className="mt-4 text-base text-neutral-500">Hearings, conciliations, and mediation sessions this week.</p>
</div>
</div>
<div className="grid xl:grid-cols-3 gap-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Cases by Type</h3>
<p className="text-base text-neutral-500">Termination, Industrial Disputes, Entitlements</p>
</div>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">Export</button>
</div>
<div className="mt-6 flex flex-col md:flex-row items-center gap-8">
<div className="relative h-52 w-52 rounded-full" style={{background: 'conic-gradient(#CE1126 0 36%, #000000 36% 68%, #FCD116 68% 100%)'}}>
<div className="absolute inset-8 rounded-full bg-white flex flex-col items-center justify-center">
<div className="text-xs text-neutral-500">Total</div>
<div className="text-3xl font-semibold tracking-tight">10</div>
</div>
</div>
<div className="space-y-4 w-full">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#CE1126]"></span><span className="text-sm">Termination</span></div>
<span className="text-sm font-medium">4</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-black"></span><span className="text-sm">Industrial Disputes</span></div>
<span className="text-sm font-medium">3</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="h-3 w-3 rounded-full bg-[#FCD116]"></span><span className="text-sm">Entitlements</span></div>
<span className="text-sm font-medium">3</span>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Cases by Status</h3>
<p className="text-base text-neutral-500">Pipeline from lodgement to closure</p>
</div>
<div className="flex items-center gap-2">
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium bg-black text-white">Bar</button>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">Table</button>
</div>
</div>
<div className="mt-6">
<div className="h-64 flex items-end gap-2 sm:gap-3">
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-neutral-300" style={{height: '18%'}}></div><span className="text-xs text-center">New</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-neutral-400" style={{height: '28%'}}></div><span className="text-xs text-center">In Progress</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-[#FCD116]" style={{height: '20%'}}></div><span className="text-xs text-center">Mediation</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-[#F59E0B]" style={{height: '26%'}}></div><span className="text-xs text-center">Conciliation</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-black" style={{height: '12%'}}></div><span className="text-xs text-center">Court</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-emerald-500" style={{height: '34%'}}></div><span className="text-xs text-center">Resolved</span></div>
<div className="flex-1 flex flex-col items-center gap-2"><div className="w-full rounded-t-2xl bg-[#CE1126]" style={{height: '10%'}}></div><span className="text-xs text-center">Closed</span></div>
</div>
</div>
</div>
</div>
<div className="grid xl:grid-cols-3 gap-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Cases by Province</h3>
<p className="text-base text-neutral-500">Distribution across all 22 PNG provinces</p>
</div>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">View full report</button>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="space-y-4">
<div><div className="flex justify-between text-sm mb-1"><span>National Capital District</span><span>2</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#CE1126]" style={{width: '80%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Morobe</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-black" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Western Highlands</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#FCD116]" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Eastern Highlands</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#CE1126]" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Madang</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-black" style={{width: '40%'}}></div></div></div>
</div>
<div className="space-y-4">
<div><div className="flex justify-between text-sm mb-1"><span>Enga</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#FCD116]" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>East New Britain</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#CE1126]" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Southern Highlands</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-black" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Central</span><span>1</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#FCD116]" style={{width: '40%'}}></div></div></div>
<div><div className="flex justify-between text-sm mb-1"><span>Other Provinces</span><span>0</span></div><div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-neutral-300" style={{width: '10%'}}></div></div></div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Upcoming Calendar</h3>
<p className="text-base text-neutral-500">Hearings and meetings</p>
</div>
<i className="h-5 w-5 text-neutral-400" data-lucide="calendar"></i>
</div>
<div className="mt-6 space-y-4">
<div className="rounded-2xl border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Conciliation - DISP-2025-1002</p>
<p className="text-xs text-neutral-500">11/01/2026 · 10:00 AM · Waigani Office</p>
</div>
<span className="rounded-full bg-[#FCD116]/20 text-black px-2.5 py-1 text-xs font-medium">Tomorrow</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Hearing - TERM-2025-1004</p>
<p className="text-xs text-neutral-500">13/01/2026 · 1:30 PM · Port Moresby</p>
</div>
<span className="rounded-full bg-black/5 text-neutral-700 px-2.5 py-1 text-xs font-medium">In 3 days</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 p-4">
<div className="flex items-start justify-between gap-3">
<div>
<p className="text-sm font-medium">Mediation - ENT-2025-1007</p>
<p className="text-xs text-neutral-500">15/01/2026 · 9:00 AM · Lae Office</p>
</div>
<span className="rounded-full bg-[#CE1126]/10 text-[#CE1126] px-2.5 py-1 text-xs font-medium">Priority</span>
</div>
</div>
</div>
</div>
</div>
<div className="grid xl:grid-cols-3 gap-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm xl:col-span-2">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Recent Activity</h3>
<p className="text-base text-neutral-500">Last 10 system actions</p>
</div>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">Open audit trail</button>
</div>
<div className="mt-6 space-y-4" id="activityFeed"></div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight">Cases Nearing SLA</h3>
<p className="text-base text-neutral-500">Flagged for immediate attention</p>
</div>
<i className="h-5 w-5 text-[#CE1126]" data-lucide="triangle-alert"></i>
</div>
<div className="mt-6 space-y-4">
<div className="rounded-2xl border border-red-200 bg-red-50 p-4"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-medium">TERM-2025-1004</div><div className="text-xs text-neutral-600">Unfair dismissal · Southern Highlands</div></div><span className="rounded-full bg-[#CE1126] text-white px-2.5 py-1 text-xs font-medium">100%</span></div></div>
<div className="rounded-2xl border border-red-200 bg-red-50 p-4"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-medium">ENT-2025-1007</div><div className="text-xs text-neutral-600">Unpaid wages · Morobe</div></div><span className="rounded-full bg-[#CE1126] text-white px-2.5 py-1 text-xs font-medium">102%</span></div></div>
<div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-medium">DISP-2025-1002</div><div className="text-xs text-neutral-600">Wage dispute · NCD</div></div><span className="rounded-full bg-amber-500 text-white px-2.5 py-1 text-xs font-medium">78%</span></div></div>
<div className="rounded-2xl border border-amber-200 bg-amber-50 p-4"><div className="flex items-center justify-between gap-3"><div><div className="text-sm font-medium">TERM-2025-1009</div><div className="text-xs text-neutral-600">Redundancy · East New Britain</div></div><span className="rounded-full bg-amber-500 text-white px-2.5 py-1 text-xs font-medium">76%</span></div></div>
</div>
</div>
</div>
</section>
<section className="section-view hidden space-y-6" id="section-cases">
<div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
<div>
<p className="text-sm text-[#CE1126] font-medium">Case Registry</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Search, filter, and manage cases</h2>
<p className="mt-2 text-base text-neutral-600">Sortable registry with PNG-specific filters, role-aware visibility, and pagination.</p>
</div>
<div className="flex gap-3">
<button className="rounded-2xl bg-black text-white px-4 py-3 text-sm font-medium">Export PDF</button>
<button className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium">Export Excel</button>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="grid sm:grid-cols-2 xl:grid-cols-5 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Case Reference Number</label>
<input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black" id="filterRef" placeholder="TERM-2025-1001"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Complainant Name</label>
<input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black" id="filterComplainant" placeholder="John Kila"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Employer Name</label>
<input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-black" id="filterEmployer" placeholder="Ok Tedi Mining Ltd"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Case Type</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterType">
<option value="">All Types</option>
<option>Termination</option>
<option>Industrial Dispute</option>
<option>Entitlement</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Case Status</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterStatus">
<option value="">All Statuses</option>
<option>New/Lodged</option>
<option>Acknowledged</option>
<option>Under Review</option>
<option>Accepted</option>
<option>Investigation</option>
<option>Conciliation Scheduled</option>
<option>Under Conciliation</option>
<option>Mediation Scheduled</option>
<option>Under Mediation</option>
<option>Settlement Proposed</option>
<option>Settlement Agreed</option>
<option>Referred to Industrial Registrar</option>
<option>Referred to National Court</option>
<option>Resolved</option>
<option>Closed</option>
<option>Reopened</option>
<option>Withdrawn</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Province</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterProvince"></select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Assigned Officer</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterOfficer">
<option value="">All Officers</option>
<option>Mary Aihi</option>
<option>Peter Lohia</option>
<option>Lucy Wape</option>
<option>Daniel Kora</option>
<option>Agnes Pora</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Industry Sector</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterSector">
<option value="">All Sectors</option>
<option>Mining</option>
<option>Oil &amp; Gas</option>
<option>Agriculture</option>
<option>Forestry</option>
<option>Fisheries</option>
<option>Construction</option>
<option>Manufacturing</option>
<option>Retail</option>
<option>Hospitality</option>
<option>Transport</option>
<option>Banking &amp; Finance</option>
<option>Telecommunications</option>
<option>Education</option>
<option>Health</option>
<option>Government/Public Service</option>
<option>Security</option>
<option>Other</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Priority Level</label>
<div className="relative">
<select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-black" id="filterPriority">
<option value="">All Priorities</option>
<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Urgent</option>
</select>
<span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span>
</div>
</div>
<div className="flex items-end gap-3">
<button className="flex-1 rounded-2xl bg-[#CE1126] text-white px-4 py-3 text-sm font-medium" id="applyFilters">Apply Filters</button>
<button className="flex-1 rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium" id="clearFilters">Clear</button>
</div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="min-w-full">
<thead className="bg-neutral-50 border-b border-neutral-200">
<tr className="text-left text-xs uppercase tracking-[0.16em] text-neutral-500">
<th className="px-5 py-4">Reference</th>
<th className="px-5 py-4">Type</th>
<th className="px-5 py-4">Complainant</th>
<th className="px-5 py-4">Employer</th>
<th className="px-5 py-4">Province</th>
<th className="px-5 py-4">Status</th>
<th className="px-5 py-4">Priority</th>
<th className="px-5 py-4">Assigned Officer</th>
<th className="px-5 py-4">Amount</th>
<th className="px-5 py-4">SLA</th>
<th className="px-5 py-4">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200 bg-white" id="casesTableBody"></tbody>
</table>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4 border-t border-neutral-200 bg-neutral-50">
<p className="text-sm text-neutral-500" id="paginationInfo">Showing 1 to 10 of 10 results</p>
<div className="flex items-center gap-2">
<button className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm" id="prevPage">Previous</button>
<button className="rounded-xl bg-black text-white px-3 py-2 text-sm">1</button>
<button className="rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm" id="nextPage">Next</button>
</div>
</div>
</div>
</section>
<section className="section-view hidden space-y-6" id="section-newCase">
<div>
<p className="text-sm text-[#CE1126] font-medium">Lodge Complaint</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Create a new industrial relations case</h2>
<p className="mt-2 text-base text-neutral-600">Dynamic forms for Termination, Industrial Disputes, and Entitlements with validation and document capture.</p>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-5 shadow-sm">
<div className="grid lg:grid-cols-4 gap-4">
<button className="case-type-tab rounded-2xl border border-[#CE1126] bg-[#CE1126] text-white p-4 text-left" data-case-type="Termination" type="button">
<div className="text-sm font-medium">Termination Cases</div>
<div className="text-xs text-white/80 mt-1">TERM-2025-XXXX</div>
</button>
<button className="case-type-tab rounded-2xl border border-neutral-300 bg-white p-4 text-left" data-case-type="Industrial Dispute" type="button">
<div className="text-sm font-medium">Industrial Dispute Cases</div>
<div className="text-xs text-neutral-500 mt-1">DISP-2025-XXXX</div>
</button>
<button className="case-type-tab rounded-2xl border border-neutral-300 bg-white p-4 text-left" data-case-type="Entitlement" type="button">
<div className="text-sm font-medium">Entitlement Cases</div>
<div className="text-xs text-neutral-500 mt-1">ENT-2025-XXXX</div>
</button>
<div className="rounded-2xl border border-[#FCD116]/40 bg-[#FCD116]/10 p-4">
<div className="text-xs uppercase tracking-[0.18em] text-neutral-500">Auto Reference</div>
<div className="mt-2 text-lg font-medium tracking-tight" id="autoCaseRef">TERM-2026-1001</div>
</div>
</div>
</div>
<form className="space-y-6" id="newCaseForm">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-xl font-medium tracking-tight">Common Case Details</h3>
<div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Date Case Lodged</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" value="10/01/2026"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Assigned Case Officer</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>Mary Aihi</option><option>Peter Lohia</option><option>Lucy Wape</option><option>Daniel Kora</option><option>Agnes Pora</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Case Status</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>New/Lodged</option><option>Acknowledged</option><option>Under Review</option><option>Accepted</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Priority Level</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>Medium</option><option>Low</option><option>High</option><option>Urgent</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
</div>
</div>
<div className="case-form-block rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm space-y-6" id="form-Termination">
<h3 className="text-xl font-medium tracking-tight">Termination Case Details</h3>
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Complainant Full Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="John Kila"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Phone</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="+675 7123 4567"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Email</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="john.kila@email.com"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Postal Address</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="P.O. Box 145, Port Moresby"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Province</label><div className="relative"><select className="province-select appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">District</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Mendi-Munihu"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer/Company Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Highlands Security Services Ltd"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer Contact Details</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="+675 7345 6789, hr@highlandssec.com.pg"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer Industry Sector</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm sector-select"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employment Start Date</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="01/02/2021"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Termination Date</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="12/12/2025"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Type of Termination</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>Summary Dismissal</option><option>Unfair Dismissal</option><option>Redundancy</option><option>Retrenchment</option><option>Constructive Dismissal</option><option>End of Contract</option><option>Forced Resignation</option><option>Other</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Reason for Termination</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-28" placeholder="Provide details of termination circumstances"></textarea></div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Was Notice Given?</label>
<div className="flex gap-3">
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input checked="" name="noticeGiven" type="radio"/> Yes</label>
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input name="noticeGiven" type="radio"/> No</label>
</div>
</div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Notice Period</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="2 weeks"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Termination Letter Uploaded</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Upload PDF/DOC/JPG</div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employment Contract Uploaded</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Upload PDF/DOC</div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Supporting Documents</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Multiple files supported: PDF, DOC, DOCX, JPG, PNG, XLSX</div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Relief/Remedy Sought</label><div className="grid grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Reinstatement</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Compensation</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Back Pay</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Notice Pay</label>
</div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Amount Claimed (PGK)</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="K 18,500.00"/></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Case Summary / Description</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-32" placeholder="Rich text style summary of the complaint, alleged breaches, and requested outcome"></textarea></div>
</div>
</div>
<div className="case-form-block hidden rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm space-y-6" id="form-Industrial Dispute">
<h3 className="text-xl font-medium tracking-tight">Industrial Dispute Case Details</h3>
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Dispute Type</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>Wage Dispute</option><option>Working Conditions</option><option>Union Recognition</option><option>Collective Bargaining</option><option>Lockout</option><option>Strike</option><option>Workplace Safety</option><option>Discrimination</option><option>Harassment</option><option>Unfair Labour Practice</option><option>Breach of Employment Act</option><option>Breach of Industrial Relations Act</option><option>Other</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Individual or Collective</label>
<div className="flex gap-3">
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input checked="" name="disputeNature" type="radio"/> Individual</label>
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input name="disputeNature" type="radio"/> Collective</label>
</div>
</div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Number of Workers Affected</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="85"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Date Dispute Arose</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="04/12/2025"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Complainant Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="PNG Maritime Union"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Contact</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="+675 7012 3344"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Province</label><div className="relative"><select className="province-select appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">District</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Moresby North-West"/></div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2">Union Involved?</label>
<div className="flex gap-3">
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input checked="" name="unionInvolved" type="radio"/> Yes</label>
<label className="flex items-center gap-2 rounded-2xl border border-neutral-300 px-4 py-3 text-sm"><input name="unionInvolved" type="radio"/> No</label>
</div>
</div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Union Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Maritime &amp; Transport Workers Union"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer/Company Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Pacific Marine Logistics Ltd"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer Details</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Port Moresby, +675 7211 9900"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Industry Sector</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm sector-select"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div className="md:col-span-3"><label className="block text-xs font-medium text-neutral-500 mb-2">Description of Dispute</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-32" placeholder="Describe issues, actions, positions of parties, and operational impact"></textarea></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Steps Already Taken to Resolve</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-28" placeholder="Meetings, demand letters, workplace discussions"></textarea></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Relevant Legislation Referenced</label><div className="grid sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Employment Act 1978</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Industrial Relations Act 1962</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Industrial Organizations Act 1962</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Workers Compensation Act</label>
</div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Supporting Documents</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Upload multiple supporting documents</div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Relief/Remedy Sought</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-28" placeholder="Wage review, safety compliance, reinstatement of negotiations, etc."></textarea></div>
</div>
</div>
<div className="case-form-block hidden rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm space-y-6" id="form-Entitlement">
<h3 className="text-xl font-medium tracking-tight">Entitlement Case Details</h3>
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Complainant Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Maria Kone"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Contact</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="+675 7567 8899"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Province</label><div className="relative"><select className="province-select appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">District</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Lae Urban"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer/Company Name</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Morobe Retail Holdings"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employer Details</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="Top Town, Lae, +675 7455 6711"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Industry Sector</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm sector-select"></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employment Period</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="03/05/2022 - 16/11/2025"/></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Entitlement Type</label><div className="grid sm:grid-cols-2 gap-2 text-sm">
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Unpaid Wages</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Overtime Pay</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Leave Entitlements</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input checked="" type="checkbox"/> Superannuation</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Severance Pay</label>
<label className="flex items-center gap-2 rounded-xl border border-neutral-300 px-3 py-2"><input type="checkbox"/> Housing Allowance</label>
</div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Amount Claimed (PGK)</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="K 7,850.00"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Period of Claim</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" placeholder="01/07/2025 - 30/11/2025"/></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Description of Entitlement Issue</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-32" placeholder="Describe unpaid wages, leave balances, superannuation deductions, or other benefits owed"></textarea></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Pay Slips Uploaded</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Upload files</div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Employment Contract</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Upload contract</div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Supporting Documents</label><div className="rounded-2xl border-2 border-dashed border-neutral-300 p-4 text-sm text-neutral-500">Multiple files supported</div></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Calculation Breakdown</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-28" placeholder="Itemize wages, periods, rates, and deductions"></textarea></div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-3 justify-end">
<button className="rounded-2xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium" type="button">Save Draft</button>
<button className="rounded-2xl bg-[#CE1126] text-white px-5 py-3 text-sm font-medium" type="submit">Submit Case</button>
</div>
</form>
</section>
<section className="section-view hidden space-y-6" id="section-caseDetail">
<div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4">
<div>
<p className="text-sm text-[#CE1126] font-medium">Case File</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">TERM-2025-1004</h2>
<p className="mt-2 text-base text-neutral-600">Unfair dismissal complaint from Southern Highlands involving Highlands Security Services Ltd.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="rounded-full bg-red-100 text-[#CE1126] px-3 py-2 text-sm font-medium">Urgent</span>
<span className="rounded-full bg-amber-100 text-amber-800 px-3 py-2 text-sm font-medium">Under Conciliation</span>
<button className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium">Print Case</button>
</div>
</div>
<div className="grid xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight">Workflow Timeline</h3>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">Update Status</button>
</div>
<div className="mt-6 overflow-x-auto">
<div className="min-w-[70rem] flex items-start gap-2">
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="check-circle-2"></i></div><div className="h-1 bg-black mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">New/Lodged</div><div className="text-xs text-neutral-500">02/12/2025</div></div></div>
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="check-circle-2"></i></div><div className="h-1 bg-black mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Acknowledged</div><div className="text-xs text-neutral-500">03/12/2025</div></div></div>
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="check-circle-2"></i></div><div className="h-1 bg-black mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Under Review</div><div className="text-xs text-neutral-500">05/12/2025</div></div></div>
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="check-circle-2"></i></div><div className="h-1 bg-black mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Accepted</div><div className="text-xs text-neutral-500">06/12/2025</div></div></div>
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="check-circle-2"></i></div><div className="h-1 bg-black mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Investigation</div><div className="text-xs text-neutral-500">10/12/2025</div></div></div>
<div className="flex-1"><div className="h-10 w-10 rounded-full bg-[#FCD116] text-black flex items-center justify-center mx-auto border border-black/10"><i className="h-5 w-5" data-lucide="clock-3"></i></div><div className="h-1 bg-[#FCD116] mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Under Conciliation</div><div className="text-xs text-neutral-500">08/01/2026</div></div></div>
<div className="flex-1 opacity-50"><div className="h-10 w-10 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="pause-circle"></i></div><div className="h-1 bg-neutral-200 mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Resolved</div><div className="text-xs text-neutral-500">Pending</div></div></div>
<div className="flex-1 opacity-50"><div className="h-10 w-10 rounded-full bg-neutral-200 text-neutral-500 flex items-center justify-center mx-auto"><i className="h-5 w-5" data-lucide="pause-circle"></i></div><div className="h-1 bg-neutral-200 mt-3"></div><div className="mt-3 text-center"><div className="text-xs font-medium">Closed</div><div className="text-xs text-neutral-500">Pending</div></div></div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-xl font-medium tracking-tight">Case Overview</h3>
<div className="mt-6 grid md:grid-cols-2 gap-4 text-sm">
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Complainant</div><div className="mt-1 font-medium">John Kila</div><div className="mt-1 text-neutral-600 text-base">+675 7123 4567 · john.kila@email.com</div><div className="text-neutral-600 text-base">Southern Highlands · Mendi-Munihu</div></div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Employer</div><div className="mt-1 font-medium">Highlands Security Services Ltd</div><div className="mt-1 text-neutral-600 text-base">Security Sector · +675 7345 6789</div><div className="text-neutral-600 text-base">HR: hr@highlandssec.com.pg</div></div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Claim</div><div className="mt-1 font-medium">Unfair Dismissal</div><div className="mt-1 text-neutral-600 text-base">Relief sought: Reinstatement, Compensation</div><div className="text-neutral-600 text-base">Amount claimed: K 18,500.00</div></div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Legal Reference</div><div className="mt-1 font-medium">Employment Act 1978</div><div className="mt-1 text-neutral-600 text-base">Industrial Relations Act 1962</div><div className="text-neutral-600 text-base">Case officer: Mary Aihi</div></div>
</div>
<div className="mt-6 rounded-2xl border border-neutral-200 p-4">
<div className="text-xs text-neutral-500">Summary</div>
<p className="mt-2 text-base leading-7 text-neutral-700">The complainant alleges unfair dismissal following a workplace incident in December 2025. He states no proper disciplinary hearing was conducted and seeks reinstatement or compensation in lieu, with reference to procedural fairness provisions under the Employment Act 1978.</p>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight">Case Notes &amp; Conversation</h3>
<button className="rounded-xl bg-black text-white px-3 py-2 text-xs font-medium">Add Note</button>
</div>
<div className="mt-6 space-y-4">
<div className="flex gap-3"><div className="h-10 w-10 rounded-xl bg-[#CE1126]/10 text-[#CE1126] flex items-center justify-center shrink-0">MA</div><div className="flex-1 rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="flex items-center justify-between gap-3"><div className="text-sm font-medium">Mary Aihi</div><div className="text-xs text-neutral-500">08/01/2026 10:15</div></div><p className="mt-2 text-base text-neutral-700">Conciliation notice issued to both parties for 11/01/2026 at Waigani office. Employer confirmed attendance by email.</p></div></div>
<div className="flex gap-3"><div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center shrink-0">LK</div><div className="flex-1 rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="flex items-center justify-between gap-3"><div className="text-sm font-medium">Lucy Kora · Legal Officer</div><div className="text-xs text-neutral-500">07/01/2026 14:40</div></div><p className="mt-2 text-base text-neutral-700">Preliminary legal opinion indicates potential non-compliance with notice and procedural fairness obligations.</p></div></div>
</div>
</div>
</div>
<div className="space-y-6">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight">SLA Status</h3>
<div className="mt-5">
<div className="flex justify-between text-sm mb-2"><span>30-day timeline</span><span className="font-medium text-[#CE1126]">100% used</span></div>
<div className="h-3 rounded-full bg-neutral-200"><div className="h-3 rounded-full bg-[#CE1126]" style={{width: '100%'}}></div></div>
<p className="mt-3 text-base text-neutral-600">Auto-escalated to Director on 09/01/2026.</p>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight">Assigned Team</h3>
<div className="mt-5 space-y-3 text-sm">
<div className="flex items-center justify-between"><span>Case Officer</span><span className="font-medium">Mary Aihi</span></div>
<div className="flex items-center justify-between"><span>Legal Officer</span><span className="font-medium">Lucy Wape</span></div>
<div className="flex items-center justify-between"><span>Conciliator</span><span className="font-medium">Daniel Kora</span></div>
<div className="flex items-center justify-between"><span>Director Escalation</span><span className="font-medium">David Moka</span></div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight">Related Documents</h3>
<div className="mt-5 space-y-3">
<div className="rounded-2xl border border-neutral-200 p-3 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="h-10 w-10 rounded-xl bg-red-100 text-[#CE1126] flex items-center justify-center"><i className="h-5 w-5" data-lucide="file-text"></i></div><div className="min-w-0"><div className="text-sm font-medium truncate">Termination Letter.pdf</div><div className="text-xs text-neutral-500">Version 2 · PDF</div></div></div><button className="text-sm text-[#CE1126]">View</button></div>
<div className="rounded-2xl border border-neutral-200 p-3 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="h-10 w-10 rounded-xl bg-black/5 text-black flex items-center justify-center"><i className="h-5 w-5" data-lucide="file-text"></i></div><div className="min-w-0"><div className="text-sm font-medium truncate">Employment Contract.docx</div><div className="text-xs text-neutral-500">Version 1 · DOCX</div></div></div><button className="text-sm text-[#CE1126]">View</button></div>
<div className="rounded-2xl border border-neutral-200 p-3 flex items-center justify-between gap-3"><div className="flex items-center gap-3 min-w-0"><div className="h-10 w-10 rounded-xl bg-[#FCD116]/20 text-black flex items-center justify-center"><i className="h-5 w-5" data-lucide="file-text"></i></div><div className="min-w-0"><div className="text-sm font-medium truncate">Conciliation Notice.pdf</div><div className="text-xs text-neutral-500">Version 1 · PDF</div></div></div><button className="text-sm text-[#CE1126]">View</button></div>
</div>
</div>
</div>
</div>
</section>
<section className="section-view hidden space-y-6" id="section-conciliation">
<div>
<p className="text-sm text-[#CE1126] font-medium">Conciliation &amp; Mediation</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Session scheduling and outcomes</h2>
<p className="mt-2 text-base text-neutral-600">Manage conciliation sessions, mediation proceedings, minutes, outcomes, and certificates.</p>
</div>
<div className="grid xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight">Schedule Session</h3>
<span className="rounded-full bg-black text-white px-3 py-1.5 text-xs font-medium">Case: DISP-2025-1002</span>
</div>
<div className="mt-6 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Session Type</label><div className="relative"><select className="appearance-none w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 pr-10 text-sm"><option>Conciliation</option><option>Mediation</option></select><span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400"><i className="h-4 w-4" data-lucide="chevron-down"></i></span></div></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Date</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" value="11/01/2026"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Time</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" value="10:00 AM"/></div>
<div><label className="block text-xs font-medium text-neutral-500 mb-2">Venue</label><input className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm" value="Waigani Office, Meeting Room 2"/></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Attendees</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-24">Complainant representative, employer HR manager, case officer, conciliator</textarea></div>
<div className="md:col-span-2"><label className="block text-xs font-medium text-neutral-500 mb-2">Expected Agenda</label><textarea className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm min-h-24">Opening positions, facts review, legal issues, proposed settlement pathway</textarea></div>
</div>
<div className="mt-5 flex gap-3 justify-end">
<button className="rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm font-medium">Generate Notice</button>
<button className="rounded-2xl bg-[#CE1126] text-white px-4 py-3 text-sm font-medium">Schedule Session</button>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<h3 className="text-lg font-medium tracking-tight">Session Metrics</h3>
<div className="mt-6 space-y-4">
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Sessions this month</div><div className="mt-2 text-3xl font-semibold tracking-tight">18</div></div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Settlement success rate</div><div className="mt-2 text-3xl font-semibold tracking-tight">72%</div></div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4"><div className="text-xs text-neutral-500">Certificates generated</div><div className="mt-2 text-3xl font-semibold tracking-tight">11</div></div>
</div>
</div>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-medium tracking-tight">Recorded Outcomes</h3>
<button className="rounded-xl border border-neutral-200 px-3 py-2 text-xs font-medium">Generate Certificate</button>
</div>
<div className="mt-6 overflow-x-auto">
<table className="min-w-full">
<thead className="bg-neutral-50 border-y border-neutral-200">
<tr className="text-left text-xs uppercase tracking-[0.16em] text-neutral-500">
<th className="px-4 py-3">Case</th>
<th className="px-4 py-3">Type</th>
<th className="px-4 py-3">Date</th>
<th className="px-4 py-3">Venue</th>
<th className="px-4 py-3">Outcome</th>
<th className="px-4 py-3">Sessions</th>
<th className="px-4 py-3">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-200">
<tr><td className="px-4 py-4 text-sm font-medium">DISP-2025-1002</td><td className="px-4 py-4 text-sm">Conciliation</td><td className="px-4 py-4 text-sm">11/01/202</td></tr></tbody></table></div></div></section></main></div></section></div>
    </>
  );
}
