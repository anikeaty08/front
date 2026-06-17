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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function switchTab(screenId, btnElement) {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.add('hidden');
                screen.classList.remove('block');
            });
            
            // Show selected screen
            const activeScreen = document.getElementById('screen-' + screenId);
            activeScreen.classList.remove('hidden');
            activeScreen.classList.add('block');
            
            // Reset all nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.querySelector('.nav-icon').classList.replace('text-gray-900', 'text-gray-400');
                btn.querySelector('.nav-text').classList.replace('text-gray-900', 'text-gray-400');
                btn.querySelector('.nav-dot').classList.add('hidden');
                btn.querySelector('.nav-dot').classList.remove('block');
            });
            
            // Activate clicked nav button
            btnElement.querySelector('.nav-icon').classList.replace('text-gray-400', 'text-gray-900');
            btnElement.querySelector('.nav-text').classList.replace('text-gray-400', 'text-gray-900');
            btnElement.querySelector('.nav-dot').classList.remove('hidden');
            btnElement.querySelector('.nav-dot').classList.add('block');
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
      

<div className="w-full max-w-[393px] h-[852px] bg-[#FAFAFA] relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[3.5rem] border-[8px] border-[#1c1c1e] flex flex-col">

<div className="absolute top-0 w-full h-14 z-50 flex justify-between items-center px-7 pointer-events-none">
<span className="text-xs font-medium text-gray-900 mt-1">9:41</span>
<div className="w-[120px] h-[32px] bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2"></div>
<div className="flex items-center gap-1.5 mt-1 text-gray-900">
<iconify-icon className="text-sm" icon="solar:cellular-network-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:wi-fi-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:battery-charge-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar pt-16 pb-32">

<div className="screen block fade-in" id="screen-home">

<div className="px-6 pt-4 pb-6 flex justify-between items-center">
<div className="flex items-center gap-3">
<img alt="Profile" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?img=47"/>
<div>
<p className="text-xs text-gray-500 font-normal">Good morning,</p>
<p className="text-xl font-medium tracking-tight text-gray-900">Sarah Jenkins</p>
</div>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
<iconify-icon className="text-xl text-gray-900" icon="solar:bell-linear"></iconify-icon>
</button>
</div>

<div className="px-6 mb-8">
<div className="bg-gray-900 rounded-[2rem] p-6 relative overflow-hidden shadow-lg">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-6">
<div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
<iconify-icon className="text-xs text-white" icon="solar:shield-star-linear"></iconify-icon>
<span className="text-xs text-white font-medium">Premium Member</span>
</div>
<iconify-icon className="text-xl text-gray-400 cursor-pointer hover:text-white transition-colors" icon="solar:menu-dots-circle-linear"></iconify-icon>
</div>
<div className="relative z-10 mb-2">
<p className="text-sm text-gray-400 font-normal mb-1">Total Coverage Value</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl text-gray-300 font-medium">$</span>
<h1 className="text-4xl text-white font-medium tracking-tight">2,697,892</h1>
</div>
</div>
</div>
</div>

<div className="px-6 flex justify-between items-center mb-10">
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-900" icon="solar:document-add-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">File Claim</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-900" icon="solar:card-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">ID Cards</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-900" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Payments</span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="w-14 h-14 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-900" icon="solar:chat-line-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">Support</span>
</button>
</div>

<div className="mb-8">
<div className="px-6 flex justify-between items-center mb-4">
<h2 className="text-lg font-medium text-gray-900 tracking-tight">Active Policies</h2>
<button className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors">See All</button>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar snap-x pb-4 px-6">
<div className="w-[220px] bg-white rounded-3xl p-5 shrink-0 snap-start shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-gray-200 transition-all">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-900" icon="solar:car-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400">•• 4578</span>
</div>
<div>
<p className="text-xs font-medium text-gray-500 mb-0.5">Auto • Comprehensive</p>
<p className="text-xl font-medium tracking-tight text-gray-900">$1,412,700</p>
</div>
</div>
<div className="w-[220px] bg-white rounded-3xl p-5 shrink-0 snap-start shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-gray-200 transition-all">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-900" icon="solar:home-angle-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-gray-400">•• 1920</span>
</div>
<div>
<p className="text-xs font-medium text-gray-500 mb-0.5">Home • Premium</p>
<p className="text-xl font-medium tracking-tight text-gray-900">$900,000</p>
</div>
</div>
<button className="w-[100px] bg-transparent border border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center shrink-0 snap-start hover:bg-gray-50 transition-colors gap-2 text-gray-400 hover:text-gray-900">
<iconify-icon className="text-2xl" icon="solar:add-circle-linear"></iconify-icon>
<span className="text-xs font-medium">Add New</span>
</button>
<div className="w-2 shrink-0"></div>
</div>
</div>

<div className="px-6">
<h2 className="text-lg font-medium text-gray-900 tracking-tight mb-4">Recent Claims</h2>
<div className="bg-white rounded-[2rem] p-2 shadow-sm border border-gray-100">
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 rounded-2xl transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-xl text-gray-900" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Windshield Repair</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Oct 24, 2023</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">-$450</p>
<p className="text-xs font-medium text-emerald-500 mt-0.5">Approved</p>
</div>
</div>
<div className="h-px w-[calc(100%-2rem)] mx-auto bg-gray-50"></div>
<div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 rounded-2xl transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
<iconify-icon className="text-xl text-gray-300" icon="solar:home-bold-duotone"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Roof Inspection</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Sep 12, 2023</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-gray-900">$0</p>
<p className="text-xs font-medium text-gray-400 mt-0.5">Closed</p>
</div>
</div>
</div>
</div>
</div>

<div className="screen hidden fade-in" id="screen-claims">
<div className="px-6 pt-6 mb-6">
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Claims</h1>
</div>

<div className="px-6 mb-6">
<div className="flex p-1 bg-gray-100 rounded-full">
<button className="flex-1 py-2 text-sm font-medium text-gray-900 bg-white rounded-full shadow-sm">Active</button>
<button className="flex-1 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">History</button>
</div>
</div>

<div className="px-6 space-y-4">

<div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
<iconify-icon className="text-xl text-orange-500" icon="solar:car-broken-linear"></iconify-icon>
</div>
<div>
<span className="inline-block px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-md mb-1">In Review</span>
<p className="text-sm font-medium text-gray-900">Rear-end Collision</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Claim #CLM-92841</p>
</div>
</div>
<p className="text-xs text-gray-400">2d ago</p>
</div>
<div className="h-px w-full bg-gray-50 mb-4"></div>
<div className="flex justify-between items-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
<button className="text-sm font-medium text-gray-900 hover:text-gray-600">View Details</button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-4">
<div className="flex gap-3">
<div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
<iconify-icon className="text-xl text-emerald-500" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div>
<span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-600 text-xs font-medium rounded-md mb-1">Approved</span>
<p className="text-sm font-medium text-gray-900">Windshield Repair</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Claim #CLM-83722</p>
</div>
</div>
<p className="text-xs text-gray-400">Oct 24</p>
</div>
<div className="h-px w-full bg-gray-50 mb-4"></div>
<div className="flex justify-between items-center">
<p className="text-sm font-medium text-gray-900">-$450.00</p>
<button className="text-sm font-medium text-gray-900 hover:text-gray-600">View Details</button>
</div>
</div>

<button className="w-full py-4 mt-2 bg-gray-900 text-white rounded-[1.5rem] flex items-center justify-center gap-2 font-medium text-sm hover:bg-gray-800 transition-colors shadow-md">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
                        File a New Claim
                    </button>
</div>
</div>

<div className="screen hidden fade-in" id="screen-policies">
<div className="px-6 pt-6 mb-6">
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Policies</h1>
</div>
<div className="px-6 space-y-6">

<div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100 flex justify-between items-center">
<div>
<p className="text-xs font-medium text-gray-500 mb-1">Total Monthly Premium</p>
<p className="text-2xl font-medium tracking-tight text-gray-900">$214.50</p>
</div>
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
<iconify-icon className="text-xl text-gray-900" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-gray-500 px-2 mb-3 uppercase tracking-wider">Vehicles</h2>
<div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-900" icon="solar:car-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">2021 Tesla Model 3</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Auto • Comprehensive</p>
</div>
</div>
<iconify-icon className="text-xl text-gray-400" icon="solar:menu-dots-circle-linear"></iconify-icon>
</div>
<div className="bg-gray-50 rounded-2xl p-4 flex justify-between mb-4">
<div>
<p className="text-xs text-gray-500 mb-1">Policy Number</p>
<p className="text-sm font-medium text-gray-900">POL-4578-29</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Premium</p>
<p className="text-sm font-medium text-gray-900">$120/mo</p>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">View ID Card</button>
<button className="flex-1 py-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">Manage</button>
</div>
</div>
</div>

<div>
<h2 className="text-sm font-medium text-gray-500 px-2 mb-3 uppercase tracking-wider">Properties</h2>
<div className="bg-white rounded-[2rem] p-5 shadow-sm border border-gray-100">
<div className="flex justify-between items-start mb-5">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-900" icon="solar:home-angle-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">123 Main Street</p>
<p className="text-xs font-normal text-gray-500 mt-0.5">Home • Premium</p>
</div>
</div>
<iconify-icon className="text-xl text-gray-400" icon="solar:menu-dots-circle-linear"></iconify-icon>
</div>
<div className="bg-gray-50 rounded-2xl p-4 flex justify-between mb-4">
<div>
<p className="text-xs text-gray-500 mb-1">Policy Number</p>
<p className="text-sm font-medium text-gray-900">POL-1920-84</p>
</div>
<div className="text-right">
<p className="text-xs text-gray-500 mb-1">Premium</p>
<p className="text-sm font-medium text-gray-900">$94.50/mo</p>
</div>
</div>
<button className="w-full py-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">View Details</button>
</div>
</div>
</div>
</div>

<div className="screen hidden fade-in" id="screen-profile">
<div className="px-6 pt-6 mb-6">
<h1 className="text-3xl font-medium tracking-tight text-gray-900">Settings</h1>
</div>
<div className="px-6">

<div className="flex items-center gap-4 mb-8">
<img alt="Profile" className="w-20 h-20 rounded-full object-cover shadow-sm border border-gray-100" src="https://i.pravatar.cc/150?img=47"/>
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900">Sarah Jenkins</h2>
<p className="text-sm text-gray-500 mb-2">sarah.jenkins@example.com</p>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-900 rounded-md">
<iconify-icon className="text-xs text-white" icon="solar:shield-star-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Premium Member</span>
</span>
</div>
</div>

<div className="space-y-6">

<div>
<h3 className="text-xs font-medium text-gray-500 px-2 mb-2 uppercase tracking-wider">Account</h3>
<div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-center gap-3 text-gray-900">
<iconify-icon className="text-xl text-gray-400" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-sm font-medium">Personal Information</span>
</div>
<iconify-icon className="text-lg text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="h-px bg-gray-50 w-full"></div>
<div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-center gap-3 text-gray-900">
<iconify-icon className="text-xl text-gray-400" icon="solar:card-linear"></iconify-icon>
<span className="text-sm font-medium">Payment Methods</span>
</div>
<iconify-icon className="text-lg text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-gray-500 px-2 mb-2 uppercase tracking-wider">Preferences</h3>
<div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
<div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3 text-gray-900">
<iconify-icon className="text-xl text-gray-400" icon="solar:bell-bing-linear"></iconify-icon>
<span className="text-sm font-medium">Push Notifications</span>
</div>

<div className="w-12 h-7 bg-gray-900 rounded-full flex items-center px-1 cursor-pointer transition-colors">
<div className="w-5 h-5 bg-white rounded-full translate-x-5 transition-transform shadow-sm"></div>
</div>
</div>
<div className="h-px bg-gray-50 w-full"></div>
<div className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
<div className="flex items-center gap-3 text-gray-900">
<iconify-icon className="text-xl text-gray-400" icon="solar:face-scan-linear"></iconify-icon>
<span className="text-sm font-medium">Face ID Sign In</span>
</div>

<div className="w-12 h-7 bg-gray-200 rounded-full flex items-center px-1 cursor-pointer transition-colors">
<div className="w-5 h-5 bg-white rounded-full transition-transform shadow-sm"></div>
</div>
</div>
<div className="h-px bg-gray-50 w-full"></div>
<div className="flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors">
<div className="flex items-center gap-3 text-gray-900">
<iconify-icon className="text-xl text-gray-400" icon="solar:global-linear"></iconify-icon>
<span className="text-sm font-medium">Language</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm text-gray-400">English (US)</span>
<iconify-icon className="text-lg text-gray-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<button className="w-full py-4 text-sm font-medium text-red-500 bg-red-50 rounded-2xl hover:bg-red-100 transition-colors flex justify-center items-center gap-2">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon>
                            Sign Out
                        </button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-xl border-t border-white/20 pt-4 pb-8 px-8 flex justify-between items-center z-50">

<button className="nav-btn flex flex-col items-center gap-1.5 w-16 group outline-none" onclick="switchTab('home', this)">
<div className="relative">
<iconify-icon className="nav-icon text-3xl text-gray-900 transition-colors" icon="solar:home-2-linear"></iconify-icon>
<div className="nav-dot absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full block"></div>
</div>
<span className="nav-text text-xs font-medium text-gray-900 transition-colors">Home</span>
</button>

<button className="nav-btn flex flex-col items-center gap-1.5 w-16 group outline-none" onclick="switchTab('claims', this)">
<div className="relative">
<iconify-icon className="nav-icon text-3xl text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:document-text-linear"></iconify-icon>
<div className="nav-dot absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full hidden"></div>
</div>
<span className="nav-text text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors">Claims</span>
</button>

<button className="nav-btn flex flex-col items-center gap-1.5 w-16 group outline-none" onclick="switchTab('policies', this)">
<div className="relative">
<iconify-icon className="nav-icon text-3xl text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:shield-check-linear"></iconify-icon>
<div className="nav-dot absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full hidden"></div>
</div>
<span className="nav-text text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors">Policies</span>
</button>

<button className="nav-btn flex flex-col items-center gap-1.5 w-16 group outline-none" onclick="switchTab('profile', this)">
<div className="relative">
<iconify-icon className="nav-icon text-3xl text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:user-linear"></iconify-icon>
<div className="nav-dot absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-900 rounded-full hidden"></div>
</div>
<span className="nav-text text-xs font-medium text-gray-400 group-hover:text-gray-900 transition-colors">Profile</span>
</button>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-gray-900 rounded-full z-[60]"></div>
</div>



    </>
  );
}
