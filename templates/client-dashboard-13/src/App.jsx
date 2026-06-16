import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
bg: '#F9F8F6',
surface: '#FFFFFF',
primary: '#0F172A', // Slate 900
secondary: '#64748B', // Slate 500
accent: '#D97706', // Amber 600
accentLight: '#FEF3C7', // Amber 100
border: '#E2E8F0', // Slate 200
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="glass-header sticky top-0 z-50 w-full">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:box" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="tracking-tighter font-semibold text-lg text-primary">SKYPEAK</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-primary border-b border-primary pb-0.5" href="#">Overview</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">Billing</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">Hours</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">Projects</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">SEO</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">Requests</a>
<a className="text-xs font-medium text-secondary hover:text-primary transition-colors" href="#">Documents</a>
</nav>

<div className="flex items-center gap-4">
<div className="flex items-center gap-3 pl-4 border-l border-slate-200">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-sm ring-2 ring-white" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-xs font-medium hidden sm:block">Alex Sterling</span>
<button className="text-secondary hover:text-primary transition-colors">
<span className="iconify" data-icon="lucide:chevron-down" data-strokeWidth="1.5" data-width="14"></span>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-primary mb-1">Welcome, Alex</h1>
<p className="text-secondary text-sm">Here is your account overview &amp; activity for this month.</p>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-600">All Systems Operational</span>
</div>
<div className="h-4 w-px bg-slate-200"></div>
<span className="text-xs font-medium text-secondary">Oct 24, 2023</span>
<button className="relative text-secondary hover:text-primary transition-colors">
<span className="iconify" data-icon="lucide:bell" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-accent rounded-full border border-[#F9F8F6]"></span>
</button>
</div>
</div>

<div className="mb-10 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="iconify text-slate-400 group-focus-within:text-accent transition-colors" data-icon="lucide:search" data-strokeWidth="1.5" data-width="18"></span>
</div>
<input className="w-full bg-white border border-slate-200 text-primary text-sm rounded-xl py-4 pl-12 pr-12 focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 shadow-sm transition-all placeholder:text-slate-400" placeholder="Search projects, invoices, tasks or documents..." type="text"/>
<div className="absolute inset-y-0 right-0 pr-4 flex items-center">
<button className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-primary transition-colors">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6">


<div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] card-hoverable">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
<div className="text-secondary text-xs font-medium mb-1">Active Plan</div>
<div className="text-2xl font-semibold tracking-tight">Enterprise</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] card-hoverable">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
<span className="iconify" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<div className="text-secondary text-xs font-medium mb-1">Hours Remaining</div>
<div className="text-2xl font-semibold tracking-tight">24.5 <span className="text-base font-normal text-secondary">/ 40</span></div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] card-hoverable">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
<span className="iconify" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="18"></span>
</div>
</div>
<div className="text-secondary text-xs font-medium mb-1">Next Renewal</div>
<div className="text-2xl font-semibold tracking-tight">Nov 01</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] card-hoverable">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-rose-50 text-rose-600 rounded-lg">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">99.9%</span>
</div>
<div className="text-secondary text-xs font-medium mb-1">Website Uptime</div>
<div className="text-2xl font-semibold tracking-tight">Healthy</div>
</div>

<div className="col-span-1 lg:col-span-8 bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center mb-8">
<div>
<h2 className="text-lg font-semibold tracking-tight">Retainer Usage</h2>
<p className="text-xs text-secondary mt-1">Monthly breakdown of development &amp; design hours.</p>
</div>
<button className="text-xs font-medium text-accent hover:text-amber-700 transition-colors flex items-center gap-1">
                        Detailed Log <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>

<div className="mb-8">
<div className="flex justify-between text-sm font-medium mb-3">
<span>Used: 15.5 hrs</span>
<span className="text-secondary">Total: 40 hrs</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
<div className="bg-primary h-3 rounded-full w-[38%]" style={{transition: 'width 1s ease-in-out'}}></div>
</div>
</div>

<div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-50">
<div>
<div className="text-secondary text-xs mb-1">Design</div>
<div className="font-medium text-lg">8.2 hrs</div>
<div className="h-1 w-12 bg-amber-200 rounded-full mt-2"></div>
</div>
<div>
<div className="text-secondary text-xs mb-1">Development</div>
<div className="font-medium text-lg">5.1 hrs</div>
<div className="h-1 w-12 bg-blue-200 rounded-full mt-2"></div>
</div>
<div>
<div className="text-secondary text-xs mb-1">SEO/Maint</div>
<div className="font-medium text-lg">2.2 hrs</div>
<div className="h-1 w-12 bg-slate-200 rounded-full mt-2"></div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)] flex flex-col">
<h3 className="text-sm font-semibold tracking-tight mb-6 flex items-center gap-2">
<span className="iconify text-secondary" data-icon="lucide:list-checks" data-width="16"></span>
                    Recent Activity
                </h3>
<div className="space-y-6 relative flex-grow">

<div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100"></div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-slate-200 rounded-full"></div>
<p className="text-sm font-medium text-primary">Landing Page Redesign</p>
<p className="text-xs text-secondary mt-0.5">Completed • 4.5 hrs</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-accent rounded-full"></div>
<p className="text-sm font-medium text-primary">API Integration Fix</p>
<p className="text-xs text-secondary mt-0.5">In Progress • 2 hrs</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-slate-200 rounded-full"></div>
<p className="text-sm font-medium text-primary">Q3 SEO Audit</p>
<p className="text-xs text-secondary mt-0.5">Pending Review</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1.5 w-3.5 h-3.5 bg-white border-2 border-slate-200 rounded-full"></div>
<p className="text-sm font-medium text-primary">Security Patching</p>
<p className="text-xs text-secondary mt-0.5">Scheduled</p>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-semibold tracking-tight">SEO Performance</h3>
<span className="text-xs text-emerald-600 font-medium">+4 Positions</span>
</div>

<div className="h-32 w-full flex items-end justify-between gap-2 px-1">
<div className="w-full bg-slate-50 rounded-t-sm h-[40%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">40%</div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-[65%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">65%</div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-[50%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">50%</div>
</div>
<div className="w-full bg-slate-50 rounded-t-sm h-[75%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">75%</div>
</div>
<div className="w-full bg-amber-100/50 rounded-t-sm h-[85%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">85%</div>
</div>
<div className="w-full bg-accent rounded-t-sm h-[92%] group relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">92%</div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-secondary border-t border-slate-50 pt-3">
<div className="flex flex-col">
<span>Visibility</span>
<span className="text-primary font-medium text-sm">92%</span>
</div>
<div className="flex flex-col text-right">
<span>Traffic</span>
<span className="text-primary font-medium text-sm">12.5k</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.02)]">
<h3 className="text-sm font-semibold tracking-tight mb-6">System Health</h3>
<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:shield-check" data-width="20"></span>
<div>
<div className="text-xs font-medium text-primary">SSL Certificate</div>
<div className="text-[10px] text-secondary">Valid until 2024</div>
</div>
</div>

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:database" data-width="20"></span>
<div>
<div className="text-xs font-medium text-primary">Daily Backup</div>
<div className="text-[10px] text-secondary">3am (2GB)</div>
</div>
</div>

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="iconify text-emerald-500" data-icon="lucide:gauge" data-width="20"></span>
<div>
<div className="text-xs font-medium text-primary">Page Speed</div>
<div className="text-[10px] text-secondary">98/100 Mobile</div>
</div>
</div>

<div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-2">
<span className="iconify text-blue-500" data-icon="lucide:refresh-cw" data-width="20"></span>
<div>
<div className="text-xs font-medium text-primary">Plugins</div>
<div className="text-[10px] text-secondary">2 Updates Available</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-4 bg-primary text-white rounded-2xl p-6 shadow-lg relative overflow-hidden group">

<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-accent opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
<h3 className="text-sm font-medium text-slate-300 mb-1">Need something?</h3>
<h2 className="text-xl font-semibold mb-6">Submit a Request</h2>
<div className="space-y-3 mb-8">
<button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group/btn">
<span className="text-sm font-medium">New Project Scope</span>
<span className="iconify text-slate-400 group-hover/btn:text-white" data-icon="lucide:plus" data-width="16"></span>
</button>
<button className="w-full text-left px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-between group/btn">
<span className="text-sm font-medium">Report a Bug</span>
<span className="iconify text-slate-400 group-hover/btn:text-white" data-icon="lucide:alert-circle" data-width="16"></span>
</button>
</div>
<div className="flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs text-slate-400">Avg. response: <span className="text-white">2 hrs</span></span>
<a className="text-xs font-medium text-accent hover:text-white transition-colors" href="#">View All Requests</a>
</div>
</div>

<div className="col-span-1 lg:col-span-12 mt-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-primary">Recent Documents</h3>
<a className="text-xs text-secondary hover:text-primary transition-colors" href="#">View Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center group-hover:bg-rose-100 transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Oct_Invoice.pdf</h4>
<p className="text-[10px] text-secondary">2.4 MB • 2 days ago</p>
</div>
<span className="iconify text-slate-300 group-hover:text-primary transition-colors" data-icon="lucide:download" data-width="16"></span>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
<span className="iconify" data-icon="lucide:file-code" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Contract_Renewal.pdf</h4>
<p className="text-[10px] text-secondary">1.1 MB • 1 week ago</p>
</div>
<span className="iconify text-slate-300 group-hover:text-primary transition-colors" data-icon="lucide:download" data-width="16"></span>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
<span className="iconify" data-icon="lucide:image" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Brand_Assets_v2.zip</h4>
<p className="text-[10px] text-secondary">45 MB • 2 weeks ago</p>
</div>
<span className="iconify text-slate-300 group-hover:text-primary transition-colors" data-icon="lucide:download" data-width="16"></span>
</div>

<div className="group bg-white p-4 rounded-xl border border-slate-200 hover:border-accent/30 hover:shadow-sm transition-all cursor-pointer flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex-grow">
<h4 className="text-sm font-medium text-primary group-hover:text-accent transition-colors">Q3_Report.pdf</h4>
<p className="text-[10px] text-secondary">5.2 MB • 3 weeks ago</p>
</div>
<span className="iconify text-slate-300 group-hover:text-primary transition-colors" data-icon="lucide:download" data-width="16"></span>
</div>
</div>
</div>
</div>
</main>
<footer className="mt-auto py-8 border-t border-slate-200 bg-[#F9F8F6]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
                © 2023 SkyPeak Designs. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-[11px] text-secondary hover:text-primary transition-colors" href="#">Support</a>
<a className="text-[11px] text-secondary hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a className="text-[11px] text-secondary hover:text-primary transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
