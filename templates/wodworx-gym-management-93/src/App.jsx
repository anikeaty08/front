import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#151b2b',
900: '#0f172a',
950: '#020617',
},
brand: {
500: '#6366f1',
600: '#4f46e5',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] left-[20%] w-[40rem] h-[40rem] bg-brand-500/10 rounded-full blur-3xl opacity-40"></div>
<div className="absolute top-[10%] right-[10%] w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-3xl opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-brand-500 to-teal-400 rounded-sm flex items-center justify-center">
<span className="text-slate-950 font-semibold text-xs tracking-tighter">W</span>
</div>
<span className="text-slate-200 font-medium tracking-tight text-sm group-hover:text-white transition-colors">Wodworx</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal hover:text-white transition-colors" href="#features">Features</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#schedule">Schedule</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#customers">Customers</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-normal hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-slate-100 text-slate-950 px-4 py-2 rounded-full hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#">
                    Start Trial
                </a>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 text-center mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in">
<span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-300">Wodworx 2.0 is live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                Power your box <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600">with absolute precision.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The operating system for high-performance gyms. Manage athletes, schedule classes, and process payments without the friction.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-medium text-sm transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2">
                    Get Started 
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full bg-transparent border border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white font-medium text-sm transition-all flex items-center gap-2 group">
<span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="16" data-icon="lucide:play-circle" data-width="16"></span>
                    Watch Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto mask-gradient">
<div className="glass-panel rounded-t-xl border-b-0 p-1 md:p-3 overflow-hidden shadow-2xl shadow-brand-900/20">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
</div>
<div className="ml-4 h-5 w-64 bg-slate-800/50 rounded flex items-center px-2">
<span className="text-[10px] text-slate-500">app.wodworx.io/dashboard</span>
</div>
</div>

<div className="grid grid-cols-12 gap-0 bg-slate-900/80">

<div className="hidden md:block col-span-2 border-r border-white/5 h-[400px] p-4">
<div className="space-y-4">
<div className="h-8 w-8 rounded bg-brand-500/20 flex items-center justify-center text-brand-400">
<span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span>
</div>
<div className="space-y-1">
<div className="h-8 w-full rounded bg-white/5 flex items-center px-3 gap-3 border border-white/5">
<span className="iconify text-slate-400" data-icon="lucide:calendar" data-width="14"></span>
<div className="h-2 w-16 bg-slate-600 rounded-sm opacity-50"></div>
</div>
<div className="h-8 w-full rounded hover:bg-white/5 flex items-center px-3 gap-3 opacity-60">
<span className="iconify text-slate-500" data-icon="lucide:users" data-width="14"></span>
<div className="h-2 w-12 bg-slate-700 rounded-sm"></div>
</div>
<div className="h-8 w-full rounded hover:bg-white/5 flex items-center px-3 gap-3 opacity-60">
<span className="iconify text-slate-500" data-icon="lucide:credit-card" data-width="14"></span>
<div className="h-2 w-14 bg-slate-700 rounded-sm"></div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-10 p-6">
<div className="flex justify-between items-end mb-6">
<div>
<div className="h-3 w-24 bg-slate-700 rounded mb-2"></div>
<div className="h-6 w-48 bg-slate-600 rounded"></div>
</div>
<div className="h-8 w-24 bg-brand-600 rounded text-xs flex items-center justify-center text-white">New Class +</div>
</div>

<div className="grid grid-cols-4 gap-4">

<div className="col-span-4 md:col-span-1 border border-white/5 bg-white/[0.02] rounded p-4">
<div className="flex justify-between mb-3">
<span className="text-[10px] text-brand-400 font-medium tracking-tight">06:00 AM</span>
<span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
</div>
<div className="h-4 w-20 bg-slate-600 rounded mb-2"></div>
<div className="flex -space-x-2 mt-4">
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900 flex items-center justify-center text-[8px] text-white">+12</div>
</div>
</div>

<div className="col-span-4 md:col-span-1 border border-white/5 bg-white/[0.02] rounded p-4">
<div className="flex justify-between mb-3">
<span className="text-[10px] text-slate-500 font-medium tracking-tight">07:30 AM</span>
<span className="h-1.5 w-1.5 rounded-full bg-slate-700"></span>
</div>
<div className="h-4 w-24 bg-slate-700 rounded mb-2"></div>
<div className="flex -space-x-2 mt-4">
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-900"></div>
</div>
</div>

<div className="col-span-4 md:col-span-1 border border-white/5 bg-white/[0.02] rounded p-4 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-500/5"></div>
<div className="flex justify-between mb-3 relative z-10">
<span className="text-[10px] text-brand-400 font-medium tracking-tight">05:00 PM</span>
<span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span>
</div>
<div className="h-4 w-16 bg-slate-600 rounded mb-2 relative z-10"></div>
<div className="flex -space-x-2 mt-4 relative z-10">
<div className="w-6 h-6 rounded-full bg-slate-500 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-300 border border-slate-900"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900 flex items-center justify-center text-[8px] text-white">+24</div>
</div>
</div>

<div className="col-span-4 md:col-span-1 border border-dashed border-white/10 bg-transparent rounded p-4 flex items-center justify-center flex-col gap-2 opacity-50">
<span className="iconify text-slate-600" data-icon="lucide:plus" data-width="20"></span>
</div>
</div>

<div className="mt-4 border border-white/5 bg-white/[0.02] rounded p-4 h-32 flex items-end justify-between gap-1">
<div className="w-full bg-brand-500/20 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-brand-500/40 rounded-t-sm h-[80%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[10px] text-white py-0.5 px-1.5 rounded border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        24 Attendees
                                    </div>
</div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[50%]"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-brand-500/20 rounded-t-sm h-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by 500+ Boxes Worldwide</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:triangle" data-width="20"></span>
<span className="font-bold text-lg tracking-tight">APEX</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:hexagon" data-width="20"></span>
<span className="font-bold text-lg tracking-tight">IRONCLAD</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
<span className="font-bold text-lg tracking-tight">VOLTAGE</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:anchor" data-width="20"></span>
<span className="font-bold text-lg tracking-tight">HARBOR</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:gem" data-width="20"></span>
<span className="font-bold text-lg tracking-tight">ELITE</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">Everything you need <br/>to run a tight ship.</h2>
<p className="text-slate-400 text-lg font-light max-w-xl">Designed for speed and reliability. Every interaction is optimized for the busy gym owner.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:calendar-clock" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 text-brand-400">
<span className="iconify" data-icon="lucide:calendar" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Smart Scheduling</h3>
<p className="text-sm text-slate-500 leading-relaxed">Drag-and-drop class builder with recurring rules, capacity limits, and waitlist automation.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:users" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 text-teal-400">
<span className="iconify" data-icon="lucide:user-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Athlete CRM</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive profiles, attendance tracking, and performance milestones in one view.</p>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-height="120" data-icon="lucide:zap" data-width="120"></span>
</div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 text-indigo-400">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Workout Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Built-in WOD tracking. Let members log scores, view leaderboards, and track PRs effortlessly.</p>
</div>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 text-pink-400">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Automated Payments</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Forget chasing invoices. Set up recurring memberships, drop-in fees, and merchandise sales. Payments are processed instantly and securely.</p>
<a className="text-sm text-white border-b border-white/20 pb-0.5 hover:border-white transition-colors inline-flex items-center gap-1" href="#">
                                Learn about billing <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
<div className="relative h-full w-full min-h-[150px] bg-slate-950/50 rounded-lg border border-white/5 p-4 flex flex-col justify-center gap-3">
<div className="flex justify-between items-center px-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-700"></div>
<div className="flex flex-col">
<div className="h-2 w-20 bg-slate-600 rounded"></div>
<div className="h-1.5 w-12 bg-slate-800 rounded mt-1"></div>
</div>
</div>
<div className="text-green-400 text-xs font-mono">+$150.00</div>
</div>
<div className="flex justify-between items-center px-2 opacity-50">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-700"></div>
<div className="flex flex-col">
<div className="h-2 w-24 bg-slate-600 rounded"></div>
<div className="h-1.5 w-10 bg-slate-800 rounded mt-1"></div>
</div>
</div>
<div className="text-green-400 text-xs font-mono">+$45.00</div>
</div>
<div className="flex justify-between items-center px-2 opacity-30">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-slate-700"></div>
<div className="flex flex-col">
<div className="h-2 w-16 bg-slate-600 rounded"></div>
<div className="h-1.5 w-8 bg-slate-800 rounded mt-1"></div>
</div>
</div>
<div className="text-green-400 text-xs font-mono">+$150.00</div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-slate-900/50 hover:bg-slate-900 transition-colors overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center mb-6 border border-white/5 text-blue-400">
<span className="iconify" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-slate-200 mb-2">Member App</h3>
<p className="text-sm text-slate-500 leading-relaxed">A dedicated white-label ready app for your members to book and log.</p>
</div>
<div className="mt-8 flex justify-center">
<div className="w-32 h-20 bg-slate-950 border-t border-x border-white/10 rounded-t-xl mx-auto shadow-2xl"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">1.2M+</div>
<div className="text-sm text-slate-500 font-medium">Workouts Logged</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">$500M</div>
<div className="text-sm text-slate-500 font-medium">Payments Processed</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">99.9%</div>
<div className="text-sm text-slate-500 font-medium">Uptime SLA</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-sm text-slate-500 font-medium">Support</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-900/20 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Ready to upgrade your gym?</h2>
<p className="text-slate-400 text-lg mb-10 font-light">Join hundreds of box owners who switched to Wodworx for a faster, cleaner experience.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-medium text-sm transition-all shadow-xl shadow-white/10">
                        Start your 14-day free trial
                     </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-transparent border border-slate-700 text-white hover:bg-slate-800 font-medium text-sm transition-all">
                        Talk to sales
                     </button>
</div>
<p className="mt-6 text-xs text-slate-600">No credit card required for trial.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
<div className="col-span-2 md:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 bg-gradient-to-tr from-brand-500 to-teal-400 rounded-sm flex items-center justify-center">
<span className="text-slate-950 font-semibold text-[10px] tracking-tighter">W</span>
</div>
<span className="text-slate-200 font-medium tracking-tight text-sm">Wodworx</span>
</a>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                            Crafting the future of fitness management software. Built for performance, designed for people.
                        </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">System Status</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-slate-600">
                        © 2024 Wodworx Inc. All rights reserved.
                    </div>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:github" data-width="16"></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="16"></span>
</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
