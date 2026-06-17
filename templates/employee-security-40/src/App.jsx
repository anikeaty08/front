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
      

<div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 z-50">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-gray-900">SecureWork</span>
</div>
<button className="p-2 text-gray-500">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<aside className="hidden lg:flex flex-col w-64 bg-white border-r border-gray-200 h-full fixed left-0 top-0 z-40">

<div className="h-16 flex items-center px-6 border-b border-gray-100">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 bg-gray-900 rounded-lg text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-gray-900">SecureWork</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">Employee Portal</div>

<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-900 bg-gray-100 rounded-md group shadow-sm ring-1 ring-gray-200/50" href="#">
<iconify-icon className="text-gray-900" icon="solar:home-2-linear" width="20"></iconify-icon>
                Overview
            </a>
<a className="flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:file-check-linear" width="20"></iconify-icon>
                    Policies &amp; Consent
                </div>
<span className="bg-rose-50 border border-rose-100 text-rose-600 text-xs py-0.5 px-2 rounded-full font-semibold">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
                Device Security
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:diploma-verified-linear" width="20"></iconify-icon>
                Awareness Training
                <span className="ml-auto bg-amber-50 text-amber-600 text-xs py-0.5 px-2 rounded-full font-medium border border-amber-100">1</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-500 rounded-md hover:text-gray-900 hover:bg-gray-50 transition-colors group" href="#">
<iconify-icon className="text-gray-400 group-hover:text-gray-600 transition-colors" icon="solar:shield-warning-linear" width="20"></iconify-icon>
                Incident Reporting
            </a>
</div>

<div className="p-4 border-t border-gray-100 bg-gray-50/50">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 border border-white shadow-sm flex items-center justify-center text-xs font-bold text-gray-600">
                    VP
                </div>
<div className="flex flex-col min-w-0">
<span className="text-sm font-medium text-gray-900 truncate">Vaishnavi P.</span>
<span className="text-xs text-gray-500 truncate">Engineering Lead</span>
</div>
<button className="ml-auto text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 h-full overflow-y-auto pt-16 lg:pt-0 bg-gray-50/30">
<div className="max-w-6xl mx-auto px-4 sm:px-8 py-10">

<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Good morning, Vaishnavi</h1>
<p className="text-sm text-gray-500 mt-1">Here is your security posture for October 24.</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all shadow-sm">
<iconify-icon icon="solar:refresh-linear" width="14"></iconify-icon>
                        Refresh Data
                    </button>
<button className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white bg-gray-900 rounded-lg hover:bg-black transition-all shadow-sm">
<iconify-icon icon="solar:shield-warning-linear" width="14"></iconify-icon>
                        Report Incident
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon icon="solar:shield-check-linear" width="120"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<h3 className="font-medium text-gray-900 text-sm">Security Score</h3>
<span className="bg-emerald-50 text-emerald-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded border border-emerald-100 tracking-wider">Good</span>
</div>
<div className="flex items-center gap-6">

<div className="relative w-24 h-24 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-gray-100" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-gray-900 animate-progress" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="260" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<span className="absolute text-2xl font-bold text-gray-900 tracking-tight">85</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-gray-500 mb-1">Top factors:</span>
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-700">MFA Enabled</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-xs" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-700">OS Updated</span>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-gray-50">
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 transition-colors" href="#">
                            View detailed breakdown
                            <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col md:col-span-1 lg:col-span-1">
<div className="flex justify-between items-center mb-5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
<h3 className="font-medium text-gray-900 text-sm">Action Required</h3>
</div>
<span className="text-xs text-gray-400">3 items</span>
</div>
<div className="space-y-3 flex-1">

<div className="group flex items-center justify-between p-3 rounded-lg border border-rose-100 bg-rose-50/30 hover:bg-rose-50 hover:border-rose-200 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-rose-100 text-rose-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Sign IT Policy</span>
<span className="text-[10px] text-gray-500">Due in 2 days</span>
</div>
</div>
<iconify-icon className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5 transition-all" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>

<div className="group flex items-center justify-between p-3 rounded-lg border border-amber-100 bg-amber-50/30 hover:bg-amber-50 hover:border-amber-200 transition-all cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white border border-amber-100 text-amber-500 flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:restart-linear" width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-gray-900">Chrome Update</span>
<span className="text-[10px] text-gray-500">Version 118.0.2</span>
</div>
</div>
<button className="text-[10px] font-medium bg-white border border-gray-200 px-2 py-1 rounded hover:bg-gray-50">Update</button>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col">
<div className="flex justify-between items-center mb-5">
<h3 className="font-medium text-gray-900 text-sm">Primary Device</h3>
<iconify-icon className="text-gray-400" icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-800 border border-gray-100">
<iconify-icon icon="solar:macbook-linear" width="28"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-gray-900">MacBook Pro M1</div>
<div className="text-xs text-gray-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Compliant
                            </div>
</div>
</div>
<div className="space-y-2 mt-auto">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Disk Encryption</span>
<div className="flex items-center gap-1 text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="font-medium">On</span>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Firewall</span>
<div className="flex items-center gap-1 text-emerald-600">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
<span className="font-medium">Active</span>
</div>
</div>
<div className="w-full h-px bg-gray-100"></div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-500">Last Sync</span>
<span className="text-gray-900">24m ago</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-medium text-gray-900 text-sm">Security Training</h3>
<p className="text-xs text-gray-500 mt-0.5">Annual compliance requirement</p>
</div>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900" href="#">View All</a>
</div>
<div className="flex flex-col sm:flex-row gap-6 items-center">
<div className="flex-1 w-full space-y-4">

<div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-gray-900">Social Engineering 101</span>
<span className="text-emerald-600">Completed</span>
</div>
<div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>

<div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm">
<div className="flex justify-between text-xs font-medium mb-2">
<span className="text-gray-900">Phishing Awareness Q4</span>
<span className="text-gray-500">45%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-gray-900 w-[45%] rounded-full"></div>
</div>
<div className="mt-2 flex justify-end">
<button className="text-[10px] font-semibold text-gray-900 hover:underline">Resume</button>
</div>
</div>
</div>

<div className="w-full sm:w-auto flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100 border-dashed">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 mb-2">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-bold text-gray-900">Level 4</span>
<span className="text-[10px] text-gray-500">Security Champion</span>
</div>
</div>
</div>

<div className="bg-white p-0 rounded-xl border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden flex flex-col">
<div className="p-6 border-b border-gray-100 flex justify-between items-center">
<h3 className="font-medium text-gray-900 text-sm">Recent Activity</h3>
<iconify-icon className="text-gray-400" icon="solar:history-linear" width="18"></iconify-icon>
</div>
<div className="flex-1 overflow-auto">
<table className="w-full text-left border-collapse">
<tbody className="text-xs">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-gray-900 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:login-2-linear"></iconify-icon>
                                            Okta Login
                                        </div>
</td>
<td className="px-6 py-3 text-gray-500 text-right">2m ago</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-gray-900 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:file-download-linear"></iconify-icon>
                                            Policy PDF
                                        </div>
</td>
<td className="px-6 py-3 text-gray-500 text-right">1h ago</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-gray-900 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
                                            Scan Complete
                                        </div>
</td>
<td className="px-6 py-3 text-gray-500 text-right">Yesterday</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-6 py-3 text-gray-900 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                                            New Location
                                        </div>
</td>
<td className="px-6 py-3 text-gray-500 text-right">Oct 22</td>
</tr>
</tbody>
</table>
</div>
<div className="p-3 border-t border-gray-100 bg-gray-50">
<button className="w-full text-xs text-gray-500 hover:text-gray-800 font-medium text-center">View Full Log</button>
</div>
</div>
</div>

<div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-between shadow-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-yellow-300" icon="solar:lightbulb-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold">Tip of the day</h4>
<p className="text-xs text-gray-300 mt-0.5">Lock your screen (Cmd + Ctrl + Q) whenever you step away from your desk.</p>
</div>
</div>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mt-12 text-center pb-6">
<p className="text-xs text-gray-400">
                    SecureWork Compliance Engine v2.4 • <a className="hover:text-gray-600 hover:underline" href="#">Help Center</a>
</p>
</div>
</div>
</main>

    </>
  );
}
