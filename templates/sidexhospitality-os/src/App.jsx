import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple enter animation trigger
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });

            // Apply to Bento cards for subtle scroll reveal
            document.querySelectorAll('.bento-card').forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(card);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-header">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-5 h-5 bg-slate-900 rounded-[4px] group-hover:bg-slate-700 transition-colors"></div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">SideX</span>
</a>
<div className="hidden md:flex gap-6">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#features">Platform</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#placements">Placements</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#trust">Trust Score</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900">Sign in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm">
                    Apply for Access
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern -z-10 h-[80vh]"></div>
<div className="max-w-7xl mx-auto px-6 text-center animate-enter">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Waitlist Active</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter-custom mb-6 max-w-4xl mx-auto leading-[1.1]">
                The operating system for <br className="hidden md:block"/>
<span className="text-slate-400">premium hospitality.</span>
</h1>
<p className="text-slate-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
                SideX connects elite talent with the world's finest hotels.
                Build your reputation, verify your skills, and access shifts at The Ritz, Four Seasons, and Aman.
            </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-4">
<button className="h-12 px-8 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group">
                    Start Your Profile
                    <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-lg bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-slate-300 transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    View Demo
                </button>
</div>
</div>
</section>

<section className="pb-24 px-4 overflow-hidden">
<div className="max-w-5xl mx-auto relative group">

<div className="bg-white rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden relative z-10">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="flex-1 text-center">
<span className="text-[10px] font-medium text-slate-400">sidex_dashboard.app</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">

<div className="hidden md:block col-span-3 border-r border-slate-100 bg-slate-50/30 p-4 flex flex-col justify-between">
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-white rounded-md border border-slate-200 shadow-sm">
<i className="w-4 h-4 text-slate-900" data-lucide="layout-grid"></i>
<span className="text-xs font-semibold text-slate-900">Overview</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="briefcase"></i>
<span className="text-xs font-medium">Placements</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="graduation-cap"></i>
<span className="text-xs font-medium">Academy</span>
</div>
</div>

<div className="flex items-center gap-3 px-2 pt-4 border-t border-slate-100">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-slate-200 to-slate-300"></div>
<div>
<div className="text-xs font-semibold text-slate-900">Alex M.</div>
<div className="text-[10px] text-emerald-600 font-medium">Score: 98/100</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-9 p-6 md:p-8 bg-white">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight">Available Shifts</h3>
<p className="text-xs text-slate-500 mt-1">Curated based on your Trust Score &amp; Skill Level.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">New York</span>
<span className="px-2 py-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Miami</span>
</div>
</div>

<div className="space-y-3">

<div className="group flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
<span className="font-serif font-bold text-lg text-slate-900">FS</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Four Seasons Downtown</div>
<div className="text-xs text-slate-500">Event Coordinator • Dec 12, 18:00</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-slate-900">$35/hr</div>
<div className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-1">Match: 98%</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
<span className="font-serif font-bold text-lg text-slate-900">RC</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">The Ritz-Carlton NoMad</div>
<div className="text-xs text-slate-500">Wine Sommelier • Dec 14, 17:00</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-slate-900">$42/hr</div>
<div className="text-[10px] text-blue-600 font-medium bg-blue-50 px-2 py-0.5 rounded-full inline-block mt-1">High Priority</div>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-lg border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer opacity-60 hover:opacity-100">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300">
<span className="font-serif font-bold text-lg text-slate-900">AM</span>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Aman New York</div>
<div className="text-xs text-slate-500">Private Dining • Dec 15, 19:00</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-semibold text-slate-900">$38/hr</div>
<div className="text-[10px] text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-full inline-block mt-1">Waitlist</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-full h-full border border-slate-200 rounded-xl -z-10 bg-slate-50"></div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by the world's best</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="font-serif text-2xl text-slate-800 font-semibold">Four Seasons</span>
<span className="font-serif text-2xl text-slate-800 font-semibold">The Ritz-Carlton</span>
<span className="font-serif text-2xl text-slate-800 font-semibold">Rosewood</span>
<span className="font-serif text-2xl text-slate-800 font-semibold">Aman</span>
<span className="font-serif text-2xl text-slate-800 font-semibold">St. Regis</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Architecture of Excellence</h2>
<p className="text-slate-500">SideX is more than a job board. It is a career management system designed for the ambitious hospitality professional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 bento-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8">
<i className="w-6 h-6 text-slate-300 group-hover:text-emerald-500 transition-colors" data-lucide="shield-check"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The SideX Trust Score</h3>
<p className="text-sm text-slate-500 max-w-sm">A bilateral rating protocol. Every shift impacts your permanent score. High scores unlock exclusive venues and higher hourly rates.</p>
</div>

<div className="flex items-end gap-8 mt-8">
<div className="relative w-32 h-32">
<svg className="w-full h-full -rotate-90">
<circle cx="64" cy="64" fill="none" r="60" stroke="#f1f5f9" strokeWidth="8"></circle>
<circle cx="64" cy="64" fill="none" r="60" stroke="#0f172a" stroke-dasharray="377" stroke-dashoffset="20" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-bold text-slate-900 tracking-tighter">98</span>
<span className="text-[10px] font-bold text-slate-400 uppercase">Elite</span>
</div>
</div>
<div className="space-y-3 pb-2 w-full max-w-xs">
<div className="flex justify-between text-xs font-medium">
<span>Reliability</span>
<span className="text-slate-900">100%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-slate-900 h-full w-full"></div>
</div>
<div className="flex justify-between text-xs font-medium">
<span>Presentation</span>
<span className="text-slate-900">96%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-slate-900 h-full w-[96%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card rounded-2xl p-8 relative overflow-hidden group bg-slate-900 text-white">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-700 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-auto">
<div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-6 border border-slate-700">
<i className="w-4 h-4 text-white fill-white" data-lucide="play"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Micro-Academy</h3>
<p className="text-sm text-slate-400">Mandatory 8-min modules before specific shifts ensuring protocol mastery.</p>
</div>

<div className="mt-8 space-y-3">
<div className="bg-slate-800/50 rounded-lg p-3 flex items-center gap-3 border border-slate-700">
<div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-slate-400" data-lucide="lock"></i>
</div>
<div className="overflow-hidden">
<div className="text-xs font-medium text-slate-200 truncate">Silver Service Basics</div>
<div className="text-[10px] text-slate-500">4 min • Required</div>
</div>
</div>
<div className="bg-white/10 rounded-lg p-3 flex items-center gap-3 border border-white/20">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center shrink-0">
<i className="w-3 h-3 text-slate-900 fill-slate-900" data-lucide="play"></i>
</div>
<div className="overflow-hidden">
<div className="text-xs font-medium text-white truncate">Wine Decanting</div>
<div className="text-[10px] text-slate-300">8 min • Playing</div>
</div>
</div>
</div>
</div>
</div>

<div className="bento-card rounded-2xl p-8 flex flex-col justify-between group">
<div className="flex justify-between items-start">
<div className="p-2 bg-slate-50 border border-slate-100 rounded-lg">
<i className="w-5 h-5 text-slate-700" data-lucide="wallet"></i>
</div>
<span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-1 rounded-full border border-emerald-100">INSTANT</span>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">$842.00</div>
<div className="text-xs text-slate-500">Available Balance</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
<span className="text-xs font-medium text-slate-500">Next payout</span>
<span className="text-xs font-semibold text-slate-900">Tomorrow</span>
</div>
</div>
</div>

<div className="md:col-span-2 bento-card rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 space-y-4">
<h3 className="text-xl font-semibold text-slate-900">Verified Identity Protocol</h3>
<p className="text-sm text-slate-500">We integrate with biometric ID verification to ensure trust between talent and venues. One scan, lifetime access.</p>
<div className="flex items-center gap-4 pt-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
</div>
<span className="text-xs text-slate-500 font-medium">Join 2,400+ verified pros</span>
</div>
</div>
<div className="w-full md:w-1/3 h-32 bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute w-64 h-1 bg-emerald-500/20 top-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite]"></div>
<i className="w-12 h-12 text-slate-300" data-lucide="scan-face"></i>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 rounded">VERIFIED</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="placements">
<div className="max-w-5xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Active Placements</h2>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1" href="#">
                    View all <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="border border-slate-200 rounded-xl overflow-hidden">

<div className="grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-xs font-medium text-slate-500 uppercase tracking-wide">
<div className="col-span-5 md:col-span-4">Role &amp; Venue</div>
<div className="col-span-3 md:col-span-3">Location</div>
<div className="hidden md:block md:col-span-3">Requirements</div>
<div className="col-span-4 md:col-span-2 text-right">Rate</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="col-span-5 md:col-span-4 flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-[10px] font-serif font-bold text-slate-700">RC</div>
<div>
<div className="text-sm font-semibold text-slate-900">Banquet Server</div>
<div className="text-xs text-slate-500">The Ritz-Carlton</div>
</div>
</div>
<div className="col-span-3 md:col-span-3 text-sm text-slate-600">Central Park South</div>
<div className="hidden md:block md:col-span-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Black Tie</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<span className="text-sm font-semibold text-slate-900">$32/hr</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="col-span-5 md:col-span-4 flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-[10px] font-serif font-bold text-slate-700">MO</div>
<div>
<div className="text-sm font-semibold text-slate-900">VIP Concierge</div>
<div className="text-xs text-slate-500">Mandarin Oriental</div>
</div>
</div>
<div className="col-span-3 md:col-span-3 text-sm text-slate-600">Columbus Circle</div>
<div className="hidden md:block md:col-span-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100">Top Rated</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<span className="text-sm font-semibold text-slate-900">$45/hr</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="col-span-5 md:col-span-4 flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-[10px] font-serif font-bold text-slate-700">AM</div>
<div>
<div className="text-sm font-semibold text-slate-900">Private Butler</div>
<div className="text-xs text-slate-500">Aman New York</div>
</div>
</div>
<div className="col-span-3 md:col-span-3 text-sm text-slate-600">Midtown</div>
<div className="hidden md:block md:col-span-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Experianced Only</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<span className="text-sm font-semibold text-slate-900">$55/hr</span>
</div>
</div>

<div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-slate-50 transition-colors group">
<div className="col-span-5 md:col-span-4 flex items-center gap-3">
<div className="w-8 h-8 bg-slate-100 rounded flex items-center justify-center text-[10px] font-serif font-bold text-slate-700">SH</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mixologist</div>
<div className="text-xs text-slate-500">Soho House</div>
</div>
</div>
<div className="col-span-3 md:col-span-3 text-sm text-slate-600">Meatpacking</div>
<div className="hidden md:block md:col-span-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Late Shift</span>
</div>
<div className="col-span-4 md:col-span-2 text-right">
<span className="text-sm font-semibold text-slate-900">$38/hr</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tighter mb-6">Ready to upgrade your career?</h2>
<p className="text-slate-500 mb-10 text-lg">Join the operating system used by the top 1% of hospitality professionals.</p>
<form className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
<input className="flex-1 px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 rounded-lg bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200" type="submit">
                    Get Access
                </button>
</form>
<p className="text-xs text-slate-400 mt-6">Limited spots available for Q4 2024.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-slate-900 rounded-[2px]"></div>
<span className="font-semibold text-slate-900 tracking-tight text-sm">SideX Inc.</span>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Twitter</a>
<a className="hover:text-slate-900" href="#">LinkedIn</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 SideX. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
