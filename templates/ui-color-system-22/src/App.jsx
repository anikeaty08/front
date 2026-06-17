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
      
<div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">

<header className="mb-16 border-b border-[#cfcfcf]/40 pb-8">
<div className="flex items-center justify-between">
<div>
<h1 className="text-4xl font-medium tracking-tight text-[#242924] mb-3">Forest &amp; Sky System</h1>
<p className="text-lg font-normal text-[#798a79] max-w-2xl">
                        A derived color system blending organic deep greens and earthy contrasts with a precise, engineered blue for modern digital interfaces.
                    </p>
</div>
<div className="hidden md:flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ffffff] border border-[#cfcfcf] text-[#242924] hover:bg-[#f8faf8] transition-colors shadow-sm text-sm font-medium">
<i className="w-4 h-4 text-[#798a79]" data-lucide="download"></i>
                        Export
                    </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#242924] text-white hover:bg-[#1f3c24] transition-colors shadow-sm text-sm font-medium">
<i className="w-4 h-4 text-[#b5d4b5]" data-lucide="share-2"></i>
                        Share
                    </button>
</div>
</div>
</header>

<main className="space-y-16">

<section>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#0a803f]" data-lucide="leaf"></i>
<h2 className="text-xl font-medium tracking-tight text-[#242924]">Primary Tones</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<div className="group cursor-pointer">
<div className="h-32 w-full rounded-xl bg-[#1f3c24] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Forest Deep</p>
<p className="text-sm text-[#798a79] font-mono">#1f3c24</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-32 w-full rounded-xl bg-[#0a803f] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Emerald</p>
<p className="text-sm text-[#798a79] font-mono">#0a803f</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-32 w-full rounded-xl bg-[#046435] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Pine</p>
<p className="text-sm text-[#798a79] font-mono">#046435</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-32 w-full rounded-xl bg-[#4c954c] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Grass</p>
<p className="text-sm text-[#798a79] font-mono">#4c954c</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-32 w-full rounded-xl bg-[#b5d4b5] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02] flex items-center justify-center">
<span className="text-[#1f3c24]/40 font-medium">50%</span>
</div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Sage Mist</p>
<p className="text-sm text-[#798a79] font-mono">#b5d4b5</p>
</div>
</div>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-[#3b82f6]" data-lucide="droplet"></i>
<h2 className="text-xl font-medium tracking-tight text-[#242924]">Interface Blue</h2>
</div>
<span className="text-sm text-[#798a79] bg-[#ffffff] border border-[#cfcfcf] px-2 py-1 rounded">New Addition</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="group cursor-pointer">
<div className="h-24 w-full rounded-xl bg-[#1e3a8a] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Midnight</p>
<p className="text-sm text-[#798a79] font-mono">#1e3a8a</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-24 w-full rounded-xl bg-[#2563eb] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Electric</p>
<p className="text-sm text-[#798a79] font-mono">#2563eb</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-24 w-full rounded-xl bg-[#60a5fa] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Sky</p>
<p className="text-sm text-[#798a79] font-mono">#60a5fa</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="h-24 w-full rounded-xl bg-[#eff6ff] shadow-sm ring-1 ring-black/5 transition-transform group-hover:scale-[1.02]"></div>
<div className="mt-3">
<p className="text-base font-medium text-[#242924]">Wash</p>
<p className="text-sm text-[#798a79] font-mono">#eff6ff</p>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<section>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#cb5f1e]" data-lucide="sun"></i>
<h2 className="text-xl font-medium tracking-tight text-[#242924]">Warm Accents</h2>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#cb5f1e] shadow-sm ring-1 ring-black/5"></div>
<p className="text-sm text-[#798a79] font-mono">#cb5f1e</p>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#e6b405] shadow-sm ring-1 ring-black/5"></div>
<p className="text-sm text-[#798a79] font-mono">#e6b405</p>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#bcc057] shadow-sm ring-1 ring-black/5"></div>
<p className="text-sm text-[#798a79] font-mono">#bcc057</p>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#7a331f] shadow-sm ring-1 ring-black/5"></div>
<p className="text-sm text-[#798a79] font-mono">#7a331f</p>
</div>
</div>
</section>

<section>
<div className="flex items-center gap-2 mb-6">
<i className="w-5 h-5 text-[#3f514e]" data-lucide="minus"></i>
<h2 className="text-xl font-medium tracking-tight text-[#242924]">Neutrals</h2>
</div>
<div className="grid grid-cols-5 gap-3">
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#242924] shadow-sm ring-1 ring-black/5"></div>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#3f514e] shadow-sm ring-1 ring-black/5"></div>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#798a79] shadow-sm ring-1 ring-black/5"></div>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#cfcfcf] shadow-sm ring-1 ring-black/5"></div>
</div>
<div className="space-y-2">
<div className="h-20 w-full rounded-lg bg-[#ffffff] border border-[#cfcfcf]/30 shadow-sm"></div>
</div>
</div>
<div className="flex justify-between mt-2 px-1">
<p className="text-sm text-[#798a79] font-mono">#242924</p>
<p className="text-sm text-[#798a79] font-mono">#ffffff</p>
</div>
</section>
</div>

<section className="border-t border-[#cfcfcf]/40 pt-16">
<div className="flex items-center gap-2 mb-10">
<i className="w-5 h-5 text-[#242924]" data-lucide="layout"></i>
<h2 className="text-xl font-medium tracking-tight text-[#242924]">Component Examples</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#cfcfcf]/40 p-6 flex flex-col h-full">
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#b5d4b5]/30 flex items-center justify-center text-[#1f3c24]">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</div>
<div>
<h3 className="text-base font-semibold text-[#242924]">Growth Report</h3>
<p className="text-sm text-[#798a79]">Last 30 days</p>
</div>
</div>
<span className="inline-flex items-center rounded-full bg-[#f8faf8] px-2.5 py-0.5 text-xs font-medium text-[#046435] border border-[#b5d4b5]">
                                +12.5%
                            </span>
</div>

<div className="flex items-end gap-2 h-32 mb-6 px-1">
<div className="w-full bg-[#b5d4b5]/30 rounded-t-sm h-12 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#242924] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">Mon</div>
</div>
<div className="w-full bg-[#b5d4b5]/50 rounded-t-sm h-16"></div>
<div className="w-full bg-[#4c954c] rounded-t-sm h-24 shadow-sm"></div>
<div className="w-full bg-[#1f3c24] rounded-t-sm h-20 shadow-sm"></div>
<div className="w-full bg-[#0a803f] rounded-t-sm h-28 shadow-sm"></div>
</div>
<div className="mt-auto pt-4 border-t border-[#f8faf8]">
<button className="w-full py-2.5 rounded-lg bg-[#242924] text-white text-sm font-medium hover:bg-[#1f3c24] transition-all shadow-sm flex items-center justify-center gap-2">
                                View Analysis <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#cfcfcf]/40 p-6">
<h3 className="text-base font-semibold text-[#242924] mb-4">Account Settings</h3>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-[#3f514e] mb-1.5">Email Address</label>
<div className="relative">
<i className="absolute left-3 top-2.5 w-5 h-5 text-[#798a79]" data-lucide="mail"></i>
<input className="block w-full rounded-lg border-[#cfcfcf] py-2.5 pl-10 pr-3 text-[#242924] placeholder:text-[#cfcfcf] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 sm:text-sm sm:leading-6 border shadow-sm outline-none transition-all" type="email" value="user@example.com"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-[#3f514e] mb-1.5">Notifications</label>
<div className="flex items-center justify-between p-3 rounded-lg border border-[#cfcfcf]/40 bg-[#f8faf8]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#eff6ff] flex items-center justify-center text-[#2563eb]">
<i className="w-4 h-4" data-lucide="bell"></i>
</div>
<span className="text-sm font-medium text-[#242924]">Push Alerts</span>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-[#cfcfcf] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0a803f]"></div>
</label>
</div>
</div>
<div className="pt-2">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-semibold uppercase tracking-wider text-[#798a79]">Volume</span>
<span className="text-xs text-[#242924]">75%</span>
</div>

<div className="relative w-full h-1.5 bg-[#f8faf8] rounded-full border border-[#cfcfcf]/50 overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-[#cb5f1e] rounded-full" style={{width: '75%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#cfcfcf]/40 p-6 flex flex-col justify-between">
<div>
<h3 className="text-base font-semibold text-[#242924] mb-4">System Status</h3>
<div className="space-y-3">
<div className="flex items-center justify-between py-2 border-b border-[#f8faf8]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#0a803f]"></span>
<span className="text-sm text-[#3f514e]">API Server</span>
</div>
<span className="inline-flex items-center rounded-md bg-[#b5d4b5]/30 px-2 py-1 text-xs font-medium text-[#1f3c24] ring-1 ring-inset ring-[#b5d4b5]/50">Operational</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-[#f8faf8]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#cb5f1e]"></span>
<span className="text-sm text-[#3f514e]">Database</span>
</div>
<span className="inline-flex items-center rounded-md bg-[#fff7ed] px-2 py-1 text-xs font-medium text-[#9a3412] ring-1 ring-inset ring-[#ffedd5]">Degraded</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-[#f8faf8]">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
<span className="text-sm text-[#3f514e]">Worker Nodes</span>
</div>
<span className="inline-flex items-center rounded-md bg-[#eff6ff] px-2 py-1 text-xs font-medium text-[#1e40af] ring-1 ring-inset ring-[#bfdbfe]">Syncing</span>
</div>
</div>
</div>
<div className="mt-6 p-4 bg-[#f8faf8] rounded-lg border border-[#cfcfcf]/30">
<div className="flex gap-3">
<div className="flex-shrink-0">
<i className="w-5 h-5 text-[#2563eb]" data-lucide="info"></i>
</div>
<div>
<h4 className="text-sm font-semibold text-[#242924]">Maintenance Scheduled</h4>
<p className="text-sm text-[#798a79] mt-1">System upgrade scheduled for Sunday at 2:00 AM UTC.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="mt-20 pt-8 border-t border-[#cfcfcf]/40 text-center text-[#798a79] text-base">
<p>© 2023 Design Palette System. Generated for UI implementation.</p>
</footer>
</div>


    </>
  );
}
