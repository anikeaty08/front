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



        // App State
        let currentUser = null;
        
        // Tab Switching Logic
        function switchTab(tabId) {
            // Hide all views
            ['dashboard', 'roadmap', 'chat'].forEach(id => {
                document.getElementById('view-' + id).classList.add('hidden');
                
                // Reset nav styles (Desktop)
                const navBtn = document.querySelector(`.nav-item[data-target="${id}"]`);
                if(navBtn) {
                    navBtn.classList.remove('bg-slate-800/50', 'text-slate-200');
                    navBtn.classList.add('text-slate-400');
                    navBtn.querySelector('iconify-icon').classList.remove('text-indigo-400');
                    navBtn.querySelector('iconify-icon').classList.add('text-slate-500');
                }

                // Reset nav styles (Mobile)
                const mobBtn = document.querySelector(`button[data-target="${id}"].flex-col`);
                if(mobBtn) {
                    mobBtn.classList.remove('text-indigo-400');
                    mobBtn.classList.add('text-slate-500');
                }
            });

            // Show selected view
            const view = document.getElementById('view-' + tabId);
            view.classList.remove('hidden');
            if(tabId === 'chat') {
                view.classList.add('flex');
            }

            // Active State Desktop
            const activeNav = document.querySelector(`.nav-item[data-target="${tabId}"]`);
            if(activeNav) {
                activeNav.classList.add('bg-slate-800/50', 'text-slate-200');
                activeNav.classList.remove('text-slate-400');
                activeNav.querySelector('iconify-icon').classList.add('text-indigo-400');
                activeNav.querySelector('iconify-icon').classList.remove('text-slate-500');
            }

            // Active State Mobile
            const activeMob = document.querySelector(`button[data-target="${tabId}"].flex-col`);
            if(activeMob) {
                activeMob.classList.add('text-indigo-400');
                activeMob.classList.remove('text-slate-500');
            }
        }

        // Login Logic
        function handleLogin(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Authenticating...';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Simulate API delay
            setTimeout(() => {
                document.getElementById('auth-screen').classList.add('hidden');
                document.getElementById('app-container').classList.remove('hidden');
                // Trigger dashboard load animation
                switchTab('dashboard');
            }, 800);
        }

        // Chat Logic
        function sendMessage(e) {
            e.preventDefault();
            const input = document.getElementById('message-input');
            const msg = input.value.trim();
            if(!msg) return;

            const container = document.getElementById('chat-messages');
            
            // Create Message HTML
            const html = `
                <div class="flex gap-3 flex-row-reverse animate-fade-in">
                    <div class="h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">JD</div>
                    <div class="flex flex-col gap-1 items-end max-w-[85%] md:max-w-[60%]">
                        <div class="flex items-baseline gap-2">
                            <span class="text-[10px] text-slate-600">Just now</span>
                            <span class="text-xs font-medium text-slate-300">You</span>
                        </div>
                        <div class="bg-indigo-600/10 border border-indigo-500/20 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-slate-200 text-sm leading-relaxed">
                            ${msg}
                        </div>
                    </div>
                </div>
            `;
            
            container.insertAdjacentHTML('beforeend', html);
            input.value = '';
            container.scrollTop = container.scrollHeight;
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            // Set initial active state manually to ensure CSS matches JS state if needed
            // But switchTab called in login handles it.
        });

    
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
      

<div className="fixed flex bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#241f31] to-[#000000] z-50 top-0 right-0 bottom-0 left-0 items-center justify-center" id="auth-screen">
<div className="w-full max-w-sm p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-indigo-500/10">
<div className="flex justify-center mb-6">
<div className="h-10 w-10 bg-indigo-500/10 border border-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 font-medium tracking-tight">
                    GT
                </div>
</div>
<h2 className="text-center text-slate-200 text-lg font-medium tracking-tight mb-1">Welcome back</h2>
<p className="text-center text-xs text-slate-500 mb-8">Enter your credentials to access the group.</p>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email address</label>
<input className="placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm text-slate-300 bg-slate-950 w-full border-slate-800 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" required="" type="email" value="user@dsa.group"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Password</label>
<input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2.5 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm" required="" type="password" value="password"/>
</div>
<button className="w-full bg-slate-100 hover:bg-white text-slate-900 font-medium py-2.5 rounded-lg transition-colors mt-2 shadow-lg shadow-indigo-500/5" type="submit">
                    Sign In
                </button>
</form>
<div className="mt-6 text-center">
<p className="text-xs text-slate-600">Don't have an account? <a className="text-slate-400 hover:text-indigo-400 transition-colors" href="#">Request invite</a></p>
</div>
</div>
</div>

<div className="hidden flex h-full w-full" id="app-container">

<aside className="hidden md:flex w-64 flex-col border-r border-slate-800 bg-slate-900/30">
<div className="h-14 flex items-center px-6 border-b border-slate-800/50">
<div className="h-6 w-6 bg-indigo-500 rounded text-[10px] flex items-center justify-center text-white font-bold mr-2 tracking-tighter">GT</div>
<span className="font-medium text-slate-200 tracking-tight">DSA Tracker</span>
</div>
<nav className="flex-1 p-4 space-y-1">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all group active-nav" data-target="dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-slate-500 group-hover:text-indigo-400 transition-colors" height="18" icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all group" data-target="roadmap" onclick="switchTab('roadmap')">
<iconify-icon className="text-slate-500 group-hover:text-indigo-400 transition-colors" height="18" icon="solar:map-point-wave-linear" width="18"></iconify-icon>
                    Roadmap
                </button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 transition-all group" data-target="chat" onclick="switchTab('chat')">
<iconify-icon className="text-slate-500 group-hover:text-indigo-400 transition-colors" height="18" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
                    Group Chat
                    <span className="ml-auto bg-indigo-500/10 text-indigo-400 text-[10px] px-1.5 py-0.5 rounded font-medium">3</span>
</button>
</nav>
<div className="p-4 border-t border-slate-800/50">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium">JD</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-200">John Doe</span>
<span className="text-[10px] text-slate-500">Online</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-slate-950 relative">

<header className="md:hidden h-14 flex items-center justify-between px-4 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-2">
<div className="h-6 w-6 bg-indigo-500 rounded text-[10px] flex items-center justify-center text-white font-bold tracking-tighter">GT</div>
<span className="font-medium text-slate-200 tracking-tight">DSA Tracker</span>
</div>
<div className="h-7 w-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-[10px]">JD</div>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden relative" id="content-area">

<div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 animate-fade-in" id="view-dashboard">
<div>
<h1 className="text-xl md:text-2xl font-medium text-slate-100 tracking-tight mb-1">Dashboard</h1>
<p className="text-slate-500">Overview of your group's progress.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 text-xs">Total Topics</span>
<iconify-icon className="text-slate-600" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<span className="text-2xl font-medium text-slate-200">12</span>
</div>
<div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 text-xs">Tasks Done</span>
<iconify-icon className="text-emerald-500/70" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-2xl font-medium text-slate-200">45<span className="text-slate-600 text-sm">/80</span></span>
</div>
<div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 text-xs">Upcoming</span>
<iconify-icon className="text-indigo-400" icon="solar:calendar-linear"></iconify-icon>
</div>
<span className="text-2xl font-medium text-slate-200">3</span>
</div>
<div className="p-4 rounded-xl border border-slate-800 bg-slate-900/20">
<div className="flex items-center justify-between mb-2">
<span className="text-slate-500 text-xs">Streak</span>
<iconify-icon className="text-orange-400" icon="solar:flame-linear"></iconify-icon>
</div>
<span className="text-2xl font-medium text-slate-200">5 <span className="text-sm font-normal text-slate-500">days</span></span>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-slate-300">Upcoming Deadlines</h3>
<div className="rounded-xl border border-slate-800 bg-slate-900/20 divide-y divide-slate-800/50">
<div className="p-4 flex items-center justify-between group hover:bg-slate-800/30 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-200 font-medium">Binary Search Implementation</h4>
<p className="text-xs text-slate-500">Arrays &amp; Strings • Assigned to Group</p>
</div>
</div>
<span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded border border-orange-400/20">Today</span>
</div>
<div className="p-4 flex items-center justify-between group hover:bg-slate-800/30 transition-colors">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-200 font-medium">Reverse Linked List</h4>
<p className="text-xs text-slate-500">Linked List • Assigned to John</p>
</div>
</div>
<span className="text-xs text-slate-400">Tomorrow</span>
</div>
</div>
</div>
</div>

<div className="hidden p-4 md:p-8 max-w-5xl mx-auto space-y-6" id="view-roadmap">
<div className="flex items-end justify-between">
<div>
<h1 className="text-xl md:text-2xl font-medium text-slate-100 tracking-tight mb-1">Roadmap</h1>
<p className="text-slate-500">Master Data Structures &amp; Algorithms topic by topic.</p>
</div>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            Add Topic
                        </button>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/20 overflow-hidden">
<div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center text-xs font-bold">01</span>
<h3 className="font-medium text-slate-200">Arrays &amp; Strings</h3>
</div>
<div className="text-xs text-slate-500">3 Tasks • 1 Pending</div>
</div>
<div className="divide-y divide-slate-800/50">

<div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-slate-800/30 transition-colors">
<div className="flex items-start gap-3">
<button className="mt-0.5 text-slate-600 hover:text-indigo-500 transition-colors">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</button>
<div>
<h4 className="text-slate-300 font-medium leading-none mb-1.5">Two Sum Problem</h4>
<div className="flex items-center gap-3">
<a className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="solar:notebook-linear"></iconify-icon> Theory
                                            </a>
<a className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> LeetCode
                                            </a>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-4 ml-8 md:ml-0">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full ring-2 ring-slate-950 bg-slate-700 text-[10px] flex items-center justify-center text-white">JD</div>
<div className="h-6 w-6 rounded-full ring-2 ring-slate-950 bg-slate-700 text-[10px] flex items-center justify-center text-white">AS</div>
</div>
<span className="text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">Completed</span>
</div>
</div>

<div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-slate-800/30 transition-colors">
<div className="flex items-start gap-3">
<button className="mt-0.5 text-slate-600 hover:text-indigo-500 transition-colors">
<iconify-icon icon="solar:circle-linear" width="20"></iconify-icon>
</button>
<div>
<h4 className="text-slate-300 font-medium leading-none mb-1.5">Valid Palindrome</h4>
<div className="flex items-center gap-3">
<a className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="solar:notebook-linear"></iconify-icon> Theory
                                            </a>
<a className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-indigo-400 transition-colors" href="#">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon> LeetCode
                                            </a>
</div>
</div>
</div>
<div className="flex items-center justify-between md:justify-end gap-4 ml-8 md:ml-0">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full ring-2 ring-slate-950 bg-slate-700 text-[10px] flex items-center justify-center text-white">JD</div>
</div>
<span className="text-[10px] text-orange-400 bg-orange-400/10 px-2 py-0.5 rounded border border-orange-400/20">In Progress</span>
</div>
</div>
</div>
<div className="p-2 border-t border-slate-800/50 bg-slate-900/30">
<button className="w-full py-2 text-xs text-slate-500 hover:text-slate-300 border border-dashed border-slate-700 hover:border-slate-500 rounded-lg transition-all flex items-center justify-center gap-1">
<iconify-icon icon="solar:add-circle-linear"></iconify-icon> Add Task
                            </button>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-900/20 overflow-hidden opacity-75 hover:opacity-100 transition-opacity">
<div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-md bg-slate-800 border border-slate-700 text-slate-400 flex items-center justify-center text-xs font-bold">02</span>
<h3 className="font-medium text-slate-200">Linked Lists</h3>
</div>
<div className="text-xs text-slate-500">0 Tasks</div>
</div>
<div className="p-8 text-center">
<p className="text-slate-600 text-xs">No tasks added yet.</p>
<button className="mt-2 text-indigo-400 text-xs hover:underline">Create first task</button>
</div>
</div>
</div>

<div className="hidden flex flex-col h-full relative" id="view-chat">

<div className="absolute top-0 left-0 right-0 h-16 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md z-10 flex items-center px-4 md:px-8 justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-slate-200 font-medium">Study Group Alpha</h3>
<p className="text-xs text-slate-500">3 members online</p>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto pt-20 pb-4 px-4 md:px-8 space-y-6 scroll-smooth" id="chat-messages">

<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-purple-600 flex-shrink-0 flex items-center justify-center text-white text-xs">AS</div>
<div className="flex flex-col gap-1 max-w-[85%] md:max-w-[60%]">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-slate-300">Alex Smith</span>
<span className="text-[10px] text-slate-600">10:30 AM</span>
</div>
<div className="bg-slate-900 border border-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-slate-300 text-sm leading-relaxed">
                                    Hey guys, has anyone solved the <span className="text-indigo-400 font-medium">Two Sum</span> problem efficiently?
                                </div>
</div>
</div>

<div className="flex gap-3 flex-row-reverse">
<div className="h-8 w-8 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center text-white text-xs">JD</div>
<div className="flex flex-col gap-1 items-end max-w-[85%] md:max-w-[60%]">
<div className="flex items-baseline gap-2">
<span className="text-[10px] text-slate-600">10:32 AM</span>
<span className="text-xs font-medium text-slate-300">You</span>
</div>
<div className="bg-indigo-600/10 border border-indigo-500/20 p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-slate-200 text-sm leading-relaxed">
                                    Yeah! I used a hash map to store the complements. Reduced complexity to O(n).
                                </div>
</div>
</div>

<div className="flex gap-3">
<div className="h-8 w-8 rounded-full bg-teal-600 flex-shrink-0 flex items-center justify-center text-white text-xs">MK</div>
<div className="flex flex-col gap-1 max-w-[85%] md:max-w-[60%]">
<div className="flex items-baseline gap-2">
<span className="text-xs font-medium text-slate-300">Mike K.</span>
<span className="text-[10px] text-slate-600">10:35 AM</span>
</div>
<div className="bg-slate-900 border border-slate-800 p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-slate-300 text-sm leading-relaxed">
                                    That's smart. I was stuck on the nested loop approach. I'll share a resource I found.
                                </div>
</div>
</div>
</div>

<div className="p-4 md:px-8 bg-slate-950 border-t border-slate-800">
<form className="relative flex items-center gap-2" onsubmit="sendMessage(event)">
<input autocomplete="off" className="w-full bg-slate-900 border border-slate-800 text-slate-300 placeholder-slate-600 rounded-lg pl-4 pr-12 py-3 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-sm transition-all" id="message-input" placeholder="Type your message..." type="text"/>
<button className="absolute right-2 p-1.5 text-slate-500 hover:text-indigo-400 transition-colors" type="submit">
<iconify-icon icon="solar:plain-3-bold-duotone" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>

<nav className="md:hidden border-t border-slate-800 bg-slate-950 flex justify-around p-2 pb-safe">
<button className="flex flex-col items-center p-2 text-slate-500 active-nav-mobile" data-target="dashboard" onclick="switchTab('dashboard')">
<iconify-icon height="20" icon="solar:widget-2-linear" width="20"></iconify-icon>
<span className="text-[10px] mt-1">Home</span>
</button>
<button className="flex flex-col items-center p-2 text-slate-500" data-target="roadmap" onclick="switchTab('roadmap')">
<iconify-icon height="20" icon="solar:map-point-wave-linear" width="20"></iconify-icon>
<span className="text-[10px] mt-1">Roadmap</span>
</button>
<button className="flex flex-col items-center p-2 text-slate-500 relative" data-target="chat" onclick="switchTab('chat')">
<div className="absolute top-2 right-4 h-2 w-2 bg-indigo-500 rounded-full"></div>
<iconify-icon height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
<span className="text-[10px] mt-1">Chat</span>
</button>
</nav>
</main>
</div>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    </style>

    </>
  );
}
