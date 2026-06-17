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



    const container = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
      container.appendChild(particle);
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
      
<div className="fixed inset-0 pointer-events-none" id="particles"></div>
<div className="flex min-h-screen">
<aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-indigo-950/40 border-r border-indigo-800/40 backdrop-blur-sm z-20 transition-all duration-300">
<div className="flex flex-col h-full p-4">
<div className="flex items-center mb-8">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
<span className="text-white font-bold">N</span>
</div>
<span className="ml-2 text-white font-bold text-xl hidden md:block">Nebula</span>
</div>
<nav className="flex-1 space-y-2">
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Dashboard</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Accounts</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Transactions</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Analytics</span>
</a>
<a className="flex items-center py-2 px-3 text-white bg-indigo-800/50 rounded-lg" href="#">
<svg className="w-5 h-5 md:mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="hidden md:block">Settings</span>
</a>
</nav>
</div>
</aside>
<main className="ml-16 md:ml-64 flex-1">
<header className="h-16 bg-indigo-950/40 border-b border-indigo-800/40 backdrop-blur-sm flex items-center justify-between px-6">
<h1 className="text-xl font-bold text-white">Settings</h1>
<div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white">A</div>
</header>
<div className="p-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
<div className="lg:col-span-1">
<div className="bg-indigo-900/30 rounded-xl p-5 border border-indigo-800/40 sticky top-20">
<div className="flex items-center mb-6">
<div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl">A</div>
<div className="ml-3">
<div className="text-white font-semibold">Alex Morgan</div>
<div className="text-gray-400 text-sm">Premium Member</div>
</div>
</div>
<div className="space-y-1">
<a className="flex items-center py-2 px-3 text-white bg-indigo-800/50 rounded-lg" href="#profile">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Profile</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#security">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Security</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#notifications">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Notifications</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#payment">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Payment Methods</span>
</a>
<a className="flex items-center py-2 px-3 text-gray-300 hover:bg-indigo-800/30 rounded-lg" href="#connected">
<svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span>Connected Accounts</span>
</a>
</div>
</div>
</div>
<div className="lg:col-span-3 space-y-6">
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow" id="profile">
<h2 className="text-xl font-bold text-white mb-6">Profile Settings</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-gray-400 text-sm mb-2">First Name</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" value="Alex"/>
</div>
<div>
<label className="block text-gray-400 text-sm mb-2">Last Name</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" type="text" value="Morgan"/>
</div>
<div>
<label className="block text-gray-400 text-sm mb-2">Email Address</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" type="email" value="alex.morgan@example.com"/>
</div>
<div>
<label className="block text-gray-400 text-sm mb-2">Phone Number</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" type="tel" value="+1 (555) 123-4567"/>
</div>
</div>
<div className="mt-6">
<label className="block text-gray-400 text-sm mb-2">Address</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4" type="text" value="123 Cosmic Lane"/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<input className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="City" type="text" value="Starville"/>
<input className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="State" type="text" value="CA"/>
<input className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="ZIP" type="text" value="90210"/>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">Save Changes</button>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow" id="security">
<h2 className="text-xl font-bold text-white mb-6">Security Settings</h2>
<div className="space-y-6">
<div>
<label className="block text-gray-400 text-sm mb-2">Current Password</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="block text-gray-400 text-sm mb-2">New Password</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" type="password"/>
</div>
<div>
<label className="block text-gray-400 text-sm mb-2">Confirm New Password</label>
<input className="w-full bg-indigo-900/50 border border-indigo-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between pt-4 border-t border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Two-Factor Authentication</h3>
<p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-2fa" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Login Notifications</h3>
<p className="text-gray-400 text-sm">Get notified when someone logs into your account</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-login" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">Update Security</button>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow" id="notifications">
<h2 className="text-xl font-bold text-white mb-6">Notification Preferences</h2>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Transaction Alerts</h3>
<p className="text-gray-400 text-sm">Get notified about deposits, withdrawals and payments</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-trans" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Bill Reminders</h3>
<p className="text-gray-400 text-sm">Get reminded when bills are due</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-bills" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Spending Insights</h3>
<p className="text-gray-400 text-sm">Weekly summary of your spending patterns</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input className="sr-only peer" id="toggle-insights" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Product Updates</h3>
<p className="text-gray-400 text-sm">Learn about new features and improvements</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-updates" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">Save Preferences</button>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow" id="connected">
<h2 className="text-xl font-bold text-white mb-6">Connected Accounts</h2>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 px-4 bg-indigo-800/20 rounded-lg">
<div className="flex items-center">
<svg className="w-8 h-8 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path>
</svg>
<div className="ml-3">
<h3 className="text-white font-semibold">Facebook</h3>
<p className="text-gray-400 text-xs">Connected</p>
</div>
</div>
<button className="text-gray-400 hover:text-white transition">Disconnect</button>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-indigo-800/20 rounded-lg">
<div className="flex items-center">
<svg className="w-8 h-8 text-blue-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
</svg>
<div className="ml-3">
<h3 className="text-white font-semibold">Twitter</h3>
<p className="text-gray-400 text-xs">Not Connected</p>
</div>
</div>
<button className="text-purple-400 hover:text-purple-300 transition">Connect</button>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-indigo-800/20 rounded-lg">
<div className="flex items-center">
<svg className="w-8 h-8 text-green-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2.197 14.982h-1.71l-1.594-4.685v4.685H5.08V9.01h2.43l1.521 4.493V9.01h1.772v5.973zm3.373 0h-1.9V9.01h1.9v5.973zm5.69-4.936c0 1.08-.57 1.686-1.566 1.686-.468 0-.904-.214-1.052-.473v2.077h-1.9V9.01h1.67l.11.473c.149-.298.624-.55 1.13-.55 1.092 0 1.608.638 1.608 1.69v.424zm-1.9-.284c0-.34-.222-.55-.575-.55-.352 0-.575.21-.575.55v.424c0 .34.223.55.575.55.353 0 .575-.21.575-.55v-.424z"></path>
</svg>
<div className="ml-3">
<h3 className="text-white font-semibold">Spotify</h3>
<p className="text-gray-400 text-xs">Connected</p>
</div>
</div>
<button className="text-gray-400 hover:text-white transition">Disconnect</button>
</div>
<div className="flex items-center justify-between py-3 px-4 bg- indigo-800/20 rounded-lg">
<div className="flex items-center">
<svg className="w-8 h-8 text-red-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
</svg>
<div className="ml-3">
<h3 className="text-white font-semibold">YouTube</h3>
<p className="text-gray-400 text-xs">Not Connected</p>
</div>
</div>
<button className="text-purple-400 hover:text-purple-300 transition">Connect</button>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">Save Changes</button>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow" id="payment">
<h2 className="text-xl font-bold text-white mb-6">Payment Methods</h2>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 px-4 bg-indigo-800/20 rounded-lg">
<div className="flex items-center">
<div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md flex items-center justify-center text-white font-bold text-xs">VISA</div>
<div className="ml-3">
<h3 className="text-white font-semibold">•••• •••• •••• 4567</h3>
<p className="text-gray-400 text-xs">Expires 09/2025</p>
</div>
</div>
<div className="flex space-x-2">
<button className="text-gray-400 hover:text-white transition">Edit</button>
<button className="text-gray-400 hover:text-white transition">Remove</button>
</div>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-indigo-800/20 rounded-lg">
<div className="flex items-center">
<div className="w-12 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xs">MC</div>
<div className="ml-3">
<h3 className="text-white font-semibold">•••• •••• •••• 8901</h3>
<p className="text-gray-400 text-xs">Expires 11/2024</p>
</div>
</div>
<div className="flex space-x-2">
<button className="text-gray-400 hover:text-white transition">Edit</button>
<button className="text-gray-400 hover:text-white transition">Remove</button>
</div>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 flex items-center text-purple-400 hover:text-purple-300 transition">
<svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                  Add Payment Method
                </button>
</div>
</div>
<div className="bg-indigo-900/30 rounded-xl p-6 border border-indigo-800/40 glow">
<h2 className="text-xl font-bold text-white mb-6">Account Preferences</h2>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Language</h3>
<p className="text-gray-400 text-sm">Choose your preferred language</p>
</div>
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-1.5 text-white">
<option>English</option>
<option>Spanish</option>
<option>French</option>
<option>German</option>
</select>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Currency</h3>
<p className="text-gray-400 text-sm">Set your default currency</p>
</div>
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-1.5 text-white">
<option>USD ($)</option>
<option>EUR (€)</option>
<option>GBP (£)</option>
<option>JPY (¥)</option>
</select>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Time Zone</h3>
<p className="text-gray-400 text-sm">Set your local time zone</p>
</div>
<select className="bg-indigo-900/50 border border-indigo-700 rounded-lg px-3 py-1.5 text-white">
<option>Pacific Time (UTC-8)</option>
<option>Mountain Time (UTC-7)</option>
<option>Central Time (UTC-6)</option>
<option>Eastern Time (UTC-5)</option>
</select>
</div>
<div className="flex items-center justify-between py-3 border-b border-indigo-800/40">
<div>
<h3 className="text-white font-semibold">Dark Mode</h3>
<p className="text-gray-400 text-sm">Always use dark mode</p>
</div>
<div className="relative inline-block w-12 h-6 rounded-full bg-indigo-900/50">
<input checked="" className="sr-only peer" id="toggle-dark" type="checkbox"/>
<span className="absolute inset-0 rounded-full bg-indigo-900 peer-checked:bg-purple-600 transition"></span>
<span className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition peer-checked:translate-x-6"></span>
</div>
</div>
</div>
<div className="mt-6">
<button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:from-purple-700 hover:to-indigo-700 transition">Save Preferences</button>
</div>
</div>
<div className="bg-red-900/20 rounded-xl p-6 border border-red-800/40">
<h2 className="text-xl font-bold text-white mb-6">Danger Zone</h2>
<div className="space-y-4">
<div className="flex items-center justify-between py-3 px-4 bg-red-900/20 rounded-lg">
<div>
<h3 className="text-white font-semibold">Deactivate Account</h3>
<p className="text-gray-400 text-sm">Temporarily disable your account</p>
</div>
<button className="px-4 py-2 bg-red-900/50 text-white rounded-lg hover:bg-red-900/70 transition">Deactivate</button>
</div>
<div className="flex items-center justify-between py-3 px-4 bg-red-900/20 rounded-lg">
<div>
<h3 className="text-white font-semibold">Delete Account</h3>
<p className="text-gray-400 text-sm">Permanently delete your account and all data</p>
</div>
<button className="px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">Delete</button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
