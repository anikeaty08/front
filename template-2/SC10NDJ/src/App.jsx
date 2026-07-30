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



    // Tab functionality
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active state from all tabs
        document.querySelectorAll('.tab-btn').forEach(tab => {
          tab.classList.remove('bg-slate-900', 'text-white');
          tab.classList.add('text-slate-600', 'hover:bg-slate-100');
        });
        
        // Add active state to clicked tab
        btn.classList.add('bg-slate-900', 'text-white');
        btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        
        // Show/hide packages based on tab
        const targetTab = btn.getAttribute('data-tab');
        document.querySelectorAll('[data-status]').forEach(article => {
          if (targetTab === 'onway') {
            if (article.getAttribute('data-status') === 'delivered') {
              article.style.display = 'none';
            } else {
              article.style.display = 'block';
            }
          } else if (targetTab === 'delivered') {
            if (article.getAttribute('data-status') === 'delivered') {
              article.style.display = 'block';
            } else {
              article.style.display = 'none';
            }
          }
        });
      });
    });

    // Add some interactive hover effects
    document.querySelectorAll('article[data-status]').forEach(article => {
      article.addEventListener('mouseenter', () => {
        article.style.transform = 'translateY(-2px)';
        article.style.boxShadow = '0 8px 25px -8px rgba(0,0,0,0.1)';
      });
      
      article.addEventListener('mouseleave', () => {
        article.style.transform = 'translateY(0)';
        article.style.boxShadow = '';
      });
    });

    // Simulate real-time updates
    setInterval(() => {
      const progressBar = document.querySelector('.h-full.w-4\\/5');
      const remaining = document.querySelector('.text-lg.font-bold.text-emerald-600');
      const eta = document.querySelector('.text-lg.font-bold.text-slate-900');
      
      if (progressBar && remaining && eta) {
        // Simulate progress updates
        const currentWidth = progressBar.style.width || '80%';
        const newProgress = Math.min(85, parseInt(currentWidth) + Math.random() * 2);
        progressBar.style.width = `${newProgress}%`;
        
        // Update remaining distance
        const currentKm = parseInt(remaining.textContent);
        if (currentKm > 0) {
          remaining.textContent = `${Math.max(0, currentKm - Math.floor(Math.random() * 3))} km`;
        }
      }
    }, 10000); // Update every 10 seconds
  
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
      
<div className="h-[95vh] w-full max-w-7xl rounded-2xl overflow-hidden flex shadow-2xl animate-scale-in bg-black">

<aside className="hidden sm:flex flex-col items-center w-16 lg:w-20 border-r py-6 space-y-6 animate-fade-in delay-100 border-slate-800">
<div className="flex flex-col items-center space-y-2">
<div className="p-2 rounded-xl bg-blue-400">
<svg className="lucide lucide-truck w-5 h-5 stroke-2 text-black" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="hidden lg:block text-xs font-semibold text-slate-300 tracking-tight">SwiftTrack</div>
</div>
<nav className="flex flex-col items-center space-y-4 flex-1">
<button className="p-3 rounded-xl transition-colors text-blue-400 bg-blue-950 hover:bg-blue-900">
<svg className="lucide lucide-package w-5 h-5 stroke-2" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</button>
<button className="p-3 rounded-xl transition-colors hover:bg-slate-900">
<svg className="lucide lucide-map w-5 h-5 stroke-2 text-slate-500" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</button>
<button className="p-3 rounded-xl transition-colors hover:bg-slate-900">
<svg className="lucide lucide-bar-chart-3 w-5 h-5 stroke-2 text-slate-500" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button className="p-3 rounded-xl transition-colors hover:bg-slate-900">
<svg className="lucide lucide-bell w-5 h-5 stroke-2 text-slate-500" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="p-3 rounded-xl transition-colors hover:bg-slate-900">
<svg className="lucide lucide-settings w-5 h-5 stroke-2 text-slate-500" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</nav>
<div className="flex flex-col items-center space-y-4">
<img alt="Profile" className="w-10 h-10 rounded-xl border-2 border-slate-800 object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1080&q=80" style={{transition: `outline 0.1s ease-in-out`}} />
<button className="p-3 rounded-xl transition-colors hover:bg-slate-900">
<svg className="lucide lucide-log-out w-5 h-5 stroke-2 text-slate-500" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</div>
</aside>

<div className="sm:hidden w-full absolute top-0 left-0 right-0 z-50 border-b p-4 flex items-center justify-between bg-black border-slate-800">
<div className="flex items-center space-x-2">
<div className="p-2 rounded-lg bg-blue-400">
<svg className="lucide lucide-truck w-4 h-4 stroke-2 text-black" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<span className="font-semibold text-slate-100">SwiftTrack</span>
</div>
<button className="p-2 rounded-lg hover:bg-slate-900">
<svg className="lucide lucide-menu w-5 h-5 stroke-2 text-slate-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<section className="w-full sm:w-96 lg:w-[28rem] border-r flex flex-col pt-16 sm:pt-0 animate-slide-up delay-200 border-slate-800">
<header className="flex items-center justify-between p-4 lg:p-6 border-b border-slate-900">
<div className="">
<h2 className="text-xl font-semibold tracking-tight text-slate-100">Package Tracker</h2>
<p className="text-sm text-slate-500 mt-1">Manage your deliveries</p>
</div>
<button className="p-2 rounded-lg transition-colors hover:bg-slate-900">
<svg className="lucide lucide-plus w-5 h-5 stroke-2 text-slate-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</header>

<div className="flex px-4 lg:px-6 py-4 space-x-2 border-b border-slate-900">
<button className="tab-btn flex-1 text-sm font-medium py-2 px-4 rounded-lg transition-all bg-slate-100 text-black" data-tab="onway">
          On the way (4)
        </button>
<button className="tab-btn flex-1 text-sm font-medium py-2 px-4 rounded-lg transition-all text-slate-400 hover:bg-slate-900" data-tab="delivered">
          Delivered (12)
        </button>
</div>

<div className="flex-1 overflow-y-auto px-4 lg:px-6 pt-4 space-y-4 pb-6" id="packageList">

<article className="bg-gradient-to-r border rounded-xl p-4 space-y-4 animate-slide-up delay-300 from-amber-950 to-orange-950 border-amber-800" data-status="priority" style={{display: `block`, animation: `0.5s ease-out 0s 1 normal forwards running slideUp`}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-zap w-4 h-4 stroke-2 text-amber-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="font-semibold text-sm text-slate-100">Milan → Stockholm</h3>
</div>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-amber-800 text-amber-200">PRIORITY</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">Nike Air Max Pro - Express Delivery</p>
<p className="text-xs text-slate-500">Order ID #ZX-84721-PRI</p>
</div>
<div className="flex items-center justify-between text-xs">
<span className="font-medium text-amber-300">Expected: Today 4:30 PM</span>
<span className="text-slate-500">€49.99</span>
</div>
</article>

<article className="border-2 rounded-xl p-4 space-y-4 animate-slide-up delay-400 bg-black border-blue-800" data-status="in-transit" style={{display: `block`, animation: `0.5s ease-out 0.1s 1 normal forwards running slideUp`}}>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="lucide lucide-truck w-4 h-4 stroke-2 text-blue-400" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<h3 className="font-semibold text-sm text-slate-100">Gothenburg → Stockholm</h3>
</div>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-emerald-800 text-emerald-200">IN TRANSIT</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">Apple MacBook Pro 16" - Tech Electronics</p>
<p className="text-xs text-slate-500">Order ID #APL-26968-98971</p>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Progress: 78%</span>
<span className="text-slate-500">42 km remaining</span>
</div>
<div className="h-2 w-full rounded-full overflow-hidden bg-slate-900">
<div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
<div>
<p className="text-slate-500">Sender</p>
<p className="font-medium text-slate-100">Apple Store</p>
</div>
<div>
<p className="text-slate-500">Departed</p>
<p className="font-medium text-slate-100">Today 9:15 AM</p>
</div>
<div>
<p className="text-slate-500">Weight</p>
<p className="font-medium text-slate-100">2.1 kg</p>
</div>
<div>
<p className="text-slate-500">Value</p>
<p className="font-medium text-slate-100">€2,899</p>
</div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg bg-slate-950">
<div className="flex items-center space-x-3">
<img alt="Courier" className="w-10 h-10 rounded-full border-2 shadow-sm border-black object-cover" src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=1080&q=80" style={{transition: `outline 0.1s ease-in-out`}} />
<div className="text-xs">
<p className="font-semibold text-slate-100">Emma Lindström</p>
<p className="text-slate-500">Senior Courier • 4.9★</p>
<p className="font-medium text-emerald-400">ETA: 3:45 PM</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 rounded-lg transition-colors hover:bg-black">
<svg className="lucide lucide-message-circle w-4 h-4 stroke-2 text-slate-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</button>
<button className="p-2 rounded-lg transition-colors hover:bg-black">
<svg className="lucide lucide-phone w-4 h-4 stroke-2 text-slate-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</button>
</div>
</div>
<button className="w-full flex justify-between items-center text-sm p-2 rounded-lg transition-colors text-slate-400 hover:text-slate-100 hover:bg-slate-950">
<span>View tracking timeline</span>
<svg className="lucide lucide-chevron-right w-4 h-4 stroke-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</article>

<article className="border rounded-xl p-4 space-y-3 animate-slide-up delay-500 bg-black border-slate-800" data-status="in-transit" style={{display: `block`, animation: `0.5s ease-out 0.2s 1 normal forwards running slideUp`}}>
<div className="flex items-center justify-between">
<h3 className="font-medium text-sm text-slate-100">Berlin → Stockholm</h3>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-blue-800 text-blue-200">PROCESSING</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">IKEA Furniture Set - Home & Garden</p>
<p className="text-xs text-slate-500">Order ID #IKE-09488-98367</p>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Expected: Tomorrow</span>
<span className="text-slate-500">€299.99</span>
</div>
</article>
<article className="border rounded-xl p-4 space-y-3 bg-black border-slate-800" data-status="in-transit" style={{display: `block`, animation: `0.5s ease-out 0.3s 1 normal forwards running slideUp`}}>
<div className="flex items-center justify-between">
<h3 className="font-medium text-sm text-slate-100">Copenhagen → Stockholm</h3>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-purple-800 text-purple-200">CUSTOMS</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">Bang & Olufsen Speakers - Audio</p>
<p className="text-xs text-slate-500">Order ID #B&O-14398-98719</p>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Awaiting clearance</span>
<span className="text-slate-500">€899.99</span>
</div>
</article>

<article className="border rounded-xl p-4 space-y-3 bg-black border-slate-800" data-status="delivered" style={{display: `none`}}>
<div className="flex items-center justify-between">
<h3 className="font-medium text-sm text-slate-100">London → Stockholm</h3>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-800 text-green-200">DELIVERED</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">Dyson V15 Vacuum - Appliances</p>
<p className="text-xs text-slate-500">Order ID #DYS-25398-98001</p>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Delivered Dec 18, 2:15 PM</span>
<span className="text-slate-500">€599.99</span>
</div>
</article>
<article className="border rounded-xl p-4 space-y-3 bg-black border-slate-800" data-status="delivered" style={{display: `none`}}>
<div className="flex items-center justify-between">
<h3 className="font-medium text-sm text-slate-100">Amsterdam → Stockholm</h3>
<span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-800 text-green-200">DELIVERED</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-400">Philips Hue Smart Lights - Electronics</p>
<p className="text-xs text-slate-500">Order ID #PHI-19845-77234</p>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Delivered Dec 15, 11:30 AM</span>
<span className="text-slate-500">€249.99</span>
</div>
</article>
</div>
</section>

<main className="flex-1 relative animate-fade-in delay-300 bg-slate-900">

<div className="map-container absolute inset-0 w-full h-full">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d129583.89667275648!2d17.85264024453121!3d59.32522499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1703877600000!5m2!1sen!2sus" style={{border: `0`}} width="100%">
</iframe>
</div>

<div className="absolute inset-4 pointer-events-none">

<div className="flex mb-4 items-start justify-between">
<div className="pointer-events-auto animate-slide-up delay-400 bg-black/95 rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-lg backdrop-blur-sm">
<div className="flex items-center space-x-3">
<div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
<div className="">
<p className="text-sm font-semibold text-slate-100">Live Tracking Active</p>
<p className="text-xs text-slate-500">4 packages in transit</p>
</div>
</div>
</div>
<div className="backdrop-blur-sm rounded-xl p-4 shadow-lg pointer-events-auto animate-slide-up delay-500 bg-black/95">
<div className="flex items-center space-x-4">
<div className="text-center">
<p className="text-lg font-bold text-slate-100">3:45 PM</p>
<p className="text-xs text-slate-500">ETA</p>
</div>
<div className="w-px h-8 bg-slate-800"></div>
<div className="text-center">
<p className="text-lg font-bold text-emerald-400">42 km</p>
<p className="text-xs text-slate-500">Remaining</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 flex justify-between items-end">
<div className="backdrop-blur-sm rounded-xl p-4 shadow-lg pointer-events-auto animate-slide-up delay-600 bg-black/95">
<div className="flex items-center space-x-3">
<img alt="Courier" className="w-12 h-12 rounded-full border-2 shadow-sm border-black object-cover" src="https://images.unsplash.com/photo-1564564295391-7f24f26f568b?w=1080&q=80" style={{transition: `outline 0.1s ease-in-out`}} />
<div>
<p className="text-sm font-semibold text-slate-100">Emma Lindström</p>
<p className="text-xs text-slate-500">Your courier is nearby</p>
<div className="flex items-center space-x-2 mt-1">
<button className="flex items-center space-x-1 text-xs px-2 py-1 rounded-lg transition-colors bg-blue-900 text-blue-300 hover:bg-blue-800">
<svg className="lucide lucide-phone" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>Call</span>
</button>
<button className="flex items-center space-x-1 text-xs px-2 py-1 rounded-lg transition-colors bg-green-900 text-green-300 hover:bg-green-800">
<svg className="lucide lucide-message-circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span>Message</span>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-col space-y-3 pointer-events-auto">
<button className="backdrop-blur-sm p-3 rounded-xl shadow-lg transition-colors animate-slide-up delay-700 bg-black/95 hover:bg-black">
<svg className="lucide lucide-navigation text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
</button>
<button className="backdrop-blur-sm p-3 rounded-xl shadow-lg transition-colors animate-slide-up delay-700 bg-black/95 hover:bg-black">
<svg className="lucide lucide-layers text-slate-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7h20L12 2z"></path><path d="M2 17h20L12 22 2 17z"></path><path d="M2 12h20L12 17 2 12z"></path></svg>
</button>
<button className="p-3 rounded-xl shadow-lg transition-colors animate-scale-in delay-800 bg-blue-400 hover:bg-blue-300">
<svg className="lucide lucide-crosshair text-black" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
