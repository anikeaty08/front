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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<aside className="hidden lg:flex flex-col w-72 h-full bg-white border-r border-slate-200/60 sticky top-0 z-20">

<div className="p-8 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-white font-semibold shadow-sm">
                    J
                </div>
<span className="text-xl font-semibold tracking-tight text-slate-900">JOYOU</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1 no-scrollbar">
<div className="px-4 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">My Business</div>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                My information
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
                My orders
            </a>

<a className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-900 bg-slate-100 rounded-xl" href="#">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                Personal office
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-wallet w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                Money
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
                Analytics
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Income
            </a>
<div className="mt-8 px-4 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Network</div>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Referral program
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                Support chat
            </a>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-heart-handshake w-5 h-5" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
                Family contract
            </a>
<div className="mt-8 px-4 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Documents</div>
<a className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-500 rounded-xl hover:bg-slate-50 transition-colors" href="#">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                Reward &amp; Bonus (PDF)
            </a>
</nav>

<div className="p-4 border-t border-slate-100">
<div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
<img alt="Profile" className="w-9 h-9 rounded-full object-cover grayscale" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 min-w-0">
<p className="text-xs font-semibold text-slate-900 truncate">Kristin Watson</p>
<p className="text-xs text-slate-500 truncate">ID: 8493021</p>
</div>
<svg className="lucide lucide-log-out w-4 h-4 text-slate-400 hover:text-slate-600 cursor-pointer" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 h-full overflow-y-auto overflow-x-hidden relative">

<header className="sticky flex bg-slate-50 z-50 pt-5 pr-8 pb-5 pl-8 top-0 items-center justify-between">
<div className="">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Personal Office</h1>
<p className="text-sm text-slate-500 mt-1">Welcome back, Kristin. Here's your overview.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<svg className="lucide lucide-bell w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-0 right-0 w-2 h-2 bg-slate-300 rounded-full border border-slate-50"></span>
</div>
</div>
</header>
<div className="max-w-[1600px] mr-auto ml-auto pr-8 pb-12 pl-8 space-y-8">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 overflow-hidden bg-white border-slate-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<style>
        @keyframes champion-aura {
            0%, 100% { 
                filter: drop-shadow(0 0 8px rgba(79, 70, 229, 0.2)) drop-shadow(0 0 6px rgba(212, 175, 55, 0.2)); 
                transform: rotate(-90deg) scale(0.98); 
            }
            50% { 
                filter: drop-shadow(0 0 16px rgba(79, 70, 229, 0.35)) drop-shadow(0 0 14px rgba(212, 175, 55, 0.35)); 
                transform: rotate(-90deg) scale(1.0); 
            }
        }
    </style>
<div className="flex items-start justify-between">
<span className="px-3 py-1 text-[10px] font-normal tracking-wide uppercase text-slate-500 bg-slate-100 rounded-full">Partner</span>
<svg className="lucide lucide-refresh-cw w-4 h-4 text-slate-300 cursor-pointer hover:text-slate-500 transition-colors" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div className="flex flex-col items-center mt-6">
<div className="relative w-24 h-24">

<svg className="w-full h-full" style={{animation: 'champion-aura 10s ease-in-out infinite'}} viewbox="0 0 96 96">
<defs>
<lineargradient id="halo-champion-gradient" x1="0%" x2="0%" y1="100%" y2="0%">
<stop offset="0%" stop-color="#4f46e5"></stop> 
<stop offset="45%" stop-color="#D4AF37"></stop> 
<stop offset="80%" stop-color="#F7E7CE"></stop> 
<stop offset="100%" stop-color="#FFFFFF"></stop> 
</lineargradient>
</defs>

<circle cx="48" cy="48" fill="transparent" r="45" stroke="#f1f5f9" strokeWidth="6"></circle>

<circle cx="48" cy="48" fill="transparent" r="45" stroke="url(#halo-champion-gradient)" stroke-dasharray="283" stroke-dashoffset="0" strokeLinecap="round" strokeWidth="6"></circle>

<circle cx="93" cy="48" fill="white" r="2.5" style={{filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.9))'}}></circle>
</svg>
<img alt="Avatar" className="absolute top-1 left-1 w-[88px] h-[88px] rounded-full object-cover border-4 border-white" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<h2 className="mt-4 text-lg font-medium text-slate-900">Kristin Watson</h2>
<p className="text-xs text-slate-400">Partner ID: 948302</p>
</div>
<div className="grid grid-cols-3 gap-2 mt-8 border-t border-slate-50 pt-6 text-center">
<div className="">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-normal mb-1">IV</p>
<p className="text-lg font-medium text-slate-700">120</p>
</div>
<div className="border-l border-slate-100">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-normal mb-1">SV</p>
<p className="text-lg font-medium text-slate-700">4,250</p>
</div>
<div className="border-l border-slate-100">
<p className="text-[10px] uppercase tracking-wider text-slate-400 font-normal mb-1">Side SV</p>
<p className="text-lg font-medium text-slate-700">1,100</p>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between relative overflow-hidden">
<div className="">
<div className="flex items-center justify-between mb-6 relative z-10">
<h3 className="text-base font-semibold text-slate-900">Next Rank: PRO</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<svg className="lucide lucide-target w-4 h-4 text-slate-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
</div>

<div className="flex items-center justify-between relative z-10 mb-8 px-2">
<div className="flex flex-col items-center gap-2">
<span className="text-[10px] font-bold text-slate-900">MID</span>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div className="h-0.5 flex-1 bg-slate-100 mx-2"></div>
<div className="flex flex-col items-center gap-2 opacity-40">
<span className="text-[10px] font-bold text-slate-500">PRO</span>
<div className="w-2 h-2 rounded-full bg-slate-200 border border-slate-300"></div>
</div>
<div className="h-0.5 flex-1 bg-slate-100 mx-2"></div>
<div className="flex flex-col items-center gap-2 opacity-30">
<span className="text-[10px] font-bold text-slate-500">LEADER</span>
<div className="w-2 h-2 rounded-full bg-slate-200 border border-slate-300"></div>
</div>
</div>
<div className="space-y-3 relative z-10">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
<svg className="lucide lucide-check w-3 h-3 text-slate-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm font-medium text-slate-500 line-through decoration-slate-300">Reach 70 PV personal</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200">
<div className="w-2 h-2 rounded-full border border-slate-300"></div>
</div>
<span className="text-sm font-medium text-slate-600">Grow Side SV to 30,000</span>
</div>
</div>
</div>
<div className="relative z-10 mt-4">
<div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
<span className="">Progress</span>
<span>68%</span>
</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[68%] rounded-full"></div>
</div>
</div>
</div>

<div className="lg:col-span-4 bg-white border-slate-200 border rounded-3xl p-6 relative shadow-sm flex flex-col">
<div className="flex items-center justify-between mb-6 relative z-10">
<h3 className="text-base font-semibold text-slate-900">Wallet Overview</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
<svg className="lucide lucide-credit-card w-4 h-4 text-slate-400" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
</div>
<div className="space-y-5 relative z-10">
<div className="">
<p className="text-xs text-slate-500 font-medium">Income (RBS)</p>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">4,660.73 €</p>
</div>
<div className="flex gap-4">
<div className="">
<p className="text-[10px] text-slate-400 font-medium uppercase">Product Bonus</p>
<p className="text-sm font-semibold text-slate-700">584.19 €</p>
</div>
<div className="">
<p className="text-[10px] text-slate-400 font-medium uppercase">Cashback</p>
<p className="text-sm font-semibold text-slate-700">300.00 €</p>
</div>
</div>
</div>
<button className="hover:bg-slate-50 transition-all flex gap-2 z-10 group text-sm font-medium text-slate-600 bg-white border border-slate-200 w-full rounded-xl mt-auto py-2.5 relative shadow-sm items-center justify-center">
                        View full statement
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">IV Bonus</span>
<svg className="lucide lucide-zap w-4 h-4 text-slate-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="mt-1">
<div className="flex items-end gap-1 mb-1">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">120</span>
<span className="text-sm text-slate-400 mb-1">/ 200 PV</span>
</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full mt-2">
<div className="h-full bg-slate-400 w-[60%] rounded-full"></div>
</div>
<p className="text-[10px] text-slate-400 mt-2">Qualified for 10% bonus</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Partner Bonus</span>
<svg className="lucide lucide-users w-4 h-4 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="mt-1">
<div className="flex items-end gap-1 mb-1">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">7</span>
<span className="text-sm text-slate-400 mb-1">/ 15 Active</span>
</div>
<div className="relative w-full h-1.5 bg-slate-100 rounded-full mt-2">
<div className="absolute top-0 left-0 h-full bg-slate-400 w-[46%] rounded-full z-10"></div>
<div className="absolute top-[-2px] left-[33%] w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-200 z-20"></div>
<div className="absolute top-[-2px] left-[66%] w-2.5 h-2.5 rounded-full bg-white border-2 border-slate-200 z-0"></div>
</div>
<p className="text-[10px] text-slate-400 mt-2">Level 1 (70+ PV)</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="flex mb-2 items-start justify-between">
<span className="uppercase text-xs font-semibold text-slate-400 tracking-wider">Product Bonus</span>
<svg className="lucide lucide-leaf w-4 h-4 text-slate-400" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="mt-1">
<div className="flex items-end gap-1 mb-2">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">€42.50</span>
<span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium mb-1.5">+12%</span>
</div>
<p className="text-[10px] text-slate-400 leading-tight">Use for up to 50% of product price.</p>
</div>
</div>

<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between h-full">

<div className="flex justify-between items-start mb-1">
<div className="">
<h4 className="text-xs font-semibold uppercase text-slate-400 tracking-wider">Rank Performance</h4>

<p className="text-[10px] text-indigo-500 font-medium mt-0.5">Above average within your rank</p>
</div>
<svg className="lucide lucide-trophy w-4 h-4 text-indigo-400" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>

<div className="flex-1 flex flex-col justify-end mt-2">

<div className="mb-1">
<div className="flex items-baseline gap-1.5">
<span className="text-2xl font-bold text-slate-900 tracking-tight">Top 35%</span>
</div>
</div>

<div className="mt-2 relative">

<div className="h-2 w-full bg-slate-100 rounded-full overflow-visible relative">

<div className="absolute left-0 top-0 h-full bg-indigo-500 rounded-full w-[65%]"></div>

<div className="absolute top-1/2 -translate-y-1/2 left-[65%] -translate-x-1/2 w-3.5 h-3.5 bg-white border-[3px] border-indigo-500 rounded-full shadow-sm z-10 box-content"></div>
</div>

<div className="flex justify-between text-[9px] text-slate-400 font-medium uppercase tracking-wider mt-1.5 px-0.5">
<span>Low</span>
<span>High</span>
</div>
</div>
</div>

<div className="mt-3 pt-3 border-t border-slate-50 flex items-center gap-1.5 cursor-help">
<p className="text-[9px] text-slate-400 leading-none">Based on SV, activity &amp; growth</p>
<svg className="lucide lucide-info w-2.5 h-2.5 text-slate-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
<div className="flex items-center justify-between mb-8">
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Monthly Performance</h3>
<div className="flex items-center gap-4 mt-1">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
<span className="text-xs text-slate-500">Structure Volume (SV)</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
<span className="text-xs text-slate-500">Individual Volume (IV)</span>
</div>
</div>
</div>
<div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1">
<button className="px-3 py-1.5 text-xs font-medium bg-white text-slate-900 rounded shadow-sm border border-slate-100">This month</button>
<button className="px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-900">Last month</button>
</div>
</div>

<div className="relative w-full h-64">
<svg className="w-full h-full overflow-visible preserve-3d" viewbox="0 0 800 300">

<line className="" stroke="#f1f5f9" stroke-dasharray="4 4" x1="0" x2="800" y1="0" y2="0"></line>
<line stroke="#f1f5f9" stroke-dasharray="4 4" x1="0" x2="800" y1="75" y2="75"></line>
<line stroke="#f1f5f9" stroke-dasharray="4 4" x1="0" x2="800" y1="150" y2="150"></line>
<line stroke="#f1f5f9" stroke-dasharray="4 4" x1="0" x2="800" y1="225" y2="225"></line>
<line stroke="#f1f5f9" x1="0" x2="800" y1="300" y2="300"></line>

<path className="" d="M0,250 C100,240 150,200 200,180 C300,140 350,160 450,100 C550,40 650,80 800,20" fill="none" stroke="#64748b" strokeLinecap="round" strokeWidth="3"></path>

<path className="" d="M0,280 C120,280 200,260 280,250 C400,235 500,260 600,220 C700,180 750,200 800,190" fill="none" stroke="#cbd5e1" stroke-dasharray="8 8" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="450" cy="100" fill="#fff" r="6" stroke="#64748b" strokeWidth="3"></circle>
<rect className="" fill="#334155" height="30" rx="6" width="60" x="420" y="50"></rect>
<text fill="#fff" fontSize="12" font-weight="bold" text-anchor="middle" x="450" y="70">4,250</text>
</svg>
<div className="flex justify-between text-xs text-slate-400 mt-4">
<span>01 Oct</span>
<span>05 Oct</span>
<span>10 Oct</span>
<span>15 Oct</span>
<span>20 Oct</span>
<span className="">25 Oct</span>
<span>30 Oct</span>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 h-[240px] flex flex-col">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold text-slate-900">Top Partners</h3>
<svg className="lucide lucide-trophy w-4 h-4 text-slate-300" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<div className="space-y-4 flex-1 overflow-hidden">

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">JD</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Jane Doe</p>
<p className="text-[10px] text-slate-400">Professional</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">210 PV</p>
<p className="text-[10px] text-slate-400">12%</p>
</div>
</div>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover grayscale" src="https://i.pravatar.cc/150?u=a042581f4e290260241"/>
<div className="">
<p className="text-sm font-medium text-slate-900">Robert Fox</p>
<p className="text-[10px] text-slate-400">Leader</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">185 PV</p>
<p className="text-[10px] text-slate-400">5%</p>
</div>
</div>

<div className="flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 text-xs font-bold flex items-center justify-center">AM</div>
<div className="">
<p className="text-sm font-medium text-slate-900">Ann May</p>
<p className="text-[10px] text-slate-400">Starter</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-semibold text-slate-900">120 PV</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex-1">
<div className="flex justify-between items-center mb-4">
<h3 className="text-base font-semibold text-slate-900">Top Clients</h3>
<svg className="lucide lucide-shopping-bag w-4 h-4 text-slate-400" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 -mx-2 rounded-lg transition-colors">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Eleanor Pena</span>
<span className="text-[10px] text-slate-400">3 orders this month</span>
</div>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">€150</span>
</div>
<div className="flex items-center justify-between p-2 -mx-2">
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-900">Cody Fisher</span>
<span className="text-[10px] text-slate-400">1 order this month</span>
</div>
<span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-md">€89</span>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="">
<h3 className="text-lg font-semibold text-slate-900">More Tools</h3>
<p className="text-sm text-slate-500">Access additional reports and detailed structure insights.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 shadow-sm border border-slate-100">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="text-base font-semibold text-slate-900">Statements</h3>
<p className="text-xs text-slate-400 mt-1">Monthly performance and bonus breakdown.</p>
</div>
<button className="mt-6 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-900 transition-colors flex items-center justify-center gap-2 relative z-10">
                            Open Statements
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 shadow-sm border border-slate-100">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-base font-semibold text-slate-900">Downline</h3>
<p className="text-xs text-slate-400 mt-1">View your team, structure levels, and volume metrics.</p>
</div>
<button className="mt-6 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-900 transition-colors flex items-center justify-center gap-2 relative z-10">
                            View Downline
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 mb-4 shadow-sm border border-slate-100">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-base font-semibold text-slate-900">My Clients</h3>
<p className="text-xs text-slate-400 mt-1">Track your customers, purchases, and cashback earnings.</p>
</div>
<button className="mt-6 w-full py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-sm font-medium text-slate-900 transition-colors flex items-center justify-center gap-2 relative z-10">
                            View Clients
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-2xl bg-slate-900 p-8 shadow-md">
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="">
<h3 className="text-lg font-semibold text-white">Understand your growth</h3>
<p className="text-slate-400 text-sm mt-1 max-w-lg">Learn how the JOYOU Reward &amp; Bonus System works to maximize your income next month.</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium rounded-lg backdrop-blur-sm transition-colors border border-white/10">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                            RBS Guide (PDF)
                        </button>
<button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 text-xs font-medium rounded-lg transition-colors">
                            See detailed analytics
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
