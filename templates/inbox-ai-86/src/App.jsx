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
      

<nav className="floating-nav">
<div className="h-full flex pr-4 pl-4 items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:rotate-12" style={{backgroundColor: '#30a2e9'}}>
<i className="w-5 h-5 text-white" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-bold tracking-tight" style={{fontFamily: '\'Baskervville\', serif', color: '#2c3e4a'}}>FlowDesk</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-body hover:text-catchy transition-colors font-medium text-sm" href="#">Platform</a>
<a className="text-body hover:text-catchy transition-colors font-medium text-sm" href="#">Features</a>
<a className="text-body hover:text-catchy transition-colors font-medium text-sm" href="#">Resources</a>
<a className="text-body hover:text-catchy transition-colors font-medium text-sm" href="#">Pricing</a>
</div>
<button className="text-white px-6 py-2 rounded-full font-medium text-sm transition-all hover:shadow-lg hover:scale-105" style={{backgroundColor: '#2c3e4a'}}>
                Get Started
            </button>
</div>
</nav>

<section className="bg-gradient-hero py-20 px-6 relative" style={{paddingTop: '120px'}}>
<div className="parallax-bg"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center px-4 py-2 bg-white/70 rounded-full text-xs font-semibold border border-white/30 mb-8 fade-in" style={{color: '#30a2e9'}}>
                AI-POWERED ACCOUNTS PAYABLE
            </div>
<h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight fade-in stagger-1" style={{fontFamily: '\'Baskervville\', serif', color: '#2c3e4a'}}>
                The Inbox Built for<br/>
                Accounts Payable<br/>
                Teams
            </h1>
<p className="text-xl mb-12 max-w-2xl mx-auto fade-in stagger-2" style={{color: '#445865'}}>
                AI-powered email management with smart tagging, automatic invoice detection, fraud alerts, and seamless team collaboration for AP professionals
            </p>
<button className="transition-all font-semibold text-white rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg hover:shadow-xl hover:scale-105 fade-in stagger-3" style={{backgroundColor: '#30a2e9'}}>
                Start Free Trial
            </button>
</div>

<div className="marquee-container mt-16 mb-8 fade-in stagger-4">
<div className="marquee">
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">AI Invoice Detection</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="shield-alert" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Fraud Alert System</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Team Assignment</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Smart Templates</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="bar-chart-3" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Real-time Analytics</span>
</div>

<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">AI Invoice Detection</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="shield-alert" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Fraud Alert System</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Team Assignment</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="zap" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Smart Templates</span>
</div>
<div className="marquee-item flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30">
<i className="w-4 h-4" data-lucide="bar-chart-3" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
<span className="text-sm font-medium text-body">Real-time Analytics</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto mt-16 blur-in stagger-5">
<div className="app-window bg-white flex flex-col text-gray-900" style={{height: '700px'}}>

<div className="flex bg-gray-100 border-gray-200 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full transition-transform hover:scale-110 bg-blue-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500 transition-transform hover:scale-110"></div>
<div className="w-3 h-3 rounded-full bg-green-500 transition-transform hover:scale-110"></div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-gray-200 rounded-md transition-all hover:scale-110">
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5" style={{color: '#445865'}}></i>
</button>
<button className="p-2 hover:bg-gray-200 rounded-md transition-all hover:scale-110">
<i className="w-4 h-4" data-lucide="bell" strokeWidth="1.5" style={{color: '#445865'}}></i>
</button>
<button className="p-2 hover:bg-gray-200 rounded-md transition-all hover:scale-110">
<i className="w-4 h-4" data-lucide="settings" strokeWidth="1.5" style={{color: '#445865'}}></i>
</button>
</div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-64 bg-gray-50 border-r border-gray-200 flex flex-col slide-in-left stagger-6">

<div className="bg-gray-50 border-gray-200 border-b pt-5 pr-4 pb-5 pl-4">
<div className="flex items-center gap-3 mb-4">
<img alt="Profile" className="w-10 h-10 object-cover rounded-full ring-2 ring-white shadow-md hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&amp;q=80"/>
<div>
<h3 className="font-semibold text-sm" style={{fontFamily: '\'Baskervville\', serif', color: '#2c3e4a'}}>Sarah Martinez</h3>
<p className="text-xs text-body">AP Manager</p>
</div>
</div>
<button className="w-full transition-all flex gap-2 text-white rounded-lg pt-2 pr-3 pb-2 pl-3 items-center justify-center font-medium text-sm shadow-md hover:shadow-lg hover:scale-105" style={{backgroundColor: '#30a2e9'}}>
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
<span>Compose</span>
</button>
</div>

<nav className="flex-1 bg-gray-50 pt-3 pr-3 pb-3 pl-3 space-y-1 overflow-y-auto">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all hover-scale hover:shadow-md" href="#" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
<i className="w-4 h-4" data-lucide="inbox" strokeWidth="1.5"></i>
<span className="font-medium text-sm">Inbox</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full" style={{color: '#30a2e9', backgroundColor: 'rgba(48, 162, 233, 0.2)'}}>24</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="user-check" strokeWidth="1.5"></i>
<span className="text-sm">Assigned to Me</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-600">8</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-sm">Urgent</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">3</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
<span className="text-sm">Overdue</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-orange-100 text-orange-600">5</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-sm">Invoices</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">16</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="shield-alert" strokeWidth="1.5"></i>
<span className="text-sm">Fraud Alerts</span>
<span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-600">1</span>
</a>
<div className="pt-3 pb-2">
<div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide">Views</div>
</div>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-sm">Starred</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="send" strokeWidth="1.5"></i>
<span className="text-sm">Sent</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="archive" strokeWidth="1.5"></i>
<span className="text-sm">Archived</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-body hover:bg-gray-100 rounded-lg transition-all hover-scale hover:shadow-sm" href="#">
<i className="w-4 h-4" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-sm">Analytics</span>
</a>
</nav>

<div className="bg-gray-50 border-gray-200 border-t pt-3 pr-3 pb-3 pl-3">
<div className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Team</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
<img alt="Anna" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80"/>
<span className="text-sm text-body">Anna Chen</span>
<div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
<img alt="Mike" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;q=80"/>
<span className="text-sm text-body">Mike Johnson</span>
<div className="ml-auto w-2 h-2 rounded-full bg-green-500"></div>
</div>
<div className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all cursor-pointer">
<img alt="Emily" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;q=80"/>
<span className="text-sm text-body">Emily Davis</span>
<div className="ml-auto w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden bg-white">

<div className="border-b border-gray-200 pt-3 pr-4 pb-3 pl-4 slide-in-right stagger-7">
<div className="flex items-center justify-between mb-3">
<h2 className="text-lg font-semibold" style={{fontFamily: '\'Baskervville\', serif', color: '#2c3e4a'}}>Inbox</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="filter" strokeWidth="1.5" style={{color: '#445865'}}></i>
<span className="text-body">Filter</span>
</button>
<button className="px-3 py-1.5 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="refresh-cw" strokeWidth="1.5" style={{color: '#445865'}}></i>
</button>
</div>
</div>
<div className="flex items-center gap-2 text-xs">
<div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md cursor-pointer transition-all" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
<i className="w-3.5 h-3.5" data-lucide="inbox" strokeWidth="1.5"></i>
<span className="font-medium">All</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1.5 text-body hover:bg-gray-100 rounded-md cursor-pointer transition-all">
<i className="w-3.5 h-3.5" data-lucide="user-check" strokeWidth="1.5"></i>
<span>My Items</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1.5 text-body hover:bg-gray-100 rounded-md cursor-pointer transition-all">
<i className="w-3.5 h-3.5" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span>Urgent</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1.5 text-body hover:bg-gray-100 rounded-md cursor-pointer transition-all">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i>
<span>Overdue</span>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto">

<div className="email-row selected border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>Global Suppliers Inc.</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-red-100 text-red-600 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="shield-alert" strokeWidth="1.5"></i>
                                                    FRAUD ALERT
                                                </span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 text-orange-600">URGENT</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<img alt="Anna" className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80" title="Anna Chen"/>
</div>
<span className="text-xs text-body">2m ago</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body font-medium">Suspicious invoice - Bank details changed</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8842
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $24,500
                                            </span>
<span className="text-xs text-body">AI detected: Bank account mismatch from previous invoices</span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="email-row border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>Acme Corporation</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-orange-100 text-orange-600">OVERDUE</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<img alt="Mike" className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;q=80" title="Mike Johnson"/>
</div>
<span className="text-xs text-body">1h ago</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body">Monthly service invoice - Payment reminder</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8819
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $8,950
                                            </span>
<span className="text-xs text-body">Due: 3 days ago</span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="email-row border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>TechFlow Solutions</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<img alt="Anna" className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80" title="Anna Chen"/>
</div>
<span className="text-xs text-body">3h ago</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body">Q1 Software licensing renewal</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8801
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $15,200
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600">
                                                Recurring
                                            </span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="email-row border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>Office Supplies Co.</span>
</div>
<div className="flex items-center gap-2">
<span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">Unassigned</span>
<span className="text-xs text-body">5h ago</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body">Office supplies order #3421</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8798
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $1,245
                                            </span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="email-row border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>Cloud Hosting Ltd</span>
<span className="px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-600">CRITICAL</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<img alt="Emily" className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&amp;q=80" title="Emily Davis"/>
</div>
<span className="text-xs text-body">Yesterday</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body">Annual infrastructure hosting - Renewal needed</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8776
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $48,000
                                            </span>
<span className="text-xs text-body">Due: Dec 31, 2024</span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="email-row border-b border-gray-200 px-4 py-3 cursor-pointer">
<div className="flex items-start gap-3">
<input className="mt-1 w-4 h-4 rounded border-gray-300" style={{accentColor: '#30a2e9'}} type="checkbox"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-2">
<span className="font-semibold text-sm" style={{color: '#2c3e4a'}}>Marketing Agency Plus</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1">
<img alt="Mike" className="w-5 h-5 rounded-full border border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&amp;q=80" title="Mike Johnson"/>
</div>
<span className="text-xs text-body">Yesterday</span>
</div>
</div>
<div className="flex items-center gap-2 mb-1">
<span className="text-sm text-body">Campaign management - December</span>
</div>
<div className="flex items-center gap-2 flex-wrap">
<span className="px-2 py-0.5 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
                                                INV-8765
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-purple-100 text-purple-600">
                                                $12,800
                                            </span>
<span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-600">
                                                Net 30
                                            </span>
</div>
</div>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="star" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div className="w-96 border-l border-gray-200 bg-gray-50 flex flex-col overflow-hidden slide-in-right stagger-8">
<div className="border-b border-gray-200 pt-4 pr-4 pb-4 pl-4 bg-white">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold" style={{fontFamily: '\'Baskervville\', serif', color: '#2c3e4a'}}>Quick Actions</h3>
<button className="p-1 hover:bg-gray-100 rounded transition-all">
<i className="w-4 h-4 text-gray-400" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="user-plus" strokeWidth="1.5" style={{color: '#445865'}}></i>
<span className="text-body">Assign</span>
</button>
<button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="reply" strokeWidth="1.5" style={{color: '#445865'}}></i>
<span className="text-body">Reply</span>
</button>
<button className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
<i className="w-3.5 h-3.5" data-lucide="check" strokeWidth="1.5" style={{color: '#445865'}}></i>
<span className="text-body">Done</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-2">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="sparkles" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>AI Summary</span>
</div>
<p className="text-xs text-body leading-relaxed">
                                    Fraud alert detected: Bank details changed from previous transactions. Invoice amount $24,500 for routine service. Requires immediate verification before payment processing.
                                </p>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="tag" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>AI Detected Tags</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-600 font-medium">🚨 Fraud Alert</span>
<span className="px-2 py-1 text-xs rounded-full bg-orange-100 text-orange-600 font-medium">⚡ Critical</span>
<span className="px-2 py-1 text-xs rounded-full" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>📄 Invoice</span>
<span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">💰 High Value</span>
<span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-600">⚠️ Bank Change</span>
</div>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="file-text" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>Invoice Details</span>
</div>
<div className="space-y-2 text-xs">
<div className="flex justify-between">
<span className="text-body">Invoice Number:</span>
<span className="font-medium" style={{color: '#2c3e4a'}}>INV-8842</span>
</div>
<div className="flex justify-between">
<span className="text-body">Amount:</span>
<span className="font-semibold" style={{color: '#2c3e4a'}}>$24,500.00</span>
</div>
<div className="flex justify-between">
<span className="text-body">Due Date:</span>
<span className="font-medium text-orange-600">Dec 20, 2024</span>
</div>
<div className="flex justify-between">
<span className="text-body">Vendor:</span>
<span className="font-medium" style={{color: '#2c3e4a'}}>Global Suppliers Inc.</span>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="users" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>Assignment</span>
</div>
<div className="flex items-center gap-2">
<img alt="Anna" className="w-7 h-7 rounded-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&amp;q=80"/>
<div>
<div className="text-xs font-medium" style={{color: '#2c3e4a'}}>Anna Chen</div>
<div className="text-xs text-body">Assigned 2m ago</div>
</div>
</div>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="message-square" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>Quick Reply Templates</span>
</div>
<div className="space-y-2">
<button className="w-full text-left px-3 py-2 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
<div className="font-medium text-body mb-0.5">Request Verification</div>
<div className="text-gray-400 text-xs">Ask for account confirmation</div>
</button>
<button className="w-full text-left px-3 py-2 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
<div className="font-medium text-body mb-0.5">Payment Scheduled</div>
<div className="text-gray-400 text-xs">Confirm payment processing</div>
</button>
<button className="w-full text-left px-3 py-2 text-xs rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
<div className="font-medium text-body mb-0.5">Request PO Number</div>
<div className="text-gray-400 text-xs">Ask for purchase order</div>
</button>
</div>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200">
<div className="flex items-center gap-2 mb-3">
<div className="w-6 h-6 rounded-md flex items-center justify-center" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)'}}>
<i className="w-3.5 h-3.5" data-lucide="check-square" strokeWidth="1.5" style={{color: '#30a2e9'}}></i>
</div>
<span className="text-xs font-semibold" style={{color: '#2c3e4a'}}>Tasks</span>
</div>
<button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg transition-all hover:shadow-md" style={{backgroundColor: 'rgba(48, 162, 233, 0.1)', color: '#30a2e9'}}>
<i className="w-3.5 h-3.5" data-lucide="plus" strokeWidth="1.5"></i>
<span>Create Task</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
