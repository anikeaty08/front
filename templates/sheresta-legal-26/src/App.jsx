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
brand: {
DEFAULT: '#059e00',
50: '#f0fdf0',
100: '#dcfce0',
200: '#bbf7c3',
300: '#86ef94',
400: '#4ade5f',
500: '#22c53b',
600: '#059e00', // Base color
700: '#158025',
800: '#166525',
900: '#145321',
}
},
boxShadow: {
'soft': '0 4px 30px -4px rgba(0, 0, 0, 0.05)',
'glow': '0 0 20px -5px rgba(5, 158, 0, 0.15)',
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Intersection Observer for Sticky Feature Scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const targetId = entry.target.dataset.target;
                    // Hide all visuals
                    document.querySelectorAll('.feature-visual').forEach(el => {
                        el.classList.remove('active-feature');
                        el.classList.add('inactive-feature');
                    });
                    // Show target visual
                    const targetEl = document.getElementById(targetId);
                    if (targetEl) {
                        targetEl.classList.remove('inactive-feature');
                        targetEl.classList.add('active-feature');
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.step-trigger').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-brand-200">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">Sheresta</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#features">Features</a>
<a className="hover:text-brand-600 transition-colors" href="#schedule">Diary</a>
<a className="hover:text-brand-600 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Sign In</a>
<a className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:shadow-lg" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 overflow-hidden">
<div className="absolute top-0 right-0 w-[50%] h-[800px] bg-gradient-to-b from-brand-50/50 to-white -z-10 blur-3xl opacity-60 rounded-full translate-x-1/4 -translate-y-1/4"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse"></span>
                    Now Live in 12 High Courts
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    The digital backbone for <span className="text-brand-600 relative whitespace-nowrap">
                        modern justice
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Sheresta is the all-in-one legal platform. Manage cases, track hearings, and connect with clients in a secure, government-grade environment.
                </p>
<div className="space-y-8 pt-2">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-600 text-white font-medium hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 hover:-translate-y-0.5 text-base" href="#pricing">
                        Get Started Free <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
<div className="flex flex-col gap-3 border-t border-slate-100 pt-6 max-w-sm">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Download Mobile App</span>
<div className="flex gap-3">
<button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all w-full justify-center group">
<i className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" data-lucide="apple"></i>
<div className="text-left leading-none">
<span className="block text-[9px] uppercase opacity-70">Download on</span>
<span className="block text-xs font-bold">App Store</span>
</div>
</button>
<button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-800 transition-all w-full justify-center group">
<i className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" data-lucide="play"></i>
<div className="text-left leading-none">
<span className="block text-[9px] uppercase opacity-70">Get it on</span>
<span className="block text-xs font-bold">Google Play</span>
</div>
</button>
</div>
</div>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center justify-center perspective-1000">
<div className="relative w-full max-w-[420px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-2 overflow-hidden transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out z-10">
<div className="bg-slate-50 w-full h-full rounded-[1.5rem] overflow-hidden flex flex-col border border-slate-100">

<div className="bg-white px-6 py-4 border-b border-slate-100 flex justify-between items-center sticky top-0 z-10">
<div>
<div className="text-xs text-slate-400 font-medium">Dashboard</div>
<div className="text-sm font-bold text-slate-900">Adv. Rajesh Kumar</div>
</div>
<div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 ring-2 ring-brand-100">
<i className="w-4 h-4" data-lucide="bell"></i>
</div>
</div>

<div className="p-6 space-y-6 overflow-y-auto hide-scrollbar">

<div className="grid grid-cols-2 gap-4">
<div className="bg-brand-600 text-white p-4 rounded-2xl shadow-lg shadow-brand-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-20 transform translate-x-2 -translate-y-2 group-hover:scale-110 transition-transform">
<i className="w-12 h-12" data-lucide="gavel"></i>
</div>
<div className="text-3xl font-bold mb-1">28</div>
<div className="text-xs font-medium opacity-90">Active Hearings</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 text-brand-100">
<i className="w-12 h-12" data-lucide="users"></i>
</div>
<div className="text-3xl font-bold text-slate-900 mb-1">142</div>
<div className="text-xs font-medium text-slate-500">Total Clients</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-1">
<div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center">
<span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Today's List</span>
<span className="text-[10px] bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">Oct 24</span>
</div>
<div className="divide-y divide-slate-50">
<div className="p-3 hover:bg-slate-50 transition-colors rounded-lg flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">HC</div>
<div className="flex-1">
<div className="text-xs font-semibold text-slate-800">State vs. Sharma</div>
<div className="text-[10px] text-slate-400">Court 4 • 10:30 AM</div>
</div>
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
</div>
<div className="p-3 hover:bg-slate-50 transition-colors rounded-lg flex items-center gap-3 cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs group-hover:scale-105 transition-transform">DC</div>
<div className="flex-1">
<div className="text-xs font-semibold text-slate-800">Property Dispute</div>
<div className="text-[10px] text-slate-400">Court 2 • 02:00 PM</div>
</div>
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6">
<button className="w-14 h-14 bg-slate-900 rounded-full text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform">
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="absolute top-1/2 -right-12 bg-white p-4 rounded-xl shadow-xl border border-slate-100 hidden lg:flex items-center gap-3 animate-bounce z-20" style={{animationDuration: '4s'}}>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div>
<div className="text-sm font-bold text-slate-900">Case Won</div>
<div className="text-xs text-slate-500">Decree passed successfully</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Find Legal Counsel Instantly</h2>
<p className="text-slate-500 mb-10 max-w-xl mx-auto">Browse thousands of verified profiles, filter by specialization, and book consultations directly through the platform.</p>

<div className="bg-white p-2 rounded-2xl shadow-soft border border-slate-200 flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto transition-all focus-within:ring-2 focus-within:ring-brand-100 focus-within:border-brand-300">
<div className="flex-1 flex items-center px-4 h-14 border-b sm:border-b-0 sm:border-r border-slate-100">
<i className="w-5 h-5 text-slate-400 mr-3" data-lucide="search"></i>
<input className="w-full outline-none text-sm text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Search Lawyer Name or Specialization..." type="text"/>
</div>
<div className="sm:w-48 flex items-center px-4 h-14 border-b sm:border-b-0 sm:border-r border-slate-100 relative">
<i className="w-5 h-5 text-slate-400 mr-3" data-lucide="map-pin"></i>
<select className="w-full outline-none text-sm text-slate-700 bg-transparent appearance-none cursor-pointer font-medium z-10">
<option>Delhi NCR</option>
<option>Mumbai</option>
<option>Bangalore</option>
</select>
<i className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 z-0" data-lucide="chevron-down"></i>
</div>
<button className="bg-brand-600 hover:bg-brand-700 text-white h-14 px-8 rounded-xl text-sm font-semibold transition-colors flex items-center justify-center gap-2 sm:w-auto w-full">
                    Search
                </button>
</div>
<div className="mt-8 flex flex-wrap justify-center gap-3">
<a className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm" href="#">Criminal Defense</a>
<a className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm" href="#">Corporate Law</a>
<a className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm" href="#">Family Dispute</a>
<a className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-brand-300 hover:text-brand-600 transition-colors shadow-sm" href="#">IPR &amp; Trademark</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Empowering the Legal Ecosystem</h2>
<p className="text-slate-500 text-lg">Comprehensive tools designed for efficiency, compliance, and growth.</p>
</div>
<a className="text-brand-600 font-semibold text-sm hover:underline flex items-center pb-1" href="#">View all features <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i></a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-brand-600 mb-6 shadow-sm group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Litigation Tracking</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automated updates from court systems directly to your dashboard. Never manually check a status again.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="files"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">E-Vault Storage</h3>
<p className="text-sm text-slate-500 leading-relaxed">Bank-grade encrypted storage for unlimited case files, evidence, and client contracts.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 shadow-sm group-hover:bg-orange-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Client Portal</h3>
<p className="text-sm text-slate-500 leading-relaxed">A dedicated space for your clients to view case progress, pay invoices, and secure chat.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6 shadow-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="book-open"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Legal Research</h3>
<p className="text-sm text-slate-500 leading-relaxed">AI-powered search across millions of judgments and acts. Find precedents in seconds.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-rose-600 mb-6 shadow-sm group-hover:bg-rose-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="receipt"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Smart Invoicing</h3>
<p className="text-sm text-slate-500 leading-relaxed">Generate GST-compliant invoices. Track expenses and automate payment reminders.</p>
</div>
</div>

<div className="group p-8 rounded-3xl border border-slate-100 bg-white hover:border-brand-100 hover:shadow-xl hover:shadow-brand-50/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="relative z-10">
<div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-teal-600 mb-6 shadow-sm group-hover:bg-teal-600 group-hover:text-white group-hover:border-transparent transition-colors">
<i className="w-7 h-7" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Conflict Check</h3>
<p className="text-sm text-slate-500 leading-relaxed">Instantly check for conflicts of interest within your firm's database before accepting cases.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="schedule">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
<i className="w-3 h-3" data-lucide="calendar"></i> Smart Diary
                    </div>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Your schedule, synchronized with the Court.</h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Replace your physical diary. Sheresta automatically syncs hearing dates from e-courts and sends you reminders before every deadline.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<i className="w-5 h-5" data-lucide="bell-ring"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Automated Reminders</h4>
<p className="text-sm text-slate-500">SMS and WhatsApp alerts for you and your clients 24 hours before hearings.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Real-time Sync</h4>
<p className="text-sm text-slate-500">Adjournments and next dates update automatically when the court order is published.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-slate-200/50 border border-slate-100 relative z-10">

<div className="flex justify-between items-center mb-6 px-2">
<div>
<h3 className="text-lg font-bold text-slate-900">November 2023</h3>
</div>
<div className="flex gap-2">
<div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><i className="w-4 h-4" data-lucide="chevron-left"></i></div>
<div className="p-2 hover:bg-slate-50 rounded-lg cursor-pointer"><i className="w-4 h-4" data-lucide="chevron-right"></i></div>
</div>
</div>

<div className="grid grid-cols-7 gap-2 mb-2 text-center text-xs font-semibold text-slate-400 uppercase tracking-wider">
<div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
</div>
<div className="grid grid-cols-7 gap-3 text-sm font-medium text-slate-600">
<div className="aspect-square flex items-center justify-center text-slate-300">29</div>
<div className="aspect-square flex items-center justify-center text-slate-300">30</div>
<div className="aspect-square flex items-center justify-center text-slate-300">31</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">1</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-200 cursor-pointer relative group">
                                2
                                <span className="absolute -bottom-1 opacity-0 group-hover:opacity-100 bg-black text-white text-[10px] px-2 py-0.5 rounded whitespace-nowrap transition-opacity z-20">3 Hearings</span>
</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer relative">
                                3
                                <div className="w-1 h-1 bg-brand-500 rounded-full mt-1"></div>
</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">4</div>

<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">5</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer relative">
                                6
                                <div className="flex gap-0.5 mt-1">
<div className="w-1 h-1 bg-blue-500 rounded-full"></div>
<div className="w-1 h-1 bg-brand-500 rounded-full"></div>
</div>
</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl bg-slate-100 text-slate-900 cursor-pointer">7</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">8</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">9</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">10</div>
<div className="aspect-square flex flex-col items-center justify-center rounded-xl hover:bg-slate-50 cursor-pointer">11</div>
</div>

<div className="mt-6 bg-slate-50 rounded-xl p-4 border border-slate-100">
<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-brand-500 shrink-0"></div>
<div>
<p className="text-xs font-semibold text-slate-900">Hearing: State vs. Vikram Singh</p>
<p className="text-[10px] text-slate-500 mt-1">Court Room 4, High Court • 10:30 AM</p>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-brand-600 rounded-[2.5rem] rotate-3 opacity-20 scale-95 z-0 blur-sm"></div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-100 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 py-24 space-y-[40vh]">
<div className="mb-12">
<div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wide text-brand-600 bg-brand-50 rounded-full uppercase">Workflow</div>
<h2 className="text-3xl font-semibold text-slate-900">One platform. <br/>Every stage of the case.</h2>
</div>

<div className="step-trigger group" data-target="visual-1">
<div className="pl-6 border-l-2 border-slate-200 group-hover:border-brand-600 transition-colors duration-300">
<h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">1. Case Tracking</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                                Visualize the entire timeline of your case. From filing to judgment, see every order, adjournment, and submission in a chronological feed.
                            </p>
</div>
</div>

<div className="step-trigger group" data-target="visual-2">
<div className="pl-6 border-l-2 border-slate-200 group-hover:border-brand-600 transition-colors duration-300">
<h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">2. Document Management</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                                Go paperless. Upload petitions, evidence, and orders. OCR technology makes every scanned PDF searchable instantly.
                            </p>
</div>
</div>

<div className="step-trigger group" data-target="visual-3">
<div className="pl-6 border-l-2 border-slate-200 group-hover:border-brand-600 transition-colors duration-300">
<h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">3. Client Communication</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                                Stop the endless phone calls. Clients can log in to view status updates, pay fees, and upload documents securely.
                            </p>
</div>
</div>
<div className="h-24"></div> 
</div>

<div className="hidden lg:block lg:w-1/2 relative">
<div className="sticky top-0 h-screen flex items-center justify-center p-12">
<div className="relative w-full max-w-md aspect-[4/3]">

<div className="feature-visual active-feature absolute inset-0 bg-slate-50 rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 flex flex-col" id="visual-1">
<div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
<span className="font-bold text-slate-700">Case #9921 Timeline</span>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="space-y-6 relative pl-2">
<div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
<div className="relative flex gap-4">
<div className="w-6 h-6 rounded-full bg-brand-600 border-4 border-white z-10 shrink-0"></div>
<div>
<p className="text-sm font-bold text-slate-900">Judgment Pronounced</p>
<p className="text-xs text-slate-500">Today, 10:00 AM</p>
</div>
</div>
<div className="relative flex gap-4 opacity-60">
<div className="w-6 h-6 rounded-full bg-slate-400 border-4 border-white z-10 shrink-0"></div>
<div>
<p className="text-sm font-bold text-slate-900">Final Arguments</p>
<p className="text-xs text-slate-500">Oct 12, 2023</p>
</div>
</div>
<div className="relative flex gap-4 opacity-40">
<div className="w-6 h-6 rounded-full bg-slate-300 border-4 border-white z-10 shrink-0"></div>
<div>
<p className="text-sm font-bold text-slate-900">Evidence Recording</p>
<p className="text-xs text-slate-500">Sept 01, 2023</p>
</div>
</div>
</div>
</div>

<div className="feature-visual inactive-feature absolute inset-0 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden p-6 text-white flex flex-col" id="visual-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center"><i className="w-4 h-4" data-lucide="folder"></i></div>
<span className="font-bold">Case Files</span>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800 p-3 rounded-lg flex flex-col items-center justify-center aspect-square hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700">
<i className="w-8 h-8 text-blue-400 mb-2" data-lucide="file-text"></i>
<span className="text-xs text-slate-300">Petition.pdf</span>
</div>
<div className="bg-slate-800 p-3 rounded-lg flex flex-col items-center justify-center aspect-square hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700">
<i className="w-8 h-8 text-purple-400 mb-2" data-lucide="image"></i>
<span className="text-xs text-slate-300">Evidence_A.jpg</span>
</div>
<div className="bg-slate-800 p-3 rounded-lg flex flex-col items-center justify-center aspect-square hover:bg-slate-700 transition-colors cursor-pointer border border-slate-700">
<i className="w-8 h-8 text-rose-400 mb-2" data-lucide="mic"></i>
<span className="text-xs text-slate-300">Recording.mp3</span>
</div>
<div className="bg-slate-800 p-3 rounded-lg flex flex-col items-center justify-center aspect-square border border-dashed border-slate-600 text-slate-500">
<i className="w-6 h-6 mb-1" data-lucide="plus"></i>
<span className="text-[10px]">Add File</span>
</div>
</div>
</div>

<div className="feature-visual inactive-feature absolute inset-0 bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden flex flex-col" id="visual-3">
<div className="p-4 bg-brand-600 text-white flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">JD</div>
<div>
<div className="text-sm font-bold">John Doe (Client)</div>
<div className="text-[10px] opacity-80">Online</div>
</div>
</div>
<div className="flex-1 bg-slate-50 p-4 space-y-3">
<div className="flex justify-start">
<div className="bg-white p-2 rounded-lg rounded-tl-none border border-slate-200 text-xs shadow-sm max-w-[80%]">
                                            Hi Advocate, any update on the hearing?
                                        </div>
</div>
<div className="flex justify-end">
<div className="bg-brand-600 text-white p-2 rounded-lg rounded-tr-none text-xs shadow-sm max-w-[80%]">
                                            Yes, the date is set for next Monday. I've uploaded the order copy.
                                        </div>
</div>
<div className="flex justify-start">
<div className="bg-white p-2 rounded-lg rounded-tl-none border border-slate-200 text-xs shadow-sm max-w-[80%] flex items-center gap-2">
<i className="w-3 h-3 text-brand-600" data-lucide="file"></i> Thanks! checking now.
                                        </div>
</div>
</div>
<div className="p-3 bg-white border-t border-slate-100 flex gap-2">
<input className="flex-1 text-xs bg-slate-50 p-2 rounded-lg outline-none" placeholder="Type a message..." type="text"/>
<button className="bg-brand-600 p-2 rounded-lg text-white"><i className="w-3 h-3" data-lucide="send"></i></button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500 mb-8">No hidden fees. Cancel anytime.</p>

<div className="inline-flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm relative">
<button className="relative z-10 px-6 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-lg shadow-sm">Monthly</button>
<button className="relative z-10 px-6 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">Yearly <span className="text-[10px] text-green-600 font-bold bg-green-50 px-1.5 py-0.5 rounded ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Starter</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-slate-900">₹0</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<p className="text-sm text-slate-500 mt-2">Perfect for law students.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> 5 Active Cases</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Basic Calendar</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> 1GB Storage</li>
</ul>
<button className="w-full py-3 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700">Start for Free</button>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative transform md:-translate-y-4 text-white">
<div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
<div className="mb-6">
<h3 className="text-lg font-medium text-white">Professional</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-white">₹999</span>
<span className="text-slate-400 ml-2">/month</span>
</div>
<p className="text-sm text-slate-400 mt-2">For independent practitioners.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-300"><div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Unlimited Cases</li>
<li className="flex items-center text-sm text-slate-300"><div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Automated Reminders</li>
<li className="flex items-center text-sm text-slate-300"><div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> 50GB Secure Storage</li>
<li className="flex items-center text-sm text-slate-300"><div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Client Portal Access</li>
<li className="flex items-center text-sm text-slate-300"><div className="w-5 h-5 rounded-full bg-brand-500 text-white flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Priority Support</li>
</ul>
<button className="w-full py-3 bg-brand-600 hover:bg-brand-500 rounded-xl text-sm font-semibold transition-colors shadow-lg shadow-brand-900/50">Get Started</button>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900">Firm</h3>
<div className="mt-4 flex items-baseline">
<span className="text-4xl font-bold text-slate-900">₹2,499</span>
<span className="text-slate-500 ml-2">/month</span>
</div>
<p className="text-sm text-slate-500 mt-2">For small to medium firms.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> 5 Staff Accounts</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Role-based Access</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> 1TB Storage</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Conflict Checks</li>
<li className="flex items-center text-sm text-slate-600"><div className="w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mr-3 text-xs"><i className="w-3 h-3" data-lucide="check"></i></div> Billing &amp; Invoicing</li>
</ul>
<button className="w-full py-3 border border-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors text-slate-700">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border border-slate-200 rounded-2xl overflow-hidden open:border-brand-200 open:bg-brand-50/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<span>Is my client data secure?</span>
<i className="w-5 h-5 text-slate-400 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 text-brand-600 hidden group-open:block" data-lucide="minus"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Yes, Sheresta uses government-grade AES-256 bit encryption and ISO 27001 certified data centers. We prioritize client confidentiality above all else.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border border-slate-200 rounded-2xl overflow-hidden open:border-brand-200 open:bg-brand-50/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<span>Does it sync with e-Courts automatically?</span>
<i className="w-5 h-5 text-slate-400 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 text-brand-600 hidden group-open:block" data-lucide="minus"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Absolutely. Once you add a Case Number (CNR), our system fetches hearing dates, orders, and status updates daily from the public e-courts database.
                    </div>
</details>
<details className="group [&amp;_summary::-webkit-details-marker]:hidden border border-slate-200 rounded-2xl overflow-hidden open:border-brand-200 open:bg-brand-50/30 transition-colors">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-slate-900 font-medium">
<span>Can I migrate data from my existing software?</span>
<i className="w-5 h-5 text-slate-400 group-open:hidden" data-lucide="plus"></i>
<i className="w-5 h-5 text-brand-600 hidden group-open:block" data-lucide="minus"></i>
</summary>
<div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed">
                        Yes, we offer free migration assistance for Excel, CSV, and major competitor platforms on our Pro and Firm plans.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-600 to-brand-800 text-white relative px-6 pt-20 pb-0 md:px-20 md:pt-24 flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-brand-200">
<div className="md:w-1/2 space-y-8 z-10 pb-20">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your practice,<br/> in your pocket.</h2>
<p className="text-brand-100 text-lg max-w-md">Access case files, check hearing dates, and chat with clients on the go. Available for iOS and Android.</p>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-3 bg-white text-brand-900 px-6 py-3.5 rounded-2xl transition-all hover:bg-brand-50 hover:scale-105 shadow-lg">
<i className="w-6 h-6 fill-current" data-lucide="apple"></i>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider opacity-60 font-bold">Download on the</div>
<div className="text-sm font-bold leading-none">App Store</div>
</div>
</button>
<button className="flex items-center gap-3 bg-brand-900/40 backdrop-blur-sm border border-brand-400/30 text-white px-6 py-3.5 rounded-2xl transition-all hover:bg-brand-900/60 hover:scale-105">
<i className="w-6 h-6 fill-current" data-lucide="play"></i>
<div className="text-left">
<div className="text-[10px] uppercase tracking-wider opacity-60 font-bold">Get it on</div>
<div className="text-sm font-bold leading-none">Google Play</div>
</div>
</button>
</div>
</div>

<div className="md:w-1/2 relative h-[400px] md:h-[500px] w-full flex justify-center md:justify-end items-end">

<div className="absolute right-[20%] bottom-[-50px] w-64 h-[500px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl transform -rotate-12 opacity-60 scale-90 hidden md:block z-0">
<div className="bg-slate-800 w-full h-full rounded-[2rem]"></div>
</div>

<div className="relative w-72 h-[550px] bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl z-10 transform translate-y-20">
<div className="bg-white h-full w-full rounded-[2rem] overflow-hidden relative flex flex-col">

<div className="bg-brand-50 p-6 pt-10 pb-4">
<h3 className="text-xl font-bold text-slate-900">Good Morning</h3>
<p className="text-xs text-slate-500">You have 4 hearings today.</p>
</div>

<div className="p-4 space-y-3">
<div className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex gap-3 items-center">
<div className="w-10 h-10 bg-brand-100 text-brand-700 rounded-lg flex items-center justify-center font-bold text-xs">10:30</div>
<div>
<div className="text-xs font-bold text-slate-900">High Court</div>
<div className="text-[10px] text-slate-500">Court Room 4</div>
</div>
</div>
<div className="bg-white p-3 rounded-xl shadow-md border border-slate-100 flex gap-3 items-center">
<div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-xs">02:00</div>
<div>
<div className="text-xs font-bold text-slate-900">District Court</div>
<div className="text-[10px] text-slate-500">Court Room 12</div>
</div>
</div>
</div>

<div className="mt-auto border-t border-slate-100 p-4 flex justify-between text-slate-300">
<i className="w-6 h-6 text-brand-600 fill-brand-600" data-lucide="home"></i>
<i className="w-6 h-6" data-lucide="search"></i>
<i className="w-6 h-6" data-lucide="calendar"></i>
<i className="w-6 h-6" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-brand-600 rounded-md flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="scale"></i>
</div>
<span className="text-base font-bold text-slate-900">Sheresta</span>
</div>
<p className="text-sm text-slate-500 mb-6">Digitizing justice, simplifying practice. The most trusted legal tech platform.</p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Lawyer Search</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4 text-sm">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Sheresta Legal Tech. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
