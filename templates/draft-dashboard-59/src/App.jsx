import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



window.addEventListener('DOMContentLoaded', () => {
if (window.lucide && lucide.createIcons) lucide.createIcons();
});

const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
if (toggleSidebar && sidebar) {
toggleSidebar.addEventListener('click', () => {
sidebar.classList.toggle('hidden');
sidebar.classList.toggle('col-span-12');
});
}

function showSection(sectionName) {
const sections = document.querySelectorAll('.section-content');
sections.forEach(section => section.classList.add('hidden'));
const targetSection = document.getElementById(`section-${sectionName}`);
if (targetSection) targetSection.classList.remove('hidden');

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
link.classList.remove('bg-white/10');
if (link.getAttribute('href') === `#${sectionName}`) {
link.classList.add('bg-white/10');
}
});

if (window.innerWidth < 768) {
sidebar.classList.add('hidden');
}
}

function loadPlayerProfile(playerName) {
console.log('Loading profile for:', playerName);
}

showSection('dashboard');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>
<div className="fixed -z-10 bg-gradient-to-br from-green-900/20 via-neutral-950 to-blue-900/20 w-full h-screen top-0"></div>

<main className="lg:max-w-[1400px] sm:px-6 max-w-[1280px] mr-auto ml-auto pt-8 pr-4 pb-8 pl-4 relative">
<div className="border-gradient before:rounded-[28px] [animation:fadeSlideIn_0.5s_ease-out_0.05s_both] xl:bg-neutral-900/80 bg-neutral-900/80 rounded-[28px] mr-auto ml-auto shadow-[0_20px_120px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl">

<div className="flex sm:px-6 [animation:fadeSlideIn_0.5s_ease-out_0.1s_both] border-white/5 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex gap-3 items-center [animation:fadeSlideIn_0.5s_ease-out_0.15s_both]">
<div className="flex gap-2 items-center">
<span className="h-3.5 w-3.5 rounded-full bg-red-500/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-amber-400/90"></span>
<span className="h-3.5 w-3.5 rounded-full bg-emerald-500/90"></span>
</div>
<div className="flex items-center gap-2 px-3">
<svg className="w-6 h-6 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
<span className="text-lg font-semibold tracking-tight text-white">Chalk Line</span>
</div>
</div>

<div className="flex items-center gap-2 sm:gap-3 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both]">
<div className="hidden md:flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5">
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-48 bg-transparent text-sm placeholder:text-slate-500 focus:outline-none" placeholder="Search players..."/>
</div>
<button className="inline-flex md:hidden items-center gap-2 rounded-full border-gradient before:rounded-full bg-white/5 px-3 py-1.5 text-sm" id="toggleSidebar">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18"></path><path d="m14 9 3 3-3 3"></path></svg>
Menu
</button>
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border-gradient before:rounded-full bg-emerald-500/90 hover:bg-emerald-500 text-black px-3 py-1.5 text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span className="hidden sm:inline">Add Player</span>
</button>
<button className="inline-flex items-center justify-center rounded-full border-gradient before:rounded-full bg-white/5 p-2">
<img alt="avatar" className="h-6 w-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80'http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%2310b981'%3E%3Ccircle cx='12' cy='12' r='12'/%3E%3C/svg%3E"/>
</button>
</div>
</div>

<div className="grid grid-cols-12">

<aside className="col-span-12 md:col-span-3 lg:col-span-3 border-white/5 border-r" id="sidebar">
<div className="p-4 sm:p-6">
<div className="mb-6 [animation:fadeSlideIn_0.5s_ease-out_0.25s_both]">
<h1 className="text-[22px] sm:text-2xl text-white tracking-tight font-semibold">Draft Center</h1>
<p className="text-sm text-slate-400 mt-1">2024 Season</p>
</div>
<nav className="space-y-6">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.3s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Main</p>
<ul className="space-y-1">
<li className="">
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 bg-white/10" href="#dashboard" onclick="showSection('dashboard')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
Dashboard
</a>
</li>
<li className="">
<a className="nav-link group flex items-center gap-3 hover:bg-white/5 text-sm text-slate-300 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/player-assessment" onclick="showSection('players')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
Player Assessment
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#rankings" onclick="showSection('rankings')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
Stack Rankings
</a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.35s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Draft</p>
<ul className="space-y-1">
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#draft-setup" onclick="showSection('draft-setup')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
Draft Setup
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#mock-draft" onclick="showSection('mock-draft')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path><path d="M6 12h16"></path></svg>
Mock Draft
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#wishlist" onclick="showSection('wishlist')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
Draft Wishlist
</a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Team</p>
<ul className="space-y-1">
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#roster" onclick="showSection('roster')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
My Roster
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#lineups" onclick="showSection('lineups')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
Lineup Creator
</a>
</li>
</ul>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.45s_both]">
<p className="mb-2 text-xs uppercase tracking-wider text-slate-400">Data</p>
<ul className="space-y-1">
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#import" onclick="showSection('import')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
Import Data
</a>
</li>
<li>
<a className="nav-link group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5" href="#export" onclick="showSection('export')">
<svg className="w-4 h-4 text-slate-400 group-hover:text-slate-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
Export PDF
</a>
</li>
</ul>
</div>
</nav>
</div>

<div className="sm:p-6 border-white/5 border-t mt-auto pt-4 pr-4 pb-4 pl-4 [animation:fadeSlideIn_0.5s_ease-out_0.5s_both]">
<div className="rounded-xl bg-white/5 p-3 border-gradient before:rounded-xl">
<p className="text-xs uppercase tracking-wider text-slate-400 mb-2">Quick Stats</p>
<div className="space-y-2 text-sm">
<div className="flex justify-between">
<span className="text-slate-300">Total Players</span>
<span className="text-white font-medium">24</span>
</div>
<div className="flex justify-between">
<span className="text-slate-300">Assessed</span>
<span className="text-white font-medium">18</span>
</div>
<div className="flex justify-between">
<span className="text-slate-300">Avg Rating</span>
<span className="text-emerald-400 font-medium">3.8★</span>
</div>
</div>
</div>
</div>
</aside>

<section className="col-span-12 md:col-span-9 lg:col-span-9 relative">
<div className="relative h-full min-h-[720px]">

<div className="section-content p-4 sm:p-8" id="section-dashboard">
<div className="mb-6 [animation:fadeSlideIn_0.5s_ease-out_0.55s_both]">
<h2 className="text-3xl font-semibold text-white tracking-tight">Draft Dashboard</h2>
<p className="text-slate-400 mt-1">Overview of your draft preparation</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 [animation:fadeSlideIn_0.5s_ease-out_0.6s_both]">
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-blue-500/20">
<svg className="w-5 h-5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-sm text-slate-400">Player Pool</span>
</div>
<p className="text-3xl font-semibold text-white">24</p>
<p className="text-xs text-slate-400 mt-1">+3 added this week</p>
</div>
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-emerald-500/20">
<svg className="w-5 h-5 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path></svg>
</div>
<span className="text-sm text-slate-400">Draft Ready</span>
</div>
<p className="text-3xl font-semibold text-white">18</p>
<p className="text-xs text-slate-400 mt-1">75% complete</p>
</div>
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-amber-500/20">
<svg className="w-5 h-5 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<span className="text-sm text-slate-400">Wishlist</span>
</div>
<p className="text-3xl font-semibold text-white">8</p>
<p className="text-xs text-slate-400 mt-1">Priority targets</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 [animation:fadeSlideIn_0.5s_ease-out_0.65s_both]">
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<h3 className="text-lg font-semibold text-white mb-4">Top Rated Players</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-semibold">1</div>
<div>
<p className="text-white font-medium">Sarah Martinez</p>
<p className="text-xs text-slate-400">All-around star</p>
</div>
</div>
<div className="text-right">
<p className="text-emerald-400 font-semibold">4.8★</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-semibold">2</div>
<div>
<p className="text-white font-medium">Emma Johnson</p>
<p className="text-xs text-slate-400">Power hitter</p>
</div>
</div>
<div className="text-right">
<p className="text-emerald-400 font-semibold">4.6★</p>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">3</div>
<div>
<p className="text-white font-medium">Ashley Chen</p>
<p className="text-xs text-slate-400">Elite pitcher</p>
</div>
</div>
<div className="text-right">
<p className="text-blue-400 font-semibold">4.4★</p>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
<div className="space-y-3">
<div className="flex gap-3 p-3 rounded-lg bg-white/5">
<div className="p-2 rounded-lg bg-green-500/20 h-fit">
<svg className="w-4 h-4 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div>
<p className="text-white text-sm font-medium">Player added</p>
<p className="text-xs text-slate-400">Jessica Taylor added to pool</p>
<p className="text-xs text-slate-500 mt-1">2 hours ago</p>
</div>
</div>
<div className="flex gap-3 p-3 rounded-lg bg-white/5">
<div className="p-2 rounded-lg bg-blue-500/20 h-fit">
<svg className="w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
</div>
<div>
<p className="text-white text-sm font-medium">Rating updated</p>
<p className="text-xs text-slate-400">Sarah Martinez skills reassessed</p>
<p className="text-xs text-slate-500 mt-1">5 hours ago</p>
</div>
</div>
<div className="flex gap-3 p-3 rounded-lg bg-white/5">
<div className="p-2 rounded-lg bg-amber-500/20 h-fit">
<svg className="w-4 h-4 text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<div>
<p className="text-white text-sm font-medium">Wishlist updated</p>
<p className="text-xs text-slate-400">3 players added to draft targets</p>
<p className="text-xs text-slate-500 mt-1">Yesterday</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-players">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Player Assessment</h2>
<p className="text-slate-400 mt-1">Rate and evaluate player skills</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-1">
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl mb-4">
<h3 className="text-lg font-semibold text-white mb-4">Players</h3>
<div className="space-y-2 max-h-[600px] overflow-y-auto">
<button className="w-full text-left p-3 rounded-lg bg-white/10 hover:bg-white/15 transition-colors" onclick="loadPlayerProfile('Sarah Martinez')">
<p className="text-white font-medium">Sarah Martinez</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-emerald-400">4.8★</span>
<span className="text-xs text-slate-400">All-around</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onclick="loadPlayerProfile('Emma Johnson')">
<p className="text-white font-medium">Emma Johnson</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-emerald-400">4.6★</span>
<span className="text-xs text-slate-400">Power hitter</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onclick="loadPlayerProfile('Ashley Chen')">
<p className="text-white font-medium">Ashley Chen</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-blue-400">4.4★</span>
<span className="text-xs text-slate-400">Pitcher</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors" onclick="loadPlayerProfile('Maria Garcia')">
<p className="text-white font-medium">Maria Garcia</p>
<div className="flex items-center gap-2 mt-1">
<span className="text-xs text-blue-400">4.2★</span>
<span className="text-xs text-slate-400">Infielder</span>
</div>
</button>
</div>
</div>
</div>
<div className="lg:col-span-2">
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl" id="playerProfile">
<div className="flex items-start justify-between mb-6">
<div>
<h3 className="text-2xl font-semibold text-white">Sarah Martinez</h3>
<p className="text-slate-400 mt-1">Select a player to view profile</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border-gradient before:rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path></svg>
Edit
</button>
</div>
<div className="space-y-6">
<div>
<h4 className="text-sm font-medium text-slate-400 mb-4">Skill Ratings</h4>
<div className="space-y-4">
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Hitting</span>
<span className="text-slate-400 text-sm">5.0</span>
</div>
<div className="star-rating" data-skill="hitting">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Fielding</span>
<span className="text-slate-400 text-sm">4.5</span>
</div>
<div className="star-rating" data-skill="fielding">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star empty w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Speed</span>
<span className="text-slate-400 text-sm">4.0</span>
</div>
<div className="star-rating" data-skill="speed">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star empty w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Arm Strength</span>
<span className="text-slate-400 text-sm">5.0</span>
</div>
<div className="star-rating">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Pitching</span>
<span className="text-slate-400 text-sm">3.0</span>
</div>
<div className="star-rating">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star empty w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star empty w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-white">Catching</span>
<span className="text-slate-400 text-sm">4.0</span>
</div>
<div className="star-rating">
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star filled w-5 h-5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="star empty w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-6 mt-6">
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-medium text-slate-400">Average Rating</h4>
<span className="text-2xl font-semibold text-emerald-400">4.3★</span>
</div>
</div>
<div className="border-t border-white/5 pt-6 mt-6">
<h4 className="text-sm font-medium text-slate-400 mb-3">Custom Tags</h4>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs">Team Player</span>
<span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Leader</span>
<span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400 text-xs">Good Family</span>
<button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/5 text-slate-300 text-xs hover:bg-white/10">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
Add Tag
</button>
</div>
</div>
<div className="border-t border-white/5 pt-6 mt-6">
<h4 className="text-sm font-medium text-slate-400 mb-3">Notes</h4>
<textarea className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 resize-none" placeholder="Add notes about this player..." rows="4">Great attitude, coachable, always early to practice. Excels under pressure. Consider for cleanup position in batting order.</textarea>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-rankings">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Stack Rankings</h2>
<p className="text-slate-400 mt-1">Players ranked by overall assessment</p>
</div>
<div className="rounded-xl bg-white/5 border-gradient before:rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-white/5 border-b border-white/10">
<tr>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Rank</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Player</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Hitting</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Fielding</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Speed</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Arm</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Pitching</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Catching</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Overall</th>
<th className="px-6 py-4 text-left text-xs font-medium text-slate-400 uppercase tracking-wider">Tags</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-sm">1</div>
</td>
<td className="px-6 py-4">
<p className="text-white font-medium">Sarah Martinez</p>
<p className="text-xs text-slate-400">Outfielder</p>
</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-amber-400">4.5</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-slate-400">3.0</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4">
<span className="text-emerald-400 font-semibold text-lg">4.8★</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-1">
<span className="inline-flex px-2 py-1 rounded text-xs bg-blue-500/20 text-blue-400">Leader</span>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold text-sm">2</div>
</td>
<td className="px-6 py-4">
<p className="text-white font-medium">Emma Johnson</p>
<p className="text-xs text-slate-400">First Base</p>
</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4 text-slate-400">3.5</td>
<td className="px-6 py-4 text-amber-400">4.5</td>
<td className="px-6 py-4 text-slate-400">3.5</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4">
<span className="text-emerald-400 font-semibold text-lg">4.6★</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-1">
<span className="inline-flex px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-400">Power</span>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-sm">3</div>
</td>
<td className="px-6 py-4">
<p className="text-white font-medium">Ashley Chen</p>
<p className="text-xs text-slate-400">Pitcher</p>
</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4 text-amber-400">4.5</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-slate-400">3.5</td>
<td className="px-6 py-4">
<span className="text-blue-400 font-semibold text-lg">4.4★</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-1">
<span className="inline-flex px-2 py-1 rounded text-xs bg-emerald-500/20 text-emerald-400">Ace</span>
</div>
</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-6 py-4">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-sm">4</div>
</td>
<td className="px-6 py-4">
<p className="text-white font-medium">Maria Garcia</p>
<p className="text-xs text-slate-400">Shortstop</p>
</td>
<td className="px-6 py-4 text-amber-400">4.5</td>
<td className="px-6 py-4 text-amber-400">5.0</td>
<td className="px-6 py-4 text-amber-400">4.5</td>
<td className="px-6 py-4 text-amber-400">4.0</td>
<td className="px-6 py-4 text-slate-400">2.5</td>
<td className="px-6 py-4 text-slate-400">3.5</td>
<td className="px-6 py-4">
<span className="text-blue-400 font-semibold text-lg">4.2★</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-1">
<span className="inline-flex px-2 py-1 rounded text-xs bg-amber-500/20 text-amber-400">Defense</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-live-draft">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Live Draft Room</h2>
<p className="text-slate-400 mt-1">Real-time draft management</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-6">
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-semibold text-white">Current Pick</h3>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-medium">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
Live
</span>
</div>
</div>
<div className="bg-white/5 rounded-lg p-6 text-center border border-white/10">
<p className="text-sm text-slate-400 mb-2">Round 1 - Pick 3</p>
<p className="text-3xl font-semibold text-white mb-2">Thunder Bolts</p>
<p className="text-slate-400">On the clock: 2:34</p>
</div>
</div>
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl">
<h3 className="text-lg font-semibold text-white mb-4">Draft Board</h3>
<div className="space-y-3 max-h-[400px] overflow-y-auto">
<div className="flex items-center justify-between p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
<div>
<p className="text-white font-medium">1. Lightning Strike</p>
<p className="text-xs text-emerald-400">Selected: Sarah Martinez</p>
</div>
<span className="text-xs text-slate-400">Round 1</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
<div>
<p className="text-white font-medium">2. Storm Chasers</p>
<p className="text-xs text-blue-400">Selected: Emma Johnson</p>
</div>
<span className="text-xs text-slate-400">Round 1</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/10 border border-amber-500/30 animate-pulse">
<div>
<p className="text-white font-medium">3. Thunder Bolts</p>
<p className="text-xs text-amber-400">Selecting...</p>
</div>
<span className="text-xs text-slate-400">Round 1</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
<div>
<p className="text-white font-medium">4. Diamond Divas</p>
<p className="text-xs text-slate-400">Up next</p>
</div>
<span className="text-xs text-slate-400">Round 1</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="rounded-xl bg-white/5 p-5 border-gradient before:rounded-xl mb-4">
<h3 className="text-lg font-semibold text-white mb-4">Available Players</h3>
<div className="space-y-2 max-h-[500px] overflow-y-auto">
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all">
<div className="flex items-center justify-between">
<div>
<p className="text-white font-medium">Ashley Chen</p>
<p className="text-xs text-slate-400">Pitcher • 4.4★</p>
</div>
<svg className="w-4 h-4 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all">
<div className="flex items-center justify-between">
<div>
<p className="text-white font-medium">Maria Garcia</p>
<p className="text-xs text-slate-400">Shortstop • 4.2★</p>
</div>
<svg className="w-4 h-4 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 transition-all">
<div className="flex items-center justify-between">
<div>
<p className="text-white font-medium">Jessica Taylor</p>
<p className="text-xs text-slate-400">Catcher • 4.0★</p>
</div>
<svg className="w-4 h-4 text-emerald-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</button>
</div>
</div>
<div className="rounded-xl bg-emerald-500/10 p-5 border border-emerald-500/20">
<h3 className="text-sm font-medium text-emerald-400 mb-3">Quick Actions</h3>
<div className="space-y-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black px-4 py-2.5 text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 3 9-3 9 19-9Z"></path></svg>
Auto-Pick Best
</button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2.5 text-sm font-medium">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 11 12 14 22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
View Wishlist
</button>
</div>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-import">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Import Data</h2>
<p className="text-slate-400 mt-1">Upload player data from spreadsheets</p>
</div>
<div className="rounded-xl bg-white/5 p-8 border-gradient before:rounded-xl text-center">
<div className="max-w-md mx-auto">
<div className="mb-6">
<div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
<svg className="w-8 h-8 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Upload Spreadsheet</h3>
<p className="text-slate-400 text-sm">Supports Excel (.xlsx), Numbers, and CSV files</p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black px-6 py-3 text-sm font-medium mb-4">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
Choose File
</button>
<p className="text-xs text-slate-500">or drag and drop file here</p>
<div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10 text-left">
<p className="text-sm font-medium text-white mb-2">Import Tips:</p>
<ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
<li>Include columns: Name, Position, Skills</li>
<li>Rate skills from 1-5</li>
<li>Add tags in separate column</li>
</ul>
</div>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-export">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Export Data</h2>
<p className="text-slate-400 mt-1">Download all your draft data as PDF</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<h3 className="text-lg font-semibold text-white mb-4">Export Options</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10">
<input checked="" className="w-4 h-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500" type="checkbox"/>
<span className="text-slate-200">Player Assessments</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10">
<input checked="" className="w-4 h-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500" type="checkbox"/>
<span className="text-slate-200">Stack Rankings</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10">
<input checked="" className="w-4 h-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500" type="checkbox"/>
<span className="text-slate-200">Draft Results</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10">
<input checked="" className="w-4 h-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500" type="checkbox"/>
<span className="text-slate-200">Team Roster</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10">
<input checked="" className="w-4 h-4 rounded border-white/20 bg-white/10 text-emerald-500 focus:ring-emerald-500" type="checkbox"/>
<span className="text-slate-200">Lineups</span>
</label>
</div>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
<div className="aspect-[8.5/11] rounded-lg bg-white/5 border border-white/10 p-4 mb-4 overflow-hidden">
<div className="bg-white rounded p-3 text-black text-xs space-y-2">
<div className="font-semibold text-lg">Chalk Line Draft Report</div>
<div className="text-slate-600">2024 Season</div>
<div className="border-t border-slate-200 pt-2 mt-2">
<div className="font-medium">Player Rankings</div>
<div className="text-[8px] space-y-1 mt-1">
<div>1. Sarah Martinez - 4.8★</div>
<div>2. Emma Johnson - 4.6★</div>
<div>3. Ashley Chen - 4.4★</div>
</div>
</div>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-black px-6 py-3 text-sm font-medium">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
Export PDF
</button>
</div>
</div>
</div>

<div className="section-content hidden p-4 sm:p-8" id="section-draft-setup">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Draft Setup</h2>
<p className="text-slate-400 mt-1">Configure your draft parameters</p>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<p className="text-slate-300">Draft setup interface coming soon...</p>
</div>
</div>
<div className="section-content hidden p-4 sm:p-8" id="section-mock-draft">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Mock Draft</h2>
<p className="text-slate-400 mt-1">Practice your draft strategy</p>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<p className="text-slate-300">Mock draft simulator coming soon...</p>
</div>
</div>
<div className="section-content hidden p-4 sm:p-8" id="section-wishlist">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Draft Wishlist</h2>
<p className="text-slate-400 mt-1">Your priority draft targets</p>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<p className="text-slate-300">Wishlist management coming soon...</p>
</div>
</div>
<div className="section-content hidden p-4 sm:p-8" id="section-roster">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">My Roster</h2>
<p className="text-slate-400 mt-1">Your drafted team</p>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<p className="text-slate-300">Roster management coming soon...</p>
</div>
</div>
<div className="section-content hidden p-4 sm:p-8" id="section-lineups">
<div className="mb-6">
<h2 className="text-3xl font-semibold text-white tracking-tight">Lineup Creator</h2>
<p className="text-slate-400 mt-1">Build your game-day lineups</p>
</div>
<div className="rounded-xl bg-white/5 p-6 border-gradient before:rounded-xl">
<p className="text-slate-300">Lineup builder coming soon...</p>
</div>
</div>
</div>
</section>
</div>
</div>
</main>


    </>
  );
}
