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



        lucide.createIcons();

        function switchView(viewId) {
            // Hide all views
            const views = document.querySelectorAll('.view-section');
            views.forEach(view => view.classList.add('hidden'));

            // Show selected view
            document.getElementById('view-' + viewId).classList.remove('hidden');

            // Reset all nav buttons to inactive state
            const navButtons = document.querySelectorAll('nav button');
            navButtons.forEach(btn => {
                btn.className = 'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#6B7280] transition-colors hover:bg-[#FFFDF9] hover:text-[#111111]';
                // Reset icon color
                const icon = btn.querySelector('i');
                if(icon) icon.classList.replace('text-[#111111]', 'text-[#6B7280]');
                // Hide active dot
                const dot = btn.querySelector('.active-dot');
                if(dot) dot.classList.add('hidden');
                // Remove ring/bg
                btn.classList.remove('bg-[#FFFDF9]', 'ring-1', 'ring-[#E5E7EB]');
            });

            // Set active nav button
            const activeBtn = document.getElementById('nav-' + viewId);
            activeBtn.className = 'group flex w-full items-center gap-3 rounded-lg bg-[#FFFDF9] px-3 py-2.5 font-medium text-[#111111] ring-1 ring-[#E5E7EB] transition-all';
            
            // Set active icon color
            const activeIcon = activeBtn.querySelector('i');
            if(activeIcon) activeIcon.classList.replace('text-[#6B7280]', 'text-[#111111]');

            // Show active dot
            const activeDot = activeBtn.querySelector('.active-dot');
            if(activeDot) activeDot.classList.remove('hidden');

            // Update mobile title
            const mobileTitle = document.getElementById('mobile-title');
            if(mobileTitle) mobileTitle.innerText = viewId.charAt(0).toUpperCase() + viewId.slice(1);
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
      

<aside className="hidden w-64 flex-col border-r border-[#E5E7EB] bg-white lg:flex">
<div className="flex h-16 items-center px-6">

<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#111111] text-[#FFFDF9]">
<i className="h-5 w-5" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-[#111111]">lynx</span>
</div>
</div>
<nav className="flex-1 space-y-1 px-3 py-6" id="sidebar-nav">

<button className="group flex w-full items-center gap-3 rounded-lg bg-[#FFFDF9] px-3 py-2.5 font-medium text-[#111111] ring-1 ring-[#E5E7EB] transition-all" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="h-5 w-5 text-[#111111]" data-lucide="layout-dashboard"></i>
                Dashboard
                <div className="active-dot ml-auto h-1.5 w-1.5 rounded-full bg-[#2EE6A6]"></div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#6B7280] transition-colors hover:bg-[#FFFDF9] hover:text-[#111111]" id="nav-links" onclick="switchView('links')">
<i className="h-5 w-5 text-[#6B7280]" data-lucide="link"></i>
                Links
                <div className="active-dot ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#2EE6A6]"></div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#6B7280] transition-colors hover:bg-[#FFFDF9] hover:text-[#111111]" id="nav-analytics" onclick="switchView('analytics')">
<i className="h-5 w-5 text-[#6B7280]" data-lucide="bar-chart-2"></i>
                Analytics
                <div className="active-dot ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#2EE6A6]"></div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#6B7280] transition-colors hover:bg-[#FFFDF9] hover:text-[#111111]" id="nav-earnings" onclick="switchView('earnings')">
<i className="h-5 w-5 text-[#6B7280]" data-lucide="wallet"></i>
                Earnings
                <span className="ml-auto rounded-full bg-[#FFD84D]/20 px-2 py-0.5 text-xs font-semibold text-[#b89514]">$124</span>
<div className="active-dot ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#2EE6A6]"></div>
</button>
<button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-[#6B7280] transition-colors hover:bg-[#FFFDF9] hover:text-[#111111]" id="nav-settings" onclick="switchView('settings')">
<i className="h-5 w-5 text-[#6B7280]" data-lucide="settings"></i>
                Settings
                <div className="active-dot ml-auto hidden h-1.5 w-1.5 rounded-full bg-[#2EE6A6]"></div>
</button>
</nav>

<div className="border-t border-[#E5E7EB] p-4">
<div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-[#FFFDF9]">
<img alt="User" className="h-9 w-9 rounded-full bg-[#E5E7EB]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div className="flex-1 overflow-hidden text-left">
<p className="truncate font-medium text-[#111111]">Felix Creator</p>
<p className="truncate text-xs text-[#6B7280]">lynx.bio/felix</p>
</div>
<i className="h-4 w-4 text-[#6B7280]" data-lucide="more-vertical"></i>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-[#FFFDF9] scroll-smooth">

<div className="flex h-16 items-center justify-between border-b border-[#E5E7EB] bg-white px-4 lg:hidden">
<i className="h-6 w-6 text-[#111111]" data-lucide="menu"></i>
<span className="font-semibold text-[#111111]" id="mobile-title">Dashboard</span>
<img alt="User" className="h-8 w-8 rounded-full bg-[#E5E7EB]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="mx-auto max-w-4xl px-6 py-8 pb-32">



<div className="view-section" id="view-dashboard">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Welcome back, Felix</h1>
<p className="text-sm text-[#6B7280]">Here's what's happening with your page today.</p>
</div>

<div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
<div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFDF9] text-[#111111]">
<i className="h-4 w-4" data-lucide="eye"></i>
</div>
<p className="text-xs font-medium text-[#6B7280]">Total Views</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[#111111]">142.5k</p>
<span className="text-[10px] text-[#2EE6A6]">+12% this week</span>
</div>
<div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
<div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFDF9] text-[#111111]">
<i className="h-4 w-4" data-lucide="mouse-pointer-2"></i>
</div>
<p className="text-xs font-medium text-[#6B7280]">Total Clicks</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[#111111]">12,402</p>
<span className="text-[10px] text-[#2EE6A6]">+5% this week</span>
</div>
<div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
<div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFDF9] text-[#111111]">
<i className="h-4 w-4" data-lucide="percent"></i>
</div>
<p className="text-xs font-medium text-[#6B7280]">Avg. CTR</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[#111111]">8.7%</p>
<span className="text-[10px] text-[#6B7280]">Same as last week</span>
</div>
<div className="rounded-xl border border-[#E5E7EB] bg-gradient-to-br from-[#FFFDF9] to-[#FFD84D]/10 p-4">
<div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFFDF9] text-[#111111]">
<i className="h-4 w-4" data-lucide="dollar-sign"></i>
</div>
<p className="text-xs font-medium text-[#6B7280]">Total Revenue</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-[#111111]">$1,240</p>
<span className="text-[10px] text-[#2EE6A6]">+18% this month</span>
</div>
</div>

<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
<div className="mb-4 flex items-center justify-between">
<h3 className="font-semibold text-[#111111]">Traffic Overview</h3>
<select className="rounded border border-[#E5E7EB] bg-[#FFFDF9] px-2 py-1 text-xs text-[#6B7280] focus:outline-none">
<option>Last 7 Days</option>
</select>
</div>

<div className="flex h-40 items-end justify-between gap-2">
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '40%'}}></div>
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '65%'}}></div>
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '50%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6] hover:bg-[#111111]" style={{height: '85%'}}></div>
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '60%'}}></div>
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '75%'}}></div>
<div className="w-full rounded-t bg-[#E5E7EB] hover:bg-[#2EE6A6]" style={{height: '55%'}}></div>
</div>
<div className="mt-2 flex justify-between text-[10px] text-[#6B7280]">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
<h3 className="mb-4 font-semibold text-[#111111]">Top Performing Links</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-[#F3F4F6] pb-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-[#FFD84D]/20 text-[#b89514]">
<i className="h-4 w-4" data-lucide="book-open"></i>
</div>
<div>
<p className="text-sm font-medium text-[#111111]">Design Course</p>
<p className="text-xs text-[#6B7280]">421 clicks</p>
</div>
</div>
<span className="text-xs font-semibold text-[#111111]">$420</span>
</div>
<div className="flex items-center justify-between border-b border-[#F3F4F6] pb-3">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-red-50 text-red-500">
<i className="h-4 w-4" data-lucide="youtube"></i>
</div>
<div>
<p className="text-sm font-medium text-[#111111]">Latest Video</p>
<p className="text-xs text-[#6B7280]">1,204 clicks</p>
</div>
</div>
<span className="text-xs font-semibold text-[#111111]">14% CTR</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded bg-green-50 text-green-600">
<i className="h-4 w-4" data-lucide="music"></i>
</div>
<div>
<p className="text-sm font-medium text-[#111111]">Spotify Playlist</p>
<p className="text-xs text-[#6B7280]">89 clicks</p>
</div>
</div>
<span className="text-xs font-semibold text-[#111111]">5% CTR</span>
</div>
</div>
</div>
</div>
</div>



<div className="view-section hidden" id="view-links">
<div className="mb-6 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Your Links</h1>
<p className="text-sm text-[#6B7280]">Manage and organize your public links.</p>
</div>
</div>

<div className="mb-8">
<button className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2EE6A6] py-3.5 text-base font-semibold text-[#111111] shadow-sm transition-transform hover:scale-[1.01] hover:shadow active:scale-[0.99]">
<i className="h-5 w-5 stroke-[2.5px]" data-lucide="plus"></i>
                        Add New Link
                    </button>
</div>

<div className="space-y-4">

<div className="interactive-card group relative flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-2 sm:flex-row sm:items-center">
<div className="hidden cursor-grab px-2 text-[#E5E7EB] hover:text-[#6B7280] sm:block">
<i className="h-5 w-5" data-lucide="grip-vertical"></i>
</div>
<div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
<div className="flex-1 space-y-1 px-2 sm:px-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-[#111111]">Latest YouTube Video</span>
<i className="h-3 w-3 cursor-pointer text-[#6B7280] opacity-0 transition-opacity group-hover:opacity-100" data-lucide="pencil"></i>
</div>
<div className="flex items-center gap-2 text-xs text-[#6B7280]">
<span>youtube.com/watch?v=k3...</span>
<i className="h-3 w-3 cursor-pointer hover:text-[#111111]" data-lucide="copy"></i>
</div>
</div>
<div className="flex items-center justify-between gap-6 border-t border-[#E5E7EB] px-2 pt-3 sm:border-t-0 sm:border-l sm:px-4 sm:pt-0">
<div className="flex items-center gap-4 text-xs font-medium">
<div className="text-center">
<span className="block text-[#111111]">1.2k</span>
<span className="text-[10px] text-[#6B7280]">clicks</span>
</div>
<div className="h-8 w-px bg-[#E5E7EB]"></div>
<div className="text-center">
<span className="block text-[#111111]">14%</span>
<span className="text-[10px] text-[#6B7280]">CTR</span>
</div>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-white bg-white transition-all duration-300 checked:right-0 focus:outline-none" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-[#E5E7EB] transition-colors duration-300" htmlFor="toggle1"></label>
</div>
</div>
</div>
<div className="absolute right-2 top-2 hidden gap-1 group-hover:flex">
<button className="rounded p-1 text-[#6B7280] hover:bg-[#FFFDF9] hover:text-[#111111]"><i className="h-4 w-4" data-lucide="image"></i></button>
<button className="rounded p-1 text-[#6B7280] hover:bg-red-50 hover:text-red-500"><i className="h-4 w-4" data-lucide="trash-2"></i></button>
</div>
</div>

<div className="interactive-card group relative flex flex-col gap-4 rounded-2xl border-l-4 border-l-[#FFD84D] border-y border-r border-r-[#E5E7EB] border-y-[#E5E7EB] bg-white p-2 sm:flex-row sm:items-center">
<div className="hidden cursor-grab px-2 text-[#E5E7EB] hover:text-[#6B7280] sm:block">
<i className="h-5 w-5" data-lucide="grip-vertical"></i>
</div>
<div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
<div className="flex-1 space-y-1 px-2 sm:px-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-[#111111]">Digital Design Course</span>
<span className="rounded bg-[#FFD84D]/20 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-[#b89514] uppercase">PAID</span>
</div>
<div className="flex items-center gap-2 text-xs text-[#6B7280]">
<span>gumroad.com/l/design-mastery</span>
</div>
</div>
<div className="flex items-center justify-between gap-6 border-t border-[#E5E7EB] px-2 pt-3 sm:border-t-0 sm:border-l sm:px-4 sm:pt-0">
<div className="flex items-center gap-4 text-xs font-medium">
<div className="text-center">
<span className="block text-[#111111]">$420</span>
<span className="text-[10px] text-[#6B7280]">earned</span>
</div>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-white bg-white transition-all duration-300 checked:right-0 focus:outline-none" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-[#E5E7EB] transition-colors duration-300" htmlFor="toggle2"></label>
</div>
</div>
</div>
<div className="absolute right-2 top-2 hidden gap-1 group-hover:flex">
<button className="rounded p-1 text-[#6B7280] hover:bg-[#FFFDF9] hover:text-[#111111]"><i className="h-4 w-4" data-lucide="settings-2"></i></button>
<button className="rounded p-1 text-[#6B7280] hover:bg-red-50 hover:text-red-500"><i className="h-4 w-4" data-lucide="trash-2"></i></button>
</div>
</div>

<div className="interactive-card group relative flex flex-col gap-4 rounded-2xl border border-[#E5E7EB] bg-white p-2 sm:flex-row sm:items-center">
<div className="hidden cursor-grab px-2 text-[#E5E7EB] hover:text-[#6B7280] sm:block">
<i className="h-5 w-5" data-lucide="grip-vertical"></i>
</div>
<div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
<div className="flex-1 space-y-1 px-2 sm:px-0">
<div className="flex items-center gap-2">
<span className="font-semibold text-[#111111]">My Spotify Playlist</span>
</div>
<div className="flex items-center gap-2 text-xs text-[#6B7280]">
<span>open.spotify.com/playlist...</span>
</div>
</div>
<div className="flex items-center justify-between gap-6 border-t border-[#E5E7EB] px-2 pt-3 sm:border-t-0 sm:border-l sm:px-4 sm:pt-0">
<div className="flex items-center gap-4 text-xs font-medium">
<div className="text-center">
<span className="block text-[#111111]">89</span>
<span className="text-[10px] text-[#6B7280]">clicks</span>
</div>
</div>
<div className="relative inline-block w-10 align-middle select-none">
<input checked="" className="toggle-checkbox absolute block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 border-white bg-white transition-all duration-300 checked:right-0 focus:outline-none" id="toggle3" name="toggle" type="checkbox"/>
<label className="toggle-label block h-6 cursor-pointer overflow-hidden rounded-full bg-[#E5E7EB] transition-colors duration-300" htmlFor="toggle3"></label>
</div>
</div>
</div>
<div className="absolute right-2 top-2 hidden gap-1 group-hover:flex">
<button className="rounded p-1 text-[#6B7280] hover:bg-red-50 hover:text-red-500"><i className="h-4 w-4" data-lucide="trash-2"></i></button>
</div>
</div>
</div>
</div>



<div className="view-section hidden" id="view-analytics">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Analytics</h1>
<p className="text-sm text-[#6B7280]">Deep dive into your audience statistics.</p>
</div>
<div className="grid gap-6 lg:grid-cols-3">

<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 lg:col-span-2">
<h3 className="mb-6 font-semibold text-[#111111]">Visitors Over Time</h3>
<div className="flex h-64 items-end justify-between gap-4 border-b border-[#E5E7EB] pb-2">
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '30%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '45%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '35%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '60%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '50%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]" style={{height: '85%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '70%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '65%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '55%'}}></div>
<div className="w-full rounded-t bg-[#2EE6A6]/20 hover:bg-[#2EE6A6]" style={{height: '40%'}}></div>
</div>
<div className="mt-4 flex justify-between text-xs text-[#6B7280]">
<span>Oct 1</span>
<span>Oct 15</span>
<span>Nov 1</span>
</div>
</div>

<div className="space-y-6">
<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
<h3 className="mb-4 font-semibold text-[#111111]">Top Locations</h3>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2"><span className="text-lg">🇺🇸</span> USA</div>
<span className="font-medium">42%</span>
</div>
<div className="w-full overflow-hidden rounded-full bg-[#E5E7EB] h-1.5">
<div className="h-full bg-[#111111] w-[42%]"></div>
</div>
<div className="flex items-center justify-between text-sm pt-2">
<div className="flex items-center gap-2"><span className="text-lg">🇬🇧</span> UK</div>
<span className="font-medium">15%</span>
</div>
<div className="w-full overflow-hidden rounded-full bg-[#E5E7EB] h-1.5">
<div className="h-full bg-[#111111] w-[15%]"></div>
</div>
<div className="flex items-center justify-between text-sm pt-2">
<div className="flex items-center gap-2"><span className="text-lg">🇩🇪</span> Germany</div>
<span className="font-medium">8%</span>
</div>
<div className="w-full overflow-hidden rounded-full bg-[#E5E7EB] h-1.5">
<div className="h-full bg-[#111111] w-[8%]"></div>
</div>
</div>
</div>
<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
<h3 className="mb-4 font-semibold text-[#111111]">Device Type</h3>
<div className="flex items-center justify-center gap-8">
<div className="text-center">
<div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6]">
<i className="h-5 w-5" data-lucide="smartphone"></i>
</div>
<span className="block text-xl font-bold">85%</span>
<span className="text-xs text-[#6B7280]">Mobile</span>
</div>
<div className="h-10 w-px bg-[#E5E7EB]"></div>
<div className="text-center">
<div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F3F4F6]">
<i className="h-5 w-5" data-lucide="monitor"></i>
</div>
<span className="block text-xl font-bold">15%</span>
<span className="text-xs text-[#6B7280]">Desktop</span>
</div>
</div>
</div>
</div>
</div>
</div>



<div className="view-section hidden" id="view-earnings">
<div className="mb-8 flex items-center justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Earnings</h1>
<p className="text-sm text-[#6B7280]">Track your revenue and payouts.</p>
</div>
<button className="rounded-lg bg-[#111111] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-black">
                        Payout Settings
                    </button>
</div>
<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-2xl border border-[#E5E7EB] bg-[#111111] p-6 text-white">
<p className="text-sm text-gray-400">Available Balance</p>
<h2 className="mt-2 text-4xl font-bold tracking-tight">$124.50</h2>
<div className="mt-8">
<button className="w-full rounded-lg bg-[#2EE6A6] py-2.5 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#25D998]">
                                Withdraw Funds
                            </button>
</div>
</div>
<div className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
<p className="text-sm font-medium text-[#6B7280]">Pending (Processing)</p>
<h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#111111]">$45.00</h2>
<div className="mt-6 flex items-center gap-2 text-xs text-[#6B7280]">
<i className="h-3 w-3" data-lucide="info"></i>
                            Funds are available 7 days after purchase.
                        </div>
</div>
</div>
<div className="mt-8">
<h3 className="mb-4 text-lg font-semibold text-[#111111]">Recent Transactions</h3>
<div className="overflow-hidden rounded-xl border border-[#E5E7EB] bg-white">
<table className="w-full text-left text-sm">
<thead className="bg-[#F9FAFB] text-xs font-medium text-[#6B7280]">
<tr>
<th className="px-6 py-3">Item</th>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3 text-right">Amount</th>
</tr>
</thead>
<tbody className="divide-y divide-[#E5E7EB]">
<tr>
<td className="px-6 py-4 font-medium text-[#111111]">Digital Design Course</td>
<td className="px-6 py-4 text-[#6B7280]">Oct 24, 2023</td>
<td className="px-6 py-4"><span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Paid</span></td>
<td className="px-6 py-4 text-right font-medium text-[#111111]">$45.00</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#111111]">Digital Design Course</td>
<td className="px-6 py-4 text-[#6B7280]">Oct 23, 2023</td>
<td className="px-6 py-4"><span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Paid</span></td>
<td className="px-6 py-4 text-right font-medium text-[#111111]">$45.00</td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-[#111111]">1:1 Consultation</td>
<td className="px-6 py-4 text-[#6B7280]">Oct 21, 2023</td>
<td className="px-6 py-4"><span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">Pending</span></td>
<td className="px-6 py-4 text-right font-medium text-[#111111]">$150.00</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>



<div className="view-section hidden" id="view-settings">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-[#111111]">Settings</h1>
<p className="text-sm text-[#6B7280]">Manage your account details and profile.</p>
</div>
<div className="max-w-2xl space-y-8">

<div className="space-y-4">
<h3 className="font-medium text-[#111111]">Profile Information</h3>
<div className="flex items-center gap-6">
<img className="h-20 w-20 rounded-full bg-[#E5E7EB] border border-[#E5E7EB]" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<div>
<button className="rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-xs font-medium text-[#111111] hover:bg-[#F9FAFB]">Change Avatar</button>
<button className="ml-2 rounded-lg px-3 py-2 text-xs font-medium text-red-500 hover:bg-red-50">Remove</button>
</div>
</div>
<div className="grid gap-4">
<div>
<label className="mb-1 block text-xs font-medium text-[#6B7280]">Display Name</label>
<input className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#2EE6A6] focus:outline-none focus:ring-1 focus:ring-[#2EE6A6]" type="text" value="Felix Creator"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-[#6B7280]">Bio</label>
<textarea className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111111] placeholder:text-gray-400 focus:border-[#2EE6A6] focus:outline-none focus:ring-1 focus:ring-[#2EE6A6]" rows="3">Digital Artist &amp; Content Creator</textarea>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-[#6B7280]">Username (URL)</label>
<div className="flex rounded-lg border border-[#E5E7EB] bg-white">
<span className="flex items-center border-r border-[#E5E7EB] px-3 text-sm text-[#6B7280]">lynx.bio/</span>
<input className="w-full rounded-r-lg px-3 py-2 text-sm text-[#111111] focus:outline-none" type="text" value="felix"/>
</div>
</div>
</div>
</div>
<hr className="border-[#E5E7EB]"/>

<div className="space-y-4">
<h3 className="font-medium text-[#111111]">Security</h3>
<div>
<label className="mb-1 block text-xs font-medium text-[#6B7280]">Email Address</label>
<input className="w-full rounded-lg border border-[#E5E7EB] bg-white px-3 py-2 text-sm text-[#111111] focus:border-[#2EE6A6] focus:outline-none focus:ring-1 focus:ring-[#2EE6A6]" type="email" value="felix@example.com"/>
</div>
<button className="text-xs font-medium text-[#2EE6A6] hover:underline">Change Password</button>
</div>
<div className="pt-4">
<button className="rounded-lg bg-[#111111] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black">Save Changes</button>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden w-[420px] shrink-0 items-center justify-center border-l border-[#E5E7EB] bg-white xl:flex">
<div className="fixed top-0 flex h-full flex-col items-center justify-center py-8">
<div className="mb-4 flex items-center gap-2 text-xs font-medium text-[#6B7280]">
<i className="h-3 w-3" data-lucide="eye"></i> Live Preview
            </div>

<div className="relative h-[700px] w-[340px] overflow-hidden rounded-[3rem] border-[8px] border-[#111111] bg-[#FFFDF9] shadow-2xl">

<div className="absolute left-1/2 top-0 z-20 h-6 w-32 -translate-x-1/2 rounded-b-xl bg-[#111111]"></div>

<div className="phone-scroll h-full overflow-y-auto px-4 pb-8 pt-12">

<div className="absolute right-5 top-12 flex h-8 w-8 items-center justify-center rounded-full bg-[#111111]/5 text-[#111111] backdrop-blur-sm">
<i className="h-5 w-5" data-lucide="more-horizontal"></i>
</div>

<div className="flex flex-col items-center text-center">
<img alt="Profile" className="mb-4 h-20 w-20 rounded-full border-2 border-white shadow-sm" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<h2 className="text-lg font-bold tracking-tight text-[#111111]">Felix Creator</h2>
<p className="mt-1 text-xs font-medium text-[#6B7280]">Digital Artist &amp; Content Creator</p>

<div className="mt-4 flex gap-3">
<i className="h-5 w-5 text-[#111111]" data-lucide="instagram"></i>
<i className="h-5 w-5 text-[#111111]" data-lucide="twitter"></i>
<i className="h-5 w-5 text-[#111111]" data-lucide="youtube"></i>
<i className="h-5 w-5 text-[#111111]" data-lucide="mail"></i>
</div>
</div>

<div className="mt-8 space-y-3">

<a className="group relative flex w-full items-center justify-between rounded-lg bg-white p-1 pl-4 pr-1 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md border border-[#E5E7EB]" href="#">
<span className="text-sm font-medium text-[#111111]">Latest YouTube Video</span>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFFDF9]">
<i className="h-5 w-5 text-red-500" data-lucide="youtube"></i>
</div>
</a>

<a className="group relative flex w-full flex-col items-center justify-center rounded-lg bg-[#2EE6A6] py-3.5 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md" href="#">
<span className="text-sm font-bold text-[#111111]">Digital Design Course</span>
<span className="absolute right-3 top-1/2 -translate-y-1/2 rounded bg-[#111111] px-1.5 py-0.5 text-[9px] font-bold text-white">NEW</span>
</a>

<a className="group relative flex w-full items-center justify-between rounded-lg bg-white p-1 pl-4 pr-1 shadow-sm transition-transform hover:scale-[1.02] hover:shadow-md border border-[#E5E7EB]" href="#">
<span className="text-sm font-medium text-[#111111]">My Spotify Playlist</span>
<div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#FFFDF9]">
<i className="h-5 w-5 text-[#111111]" data-lucide="music"></i>
</div>
</a>

<a className="group relative flex w-full items-center justify-center rounded-lg bg-transparent border border-[#111111] py-3 shadow-sm transition-transform hover:scale-[1.02]" href="#">
<span className="text-sm font-medium text-[#111111]">Book a Consultation</span>
</a>
</div>

<div className="mt-12 flex items-center justify-center gap-1.5 opacity-50">
<i className="h-3 w-3 text-[#111111]" data-lucide="layers"></i>
<span className="text-[10px] font-semibold text-[#111111]">lynx</span>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E7EB] bg-white text-[#6B7280] hover:text-[#111111]">
<i className="h-4 w-4" data-lucide="share-2"></i>
</button>
<button className="rounded-full bg-[#111111] px-4 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-black">
                    Share my Link
                </button>
</div>
</div>
</aside>


    </>
  );
}
