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
    
    // Add subtle interactions
    document.addEventListener('DOMContentLoaded', function() {
      // Calendar day click handler
      document.querySelectorAll('.calendar-day').forEach(day => {
        day.addEventListener('click', function() {
          console.log('Day clicked:', this);
        });
      });
      
      // Event badge click handler
      document.querySelectorAll('.event-badge').forEach(badge => {
        badge.addEventListener('click', function(e) {
          e.stopPropagation();
          console.log('Event clicked:', this.textContent);
        });
      });
      
      // View switcher
      document.querySelectorAll('.view-switcher button').forEach(btn => {
        btn.addEventListener('click', function() {
          document.querySelectorAll('.view-switcher button').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
        });
      });
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 blur-sm hue-rotate-180" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a65defa-27ae-4447-8d3d-17cce237ace7_3840w.jpg")'}}></div>

<div className="floating-orb floating-orb-1"></div>
<div className="floating-orb floating-orb-2"></div>
<div className="h-screen flex items-center justify-center p-8">
<div className="calendar-container w-full max-w-[1700px] h-[92vh] flex flex-col overflow-hidden animate-blur-in shadow-2xl relative">

<div className="window-controls flex animate-fade-in stagger-1 flex-shrink-0 pt-6 pr-8 pb-6 pl-8 items-center justify-between">
<div className="flex items-center space-x-4">
<span className="traffic-light w-3.5 h-3.5 bg-red-500 rounded-full transition-colors hover:bg-red-400"></span>
<span className="traffic-light w-3.5 h-3.5 bg-yellow-500 rounded-full transition-colors hover:bg-yellow-400"></span>
<span className="traffic-light w-3.5 h-3.5 bg-green-500 rounded-full transition-colors hover:bg-green-400"></span>
</div>
<div className="absolute left-1/2 transform -translate-x-1/2">
<h1 className="text-xl font-semibold tracking-tight shimmer text-white">Calendar</h1>
</div>
<div className="flex items-center space-x-3">
<button className="nav-button p-2.5">
<svg className="lucide lucide-bell w-4 h-4 text-gray-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="nav-button p-2.5">
<svg className="lucide lucide-settings w-4 h-4 text-gray-300" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden lg:flex flex-col w-84 border-r overflow-y-auto animate-slide-right stagger-2 flex-shrink-0 border-gray-800/20">
<div className="px-8 py-8">
<div className="relative animate-scale-in stagger-4">
<input className="search-input w-full text-sm rounded-2xl pl-12 pr-4 py-4 focus:outline-none placeholder-gray-400" placeholder="Search events..." type="text"/>
<svg className="lucide lucide-search w-5 h-5 absolute left-4 top-4 transition-colors text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<div className="px-8 pb-8 animate-fade-in stagger-5">
<div className="calendar-header-gradient rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{background: 'linear-gradient(135deg, rgba(255, 45, 85, 0.1) 0%, rgba(88, 86, 214, 0.15) 50%, rgba(0, 122, 255, 0.15) 100%)'}}>
<div className="flex items-center justify-between mb-8">
<button className="nav-button p-2.5">
<svg className="lucide lucide-chevron-left w-5 h-5 text-gray-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h3 className="text-xl font-semibold tracking-tight text-white">September 2024</h3>
<button className="nav-button p-2.5">
<svg className="lucide lucide-chevron-right w-5 h-5 text-gray-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-7 gap-2 text-xs text-center mb-6 text-gray-400">
<span className="p-3 font-semibold">S</span><span className="p-3 font-semibold">M</span><span className="p-3 font-semibold">T</span><span className="p-3 font-semibold">W</span><span className="p-3 font-semibold">T</span><span className="p-3 font-semibold">F</span><span className="p-3 font-semibold">S</span>
</div>
<div className="grid grid-cols-7 gap-2 text-sm">
<span className="mini-calendar-day text-gray-500">25</span><span className="mini-calendar-day text-gray-500">26</span><span className="mini-calendar-day text-gray-500">27</span><span className="mini-calendar-day text-gray-500">28</span><span className="mini-calendar-day text-gray-500">29</span><span className="mini-calendar-day text-gray-500">30</span><span className="mini-calendar-day text-gray-500">31</span>
<span className="mini-calendar-day">1</span><span className="mini-calendar-day">2</span><span className="mini-calendar-day">3</span><span className="mini-calendar-day">4</span><span className="mini-calendar-day">5</span><span className="mini-calendar-day">6</span><span className="mini-calendar-day">7</span>
<span className="mini-calendar-day">8</span><span className="mini-calendar-day">9</span><span className="mini-calendar-day">10</span><span className="mini-calendar-day">11</span><span className="mini-calendar-day today animate-pulse-glow">12</span><span className="mini-calendar-day">13</span><span className="mini-calendar-day">14</span>
<span className="mini-calendar-day">15</span><span className="mini-calendar-day">16</span><span className="mini-calendar-day">17</span><span className="mini-calendar-day">18</span><span className="mini-calendar-day">19</span><span className="mini-calendar-day">20</span><span className="mini-calendar-day">21</span>
<span className="mini-calendar-day">22</span><span className="mini-calendar-day">23</span><span className="mini-calendar-day">24</span><span className="mini-calendar-day">25</span><span className="mini-calendar-day">26</span><span className="mini-calendar-day">27</span><span className="mini-calendar-day">28</span>
<span className="mini-calendar-day">29</span><span className="mini-calendar-day">30</span><span className="mini-calendar-day text-gray-500">1</span><span className="mini-calendar-day text-gray-500">2</span><span className="mini-calendar-day text-gray-500">3</span><span className="mini-calendar-day text-gray-500">4</span><span className="mini-calendar-day text-gray-500">5</span>
</div>
</div>
</div>

<div className="px-8 py-8 border-t animate-fade-in stagger-6 border-gray-800/20">
<h4 className="text-xl font-semibold mb-8 tracking-tight text-white">My Calendars</h4>
<ul className="space-y-2 text-sm">
<li className="sidebar-item flex items-center space-x-4 p-4 cursor-pointer">
<div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce-gentle shadow-lg"></div>
<span className="font-medium text-gray-200">Personal</span>
<div className="ml-auto w-6 h-6 rounded-lg text-xs flex items-center justify-center font-semibold backdrop-blur-sm bg-gray-700/50 text-gray-300">3</div>
</li>
<li className="sidebar-item flex items-center space-x-4 p-4 cursor-pointer">
<div className="w-4 h-4 bg-green-500 rounded-full animate-bounce-gentle shadow-lg" style={{animationDelay: '0.2s'}}></div>
<span className="font-medium text-gray-200">Work</span>
<div className="ml-auto w-6 h-6 rounded-lg text-xs flex items-center justify-center font-semibold backdrop-blur-sm bg-gray-700/50 text-gray-300">7</div>
</li>
<li className="sidebar-item flex items-center space-x-4 p-4 cursor-pointer">
<div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce-gentle shadow-lg" style={{animationDelay: '0.4s'}}></div>
<span className="font-medium text-gray-200">Family</span>
<div className="ml-auto w-6 h-6 rounded-lg text-xs flex items-center justify-center font-semibold backdrop-blur-sm bg-gray-700/50 text-gray-300">2</div>
</li>
<li className="sidebar-item flex items-center space-x-4 p-4 cursor-pointer">
<div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce-gentle shadow-lg" style={{animationDelay: '0.6s'}}></div>
<span className="font-medium text-gray-200">Birthdays</span>
<div className="ml-auto w-6 h-6 rounded-lg text-xs flex items-center justify-center font-semibold backdrop-blur-sm bg-gray-700/50 text-gray-300">1</div>
</li>
</ul>
<button className="apple-button mt-10 w-full flex items-center justify-center space-x-3 text-sm font-semibold py-4 rounded-2xl hover-lift">
<svg className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<span>Add Calendar</span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden animate-slide-up stagger-3">

<header className="flex animate-fade-in stagger-4 glass-effect border-b pt-8 pr-8 pb-8 pl-8 items-center justify-between bg-neutral-50/5 border-gray-800/20">
<div className="flex items-center space-x-8">
<div className="flex items-center space-x-6">
<button className="nav-button p-3">
<svg className="lucide lucide-chevron-left w-6 h-6 text-gray-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-4xl font-bold tracking-tight shimmer text-white">September 2024</h2>
<button className="nav-button p-3">
<svg className="lucide lucide-chevron-right w-6 h-6 text-gray-300" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<button className="apple-button flex items-center space-x-3 px-6 py-3 text-sm font-semibold rounded-xl hover-lift">
<svg className="lucide lucide-calendar-plus w-4 h-4" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
<span className="">New Event</span>
</button>
</div>
<div className="flex items-center space-x-4">
<div className="view-switcher flex">
<button className="active text-gray-300">Month</button>
<button className="text-gray-400">Week</button>
<button className="text-gray-400">Day</button>
<button className="text-gray-400">Year</button>
</div>
<button className="nav-button p-3">
<svg className="lucide lucide-more-horizontal w-5 h-5 text-gray-300" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
</header>

<div className="flex-1 p-8 overflow-auto animate-scale-in stagger-5">
<div className="calendar-grid">

<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Sunday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Monday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Tuesday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Wednesday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Thursday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Friday</div>
<div className="text-center py-6 text-sm font-semibold tracking-wide text-gray-400">Saturday</div>

<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">25</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">26</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">27</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">28</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">29</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">30</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-6">
<div className="text-lg font-medium mb-2">31</div>
</div>

<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">1</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Team Meeting</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">2</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">3</div>
<div className="space-y-1">
<div className="event-badge bg-green-500/20 text-white border-green-400/30">Workout</div>
<div className="event-badge bg-orange-500/20 text-white border-orange-400/30">Dinner with Sarah</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">4</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">5</div>
<div className="space-y-1">
<div className="event-badge bg-purple-500/20 text-white border-purple-400/30">Mom's Birthday</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">6</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Project Review</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-7">
<div className="text-lg font-semibold mb-3 text-white">7</div>
</div>

<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">8</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">9</div>
<div className="space-y-1">
<div className="event-badge bg-green-500/20 text-white border-green-400/30">Gym Session</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">10</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Client Call</div>
<div className="event-badge bg-red-500/20 text-white border-red-400/30">Dentist</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">11</div>
</div>
<div className="calendar-day today p-4 animate-fade-in stagger-8 animate-pulse-glow">
<div className="text-lg font-bold mb-3 text-white">12</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/30 text-white border-blue-300/50">Stand-up Meeting</div>
<div className="event-badge bg-orange-500/30 text-white border-orange-300/50">Lunch with Alex</div>
<div className="event-badge bg-green-500/30 text-white border-green-300/50">Evening Run</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">13</div>
<div className="space-y-1">
<div className="event-badge bg-purple-500/20 text-white border-purple-400/30">Movie Night</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-8">
<div className="text-lg font-semibold mb-3 text-white">14</div>
</div>

<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">15</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Team Workshop</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">16</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">17</div>
<div className="space-y-1">
<div className="event-badge bg-green-500/20 text-white border-green-400/30">Yoga Class</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">18</div>
<div className="space-y-1">
<div className="event-badge bg-orange-500/20 text-white border-orange-400/30">Family Dinner</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">19</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">20</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Presentation</div>
<div className="event-badge bg-purple-500/20 text-white border-purple-400/30">Concert</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">21</div>
</div>

<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">22</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">23</div>
<div className="space-y-1">
<div className="event-badge bg-green-500/20 text-white border-green-400/30">Morning Jog</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">24</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">25</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Sprint Planning</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">26</div>
<div className="space-y-1">
<div className="event-badge bg-orange-500/20 text-white border-orange-400/30">Date Night</div>
</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">27</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">28</div>
<div className="space-y-1">
<div className="event-badge bg-purple-500/20 text-white border-purple-400/30">Weekend Trip</div>
</div>
</div>

<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">29</div>
</div>
<div className="calendar-day p-4 animate-fade-in stagger-9">
<div className="text-lg font-semibold mb-3 text-white">30</div>
<div className="space-y-1">
<div className="event-badge bg-blue-500/20 text-white border-blue-400/30">Month End Review</div>
</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-9">
<div className="text-lg font-medium mb-2">1</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-9">
<div className="text-lg font-medium mb-2">2</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-9">
<div className="text-lg font-medium mb-2">3</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-9">
<div className="text-lg font-medium mb-2">4</div>
</div>
<div className="calendar-day p-4 text-gray-500 animate-fade-in stagger-9">
<div className="text-lg font-medium mb-2">5</div>
</div>
</div>
</div>
</main>
</div>
</div>
</div>




    </>
  );
}
