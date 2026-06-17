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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 glass">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<span className="font-semibold text-xs tracking-tighter">M</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight">MentorUnion</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#overview">Overview</a>
<a className="hover:text-slate-900 transition-colors" href="#problem">Problem</a>
<a className="hover:text-slate-900 transition-colors" href="#solution">Solution</a>
<a className="hover:text-slate-900 transition-colors" href="#roles">Architecture</a>
<a className="hover:text-slate-900 transition-colors" href="#impact">Impact</a>
</div>
<a className="text-xs font-semibold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-colors" href="https://www.mentorunion.org" target="_blank">
                Visit Platform
            </a>
</div>
</nav>

<header className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 relative overflow-hidden subtle-grid">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-100/50 rounded-full blur-3xl -z-10 opacity-60"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">SaaS Product Case Study</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                Orchestrating mentorship <br className="hidden md:block"/> at institutional scale.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Transforming fragmented communication into a centralized, data-driven ecosystem connecting students with global industry leaders.
            </p>
</div>

<div className="max-w-6xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-4" id="overview">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">4-Role System</h3>
<p className="text-xs text-slate-500">Custom dashboards for every stakeholder.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Smart Scheduling</h3>
<p className="text-xs text-slate-500">Automated slot management &amp; syncing.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:chart-2-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Data Visibility</h3>
<p className="text-xs text-slate-500">End-to-end tracking of progress.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<iconify-icon className="text-indigo-600 mb-3" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">SaaS Scalability</h3>
<p className="text-xs text-slate-500">Subscription &amp; org management.</p>
</div>
</div>
</header>

<section className="py-20 px-6 bg-white border-y border-slate-200" id="problem">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">The Fragmentation Trap</h2>
<div className="space-y-6">
<p className="text-base text-slate-600 leading-relaxed">
                        Before MentorUnion, educational institutions and mentorship programs relied on a chaotic mix of disconnected tools. The "tech stack" often consisted of Calendly for booking, Google Sheets for tracking, WhatsApp for communication, and manual invoicing.
                    </p>
<p className="text-base text-slate-600 leading-relaxed">
                        This lack of infrastructure led to operational bottlenecks:
                    </p>
<ul className="space-y-3 mt-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700"><strong>Zero Visibility:</strong> Admins had no way to verify if sessions actually happened or what was discussed.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700"><strong>Scheduling Conflicts:</strong> Manual coordination resulted in overlapping calls and missed appointments.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700"><strong>No Quality Control:</strong> Absence of structured feedback loops meant bad mentorship experiences went undetected.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700"><strong>Scaling Issues:</strong> Onboarding new mentors or students required heavy manual administrative work.</span>
</li>
</ul>
</div>
</div>
<div className="relative">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white rounded-2xl -rotate-2 transform"></div>
<div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
<div className="flex flex-col gap-4 opacity-50 blur-[1px]">
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-200">
<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
<iconify-icon icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="h-2 w-32 bg-slate-200 rounded"></div>
</div>
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-200 ml-8">
<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="h-2 w-24 bg-slate-200 rounded"></div>
</div>
<div className="flex items-center gap-4 bg-white p-3 rounded-lg border border-slate-200">
<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="h-2 w-40 bg-slate-200 rounded"></div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-800">
                            Operational Black Box
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="solution">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">A Unified Mentorship Operating System</h2>
<p className="text-slate-600">
                MentorUnion replaces fragmented tools with a single, role-based platform designed for clarity, accountability, and growth.
            </p>
</div>

<div className="max-w-6xl mx-auto" id="roles">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-6">
<div className="bg-indigo-50 p-2 rounded-lg text-indigo-600">
<iconify-icon icon="solar:square-academic-cap-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">User Role</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The Mentee</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Focused on career clarity, booking ease, and tracking personal growth.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Browse mentor profiles
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> One-click slot booking
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> History &amp; Notes tracking
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-6">
<div className="bg-emerald-50 p-2 rounded-lg text-emerald-600">
<iconify-icon icon="solar:briefcase-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">User Role</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The Mentor</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Focused on availability management, earnings, and impact.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Manage available slots
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Earnings &amp; Invoice view
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Performance Badges
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-6">
<div className="bg-orange-50 p-2 rounded-lg text-orange-600">
<iconify-icon icon="solar:shield-user-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Management Role</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The Admin</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Operational oversight for specific departments or programs.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Bird’s eye session view
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Support ticket resolution
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Departmental usage stats
                        </li>
</ul>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-6">
<div className="bg-slate-100 p-2 rounded-lg text-slate-700">
<iconify-icon icon="solar:crown-line-linear" width="28"></iconify-icon>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-slate-400">System Role</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The Superadmin</h3>
<p className="text-sm text-slate-500 mb-6 min-h-[40px]">Platform-wide control, billing, and subscription management.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Subscription Plan Control
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Organization Allocation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-slate-900" icon="solar:check-circle-linear"></iconify-icon> Global billing limits
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
<div className="w-full md:w-1/3">
<div className="sticky top-32">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Complete Operational Clarity</h2>
<p className="text-slate-600 mb-8 leading-relaxed">
                        For institutional scalability, the Admin Dashboard serves as the command center. It eliminates the need to chase participants for updates.
                    </p>
<div className="space-y-6">
<div className="pl-4 border-l-2 border-indigo-600">
<h4 className="font-medium text-slate-900 text-sm">Real-time Session Tracking</h4>
<p className="text-xs text-slate-500 mt-1">Monitor upcoming, ongoing, and completed calls instantly.</p>
</div>
<div className="pl-4 border-l-2 border-slate-200 hover:border-slate-300 transition-colors">
<h4 className="font-medium text-slate-900 text-sm">Feedback Loop Integration</h4>
<p className="text-xs text-slate-500 mt-1">Both parties rate sessions, ensuring quality assurance.</p>
</div>
<div className="pl-4 border-l-2 border-slate-200 hover:border-slate-300 transition-colors">
<h4 className="font-medium text-slate-900 text-sm">Ticketing System</h4>
<p className="text-xs text-slate-500 mt-1">Built-in support resolution without leaving the platform.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-2/3">

<div className="bg-slate-50 border border-slate-200 rounded-xl shadow-xl overflow-hidden">

<div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 text-center">
<div className="bg-slate-100 rounded-md px-3 py-1 mx-auto w-64 text-[10px] text-slate-400 font-mono">dashboard.mentorunion.org</div>
</div>
</div>

<div className="flex h-[400px]">

<div className="w-16 md:w-48 border-r border-slate-200 bg-white flex flex-col p-4 hidden md:flex">
<div className="space-y-1">
<div className="bg-indigo-50 text-indigo-700 px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:home-linear"></iconify-icon> Overview
                                </div>
<div className="text-slate-500 px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Users
                                </div>
<div className="text-slate-500 px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:ticket-sale-linear"></iconify-icon> Tickets
                                </div>
</div>
</div>

<div className="flex-1 bg-slate-50 p-6 overflow-y-auto">
<div className="flex justify-between items-end mb-6">
<div>
<h3 className="text-sm font-semibold text-slate-900">Session Overview</h3>
<p className="text-[10px] text-slate-500">Last 30 days performance</p>
</div>
<div className="text-[10px] bg-white border border-slate-200 rounded px-2 py-1 text-slate-500">Export CSV</div>
</div>

<div className="grid grid-cols-3 gap-3 mb-6">
<div className="bg-white p-3 rounded-lg border border-slate-200">
<p className="text-[10px] text-slate-400 mb-1">Total Sessions</p>
<p className="text-lg font-semibold text-slate-900">1,248</p>
</div>
<div className="bg-white p-3 rounded-lg border border-slate-200">
<p className="text-[10px] text-slate-400 mb-1">Avg Rating</p>
<p className="text-lg font-semibold text-slate-900">4.8/5</p>
</div>
<div className="bg-white p-3 rounded-lg border border-slate-200">
<p className="text-[10px] text-slate-400 mb-1">Active Mentors</p>
<p className="text-lg font-semibold text-slate-900">142</p>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
<div className="px-4 py-2 border-b border-slate-200 bg-slate-50 flex justify-between">
<span className="text-[10px] font-medium text-slate-500">Recent Sessions</span>
<span className="text-[10px] text-slate-400">View All</span>
</div>
<div className="divide-y divide-slate-100">

<div className="px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
<div>
<p className="text-[11px] font-medium text-slate-900">Product Strategy</p>
<p className="text-[9px] text-slate-400">Sarah M. • Google</p>
</div>
</div>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100">Completed</span>
</div>

<div className="px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
<div>
<p className="text-[11px] font-medium text-slate-900">UX Portfolio Review</p>
<p className="text-[9px] text-slate-400">David K. • Spotify</p>
</div>
</div>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-100">Scheduled</span>
</div>

<div className="px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-slate-200"></div>
<div>
<p className="text-[11px] font-medium text-slate-900">Backend Systems</p>
<p className="text-[9px] text-slate-400">Priya R. • Amazon</p>
</div>
</div>
<span className="text-[9px] px-2 py-0.5 rounded-full bg-green-50 text-green-600 border border-green-100">Completed</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex justify-center">
<span className="text-xs text-slate-400 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> Dashboard concept visualization
                     </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-slate-300" id="impact">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Designed for SaaS Scale</h2>
<p className="text-slate-400 leading-relaxed mb-6">
                        MentorUnion isn't just a booking tool; it's a multi-tenant SaaS infrastructure. The Superadmin capabilities allow the platform to serve multiple institutions simultaneously while maintaining strict data isolation and custom billing cycles.
                    </p>
<div className="flex gap-4">
<div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-xs text-white">Multi-tenant Architecture</div>
<div className="px-4 py-2 bg-slate-800 rounded-full border border-slate-700 text-xs text-white">Role-Based Access Control</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<div className="text-3xl font-semibold text-white mb-1">100%</div>
<div className="text-xs text-slate-400">Digital Paper Trail</div>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
<div className="text-3xl font-semibold text-white mb-1">4x</div>
<div className="text-xs text-slate-400">Operational Efficiency</div>
</div>
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 col-span-2">
<h4 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon icon="solar:global-linear"></iconify-icon> Institutional Impact
                        </h4>
<p className="text-xs text-slate-400 leading-relaxed">
                            Allows universities and organizations to scale mentorship programs from 10 students to 10,000 without increasing administrative headcount.
                        </p>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h3 className="text-white text-lg font-medium mb-2">Future Roadmap</h3>
<p className="text-sm text-slate-500 max-w-md">
                        Upcoming features include AI-driven mentor matching algorithms, integrated video conferencing, and alumni network analytics.
                    </p>
</div>
<div>
<a className="inline-flex items-center justify-center bg-white text-slate-900 font-semibold px-6 py-3 rounded-full hover:bg-slate-100 transition-colors text-sm" href="https://www.mentorunion.org">
                        Request Demo
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-300 rounded-md flex items-center justify-center text-white">
<span className="font-semibold text-[10px] tracking-tighter text-slate-600">M</span>
</div>
<span className="font-semibold text-slate-400 text-sm tracking-tight">MentorUnion</span>
</div>
<p className="text-xs text-slate-400">
                © 2023 MentorUnion. Transforming mentorship globally.
            </p>
</div>
</footer>

    </>
  );
}
