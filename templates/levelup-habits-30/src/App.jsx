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



        // Router Logic to simulate separate pages
        const pages = document.querySelectorAll('.page');
        const bottomNav = document.getElementById('bottom-nav');
        const navItems = document.querySelectorAll('.nav-item');

        // Pages that show the bottom navigation
        const appPages = ['page-home', 'page-store', 'page-leaderboard', 'page-profile'];

        function router(pageId) {
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active');
            });

            // Show target page
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.add('active');
                target.scrollTop = 0; // Reset scroll
            }

            // Handle Nav Visibility
            if (appPages.includes(pageId)) {
                bottomNav.classList.remove('hidden');
                updateNavState(pageId);
            } else {
                bottomNav.classList.add('hidden');
            }
        }

        function updateNavState(activePageId) {
            navItems.forEach(item => {
                item.classList.remove('active', 'text-indigo-400');
                item.classList.add('text-neutral-500');
                if (item.dataset.target === activePageId) {
                    item.classList.add('active', 'text-indigo-400');
                    item.classList.remove('text-neutral-500');
                }
            });
        }

        // Interaction Logic
        function toggleHabit(card) {
            const btn = card.querySelector('.btn-add');
            const icon = btn.querySelector('.iconify');
            
            if (btn.classList.contains('bg-indigo-600')) {
                // Deselect
                btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
                btn.classList.add('bg-neutral-950', 'text-neutral-500', 'border-neutral-700');
                card.classList.remove('border-indigo-500/50', 'bg-indigo-900/10');
                card.classList.add('border-neutral-800', 'bg-neutral-900/50');
                icon.setAttribute('data-icon', 'lucide:plus');
            } else {
                // Select
                btn.classList.remove('bg-neutral-950', 'text-neutral-500', 'border-neutral-700');
                btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
                card.classList.remove('border-neutral-800', 'bg-neutral-900/50');
                card.classList.add('border-indigo-500/50', 'bg-indigo-900/10');
                icon.setAttribute('data-icon', 'lucide:check');
            }
        }

        // Initialize default route
        router('page-index');
    
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
      
<div className="mobile-frame">

<div className="page active relative" id="page-index">
<div className="flex-1 flex flex-col justify-center items-center p-8 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-neutral-950 to-neutral-950">
<div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-2xl shadow-indigo-500/20 mb-8 border border-white/10">
<span className="iconify text-white text-5xl" data-icon="lucide:zap"></span>
</div>
<h1 className="text-3xl font-semibold text-white tracking-tight mb-3">LevelUp</h1>
<p className="text-neutral-400 text-sm leading-relaxed max-w-[260px]">Build atomic habits, track your progress, and compete with friends.</p>
</div>
<div className="p-8 w-full space-y-3 bg-neutral-950">
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors" onclick="router('page-onboarding-1')">Create Account</button>
<button className="w-full py-4 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-neutral-800 transition-colors" onclick="router('page-login')">I have an account</button>
</div>
</div>

<div className="page p-6 pt-12" id="page-login">
<button className="absolute top-6 left-6 p-2 -ml-2 text-neutral-500 hover:text-white transition-colors" onclick="router('page-index')">
<span className="iconify text-2xl" data-icon="lucide:arrow-left"></span>
</button>
<div className="mt-8 mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Welcome back</h2>
<p className="text-neutral-500 text-sm mt-1">Enter your details to sign in.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); router('page-home');">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
<div className="custom-input flex items-center gap-3 w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3.5 transition-all">
<span className="iconify text-neutral-500 text-lg" data-icon="lucide:mail"></span>
<input className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-neutral-600" placeholder="hello@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Password</label>
<div className="custom-input flex items-center gap-3 w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-3.5 transition-all">
<span className="iconify text-neutral-500 text-lg" data-icon="lucide:lock"></span>
<input className="bg-transparent border-none outline-none text-white text-sm w-full placeholder-neutral-600" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex justify-end">
<a className="text-xs text-indigo-400 font-medium hover:text-indigo-300" href="#">Forgot password?</a>
</div>
<button className="w-full py-4 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 transition-all mt-4" type="submit">Sign In</button>
</form>
<div className="mt-auto pb-8 text-center">
<p className="text-xs text-neutral-500">Don't have an account? <span className="text-white font-medium cursor-pointer" onclick="router('page-onboarding-1')">Sign up</span></p>
</div>
</div>

<div className="page p-6 pt-12" id="page-onboarding-1">

<div className="flex gap-2 mb-8">
<div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">What's your focus?</h2>
<p className="text-neutral-500 text-sm mb-8">Select all that apply to personalize your journey.</p>
<div className="grid grid-cols-1 gap-3">
<label className="group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 cursor-pointer hover:bg-neutral-900 transition-all">
<input className="peer sr-only" type="checkbox"/>
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="lucide:heart-pulse"></span>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Better Health</div>
<div className="text-xs text-neutral-500">Sleep, nutrition, exercise</div>
</div>
<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center">
<span className="iconify text-white text-xs opacity-0 peer-checked:opacity-100" data-icon="lucide:check"></span>
</div>
<div className="absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label className="group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 cursor-pointer hover:bg-neutral-900 transition-all">
<input className="peer sr-only" type="checkbox"/>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="lucide:zap"></span>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Productivity</div>
<div className="text-xs text-neutral-500">Focus, organization, work</div>
</div>
<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center">
<span className="iconify text-white text-xs opacity-0 peer-checked:opacity-100" data-icon="lucide:check"></span>
</div>
<div className="absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
<label className="group relative flex items-center gap-4 p-4 rounded-xl border border-neutral-800 bg-neutral-900/30 cursor-pointer hover:bg-neutral-900 transition-all">
<input className="peer sr-only" type="checkbox"/>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
<span className="iconify text-xl" data-icon="lucide:brain-circuit"></span>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Mindfulness</div>
<div className="text-xs text-neutral-500">Meditation, reading, calm</div>
</div>
<div className="w-5 h-5 rounded-full border border-neutral-600 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 flex items-center justify-center">
<span className="iconify text-white text-xs opacity-0 peer-checked:opacity-100" data-icon="lucide:check"></span>
</div>
<div className="absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
</label>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors" onclick="router('page-onboarding-2')">Continue</button>
</div>
</div>

<div className="page p-6 pt-12" id="page-onboarding-2">

<div className="flex gap-2 mb-8">
<div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
<div className="h-1 flex-1 bg-indigo-500 rounded-full"></div>
<div className="h-1 flex-1 bg-neutral-800 rounded-full"></div>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Pick your first habits</h2>
<p className="text-neutral-500 text-sm mb-8">Start small. You can add more later.</p>
<div className="space-y-3">

<div className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 cursor-pointer hover:border-indigo-500/50 transition-colors" onclick="toggleHabit(this)">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-sky-400">
<span className="iconify text-lg" data-icon="lucide:glass-water"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Drink Water</div>
<div className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Health • 20XP</div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center bg-neutral-950 text-neutral-500 transition-all btn-add">
<span className="iconify" data-icon="lucide:plus"></span>
</button>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 cursor-pointer hover:border-indigo-500/50 transition-colors" onclick="toggleHabit(this)">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-amber-400">
<span className="iconify text-lg" data-icon="lucide:book-open"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Read 10 Pages</div>
<div className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Mind • 30XP</div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center bg-neutral-950 text-neutral-500 transition-all btn-add">
<span className="iconify" data-icon="lucide:plus"></span>
</button>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-neutral-800 bg-neutral-900/50 cursor-pointer hover:border-indigo-500/50 transition-colors" onclick="toggleHabit(this)">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-rose-400">
<span className="iconify text-lg" data-icon="lucide:moon"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Sleep by 11PM</div>
<div className="text-[10px] uppercase tracking-wide text-neutral-500 font-semibold">Health • 50XP</div>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center bg-neutral-950 text-neutral-500 transition-all btn-add">
<span className="iconify" data-icon="lucide:plus"></span>
</button>
</div>
</div>
<div className="mt-auto pt-6">
<button className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors" onclick="router('page-home')">Finish Setup</button>
</div>
</div>

<div className="page bg-black pb-24" id="page-home">

<div className="p-6 pt-8 pb-0 bg-gradient-to-b from-neutral-900 to-black sticky top-0 z-10 border-b border-white/5">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="relative w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 overflow-hidden cursor-pointer" onclick="router('page-profile')">
<span className="iconify absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-neutral-400" data-icon="lucide:user"></span>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-neutral-500 font-bold">Level 4</div>
<div className="text-sm font-semibold text-white">Explorer</div>
</div>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800">
<span className="iconify text-yellow-500 text-sm" data-icon="lucide:coins"></span>
<span className="text-xs font-bold text-neutral-200">450</span>
</div>
</div>

<div className="flex justify-between items-end pb-4">
<div className="flex flex-col items-center gap-1 opacity-50">
<span className="text-[10px] text-neutral-400">Mon</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-neutral-300">12</div>
</div>
<div className="flex flex-col items-center gap-1 opacity-50">
<span className="text-[10px] text-neutral-400">Tue</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-neutral-300">13</div>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-[10px] text-indigo-400 font-bold">Wed</span>
<div className="w-8 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-indigo-500/20 mb-[-4px]">14</div>
</div>
<div className="flex flex-col items-center gap-1 opacity-50">
<span className="text-[10px] text-neutral-400">Thu</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-neutral-300">15</div>
</div>
<div className="flex flex-col items-center gap-1 opacity-50">
<span className="text-[10px] text-neutral-400">Fri</span>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-neutral-300">16</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 px-6 py-6">
<div className="glass p-4 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-orange-500" data-icon="lucide:flame"></span>
</div>
<div className="text-2xl font-bold text-white mb-1">12</div>
<div className="text-xs text-neutral-500 font-medium">Day Streak</div>
</div>
<div className="glass p-4 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-50 group-hover:opacity-100 transition-opacity">
<span className="iconify text-emerald-500" data-icon="lucide:target"></span>
</div>
<div className="text-2xl font-bold text-white mb-1">85%</div>
<div className="text-xs text-neutral-500 font-medium">Completion</div>
</div>
</div>

<div className="px-6 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-white tracking-tight">Today's Quest</h3>
<button className="text-xs text-indigo-400 hover:text-indigo-300">View All</button>
</div>

<div className="group relative p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden transition-all hover:border-neutral-700">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
<div className="flex items-center justify-between pl-2">
<div className="flex items-center gap-3 cursor-pointer" onclick="router('page-habit-detail')">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
<span className="iconify" data-icon="lucide:glass-water"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Drink Water</div>
<div className="text-xs text-neutral-500">1/2 Liters • +20XP</div>
</div>
</div>
<button className="w-6 h-6 rounded-full border-2 border-neutral-600 flex items-center justify-center transition-all hover:border-blue-500" onclick="this.classList.toggle('bg-blue-500'); this.classList.toggle('border-blue-500'); this.querySelector('span').classList.toggle('opacity-0')">
<span className="iconify text-white text-[10px] opacity-0 transition-opacity" data-icon="lucide:check"></span>
</button>
</div>
</div>

<div className="group relative p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden transition-all hover:border-neutral-700">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500"></div>
<div className="flex items-center justify-between pl-2">
<div className="flex items-center gap-3 cursor-pointer" onclick="router('page-habit-detail')">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
<span className="iconify" data-icon="lucide:dumbbell"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Workout</div>
<div className="text-xs text-neutral-500">0/30 Mins • +50XP</div>
</div>
</div>
<button className="w-6 h-6 rounded-full border-2 border-neutral-600 flex items-center justify-center transition-all hover:border-purple-500" onclick="this.classList.toggle('bg-purple-500'); this.classList.toggle('border-purple-500'); this.querySelector('span').classList.toggle('opacity-0')">
<span className="iconify text-white text-[10px] opacity-0 transition-opacity" data-icon="lucide:check"></span>
</button>
</div>
</div>

<div className="group relative p-4 rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden transition-all hover:border-neutral-700">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500"></div>
<div className="flex items-center justify-between pl-2">
<div className="flex items-center gap-3 cursor-pointer" onclick="router('page-habit-detail')">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400">
<span className="iconify" data-icon="lucide:book"></span>
</div>
<div>
<div className="text-sm font-medium text-white">Reading</div>
<div className="text-xs text-neutral-500">0/10 Pages • +30XP</div>
</div>
</div>
<button className="w-6 h-6 rounded-full border-2 border-neutral-600 flex items-center justify-center transition-all hover:border-amber-500" onclick="this.classList.toggle('bg-amber-500'); this.classList.toggle('border-amber-500'); this.querySelector('span').classList.toggle('opacity-0')">
<span className="iconify text-white text-[10px] opacity-0 transition-opacity" data-icon="lucide:check"></span>
</button>
</div>
</div>
</div>
</div>

<div className="page bg-black pb-24" id="page-habit-detail">
<div className="relative bg-neutral-900 pb-8 rounded-b-[2rem] border-b border-neutral-800">
<div className="absolute top-0 left-0 right-0 p-6 flex justify-between z-10">
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50" onclick="router('page-home')">
<span className="iconify" data-icon="lucide:arrow-left"></span>
</button>
<button className="w-8 h-8 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50">
<span className="iconify" data-icon="lucide:more-horizontal"></span>
</button>
</div>
<div className="pt-20 px-6 text-center">
<div className="w-20 h-20 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
<span className="iconify text-4xl" data-icon="lucide:glass-water"></span>
</div>
<h2 className="text-2xl font-bold text-white tracking-tight">Drink Water</h2>
<p className="text-neutral-500 text-sm mt-1">Daily Goal: 2 Liters</p>
<div className="mt-8 flex justify-center gap-8">
<div>
<div className="text-xl font-bold text-white">12</div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider">Streak</div>
</div>
<div>
<div className="text-xl font-bold text-white">85%</div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider">Success</div>
</div>
<div>
<div className="text-xl font-bold text-white">240</div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider">Total XP</div>
</div>
</div>
</div>
</div>
<div className="p-6 space-y-6">

<div>
<h3 className="text-sm font-bold text-white mb-4">History</h3>
<div className="grid grid-cols-7 gap-2">

<div className="aspect-square rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="aspect-square rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="aspect-square rounded bg-neutral-800"></div>
<div className="aspect-square rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="aspect-square rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="aspect-square rounded bg-blue-500/20 border border-blue-500/50"></div>
<div className="aspect-square rounded bg-neutral-800 border border-neutral-700 border-dashed"></div>
</div>
</div>

<div>
<h3 className="text-sm font-bold text-white mb-4">Settings</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800">
<div className="text-sm text-neutral-300">Reminders</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between p-4 rounded-xl bg-neutral-900 border border-neutral-800">
<div className="text-sm text-neutral-300">Difficulty</div>
<span className="text-xs font-medium text-blue-400">Medium</span>
</div>
</div>
</div>
</div>
</div>

<div className="page bg-black pb-24" id="page-store">
<div className="p-6 pb-2 sticky top-0 bg-black/80 backdrop-blur z-10">
<h2 className="text-xl font-bold text-white tracking-tight">Marketplace</h2>
<div className="flex items-center gap-2 mt-2">
<span className="iconify text-yellow-500" data-icon="lucide:coins"></span>
<span className="text-sm font-medium text-neutral-300">Balance: 450</span>
</div>
</div>

<div className="flex gap-3 px-6 py-4 overflow-x-auto hide-scrollbar">
<button className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold">All</button>
<button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium hover:text-white">Avatars</button>
<button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium hover:text-white">Themes</button>
<button className="px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-medium hover:text-white">Boosts</button>
</div>
<div className="grid grid-cols-2 gap-4 px-6">

<div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 group">
<div className="aspect-square rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<span className="iconify text-4xl text-indigo-400" data-icon="lucide:crown"></span>
</div>
<div className="text-sm font-bold text-white">Pro Crown</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-yellow-500 flex items-center gap-1 font-medium">500</span>
<button className="px-3 py-1.5 bg-white text-black rounded-lg text-[10px] font-bold hover:bg-neutral-200">BUY</button>
</div>
</div>

<div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 group">
<div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<span className="iconify text-4xl text-blue-400" data-icon="lucide:zap"></span>
</div>
<div className="text-sm font-bold text-white">XP Boost</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-yellow-500 flex items-center gap-1 font-medium">150</span>
<button className="px-3 py-1.5 bg-white text-black rounded-lg text-[10px] font-bold hover:bg-neutral-200">BUY</button>
</div>
</div>

<div className="p-3 rounded-2xl bg-neutral-900 border border-neutral-800 group">
<div className="aspect-square rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
<span className="iconify text-4xl text-emerald-400" data-icon="lucide:palette"></span>
</div>
<div className="text-sm font-bold text-white">Dark Green</div>
<div className="flex justify-between items-center mt-2">
<span className="text-xs text-yellow-500 flex items-center gap-1 font-medium">300</span>
<button className="px-3 py-1.5 bg-white text-black rounded-lg text-[10px] font-bold hover:bg-neutral-200">BUY</button>
</div>
</div>
</div>
</div>

<div className="page bg-black pb-24" id="page-leaderboard">
<div className="p-6 border-b border-white/5">
<h2 className="text-xl font-bold text-white tracking-tight">Leaderboard</h2>
<p className="text-xs text-neutral-500 mt-1">Weekly Challenge ends in 2d 4h</p>
</div>
<div className="p-6 space-y-4">

<div className="flex items-end justify-center gap-4 mb-8 pt-4">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-700 border-2 border-neutral-600 mb-2"></div>
<div className="w-16 h-24 bg-neutral-800 rounded-t-xl flex items-center justify-center text-2xl font-bold text-neutral-500">2</div>
</div>
<div className="flex flex-col items-center">
<span className="iconify text-yellow-500 mb-1" data-icon="lucide:crown"></span>
<div className="w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500 mb-2"></div>
<div className="w-20 h-32 bg-gradient-to-t from-yellow-600/20 to-neutral-800 rounded-t-xl flex items-center justify-center text-3xl font-bold text-yellow-500 shadow-[0_-10px_40px_-10px_rgba(234,179,8,0.3)]">1</div>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-neutral-700 border-2 border-neutral-600 mb-2"></div>
<div className="w-16 h-20 bg-neutral-800 rounded-t-xl flex items-center justify-center text-2xl font-bold text-neutral-500">3</div>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-900/30 border border-neutral-800">
<span className="text-sm font-bold text-neutral-500 w-6 text-center">4</span>
<div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xs font-bold">JD</div>
<div className="flex-1 text-sm font-medium text-white">John Doe</div>
<div className="text-xs font-bold text-indigo-400">2,450 XP</div>
</div>
<div className="flex items-center gap-4 p-3 rounded-xl bg-neutral-900/30 border border-neutral-800">
<span className="text-sm font-bold text-neutral-500 w-6 text-center">5</span>
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-xs font-bold">SA</div>
<div className="flex-1 text-sm font-medium text-white">Sarah A.</div>
<div className="text-xs font-bold text-neutral-500">2,100 XP</div>
</div>
</div>
</div>
</div>

<div className="page bg-black pb-24" id="page-profile">
<div className="p-6 pt-12 flex flex-col items-center bg-neutral-900/20 border-b border-white/5">
<div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-purple-600 mb-4">
<div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
<span className="iconify text-4xl text-neutral-400" data-icon="lucide:user"></span>
</div>
</div>
<h2 className="text-xl font-bold text-white">John Doe</h2>
<div className="text-sm text-neutral-500">Joined March 2023</div>
<div className="flex gap-4 mt-6 w-full px-4">
<div className="flex-1 p-3 bg-neutral-900 rounded-xl text-center border border-neutral-800">
<div className="text-lg font-bold text-white">12</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Streak</div>
</div>
<div className="flex-1 p-3 bg-neutral-900 rounded-xl text-center border border-neutral-800">
<div className="text-lg font-bold text-white">45</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider">Habits</div>
</div>
</div>
</div>
<div className="p-6 space-y-6">
<div>
<h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-3">General</h3>
<div className="space-y-1">
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 transition-colors">
<div className="flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:user-cog"></span>
<span className="text-sm text-white">Account Settings</span>
</div>
<span className="iconify text-neutral-600" data-icon="lucide:chevron-right"></span>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-neutral-900 transition-colors">
<div className="flex items-center gap-3">
<span className="iconify text-neutral-400" data-icon="lucide:bell"></span>
<span className="text-sm text-white">Notifications</span>
</div>
<span className="iconify text-neutral-600" data-icon="lucide:chevron-right"></span>
</button>
</div>
</div>
<button className="w-full py-4 rounded-xl border border-red-900/30 text-red-500 text-sm font-medium hover:bg-red-950/30 transition-colors" onclick="router('page-index')">Log Out</button>
</div>
</div>

<div className="hidden absolute bottom-0 left-0 w-full bg-[#111] border-t border-white/5 px-6 pb-8 pt-4 flex justify-between items-center z-50" id="bottom-nav">
<button className="nav-item active flex flex-col items-center gap-1 text-neutral-500 transition-colors" data-target="page-home" onclick="router('page-home')">
<span className="iconify text-2xl" data-icon="lucide:home"></span>
<span className="text-[10px] font-medium">Home</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-500 transition-colors" data-target="page-leaderboard" onclick="router('page-leaderboard')">
<span className="iconify text-2xl" data-icon="lucide:trophy"></span>
<span className="text-[10px] font-medium">Rank</span>
</button>
<button className="relative -top-6 w-14 h-14 rounded-full bg-indigo-600 shadow-xl shadow-indigo-500/30 text-white flex items-center justify-center transition-transform active:scale-95 border-4 border-[#0a0a0a]" onclick="router('page-onboarding-2')">
<span className="iconify text-2xl" data-icon="lucide:plus"></span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-500 transition-colors" data-target="page-store" onclick="router('page-store')">
<span className="iconify text-2xl" data-icon="lucide:shopping-bag"></span>
<span className="text-[10px] font-medium">Shop</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-neutral-500 transition-colors" data-target="page-profile" onclick="router('page-profile')">
<span className="iconify text-2xl" data-icon="lucide:user"></span>
<span className="text-[10px] font-medium">Profile</span>
</button>
</div>
</div>


    </>
  );
}
