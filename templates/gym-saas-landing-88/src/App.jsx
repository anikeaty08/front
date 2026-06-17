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
sans: ['Inter', 'sans-serif'],
},
colors: {
border: 'rgba(255, 255, 255, 0.08)',
surface: 'rgba(255, 255, 255, 0.03)',
surfaceHover: 'rgba(255, 255, 255, 0.06)',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Simple script for pricing toggle visual effect (logic mock)
        const toggle = document.getElementById('pricing-toggle');
        toggle.addEventListener('change', (e) => {
            const prices = document.querySelectorAll('.tracking-tight.mb-4');
            if(e.target.checked) {
                // Mock yearly prices
                prices[0].innerHTML = '$159<span class="text-sm text-neutral-500 font-normal">/mo</span>';
                prices[1].innerHTML = '$319<span class="text-sm text-neutral-500 font-normal">/mo</span>';
            } else {
                prices[0].innerHTML = '$199<span class="text-sm text-neutral-500 font-normal">/mo</span>';
                prices[1].innerHTML = '$399<span class="text-sm text-neutral-500 font-normal">/mo</span>';
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
      

<nav className="fixed w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:opacity-80 transition-opacity">PULSE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Integrations</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded hover:bg-neutral-200 transition-colors" href="#">Start Trial</a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neutral-800/20 rounded-[100%] blur-[100px] -z-10 pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-neutral-300">v2.0 Now Available</span>
</div>
<h1 className="md:text-6xl lg:text-7xl bg-clip-text leading-[1.1] text-4xl font-medium text-transparent tracking-tight bg-gradient-to-b from-white to-neutral-500 max-w-4xl mr-auto mb-6 ml-auto">
                The HASAN system <br/> for modern fitness clubs.
            </h1>
<p className="text-neutral-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-10 font-light">
                Manage members, schedule classes, and process payments with a platform designed for speed and clarity. No clutter, just performance.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="h-10 px-6 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 w-full md:w-auto justify-center">
                    Get Started 
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-10 px-6 rounded border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors w-full md:w-auto">
                    View Demo
                </button>
</div>

<div className="relative max-w-5xl mx-auto animate-float">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full"></div>
<div className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-neutral-900/50 overflow-hidden">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-neutral-900/50">
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-800"></div>
</div>

<div className="flex h-[400px] md:h-[600px] text-left">

<div className="w-16 md:w-60 border-r border-white/5 p-4 flex flex-col gap-1 bg-neutral-900/20">
<div className="text-[10px] font-medium text-neutral-500 mb-2 px-2 uppercase tracking-wider">Menu</div>
<div className="flex items-center gap-3 px-2 py-2 rounded bg-white/5 text-white text-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
<span className="hidden md:inline">Overview</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-neutral-400 text-sm transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="hidden md:inline">Members</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-neutral-400 text-sm transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
<span className="hidden md:inline">Schedule</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded hover:bg-white/5 text-neutral-400 text-sm transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
<span className="hidden md:inline">Finance</span>
</div>
</div>

<div className="flex-1 p-6 md:p-8 overflow-hidden">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium text-white">Dashboard</h3>
<div className="flex gap-2">
<span className="px-3 py-1 rounded border border-white/10 text-xs text-neutral-400">Oct 2023</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/30">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-white/5 text-neutral-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-emerald-400 text-xs flex items-center gap-1">+12.5% <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">1,204</div>
<div className="text-xs text-neutral-500 mt-1">Active Members</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/30">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-white/5 text-neutral-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dollar-sign" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-emerald-400 text-xs flex items-center gap-1">+8.2% <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">$84.2k</div>
<div className="text-xs text-neutral-500 mt-1">Monthly Revenue</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-neutral-900/30 hidden md:block">
<div className="flex justify-between items-start mb-4">
<div className="p-2 rounded bg-white/5 text-neutral-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></g></svg>
</div>
<span className="text-neutral-500 text-xs">0.0%</span>
</div>
<div className="text-2xl font-medium text-white tracking-tight">98%</div>
<div className="text-xs text-neutral-500 mt-1">Retention Rate</div>
</div>
</div>

<div className="w-full h-48 rounded-lg border border-white/5 bg-neutral-900/30 p-4 flex items-end justify-between gap-2 relative">
<div className="absolute top-4 left-4 text-xs text-neutral-500">Revenue Flow</div>
<div className="w-full bg-neutral-800/50 h-[40%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 h-[65%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 h-[50%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 h-[80%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-neutral-800/50 h-[60%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
<div className="w-full bg-white h-[90%] rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-full bg-neutral-800/50 h-[75%] rounded-t-sm hover:bg-neutral-700 transition-colors"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-neutral-500 mb-8 uppercase tracking-widest font-medium">Powering elite facilities globally</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dumbbell" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> IRONWORKS</span>
<span className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-2">METRO<span className="font-light">FLEX</span></span>
<span className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:waves" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> EQUILIBRIUM</span>
<span className="text-lg font-bold tracking-tighter text-white font-sans flex items-center gap-2">CORE<span className="text-neutral-500">FIT</span></span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Everything you need to run your gym.</h2>
<p className="text-neutral-400 text-sm font-light">Engineered for reliability. Pulse handles the heavy lifting so you can focus on your members.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">


<div className="group relative rounded-xl border border-white/10 bg-neutral-900/20 p-8 overflow-hidden hover:bg-neutral-900/40 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:wallet" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Instant Payouts</h3>
<p className="text-sm text-neutral-400">Automated billing cycles and failed payment recovery.</p>
</div>
<div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all"></div>
</div><div className="group overflow-hidden hover:bg-neutral-900/40 transition-colors md:col-span-2 bg-neutral-900/20 border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:calendar-clock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Smart Scheduling</h3>
<p className="text-sm text-neutral-400 max-w-sm">Drag-and-drop class management with automated conflict detection and waitlist handling.</p>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-50 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
<div className="flex flex-col gap-3 w-full h-full border-white/10 border-l pt-6 pr-6 pb-6 pl-6 relative gap-x-3 gap-y-3">
<div className="w-full h-12 rounded bg-white/5 border border-white/5 flex items-center px-4 gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<div className="h-2 w-20 bg-neutral-700 rounded-full"></div>
</div>
<div className="w-full h-12 rounded bg-white/5 border border-white/5 flex items-center px-4 gap-3 ml-4">
<div className="w-2 h-2 rounded-full bg-indigo-500"></div>
<div className="h-2 w-24 bg-neutral-700 rounded-full"></div>
</div>
<div className="w-full h-12 rounded bg-white/5 border border-white/5 flex items-center px-4 gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<div className="h-2 w-16 bg-neutral-700 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/20 p-8 overflow-hidden hover:bg-neutral-900/40 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:fingerprint" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M14 13.12c0 2.38 0 6.38-1 8.88m4.29-.98c.12-.6.43-2.3.5-3.02M2 12a10 10 0 0 1 18-6M2 16h.01m19.79 0c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2m2.31 12c.21-.66.45-1.32.57-2M9 6.8a6 6 0 0 1 9 5.2v2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Access Control</h3>
<p className="text-sm text-neutral-400">Sync with turnstiles and door scanners for 24/7 access.</p>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/20 p-8 overflow-hidden hover:bg-neutral-900/40 transition-colors md:col-span-2">
<div className="relative z-10 max-w-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:message-square" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Automated Engagement</h3>
<p className="text-sm text-neutral-400">Trigger emails and push notifications based on member activity.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/3 h-full border-l border-white/10 hidden md:flex items-end justify-center pb-8">
<div className="w-48 p-3 rounded-t-lg rounded-bl-lg bg-white text-black text-xs font-medium shadow-lg translate-x-4">
                            Hey Alex! We haven't seen you in a week. Book a class for tomorrow?
                         </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Simple pricing.</h2>
<div className="flex items-center justify-center gap-3">
<span className="text-sm text-neutral-400">Monthly</span>

<label className="flex items-center cursor-pointer relative" htmlFor="pricing-toggle">
<input className="sr-only toggle-checkbox" id="pricing-toggle" type="checkbox"/>
<div className="w-11 h-6 bg-neutral-800 border border-white/10 rounded-full toggle-label transition-colors"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform translate-x-0 toggle-checkbox:checked:translate-x-5"></div>
</label>
<span className="text-sm text-white font-medium">Yearly <span className="text-xs text-emerald-400 ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">

<div className="rounded-2xl border border-white/10 bg-black p-8">
<h3 className="text-base font-medium text-white mb-2">Starter</h3>
<div className="text-3xl font-medium text-white tracking-tight mb-4">$199<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 pb-8 border-b border-white/5">Perfect for boutique studios.</p>
<ul className="flex flex-col gap-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Up to 200 members</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Basic scheduling</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Payment processing</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">Start Trial</button>
</div>

<div className="rounded-2xl border border-white/20 bg-neutral-900/40 p-8 relative shadow-2xl shadow-black/50 scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
<h3 className="text-base font-medium text-white mb-2">Growth</h3>
<div className="text-3xl font-medium text-white tracking-tight mb-4">$399<span className="text-sm text-neutral-500 font-normal">/mo</span></div>
<p className="text-sm text-neutral-400 mb-8 pb-8 border-b border-white/5">For scaling commercial gyms.</p>
<ul className="flex flex-col gap-3 mb-8">
<li className="flex items-center gap-2 text-sm text-white"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Up to 1,000 members</li>
<li className="flex items-center gap-2 text-sm text-white"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Advanced Analytics</li>
<li className="flex items-center gap-2 text-sm text-white"><svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> CRM Automation</li>
</ul>
<button className="w-full py-2.5 rounded bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">Get Started</button>
</div>

<div className="rounded-2xl border border-white/10 bg-black p-8">
<h3 className="text-base font-medium text-white mb-2">Scale</h3>
<div className="text-3xl font-medium text-white tracking-tight mb-4">Custom</div>
<p className="text-sm text-neutral-400 mb-8 pb-8 border-b border-white/5">For multi-location franchises.</p>
<ul className="flex flex-col gap-3 mb-8">
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Unlimited members</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Multi-location sync</li>
<li className="flex items-center gap-2 text-sm text-neutral-300"><svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Dedicated support</li>
</ul>
<button className="w-full py-2.5 rounded border border-white/10 text-sm font-medium hover:bg-white/5 transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<span className="text-white font-medium tracking-tight text-lg block mb-4">PULSE</span>
<p className="text-xs text-neutral-500 max-w-xs">Building the infrastructure for the next generation of fitness businesses.</p>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Product</h4>
<ul className="flex flex-col gap-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hardware</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Company</h4>
<ul className="flex flex-col gap-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4">Legal</h4>
<ul className="flex flex-col gap-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-neutral-600">© 2023 Pulse Systems Inc. All rights reserved.</p>
<div className="flex gap-4">
<svg aria-hidden="true" className="iconify text-neutral-500 hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-neutral-500 hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:github" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
<svg aria-hidden="true" className="iconify text-neutral-500 hover:text-white transition-colors cursor-pointer iconify--lucide" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
