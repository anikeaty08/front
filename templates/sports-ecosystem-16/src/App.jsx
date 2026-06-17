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
      

<div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none"></div>

<aside className="w-64 bg-slate-950/50 backdrop-blur-xl border-r border-slate-800 flex flex-col hidden md:flex z-10 relative">
<div className="h-14 flex items-center px-6 border-b border-slate-800/80">
<span className="text-base font-medium tracking-tight uppercase bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">Sportsastra</span>
</div>
<nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2 bg-blue-500/10 text-blue-400 rounded-md font-medium transition-colors relative" href="#">
<div className="absolute left-0 top-2 bottom-2 w-1 bg-blue-500 rounded-r-md shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
<iconify-icon className="text-lg" icon="solar:widget-linear"></iconify-icon>
                Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:target-linear"></iconify-icon>
                Selection Trials
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon>
                Events &amp; Tournaments
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:briefcase-linear"></iconify-icon>
                Jobs &amp; Internships
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                Mentorship
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 rounded-md transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:dumbbell-linear"></iconify-icon>
                Training Sessions
            </a>
</nav>
<div className="p-4 border-t border-slate-800/80">
<button className="w-full flex items-center justify-center gap-2 bg-slate-800 border border-slate-700 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-700 hover:border-slate-600 transition-all">
<iconify-icon className="text-base" icon="solar:login-2-linear"></iconify-icon>
                Log In
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="md:hidden h-14 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 z-20">
<span className="text-base font-medium tracking-tight uppercase bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent">Sportsastra</span>
<button className="text-slate-400 hover:text-slate-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</header>

<header className="hidden md:flex h-14 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/80 items-center justify-between px-8 sticky top-0 z-20">
<div className="flex items-center text-slate-400 text-sm">
<span>Dashboard</span>
<iconify-icon className="mx-2 text-xs text-slate-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-slate-200">Overview</span>
</div>
<div className="flex items-center gap-4">
<div className="relative flex items-center">
<iconify-icon className="absolute left-3 text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-md text-sm focus:bg-slate-800 focus:border-blue-500/50 outline-none w-64 transition-all placeholder-slate-500 text-white" placeholder="Search athletes, jobs, trials..." type="text"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8 relative z-10">
<div className="max-w-6xl mx-auto space-y-8">

<div className="relative rounded-2xl overflow-hidden p-6 md:p-10 border border-slate-800 shadow-2xl shadow-black/50 flex flex-col md:flex-row md:items-end justify-between gap-6 group">
<img alt="Stadium" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 mix-blend-luminosity" src="https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
<div className="relative z-10">
<h1 className="text-2xl font-medium tracking-tight text-white drop-shadow-lg">Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 font-medium">Arena</span></h1>
<p className="text-slate-300 mt-2 max-w-lg">Your central hub for the vibrant Indian sports ecosystem. Discover trials, tournaments, and elevate your game.</p>
</div>
<div className="relative z-10 flex gap-2">
<button className="px-3 py-1.5 bg-slate-900/80 backdrop-blur-sm border border-slate-700 text-slate-200 rounded-md hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all flex items-center gap-2">
<iconify-icon icon="solar:filter-linear"></iconify-icon>
                            Filter Updates
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/80">
<h2 className="text-base font-medium tracking-tight flex items-center gap-2 text-white">
<iconify-icon className="text-rose-500" icon="solar:target-linear"></iconify-icon>
                                    All India Selection Trials
                                </h2>
<a className="text-xs text-blue-400 hover:text-blue-300 transition-colors" href="#">View all</a>
</div>
<div className="divide-y divide-slate-800/60">
<div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer group">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs px-2 py-0.5 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-sm">Athletics</span>
<span className="text-xs text-slate-500">AFI</span>
</div>
<h3 className="text-slate-200 group-hover:text-white transition-colors">National Inter-State Senior Athletics Championships</h3>
<p className="text-slate-500 text-xs mt-1.5 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> NSNIS Patiala, Punjab
                                        </p>
</div>
<div className="flex-shrink-0 text-left sm:text-right bg-slate-950/50 sm:bg-transparent p-3 sm:p-0 rounded-md sm:rounded-none">
<div className="text-sm text-slate-200">24 Jun 2024</div>
<div className="text-xs text-rose-400 mt-1">Deadline: 15 Jun</div>
</div>
</div>
<div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors cursor-pointer group">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-xs px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-sm">Cricket</span>
<span className="text-xs text-slate-500">BCCI U-19</span>
</div>
<h3 className="text-slate-200 group-hover:text-white transition-colors">Zonal Open Selection Camp (South Zone)</h3>
<p className="text-slate-500 text-xs mt-1.5 flex items-center gap-1">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> NCA, Bengaluru
                                        </p>
</div>
<div className="flex-shrink-0 text-left sm:text-right bg-slate-950/50 sm:bg-transparent p-3 sm:p-0 rounded-md sm:rounded-none">
<div className="text-sm text-slate-200">10 Jul 2024</div>
<div className="text-xs text-rose-400 mt-1">Deadline: 01 Jul</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/80">
<h2 className="text-base font-medium tracking-tight flex items-center gap-2 text-white">
<iconify-icon className="text-amber-400" icon="solar:cup-linear"></iconify-icon>
                                    Featured Events
                                </h2>
</div>
<div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="relative rounded-xl overflow-hidden h-48 group cursor-pointer border border-slate-700 hover:border-fuchsia-500/50 transition-all shadow-lg">
<img alt="Athletics" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<h3 className="text-base text-white tracking-tight leading-tight">Khelo India Youth Games</h3>
<span className="text-[10px] uppercase tracking-wider bg-fuchsia-500/20 border border-fuchsia-500/30 text-fuchsia-300 px-1.5 py-0.5 rounded backdrop-blur-sm">Multi-sport</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span className="flex items-center gap-1"><iconify-icon className="text-fuchsia-400" icon="solar:calendar-linear"></iconify-icon> Q1 2025</span>
<span className="flex items-center gap-1 text-fuchsia-300 opacity-0 group-hover:opacity-100 transition-opacity">Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="relative rounded-xl overflow-hidden h-48 group cursor-pointer border border-slate-700 hover:border-emerald-500/50 transition-all shadow-lg">
<img alt="Kabaddi" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-screen" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="absolute inset-0 p-4 flex flex-col justify-end">
<div className="flex justify-between items-end mb-2">
<h3 className="text-base text-white tracking-tight leading-tight">Pro Kabaddi League</h3>
<span className="text-[10px] uppercase tracking-wider bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded backdrop-blur-sm">Kabaddi</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span className="flex items-center gap-1"><iconify-icon className="text-emerald-400" icon="solar:calendar-linear"></iconify-icon> Dec 2024</span>
<span className="flex items-center gap-1 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-5">
<h2 className="text-base font-medium tracking-tight mb-4 flex items-center gap-2 text-white">
<iconify-icon className="text-blue-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                                Mentorship Schedule
                            </h2>
<div className="space-y-4">

<div className="flex gap-3">
<div className="flex flex-col items-center mt-0.5">
<div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<div className="w-0.5 h-full bg-slate-800 my-1"></div>
</div>
<div className="flex-1 pb-4">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
<iconify-icon className="text-green-500" icon="solar:videocamera-linear"></iconify-icon> Online <span className="text-slate-700">•</span> Today, 4:00 PM
                                        </div>
<h3 className="text-sm text-slate-200">Mental Conditioning</h3>
<p className="text-xs text-slate-500 mt-1">Mentor: Abhinav Bindra</p>
<button className="mt-2 text-xs px-3 py-1 bg-slate-800 text-slate-300 border border-slate-700 rounded hover:bg-slate-700 hover:text-white transition-colors">Join Call</button>
</div>
</div>

<div className="flex gap-3">
<div className="flex flex-col items-center mt-0.5">
<div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></div>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
<iconify-icon className="text-amber-400" icon="solar:map-point-linear"></iconify-icon> Offline <span className="text-slate-700">•</span> Fri, 10:00 AM
                                        </div>
<h3 className="text-sm text-slate-200">Tactical Analysis</h3>
<p className="text-xs text-slate-500 mt-1">Mentor: P. Gopichand</p>
<div className="text-xs text-amber-300/80 mt-1.5 bg-amber-500/10 border border-amber-500/20 inline-block px-1.5 py-0.5 rounded">Gopichand Academy</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-base font-medium tracking-tight flex items-center gap-2 text-white">
<iconify-icon className="text-teal-400" icon="solar:briefcase-linear"></iconify-icon>
                                    Opportunities
                                </h2>
</div>
<div className="space-y-3">
<a className="block p-3 rounded-lg border border-slate-800/80 hover:border-blue-500/50 hover:bg-slate-800/40 transition-all bg-slate-950/30" href="#">
<div className="flex justify-between items-start mb-1">
<h3 className="text-slate-200 text-sm">Sports Data Analyst</h3>
<span className="text-[10px] uppercase tracking-wider text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">Full-time</span>
</div>
<p className="text-xs text-slate-500">Bengaluru FC • Bengaluru</p>
</a>
<a className="block p-3 rounded-lg border border-slate-800/80 hover:border-pink-500/50 hover:bg-slate-800/40 transition-all bg-slate-950/30" href="#">
<div className="flex justify-between items-start mb-1">
<h3 className="text-slate-200 text-sm">Physiotherapy Intern</h3>
<span className="text-[10px] uppercase tracking-wider text-pink-400 bg-pink-500/10 px-1.5 py-0.5 rounded border border-pink-500/20">Internship</span>
</div>
<p className="text-xs text-slate-500">Sports Authority of India • Delhi</p>
</a>
</div>
<button className="w-full mt-4 py-2 border border-slate-800 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:border-slate-700 transition-colors text-xs">
                                View all jobs
                            </button>
</div>

<div className="relative rounded-xl overflow-hidden group cursor-pointer border border-slate-700 hover:border-orange-500/50 transition-all shadow-lg h-36">
<img alt="Training Gym" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-luminosity opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 to-rose-900/90 mix-blend-multiply"></div>
<div className="absolute inset-0 p-5 flex flex-col justify-between z-10">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
<iconify-icon className="text-lg text-white drop-shadow-sm" icon="solar:dumbbell-linear"></iconify-icon>
</div>
<div>
<h3 className="text-white tracking-tight mb-0.5">High-Performance Training</h3>
<p className="text-[11px] text-orange-100/80 max-w-[180px] leading-snug">Register for upcoming specialized offline camps.</p>
</div>
</div>
<div className="flex items-center text-xs text-white/90 group-hover:text-white transition-colors">
                                    Explore Sessions <iconify-icon className="ml-1 translate-x-0 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<footer className="max-w-6xl mx-auto mt-12 py-6 border-t border-slate-800/80 text-center flex flex-col md:flex-row items-center justify-between text-xs text-slate-600">
<p>© 2024 SportsAstra. Elevating Indian Sports.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
</div>
</footer>
</div>
</main>

    </>
  );
}
