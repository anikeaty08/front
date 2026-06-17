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
            inter: ['Inter', 'sans-serif'],
            satoshi: ['Satoshi', 'sans-serif']
          },
          colors: {
            brand: {
              50: '#f0f4ff',
              100: '#e0e7ff',
              200: '#c7d2fe',
              300: '#a5b4fc',
              400: '#818cf8',
              500: '#6366f1',
              600: '#4f46e5',
              700: '#4338ca',
              800: '#3730a3',
              900: '#312e81'
            }
          }
        }
      }
    }
  


    lucide.createIcons();

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Automation level slider
    const autoRange = document.getElementById('autoRange');
    const autoVal = document.getElementById('autoVal');
    autoRange.addEventListener('input', () => {
      autoVal.textContent = `Level ${autoRange.value}`;
    });

    // Workspace dropdown
    const workspaceBtn = document.getElementById('workspaceBtn');
    const workspaceMenu = document.getElementById('workspaceMenu');
    workspaceBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      workspaceMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => workspaceMenu.classList.add('hidden'));

    // Workspace selection
    workspaceMenu.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        e.preventDefault();
        const selectedText = e.target.closest('a').textContent.trim();
        workspaceBtn.querySelector('div').innerHTML = `
          <div class="w-2 h-2 bg-green-400 rounded-full"></div>
          ${selectedText}
        `;
        workspaceMenu.classList.add('hidden');
      }
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
      
<div className="min-h-screen flex flex-col">

<header className="flex items-center justify-between px-4 sm:px-8 lg:px-12 py-4 lg:py-6 border-b border-gray-200">
<div className="flex items-center gap-3">
<a className="lg:text-2xl text-xl font-bold tracking-tight font-satoshi" href="#">Sync</a>
</div>
<nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
<a className="hover:text-brand-600 text-gray-600 transition-colors flex items-center gap-1" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          Features
        </a>
<a className="hover:text-brand-600 text-gray-600 transition-colors flex items-center gap-1" href="#">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
          Enterprise
        </a>
<a className="hover:text-brand-600 text-gray-600 transition-colors flex items-center gap-1" href="#">
<svg className="lucide lucide-dollar-sign w-4 h-4" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          Pricing
        </a>
<a className="hover:text-brand-600 text-gray-600 transition-colors flex items-center gap-1" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
          Resources
        </a>
</nav>
<div className="flex items-center gap-2 lg:gap-4">
<button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Sign in</button>
<button className="flex items-center gap-2 text-xs lg:text-sm font-medium px-3 lg:px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors shadow-lg">
<svg className="lucide lucide-rocket w-4 h-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
          Start Free Trial
        </button>
</div>
</header>

<section className="px-4 sm:px-8 lg:px-24 py-12 lg:py-20 text-center relative overflow-hidden bg-gradient-to-br from-brand-50/30 to-purple-50/30">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-100 text-brand-700 rounded-full text-sm font-medium mb-6">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
          Trusted by 50,000+ teams worldwide
        </div>
<h1 className="max-w-4xl sm:text-4xl lg:text-6xl leading-tight text-3xl font-medium tracking-tight font-satoshi mr-auto ml-auto">
          Transform chaos into<br className="hidden lg:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-purple-600">seamless productivity</span>
</h1>
<p className="mx-auto mt-6 max-w-2xl text-base lg:text-xl text-gray-600 leading-relaxed">
          Connect Microsoft Teams, Asana, Figma, and 200+ tools in one intelligent workspace. Save 15+ hours per week with AI-powered automation.
        </p>

<form className="mx-auto mt-8 lg:mt-12 max-w-md lg:max-w-xl flex flex-col sm:flex-row gap-3">
<input className="flex-1 rounded-lg border border-gray-300 px-4 lg:px-5 py-3 lg:py-4 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 focus:outline-none placeholder-gray-400" placeholder="sarah@company.com" required="" type="email"/>
<button className="flex gap-2 lg:px-8 lg:py-4 bg-brand-600 hover:bg-brand-700 transition-all duration-200 hover:shadow-xl text-sm font-semibold text-white rounded-lg pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-center" type="submit">
            Get Free Demo
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
<p className="mt-4 text-xs lg:text-sm text-gray-500 flex justify-center items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          SOC 2 compliant • GDPR ready • Enterprise-grade security
        </p>

<div className="mt-12 lg:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 text-left shadow-lg hover:shadow-xl transition-shadow">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-video w-4 h-4 text-white" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-sm font-semibold text-gray-700">Microsoft Teams</span>
</div>
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
<svg className="lucide lucide-calendar w-4 h-4 text-blue-600" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div>
<p className="text-sm font-medium">Q4 Strategy Review</p>
<p className="text-xs text-gray-500">Today, 2:00 PM - 3:30 PM</p>
</div>
</div>
<div className="flex items-center justify-between text-xs text-gray-500">
<span>8 attendees confirmed</span>
<svg className="lucide lucide-external-link w-3 h-3" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</div>
</div>
<button className="w-full mt-4 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Join Meeting
            </button>
</div>

<div className="lg:p-6 flex flex-col text-white text-center bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="flex items-center gap-2 mb-4">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-sm font-medium opacity-90">Productivity Boost</span>
</div>
<div className="lg:text-6xl text-5xl font-medium font-satoshi mb-2">85%</div>
<p className="text-sm opacity-90 max-w-[200px]">Average time saved on repetitive tasks across 10,000+ teams</p>
<div className="flex items-center gap-4 mt-4 text-xs opacity-75">
<div className="flex items-center gap-1">
<svg className="lucide lucide-clock w-3 h-3" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                15h/week
              </div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                50k+ teams
              </div>
</div>
</div>

<div className="relative h-64 lg:h-auto">
<div className="absolute inset-0 rounded-xl border border-gray-200 bg-gray-50"></div>

<div className="absolute top-4 left-4 rotate-[-8deg] w-3/4 bg-red-50 border border-red-200 rounded-lg p-3 shadow-md">
<div className="flex items-center gap-2 text-xs font-medium text-red-700 mb-2">
<svg className="lucide lucide-check-square w-4 h-4" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg> Asana
              </div>
<p className="text-xs text-red-600">5 tasks completed</p>
</div>

<div className="absolute top-8 right-4 rotate-[6deg] w-3/4 bg-purple-50 border border-purple-200 rounded-lg p-3 shadow-md">
<div className="flex items-center gap-2 text-xs font-medium text-purple-700 mb-2">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg> Figma
              </div>
<p className="text-xs text-purple-600">Design review ready</p>
</div>

<div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-white border border-gray-200 rounded-lg p-4 shadow-lg">
<div className="flex items-center gap-2 text-xs font-medium text-gray-700 mb-3">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Notion Workspace
              </div>
<p className="text-xs text-gray-500 mb-1">Auto-generated summary:</p>
<p className="text-sm font-medium mb-2">Product Launch Timeline</p>
<div className="flex items-center justify-between text-xs text-gray-400">
<span>Updated 2 min ago</span>
<div className="flex items-center gap-1">
<svg className="lucide lucide-users w-3 h-3" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Team Alpha</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 lg:mt-16 bg-white rounded-xl border border-gray-200 p-4 lg:p-8 max-w-4xl mx-auto">
<div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
<div className="flex-1 text-left">
<h3 className="text-lg lg:text-xl font-satoshi font-bold mb-2">200+ Premium Integrations</h3>
<p className="text-sm text-gray-600 mb-4">Connect your entire tech stack with zero-config automation</p>
<div className="grid grid-cols-4 lg:grid-cols-6 gap-4">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-slack w-5 h-5 text-blue-600" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></svg>
</div>
<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-trello w-5 h-5 text-orange-600" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg>
</div>
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-github w-5 h-5 text-green-600" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
<div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-figma w-5 h-5 text-purple-600" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
</div>
<div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
<svg className="lucide lucide-youtube w-5 h-5 text-red-600" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
<span className="text-xs font-bold text-gray-600">+195</span>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-colors">
<svg className="lucide lucide-command w-5 h-5 text-brand-600" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
</button>
<div className="text-2xl font-bold text-gray-300">+</div>
<button className="w-12 h-12 flex items-center justify-center rounded-lg bg-brand-50 border border-brand-200 hover:bg-brand-100 transition-colors">
<svg className="lucide lucide-zap w-5 h-5 text-brand-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
<div className="hidden lg:block w-px h-8 bg-gray-300"></div>
<div className="hidden lg:block text-sm text-gray-500">
<p className="font-medium">Quick Setup</p>
<p className="text-xs">5 minutes or less</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-8 lg:px-24 lg:py-16 border-gray-200 border-t pt-12 pr-4 pb-12 pl-4">
<div className="text-center mb-12">
<h2 className="lg:text-3xl text-2xl font-bold tracking-tight font-satoshi mb-4">Customize Your Experience</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Fine-tune every aspect of your workflow with our advanced configuration options</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="space-y-4">
<h3 className="font-satoshi font-semibold flex items-center gap-2">
<svg className="lucide lucide-bell w-4 h-4 text-brand-600" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
            Smart Notifications
          </h3>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-gray-200 peer-focus:ring-2 peer-focus:ring-brand-500 rounded-full peer peer-checked:bg-brand-600 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all peer-checked:after:translate-x-full"></div>
<span className="ml-3 text-sm">Enable AI filtering</span>
</label>
<p className="text-xs text-gray-500">Reduce notification noise by 90% with intelligent priority detection</p>
</div>

<div className="space-y-4">
<h3 className="font-satoshi font-semibold flex items-center gap-2">
<svg className="lucide lucide-settings w-4 h-4 text-brand-600" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Automation Level
          </h3>
<div className="">
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600" id="autoRange" max="10" min="1" type="range" value="7"/>
<div className="flex justify-between text-xs text-gray-500 mt-2">
<span className="">Manual</span>
<span className="font-medium text-brand-600" id="autoVal">Level 7</span>
<span>Full Auto</span>
</div>
</div>
<p className="text-xs text-gray-500">Current: Advanced workflows with human approval</p>
</div>

<div className="space-y-4">
<h3 className="font-satoshi font-semibold flex items-center gap-2">
<svg className="lucide lucide-shield w-4 h-4 text-brand-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            Team Access
          </h3>
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer">
<input className="shrink-0 peer appearance-none w-4 h-4 border border-gray-300 rounded mt-0.5 checked:bg-brand-600 checked:border-brand-600 focus:ring-2 focus:ring-brand-500" type="checkbox"/>
<div className="peer-checked:text-brand-600">
<svg className="lucide lucide-check w-3 h-3 text-white absolute opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:relative peer-checked:-mt-3.5 peer-checked:-ml-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<span className="text-sm font-medium">Admin privileges</span>
<p className="text-xs text-gray-500">Manage integrations &amp; billing</p>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer">
<input checked="" className="shrink-0 peer appearance-none w-4 h-4 border border-gray-300 rounded mt-0.5 checked:bg-brand-600 checked:border-brand-600 focus:ring-2 focus:ring-brand-500" type="checkbox"/>
<div className="peer-checked:text-brand-600">
<svg className="lucide lucide-check w-3 h-3 text-white absolute opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:relative peer-checked:-mt-3.5 peer-checked:-ml-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<span className="text-sm font-medium">Guest collaboration</span>
<p className="text-xs text-gray-500">External stakeholder access</p>
</div>
</label>
</div>
</div>

<div className="space-y-4">
<h3 className="font-satoshi font-semibold flex items-center gap-2">
<svg className="lucide lucide-folder w-4 h-4 text-brand-600" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
            Active Workspace
          </h3>
<div className="relative">
<button className="w-full flex items-center justify-between gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium hover:bg-gray-50 focus:ring-2 focus:ring-brand-500" id="workspaceBtn">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Marketing Team Alpha
              </div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-600" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl hidden z-20" id="workspaceMenu">
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-brand-50 transition-colors" href="#">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                Engineering Core
              </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-brand-50 transition-colors" href="#">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                Product Strategy
              </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-brand-50 transition-colors" href="#">
<div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                Customer Success
              </a>
<a className="flex items-center gap-2 px-4 py-3 text-sm text-brand-600 hover:bg-brand-50" href="#">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
                Create new workspace
              </a>
</div>
</div>
<p className="text-xs text-gray-500">47 active integrations • 12 team members</p>
</div>
</div>
</section>

<footer className="border-t border-gray-200 px-4 sm:px-8 lg:px-12 py-6 lg:py-8 mt-auto">
<div className="flex flex-col lg:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-6 text-sm text-gray-500 order-2 lg:order-1">
<p>© <span id="year">2025</span> FlowSync Pro. Powering productivity worldwide.</p>
<div className="hidden sm:flex items-center gap-4">
<a className="hover:text-brand-600 transition-colors" href="#">API Status</a>
<a className="hover:text-brand-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-brand-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="flex items-center gap-4 text-gray-400 order-1 lg:order-2">
<a className="hover:text-brand-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:text-brand-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="hover:text-brand-600 transition-colors" href="#">
<svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="hover:text-brand-600 transition-colors" href="#">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
