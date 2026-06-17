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
      
// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all tabs
    document.querySelectorAll('.tab-btn').forEach(tab => {
      tab.classList.remove('active');
      tab.classList.add('inactive');
      tab.style.backgroundColor = '#363636';
      tab.style.color = 'rgb(209, 213, 219)';
    });
    
    // Add active class to clicked tab
    btn.classList.add('active');
    btn.classList.remove('inactive');
    btn.style.backgroundColor = '#5E9FD3';
    btn.style.color = 'white';
    
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Show selected tab content
    const tabId = btn.getAttribute('data-tab') + '-content';
    document.getElementById(tabId).classList.add('active');
  });
});

// Dropdown functionality
document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = trigger.parentElement;
    const menu = dropdown.querySelector('.dropdown-menu');
    
    // Close other dropdowns
    document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
      if (otherMenu !== menu) {
        otherMenu.classList.remove('show');
      }
    });
    
    // Toggle current dropdown
    menu.classList.toggle('show');
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
    menu.classList.remove('show');
  });
});

// Prevent dropdown from closing when clicking inside
document.querySelectorAll('.dropdown-menu').forEach(menu => {
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// Update datetime every second
function updateDateTime() {
  const now = new Date();
  const options = { 
    weekday: 'short', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  };
  document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
}

setInterval(updateDateTime, 1000);
updateDateTime();

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
      
<div className="flex h-full">

<aside className="w-16 flex flex-col default bg-[#121212] border-0 pt-4 pb-4 space-y-6 items-center" style={{}}>
<nav className="flex flex-col items-center space-y-6">
<button className="text-gray-400 hover:text-white transition-colors" style={{}}>
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
<button className="text-gray-400 hover:text-white transition-colors" style={{}}>
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</button>
<button className="text-blue-500" style={{}}>
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="text-gray-400 hover:text-white transition-colors" style={{}}>
<svg className="lucide lucide-file-bar-chart w-5 h-5" data-lucide="file-bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 18v-2"></path><path d="M12 18v-4"></path><path d="M16 18v-6"></path></svg>
</button>
</nav>
<div className="flex-1"></div>
<button className="text-gray-400 hover:text-white transition-colors" style={{}}>
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</aside>

<div className="flex-1 flex flex-col">

<header className="flex h-14 default bg-[#121212] border-0 pr-4 pl-4 items-center justify-between" style={{}}>
<div className="flex items-center space-x-8">
<div className="flex items-center space-x-2">
<span className="font-semibold text-sm text-white">tastytrade</span>
</div>
<nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
<a className="hover:text-white transition-colors text-gray-400" href="#" style={{}}>Dashboard</a>
<a className="hover:text-white transition-colors text-slate-50" href="#" style={{}}>Trading</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#" style={{}}>Manage</a>
</nav>
</div>
<div className="flex-1 mx-4 max-w-md relative">
<input className="w-full pl-10 pr-4 py-1.5 rounded-md bg-gray-800 border border-gray-700 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Find a symbol or company" style={{}} type="text"/>
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="flex items-center space-x-4">
<span className="text-xs text-gray-400" id="datetime" style={{}}>Wed, Jul 9, 2025, 01:36 PM GMT+2</span>
<span className="px-3 py-0.5 rounded-full bg-emerald-600/10 text-emerald-400 text-xs font-medium" style={{}}>Live</span>
<div className="relative">
<button className="flex items-center space-x-2 hover:bg-gray-800/50 rounded-md px-2 py-1 transition-colors" style={{}}>
<div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold bg-blue-600" style={{}}>M</div>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto bg-[#1C1C1C] pt-6 pr-6 pb-6 pl-6">

<div className="mb-6">
<h1 className="text-2xl font-semibold text-white tracking-tight mb-2">Economic Calendar</h1>
<p className="text-sm text-gray-400" style={{}}>Track economic events, earnings, dividends, splits and IPOs that may impact your trades</p>
</div>

<div className="flex mb-6 space-x-1">
<button className="tab-btn active text-sm font-medium rounded-md pt-2 pr-4 pb-2 pl-4" data-tab="economic" style={{backgroundColor: 'rgb(94, 159, 211)', color: 'white'}}>Economic</button>
<button className="tab-btn text-sm font-medium rounded-md pt-2 pr-4 pb-2 pl-4 inactive" data-tab="earnings" style={{backgroundColor: 'rgb(54, 54, 54)', color: 'rgb(209, 213, 219)'}}>Earnings</button>
<button className="tab-btn text-sm font-medium rounded-md pt-2 pr-4 pb-2 pl-4 inactive" data-tab="dividends" style={{backgroundColor: 'rgb(54, 54, 54)', color: 'rgb(209, 213, 219)'}}>Dividends</button>
<button className="tab-btn text-sm font-medium rounded-md pt-2 pr-4 pb-2 pl-4 inactive" data-tab="splits" style={{backgroundColor: 'rgb(54, 54, 54)', color: 'rgb(209, 213, 219)'}}>Splits</button>
<button className="tab-btn text-sm font-medium rounded-md pt-2 pr-4 pb-2 pl-4 inactive" data-tab="ipos" style={{backgroundColor: 'rgb(54, 54, 54)', color: 'rgb(209, 213, 219)'}}>IPOs</button>
</div>

<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 mb-6">
<div className="flex flex-wrap items-center gap-3">

<div className="dropdown">
<button className="dropdown-trigger flex transition-colors hover:bg-[#1] text-sm bg-[#363636] border-gray-700 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 space-x-2 items-center" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="" id="date-range-text">Select Date Range</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu" style={{width: '320px', left: '0', right: 'auto'}}>
<div className="p-3 border-b border-gray-700" style={{}}>
<div className="flex items-center justify-between mb-3">
<h4 className="text-sm font-medium text-white">Date Range</h4>
<button className="text-gray-400 hover:text-white" id="calendar-close" style={{}}>
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex space-x-2 mb-3">
<button className="preset-btn active px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" style={{}}>Today</button>
<button className="preset-btn px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" style={{}}>This Week</button>
<button className="preset-btn px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" style={{}}>This Month</button>
</div>
<div className="flex items-center justify-between mb-2">
<button className="text-gray-400 hover:text-white" id="prev-month" style={{}}>
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<span className="text-sm font-medium text-white" id="calendar-month">July 2025</span>
<button className="text-gray-400 hover:text-white" id="next-month" style={{}}>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="p-3">
<div className="calendar-grid" id="calendar-grid">
<div className="calendar-header">S</div>
<div className="calendar-header">M</div>
<div className="calendar-header">T</div>
<div className="calendar-header">W</div>
<div className="calendar-header">T</div>
<div className="calendar-header">F</div>
<div className="calendar-header">S</div>
<div className="calendar-day other-month">29</div><div className="calendar-day other-month">30</div><div className="calendar-day">1</div><div className="calendar-day">2</div><div className="calendar-day">3</div><div className="calendar-day">4</div><div className="calendar-day">5</div><div className="calendar-day">6</div><div className="calendar-day">7</div><div className="calendar-day">8</div><div className="calendar-day today selected">9</div><div className="calendar-day">10</div><div className="calendar-day">11</div><div className="calendar-day">12</div><div className="calendar-day">13</div><div className="calendar-day">14</div><div className="calendar-day">15</div><div className="calendar-day">16</div><div className="calendar-day">17</div><div className="calendar-day">18</div><div className="calendar-day">19</div><div className="calendar-day">20</div><div className="calendar-day">21</div><div className="calendar-day">22</div><div className="calendar-day">23</div><div className="calendar-day">24</div><div className="calendar-day">25</div><div className="calendar-day">26</div><div className="calendar-day">27</div><div className="calendar-day">28</div><div className="calendar-day">29</div><div className="calendar-day">30</div><div className="calendar-day">31</div><div className="calendar-day other-month">1</div><div className="calendar-day other-month">2</div><div className="calendar-day other-month">3</div><div className="calendar-day other-month">4</div><div className="calendar-day other-month">5</div><div className="calendar-day other-month">6</div><div className="calendar-day other-month">7</div><div className="calendar-day other-month">8</div><div className="calendar-day other-month">9</div></div>
</div>
</div>
</div>

<div className="dropdown">
<button className="dropdown-trigger flex transition-colors hover:bg-[#1] text-sm bg-[#363636] border-gray-700 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 space-x-2 items-center" style={{}}>
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path className="" d="M2 12h20"></path></svg>
<span className="" id="country-text">All Countries</span>
<svg className="lucide lucide-chevron-down w-[16px] h-[16px]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(229, 231, 235)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu" style={{width: '280px', left: '0', right: 'auto'}}>
<div className="p-3 border-b border-gray-700" style={{}}>
<h4 className="text-sm font-medium text-white mb-2">Country Selection</h4>
<div className="flex space-x-2 mb-3">
<button className="preset-btn active px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" data-preset="all" style={{}}>All</button>
<button className="preset-btn px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" data-preset="g20" style={{}}>G20</button>
<button className="preset-btn px-2 py-1 rounded text-xs bg-gray-700 text-gray-300 hover:bg-gray-600" data-preset="major" style={{}}>Major</button>
</div>
</div>
<div className="max-h-48 overflow-y-auto">
<div className="country-item p-2 flex items-center space-x-3" data-country="us">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="US" className="w-5 h-3" src="https://flagcdn.com/w20/us.png"/>
<span className="text-sm text-gray-300" style={{}}>United States</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="eu">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="EU" className="w-5 h-3" src="https://flagcdn.com/w20/eu.png"/>
<span className="text-sm text-gray-300" style={{}}>European Union</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="jp">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="JP" className="w-5 h-3" src="https://flagcdn.com/w20/jp.png"/>
<span className="text-sm text-gray-300" style={{}}>Japan</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="gb">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="GB" className="w-5 h-3" src="https://flagcdn.com/w20/gb.png"/>
<span className="text-sm text-gray-300" style={{}}>United Kingdom</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="ca">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="CA" className="w-5 h-3" src="https://flagcdn.com/w20/ca.png"/>
<span className="text-sm text-gray-300" style={{}}>Canada</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="au">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="AU" className="w-5 h-3" src="https://flagcdn.com/w20/au.png"/>
<span className="text-sm text-gray-300">Australia</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="ch">
<input checked="" className="country-checkbox" type="checkbox"/>
<img alt="CH" className="w-5 h-3" src="https://flagcdn.com/w20/ch.png"/>
<span className="text-sm text-gray-300">Switzerland</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="cn">
<input className="country-checkbox" type="checkbox"/>
<img alt="CN" className="w-5 h-3" src="https://flagcdn.com/w20/cn.png"/>
<span className="text-sm text-gray-300">China</span>
</div>
<div className="country-item p-2 flex items-center space-x-3" data-country="nz">
<input className="country-checkbox" type="checkbox"/>
<img alt="NZ" className="w-5 h-3" src="https://flagcdn.com/w20/nz.png"/>
<span className="text-sm text-gray-300">New Zealand</span>
</div>
</div>
</div>
</div>

<div className="dropdown">
<button className="dropdown-trigger flex transition-colors hover:bg-[#1] text-sm bg-[#363636] border-gray-700 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 space-x-2 items-center">
<svg className="lucide lucide-trending-up w-4 h-4" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.5 8.5L9 12l-7 7"></path><path d="M16 7h6v6"></path></svg>
<span className="" id="impact-text">All Impact</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu" style={{width: '240px', left: '0', right: 'auto'}}>
<div className="p-3 border-b border-gray-700">
<h4 className="text-sm font-medium text-white mb-2">Impact Level</h4>
</div>
<div>
<div className="impact-item p-2 flex items-center space-x-3" data-impact="high">
<input checked="" className="impact-checkbox" type="checkbox"/>
<div className="impact-dot high"></div>
<span className="text-sm text-gray-300">High Impact</span>
</div>
<div className="impact-item p-2 flex items-center space-x-3" data-impact="medium">
<input checked="" className="impact-checkbox" type="checkbox"/>
<div className="impact-dot medium"></div>
<span className="text-sm text-gray-300">Medium Impact</span>
</div>
<div className="impact-item p-2 flex items-center space-x-3" data-impact="low">
<input checked="" className="impact-checkbox" type="checkbox"/>
<div className="impact-dot low"></div>
<span className="text-sm text-gray-300">Low Impact</span>
</div>
</div>
</div>
</div>
</div>

<div className="dropdown">
<button className="dropdown-trigger flex transition-colors hover:bg-[#1] text-sm bg-[#363636] border-gray-700 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3 space-x-2 items-center">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<span className="" id="timezone-text">GMT+2</span>
<svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="dropdown-menu" style={{width: '200px', right: '0', left: 'auto'}}>
<div className="p-2">
<div className="dropdown-item" data-timezone="GMT+2">GMT+2 (Local)</div>
<div className="dropdown-item" data-timezone="GMT+0">GMT+0 (UTC)</div>
<div className="dropdown-item" data-timezone="GMT-5">GMT-5 (EST)</div>
<div className="dropdown-item" data-timezone="GMT-8">GMT-8 (PST)</div>
<div className="dropdown-item" data-timezone="GMT+9">GMT+9 (JST)</div>
</div>
</div>
</div>
</div>

<div className="min-h-0 flex-1">

<div className="tab-content active" id="economic-content">
<div className="space-y-4">

<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Today - July 9, 2025</h3>
<span className="text-xs text-gray-400">15 events</span>
</div>
</div>

<div className="now-indicator" style={{top: '120px'}}></div>

<div className="space-y-2">

<div className="event-item past border-[#33333] border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-gray-500">09:00</div>
<img alt="EU" className="w-5 h-3" src="https://flagcdn.com/w20/eu.png"/>
<div className="impact-dot medium"></div>
<div className="">
<div className="text-sm font-medium text-gray-300">EU Industrial Production</div>
<div className="text-xs text-gray-500">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 2.1%
                      </div>
<div className="text-sm font-medium text-green-400">
<span className="text-xs text-gray-500">Act:</span> 2.3%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 2.2%
                      </div>
</div>
</div>
</div>

<div className="event-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-orange-400 font-semibold">13:30</div>
<img alt="US" className="w-5 h-3" src="https://flagcdn.com/w20/us.png"/>
<div className="impact-dot high"></div>
<div>
<div className="text-sm font-medium text-white">US CPI</div>
<div className="text-xs text-gray-400">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 3.2%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 3.1%
                      </div>
<div className="px-2 py-1 bg-orange-500/20 rounded text-xs text-orange-400">In 10 min</div>
</div>
</div>
</div>

<div className="event-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-gray-300">15:00</div>
<img alt="US" className="w-5 h-3" src="https://flagcdn.com/w20/us.png"/>
<div className="impact-dot medium"></div>
<div>
<div className="text-sm font-medium text-gray-200">US Retail Sales</div>
<div className="text-xs text-gray-400">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 1.8%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 1.9%
                      </div>
</div>
</div>
</div>

<div className="event-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-gray-300">16:30</div>
<img alt="US" className="w-5 h-3" src="https://flagcdn.com/w20/us.png"/>
<div className="impact-dot low"></div>
<div className="">
<div className="text-sm font-medium text-gray-200">US Business Inventories</div>
<div className="text-xs text-gray-400">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 0.3%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 0.2%
                      </div>
</div>
</div>
</div>
</div>
</div>

<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Tomorrow - July 10, 2025</h3>
<span className="text-xs text-gray-400">8 events</span>
</div>
</div>
<div className="space-y-2">
<div className="event-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-gray-300">08:00</div>
<img alt="GB" className="w-5 h-3" src="https://flagcdn.com/w20/gb.png"/>
<div className="impact-dot medium"></div>
<div>
<div className="text-sm font-medium text-gray-200">UK GDP</div>
<div className="text-xs text-gray-400">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 0.4%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 0.3%
                      </div>
</div>
</div>
</div>
<div className="event-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="event-time text-sm font-mono text-gray-300">13:30</div>
<img alt="US" className="w-5 h-3" src="https://flagcdn.com/w20/us.png"/>
<div className="impact-dot high"></div>
<div>
<div className="text-sm font-medium text-gray-200">US PPI</div>
<div className="text-xs text-gray-400">Monthly</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Prev:</span> 2.8%
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Fore:</span> 2.7%
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="earnings-content">
<div className="space-y-4">
<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Today - July 9, 2025</h3>
<span className="text-xs text-gray-400">23 companies</span>
</div>
</div>
<div className="space-y-2">
<div className="stock-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="text-sm font-mono text-gray-300">Before Market</div>
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">TSLA</div>
<div>
<div className="text-sm font-medium text-white">Tesla Inc</div>
<div className="text-xs text-gray-400">Q2 2025 Earnings</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">EPS Est:</span> $2.15
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Rev Est:</span> $24.5B
                      </div>
</div>
</div>
</div>
<div className="stock-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="text-sm font-mono text-gray-300">After Market</div>
<div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs font-bold">NVDA</div>
<div>
<div className="text-sm font-medium text-white">NVIDIA Corporation</div>
<div className="text-xs text-gray-400">Q2 2025 Earnings</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">EPS Est:</span> $5.45
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Rev Est:</span> $28.2B
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="dividends-content">
<div className="space-y-4">
<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Today - July 9, 2025</h3>
<span className="text-xs text-gray-400">12 companies</span>
</div>
</div>
<div className="space-y-2">
<div className="stock-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="text-sm font-mono text-gray-300">Ex-Dividend</div>
<div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white text-xs font-bold">KO</div>
<div className="">
<div className="text-sm font-medium text-white">The Coca-Cola Company</div>
<div className="text-xs text-gray-400">Quarterly Dividend</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Amount:</span> $0.46
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Yield:</span> 2.8%
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="splits-content">
<div className="space-y-4">
<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Today - July 9, 2025</h3>
<span className="text-xs text-gray-400">3 companies</span>
</div>
</div>
<div className="space-y-2">
<div className="stock-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="text-sm font-mono text-gray-300">Stock Split</div>
<div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">AMZN</div>
<div>
<div className="text-sm font-medium text-white">Amazon.com Inc</div>
<div className="text-xs text-gray-400">Stock Split</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Ratio:</span> 20:1
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Type:</span> Split
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="ipos-content">
<div className="space-y-4">
<div className="time-section">
<div className="date-divider bg-[#2E2E2E] border-0 rounded-lg mb-4 pt-3 pr-3 pb-3 pl-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">This Week</h3>
<span className="text-xs text-gray-400">5 IPOs</span>
</div>
</div>
<div className="space-y-2">
<div className="stock-item border-[#333333] border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-4">
<div className="text-sm font-mono text-gray-300">July 11</div>
<div className="w-8 h-8 bg-yellow-600 rounded flex items-center justify-center text-white text-xs font-bold">TECH</div>
<div>
<div className="text-sm font-medium text-white">TechCorp Inc</div>
<div className="text-xs text-gray-400">Initial Public Offering</div>
</div>
</div>
<div className="flex items-center space-x-4">
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Price:</span> $18-22
                      </div>
<div className="text-sm text-gray-400">
<span className="text-xs text-gray-500">Shares:</span> 15M
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>
</div>


    </>
  );
}
