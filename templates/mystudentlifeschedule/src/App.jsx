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



        const themes = {
            indigo: '99, 102, 241',
            rose: '244, 63, 94',
            emerald: '16, 185, 129',
            amber: '245, 158, 11'
        };

        function setTheme(themeName) {
            const root = document.documentElement;
            const color = themes[themeName];
            if(color) {
                root.style.setProperty('--accent', color);
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const overlay = document.getElementById('login-overlay');
            const userNameEl = document.getElementById('user-name');
            const userRoleEl = document.getElementById('user-role');
            const userAvatarEl = document.getElementById('user-avatar');
            const welcomeMsg = document.getElementById('welcome-msg');

            // Admin Logic
            if (email === 'rx303hd@gmail.com' && password === 'adminrijal') {
                overlay.classList.add('hidden-opacity');
                
                // Set Admin Profile
                userNameEl.textContent = 'Admin Rijal';
                userRoleEl.textContent = 'Administrator';
                userAvatarEl.textContent = 'AR';
                welcomeMsg.textContent = 'Welcome, Admin Rijal';
                
                // Admin Theme Preference
                setTheme('rose'); 
            } 
            // Demo User
            else {
                // For demo purposes, allow any other login to enter as Alex
                if(email && password) {
                    overlay.classList.add('hidden-opacity');
                    userNameEl.textContent = 'Alex Lewis';
                    userRoleEl.textContent = 'Computer Science Year 2';
                    userAvatarEl.textContent = 'AL';
                    welcomeMsg.textContent = 'Good morning, Alex';
                    setTheme('indigo');
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
      

<div className="fixed inset-0 z-[100] bg-[#09090b] flex items-center justify-center p-4" id="login-overlay">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
<div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl"></div>
</div>
<div className="w-full max-w-sm relative z-10">
<div className="text-center mb-8">
<div className="w-10 h-10 mx-auto rounded border border-white/10 bg-white/5 flex items-center justify-center text-white font-medium text-lg tracking-tight shadow-sm mb-4">S</div>
<h1 className="text-xl font-medium tracking-tight text-white">Welcome back</h1>
<p className="text-sm text-zinc-500 mt-1">Enter your credentials to access the workspace.</p>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" id="email" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Password</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all" id="password" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full bg-white text-black hover:bg-zinc-200 transition-colors py-2 rounded-lg text-sm font-medium mt-2" type="submit">Sign In</button>
</form>
<div className="mt-6 text-center">
<p className="text-[10px] text-zinc-600">Admin? Try rx303hd@gmail.com / adminrijal</p>
</div>
</div>
</div>

<aside className="w-64 border-r border-white/5 flex flex-col justify-between hidden md:flex bg-[#09090b]">
<div className="p-6">

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center text-white font-medium text-sm tracking-tight shadow-sm">
                    S
                </div>
<span className="text-sm font-medium tracking-tight text-zinc-100">SCHOLAR</span>
</div>

<nav className="space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg accent-bg-10 border accent-border-20 text-white transition-all" href="#">
<iconify-icon className="accent-text" height="18" icon="solar:clock-square-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 text-zinc-400 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="group-hover:text-white transition-colors" height="18" icon="solar:calendar-mark-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Schedule</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 text-zinc-400 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="group-hover:text-white transition-colors" height="18" icon="solar:book-bookmark-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Courses</span>
</a>
</nav>

<div className="mt-8">
<p className="px-3 text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">Library</p>
<nav className="space-y-1">
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 text-zinc-400 hover:text-zinc-100 transition-all" href="#">
<iconify-icon className="group-hover:text-white transition-colors" height="18" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Past Papers</span>
</a>
</nav>
</div>
</div>

<div className="p-4 border-t border-white/5 space-y-4">

<div className="px-2">
<p className="text-[10px] text-zinc-500 font-medium mb-2 uppercase tracking-wide">Theme</p>
<div className="flex items-center gap-2">
<button className="w-4 h-4 rounded-full bg-indigo-500 hover:scale-110 transition-transform ring-1 ring-offset-2 ring-offset-[#09090b] ring-transparent focus:ring-zinc-500" onclick="setTheme('indigo')"></button>
<button className="w-4 h-4 rounded-full bg-rose-500 hover:scale-110 transition-transform ring-1 ring-offset-2 ring-offset-[#09090b] ring-transparent focus:ring-zinc-500" onclick="setTheme('rose')"></button>
<button className="w-4 h-4 rounded-full bg-emerald-500 hover:scale-110 transition-transform ring-1 ring-offset-2 ring-offset-[#09090b] ring-transparent focus:ring-zinc-500" onclick="setTheme('emerald')"></button>
<button className="w-4 h-4 rounded-full bg-amber-500 hover:scale-110 transition-transform ring-1 ring-offset-2 ring-offset-[#09090b] ring-transparent focus:ring-zinc-500" onclick="setTheme('amber')"></button>
</div>
</div>

<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors border border-transparent hover:border-white/5">
<div className="w-8 h-8 rounded-full accent-bg flex items-center justify-center text-xs font-bold text-white shadow-lg" id="user-avatar">
                    --
                </div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-200 truncate" id="user-name">Loading...</p>
<p className="text-[10px] text-zinc-500 truncate" id="user-role">Student</p>
</div>
<iconify-icon className="text-zinc-500" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-screen overflow-hidden relative">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-500/20 to-transparent"></div>

<header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#09090b]/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Study Space</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-200 font-medium">Overview</span>
</div>
<div className="flex items-center gap-4">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-md accent-bg text-white hover:opacity-90 transition-opacity text-xs font-medium shadow-[0_0_15px_rgba(0,0,0,0.3)]">
<iconify-icon icon="solar:add-circle-bold" width="16"></iconify-icon>
<span>New Event</span>
</button>
<div className="h-4 w-px bg-white/10 mx-1"></div>

<button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#09090b]"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8">
<div className="max-w-5xl mx-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-1" id="welcome-msg">Good morning</h1>
<p className="text-sm text-zinc-500 font-light">You have <span className="text-zinc-200 font-medium">2 exams</span> coming up this week.</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 transition-colors text-xs text-zinc-300">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
<span>Filter View</span>
</button>
<button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white text-black hover:bg-zinc-200 transition-colors text-xs font-medium shadow-[0_0_15px_rgba(255,255,255,0.15)]">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
<span>Start Focus Session</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 accent-bg-10 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<div className="p-2 rounded-lg accent-bg-10 border accent-border-20 accent-text">
<iconify-icon icon="solar:stopwatch-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-[10px] font-medium text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700/50">
                                Pomodoro
                            </span>
</div>
<div className="relative z-10 mt-2">
<h3 className="text-zinc-500 text-xs font-medium mb-1">Deep Work Timer</h3>
<div className="flex items-baseline gap-1">
<p className="text-3xl font-medium tracking-tight text-white">25:00</p>
<span className="text-xs text-zinc-500">min</span>
</div>
</div>
</div>

<div className="group p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/10 text-amber-400">
<iconify-icon icon="solar:calendar-date-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-[10px] font-medium text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/10">
                                High Priority
                            </span>
</div>
<div className="relative z-10 mt-2">
<h3 className="text-zinc-500 text-xs font-medium mb-1">Linear Algebra Midterm</h3>
<p className="text-xl font-medium tracking-tight text-white">2 Days left</p>
<p className="text-[10px] text-zinc-500 mt-1">Friday, 10:00 AM in Hall B</p>
</div>
</div>

<div className="group p-5 rounded-xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all duration-300 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-start mb-2 relative z-10">
<div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/10 text-emerald-400">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/10">
                                On Track
                            </span>
</div>
<div className="relative z-10 mt-2">
<h3 className="text-zinc-500 text-xs font-medium mb-1">Tasks Completed</h3>
<div className="flex items-end justify-between">
<p className="text-3xl font-medium tracking-tight text-white">5<span className="text-zinc-600 text-xl">/8</span></p>
<div className="w-16 h-1 bg-zinc-800 rounded-full mb-2">
<div className="bg-emerald-500 h-1 rounded-full w-[62%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 rounded-xl border border-white/5 bg-zinc-900/20">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<h3 className="text-sm font-medium text-zinc-200">Study Activity</h3>
<span className="text-xs text-zinc-500">(Hours)</span>
</div>
<div className="flex gap-1">
<button className="px-2 py-1 rounded text-[10px] font-medium bg-white/10 text-white border border-white/5">Weekly</button>
<button className="px-2 py-1 rounded text-[10px] font-medium text-zinc-500 hover:text-zinc-300">Monthly</button>
</div>
</div>

<div className="h-48 flex items-end justify-between gap-4 px-2">

<div className="w-full bg-zinc-800/50 rounded-sm relative group hover:bg-zinc-700/50 transition-colors" style={{height: '45%'}}></div>

<div className="w-full bg-zinc-800/50 rounded-sm relative group hover:bg-zinc-700/50 transition-colors" style={{height: '65%'}}></div>

<div className="w-full bg-zinc-800/50 rounded-sm relative group hover:bg-zinc-700/50 transition-colors" style={{height: '30%'}}></div>

<div className="w-full accent-bg shadow-[0_0_15px_rgba(255,255,255,0.1)] rounded-sm relative group" style={{height: '75%'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 accent-bg text-white font-medium text-[10px] px-2 py-0.5 rounded opacity-100 shadow-lg after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-current accent-text">6h</div>
</div>

<div className="w-full bg-zinc-800/50 rounded-sm relative group" style={{height: '55%'}}></div>

<div className="w-full bg-zinc-800/50 rounded-sm relative group" style={{height: '80%'}}></div>

<div className="w-full bg-zinc-800/50 rounded-sm relative group" style={{height: '40%'}}></div>
</div>
<div className="mt-4 flex justify-between text-[10px] text-zinc-500 font-medium uppercase tracking-wider px-2">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span className="accent-text">Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-zinc-900/20 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-zinc-200">Course Mastery</h3>
<iconify-icon className="text-zinc-500 cursor-pointer hover:text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="space-y-6">
<div>
<div className="flex justify-between text-xs mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-zinc-300">Physics 101</span>
</div>
<span className="text-zinc-500">Ch. 4/12</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-blue-500 h-1.5 rounded-full w-[35%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-zinc-300">Calculus II</span>
</div>
<span className="text-zinc-500">Reviewing</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="bg-amber-500 h-1.5 rounded-full w-[88%]"></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs mb-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full accent-bg"></div>
<span className="text-zinc-300">Data Structures</span>
</div>
<span className="text-zinc-500">Lab 3</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-1.5 overflow-hidden">
<div className="accent-bg h-1.5 rounded-full w-[60%]"></div>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-5 border-t border-white/5">
<div className="flex items-center justify-between">
<span className="text-[10px] text-zinc-500">Overall Semester Progress</span>
<span className="text-xs font-medium text-white">64%</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/5 bg-zinc-900/20 overflow-hidden">
<div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<div className="flex gap-4">
<h3 className="text-sm font-medium text-zinc-200">Priority Tasks</h3>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded text-[10px] accent-bg-10 accent-text border accent-border-20">To Do</span>
<span className="px-2 py-0.5 rounded text-[10px] text-zinc-500 hover:text-zinc-300 cursor-pointer">Completed</span>
</div>
</div>
<iconify-icon className="text-zinc-500 cursor-pointer hover:text-white" icon="solar:menu-dots-linear"></iconify-icon>
</div>

<div className="px-4 py-3 border-b border-white/5 bg-zinc-900/50">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-dashed border-zinc-600 flex items-center justify-center text-zinc-600">
<iconify-icon icon="solar:add-linear" width="12"></iconify-icon>
</div>
<input className="bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:outline-none w-full" placeholder="Quickly add a new task or assignment..." type="text"/>
<button className="text-xs font-medium accent-text hover:text-white transition-colors uppercase tracking-wide">Enter</button>
</div>
</div>
<div className="w-full text-left">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-4">

<label className="relative flex items-center p-1 rounded-full cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-transparent checked:bg-current accent-text transition-all" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</label>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Complete Problem Set 4</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-zinc-500">Physics 101</span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-2 py-1 rounded bg-red-500/10 border border-red-500/10">
<iconify-icon className="text-red-400" icon="solar:clock-circle-linear" width="12"></iconify-icon>
<span className="text-[10px] font-medium text-red-400 uppercase tracking-wide">Tonight</span>
</div>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-4">
<label className="relative flex items-center p-1 rounded-full cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-transparent checked:bg-current accent-text transition-all" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</label>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Review Chapter 5 Notes</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
<span className="text-xs text-zinc-500">Calculus II</span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-800 border border-zinc-700">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Tomorrow</span>
</div>
</div>
</div>

<div className="flex items-center justify-between px-4 py-3 hover:bg-white/[0.02] transition-colors group">
<div className="flex items-center gap-4">
<label className="relative flex items-center p-1 rounded-full cursor-pointer">
<input className="peer appearance-none w-4 h-4 border border-zinc-600 rounded bg-transparent checked:bg-current accent-text transition-all" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="10"></iconify-icon>
</label>
<div>
<p className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Submit Group Project Draft</p>
<div className="flex items-center gap-2 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full accent-bg"></span>
<span className="text-xs text-zinc-500">Data Structures</span>
</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2 px-2 py-1 rounded bg-zinc-800 border border-zinc-700">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wide">Oct 24</span>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="max-w-5xl mx-auto mt-12 mb-4 text-center">
<p className="text-[10px] text-zinc-600">© 2024 Scholar App. Stay focused.</p>
</footer>
</div>
</main>


    </>
  );
}
