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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

    tailwind.config = {
      theme: {
        extend: {
          animation: {
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'bounce-subtle': 'bounce 2s infinite',
            'fade-in': 'fadeIn 0.5s ease-in-out',
          },
          keyframes: {
            fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(10px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' }
            }
          }
        }
      }
    }
  
}

{

    lucide.createIcons();
    
    // Enhanced Tabs with Animation
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-tab');
        
        // Reset all tabs
        tabs.forEach(t => {
          t.classList.remove('')})})})
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
      
<div className="flex sm:px-6 lg:px-8 bg-[url(https://images.unsplash.com/photo-1648540077784-211de288a28a?w=2160&q=80)] bg-cover pt-12 pr-4 pb-12 pl-4 items-start justify-center">
<div className="w-full max-w-2xl bg-neutral-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-800/50 overflow-hidden">

<div className="flex items-center justify-between px-6 h-14 bg-gradient-to-r from-neutral-800/50 to-neutral-700/30 border-b border-neutral-700/50">
<div className="flex items-center space-x-3">
<button aria-label="Close" className="text-neutral-400 hover:text-red-400 transition-colors duration-200 p-1 hover:bg-red-500/10 rounded-lg">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="h-4 w-px bg-neutral-700"></div>
<div className="flex items-center space-x-2">
<div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full animate-pulse-slow"></div>
<span className="text-xs font-medium text-neutral-300">#DEV-2847</span>
</div>
</div>
<div className="flex items-center space-x-2">
<button aria-label="Set Reminder" className="text-neutral-400 hover:text-amber-400 transition-all duration-200 p-2 hover:bg-amber-500/10 rounded-lg group">
<svg className="lucide lucide-bell w-4 h-4 group-hover:animate-bounce-subtle" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button aria-label="Favorite" className="text-neutral-400 hover:text-yellow-400 transition-all duration-200 p-2 hover:bg-yellow-500/10 rounded-lg group">
<svg className="lucide lucide-star w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<button aria-label="Share" className="text-neutral-400 hover:text-blue-400 transition-colors duration-200 p-2 hover:bg-blue-500/10 rounded-lg">
<svg className="lucide lucide-share-2 w-4 h-4" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5"></circle><circle cx="6" cy="12"></circle><circle cx="18" cy="19"></circle><line></line><line></line></svg>
</button>
<button aria-label="More options" className="text-neutral-400 hover:text-neutral-200 transition-colors duration-200 p-2 hover:bg-neutral-700/50 rounded-lg">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>

<div className="px-6 pt-8 pb-2">
<div className="flex items-start space-x-4">
<div className="p-3 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-xl border border-indigo-500/30">
<svg className="lucide lucide-code-2 w-6 h-6 text-indigo-400" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-100 leading-tight">Develop Signup Flow</h2>
<p className="text-sm text-neutral-400 mt-1">Sprint 12 • Engineering Team</p>
</div>
</div>
</div>

<div className="px-6 pb-6">
<div className="flex items-center space-x-3">
<div className="flex items-center space-x-2 bg-blue-950/40 border border-blue-800/30 px-3 py-1.5 rounded-full">
<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-blue-300">In Review</span>
</div>
<div className="flex items-center space-x-2 bg-pink-950/40 border border-pink-800/30 px-3 py-1.5 rounded-full">
<svg className="lucide lucide-zap w-3 h-3 text-pink-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-xs font-medium text-pink-300">Medium Priority</span>
</div>
<div className="flex items-center space-x-2 bg-emerald-950/40 border border-emerald-800/30 px-3 py-1.5 rounded-full">
<svg className="lucide lucide-target w-3 h-3 text-emerald-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle><circle cx="12" cy="12"></circle></svg>
<span className="text-xs font-medium text-emerald-300">On Track</span>
</div>
</div>
</div>

<div className="px-6 pb-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex items-center space-x-3 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
<div className="p-2 bg-violet-500/20 rounded-lg">
<svg className="lucide lucide-calendar-plus w-4 h-4 text-violet-400" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<span className="text-xs text-neutral-400 uppercase tracking-wide">Created</span>
<p className="text-sm text-neutral-100 font-medium">March 11, 2024</p>
<p className="text-xs text-neutral-400">9:52 AM PST</p>
</div>
</div>

<div className="flex items-center space-x-3 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
<div className="p-2 bg-orange-500/20 rounded-lg">
<svg className="lucide lucide-calendar-clock w-4 h-4 text-orange-400" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path><circle cx="16" cy="16"></circle></svg>
</div>
<div className="flex-1">
<span className="text-xs text-neutral-400 uppercase tracking-wide">Due Date</span>
<p className="text-sm text-neutral-100 font-medium">April 15, 2024</p>
<p className="text-xs text-orange-400">10 days remaining</p>
</div>
</div>

<div className="flex items-center space-x-3 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
<div className="p-2 bg-cyan-500/20 rounded-lg">
<svg className="lucide lucide-users-2 w-4 h-4 text-cyan-400" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="10" cy="8"></circle><path></path></svg>
</div>
<div className="flex-1">
<span className="text-xs text-neutral-400 uppercase tracking-wide">Team</span>
<div className="flex -space-x-2 mt-1">
<img alt="Maddox" className="w-7 h-7 rounded-full ring-2 ring-neutral-900 border border-neutral-700" src="https://i.pravatar.cc/32?img=12" />
<img alt="Eva" className="w-7 h-7 rounded-full ring-2 ring-neutral-900 border border-neutral-700" src="https://i.pravatar.cc/32?img=7" />
<img alt="Riley" className="w-7 h-7 rounded-full ring-2 ring-neutral-900 border border-neutral-700" src="https://i.pravatar.cc/32?img=20" />
<div className="w-7 h-7 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-2 ring-neutral-900 border border-neutral-700 flex items-center justify-center">
<span className="text-xs text-white font-medium">+2</span>
</div>
</div>
</div>
</div>

<div className="flex items-center space-x-3 p-4 bg-neutral-800/30 rounded-xl border border-neutral-700/50">
<div className="p-2 bg-emerald-500/20 rounded-lg">
<svg className="lucide lucide-trending-up w-4 h-4 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<span className="text-xs text-neutral-400 uppercase tracking-wide">Progress</span>
<div className="flex items-center space-x-2 mt-1">
<div className="flex-1 bg-neutral-700 rounded-full h-2">
<div className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{width: `68%`}}></div>
</div>
<span className="text-xs text-emerald-400 font-medium">68%</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 pb-6">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-hash w-4 h-4 text-neutral-500" data-lucide="hash" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><line></line><line></line><line></line></svg>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center space-x-1 bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-700/30 text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium">
<svg className="lucide lucide-server w-3 h-3" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20"></rect><rect height="8" rx="2" ry="2" width="20"></rect><line></line><line></line></svg>
<span>Backend</span>
</span>
<span className="inline-flex items-center space-x-1 bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-700/30 text-green-300 px-2.5 py-1 rounded-full text-xs font-medium">
<svg className="lucide lucide-user-plus w-3 h-3" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="9" cy="7"></circle><line></line><line></line></svg>
<span>Signup</span>
</span>
<span className="inline-flex items-center space-x-1 bg-gradient-to-r from-purple-900/50 to-violet-900/50 border border-purple-700/30 text-purple-300 px-2.5 py-1 rounded-full text-xs font-medium">
<svg className="lucide lucide-webhook w-3 h-3" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span>API</span>
</span>
<span className="inline-flex items-center space-x-1 bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-700/30 text-orange-300 px-2.5 py-1 rounded-full text-xs font-medium">
<svg className="lucide lucide-shield-check w-3 h-3" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span>Security</span>
</span>
</div>
</div>
</div>

<div className="px-6 pb-6">
<div className="bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 border border-neutral-700/50 rounded-xl p-5 backdrop-blur-sm">
<div className="flex items-center space-x-2 mb-3">
<svg className="lucide lucide-file-text w-4 h-4 text-indigo-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<h3 className="text-sm font-medium text-neutral-100">Description</h3>
</div>
<p className="text-sm text-neutral-300 leading-relaxed">Implement the new user signup process for NovaFlow. The flow should include email verification, password strength validation, and seamless integration with our onboarding API. Make sure to handle all edge cases and provide clear user feedback throughout the process.</p>
<div className="flex items-center space-x-4 mt-4 pt-4 border-t border-neutral-700/50">
<div className="flex items-center space-x-2 text-xs text-neutral-400">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Est. 5-8 hours</span>
</div>
<div className="flex items-center space-x-2 text-xs text-neutral-400">
<svg className="lucide lucide-git-branch w-3 h-3" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line></line><circle cx="18" cy="6"></circle><circle cx="6" cy="18"></circle><path></path></svg>
<span>feature/signup-flow</span>
</div>
</div>
</div>
</div>

<nav className="border-b border-neutral-700/50 px-6 bg-neutral-800/20">
<ul className="flex space-x-1" id="tabs">
<li>
<button className="tab-btn group relative px-4 py-3 text-sm font-medium text-indigo-400 bg-indigo-500/10 rounded-t-lg border-b-2 border-indigo-500" data-tab="activity">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span>Activity</span>
<span className="bg-indigo-500 text-white text-xs px-1.5 py-0.5 rounded-full">8</span>
</div>
</button>
</li>
<li>
<button className="tab-btn group px-4 py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/30 rounded-t-lg transition-all" data-tab="mywork">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<span>My Work</span>
</div>
</button>
</li>
<li>
<button className="tab-btn group px-4 py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/30 rounded-t-lg transition-all" data-tab="assigned">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
<span>Assigned</span>
<span className="bg-neutral-600 text-neutral-300 text-xs px-1.5 py-0.5 rounded-full">3</span>
</div>
</button>
</li>
<li className="">
<button className="tab-btn group px-4 py-3 text-sm font-medium text-neutral-400 hover:text-neutral-200 hover:bg-neutral-700/30 rounded-t-lg transition-all" data-tab="comments">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="">Comments</span>
<span className="bg-neutral-600 text-neutral-300 text-xs px-1.5 py-0.5 rounded-full">12</span>
</div>
</button>
</li>
</ul>
</nav>

<div className="max-h-96 overflow-y-auto">

<div className="tab-panel animate-fade-in" id="panel-activity">
<div className="px-6 py-6 space-y-8">

<div className="">
<div className="flex items-center space-x-2 mb-4">
<h4 className="text-sm font-semibold text-neutral-200">Today</h4>
<div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
<span className="text-xs text-neutral-500">March 12, 2024</span>
</div>
<div className="relative pl-8">
<div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>
<div className="space-y-6 relative -left-[33px]">

<div className="flex items-start relative group">
<div className="absolute left-2.5 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 border-2 border-neutral-900 group-hover:scale-125 transition-transform"></div>
<div className="ml-6 flex-1 p-4 bg-neutral-800/40 rounded-xl border border-neutral-700/30 hover:border-indigo-500/30 transition-colors">
<div className="flex items-start justify-between">
<div className="flex items-center space-x-3">
<img alt="Maddox" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/24?img=12" />
<div className="">
<p className="text-sm text-neutral-100">
<span className="font-medium text-indigo-400">Maddox Ruiz</span> moved this issue from 
                              <span className="inline-flex items-center space-x-1 bg-amber-900/30 text-amber-300 px-2 py-0.5 rounded text-xs">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Planned</span>
</span> to 
                              <span className="inline-flex items-center space-x-1 bg-blue-900/30 text-blue-300 px-2 py-0.5 rounded text-xs">
<svg className="lucide lucide-eye w-3 h-3" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="12"></circle></svg>
<span>In Review</span>
</span>
</p>
<time className="text-xs text-neutral-400">11:42 AM • 2 hours ago</time>
</div>
</div>
<button className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-500 hover:text-neutral-300">
<svg className="lucide lucide-more-horizontal w-4 h-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>
</div>

<div className="flex items-start relative group">
<div className="absolute left-2.5 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 border-2 border-neutral-900 group-hover:scale-125 transition-transform"></div>
<div className="ml-6 flex-1 p-4 bg-neutral-800/40 rounded-xl border border-neutral-700/30 hover:border-yellow-500/30 transition-colors">
<div className="flex items-center space-x-3">
<img alt="Eva" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/24?img=7" />
<div>
<p className="text-sm text-neutral-100">
<span className="font-medium text-yellow-400">Eva Lin</span> reacted with 
                            <span className="inline-flex items-center bg-yellow-900/30 text-yellow-300 px-2 py-1 rounded-full text-sm ml-1">
                              🎉 <span className="ml-1 text-xs">+3</span>
</span>
</p>
<time className="text-xs text-neutral-400">11:17 AM • 2 hours ago</time>
</div>
</div>
</div>
</div>

<div className="flex items-start relative group">
<div className="absolute left-2.5 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 border-2 border-neutral-900 group-hover:scale-125 transition-transform"></div>
<div className="ml-6 flex-1 p-4 bg-neutral-800/40 rounded-xl border border-neutral-700/30 hover:border-green-500/30 transition-colors">
<div className="flex items-start space-x-3">
<img alt="Maddox" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/24?img=12" />
<div className="flex-1">
<p className="text-sm text-neutral-100 mb-2">
<span className="font-medium text-green-400">Maddox Ruiz</span> commented
                          </p>
<div className="bg-neutral-900/60 border border-neutral-700/50 rounded-lg p-3">
<p className="text-sm text-neutral-300">Looking great! The email validation logic is solid. Let's make sure we add rate limiting to prevent abuse.</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-start relative group">
<div className="absolute left-2.5 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 border-2 border-neutral-900 group-hover:scale-125 transition-transform"></div>
<div className="ml-6 flex-1 p-4 bg-neutral-800/40 rounded-xl border border-neutral-700/30 hover:border-purple-500/30 transition-colors">
<div className="flex items-start space-x-3">
<img alt="Riley" className="w-6 h-6 rounded-full" src="https://i.pravatar.cc/24?img=20" />
<div className="flex-1">
<p className="text-sm text-neutral-100 mb-3">
<span className="font-medium text-purple-400">Riley Chan</span> uploaded files
                          </p>

<div className="space-y-2">

<div className="flex items-center space-x-3 p-3 bg-neutral-900/60 border border-neutral-700/50 rounded-lg hover:border-indigo-500/30 transition-colors cursor-pointer">
<div className="p-2 bg-indigo-500/20 rounded-lg">
<svg className="lucide lucide-file-code w-4 h-4 text-indigo-400" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-100">signup-api-spec.yaml</p>
<p className="text-xs text-neutral-400">YAML • 1.2 MB • 10:47 AM</p>
</div>
<button className="text-neutral-500 hover:text-indigo-400 transition-colors">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>

<div className="flex items-center space-x-3 p-3 bg-neutral-900/60 border border-neutral-700/50 rounded-lg hover:border-pink-500/30 transition-colors cursor-pointer">
<div className="p-2 bg-pink-500/20 rounded-lg">
<svg className="lucide lucide-image w-4 h-4 text-pink-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18"></rect><circle cx="9" cy="9"></circle><path></path></svg>
</div>
<div className="flex-1">
<p className="text-sm font-medium text-neutral-100">ui-mockup-v2.png</p>
<p className="text-xs text-neutral-400">PNG • 245 KB • 10:53 AM</p>
</div>
<div className="w-12 h-12 rounded-lg overflow-hidden border border-neutral-700">
<img alt="UI Mockup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&q=80" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center space-x-2 mb-4">
<h4 className="text-sm font-semibold text-neutral-200">Yesterday</h4>
<div className="flex-1 h-px bg-gradient-to-r from-neutral-700 to-transparent"></div>
<span className="text-xs text-neutral-500">March 11, 2024</span>
</div>
<div className="relative pl-8">
<div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-neutral-600 to-transparent opacity-50"></div>
<div className="space-y-4">
<div className="flex items-start relative group">
<div className="absolute left-2.5 top-2 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 border-2 border-neutral-900 opacity-75"></div>
<div className="ml-6 flex-1 p-3 bg-neutral-800/20 rounded-lg border border-neutral-700/20">
<div className="flex items-center space-x-3">
<img alt="Maddox" className="w-5 h-5 rounded-full" src="https://i.pravatar.cc/20?img=12" />
<p className="text-sm text-neutral-300">
<span className="font-medium text-blue-400">Maddox Ruiz</span> created this issue
                        </p>
<time className="text-xs text-neutral-500 ml-auto">9:52 AM</time>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden tab-panel" id="panel-mywork">
<div className="p-12 text-center">
<div className="p-4 bg-neutral-800/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
<svg className="lucide lucide-user-check w-8 h-8 text-neutral-500" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<p className="text-sm text-neutral-400">No work items assigned to you</p>
</div>
</div>
<div className="hidden tab-panel" id="panel-assigned">
<div className="p-12 text-center">
<div className="p-4 bg-neutral-800/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
<svg className="lucide lucide-users w-8 h-8 text-neutral-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="9" cy="7"></circle></svg>
</div>
<p className="text-sm text-neutral-400">Nothing assigned to your team</p>
</div>
</div>
<div className="hidden tab-panel" id="panel-comments">
<div className="p-12 text-center">
<div className="p-4 bg-neutral-800/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
<svg className="lucide lucide-message-circle w-8 h-8 text-neutral-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<p className="text-sm text-neutral-400">No comments yet</p>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
