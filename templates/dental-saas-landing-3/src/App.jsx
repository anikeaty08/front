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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
medical: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Cyan/Blue mix
600: '#0284c7', // Primary Blue
900: '#0c4a6e', // Deep Blue
}
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
}
}
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
      

<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
<div className="glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 bg-gradient-to-tr from-medical-600 to-cyan-400 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smile" data-width="20" height="20" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle className="" cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<span className="text-lg font-medium tracking-tight text-slate-900">DentFlow</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-medical-600 transition-colors" href="#">Features</a>
<a className="hover:text-medical-600 transition-colors text-sm font-medium text-slate-500" href="/#">Solutions</a>
<a className="hover:text-medical-600 transition-colors text-sm font-medium text-slate-500" href="/">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-medical-600 hover:bg-medical-700 rounded-full shadow-lg shadow-medical-500/20 transition-all hover:-translate-y-0.5" href="#">
                            Book a Demo
                        </a>
<button className="md:hidden p-2 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>
<main className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-16 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-medical-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-medical-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-medical-500"></span>
</span>
                        New AI Charting V2.0 is live
                    </div>
<h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Streamline Your Practice.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-cyan-500">Focus on Patients.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Automate reminders, simplify billing, and reduce no-shows with the all-in-one platform designed for modern dental clinics.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xl shadow-slate-900/10 transition-all hover:-translate-y-0.5" href="#">
                            Start Free Trial
                            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                            Watch Video
                        </button>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
</div>
<p>Join 2,000+ dentists today</p>
</div>
</div>

<div className="relative mt-12 lg:mt-0 perspective-1000 group">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-medical-400/10 rounded-full blur-3xl"></div>

<div className="relative bg-white rounded-xl shadow-2xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden transform transition-transform duration-700 hover:rotate-y-2 hover:rotate-x-2 lg:scale-110 origin-center">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
</div>
<div className="ml-4 w-32 h-2 bg-slate-200 rounded-full"></div>
</div>

<div className="flex h-[400px]">

<div className="w-16 border-r border-slate-100 flex flex-col items-center py-6 gap-6 bg-slate-50/30">
<div className="w-8 h-8 bg-medical-600 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
</div>
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:calendar" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:message-square" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="mt-auto">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:settings" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
</div>
</div>

<div className="flex-1 p-6 bg-white relative">

<div className="flex justify-between items-end mb-6">
<div>
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Overview</div>
<div className="text-lg font-medium text-slate-800">Hello, Dr. Sarah</div>
</div>
<div className="text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-md border border-slate-100">Oct 24, 2023</div>
</div>

<div className="grid grid-cols-3 gap-4">

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-400 mb-1">Today's Patients</div>
<div className="text-xl font-semibold text-slate-800">24</div>
<div className="text-[10px] text-green-600 flex items-center mt-1">
<svg aria-hidden="true" className="iconify mr-0.5 iconify--lucide" data-icon="lucide:trending-up" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
                                            +12% vs last week
                                        </div>
</div>

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-400 mb-1">Pending Invoices</div>
<div className="text-xl font-semibold text-slate-800">$4.2k</div>
<div className="text-[10px] text-slate-400 mt-1">3 due today</div>
</div>

<div className="p-4 rounded-lg border border-slate-100 bg-slate-50/50">
<div className="text-xs text-slate-400 mb-1">Avg. Wait Time</div>
<div className="text-xl font-semibold text-slate-800">8m</div>
<div className="text-[10px] text-green-600 mt-1">-2m improvement</div>
</div>

<div className="col-span-2 row-span-2 p-4 rounded-lg border border-slate-100 bg-white shadow-sm mt-2">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-semibold text-slate-700">Schedule</div>
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:more-horizontal" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></g></svg>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
<div className="text-xs text-slate-500 font-mono">09:00</div>
<div className="h-8 w-1 bg-medical-500 rounded-full"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-800">Alice Freeman</div>
<div className="text-[10px] text-slate-400">Root Canal • Room 2</div>
</div>
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="flex items-center gap-3 p-2 rounded hover:bg-slate-50 transition-colors">
<div className="text-xs text-slate-500 font-mono">10:30</div>
<div className="h-8 w-1 bg-cyan-400 rounded-full"></div>
<div className="flex-1">
<div className="text-xs font-medium text-slate-800">Robert Chen</div>
<div className="text-[10px] text-slate-400">Checkup • Room 1</div>
</div>
<div className="w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
</div>
</div>
</div>

<div className="col-span-1 row-span-2 mt-2 relative rounded-lg border border-slate-100 bg-slate-900 overflow-hidden flex flex-col items-center justify-center group-hover:scale-[1.02] transition-transform">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>
<div className="relative z-10 w-12 h-12 text-cyan-400">
<svg aria-hidden="true" className="iconify animate-pulse iconify--lucide" data-icon="lucide:box" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</div>
<div className="relative z-10 text-[10px] text-slate-400 mt-2 font-mono">3D Render</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-10 -left-8 bg-white p-2 rounded-xl shadow-2xl shadow-black/10 border border-slate-100 animate-bounce" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3 pr-4">
<img alt="Doctor" className="w-12 h-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<div>
<div className="text-xs font-semibold text-slate-800">Upcoming</div>
<div className="text-[10px] text-slate-500">Dr. Emily • 15 mins</div>
</div>
<div className="ml-auto w-8 h-8 bg-green-50 rounded-full flex items-center justify-center text-green-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:video" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y bg-white border-slate-200 pt-10 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by 500+ Top Clinics</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold text-xl text-slate-700">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    MEDICORE
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-700">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:cross" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    HealthPlus
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-700">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    VitalFlow
                </div>
<div className="flex items-center gap-2 font-semibold text-xl text-slate-700">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:heart-pulse" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
                    DentalCare
                </div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-white to-blue-50/50 pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Everything you need to run a modern clinic</h2>
<p className="text-slate-500">Replace disconnected tools with one unified operating system designed for dental excellence.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group shadow-slate-200/40 hover:bg-white hover:-translate-y-1 transition-all duration-300 bg-white/60 border-white/40 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl backdrop-blur-xl">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-blue-100 shadow-sm flex items-center justify-center text-medical-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-3">Smart Scheduling</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            AI-powered booking fills gaps in your calendar automatically. Send smart reminders to reduce no-shows by up to 40%.
                        </p>
</div>
</div>

<div className="group relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-2xl p-8 hover:bg-white hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-cyan-100 shadow-sm flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-bar-chart-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M8 18v-1m4 1v-6m4 6v-3"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Digital Charting</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Visual 3D tooth charts and periodontal graphs. Update patient records effortlessly on any device, anywhere.
                        </p>
</div>
</div>

<div className="group relative bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-2xl p-8 hover:bg-white hover:-translate-y-1 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-white rounded-xl border border-indigo-100 shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Automated Billing</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Instant claims processing and automated invoices. Get paid faster with integrated payment terminals and online portals.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-slate-200 pt-24 pb-24">
<style>
        @keyframes beam-flow {
            0% { transform: translateX(-100%); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(200%); opacity: 0; }
        }
        .animate-beam {
            animation: beam-flow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
    </style>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Up and Running in Minutes, Not Months.</h2>
<p className="text-slate-500 text-lg">We handle the data migration so you can start using the platform from Day 1.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-slate-100 -z-10 overflow-hidden rounded-full">

<div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-medical-500 to-transparent h-full animate-beam -translate-x-full blur-[1px]"></div>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-lg font-semibold text-slate-900 shadow-sm mb-6 z-10 transition-all duration-300 group-hover:border-medical-500 group-hover:text-medical-600 group-hover:shadow-lg group-hover:shadow-medical-500/10 group-hover:scale-105">
                    1
                </div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-medical-600 transition-colors duration-300">Sign Up &amp; Connect</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Create your clinic profile and configure your operating hours. No technical team required.
                </p>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">

<div className="absolute top-7 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-medical-500/10 rounded-full animate-ping -z-10"></div>
<div className="w-14 h-14 bg-medical-50 border border-medical-200 rounded-full flex items-center justify-center text-lg font-semibold text-medical-600 shadow-sm mb-6 z-10 relative transition-transform duration-300 group-hover:scale-105 shadow-medical-500/20">
                    2
                </div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-medical-600 transition-colors duration-300">One-Click Migration</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Securely import patient history, charts, and X-rays from your legacy software (OpenDental, EagleSoft, etc.) instantly.
                </p>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-lg font-semibold text-slate-900 shadow-sm mb-6 z-10 transition-all duration-300 group-hover:border-medical-500 group-hover:text-medical-600 group-hover:shadow-lg group-hover:shadow-medical-500/10 group-hover:scale-105">
                    3
                </div>
<h3 className="text-lg font-medium text-slate-900 mb-3 group-hover:text-medical-600 transition-colors duration-300">Automate &amp; Grow</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Turn on "Auto-Fill" for your calendar and watch your schedule fill up while your team focuses on patient care.
                </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 pt-24 pb-24 relative">

<div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-medium mb-6 shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Seamless Integration
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Works with the tools you rely on</h2>
<p className="leading-relaxed text-lg text-slate-500">Connect DentFlow with your existing imaging hardware, insurance payers, and accounting software in seconds.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="group hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Imaging &amp; Sensors</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Compatible with major hardware providers for seamless capture.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">Dexis</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">Sirona</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">Carestream</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100 transition-colors">Planmeca</span>
</div>
</div>

<div className="group hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="w-12 h-12 bg-green-50 border border-green-100 rounded-xl flex items-center justify-center text-green-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Insurance Payers</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">Real-time eligibility checks and claim status updates.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-colors">Delta Dental</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-colors">Cigna</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-colors">Aetna</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-green-50 group-hover:text-green-700 group-hover:border-green-100 transition-colors">MetLife</span>
</div>
</div>

<div className="group hover:shadow-xl hover:shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 bg-white border-0 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<div className="w-12 h-12 bg-purple-50 border border-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M8 6h8"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 18h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<h3 className="group-hover:text-purple-600 transition-colors text-lg font-semibold text-slate-900 mb-3">Accounting</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Auto-sync daily revenue and manage financial health.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-100 transition-colors">QuickBooks</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-100 transition-colors">Xero</span>
<span className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-100 transition-colors">Sage</span>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Simple, Transparent Pricing</h2>
<p className="text-slate-500">No hidden setup fees. No long-term contracts. Cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-slate-50 border-0 rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-lg font-medium text-slate-900">Solo Starter</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Best for Single Practitioner</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$199</span>
<span className="text-slate-500 ml-2">/mo</span>
</div>
<a className="block hover:bg-slate-100 transition-colors text-sm font-medium text-slate-900 text-center bg-white w-full border-slate-200 border rounded-lg mb-8 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
                        Get Started
                    </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Unlimited Patient Records
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Smart Scheduling Calendar
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Email Reminders Only
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Basic X-Ray Storage
                        </li>
</ul>
</div>

<div className="border-medical-200 shadow-medical-900/5 md:-mt-4 bg-white border ring-1 rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl">
<div className="absolute top-0 right-0 left-0 -translate-y-1/2 flex justify-center">
<span className="bg-medical-600 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow-lg shadow-medical-500/30">Most Popular</span>
</div>
<h3 className="text-lg font-medium text-slate-900">Growth Practice</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Best for 2-5 Doctors</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">$399</span>
<span className="text-slate-500 ml-2">/mo</span>
</div>
<a className="block w-full py-2.5 px-4 bg-medical-600 text-white font-medium text-center rounded-lg hover:bg-medical-700 transition-colors shadow-lg shadow-medical-500/25 text-sm mb-8" href="#">
                        Start Free Trial
                    </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle className="" cx="12" cy="12" r="10"></circle><path className="" d="m9 12l2 2l4-4"></path></g></svg>
<span className="font-medium">Everything in Starter</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            2-Way SMS &amp; WhatsApp Reminders
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Real-time Insurance Verification
                        </li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-center">
<svg aria-hidden="true" className="iconify text-medical-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Advanced Revenue Analytics
                        </li>
</ul>
</div>

<div className="bg-slate-50 border-0 rounded-2xl px-8 py-8">
<h3 className="text-lg font-medium text-slate-900">Enterprise</h3>
<p className="text-sm text-slate-500 mt-1 mb-6">Dental Chains / DSOs</p>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-semibold tracking-tight text-slate-900">Custom</span>
</div>
<a className="block hover:bg-slate-50 transition-colors text-sm font-medium text-slate-700 text-center bg-white w-full border-slate-200 border rounded-lg mb-8 pt-2.5 pr-4 pb-2.5 pl-4" href="#">
                        Contact Sales
                    </a>
<ul className="space-y-4 text-sm text-slate-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Multi-location Dashboard
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Centralized Billing
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Dedicated Account Manager
                        </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Custom API Access
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-xs font-medium mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                    Security First
                </div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Bank-Grade Security for Your Patients.</h2>
<p className="text-slate-400">Your data is protected by industry-leading encryption and strict compliance protocols.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-check-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M3 15l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">HIPAA Compliant</h3>
<p className="text-sm text-slate-400 leading-relaxed">Your data meets all federal privacy standards and regulations for medical information handling.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:database" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Encrypted Backups</h3>
<p className="text-sm text-slate-400 leading-relaxed">Automatic hourly cloud backups using military-grade AES-256 encryption protocols.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700">
<div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
</div>
<h3 className="text-lg font-medium mb-2">Role-Based Access</h3>
<p className="text-sm text-slate-400 leading-relaxed">Control exactly what your front desk, hygienists, and associates can see and edit.</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b py-24">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-medical-600 text-xs font-semibold uppercase tracking-wide mb-4">
                Support
            </div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl mb-4">Frequently Asked Questions</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Everything you need to know about getting started.</p>
</div>
<div className="space-y-4">

<details className="group border border-slate-200 rounded-xl bg-white open:ring-2 open:ring-medical-600/10 open:border-medical-600/50 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md">
<summary className="flex justify-between items-center w-full px-6 py-5 cursor-pointer list-none text-left">
<span className="text-lg font-medium text-slate-900 group-hover:text-medical-600 transition-colors">Can I migrate data from my current software?</span>
<span className="ml-6 flex-shrink-0 text-slate-400 group-hover:text-medical-600 transition-colors bg-slate-50 rounded-full p-2 group-open:bg-medical-50 group-open:text-medical-600">
<svg className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base">
<div className="h-px w-full bg-slate-100 mb-4"></div>
                    Yes. We offer free assisted migration from most major dental platforms to ensure no data is lost during the transition. Our dedicated team handles the entire process securely so you can focus on patients.
                </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-white open:ring-2 open:ring-medical-600/10 open:border-medical-600/50 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md">
<summary className="flex justify-between items-center w-full px-6 py-5 cursor-pointer list-none text-left">
<span className="text-lg font-medium text-slate-900 group-hover:text-medical-600 transition-colors">Is training included for my staff?</span>
<span className="ml-6 flex-shrink-0 text-slate-400 group-hover:text-medical-600 transition-colors bg-slate-50 rounded-full p-2 group-open:bg-medical-50 group-open:text-medical-600">
<svg className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base">
<div className="h-px w-full bg-slate-100 mb-4"></div>
                    Absolutely. We provide a comprehensive video library and unlimited live Zoom training sessions for your team to get everyone up to speed. Support is available 24/7 for any questions.
                </div>
</details>

<details className="group border border-slate-200 rounded-xl bg-white open:ring-2 open:ring-medical-600/10 open:border-medical-600/50 transition-all duration-300 [&amp;_summary::-webkit-details-marker]:hidden shadow-sm hover:shadow-md">
<summary className="flex justify-between items-center w-full px-6 py-5 cursor-pointer list-none text-left">
<span className="text-lg font-medium text-slate-900 group-hover:text-medical-600 transition-colors">What happens if the internet goes down?</span>
<span className="ml-6 flex-shrink-0 text-slate-400 group-hover:text-medical-600 transition-colors bg-slate-50 rounded-full p-2 group-open:bg-medical-50 group-open:text-medical-600">
<svg className="w-5 h-5 transform group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed text-base">
<div className="h-px w-full bg-slate-100 mb-4"></div>
                    Our platform has a robust "Offline Mode" that allows you to view the daily schedule and basic patient info securely until connection is restored. Your practice keeps running smoothly.
                </div>
</details>
</div>
<div className="mt-12 flex justify-center">
<div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
<svg className="lucide lucide-message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
<span className="">Can't find what you're looking for?</span>
<a className="font-medium text-medical-600 hover:text-medical-700 underline underline-offset-2 transition-colors" href="#">Chat with support</a>
</div>
</div>
</div>
</section>

<section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden isolate">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 max-w-4xl w-full h-[500px] bg-medical-600/20 opacity-40 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
<div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-cyan-500/10 opacity-30 blur-[120px] rounded-full pointer-events-none"></div>

<div className="[mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)] -z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300 text-xs font-medium mb-8 backdrop-blur-sm shadow-lg shadow-cyan-900/20">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="tracking-wide uppercase text-[10px] font-semibold">New Feature</span>
<span className="w-px h-3 bg-white/10 mx-1"></span>
<span className="">AI Charting 2.0 is live</span>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
            Stop losing revenue to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-medical-400 to-blue-400">empty chairs.</span>
</h2>
<p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 500+ modern clinics using DentFlow to automate scheduling, reduce no-shows, and grow their practice effortlessly.
        </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full transition-all duration-300 hover:bg-blue-50 hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" href="#">
                Start 14-Day Free Trial
                <svg className="lucide lucide-arrow-right ml-2 transition-transform group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 backdrop-blur-sm" href="#">
                Book a 15-Min Demo
            </a>
</div>

<div className="mt-12 pt-8 border-t border-white/5">
<p className="text-sm text-slate-500 font-medium mb-4">Trusted by innovative teams at</p>
<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-40 grayscale mix-blend-screen hover:opacity-70 transition-opacity duration-500">
<div className="flex items-center gap-2 font-semibold text-lg text-white">
<svg className="lucide lucide-hexagon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
                    MEDICORE
                </div>
<div className="flex items-center gap-2 font-semibold text-lg text-white">
<svg className="lucide lucide-activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
                    VitalFlow
                </div>
<div className="flex items-center gap-2 font-semibold text-lg text-white">
<svg className="lucide lucide-heart-pulse" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.28 3.6-2.36 4.57-4.66.27-.63.15-1.17-.09-1.68a2.53 2.53 0 0 0-2.28-1.57c-2.8 0-4.08 3.29-4.7 4.7-.62-1.41-1.9-4.7-4.7-4.7a2.53 2.53 0 0 0-2.28 1.57c-.24.51-.36 1.05-.09 1.68.97 2.3 3.08 3.38 4.57 4.66"></path><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
                    DentalCare
                </div>
</div>
</div>
</div>
</section>

<footer className="bg-white py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smile" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<span className="text-sm font-semibold text-slate-900">DentFlow</span>
</div>
<div className="text-sm text-slate-400">
                © 2023 DentFlow Inc. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
<a className="text-slate-400 hover:text-slate-600" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
</div>
</div>
</footer>

    </>
  );
}
